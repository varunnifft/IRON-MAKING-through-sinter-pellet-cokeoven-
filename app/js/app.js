/* Sinter Predict - app shell, pages and interactions */
(function () {
  'use strict';
  var SD = window.SD, E = window.SinterEngine, PR = window.SinterParse;
  var STORE = 'sinterpredict.v1';

  // ---------- definitions ----------
  var MAT = SD.mats, ORD = SD.matOrder || MAT.map(function (_, i) { return i; });
  function omap(fn) { return ORD.map(function (i) { return fn(MAT[i], i); }); }
  var MACH = [
    { k: 'speed', l: 'Machine (pallet) speed', u: 'm/min', d: 2 },
    { k: 'ign', l: 'Ignition furnace temperature', u: '°C', d: 0 },
    { k: 'windP', l: 'Wind main pressure (suction)', u: 'kPa', d: 2 },
    { k: 'windT', l: 'Wind main temperature', u: '°C', d: 0 },
    { k: 'idFan', l: 'ID fan speed', u: 'rpm', d: 0 },
    { k: 'btp', l: 'Burn-through temperature (BTP)', u: '°C', d: 0 },
    { k: 'bfg', l: 'BF gas flow to ignition', u: 'Nm³/h', d: 0 }
  ];
  var PROC = [
    { k: 'bed', l: 'Sinter bed height', u: 'mm', d: 0 },
    { k: 'moist', l: 'Granulated mix moisture', u: '%', d: 2 },
    { k: 'coke3', l: 'Coke breeze -3 mm fraction', u: '%', d: 1 },
    { k: 'alk', l: 'Sinter alkali Na₂O+K₂O', u: '%', d: 3 },
    { k: 'area', l: 'Strand (suction) area', u: 'm²', d: 0 },
    { k: 'cacl2', l: 'CaCl₂ (halide) spraying', type: 'yn' },
    { k: 'basis', l: 'Production basis', type: 'sel', opts: [['Charge', 'Charge (mass balance)'], ['Machine', 'Machine (speed × bed)']] },
    { k: 'prodOverride', l: 'Production override (optional)', u: 'MT/day', d: 0, opt: true },
    { k: 'biasOn', l: 'Apply chemistry correction', type: 'yn' }
  ];
  var LAB = [
    { k: 'fe', l: 'Fe(T)', u: '%', d: 2 }, { k: 'feo', l: 'FeO', u: '%', d: 2 }, { k: 'sio2', l: 'SiO₂', u: '%', d: 2 },
    { k: 'al2o3', l: 'Al₂O₃', u: '%', d: 2 }, { k: 'cao', l: 'CaO', u: '%', d: 2 }, { k: 'mgo', l: 'MgO', u: '%', d: 2 },
    { k: 'mno', l: 'MnO', u: '%', d: 3 }, { k: 'b2', l: 'Basicity B2 (CaO/SiO₂)', u: '-', d: 2 },
    { k: 'ti', l: 'Tumbler index TI (+6.3 mm)', u: '%', d: 1 }, { k: 'rdi', l: 'RDI (-3.15 mm)', u: '%', d: 1 },
    { k: 'ri', l: 'Reducibility RI', u: '%', d: 1 }, { k: 'si', l: 'Shatter index SI (+10 mm)', u: '%', d: 1 },
    { k: 'ai', l: 'Abrasion index AI (-0.5 mm)', u: '%', d: 1 }, { k: 'mps', l: 'Mean particle size MPS', u: 'mm', d: 1 },
    { k: 'p50', l: '+50 mm', u: '%', d: 1 }, { k: 'p40', l: '40-50 mm', u: '%', d: 1 }, { k: 'p25', l: '25-40 mm', u: '%', d: 1 },
    { k: 'p10', l: '10-25 mm', u: '%', d: 1 }, { k: 'p6', l: '6-10 mm', u: '%', d: 1 }, { k: 'm6', l: '-6 mm', u: '%', d: 1 },
    { k: 'prod', l: 'Actual production', u: 'MT/day', d: 0 }
  ];
  var CHEMF = [
    ['moist', 'Moisture', '%'], ['fe', 'Fe(T)', '%'], ['feo', 'FeO', '%'], ['sio2', 'SiO₂', '%'], ['al2o3', 'Al₂O₃', '%'],
    ['cao', 'CaO', '%'], ['mgo', 'MgO', '%'], ['mno', 'MnO', '%'], ['loi', 'LOI', '%'], ['fc', 'Fixed C', '%'],
    ['burn', 'Burn-off (LOI or FC+VM)', '%'], ['mps', 'Mean size', 'mm'], ['m1', '-1 mm', '%'], ['p3', '+3 mm', '%'],
    ['s', 'S', '%'], ['p', 'P', '%'], ['tio2', 'TiO₂', '%']
  ];
  // outputs: key, label, unit, decimals, group, better ('hi','lo','mid')
  var OUTS = [
    ['A', 'Sinter chemistry'],
    ['fe', 'Fe(T)', '%', 2, 'hi'], ['feo', 'FeO', '%', 2, 'mid'], ['fe2o3', 'Fe₂O₃ (derived)', '%', 2, ''], ['sio2', 'SiO₂', '%', 2, 'mid'],
    ['al2o3', 'Al₂O₃', '%', 2, 'lo'], ['cao', 'CaO', '%', 2, ''], ['mgo', 'MgO', '%', 2, 'mid'], ['mno', 'MnO', '%', 3, ''],
    ['b2', 'Basicity B2 (CaO/SiO₂)', '-', 2, 'mid'], ['b4', 'Basicity B4', '-', 2, ''], ['b3', 'Basicity B3', '-', 2, ''],
    ['as', 'Al₂O₃ / SiO₂', '-', 3, 'lo'], ['s', 'Sulphur S', '%', 3, 'lo'], ['p', 'Phosphorus P', '%', 3, 'lo'], ['tio2', 'TiO₂', '%', 3, 'lo'],
    ['B', 'Product size'],
    ['p50', '+50 mm', '%', 1, ''], ['p40', '40-50 mm', '%', 1, ''], ['p25', '25-40 mm', '%', 1, ''], ['p10', '10-25 mm', '%', 1, ''],
    ['p6', '6-10 mm', '%', 1, ''], ['m6', '-6 mm (return fines)', '%', 2, 'lo'], ['mps', 'Mean particle size MPS', 'mm', 1, 'mid'], ['hd', 'Harmonic diameter Dh (BF permeability)', 'mm', 1, 'hi'],
    ['C', 'Strength & metallurgical quality'],
    ['ti', 'Tumbler index TI (+6.3 mm)', '%', 1, 'hi'], ['ai', 'Abrasion index AI (-0.5 mm)', '%', 2, 'lo'], ['si', 'Shatter index SI (+10 mm)', '%', 1, 'hi'],
    ['rdi', 'RDI (-3.15 mm, lower better)', '%', 1, 'lo'], ['ri', 'Reducibility RI', '%', 1, 'hi'],
    ['D', 'Production & consumption'],
    ['prod', 'Predicted production', 'MT/day', 0, 'hi'], ['prodMachine', 'Production, machine basis', 'MT/day', 0, ''],
    ['productivity', 'Productivity', 't/m²/h', 3, 'hi'], ['productivityDay', 'Productivity', 't/m²/day', 2, 'hi'],
    ['fuel', 'Fuel (coke + anthracite), wet', 'kg/t', 1, 'lo'], ['fcKg', 'Fixed carbon', 'kg/t', 1, ''], ['flux', 'Flux (lime+limestone+dolomite), wet', 'kg/t', 1, ''],
    ['E', 'Charge characteristics'],
    ['fcMix', 'Fixed carbon in dry mix', '%', 2, ''], ['m1', '-1 mm fraction in mix', '%', 1, ''], ['p3', '+3 mm fraction in mix', '%', 1, ''],
    ['retShare', 'Return sinter share of dry mix', '%', 1, ''], ['moistCharge', 'Charge moisture (raw materials)', '%', 2, ''],
    ['oreLoi', 'Ore LOI (goethite index)', '%', 2, ''], ['limeShare', 'Burnt-lime share of dry mix', '%', 2, ''], ['yieldMB', 'Mass-balance yield', '%', 1, ''],
    ['feoMix', 'FeO in dry mix (mill scale etc.)', '%', 2, ''], ['mixMps', 'Mean size of the mix', 'mm', 2, ''], ['perm', 'Bed permeability index (100 = reference)', '-', 1, 'hi']
  ];
  var OUT = {}; OUTS.forEach(function (o) { if (o.length > 2) OUT[o[0]] = { k: o[0], l: o[1], u: o[2], d: o[3], better: o[4] }; });
  var TGT_LABEL = { 'Fe(T)': 'fe', 'FeO': 'feo', 'SiO2': 'sio2', 'Al2O3': 'al2o3', 'MgO': 'mgo', 'Basicity B2 (CaO/SiO2)': 'b2', '-6 mm (return fines)': 'm6',
    'Mean particle size (MPS)': 'mps', 'Tumbler Index (+6.3 mm)': 'ti', 'Abrasion index (-0.5 mm)': 'ai', 'Shatter index (+10 mm)': 'si',
    'RDI (-3.15 mm, lower is better)': 'rdi', 'Reducibility index RI': 'ri', 'Sulphur S': 's', 'Phosphorus P': 'p', 'Al2O3 / SiO2 ratio': 'as' };
  var REF_KEY = { fe: 85, feo: 6, sio2: 7, al2o3: 8, cao: 86, mgo: 9, mno: 87, b2: 5, p50: 19, p40: 20, p25: 21, p10: 22, p6: 23, m6: 24, mps: 25, ti: 10, ai: 36, si: 34, rdi: 30, ri: 32, prod: 88, fuel: 89, fcKg: 90, flux: 91, fcMix: 14, m1: 15, p3: 139, mixMps: 141, feoMix: 131, oreLoi: 117, limeShare: 118, retShare: 119, tio2: 121, yieldMB: 124 };
  var PAGES = [
    { id: 'home', l: 'Dashboard', ic: '🏠' }, { id: 'input', l: 'Inputs', ic: '⬆' }, { id: 'results', l: 'Results', ic: '📊' }, { id: 'ba', l: 'Before / After', ic: '⇄' },
    { id: 'sens', l: 'Sensitivity & Tips', ic: '🎯' }, { id: 'lab', l: 'Lab vs Predicted', ic: '🧪' }, { id: 'viz', l: '3D Sintering', ic: '🧊' }, { id: 'look', l: 'Sinter look', ic: '🪨' }
  ];

  // ---------- sinter machine ----------
  // The model's sensitivities were fitted on drive frequency (Hz). The app works in pallet speed (m/min) and converts
  // with the machine's m/min-per-Hz factor. 0.0656 makes the DPR average (18.76 Hz) equal the pallet speed implied by
  // the DPR charge rate on a 120 m2, 3 m wide strand at 600 mm bed.
  var K_DEFAULT = 0.0656;
  var MACHINES = [
    { id: 'small', l: 'Small strand (up to 90 m², 2.5 m wide)', area: 60, width: 2.5 },
    { id: 'medium', l: 'Medium strand (90–220 m², 3 m wide)', area: 120, width: 3 },
    { id: 'large', l: 'Large strand (220–450 m², 4 m wide)', area: 360, width: 4 },
    { id: 'xlarge', l: 'Very large strand (over 450 m², 5 m wide)', area: 500, width: 5 },
    { id: 'custom', l: 'Custom (enter area and width)' }
  ];
  function defaultMachine() { return { type: 'medium', name: '', area: SD.refin.area || 120, width: 3, k: K_DEFAULT }; }
  function spdK() { var k = state && state.machine && +state.machine.k; return k > 0 ? k : K_DEFAULT; }
  function hzToMpm(hz) { return hz * spdK(); }

  // ---------- state ----------
  var days = SD.days;
  function avgDay() {
    return { use: MAT.map(function (_, i) { return E.avg(days.map(function (d) { return d.use[i]; })); }),
      mach: [0, 1, 2, 3, 4, 5, 6].map(function (i) { return E.avg(days.map(function (d) { return d.mach[i]; })); }) };
  }
  function defaultInputs() {
    var a = avgDay();
    return { use: a.use, speed: hzToMpm(a.mach[0]), ign: a.mach[1], windP: a.mach[2], windT: a.mach[3], idFan: a.mach[4], btp: a.mach[5], bfg: a.mach[6],
      bed: SD.refin.bed, moist: SD.refin.moist, alk: SD.refin.alk, coke3: SD.refin.coke3, cacl2: SD.refin.cacl2 === 'Yes', area: SD.refin.area,
      basis: SD.refin.basis, prodOverride: null, biasOn: true, width: 3 };
  }
  function defaultTargets() {
    var t = {};
    Object.keys(SD.targets).forEach(function (l) { if (TGT_LABEL[l]) t[TGT_LABEL[l]] = SD.targets[l].slice(); });
    var o = adminTargets(); Object.keys(o).forEach(function (k) { if (t[k]) t[k] = o[k].slice(); });
    return t;
  }
  var ADMIN_TGT = 'sp.adminTargets';
  function adminTargets() { try { return JSON.parse(localStorage.getItem(ADMIN_TGT) || '{}') || {}; } catch (e) { return {}; } }
  function setAdminTargets(o) { try { if (o && Object.keys(o).length) localStorage.setItem(ADMIN_TGT, JSON.stringify(o)); else localStorage.removeItem(ADMIN_TGT); } catch (e) { }
  }
  var state = {
    inp: defaultInputs(), base: null, lab: {}, chem: E.clone(SD.props),
    ref: { bed: SD.refin.bed, moist: SD.refin.moist, alk: SD.refin.alk, coke3: SD.refin.coke3, cacl2: SD.refin.cacl2 === 'Yes' },
    targets: defaultTargets(), anchors: {}, src: {}, machine: defaultMachine(), anchorLog: null, aliasMap: {}, blendMode: 'mt', pct: null, totCharge: null, kgt: null, sinterProd: null, loaded: 'Plant average', chemAvg: 'last', upChem: null, chemCal: null, page: 'input',
    result: null, prevInp: null, ranAt: null, baSel: 'normal', sensOut: 'ti', baOut: 'ti'
  };
  var cal = null;
  function recal() { cal = E.calibrate(state.chem, state.ref, state.anchors); }
  function save() {
    try { var s = {}; ['inp', 'lab', 'chem', 'ref', 'targets', 'anchors', 'src', 'machine', 'anchorLog', 'aliasMap', 'blendMode', 'pct', 'totCharge', 'kgt', 'sinterProd', 'loaded', 'chemAvg', 'upChem', 'chemCal', 'recipe', 'touched', 'edited', 'defUsed', 'extraUsed', 'matName', 'prevInp', 'ranAt', 'baSel', 'sensOut', 'baOut', 'page'].forEach(function (k) { s[k] = state[k]; });
      s.hasResult = !!state.result; localStorage.setItem(STORE, JSON.stringify(s)); } catch (e) { }
  }
  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(STORE) || 'null'); if (!s) return;
      Object.keys(s).forEach(function (k) { if (k !== 'hasResult' && s[k] != null) state[k] = s[k]; });
      if (s.page) state.page = s.page;
      // saved before Grade D existed: pad the per-material arrays
      [state.inp, state.prevInp].forEach(function (x) { if (x && x.use) while (x.use.length < MAT.length) x.use.push(0); });
      if (state.pct) while (state.pct.length < MAT.length) state.pct.push(0);
      if (state.kgt) while (state.kgt.length < MAT.length) state.kgt.push(0);
      Object.keys(SD.props).forEach(function (k) { if (state.chem[k]) while (state.chem[k].length < MAT.length) state.chem[k].push(SD.props[k][state.chem[k].length]); });
      // saved by version 1.1.x or older: speed was in Hz
      [state.inp, state.prevInp].forEach(function (x) { if (x && x.speed > 8) x.speed = hzToMpm(x.speed); });
      recal(); if (s.hasResult) state.result = run(state.inp);
    } catch (e) { }
    try { gapFill(); } catch (e) { }
  }
  /* Chemistry correction (sinter lab minus mass-balance chemistry). 'plant' = learned from this plant's own
     lab results; 'none' = the plant's own raw-material analysis was uploaded, so the built-in correction
     (fitted to the module's sample plant) does not apply; 'module' = built-in sample data in use. */
  var CK = ['fe', 'sio2', 'al2o3', 'cao', 'mgo', 'mno'], QK = ['feo', 'ti'];
  function zeroBias() { var z = {}; CK.forEach(function (k) { z[k] = 0; }); return z; }
  function biasMode() { return state.chemCal ? 'plant' : state.upChem ? 'none' : 'module'; }
  function biasLabel() {
    if (!state.inp.biasOn) return 'chemistry correction OFF';
    var m = biasMode();
    return m === 'plant' ? 'chemistry corrected to your lab (' + state.chemCal.n + ' result' + (state.chemCal.n > 1 ? 's' : '') + ')' : m === 'none' ? 'pure mass balance of your analysis' : 'built-in sample-plant correction';
  }
  function engIn(inp) {
    var x = {}; Object.keys(inp).forEach(function (k) { x[k] = inp[k]; }); x.speed = inp.speed / spdK();
    x.speedMpm = inp.speed; x.refK = K_DEFAULT; x.refWidth = 3; x.width = state.machine && +state.machine.width || inp.width;
    var m = biasMode();
    if (m === 'plant') { var b = zeroBias(); CK.forEach(function (k) { if (isFinite(state.chemCal.b[k])) b[k] = state.chemCal.b[k]; }); x.chemBias = b; }
    // FeO and tumbler index level learned from this plant's lab results
    if (state.chemCal && state.chemCal.b) { if (isFinite(state.chemCal.b.feo)) x.feoBias = state.chemCal.b.feo; if (isFinite(state.chemCal.b.ti)) x.tiBias = state.chemCal.b.ti; }
    else if (m === 'none') x.chemBias = zeroBias();
    return x;
  }
  // learn the correction from the lab result now entered: lab - mass balance, rolling mean of the last 5
  function learnChem() {
    var x = engIn(state.inp); x.chemBias = zeroBias(); x.biasOn = true; x.feoBias = 0; x.tiBias = 0;
    var raw = E.predict(x, cal), d = {}, n = 0;
    CK.concat(QK).forEach(function (k) { if (isFinite(state.lab[k]) && isFinite(raw[k])) { d[k] = state.lab[k] - raw[k]; n++; } });
    if (!n) return false;
    var log = ((state.chemCal && state.chemCal.log) || []).concat([d]).slice(-5), b = {};
    CK.concat(QK).forEach(function (k) { var v = log.map(function (e) { return e[k]; }).filter(isFinite); if (v.length) b[k] = v.reduce(function (a, c) { return a + c; }, 0) / v.length; });
    state.chemCal = { b: b, log: log, n: log.length, at: new Date().toISOString() };
    state.inp.biasOn = true;
    return true;
  }
  function run(inp) { return E.predict(engIn(inp), cal); }
  // blend entered as % of the wet charge: MT/day = % / (sum of %) x total wet charge
  function useTotal() { return state.inp.use.reduce(function (a, b) { return a + (+b || 0); }, 0); }
  function pctFromUse() { var t = useTotal(); return state.inp.use.map(function (u) { return t ? +((+u || 0) / t * 100).toFixed(3) : 0; }); }
  function pctSum() { return (state.pct || []).reduce(function (a, b) { return a + (+b || 0); }, 0); }
  function useFromPct() {
    var s = pctSum(), t = +state.totCharge || 0;
    if (s > 0 && t > 0) state.inp.use = state.pct.map(function (p) { return (+p || 0) / s * t; });
  }
  // blend entered as kg (wet) per ton of sinter: MT/day = kg/t x sinter production / 1000
  function prodNow() { try { var p = run(state.inp).prod; return isFinite(p) && p > 0 ? p : 0; } catch (e) { return 0; } }
  function kgtFromUse(P) { P = P || prodNow(); return state.inp.use.map(function (u) { return P ? +((+u || 0) * 1000 / P).toFixed(2) : 0; }); }
  function kgtSum(a) { return (a || []).reduce(function (x, y) { return x + (+y || 0); }, 0); }
  function useFromKgt() {
    var P = +state.sinterProd || 0;
    if (P > 0 && state.kgt) state.inp.use = state.kgt.map(function (k) { return (+k || 0) * P / 1000; });
  }
  function setBlendMode(mode) {
    if (mode === 'pct') { state.pct = pctFromUse(); state.totCharge = Math.round(useTotal()) || 6000; }
    if (mode === 'kgt') { state.sinterProd = Math.round(prodNow()) || 4500; state.kgt = kgtFromUse(state.sinterProd); }
    state.blendMode = mode;
  }

  // ---------- helpers ----------
  function $(s, el) { return (el || document).querySelector(s); }
  function $$(s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function f(v, d) { if (v == null || v === '' || !isFinite(v)) return '–'; return Number(v).toLocaleString('en-IN', { minimumFractionDigits: d, maximumFractionDigits: d }); }
  function sgn(v, d) { if (!isFinite(v)) return '–'; var s = f(Math.abs(v), d); return (v > 0 ? '+' : v < 0 ? '−' : '±') + s; }
  function num(v) { if (v === '' || v == null) return null; var n = parseFloat(String(v).replace(/,/g, '')); return isFinite(n) ? n : null; }
  function toast(msg) { var t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove('show'); }, 2600); }
  // built-in demo data (module workbook plant average) still in use: label results ILLUSTRATIVE
  function isDemo() { return !state.touched && !state.upChem && !Object.keys(state.src).length && state.loaded === 'Plant average'; }
  function target(k) { return state.targets[k] || [null, null]; }
  // ---------- missing data: the app fills gaps with justified assumptions and marks them red ----------
  /* An input is "assumed" when you did not give it (not uploaded, not typed) and it still holds the app's
     built-in value, or when it was blank / invalid and the app had to fill it. Each assumption carries the
     reason. In demo mode (nothing of yours loaded yet) only blanks are filled; the ILLUSTRATIVE label covers the rest. */
  var CHEMK = CHEMF.map(function (c) { return c[0]; });
  function given(id) { return !!(state.src[id] || (state.edited && state.edited[id])); }
  function blendGiven(i) { return ['use.', 'pct.', 'kgt.'].some(function (q) { return given(q + i); }); }
  function chemGiven(p, i) {
    var u = state.upChem, has = function (o) { return !!(o && o[i] && o[i][p] != null && isFinite(o[i][p])); };
    return given('chem.' + p + '.' + i) || !!(u && (has(u.last) || has(u.avg2)));
  }
  function blank(v) { return v == null || v === '' || (typeof v === 'number' && !isFinite(v)); }
  function near(a, b) { return isFinite(a) && isFinite(b) && Math.abs(a - b) <= 1e-6 * Math.max(1, Math.abs(b)); }
  function gapFill() {
    var A = {}, own = !isDemo(), inp = state.inp, a = avgDay(), N = days.length, d0 = defaultInputs();
    MACH.forEach(function (p, j) {
      var ref = p.k === 'speed' ? hzToMpm(a.mach[0]) : a.mach[j], why = 'plant average of the ' + N + ' reference DPR days, ' + f(ref, p.d) + ' ' + p.u;
      if (blank(inp[p.k]) || (p.k === 'speed' && !(inp[p.k] > 0))) { inp[p.k] = ref; A[p.k] = why; }
      else if (own && !given(p.k) && (near(inp[p.k], ref) || near(inp[p.k], d0[p.k]))) A[p.k] = why;
    });
    [['bed', 'mm', 0], ['moist', '%', 2], ['coke3', '%', 1], ['alk', '%', 3]].forEach(function (q) {
      var ref = state.ref[q[0]], why = 'your plant normal (Inputs › 6), ' + f(ref, q[2]) + ' ' + q[1];
      if (blank(inp[q[0]]) || (q[0] !== 'alk' && !(inp[q[0]] > 0))) { inp[q[0]] = ref; A[q[0]] = why; }
      else if (own && !given(q[0]) && (near(inp[q[0]], ref) || near(inp[q[0]], d0[q[0]]))) A[q[0]] = why;
    });
    var ar = state.machine && state.machine.area > 0 ? state.machine.area : SD.refin.area, wa = 'area of your machine type (Plant level), ' + f(ar, 0) + ' m²';
    if (!(inp.area > 0)) { inp.area = ar; A.area = wa; } else if (own && !given('area') && state.machine.type !== 'custom' && near(inp.area, ar)) A.area = wa;
    ownRfChem();
    ORD.forEach(function (i) {
      var u = +inp.use[i] || 0;
      if (blank(inp.use[i])) inp.use[i] = 0;
      if (i === SD.OWN_RF) return; // chemistry follows the sinter (ownRfChem)
      if (own && u > 0 && !blendGiven(i) && near(u, d0.use[i])) A['use.' + i] = 'not in your data: the built-in plant-average use, ' + f(u, 1) + ' MT/day, was kept. Set it to 0 if you do not use this material';
      if (u <= 0) return;
      CHEMK.forEach(function (p) {
        var v = state.chem[p] && state.chem[p][i], md = masterChem(p, i), def = md != null ? md : SD.props[p] ? SD.props[p][i] : null;
        if (!state.chem[p]) return;
        var why = 'master default for ' + MAT[i] + ', ' + f(def, 2) + ' (not in your data: enter your value)';
        if (blank(v)) { state.chem[p][i] = def != null ? def : 0; A['chem.' + p + '.' + i] = why; }
        else if (own && !chemGiven(p, i) && near(+v, +def) && +def !== 0) A['chem.' + p + '.' + i] = why; // a zero default means 'not present in this material'
      });
      // coke / coal with its loss on ignition given but no fixed carbon: fixed C = LOI minus ~2.5 % volatile matter
      if (SD.types[i] === 'Fuel' && state.chem.fc && state.chem.burn && chemGiven('burn', i) && !chemGiven('fc', i) && +state.chem.burn[i] > 40) {
        var fcx = +(+state.chem.burn[i] - 2.5).toFixed(1);
        state.chem.fc[i] = fcx; A['chem.fc.' + i] = 'worked out from your loss on ignition ' + f(+state.chem.burn[i], 1) + ' % minus about 2.5 % volatile matter (coke breeze), ' + f(fcx, 1) + ' %';
      }
    });
    // values the Master Sheet filled from the master default table stay red until you type your own
    var DU = state.defUsed || {};
    Object.keys(DU).forEach(function (k) { if (!(state.edited && state.edited[k])) A[k] = DU[k]; });
    state.assumed = A; recal();
    return A;
  }
  /* the plant's own return fines are screened sinter: their analysis is the sinter lab result where there is one,
     otherwise the last prediction (an analysis uploaded for them is kept) */
  function masterChem(p, i) {
    try { var D = window.SinterMaster && SinterMaster.loadDefaults(), r = D && D.chem[i]; if (r && typeof r[p] === 'number' && isFinite(r[p])) return r[p]; } catch (e) { }
    return null;
  }
  function ownRfChem() {
    var i = SD.OWN_RF; if (i == null || !state.chem.fe || state.chem.fe.length <= i) return;
    var r = state.result, src = {};
    ['fe', 'feo', 'sio2', 'al2o3', 'cao', 'mgo', 'mno'].forEach(function (k) {
      var v = isFinite(state.lab[k]) ? +state.lab[k] : r && isFinite(r[k]) ? +r[k] : null;
      if (v != null && state.chem[k] && !chemGiven(k, i)) { state.chem[k][i] = +v.toFixed(3); src[k] = 1; }
    });
    ['burn', 'loi', 'fc'].forEach(function (k) { if (state.chem[k] && !chemGiven(k, i)) state.chem[k][i] = 0; });
  }
  function assumedSummary() {
    var A = state.assumed || {}, k = Object.keys(A), m = {}, g = { mach: 0, proc: 0, blend: 0, chem: 0 };
    k.forEach(function (x) { var p = x.split('.'); if (p[0] === 'use') g.blend++; else if (p[0] === 'chem') { g.chem++; m[p[2]] = 1; } else if (MACH.some(function (q) { return q.k === x; })) g.mach++; else g.proc++; });
    return { n: k.length, g: g, mats: Object.keys(m).length };
  }
  function assumedNote(short) {
    var S = assumedSummary(); if (!S.n) return '';
    var parts = []; if (S.g.blend) parts.push(S.g.blend + ' blend'); if (S.g.mach) parts.push(S.g.mach + ' machine'); if (S.g.proc) parts.push(S.g.proc + ' process'); if (S.g.chem) parts.push(S.g.chem + ' raw-material analysis values (' + S.mats + ' material' + (S.mats > 1 ? 's' : '') + ')');
    return '<div class="note asm-note"><b>' + S.n + ' input' + (S.n > 1 ? 's were' : ' was') + ' not filled by you.</b> ' + (short ? '' : 'The app filled them with justified assumptions (' + parts.join(', ') + ') so the prediction can run. ') + 'Red inputs are master default values, not filled by you: update them for a better prediction. Green inputs are the additional parameters that sharpen the prediction.</div>';
  }
  function status(k, v) {
    var t = target(k); if (!isFinite(v)) return ['na', ''];
    if (t[0] == null && t[1] == null) return ['na', 'no target'];
    if (t[0] != null && v < t[0]) return ['bad', 'LOW'];
    if (t[1] != null && v > t[1]) return ['bad', 'HIGH'];
    var span = (t[0] != null && t[1] != null) ? (t[1] - t[0]) : Math.abs((t[0] != null ? t[0] : t[1])) * 0.04;
    if ((t[0] != null && v - t[0] < span * 0.1) || (t[1] != null && t[1] - v < span * 0.1)) return ['warn', 'EDGE'];
    return ['ok', 'OK'];
  }
  function tgtText(k) {
    var t = target(k), d = OUT[k] ? OUT[k].d : 2;
    if (t[0] != null && t[1] != null) return f(t[0], d) + '–' + f(t[1], d);
    if (t[0] != null) return '≥ ' + f(t[0], d);
    if (t[1] != null) return '≤ ' + f(t[1], d);
    return '–';
  }
  function chip(st) { return '<span class="chip ' + st[0] + '">' + (st[1] || '–') + '</span>'; }
  function goodness(k, delta) { // +1 good, -1 bad, 0 neutral
    var o = OUT[k]; if (!o || !o.better || Math.abs(delta) < 1e-9) return 0;
    if (o.better === 'hi') return delta > 0 ? 1 : -1;
    if (o.better === 'lo') return delta < 0 ? 1 : -1;
    var t = target(k), r = state.result; if (!r) return 0;
    var mid = (t[0] != null && t[1] != null) ? (t[0] + t[1]) / 2 : (t[0] != null ? t[0] : t[1]);
    if (mid == null) return 0;
    return Math.abs(r[k] - mid) < Math.abs(r[k] - delta - mid) ? 1 : -1;
  }

  // ---------- shell ----------
  // pages opened from the menu, the dashboard or the rail; Back returns to where they were opened from
  var OVER = ['flow', 'refs', 'profile', 'suggest', 'admin', 'plant', 'recipe', 'adv', 'rca', 'plan', 'raw', 'chem', 'quality', 'machine', 'params'];
  var NAMES = { flow: 'Process flow 3D', refs: 'Learning & references', profile: 'My profile', suggest: 'Suggestions', admin: 'Admin panel', plant: 'Plant level', recipe: 'Target recipe', adv: 'Target vs actual', rca: 'Root cause advisor', plan: 'Recovery planner',
    raw: 'Raw material analysis', chem: 'Chemistry & basicity', quality: 'Physical & metallurgical quality', machine: 'Machine parameters', params: 'Input & output parameters' };
  var ICON = { flow: 'workflow', home: 'house', input: 'upload', results: 'chart-column', ba: 'arrow-left-right', sens: 'target', lab: 'test-tube', viz: 'box', look: 'gem', raw: 'layers', chem: 'flask-conical',
    quality: 'shield-check', machine: 'settings-2', adv: 'compass', rca: 'compass', plan: 'compass', recipe: 'calculator', plant: 'factory', refs: 'book-open', params: 'book-open', profile: 'user', suggest: 'lightbulb', admin: 'settings-2' };
  var ANALYSIS = ['flow', 'ba', 'sens', 'lab', 'viz', 'look', 'raw', 'chem', 'quality', 'machine'];
  var RAIL = [['Overview', ['home', 'input', 'results']], ['Modules', ['flow', 'raw', 'chem', 'quality', 'machine']], ['Analysis', ['ba', 'sens', 'lab', 'viz', 'look']], ['Advisor & tools', ['adv', 'recipe', 'plant', 'params', 'refs']]];
  function ic(n) { return window.SP_ICON ? window.SP_ICON(n) : ''; }
  function pageLabel(id) { var p = PAGES.find(function (x) { return x.id === id; }); return p ? p.l : (NAMES[id] || id); }
  function locked(id) { return ['ba', 'sens', 'lab', 'viz', 'look', 'results', 'recipe'].indexOf(id) >= 0 && !state.result; }
  function renderShell() {
    var cur = state.page, grp = function (id) { return id === 'rca' || id === 'plan' ? 'adv' : id; };
    var nav = [['home', 'Home'], ['input', 'Inputs'], ['results', 'Results'], ['analysis', 'Analysis'], ['adv', 'Advisor']];
    $('#bottomNav').innerHTML = nav.map(function (n) {
      var on = n[0] === 'analysis' ? ANALYSIS.indexOf(cur) >= 0 : grp(cur) === n[0];
      return '<button ' + (n[0] === 'analysis' ? 'id="navAnalysis"' : 'data-go="' + n[0] + '"') + ' class="' + (on ? 'on' : '') + '"' + (locked(n[0]) ? ' disabled' : '') + '><span class="ic">' + ic(n[0] === 'analysis' ? 'activity' : ICON[n[0]]) + '</span>' + n[1] + '</button>';
    }).join('');
    $('#navAnalysis').onclick = function () {
      openSheet('Analysis', '<div class="ash">' + ANALYSIS.map(function (id) {
        return '<button class="ash-i" data-a="' + id + '"' + (locked(id) ? ' disabled' : '') + '>' + ic(ICON[id]) + '<span>' + pageLabel(id) + '</span></button>';
      }).join('') + '</div>' + (state.result ? '' : '<p class="muted small center">Run a prediction to open Before / After, Sensitivity, Lab check, 3D Sintering and Sinter look. Process flow 3D is always available.</p>'), [{ l: 'Close', cls: 'ghost', fn: closeSheet }]);
      $$('#sheet [data-a]').forEach(function (b) { b.onclick = function () { closeSheet(); go(b.dataset.a); }; });
    };
    var rail = $('#rail');
    if (rail) rail.innerHTML = '<div class="rl-brand"><div class="rl-mark">' + $('.top-mark').innerHTML + '</div><div><b>Sinter Predict</b><small>Plant intelligence</small></div></div>' +
      RAIL.map(function (g) {
        return '<div class="rl-g">' + g[0] + '</div>' + g[1].map(function (id) {
          return '<button data-go="' + id + '" class="' + (grp(cur) === id ? 'on' : '') + '"' + (locked(id) ? ' disabled' : '') + '>' + ic(ICON[id]) + '<span>' + pageLabel(id) + '</span></button>';
        }).join('');
      }).join('') + '<div class="rl-f">v' + esc(window.SP_CONFIG.version) + '</div>';
    $('#pageName').textContent = pageLabel(cur);
    $('#btnBack').style.visibility = 'visible';
  }
  function go(page) {
    var free = ['home', 'input', 'flow', 'refs', 'profile', 'suggest', 'admin', 'plant', 'adv', 'rca', 'plan', 'raw', 'chem', 'quality', 'machine', 'params'];
    if (page === 'admin' && !SinterAuth.isAdmin()) { toast('Admin login required'); return; }
    if (free.indexOf(page) < 0 && !state.result) { toast('Run a prediction first'); return; }
    var from = state.page;
    if (state.page === 'viz' && window.SinterViz) SinterViz.dispose();
    if (state.page === 'look' && window.SinterLook) SinterLook.dispose();
    if (state.page === 'flow' && window.SinterFlow) SinterFlow.dispose();
    if (OVER.indexOf(page) >= 0 && OVER.indexOf(from) < 0) state.backTo = from;
    state.page = page; save(); renderShell();
    var m = $('#main'); m.innerHTML = '';
    if (page === 'flow' && window.SinterFlow) SinterFlow.page(m);
    else if (page === 'profile') SinterAuth.pageProfile(m);
    else if (page === 'admin') pageAdmin(m);
    else if (page === 'plant') pagePlant(m);
    else if (page === 'recipe') pageRecipe(m);
    else if (window.SinterAdvisor && SinterAdvisor.has(page)) SinterAdvisor.page(page, m);
    else if (window.SinterDash && SinterDash.has(page)) SinterDash.page(page, m);
    else if (page === 'params' && window.SinterParams) SinterParams.page(m);
    else if (page === 'suggest') SinterAuth.pageSuggest(m, (PAGES.find(function (p) { return p.id === from; }) || { l: from }).l);
    else ({ input: function (mm) { if (!(window.SinterQuick && SinterQuick.page(mm))) pageInput(mm); }, results: pageResults, ba: pageBA, sens: pageSens, lab: pageLab, viz: pageViz, look: pageLook, refs: pageRefs })[page](m);
    window.scrollTo(0, 0);
    animatePage(m);
  }
  // ---------- animation: page entrance, count-up numbers, gauges ----------
  var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function animatePage(m) {
    m.classList.remove('enter'); void m.offsetWidth; m.classList.add('enter');
    if (calm) return;
    $$('[data-count]', m).forEach(function (el) {
      var to = +el.dataset.count, d = +el.dataset.d || 0, t0 = performance.now(), dur = 900;
      if (!isFinite(to)) return;
      (function step(t) {
        var k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
        el.textContent = f(to * e, d);
        if (k < 1) requestAnimationFrame(step); else el.textContent = f(to, d);
      })(t0);
    });
  }
  /* ring gauge: the arc spans the target band widened by 60 % each side; the coloured band marks the target,
     the needle marks the value. */
  function gauge(k, v) {
    var o = OUT[k], t = target(k), lo = t[0], hi = t[1], st = status(k, v);
    if (!o || !isFinite(v)) return '';
    var a = lo != null ? lo : v * 0.9, b = hi != null ? hi : v * 1.1; if (a === b) { a -= 1; b += 1; }
    var span = b - a, mn = a - span * 0.6, mx = b + span * 0.6; mn = Math.min(mn, v); mx = Math.max(mx, v);
    var R0 = 34, C = 2 * Math.PI * R0, A = 0.75, pos = function (x) { return Math.max(0, Math.min(1, (x - mn) / (mx - mn))); };
    var bandS = lo != null ? pos(lo) : 0, bandE = hi != null ? pos(hi) : 1, pv = pos(v);
    var arc = function (s, e, cls, extra) { return '<circle r="' + R0 + '" cx="44" cy="44" class="' + cls + '" stroke-dasharray="' + (C * A * (e - s)).toFixed(1) + ' ' + C.toFixed(1) + '" stroke-dashoffset="' + (-C * A * s).toFixed(1) + '"' + (extra || '') + '/>'; };
    var ang = 135 + 270 * pv;
    return '<div class="gauge ' + st[0] + '"><svg viewBox="0 0 88 88">' + arc(0, 1, 'g-track') + arc(bandS, bandE, 'g-band') +
      '<circle r="' + R0 + '" cx="44" cy="44" class="g-val" stroke-dasharray="' + (C * A * pv).toFixed(1) + ' ' + C.toFixed(1) + '" style="--len:' + (C * A * pv).toFixed(1) + '"/>' +
      '<g class="g-needle" style="--ang:' + ang.toFixed(1) + 'deg"><circle cx="78" cy="44" r="4.2"/></g></svg>' +
      '<div class="g-v"><b data-count="' + v + '" data-d="' + o.d + '">' + f(v, o.d) + '</b><span>' + o.u + '</span></div><div class="g-l">' + o.l.replace(/ \(.*\)/, '') + '</div></div>';
  }
  window.appBack = function () {
    if ($('#sheet').classList.contains('open')) { closeSheet(); return true; }
    var i = PAGES.findIndex(function (p) { return p.id === state.page; });
    if (OVER.indexOf(state.page) >= 0) { go(state.backTo || 'home'); return true; }
    if (i > 0) { go(PAGES[i - 1].id); return true; }
    return false;
  };
  function openSheet(title, body, buttons) {
    $('#sheet').innerHTML = '<div class="sh-h"><h2>' + title + '</h2></div><div class="sh-b">' + body + '</div><div class="sh-f">' +
      buttons.map(function (b, i) { return '<button class="btn ' + (b.cls || '') + '" data-i="' + i + '">' + b.l + '</button>'; }).join('') + '</div>';
    $$('#sheet .sh-f button').forEach(function (el) { el.onclick = function () { buttons[+el.dataset.i].fn(); }; });
    $('#sheet').classList.add('open'); $('#sheetBg').classList.add('open');
  }
  function closeSheet() { $('#sheet').classList.remove('open'); $('#sheetBg').classList.remove('open'); }

  // ---------- page 1: inputs ----------
  function fieldHtml(id, label, unit, val, d, extra) {
    var src = state.src[id], as = state.assumed && state.assumed[id];
    return '<div class="fld' + (src ? ' changed' : '') + (as ? ' assumed' : '') + '"><label>' + label + (unit ? ' <small>' + unit + '</small>' : '') + (src ? '<span class="src">from ' + esc(src) + '</span>' : '') + (as ? '<span class="asm">Assumed: ' + esc(as) + '</span>' : '') + '</label>' +
      '<input inputmode="decimal" data-f="' + id + '" value="' + (val == null || val === '' ? '' : (+(+val).toFixed(d == null ? 3 : d))) + '"' + (extra || '') + '></div>';
  }
  function ynHtml(id, label, val) {
    return '<div class="fld"><label>' + label + '</label><select data-f="' + id + '"><option value="1"' + (val ? ' selected' : '') + '>Yes</option><option value="0"' + (!val ? ' selected' : '') + '>No</option></select></div>';
  }
  function acc(id, title, badge, body, open) {
    return '<div class="acc' + (open ? ' open' : '') + '" id="acc-' + id + '"><button class="acc-h" data-acc="' + id + '"><span class="t">' + title + '</span><span class="badge">' + badge + '</span><span class="chev">›</span></button><div class="acc-b">' + body + '</div></div>';
  }
  function pageInput(m) {
    if (window.SinterBuilder) { SinterBuilder.page(m); return; }
    gapFill();
    var inp = state.inp, tot = inp.use.reduce(function (a, b) { return a + (+b || 0); }, 0);
    var labN = Object.keys(state.lab).filter(function (k) { return isFinite(state.lab[k]); }).length;
    var h = isDemo() ? '<div class="note warn"><span class="illus">ILLUSTRATIVE</span> The values below are the built-in demo data (plant average of the module workbook), not your plant. Upload your own files or edit the fields; the label disappears once you do.</div>' : '';
    h += assumedNote();
    h += '<button class="learnbtn" data-go="params">' + ic('book-open') + '<span><b>Learn about input / output parameters</b><small>What every parameter means and what to put in your Excel, PDF or link</small></span>' + ic('chevron-right') + '</button>';
    h += '<div class="card hero"><h2>Upload all inputs in one go</h2><p class="sub">Blend, machine parameters, lab results and raw-material chemistry from one or several Excel, CSV or PDF files (select them together) or a web link. You confirm every value before it is used.</p>' +
      '<div class="upl-grid">' +
      '<button class="upl" id="upXlsx"><span class="ic">' + ic('file-spreadsheet') + '</span><div><b>Excel / CSV</b><span>one or more files</span></div></button>' +
      '<button class="upl" id="upPdf"><span class="ic">' + ic('file-text') + '</span><div><b>PDF report</b><span>one or more PDFs</span></div></button>' +
      '<button class="upl" id="upLink"><span class="ic">' + ic('link') + '</span><div><b>From a link</b><span>Drive, Sheets, web</span></div></button>' +
      '<button class="upl" id="upTpl"><span class="ic">' + ic('download') + '</span><div><b>Get template</b><span>fill &amp; upload</span></div></button>' +
      '<button class="upl wide" id="upMaster"><span class="ic">' + ic('layers') + '</span><div><b>Master Excel</b><span>all current inputs in one file, with the source of each value</span></div></button>' +
      '</div></div>';
    h += '<div class="card"><h2>Upload one part only</h2><p class="sub">Pick the kind of document. Only that part of the inputs is updated; everything else stays as it is. Each slot takes Excel, CSV or PDF, one or more files.</p>' +
      '<div class="upl-grid part">' + PARTS.map(function (p) { return '<button class="upl" data-part="' + p.id + '"><span class="ic">' + ic(p.ic) + '</span><div><b>' + p.l + '</b><span>' + p.s + '</span></div></button>'; }).join('') + '</div></div>';
    var ca = state.chemAvg === 'avg2';
    h += '<div class="card"><h2>Raw-material analysis to use</h2><p class="sub">When a file has more than one analysis per material</p>' +
      '<div class="seg2" id="chemAvgSeg"><button data-ca="last" class="' + (ca ? '' : 'on') + '">Current analysis only</button><button data-ca="avg2" class="' + (ca ? 'on' : '') + '">Average of last two</button></div>' +
      (state.upChem ? '<p class="muted small" style="margin:0 0 10px">Switching updates the chemistry from your last upload (' + esc(state.upChem.file || 'file') + ') straight away.</p>' : '') +
      '</div>';
    var mc = state.machine, mt = MACHINES.find(function (x) { return x.id === mc.type; }) || MACHINES[1];
    h += '<div class="card"><h2>Your sinter machine</h2><p class="sub"><b>' + esc(mc.name || mt.l.split(' (')[0]) + '</b> · ' + f(mc.area, 0) + ' m² · ' + f(mc.width, 1) + ' m wide · ' + (Object.keys(state.anchors).length ? 'anchored to your plant (' + Object.keys(state.anchors).map(function (k) { return k.toUpperCase(); }).join(', ') + ')' : 'RDI / RI / SI / AI not yet anchored to your plant') + '</p>' +
      '<button class="btn small" data-go="plant">Machine type &amp; plant level →</button></div>';
    var bm = state.blendMode, pm = bm === 'pct', km = bm === 'kgt', pc = pm ? state.pct : pctFromUse(), ps = pm ? pctSum() : 100;
    var kg = km ? state.kgt : kgtFromUse(), ro = ' readonly tabindex="-1"';
    var blend = '<p class="sub" style="margin:0">Enter the blend as</p><div class="seg2" id="blendSeg"><button data-bm="mt" class="' + (bm === 'mt' || !bm ? 'on' : '') + '">MT/day (wet)</button><button data-bm="pct" class="' + (pm ? 'on' : '') + '">% of wet charge</button><button data-bm="kgt" class="' + (km ? 'on' : '') + '">kg/t sinter</button></div>' +
      (pm ? fieldHtml('totCharge', 'Total wet charge', 'MT/day · the % are applied to this', state.totCharge, 0) : '') +
      (km ? fieldHtml('sinterProd', 'Sinter production (base for kg/t)', 'MT/day · kg/t × this ÷ 1000 = MT/day wet', state.sinterProd, 0) : '') +
      '<div class="blhead"><span>Raw material</span><span>MT/day wet</span><span>% charge</span><span>kg/t sinter</span></div>' +
      omap(function (n, i) {
        var su = state.src['use.' + i] || state.src['pct.' + i] || state.src['kgt.' + i];
        var mt = '<input inputmode="decimal" data-f="use.' + i + '" value="' + (+(+inp.use[i] || 0).toFixed(1)) + '"' + (pm || km ? ro : '') + '>';
        var pv = '<input inputmode="decimal" data-f="pct.' + i + '" value="' + (+(+pc[i] || 0).toFixed(2)) + '"' + (pm ? '' : ro) + '>';
        var kv = '<input inputmode="decimal" data-f="kgt.' + i + '" value="' + (+(+kg[i] || 0).toFixed(1)) + '"' + (km ? '' : ro) + '>';
        var ab = state.assumed && state.assumed['use.' + i];
        var mn = state.matName && state.matName[i];
        if (i === SD.OWN_RF && !mn) mn = 'Chemistry = your sinter (lab, else predicted). Recycled, so it does not change sinter chemistry or net production';
        return '<div class="fld bl' + (su ? ' changed' : '') + (ab ? ' assumed' : '') + '"><label>' + esc(n) + (mn ? '<span class="pn">' + esc(mn) + '</span>' : '') + (su ? '<span class="src">from ' + esc(su) + '</span>' : '') + (ab ? '<span class="asm">Assumed: ' + esc(ab) + '</span>' : '') + '</label>' + mt + pv + kv + '</div>';
      }).join('') + '<div class="total"><span>Total wet charge</span><span id="totUse">' + totText() + '</span></div>' +
      (pm && Math.abs(ps - 100) > 0.5 ? '<div class="note warn small" id="pctWarn">The % add up to ' + f(ps, 1) + ' %. They are scaled to 100 % of the total wet charge.</div>' : '') +
      '<p class="muted small" id="kgtNote" style="margin:6px 0 0">' + kgtNote() + '</p>';
    var mach = MACH.map(function (p) { return fieldHtml(p.k, p.l, p.u, inp[p.k], p.d); }).join('');
    var proc = PROC.map(function (p) {
      if (p.type === 'yn') return ynHtml(p.k, p.l, inp[p.k]);
      if (p.type === 'sel') return '<div class="fld"><label>' + p.l + '</label><select data-f="' + p.k + '">' + p.opts.map(function (o) { return '<option value="' + o[0] + '"' + (inp[p.k] === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') + '</select></div>';
      return fieldHtml(p.k, p.l, p.u + (p.opt ? ' · blank = model' : ''), inp[p.k], p.d);
    }).join('');
    var lab = '<p class="sub">Actual analysis of the sinter made with this blend. Used on the Lab vs Predicted page. Leave blank what you do not have.</p>' +
      LAB.map(function (p) { return fieldHtml('lab.' + p.k, p.l, p.u, state.lab[p.k], p.d); }).join('') +
      '<div class="row" style="margin-top:8px"><button class="btn small ghost" id="labClear">Clear lab results</button></div>';
    var asmMat = function (i) { return CHEMK.filter(function (p) { return state.assumed && state.assumed['chem.' + p + '.' + i]; }).length; };
    var chemSel = '<select class="sel" id="chemMat">' + omap(function (n, i) { var k = asmMat(i); return '<option value="' + i + '">' + esc(n) + (state.matName && state.matName[i] ? ' = ' + esc(state.matName[i]) : '') + ' (' + SD.types[i] + ')' + (k ? ' · ' + k + ' assumed' : '') + '</option>'; }).join('') + '</select><div id="chemBox"></div>' +
      '<div class="row" style="margin-top:8px"><button class="btn small ghost" id="chemReset">Reset all to module values</button></div>';
    var normals = '<h3>Plant normals (the model reacts to the difference from these)</h3>' +
      fieldHtml('ref.bed', 'Normal bed height', 'mm', state.ref.bed, 0) + fieldHtml('ref.moist', 'Normal mix moisture', '%', state.ref.moist, 2) +
      fieldHtml('ref.alk', 'Normal sinter alkali', '%', state.ref.alk, 3) + fieldHtml('ref.coke3', 'Normal coke -3 mm', '%', state.ref.coke3, 1) +
      ynHtml('ref.cacl2', 'CaCl₂ spraying normally on', state.ref.cacl2) +
      '<h3>Targets (your SOP limits)</h3>' + Object.keys(OUT).filter(function (k) { return state.targets[k] || ['fe', 'feo', 'sio2', 'al2o3', 'mgo', 'b2', 'ti', 'rdi', 'ri', 'mps', 'm6', 'si', 'ai'].indexOf(k) >= 0; }).map(function (k) {
        var t = target(k), o = OUT[k];
        return '<div class="fld" style="grid-template-columns:1fr 70px 70px"><label>' + o.l + ' <small>' + o.u + ' · min / max</small></label>' +
          '<input inputmode="decimal" data-t="' + k + '.0" value="' + (t[0] == null ? '' : t[0]) + '"><input inputmode="decimal" data-t="' + k + '.1" value="' + (t[1] == null ? '' : t[1]) + '"></div>';
      }).join('');
    h += '<div class="card"><h2>Manual entry</h2><p class="sub">Type or correct any value. Uploaded values are marked in orange.</p>' +
      acc('blend', '1. Raw-material blend', f(tot, 0) + ' MT/day wet' + redCount(ORD.map(function (i) { return 'use.' + i; })), blend, true) +
      acc('mach', '2. Machine parameters', MACH.length + ' items' + redCount(MACH.map(function (p) { return p.k; })), mach) +
      acc('proc', '3. Process & other inputs', 'bed ' + f(inp.bed, 0) + ' mm' + redCount(['bed', 'moist', 'coke3', 'alk', 'area']), proc) +
      acc('lab', '4. Lab results (actual sinter)', labN ? labN + ' entered' : 'none yet', lab) +
      acc('chem', '5. Raw-material chemistry', MAT.length + ' materials' + redCount(Object.keys(state.assumed || {}).filter(function (x) { return x.indexOf('chem.') === 0; })), chemSel) +
      acc('norm', '6. Plant normals & targets', 'advanced', normals) +
      '</div>';
    h += '<button class="btn primary block" id="btnPredict" style="padding:14px;font-size:16px">Review &amp; predict →</button>' +
      '<p class="muted small" style="text-align:center">Model: Sinter Prediction Module v2 (mass balance + literature sensitivities, calibrated on ' + days.length + ' DPR days)</p>';
    m.innerHTML = h;
    renderChem(ORD[0]);
    bindInputs(m);
  }
  function normalsHtml() {
    return '<h3>Plant normals (the model reacts to the difference from these)</h3>' +
      fieldHtml('ref.bed', 'Normal bed height', 'mm', state.ref.bed, 0) + fieldHtml('ref.moist', 'Normal mix moisture', '%', state.ref.moist, 2) +
      fieldHtml('ref.alk', 'Normal sinter alkali', '%', state.ref.alk, 3) + fieldHtml('ref.coke3', 'Normal coke -3 mm', '%', state.ref.coke3, 1) +
      ynHtml('ref.cacl2', 'CaCl₂ spraying normally on', state.ref.cacl2) +
      '<h3>Targets (your SOP limits)</h3>' + Object.keys(OUT).filter(function (k) { return state.targets[k] || ['fe', 'feo', 'sio2', 'al2o3', 'mgo', 'b2', 'ti', 'rdi', 'ri', 'mps', 'm6', 'si', 'ai'].indexOf(k) >= 0; }).map(function (k) {
        var t = target(k), o = OUT[k];
        return '<div class="fld" style="grid-template-columns:1fr 70px 70px"><label>' + o.l + ' <small>' + o.u + ' · min / max</small></label>' +
          '<input inputmode="decimal" data-t="' + k + '.0" value="' + (t[0] == null ? '' : t[0]) + '"><input inputmode="decimal" data-t="' + k + '.1" value="' + (t[1] == null ? '' : t[1]) + '"></div>';
      }).join('');
  }
  function openNormals() {
    openSheet('Plant normals &amp; targets', '<p class="sub">Your plant\'s normal operating values and SOP limits. Saved on this device and used for every prediction.</p>' + normalsHtml() +
      '<p class="muted small">Machine type, speed factor (m/min per Hz) and RDI / RI / SI / AI anchors are on the <a href="#" data-go="plant">Plant level</a> page.</p>', [{ l: 'Done', cls: 'primary', fn: closeSheet }]);
    bindFields($('#sheet'));
  }
  function redCount(ids) { var n = ids.filter(function (k) { return state.assumed && state.assumed[k]; }).length; return n ? ' · <span class="asm-c">' + n + ' assumed</span>' : ''; }
  function renderChem(i) {
    var box = $('#chemBox'); if (!box) return;
    box.innerHTML = CHEMF.map(function (c) { return fieldHtml('chem.' + c[0] + '.' + i, c[1], c[2], state.chem[c[0]][i], 3); }).join('');
    bindFields(box);
  }
  function setField(id, v) {
    state.touched = true;
    var p = id.split('.');
    if (p[0] === 'use') state.inp.use[+p[1]] = v == null ? 0 : v;
    else if (p[0] === 'pct') { if (!state.pct) state.pct = pctFromUse(); state.pct[+p[1]] = v == null ? 0 : v; useFromPct(); }
    else if (id === 'totCharge') { state.totCharge = v; useFromPct(); }
    else if (p[0] === 'kgt') { if (!state.kgt) state.kgt = kgtFromUse(); state.kgt[+p[1]] = v == null ? 0 : v; useFromKgt(); }
    else if (id === 'sinterProd') { state.sinterProd = v; useFromKgt(); }
    else if (p[0] === 'lab') { if (v == null) delete state.lab[p[1]]; else state.lab[p[1]] = v; }
    else if (p[0] === 'ref') { state.ref[p[1]] = v; recal(); }
    else if (p[0] === 'chem') {
      state.chem[p[1]][+p[2]] = v == null ? 0 : v;
      var t = SD.types[+p[2]];
      if (p[1] === 'loi' && t !== 'Fuel' && +p[2] !== 6) state.chem.burn[+p[2]] = v || 0;
      recal();
    } else if (id === 'width') { if (v > 0) { state.inp.width = v; state.machine.width = v; state.machine.type = 'custom'; } }
    else { state.inp[id] = v; if (id === 'area' && v > 0 && v !== state.machine.area) { state.machine.area = v; state.machine.type = 'custom'; } }
  }
  function bindFields(root) {
    $$('[data-f]', root).forEach(function (el) {
      el.onchange = function () {
        var id = el.dataset.f, v;
        if (el.tagName === 'SELECT') {
          v = el.value; if (v === '1') v = true; else if (v === '0') v = false;
        } else v = num(el.value);
        if (id === 'prodOverride' && (v == null || v <= 0)) v = null;
        setField(id, v); delete state.src[id]; el.closest('.fld').classList.remove('changed');
        state.edited = state.edited || {}; state.edited[/^(pct|kgt)\./.test(id) ? 'use.' + id.split('.')[1] : id] = 1;
        if (state.assumed) { delete state.assumed[id]; if (/^(use|pct|kgt)\./.test(id)) delete state.assumed['use.' + id.split('.')[1]]; }
        el.closest('.fld').classList.remove('assumed'); var asl = el.closest('.fld').querySelector('.asm'); if (asl) asl.remove();
        if (/^(use|pct|kgt)\./.test(id) || id === 'totCharge' || id === 'sinterProd') { ['use.', 'pct.', 'kgt.'].forEach(function (q) { delete state.src[q + id.split('.')[1]]; }); save(); refreshBlend(); return; }
        save();
      };
    });
    $$('[data-t]', root).forEach(function (el) {
      el.onchange = function () {
        var p = el.dataset.t.split('.'); var t = state.targets[p[0]] || [null, null];
        t[+p[1]] = num(el.value); state.targets[p[0]] = t; save();
      };
    });
  }
  function totText() {
    var pm = state.blendMode === 'pct', km = state.blendMode === 'kgt', ps = pm ? pctSum() : 100, kg = km ? state.kgt : kgtFromUse();
    return f(useTotal(), 0) + ' MT/day' + (pm ? ' · <span id="pctSum" class="' + (Math.abs(ps - 100) > 0.5 ? 'bad' : '') + '">' + f(ps, 1) + ' %</span>' : '') + ' · ' + f(kgtSum(kg), 0) + ' kg/t';
  }
  function kgtNote() {
    var P = prodNow();
    if (state.blendMode !== 'kgt') return 'kg/t sinter = MT/day wet × 1000 ÷ predicted sinter ' + f(P, 0) + ' MT/day.';
    var B = +state.sinterProd || 0, d = B ? (P - B) / B * 100 : 0;
    return 'From this charge the model makes ' + f(P, 0) + ' MT/day of sinter' + (B && Math.abs(d) > 3 ? ', ' + f(Math.abs(d), 0) + ' % ' + (d > 0 ? 'above' : 'below') + ' the base you entered. Total kg/t should be about 1000 ÷ yield.' : '.');
  }
  // keep the other column, totals and the % warning in step without redrawing the page
  function refreshBlend() {
    var pm = state.blendMode === 'pct', km = state.blendMode === 'kgt', pc = pm ? state.pct : pctFromUse(), tot = useTotal(), ps = pm ? pctSum() : 100, kg = km ? null : kgtFromUse();
    MAT.forEach(function (_, i) {
      var a = $('[data-f="use.' + i + '"]'), b = $('[data-f="pct.' + i + '"]'), c = $('[data-f="kgt.' + i + '"]');
      if (a && (pm || km)) a.value = +(+state.inp.use[i] || 0).toFixed(1);
      if (b && !pm) b.value = +(+pc[i] || 0).toFixed(2);
      if (c && !km) c.value = +(+kg[i] || 0).toFixed(1);
    });
    $('#totUse').innerHTML = totText();
    if ($('#kgtNote')) $('#kgtNote').textContent = kgtNote();
    $('#acc-blend .badge').textContent = f(tot, 0) + ' MT/day wet';
    var w = $('#pctWarn');
    if (pm && Math.abs(ps - 100) > 0.5) { if (!w) $('#totUse').closest('.total').insertAdjacentHTML('afterend', '<div class="note warn small" id="pctWarn"></div>'); $('#pctWarn').textContent = 'The % add up to ' + f(ps, 1) + ' %. They are scaled to 100 % of the total wet charge.'; }
    else if (w) w.remove();
  }
  function bindInputs(m) {
    bindFields(m);
    $$('#blendSeg [data-bm]', m).forEach(function (b) { b.onclick = function () { setBlendMode(b.dataset.bm); save(); go('input'); setTimeout(function () { var a = $('#acc-blend'); if (a) { a.classList.add('open'); a.scrollIntoView({ block: 'start' }); } }, 30); }; });
    $$('[data-acc]', m).forEach(function (b) { b.onclick = function () { b.parentNode.classList.toggle('open'); }; });
    $('#chemMat').onchange = function () { renderChem(+this.value); };
    $('#chemReset').onclick = function () { state.chem = E.clone(SD.props); recal(); save(); renderChem(+$('#chemMat').value); toast('Raw-material chemistry reset'); };
    $('#labClear').onclick = function () { state.lab = {}; Object.keys(state.src).forEach(function (k) { if (k.indexOf('lab.') === 0) delete state.src[k]; }); save(); go('input'); };
    $('#upXlsx').onclick = function () { pickFile(); };
    $('#upPdf').onclick = function () { pickFile(); };
    $$('[data-part]', m).forEach(function (b) { b.onclick = function () { pickFile(null, b.dataset.part); }; });
    $$('#chemAvgSeg [data-ca]', m).forEach(function (b) { b.onclick = function () { setChemAvg(b.dataset.ca); }; });
    $('#upLink').onclick = askLink;
    $('#upTpl').onclick = function () { downloadTemplate(false); };
    $('#upMaster').onclick = function () { downloadTemplate(true); };
    $('#btnPredict').onclick = confirmPredict;
  }
  function loadDay(v) {
    var inp = state.inp;
    if (v === 'avg') {
      var a = avgDay(); inp.use = a.use; MACH.forEach(function (p, i) { inp[p.k] = a.mach[i]; }); inp.speed = hzToMpm(inp.speed);
      state.loaded = 'Plant average'; state.loadedSel = 'avg'; state.lab = {};
    } else {
      var d = days[+v]; inp.use = d.use.slice(); MACH.forEach(function (p, i) { inp[p.k] = d.mach[i]; }); inp.speed = hzToMpm(inp.speed);
      state.lab = {}; Object.keys(d.act).forEach(function (k) { if (isFinite(d.act[k])) state.lab[k] = d.act[k]; });
      state.lab.prod = d.prod; state.loaded = 'Plant day ' + d.date; state.loadedSel = v;
    }
    if (state.blendMode === 'pct' || state.blendMode === 'kgt') setBlendMode(state.blendMode);
    state.src = {}; state.matName = {}; save(); go('input'); toast('Loaded ' + state.loaded);
  }

  // ---------- upload ----------
  var ALL_TYPES = '.xlsx,.xls,.csv,.pdf,.txt,application/pdf,text/csv,text/plain,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  var PARTS = [
    { id: 'chem', ic: 'flask-conical', l: 'Raw-material analysis', s: 'chemistry of each material' },
    { id: 'blend', ic: 'scale', l: 'Blend / feed rate', s: 'MT/day, TPH or % charge' },
    { id: 'machine', ic: 'settings-2', l: 'Machine parameters', s: 'speed, bed, suction …' },
    { id: 'lab', ic: 'test-tube', l: 'Sinter lab results', s: 'Fe, FeO, TI, RDI …' }
  ];
  function partOf(k) {
    if (/^(use|pct|kgt)\./.test(k) || k === 'totCharge' || k === 'sinterProd' || k === 'blendBasis') return 'blend';
    if (k.indexOf('lab.') === 0) return 'lab';
    return 'machine';
  }
  // keep only the part the user picked
  function scopeParsed(out, scope) {
    if (!scope) return out;
    Object.keys(out.found).forEach(function (k) { if (partOf(k) !== scope) delete out.found[k]; });
    if (scope !== 'chem') { out.chem = {}; out.chem2 = null; }
    if (scope === 'chem') out.unmatched = [];
    var P = PARTS.find(function (p) { return p.id === scope; });
    out.notes = ['Upload for <' + P.l + '> only: other values in the file were ignored.'].concat((out.notes || []).filter(function (n) {
      return scope === 'chem' ? !/blend|return fines|lab results/i.test(n) : scope === 'lab' ? /lab results|could not read/i.test(n) : !/chemistry/i.test(n);
    }));
    out.scope = scope;
    return out;
  }
  function setChemAvg(v) {
    state.chemAvg = v;
    var u = state.upChem;
    if (u) {
      var src = v === 'avg2' && u.avg2 ? u.avg2 : u.last;
      Object.keys(src).forEach(function (mi) { applyChem(+mi, src[mi]); });
      recal(); toast(v === 'avg2' ? 'Chemistry: average of the last two analyses' : 'Chemistry: current analysis');
    }
    save(); go('input');
  }
  function applyChem(mi, ch) {
    Object.keys(ch).forEach(function (p) { if (state.chem[p]) state.chem[p][mi] = ch[p]; if (p === 'loi' && SD.types[mi] !== 'Fuel' && mi !== 6 && ch.burn == null) state.chem.burn[mi] = Math.max(-5, ch[p]); });
  }
  function pickFile(accept, scope) {
    var fi = $('#fileInput'); fi.value = ''; fi.setAttribute('accept', accept || ALL_TYPES); fi.multiple = true;
    fi.onchange = function () {
      var files = Array.prototype.slice.call(fi.files || []); if (!files.length) return;
      toast('Reading ' + (files.length > 1 ? files.length + ' files' : files[0].name) + ' …');
      var merged = { found: {}, chem: {}, chem2: {}, notes: [], errors: [] }, failed = [];
      var step = function (i) {
        if (i >= files.length) {
          if (failed.length) merged.notes.unshift('Could not read: ' + failed.join('; '));
          if (files.length === 1 && failed.length) { openSheet('Could not read ' + esc(files[0].name), '<div class="note bad">' + esc(failed[0]) + '</div><p class="sub">Try the Excel template (Inputs → Get template), or enter values manually.</p>', [{ l: 'Close', fn: closeSheet }]); return; }
          showParsed(scopeParsed(merged, scope), files.length > 1 ? files.length + ' files' : files[0].name); return;
        }
        var file = files[i], fname = String(file.name || 'file').replace(/^\d+_/, '');
        readBytes(file).then(function (u8) {
          if (!u8.length) throw new Error('the file is empty');
          return PR.parseBytes(u8, fname, file.type, { scope: scope }).then(function (out) {
            // day-wise / shift-wise log: the operator says which day is the current data
            if (!(out.dayInfo && out.dayInfo.days.length > 1)) return out;
            return new Promise(function (res) { dayPicker(fname, out.dayInfo, function (day) { res(day === out.dayInfo.pick ? out : PR.parseBytes(u8, fname, file.type, { scope: scope, day: day })); }); });
          });
        }).then(function (out) { mergeParsed(merged, out, fname); }, function (e) {
          failed.push(fname + ' – ' + (e && e.message ? e.message : String(e)));
        }).then(function () { step(i + 1); });
      };
      step(0);
    };
    fi.click();
  }
  function readBytes(file) {
    if (file.arrayBuffer) return file.arrayBuffer().then(function (b) { return new Uint8Array(b); }, function () { return readBytesFR(file); });
    return readBytesFR(file);
  }
  function readBytesFR(file) {
    return new Promise(function (res, rej) {
      var rd = new FileReader();
      rd.onload = function () { res(new Uint8Array(rd.result)); };
      rd.onerror = function () { rej(new Error('the phone did not let the app read it (' + ((rd.error && rd.error.name) || 'read error') + '). If it is in Google Drive or WhatsApp, save it to Downloads first, or use "From a link".')); };
      rd.readAsArrayBuffer(file);
    });
  }
  // later files win when two files give the same value; each value remembers its file
  function mergeParsed(dst, out, name) {
    Object.keys(out.found).forEach(function (k) { var v = out.found[k]; v.file = name; dst.found[k] = v; });
    Object.keys(out.chem).forEach(function (mi) { dst.chem[mi] = out.chem[mi]; dst.chem2[mi] = (out.chem2 && out.chem2[mi]) || out.chem[mi]; (dst.chemFile = dst.chemFile || {})[mi] = name; });
    dst.chemN2 = (dst.chemN2 || 0) + (out.chemN2 || 0);
    dst.notes = dst.notes.concat(out.notes || []); dst.errors = dst.errors.concat(out.errors || []);
    dst.unmatched = (dst.unmatched || []).concat((out.unmatched || []).map(function (u) { return u; }));
    if (!Object.keys(out.found).length && !Object.keys(out.chem).length) dst.notes.push(name + ': nothing recognised');
  }
  function handleBytes(bytes, name, mime, opts) {
    Promise.resolve().then(function () { return PR.parseBytes(bytes, name, mime, opts); }).then(function (out) {
      // day-wise / shift-wise log: ask which day is the current data before reading it
      if (out.dayInfo && out.dayInfo.days.length > 1 && !(opts && opts.day)) { askDay(bytes, name, mime, out.dayInfo); return; }
      Object.keys(out.found).forEach(function (k) { out.found[k].file = name; }); showParsed(out, name);
    })
      .catch(function (e) { openSheet('Could not read ' + esc(name), '<div class="note bad">' + esc(e.message || e) + '</div><p class="sub">Try the Excel template (Inputs → Get template), or enter values manually.</p>', [{ l: 'Close', fn: closeSheet }]); });
  }
  function askDay(bytes, name, mime, di) { dayPicker(name, di, function (v) { handleBytes(bytes, name, mime, { day: v }); }); }
  function dayPicker(name, di, done) {
    var D = di.days.slice().reverse(), n = di.days.length;
    var opt = D.map(function (d, i) { return '<option value="' + esc(d.key) + '"' + (i === 0 ? ' selected' : '') + '>' + esc(d.label) + (i === 0 ? ' (latest)' : '') + '</option>'; }).join('') +
      '<optgroup label="Average">' + (n >= 3 ? '<option value="avg3">Average of the last 3 days</option>' : '') + (n >= 7 ? '<option value="avg7">Average of the last 7 days</option>' : '') + '<option value="avgall">Average of all ' + n + ' days</option></optgroup>';
    openSheet('Which day is the current data?', '<p class="sub"><b>' + esc(name) + '</b> is a day-wise log with <b>' + n + '</b> days (' + esc(di.days[0].label) + ' – ' + esc(di.days[n - 1].label) + ' on sheet "' + esc(di.sheet) + '"). Pick the day (or shift) to feed as the current inputs. Blend, production, machine parameters, sinter analysis and any raw-material analysis of that day are all read.</p>' +
      '<select class="sel" id="dayPick" style="width:100%">' + opt + '</select>',
      [{ l: 'Read this day', cls: 'primary', fn: function () { var v = $('#dayPick').value; closeSheet(); done(v); } }]);
  }
  function askLink() {
    openSheet('Load from a link', '<p class="sub">Paste a link to an Excel / CSV / PDF file or a web page that lists the values. Google Sheets, Google Drive and Dropbox share links are converted automatically (the file must be shared as "anyone with the link").</p>' +
      '<input class="link-in" id="linkIn" type="url" placeholder="https://…" value="' + esc(state.lastLink || '') + '">',
      [{ l: 'Cancel', cls: 'ghost', fn: closeSheet }, { l: 'Fetch', cls: 'primary', fn: function () {
        var u = $('#linkIn').value.trim(); if (!/^https?:\/\//i.test(u)) { toast('Enter a full http(s) link'); return; }
        state.lastLink = u; closeSheet(); toast('Downloading …');
        PR.fetchLink(u).then(function (r) { var nm = (r.url || u).split('?')[0].split('/').pop() || 'link'; handleBytes(r.bytes, decodeURIComponent(nm), r.mime); })
          .catch(function (e) { openSheet('Download failed', '<div class="note bad">' + esc(e.message) + '</div><p class="sub">Check the phone is online and the link is public.</p>', [{ l: 'Close', fn: closeSheet }]); });
      } }]);
  }
  function fieldName(k) {
    var p = k.split('.');
    if (p[0] === 'use') return { g: 'Raw-material blend', l: MAT[+p[1]], u: 'MT/day', cur: state.inp.use[+p[1]], d: 1 };
    if (p[0] === 'pct') return { g: 'Raw-material blend', l: MAT[+p[1]], u: '% of charge', cur: (state.blendMode === 'pct' ? state.pct : pctFromUse())[+p[1]], d: 2 };
    if (p[0] === 'kgt') return { g: 'Raw-material blend', l: MAT[+p[1]], u: 'kg/t sinter', cur: (state.blendMode === 'kgt' ? state.kgt : kgtFromUse())[+p[1]], d: 1 };
    if (k === 'sinterProd') return { g: 'Raw-material blend', l: 'Sinter production (base for kg/t)', u: 'MT/day', cur: state.blendMode === 'kgt' ? state.sinterProd : prodNow(), d: 0 };
    if (k === 'totCharge') return { g: 'Raw-material blend', l: 'Total wet charge', u: 'MT/day', cur: useTotal(), d: 0 };
    if (k === 'blendBasis') return { g: 'Raw-material blend', l: 'Blend entered as', u: '', cur: state.blendMode === 'pct' ? '% of charge' : state.blendMode === 'kgt' ? 'kg/t sinter' : 'MT/day', d: 0 };
    if (p[0] === 'lab') { var L = LAB.find(function (x) { return x.k === p[1]; }); return { g: 'Lab results (sinter)', l: L.l, u: L.u, cur: state.lab[p[1]], d: L.d }; }
    if (k === 'width') return { g: 'Machine parameters', l: 'Pallet width', u: 'm', cur: state.machine.width, d: 2 };
    var M = MACH.find(function (x) { return x.k === k; }); if (M) return { g: 'Machine parameters', l: M.l, u: M.u, cur: state.inp[k], d: M.d };
    var Q = PROC.find(function (x) { return x.k === k; }); return { g: 'Process & other', l: Q.l, u: Q.u || '', cur: state.inp[k], d: Q.d || 0 };
  }
  function showParsed(out, name) {
    var sp = out.found.speed;
    if (sp && typeof sp.value === 'number' && (sp.value > 8 || /hz/i.test(sp.label))) {
      out.notes.push('Machine speed ' + f(sp.value, 2) + ' looks like drive frequency (Hz); converted to ' + f(hzToMpm(sp.value), 2) + ' m/min with your machine factor ' + spdK() + ' m/min per Hz (change it on the Plant level page).');
      sp.value = hzToMpm(sp.value);
    }
    // blend basis: MT/day or % of charge (file can say which with "Blend entered as")
    var F = out.found, bb = F.blendBasis && F.blendBasis.value; delete F.blendBasis;
    var U = Object.keys(F).filter(function (k) { return k.indexOf('use.') === 0; }), P = Object.keys(F).filter(function (k) { return k.indexOf('pct.') === 0; }), KT = Object.keys(F).filter(function (k) { return k.indexOf('kgt.') === 0; });
    if (KT.length && (bb === 'kgt' || (!U.length && !P.length))) { U.concat(P).forEach(function (k) { delete F[k]; }); U = []; P = []; if (F.totCharge) delete F.totCharge; }
    else if (KT.length) { KT.forEach(function (k) { delete F[k]; }); if (F.sinterProd) delete F.sinterProd; }
    if (F.sinterProd && !KT.length) delete F.sinterProd;
    if (bb === 'pct' && P.length) U.forEach(function (k) { delete F[k]; });
    else if (U.length && P.length) { P.forEach(function (k) { delete F[k]; }); if (F.totCharge) delete F.totCharge; }
    else if (!P.length && U.length >= 3) {
      var us = U.reduce(function (a, k) { return a + (+F[k].value || 0); }, 0);
      if (U.every(function (k) { return F[k].value >= 0 && F[k].value <= 100; }) && us >= 95 && us <= 105) {
        U.forEach(function (k) { F['pct.' + k.slice(4)] = F[k]; delete F[k]; });
        out.notes.push('The blend values add up to ' + f(us, 1) + ', so they were read as % of the wet charge.');
      }
    }
    if (F.totCharge && !Object.keys(F).some(function (k) { return k.indexOf('pct.') === 0; })) delete F.totCharge;
    var keys = Object.keys(out.found), chemN = Object.keys(out.chem).length;
    var useAvg = state.chemAvg === 'avg2' && out.chem2 && out.chemN2, CH = useAvg ? out.chem2 : out.chem;
    var UM = (out.unmatched || []).filter(function (u) { return !keys.some(function (k) { return out.found[k].label === u.label; }); });
    if (!keys.length && !chemN && !UM.length) {
      openSheet('Nothing recognised in ' + esc(name), '<div class="note warn">No known labels with values were found.</div><p class="sub">Labels such as "Iron ore fines 60+", "Grade B", "Machine speed", "Bed height", "FeO", "RDI" next to a number are recognised. Download the template from the Inputs page to see the expected layout.</p>', [{ l: 'Close', fn: closeSheet }]);
      return;
    }
    var groups = {};
    keys.forEach(function (k) { var fn = fieldName(k); (groups[fn.g] = groups[fn.g] || []).push({ k: k, fn: fn, v: out.found[k] }); });
    var order = ['Raw-material blend', 'Machine parameters', 'Process & other', 'Lab results (sinter)'];
    var body = (!keys.length && !chemN ? '<div class="note warn">None of the labels in <b>' + esc(name) + '</b> matched a known input automatically. Pick below what each one is, and the app will remember it for next time.</div>' : '') + '<p class="sub">Found <b>' + keys.length + '</b> values' + (chemN ? ' and chemistry for <b>' + chemN + '</b> raw materials' : '') + ' in <b>' + esc(name) + '</b>. Untick anything that is wrong, then confirm.</p>';
    out.notes.forEach(function (n) { body += '<div class="note">' + esc(n).replace(/&lt;(.+?)&gt;/, '<b>$1</b>') + '</div>'; });
    var LB = {}; keys.forEach(function (k) { if (k.indexOf('lab.') === 0) LB[k.slice(4)] = out.found[k].value; });
    analysisChecks(CH, LB).filter(function (c) { return c.cls !== 'ok'; }).forEach(function (c) { body += '<div class="note ' + c.cls + '"><b>Check ' + esc(c.who) + ':</b> ' + c.text + '</div>'; });
    order.forEach(function (g) {
      if (!groups[g]) return;
      body += '<h3 style="margin:12px 0 2px">' + g + '</h3>';
      groups[g].forEach(function (it) {
        var v = it.v.value, shown = typeof v === 'boolean' ? (v ? 'Yes' : 'No') : (typeof v === 'number' ? f(v, it.fn.d) : v);
        var cur = it.fn.cur, curS = typeof cur === 'boolean' ? (cur ? 'Yes' : 'No') : (cur == null ? 'blank' : f(cur, it.fn.d));
        var warn = '';
        if (it.k.indexOf('use.') === 0 && (v < 0 || v > 20000)) warn = ' ⚠ unusual';
        if (it.k.indexOf('lab.') === 0 && typeof v === 'number' && v < 0) warn = ' ⚠';
        body += '<label class="chk"><input type="checkbox" checked data-k="' + it.k + '"><span class="k">' + esc(it.fn.l) + '<small>read from "' + esc(it.v.label) + '"' + (it.v.file && it.v.file !== name ? ' in ' + esc(it.v.file) : '') + ' · now ' + curS + ' ' + esc(it.fn.u) + '</small></span><span class="v">' + shown + ' <small class="muted">' + esc(it.fn.u) + '</small>' + warn + '</span></label>';
      });
    });
    if (chemN) {
      body += '<h3 style="margin:12px 0 2px">Raw-material chemistry</h3>' + (out.chemN2 ? '<p class="muted small" style="margin:0">' + (useAvg ? 'Average of the last two analyses' : 'Current (latest) analysis') + ' · change under Inputs → Load</p>' : '');
      Object.keys(CH).forEach(function (mi) {
        var c = CH[mi];
        body += '<label class="chk"><input type="checkbox" checked data-chem="' + mi + '"><span class="k">' + esc(MAT[mi]) + (out.matNames && out.matNames[mi] ? ' <span class="pn">' + esc(out.matNames[mi]) + '</span>' : '') + '<small>' + Object.keys(c).map(function (k) { return k + ' ' + f(c[k], 2); }).join(' · ') + '</small></span></label>';
      });
    }
    var isBl = function (k) { return /^(use|pct|kgt)\./.test(k); };
    var blendFound = keys.some(isBl);
    var pSum = keys.filter(function (k) { return k.indexOf('pct.') === 0; }).reduce(function (a, k) { return a + (+out.found[k].value || 0); }, 0);
    if (pSum && Math.abs(pSum - 100) > 0.5) body += '<div class="note warn">The blend % in the file add up to ' + f(pSum, 1) + ' %. They will be scaled to 100 %.</div>';
    if (keys.some(function (k) { return k.indexOf('pct.') === 0; })) body += '<div class="note">Blend is given as <b>% of wet charge</b>. The Inputs page switches to % entry' + (out.found.totCharge ? '' : ' and uses the current total wet charge of ' + f(useTotal(), 0) + ' MT/day (change it there)') + '.</div>';
    if (keys.some(function (k) { return k.indexOf('kgt.') === 0; })) body += '<div class="note">Blend is given as <b>kg per ton of sinter</b>. The Inputs page switches to kg/t entry and turns it into MT/day with a sinter production of ' + f(out.found.sinterProd ? out.found.sinterProd.value : out.found['lab.prod'] ? out.found['lab.prod'].value : (state.blendMode === 'kgt' ? state.sinterProd : prodNow()), 0) + ' MT/day' + (out.found.sinterProd || out.found['lab.prod'] ? ' from the file' : ' (change it there)') + '.</div>';
    var aiBl = UM.slice(0, 120).filter(function (u) { var g = smartGuess(u, out.scope, out.found); return g[0] && g[0].conf >= 0.55 && isBl(g[0].key); }).length;
    if (blendFound || aiBl) body += '<label class="chk"><input type="checkbox" id="zeroOthers"' + (keys.filter(isBl).length + aiBl >= 3 ? ' checked' : '') + '><span class="k">Set materials not in the file to 0<small>Untick to keep their current values</small></span></label>';
    if (UM.length) {
      var nAi = UM.slice(0, 120).filter(function (u) { var g = smartGuess(u, out.scope, out.found); return g[0] && g[0].conf >= 0.55; }).length;
      if (nAi) body += '<div class="note ai-note">' + ic('sparkles') + ' <b>Smart match</b> recognised ' + nAi + ' of ' + UM.length + ' unknown labels (shortcuts and other plants\' names) and pre-selected them below in blue. Check each one; your choice is remembered for next time.</div>';
      body += '<details class="umap"' + (keys.length && UM.length > 15 && !nAi ? '' : ' open') + '><summary><b>Read but not used: ' + UM.length + ' rows</b> – tap if any of them is an input</summary><p class="muted small">These numbers are in the file but match no app input (for example design data, cooler speed, O₂). Choose the matching input for any row you want to use. Your choice is remembered for files with the same label.</p>' +
        UM.slice(0, 120).map(function (u, ix) {
          var sg = smartGuess(u, out.scope, out.found), top = sg[0], pre = top && top.conf >= 0.55, opts = fieldOpts(out.scope);
          if (pre) opts = opts.replace('value="' + top.key + '"', 'value="' + top.key + '" selected');
          return '<div class="um' + (pre ? ' ai' : '') + '"><div><b>' + esc(u.label) + '</b><small class="muted"> = ' + f(u.value, 3) + ' · ' + esc(u.src) + '</small>' +
            (sg.length ? '<div class="ai-g">' + ic('sparkles') + (pre ? 'Smart match ' + Math.round(top.conf * 100) + ' %: <b>' + esc(top.label) + '</b>' : 'Possible: ') + sg.slice(pre ? 1 : 0).map(function (x) { return ' <button type="button" class="ai-alt" data-um-pick="' + ix + '" data-k="' + esc(x.key) + '">' + esc(x.label) + ' ' + Math.round(x.conf * 100) + ' %</button>'; }).join('') + '</div>' : '') +
            '</div><select class="sel" data-um="' + ix + '">' + opts + '</select></div>';
        }).join('') + '</details>';
    }
    body += '<label class="chk"><input type="checkbox" id="saveMaster"' + (/^\d+ files$/.test(name) ? ' checked' : '') + '><span class="k">Also save a master Excel<small>Every input after this upload in one file (blend, machine, lab, raw-material analysis), with the file each value came from. Upload it again to load everything at once.</small></span></label>';
    out._um = UM;
    setTimeout(function () { $$('#sheet [data-um-pick]').forEach(function (b) { b.onclick = function () { var sel = $('#sheet select[data-um="' + b.dataset.umPick + '"]'); if (sel) { sel.value = b.dataset.k; sel.closest('.um').classList.add('ai'); } }; }); }, 0);
    openSheet('Confirm uploaded values', body, [
      { l: 'Cancel', cls: 'ghost', fn: closeSheet },
      { l: 'Apply only', fn: function () { applyParsed(out, name); closeSheet(); go('input'); toast('Values applied – review and predict'); } },
      { l: 'Confirm & predict', cls: 'primary', fn: function () { applyParsed(out, name); closeSheet(); doPredict(); } }
    ]);
  }
  var MCANDS = null;
  function matchCands() {
    if (MCANDS) return MCANDS;
    var A = (PR && PR.aliases) || {}, C = [];
    omap(function (n, i) {
      C.push({ key: 'use.' + i, label: n, aliases: A['use.' + i] });
      C.push({ key: 'pct.' + i, label: n + ' %', aliases: (A['use.' + i] || []).map(function (a) { return a + ' %'; }) });
      C.push({ key: 'kgt.' + i, label: n + ' kg/t', aliases: (A['use.' + i] || []).map(function (a) { return a + ' kg/t'; }) });
    });
    C.push({ key: 'totCharge', label: 'Total wet charge', aliases: A.totCharge }, { key: 'sinterProd', label: 'Sinter production (base for kg/t)', aliases: A.sinterProd });
    MACH.forEach(function (p) { C.push({ key: p.k, label: p.l, aliases: (A[p.k] || []).concat([p.l + ' ' + p.u]) }); });
    C.push({ key: 'width', label: 'Pallet width', aliases: A.width });
    PROC.filter(function (p) { return !p.type; }).forEach(function (p) { C.push({ key: p.k, label: p.l, aliases: A[p.k] }); });
    LAB.forEach(function (p) { C.push({ key: 'lab.' + p.k, label: 'Sinter ' + p.l, aliases: (A['lab.' + p.k] || []).map(function (a) { return 'sinter ' + a; }).concat(A['lab.' + p.k] || []) }); });
    return (MCANDS = C);
  }
  // guesses for an unknown row; inputs the file already gives are left out so a guess never replaces them
  function smartGuess(u, scope, found) {
    if (!window.SinterMatch) return [];
    if (!u._sg) u._sg = SinterMatch.suggest(u.label, u.value, matchCands());
    return u._sg.filter(function (x) {
      var n = x.key.replace(/^(use|pct|kgt)\./, '');
      if (found && (found[x.key] || (/^(use|pct|kgt)\./.test(x.key) && (found['use.' + n] || found['pct.' + n] || found['kgt.' + n])))) return false;
      // the file already has its blend table: other rows (design data, outputs) are not blend materials
      if (found && /^(use|pct|kgt)\./.test(x.key) && Object.keys(found).some(function (k) { return /^(use|pct|kgt)\./.test(k); })) return false;
      return !scope || partOf(x.key) === scope;
    });
  }
  function fieldOpts(scope) {
    if (!scope) return FIELD_OPTS;
    var d = document.createElement('div'); d.innerHTML = '<select>' + FIELD_OPTS + '</select>';
    $$('option', d).forEach(function (o) { if (o.value && partOf(o.value) !== scope) o.remove(); });
    $$('optgroup', d).forEach(function (g) { if (!g.children.length) g.remove(); });
    return d.firstChild.innerHTML;
  }
  var FIELD_OPTS = '<option value="">Ignore</option>' +
    '<optgroup label="Raw-material blend (MT/day wet)">' + omap(function (n, i) { return '<option value="use.' + i + '">' + esc(n) + '</option>'; }).join('') + '<option value="totCharge">Total wet charge</option></optgroup>' +
    '<optgroup label="Raw-material blend (% of charge)">' + omap(function (n, i) { return '<option value="pct.' + i + '">' + esc(n) + ' %</option>'; }).join('') + '</optgroup>' +
    '<optgroup label="Raw-material blend (kg/t sinter)">' + omap(function (n, i) { return '<option value="kgt.' + i + '">' + esc(n) + ' kg/t</option>'; }).join('') + '<option value="sinterProd">Sinter production (base for kg/t)</option></optgroup>' +
    '<optgroup label="Machine">' + MACH.map(function (p) { return '<option value="' + p.k + '">' + esc(p.l) + ' (' + p.u + ')</option>'; }).join('') + '<option value="width">Pallet width (m)</option></optgroup>' +
    '<optgroup label="Process">' + PROC.filter(function (p) { return !p.type; }).map(function (p) { return '<option value="' + p.k + '">' + esc(p.l) + '</option>'; }).join('') + '</optgroup>' +
    '<optgroup label="Lab result (sinter)">' + LAB.map(function (p) { return '<option value="lab.' + p.k + '">' + esc(p.l) + '</option>'; }).join('') + '</optgroup>';
  function applyParsed(out, name) {
    // rows the user mapped by hand
    $$('#sheet [data-um]').forEach(function (sel) {
      var k = sel.value, u = out._um && out._um[+sel.dataset.um]; if (!k || !u) return;
      var v = u.value; if (k === 'speed' && (v > 8 || /hz/i.test(u.label))) v = hzToMpm(v);
      out.found[k] = { value: v, label: u.label, src: u.src, file: u.src.split(' / ')[0] };
      state.aliasMap[u.label] = k;
      var cb = document.createElement('input'); cb.type = 'checkbox'; cb.checked = true; cb.dataset.k = k; cb.style.display = 'none'; $('#sheet').appendChild(cb);
    });
    PR.setUserAliases(state.aliasMap);
    var zero = $('#zeroOthers') && $('#zeroOthers').checked;
    var picked = $$('#sheet [data-k]').filter(function (c) { return c.checked; }).map(function (c) { return c.dataset.k; });
    var pk = picked.filter(function (k) { return k.indexOf('pct.') === 0; }), kk = picked.filter(function (k) { return k.indexOf('kgt.') === 0; });
    if (kk.length) {
      if (state.blendMode !== 'kgt') setBlendMode('kgt');
      if (picked.indexOf('sinterProd') < 0 && picked.indexOf('lab.prod') >= 0 && out.found['lab.prod'].value > 0) state.sinterProd = out.found['lab.prod'].value;
      if (zero) for (var q = 0; q < MAT.length; q++) if (picked.indexOf('kgt.' + q) < 0) state.kgt[q] = 0;
      picked.sort(function (a, b) { return (a === 'sinterProd' ? 0 : 1) - (b === 'sinterProd' ? 0 : 1); });
    } else if (pk.length) {
      if (state.blendMode !== 'pct') setBlendMode('pct');
      if (zero) for (var j = 0; j < MAT.length; j++) if (picked.indexOf('pct.' + j) < 0) state.pct[j] = 0;
    } else if (picked.some(function (k) { return k.indexOf('use.') === 0; })) state.blendMode = 'mt';
    if (zero) for (var i = 0; i < MAT.length; i++) if (picked.indexOf('use.' + i) < 0 && picked.indexOf('pct.' + i) < 0 && picked.indexOf('kgt.' + i) < 0) { state.inp.use[i] = 0; }
    if (kk.length) useFromKgt();
    if (picked.some(function (k) { return k.indexOf('lab.') === 0; })) state.lab = {};
    picked.forEach(function (k) { setField(k, out.found[k].value); state.src[k] = out.found[k].file || name; });
    // the plant's own material names, shown next to the app's material slots
    state.matName = state.matName || {};
    var nmOf = function (i) { return (out.matNames && out.matNames[i]) || ['use.', 'pct.', 'kgt.'].map(function (q) { return out.found[q + i] && out.found[q + i].label; }).filter(Boolean)[0]; };
    if (zero && picked.some(function (k) { return /^(use|pct|kgt)\./.test(k); })) state.matName = {};
    picked.forEach(function (k) { if (/^(use|pct|kgt)\./.test(k)) { var i = +k.split('.')[1], nm = nmOf(i); if (nm && PR.norm(nm) !== PR.norm(MAT[i])) state.matName[i] = nm; } });
    var useAvg = state.chemAvg === 'avg2' && out.chem2 && out.chemN2, keep = { last: {}, avg2: out.chemN2 ? {} : null, file: name, files: {} };
    $$('#sheet [data-chem]').filter(function (c) { return c.checked; }).forEach(function (c) {
      var mi = +c.dataset.chem;
      applyChem(mi, useAvg ? out.chem2[mi] : out.chem[mi]);
      if (out.matNames && out.matNames[mi] && !state.matName[mi]) state.matName[mi] = out.matNames[mi];
      keep.last[mi] = out.chem[mi]; keep.files[mi] = (out.chemFile && out.chemFile[mi]) || name; if (keep.avg2) keep.avg2[mi] = out.chem2[mi] || out.chem[mi];
    });
    if (Object.keys(keep.last).length) state.upChem = keep;
    recal(); state.loaded = 'Upload: ' + name; save();
    if ($('#saveMaster') && $('#saveMaster').checked) { try { gapFill(); downloadTemplate(true); } catch (e) { toast('Master Excel failed: ' + e.message); } }
  }
  function b64(u8) { var s = '', CH = 0x8000; for (var i = 0; i < u8.length; i += CH) s += String.fromCharCode.apply(null, u8.subarray(i, i + CH)); return btoa(s); }
  function saveBytes(name, u8, mime) {
    if (window.AndroidBridge && AndroidBridge.saveFile) {
      var r = AndroidBridge.saveFile(name, b64(u8), mime);
      if (/^ERROR/.test(r) || (window.SP_PLATFORM && r !== 'Cancelled')) toast(/^ERROR/.test(r) ? r : 'Saved to ' + r);
      return;
    }
    var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([u8], { type: mime })); a.download = name; document.body.appendChild(a); a.click(); a.remove();
    toast('Downloaded ' + name);
  }
  /* One workbook with every current input: the template the app reads back exactly, and the master file of
     several uploads merged (each value says where it came from, assumed values are marked). */
  function ascii(t) { return String(t).replace(/₂/g, '2').replace(/₃/g, '3').replace(/₄/g, '4').replace(/−/g, '-'); }
  function srcOf(k) {
    if (state.assumed && state.assumed[k]) return 'ASSUMED (red in app): ' + state.assumed[k];
    if (state.src && state.src[k]) return 'from ' + state.src[k];
    if (state.edited && state.edited[k]) return 'entered by hand';
    return '';
  }
  function downloadTemplate(master) {
    master = master === true || (master && master.files);
    var inp = state.inp, wb = XLSX.utils.book_new();
    var pc = pctFromUse(), pm = state.blendMode === 'pct';
    var kg = state.blendMode === 'kgt' ? state.kgt : kgtFromUse(), sp = state.blendMode === 'kgt' ? state.sinterProd : Math.round(prodNow());
    var bsrc = function (i) { return srcOf('use.' + i) || (state.src['pct.' + i] ? 'from ' + state.src['pct.' + i] : state.src['kgt.' + i] ? 'from ' + state.src['kgt.' + i] : ''); };
    var blend = [['RAW-MATERIAL BLEND'], ['Blend entered as', pm ? '% of charge' : state.blendMode === 'kgt' ? 'kg/t sinter' : 'MT/day', 'Write "MT/day" to use column B, "%" for column C (% of wet charge) or "kg/t" for column D (kg wet per ton of sinter)'], [],
      ['Raw material', 'MT/day (wet)', '% of charge', 'kg/t sinter', 'Plant name', 'Source']].concat(omap(function (n, i) { return [n, +(+inp.use[i]).toFixed(2), +(+pc[i]).toFixed(2), +(+kg[i]).toFixed(1), (state.matName && state.matName[i]) || '', bsrc(i)]; }))
      .concat([[], ['Total wet charge', Math.round(useTotal()), 'MT/day (used with the % column)'], ['Sinter production base', sp, 'MT/day (used with the kg/t column)']]);
    var mach = [['MACHINE & PROCESS PARAMETERS'], ['Parameter', 'Value', 'Unit', 'Source']].concat(MACH.map(function (p) { return [ascii(p.l), +(+inp[p.k]).toFixed(3), ascii(p.u), srcOf(p.k)]; }))
      .concat(PROC.filter(function (p) { return p.k !== 'biasOn'; }).map(function (p) { var v = inp[p.k]; return [ascii(p.l), typeof v === 'boolean' ? (v ? 'Yes' : 'No') : (v == null ? '' : v), ascii(p.u || ''), srcOf(p.k)]; }))
      .concat([['Pallet width', +(+(state.machine.width || inp.width || 0)).toFixed(2), 'm', state.src.width ? 'from ' + state.src.width : '']]);
    var lab = [['LAB RESULTS - ACTUAL SINTER (leave blank if not available)'], ['Parameter', 'Value', 'Unit', 'Source']].concat(LAB.map(function (p) { return [ascii(p.l), state.lab[p.k] == null ? '' : state.lab[p.k], ascii(p.u), state.lab[p.k] == null ? '' : srcOf('lab.' + p.k)]; }));
    var CH = { moist: 'Moisture %', fe: 'Fe %', feo: 'FeO %', sio2: 'SiO2 %', al2o3: 'Al2O3 %', cao: 'CaO %', mgo: 'MgO %', mno: 'MnO %', loi: 'LOI %', fc: 'Fixed C %', burn: 'Burn-off %', mps: 'MPS mm', m1: '-1 mm %', p3: '+3 mm %', s: 'S %', p: 'P %', tio2: 'TiO2 %' };
    var chem = [['RAW-MATERIAL CHEMISTRY (dry basis)'], ['Material'].concat(CHEMF.map(function (c) { return CH[c[0]] || ascii(c[1]); })).concat(['Source'])]
      .concat(omap(function (n, i) {
        var asm = CHEMF.filter(function (c) { return state.assumed && state.assumed['chem.' + c[0] + '.' + i]; }).map(function (c) { return ascii(c[1]); });
        var up = state.upChem && state.upChem.last && state.upChem.last[i] ? 'from ' + ((state.upChem.files && state.upChem.files[i]) || state.upChem.file) : '';
        return [n].concat(CHEMF.map(function (c) { return +(+state.chem[c[0]][i]).toFixed(4); })).concat([[up, asm.length ? 'ASSUMED: ' + asm.join(', ') : ''].filter(Boolean).join(' · ')]);
      }));
    var sheets = [['Blend', blend], ['Machine', mach], ['Lab_Results', lab], ['RM_Chemistry', chem]];
    if (master) {
      var A = state.assumed || {}, files = [];
      Object.keys(state.src || {}).forEach(function (k) { if (files.indexOf(state.src[k]) < 0) files.push(state.src[k]); });
      if (state.upChem) Object.keys(state.upChem.files || {}).forEach(function (i) { var x = state.upChem.files[i]; if (files.indexOf(x) < 0) files.push(x); });
      files = files.filter(function (x) { return !/^\d+ files$/.test(x); });
      var info = [['MASTER INPUT FILE – Sinter Predict ' + ((window.SP_CONFIG && SP_CONFIG.version) || '')], ['Made ' + new Date().toLocaleString() + ' from: ' + (state.loaded || '')], [],
        ['Files merged into this master']].concat(files.length ? files.map(function (x) { return ['• ' + x]; }) : [['• (none – values entered in the app)']])
        .concat([[], ['Values the app assumed (shown in red in the app; replace them with your plant data)']])
        .concat(Object.keys(A).length ? Object.keys(A).map(function (k) { return ['• ' + k + ': ' + A[k]]; }) : [['• none']])
        .concat([[], ['Upload this file again (Inputs → Upload all inputs in one go → Excel) to load every value at once.']]);
      sheets.push(['Sources', info]);
    }
    sheets.forEach(function (s) {
      var ws = XLSX.utils.aoa_to_sheet(s[1]); ws['!cols'] = [{ wch: 46 }, { wch: 14 }, { wch: 12 }, { wch: 12 }, { wch: 28 }, { wch: 40 }]; XLSX.utils.book_append_sheet(wb, ws, s[0]);
    });
    var u8 = new Uint8Array(XLSX.write(wb, { type: 'array', bookType: 'xlsx' }));
    var d = new Date(), stamp = d.getFullYear() + ('0' + (d.getMonth() + 1)).slice(-2) + ('0' + d.getDate()).slice(-2) + '_' + ('0' + d.getHours()).slice(-2) + ('0' + d.getMinutes()).slice(-2);
    saveBytes(master ? 'Sinter_Master_Inputs_' + stamp + '.xlsx' : 'Sinter_Input_Template.xlsx', u8, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  }

  // ---------- predict ----------
  function confirmPredict() {
    gapFill();
    var inp = state.inp, tot = inp.use.reduce(function (a, b) { return a + (+b || 0); }, 0);
    var warn = [];
    if (tot <= 0) warn.push('The blend is empty – enter raw-material usage first.');
    var fuel = inp.use[12] + inp.use[13] + inp.use[14];
    if (tot > 0 && fuel <= 0) warn.push('No fuel (coke / anthracite) in the blend.');
    if (inp.speed <= 0) warn.push('Machine speed is zero.');
    var top = inp.use.map(function (u, i) { return [u, i]; }).filter(function (x) { return x[0] > 0; }).sort(function (a, b) { return b[0] - a[0]; });
    var labN = Object.keys(state.lab).length;
    var body = (warn.length ? warn.map(function (w) { return '<div class="note bad">' + w + '</div>'; }).join('') : '') + assumedNote() +
      '<p class="sub">Please confirm the scenario. Source: <b>' + esc(state.loaded) + '</b></p>' +
      '<table class="t"><tr><th>Blend</th><th class="n">MT/day</th><th class="n">%</th></tr>' +
      top.map(function (x) { return '<tr><td>' + esc(MAT[x[1]]) + '</td><td class="n">' + f(x[0], 1) + '</td><td class="n">' + f(x[0] / tot * 100, 1) + '</td></tr>'; }).join('') +
      '<tr><td><b>Total wet charge</b></td><td class="n"><b>' + f(tot, 0) + '</b></td><td class="n">100</td></tr></table>' +
      '<h3>Machine & process</h3><table class="t">' + MACH.concat(PROC.slice(0, 5)).map(function (p) { return '<tr><td>' + p.l + '</td><td class="n">' + f(inp[p.k], p.d) + ' ' + p.u + '</td></tr>'; }).join('') +
      '<tr><td>CaCl₂ spraying</td><td class="n">' + (inp.cacl2 ? 'Yes' : 'No') + '</td></tr><tr><td>Production basis</td><td class="n">' + inp.basis + '</td></tr></table>' +
      '<div class="note">' + (labN ? labN + ' lab results entered – they will be compared with the prediction.' : 'No lab results entered – the Lab vs Predicted page will ask for them.') + '</div>';
    openSheet('Confirm inputs', body, [{ l: 'Edit', cls: 'ghost', fn: closeSheet }, { l: 'Confirm & predict', cls: 'primary', fn: function () { if (tot <= 0) { toast('Blend is empty'); return; } closeSheet(); doPredict(); } }]);
  }
  function doPredict() {
    gapFill();
    if (state.result && state.ranAt) state.prevInp = state.lastRunInp || null;
    state.result = run(state.inp);
    state.lastRunInp = E.clone(state.inp);
    state.ranAt = new Date().toLocaleString('en-IN');
    if (window.SinterDash) SinterDash.record();
    save(); go('results');
  }

  // ---------- page 2: results ----------
  function pageResults(m) {
    var r = state.result, rm = E.rmse(cal, state.ref, state.inp.biasOn);
    var kp = ['feo', 'ti', 'rdi', 'ri', 'b2', 'mps', 'fe', 'sio2', 'prod'];
    var h = '<div class="card hero res-hero"><div class="row"><div><h2>Predicted sinter quality</h2><p class="sub" style="margin:0">' + esc(state.loaded) + ' · ' + esc(state.ranAt || '') + '</p></div></div>' +
      (isDemo() ? '<p style="margin:8px 0 0"><span class="illus">ILLUSTRATIVE</span> <span class="sub">Result from the built-in demo data, not your plant.</span></p>' : '') + '<p class="sub" style="margin-top:6px">Wet charge ' + f(r.wet, 0) + ' MT/day' + (r.ownRFwet > 0 ? ' + return fines ' + f(r.ownRFwet, 0) : '') + ' → sinter ' + f(r.prod, 0) + ' MT/day net · ' + biasLabel() + '</p></div>';
    var mbTop = window.SinterBuilder ? SinterBuilder.resultsTop() : '';
    h += mbTop;
    if (!mbTop) h += assumedNote(true).replace('</div>', ' <a href="#" data-go="input">Open Inputs</a></div>');
    h += '<div class="card gauges">' + ['feo', 'ti', 'b2', 'rdi'].map(function (k) { return gauge(k, r[k]); }).join('') + '</div>';
    h += '<div class="kpis" style="margin-bottom:12px">' + kp.map(function (k) {
      var o = OUT[k], st = status(k, r[k]);
      return '<div class="kpi ' + st[0] + '"><div class="l">' + o.l.replace(/ \(.*\)/, '') + '</div><div class="v"><span data-count="' + r[k] + '" data-d="' + (k === 'prod' ? 0 : o.d) + '">' + f(r[k], k === 'prod' ? 0 : o.d) + '</span> <span class="u">' + o.u + '</span></div><div class="s">' + chip(st) + ' <span class="muted">' + tgtText(k) + '</span></div></div>';
    }).join('') + '</div>';
    var rows = '', grp = null;
    OUTS.forEach(function (o) {
      if (o.length === 2) { rows += '<tr class="grp"><td colspan="3">' + o[0] + '. ' + o[1] + '</td></tr>'; return; }
      var k = o[0], st = status(k, r[k]), ref = REF_KEY[k] ? r.M[REF_KEY[k]] : null;
      var sub = [];
      if (rm[k]) sub.push('± ' + f(rm[k], OUT[k].d) + ' typical');
      if (ref != null && isFinite(ref)) sub.push('ref ' + f(ref, OUT[k].d) + ' (' + sgn(r[k] - ref, OUT[k].d) + ')');
      rows += '<tr><td>' + o[1] + ' <span class="muted small">' + o[2] + '</span>' + (sub.length ? '<div class="muted small">' + sub.join(' · ') + '</div>' : '') + '</td><td class="n"><b>' + f(r[k], o[3]) + '</b>' + (tgtText(k) !== '–' ? '<div class="muted small">' + tgtText(k) + '</div>' : '') + '</td><td class="n">' + (st[0] === 'na' ? '' : chip(st)) + '</td></tr>';
    });
    h += '<details class="card allp"><summary><b>All predicted parameters</b><span class="muted small">full list with plant reference · tap to open</span></summary><p class="sub">"ref" = plant average; "typical" = day-level back-test error.</p><div class="tbl-wrap"><table class="t"><tr><th>Parameter</th><th class="n">Predicted / target</th><th class="n">Status</th></tr>' + rows + '</table></div></details>';
    h += '<div class="note">Chemistry is a mass balance of your blend and raw-material analysis (' + biasLabel() + '). FeO, TI and size use literature sensitivities around the plant average. RDI / RI / SI / AI levels are anchored to ' + (Object.keys(state.anchors).length ? 'your lab results' : 'placeholder values until you re-anchor them on the Lab check page') + '; their direction of change is reliable.</div>';
    h += '<div class="card"><h2>Process advisor</h2><p class="sub">Compare actual results with your plant-approved targets, look for possible causes of a deviation and plan the recovery.</p><button class="btn" data-go="adv">Target vs actual →</button></div>';
    h += '<div class="card"><h2>Hit your targets</h2><p class="sub">Let the app calculate the limestone, dolomite and coke (or any materials you pick) that give your target basicity, MgO and FeO.</p><button class="btn primary" data-go="recipe">Target recipe →</button></div>';
    h += '<div class="row"><button class="btn ghost" id="btnExport">Export report (.xlsx)</button><span class="spacer"></span><button class="btn primary" data-next="ba">Before / After →</button></div>';
    m.innerHTML = h;
    $('#btnExport').onclick = exportReport;
    if (window.SinterBuilder) SinterBuilder.bindResults(m);
    bindNext(m);
  }
  function bindNext(m) { $$('[data-next]', m).forEach(function (b) { b.onclick = function () { go(b.dataset.next); }; }); }

  // ---------- target recipe (backward calculation) ----------
  /* As in the raw-mix model of Kronberger, Schaler & Schoenegger (2012, Siemens VAI): one variable material
     per target (basicity, MgO, FeO through fuel, Fe, SiO2) while every other material stays as it is. Solved
     with Newton steps on the full model, so yield, production, size and strength follow the new recipe. */
  var RC = [
    { k: 'b2', l: 'Basicity B2 (CaO/SiO₂)', u: '', d: 2, mat: 8, on: true },
    { k: 'mgo', l: 'MgO', u: '%', d: 2, mat: 7, on: true },
    { k: 'feo', l: 'FeO (set by fuel)', u: '%', d: 2, mat: 12, on: true },
    { k: 'fe', l: 'Fe(T)', u: '%', d: 2, mat: 2, on: false },
    { k: 'sio2', l: 'SiO₂', u: '%', d: 2, mat: 1, on: false }
  ];
  var TOLR = { b2: 0.005, mgo: 0.01, feo: 0.02, fe: 0.02, sio2: 0.01 };
  function rcState() {
    if (!state.recipe) state.recipe = {};
    var r = state.result || run(state.inp);
    RC.forEach(function (t) {
      if (state.recipe[t.k]) return;
      var tg = state.targets[t.k] || [], lo = tg[0], hi = tg[1];
      var v = isFinite(lo) && isFinite(hi) && lo != null && hi != null ? (lo + hi) / 2 : lo != null && isFinite(lo) ? lo : hi != null && isFinite(hi) ? hi : r[t.k];
      state.recipe[t.k] = { on: t.on, v: +(+v).toFixed(t.d), mat: t.mat };
    });
    return state.recipe;
  }
  function linSolve(A, b) {
    var n = b.length, M = A.map(function (row, i) { return row.slice().concat([b[i]]); });
    for (var c = 0; c < n; c++) {
      var p = c; for (var r = c + 1; r < n; r++) if (Math.abs(M[r][c]) > Math.abs(M[p][c])) p = r;
      if (Math.abs(M[p][c]) < 1e-9) return null;
      var t = M[c]; M[c] = M[p]; M[p] = t;
      for (var r2 = 0; r2 < n; r2++) if (r2 !== c) { var q = M[r2][c] / M[c][c]; for (var k = c; k <= n; k++) M[r2][k] -= q * M[c][k]; }
    }
    return M.map(function (row, i) { return row[n] / row[i]; });
  }
  function solveRecipe(inp, goals) {
    var x = E.clone(inp), it, r0;
    for (it = 0; it < 30; it++) {
      r0 = run(x);
      var F = goals.map(function (g) { return r0[g.k] - g.v; });
      if (F.every(function (e, i) { return Math.abs(e) < TOLR[goals[i].k]; })) break;
      var J = goals.map(function () { return []; });
      goals.forEach(function (g, j) {
        var h = Math.max(2, (x.use[g.mat] || 0) * 0.02), y = E.clone(x); y.use[g.mat] = (y.use[g.mat] || 0) + h;
        var r1 = run(y); goals.forEach(function (gi, i) { J[i][j] = (r1[gi.k] - r0[gi.k]) / h; });
      });
      var dx = linSolve(J, F.map(function (e) { return -e; }));
      if (!dx) return { x: x, r: r0, ok: false, why: 'The chosen materials cannot move these targets separately. Pick a different material for one of them.' };
      var tot = useTotal() || 5000;
      dx.forEach(function (d, j) { var m = goals[j].mat, lim = Math.max(150, tot * 0.15); d = Math.max(-lim, Math.min(lim, d)); x.use[m] = Math.max(0, (x.use[m] || 0) + d); });
    }
    var r = run(x), miss = goals.filter(function (g) { return Math.abs(r[g.k] - g.v) > TOLR[g.k] * 3; });
    var why = miss.length ? 'Not reachable with these materials: ' + miss.map(function (g) { var t = RC.find(function (c) { return c.k === g.k; }); return t.l.replace(/ \(.*\)/, '') + ' stops at ' + f(r[g.k], t.d) + (x.use[g.mat] <= 0.01 ? ' (' + MAT[g.mat] + ' is already at 0)' : ''); }).join('; ') + '.' : '';
    return { x: x, r: r, ok: !miss.length, why: why, it: it };
  }
  function pageRecipe(m) {
    var rc = rcState(), r = state.result;
    var matOpts = function (sel) { return ORD.map(function (i) { return '<option value="' + i + '"' + (i === sel ? ' selected' : '') + '>' + esc(MAT[i]) + '</option>'; }).join(''); };
    var h = '<div class="card hero"><h2>Target recipe</h2><p class="sub">Tell the app the sinter you want. It works out how much of each chosen material is needed and keeps every other material as it is (the backward raw-mix calculation used by Siemens VAI sinter optimisation systems).</p></div>';
    h += '<div class="card"><h2>Targets and the material that moves each one</h2><p class="sub">One material per target, each different. Limestone for basicity, dolomite for MgO and coke for FeO are the usual choices.</p>' +
      RC.map(function (t) {
        var s = rc[t.k];
        return '<div class="rc' + (s.on ? ' on' : '') + '"><label class="rc-h"><input type="checkbox" data-rc-on="' + t.k + '"' + (s.on ? ' checked' : '') + '><b>' + t.l + '</b><span class="muted small">now ' + f(r[t.k], t.d) + (t.u ? ' ' + t.u : '') + '</span></label>' +
          '<div class="rc-b"><input inputmode="decimal" class="rc-v" data-rc-v="' + t.k + '" value="' + s.v + '"><select class="sel" data-rc-m="' + t.k + '">' + matOpts(s.mat) + '</select></div></div>';
      }).join('') +
      '<button class="btn primary block" id="rcGo" style="margin-top:10px">Calculate recipe</button></div><div id="rcOut"></div>';
    h += '<div class="row"><button class="btn ghost" data-next="results">← Results</button></div>';
    m.innerHTML = h;
    $$('[data-rc-on]', m).forEach(function (el) { el.onchange = function () { rc[el.dataset.rcOn].on = el.checked; el.closest('.rc').classList.toggle('on', el.checked); save(); }; });
    $$('[data-rc-v]', m).forEach(function (el) { el.onchange = function () { var v = num(el.value); if (v != null) rc[el.dataset.rcV].v = v; save(); }; });
    $$('[data-rc-m]', m).forEach(function (el) { el.onchange = function () { rc[el.dataset.rcM].mat = +el.value; save(); }; });
    $('#rcGo').onclick = function () {
      var goals = RC.filter(function (t) { return rc[t.k].on; }).map(function (t) { return { k: t.k, v: rc[t.k].v, mat: rc[t.k].mat }; });
      if (!goals.length) { toast('Tick at least one target'); return; }
      var mats = goals.map(function (g) { return g.mat; });
      if (mats.some(function (x, i) { return mats.indexOf(x) !== i; })) { toast('Use a different material for each target'); return; }
      var res = solveRecipe(state.inp, goals); state._recipe = res; renderRecipe(res, goals);
    };
    bindNext(m);
  }
  function renderRecipe(res, goals) {
    var a = state.inp, b = res.x, A = run(a), B = res.r, P = B.prod || 1;
    var ch = ORD.filter(function (i) { return Math.abs((b.use[i] || 0) - (a.use[i] || 0)) > 0.05; });
    var keys = ['b2', 'mgo', 'feo', 'fe', 'sio2', 'cao', 'ti', 'rdi', 'ri', 'mps', 'hd', 'prod', 'fuel', 'flux'];
    var h = '<div class="card"><h2>' + (res.ok ? 'Recipe that meets your targets' : 'Closest recipe') + '</h2>' + (res.why ? '<div class="note warn">' + esc(res.why) + '</div>' : '') +
      '<div class="tbl-wrap"><table class="t"><tr><th>Material</th><th class="n">Now</th><th class="n">New</th><th class="n">Change</th><th class="n">kg/t</th></tr>' +
      (ch.length ? ch.map(function (i) { return '<tr><td>' + esc(MAT[i]) + '</td><td class="n">' + f(a.use[i], 1) + '</td><td class="n"><b>' + f(b.use[i], 1) + '</b></td><td class="n">' + sgn(b.use[i] - a.use[i], 1) + '</td><td class="n">' + f(b.use[i] * 1000 / P, 1) + '</td></tr>'; }).join('') : '<tr><td colspan="5" class="muted">No change needed.</td></tr>') +
      '</table></div><p class="muted small">MT/day wet. kg/t is per ton of the new predicted sinter.</p>' +
      '<h3>What the new recipe gives</h3><div class="tbl-wrap"><table class="t"><tr><th>Parameter</th><th class="n">Now</th><th class="n">New</th><th class="n"></th></tr>' +
      keys.map(function (k) { var o = OUT[k]; if (!o) return ''; var st = status(k, B[k]); return '<tr><td>' + o.l + ' <span class="muted small">' + o.u + '</span></td><td class="n">' + f(A[k], o.d) + '</td><td class="n"><b>' + f(B[k], o.d) + '</b></td><td class="n">' + (st[1] ? chip(st) : '') + '</td></tr>'; }).join('') +
      '</table></div><button class="btn primary block" id="rcApply" style="margin-top:10px">Use this recipe and predict</button></div>';
    $('#rcOut').innerHTML = h; $('#rcOut').scrollIntoView({ block: 'start', behavior: 'smooth' });
    $('#rcApply').onclick = function () {
      state.inp = E.clone(res.x);
      if (state.blendMode === 'pct' || state.blendMode === 'kgt') setBlendMode(state.blendMode);
      ch.forEach(function (i) { state.src['use.' + i] = 'Target recipe'; }); state.touched = true;
      state.loaded = 'Target recipe'; doPredict(); toast('Recipe applied');
    };
  }
  // analysis closure (100 % minus the sum of the reported species), as in the VAiron plausibility check
  function closure(c) {
    var fe = +c.fe || 0, feo = +c.feo || 0, s = Math.max(0, (fe - 0.7773 * feo) / 0.6994) + feo;
    ['sio2', 'al2o3', 'cao', 'mgo', 'mno', 'tio2'].forEach(function (k) { s += +c[k] || 0; });
    if (c.loi != null && isFinite(c.loi)) s += +c.loi; else if (c.burn != null && isFinite(c.burn)) s += +c.burn;
    return s;
  }
  function analysisChecks(chemMap, lab) {
    var out = [];
    if (lab && isFinite(lab.fe) && isFinite(lab.sio2) && isFinite(lab.cao)) {
      var L = {}; ['fe', 'feo', 'sio2', 'al2o3', 'cao', 'mgo', 'mno', 'tio2'].forEach(function (k) { if (isFinite(lab[k])) L[k] = lab[k]; });
      var sl = closure(L), dv = 100 - sl;
      out.push({ cls: Math.abs(dv) > 10 ? 'bad' : Math.abs(dv) > 3.5 || dv < -1 ? 'warn' : 'ok', who: 'Sinter lab analysis', sum: sl,
        text: 'Fe₂O₃ + FeO + SiO₂ + Al₂O₃ + CaO + MgO' + (isFinite(lab.mno) ? ' + MnO' : '') + ' = ' + f(sl, 1) + ' %' + (Math.abs(dv) > 10 ? '. More than 10 % is missing or extra, please check the analysis.' : Math.abs(dv) > 3.5 || dv < -1 ? '. Sinter normally closes at 96.5–101 % (alkalis, P and S are not reported), so check FeO and Fe(T).' : '. Looks consistent.') });
    }
    Object.keys(chemMap || {}).forEach(function (mi) {
      var c = chemMap[mi]; if (!c || !(isFinite(c.fe) || isFinite(c.cao))) return;
      if ((+c.fc || 0) > 30) return; // fuels are judged on ash, not here
      var n = ['fe', 'sio2', 'al2o3', 'cao', 'mgo'].filter(function (k) { return isFinite(c[k]); }).length;
      if (n < 4 || !(isFinite(c.loi) || isFinite(c.burn))) return;
      var sm = closure(c), d = 100 - sm;
      if (Math.abs(d) > 4) out.push({ cls: Math.abs(d) > 10 ? 'bad' : 'warn', who: MAT[+mi], sum: sm, text: 'analysis adds up to ' + f(sm, 1) + ' % (Fe as Fe₂O₃ + oxides + LOI)' + (Math.abs(d) > 10 ? ', please check it' : '') + '.' });
    });
    return out;
  }
  function labHarmonic() {
    var x = { p50: state.lab.p50, p40: state.lab.p40, p25: state.lab.p25, p10: state.lab.p10, p6: state.lab.p6, m6: state.lab.m6 };
    if (Object.keys(x).filter(function (k) { return isFinite(x[k]); }).length < 4) return null;
    Object.keys(x).forEach(function (k) { if (!isFinite(x[k])) x[k] = 0; });
    return E.harmonic(x, cal.M);
  }

  // ---------- page 3: before / after ----------
  function baselineInputs() {
    var sel = state.baSel, b = defaultInputs();
    b.area = state.inp.area; b.width = state.inp.width; b.basis = state.inp.basis; b.biasOn = state.inp.biasOn; b.prodOverride = null;
    b.bed = state.ref.bed; b.moist = state.ref.moist; b.alk = state.ref.alk; b.coke3 = state.ref.coke3; b.cacl2 = state.ref.cacl2;
    if (sel === 'prev' && state.prevInp) return E.clone(state.prevInp);
    if (/^d\d+$/.test(sel)) { var d = days[+sel.slice(1)]; b.use = d.use.slice(); MACH.forEach(function (p, i) { b[p.k] = d.mach[i]; }); b.speed = hzToMpm(b.speed); }
    return b;
  }
  function inputDiffs(a, b) {
    var out = [];
    ORD.forEach(function (i) { var n = MAT[i]; if (Math.abs((a.use[i] || 0) - (b.use[i] || 0)) > 0.05) out.push({ id: 'use.' + i, l: n, u: 'MT/day', a: a.use[i] || 0, b: b.use[i] || 0, d: 1 }); });
    MACH.concat(PROC).forEach(function (p) {
      if (p.k === 'prodOverride' || p.k === 'biasOn' || p.k === 'basis') return;
      var x = a[p.k], y = b[p.k];
      if (p.type === 'yn') { if (!!x !== !!y) out.push({ id: p.k, l: p.l, u: '', a: x ? 'Yes' : 'No', b: y ? 'Yes' : 'No', yn: true }); return; }
      if (Math.abs((x || 0) - (y || 0)) > 1e-6 * Math.max(1, Math.abs(x || 0))) out.push({ id: p.k, l: p.l, u: p.u, a: x, b: y, d: p.d });
    });
    return out;
  }
  function applyOne(base, diff, after) {
    var x = E.clone(base);
    if (diff.id.indexOf('use.') === 0) x.use[+diff.id.split('.')[1]] = after.use[+diff.id.split('.')[1]];
    else x[diff.id] = after[diff.id];
    return x;
  }
  function baOpts() {
    return '<option value="normal">Plant normal (plant average)</option>' + (state.prevInp ? '<option value="prev">Previous prediction</option>' : '') +
      days.map(function (d, i) { return '<option value="d' + i + '">Plant day ' + d.date + '</option>'; }).join('');
  }
  function pageBA(m) {
    var after = state.inp, before = baselineInputs();
    var A = state.result, B = run(before);
    var diffs = inputDiffs(before, after);
    var opts = baOpts();
    var h = '<div class="card"><h2>Compare with</h2><p class="sub">"Before" is the baseline you choose; "After" is the scenario you just predicted.</p><select class="sel" id="baSel">' + opts + '</select></div>';
    h += '<div class="card"><h2>What changed in the inputs</h2>' + (diffs.length ? '<div class="tbl-wrap"><table class="t"><tr><th>Input</th><th class="n">Before</th><th class="n">After</th><th class="n">Change</th></tr>' +
      diffs.map(function (d) { return '<tr><td>' + esc(d.l) + ' <span class="muted small">' + d.u + '</span></td><td class="n">' + (d.yn ? d.a : f(d.a, d.d)) + '</td><td class="n">' + (d.yn ? d.b : f(d.b, d.d)) + '</td><td class="n">' + (d.yn ? '' : sgn(d.b - d.a, d.d)) + '</td></tr>'; }).join('') +
      '</table></div>' : '<p class="sub">No input differs from this baseline.</p>') + '</div>';
    var keyOuts = ['fe', 'feo', 'sio2', 'al2o3', 'cao', 'mgo', 'b2', 'ti', 'rdi', 'ri', 'si', 'ai', 'mps', 'm6', 'prod', 'productivityDay', 'fuel', 'flux', 's', 'p'];
    h += '<div class="card"><h2>Before vs After – predicted quality</h2><div class="tbl-wrap"><table class="t"><tr><th>Parameter</th><th class="n">Before</th><th class="n">After</th><th class="n">Δ</th></tr>' +
      keyOuts.map(function (k) {
        var o = OUT[k], dlt = A[k] - B[k], g = Math.abs(dlt) < Math.pow(10, -o.d) / 2 ? 0 : goodness(k, dlt);
        return '<tr><td>' + o.l + ' <span class="muted small">' + o.u + '</span></td><td class="n">' + f(B[k], o.d) + '</td><td class="n"><b>' + f(A[k], o.d) + '</b></td><td class="n ' + (g > 0 ? 'up' : g < 0 ? 'down' : 'flat') + '">' + (g > 0 ? '▲ ' : g < 0 ? '▼ ' : '') + sgn(dlt, o.d) + '</td></tr>';
      }).join('') + '</table></div><p class="muted small">Green = better, red = worse for that parameter.</p></div>';
    if (diffs.length) {
      var im = ['feo', 'ti', 'rdi', 'ri', 'b2', 'prod'];
      h += '<div class="card"><h2>Impact of each change on its own</h2><p class="sub">Each row applies only that one change to the baseline (like the module\'s Before_After sheet).</p><div class="tbl-wrap"><table class="t"><tr><th>Change</th>' + im.map(function (k) { return '<th class="n">' + shortName(k).replace('Production', 'Prod') + '</th>'; }).join('') + '</tr>' +
        diffs.map(function (d) {
          var r1 = run(applyOne(before, d, after));
          return '<tr><td>' + esc(d.l) + '<div class="muted small">' + (d.yn ? d.a + ' → ' + d.b : sgn(d.b - d.a, d.d) + ' ' + d.u) + '</div></td>' + im.map(function (k) {
            var dl = r1[k] - B[k], dd = k === 'prod' ? 0 : (k === 'b2' ? 3 : 2), g = Math.abs(dl) < Math.pow(10, -dd) ? 0 : goodness(k, dl);
            return '<td class="n ' + (g > 0 ? 'up' : g < 0 ? 'down' : 'flat') + '">' + (Math.abs(dl) < Math.pow(10, -dd) / 2 ? '·' : sgn(dl, dd)) + '</td>';
          }).join('') + '</tr>';
        }).join('') + '</table></div><p class="muted small">Single-change effects need not add up exactly to the total (FeO, basicity knees and quadratic optima interact).</p></div>';
    }
    h += '<div class="card"><h2>Why it changed</h2><p class="sub">Change in each driver\'s contribution, After minus Before.</p><div class="seg" id="baSeg">' + ['feo', 'ti', 'rdi', 'ri'].map(function (k) { return '<button data-o="' + k + '" class="' + (state.baOut === k ? 'on' : '') + '">' + OUT[k].l.split(' (')[0].replace('Tumbler index TI', 'TI').replace('Reducibility RI', 'RI') + '</button>'; }).join('') + '</div><div id="baBars"></div></div>';
    h += '<div class="row"><button class="btn ghost" data-next="results">← Results</button><span class="spacer"></span><button class="btn primary" data-next="sens">Sensitivity & tips →</button></div>';
    m.innerHTML = h;
    $('#baSel').value = state.baSel;
    $('#baSel').onchange = function () { state.baSel = this.value; save(); go('ba'); };
    var drawBars = function () {
      var k = state.baOut, da = A.drivers[k], db = B.drivers[k];
      var items = Object.keys(da).map(function (n) { return { l: n, v: da[n] - db[n] }; }).filter(function (x) { return Math.abs(x.v) > 1e-4; });
      $('#baBars').innerHTML = items.length ? barsHtml(items, k, 2) + '<p class="muted small">Net change in ' + OUT[k].l + ': <b>' + sgn(A[k] - B[k], 2) + '</b>' + (k !== 'feo' ? ' (TI/RDI/RI include knock-on effects through FeO / TI)' : '') + '.</p>' : '<p class="sub">No driver of ' + OUT[k].l + ' changed.</p>';
    };
    $$('#baSeg button').forEach(function (b) { b.onclick = function () { state.baOut = b.dataset.o; $$('#baSeg button').forEach(function (x) { x.classList.toggle('on', x === b); }); drawBars(); save(); }; });
    drawBars(); bindNext(m);
  }
  function barsHtml(items, k, d) {
    items.sort(function (a, b) { return Math.abs(b.v) - Math.abs(a.v); });
    var mx = Math.max.apply(null, items.map(function (x) { return Math.abs(x.v); })) || 1;
    return '<div class="bars">' + items.map(function (x) {
      var w = Math.abs(x.v) / mx * 48, g = k ? goodness(k, x.v) : 0;
      var cls = g > 0 ? 'good' : g < 0 ? 'harm' : (x.v >= 0 ? 'pos' : 'neg');
      var left = x.v >= 0 ? 50 : 50 - w;
      return '<div class="bar"><div class="lab">' + esc(x.l) + '</div><div class="track"><div class="mid"></div><div class="fill ' + cls + '" style="left:' + left + '%;width:' + Math.max(w, 0.6) + '%"></div><div class="val" style="' + (x.v >= 0 ? 'left:' + Math.min(left + w + 1, 80) + '%' : 'right:' + Math.min(50 + w + 1, 80) + '%') + '">' + sgn(x.v, d) + '</div></div></div>';
    }).join('') + '</div>';
  }

  // ---------- page 4: sensitivity & suggestions ----------
  var LEVERS = [
    { id: 'use.12', l: 'Coke fines (purchased)', step: 10, u: 'MT/day', min: 0, rng: 60 },
    { id: 'use.14', l: 'Anthracite / nut coke', step: 10, u: 'MT/day', min: 0, rng: 60 },
    { id: 'use.8', l: 'Limestone fines', step: 20, u: 'MT/day', min: 0, rng: 150 },
    { id: 'use.11', l: 'Calcined lime (lime plant)', step: 10, u: 'MT/day', min: 0, rng: 100 },
    { id: 'use.10', l: 'Calcined lime (purchased)', step: 10, u: 'MT/day', min: 0, rng: 100 },
    { id: 'use.7', l: 'Dolomite fines', step: 20, u: 'MT/day', min: 0, rng: 150 },
    { id: 'use.2', l: 'Iron ore fines Grade A (62+)', step: 100, u: 'MT/day', min: 0, rng: 400 },
    { id: 'use.0', l: 'Iron ore fines Grade B (60–62)', step: 100, u: 'MT/day', min: 0, rng: 400 },
    { id: 'use.1', l: 'Iron ore fines Grade C (58–60)', step: 100, u: 'MT/day', min: 0, rng: 400 },
    { id: 'use.16', l: 'Iron ore fines Grade D (<58)', step: 100, u: 'MT/day', min: 0, rng: 400 },
    { id: 'use.3', l: 'Mill scale', step: 20, u: 'MT/day', min: 0, rng: 60 },
    { id: 'use.4', l: 'BF sinter fines return', step: 50, u: 'MT/day', min: 0, rng: 200 },
    { id: 'speed', l: 'Machine speed', step: 0.05, u: 'm/min', rng: 0.2 },
    { id: 'bed', l: 'Bed height', step: 20, u: 'mm', rng: 120 },
    { id: 'btp', l: 'BTP temperature', step: 10, u: '°C', rng: 60 },
    { id: 'moist', l: 'Mix moisture', step: 0.3, u: '%', rng: 1.5 },
    { id: 'ign', l: 'Ignition temperature', step: 25, u: '°C', rng: 150 },
    { id: 'windP', l: 'Wind main suction', step: 0.5, u: 'kPa', rng: 3 },
    { id: 'coke3', l: 'Coke -3 mm fraction', step: 5, u: '%', rng: 15 },
    { id: 'alk', l: 'Sinter alkali', step: 0.02, u: '%', rng: 0.1, min: 0 },
    { id: 'windT', l: 'Wind main temperature', step: 10, u: '°C', rng: 40, xtra: 1 },
    { id: 'idFan', l: 'ID fan speed', step: 50, u: 'rpm', rng: 200, xtra: 1 },
    { id: 'bfg', l: 'BF gas flow to ignition', step: 500, u: 'Nm³/h', rng: 2000, min: 0, xtra: 1 },
    { id: 'cacl2', l: 'CaCl₂ spraying ON', step: 1, u: '', toggle: true }
  ];
  // levers an operator would reach for first for each quality parameter
  var NATURAL = { b2: ['use.8', 'use.10', 'use.11', 'use.7'], cao: ['use.8', 'use.10', 'use.11'], feo: ['use.12', 'use.13', 'use.14', 'btp', 'speed'],
    ti: ['speed', 'bed', 'moist', 'use.11', 'ign'], rdi: ['cacl2', 'use.8', 'use.11', 'alk'], ri: ['use.12', 'use.14', 'use.8'], mgo: ['use.7'],
    fe: ['use.0', 'use.1', 'use.2', 'use.3'], sio2: ['use.0', 'use.1', 'use.2'], al2o3: ['use.0', 'use.1', 'use.2'],
    mps: ['speed', 'bed'], m6: ['speed', 'bed', 'moist'], si: ['speed', 'bed'], ai: ['speed', 'bed'] };
  function getLever(inp, id) { return id.indexOf('use.') === 0 ? inp.use[+id.split('.')[1]] : inp[id]; }
  function setLever(inp, id, v) { if (id.indexOf('use.') === 0) inp.use[+id.split('.')[1]] = v; else inp[id] = v; }
  function leverEffects() {
    var base = state.result, res = [];
    LEVERS.forEach(function (L) {
      var x = E.clone(state.inp);
      if (L.toggle) { if (x.cacl2) return; x.cacl2 = true; } else setLever(x, L.id, getLever(x, L.id) + L.step);
      var r = run(x), eff = {};
      Object.keys(OUT).forEach(function (k) { eff[k] = r[k] - base[k]; });
      res.push({ L: L, eff: eff });
    });
    return res;
  }
  var SENS_OUTS = ['feo', 'ti', 'rdi', 'ri', 'b2', 'mps', 'mgo', 'sio2', 'al2o3', 'fe', 'prod'];
  var COEF_ROWS = { feo: [38, 39, 40, 41, 42, 43], ti: [44, 94, 95, 45, 46, 47, 48, 49, 50, 51, 52, 102, 104, 105, 106, 107, 108, 109, 110], rdi: [53, 54, 55, 96, 97, 56, 57, 98, 99, 100], ri: [58, 59, 60, 61, 62, 63, 103, 101], mps: [66, 67, 111, 112, 64, 65] };
  function pageSens(m) {
    var effs = leverEffects(), k = state.sensOut, o = OUT[k];
    var h = '<div class="card"><h2>Sensitivity</h2><p class="sub">Change in the chosen output for one step of each lever, run through the full model from your current scenario.</p>' +
      '<div class="seg" id="sensSeg">' + SENS_OUTS.map(function (x) { return '<button data-o="' + x + '" class="' + (x === k ? 'on' : '') + '">' + shortName(x) + '</button>'; }).join('') + '</div>' +
      '<div id="sensBars"></div><div id="coefBox"></div></div>';
    h += '<div class="card"><h2>Suggestions</h2><p class="sub">For each parameter off target: the levers that fix it with the least side effect, sized from the model.</p><div id="sugBox"></div></div>';
    h += '<div class="row"><button class="btn ghost" data-next="ba">← Before / After</button><span class="spacer"></span><button class="btn primary" data-next="lab">Lab check →</button></div>';
    m.innerHTML = h;
    var draw = function () {
      var k = state.sensOut, o = OUT[k];
      var items = effs.map(function (e) { return { l: e.L.l + (e.L.toggle ? '' : ' ' + (e.L.step > 0 ? '+' : '') + e.L.step + ' ' + e.L.u), v: e.eff[k] }; }).filter(function (x) { return Math.abs(x.v) > Math.pow(10, -(o.d + 1)); });
      $('#sensBars').innerHTML = items.length ? barsHtml(items, k, k === 'prod' ? 0 : o.d + 1) + '<p class="muted small">Green = moves ' + o.l + ' the better way, red = worse.</p>' : '<p class="sub">No lever moves this output.</p>';
      var rows = COEF_ROWS[k];
      $('#coefBox').innerHTML = rows ? '<h3>Model coefficients behind ' + o.l + '</h3><div class="tbl-wrap"><table class="t"><tr><th>Effect</th><th class="n">Value</th><th>Source · confidence</th></tr>' + rows.map(function (r) {
        var mm = SD.modelMeta[r]; if (!mm) return '';
        var cv = cal.M[r], cu = mm.unit || '';
        if (/per \+1 Hz/.test(cu)) { cv = cv / spdK() * 0.1; cu = cu.replace('per +1 Hz', 'per +0.1 m/min'); }
        return '<tr><td>' + esc(mm.name) + '<div class="muted small">' + esc(mm.note || '') + '</div></td><td class="n">' + f(cv, Math.abs(cv) < 0.1 ? 4 : 2) + '<div class="muted small">' + esc(cu) + '</div></td><td class="small">' + esc(mm.src || '') + '<div class="muted">' + esc(mm.conf || '') + '</div></td></tr>';
      }).join('') + '</table></div>' : (['b2', 'mgo', 'sio2', 'al2o3', 'fe'].indexOf(k) >= 0 ? '<div class="note">' + o.l + ' comes from the mass balance of the blend (no sensitivity coefficient): only raw-material usage and chemistry change it.</div>' : '');
    };
    $$('#sensSeg button').forEach(function (b) { b.onclick = function () { state.sensOut = b.dataset.o; $$('#sensSeg button').forEach(function (x) { x.classList.toggle('on', x === b); }); draw(); save(); }; });
    draw();
    $('#sugBox').innerHTML = suggestionsHtml(effs);
    bindNext(m);
  }
  function shortName(k) { return { feo: 'FeO', ti: 'TI', rdi: 'RDI', ri: 'RI', b2: 'B2', mps: 'MPS', mgo: 'MgO', sio2: 'SiO₂', al2o3: 'Al₂O₃', fe: 'Fe(T)', prod: 'Production', si: 'SI', ai: 'AI', m6: '-6 mm' }[k] || OUT[k].l; }
  function suggestionsHtml(effs) {
    var r = state.result, issues = [];
    ['b2', 'feo', 'ti', 'rdi', 'ri', 'mgo', 'al2o3', 'sio2', 'fe', 'mps', 'm6', 'si', 'ai'].forEach(function (k) {
      var st = status(k, r[k]); if (st[0] !== 'bad') return;
      var t = target(k), goal;
      if (t[0] != null && t[1] != null) goal = (t[0] + t[1]) / 2; else if (st[1] === 'LOW') goal = t[0] + Math.abs(t[0]) * 0.01; else goal = t[1] - Math.abs(t[1]) * 0.01;
      issues.push({ k: k, st: st[1], gap: goal - r[k], goal: goal });
    });
    var tol = { feo: 0.5, ti: 1, rdi: 2, ri: 2, b2: 0.05, mgo: 0.1, al2o3: 0.1, sio2: 0.15, fe: 0.3, mps: 1, m6: 0.5, prod: 100, si: 1, ai: 0.5 };
    var h = '';
    issues.forEach(function (is) {
      var cands = [];
      effs.forEach(function (e) {
        var per = e.eff[is.k]; if (Math.abs(per) < 1e-6) return;
        var steps = is.gap / per;
        if (e.L.toggle) { if (steps < 0.5) return; steps = 1; }
        var amt = steps * e.L.step, cur = getLever(state.inp, e.L.id), partial = false;
        if (e.L.min != null && cur + amt < e.L.min) { amt = e.L.min - cur; partial = true; }
        if (e.L.rng && Math.abs(amt) > e.L.rng) { amt = Math.sign(amt) * e.L.rng; partial = true; }
        if (Math.abs(amt) < 1e-9) return;
        var x = E.clone(state.inp); if (e.L.toggle) x.cacl2 = true; else setLever(x, e.L.id, cur + amt);
        var r2 = run(x), harm = 0, side = [];
        Object.keys(tol).forEach(function (k2) {
          if (k2 === is.k) return;
          var d = r2[k2] - r[k2]; if (Math.abs(d) < tol[k2] * 0.2) return;
          var g = goodness(k2, d), s2 = status(k2, r2[k2]);
          if (g < 0) harm += Math.abs(d) / tol[k2] * (s2[0] === 'bad' ? 3 : 1);
          side.push((g < 0 ? '▼ ' : '▲ ') + shortName(k2) + ' ' + sgn(d, k2 === 'prod' ? 0 : (k2 === 'b2' ? 2 : 1)));
        });
        var achieved = r2[is.k] - r[is.k];
        cands.push({ L: e.L, amt: amt, partial: partial, harm: harm, side: side, achieved: achieved, newV: r2[is.k], cur: cur });
      });
      var nat = NATURAL[is.k] || [];
      cands.forEach(function (c) { c.nat = nat.indexOf(c.L.id) >= 0 ? 0 : 1; });
      cands.sort(function (a, b) { return (a.partial - b.partial) || (a.nat - b.nat) || (a.harm - b.harm) || (Math.abs(b.achieved) - Math.abs(a.achieved)); });
      var o = OUT[is.k];
      h += '<div class="sug"><div class="h">' + chip(['bad', is.st]) + ' ' + o.l + ' ' + f(r[is.k], o.d) + ' ' + o.u + ' <span class="muted small" style="font-weight:400">target ' + tgtText(is.k) + '</span></div><ul>' +
        cands.slice(0, 3).map(function (c) {
          var what = c.L.toggle ? 'Switch CaCl₂ spraying ON' : (c.amt > 0 ? 'Increase ' : 'Reduce ') + c.L.l + ' by ' + f(Math.abs(c.amt), c.L.step < 1 ? 2 : 0) + ' ' + c.L.u + ' (to ' + f(c.cur + c.amt, c.L.step < 1 ? 2 : 0) + ')';
          if (c.L.id.indexOf('use.') === 0 && r.prod > 0) what += ' ≈ ' + sgn(c.amt / r.prod * 1000, 1) + ' kg/t sinter';
          return '<li><b>' + what + '</b> → ' + shortName(is.k) + ' ' + f(c.newV, o.d) + (c.partial ? ' <span class="chip warn">partial – limit reached</span>' : '') + (c.side.length ? '<div class="muted small">Side effects: ' + c.side.join(', ') + '</div>' : '<div class="muted small">No notable side effects</div>') + '</li>';
        }).join('') + '</ul>' + ruleText(is.k) + '</div>';
    });
    if (!issues.length) h += '<div class="note">All parameters with a target are within limits. Use the sensitivity chart above to see which lever gives the most margin.</div>';
    // always-useful guidance from the module
    h += '<h3>Operating guidance</h3><ul class="small" style="padding-left:18px;margin:4px 0">' + generalTips().map(function (t) { return '<li style="margin:4px 0">' + t + '</li>'; }).join('') + '</ul>';
    return h;
  }
  function ruleText(k) {
    var M = cal.M, r = state.result;
    var t = {
      feo: 'Rule of thumb (module): +1 % fixed carbon in mix ≈ +' + f(M[38], 1) + ' % FeO; each +0.1 B2 ≈ ' + f(M[39] * 0.1, 2) + ' % FeO; +0.1 m/min speed ≈ ' + f(M[41] / spdK() * 0.1, 2) + ' % FeO.',
      ti: 'Levers (module): +0.05 basicity = +' + f(M[44] * 0.05, 1) + ' TI (below B2 ' + M[94] + '); −0.05 m/min speed = +' + f(-M[49] / spdK() * 0.05, 1) + ' TI; +20 mm bed = +' + f(M[50] * 20, 1) + ' TI; −1 % Al₂O₃ = +' + f(-M[46], 1) + ' TI.',
      rdi: 'Levers (module): −0.5 % Al₂O₃ = ' + f(M[55] * -0.5, 1) + '; +0.05 B2 = ' + f(M[53] * 0.05, 1) + '; −0.05 % alkali = ' + f(M[57] * -0.05, 1) + '; +0.5 % FeO = ' + f(M[54] * 0.5, 1) + ' RDI points; CaCl₂ spraying ≈ ' + f(M[100], 0) + '.',
      al2o3: 'Shift the ore blend toward lower-alumina fines. Each −0.1 % Al₂O₃ gives about +' + f(-M[46] * 0.1, 2) + ' TI and ' + f(-M[55] * 0.1, 2) + ' RDI points.',
      mps: 'Improve TI first; check cooler discharge crusher and screen cut.',
      b2: 'Basicity is set by flux (limestone / lime / dolomite) against ore SiO₂.'
    }[k];
    return t ? '<div class="muted small" style="margin-top:6px">' + t + '</div>' : '';
  }
  function generalTips() {
    var r = state.result, inp = state.inp, M = cal.M, t = [];
    if (Math.abs(inp.moist - M[52]) > 0.3) t.push('Mix moisture ' + f(inp.moist, 2) + ' % is off the optimum ' + f(M[52], 1) + ' %: TI loses ' + f(M[51] * Math.pow(inp.moist - M[52], 2), 2) + ' points. Bring water addition back to the optimum.');
    if (Math.abs(inp.ign - M[108]) > 50) t.push('Ignition hood at ' + f(inp.ign, 0) + ' °C vs optimum ' + f(M[108], 0) + ' °C (R9): over-ignition glazes the top layer, under-ignition leaves it weak.');
    if (Math.abs(inp.coke3 - M[106]) > 5) t.push('Coke breeze −3 mm ' + f(inp.coke3, 0) + ' % vs optimum ' + f(M[106], 0) + ' %: check coke crusher (rod mill) setting.');
    if (r.as > 0.5) t.push('Al₂O₃/SiO₂ = ' + f(r.as, 2) + ' (> 0.5) – typical of Indian high-alumina ores; it raises RDI and lowers TI. Blend in lower-alumina ore or raise MgO/B2 within limits.');
    if (r.m1 > 40) t.push('−1 mm in the mix is ' + f(r.m1, 0) + ' %: granulation is critical – keep burnt lime share up and moisture at optimum.');
    if (r.rdi > 30 && !inp.cacl2) t.push('RDI is high: CaCl₂ (halide) spraying typically lowers RDI by ~10 points (R19, R20) – run a plant trial.');
    t.push('Re-check targets on the Inputs page (section 6) – the module limits are placeholders until you enter your SOP limits.');
    t.push('Log bed height, mix moisture and coke −3 mm every shift; they are the biggest missing drivers (see References & model → parameters to log).');
    return t;
  }

  // ---------- page 5: lab vs predicted ----------
  var TOL = { fe: 0.6, feo: 0.7, sio2: 0.15, al2o3: 0.1, cao: 0.65, mgo: 0.2, mno: 0.03, b2: 0.1, ti: 1.2, rdi: 3, ri: 3, si: 2, ai: 1, mps: 1, p50: 2, p40: 2, p25: 3, p10: 3, p6: 2, m6: 0.7, prod: 0 };
  function labExplain(k, dev, r) {
    var M = cal.M, inp = state.inp, hi = dev > 0, R = [], A = [];
    var kgt = function (pctC) { // fuel change (wet kg/t) for a change in fixed carbon in dry mix
      var ratio = r.fcKg && r.fuel ? r.fcKg / r.fuel : 0.7;
      return pctC / 100 * (r.dry / r.prod) * 1000 / ratio;
    };
    switch (k) {
      case 'feo':
        if (hi) {
          R.push('Actual fuel rate higher than the blend shows (coke feeder over-delivering, coke moisture lower than assumed, higher fixed C).');
          R.push('Coarse coke breeze (−3 mm below optimum) or poor fuel segregation creates local over-fusion.');
          R.push('Basicity lower than predicted (less flux reached the strand) → less calcium ferrite, more magnetite.');
          R.push('BTP late / slow machine / deeper bed → longer high-temperature hold.');
          A.push('Reduce coke by about ' + f(kgt(dev / M[38]), 1) + ' kg/t sinter (≈ ' + f(kgt(dev / M[38]) * r.prod / 1000, 1) + ' MT/day) to remove the ' + f(dev, 2) + ' % FeO gap.');
          A.push('Calibrate the coke weigh-feeder and check coke moisture; check coke −3 mm (target ' + f(M[106], 0) + ' %).');
          A.push('Verify flux feeders; raising B2 by 0.1 lowers FeO by ~' + f(-M[39] * 0.1, 2) + ' %.');
        } else {
          R.push('Fuel under-delivered or coke moisture / ash higher than library values (less fixed carbon).');
          R.push('Too fine coke (burns before the melt forms) or high mix moisture absorbing heat.');
          R.push('Faster machine or early burn-through (BTP high) reducing heat soak.');
          A.push('Raise coke by about ' + f(kgt(-dev / M[38]), 1) + ' kg/t sinter (≈ ' + f(kgt(-dev / M[38]) * r.prod / 1000, 1) + ' MT/day). Watch TI, which falls with lower FeO (' + f(M[45], 1) + ' TI per 1 % FeO).');
          A.push('Check coke analysis (fixed C, ash, moisture) and update raw-material chemistry.');
        }
        break;
      case 'b2': case 'cao':
        if (hi) { R.push('More flux reached the strand than recorded (limestone / lime feeder drift), or ore SiO₂ lower than the library value.'); A.push('Cut limestone by about ' + f(Math.abs(dev) * r.sio2 * 10 / (state.chem.cao[8] / 100) * (k === 'cao' ? 1 / Math.max(r.sio2, 0.1) : 1), 0) + ' kg/t sinter or calibrate flux feeders.'); }
        else { R.push('Flux under-delivered, flux CaO lower (limestone quality), or ore SiO₂ higher than library values.'); A.push('Add limestone ≈ ' + f(Math.abs(dev) * (k === 'b2' ? r.sio2 : 1) * 10 / (state.chem.cao[8] / 100), 0) + ' kg/t sinter (or calcined lime ≈ ' + f(Math.abs(dev) * (k === 'b2' ? r.sio2 : 1) * 10 / (state.chem.cao[11] / 100), 0) + ' kg/t); re-analyse flux CaO.'); }
        A.push('Update the flux and ore analyses on Inputs → raw-material chemistry so the mass balance follows.');
        break;
      case 'sio2': case 'al2o3': case 'fe': case 'mgo': case 'mno':
        var nm = { sio2: 'SiO₂', al2o3: 'Al₂O₃', fe: 'Fe(T)', mgo: 'MgO', mno: 'MnO' }[k];
        R.push('Ore / flux lot analysis differs from the library values (new ore lot, stockpile segregation).');
        R.push('Bunker proportioning differs from recorded usage (feeder calibration, bunker hang-ups, stock timing).');
        if (k === 'mgo') R.push(hi ? 'Dolomite over-fed or MgO-rich return fines.' : 'Dolomite under-fed or bunker empty.');
        if (k === 'fe') R.push(hi ? 'Less flux / fuel ash diluting, or mill-scale share higher.' : 'Dilution by more flux, coke ash or flue dust; SiO₂/Al₂O₃ higher.');
        R.push('Sample not representative (time lag between blend change and sinter sampled).');
        if (k === 'mgo') A.push((hi ? 'Cut' : 'Add') + ' dolomite by about ' + f(Math.abs(dev) * 10 / (state.chem.mgo[7] / 100), 0) + ' kg/t sinter.');
        if (k === 'al2o3' && hi) A.push('Shift toward lower-alumina ore; each +0.1 % Al₂O₃ costs ~' + f(-M[46] * 0.1, 2) + ' TI and +' + f(M[55] * 0.1, 2) + ' RDI.');
        A.push('Get a fresh ' + nm + ' analysis of the ores in use and enter it under raw-material chemistry; calibrate weigh-feeders.');
        break;
      case 'ti': case 'si':
        if (hi) { R.push('Better granulation / permeability than assumed (moisture closer to optimum, more burnt lime).'); R.push('Higher FeO / more melt than predicted.'); A.push('Strength margin available: consider +0.05 m/min speed for productivity (≈ ' + f(M[49] / spdK() * 0.05, 1) + ' TI) or a small coke cut.'); }
        else {
          R.push('Mix moisture away from optimum or poor granulation (high −1 mm fines, low burnt lime).');
          R.push('Under-ignition / ignition far from optimum weakening the top layer; high suction shortening the high-temperature time.');
          R.push('Lower FeO or basicity than predicted; Al₂O₃ higher; goethitic (high-LOI) ore share up.');
          R.push('Cooler / handling damage before sampling.');
          A.push('Lower machine speed by ' + f(Math.min(1, -dev / -M[49]) * spdK(), 2) + ' m/min (≈ +' + f(Math.min(1, -dev / -M[49]) * -M[49], 1) + ' TI) or raise bed by 20 mm (+' + f(M[50] * 20, 1) + ' TI).');
          A.push('Hold mix moisture at ' + f(M[52], 1) + ' %, keep burnt lime share up, check ignition at ~' + f(M[108], 0) + ' °C.');
        }
        break;
      case 'rdi':
        if (hi) {
          R.push('More skeletal (secondary) hematite: FeO lower than predicted or fast cooling.');
          R.push('Al₂O₃ / TiO₂ or alkali (Na₂O+K₂O, chlorides) higher than assumed (R3, R12, R13).');
          R.push('The RDI anchor is still a placeholder – the level may simply be off; use "Re-anchor" below.');
          A.push('Options: −0.5 % Al₂O₃ (' + f(M[55] * -0.5, 1) + ' RDI), +0.05 B2 (' + f(M[53] * 0.05, 1) + '), +0.5 % FeO (' + f(M[54] * 0.5, 1) + '), CaCl₂ spraying (≈ ' + f(M[100], 0) + ').');
          A.push('Check alkali input (flue dust / return fines) and cooler air rate.');
        } else { R.push('Higher FeO / magnetite, lower Al₂O₃ or alkali than assumed, or halide spraying effect.'); A.push('No corrective action needed for quality; re-anchor the model so future predictions match.'); }
        break;
      case 'ri':
        if (hi) { R.push('More porous sinter / more SFCA (higher B2 or lower FeO than predicted).'); A.push('No action needed; re-anchor the model.'); }
        else { R.push('Higher FeO (magnetite, fayalite) or more silicate glass (SiO₂) than predicted (R10).'); R.push('Over-fused dense sinter (high fuel / high TI).'); A.push('Lower FeO: about −1 % FeO gives +' + f(-M[58], 1) + ' RI (Nippon Steel trial, R10); keep B2 in 1.8–2.0.'); }
        break;
      case 'ai':
        R.push(hi ? 'Weaker sinter than predicted (see TI reasons) or more fines from handling.' : 'Stronger sinter than predicted.');
        if (hi) A.push('Act on TI levers (speed, bed, moisture, basicity).');
        break;
      case 'mps': case 'p50': case 'p40': case 'p25': case 'p10': case 'p6': case 'm6':
        R.push('Cooler-discharge crusher / screen cut different from normal, or sampling point change.');
        R.push((k === 'm6' ? hi : !hi) ? 'Weaker sinter (lower TI) breaking during handling.' : 'Stronger, coarser sinter cake.');
        A.push('Check crusher gap and screen deck condition; act on TI levers if fines are high.');
        break;
      case 'prod':
        R.push(hi ? 'Higher yield (less return fines) or faster machine than assumed.' : 'Lower yield (more return fines / dust), machine stoppages or slower speed.');
        A.push('Check machine availability and return-fines balance; the yield factor is ' + f(M[26], 3) + ' from the DPR days.');
        break;
    }
    R.push('Laboratory sampling / analysis error – repeat the analysis if the deviation is unexpected.');
    return { reasons: R, actions: A };
  }
  function pageLab(m) {
    var r = state.result, labKeys = LAB.map(function (p) { return p.k; }).filter(function (k) { return isFinite(state.lab[k]); });
    var rm = E.rmse(cal, state.ref, state.inp.biasOn);
    if (!labKeys.length) {
      m.innerHTML = '<div class="card empty"><div class="big">🧪</div><h2>No lab results yet</h2><p class="sub">Enter the actual sinter analysis (or upload the lab report) to compare it with the prediction.</p><button class="btn primary" id="gotoLab">Enter lab results</button></div>' +
        '<div class="row"><button class="btn ghost" data-next="sens">← Sensitivity</button><span class="spacer"></span><button class="btn primary" data-next="viz">3D sintering →</button></div>';
      $('#gotoLab').onclick = function () { go('input'); setTimeout(function () { var a = $('#acc-lab'); if (a) { a.classList.add('open'); a.scrollIntoView(); } }, 50); };
      bindNext(m); return;
    }
    var rows = labKeys.map(function (k) {
      var p = LAB.find(function (x) { return x.k === k; }), pred = r[k], lab = state.lab[k], dev = lab - pred;
      var tol = Math.max(TOL[k] || 0, rm[k] || 0); if (k === 'prod') tol = pred * 0.05;
      var z = tol ? Math.abs(dev) / tol : 0, cls = z <= 1 ? 'ok' : z <= 2 ? 'warn' : 'bad';
      return { k: k, p: p, pred: pred, lab: lab, dev: dev, tol: tol, cls: cls, pct: pred ? dev / pred * 100 : 0 };
    });
    var nOk = rows.filter(function (x) { return x.cls === 'ok'; }).length, nW = rows.filter(function (x) { return x.cls === 'warn'; }).length, nB = rows.filter(function (x) { return x.cls === 'bad'; }).length;
    var h = '<div class="card"><h2>Lab vs predicted</h2><p class="sub">Tolerance = larger of the model\'s back-test error and normal lab repeatability. Within 1× = OK, 1–2× = watch, above 2× = deviation.</p>' +
      '<div class="kpis"><div class="kpi ok"><div class="l">Within tolerance</div><div class="v">' + nOk + '</div></div><div class="kpi warn"><div class="l">Watch</div><div class="v">' + nW + '</div></div><div class="kpi bad"><div class="l">Deviation</div><div class="v">' + nB + '</div></div></div>' +
      '<div class="tbl-wrap" style="margin-top:10px"><table class="t"><tr><th>Parameter</th><th class="n">Pred.</th><th class="n">Lab</th><th class="n">Dev.</th><th class="n"></th></tr>' +
      rows.map(function (x) { return '<tr><td>' + x.p.l + '</td><td class="n">' + f(x.pred, x.p.d) + '</td><td class="n"><b>' + f(x.lab, x.p.d) + '</b></td><td class="n">' + sgn(x.dev, x.p.d) + '<div class="muted small">±' + f(x.tol, x.p.d) + '</div></td><td class="n">' + chip([x.cls, x.cls === 'ok' ? 'OK' : x.cls === 'warn' ? 'WATCH' : 'DEV']) + '</td></tr>'; }).join('') +
      '</table></div></div>';
    var devs = rows.filter(function (x) { return x.cls !== 'ok'; }).sort(function (a, b) { return Math.abs(b.dev / b.tol) - Math.abs(a.dev / a.tol); });
    h += '<div class="card"><h2>Deviations – reasons & corrective actions</h2>' + (devs.length ? devs.map(function (x) {
      var ex = labExplain(x.k, x.dev, r);
      return '<div class="dev ' + x.cls + '"><div class="h"><b>' + x.p.l + '</b>' + chip([x.cls, x.dev > 0 ? 'LAB HIGHER' : 'LAB LOWER']) + '</div>' +
        '<div class="nums"><span>Predicted <b>' + f(x.pred, x.p.d) + '</b></span><span>Lab <b>' + f(x.lab, x.p.d) + '</b></span><span>Δ <b>' + sgn(x.dev, x.p.d) + '</b> (' + sgn(x.pct, 1) + ' %)</span></div>' +
        '<h4>Likely reasons</h4><ul>' + ex.reasons.map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ul>' +
        (ex.actions.length ? '<h4>Corrective action</h4><ul>' + ex.actions.map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ul>' : '') + '</div>';
    }).join('') : '<div class="note">All lab results are within tolerance of the prediction. The model is tracking this blend well.</div>') + '</div>';
    h += '<div class="card"><h2>Improve the model with this result</h2><p class="sub">Re-anchor RDI, RI, SI and AI to your plant so future predictions start from your plant level' + (Object.keys(state.anchors).length ? ' (now anchored: ' + Object.keys(state.anchors).map(function (k) { return k.toUpperCase() + ' ' + f(state.anchors[k], 1); }).join(', ') + ')' : '') + '.</p><button class="btn primary" data-go="plant">Re-anchor RDI / RI / SI / AI →</button></div>';
    var ac = analysisChecks(null, state.lab), lh = labHarmonic();
    if (ac.length || lh) h += '<div class="card"><h2>Analysis check</h2>' + ac.map(function (c) { return '<div class="note ' + (c.cls === 'ok' ? '' : c.cls) + '"><b>' + esc(c.who) + ':</b> ' + c.text + '</div>'; }).join('') +
      (lh ? '<p class="sub" style="margin:8px 0 0">Harmonic diameter Dh from your lab sizing <b>' + f(lh, 1) + ' mm</b>, predicted ' + f(r.hd, 1) + ' mm. A higher Dh means fewer fines and better blast-furnace permeability.</p>' : '') + '</div>';
    var cc = state.chemCal, CL = { fe: 'Fe', sio2: 'SiO₂', al2o3: 'Al₂O₃', cao: 'CaO', mgo: 'MgO', mno: 'MnO', feo: 'FeO', ti: 'TI' };
    h += '<div class="card"><h2>Match chemistry, FeO and TI to my lab</h2><p class="sub">Sinter chemistry is a mass balance of your raw-material analysis; FeO and tumbler index start from the module plant\'s level. Sampling, analysis and plant differences leave a steady offset, so the app can learn yours from this lab result (average of your last 5). Enter lab FeO and TI on the Inputs page to include them.</p>' +
      (cc ? '<p class="muted small" style="margin:0 0 10px">Now using your plant correction from ' + cc.n + ' result' + (cc.n > 1 ? 's' : '') + ': ' + CK.concat(QK).filter(function (k) { return isFinite(cc.b[k]); }).map(function (k) { return CL[k] + ' ' + sgn(cc.b[k], k === 'ti' ? 1 : 2); }).join(', ') + '.</p>' :
        '<p class="muted small" style="margin:0 0 10px">Now using: ' + biasLabel() + '.</p>') +
      '<div class="row" style="margin:0"><button class="btn primary" id="chemLearn">Calibrate to this lab result</button>' + (cc ? '<button class="btn ghost" id="chemReset">Clear plant correction</button>' : '') + '</div></div>';
    h += '<div class="row"><button class="btn ghost" data-next="sens">← Sensitivity</button><span class="spacer"></span><button class="btn primary" data-next="viz">3D sintering →</button></div>';
    m.innerHTML = h;
    $('#chemLearn').onclick = function () { if (!learnChem()) { toast('Enter lab Fe, SiO₂, CaO … first'); return; } state.result = run(state.inp); save(); toast('Chemistry calibrated to your lab'); go('lab'); };
    if ($('#chemReset')) $('#chemReset').onclick = function () { state.chemCal = null; state.result = run(state.inp); save(); toast('Plant correction cleared'); go('lab'); };
    bindNext(m);
  }

  // ---------- page 6: 3D ----------
  // ---------- sinter look: last vs recent sinter in 3D ----------
  var LOOK_K = [
    { k: 'feo', s: 0.5, up: 'darker, more metallic and glassy (more magnetite)', dn: 'lighter steel-grey to rust-brown (more hematite / ferrite)' },
    { k: 'ri', s: 2, up: 'more open, fine pores', dn: 'denser, fewer open pores' },
    { k: 'ti', s: 1, up: 'fewer cracks, stronger lumps', dn: 'more cracks, weaker lumps' },
    { k: 'mps', s: 1, up: 'bigger lumps', dn: 'smaller lumps' },
    { k: 'm6', s: 0.5, up: 'more fines', dn: 'fewer fines' },
    { k: 'b2', s: 0.05, up: 'more calcium-ferrite bonding', dn: 'more silicate-glass bonding' }
  ];
  function lookEffects(A, B, n) {
    return LOOK_K.map(function (x) { var d = A[x.k] - B[x.k]; return { x: x, d: d, w: Math.abs(d) / x.s }; })
      .filter(function (e) { return e.w >= 0.5; }).sort(function (a, b) { return b.w - a.w; }).slice(0, n || 3);
  }
  function pageLook(m) {
    var after = state.inp, before = baselineInputs(), A = state.result, B = run(before);
    var dA = SinterLook.describe(A), dB = SinterLook.describe(B);
    var h = '<div class="card"><h2>Compare with</h2><p class="sub">Left: the <b>last sinter</b> (the baseline you choose). Right: the <b>recent sinter</b> (your latest prediction).</p><select class="sel" id="lkSel">' + baOpts() + '</select></div>';
    h += '<div class="card" style="padding:8px"><div class="viz-wrap look" id="lookWrap"><div class="look-tag l">Last sinter</div><div class="look-tag r">Recent sinter</div>' +
      '<div class="viz-tools"><button id="lkReplay">Replay forming</button><button id="lkPause">Pause</button></div><div class="look-phase" id="lkPhase"></div></div>' +
      '<p class="muted small" style="margin:6px 4px 0">Watch the green-mix granules gather, glow in the flame front, fuse and cool into sinter. Drag sideways to turn. Colour, porosity, lump size, fines and cracks follow the predicted FeO, RI, MPS, -6 mm and TI.</p></div>';
    var row = function (l, a, b) { return '<tr><td>' + l + '</td><td>' + esc(a) + '</td><td' + (a !== b ? ' class="chg"' : '') + '>' + esc(b) + '</td></tr>'; };
    var num = function (k, d) { return f(B[k], d) + ' → <b>' + f(A[k], d) + '</b>'; };
    h += '<div class="card"><h2>How they look</h2><div class="tbl-wrap"><table class="t look-t"><tr><th></th><th>Last sinter</th><th>Recent sinter</th></tr>' +
      row('Colour &amp; lustre', dB.colour, dA.colour) + row('Porosity', dB.pores, dA.pores) + row('Size', dB.size, dA.size) + row('Strength', dB.strength, dA.strength) + row('Bonding', dB.bond, dA.bond) +
      (dA.raw || dB.raw ? row('Unfused mix', dB.raw || 'none', dA.raw || 'none') : '') +
      '</table></div><p class="muted small">FeO ' + num('feo', 2) + ' % · RI ' + num('ri', 1) + ' · TI ' + num('ti', 1) + ' % · MPS ' + num('mps', 1) + ' mm · -6 mm ' + num('m6', 1) + ' % · B2 ' + num('b2', 2) + ' · RDI ' + num('rdi', 1) + '</p></div>';
    // major reasons: each input change applied on its own, ranked by how much it changes the look
    var diffs = inputDiffs(before, after), reasons = diffs.map(function (d) {
      var r1 = run(applyOne(before, d, after)), ef = lookEffects(r1, B, 2);
      return { d: d, ef: ef, w: ef.reduce(function (a, e) { return a + e.w; }, 0) };
    }).filter(function (x) { return x.w > 0; }).sort(function (a, b) { return b.w - a.w; }).slice(0, 4);
    var total = lookEffects(A, B, 4);
    h += '<div class="card"><h2>Major reasons for the change</h2>';
    if (!total.length) h += '<p class="sub">The two sinters should look practically the same' + (diffs.length ? ': the input changes are too small to show.' : ': no input differs from this baseline.') + '</p>';
    else {
      h += '<p class="sub">Overall the recent sinter should look ' + total.map(function (e) { return e.d > 0 ? e.x.up : e.x.dn; }).join('; ') + '.</p>';
      h += reasons.length ? '<ol class="reasons">' + reasons.map(function (x) {
        var d = x.d, ch = d.yn ? d.a + ' → ' + d.b : sgn(d.b - d.a, d.d) + ' ' + d.u;
        return '<li><b>' + esc(d.l) + '</b> ' + esc(ch) + '<div class="muted small">' + x.ef.map(function (e) { return shortName(e.x.k) + ' ' + sgn(e.d, e.x.k === 'b2' ? 2 : 1) + ': ' + (e.d > 0 ? e.x.up : e.x.dn); }).join(' · ') + '</div></li>';
      }).join('') + '</ol>' : '<p class="muted small">No single input explains it; the change comes from several small ones together.</p>';
    }
    h += '</div>';
    h += '<div class="card"><h2>What the look is based on</h2><ul class="small" style="padding-left:18px;margin:0">' +
      '<li>Higher FeO means more magnetite: magnetite is black and metallic, hematite steel-grey to rust-red (<a href="https://rockchasing.com/hematite-vs-magnetite/" data-ext>Hematite vs magnetite</a>, <a href="https://commonminerals.esci.umn.edu/minerals-g-m/hematite" data-ext>Univ. of Minnesota, hematite</a>).</li>' +
      '<li>Too much melt gives a glassy, dense structure with low reducibility; a hematite core with calcium-ferrite (SFCA) bond is favoured at higher basicity and gives good strength and RI; sinter has large irregular pores plus fine pores and cracks (<a href="https://www.ispatguru.com/sinter-quality-and-process-of-sintering-iron-ores/" data-ext>IspatGuru, sinter quality</a>).</li>' +
      '<li>FeO, RI, RDI and strength relations as on the References page (Mochon et al. 2014 and the studies it cites).</li>' +
      '<li>The 3D lumps are an illustration made from the predicted numbers, not a photo-real render.</li></ul></div>';
    h += '<div class="row"><button class="btn ghost" data-next="viz">← 3D sintering</button><span class="spacer"></span><button class="btn" data-next="refs">References</button></div>';
    m.innerHTML = h;
    $('#lkSel').value = state.baSel;
    $('#lkSel').onchange = function () { state.baSel = this.value; save(); go('look'); };
    $$('[data-ext]', m).forEach(function (a) { a.onclick = function (e) { e.preventDefault(); if (window.AndroidBridge && AndroidBridge.openLink) AndroidBridge.openLink(a.href); else window.open(a.href, '_blank'); }; });
    try { SinterLook.mount($('#lookWrap'), B, A); } catch (e) { $('#lookWrap').insertAdjacentHTML('beforeend', '<div class="note bad" style="position:absolute;top:40%;left:10%;right:10%">3D view needs WebGL: ' + esc(e.message) + '</div>'); }
    var ph = $('#lkPhase'), tick = setInterval(function () {
      if (state.page !== 'look' || !document.body.contains(ph)) { clearInterval(tick); return; }
      var t = SinterLook.t ? SinterLook.t() : 1;
      ph.textContent = t < 0.3 ? 'Green mix granules gathering' : t < 0.5 ? 'Flame front: melting and bonding' : t < 0.85 ? 'Cooling' : t < 1 ? 'Breaking into lumps' : 'Finished sinter';
    }, 300);
    $('#lkReplay').onclick = function () { SinterLook.replay(); $('#lkPause').textContent = 'Pause'; };
    $('#lkPause').onclick = function () { this.textContent = SinterLook.togglePause() ? 'Play' : 'Pause'; };
    bindNext(m);
  }
  function pageViz(m) {
    var r = state.result, inp = state.inp;
    var phys = SinterViz.physics(r, inp, cal.M);
    var h = '<div class="card" style="padding:8px"><div class="viz-wrap" id="vizWrap"><div class="viz-hud" id="vizHud"></div>' +
      '<div class="viz-tools"><button id="vzSec">Side view</button><button id="vzPause">Pause</button><button id="vzReset">Reset</button></div></div>' +
      '<div class="viz-legend"><div><i style="background:#3a3f47"></i>Sintered cake</div><div><i style="background:#ffd34d"></i>Flame front ' + f(phys.tmax, 0) + ' °C</div><div><i style="background:#c2461c"></i>Calcination / pre-heat</div><div><i style="background:#9b8a6a"></i>Drying zone</div><div><i style="background:#5b6f86"></i>Wet (over-wet) zone</div><div><i style="background:#888"></i>Hearth layer</div></div>' +
      '<p class="muted small" style="margin:6px 4px 0">Drag to rotate, pinch to zoom. Bed height is drawn ' + phys.vexag + '× taller than real so the zones are visible.</p></div>';
    h += '<div class="card"><h2>What the model sees on the strand</h2><div class="zone-list">' +
      zone('Pallet speed', f(phys.vPallet, 2) + ' m/min', 'machine speed input · charge rate implies ' + f(phys.vCharge, 2) + ' m/min') +
      zone('Strand length', f(phys.L, 1) + ' m', f(inp.area, 0) + ' m² / ' + f(phys.width, 1) + ' m wide') +
      zone('Burn-through point', f(phys.xBtp, 1) + ' m (' + f(phys.xBtp / phys.L * 100, 0) + ' %)', 'BTP waste gas ' + f(inp.btp, 0) + ' °C') +
      zone('Vertical sintering speed', f(phys.vss, 1) + ' mm/min', 'flame front travel down the bed') +
      zone('Flame-front thickness', f(phys.ffThick, 0) + ' mm', 'from fixed C ' + f(r.fcMix, 2) + ' % in mix') +
      zone('Peak bed temperature', f(phys.tmax, 0) + ' °C', 'indicative, rises with fuel / FeO') +
      zone('Sinter cake colour', r.feo > 10 ? 'Dark (magnetite-rich)' : 'Grey-red (hematite / SFCA)', 'FeO ' + f(r.feo, 2) + ' %') +
      zone('Lumps at discharge', 'MPS ' + f(r.mps, 1) + ' mm', 'TI ' + f(r.ti, 1) + ' % · −6 mm ' + f(r.m6, 1) + ' %') +
      '</div></div>';
    var ph = phys.phases;
    h += '<div class="card"><h2>Indicative sinter mineralogy</h2><p class="sub">Estimated from basicity and FeO using typical fluxed-sinter relations (Honeyands 2022, R7; Higuchi 2006, R10). For orientation only; confirm by optical microscopy.</p>' +
      '<div style="display:flex;height:22px;border-radius:6px;overflow:hidden">' + ph.map(function (p) { return '<div style="width:' + p.v + '%;background:' + p.c + '" title="' + p.l + '"></div>'; }).join('') + '</div>' +
      '<div class="row wrap small" style="margin-top:6px;gap:10px">' + ph.map(function (p) { return '<span><i style="display:inline-block;width:10px;height:10px;background:' + p.c + ';border-radius:2px"></i> ' + p.l + ' ' + f(p.v, 0) + ' %</span>'; }).join('') + '</div></div>';
    h += '<div class="row"><button class="btn ghost" data-next="lab">← Lab check</button><span class="spacer"></span><button class="btn primary" data-next="look">Sinter look →</button></div>';
    m.innerHTML = h;
    $('#vizHud').innerHTML = ['Speed ' + f(inp.speed, 2) + ' m/min', 'Bed ' + f(inp.bed, 0) + ' mm', 'BTP ' + f(inp.btp, 0) + ' °C', 'FeO ' + f(r.feo, 2) + ' %', 'TI ' + f(r.ti, 1) + ' %', 'MPS ' + f(r.mps, 1) + ' mm'].map(function (s) { return '<span>' + s + '</span>'; }).join('');
    try { SinterViz.mount($('#vizWrap'), r, inp, phys); } catch (e) { $('#vizWrap').insertAdjacentHTML('beforeend', '<div class="note bad" style="position:absolute;top:40%;left:10%;right:10%">3D view needs WebGL: ' + esc(e.message) + '</div>'); }
    $('#vzSec').onclick = function () { this.textContent = SinterViz.toggleSection() ? '3D view' : 'Side view'; };
    $('#vzPause').onclick = function () { this.textContent = SinterViz.togglePause() ? 'Play' : 'Pause'; };
    $('#vzReset').onclick = function () { SinterViz.resetView(); };
    bindNext(m);
  }
  function zone(t, v, s) { return '<div class="zone"><span class="muted small">' + t + '</span><b>' + v + '</b><span class="muted small">' + s + '</span></div>'; }

  // ---------- references ----------
  function pageRefs(m) {
    var h = '<section class="bn"><img class="bn-img" src="img/ocean-dawn.webp" alt="" loading="lazy" decoding="async" onerror="this.remove()"><div class="bn-shade"></div><div class="bn-in"><div class="bn-k">Learning &amp; knowledge</div><h1>Knowledge centre</h1><p>How the model works, the test standards and every published source behind it</p></div></section>' +
      '<div class="card"><h2>Published sources behind the model</h2><p class="sub">Every sensitivity in the model carries one of these IDs (see Sensitivity page). Tap a link to open the source.</p>' +
      SD.refs.filter(function (x) { return x[0]; }).concat([['R26', 'Kronberger, Schaler & Schönegger (2012) Latest Generation Sinter Process Optimization Systems, in Sintering – Methods and Products, InTech, ISBN 978-953-51-0371-4', 'Backward raw-mix calculation (one variable material per target: basicity, Fe, SiO₂, MgO, fuel), harmonic diameter Dh = 1/Σ(xᵢ/dᵢ) as the sinter permeability indicator, analysis plausibility check (100 % − Σ species), FeO held by coke control, BTP control worth +2–5 % productivity.', 'https://www.intechopen.com/chapters/33160']]).map(function (x) { return '<div class="ref"><b>' + esc(x[0]) + '</b> ' + esc(x[1]) + '<div class="muted small">' + esc(x[2] || '') + '</div>' + (x[3] ? '<a href="' + esc(x[3]) + '" data-link="' + esc(x[3]) + '">' + esc(x[3]) + '</a>' : '') + '</div>'; }).join('') + '</div>';
    h += '<div class="card"><h2>Extra parameters to log</h2><p class="sub">Ranked by accuracy gain (from the module\'s Param_Suggest sheet).</p><div class="tbl-wrap"><table class="t"><tr><th>Pri.</th><th>Parameter</th><th>Improves</th></tr>' +
      SD.paramSuggest.filter(function (x) { return x[1]; }).map(function (x) { return '<tr><td><span class="pill">' + esc(x[0]) + '</span></td><td>' + esc(x[1]) + ' <span class="muted small">' + esc(x[2] || '') + '</span><div class="muted small">' + esc(x[6] || '') + ' · ' + esc(x[7] || '') + '</div></td><td class="small">' + esc(x[5] || '') + '</td></tr>'; }).join('') + '</table></div></div>';
    h += '<div class="card"><h2>How the prediction works</h2><ul class="small" style="padding-left:18px">' +
      '<li><b>Chemistry</b>: mass balance – wet usage → dry mass (moisture) → burn-off (LOI, fixed C + VM) → oxides / sinter mass, then shifted by the average error vs your DPR actuals.</li>' +
      '<li><b>FeO, TI, size</b>: plant average + sensitivity × (driver − plant average). Drivers: basicity, Al₂O₃, MgO, fuel carbon, fines, speed, BTP, bed height, moisture, ore LOI, lime, coke size, ignition, suction, return fines.</li>' +
      '<li><b>RDI, RI, SI, AI</b>: same method, anchored to lab results (placeholder until you re-anchor on the Lab check page).</li>' +
      '<li><b>Target recipe</b>: the backward raw-mix calculation (Siemens VAI). One material per target is adjusted by Newton steps on this same model until basicity, MgO, FeO, Fe or SiO₂ reach your targets.</li>' +
      '<li><b>Harmonic diameter Dh</b>: 1 / Σ(xᵢ / dᵢ) over the size classes (class sizes 55, 45, 32.5, 17.5, 8 and 3 mm). Fewer fines give a higher Dh and a more permeable blast-furnace burden.</li>' +
      '<li><b>Production</b>: mass-balance sinter × yield factor ' + f(cal.M[26], 3) + ', or machine basis (DPR production × speed × bed).</li>' +
      '<li><b>Test standards</b>: ISO 3271 (TI), ISO 4696-1 (RDI), ISO 4695 / JIS M8713 (RI), ISO 4700 (SI).</li></ul>' +
      '<p class="muted small">Coefficients are literature values, not fitted to your plant. Once 20–30 days of RDI/RI are logged, re-fit them in the Excel module.</p></div>';
    h += '<div class="card"><h2>Reset</h2><p class="sub">Clear all inputs, lab results, chemistry edits and anchors.</p><button class="btn ghost" id="resetAll">Reset app data</button></div>';
    m.innerHTML = h;
    $$('[data-link]', m).forEach(function (a) { a.onclick = function (e) { e.preventDefault(); if (window.AndroidBridge && AndroidBridge.openLink) AndroidBridge.openLink(a.dataset.link); else window.open(a.dataset.link, '_blank'); }; });
    $('#resetAll').onclick = function () { try { localStorage.removeItem(STORE); } catch (e) { } location.reload(); };
  }

  // ---------- export ----------
  function reportBytes() {
    var r = state.result, wb = XLSX.utils.book_new(), rm = E.rmse(cal, state.ref, state.inp.biasOn);
    var res = [['SINTER PREDICTION REPORT'], ['Sinter Predict ' + window.SP_CONFIG.version + ', designed and developed by ' + (window.SP_CONFIG.author || '')].concat(isDemo() ? ['ILLUSTRATIVE: built-in demo data, not plant data'] : []), ['Scenario', state.loaded], ['Run at', state.ranAt], [], ['Group / Parameter', 'Unit', 'Predicted', 'Target min', 'Target max', 'Status', 'Typical error ±', 'Plant ref']];
    OUTS.forEach(function (o) {
      if (o.length === 2) { res.push([o[0] + '. ' + o[1]]); return; }
      var t = target(o[0]); res.push([o[1], o[2], +(+r[o[0]]).toFixed(4), t[0], t[1], status(o[0], r[o[0]])[1], rm[o[0]] ? +rm[o[0]].toFixed(4) : '', REF_KEY[o[0]] ? +(+r.M[REF_KEY[o[0]]]).toFixed(4) : '']);
    });
    var inpS = [['INPUTS'], ['Raw material', 'Wet MT/day']].concat(omap(function (n, i) { return [n, +(+state.inp.use[i]).toFixed(2)]; }))
      .concat([[], ['Parameter', 'Value', 'Unit']]).concat(MACH.concat(PROC).map(function (p) { var v = state.inp[p.k]; return [p.l, typeof v === 'boolean' ? (v ? 'Yes' : 'No') : v, p.u || '']; }));
    var labS = [['LAB vs PREDICTED'], ['Parameter', 'Predicted', 'Lab', 'Deviation']].concat(LAB.filter(function (p) { return isFinite(state.lab[p.k]); }).map(function (p) { return [p.l, +(+r[p.k]).toFixed(4), state.lab[p.k], +(state.lab[p.k] - r[p.k]).toFixed(4)]; }));
    [['Results', res], ['Inputs', inpS], ['Lab_vs_Predicted', labS]].forEach(function (s) { var ws = XLSX.utils.aoa_to_sheet(s[1]); ws['!cols'] = [{ wch: 40 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 10 }]; XLSX.utils.book_append_sheet(wb, ws, s[0]); });
    if (window.SinterAdvisor) SinterAdvisor.exportSheets(wb);
    var stamp = new Date().toISOString().slice(0, 16).replace(/[-:T]/g, '');
    return { name: 'Sinter_Prediction_' + stamp + '.xlsx', u8: new Uint8Array(XLSX.write(wb, { type: 'array', bookType: 'xlsx' })) };
  }
  function exportReport() { var o = reportBytes(); saveBytes(o.name, o.u8, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'); }

  // ---------- plant level: machine type and re-anchoring ----------
  var ANCH = [{ k: 'rdi', a: 30, l: 'RDI', s: '-3.15 mm, %' }, { k: 'ri', a: 32, l: 'RI', s: 'reducibility, %' }, { k: 'si', a: 34, l: 'SI', s: 'shatter +10 mm, %' }, { k: 'ai', a: 36, l: 'AI', s: 'abrasion -0.5 mm, %' }];
  function pagePlant(m) {
    var mc = state.machine, r = state.result || run(state.inp), hasRes = !!state.result;
    var labFor = function (x) { return hasRes && isFinite(state.lab[x.k]) ? cal.M[x.a] + (state.lab[x.k] - r[x.k]) : null; };
    var h = '';
    var L = state.anchorLog;
    if (L) {
      h += '<div class="card"><h2>Re-anchor result</h2><p class="sub">' + esc(L.at) + ' · predictions for your current inputs now start from these plant levels.</p><div class="tbl-wrap"><table class="t"><tr><th></th><th class="n">Level</th><th class="n">Before</th><th class="n">Now</th>' + (L.rows.some(function (x) { return x.lab != null; }) ? '<th class="n">Lab</th>' : '') + '</tr>' +
        L.rows.map(function (x) { var A = ANCH.find(function (y) { return y.k === x.k; }); return '<tr><td><b>' + A.l + '</b></td><td class="n">' + f(x.oldA, 1) + '→<b>' + f(x.newA, 1) + '</b></td><td class="n">' + f(x.before, 1) + '</td><td class="n"><b>' + f(x.after, 1) + '</b></td>' + (L.rows.some(function (y) { return y.lab != null; }) ? '<td class="n">' + (x.lab == null ? '–' : f(x.lab, 1)) + '</td>' : '') + '</tr>'; }).join('') +
        '</table></div>' + (hasRes ? '<div class="row wrap" style="margin-top:8px"><button class="btn" data-go="results">See all results →</button><button class="btn" data-go="lab">Lab check →</button></div>' : '') + '</div>';
    }
    h += '<div class="card"><h2>Re-anchor RDI / RI / SI / AI</h2><p class="sub">The module\'s DPR has no RDI, RI, SI or AI data, so the model starts from placeholder plant averages. Enter your plant\'s typical value (for example last month\'s average), or use the value worked out from your latest lab result, then tap Re-anchor. Leave a box empty to keep it as it is.</p>' +
      '<div class="tbl-wrap"><table class="t"><tr><th></th><th class="n">Model now</th><th class="n">From lab</th><th>Your plant</th></tr>' +
      ANCH.map(function (x) {
        var fl = labFor(x), cur = cal.M[x.a], anch = isFinite(state.anchors[x.k]);
        return '<tr><td><b>' + x.l + '</b><div class="muted small">' + x.s + '</div><span class="pill">' + (anch ? 'anchored' : 'placeholder') + '</span></td><td class="n">' + f(cur, 1) + '</td><td class="n">' + (fl == null ? '<span class="muted small">no lab value</span>' : '<a href="#" class="useLab" data-k="' + x.k + '" data-v="' + fl + '">' + f(fl, 1) + '<br>use</a>') + '</td>' +
          '<td><input class="anIn" data-k="' + x.k + '" inputmode="decimal" style="width:62px" value="' + (fl != null ? +fl.toFixed(1) : '') + '" placeholder="' + f(cur, 1) + '"></td></tr>';
      }).join('') + '</table></div><div class="auth-err" id="anErr"></div>' +
      '<div class="row wrap"><button class="btn primary" id="anGo">Re-anchor</button>' + (Object.keys(state.anchors).length ? '<button class="btn ghost" id="anReset">Back to placeholders</button>' : '') + '</div>' +
      '<p class="muted small">"From latest lab" = model level + (lab − predicted), so it already allows for today\'s blend and machine settings.</p></div>';
    var mt = MACHINES.find(function (x) { return x.id === mc.type; }) || MACHINES[1];
    h += '<div class="card"><h2>Sinter machine type</h2><p class="sub">Used for productivity, the 3D strand and the speed conversion, so every prediction is made for your machine.</p>' +
      '<label class="af"><span>Machine type</span><select class="sel" id="mcType">' + MACHINES.map(function (x) { return '<option value="' + x.id + '"' + (x.id === mt.id ? ' selected' : '') + '>' + x.l + '</option>'; }).join('') + '</select></label>' +
      '<label class="af"><span>Machine name / make (optional)</span><input id="mcName" value="' + esc(mc.name || '') + '" placeholder="e.g. SMS #2, 120 m² Outotec"></label>' +
      '<div class="row wrap" style="gap:10px"><label class="af" style="flex:1;min-width:120px"><span>Suction area (m²)</span><input id="mcArea" inputmode="decimal" value="' + tvn(mc.area) + '"></label>' +
      '<label class="af" style="flex:1;min-width:120px"><span>Pallet width (m)</span><input id="mcWidth" inputmode="decimal" value="' + tvn(mc.width) + '"></label></div>' +
      '<label class="af"><span>Speed factor (m/min per Hz of drive)</span><input id="mcK" inputmode="decimal" value="' + tvn(mc.k) + '"></label>' +
      '<p class="muted small">Machine speed is entered in m/min. The model was fitted on the drive frequency in the DPR (Hz), so it needs your factor = pallet speed ÷ drive frequency. Work it out:</p>' +
      '<div class="row wrap" style="gap:8px;align-items:flex-end"><label class="af" style="flex:1;min-width:100px"><span>Pallet speed (m/min)</span><input id="mcV" inputmode="decimal"></label><label class="af" style="flex:1;min-width:100px"><span>at drive (Hz)</span><input id="mcHz" inputmode="decimal"></label><button class="btn small" id="mcCalc">Work out</button></div>' +
      '<div class="row wrap" style="margin-top:8px"><button class="btn primary" id="mcSave">Save machine</button><button class="btn ghost" id="mcDef">Module default</button></div></div>';
    m.innerHTML = h;
    $$('.useLab', m).forEach(function (a) { a.onclick = function (e) { e.preventDefault(); $('.anIn[data-k=' + a.dataset.k + ']').value = (+a.dataset.v).toFixed(1); }; });
    $('#anGo').onclick = function () {
      var picks = {}, bad = false;
      $$('.anIn', m).forEach(function (el) { var v = el.value.trim(); if (v === '') return; var n = num(v); if (n == null || n < 0 || n > 100) bad = true; else picks[el.dataset.k] = n; });
      var e = $('#anErr');
      if (bad || !Object.keys(picks).length) { e.textContent = bad ? 'Values must be numbers between 0 and 100.' : 'Enter at least one plant level (or tap "use" next to a lab value).'; e.style.display = 'block'; return; }
      var before = run(state.inp), old = {};
      ANCH.forEach(function (x) { old[x.k] = cal.M[x.a]; });
      Object.keys(picks).forEach(function (k) { state.anchors[k] = picks[k]; });
      recal(); var after = run(state.inp); if (state.result) state.result = after;
      state.anchorLog = { at: new Date().toLocaleString('en-IN'), rows: ANCH.filter(function (x) { return x.k in picks; }).map(function (x) { return { k: x.k, oldA: old[x.k], newA: cal.M[x.a], before: before[x.k], after: after[x.k], lab: isFinite(state.lab[x.k]) ? state.lab[x.k] : null }; }) };
      save(); toast('Model re-anchored to your plant level'); go('plant');
    };
    if ($('#anReset')) $('#anReset').onclick = function () { state.anchors = {}; state.anchorLog = null; recal(); if (state.result) state.result = run(state.inp); save(); toast('Anchors reset to placeholders'); go('plant'); };
    $('#mcType').onchange = function () { var t = MACHINES.find(function (x) { return x.id === $('#mcType').value; }); if (t && t.area) { $('#mcArea').value = t.area; $('#mcWidth').value = t.width; } };
    $('#mcCalc').onclick = function () { var v = num($('#mcV').value), z = num($('#mcHz').value); if (!(v > 0 && z > 0)) { toast('Enter both pallet speed and drive Hz'); return; } $('#mcK').value = +(v / z).toFixed(4); };
    $('#mcSave').onclick = function () {
      var a = num($('#mcArea').value), w = num($('#mcWidth').value), k = num($('#mcK').value);
      if (!(a >= 10 && a <= 1000) || !(w >= 1 && w <= 7) || !(k > 0.005 && k < 1)) { toast('Check area (10–1000 m²), width (1–7 m) and speed factor'); return; }
      state.machine = { type: $('#mcType').value, name: $('#mcName').value.trim().slice(0, 60), area: a, width: w, k: k };
      state.inp.area = a; state.inp.width = w;
      if (state.result) state.result = run(state.inp);
      save(); toast('Machine saved'); go('plant');
    };
    $('#mcDef').onclick = function () { var d = defaultMachine(); $('#mcType').value = d.type; $('#mcName').value = ''; $('#mcArea').value = d.area; $('#mcWidth').value = d.width; $('#mcK').value = d.k; };
  }
  function tvn(v) { return v == null || v === '' ? '' : +(+v).toFixed(4); }

  // ---------- admin panel ----------
  function pageAdmin(m) {
    var A = SinterAuth, keys = Object.keys(SD.targets).filter(function (l) { return TGT_LABEL[l]; }), ov = adminTargets();
    var tv = function (v) { return v == null ? '' : v; };
    m.innerHTML = '<div class="card"><h2>Admin login</h2><p class="sub">Change the admin ID or password. Only a salted hash is stored. The change applies on this device; use Settings backup below to copy it to other devices.</p>' +
      '<label class="af"><span>Admin ID</span><input id="adId" value="' + esc(A.adminId()) + '" autocapitalize="none"></label>' +
      '<label class="af"><span>Current password</span><input id="adCur" type="password" autocomplete="current-password"></label>' +
      '<label class="af"><span>New password (leave empty to keep)</span><input id="adNew" type="password" autocomplete="new-password"></label>' +
      '<label class="af"><span>Confirm new password</span><input id="adNew2" type="password" autocomplete="new-password"></label>' +
      '<div class="auth-err" id="adErr"></div><button class="btn primary" id="adSave">Save admin login</button></div>' +
      '<div class="card"><h2>Account server</h2><p class="sub">Web app URL of the Google Apps Script backend (ends in /exec). When it is set, every user must register with an e-mail OTP.</p>' +
      '<label class="af"><span>Server URL</span><input id="adUrl" value="' + esc(A.backend()) + '" placeholder="https://script.google.com/macros/s/…/exec" autocapitalize="none"></label>' +
      '<div class="row wrap"><button class="btn primary" id="adUrlSave">Save URL</button><button class="btn" id="adUrlTest">Test connection</button></div><p class="small" id="adUrlMsg"></p></div>' +
      '<div class="card"><h2>Published results to Google Drive</h2><p class="sub">Web app URL of the <b>Sinter Predict – Results to Drive</b> Apps Script (ends in /exec). Every prediction where at least ' + (window.SP_CONFIG.publishMinUserPct || 95) + ' % of the inputs are the user\'s own data is saved to your Drive, with the Master Sheet of that time. Blank = use the account server URL. Copy it to other devices with Settings backup, or have it built into the app.</p>' +
      '<label class="af"><span>Drive web app URL</span><input id="adDrive" value="' + esc(A.setDriveUrl ? (localStorage.getItem('sp.driveUrl') ? JSON.parse(localStorage.getItem('sp.driveUrl')) : '') : '') + '" placeholder="' + esc(A.driveUrl() || 'https://script.google.com/macros/s/…/exec') + '" autocapitalize="none"></label>' +
      '<div class="row wrap"><button class="btn primary" id="adDriveSave">Save</button><button class="btn" id="adDriveTest">Test connection</button></div><p class="small" id="adDriveMsg"></p></div>' +
      '<div class="card"><h2>Guest access</h2><p class="sub">Users can tap “Use the app without login” on the login screen; login and registration stay optional. Turn this off on a device to require login there.</p>' +
      '<label class="chk"><input type="checkbox" id="adGuest"' + (A.guestAllowed() ? ' checked' : '') + '><span class="k">Allow “Use the app without login”</span></label></div>' +
      '<div class="card"><h2>Quality targets</h2><p class="sub">Limits used on Results, Before/After and Lab pages. Leave a box empty for no limit.</p><table class="t"><tr><th>Parameter</th><th>Min</th><th>Max</th></tr>' +
      keys.map(function (l) { var k = TGT_LABEL[l], t = ov[k] || SD.targets[l]; return '<tr><td class="small">' + esc(l) + (ov[k] ? ' <span class="pill">edited</span>' : '') + '</td><td><input class="adT" data-k="' + k + '" data-i="0" inputmode="decimal" style="width:70px" value="' + tv(t[0]) + '"></td><td><input class="adT" data-k="' + k + '" data-i="1" inputmode="decimal" style="width:70px" value="' + tv(t[1]) + '"></td></tr>'; }).join('') +
      '</table><div class="row wrap"><button class="btn primary" id="adTSave">Save targets</button><button class="btn ghost" id="adTReset">Reset to module values</button></div></div>' +
      '<div class="card"><h2>Settings backup</h2><p class="sub">Export the admin login, server URL, guest setting and targets to a file, then import it on your other phones and computers.</p>' +
      '<div class="row wrap"><button class="btn" id="adExp">Export settings</button><button class="btn" id="adImp">Import settings</button></div>' +
      '<p class="muted small">New pages, features or model changes need an app update. Send them as a suggestion and they will be built into the next version.</p></div>';
    $('#adSave').onclick = function () {
      var n = $('#adNew').value, e = n !== $('#adNew2').value ? 'New passwords do not match.' : A.adminChange($('#adCur').value, $('#adId').value, n);
      var el = $('#adErr'); el.textContent = e || ''; el.style.display = e ? 'block' : 'none';
      if (!e) { toast('Admin login saved'); pageAdmin(m); }
    };
    $('#adUrlSave').onclick = function () {
      var u = $('#adUrl').value.trim();
      if (u && !/^https:\/\/script\.google(usercontent)?\.com\/.+\/exec$/.test(u)) { $('#adUrlMsg').textContent = 'That does not look like an Apps Script web app URL (https://script.google.com/macros/s/…/exec).'; return; }
      A.setBackend(u); toast(u ? 'Server URL saved. Accounts are on.' : 'Server URL cleared'); pageAdmin(m);
    };
    $('#adUrlTest').onclick = function () {
      var msg = $('#adUrlMsg'), u = $('#adUrl').value.trim(), old = A.backend(); if (!u) { msg.textContent = 'Enter a URL first.'; return; }
      msg.textContent = 'Testing…'; A.setBackend(u);
      A.call('ping', {}).then(function () { msg.textContent = '✓ Server answered. Tap Save URL to keep it.'; }).catch(function (e) { msg.textContent = '✗ ' + e.message; }).then(function () { A.setBackend(old); });
    };
    $('#adDriveSave').onclick = function () {
      var u = $('#adDrive').value.trim();
      if (u && !/^https:\/\/script\.google(usercontent)?\.com\/.+\/exec$/.test(u)) { $('#adDriveMsg').textContent = 'That does not look like an Apps Script web app URL (https://script.google.com/macros/s/…/exec).'; return; }
      A.setDriveUrl(u); toast(u ? 'Drive URL saved' : 'Drive URL cleared'); if (window.SinterBuilder && SinterBuilder.flushPublish) SinterBuilder.flushPublish(); pageAdmin(m);
    };
    $('#adDriveTest').onclick = function () {
      var msg = $('#adDriveMsg'), u = $('#adDrive').value.trim() || A.driveUrl(); if (!u) { msg.textContent = 'Enter a URL first.'; return; }
      msg.textContent = 'Testing…';
      A.postTo(u, 'ping', {}).then(function (j) { msg.textContent = '✓ Drive web app answered' + (j.folder ? ': results go to "' + j.folder + '"' : '') + '.'; }).catch(function (e) { msg.textContent = '✗ ' + e.message; });
    };
    $('#adGuest').onchange = function () { A.setGuest(this.checked); toast(this.checked ? 'Guest access on' : 'Guest access off'); };
    $('#adTSave').onclick = function () {
      var o = {}, bad = false;
      keys.forEach(function (l) { var k = TGT_LABEL[l]; o[k] = SD.targets[l].slice(); });
      $$('.adT', m).forEach(function (el) { var v = el.value.trim(), n = v === '' ? null : num(v); if (v !== '' && n == null) bad = true; o[el.dataset.k][+el.dataset.i] = n; });
      if (bad) { toast('Check the numbers'); return; }
      keys.forEach(function (l) { var k = TGT_LABEL[l]; if (o[k][0] === SD.targets[l][0] && o[k][1] === SD.targets[l][1]) delete o[k]; });
      setAdminTargets(o); state.targets = defaultTargets(); save(); toast('Targets saved'); pageAdmin(m);
    };
    $('#adTReset').onclick = function () { setAdminTargets({}); state.targets = defaultTargets(); save(); toast('Targets reset'); pageAdmin(m); };
    $('#adExp').onclick = function () {
      var o = A.settings(); o.targets = adminTargets(); o.app = 'SinterPredict'; o.exported = new Date().toISOString();
      saveBytes('SinterPredict_settings.json', new TextEncoder().encode(JSON.stringify(o, null, 1)), 'application/json');
    };
    $('#adImp').onclick = function () {
      var fi = document.createElement('input'); fi.type = 'file'; fi.accept = '.json,application/json,text/plain';
      fi.onchange = function () {
        var fl = fi.files[0]; if (!fl) return; var rd = new FileReader();
        rd.onload = function () {
          try { var o = JSON.parse(rd.result); if (o.app !== 'SinterPredict') throw 0; A.applySettings(o); setAdminTargets(o.targets || {}); state.targets = defaultTargets(); save(); toast('Settings imported'); pageAdmin(m); }
          catch (e) { toast('Not a Sinter Predict settings file'); }
        };
        rd.readAsText(fl);
      };
      fi.click();
    };
  }

  // ---------- boot ----------
  function boot() {
    if (window.pdfjsLib) { try { pdfjsLib.GlobalWorkerOptions.workerSrc = 'lib/pdf.worker.min.js'; } catch (e) { } }
    recal(); load(); PR.setUserAliases(state.aliasMap || {});
    document.addEventListener('click', function (e) { var g = e.target.closest('[data-go]'); if (g && !g.disabled) go(g.dataset.go); });
    $('#btnBack').onclick = function () { if (!window.appBack() && window.IMLeave) window.IMLeave(); };
    $('#btnMenu').onclick = function () {
      var ses = SinterAuth.session(), pr = (ses && ses.profile) || {};
      openSheet('Menu', '<div class="chk" data-m="profile"><span class="k">' + ic('user') + esc(pr.name || 'My profile') + '<small>' + esc((pr.company || '') + (pr.email ? ' · ' + pr.email : '')) + ' · log out / delete account</small></span></div>' +
        (SinterAuth.isAdmin() ? '<div class="chk" data-m="admin"><span class="k">' + ic('settings-2') + 'Admin panel<small>Admin login, account server, guest access, quality targets, settings backup</small></span></div>' : '') +
        '<div class="chk" data-m="flow"><span class="k">' + ic('workflow') + 'Process flow 3D<small>Animated sinter making, yard to BF bunker, every material input</small></span></div>' +
        '<div class="chk" data-m="plant"><span class="k">' + ic('factory') + 'Plant level<small>Sinter machine type, speed factor, re-anchor RDI / RI / SI / AI</small></span></div>' +
        '<div class="chk" data-m="adv"><span class="k">' + ic('compass') + 'Process advisor<small>Target vs actual dashboard, root cause advisor, recovery planner</small></span></div>' +
        (state.result ? '<div class="chk" data-m="recipe"><span class="k">' + ic('calculator') + 'Target recipe<small>Materials needed for your target basicity, MgO, FeO, Fe, SiO₂</small></span></div>' : '') +
        '<div class="chk" data-m="suggest"><span class="k">' + ic('lightbulb') + 'Suggest a feature or change<small>Goes straight to the admin by e-mail</small></span></div>' +
        '<div class="chk" data-m="refs"><span class="k">' + ic('book-open') + 'References &amp; model<small>Sources, parameters to log, how it works</small></span></div>' +
        '<div class="chk" data-m="tpl"><span class="k">' + ic('file-spreadsheet') + 'Download input template<small>Excel with Blend, Machine, Lab_Results, RM_Chemistry sheets</small></span></div>' +
        (state.result ? '<div class="chk" data-m="exp"><span class="k">' + ic('download') + 'Export report (.xlsx)<small>Results, inputs and lab comparison</small></span></div>' : '') +
        window.SP_SIGN('menu') + '<p class="muted small center">Sinter Predict ' + esc(window.SP_CONFIG.version) + ' · ' + esc(SinterAuth.platform()) + ' · model from Sinter_Prediction_Module_v2.xlsx</p>', [{ l: 'Close', fn: closeSheet }]);
      $$('#sheet [data-m]').forEach(function (el) { el.onclick = function () { closeSheet(); ({ flow: function () { go('flow'); }, refs: function () { go('refs'); }, profile: function () { go('profile'); }, suggest: function () { go('suggest'); }, admin: function () { go('admin'); }, plant: function () { go('plant'); }, recipe: function () { go('recipe'); }, adv: function () { go('adv'); }, tpl: function () { downloadTemplate(false); }, exp: exportReport })[el.dataset.m](); }; });
    };
    $('#sheetBg').onclick = closeSheet;
    $('#btnSuggest').onclick = function () { go('suggest'); };
    SinterAuth.start(function () {
      var p = state.page;
      go('home');
    });
  }
  window.SinterApp = { state: state, go: go, downloadTemplate: downloadTemplate, run: function (x) { return run(x || state.inp); }, cal: function () { return cal; } };
  // read-only helpers for the Process Advisor add-on (advisor.js); it keeps its own records under its own key
  window.SinterApp.ctx = {
    state: state, run: run, cal: function () { return cal; }, E: E, SD: SD, MAT: MAT, ORD: ORD, MACH: MACH, PROC: PROC, LAB: LAB, OUT: OUT, OUTS: OUTS,
    f: f, esc: esc, sgn: sgn, num: num, toast: toast, save: save, go: go, openSheet: openSheet, closeSheet: closeSheet, saveBytes: saveBytes,
    analysisChecks: analysisChecks, gapFill: gapFill, assumedSummary: assumedSummary, assumedNote: assumedNote, LABDEF: LAB, CHEMF: CHEMF, PROC_: PROC, status: status, target: target, tgtText: tgtText, chip: chip, gauge: gauge, isDemo: isDemo, labHarmonic: labHarmonic, solveRecipe: solveRecipe, RC: RC, inputDiffs: inputDiffs, applyOne: applyOne,
    useFromPct: useFromPct, useFromKgt: useFromKgt, recal: recal, doPredict: doPredict, exportReport: exportReport, reportBytes: reportBytes, b64: b64, MACHINES: MACHINES, openNormals: openNormals,
    baseFor: function (sel) { var o = state.baSel; state.baSel = sel; var b = baselineInputs(); state.baSel = o; return b; }, days: days, hzToMpm: hzToMpm
  };
  // author signature, shown under every page and on the login screen
  window.SP_SIGN = function (cls) {
    var n = esc(window.SP_CONFIG.author || '');
    return n ? '<div class="sign-in ' + (cls || '') + '"><span class="sign-l">Designed &amp; developed by</span><span class="sign-n">' + n + '</span>' +
      '<svg class="sign-u" viewBox="0 0 220 18" preserveAspectRatio="none"><path d="M6 12 C 46 3, 92 16, 132 8 S 196 3, 214 10"/></svg></div>' : '';
  };
  function paintSign() { var el = $('#sign'); if (el) el.innerHTML = window.SP_SIGN() + '<div class="sign-v">Sinter Predict ' + esc(window.SP_CONFIG.version) + '</div>'; }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { paintSign(); boot(); }); else { paintSign(); boot(); }
})();
