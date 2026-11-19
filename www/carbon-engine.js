/* Carbon footprint (CBAM) engine – Iron Making
   Mass-balance method of Commission Implementing Regulation (EU) 2023/1773, Annex III:
   direct emissions = 44.01/12.011 x (carbon in – carbon out); waste gas exported from the BF is corrected by
   Em = V x NCV x EF(natural gas, 56.1 tCO2/TJ) x 0.667; indirect = electricity x emission factor.
   Pig iron is a complex good: SEE = (attributed emissions of the BF)/tHM + sum(precursor rate x precursor SEE),
   precursors = agglomerated ore (sinter, pellets). Coke ovens are outside the CBAM boundary (coke is not a CBAM good);
   the carbon of the coke is counted in the BF balance. Their own intensity is reported for information. */
(function (root) {
  'use strict';
  var K = 44.01 / 12.011, C_CAO = 12.011 / 56.077, C_MGO = 12.011 / 40.304, EF_NG = 56.1, CORR = 0.667;

  // kind: m = mass (kg per t product | t total), g = gas (Nm3 per t | Nm3 total), e = electricity (MWh per t | MWh total),
  //       p = percent / property (no conversion)
  var PLANTS = [
    { id: 'bf', name: 'Blast furnace', prod: 'hot metal', unit: 'tHM', col: 'var(--bf)', defProd: 300000, groups: [
      ['Carbon in – fuels', [
        ['coke', 'Coke rate (dry, without nut coke)', 'm', 360], ['cokeC', 'Carbon in coke (dry)', 'p', 86.5, '%'],
        ['nut', 'Nut coke rate (dry)', 'm', 40], ['nutC', 'Carbon in nut coke (dry)', 'p', 84, '%'],
        ['pci', 'PCI coal rate (dry)', 'm', 170], ['pciC', 'Carbon in PCI coal (dry)', 'p', 78, '%'],
        ['oil', 'Oil / tar injected', 'm', 0], ['oilC', 'Carbon in oil / tar', 'p', 86, '%'],
        ['ng', 'Natural gas injected or to stoves', 'g', 0],
        ['cog', 'Coke oven gas to tuyeres or stoves', 'g', 25]]],
      ['Carbon in – burden and flux', [
        ['sinter', 'Sinter rate', 'm', 1050], ['sinterC', 'Carbon in sinter', 'p', 0.05, '%'],
        ['pellet', 'Pellet rate', 'm', 450], ['pelletC', 'Carbon in pellets', 'p', 0.02, '%'],
        ['ore', 'Lump ore rate', 'm', 120], ['oreC', 'Carbon in lump ore', 'p', 0.02, '%'],
        ['ls', 'Limestone (raw, not calcined)', 'm', 15], ['lsCaO', 'CaO in limestone', 'p', 52, '%'],
        ['dl', 'Dolomite (raw)', 'm', 10], ['dlCaO', 'CaO in dolomite', 'p', 30, '%'], ['dlMgO', 'MgO in dolomite', 'p', 21, '%'],
        ['otherC', 'Other carbon in (electrodes, plastics…), as carbon', 'm', 0]]],
      ['Carbon out', [
        ['hmC', 'Carbon in hot metal', 'p', 4.5, '%'],
        ['slag', 'Slag rate', 'm', 300], ['slagC', 'Carbon in slag', 'p', 0.03, '%'],
        ['dust', 'Dust + sludge out', 'm', 18], ['dustC', 'Carbon in dust + sludge', 'p', 30, '%']]],
      ['Waste gas exported (CBAM correction)', [
        ['bfgEx', 'BF gas sent outside the BF (power plant, ovens, sinter…)', 'g', 700], ['bfgNcv', 'Net calorific value of BF gas', 'p', 3.3, 'MJ/Nm3']]],
      ['Electricity (indirect)', [['el', 'Electricity incl. blower, oxygen plant', 'e', 0.1]]]] },
    { id: 'sinter', name: 'Sinter plant', prod: 'sinter', unit: 't sinter', col: 'var(--sin)', defProd: 330000, groups: [
      ['Carbon in', [
        ['breeze', 'Coke breeze', 'm', 55], ['breezeC', 'Carbon in coke breeze', 'p', 82, '%'],
        ['anth', 'Anthracite / other solid fuel', 'm', 0], ['anthC', 'Carbon in anthracite', 'p', 80, '%'],
        ['ls', 'Limestone (raw)', 'm', 70], ['lsCaO', 'CaO in limestone', 'p', 52, '%'],
        ['dl', 'Dolomite (raw)', 'm', 40], ['dlCaO', 'CaO in dolomite', 'p', 30, '%'], ['dlMgO', 'MgO in dolomite', 'p', 21, '%'],
        ['cog', 'Ignition: coke oven gas', 'g', 5], ['bfg', 'Ignition: BF gas', 'g', 0], ['ng', 'Ignition: natural gas', 'g', 0],
        ['otherC', 'Other carbon in (mill scale, sludge…), as carbon', 'm', 0]]],
      ['Carbon out', [['prodC', 'Carbon in sinter', 'p', 0.05, '%'], ['dust', 'Dust out (ESP, not recycled)', 'm', 10], ['dustC', 'Carbon in dust', 'p', 20, '%']]],
      ['Electricity (indirect)', [['el', 'Electricity', 'e', 0.035]]]] },
    { id: 'pellet', name: 'Pellet plant', prod: 'pellet', unit: 't pellet', col: 'var(--pel)', defProd: 150000, groups: [
      ['Carbon in', [
        ['breeze', 'Coke breeze / anthracite in mix', 'm', 10], ['breezeC', 'Carbon in that fuel', 'p', 80, '%'],
        ['coal', 'Coal fired in kiln / burners', 'm', 25], ['coalC', 'Carbon in coal', 'p', 60, '%'],
        ['oil', 'Fuel oil', 'm', 0], ['oilC', 'Carbon in fuel oil', 'p', 86, '%'],
        ['ng', 'Natural gas', 'g', 0], ['cog', 'Coke oven gas', 'g', 0], ['bfg', 'BF gas', 'g', 0],
        ['ls', 'Limestone (raw)', 'm', 15], ['lsCaO', 'CaO in limestone', 'p', 52, '%'],
        ['dl', 'Dolomite (raw)', 'm', 20], ['dlCaO', 'CaO in dolomite', 'p', 30, '%'], ['dlMgO', 'MgO in dolomite', 'p', 21, '%']]],
      ['Carbon out', [['prodC', 'Carbon in fired pellets', 'p', 0.02, '%']]],
      ['Electricity (indirect)', [['el', 'Electricity', 'e', 0.04]]]] },
    { id: 'coke', name: 'Coke oven', prod: 'coke', unit: 't coke', col: 'var(--coke)', defProd: 180000, groups: [
      ['Carbon in', [
        ['coal', 'Coal charged (dry)', 'm', 1300], ['coalC', 'Carbon in coal blend (dry)', 'p', 78, '%'],
        ['bfg', 'BF gas imported for underfiring', 'g', 0], ['ng', 'Natural gas', 'g', 0]]],
      ['Carbon out', [
        ['prodC', 'Carbon in coke (dry, incl. breeze)', 'p', 86.5, '%'],
        ['cogEx', 'Coke oven gas exported (net of underfiring)', 'g', 230],
        ['tar', 'Tar', 'm', 38], ['tarC', 'Carbon in tar', 'p', 90, '%'],
        ['benzol', 'Benzol', 'm', 11], ['benzolC', 'Carbon in benzol', 'p', 91, '%']]],
      ['Electricity (indirect)', [['el', 'Electricity', 'e', 0.03]]]] }
  ];
  var COMMON = [
    ['grid', 'Electricity emission factor', 0.727, 'tCO2/MWh', 'CEA CO2 baseline database v20 (FY 2023-24) all-India weighted average. Use your captive plant or supplier factor if you have one.'],
    ['ngC', 'Carbon in natural gas', 0.54, 'kg C/Nm3', ''], ['cogC', 'Carbon in coke oven gas', 0.22, 'kg C/Nm3', ''], ['bfgC', 'Carbon in BF gas', 0.236, 'kg C/Nm3', 'CO 22 % + CO2 22 %'],
    ['sinterOwn', 'Share of sinter made in your own plant', 100, '%', 'The rest is bought: enter its embedded emissions below'],
    ['pelletOwn', 'Share of pellets made in your own plant', 0, '%', ''],
    ['seeSinterBuy', 'Embedded emissions of bought sinter (supplier)', 0.25, 'tCO2/t', 'From the supplier\'s CBAM communication'],
    ['seePelletBuy', 'Embedded emissions of bought pellets (supplier)', 0.12, 'tCO2/t', 'From the supplier\'s CBAM communication']
  ];

  var FIELDS = {}, PL = {};
  PLANTS.forEach(function (p) {
    PL[p.id] = p; FIELDS[p.id] = [];
    p.groups.forEach(function (g) { g[1].forEach(function (f) {
      var d = { k: f[0], l: f[1], kind: f[2], ref: f[3], u: f[4] || null, g: g[0], plant: p.id, id: p.id + '.' + f[0] };
      if (!d.u) d.u = d.kind === 'm' ? 'kg/' + p.unit : d.kind === 'g' ? 'Nm3/' + p.unit : d.kind === 'e' ? 'MWh/' + p.unit : '';
      d.uTot = d.kind === 'm' ? 't' : d.kind === 'g' ? 'Nm3' : d.kind === 'e' ? 'MWh' : d.u;
      FIELDS[p.id].push(d);
    }); });
  });
  var CM = {}; COMMON.forEach(function (c) { CM[c[0]] = { k: c[0], l: c[1], ref: c[2], u: c[3], n: c[4], id: 'common.' + c[0] }; });

  function n(v) { return typeof v === 'number' && isFinite(v); }

  // value of one field per t of product, from: user value (per t or total), linked value, reference
  function valueOf(S, LK, d) {
    var u = S && S.v ? S.v[d.id] : undefined;
    if (n(u)) return { v: u, src: 'user' };
    if (LK && n(LK[d.id])) return { v: LK[d.id], src: 'link' };
    if (S && S.mode === 'user' && S.strict) return { v: null, src: 'need' };
    return { v: d.ref, src: 'ref' };
  }
  function cOf(S, c) { var u = S && S.v ? S.v['common.' + c] : undefined; return n(u) ? u : CM[c].ref; }

  function plant(S, LK, id) {
    var V = {}, src = {}, need = [];
    FIELDS[id].forEach(function (d) { var r = valueOf(S, LK, d); V[d.k] = r.v; src[d.k] = r.src; if (r.v == null) need.push(d); });
    if (need.length) return { id: id, need: need, src: src };
    var g = function (k) { return +V[k] || 0; }, ngC = cOf(S, 'ngC'), cogC = cOf(S, 'cogC'), bfgC = cOf(S, 'bfgC');
    var carb = function (q, cao, mgo) { return q * (cao / 100 * C_CAO + (mgo || 0) / 100 * C_MGO); };
    var IN = [], OUT = [], add = function (a, l, kgC) { if (kgC) a.push({ l: l, c: kgC }); };
    var corr = 0;
    if (id === 'bf') {
      add(IN, 'Coke', g('coke') * g('cokeC') / 100); add(IN, 'Nut coke', g('nut') * g('nutC') / 100); add(IN, 'PCI coal', g('pci') * g('pciC') / 100);
      add(IN, 'Oil / tar', g('oil') * g('oilC') / 100); add(IN, 'Natural gas', g('ng') * ngC); add(IN, 'Coke oven gas', g('cog') * cogC);
      add(IN, 'Sinter', g('sinter') * g('sinterC') / 100); add(IN, 'Pellets', g('pellet') * g('pelletC') / 100); add(IN, 'Lump ore', g('ore') * g('oreC') / 100);
      add(IN, 'Limestone (carbonate)', carb(g('ls'), g('lsCaO'))); add(IN, 'Dolomite (carbonate)', carb(g('dl'), g('dlCaO'), g('dlMgO'))); add(IN, 'Other carbon', g('otherC'));
      add(OUT, 'Hot metal', 1000 * g('hmC') / 100); add(OUT, 'Slag', g('slag') * g('slagC') / 100); add(OUT, 'Dust + sludge', g('dust') * g('dustC') / 100);
      corr = g('bfgEx') * g('bfgNcv') / 1000 * EF_NG * CORR;                 // kg CO2 per tHM
    } else if (id === 'sinter' || id === 'pellet') {
      add(IN, id === 'sinter' ? 'Coke breeze' : 'Breeze / anthracite in mix', g('breeze') * g('breezeC') / 100);
      if (id === 'sinter') add(IN, 'Anthracite', g('anth') * g('anthC') / 100);
      if (id === 'pellet') { add(IN, 'Coal (kiln)', g('coal') * g('coalC') / 100); add(IN, 'Fuel oil', g('oil') * g('oilC') / 100); }
      add(IN, 'Natural gas', g('ng') * ngC); add(IN, 'Coke oven gas', g('cog') * cogC); add(IN, 'BF gas', g('bfg') * bfgC);
      add(IN, 'Limestone (carbonate)', carb(g('ls'), g('lsCaO'))); add(IN, 'Dolomite (carbonate)', carb(g('dl'), g('dlCaO'), g('dlMgO')));
      if (id === 'sinter') add(IN, 'Other carbon', g('otherC'));
      add(OUT, id === 'sinter' ? 'Sinter' : 'Pellets', 1000 * g('prodC') / 100);
      if (id === 'sinter') add(OUT, 'Dust', g('dust') * g('dustC') / 100);
    } else {
      add(IN, 'Coal', g('coal') * g('coalC') / 100); add(IN, 'BF gas (underfiring)', g('bfg') * bfgC); add(IN, 'Natural gas', g('ng') * ngC);
      add(OUT, 'Coke', 1000 * g('prodC') / 100); add(OUT, 'Coke oven gas exported', g('cogEx') * cogC); add(OUT, 'Tar', g('tar') * g('tarC') / 100); add(OUT, 'Benzol', g('benzol') * g('benzolC') / 100);
    }
    var cin = IN.reduce(function (s, x) { return s + x.c; }, 0), cout = OUT.reduce(function (s, x) { return s + x.c; }, 0);
    var direct = Math.max(0, (cin - cout) * K - corr) / 1000, indirect = g('el') * cOf(S, 'grid');
    return { id: id, need: [], src: src, V: V, IN: IN, OUT: OUT, cin: cin, cout: cout, gross: (cin - cout) * K / 1000, corr: corr / 1000, direct: direct, indirect: indirect, total: direct + indirect };
  }

  function compute(S, LK) {
    var R = { plants: {}, need: [] };
    PLANTS.forEach(function (p) { var r = plant(S, LK, p.id); R.plants[p.id] = r; R.need = R.need.concat(r.need); });
    var B = R.plants.bf, Sn = R.plants.sinter, Pe = R.plants.pellet, Co = R.plants.coke;
    if (B.need.length) return R;
    var so = cOf(S, 'sinterOwn') / 100, po = cOf(S, 'pelletOwn') / 100, sBuy = cOf(S, 'seeSinterBuy'), pBuy = cOf(S, 'seePelletBuy');
    var sr = B.V.sinter / 1000, pr = B.V.pellet / 1000;
    var pre = [];
    var sD = Sn.need.length ? null : Sn.direct, sI = Sn.need.length ? 0 : Sn.indirect, pD = Pe.need.length ? null : Pe.direct, pI = Pe.need.length ? 0 : Pe.indirect;
    if (sr > 0) pre.push({ l: 'Sinter', rate: sr, own: so, d: sr * (so * (sD || 0) + (1 - so) * sBuy), i: sr * so * sI });
    if (pr > 0) pre.push({ l: 'Pellets', rate: pr, own: po, d: pr * (po * (pD || 0) + (1 - po) * pBuy), i: pr * po * pI });
    var preD = pre.reduce(function (s, x) { return s + x.d; }, 0), preI = pre.reduce(function (s, x) { return s + x.i; }, 0);
    var cokeRate = ((B.V.coke || 0) + (B.V.nut || 0)) / 1000;
    R.pig = { bfD: B.direct, bfI: B.indirect, pre: pre, preD: preD, preI: preI, direct: B.direct + preD, indirect: B.indirect + preI, total: B.direct + preD + B.indirect + preI,
      cokeRate: cokeRate, coke: Co.need.length ? null : cokeRate * Co.total };
    R.pig.site = R.pig.coke == null ? null : R.pig.total + R.pig.coke;
    return R;
  }

  // values from the BF Model pages (Batch chemistry) – per tHM
  function linkBF() {
    var E = root.BurdenEngine, LK = {}, t = null; if (!E) return LK;
    try { t = localStorage.getItem('sspl_bf_burden_v1'); } catch (e) { } if (!t) return LK;
    try {
      var st = JSON.parse(t, function (k, v) { if (v && typeof v === 'object' && typeof v.__d === 'string') { var p = v.__d.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); } return v; });
      if (!st || st.version !== 1) return LK;
      if (!st.lab || (!st.lab.bf && !st.lab.importedOn)) st.lab = E.emptyLab(); st.lab = E.migrateLab(st.lab); if (!st.charge) st.charge = E.chargeDefault();
      st.params = Object.assign({}, E.PARAMS_DEFAULT, st.params); st.matSource = st.matSource || {}; st.manual = st.manual || {}; st.targets = Object.assign({}, (E.defaultState() || {}).targets, st.targets);
      if (st.charge && st.charge.on) E.applyCharge(st);
      var rv = E.review(st), B = E.burden(st, rv), rows = B.rows, hm = B.hm; if (!(hm > 0)) return LK;
      var rate = function (a, b, f) { var s = 0; for (var i = a; i <= b; i++) s += rows[i][f]; return s / hm * 1000; };
      var pct = function (a, b, f) { var d = 0, x = 0; for (var i = a; i <= b; i++) { d += rows[i].dry; x += rows[i][f]; } return d > 0 ? x / d * 100 : null; };
      var put = function (k, v) { if (n(v)) LK['bf.' + k] = +v.toFixed(4); };
      put('coke', rate(12, 15, 'dry')); put('cokeC', pct(12, 15, 'c')); put('nut', rate(16, 16, 'dry')); put('nutC', pct(16, 16, 'c'));
      put('pci', rate(11, 11, 'dry')); put('pciC', pct(11, 11, 'c'));
      put('sinter', rate(1, 1, 'dry')); put('pellet', rate(0, 0, 'dry')); put('ore', rate(2, 3, 'dry'));
      put('ls', rate(6, 6, 'dry')); put('lsCaO', pct(6, 6, 'cao')); put('dl', rate(7, 7, 'dry')); put('dlCaO', pct(7, 7, 'cao')); put('dlMgO', pct(7, 7, 'mgo'));
      put('hmC', st.params.hmC); put('slag', B.slagRate);
      Object.keys(LK).forEach(function (k) { if (LK[k] === null || (/C$|CaO$|MgO$/.test(k) && !(LK[k] > 0))) delete LK[k]; });
      ['coke', 'nut', 'pci', 'ls', 'dl'].forEach(function (k) { if (!(LK['bf.' + k] > 0)) { delete LK['bf.' + k + 'C']; delete LK['bf.' + k + 'CaO']; delete LK['bf.' + k + 'MgO']; } });
    } catch (e) { }
    return LK;
  }

  var KEY = 'co2.state.v1';
  function load() { try { var s = JSON.parse(localStorage.getItem(KEY) || 'null'); if (s && s.v) return s; } catch (e) { } return { mode: 'reference', v: {}, basis: {}, prod: {}, file: '' }; }
  function save(S) { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { } }

  root.CarbonEngine = { PLANTS: PLANTS, PL: PL, FIELDS: FIELDS, COMMON: COMMON, CM: CM, compute: compute, plant: plant, linkBF: linkBF, load: load, save: save, KEY: KEY, K: K, valueOf: valueOf };
})(typeof window !== 'undefined' ? window : globalThis);
