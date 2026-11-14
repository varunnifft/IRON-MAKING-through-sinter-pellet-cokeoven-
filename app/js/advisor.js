/* Process Advisor add-on: Target vs Actual dashboard, Root cause & troubleshooting advisor, Target recovery
   and action planner. It reads the app's own records (blend, raw-material analysis, lab results, machine
   settings, model results) through SinterApp.ctx and keeps its own records (approved targets, measurements,
   daily records, instrument calibration, document register, action plans) under its own storage key, so the
   existing app data is never rewritten. Nothing here assumes a universal sinter target: a parameter has a
   target only once plant personnel have entered it and an admin has approved it. */
(function () {
  var KEY = 'sp.advisor';
  var C = null, A = null;
  function ctx() { if (!C) C = window.SinterApp && window.SinterApp.ctx; return C; }
  function load() {
    var d = null; try { d = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { }
    d = d || {};
    ['cfg', 'meas', 'mhist'].forEach(function (k) { if (!d[k] || typeof d[k] !== 'object') d[k] = {}; });
    ['hist', 'docs', 'plans', 'log'].forEach(function (k) { if (!Array.isArray(d[k])) d[k] = []; });
    if (!Array.isArray(d.cal)) d.cal = INSTR.map(function (x) { return { id: x[0], name: x[1], params: x[2], last: '', every: x[3], note: '' }; });
    if (!d.set) d.set = { bHi: 'b4', nWb: 0, dpr: true, base: 'prev' };
    return d;
  }
  function store() { try { localStorage.setItem(KEY, JSON.stringify(A)); } catch (e) { ctx().toast('Could not save advisor data on this device'); } }
  function today() { return new Date().toISOString().slice(0, 10); }
  function now() { return new Date().toISOString().slice(0, 16).replace('T', ' '); }
  function isAdmin() { return !!(window.SinterAuth && SinterAuth.isAdmin()); }
  function userName() { var s = window.SinterAuth && SinterAuth.session(); return (s && s.profile && s.profile.name) || (s && s.admin ? 'Admin' : 'Guest'); }
  function fin(v) { return v != null && v !== '' && isFinite(v); }

  var DEPT = ['Raw Material Handling', 'Sinter Operations', 'Process Technology', 'Quality Control Lab', 'Instrumentation & Control', 'Mechanical Maintenance', 'Electrical Maintenance', 'Environment', 'Energy Management'];
  var SEV = ['Information', 'Minor', 'Major', 'Critical'];
  var FREQ = ['Per shift', 'Daily', 'Weekly', 'Monthly'];

  // instrument / data-quality register: id, name, parameters it feeds, default calibration interval (days, editable)
  var INSTR = [
    ['bw', 'Feeder belt weighers / weigh feeders', ['rmFe', 'rmSiO2', 'rmAl2O3', 'rmCaO', 'rmMgO', 'rmB2', 'fuel', 'fe', 'sio2', 'al2o3', 'cao', 'mgo', 'b2', 'bHi'], 90],
    ['moist', 'Mix moisture gauge / sampling', ['moist', 'perm'], 30],
    ['xrf', 'Lab XRF / wet chemistry (sinter & raw materials)', ['fe', 'feo', 'sio2', 'al2o3', 'cao', 'mgo', 'p', 's', 'b2', 'bHi', 'rmFe', 'rmSiO2', 'rmAl2O3', 'rmCaO', 'rmMgO', 'rmB2'], 30],
    ['drum', 'Tumbler drum (TI) and test sieves', ['ti', 'p50', 'p40', 'p25', 'p10', 'p6', 'm6', 'mps', 'hd'], 180],
    ['furn', 'RDI / RI reduction furnace', ['rdi', 'ri'], 180],
    ['btp', 'Windbox / BTP thermocouples', ['btp', 'btpPos', 'wbTemp'], 90],
    ['suct', 'Main and windbox suction transmitters', ['windP', 'wbSuct', 'perm'], 90],
    ['speed', 'Strand speed encoder', ['speed', 'productivity'], 180],
    ['bed', 'Bed height sensor', ['bed', 'perm'], 90],
    ['gas', 'Exhaust gas analyser (CEMS) and temperature', ['egT', 'egO2', 'egCO', 'egCO2', 'egSO2', 'egNOx', 'egDust'], 90],
    ['wb', 'Product weighbridge / sinter weighing', ['prodDry', 'productivity', 'yield', 'fuel'], 180],
    ['kwh', 'Fan energy meter', ['fanKwh'], 365]
  ];

  /* Parameter register. kind: lab (product test: lab > manual entry > model estimate shown as pending),
     calc (calculated from feeder records + raw-material analysis), inp (operating record on the Inputs page),
     model (model estimate unless measured), meas (measured value entered here only), list (one value per windbox).
     pr = plausibility range used only to flag an invalid measurement (not a target). */
  var P = [
    ['Raw-mix chemistry (dry, calculated)'],
    { k: 'rmFe', l: 'Raw-mix total Fe', u: '%', d: 2, kind: 'calc', ox: 'fe', pr: [20, 70], basis: 'Dry raw mix incl. fuel and returns' },
    { k: 'rmSiO2', l: 'Raw-mix SiO₂', u: '%', d: 2, kind: 'calc', ox: 'sio2', pr: [0, 20], basis: 'Dry raw mix' },
    { k: 'rmAl2O3', l: 'Raw-mix Al₂O₃', u: '%', d: 2, kind: 'calc', ox: 'al2o3', pr: [0, 10], basis: 'Dry raw mix' },
    { k: 'rmCaO', l: 'Raw-mix CaO', u: '%', d: 2, kind: 'calc', ox: 'cao', pr: [0, 30], basis: 'Dry raw mix' },
    { k: 'rmMgO', l: 'Raw-mix MgO', u: '%', d: 2, kind: 'calc', ox: 'mgo', pr: [0, 10], basis: 'Dry raw mix' },
    { k: 'rmB2', l: 'Raw-mix basicity CaO/SiO₂', u: '', d: 2, kind: 'calc', ox: 'b2', pr: [0.2, 5], basis: 'Dry raw mix' },
    ['Product chemistry'],
    { k: 'fe', l: 'Sinter total Fe', u: '%', d: 2, kind: 'lab', mk: 'fe', pr: [35, 70], method: 'ISO 2597 / plant lab method' },
    { k: 'feo', l: 'Sinter FeO', u: '%', d: 2, kind: 'lab', mk: 'feo', pr: [2, 25], method: 'ISO 9035 / plant lab method' },
    { k: 'sio2', l: 'SiO₂', u: '%', d: 2, kind: 'lab', mk: 'sio2', pr: [1, 15] },
    { k: 'al2o3', l: 'Al₂O₃', u: '%', d: 2, kind: 'lab', mk: 'al2o3', pr: [0.3, 8] },
    { k: 'cao', l: 'CaO', u: '%', d: 2, kind: 'lab', mk: 'cao', pr: [2, 25] },
    { k: 'mgo', l: 'MgO', u: '%', d: 2, kind: 'lab', mk: 'mgo', pr: [0, 8] },
    { k: 'p', l: 'Phosphorus P', u: '%', d: 3, kind: 'lab', mk: 'p', pr: [0, 1] },
    { k: 's', l: 'Sulphur S', u: '%', d: 3, kind: 'lab', mk: 's', pr: [0, 1] },
    ['Basicity'],
    { k: 'b2', l: 'Binary basicity B2 (CaO/SiO₂)', u: '', d: 2, kind: 'lab', mk: 'b2', pr: [0.3, 5] },
    { k: 'bHi', l: 'Higher-order basicity', u: '', d: 2, kind: 'lab', mk: 'b4', pr: [0.3, 5] },
    ['Product size and return fines'],
    { k: 'p50', l: '+50 mm', u: '%', d: 1, kind: 'lab', mk: 'p50', pr: [0, 100], method: 'ISO 4701 sieving' },
    { k: 'p40', l: '40–50 mm', u: '%', d: 1, kind: 'lab', mk: 'p40', pr: [0, 100], method: 'ISO 4701 sieving' },
    { k: 'p25', l: '25–40 mm', u: '%', d: 1, kind: 'lab', mk: 'p25', pr: [0, 100], method: 'ISO 4701 sieving' },
    { k: 'p10', l: '10–25 mm', u: '%', d: 1, kind: 'lab', mk: 'p10', pr: [0, 100], method: 'ISO 4701 sieving' },
    { k: 'p6', l: '6–10 mm', u: '%', d: 1, kind: 'lab', mk: 'p6', pr: [0, 100], method: 'ISO 4701 sieving' },
    { k: 'm6', l: '−6 mm (return fines in product)', u: '%', d: 2, kind: 'lab', mk: 'm6', pr: [0, 40], method: 'ISO 4701 sieving' },
    { k: 'mps', l: 'Mean particle size', u: 'mm', d: 1, kind: 'lab', mk: 'mps', pr: [5, 60] },
    { k: 'hd', l: 'Harmonic diameter Dh', u: 'mm', d: 1, kind: 'lab', mk: 'hd', pr: [3, 50], method: 'Dh = 1/Σ(xᵢ/dᵢ) from sieving' },
    ['Strength and metallurgical quality'],
    { k: 'ti', l: 'Tumbler index TI (+6.3 mm)', u: '%', d: 1, kind: 'lab', mk: 'ti', pr: [30, 95], method: 'ISO 3271' },
    { k: 'rdi', l: 'RDI (−3.15 mm)', u: '%', d: 1, kind: 'lab', mk: 'rdi', pr: [0, 70], method: 'ISO 4696-1' },
    { k: 'ri', l: 'Reducibility RI', u: '%', d: 1, kind: 'lab', mk: 'ri', pr: [30, 95], method: 'ISO 4695 / JIS M8713' },
    ['Mix, fuel and permeability'],
    { k: 'moist', l: 'Granulated-mix moisture', u: '%', d: 2, kind: 'inp', ik: 'moist', pr: [3, 12] },
    { k: 'perm', l: 'Bed permeability', u: 'JPU', d: 1, kind: 'meas', pr: [5, 120] },
    { k: 'fuel', l: 'Coke breeze consumption', u: 'kg/t', d: 1, kind: 'calc', pr: [20, 150], basis: 'Wet coke fines (purchased + BF return) per t of sinter' },
    ['Production and yield'],
    { k: 'prodDry', l: 'Dry sinter production', u: 't/day', d: 0, kind: 'lab', mk: 'prod', lk: 'prod', pr: [100, 50000], basis: 'As reported by the plant' },
    { k: 'productivity', l: 'Productivity', u: 't/m²/h', d: 2, kind: 'calc', pr: [0.3, 3] },
    { k: 'yield', l: 'Dry sinter yield', u: '%', d: 1, kind: 'model', mk: 'yieldMB', pr: [40, 100] },
    { k: 'retRec', l: 'Return-fines recycle (share of dry mix)', u: '%', d: 1, kind: 'model', mk: 'retShare', pr: [0, 60] },
    ['Machine'],
    { k: 'speed', l: 'Strand speed', u: 'm/min', d: 2, kind: 'inp', ik: 'speed', pr: [0.3, 8] },
    { k: 'bed', l: 'Bed height', u: 'mm', d: 0, kind: 'inp', ik: 'bed', pr: [200, 1000] },
    { k: 'btp', l: 'Burn-through temperature', u: '°C', d: 0, kind: 'inp', ik: 'btp', pr: [100, 800] },
    { k: 'btpPos', l: 'Burn-through point position', u: 'windbox no.', d: 1, kind: 'meas', pr: [1, 40] },
    { k: 'windP', l: 'Main suction', u: 'kPa', d: 2, kind: 'inp', ik: 'windP', pr: [1, 30] },
    { k: 'wbSuct', l: 'Windbox suction (each windbox)', u: 'kPa', d: 2, kind: 'list', pr: [0, 30] },
    { k: 'wbTemp', l: 'Windbox temperature (each windbox)', u: '°C', d: 0, kind: 'list', pr: [20, 800] },
    ['Exhaust gas'],
    { k: 'egT', l: 'Exhaust gas temperature (main duct)', u: '°C', d: 0, kind: 'inp', ik: 'windT', pr: [50, 400] },
    { k: 'egO2', l: 'O₂', u: '%', d: 1, kind: 'meas', pr: [0, 21] },
    { k: 'egCO', l: 'CO', u: '%', d: 2, kind: 'meas', pr: [0, 10] },
    { k: 'egCO2', l: 'CO₂', u: '%', d: 1, kind: 'meas', pr: [0, 20] },
    { k: 'egSO2', l: 'SO₂', u: 'mg/Nm³', d: 0, kind: 'meas', pr: [0, 10000] },
    { k: 'egNOx', l: 'NOx', u: 'mg/Nm³', d: 0, kind: 'meas', pr: [0, 5000] },
    { k: 'egDust', l: 'Dust (stack)', u: 'mg/Nm³', d: 0, kind: 'meas', pr: [0, 1000] },
    ['Energy and availability'],
    { k: 'fanKwh', l: 'Main fan energy', u: 'kWh/t', d: 1, kind: 'meas', pr: [0, 100] },
    { k: 'downtime', l: 'Downtime', u: 'h/day', d: 1, kind: 'meas', pr: [0, 24] },
    { k: 'avail', l: 'Availability', u: '%', d: 1, kind: 'meas', pr: [0, 100] }
  ];
  var PK = {}; P.forEach(function (p) { if (p.k) PK[p.k] = p; });
  function group(k) { var g = ''; for (var i = 0; i < P.length; i++) { if (!P[i].k) g = P[i][0]; else if (P[i].k === k) return g; } return g; }
  function label(k) { var p = PK[k]; if (k === 'bHi') return 'Higher-order basicity ' + (A.set.bHi === 'b3' ? 'B3 (CaO+MgO)/SiO₂' : 'B4 (CaO+MgO)/(SiO₂+Al₂O₃)'); return p.l; }

  // ---------- actual values ----------
  function rawMix(inp) {
    var st = ctx().state, ch = st.chem, dry = 0, o = { fe: 0, sio2: 0, al2o3: 0, cao: 0, mgo: 0 };
    inp.use.forEach(function (u, i) { var d = (+u || 0) * (1 - (+ch.moist[i] || 0) / 100); dry += d; Object.keys(o).forEach(function (k) { o[k] += d * (+(ch[k] || [])[i] || 0); }); });
    Object.keys(o).forEach(function (k) { o[k] = dry ? o[k] / dry : null; });
    o.b2 = o.sio2 ? o.cao / o.sio2 : null; return o;
  }
  var _model = null;
  function model() { var s = ctx().state; return s.result || (_model = _model || ctx().run(s.inp)); }
  function labVal(lk) {
    var L = ctx().state.lab;
    if (lk === 'b2') return fin(L.b2) ? L.b2 : fin(L.cao) && fin(L.sio2) && L.sio2 ? L.cao / L.sio2 : null;
    if (lk === 'b4') return fin(L.cao) && fin(L.mgo) && fin(L.sio2) && fin(L.al2o3) ? (L.cao + L.mgo) / (L.sio2 + L.al2o3) : null;
    if (lk === 'b3') return fin(L.cao) && fin(L.mgo) && fin(L.sio2) ? (L.cao + L.mgo) / L.sio2 : null;
    if (lk === 'hd') return ctx().labHarmonic();
    return fin(L[lk]) ? +L[lk] : null;
  }
  // returns {v, src, srcL, at, list} or null
  function actual(k, inp) {
    var p = PK[k], st = ctx().state, m = A.meas[k];
    var mv = m && m.valid !== false && (fin(m.v) || (m.list && m.list.length)) ? m : null;
    if (p.kind === 'list') return mv ? { v: Math.max.apply(null, mv.list), list: mv.list, src: 'meas', srcL: 'Measured', at: mv.at } : null;
    if (p.kind === 'lab') {
      var lk = k === 'bHi' ? A.set.bHi : (p.lk || k), lv = labVal(lk);
      if (fin(lv)) return { v: lv, src: 'lab', srcL: 'Lab result', at: st.ranAt || '' };
      if (mv) return { v: mv.v, src: 'meas', srcL: 'Lab entry', at: mv.at };
      var r = model(), mk = k === 'bHi' ? A.set.bHi : p.mk;
      return fin(r[mk]) ? { v: r[mk], src: 'pending', srcL: 'Model estimate, lab pending', at: '' } : null;
    }
    if (mv) return { v: mv.v, src: 'meas', srcL: 'Measured', at: mv.at };
    if (p.kind === 'inp') { var iv = (inp || st.inp)[p.ik]; return fin(iv) ? { v: +iv, src: 'inp', srcL: 'Operating record', at: '' } : null; }
    if (p.kind === 'calc') {
      if (p.ox) { var rm = rawMix(inp || st.inp); return fin(rm[p.ox]) ? { v: rm[p.ox], src: 'calc', srcL: 'Calculated from feeder records and analysis', at: '' } : null; }
      var prodA = labVal('prod'), r2 = model(), prod = fin(prodA) ? prodA : r2.prod, est = !fin(prodA);
      if (k === 'fuel') { var u = (inp || st.inp).use, w = (+u[12] || 0) + (+u[13] || 0); return prod > 0 ? { v: w * 1000 / prod, src: est ? 'model' : 'calc', srcL: est ? 'Feeder records ÷ model production (estimate)' : 'Feeder records ÷ actual production', at: '' } : null; }
      if (k === 'productivity') { var ar = +(inp || st.inp).area; return prod > 0 && ar > 0 ? { v: prod / ar / 24, src: est ? 'model' : 'calc', srcL: est ? 'Model production ÷ area (estimate)' : 'Actual production ÷ area', at: '' } : null; }
    }
    if (p.kind === 'model') { var r3 = model(); return fin(r3[p.mk]) ? { v: r3[p.mk], src: 'model', srcL: 'Model estimate only', at: '' } : null; }
    return null;
  }

  // ---------- target configuration and status ----------
  function cfgOf(k) { return A.cfg[k] || {}; }
  function appr(k) { var c = cfgOf(k); return c.approved || null; }
  var STL = {
    ok: ['Within target', '✓'], warn: ['Warning', '!'], out: ['Outside approved limits', '✕'], missing: ['Missing data', '?'],
    invalid: ['Invalid measurement', '⊘'], pending: ['Lab result pending', '⌛'], model: ['Model estimate only', '≈'], notgt: ['No approved target', '–']
  };
  function evalOne(v, a, p) {
    if (!fin(v)) return 'missing';
    var pr = (cfgOf(p.k).pr) || p.pr; if (pr && (v < pr[0] || v > pr[1])) return 'invalid';
    if (!a) return 'notgt';
    if (fin(a.lo) && v < a.lo) return 'out';
    if (fin(a.hi) && v > a.hi) return 'out';
    if (fin(a.wlo) && v < a.wlo) return 'warn';
    if (fin(a.whi) && v > a.whi) return 'warn';
    if (!fin(a.lo) && !fin(a.hi) && !fin(a.wlo) && !fin(a.whi) && !fin(a.target)) return 'notgt';
    return 'ok';
  }
  function evaluate(k) {
    var p = PK[k], act = actual(k), a = appr(k), m = A.meas[k];
    var o = { k: k, p: p, act: act, a: a, v: act ? act.v : null, dev: null, pct: null, pctNote: '' };
    if (m && m.valid === false) { o.state = 'invalid'; o.note = 'Marked invalid' + (m.note ? ': ' + m.note : ''); return o; }
    if (!act) { o.state = 'missing'; return o; }
    var lim = evalOne(act.v, a, p);
    if (act.list) { var w = act.list.map(function (x) { return evalOne(x, a, p); }); ['invalid', 'out', 'warn', 'ok', 'notgt'].some(function (s) { if (w.indexOf(s) >= 0) { lim = s; return true; } }); }
    if (p.kind === 'lab' && act.src === 'lab' && labClosureBad(k)) { lim = 'invalid'; o.note = 'Sinter analysis does not add up (see Lab page)'; }
    o.lim = lim;
    o.state = lim === 'invalid' ? 'invalid' : act.src === 'pending' ? 'pending' : act.src === 'model' ? 'model' : lim;
    if (a && fin(a.target)) { o.dev = act.v - a.target; if (a.target !== 0) o.pct = o.dev / Math.abs(a.target) * 100; else o.pctNote = 'not defined for a zero target'; }
    return o;
  }
  function labClosureBad(k) {
    if (['fe', 'feo', 'sio2', 'al2o3', 'cao', 'mgo', 'b2', 'bHi'].indexOf(k) < 0) return false;
    var c = ctx().analysisChecks(null, ctx().state.lab); return c.length && c[0].cls === 'bad';
  }
  function dq(k) { // data-quality status from the calibration register
    var out = [];
    A.cal.forEach(function (c) {
      if (c.params.indexOf(k) < 0) return;
      if (!c.last) out.push({ cls: 'warn', t: c.name + ': calibration date not recorded' });
      else { var due = new Date(c.last); due.setDate(due.getDate() + (+c.every || 0)); if (due < new Date()) out.push({ cls: 'bad', t: c.name + ': calibration overdue since ' + due.toISOString().slice(0, 10) }); else out.push({ cls: 'ok', t: c.name + ': calibrated ' + c.last }); }
    });
    return out;
  }

  // ---------- history / trend ----------
  var MON = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
  function dprDate(s) { var m = /^(\d+)-(\w{3})-(\d{4})$/.exec(s || ''); return m ? new Date(+m[3], MON[m[2].toLowerCase()], +m[1]).toISOString().slice(0, 10) : s; }
  function trend(k) {
    var pts = [], p = PK[k];
    (A.mhist[k] || []).forEach(function (h) { if (h.valid !== false && fin(h.v)) pts.push({ at: h.at, v: +h.v, s: 'Measured' }); });
    A.hist.forEach(function (h) { if (h.vals && fin(h.vals[k]) && !(A.mhist[k] || []).some(function (x) { return x.at === h.at; })) pts.push({ at: h.at, v: h.vals[k], s: h.src && h.src[k] === 'pending' ? 'Model estimate' : 'Daily record' }); });
    if (A.set.dpr) ctx().days.forEach(function (d) {
      var v = null;
      if (p.kind === 'lab') { var lk = k === 'bHi' ? null : (p.lk || k); v = lk === 'prod' ? d.prod : lk ? d.act[lk] : null; }
      if (p.kind === 'inp') { var ix = ctx().MACH.map(function (x) { return x.k; }).indexOf(p.ik); if (ix >= 0) v = p.ik === 'speed' ? ctx().hzToMpm(d.mach[ix]) : d.mach[ix]; }
      if (fin(v)) pts.push({ at: dprDate(d.date), v: +v, s: 'DPR workbook (ILLUSTRATIVE)', illus: true });
    });
    pts.sort(function (a, b) { return String(a.at).localeCompare(String(b.at)); });
    return pts.slice(-30);
  }
  function trendText(pts, d) {
    if (pts.length < 3) return { t: pts.length ? 'Only ' + pts.length + ' recorded value' + (pts.length > 1 ? 's' : '') + ', not enough for a trend.' : 'No history recorded yet.', dir: 0 };
    var last = pts[pts.length - 1].v, prev = pts.slice(-6, -1), mean = prev.reduce(function (a, x) { return a + x.v; }, 0) / prev.length;
    var sd = Math.sqrt(prev.reduce(function (a, x) { return a + (x.v - mean) * (x.v - mean); }, 0) / Math.max(1, prev.length - 1));
    var z = sd ? (last - mean) / sd : 0, f = ctx().f;
    return { t: 'Latest ' + f(last, d) + ' against ' + f(mean, d) + ' average of the previous ' + prev.length + ' (spread ±' + f(sd, d) + ')' + (Math.abs(z) > 2 ? ': a step change.' : Math.abs(z) > 1 ? ': drifting.' : ': within normal scatter.'), dir: Math.abs(z) > 1 ? (z > 0 ? 1 : -1) : 0, z: z };
  }
  function spark(pts, a) {
    if (pts.length < 2) return '';
    var vs = pts.map(function (x) { return x.v; }), lo = Math.min.apply(null, vs), hi = Math.max.apply(null, vs);
    if (a) [a.lo, a.hi, a.target].forEach(function (x) { if (fin(x)) { lo = Math.min(lo, x); hi = Math.max(hi, x); } });
    var W = 120, H = 30, sp = hi - lo || 1, X = function (i) { return 2 + i * (W - 4) / (pts.length - 1); }, Y = function (v) { return H - 3 - (v - lo) / sp * (H - 6); };
    var dots = pts.map(function (x, i) { return x.illus ? '<circle class="sp-ill" cx="' + X(i).toFixed(1) + '" cy="' + Y(x.v).toFixed(1) + '" r="1.6"/>' : ''; }).join('');
    var band = a && fin(a.lo) && fin(a.hi) ? '<rect x="0" y="' + Y(a.hi) + '" width="' + W + '" height="' + Math.max(1, Y(a.lo) - Y(a.hi)) + '" class="sp-band"/>' : '';
    var tl = a && fin(a.target) ? '<line x1="0" x2="' + W + '" y1="' + Y(a.target) + '" y2="' + Y(a.target) + '" class="sp-tgt"/>' : '';
    return '<svg class="spark" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none">' + band + tl + '<polyline points="' + pts.map(function (x, i) { return X(i).toFixed(1) + ',' + Y(x.v).toFixed(1); }).join(' ') + '"/>' + dots + '<circle cx="' + X(pts.length - 1) + '" cy="' + Y(vs[vs.length - 1]) + '" r="2.4"/></svg>';
  }

  // ---------- shared UI ----------
  function tabs(cur) {
    return '<div class="adv-tabs">' + [['adv', 'Target vs actual'], ['rca', 'Root cause'], ['plan', 'Recovery plan']].map(function (t) { return '<button data-go="' + t[0] + '" class="' + (t[0] === cur ? 'on' : '') + '">' + t[1] + '</button>'; }).join('') + '</div>';
  }
  function stChip(s) { return '<span class="st st-' + s + '"><i>' + STL[s][1] + '</i>' + STL[s][0] + '</span>'; }
  function limText(a, d) {
    var f = ctx().f; if (!a) return 'No approved target';
    var t = []; if (fin(a.target)) t.push('target ' + f(a.target, d));
    if (fin(a.lo) || fin(a.hi)) t.push('limits ' + (fin(a.lo) ? f(a.lo, d) : '…') + ' to ' + (fin(a.hi) ? f(a.hi, d) : '…'));
    return t.join(' · ') || 'Approved, no numeric target';
  }
  function devText(o) {
    var f = ctx().f, sgn = ctx().sgn, d = o.p.d;
    if (o.dev == null) return '–';
    return sgn(o.dev, d) + (o.pct != null ? ' (' + sgn(o.pct, 1) + ' %)' : o.pctNote ? ' (% ' + o.pctNote + ')' : '');
  }
  function optList(arr, sel) { return arr.map(function (x) { return '<option' + (x === sel ? ' selected' : '') + '>' + x + '</option>'; }).join(''); }
  function inputRow(id, l, v, type, extra) { return '<label class="af"><span>' + l + '</span><input id="' + id + '" type="' + (type || 'text') + '" value="' + ctx().esc(v == null ? '' : v) + '"' + (extra || '') + '></label>'; }
  function selRow(id, l, opts) { return '<label class="af"><span>' + l + '</span><select id="' + id + '" class="sel">' + opts + '</select></label>'; }
  function $(s) { return document.querySelector(s); }
  function $$(s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); }
  function nv(id) { var e = $('#' + id); return e ? ctx().num(e.value) : null; }
  function sv(id) { var e = $('#' + id); return e ? e.value.trim() : ''; }

  // ---------- PAGE 1: Target vs actual dashboard ----------
  var flt = { g: 'all', s: 'all' };
  function allEval() { _model = null; return P.filter(function (p) { return p.k; }).map(function (p) { return evaluate(p.k); }); }
  function pageAdv(m) {
    var c = ctx(), esc = c.esc, f = c.f, ev = allEval(), cnt = {};
    ev.forEach(function (o) { cnt[o.state] = (cnt[o.state] || 0) + 1; });
    var nAppr = ev.filter(function (o) { return o.a; }).length, nDraft = Object.keys(A.cfg).filter(function (k) { return A.cfg[k].draft; }).length;
    var h = tabs('adv') + '<div class="card hero"><h2>Target vs actual</h2><p class="sub">Actual results against your plant-approved targets and limits. ' + nAppr + ' of ' + ev.length + ' parameters have an approved target' + (nDraft ? ', ' + nDraft + ' draft' + (nDraft > 1 ? 's' : '') + ' waiting for approval' : '') + '. No universal targets are assumed.</p>' + (ctx().isDemo() ? '<p style="margin:6px 0"><span class="illus">ILLUSTRATIVE</span> <span class="sub">Calculated and model values come from the built-in demo data until you load your plant data.</span></p>' : '') + (A.set.dpr ? '<p class="sub" style="margin:0">Trends include the DPR workbook days, marked <span class="illus">ILLUSTRATIVE</span> in the history.</p>' : '') +
      '<div class="st-sum">' + Object.keys(STL).filter(function (s) { return cnt[s]; }).map(function (s) { return '<button class="st st-' + s + (flt.s === s ? ' sel' : '') + '" data-fs="' + s + '"><i>' + STL[s][1] + '</i>' + STL[s][0] + ' <b>' + cnt[s] + '</b></button>'; }).join('') + (flt.s !== 'all' ? '<button class="st" data-fs="all">Show all</button>' : '') + '</div></div>';
    var groups = P.filter(function (p) { return !p.k; }).map(function (p) { return p[0]; });
    h += '<div class="card"><div class="row wrap" style="gap:8px"><select class="sel" id="advG" style="flex:1;min-width:180px"><option value="all">All groups</option>' + groups.map(function (g) { return '<option' + (flt.g === g ? ' selected' : '') + '>' + esc(g) + '</option>'; }).join('') + '</select>' +
      '<button class="btn small" id="advSnap">Save today\'s record</button><button class="btn small ghost" id="advSet">Settings</button></div>' +
      '<p class="muted small" style="margin:8px 0 0">Values come from your lab results, operating records and feeder records already in the app. Tap a parameter to configure its target, enter a measurement or troubleshoot it.</p></div>';
    var g0 = '';
    P.forEach(function (p) {
      if (!p.k) { g0 = p[0]; return; }
      if (flt.g !== 'all' && flt.g !== g0) return;
      var o = ev.filter(function (x) { return x.k === p.k; })[0];
      if (flt.s !== 'all' && o.state !== flt.s) return;
      if (h.indexOf('data-grp="' + g0 + '"') < 0) h += '<h3 class="adv-g" data-grp="' + esc(g0) + '">' + esc(g0) + '</h3>';
      var cfg = cfgOf(p.k), tr = trend(p.k);
      h += '<div class="adv-row st-b-' + o.state + '" data-k="' + p.k + '"><div class="adv-m"><b>' + esc(label(p.k)) + '</b><span class="muted small">' + esc(o.act ? o.act.srcL : 'No value recorded') + (cfg.approved && cfg.approved.method ? ' · ' + esc(cfg.approved.method) : p.method ? ' · ' + esc(p.method) : '') + '</span>' +
        (o.a || cfg.draft ? '<span class="small">' + (o.a ? esc(limText(o.a, p.d)) : '') + (cfg.draft ? ' <span class="pill">draft waiting for approval</span>' : '') + '</span>' : '') + '</div>' +
        '<div class="adv-v"><b>' + (o.act ? f(o.v, p.d) : '–') + '</b> <span class="muted small">' + esc((o.a && o.a.unit) || p.u) + '</span><div class="small">' + devText(o) + '</div>' + spark(tr, o.a) + '</div>' +
        '<div class="adv-s">' + stChip(o.state) + '</div></div>';
    });
    h += '<div class="card"><h2>Data quality: instrument calibration</h2><p class="sub">Measurements from an instrument with an overdue or unrecorded calibration lower the confidence of any diagnosis.</p>' +
      A.cal.map(function (x, i) { var q = dq(x.params[0]).filter(function (y) { return y.t.indexOf(x.name) === 0; })[0] || { cls: 'warn', t: '' }; return '<div class="chk" data-cal="' + i + '"><span class="k">' + esc(x.name) + '<small>' + (x.last ? 'Last calibrated ' + esc(x.last) + ' · every ' + x.every + ' days' : 'Calibration date not recorded') + '</small></span><span class="chip ' + (q.cls === 'ok' ? 'ok' : q.cls === 'bad' ? 'bad' : 'warn') + '">' + (q.cls === 'ok' ? 'OK' : q.cls === 'bad' ? 'OVERDUE' : 'UNKNOWN') + '</span></div>'; }).join('') + '</div>';
    h += '<div class="card"><h2>Internal documents</h2><p class="sub">Register your SOPs, laboratory procedures and engineering documents so the advisor can point to them.</p>' +
      (A.docs.length ? A.docs.map(function (d, i) { return '<div class="chk" data-doc="' + i + '"><span class="k">' + esc(d.id) + ' · ' + esc(d.title) + '<small>' + esc(d.type) + (d.rev ? ' · rev ' + esc(d.rev) : '') + ' · topics: ' + esc((d.topics || []).join(', ')) + '</small></span></div>'; }).join('') : '<p class="muted small">No documents registered yet.</p>') +
      '<button class="btn small" id="advDoc">Add document</button></div>';
    h += '<div class="row"><button class="btn ghost" id="advExp">Export dashboard (.xlsx)</button><span class="spacer"></span><button class="btn primary" data-go="rca">Root cause →</button></div>';
    m.innerHTML = h;
    $$('[data-fs]', m).forEach(function (b) { b.onclick = function () { flt.s = b.dataset.fs; pageAdv(m); }; });
    $('#advG').onchange = function () { flt.g = this.value; pageAdv(m); };
    $$('.adv-row', m).forEach(function (r) { r.onclick = function () { paramSheet(r.dataset.k, m); }; });
    $$('[data-cal]', m).forEach(function (r) { r.onclick = function () { calSheet(+r.dataset.cal, m); }; });
    $$('[data-doc]', m).forEach(function (r) { r.onclick = function () { docSheet(+r.dataset.doc, m); }; });
    $('#advDoc').onclick = function () { docSheet(-1, m); };
    $('#advSnap').onclick = function () { snapshot(); c.toast('Today\'s record saved'); pageAdv(m); };
    $('#advSet').onclick = function () { setSheet(m); };
    $('#advExp').onclick = function () { var wb = XLSX.utils.book_new(); exportSheets(wb); c.saveBytes('Sinter_Advisor_' + today() + '.xlsx', new Uint8Array(XLSX.write(wb, { type: 'array', bookType: 'xlsx' })), 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'); };
  }
  function snapshot() {
    var vals = {}, src = {}, at = today();
    allEval().forEach(function (o) { if (o.act && fin(o.v) && o.state !== 'invalid') { vals[o.k] = o.v; src[o.k] = o.act.src; } });
    A.hist = A.hist.filter(function (h) { return h.at !== at; }).concat([{ at: at, vals: vals, src: src, by: userName() }]).slice(-400);
    store();
  }
  function paramSheet(k, m) {
    var c = ctx(), esc = c.esc, f = c.f, p = PK[k], o = evaluate(k), cfg = cfgOf(k), a = cfg.approved, dr = cfg.draft || a || {};
    var body = '<div class="adv-sh">' + stChip(o.state) + '<p><b>' + (o.act ? f(o.v, p.d) + ' ' + esc(p.u) : 'No value') + '</b> · ' + esc(o.act ? o.act.srcL : '') + '</p>' + (o.note ? '<div class="note warn">' + esc(o.note) + '</div>' : '') +
      '<p class="small">Approved: ' + esc(limText(a, p.d)) + (a ? ' · effective ' + esc(a.eff || '–') + ' · approved by ' + esc(a.by || '–') + ' on ' + esc(a.at || '–') : '') + '</p>' +
      dq(k).map(function (q) { return '<div class="note ' + (q.cls === 'ok' ? '' : q.cls) + ' small">' + esc(q.t) + '</div>'; }).join('') + '</div>' +
      '<h3>Target and limits ' + (cfg.draft ? '(draft)' : '') + '</h3>' +
      '<div class="adv-grid">' + inputRow('cTg', 'Target value', dr.target, 'text', ' inputmode="decimal"') + inputRow('cUnit', 'Unit', dr.unit || p.u) +
      inputRow('cLo', 'Lower limit', dr.lo, 'text', ' inputmode="decimal"') + inputRow('cHi', 'Upper limit', dr.hi, 'text', ' inputmode="decimal"') +
      inputRow('cWlo', 'Warning below', dr.wlo, 'text', ' inputmode="decimal"') + inputRow('cWhi', 'Warning above', dr.whi, 'text', ' inputmode="decimal"') + '</div>' +
      inputRow('cBasis', 'Data basis', dr.basis || p.basis || '') + inputRow('cMeth', 'Test method', dr.method || p.method || '') +
      '<div class="adv-grid">' + inputRow('cEff', 'Effective date', dr.eff || today(), 'date') + selRow('cSev', 'Alert severity', optList(SEV, dr.sev || 'Minor')) +
      selRow('cFreq', 'Reporting frequency', optList(FREQ, dr.freq || 'Daily')) + inputRow('cBy', 'Approved by (name and role)', dr.by || '') + '</div>' +
      '<p class="muted small">Plausibility check: a value outside ' + esc(((cfg.pr || p.pr) || []).join(' to ')) + ' ' + esc(p.u) + ' is shown as an invalid measurement. ' + (isAdmin() ? '' : 'Only an admin login can approve targets; you can save a draft.') + '</p>' +
      '<h3>Enter a measurement</h3>' +
      (p.kind === 'list' ? inputRow('mList', 'Value for each windbox, comma separated (WB1, WB2, …)', A.meas[k] && A.meas[k].list ? A.meas[k].list.join(', ') : '') : inputRow('mV', p.kind === 'lab' ? 'Lab value (used when the Lab page has none)' : 'Measured value', A.meas[k] ? A.meas[k].v : '', 'text', ' inputmode="decimal"')) +
      '<div class="adv-grid">' + inputRow('mAt', 'Date', today(), 'date') + inputRow('mSrc', 'Source (instrument, lab, log sheet)', A.meas[k] ? A.meas[k].srcT : '') + '</div>' +
      '<label class="chk"><input type="checkbox" id="mInv"' + (A.meas[k] && A.meas[k].valid === false ? ' checked' : '') + '><span class="k">Mark this measurement invalid<small>For a faulty instrument, a bad sample or a suspect result</small></span></label>' + inputRow('mNote', 'Note', A.meas[k] ? A.meas[k].note : '');
    var btns = [{ l: 'Close', cls: 'ghost', fn: c.closeSheet }, { l: 'Save', fn: function () { saveParam(k, false); c.closeSheet(); pageAdv(m); } }];
    if (isAdmin()) btns.push({ l: 'Save & approve', cls: 'primary', fn: function () { if (!sv('cBy')) { c.toast('Enter who approved it'); return; } saveParam(k, true); c.closeSheet(); pageAdv(m); } });
    btns.push({ l: 'Troubleshoot', fn: function () { c.closeSheet(); A.sel = k; store(); c.go('rca'); } });
    c.openSheet(esc(label(k)), body, btns);
  }
  function saveParam(k, approve) {
    var cfg = A.cfg[k] = A.cfg[k] || {};
    var d = { target: nv('cTg'), lo: nv('cLo'), hi: nv('cHi'), wlo: nv('cWlo'), whi: nv('cWhi'), unit: sv('cUnit'), basis: sv('cBasis'), method: sv('cMeth'), eff: sv('cEff'), sev: sv('cSev'), freq: sv('cFreq'), by: sv('cBy') };
    var had = cfg.approved, changed = !had || ['target', 'lo', 'hi', 'wlo', 'whi', 'unit', 'basis', 'method', 'eff', 'sev', 'freq'].some(function (x) { return String(had[x] == null ? '' : had[x]) !== String(d[x] == null ? '' : d[x]); });
    var any = ['target', 'lo', 'hi', 'wlo', 'whi'].some(function (x) { return d[x] != null; });
    if (approve) { d.at = now(); d.admin = userName(); cfg.approved = d; delete cfg.draft; A.log.push({ at: d.at, k: k, what: 'approved', by: d.by, admin: d.admin, v: d }); }
    else if (changed && (any || cfg.draft)) { d.saved = now(); d.savedBy = userName(); cfg.draft = d; A.log.push({ at: d.saved, k: k, what: 'draft saved', by: d.savedBy }); }
    // measurement
    var p = PK[k], inv = $('#mInv') && $('#mInv').checked, at = sv('mAt') || today();
    if (p.kind === 'list') {
      var lst = sv('mList').split(/[,;\s]+/).map(ctx().num).filter(fin);
      if (lst.length || inv) A.meas[k] = { list: lst, at: at, srcT: sv('mSrc'), valid: !inv, note: sv('mNote') };
      if (lst.length) A.mhist[k] = (A.mhist[k] || []).concat([{ at: at, v: Math.max.apply(null, lst), valid: !inv }]).slice(-200);
    } else {
      var v = nv('mV'), old = A.meas[k];
      if (v != null && (!old || old.v !== v || old.at !== at)) A.mhist[k] = (A.mhist[k] || []).filter(function (x) { return x.at !== at; }).concat([{ at: at, v: v, valid: !inv }]).slice(-200);
      if (v != null || inv) A.meas[k] = { v: v, at: at, srcT: sv('mSrc'), valid: !inv, note: sv('mNote') };
      else if (old && sv('mV') === '') delete A.meas[k];
    }
    store();
  }
  function calSheet(i, m) {
    var c = ctx(), x = A.cal[i];
    c.openSheet(c.esc(x.name), inputRow('kLast', 'Last calibration date', x.last, 'date') + inputRow('kEvery', 'Calibration interval (days)', x.every, 'text', ' inputmode="numeric"') + inputRow('kNote', 'Certificate / note', x.note) +
      '<p class="muted small">Feeds: ' + x.params.map(function (k) { return PK[k] ? c.esc(PK[k].l) : k; }).join(', ') + '</p>',
      [{ l: 'Cancel', cls: 'ghost', fn: c.closeSheet }, { l: 'Save', cls: 'primary', fn: function () { x.last = sv('kLast'); x.every = nv('kEvery') || x.every; x.note = sv('kNote'); store(); c.closeSheet(); pageAdv(m); } }]);
  }
  function docSheet(i, m) {
    var c = ctx(), d = i >= 0 ? A.docs[i] : { id: '', title: '', type: 'SOP', rev: '', topics: [] };
    var topics = P.filter(function (p) { return p.k; }).map(function (p) { return p.k; }).concat(CAUSE_IDS());
    c.openSheet(i >= 0 ? 'Edit document' : 'Add document', inputRow('dId', 'Document number', d.id) + inputRow('dTitle', 'Title', d.title) + selRow('dType', 'Type', optList(['SOP', 'Laboratory procedure', 'Engineering document', 'Work instruction'], d.type)) + inputRow('dRev', 'Revision', d.rev) +
      '<label class="af"><span>Topics (parameters or causes it covers)</span><select id="dTop" class="sel" multiple size="8">' + topics.map(function (t) { return '<option value="' + t + '"' + ((d.topics || []).indexOf(t) >= 0 ? ' selected' : '') + '>' + c.esc(PK[t] ? PK[t].l : causeName(t)) + '</option>'; }).join('') + '</select></label>',
      [{ l: 'Cancel', cls: 'ghost', fn: c.closeSheet }].concat(i >= 0 ? [{ l: 'Remove', fn: function () { A.docs.splice(i, 1); store(); c.closeSheet(); pageAdv(m); } }] : []).concat([{ l: 'Save', cls: 'primary', fn: function () {
        var nd = { id: sv('dId'), title: sv('dTitle'), type: sv('dType'), rev: sv('dRev'), topics: $$('#dTop option').filter(function (o) { return o.selected; }).map(function (o) { return o.value; }) };
        if (!nd.id || !nd.title) { c.toast('Enter the number and title'); return; }
        if (i >= 0) A.docs[i] = nd; else A.docs.push(nd); store(); c.closeSheet(); pageAdv(m);
      } }]));
  }
  function setSheet(m) {
    var c = ctx(), st = c.state;
    c.openSheet('Advisor settings', selRow('sBhi', 'Higher-order basicity used by the plant', '<option value="b4"' + (A.set.bHi === 'b4' ? ' selected' : '') + '>B4 = (CaO+MgO)/(SiO₂+Al₂O₃)</option><option value="b3"' + (A.set.bHi === 'b3' ? ' selected' : '') + '>B3 = (CaO+MgO)/SiO₂</option>') +
      selRow('sBase', 'Compare root-cause evidence with', '<option value="prev"' + (A.set.base === 'prev' ? ' selected' : '') + '>Previous prediction (if any)</option><option value="normal"' + (A.set.base === 'normal' ? ' selected' : '') + '>Plant normal (plant average)</option>') +
      '<label class="chk"><input type="checkbox" id="sDpr"' + (A.set.dpr ? ' checked' : '') + '><span class="k">Include the DPR workbook days in trends</span></label>' +
      (isAdmin() ? '<div class="note">Copy the app\'s current quality targets into drafts, to review and approve one by one.</div><button class="btn small" id="sImp">Copy app targets into drafts</button>' : ''),
      [{ l: 'Close', cls: 'ghost', fn: c.closeSheet }, { l: 'Save', cls: 'primary', fn: function () { A.set.bHi = sv('sBhi'); A.set.base = sv('sBase'); A.set.dpr = $('#sDpr').checked; store(); c.closeSheet(); pageAdv(m); } }]);
    var b = $('#sImp'); if (b) b.onclick = function () {
      var n = 0;
      Object.keys(st.targets).forEach(function (k) { var t = st.targets[k]; if (!PK[k] || !t || A.cfg[k] && (A.cfg[k].approved || A.cfg[k].draft)) return; A.cfg[k] = { draft: { lo: t[0], hi: t[1], target: fin(t[0]) && fin(t[1]) ? +((t[0] + t[1]) / 2).toFixed(4) : null, unit: PK[k].u, method: PK[k].method || '', eff: today(), sev: 'Minor', freq: 'Daily', by: '', saved: now(), savedBy: userName() + ' (copied from app targets)' } }; n++; });
      store(); c.toast(n + ' drafts created'); c.closeSheet(); pageAdv(m);
    };
  }

  // ---------- PAGE 2: Root cause & troubleshooting ----------
  // input groups used to attribute a model change to a cause
  var GRP = {
    ore: { l: 'iron-ore blend', mats: [0, 1, 2, 16, 15, 5, 6] }, ms: { l: 'mill scale', mats: [3] }, bfrf: { l: 'return fines (BF and plant)', mats: [4, 17] },
    flux: { l: 'flux (limestone, dolomite, lime)', mats: [7, 8, 9, 10, 11] }, fuel: { l: 'fuel (coke, anthracite)', mats: [12, 13, 14] },
    coke3: { l: 'coke −3 mm fraction', keys: ['coke3'] }, moist: { l: 'mix moisture', keys: ['moist'] }, speed: { l: 'strand speed', keys: ['speed'] }, bed: { l: 'bed height', keys: ['bed'] },
    btp: { l: 'burn-through temperature', keys: ['btp'] }, suct: { l: 'suction and fan', keys: ['windP', 'idFan', 'windT'] }, ign: { l: 'ignition', keys: ['ign', 'bfg'] }, cacl2: { l: 'CaCl₂ spraying', keys: ['cacl2'] }, alk: { l: 'alkalis', keys: ['alk'] }
  };
  /* cause: id, l, why, groups (model attribution), ev (extra evidence functions), need (measurements that would confirm it), inspect, dept */
  var CAUSES = {
    blend: { l: 'Change in blend proportions (feeder set-points)', why: 'Every oxide in the sinter is a weighted sum of the materials fed, so a feeder change moves the chemistry within one cycle.', groups: ['ore', 'ms', 'bfrf', 'flux', 'fuel'], ev: ['weigher'], need: ['Feeder set-point and actual-rate log for the shift', 'Belt-weigher calibration record'], inspect: 'Compare feeder set-points with actual weigher rates for the period; check for bunker hang-ups or empty bins.', dept: 'Raw Material Handling' },
    rmAnalysis: { l: 'Raw-material analysis changed (new stock or stockpile segregation)', why: 'A new ore or flux lot with a different analysis shifts the sinter chemistry even at unchanged feed rates.', groups: [], ev: ['rmChange'], need: ['A second raw-material analysis to compare with', 'Receipt / stockpile records for new lots'], inspect: 'Sample the bunkers of the materials concerned and re-analyse; check stockpile records for new lots.', dept: 'Quality Control Lab' },
    labError: { l: 'Sampling or analysis error', why: 'A single result can be off because of sampling, sample preparation or analysis, without any change in the process.', groups: [], ev: ['closure', 'mbGap'], need: ['Repeat analysis of the retained sample', 'Lab control-sample result for the day'], inspect: 'Re-analyse the retained sample and check the control-sample result before changing the process.', dept: 'Quality Control Lab' },
    fuelRate: { l: 'Fuel rate change', why: 'Fuel sets the peak temperature and the reducing conditions, which drive FeO, melt formation and strength.', groups: ['fuel'], ev: ['rmFuel'], need: ['Coke breeze feed log', 'Coke fixed-carbon analysis'], inspect: 'Check coke breeze feeder rate and fixed-carbon analysis for the period.', dept: 'Sinter Operations' },
    cokeSize: { l: 'Coke breeze size (−3 mm fraction) change', why: 'Coarser coke burns slower and locally hotter; finer coke burns faster with a narrower flame front.', groups: ['coke3'], ev: [], need: ['Coke breeze sieve analysis', 'Crusher (rod mill) gap / wear record'], inspect: 'Sieve the coke breeze and check the crusher setting.', dept: 'Mechanical Maintenance' },
    basicity: { l: 'Basicity or flux change', why: 'Basicity controls the amount and type of melt (calcium ferrite vs silicate), which affects strength, FeO and reducibility.', groups: ['flux'], ev: [], need: ['Flux feeder log', 'Flux analysis'], inspect: 'Check limestone / dolomite feeder rates and analyses.', dept: 'Sinter Operations' },
    magnetite: { l: 'Mill scale / magnetite share change', why: 'Mill scale and magnetite carry FeO directly into the sinter and add heat when oxidised.', groups: ['ms'], ev: [], need: ['Mill scale feed log and FeO analysis'], inspect: 'Check mill scale feed and its FeO.', dept: 'Raw Material Handling' },
    granulation: { l: 'Granulation or moisture change', why: 'Moisture and fines decide granule size, bed permeability, flame-front speed and heat distribution.', groups: ['moist'], ev: ['perm', 'mixFines'], need: ['Mix moisture by oven method', 'Bed permeability (JPU)', 'Granule size distribution'], inspect: 'Check water addition at the mixing drum, moisture by oven method and granule size.', dept: 'Sinter Operations' },
    thermal: { l: 'Sintering time / burn-through not matched', why: 'Strand speed, bed height and BTP decide whether the bed is fully sintered before discharge.', groups: ['speed', 'bed', 'btp'], ev: ['btpPos'], need: ['BTP position (windbox)', 'Windbox temperature profile'], inspect: 'Check the windbox temperature profile and BTP position against strand speed.', dept: 'Sinter Operations' },
    suction: { l: 'Suction, fan or air in-leakage', why: 'Less air through the bed slows the flame front; air leakage raises exhaust O₂ without helping sintering.', groups: ['suct'], ev: ['leak', 'wb'], need: ['Windbox suction profile', 'Exhaust O₂', 'Pallet seal / grate inspection'], inspect: 'Inspect pallet seals, grate bars, dust valves and the main duct for leakage.', dept: 'Mechanical Maintenance' },
    ignition: { l: 'Ignition conditions', why: 'Poor ignition leaves a weak top layer that ends up as return fines.', groups: ['ign'], ev: [], need: ['Ignition hood temperature trend', 'Burner gas / air ratio'], inspect: 'Check ignition hood temperature, burner condition and gas/air ratio.', dept: 'Sinter Operations' },
    rdiChem: { l: 'Chemistry raising RDI (Al₂O₃, TiO₂, low FeO)', why: 'Low FeO and high Al₂O₃ favour secondary hematite, which degrades on low-temperature reduction.', groups: ['ore', 'fuel'], ev: [], need: ['Al₂O₃ and TiO₂ of the sinter'], inspect: 'Check sinter Al₂O₃, TiO₂ and FeO against their limits.', dept: 'Process Technology' },
    halide: { l: 'CaCl₂ spraying not applied', why: 'Halide spraying is a common way to lower RDI; switching it off raises RDI.', groups: ['cacl2'], ev: [], need: ['CaCl₂ spray log'], inspect: 'Check the CaCl₂ spray system and its log.', dept: 'Sinter Operations' },
    testing: { l: 'Test procedure or test equipment', why: 'Strength and reduction tests are sensitive to sample size, drum speed, furnace temperature and gas flow.', groups: [], ev: ['calTest'], need: ['Equipment calibration record', 'Duplicate test result'], inspect: 'Check the test equipment calibration and run a duplicate test.', dept: 'Quality Control Lab' },
    downtime: { l: 'Downtime, stoppages or reduced availability', why: 'Stops and restarts cut production and create unsintered material.', groups: [], ev: ['down'], need: ['Downtime log with reasons'], inspect: 'Review the shift downtime log.', dept: 'Mechanical Maintenance' },
    returnFines: { l: 'Return-fines balance', why: 'More return fines in the mix lower the net yield and change granulation and fuel demand.', groups: ['bfrf'], ev: [], need: ['Return-fines bin level and feed trend'], inspect: 'Check the return-fines bin level and the return-fines feeder rate.', dept: 'Sinter Operations' },
    instrument: { l: 'Instrument or measurement fault', why: 'An uncalibrated or faulty instrument can show a deviation that does not exist in the process.', groups: [], ev: ['calAny'], need: ['Instrument calibration check'], inspect: 'Check the instrument calibration and compare with a portable or redundant measurement.', dept: 'Instrumentation & Control' }
  };
  function CAUSE_IDS() { return Object.keys(CAUSES); }
  function causeName(id) { return CAUSES[id] ? CAUSES[id].l : id; }
  var FAM = {
    chem: ['blend', 'rmAnalysis', 'labError', 'instrument'],
    feo: ['fuelRate', 'cokeSize', 'basicity', 'magnetite', 'granulation', 'thermal', 'rmAnalysis', 'labError'],
    strength: ['fuelRate', 'basicity', 'granulation', 'thermal', 'ignition', 'cokeSize', 'suction', 'testing'],
    rdi: ['rdiChem', 'fuelRate', 'halide', 'basicity', 'testing'],
    ri: ['fuelRate', 'basicity', 'granulation', 'testing'],
    prod: ['thermal', 'granulation', 'suction', 'fuelRate', 'returnFines', 'downtime', 'instrument'],
    machine: ['granulation', 'suction', 'thermal', 'fuelRate', 'instrument'],
    gas: ['suction', 'fuelRate', 'instrument'],
    moist: ['granulation', 'rmAnalysis', 'instrument'],
    fuel: ['fuelRate', 'returnFines', 'thermal', 'instrument'],
    energy: ['suction', 'downtime', 'instrument']
  };
  function famOf(k) {
    if (/^rm|^(fe|sio2|al2o3|cao|mgo|p|s|b2|bHi)$/.test(k)) return 'chem';
    if (k === 'feo') return 'feo';
    if (/^(ti|mps|hd|p50|p40|p25|p10|p6|m6)$/.test(k)) return 'strength';
    if (k === 'rdi') return 'rdi'; if (k === 'ri') return 'ri';
    if (/^(prodDry|productivity|yield|retRec)$/.test(k)) return 'prod';
    if (/^(speed|bed|btp|btpPos|windP|wbSuct|wbTemp)$/.test(k)) return 'machine';
    if (/^eg/.test(k)) return 'gas';
    if (/^(moist|perm)$/.test(k)) return 'moist';
    if (k === 'fuel') return 'fuel';
    return 'energy';
  }
  // value of a parameter predicted by the model (or calculated) for a given input set; null if not model-linked
  function predictOf(k, inp) {
    var p = PK[k];
    if (p.kind === 'calc' && p.ox) return rawMix(inp)[p.ox];
    if (k === 'fuel') { var r = ctx().run(inp); return r.prod ? ((+inp.use[12] || 0) + (+inp.use[13] || 0)) * 1000 / r.prod : null; }
    if (k === 'productivity') { var r1 = ctx().run(inp); return inp.area ? r1.prod / inp.area / 24 : null; }
    if (p.kind === 'inp') return inp[p.ik];
    var mk = k === 'bHi' ? A.set.bHi : p.mk; if (!mk) return null;
    var r2 = ctx().run(inp); return fin(r2[mk]) ? r2[mk] : null;
  }
  function attribution(k) {
    var c = ctx(), st = c.state, base = A.set.base === 'prev' && st.prevInp ? E().clone(st.prevInp) : c.baseFor('normal'), cur = st.inp;
    var diffs = c.inputDiffs(base, cur), b0 = predictOf(k, base), out = [];
    if (!fin(b0)) return { base: base, list: [], b0: null, name: A.set.base === 'prev' && st.prevInp ? 'previous prediction' : 'plant normal' };
    diffs.forEach(function (d) { var x = c.applyOne(base, d, cur), v = predictOf(k, x); if (fin(v)) out.push({ d: d, eff: v - b0 }); });
    return { base: base, list: out, b0: b0, name: A.set.base === 'prev' && st.prevInp ? 'previous prediction' : 'plant normal' };
  }
  function E() { return ctx().E; }
  function inGroup(d, g) { var G = GRP[g]; if (G.mats) return d.id.indexOf('use.') === 0 && G.mats.indexOf(+d.id.split('.')[1]) >= 0; return G.keys.indexOf(d.id) >= 0; }
  // extra evidence: return {sup:[], con:[], miss:[]}
  function extra(id, k, o) {
    var c = ctx(), st = c.state, f = c.f, esc = c.esc, R = { sup: [], con: [], miss: [] };
    if (id === 'weigher') { var q = dq('rmFe').filter(function (x) { return /weigher/i.test(x.t); }); q.forEach(function (x) { if (x.cls === 'bad') R.sup.push(x.t + ': feed rates may not be what the records show.'); else if (x.cls === 'warn') R.miss.push(x.t); }); }
    if (id === 'rmChange') {
      var u = st.upChem;
      if (!u || !u.last || !u.avg2) { R.miss.push('Only one raw-material analysis is loaded, so a change in analysis cannot be checked.'); return R; }
      var ox = { fe: 'fe', sio2: 'sio2', al2o3: 'al2o3', cao: 'cao', mgo: 'mgo', b2: 'cao', bHi: 'cao', feo: 'fe', rmFe: 'fe', rmSiO2: 'sio2', rmAl2O3: 'al2o3', rmCaO: 'cao', rmMgO: 'mgo', rmB2: 'cao', moist: 'moist' }[k];
      if (!ox) return R;
      var hits = Object.keys(u.last).filter(function (mi) { var a = u.last[mi] && u.last[mi][ox], b = u.avg2[mi] && u.avg2[mi][ox]; return fin(a) && fin(b) && st.inp.use[mi] > 0 && Math.abs(a - b) > Math.max(0.15, Math.abs(b) * 0.03); });
      if (hits.length) hits.slice(0, 3).forEach(function (mi) { R.sup.push(esc(c.MAT[mi]) + ': latest ' + ox.toUpperCase() + ' ' + f(u.last[mi][ox], 2) + ' % against ' + f(u.avg2[mi][ox], 2) + ' % average of the last two analyses (measured).'); });
      else R.con.push('The latest raw-material analyses agree with the previous ones for ' + ox.toUpperCase() + '.');
    }
    if (id === 'closure' && o.act && o.act.src === 'lab') {
      var ch = c.analysisChecks(null, st.lab)[0];
      if (ch) { if (ch.cls === 'bad' || ch.cls === 'warn') R.sup.push('Sinter analysis adds up to ' + f(ch.sum, 1) + ' %, outside the normal range.'); else R.con.push('Sinter analysis adds up to ' + f(ch.sum, 1) + ' %, which is consistent.'); }
    }
    if (id === 'mbGap' && o.act && o.act.src === 'lab') {
      var mk = PK[k].mk, r = model(), rm = E().rmse(c.cal(), st.ref, st.inp.biasOn) || {};
      if (mk && fin(r[mk]) && fin(rm[mk]) && rm[mk] > 0) {
        var g = o.v - r[mk];
        if (Math.abs(g) > 2 * rm[mk]) R.sup.push('Lab differs from the mass balance of the recorded blend by ' + c.sgn(g, PK[k].d) + ', more than twice the model\'s usual error (±' + f(rm[mk], PK[k].d) + ').');
        else R.con.push('Lab agrees with the mass balance of the recorded blend within the model\'s usual error, so the blend records explain the result.');
      }
    }
    if (id === 'rmFuel') { var uf = st.upChem; if (!uf || !uf.avg2) R.miss.push('Coke fixed-carbon trend (only one fuel analysis loaded).'); }
    if (id === 'perm') { var pv = actual('perm'); if (!pv) R.miss.push('Bed permeability (JPU) is not recorded.'); else { var pe = evaluate('perm'); if (pe.state === 'out' || pe.state === 'warn') R.sup.push('Bed permeability ' + f(pv.v, 1) + ' JPU is ' + STL[pe.state][0].toLowerCase() + ' (measured).'); else if (pe.state === 'ok') R.con.push('Bed permeability ' + f(pv.v, 1) + ' JPU is within target.'); } }
    if (id === 'mixFines') { var r3 = model(); if (fin(r3.m1)) R.miss.push('Measured −1 mm fraction of the mix (the model uses ' + f(r3.m1, 1) + ' % from the raw-material sizes).'); }
    if (id === 'btpPos') { var bp = actual('btpPos'); if (!bp) R.miss.push('BTP position (windbox number) is not recorded.'); else { var be = evaluate('btpPos'); if (be.state === 'out' || be.state === 'warn') R.sup.push('BTP position at windbox ' + f(bp.v, 1) + ' is ' + STL[be.state][0].toLowerCase() + ' (measured).'); else if (be.state === 'ok') R.con.push('BTP position is within target.'); } }
    if (id === 'leak') { var o2 = actual('egO2'); if (!o2) R.miss.push('Exhaust O₂ is not recorded.'); else { var e2 = evaluate('egO2'); if (e2.state === 'out' || e2.state === 'warn') R.sup.push('Exhaust O₂ ' + f(o2.v, 1) + ' % is ' + STL[e2.state][0].toLowerCase() + ', which can point to air in-leakage (hypothesis).'); else if (e2.state === 'ok') R.con.push('Exhaust O₂ is within target.'); } }
    if (id === 'wb') { var w = actual('wbSuct'); if (!w) R.miss.push('Windbox suction profile is not recorded.'); }
    if (id === 'calTest') dq(k).forEach(function (x) { if (x.cls === 'bad') R.sup.push(x.t + '.'); else if (x.cls === 'warn') R.miss.push(x.t); else R.con.push(x.t + '.'); });
    if (id === 'calAny') dq(k).forEach(function (x) { if (x.cls === 'bad') R.sup.push(x.t + '.'); else if (x.cls === 'warn') R.miss.push(x.t); });
    if (id === 'down') { var dt = actual('downtime'); if (!dt) R.miss.push('Downtime is not recorded.'); else if (dt.v > 0.5) R.sup.push('Downtime ' + f(dt.v, 1) + ' h/day recorded.'); else R.con.push('Downtime ' + f(dt.v, 1) + ' h/day only.'); }
    return R;
  }
  var CONF = ['high', 'medium', 'low', 'insufficient'];
  function diagnose(k) {
    var c = ctx(), f = c.f, sgn = c.sgn, esc = c.esc, o = evaluate(k), p = PK[k], fam = famOf(k), at = attribution(k);
    var dev = o.dev != null ? o.dev : (o.a && o.act ? (fin(o.a.hi) && o.v > o.a.hi ? o.v - o.a.hi : fin(o.a.lo) && o.v < o.a.lo ? o.v - o.a.lo : null) : null);
    var mdl = at.b0 != null ? predictOf(k, c.state.inp) - at.b0 : null;
    var list = FAM[fam].map(function (id) {
      var C0 = CAUSES[id], sup = [], con = [], miss = [], share = 0, eff = 0;
      if (C0.groups.length && at.b0 != null) {
        var items = at.list.filter(function (x) { return C0.groups.some(function (g) { return inGroup(x.d, g); }); });
        eff = items.reduce(function (a, x) { return a + x.eff; }, 0);
        if (!items.length) con.push('No change recorded in ' + C0.groups.map(function (g) { return GRP[g].l; }).join(' / ') + ' compared with the ' + at.name + '.');
        else {
          var desc = items.sort(function (a, b) { return Math.abs(b.eff) - Math.abs(a.eff); }).slice(0, 3).map(function (x) { return esc(x.d.l) + ' ' + (x.d.yn ? x.d.a + ' → ' + x.d.b : f(x.d.a, x.d.d || 1) + ' → ' + f(x.d.b, x.d.d || 1) + ' ' + esc(x.d.u || '')); }).join('; ');
          if (dev != null && dev !== 0) {
            share = eff / dev;
            var tx = 'Recorded change since the ' + at.name + ': ' + desc + '. The model associates it with ' + sgn(eff, p.d) + ' ' + esc(p.u) + ' (' + f(Math.abs(share) * 100, 0) + ' % of the deviation, ' + (share > 0 ? 'same direction' : 'opposite direction') + '). Model association, not proof.';
            if (share >= 0.25) sup.push(tx); else if (share <= -0.25) con.push(tx); else con.push('Recorded change (' + desc + ') is too small in the model to explain the deviation.');
          } else sup.push('Recorded change since the ' + at.name + ': ' + desc + ' (model effect ' + sgn(eff, p.d) + ' ' + esc(p.u) + ').');
        }
      } else if (C0.groups.length) miss.push('This parameter is not covered by the prediction model, so feed changes cannot be weighed.');
      C0.ev.forEach(function (e) { var R = extra(e, k, o); sup = sup.concat(R.sup); con = con.concat(R.con); miss = miss.concat(R.miss); });
      C0.need.forEach(function (n) { if (miss.indexOf(n) < 0) miss.push(n); });
      var s = sup.length, cn = con.length, conf;
      if (!o.act || o.state === 'invalid' || o.state === 'missing') conf = 'insufficient';
      else if (s >= 2 && cn === 0) conf = 'high';
      else if (s >= 1 && cn <= s - 1) conf = 'medium';
      else if (s >= 1) conf = 'low';
      else conf = cn ? 'low' : 'insufficient';
      if ((o.state === 'pending' || o.state === 'model') && conf === 'high') conf = 'medium';
      if (dq(k).some(function (q) { return q.cls === 'bad'; }) && conf === 'high' && id !== 'instrument') conf = 'medium';
      var docs = A.docs.filter(function (d) { return (d.topics || []).indexOf(id) >= 0 || (d.topics || []).indexOf(k) >= 0; });
      return { id: id, c: C0, sup: sup, con: con, miss: miss, conf: conf, share: share, eff: eff, docs: docs, score: CONF.indexOf(conf) * 10 - Math.max(-1, Math.min(2, share)) - s * 0.5 + cn * 0.5 };
    }).sort(function (a, b) { return a.score - b.score; });
    return { o: o, dev: dev, at: at, mdl: mdl, list: list };
  }
  function pageRca(m) {
    var c = ctx(), esc = c.esc, f = c.f, ev = allEval();
    var off = ev.filter(function (o) { return ['out', 'warn', 'invalid'].indexOf(o.state) >= 0 || (['pending', 'model'].indexOf(o.state) >= 0 && ['out', 'warn'].indexOf(o.lim) >= 0); });
    var sel = A.sel && PK[A.sel] ? A.sel : off.length ? off[0].k : 'feo';
    var h = tabs('rca') + '<div class="card hero"><h2>Root cause advisor</h2><p class="sub">Looks at the records already in the app for one parameter and ranks possible contributing factors. Every factor is a hypothesis: two things changing together is an association, not a confirmed cause. Confirm by inspection or measurement before acting.</p></div>' +
      '<div class="card"><label class="af"><span>Parameter to examine</span><select id="rcaSel" class="sel">' + (off.length ? '<optgroup label="Off target or invalid">' + off.map(function (o) { return '<option value="' + o.k + '"' + (o.k === sel ? ' selected' : '') + '>' + esc(label(o.k)) + ' · ' + STL[o.state][0] + '</option>'; }).join('') + '</optgroup>' : '') +
      '<optgroup label="All parameters">' + ev.map(function (o) { return '<option value="' + o.k + '"' + (o.k === sel && !off.some(function (x) { return x.k === sel; }) ? ' selected' : '') + '>' + esc(label(o.k)) + '</option>'; }).join('') + '</optgroup></select></label></div><div id="rcaOut"></div>';
    m.innerHTML = h;
    $('#rcaSel').onchange = function () { A.sel = this.value; store(); renderRca(this.value); };
    renderRca(sel);
  }
  function renderRca(k) {
    var c = ctx(), esc = c.esc, f = c.f, sgn = c.sgn, st = c.state, p = PK[k], D = diagnose(k), o = D.o, d = p.d, tr = trend(k), tt = trendText(tr, d);
    var sec = function (n, t, body) { return '<div class="rca-s"><div class="rca-n">' + n + '</div><div class="rca-b"><b>' + t + '</b><div class="small">' + body + '</div></div></div>'; };
    var na = '<span class="muted">Not recorded</span>';
    var fam = famOf(k), oxk = { fe: 'fe', sio2: 'sio2', al2o3: 'al2o3', cao: 'cao', mgo: 'mgo', b2: 'cao', bHi: 'cao', rmFe: 'fe', rmSiO2: 'sio2', rmAl2O3: 'al2o3', rmCaO: 'cao', rmMgO: 'mgo', rmB2: 'cao', feo: 'feo', p: 'p', s: 's' }[k];
    var rmTxt = oxk ? c.ORD.filter(function (i) { return st.inp.use[i] > 0 && fin((st.chem[oxk] || [])[i]); }).map(function (i) { var dry = st.inp.use[i] * (1 - (st.chem.moist[i] || 0) / 100); return { i: i, v: st.chem[oxk][i], w: dry * st.chem[oxk][i] }; }).sort(function (a, b) { return b.w - a.w; }).slice(0, 5).map(function (x) { return esc(c.MAT[x.i]) + ' ' + f(x.v, 2) + ' %'; }).join('; ') + ' (largest contributors of ' + oxk.toUpperCase() + ')' : 'Not directly linked to raw-material chemistry.';
    var blendTxt = D.at.list.filter(function (x) { return x.d.id.indexOf('use.') === 0; }).slice(0, 6).map(function (x) { return esc(x.d.l) + ' ' + f(x.d.a, 1) + ' → ' + f(x.d.b, 1); }).join('; ');
    var mach = function (keys) { return keys.map(function (q) { var a = actual(q); return esc(PK[q].l) + ' ' + (a ? f(a.v, PK[q].d) + ' ' + esc(PK[q].u) : '–'); }).join(' · '); };
    var labTxt = c.LAB.filter(function (x) { return fin(st.lab[x.k]); }).map(function (x) { return x.l + ' ' + f(st.lab[x.k], x.d); }).join(' · ');
    var dqs = dq(k), cl = c.analysisChecks(null, st.lab)[0];
    var missAll = []; D.list.forEach(function (x) { x.miss.forEach(function (mm) { if (missAll.indexOf(mm) < 0) missAll.push(mm); }); });
    var h = '<div class="card"><h2>' + esc(label(k)) + '</h2><div class="row wrap" style="gap:8px;margin-bottom:6px">' + stChip(o.state) + '</div>' +
      sec(1, 'Actual result', o.act ? '<b>' + f(o.v, d) + ' ' + esc(p.u) + '</b> · ' + esc(o.act.srcL) + (o.act.at ? ' · ' + esc(o.act.at) : '') + (o.note ? '<br>' + esc(o.note) : '') : na) +
      sec(2, 'Plant-approved target and limits', esc(limText(o.a, d)) + (o.a ? ' · effective ' + esc(o.a.eff || '–') + ' · approved by ' + esc(o.a.by || '–') + (o.a.method ? ' · method ' + esc(o.a.method) : '') : ' · set one on the Target vs actual page')) +
      sec(3, 'Deviation', o.dev != null ? devText(o) + (o.dev > 0 ? ' above' : o.dev < 0 ? ' below' : ' on') + ' target' : D.dev != null ? sgn(D.dev, d) + ' beyond the nearest limit' : 'Cannot be calculated without an approved target.') +
      sec(4, 'Recent trend', spark(tr, o.a) + ' ' + esc(tt.t) + (tr.some(function (x) { return x.illus; }) ? ' <span class="illus">ILLUSTRATIVE</span> includes DPR workbook days (hollow dots).' : '')) +
      sec(5, 'Related raw-material chemistry', rmTxt) +
      sec(6, 'Blend recipe and feeder records', (blendTxt ? 'Changes since the ' + esc(D.at.name) + ' (MT/day): ' + blendTxt : 'No feed change against the ' + esc(D.at.name) + '.') + ' · Total wet charge ' + f(st.inp.use.reduce(function (a, b) { return a + (+b || 0); }, 0), 0) + ' MT/day') +
      sec(7, 'Granulation and moisture', mach(['moist', 'perm']) + ' · coke −3 mm ' + f(st.inp.coke3, 1) + ' %') +
      sec(8, 'Machine and windbox', mach(['windP', 'egT']) + (actual('wbSuct') ? ' · windbox suction ' + actual('wbSuct').list.map(function (x) { return f(x, 1); }).join(', ') : ' · windbox suction not recorded') + (actual('wbTemp') ? ' · windbox temperature ' + actual('wbTemp').list.map(function (x) { return f(x, 0); }).join(', ') : ' · windbox temperature not recorded')) +
      sec(9, 'BTP and strand speed', mach(['speed', 'bed', 'btp', 'btpPos']) + (function () { var t1 = trend('speed'); return t1.length > 2 ? '<br>' + spark(t1, appr('speed')) + ' strand speed history' : ''; })()) +
      sec(10, 'Product laboratory results', labTxt ? esc(labTxt) : 'No lab result entered (Inputs → Lab results).') +
      sec(11, 'Instrument calibration and data quality', (dqs.length ? dqs.map(function (q) { return '<span class="chip ' + (q.cls === 'ok' ? 'ok' : q.cls === 'bad' ? 'bad' : 'warn') + '">' + (q.cls === 'ok' ? 'OK' : q.cls === 'bad' ? 'OVERDUE' : 'UNKNOWN') + '</span> ' + esc(q.t); }).join('<br>') : 'No instrument linked.') + (cl && fam === 'chem' ? '<br>' + esc(cl.who) + ': ' + cl.text : '')) +
      sec(12, 'Measurements still needed', missAll.length ? '<ul>' + missAll.slice(0, 10).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' : 'None identified.') + '</div>';
    if (!o.act || o.state === 'missing' || o.state === 'invalid') h += '<div class="note warn">There is no valid value for this parameter, so no cause can be ranked yet. Record a valid measurement first (tap the parameter on the Target vs actual page), then come back.</div>';
    else if (!o.a) h += '<div class="note">No approved target yet: factors below are ranked against the ' + esc(D.at.name) + ', not against a target.</div>';
    h += '<div class="card"><h2>Possible contributing factors</h2><p class="sub">Ranked by the measured evidence for and against each one. "High" still means a hypothesis to confirm.</p>' +
      D.list.map(function (x, i) {
        return '<details class="cause conf-' + x.conf + '"' + (i < 2 ? ' open' : '') + '><summary><span class="cr">' + (i + 1) + '</span><b>' + esc(x.c.l) + '</b><span class="conf">' + (x.conf === 'insufficient' ? 'insufficient evidence' : x.conf + ' confidence') + '</span></summary>' +
          '<p class="small"><span class="pill">Hypothesis</span> ' + esc(x.c.why) + '</p>' +
          '<h4>Supporting measured evidence</h4>' + (x.sup.length ? '<ul>' + x.sup.map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ul>' : '<p class="muted small">None found.</p>') +
          '<h4>Contradicting evidence</h4>' + (x.con.length ? '<ul>' + x.con.map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ul>' : '<p class="muted small">None found.</p>') +
          '<h4>Missing evidence</h4>' + (x.miss.length ? '<ul>' + x.miss.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul>' : '<p class="muted small">None.</p>') +
          '<h4>Recommended inspection or measurement</h4><p class="small">' + esc(x.c.inspect) + '</p>' +
          '<h4>Suggested responsible department</h4><p class="small">' + esc(x.c.dept) + '</p>' +
          '<h4>Internal documents</h4><p class="small">' + (x.docs.length ? x.docs.map(function (dd) { return esc(dd.id + ' ' + dd.title + (dd.rev ? ' rev ' + dd.rev : '')); }).join('; ') : 'No SOP or procedure registered for this topic (add one on the Target vs actual page).') + '</p></details>';
      }).join('') + '</div>' +
      '<div class="row"><button class="btn ghost" data-go="adv">← Target vs actual</button><span class="spacer"></span><button class="btn primary" id="rcaPlan">Plan recovery →</button></div>';
    $('#rcaOut').innerHTML = h;
    $('#rcaPlan').onclick = function () { A.sel = k; store(); c.go('plan'); };
  }

  // ---------- PAGE 3: Target recovery and action planner ----------
  var AF = [ // action fields (basic structure; to be extended with the full specification)
    ['title', 'Action'], ['type', 'Type'], ['cause', 'Linked possible cause'], ['basis', 'Basis / evidence'], ['expected', 'Expected effect'],
    ['dept', 'Responsible department'], ['owner', 'Responsible person'], ['priority', 'Priority'], ['due', 'Target date'],
    ['approval', 'Approval needed'], ['approvedBy', 'Approved by'], ['verify', 'Verification measurement'], ['criterion', 'Success criterion'],
    ['risk', 'Risks and side effects'], ['status', 'Status'], ['result', 'Verified result']
  ];
  var TYPES = ['Verification / inspection', 'Measurement', 'Calibration', 'Set-point change (needs approval)', 'Maintenance', 'Procedure / training'];
  var STAT = ['Proposed', 'Approved', 'In progress', 'Done – verified', 'Done – not effective', 'Rejected'];
  function planFor(k) { var pl = A.plans.filter(function (x) { return x.k === k && !x.closed; })[0]; return pl; }
  function proposals(k) {
    var c = ctx(), f = c.f, D = diagnose(k), o = D.o, p = PK[k], a = o.a, out = [], sev = a && a.sev || 'Minor';
    var pri = o.state === 'out' ? (sev === 'Critical' || sev === 'Major' ? 'High' : 'Medium') : 'Low';
    var crit = a ? 'Back within ' + limText(a, p.d) + ' on two consecutive results' : 'Defined once a target is approved';
    if (o.state === 'invalid' || o.state === 'missing') out.push({ title: 'Obtain a valid ' + label(k) + ' measurement', type: 'Measurement', cause: '', basis: o.state === 'invalid' ? 'Current value marked invalid or implausible' : 'No value recorded', expected: 'Makes a diagnosis possible', dept: /lab|^(fe|feo|sio2|al2o3|cao|mgo|p|s|b2|bHi|ti|rdi|ri)$/.test(p.kind + k) ? 'Quality Control Lab' : 'Instrumentation & Control', priority: 'High', verify: label(k), criterion: 'Valid value recorded', approval: 'No' });
    dq(k).filter(function (q) { return q.cls !== 'ok'; }).forEach(function (q) { out.push({ title: 'Calibrate / verify: ' + q.t.split(':')[0], type: 'Calibration', cause: 'Instrument or measurement fault', basis: q.t, expected: 'Confirms the measurement can be trusted', dept: 'Instrumentation & Control', priority: q.cls === 'bad' ? 'High' : 'Medium', verify: 'Calibration certificate', criterion: 'Within instrument tolerance', approval: 'No' }); });
    D.list.filter(function (x) { return x.conf !== 'insufficient' || x.miss.length; }).slice(0, 4).forEach(function (x) {
      out.push({ title: x.c.inspect, type: 'Verification / inspection', cause: x.c.l, basis: (x.sup[0] || x.miss[0] || '').replace(/<[^>]+>/g, ''), expected: 'Confirms or rules out this cause (' + x.conf + ' confidence now)', dept: x.c.dept, priority: x.conf === 'high' || x.conf === 'medium' ? pri : 'Low', verify: x.c.need.join('; '), criterion: 'Cause confirmed or ruled out with measured data', approval: 'No' });
    });
    // candidate set-point change from the model, only for a measured off-target value
    var solv = { b2: 'b2', mgo: 'mgo', feo: 'feo', fe: 'fe', sio2: 'sio2' }[k];
    if (solv && a && fin(a.target) && o.act && o.act.src === 'lab' && (o.state === 'out' || o.state === 'warn')) {
      var rc = c.RC.filter(function (t) { return t.k === solv; })[0], res = c.solveRecipe(c.state.inp, [{ k: solv, v: a.target, mat: rc.mat }]);
      var dm = res.x.use[rc.mat] - c.state.inp.use[rc.mat];
      if (res.ok && Math.abs(dm) > 0.5) out.push({ title: 'Candidate: change ' + c.MAT[rc.mat] + ' by ' + c.sgn(dm, 1) + ' MT/day', type: 'Set-point change (needs approval)', cause: 'Model estimate', basis: 'Model estimate from the backward raw-mix calculation (Target recipe page); not verified on the plant', expected: label(k) + ' to about ' + f(a.target, p.d) + ' ' + p.u + ' (model estimate)', dept: 'Process Technology', priority: pri, verify: label(k) + ' lab result after one full cycle', criterion: crit, risk: 'Side effects on other parameters: check the Target recipe page before approving', approval: 'Yes – process engineer / shift in-charge' });
    }
    return out.map(function (x, i) { x.id = Date.now() + '_' + i; x.status = 'Proposed'; x.owner = x.owner || ''; x.due = x.due || ''; x.approvedBy = ''; x.result = ''; x.risk = x.risk || ''; return x; });
  }
  function pageP(m) {
    var c = ctx(), esc = c.esc, f = c.f, ev = allEval(), k = A.sel && PK[A.sel] ? A.sel : (ev.filter(function (o) { return o.state === 'out'; })[0] || { k: 'feo' }).k, o = evaluate(k), pl = planFor(k);
    var h = tabs('plan') + '<div class="card hero"><h2>Target recovery plan</h2><p class="sub">A structured plan for one off-target parameter: verify first, then correct. Set-point changes are model estimates and need approval before they are applied.</p></div>' +
      '<div class="card"><label class="af"><span>Parameter</span><select id="plSel" class="sel">' + ev.map(function (x) { return '<option value="' + x.k + '"' + (x.k === k ? ' selected' : '') + '>' + esc(label(x.k)) + ' · ' + STL[x.state][0] + '</option>'; }).join('') + '</select></label>' +
      '<p class="small">' + stChip(o.state) + ' ' + (o.act ? f(o.v, o.p.d) + ' ' + esc(o.p.u) : 'no value') + ' · ' + esc(limText(o.a, o.p.d)) + (o.dev != null ? ' · deviation ' + devText(o) : '') + '</p>' +
      (pl ? '<p class="muted small">Plan opened ' + esc(pl.at) + ' by ' + esc(pl.by) + ' · ' + pl.actions.length + ' actions</p>' : '<button class="btn primary" id="plNew">Create recovery plan</button>') + '</div>';
    if (pl) {
      h += pl.actions.map(function (x, i) {
        return '<div class="card act s-' + x.status.split(' ')[0].toLowerCase() + '" data-ai="' + i + '"><div class="row"><span class="pill">' + esc(x.type) + '</span><span class="spacer"></span><span class="chip ' + (/verified|Approved/.test(x.status) ? 'ok' : /not effective|Rejected/.test(x.status) ? 'bad' : 'na') + '">' + esc(x.status) + '</span></div>' +
          '<h3 style="margin:8px 0 4px;color:var(--ink)">' + esc(x.title) + '</h3><p class="small muted" style="margin:0">' + esc(x.dept) + (x.owner ? ' · ' + esc(x.owner) : '') + ' · priority ' + esc(x.priority) + (x.due ? ' · due ' + esc(x.due) : '') + '</p>' +
          (x.basis ? '<p class="small" style="margin:6px 0 0">' + esc(x.basis) + '</p>' : '') + '</div>';
      }).join('') +
        '<div class="row wrap"><button class="btn" id="plAdd">Add action</button><button class="btn ghost" id="plExp">Export plan (.xlsx)</button><span class="spacer"></span><button class="btn ghost" id="plClose">Close plan</button></div>' +
        '<div class="note small">The rest of the action-plan fields from your specification will be added when it arrives; for now each action records ' + AF.map(function (x) { return x[1].toLowerCase(); }).join(', ') + '.</div>';
    }
    var closed = A.plans.filter(function (x) { return x.closed; }).slice(-5).reverse();
    if (closed.length) h += '<div class="card"><h2>Closed plans (continuous improvement)</h2>' + closed.map(function (x) { var done = x.actions.filter(function (a) { return /^Done/.test(a.status); }).length, eff = x.actions.filter(function (a) { return a.status === 'Done – verified'; }).length; return '<div class="chk"><span class="k">' + esc(label(x.k)) + ' · ' + esc(x.at) + ' → ' + esc(x.closed) + '<small>' + done + ' of ' + x.actions.length + ' actions done, ' + eff + ' verified effective' + (x.outcome ? ' · outcome: ' + esc(x.outcome) : '') + '</small></span></div>'; }).join('') + '</div>';
    h += '<div class="row"><button class="btn ghost" data-go="rca">← Root cause</button></div>';
    m.innerHTML = h;
    $('#plSel').onchange = function () { A.sel = this.value; store(); pageP(m); };
    if ($('#plNew')) $('#plNew').onclick = function () { A.plans.push({ id: Date.now(), k: k, at: now(), by: userName(), v: o.v, state: o.state, actions: proposals(k) }); store(); pageP(m); };
    if (pl) {
      $$('[data-ai]', m).forEach(function (el) { el.onclick = function () { actSheet(pl, +el.dataset.ai, m); }; });
      $('#plAdd').onclick = function () { pl.actions.push({ id: Date.now() + '', title: '', type: TYPES[0], status: 'Proposed', priority: 'Medium', approval: 'No' }); store(); actSheet(pl, pl.actions.length - 1, m); };
      $('#plExp').onclick = function () { var wb = XLSX.utils.book_new(); planSheet(wb, pl); c.saveBytes('Recovery_plan_' + k + '_' + today() + '.xlsx', new Uint8Array(XLSX.write(wb, { type: 'array', bookType: 'xlsx' })), 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'); };
      $('#plClose').onclick = function () {
        var e = evaluate(k);
        c.openSheet('Close plan', '<p class="sub">Now: ' + stChip(e.state) + ' ' + (e.act ? f(e.v, e.p.d) + ' ' + esc(e.p.u) : 'no value') + '</p>' + inputRow('pOut', 'Outcome and lessons learned', ''),
          [{ l: 'Cancel', cls: 'ghost', fn: c.closeSheet }, { l: 'Close plan', cls: 'primary', fn: function () { pl.closed = now(); pl.outcome = sv('pOut'); pl.endV = e.v; pl.endState = e.state; store(); c.closeSheet(); pageP(m); } }]);
      };
    }
  }
  function actSheet(pl, i, m) {
    var c = ctx(), x = pl.actions[i], isSet = /Set-point/.test(x.type);
    var body = inputRow('aTitle', 'Action', x.title) + selRow('aType', 'Type', optList(TYPES, x.type)) + inputRow('aCause', 'Linked possible cause', x.cause) + inputRow('aBasis', 'Basis / evidence', x.basis) + inputRow('aExp', 'Expected effect', x.expected) +
      '<div class="adv-grid">' + selRow('aDept', 'Responsible department', optList(DEPT, x.dept)) + inputRow('aOwner', 'Responsible person', x.owner) + selRow('aPri', 'Priority', optList(['High', 'Medium', 'Low'], x.priority)) + inputRow('aDue', 'Target date', x.due, 'date') + '</div>' +
      inputRow('aVer', 'Verification measurement', x.verify) + inputRow('aCrit', 'Success criterion', x.criterion) + inputRow('aRisk', 'Risks and side effects', x.risk) +
      '<div class="adv-grid">' + selRow('aStat', 'Status', optList(STAT, x.status)) + inputRow('aRes', 'Verified result', x.result) + '</div>' +
      (isSet ? '<div class="note warn small">Set-point change: needs approval by an authorised person before it is applied.' + (x.approvedBy ? ' Approved by ' + c.esc(x.approvedBy) + ' on ' + c.esc(x.approvedAt || '') + '.' : '') + '</div>' + (isAdmin() ? inputRow('aAppr', 'Approved by (name and role)', x.approvedBy) : '') : '');
    c.openSheet('Action', body, [{ l: 'Remove', cls: 'ghost', fn: function () { pl.actions.splice(i, 1); store(); c.closeSheet(); pageP(m); } }, { l: 'Save', cls: 'primary', fn: function () {
      var st = sv('aStat');
      if (/Set-point/.test(sv('aType')) && /Approved|In progress|Done/.test(st) && !(x.approvedBy || sv('aAppr'))) { c.toast('A set-point change needs an approval first'); return; }
      Object.assign(x, { title: sv('aTitle'), type: sv('aType'), cause: sv('aCause'), basis: sv('aBasis'), expected: sv('aExp'), dept: sv('aDept'), owner: sv('aOwner'), priority: sv('aPri'), due: sv('aDue'), verify: sv('aVer'), criterion: sv('aCrit'), risk: sv('aRisk'), status: st, result: sv('aRes') });
      if ($('#aAppr') && sv('aAppr') && sv('aAppr') !== x.approvedBy) { x.approvedBy = sv('aAppr'); x.approvedAt = now(); }
      x.edited = now(); x.editedBy = userName(); store(); c.closeSheet(); pageP(m);
    } }]);
  }

  // ---------- export ----------
  function planSheet(wb, pl) {
    var rows = [['RECOVERY PLAN', label(pl.k)], ['Opened', pl.at, 'by', pl.by], ['Value at start', pl.v, pl.state], [], AF.map(function (x) { return x[1]; })]
      .concat(pl.actions.map(function (x) { return AF.map(function (fd) { return x[fd[0]] == null ? '' : x[fd[0]]; }); }));
    XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(rows), ('Plan_' + pl.k).slice(0, 31));
  }
  function exportSheets(wb) {
    if (!ctx()) return;
    var ev = allEval(), rows = [['TARGET VS ACTUAL', today()], ['Group', 'Parameter', 'Actual', 'Unit', 'Source', 'Status', 'Target', 'Lower limit', 'Upper limit', 'Deviation', 'Deviation %', 'Basis', 'Test method', 'Effective', 'Approved by', 'Severity', 'Frequency']];
    if (ctx().isDemo()) rows.splice(1, 0, ['ILLUSTRATIVE: calculated and model values use built-in demo data']);
    ev.forEach(function (o) { var a = o.a || {}; rows.push([group(o.k), label(o.k), o.act ? +(+o.v).toFixed(4) : '', a.unit || o.p.u, o.act ? o.act.srcL : '', STL[o.state][0], fin(a.target) ? a.target : '', fin(a.lo) ? a.lo : '', fin(a.hi) ? a.hi : '', o.dev != null ? +o.dev.toFixed(4) : '', o.pct != null ? +o.pct.toFixed(2) : (o.pctNote || ''), a.basis || o.p.basis || '', a.method || o.p.method || '', a.eff || '', a.by || '', a.sev || '', a.freq || '']); });
    XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(rows), 'Target_vs_Actual');
    var cal = [['INSTRUMENT CALIBRATION'], ['Instrument', 'Last calibration', 'Interval (days)', 'Note']].concat(A.cal.map(function (x) { return [x.name, x.last, x.every, x.note]; }));
    XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(cal), 'Calibration');
    A.plans.filter(function (x) { return !x.closed; }).slice(0, 5).forEach(function (pl) { planSheet(wb, pl); });
  }

  var PAGESX = { adv: pageAdv, rca: pageRca, plan: pageP };
  window.SinterAdvisor = {
    has: function (id) { return !!PAGESX[id]; },
    page: function (id, m) { if (!A) A = load(); PAGESX[id](m); },
    exportSheets: function (wb) { if (!A) A = load(); exportSheets(wb); },
    _data: function () { if (!A) A = load(); return A; }, _eval: function (k) { if (!A) A = load(); return k ? evaluate(k) : allEval(); }, _diag: function (k) { if (!A) A = load(); return diagnose(k); }
  };
})();
