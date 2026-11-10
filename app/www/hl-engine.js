/* Hearth Liquid Inventory engine — exact JavaScript replica of BF_Hearth_Liquid_Module_1.xlsx
   (Inputs H-block, Model_Calc, Tap_Log calibration, Simulation 2 880 steps, Tap_Summary, Dashboard).
   Times are minutes since 1970 (local clock), dates are handled by the caller. */
(function (root) {
  'use strict';
  var g = 9.81;
  function num(v) { return typeof v === 'number' && isFinite(v); }
  function avg(a) { a = a.filter(num); return a.length ? a.reduce(function (s, x) { return s + x; }, 0) / a.length : ''; }

  function derive(I) {
    var D = {};
    D.A_hearth = Math.PI / 4 * I.D_hearth * I.D_hearth;
    D.A_eff = D.A_hearth * I.eps;
    D.V_sump = D.A_hearth * I.H_sump * I.eps;
    D.M_sump_t = D.V_sump * I.rho_HM / 1000;
    D.A_th = Math.PI / 4 * Math.pow(I.D_bit / 1000, 2);
    D.P_gas = I.P_blast * 100000;
    D.rho_mix = (1000 + I.SlagRate) / (1000 / I.rho_HM + I.SlagRate / I.rho_SL);
    D.HM_tpm = I.P_day / 1440; D.SL_tpm = D.HM_tpm * I.SlagRate / 1000;
    D.HM_m3pm = D.HM_tpm * 1000 / I.rho_HM; D.SL_m3pm = D.SL_tpm * 1000 / I.rho_SL;
    D.Rise_rate = (D.HM_m3pm + D.SL_m3pm) / D.A_eff * 1000;
    D.H_res_slag = I.EndObs === 'Clean blow' ? I.Opt_clean : I.EndObs === 'Slaggy blow' ? I.Opt_slaggy : I.Opt_normal;
    D.V_res = D.A_eff * D.H_res_slag; D.M_res_t = D.V_res * I.rho_SL / 1000;
    D.H_calib = D.H_res_slag * I.rho_SL / D.rho_mix;
    D.Cd_default = 0.55;
    return D;
  }

  // Tap_Log calculated columns N–AD; rows = [{th, open, close (minutes), hm, slag, first, end, pb, bit, len, prod, rem}]
  function tapLog(I, D, rows) {
    var out = [], S = 0;
    rows.forEach(function (r, i) {
      var p = i > 0 ? rows[i - 1] : null, c = {};
      c.N = num(r.open) && num(r.close) ? r.close - r.open : '';
      c.O = p && num(r.open) && num(p.close) ? r.open - p.close : '';
      c.P = p && num(r.close) && num(p.close) ? r.close - p.close : '';
      c.Q = c.P === '' ? '' : c.P * (num(r.prod) ? r.prod : I.P_day) / 1440;
      c.R = c.Q === '' || !num(r.hm) ? '' : c.Q - r.hm;
      c.S = c.R === '' ? '' : (i === 0 ? c.R : (num(S) ? S : 0) + c.R); S = c.S;
      c.T = c.N === '' ? '' : (num(r.slag) ? r.slag : (c.Q !== '' ? c.Q : r.hm) * I.SlagRate / 1000);
      c.U = c.N === '' ? '' : (num(r.slag) ? 'Measured' : 'Estimated');
      c.V = c.N === '' || !num(r.hm) ? '' : r.hm / c.N;
      c.W = c.N === '' ? '' : c.T / c.N;
      c.X = c.V === '' ? '' : c.V + c.W;
      c.Y = c.V === '' ? '' : (r.hm * 1000 / I.rho_HM + c.T * 1000 / I.rho_SL) / (c.N * 60);
      c.Z = c.V === '' ? '' : (r.hm + c.T) * 1000 / (r.hm * 1000 / I.rho_HM + c.T * 1000 / I.rho_SL);
      c.AA = c.V === '' ? '' : (num(r.pb) ? r.pb : I.P_blast) * 100000 + c.Z * g * D.H_calib;
      c.AB = c.V === '' ? '' : Math.PI / 4 * Math.pow((num(r.bit) ? r.bit : I.D_bit) / 1000, 2);
      c.AC = c.V === '' ? '' : c.Y / (c.AB * Math.sqrt(2 * c.AA / c.Z));
      c.AD = c.AC === '' ? 0 : (r.end === 'Blow' && c.N >= 20 && c.AC > 0.1 && c.AC < 1.5 ? 1 : 0);
      out.push(c);
    });
    return out;
  }

  function run(I, rows, opt) {
    opt = opt || {};
    var D = derive(I), L = tapLog(I, D, rows);
    var valid = L.filter(function (c) { return c.AD === 1; });
    D.Cd_n = valid.length; D.Cd = D.Cd_n >= 3 ? avg(valid.map(function (c) { return c.AC; })) : D.Cd_default;
    D.Q_cap_t = D.Cd * D.A_th * Math.sqrt(2 * D.P_gas / D.rho_mix) * 60 * D.rho_mix / 1000;
    D.Cap_ratio = D.Q_cap_t / (D.HM_tpm + D.SL_tpm);
    D.Cap_check = D.Cap_ratio < 1 ? 'TAPHOLE CANNOT KEEP UP – level will rise' : D.Cap_ratio < 1.05 ? 'Marginal – very long casts expected' : 'OK';
    // Model_Calc
    var closes = rows.map(function (r) { return r.close; }).filter(num);
    D.SimStart = closes.length ? Math.max.apply(null, closes) : (opt.today != null ? opt.today : Math.floor(Date.now() / 60000));
    var li = rows.findIndex(function (r) { return r.close === D.SimStart; });
    D.Last_end = li >= 0 ? (rows[li].end || 0) : 'Blow';
    D.Init_HM_t = D.Last_end === 'Blow' ? 0 : Math.max(0, li >= 0 && num(L[li].R) ? L[li].R : 0);
    D.V_HM0 = D.Init_HM_t * 1000 / I.rho_HM;
    D.V_SL0 = D.V_res + D.Init_HM_t * I.SlagRate / 1000 * 1000 / I.rho_SL;

    // Simulation
    var dt = I.dt, n = 2881, S = [], Aeff = D.A_eff;
    for (var k = 0; k < n; k++) {
      var s = { A: k, B: k * dt }, p = S[k - 1];
      if (k === 0) { s.D = 0; s.E = 0; s.F = 0; s.G = 0; s.H = 0; s.I = D.V_HM0; s.J = D.V_SL0; }
      else {
        if (p.D > 0) s.D = (p.Z === 1 || p.G + dt >= I.MaxDur) ? 0 : ((p.D === 1 && I.DoubleTap === 'Yes' && I.N_THs >= 3 && p.N >= I.DT_trig) ? 2 : p.D);
        else s.D = (p.H + dt >= I.Gap || p.N >= I.Force_trig) ? 1 : 0;
        s.E = p.E + (s.D > 0 && p.D === 0 ? 1 : 0);
        s.F = (s.D > 0 && p.D === 0) ? (p.F % I.N_THs) + 1 : p.F;
        s.G = s.D > 0 ? (p.D > 0 ? p.G + dt : 0) : 0;
        s.H = s.D > 0 ? 0 : (p.D > 0 ? 0 : p.H + dt);
        s.I = p.V; s.J = p.W;
      }
      s.K = s.I / Aeff; s.L = s.J / Aeff; s.M = s.K + s.L; s.N = s.M / I.H_tt;
      s.O = (D.P_gas + I.rho_HM * g * s.K + I.rho_SL * g * s.L) / 1000;
      s.P = s.D === 0 ? 'Closed' : (s.I > 0.001 ? 'Metal' : 'Metal+Slag');
      s.Q = s.D * D.Cd * D.A_th * Math.sqrt(2 * s.O * 1000 / D.rho_mix) * 60 * dt;
      s.R = D.HM_m3pm * dt; s.S = D.SL_m3pm * dt;
      s.T = s.D === 0 ? 0 : Math.min(s.Q, s.I + s.R);
      s.U = s.D === 0 ? 0 : (s.I + s.R >= s.Q ? 0 : Math.min(s.Q - s.T, Math.max(0, s.J + s.S - D.V_res)));
      s.V = s.I + s.R - s.T; s.W = s.J + s.S - s.U;
      s.X = s.T * I.rho_HM / 1000; s.Y = s.U * I.rho_SL / 1000;
      s.Z = (s.D > 0 && s.V <= 0.001 && s.W - D.V_res <= 0.001) ? 1 : 0;
      if (k === 0) s.AA = s.Z === 1 ? 'Blow – tap closes' : '';
      else s.AA = (s.D > 0 && p.D === 0) ? 'Tap ' + s.E + ' opens – TH' + s.F + (p.N >= I.Force_trig ? ' (forced: high level)' : '') :
        (s.D === 2 && p.D === 1) ? '2nd taphole opened' : s.Z === 1 ? 'Blow – tap closes' : (s.D > 0 && s.G + dt >= I.MaxDur) ? 'Max duration – tap closes' : '';
      s.AB = (s.V + D.V_sump) * I.rho_HM / 1000; s.AC = s.W * I.rho_SL / 1000; s.AD = s.AB + s.AC;
      s.AE = s.N >= I.Crit ? 'CRITICAL' : s.N >= I.Warn ? 'HIGH' : 'NORMAL';
      s.AF = (s.X + s.Y) / dt;
      S.push(s);
    }

    // Tap_Summary (60 rows)
    var T = [], prevE = null;
    for (var a = 1; a <= 60; a++) {
      var rs = S.filter(function (x) { return x.E === a; }), t = { a: a };
      if (!rs.length) { T.push(t); prevE = null; continue; }
      var f0 = rs[0];
      t.B = f0.F; t.C = f0.B;
      var openRows = rs.filter(function (x) { return x.D > 0; });
      t.E = (openRows.length ? Math.max.apply(null, openRows.map(function (x) { return x.B; })) : 0) + dt;
      t.G = t.E - t.C; t.H = a === 1 ? t.C : t.C - prevE; prevE = t.E;
      t.I = rs.reduce(function (s2, x) { return s2 + x.X; }, 0); t.J = rs.reduce(function (s2, x) { return s2 + x.Y; }, 0);
      t.K = f0.I * I.rho_HM / 1000 + f0.J * I.rho_SL / 1000; t.L = f0.N;
      var atE = S.find(function (x) { return x.B === t.E; });
      t.M = atE ? atE.I * I.rho_HM / 1000 : ''; t.N = atE ? atE.J * I.rho_SL / 1000 : '';
      t.O = t.M === '' || t.N === '' ? '' : t.M + t.N + D.M_sump_t;
      var ms = rs.filter(function (x) { return x.P === 'Metal+Slag'; });
      t.P = ms.length ? Math.min.apply(null, ms.map(function (x) { return x.B; })) - t.C : '';
      t.Q = rs.some(function (x) { return x.Z === 1; }) ? 'Blow (drained)' : (t.G >= I.MaxDur ? 'Max duration' : 'Horizon end');
      t.R = (t.I + t.J) / t.G;
      t.S = Math.max.apply(null, rs.map(function (x) { return x.N; }));
      T.push(t);
    }
    var done = T.filter(function (t) { return t.C != null && t.Q !== 'Horizon end'; }), full = T.filter(function (t) { return t.C != null; });
    var dev = function (c, d) { return c === '' || d === '' || !d ? '' : c / d - 1; };
    var maxB = S[n - 1].B, firstOpen = rows.map(function (r) { return r.open; }).filter(num), lastClose = closes;
    var spanDays = firstOpen.length && lastClose.length ? (Math.max.apply(null, lastClose) - Math.min.apply(null, firstOpen)) / 1440 : 0;
    var Lc = L.filter(function (c) { return num(c.N); });
    var DB = {
      dur: [avg(done.map(function (t) { return t.G; })), avg(L.map(function (c) { return c.N; }))],
      gap: [avg(full.filter(function (t) { return t.a > 1; }).map(function (t) { return t.H; })), avg(L.map(function (c) { return c.O; }))],
      hm: [avg(done.map(function (t) { return t.I; })), avg(rows.map(function (r) { return r.hm; }))],
      slag: [avg(done.map(function (t) { return t.J; })), avg(L.map(function (c) { return c.T; }))],
      rate: [avg(done.map(function (t) { return t.R; })), avg(L.map(function (c) { return c.X; }))],
      first: [avg(done.map(function (t) { return t.P; })), avg(rows.map(function (r) { return r.first; }))],
      perDay: [(full.length - full.filter(function (t) { return t.Q === 'Horizon end'; }).length) / (maxB / 1440), spanDays > 0 ? Lc.length / spanDays : ''],
      castRatio: [S.filter(function (x) { return x.D > 0; }).length / n, spanDays > 0 ? Lc.reduce(function (s2, c) { return s2 + c.N; }, 0) / (spanDays * 1440) : '']
    };
    Object.keys(DB).forEach(function (k2) { DB[k2].push(dev(DB[k2][0], DB[k2][1])); });
    var maxN = Math.max.apply(null, S.map(function (x) { return x.N; })), iMax = S.findIndex(function (x) { return x.N === maxN; });
    var R = {
      sump: D.M_sump_t, retained: D.M_res_t, rise: D.Rise_rate, maxLevel: Math.max.apply(null, S.map(function (x) { return x.M; })), maxPct: maxN, tMax: S[iMax].B,
      closeTot: avg(done.map(function (t) { return t.O; })), openDrain: avg(done.map(function (t) { return t.K; })),
      highMin: S.filter(function (x) { return x.AE !== 'NORMAL'; }).length * dt, maxDurClosed: T.filter(function (t) { return t.Q === 'Max duration'; }).length,
      status: maxN >= I.Crit ? 'CRITICAL – liquid approaches tuyeres' : maxN >= I.Warn ? 'HIGH – review tapping practice' : 'NORMAL'
    };
    return { I: I, D: D, log: L, sim: S, taps: T, dash: DB, res: R };
  }

  // Dashboard section 3 – live estimate at a clock time (minutes)
  function live(M, now, open) {
    var I = M.I, D = M.D, closes = M.rowsClose || [];
    var last = M.D.SimStart, li = -1;
    var mins = Math.max(0, now - last), hm = mins * D.HM_tpm, sl = mins * D.SL_tpm, slagAbove = sl + D.M_res_t;
    var lev = (hm * 1000 / I.rho_HM + slagAbove * 1000 / I.rho_SL) / D.A_eff, pct = lev / I.H_tt;
    var st = open ? 'Tap running – use Simulation for drainage' : pct >= I.Crit ? 'CRITICAL – open taphole now' : pct >= I.Warn ? 'HIGH – open next taphole' : (D.Last_end !== 'Blow' ? 'Check: last tap not drained – residual higher than shown' : 'NORMAL');
    void closes; void li;
    return { last: last, lastEnd: D.Last_end, mins: mins, hm: hm, sl: sl, slagAbove: slagAbove, level: lev, pct: pct, total: hm + slagAbove + D.M_sump_t,
      toWarn: Math.max(0, (I.Warn * I.H_tt - lev) * 1000 / D.Rise_rate), toCrit: Math.max(0, (I.Crit * I.H_tt - lev) * 1000 / D.Rise_rate), status: st };
  }
  root.HLEngine = { derive: derive, run: run, live: live };
  if (typeof module !== 'undefined') module.exports = root.HLEngine;
})(typeof window !== 'undefined' ? window : globalThis);
