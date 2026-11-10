/* Check your taphole – BF Model module. Logic of Taphole_Physical_Abnormality_Module.xlsx
   (Quick_Check, Cast_Log, Summary, Library). Recurring = same abnormality on the same taphole 3 or more times. */
(function () {
  'use strict';
  var D = window.THLIB, KEY = 'th.state.v1', XMIME = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  function $(s, el) { return (el || document).querySelector(s); }
  function $$(s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function toast(m) { var t = $('#toast'); t.textContent = m; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove('show'); }, 3000); }
  function today() { var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function addDays(s, n) { var d = new Date(s + 'T00:00:00'); if (isNaN(d)) d = new Date(); d.setDate(d.getDate() + n); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }

  var STAGES = [
    { k: 'A. Opening', L: 'A', n: 'Opening', s: 'Drilling and opening the taphole', c: '#ffb547' },
    { k: 'B. During cast', L: 'B', n: 'During cast', s: 'Stream, slag and metal while casting', c: '#ff7a1a' },
    { k: 'C. Closing', L: 'C', n: 'Closing', s: 'Mud gun, clay and plugging', c: '#ff5a4a' },
    { k: 'D. Between casts', L: 'D', n: 'Between casts', s: 'Taphole length, block and mushroom', c: '#5aa9ff' }];
  var PRC = { High: 'var(--hi)', Medium: 'var(--md)', Low: 'var(--lo)' }, PRO = { High: 0, Medium: 1, Low: 2 };
  var STS = ['Open', 'In progress', 'Done'], SHIFTS = ['A', 'B', 'C'];

  // ---------------- state ----------------
  function load() { try { var s = JSON.parse(localStorage.getItem(KEY) || 'null'); if (s && s.v === 1) return s; } catch (e) { } return null; }
  var S = load() || { v: 1, n: 0, cast: null, log: [], lib: {}, by: '', step: 1, stage: 'A. Opening', fTh: '', fSt: '' };
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { toast('Could not save: ' + e.message); } }
  function newCast() { return { d: today(), sh: S.cast ? S.cast.sh : 'A', no: '', th: S.cast ? S.cast.th : 'TH-1', by: S.by || '', ans: {}, rm: {}, own: {}, due: {} }; }
  if (!S.cast) S.cast = newCast();
  function lib() { return D.lib.map(function (x) { var o = S.lib[x.id]; return o ? Object.assign({}, x, o) : x; }); }
  function libBy(ab) { return lib().filter(function (x) { return x.ab === ab; })[0] || null; }
  function ths() { var a = []; for (var i = 1; i <= (S.n || 4); i++) a.push('TH-' + i); return a; }

  // ---------------- workbook logic ----------------
  function castStatus(c) {   // Quick_Check C29:C31
    var yes = lib().filter(function (x) { return c.ans[x.id] === 'Y'; }), hi = yes.filter(function (x) { return x.pri === 'High'; }).length;
    return { yes: yes, n: yes.length, hi: hi, txt: hi > 0 ? 'ACT NOW: inform shift in charge' : yes.length > 0 ? 'Abnormal: apply corrections' : 'Normal cast', c: hi > 0 ? 'var(--hi)' : yes.length ? 'var(--md)' : 'var(--ok)' };
  }
  function times(th, ab, upto) { var n = 0; for (var i = 0; i <= (upto == null ? S.log.length - 1 : upto); i++) if (S.log[i] && S.log[i].th === th && S.log[i].ab === ab) n++; return n; }   // Cast_Log K
  function alertOf(i) { var r = S.log[i], L = libBy(r.ab), k = times(r.th, r.ab, i); return k >= 3 ? 'Recurring: apply lasting correction and find root cause' : (L && L.pri === 'High') ? 'Act this cast' : 'Monitor'; }   // Cast_Log L
  function isOpen(r) { return r.st === 'Open' || r.st === 'In progress'; }

  // ---------------- navigation ----------------
  var TITLES = { check: 'Check your taphole', v3d: '3D view', sum: 'Summary', log: 'Cast log', lib: 'Library', guide: 'Guide' }, cur = 'check', VW = null, T3 = window.TH3DATA || { scenes: {}, normal: {}, patterns: [] };
  function go(p, noPush) {
    if (VW && p !== 'v3d') { try { VW.dispose(); } catch (e) { } VW = null; }
    cur = p; $$('.page').forEach(function (s) { s.classList.toggle('on', s.id === 'p-' + p); });
    $$('nav.bn button[data-p]').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-p') === p); });
    $('#ttl').textContent = TITLES[p];
    ({ check: rCheck, v3d: rV3d, sum: rSum, log: rLog, lib: rLib, guide: rGuide })[p]();
    if (!noPush) { try { history.pushState({ p: p, s: S.step, v: S.v3 || null }, '', '#' + p); } catch (e) { } }
    window.scrollTo(0, 0);
  }
  function step(n, noPush) { S.step = n; save(); if (!noPush) { try { history.pushState({ p: 'check', s: n }, '', '#check'); } catch (e) { } } rCheck(); window.scrollTo(0, 0); }
  window.addEventListener('popstate', function (e) { var st = e.state || {}; if ((st.p || 'check') === 'check' && st.s) { S.step = st.s; save(); } if (st.p === 'v3d') S.v3 = st.v || null; go(st.p || 'check', true); });
  $$('nav.bn button[data-p]').forEach(function (b) { b.onclick = function () { go(b.getAttribute('data-p')); }; });
  function atRoot() { return cur === 'check' && S.step <= 1; }
  $('#back').onclick = function () { if (atRoot()) location.href = 'bf-home.html'; else if (cur === 'check') step(S.step - 1); else if (cur === 'v3d' && S.v3) { S.v3 = null; save(); go('v3d'); } else history.back(); };
  window.appBack = function () { if ($('#sheet').classList.contains('open')) { closeSheet(); return true; } if (atRoot()) { location.href = 'bf-home.html'; return true; } if (cur === 'check') step(S.step - 1); else history.back(); return true; };

  var LOGO = '<span class="th-logo" aria-hidden="true"><svg viewBox="0 0 40 40"><rect x="3" y="5" width="22" height="30" rx="3" fill="#3a2a22" stroke="#2a1200" stroke-width="1.6"/><path d="M3 12h22M3 19h22M3 26h22M14 5v7M9 12v7M19 12v7M14 19v7M9 26v9M19 26v9" stroke="#5b4336" stroke-width="1.2"/><circle cx="20" cy="20" r="4.2" fill="#140804" stroke="#2a1200" stroke-width="1.4"/><path d="M23.5 20.5c5 .3 8 3.4 9.6 9.6 1 3.8-1.6 5.6-3.4 5.6" fill="none" stroke="#fff3c4" stroke-width="3.2" stroke-linecap="round"/><path d="M23.5 20.5c5 .3 8 3.4 9.6 9.6" fill="none" stroke="#ff3d00" stroke-width="1.4" stroke-linecap="round"/></svg></span>';
  function stepper() {
    var C = S.cast, st = castStatus(C), ok1 = S.n > 0 && C.th;
    var lab = [['1', 'Taphole & cast'], ['2', 'Stage'], ['3', 'Abnormality'], ['4', 'Results']];
    return '<div class="steps">' + lab.map(function (l, i) { var n = i + 1, dis = n > 1 && !ok1; return '<button data-step="' + n + '" class="' + (S.step === n ? 'on' : (n < S.step || (n === 4 && st.n) ? 'done' : '')) + '"' + (dis ? ' disabled' : '') + '><b>' + l[0] + '</b>' + l[1] + '</button>'; }).join('') + '</div>';
  }

  // ---------------- Check (wizard) ----------------
  function rCheck() {
    var el = $('#p-check'), C = S.cast, h = '';
    if (S.step < 1 || S.step > 4) S.step = 1;
    if (S.step === 1) {
      h += '<div class="hero"><div><div class="top">' + LOGO + '<div><div class="eb">BF Model · cast house · 23 abnormalities</div><h1>Check your <span>taphole</span></h1></div></div>' +
        '<p style="margin-top:10px">Enter how your taphole behaved this cast: pick the stage, answer Yes or No for each abnormality, and get the immediate correction, the lasting correction and the likely causes.</p>' +
        '<div class="row2"><button class="btn sm" id="otherMods">☰ Other BF modules</button><a class="btn sm" href="bf-home.html">⌂ BF Model</a></div></div></div>';
    }
    h += stepper();
    if (S.step === 1) {
      h += '<div class="card"><h3>How many tapholes does your furnace have?</h3><div class="nums">' + [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) { return '<button data-n="' + n + '"' + (S.n === n ? ' class="on"' : '') + '>' + n + '</button>'; }).join('') + '</div></div>';
      if (S.n) {
        h += '<div class="card"><h3>Which taphole was cast?</h3><div class="thc">' + ths().map(function (t) { return '<button data-th="' + t + '"' + (C.th === t ? ' class="on"' : '') + '>' + t + '</button>'; }).join('') + '</div>' +
          '<div class="grp2" style="margin-top:14px">Cast details</div>' +
          '<div class="f"><label for="cD">Date</label><input type="date" id="cD" value="' + esc(C.d) + '"></div>' +
          '<div class="f"><label for="cS">Shift</label><select id="cS">' + SHIFTS.map(function (s) { return '<option' + (C.sh === s ? ' selected' : '') + '>' + s + '</option>'; }).join('') + '</select></div>' +
          '<div class="f"><label for="cN">Cast no.</label><input id="cN" class="tx" value="' + esc(C.no) + '" placeholder="e.g. C-1452"></div>' +
          '<div class="f"><label for="cB">Checked by</label><input id="cB" class="tx" value="' + esc(C.by) + '" placeholder="Name"></div>' +
          '<div class="foot2"><button class="btn pri" id="next1">Next: choose stage ›</button></div></div>';
      }
    } else if (S.step === 2) {
      h += '<div class="state"><span class="pill NA">' + esc(C.th) + '</span>' + esc(C.d) + ' · shift ' + esc(C.sh) + (C.no ? ' · ' + esc(C.no) : '') + '</div>';
      h += '<div class="card"><h3>Which stage of the cast?</h3><p class="sub">Choose a stage to check its abnormalities. You can check more than one stage.</p>' + STAGES.map(function (s) {
        var items = lib().filter(function (x) { return x.st === s.k; }), y = items.filter(function (x) { return C.ans[x.id] === 'Y'; }).length, a = items.filter(function (x) { return C.ans[x.id]; }).length;
        return '<button class="stg" data-stage="' + esc(s.k) + '" style="--c:' + s.c + '"><span class="L">' + s.L + '</span><span><b>' + s.n + '</b><small>' + s.s + '</small></span><span class="cnt">' + a + ' / ' + items.length + ' answered' + (y ? '<em>' + y + ' yes</em>' : '') + '</span></button>';
      }).join('') + '<div class="foot2"><button class="btn" id="b2">‹ Taphole</button><button class="btn pri" id="toRes">See results ›</button></div></div>';
    } else if (S.step === 3) {
      var sg = STAGES.filter(function (s) { return s.k === S.stage; })[0] || STAGES[0], items = lib().filter(function (x) { return x.st === sg.k; });
      h += '<div class="state"><span class="pill NA">' + esc(C.th) + '</span>Stage ' + sg.L + ' · ' + sg.n + '</div>';
      h += '<div class="card" style="border-left:4px solid ' + sg.c + '"><h3>' + sg.L + ' · ' + sg.n + ': did you see this?</h3>' + items.map(function (x) {
        var a = C.ans[x.id];
        return '<div class="ab' + (a === 'Y' ? ' y' : a === 'N' ? ' n' : '') + '"><div class="h"><b>' + esc(x.ab) + '</b><span class="pri ' + x.pri + '" style="--c:' + PRC[x.pri] + '">' + esc(x.pri) + '</span></div><p>' + esc(x.see) + '</p>' +
          (T3.scenes[x.id] ? '<div style="margin-top:8px"><button class="b3" data-3d="' + x.id + '">▶ See it in 3D</button></div>' : '') + '<div class="yn"><button class="Y' + (a === 'Y' ? ' on' : '') + '" data-yn="' + x.id + '|Y">Yes</button><button class="N' + (a === 'N' ? ' on' : '') + '" data-yn="' + x.id + '|N">No</button></div></div>';
      }).join('');
      var si = STAGES.indexOf(sg), nx = STAGES[si + 1];
      h += '<div class="foot2"><button class="btn" id="b3">‹ Stages</button>' + (nx ? '<button class="btn" data-nextstage="' + esc(nx.k) + '">Next: ' + nx.n + ' ›</button>' : '') + '<button class="btn pri" id="toRes">Results ›</button></div></div>';
    } else {
      var st = castStatus(C);
      h += '<div class="state"><span class="pill NA">' + esc(C.th) + '</span>' + esc(C.d) + ' · shift ' + esc(C.sh) + (C.no ? ' · ' + esc(C.no) : '') + (C.by ? ' · ' + esc(C.by) : '') + '</div>';
      h += '<div class="ban" style="--c:' + st.c + '"><b>' + esc(st.txt) + '</b><small>' + st.n + ' abnormalit' + (st.n === 1 ? 'y' : 'ies') + ' seen · ' + st.hi + ' high priority</small></div>';
      if (!st.n) h += '<div class="note" style="margin-top:12px">No abnormality marked Yes. Go back to the stages if something was seen.</div>';
      var yid = st.yes.map(function (x) { return x.id; });
      (T3.patterns || []).filter(function (pt) { return pt.ids.filter(function (i) { return yid.indexOf(i) >= 0; }).length >= pt.min; }).forEach(function (pt) {
        h += '<div class="pat"><b>Pattern: ' + esc(pt.t) + '</b><p>' + esc(pt.a) + '</p></div>';
      });
      st.yes.slice().sort(function (a, b) { return PRO[a.pri] - PRO[b.pri]; }).forEach(function (x) {
        var k = times(C.th, x.ab) + 1;
        h += '<div class="res" style="--c:' + PRC[x.pri] + '"><div class="meta"><span class="pri ' + x.pri + '" style="--c:' + PRC[x.pri] + '">' + x.pri + '</span>' + esc(x.st) + ' · ' + x.id + '</div><h3>' + esc(x.ab) + '</h3>' +
          (k >= 3 ? '<div class="rec">Recurring: ' + k + ' times on ' + esc(C.th) + ' with this cast. Apply the lasting correction and find the root cause.</div>' : k === 2 ? '<p class="sub">2nd time on ' + esc(C.th) + '.</p>' : '') +
          (T3.scenes[x.id] ? '<div style="margin-top:8px"><button class="b3" data-3d="' + x.id + '">▶ See it in 3D</button></div>' : '') +
          '<div class="blk im"><h4>Immediate correction (this cast)</h4><p>' + esc(x.imm) + '</p></div>' +
          '<div class="blk la"><h4>Lasting correction</h4><p>' + esc(x.last) + '</p></div>' +
          '<div class="blk ca"><h4>Likely causes</h4><p>' + esc(x.cause) + '</p></div>' +
          '<div class="grp2">For the cast log</div><div class="f wide"><label for="rm' + x.id + '">Remarks / observation</label><input id="rm' + x.id + '" class="tx" data-rm="' + x.id + '" value="' + esc(C.rm[x.id] || '') + '" placeholder="e.g. measured 2.1 m"></div>' +
          '<div class="f"><label for="ow' + x.id + '">Action owner</label><input id="ow' + x.id + '" class="tx" data-ow="' + x.id + '" value="' + esc(C.own[x.id] || '') + '" placeholder="Shift engineer"></div>' +
          '<div class="f"><label for="du' + x.id + '">Target date</label><input type="date" id="du' + x.id + '" data-du="' + x.id + '" value="' + esc(C.due[x.id] || addDays(C.d, x.pri === 'High' ? 1 : 3)) + '"></div></div>';
      });
      h += '<div class="note warn" style="margin-top:12px">' + esc((D.guide.filter(function (g) { return g[0] === 'Safety'; })[0] || ['', ''])[1]) + '</div>';
      h += '<div class="foot2"><button class="btn" id="b4">‹ Change answers</button>' + (st.n ? '<button class="btn pri" id="saveLog">Save to cast log</button>' : '') + '</div><div class="foot2"><button class="btn sm" id="newCast">+ New cast</button></div>';
    }
    var el2 = el; el2.innerHTML = h;
    $$('[data-step]', el).forEach(function (b) { b.onclick = function () { step(+b.getAttribute('data-step')); }; });
    $$('[data-n]', el).forEach(function (b) { b.onclick = function () { S.n = +b.getAttribute('data-n'); if (ths().indexOf(C.th) < 0) C.th = 'TH-1'; save(); rCheck(); }; });
    $$('[data-th]', el).forEach(function (b) { b.onclick = function () { C.th = b.getAttribute('data-th'); save(); rCheck(); }; });
    var bind = function (id, k) { var i = $('#' + id); if (i) i.onchange = function () { C[k] = i.value.trim(); if (k === 'by') S.by = C.by; save(); }; };
    bind('cD', 'd'); bind('cS', 'sh'); bind('cN', 'no'); bind('cB', 'by');
    var om = $('#otherMods'); if (om) om.onclick = function () { $('#menu').click(); };
    var n1 = $('#next1'); if (n1) n1.onclick = function () { ['cD', 'cS', 'cN', 'cB'].forEach(function (id) { var i = $('#' + id); if (i) i.onchange(); }); step(2); };
    $$('[data-stage]', el).forEach(function (b) { b.onclick = function () { S.stage = b.getAttribute('data-stage'); step(3); }; });
    $$('[data-nextstage]', el).forEach(function (b) { b.onclick = function () { S.stage = b.getAttribute('data-nextstage'); step(3); }; });
    $$('[data-yn]', el).forEach(function (b) { b.onclick = function () { var p = b.getAttribute('data-yn').split('|'); C.ans[p[0]] = C.ans[p[0]] === p[1] ? undefined : p[1]; if (!C.ans[p[0]]) delete C.ans[p[0]]; save(); var y = window.scrollY; rCheck(); window.scrollTo(0, y); }; });
    var tr = $('#toRes'); if (tr) tr.onclick = function () { step(4); };
    ['b2', 'b3', 'b4'].forEach(function (id, i) { var b = $('#' + id); if (b) b.onclick = function () { step(i + 1); }; });
    $$('[data-rm]', el).forEach(function (i) { i.onchange = function () { C.rm[i.getAttribute('data-rm')] = i.value.trim(); save(); }; });
    $$('[data-ow]', el).forEach(function (i) { i.onchange = function () { C.own[i.getAttribute('data-ow')] = i.value.trim(); save(); }; });
    $$('[data-du]', el).forEach(function (i) { i.onchange = function () { C.due[i.getAttribute('data-du')] = i.value; save(); }; });
    var sl = $('#saveLog'); if (sl) sl.onclick = function () {
      $$('[data-rm],[data-ow],[data-du]', el).forEach(function (i) { i.onchange(); });
      var st = castStatus(C), n = 0;
      st.yes.forEach(function (x) { if (S.log.length >= 300) return; S.log.push({ d: C.d, sh: C.sh, cast: C.no, th: C.th, ab: x.ab, rm: C.rm[x.id] || '', own: C.own[x.id] || '', due: C.due[x.id] || addDays(C.d, x.pri === 'High' ? 1 : 3), st: 'Open' }); n++; });
      S.cast = newCast(); S.step = 1; save(); toast(n + ' saved to the cast log'); go('sum');
    };
    var nc = $('#newCast'); if (nc) nc.onclick = function () { if (Object.keys(C.ans).length && !confirm('Start a new cast? Answers not saved to the log will be cleared.')) return; S.cast = newCast(); step(1); };
  }


  // ---------------- 3D view (cutaway scenes from Taphole watch) ----------------
  var THB = {}, thBusy = false, thQ = [], LABELS = true;
  function pump() {
    if (thBusy || !thQ.length || !window.TH3D) return; thBusy = true; var id = thQ.shift();
    setTimeout(function () { var sc = sceneOf(id); THB[id] = sc ? window.TH3D.thumb(sc.s, 400, 250) : ''; thBusy = false; $$('[data-pic="' + id + '"]').forEach(function (el) { if (THB[id]) el.style.backgroundImage = 'url(' + THB[id] + ')'; }); pump(); }, 16);
  }
  function sceneOf(id) { if (/^N-/.test(id)) { var n = T3.normal[id.slice(2)]; return n ? { s: n.s, look: n.look, call: [], name: n.name } : null; } return T3.scenes[id] || null; }
  function rV3d() {
    var el = $('#p-v3d'), L = lib();
    if (!window.TH3D || !window.THREE) { el.innerHTML = '<div class="note warn">The 3D engine could not start on this device.</div>'; return; }
    if (!S.v3) {
      var h = '<div class="note">Every abnormality as a 3D cutaway of the taphole: hearth, clay mushroom, channel, drill, mud gun, stream and runner. Tap one to turn and zoom it and compare it with normal.</div>';
      STAGES.forEach(function (s) {
        var k = s.L, nm = T3.normal[k];
        h += '<div class="cat" style="margin:16px 2px 4px;font:700 13px var(--f-display);letter-spacing:.12em;text-transform:uppercase;color:' + s.c + '">' + esc(s.k) + '</div><div class="g3">';
        if (nm) h += '<button data-3d="N-' + k + '" style="--c:#3ccf8e"><span class="pic" data-pic="N-' + k + '"></span><span class="tx"><b>' + esc(nm.name) + '</b><small>REFERENCE</small></span></button>';
        L.filter(function (x) { return x.st === s.k; }).forEach(function (x) { h += '<button data-3d="' + x.id + '" style="--c:' + PRC[x.pri] + '"><span class="pic" data-pic="' + x.id + '"></span><span class="tx"><b>' + esc(x.ab) + '</b><small>' + x.id + ' · ' + x.pri.toUpperCase() + (S.cast.ans[x.id] === 'Y' ? ' · YES THIS CAST' : '') + '</small></span></button>'; });
        h += '</div>';
      });
      el.innerHTML = h;
      $$('[data-pic]', el).forEach(function (p) { var id = p.getAttribute('data-pic'); if (THB[id]) p.style.backgroundImage = 'url(' + THB[id] + ')'; else if (thQ.indexOf(id) < 0) thQ.push(id); });
      pump(); return;
    }
    var id = S.v3, isN = /^N-/.test(id), x = isN ? null : L.filter(function (y) { return y.id === id; })[0], stK = isN ? id.slice(2) : (x ? x.st.charAt(0) : 'A'), N = T3.normal[stK], sc = sceneOf(id);
    if (!sc) { S.v3 = null; rV3d(); return; }
    var all = L.map(function (y) { return y.id; }), i = all.indexOf(id), prev = isN ? null : all[i - 1], next = isN ? null : all[i + 1];
    var h = '<div class="row2" style="margin-top:0"><button class="btn sm" id="v3all">‹ All 3D scenes</button></div>' +
      '<div class="res" style="--c:' + (isN ? '#3ccf8e' : PRC[x.pri]) + ';margin-top:10px"><div class="meta">' + (isN ? '<span class="pri" style="--c:#3ccf8e">Reference</span>' : '<span class="pri ' + x.pri + '" style="--c:' + PRC[x.pri] + '">' + x.pri + '</span>' + esc(x.st) + ' · ' + x.id) + '</div><h3>' + esc(isN ? sc.name : x.ab) + '</h3></div>' +
      '<div class="t3" id="v3host" style="margin-top:10px"></div>' +
      '<div class="vbar">' + (isN ? '' : '<button class="cmp" data-cmp aria-pressed="' + (!!S.v3n) + '">Compare: ' + esc(N ? N.name.toLowerCase() : 'normal') + '</button>') +
      '<button data-vw="section">Cutaway</button><button data-vw="cast">Cast house</button><button data-vw="face">Taphole face</button><button data-vw="hearth">Hearth</button><button data-vw="runner">Runner</button>' +
      '<button data-lab aria-pressed="' + LABELS + '">Labels</button><button data-pause aria-pressed="false">Pause</button></div>' +
      '<p class="cap" id="v3cap"></p><ul class="leg" id="v3leg"></ul><p class="hint3">Drag to turn, pinch to zoom, two fingers to move. The front half of the wall is cut away along the taphole.</p>';
    if (!isN && x) {
      var k3 = ths().map(function (t) { return [t, times(t, x.ab)]; }).filter(function (q) { return q[1]; });
      if (k3.some(function (q) { return q[1] >= 3; })) h += '<div class="rec">Recurring in the cast log: ' + k3.filter(function (q) { return q[1] >= 3; }).map(function (q) { return q[0] + ' ' + q[1] + ' times'; }).join(', ') + '. Apply the lasting correction and find the root cause.</div>';
      h += '<div class="card"><div class="blk"><h4>What you see</h4><p>' + esc(x.see) + '</p></div>' +
        '<div class="blk im"><h4>Immediate correction (this cast)</h4><p>' + esc(x.imm) + '</p></div><div class="blk la"><h4>Lasting correction</h4><p>' + esc(x.last) + '</p></div>' +
        '<div class="blk ca"><h4>Likely causes</h4><p>' + esc(x.cause) + '</p></div>' +
        (x.pri === 'High' ? '<div class="note warn" style="margin-top:10px">' + esc((T3.safety || []).join(' ')) + '</div>' : '') +
        '<div class="row2"><button class="btn pri" id="v3yes">' + (S.cast.ans[x.id] === 'Y' ? '✓ Marked Yes in this cast' : 'Mark Yes in this cast (' + esc(S.cast.th) + ')') + '</button></div></div>';
    } else if (N) {
      h += '<div class="card"><div class="blk la"><h4>What normal looks like</h4><p>' + esc(N.look) + '</p></div><div class="row2">' + L.filter(function (y) { return y.st.charAt(0) === stK; }).map(function (y) { return '<button class="btn sm" data-3d="' + y.id + '">' + esc(y.ab) + '</button>'; }).join('') + '</div></div>';
    }
    h += '<div class="pn3">' + (prev ? '<button data-3d="' + prev + '">‹ ' + prev + '</button>' : '<span></span>') + (next ? '<button data-3d="' + next + '">' + next + ' ›</button>' : '') + '</div>';
    if (VW) { try { VW.dispose(); } catch (e) { } VW = null; }
    el.innerHTML = h;
    var host = $('#v3host');
    try { VW = new window.TH3D.Viewer(host, { labels: LABELS }); } catch (e) { host.innerHTML = '<div class="t3-err">3D could not start: ' + esc(e.message) + '</div>'; return; }
    function show() {
      var useN = !isN && S.v3n && N, s3 = useN ? { s: N.s, look: N.look, call: [] } : sc;
      VW.set(s3.s, useN ? [] : (sc.call || []));
      var tag = host.querySelector('.t3-tag'); if (!tag) { tag = document.createElement('span'); host.appendChild(tag); }
      tag.className = 't3-tag ' + (useN || isN ? 'nm' : 'ab'); tag.textContent = useN || isN ? 'Normal' : id;
      $('#v3cap').innerHTML = '<b>' + (useN ? 'Normal: ' : 'In this view: ') + '</b>' + esc(s3.look);
      $('#v3leg').innerHTML = useN ? '' : (sc.call || []).map(function (c, j) { return '<li><i>' + (j + 1) + '</i>' + esc(c[1]) + '</li>'; }).join('');
      $$('[data-vw]', el).forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-vw') === (s3.s.view || 'section')); });
    }
    show();
    $('#v3all').onclick = function () { S.v3 = null; save(); go('v3d'); };
    var cm = $('[data-cmp]', el); if (cm) cm.onclick = function () { S.v3n = !S.v3n; save(); cm.setAttribute('aria-pressed', !!S.v3n); show(); };
    $$('[data-vw]', el).forEach(function (b) { b.onclick = function () { VW.view(b.getAttribute('data-vw')); $$('[data-vw]', el).forEach(function (q) { q.setAttribute('aria-pressed', q === b); }); }; });
    $('[data-lab]', el).onclick = function () { LABELS = !LABELS; this.setAttribute('aria-pressed', LABELS); VW.labels(LABELS); };
    $('[data-pause]', el).onclick = function () { var pz = this.getAttribute('aria-pressed') !== 'true'; this.setAttribute('aria-pressed', pz); this.textContent = pz ? 'Play' : 'Pause'; VW.pause(pz); };
    var yb = $('#v3yes'); if (yb) yb.onclick = function () { S.cast.ans[x.id] = 'Y'; save(); toast('Marked Yes for ' + S.cast.th + ' · see Check › Results'); yb.textContent = '✓ Marked Yes in this cast'; };
  }

  // ---------------- Summary ----------------
  function rSum() {
    var el = $('#p-sum'), L = lib(), T = ths(), log = S.log;
    var open = log.filter(isOpen), openHi = open.filter(function (r) { var x = libBy(r.ab); return x && x.pri === 'High'; }), rec = log.map(function (r, i) { return alertOf(i); }).filter(function (a) { return /^Recurring/.test(a); }).length;
    var h = '<div class="kk"><div style="--c:#9fe6e3"><small>Entries in log</small><b>' + log.length + '</b></div><div style="--c:var(--md)"><small>Open actions</small><b>' + open.length + '</b></div>' +
      '<div style="--c:var(--hi)"><small>Open high priority</small><b>' + openHi.length + '</b></div><div style="--c:#ff8a7a"><small>Recurring alerts</small><b>' + rec + '</b></div></div>';
    h += '<div class="card"><h3>By taphole</h3><div class="kk" style="margin-top:6px">' + T.map(function (t) { var n = log.filter(function (r) { return r.th === t; }).length, o = log.filter(function (r) { return r.th === t && isOpen(r); }).length; return '<div style="--c:#ffb547"><small>' + t + '</small><b>' + n + '</b><span class="sub">' + o + ' open</span></div>'; }).join('') + '</div></div>';
    h += '<div class="card"><h3>Abnormality × taphole</h3><div class="scroll"><table class="mx"><tr><th>Abnormality</th><th>Pri.</th>' + T.map(function (t) { return '<th>' + t + '</th>'; }).join('') + '<th>Total</th><th>Open</th></tr>';
    STAGES.forEach(function (s) {
      h += '<tr class="g"><td colspan="' + (T.length + 4) + '">' + esc(s.k) + '</td></tr>';
      L.filter(function (x) { return x.st === s.k; }).forEach(function (x) {
        var c = T.map(function (t) { return log.filter(function (r) { return r.ab === x.ab && r.th === t; }).length; }), tot = c.reduce(function (a, b) { return a + b; }, 0), op = log.filter(function (r) { return r.ab === x.ab && isOpen(r); }).length;
        h += '<tr><td>' + esc(x.ab) + '</td><td><span class="pri ' + x.pri + '" style="--c:' + PRC[x.pri] + '">' + x.pri[0] + '</span></td>' + c.map(function (n) { return '<td class="' + (n ? 'v' : 'z') + '">' + n + '</td>'; }).join('') + '<td class="' + (tot ? 'v' : 'z') + '">' + tot + '</td><td class="' + (op ? 'v' : 'z') + '">' + op + '</td></tr>';
      });
    });
    h += '</table></div></div>';
    var recs = {}; log.forEach(function (r) { var k = r.th + '|' + r.ab; recs[k] = (recs[k] || 0) + 1; });
    var rl = Object.keys(recs).filter(function (k) { return recs[k] >= 3; });
    h += '<div class="card"><h3>Recurring problems</h3>' + (rl.length ? rl.map(function (k) { var p = k.split('|'), x = libBy(p[1]); return '<div class="lg" style="--c:var(--hi)"><div class="t"><span>' + esc(p[0]) + ' · ' + recs[k] + ' times</span></div><b>' + esc(p[1]) + '</b>' + (x ? '<p><b style="display:inline;font-size:13px;color:#7fe0b8">Lasting correction:</b> ' + esc(x.last) + '</p>' : '') + '</div>'; }).join('') : '<p class="sub">None. Recurring = the same abnormality on the same taphole 3 or more times.</p>') + '</div>';
    h += '<div class="card"><h3>Open actions</h3>' + (open.length ? logRows(log.map(function (r, i) { return i; }).filter(function (i) { return isOpen(log[i]); })) : '<p class="sub">No open actions.</p>') + '</div>';
    h += '<div class="foot2"><button class="btn pri" data-goto="check">New check</button><button class="btn" data-goto="log">Cast log</button></div>';
    el.innerHTML = h; bindLog(el); $$('[data-goto]', el).forEach(function (b) { b.onclick = function () { if (b.getAttribute('data-goto') === 'check') S.step = 1; go(b.getAttribute('data-goto')); }; });
  }
  function logRows(idx) {
    return idx.slice().reverse().map(function (i) {
      var r = S.log[i], x = libBy(r.ab), al = alertOf(i), pr = x ? x.pri : 'Medium';
      return '<div class="lg" style="--c:' + PRC[pr] + '"><div class="t"><span>' + esc(r.d) + ' · ' + esc(r.sh) + (r.cast ? ' · ' + esc(r.cast) : '') + ' · <b style="display:inline;color:#ffd9a8">' + esc(r.th) + '</b></span><span class="pill NA">' + esc(r.st) + '</span></div>' +
        '<b>' + esc(r.ab) + '</b><p><span class="pri ' + pr + '" style="--c:' + PRC[pr] + '">' + pr + '</span> ' + esc(x ? x.st : 'Not in library') + ' · <span style="color:' + (/^Recurring/.test(al) ? '#ff8a7a' : al === 'Act this cast' ? '#ffb547' : 'var(--muted)') + '">' + esc(al) + '</span></p>' +
        (r.rm ? '<p>' + esc(r.rm) + '</p>' : '') + '<p>Owner: ' + esc(r.own || '—') + ' · target ' + esc(r.due || '—') + '</p>' +
        (x ? '<p><b style="display:inline;font-size:12.5px;color:#ff8a7a">Now:</b> ' + esc(x.imm) + '</p><p><b style="display:inline;font-size:12.5px;color:#7fe0b8">Lasting:</b> ' + esc(x.last) + '</p>' : '') +
        '<div class="act">' + STS.filter(function (s) { return s !== r.st; }).map(function (s) { return '<button class="btn sm" data-ls="' + i + '|' + s + '">' + s + '</button>'; }).join('') + '<button class="btn sm" data-le="' + i + '">Edit</button><button class="btn sm" data-ld="' + i + '">Delete</button></div></div>';
    }).join('');
  }
  function bindLog(el) {
    $$('[data-ls]', el).forEach(function (b) { b.onclick = function () { var p = b.getAttribute('data-ls').split('|'); S.log[+p[0]].st = p[1]; save(); go(cur, true); toast('Status: ' + p[1]); }; });
    $$('[data-ld]', el).forEach(function (b) { b.onclick = function () { if (!confirm('Delete this log entry?')) return; S.log.splice(+b.getAttribute('data-ld'), 1); save(); go(cur, true); }; });
    $$('[data-le]', el).forEach(function (b) { b.onclick = function () { editRow(+b.getAttribute('data-le')); }; });
  }
  function editRow(i) {
    var r = S.log[i];
    sheet('<h3>Edit log entry</h3><p class="sub">' + esc(r.th) + ' · ' + esc(r.ab) + '</p>' +
      '<div class="f wide"><label for="eRm">Remarks / observation</label><textarea id="eRm">' + esc(r.rm) + '</textarea></div>' +
      '<div class="f"><label for="eOw">Action owner</label><input id="eOw" class="tx" value="' + esc(r.own) + '"></div>' +
      '<div class="f"><label for="eDu">Target date</label><input type="date" id="eDu" value="' + esc(r.due) + '"></div>' +
      '<div class="row2"><button class="btn pri" id="eOk">Save</button><button class="btn" id="eNo">Cancel</button></div>');
    $('#eOk').onclick = function () { r.rm = $('#eRm').value.trim(); r.own = $('#eOw').value.trim(); r.due = $('#eDu').value; save(); closeSheet(); go(cur, true); };
    $('#eNo').onclick = closeSheet;
  }

  // ---------------- Cast log ----------------
  function rLog() {
    var el = $('#p-log'), T = ths();
    var h = '<div class="chips">' + [''].concat(T).map(function (t) { return '<button data-ft="' + t + '"' + (S.fTh === t ? ' class="on"' : '') + '>' + (t || 'All tapholes') + '</button>'; }).join('') + '</div>' +
      '<div class="chips">' + [''].concat(STS).map(function (s) { return '<button data-fs="' + s + '"' + (S.fSt === s ? ' class="on"' : '') + '>' + (s || 'All status') + '</button>'; }).join('') + '</div>';
    var idx = S.log.map(function (r, i) { return i; }).filter(function (i) { var r = S.log[i]; return (!S.fTh || r.th === S.fTh) && (!S.fSt || r.st === S.fSt); });
    h += idx.length ? logRows(idx) : '<div class="note" style="margin-top:12px">No entries. Use Check to record a cast; each abnormality seen becomes one row.</div>';
    h += '<div class="row2"><button class="btn sm" id="lExp">⤓ Export cast log (.xlsx)</button><button class="btn sm" id="lImp">⤒ Import cast log</button></div>';
    el.innerHTML = h; bindLog(el);
    $$('[data-ft]', el).forEach(function (b) { b.onclick = function () { S.fTh = b.getAttribute('data-ft'); save(); rLog(); }; });
    $$('[data-fs]', el).forEach(function (b) { b.onclick = function () { S.fSt = b.getAttribute('data-fs'); save(); rLog(); }; });
    $('#lExp').onclick = exportLog; $('#lImp').onclick = function () { $('#file').value = ''; $('#file').click(); };
  }

  // ---------------- Library ----------------
  function rLib() {
    var el = $('#p-lib'), h = '<div class="note">The 23 abnormalities with what you see, likely causes, immediate and lasting correction, and priority. Edit to match your plant practice (taphole target length, bit sizes, clay grade).</div>';
    STAGES.forEach(function (s) {
      h += '<div class="card" style="border-left:4px solid ' + s.c + '"><h3>' + esc(s.k) + '</h3>' + lib().filter(function (x) { return x.st === s.k; }).map(function (x) {
        return '<details class="ab"><summary style="cursor:pointer;list-style:none"><div class="h"><b>' + esc(x.ab) + (S.lib[x.id] ? ' <small style="color:#ffd27a">(edited)</small>' : '') + '</b><span class="pri ' + x.pri + '" style="--c:' + PRC[x.pri] + '">' + x.pri + '</span></div><p>' + esc(x.see) + '</p></summary>' +
          '<div class="blk ca"><h4>Likely causes</h4><p>' + esc(x.cause) + '</p></div><div class="blk im"><h4>Immediate correction (this cast)</h4><p>' + esc(x.imm) + '</p></div><div class="blk la"><h4>Lasting correction</h4><p>' + esc(x.last) + '</p></div>' +
          '<div class="row2">' + (T3.scenes[x.id] ? '<button class="btn sm" data-3d="' + x.id + '">▶ 3D</button>' : '') + '<button class="btn sm" data-ed="' + x.id + '">Edit</button>' + (S.lib[x.id] ? '<button class="btn sm" data-rs="' + x.id + '">Reset</button>' : '') + '</div></details>';
      }).join('') + '</div>';
    });
    el.innerHTML = h;
    $$('[data-ed]', el).forEach(function (b) { b.onclick = function () { editLib(b.getAttribute('data-ed')); }; });
    $$('[data-rs]', el).forEach(function (b) { b.onclick = function () { delete S.lib[b.getAttribute('data-rs')]; save(); rLib(); }; });
  }
  function editLib(id) {
    var x = lib().filter(function (y) { return y.id === id; })[0], F = [['see', 'What you see'], ['cause', 'Likely causes'], ['imm', 'Immediate correction (this cast)'], ['last', 'Lasting correction']];
    sheet('<h3>' + esc(x.ab) + '</h3>' + F.map(function (f) { return '<div class="f wide"><label for="L' + f[0] + '">' + f[1] + '</label><textarea id="L' + f[0] + '">' + esc(x[f[0]]) + '</textarea></div>'; }).join('') +
      '<div class="f"><label for="Lpri">Priority</label><select id="Lpri">' + ['High', 'Medium', 'Low'].map(function (p) { return '<option' + (x.pri === p ? ' selected' : '') + '>' + p + '</option>'; }).join('') + '</select></div>' +
      '<div class="row2"><button class="btn pri" id="LOk">Save</button><button class="btn" id="LNo">Cancel</button></div>');
    $('#LOk').onclick = function () { var base = D.lib.filter(function (y) { return y.id === id; })[0], o = {}; F.forEach(function (f) { var v = $('#L' + f[0]).value.trim(); if (v && v !== base[f[0]]) o[f[0]] = v; }); var p = $('#Lpri').value; if (p !== base.pri) o.pri = p; if (Object.keys(o).length) S.lib[id] = o; else delete S.lib[id]; save(); closeSheet(); rLib(); toast('Library updated'); };
    $('#LNo').onclick = closeSheet;
  }

  // ---------------- Guide ----------------
  function rGuide() {
    var map = { Quick_Check: 'Check', Cast_Log: 'Cast log', Summary: 'Summary', Library: 'Library' }, h = '<div class="card gtxt"><h3>' + esc(D.guide[0][0]) + '</h3><p>' + esc(D.guide[1][0]) + '</p>';
    D.guide.slice(2).forEach(function (g) { if (/^(Sheet|Colour|Yellow cells|White cells|Red priority)$/.test(g[0])) return; h += '<h4>' + esc(map[g[0]] || g[0]) + '</h4><p>' + esc(String(g[1] || '').replace('put Y against each abnormality seen', 'choose the stage and answer Yes or No for each abnormality').replace('Choose the abnormality from the list; stage, causes, corrections and priority fill in.', 'Saved from Check: stage, causes, corrections and priority fill in.')) + '</p>'; });
    h += '<h4>Priority</h4><p><span class="pri High" style="--c:var(--hi)">High</span> safety or hearth risk, act this cast · <span class="pri Medium" style="--c:var(--md)">Medium</span> correct soon · <span class="pri Low" style="--c:var(--lo)">Low</span> monitor.</p></div>';
    $('#p-guide').innerHTML = h;
  }

  // ---------------- files ----------------
  function b64(u8) { var s = '', ch = 0x8000; for (var i = 0; i < u8.length; i += ch) s += String.fromCharCode.apply(null, u8.subarray(i, i + ch)); return btoa(s); }
  function saveBytes(name, u8) {
    if (!(window.AndroidBridge && AndroidBridge.saveFile) && window.Android && window.IM_SINTER_URL) {
      try { localStorage.setItem('im.save', JSON.stringify({ name: name, mime: XMIME, b64: b64(u8), t: Date.now() })); localStorage.setItem('im.route', JSON.stringify({ p: 'www/iz-save.html', t: Date.now() })); } catch (e) { toast('File too large: ' + e.message); return; }
      location.href = window.IM_SINTER_URL; return;
    }
    var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([u8], { type: XMIME })); a.download = name; document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500); toast('Downloaded ' + name);
  }
  function exportLog() {
    var a = [['Cast log: physical abnormalities and actions'], ['Exported from Iron Making · BF Model · Check your taphole · ' + today()], [], ['Date', 'Shift', 'Cast no.', 'Taphole', 'Abnormality', 'Remarks / observation', 'Stage', 'Priority', 'Immediate correction', 'Lasting correction', 'Times on this taphole', 'Alert', 'Action owner', 'Target date', 'Status']];
    S.log.forEach(function (r, i) { var x = libBy(r.ab); a.push([r.d, r.sh, r.cast, r.th, r.ab, r.rm, x ? x.st : 'Not in library', x ? x.pri : '', x ? x.imm : '', x ? x.last : '', times(r.th, r.ab, i), alertOf(i), r.own, r.due, r.st]); });
    var wb = XLSX.utils.book_new(), ws = XLSX.utils.aoa_to_sheet(a); ws['!cols'] = [12, 6, 10, 8, 34, 34, 16, 9, 44, 44, 9, 34, 18, 12, 11].map(function (w) { return { wch: w }; });
    XLSX.utils.book_append_sheet(wb, ws, 'Cast_Log'); saveBytes('Taphole_Cast_Log_' + today() + '.xlsx', new Uint8Array(XLSX.write(wb, { type: 'array', bookType: 'xlsx' })));
  }
  function importFile(fl) {
    var fr = new FileReader();
    fr.onload = function () {
      try {
        var wb = XLSX.read(new Uint8Array(fr.result), { type: 'array', cellDates: true }), ws = wb.Sheets.Cast_Log; if (!ws) { toast('No Cast_Log sheet in ' + fl.name); return; }
        var rows = XLSX.utils.sheet_to_json(ws, { header: 1, raw: true, defval: '' }), hi = rows.findIndex(function (r) { return String(r[0]).trim() === 'Date' && /Abnormality/.test(String(r[4])); }); if (hi < 0) { toast('Cast_Log header not found'); return; }
        var ds = function (v) { if (v instanceof Date) return v.getFullYear() + '-' + ('0' + (v.getMonth() + 1)).slice(-2) + '-' + ('0' + v.getDate()).slice(-2); if (typeof v === 'number' && v > 30000) { var d = new Date(Math.round((v - 25569) * 864e5)); return d.toISOString().slice(0, 10); } return String(v || ''); };
        var stOf = function (v) { return STS.indexOf(v) >= 0 ? v : 'Open'; }, idxOf = function (r) { return /^Remarks/.test(String(rows[hi][5])) ? 0 : 0; };
        var n = 0, maxTh = S.n || 0;
        rows.slice(hi + 1).forEach(function (r) {
          if (!r[4] || S.log.length >= 300) return; idxOf(r);
          var e = { d: ds(r[0]) || today(), sh: String(r[1] || ''), cast: String(r[2] || ''), th: String(r[3] || 'TH-1'), ab: String(r[4]).trim(), rm: String(r[5] || ''), own: String(r[12] || ''), due: ds(r[13]), st: stOf(r[14]) };
          if (S.log.some(function (x) { return x.d === e.d && x.cast === e.cast && x.th === e.th && x.ab === e.ab; })) return;
          var m = /^TH-(\d+)$/.exec(e.th); if (m) maxTh = Math.max(maxTh, +m[1]);
          S.log.push(e); n++;
        });
        if (maxTh > (S.n || 0)) S.n = Math.min(8, maxTh);
        save(); toast(n ? n + ' log entries imported' : 'No new entries'); go(cur, true);
      } catch (e) { toast('Could not read ' + fl.name + ': ' + e.message); }
    };
    fr.readAsArrayBuffer(fl);
  }
  $('#file').addEventListener('change', function () { var fl = this.files && this.files[0]; if (fl) importFile(fl); });

  // ---------------- menu: jump to other BF modules ----------------
  var MODS = [['00', 'Data input', 'data-input.html'], ['01', 'Burden batch chemistry', 'chemistry.html'], ['02', 'Burden calculator', 'calculator.html'], ['03', '3D distribution', 'simulator.html'], ['04', 'Report', 'report.html'],
    ['05', 'Fact must know', 'materials.html'], ['06', 'Other charging modes', 'charging-modes.html'], ['07', 'Feedback and suggestion', 'feedback.html'], ['08', 'Furnace 3D view', 'furnace-inside.html'], ['09', 'Cohesive & melting zone', 'inner-zone.html'], ['10', 'Hearth liquid prediction', 'hearth-liquid.html'],
    ['11', 'BF cost optimiser', 'cost-optimiser.html'], ['12', 'Critical situation plan', 'critical-situations.html'], ['13', 'Check your taphole', 'taphole.html'], ['14', 'Tuyere watch', 'tuyere-watch.html'], ['15', 'Know your water cooling requirement', 'cooling-water.html'], ['i', 'Know your input / output', 'know.html']];
  function sheet(html) { $('#sheet').innerHTML = html; $('#sheet').classList.add('open'); $('#sheetBg').classList.add('open'); }
  function closeSheet() { $('#sheet').classList.remove('open'); $('#sheetBg').classList.remove('open'); }
  $('#menu').onclick = function () {
    sheet('<h3>Go to another BF module</h3><div class="mods">' + (window.BF_MODULES || MODS).map(function (m) { return '<a href="' + m[2] + '"' + (m[2] === 'taphole.html' ? ' class="cur" aria-current="page"' : '') + '><span>' + m[0] + '</span>' + esc(m[1]) + '</a>'; }).join('') +
      '<a href="bf-home.html"><span>⌂</span>BF Model home</a><a href="index.html"><span>⌂</span>Iron Making first page</a></div>' +
      '<div class="row2"><button class="btn sm" id="mExp">⤓ Export cast log</button><button class="btn sm" id="mImp">⤒ Import cast log</button>' + (window.Android && Android.printPdf ? '<button class="btn sm" id="mPdf">⎙ Save page as PDF</button>' : '') + '</div>' +
      '<button class="btn" id="mClose" style="width:100%;margin-top:10px">Close</button>');
    $('#mExp').onclick = function () { closeSheet(); exportLog(); }; $('#mImp').onclick = function () { closeSheet(); $('#file').value = ''; $('#file').click(); };
    var pd = $('#mPdf'); if (pd) pd.onclick = function () { closeSheet(); try { Android.printPdf('Taphole_' + cur); toast('Choose "Save as PDF" as the printer'); } catch (e) { } };
    $('#mClose').onclick = closeSheet;
  };
  $('#sheetBg').onclick = closeSheet;
  document.addEventListener('click', function (e) { var b = e.target.closest && e.target.closest('[data-3d]'); if (!b) return; e.preventDefault(); S.v3 = b.getAttribute('data-3d'); save(); go('v3d'); });

  var start = (location.hash || '').slice(1); if (!TITLES[start]) start = 'check';
  if (!S.n) S.step = 1;
  try { history.replaceState({ p: start, s: S.step }, '', '#' + start); } catch (e) { }
  go(start, true);
})();
