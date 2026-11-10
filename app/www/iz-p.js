/* Shared by the Cohesive & melting zone and the Hearth liquid modules: the values of BF_Inner_Zone_Model_v3.xlsx that the
   geometry (iz-geom.js) and the hearth time model (hl-model.js) need, read from a calculated XLCalc book. */
(function (root) {
  'use strict';
  function fromBook(G, N) {
    var ring = function (col) { var a = []; for (var r = 14; r <= 18; r++) a.push(G('Radial_CZ', col + r)); return a; };
    var prof = [], charging = [];
    for (var i = 40; i <= 83; i++) prof.push([G('Gas_Flow', 'B' + i), G('Gas_Flow', 'G' + i), G('Gas_Flow', 'H' + i)]);
    for (var k = 58; k <= 87; k++) charging.push([G('Charging', 'B' + k), G('Charging', 'AD' + k), G('Charging', 'AE' + k)]);
    prof = prof.filter(function (r) { return r.every(isFinite); }); charging = charging.filter(function (r) { return r.every(isFinite); });
    var vm = N('c_VdotM'), vs = N('c_VdotS'), nT = N('in_Tuy'); if (!isFinite(nT)) nT = G('Inputs', 'B28');
    var P = { Dh: N('in_Dh'), Db: N('in_Db'), Dt: N('in_Dt'), Hbosh: N('in_Hbosh'), Hbelly: N('in_Hbelly'), Hstack: N('in_Hstack'), Hhearth: N('in_Hhearth'), Hsump: N('in_Hsump'), Hsl: N('c_Hsl'),
      trzB: ring('L'), czTop: ring('M'), czRoot: ring('N'), gasShare: ring('I'), czRootAvg: N('c_CZroot'), TRZt: N('c_TRZt'), LTRZ: N('in_LTRZ'), Tlo: N('c_Tlo'), Tdmax: N('in_Tdmax'), p: N('in_p'),
      TTRZ: N('in_TTRZ'), RAFT: N('c_RAFT'), HMT: N('in_HMT'), TopT: N('in_TopT'), prof: prof, charging: charging, oreFrac: N('c_xo'), pair: N('c_Lpair_b'),
      DR: N('c_DR'), HR: N('c_HR'), WR: N('c_WR'), eDM: N('in_eDM'), rhoM: N('in_rhoM'), rhoS: N('in_rhoS'), rhoO: N('in_rhoO'), rhoC: N('in_rhoC'), rhoCapp: N('in_rhoCapp'), xo: N('c_xo'), BSR: N('c_BSR'),
      metalShare: vm / (vm + vs), nTuy: nT, Safe: N('in_Safe'), rise: N('c_rise'), tmax: N('c_tmax'), gap: N('c_gap'), castDur: N('c_castDur'), Tsoft: N('in_Tsoft'), Tmelt: N('in_Tmelt'),
      // hearth & casting
      VdotM: vm, VdotS: vs, ProdMin: N('c_ProdMin'), Prod: N('in_Prod'), Slag: N('in_Slag'), Casts: N('in_Casts'), Cd: N('in_Cd'), dTH: N('in_dTH'), hLiq: N('in_hLiq'), PbAbs: N('c_Pb_abs'),
      tapR: N('c_tapR'), vTH: N('c_vTH'), Ah: N('c_Ah') };
    if (!isFinite(P.nTuy)) P.nTuy = Math.round(Math.PI * P.Dh / 1.2);
    return P;
  }
  var OPTIONAL = ['nTuy', 'Tsoft', 'Tmelt', 'gap', 'castDur', 'tmax', 'VdotM', 'VdotS', 'ProdMin', 'Prod', 'Slag', 'Casts', 'Cd', 'dTH', 'hLiq', 'PbAbs', 'tapR', 'vTH', 'Ah'];
  function missing(P, extraOptional) {
    var opt = OPTIONAL.concat(extraOptional || []);
    return Object.keys(P).filter(function (x) { var v = P[x]; return Array.isArray(v) ? (v.length === 0 || !v.every(function (q) { return Array.isArray(q) || isFinite(q); })) : (typeof v !== 'number' || !isFinite(v)); })
      .filter(function (x) { return opt.indexOf(x) < 0; });
  }
  root.IZP = { fromBook: fromBook, missing: missing };
  if (typeof module !== 'undefined') module.exports = root.IZP;
})(typeof window !== 'undefined' ? window : globalThis);
