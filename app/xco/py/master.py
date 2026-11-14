"""Write the consolidated master input Excel (and read it back via ingest.read_master)."""
from __future__ import annotations

import io
from datetime import datetime

import pandas as pd
from openpyxl import Workbook
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.datavalidation import DataValidation

import engine as E

F = "Arial"
f_hdr = Font(name=F, size=10, bold=True, color="FFFFFF")
f_in = Font(name=F, size=10, color="0000FF")
f_norm = Font(name=F, size=10)
f_title = Font(name=F, size=14, bold=True, color="1F3864")
f_note = Font(name=F, size=9, italic=True, color="595959")
fill_hdr = PatternFill("solid", fgColor="1F3864")
fill_in = PatternFill("solid", fgColor="FFF2CC")
fill_out = PatternFill("solid", fgColor="E2EFDA")
thin = Side(style="thin", color="BFBFBF")
box = Border(left=thin, right=thin, top=thin, bottom=thin)


def _clean(v):
    if E.blank(v):
        return None
    try:
        import numpy as np
        if isinstance(v, (np.integer,)):
            return int(v)
        if isinstance(v, (np.floating,)):
            return float(v)
        if isinstance(v, np.bool_):
            return bool(v)
    except ImportError:
        pass
    return v


def _table(ws, df: pd.DataFrame, start_row=1, input_cols=(), widths=None):
    for j, c in enumerate(df.columns, 1):
        cell = ws.cell(row=start_row, column=j, value=str(c))
        cell.font, cell.fill, cell.border = f_hdr, fill_hdr, box
        cell.alignment = Alignment(wrap_text=True, vertical="center")
    for i, (_, r) in enumerate(df.iterrows(), start_row + 1):
        for j, c in enumerate(df.columns, 1):
            cell = ws.cell(row=i, column=j, value=_clean(r[c]))
            cell.border = box
            cell.font = f_in if c in input_cols else f_norm
            if c in input_cols:
                cell.fill = fill_in
    for j, c in enumerate(df.columns, 1):
        w = (widths or {}).get(c, max(10, min(45, len(str(c)) + 2)))
        ws.column_dimensions[get_column_letter(j)].width = w
    ws.freeze_panes = ws.cell(row=start_row + 1, column=2)


def build_master(params: dict, coals: pd.DataFrame, prices: dict, targets: pd.DataFrame, coef: dict,
                 lab: pd.DataFrame | None, levers: pd.DataFrame | None = None, coefset: str = "Default",
                 results: dict | None = None, sources: list | None = None) -> bytes:
    wb = Workbook()
    ws = wb.active
    ws.title = "README"
    ws["A1"] = "Coke quality - MASTER INPUT FILE"; ws["A1"].font = f_title
    lines = [
        f"Created: {datetime.now():%d-%m-%Y %H:%M}",
        "This single file holds every input the coke quality calculation needs. Upload it back into the app at any time.",
        "Blue text on yellow = input. Edit values in the Value / coal columns; keep the Key columns unchanged.",
        "Sheets: Plant_Inputs (oven, operations), Coal_Blend (one row per coal incl. optional price, min/max %),",
        "Prices (gas, oil, by-product credits - optional), Targets (min / max and whether the optimiser must meet it),",
        "Coefficients (model coefficients, calibratable), Lab_Data (batch results for model fitting), Levers (optimiser ranges),",
        "Results (calculated values at the time of export - for reference only), Sources (files merged into this master).",
        f"Coefficient set: {coefset}",
    ]
    for i, l in enumerate(lines, 3):
        ws[f"A{i}"] = l; ws[f"A{i}"].font = f_norm
    ws["A12"] = "Coefficient set to use"; ws["B12"] = coefset
    ws["B12"].font, ws["B12"].fill = f_in, fill_in
    ws.column_dimensions["A"].width = 110

    # Plant inputs
    ws = wb.create_sheet("Plant_Inputs")
    rows = [dict(Section=p["section"], Key=p["key"], Parameter=p["label"],
                 Value=_clean(params.get(p["key"])), Unit=p["unit"],
                 Options=", ".join(p["options"]) if p["options"] else "") for p in E.P]
    df = pd.DataFrame(rows)
    _table(ws, df, input_cols=("Value",), widths={"Section": 30, "Key": 12, "Parameter": 52, "Value": 18, "Unit": 16, "Options": 40})
    for i, p in enumerate(E.P, 2):
        if p["options"]:
            dv = DataValidation(type="list", formula1='"' + ",".join(p["options"]) + '"', allow_blank=True)
            ws.add_data_validation(dv); dv.add(f"D{i}")

    # Coal blend
    ws = wb.create_sheet("Coal_Blend")
    cdf = coals.copy()
    for k in E.COAL_KEYS:
        if k not in cdf.columns:
            cdf[k] = None
    cdf = cdf[E.COAL_KEYS]
    cdf.columns = [E.COAL_LABEL[k] + (f" [{E.COAL_UNIT[k]}]" if E.COAL_UNIT[k] else "") for k in E.COAL_KEYS]
    _table(ws, cdf, input_cols=tuple(cdf.columns), widths={cdf.columns[0]: 26})
    ws.row_dimensions[1].height = 45
    n = len(cdf) + 2
    ws.cell(row=n, column=1, value="TOTAL blend %").font = Font(name=F, bold=True)
    ws.cell(row=n, column=2, value=f"=SUM(B2:B{n-1})").font = Font(name=F, bold=True)

    # Prices
    ws = wb.create_sheet("Prices")
    df = pd.DataFrame([dict(Key=p[0], Item=p[1], Value=_clean(prices.get(p[0])), Unit=p[2]) for p in E.PRICES])
    _table(ws, df, input_cols=("Value",), widths={"Key": 14, "Item": 52, "Value": 14, "Unit": 16})
    ws.cell(row=len(df) + 3, column=1, value="Coal prices are in the Coal_Blend sheet. Leave blank if not known (counted as 0).").font = f_note

    # Targets
    ws = wb.create_sheet("Targets")
    t = targets.copy()
    _table(ws, t, input_cols=("Min", "Max", "Optimise"), widths={"key": 12, "Parameter": 32})

    # Coefficients
    ws = wb.create_sheet("Coefficients")
    rows = []
    for m, terms in E.COEF_TERMS.items():
        for i, term in enumerate(terms):
            rows.append(dict(Key=f"{m}.{i}", Model=m, Term=term, Value=coef[m][i], Default=E.DEFAULT_COEF[m][i]))
    for k, (v, lab_, unit) in E.CONST.items():
        rows.append(dict(Key=k, Model="Constant", Term=f"{lab_} [{unit}]", Value=coef.get(k, v), Default=v))
    _table(ws, pd.DataFrame(rows), input_cols=("Value",), widths={"Term": 52})

    # Lab data
    ws = wb.create_sheet("Lab_Data")
    ldf = lab if lab is not None and len(lab) else pd.DataFrame(columns=E.LAB_COLS)
    _table(ws, ldf, input_cols=tuple(ldf.columns))

    if levers is not None:
        ws = wb.create_sheet("Levers")
        _table(ws, levers, input_cols=tuple(c for c in levers.columns if c not in ("key", "Lever", "Unit")), widths={"Lever": 40})

    if results:
        ws = wb.create_sheet("Results")
        rr = [dict(Group=o[4], Output=o[1], Value=_clean(results.get(o[0])), Unit=o[2]) for o in E.OUTPUTS if o[0] in results]
        _table(ws, pd.DataFrame(rr), widths={"Group": 20, "Output": 40, "Value": 16, "Unit": 18})
        for i in range(2, len(rr) + 2):
            ws.cell(row=i, column=3).fill = fill_out
            ws.cell(row=i, column=3).number_format = "#,##0.000"

    if sources:
        ws = wb.create_sheet("Sources")
        _table(ws, pd.DataFrame(sources), widths={"Source": 50, "Type": 30, "Found": 60, "Notes": 80})

    bio = io.BytesIO()
    wb.save(bio)
    return bio.getvalue()
