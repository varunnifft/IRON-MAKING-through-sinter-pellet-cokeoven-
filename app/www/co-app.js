/* BF Cost Optimiser — BF_Fuel_PCI_Optimisation_Model_PCI220_CSR0075_v2.xlsx run in the app (XLCalc, every formula of the
   workbook). Inputs already held in the BF Model (Batch chemistry, Burden calculator, Furnace 3D view, Hearth liquid
   prediction) are taken from there; only the rest is asked. */
(function () {
  'use strict';
  var CO = window.CO, X = window.XLCalc, book = new X.Book(CO.model), KEY = 'co.state.v1';
  var REFX = 'BF_Cost_Optimiser_Reference.xlsx', TPL = 'BF_Cost_Optimiser_Input_Template.xlsx', XMIME = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  function $(s, el) { return (el || document).querySelector(s); }
  function $$(s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function blank(v) { return v === undefined || v === null || (typeof v === 'string' && v.trim() === '') || (typeof v === 'number' && isNaN(v)); }
  function num(v) { return typeof v === 'number' && isFinite(v); }
  function toast(m) { var t = $('#toast'); t.textContent = m; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove('show'); }, 2800); }
  function f(v, d) { if (typeof v === 'string') return esc(v); if (v == null || !isFinite(v)) return '<span class="dash">—</span>'; return (+v).toLocaleString('en-IN', { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 }); }
  function G(sh, a) { try { var v = book.get(sh, a); return X.isErr(v) ? String(v) : v; } catch (e) { return NaN; } }

  // ---------------- input catalogue (same cells as the workbook) ----------------
  var IN = [];   // {k:'Inputs!D28', s, l, u, ref, n, app, mat?, zero?}
  CO.mats.forEach(function (m) {
    CO.matCols.forEach(function (c, j) {
      var col = String.fromCharCode(68 + j);   // D..P
      IN.push({ k: 'Inputs!' + col + m.r, s: '1. Burden per charge and chemistry', mat: m.key, matName: m.name, col: c, l: m.name + ' · ' + CO.matHead[j], u: j === 0 ? 'kg/charge' : '%', ref: m.ref[j], zero: true });
    });
  });
  CO.defs.forEach(function (d) { IN.push({ k: 'Inputs!' + d.c, s: d.s, l: d.l, u: d.u, ref: d.ref, n: d.n, app: d.app }); });
  CO.coef.forEach(function (d) { IN.push({ k: 'Coefficients!' + d.c, s: '7. Fuel-rate coefficients (calibration)', l: d.l, u: d.u, ref: d.ref, n: [d.ty ? 'typical ' + d.ty : '', d.mean, d.n].filter(Boolean).join(' · '), coef: true }); });
  var BYK = {}; IN.forEach(function (d) { BYK[d.k] = d; });
  var TRIAL = CO.trial.map(function (t) { return { k: 'Scenarios!' + t.c, l: t.l, u: t.u, ref: t.ref }; });

  function load() { try { var s = JSON.parse(localStorage.getItem(KEY) || 'null'); if (s && s.final) return s; } catch (e) { } return null; }
  var S = load() || { mode: 'reference', inputMode: 'manual', step: 1, form: {}, raw: null, items: [], fileName: '', final: {}, src: {}, trial: {} };
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { } }

  // ---------------- values held on the other BF Model pages ----------------
  function rd(k) { try { var t = localStorage.getItem(k); return t ? JSON.parse(t) : null; } catch (e) { return null; } }
  function chem() {
    var E = window.BurdenEngine; if (!E) return null; var t = null; try { t = localStorage.getItem('sspl_bf_burden_v1'); } catch (e) { } if (!t) return null;
    try {
      var st = JSON.parse(t, function (k, v) { if (v && typeof v === 'object' && typeof v.__d === 'string') { var p = v.__d.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); } return v; });
      if (!st || st.version !== 1) return null;
      if (!st.lab || (!st.lab.bf && !st.lab.importedOn)) st.lab = E.emptyLab(); st.lab = E.migrateLab(st.lab); if (!st.charge) st.charge = E.chargeDefault();
      st.params = Object.assign({}, E.PARAMS_DEFAULT, st.params); st.matSource = st.matSource || {}; st.manual = st.manual || {}; st.targets = Object.assign({}, (E.defaultState() || {}).targets, st.targets);
      if (st.charge && st.charge.on) E.applyCharge(st);
      return { st: st, rv: E.review(st) };
    } catch (e) { return null; }
  }
  var SH = {};
  function shared() {
    SH = {}; var put = function (k, v, from, dp) { if (num(+v) && v !== '' && v !== null && !SH[k]) SH[k] = { v: +(+v).toFixed(dp == null ? 4 : dp), from: from }; };
    var C = chem(), CAL = rd('bfbm-calculator-v1'), ST = rd('bf-inside-v1'), TV = (ST && ST.v) || {}, HS = rd('hl2.state.v1'), HU = {};
    if (HS && HS.mode === 'user' && HS.final && HS.src) Object.keys(HS.src).forEach(function (k) { if (HS.src[k] === 'user') HU[k] = HS.final[k]; });
    var BC = 'Batch chemistry', CL = 'Burden calculator', FV = 'Furnace 3D view', HL = 'Hearth liquid prediction';
    if (C) {
      C.rv.forEach(function (row, i) {
        var m = CO.mats[i]; if (!m || m.key !== row.m.key) return;
        put('Inputs!D' + m.r, C.st.qty[i], BC, 2);
        (row.used || []).forEach(function (v, j) { put('Inputs!' + String.fromCharCode(69 + j) + m.r, v, BC, 4); });
      });
      var P = C.st.params, T = C.st.targets || {};
      [['D28', P.si], ['D29', P.feRec], ['D30', P.feHM], ['D31', P.hmC], ['D32', P.mnRec], ['D33', P.pRec], ['D34', P.minor], ['D35', P.chPerHour], ['D36', P.blastVol], ['D37', P.o2Flow], ['D38', P.o2Purity], ['D39', P.blastMoist],
        ['D82', T.b2], ['D83', T.slagMax], ['D84', T.al2o3Max]].forEach(function (x) { put('Inputs!' + x[0], x[1], BC); });
    }
    if (CAL && CAL.f) { var F = CAL.f; put('Inputs!D36', F.BV, CL); put('Inputs!D55', F.throatD, CL); put('Inputs!D56', F.hearthD, CL); }
    [['D36', 'BV'], ['D37', 'O2'], ['D38', 'O2pur'], ['D39', 'W'], ['D40', 'HBT'], ['D44', 'coalC'], ['D47', 'coalM'], ['D48', 'coalAsh'], ['D49', 'coalVM'], ['D51', 'csr'], ['D52', 'cri'], ['D53', 'm40'], ['D54', 'm10'],
      ['D55', 'throatD'], ['D56', 'hearthD'], ['D57', 'bdC'], ['D58', 'nTap']].forEach(function (x) { if (TV[x[1]] !== '' && TV[x[1]] != null) put('Inputs!' + x[0], +TV[x[1]], FV); });
    [['D59', 'MaxDur'], ['D60', 'Gap'], ['D61', 'H_tt'], ['D56', 'D_hearth'], ['D58', 'N_TH']].forEach(function (x) { if (HU[x[1]] != null) put('Inputs!' + x[0], HU[x[1]], HL); });
    Object.keys(SH).forEach(function (k) { if (!BYK[k]) delete SH[k]; });
    return SH;
  }

  // ---------------- model ----------------
  var need = [], R = null;
  function valueOf(d) {
    if (SH[d.k]) return SH[d.k].v;
    if (S.mode === 'reference') return d.ref;
    var v = S.final[d.k]; if (v === undefined) return d.ref;
    return v;
  }
  function compute() {
    shared(); need = []; book.clearOverrides();
    IN.forEach(function (d) {
      var v = valueOf(d);
      if (blank(v)) { if (d.zero) v = 0; else { need.push(d); return; } }
      var i = d.k.indexOf('!'); book.set(d.k.slice(0, i), d.k.slice(i + 1), +v);
    });
    TRIAL.forEach(function (t) { var v = S.trial[t.k]; var i = t.k.indexOf('!'); book.set(t.k.slice(0, i), t.k.slice(i + 1), blank(v) ? t.ref : +v); });
    R = need.length ? null : true;
  }

  // ---------------- navigation ----------------
  var TITLES = { dash: 'BF cost optimiser', input: 'Inputs', curve: 'PCI cost curve', act: 'Actions', tap: 'Tapping & charging', guide: 'User guide' }, cur = 'dash';
  function go(p, noPush) {
    if (cur === 'input') { try { readForm(); } catch (e) { } }
    cur = p; $$('.page').forEach(function (s) { s.classList.toggle('on', s.id === 'p-' + p); });
    $$('nav.bn button[data-p]').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-p') === p); });
    $('#ttl').textContent = TITLES[p];
    var el = $('#p-' + p); if (p !== 'input' && p !== 'guide') el.innerHTML = '<div class="card"><p class="sub">Calculating all 44,000 cells of the model…</p></div>';
    setTimeout(function () { compute(); ({ dash: renderDash, input: renderInput, curve: renderCurve, act: renderAct, tap: renderTap, guide: renderGuide })[p](); }, 30);
    if (!noPush) { try { history.pushState({ p: p }, '', '#' + p); } catch (e) { } }
    window.scrollTo(0, 0);
  }
  window.addEventListener('popstate', function (e) { go((e.state && e.state.p) || 'dash', true); });
  $$('nav.bn button[data-p]').forEach(function (b) { b.onclick = function () { go(b.getAttribute('data-p')); }; });
  $('#back').onclick = function () { if (cur === 'dash') location.href = 'index.html'; else history.back(); };
  window.appBack = function () { if (cur !== 'dash') { history.back(); return true; } location.href = 'index.html'; return true; };

  function stateLine() {
    var ns = Object.keys(SH).length, nu = Object.keys(S.src).filter(function (k) { return S.src[k] === 'user'; }).length;
    return '<div class="state">' + (S.mode === 'reference' ? '<span class="pill ref">REFERENCE</span>example furnace and placeholder prices' : '<span class="pill user">' + nu + ' your values</span>' + (S.fileName ? esc(S.fileName) : 'entered manually')) +
      (ns ? '<span class="pill OK">' + ns + ' from BF Model pages</span>' : '') + '</div>';
  }
  function noData() { return stateLine() + '<div class="card"><h3>Inputs needed</h3><p class="sub">No value yet for: ' + esc(need.slice(0, 12).map(function (d) { return d.l; }).join(', ')) + (need.length > 12 ? ' and ' + (need.length - 12) + ' more' : '') + '.</p><button class="btn pri" data-go="input">Open Inputs ›</button></div>'; }
  function bindGo(el) { $$('[data-go]', el).forEach(function (b) { b.onclick = function () { go(b.getAttribute('data-go')); }; }); }
  function kc(l, v, u, st, m) {
    var c = st === 'OK' ? 'var(--ok)' : st === 'WATCH' ? 'var(--watch)' : st === 'ALARM' ? 'var(--alarm)' : 'var(--muted)';
    return '<div class="k" style="--c:' + c + '"><div class="l">' + l + '</div><div class="v">' + v + '<small>' + esc(u) + '</small></div><div class="s">' + (st ? '<span class="pill ' + st + '">' + st + '</span>' : '') + '</div><div class="m">' + m + '</div></div>';
  }

  // ---------------- results ----------------
  var DROWS = [[5, 0], [6, 2], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 1], [13, 1], [14, 1], [15, 3], [16, 1], [17, 0], [18, 0], [19, 0], [20, 0], [21, 0], [22, 0], [23, 0], [24, 0], [25, 0], [26, 2], [27, 2], [28, 2], [29, 3], [30, 2]];
  function renderDash() {
    var el = $('#p-dash');
    var h = '<div class="hero"><div><div class="eb">Blast furnace · fuel, PCI &amp; cost</div><h1>BF cost <span>optimiser</span></h1><p>Cost of hot metal and fuel rate for your furnace, then the cheapest route: blast conditioning, burden mix, and the highest PCI with oxygen that meets every operating limit.</p>' +
      '<div class="row2" style="margin-top:10px"><button class="btn pri sm" data-go="input">Inputs</button><button class="btn sm" data-go="curve">PCI cost curve</button><button class="btn sm" data-go="act">Actions ›</button></div></div></div>';
    if (!R) { el.innerHTML = h + noData(); bindGo(el); return; }
    var base = G('Dashboard', 'C22'), opt = G('Dashboard', 'F22'), ok = G('Dashboard', 'F23') === 1, status = G('Dashboard', 'C32');
    h += stateLine() + '<div class="kgrid">' +
      kc('Optimum cost of hot metal', f(opt, 0), 'Rs/tHM', ok ? 'OK' : 'WATCH', 'Base case ' + f(base, 0) + ' Rs/tHM · ' + f(G('Dashboard', 'F25'), 0) + ' Rs/tHM') +
      kc('Saving per year', f(G('Dashboard', 'F26'), 1), 'Rs crore', G('Dashboard', 'F26') > 0 ? 'OK' : '', 'At the optimum production of ' + f(G('Dashboard', 'F18'), 0) + ' tHM/day') +
      kc('Optimum PCI', f(G('Dashboard', 'F5'), 0), 'kg/tHM', '', 'With O2 enrichment ' + f(G('Dashboard', 'F6'), 2) + ' % · base ' + f(G('Dashboard', 'C5'), 0) + ' kg/tHM') +
      kc('Highest PCI meeting every limit', f(G('Dashboard', 'C33'), 0), 'kg/tHM', '', 'Any O2 level') +
      kc('Highest PCI the coke CSR allows', f(G('Dashboard', 'C34'), 1), 'kg/tHM', G('Dashboard', 'C34') < G('Dashboard', 'C5') ? 'WATCH' : 'OK', 'CSR needed for the PCI plant maximum: ' + f(G('Optimiser', 'B20'), 1) + ' %') +
      kc('Base case limits', G('Dashboard', 'C23') === 1 ? 'Met' : 'Not met', '', G('Dashboard', 'C23') === 1 ? 'OK' : 'ALARM', 'First limit violated: ' + esc(G('Dashboard', 'C24'))) + '</div>' +
      '<div class="card"><p class="sub" style="margin:0"><b>Optimiser:</b> ' + esc(status) + '</p></div>';
    var cols = ['C', 'F', 'D', 'E', 'G'], heads = ['Base case', 'OPTIMUM (step 3)', 'Step 1 blast', 'Step 2 + mix', 'Your trial'];
    h += '<div class="card"><h3>Step by step from your base case to the optimum</h3><p class="sub">Step 1: hot blast up, moisture and Si down. Step 2: + best sinter/pellet/lump ore mix. Step 3: + the highest economic PCI with oxygen. Your trial: any combination you set below.</p><div class="scroll"><table class="tbl cot"><tr><th>Result</th>' + heads.map(function (x, i) { return '<th' + (i === 1 ? ' class="opt"' : '') + '>' + x + '</th>'; }).join('') + '</tr>' +
      DROWS.map(function (r) {
        var lab = G('Dashboard', 'A' + r[0]), u = G('Dashboard', 'B' + r[0]), big = /TOTAL|BOSH/.test(String(lab));
        return '<tr' + (big ? ' class="big"' : '') + '><td>' + esc(lab) + (u && u !== '0' ? ' <small>' + esc(u) + '</small>' : '') + '</td>' + cols.map(function (c, i) {
          var v = G('Dashboard', c + r[0]), cls = i === 1 ? 'opt' : '';
          if (r[0] === 23) v = v === 1 ? '✓ yes' : '✗ no';
          var bad = (r[0] === 23 && G('Dashboard', c + 23) !== 1) || (r[0] === 24 && v !== 'none');
          return '<td class="n ' + cls + '"' + (bad ? ' style="color:var(--alarm)"' : '') + '>' + f(v, r[1]) + '</td>';
        }).join('') + '</tr>';
      }).join('') + '</table></div></div>';
    h += '<div class="card"><h3>Your trial</h3><p class="sub">Change any lever and see the result in the last column.</p><div class="gis">' + TRIAL.map(function (t) { var v = S.trial[t.k]; return '<label class="gi"><span>' + esc(t.l) + '<small>' + esc(t.u) + '</small></span><input inputmode="decimal" data-tr="' + t.k + '" placeholder="' + esc(t.ref) + '" value="' + esc(v == null ? '' : v) + '"></label>'; }).join('') +
      '</div><div class="row2" style="margin-top:10px"><button class="btn pri" id="trRun">▶ Run trial</button><button class="btn" id="trOpt">Copy the optimum</button><button class="btn" id="trClr">Reset</button></div></div>' +
      '<div class="row2"><button class="btn" id="dExp">⤓ Export results (.xlsx)</button><a class="btn" href="bf-home.html">BF Model ›</a></div><p class="foot">BF cost optimiser · Iron Making 5.9</p>';
    el.innerHTML = h; bindGo(el); $('#dExp').onclick = exportReport;
    $('#trRun').onclick = function () { $$('#p-dash [data-tr]').forEach(function (i) { var v = i.value.trim(); if (v === '') delete S.trial[i.getAttribute('data-tr')]; else if (isFinite(+v)) S.trial[i.getAttribute('data-tr')] = +v; }); save(); go('dash', true); toast('Trial calculated'); };
    $('#trOpt').onclick = function () { var map = { G7: 'F9', G8: 'F10', G9: 'F5', G10: 'F6', G11: 'F7', G12: 'F8', G14: 'F13' }; Object.keys(map).forEach(function (g) { var v = G('Dashboard', map[g]); if (num(v)) S.trial['Scenarios!' + g] = +v.toFixed(2); }); save(); go('dash', true); };
    $('#trClr').onclick = function () { S.trial = {}; save(); go('dash', true); };
  }

  // ---------------- cost curve ----------------
  function renderCurve() {
    var el = $('#p-curve'); if (!R) { el.innerHTML = noData(); bindGo(el); return; }
    var rows = []; for (var r = 25; r <= 40; r++) rows.push(r);
    var pts = rows.map(function (r) { return [G('Optimiser', 'A' + r), G('Optimiser', 'B' + r), G('Optimiser', 'I' + r)]; });
    var W = 360, H = 240, L = 54, Rr = 12, T = 14, B = 36, xs = pts.map(function (p) { return p[0]; }), ys = [];
    pts.forEach(function (p) { if (num(p[1])) ys.push(p[1]); if (num(p[2])) ys.push(p[2]); });
    var svg = '';
    if (ys.length && xs.every(num)) {
      var x0 = Math.min.apply(null, xs), x1 = Math.max.apply(null, xs), y0 = Math.min.apply(null, ys), y1 = Math.max.apply(null, ys), pad = (y1 - y0) * 0.1 || 50; y0 -= pad; y1 += pad;
      var px = function (x) { return L + (x - x0) / (x1 - x0 || 1) * (W - L - Rr); }, py = function (y) { return H - B - (y - y0) / (y1 - y0) * (H - T - B); };
      var line = function (i, c, dash) { var d = '', on = false; pts.forEach(function (p) { if (num(p[i])) { d += (on ? 'L' : 'M') + px(p[0]).toFixed(1) + ' ' + py(p[i]).toFixed(1); on = true; } else on = false; }); return '<path d="' + d + '" fill="none" stroke="' + c + '" stroke-width="2.4"' + (dash ? ' stroke-dasharray="5 4"' : '') + '/>'; };
      var g = ''; for (var k = 0; k <= 4; k++) { var yv = y0 + (y1 - y0) * k / 4; g += '<line class="gl" x1="' + L + '" x2="' + (W - Rr) + '" y1="' + py(yv) + '" y2="' + py(yv) + '"/><text x="' + (L - 5) + '" y="' + (py(yv) + 4) + '" text-anchor="end">' + Math.round(yv).toLocaleString('en-IN') + '</text>'; }
      pts.forEach(function (p, i) { if (i % 3 === 0) g += '<text x="' + px(p[0]) + '" y="' + (H - B + 14) + '" text-anchor="middle">' + Math.round(p[0]) + '</text>'; });
      var opx = G('Optimiser', 'B16'), opy = G('Optimiser', 'B13'), mk = num(opx) && num(opy) ? '<circle cx="' + px(opx) + '" cy="' + py(opy) + '" r="5" fill="#19b3b1"/><text x="' + px(opx) + '" y="' + (py(opy) - 9) + '" text-anchor="middle" style="fill:#9fe6e3">optimum</text>' : '';
      svg = '<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '">' + g + line(2, '#ffb547', true) + line(1, '#ff7a1a') + mk + '<text x="' + ((L + W - Rr) / 2) + '" y="' + (H - 4) + '" text-anchor="middle">PCI rate, kg/tHM</text><text transform="translate(11 ' + ((T + H - B) / 2) + ') rotate(-90)" text-anchor="middle">Total cost, Rs/tHM</text></svg>' +
        '<div class="legend"><span style="--c:#ff7a1a">Cheapest O2 meeting every limit</span><span style="--c:#ffb547">Best O2 with RAFT in limits (other limits ignored)</span></div>';
    }
    var hd = ['PCI kg/tHM', 'Lowest total cost Rs/tHM', 'O2 at that cost %', 'Coke rate kg/tHM', 'Fuel rate kg/tHM', 'RAFT °C', 'Production tHM/day', 'Lowest O2 for RAFT ≥ min %', 'Cost if coke CSR were enough', 'Saving from better coke'];
    var cl = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K'], dp = [0, 0, 1, 1, 1, 0, 0, 1, 0, 0];
    var tb = '<div class="scroll"><table class="tbl tt"><tr>' + hd.map(function (x) { return '<th>' + x + '</th>'; }).join('') + '</tr>' + rows.map(function (r) { var best = G('Optimiser', 'A' + r) === G('Optimiser', 'B16'); return '<tr' + (best ? ' class="cast"' : '') + '>' + cl.map(function (c, i) { return '<td class="n">' + f(G('Optimiser', c + r), dp[i]) + '</td>'; }).join('') + '</tr>'; }).join('') + '</table></div>';
    var st = [[4, 'Stage 1 · burden mix'], [5, 'Lowest cost found', 'Rs/tHM', 0], [7, 'Feasible mix found', '', 0], [8, 'Best sinter share', '%', 0], [9, 'Best pellet share', '%', 0], [10, 'Best lump ore share', '%', 0], [12, 'Stage 2 · PCI and oxygen'], [13, 'Lowest cost found', 'Rs/tHM', 0], [15, 'Feasible case found', '', 0], [16, 'Optimum PCI', 'kg/tHM', 0], [17, 'Optimum O2 enrichment', '%', 2], [18, 'Highest PCI meeting every limit', 'kg/tHM', 0], [19, 'Highest PCI the coke CSR allows', 'kg/tHM', 1], [20, 'CSR needed for the maximum PCI capacity', '%', 2], [21, 'Status', '', 0]];
    var sum = st.map(function (x) { if (x.length === 2) return '<div class="grp2">' + x[1] + '</div>'; var v = G('Optimiser', 'B' + x[0]); if (x[0] === 7 || x[0] === 15) v = v === 1 ? 'yes' : 'no'; return '<div class="kv"><span>' + x[1] + '</span><b>' + f(v, x[3]) + ' <small>' + x[2] + '</small></b></div>'; }).join('');
    el.innerHTML = stateLine() + '<div class="card"><h3>Cost of hot metal against PCI</h3><p class="sub">For each PCI rate, the cheapest oxygen level that meets every limit. Where the line stops, no oxygen level meets all limits.</p>' + svg + '</div>' +
      '<div class="card"><h3>Optimiser summary</h3>' + sum + '</div><div class="card"><h3>PCI grid</h3>' + tb + '</div>';
  }

  // ---------------- actions ----------------
  function renderAct() {
    var el = $('#p-act'); if (!R) { el.innerHTML = noData(); bindGo(el); return; }
    var h = stateLine() + '<div class="card"><h3>Suggested actions (from your data)</h3><p class="sub">Each lever: today, at the optimum, and what to do.</p></div>';
    for (var r = 5; r <= 16; r++) {
      var b = G('Recommendations', 'C' + r), o = G('Recommendations', 'D' + r);
      h += '<div class="card act"><div class="an">' + G('Recommendations', 'A' + r) + '</div><h3>' + esc(G('Recommendations', 'B' + r)) + '</h3><div class="ab"><span>Base <b>' + f(b, num(b) && Math.abs(b) < 10 ? 2 : 0) + '</b></span><span>Optimum <b>' + f(o, num(o) && Math.abs(o) < 10 ? 2 : 0) + '</b></span></div><p>' + esc(G('Recommendations', 'E' + r)) + '</p></div>';
    }
    h += '<div class="card"><h3>Good practice that supports high PCI</h3><p class="sub">From the literature; not quantified by the model.</p>' + CO.good.map(function (g) { return '<details class="fs gd"><summary>' + esc(g[0]) + ' · ' + esc(String(g[1]).slice(0, 70)) + (String(g[1]).length > 70 ? '…' : '') + '</summary><div class="fb"><p>' + esc(g[1]) + '</p><p class="sub"><b>Why:</b> ' + esc(g[2]) + '</p><p class="sub"><b>Target:</b> ' + esc(g[3]) + '</p><p class="sub">' + esc(g[4]) + '</p></div></details>'; }).join('') + '</div>';
    el.innerHTML = h;
  }

  // ---------------- tapping ----------------
  function renderTap() {
    var el = $('#p-tap'); if (!R) { el.innerHTML = noData(); bindGo(el); return; }
    var rows = []; for (var r = 5; r <= 19; r++) if (G('Tapping_Distribution', 'A' + r)) rows.push(r);
    el.innerHTML = stateLine() + '<div class="card"><h3>Tapping practice and burden distribution</h3><p class="sub">More PCI and oxygen mean more production and a thinner coke layer: tapping and charging must follow.</p><div class="scroll"><table class="tbl gt"><tr><th>Item</th><th>Base</th><th>Optimum</th><th>Guide / action</th></tr>' +
      rows.map(function (r) { var c = G('Tapping_Distribution', 'C' + r), d = G('Tapping_Distribution', 'D' + r), u = G('Tapping_Distribution', 'B' + r); var dp = num(c) && Math.abs(c) < 10 ? 3 : num(c) && Math.abs(c) < 100 ? 1 : 0;
        return '<tr><td>' + esc(G('Tapping_Distribution', 'A' + r)) + (u ? ' <small>' + esc(u) + '</small>' : '') + '</td><td class="n">' + f(c, dp) + '</td><td class="n">' + f(d, dp) + '</td><td>' + esc(G('Tapping_Distribution', 'E' + r) || '') + '</td></tr>'; }).join('') + '</table></div>' +
      '<div class="row2" style="margin-top:10px"><a class="btn" href="hearth-liquid.html">Hearth liquid prediction ›</a></div></div>';
  }

  // ---------------- guide ----------------
  function renderGuide() {
    var sec = function (t, b) { return '<details class="fs gd"><summary>' + t + '</summary><div class="fb">' + b + '</div></details>'; };
    $('#p-guide').innerHTML = '<div class="card"><h3>User guide · BF cost optimiser</h3><p class="sub">Built on BF_Fuel_PCI_Optimisation_Model_PCI220_CSR0075_v2.xlsx. Every formula of the workbook runs in the app.</p></div>' +
      sec('1. What it tells you', '<ul class="how"><li><b>Cost of hot metal</b> (Rs/tHM) and fuel rate of your base case.</li><li><b>Step 1</b>: blast conditioning (higher hot blast, lower moisture and Si). <b>Step 2</b>: best sinter / pellet / lump ore mix. <b>Step 3</b>: the highest economic PCI with oxygen, the optimum.</li><li>Every case is checked against your limits: RAFT, slag rate and Al2O3, minimum coke rate, oxygen, PCI plant, burden shares, coke layer, stove temperature, plant capacity.</li><li>The highest PCI your coke CSR allows, and the CSR needed for more.</li><li>Actions to reach the optimum, and the tapping and charging changes it needs.</li></ul>') +
      sec('2. How to use it', '<ol class="how">' + CO.how.slice(0, 5).map(function (x) { return '<li>' + esc(String(x).replace(/^\d\.\s*/, '')) + '</li>'; }).join('') + '</ol><p class="sub">In the app: inputs already in the BF Model (Batch chemistry charge and analysis, Burden calculator, Furnace 3D view, Hearth liquid prediction) are filled automatically and not asked again. Enter your prices, limits and the rest on Inputs.</p>') +
      sec('3. How the fuel model works', '<ol class="how">' + CO.coefHow.slice(1, 8).filter(Boolean).map(function (x) { return '<li>' + esc(String(x).replace(/^\d\.\s*/, '')) + '</li>'; }).join('') + '</ol>') +
      sec('4. Reading the tabs', '<ul class="how"><li><b>Results</b>: key numbers, the step-by-step table and your trial.</li><li><b>Curve</b>: cost against PCI and the optimiser summary.</li><li><b>Actions</b>: what to change, lever by lever, plus good practice.</li><li><b>Tapping</b>: production, liquid per hour, tapping rate, coke layer at the throat.</li><li><b>Inputs</b>: all inputs, upload or manual, with shared values listed.</li></ul>') +
      sec('5. Limits of the model', '<p>' + esc(CO.how[6] || '') + '</p><p class="sub">Calibrate the fuel-rate coefficients (Inputs → section 7) to your furnace before using the savings for decisions. Prices are placeholders until you enter yours.</p>') +
      '<div class="row2"><a class="btn" href="know-inputs.html#bf">Know your inputs ›</a><a class="btn" href="bf-home.html">BF Model ›</a></div>';
    var d = $('#p-guide details'); if (d) d.open = true;
  }

  // ---------------- inputs ----------------
  function renderInput() {
    shared(); var st = S.step === 2 && S.raw ? 2 : 1, el = $('#p-input');
    el.innerHTML = '<div class="steps"><button data-s="1" class="' + (st === 1 ? 'on' : '') + '"><i>1</i>Inputs</button><button data-s="2" class="' + (st === 2 ? 'on' : '') + '"><i>2</i>Review &amp; fill missing</button><button data-s="3"><i>3</i>Results</button></div>' + (st === 1 ? step1() : step2());
    $$('.steps button', el).forEach(function (b) { b.onclick = function () {
      var n = +b.getAttribute('data-s'); if (st === 1 && S.inputMode === 'manual') readForm();
      if (n === 3) { if (S.raw) return calc(); return go('dash'); }
      if (n === 2) { if (S.inputMode === 'manual') return toReview(); if (!S.raw) return toast('Upload a file or enter values first'); }
      S.step = n; save(); renderInput();
    }; });
    if (st === 1) bind1(); else bind2();
  }
  function cur0(d) { var v = S.form[d.k]; if (v === undefined) { var w = S.mode === 'reference' ? null : S.final[d.k]; return w == null ? '' : w; } return v; }
  function linkedBox() {
    var ks = Object.keys(SH); if (!ks.length) return '<div class="card"><p class="sub" style="margin:0">Nothing is filled from the BF Model yet. Inputs you enter in Batch chemistry, Burden calculator, Furnace 3D view or Hearth liquid prediction will be used here automatically.</p></div>';
    var by = {}; ks.forEach(function (k) { (by[SH[k].from] = by[SH[k].from] || []).push(k); });
    return '<details class="fs"><summary>From the BF Model pages<span>' + ks.length + ' inputs, not asked again</span></summary><div class="fb"><p class="sub" style="margin:8px 0">Each value is entered once. Change these on the page named.</p>' +
      Object.keys(by).map(function (fr) { return '<div class="grp2">' + esc(fr) + ' · ' + by[fr].length + '</div><div class="scroll"><table class="tbl">' + by[fr].map(function (k) { return '<tr><td>' + esc(BYK[k].l) + '</td><td class="n">' + f(SH[k].v, Math.abs(SH[k].v) < 100 ? 2 : 0) + ' <small>' + esc(BYK[k].u) + '</small></td></tr>'; }).join('') + '</table></div>'; }).join('') + '</div></details>';
  }
  function step1() {
    var m = S.inputMode;
    var h = '<div class="card"><h3>Cost optimiser inputs</h3><p class="sub">The same cells as the Inputs, Coefficients and Scenarios sheets of the model workbook. Values already in the BF Model are taken from there. Leave blank what you do not know; the next step lists it.</p>' +
      '<div class="opts"><button class="opt' + (m === 'upload' ? ' on' : '') + '" data-m="upload"><b>Upload Excel</b><small>The model workbook (or the template) filled with your data</small></button><button class="opt' + (m === 'manual' ? ' on' : '') + '" data-m="manual"><b>Enter manually</b><small>Prices, limits and the inputs not in the BF Model</small></button></div>';
    if (m === 'upload') h += '<button class="drop" id="drop"><b>Tap to choose the Excel file</b><small>.xlsx · Inputs sheet (Coefficients and Scenarios optional)</small></button><p class="sub" style="margin:8px 0 0">' + (S.raw && S.fileName ? 'Loaded: <b>' + esc(S.fileName) + '</b> · ' + countUser(S.raw) + ' values · ' + S.items.length + ' missing' : 'No file loaded yet.') + '</p>';
    h += '<div class="links"><button class="lk" data-dl="ref">⤓ Download ' + esc(REFX) + ' <span class="pill ref">reference</span></button><button class="lk" data-dl="blank">⤓ Download blank ' + esc(TPL) + '</button><button class="lk" id="useRef">↺ Use reference data for everything</button></div></div>';
    h += linkedBox();
    if (m === 'manual') {
      var mats = CO.mats.filter(function (mm) { return CO.matCols.some(function (c, j) { return !SH['Inputs!' + String.fromCharCode(68 + j) + mm.r]; }); });
      if (mats.length) h += '<details class="fs"><summary>1. Burden per charge and chemistry<span>' + mats.length + ' materials · blank = not used</span></summary><div class="fb"><p class="sub">Qty per charge (wet) and analysis (% dry; moisture as received). Usually filled from Batch chemistry.</p>' +
        mats.map(function (mm) { return '<details class="fs mt"><summary>' + esc(mm.name) + '<span>' + esc(mm.group) + '</span></summary><div class="fb gis">' + CO.matCols.map(function (c, j) { var k = 'Inputs!' + String.fromCharCode(68 + j) + mm.r; if (SH[k]) return ''; var d = BYK[k], v = cur0(d); return '<label class="gi"><span>' + esc(CO.matHead[j]) + '</span><input inputmode="decimal" data-k="' + k + '" placeholder="' + esc(d.ref) + '" value="' + esc(v) + '"></label>'; }).join('') + '</div></details>'; }).join('') + '</div></details>';
      var groups = {}, order = []; IN.forEach(function (d) { if (d.mat || SH[d.k]) return; if (!groups[d.s]) { groups[d.s] = []; order.push(d.s); } groups[d.s].push(d); });
      order.forEach(function (g, i) {
        h += '<details class="fs"' + (/^4\./.test(g) ? ' open' : '') + '><summary>' + esc(g) + '<span>' + groups[g].filter(function (d) { return !blank(cur0(d)); }).length + ' / ' + groups[g].length + ' filled</span></summary><div class="fb">' +
          groups[g].map(function (d) { var v = cur0(d); return '<div class="f"><label>' + esc(d.l) + '<small>' + esc(d.u) + (d.app ? ' · ' + esc(d.app) : '') + (d.n ? ' · ' + esc(d.n) : '') + '</small></label><input inputmode="decimal" placeholder="' + esc(d.ref) + '" data-k="' + d.k + '" value="' + esc(v) + '"></div>'; }).join('') + '</div></details>';
      });
      h += '<div class="row2"><button class="btn" id="fillRef">↺ Fill blanks with reference</button><button class="btn pri" id="toRev">Review inputs ›</button></div>';
    }
    return h;
  }
  function readForm() { $$('#p-input [data-k]').forEach(function (el) { S.form[el.getAttribute('data-k')] = el.value.trim(); }); save(); }
  function parseV(v) { if (blank(v)) return null; var n = typeof v === 'number' ? v : Number(String(v).replace(/,/g, '')); return isFinite(n) ? n : null; }
  function detect(r) { return IN.filter(function (d) { return !SH[d.k] && r[d.k] == null && !d.mat; }).map(function (d) { return { k: d.k, l: d.l, u: d.u, ref: d.ref, choice: 'take' }; }); }
  function countUser(r) { return Object.keys(r).filter(function (k) { return r[k] != null; }).length; }
  function toReview() {
    readForm(); var r = {};
    IN.forEach(function (d) { if (SH[d.k]) return; var raw = S.form[d.k]; if (raw === undefined && S.mode !== 'reference') raw = S.final[d.k]; r[d.k] = parseV(raw); });
    S.raw = r; S.fileName = ''; S.inputMode = 'manual'; S.items = detect(r); S.step = 2; save(); renderInput(); window.scrollTo(0, 0);
  }
  function bind1() {
    $$('#p-input [data-m]').forEach(function (b) { b.onclick = function () { if (S.inputMode === 'manual') readForm(); S.inputMode = b.getAttribute('data-m'); save(); renderInput(); }; });
    var d = $('#drop'); if (d) d.onclick = function () { var fl = $('#file'); fl.value = ''; fl.click(); };
    $$('#p-input [data-dl]').forEach(function (b) { b.onclick = function () { if (b.getAttribute('data-dl') === 'ref') saveAsset('www/' + REFX, REFX); else template(); }; });
    $('#useRef').onclick = function () { S.mode = 'reference'; S.final = {}; S.src = {}; S.raw = null; S.items = []; S.fileName = ''; S.form = {}; save(); toast('Using reference data'); go('dash'); };
    var fr = $('#fillRef'); if (fr) fr.onclick = function () { readForm(); var n = 0; IN.forEach(function (x) { if (!SH[x.k] && !x.mat && blank(S.form[x.k]) && blank(cur0(x))) { S.form[x.k] = x.ref; n++; } }); save(); renderInput(); toast(n + ' blanks filled with reference values'); };
    var tr = $('#toRev'); if (tr) tr.onclick = toReview;
  }
  function step2() {
    var it = S.items, t = it.filter(function (x) { return x.choice === 'take'; }).length;
    var h = '<div class="card"><h3>Review &amp; fill missing</h3><p class="sub">' + (S.fileName ? 'From <b>' + esc(S.fileName) + '</b>. ' : 'From the manual entry. ') + (it.length ? 'These inputs were not given. Take the reference value, or leave it out (the module will ask again). Blank materials are treated as not used.' : 'All inputs are given.') + '</p>' +
      '<div class="rvsum"><div><b style="color:var(--ok)">' + countUser(S.raw) + '</b><small>your values</small></div><div><b style="color:#ff8a7a">' + t + '</b><small>take reference</small></div><div><b>' + (it.length - t) + '</b><small>don\'t take</small></div></div>' +
      (it.length ? '<div class="row2"><button class="btn sm" id="allT" style="color:#ff8a7a">Take all reference values</button><button class="btn sm" id="allS">Don\'t take any</button></div>' : '') + '</div>';
    if (it.length) h += '<details class="fs" open><summary>Missing<span>' + it.length + '</span></summary><div class="fb">' + it.map(function (x, i) {
      return '<div class="rv"><div class="lb">' + esc(x.l) + '<small>Reference: <b>' + esc(x.ref) + '</b> ' + esc(x.u) + '</small></div><div class="seg"><button class="take' + (x.choice === 'take' ? ' on' : '') + '" data-i="' + i + '" data-c="take">Take reference</button><button class="skip' + (x.choice === 'skip' ? ' on' : '') + '" data-i="' + i + '" data-c="skip">Don\'t take</button></div></div>';
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
    Object.keys(r).forEach(function (k) { fin[k] = r[k]; if (r[k] != null) src[k] = 'user'; });
    S.items.forEach(function (x) { if (x.choice === 'take') { fin[x.k] = BYK[x.k].ref; src[x.k] = 'ref'; } else { fin[x.k] = null; src[x.k] = 'skip'; } });
    S.final = fin; S.src = src; S.mode = 'user'; S.step = 1; S.form = {}; save(); compute();
    toast(need.length ? need.length + ' inputs still needed' : 'Calculated'); go('dash');
  }

  // ---------------- Excel in / out ----------------
  function b64(u8) { var s = '', ch = 0x8000; for (var i = 0; i < u8.length; i += ch) s += String.fromCharCode.apply(null, u8.subarray(i, i + ch)); return btoa(s); }
  function handoff(job) { try { localStorage.setItem('im.save', JSON.stringify(job)); localStorage.setItem('im.route', JSON.stringify({ p: 'www/iz-save.html', t: Date.now() })); } catch (e) { toast('File too large to hand over: ' + e.message); return; } location.href = window.IM_SINTER_URL; }
  function saveBytes(name, u8, mime) {
    if (!(window.AndroidBridge && AndroidBridge.saveFile) && window.Android && window.IM_SINTER_URL) return handoff({ name: name, mime: mime, b64: b64(u8), t: Date.now() });
    if (window.AndroidBridge && AndroidBridge.saveFile) { var r = AndroidBridge.saveFile(name, b64(u8), mime); toast(/^ERROR/.test(r || '') ? r : 'Saved to Downloads: ' + name); return; }
    var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([u8], { type: mime })); a.download = name; document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500); toast('Downloaded ' + name);
  }
  function saveAsset(path, name) {
    if (location.protocol === 'file:') { var l0 = document.createElement('a'); l0.href = path.replace(/^www\//, ''); l0.download = name; document.body.appendChild(l0); l0.click(); setTimeout(function () { l0.remove(); }, 500); return; }
        if (!(window.AndroidBridge && AndroidBridge.saveFile) && window.Android && window.IM_SINTER_URL) return handoff({ asset: path, name: name, mime: XMIME, t: Date.now() });
    var x = new XMLHttpRequest(); x.open('GET', path.replace(/^www\//, ''), true); x.responseType = 'arraybuffer';
    x.onload = function () { if (x.response) saveBytes(name, new Uint8Array(x.response), XMIME); else toast('Could not open ' + name); }; x.onerror = function () { toast('Could not open ' + name); }; x.send();
  }
  function template() {
    var wb = XLSX.utils.book_new(), sheet = function (nm, cells, w) { var ws = {}, maxR = 1; Object.keys(cells).forEach(function (a) { var v = cells[a]; ws[a] = typeof v === 'number' ? { t: 'n', v: v } : { t: 's', v: String(v) }; maxR = Math.max(maxR, +a.replace(/[A-Z]+/, '')); }); ws['!ref'] = 'A1:P' + maxR; if (w) ws['!cols'] = w.map(function (x) { return { wch: x }; }); XLSX.utils.book_append_sheet(wb, ws, nm); };
    var ci = { A1: 'INPUTS – BF cost optimiser (type values in column D; materials in D–P). Same cells as the model workbook.', A6: 'Key', B6: 'Material', C6: 'Group' };
    CO.matHead.forEach(function (hd, j) { ci[String.fromCharCode(68 + j) + '6'] = hd; });
    CO.mats.forEach(function (m) { ci['A' + m.r] = m.key; ci['B' + m.r] = m.name; ci['C' + m.r] = m.group; });
    CO.defs.forEach(function (d) { var r = d.c.slice(1); ci['A' + r] = d.l; ci['E' + r] = d.u; ci['F' + r] = d.app || ''; ci['I' + r] = d.n || ''; });
    sheet('Inputs', ci, [34, 22, 10, 14, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
    var cc = { A4: 'Effect', B4: 'Name', C4: 'Value', D4: 'Unit', E4: 'Typical range' }; CO.coef.forEach(function (d) { var r = d.c.slice(1); cc['A' + r] = d.l; cc['B' + r] = d.name; cc['D' + r] = d.u; cc['E' + r] = d.ty; });
    sheet('Coefficients', cc, [50, 12, 10, 20, 14]);
    var sc = { A4: 'Item', B4: 'Unit', G4: 'Your trial' }; CO.trial.forEach(function (t) { var r = t.c.slice(1); sc['A' + r] = t.l; sc['B' + r] = t.u; });
    sheet('Scenarios', sc, [36, 10, 4, 4, 4, 4, 12]);
    saveBytes(TPL, new Uint8Array(XLSX.write(wb, { type: 'array', bookType: 'xlsx' })), XMIME);
  }
  function readXlsx(u8, name) {
    var wb = XLSX.read(u8, { type: 'array' }), r = {}, hit = 0, cv = function (ws, a) { var c = ws && ws[a]; return c ? c.v : null; };
    if (!wb.Sheets.Inputs) throw new Error('No "Inputs" sheet. Use ' + REFX + ' or ' + TPL + ' from this page.');
    IN.forEach(function (d) { if (SH[d.k]) return; var i = d.k.indexOf('!'), sh = wb.Sheets[d.k.slice(0, i)], a = d.k.slice(i + 1); var c = sh && sh[a]; if (c && c.f) { r[d.k] = null; return; } var v = parseV(cv(sh, a)); r[d.k] = v; if (v != null) hit++; });
    var sc = wb.Sheets.Scenarios; if (sc) TRIAL.forEach(function (t) { var v = parseV(cv(sc, t.k.split('!')[1])); if (v != null) S.trial[t.k] = v; });
    if (!hit) throw new Error('No inputs found in ' + name + '.');
    S.raw = r; S.fileName = name; S.inputMode = 'upload'; S.items = detect(r); S.step = 2; save(); toast('Read ' + hit + ' values from ' + name);
  }
  $('#file').addEventListener('change', function () { var fl = this.files && this.files[0]; if (!fl) return; var fr = new FileReader(); fr.onload = function () { try { readXlsx(new Uint8Array(fr.result), fl.name); renderInput(); } catch (e) { toast(e.message || 'Could not read the file'); } }; fr.readAsArrayBuffer(fl); });
  function exportReport() {
    compute(); if (!R) return toast('Inputs missing'); var wb = XLSX.utils.book_new(), add = function (nm, aoa, w) { var ws = XLSX.utils.aoa_to_sheet(aoa); if (w) ws['!cols'] = w.map(function (x) { return { wch: x }; }); XLSX.utils.book_append_sheet(wb, ws, nm); };
    var grab = function (sh, r0, r1, cols) { var out = []; for (var r = r0; r <= r1; r++) out.push(cols.split('').map(function (c) { var v = G(sh, c + r); return v === 0 && !G(sh, 'A' + r) ? '' : v; })); return out; };
    add('Dashboard', [['BF COST OPTIMISER – Iron Making 5.9'], ['Run ' + new Date().toLocaleString()]].concat(grab('Dashboard', 4, 34, 'ABCDEFG')), [34, 12, 14, 14, 14, 14, 14]);
    add('Recommendations', grab('Recommendations', 4, 16, 'ABCDE'), [4, 28, 12, 12, 90]);
    add('Optimiser', grab('Optimiser', 4, 40, 'ABCDEFGHIJK'), [40, 16, 12, 12, 12, 12, 12, 12, 14, 14, 14]);
    add('Tapping_Distribution', grab('Tapping_Distribution', 4, 19, 'ABCDE'), [44, 10, 12, 12, 60]);
    var inp = [['Input', 'Value', 'Unit', 'Source']]; IN.forEach(function (d) { var i = d.k.indexOf('!'); inp.push([d.l, G(d.k.slice(0, i), d.k.slice(i + 1)), d.u, SH[d.k] ? SH[d.k].from : S.mode === 'reference' ? 'Reference' : S.src[d.k] === 'user' ? 'Your data' : S.src[d.k] === 'ref' ? 'Reference' : d.mat ? 'Not used' : 'Reference']); });
    add('Inputs', inp, [50, 14, 12, 22]);
    var d = new Date(); saveBytes('BF_Cost_Optimiser_' + d.getFullYear() + ('0' + (d.getMonth() + 1)).slice(-2) + ('0' + d.getDate()).slice(-2) + '.xlsx', new Uint8Array(XLSX.write(wb, { type: 'array', bookType: 'xlsx' })), XMIME);
  }
  function openSheet() {
    $('#sheet').innerHTML = '<h3>BF cost optimiser</h3><div class="links"><button class="lk" data-a="ref">⤓ Download ' + esc(REFX) + '</button><button class="lk" data-a="blank">⤓ Download blank ' + esc(TPL) + '</button><button class="lk" data-a="exp">⤓ Export results (.xlsx)</button>' +
      (window.Android && Android.printPdf ? '<button class="lk" data-a="pdf">⎙ Save this page as PDF</button>' : '') + '<a class="lk" href="bf-home.html">BF Model ›</a><button class="lk" data-a="refall">↺ Use reference data for everything</button></div><button class="btn" data-a="close" style="width:100%;margin-top:10px">Close</button>';
    $('#sheet').classList.add('open'); $('#sheetBg').classList.add('open');
    $$('#sheet [data-a]').forEach(function (b) { b.onclick = function () {
      var a = b.getAttribute('data-a'); closeSheet();
      if (a === 'ref') saveAsset('www/' + REFX, REFX); else if (a === 'blank') template(); else if (a === 'exp') exportReport();
      else if (a === 'pdf') { try { Android.printPdf('BF_Cost_Optimiser_' + cur); toast('Choose "Save as PDF" as the printer'); } catch (e) { } }
      else if (a === 'refall') { S.mode = 'reference'; S.final = {}; S.src = {}; S.raw = null; S.items = []; S.form = {}; save(); go(cur, true); toast('Using reference data'); }
    }; });
  }
  function closeSheet() { $('#sheet').classList.remove('open'); $('#sheetBg').classList.remove('open'); }
  $('#menu').onclick = openSheet; $('#sheetBg').onclick = closeSheet;

  var start = (location.hash || '').slice(1); if (!TITLES[start]) start = 'dash';
  try { history.replaceState({ p: start }, '', '#' + start); } catch (e) { }
  go(start, true);
  window.COApp = { S: S, go: go, book: book, get SH() { return SH; } };
})();
