/* Sinter Plant Intelligence - home dashboard and the four analysis modules (raw materials, chemistry & basicity,
   physical & metallurgical quality, machine parameters). Read-only views over the app's own state through
   SinterApp.ctx: every number shown here comes from the same engine as the Results page. */
(function () {
  'use strict';
  var HIST = 'sp.history';
  function C() { return window.SinterApp.ctx; }
  function I(n, c) { return window.SP_ICON ? window.SP_ICON(n, c) : ''; }
  function img(name, alt, cls) {
    // local image; on any load error the element is removed and the gradient behind it shows instead
    return '<img class="' + (cls || 'bn-img') + '" src="img/' + name + '.webp" alt="' + (alt || '') + '" loading="lazy" decoding="async" onerror="this.remove()">';
  }
  function fin(v) { return v != null && v !== '' && isFinite(v); }

  // the result shown everywhere: the last confirmed prediction, else a live prediction of the current inputs
  function cur() {
    var c = C(), st = c.state;
    if (st.result) return { r: st.result, live: false };
    try { return { r: c.run(st.inp), live: true }; } catch (e) { return { r: null, live: true }; }
  }
  function srcLine(live, noBadge) {
    var c = C(), st = c.state;
    return (c.isDemo() && !noBadge ? '<span class="illus">ILLUSTRATIVE</span> ' : '') +
      '<span class="src-l">' + (live ? 'Predicted from the current inputs (not yet confirmed)' : 'Last prediction · ' + c.esc(st.loaded) + ' · ' + c.esc(st.ranAt || '')) + '</span>';
  }
  function demoNote() {
    return C().isDemo() ? '<div class="note warn small"><span class="illus">ILLUSTRATIVE</span> These values come from the built-in demo data (module workbook plant average), not from your plant. Load your own data on the Inputs page; the label disappears once you do.</div>' : '';
  }
  function banner(image, kicker, title, sub, extra) {
    return '<section class="bn">' + img(image, '') + '<div class="bn-shade"></div><div class="bn-in"><div class="bn-k">' + kicker + '</div><h1>' + title + '</h1>' + (sub ? '<p>' + sub + '</p>' : '') + (extra || '') + '</div></section>';
  }
  function stCls(s) { return s === 'bad' ? 'bad' : s === 'warn' ? 'warn' : s === 'ok' ? 'ok' : 'na'; }

  // ---------- recent analyses (stored on each confirmed prediction) ----------
  function history() { try { return JSON.parse(localStorage.getItem(HIST) || '[]') || []; } catch (e) { return []; } }
  function record() {
    var c = C(), st = c.state, r = st.result; if (!r) return;
    var dev = devs(r).filter(function (d) { return d.s[0] === 'bad'; }).length;
    var h = history(); h.unshift({ at: st.ranAt, src: st.loaded, demo: c.isDemo(), prod: r.prod, fe: r.fe, b2: r.b2, ti: r.ti, rdi: r.rdi, feo: r.feo, dev: dev });
    try { localStorage.setItem(HIST, JSON.stringify(h.slice(0, 12))); } catch (e) { }
  }

  // ---------- deviations: every predicted parameter that has a target ----------
  function devs(r) {
    var c = C(), out = [];
    Object.keys(c.OUT).forEach(function (k) {
      var t = c.state.targets[k]; if (!t || (t[0] == null && t[1] == null) || !fin(r[k])) return;
      var s = c.status(k, r[k]); if (s[0] === 'na') return;
      out.push({ k: k, o: c.OUT[k], v: r[k], s: s });
    });
    var w = { bad: 0, warn: 1, ok: 2 };
    return out.sort(function (a, b) { return w[a.s[0]] - w[b.s[0]]; });
  }

  // ---------- summary card ----------
  function stat(icon, label, v, d, unit, k, extra) {
    var c = C(), s = k && fin(v) ? c.status(k, v) : ['na', ''];
    return '<div class="sc ' + stCls(s[0]) + '"><div class="sc-h">' + I(icon) + '<span>' + label + '</span></div>' +
      '<div class="sc-v"><b data-count="' + (fin(v) ? v : '') + '" data-d="' + d + '">' + c.f(v, d) + '</b> <small>' + unit + '</small></div>' +
      '<div class="sc-f">' + (k && s[0] !== 'na' ? c.chip(s) + ' <span>' + c.tgtText(k) + '</span>' : (extra || '<span>no target set</span>')) + '</div></div>';
  }
  function multi(icon, label, items) {
    var c = C();
    return '<div class="sc wide"><div class="sc-h">' + I(icon) + '<span>' + label + '</span></div><div class="sc-m">' + items.map(function (x) {
      var s = fin(x.v) && x.k ? c.status(x.k, x.v) : ['na', ''];
      return '<div class="mi ' + stCls(s[0]) + '"><small>' + x.l + '</small><b>' + c.f(x.v, x.d) + '</b><i>' + x.u + '</i></div>';
    }).join('') + '</div></div>';
  }
  function energy(r) {
    // estimates only: fixed carbon x 32.8 MJ/kg (heat of combustion of carbon to CO2); ignition gas at an assumed 3.2 MJ/Nm3
    var inp = C().state.inp, solid = fin(r.fcKg) ? r.fcKg * 32.8 / 1000 : null;
    var ign = fin(inp.bfg) && fin(r.prod) && r.prod > 0 ? inp.bfg * 24 * 3.2 / r.prod : null;
    return { solid: solid, ign: ign };
  }

  // ---------- page: home dashboard ----------
  function pageHome(m) {
    var c = C(), st = c.state, x = cur(), r = x.r, ses = window.SinterAuth && SinterAuth.session(), who = ses && ses.profile && ses.profile.name;
    var h = '<section class="hero-x">' + img('plant-hero', 'Sinter plant at dusk: strand under the ignition hood, mix building and conveyors', 'hx-img') +
      '<div class="hx-shade"></div><div class="hx-in">' +
      '<div class="hx-k">' + (who ? 'Welcome, ' + c.esc(who) : 'Sinter Predict') + '</div>' +
      '<h1>SINTER PLANT<br>INTELLIGENCE</h1>' +
      '<p class="hx-s">Process Analysis <i>|</i> Quality Prediction <i>|</i> Performance Optimization <i>|</i> Operational Excellence</p>' +
      '<div class="hx-b"><button class="btn primary lg" id="openDash">' + I('chart-column') + ' Open Analysis Dashboard</button>' +
      '<button class="btn glass lg" data-go="input">' + I('upload') + ' Enter plant data</button>' +
      '<button class="btn glass lg" data-go="params">' + I('book-open') + ' Learn about input / output parameters</button></div></div></section>';
    h += '<div class="srcbar">' + srcLine(x.live) + '</div>';
    h += '<a href="sinter-critical.html" style="display:flex;gap:12px;align-items:center;margin:12px 0;padding:14px 16px;border-radius:16px;text-decoration:none;color:#fff;'+
      'background:linear-gradient(120deg,#5a1a10,#b8410c 55%,#ec6a16);box-shadow:0 10px 24px -14px rgba(236,106,22,.9)">' +
      '<span style="flex:none;width:46px;height:46px;border-radius:12px;display:grid;place-items:center;background:rgba(255,255,255,.16);font:700 22px system-ui">⚠</span>' +
      '<span style="flex:1;min-width:0"><b style="display:block;font-size:16px">Sinter critical decisions · 3D</b><small style="display:block;opacity:.9;font-size:12.5px;line-height:1.35">64 situations in 12 areas: severity, why it matters and what to do, with the plant lit up in 3D</small></span>' +
      '<span style="flex:none;font-weight:700">Open ›</span></a>';
    h += '<a href="how-sinter.html" style="display:flex;gap:12px;align-items:center;margin:0 0 12px;padding:12px 16px;border-radius:16px;text-decoration:none;color:#fff;background:linear-gradient(120deg,#0b2238,#163c60);border:1px solid rgba(255,181,71,.35)">' +
      '<span style="flex:none;width:46px;height:46px;border-radius:12px;display:grid;place-items:center;background:linear-gradient(135deg,#ff6a1a,#ffb547);color:#2a1200;font:700 18px system-ui">▶</span>' +
      '<span style="flex:1;min-width:0"><b style="display:block;font-size:16px">How sinter is made · 3D</b><small style="display:block;opacity:.85;font-size:12.5px;line-height:1.35">Ore fines to blast-furnace sinter, step by step</small></span><span style="flex:none;font-weight:700;color:#ffd9a8">Open ›</span></a>';
    if (!r) { m.innerHTML = h + '<div class="card"><p>Enter a raw-material blend on the Inputs page to see the dashboard.</p></div>'; return; }
    var dv = devs(r), nb = dv.filter(function (d) { return d.s[0] === 'bad'; }).length, nw = dv.filter(function (d) { return d.s[0] === 'warn'; }).length;
    var en = energy(r), inp = st.inp;
    h += '<div class="skyband">' + img('sky-ridge', '') + '<div class="sk-in">' + I('activity') + '<b>Plant performance summary</b><span>' + (c.isDemo() ? 'illustrative demo data' : c.esc(st.loaded)) + '</span></div></div>';
    h += '<div class="scs">' +
      stat('factory', 'Sinter production', r.prod, 0, 'MT/day', null, '<span>' + c.f(r.wet, 0) + ' MT/day wet charge</span>') +
      stat('trending-up', 'Productivity', r.productivityDay, 2, 't/m²/day', null, '<span>' + c.f(r.productivity, 3) + ' t/m²/h · ' + c.f(inp.area, 0) + ' m²</span>') +
      stat('flame', 'Fuel consumption', r.fuel, 1, 'kg/t', 'fuel', '<span>fixed C ' + c.f(r.fcKg, 1) + ' kg/t</span>') +
      stat('recycle', 'Return fines (−6 mm)', r.m6, 1, '%', 'm6') +
      stat('gem', 'Sinter Fe(T)', r.fe, 2, '%', 'fe') +
      stat('scale', 'Basicity CaO/SiO₂', r.b2, 2, '', 'b2') +
      multi('shield-check', 'Metallurgical quality', [{ l: 'RDI', v: r.rdi, d: 1, u: '%', k: 'rdi' }, { l: 'RI', v: r.ri, d: 1, u: '%', k: 'ri' }, { l: 'TI', v: r.ti, d: 1, u: '%', k: 'ti' }]) +
      multi('settings-2', 'Machine parameters', [{ l: 'Speed', v: inp.speed, d: 2, u: 'm/min' }, { l: 'Bed', v: inp.bed, d: 0, u: 'mm' }, { l: 'BTP', v: inp.btp, d: 0, u: '°C' }]) +
      '<div class="sc"><div class="sc-h">' + I('zap') + '<span>Energy (estimate)</span></div><div class="sc-v"><b>' + c.f(en.solid, 2) + '</b> <small>GJ/t solid fuel</small></div><div class="sc-f"><span>' +
        (fin(en.ign) ? 'ignition ≈ ' + c.f(en.ign, 0) + ' MJ/t · ' : '') + 'fixed C × 32.8 MJ/kg</span></div></div>' +
      '<div class="sc devc ' + (nb ? 'bad' : nw ? 'warn' : 'ok') + '" data-go="adv"><div class="sc-h">' + I('triangle-alert') + '<span>Quality &amp; process deviations</span></div><div class="sc-v"><b>' + nb + '</b> <small>off target</small></div><div class="sc-f"><span>' + nw + ' at the edge · ' + (dv.length - nb - nw) + ' within target</span></div></div>' +
      '</div>';
    // deviations and notifications
    var notes = [];
    var AS = c.gapFill && (c.gapFill(), c.assumedSummary());
    if (AS && AS.n) notes.push(['triangle-alert', 'red', AS.n + ' inputs assumed by the app', 'Shown in red on the Inputs page: they were not filled by you. Update them for a better prediction.', 'input']);
    if (c.isDemo()) notes.push(['bell', 'warn', 'Demo data in use', 'Load your plant data on the Inputs page to replace the illustrative values.', 'input']);
    if (x.live) notes.push(['play', 'info', 'Inputs not yet confirmed', 'The summary is a live prediction. Review and confirm the inputs to save it as an analysis.', 'input']);
    if (!Object.keys(st.lab).filter(function (k) { return fin(st.lab[k]); }).length) notes.push(['test-tube', 'info', 'No lab results entered', 'Enter the actual sinter analysis to compare it with the prediction.', 'input']);
    if (!Object.keys(st.anchors || {}).length) notes.push(['target', 'info', 'RDI / RI / SI / AI not anchored', 'Their level is a placeholder until you re-anchor them to your lab on the Plant level page.', 'plant']);
    h += '<div class="g2"><div class="card pn"><h2>' + I('triangle-alert') + 'Deviations</h2>' + (dv.filter(function (d) { return d.s[0] !== 'ok'; }).length ? dv.filter(function (d) { return d.s[0] !== 'ok'; }).slice(0, 7).map(function (d) {
        return '<div class="dv ' + d.s[0] + '" data-go="adv"><span class="dot"></span><span class="dl">' + d.o.l.replace(/ \(.*\)/, '') + '</span><b>' + c.f(d.v, d.o.d) + ' <small>' + d.o.u + '</small></b>' + c.chip(d.s) + '<span class="dt">' + c.tgtText(d.k) + '</span></div>';
      }).join('') : '<div class="okmsg">' + I('circle-check') + ' All ' + dv.length + ' parameters with a target are within limits.</div>') +
      '<button class="btn small" data-go="adv">Process advisor ' + I('arrow-right') + '</button></div>' +
      '<div class="card pn"><h2>' + I('bell') + 'Notifications</h2>' + (notes.length ? notes.map(function (n) {
        return '<div class="nt ' + n[1] + '" data-go="' + n[4] + '">' + I(n[0]) + '<div><b>' + n[2] + '</b><small>' + n[3] + '</small></div></div>';
      }).join('') : '<div class="okmsg">' + I('circle-check') + ' Nothing needs your attention.</div>') + '</div></div>';
    // modules
    h += '<h2 class="sec">' + I('layers') + 'Analysis modules</h2><div class="mods">' + [
      ['raw', 'conveyors', '01', 'Raw material analysis', 'Blend, ore fines, return fines, coke breeze, fluxes, moisture, size and chemistry'],
      ['chem', 'hot-sinter', '02', 'Chemistry & basicity', 'Sinter chemistry, CaO/SiO₂ and B3 / B4 with formulas, target vs actual, validation'],
      ['quality', 'sinter-lumps', '03', 'Physical & metallurgical quality', 'TI, shatter, abrasion, RDI, RI, size distribution, return fines and yield'],
      ['machine', 'strand-ignition', '04', 'Machine parameters', 'Strand speed, bed height, ignition, suction, wind main, BTP and productivity']
    ].map(function (q) {
      return '<button class="mod" data-go="' + q[0] + '"><div class="mod-i">' + img(q[1], '') + '<span>' + q[2] + '</span></div><div class="mod-t"><b>' + q[3] + '</b><small>' + q[4] + '</small></div>' + I('chevron-right', 'chev') + '</button>';
    }).join('') + '</div>';
    h += '<h2 class="sec">' + I('route') + 'Sinter process route</h2><div class="route">' + [
      ['conveyors', 'Proportioning & mixing', 'Ores, fluxes, coke breeze and return fines are weighed from the bins, mixed and granulated with water in the drum.'],
      ['strand-ignition', 'Ignition & strand', 'The mix is laid on the pallets, ignited under the hood and sintered as suction pulls the flame front down through the bed.'],
      ['sinter-cooler', 'Discharge & cooling', 'The hot cake breaks at the discharge end, is crushed and cooled by air on the circular cooler.'],
      ['gas-cleaning', 'Screening & gas cleaning', 'Cooled sinter is screened (−6 mm returns to the mix); the waste gas is cleaned in the ESP and leaves through the stack.']
    ].map(function (q, i) {
      return '<div class="rt"><div class="rt-i">' + img(q[0], q[1]) + '<span>' + (i + 1) + '</span></div><b>' + q[1] + '</b><small>' + q[2] + '</small></div>';
    }).join('') + '</div>';
    h += '<div class="tools">' + [['results', 'chart-column', 'Results'], ['adv', 'compass', 'Process advisor'], ['recipe', 'calculator', 'Target recipe'], ['ba', 'arrow-left-right', 'Before / After'],
      ['sens', 'target', 'Sensitivity'], ['lab', 'test-tube', 'Lab check'], ['viz', 'box', '3D sintering'], ['plant', 'factory', 'Plant level']].map(function (t) {
      return '<button class="tool" data-go="' + t[0] + '">' + I(t[1]) + '<span>' + t[2] + '</span></button>';
    }).join('') + '</div>';
    // recent analyses
    var hs = history();
    h += '<div class="card"><h2>' + I('clock') + 'Recent analyses</h2>' + (hs.length ? '<div class="tbl-wrap"><table class="t rec"><tr><th>When</th><th class="n">Prod. MT/d</th><th class="n">Fe %</th><th class="n">B2</th><th class="n">TI %</th><th class="n">RDI %</th><th class="n">Off target</th></tr>' +
      hs.slice(0, 6).map(function (e) {
        return '<tr><td>' + c.esc(e.at || '') + '<div class="muted small">' + c.esc(e.src || '') + (e.demo ? ' <span class="illus">ILLUSTRATIVE</span>' : '') + '</div></td><td class="n">' + c.f(e.prod, 0) + '</td><td class="n">' + c.f(e.fe, 2) + '</td><td class="n">' + c.f(e.b2, 2) + '</td><td class="n">' + c.f(e.ti, 1) + '</td><td class="n">' + c.f(e.rdi, 1) + '</td><td class="n">' + (e.dev ? '<span class="chip bad">' + e.dev + '</span>' : '<span class="chip ok">0</span>') + '</td></tr>';
      }).join('') + '</table></div>' : '<p class="sub" style="margin:0">Each prediction you confirm is listed here (last 12 kept on this device).</p>') + '</div>';
    // learning centre
    h += '<button class="learn" data-go="refs">' + img('ocean-dawn', '') + '<div class="bn-shade"></div><div class="learn-in"><div class="bn-k">' + I('book-open') + 'Learning &amp; knowledge</div><b>How the model works, test standards and published sources</b><span>Open the knowledge centre ' + I('arrow-right') + '</span></div></button>';
    m.innerHTML = h;
    var od = m.querySelector('#openDash'); if (od) od.onclick = function () { c.go(st.result ? 'results' : 'input'); if (!st.result) c.toast('Confirm the inputs to open the analysis dashboard'); };
  }

  // ---------- module 1: raw material analysis ----------
  function pageRaw(m) {
    var c = C(), st = c.state, inp = st.inp, ch = st.chem, tot = inp.use.reduce(function (a, b) { return a + (+b || 0); }, 0), x = cur(), r = x.r;
    var h = banner('conveyors', 'Module 01', 'Raw material analysis', 'Blend, moisture, size and chemistry of every material in the charge') + '<div class="srcbar">' + srcLine(x.live, true) + '</div>' + demoNote();
    var groups = { Ore: 'Iron ore fines & iron-bearing', Return: 'Return fines', Flux: 'Fluxes', Fuel: 'Solid fuel (coke breeze)' };
    var by = {}; c.ORD.forEach(function (i) { var t = c.SD.types[i] || 'Ore'; (by[t] = by[t] || []).push(i); });
    var gsum = Object.keys(groups).map(function (g) { var s = (by[g] || []).reduce(function (a, i) { return a + (+inp.use[i] || 0); }, 0); return [g, s]; });
    h += '<div class="scs four">' + gsum.map(function (g) {
      return '<div class="sc"><div class="sc-h">' + I({ Ore: 'mountain', Return: 'recycle', Flux: 'flask-conical', Fuel: 'flame' }[g[0]]) + '<span>' + groups[g[0]] + '</span></div><div class="sc-v"><b>' + c.f(g[1], 0) + '</b> <small>MT/day wet</small></div><div class="sc-f"><span>' + c.f(tot ? g[1] / tot * 100 : 0, 1) + ' % of charge' + (r && r.prod ? ' · ' + c.f(g[1] * 1000 / r.prod, 0) + ' kg/t' : '') + '</span></div></div>';
    }).join('') + '</div>';
    // blend-weighted dry-mix chemistry
    var keys = [['fe', 'Fe(T)'], ['sio2', 'SiO₂'], ['cao', 'CaO'], ['mgo', 'MgO'], ['al2o3', 'Al₂O₃'], ['p', 'P'], ['s', 'S']];
    var dry = 0, acc = {}; keys.forEach(function (k) { acc[k[0]] = 0; });
    c.ORD.forEach(function (i) { var u = +inp.use[i] || 0, d = u * (1 - (+ch.moist[i] || 0) / 100); dry += d; keys.forEach(function (k) { if (fin(ch[k[0]] && ch[k[0]][i])) acc[k[0]] += d * ch[k[0]][i]; }); });
    var mst = tot ? (tot - dry) / tot * 100 : 0;
    h += '<div class="card"><h2>' + I('flask-conical') + 'Blended dry mix</h2><p class="sub">Weighted by the dry feed of each material (wet use × (1 − moisture)). Before burn-off, so it is the raw mix, not the sinter.</p><div class="chemrow">' +
      keys.map(function (k) { return '<div><small>' + k[1] + '</small><b>' + c.f(dry ? acc[k[0]] / dry : null, k[0] === 'p' || k[0] === 's' ? 3 : 2) + '</b><i>%</i></div>'; }).join('') +
      '<div><small>Mix moisture</small><b>' + c.f(mst, 2) + '</b><i>%</i></div><div><small>CaO/SiO₂</small><b>' + c.f(acc.sio2 ? acc.cao / acc.sio2 : null, 2) + '</b><i>mix</i></div></div>' +
      (r ? '<p class="muted small" style="margin:8px 0 0">Mix size: −1 mm ' + c.f(r.m1, 1) + ' % · +3 mm ' + c.f(r.p3, 1) + ' % · return sinter ' + c.f(r.retShare, 1) + ' % of dry mix · fixed C in mix ' + c.f(r.fcMix, 2) + ' %</p>' : '') + '</div>';
    // per-material table, grouped
    var col = [['moist', 'H₂O', 1], ['fe', 'Fe', 2], ['sio2', 'SiO₂', 2], ['cao', 'CaO', 2], ['mgo', 'MgO', 2], ['al2o3', 'Al₂O₃', 2], ['p', 'P', 3], ['s', 'S', 3], ['fc', 'FC', 1], ['mps', 'MPS mm', 1]];
    h += '<div class="card"><h2>' + I('layers') + 'Materials in the charge</h2><p class="sub">Use and analysis per material, %. Edit them on the Inputs page (sections 1 and 5).</p><div class="tbl-wrap"><table class="t eng"><tr><th>Material</th><th class="n">MT/day</th><th class="n">%</th>' + col.map(function (k) { return '<th class="n">' + k[1] + '</th>'; }).join('') + '</tr>' +
      Object.keys(groups).map(function (g) {
        var rows = (by[g] || []).map(function (i) {
          var u = +inp.use[i] || 0;
          return '<tr class="' + (u > 0 ? '' : 'off') + '"><td>' + c.esc(c.MAT[i]) + '</td><td class="n"><b>' + c.f(u, 1) + '</b></td><td class="n">' + c.f(tot ? u / tot * 100 : 0, 1) + '</td>' +
            col.map(function (k) { var v = ch[k[0]] && ch[k[0]][i]; return '<td class="n">' + (fin(v) && +v !== 0 ? c.f(v, k[2]) : '<span class="muted">–</span>') + '</td>'; }).join('') + '</tr>';
        }).join('');
        return rows ? '<tr class="grp"><td colspan="' + (3 + col.length) + '">' + groups[g] + '</td></tr>' + rows : '';
      }).join('') + '<tr class="tot"><td>Total wet charge</td><td class="n">' + c.f(tot, 0) + '</td><td class="n">100</td><td colspan="' + col.length + '"></td></tr></table></div>' +
      '<div class="row wrap" style="margin-top:10px"><button class="btn primary" data-go="input">' + I('upload') + ' Edit blend &amp; analysis</button><button class="btn" data-go="recipe">' + I('calculator') + ' Target recipe</button></div></div>';
    var chk = c.analysisChecks((st.upChem && st.upChem.map) || chemMap(), null);
    h += '<div class="card"><h2>' + I('shield-check') + 'Analysis check</h2>' + (chk.length ? chk.map(function (q) { return '<div class="note ' + q.cls + ' small"><b>' + c.esc(q.who) + '</b>: ' + q.text + '</div>'; }).join('') : '<div class="okmsg">' + I('circle-check') + ' Every raw-material analysis that reports LOI adds up to 96–104 %.</div>') + '</div>';
    m.innerHTML = h;
  }
  function chemMap() { var c = C(), out = {}; c.ORD.forEach(function (i) { var o = {}; ['fe', 'feo', 'sio2', 'al2o3', 'cao', 'mgo', 'mno', 'tio2', 'loi', 'burn', 'fc'].forEach(function (k) { var v = c.state.chem[k] && c.state.chem[k][i]; if (fin(v)) o[k] = +v; }); out[i] = o; }); return out; }

  // ---------- target vs actual rows ----------
  function tva(keys, r, explain) {
    var c = C(), st = c.state;
    return '<div class="tva">' + keys.map(function (k) {
      var o = c.OUT[k]; if (!o) return '';
      var v = r[k], t = st.targets[k] || [null, null], s = c.status(k, v), lab = st.lab[k];
      var lo = t[0], hi = t[1], a = fin(lo) ? lo : v * .9, b = fin(hi) ? hi : v * 1.1; if (a === b) { a -= 1; b += 1; }
      var sp = b - a, mn = Math.min(a - sp * .6, v, fin(lab) ? lab : v), mx = Math.max(b + sp * .6, v, fin(lab) ? lab : v), P = function (z) { return ((z - mn) / (mx - mn) * 100).toFixed(1) + '%'; };
      return '<div class="tv ' + stCls(s[0]) + '"><div class="tv-h"><b>' + o.l + '</b><span class="tv-v">' + c.f(v, o.d) + ' <small>' + o.u + '</small></span>' + (s[0] !== 'na' ? c.chip(s) : '<span class="chip na">no target</span>') + '</div>' +
        '<div class="tv-bar"><span class="tv-band" style="left:' + (fin(lo) ? P(lo) : '0%') + ';right:' + (fin(hi) ? (100 - parseFloat(P(hi))) + '%' : '0%') + '"></span><span class="tv-pt" style="left:' + P(v) + '"></span>' + (fin(lab) ? '<span class="tv-lab" style="left:' + P(lab) + '" title="lab"></span>' : '') + '</div>' +
        '<div class="tv-f"><span>Target ' + c.tgtText(k) + '</span>' + (fin(lab) ? '<span>Lab ' + c.f(lab, o.d) + ' (' + c.sgn(v - lab, o.d) + ' predicted − lab)</span>' : '') + '</div>' +
        (explain && explain[k] ? '<p class="tv-x">' + explain[k] + '</p>' : '') + '</div>';
    }).join('') + '</div>';
  }

  // ---------- module 2: chemistry & basicity ----------
  function pageChem(m) {
    var c = C(), st = c.state, x = cur(), r = x.r;
    var h = banner('hot-sinter', 'Module 02', 'Sinter chemistry &amp; basicity', 'Mass balance of your blend and raw-material analysis') + '<div class="srcbar">' + srcLine(x.live, true) + '</div>' + demoNote();
    if (!r) { m.innerHTML = h; return; }
    var B = [['b2', 'B2 = CaO / SiO₂', c.f(r.cao, 2) + ' / ' + c.f(r.sio2, 2)], ['b3', 'B3 = (CaO + MgO) / SiO₂', '(' + c.f(r.cao, 2) + ' + ' + c.f(r.mgo, 2) + ') / ' + c.f(r.sio2, 2)],
      ['b4', 'B4 = (CaO + MgO) / (SiO₂ + Al₂O₃)', '(' + c.f(r.cao, 2) + ' + ' + c.f(r.mgo, 2) + ') / (' + c.f(r.sio2, 2) + ' + ' + c.f(r.al2o3, 2) + ')']];
    h += '<div class="card"><h2>' + I('scale') + 'Basicity</h2><div class="fx">' + B.map(function (b) {
      var s = c.status(b[0], r[b[0]]);
      return '<div class="fxr ' + stCls(s[0]) + '"><div class="fxf">' + b[1] + '</div><div class="fxn">' + b[2] + ' =</div><div class="fxv"><b>' + c.f(r[b[0]], 2) + '</b>' + (s[0] !== 'na' ? c.chip(s) + '<small>' + c.tgtText(b[0]) + '</small>' : '') + '</div></div>';
    }).join('') + '</div><p class="muted small" style="margin:8px 0 0">All values are mass %, on sinter. Al₂O₃ / SiO₂ = ' + c.f(r.as, 3) + ' (high values weaken the bonding phase and raise RDI).</p></div>';
    h += '<div class="card"><h2>' + I('target') + 'Target vs predicted' + (Object.keys(st.lab).length ? ' vs lab' : '') + '</h2><p class="sub">Green band = your target range, dot = prediction' + (Object.keys(st.lab).length ? ', ring = your lab result' : '') + '.</p>' +
      tva(['fe', 'feo', 'sio2', 'cao', 'mgo', 'al2o3', 'mno', 's', 'p'], r) + '</div>';
    var ac = c.analysisChecks(null, st.lab), issues = [];
    if (fin(st.lab.cao) && fin(st.lab.sio2) && fin(st.lab.b2) && st.lab.sio2 > 0 && Math.abs(st.lab.cao / st.lab.sio2 - st.lab.b2) > 0.03) issues.push(['warn', 'Lab basicity ' + c.f(st.lab.b2, 2) + ' does not match lab CaO / SiO₂ = ' + c.f(st.lab.cao / st.lab.sio2, 2) + '. Check which value is right.']);
    if (fin(st.lab.fe) && fin(st.lab.feo) && st.lab.feo * 0.7773 > st.lab.fe) issues.push(['bad', 'FeO ' + c.f(st.lab.feo, 2) + ' % carries more iron than Fe(T) ' + c.f(st.lab.fe, 2) + ' %. One of them is wrong.']);
    ['fe', 'feo', 'sio2', 'al2o3', 'cao', 'mgo'].forEach(function (k) { var v = st.lab[k]; if (fin(v) && (v < 0 || v > 100)) issues.push(['bad', k.toUpperCase() + ' = ' + v + ' % is outside 0–100 %.']); });
    h += '<div class="card"><h2>' + I('shield-check') + 'Validation</h2>' + (ac.length || issues.length ? ac.map(function (q) { return '<div class="note ' + q.cls + ' small"><b>' + c.esc(q.who) + '</b>: ' + q.text + '</div>'; }).join('') + issues.map(function (q) { return '<div class="note ' + q[0] + ' small">' + q[1] + '</div>'; }).join('')
      : '<p class="sub" style="margin:0">Enter the sinter lab analysis (Inputs, section 4) to check it for closure and consistency. Missing values are left out, never guessed.</p>') +
      '<div class="row wrap" style="margin-top:8px"><button class="btn" data-go="lab">' + I('test-tube') + ' Lab vs predicted</button><button class="btn" data-go="recipe">' + I('calculator') + ' Recipe for target chemistry</button></div></div>';
    m.innerHTML = h;
  }

  // ---------- module 3: physical & metallurgical quality ----------
  var EXPL = {
    ti: 'Tumbler index (ISO 3271): % of sinter still above 6.3 mm after tumbling. Cold strength in handling; higher is better.',
    si: 'Shatter index (+10 mm after drop test, ISO 4700 style): resistance to breakage at transfer points; higher is better.',
    ai: 'Abrasion index: −0.5 mm fines made in the tumble test. Dust generation; lower is better.',
    rdi: 'Reduction degradation index (ISO 4696-1, −3.15 mm): breakdown in the upper blast-furnace shaft during low-temperature reduction. Lower is better.',
    ri: 'Reducibility index (ISO 4695): how easily the iron oxides give up oxygen to CO. Higher saves coke in the blast furnace.',
    mps: 'Mean particle size of the product sinter. Too fine hurts burden permeability, too coarse slows reduction.',
    m6: 'Return fines: −6 mm screened out and sent back to the sinter mix. Lower means higher net yield.',
    hd: 'Harmonic diameter Dh = 1 / Σ(xᵢ / dᵢ): weighs the fine fractions heavily and tracks blast-furnace permeability. Higher is better.'
  };
  function pageQuality(m) {
    var c = C(), st = c.state, x = cur(), r = x.r;
    var h = banner('sinter-lumps', 'Module 03', 'Physical &amp; metallurgical quality', 'Strength, degradation, reducibility and size of the product sinter') + '<div class="srcbar">' + srcLine(x.live, true) + '</div>' + demoNote();
    if (!r) { m.innerHTML = h; return; }
    h += '<div class="card gauges">' + ['ti', 'rdi', 'ri', 'mps'].map(function (k) { return c.gauge(k, r[k]); }).join('') + '</div>';
    h += '<div class="card"><h2>' + I('shield-check') + 'Strength &amp; metallurgical quality</h2>' + tva(['ti', 'si', 'ai', 'rdi', 'ri'], r, EXPL) +
      (Object.keys(st.anchors || {}).length ? '' : '<div class="note small">RDI, RI, SI and AI levels are placeholders until they are anchored to your lab results (Plant level page). The direction of change is reliable.</div>') + '</div>';
    var sz = [['p50', '+50'], ['p40', '40–50'], ['p25', '25–40'], ['p10', '10–25'], ['p6', '6–10'], ['m6', '−6']], mxv = Math.max.apply(null, sz.map(function (s) { return Math.max(+r[s[0]] || 0, +st.lab[s[0]] || 0); })) || 1;
    h += '<div class="card"><h2>' + I('ruler') + 'Size distribution</h2><p class="sub">% of product sinter per size class, mm' + (sz.some(function (s) { return fin(st.lab[s[0]]); }) ? '. Light bar = lab.' : '.') + '</p><div class="sz">' + sz.map(function (s) {
      var v = +r[s[0]] || 0, l = st.lab[s[0]];
      return '<div class="szr' + (s[0] === 'm6' ? ' rf' : '') + '"><span class="szl">' + s[1] + '</span><div class="szb"><i style="width:' + (v / mxv * 100).toFixed(1) + '%"></i>' + (fin(l) ? '<u style="width:' + (l / mxv * 100).toFixed(1) + '%"></u>' : '') + '</div><b>' + c.f(v, 1) + '</b></div>';
    }).join('') + '</div>' + tva(['m6', 'mps', 'hd'], r, EXPL) + '</div>';
    h += '<div class="scs">' + stat('recycle', 'Mass-balance yield', r.yieldMB, 1, '%', null, '<span>sinter ÷ dry mix</span>') + stat('factory', 'Return sinter in mix', r.retShare, 1, '%', null, '<span>of the dry mix</span>') + '</div>';
    h += '<div class="row wrap"><button class="btn" data-go="sens">' + I('target') + ' What moves TI and RDI</button><button class="btn" data-go="look">' + I('gem') + ' Sinter look</button></div>';
    m.innerHTML = h;
  }

  // ---------- module 4: machine parameters ----------
  function pageMachine(m) {
    var c = C(), st = c.state, inp = st.inp, x = cur(), r = x.r, mc = st.machine || {}, ref = c.days && c.days.length ? avgRef() : null;
    var h = banner('strand-ignition', 'Module 04', 'Sinter machine parameters', 'Strand speed, bed, ignition, suction and burn-through') + '<div class="srcbar">' + srcLine(x.live, true) + '</div>' + demoNote();
    if (r) h += '<div class="scs">' + stat('trending-up', 'Productivity', r.productivityDay, 2, 't/m²/day', null, '<span>' + c.f(r.productivity, 3) + ' t/m²/h</span>') + stat('factory', 'Production', r.prod, 0, 'MT/day', null, '<span>' + c.esc(inp.basis === 'Machine' ? 'machine basis (speed × bed)' : 'charge basis (mass balance)') + '</span>') +
      stat('ruler', 'Strand', inp.area, 0, 'm²', null, '<span>' + c.f(mc.width, 1) + ' m pallet width · ' + c.esc(mc.name || (mc.type || '') + ' strand') + '</span>') + '</div>';
    var rows = [['speed', 'Strand (pallet) speed', 'm/min', 2, 'route'], ['bed', 'Bed height', 'mm', 0, 'layers'], ['ign', 'Ignition furnace temperature', '°C', 0, 'flame'], ['windP', 'Suction (wind main pressure)', 'kPa', 2, 'wind'],
      ['windT', 'Wind main temperature', '°C', 0, 'thermometer'], ['btp', 'Burn-through temperature (BTP)', '°C', 0, 'thermometer'], ['idFan', 'ID fan speed', 'rpm', 0, 'gauge'], ['bfg', 'BF gas to ignition', 'Nm³/h', 0, 'zap'], ['moist', 'Granulated mix moisture', '%', 2, 'waves'], ['coke3', 'Coke breeze −3 mm', '%', 1, 'flame']];
    h += '<div class="card"><h2>' + I('settings-2') + 'Operating parameters</h2><p class="sub">Current inputs against the reference the model is built around' + (c.isDemo() ? '' : ' (module plant average and your plant normals)') + '.</p><div class="tbl-wrap"><table class="t eng"><tr><th>Parameter</th><th class="n">Current</th><th class="n">Reference</th><th class="n">Δ</th></tr>' +
      rows.map(function (p) {
        var v = inp[p[0]], rv = ref ? ref[p[0]] : null;
        return '<tr><td><span class="ti">' + I(p[4]) + '</span>' + p[1] + ' <span class="muted small">' + p[2] + '</span></td><td class="n"><b>' + c.f(v, p[3]) + '</b></td><td class="n">' + c.f(rv, p[3]) + '</td><td class="n">' + (fin(v) && fin(rv) ? c.sgn(v - rv, p[3]) : '–') + '</td></tr>';
      }).join('') + '</table></div><div class="row wrap" style="margin-top:10px"><button class="btn primary" data-go="input">' + I('settings-2') + ' Edit machine inputs</button><button class="btn" data-go="plant">' + I('factory') + ' Machine type &amp; plant level</button><button class="btn" data-go="viz">' + I('box') + ' 3D sintering</button></div></div>';
    h += '<div class="card"><h2>' + I('book-open') + 'Reading the strand</h2><ul class="small" style="padding-left:18px;margin:0">' +
      '<li><b>BTP</b> should sit just before the discharge end. Too early: speed can go up. Too late: unsintered mix and more return fines.</li>' +
      '<li><b>Bed height × speed × pallet width</b> sets the charge rate; deeper beds save fuel through better heat regeneration.</li>' +
      '<li><b>Suction</b> rising at constant fan speed points to a tighter bed (fines, moisture) or air leaks falling; falling suction with high wind-main temperature can mean leaks.</li>' +
      '<li><b>Ignition</b> must fire the surface evenly without over-melting it; too hot seals the top and lowers permeability.</li></ul></div>';
    m.innerHTML = h;
  }
  function avgRef() {
    var c = C(), d = c.days, st = c.state, avg = function (i) { var v = d.map(function (x) { return x.mach[i]; }).filter(fin); return v.length ? v.reduce(function (a, b) { return a + b; }, 0) / v.length : null; };
    return { speed: c.hzToMpm(avg(0)), ign: avg(1), windP: avg(2), windT: avg(3), idFan: avg(4), btp: avg(5), bfg: avg(6), bed: st.ref.bed, moist: st.ref.moist, coke3: st.ref.coke3 };
  }

  var PAGES = { home: pageHome, raw: pageRaw, chem: pageChem, quality: pageQuality, machine: pageMachine };
  window.SinterDash = {
    has: function (id) { return !!PAGES[id]; },
    page: function (id, m) { PAGES[id](m); },
    record: record
  };
})();
