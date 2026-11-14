/* Smart match: guesses which app input an unrecognised label from an uploaded file means. Runs on the device,
   free and offline (no cloud service). It expands plant shortcuts ("LST", "Dolo", "CB", "M/c spd", "Ign tmp"),
   compares words and letter patterns with every known label and alias, and checks that the number fits the
   input's usual range and unit. The user confirms every guess; confirmed guesses are remembered for next time. */
(function () {
  'use strict';
  function norm(s) {
    return String(s == null ? '' : s).replace(/[\u2080-\u2089]/g, function (c) { return String(c.charCodeAt(0) - 0x2080); }).toLowerCase().replace(/[–—−]/g, '-').replace(/°/g, ' deg ')
      .replace(/([a-z])\.(?=[a-z])/g, '$1 ').replace(/[()\[\]{}_:;,#|]/g, ' ').replace(/\s+/g, ' ').trim();
  }
  // plant shortcuts -> words (applied to whole tokens)
  var ABBR = {
    lst: 'limestone', ls: 'limestone', lmst: 'limestone', lime_stone: 'limestone', lsf: 'limestone fines', 'l/s': 'limestone',
    dolo: 'dolomite', dol: 'dolomite', dlm: 'dolomite', dolf: 'dolomite fines',
    cb: 'coke breeze', 'c/b': 'coke breeze', brz: 'breeze', ck: 'coke', cf: 'coke fines', nut: 'nut coke', anth: 'anthracite', antc: 'anthracite',
    iof: 'iron ore fines', iob: 'iron ore fines', ore: 'ore', fines: 'fines', hg: 'high grade', lg: 'low grade',
    ms: 'mill scale', mlsc: 'mill scale', fd: 'flue dust', fld: 'flue dust',
    rf: 'return fines', rs: 'return sinter', rtn: 'return', ret: 'return', retn: 'return', bfrs: 'bf return sinter', bfrf: 'bf return fines', psf: 'plant sinter fines',
    cl: 'calcined lime', clm: 'calcined lime', ql: 'quick lime', bl: 'burnt lime', calc: 'calcined', lp: 'lime plant',
    spd: 'speed', 'm/c': 'machine', mc: 'machine', mch: 'machine', mcn: 'machine', pal: 'pallet', strnd: 'strand',
    ign: 'ignition', igni: 'ignition', ignt: 'ignition', hood: 'hood',
    temp: 'temperature', tmp: 'temperature', tem: 'temperature', deg: 'temperature', degc: 'temperature',
    suc: 'suction', suct: 'suction', sucn: 'suction', vac: 'suction', press: 'pressure', pr: 'pressure', prs: 'pressure',
    wm: 'wind main', wb: 'wind box', 'w/b': 'wind box', 'w/m': 'wind main', wbox: 'wind box', wmain: 'wind main',
    btp: 'burn through temperature', bth: 'burn through', btt: 'burn through temperature',
    idf: 'id fan', fan: 'fan', rpm: 'rpm',
    bfg: 'bf gas', cog: 'coke oven gas', gas: 'gas', flow: 'flow',
    ht: 'height', hgt: 'height', ht_: 'height', bh: 'bed height', bd: 'bed', lyr: 'layer', thk: 'thickness',
    mst: 'moisture', moist: 'moisture', mois: 'moisture', h2o: 'moisture', wtr: 'water', mix: 'mix', gm: 'green mix', grn: 'green',
    alk: 'alkali', ar: 'area', area: 'area',
    prod: 'production', prdn: 'production', pdn: 'production', tpd: 'production', tph: 'production',
    tfe: 'fe total', fet: 'fe total', 'fe(t)': 'fe total', tf: 'fe total',
    bas: 'basicity', basi: 'basicity', b2: 'basicity', 'c/s': 'basicity', cs: 'basicity',
    ti: 'tumbler index', tumb: 'tumbler', tmb: 'tumbler', si: 'shatter index', shtr: 'shatter', ai: 'abrasion index', abr: 'abrasion',
    rdi: 'reduction degradation index', ri: 'reducibility index', red: 'reducibility', mps: 'mean particle size', avg: 'mean', sz: 'size'
  };
  // usual range of each input, as a sanity check on the number next to the label
  var RANGE = {
    speed: [0.4, 70], ign: [850, 1350], windP: [5, 25], windT: [70, 300], idFan: [300, 1600], btp: [200, 600], bfg: [300, 25000],
    bed: [250, 1000], moist: [3, 13], coke3: [40, 100], alk: [0, 0.6], area: [20, 800], totCharge: [300, 60000], sinterProd: [300, 40000], prodOverride: [300, 40000],
    'lab.fe': [40, 65], 'lab.feo': [3, 18], 'lab.sio2': [2, 10], 'lab.al2o3': [0.5, 6], 'lab.cao': [3, 20], 'lab.mgo': [0.2, 5], 'lab.mno': [0, 2], 'lab.b2': [0.8, 3.5],
    'lab.ti': [40, 90], 'lab.rdi': [5, 50], 'lab.ri': [40, 95], 'lab.si': [50, 97], 'lab.ai': [1, 15], 'lab.mps': [5, 45], 'lab.prod': [300, 40000],
    'lab.p50': [0, 50], 'lab.p40': [0, 50], 'lab.p25': [0, 60], 'lab.p10': [0, 70], 'lab.p6': [0, 50], 'lab.m6': [0, 30]
  };
  var UNIT = [ // unit in the label -> fields it fits
    [/\b(deg|°c|degc)\b|temperature/, /^(ign|windT|btp)$/], [/\bmm\b/, /^(bed|lab\.mps|coke3|lab\.p|lab\.m6)/], [/kpa|mmwc|mbar|\bpa\b|pressure|suction/, /^windP$/],
    [/\brpm\b/, /^idFan$/], [/nm3|nm³|m3\/h/, /^bfg$/], [/m\/min|mpm|\bhz\b/, /^speed$/], [/\b(tpd|mt|t\/d|tph|mt\/day|tons?)\b/, /^(use\.|totCharge|sinterProd|lab\.prod)/], [/kg\/t/, /^kgt\./], [/m2|m²|sq ?m/, /^area$/]
  ];
  function tokens(s) {
    var out = [], cp = norm(s).replace(/[^a-z0-9\/]/g, '');
    if (cp.length <= 5 && ABBR[cp]) s = ABBR[cp];
    norm(s).split(/[\s\/\-+=]+/).forEach(function (t) {
      if (!t) return;
      var raw = t.replace(/\.+$/, ''), x = ABBR[raw] || ABBR[raw.replace(/\./g, '')];
      (x || raw.replace(/\./g, '')).split(' ').forEach(function (w) { if (w && !/^(of|the|in|on|to|and|per|at|for)$/.test(w)) out.push(w.replace(/(ies)$/, 'y').replace(/([^s])s$/, '$1')); });
    });
    return out;
  }
  function lev(a, b) {
    if (Math.abs(a.length - b.length) > 2) return 9;
    var d = []; for (var i = 0; i <= a.length; i++) { d[i] = [i]; }
    for (var j = 1; j <= b.length; j++) d[0][j] = j;
    for (i = 1; i <= a.length; i++) for (j = 1; j <= b.length; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[a.length][b.length];
  }
  function same(a, b) {
    if (a === b) return 1;
    if (/^\d/.test(a) || /^\d/.test(b)) return a === b ? 1 : 0;
    if (a.length >= 3 && b.length >= 3 && (a.indexOf(b) === 0 || b.indexOf(a) === 0)) return 0.85;
    if (a.length >= 5 && b.length >= 5 && lev(a, b) <= 1) return 0.8;
    return 0;
  }
  function tokSim(A, B) {
    if (!A.length || !B.length) return 0;
    var hit = 0, used = {};
    A.forEach(function (a) { var best = 0, bi = -1; B.forEach(function (b, i) { if (used[i]) return; var s = same(a, b); if (s > best) { best = s; bi = i; } }); if (bi >= 0) { used[bi] = 1; hit += best; } });
    return 2 * hit / (A.length + B.length);
  }
  function tri(s) { var g = {}, t = '  ' + s.replace(/\s+/g, ' ') + ' '; for (var i = 0; i < t.length - 2; i++) g[t.substr(i, 3)] = 1; return g; }
  function triSim(a, b) { var A = tri(a), B = tri(b), n = 0, na = 0, nb = Object.keys(B).length; Object.keys(A).forEach(function (k) { na++; if (B[k]) n++; }); return na + nb ? 2 * n / (na + nb) : 0; }
  var cache = null;
  function prep(cands) {
    return cands.map(function (c) {
      var ph = [c.label].concat(c.aliases || []).map(function (p) { var T = tokens(p); return { T: T, s: T.join(' ') }; });
      return { key: c.key, label: c.label, ph: ph };
    });
  }
  /* label: text from the file; value: the number next to it; cands: [{key, label, aliases}] */
  function suggest(label, value, cands) {
    if (!cache || cache.src !== cands) cache = { src: cands, P: prep(cands) };
    var LT = tokens(label), LS = LT.join(' '), raw = norm(label);
    if (!LT.length) return [];
    var res = cache.P.map(function (c) {
      var best = 0;
      c.ph.forEach(function (p) { var s = 0.65 * tokSim(LT, p.T) + 0.35 * triSim(LS, p.s); if (s > best) best = s; });
      var base = c.key.replace(/^(pct|kgt)\./, 'use.');
      var r = RANGE[c.key] || (/^use\./.test(c.key) ? [0, 25000] : /^pct\./.test(c.key) ? [0, 100] : /^kgt\./.test(c.key) ? [0, 1200] : null);
      if (r && isFinite(value)) { var v = Math.abs(value); if (v >= r[0] && v <= r[1]) best += 0.06; else best -= 0.3; }
      UNIT.forEach(function (u) { if (u[0].test(raw)) best += u[1].test(c.key) ? 0.08 : -0.04; });
      if (/%/.test(raw) && /^pct\./.test(c.key)) best += 0.05;
      if (/%/.test(raw) && /^use\./.test(c.key) && !/%/.test(c.label)) best -= 0.05;
      return { key: c.key, label: c.label, conf: Math.max(0, Math.min(0.99, best)), base: base };
    }).sort(function (a, b) { return b.conf - a.conf; });
    // one guess per input (MT/day, % and kg/t of the same material count once)
    var seen = {}, out = [];
    res.forEach(function (r) { if (out.length < 3 && r.conf >= 0.35 && !seen[r.base]) { seen[r.base] = 1; out.push(r); } });
    return out;
  }
  window.SinterMatch = { suggest: suggest, tokens: tokens, ABBR: ABBR };
})();
