/* BF Blow-in planner (6.3.6) — the mirror of the blow-down planner.
   Uses the furnace, geometry and operation inputs of the Inputs tab (window.BDPlanner) and adds:
   start type, blow-in inputs, zone-by-zone filling recipe with flux & slag balance, top-charge coke-up programme,
   burden distribution matrix, hour-by-hour simulation, tapping, day-by-day prediction and rule-based advice.
   Planning grade. Coke burn / HM make follow the blast oxygen balance calibrated to the normal operation
   (raceway carbon per tHM = O2 demand × 24/22.4); heat-up delay, Si and HM temperature are typical values. Saved on this device. */
(function () {
  'use strict';
  if (!window.BDPlanner) return;
  var $ = function (id) { return document.getElementById(id); };
  var KEY = 'bf.blowin.v1', KEY_CHK = 'bf.blowin.chk';
  var PI = Math.PI;
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function fmt(n, d) { if (n == null || !isFinite(n)) return '—'; d = d == null ? 1 : d; return Number(n).toLocaleString('en-IN', { minimumFractionDigits: d, maximumFractionDigits: d }); }
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function rows(list) { return list.map(function (r) { return '<div class="row"><b>' + r[0] + (r[1] ? ' <small>' + r[1] + '</small>' : '') + '</b><span class="val' + (r[3] ? ' ' + r[3] : '') + '">' + r[2] + '</span></div>'; }).join(''); }

  /* ---------------- blow-in types */
  var TYPES = {
    reline: { name: 'After reline (new lining)', tag: 'Reline', kind: 'deep',
      what: 'Cold, new and damp refractory, furnace empty. Hearth filled with coke (or timber + coke), coke blank up to the bosh top, lean burden in the belly and shaft. Slowest and most careful start.',
      from: 'sump', b0: 20, bstep: 5, bint: 2, bhold: 45, dfull: 7, tuo: 0.5, gcp: 6, delay: 10, cast: 4, hbt: 700, o2day: 3, pciday: 3, cu1: 35, cuh: 24, bas: 1.0, t0: 1360, tau: 26, tustep: 1 },
    deep: { name: 'After deep blowdown (hearth / tuyere-level repair)', tag: 'Deep', kind: 'deep',
      what: 'Stockline was taken to the tuyeres. The hearth keeps its residual coke (deadman). Fill from tuyere level: coke blank in the bosh, lean burden in the belly and shaft.',
      from: 'tuy', b0: 25, bstep: 5, bint: 1.5, bhold: 55, dfull: 4, tuo: 0.7, gcp: 4, delay: 4, cast: 2.5, hbt: 800, o2day: 2, pciday: 2, cu1: 25, cuh: 12, bas: 1.0, t0: 1400, tau: 14, tustep: 1 },
    partial: { name: 'After partial blowdown (stack repair / gunning)', tag: 'Partial', kind: 'partial',
      what: 'Stockline was at the belly top. Belly, bosh and hearth still hold the hot, coke-rich blowdown burden. Fill only the shaft with coked-up charges and come back quickly.',
      from: 'shaft', b0: 45, bstep: 10, bint: 1, bhold: 80, dfull: 2, tuo: 1, gcp: 1.5, delay: 1, cast: 1.5, hbt: 900, o2day: 1, pciday: 1, cu1: 20, cuh: 8, bas: 1.05, t0: 1450, tau: 6, tustep: 1 },
    bank: { name: 'After banking / long stoppage', tag: 'Banking', kind: 'bank',
      what: 'The furnace stayed full of banking burden with the tuyeres sealed. No filling: open the tuyeres in steps, burn through the banked coke and bring the hearth back.',
      from: 'none', b0: 30, bstep: 10, bint: 1.5, bhold: 70, dfull: 3, tuo: 0.6, gcp: 2, delay: 1.5, cast: 1.5, hbt: 850, o2day: 1.5, pciday: 1.5, cu1: 20, cuh: 8, bas: 1.0, t0: 1440, tau: 8, tustep: 1 }
  };
  function typeFromStrategy() {
    var k = ($('strat') && $('strat').value) || 'reline', st = window.BD && BD.STOPS[k];
    if (k === 'reline') return 'reline';
    if (!st) return 'reline';
    return st.kind === 'deep' ? 'deep' : st.kind === 'partial' ? 'partial' : 'bank';
  }

  /* ---------------- inputs: [id, label, hint, default ('t:key' = from type), step, min, max] */
  var OP = [
    ['days', 'Outage / banking duration', 'days — empty = typical for the stoppage', 't:outage', 0.5, 0.1, 400],
    ['b0', 'Cold blast at light-up', '% of normal', 't:b0', 1, 5, 100],
    ['bstep', 'Blast step', '% added per step', 't:bstep', 1, 1, 50],
    ['bint', 'Step every', 'hours', 't:bint', 0.25, 0.25, 12],
    ['bhold', 'Hold blast at, until first cast', '% of normal', 't:bhold', 1, 10, 100],
    ['dfull', 'Days to full production', 'days', 't:dfull', 0.5, 0.5, 20],
    ['tuo', 'Tuyeres open at light-up', 'no. — empty = suggested (over / near the tapholes)', 't:tuo', 1, 1, 60],
    ['tustep', 'Open one more tuyere every', 'hours after first slag', 't:tustep', 0.25, 0.25, 12],
    ['hbt', 'Hot blast temperature at light-up', '°C — new lining: keep low the first day', 't:hbt', 10, 200, 1300],
    ['gcp', 'Gas on bleeder, then to GCP after', 'h — and only when O₂ < 0.5% and CO steady', 't:gcp', 0.25, 0, 48],
    ['delay', 'Heat-up time to first slag', 'h — typical for the type; tune with your last blow-in', 't:delay', 0.25, 0, 72],
    ['cast', 'First cast after first slag', 'h', 't:cast', 0.25, 0, 24],
    ['o2day', 'O₂ enrichment starts on day', 'day (ramps to normal by full production)', 't:o2day', 0.5, 0, 20],
    ['pciday', 'PCI starts on day', 'day', 't:pciday', 0.5, 0, 20],
    ['cu1', 'Coke-up of the first top charges', '% — halves every block', 't:cu1', 1, 0, 80],
    ['cuh', 'Coke-up block length', 'hours of charging per block', 't:cuh', 1, 2, 72],
    ['hmt', 'Normal hot metal temperature', '°C', 1490, 5, 1350, 1560]
  ];
  var CHEM = [
    ['fe', 'Fe in ferrous burden', '% (sinter + pellet + lump mix)', 58, 0.1, 40, 68],
    ['osi', 'SiO₂ in ferrous burden', '%', 5.5, 0.1, 0.5, 15],
    ['oal', 'Al₂O₃ in ferrous burden', '% — Indian ores 2.5–4', 3.2, 0.1, 0.2, 10],
    ['oca', 'CaO in ferrous burden', '% (from sinter)', 6.0, 0.1, 0, 20],
    ['omg', 'MgO in ferrous burden', '%', 1.8, 0.1, 0, 8],
    ['ash', 'Coke ash', '% — Indian coke 13–17', 14, 0.1, 5, 25],
    ['asi', 'SiO₂ in coke ash', '%', 55, 1, 20, 70],
    ['aal', 'Al₂O₃ in coke ash', '%', 28, 1, 10, 45],
    ['fc', 'Fixed carbon in coke', '%', 84, 0.5, 70, 92],
    ['bas', 'Target slag basicity', 'CaO/SiO₂ — blow-in: 0.95–1.05 for a fluid cold slag', 't:bas', 0.01, 0.7, 1.4],
    ['mgo', 'Target slag MgO', '% — 8–10 for high-alumina slag', 9, 0.1, 3, 14],
    ['lsc', 'Limestone CaO', '%', 50, 0.5, 40, 56],
    ['dlc', 'Dolomite CaO', '%', 30, 0.5, 20, 35],
    ['dlm', 'Dolomite MgO', '%', 20, 0.5, 10, 23],
    ['almax', 'Max Al₂O₃ in slag', '% — above this, quartzite + limestone add slag volume', 17.5, 0.1, 12, 25],
    ['qsi', 'Quartzite SiO₂', '%', 95, 0.5, 80, 99]
  ];
  var CAL = [
    ['calc', 'Your last blow-in: first cast after', 'h after light-up (same blow-in type) — empty = not used', null, 0.25, 0.5, 96]
  ];
  var ALL = OP.concat(CHEM, CAL);
  function fieldHTML(f) {
    return '<label>' + esc(f[1]) + ' <small>' + esc(f[2]) + '</small><input id="bi_' + f[0] + '" type="number" step="' + (f[4] || 'any') + '"' +
      (f[5] != null ? ' min="' + f[5] + '"' : '') + (f[6] != null ? ' max="' + f[6] + '"' : '') + ' inputmode="decimal" autocomplete="off"></label>';
  }
  $('biGridOp').innerHTML = OP.map(fieldHTML).join('');
  $('biGridChem').innerHTML = CHEM.map(fieldHTML).join('');
  $('biGridCal').innerHTML = CAL.map(fieldHTML).join('');

  /* ---------------- zones */
  var ZONES = [
    { k: 'hearth', n: 'Hearth & sump (below tuyeres)', ph: 'tuyere' },
    { k: 'tuy', n: 'Tuyere band', ph: 'tuyere' },
    { k: 'bosh', n: 'Bosh', ph: 'bosh' },
    { k: 'belly', n: 'Belly', ph: 'belly' },
    { k: 'ls', n: 'Lower shaft', ph: 'shaft' },
    { k: 'ms', n: 'Middle shaft', ph: 'shaft' },
    { k: 'us', n: 'Upper shaft + throat', ph: 'shaft' }
  ];
  // suggested O/C (t ore / t coke) per zone and type; oc = normal ore/coke
  function suggestOC(type, k, oc, ocEq) {
    var T = {
      reline: { hearth: 0, tuy: 0, bosh: 0, belly: 0.4, ls: 0.8, ms: 1.3, us: 1.8 },
      deep: { tuy: 0, bosh: 0, belly: 0.7, ls: 1.2, ms: 1.7, us: 2.2 },
      partial: { ls: ocEq / 1.35, ms: ocEq / 1.25, us: ocEq / 1.2 }
    }[type] || {};
    var r = T[k]; if (r == null) return null;
    return Math.round(Math.min(r, oc) * 100) / 100;
  }
  var MX = {   // ring 1 wall … ring 6 centre: coke turns, ore turns
    A: { c: [2, 2, 2, 2, 2, 2], o: [1, 2, 3, 2, 2, 0] },
    B: { c: [2, 2, 2, 2, 2, 2], o: [2, 2, 3, 2, 1, 0] },
    N: { c: [2, 2, 2, 2, 2, 2], o: [2, 2, 2, 2, 2, 0] }
  };

  /* ---------------- state (saved) */
  var st = { v: {}, type: 'auto', oc: {}, hfill: 'coke', mx: null, dist: 'A' };
  try { var sv = JSON.parse(localStorage.getItem(KEY) || 'null'); if (sv) st = Object.assign(st, sv); } catch (e) { }
  if (!st.mx) st.mx = JSON.parse(JSON.stringify(MX));
  function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) { } }
  $('bi_type').value = st.type || 'auto';
  ALL.forEach(function (f) { var el = $('bi_' + f[0]); if (st.v[f[0]] != null) el.value = st.v[f[0]]; else el.value = typeof f[3] === 'number' ? f[3] : ''; });

  function raw(id) { var el = $('bi_' + id), x = el ? el.value : ''; if (x === '' || x == null) return null; var n = Number(x); return isFinite(n) ? n : null; }

  /* ---------------- engine */
  function compute() {
    var S = window.BDPlanner.compute(), v = S.v, g = S.g, d = S.d, z = S.z;
    var type = $('bi_type').value === 'auto' ? typeFromStrategy() : $('bi_type').value, T = TYPES[type];
    var stop = window.BD && BD.STOPS[($('strat') && $('strat').value) || 'reline'];
    var sug = {}, p = {};
    ALL.forEach(function (f) {
      var dv = f[3];
      if (typeof dv === 'string' && dv.indexOf('t:') === 0) {
        var key = dv.slice(2);
        if (key === 'outage') dv = type === 'reline' ? 45 : stop && T.kind === stop.kind && (($('strat') && $('strat').value) !== 'reline') ? stop.outage : { deep: 20, partial: 4, bank: 10 }[type];
        else if (key === 'tuo') dv = Math.max(2, Math.round(T.tuo * g.ntu));
        else dv = T[key];
      }
      sug[f[0]] = dv; var r = raw(f[0]); p[f[0]] = r == null ? dv : r;
    });
    if (type === 'bank') {   // longer banking: slower start, more coke-up, longer heat-up
      if (raw('delay') == null) p.delay = sug.delay = Math.round((1.5 + Math.min(6, 0.35 * p.days)) * 4) / 4;
      if (raw('cu1') == null) p.cu1 = sug.cu1 = Math.round(clamp(10 + 2.5 * p.days, 15, 40));
      if (raw('dfull') == null) p.dfull = sug.dfull = Math.round(clamp(1.5 + 0.25 * p.days, 2, 6) * 2) / 2;
    }
    p.tuo = clamp(Math.round(p.tuo), 1, g.ntu);
    var oc = v.ore * 1000 / v.coke;                 // normal ore/coke t/t
    var fc = p.fc / 100, normFuel = v.coke + v.pci;
    var raceC = v.o2d * 24 / 22.4;                  // kg C at the raceway per tHM (normal, calibrated)
    var nonRace = Math.max(60, v.coke * fc + v.pci * 0.78 - raceC);   // C not burnt at tuyeres (carburisation, direct reduction)
    function siOf(fuel) { return clamp(0.45 + (fuel - normFuel) * 0.004, 0.3, 4); }

    // slag & flux per tonne of coke for O/C = r (ore t per t coke)
    function slag(r, B, pci) {
      var HM = r / v.ore, Cr = r > 0 ? 1000 * v.ore / r : Infinity, si = r > 0 ? siOf(Cr + (pci || 0)) : 0;
      var ash = p.ash / 100;
      var Si0 = r * p.osi / 100 + ash * p.asi / 100 - HM * si / 100 * 2.139;
      var Al0 = r * p.oal / 100 + ash * p.aal / 100, C0 = r * p.oca / 100 + ash * 0.04, M0 = r * p.omg / 100 + ash * 0.015;
      Si0 = Math.max(0.0001, Si0);
      var S0 = Si0 + Al0 + C0 + M0, m = p.mgo / 100;
      var lc = p.lsc / 100, lm = 0.015, ls = 0.015, dc = p.dlc / 100, dm = p.dlm / 100, ds = 0.02;
      var a11 = lc - ls * B, a12 = dc - ds * B, b1 = B * Si0 - C0;
      var a21 = lm - m * (lc + lm + ls), a22 = dm - m * (dc + dm + ds), b2 = m * S0 - M0;
      var det = a11 * a22 - a12 * a21, L = (b1 * a22 - a12 * b2) / det, D = (a11 * b2 - a21 * b1) / det, Q = 0;
      if (!(D >= 0)) { D = 0; L = Math.max(0, b1 / a11); }
      if (!(L >= 0)) { L = 0; D = Math.max(0, b1 / a12); }
      var fL = lc + lm + ls, fD = dc + dm + ds, qs = p.qsi / 100, am = p.almax / 100;
      if (Al0 / (S0 + L * fL + D * fD) > am) {   // dilute alumina: add quartzite Q, keep basicity and MgO
        var M = [[a11, a12, -qs * B, b1], [a21, a22, -m * qs, b2], [-am * fL, -am * fD, -am * qs, am * S0 - Al0]];
        for (var c0 = 0; c0 < 3; c0++) { var pv = c0; for (var r0 = c0 + 1; r0 < 3; r0++) if (Math.abs(M[r0][c0]) > Math.abs(M[pv][c0])) pv = r0; var tmp = M[c0]; M[c0] = M[pv]; M[pv] = tmp;
          for (var r1 = 0; r1 < 3; r1++) if (r1 !== c0) { var f = M[r1][c0] / M[c0][c0]; for (var c1 = c0; c1 < 4; c1++) M[r1][c1] -= f * M[c0][c1]; } }
        var L3 = M[0][3] / M[0][0], D3 = M[1][3] / M[1][1], Q3 = M[2][3] / M[2][2];
        if (L3 >= 0 && D3 >= 0 && Q3 >= 0) { L = L3; D = D3; Q = Q3; }
      }
      var Sm = S0 + L * fL + D * fD + Q * qs;
      var cao = C0 + lc * L + dc * D, sio = Si0 + ls * L + ds * D + qs * Q, mgo = M0 + lm * L + dm * D;
      var chargedB = (cao) / (sio + HM * si / 100 * 2.139);
      return { L: L, D: D, Q: Q, slag: Sm, HM: HM, si: si, Cr: Cr, B: cao / sio, Bc: chargedB, al: Al0 / Sm * 100, mg: mgo / Sm * 100, kgt: HM > 0 ? Sm * 1000 / HM : null };
    }
    var Bt = p.bas;
    function zoneCalc(V, r, pci) {
      var s = slag(r, Bt, pci), perCokeVol = 1 / v.coked + r / v.bd + (s.L + s.D + s.Q) / 1.5;
      var coke = V / perCokeVol;
      return { V: V, r: r, coke: coke, ore: coke * r, L: coke * s.L, D: coke * s.D, Qz: coke * s.Q, HM: coke * s.HM, Cr: s.Cr, s: s };
    }
    // volume between two depths (m below zero stockline)
    function vol(a, b) { var n = 60, h = (b - a) / n, sum = 0; for (var i = 0; i < n; i++) { var dd = S.diam(a + (i + 0.5) * h); sum += PI / 4 * dd * dd * h; } return Math.max(0, sum); }
    var lo = { hearth: [d.d5, d.d7], tuy: [d.d4, d.d5], bosh: [d.d3, d.d4], belly: [d.d2, d.d3], ls: [d.d2 - g.hsh / 3, d.d2], ms: [d.d1 + g.hsh / 3, d.d2 - g.hsh / 3], us: [0, d.d1 + g.hsh / 3] };
    var startIdx = { sump: 0, tuy: 1, shaft: 4, none: 99 }[T.from];
    var cdump = 0.5 * PI / 4 * g.dt * g.dt * v.coked;   // same coke dump as the blowdown burden
    var fill = [], tot = { V: 0, coke: 0, ore: 0, L: 0, D: 0, Qz: 0, HM: 0, wood: 0 };
    ZONES.forEach(function (zn, i) {
      if (i < startIdx) return;
      var V = vol(lo[zn.k][0], lo[zn.k][1]), sOC = suggestOC(type, zn.k, oc, v.ore * 1000 / (v.coke + 0.9 * v.pci)), uOC = st.oc[type + '.' + zn.k];
      var r = uOC != null && uOC !== '' && isFinite(+uOC) ? Math.max(0, +uOC) : sOC;
      var zc;
      if (zn.k === 'hearth' && st.hfill === 'wood') { zc = { V: V, r: 0, coke: 0, ore: 0, L: 0, D: 0, Qz: 0, HM: 0, Cr: Infinity, wood: V * 0.45, s: slag(0, Bt) }; tot.wood += zc.wood; }
      else if (zn.k === 'hearth') { zc = zoneCalc(V, 0); zc.coke = V * v.coked; zc.L = 0; zc.D = 0; zc.Qz = 0; }
      else zc = zoneCalc(V, r);
      zc.k = zn.k; zc.n = zn.n; zc.ph = zn.ph; zc.sOC = sOC; zc.user = uOC != null && uOC !== '';
      zc.charges = (zc.coke || zc.wood ? (zc.coke || zc.wood * 0.9) : 0) / cdump;
      fill.push(zc); ['V', 'coke', 'ore', 'L', 'D', 'Qz', 'HM'].forEach(function (q) { tot[q] += zc[q] || 0; });
    });
    tot.Cr = tot.HM > 0 ? tot.coke * 1000 / tot.HM : null;

    // column above the tuyeres at light-up (bottom → top)
    var col = [];
    function pushSeg(name, r, V, ph) { var zc = r === 0 ? zoneCalc(V, 0) : zoneCalc(V, r); col.push({ name: name, ph: ph, coke: zc.coke, ore: zc.ore, fl: zc.L + zc.D + zc.Qz, Cr: zc.Cr, s: zc.s, r: r }); }
    if (type === 'partial') { pushSeg('Blowdown burden (bosh)', oc / 1.1, vol(d.d3, d.d5), 'bosh'); pushSeg('Blowdown burden (belly)', oc / 1.1, vol(d.d2, d.d3), 'belly'); }
    if (type === 'bank') { var cub = stop && stop.kind === 'bank' ? stop.cokeUp : 0.25; pushSeg('Banking burden (bosh)', oc / (1 + cub), vol(d.d3, d.d5), 'bosh'); pushSeg('Banking burden (belly)', oc / (1 + cub), vol(d.d2, d.d3), 'belly'); pushSeg('Banking burden (shaft)', oc / (1 + cub), vol(0, d.d2), 'shaft'); }
    fill.forEach(function (zc) { if (zc.k === 'hearth') return; col.push({ name: zc.n, ph: zc.ph, coke: zc.coke, ore: zc.ore, fl: zc.L + zc.D + zc.Qz, Cr: zc.Cr, s: zc.s, r: zc.r }); });

    // top-charge programme
    var full = p.dfull * 24, pciStart = p.pciday * 24, o2Start = p.o2day * 24;
    function ramp(t, a, b) { return t <= a ? 0 : t >= b ? 1 : (t - a) / Math.max(0.01, b - a); }
    function pciAt(t) { return v.pci * ramp(t, pciStart, Math.max(pciStart + 12, full)); }
    function cuAt(t) { var k = Math.floor(t / p.cuh), c = p.cu1 / 100 * Math.pow(0.5, k); return c < 0.02 ? 0 : c; }
    function progAt(t) {   // composition of the charge put on top at time t
      var pci = pciAt(t), cu = cuAt(t), coke = (v.coke + (v.pci - pci) * 0.9) * (1 + cu), r = v.ore * 1000 / coke;
      return { cu: cu, coke: coke, pci: pci, r: r };
    }
    var prog = [], lastKey = null;
    for (var tt = 0; tt <= full + 0.01; tt += 1) {
      var pa = progAt(tt), key = Math.round(pa.cu * 1000) + '|' + Math.round(pa.pci / 25);
      if (key !== lastKey) { prog.push({ t0: tt, t1: tt, cu: pa.cu, coke: pa.coke, pci: pa.pci, r: pa.r, ch: 0 }); lastKey = key; } else prog[prog.length - 1].t1 = tt;
    }

    // ---------------- simulation, dt = 0.25 h
    var calUsed = false, delay = p.delay, castAfter = p.cast;
    function simulate(delayH) {
      var dt = 0.25, tSlag = null, tCast = null, liq = 0, slagLiq = 0, pend = 0, pendSlag = 0, rel = 0, relS = 0, liqSi = 0, pendSi = 0, relSi = 0, hm = 0, cokeB = 0, tops = 0, Fmax = p.b0 / 100;
      var out = [], casts = [], seg = 0, colS = col.map(function (c) { return Object.assign({}, c); }), lastCast = null, firstHM = null, events = [];
      var nOpen = p.tuo, lastOpen = null, hmPerCast = v.drain * v.castm, safeLiq = z.hearth * 0.35, capHit = false, velMax = 0, Fcap = false;
      var day = {}, Vcol0 = col.reduce(function (a, c) { return a + c.coke / v.coked + c.ore / v.bd + c.fl / 1.5; }, 0);
      for (var k = 0; k <= Math.ceil((full + 24) / dt); k++) {
        var t = k * dt;
        // first slag: descent of the first ore layer to the melting zone (half the bosh above the tuyeres), or the heat-up time
        if (tSlag == null) {
          var reached = type === 'partial' || type === 'bank' || !!(colS[seg] && colS[seg].r > 0) || seg >= colS.length;
          if (t >= delayH && reached) { tSlag = t; events.push([t, 'First slag at the tuyeres — close the gas-blowing tapholes with clay, start opening more tuyeres']); }
        }
        if (tSlag != null && tCast == null && t >= tSlag + castAfter) tCast = t;
        // tuyeres
        if (tSlag != null && nOpen < g.ntu && (lastOpen == null ? t >= tSlag + p.tustep : t >= lastOpen + p.tustep)) { nOpen++; lastOpen = t; if (nOpen === g.ntu) events.push([t, 'All ' + g.ntu + ' tuyeres open']); }
        // blast plan
        var F;
        if (tCast == null) F = Math.min(p.bhold, p.b0 + Math.floor(t / p.bint) * p.bstep) / 100;
        else F = Fmax + (1 - Fmax) * ramp(t, tCast, full);
        F = Math.round(F * 20) / 20;
        var cap = 1.25 * nOpen / g.ntu; if (F > cap) { F = Math.floor(cap * 20) / 20; Fcap = true; }
        F = Math.max(0.05, Math.min(1, F)); if (tCast == null) Fmax = Math.max(Fmax, F);
        var vel = 200 * F * g.ntu / nOpen; velMax = Math.max(velMax, vel);
        var o2e = v.o2 * ramp(t, o2Start, Math.max(o2Start + 12, full)), pci = pciAt(t);
        var o2flow = F * v.blast * 60 * (0.21 + o2e / 100);   // Nm³ O₂/h: air O₂ + enrichment (same basis as the Inputs tab)
        var Crate = o2flow * 24 / 22.4;                 // kg C/h burnt at the raceway
        // consume the column from the bottom
        var madeSi = 0, Cleft = Crate * dt, made = 0, made_s = 0, cokeUsed = 0, volUsed = 0, meltName = colS[seg] ? colS[seg].name : '—', meltSi = null, meltCr = null;
        var guard = 0;
        while (Cleft > 1e-6 && guard++ < 50) {
          var c = colS[seg];
          if (!c) {   // past the fill column: new top charges (programme) arrive here
            var tc = 0, need = tops + volUsed - Vcol0;   // this volume was charged on top when the freed volume reached 'need'
            for (var qi = 0; qi < out.length; qi++) if (out[qi].tops >= need) { tc = out[qi].t; break; } else tc = out[qi].t;
            var pa2 = progAt(Math.max(0, tc)), zc2 = zoneCalc(50, pa2.r, pa2.pci);
            colS.push({ name: 'Top charges (+' + Math.round(pa2.cu * 100) + '% coke)', ph: 'shaft', coke: zc2.coke, ore: zc2.ore, fl: zc2.L + zc2.D + zc2.Qz, Cr: zc2.Cr, s: zc2.s, r: pa2.r, top: true, pci: pa2.pci });
            continue;
          }
          meltName = c.name;
          if (c.r === 0) {   // coke blank: all burnt at the raceway
            var cokeNeed = Cleft / (fc * 1000), useC = Math.min(c.coke, cokeNeed);
            c.coke -= useC; Cleft -= useC * fc * 1000; cokeUsed += useC; volUsed += useC / v.coked + (c.fl * useC / Math.max(1e-6, c.coke + useC)) / 1.5;
            if (c.coke <= 1e-6) seg++;
          } else {
            var pciKg = c.top ? (c.pci || 0) : 0;
            var raceTHM = Math.max(80, c.Cr * fc - nonRace + pciKg * 0.78);   // kg raceway C per tHM for this burden
            var hmPossible = Cleft / raceTHM, hmLeft = c.ore / v.ore, useH = Math.min(hmPossible, hmLeft);
            var cokeU = useH * c.Cr / 1000, oreU = useH * v.ore, flU = c.fl * (oreU / Math.max(1e-6, c.ore));
            c.coke -= cokeU; c.ore -= oreU; c.fl -= flU; Cleft -= useH * raceTHM;
            made += useH; made_s += useH * (c.s.kgt || 300) / 1000; madeSi = (madeSi || 0) + useH * c.s.si; cokeUsed += cokeU; volUsed += cokeU / v.coked + oreU / v.bd + flU / 1.5;
            meltSi = c.s.si; meltCr = c.Cr;
            if (c.ore <= 1e-6) seg++;
          }
        }
        cokeB += cokeUsed; tops += volUsed;
        if (tSlag == null) { pend += made; pendSlag += made_s; pendSi += madeSi; }
        else {   // liquid held up in the cold coke drains to the hearth over about 4 h after first slag
          if (pend > 0 && !rel) { var nrel = Math.max(16, Math.round(delayH * 4)); rel = pend / nrel; relS = pendSlag / nrel; relSi = pendSi / nrel; }
          if (pend > 0) { var mv = Math.min(pend, rel), ms = Math.min(pendSlag, relS), mq = Math.min(pendSi, relSi); liq += mv; slagLiq += ms; liqSi += mq; pend -= mv; pendSlag -= ms; pendSi -= mq; }
          liq += made; slagLiq += made_s; liqSi += madeSi;
        }
        hm += made;
        if (made > 0 && firstHM == null) firstHM = t;
        // HM temperature & Si of the metal now in the hearth
        var Thm = p.hmt - (p.hmt - T.t0 - Math.min(40, Math.max(0, (p.hbt - 700) / 10))) * Math.exp(-(tSlag == null ? 0 : t - tSlag) / T.tau);
        var siNow = meltSi != null ? meltSi : 0;
        // casting
        if (tCast != null && t >= tCast) {   // early casts every 2.5 h; later on the normal cycle (cast size or 3.5 h)
          var gap = lastCast == null ? 99 : t - lastCast, early = t < tCast + 36, lv = liq / 7 + slagLiq / 2.6, allow = safeLiq * (v.taps >= 2 ? 1.5 : 1);
          // early: cast every 2.5 h, sooner (not before 1.25 h) when the liquid fills 70% of the safe hearth volume
          if (liq > 0.5 && (lastCast == null || (early ? (gap >= 2.5 || (gap >= 1 && lv >= 0.7 * allow)) : (liq >= hmPerCast || gap >= 3.5)))) {
            casts.push({ t: t, hm: liq, slag: slagLiq, si: liq > 0 ? liqSi / liq : siNow, T: Thm, first: lastCast == null, gap: gap });
            if (t < tCast + 24 && lv > allow) capHit = true;
            liq = 0; slagLiq = 0; liqSi = 0; lastCast = t;
          }
        }
        var route = t < p.gcp ? 'bleeder' : 'gcp';
        var di = Math.floor(t / 24) + 1; day[di] = day[di] || { F: 0, n: 0, hm: 0, coke: 0, si: 0, siw: 0, T: 0, casts: 0 };
        day[di].F += F; day[di].n++; day[di].hm += made; day[di].coke += cokeUsed; if (made > 0) { day[di].si += siNow * made; day[di].siw += made; } day[di].T += Thm;
        out.push({ t: t, F: F, Q: F * v.blast, n: nOpen, vel: vel, cb: cokeUsed / dt, melt: meltName, tops: tops, hm: hm, liq: liq + pend, route: route, Thm: Thm, si: siNow, o2e: o2e, pci: pci });
        if (t > full + 24) break;
      }
      casts.forEach(function (c) { var di = Math.floor(c.t / 24) + 1; if (day[di]) day[di].casts++; });
      return { out: out, casts: casts, tSlag: tSlag, tCast: tCast, firstHM: firstHM, cokeB: cokeB, hm: hm, day: day, capHit: capHit, safeLiq: safeLiq, velMax: velMax, Fcap: Fcap, events: events, tops: tops };
    }
    var R = simulate(delay);
    if (p.calc != null && R.tCast != null) {   // scale the heat-up delay so the predicted first cast matches the user's last blow-in
      if (p.calc - castAfter > 0) { delay = clamp(delay + (p.calc - R.tCast), 0, 96); R = simulate(delay); calUsed = true; }
    }
    // charges per programme block (from volume charged)
    var vch = function (r) { return cdump / v.coked + cdump * r / v.bd; };
    prog.forEach(function (b) {
      var vtop = 0; R.out.forEach(function (o, i) { if (o.t >= b.t0 && o.t < b.t1 + 1 && i > 0) vtop += o.tops - R.out[i - 1].tops; });
      b.ch = vtop / vch(b.r); b.ore = cdump * b.r; b.B = Bt;
    });
    return { S: S, v: v, g: g, d: d, z: z, type: type, T: T, p: p, sug: sug, oc: oc, fill: fill, tot: tot, col: col, prog: prog, R: R, cdump: cdump, calUsed: calUsed, delay: delay, siOf: siOf, normFuel: normFuel, Bt: Bt, slag: slag };
  }

  /* ---------------- rendering */
  var C = null;
  function render() {
    C = compute();
    var v = C.v, g = C.g, p = C.p, T = C.T, R = C.R, tot = C.tot;
    ALL.forEach(function (f) { var el = $('bi_' + f[0]); el.placeholder = C.sug[f[0]] == null ? '—' : String(C.sug[f[0]]) + ' (suggested)'; el.classList.toggle('set', el.value !== '' && Number(el.value) !== C.sug[f[0]]); });
    // chips
    $('biChips').innerHTML = '<span class="chip">Type <b>' + esc(T.tag) + '</b></span><span class="chip">First slag <b>' + fmt(R.tSlag, 1) + ' h</b></span><span class="chip">First cast <b>' + fmt(R.tCast, 1) + ' h</b></span>' +
      '<span class="chip">Fill coke <b>' + fmt(tot.coke + 0, 0) + ' t</b></span><span class="chip">Full production <b>day ' + fmt(p.dfull, 1) + '</b></span>';
    // 1 type
    $('biTypeHelp').innerHTML = Object.keys(TYPES).map(function (k) {
      var o = TYPES[k];
      return '<div class="opt' + (k === C.type ? ' on' : '') + '" data-k="' + k + '"><b>' + esc(o.name) + '<span class="t ' + o.kind + '">' + o.tag + '</span></b><p>' + esc(o.what) + '</p></div>';
    }).join('');
    $('biTypeSel').innerHTML = '<h3>Your blow-in · ' + esc(T.name) + ($('bi_type').value === 'auto' ? ' <small style="font-weight:400;color:var(--muted)">(from Strategy)</small>' : '') + '</h3>' + rows([
      ['Furnace', 'working volume · tuyeres · tapholes', fmt(v.vu, 0) + ' m³ · ' + fmt(g.ntu, 0) + ' · ' + fmt(v.taps, 0)],
      ['Fill from', '', T.from === 'sump' ? 'Sump bottom (whole furnace)' : T.from === 'tuy' ? 'Tuyere level' : T.from === 'shaft' ? 'Belly top (shaft only)' : 'No filling — furnace is full'],
      ['Volume to fill', '', fmt(tot.V, 0) + ' m³'],
      ['Coke in the fill', 'incl. coke blank', fmt(tot.coke, 0) + ' t' + (tot.wood ? ' + ' + fmt(tot.wood, 0) + ' t timber' : '')],
      ['Blast at light-up', fmt(p.b0, 0) + '% of ' + fmt(v.blast, 0) + ' Nm³/min', fmt(v.blast * p.b0 / 100, 0) + ' Nm³/min'],
      ['Tuyeres open at light-up', 'of ' + fmt(g.ntu, 0), fmt(p.tuo, 0)],
      ['Predicted first slag · first cast', C.calUsed ? 'tuned to your last blow-in' : 'planning estimate', fmt(R.tSlag, 1) + ' h · ' + fmt(R.tCast, 1) + ' h'],
      ['Full production', 'with O₂ and PCI back', 'day ' + fmt(p.dfull, 1)]
    ]);
    renderRecipe(); renderDist(); renderTimeline(); renderTapping(); renderPredict();
  }

  function renderRecipe() {
    var v = C.v, p = C.p, fill = C.fill, tot = C.tot;
    $('biHearthOpt').innerHTML = C.type === 'reline' ? '<label style="max-width:420px;margin-bottom:10px">Hearth fill <small>below the tuyeres</small><select id="bi_hfill"><option value="coke">Coke (recommended, no moisture)</option><option value="wood">Timber + coke above (old practice: big hearth, saves coke)</option></select></label>' : '';
    if ($('bi_hfill')) { $('bi_hfill').value = st.hfill; $('bi_hfill').onchange = function () { st.hfill = this.value; save(); render(); }; }
    if (!fill.length) {
      $('biFillBody').innerHTML = '<tr><td colspan="12">No filling for a banked furnace: it is already full of banking burden (coke-up ' + Math.round(((window.BD && BD.STOPS.long.cokeUp) || 0.25) * 100) + '%). Start from the top-charge programme below.</td></tr>';
      $('biFillTot').innerHTML = ''; $('biDumpBody').innerHTML = ''; $('biSlagBody').innerHTML = '';
    } else {
      $('biFillBody').innerHTML = fill.map(function (zc) {
        var wood = zc.k === 'hearth' && st.hfill === 'wood';
        return '<tr><td><span class="phase ' + zc.ph + '">' + esc(zc.n) + '</span></td><td class="n">' + fmt(zc.V, 1) + '</td><td class="n">' + (zc.sOC == null ? '—' : fmt(zc.sOC, 2)) + '</td>' +
          '<td class="n">' + (wood ? 'timber' : '<input class="biin' + (zc.user ? ' set' : '') + '" type="number" step="0.05" min="0" max="6" inputmode="decimal" data-oc="' + zc.k + '" value="' + (zc.user ? st.oc[C.type + '.' + zc.k] : '') + '" placeholder="' + fmt(zc.sOC, 2) + '">') + '</td>' +
          '<td class="n">' + (wood ? fmt(zc.wood, 1) + ' timber' : fmt(zc.coke, 1)) + '</td><td class="n">' + fmt(zc.ore, 1) + '</td><td class="n">' + fmt(zc.L, 1) + '</td><td class="n">' + fmt(zc.D, 1) + '</td><td class="n">' + fmt(zc.Qz, 1) + '</td><td class="n">' + fmt(zc.charges, 0) + '</td>' +
          '<td class="n">' + (zc.r > 0 ? fmt(zc.Cr, 0) : 'coke only') + '</td><td class="n">' + fmt(zc.HM, 1) + '</td></tr>';
      }).join('') + '<tr><th>Total fill</th><th class="n">' + fmt(tot.V, 0) + '</th><th></th><th></th><th class="n">' + fmt(tot.coke, 0) + '</th><th class="n">' + fmt(tot.ore, 0) + '</th><th class="n">' + fmt(tot.L, 1) + '</th><th class="n">' + fmt(tot.D, 1) + '</th><th class="n">' + fmt(tot.Qz, 1) + '</th><th class="n">' + fmt(fill.reduce(function (a, z) { return a + z.charges; }, 0), 0) + '</th><th class="n">' + fmt(tot.Cr, 0) + '</th><th class="n">' + fmt(tot.HM, 0) + '</th></tr>';
      $('biFillTot').innerHTML = '<span class="chip">Overall fill coke rate <b>' + fmt(tot.Cr / 1000, 2) + ' t/tHM</b></span><span class="chip">Coke dump <b>' + fmt(C.cdump, 2) + ' t</b></span>' +
        '<span class="chip">Normal O/C <b>' + fmt(C.oc, 2) + '</b></span><span class="chip">Flux in fill <b>' + fmt(tot.L + tot.D + tot.Qz, 1) + ' t</b></span>';
      $('biDumpBody').innerHTML = fill.filter(function (zc) { return zc.coke > 0; }).map(function (zc) {
        var n = Math.max(1, zc.coke / C.cdump);
        return '<tr><td>' + esc(zc.n) + '</td><td class="n">' + fmt(C.cdump, 2) + '</td><td class="n">' + fmt(zc.ore / n, 2) + '</td><td class="n">' + fmt(zc.L / n * 1000, 0) + '</td><td class="n">' + fmt(zc.D / n * 1000, 0) + '</td><td class="n">' + fmt(zc.Qz / n * 1000, 0) + '</td><td class="n">' + fmt(zc.coke / C.cdump, 0) + '</td></tr>';
      }).join('');
      $('biSlagBody').innerHTML = fill.filter(function (zc) { return zc.coke > 0; }).map(function (zc) {
        var s = zc.s, bad = s.al > 20 || s.B > 1.2 || s.B < 0.85, warn = s.al > 18 || s.mg < 7.5 || s.B > 1.12;
        var note = zc.k === 'hearth' ? 'Hearth coke: no flux (does not melt early)' : s.Q > 0.0005 && s.al <= C.p.almax + 0.2 ? 'Quartzite added to hold Al₂O₃ at ' + fmt(C.p.almax, 1) + '%' : zc.r === 0 ? 'Coke-ash slag: flux comes with the blank coke' : s.al > 20 ? 'Al₂O₃ too high: more dolomite / slag volume' : s.al > 18 ? 'Al₂O₃ high: watch fluidity' : s.B > 1.12 ? 'Basicity high for a cold hearth' : 'OK';
        return '<tr><td>' + esc(zc.n) + '</td><td class="n">' + (s.kgt ? fmt(s.kgt, 0) : '—') + '</td><td class="n">' + fmt(s.B, 2) + '</td><td class="n' + (s.al > 20 ? ' bad' : s.al > 18 ? ' warn' : '') + '">' + fmt(s.al, 1) + '</td><td class="n">' + fmt(s.mg, 1) + '</td><td class="n">' + (zc.r > 0 ? fmt(s.si, 2) : '—') + '</td><td><span class="val ' + (bad ? 'bad' : warn ? 'warn' : 'ok') + '">' + note + '</span></td></tr>';
      }).join('');
    }
    $('biProgBody').innerHTML = C.prog.map(function (b) {
      return '<tr><td>' + fmt(b.t0, 0) + ' → ' + fmt(b.t1 + 1, 0) + '</td><td class="n">+' + Math.round(b.cu * 100) + '%</td><td class="n">' + fmt(b.coke, 0) + '</td><td class="n">' + fmt(b.pci, 0) + '</td><td class="n">' + fmt(b.r, 2) + '</td><td class="n">' + fmt(b.ore, 2) + '</td><td class="n">' + fmt(b.ch, 0) + '</td><td class="n">' + fmt(b.B, 2) + '</td></tr>';
    }).join('') + '<tr><td>After day ' + fmt(C.p.dfull, 1) + '</td><td class="n">0</td><td class="n">' + fmt(v.coke, 0) + '</td><td class="n">' + fmt(v.pci, 0) + '</td><td class="n">' + fmt(C.oc, 2) + '</td><td class="n">' + fmt(C.cdump * C.oc, 2) + '</td><td class="n">normal</td><td class="n">' + fmt(v.bas, 2) + '</td></tr>';
  }

  function renderDist() {
    var k = st.dist, m = st.mx[k], v = C.v;
    Array.prototype.forEach.call($('biDistSeg').children, function (b) { b.classList.toggle('on', b.dataset.k === k); });
    var bltOn = $('i_blt') && $('i_blt').value === 'yes';
    $('biDistLead').innerHTML = bltOn ? 'Bell-less top: the blow-in needs an <b>open, coke-rich centre</b> so hot gas reaches the cold hearth through the deadman, and a <b>slightly open wall</b> on day 1 to heat the new lining and stop scaffolds. Close the wall back to normal as the wall temperatures come up.'
      : 'Bell top (no BLT in Inputs): use <b>coke-first charging (C C ↓ O O ↓)</b>, the stockline 0.3–0.5 m lower than normal for the first day to throw ore towards the wall a little, and an extra coke dump in every 4th charge for the centre. The ring matrix below is shown for reference.';
    var gOC = k === 'A' ? C.oc / (1 + C.p.cu1 / 100) : k === 'B' ? C.oc / (1 + C.p.cu1 / 200) : C.oc;
    var sc = m.c.reduce(function (a, b) { return a + b; }, 0), so = m.o.reduce(function (a, b) { return a + b; }, 0);
    var loc = m.c.map(function (c, i) { return c > 0 ? (m.o[i] / Math.max(1e-6, so)) / (c / sc) * gOC : 9; });
    var flow = loc.map(function (x) { return 1 / (x + 0.35); }), fav = flow.reduce(function (a, b) { return a + b; }, 0) / 6;
    flow = flow.map(function (f) { return f / fav; });
    $('biMxBody').innerHTML = m.c.map(function (c, i) {
      return '<tr><td>' + (i + 1) + (i === 0 ? ' wall' : i === 5 ? ' centre' : '') + '</td><td class="n"><input class="biin" type="number" min="0" max="12" step="1" data-mx="c' + i + '" value="' + c + '"></td><td class="n"><input class="biin" type="number" min="0" max="12" step="1" data-mx="o' + i + '" value="' + m.o[i] + '"></td>' +
        '<td class="n">' + (loc[i] >= 9 ? 'ore only' : fmt(loc[i], 2)) + '</td><td class="n">' + fmt(flow[i], 2) + '×</td></tr>';
    }).join('') + '<tr><th>Total</th><th class="n">' + sc + '</th><th class="n">' + so + '</th><th class="n">' + fmt(gOC, 2) + ' avg</th><th></th></tr>';
    // svg
    var W = 340, H = 190, x0 = 30, bw = 44, maxOC = Math.max(4, Math.max.apply(null, loc.filter(function (x) { return x < 9; })) * 1.15);
    var svg = '<line x1="' + x0 + '" y1="160" x2="' + (W - 10) + '" y2="160" stroke="#93a6ba" stroke-width=".7"/>';
    loc.forEach(function (x, i) {
      var h = Math.min(140, (x >= 9 ? maxOC : x) / maxOC * 140), xx = x0 + i * (bw + 6);
      svg += '<rect x="' + xx + '" y="' + (160 - h) + '" width="' + bw + '" height="' + h + '" rx="3" fill="' + (x >= 9 ? '#ff5a4a' : '#c08a5a') + '" fill-opacity=".75"/>' +
        '<text x="' + (xx + bw / 2) + '" y="176" fill="#93a6ba" font-size="10" text-anchor="middle">' + (i === 0 ? 'wall' : i === 5 ? 'centre' : 'ring ' + (i + 1)) + '</text>' +
        '<text x="' + (xx + bw / 2) + '" y="' + (155 - h) + '" fill="#e8eef5" font-size="10" text-anchor="middle">' + (x >= 9 ? '∞' : x.toFixed(1)) + '</text>';
    });
    var pts = flow.map(function (f, i) { return (x0 + i * (bw + 6) + bw / 2) + ',' + (160 - Math.min(150, f / 2.5 * 140)); }).join(' ');
    svg += '<polyline points="' + pts + '" fill="none" stroke="#3cc6c4" stroke-width="2.2"/>' + flow.map(function (f, i) { return '<circle cx="' + (x0 + i * (bw + 6) + bw / 2) + '" cy="' + (160 - Math.min(150, f / 2.5 * 140)) + '" r="3" fill="#3cc6c4"/>'; }).join('') +
      '<text x="4" y="12" fill="#93a6ba" font-size="10">O/C per ring (t/t) · gas flow (line)</text>';
    $('biDistSvg').innerHTML = svg;
    var cw = flow[5] / flow[0], wallRel = loc[0] / gOC, cenOC = loc[5];
    var pattern = cenOC < 0.3 && wallRel < 0.85 ? 'Centre + wall open' : cenOC < 0.3 && wallRel <= 1.25 ? 'Centre open, wall normal' : cenOC >= 0.3 && wallRel < 0.85 ? 'Wall-working' : cenOC >= 0.3 ? 'Centre closed' : 'Wall closed, centre open';
    $('biDistRows').innerHTML = rows([
      ['Pattern', '', pattern, cenOC >= 0.3 ? 'bad' : wallRel < 0.6 ? 'warn' : 'ok'],
      ['Centre / wall gas flow', '', fmt(cw, 2) + '×'],
      ['Wall O/C vs average', '', fmt(wallRel * 100, 0) + '%', wallRel < 0.6 || wallRel > 1.25 ? 'warn' : 'ok'],
      ['Turns per charge', 'coke · ore', sc + ' · ' + so, sc === MX[k].c.reduce(function (a, b) { return a + b; }, 0) && so === MX[k].o.reduce(function (a, b) { return a + b; }, 0) ? 'ok' : 'warn']
    ]);
    var adv = [];
    if (cenOC >= 0.3) adv.push('<b>Put coke only in the centre ring (ore turns 0).</b> A blow-in needs a strong central chimney to heat the deadman and drain the first cold slag.');
    if (k === 'A' && wallRel > 1.0) adv.push('Day 1: take <b>one ore turn off the wall ring</b> (to ring 4) so the new lining warms up and the wall does not scaffold.');
    if (k !== 'A' && wallRel < 0.75) adv.push('Wall is very open for this phase — move one ore turn back to the wall when wall/stave temperatures are normal, to stop heat loss and lining wear.');
    if (so !== MX[k].o.reduce(function (a, b) { return a + b; }, 0) || sc !== MX[k].c.reduce(function (a, b) { return a + b; }, 0)) adv.push('Your turns per charge differ from the plant normal (12 coke / 10 ore). Check the chute rotation time against the dump size so every dump is fully discharged.');
    adv.push('Phase A → B → Normal: change <b>one turn at a time</b>, every 8–12 h, only when top gas temperature spread, wall temperatures and the probe (if fitted) show stable gas flow.');
    adv.push('Set the ring angles from your own BLT angle table; check by profile meter / stockline radar after the fill.');
    $('biDistAdv').innerHTML = adv.map(function (a) { return '<li>' + a + '</li>'; }).join('');
  }

  function renderTimeline() {
    var R = C.R, p = C.p, v = C.v;
    $('biTlSum').innerHTML = '<span class="chip">First slag <b>' + fmt(R.tSlag, 1) + ' h</b></span><span class="chip">First cast <b>' + fmt(R.tCast, 1) + ' h</b></span><span class="chip">Gas to GCP <b>' + fmt(p.gcp, 1) + ' h</b></span>' +
      '<span class="chip">Max tuyere velocity <b>' + fmt(R.velMax, 0) + ' m/s</b></span><span class="chip">Coke burnt to full <b>' + fmt(R.cokeB, 0) + ' t</b></span>';
    var evAt = {}; R.events.forEach(function (e) { var h = Math.round(e[0]); (evAt[h] = evAt[h] || []).push(e[1]); });
    R.casts.forEach(function (c, i) { var h = Math.round(c.t); (evAt[h] = evAt[h] || []).push((c.first ? '<b>FIRST CAST</b> ' : 'Cast ' + (i + 1) + ': ') + fmt(c.hm, 0) + ' t HM, Si ≈ ' + fmt(c.si, 1) + '%, ' + fmt(c.T, 0) + ' °C'); });
    var gcpH = Math.round(p.gcp); (evAt[gcpH] = evAt[gcpH] || []).push('Gas from bleeder to GCP — only if O₂ < 0.5% (3 samples) and CO steady');
    var o2H = Math.round(p.o2day * 24), pciH = Math.round(p.pciday * 24);
    (evAt[o2H] = evAt[o2H] || []).push('Start O₂ enrichment low (1%), ramp to ' + fmt(v.o2, 1) + '% by full production');
    (evAt[pciH] = evAt[pciH] || []).push('Start PCI low (30–40 kg/tHM), ramp to ' + fmt(v.pci, 0) + ' kg/tHM; take the coke-for-coal back out of the top charges');
    var html = '', prevF = null, lastShown = -1;
    R.out.forEach(function (o, i) {
      var h = o.t, show = h <= 36 ? Math.abs(h % 1) < 1e-9 : h <= 72 ? Math.abs(h % 3) < 1e-9 : Math.abs(h % 12) < 1e-9;
      if (!show) return;
      var hi = Math.round(h), ev = [];
      for (var q = lastShown + 1; q <= hi; q++) if (evAt[q]) ev = ev.concat(evAt[q]);
      lastShown = hi;
      if (i === 0) ev.unshift('<b>LIGHT-UP</b>: hot blast ' + fmt(p.hbt, 0) + ' °C on ' + fmt(o.n, 0) + ' tuyeres, gas to bleeder, tapholes blowing gas (reline / deep)');
      if (prevF != null && o.F !== prevF) ev.push('Blast to ' + Math.round(o.F * 100) + '%');
      prevF = o.F;
      if (!ev.length && hi % 4 === 0) ev.push('Log tuyere colour, top T, CO / CO₂ / H₂ / O₂, stockline, wall temperatures');
      html += '<tr><td class="n">' + fmt(h, 0) + '</td><td class="n">' + Math.round(o.F * 100) + '%</td><td class="n">' + fmt(o.Q, 0) + '</td><td class="n">' + fmt(o.n, 0) + '/' + fmt(C.g.ntu, 0) + '</td>' +
        '<td class="n' + (o.vel > 260 ? ' bad' : o.vel < 110 ? ' warn' : '') + '">' + fmt(o.vel, 0) + '</td><td class="n">' + fmt(o.cb, 1) + '</td><td>' + esc(o.melt) + '</td><td class="n">' + fmt(o.tops / (C.cdump / v.coked + C.cdump * C.oc / v.bd), 0) + '</td>' +
        '<td class="n">' + fmt(o.hm, 0) + '</td><td class="n">' + fmt(o.liq, 0) + '</td><td><span class="route ' + o.route + '">' + (o.route === 'gcp' ? 'GCP' : 'Bleeder') + '</span></td><td>' + ev.join('. ') + '</td></tr>';
    });
    $('biTlBody').innerHTML = html;
  }

  function renderTapping() {
    var R = C.R, v = C.v, g = C.g, p = C.p, first = R.casts[0];
    $('biTapRows').innerHTML = rows([
      ['First cast predicted at', 'after light-up', fmt(R.tCast, 1) + ' h'],
      ['First cast size', '', first ? fmt(first.hm, 0) + ' t HM + ' + fmt(first.slag, 0) + ' t slag' : '—'],
      ['First cast HM temperature · Si', 'typical for this blow-in', first ? fmt(first.T, 0) + ' °C · ' + fmt(first.si, 1) + '%' : '—', first && first.T < 1400 ? 'warn' : 'ok'],
      ['Safe liquid in hearth between casts', 'taphole → tuyere, 35% voidage, 40% margin', fmt(R.safeLiq, 0) + ' m³ liquid', R.capHit ? 'bad' : 'ok'],
      ['Tapholes to use first', 'the one(s) under the open tuyeres', fmt(Math.min(v.taps, C.type === 'reline' ? 1 : 2), 0) + ' of ' + fmt(v.taps, 0)],
      ['Drill bit for first casts', 'larger than normal, cold clay', fmt(Math.min(80, Math.round(45 + 0.02 * (v.vu - 400))), 0) + ' mm, oxygen lance ready'],
      ['Casts in the first 72 h', '', fmt(R.casts.filter(function (c) { return c.t <= 72; }).length, 0)]
    ]);
    $('biCastBody').innerHTML = R.casts.filter(function (c) { return c.t <= 72; }).map(function (c, i) {
      var note = i === 0 ? 'Cold, sticky: open with O₂ lance, run slag through the iron runner' : c.si > 2.5 ? 'High Si — normal for the blow-in coke' : c.T < 1420 ? 'Still cool — keep coke-up' : 'Becoming normal';
      return '<tr><td>' + (i + 1) + '</td><td class="n">' + fmt(c.t, 1) + '</td><td class="n">' + fmt(c.hm, 0) + '</td><td class="n">' + fmt(c.slag, 0) + '</td><td class="n">' + fmt(c.si, 2) + '</td><td class="n">' + fmt(c.T, 0) + '</td><td>' + note + '</td></tr>';
    }).join('') || '<tr><td colspan="7">No cast inside 72 h with these inputs.</td></tr>';
    var n = [];
    if (C.type === 'reline' || C.type === 'deep') n.push('<b>Gas-blowing tapholes:</b> keep the blow-in pipe / open taphole blowing hot gas from light-up to heat the hearth bottom; plug with clay when first slag shows at the tuyeres.');
    n.push('<b>First cast:</b> drill to the full depth, lance with oxygen if the metal is frozen in the hole. Expect slag and iron together and a sticky cold runner — clear the iron runner and skimmer before.');
    n.push('<b>Early casts every 2–2.5 h</b>, small and complete; do not wait for the normal tap clock while the hearth is cold and the liquid level must stay well below the tuyeres.');
    n.push('Slag with iron: send the first 2–3 casts to the pit / ladle, not to the granulation, until the slag is fluid and the iron temperature is above about 1420 °C.');
    n.push('Mud gun: use softer, fast-setting clay for the first casts; build the taphole length back to ' + fmt(Math.round(0.35 * C.g.dh * 10) / 10, 1) + ' m over the first week.');
    if (R.capHit) n.push('<b class="val bad">Liquid can reach more than the safe level between casts in your plan</b> — cast more often or open the second taphole earlier.');
    $('biTapNotes').innerHTML = n.map(function (x) { return '<li>' + x + '</li>'; }).join('');
  }

  function renderPredict() {
    var R = C.R, v = C.v, p = C.p, normHM = v.hm;
    var days = Object.keys(R.day).map(Number).sort(function (a, b) { return a - b; }).filter(function (d) { return d <= Math.ceil(p.dfull) + 1 && R.day[d].n >= 80; });
    var d72 = R.out.filter(function (o) { return o.t <= 72; }), hm72 = d72.length ? d72[d72.length - 1].hm : 0;
    var cokeTo = R.out.filter(function (o) { return o.t <= 72; }).reduce(function (a, o) { return a + o.cb * 0.25; }, 0);
    $('biPredChips').innerHTML = '<span class="chip">First slag <b>' + fmt(R.tSlag, 1) + ' h</b></span><span class="chip">First cast <b>' + fmt(R.tCast, 1) + ' h</b></span>' +
      '<span class="chip">HM in 72 h <b>' + fmt(hm72, 0) + ' t</b></span><span class="chip">Coke rate 0–72 h <b>' + fmt(hm72 > 0 ? cokeTo * 1000 / hm72 : null, 0) + ' kg/t</b></span>' +
      '<span class="chip">Full production <b>day ' + fmt(p.dfull, 1) + '</b></span>' + (C.calUsed ? '<span class="chip">Tuned to <b>your last blow-in</b></span>' : '');
    $('biDayBody').innerHTML = days.map(function (dn) {
      var D = R.day[dn], si = D.siw > 0 ? D.si / D.siw : null, ms = [];
      if (R.tCast != null && Math.floor(R.tCast / 24) + 1 === dn) ms.push('First cast');
      if (Math.floor(p.o2day) + 1 === dn) ms.push('O₂ on');
      if (Math.floor(p.pciday) + 1 === dn) ms.push('PCI on');
      if (Math.ceil(p.dfull) === dn) ms.push('Full blast');
      return '<tr><td>Day ' + dn + '</td><td class="n">' + Math.round(D.F / D.n * 100) + '%</td><td class="n">' + fmt(D.hm, 0) + '</td><td class="n">' + fmt(D.hm / normHM * 100, 0) + '%</td><td class="n">' + fmt(D.coke, 0) + '</td><td class="n">' + (D.hm > 1 ? fmt(D.coke * 1000 / D.hm, 0) : '—') + '</td>' +
        '<td class="n">' + fmt(si, 2) + '</td><td class="n">' + fmt(D.T / D.n, 0) + '</td><td class="n">' + D.casts + '</td><td>' + ms.join(' · ') + '</td></tr>';
    }).join('');
    // trend svg
    var W = 340, H = 200, x0 = 34, x1 = W - 30, y0 = 170, n = days.length, bw = (x1 - x0) / Math.max(1, n) * 0.6;
    var maxHM = Math.max(normHM, Math.max.apply(null, days.map(function (dn) { return R.day[dn].hm; })));
    var svg = '<line x1="' + x0 + '" y1="' + y0 + '" x2="' + x1 + '" y2="' + y0 + '" stroke="#93a6ba" stroke-width=".7"/>' +
      '<line x1="' + x0 + '" y1="' + (y0 - normHM / maxHM * 140) + '" x2="' + x1 + '" y2="' + (y0 - normHM / maxHM * 140) + '" stroke="#72c784" stroke-dasharray="3 3" stroke-width=".8"/><text x="' + (x1 + 2) + '" y="' + (y0 - normHM / maxHM * 140 + 3) + '" fill="#72c784" font-size="9">normal</text>';
    var siPts = [], tPts = [];
    days.forEach(function (dn, i) {
      var D = R.day[dn], cx = x0 + (i + 0.5) * (x1 - x0) / n, h = D.hm / maxHM * 140;
      svg += '<rect x="' + (cx - bw / 2) + '" y="' + (y0 - h) + '" width="' + bw + '" height="' + h + '" rx="3" fill="#ff7a1a" fill-opacity=".35"/><text x="' + cx + '" y="' + (y0 + 13) + '" fill="#93a6ba" font-size="10" text-anchor="middle">D' + dn + '</text>';
      var si = D.siw > 0 ? D.si / D.siw : null; if (si != null) siPts.push([cx, y0 - si / 5 * 140, si]);
      tPts.push([cx, y0 - (D.T / D.n - 1300) / 250 * 140, D.T / D.n]);
    });
    if (siPts.length) svg += '<polyline points="' + siPts.map(function (q) { return q[0] + ',' + q[1]; }).join(' ') + '" fill="none" stroke="#ffb547" stroke-width="2"/>' + siPts.map(function (q) { return '<text x="' + q[0] + '" y="' + (q[1] - 5) + '" fill="#ffb547" font-size="9" text-anchor="middle">' + q[2].toFixed(1) + '%</text>'; }).join('');
    svg += '<polyline points="' + tPts.map(function (q) { return q[0] + ',' + q[1]; }).join(' ') + '" fill="none" stroke="#8fd3ff" stroke-width="2"/>' + tPts.map(function (q) { return '<text x="' + q[0] + '" y="' + (q[1] + 12) + '" fill="#8fd3ff" font-size="9" text-anchor="middle">' + Math.round(q[2]) + '</text>'; }).join('');
    svg += '<text x="4" y="12" fill="#93a6ba" font-size="10">HM t/day (bars) · Si % · HM °C</text>';
    $('biTrendSvg').innerHTML = svg;
    $('biAdvice').innerHTML = advice().map(function (a) { return '<div class="adv ' + a[0] + '"><i></i><div><b>' + a[1] + '</b><p>' + a[2] + '</p></div></div>'; }).join('');
  }

  /* ---------------- rule-based suggestions */
  function advice() {
    var A = [], p = C.p, v = C.v, g = C.g, R = C.R, T = C.T, type = C.type, fill = C.fill, tot = C.tot;
    function add(sev, t, d) { A.push([sev, t, d]); }
    var zk = {}; fill.forEach(function (z) { zk[z.k] = z; });
    // recipe
    if ((type === 'reline' || type === 'deep') && zk.bosh && zk.bosh.r > 0) add('bad', 'Bosh is not a coke blank', 'You have O/C ' + fmt(zk.bosh.r, 2) + ' in the bosh. For a ' + T.tag.toLowerCase() + ' blow-in fill the tuyere band and bosh with coke only (O/C 0) so the first slag drips through hot, permeable coke.');
    if (zk.tuy && zk.tuy.r > 0) add('bad', 'Ore at tuyere level', 'Ore in the tuyere band at light-up gives cold, unreduced FeO slag at the tuyeres and dark/blocked tuyeres. Keep O/C 0 there.');
    if (zk.belly && type === 'reline' && (zk.belly.r < 0.25 || zk.belly.r > 0.8)) add('warn', 'Belly lean burden', 'Belly O/C ' + fmt(zk.belly.r, 2) + '. For a reline 0.3–0.7 is typical: leaner wastes coke and time, richer risks a cold first cast.');
    if (zk.belly && type === 'deep' && (zk.belly.r < 0.4 || zk.belly.r > 1.1)) add('warn', 'Belly lean burden', 'Belly O/C ' + fmt(zk.belly.r, 2) + '. After a deep blowdown 0.5–1.0 is typical.');
    var inv = []; for (var i = 1; i < fill.length; i++) if (fill[i].r + 0.05 < fill[i - 1].r && fill[i - 1].k !== 'hearth') inv.push(fill[i].n);
    if (inv.length) add('bad', 'Leaner layer above a richer one', 'O/C must rise from bottom to top. Check: ' + inv.join(', ') + '. A rich layer under a lean one reaches the hearth too early and chills it.');
    var topZ = fill[fill.length - 1]; if (topZ && topZ.r > C.oc * 0.85 && type !== 'partial') add('warn', 'Top of the fill close to normal burden', 'Upper shaft O/C ' + fmt(topZ.r, 2) + ' vs normal ' + fmt(C.oc, 2) + '. Keep the fill at or below about 70% of normal O/C; the top-charge programme carries the taper on.');
    if (tot.Cr) {
      var band = type === 'reline' ? [2000, 3800] : type === 'deep' ? [1400, 2800] : [600, 1100];
      var sev = tot.Cr < band[0] * 0.85 || tot.Cr > band[1] * 1.2 ? 'bad' : tot.Cr < band[0] || tot.Cr > band[1] ? 'warn' : 'ok';
      add(sev, 'Overall coke in the fill: ' + fmt(tot.Cr / 1000, 2) + ' t/tHM', 'Typical for this type: ' + fmt(band[0] / 1000, 1) + '–' + fmt(band[1] / 1000, 1) + ' t coke per t of hot metal in the fill column. ' + (sev === 'ok' ? 'Your recipe is inside the range.' : tot.Cr < band[0] ? 'Too little coke: raise the coke blank or lower O/C in the belly / lower shaft.' : 'More coke than needed: a longer, hotter start and high-Si iron.'));
    }
    // slag
    var hiAl = fill.filter(function (z) { return z.coke > 0 && z.s.al > 18; });
    if (hiAl.length) add(hiAl.some(function (z) { return z.s.al > 20; }) ? 'bad' : 'warn', 'High Al₂O₃ in the blow-in slag', hiAl.map(function (z) { return z.n + ' ' + fmt(z.s.al, 1) + '%'; }).join(', ') + '. Raise MgO to 9–10% with dolomite, add a little quartzite + limestone for slag volume, or use a lower-alumina ore/pellet in the lean burden.');
    if (p.bas > 1.1) add('warn', 'Basicity target ' + fmt(p.bas, 2), 'A cold hearth needs a low-melting slag. High-Si blow-in iron pulls SiO₂ out of the slag, so the real slag runs higher than charged. 0.95–1.05 is safer for the first 2 days.');
    // blast
    var b0max = type === 'reline' ? 30 : type === 'deep' ? 35 : 55;
    if (p.b0 > b0max) add('warn', 'Light-up blast ' + fmt(p.b0, 0) + '%', 'High for a ' + T.tag.toLowerCase() + ' start (suggested ≤ ' + b0max + '%). Too much blast through a cold, wet column channels and blows out the coke.');
    if (p.bstep / p.bint > 8 && type !== 'partial') add('warn', 'Fast blast build-up', fmt(p.bstep, 0) + '% every ' + fmt(p.bint, 1) + ' h. Hold each step until top T, H₂ and tuyere colour are steady.');
    if (R.velMax > 260) add('bad', 'Tuyere velocity up to ' + fmt(R.velMax, 0) + ' m/s', 'Blast is too high for the tuyeres open. Open more tuyeres before raising blast, or keep the blast held.');
    if (R.Fcap) add('warn', 'Blast limited by open tuyeres', 'The plan wanted more blast than ' + fmt(p.tuo, 0) + ' open tuyeres can take (velocity ≈ 250 m/s). The timeline held it; open tuyeres faster if production must come up sooner.');
    var tuoS = Math.max(2, Math.round(T.tuo * g.ntu)); if (p.tuo > tuoS + 2 && type !== 'partial') add('warn', 'Many tuyeres open at light-up', fmt(p.tuo, 0) + ' of ' + fmt(g.ntu, 0) + '. Start with about ' + tuoS + ', those over and beside the taphole(s), so the hot zone forms where the first iron will drain.');
    if (type === 'reline' && p.hbt > 800) add('warn', 'Hot blast ' + fmt(p.hbt, 0) + ' °C on a new lining', 'Keep 650–750 °C the first day so the refractory dries without spalling; raise 50 °C per shift after that.');
    // gas
    var gcpLim = ($('i_gcp') && $('i_gcp').value === 'dry') ? Math.min(v.bag, v.maxT) : v.maxT;
    add('ok', 'Top temperature limit during the build-up: ' + fmt(gcpLim - 60, 0) + ' °C', 'GCP limit minus 60 °C. Gas stays on the bleeder until O₂ < 0.5% in three samples and CO is steady (planned at ' + fmt(p.gcp, 1) + ' h). H₂ high on day 1 = water from the new lining: no spray unless the top is at its limit.');
    if (p.gcp < (type === 'reline' ? 3 : 1)) add('warn', 'Gas to GCP very early', 'Do not route to the GCP on the clock: only on gas analysis (O₂ < 0.5%, CO steady).');
    // tapping
    if (R.capHit) { var big = R.casts.filter(function (c) { return c.t < R.tCast + 24 && c.hm / 7 + c.slag / 2.6 > R.safeLiq * (v.taps >= 2 ? 1.5 : 1); }); add(big.length === 1 && big[0].first ? 'warn' : 'bad', big.length === 1 && big[0].first ? 'First cast is large: open the taphole early' : 'Hearth liquid above the safe level', (big.length === 1 && big[0].first ? 'Liquid held up in the cold coke drains together after first slag (' + fmt(big[0].hm, 0) + ' t HM + ' + fmt(big[0].slag, 0) + ' t slag). Drill the first cast as soon as slag shows at the tuyeres, do not wait for the planned time.' : big.length + ' early casts exceed the safe liquid volume between taphole and tuyeres (' + fmt(R.safeLiq, 0) + ' m³). Cast more often, use the second taphole, or slow the blast build-up.')); }
    if (R.tCast == null) add('bad', 'No first cast in the plan', 'With these inputs the furnace does not reach a cast. Check the blast plan and recipe.');
    // O2 / PCI
    if (p.o2day < (type === 'reline' ? 2 : 1)) add('warn', 'O₂ enrichment early', 'Start O₂ only after 4–6 good casts with fluid slag and HM above 1450 °C.');
    if (p.pciday < (type === 'reline' ? 2 : 1)) add('warn', 'PCI early', 'Start PCI only when the hearth is hot and the raceway is stable (bright tuyeres, steady blast pressure).');
    if (p.pciday < p.o2day - 0.01) add('warn', 'PCI before O₂', 'Usually O₂ enrichment comes first or together with PCI, to keep the raceway temperature up.');
    if (type === 'reline' && p.cu1 < 20) add('warn', 'Low coke-up after the fill', fmt(p.cu1, 0) + '%. After a reline +25–30% for the first day of top charges is usual.');
    if (type === 'reline' && p.dfull < 5) add('warn', 'Fast ramp after a reline', 'Full production in ' + fmt(p.dfull, 1) + ' days. 5–10 days is usual for a new lining (refractory, cooling, stack settle).');
    if (C.calUsed) add('ok', 'Prediction tuned to your last blow-in', 'Heat-up time set to ' + fmt(C.delay, 1) + ' h so the first cast matches ' + fmt(p.calc, 1) + ' h.');
    else add('ok', 'Tune the prediction', 'Enter the first-cast time of your last blow-in (step 2) and the timeline is scaled to your furnace.');
    var order = { bad: 0, warn: 1, ok: 2 }; A.sort(function (a, b) { return order[a[0]] - order[b[0]]; });
    return A;
  }

  /* ---------------- checklist */
  var CHK = {
    A: ['Refractory dried to the drying curve; brick / thermocouple temperatures on target in every zone',
      'Cooling water on all staves, plates and tuyeres at full flow; leak test done; flow & ΔT monitoring live',
      'Blast system, stoves, snort valve, bleeders, top N₂, BLT and gas analysers (CO, CO₂, H₂, O₂) proved',
      'GCP ready, isolated; bleeders stroked; flare / ignition system checked',
      'Blow-in recipe weighed in the stock house: coke blank, lean charges, flux, timber (if used) — tickets checked against this plan',
      'Charging programme, distribution matrix and ring angles loaded in the charging PLC',
      'Cast house dry run: runners lined and dried, skimmer, ladles / pit, drill, mud gun, O₂ lance and pipes ready',
      'Gas safety: CO monitors, BA sets, gas-free certificates, barricades, permit system and rescue team in place',
      'Communication: shift plan, roles, hourly log sheet (tuyere colour, top gas, temperatures, stockline)'],
    B: ['Fill charged zone by zone; stockline / profile checked after each zone; volumes match the plan',
      'Gas-blowing taphole / blow-in pipe in place (reline, deep); other tapholes closed',
      'Tuyeres to open chosen (over / near the taphole); others plugged with clay or blanked',
      'Final walk-down: people clear of tuyere platform and cast house; area gas-tested',
      'Hot blast on at the planned temperature; ignition seen at every open tuyere within minutes',
      'Gas to bleeder; top N₂ on; sample top gas every 15 min (O₂ < 0.5% before any GCP routing)',
      'Blast stepped only after top T, H₂ and tuyere colour are steady at the previous step'],
    C: ['First slag seen at tuyeres: plug the gas-blowing taphole, start opening tuyeres one by one',
      'First cast: drill full depth / O₂ lance; iron and slag to pit or ladle; temperature and sample taken',
      'Casts every 2–2.5 h until the hearth is hot; liquid level kept well below the tuyeres',
      'Coke-up taper followed block by block; basicity, Si and HM temperature reviewed every cast',
      'Distribution changed one turn at a time (phase A → B → normal) on stable gas flow',
      'O₂ enrichment and PCI started only on the planned day AND after stable hot casts',
      'Wall / stave temperatures, cooling ΔT and shell checked every shift for hot spots',
      'Daily review: HM t, coke rate, Si, temperature vs this prediction; plan adjusted']
  };
  function tickList(store, el, items, prefix, onChange) {
    var s = {}; try { s = JSON.parse(localStorage.getItem(store) || '{}'); } catch (e) { }
    el.innerHTML = items.map(function (it, i) { var k = prefix + i, on = !!s[k]; return '<div class="chk' + (on ? ' done' : '') + '"><input type="checkbox" id="bc_' + k + '"' + (on ? ' checked' : '') + ' data-k="' + k + '"><label for="bc_' + k + '"><b>' + (i + 1) + '.</b> ' + it + '</label></div>'; }).join('');
    el.addEventListener('change', function (e) {
      var cb = e.target; if (!cb.dataset.k) return;
      var cur = {}; try { cur = JSON.parse(localStorage.getItem(store) || '{}'); } catch (x) { }
      cur[cb.dataset.k] = cb.checked; try { localStorage.setItem(store, JSON.stringify(cur)); } catch (x) { }
      cb.parentElement.classList.toggle('done', cb.checked); onChange();
    });
  }
  var chkTotal = CHK.A.length + CHK.B.length + CHK.C.length;
  function chkCount() { var s = {}; try { s = JSON.parse(localStorage.getItem(KEY_CHK) || '{}'); } catch (e) { } $('biChkCount').textContent = Object.keys(s).filter(function (k) { return s[k]; }).length + ' of ' + chkTotal + ' done'; }
  ['A', 'B', 'C'].forEach(function (k) { tickList(KEY_CHK, $('biChk' + k), CHK[k], k, chkCount); });
  chkCount();
  $('biClrChk').addEventListener('click', function () { if (!confirm('Clear all blow-in checklist ticks?')) return; try { localStorage.removeItem(KEY_CHK); } catch (e) { } document.querySelectorAll('[data-bp="check"] input[type=checkbox]').forEach(function (c) { c.checked = false; c.parentElement.classList.remove('done'); }); chkCount(); });

  /* ---------------- events */
  var rt = null; function later() { clearTimeout(rt); rt = setTimeout(function () { render(); }, 120); }
  ALL.forEach(function (f) { $('bi_' + f[0]).addEventListener('input', function () { st.v[f[0]] = this.value === '' ? null : this.value; save(); later(); }); });
  $('bi_type').addEventListener('change', function () { st.type = this.value; save(); render(); });
  $('biTypeHelp').addEventListener('click', function (e) { var o = e.target.closest('.opt'); if (!o) return; $('bi_type').value = o.dataset.k; st.type = o.dataset.k; save(); render(); });
  $('biFillBody').addEventListener('change', function (e) { var el = e.target; if (!el.dataset.oc) return; var k = C.type + '.' + el.dataset.oc; if (el.value === '') delete st.oc[k]; else st.oc[k] = el.value; save(); render(); });
  $('biRecipeAuto').addEventListener('click', function () { Object.keys(st.oc).forEach(function (k) { if (k.indexOf(C.type + '.') === 0) delete st.oc[k]; }); save(); render(); });
  $('biMxBody').addEventListener('change', function (e) { var el = e.target, m = el.dataset.mx; if (!m) return; var n = Math.max(0, Math.min(12, Math.round(+el.value || 0))); st.mx[st.dist][m[0]][+m.slice(1)] = n; save(); render(); });
  $('biMxAuto').addEventListener('click', function () { st.mx[st.dist] = JSON.parse(JSON.stringify(MX[st.dist])); save(); render(); });
  $('biDistSeg').addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; st.dist = b.dataset.k; save(); renderDist(); });
  $('biReset').addEventListener('click', function () { if (!confirm('Reset all blow-in inputs, recipe O/C and distribution to the suggested values?')) return; st.v = {}; st.oc = {}; st.mx = JSON.parse(JSON.stringify(MX)); ALL.forEach(function (f) { $('bi_' + f[0]).value = typeof f[3] === 'number' ? f[3] : ''; }); save(); render(); });
  var btabs = $('biTabs').querySelectorAll('button');
  function setBp(k) {
    btabs.forEach(function (b) { b.classList.toggle('on', b.dataset.b === k); });
    document.querySelectorAll('.bip').forEach(function (s) { s.classList.toggle('on', s.dataset.bp === k); });
    var on = $('biTabs').querySelector('.on'); if (on && on.scrollIntoView) on.scrollIntoView({ inline: 'center', block: 'nearest' });
    try { localStorage.setItem(KEY + '.page', k); } catch (e) { }
  }
  btabs.forEach(function (b) { b.addEventListener('click', function () { setBp(b.dataset.b); }); });
  try { var pg = localStorage.getItem(KEY + '.page'); if (pg) setBp(pg); } catch (e) { }
  // furnace inputs on the Inputs tab change the blow-in too
  document.addEventListener('input', function (e) { if (e.target && /^i_/.test(e.target.id || '')) later(); });
  document.addEventListener('change', function (e) { if (e.target && (/^i_/.test(e.target.id || '') || e.target.id === 'strat')) later(); });
  render();
  window.BIPlanner = { compute: compute, get state() { return C; } };
})();
