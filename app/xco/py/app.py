"""
Coke Quality & Cost Optimisation app (Streamlit)
Run:  streamlit run app.py
Built on the calculation logic of Coke_Quality_Prediction_Module.xlsx.
"""
from __future__ import annotations

import io
import math
import os
from datetime import datetime

import numpy as np
import pandas as pd
import streamlit as st

import engine as E
import ingest as I
import master as M
import optimise as O

APP_DIR = os.path.dirname(os.path.abspath(__file__))
MASTER_DIR = os.path.join(APP_DIR, "masters")

st.set_page_config(page_title="Coke Quality & Cost Optimiser", page_icon="🔥", layout="wide")

PAGES = ["1. Upload files → master Excel", "2. Inputs (one page)", "3. Results: before vs after", "4. Optimise cost"]
EDITORS = ["coals", "targets", "lab", "levers"]


# ---------------------------------------------------------------------------
# State
# ---------------------------------------------------------------------------
def snapshot():
    s = st.session_state
    return dict(params=dict(s.params), coals=s.coals.copy(), prices=dict(s.prices), coef=dict(s.coef),
                coefset=s.coefset, lab=None if s.lab is None else s.lab.copy(), label=s.get("baseline_label", ""))


def init():
    s = st.session_state
    if "params" in s:
        return
    s.params = E.default_params()
    s.coals = E.default_coals()
    s.prices = E.default_prices()
    s.targets = E.default_targets()
    s.coef = E.default_coef()
    s.coefset = "Default"
    s.lab = E.example_lab()
    s.levers = O.default_levers(s.params)
    s.ver = 0
    s.staged = {}          # source -> Extraction
    s.master_bytes = None
    s.master_name = None
    s.opt = None
    s.applied = None
    s.last_page = None
    s.baseline_label = "Example data (as in the calculation module)"
    s.baseline = snapshot()
    sync_sources()


def sync_sources():
    s = st.session_state
    for n in EDITORS:
        v = s[n]
        s[n + "_src"] = None if v is None else v.copy()
    s.ver = s.get("ver", 0) + 1


def K(name):
    return f"{name}_{st.session_state.ver}"


def calc_state(st_dict):
    return E.calculate(st_dict["params"], st_dict["coals"], st_dict["prices"], st_dict["coef"],
                       st_dict["coefset"], st_dict["lab"])


def current_inputs():
    s = st.session_state
    return dict(params=s.params, coals=s.coals, prices=s.prices, coef=s.coef, coefset=s.coefset, lab=s.lab)


def safe_calc(d):
    try:
        return calc_state(d), None
    except Exception as err:
        return None, str(err)


def fmtv(key, v):
    return E.fmt(key, v)


def numfmt(v):
    if v is None or (isinstance(v, float) and math.isnan(v)):
        return "%.2f"
    v = float(v)
    if abs(v) >= 100 or (v.is_integer() and abs(v) >= 10):
        return "%.0f"
    if 0 < abs(v) < 0.1:
        return "%.3f"
    return "%.2f"


def build_master_bytes(results=None, sources=None):
    s = st.session_state
    return M.build_master(s.params, s.coals, s.prices, s.targets, s.coef, s.lab, s.levers, s.coefset,
                          results=results, sources=sources)


def save_master(data: bytes, prefix="Master_Input") -> str:
    os.makedirs(MASTER_DIR, exist_ok=True)
    name = f"{prefix}_{datetime.now():%Y%m%d_%H%M%S}.xlsx"
    try:
        with open(os.path.join(MASTER_DIR, name), "wb") as f:
            f.write(data)
    except OSError:
        pass
    return name


# ---------------------------------------------------------------------------
# Page 1: uploads
# ---------------------------------------------------------------------------
def page_upload():
    s = st.session_state
    st.header("1. Upload files and build the master Excel")
    st.write("Add any files that hold your plant data: the calculation module workbook, coal analysis certificates, "
             "lab reports, price lists, operating logs. Excel, CSV, PDF, Word, text, JSON, web pages and images are accepted. "
             "Add them one at a time or many at once; nothing is used until you press **Confirm**.")
    c1, c2 = st.columns([3, 2])
    with c1:
        files = st.file_uploader("Drop files here (any type, one or many)", accept_multiple_files=True, key=f"up_{s.get('up_ver', 0)}")
        for f in files or []:
            tag = f"{f.name} ({f.size:,} bytes)"
            if tag not in s.staged:
                with st.spinner(f"Reading {f.name} ..."):
                    s.staged[tag] = I.read_bytes(f.getvalue(), f.name, f.type or "")
    with c2:
        links = st.text_area("Or paste links, one per line (web pages, Google Sheets/Drive, OneDrive, Dropbox, direct file URLs)",
                             height=110, key=f"links_{s.get('up_ver', 0)}")
        if st.button("➕ Add links"):
            for u in [l.strip() for l in links.splitlines() if l.strip()]:
                if u not in s.staged:
                    with st.spinner(f"Fetching {u} ..."):
                        s.staged[u] = I.read_link(u)
        st.download_button("⬇️ Blank master template", M.build_master(E.default_params(), E.default_coals().iloc[0:0].reindex(columns=E.COAL_KEYS),
                                                                       {}, E.default_targets(), E.default_coef(), None),
                           file_name="Master_Input_Template.xlsx", help="Fill this in and upload it back if you prefer typing in Excel.")

    if not s.staged:
        st.info("No files added yet. You can also skip this step and type everything on the **Inputs** page.")
        return

    st.subheader("Files read so far")
    rows = [dict(Use=True, Source=k, Type=ex.kind, Found=ex.summary(), Notes=" | ".join(ex.notes)) for k, ex in s.staged.items()]
    tbl = st.data_editor(pd.DataFrame(rows), hide_index=True, disabled=["Source", "Type", "Found", "Notes"],
                         column_config={"Use": st.column_config.CheckboxColumn(help="Untick to leave this file out"),
                                        "Notes": st.column_config.TextColumn(width="large")}, key="staged_tbl")
    use = [r.Source for r in tbl.itertuples() if r.Use]
    cc1, cc2 = st.columns([1, 3])
    if cc1.button("🗑️ Clear all files"):
        s.staged = {}
        s.up_ver = s.get("up_ver", 0) + 1
        st.rerun()
    exs = [s.staged[k] for k in use]
    coal_mode = cc2.radio("Coals from files", ["Add to / update the current coal list", "Replace the coal list with the uploaded coals"],
                          horizontal=True)
    mode = "replace" if coal_mode.startswith("Replace") else "update"
    ptab, coals, prices, targets, coef, lab, levers, coefset = I.merge(exs, s.params, s.coals, s.prices, mode)

    st.subheader("Review before confirming")
    st.caption("The **Use** column is what goes into the master file. Edit it if a value was read wrongly. "
               "Rows marked in *Conflict* were found with different values in different files; the last file wins unless you change it.")
    show_all = st.toggle("Show all inputs (not only those found in files)", value=False)
    view = ptab if show_all else ptab[ptab["From files"].notna()]
    if view.empty:
        st.write("No plant / operating inputs were found in the files (coal data and prices may still have been found).")
        edited_p = view
    else:
        edited_p = st.data_editor(view, hide_index=True, key=f"rev_p_{len(use)}_{show_all}_{mode}",
                                  disabled=["key", "Section", "Parameter", "Unit", "Current", "From files", "Source", "Conflict"],
                                  column_config={"key": None})
    st.markdown("**Coal data after merge** (blend %, price and limits can also be edited later on the Inputs page)")
    coals_e = st.data_editor(coals, hide_index=True, num_rows="dynamic", key=f"rev_c_{len(use)}_{mode}",
                             column_config=coal_column_config(with_source=True))
    tot = pd.to_numeric(coals_e["pct"], errors="coerce").fillna(0).sum()
    (st.success if abs(tot - 100) < 0.01 else st.warning)(f"Blend total = {tot:.2f} %")
    with st.expander(f"Prices after merge ({sum(not E.blank(v) for v in prices.values())} entered)"):
        st.dataframe(pd.DataFrame([dict(Item=p[1], Value=prices.get(p[0]), Unit=p[2]) for p in E.PRICES]), hide_index=True)
    if lab is not None:
        st.caption(f"Lab calibration rows found: {len(lab)} (they replace the current lab table on confirm).")
    if targets is not None:
        st.caption("Targets found in the files will replace the current targets.")

    set_base = st.checkbox("Use the confirmed data as the **BEFORE** case on the Results page", value=True)
    if st.button("✅ Confirm and build master Excel", type="primary"):
        newp = dict(s.params)
        for _, r in edited_p.iterrows():
            k, v = r["key"], r["Use"]
            kind = E.PLANT_PARAMS[k]["kind"]
            if E.blank(v):
                newp[k] = None if kind == "num" else newp.get(k)
            elif kind == "num":
                newp[k] = I.to_num(v) if I.to_num(v) is not None else newp.get(k)
            elif kind == "choice":
                newp[k] = I.choice_value(k, v) or newp.get(k)
            else:
                newp[k] = str(v)
        s.params = newp
        s.coals = coals_e.drop(columns=["Source"], errors="ignore").reset_index(drop=True)
        s.prices = prices
        if targets is not None:
            s.targets = targets[["key", "Parameter", "Min", "Max", "Unit", "Optimise"]].reset_index(drop=True)
        if coef:
            s.coef.update(coef)
        if lab is not None:
            s.lab = lab.reset_index(drop=True)
        if coefset:
            s.coefset = coefset
        if levers is not None and "key" in levers.columns:
            s.levers = levers
        else:
            s.levers = O.default_levers(s.params)
        sources = [dict(Source=k, Type=s.staged[k].kind, Found=s.staged[k].summary(), Notes=" | ".join(s.staged[k].notes)) for k in use]
        res, err = safe_calc(current_inputs())
        s.master_bytes = build_master_bytes(res, sources)
        s.master_name = save_master(s.master_bytes)
        if set_base:
            s.baseline_label = f"Confirmed upload {datetime.now():%d-%m-%Y %H:%M}"
            s.baseline = snapshot()
        s.opt = None
        sync_sources()
        s.flash = f"Master Excel built from {len(use)} source(s) and loaded into the Inputs page." + (f" Calculation warning: {err}" if err else "")
        st.rerun()
    if s.master_bytes:
        st.download_button("⬇️ Download master Excel", s.master_bytes, file_name=s.master_name or "Master_Input.xlsx", type="primary")


def coal_column_config(with_source=False):
    cfg = {"name": st.column_config.TextColumn("Coal / material", width="medium", required=True),
           "pct": st.column_config.NumberColumn("Blend % (ar)", min_value=0.0, max_value=100.0, format="%.2f"),
           "Price": st.column_config.NumberColumn("Price Rs/t (optional)", min_value=0.0, format="%.0f",
                                                  help="Landed price, as received. Leave blank if unknown (counted as 0)."),
           "Min": st.column_config.NumberColumn("Min % (optimiser)", min_value=0.0, max_value=100.0, format="%.1f"),
           "Max": st.column_config.NumberColumn("Max % (optimiser)", min_value=0.0, max_value=100.0, format="%.1f")}
    for k in E.COAL_KEYS:
        if k not in cfg:
            cfg[k] = st.column_config.NumberColumn(f"{E.COAL_LABEL[k]} [{E.COAL_UNIT[k]}]" if E.COAL_UNIT[k] else E.COAL_LABEL[k],
                                                   format="%.3f" if k in ("P", "S", "Ro") else "%.2f" if k not in ("MF", "CV") else "%.0f")
    if with_source:
        cfg["Source"] = st.column_config.TextColumn("From file", disabled=True)
    return cfg


# ---------------------------------------------------------------------------
# Page 2: inputs
# ---------------------------------------------------------------------------
def page_inputs():
    s = st.session_state
    st.header("2. All inputs")
    st.caption("Everything the calculation needs is on this page. Values loaded from the master Excel appear here and can be edited. "
               "Prices are optional: leave a price blank if you do not have it.")
    p = dict(s.params)

    st.subheader("A. Oven configuration")
    cols = st.columns(5)
    for i, k in enumerate(["oven_type", "orient", "charging", "fuel_type", "quench"]):
        meta = E.PLANT_PARAMS[k]
        opts = meta["options"]
        cur = p.get(k) if p.get(k) in opts else meta["default"]
        p[k] = cols[i].selectbox(meta["label"], opts, index=opts.index(cur), key=K("in_" + k))

    st.subheader("B. Plant, charge and operating data")
    for sec in E.PLANT_SECTIONS:
        items = [q for q in E.P if q["section"] == sec and q["key"] not in ("oven_type", "orient", "charging", "fuel_type", "quench")]
        if not items:
            continue
        with st.expander(sec, expanded=sec in ("Chamber & charge", "Heating & carbonisation")):
            cols = st.columns(4)
            for i, q in enumerate(items):
                k = q["key"]
                lab = f"{q['label']}" + (f" [{q['unit']}]" if q["unit"] else "")
                c = cols[i % 4]
                if q["kind"] == "choice":
                    opts = q["options"]
                    cur = p.get(k) if p.get(k) in opts else q["default"]
                    p[k] = c.selectbox(lab, opts, index=opts.index(cur), key=K("in_" + k))
                elif q["kind"] == "text":
                    p[k] = c.text_input(lab, value="" if E.blank(p.get(k)) else str(p.get(k)), key=K("in_" + k))
                else:
                    v = p.get(k)
                    v = None if E.blank(v) else float(E.num(v))
                    ref = q["default"] if v is None else v
                    p[k] = c.number_input(lab, value=v, format=numfmt(ref), key=K("in_" + k),
                                          step=1.0 if numfmt(ref) == "%.0f" else 0.1 if numfmt(ref) == "%.2f" else 0.01,
                                          help=q["note"] or None, placeholder="blank")
    s.params = p

    st.subheader("C. Coal blend, analysis and prices")
    st.caption("One row per coal (or any other charge material). Add rows with the ➕ at the bottom of the table. "
               "Min % / Max % are the limits the optimiser may use (availability, contracts, coking-pressure limits).")
    s.coals = st.data_editor(s.coals_src, num_rows="dynamic", hide_index=True, key=K("ed_coals"),
                             column_config=coal_column_config())
    tot = pd.to_numeric(s.coals["pct"], errors="coerce").fillna(0).sum()
    missing = [str(n) for n, pr, pc in zip(s.coals["name"], s.coals["Price"], s.coals["pct"]) if E.blank(pr) and E.num(pc) > 0]
    c1, c2 = st.columns(2)
    (c1.success if abs(tot - 100) < 0.01 else c1.error)(f"Blend total = {tot:.2f} % " + ("(OK)" if abs(tot - 100) < 0.01 else "- must be 100 %"))
    if missing:
        c2.warning("No price for: " + ", ".join(missing) + ". Cost results count these as 0.")

    st.subheader("D. Other prices (optional)")
    cols = st.columns(4)
    pr = dict(s.prices)
    for i, (k, lab, unit, _, _) in enumerate(E.PRICES):
        v = pr.get(k)
        v = None if E.blank(v) else float(E.num(v))
        pr[k] = cols[i % 4].number_input(f"{lab} [{unit}]", value=v, format="%.2f", key=K("pr_" + k), placeholder="optional")
    s.prices = pr

    st.subheader("E. Targets")
    st.caption("Set the coke quality you want. Ticked rows must be met by the optimiser; all rows are checked on the Results page.")
    s.targets = st.data_editor(s.targets_src, hide_index=True, key=K("ed_targets"), disabled=["key", "Parameter", "Unit"],
                               column_config={"key": None, "Optimise": st.column_config.CheckboxColumn("Optimiser must meet")})

    with st.expander("F. Model coefficients and lab calibration (advanced)"):
        s.coefset = st.radio("Coefficient set", ["Default", "Fitted"], index=0 if s.coefset == "Default" else 1, horizontal=True,
                             key=K("coefset"), help="Fitted = regression on the lab rows below (needs at least terms + 3 complete rows).")
        fits = E.fit_models(s.lab, s.coef)
        if fits:
            st.dataframe(pd.DataFrame([dict(Model=m, Rows=v["n"], R2=round(v["r2"], 3), **{"Std error": round(v["se"], 3)},
                                            Coefficients=", ".join(f"{c:.4g}" for c in v["coef"]))
                                       for m, v in fits.items() if m != "Rs"]), hide_index=True)
        st.markdown("**Coefficients** (used when the set is Default)")
        rows = []
        for m, terms in E.COEF_TERMS.items():
            for i, term in enumerate(terms):
                rows.append(dict(Key=f"{m}.{i}", Model=m, Term=term, Value=s.coef[m][i], Default=E.DEFAULT_COEF[m][i]))
        for k, (v, lab, unit) in E.CONST.items():
            rows.append(dict(Key=k, Model="Constant", Term=f"{lab} [{unit}]", Value=s.coef.get(k, v), Default=v))
        ce = st.data_editor(pd.DataFrame(rows), hide_index=True, key=K("ed_coef"), disabled=["Key", "Model", "Term", "Default"])
        newc = dict(s.coef)
        for _, r in ce.iterrows():
            if E.blank(r["Value"]):
                continue
            if "." in r["Key"]:
                m, i = r["Key"].split(".")
                newc[m] = list(newc[m]); newc[m][int(i)] = float(r["Value"])
            else:
                newc[r["Key"]] = float(r["Value"])
        s.coef = newc
        st.markdown("**Lab results** (one row per batch; the pre-filled rows are EXAMPLE data - replace with yours)")
        s.lab = st.data_editor(s.lab_src if s.lab_src is not None else pd.DataFrame(columns=E.LAB_COLS),
                               num_rows="dynamic", hide_index=True, key=K("ed_lab"))

    st.divider()
    c1, c2, c3 = st.columns(3)
    if c1.button("📌 Set these inputs as the BEFORE case"):
        s.baseline_label = f"Inputs saved {datetime.now():%d-%m-%Y %H:%M}"
        s.baseline = snapshot()
        st.success("Saved as the BEFORE case. Further edits will show as AFTER on the Results page.")
    res, err = safe_calc(current_inputs())
    if err:
        st.error(err)
    data = build_master_bytes(res)
    c2.download_button("⬇️ Download master Excel (all inputs + results)", data, file_name=f"Master_Input_{datetime.now():%Y%m%d_%H%M}.xlsx")
    if res:
        c3.metric("Predicted CSR now", f"{res['CSR']:.1f} %", help="Full results on page 3")


# ---------------------------------------------------------------------------
# Page 3: results
# ---------------------------------------------------------------------------
def arrow(key, d):
    g = E.GOOD_DIR.get(key, 0)
    if abs(d) < 1e-9 or g == 0:
        return ""
    return "🟢 better" if d * g > 0 else "🔴 worse"


def page_results():
    s = st.session_state
    st.header("3. Results: before vs after")
    before, eb = safe_calc(s.baseline)
    after, ea = safe_calc(current_inputs())
    if eb or ea:
        st.error(eb or ea)
        return
    lab_after = "AFTER = current inputs" + (f" (applied: {s.applied})" if s.applied else "")
    st.caption(f"**BEFORE** = {s.baseline.get('label') or s.baseline_label}  ·  **{lab_after}**")
    same = all(abs(before[k] - after[k]) < 1e-9 for k in ("CSR", "M40", "cost_total_bf", "bf_day"))
    if same:
        st.info("Before and after are identical. Change inputs on page 2, or apply an option from page 4, to see the effect.")

    kp = [("CSR", "CSR %"), ("CRI", "CRI %"), ("M40", "M40 %"), ("M10", "M10 %"), ("ash_coke", "Coke ash %"),
          ("bf_day", "BF coke t/day"), ("cost_total_bf", "Cost Rs/t BF coke")]
    cols = st.columns(len(kp))
    for c, (k, lab) in zip(cols, kp):
        d = after[k] - before[k]
        c.metric(lab, fmtv(k, after[k]), delta=None if abs(d) < 1e-9 else fmtv(k, d) if k not in ("bf_day", "cost_total_bf") else f"{d:,.0f}",
                 delta_color="normal" if E.GOOD_DIR.get(k, 0) >= 0 else "inverse", help=f"Before: {fmtv(k, before[k])}")

    tg = s.targets
    dv_b = E.deviations(before, tg).set_index("key")
    dv_a = E.deviations(after, tg).set_index("key")
    t1, t2, t3, t4 = st.tabs(["Targets & actions", "All results", "Coal blend", "Cost breakdown"])
    with t1:
        rows = []
        for k in dv_a.index:
            rows.append({"Parameter": dv_a.at[k, "Parameter"], "Unit": dv_a.at[k, "Unit"],
                         "Before": fmtv(k, before[k]), "After": fmtv(k, after[k]),
                         "Min": "" if E.blank(dv_a.at[k, "Min"]) else f"{float(dv_a.at[k, 'Min']):g}",
                         "Max": "" if E.blank(dv_a.at[k, "Max"]) else f"{float(dv_a.at[k, 'Max']):g}",
                         "Status before": dv_b.at[k, "Status"], "Status after": dv_a.at[k, "Status"],
                         "Corrective action (after)": dv_a.at[k, "Action"]})
        df = pd.DataFrame(rows)

        def colour(v):
            return ("background-color:#C6EFCE" if v == "OK" else "background-color:#FFC7CE" if v in ("LOW", "HIGH") else "")
        st.dataframe(df.style.map(colour, subset=["Status before", "Status after"]),
                     hide_index=True, height=min(38 * (len(df) + 1), 820))
        st.caption(f"Prediction bands (±): CSR {after['band_CSR']:.1f}, CRI {after['band_CRI']:.1f}, M40 {after['band_M40']:.1f}, "
                   f"M10 {after['band_M10']:.1f}. Coefficient set: {after['coefset']}.")
    with t2:
        rows = []
        for key, lab, unit, f, grp in E.OUTPUTS:
            b, a = before.get(key), after.get(key)
            if b is None or a is None:
                continue
            d = a - b
            rows.append({"Group": grp, "Result": lab, "Unit": unit, "Before": fmtv(key, b), "After": fmtv(key, a),
                         "Change": "" if abs(d) < 1e-9 else fmtv(key, d), "Change %": "" if abs(d) < 1e-9 or b == 0 else f"{d / abs(b) * 100:+.1f} %",
                         "": arrow(key, d)})
        st.dataframe(pd.DataFrame(rows), hide_index=True, height=900)
    with t3:
        bc = s.baseline["coals"][["name", "pct"]].rename(columns={"pct": "Before %"})
        ac = s.coals[["name", "pct", "Price"]].rename(columns={"pct": "After %", "Price": "Price Rs/t"})
        m = pd.merge(bc, ac, on="name", how="outer").fillna({"Before %": 0, "After %": 0})
        m["Change"] = m["After %"] - m["Before %"]
        m = m.rename(columns={"name": "Coal"})
        st.dataframe(m.style.format({"Before %": "{:.1f}", "After %": "{:.1f}", "Change": "{:+.1f}", "Price Rs/t": "{:,.0f}"}, na_rep="-"),
                     hide_index=True)
        ob = s.baseline["params"]; oa = s.params
        diffs = []
        for q in E.P:
            k = q["key"]
            if str(ob.get(k)) != str(oa.get(k)) and not (E.blank(ob.get(k)) and E.blank(oa.get(k))):
                diffs.append(dict(Input=q["label"], Unit=q["unit"], Before=str(ob.get(k)), After=str(oa.get(k))))
        st.markdown("**Operating / plant inputs that changed**")
        st.dataframe(pd.DataFrame(diffs), hide_index=True) if diffs else st.write("None.")
    with t4:
        cb = pd.DataFrame({"Before": before["cost_breakdown"], "After": after["cost_breakdown"]})
        cb["Change"] = cb["After"] - cb["Before"]
        tot = pd.DataFrame({"Before": [before["cost_total_bf"]], "After": [after["cost_total_bf"]],
                            "Change": [after["cost_total_bf"] - before["cost_total_bf"]]}, index=["TOTAL Rs/t BF coke"])
        st.dataframe(pd.concat([cb, tot]).style.format("{:,.0f}"))
        st.bar_chart(cb[["Before", "After"]])
        c1, c2 = st.columns(2)
        c1.metric("Cost per day, Rs", f"{after['cost_day']:,.0f}", delta=f"{after['cost_day'] - before['cost_day']:,.0f}", delta_color="inverse")
        c2.metric("Saving per year at AFTER output (350 d), Rs crore",
                  f"{(before['cost_total_bf'] - after['cost_total_bf']) * after['bf_day'] * 350 / 1e7:,.2f}",
                  help="(Before cost per t - after cost per t) x after BF coke per day x 350 days")
        if after["price_missing"]:
            st.warning("No price entered for: " + ", ".join(after["price_missing"]) + " (counted as 0).")
    c1, c2 = st.columns(2)
    out = M.build_master(s.params, s.coals, s.prices, s.targets, s.coef, s.lab, s.levers, s.coefset, results=after)
    c1.download_button("⬇️ Download AFTER case as master Excel", out, file_name=f"Master_After_{datetime.now():%Y%m%d_%H%M}.xlsx")
    if c2.button("↩️ Restore the BEFORE inputs"):
        b = s.baseline
        s.params, s.coals, s.prices, s.coef, s.coefset = dict(b["params"]), b["coals"].copy(), dict(b["prices"]), dict(b["coef"]), b["coefset"]
        s.lab = None if b["lab"] is None else b["lab"].copy()
        s.applied = None
        sync_sources()
        st.rerun()


# ---------------------------------------------------------------------------
# Page 4: optimisation
# ---------------------------------------------------------------------------
def page_optimise():
    s = st.session_state
    st.header("4. Optimise: lowest-cost way to reach your targets")
    st.write("The optimiser searches coal mixes (within each coal's Min / Max %), machine-operation settings and process "
             "methods, and picks the cheapest combination that meets every ticked target, using the prices you entered. "
             "It starts from the current inputs (page 2).")
    cur, err = safe_calc(current_inputs())
    if err:
        st.error(err)
        return
    has_price = any(not E.blank(v) and E.num(v) > 0 for v in s.coals["Price"]) or any(E.num(v) for v in s.prices.values())
    if not has_price:
        st.warning("No prices entered, so cost cannot be minimised. The optimiser will instead find the highest-CSR option that meets the targets.")
    else:
        nop = [str(n) for n, p in zip(s.coals["name"], s.coals["Price"]) if E.blank(p)]
        if nop:
            st.warning("No price for: " + ", ".join(nop) + ". The optimiser will not raise these above their current share "
                       "(add a price on page 2 to let it use them).")

    with st.expander("Settings: targets, coal limits and allowed operating changes", expanded=s.opt is None):
        st.markdown("**Targets the optimiser must meet** (edit Min / Max; untick to ignore)")
        s.targets = st.data_editor(s.targets_src, hide_index=True, key=K("op_targets"), disabled=["key", "Parameter", "Unit"],
                                   column_config={"key": None, "Optimise": st.column_config.CheckboxColumn("Must meet")})
        keep_prod = st.checkbox(f"Keep BF coke production at least at the current level ({cur['bf_day']:,.0f} t/day)", value=True)
        st.markdown("**Coal limits** (also on page 2)")
        lim = st.data_editor(s.coals_src[["name", "pct", "Price", "Min", "Max"]], hide_index=True, key=K("op_lim"),
                             disabled=["name", "pct"], column_config=coal_column_config())
        for c in ("Price", "Min", "Max"):
            s.coals[c] = lim[c].values
        st.markdown("**Machine operation and process method changes allowed**")
        s.levers = st.data_editor(s.levers_src, hide_index=True, key=K("op_levers"), disabled=["key", "Lever", "Unit", "Current"],
                                  column_config={"key": None, "Allowed": st.column_config.CheckboxColumn("Allowed")})
        st.caption("Operating links used (assumed, change under page 2 → F. Coefficients): bulk density +"
                   f"{s.coef['k_oil_bd']:.0f} kg/m3 per 1 % oil; coke centre temperature +{s.coef['k_tc_flue']:.2f} degC per degC flue "
                   f"temperature and +{s.coef['k_tc_margin']:.0f} degC per extra hour of coking margin (max {s.coef['Tc_max']:.0f} degC); "
                   "underfiring gas scales with the heat requirement.")

    if st.button("🚀 Run optimisation", type="primary"):
        tg = s.targets.copy()
        if keep_prod:
            m = tg["key"] == "bf_day"
            if m.any():
                tg.loc[m, "Min"] = max(E.num(tg.loc[m, "Min"].iloc[0], 0), round(cur["bf_day"] * 0.999, 1))
                tg.loc[m, "Optimise"] = True
        try:
            prob = O.Problem(s.params, s.coals, s.prices, s.coef, s.coefset, s.lab, tg, s.levers)
        except Exception as e:
            st.error(f"Cannot set up the optimisation: {e}")
            return
        bar = st.progress(0.0, "Starting ...")
        opts = O.run_all(prob, progress=lambda f, t: bar.progress(min(f, 1.0), t))
        bar.empty()
        sens = O.sensitivity(prob)
        s.opt = dict(opts=opts, sens=sens, prob=prob, time=datetime.now(), has_price=prob.has_price)
        s.tradeoff = None

    if not s.opt:
        return
    opts, prob = s.opt["opts"], s.opt["prob"]
    base = prob.base
    feas = [o for o in opts if o["feasible"]]
    best = min(feas, key=lambda o: prob.objective_value(o["res"])) if feas else None

    st.subheader("Options found")
    if best:
        sv = base["cost_total_bf"] - best["res"]["cost_total_bf"]
        st.success(f"Recommended: **{best['label']}**. Cost {best['res']['cost_total_bf']:,.0f} Rs/t BF coke "
                   f"({'saves' if sv >= 0 else 'adds'} {abs(sv):,.0f} Rs/t, about Rs {abs(sv) * best['res']['bf_day'] * 350 / 1e7:,.2f} crore a year) "
                   f"with CSR {best['res']['CSR']:.1f}, M40 {best['res']['M40']:.1f}, M10 {best['res']['M10']:.2f}.")
    else:
        st.error("No option meets every target with the limits given. The closest options are shown with the targets they miss. "
                 "Try relaxing a target, widening coal Max %, or allowing more operating changes.")
    rows = []
    for o in [dict(label="Current case", res=base, feasible=None, pct=prob.pct0, kind="current")] + opts:
        r = o["res"]
        row = {"Option": o["label"], "Meets targets": "-" if o["feasible"] is None else ("✅ Yes" if o["feasible"] else "❌ No"),
               "Cost Rs/t BF coke": r["cost_total_bf"], "Saving Rs/t": base["cost_total_bf"] - r["cost_total_bf"],
               "CSR": r["CSR"], "CRI": r["CRI"], "M40": r["M40"], "M10": r["M10"], "Coke ash": r["ash_coke"],
               "BF coke t/d": r["bf_day"]}
        for nm, v in zip(prob.ca["name"], o["pct"]):
            row[f"{nm} %"] = v
        rows.append(row)
    tab = pd.DataFrame(rows)
    fm = {c: "{:,.0f}" for c in ("Cost Rs/t BF coke", "Saving Rs/t", "BF coke t/d")}
    fm.update({c: "{:.1f}" for c in tab.columns if c.endswith(" %") or c in ("CSR", "CRI", "M40", "Coke ash")})
    fm["M10"] = "{:.2f}"
    st.dataframe(tab.style.format(fm), hide_index=True)

    for i, o in enumerate(opts):
        r = o["res"]
        tag = "⭐ " if best is o else ""
        with st.expander(f"{tag}{o['label']}  ·  {r['cost_total_bf']:,.0f} Rs/t  ·  {'meets targets' if o['feasible'] else 'misses some targets'}",
                         expanded=best is o):
            c1, c2 = st.columns([3, 2])
            with c1:
                st.markdown("**What to change**")
                for line in O.explain(prob, o):
                    st.markdown(f"- {line}")
                if o["violations"]:
                    st.markdown("**Targets not reached**")
                    for k, sd, lim, val in o["violations"]:
                        st.markdown(f"- {E.OUT_LABEL.get(k, k)}: {fmtv(k, val)} vs {sd} {lim}")
            with c2:
                kk = ["CSR", "CRI", "M40", "M10", "ash_coke", "S_coke", "Y", "bf_day", "t_margin", "fuel", "cost_coal", "cost_total_bf"]
                st.dataframe(pd.DataFrame([{"Result": E.OUT_LABEL.get(k, k), "Current": fmtv(k, base[k]), "Option": fmtv(k, r[k])}
                                           for k in kk]), hide_index=True)
            if st.button("Apply this option → see it on the Results page", key=f"apply_{i}"):
                s.params = dict(o["params"])
                s.params["M_ovr"] = o["params"].get("M_ovr")
                cl = s.coals.copy()
                cl["pct"] = np.round(o["pct"], 2)
                cl.loc[cl.index[np.argmax(cl["pct"].values)], "pct"] += round(100 - cl["pct"].sum(), 2)
                s.coals = cl
                s.applied = o["label"]
                sync_sources()
                s.flash = f"Applied '{o['label']}'. Results page now shows BEFORE vs this option."
                s.goto = PAGES[2]
                st.rerun()

    st.subheader("Process-wise guidance: effect of single changes from the current case")
    st.caption("Each row changes one thing and keeps everything else as it is now. Use it to see which machine-operation or "
               "process lever, or which coal, moves quality and cost most.")
    sens = s.opt["sens"]
    num_cols = [c for c in sens.columns if c != "Change"]
    sty = sens.style.format({c: "{:+.2f}" for c in num_cols} | {"Cost Rs/t BF coke": "{:+,.0f}", "BF coke t/d": "{:+,.1f}"})

    def sign_colour(v, good=1):
        if not isinstance(v, (int, float)) or abs(v) < 1e-6:
            return ""
        return "color:#1a7f37" if v * good > 0 else "color:#c62828"
    for c, gd in (("CSR", 1), ("CRI", -1), ("M40", 1), ("M10", -1), ("BF coke t/d", 1), ("Cost Rs/t BF coke", -1)):
        sty = sty.map(lambda v, gd=gd: sign_colour(v, gd), subset=[c])
    st.dataframe(sty, hide_index=True)
    devs = E.deviations(base, s.targets)
    bad = devs[devs["Status"].isin(["LOW", "HIGH"])]
    if len(bad):
        st.markdown("**Rule-based actions for targets missed in the current case**")
        for _, r in bad.iterrows():
            st.markdown(f"- **{r['Parameter']}** {r['Status']} ({fmtv(r['key'], r['Value'])}): {r['Action']}")

    if best is not None:
        st.subheader("Cost of higher quality")
        if st.button("Calculate cost of CSR +1, +2, +3 points for the recommended option"):
            with st.spinner("Re-optimising ..."):
                s.tradeoff = O.tradeoff(prob, best)
        if s.get("tradeoff") is not None:
            st.dataframe(s.tradeoff.style.format(precision=1), hide_index=True)

    # export
    bio = io.BytesIO()
    with pd.ExcelWriter(bio, engine="openpyxl") as xw:
        tab.to_excel(xw, sheet_name="Options", index=False)
        sens.to_excel(xw, sheet_name="Single_changes", index=False)
        pd.DataFrame([dict(Option=o["label"], Change=l) for o in opts for l in O.explain(prob, o)]).to_excel(
            xw, sheet_name="What_to_change", index=False)
        if s.get("tradeoff") is not None:
            s.tradeoff.to_excel(xw, sheet_name="Quality_cost_tradeoff", index=False)
    st.download_button("⬇️ Download optimisation report (Excel)", bio.getvalue(), file_name=f"Optimisation_{datetime.now():%Y%m%d_%H%M}.xlsx")


# ---------------------------------------------------------------------------
def main():
    init()
    s = st.session_state
    st.sidebar.title("🔥 Coke Quality & Cost")
    if "page" not in s:
        s.page = PAGES[0]
    if s.get("goto"):
        s.page = s.goto
        s.goto = None
    page = st.sidebar.radio("Go to", PAGES, key="page")
    if s.last_page != page:
        sync_sources()
        s.last_page = page
    res, err = safe_calc(current_inputs())
    st.sidebar.divider()
    if res:
        st.sidebar.metric("CSR (current inputs)", f"{res['CSR']:.1f} %")
        st.sidebar.metric("Cost, Rs/t BF coke", f"{res['cost_total_bf']:,.0f}")
        st.sidebar.metric("BF coke, t/day", f"{res['bf_day']:,.0f}")
    else:
        st.sidebar.error(err)
    st.sidebar.caption(f"BEFORE case: {s.baseline.get('label') or s.baseline_label}")
    if s.get("flash"):
        st.success(s.flash)
        s.flash = None
    {PAGES[0]: page_upload, PAGES[1]: page_inputs, PAGES[2]: page_results, PAGES[3]: page_optimise}[page]()
    st.sidebar.divider()
    st.sidebar.caption("Model defaults are indicative published-trend values. Calibrate with 15-20 of your own batches "
                       "(page 2 → F) before using predictions for purchasing decisions.")


main()
