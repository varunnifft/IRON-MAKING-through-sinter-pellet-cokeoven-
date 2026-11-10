/* Coke Making app: upload the Excel template or enter values by hand; anything not given can be taken from the
   reference (master) data, item by item, before the calculation. */
(function () {
  'use strict';
  var R = window.COKE_REF, E = window.CokeEngine;
  var REF_FILE = 'Coke_Quality_Module_Reference_Data.xlsx', BLANK_FILE = 'Coke_Quality_Input_Template_Blank.xlsx';
  var INFO = { orient: 1, fuel: 1, H: 1, wallT: 1, flues: 1, age: 1, cond: 1, Twall: 1, ptop: 1, ram: 1, air: 1, Twg: 1, suction: 1, sole: 1, qdur: 1, oil: 1, batch: 1, date: 1,
    GCV: 1, Tmf: 1, dil: 1, contr: 1, FSI: 1, HGI: 1, vit: 1, lipt: 1 };
  var REQUIRED_CHOICE = { type: 1, charge: 1, quench: 1 };
  var COAL_COLS = ['C', 'D', 'E', 'F', 'G', 'H'];
  var KEY = 'cm.state.v1';

  function $(s, el) { return (el || document).querySelector(s); }
  function $$(s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function blank(v) { return v === undefined || v === null || (typeof v === 'string' && v.trim() === '') || (typeof v === 'number' && !isFinite(v)); }
  function f(v, d) { if (v === null || v === undefined || (typeof v === 'number' && !isFinite(v))) return '<span class="dash">—</span>'; if (typeof v !== 'number') return esc(v);
    return v.toLocaleString('en-IN', { minimumFractionDigits: d, maximumFractionDigits: d }); }
  function fx(v, d) { return typeof v === 'number' && isFinite(v) ? +v.toFixed(d) : ''; }
  function toast(m) { var t = $('#toast'); t.textContent = m; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove('show'); }, 2800); }
  var IC = {
    up: '<path d="M12 15V3M7 8l5-5 5 5M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/>', edit: '<path d="M4 20h4L19 9l-4-4L4 16zM14 6l4 4"/>',
    dl: '<path d="M12 3v12M7 10l5 5 5-5M4 19h16"/>', xl: '<path d="M6 3h9l5 5v13H6zM14 3v6h6M9 13l4 5M13 13l-4 5"/>', play: '<path d="M7 4l12 8-12 8z"/>',
    flame: '<path d="M12 22c4 0 7-3 7-7 0-5-5-7-5-12-3 2-6 6-6 9-1-1-2-2-2-4-2 2-1 5-1 7 0 4 3 7 7 7z"/>', gauge: '<path d="M4 18a8 8 0 1 1 16 0M12 18l4-6"/>',
    box: '<path d="M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10"/>', heat: '<path d="M8 3c0 3-3 4-3 8a7 7 0 0 0 14 0c0-4-3-5-3-8M12 21v-6"/>',
    warn: '<path d="M12 3l9 16H3zM12 10v4M12 17v.5"/>', ok: '<path d="M20 6L9 17l-5-5"/>', book: '<path d="M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4zM20 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z"/>',
    mix: '<path d="M4 6h16M4 12h10M4 18h6M18 12l2 2-2 2M14 18l2 2-2 2"/>', reset: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5"/>', link: '<path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>',
    coal: '<path d="M3 20L9 9l4 5 3-4 5 10z"/>', rupee: '<path d="M6 4h12M6 9h12M6 4c6 0 8 2 8 5s-3 5-8 5l8 7"/>'
  };
  function ic(n) { return '<svg class="ic" viewBox="0 0 24 24">' + IC[n] + '</svg>'; }

  // ---------------- state ----------------
  function refValues() {
    var o = {}; R.defs.forEach(function (d) { o[d.k] = d.ref; });
    var coals = [0, 1, 2, 3, 4, 5].map(function (i) { var c = {}; R.coal.forEach(function (p) { c[p.k] = p.ref[i]; }); return c; });
    return { o: o, coals: coals, targets: JSON.parse(JSON.stringify(R.targets)), lab: R.lab, coefSet: R.coefSet };
  }
  function emptyForm() {
    var o = {}; R.defs.forEach(function (d) { o[d.k] = ''; });
    var coals = [0, 1, 2, 3, 4, 5].map(function () { var c = {}; R.coal.forEach(function (p) { c[p.k] = ''; }); return c; });
    return { o: o, coals: coals, targets: JSON.parse(JSON.stringify(R.targets)), coefSet: 'Fitted', useRefLab: true };
  }
  var S = load() || { mode: 'reference', inputMode: 'upload', form: emptyForm(), raw: null, items: [], fileName: '', vals: refValues(), src: {}, step: 1 };
  function save() { try { localStorage.setItem(KEY, JSON.stringify({ mode: S.mode, inputMode: S.inputMode, form: S.form, raw: S.raw, items: S.items, fileName: S.fileName, vals: S.vals, src: S.src, step: S.step })); } catch (e) { } }
  function load() { try { var s = JSON.parse(localStorage.getItem(KEY) || 'null'); if (s && s.vals) return s; } catch (e) { } return null; }
  var RES = null;
  function run() { RES = E.compute(S.vals); return RES; }

  // ---------------- missing-input detection ----------------
  function defOf(k) { return R.defs.filter(function (d) { return d.k === k; })[0]; }
  function coalDef(k) { return R.coal.filter(function (p) { return p.k === k; })[0]; }
  function unitTxt(u) { return u ? ' (' + u + ')' : ''; }
  function detect(raw) {
    var items = [], type = blank(raw.o.type) ? defOf('type').ref : raw.o.type, NR = type === 'Non-recovery';
    R.defs.forEach(function (d) {
      if (d.k === 'Mover') return;               // blank = use the blend moisture
      if (d.nr && !NR) return;                   // non-recovery fields only matter for non-recovery ovens
      if (!blank(raw.o[d.k])) return;
      var info = !!INFO[d.k], req = !!REQUIRED_CHOICE[d.k];
      items.push({ id: 'o.' + d.k, label: d.label, unit: d.unit, ref: d.ref, grp: d.sheet === 'Oven_Config' ? 'Oven configuration' : 'Operations', info: info, req: req, choice: info ? 'skip' : 'take' });
    });
    var used = [];
    raw.coals.forEach(function (c, i) { if (!blank(c.pct) && +c.pct > 0 || !blank(c.name)) used.push(i); });
    if (!used.length) items.push({ id: 'blend', label: 'Coal blend (all six coals)', unit: '', ref: 'Reference 6-coal blend', grp: 'Coal blend', info: false, req: false, choice: 'take' });
    used.forEach(function (i) {
      R.coal.forEach(function (p) {
        if (!blank(raw.coals[i][p.k])) return;
        var nm = blank(raw.coals[i].name) ? 'Coal ' + (i + 1) : raw.coals[i].name;
        var info = !!INFO[p.k];
        items.push({ id: 'c.' + i + '.' + p.k, label: (p.k === 'name' ? 'Coal ' + (i + 1) + ' · name' : nm + ' · ' + p.label), unit: p.unit, ref: p.ref[i], grp: 'Coal blend', info: info || p.k === 'name', req: false, choice: (info || p.k === 'name') ? 'skip' : 'take' });
      });
    });
    if (raw.coefSet === 'Fitted' && (!raw.lab || !raw.lab.length)) items.push({ id: 'lab', label: 'Lab calibration data (fits the CSR, CRI, M40, M10 and yield models)', unit: '', ref: R.lab.length + ' reference batches', grp: 'Model', info: false, req: false, choice: 'take' });
    return items;
  }
  function applyItems() {
    var raw = S.raw, v = { o: {}, coals: [], targets: raw.targets, lab: raw.lab || [], coefSet: raw.coefSet || 'Default' }, src = {};
    R.defs.forEach(function (d) { v.o[d.k] = raw.o[d.k]; if (!blank(raw.o[d.k])) src['o.' + d.k] = 'user'; });
    v.coals = raw.coals.map(function (c, i) { var o = {}; R.coal.forEach(function (p) { o[p.k] = c[p.k]; if (!blank(c[p.k])) src['c.' + i + '.' + p.k] = 'user'; }); return o; });
    S.items.forEach(function (it) {
      var take = it.choice === 'take';
      if (it.id === 'blend') {
        if (take) v.coals = refValues().coals;
        for (var i = 0; i < 6; i++) R.coal.forEach(function (p) { src['c.' + i + '.' + p.k] = take ? 'ref' : 'skip'; });
      } else if (it.id === 'lab') { if (take) v.lab = R.lab; else v.coefSet = 'Default'; src.lab = take ? 'ref' : 'skip'; }
      else {
        var a = it.id.split('.');
        if (a[0] === 'o') { v.o[a[1]] = take ? it.ref : null; src[it.id] = take ? 'ref' : 'skip'; }
        else { v.coals[+a[1]][a[2]] = take ? it.ref : null; src[it.id] = take ? 'ref' : 'skip'; }
      }
    });
    if (raw.lab && raw.lab.length && !src.lab) src.lab = raw.labRef ? 'ref' : 'user';
    S.vals = v; S.src = src; S.mode = 'user';
  }

  // ---------------- Excel upload ----------------
  function readWorkbook(buf, name) {
    var wb = XLSX.read(buf, { type: 'array', cellDates: true });
    var has = function (n) { return !!wb.Sheets[n]; };
    if (!has('Oven_Config') && !has('Coal_Blend') && !has('Operations')) throw new Error('This file is not the coke input template. Download "' + REF_FILE + '" from this page, fill your values and upload it.');
    var cell = function (sh, a) {
      var ws = wb.Sheets[sh]; if (!ws || !ws[a]) return null; var c = ws[a], v = c.v;
      if (v instanceof Date) return ('0' + v.getDate()).slice(-2) + '-' + ('0' + (v.getMonth() + 1)).slice(-2) + '-' + v.getFullYear();
      if (typeof v === 'string') { v = v.trim(); if (v === '') return null; var n = Number(v.replace(/,/g, '')); if (v !== '' && isFinite(n) && /^[-+.\d,eE]+$/.test(v)) return n; }
      return v;
    };
    var raw = { o: {}, coals: [], targets: JSON.parse(JSON.stringify(R.targets)), lab: [], coefSet: 'Default' };
    R.defs.forEach(function (d) { var v = cell(d.sheet, d.cell); if (d.type === 'num' && typeof v === 'string') v = null; raw.o[d.k] = v; });
    for (var i = 0; i < 6; i++) {
      var c = {}; R.coal.forEach(function (p) { var v = cell('Coal_Blend', COAL_COLS[i] + p.row); if (p.k !== 'name' && typeof v === 'string') v = null; c[p.k] = v; }); raw.coals.push(c);
    }
    if (has('Deviation_Actions')) raw.targets.forEach(function (t) {
      if (t.k === 'chM' || t.k === 'bFine') return;
      var mn = cell('Deviation_Actions', 'D' + t.row), mx = cell('Deviation_Actions', 'E' + t.row);
      t.min = typeof mn === 'number' ? mn : null; t.max = typeof mx === 'number' ? mx : null;
    });
    var cs = cell('Quality_Predict', 'C5'); raw.coefSet = cs === 'Fitted' ? 'Fitted' : 'Default';
    if (has('Lab_Calibration')) for (var r = 8; r <= 57; r++) {
      var row = []; for (var cI = 0; cI < 19; cI++) row.push(cell('Lab_Calibration', XLSX.utils.encode_col(cI) + r));
      if (!blank(row[0]) && typeof row[15] === 'number') raw.lab.push(row);
    }
    S.raw = raw; S.fileName = name; S.items = detect(raw); S.step = 2; S.inputMode = 'upload'; save();
    var userN = countUser(raw);
    toast('Read ' + userN + ' values from ' + name + (S.items.length ? ' · ' + S.items.length + ' missing' : ''));
  }
  function countUser(raw) {
    var n = 0; R.defs.forEach(function (d) { if (!blank(raw.o[d.k])) n++; });
    raw.coals.forEach(function (c) { R.coal.forEach(function (p) { if (!blank(c[p.k])) n++; }); }); return n;
  }
  function pickFile() { var fi = $('#file'); fi.value = ''; fi.click(); }
  $('#file').addEventListener('change', function () { var fl = this.files && this.files[0]; if (fl) readFile(fl); });
  function readFile(fl) {
    var fr = new FileReader();
    fr.onload = function () { try { readWorkbook(new Uint8Array(fr.result), fl.name); renderInput(); } catch (e) { toast(e.message || 'Could not read the file'); } };
    fr.readAsArrayBuffer(fl);
  }

  // ---------------- manual form ----------------
  function formToRaw() {
    var F = S.form, raw = { o: {}, coals: [], targets: F.targets, lab: F.coefSet === 'Fitted' && F.useRefLab ? R.lab : [], labRef: true, coefSet: F.coefSet };
    R.defs.forEach(function (d) { var v = F.o[d.k]; raw.o[d.k] = blank(v) ? null : (d.type === 'num' ? +v : v); });
    raw.coals = F.coals.map(function (c) { var o = {}; R.coal.forEach(function (p) { var v = c[p.k]; o[p.k] = blank(v) ? null : (p.k === 'name' ? v : +v); }); return o; });
    return raw;
  }
  function readForm() {
    $$('#p-input [data-f]').forEach(function (el) {
      var a = el.getAttribute('data-f').split('.'), v = el.value;
      if (a[0] === 'o') S.form.o[a[1]] = v; else if (a[0] === 'c') S.form.coals[+a[1]][a[2]] = v;
      else if (a[0] === 't') { var t = S.form.targets.filter(function (x) { return x.k === a[1]; })[0]; t[a[2]] = v === '' ? null : +v; }
      else if (a[0] === 'm') { if (a[1] === 'coefSet') S.form.coefSet = v; if (a[1] === 'useRefLab') S.form.useRefLab = el.checked; }
    });
  }

  // ---------------- navigation ----------------
  var TITLES = { home: 'Home', input: 'Inputs', results: 'Results', balance: 'Mass & heat balance', actions: 'Deviations & actions' };
  var cur = 'home';
  function go(p, noPush) {
    if (cur === 'input') { try { readForm(); save(); } catch (e) { } }
    cur = p; $$('.page').forEach(function (s) { s.classList.toggle('on', s.id === 'p-' + p); });
    $$('nav.bn button').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-p') === p); });
    $('#ttl').textContent = TITLES[p]; $('#back').hidden = false;
    ({ home: renderHome, input: renderInput, results: renderResults, balance: renderBalance, actions: renderActions })[p]();
    if (!noPush) { try { history.pushState({ p: p }, '', '#' + p); } catch (e) { } }
    window.scrollTo(0, 0);
  }
  window.addEventListener('popstate', function (e) { var p = (e.state && e.state.p) || 'home'; go(p, true); });
  $$('nav.bn button').forEach(function (b) { b.onclick = function () { go(b.getAttribute('data-p')); }; });
  $('#back').onclick = function () { if (cur === 'home') { if (window.IMLeave) window.IMLeave(); } else history.back(); };

  // ---------------- common blocks ----------------
  function stateLine() {
    if (S.mode === 'reference') return '<div class="state"><span class="chip demo">Reference data</span>Results below use the reference (master) data. Enter or upload your plant data on Inputs.</div>';
    var nRef = 0, nSkip = 0, nUser = 0; Object.keys(S.src).forEach(function (k) { var s = S.src[k]; if (s === 'ref') nRef++; else if (s === 'skip') nSkip++; else if (s === 'user') nUser++; });
    return '<div class="state"><span class="chip user">' + nUser + ' your values</span>' + (nRef ? '<span class="chip ref">' + nRef + ' from reference</span>' : '') + (nSkip ? '<span class="chip na">' + nSkip + ' not taken</span>' : '') +
      (S.fileName && S.inputMode === 'upload' ? '<span>' + esc(S.fileName) + '</span>' : S.inputMode === 'manual' ? '<span>Entered manually</span>' : '') + '</div>';
  }
  function devOf(k) { return RES.dev.filter(function (d) { return d.k === k; })[0]; }
  function lim(d) { return d.min != null && d.max != null ? d.min + '–' + d.max : d.min != null ? '≥ ' + d.min : d.max != null ? '≤ ' + d.max : 'no target'; }
  function tile(label, v, d, unit, c, k, extra) {
    var dv = k ? devOf(k) : null;
    return '<div class="tile" style="--c:' + (c || 'var(--ember)') + '"><div class="l">' + label + '</div><div class="v">' + f(v, d) + '<small>' + unit + '</small></div>' +
      '<div class="s">' + (dv ? '<span class="pill ' + dv.st + '">' + dv.st + '</span>' + lim(dv) : '') + (extra || '') + '</div></div>';
  }
  function gauge(k, label, v, lo, hi, band) {
    var dv = devOf(k), A = 0.75, Rr = 36, Cc = 2 * Math.PI * Rr, pos = function (x) { return Math.max(0, Math.min(1, (x - lo) / (hi - lo))); };
    var bs = dv.min != null ? pos(dv.min) : 0, be = dv.max != null ? pos(dv.max) : 1, pv = isFinite(v) ? pos(v) : 0;
    var arc = function (s, e, cls) { return '<circle r="' + Rr + '" cx="50" cy="50" fill="none" stroke-width="9" stroke-linecap="round" class="' + cls + '" stroke-dasharray="' + (Cc * A * (e - s)).toFixed(1) + ' ' + Cc.toFixed(1) + '" stroke-dashoffset="' + (-Cc * A * s).toFixed(1) + '" transform="rotate(135 50 50)"/>'; };
    return '<div class="gauge"><svg viewBox="0 0 100 86">' + arc(0, 1, 'gt') + arc(bs, be, 'gb') + (isFinite(v) ? arc(0, pv, 'gv') : '') + '</svg>' +
      '<div class="n">' + f(v, 1) + '<small> %</small></div><div class="t">' + label + ' <span class="pill ' + dv.st + '">' + dv.st + '</span></div>' +
      '<div class="x">target ' + lim(dv) + (isFinite(v) ? ' · ±' + f(band, 1) : '') + '</div></div>';
  }

  // ---------------- Home ----------------
  function renderHome() {
    run(); var Q = RES.Q, MB = RES.MB;
    $('#p-home').innerHTML =
      '<div class="hero"><div class="in"><div class="eb">Coke oven · battery &amp; quality</div><h1>Coke <span>Making</span></h1>' +
      '<p class="tag">Coal blend<i>|</i>Carbonisation<i>|</i>Coke quality<i>|</i>Mass &amp; heat balance</p>' +
      '<div class="hbtns"><button class="hb pri" data-go="input">' + ic('up') + 'Enter plant data</button><button class="hb" data-go="results">' + ic('gauge') + 'Open coke quality results</button>' +
      '<button class="hb" id="hRef">' + ic('xl') + 'Download reference Excel</button></div></div></div>' + stateLine() +
      '<a href="coke-critical.html" class="card" style="display:flex;gap:12px;align-items:center;text-decoration:none;color:inherit;border-left:4px solid #3cc8d2"><span style="flex:none;width:46px;height:46px;border-radius:12px;display:grid;place-items:center;background:rgba(60,200,210,.16);color:#3cc8d2;font:700 22px system-ui">⚠</span><span style="flex:1;min-width:0"><b style="display:block;font-size:16px">Coke oven critical decisions · 3D</b><small style="display:block;opacity:.85;font-size:12.5px;line-height:1.35">56 situations in 12 battery areas: severity, why it matters and what to do, with the battery lit up in 3D</small></span><span style="flex:none;font-weight:700;color:#3cc8d2">Open ›</span></a>' +
      '<a href="how-coke.html" class="card" style="display:flex;gap:12px;align-items:center;text-decoration:none;color:inherit;border-left:4px solid #ff7a1a"><span style="flex:none;width:46px;height:46px;border-radius:12px;display:grid;place-items:center;background:linear-gradient(135deg,#ff6a1a,#ffb547);color:#2a1200;font:700 18px system-ui">▶</span><span style="flex:1;min-width:0"><b style="display:block;font-size:16px">How coke is made · 3D</b><small style="display:block;opacity:.85;font-size:12.5px;line-height:1.35">Coal yard to blast-furnace coke, step by step</small></span><span style="flex:none;font-weight:700;color:#ffb547">Open ›</span></a>' +
      '<div class="band"><b>' + ic('coal') + 'Predicted coke quality</b><small>' + (RES.coefSet === 'Fitted' && RES.Q.set.CRI ? 'Models fitted on ' + RES.fit.n + ' lab batches' : 'Default model coefficients (published trends)') + '</small></div>' +
      '<div class="tiles">' + tile('CSR', Q.CSR, 1, '%', '#ff7a1a', 'CSR') + tile('CRI', Q.CRI, 1, '%', '#ff4d2e', 'CRI') + tile('M40', Q.M40, 1, '%', '#2c6cb0', 'M40') +
      tile('M10', Q.M10, 1, '%', '#19b3b1', 'M10') + tile('Coke ash', MB.cAsh, 2, '% db', '#6b7a8c', 'cAsh') + tile('BF coke', MB.bfDay, 0, 't/day', '#138a63', null, MB.bfY ? f(MB.bfY, 0) + ' kg/t wet coal' : '') + '</div>' +
      '<div class="card"><h2>' + ic('book') + 'How it works</h2><p class="sub">Three steps, the same as Sinter Predict.</p>' +
      '<table class="tbl"><tr><td><b>1 · Inputs</b><br><small>Upload the Excel (' + REF_FILE + ' layout) or type values by hand. Leave blank what you do not know.</small></td></tr>' +
      '<tr><td><b>2 · Review &amp; fill missing</b><br><small>Every blank input is listed with its reference value. Choose <b style="color:var(--ref)">Take reference</b> or <b>Don\'t take</b> for each one.</small></td></tr>' +
      '<tr><td><b>3 · Results</b><br><small>CSR, CRI, M40, M10, coke chemistry, yield and production, mass &amp; heat balance, deviations and corrective actions. Export the report to Excel.</small></td></tr></table></div>' +
      '<div class="card"><h2>' + ic('mix') + 'Coal blend optimiser</h2><p class="sub">The earlier Coke Optimiser (Python engine). The first start downloads about 40 MB, so keep internet on.</p><p class="sub" style="margin:8px 0 0"><b>Not in the browser version.</b> Use the Android app for the coal blend optimiser.</p></div>' +
      '<p class="foot">Coke Making · part of Iron Making 5.8 · calculations follow ' + REF_FILE + '</p>';
    $$('#p-home [data-go]').forEach(function (b) { b.onclick = function () { go(b.getAttribute('data-go')); }; });
    $('#hRef').onclick = function () { downloadAsset(REF_FILE); };
  }

  // ---------------- Inputs (steps 1-2) ----------------
  function renderInput() {
    var st = S.step || 1, el = $('#p-input');
    var steps = '<div class="steps"><button data-st="1" class="' + (st === 1 ? 'on' : '') + '"><i>1</i>Inputs</button><button data-st="2" class="' + (st === 2 ? 'on' : '') + '"><i>2</i>Review &amp; fill missing</button><button data-st="3"><i>3</i>Results</button></div>';
    el.innerHTML = steps + (st === 1 ? step1() : step2());
    $$('.steps button', el).forEach(function (b) { b.onclick = function () {
      var n = +b.getAttribute('data-st'); readFormSafe();
      if (n === 3) { if (S.mode !== 'reference' || S.raw) return calc(); return go('results'); }
      if (n === 2 && !S.raw) { if (S.inputMode === 'manual') return toReview(); return toast('Upload a file or enter values first'); }
      S.step = n; save(); renderInput();
    }; });
    if (st === 1) bind1(); else bind2();
  }
  function readFormSafe() { try { if (S.step === 1 && S.inputMode === 'manual') readForm(); } catch (e) { } }
  function step1() {
    var m = S.inputMode;
    var h = '<div class="card"><h2>' + ic('up') + 'Inputs</h2><p class="sub">Choose how to give your plant data. Anything you leave blank is listed in the next step, where you decide whether to take the reference value.</p>' +
      '<div class="opts"><button class="opt' + (m === 'upload' ? ' on' : '') + '" data-m="upload">' + ic('xl') + '<b>Upload Excel</b><small>The ' + esc(REF_FILE) + ' layout, filled with your data</small></button>' +
      '<button class="opt' + (m === 'manual' ? ' on' : '') + '" data-m="manual">' + ic('edit') + '<b>Enter manually</b><small>Type oven, coal blend and operating values</small></button></div>';
    if (m === 'upload') {
      h += '<label class="drop" id="drop">' + ic('up') + '<b>Tap to choose the Excel file</b><small>.xlsx · ' + esc(REF_FILE) + ' or the blank template, filled</small></label>' +
        '<div class="files">' + (S.raw && S.inputMode === 'upload' && S.fileName ? 'Loaded: <b>' + esc(S.fileName) + '</b> · ' + countUser(S.raw) + ' values · ' + S.items.length + ' missing' : 'No file loaded yet.') + '</div>';
    }
    h += '<div class="links"><button class="lk" data-dl="ref">' + ic('dl') + 'Download ' + esc(REF_FILE) + '<span class="chip ref" style="margin-left:auto">master</span></button>' +
      '<button class="lk" data-dl="blank">' + ic('dl') + 'Download blank input template</button>' +
      '<button class="lk" id="useRef">' + ic('reset') + 'Use reference data for everything</button></div>' +
      '<div class="note info" style="margin-top:10px"><b style="color:var(--ref)">Red</b> = reference (master) value used because you did not give it · <b style="color:var(--user)">Green</b> = your value. Yellow cells in the Excel are the inputs; leave a cell empty if you do not know it.</div></div>';
    if (m === 'manual') h += manualForm();
    if (m === 'manual') h += '<div class="row2"><button class="btn" id="fillRef">' + ic('reset') + 'Fill blanks with reference</button><button class="btn pri" id="toRev">Review inputs ›</button></div>';
    return h;
  }
  function inputHtml(fkey, d, val, ref) {
    var ph = blank(ref) ? '' : String(ref);
    if (d.type === 'choice') return '<select data-f="' + fkey + '"><option value="">— (ref: ' + esc(ph) + ')</option>' + d.opts.map(function (o) { return '<option' + (o === val ? ' selected' : '') + '>' + esc(o) + '</option>'; }).join('') + '</select>';
    var t = d.type === 'num' ? 'inputmode="decimal"' : '';
    return '<input ' + t + ' data-f="' + fkey + '" value="' + esc(val == null ? '' : val) + '" placeholder="' + esc(ph) + '">';
  }
  function manualForm() {
    var F = S.form, h = '';
    var sec = function (title, icon, body, open, cnt) { return '<details class="sec"' + (open ? ' open' : '') + '><summary>' + ic(icon) + title + '<span class="cnt">' + (cnt || '') + '</span></summary><div class="fbody">' + body + '</div></details>'; };
    ['Oven_Config', 'Operations'].forEach(function (sh, si) {
      var body = '', grp = null, n = 0, filled = 0;
      R.defs.filter(function (d) { return d.sheet === sh; }).forEach(function (d) {
        if (d.group !== grp) { grp = d.group; body += '<div class="fg">' + esc(grp.replace(/^[A-Z]\.\s*/, '')) + '</div>'; }
        n++; if (!blank(F.o[d.k])) filled++;
        body += '<div class="f"><label>' + esc(d.label) + (d.unit ? '<small>' + esc(d.unit) + (INFO[d.k] ? ' · information only' : '') + '</small>' : INFO[d.k] ? '<small>information only</small>' : '') + '</label>' + inputHtml('o.' + d.k, d, F.o[d.k], d.ref) + '</div>';
      });
      h += sec(si ? 'Operations' : 'Oven configuration', si ? 'flame' : 'box', body, si === 0, filled + ' / ' + n + ' filled');
    });
    var cb = '<p class="sub" style="margin:8px 0 0">Up to six coals. Blend % is as-received and must total 100. Leave a whole coal empty if it is not used.</p>';
    F.coals.forEach(function (c, i) {
      var body = '';
      R.coal.forEach(function (p) {
        var d = { type: p.k === 'name' ? 'text' : 'num' };
        body += '<div class="f"><label>' + esc(p.label) + (p.unit ? '<small>' + esc(p.unit) + '</small>' : '') + '</label>' + inputHtml('c.' + i + '.' + p.k, d, c[p.k], p.ref[i]) + '</div>';
      });
      cb += '<details class="coal"' + (i === 0 ? ' open' : '') + '><summary>Coal ' + (i + 1) + (blank(c.name) ? '' : ' · ' + esc(c.name)) + '<em>' + (blank(c.pct) ? '— %' : esc(c.pct) + ' %') + '</em></summary><div class="fbody">' + body + '</div></details>';
    });
    var tot = F.coals.reduce(function (s, c) { return s + (+c.pct || 0); }, 0);
    cb += '<div class="sumbar ' + (Math.abs(tot - 100) < 0.01 ? 'good' : tot ? 'bad' : '') + '" id="blendSum"><span>Blend total</span><span>' + f(tot, 1) + ' %</span></div>';
    h += sec('Coal blend', 'coal', cb, false);
    var tb = '<p class="sub" style="margin:8px 0 0">Targets for the dashboard. Leave Min or Max empty for no limit. Charge moisture and fineness windows follow the charging method.</p>';
    F.targets.forEach(function (t) {
      if (t.k === 'chM' || t.k === 'bFine') return;
      tb += '<div class="f" style="grid-template-columns:minmax(0,1fr) 76px 76px"><label>' + esc(t.label) + '</label><input inputmode="decimal" data-f="t.' + t.k + '.min" value="' + (t.min == null ? '' : t.min) + '" placeholder="min">' +
        '<input inputmode="decimal" data-f="t.' + t.k + '.max" value="' + (t.max == null ? '' : t.max) + '" placeholder="max"></div>';
    });
    h += sec('Targets', 'gauge', tb, false);
    var mb = '<div class="f"><label>Coefficient set<small>Default = published-trend values · Fitted = regressed on lab data</small></label><select data-f="m.coefSet"><option' + (F.coefSet === 'Default' ? ' selected' : '') + '>Default</option><option' + (F.coefSet === 'Fitted' ? ' selected' : '') + '>Fitted</option></select></div>' +
      '<div class="f"><label>Use the ' + R.lab.length + ' reference lab batches for fitting<small>Upload your own lab results through the Excel (Lab_Calibration sheet)</small></label><input type="checkbox" data-f="m.useRefLab"' + (F.useRefLab ? ' checked' : '') + ' style="width:24px;min-height:24px;justify-self:end"></div>';
    h += sec('Model', 'mix', mb, false);
    return h;
  }
  function bind1() {
    $$('#p-input [data-m]').forEach(function (b) { b.onclick = function () { readFormSafe(); S.inputMode = b.getAttribute('data-m'); save(); renderInput(); }; });
    var dr = $('#drop'); if (dr) {
      dr.onclick = function (e) { e.preventDefault(); pickFile(); };
      dr.ondragover = function (e) { e.preventDefault(); dr.classList.add('over'); }; dr.ondragleave = function () { dr.classList.remove('over'); };
      dr.ondrop = function (e) { e.preventDefault(); dr.classList.remove('over'); var fl = e.dataTransfer.files[0]; if (fl) readFile(fl); };
    }
    $$('#p-input [data-dl]').forEach(function (b) { b.onclick = function () { downloadAsset(b.getAttribute('data-dl') === 'ref' ? REF_FILE : BLANK_FILE); }; });
    $('#useRef').onclick = function () { S.mode = 'reference'; S.vals = refValues(); S.src = {}; S.raw = null; S.items = []; S.fileName = ''; save(); toast('Using reference data'); go('results'); };
    var fr = $('#fillRef'); if (fr) fr.onclick = function () {
      readForm(); var F = S.form, n = 0;
      R.defs.forEach(function (d) { if (blank(F.o[d.k]) && d.k !== 'Mover' && !blank(d.ref)) { F.o[d.k] = d.ref; n++; } });
      F.coals.forEach(function (c, i) { R.coal.forEach(function (p) { if (blank(c[p.k]) && !blank(p.ref[i])) { c[p.k] = p.ref[i]; n++; } }); });
      save(); renderInput(); toast(n + ' blanks filled with reference values');
    };
    var tr = $('#toRev'); if (tr) tr.onclick = toReview;
    $$('#p-input [data-f^="c."]').forEach(function (el) { el.addEventListener('input', function () {
      readForm(); var tot = S.form.coals.reduce(function (s, c) { return s + (+c.pct || 0); }, 0), b = $('#blendSum');
      if (b) { b.lastChild.textContent = tot.toFixed(1) + ' %'; b.className = 'sumbar ' + (Math.abs(tot - 100) < 0.01 ? 'good' : tot ? 'bad' : ''); }
    }); });
  }
  function toReview() { readForm(); S.raw = formToRaw(); S.items = detect(S.raw); S.fileName = ''; S.step = 2; save(); renderInput(); }

  function step2() {
    if (!S.raw) return '<div class="card"><p class="sub">Upload a file or enter values first.</p></div>';
    var it = S.items, nUser = countUser(S.raw), nTake = it.filter(function (x) { return x.choice === 'take'; }).length, nSkip = it.length - nTake;
    var h = '<div class="card"><h2>' + ic('warn') + 'Review &amp; fill missing</h2><p class="sub">' + (S.inputMode === 'upload' && S.fileName ? 'From <b>' + esc(S.fileName) + '</b>. ' : 'From the manual entry. ') +
      (it.length ? 'These inputs were not given. For each one, take the reference (master) value or leave it out. Results that need an input you leave out show “—”.' : 'All inputs are given. Nothing is taken from the reference data.') + '</p>' +
      '<div class="rvsum"><div class="u"><b>' + nUser + '</b><small>your values</small></div><div class="r"><b>' + nTake + '</b><small>take reference</small></div><div class="s"><b>' + nSkip + '</b><small>don\'t take</small></div></div>';
    if (it.length) h += '<div class="row2"><button class="btn sm" id="allTake" style="color:var(--ref)">Take all reference values</button><button class="btn sm" id="allSkip">Don\'t take any</button></div>';
    h += '</div>';
    var groups = {}; it.forEach(function (x, i) { var g = x.info ? 'Information only (not used in the calculation)' : x.grp; (groups[g] = groups[g] || []).push(i); });
    var order = ['Oven configuration', 'Coal blend', 'Operations', 'Model', 'Information only (not used in the calculation)'];
    order.forEach(function (g) {
      if (!groups[g]) return;
      h += '<details class="sec" open><summary>' + esc(g) + '<span class="cnt">' + groups[g].length + '</span></summary><div class="fbody">';
      groups[g].forEach(function (i) {
        var x = it[i];
        h += '<div class="rv"><div><div class="lb">' + esc(x.label) + (x.req ? '<span class="req">needed</span>' : '') + '<small>' + (x.unit ? esc(x.unit) : '') + '</small></div>' +
          '<div class="rf">Reference: <b>' + esc(x.ref == null ? '—' : x.ref) + '</b></div></div>' +
          '<div class="seg"><button class="take' + (x.choice === 'take' ? ' on' : '') + '" data-i="' + i + '" data-c="take">Take reference</button><button class="skip' + (x.choice === 'skip' ? ' on' : '') + '" data-i="' + i + '" data-c="skip"' + (x.req ? ' disabled title="Needed for the calculation"' : '') + '>Don\'t take</button></div></div>';
      });
      h += '</div></details>';
    });
    h += '<div class="row2"><button class="btn" id="bk1">‹ Back to inputs</button><button class="btn pri" id="calc">' + ic('play') + 'Calculate</button></div>';
    return h;
  }
  function bind2() {
    $$('#p-input .seg button').forEach(function (b) { b.onclick = function () { S.items[+b.getAttribute('data-i')].choice = b.getAttribute('data-c'); save(); var y = window.scrollY; renderInput(); window.scrollTo(0, y); }; });
    var a = $('#allTake'); if (a) a.onclick = function () { S.items.forEach(function (x) { x.choice = 'take'; }); save(); renderInput(); };
    var b2 = $('#allSkip'); if (b2) b2.onclick = function () { S.items.forEach(function (x) { if (!x.req) x.choice = 'skip'; }); save(); renderInput(); toast('Needed inputs (oven type, charging, quenching) still use the reference'); };
    var bk = $('#bk1'); if (bk) bk.onclick = function () { S.step = 1; save(); renderInput(); };
    var c = $('#calc'); if (c) c.onclick = calc;
  }
  function calc() { if (!S.raw) return go('results'); applyItems(); save(); run(); toast('Calculated'); go('results'); }

  // ---------------- Results ----------------
  function renderResults() {
    run(); var Q = RES.Q, MB = RES.MB, B = RES.B, H = RES.H;
    var refUsed = Object.keys(S.src).filter(function (k) { return S.src[k] === 'ref'; });
    var skipped = Object.keys(S.src).filter(function (k) { return S.src[k] === 'skip'; });
    var h = stateLine();
    h += '<div class="band"><b>' + ic('gauge') + 'Coke quality</b><small>' + (RES.coefSet === 'Fitted' && Q.set.CRI ? 'Fitted on ' + RES.fit.n + ' lab batches · band = 2 × regression std. error' : 'Default coefficients · indicative band') + '</small></div>';
    h += '<div class="gauges">' + gauge('CSR', 'CSR', Q.CSR, 40, 75, Q.band.CSR) + gauge('CRI', 'CRI', Q.CRI, 15, 40, Q.band.CRI) + gauge('M40', 'M40', Q.M40, 70, 95, Q.band.M40) + gauge('M10', 'M10', Q.M10, 4, 12, Q.band.M10) + '</div>';
    h += '<div class="card"><h2>' + ic('box') + 'Coke chemistry</h2><div class="tiles" style="margin-top:6px">' + tile('Ash', MB.cAsh, 2, '% db', '#6b7a8c', 'cAsh') + tile('Sulphur', MB.cS, 3, '% db', '#c9a227', 'cS') +
      tile('Phosphorus', MB.cP, 3, '% db', '#8e6bd8', 'cP') + tile('Volatile matter', MB.cVM, 2, '% db', '#2c6cb0', 'cVM') + tile('Fixed carbon', MB.cFC, 2, '% db', '#1b1d22') + tile('Moisture', MB.cM, 2, '%', '#19b3b1', 'cM') + '</div></div>';
    h += '<div class="card"><h2>' + ic('flame') + 'Yield &amp; production</h2><div class="tiles" style="margin-top:6px">' + tile('Coke yield', MB.Y, 2, '% db', '#ff7a1a') + tile('BF coke', MB.bfY, 0, 'kg/t wet coal', '#138a63', 'bfY') +
      tile('BF coke / day', MB.bfDay, 0, 't', '#138a63') + tile('Gross coke / day', MB.cokeDay, 0, 't', '#2c6cb0') + tile('Coal / day (wet)', MB.coalDay, 0, 't', '#1b1d22') + tile('Pushes / day', MB.pushes, 1, '', '#6b7a8c') +
      tile('Coal per oven', MB.wet, 2, 't wet', '#6b7a8c') + tile('Heat required', H.req, 0, 'kcal/kg', '#ff4d2e') + tile('Coal cost', MB.costBF, 0, 'Rs/t BF coke', '#c9a227') + '</div></div>';
    h += '<div class="card"><h2>' + ic('coal') + 'Coal blend</h2><div class="scroll"><table class="tbl"><tr><th>Property</th><th style="text-align:right">Blend</th><th>Window</th></tr>' +
      [['Total', B.total, 2, '%', 'bTot'], ['Moisture (ar)', B.TM, 2, '%', null], ['Ash', B.ash, 2, '% db', 'bAsh'], ['Volatile matter', B.VM, 2, '% db', 'bVM'], ['Sulphur', B.S, 3, '% db', null], ['Phosphorus', B.P, 3, '% db', null],
        ['Ro (mean max reflectance)', B.Ro, 3, '%', 'bRo'], ['Gieseler max fluidity', B.MF, 0, 'ddpm', 'bMF'], ['Inertinite', B.inert, 1, '% vol', 'bInert'], ['Plastic range', B.PR, 1, '°C', 'bPR'],
        ['MBI', B.MBI, 3, '', 'bMBI'], ['Basicity B/A of ash', B.BA, 3, '', null], ['Alkali (Na₂O+K₂O)', B.alk, 3, '% db', null], ['Fineness < 3.2 mm', B.fine, 1, '%', 'bFine'], ['Blend cost', B.price, 0, 'Rs/t ar', null]]
        .map(function (r) { var dv = r[4] ? devOf(r[4]) : null; return '<tr><td>' + r[0] + ' <small>' + r[3] + '</small></td><td class="n">' + f(r[1], r[2]) + '</td><td>' + (dv ? '<span class="pill ' + dv.st + '">' + dv.st + '</span> <small>' + lim(dv) + '</small>' : '') + '</td></tr>'; }).join('') +
      '</table></div><div class="scroll" style="margin-top:10px"><table class="tbl"><tr><th>Coal</th><th style="text-align:right">Blend %</th><th style="text-align:right">MBI</th></tr>' +
      B.perCoal.map(function (c, i) { return c.pct > 0 ? '<tr><td>' + esc(blank(c.name) ? 'Coal ' + (i + 1) : c.name) + '</td><td class="n">' + f(c.pct, 1) + '</td><td class="n">' + f(c.MBI, 2) + '</td></tr>' : ''; }).join('') + '</table></div></div>';
    if (refUsed.length || skipped.length) {
      h += '<div class="card"><h2>' + ic('warn') + 'Inputs not from your data</h2>' + (refUsed.length ? '<p class="sub"><span class="chip ref">' + refUsed.length + ' reference</span> ' + refUsed.slice(0, 40).map(labelOf).map(esc).join(' · ') + (refUsed.length > 40 ? ' …' : '') + '</p>' : '') +
        (skipped.length ? '<p class="sub"><span class="chip na">' + skipped.length + ' not taken</span> ' + skipped.slice(0, 40).map(labelOf).map(esc).join(' · ') + (skipped.length > 40 ? ' …' : '') + '</p>' : '') +
        '<button class="btn sm" id="toRev2">Change choices</button></div>';
    }
    h += '<div class="row2"><button class="btn ember" id="expX">' + ic('dl') + 'Export report (.xlsx)</button><button class="btn" data-go="actions">Deviations &amp; actions ›</button></div>';
    h += '<div class="note warn" style="margin-top:12px">Default coefficients reproduce published directions of effect. Calibrate with at least 15–20 of your own batches (Lab_Calibration sheet, coefficient set “Fitted”) before using predictions for blend decisions.</div>';
    $('#p-results').innerHTML = h;
    $('#expX').onclick = exportReport;
    $$('#p-results [data-go]').forEach(function (b) { b.onclick = function () { go(b.getAttribute('data-go')); }; });
    var tr2 = $('#toRev2'); if (tr2) tr2.onclick = function () { S.step = 2; save(); go('input'); };
  }
  function labelOf(id) {
    if (id === 'lab') return 'Lab calibration data';
    var a = id.split('.'); if (a[0] === 'o') { var d = defOf(a[1]); return d ? d.label : id; }
    var p = coalDef(a[2]); return 'Coal ' + (+a[1] + 1) + ' ' + (p ? p.label : a[2]);
  }

  // ---------------- Balance ----------------
  function renderBalance() {
    run(); var MB = RES.MB, H = RES.H, Ov = RES.Ov, NR = RES.NR;
    var row = function (l, v, d, u) { return '<tr><td>' + l + '</td><td class="n">' + f(v, d) + '</td><td><small>' + (u || '') + '</small></td></tr>'; };
    var grp = function (t) { return '<tr class="grp"><td colspan="3">' + t + '</td></tr>'; };
    var h = stateLine() + '<div class="card"><h2>' + ic('box') + 'Mass balance</h2><div class="scroll"><table class="tbl">' +
      grp('Charge') + row('Charged volume per oven', Ov.vol, 2, 'm³') + row('Wet coal per oven', MB.wet, 2, 't') + row('Charge moisture', MB.M, 2, '%') + row('Dry coal per oven', MB.dry, 2, 't') + row('Ash input', MB.ashIn, 3, 't') + row('Sulphur input', MB.SIn, 4, 't') +
      grp('Coke') + row('Coke yield (dry)', MB.Y, 2, '% of dry coal') + row('Dry coke per oven', MB.dryCoke, 2, 't') + row('Wet coke per oven', MB.wetCoke, 2, 't') + row('Sulphur retention used', MB.Rs, 3, 'fraction') +
      grp('Size split per oven') + row('BF coke fraction (>25 mm)', MB.bfFrac, 1, '% of gross') + row('BF coke', MB.bfOven, 2, 't wet') + row('Nut coke', MB.nutOven, 2, 't wet') + row('Breeze', MB.breezeOven, 2, 't wet') +
      grp('Per day') + row('Pushes', MB.pushes, 1, 'pushes/d') + row('Coal carbonised', MB.coalDay, 0, 't/d wet') + row('Gross coke', MB.cokeDay, 0, 't/d wet') + row('BF coke', MB.bfDay, 0, 't/d wet') + row('BF coke yield', MB.bfY, 1, 'kg/t wet coal') +
      grp('Cost') + row('Blend cost', MB.cost, 0, 'Rs/t wet coal') + row('Coal cost per t BF coke', MB.costBF, 0, 'Rs/t (no by-product credit)') +
      (NR ? '' : grp('By-products (indicative)') + row('COG', MB.cog, 0, 'Nm³/t dry coal') + row('Tar', MB.tar, 2, '% dry coal') + row('Crude benzol', MB.benzol, 2, '% dry coal') + row('Ammonia', MB.nh3, 2, 'kg/t dry coal')) +
      '</table></div></div>';
    h += '<div class="card"><h2>' + ic('heat') + 'Heat balance</h2><div class="scroll"><table class="tbl">' +
      grp('Heat required (per kg wet coal)') + row('Moisture', H.qM, 1, 'kcal/kg') + row('Coke sensible heat', H.qC, 1, 'kcal/kg') + row('Volatiles sensible heat', H.qV, 1, 'kcal/kg') + row('Reaction', H.qR, 1, 'kcal/kg') + row('Net heat to charge', H.net, 1, 'kcal/kg') + row('Requirement incl. 15 % losses', H.req, 1, 'kcal/kg wet coal') +
      (NR ? grp('Non-recovery') + row('Volatiles released', H.vol, 3, 'kg/kg wet coal') + row('Heat from volatiles', H.qVol, 0, 'kcal/kg') + row('Surplus to boiler', H.surplus, 0, 'kcal/kg') + row('Steam potential', H.steam, 0, 'kg/t wet coal') + row('Stack CO₂', H.nrCO2, 0, 'kg/t wet coal')
        : grp('Heat supplied (recovery)') + row('Actual heat input', H.act, 1, 'kcal/kg wet coal') + row('Theoretical fuel', H.theoFuel, 1, 'Nm³/t wet coal') + row('Heating efficiency (req/actual)', H.eff, 3, '') + row('Excess air λ', H.lam, 3, '') + row('Underfiring CO₂', H.co2, 1, 'kg/t wet coal') + row('CO₂ per t BF coke', H.co2BF, 1, 'kg')) +
      grp('Carbonisation time') + row('Predicted net time', H.tNet, 2, 'h') + row('Required gross incl. soaking', H.tReq, 2, 'h') + row('Available net (gross − turnaround)', H.tAvail, 2, 'h') + row('Coking time margin', H.margin, 2, 'h') + row('Mean coking rate', H.rate, 1, 'mm/h') +
      '</table></div></div>';
    $('#p-balance').innerHTML = h;
  }

  // ---------------- Actions ----------------
  function renderActions() {
    run(); var bad = RES.dev.filter(function (d) { return d.st === 'LOW' || d.st === 'HIGH'; }), na = RES.dev.filter(function (d) { return d.st === 'N/A'; });
    var h = stateLine() + (bad.length ? '<div class="note warn">' + bad.length + ' parameter' + (bad.length > 1 ? 's are' : ' is') + ' off target. Corrective actions are listed below.</div>' : '<div class="note ok">All parameters with a target are within limits.</div>') +
      (na.length ? '<div class="note info" style="margin-top:8px">' + na.length + ' check' + (na.length > 1 ? 's' : '') + ' cannot be made because an input was not taken.</div>' : '');
    var sec = function (title, s) {
      return '<div class="card"><h2>' + ic(s === 'q' ? 'gauge' : 'mix') + title + '</h2>' + RES.dev.filter(function (d) { return d.sec === s; }).map(function (d) {
        var dp = Math.abs(d.v) < 10 ? 2 : 1;
        return '<div class="act"><div class="h"><b>' + esc(d.label) + '</b><span class="pill ' + d.st + '">' + d.st + '</span></div><div class="m">Value ' + f(d.v, dp) + ' · target ' + lim(d) + '</div>' +
          (d.st === 'LOW' || d.st === 'HIGH' ? '<p>' + esc(d.act) + '</p>' : '') + '</div>';
      }).join('') + '</div>';
    };
    $('#p-actions').innerHTML = h + sec('Coke quality vs target', 'q') + sec('Blend &amp; operating windows', 'w');
  }

  // ---------------- files ----------------
  function b64(u8) { var s = '', ch = 0x8000; for (var i = 0; i < u8.length; i += ch) s += String.fromCharCode.apply(null, u8.subarray(i, i + ch)); return btoa(s); }
  function saveBytes(u8, name, mime) {
    if (window.AndroidBridge && AndroidBridge.saveFile) { AndroidBridge.saveFile(b64(u8), name, mime); return; }
    var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([u8], { type: mime })); a.download = name; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500); toast('Downloaded ' + name);
  }
  var XMIME = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  function downloadAsset(name) {
    fetch(name).then(function (r) { if (!r.ok) throw new Error(); return r.arrayBuffer(); }).then(function (b) { saveBytes(new Uint8Array(b), name, XMIME); })
      .catch(function () { toast('Could not open ' + name); });
  }
  function exportReport() {
    run(); var Q = RES.Q, MB = RES.MB, B = RES.B, H = RES.H, n = function (v, d) { return fx(v, d); };
    var res = [['COKE MAKING REPORT'], ['Iron Making 5.8 · Coke Making · calculations follow ' + REF_FILE], ['Data', S.mode === 'reference' ? 'Reference data' : (S.inputMode === 'upload' ? 'Uploaded: ' + S.fileName : 'Entered manually')],
      ['Coefficient set', RES.coefSet + (RES.coefSet === 'Fitted' ? ' (' + RES.fit.n + ' lab batches)' : '')], ['Run at', new Date().toLocaleString()], [],
      ['Parameter', 'Value', 'Unit', 'Band ±', 'Target', 'Status']];
    [['CSR', Q.CSR, '%', Q.band.CSR, 'CSR'], ['CRI', Q.CRI, '%', Q.band.CRI, 'CRI'], ['M40', Q.M40, '%', Q.band.M40, 'M40'], ['M10', Q.M10, '%', Q.band.M10, 'M10'], ['Coke ash', MB.cAsh, '% db', null, 'cAsh'], ['Coke sulphur', MB.cS, '% db', null, 'cS'],
      ['Coke phosphorus', MB.cP, '% db', null, 'cP'], ['Coke VM', MB.cVM, '% db', null, 'cVM'], ['Coke FC', MB.cFC, '% db', null, null], ['Coke moisture', MB.cM, '%', null, 'cM'], ['Coke yield', MB.Y, '% db', null, null],
      ['BF coke yield', MB.bfY, 'kg/t wet coal', null, 'bfY'], ['BF coke per day', MB.bfDay, 't/d', null, null], ['Gross coke per day', MB.cokeDay, 't/d', null, null], ['Coal carbonised per day', MB.coalDay, 't/d wet', null, null],
      ['Pushes per day', MB.pushes, '', null, null], ['Heat requirement', H.req, 'kcal/kg wet coal', null, null], ['Coking time margin', H.margin, 'h', null, 'margin'], ['Coal cost per t BF coke', MB.costBF, 'Rs/t', null, null]]
      .forEach(function (r) { var dv = r[4] ? devOf(r[4]) : null; res.push([r[0], n(r[1], 3), r[2], r[3] == null ? '' : n(r[3], 2), dv ? lim(dv) : '', dv ? dv.st : '']); });
    var dev = [['Parameter', 'Value', 'Min', 'Max', 'Status', 'Corrective action']].concat(RES.dev.map(function (d) { return [d.label, n(d.v, 3), d.min == null ? '' : d.min, d.max == null ? '' : d.max, d.st, d.st === 'LOW' || d.st === 'HIGH' ? d.act : d.act]; }));
    var bal = [['Item', 'Value', 'Unit']];
    [['Coal charge per oven (wet)', MB.wet, 't'], ['Dry coal per oven', MB.dry, 't'], ['Coke yield (dry)', MB.Y, '%'], ['Dry coke per oven', MB.dryCoke, 't'], ['Wet coke per oven', MB.wetCoke, 't'], ['BF coke per oven', MB.bfOven, 't'],
      ['Nut coke per oven', MB.nutOven, 't'], ['Breeze per oven', MB.breezeOven, 't'], ['COG yield', MB.cog, 'Nm3/t dry coal'], ['Tar', MB.tar, '% dry coal'], ['Benzol', MB.benzol, '% dry coal'], ['Ammonia', MB.nh3, 'kg/t dry coal'],
      ['Q moisture', H.qM, 'kcal/kg'], ['Q coke', H.qC, 'kcal/kg'], ['Q volatiles', H.qV, 'kcal/kg'], ['Q reaction', H.qR, 'kcal/kg'], ['Heat requirement incl. losses', H.req, 'kcal/kg wet coal'], ['Actual heat input', H.act, 'kcal/kg wet coal'],
      ['Heating efficiency', H.eff, ''], ['Excess air lambda', H.lam, ''], ['Underfiring CO2', H.co2, 'kg/t wet coal'], ['Predicted net carbonisation time', H.tNet, 'h'], ['Coking time margin', H.margin, 'h']].forEach(function (r) { bal.push([r[0], n(r[1], 3), r[2]]); });
    var blend = [['Property', 'Blend', 'Unit']];
    [['Total', B.total, '%'], ['TM', B.TM, '% ar'], ['Ash', B.ash, '% db'], ['VM', B.VM, '% db'], ['S', B.S, '% db'], ['P', B.P, '% db'], ['Ro', B.Ro, '%'], ['MF', B.MF, 'ddpm'], ['Inertinite', B.inert, '% vol'], ['Plastic range', B.PR, 'degC'], ['MBI', B.MBI, ''], ['Fineness <3.2 mm', B.fine, '%'], ['Cost', B.price, 'Rs/t ar']]
      .forEach(function (r) { blend.push([r[0], n(r[1], 3), r[2]]); });
    var srcTxt = function (id) { var s = S.mode === 'reference' ? 'ref' : S.src[id]; return s === 'user' ? 'Your data' : s === 'ref' ? 'Reference' : s === 'skip' ? 'Not taken' : ''; };
    var inp = [['Input', 'Value', 'Unit', 'Source']];
    R.defs.forEach(function (d) { inp.push([d.label, S.vals.o[d.k] == null ? '' : S.vals.o[d.k], d.unit, srcTxt('o.' + d.k)]); });
    for (var i = 0; i < 6; i++) R.coal.forEach(function (p) { var v = S.vals.coals[i][p.k]; if (!blank(S.vals.coals[i].pct) || p.k === 'name') inp.push(['Coal ' + (i + 1) + ' · ' + p.label, v == null ? '' : v, p.unit, srcTxt('c.' + i + '.' + p.k)]); });
    var wb = XLSX.utils.book_new();
    [['Results', res, [30, 14, 18, 10, 14, 10]], ['Deviations', dev, [32, 12, 8, 8, 8, 90]], ['Balance', bal, [36, 14, 18]], ['Blend', blend, [24, 14, 12]], ['Inputs', inp, [52, 30, 16, 12]]].forEach(function (s) {
      var ws = XLSX.utils.aoa_to_sheet(s[1]); ws['!cols'] = s[2].map(function (w) { return { wch: w }; }); XLSX.utils.book_append_sheet(wb, ws, s[0]);
    });
    var out = XLSX.write(wb, { type: 'array', bookType: 'xlsx' });
    var d = new Date(), stamp = d.getFullYear() + ('0' + (d.getMonth() + 1)).slice(-2) + ('0' + d.getDate()).slice(-2);
    saveBytes(new Uint8Array(out), 'Coke_Making_Report_' + stamp + '.xlsx', XMIME);
  }

  // ---------------- menu ----------------
  function openSheet() {
    $('#sheet').innerHTML = '<h3>Coke Making</h3><div class="links">' +
      '<button class="lk" data-a="ref">' + ic('dl') + 'Download ' + esc(REF_FILE) + '</button><button class="lk" data-a="blank">' + ic('dl') + 'Download blank input template</button>' +
      '<button class="lk" data-a="exp">' + ic('xl') + 'Export report (.xlsx)</button><button class="lk" data-a="refall">' + ic('reset') + 'Use reference data for everything</button>' +
      '</div><button class="btn block" data-a="close" style="margin-top:10px">Close</button>';
    $('#sheet').classList.add('open'); $('#sheetBg').classList.add('open');
    $$('#sheet [data-a]').forEach(function (b) { b.onclick = function () {
      var a = b.getAttribute('data-a'); closeSheet();
      if (a === 'ref') downloadAsset(REF_FILE); else if (a === 'blank') downloadAsset(BLANK_FILE); else if (a === 'exp') exportReport();
      else if (a === 'refall') { S.mode = 'reference'; S.vals = refValues(); S.src = {}; S.raw = null; S.items = []; S.fileName = ''; save(); go(cur, true); toast('Using reference data'); }
    }; });
  }
  function closeSheet() { $('#sheet').classList.remove('open'); $('#sheetBg').classList.remove('open'); }
  $('#menu').onclick = openSheet; $('#sheetBg').onclick = closeSheet;

  var start = (location.hash || '').slice(1); if (!TITLES[start]) start = 'home';
  try { history.replaceState({ p: start }, '', '#' + start); } catch (e) { }
  go(start, true);
  window.CokeApp = { S: S, go: go, run: run, readWorkbook: readWorkbook };
})();
