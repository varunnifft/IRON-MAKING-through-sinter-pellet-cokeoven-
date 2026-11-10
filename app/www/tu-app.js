
(function () {
  'use strict';
  var T = window.TUY, LOOKS = T.looks, BY = {}, SEV = ['Normal', 'Watch', 'Act now', 'Critical'];
  LOOKS.forEach(function (l) { BY[l.id] = l; });
  var st = { view: 'looks', id: null, q: '', sev: -1, cob: true };
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function ls(k, v) { try { if (v === undefined) return JSON.parse(localStorage.getItem(k)); localStorage.setItem(k, JSON.stringify(v)); } catch (e) { return null; } }
  var c0 = ls('tuy.cobalt'); if (c0 === false) st.cob = false;

  /* ---------- peephole drawing ---------- */
  function rng(seed) { var s = 0; for (var i = 0; i < seed.length; i++) s = (s * 31 + seed.charCodeAt(i)) >>> 0; return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
  var PAL = [ // core, mid, edge, coke
    [1.25, '#ffffff', '#fffbe8', '#ffe2a0', '#fff0c8'],
    [.95, '#fffdf0', '#ffe08a', '#ff9a2e', '#ffc65a'],
    [.75, '#fff0c0', '#ffbe55', '#e2701c', '#e98a2c'],
    [.5, '#ffb347', '#e0661a', '#8a2e0a', '#a8400e'],
    [.25, '#c2541a', '#7a2a0c', '#3a1206', '#4a1808'],
    [-1, '#3a1206', '#220a04', '#120502', '#160603']];
  function pal(g) { for (var i = 0; i < PAL.length; i++) if (g >= PAL[i][0]) return PAL[i]; return PAL[PAL.length - 1]; }
  function blob(r, cx, cy, rad, k, jit) { var p = []; for (var i = 0; i < k; i++) { var a = i / k * 6.283, rr = rad * (1 - jit / 2 + r() * jit); p.push((cx + Math.cos(a) * rr).toFixed(1) + ',' + (cy + Math.sin(a) * rr).toFixed(1)); } return p.join(' '); }
  function draw(L, uid, cob) {
    var d = L.d, r = rng(L.id), P = pal(d.glow), CX = 120, CY = 124, R = 58, u = uid, s = [];
    s.push('<svg class="tz" viewBox="0 0 240 240" role="img" aria-label="' + esc(L.name) + ' as seen through the tuyere peephole"><defs>');
    s.push('<clipPath id="' + u + 'v"><circle cx="120" cy="120" r="110"/></clipPath><clipPath id="' + u + 'o"><circle cx="' + CX + '" cy="' + CY + '" r="' + R + '"/></clipPath>');
    s.push('<radialGradient id="' + u + 'r" cx="' + CX + '" cy="' + CY + '" r="' + R + '" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="' + P[1] + '"/><stop offset=".62" stop-color="' + P[2] + '"/><stop offset="1" stop-color="' + P[3] + '"/></radialGradient>');
    var bl = Math.max(.08, Math.min(1, d.glow));
    s.push('<radialGradient id="' + u + 'b" cx="' + CX + '" cy="' + CY + '" r="120" gradientUnits="userSpaceOnUse"><stop offset=".46" stop-color="' + P[3] + '" stop-opacity="' + bl + '"/><stop offset=".56" stop-color="#5a2a10" stop-opacity="' + bl + '"/><stop offset=".95" stop-color="#0a0604"/></radialGradient>');
    s.push('<linearGradient id="' + u + 's" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb347"/><stop offset=".25" stop-color="#ff7a1a"/><stop offset="1" stop-color="#9a2e06"/></linearGradient>');
    s.push('<filter id="' + u + 'f" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="3"/></filter><filter id="' + u + 'g" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="1.2"/></filter>');
    s.push('<filter id="' + u + 'c" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values=".3 .55 .1 0 0  .35 .65 .15 0 0  .5 .9 .4 0 .03  0 0 0 1 0"/><feComponentTransfer><feFuncR type="gamma" exponent="1.25"/></feComponentTransfer></filter>');
    s.push('</defs><rect width="240" height="240" fill="#020305"/><g clip-path="url(#' + u + 'v)"><g' + (cob ? ' filter="url(#' + u + 'c)"' : '') + '><g' + (d.fog ? ' filter="url(#' + u + 'f)"' : '') + '>');
    // bore of the blowpipe / tuyere, lit by the raceway
    s.push('<rect width="240" height="240" fill="#070403"/><circle cx="' + CX + '" cy="' + CY + '" r="120" fill="url(#' + u + 'b)"/>');
    // raceway
    s.push('<g clip-path="url(#' + u + 'o)"><circle cx="' + CX + '" cy="' + CY + '" r="' + R + '" fill="url(#' + u + 'r)"/>');
    if (d.dead) { for (var i = 0; i < 9; i++) s.push('<polygon points="' + blob(r, 70 + r() * 100, 74 + r() * 100, 8 + r() * 14, 7, .6) + '" fill="#0c0402" opacity=".8"/>'); for (i = 0; i < 4; i++) s.push('<circle class="glw" cx="' + (90 + r() * 60) + '" cy="' + (100 + r() * 50) + '" r="' + (2 + r() * 3) + '" fill="#9a2e06" style="animation-delay:-' + (r() * 2).toFixed(1) + 's"/>'); }
    var n = d.n || 0, sp = d.speed || 0;
    for (i = 0; i < n; i++) {
      var sz = d.fines ? 1 + r() * 1.6 : 3.5 + r() * 5, ox = (r() - .5) * 30, oy = (r() - .5) * 24, rx = 14 + r() * 32, ry = rx * (.55 + r() * .25), t = ((2.2 + r() * 1.8) / Math.max(sp, .05)).toFixed(2);
      var shape = d.fines ? '<circle cx="' + (CX + ox).toFixed(1) + '" cy="' + (CY + oy).toFixed(1) + '" r="' + sz.toFixed(1) + '" fill="#fff8dc" opacity=".9"/>'
        : '<polygon points="' + blob(r, CX + ox, CY + oy, sz, 6, .5) + '" fill="' + P[4] + '" stroke="' + P[1] + '" stroke-width=".8" opacity="' + (.55 + r() * .4).toFixed(2) + '"/>';
      if (sp > 0) s.push('<g class="o" style="--rx:' + rx.toFixed(0) + 'px;--t:' + t + 's;animation-delay:-' + (r() * t).toFixed(2) + 's"><g class="oy" style="--ry:' + ry.toFixed(0) + 'px;--t:' + t + 's;animation-delay:-' + (r() * t).toFixed(2) + 's">' + shape + '</g></g>');
      else s.push(shape);
    }
    if (d.fines) s.push('<circle cx="' + CX + '" cy="' + CY + '" r="' + R + '" fill="#fff3d6" opacity=".22"/>');
    if (d.white) s.push('<circle cx="' + CX + '" cy="' + CY + '" r="' + R + '" fill="#fff" opacity=".28"/>');
    // PCI plume (lance tip at 96,106)
    var tip = d.lance === 'mis' ? [100, 96] : [97, 106];
    if (d.plume === 'ok' || d.plume === 'thin') s.push('<ellipse cx="' + (tip[0] + 14) + '" cy="' + (tip[1] + 9) + '" rx="' + (d.plume === 'thin' ? 9 : 16) + '" ry="' + (d.plume === 'thin' ? 4 : 7) + '" transform="rotate(32 ' + tip[0] + ' ' + tip[1] + ')" fill="#2a1408" opacity="' + (d.plume === 'thin' ? .3 : .55) + '" filter="url(#' + u + 'f)"/>');
    if (d.plume === 'heavy') { s.push('<ellipse cx="' + (tip[0] + 26) + '" cy="' + (tip[1] + 14) + '" rx="34" ry="12" transform="rotate(28 ' + tip[0] + ' ' + tip[1] + ')" fill="#1c0d05" opacity=".8" filter="url(#' + u + 'f)"/>');
      for (i = 0; i < 6; i++) { var y0 = 92 + r() * 60, t2 = (1.4 + r() * 1.2).toFixed(1); s.push('<g class="o" style="--rx:36px;--t:' + t2 + 's;animation-delay:-' + (r() * 2).toFixed(1) + 's"><path d="M' + (88 + r() * 20) + ' ' + y0 + ' q 20 ' + (6 - r() * 12).toFixed(0) + ' 44 ' + (4 - r() * 8).toFixed(0) + '" stroke="#140803" stroke-width="' + (2 + r() * 3).toFixed(1) + '" stroke-linecap="round" fill="none" opacity=".7" filter="url(#' + u + 'g)"/></g>'); } }
    if (d.plume === 'wall') s.push('<path d="M' + tip[0] + ' ' + tip[1] + ' L 166 150 L 150 170 Z" fill="#1c0d05" opacity=".7" filter="url(#' + u + 'f)"/>');
    if (d.flicker) s.push('<circle class="fl" cx="' + CX + '" cy="' + CY + '" r="' + R + '" fill="#000"/>');
    if (d.pulse) s.push('<circle class="pu" cx="' + CX + '" cy="' + CY + '" r="' + R + '" fill="#000"/>');
    if (d.scab) { s.push('<circle class="scd" cx="' + CX + '" cy="' + CY + '" r="' + R + '" fill="#000"/><g class="scb" style="transform-box:fill-box;transform-origin:center"><polygon points="' + blob(r, CX, CY, 26, 9, .5) + '" fill="#1a0803" stroke="#ff9a2e" stroke-width="1.2" stroke-opacity=".5"/></g>'); }
    if (d.part) s.push('<path d="M50 150 Q 76 128 98 138 Q 120 122 140 136 Q 160 126 190 146 L190 200 L50 200 Z" fill="#160603"/><path d="M50 150 Q 76 128 98 138 Q 120 122 140 136 Q 160 126 190 146" fill="none" stroke="' + P[3] + '" stroke-width="2.2" opacity=".9"/>');
    if (d.slag) { var top = CY + R - d.slag * 2 * R; s.push('<g class="cr"><g class="sl"><path d="M10 ' + top + ' q 15 -6 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0 t 30 0 L230 200 L10 200 Z" fill="url(#' + u + 's)"/>');
      for (i = 0; i < 7; i++) s.push('<ellipse cx="' + (30 + r() * 180) + '" cy="' + (top + 8 + r() * 30) + '" rx="' + (4 + r() * 7) + '" ry="' + (1.5 + r() * 2) + '" fill="#4a1606" opacity=".75"/>');
      s.push('</g></g>'); }
    if (d.iron) for (i = 0; i < 7; i++) { var x = 76 + r() * 88, t3 = (1.1 + r() * 1.1).toFixed(2); s.push('<g class="drop" style="--t:' + t3 + 's;--dy:' + (40 + r() * 40).toFixed(0) + 'px;animation-delay:-' + (r() * t3).toFixed(2) + 's"><ellipse cx="' + x.toFixed(0) + '" cy="' + (88 + r() * 30).toFixed(0) + '" rx="2" ry="3.4" fill="#fff"/><ellipse cx="' + x.toFixed(0) + '" cy="' + (84 + r() * 30).toFixed(0) + '" rx="1" ry="5" fill="#fff6c8" opacity=".6"/></g>'); }
    s.push('</g>');
    // tuyere nose rim
    s.push('<circle cx="' + CX + '" cy="' + CY + '" r="' + (R + 3) + '" fill="none" stroke="#2a1408" stroke-width="6"/><circle cx="' + CX + '" cy="' + CY + '" r="' + (R + .5) + '" fill="none" stroke="' + P[3] + '" stroke-width="1.4" opacity="' + (.4 + .5 * bl).toFixed(2) + '"/>');
    if (d.redrim) s.push('<path class="glw" d="M' + (CX + 50) + ' ' + (CY + 30) + ' A ' + (R + 3) + ' ' + (R + 3) + ' 0 0 1 ' + (CX - 18) + ' ' + (CY + 58) + '" fill="none" stroke="#ff3b0a" stroke-width="7" filter="url(#' + u + 'g)"/><path d="M' + (CX + 34) + ' ' + (CY + 48) + ' q 6 -8 14 -6" stroke="#ffd27a" stroke-width="2" fill="none"/>');
    if (d.plume === 'wall') s.push('<ellipse cx="160" cy="166" rx="14" ry="6" transform="rotate(-38 160 166)" fill="#ff5a14" class="glw" filter="url(#' + u + 'g)"/>');
    if (d.steam) { for (i = 0; i < 4; i++) s.push('<polygon class="wet" style="--t:' + (1.2 + r() * 1.6).toFixed(1) + 's;animation-delay:-' + (r() * 2).toFixed(1) + 's" points="' + blob(r, 82 + r() * 50, 140 + r() * 30, 6 + r() * 8, 7, .6) + '" fill="#060302"/>');
      for (i = 0; i < 6; i++) { var t4 = (2.5 + r() * 2).toFixed(1); s.push('<ellipse class="stm" style="--t:' + t4 + 's;--dx:' + (r() * 30 - 10).toFixed(0) + 'px;animation-delay:-' + (r() * t4).toFixed(1) + 's" cx="' + (90 + r() * 50) + '" cy="' + (150 + r() * 20) + '" rx="' + (14 + r() * 10) + '" ry="' + (8 + r() * 6) + '" fill="#d9dde2" filter="url(#' + u + 'f)"/>'); } }
    if (d.backflow) { s.push('<g class="cr"><path d="M0 240 L0 120 Q 30 96 64 112 Q 96 82 128 104 Q 168 84 196 108 Q 220 100 240 116 L240 240 Z" fill="url(#' + u + 's)"/>');
      for (i = 0; i < 9; i++) s.push('<ellipse cx="' + (20 + r() * 200) + '" cy="' + (130 + r() * 90) + '" rx="' + (5 + r() * 9) + '" ry="' + (2 + r() * 3) + '" fill="#4a1606" opacity=".8"/>');
      s.push('</g>'); }
    // PCI lance (silhouette in the blowpipe)
    if (d.lance !== 'none') s.push('<path d="M14 40 L' + tip[0] + ' ' + tip[1] + '" stroke="#0b0806" stroke-width="7" stroke-linecap="round"/><path d="M14 38 L' + (tip[0] - 1) + ' ' + (tip[1] - 3) + '" stroke="#3a2a20" stroke-width="1.2" opacity=".7"/>');
    s.push('</g>');
    if (d.fog) s.push('<rect width="240" height="240" fill="#d8dde3" opacity=".42"/><ellipse cx="80" cy="70" rx="40" ry="20" fill="#eef1f4" opacity=".35"/><ellipse cx="170" cy="180" rx="34" ry="16" fill="#c9ced6" opacity=".35"/>');
    s.push('</g></g>');
    // sight glass ring and reflection
    s.push('<circle cx="120" cy="120" r="110" fill="none" stroke="#1b2430" stroke-width="5"/><circle cx="120" cy="120" r="116" fill="none" stroke="#0b1018" stroke-width="7"/><path d="M48 70 A 90 90 0 0 1 104 32" stroke="#fff" stroke-opacity=".12" stroke-width="5" fill="none" stroke-linecap="round"/></svg>');
    return s.join('');
  }
  var uidN = 0; function U() { return 'tz' + (uidN++) + '_'; }
  var io = window.IntersectionObserver ? new IntersectionObserver(function (es) { es.forEach(function (e) { e.target.classList.toggle('run', e.isIntersecting); }); }) : null;
  function arm() { [].forEach.call(document.querySelectorAll('svg.tz'), function (s) { if (io) io.observe(s); else s.classList.add('run'); }); }

  /* ---------- views ---------- */
  function sevTag(v) { return '<span class="sev s' + v + '">' + SEV[v] + '</span>'; }
  function txt(l) { return [l.name, l.short].concat(l.see, l.causes, l.act).join(' ').toLowerCase(); }
  function vLooks() {
    var q = st.q.toLowerCase(), list = LOOKS.filter(function (l) { return (st.sev < 0 || l.sev === st.sev) && (!q || txt(l).indexOf(q) >= 0); });
    var h = '<div class="chips" id="sevf">' + ['All'].concat(SEV).map(function (n, i) { var v = i - 1; return '<button class="chip' + (v >= 0 ? ' sev s' + v : '') + '" style="' + (v >= 0 ? 'padding:6px 12px;font-size:12px' : '') + '" data-s="' + v + '" aria-pressed="' + (st.sev === v) + '">' + n + '</button>'; }).join('') + '</div>';
    if (!list.length) return h + '<p class="empty">Nothing matches “' + esc(st.q) + '”.</p>';
    return h + '<div class="grid">' + list.map(function (l) {
      return '<button class="card s' + l.sev + '" data-id="' + l.id + '"><div class="pic">' + draw(l, U(), st.cob) + '</div><div class="tx">' + sevTag(l.sev) + '<h3>' + esc(l.name) + '</h3><p>' + esc(l.short) + '</p></div></button>';
    }).join('') + '</div>';
  }
  function li(a) { return '<ul>' + a.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>'; }
  function vDetail(l) {
    var h = '<a class="bk" href="#looks">‹ All tuyere looks</a><div class="det"><div class="stage">' + draw(l, U(), st.cob);
    if (l.id !== 'normal') h += '<div class="cmp">' + draw(BY.normal, U(), st.cob) + '<span>Normal tuyere for comparison. Always compare with the neighbouring tuyeres too.</span></div>';
    h += '</div><div>' + sevTag(l.sev) + '<h2>' + esc(l.name) + '</h2>';
    h += '<p><a class="btn p" style="display:inline-flex;align-items:center;text-decoration:none" href="#diag" data-pre="' + l.id + '">Diagnose with this look ›</a></p><div class="box"><h4>What you see</h4>' + li(l.see) + '</div>';
    h += '<div class="box"><h4>Likely causes</h4>' + li(l.causes) + '</div>';
    h += '<div class="box"><h4>Check</h4>' + li(l.checks.map(function (k) { return T.checks[k]; })) + '</div>';
    h += '<div class="box act"><h4>What to do</h4>' + li(l.act) + '</div>';
    if (l.dont.length) h += '<div class="box dont"><h4>Do not</h4>' + li(l.dont) + '</div>';
    if (l.like.length) h += '<div class="box"><h4>Do not confuse with</h4><div class="linkrow" style="margin:4px 0 6px">' + l.like.map(function (k) { return '<a href="#look/' + k + '">' + esc(BY[k].name) + ' ›</a>'; }).join('') + '</div></div>';
    
    h += '<p class="note">Guidance only. Follow plant SOP and the shift in-charge.</p></div></div>';
    return h;
  }
  function vLeak() {
    return '<div class="box act"><h4>Confirming a tuyere water leak</h4>' + li(T.leak) + '</div><div class="box dont"><h4>Safety at the peephole</h4>' + li(T.safety) + '</div>' +
      '<div class="box"><h4>Check points used in this module</h4>' + li(Object.keys(T.checks).map(function (k) { return T.checks[k]; })) + '</div>' +
      '<div class="box"><h4>Brightness scale for the log sheet</h4><ul><li><b>5</b> very white, glaring</li><li><b>4</b> bright, normal</li><li><b>3</b> slightly dull</li><li><b>2</b> dull orange</li><li><b>1</b> dark red</li><li><b>0</b> black, no raceway</li></ul></div>' +
      '<p class="note">Guidance only. Always follow plant SOP and the shift in-charge.</p>';
  }

  /* ---------- log sheet ---------- */
  var KEY = 'tuy.log', HKEY = 'tuy.hist';
  function today() { var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function now() { var d = new Date(); return ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2); }
  function blank(n) { var rows = []; for (var i = 0; i < n; i++) rows.push({ look: 'normal', br: '4', mv: 'Fast', pci: 'On', df: '', dt: '', rm: '' }); return { date: today(), shift: '', time: now(), obs: '', n: n, rows: rows }; }
  var LOG = ls(KEY) || blank(20);
  function saveLog() { ls(KEY, LOG); }
  function fit(n) { n = Math.max(4, Math.min(40, n | 0)); while (LOG.rows.length < n) LOG.rows.push({ look: 'normal', br: '4', mv: 'Fast', pci: 'On', df: '', dt: '', rm: '' }); LOG.rows.length = n; LOG.n = n; }
  function ringSvg() {
    var n = LOG.n, s = '<svg viewBox="0 0 220 220" role="img" aria-label="Tuyere ring map"><circle cx="110" cy="110" r="78" fill="none" stroke="var(--line)" stroke-width="10"/><text x="110" y="106" text-anchor="middle" font-family="Barlow Condensed,sans-serif" font-size="18" font-weight="700" fill="var(--ink)">TUYERE</text><text x="110" y="126" text-anchor="middle" font-family="Barlow Condensed,sans-serif" font-size="18" font-weight="700" fill="var(--ink)">RING</text>';
    for (var i = 0; i < n; i++) { var a = -Math.PI / 2 + i / n * 2 * Math.PI, x = 110 + Math.cos(a) * 82, y = 110 + Math.sin(a) * 82, l = BY[LOG.rows[i].look] || BY.normal;
      s += '<a href="#look/' + l.id + '"><circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + (n > 28 ? 8 : 11) + '" fill="var(--s' + l.sev + ')"><title>T' + (i + 1) + ': ' + esc(l.name) + '</title></circle><text x="' + x.toFixed(1) + '" y="' + (y + 4).toFixed(1) + '" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="' + (n > 28 ? 8 : 10) + '" font-weight="600" fill="#fff">' + (i + 1) + '</text></a>'; }
    return s + '</svg>';
  }
  function summary() {
    var c = [0, 0, 0, 0], bad = [];
    LOG.rows.forEach(function (r, i) { var l = BY[r.look] || BY.normal; c[l.sev]++; if (l.sev >= 1) bad.push({ i: i + 1, l: l }); });
    bad.sort(function (a, b) { return b.l.sev - a.l.sev; });
    return '<div class="legend">' + c.map(function (k, i) { return sevTag(i) + ' <b>' + k + '</b>'; }).join(' ') + '</div>' +
      (bad.length ? '<ul>' + bad.map(function (b) { return '<li><b>T' + b.i + '</b> ' + esc(b.l.name) + ' — <a href="#look/' + b.l.id + '">what to do ›</a></li>'; }).join('') + '</ul>' : '<p class="note">All tuyeres normal.</p>');
  }
  function opt(list, v) { return list.map(function (o) { var val = o.v != null ? o.v : o, lab = o.t || o; return '<option value="' + esc(val) + '"' + (String(v) === String(val) ? ' selected' : '') + '>' + esc(lab) + '</option>'; }).join(''); }
  var LOOKOPT = LOOKS.map(function (l) { return { v: l.id, t: l.name }; });
  function vLog() {
    var h = '<div class="lg-head"><label>Date<input class="in" type="date" data-h="date" value="' + esc(LOG.date) + '"></label><label>Shift<select class="in" data-h="shift">' + opt(['', 'A', 'B', 'C', 'General'], LOG.shift) + '</select></label>' +
      '<label>Time<input class="in" type="time" data-h="time" value="' + esc(LOG.time) + '"></label><label>Observer<input class="in" data-h="obs" value="' + esc(LOG.obs) + '" placeholder="Name"></label>' +
      '<label>Number of tuyeres<input class="in" type="number" min="4" max="40" data-h="n" value="' + LOG.n + '"></label></div>';
    h += '<div class="lg-top"><div class="ring" id="ring">' + ringSvg() + '</div><div class="sum" id="sum">' + summary() + '</div></div>';
    h += '<div class="tw"><table><thead><tr><th>No</th><th>Look</th><th>Brightness 0–5</th><th>Coke movement</th><th>PCI lance</th><th>ΔFlow m³/h</th><th>ΔT °C</th><th>Remarks</th></tr></thead><tbody>';
    LOG.rows.forEach(function (r, i) { var l = BY[r.look] || BY.normal;
      h += '<tr data-r="' + i + '"><td class="no" style="--rc:var(--s' + l.sev + ')">' + (i + 1) + '</td><td><select class="in" data-k="look" style="min-width:190px">' + opt(LOOKOPT, r.look) + '</select></td>' +
        '<td><select class="in" data-k="br">' + opt(['5', '4', '3', '2', '1', '0'], r.br) + '</select></td><td><select class="in" data-k="mv">' + opt(['Fast', 'Normal', 'Slow', 'Irregular', 'None'], r.mv) + '</select></td>' +
        '<td><select class="in" data-k="pci">' + opt(['On', 'Off', 'Blocked', 'Misaligned', 'No lance'], r.pci) + '</select></td><td class="n"><input class="in" inputmode="decimal" data-k="df" value="' + esc(r.df) + '"></td><td class="n"><input class="in" inputmode="decimal" data-k="dt" value="' + esc(r.dt) + '"></td>' +
        '<td><input class="in" data-k="rm" value="' + esc(r.rm) + '" style="min-width:160px"></td></tr>'; });
    h += '</tbody></table></div><div class="btns"><button class="btn p" data-a="share">Share / export</button><button class="btn" data-a="keep">Save to history</button><button class="btn" data-a="print">Print</button><button class="btn" data-a="new">New sheet</button></div>';
    h += '<p class="note">The sheet saves itself on this device as you type. ΔFlow = inlet − outlet water flow of the tuyere cooler; ΔT = outlet − inlet water temperature.</p>';
    var H = ls(HKEY) || []; if (H.length) h += '<div class="hist"><h4 class="note" style="margin:0 0 6px">History on this device</h4>' + H.map(function (x, i) { var bad = x.rows.filter(function (r) { return (BY[r.look] || BY.normal).sev >= 2; }).length; return '<button class="chip" data-hist="' + i + '">' + esc(x.date + ' ' + (x.shift ? 'Shift ' + x.shift + ' ' : '') + x.time) + (bad ? ' · ' + bad + ' to act' : '') + '</button>'; }).join('') + '</div>';
    return h;
  }
  function logText(csv) {
    var head = 'Tuyere log ' + LOG.date + ' ' + LOG.time + (LOG.shift ? ' Shift ' + LOG.shift : '') + (LOG.obs ? ' by ' + LOG.obs : '');
    if (csv) { var q = function (v) { v = String(v == null ? '' : v); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
      return ['Date,Time,Shift,Observer,Tuyere,Look,Severity,Brightness,Coke movement,PCI,dFlow m3/h,dT C,Remarks'].concat(LOG.rows.map(function (r, i) { var l = BY[r.look] || BY.normal; return [LOG.date, LOG.time, LOG.shift, LOG.obs, i + 1, l.name, SEV[l.sev], r.br, r.mv, r.pci, r.df, r.dt, r.rm].map(q).join(','); })).join('\n'); }
    var out = [head]; LOG.rows.forEach(function (r, i) { var l = BY[r.look] || BY.normal; if (l.sev > 0 || r.rm || r.pci !== 'On') out.push('T' + (i + 1) + ': ' + l.name + ' [' + SEV[l.sev] + '] br ' + r.br + ', coke ' + r.mv + ', PCI ' + r.pci + (r.df ? ', ΔFlow ' + r.df : '') + (r.dt ? ', ΔT ' + r.dt : '') + (r.rm ? ', ' + r.rm : '')); });
    if (out.length === 1) out.push('All ' + LOG.n + ' tuyeres normal.');
    return out.join('\n');
  }
  function refreshLogBits(tr) { var ring = document.getElementById('ring'), sum = document.getElementById('sum'); if (ring) ring.innerHTML = ringSvg(); if (sum) sum.innerHTML = summary();
    if (tr) { var r = LOG.rows[+tr.getAttribute('data-r')], l = BY[r.look] || BY.normal; tr.querySelector('td.no').style.setProperty('--rc', 'var(--s' + l.sev + ')'); } }
  function onLogInput(e) {
    var t = e.target, hk = t.getAttribute('data-h'), k = t.getAttribute('data-k');
    if (hk) { if (hk === 'n') { if (e.type !== 'change') return; fit(+t.value); saveLog(); render(); return; } LOG[hk] = t.value; saveLog(); return; }
    if (k) { var tr = t.closest('tr'), r = LOG.rows[+tr.getAttribute('data-r')]; r[k] = t.value;
      if (k === 'look') { var l = BY[t.value]; if (l) { if (l.id === 'lanceblk') r.pci = 'Blocked'; if (l.id === 'lancemis') r.pci = 'Misaligned'; if (l.id === 'dead') { r.br = '0'; r.mv = 'None'; } var sel = tr.querySelector('[data-k=pci]'); sel.value = r.pci; tr.querySelector('[data-k=br]').value = r.br; tr.querySelector('[data-k=mv]').value = r.mv; } refreshLogBits(tr); }
      saveLog(); }
  }
  function onLogClick(e) {
    var a = e.target.getAttribute && e.target.getAttribute('data-a'), hi = e.target.getAttribute && e.target.getAttribute('data-hist');
    if (hi != null) { var H = ls(HKEY) || []; if (H[+hi] && confirm('Open this saved sheet? The current sheet is replaced (save it to history first if you need it).')) { LOG = JSON.parse(JSON.stringify(H[+hi])); saveLog(); render(); } return; }
    if (a === 'share') { var text = logText(false) + '\n\n' + logText(true);
      if (window.Android && window.Android.share) { window.Android.share('Tuyere log ' + LOG.date, text); return; }
      try { var b = new Blob([logText(true)], { type: 'text/csv' }), u = URL.createObjectURL(b), x = document.createElement('a'); x.href = u; x.download = 'tuyere-log-' + LOG.date + (LOG.shift ? '-' + LOG.shift : '') + '.csv'; document.body.appendChild(x); x.click(); x.remove(); setTimeout(function () { URL.revokeObjectURL(u); }, 2000); } catch (er) { }
      if (navigator.clipboard) navigator.clipboard.writeText(logText(false)).catch(function () { });
      return; }
    if (a === 'keep') { var H2 = ls(HKEY) || []; H2.unshift(JSON.parse(JSON.stringify(LOG))); ls(HKEY, H2.slice(0, 60)); render(); return; }
    if (a === 'print') { if (window.Android && window.Android.printPdf) { try { window.Android.printPdf('Tuyere_log'); return; } catch (er) { } } window.print(); return; }
    if (a === 'new' && confirm('Start a new sheet? Save this one to history first if you need it.')) { LOG = blank(LOG.n); saveLog(); render(); }
  }

  /* ---------- diagnose: pick pictures + readings -> diagnosis, causes, action plan ---------- */
  var DKEY = 'tuy.diag';
  var DG = ls(DKEY) || {}; DG.sel = DG.sel || [];
  function saveDG() { ls(DKEY, DG); }
  function num(v) { var x = parseFloat(String(v == null ? '' : v).replace(',', '.')); return isFinite(x) ? x : null; }
  function fsel(k, lab, opts) { return '<label>' + lab + '<select class="in" data-d="' + k + '">' + opt(opts, DG[k] || opts[0].v) + '</select></label>'; }
  function finp(k, lab, ph) { return '<label>' + lab + '<input class="in" inputmode="decimal" data-d="' + k + '" value="' + esc(DG[k] || '') + '" placeholder="' + (ph || '') + '"></label>'; }
  var UNK = { v: 'unk', t: 'Not known' };
  function vDiag() {
    var h = '<div class="step"><i>1</i>Pick what you see at the peephole</div><p class="note" style="margin:-4px 0 8px">Tap one picture, or up to four if you see a mix (for example slag and iron, or dull and steam).</p><div class="grid pick">';
    h += LOOKS.map(function (l) { return '<button class="card s' + l.sev + '" data-id="' + l.id + '" aria-pressed="' + (DG.sel.indexOf(l.id) >= 0) + '"><div class="pic">' + draw(l, U(), st.cob) + '</div><div class="tx">' + sevTag(l.sev) + '<h3>' + esc(l.name) + '</h3></div></button>'; }).join('') + '</div>';
    h += '<div class="step"><i>2</i>Add readings (optional, sharpens the result)</div><div class="ctx">' +
      finp('tno', 'Tuyere number', 'e.g. 7') +
      fsel('spread', 'How many tuyeres look like this?', [UNK, { v: 'one', t: 'Only this one' }, { v: 'sector', t: '2–4 side by side (a sector)' }, { v: 'all', t: 'Most or all tuyeres' }]) +
      finp('dfNow', 'Cooler ΔFlow now, m³/h (inlet − outlet)', 'e.g. 0.9') + finp('dfNorm', 'Its normal ΔFlow, m³/h', 'e.g. 0.1') +
      finp('dtNow', 'Cooler ΔT now, °C', 'e.g. 9') + finp('dtNorm', 'Its normal ΔT, °C', 'e.g. 6') +
      fsel('h2', 'Top gas H₂ trend', [UNK, { v: 'steady', t: 'Steady' }, { v: 'rising', t: 'Rising (no steam/PCI change)' }]) +
      fsel('gas', 'Gas or bubbles at water outlet?', [UNK, { v: 'no', t: 'No' }, { v: 'yes', t: 'Yes' }]) +
      fsel('pci', 'PCI line pressure, this lance', [UNK, { v: 'normal', t: 'Normal' }, { v: 'high', t: 'Higher than others' }, { v: 'low', t: 'Lower than others' }, { v: 'off', t: 'Lance off' }]) +
      finp('cast', 'Minutes since last cast closed', 'e.g. 75') + finp('castNorm', 'Normal gap between casts, min', 'e.g. 60') +
      fsel('hmt', 'Hot metal temp / Si trend', [UNK, { v: 'steady', t: 'Steady' }, { v: 'falling', t: 'Falling' }, { v: 'rising', t: 'Rising' }]) +
      fsel('stave', 'Stave / plate temps in that sector', [UNK, { v: 'normal', t: 'Normal' }, { v: 'spike', t: 'Sudden rise or drop' }]) +
      '</div>';
    h += '<div class="sel-bar"><span id="dgCount">' + (DG.sel.length ? DG.sel.length + ' picture' + (DG.sel.length > 1 ? 's' : '') + ' picked: ' + DG.sel.map(function (k) { return BY[k].name; }).join(', ') : 'No picture picked yet') + '</span><span style="display:flex;gap:8px"><button class="btn" data-g="reset" style="background:transparent;color:#dce7f1;border-color:#2a4466">Clear</button><button class="btn p" data-g="go">Get diagnosis ›</button></span></div>';
    h += '<div id="dgOut">' + (DG.done ? resultHtml() : '') + '</div>';
    return h;
  }
  function analyse() {
    var L = DG.sel.map(function (k) { return BY[k]; }).filter(Boolean), F = [], add = {}, ctx = {};
    var dfN = num(DG.dfNow), dfR = num(DG.dfNorm), dtN = num(DG.dtNow), dtR = num(DG.dtNorm), c = num(DG.cast), cR = num(DG.castNorm);
    var has = function (id) { return DG.sel.indexOf(id) >= 0; };
    // water leak evidence
    var ls_ = 0, why = [];
    if (dfN != null) { var ex = dfN - (dfR != null ? dfR : 0);
      if (ex > .5) { ls_ += 2; why.push('ΔFlow ' + ex.toFixed(2) + ' m³/h above normal'); }
      else if (ex > .2) { ls_ += 1; why.push('ΔFlow slightly above normal (+' + ex.toFixed(2) + ' m³/h)'); }
      else F.push(['ok', 'Cooler ΔFlow is close to normal: no sign of a large leak from the water side.']); }
    if (DG.h2 === 'rising') { ls_ += 1; why.push('top gas H₂ rising'); } else if (DG.h2 === 'steady') F.push(['ok', 'Top gas H₂ steady.']);
    if (DG.gas === 'yes') { ls_ += 2; why.push('gas at the water outlet'); }
    if (has('leak') || has('burnt')) ls_ += 1;
    if ((has('dull') || has('dead')) && ls_ >= 2) ls_ += 1;
    ctx.leak = ls_;
    if (ls_ >= 3) { add.leak = 1; F.unshift(['up', 'Water leak likely: ' + why.join(', ') + '.']); }
    else if (ls_ >= 1 && why.length) F.push(['q', 'Possible water leak (' + why.join(', ') + '). Confirm with the leak test.']);
    // ΔT
    if (dtN != null && dtR != null && dtR > 0) {
      if (dtN > dtR * 1.3 && dtN - dtR >= 1.5) { ctx.heat = 1; F.push(['up', 'Cooler ΔT ' + dtN + ' °C against ' + dtR + ' °C normal: high heat load on the nose (liquid iron or slag contact, coal hitting the nose, or the nose starting to burn).']); }
      else if (dtN < dtR * .7) F.push(['q', 'Cooler ΔT lower than normal: less heat reaching this tuyere (cold or choked raceway), or water bypassing through a leak. Check ΔFlow.']);
      else F.push(['ok', 'Cooler ΔT normal.']); }
    // PCI
    if (DG.pci === 'high') { ctx.pci = 1; F.push(['up', 'PCI line pressure high: lance choked at the tip.']); if (!has('lanceblk')) add.lanceblk = 1; }
    if (DG.pci === 'low') { ctx.pci = 1; F.push(['up', 'PCI line pressure low: hose leak, burnt lance tip or no feed upstream.']); }
    if (DG.pci === 'off') F.push(['q', 'Lance off: expect a whiter, hotter raceway on this tuyere; check the others are not overloaded.']);
    // casting
    if (c != null) { var lim = cR != null ? cR : 60;
      if (c > lim * 1.15) { ctx.cast = 1; F.push(['up', c + ' min since the last cast closed (normal ' + lim + '): hearth liquid level is probably high.']); }
      else F.push(['ok', 'Casting interval normal.']); }
    if (DG.hmt === 'falling') { ctx.cold = 1; F.push(['up', 'Hot metal temperature and Si falling: the hearth is cooling.']); }
    if (DG.hmt === 'rising') { ctx.hot = 1; F.push(['q', 'Hot metal temperature and Si rising: thermal level going up.']); }
    if (DG.stave === 'spike') { ctx.wall = 1; F.push(['up', 'Stave temperature jump in that sector: wall accretion has probably come off.']); if (!has('scab')) add.scab = 1; }
    // spread
    var sp = { one: 'Only this tuyere: look first at local causes (its lance, its cooler water, its blowpipe).', sector: 'A sector: look at wall accretion or scab fall, distribution in that sector, or a leaking tuyere or stave next to it.', all: 'All round: furnace-wide cause (thermal state, hearth level and casting, blast conditions, burden quality).' };
    if (sp[DG.spread]) F.push(['q', sp[DG.spread]]);
    // cross-checks between pictures and readings
    if ((has('slag') || has('iron') || has('part')) && c == null) F.push(['q', 'Enter minutes since the last cast: slag or iron at the nose usually means the hearth level is high.']);
    if (has('fog') && L.length === 1) F.push(['ok', 'Fogged glass is not a furnace fault if the neighbours look normal.']);
    var all = L.concat(Object.keys(add).filter(function (k) { return !has(k); }).map(function (k) { return BY[k]; }));
    var sev = all.reduce(function (m, l) { return Math.max(m, l.sev); }, 0);
    if (DG.spread === 'all' && (has('dull') || has('dead') || has('slag') || has('part'))) sev = Math.max(sev, has('dead') ? 3 : 2);
    if (ctx.heat && (has('iron') || has('burnt') || has('slag'))) sev = Math.max(sev, 3);
    if (ctx.leak >= 3) sev = 3;
    // causes ranked by readings
    var KW = [];
    if (ctx.leak >= 2) KW.push(/leak|crack|burnt|weld/i);
    if (ctx.cast) KW.push(/level|cast|taphole|drain/i);
    if (ctx.cold) KW.push(/cold|chill|thermal|temperature|unprepared|scab/i);
    if (ctx.hot) KW.push(/flame|O₂|high/i);
    if (ctx.pci) KW.push(/lance|coal|N₂|hose/i);
    if (ctx.wall) KW.push(/accretion|scab|wall/i);
    if (ctx.heat) KW.push(/iron|nose|contact|plume hitting/i);
    if (DG.spread === 'one') KW.push(/lance|this tuyere|choked|cooler|weld|blowpipe/i);
    if (DG.spread === 'all') KW.push(/hearth|blast|thermal|burden|coke|sinter|level/i);
    if (DG.spread === 'sector') KW.push(/wall|accretion|scab|distribution/i);
    var seen = {}, causes = [];
    all.forEach(function (l, li) { l.causes.forEach(function (cz, ci) { if (seen[cz]) return; seen[cz] = 1; var sc = KW.reduce(function (a, re) { return a + (re.test(cz) ? 10 : 0); }, 0) - li - ci * .1; causes.push({ t: cz, s: sc, l: l.name }); }); });
    causes.sort(function (a, b) { return b.s - a.s; });
    // action plan in three phases
    var NOW = /stop pci|tell the shift|emergency|clear people|at once|drain|taphole|start the cast|stop|confirm|leak test|expect a cold/i, LATER = /next stoppage|next blast-off|earliest stoppage|inspect|plan/i;
    var ph = [[], [], []], sa = {};
    function put(a) { if (sa[a]) return; if (DG.spread === 'one' && /^A sector/.test(a)) return; if ((DG.spread === 'sector' || DG.spread === 'all') && /^One tuyere only/.test(a)) return; if (sev >= 3 && /every 30 min/.test(a)) return; sa[a] = 1; ph[LATER.test(a) ? 2 : NOW.test(a) ? 0 : 1].push(a); }
    if (ctx.leak >= 3 && !has('leak')) BY.leak.act.forEach(put);
    if (ctx.cast) put('Start the cast now and drain the hearth, as per casting SOP.');
    if (ctx.heat) put('Check this tuyere’s ΔT and ΔFlow every 15 min until steady.');
    all.slice().sort(function (a, b) { return b.sev - a.sev; }).forEach(function (l) { l.act.forEach(put); });
    if (ctx.cold && DG.spread === 'all') put('Thermal correction as per SOP: blast temperature, O₂, fuel rate.');
    var freq = ['On the normal round', 'Every hour', 'Every 30 min', 'Every 15 min, and keep the shift in-charge informed'][sev];
    var donts = []; all.forEach(function (l) { l.dont.forEach(function (d) { if (donts.indexOf(d) < 0) donts.push(d); }); });
    var answered = { flow: dfN != null, dt: dtN != null, h2: DG.h2 && DG.h2 !== 'unk', pci: DG.pci && DG.pci !== 'unk', cast: c != null, hm: DG.hmt && DG.hmt !== 'unk', stave: DG.stave && DG.stave !== 'unk', nb: DG.spread && DG.spread !== 'unk' };
    var todo = []; all.forEach(function (l) { l.checks.forEach(function (k) { if (!answered[k] && todo.indexOf(k) < 0) todo.push(k); }); });
    var primary = add.leak ? 'Water leak likely' : L.slice().sort(function (a, b) { return b.sev - a.sev; }).map(function (l) { return l.name; })[0];
    var also = all.map(function (l) { return l.name; }).filter(function (n) { return n !== primary && !(add.leak && n === BY.leak.name); });
    return { sev: sev, primary: primary, also: also, F: F, causes: causes, ph: ph, freq: freq, donts: donts, todo: todo, all: all };
  }
  function resultHtml() {
    if (!DG.sel.length) return '<p class="empty">Pick at least one picture in step 1.</p>';
    var R = analyse(), tno = DG.tno ? 'Tuyere ' + esc(DG.tno) + ' · ' : '';
    var h = '<div class="step" id="dgRes"><i>3</i>Result</div><div class="res" style="--rc:var(--s' + R.sev + ')"><div class="rh">' + sevTag(R.sev) + '<h3>' + tno + esc(R.primary) + '</h3>' +
      '<p>' + (R.also.length ? 'Together with: ' + esc(R.also.join(', ')) + '. ' : '') + 'Watch: ' + esc(R.freq) + '.</p></div><div class="rb">';
    if (R.F.length) h += '<div class="box"><h4>What the readings say</h4><ul class="fnd">' + R.F.map(function (f) { return '<li class="' + f[0] + '">' + esc(f[1]) + '</li>'; }).join('') + '</ul></div>';
    h += '<div class="box"><h4>Likely causes, most likely first</h4><ol>' + R.causes.slice(0, 7).map(function (c, i) { return '<li>' + (i < 3 && c.s > 0 ? '<b>' + esc(c.t) + '</b>' : esc(c.t)) + ' <span class="note">(' + esc(c.l) + ')</span></li>'; }).join('') + '</ol>' +
      (R.causes.length && R.causes[0].s <= 0 ? '<p class="note" style="margin:0 0 6px">Add readings in step 2 to rank the causes.</p>' : '') + '</div>';
    h += '<h4 class="note" style="margin:12px 0 6px;font:600 12px var(--f-mono);letter-spacing:.08em;text-transform:uppercase">Action plan</h4><div class="ph">' +
      [['Now', 'b0'], ['This shift', 'b1'], ['Next stoppage', 'b2']].map(function (p, i) { return '<div class="box ' + p[1] + '"><h4>' + p[0] + '</h4>' + (R.ph[i].length ? li(R.ph[i]) : '<p class="note">Nothing extra.</p>') + '</div>'; }).join('') + '</div>';
    if (R.donts.length) h += '<div class="box dont"><h4>Do not</h4>' + li(R.donts) + '</div>';
    if (R.todo.length) h += '<div class="box"><h4>Still to check</h4>' + li(R.todo.map(function (k) { return T.checks[k]; })) + '</div>';
    h += '<div class="linkrow" style="margin:10px 0">' + R.all.map(function (l) { return '<a href="#look/' + l.id + '">' + esc(l.name) + ' in detail ›</a>'; }).join('') + '</div>';
    h += '<div class="btns"><button class="btn p" data-g="share">Share report</button><button class="btn" data-g="log">Put in log sheet</button><button class="btn" data-g="print">Print</button></div>';
    h += '<p class="note">Guidance only, worked out from the pictures and readings you entered. Plant SOP and the shift in-charge decide.</p></div></div>';
    return h;
  }
  function reportText() {
    var R = analyse(), o = ['Tuyere diagnosis ' + today() + ' ' + now() + (DG.tno ? ' — Tuyere ' + DG.tno : ''), 'Seen: ' + DG.sel.map(function (k) { return BY[k].name; }).join(', '), 'Result: ' + R.primary + ' [' + SEV[R.sev] + '], watch ' + R.freq.toLowerCase()];
    if (R.F.length) o.push('', 'Readings:'), R.F.forEach(function (f) { o.push('- ' + f[1]); });
    o.push('', 'Likely causes:'); R.causes.slice(0, 5).forEach(function (c, i) { o.push((i + 1) + '. ' + c.t); });
    ['Now', 'This shift', 'Next stoppage'].forEach(function (p, i) { if (R.ph[i].length) { o.push('', p + ':'); R.ph[i].forEach(function (a) { o.push('- ' + a); }); } });
    if (R.donts.length) { o.push('', 'Do not:'); R.donts.forEach(function (d) { o.push('- ' + d); }); }
    o.push('', 'Guidance only. Follow plant SOP.'); return o.join('\n');
  }
  function upDG() { var o = document.getElementById('dgOut'); if (o) o.innerHTML = DG.done ? resultHtml() : '';
    var cnt = document.getElementById('dgCount'); if (cnt) cnt.textContent = DG.sel.length ? DG.sel.length + ' picture' + (DG.sel.length > 1 ? 's' : '') + ' picked: ' + DG.sel.map(function (k) { return BY[k].name; }).join(', ') : 'No picture picked yet'; }
  function onDiagInput(e) { var k = e.target.getAttribute('data-d'); if (!k) return; DG[k] = e.target.value; saveDG(); if (DG.done) upDG(); }
  function onDiagClick(e) {
    var c = e.target.closest && e.target.closest('.pick .card');
    if (c) { var id = c.getAttribute('data-id'), i = DG.sel.indexOf(id);
      if (i >= 0) DG.sel.splice(i, 1); else { if (DG.sel.length >= 4) DG.sel.shift(); DG.sel.push(id); }
      [].forEach.call(document.querySelectorAll('.pick .card'), function (b) { b.setAttribute('aria-pressed', DG.sel.indexOf(b.getAttribute('data-id')) >= 0 ? 'true' : 'false'); });
      saveDG(); upDG(); return; }
    var g = e.target.getAttribute && e.target.getAttribute('data-g'); if (!g) return;
    if (g === 'go') { DG.done = true; saveDG(); upDG(); var r = document.getElementById('dgRes'); if (r) r.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    if (g === 'reset') { DG = { sel: [] }; saveDG(); render(); }
    if (g === 'print') { if (window.Android && window.Android.printPdf) { try { window.Android.printPdf('Tuyere_diagnosis'); } catch (er) { window.print(); } } else window.print(); }
    if (g === 'share') { var t = reportText(); if (window.Android && window.Android.share) window.Android.share('Tuyere diagnosis', t); else if (navigator.share) navigator.share({ title: 'Tuyere diagnosis', text: t }).catch(function () { }); else if (navigator.clipboard) navigator.clipboard.writeText(t).then(function () { alert('Report copied. Paste it into WhatsApp or e-mail.'); }); }
    if (g === 'log') { var n = parseInt(DG.tno, 10); if (!(n >= 1 && n <= LOG.n)) { alert('Enter a tuyere number between 1 and ' + LOG.n + ' in step 2 first.'); return; }
      var R = analyse(), main = DG.sel.slice().sort(function (a, b) { return BY[b].sev - BY[a].sev; })[0], row = LOG.rows[n - 1];
      row.look = R.primary === 'Water leak likely' ? 'leak' : main; if (DG.dfNow) row.df = DG.dfNow; if (DG.dtNow) row.dt = DG.dtNow;
      row.rm = 'Diagnosis: ' + R.primary + (R.also.length ? ' + ' + R.also.join(', ') : ''); saveLog(); location.hash = 'log'; }
  }

  /* ---------- routing ---------- */
  function route() { var h = (location.hash || '').slice(1);
    if (h.indexOf('look/') === 0 && BY[h.slice(5)]) { st.view = 'looks'; st.id = h.slice(5); }
    else if (h === 'log' || h === 'leak' || h === 'diag') { st.view = h; st.id = null; } else { st.view = 'looks'; st.id = null; } }
  function render() {
    var m = document.getElementById('main'), sign = m.querySelector('.pm-sign');
    m.innerHTML = st.view === 'diag' ? vDiag() : st.view === 'log' ? vLog() : st.view === 'leak' ? vLeak() : st.id ? vDetail(BY[st.id]) : vLooks();
    if (sign) m.appendChild(sign);
    [].forEach.call(document.querySelectorAll('#tabs button'), function (b) { b.setAttribute('aria-selected', b.getAttribute('data-v') === st.view ? 'true' : 'false'); });
    document.getElementById('q').style.display = st.view === 'looks' ? '' : 'none';
    arm();
  }
  document.getElementById('tabs').addEventListener('click', function (e) { var v = e.target.getAttribute && e.target.getAttribute('data-v'); if (!v) return; location.hash = v; });
  document.getElementById('q').addEventListener('input', function (e) { st.q = e.target.value.trim(); if (st.id) { st.id = null; try { history.replaceState(null, '', '#looks'); } catch (x) { } } render(); });
  document.getElementById('cob').checked = st.cob;
  document.getElementById('cob').addEventListener('change', function (e) { st.cob = e.target.checked; ls('tuy.cobalt', st.cob); render(); });
  var main = document.getElementById('main');
  main.addEventListener('click', function (e) {
    var c = e.target.closest && e.target.closest('.card'); if (c && st.view !== 'diag') { location.hash = 'look/' + c.getAttribute('data-id'); return; }
    var f = e.target.closest && e.target.closest('[data-s]'); if (f) { st.sev = +f.getAttribute('data-s'); render(); return; }
    if (st.view === 'log') onLogClick(e);
    if (st.view === 'diag') onDiagClick(e);
  });
  main.addEventListener('input', function (e) { if (st.view === 'log') onLogInput(e); if (st.view === 'diag') onDiagInput(e); });
  main.addEventListener('change', function (e) { if (st.view === 'log') onLogInput(e); if (st.view === 'diag') onDiagInput(e); });
  window.addEventListener('hashchange', function () { route(); render(); window.scrollTo(0, 0); });
  document.addEventListener('click', function (e) { var a = e.target.closest && e.target.closest('[data-pre]'); if (a) { DG.sel = [a.getAttribute('data-pre')]; DG.done = false; saveDG(); } }, true);
  route(); render();
})();
