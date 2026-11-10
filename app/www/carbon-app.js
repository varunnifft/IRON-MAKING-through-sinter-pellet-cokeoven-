/* Carbon footprint (CBAM) page – inputs by hand, from Excel / CSV / PDF / text, or from the BF Model pages. */
(function () {
  'use strict';
  var CE = window.CarbonEngine, XMIME = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', TPL = 'Carbon_CBAM_Input_Template.xlsx';
  function $(s, el) { return (el || document).querySelector(s); }
  function $$(s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function num(v) { return typeof v === 'number' && isFinite(v); }
  function f(v, d) { if (v == null || !isFinite(v)) return '—'; return (+v).toLocaleString('en-IN', { minimumFractionDigits: d == null ? 3 : d, maximumFractionDigits: d == null ? 3 : d }); }
  function toast(m) { var t = $('#toast'); t.textContent = m; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove('show'); }, 3000); }
  function parseNum(s) { if (num(s)) return s; if (s == null) return null; var m = String(s).replace(/,/g, '').match(/-?\d+(\.\d+)?/); return m ? +m[0] : null; }

  var S = CE.load(); S.basis = S.basis || {}; S.prod = S.prod || {}; S.v = S.v || {};
  var LK = {}, R = null, tab = S.tab || 'bf';
  function save() { CE.save(S); }
  function compute() { LK = CE.linkBF(); R = CE.compute(S, LK); return R; }

  // ---------------- navigation ----------------
  var TITLES = { dash: 'Carbon footprint', input: 'Inputs', bal: 'Carbon balance', guide: 'Method · CBAM' }, cur = 'dash';
  function go(p, noPush) {
    cur = p; $$('.page').forEach(function (s) { s.classList.toggle('on', s.id === 'p-' + p); });
    $$('nav.bn button[data-p]').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-p') === p); });
    $('#ttl').textContent = TITLES[p]; compute();
    ({ dash: renderDash, input: renderInput, bal: renderBal, guide: renderGuide })[p]();
    if (!noPush) { try { history.pushState({ p: p }, '', '#' + p); } catch (e) { } }
    window.scrollTo(0, 0);
  }
  window.addEventListener('popstate', function (e) { go((e.state && e.state.p) || 'dash', true); });
  $$('nav.bn button[data-p]').forEach(function (b) { b.onclick = function () { go(b.getAttribute('data-p')); }; });
  $('#back').onclick = function () { if (cur === 'dash') location.href = 'index.html'; else history.back(); };
  window.appBack = function () { if (cur !== 'dash') { history.back(); return true; } location.href = 'index.html'; return true; };
  function bindGo(el) { $$('[data-go]', el).forEach(function (b) { b.onclick = function () { go(b.getAttribute('data-go')); }; }); }

  function counts() {
    var c = { user: 0, link: 0, ref: 0 };
    CE.PLANTS.forEach(function (p) { var r = R.plants[p.id]; Object.keys(r.src || {}).forEach(function (k) { c[r.src[k]] = (c[r.src[k]] || 0) + 1; }); });
    return c;
  }
  function stateLine() {
    var c = counts();
    return '<div class="state">' + (c.user ? '<span class="pill user">' + c.user + ' your values</span>' + (S.file ? esc(S.file) : 'entered manually') : '<span class="pill ref">REFERENCE</span>example integrated plant') +
      (c.link ? '<span class="pill OK">' + c.link + ' from BF Model</span>' : '') + (c.user && c.ref ? '<span class="pill NA">' + c.ref + ' reference</span>' : '') + '</div>';
  }
  function kc(l, v, u, c, m) { return '<div class="k" style="--c:' + c + '"><div class="l">' + l + '</div><div class="v">' + v + '<small>' + esc(u) + '</small></div><div class="m">' + m + '</div></div>'; }

  // ---------------- results ----------------
  function renderDash() {
    var el = $('#p-dash'), P = R.plants, G = R.pig;
    var h = '<div class="hero"><div><div class="eb">All plants · CBAM mass balance</div><h1>Carbon <span>footprint</span></h1><p>CO2 for each tonne of hot metal, sinter, pellet and coke, and the embedded emissions of pig iron the way the EU CBAM counts them.</p>' +
      '<div class="row2" style="margin-top:10px"><button class="btn pri sm" data-go="input">Inputs · upload</button><button class="btn sm" data-go="bal">Carbon balance</button><button class="btn sm" data-a="exp">⤓ Export .xlsx</button></div></div></div>' + stateLine();
    if (!G) { el.innerHTML = h + '<div class="card"><h3>Inputs needed</h3><p class="sub">Blast furnace inputs are missing (' + esc(P.bf.need.map(function (d) { return d.l; }).slice(0, 6).join(', ')) + ').</p><button class="btn pri" data-go="input">Open Inputs ›</button></div>'; bindGo(el); bindExp(el); return; }
    var parts = [['BF direct', G.bfD, '#ff7a1a'], ['Sinter (precursor)', (G.pre.filter(function (x) { return x.l === 'Sinter'; })[0] || { d: 0 }).d, '#ffb547'],
      ['Pellets (precursor)', (G.pre.filter(function (x) { return x.l === 'Pellets'; })[0] || { d: 0 }).d, '#c08a5a'], ['Indirect (electricity)', G.indirect, '#19b3b1']];
    h += '<div class="big"><div class="l">Pig iron · specific embedded emissions (CBAM)</div><div class="v">' + f(G.total, 2) + '<small>tCO2 / t pig iron</small></div>' +
      '<div class="sp"><span>Direct <b>' + f(G.direct, 3) + '</b></span><span>Indirect <b>' + f(G.indirect, 3) + '</b></span>' + (G.site != null ? '<span>With coke ovens <b>' + f(G.site, 3) + '</b></span>' : '') + '</div>' +
      '<div class="bar3">' + parts.map(function (x) { return '<i style="width:' + (Math.max(0, x[1]) / G.total * 100).toFixed(2) + '%;background:' + x[2] + '"></i>'; }).join('') + '</div>' +
      '<div class="lg">' + parts.map(function (x) { return '<span style="--c:' + x[2] + '">' + x[0] + ' ' + f(x[1], 3) + '</span>'; }).join('') + '</div></div>';
    var tile = function (id, extra) {
      var p = CE.PL[id], r = P[id];
      if (r.need.length) return kc(p.name, '—', 'tCO2/' + p.unit, p.col, 'Inputs needed');
      return kc(p.name, f(r.total, 3), 'tCO2/' + p.unit, p.col, 'Direct ' + f(r.direct, 3) + ' · indirect ' + f(r.indirect, 3) + (extra || ''));
    };
    h += '<div class="kgrid">' + tile('bf', '<br>Gate to gate, BF only') + tile('sinter') + tile('pellet') + tile('coke', '<br>Outside CBAM boundary') + '</div>';
    h += '<div class="card"><h3>How pig iron adds up</h3><div class="kv"><span>Blast furnace direct (after waste gas correction)</span><b>' + f(G.bfD) + '</b></div>' +
      G.pre.map(function (x) { return '<div class="kv"><span>' + x.l + ' ' + f(x.rate * 1000, 0) + ' kg/tHM · own ' + f(x.own * 100, 0) + ' %</span><b>' + f(x.d) + '</b></div>'; }).join('') +
      '<div class="kv"><span>Electricity · BF + own sinter / pellet</span><b>' + f(G.indirect) + '</b></div><div class="kv"><span><b>Total embedded, tCO2/t pig iron</b></span><b>' + f(G.total) + '</b></div>' +
      (G.coke != null ? '<div class="kv"><span>Coke ovens, for information (' + f(G.cokeRate * 1000, 0) + ' kg coke/tHM × ' + f(P.coke.total) + ')</span><b>+' + f(G.coke) + '</b></div>' : '') + '</div>';
    h += '<div class="note">Under CBAM, from 2026 the certificates are bought on the <b>direct</b> embedded emissions of iron and steel. Indirect emissions are reported. Sinter and pellets are precursors of pig iron. Coke ovens are outside the boundary; the carbon of the coke is already counted in the BF balance. See Method.</div>';
    el.innerHTML = h; bindGo(el); bindExp(el);
  }
  function bindExp(el) { $$('[data-a=exp]', el).forEach(function (b) { b.onclick = exportReport; }); }

  // ---------------- carbon balance ----------------
  function renderBal() {
    var h = stateLine();
    CE.PLANTS.forEach(function (p) {
      var r = R.plants[p.id];
      h += '<div class="card" style="border-left:3px solid ' + p.col + '"><h3>' + p.name + '</h3>';
      if (r.need.length) { h += '<p class="sub">Inputs needed: ' + esc(r.need.map(function (d) { return d.l; }).join(', ')) + '</p></div>'; return; }
      h += '<p class="sub">kg of carbon per ' + esc(p.unit) + '</p><table class="tbl"><tr><th>Item</th><th style="text-align:right">kg C</th><th style="text-align:right">kg CO2</th></tr><tr class="g"><td colspan="3">Carbon in</td></tr>' +
        r.IN.map(function (x) { return '<tr><td>' + esc(x.l) + '</td><td class="n">' + f(x.c, 1) + '</td><td class="n">' + f(x.c * CE.K, 0) + '</td></tr>'; }).join('') +
        '<tr class="g"><td colspan="3">Carbon out</td></tr>' + r.OUT.map(function (x) { return '<tr><td>' + esc(x.l) + '</td><td class="n">−' + f(x.c, 1) + '</td><td class="n">−' + f(x.c * CE.K, 0) + '</td></tr>'; }).join('') + '</table>' +
        '<div class="kv"><span>Carbon emitted (in − out) × 44/12</span><b>' + f(r.gross) + ' <small>tCO2/' + esc(p.unit) + '</small></b></div>' +
        (p.id === 'bf' ? '<div class="kv"><span>Waste gas correction: BF gas exported × NCV × 56.1 × 0.667</span><b>−' + f(r.corr) + '</b></div>' : '') +
        '<div class="kv"><span>Direct</span><b>' + f(r.direct) + '</b></div><div class="kv"><span>Indirect: ' + f(r.V.el, 3) + ' MWh × grid factor</span><b>' + f(r.indirect) + '</b></div>' +
        '<div class="kv"><span><b>Total</b></span><b>' + f(r.total) + ' <small>tCO2/' + esc(p.unit) + '</small></b></div></div>';
    });
    $('#p-bal').innerHTML = h;
  }

  // ---------------- inputs ----------------
  function srcLine(d) {
    var r = CE.valueOf(S, LK, d);
    if (r.src === 'user') return '<span class="src user">Your value' + (S.basis[d.plant] === 'total' && d.kind !== 'p' ? ' = ' + f(r.v, 3) + ' ' + esc(d.u) : '') + '</span>';
    if (r.src === 'link') return '<span class="src link">From BF Model · Batch chemistry: ' + f(r.v, 3) + ' ' + esc(d.u) + '</span>';
    return '<span class="src">Reference value ' + f(d.ref, 3) + ' ' + esc(d.u) + ' · type to change</span>';
  }
  function renderInput() {
    var el = $('#p-input'), h = stateLine();
    if (S.pending) h += pendingCard();
    h += '<div class="card"><h3>Upload your data</h3><p class="sub">Excel, CSV, PDF or text: monthly CBAM data, MIS report, lab sheet. The app finds the values it knows by their names and shows them to you before using them.</p>' +
      '<button class="drop" id="up"><b>⤒ Choose file</b><small>.xlsx · .xls · .csv · .pdf · .txt</small></button>' +
      '<div class="row2"><button class="btn sm" id="tpl">⤓ Input template (.xlsx)</button><button class="btn sm" id="clr">↺ Clear my values</button></div></div>';
    h += '<div class="tabs">' + CE.PLANTS.map(function (p) { return '<button data-t="' + p.id + '"' + (tab === p.id ? ' class="on"' : '') + '>' + p.name + '</button>'; }).join('') + '<button data-t="common"' + (tab === 'common' ? ' class="on"' : '') + '>Factors &amp; precursors</button></div>';
    if (tab === 'common') {
      h += '<div class="card"><h3>Factors and precursors</h3><div class="fb" style="padding:0">' + CE.COMMON.map(function (c) {
        var d = CE.CM[c[0]], u = S.v[d.id];
        return '<div class="f"><label for="i-' + d.id + '">' + esc(d.l) + '<small>' + esc(d.u) + (d.n ? ' · ' + esc(d.n) : '') + '</small></label><input id="i-' + d.id + '" data-id="' + d.id + '" inputmode="decimal" placeholder="' + d.ref + '" value="' + (num(u) ? u : '') + '"></div>';
      }).join('') + '</div></div>';
    } else {
      var p = CE.PL[tab], tot = S.basis[tab] === 'total';
      h += '<div class="card"><h3>' + p.name + '</h3><p class="sub">Leave a box empty to keep the value shown under it.</p>' +
        '<div class="seg" style="margin:6px 0 10px"><button data-b="per" class="' + (tot ? '' : 'take on') + '">Per ' + esc(p.unit) + '</button><button data-b="total" class="' + (tot ? 'take on' : '') + '">Totals for a period</button></div>' +
        (tot ? '<div class="f"><label for="prod">Production in the period<small>t ' + esc(p.prod) + '</small></label><input id="prod" inputmode="decimal" value="' + (S.prod[tab] > 0 ? S.prod[tab] : '') + '" placeholder="e.g. ' + p.defProd + '"></div>' : '');
      var g0 = '';
      CE.FIELDS[tab].forEach(function (d) {
        if (d.g !== g0) { g0 = d.g; h += '<div class="grp2">' + esc(d.g) + '</div>'; }
        var u = S.v[d.id], conv = tot && d.kind !== 'p', unit = conv ? d.uTot : d.u, pr = S.prod[tab], k = d.kind === 'm' ? 1000 : 1, cv = function (x) { return conv ? +(x * pr / k).toPrecision(6) : x; };
        var dis = conv && !(pr > 0), ph = dis ? 'production first' : f(cv(CE.valueOf({ v: {} }, LK, d).v), 3);
        h += '<div class="f"><label for="i-' + d.id + '">' + esc(d.l) + '<small>' + esc(unit) + '</small></label><input id="i-' + d.id + '" data-id="' + d.id + '" inputmode="decimal"' + (dis ? ' disabled' : '') + ' value="' + (num(u) && !dis ? cv(u) : '') + '" placeholder="' + esc(ph) + '">' + srcLine(d) + '</div>';
      });
      h += '</div>';
    }
    h += '<div class="row2"><button class="btn pri" data-go="dash">See results ›</button></div>';
    el.innerHTML = h; bindGo(el);
    $('#up').onclick = function () { $('#file').value = ''; $('#file').click(); };
    $('#tpl').onclick = template;
    $('#clr').onclick = function () { if (!confirm('Clear every value you entered or uploaded on this page?')) return; S.v = {}; S.basis = {}; S.prod = {}; S.file = ''; S.mode = 'reference'; S.pending = null; save(); renderInput(); toast('Cleared'); };
    $$('.tabs [data-t]', el).forEach(function (b) { b.onclick = function () { tab = S.tab = b.getAttribute('data-t'); save(); renderInput(); }; });
    $$('[data-b]', el).forEach(function (b) { b.onclick = function () { setBasis(tab, b.getAttribute('data-b')); renderInput(); }; });
    var pe = $('#prod'); if (pe) pe.onchange = function () { var v = parseNum(pe.value); S.prod[tab] = v > 0 ? v : null; save(); renderInput(); };
    $$('input[data-id]', el).forEach(function (i) { i.onchange = function () { var v = parseNum(i.value); if (i.value.trim() === '' || v == null) delete S.v[i.getAttribute('data-id')]; else { var dd = fieldBy(i.getAttribute('data-id')), pr = S.prod[tab]; if (dd && dd.kind !== 'p' && S.basis[tab] === 'total' && pr > 0) v = v * (dd.kind === 'm' ? 1000 : 1) / pr; S.v[i.getAttribute('data-id')] = +(+v).toPrecision(8); } S.mode = 'user'; save(); compute(); var d = fieldBy(i.getAttribute('data-id')); var s = i.parentNode.querySelector('.src'); if (d && s) s.outerHTML = srcLine(d); }; });
    if (S.pending) bindPending(el);
  }
  function fieldBy(id) { var p = id.split('.')[0]; return (CE.FIELDS[p] || []).filter(function (d) { return d.id === id; })[0] || null; }
  function setBasis(pid, b) { S.basis[pid] = b === 'total' ? 'total' : 'per'; save(); }

  // ---------------- file reading ----------------
  var AL = {   // [match, exclude] on lower-case text of one line
    bf: { cokeC: [/((carbon|fixed carbon|\bfc\b).*\bcoke\b|\bcoke\b.*(carbon|fixed carbon|\bfc\b))/, /nut|breeze|oven gas/], nutC: [/nut ?coke.*(carbon|\bfc\b)|(carbon|\bfc\b).*nut ?coke/], pciC: [/(pci|injection coal|injected coal).*(carbon|\bfc\b)|(carbon|\bfc\b).*(pci|injection coal)/],
      oilC: [/(oil|tar).*carbon|carbon.*(oil|tar)/], sinterC: [/carbon.*sinter|sinter.*carbon/], pelletC: [/carbon.*pellet|pellet.*carbon/], oreC: [/carbon.*(lump|iron) ore|(lump|iron) ore.*carbon/],
      lsCaO: [/cao.*lime ?stone|lime ?stone.*cao/], dlCaO: [/cao.*dolo|dolo.*cao/], dlMgO: [/mgo.*dolo|dolo.*mgo/], hmC: [/((hot metal|\bhm\b|pig iron).*(carbon|\bc\b ?%)|carbon in (hot metal|hm|pig iron))/],
      slagC: [/carbon.*slag|slag.*carbon/], dustC: [/(dust|sludge).*carbon|carbon.*(dust|sludge)/], bfgNcv: [/(ncv|calorific|\bcv\b).*(bf|blast furnace) gas|(bf|blast furnace) gas.*(ncv|calorific|\bcv\b)/],
      bfgEx: [/((bf|blast furnace) gas|\bbfg\b).*(export|outside|sent|surplus|power|distribut)|export.*((bf|blast furnace) gas|\bbfg\b)/], otherC: [/other carbon/],
      nut: [/nut ?coke/, /carbon|\bfc\b|ash/], coke: [/coke rate|coke consumption|skip coke|\bbf coke\b|coke \(dry\)|dry coke|^coke\b/, /nut|breeze|oven|carbon|\bfc\b|ash|csr|cri|m40|m10/],
      pci: [/\bpci\b|pulveri[sz]ed coal|coal injection|\bcdi\b|injected coal/, /carbon|\bfc\b|ash|\bvm\b|moist/], oil: [/oil inj|tar inj|fuel oil|\boil\b/, /carbon/], ng: [/natural gas|\bng\b|\blng\b/],
      cog: [/coke oven gas|\bcog\b/], sinter: [/\bsinter\b/, /carbon|plant|breeze|own|bought|fe|sio2|cao|mgo|al2o3|tumbler|rdi/], pellet: [/\bpellets?\b/, /carbon|plant|own|fe|sio2|ccs/],
      ore: [/lump ore|iron ore|\bclo\b/, /carbon|fe|sio2/], ls: [/lime ?stone/, /cao|carbon/], dl: [/dolomite|\bdolo\b/, /cao|mgo/], slag: [/slag (rate|volume|generation|make)|^slag\b/, /carbon|basicity|cao|sio2|al2o3|mgo/],
      dust: [/dust|sludge/, /carbon/], el: [/electric|power consumption|\bkwh\b|\bmwh\b/] },
    sinter: { breezeC: [/breeze.*(carbon|\bfc\b)|(carbon|\bfc\b).*breeze/], anthC: [/anthracite.*carbon|carbon.*anthracite/], lsCaO: [/cao.*lime ?stone|lime ?stone.*cao/], dlCaO: [/cao.*dolo|dolo.*cao/], dlMgO: [/mgo.*dolo|dolo.*mgo/],
      prodC: [/carbon.*sinter|sinter.*carbon/], dustC: [/dust.*carbon|carbon.*dust/], otherC: [/other carbon/], breeze: [/breeze|solid fuel/, /carbon|\bfc\b/], anth: [/anthracite/, /carbon/], ls: [/lime ?stone/, /cao/], dl: [/dolomite|\bdolo\b/, /cao|mgo/],
      cog: [/coke oven gas|\bcog\b/], bfg: [/(bf|blast furnace) gas|\bbfg\b/], ng: [/natural gas|\bng\b/], dust: [/dust/, /carbon/], el: [/electric|power consumption|\bkwh\b|\bmwh\b/] },
    pellet: { breezeC: [/(breeze|anthracite).*carbon|carbon.*(breeze|anthracite)/], coalC: [/coal.*carbon|carbon.*coal/], oilC: [/oil.*carbon|carbon.*oil/], lsCaO: [/cao.*lime ?stone|lime ?stone.*cao/], dlCaO: [/cao.*dolo|dolo.*cao/], dlMgO: [/mgo.*dolo|dolo.*mgo/],
      prodC: [/carbon.*pellet|pellet.*carbon/], breeze: [/breeze|anthracite/, /carbon/], coal: [/coal/, /carbon/], oil: [/fuel oil|furnace oil|\boil\b/, /carbon/], ng: [/natural gas|\bng\b/], cog: [/coke oven gas|\bcog\b/], bfg: [/(bf|blast furnace) gas|\bbfg\b/],
      ls: [/lime ?stone/, /cao/], dl: [/dolomite|\bdolo\b/, /cao|mgo/], el: [/electric|power consumption|\bkwh\b|\bmwh\b/] },
    coke: { coalC: [/coal.*carbon|carbon.*coal/], prodC: [/carbon.*coke|coke.*(carbon|\bfc\b)/, /breeze ratio/], tarC: [/tar.*carbon|carbon.*tar/], benzolC: [/benzol.*carbon|carbon.*benzol/],
      cogEx: [/(coke oven gas|\bcog\b).*(export|surplus|net|sent|distribut)/], coal: [/coal (charged|charge|blend|consumption|input)|dry coal|^coal\b/, /carbon/], bfg: [/(bf|blast furnace) gas|\bbfg\b/], ng: [/natural gas|\bng\b/],
      tar: [/\btar\b/, /carbon/], benzol: [/benzol/, /carbon/], el: [/electric|power consumption|\bkwh\b|\bmwh\b/] },
    common: { grid: [/grid.*(emission|factor)|emission factor.*(electric|grid)/] }
  };
  function ctxOf(t) {
    if (/sinter (plant|machine)|\bsp ?-?\d|sinter making/.test(t)) return 'sinter';
    if (/pellet (plant|making)|induration|grate.?kiln/.test(t)) return 'pellet';
    if (/coke (oven|plant|making)|coke battery|by.?product/.test(t)) return 'coke';
    if (/blast furnace|\bbf ?-?\d\b|\bbf\b (data|section|parameters)|iron making/.test(t)) return 'bf';
    return null;
  }
  function scanLines(lines, name) {
    var hits = {}, ctx = null, idRx = /^(bf|sinter|pellet|coke|common)\.([a-z]+[A-Za-z]*)$/;
    var tplProd = {}, tplTot = [];
    lines.forEach(function (ln) {
      var cells = ln.cells, text = cells.map(function (c) { return String(c == null ? '' : c); }).join(' ').toLowerCase().replace(/\s+/g, ' ').trim();
      if (!text) return;
      // the app template: key in the first cell, per-t value in column E, total in column G
      var k0 = String(cells[0] == null ? '' : cells[0]).trim(), m = k0.match(idRx);
      if (m) {
        if (m[2] === 'prod') { var pv = parseNum(cells[4]); if (!(pv > 0)) pv = parseNum(cells[6]); if (pv > 0) tplProd[m[1]] = pv; return; }
        var id = k0, d = m[1] === 'common' ? CE.CM[m[2]] : fieldBy(id); if (!d) return;
        var v1 = cells[4] === '' || cells[4] == null ? null : parseNum(cells[4]), v2 = cells[6] === '' || cells[6] == null ? null : parseNum(cells[6]);
        if (v1 != null) hits[id] = { id: id, v: v1, line: 'Template · ' + (d.l || id), on: true };
        else if (v2 != null) tplTot.push({ id: id, v: v2, d: d });
        return;
      }
      var c2 = ctxOf(text); if (c2) ctx = c2;
      var nums = text.match(/-?\d[\d,]*(\.\d+)?/g); if (!nums) return;
      var plants = ctx ? [ctx, 'common'] : ['bf', 'common'];
      plants.some(function (pid) {
        var A = AL[pid]; return Object.keys(A).some(function (k) {
          var rx = A[k]; if (!rx[0].test(text) || (rx[1] && rx[1].test(text))) return false;
          var id = pid + '.' + k; if (hits[id]) return false;
          var at = text.search(rx[0]), rest = text.slice(at).replace(/\b(co2|o2|h2o|al2o3|sio2|mgo|cao|m40|m10|bf ?-?\d|sp ?-?\d|nm3|m3|pm10|pm2\.5)\b/g, ' '), mm = rest.match(/-?\d[\d,]*(\.\d+)?/);
          if (!mm) return false; var v = +mm[0].replace(/,/g, ''), note = '';
          var d = pid === 'common' ? CE.CM[k] : fieldBy(id);
          if (d && d.kind === 'e' && /\bkwh\b/.test(text)) { v = v / 1000; note = ' (kWh → MWh)'; }
          if (d && d.kind === 'm' && /\bt\s*\/\s*t/.test(text) && !/kg/.test(text) && v < 5) { v = v * 1000; note = ' (t/t → kg/t)'; }
          hits[id] = { id: id, v: v, line: String(ln.src || name) + ': ' + text.slice(0, 120) + note, on: true };
          return true;
        });
      });
    });
    tplTot.forEach(function (x) { var p = x.id.split('.')[0], pr = tplProd[p]; if (!(pr > 0)) return; var v = x.d.kind === 'm' ? x.v * 1000 / pr : x.v / pr; hits[x.id] = { id: x.id, v: +v.toFixed(6), line: 'Template total ' + x.v + ' ÷ ' + pr + ' t', on: true }; });
    Object.keys(tplProd).forEach(function (p) { if (!S.prod[p]) S.prod[p] = tplProd[p]; });
    return Object.keys(hits).map(function (k) { return hits[k]; });
  }
  function load(src) { return new Promise(function (ok, no) { var s = document.createElement('script'); s.src = 'lib/' + src; s.onload = ok; s.onerror = function () { no(new Error('Could not load ' + src)); }; document.head.appendChild(s); }); }
  function pdfLines(u8) {
    return (window.pdfjsLib ? Promise.resolve() : load('pdf.worker.min.js').then(function () { return load('pdf.min.js'); })).then(function () {
      return pdfjsLib.getDocument({ data: u8, isEvalSupported: false, useSystemFonts: true }).promise;
    }).then(function (doc) {
      var out = [], p = 1;
      function page() {
        if (p > doc.numPages) return out;
        var no = p++;
        return doc.getPage(no).then(function (pg) { return pg.getTextContent(); }).then(function (tc) {
          var L = [];
          tc.items.forEach(function (it) { if (!it.str || !it.str.trim()) return; var y = it.transform[5], h = Math.abs(it.transform[3]) || 10, ln = L.filter(function (l) { return Math.abs(l.y - y) < h * 0.5; })[0]; if (!ln) L.push(ln = { y: y, it: [] }); ln.it.push({ x: it.transform[4], s: it.str }); });
          L.sort(function (a, b) { return b.y - a.y; }).forEach(function (l) { l.it.sort(function (a, b) { return a.x - b.x; }); out.push({ cells: l.it.map(function (i) { return i.s; }), src: 'PDF p.' + no }); });
          return page();
        });
      }
      return page();
    });
  }
  function readFile(fl) {
    var nm = fl.name, ext = (nm.split('.').pop() || '').toLowerCase(), fr = new FileReader();
    fr.onload = function () {
      var u8 = new Uint8Array(fr.result), job;
      if (ext === 'pdf' || (u8[0] === 0x25 && u8[1] === 0x50 && u8[2] === 0x44 && u8[3] === 0x46)) job = pdfLines(u8);
      else if (ext === 'txt') job = Promise.resolve(new TextDecoder().decode(u8).split(/\r?\n/).map(function (t, i) { return { cells: t.split(/\t|;|\s{2,}/), src: 'line ' + (i + 1) }; }));
      else job = Promise.resolve().then(function () {
        var wb = XLSX.read(u8, { type: 'array' }), out = [];
        wb.SheetNames.forEach(function (sn) {
          out.push({ cells: [sn], src: sn });
          XLSX.utils.sheet_to_json(wb.Sheets[sn], { header: 1, raw: true, defval: '', blankrows: false }).forEach(function (r, i) { out.push({ cells: r, src: sn + ' row ' + (i + 1) }); });
        });
        return out;
      });
      job.then(function (lines) {
        var hits = scanLines(lines, nm);
        if (!hits.length) { toast('No known values found in ' + nm + '. Use the input template, or type the values.'); return; }
        S.pending = { file: nm, hits: hits }; save(); go('input'); toast('Found ' + hits.length + ' values in ' + nm + ': check and apply');
      }).catch(function (e) { toast('Could not read ' + nm + ': ' + (e.message || e)); });
    };
    fr.readAsArrayBuffer(fl);
  }
  $('#file').addEventListener('change', function () { var fl = this.files && this.files[0]; if (fl) readFile(fl); });
  function labelOf(id) { var p = id.split('.'), d = p[0] === 'common' ? CE.CM[p[1]] : fieldBy(id); return d ? (p[0] === 'common' ? 'Factors' : CE.PL[p[0]].name) + ' · ' + d.l : id; }
  function unitOf(id) { var p = id.split('.'), d = p[0] === 'common' ? CE.CM[p[1]] : fieldBy(id); return d ? d.u : ''; }
  function pendingCard() {
    var P = S.pending;
    return '<div class="card" style="border-color:var(--amber)"><h3>Found in ' + esc(P.file) + '</h3><p class="sub">Untick anything that is wrong. Values are per tonne of product. Totals in the template are divided by its production.</p>' +
      P.hits.map(function (x, i) { return '<label class="hit"><input type="checkbox" data-h="' + i + '"' + (x.on ? ' checked' : '') + '><span>' + esc(labelOf(x.id)) + '<small>' + esc(x.line) + '</small></span><b>' + f(x.v, 3) + ' <small>' + esc(unitOf(x.id)) + '</small></b></label>'; }).join('') +
      '<div class="row2"><button class="btn pri" id="apply">Use ticked values</button><button class="btn" id="cancel">Cancel</button></div></div>';
  }
  function bindPending(el) {
    $$('[data-h]', el).forEach(function (c) { c.onchange = function () { S.pending.hits[+c.getAttribute('data-h')].on = c.checked; save(); }; });
    $('#apply').onclick = function () {
      var n = 0;
      S.pending.hits.forEach(function (x) { if (!x.on) return; var p = x.id.split('.')[0]; S.v[x.id] = x.v; n++; });
      S.file = S.pending.file; S.pending = null; S.mode = 'user'; save(); toast(n + ' values used'); go('dash');
    };
    $('#cancel').onclick = function () { S.pending = null; save(); renderInput(); };
  }

  // ---------------- Excel out ----------------
  function b64(u8) { var s = '', ch = 0x8000; for (var i = 0; i < u8.length; i += ch) s += String.fromCharCode.apply(null, u8.subarray(i, i + ch)); return btoa(s); }
  function handoff(job) { try { localStorage.setItem('im.save', JSON.stringify(job)); localStorage.setItem('im.route', JSON.stringify({ p: 'www/iz-save.html', t: Date.now() })); } catch (e) { toast('File too large to hand over: ' + e.message); return; } location.href = window.IM_SINTER_URL; }
  function saveBytes(name, u8) {
    if (!(window.AndroidBridge && AndroidBridge.saveFile) && window.Android && window.IM_SINTER_URL) return handoff({ name: name, mime: XMIME, b64: b64(u8), t: Date.now() });
    if (window.AndroidBridge && AndroidBridge.saveFile) { var r = AndroidBridge.saveFile(name, b64(u8), XMIME); toast(/^ERROR/.test(r || '') ? r : 'Saved to Downloads: ' + name); return; }
    var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([u8], { type: XMIME })); a.download = name; document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500); toast('Downloaded ' + name);
  }
  function book(sheets) { var wb = XLSX.utils.book_new(); sheets.forEach(function (s) { var ws = XLSX.utils.aoa_to_sheet(s[1]); ws['!cols'] = s[2].map(function (w) { return { wch: w }; }); XLSX.utils.book_append_sheet(wb, ws, s[0]); }); return new Uint8Array(XLSX.write(wb, { type: 'array', bookType: 'xlsx' })); }
  function template() {
    var a = [['CARBON FOOTPRINT (CBAM) – INPUT TEMPLATE · Iron Making'], ['Fill column E (per tonne of product) OR column G (total for the period) with the production row filled. Keep column A as it is. Empty = keep the app value.'], [],
      ['Key', 'Plant', 'Item', 'Unit per t', 'Value per t', 'Unit total', 'Value total', 'Reference value']];
    CE.PLANTS.forEach(function (p) {
      a.push([]); a.push(['', p.name.toUpperCase()]); a.push([p.id + '.prod', p.name, 'Production in the period (for totals)', '', '', 't ' + p.prod, '', '']);
      CE.FIELDS[p.id].forEach(function (d) { a.push([d.id, p.name, d.g + ' · ' + d.l, d.u, '', d.kind === 'p' ? '' : d.uTot, '', d.ref]); });
    });
    a.push([]); a.push(['', 'FACTORS & PRECURSORS']); CE.COMMON.forEach(function (c) { a.push(['common.' + c[0], 'Factors', c[1], c[3], '', '', '', c[2]]); });
    saveBytes(TPL, book([['CBAM_Inputs', a, [16, 14, 58, 14, 12, 10, 12, 14]]]));
  }
  function exportReport() {
    compute(); var G = R.pig, a = [['CARBON FOOTPRINT (CBAM) – Iron Making'], ['Run ' + new Date().toLocaleString()], [], ['Result', 'tCO2/t', 'Direct', 'Indirect']];
    if (G) a.push(['Pig iron – specific embedded emissions (CBAM)', G.total, G.direct, G.indirect]);
    CE.PLANTS.forEach(function (p) { var r = R.plants[p.id]; if (!r.need.length) a.push([p.name + ' per ' + p.unit, r.total, r.direct, r.indirect]); });
    if (G && G.site != null) a.push(['Pig iron incl. coke ovens (information)', G.site]);
    var bal = [['Plant', 'Item', 'kg C per t product', 'kg CO2 per t product']];
    CE.PLANTS.forEach(function (p) { var r = R.plants[p.id]; if (r.need.length) return; r.IN.forEach(function (x) { bal.push([p.name, 'IN · ' + x.l, x.c, x.c * CE.K]); }); r.OUT.forEach(function (x) { bal.push([p.name, 'OUT · ' + x.l, -x.c, -x.c * CE.K]); }); if (r.corr) bal.push([p.name, 'Waste gas correction', '', -r.corr * 1000]); });
    var inp = [['Key', 'Item', 'Value per t', 'Unit', 'Source']];
    CE.PLANTS.forEach(function (p) { CE.FIELDS[p.id].forEach(function (d) { var r = CE.valueOf(S, LK, d); inp.push([d.id, p.name + ' · ' + d.l, r.v, d.u, { user: 'Your data', link: 'BF Model', ref: 'Reference' }[r.src] || '']); }); });
    CE.COMMON.forEach(function (c) { var u = S.v['common.' + c[0]]; inp.push(['common.' + c[0], c[1], num(u) ? u : c[2], c[3], num(u) ? 'Your data' : 'Reference']); });
    var d = new Date(); saveBytes('Carbon_CBAM_' + d.getFullYear() + ('0' + (d.getMonth() + 1)).slice(-2) + ('0' + d.getDate()).slice(-2) + '.xlsx', book([['Results', a, [48, 12, 12, 12]], ['Carbon_balance', bal, [16, 40, 18, 18]], ['Inputs', inp, [18, 60, 14, 14, 12]]]));
  }

  // ---------------- method ----------------
  function renderGuide() {
    $('#p-guide').innerHTML = '<div class="card gtxt"><h3>How the numbers are made</h3>' +
      '<p>The page follows the EU CBAM rules for iron and steel (Implementing Regulation (EU) 2023/1773, Annex III), using the <b>mass balance</b> method: all carbon that goes into a plant and does not leave in a product, by-product or waste is counted as CO2.</p>' +
      '<h4>1 · Direct emissions of each plant</h4><p><code>CO2 = (carbon in − carbon out) × 44.01 / 12.011</code>, per tonne of product.</p><ul><li>Carbon in: coke, nut coke, PCI, oil, gases, carbon in the burden, and the carbonate carbon of raw limestone and dolomite (CaO × 12/56, MgO × 12/40).</li><li>Carbon out: carbon in hot metal, slag, dust and sludge (BF); in sinter or pellets; in coke, exported coke oven gas, tar and benzol (coke ovens).</li></ul>' +
      '<h4>2 · Waste gas correction (BF)</h4><p>The carbon of BF gas is counted at the BF. For the gas sent outside the BF (to the power plant, ovens, sinter…), CBAM deducts what natural gas of the same energy would have emitted, times 0.667: <code>BF gas Nm3 × NCV MJ/Nm3 ÷ 1000 × 56.1 × 0.667</code> kg CO2.</p>' +
      '<h4>3 · Indirect emissions</h4><p><code>Electricity MWh × emission factor</code>. Default 0.727 tCO2/MWh (CEA CO2 baseline database v20, FY 2023-24). Use your captive power plant or supplier factor if you have one (Factors &amp; precursors tab).</p>' +
      '<h4>4 · Pig iron (complex good)</h4><p><code>SEE pig iron = BF emissions/tHM + sinter t/tHM × SEE sinter + pellet t/tHM × SEE pellet</code>. Sinter and pellets are agglomerated ore (CN 2601 12 00), a precursor of pig iron. Your own sinter and pellets use the values calculated here; bought ones use the supplier\'s value.</p>' +
      '<h4>5 · Coke ovens</h4><p>Coke is not a CBAM good, so coke ovens are outside the boundary and not added to pig iron (the carbon of the coke is already in the BF balance). The coke-oven figure and the "with coke ovens" line are given for your own plant reporting.</p>' +
      '<h4>6 · Where inputs come from</h4><ul><li>Your values: typed here, or read from an uploaded Excel, CSV, PDF or text file (you check them before they are used).</li><li>BF Model: coke, nut coke, PCI, sinter, pellet, ore, limestone and dolomite rates and their analysis, hot metal carbon and slag rate are taken from Batch chemistry when it has data.</li><li>Reference: a typical integrated plant, used only for empty boxes.</li></ul>' +
      '<h4>7 · Good practice</h4><ul><li>Use monthly or annual totals (Totals for a period) from weighbridge and lab records: CBAM reporting is for a period, not a single day.</li><li>Use measured carbon contents (lab) for coke, coal and PCI: they drive more than 90 % of the BF result.</li><li>Keep the uploaded files: the verifier asks for the source of each number.</li></ul>' +
      '<p class="sub">This is a calculation aid for plant use, not a verified CBAM report.</p></div>';
  }

  // ---------------- menu ----------------
  function openSheet() {
    $('#sheet').innerHTML = '<h3>Carbon footprint</h3><div class="links"><button class="lk" data-a="tpl">⤓ Download input template (.xlsx)</button><button class="lk" data-a="up">⤒ Upload Excel / PDF / CSV</button><button class="lk" data-a="exp">⤓ Export results (.xlsx)</button>' +
      (window.Android && Android.printPdf ? '<button class="lk" data-a="pdf">⎙ Save this page as PDF</button>' : '') + '<a class="lk" href="bf-home.html">BF Model ›</a></div><button class="btn" data-a="close" style="width:100%;margin-top:10px">Close</button>';
    $('#sheet').classList.add('open'); $('#sheetBg').classList.add('open');
    $$('#sheet [data-a]').forEach(function (b) { b.onclick = function () {
      var a = b.getAttribute('data-a'); closeSheet();
      if (a === 'tpl') template(); else if (a === 'exp') exportReport(); else if (a === 'up') { $('#file').value = ''; $('#file').click(); }
      else if (a === 'pdf') { try { Android.printPdf('Carbon_CBAM_' + cur); toast('Choose "Save as PDF" as the printer'); } catch (e) { } }
    }; });
  }
  function closeSheet() { $('#sheet').classList.remove('open'); $('#sheetBg').classList.remove('open'); }
  $('#menu').onclick = openSheet; $('#sheetBg').onclick = closeSheet;

  var start = (location.hash || '').slice(1); if (!TITLES[start]) start = 'dash';
  try { history.replaceState({ p: start }, '', '#' + start); } catch (e) { }
  go(start, true);
})();
