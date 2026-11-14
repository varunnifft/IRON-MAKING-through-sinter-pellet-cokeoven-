"""
File / link ingestion: read any uploaded source (Excel, CSV, PDF, Word, text, JSON, HTML, web or
Google Sheets links, the original calculation module workbook, or a master Excel exported by this app)
and pull out every input the calculation needs.

Every parser returns an Extraction:
    params  : {key: value}            plant / operating inputs
    prices  : {key: value}            utility & by-product prices
    coals   : [ {name, pct, Ash, ...} ]  one dict per coal
    targets : DataFrame or None
    coef    : {key: value}            coefficient overrides
    lab     : DataFrame or None       lab calibration rows
    notes   : [str]                   what was found / what could not be read
"""
from __future__ import annotations

import difflib
import io
import json
import math
import re
from dataclasses import dataclass, field

import numpy as np
import pandas as pd

import engine as E

# ---------------------------------------------------------------------------
# Matching helpers
# ---------------------------------------------------------------------------
_STOP = {"margin", "predicted", "required", "theoretical", "reference", "model", "fitted", "default", "helper",
         "per day", "per oven", "yield on", "check"}


def norm(s) -> str:
    s = str(s).lower()
    s = s.replace("°c", "degc").replace("º", "deg").replace("₂", "2").replace("₃", "3")
    s = re.sub(r"\(.*?\)", " ", s)          # drop units in brackets
    s = re.sub(r"[^a-z0-9%<>.\- /+]", " ", s)
    s = re.sub(r"\s+", " ", s).strip(" .-:/")
    return s


def _wordin(alias, label):
    return re.search(r"(^|[\s/])" + re.escape(alias) + r"($|[\s/%])", label) is not None


def _build_index(items):
    """items: list of (key, label, aliases) -> list of (key, normalised name)."""
    idx = []
    for key, label, aliases in items:
        idx.append((key, norm(label)))
        for a in aliases:
            idx.append((key, norm(a)))
    return idx


PLANT_IDX = _build_index([(p["key"], p["label"], p["aliases"]) for p in E.P])
PRICE_IDX = _build_index([(p[0], p[1], p[4]) for p in E.PRICES])
COAL_IDX = _build_index([(c[0], c[1], c[4]) for c in E.COAL_PROPS]
                        + [("_skip", "fixed carbon", ["fc", "oxygen", "oxygen by difference", "plastic range", "reactives",
                                                      "inert / reactive ratio", "basicity ratio", "modified basicity index",
                                                      "mbi", "alkali in coal", "dry mass fraction", "blend % check"])])
LAB_IDX = _build_index([(c, c, []) for c in E.LAB_COLS])


def match(label, idx, fuzzy=0.88):
    """Return the best key for a label, or None."""
    if label is None or (isinstance(label, float) and math.isnan(label)):
        return None
    n = norm(label)
    if not n or len(n) > 90:
        return None
    for key, a in idx:          # exact
        if n == a:
            return key
    if any(w in n for w in _STOP):
        return None
    best, bl = None, 0
    for key, a in idx:          # whole-word containment, longest alias wins
        if len(a) >= 2 and _wordin(a, n) and len(a) / len(n) >= 0.45 and len(a) > bl:
            best, bl = key, len(a)
    if best:
        return best
    names = [a for _, a in idx]
    m = difflib.get_close_matches(n, names, n=1, cutoff=fuzzy)
    if m:
        return next(k for k, a in idx if a == m[0])
    return None


_PRICE_WORDS = re.compile(r"\b(price|cost|credit|rate|rs|inr|tariff)\b", re.I)


def match_kv(label):
    """Key/value label -> (key, "plant" | "price") ; price words send it to the price list first."""
    if _PRICE_WORDS.search(str(label)):
        k = match(label, PRICE_IDX)
        if k:
            return k, "price"
        return None, None
    k = match(label, PLANT_IDX)
    if k:
        return k, "plant"
    k = match(label, PRICE_IDX)
    return (k, "price") if k else (None, None)


def to_num(v):
    if v is None:
        return None
    if isinstance(v, (int, float, np.integer, np.floating)) and not isinstance(v, bool):
        f = float(v)
        return None if math.isnan(f) else f
    s = str(v).strip().replace(",", "")
    m = re.fullmatch(r"[-+]?\d*\.?\d+(e[-+]?\d+)?\s*%?", s, re.I)
    if m:
        return float(s.rstrip("%").strip())
    return None


def choice_value(key, v):
    """Map free text onto the option list of a choice parameter."""
    opts = E.PLANT_PARAMS[key]["options"]
    if v is None:
        return None
    s = str(v).strip().lower()
    for o in opts:
        if s == o.lower():
            return o
    for o in opts:
        if o.lower().split()[0] in s:
            return o
    if key == "oven_type":
        if "by-product" in s or "byproduct" in s:
            return "Recovery"
        if "heat recovery" in s or "non" in s:
            return "Non-recovery"
    if key == "quench" and ("dry" in s):
        return "CDQ"
    return None


@dataclass
class Extraction:
    source: str = ""
    params: dict = field(default_factory=dict)
    prices: dict = field(default_factory=dict)
    coals: list = field(default_factory=list)
    targets: pd.DataFrame | None = None
    coef: dict = field(default_factory=dict)
    lab: pd.DataFrame | None = None
    notes: list = field(default_factory=list)
    kind: str = ""

    def count(self):
        return (len(self.params) + len(self.prices) + sum(len(c) - 1 for c in self.coals)
                + (0 if self.lab is None else len(self.lab)) + (0 if self.targets is None else len(self.targets))
                + len(self.coef))

    def summary(self):
        s = []
        if self.params: s.append(f"{len(self.params)} plant/operating inputs")
        if self.prices: s.append(f"{len(self.prices)} prices")
        if self.coals: s.append(f"{len(self.coals)} coal(s)")
        if self.lab is not None and len(self.lab): s.append(f"{len(self.lab)} lab rows")
        if self.targets is not None and len(self.targets): s.append(f"{len(self.targets)} targets")
        if self.coef: s.append(f"{len(self.coef)} coefficients")
        return ", ".join(s) if s else "nothing recognised"


# ---------------------------------------------------------------------------
# Generic grid (any 2-D table of cells) -> Extraction
# ---------------------------------------------------------------------------
def _cells(df: pd.DataFrame):
    g = df.copy()
    if not isinstance(g.columns, pd.RangeIndex) and any(isinstance(c, str) for c in g.columns):
        cols = [" ".join(str(x) for x in c) if isinstance(c, tuple) else c for c in g.columns]
        g = pd.concat([pd.DataFrame([cols], columns=g.columns), g], ignore_index=True)
    g.columns = range(g.shape[1])
    g = g.reset_index(drop=True)
    return g.where(pd.notna(g), None)


def _is_text(v):
    return isinstance(v, str) and v.strip() != "" and to_num(v) is None


def parse_grid(df: pd.DataFrame, ex: Extraction, where=""):
    g = _cells(df)
    if g.empty:
        return
    nrows, ncols = g.shape
    used_rows = set()

    # --- lab table (header row with >= 5 lab columns)
    for i in range(min(nrows, 40)):
        hits = {j: match(g.iat[i, j], LAB_IDX, 0.8) for j in range(ncols) if _is_text(g.iat[i, j])}
        hits = {j: k for j, k in hits.items() if k}
        if len(set(hits.values())) >= 5:
            rows = []
            for r in range(i + 1, nrows):
                vals = {hits[j]: g.iat[r, j] for j in hits}
                if all(v is None for v in vals.values()):
                    if rows:
                        break
                    continue
                if sum(to_num(v) is not None for v in vals.values()) < 3:
                    continue
                rows.append(vals)
                used_rows.add(r)
            if rows:
                lab = pd.DataFrame(rows)
                for c in E.LAB_COLS:
                    if c not in lab.columns:
                        lab[c] = None
                ex.lab = pd.concat([ex.lab, lab[E.LAB_COLS]]) if ex.lab is not None else lab[E.LAB_COLS]
                ex.notes.append(f"{where}: lab table with {len(rows)} rows")
            used_rows.update(range(i, i + 1))
            break

    # --- coal table, coals as rows (header row with name + >= 3 properties)
    found_coal = False
    for i in range(min(nrows, 60)):
        if i in used_rows:
            continue
        hits = {}
        for j in range(ncols):
            if _is_text(g.iat[i, j]):
                k = match(g.iat[i, j], COAL_IDX)
                if k and k not in hits.values():
                    hits[j] = k
        props = [k for k in hits.values() if k != "name" and not k.startswith("_")]
        if len(props) >= 3 and ("name" in hits.values() or _is_text(g.iat[min(i + 1, nrows - 1), 0])):
            namecol = next((j for j, k in hits.items() if k == "name"), None)
            if namecol is None:
                namecol = next((j for j in range(ncols) if j not in hits), 0)
            for r in range(i + 1, nrows):
                nm = g.iat[r, namecol]
                if nm is None or (not _is_text(nm) and to_num(nm) is None):
                    if any(to_num(g.iat[r, j]) is not None for j in hits):
                        nm = f"Coal {r - i}"
                    else:
                        break
                rec = {"name": str(nm).strip()}
                for j, k in hits.items():
                    if k == "name" or k.startswith("_"):
                        continue
                    v = to_num(g.iat[r, j])
                    if v is not None:
                        rec[k] = v
                if len(rec) >= 3 and not match(rec["name"], COAL_IDX, 0.95) and norm(rec["name"]) not in ("blend", "total"):
                    ex.coals.append(rec)
                    used_rows.add(r)
            used_rows.add(i)
            found_coal = True
            ex.notes.append(f"{where}: coal table (coals in rows)")
            break

    # --- coal table, coals as columns (label column with >= 4 property rows)
    if not found_coal:
        for j in range(min(ncols, 6)):
            rows_hit = {}
            for i in range(nrows):
                if _is_text(g.iat[i, j]):
                    k = match(g.iat[i, j], COAL_IDX)
                    if k and k not in rows_hit.values():
                        rows_hit[i] = k
            props = [k for k in rows_hit.values() if k != "name" and not k.startswith("_")]
            if len(props) >= 4:
                first = min(i for i, k in rows_hit.items())
                name_row = next((i for i, k in rows_hit.items() if k == "name"), None)
                if name_row is None:
                    name_row = first - 1 if first > 0 else None
                for c in range(j + 1, ncols):
                    nums = sum(to_num(g.iat[i, c]) is not None for i in rows_hit if rows_hit[i] != "name")
                    if nums < 3:
                        continue
                    nm = g.iat[name_row, c] if name_row is not None else None
                    nm = str(nm).strip() if nm is not None else f"Coal {c - j}"
                    if norm(nm) in ("blend", "total", "unit", "basis", "basis / note", "note"):
                        continue
                    rec = {"name": nm}
                    for i, k in rows_hit.items():
                        if k == "name" or k.startswith("_"):
                            continue
                        v = to_num(g.iat[i, c])
                        if v is not None:
                            rec[k] = v
                    ex.coals.append(rec)
                used_rows.update(rows_hit.keys())
                found_coal = True
                ex.notes.append(f"{where}: coal table (coals in columns)")
                break

    # --- key / value rows for plant inputs and prices
    for i in range(nrows):
        if i in used_rows:
            continue
        for j in range(min(ncols, 4)):
            lab_ = g.iat[i, j]
            if not _is_text(lab_):
                continue
            key, dom = match_kv(lab_)
            if not key:
                continue
            val = None
            for c in range(j + 1, min(ncols, j + 5)):
                v = g.iat[i, c]
                if v is None:
                    continue
                if dom == "plant" and E.PLANT_PARAMS[key]["kind"] == "choice":
                    val = choice_value(key, v)
                elif dom == "plant" and E.PLANT_PARAMS[key]["kind"] == "text":
                    val = str(v).strip()
                else:
                    val = to_num(v)
                if val is not None:
                    break
            if val is not None:
                (ex.params if dom == "plant" else ex.prices)[key] = val
            break


# ---------------------------------------------------------------------------
# Free text (PDF / Word / web page / txt) -> Extraction
# ---------------------------------------------------------------------------
_NUM = r"([-+]?\d[\d,]*\.?\d*)"


def parse_text(text: str, ex: Extraction, where="", default_coal_name=None):
    coal = {}
    coal_name = None
    for raw in text.splitlines():
        line = raw.strip()
        if not line or len(line) > 160:
            continue
        m = re.match(r"^(?:coal\s*(?:name|source)|name of coal|sample(?:\s*name)?|source)\s*[:=\-]\s*(.+)$", line, re.I)
        if m and not coal_name:
            coal_name = m.group(1).strip()[:60]
            continue
        # label ... value [unit]
        m = re.match(r"^(.{2,70}?)\s*[:=\-–]?\s+" + _NUM + r"\s*([a-zA-Z%/°0-9 .]*)$", line)
        if not m:
            m2 = re.match(r"^(.{2,70}?)\s*[:=]\s*([A-Za-z][A-Za-z +\-()]{1,30})$", line)
            if m2:
                key = match(m2.group(1), PLANT_IDX)
                if key and E.PLANT_PARAMS[key]["kind"] in ("choice", "text"):
                    v = m2.group(2).strip()
                    v = choice_value(key, v) if E.PLANT_PARAMS[key]["kind"] == "choice" else v
                    if v:
                        ex.params[key] = v
            continue
        label, val = m.group(1), to_num(m.group(2))
        if val is None:
            continue
        key, dom = match_kv(label)
        if key and dom == "price":
            ex.prices[key] = val
            continue
        if key and E.PLANT_PARAMS[key]["kind"] == "num":
            ex.params[key] = val
            continue
        key = match(label, COAL_IDX)
        if key and key != "name" and not key.startswith("_"):
            coal[key] = val
    props = [k for k in coal if k not in ("pct", "Price", "Min", "Max")]
    if len(props) >= 4:
        coal["name"] = coal_name or default_coal_name or "Coal from " + where
        ex.coals.append(coal)
        ex.notes.append(f"{where}: single-coal analysis ({len(props)} properties) read from text")


# ---------------------------------------------------------------------------
# Format-specific readers
# ---------------------------------------------------------------------------
MASTER_SHEETS = {"Plant_Inputs", "Coal_Blend", "Prices", "Targets"}
MODULE_SHEETS = {"Oven_Config", "Operations", "Coal_Blend", "Quality_Predict"}


def read_master(xls: pd.ExcelFile, ex: Extraction):
    ex.kind = "Master Excel (this app)"
    if "README" in xls.sheet_names:
        rd = xls.parse("README", header=None)
        for _, r in rd.iterrows():
            if len(r) > 1 and r.iloc[0] == "Coefficient set to use" and r.iloc[1] in ("Default", "Fitted"):
                ex.params["_coefset"] = r.iloc[1]
    pi = xls.parse("Plant_Inputs")
    for _, r in pi.iterrows():
        k = r.get("Key")
        if k in E.PLANT_PARAMS and not E.blank(r.get("Value")):
            kind = E.PLANT_PARAMS[k]["kind"]
            v = r["Value"]
            ex.params[k] = choice_value(k, v) if kind == "choice" else (str(v) if kind == "text" else to_num(v))
    cb = xls.parse("Coal_Blend")
    lab2key = {E.COAL_LABEL[k] + (f" [{E.COAL_UNIT[k]}]" if E.COAL_UNIT[k] else ""): k for k in E.COAL_KEYS}
    cb = cb.rename(columns={c: lab2key.get(c, c) for c in cb.columns})
    for _, r in cb.iterrows():
        if E.blank(r.get("name")) or str(r["name"]).strip().upper().startswith("TOTAL"):
            continue
        rec = {"name": str(r["name"])}
        for k in E.COAL_NUM_KEYS:
            if k in r and to_num(r[k]) is not None:
                rec[k] = to_num(r[k])
        ex.coals.append(rec)
    if "Prices" in xls.sheet_names:
        pr = xls.parse("Prices")
        for _, r in pr.iterrows():
            if r.get("Key") in E.PRICE_KEYS and to_num(r.get("Value")) is not None:
                ex.prices[r["Key"]] = to_num(r["Value"])
    if "Targets" in xls.sheet_names:
        t = xls.parse("Targets")
        if "key" in t.columns:
            t["Optimise"] = t["Optimise"].map(lambda v: str(v).strip().lower() in ("true", "1", "yes", "y"))
            t["Min"] = t["Min"].map(to_num)
            t["Max"] = t["Max"].map(to_num)
            ex.targets = t
    if "Coefficients" in xls.sheet_names:
        cf = xls.parse("Coefficients")
        for _, r in cf.iterrows():
            k, v = r.get("Key"), to_num(r.get("Value"))
            if v is None or E.blank(k):
                continue
            if "." in str(k):
                m, i = str(k).split(".")
                ex.coef.setdefault(m, list(E.DEFAULT_COEF[m]))
                ex.coef[m][int(i)] = v
            elif k in E.CONST:
                ex.coef[k] = v
    if "Lab_Data" in xls.sheet_names:
        lab = xls.parse("Lab_Data")
        if len(lab):
            ex.lab = lab
    if "Levers" in xls.sheet_names:
        ex.notes.append("Optimiser lever settings found (sheet Levers)")
        ex.levers = xls.parse("Levers")
    ex.notes.append("Read as a master input file exported by this app")


def read_module(xls: pd.ExcelFile, ex: Extraction):
    """The original Coke_Quality_Prediction_Module.xlsx (labels in column B, values in column C)."""
    ex.kind = "Coke quality calculation module workbook"
    for sh in ("Oven_Config", "Operations"):
        if sh not in xls.sheet_names:
            continue
        df = xls.parse(sh, header=None)
        for _, r in df.iterrows():
            if len(r) < 3:
                continue
            lab_, v = r.iloc[1], r.iloc[2]
            if not isinstance(lab_, str):
                continue
            key = next((p["key"] for p in E.P if norm(p["label"]) == norm(lab_)), None)
            if key in ("M_ovr",) and (v is None or (isinstance(v, float) and math.isnan(v))):
                continue
            if key == "charge_ovr" or norm(lab_).startswith("coal charge per oven"):
                continue
            if key and not (isinstance(v, str) and v.startswith("=")) and not E.blank(v):
                kind = E.PLANT_PARAMS[key]["kind"]
                ex.params[key] = choice_value(key, v) if kind == "choice" else (str(v) if kind == "text" else to_num(v))
            elif key is None and norm(lab_) == "heating fuel":
                ex.params["fuel_type"] = choice_value("fuel_type", v)
    if "Coal_Blend" in xls.sheet_names:
        df = xls.parse("Coal_Blend", header=None)
        tmp = Extraction()
        parse_grid(df, tmp, "Coal_Blend")
        ex.coals += [c for c in tmp.coals if c.get("pct", 0) > 0 or any(k for k in c if k not in ("name", "pct"))]
        ex.coals = [c for c in ex.coals if not str(c["name"]).lower().startswith("spare") or c.get("pct", 0) > 0]
    if "Lab_Calibration" in xls.sheet_names:
        df = xls.parse("Lab_Calibration", header=None)
        tmp = Extraction()
        parse_grid(df, tmp, "Lab_Calibration")
        if tmp.lab is not None:
            ex.lab = tmp.lab.dropna(subset=["Batch ID"])
    if "Quality_Predict" in xls.sheet_names:
        df = xls.parse("Quality_Predict", header=None)
        for _, r in df.iterrows():
            if len(r) > 2 and r.iloc[1] == "Coefficient set to use" and r.iloc[2] in ("Default", "Fitted"):
                ex.params["_coefset"] = r.iloc[2]
    if "Deviation_Actions" in xls.sheet_names:
        df = xls.parse("Deviation_Actions", header=None)
        tg = E.default_targets()
        name2key = {"csr": "CSR", "cri": "CRI", "m40": "M40", "m10": "M10", "coke ash": "ash_coke", "coke sulphur": "S_coke",
                    "coke phosphorus": "P_coke", "coke vm": "VM_coke", "coke moisture": "M_coke",
                    "bf coke yield": "bf_kgt", "blend ro": "b_Ro", "blend mf": "b_MF", "blend vm": "b_VM",
                    "blend ash": "b_Ash", "blend inertinite": "b_Inert", "blend mbi": "b_MBI", "plastic range": "b_Prange",
                    "coking time margin": "t_margin", "flue temperature std. dev.": "T_sd",
                    "heating efficiency": "eff", "excess air lambda": "lam"}
        hit = 0
        for _, r in df.iterrows():
            if len(r) < 5 or not isinstance(r.iloc[1], str):
                continue
            nm = norm(r.iloc[1].split(",")[0])
            k = name2key.get(nm)
            if k and k in tg["key"].values:
                mn, mx = to_num(r.iloc[3]), to_num(r.iloc[4])
                tg.loc[tg.key == k, "Min"] = mn
                tg.loc[tg.key == k, "Max"] = mx
                hit += 1
        if hit:
            ex.targets = tg
    ex.notes.append("Read as the original calculation module workbook (input sheets only)")


def read_excel_bytes(data: bytes, ex: Extraction, name=""):
    xls = pd.ExcelFile(io.BytesIO(data))
    sheets = set(xls.sheet_names)
    if MASTER_SHEETS <= sheets:
        return read_master(xls, ex)
    if {"Oven_Config", "Operations", "Coal_Blend"} <= sheets:
        return read_module(xls, ex)
    ex.kind = "Excel workbook"
    for sh in xls.sheet_names:
        df = xls.parse(sh, header=None)
        parse_grid(df, ex, f"{name} / {sh}")


def read_csv_bytes(data: bytes, ex: Extraction, name=""):
    ex.kind = "CSV / text table"
    txt = data.decode("utf-8", errors="ignore")
    sep = "\t" if txt.count("\t") > txt.count(",") else ("," if txt.count(",") >= txt.count(";") else ";")
    df = pd.read_csv(io.StringIO(txt), header=None, sep=sep, engine="python", on_bad_lines="skip")
    parse_grid(df, ex, name)


def read_pdf_bytes(data: bytes, ex: Extraction, name=""):
    ex.kind = "PDF"
    text_all = []
    try:
        import pdfplumber
        with pdfplumber.open(io.BytesIO(data)) as pdf:
            for pn, page in enumerate(pdf.pages, 1):
                for t in page.extract_tables() or []:
                    if t and len(t) > 1:
                        parse_grid(pd.DataFrame(t), ex, f"{name} p{pn} table")
                text_all.append(page.extract_text() or "")
    except ImportError:  # phone version: text only via pdfminer
        from pdfminer.high_level import extract_text
        text_all.append(extract_text(io.BytesIO(data)) or "")
    text = "\n".join(text_all)
    if not text.strip():
        ex.notes.append(f"{name}: no text layer found (scanned PDF). Enter these values manually or upload an Excel/CSV version.")
        return
    coals_before = len(ex.coals)
    tmp = Extraction()
    parse_text(text, tmp, name, default_coal_name=re.sub(r"\.[^.]+$", "", name))
    for k, v in tmp.params.items():
        ex.params.setdefault(k, v)
    for k, v in tmp.prices.items():
        ex.prices.setdefault(k, v)
    if len(ex.coals) == coals_before:
        ex.coals += tmp.coals
    ex.notes += tmp.notes


def read_docx_bytes(data: bytes, ex: Extraction, name=""):
    import docx
    ex.kind = "Word document"
    d = docx.Document(io.BytesIO(data))
    for ti, t in enumerate(d.tables):
        rows = [[c.text for c in r.cells] for r in t.rows]
        parse_grid(pd.DataFrame(rows), ex, f"{name} table {ti + 1}")
    text = "\n".join(p.text for p in d.paragraphs)
    n0 = len(ex.coals)
    tmp = Extraction()
    parse_text(text, tmp, name, default_coal_name=re.sub(r"\.[^.]+$", "", name))
    for k, v in tmp.params.items():
        ex.params.setdefault(k, v)
    for k, v in tmp.prices.items():
        ex.prices.setdefault(k, v)
    if len(ex.coals) == n0:
        ex.coals += tmp.coals


def read_json_bytes(data: bytes, ex: Extraction, name=""):
    ex.kind = "JSON"
    obj = json.loads(data.decode("utf-8", errors="ignore"))

    def walk(o, prefix=""):
        if isinstance(o, dict):
            if any(match(k, COAL_IDX) == "name" for k in o) and sum(bool(match(k, COAL_IDX)) for k in o) >= 3:
                rec = {}
                for k, v in o.items():
                    ck = match(k, COAL_IDX)
                    if ck == "name":
                        rec["name"] = str(v)
                    elif ck and to_num(v) is not None:
                        rec[ck] = to_num(v)
                ex.coals.append(rec)
                return
            for k, v in o.items():
                if isinstance(v, (dict, list)):
                    walk(v, k)
                    continue
                pk = match(k, PLANT_IDX)
                if pk:
                    kind = E.PLANT_PARAMS[pk]["kind"]
                    val = choice_value(pk, v) if kind == "choice" else (str(v) if kind == "text" else to_num(v))
                    if val is not None:
                        ex.params[pk] = val
                    continue
                prk = match(k, PRICE_IDX)
                if prk and to_num(v) is not None:
                    ex.prices[prk] = to_num(v)
        elif isinstance(o, list):
            for v in o:
                walk(v, prefix)
    walk(obj)


def read_html_bytes(data: bytes, ex: Extraction, name=""):
    ex.kind = "Web page"
    html = data.decode("utf-8", errors="ignore")
    try:
        for i, t in enumerate(pd.read_html(io.StringIO(html), header=None)):
            parse_grid(t, ex, f"{name} table {i + 1}")
    except Exception:
        pass
    try:
        from bs4 import BeautifulSoup
        text = BeautifulSoup(html, "html.parser").get_text("\n")
    except Exception:
        text = re.sub(r"<[^>]+>", "\n", html)
    tmp = Extraction()
    parse_text(text, tmp, name)
    for k, v in tmp.params.items():
        ex.params.setdefault(k, v)
    for k, v in tmp.prices.items():
        ex.prices.setdefault(k, v)
    if not ex.coals:
        ex.coals += tmp.coals


IMAGE_EXT = {"png", "jpg", "jpeg", "bmp", "gif", "tif", "tiff", "webp"}


def read_image_bytes(data: bytes, ex: Extraction, name=""):
    ex.kind = "Image"
    try:
        import pytesseract
        from PIL import Image
        text = pytesseract.image_to_string(Image.open(io.BytesIO(data)))
        parse_text(text, ex, name, default_coal_name=re.sub(r"\.[^.]+$", "", name))
        ex.notes.append(f"{name}: read with OCR - check values carefully")
    except Exception:
        ex.notes.append(f"{name}: image kept for reference. Text recognition (OCR) is not installed, so enter "
                        f"its values in the review table below or on the Inputs page.")


def sniff(data: bytes, name: str, ctype: str = "") -> str:
    ext = name.lower().rsplit(".", 1)[-1] if "." in name else ""
    ctype = (ctype or "").lower()
    if data[:4] == b"%PDF" or ext == "pdf" or "pdf" in ctype:
        return "pdf"
    if data[:2] == b"PK":
        if ext == "docx" or "wordprocessing" in ctype:
            return "docx"
        return "xlsx"
    if data[:8] == b"\xd0\xcf\x11\xe0\xa1\xb1\x1a\xe1":
        return "xls"
    if ext in IMAGE_EXT or ctype.startswith("image/"):
        return "image"
    head = data[:600].lstrip().lower()
    if ext in ("html", "htm") or "html" in ctype or head.startswith(b"<!doctype html") or head.startswith(b"<html"):
        return "html"
    if ext == "json" or "json" in ctype or head[:1] in (b"{", b"["):
        return "json"
    if ext in ("csv", "tsv") or "csv" in ctype:
        return "csv"
    return "txt"


def read_bytes(data: bytes, name: str, ctype: str = "") -> Extraction:
    ex = Extraction(source=name)
    kind = sniff(data, name, ctype)
    try:
        if kind in ("xlsx", "xls"):
            read_excel_bytes(data, ex, name)
        elif kind == "pdf":
            read_pdf_bytes(data, ex, name)
        elif kind == "docx":
            read_docx_bytes(data, ex, name)
        elif kind == "csv":
            read_csv_bytes(data, ex, name)
        elif kind == "json":
            read_json_bytes(data, ex, name)
        elif kind == "html":
            read_html_bytes(data, ex, name)
        elif kind == "image":
            read_image_bytes(data, ex, name)
        else:
            ex.kind = "Text"
            txt = data.decode("utf-8", errors="ignore")
            # try as delimited table first
            if txt.count("\n") > 1 and (txt.count(",") > 3 or txt.count("\t") > 3):
                try:
                    read_csv_bytes(data, ex, name)
                except Exception:
                    pass
            parse_text(txt, ex, name, default_coal_name=re.sub(r"\.[^.]+$", "", name))
    except Exception as err:  # never crash the app on a bad file
        ex.notes.append(f"{name}: could not be read ({type(err).__name__}: {err})")
    # de-duplicate coals by name inside one file
    seen = {}
    for c in ex.coals:
        seen.setdefault(str(c.get("name")).strip().lower(), {}).update(c)
    ex.coals = list(seen.values())
    return ex


def link_to_download(url: str) -> str:
    """Turn Google Sheets / Drive / OneDrive share links into direct downloads."""
    u = url.strip()
    m = re.search(r"docs.google.com/spreadsheets/d/([\w-]+)", u)
    if m:
        return f"https://docs.google.com/spreadsheets/d/{m.group(1)}/export?format=xlsx"
    m = re.search(r"docs.google.com/document/d/([\w-]+)", u)
    if m:
        return f"https://docs.google.com/document/d/{m.group(1)}/export?format=docx"
    m = re.search(r"drive.google.com/file/d/([\w-]+)", u)
    if m:
        return f"https://drive.google.com/uc?export=download&id={m.group(1)}"
    if "dropbox.com" in u:
        return re.sub(r"[?&]dl=0", "", u) + ("&" if "?" in u else "?") + "dl=1"
    if ("1drv.ms" in u or "sharepoint.com" in u) and "download=1" not in u:
        return u + ("&" if "?" in u else "?") + "download=1"
    return u


def read_link(url: str, timeout=25) -> Extraction:
    import requests
    dl = link_to_download(url)
    try:
        resp = requests.get(dl, timeout=timeout, headers={"User-Agent": "coke-quality-app/1.0"})
        resp.raise_for_status()
    except Exception as err:
        ex = Extraction(source=url, kind="Link")
        ex.notes.append(f"{url}: could not be downloaded ({err}). Check the link is shared publicly, "
                        f"or download the file and upload it instead.")
        return ex
    name = url.split("?")[0].rstrip("/").split("/")[-1] or "link"
    ex = read_bytes(resp.content, name, resp.headers.get("content-type", ""))
    ex.source = url
    ex.kind = "Link -> " + (ex.kind or "?")
    return ex


# ---------------------------------------------------------------------------
# Merge several extractions into one consolidated set (later sources win)
# ---------------------------------------------------------------------------
def merge(extractions: list[Extraction], base_params: dict, base_coals: pd.DataFrame, base_prices: dict,
          coal_mode: str = "update"):
    """Return (params_table, coals_df, prices, targets, coef, lab, levers).

    params_table rows: key, Parameter, Unit, Current, From files, Source, Conflict, Use
    coal_mode: "update" (add new coals, update matching names) or "replace" (only uploaded coals)."""
    cand = {}
    for ex in extractions:
        for k, v in ex.params.items():
            cand.setdefault(k, []).append((v, ex.source))
    rows = []
    for p in E.P:
        k = p["key"]
        cur = base_params.get(k)
        c = cand.get(k, [])
        vals = [v for v, _ in c]
        conflict = len({str(v) for v in vals}) > 1
        new = vals[-1] if vals else None
        rows.append(dict(key=k, Section=p["section"], Parameter=p["label"], Unit=p["unit"],
                         Current=None if E.blank(cur) else str(cur),
                         **{"From files": None if new is None else str(new)},
                         Source="; ".join(sorted({s for _, s in c})) if c else "",
                         Conflict=("Yes: " + " / ".join(dict.fromkeys(str(v) for v in vals))) if conflict else "",
                         Use=str(new) if new is not None else (None if E.blank(cur) else str(cur))))
    ptab = pd.DataFrame(rows)

    prices = dict(base_prices)
    for ex in extractions:
        prices.update({k: v for k, v in ex.prices.items() if v is not None})

    up = {}
    order = []
    for ex in extractions:
        for c in ex.coals:
            nm = str(c.get("name", "")).strip()
            key = nm.lower()
            if key not in up:
                order.append(key)
                up[key] = {"name": nm, "_src": ex.source}
            up[key].update({k: v for k, v in c.items() if v is not None})
            up[key]["_src"] = ex.source
    if coal_mode == "replace" and up:
        base = pd.DataFrame(columns=E.COAL_KEYS)
    else:
        base = base_coals.copy()
    base = base.reset_index(drop=True)
    names = {str(n).strip().lower(): i for i, n in enumerate(base["name"])}
    srcs = [""] * len(base)
    for key in order:
        rec = up[key]
        src = rec.pop("_src", "")
        if key in names:
            i = names[key]
            for k, v in rec.items():
                if k in base.columns:
                    base.at[i, k] = v
            srcs[i] = src
        else:
            row = E.empty_coal_row(rec["name"])
            missing = [k for k in E.COAL_NUM_KEYS if k not in rec and k not in ("pct", "Price", "Min", "Max")]
            row.update(rec)
            base = pd.concat([base, pd.DataFrame([row])], ignore_index=True)
            srcs.append(src + (f" (defaults used for: {', '.join(missing)})" if missing else ""))
    base["Source"] = srcs
    targets = next((ex.targets for ex in reversed(extractions) if ex.targets is not None), None)
    coef = {}
    for ex in extractions:
        coef.update(ex.coef)
    labs = [ex.lab for ex in extractions if ex.lab is not None and len(ex.lab)]
    lab = pd.concat(labs, ignore_index=True).drop_duplicates() if labs else None
    levers = next((getattr(ex, "levers", None) for ex in reversed(extractions) if getattr(ex, "levers", None) is not None), None)
    coefset = next((ex.params.get("_coefset") for ex in reversed(extractions) if ex.params.get("_coefset")), None)
    return ptab, base, prices, targets, coef, lab, levers, coefset
