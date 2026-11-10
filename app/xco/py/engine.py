"""
Calculation engine for the Coke Quality app.

A direct Python port of Coke_Quality_Prediction_Module.xlsx (build_workbook.py):
oven configuration -> coal blend -> operations -> mass & heat balance ->
coke quality (CRI, CSR, M40, M10) -> deviations, plus a cost model that uses
the optional prices entered for each material / utility.

All coefficients are the workbook defaults and can be overridden.
"""
from __future__ import annotations

import math
from copy import deepcopy

import numpy as np
import pandas as pd

# ---------------------------------------------------------------------------
# Parameter registries
# ---------------------------------------------------------------------------
# key, label, unit, default, section, kind ("num" / "text" / "choice"), options, aliases
P = []


def _p(key, label, unit, default, section, kind="num", options=None, aliases=(), note=""):
    P.append(dict(key=key, label=label, unit=unit, default=default, section=section,
                  kind=kind, options=options, aliases=list(aliases), note=note))


S1, S2, S3, S4, S5, S6, S7 = ("Oven configuration", "Chamber & charge", "Batch & charge",
                              "Heating & carbonisation", "Fuel & combustion",
                              "Non-recovery specific", "Quenching, handling & screening")
_p("oven_type", "Oven type / heating arrangement", "", "Recovery", S1, "choice", ["Recovery", "Non-recovery"], ["oven type", "heating arrangement", "type of oven"])
_p("orient", "Oven orientation", "", "Horizontal", S1, "choice", ["Horizontal", "Vertical"], ["orientation"])
_p("charging", "Charging method", "", "Top", S1, "choice", ["Top", "Stamp"], ["charging", "charging type", "top or stamp"])
_p("fuel_type", "Heating fuel", "", "Mixed COG+BFG", S1, "choice", ["COG", "BFG", "Mixed COG+BFG", "Self (volatiles)"], ["heating fuel", "fuel type"])
_p("n_ovens", "Number of ovens in battery", "No.", 40, S2, aliases=["no of ovens", "number of ovens", "ovens"])
_p("L", "Chamber length (useful)", "m", 13.5, S2, aliases=["chamber length", "oven length", "length"])
_p("W", "Chamber width (mean)", "mm", 450, S2, aliases=["chamber width", "oven width", "width"])
_p("H", "Chamber height (total)", "m", 4.0, S2, aliases=["chamber height", "oven height", "height"])
_p("H_eff", "Effective charge height / coal bed height", "m", 3.7, S2, aliases=["effective height", "charge height", "bed height", "coal bed height", "cake height"])
_p("wall", "Heating wall thickness", "mm", 100, S2, aliases=["wall thickness"])
_p("flues", "Number of heating flues per wall", "No.", 28, S2, aliases=["heating flues", "flues per wall"])
_p("age", "Oven age", "years", 12, S2, aliases=["battery age", "oven age"])
_p("cond", "Wall / oven condition", "", "Good", S2, "choice", ["Good", "Fair", "Poor"], ["wall condition", "oven condition"])
_p("BD", "Bulk density of charge (wet)", "kg/m3", 760, S2, aliases=["bulk density", "charge bulk density", "bd", "cake density"])
_p("turn", "Turnaround time (push -> recharge)", "h", 0.5, S2, aliases=["turnaround time", "turn around time"])
_p("charge_ovr", "Weighed coal charge per oven (blank = calculated)", "t", None, S2, aliases=["coal charge per oven", "charge per oven", "weighed charge"])
_p("batch", "Batch ID", "", "B-2026-11-001", S3, "text", aliases=["batch id", "batch no", "batch number"])
_p("date", "Date", "", "03-11-2026", S3, "text", aliases=["date"])
_p("M_ovr", "Charge moisture override (blank = blend TM)", "%", None, S3, aliases=["charge moisture", "coal moisture in charge", "moisture of charge"])
_p("T_ch", "Coal charge temperature", "degC", 30, S3, aliases=["charge temperature", "coal temperature"])
_p("oil", "Oil / additive in charge", "% ar", 0.0, S3, aliases=["oil addition", "oil", "additive", "oil %"])
_p("T_flue", "Mean flue temperature (Recovery) / crown temp (NR)", "degC", 1250, S4, aliases=["flue temperature", "mean flue temperature", "crown temperature", "heating flue temperature"])
_p("T_sd", "Flue temperature std. deviation (uniformity)", "degC", 15, S4, aliases=["flue temperature std", "flue temp deviation", "uniformity"])
_p("T_wall", "Heating wall temperature (mean)", "degC", 1150, S4, aliases=["wall temperature"])
_p("Tc", "Coke centre temperature at end of coking", "degC", 1000, S4, aliases=["coke centre temperature", "coke center temperature", "centre temperature", "coke mass temperature"])
_p("t_gross", "Gross coking time (charge -> push), actual", "h", 21.0, S4, aliases=["gross coking time", "coking time", "carbonisation time", "carbonization time"])
_p("soak", "Soaking time (after centre reaches ~950 degC)", "h", 1.0, S4, aliases=["soaking time", "soak time"])
_p("P_oven", "Oven top / collecting main pressure", "Pa", 100, S4, aliases=["collecting main pressure", "oven pressure"])
_p("T_gas", "Raw COG temperature (standpipe)", "degC", 700, S4, aliases=["raw gas temperature", "standpipe temperature", "raw cog temperature"])
_p("T_push", "Coke pushing temperature", "degC", 1050, S4, aliases=["pushing temperature", "coke pushing temperature"])
_p("push_amp", "Push force / pusher ram current", "A", 180, S4, aliases=["pusher current", "ram current", "push current"])
_p("fuel", "Underfiring gas consumption", "Nm3/t wet coal", 260, S5, aliases=["underfiring gas", "gas consumption", "fuel gas consumption", "heating gas consumption"])
_p("fuel_cv", "Underfiring gas calorific value (LHV)", "kcal/Nm3", 2400, S5, aliases=["gas calorific value", "gas cv", "lhv of gas", "mixed gas cv"])
_p("fuel_ef", "Underfiring gas CO2 emission factor", "kg CO2/Nm3", 0.95, S5, aliases=["co2 emission factor", "emission factor"])
_p("air", "Combustion air flow", "Nm3/h", 45000, S5, aliases=["combustion air"])
_p("T_waste", "Waste gas temperature", "degC", 300, S5, aliases=["waste gas temperature"])
_p("O2", "Oxygen in waste gas", "% dry", 5.0, S5, aliases=["oxygen in waste gas", "o2 in waste gas", "waste gas o2"])
_p("burn", "Burn-off (coke loss to combustion)", "% of dry coal", 2.0, S6, aliases=["burn off", "burn-off", "burnoff"])
_p("suction", "Oven suction (negative pressure)", "Pa", -40, S6, aliases=["oven suction"])
_p("T_sole", "Sole flue temperature", "degC", 1250, S6, aliases=["sole flue temperature"])
_p("hrsg", "Heat recovery boiler efficiency", "fraction", 0.70, S6, aliases=["boiler efficiency", "hrsg efficiency"])
_p("quench", "Quenching method", "", "Wet", S7, "choice", ["Wet", "CDQ"], ["quenching method", "quenching", "quench type"])
_p("q_time", "Quench duration", "s", 90, S7, aliases=["quench time", "quench duration"])
_p("M_coke", "Coke moisture after quench", "%", 5.0, S7, aliases=["coke moisture"])
_p("breeze", "Breeze fraction (< 10 mm)", "% of gross coke", 7.0, S7, aliases=["breeze", "breeze fraction", "coke breeze"])
_p("nut", "Nut coke fraction (10-25 mm)", "% of gross coke", 6.0, S7, aliases=["nut coke", "nut coke fraction"])
_p("hand", "Handling loss / extra fines in transport", "% of gross coke", 1.0, S7, aliases=["handling loss"])

PLANT_PARAMS = {p["key"]: p for p in P}
PLANT_SECTIONS = list(dict.fromkeys(p["section"] for p in P))

# Coal property registry: key, label, unit, default for the "spare" coal, aliases
COAL_PROPS = [
    ("name", "Coal source / name", "", "", ["coal", "coal name", "source", "coal source", "name", "material"]),
    ("pct", "Blend %", "% ar", 0.0, ["blend percentage", "blend %", "blend", "share", "proportion", "mix %", "percentage", "ratio"]),
    ("Price", "Price (optional)", "Rs/t ar", None, ["landed price", "price", "cost", "rate", "landed cost", "price rs/t"]),
    ("Min", "Min %", "% ar", 0.0, ["min %", "minimum %", "min blend", "minimum"]),
    ("Max", "Max %", "% ar", 100.0, ["max %", "maximum %", "max blend", "maximum", "availability"]),
    ("TM", "Total moisture", "% ar", 9.0, ["total moisture", "tm", "moisture"]),
    ("Ash", "Ash", "% db", 10.0, ["ash", "ash %", "ash content"]),
    ("VM", "Volatile matter", "% db", 25.0, ["volatile matter", "vm", "volatile"]),
    ("S", "Total sulphur", "% db", 0.6, ["sulphur", "sulfur", "total sulphur", "total sulfur", "s %"]),
    ("C", "Carbon", "% db", 78.0, ["carbon", "c %"]),
    ("Hy", "Hydrogen", "% db", 4.8, ["hydrogen", "h %"]),
    ("N", "Nitrogen", "% db", 1.5, ["nitrogen", "n %"]),
    ("P", "Phosphorus", "% db", 0.05, ["phosphorus", "phosphorous", "p %"]),
    ("CV", "Gross calorific value", "kcal/kg db", 7300, ["calorific value", "gcv", "cv", "gross calorific value"]),
    ("Ro", "Mean max vitrinite reflectance (Ro)", "%", 1.10, ["ro", "reflectance", "vitrinite reflectance", "mmr", "romax", "ro max", "mean max reflectance"]),
    ("Vit", "Vitrinite", "% vol", 60, ["vitrinite"]),
    ("Inert", "Inertinite (total)", "% vol", 37, ["inertinite", "inerts", "total inertinite"]),
    ("Lipt", "Liptinite", "% vol", 3, ["liptinite", "exinite"]),
    ("MF", "Gieseler maximum fluidity", "ddpm", 300, ["fluidity", "max fluidity", "gieseler fluidity", "mf", "maximum fluidity"]),
    ("Tmf", "Max fluidity temperature", "degC", 450, ["max fluidity temperature", "temperature of max fluidity"]),
    ("Tsoft", "Initial softening temperature", "degC", 400, ["softening temperature", "initial softening"]),
    ("Tres", "Resolidification temperature", "degC", 490, ["resolidification temperature", "solidification temperature"]),
    ("Dil", "Dilatation (Audibert-Arnu)", "%", 40, ["dilatation", "dilation", "total dilatation"]),
    ("Contr", "Contraction", "%", 25, ["contraction"]),
    ("CSN", "Crucible swelling number (FSI)", "index", 7.0, ["csn", "fsi", "swelling index", "free swelling index", "crucible swelling number"]),
    ("HGI", "Grindability", "HGI", 70, ["hgi", "grindability", "hardgrove"]),
    ("Fine", "Fineness: % below 3.2 mm", "%", 82, ["fineness", "crushing fineness", "below 3.2 mm", "-3.2 mm", "< 3.2 mm"]),
    ("SiO2", "Ash: SiO2", "% of ash", 55.0, ["sio2", "silica"]),
    ("Al2O3", "Ash: Al2O3", "% of ash", 29.0, ["al2o3", "alumina"]),
    ("Fe2O3", "Ash: Fe2O3", "% of ash", 6.0, ["fe2o3", "iron oxide"]),
    ("CaO", "Ash: CaO", "% of ash", 3.0, ["cao", "lime"]),
    ("MgO", "Ash: MgO", "% of ash", 0.8, ["mgo", "magnesia"]),
    ("Na2O", "Ash: Na2O", "% of ash", 0.3, ["na2o", "soda"]),
    ("K2O", "Ash: K2O", "% of ash", 1.0, ["k2o", "potash"]),
    ("P2O5", "Ash: P2O5", "% of ash", 0.8, ["p2o5"]),
]
COAL_KEYS = [c[0] for c in COAL_PROPS]
COAL_LABEL = {c[0]: c[1] for c in COAL_PROPS}
COAL_UNIT = {c[0]: c[2] for c in COAL_PROPS}
COAL_NUM_KEYS = [k for k in COAL_KEYS if k != "name"]

# name, pct, TM, ash, VM, S, C, H, N, P, CV, Ro, Vit, Inert, Lipt, MF, Tmf, Tsoft, Tres, dil, contr, CSN, HGI, fine, price, SiO2..P2O5
_EX = [
    ["Aus prime HCC", 35, 10.0, 9.5, 22.0, 0.55, 80.5, 4.6, 1.6, 0.050, 7650, 1.30, 62, 36, 2, 400, 460, 405, 495, 60, 25, 8.5, 85, 82, 23500, 55.0, 30.0, 5.0, 2.5, 0.8, 0.3, 1.0, 1.0],
    ["Aus semi-hard", 20, 10.0, 9.0, 27.0, 0.60, 78.5, 5.0, 1.7, 0.060, 7600, 1.05, 68, 30, 2, 1500, 450, 395, 490, 80, 27, 7.5, 70, 82, 19500, 52.0, 28.0, 7.0, 4.0, 1.0, 0.4, 1.2, 0.8],
    ["US high-vol", 10, 9.0, 8.0, 33.0, 0.90, 77.0, 5.3, 1.5, 0.020, 7700, 0.95, 75, 22, 3, 20000, 440, 385, 490, 150, 28, 8.0, 60, 82, 21000, 48.0, 27.0, 12.0, 4.5, 1.0, 0.6, 1.5, 0.4],
    ["Indian washed medium", 25, 9.0, 17.5, 25.0, 0.60, 70.0, 4.4, 1.5, 0.080, 6500, 1.05, 52, 45, 3, 50, 445, 410, 475, 10, 22, 4.0, 65, 82, 14000, 60.0, 28.0, 5.0, 1.5, 0.7, 0.2, 1.0, 0.6],
    ["Low-vol coking", 10, 9.0, 10.0, 18.5, 0.50, 83.0, 4.3, 1.4, 0.040, 7800, 1.50, 65, 33, 2, 30, 475, 425, 500, 15, 22, 7.0, 95, 82, 22000, 54.0, 31.0, 4.5, 2.0, 0.8, 0.3, 1.0, 1.2],
]
_EX_ORDER = ["name", "pct", "TM", "Ash", "VM", "S", "C", "Hy", "N", "P", "CV", "Ro", "Vit", "Inert", "Lipt", "MF",
             "Tmf", "Tsoft", "Tres", "Dil", "Contr", "CSN", "HGI", "Fine", "Price", "SiO2", "Al2O3", "Fe2O3",
             "CaO", "MgO", "Na2O", "K2O", "P2O5"]


def default_coals() -> pd.DataFrame:
    rows = []
    limits = [(20, 60), (0, 40), (0, 25), (0, 35), (0, 25)]  # example availability / technical limits
    for e, (mn, mx) in zip(_EX, limits):
        d = dict(zip(_EX_ORDER, e))
        d["Min"], d["Max"] = float(mn), float(mx)
        rows.append(d)
    return pd.DataFrame(rows)[COAL_KEYS]


def empty_coal_row(name="New coal") -> dict:
    d = {c[0]: c[3] for c in COAL_PROPS}
    d["name"] = name
    return d


# Utility / by-product prices (all optional)
PRICES = [
    ("gas_price", "Underfiring gas price", "Rs/Nm3", None, ["gas price", "fuel gas price", "cog price", "mixed gas price"]),
    ("oil_price", "Oil / additive price", "Rs/t", None, ["oil price", "additive price"]),
    ("other_cost", "Other variable cost (crushing, power, labour)", "Rs/t wet coal", None, ["conversion cost", "other cost", "variable cost"]),
    ("stamp_cost", "Extra cost of stamp charging", "Rs/t wet coal", None, ["stamp charging cost", "stamping cost"]),
    ("cdq_cost", "Net CDQ cost (after steam credit; negative = saving)", "Rs/t coke", None, ["cdq cost", "dry quenching cost"]),
    ("fixed_cost", "Fixed battery cost", "Rs/day", None, ["fixed cost", "fixed cost per day"]),
    ("nut_price", "Nut coke credit", "Rs/t", None, ["nut coke price", "nut coke credit"]),
    ("breeze_price", "Breeze credit", "Rs/t", None, ["breeze price", "breeze credit", "coke breeze price"]),
]
PRICE_KEYS = [p[0] for p in PRICES]

# Default targets: key, label, min, max, unit, use in optimiser, low action, high action
TARGETS = [
    ("CSR", "CSR", 58, None, "%", True,
     "Raise blend Ro / prime hard coking share; lower MBI (low-ash, low-Fe/Ca/alkali coals); raise bulk density (stamp, oil, finer control); ensure coke centre >= 1000 degC and adequate soaking; consider CDQ.", "-"),
    ("CRI", "CRI", None, 27, "%", True, "-",
     "Reduce basic oxides & alkali in blend ash (MBI), increase Ro, reduce inertinite / oxidised coal; raise final coke temperature; avoid over-wet quench."),
    ("M40", "M40", 78, None, "%", True,
     "Increase Ro and fluidity (add mid-vol high-fluidity coal), increase bulk density, reduce coke ash; check over-crushing and flue temperature uniformity.", "-"),
    ("M10", "M10", None, 8, "%", True, "-",
     "Raise bulk density, finish carbonisation (centre T, soaking), reduce inerts / coarse inert grains, improve quench (less thermal shock), reduce handling drops."),
    ("ash_coke", "Coke ash", None, 14.5, "% db", True, "-",
     "Cut high-ash coal share or improve washing; ash rises ~1.3x coal ash because of yield."),
    ("S_coke", "Coke sulphur", None, 0.65, "% db", True, "-", "Lower blend S (reduce high-S coals); S retention is ~0.6-0.7 of coal S."),
    ("P_coke", "Coke phosphorus", None, 0.08, "% db", True, "-", "Reduce high-P coals; P passes fully to coke and hot metal."),
    ("VM_coke", "Coke VM", None, 1.2, "% db", True, "-",
     "Under-carbonised: raise flue temperature or extend coking/soaking time; check cold flues and end flues."),
    ("M_coke", "Coke moisture", None, 6, "%", False, "-", "Reduce quench water / improve draining time; moisture swings disturb BF coke rate."),
    ("bf_kgt", "BF coke yield", 620, None, "kg/t wet coal", True,
     "Reduce breeze & nut generation (handling drops, screen condition), reduce burn-off and leakage.", "-"),
    ("bf_day", "BF coke production", None, None, "t/day", True, "Increase throughput: shorter coking time (if margin allows), higher bulk density.", "-"),
    ("b_Ro", "Blend Ro", 1.10, 1.30, "%", True, "Add higher-rank (low-vol / prime) coal.", "Add mid/high-vol coal; watch coking pressure."),
    ("b_MF", "Blend fluidity", 200, 1000, "ddpm", True, "Add high-fluidity coal; check coal oxidation / stock age.", "Add low-fluidity / higher-rank coal or inert additive."),
    ("b_VM", "Blend VM", 23, 27, "% db", True, "Risk of high coking pressure - add higher-VM coal.", "Low yield and weak coke - add lower-VM coal."),
    ("b_Ash", "Blend ash", None, 11.5, "% db", False, "-", "Reduce high-ash coal share / improve washing."),
    ("b_Inert", "Blend inertinite", None, 40, "% vol", False, "-", "Too many inerts for the fluidity available - add vitrinite-rich coal or finer crushing of inerts."),
    ("b_MBI", "Blend MBI", None, 2.0, "-", False, "-", "Reduce coals with high Fe2O3/CaO/alkali in ash."),
    ("b_Prange", "Plastic range", 70, None, "degC", False, "Narrow plastic range - add high-fluidity coal.", "-"),
    ("t_margin", "Coking time margin", 0, 2, "h", True, "Under-coking risk: extend coking time or raise flue temperature.",
     "Over-coking: shorten cycle for more output or lower flue temperature to save gas."),
    ("T_sd", "Flue temperature std. dev.", None, 20, "degC", False, "-", "Rebalance burners / air; check blocked flues."),
    ("eff", "Heating efficiency (req/actual)", 0.75, 1.05, "-", False, "Fuel overuse - check leakage, excess air, losses.", "Fuel meter or model check - required > supplied."),
    ("lam", "Excess air lambda", 1.15, 1.35, "-", False, "Incomplete combustion - increase air.", "Too much air - stack loss; reduce air."),
]


def default_targets() -> pd.DataFrame:
    return pd.DataFrame([dict(key=t[0], Parameter=t[1], Min=t[2], Max=t[3], Unit=t[4], Optimise=t[5])
                         for t in TARGETS])


TARGET_ACTIONS = {t[0]: (t[6], t[7]) for t in TARGETS}

# ---------------------------------------------------------------------------
# Coefficients (all calibratable)
# ---------------------------------------------------------------------------
DEFAULT_COEF = {
    "CRI": [12.0, 7.0, -25.0, -2.0, 0.10, -0.03, -1.0],
    "CSR": [89.1, -1.28],
    "M40": [80.0, 15.0, 2.0, -0.5, 0.010],
    "M10": [7.0, -4.0, -0.8, 0.15, -0.004, -0.01],
    "Y": [103.19, -0.75, -0.0067],
}
COEF_TERMS = {
    "CRI": ["Intercept", "MBI", "Ro - Ro_ref", "log10MF - ref", "Inertinite - ref", "Tc - Tc_ref", "CDQ (1 = CDQ)"],
    "CSR": ["Intercept", "CRI"],
    "M40": ["Intercept", "Ro - Ro_ref", "log10MF - ref", "Coke ash - ref", "Bulk density - ref"],
    "M10": ["Intercept", "Ro - Ro_ref", "log10MF - ref", "Coke ash - ref", "Bulk density - ref", "Tc - Tc_ref"],
    "Y": ["Intercept", "Coal VM % db", "Coke centre T"],
}
DEFAULT_BAND = {"CRI": 3, "CSR": 4, "M40": 3, "M10": 1}

# Scalar constants: key -> (value, label, unit)
CONST = {
    "c_Ro": (1.20, "Ro reference", "%"), "c_MF": (2.70, "log10 MF reference", "-"),
    "c_In": (32, "Inertinite reference", "% vol"), "c_Tc": (1000, "Coke centre temperature reference", "degC"),
    "c_Ash": (12, "Coke ash reference", "% db"), "c_BD": (750, "Bulk density reference (wet)", "kg/m3"),
    "off_cri": (-1.5, "Non-recovery offset on CRI", "points"), "off_m40": (1.0, "Non-recovery offset on M40", "points"),
    "Rs_def": (0.65, "Sulphur retention in coke (default)", "fraction"), "Rp": (1.00, "Phosphorus retention", "fraction"),
    "v0": (1.0, "Coke VM at Tc = 1000 degC", "% db"), "v1": (0.004, "Coke VM drop per degC", "%/degC"),
    "v2": (0.10, "Coke VM drop per h soaking", "%/h"), "g_cog": (13.5, "COG factor", "Nm3/t dry coal per %VM"),
    "h_fg": (540, "Latent heat of water", "kcal/kg"), "cp_w": (1.0, "Cp water", "kcal/kg K"),
    "cp_s": (0.47, "Cp steam", "kcal/kg K"), "cp_c": (0.36, "Mean Cp coke", "kcal/kg K"),
    "cp_v": (0.75, "Mean Cp volatiles", "kcal/kg K"), "q_rx": (50, "Heat of carbonisation reaction", "kcal/kg dry coal"),
    "loss": (15, "Wall / radiation / door losses", "% of total"), "cv_vol": (6500, "LHV of volatile products", "kcal/kg"),
    "t_ref": (19.0, "Reference net coking time (recovery)", "h"), "W_ref": (450, "Reference width", "mm"),
    "Tf_ref": (1250, "Reference flue temperature", "degC"), "t_ref_nr": (48.0, "Reference net time (non-recovery)", "h"),
    "Hb_ref": (1.0, "Reference bed height (NR)", "m"), "Tcr_ref": (1300, "Reference crown temperature (NR)", "degC"),
    "n_exp": (1.5, "Dimension exponent n", "-"), "T0": (700, "Temperature datum T0", "degC"),
    "m_exp": (0.5, "Bulk density exponent m", "-"), "kM": (0.4, "Moisture penalty", "h per %"),
    "M_ref": (9.0, "Reference moisture", "%"),
    # --- operating-response factors used by the optimiser (new, assumed; calibrate) ---
    "k_oil_bd": (150, "Bulk density gain per % oil (top charge)", "kg/m3 per %"),
    "k_tc_flue": (0.5, "Coke centre T gain per degC flue temperature", "degC/degC"),
    "k_tc_margin": (10, "Coke centre T gain per h extra coking margin", "degC/h"),
    "Tc_max": (1100, "Max achievable coke centre temperature", "degC"),
}


def default_coef() -> dict:
    c = {k: list(v) for k, v in DEFAULT_COEF.items()}
    c.update({k: v[0] for k, v in CONST.items()})
    return c


def default_params() -> dict:
    return {p["key"]: p["default"] for p in P}


def default_prices() -> dict:
    return {"gas_price": 6.0, "oil_price": 65000, "other_cost": 600, "stamp_cost": 150, "cdq_cost": -150,
            "fixed_cost": None, "nut_price": 18000, "breeze_price": 6000}


# Lab calibration columns (same as the workbook)
LAB_COLS = ["Batch ID", "Date", "Blend MBI", "Blend Ro %", "Blend MF ddpm", "Blend inertinite %", "Coal VM % db",
            "Coal ash % db", "Coal S % db", "Bulk density kg/m3", "Coke centre T degC", "Quench (Wet/CDQ)",
            "Coke yield % db", "Coke ash % db", "Coke S % db", "CRI %", "CSR %", "M40 %", "M10 %"]


def example_lab() -> pd.DataFrame:
    import random
    random.seed(7)
    ex = []
    for i in range(18):
        mbi = round(random.uniform(1.2, 2.6), 2); ro = round(random.uniform(1.05, 1.32), 2)
        mf = round(10 ** random.uniform(1.9, 3.3)); inert = round(random.uniform(28, 45), 1)
        vm = round(random.uniform(21.5, 28), 1); ash = round(random.uniform(9, 13), 1); s = round(random.uniform(0.5, 0.8), 2)
        bd = random.choice([740, 760, 780, 1020, 1050, 1080]); tc = random.choice([960, 980, 1000, 1020, 1050])
        q = random.choice(["Wet", "Wet", "CDQ"]); cdq = 1 if q == "CDQ" else 0
        lmf = math.log10(mf)
        y = 103.19 - 0.75 * vm - 0.0067 * tc + random.gauss(0, 0.4)
        ac = ash * 100 / y
        sc = s * 0.65 * 100 / y + random.gauss(0, 0.01)
        cri = 12 + 7 * mbi - 25 * (ro - 1.2) - 2 * (lmf - 2.7) + 0.1 * (inert - 32) - 0.03 * (tc - 1000) - 1.0 * cdq + random.gauss(0, 1.2)
        csr = 89.1 - 1.28 * cri + random.gauss(0, 1.5)
        m40 = 80 + 15 * (ro - 1.2) + 2 * (lmf - 2.7) - 0.5 * (ac - 12) + 0.01 * (bd - 750) + random.gauss(0, 1.0)
        m10 = 7 - 4 * (ro - 1.2) - 0.8 * (lmf - 2.7) + 0.15 * (ac - 12) - 0.004 * (bd - 750) - 0.01 * (tc - 1000) + random.gauss(0, 0.3)
        ex.append([f"EX-{i+1:03d}", f"{(i % 28)+1:02d}-10-2026", mbi, ro, mf, inert, vm, ash, s, bd, tc, q,
                   round(y, 2), round(ac, 2), round(sc, 3), round(cri, 1), round(csr, 1), round(m40, 1), round(m10, 1)])
    return pd.DataFrame(ex, columns=LAB_COLS)


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------
def num(v, default=0.0):
    """Robust float conversion; blanks/None/NaN -> default."""
    if v is None:
        return default
    if isinstance(v, str):
        v = v.strip().replace(",", "")
        if v == "":
            return default
        try:
            return float(v)
        except ValueError:
            return default
    try:
        f = float(v)
    except (TypeError, ValueError):
        return default
    return default if math.isnan(f) else f


def blank(v):
    return v is None or (isinstance(v, float) and math.isnan(v)) or (isinstance(v, str) and v.strip() == "")


# ---------------------------------------------------------------------------
# Lab calibration (replaces LINEST)
# ---------------------------------------------------------------------------
def fit_models(lab: pd.DataFrame | None, coef: dict) -> dict:
    """Least-squares refit of Y, CRI, CSR, M40, M10 on the lab rows.
    Returns {model: {"coef": [...], "n": n, "r2": r2, "se": se}} for models with n >= k + 3."""
    out = {}
    if lab is None or len(lab) == 0:
        return out
    df = lab.copy()
    for c in LAB_COLS:
        if c not in df.columns:
            df[c] = np.nan
    numc = [c for c in LAB_COLS if c not in ("Batch ID", "Date", "Quench (Wet/CDQ)")]
    for c in numc:
        df[c] = pd.to_numeric(df[c], errors="coerce")
    df["lmf"] = np.log10(df["Blend MF ddpm"].clip(lower=1))
    df["cdq"] = (df["Quench (Wet/CDQ)"].astype(str).str.upper().str.strip() == "CDQ").astype(float)
    cR, cM, cI, cT, cA, cB = (coef[k] for k in ("c_Ro", "c_MF", "c_In", "c_Tc", "c_Ash", "c_BD"))
    X = {
        "CRI": ("CRI %", lambda d: np.column_stack([d["Blend MBI"], d["Blend Ro %"] - cR, d["lmf"] - cM,
                                                     d["Blend inertinite %"] - cI, d["Coke centre T degC"] - cT, d["cdq"]])),
        "CSR": ("CSR %", lambda d: np.column_stack([d["CRI %"]])),
        "M40": ("M40 %", lambda d: np.column_stack([d["Blend Ro %"] - cR, d["lmf"] - cM, d["Coke ash % db"] - cA,
                                                     d["Bulk density kg/m3"] - cB])),
        "M10": ("M10 %", lambda d: np.column_stack([d["Blend Ro %"] - cR, d["lmf"] - cM, d["Coke ash % db"] - cA,
                                                     d["Bulk density kg/m3"] - cB, d["Coke centre T degC"] - cT])),
        "Y": ("Coke yield % db", lambda d: np.column_stack([d["Coal VM % db"], d["Coke centre T degC"]])),
    }
    for m, (ycol, fx) in X.items():
        x = fx(df)
        y = df[ycol].to_numpy(dtype=float)
        ok = np.isfinite(y) & np.all(np.isfinite(x), axis=1)
        x, y = x[ok], y[ok]
        n, k = x.shape
        if n < k + 3:
            continue
        A = np.column_stack([np.ones(n), x])
        b, *_ = np.linalg.lstsq(A, y, rcond=None)
        res = y - A @ b
        sse = float(res @ res)
        sst = float(((y - y.mean()) ** 2).sum())
        out[m] = {"coef": [float(v) for v in b], "n": int(n), "r2": 1 - sse / sst if sst > 0 else float("nan"),
                  "se": math.sqrt(sse / (n - k - 1))}
    # sulphur retention
    s = (pd.to_numeric(df["Coke S % db"], errors="coerce") * pd.to_numeric(df["Coke yield % db"], errors="coerce")
         / (pd.to_numeric(df["Coal S % db"], errors="coerce") * 100)).dropna()
    if len(s):
        out["Rs"] = {"value": float(s.mean()), "n": int(len(s))}
    return out


# ---------------------------------------------------------------------------
# Blend calculation
# ---------------------------------------------------------------------------
def prep_coals(coals) -> dict:
    """DataFrame -> dict of numpy arrays (fast path for the optimiser)."""
    if isinstance(coals, dict):
        return coals
    df = coals.reset_index(drop=True)
    out = {"name": [str(v) for v in (df["name"] if "name" in df.columns else [""] * len(df))]}
    for k in COAL_NUM_KEYS:
        if k in df.columns:
            nan = np.nan if k == "Price" else 0.0
            out[k] = np.array([num(v, nan) for v in df[k]], dtype=float)
        else:
            out[k] = np.full(len(df), np.nan if k == "Price" else 0.0)
    return out


def blend(coals, pct=None) -> dict:
    """Blend properties as in sheet Coal_Blend (column I). `pct` overrides blend % (optimiser)."""
    a = prep_coals(coals)
    pct = a["pct"] if pct is None else np.asarray(pct, dtype=float)
    tm = a["TM"]
    tot = pct.sum()
    b = {"pct": float(tot)}
    if tot <= 0:
        raise ValueError("Blend percentages total zero - enter blend % for at least one coal.")
    drymass = pct * (100 - tm)
    dry = drymass / drymass.sum()
    b["dry"] = dry
    b["TM"] = float((tm * pct).sum() / tot)
    price = a["Price"]
    b["price_missing"] = [a["name"][i] for i in range(len(pct)) if pct[i] > 0 and not np.isfinite(price[i])]
    pr = np.where(np.isfinite(price), price, 0.0)
    b["Price"] = float((pr * pct).sum() / tot)
    for k in ["Ash", "VM", "S", "C", "Hy", "N", "P", "CV", "Ro", "Vit", "Inert", "Lipt", "Tmf", "Tsoft", "Tres",
              "Dil", "Contr", "CSN", "HGI", "Fine"]:
        b[k] = float((a[k] * dry).sum())
    lmf = np.log10(np.maximum(a["MF"], 1))
    b["logMF"] = float((lmf * dry).sum())
    b["MF"] = 10 ** b["logMF"]
    b["FC"] = 100 - b["Ash"] - b["VM"]
    b["O"] = 100 - b["Ash"] - b["C"] - b["Hy"] - b["N"] - b["S"]
    b["Prange"] = b["Tres"] - b["Tsoft"]
    ashw = dry * a["Ash"]
    for k in ["SiO2", "Al2O3", "Fe2O3", "CaO", "MgO", "Na2O", "K2O", "P2O5"]:
        b[k] = float((a[k] * ashw).sum() / ashw.sum()) if ashw.sum() > 0 else 0.0
    base = b["Fe2O3"] + b["CaO"] + b["MgO"] + b["Na2O"] + b["K2O"]
    acid = b["SiO2"] + b["Al2O3"]
    b["React"] = b["Vit"] + b["Lipt"]
    b["IR"] = b["Inert"] / b["React"] if b["React"] else float("nan")
    b["BA"] = base / acid if acid else float("nan")
    b["MBI"] = 100 * b["Ash"] * base / ((100 - b["VM"]) * acid) if acid else float("nan")
    b["Alk"] = b["Ash"] * (b["Na2O"] + b["K2O"]) / 100
    return b


# ---------------------------------------------------------------------------
# Full calculation
# ---------------------------------------------------------------------------
def calculate(params: dict, coals, prices: dict | None = None, coef: dict | None = None,
              coefset: str = "Default", lab: pd.DataFrame | None = None, fits: dict | None = None,
              pct=None) -> dict:
    p = default_params()
    p.update({k: v for k, v in (params or {}).items()})
    c = default_coef()
    if coef:
        c.update(coef)
    prices = prices or {}
    g = lambda k: num(p.get(k), num(PLANT_PARAMS[k]["default"]) if k in PLANT_PARAMS else 0.0)
    nr = 1 if str(p.get("oven_type")) == "Non-recovery" else 0
    stamp = 1 if str(p.get("charging")) == "Stamp" else 0
    cdq = 1 if str(p.get("quench")).upper() == "CDQ" else 0

    # coefficient set
    used = {m: list(c[m]) for m in DEFAULT_COEF}
    se = {}
    Rs = c["Rs_def"]
    if coefset == "Fitted":
        if fits is None:
            fits = fit_models(lab, c)
        for m in DEFAULT_COEF:
            if m in fits:
                used[m] = fits[m]["coef"]
                se[m] = fits[m]["se"]
        if "Rs" in fits:
            Rs = fits["Rs"]["value"]

    r = {}
    b = blend(coals, pct)
    r.update({"b_" + k: v for k, v in b.items() if k not in ("dry", "price_missing")})
    r["price_missing"] = b["price_missing"]

    # oven config
    L, W, H_eff, BD = g("L"), g("W"), g("H_eff"), g("BD")
    r["vol"] = L * W / 1000 * H_eff
    r["charge_wet"] = num(p.get("charge_ovr")) if not blank(p.get("charge_ovr")) else r["vol"] * BD / 1000
    # operations
    M = b["TM"] if blank(p.get("M_ovr")) else num(p.get("M_ovr"))
    r["M"] = M
    Tc = g("Tc")

    # mass balance
    m_wet = r["charge_wet"]
    m_dry = m_wet * (1 - M / 100)
    m_ash = m_dry * b["Ash"] / 100
    m_S = m_dry * b["S"] / 100
    y0, y1, y2 = used["Y"]
    Y = y0 + y1 * b["VM"] + y2 * Tc - (g("burn") if nr else 0)
    coke_dry = m_dry * Y / 100
    r.update(m_dry=m_dry, Y=Y, coke_dry=coke_dry)
    r["ash_coke"] = m_ash / coke_dry * 100
    r["S_coke"] = m_S * Rs / coke_dry * 100
    r["Rs"] = Rs
    r["P_coke"] = b["P"] * c["Rp"] * 100 / Y
    r["VM_coke"] = max(0.3, c["v0"] - c["v1"] * (Tc - 1000) - c["v2"] * g("soak"))
    r["FC_coke"] = 100 - r["ash_coke"] - r["VM_coke"]
    r["M_coke"] = g("M_coke")
    coke_wet = coke_dry / (1 - r["M_coke"] / 100)
    r["coke_wet"] = coke_wet
    r["bf_frac"] = 100 - g("breeze") - g("nut") - g("hand")
    r["bf_oven"] = coke_wet * r["bf_frac"] / 100
    r["nut_oven"] = coke_wet * g("nut") / 100
    r["br_oven"] = coke_wet * g("breeze") / 100
    r["pushes"] = g("n_ovens") * 24 / g("t_gross")
    r["coal_day"] = m_wet * r["pushes"]
    r["coke_day"] = coke_wet * r["pushes"]
    r["bf_day"] = r["bf_oven"] * r["pushes"]
    r["bf_kgt"] = r["bf_oven"] / m_wet * 1000
    r["cost_coal"] = b["Price"]
    r["cost_coke"] = r["cost_coal"] * 1000 / r["bf_kgt"]
    vm = b["VM"]
    r["cog"] = c["g_cog"] * vm if not nr else 0
    r["tar"] = max(0, 0.15 * vm - 0.3) if not nr else 0
    r["benzol"] = 0.035 * vm if not nr else 0
    r["nh3"] = b["N"] * 10 * 0.15 * 17 / 14 if not nr else 0

    # heat balance
    dryf = 1 - M / 100
    T_ch, T_gas, T_push = g("T_ch"), g("T_gas"), g("T_push")
    r["Qm"] = M / 100 * (c["h_fg"] + c["cp_w"] * (100 - T_ch) + c["cp_s"] * (T_gas - 100))
    r["Qc"] = dryf * Y / 100 * c["cp_c"] * (T_push - T_ch)
    r["Qv"] = dryf * (1 - Y / 100) * c["cp_v"] * (T_gas - T_ch)
    r["Qr"] = dryf * c["q_rx"]
    r["Qnet"] = r["Qm"] + r["Qc"] + r["Qv"] + r["Qr"]
    r["Qreq"] = r["Qnet"] / (1 - c["loss"] / 100)
    fuel, fuel_cv = g("fuel"), g("fuel_cv")
    r["fuel"] = fuel
    r["Qact"] = fuel * fuel_cv / 1000
    r["fuel_th"] = r["Qreq"] * 1000 / fuel_cv if fuel_cv else float("nan")
    r["eff"] = r["Qreq"] / r["Qact"] if r["Qact"] > 0 else float("nan")
    r["lam"] = 21 / (21 - g("O2"))
    r["co2_uf"] = fuel * g("fuel_ef")
    r["co2_bf"] = r["co2_uf"] * 1000 / r["bf_kgt"]
    r["vol_rel"] = dryf * (100 - Y) / 100
    r["Qvol"] = r["vol_rel"] * c["cv_vol"] if nr else 0
    r["Qsur"] = max(0, r["Qvol"] - r["Qreq"]) if nr else 0
    r["steam"] = r["Qsur"] * g("hrsg") / 700 * 1000
    r["C_coke"] = r["FC_coke"] + 0.5
    r["co2_nr"] = dryf * (b["C"] - Y * r["C_coke"] / 100) / 100 * 44 / 12 * 1000 if nr else 0
    T_flue = g("T_flue")
    if nr:
        dimf = (H_eff / c["Hb_ref"]) ** c["n_exp"]
        tf = (c["Tcr_ref"] - c["T0"]) / (T_flue - c["T0"])
        tref = c["t_ref_nr"]
    else:
        dimf = (W / c["W_ref"]) ** c["n_exp"]
        tf = (c["Tf_ref"] - c["T0"]) / (T_flue - c["T0"])
        tref = c["t_ref"]
    r["t_pred"] = tref * dimf * tf * (BD / 750) ** c["m_exp"] + c["kM"] * (M - c["M_ref"])
    r["t_req"] = r["t_pred"] + g("soak")
    r["t_net"] = g("t_gross") - g("turn")
    r["t_margin"] = r["t_net"] - r["t_req"]
    r["rate"] = (H_eff * 1000 if nr else W / 2) / r["t_pred"]

    # quality
    q_lMF = math.log10(b["MF"])
    k = used["CRI"]
    r["CRI"] = (k[0] + k[1] * b["MBI"] + k[2] * (b["Ro"] - c["c_Ro"]) + k[3] * (q_lMF - c["c_MF"])
                + k[4] * (b["Inert"] - c["c_In"]) + k[5] * (Tc - c["c_Tc"]) + k[6] * cdq + c["off_cri"] * nr)
    k = used["CSR"]
    r["CSR"] = k[0] + k[1] * r["CRI"]
    k = used["M40"]
    r["M40"] = (k[0] + k[1] * (b["Ro"] - c["c_Ro"]) + k[2] * (q_lMF - c["c_MF"]) + k[3] * (r["ash_coke"] - c["c_Ash"])
                + k[4] * (BD - c["c_BD"]) + c["off_m40"] * nr)
    k = used["M10"]
    r["M10"] = (k[0] + k[1] * (b["Ro"] - c["c_Ro"]) + k[2] * (q_lMF - c["c_MF"]) + k[3] * (r["ash_coke"] - c["c_Ash"])
                + k[4] * (BD - c["c_BD"]) + k[5] * (Tc - c["c_Tc"]))
    for m in ("CRI", "CSR", "M40", "M10"):
        r["band_" + m] = 2 * se[m] if m in se else DEFAULT_BAND[m]
    r["coef_used"] = used
    r["coefset"] = coefset if (coefset != "Fitted" or se) else "Default (no lab fit)"
    r["T_sd"] = g("T_sd")
    r["Tc"] = Tc
    r["BD"] = BD

    # cost model (uses optional prices; blanks count as 0)
    pz = lambda kk: num(prices.get(kk), 0.0)
    oil = g("oil")
    r["cost_fuel_t"] = fuel * pz("gas_price") if not nr else 0.0
    r["cost_oil_t"] = oil / 100 * pz("oil_price")
    r["cost_stamp_t"] = pz("stamp_cost") * stamp
    r["cost_other_t"] = pz("other_cost")
    r["cost_wetcoal_t"] = r["cost_coal"] + r["cost_fuel_t"] + r["cost_oil_t"] + r["cost_stamp_t"] + r["cost_other_t"]
    per_bf = 1000 / r["bf_kgt"]
    r["cost_cdq_bf"] = pz("cdq_cost") * cdq * coke_wet / r["bf_oven"]
    r["credit_bf"] = (pz("nut_price") * r["nut_oven"] + pz("breeze_price") * r["br_oven"]) / r["bf_oven"]
    r["cost_fixed_bf"] = pz("fixed_cost") / r["bf_day"] if r["bf_day"] > 0 else 0.0
    r["cost_total_bf"] = (r["cost_wetcoal_t"] * per_bf + r["cost_cdq_bf"] - r["credit_bf"] + r["cost_fixed_bf"])
    r["cost_day"] = r["cost_total_bf"] * r["bf_day"]
    r["cost_breakdown"] = {
        "Coal blend": r["cost_coal"] * per_bf,
        "Underfiring gas": r["cost_fuel_t"] * per_bf,
        "Oil / additive": r["cost_oil_t"] * per_bf,
        "Stamp charging": r["cost_stamp_t"] * per_bf,
        "Other variable": r["cost_other_t"] * per_bf,
        "CDQ (net)": r["cost_cdq_bf"],
        "Fixed cost": r["cost_fixed_bf"],
        "By-product credit": -r["credit_bf"],
    }
    r["oven_desc"] = f"{p.get('oven_type')} / {p.get('orient')} / {p.get('charging')} charge / {p.get('quench')} quench"
    return r


# ---------------------------------------------------------------------------
# Deviations
# ---------------------------------------------------------------------------
def status(val, mn, mx):
    if blank(mn) and blank(mx):
        return "-"
    tol = lambda lim: 1e-3 * max(1.0, abs(num(lim)))   # ignore rounding-level differences
    if not blank(mn) and val < num(mn) - tol(mn):
        return "LOW"
    if not blank(mx) and val > num(mx) + tol(mx):
        return "HIGH"
    return "OK"


def deviations(res: dict, targets: pd.DataFrame) -> pd.DataFrame:
    rows = []
    for _, t in targets.iterrows():
        k = t["key"]
        if k not in res:
            continue
        v = res[k]
        st = status(v, t["Min"], t["Max"])
        lo, hi = TARGET_ACTIONS.get(k, ("-", "-"))
        act = lo if st == "LOW" else hi if st == "HIGH" else ("No action" if st == "OK" else "")
        rows.append(dict(key=k, Parameter=t["Parameter"], Value=v, Min=t["Min"], Max=t["Max"], Unit=t["Unit"],
                         Status=st, Action=act))
    return pd.DataFrame(rows)


# Output catalogue for the results page: key, label, unit, format, group
OUTPUTS = [
    ("CSR", "CSR", "%", "{:.1f}", "Coke quality"), ("CRI", "CRI", "%", "{:.1f}", "Coke quality"),
    ("M40", "M40", "%", "{:.1f}", "Coke quality"), ("M10", "M10", "%", "{:.2f}", "Coke quality"),
    ("ash_coke", "Coke ash", "% db", "{:.2f}", "Coke chemistry"), ("S_coke", "Coke sulphur", "% db", "{:.3f}", "Coke chemistry"),
    ("P_coke", "Coke phosphorus", "% db", "{:.3f}", "Coke chemistry"), ("VM_coke", "Coke VM", "% db", "{:.2f}", "Coke chemistry"),
    ("FC_coke", "Coke fixed carbon", "% db", "{:.2f}", "Coke chemistry"), ("M_coke", "Coke moisture", "%", "{:.1f}", "Coke chemistry"),
    ("Y", "Coke yield (dry basis)", "% of dry coal", "{:.2f}", "Mass balance"),
    ("charge_wet", "Coal charge per oven (wet)", "t", "{:.2f}", "Mass balance"),
    ("coke_wet", "Wet coke per oven", "t", "{:.2f}", "Mass balance"),
    ("bf_oven", "BF coke per oven", "t", "{:.2f}", "Mass balance"),
    ("pushes", "Pushes per day", "pushes/d", "{:.1f}", "Mass balance"),
    ("coal_day", "Coal carbonised per day", "t/d", "{:,.0f}", "Mass balance"),
    ("coke_day", "Gross coke per day", "t/d", "{:,.0f}", "Mass balance"),
    ("bf_day", "BF coke per day", "t/d", "{:,.0f}", "Mass balance"),
    ("bf_kgt", "BF coke yield on wet coal", "kg/t", "{:.0f}", "Mass balance"),
    ("cog", "COG yield", "Nm3/t dry coal", "{:.0f}", "By-products"), ("tar", "Tar yield", "% dry coal", "{:.2f}", "By-products"),
    ("benzol", "Crude benzol", "% dry coal", "{:.2f}", "By-products"), ("nh3", "Ammonia", "kg/t dry coal", "{:.2f}", "By-products"),
    ("Qreq", "Heat requirement incl. losses", "kcal/kg wet coal", "{:.0f}", "Heat balance"),
    ("Qact", "Actual heat input", "kcal/kg wet coal", "{:.0f}", "Heat balance"),
    ("eff", "Heating efficiency (req/actual)", "-", "{:.2f}", "Heat balance"),
    ("fuel", "Underfiring gas", "Nm3/t wet coal", "{:.0f}", "Heat balance"),
    ("lam", "Excess air lambda", "-", "{:.2f}", "Heat balance"),
    ("co2_bf", "Underfiring CO2 per t BF coke", "kg/t", "{:.0f}", "Heat balance"),
    ("steam", "NR steam potential", "kg/t wet coal", "{:.0f}", "Heat balance"),
    ("t_pred", "Predicted net carbonisation time", "h", "{:.2f}", "Carbonisation time"),
    ("t_req", "Required gross time incl. soaking", "h", "{:.2f}", "Carbonisation time"),
    ("t_net", "Net time available", "h", "{:.2f}", "Carbonisation time"),
    ("t_margin", "Coking time margin", "h", "{:.2f}", "Carbonisation time"),
    ("b_Ro", "Blend Ro", "%", "{:.3f}", "Blend"), ("b_MF", "Blend fluidity", "ddpm", "{:,.0f}", "Blend"),
    ("b_VM", "Blend VM", "% db", "{:.2f}", "Blend"), ("b_Ash", "Blend ash", "% db", "{:.2f}", "Blend"),
    ("b_S", "Blend sulphur", "% db", "{:.3f}", "Blend"), ("b_TM", "Blend moisture", "% ar", "{:.2f}", "Blend"),
    ("b_Inert", "Blend inertinite", "% vol", "{:.1f}", "Blend"), ("b_MBI", "Blend MBI", "-", "{:.3f}", "Blend"),
    ("b_Prange", "Plastic range", "degC", "{:.0f}", "Blend"), ("b_Alk", "Alkali in coal", "% db", "{:.3f}", "Blend"),
    ("cost_coal", "Blend cost", "Rs/t wet coal", "{:,.0f}", "Cost"),
    ("cost_wetcoal_t", "Total variable cost", "Rs/t wet coal", "{:,.0f}", "Cost"),
    ("cost_coke", "Coal cost per t BF coke", "Rs/t", "{:,.0f}", "Cost"),
    ("cost_total_bf", "Total cost per t BF coke", "Rs/t", "{:,.0f}", "Cost"),
    ("cost_day", "Total cost per day", "Rs/day", "{:,.0f}", "Cost"),
]
OUT_LABEL = {o[0]: o[1] for o in OUTPUTS}
OUT_UNIT = {o[0]: o[2] for o in OUTPUTS}
OUT_FMT = {o[0]: o[3] for o in OUTPUTS}
# direction where "higher is better" (+1), lower is better (-1), neutral (0)
GOOD_DIR = {"CSR": 1, "CRI": -1, "M40": 1, "M10": -1, "ash_coke": -1, "S_coke": -1, "P_coke": -1, "VM_coke": -1,
            "Y": 1, "bf_day": 1, "bf_kgt": 1, "coke_day": 1, "cost_coal": -1, "cost_coke": -1, "cost_total_bf": -1,
            "cost_wetcoal_t": -1, "co2_bf": -1, "Qreq": -1, "fuel": -1}


def fmt(key, v):
    if v is None or (isinstance(v, float) and (math.isnan(v) or math.isinf(v))):
        return "-"
    f = OUT_FMT.get(key, "{:.2f}")
    try:
        return f.format(v)
    except (ValueError, TypeError):
        return str(v)
