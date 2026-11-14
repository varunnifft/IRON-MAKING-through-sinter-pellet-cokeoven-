/* Coke Making engine: the calculations of Coke_Quality_Module_Reference_Data.xlsx
   (Coal_Blend -> Mass_Balance -> Heat_Balance -> Quality_Predict -> Deviation_Actions), in JavaScript.
   A missing input is NaN and flows through to the results that depend on it, which then show "—". */
(function (root) {
  'use strict';
  var C = {
    yield: { a0: 103.19, aVM: -0.75, aTc: -0.0067 },
    Rs: 0.65, Rp: 1, v0: 1, v1: 0.004, v2: 0.1, cogF: 13.5,
    hfg: 540, cpw: 1, cps: 0.47, cpc: 0.36, cpv: 0.75, qr: 50, loss: 15, lhvVol: 6500,
    tRef: 19, wRef: 450, TflRef: 1250, tRefNR: 48, hRefNR: 1, TcrRefNR: 1300, n: 1.5, T0: 700, m: 0.5, kM: 0.4, Mref: 9,
    ref: { Ro: 1.2, lmf: 2.7, inert: 32, Tc: 1000, ash: 12, BD: 750 },
    CRI: [12, 7, -25, -2, 0.1, -0.03, -1], CSR: [89.1, -1.28], M40: [80, 15, 2, -0.5, 0.01], M10: [7, -4, -0.8, 0.15, -0.004, -0.01],
    nrCRI: -1.5, nrM40: 1, band: { CRI: 3, CSR: 4, M40: 3, M10: 1 }
  };
  function num(x) { return x === null || x === undefined || x === '' ? NaN : +x; }
  function sum(a) { return a.reduce(function (s, x) { return s + x; }, 0); }

  /* ordinary least squares with intercept; returns {b:[b0,b1..], r2, se} or null */
  function ols(y, X) {
    var n = y.length, k = X[0].length + 1; if (n < k + 2) return null;
    var A = [], i, j, r;
    for (i = 0; i < k; i++) { A.push(new Array(k + 1).fill(0)); }
    for (r = 0; r < n; r++) {
      var row = [1].concat(X[r]);
      for (i = 0; i < k; i++) { for (j = 0; j < k; j++) A[i][j] += row[i] * row[j]; A[i][k] += row[i] * y[r]; }
    }
    for (i = 0; i < k; i++) {               // Gauss-Jordan with partial pivoting
      var p = i; for (r = i + 1; r < k; r++) if (Math.abs(A[r][i]) > Math.abs(A[p][i])) p = r;
      var t = A[i]; A[i] = A[p]; A[p] = t; if (Math.abs(A[i][i]) < 1e-12) return null;
      for (r = 0; r < k; r++) if (r !== i) { var f = A[r][i] / A[i][i]; for (j = i; j <= k; j++) A[r][j] -= f * A[i][j]; }
    }
    var b = A.map(function (rw, ii) { return rw[k] / rw[ii]; });
    var my = sum(y) / n, sse = 0, sst = 0;
    for (r = 0; r < n; r++) { var yh = b[0]; for (j = 1; j < k; j++) yh += b[j] * X[r][j - 1]; sse += (y[r] - yh) * (y[r] - yh); sst += (y[r] - my) * (y[r] - my); }
    return { b: b, r2: sst ? 1 - sse / sst : NaN, se: Math.sqrt(sse / (n - k)), n: n };
  }

  /* lab rows: [batch, date, MBI, Ro, MF, inert, VM, ash, S, BD, Tc, quench, Y, cAsh, cS, CRI, CSR, M40, M10] */
  function fit(lab) {
    var R = C.ref, rows = (lab || []).filter(function (r) { return r && r[0] !== null && r[0] !== '' && isFinite(num(r[15])); });
    var n = rows.length; if (!n) return { n: 0 };
    function col(i) { return rows.map(function (r) { return num(r[i]); }); }
    var MBI = col(2), Ro = col(3), lmf = col(4).map(function (x) { return Math.log10(x); }), In = col(5), VM = col(6), S = col(8), BD = col(9), Tc = col(10),
      cdq = rows.map(function (r) { return String(r[11]).toUpperCase() === 'CDQ' ? 1 : 0; }), Y = col(12), cAsh = col(13), cS = col(14), CRI = col(15), CSR = col(16), M40 = col(17), M10 = col(18);
    var X = function (cols) { return rows.map(function (_, i) { return cols.map(function (c) { return c[i]; }); }); };
    var cen = function (a, c) { return a.map(function (x) { return x - c; }); };
    var out = { n: n };
    if (n >= 6 + 3) out.CRI = ols(CRI, X([MBI, cen(Ro, R.Ro), cen(lmf, R.lmf), cen(In, R.inert), cen(Tc, R.Tc), cdq]));
    if (n >= 1 + 3) out.CSR = ols(CSR, X([CRI]));
    if (n >= 4 + 3) out.M40 = ols(M40, X([cen(Ro, R.Ro), cen(lmf, R.lmf), cen(cAsh, R.ash), cen(BD, R.BD)]));
    if (n >= 5 + 3) out.M10 = ols(M10, X([cen(Ro, R.Ro), cen(lmf, R.lmf), cen(cAsh, R.ash), cen(BD, R.BD), cen(Tc, R.Tc)]));
    if (n >= 2 + 3) out.Y = ols(Y, X([VM, Tc]));
    var rs = rows.map(function (r, i) { return cS[i] * Y[i] / (S[i] * 100); }).filter(isFinite);
    out.Rs = rs.length ? sum(rs) / rs.length : NaN;
    return out;
  }

  function compute(inp) {
    var o = {}, k; for (k in inp.o) o[k] = inp.o[k];
    ['nOvens', 'L', 'W', 'H', 'Heff', 'BD', 'turn', 'Mover', 'Tch', 'oil', 'Tflue', 'Tsd', 'Twall', 'Tc', 'tgross', 'soak', 'Tgas', 'Tpush', 'gas', 'LHV', 'EF', 'O2', 'burnoff', 'hrsg', 'cokeM', 'breeze', 'nut', 'hloss'].forEach(function (x) { o[x] = num(o[x]); });
    var NR = o.type === 'Non-recovery', stamp = o.charge === 'Stamp', cdq = String(o.quench).toUpperCase() === 'CDQ';
    var used = inp.coals.filter(function (c) { return num(c.pct) > 0; });
    var g = function (c, p) { return num(c[p]); };
    // ---------- 2. blend
    var B = {};
    var pctSum = sum(used.map(function (c) { return g(c, 'pct'); }));
    var dryDen = sum(used.map(function (c) { return g(c, 'pct') * (100 - g(c, 'TM')); }));
    used.forEach(function (c) { c._x = g(c, 'pct') * (100 - g(c, 'TM')) / dryDen; c._aw = c._x * g(c, 'ash'); });
    var aw = sum(used.map(function (c) { return c._aw; }));
    var dry = function (p) { return sum(used.map(function (c) { return g(c, p) * c._x; })); };
    var ar = function (p) { return sum(used.map(function (c) { return g(c, p) * g(c, 'pct'); })) / pctSum; };
    var ashw = function (p) { return sum(used.map(function (c) { return g(c, p) * c._aw; })) / aw; };
    B.total = pctSum; B.TM = ar('TM'); B.price = ar('price');
    ['ash', 'VM', 'S', 'C', 'H', 'N', 'P', 'GCV', 'Ro', 'vit', 'inert', 'lipt', 'Tmf', 'Tsoft', 'Tres', 'dil', 'contr', 'FSI', 'HGI', 'fine'].forEach(function (p) { B[p] = dry(p); });
    B.FC = 100 - B.ash - B.VM; B.O = 100 - B.ash - B.C - B.H - B.N - B.S; B.PR = B.Tres - B.Tsoft;
    B.lmf = sum(used.map(function (c) { return c._x * Math.log10(Math.max(g(c, 'MF'), 1)); })); B.MF = Math.pow(10, B.lmf);
    ['SiO2', 'Al2O3', 'Fe2O3', 'CaO', 'MgO', 'Na2O', 'K2O', 'P2O5'].forEach(function (p) { B[p] = ashw(p); });
    var bas = B.Fe2O3 + B.CaO + B.MgO + B.Na2O + B.K2O, acid = B.SiO2 + B.Al2O3;
    B.BA = bas / acid; B.MBI = 100 * B.ash * bas / ((100 - B.VM) * acid); B.alk = B.ash * (B.Na2O + B.K2O) / 100;
    B.react = B.vit + B.lipt; B.IR = B.inert / B.react;
    B.perCoal = inp.coals.map(function (c) {
      var a = g(c, 'ash'), vm = g(c, 'VM'), b2 = g(c, 'Fe2O3') + g(c, 'CaO') + g(c, 'MgO') + g(c, 'Na2O') + g(c, 'K2O'), a2 = g(c, 'SiO2') + g(c, 'Al2O3');
      return { name: c.name, pct: g(c, 'pct'), MBI: 100 * a * b2 / ((100 - vm) * a2), xdry: c._x };
    });
    // ---------- coefficients
    var F = inp.coefSet === 'Fitted' ? fit(inp.lab) : { n: 0 };
    var useF = function (m) { return inp.coefSet === 'Fitted' && F[m] && F[m].b.every(isFinite); };
    var cY = useF('Y') ? { a0: F.Y.b[0], aVM: F.Y.b[1], aTc: F.Y.b[2] } : C.yield;
    var Rs = inp.coefSet === 'Fitted' && isFinite(F.Rs) ? F.Rs : C.Rs;
    var bCRI = useF('CRI') ? F.CRI.b : C.CRI, bCSR = useF('CSR') ? F.CSR.b : C.CSR, bM40 = useF('M40') ? F.M40.b : C.M40, bM10 = useF('M10') ? F.M10.b : C.M10;
    // ---------- 1. oven
    var Ov = {}; Ov.vol = o.L * o.W / 1000 * o.Heff; Ov.coal = Ov.vol * o.BD / 1000;
    // ---------- 3. operations
    var M = isFinite(o.Mover) ? o.Mover : B.TM;
    // ---------- 4. mass balance
    var MB = {}; MB.wet = Ov.coal; MB.M = M; MB.dry = MB.wet * (1 - M / 100); MB.ashIn = MB.dry * B.ash / 100; MB.SIn = MB.dry * B.S / 100;
    MB.Y = cY.a0 + cY.aVM * B.VM + cY.aTc * o.Tc - (NR ? o.burnoff : 0);
    MB.dryCoke = MB.dry * MB.Y / 100; MB.cAsh = MB.ashIn / MB.dryCoke * 100; MB.cS = MB.SIn * Rs / MB.dryCoke * 100; MB.cP = B.P * C.Rp * 100 / MB.Y;
    MB.cVM = Math.max(0.3, C.v0 - C.v1 * (o.Tc - 1000) - C.v2 * o.soak); MB.cFC = 100 - MB.cAsh - MB.cVM; MB.cM = o.cokeM;
    MB.wetCoke = MB.dryCoke / (1 - MB.cM / 100); MB.bfFrac = 100 - o.breeze - o.nut - o.hloss;
    MB.bfOven = MB.wetCoke * MB.bfFrac / 100; MB.nutOven = MB.wetCoke * o.nut / 100; MB.breezeOven = MB.wetCoke * o.breeze / 100;
    MB.pushes = o.nOvens * 24 / o.tgross; MB.coalDay = MB.wet * MB.pushes; MB.cokeDay = MB.wetCoke * MB.pushes; MB.bfDay = MB.bfOven * MB.pushes;
    MB.bfY = MB.bfOven / MB.wet * 1000; MB.cost = B.price; MB.costBF = MB.cost * 1000 / MB.bfY; MB.Rs = Rs;
    MB.cog = NR ? 0 : C.cogF * B.VM; MB.tar = NR ? 0 : Math.max(0, 0.15 * B.VM - 0.3); MB.benzol = NR ? 0 : 0.035 * B.VM; MB.nh3 = NR ? 0 : B.N * 10 * 0.15 * 17 / 14;
    // ---------- 5. heat balance
    var H = {}, dr = 1 - M / 100;
    H.qM = M / 100 * (C.hfg + C.cpw * (100 - o.Tch) + C.cps * (o.Tgas - 100));
    H.qC = dr * MB.Y / 100 * C.cpc * (o.Tpush - o.Tch); H.qV = dr * (1 - MB.Y / 100) * C.cpv * (o.Tgas - o.Tch); H.qR = dr * C.qr;
    H.net = H.qM + H.qC + H.qV + H.qR; H.req = H.net / (1 - C.loss / 100);
    H.act = o.gas * o.LHV / 1000; H.theoFuel = H.req * 1000 / o.LHV; H.eff = H.act > 0 ? H.req / H.act : NaN;
    H.lam = 21 / (21 - o.O2); H.co2 = o.gas * o.EF; H.co2BF = H.co2 * 1000 / MB.bfY;
    H.vol = dr * (100 - MB.Y) / 100; H.qVol = NR ? H.vol * C.lhvVol : 0; H.surplus = NR ? Math.max(0, H.qVol - H.req) : 0; H.steam = H.surplus * o.hrsg / 700 * 1000;
    H.nrCO2 = NR ? dr * (B.C - MB.Y * (MB.cFC + 0.5) / 100) / 100 * 44 / 12 * 1000 : 0;
    H.tNet = (NR ? C.tRefNR : C.tRef) * Math.pow(NR ? o.Heff / C.hRefNR : o.W / C.wRef, C.n) *
      (NR ? (C.TcrRefNR - C.T0) / (o.Tflue - C.T0) : (C.TflRef - C.T0) / (o.Tflue - C.T0)) * Math.pow(o.BD / 750, C.m) + C.kM * (M - C.Mref);
    H.tReq = H.tNet + o.soak; H.tAvail = o.tgross - o.turn; H.margin = H.tAvail - H.tReq; H.rate = (NR ? o.Heff * 1000 : o.W / 2) / H.tNet;
    // ---------- 6. quality
    var R = C.ref, Q = {};
    Q.CRI = bCRI[0] + bCRI[1] * B.MBI + bCRI[2] * (B.Ro - R.Ro) + bCRI[3] * (B.lmf - R.lmf) + bCRI[4] * (B.inert - R.inert) + bCRI[5] * (o.Tc - R.Tc) + bCRI[6] * (cdq ? 1 : 0) + C.nrCRI * (NR ? 1 : 0);
    Q.CSR = bCSR[0] + bCSR[1] * Q.CRI;
    Q.M40 = bM40[0] + bM40[1] * (B.Ro - R.Ro) + bM40[2] * (B.lmf - R.lmf) + bM40[3] * (MB.cAsh - R.ash) + bM40[4] * (o.BD - R.BD) + C.nrM40 * (NR ? 1 : 0);
    Q.M10 = bM10[0] + bM10[1] * (B.Ro - R.Ro) + bM10[2] * (B.lmf - R.lmf) + bM10[3] * (MB.cAsh - R.ash) + bM10[4] * (o.BD - R.BD) + bM10[5] * (o.Tc - R.Tc);
    var bd = function (m) { return useF(m) ? 2 * F[m].se : C.band[m]; };
    Q.band = { CRI: bd('CRI'), CSR: bd('CSR'), M40: bd('M40'), M10: bd('M10') };
    Q.set = { CRI: useF('CRI'), CSR: useF('CSR'), M40: useF('M40'), M10: useF('M10'), Y: useF('Y') };
    // ---------- 8. deviations
    var val = { CSR: Q.CSR, CRI: Q.CRI, M40: Q.M40, M10: Q.M10, cAsh: MB.cAsh, cS: MB.cS, cP: MB.cP, cVM: MB.cVM, cM: MB.cM, bfY: MB.bfY,
      bTot: B.total, bRo: B.Ro, bMF: B.MF, bVM: B.VM, bAsh: B.ash, bInert: B.inert, bMBI: B.MBI, bPR: B.PR, chM: M, bFine: B.fine, margin: H.margin, Tsd: o.Tsd, heff: H.eff, lam: H.lam };
    var dev = inp.targets.map(function (t) {
      var mn = t.min, mx = t.max;
      if (t.k === 'chM') { mn = stamp ? 9 : 8; mx = stamp ? 11 : 10; }
      if (t.k === 'bFine') { mn = stamp ? 88 : 78; mx = stamp ? 92 : 85; }
      var v = val[t.k], st = (mn == null && mx == null) ? '-' : !isFinite(v) ? 'N/A' : (mn != null && v < mn) ? 'LOW' : (mx != null && v > mx) ? 'HIGH' : 'OK';
      return { k: t.k, label: t.label, sec: t.sec, v: v, min: mn, max: mx, st: st, act: st === 'LOW' ? t.low : st === 'HIGH' ? t.high : st === 'OK' ? 'No action' : st === 'N/A' ? 'Needs the missing input(s)' : '-' };
    });
    return { B: B, Ov: Ov, MB: MB, H: H, Q: Q, dev: dev, fit: F, coefSet: inp.coefSet, NR: NR, stamp: stamp, cdq: cdq, used: used.length };
  }
  root.CokeEngine = { compute: compute, fit: fit, ols: ols, C: C };
  if (typeof module !== 'undefined') module.exports = root.CokeEngine;
})(typeof window !== 'undefined' ? window : globalThis);
