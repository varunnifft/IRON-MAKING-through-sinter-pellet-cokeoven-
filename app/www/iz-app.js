/* Cohesive & Melting Zone Prediction (BF Model): runs BF_Inner_Zone_Model_v3.xlsx through the XLCalc engine.
   Inputs: upload the workbook filled with your data, or enter values by hand; anything not given can be taken from the
   reference (example furnace) values, item by item. */
(function () {
  'use strict';
  var IZ = window.IZ, X = window.XLCalc, book = new X.Book(IZ.model);
  var REF_FILE = 'BF_Inner_Zone_Model_v3.xlsx', BLANK_FILE = 'BF_Inner_Zone_Input_Template_Blank.xlsx', KEY = 'iz.state.v1';
  var DEFS = IZ.defs, OVR = IZ.ovr, DASH = IZ.dash, FMT = IZ.fmt;
  var CORE = DEFS.filter(function (d) { return d.kind === 'core'; }), MATRIX = DEFS.filter(function (d) { return d.kind === 'matrix'; }), OPT = DEFS.filter(function (d) { return d.kind === 'opt'; });
  function k(d) { return d.sh + '!' + d.c; }
  function $(s, el) { return (el || document).querySelector(s); }
  function $$(s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function blank(v) { return v === undefined || v === null || (typeof v === 'string' && v.trim() === '') || (typeof v === 'number' && isNaN(v)); }
  function toast(m) { var t = $('#toast'); t.textContent = m; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove('show'); }, 2800); }
  function ic(p) { return '<svg class="ic" viewBox="0 0 24 24">' + p + '</svg>'; }

  // ---------------- state ----------------
  function refFinal() { var v = {}; DEFS.forEach(function (d) { v[k(d)] = d.ref == null ? null : d.ref; }); OVR.forEach(function (o) { v[k(o)] = null; }); return v; }
  function emptyForm() { var v = {}; DEFS.forEach(function (d) { v[k(d)] = ''; }); OVR.forEach(function (o) { v[k(o)] = ''; }); return v; }
  var S = load() || { mode: 'reference', inputMode: 'upload', step: 1, form: emptyForm(), raw: null, items: [], fileName: '', final: refFinal(), src: {}, bands: null };
  if (S.linkOn === undefined) S.linkOn = true;
  var LK = {};
  function refreshLinks() { try { LK = window.IZLink ? IZLink.links() : {}; } catch (e) { LK = {}; } }
  function linked(key) { return !!(S.linkOn && LK[key]); }
  function matrixLinked() { return MATRIX.some(function (d) { return linked(k(d)); }); }
  function linkCount() { return Object.keys(LK).filter(function (x) { return !/^Charging![B-E](2[6-9]|3[0-7])$/.test(x); }).length + (Object.keys(LK).some(function (x) { return /^Charging![B-E]26$/.test(x); }) ? 1 : 0); }
  refreshLinks();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { } }
  function load() { try { var s = JSON.parse(localStorage.getItem(KEY) || 'null'); if (s && s.final) return s; } catch (e) { } return null; }

  // ---------------- calculation ----------------
  function compute() {
    book.clearOverrides(); refreshLinks();
    // inputs held on the other BF Model pages (Data input fills them) always win: entered once, used everywhere
    var fin = {}; Object.keys(S.final).forEach(function (x) { fin[x] = S.final[x]; });
    if (S.linkOn) Object.keys(LK).forEach(function (x) { fin[x] = LK[x].v; });
    Object.keys(fin).forEach(function (key) { var i = key.indexOf('!'), v = fin[key]; book.set(key.slice(0, i), key.slice(i + 1), v === null ? null : v === 'NaN' ? NaN : v); });
    if (S.bands) Object.keys(S.bands).forEach(function (a) { book.set('Dashboard', a, S.bands[a]); });
  }
  function G(sh, a) { try { var v = book.get(sh, a); return X.isErr(v) ? NaN : v; } catch (e) { return NaN; } }
  function N(name) { try { var v = book.nameVal(name, 'Dashboard'); if (v && v.rows) v = v.rows[0][0]; return X.isErr(v) ? NaN : v; } catch (e) { return NaN; } }
  function fmtv(v, fmt) {
    if (v === null || v === undefined || v === '') return '';
    if (typeof v === 'boolean') return v ? 'TRUE' : 'FALSE';
    if (typeof v !== 'number') return esc(v);
    if (!isFinite(v)) return '<span class="dash">—</span>';
    if (fmt && /E\+/.test(fmt)) return v.toExponential(2);
    if (fmt && fmt !== '@' && fmt !== 'General') return X.textFmt(v, fmt);
    var a = Math.abs(v); return X.textFmt(v, a >= 1000 ? '#,##0' : a >= 100 ? '0.0' : a >= 1 ? '0.00' : a === 0 ? '0' : '0.000');
  }
  function cell(sh, a) { return fmtv(G(sh, a), FMT[sh] && FMT[sh][a]); }
  function txt(sh, a) { var v = G(sh, a); return v == null ? '' : typeof v === 'number' ? fmtv(v, FMT[sh] && FMT[sh][a]) : esc(v); }
  function raw(sh, a) { var r = IZ.model.sheets[sh] && IZ.model.sheets[sh][a]; return r == null ? '' : r; }

  // ---------------- missing-input detection ----------------
  function detect(r) {
    var items = [];
    CORE.forEach(function (d) {
      if (linked(k(d)) || !blank(r[k(d)])) return;
      items.push({ key: k(d), l: d.l, u: d.u, ref: d.ref, g: d.g.replace(/^[A-G]\.\s*/, '').replace(/\s+\(.*\)$/, ''), zero: d.zero, choice: 'take' });
    });
    var anyM = matrixLinked() || MATRIX.some(function (d) { return !blank(r[k(d)]); });
    if (!anyM) items.push({ key: 'matrix', l: 'Charging matrix (chute angles and revolutions)', u: '', ref: 'reference matrix', g: 'Charging matrix', choice: 'take' });
    return items;
  }
  function applyItems() {
    var r = S.raw, f = {}, src = {};
    DEFS.concat(OVR).forEach(function (d) { var v = r[k(d)]; f[k(d)] = blank(v) ? null : v; if (!blank(v)) src[k(d)] = 'user'; });
    S.items.forEach(function (it) {
      var take = it.choice === 'take';
      if (it.key === 'matrix') { MATRIX.forEach(function (d) { f[k(d)] = take ? (d.ref == null ? null : d.ref) : null; }); src.matrix = take ? 'ref' : 'skip'; return; }
      var d = DEFS.filter(function (x) { return k(x) === it.key; })[0];
      f[it.key] = take ? d.ref : (it.zero ? 0 : 'NaN'); src[it.key] = take ? 'ref' : 'skip';
    });
    if (S.linkOn) Object.keys(LK).forEach(function (key) { f[key] = LK[key].v; src[key] = 'link'; });
    if (matrixLinked()) { MATRIX.forEach(function (d) { delete src[k(d)]; }); src.matrix = 'link'; }
    S.final = f; S.src = src; S.mode = 'user';
  }
  function countUser(r) { var n = 0; DEFS.concat(OVR).forEach(function (d) { if (!linked(k(d)) && !blank(r[k(d)])) n++; }); return n; }

  // ---------------- Excel ----------------
  function readXlsx(u8, name) {
    var wb = XLSX.read(u8, { type: 'array' });
    if (!wb.Sheets.Inputs) throw new Error('This file has no "Inputs" sheet. Download ' + REF_FILE + ' from this page, fill the yellow cells and upload it.');
    var cv = function (sh, a) { var ws = wb.Sheets[sh]; if (!ws || !ws[a]) return null; var v = ws[a].v; if (typeof v === 'string') { v = v.trim(); if (!v) return null; var n = Number(v.replace(/,/g, '')); if (isFinite(n)) return n; return null; } return typeof v === 'number' ? v : null; };
    var r = {};
    DEFS.concat(OVR).forEach(function (d) { r[k(d)] = cv(d.sh, d.c); });
    var bands = {}; DASH.forEach(function (x) { ['D', 'E'].forEach(function (c) { var v = cv('Dashboard', c + x.r); if (v != null) bands[c + x.r] = v; }); });
    S.raw = r; S.bands = Object.keys(bands).length ? bands : null; S.fileName = name; S.inputMode = 'upload'; S.items = detect(r); S.step = 2; save();
    toast('Read ' + countUser(r) + ' values from ' + name + (S.items.length ? ' · ' + S.items.length + ' missing' : ''));
  }
  function readFile(fl) { var fr = new FileReader(); fr.onload = function () { try { readXlsx(new Uint8Array(fr.result), fl.name); renderInput(); } catch (e) { toast(e.message || 'Could not read the file'); } }; fr.readAsArrayBuffer(fl); }
  $('#file').addEventListener('change', function () { var f = this.files && this.files[0]; if (f) readFile(f); });
  function b64(u8) { var s = '', ch = 0x8000; for (var i = 0; i < u8.length; i += ch) s += String.fromCharCode.apply(null, u8.subarray(i, i + ch)); return btoa(s); }
  var XMIME = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  function saveBytes(name, u8, mime) {
    if (!(window.AndroidBridge && AndroidBridge.saveFile) && window.Android && window.IM_SINTER_URL) {
      try { localStorage.setItem('im.save', JSON.stringify({ name: name, mime: mime, b64: b64(u8), t: Date.now() })); localStorage.setItem('im.route', JSON.stringify({ p: 'www/iz-save.html', t: Date.now() })); }
      catch (e) { toast('File too large to hand over: ' + e.message); return; }
      location.href = window.IM_SINTER_URL; return;
    }
    if (window.AndroidBridge && AndroidBridge.saveFile) { var r = AndroidBridge.saveFile(name, b64(u8), mime); toast(/^ERROR/.test(r || '') ? r : 'Saved to Downloads: ' + name); return; }
    var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([u8], { type: mime })); a.download = name; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500); toast('Downloaded ' + name);
  }
  function getAsset(name, cb) { var x = new XMLHttpRequest(); x.open('GET', name, true); x.responseType = 'arraybuffer'; x.onload = function () { if (x.response && (x.status === 200 || x.status === 0)) cb(new Uint8Array(x.response)); else toast('Could not open ' + name); }; x.onerror = function () { toast('Could not open ' + name); }; x.send(); }
  function download(name) {
    if (location.protocol === 'file:') { var l0 = document.createElement('a'); l0.href = name; l0.download = name; document.body.appendChild(l0); l0.click(); setTimeout(function () { l0.remove(); }, 500); return; }
        if (!(window.AndroidBridge && AndroidBridge.saveFile) && window.Android && window.IM_SINTER_URL) {
      try { localStorage.setItem('im.save', JSON.stringify({ asset: name, name: name, mime: XMIME, t: Date.now() })); localStorage.setItem('im.route', JSON.stringify({ p: 'www/iz-save.html', t: Date.now() })); } catch (e) { }
      location.href = window.IM_SINTER_URL; return;
    }
    getAsset(name, function (u8) { saveBytes(name, u8, XMIME); });
  }
  function exportReport() {
    compute(); var wb = XLSX.utils.book_new();
    var srcOf = function (key) { var s = linked(key) ? 'link' : S.mode === 'reference' ? 'ref' : S.src[key]; return s === 'user' ? 'Your data' : s === 'ref' ? 'Reference' : s === 'skip' ? 'Not taken' : s === 'link' ? 'BF Model · ' + ((LK[key] || {}).from || 'other page') : ''; };
    var inp = [['Input', 'Value', 'Unit', 'Source']];
    DEFS.forEach(function (d) { var v = S.final[k(d)]; if (d.kind === 'opt' && v == null) return; inp.push([d.l, v === 'NaN' || v == null ? '' : v, d.u, d.kind === 'matrix' ? (S.src.matrix === 'link' ? 'BF Model · Burden calculator' : srcOf('matrix') || srcOf(k(d))) : srcOf(k(d))]); });
    OVR.forEach(function (o) { var v = S.final[k(o)]; if (v != null) inp.push(['Estimator override · ' + o.l, v, o.u, 'Your data']); });
    var add = function (nm, aoa, w) { var ws = XLSX.utils.aoa_to_sheet(aoa); if (w) ws['!cols'] = w.map(function (x) { return { wch: x }; }); XLSX.utils.book_append_sheet(wb, ws, nm); };
    var dash = [['COHESIVE & MELTING ZONE PREDICTION'], ['BF Model · Iron Making 5.8 · calculations follow ' + REF_FILE], ['Data', S.mode === 'reference' ? 'Reference (example furnace)' : S.inputMode === 'upload' ? 'Uploaded: ' + S.fileName : 'Entered manually'], ['Run at', new Date().toLocaleString()], [],
      ['Key result', 'Value', 'Unit', 'Low', 'High', 'Status', 'Meaning / action']];
    DASH.forEach(function (x) { var v = G('Dashboard', 'B' + x.r); dash.push([x.l, typeof v === 'number' && isFinite(v) ? +v.toPrecision(6) : v, x.u, G('Dashboard', 'D' + x.r), G('Dashboard', 'E' + x.r), G('Dashboard', 'F' + x.r), x.m]); });
    dash.push([], ['Zone', 'From (m)', 'To (m)', 'Thickness (m)', 'Gas T bottom (°C)', 'Solid T top (°C)', 'What happens here']);
    for (var r = 49; r <= 55; r++) dash.push([raw('Dashboard', 'A' + r), +G('Dashboard', 'B' + r).toFixed(2), +G('Dashboard', 'C' + r).toFixed(2), +G('Dashboard', 'D' + r).toFixed(2), Math.round(G('Dashboard', 'E' + r)), Math.round(G('Dashboard', 'F' + r)), G('Dashboard', 'G' + r)]);
    add('Dashboard', dash, [34, 12, 12, 10, 10, 10, 70]);
    add('Inputs used', inp, [54, 14, 14, 12]);
    ['Estimator', 'Charging', 'Raceway', 'Balance', 'Radial_CZ', 'Gas_Flow', 'Dripping', 'Hearth'].forEach(function (sh) {
      var cells = IZ.model.sheets[sh], mr = 0, mc = 0;
      Object.keys(cells).forEach(function (a) { var m = /^([A-Z]+)(\d+)$/.exec(a), c = XLSX.utils.decode_col(m[1]); mr = Math.max(mr, +m[2]); mc = Math.max(mc, c); });
      var aoa = []; for (var i = 1; i <= mr; i++) { var row = []; for (var j = 0; j <= mc; j++) { var a = XLSX.utils.encode_col(j) + i; if (!(a in cells)) { row.push(null); continue; } var v = G(sh, a); row.push(typeof v === 'number' ? (isFinite(v) ? v : null) : v); } aoa.push(row); }
      add(sh, aoa, [44, 14, 14, 14, 14, 14, 14, 14]);
    });
    var out = XLSX.write(wb, { type: 'array', bookType: 'xlsx' }), d = new Date();
    saveBytes('Cohesive_Melting_Zone_Report_' + d.getFullYear() + ('0' + (d.getMonth() + 1)).slice(-2) + ('0' + d.getDate()).slice(-2) + '.xlsx', new Uint8Array(out), XMIME);
  }

  // ---------------- navigation ----------------
  var TITLES = { dash: 'Cohesive & melting zone', input: 'Inputs', cz: 'Cohesive zone & burden', gas: 'Gas, ΔP & dripping zone', v3d: '3D furnace view', guide: 'User guide' }, cur = 'dash';
  function go(p, noPush) {
    if (cur === 'input') { try { readForm(); save(); } catch (e) { } }
    if (cur === 'v3d' && p !== 'v3d' && window.IZ3D) IZ3D.dispose();
    cur = p; $$('.page').forEach(function (s) { s.classList.toggle('on', s.id === 'p-' + p); });
    $$('nav.bn button[data-p]').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-p') === p); });
    $('#ttl').textContent = TITLES[p];
    if (p !== 'input') compute();
    ({ dash: renderDash, input: renderInput, cz: renderCZ, gas: renderGas, v3d: renderV3d, guide: renderGuide })[p]();
    if (!noPush) { try { history.pushState({ p: p }, '', '#' + p); } catch (e) { } }
    window.scrollTo(0, 0);
  }
  window.addEventListener('popstate', function (e) { go((e.state && e.state.p) || 'dash', true); });
  $$('nav.bn button[data-p]').forEach(function (b) { b.onclick = function () { go(b.getAttribute('data-p')); }; });
  $$('nav.bn button[data-href]').forEach(function (b) { b.onclick = function () { location.href = b.getAttribute('data-href'); }; });
  $('#back').onclick = function () { if (cur === 'dash') location.href = 'bf-home.html'; else history.back(); };
  // Android back key in the shell that hosts this page: step back through the tabs, then leave
  window.appBack = function () { if (cur !== 'dash') { history.back(); return true; } location.href = 'bf-home.html'; return true; };

  // ---------------- drawing helpers ----------------
  var ZC = ['#ff4d0d', '#ffc23d', '#ff8a3d', '#e0567a', '#7a8cff', '#19b3b1', '#4fa8ff'];
  function stateLine() {
    if (S.mode === 'reference') return '<div class="state"><span class="pill ref">REFERENCE DATA</span>' + (S.linkOn && linkCount() ? '<span class="pill OK">' + linkCount() + ' from other BF pages</span>Rest from the example ~4000 t/d furnace. ' : 'Example ~4000 t/d furnace from ' + REF_FILE + '. ') + 'Enter or upload your data on Inputs.</div>';
    var u = 0, r = 0, s = 0, l = 0; Object.keys(S.src).forEach(function (x) { var v = S.src[x]; if (v === 'user') u++; else if (v === 'ref') r++; else if (v === 'skip') s++; else if (v === 'link' && !/^Charging![B-E](2[6-9]|3[0-7])$/.test(x)) l++; });
    return '<div class="state"><span class="pill user">' + u + ' your values</span>' + (l ? '<span class="pill OK">' + l + ' from other BF pages</span>' : '') + (r ? '<span class="pill ref">' + r + ' from reference</span>' : '') + (s ? '<span class="pill skip">' + s + ' not taken</span>' : '') + '<span>' + esc(S.inputMode === 'upload' ? S.fileName : 'Entered manually') + '</span></div>';
  }
  function chart(series, o) {
    var W = 360, H = o.h || 300, L = 46, R = 12, T = 12, B = 38, xs = [], ys = [];
    series.forEach(function (s) { s.pts.forEach(function (p) { if (isFinite(p[0]) && isFinite(p[1])) { xs.push(p[0]); ys.push(p[1]); } }); });
    if (!xs.length) return '<p class="sub">Not enough inputs to draw this chart.</p>';
    var nice = function (a, b) { if (a === b) { a -= 1; b += 1; } var span = b - a, st = Math.pow(10, Math.floor(Math.log10(span / 5))), m = span / 5 / st; st *= m > 5 ? 10 : m > 2 ? 5 : m > 1 ? 2 : 1; return [Math.floor(a / st) * st, Math.ceil(b / st) * st, st]; };
    var xr = nice(o.x0 != null ? Math.min(o.x0, Math.min.apply(null, xs)) : Math.min.apply(null, xs), Math.max.apply(null, xs)), yr = nice(o.y0 != null ? Math.min(o.y0, Math.min.apply(null, ys)) : Math.min.apply(null, ys), Math.max.apply(null, ys));
    var px = function (x) { return L + (x - xr[0]) / (xr[1] - xr[0]) * (W - L - R); }, py = function (y) { return H - B - (y - yr[0]) / (yr[1] - yr[0]) * (H - T - B); };
    var g = '';
    for (var x = xr[0]; x <= xr[1] + 1e-9; x += xr[2]) g += '<line class="gl" x1="' + px(x) + '" x2="' + px(x) + '" y1="' + T + '" y2="' + (H - B) + '"/><text x="' + px(x) + '" y="' + (H - B + 14) + '" text-anchor="middle">' + +x.toFixed(3) + '</text>';
    for (var y = yr[0]; y <= yr[1] + 1e-9; y += yr[2]) g += '<line class="gl" x1="' + L + '" x2="' + (W - R) + '" y1="' + py(y) + '" y2="' + py(y) + '"/><text x="' + (L - 5) + '" y="' + (py(y) + 4) + '" text-anchor="end">' + +y.toFixed(3) + '</text>';
    var lines = series.map(function (s) {
      var d = s.pts.filter(function (p) { return isFinite(p[0]) && isFinite(p[1]); }).map(function (p, i) { return (i ? 'L' : 'M') + px(p[0]).toFixed(1) + ' ' + py(p[1]).toFixed(1); }).join('');
      return (s.fill ? '<path d="' + d + '" fill="' + s.c + '" fill-opacity=".12" stroke="none"/>' : '') + '<path d="' + d + '" fill="none" stroke="' + s.c + '" stroke-width="' + (s.w || 2.4) + '" stroke-linejoin="round"' + (s.dash ? ' stroke-dasharray="5 4"' : '') + '/>' +
        (s.dots ? s.pts.map(function (p) { return isFinite(p[0]) && isFinite(p[1]) ? '<circle cx="' + px(p[0]).toFixed(1) + '" cy="' + py(p[1]).toFixed(1) + '" r="3" fill="' + s.c + '"/>' : ''; }).join('') : '');
    }).join('');
    return '<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '">' + g + '<line class="ax" x1="' + L + '" x2="' + (W - R) + '" y1="' + (H - B) + '" y2="' + (H - B) + '"/><line class="ax" x1="' + L + '" x2="' + L + '" y1="' + T + '" y2="' + (H - B) + '"/>' + lines +
      '<text x="' + ((L + W - R) / 2) + '" y="' + (H - 6) + '" text-anchor="middle">' + esc(o.xl) + '</text><text transform="translate(11 ' + ((T + H - B) / 2) + ') rotate(-90)" text-anchor="middle">' + esc(o.yl) + '</text></svg>' +
      '<div class="legend">' + series.map(function (s) { return '<span style="--c:' + s.c + '">' + esc(s.n) + '</span>'; }).join('') + '</div>';
  }
  function furnace() {
    var Dh = N('in_Dh'), Db = N('in_Db'), Dt = N('in_Dt'), Hb = N('in_Hbosh'), Hbe = N('in_Hbelly'), Hs = N('in_Hstack'), y0 = G('Dashboard', 'B49');
    if (![Dh, Db, Dt, Hb, Hbe, Hs, y0].every(isFinite)) return '<p class="sub" style="text-align:center;margin-top:40px">Furnace geometry missing</p>';
    var Hsl = Hb + Hbe + Hs, Rm = Math.max(Dh, Db, Dt) / 2, W = 220, Hh = 330, pad = 8, sx = (W / 2 - pad) / Rm, sy = (Hh - 2 * pad) / (Hsl - y0);
    var X0 = W / 2, Y = function (y) { return Hh - pad - (y - y0) * sy; }, Xp = function (r) { return X0 + r * sx; };
    var prof = [[Dh / 2, y0], [Dh / 2, 0], [Db / 2, Hb], [Db / 2, Hb + Hbe], [Dt / 2, Hsl]];
    var poly = prof.map(function (p) { return Xp(p[0]).toFixed(1) + ',' + Y(p[1]).toFixed(1); }).concat(prof.slice().reverse().map(function (p) { return Xp(-p[0]).toFixed(1) + ',' + Y(p[1]).toFixed(1); })).join(' ');
    var bands = '';
    for (var r = 49; r <= 55; r++) { var a = G('Dashboard', 'B' + r), b = G('Dashboard', 'C' + r); if (isFinite(a) && isFinite(b) && b > a) bands += '<rect x="0" width="' + W + '" y="' + Y(b).toFixed(1) + '" height="' + (Y(a) - Y(b)).toFixed(1) + '" fill="' + ZC[r - 49] + '" fill-opacity=".55"/>'; }
    var pts = []; for (var i = 36; i <= 45; i++) pts.push([G('Radial_CZ', 'A' + i), G('Radial_CZ', 'B' + i), G('Radial_CZ', 'C' + i)]);
    var ok = pts.every(function (p) { return p.every(isFinite); }), cz = '';
    if (ok) {
      var top = pts.map(function (p, j) { return (j ? 'L' : 'M') + Xp(p[0]).toFixed(1) + ' ' + Y(p[1]).toFixed(1); }).join(''), root = pts.slice().reverse().map(function (p) { return 'L' + Xp(p[0]).toFixed(1) + ' ' + Y(p[2]).toFixed(1); }).join('');
      cz = '<path d="' + top + root + 'Z" fill="#ffe2a8" fill-opacity=".38" stroke="#fff3d6" stroke-width="1.6"/>';
    }
    var tuy = '<line x1="' + Xp(-Dh / 2) + '" x2="' + Xp(Dh / 2) + '" y1="' + Y(0) + '" y2="' + Y(0) + '" stroke="#fff" stroke-dasharray="3 3" stroke-width="1"/>';
    return '<svg class="fur" viewBox="0 0 ' + W + ' ' + Hh + '" role="img" aria-label="Furnace zones"><defs><clipPath id="fclip"><polygon points="' + poly + '"/></clipPath></defs>' +
      '<g clip-path="url(#fclip)"><rect width="' + W + '" height="' + Hh + '" fill="#0a1628"/>' + bands + cz + tuy + '</g><polygon points="' + poly + '" fill="none" stroke="#c3d0dd" stroke-width="2"/></svg>';
  }
  function kcard(x) {
    var v = G('Dashboard', 'B' + x.r), st = String(G('Dashboard', 'F' + x.r) || ''), lo = G('Dashboard', 'D' + x.r), hi = G('Dashboard', 'E' + x.r);
    var c = st === 'OK' ? 'var(--ok)' : st === 'WATCH' ? 'var(--watch)' : st === 'ALARM' ? 'var(--alarm)' : 'var(--muted)';
    if (typeof v === 'number' && !isFinite(v)) st = 'NA';
    var val = typeof v === 'string' ? '<span style="font-size:17px">' + esc(v) + '</span>' : cell('Dashboard', 'B' + x.r) + '<small>' + esc(x.u) + '</small>';
    return '<div class="k" style="--c:' + c + '"><div class="l">' + esc(x.l) + '</div><div class="v">' + val + '</div><div class="s">' + (st ? '<span class="pill ' + (st === 'NA' ? 'NA' : st) + '">' + (st === 'NA' ? 'N/A' : st) + '</span>' : '') +
      (lo !== '' && lo != null && typeof v === 'number' ? fmtv(lo, FMT.Dashboard['D' + x.r]) + '–' + fmtv(hi, FMT.Dashboard['E' + x.r]) : '') + '</div><div class="m">' + esc(x.m) + '</div></div>';
  }
  function sheetTable(sh, r1, r2, cols) {
    cols = cols || ['B']; var h = '<div class="scroll"><table class="tbl">';
    for (var r = r1; r <= r2; r++) {
      var a = raw(sh, 'A' + r); if (a === '') continue;
      var hasV = cols.some(function (c) { return raw(sh, c + r) !== ''; });
      if (!hasV) { h += '<tr class="g"><td colspan="3">' + esc(a) + '</td></tr>'; continue; }
      var u = raw(sh, 'C' + r), d = raw(sh, 'D' + r);
      h += '<tr><td>' + esc(a) + (d && typeof d === 'string' && d[0] !== '=' ? '<br><small>' + esc(d) + '</small>' : '') + '</td><td class="n">' + txt(sh, 'B' + r) + '</td><td><small>' + esc(typeof u === 'string' && u[0] !== '=' ? u : '') + '</small></td></tr>';
    }
    return h + '</table></div>';
  }

  // ---------------- Dashboard ----------------
  function renderDash() {
    var cnt = { OK: 0, WATCH: 0, ALARM: 0 }; DASH.forEach(function (x) { if (x.g === 'Hearth') return; var s = G('Dashboard', 'F' + x.r); if (cnt[s] != null) cnt[s]++; });
    var h = '<div class="hero"><div><div class="eb">Blast furnace · inner zones</div><h1>Cohesive &amp; <span>melting zone</span> prediction</h1>' +
      '<p>Raceway, dripping zone, cohesive (softening–melting) zone and thermal reserve zone, estimated from routine plant data. Hearth liquid levels are in the Hearth liquid prediction.</p>' +
      '<div class="counts"><span class="pill OK">' + cnt.OK + ' OK</span><span class="pill WATCH">' + cnt.WATCH + ' WATCH</span><span class="pill ALARM">' + cnt.ALARM + ' ALARM</span></div>' +
      '<p style="margin-top:10px;font-size:12.5px">Cohesive zone: <b style="color:#ffd9a8">' + esc(G('Radial_CZ', 'B32')) + '</b></p>' +
      '<div class="row2" style="margin-top:10px"><button class="btn pri sm" data-go="input">' + ic('<path d="M12 15V3M7 8l5-5 5 5M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/>') + 'Enter plant data</button></div></div>' + furnace() + '</div>' + stateLine();
    var g = null;
    DASH.forEach(function (x) {
      if (x.g === 'Hearth') return;
      if (x.g !== g) { if (g !== null) h += '</div>'; g = x.g; h += '<div class="sec"><h2>' + esc(g) + '</h2><em>status vs band</em></div><div class="kgrid">'; }
      h += kcard(x);
    });
    h += '</div><div class="sec"><h2>Zone map</h2><em>tuyere axis = 0 m</em></div><div class="card">';
    for (var r = 49; r <= 55; r++) {
      h += '<div class="zone"><i style="--c:' + ZC[r - 49] + '"></i><div><b>' + esc(raw('Dashboard', 'A' + r)) + '</b><div class="h">' + cell('Dashboard', 'B' + r) + ' → ' + cell('Dashboard', 'C' + r) + ' m · ' + cell('Dashboard', 'D' + r) + ' m thick · gas ' + fmtv(G('Dashboard', 'E' + r), '0') + ' °C · solid ' + fmtv(G('Dashboard', 'F' + r), '0') + ' °C</div><p>' + txt('Dashboard', 'G' + r) + '</p></div></div>';
    }
    h += '</div><div class="row2"><button class="btn" id="dExp">' + ic('<path d="M12 3v12M7 10l5 5 5-5M4 19h16"/>') + 'Export results (.xlsx)</button><button class="btn" data-go="v3d">3D furnace view ›</button></div>' +
      '<div class="note warn">' + esc(raw('Guide', 'B16')) + '</div><p class="foot">Cohesive &amp; melting zone prediction · BF Model 5.8 · ' + REF_FILE + '</p>';
    $('#p-dash').innerHTML = h;
    $$('#p-dash [data-go]').forEach(function (b) { b.onclick = function () { go(b.getAttribute('data-go')); }; });
    $('#dExp').onclick = exportReport;
  }

  // ---------------- Cohesive zone & burden ----------------
  function renderCZ() {
    var top = [], root = [], lc = [], lo = [], of = [];
    for (var i = 36; i <= 45; i++) { top.push([G('Radial_CZ', 'A' + i), G('Radial_CZ', 'B' + i)]); root.push([G('Radial_CZ', 'A' + i), G('Radial_CZ', 'C' + i)]); }
    for (var j = 58; j <= 87; j++) { var x = G('Charging', 'B' + j); lc.push([x, G('Charging', 'AD' + j)]); lo.push([x, G('Charging', 'AE' + j)]); of.push([x, G('Charging', 'AF' + j)]); }
    var h = stateLine() + '<div class="card"><h3>Cohesive zone shape</h3><p class="sub">' + esc(G('Radial_CZ', 'B32')) + ' · vertical section across the belly</p>' +
      chart([{ n: 'CZ top (softening start)', c: '#ffb547', pts: top, dots: 1 }, { n: 'CZ root (melt-down)', c: '#ff5a4a', pts: root, dots: 1 }], { xl: 'Radius at belly (m)', yl: 'Height above tuyere (m)', y0: 0 }) + '</div>';
    h += '<div class="card"><h3>Cohesive zone summary</h3>' + sheetTable('Radial_CZ', 21, 31) + '</div>';
    h += '<div class="card"><h3>Ring by ring</h3><div class="scroll"><table class="tbl"><tr><th>Ring</th><th>Ore frac.</th><th>Gas ×avg</th><th>TRZ bottom m</th><th>CZ top m</th><th>CZ root m</th><th>Slits</th></tr>';
    for (var r = 14; r <= 18; r++) h += '<tr><td>' + (r - 13) + (r === 14 ? ' <small>centre</small>' : r === 18 ? ' <small>wall</small>' : '') + '</td><td class="n">' + fmtv(G('Radial_CZ', 'F' + r), '0.00') + '</td><td class="n">' + fmtv(G('Radial_CZ', 'I' + r), '0.00') + '</td><td class="n">' + fmtv(G('Radial_CZ', 'L' + r), '0.0') + '</td><td class="n">' + fmtv(G('Radial_CZ', 'M' + r), '0.0') + '</td><td class="n">' + fmtv(G('Radial_CZ', 'N' + r), '0.0') + '</td><td class="n">' + fmtv(G('Radial_CZ', 'Q' + r), '0') + '</td></tr>';
    h += '</table></div></div>';
    h += '<div class="card"><h3>Burden layers at stockline</h3><p class="sub">From the charging matrix: chute angle and revolutions → landing radius → layer thickness</p>' +
      chart([{ n: 'Coke Lc', c: '#9fa8b8', pts: lc }, { n: 'Metallics Lo', c: '#ff7a1a', pts: lo }], { xl: 'Radius from furnace axis (m)', yl: 'Layer thickness (m)', y0: 0, h: 250 }) + '</div>';
    h += '<div class="card"><h3>Ore fraction across the radius</h3>' + chart([{ n: 'Lo/(Lo+Lc)', c: '#19b3b1', pts: of, fill: 0 }], { xl: 'Radius (m)', yl: 'Ore fraction', y0: 0, h: 230 }) +
      '<div class="scroll" style="margin-top:8px"><table class="tbl"><tr><th>Ring</th><th>Coke Lc m</th><th>Metallics Lo m</th><th>Lo/(Lo+Lc) used</th></tr>';
    for (var q = 42; q <= 46; q++) h += '<tr><td>' + (q - 41) + '</td><td class="n">' + fmtv(G('Charging', 'G' + q), '0.000') + '</td><td class="n">' + fmtv(G('Charging', 'H' + q), '0.000') + '</td><td class="n">' + fmtv(G('Charging', 'K' + q), '0.000') + '</td></tr>';
    h += '</table></div>' + sheetTable('Charging', 48, 51) + '</div>';
    $('#p-cz').innerHTML = h;
  }

  // ---------------- Gas flow & pressure ----------------
  function renderGas() {
    var gas = [], sol = [], pr = [];
    for (var i = 40; i <= 83; i++) { var y = G('Gas_Flow', 'B' + i); gas.push([G('Gas_Flow', 'G' + i), y]); sol.push([G('Gas_Flow', 'H' + i), y]); pr.push([G('Gas_Flow', 'W' + i), G('Gas_Flow', 'C' + i)]); }
    var h = stateLine() + '<div class="card"><h3>Gas &amp; solid temperature</h3><p class="sub">Average ring, tuyere axis to stockline</p>' +
      chart([{ n: 'Gas', c: '#ff7a1a', pts: gas }, { n: 'Solid / burden', c: '#4fa8ff', pts: sol }], { xl: 'Temperature (°C)', yl: 'Height above tuyere (m)', h: 320 }) + '</div>' +
      '<div class="card"><h3>Gas pressure</h3><p class="sub">Calibrated to measured hot blast and top pressure</p>' + chart([{ n: 'Pressure', c: '#19b3b1', pts: pr }], { xl: 'Pressure (kg/cm² g)', yl: 'Height above tuyere (m)', h: 300 }) + '</div>' +
      '<div class="card"><h3>Zones, slits &amp; pressure drop</h3>' + sheetTable('Gas_Flow', 3, 36) + '</div>' +
      '<div class="card"><h3>Raceway · bosh gas · RAFT</h3>' + sheetTable('Raceway', 3, 55) + '</div>' +
      '<div class="card"><h3>Top gas · carbon &amp; oxygen balance</h3>' + sheetTable('Balance', 3, 23) + '</div>' +
      '<div class="card"><h3>Dripping zone · liquid flow &amp; hold-up</h3>' + sheetTable('Dripping', 3, 32) + '</div>';
    $('#p-gas').innerHTML = h;
  }
  function renderHearth() {
    var h = stateLine() + '<div class="kgrid">' + DASH.filter(function (x) { return x.g === 'Hearth'; }).map(kcard).join('') + '</div>' +
      '<div class="card"><h3>Hearth · liquid level &amp; tapping</h3>' + sheetTable('Hearth', 3, 15) + '</div>' +
      '<div class="card"><h3>Dripping zone · liquid flow &amp; hold-up</h3>' + sheetTable('Dripping', 3, 32) + '</div>';
    $('#p-hearth').innerHTML = h;
  }

  // ---------------- 3D view ----------------
  function renderGuide() { $('#p-guide').innerHTML = (window.IMGuide ? IMGuide.cz : '') + '<div class="row2"><a class="btn" href="know-inputs.html#bf">Know your inputs ›</a><a class="btn" href="hearth-liquid.html">Hearth liquid prediction ›</a></div>'; var d = $('#p-guide details'); if (d) d.open = true; }
  function data3d() { var P = IZP.fromBook(G, N); return { P: P, bad: IZP.missing(P) }; }
  var V3 = null, V3S = { gas: true, liquid: true, burden: true, labels: true, iso: true, play: true, cyc: true, t: 0 };
  function geoOpt() { var g = S.geo || {}; return { theta: isFinite(g.theta) ? g.theta : 45, mu: isFinite(g.mu) ? g.mu : 0.4, K: isFinite(g.K) ? g.K : 0.4 }; }
  // casting cycle: taphole closed for `gap` min (level rises at `rise` mm/min), then cast for `castDur` min back to the taphole
  function cycleLevel(P, t) {
    var yTap = -P.Hhearth, gap = isFinite(P.gap) && P.gap > 0 ? P.gap : 45, cd = isFinite(P.castDur) && P.castDur > 0 ? P.castDur : 75, ySafe = -P.Safe;
    var peak = Math.min(ySafe, yTap + P.rise * gap / 1000);
    if (t <= gap) return { y: Math.min(ySafe, yTap + P.rise * t / 1000), cast: false, gap: gap, cd: cd };
    var u = Math.min(1, (t - gap) / cd); return { y: peak + (yTap - peak) * u, cast: u < 1, gap: gap, cd: cd };
  }
  var cycT = 0;
  function renderV3d() {
    var X3 = data3d(), P = X3.P, el = $('#p-v3d');
    if (!window.THREE || !window.IZ3D || !window.IZGeom) { el.innerHTML = '<div class="card"><p class="sub">3D view is not available on this device.</p></div>'; return; }
    if (X3.bad.length) { el.innerHTML = stateLine() + '<div class="card"><h3>3D furnace view</h3><p class="sub">The 3D view needs the inputs that were left out (' + esc(X3.bad.join(', ')) + '). Take them from the reference on Inputs, or enter them.</p></div>'; return; }
    var o = geoOpt(), Gm = IZGeom.build(P, o), yTap = -P.Hhearth, c0 = cycleLevel(P, 0), cyc = c0.gap + c0.cd;
    var fSafe = Gm.float(-P.Safe), fTap = Gm.float(yTap), fPeak = Gm.float(cycleLevel(P, c0.gap).y);
    var tg = function (k, l, c) { return '<button class="' + (V3S[k] ? 'on' : '') + '" data-t="' + k + '" style="--c:' + c + '"><i></i>' + l + '</button>'; };
    var row = function (l, v, u, n) { return '<tr><td>' + l + (n ? '<br><small>' + n + '</small>' : '') + '</td><td class="n">' + v + (u ? ' <small>' + u + '</small>' : '') + '</td></tr>'; };
    var dmState = function (f) { return f.floating ? '<span style="color:#ffb547">Floating</span> · coke-free layer ' + fmtv(f.free, '0.00') + ' m' : '<span style="color:#19b3b1">Sitting</span> on the hearth pad'; };
    var gi = function (k, l, v, mn, mx, st, note) { return '<label class="gi"><span>' + l + '<small>' + note + '</small></span><input type="number" inputmode="decimal" data-g="' + k + '" min="' + mn + '" max="' + mx + '" step="' + st + '" value="' + v + '"></label>'; };
    el.innerHTML = stateLine() +
      '<div class="v3" id="v3"><div class="ov"><span>RAFT ' + fmtv(P.RAFT, '0') + ' °C</span><span>' + esc(G('Radial_CZ', 'B32')) + '</span><span>Deadman <b id="dmS">' + (fTap.floating ? 'floating' : 'sitting') + '</b></span></div><div class="hint">Drag to turn · pinch to zoom</div></div>' +
      '<div class="tg">' + tg('gas', 'Gas', '#ff7a1a') + tg('liquid', 'Metal & slag drops', '#ff5a14') + tg('burden', 'Burden & coke flow', '#b8642e') + tg('iso', 'Isotherms', '#ffffff') + tg('labels', 'Labels', '#9fe6e3') + tg('play', V3S.play ? 'Pause' : 'Play', '#19b3b1') + '</div>' +
      '<div class="card lvl"><h3>Cast cycle · hearth level</h3><p class="sub">Simple cycle for the view. The minute-by-minute prediction with slag and coke left inside is in <a href="hearth-liquid.html" style="color:#ffd9a8">Hearth liquid prediction ›</a></p><p class="sub">Taphole closed ' + fmtv(c0.gap, '0') + ' min (level rises ' + fmtv(P.rise, '0.0') + ' mm/min through the deadman voids), then cast ' + fmtv(c0.cd, '0') + ' min back to the taphole. The deadman floats or sits as the level changes.</p>' +
      '<div class="tg" style="margin:0 0 6px">' + tg('cyc', 'Run cast cycle', '#ffb547') + '</div>' +
      '<input type="range" id="lvT" min="0" max="' + Math.round(cyc) + '" step="1" value="' + Math.round(cycT) + '" aria-label="Minutes into the cast cycle"><div class="rd" id="lvR"></div></div>' +
      '<div class="card"><h3>Calculated geometry</h3><p class="sub">Every shape in the view is drawn from these numbers.</p><table class="tbl v3g"><tbody>' +
      row('Stockline to tuyere', fmtv(P.Hsl, '0.0'), 'm') + row('Hearth Ø · belly Ø · throat Ø', fmtv(P.Dh, '0.0') + ' · ' + fmtv(P.Db, '0.0') + ' · ' + fmtv(P.Dt, '0.0'), 'm') +
      row('Cohesive zone top (centre → wall)', P.czTop.map(function (x) { return fmtv(x, '0.0'); }).join(' · '), 'm', 'Solid T = T<sub>soft</sub> ' + fmtv(P.Tsoft, '0') + ' °C') +
      row('Cohesive zone root (centre → wall)', P.czRoot.map(function (x) { return fmtv(x, '0.0'); }).join(' · '), 'm', 'Solid T = T<sub>melt</sub> ' + fmtv(P.Tmelt, '0') + ' °C') +
      row('Ore/coke layer pair at stockline · belly', fmtv(Gm.pairAt(P.Hsl), '0.00') + ' · ' + fmtv(Gm.pairAt(P.Hsl - P.Hstack), '0.00'), 'm', 'Thins with area as it descends') +
      row('Ore fraction centre · mid-radius · wall', [0, 0.55, 0.95].map(function (s) { return fmtv(Gm.oreFrac(s), '0.00'); }).join(' · '), '', 'From the charging matrix') +
      row('Raceway depth · height · width', fmtv(P.DR, '0.00') + ' · ' + fmtv(P.HR, '0.00') + ' · ' + fmtv(P.WR, '0.00'), 'm') +
      row('Deadman apex above tuyere', fmtv(Gm.apex, '0.00'), 'm', 'Cone at ' + o.theta + '° from the raceway tip' + (Gm.apexClamped ? ', held 0.5 m below the CZ root' : '')) +
      row('Deadman volume · mean height', fmtv(Gm.dmV, '0') + ' m³ · ' + fmtv(Gm.dmH, '0.0'), 'm') +
      row('Burden stress on deadman', fmtv(Gm.sigBurden, '0.0'), 'kPa', 'Janssen, μ ' + o.mu + ', K ' + o.K + ', less gas drag (BSR)') +
      row('Deadman coke weight', fmtv(Gm.wCoke, '0.0'), 'kPa') +
      row('At taphole level', dmState(fTap), '') + row('At end of closed time', dmState(fPeak), '') + row('At tuyere safety level', dmState(fSafe), '') +
      '</tbody></table></div>' +
      '<div class="card"><h3>3D geometry assumptions</h3><p class="sub">The workbook has no deadman shape. Change these if you have tuyere probing, coring or hearth thermocouple data.</p><div class="gis">' +
      gi('theta', 'Deadman cone angle', o.theta, 25, 70, 1, '° from horizontal') + gi('mu', 'Wall friction μ', o.mu, 0.1, 0.8, 0.05, 'burden–wall') + gi('K', 'Janssen K', o.K, 0.2, 0.8, 0.05, 'lateral / vertical stress') +
      '</div><button class="btn sm" id="geoR" style="margin-top:10px">Reset to defaults</button></div>' +
      '<div class="card"><h3>What you see</h3><div class="lg3"><span style="--c:#a04a1e">Ore layers (lumpy zone)</span><span style="--c:#2c3038">Coke layers / coke slits</span><span style="--c:#ff8a1a">Cohesive zone (fused ore)</span><span style="--c:#3b3f48">Active coke zone</span><span style="--c:#1d2026">Deadman coke</span><span style="--c:#fff1b8">Raceways</span><span style="--c:#ff9a1a">Hot metal</span><span style="--c:#d9a441">Slag</span></div>' +
      '<p class="sub" style="margin-top:10px">Section faces are coloured from the calculated solid temperature, with white isotherms every 200 °C. Gas dots are coloured by gas temperature: they leave the raceways, pass sideways through the coke slits of the cohesive zone, then rise faster in rings with a higher gas share. Drops fall from the cohesive-zone root through the active coke to the hearth. Coke lumps move from under the cohesive zone into the raceways.</p><div class="cbar"></div><div class="cbl"><span>0 °C</span><span>400</span><span>900</span><span>1400</span><span>2000 °C</span></div></div>';
    try { V3 = IZ3D.mount($('#v3'), Gm, {}); } catch (e) { $('#v3').innerHTML = '<p class="sub" style="padding:16px">3D view could not start: ' + esc(e.message) + '</p>'; V3 = null; return; }
    ['gas', 'liquid', 'burden', 'labels', 'iso'].forEach(function (k) { V3.toggle(k, V3S[k]); }); V3.play(V3S.play);
    var lvl = function () {
      var t = +$('#lvT').value; cycT = t; var c = cycleLevel(P, t), f = V3.setLiquid(c.y, c.cast), above = (c.y - yTap) * 1000;
      $('#lvR').innerHTML = '<span>' + (t <= c.gap ? 'Taphole closed <b>' + Math.round(t) + ' min</b>' : 'Casting <b>' + Math.round(t - c.gap) + ' min</b>') + '</span><span>Level <b>' + fmtv(above, '0') + ' mm</b> above taphole</span>' +
        '<span class="' + (f.floating ? 'bad' : '') + '">Deadman ' + (f.floating ? 'floating, gap ' + fmtv(f.free, '0.00') + ' m' : 'sitting') + '</span><span>Buoyancy <b>' + fmtv(f.buoy, '0') + '</b> vs load <b>' + fmtv(f.load, '0') + '</b> kPa</span>';
      var d = $('#dmS'); if (d) d.textContent = f.floating ? 'floating' : 'sitting';
    };
    $('#lvT').oninput = lvl; lvl();
    clearInterval(renderV3d.tm);
    renderV3d.tm = setInterval(function () {
      if (cur !== 'v3d' || !V3S.cyc || !V3S.play || !$('#lvT')) return;
      var s = $('#lvT'), t = (+s.value + 1) % (+s.max + 1); s.value = t; lvl();
    }, 250);
    $$('#p-v3d .tg button').forEach(function (b) { b.onclick = function () {
      var k = b.getAttribute('data-t'); V3S[k] = !V3S[k];
      if (k === 'play') { V3.play(V3S.play); b.lastChild.textContent = V3S.play ? 'Pause' : 'Play'; } else if (k !== 'cyc') V3.toggle(k, V3S[k]);
      b.classList.toggle('on', V3S[k]);
    }; });
    $$('#p-v3d [data-g]').forEach(function (i) { i.onchange = function () {
      var v = parseFloat(i.value), mn = +i.min, mx = +i.max; if (!isFinite(v)) return; v = Math.max(mn, Math.min(mx, v));
      S.geo = S.geo || {}; S.geo[i.getAttribute('data-g')] = v; save(); IZ3D.dispose(); renderV3d();
    }; });
    $('#geoR').onclick = function () { S.geo = {}; save(); IZ3D.dispose(); renderV3d(); };
  }

  // ---------------- Inputs ----------------
  function renderInput() {
    refreshLinks();
    var st = S.step === 2 && S.raw ? 2 : 1, el = $('#p-input');
    el.innerHTML = '<div class="steps"><button data-s="1" class="' + (st === 1 ? 'on' : '') + '"><i>1</i>Inputs</button><button data-s="2" class="' + (st === 2 ? 'on' : '') + '"><i>2</i>Review &amp; fill missing</button><button data-s="3"><i>3</i>Results</button></div>' + (st === 1 ? step1() : step2());
    $$('.steps button', el).forEach(function (b) { b.onclick = function () {
      var n = +b.getAttribute('data-s'); if (st === 1 && S.inputMode === 'manual') readForm();
      if (n === 3) { if (S.raw) return calc(); return go('dash'); }
      if (n === 2) { if (S.inputMode === 'manual') return toReview(); if (!S.raw) return toast('Upload a file or enter values first'); }
      S.step = n; save(); renderInput();
    }; });
    if (st === 1) bind1(); else bind2();
  }
  function step1() {
    var m = S.inputMode;
    var h = '<div class="card"><h3>Inputs</h3><p class="sub">Routine plant data: daily log, DCS blast and top gas, furnace drawing, PCI and coke analysis, burden, slag, charging matrix and cast-house data. Anything you leave blank is listed in the next step.</p>' +
      '<div class="opts"><button class="opt' + (m === 'upload' ? ' on' : '') + '" data-m="upload"><b>Upload Excel</b><small>' + esc(REF_FILE) + ' with the yellow cells filled with your data</small></button>' +
      '<button class="opt' + (m === 'manual' ? ' on' : '') + '" data-m="manual"><b>Enter manually</b><small>Type the inputs, charging matrix and any measured overrides</small></button></div>';
    if (m === 'upload') h += '<button class="drop" id="drop"><b>Tap to choose the Excel file</b><small>.xlsx · ' + esc(REF_FILE) + ' or the blank template, filled</small></button><p class="sub" style="margin:8px 0 0">' +
      (S.raw && S.fileName && S.inputMode === 'upload' ? 'Loaded: <b>' + esc(S.fileName) + '</b> · ' + countUser(S.raw) + ' values · ' + S.items.length + ' missing' : 'No file loaded yet.') + '</p>';
    if (m === 'upload') h += linkBox().replace('<details class="fs"', '<details class="fs" style="margin-top:12px"');
    h += '<div class="links"><button class="lk" data-dl="ref">⤓ Download ' + esc(REF_FILE) + ' <span class="pill ref">reference</span></button><button class="lk" data-dl="blank">⤓ Download blank input template</button>' +
      '<button class="lk" id="useRef">↺ Use reference data for everything</button></div>' +
      '<div class="note"><b style="color:#ff8a7a">Red</b> = reference value used because you did not give it · <b style="color:var(--ok)">Green</b> = your value. In the Excel, type only in the yellow cells (Inputs, Charging; Estimator column C only with a measured value).</div></div>';
    if (m === 'manual') h += form() + '<div class="row2"><button class="btn" id="fillRef">↺ Fill blanks with reference</button><button class="btn pri" id="toRev">Review inputs ›</button></div>';
    return h;
  }
  function fld(key, l, u, n, ref) {
    var v = S.form[key];
    return '<div class="f"><label>' + esc(l) + '<small>' + esc(u) + (n ? ' · ' + esc(n) : '') + '</small></label><input inputmode="decimal" data-k="' + esc(key) + '" value="' + esc(v == null ? '' : v) + '" placeholder="' + esc(ref == null ? '' : ref) + '"></div>';
  }
  function form() {
    var h = linkBox(), groups = {}, order = [];
    CORE.forEach(function (d) { if (linked(k(d))) return; if (!groups[d.g]) { groups[d.g] = []; order.push(d.g); } groups[d.g].push(d); });
    order.forEach(function (g, i) {
      var ds = groups[g], f = ds.filter(function (d) { return !blank(S.form[k(d)]); }).length;
      h += '<details class="fs"' + (i === 0 ? ' open' : '') + '><summary>' + esc(g.replace(/^[A-G]\.\s*/, '').replace(/\s+\(.*\)$/, '')) + '<span>' + f + ' / ' + ds.length + ' filled</span></summary><div class="fb">' + ds.map(function (d) { return fld(k(d), d.l, d.u, d.n, d.ref); }).join('') + '</div></details>';
    });
    var mx = '<p class="sub" style="margin:8px 0">Enter each position as on your charging-matrix screen. Leave unused positions empty.</p><div class="scroll"><table class="mx"><tr><th>Pos</th><th>Coke α°</th><th>Coke rev</th><th>Met. α°</th><th>Met. rev</th><th>Coke R app</th><th>Met. R app</th></tr>';
    for (var p = 1; p <= 12; p++) {
      mx += '<tr><td>' + p + '</td>' + 'BCDEPQ'.split('').map(function (c) { var d = DEFS.filter(function (x) { return x.pos === p && x.col === c; })[0], key = k(d); return '<td><input inputmode="decimal" data-k="' + key + '" value="' + esc(S.form[key] == null ? '' : S.form[key]) + '" placeholder="' + esc(d.ref == null ? '' : d.ref) + '"></td>'; }).join('') + '</tr>';
    }
    if (matrixLinked()) h += '<details class="fs"><summary>Charging matrix<span>from Burden calculator</span></summary><div class="fb"><p class="sub" style="margin:8px 0">The chute angles and revolutions are taken from the Burden calculator charging matrix, so they are not asked again here. Change them on the Burden calculator page.</p></div></details>';
    else h += '<details class="fs"><summary>Charging matrix<span>12 positions</span></summary><div class="fb">' + mx + '</table></div></div></details>';
    h += '<details class="fs"><summary>Ring overrides<span>optional · radar data</span></summary><div class="fb">' + DEFS.filter(function (d) { return /^J4[2-6]$/.test(d.c); }).map(function (d) { return fld(k(d), d.l, d.u, d.n, ''); }).join('') + '</div></details>';
    var eg = {}, eo = []; OVR.forEach(function (o) { if (!eg[o.g]) { eg[o.g] = []; eo.push(o.g); } eg[o.g].push(o); });
    h += '<details class="fs"><summary>Estimator overrides<span>optional · measured values only</span></summary><div class="fb"><p class="sub" style="margin:8px 0">Leave empty to use the model\'s own estimate (shown grey). Type a value only if you have a lab test, probe or sampling result.</p>' +
      eo.map(function (g) { return '<div style="font:700 12px var(--f-display);letter-spacing:.12em;text-transform:uppercase;color:#9fe6e3;margin:12px 0 2px">' + esc(g || '') + '</div>' + eg[g].filter(function (o) { return !linked(k(o)); }).map(function (o) { return fld(k(o), o.l, o.u, o.conf, fmtv(G('Estimator', o.auto), FMT.Estimator && FMT.Estimator[o.auto]).replace(/<[^>]+>/g, '')); }).join(''); }).join('') + '</div></details>';
    return h;
  }
  function linkBox() {
    var keys = Object.keys(LK).filter(function (x) { return !/^Charging![B-E](2[6-9]|3[0-7])$/.test(x); });
    if (!keys.length && !matrixLinked() && !Object.keys(LK).length) return '<div class="note">No other BF Model page has data yet. When you use Batch chemistry, Burden calculator or Furnace 3D view, the inputs they hold are taken from there and not asked again here.</div>';
    var byKey = {}; DEFS.concat(OVR).forEach(function (d) { byKey[k(d)] = d; });
    var rows = keys.map(function (x) { var d = byKey[x]; return '<tr><td>' + esc(d ? d.l : x) + '<br><small>' + esc(LK[x].from) + '</small></td><td class="n">' + fmtv(LK[x].v) + '</td><td><small>' + esc(d ? d.u : '') + '</small></td></tr>'; }).join('');
    if (Object.keys(LK).some(function (x) { return /^Charging![B-E]26$/.test(x); })) rows += '<tr><td>Charging matrix (chute angles, revolutions)<br><small>Burden calculator</small></td><td class="n">' + MATRIX.filter(function (d) { return LK[k(d)] && LK[k(d)].v != null && d.col === 'B'; }).length + '</td><td><small>positions</small></td></tr>';
    return '<details class="fs"' + (S.linkOn ? '' : ' open') + '><summary>From other BF Model pages<span>' + (S.linkOn ? linkCount() + ' inputs, not asked again' : 'link off') + '</span></summary><div class="fb">' +
      '<div class="f"><label>Use the values already in the BF Model<small>Batch chemistry, Burden calculator and Furnace 3D view. Each input is entered once, on the page that owns it.</small></label><select id="linkOn" style="min-height:40px;border-radius:10px;border:1px solid #2a4a70;background:rgba(4,12,23,.6);color:#ffd9a8;padding:6px"><option value="1"' + (S.linkOn ? ' selected' : '') + '>On</option><option value="0"' + (S.linkOn ? '' : ' selected') + '>Off</option></select></div>' +
      (S.linkOn ? '<div class="scroll"><table class="tbl">' + rows + '</table></div>' : '') + '</div></details>';
  }
  function readForm() { $$('#p-input [data-k]').forEach(function (el) { S.form[el.getAttribute('data-k')] = el.value.trim(); }); save(); }
  function toReview() {
    readForm(); var r = {};
    DEFS.concat(OVR).forEach(function (d) { var v = S.form[k(d)]; r[k(d)] = blank(v) || isNaN(+v) ? null : +v; });
    S.raw = r; S.bands = null; S.fileName = ''; S.inputMode = 'manual'; S.items = detect(r); S.step = 2; save(); renderInput(); window.scrollTo(0, 0);
  }
  function bind1() {
    var lo = $('#linkOn'); if (lo) lo.onchange = function () { readForm(); S.linkOn = this.value === '1'; save(); renderInput(); };
    $$('#p-input [data-m]').forEach(function (b) { b.onclick = function () { if (S.inputMode === 'manual') readForm(); S.inputMode = b.getAttribute('data-m'); save(); renderInput(); }; });
    var d = $('#drop'); if (d) d.onclick = function () { var f = $('#file'); f.value = ''; f.click(); };
    $$('#p-input [data-dl]').forEach(function (b) { b.onclick = function () { download(b.getAttribute('data-dl') === 'ref' ? REF_FILE : BLANK_FILE); }; });
    $('#useRef').onclick = function () { S.mode = 'reference'; S.final = refFinal(); S.src = {}; S.raw = null; S.items = []; S.bands = null; S.fileName = ''; save(); toast('Using reference data'); go('dash'); };
    var fr = $('#fillRef'); if (fr) fr.onclick = function () { readForm(); var n = 0; DEFS.forEach(function (d) { if (d.kind !== 'opt' && blank(S.form[k(d)]) && d.ref != null) { S.form[k(d)] = d.ref; n++; } }); save(); renderInput(); toast(n + ' blanks filled with reference values'); };
    var tr = $('#toRev'); if (tr) tr.onclick = toReview;
  }
  function step2() {
    var it = S.items, t = it.filter(function (x) { return x.choice === 'take'; }).length;
    var h = '<div class="card"><h3>Review &amp; fill missing</h3><p class="sub">' + (S.inputMode === 'upload' && S.fileName ? 'From <b>' + esc(S.fileName) + '</b>. ' : 'From the manual entry. ') +
      (it.length ? 'These inputs were not given. For each one, take the reference value or leave it out. Results that need an input you leave out show “—”.' : 'All inputs are given. Nothing is taken from the reference data.') + '</p>' +
      (S.linkOn && linkCount() ? '<p class="sub"><b style="color:var(--ok)">' + linkCount() + ' inputs</b> come from the other BF Model pages and are not asked again' + (S.inputMode === 'upload' ? ' (the same cells in the uploaded file are not used)' : '') + '.</p>' : '') +
      '<div class="rvsum"><div><b style="color:var(--ok)">' + countUser(S.raw) + '</b><small>your values</small></div><div><b style="color:#ff8a7a">' + t + '</b><small>take reference</small></div><div><b>' + (it.length - t) + '</b><small>don\'t take</small></div></div>' +
      (it.length ? '<div class="row2"><button class="btn sm" id="allT" style="color:#ff8a7a">Take all reference values</button><button class="btn sm" id="allS">Don\'t take any</button></div>' : '') + '</div>';
    var groups = {}, order = []; it.forEach(function (x, i) { if (!groups[x.g]) { groups[x.g] = []; order.push(x.g); } groups[x.g].push(i); });
    order.forEach(function (g) {
      h += '<details class="fs" open><summary>' + esc(g) + '<span>' + groups[g].length + '</span></summary><div class="fb">' + groups[g].map(function (i) {
        var x = it[i];
        return '<div class="rv"><div class="lb">' + esc(x.l) + '<small>Reference: <b>' + esc(x.ref == null ? '—' : x.ref) + '</b> ' + esc(x.u || '') + '</small><small>Don\'t take → ' + (x.key === 'matrix' ? 'no charging positions (burden distribution not calculated)' : x.zero ? '0 = the model estimates it' : 'left out; results that need it show —') + '</small></div>' +
          '<div class="seg"><button class="take' + (x.choice === 'take' ? ' on' : '') + '" data-i="' + i + '" data-c="take">Take reference</button><button class="skip' + (x.choice === 'skip' ? ' on' : '') + '" data-i="' + i + '" data-c="skip">Don\'t take</button></div></div>';
      }).join('') + '</div></details>';
    });
    return h + '<div class="row2"><button class="btn" id="bk1">‹ Back to inputs</button><button class="btn pri" id="calc">▶ Calculate</button></div>';
  }
  function bind2() {
    $$('#p-input .seg button').forEach(function (b) { b.onclick = function () { S.items[+b.getAttribute('data-i')].choice = b.getAttribute('data-c'); save(); var y = window.scrollY; renderInput(); window.scrollTo(0, y); }; });
    var a = $('#allT'); if (a) a.onclick = function () { S.items.forEach(function (x) { x.choice = 'take'; }); save(); renderInput(); };
    var b2 = $('#allS'); if (b2) b2.onclick = function () { S.items.forEach(function (x) { x.choice = 'skip'; }); save(); renderInput(); };
    $('#bk1').onclick = function () { S.step = 1; save(); renderInput(); };
    $('#calc').onclick = calc;
  }
  function calc() { applyItems(); S.step = 1; save(); compute(); toast('Calculated'); go('dash'); }

  // ---------------- menu ----------------
  function openSheet() {
    $('#sheet').innerHTML = '<h3>Cohesive &amp; melting zone</h3><div class="links">' +
      '<button class="lk" data-a="ref">⤓ Download ' + esc(REF_FILE) + '</button><button class="lk" data-a="blank">⤓ Download blank input template</button>' +
      '<button class="lk" data-a="exp">⤓ Export results (.xlsx)</button>' + (window.Android && Android.printPdf ? '<button class="lk" data-a="pdf">⎙ Save this page as PDF</button>' : '') + '<button class="lk" data-a="refall">↺ Use reference data for everything</button></div><button class="btn" data-a="close" style="width:100%;margin-top:10px">Close</button>';
    $('#sheet').classList.add('open'); $('#sheetBg').classList.add('open');
    $$('#sheet [data-a]').forEach(function (b) { b.onclick = function () {
      var a = b.getAttribute('data-a'); closeSheet();
      if (a === 'ref') download(REF_FILE); else if (a === 'blank') download(BLANK_FILE); else if (a === 'exp') exportReport();
      else if (a === 'pdf') { try { Android.printPdf('Cohesive_Melting_Zone_' + cur); toast('Choose "Save as PDF" as the printer'); } catch (e) { } }
      else if (a === 'refall') { S.mode = 'reference'; S.final = refFinal(); S.src = {}; S.raw = null; S.items = []; S.bands = null; save(); go(cur, true); toast('Using reference data'); }
    }; });
  }
  function closeSheet() { $('#sheet').classList.remove('open'); $('#sheetBg').classList.remove('open'); }
  $('#menu').onclick = openSheet; $('#sheetBg').onclick = closeSheet;

  var start = (location.hash || '').slice(1); if (!TITLES[start]) start = 'dash';
  try { history.replaceState({ p: start }, '', '#' + start); } catch (e) { }
  compute(); go(start, true);
  window.IZApp = { S: S, go: go, book: book, G: G, readXlsx: readXlsx };
})();
