/* Action plan against critical situation – BF Model module.
   Runs the formulas of BF_Critical_Situations_Solution_Module_4.xlsx with XLCalc (window.CSM = workbook model). */
(function () {
  'use strict';
  var X = window.XLCalc, M = window.CSM, B = new X.Book(M), KEY = 'cs.state.v1', XMIME = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  function $(s, el) { return (el || document).querySelector(s); }
  function $$(s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function num(v) { return typeof v === 'number' && isFinite(v); }
  function parseNum(s) { if (num(s)) return s; if (s == null || String(s).trim() === '') return null; var v = Number(String(s).replace(/,/g, '').trim()); return isFinite(v) ? v : null; }
  function toast(m) { var t = $('#toast'); t.textContent = m; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove('show'); }, 3000); }
  function raw(sh, a) { var v = M.sheets[sh][a]; return v === undefined ? null : v; }
  function txt(v) { if (v == null || X.isErr(v)) return ''; return String(v); }
  function fmtN(v, d) { return num(v) ? v.toLocaleString('en-IN', { maximumFractionDigits: d == null ? 3 : d }) : txt(v); }

  // ---------------- static data from the workbook ----------------
  var SIT = [], byId = {}, CATS = [], SEVS = ['Critical', 'High', 'Medium', 'Strategic'];
  for (var r = 5; r <= 46; r++) {
    var s = { r: r, id: raw('Situation_DB', 'A' + r), cat: raw('Situation_DB', 'B' + r), name: raw('Situation_DB', 'C' + r), sev: raw('Situation_DB', 'D' + r), signs: raw('Situation_DB', 'E' + r) };
    if (!s.id) continue; SIT.push(s); byId[s.id] = s; if (CATS.indexOf(s.cat) < 0) CATS.push(s.cat);
  }
  var TRG = {}; for (var t = 5; t <= 300; t++) { var id0 = raw('Trigger_DB', 'B' + t); if (id0) (TRG[id0] = TRG[id0] || []).push(t); }
  var PARAMS = []; for (var p = 21; p <= 46; p++) if (raw('Inputs', 'B' + p)) PARAMS.push({ r: p, l: raw('Inputs', 'B' + p), u: raw('Inputs', 'C' + p), n: raw('Inputs', 'G' + p) });
  var OPTS = [['C13', 'PCI (pulverised coal injection) in use?', ['Yes', 'No']], ['C14', 'Oxygen enrichment in use?', ['Yes', 'No']], ['C15', 'Charging system', ['Bell-less top', 'Bell top']],
    ['C16', 'Cooling system', ['Copper staves', 'Cast-iron staves', 'Cooling plates', 'Mixed']], ['C17', 'Burden type', ['Sinter + lump ore', 'Sinter + pellet', 'High pellet']]];
  var SIZES = ['Auto', 'Small', 'Medium', 'Large', 'Very large'];
  var CRIT = ['Safety', 'Production impact', 'Cost', 'Reversibility', 'Speed'];
  var SEVC = { Critical: 'var(--crit)', High: 'var(--high)', Medium: 'var(--med)', Strategic: 'var(--strat)' };

  // ---------------- state ----------------
  function load() { try { var s = JSON.parse(localStorage.getItem(KEY) || 'null'); if (s && s.v === 1) return s; } catch (e) { } return null; }
  var S = load();
  if (!S) {
    S = { v: 1, inp: {}, lim: {}, w: [40, 20, 15, 15, 10], dm: {}, ideas: [], cur: SIT[0].id, q: '', cat: '', sev: '' };
    for (var u = 6; u <= 205; u++) { var sn = raw('User_Recommendations', 'B' + u); if (!sn) continue; S.ideas.push({ d: txt(raw('User_Recommendations', 'A' + u)), sit: sn, sol: txt(raw('User_Recommendations', 'D' + u)), why: txt(raw('User_Recommendations', 'E' + u)), by: txt(raw('User_Recommendations', 'F' + u)), st: txt(raw('User_Recommendations', 'G' + u)) || 'New', rc: txt(raw('User_Recommendations', 'H' + u)), rb: txt(raw('User_Recommendations', 'I' + u)) }); }
    var dmSit = raw('Decision_Matrix', 'C4'), dmId = (SIT.filter(function (x) { return x.name === dmSit; })[0] || SIT[0]).id, ex = [];
    for (var o = 12; o <= 17; o++) { var on = raw('Decision_Matrix', 'B' + o); if (on) ex.push({ n: on, s: ['C', 'D', 'E', 'F', 'G'].map(function (c) { return +raw('Decision_Matrix', c + o) || 3; }) }); }
    S.dm[dmId] = ex; S.w = ['C', 'D', 'E', 'F', 'G'].map(function (c) { return +raw('Decision_Matrix', c + 9); });
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { } }

  // ---------------- values from the other BF Model pages ----------------
  var LK = {};
  function rd(k) { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) { return null; } }
  function link() {
    LK = {}; var put = function (a, v, from) { if (v === '' || v == null) return; v = +v; if (num(v) && v > 0 && !LK[a]) LK[a] = { v: +v.toFixed(4), from: from }; };
    var ST = rd('bf-inside-v1'), TV = (ST && ST.v) || {}, CH = rd('sspl_bf_burden_v1'), P = (CH && CH.params) || {}, T = (CH && CH.targets) || {}, FV = 'Furnace 3D view', BC = 'Batch chemistry';
    var CL = {}; try { if (window.CarbonEngine) CL = CarbonEngine.linkBF(); } catch (e) { }
    if (CL['bf.coke'] > 0) put('E27', (CL['bf.coke'] || 0) + (CL['bf.nut'] || 0), BC); else if (+TV.coke > 0) put('E27', (+TV.coke || 0) + (+TV.nut || 0), FV);
    if (CL['bf.pci'] > 0) put('E28', CL['bf.pci'], BC); else put('E28', TV.pci, FV);
    put('E21', TV.prod, FV); put('E22', TV.BV, FV); put('E22', P.blastVol, BC); put('E23', TV.HBT, FV); put('E30', P.si, BC);
    put('E32', TV.nTuy, FV); put('E34', TV.nTap, FV); put('E35', P.chPerHour, BC);
    put('E37', TV.csr, FV); put('E38', TV.m40, FV); put('E39', TV.m10, FV); put('E45', T.al2o3Max, BC); put('E46', T.b2, BC);
    var pci = LK.E28 ? LK.E28.v : null, o2 = +TV.O2 || +P.o2Flow || 0;
    if (pci != null) LK.C13 = { v: pci > 0 ? 'Yes' : 'No', from: LK.E28.from };
    if (o2 > 0) LK.C14 = { v: 'Yes', from: +TV.O2 ? FV : BC };
    return LK;
  }
  function srcOf(a) { if (S.inp[a] != null && S.inp[a] !== '') return 'user'; if (LK[a]) return 'link'; return 'ref'; }
  function valOf(a) { var s = srcOf(a); return s === 'user' ? S.inp[a] : s === 'link' ? LK[a].v : null; }

  // ---------------- push state into the workbook ----------------
  function apply(sitName, dmId) {
    B.clearOverrides();
    B.set('Inputs', 'C6', num(S.inp.C6) ? S.inp.C6 : raw('Inputs', 'C6'));
    B.set('Inputs', 'C8', S.inp.C8 || raw('Inputs', 'C8'));
    OPTS.forEach(function (o) { var v = valOf(o[0]); B.set('Inputs', o[0], v != null ? v : raw('Inputs', o[0])); });
    PARAMS.forEach(function (pp) { var a = 'E' + pp.r, v = valOf(a); B.set('Inputs', a, v == null ? null : v); });
    Object.keys(TRG).forEach(function (id) { TRG[id].forEach(function (row) { var l = S.lim['J' + row]; B.set('Trigger_DB', 'J' + row, l ? l : null); }); });
    for (var i = 0; i < 200; i++) {
      var rr = 6 + i, d = S.ideas[i];
      ['A', 'B', 'D', 'E', 'F', 'G', 'H', 'I'].forEach(function (c) { var k = { A: 'd', B: 'sit', D: 'sol', E: 'why', F: 'by', G: 'st', H: 'rc', I: 'rb' }[c]; B.set('User_Recommendations', c + rr, d ? (d[k] || null) : null); });
    }
    if (sitName) B.set('Solution_Finder', 'C4', sitName);
    if (dmId) {
      B.set('Decision_Matrix', 'C4', byId[dmId].name);
      ['C', 'D', 'E', 'F', 'G'].forEach(function (c, j) { B.set('Decision_Matrix', c + '9', num(S.w[j]) ? S.w[j] : 0); });
      var ops = S.dm[dmId] || [];
      for (var k = 0; k < 6; k++) { var op = ops[k], row = 12 + k; B.set('Decision_Matrix', 'B' + row, op && op.n ? op.n : null); ['C', 'D', 'E', 'F', 'G'].forEach(function (c, j) { B.set('Decision_Matrix', c + row, op && op.n ? op.s[j] : null); }); }
    }
  }
  function g(sh, a) { return B.get(sh, a); }

  // ---------------- navigation ----------------
  var TITLES = { list: 'Critical situations', sit: 'Action plan', input: 'My furnace', dm: 'Compare options', ideas: 'Better solutions', guide: 'Guide' }, cur = 'list';
  function go(p, arg, noPush) {
    if (p === 'sit' && arg) { S.cur = arg; save(); }
    cur = p; $$('.page').forEach(function (s) { s.classList.toggle('on', s.id === 'p-' + p); });
    $$('nav.bn button[data-p]').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-p') === (p === 'sit' ? 'list' : p)); });
    $('#ttl').textContent = p === 'sit' ? byId[S.cur].id + ' · ' + TITLES.sit : TITLES[p];
    link();
    ({ list: rList, sit: rSit, input: rInput, dm: rDm, ideas: rIdeas, guide: rGuide })[p]();
    if (!noPush) { try { history.pushState({ p: p, a: S.cur }, '', '#' + p + (p === 'sit' ? '=' + S.cur : '')); } catch (e) { } }
    window.scrollTo(0, 0);
  }
  window.addEventListener('popstate', function (e) { var st = e.state || {}; go(st.p || 'list', st.a, true); });
  $$('nav.bn button[data-p]').forEach(function (b) { b.onclick = function () { go(b.getAttribute('data-p')); }; });
  $('#back').onclick = function () { if (cur === 'list') location.href = 'bf-home.html'; else history.back(); };
  window.appBack = function () { if (cur !== 'list') { history.back(); return true; } location.href = 'bf-home.html'; return true; };
  function bindGo(el) { $$('[data-go]', el).forEach(function (b) { b.onclick = function () { go(b.getAttribute('data-go'), b.getAttribute('data-id')); }; }); }

  var LOGO = '<span class="cs-logo" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 2.8l7.5 3v5.6c0 4.7-3.1 8.4-7.5 9.8-4.4-1.4-7.5-5.1-7.5-9.8V5.8z"/><path d="M12 7.5v5.2M12 15.6v.4"/></svg></span>';
  function furnaceLine() {
    var used = []; if (Object.keys(S.inp).length) used.push('<span class="pill user">your values</span>'); var nl = Object.keys(LK).length; if (nl) used.push('<span class="pill OK">' + nl + ' from BF Model</span>');
    return '<div class="state">' + (used.join('') || '<span class="pill ref">EXAMPLE FURNACE</span>') + esc(fmtN(g('Inputs', 'C6'), 0)) + ' m³ · ' + esc(txt(g('Inputs', 'C9'))) + ' class · <a href="#input" data-go="input" style="color:#9fe6e3">change</a></div>';
  }

  // ---------------- list ----------------
  function rList() {
    apply();
    var el = $('#p-list'), q = (S.q || '').toLowerCase();
    var h = '<div class="hero"><div><div class="top">' + LOGO + '<div><div class="eb">BF Model · 42 situations · 7 groups</div><h1>Action plan <span>against critical situation</span></h1></div></div>' +
      '<p style="margin-top:10px">Pick a situation: early signs in numbers for your furnace, what to do at L1 Watch, L2 Action and L3 Emergency, the standard solution, what not to do and when to escalate.</p></div></div>' + furnaceLine();
    h += '<div class="srch"><input id="q" type="search" placeholder="Search: chilling, hanging, tuyere leak, power failure…" value="' + esc(S.q || '') + '"></div>';
    h += '<div class="chips">' + ['', 'Critical', 'High', 'Medium', 'Strategic'].map(function (v) { var n = v ? SIT.filter(function (x) { return x.sev === v; }).length : SIT.length; return '<button data-sev="' + v + '"' + (S.sev === v ? ' class="on"' : '') + ' style="--c:' + (SEVC[v] || '#93a6ba') + '"><i></i>' + (v || 'All') + ' ' + n + '</button>'; }).join('') + '</div>';
    h += '<div class="chips">' + [''].concat(CATS).map(function (c) { return '<button data-cat="' + esc(c) + '"' + (S.cat === c ? ' class="on"' : '') + '>' + esc(c ? c.replace(/^([A-G])\. /, '$1 · ') : 'All groups') + '</button>'; }).join('') + '</div>';
    var shown = SIT.filter(function (x) { return (!S.sev || x.sev === S.sev) && (!S.cat || x.cat === S.cat) && (!q || (x.name + ' ' + x.signs + ' ' + x.cat + ' ' + x.id).toLowerCase().indexOf(q) >= 0); });
    var last = '';
    shown.forEach(function (x) {
      if (x.cat !== last) { last = x.cat; h += '<div class="cat">' + esc(x.cat) + '</div>'; }
      var na = S.ideas.filter(function (d) { return d.sit === x.name && d.st === 'Approved'; }).length;
      h += '<button class="sit" data-go="sit" data-id="' + x.id + '" style="--c:' + SEVC[x.sev] + '"><span class="id">' + x.id + '</span><span><b>' + esc(x.name) + '</b><small>' + esc(x.signs) + '</small></span><span class="sev ' + x.sev + '" style="--c:' + SEVC[x.sev] + '">' + x.sev + (na ? ' · ' + na + '★' : '') + '</span></button>';
    });
    if (!shown.length) h += '<div class="note">No situation matches. Clear the search or the filters.</div>';
    h += '<div class="note warn" style="margin-top:14px">General engineering guidance for a typical blast furnace. Set thresholds for your own furnace in My furnace. Your plant SOPs, safety rules and the Shift Incharge / Head BF decide.</div>';
    el.innerHTML = h; bindGo(el);
    var qi = $('#q'); qi.oninput = function () { S.q = qi.value; save(); clearTimeout(qi._t); qi._t = setTimeout(function () { var pos = qi.selectionStart; rList(); var n2 = $('#q'); n2.focus(); try { n2.setSelectionRange(pos, pos); } catch (e) { } }, 250); };
    $$('[data-sev]', el).forEach(function (b) { b.onclick = function () { S.sev = b.getAttribute('data-sev'); save(); rList(); }; });
    $$('[data-cat]', el).forEach(function (b) { b.onclick = function () { S.cat = b.getAttribute('data-cat'); save(); rList(); }; });
  }

  // small in-page dialog (instead of prompt())
  function ask(title, fields, cb) {
    var sh = $('#sheet');
    sh.innerHTML = '<h3>' + esc(title) + '</h3>' + fields.map(function (f, i) { return '<div class="f wide"><label for="ask' + i + '">' + esc(f.l) + '</label><input id="ask' + i + '" style="text-align:left" value="' + esc(f.v || '') + '" placeholder="' + esc(f.ph || '') + '"></div>'; }).join('') +
      '<div class="row2"><button class="btn pri" id="askOk">OK</button><button class="btn" id="askNo">Cancel</button></div>';
    sh.classList.add('open'); $('#sheetBg').classList.add('open'); var i0 = $('#ask0'); if (i0) setTimeout(function () { i0.focus(); }, 30);
    $('#askOk').onclick = function () { var vals = fields.map(function (f, i) { return $('#ask' + i).value.trim(); }); closeSheet(); cb(vals); };
    $('#askNo').onclick = closeSheet;
  }

  // ---------------- one situation ----------------
  function triggers(id) {
    return (TRG[id] || []).map(function (row) {
      var mean = txt(g('Trigger_DB', 'L' + row)) || txt(g('Trigger_DB', 'K' + row));
      return { row: row, p: txt(raw('Trigger_DB', 'D' + row)), u: txt(raw('Trigger_DB', 'E' + row)), n: txt(g('Trigger_DB', 'F' + row)), l1: txt(g('Trigger_DB', 'G' + row)), l2: txt(g('Trigger_DB', 'H' + row)), l3: txt(g('Trigger_DB', 'I' + row)), lim: S.lim['J' + row] || '', mean: mean, note: txt(g('Trigger_DB', 'K' + row)) };
    });
  }
  function rSit() {
    var x = byId[S.cur] || SIT[0]; apply(x.name);
    var F = function (a) { return txt(g('Solution_Finder', a)); }, el = $('#p-sit'), i = SIT.indexOf(x);
    var h = '<div class="card" style="border-left:5px solid ' + SEVC[x.sev] + '"><div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><span class="pill NA">' + x.id + '</span><span class="sev ' + x.sev + '" style="--c:' + SEVC[x.sev] + '">' + x.sev + '</span><small style="color:var(--muted)">' + esc(x.cat) + '</small></div>' +
      '<h2 style="margin:8px 0 4px;font:700 26px/1.05 var(--f-display);letter-spacing:.04em;text-transform:uppercase">' + esc(x.name) + '</h2><div class="kv"><span>Decision owner</span><b>' + esc(F('C8')) + '</b></div></div>';
    h += '<div class="card"><h3>Your furnace</h3>' + ['C9', 'C10', 'C11'].map(function (a) { return '<div class="fur">' + F(a).split(/\s+\|\s+/).map(function (s) { return '<span>' + esc(s) + '</span>'; }).join('') + '</div>'; }).join('') +
      '<p class="sub" style="margin-top:8px">' + esc(F('C12')) + '</p><button class="btn sm" data-go="input" style="margin-top:6px">Change my furnace</button></div>';
    h += '<div class="card"><h3>Early signs</h3><p style="margin:0;font-size:14px;line-height:1.5">' + esc(F('C13')) + '</p></div>';
    h += '<div class="card"><h3>What the early signs mean · how much</h3>' + triggers(x.id).map(function (t) {
      return '<div class="tr"><div class="h"><b>' + esc(t.p) + (t.u ? ' <small style="color:var(--muted)">(' + esc(t.u) + ')</small>' : '') + '</b><button data-lim="' + t.row + '">' + (t.lim ? 'Edit my limit' : '+ My limit') + '</button></div>' +
        '<div class="band"><div style="--c:#3ccf8e"><small>Normal</small>' + esc(t.n) + '</div><div style="--c:var(--l1)"><small>L1 Watch</small>' + esc(t.l1) + '</div><div style="--c:var(--l2)"><small>L2 Action</small>' + esc(t.l2) + '</div><div style="--c:var(--l3)"><small>L3 Emergency</small>' + esc(t.l3) + '</div></div>' +
        (t.lim ? '<div class="lim">Your plant limit: ' + esc(t.lim) + '</div>' : '') + '<p class="mean">' + esc(t.mean) + '</p></div>';
    }).join('') + '</div>';
    h += '<div class="card"><h3>Action plan by level</h3>' +
      '<div class="lv" style="--c:var(--l1)"><h4>L1 Watch · monitor and prepare</h4><p>' + esc(F('C24')) + '</p></div>' +
      '<div class="lv" style="--c:var(--l2)"><h4>L2 Action · corrective step</h4><p>' + esc(F('C25')) + '</p></div>' +
      '<div class="lv" style="--c:var(--l3)"><h4>L3 Emergency · escalate</h4><p>' + esc(F('C26')) + '</p></div></div>';
    h += '<div class="card"><h3>Standard solution</h3>' +
      '<div class="blk"><h4>Immediate action</h4><p>' + esc(F('C28')) + '</p></div><div class="blk"><h4>Corrective action</h4><p>' + esc(F('C29')) + '</p></div>' +
      '<div class="blk"><h4>Decision guide · if X then Y</h4><p>' + esc(F('C30')) + '</p></div><div class="blk no"><h4>Do NOT</h4><p>' + esc(F('C31')) + '</p></div>' +
      '<div class="blk"><h4>Escalate / stop trigger</h4><p>' + esc(F('C32')) + '</p></div><div class="blk"><h4>Prevention</h4><p>' + esc(F('C33')) + '</p></div></div>';
    var ap = ['C35', 'C36', 'C37', 'C38', 'C39'].map(F).filter(function (s) { return s && s !== '-'; });
    h += '<div class="card"><h3>Better solutions from users (approved)</h3>' + (ap.length ? ap.map(function (s) { return '<div class="idea st-Approved"><p>' + esc(s) + '</p></div>'; }).join('') : '<p class="sub">None approved yet.</p>') +
      '<p class="sub" style="margin-top:8px">' + esc(F('C40')) + '</p><div class="row2"><button class="btn sm" id="addIdea">+ Add a better solution</button><button class="btn sm" data-go="dm" data-id="' + x.id + '">Compare options</button></div></div>';
    h += '<div class="nav2">' + (i > 0 ? '<button class="btn sm" data-go="sit" data-id="' + SIT[i - 1].id + '">‹ ' + SIT[i - 1].id + '</button>' : '') + '<button class="btn sm" data-go="list">All situations</button>' + (i < SIT.length - 1 ? '<button class="btn sm" data-go="sit" data-id="' + SIT[i + 1].id + '">' + SIT[i + 1].id + ' ›</button>' : '') + '</div>';
    el.innerHTML = h; bindGo(el);
    $$('[data-go=dm]', el).forEach(function (b) { b.onclick = function () { S.dmCur = x.id; save(); go('dm'); }; });
    $$('[data-lim]', el).forEach(function (b) { b.onclick = function () { var row = b.getAttribute('data-lim'); ask('Your plant limit', [{ l: raw('Trigger_DB', 'D' + row) + (raw('Trigger_DB', 'E' + row) ? ' (' + raw('Trigger_DB', 'E' + row) + ')' : '') + ' · empty = remove', v: S.lim['J' + row] || '', ph: 'e.g. over 1.45 bar' }], function (v) { if (v[0]) S.lim['J' + row] = v[0]; else delete S.lim['J' + row]; save(); rSit(); }); }; });
    $('#addIdea').onclick = function () { S.ideaSit = x.name; save(); go('ideas'); setTimeout(function () { var f = $('#iSol'); if (f) f.focus(); }, 50); };
  }

  // ---------------- my furnace (inputs) ----------------
  function srcLine(a) {
    var s = srcOf(a);
    if (s === 'user') return '<span class="src user">Your value</span>';
    if (s === 'link') return '<span class="src link">From BF Model · ' + esc(LK[a].from) + '</span>';
    return '<span class="src">General standard for your size class</span>';
  }
  function rInput() {
    apply(); var el = $('#p-input');
    var h = furnaceLine() + '<div class="card"><h3>1 · Furnace size</h3>' +
      '<div class="f"><label for="iC6">Working / inner volume<small>m³ · 300 to 6,000</small></label><input id="iC6" data-a="C6" inputmode="decimal" value="' + (num(S.inp.C6) ? S.inp.C6 : '') + '" placeholder="' + raw('Inputs', 'C6') + '"></div>' +
      '<div class="kv"><span>Size class (automatic)</span><b>' + esc(txt(g('Inputs', 'C7'))) + '</b></div>' +
      '<div class="f"><label for="iC8">Size class override<small>Leave Auto, or use another class\'s standards</small></label><select id="iC8" data-a="C8">' + SIZES.map(function (v) { return '<option' + ((S.inp.C8 || 'Auto') === v ? ' selected' : '') + '>' + v + '</option>'; }).join('') + '</select></div>' +
      '<div class="kv"><span>Size class used</span><b>' + esc(txt(g('Inputs', 'C9'))) + '</b></div></div>';
    h += '<div class="card"><h3>2 · Options</h3>' + OPTS.map(function (o) {
      var v = valOf(o[0]); if (v == null) v = raw('Inputs', o[0]);
      return '<div class="f"><label for="i' + o[0] + '">' + esc(o[1]) + '</label><select id="i' + o[0] + '" data-a="' + o[0] + '">' + o[2].map(function (x) { return '<option' + (v === x ? ' selected' : '') + '>' + x + '</option>'; }).join('') + '</select>' + srcLine(o[0]) + '</div>';
    }).join('') + '</div>';
    h += '<div class="card"><h3>3 · Operating parameters and limits</h3><p class="sub">Empty = general standard for your size class (shown in grey). Type your own value to override.</p>' + PARAMS.map(function (pp) {
      var a = 'E' + pp.r, us = S.inp[a], std = g('Inputs', 'D' + pp.r), lv = LK[a];
      return '<div class="f"><label for="i' + a + '">' + esc(pp.l) + '<small>' + esc(pp.u || '') + (pp.n ? ' · ' + esc(pp.n) : '') + '</small></label><input id="i' + a + '" data-a="' + a + '" inputmode="decimal" value="' + (num(us) ? us : '') + '" placeholder="' + esc(fmtN(lv ? lv.v : std, 3)) + '">' + srcLine(a) + '</div>';
    }).join('') + '</div>';
    h += '<div class="card"><h3>4 · Your furnace in numbers</h3>' + [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60].map(function (rr) { return '<div class="kv"><span>' + esc(raw('Inputs', 'B' + rr)) + ' <small style="color:var(--muted)">' + esc(raw('Inputs', 'C' + rr) || '') + '</small></span><b>' + esc(fmtN(g('Inputs', 'D' + rr), 2)) + '</b></div>'; }).join('') + '</div>';
    h += '<div class="row2"><button class="btn" id="rst">↺ Back to general standards</button><button class="btn pri" data-go="list">See situations ›</button></div>';
    el.innerHTML = h; bindGo(el);
    $$('[data-a]', el).forEach(function (i) { i.onchange = function () {
      var a = i.getAttribute('data-a'), v = i.tagName === 'SELECT' ? i.value : parseNum(i.value);
      if (a === 'C6' && v != null && (v < 300 || v > 6000)) { toast('Volume must be 300 to 6,000 m³'); i.value = S.inp.C6 || ''; return; }
      if (v == null || v === '' || (a === 'C8' && v === 'Auto')) delete S.inp[a]; else S.inp[a] = v;
      if (i.tagName === 'SELECT' && LK[a] && LK[a].v === v) delete S.inp[a];
      save(); rInput();
    }; });
    $('#rst').onclick = function () { if (!confirm('Clear your furnace values on this page? Values from the BF Model stay.')) return; S.inp = {}; save(); rInput(); toast('Back to general standards'); };
  }

  // ---------------- decision matrix ----------------
  function rDm() {
    var id = S.dmCur || S.cur || SIT[0].id; S.dmCur = id; var x = byId[id]; if (!S.dm[id]) S.dm[id] = [];
    apply(null, id); var el = $('#p-dm'), ops = S.dm[id], D = function (a) { return g('Decision_Matrix', a); };
    var h = '<div class="card"><h3>Compare options</h3><p class="sub">Score each option 1 to 5 (5 = best). A safety score of 2 or less fails the safety gate. The matrix supports the decision; the Shift Incharge or Head BF decides, safety first.</p>' +
      '<div class="f wide"><label for="dmSit">Situation</label><select id="dmSit">' + SIT.map(function (s) { return '<option value="' + s.id + '"' + (s.id === id ? ' selected' : '') + '>' + s.id + ' · ' + esc(s.name) + '</option>'; }).join('') + '</select></div>' +
      '<div class="blk"><h4>Decision guide</h4><p>' + esc(txt(D('C5'))) + '</p></div><div class="blk no"><h4>Do NOT</h4><p>' + esc(txt(D('C6'))) + '</p></div></div>';
    h += '<div class="card"><h3>Weights (percent)</h3><div class="wts">' + CRIT.map(function (c, j) { return '<div><label>' + c.split(' ')[0] + '</label><input data-w="' + j + '" inputmode="numeric" value="' + S.w[j] + '"></div>'; }).join('') + '</div>' +
      '<p class="sub" style="margin-top:6px">Total ' + fmtN(D('H9'), 0) + ' · ' + esc(txt(D('I9'))) + '</p></div>';
    h += '<div class="card"><h3>Options</h3>' + (ops.length ? '' : '<p class="sub">Add the options you are considering, e.g. "cut wind 10%", "add coke blank", "raise blast temperature".</p>') + ops.map(function (op, k) {
      var row = 12 + k, rk = D('J' + row), fail = (op.s[0] || 0) <= 2, best = txt(D('K' + row)) === 'Best option';
      return '<div class="opt' + (best ? ' best' : '') + (fail ? ' fail' : '') + '"><div class="oh"><input data-on="' + k + '" value="' + esc(op.n) + '" placeholder="Option ' + (k + 1) + '"><button data-del="' + k + '" aria-label="Remove">×</button></div>' +
        '<div class="sc">' + CRIT.map(function (c, j) { return '<div><label>' + c.split(' ')[0] + '</label><select data-sc="' + k + '-' + j + '">' + [1, 2, 3, 4, 5].map(function (n) { return '<option' + (op.s[j] === n ? ' selected' : '') + '>' + n + '</option>'; }).join('') + '</select></div>'; }).join('') + '</div>' +
        '<div class="res"><span>Score <b>' + fmtN(D('H' + row), 2) + '</b></span><span>Eligible <b>' + fmtN(D('I' + row), 2) + '</b></span><span>Rank <b>' + fmtN(rk, 0) + '</b></span>' + (txt(D('K' + row)) ? '<span style="color:' + (fail ? '#ff8a7a' : '#7fe0b8') + '">' + esc(txt(D('K' + row))) + '</span>' : '') + '</div></div>';
    }).join('') + (ops.length < 6 ? '<button class="btn sm" id="addOp" style="margin-top:10px">+ Add option</button>' : '') + '</div>';
    if (ops.length) h += '<div class="big card" style="border-color:#3ccf8e"><h3>Recommended option</h3><p style="margin:0;font:700 20px/1.2 var(--f-display);letter-spacing:.04em">' + esc(txt(D('C19'))) + '</p></div>';
    h += '<div class="row2"><button class="btn" data-go="sit" data-id="' + id + '">Open action plan for ' + id + '</button></div>';
    el.innerHTML = h; bindGo(el);
    $('#dmSit').onchange = function () { S.dmCur = this.value; save(); rDm(); };
    $$('[data-w]', el).forEach(function (i) { i.onchange = function () { var v = parseNum(i.value); S.w[+i.getAttribute('data-w')] = v == null ? 0 : v; save(); rDm(); }; });
    $$('[data-on]', el).forEach(function (i) { i.onchange = function () { ops[+i.getAttribute('data-on')].n = i.value.trim() || 'Option'; save(); rDm(); }; });
    $$('[data-sc]', el).forEach(function (i) { i.onchange = function () { var p2 = i.getAttribute('data-sc').split('-'); ops[+p2[0]].s[+p2[1]] = +i.value; save(); rDm(); }; });
    $$('[data-del]', el).forEach(function (b) { b.onclick = function () { ops.splice(+b.getAttribute('data-del'), 1); save(); rDm(); }; });
    var ad = $('#addOp'); if (ad) ad.onclick = function () { ops.push({ n: 'Option ' + (ops.length + 1), s: [3, 3, 3, 3, 3] }); save(); rDm(); setTimeout(function () { var ins = $$('[data-on]'); if (ins.length) { ins[ins.length - 1].focus(); ins[ins.length - 1].select(); } }, 30); };
  }

  // ---------------- ideas (user recommendations) ----------------
  var STS = ['New', 'Under review', 'Approved', 'Rejected'];
  function today() { var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function rIdeas() {
    apply(); var el = $('#p-ideas'), fs = S.ideaF || '';
    var cnt = STS.map(function (s, j) { return [s, g('Summary', 'C' + (23 + j))]; });
    var h = '<div class="card"><h3>Add a better solution</h3><p class="sub">Write what works better and why. A reviewer sets the status; only Approved ideas appear in the action plan of that situation (up to 5 each).</p>' +
      '<div class="f wide"><label for="iSit">Situation</label><select id="iSit">' + SIT.map(function (s) { return '<option' + ((S.ideaSit || byId[S.cur].name) === s.name ? ' selected' : '') + '>' + esc(s.name) + '</option>'; }).join('') + '</select></div>' +
      '<div class="f wide"><label for="iSol">Your recommended solution / improvement</label><textarea id="iSol"></textarea></div>' +
      '<div class="f wide"><label for="iWhy">Why it is better (evidence, plant experience)</label><textarea id="iWhy"></textarea></div>' +
      '<div class="f"><label for="iBy">Submitted by</label><input id="iBy" style="text-align:left" value="' + esc(S.me || '') + '"></div>' +
      '<div class="row2"><button class="btn pri" id="iAdd">Submit</button></div></div>';
    h += '<div class="chips">' + [['', 'All ' + S.ideas.length]].concat(cnt.map(function (c) { return [c[0], c[0] + ' ' + c[1]]; })).map(function (c) { return '<button data-f="' + c[0] + '"' + (fs === c[0] ? ' class="on"' : '') + '>' + c[1] + '</button>'; }).join('') + '</div>';
    var list = S.ideas.map(function (d, i) { return [d, i]; }).filter(function (p) { return !fs || p[0].st === fs; }).reverse();
    h += list.map(function (p) {
      var d = p[0], i = p[1], s = SIT.filter(function (x) { return x.name === d.sit; })[0];
      return '<div class="idea st-' + String(d.st).split(' ')[0] + '"><div class="ih"><span>' + esc(d.d) + ' · ' + (s ? s.id + ' ' : '') + esc(d.sit) + '</span><span class="pill NA">' + esc(d.st) + '</span></div>' +
        '<p>' + esc(d.sol) + '</p>' + (d.why ? '<p class="why">Why: ' + esc(d.why) + '</p>' : '') + '<p class="why">By ' + esc(d.by || '—') + (d.rc ? ' · Reviewer: ' + esc(d.rc) + (d.rb ? ' (' + esc(d.rb) + ')' : '') : '') + '</p>' +
        '<div class="act">' + STS.filter(function (x) { return x !== d.st; }).map(function (x) { return '<button class="btn sm" data-st="' + i + '|' + x + '">' + x + '</button>'; }).join('') + '<button class="btn sm" data-dl="' + i + '">Delete</button></div></div>';
    }).join('') || '<div class="note">No ideas yet.</div>';
    h += '<div class="row2"><button class="btn sm" id="iExp">⤓ Export ideas (.xlsx)</button><button class="btn sm" id="iImp">⤒ Import ideas / workbook</button></div>';
    el.innerHTML = h;
    $('#iSit').onchange = function () { S.ideaSit = this.value; save(); };
    $('#iAdd').onclick = function () {
      var sol = $('#iSol').value.trim(); if (!sol) { toast('Write the solution first'); return; }
      if (S.ideas.length >= 200) { toast('The list holds 200 ideas. Delete old ones first.'); return; }
      S.me = $('#iBy').value.trim(); S.ideas.push({ d: today(), sit: $('#iSit').value, sol: sol, why: $('#iWhy').value.trim(), by: S.me, st: 'New', rc: '', rb: '' }); save(); toast('Submitted · status New'); rIdeas();
    };
    $$('[data-f]', el).forEach(function (b) { b.onclick = function () { S.ideaF = b.getAttribute('data-f'); save(); rIdeas(); }; });
    $$('[data-st]', el).forEach(function (b) { b.onclick = function () {
      var p2 = b.getAttribute('data-st').split('|'), d = S.ideas[+p2[0]], st = p2[1];
      var done = function () { d.st = st; save(); rIdeas(); toast('Status: ' + st); };
      if (st === 'Approved' || st === 'Rejected') ask(st + ' · review', [{ l: 'Reviewer comment (optional)', v: d.rc }, { l: 'Reviewed by', v: d.rb || S.me || '' }], function (v) { d.rc = v[0]; d.rb = v[1]; done(); });
      else done();
    }; });
    $$('[data-dl]', el).forEach(function (b) { b.onclick = function () { if (!confirm('Delete this idea?')) return; S.ideas.splice(+b.getAttribute('data-dl'), 1); save(); rIdeas(); }; });
    $('#iExp').onclick = exportIdeas; $('#iImp').onclick = function () { $('#file').value = ''; $('#file').click(); };
  }

  // ---------------- guide ----------------
  function rGuide() {
    apply(); var el = $('#p-guide'), h = '<div class="card gtxt"><h3>How to use</h3>';
    for (var r2 = 5; r2 <= 17; r2++) { var b0 = raw('Guide', 'B' + r2), c0 = raw('Guide', 'C' + r2); if (b0) h += '<h4>' + esc(b0.replace(/^\d\. /, '').replace('Inputs', 'My furnace').replace('Solution_Finder', 'Situations').replace('Decision_Matrix', 'Compare').replace('User_Recommendations', 'Ideas')) + '</h4><p>' + esc(c0) + '</p>'; }
    h += '</div><div class="card"><h3>Summary</h3><div class="scroll"><table class="mini"><tr><th>Group</th><th>Situations</th><th>Critical</th><th>Approved ideas</th></tr>' +
      [5, 6, 7, 8, 9, 10, 11, 12].map(function (rr) { return '<tr><td>' + esc(raw('Summary', 'B' + rr)) + '</td><td class="n">' + fmtN(g('Summary', 'C' + rr), 0) + '</td><td class="n">' + fmtN(g('Summary', 'D' + rr), 0) + '</td><td class="n">' + fmtN(g('Summary', 'E' + rr), 0) + '</td></tr>'; }).join('') + '</table></div>' +
      '<div class="fur" style="margin-top:10px">' + [16, 17, 18, 19].map(function (rr) { return '<span>' + raw('Summary', 'B' + rr) + ' ' + fmtN(g('Summary', 'C' + rr), 0) + '</span>'; }).join('') + '<span>Quantified triggers ' + fmtN(g('Summary', 'C31'), 0) + '</span></div></div>';
    h += '<div class="card"><h3>Lever reference · how much does a change do?</h3><p class="sub">' + esc(raw('Lever_Reference', 'B3')) + '</p><div class="scroll"><table class="mini"><tr><th>Lever</th><th>Change</th><th>Effect</th><th>Response</th><th>Caution</th></tr>' +
      [6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(function (rr) { return '<tr>' + ['B', 'C', 'D', 'E', 'F'].map(function (c) { return '<td>' + esc(txt(g('Lever_Reference', c + rr))) + '</td>'; }).join('') + '</tr>'; }).join('') + '</table></div><p class="sub" style="margin-top:8px">' + esc(txt(g('Lever_Reference', 'B17'))) + '</p></div>';
    h += '<div class="card"><h3>General standards by size class</h3><p class="sub">' + esc(raw('Standards', 'A2')) + '</p><div class="scroll"><table class="mini"><tr><th>Parameter</th><th>Unit</th><th>Small</th><th>Medium</th><th>Large</th><th>Very large</th></tr>' +
      (function () { var o2 = ''; for (var rr = 6; rr <= 31; rr++) if (raw('Standards', 'B' + rr)) o2 += '<tr><td>' + esc(raw('Standards', 'B' + rr)) + '</td><td>' + esc(raw('Standards', 'C' + rr) || '') + '</td>' + ['D', 'E', 'F', 'G'].map(function (c) { return '<td class="n">' + esc(fmtN(raw('Standards', c + rr), 3)) + '</td>'; }).join('') + '</tr>'; return o2; })() + '</table></div></div>';
    h += '<div class="note warn">' + esc(raw('Guide', 'C17')) + '</div>';
    el.innerHTML = h;
  }

  // ---------------- files ----------------
  function b64(u8) { var s = '', ch = 0x8000; for (var i = 0; i < u8.length; i += ch) s += String.fromCharCode.apply(null, u8.subarray(i, i + ch)); return btoa(s); }
  function saveBytes(name, u8) {
    if (!(window.AndroidBridge && AndroidBridge.saveFile) && window.Android && window.IM_SINTER_URL) {
      try { localStorage.setItem('im.save', JSON.stringify({ name: name, mime: XMIME, b64: b64(u8), t: Date.now() })); localStorage.setItem('im.route', JSON.stringify({ p: 'www/iz-save.html', t: Date.now() })); } catch (e) { toast('File too large: ' + e.message); return; }
      location.href = window.IM_SINTER_URL; return;
    }
    if (window.AndroidBridge && AndroidBridge.saveFile) { var r = AndroidBridge.saveFile(name, b64(u8), XMIME); toast(/^ERROR/.test(r || '') ? r : 'Saved to Downloads: ' + name); return; }
    var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([u8], { type: XMIME })); a.download = name; document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500); toast('Downloaded ' + name);
  }
  function book(sheets) { var wb = XLSX.utils.book_new(); sheets.forEach(function (s) { var ws = XLSX.utils.aoa_to_sheet(s[1]); ws['!cols'] = s[2].map(function (w) { return { wch: w }; }); XLSX.utils.book_append_sheet(wb, ws, s[0]); }); return new Uint8Array(XLSX.write(wb, { type: 'array', bookType: 'xlsx' })); }
  function exportIdeas() {
    var a = [['User recommendations - add a better solution'], ['Exported from Iron Making · BF Model · ' + today()], [], [], ['Date', 'Situation', 'ID', 'Your recommended solution / improvement', 'Why it is better', 'Submitted by', 'Status', 'Reviewer comment', 'Reviewed by']];
    S.ideas.forEach(function (d) { var s = SIT.filter(function (x) { return x.name === d.sit; })[0]; a.push([d.d, d.sit, s ? s.id : '', d.sol, d.why, d.by, d.st, d.rc, d.rb]); });
    saveBytes('BF_Critical_Situations_Ideas_' + today() + '.xlsx', book([['User_Recommendations', a, [12, 34, 6, 60, 40, 16, 12, 30, 16]]]));
  }
  function exportPlan() {
    var x = byId[S.cur]; apply(x.name); var F = function (a) { return txt(g('Solution_Finder', a)); };
    var a = [['ACTION PLAN AGAINST CRITICAL SITUATION'], [x.id + ' · ' + x.name], ['Category', x.cat], ['Severity', x.sev], ['Decision owner', F('C8')], ['Your furnace', F('C9')], ['Your numbers', F('C10')], ['Step sizes', F('C11')], ['Notes', F('C12')], ['Early signs', F('C13')], [],
      ['Early sign', 'Unit', 'Normal', 'Watch (L1)', 'Action (L2)', 'Emergency (L3)', 'Your plant limit', 'What it means']];
    triggers(x.id).forEach(function (t) { a.push([t.p, t.u, t.n, t.l1, t.l2, t.l3, t.lim, t.mean]); });
    a.push([], ['L1 WATCH', F('C24')], ['L2 ACTION', F('C25')], ['L3 EMERGENCY', F('C26')], [], ['Immediate action', F('C28')], ['Corrective action', F('C29')], ['Decision guide', F('C30')], ['Do NOT', F('C31')], ['Escalate / stop trigger', F('C32')], ['Prevention', F('C33')], []);
    ['C35', 'C36', 'C37', 'C38', 'C39'].forEach(function (c, i) { var v = F(c); if (v && v !== '-') a.push(['Approved idea ' + (i + 1), v]); });
    a.push([], ['General engineering guidance. Plant SOPs and the Shift Incharge / Head BF decide.']);
    saveBytes('Action_Plan_' + x.id + '_' + today() + '.xlsx', book([[x.id, a, [26, 14, 24, 24, 24, 26, 18, 70]]]));
  }
  function importFile(fl) {
    var fr = new FileReader();
    fr.onload = function () {
      try {
        var wb = XLSX.read(new Uint8Array(fr.result), { type: 'array' }), got = [], nI = 0, nIn = 0, nL = 0;
        var cv = function (sh, a) { var c = sh && sh[a]; return c ? (c.w != null && c.t === 'd' ? c.w : c.v) : null; };
        var dstr = function (v) { if (v instanceof Date) return v.toISOString().slice(0, 10); if (typeof v === 'number' && v > 30000 && v < 80000) { var d = new Date(Math.round((v - 25569) * 864e5)); return d.toISOString().slice(0, 10); } return v == null ? '' : String(v); };
        var ur = wb.Sheets.User_Recommendations;
        if (ur) for (var r3 = 6; r3 <= 400; r3++) {
          var sit = cv(ur, 'B' + r3), sol = cv(ur, 'D' + r3); if (!sit || !sol || String(cv(ur, 'F' + r3)).toUpperCase() === 'EXAMPLE') continue;
          sit = String(sit).trim(); if (!SIT.some(function (x) { return x.name === sit; })) continue;
          if (S.ideas.some(function (d) { return d.sit === sit && d.sol === String(sol).trim(); })) continue;
          if (S.ideas.length >= 200) break;
          S.ideas.push({ d: dstr(cv(ur, 'A' + r3)) || today(), sit: sit, sol: String(sol).trim(), why: String(cv(ur, 'E' + r3) || ''), by: String(cv(ur, 'F' + r3) || ''), st: STS.indexOf(cv(ur, 'G' + r3)) >= 0 ? cv(ur, 'G' + r3) : 'New', rc: String(cv(ur, 'H' + r3) || ''), rb: String(cv(ur, 'I' + r3) || '') }); nI++;
        }
        var ip = wb.Sheets.Inputs;
        if (ip && /furnace/i.test(String(cv(ip, 'B6') || ''))) {
          var vol = parseNum(cv(ip, 'C6')); if (vol >= 300 && vol <= 6000) { S.inp.C6 = vol; nIn++; }
          var ov = cv(ip, 'C8'); if (SIZES.indexOf(ov) > 0) { S.inp.C8 = ov; nIn++; } else delete S.inp.C8;
          OPTS.forEach(function (o) { var v = cv(ip, o[0]); if (o[2].indexOf(v) >= 0) { S.inp[o[0]] = v; nIn++; } });
          PARAMS.forEach(function (pp) { var v = parseNum(cv(ip, 'E' + pp.r)); if (v != null) { S.inp['E' + pp.r] = v; nIn++; } });
        }
        var tg = wb.Sheets.Trigger_DB;
        if (tg) Object.keys(TRG).forEach(function (id) { TRG[id].forEach(function (row) { var v = cv(tg, 'J' + row); if (v != null && String(v).trim()) { S.lim['J' + row] = String(v).trim(); nL++; } }); });
        if (!nI && !nIn && !nL) { toast('Nothing found. Use this module\'s workbook or an exported ideas file.'); return; }
        save(); toast((nI ? nI + ' ideas' : '') + (nIn ? (nI ? ', ' : '') + nIn + ' furnace inputs' : '') + (nL ? ', ' + nL + ' plant limits' : '') + ' imported'); go(cur === 'list' ? 'list' : cur, S.cur, true);
      } catch (e) { toast('Could not read ' + fl.name + ': ' + e.message); }
    };
    fr.readAsArrayBuffer(fl);
  }
  $('#file').addEventListener('change', function () { var fl = this.files && this.files[0]; if (fl) importFile(fl); });

  // ---------------- menu ----------------
  function openSheet() {
    $('#sheet').innerHTML = '<h3>Action plan against critical situation</h3><div class="links">' +
      (cur === 'sit' ? '<button class="lk" data-a="plan">⤓ Export this action plan (.xlsx)</button>' : '') +
      (window.Android && Android.printPdf ? '<button class="lk" data-a="pdf">⎙ Save this page as PDF</button>' : '') +
      '<button class="lk" data-a="imp">⤒ Import the filled workbook (furnace, limits, ideas)</button><button class="lk" data-a="exp">⤓ Export ideas (.xlsx)</button>' +
      '<a class="lk" href="bf-home.html">BF Model ›</a><a class="lk" href="index.html">Iron Making ›</a></div><button class="btn" data-a="close" style="width:100%;margin-top:10px">Close</button>';
    $('#sheet').classList.add('open'); $('#sheetBg').classList.add('open');
    $$('#sheet [data-a]').forEach(function (b) { b.onclick = function () {
      var a = b.getAttribute('data-a'); closeSheet();
      if (a === 'plan') exportPlan(); else if (a === 'exp') exportIdeas(); else if (a === 'imp') { $('#file').value = ''; $('#file').click(); }
      else if (a === 'pdf') { try { Android.printPdf('Action_Plan_' + (cur === 'sit' ? S.cur : cur)); toast('Choose "Save as PDF" as the printer'); } catch (e) { } }
    }; });
  }
  function closeSheet() { $('#sheet').classList.remove('open'); $('#sheetBg').classList.remove('open'); }
  $('#menu').onclick = openSheet; $('#sheetBg').onclick = closeSheet;

  var hs = (location.hash || '').slice(1).split('='), start = TITLES[hs[0]] ? hs[0] : 'list';
  if (start === 'sit' && hs[1] && byId[hs[1]]) S.cur = hs[1];
  try { history.replaceState({ p: start, a: S.cur }, '', '#' + start + (start === 'sit' ? '=' + S.cur : '')); } catch (e) { }
  go(start, null, true);
})();
