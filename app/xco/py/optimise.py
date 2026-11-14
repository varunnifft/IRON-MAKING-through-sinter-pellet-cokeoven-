"""
Least-cost optimisation of coal blend + machine operation / process method.

Decision variables
  * blend % of every coal (within its Min / Max %)                     -> "coal mix"
  * continuous operating levers: oil addition, flue temperature,
    gross coking time, charge moisture                                  -> "machine operation"
  * discrete process methods: charging (Top / Stamp), quenching (Wet / CDQ) -> "process method"

Objective: total cost per t BF coke (coal + gas + oil + stamping + other variable + CDQ
- by-product credits + fixed cost / production), using the prices the user entered.
Constraints: every target with "Optimise" ticked (min and/or max), plus coking-time margin >= 0.

Operating-response links used when a lever moves (assumed, editable in Coefficients):
  BD   = BD_base + k_oil_bd x (oil - oil_base)            (stamp: BD = stamp bulk density)
  Tc   = Tc_base + k_tc_flue x dT_flue + k_tc_margin x d(margin)   (capped at Tc_max)
  Tpush= Tpush_base + (Tc - Tc_base)
  fuel = fuel_base x Qreq / Qreq_base                      (heating efficiency held constant)
"""
from __future__ import annotations

import itertools
import math

import numpy as np
import pandas as pd
from scipy.optimize import minimize

import engine as E

LEVERS = [
    # key, label, unit, allowed default, min/max as offsets or absolute (callable on params)
    ("oil", "Oil addition to coal (raises bulk density)", "% ar", True, lambda p: (0.0, 0.4)),
    ("T_flue", "Mean flue temperature", "degC", True, lambda p: (E.num(p["T_flue"]) - 40, min(1350, E.num(p["T_flue"]) + 40))),
    ("t_gross", "Gross coking time", "h", True, lambda p: (E.num(p["t_gross"]) - 2, E.num(p["t_gross"]) + 3)),
    ("M", "Charge moisture (dewatering / water addition)", "%", False, lambda p: (8.0, 11.0)),
    ("stamp", "Switch to stamp charging (if stamp machine available)", "yes/no", False, lambda p: (0, 1)),
    ("BD_stamp", "Stamp-charge bulk density (wet), if stamp used", "kg/m3", False, lambda p: (1050, 1050)),
    ("cdq", "Use CDQ (dry quenching) if available", "yes/no", False, lambda p: (0, 1)),
]


def default_levers(params: dict) -> pd.DataFrame:
    rows = []
    for k, lab, unit, allowed, rng in LEVERS:
        lo, hi = rng(params)
        cur = {"oil": E.num(params.get("oil")), "T_flue": E.num(params.get("T_flue")),
               "t_gross": E.num(params.get("t_gross")),
               "M": None, "stamp": 1 if params.get("charging") == "Stamp" else 0,
               "BD_stamp": E.num(params.get("BD")) if params.get("charging") == "Stamp" else 1050,
               "cdq": 1 if params.get("quench") == "CDQ" else 0}[k]
        rows.append(dict(key=k, Lever=lab, Unit=unit, Allowed=allowed, Min=lo, Max=hi, Current=cur))
    return pd.DataFrame(rows)


# scales used to normalise constraint violations
SCALE = {"CSR": 1, "CRI": 1, "M40": 1, "M10": 0.2, "ash_coke": 0.2, "S_coke": 0.02, "P_coke": 0.005,
         "VM_coke": 0.1, "M_coke": 0.5, "bf_kgt": 5, "bf_day": 10, "b_Ro": 0.02, "b_MF": 20, "b_VM": 0.5,
         "b_Ash": 0.2, "b_Inert": 1, "b_MBI": 0.05, "b_Prange": 2, "t_margin": 0.1, "T_sd": 1, "eff": 0.02, "lam": 0.02}


class Problem:
    def __init__(self, params, coals: pd.DataFrame, prices, coef, coefset, lab, targets: pd.DataFrame,
                 levers: pd.DataFrame):
        self.p0 = dict(params)
        self.coals_df = coals.reset_index(drop=True)
        self.ca = E.prep_coals(self.coals_df)
        self.prices = prices
        self.coef = E.default_coef()
        self.coef.update(coef or {})
        self.coefset = coefset
        self.fits = E.fit_models(lab, self.coef) if coefset == "Fitted" else None
        self.lab = lab
        self.base = self.calc(self.p0)
        self.lev = {r["key"]: r for _, r in levers.iterrows()}
        cons = []
        for _, t in targets.iterrows():
            if not bool(t.get("Optimise")):
                continue
            k = t["key"]
            if k not in self.base:
                continue
            if not E.blank(t["Min"]):
                cons.append((k, "min", float(t["Min"])))
            if not E.blank(t["Max"]):
                cons.append((k, "max", float(t["Max"])))
        if not any(k == "t_margin" and s == "min" for k, s, _ in cons):
            cons.append(("t_margin", "min", 0.0))
        self.cons = cons
        self.has_price = (np.isfinite(self.ca["Price"]).any() and np.nanmax(self.ca["Price"]) > 0) or \
            any(E.num(v) != 0 for v in (prices or {}).values())
        self.n = len(self.ca["name"])
        lo = np.array([max(0.0, E.num(v)) for v in self.ca["Min"]])
        hi = np.array([min(100.0, E.num(v, 100.0)) for v in self.ca["Max"]])
        # a coal without a price cannot be costed, so it may not be increased above its current share
        self.unpriced = [self.ca["name"][i] for i in range(len(lo)) if not np.isfinite(self.ca["Price"][i])]
        if self.has_price:
            for i in range(len(lo)):
                if not np.isfinite(self.ca["Price"][i]):
                    hi[i] = min(hi[i], max(self.ca["pct"][i], 0.0))
                    lo[i] = min(lo[i], hi[i])
        hi = np.maximum(hi, lo)
        if hi.sum() < 100 - 1e-6 or lo.sum() > 100 + 1e-6:
            raise ValueError(f"Coal Min/Max limits cannot add up to 100 % (sum of Max = {hi.sum():.1f} %, "
                             f"sum of Min = {lo.sum():.1f} %). Widen the limits or add prices for unpriced coals.")
        self.blo, self.bhi = lo, hi
        self.pct0 = self.ca["pct"].copy()
        self.Tc0, self.Tp0 = E.num(self.p0.get("Tc")), E.num(self.p0.get("T_push"))
        self.BD0, self.oil0 = E.num(self.p0.get("BD")), E.num(self.p0.get("oil"))
        self.Tf0 = E.num(self.p0.get("T_flue"))
        self.fuel0, self.Qreq0, self.margin0 = E.num(self.p0.get("fuel")), self.base["Qreq"], self.base["t_margin"]

    def calc(self, params, pct=None):
        return E.calculate(params, self.ca, self.prices, self.coef, self.coefset, self.lab, self.fits, pct=pct)

    # ------------------------------------------------------------------
    def scenario(self, pct, ops: dict):
        """Build scenario parameters from blend % and lever settings, apply response links, return (params, results)."""
        p = dict(self.p0)
        stamp = ops.get("stamp", 1 if p.get("charging") == "Stamp" else 0)
        base_stamp = p.get("charging") == "Stamp"
        p["charging"] = "Stamp" if stamp else "Top"
        p["quench"] = "CDQ" if ops.get("cdq", 1 if p.get("quench") == "CDQ" else 0) else "Wet"
        oil = ops.get("oil", self.oil0)
        p["oil"] = oil
        if stamp and not base_stamp:
            bd = ops.get("BD_stamp", 1050)
        elif stamp and base_stamp:
            bd = ops.get("BD_stamp", self.BD0)
        elif not stamp and base_stamp:
            bd = 760
        else:
            bd = self.BD0
        if not stamp:
            bd = bd + self.coef["k_oil_bd"] * (oil - (self.oil0 if not base_stamp else 0))
        p["BD"] = bd
        if "T_flue" in ops:
            p["T_flue"] = ops["T_flue"]
        if "t_gross" in ops:
            p["t_gross"] = ops["t_gross"]
        if "M" in ops and ops["M"] is not None:
            p["M_ovr"] = ops["M"]
        # first pass -> coking margin
        r1 = self.calc(p, pct)
        dT = E.num(p["T_flue"]) - self.Tf0
        tc = self.Tc0 + self.coef["k_tc_flue"] * dT + self.coef["k_tc_margin"] * (r1["t_margin"] - self.margin0)
        tc = min(tc, max(self.coef["Tc_max"], self.Tc0))
        p["Tc"] = tc
        p["T_push"] = self.Tp0 + (tc - self.Tc0)
        r2 = self.calc(p, pct)
        if self.Qreq0 > 0 and str(p.get("oven_type")) != "Non-recovery":
            p["fuel"] = self.fuel0 * r2["Qreq"] / self.Qreq0
            r2 = self.calc(p, pct)
        return p, r2

    def violation(self, r):
        v = 0.0
        det = []
        for k, s, lim in self.cons:
            val = r[k]
            d = (lim - val) if s == "min" else (val - lim)
            if d > 1e-6:
                v += (d / SCALE.get(k, 1)) ** 2
                det.append((k, s, lim, val))
        return v, det

    def objective_value(self, r):
        return r["cost_total_bf"] if self.has_price else -r["CSR"]


def _project(x, lo, hi, total=100.0):
    """Project onto {lo <= x <= hi, sum x = total} (simple iterative)."""
    x = np.clip(x, lo, hi)
    for _ in range(50):
        d = total - x.sum()
        if abs(d) < 1e-9:
            break
        free = (x < hi - 1e-12) if d > 0 else (x > lo + 1e-12)
        if not free.any():
            break
        x[free] += d / free.sum()
        x = np.clip(x, lo, hi)
    return x


def solve(prob: Problem, vary_blend=True, cont_levers=(), discrete: dict | None = None, extra_cons=None,
          starts=6, seed=1):
    """Optimise blend (optional) + chosen continuous levers for fixed discrete settings."""
    discrete = discrete or {}
    lev = prob.lev
    cont = [k for k in cont_levers]
    n = prob.n if vary_blend else 0
    lo_l = np.array([E.num(lev[k]["Min"]) for k in cont])
    hi_l = np.array([E.num(lev[k]["Max"]) for k in cont])
    cur_l = []
    for k in cont:
        c = lev[k]["Current"]
        if E.blank(c):
            c = prob.base["M"] if k == "M" else (lo_l[cont.index(k)] + hi_l[cont.index(k)]) / 2
        cur_l.append(min(max(E.num(c), lo_l[cont.index(k)]), hi_l[cont.index(k)]))
    cur_l = np.array(cur_l)
    span_l = np.where(hi_l - lo_l > 0, hi_l - lo_l, 1.0)
    cons_list = prob.cons + list(extra_cons or [])
    cache = {}

    def unpack(z):
        pct = _project(z[:n].copy(), prob.blo, prob.bhi) if n else prob.pct0
        ops = dict(discrete)
        for i, k in enumerate(cont):
            ops[k] = lo_l[i] + z[n + i] * span_l[i]
        return pct, ops

    def ev(z):
        key = tuple(np.round(z, 9))
        if key not in cache:
            pct, ops = unpack(z)
            try:
                _, r = prob.scenario(pct, ops)
            except Exception:
                r = None
            cache[key] = r
        return cache[key]

    obj_scale = max(abs(prob.objective_value(prob.base)), 1.0)

    def f(z):
        r = ev(z)
        return 1e3 if r is None else prob.objective_value(r) / obj_scale * 100

    def g_factory(k, s, lim):
        def g(z):
            r = ev(z)
            if r is None:
                return -1e3
            return ((r[k] - lim) if s == "min" else (lim - r[k])) / SCALE.get(k, 1)
        return g

    cons = [{"type": "ineq", "fun": g_factory(k, s, lim)} for k, s, lim in cons_list]
    if n:
        cons.append({"type": "eq", "fun": lambda z: (z[:n].sum() - 100.0) / 10})
    bounds = [(prob.blo[i], prob.bhi[i]) for i in range(n)] + [(0.0, 1.0)] * len(cont)

    rng = np.random.default_rng(seed)
    x0s = []
    zl = (cur_l - lo_l) / span_l if len(cont) else np.array([])
    if n:
        x0s.append(np.concatenate([_project(prob.pct0.copy(), prob.blo, prob.bhi), zl]))
        for _ in range(starts):
            w = rng.dirichlet(np.ones(n)) * 100
            x0s.append(np.concatenate([_project(w, prob.blo, prob.bhi), rng.uniform(0, 1, len(cont))]))
    else:
        x0s.append(zl)
        for _ in range(min(starts, 3) if len(cont) else 0):
            x0s.append(rng.uniform(0, 1, len(cont)))
    best = None
    for x0 in x0s:
        if len(x0) == 0:
            pct, ops = unpack(x0)
            _, r = prob.scenario(pct, ops)
            best = (x0, r, _viol(r, cons_list))
            break
        try:
            res = minimize(f, x0, method="SLSQP", bounds=bounds, constraints=cons,
                           options={"maxiter": 200, "ftol": 1e-7})
            z = res.x
        except Exception:
            z = x0
        r = ev(z)
        if r is None:
            continue
        viol = _viol(r, cons_list)
        cand = (z, r, viol)
        if best is None or _better(prob, cand, best):
            best = cand
    # if still infeasible, minimise violation then cost
    if best is not None and best[2][0] > 1e-6 and len(best[0]):
        def fv(z):
            r = ev(z)
            if r is None:
                return 1e9
            return _viol(r, cons_list)[0] * 1e3 + prob.objective_value(r) / obj_scale
        eqc = [{"type": "eq", "fun": lambda z: (z[:n].sum() - 100.0) / 10}] if n else []
        for x0 in [best[0]] + x0s[:3]:
            try:
                res = minimize(fv, x0, method="SLSQP", bounds=bounds, constraints=eqc, options={"maxiter": 300})
                r = ev(res.x)
                if r is not None:
                    cand = (res.x, r, _viol(r, cons_list))
                    if _better(prob, cand, best):
                        best = cand
            except Exception:
                pass
    z, r, viol = best
    pct, ops = unpack(z)
    p, r = prob.scenario(pct, ops)
    return dict(pct=pct, ops=ops, params=p, res=r, feasible=viol[0] <= 1e-6, violations=viol[1])


def _viol(r, cons):
    v, det = 0.0, []
    for k, s, lim in cons:
        val = r[k]
        d = (lim - val) if s == "min" else (val - lim)
        tol = 1e-4 * max(1.0, abs(lim))
        if d > tol:
            v += (d / SCALE.get(k, 1)) ** 2
            det.append((k, s, lim, val))
    return v, det


def _better(prob, a, b):
    fa, fb = a[2][0] <= 1e-6, b[2][0] <= 1e-6
    if fa != fb:
        return fa
    if not fa:
        return a[2][0] < b[2][0] - 1e-9 or (abs(a[2][0] - b[2][0]) < 1e-9 and prob.objective_value(a[1]) < prob.objective_value(b[1]))
    return prob.objective_value(a[1]) < prob.objective_value(b[1])


# ---------------------------------------------------------------------------
def discrete_options(prob: Problem):
    lev = prob.lev
    stamp0 = 1 if prob.p0.get("charging") == "Stamp" else 0
    cdq0 = 1 if prob.p0.get("quench") == "CDQ" else 0
    st = [stamp0, 1 - stamp0] if bool(lev["stamp"]["Allowed"]) else [stamp0]
    cq = [cdq0, 1 - cdq0] if bool(lev["cdq"]["Allowed"]) else [cdq0]
    out = []
    for s, c in itertools.product(st, cq):
        d = {"stamp": s, "cdq": c}
        if s:
            d["BD_stamp"] = E.num(lev["BD_stamp"]["Max"], 1050) if not stamp0 else prob.BD0
        out.append(d)
    return out


def cont_allowed(prob: Problem):
    return [k for k in ("oil", "T_flue", "t_gross", "M") if bool(prob.lev[k]["Allowed"])]


def run_all(prob: Problem, progress=None):
    """Return a list of option dicts: label, kind, result of solve()."""
    opts = []
    steps = []
    base_disc = {"stamp": 1 if prob.p0.get("charging") == "Stamp" else 0,
                 "cdq": 1 if prob.p0.get("quench") == "CDQ" else 0}
    steps.append(("A. Coal blend change only", "blend", dict(vary_blend=True, cont_levers=(), discrete=base_disc)))
    steps.append(("B. Machine operation / process change only", "ops", None))
    for d in discrete_options(prob):
        nm = ("Stamp" if d["stamp"] else "Top") + " charge, " + ("CDQ" if d["cdq"] else "Wet") + " quench"
        steps.append((f"C. Blend + operation ({nm})", "combined", dict(vary_blend=True, cont_levers=cont_allowed(prob), discrete=d)))
    total = len(steps)
    for i, (label, kind, kw) in enumerate(steps):
        if progress:
            progress(i / total, label)
        if kind == "ops":
            best = None
            for d in discrete_options(prob):
                s = solve(prob, vary_blend=False, cont_levers=cont_allowed(prob), discrete=d)
                cand = (None, s["res"], (0.0 if s["feasible"] else 1.0 + len(s["violations"]), []))
                if best is None or _better(prob, cand, (None, best["res"], (0.0 if best["feasible"] else 1.0 + len(best["violations"]), []))):
                    best = s
            sol = best
        else:
            sol = solve(prob, **kw)
        sol["label"], sol["kind"] = label, kind
        opts.append(sol)
    if progress:
        progress(1.0, "done")
    return opts


def tradeoff(prob: Problem, sol: dict, key="CSR", steps=(1, 2, 3)):
    """Cost of extra quality: re-optimise with the target tightened by +1, +2, +3 points."""
    t = [c for c in prob.cons if c[0] == key]
    base_lim = t[0][2] if t else sol["res"][key]
    rows = []
    for s in steps:
        lim = base_lim + s if key != "CRI" else base_lim - s
        extra = [(key, "min" if key != "CRI" else "max", lim)]
        cons_save = prob.cons
        prob.cons = [c for c in prob.cons if c[0] != key]
        disc = {k: sol["ops"][k] for k in ("stamp", "cdq", "BD_stamp") if k in sol["ops"]}
        try:
            r = solve(prob, vary_blend=True, cont_levers=cont_allowed(prob), discrete=disc, extra_cons=extra, starts=3)
        finally:
            prob.cons = cons_save
        rows.append({f"{key} target": lim, "Feasible": "Yes" if r["feasible"] else "No",
                     "Cost Rs/t BF coke": r["res"]["cost_total_bf"], "Cost change vs option": r["res"]["cost_total_bf"] - sol["res"]["cost_total_bf"],
                     **{n: round(v, 1) for n, v in zip(prob.ca["name"], r["pct"])}})
    return pd.DataFrame(rows)


def sensitivity(prob: Problem):
    """Effect of one-at-a-time changes around the current case (process-wise guidance)."""
    base = prob.base
    rows = []

    def add(label, pct=None, ops=None):
        _, r = prob.scenario(prob.pct0 if pct is None else pct, ops or {})
        rows.append({"Change": label, "CSR": r["CSR"] - base["CSR"], "CRI": r["CRI"] - base["CRI"],
                     "M40": r["M40"] - base["M40"], "M10": r["M10"] - base["M10"],
                     "BF coke t/d": r["bf_day"] - base["bf_day"], "Cost Rs/t BF coke": r["cost_total_bf"] - base["cost_total_bf"],
                     "Coking margin h": r["t_margin"] - base["t_margin"]})

    add("Flue temperature +10 degC", ops={"T_flue": prob.Tf0 + 10})
    add("Gross coking time +1 h", ops={"t_gross": E.num(prob.p0["t_gross"]) + 1})
    add("Gross coking time -1 h", ops={"t_gross": E.num(prob.p0["t_gross"]) - 1})
    if prob.p0.get("charging") != "Stamp":
        add("Oil addition +0.1 %", ops={"oil": prob.oil0 + 0.1})
        add("Switch to stamp charging (BD 1050)", ops={"stamp": 1, "BD_stamp": 1050})
    add("Charge moisture -1 %", ops={"M": prob.base["M"] - 1})
    if prob.p0.get("quench") != "CDQ":
        add("Switch to CDQ", ops={"cdq": 1})
    for i, nm in enumerate(prob.ca["name"]):
        if prob.pct0[i] >= 100:
            continue
        pct = prob.pct0.copy()
        others = pct.sum() - pct[i]
        if others <= 0:
            continue
        step = min(5.0, others)
        pct = pct - (pct * step / others)
        pct[i] = prob.pct0[i] + step
        add(f"+5 % {nm} (others reduced pro rata)", pct=pct)
    return pd.DataFrame(rows)


def explain(prob: Problem, sol: dict) -> list[str]:
    """Plain-language list of what changes vs the current case."""
    out = []
    if sol["kind"] != "ops":
        for nm, a, b in zip(prob.ca["name"], prob.pct0, sol["pct"]):
            if abs(b - a) >= 0.5:
                out.append(f"{'Increase' if b > a else 'Reduce'} **{nm}** from {a:.1f} % to {b:.1f} %")
    p0, p1 = prob.p0, sol["params"]
    if p1.get("charging") != p0.get("charging"):
        out.append(f"Change charging method from {p0.get('charging')} to **{p1.get('charging')}** (bulk density {E.num(p1['BD']):.0f} kg/m3)")
    if p1.get("quench") != p0.get("quench"):
        out.append(f"Change quenching from {p0.get('quench')} to **{p1.get('quench')}**")
    for k, lab, unit, f in (("oil", "oil addition", "%", "{:.2f}"), ("T_flue", "mean flue temperature", "degC", "{:.0f}"),
                            ("t_gross", "gross coking time", "h", "{:.1f}")):
        a, b = E.num(p0.get(k)), E.num(p1.get(k))
        if abs(b - a) > (0.01 if k == "oil" else 0.5 if k == "T_flue" else 0.05):
            out.append(f"{'Raise' if b > a else 'Lower'} {lab} from {f.format(a)} to **{f.format(b)} {unit}**")
    if not E.blank(p1.get("M_ovr")) and abs(E.num(p1["M_ovr"]) - prob.base["M"]) > 0.05:
        out.append(f"Adjust charge moisture from {prob.base['M']:.1f} % to **{E.num(p1['M_ovr']):.1f} %**")
    if p1.get("charging") == p0.get("charging") == "Top" and abs(E.num(p1["BD"]) - prob.BD0) > 1:
        out.append(f"Resulting bulk density {prob.BD0:.0f} -> {E.num(p1['BD']):.0f} kg/m3")
    if abs(E.num(p1["Tc"]) - prob.Tc0) > 1:
        out.append(f"Expected coke centre temperature {prob.Tc0:.0f} -> {E.num(p1['Tc']):.0f} degC")
    if not out:
        out.append("No change needed: the current case is already the cheapest that meets the targets.")
    return out
