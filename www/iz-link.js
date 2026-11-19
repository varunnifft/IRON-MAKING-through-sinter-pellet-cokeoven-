/* Hearth & Cohesive Zone Prediction: inputs that the other BF Model pages already hold are taken from there
   (each input is entered once in the BF module). Sources: Burden calculator (bfbm-calculator-v1), Batch chemistry
   (sspl_bf_burden_v1, through engine.js) and Furnace 3D view (bf-inside-v1, values typed there).
   Only pages the user has actually used are linked. */
(function (root) {
  'use strict';
  function rd(k) { try { var t = localStorage.getItem(k); return t ? JSON.parse(t) : null; } catch (e) { return null; } }
  function isNum(x) { return typeof x === 'number' && isFinite(x); }
  function revive(txt) { return JSON.parse(txt, function (k, v) { if (v && typeof v === 'object' && typeof v.__d === 'string') { var p = v.__d.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); } return v; }); }
  function chem() {
    var E = root.BurdenEngine; if (!E) return null;
    var t = null; try { t = localStorage.getItem('sspl_bf_burden_v1'); } catch (e) { }
    if (!t) return null;
    try {
      var st = revive(t); if (!st || st.version !== 1) return null;
      if (!st.lab || (!st.lab.bf && !st.lab.importedOn)) st.lab = E.emptyLab();
      st.lab = E.migrateLab(st.lab); if (!st.charge) st.charge = E.chargeDefault();
      st.params = Object.assign({}, E.PARAMS_DEFAULT, st.params); st.matSource = st.matSource || {}; st.manual = st.manual || {};
      if (st.charge && st.charge.on) E.applyCharge(st);
      var rv = E.review(st), R = E.burden(st, rv);
      return { R: R, P: st.params };
    } catch (e) { return null; }
  }
  /* returns { 'Inputs!B4': { v: 4000, from: 'Batch chemistry' }, ... } */
  function links() {
    var L = {}, put = function (key, v, from, round) { if (isNum(v)) L[key] = { v: +(+v).toFixed(round == null ? 4 : round), from: from }; };
    var IN = rd('bfbm-calculator-v1'), CS = chem(), ST = rd('bf-inside-v1'), TV = (ST && ST.v) || {};
    var BC = 'Burden calculator', CH = 'Batch chemistry', FV = 'Furnace 3D view';
    if (IN && IN.f) {
      var F = IN.f, mps = IN.mps || {}, pr = IN.props || {};
      put('Inputs!B18', F.BV, BC); put('Inputs!B22', F.BP, BC); put('Inputs!B23', F.TP, BC); put('Inputs!B24', F.Ttop, BC);
      var pur = CS && isNum(CS.P.o2Purity) ? CS.P.o2Purity : isNum(TV.O2pur) ? TV.O2pur : 99.5;
      if (isNum(F.O2) && isNum(F.BV) && F.BV > 0) put('Inputs!B19', F.O2 / 60 * (pur / 100 - 0.21) / F.BV * 100, BC, 3);
      put('Inputs!B32', F.hearthD, BC); put('Inputs!B33', F.bellyD, BC); put('Inputs!B34', F.throatD, BC);
      put('Inputs!B37', F.boshH, BC); put('Inputs!B38', F.bellyH, BC);
      if (isNum(F.shaftH) && isNum(F.throatH)) put('Inputs!B39', F.shaftH + F.throatH - (isNum(F.stock) ? F.stock : 0), BC, 3);
      var sP = +F.sinterPct || 0, pP = +F.pelletPct || 0, lP = Math.max(0, 100 - sP - pP);
      if (isNum(F.sinterPct) && isNum(F.pelletPct)) { put('Inputs!B41', sP, BC); put('Inputs!B42', pP, BC); put('Inputs!B43', lP, BC); }
      var sh = [[sP, 'sinter', mps.sinter], [pP, 'pellet', mps.pellet], [lP, 'ore', mps.ore]], tw = 0, inv = 0, bd = 0;
      sh.forEach(function (s) { if (s[0] > 0 && isNum(s[2]) && s[2] > 0) { tw += s[0]; inv += s[0] / s[2]; bd += s[0] * (+((pr[s[1]] || [])[0]) || 0); } });
      if (tw > 0) { put('Inputs!B48', tw / inv / 1000, BC, 5); if (bd > 0) put('Inputs!B49', bd / tw, BC, 3); }
      var y = isNum(F.yardPct) ? F.yardPct / 100 : 0;
      if (isNum(mps.mainCoke)) put('Inputs!B50', (isNum(mps.yardCoke) ? mps.mainCoke * (1 - y) + mps.yardCoke * y : mps.mainCoke) / 1000, BC, 4);
      if (pr.coke && isNum(pr.coke[0])) put('Inputs!B51', pr.coke[0], BC);
      if (isNum(F.cokeBase)) put('Inputs!B55', F.cokeBase / 1000, BC, 3);
      put('Charging!B5', F.L, BC); put('Charging!B6', F.Hp, BC); put('Charging!B7', F.stock, BC); put('Charging!B8', F.rpm, BC);
      var mx = IN.mx;
      if (mx && mx.length) for (var i = 0; i < 12; i++) { var r = mx[i] || [null, null, null, null]; ['B', 'C', 'D', 'E'].forEach(function (c, j) { L['Charging!' + c + (26 + i)] = { v: isNum(r[j]) ? r[j] : null, from: BC }; }); }
    }
    if (CS) {
      var R = CS.R, P = CS.P;
      put('Inputs!B4', R.prodCharges > 0 ? R.prodCharges : R.prodO2, CH, 1);
      if (isNum(R.cokeDry)) put('Inputs!B5', R.cokeDry + (isNum(R.ncDry) ? R.ncDry : 0), CH, 1);
      put('Inputs!B7', R.coal, CH, 1); put('Inputs!B12', R.feBearing, CH, 1); put('Inputs!B13', R.slagRate, CH, 1);
      put('Inputs!B14', P.feHM, CH); put('Inputs!B15', P.hmC, CH); put('Inputs!B21', P.blastMoist, CH);
      put('Inputs!B57', R.cao, CH, 2); put('Inputs!B58', R.sio2, CH, 2); put('Inputs!B59', R.mgo, CH, 2); put('Inputs!B60', R.al2o3, CH, 2);
    }
    if (ST && ST.v) {
      // values typed on the Furnace 3D view that the Burden calculator / Batch chemistry did not give
      var pin = function (key, v, round) { if (!L[key]) put(key, v, FV, round); };
      pin('Inputs!B4', TV.prod, 1); pin('Inputs!B13', TV.slag, 1); pin('Inputs!B15', TV.hmC); pin('Inputs!B21', TV.W);
      if (isNum(TV.coke)) pin('Inputs!B5', TV.coke + (isNum(TV.nut) ? TV.nut : 0), 1);
      pin('Inputs!B7', TV.pci, 1); pin('Inputs!B18', TV.BV); pin('Inputs!B22', TV.BP); pin('Inputs!B23', TV.TP); pin('Inputs!B24', TV.Ttop);
      if (isNum(TV.O2) && isNum(TV.BV) && TV.BV > 0) pin('Inputs!B19', TV.O2 / 60 * ((isNum(TV.O2pur) ? TV.O2pur : 99.5) / 100 - 0.21) / TV.BV * 100, 3);
      pin('Inputs!B32', TV.hearthD); pin('Inputs!B33', TV.bellyD); pin('Inputs!B34', TV.throatD); pin('Inputs!B37', TV.boshH); pin('Inputs!B38', TV.bellyH);
      if (isNum(TV.sinterPct) && isNum(TV.pelletPct)) { var s2 = TV.sinterPct, p2 = TV.pelletPct, l2 = isNum(TV.lumpPct) ? TV.lumpPct : Math.max(0, 100 - s2 - p2);
        pin('Inputs!B41', s2); pin('Inputs!B42', p2); pin('Inputs!B43', l2);
        var tot = s2 + p2 + l2, parts = [[s2, 'S', 's'], [p2, 'P', 'p'], [l2, 'L', 'l']];
        if (tot > 0) {
          var fin = 0, fw = 0, hv = 0, hw = 0, ts = 0, tsw = 0, tm = 0, tmw = 0;
          parts.forEach(function (q) { var w = q[0]; if (w <= 0) return; var fi = TV['fin' + q[1]], d = TV['d' + q[1]], a = TV[q[2] + 'Tss'], b = TV[q[2] + 'Tme'];
            if (isNum(fi)) { fin += w * fi; fw += w; } if (isNum(d) && d > 0) { hv += w / d; hw += w; } if (isNum(a)) { ts += w * a; tsw += w; } if (isNum(b)) { tm += w * b; tmw += w; } });
          if (fw === tot) pin('Inputs!B47', fin / tot, 2);
          if (hw === tot) pin('Inputs!B48', tot / hv / 1000, 5);
          if (tsw === tot) pin('Estimator!C37', ts / tot, 0);       // softening start → cohesive zone top
          if (tmw === tot) pin('Estimator!C38', tm / tot, 0);       // melt-down (dripping) → cohesive zone root
        }
      }
      pin('Inputs!B45', TV.sFeO);
      if (isNum(TV.dC)) pin('Inputs!B50', TV.dC / 1000, 4); if (isNum(TV.bdC)) pin('Inputs!B51', TV.bdC / 1000, 3); if (isNum(TV.bdO)) pin('Inputs!B49', TV.bdO / 1000, 3);
      put('Inputs!B20', TV.HBT, FV); put('Inputs!B28', TV.nTuy, FV); if (isNum(TV.tuyD)) put('Inputs!B29', TV.tuyD / 1000, FV);
      put('Inputs!B6', TV.cokeFC, FV); put('Inputs!B8', TV.coalM, FV); put('Inputs!B9', TV.coalAsh, FV); put('Inputs!B10', TV.coalVM, FV);
      put('Inputs!B25', TV.tgCO, FV); put('Inputs!B26', TV.tgCO2, FV); put('Inputs!B27', TV.tgH2, FV);
      put('Inputs!B53', TV.csr, FV); put('Inputs!B54', TV.cri, FV); put('Inputs!B16', TV.hmtM, FV);
    }
    // values typed in the Hearth liquid prediction module (and not given anywhere else)
    var HS = rd('hl2.state.v1');
    if (HS && HS.mode === 'user' && HS.final && HS.src) {
      [['D_hearth', 'Inputs!B32', 1], ['H_tt', 'Inputs!B35', 1], ['D_bit', 'Inputs!B69', 0.001], ['P_day', 'Inputs!B4', 1], ['SlagRate', 'Inputs!B13', 1], ['P_blast', 'Inputs!B22', 1 / 0.980665],
        ['rho_HM', 'Estimator!C66', 1], ['rho_SL', 'Estimator!C65', 1], ['eps', 'Estimator!C25', 1], ['H_sump', 'Estimator!C78', 1]].forEach(function (m) {
        var v = HS.final[m[0]]; if (HS.src[m[0]] === 'user' && isNum(v) && !L[m[1]]) put(m[1], v * m[2], 'Hearth liquid');
      });
    }
    return L;
  }
  root.IZLink = { links: links };
})(window);
