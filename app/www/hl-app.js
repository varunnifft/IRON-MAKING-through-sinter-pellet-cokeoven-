/* Hearth Liquid Prediction (BF Model) — built on BF_Hearth_Liquid_Module_1.xlsx (HLEngine = exact replica).
   Tap log calibration, 48 h minute-by-minute hearth simulation, predicted taps, live estimate since the last tap
   closed, 3D hearth. Inputs already held on other BF Model pages are taken from there and not asked again. */
(function () {
  'use strict';
  var KEY = 'hl2.state.v1', IZKEY = 'iz.state.v1', REFX = 'BF_Hearth_Liquid_Module_Reference.xlsx', TPL = 'BF_Hearth_Liquid_Input_Template.xlsx';
  var XMIME = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  function $(s, el) { return (el || document).querySelector(s); }
  function $$(s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function blank(v) { return v === undefined || v === null || (typeof v === 'string' && v.trim() === '') || (typeof v === 'number' && isNaN(v)); }
  function num(v) { return typeof v === 'number' && isFinite(v); }
  function toast(m) { var t = $('#toast'); t.textContent = m; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove('show'); }, 2800); }
  function ic(p) { return '<svg class="ic" viewBox="0 0 24 24">' + p + '</svg>'; }
  function f(v, d) { if (v === '' || v == null || !isFinite(v)) return '<span class="dash">—</span>'; return (+v).toLocaleString('en-IN', { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 }); }
  function pc(v, d) { return v === '' || v == null || !isFinite(v) ? '<span class="dash">—</span>' : f(v * 100, d == null ? 1 : d) + ' %'; }
  function fp(v, d) { return v === '' || v == null || !isFinite(v) ? '' : +(+v).toFixed(d == null ? 3 : d); }

  // ---------- wall-clock minutes (no time-zone shifts) ----------
  function clk(m) { if (!num(m)) return ''; var d = new Date(m * 60000); return d.getUTCFullYear() + '-' + ('0' + (d.getUTCMonth() + 1)).slice(-2) + '-' + ('0' + d.getUTCDate()).slice(-2) + ' ' + ('0' + d.getUTCHours()).slice(-2) + ':' + ('0' + d.getUTCMinutes()).slice(-2); }
  function hm(m) { var s = clk(m); return s ? s.slice(11) : ''; }
  function dtl(m) { return num(m) ? clk(m).replace(' ', 'T') : ''; }
  function parseDT(s) { var m = /^(\d{4})-(\d{2})-(\d{2})[T ](\d{1,2}):(\d{2})/.exec(String(s || '').trim()); return m ? Date.UTC(+m[1], m[2] - 1, +m[3], +m[4], +m[5]) / 60000 : null; }
  function nowMin() { var d = new Date(); return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes()) / 60000; }
  function todayMin() { var d = new Date(); return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 60000; }
  function serialToMin(v) { return num(v) ? Math.round((v - 25569) * 1440) : (typeof v === 'string' ? parseDT(v.replace(/\//g, '-')) : null); }
  function minToSerial(m) { return m / 1440 + 25569; }

  // ---------- inputs (workbook Inputs sheet, same cells) ----------
  var DEFS = window.HL_DEFS;
  var BYK = {}; DEFS.forEach(function (d) { BYK[d.k] = d; });
  var SAMPLE = [[1, '2026-11-04 06:00', '2026-11-04 07:48', 360, 12, 'Blow', 3.22, 55, 3.23], [2, '2026-11-04 07:56', '2026-11-04 09:46', 359, 18, 'Blow', 3.18, 55, 3.39], [1, '2026-11-04 09:52', '2026-11-04 11:32', 322, 11, 'Blow', 3.17, 55, 3.06],
    [2, '2026-11-04 11:46', '2026-11-04 13:27', 351, 13, 'Blow', 3.21, 55, 3.27], [1, '2026-11-04 13:38', '2026-11-04 15:34', 387, 18, 'Blow', 3.22, 55, 3.15], [2, '2026-11-04 15:40', '2026-11-04 17:47', 417, 10, 'Blow', 3.21, 55, 3.25],
    [1, '2026-11-04 18:01', '2026-11-04 19:45', 369, 17, 'Blow', 3.19, 55, 3.13], [2, '2026-11-04 19:51', '2026-11-04 21:31', 333, 16, 'Planned close', 3.18, 55, 3.1], [1, '2026-11-04 21:43', '2026-11-04 23:34', 377, 12, 'Blow', 3.13, 55, 3.12],
    [2, '2026-11-04 23:41', '2026-11-05 01:26', 350, 14, 'Blow', 3.24, 55, 3.12], [1, '2026-11-05 01:33', '2026-11-05 03:28', 392, 10, 'Blow', 3.2, 55, 3.07], [2, '2026-11-05 03:40', '2026-11-05 05:19', 344, 16, 'Blow', 3.19, 55, 3.38]]
    .map(function (r, i) { return { th: r[0], open: parseDT(r[1]), close: parseDT(r[2]), hm: r[3], slag: null, first: r[4], end: r[5], pb: r[6], bit: r[7], len: r[8], prod: null, rem: i ? '' : 'Sample data' }; });
  function refFinal() { var v = {}; DEFS.forEach(function (d) { v[d.k] = d.ref; }); return v; }
  function load() { try { var s = JSON.parse(localStorage.getItem(KEY) || 'null'); if (s && s.final) return s; } catch (e) { } return null; }
  var S = load() || { mode: 'reference', inputMode: 'manual', step: 1, form: {}, raw: null, items: [], fileName: '', final: refFinal(), src: {}, taps: null, liveNow: '', liveOpen: false };
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { } }
  function taps() { return (S.taps || SAMPLE).slice().sort(function (a, b) { return (a.open || 0) - (b.open || 0); }); }

  // ---------- values entered on other BF Model pages (entered once, used everywhere) ----------
  var SH = {};
  function shared() {
    SH = {}; var LK = {}, IZS = null, ST = null;
    try { LK = window.IZLink ? IZLink.links() : {}; } catch (e) { LK = {}; }
    try { IZS = JSON.parse(localStorage.getItem(IZKEY) || 'null'); } catch (e) { }
    try { ST = JSON.parse(localStorage.getItem('bf-inside-v1') || 'null'); } catch (e) { }
    DEFS.forEach(function (d) {
      if (!d.share) return; var v = null, from = '';
      if (d.share === 'nTap') { if (ST && ST.v && num(+ST.v.nTap) && ST.v.nTap !== '') { v = +ST.v.nTap; from = 'Furnace 3D view'; } }
      else if (LK[d.share] && LK[d.share].from !== 'Hearth liquid') { v = LK[d.share].v; from = LK[d.share].from; }
      else if (IZS && IZS.mode !== 'reference' && IZS.src && IZS.src[d.share] === 'user' && num(+IZS.final[d.share])) { v = +IZS.final[d.share]; from = 'Cohesive & melting zone'; }
      if (v != null && isFinite(v)) SH[d.k] = { v: +(v * (d.sx || 1)).toFixed(d.sx === 1000 ? 1 : 4), from: from };
    });
    return SH;
  }

  // ---------- model ----------
  var M = null, need = [], LV = null;
  function inputs() {
    shared(); var F = S.final, I = {}; need = [];
    DEFS.forEach(function (d) {
      var v = SH[d.k] ? SH[d.k].v : F[d.k];
      if (blank(v)) { if (d.opt) v = d.ref; else need.push(d); }
      I[d.k] = d.text || d.list && typeof d.ref === 'string' ? v : +v;
    });
    I.dt = +I.dt || 1; I.N_THs = Math.max(1, Math.round(I.N_THs || 1)); I.N_TH = Math.max(I.N_THs, Math.round(I.N_TH || 1));
    return I;
  }
  function compute() {
    var I = inputs(); if (need.length) { M = null; return; }
    try { M = HLEngine.run(I, taps(), { today: todayMin() }); } catch (e) { M = null; need = [{ l: 'calculation: ' + e.message }]; return; }
    var now = S.liveNow ? parseDT(S.liveNow) : (S.taps ? nowMin() : M.D.SimStart + 51);   /* sample log: 51 min after its last close, as in the workbook */ LV = HLEngine.live(M, num(now) ? now : nowMin(), !!S.liveOpen); LV.now = now;
  }

  // ---------- navigation ----------
  var TITLES = { dash: 'Hearth liquid prediction', input: 'Inputs', taps: 'Tap log', sim: '48 h simulation', v3d: '3D hearth', guide: 'User guide' }, cur = 'dash';
  function go(p, noPush) {
    if (cur === 'input') { try { readForm(); } catch (e) { } }
    if (cur === 'v3d' && p !== 'v3d' && window.HL3D) { HL3D.dispose(); stopPlay(); }
    cur = p; $$('.page').forEach(function (s) { s.classList.toggle('on', s.id === 'p-' + p); });
    $$('nav.bn button[data-p]').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-p') === p); });
    $('#ttl').textContent = TITLES[p];
    compute(); ({ dash: renderDash, input: renderInput, taps: renderTaps, sim: renderSim, v3d: renderV3d, guide: renderGuide })[p]();
    if (!noPush) { try { history.pushState({ p: p }, '', '#' + p); } catch (e) { } }
    window.scrollTo(0, 0);
  }
  window.addEventListener('popstate', function (e) { go((e.state && e.state.p) || 'dash', true); });
  $$('nav.bn button[data-p]').forEach(function (b) { b.onclick = function () { go(b.getAttribute('data-p')); }; });
  $('#back').onclick = function () { if (cur === 'dash') location.href = 'bf-home.html'; else history.back(); };
  window.appBack = function () { if (cur !== 'dash') { history.back(); return true; } location.href = 'bf-home.html'; return true; };

  // ---------- shared bits ----------
  function stateLine() {
    var ns = Object.keys(SH).length, nu = Object.keys(S.src).filter(function (k) { return S.src[k] === 'user'; }).length;
    return '<div class="state">' + (S.mode === 'reference' ? '<span class="pill ref">REFERENCE</span>example furnace inputs' : '<span class="pill user">' + nu + ' your values</span>' + (S.fileName ? esc(S.fileName) : 'entered manually')) +
      (ns ? '<span class="pill OK">' + ns + ' from other BF pages</span>' : '') + '<span class="pill ' + (S.taps ? 'user' : 'ref') + '">' + (S.taps ? S.taps.length + ' taps logged' : 'sample tap log') + '</span></div>';
  }
  function kc(l, v, u, st, m) {
    var c = st === 'OK' ? 'var(--ok)' : st === 'WATCH' ? 'var(--watch)' : st === 'ALARM' ? 'var(--alarm)' : 'var(--muted)';
    return '<div class="k" style="--c:' + c + '"><div class="l">' + l + '</div><div class="v">' + v + '<small>' + esc(u) + '</small></div><div class="s">' + (st ? '<span class="pill ' + st + '">' + st + '</span>' : '') + '</div><div class="m">' + m + '</div></div>';
  }
  function stOf(s) { return /^CRITICAL/.test(s) ? 'ALARM' : /^HIGH|^Check|^TAPHOLE|^Marginal/.test(s) ? 'WATCH' : 'OK'; }
  function noData() {
    return '<div class="card"><h3>Inputs needed</h3><p class="sub">These inputs have no value yet: ' + esc(need.map(function (d) { return d.l; }).join(', ')) + '.</p><button class="btn pri" data-go="input">Open Inputs ›</button></div>';
  }
  function bindGo(el) { $$('[data-go]', el).forEach(function (b) { b.onclick = function () { go(b.getAttribute('data-go')); }; }); }
  function chart(series, o) {
    var W = 360, Hh = o.h || 240, L = 46, Rr = 12, Tt = 12, B = 36, xs = [], ys = [];
    series.forEach(function (s) { s.pts.forEach(function (p) { if (isFinite(p[0]) && isFinite(p[1])) { xs.push(p[0]); ys.push(p[1]); } }); });
    (o.hl || []).forEach(function (h) { ys.push(h.y); }); if (o.y0 != null) ys.push(o.y0);
    var nice = function (a, b) { if (a === b) { a -= 1; b += 1; } var span = b - a, st = Math.pow(10, Math.floor(Math.log10(span / 5))), m = span / 5 / st; st *= m > 5 ? 10 : m > 2 ? 5 : m > 1 ? 2 : 1; return [Math.floor(a / st) * st, Math.ceil(b / st) * st, st]; };
    var xr = nice(Math.min.apply(null, xs), Math.max.apply(null, xs)), yr = nice(Math.min.apply(null, ys), Math.max.apply(null, ys));
    if (o.xstep) xr[2] = o.xstep;
    var px = function (x) { return L + (x - xr[0]) / (xr[1] - xr[0]) * (W - L - Rr); }, py = function (y) { return Hh - B - (y - yr[0]) / (yr[1] - yr[0]) * (Hh - Tt - B); };
    var g = '';
    for (var x = xr[0]; x <= xr[1] + 1e-9; x += xr[2]) g += '<line class="gl" x1="' + px(x) + '" x2="' + px(x) + '" y1="' + Tt + '" y2="' + (Hh - B) + '"/><text x="' + px(x) + '" y="' + (Hh - B + 14) + '" text-anchor="middle">' + (o.xfmt ? o.xfmt(x) : +x.toFixed(2)) + '</text>';
    for (var y = yr[0]; y <= yr[1] + 1e-9; y += yr[2]) g += '<line class="gl" x1="' + L + '" x2="' + (W - Rr) + '" y1="' + py(y) + '" y2="' + py(y) + '"/><text x="' + (L - 5) + '" y="' + (py(y) + 4) + '" text-anchor="end">' + (o.yfmt ? o.yfmt(y) : +y.toFixed(2)) + '</text>';
    (o.hl || []).forEach(function (h) { g += '<line x1="' + L + '" x2="' + (W - Rr) + '" y1="' + py(h.y) + '" y2="' + py(h.y) + '" stroke="' + h.c + '" stroke-dasharray="5 4" stroke-width="1.4"/><text x="' + (W - Rr - 2) + '" y="' + (py(h.y) - 4) + '" text-anchor="end" style="fill:' + h.c + '">' + esc(h.n) + '</text>'; });
    var lines = series.map(function (s) { var d = s.pts.map(function (p, i) { return (i ? 'L' : 'M') + px(p[0]).toFixed(1) + ' ' + py(p[1]).toFixed(1); }).join(''); return '<path d="' + d + '" fill="none" stroke="' + s.c + '" stroke-width="' + (s.w || 2) + '" stroke-linejoin="round"/>'; }).join('');
    var mark = o.cursor != null ? '<line id="' + o.cid + '" x1="' + px(o.cursor) + '" x2="' + px(o.cursor) + '" y1="' + Tt + '" y2="' + (Hh - B) + '" stroke="#fff" stroke-width="1.5"/>' : '';
    return '<svg class="chart" viewBox="0 0 ' + W + ' ' + Hh + '" data-x0="' + xr[0] + '" data-x1="' + xr[1] + '">' + g + '<line class="ax" x1="' + L + '" x2="' + (W - Rr) + '" y1="' + (Hh - B) + '" y2="' + (Hh - B) + '"/><line class="ax" x1="' + L + '" x2="' + L + '" y1="' + Tt + '" y2="' + (Hh - B) + '"/>' + lines + mark +
      '<text x="' + ((L + W - Rr) / 2) + '" y="' + (Hh - 4) + '" text-anchor="middle">' + esc(o.xl) + '</text><text transform="translate(11 ' + ((Tt + Hh - B) / 2) + ') rotate(-90)" text-anchor="middle">' + esc(o.yl) + '</text></svg>' +
      (series.length > 1 ? '<div class="legend">' + series.map(function (s) { return '<span style="--c:' + s.c + '">' + esc(s.n) + '</span>'; }).join('') + '</div>' : '');
  }
  function levelChart(cursor) {
    var I = M.I, st = Math.max(1, Math.round(M.sim.length / 480));
    var pts = M.sim.filter(function (s, i) { return i % st === 0; });
    return chart([{ n: 'Liquid level', c: '#ffd27a', pts: pts.map(function (s) { return [s.B / 60, s.N * 100]; }) }, { n: 'Hot metal layer', c: '#ff7a1a', w: 1.5, pts: pts.map(function (s) { return [s.B / 60, s.K / I.H_tt * 100]; }) }],
      { xl: 'Hours after ' + clk(M.D.SimStart) + ' (last tap closed)', yl: 'Level, % of taphole → tuyere', y0: 0, xstep: 6, xfmt: function (x) { return x; }, hl: [{ y: I.Warn * 100, c: '#ffb547', n: 'Warning' }, { y: I.Crit * 100, c: '#ff5a4a', n: 'Critical' }], cursor: cursor, cid: 'lvCur' });
  }

  // ---------- dashboard ----------
  function renderDash() {
    var el = $('#p-dash');
    var h = '<div class="hero"><div><div class="eb">Blast furnace · hearth</div><h1>Hearth <span>liquid</span> prediction</h1><p>Hot metal and slag in the hearth, liquid level against tapholes and tuyeres, tap duration, first-slag time and liquid left after each tap. Calibrated from your own tap log.</p>' +
      '<div class="row2" style="margin-top:10px"><button class="btn pri sm" data-go="input">Inputs</button><button class="btn sm" data-go="taps">Tap log</button><button class="btn sm" data-go="v3d">3D hearth ›</button></div></div></div>';
    if (!M) { el.innerHTML = h + stateLine() + noData(); bindGo(el); return; }
    var I = M.I, D = M.D, R = M.res, DB = M.dash, ov = stOf(R.status), lv = LV;
    h += stateLine() + '<div class="card"><p class="sub" style="margin:0">Furnace <b>' + esc(I.name || '—') + '</b> · taphole flow factor <b>' + f(D.Cd, 3) + '</b> ' + (D.Cd_n >= 3 ? '(auto, from ' + D.Cd_n + ' taps)' : '(default – log ≥ 3 blow taps)') + ' · gap ' + f(I.Gap) + ' min · capacity: <b style="color:' + (D.Cap_check === 'OK' ? 'var(--ok)' : 'var(--watch)') + '">' + esc(D.Cap_check) + '</b></p></div>';
    // live
    h += '<div class="sec"><h2>Now: liquid since the last tap closed</h2><em>' + esc(clk(lv.last)) + ' · ' + esc(lv.lastEnd || '') + '</em></div>' +
      '<div class="card live"><div class="row2"><label class="gi" style="flex:1"><span>Current date-time</span><input type="datetime-local" id="lvNow" value="' + esc(dtl(lv.now)) + '"></label><label class="gi" style="flex:1"><span>Any taphole open now?</span><select id="lvOpen"><option value="0"' + (S.liveOpen ? '' : ' selected') + '>No</option><option value="1"' + (S.liveOpen ? ' selected' : '') + '>Yes</option></select></label></div>' +
      '<button class="btn sm" id="lvNowBtn" style="margin-top:8px">Use the time now</button></div>' +
      '<div class="kgrid">' + kc('Status', esc(lv.status.split(' – ')[0]), '', stOf(lv.status), esc(lv.status)) +
      kc('Liquid level above taphole', f(lv.level, 2), 'm', stOf(lv.status), pc(lv.pct) + ' of taphole → tuyere (' + f(I.H_tt, 2) + ' m)') +
      kc('Minutes to WARNING level', f(lv.toWarn), 'min', lv.toWarn < 15 ? 'WATCH' : '', 'If no taphole is opened; warning = ' + pc(I.Warn, 0)) +
      kc('Minutes to CRITICAL level', f(lv.toCrit), 'min', lv.toCrit < 15 ? 'ALARM' : '', 'Critical = ' + pc(I.Crit, 0)) +
      kc('Hot metal made since close', f(lv.hm, 0), 't', '', f(lv.mins) + ' min × ' + f(D.HM_tpm, 2) + ' t/min') +
      kc('Slag above taphole', f(lv.slagAbove, 0), 't', '', 'New ' + f(lv.sl, 0) + ' t + ' + f(D.M_res_t, 0) + ' t retained after blow') +
      kc('Total liquid in hearth', f(lv.total, 0), 't', '', 'Incl. ' + f(D.M_sump_t, 0) + ' t dead iron in the sump') + '</div>';
    // simulation summary
    h += '<div class="sec"><h2>Next 48 h (simulation)</h2><em>' + esc(R.status) + '</em></div><div class="kgrid">' +
      kc('Overall status', esc(R.status.split(' – ')[0]), '', ov, esc(R.status)) +
      kc('Maximum level', pc(R.maxPct), '', R.maxPct >= I.Crit ? 'ALARM' : R.maxPct >= I.Warn ? 'WATCH' : 'OK', f(R.maxLevel, 2) + ' m above taphole at ' + esc(hm(D.SimStart + R.tMax))) +
      kc('Level rise rate, all tapholes closed', f(R.rise, 1), 'mm/min', '', 'Liquid made ÷ (hearth area × porosity)') +
      kc('Taphole capacity ÷ production', f(D.Cap_ratio, 2), '', D.Cap_ratio < 1 ? 'ALARM' : D.Cap_ratio < 1.05 ? 'WATCH' : 'OK', 'One taphole drains ' + f(D.Q_cap_t, 2) + ' t/min vs ' + f(D.HM_tpm + D.SL_tpm, 2) + ' t/min made') +
      kc('Dead iron below taphole', f(R.sump, 0), 't', '', 'Never drains') + kc('Slag retained after blow', f(R.retained, 1), 't', '', esc(I.EndObs) + ' cast end: ' + f(D.H_res_slag, 2) + ' m layer') +
      kc('Liquid at tap close (avg)', f(R.closeTot, 0), 't', '', 'Incl. sump') + kc('Drainable liquid at tap opening (avg)', f(R.openDrain, 0), 't', '', 'Metal + slag above taphole') +
      kc('Minutes at HIGH or CRITICAL', f(R.highMin), 'min', R.highMin > 0 ? 'WATCH' : 'OK', 'Over 48 h') + kc('Taps closed by max duration', f(R.maxDurClosed), '', R.maxDurClosed ? 'WATCH' : 'OK', 'Not drained (hearth not empty)') + '</div>' +
      '<div class="card"><h3>Liquid level, next 48 h</h3>' + levelChart() + '<button class="btn sm" data-go="sim" style="margin-top:8px">Predicted taps ›</button></div>';
    // calibration
    var rowsC = [['Average tap duration', 'dur', 'min', 0], ['Average gap between taps', 'gap', 'min', 0], ['Average HM per tap', 'hm', 't', 0], ['Average slag per tap', 'slag', 't', 0], ['Average tap rate HM + slag', 'rate', 't/min', 2], ['Average first slag after opening', 'first', 'min', 0], ['Taps per day', 'perDay', '', 1], ['Casting ratio (time a taphole is open)', 'castRatio', '%', 1]];
    h += '<div class="card"><h3>Predicted vs actual (calibration check)</h3><p class="sub">Predicted from the simulation; actual from your tap log. More than ±15 % (red): log more taps, change "How does a typical cast end?" or the deadman porosity.</p><div class="scroll"><table class="tbl"><tr><th>Indicator</th><th>Predicted</th><th>Actual</th><th>Dev.</th></tr>' +
      rowsC.map(function (r) { var v = DB[r[1]], pct = r[2] === '%', d = v[2], bad = d !== '' && Math.abs(d) > 0.15; return '<tr><td>' + r[0] + (pct || !r[2] ? '' : ' <small>' + r[2] + '</small>') + '</td><td class="n">' + (pct ? pc(v[0]) : f(v[0], r[3])) + '</td><td class="n">' + (pct ? pc(v[1]) : f(v[1], r[3])) + '</td><td class="n" style="color:' + (bad ? 'var(--alarm)' : 'var(--ok)') + '">' + (d === '' ? '—' : (d > 0 ? '+' : '') + f(d * 100, 1) + ' %') + '</td></tr>'; }).join('') + '</table></div></div>';
    h += '<div class="row2"><button class="btn" id="dExp">' + ic('<path d="M12 3v12M7 10l5 5 5-5M4 19h16"/>') + 'Export results (.xlsx)</button><a class="btn" href="inner-zone.html">Cohesive &amp; melting zone ›</a></div>' +
      '<div class="card"><h3>How it works</h3><ul class="how"><li><b>Start</b> = the last tap close in your tap log. If it ended in Blow, only the retained slag layer is left above the taphole; if it was closed early, the HM balance of that cast is added.</li>' +
      '<li><b>Level</b> = liquid volume above the taphole ÷ (hearth area × deadman porosity). The sump below the taphole always holds ' + f(D.M_sump_t, 0) + ' t of iron.</li>' +
      '<li><b>Tap flow</b> Q = Cd · A · √(2ΔP/ρ), ΔP = blast pressure + liquid head. The flow factor Cd is back-calculated from your taps that ended in Blow (≥ 20 min).</li>' +
      '<li><b>Tapping</b>: a taphole opens after the gap (or at once if the level passes the force-open limit), metal flows first, slag follows at first slag, and the tap closes on blow or at the maximum duration. Tapholes rotate.</li></ul></div>' +
      '<p class="foot">Hearth liquid prediction · BF Model 5.9</p>';
    el.innerHTML = h; bindGo(el); $('#dExp').onclick = exportReport;
    $('#lvNow').onchange = function () { S.liveNow = this.value; save(); compute(); renderDash(); };
    $('#lvOpen').onchange = function () { S.liveOpen = this.value === '1'; save(); compute(); renderDash(); };
    $('#lvNowBtn').onclick = function () { S.liveNow = ''; save(); compute(); renderDash(); };
  }

  function renderGuide() { $('#p-guide').innerHTML = (window.IMGuide ? IMGuide.hl : '') + '<div class="row2"><a class="btn" href="know-inputs.html#bf">Know your inputs ›</a><a class="btn" href="inner-zone.html">Cohesive &amp; melting zone ›</a></div>'; var d = $('#p-guide details'); if (d) d.open = true; }

  // ---------- simulation tab ----------
  function renderSim() {
    var el = $('#p-sim'); if (!M) { el.innerHTML = stateLine() + noData(); bindGo(el); return; }
    var I = M.I, D = M.D, T = M.taps.filter(function (t) { return t.C != null; });
    var tb = '<div class="scroll"><table class="tbl tt"><tr><th>Tap</th><th>TH</th><th>Open</th><th>Close</th><th>Dur.<br>min</th><th>Gap<br>min</th><th>HM<br>t</th><th>Slag<br>t</th><th>First slag<br>min</th><th>Level at open</th><th>Peak level</th><th>Left at close<br>t</th><th>Close reason</th></tr>' +
      T.map(function (t) { return '<tr class="' + (t.Q === 'Horizon end' ? 'cast' : '') + '"><td class="n">' + t.a + '</td><td class="n">' + t.B + '</td><td>' + hm(D.SimStart + t.C) + '</td><td>' + hm(D.SimStart + t.E) + '</td><td class="n">' + f(t.G) + '</td><td class="n">' + f(t.H) + '</td><td class="n">' + f(t.I, 0) + '</td><td class="n">' + f(t.J, 0) + '</td><td class="n">' + f(t.P) + '</td><td class="n">' + pc(t.L, 0) + '</td><td class="n">' + pc(t.S, 0) + '</td><td class="n">' + f(t.O, 0) + '</td><td>' + esc(t.Q) + '</td></tr>'; }).join('') + '</table></div>';
    var st = Math.max(1, Math.round(M.sim.length / 480)), pts = M.sim.filter(function (s, i) { return i % st === 0; });
    var inv = chart([{ n: 'Total HM incl. sump', c: '#ff7a1a', pts: pts.map(function (s) { return [s.B / 60, s.AB]; }) }, { n: 'Slag in hearth', c: '#ffd27a', pts: pts.map(function (s) { return [s.B / 60, s.AC]; }) }], { xl: 'Hours', yl: 't', xstep: 6, h: 220 });
    var rate = chart([{ n: 'Tap rate HM + slag', c: '#19b3b1', pts: pts.map(function (s) { return [s.B / 60, s.AF]; }) }], { xl: 'Hours', yl: 't/min', xstep: 6, h: 200, y0: 0 });
    el.innerHTML = stateLine() + '<div class="card"><h3>Liquid level</h3>' + levelChart() + '</div><div class="card"><h3>Predicted taps</h3><p class="sub">Times are clock times from ' + esc(clk(D.SimStart)) + '. Shaded = still open when the 48 h horizon ends.</p>' + tb + '</div>' +
      '<div class="card"><h3>Liquid in the hearth</h3>' + inv + '</div><div class="card"><h3>Tap stream</h3>' + rate + '</div>';
  }

  // ---------- tap log ----------
  var editIdx = -1;
  function renderTaps() {
    var el = $('#p-taps'), T = taps(), L = M ? M.log : [];
    var row = function (r, i) { var c = L[i] || {}; return '<tr><td class="n">' + (i + 1) + '</td><td class="n">' + esc(r.th) + '</td><td>' + esc(clk(r.open)) + '</td><td>' + esc(hm(r.close)) + '</td><td class="n">' + f(c.N) + '</td><td class="n">' + f(r.hm, 0) + '</td><td class="n">' + f(c.T, 0) + '</td><td>' + esc(r.end || '') + '</td><td class="n">' + f(c.AC, 3) + '</td><td>' + (c.AD === 1 ? '✓' : '') + '</td><td><button class="lk" data-e="' + i + '">Edit</button></td></tr>'; };
    var e = editIdx >= 0 ? T[editIdx] : {}, fld = function (k, l, v, type, extra) { return '<label class="gi"><span>' + l + '</span><input data-t="' + k + '" type="' + (type || 'number') + '" ' + (extra || 'inputmode="decimal"') + ' value="' + esc(v == null ? '' : v) + '"></label>'; };
    el.innerHTML = stateLine() + '<div class="card"><h3>' + (editIdx >= 0 ? 'Edit tap ' + (editIdx + 1) : 'Add a tap') + '</h3><p class="sub">One row per tap from the cast-house log. HM tapped = total of all torpedo ladles of the tap. Optional fields can stay blank.</p><div class="gis">' +
      fld('th', 'Taphole no.', e.th, 'number', 'inputmode="numeric"') + fld('open', 'Open date-time', dtl(e.open), 'datetime-local', '') + fld('close', 'Close date-time', dtl(e.close), 'datetime-local', '') + fld('hm', 'HM tapped (t)', e.hm) +
      '<label class="gi"><span>End condition</span><select data-t="end">' + ['Blow', 'Planned close', 'Abnormal'].map(function (o) { return '<option' + (e.end === o ? ' selected' : '') + '>' + o + '</option>'; }).join('') + '</select></label>' +
      fld('slag', 'Slag tapped (t) · optional', e.slag) + fld('first', 'First slag after open (min) · optional', e.first) + fld('pb', 'Blast pressure avg (bar g) · optional', e.pb) + fld('bit', 'Drill bit (mm) · optional', e.bit) + fld('len', 'Taphole length (m) · optional', e.len) + fld('prod', 'Production (tHM/d) · optional', e.prod) +
      '<label class="gi"><span>Remarks</span><input data-t="rem" type="text" value="' + esc(e.rem || '') + '"></label></div><div class="row2" style="margin-top:10px"><button class="btn pri" id="tSave">' + (editIdx >= 0 ? 'Save changes' : 'Add tap') + '</button>' + (editIdx >= 0 ? '<button class="btn" id="tDel">Delete</button><button class="btn" id="tCan">Cancel</button>' : '') + '</div></div>' +
      '<div class="card"><h3>Tap log' + (S.taps ? '' : ' · sample data') + '</h3><p class="sub">Flow factor Cd is calibrated only from taps that ended in Blow and lasted ≥ 20 min (✓). The simulation starts at the last close.</p><div class="scroll"><table class="tbl tt"><tr><th>#</th><th>TH</th><th>Open</th><th>Close</th><th>Dur.</th><th>HM t</th><th>Slag t</th><th>End</th><th>Cd</th><th>Calib.</th><th></th></tr>' + T.map(row).join('') + '</table></div>' +
      '<div class="row2" style="margin-top:10px">' + (S.taps ? '<button class="btn sm" id="tSample">↺ Back to sample log</button>' : '') + '<button class="btn sm" id="tClear">Start an empty log</button><button class="btn sm" data-go="input">Upload Excel with Tap_Log ›</button></div></div>';
    bindGo(el);
    $$('#p-taps [data-e]').forEach(function (b) { b.onclick = function () { editIdx = +b.getAttribute('data-e'); renderTaps(); window.scrollTo(0, 0); }; });
    $('#tSave').onclick = function () {
      var o = {}; $$('#p-taps [data-t]').forEach(function (i) { o[i.getAttribute('data-t')] = i.value.trim(); });
      var r = { th: +o.th || 1, open: parseDT(o.open), close: parseDT(o.close), hm: o.hm === '' ? null : +o.hm, slag: o.slag === '' ? null : +o.slag, first: o.first === '' ? null : +o.first, end: o.end, pb: o.pb === '' ? null : +o.pb, bit: o.bit === '' ? null : +o.bit, len: o.len === '' ? null : +o.len, prod: o.prod === '' ? null : +o.prod, rem: o.rem };
      if (!num(r.open) || !num(r.close) || r.close <= r.open) return toast('Enter open and close time (close after open)');
      if (!num(r.hm) || r.hm <= 0) return toast('Enter HM tapped');
      var T2 = taps(); if (editIdx >= 0) T2[editIdx] = r; else T2.push(r);
      S.taps = T2; editIdx = -1; save(); compute(); renderTaps(); toast('Tap saved');
    };
    var d = $('#tDel'); if (d) d.onclick = function () { var T2 = taps(); T2.splice(editIdx, 1); S.taps = T2; editIdx = -1; save(); compute(); renderTaps(); };
    var c = $('#tCan'); if (c) c.onclick = function () { editIdx = -1; renderTaps(); };
    var sm = $('#tSample'); if (sm) sm.onclick = function () { S.taps = null; save(); compute(); renderTaps(); };
    $('#tClear').onclick = function () { S.taps = []; save(); compute(); renderTaps(); toast('Empty log – the simulation starts today 00:00 until you add taps'); };
  }

  // ---------- 3D ----------
  var V = null, VS = { drops: true, labels: true, coke: true, play: true }, tNow = 0, timer = 0;
  function stopPlay() { clearInterval(timer); timer = 0; }
  function renderV3d() {
    var el = $('#p-v3d'); stopPlay();
    if (!M) { el.innerHTML = stateLine() + noData(); bindGo(el); return; }
    if (!window.THREE || !window.HL3D) { el.innerHTML = '<div class="card"><p class="sub">3D view is not available on this device.</p></div>'; return; }
    var I = M.I, D = M.D, last = M.sim.length - 1; tNow = Math.min(tNow, last);
    var tg = function (k, l, c) { return '<button class="' + (VS[k] ? 'on' : '') + '" data-t="' + k + '" style="--c:' + c + '"><i></i>' + l + '</button>'; };
    el.innerHTML = stateLine() + '<div class="v3" id="v3"><div class="ov" id="ov"></div><div class="hint">Drag to turn · pinch to zoom</div></div>' +
      '<div class="tg">' + tg('drops', 'Drops', '#ff7a1a') + tg('coke', 'Coke to raceways', '#8a8f98') + tg('labels', 'Labels', '#9fe6e3') + tg('play', VS.play ? 'Pause' : 'Play', '#19b3b1') + '<button id="nxTap" style="--c:#ffb547"><i></i>Next tap ›</button></div>' +
      '<div class="card lvl"><h3>48 h from the last tap close</h3><input type="range" id="tS" min="0" max="' + last + '" step="1" value="' + tNow + '" aria-label="Simulation step"><div class="rd" id="tR"></div>' + levelChart(M.sim[tNow].B / 60) + '</div>' +
      '<div class="card"><h3>What you see</h3><div class="lg3"><span style="--c:#ff8a1a">Hot metal</span><span style="--c:#ffe39a">Slag</span><span style="--c:#2c3038">Deadman coke bed</span><span style="--c:#fff1b8">Raceways</span><span style="--c:#19b3b1">Taphole level</span><span style="--c:#ffb547">Warning level</span><span style="--c:#ff5a4a">Critical level</span></div>' +
      '<p class="sub" style="margin-top:10px">The hearth is cut in half and drawn to your sizes: diameter ' + f(I.D_hearth, 1) + ' m, sump ' + f(I.H_sump, 2) + ' m, taphole → tuyere ' + f(I.H_tt, 2) + ' m, ' + I.N_TH + ' taphole' + (I.N_TH > 1 ? 's' : '') + '. Metal and slag fill the gaps between the coke (porosity ' + f(I.eps, 2) + '); the sump below the taphole stays full of iron. The stream runs from the taphole that is open in the simulation. Coke lumps are drawn larger than real.</p></div>';
    var rows = M.sim.map(function (s) { var yTap = -I.H_tt; return { t: s.B, ym: yTap + s.K, ys: yTap + s.K + s.L, yb: yTap - I.H_sump, free: 0, Qm: s.X / I.dt, Qs: s.Y / I.dt, th: s.D > 0 ? s.F : 0, open: s.D }; });
    try { V = HL3D.mount($('#v3'), { I: I, rows: rows }); } catch (e) { $('#v3').innerHTML = '<p class="sub" style="padding:16px">3D view could not start: ' + esc(e.message) + '</p>'; V = null; return; }
    ['drops', 'labels', 'coke'].forEach(function (k) { V.toggle(k, VS[k]); }); V.play(VS.play);
    var svg = $('#p-v3d svg.chart'), x0 = +svg.getAttribute('data-x0'), x1 = +svg.getAttribute('data-x1');
    function show() {
      var k = Math.round(+$('#tS').value); tNow = k; var s = M.sim[k], r = rows[k]; V.setRow(r);
      var ph = s.D > 0 ? 'TH' + s.F + ' open · ' + (s.P === 'Metal' ? 'metal only' : 'metal + slag') : 'All tapholes closed';
      $('#ov').innerHTML = '<span>' + esc(clk(D.SimStart + s.B)) + '</span><span>' + ph + '</span><span>Level ' + pc(s.N, 0) + ' · ' + f(s.M, 2) + ' m</span><span class="' + (s.AE !== 'NORMAL' ? 'bad' : '') + '">' + s.AE + '</span>';
      $('#tR').innerHTML = '<span>HM above taphole <b>' + f(s.V * I.rho_HM / 1000, 0) + ' t</b></span><span>Slag <b>' + f(s.AC, 0) + ' t</b></span><span>Total in hearth <b>' + f(s.AD, 0) + ' t</b></span>' + (s.D > 0 ? '<span>Tap <b>' + f(s.AF, 2) + ' t/min</b></span>' : '') + (s.AA ? '<span><b>' + esc(s.AA) + '</b></span>' : '');
      var ln = $('#lvCur'); if (ln) { var X0 = 46 + (s.B / 60 - x0) / (x1 - x0) * (360 - 46 - 12); ln.setAttribute('x1', X0); ln.setAttribute('x2', X0); }
    }
    $('#tS').oninput = show; show();
    timer = setInterval(function () { if (!VS.play || cur !== 'v3d') return; var sl = $('#tS'); if (!sl) return; sl.value = (+sl.value + Math.max(1, Math.round(2 / I.dt))) % (last + 1); show(); }, 120);
    $('#nxTap').onclick = function () { var sl = $('#tS'), k = +sl.value, j = M.sim.findIndex(function (s, i) { return i > k + 1 && s.D > 0 && M.sim[i - 1].D === 0; }); if (j < 0) j = M.sim.findIndex(function (s, i) { return i > 0 && s.D > 0 && M.sim[i - 1].D === 0; }); if (j >= 0) { sl.value = Math.max(0, j - 3); show(); } };
    $$('#p-v3d .tg button[data-t]').forEach(function (b) { b.onclick = function () {
      var k = b.getAttribute('data-t'); VS[k] = !VS[k]; b.classList.toggle('on', VS[k]);
      if (k === 'play') { V.play(VS.play); b.lastChild.textContent = VS.play ? 'Pause' : 'Play'; } else V.toggle(k, VS[k]);
    }; });
  }

  // ---------- inputs ----------
  function renderInput() {
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
  function shown(d, v) { if (v == null || v === '') return ''; return d.pct ? +(v * 100).toFixed(2) : v; }
  function linkedBox() {
    var ks = Object.keys(SH); if (!ks.length) return '';
    return '<details class="fs" open><summary>From other BF Model pages<span>' + ks.length + ' inputs, not asked again</span></summary><div class="fb"><p class="sub" style="margin:8px 0">Each value is entered once in the BF Model. To change these, change them on the page named.</p><div class="scroll"><table class="tbl">' +
      ks.map(function (k) { var d = BYK[k]; return '<tr><td>' + esc(d.l) + '<br><small>' + esc(SH[k].from) + '</small></td><td class="n">' + f(SH[k].v, Math.abs(SH[k].v) < 100 ? 2 : 0) + ' <small>' + esc(d.u) + '</small></td></tr>'; }).join('') + '</table></div></div></details>';
  }
  function step1() {
    var m = S.inputMode;
    var h = '<div class="card"><h3>Hearth inputs</h3><p class="sub">The same inputs as the Inputs sheet of BF_Hearth_Liquid_Module_1.xlsx. Inputs already on other BF Model pages are taken from there. Leave blank what you do not know; the next step lists it.</p>' +
      '<div class="opts"><button class="opt' + (m === 'upload' ? ' on' : '') + '" data-m="upload"><b>Upload Excel</b><small>Inputs + Tap_Log sheets, as in the module workbook</small></button><button class="opt' + (m === 'manual' ? ' on' : '') + '" data-m="manual"><b>Enter manually</b><small>Type the inputs; add taps on Tap log</small></button></div>';
    if (m === 'upload') h += '<button class="drop" id="drop"><b>Tap to choose the Excel file</b><small>.xlsx · the module workbook or the input template, filled</small></button><p class="sub" style="margin:8px 0 0">' + (S.raw && S.fileName ? 'Loaded: <b>' + esc(S.fileName) + '</b> · ' + countUser(S.raw) + ' values · ' + (S.rawTaps ? S.rawTaps.length + ' taps · ' : '') + S.items.length + ' missing' : 'No file loaded yet.') + '</p>';
    h += '<div class="links"><button class="lk" data-dl="ref">⤓ Download ' + esc(REFX) + ' <span class="pill ref">reference</span></button><button class="lk" data-dl="blank">⤓ Download blank ' + esc(TPL) + '</button><button class="lk" id="useRef">↺ Use reference data for everything</button></div></div>';
    h += linkedBox();
    if (m === 'manual') {
      var groups = {}, order = []; DEFS.forEach(function (d) { if (SH[d.k]) return; if (!groups[d.s]) { groups[d.s] = []; order.push(d.s); } groups[d.s].push(d); });
      order.forEach(function (g, i) {
        h += '<details class="fs"' + (i < 3 ? ' open' : '') + '><summary>' + esc(g) + '<span>' + groups[g].filter(function (d) { return !blank(S.form[d.k]); }).length + ' / ' + groups[g].length + ' filled</span></summary><div class="fb">' +
          groups[g].map(function (d) {
            var v = S.form[d.k], ph = d.pct ? +(d.ref * 100).toFixed(1) : d.ref, lab = '<label>' + esc(d.l) + (d.opt ? ' <em>optional</em>' : '') + '<small>' + esc(d.pct ? '% of taphole→tuyere' : d.u) + (d.ty ? ' · typical ' + esc(d.ty) : '') + (d.w ? ' · ' + esc(d.w) : '') + '</small></label>';
            if (d.list) return '<div class="f">' + lab + '<select data-k="' + d.k + '"><option value="">—</option>' + d.list.map(function (o) { return '<option' + (String(v) === String(o) ? ' selected' : '') + '>' + o + '</option>'; }).join('') + '</select></div>';
            return '<div class="f">' + lab + '<input ' + (d.text ? 'type="text"' : 'inputmode="decimal"') + ' placeholder="' + esc(ph) + '" data-k="' + d.k + '" value="' + esc(v == null ? '' : v) + '"></div>';
          }).join('') + '</div></details>';
      });
      h += '<div class="row2"><button class="btn" id="fillRef">↺ Fill blanks with reference</button><button class="btn pri" id="toRev">Review inputs ›</button></div>';
    }
    return h;
  }
  function readForm() { $$('#p-input [data-k]').forEach(function (el) { S.form[el.getAttribute('data-k')] = el.value.trim(); }); save(); }
  function parseV(d, v) {
    if (blank(v)) return null;
    if (d.text) return String(v);
    if (d.list) { var hit = d.list.filter(function (o) { return String(o).toLowerCase() === String(v).trim().toLowerCase(); })[0]; return hit == null ? null : hit; }
    var n = typeof v === 'number' ? v : Number(String(v).replace(/,/g, '').replace('%', '')); if (!isFinite(n) || n < 0) return null;
    return n;
  }
  function detect(r) { return DEFS.filter(function (d) { return !SH[d.k] && r[d.k] == null && !d.text; }).map(function (d) { return { k: d.k, l: d.l, u: d.u, ref: d.pct ? +(d.ref * 100).toFixed(1) + ' %' : d.ref, opt: !!d.opt, choice: 'take' }; }); }
  function countUser(r) { return DEFS.filter(function (d) { return r[d.k] != null; }).length; }
  function toReview() {
    readForm(); var r = {};
    DEFS.forEach(function (d) { var v = parseV(d, S.form[d.k]); if (v != null && d.pct) v = v / 100; r[d.k] = v; });
    S.raw = r; S.rawTaps = null; S.fileName = ''; S.inputMode = 'manual'; S.items = detect(r); S.step = 2; save(); renderInput(); window.scrollTo(0, 0);
  }
  function bind1() {
    $$('#p-input [data-m]').forEach(function (b) { b.onclick = function () { if (S.inputMode === 'manual') readForm(); S.inputMode = b.getAttribute('data-m'); save(); renderInput(); }; });
    var d = $('#drop'); if (d) d.onclick = function () { var fl = $('#file'); fl.value = ''; fl.click(); };
    $$('#p-input [data-dl]').forEach(function (b) { b.onclick = function () { if (b.getAttribute('data-dl') === 'ref') saveAsset('www/' + REFX, REFX); else template(); }; });
    $('#useRef').onclick = function () { S.mode = 'reference'; S.final = refFinal(); S.src = {}; S.raw = null; S.items = []; S.fileName = ''; S.taps = null; save(); toast('Using reference data'); go('dash'); };
    var fr = $('#fillRef'); if (fr) fr.onclick = function () { readForm(); var n = 0; DEFS.forEach(function (x) { if (!SH[x.k] && blank(S.form[x.k])) { S.form[x.k] = x.pct ? +(x.ref * 100).toFixed(1) : x.ref; n++; } }); save(); renderInput(); toast(n + ' blanks filled with reference values'); };
    var tr = $('#toRev'); if (tr) tr.onclick = toReview;
  }
  function step2() {
    var it = S.items, t = it.filter(function (x) { return x.choice === 'take'; }).length;
    var h = '<div class="card"><h3>Review &amp; fill missing</h3><p class="sub">' + (S.fileName ? 'From <b>' + esc(S.fileName) + '</b>' + (S.rawTaps ? ' · ' + S.rawTaps.length + ' taps read from Tap_Log' : '') + '. ' : 'From the manual entry. ') + (it.length ? 'These inputs were not given. Take the reference value, or leave it out (optional inputs then use their default; required inputs stay empty and the module will ask again).' : 'All inputs are given.') + '</p>' +
      '<div class="rvsum"><div><b style="color:var(--ok)">' + countUser(S.raw) + '</b><small>your values</small></div><div><b style="color:#ff8a7a">' + t + '</b><small>take reference</small></div><div><b>' + (it.length - t) + '</b><small>don\'t take</small></div></div>' +
      (it.length ? '<div class="row2"><button class="btn sm" id="allT" style="color:#ff8a7a">Take all reference values</button><button class="btn sm" id="allS">Don\'t take any</button></div>' : '') + '</div>';
    if (it.length) h += '<details class="fs" open><summary>Missing<span>' + it.length + '</span></summary><div class="fb">' + it.map(function (x, i) {
      return '<div class="rv"><div class="lb">' + esc(x.l) + (x.opt ? ' <em>optional</em>' : ' <em style="color:#ff8a7a">required</em>') + '<small>Reference: <b>' + esc(x.ref) + '</b> ' + esc(x.u.indexOf('%') >= 0 ? '' : x.u) + '</small></div><div class="seg"><button class="take' + (x.choice === 'take' ? ' on' : '') + '" data-i="' + i + '" data-c="take">Take reference</button><button class="skip' + (x.choice === 'skip' ? ' on' : '') + '" data-i="' + i + '" data-c="skip">Don\'t take</button></div></div>';
    }).join('') + '</div></details>';
    return h + '<div class="row2"><button class="btn" id="bk1">‹ Back to inputs</button><button class="btn pri" id="calc">▶ Calculate</button></div>';
  }
  function bind2() {
    $$('#p-input .seg button').forEach(function (b) { b.onclick = function () { S.items[+b.getAttribute('data-i')].choice = b.getAttribute('data-c'); save(); var y = window.scrollY; renderInput(); window.scrollTo(0, y); }; });
    var a = $('#allT'); if (a) a.onclick = function () { S.items.forEach(function (x) { x.choice = 'take'; }); save(); renderInput(); };
    var b2 = $('#allS'); if (b2) b2.onclick = function () { S.items.forEach(function (x) { x.choice = 'skip'; }); save(); renderInput(); };
    $('#bk1').onclick = function () { S.step = 1; save(); renderInput(); };
    $('#calc').onclick = calc;
  }
  function calc() {
    var r = S.raw, fin = {}, src = {};
    DEFS.forEach(function (d) { fin[d.k] = r[d.k]; if (r[d.k] != null) src[d.k] = 'user'; });
    S.items.forEach(function (x) { var d = BYK[x.k]; if (x.choice === 'take') { fin[x.k] = d.ref; src[x.k] = 'ref'; } else { fin[x.k] = null; src[x.k] = 'skip'; } });
    if (blank(fin.name)) fin.name = r.name || BYK.name.ref;
    S.final = fin; S.src = src; S.mode = 'user'; S.step = 1; if (S.rawTaps) S.taps = S.rawTaps; save(); compute();
    toast(need.length ? 'Still needed: ' + need.map(function (d) { return d.l; }).join(', ') : 'Calculated'); go('dash');
  }

  // ---------- Excel in / out ----------
  function b64(u8) { var s = '', ch = 0x8000; for (var i = 0; i < u8.length; i += ch) s += String.fromCharCode.apply(null, u8.subarray(i, i + ch)); return btoa(s); }
  function handoff(job) {
    try { localStorage.setItem('im.save', JSON.stringify(job)); localStorage.setItem('im.route', JSON.stringify({ p: 'www/iz-save.html', t: Date.now() })); } catch (e) { toast('File too large to hand over: ' + e.message); return; }
    location.href = window.IM_SINTER_URL;
  }
  function saveBytes(name, u8, mime) {
    if (!(window.AndroidBridge && AndroidBridge.saveFile) && window.Android && window.IM_SINTER_URL) return handoff({ name: name, mime: mime, b64: b64(u8), t: Date.now() });
    if (window.AndroidBridge && AndroidBridge.saveFile) { var r = AndroidBridge.saveFile(name, b64(u8), mime); toast(/^ERROR/.test(r || '') ? r : 'Saved to Downloads: ' + name); return; }
    var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([u8], { type: mime })); a.download = name; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500); toast('Downloaded ' + name);
  }
  function saveAsset(path, name) {
    if (location.protocol === 'file:') { var l0 = document.createElement('a'); l0.href = path.replace(/^www\//, ''); l0.download = name; document.body.appendChild(l0); l0.click(); setTimeout(function () { l0.remove(); }, 500); return; }
        if (!(window.AndroidBridge && AndroidBridge.saveFile) && window.Android && window.IM_SINTER_URL) return handoff({ asset: path, name: name, mime: XMIME, t: Date.now() });
    var x = new XMLHttpRequest(); x.open('GET', path.replace(/^www\//, ''), true); x.responseType = 'arraybuffer';
    x.onload = function () { if (x.response) saveBytes(name, new Uint8Array(x.response), XMIME); else toast('Could not open ' + name); }; x.onerror = function () { toast('Could not open ' + name); }; x.send();
  }
  function addSheet(wb, nm, aoa, w) { var ws = XLSX.utils.aoa_to_sheet(aoa); if (w) ws['!cols'] = w.map(function (x) { return { wch: x }; }); XLSX.utils.book_append_sheet(wb, ws, nm); return ws; }
  var LOGHEAD = ['Tap no.', 'Taphole no.', 'Open date-time', 'Close date-time', 'HM tapped (t) [weighbridge]', 'Slag tapped (t) [optional]', 'First slag after open (min) [optional]', 'End condition', 'Blast pressure avg (bar g) [optional]', 'Drill bit dia (mm) [optional]', 'Taphole length (m) [optional]', 'Production rate (tHM/d) [optional]', 'Remarks'];
  function template() {
    var wb = XLSX.utils.book_new(), aoa = [];
    for (var r = 0; r < 44; r++) aoa.push(['', '', '', '', '', '', '']);
    aoa[0][1] = 'Inputs – Hearth Liquid Module'; aoa[1][1] = 'Type values in column C only. Leave blank if not known. Inputs held on other BF Model pages are taken from there.';
    aoa[3] = ['', 'Parameter', 'Value', 'Unit', 'Typical / default', 'Where to get it', 'Status'];
    DEFS.forEach(function (d) { var row = +d.c.slice(1) - 1; aoa[row] = ['', d.l, '', d.pct ? '% of tt (0.55 = 55 %)' : d.u, d.pct ? d.ref : d.ref, d.w || '', d.opt ? 'Optional' : 'Mandatory']; });
    addSheet(wb, 'Inputs', aoa, [2, 50, 12, 18, 18, 60, 11]);
    var log = [['Tap_Log – actual tap records'], ['One row per tap from row 6. Dates as Excel date-time. End condition: Blow / Planned close / Abnormal.'], [], [], LOGHEAD];
    addSheet(wb, 'Tap_Log', log, [8, 10, 18, 18, 14, 12, 14, 14, 12, 12, 12, 14, 20]);
    saveBytes(TPL, new Uint8Array(XLSX.write(wb, { type: 'array', bookType: 'xlsx' })), XMIME);
  }
  function readXlsx(u8, name) {
    var wb = XLSX.read(u8, { type: 'array' }), wi = wb.Sheets.Inputs, r = {}, hit = 0;
    if (!wi) throw new Error('No "Inputs" sheet. Use ' + REFX + ' or ' + TPL + ' from this page.');
    var cv = function (ws, addr) { var c = ws[addr]; return c ? (c.v === undefined ? null : c.v) : null; };
    var labs = []; for (var q = 1; q <= 120; q++) labs.push(String(cv(wi, 'B' + q) || '').trim().toLowerCase());
    DEFS.forEach(function (d) {
      r[d.k] = null; var row = +d.c.slice(1), want = d.l.toLowerCase().replace(/ —.*/, '').slice(0, 14), lab = labs[row - 1];
      if (lab && lab.indexOf(want.slice(0, 8)) < 0 && !/option/.test(lab)) { var j = labs.findIndex(function (x) { return x.indexOf(want) === 0; }); if (j >= 0) row = j + 1; }
      var v = parseV(d, cv(wi, 'C' + row)); if (v != null) { hit++; r[d.k] = v; }
    });
    var tl = wb.Sheets.Tap_Log, T = null;
    if (tl) {
      T = []; var n = function (v) { return v === null || v === '' || !isFinite(+v) ? null : +v; };
      for (var rr = 6; rr <= 400; rr++) {
        var o = serialToMin(cv(tl, 'C' + rr)), c = serialToMin(cv(tl, 'D' + rr)); if (!num(o) || !num(c)) continue;
        var en = cv(tl, 'H' + rr), rm = cv(tl, 'M' + rr);
        T.push({ th: n(cv(tl, 'B' + rr)) || 1, open: o, close: c, hm: n(cv(tl, 'E' + rr)), slag: n(cv(tl, 'F' + rr)), first: n(cv(tl, 'G' + rr)), end: en ? String(en).trim() : 'Blow', pb: n(cv(tl, 'I' + rr)), bit: n(cv(tl, 'J' + rr)), len: n(cv(tl, 'K' + rr)), prod: n(cv(tl, 'L' + rr)), rem: rm ? String(rm) : '' });
      }
    }
    if (!hit && !(T && T.length)) throw new Error('No inputs or taps found in ' + name + '.');
    S.raw = r; S.rawTaps = T && T.length ? T : null; S.fileName = name; S.inputMode = 'upload'; S.items = detect(r); S.step = 2; save();
    toast('Read ' + countUser(r) + ' values' + (S.rawTaps ? ' and ' + S.rawTaps.length + ' taps' : '') + ' from ' + name);
  }
  $('#file').addEventListener('change', function () { var fl = this.files && this.files[0]; if (!fl) return; var fr = new FileReader(); fr.onload = function () { try { readXlsx(new Uint8Array(fr.result), fl.name); renderInput(); } catch (e) { toast(e.message || 'Could not read the file'); } }; fr.readAsArrayBuffer(fl); });
  function exportReport() {
    compute(); if (!M) return toast('Inputs missing'); var wb = XLSX.utils.book_new(), I = M.I, D = M.D, R = M.res, DB = M.dash, lv = LV;
    addSheet(wb, 'Dashboard', [['HEARTH LIQUID PREDICTION – ' + (I.name || '')], ['BF Model · Iron Making 5.9 · from BF_Hearth_Liquid_Module_1.xlsx'], ['Taphole flow factor', fp(D.Cd, 3), D.Cd_n >= 3 ? 'auto, from ' + D.Cd_n + ' taps' : 'default'], ['Capacity check', D.Cap_check, fp(D.Cap_ratio, 3)], [],
      ['Predicted vs actual', 'Predicted', 'Actual', 'Deviation'], ['Average tap duration (min)'].concat(DB.dur.map(function (x) { return fp(x); })), ['Average gap between taps (min)'].concat(DB.gap.map(function (x) { return fp(x); })), ['Average HM per tap (t)'].concat(DB.hm.map(function (x) { return fp(x); })),
      ['Average slag per tap (t)'].concat(DB.slag.map(function (x) { return fp(x); })), ['Average tap rate (t/min)'].concat(DB.rate.map(function (x) { return fp(x); })), ['Average first slag (min)'].concat(DB.first.map(function (x) { return fp(x); })), ['Taps per day'].concat(DB.perDay.map(function (x) { return fp(x); })), ['Casting ratio'].concat(DB.castRatio.map(function (x) { return fp(x); })), [],
      ['48 h simulation', 'Value'], ['Dead iron below taphole (t)', fp(R.sump, 1)], ['Retained slag after blow (t)', fp(R.retained, 1)], ['Level rise rate, all closed (mm/min)', fp(R.rise, 2)], ['Maximum level above taphole (m)', fp(R.maxLevel, 3)], ['Maximum level % of tt', fp(R.maxPct, 4)], ['Time of maximum level', clk(D.SimStart + R.tMax)],
      ['Average liquid at tap close (t)', fp(R.closeTot, 1)], ['Average drainable liquid at opening (t)', fp(R.openDrain, 1)], ['Minutes at HIGH or CRITICAL', R.highMin], ['Taps closed by max duration', R.maxDurClosed], ['Overall status', R.status], [],
      ['Live estimate at', clk(lv.now)], ['Last tap close', clk(lv.last), lv.lastEnd], ['Minutes since close', lv.mins], ['HM since close (t)', fp(lv.hm, 1)], ['Slag above taphole incl. retained (t)', fp(lv.slagAbove, 1)], ['Level above taphole (m)', fp(lv.level, 3)], ['Level % of tt', fp(lv.pct, 4)], ['Minutes to warning', fp(lv.toWarn, 1)], ['Minutes to critical', fp(lv.toCrit, 1)], ['Status', lv.status]], [44, 18, 18, 14]);
    var inp = [['Input', 'Value', 'Unit', 'Source']]; DEFS.forEach(function (d) { inp.push([d.l, I[d.k], d.pct ? 'fraction of tt' : d.u, SH[d.k] ? SH[d.k].from : S.mode === 'reference' ? 'Reference' : S.src[d.k] === 'user' ? 'Your data' : S.src[d.k] === 'ref' ? 'Reference' : 'Default']); });
    addSheet(wb, 'Inputs', inp, [50, 12, 16, 22]);
    var T = taps(), lg = [LOGHEAD.concat(['Duration (min)', 'Gap (min)', 'HM produced in cycle (t)', 'HM balance (t)', 'Slag used (t)', 'Avg total rate (t/min)', 'Calibrated Cd', 'Valid'])];
    T.forEach(function (r, i) { var c = M.log[i]; lg.push([i + 1, r.th, clk(r.open), clk(r.close), r.hm, r.slag, r.first, r.end, r.pb, r.bit, r.len, r.prod, r.rem, fp(c.N, 1), fp(c.O, 1), fp(c.Q, 1), fp(c.R, 1), fp(c.T, 1), fp(c.X, 3), fp(c.AC, 4), c.AD]); });
    addSheet(wb, 'Tap_Log', lg);
    var ts = [['Tap', 'Taphole', 'Open (min)', 'Open clock', 'Close (min)', 'Close clock', 'Duration', 'Gap before', 'HM t', 'Slag t', 'Drainable at open t', 'Level % at open', 'Residual HM t', 'Residual slag t', 'Total at close t', 'First slag min', 'Close reason', 'Avg rate t/min', 'Peak level %']];
    M.taps.filter(function (t) { return t.C != null; }).forEach(function (t) { ts.push([t.a, t.B, t.C, clk(D.SimStart + t.C), t.E, clk(D.SimStart + t.E), t.G, t.H, fp(t.I, 1), fp(t.J, 1), fp(t.K, 1), fp(t.L, 4), fp(t.M, 1), fp(t.N, 1), fp(t.O, 1), t.P, t.Q, fp(t.R, 3), fp(t.S, 4)]); });
    addSheet(wb, 'Tap_Summary', ts);
    var sm = [['Step', 'Time (min)', 'Clock', 'Tapholes open', 'Tap event', 'Taphole', 'HM layer m', 'Slag layer m', 'Level m', 'Level %', 'Phase', 'HM tapped t', 'Slag tapped t', 'Total HM incl sump t', 'Slag t', 'Risk', 'Event']];
    M.sim.forEach(function (s) { sm.push([s.A, s.B, clk(D.SimStart + s.B), s.D, s.E, s.F, fp(s.K, 4), fp(s.L, 4), fp(s.M, 4), fp(s.N, 4), s.P, fp(s.X, 3), fp(s.Y, 3), fp(s.AB, 1), fp(s.AC, 1), s.AE, s.AA]); });
    addSheet(wb, 'Simulation', sm);
    var d = new Date(); saveBytes('Hearth_Liquid_Prediction_' + d.getFullYear() + ('0' + (d.getMonth() + 1)).slice(-2) + ('0' + d.getDate()).slice(-2) + '.xlsx', new Uint8Array(XLSX.write(wb, { type: 'array', bookType: 'xlsx' })), XMIME);
  }

  // ---------- menu ----------
  function openSheet() {
    $('#sheet').innerHTML = '<h3>Hearth liquid prediction</h3><div class="links"><button class="lk" data-a="ref">⤓ Download ' + esc(REFX) + '</button><button class="lk" data-a="blank">⤓ Download blank ' + esc(TPL) + '</button><button class="lk" data-a="exp">⤓ Export results (.xlsx)</button>' +
      (window.Android && Android.printPdf ? '<button class="lk" data-a="pdf">⎙ Save this page as PDF</button>' : '') + '<a class="lk" href="inner-zone.html">Cohesive &amp; melting zone ›</a><button class="lk" data-a="refall">↺ Use reference data for everything</button></div><button class="btn" data-a="close" style="width:100%;margin-top:10px">Close</button>';
    $('#sheet').classList.add('open'); $('#sheetBg').classList.add('open');
    $$('#sheet [data-a]').forEach(function (b) { b.onclick = function () {
      var a = b.getAttribute('data-a'); closeSheet();
      if (a === 'ref') saveAsset('www/' + REFX, REFX); else if (a === 'blank') template(); else if (a === 'exp') exportReport();
      else if (a === 'pdf') { try { Android.printPdf('Hearth_Liquid_' + cur); toast('Choose "Save as PDF" as the printer'); } catch (e) { } }
      else if (a === 'refall') { S.mode = 'reference'; S.final = refFinal(); S.src = {}; S.raw = null; S.items = []; S.taps = null; save(); go(cur, true); toast('Using reference data'); }
    }; });
  }
  function closeSheet() { $('#sheet').classList.remove('open'); $('#sheetBg').classList.remove('open'); }
  $('#menu').onclick = openSheet; $('#sheetBg').onclick = closeSheet;

  try { localStorage.removeItem('hl.state.v1'); } catch (e) { }       // old hearth module (4.6–4.8)
  var start = (location.hash || '').slice(1); if (!TITLES[start]) start = 'dash';
  try { history.replaceState({ p: start }, '', '#' + start); } catch (e) { }
  go(start, true);
  window.HLApp = { S: S, go: go, get M() { return M; } };
})();
