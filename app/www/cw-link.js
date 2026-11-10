/* Know your water cooling requirement: take furnace design and today's run from the other BF Model pages
   (Furnace 3D view, Batch chemistry, Critical situation plan) so they are entered only once.
   A value typed on the cooling page stays; linked values follow the BF Model when they change. */
(function () {
  'use strict';
  function rd(k) { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) { return null; } }
  function ls(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } }
  var LABEL = { Vw: 'working volume', dH: 'hearth dia', dB: 'belly dia', dT: 'throat dia', h2: 'bosh height', h3: 'belly height', h4: 'stack height', h5: 'stockline depth',
    nT: 'tuyeres', bore: 'tuyere bore', nTH: 'tapholes', prod: 'hot metal t/d', BV: 'blast volume', BT: 'hot blast temp', BP: 'hot blast pressure', PCI: 'PCI rate' };
  function sources() {
    var V = {}, FV = 'Furnace 3D view', BC = 'Batch chemistry', CS = 'Critical situation plan';
    var ST = rd('bf-inside-v1'), TV = (ST && ST.v) || {}, CH = rd('sspl_bf_burden_v1'), P = (CH && CH.params) || {}, CSS = rd('cs.state.v1'), CI = (CSS && CSS.inp) || {};
    function put(k, v, from, d) { v = +v; if (v > 0 && isFinite(v) && !V[k]) V[k] = { v: d == null ? v : +v.toFixed(d), from: from }; }
    put('Vw', CI.C6, CS);
    put('dH', TV.hearthD, FV, 2); put('dB', TV.bellyD, FV, 2); put('dT', TV.throatD, FV, 2);
    put('h2', TV.boshH, FV, 2); put('h3', TV.bellyH, FV, 2); put('h4', TV.shaftH, FV, 2); put('h5', TV.stock, FV, 2);
    put('nT', TV.nTuy, FV, 0); put('bore', TV.tuyD, FV, 0); put('nTH', TV.nTap, FV, 0);
    put('prod', TV.prod, FV, 0); put('BV', TV.BV, FV, 0); put('BV', P.blastVol, BC, 0); put('BT', TV.HBT, FV, 0);
    if (+TV.BP > 0) put('BP', +TV.BP * 0.980665, FV, 2);           // kg/cm² g → bar g
    put('PCI', TV.pci, FV, 0);
    return V;
  }
  window.CW_LINK = function (S, DEF, saved, reset) {
    var V = sources(), prev = rd('cw.linked') || {}, applied = {}, kept = [];
    Object.keys(V).forEach(function (k) {
      if (!(k in S)) return;
      var userSet = !reset && saved && (k in saved) && saved[k] !== DEF[k] && saved[k] !== prev[k];
      if (userSet) { kept.push(k); return; }
      S[k] = V[k].v; applied[k] = V[k].v;
    });
    ls('cw.linked', applied);
    var from = {}; Object.keys(applied).forEach(function (k) { (from[V[k].from] = from[V[k].from] || []).push(LABEL[k] || k); });
    var el = document.getElementById('cwLink');
    if (el) {
      var n = Object.keys(applied).length;
      el.innerHTML = n ? '<b>' + n + ' input' + (n > 1 ? 's' : '') + ' taken from the BF Model</b> · ' + Object.keys(from).map(function (f) { return f + ': ' + from[f].join(', '); }).join(' · ') +
        (kept.length ? ' · Your own value kept for: ' + kept.map(function (k) { return LABEL[k] || k; }).join(', ') : '') + '. Type a different value here to override it for this page.'
        : 'Enter your furnace below, or fill the Furnace 3D view in the BF Model once and the design and run values come here by themselves.';
    }
    return applied;
  };
})();
