
(function () {
  'use strict';
  var K = 0.990 * 4.18 / 3.6; // kW per (m3/h * K): rho 990 kg/m3, cp 4.18 kJ/kgK at ~40 C  -> 1.1495
  var TYPES = {
    ci: { n: 'Cast iron stave', v: 1.5, lo: 5, hi: 60, max: 80, vel: true },
    cu: { n: 'Copper stave', v: 2.0, lo: 20, hi: 120, max: 300, vel: true },
    pl: { n: 'Copper cooling plates', v: 2.5, lo: 20, hi: 100, max: 250, vel: true },
    uh: { n: 'Under-hearth pipes', v: 1.0, lo: 0.5, hi: 5, max: 10, vel: true },
    sp: { n: 'Shell spray / jacket', v: 0, lo: 3, hi: 25, max: 35, vel: false },
    na: { n: 'Not water-cooled', v: 0, lo: 0, hi: 0, max: 0, vel: false }
  };
  // q = typical average flux at mid campaign, reference productivity (kW/m2); camp = multipliers new / mid / late; run = which run factor
  var ZDEF = [
    { k: 'bot', n: 'Hearth bottom', t: 'uh', q: 2.5, st: 24, pp: 1, id: 40, g: 'B', camp: [0.7, 1, 1.6], run: 'hm' },
    { k: 'hw', n: 'Hearth wall & taphole', t: 'ci', q: 8, st: 24, pp: 4, id: 48, g: 'H', camp: [0.5, 1, 2.0], run: 'hm' },
    { k: 'tb', n: 'Tuyere belt', t: 'ci', q: 30, st: 16, pp: 4, id: 48, g: 'S', camp: [0.9, 1, 1.2], run: 'gas' },
    { k: 'bo', n: 'Bosh', t: 'cu', q: 45, st: 24, pp: 4, id: 45, g: 'S', camp: [0.5, 1, 1.3], run: 'gas' },
    { k: 'be', n: 'Belly', t: 'cu', q: 42, st: 24, pp: 4, id: 45, g: 'S', camp: [0.5, 1, 1.3], run: 'gas' },
    { k: 'ls', n: 'Lower stack', t: 'ci', q: 32, st: 24, pp: 4, id: 48, g: 'S', camp: [0.5, 1, 1.4], run: 'gas' },
    { k: 'ms', n: 'Middle stack', t: 'ci', q: 20, st: 24, pp: 4, id: 48, g: 'S', camp: [0.4, 1, 1.4], run: 'gas' },
    { k: 'us', n: 'Upper stack', t: 'ci', q: 10, st: 24, pp: 4, id: 48, g: 'S', camp: [0.5, 1, 1.3], run: 'gas' },
    { k: 'th', n: 'Throat armour', t: 'ci', q: 4, st: 24, pp: 4, id: 48, g: 'S', camp: [0.8, 1, 1.2], run: 'gas' }
  ];
  var GDEF = { B: { n: 'Hearth bottom loop', dT: 3 }, H: { n: 'Hearth wall loop', dT: 4 }, S: { n: 'Stave loop (tuyere belt to throat)', dT: 8 }, U: { n: 'Extra loop', dT: 6 } };
  var DEF = {
    name: 'BF 608', Vw: 608, dH: 6.4, dB: 7.4, dT: 5.0, hS: 1.2, h1: 1.6, t2b: 0.5, h2: 2.8, h3: 1.6, h4: 11.2, h5: 1.2, hA: 1.5,
    nT: 16, bore: 120, nTH: 1,
    prod: 1520, BV: 1650, BT: 1100, BP: 2.3, O2: 3, PCI: 120, wall: 'bal', age: 3, life: 10,
    peakS: 1.5, peakT: 1.4,
    tQ: 170, tdT: 6, tA: 220, tV: 12, tP: 11,
    cQ: 45, cdT: 5, cMin: 8,
    sys: 'closed', Tin: 40, COC: 4, drift: 0.02, closLoss: 0.05, dT2: 8, margin: 10, emMin: 30, emT: 70, emS: 50,
    zones: {}, groups: {}
  };
  ZDEF.forEach(function (z) { DEF.zones[z.k] = { t: z.t, q: z.q, st: z.st, pp: z.pp, id: z.id, v: TYPES[z.t].v, g: z.g, on: true }; });
  Object.keys(GDEF).forEach(function (g) { DEF.groups[g] = { dT: GDEF[g].dT }; });

  function ls(k, v) { try { if (v === undefined) return JSON.parse(localStorage.getItem(k)); localStorage.setItem(k, JSON.stringify(v)); } catch (e) { return null; } }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  var S = clone(DEF), saved = ls('cw.state');
  if (saved) { Object.keys(saved).forEach(function (k) { if (k === 'zones' || k === 'groups') { Object.keys(saved[k] || {}).forEach(function (z) { if (S[k][z]) Object.assign(S[k][z], saved[k][z]); }); } else if (k in S) S[k] = saved[k]; }); }
  if (window.CW_LINK) window.CW_LINK(S, DEF, saved);
  var RUN = ls('cw.run') || { g: {}, z: {}, t: [], prod: '' };
  var st = { view: (location.hash || '#fur').slice(1), hz: null };

  function f(x, d) { if (x === null || x === undefined || !isFinite(x)) return '–'; d = d === undefined ? 0 : d; return Number(x).toLocaleString('en-IN', { minimumFractionDigits: d, maximumFractionDigits: d }); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function lerp3(a, c) { c = Math.max(0, Math.min(1, c)); return c < 0.5 ? a[0] + (a[1] - a[0]) * c / 0.5 : a[1] + (a[2] - a[1]) * (c - 0.5) / 0.5; }
  function sev(n, t) { return '<span class="sev s' + n + '">' + t + '</span>'; }

  // ---------- model ----------
  function geom(s) {
    var P = Math.PI, hw = Math.max(0.1, s.hS + s.h1 - 0.5), y = 0, z = {};
    function cyl(d, h) { return { A: P * d * h, V: P / 4 * d * d * h }; }
    function fr(d1, d2, h) { return { A: P * (d1 + d2) / 2 * Math.sqrt(h * h + Math.pow((d2 - d1) / 2, 2)), V: P * h / 12 * (d1 * d1 + d1 * d2 + d2 * d2) }; }
    function put(k, o, h, d1, d2) { o.y0 = y; o.y1 = y + h; o.d1 = d1; o.d2 = d2; z[k] = o; y += h; }
    z.bot = { A: P / 4 * s.dH * s.dH, V: 0, y0: -0.25, y1: 0, d1: s.dH, d2: s.dH };
    put('hw', cyl(s.dH, hw), hw, s.dH, s.dH);
    put('tb', cyl(s.dH, 0.5 + s.t2b), 0.5 + s.t2b, s.dH, s.dH);
    put('bo', fr(s.dH, s.dB, s.h2), s.h2, s.dH, s.dB);
    put('be', cyl(s.dB, s.h3), s.h3, s.dB, s.dB);
    var h = s.h4 / 3, dd = (s.dB - s.dT) / 3;
    put('ls', fr(s.dB, s.dB - dd, h), h, s.dB, s.dB - dd);
    put('ms', fr(s.dB - dd, s.dB - 2 * dd, h), h, s.dB - dd, s.dB - 2 * dd);
    put('us', fr(s.dB - 2 * dd, s.dT, h), h, s.dB - 2 * dd, s.dT);
    put('th', cyl(s.dT, s.hA), s.hA, s.dT, s.dT);
    // working volume: taphole to stockline
    var Vw = P / 4 * s.dH * s.dH * (s.h1 + s.t2b) + z.bo.V + z.be.V + z.ls.V + z.ms.V + z.us.V + P / 4 * s.dT * s.dT * s.h5;
    return { z: z, Vw: Vw, H: y, tuyY: s.hS + s.h1, thY: s.hS };
  }

  function calc(s) {
    var G = geom(s), R = { G: G, zones: [], groups: {}, warn: [] };
    var pRef = 2.5 * s.Vw, pr = s.prod > 0 ? s.prod / pRef : 1;
    var wall = { cen: 0.85, bal: 1, per: 1.3 }[s.wall] || 1;
    var c = s.life > 0 ? s.age / s.life : 0.5;
    R.fGas = Math.pow(pr, 0.5) * wall; R.fHM = Math.pow(pr, 0.3); R.camp = c; R.prodF = s.prod / s.Vw;
    ZDEF.forEach(function (d) {
      var u = s.zones[d.k], T = TYPES[u.t], g = G.z[d.k], on = u.on && u.t !== 'na';
      var mC = lerp3(d.camp, c), mR = d.run === 'gas' ? R.fGas : R.fHM;
      var q = on ? u.q * mC * mR : 0, Q = q * g.A;
      var paths = u.st * u.pp, Ap = Math.PI / 4 * Math.pow(u.id / 1000, 2);
      var Fv = on && T.vel ? paths * Ap * u.v * 3600 : 0;
      R.zones.push({ k: d.k, n: d.n, d: d, u: u, T: T, A: g.A, q: q, Q: Q, Qp: Q * s.peakS, paths: paths, Ap: Ap, Fv: Fv, on: on, mC: mC, mR: mR, g: u.g, geo: g });
    });
    Object.keys(GDEF).forEach(function (gk) {
      var zs = R.zones.filter(function (z) { return z.on && z.g === gk; }); if (!zs.length) return;
      var Q = 0, Fv = 0, gv = null; zs.forEach(function (z) { Q += z.Q; if (z.Fv > Fv) { Fv = z.Fv; gv = z; } });
      var dT = s.groups[gk].dT, Fh = Q * s.peakS / (K * dT), F = Math.max(Fh, Fv);
      var gr = { k: gk, n: GDEF[gk].n, zs: zs, Q: Q, Qp: Q * s.peakS, dTd: dT, Fh: Fh, Fv: Fv, F: F, gov: Fv > Fh ? 'velocity (' + gv.n + ')' : 'heat / ΔT',
        dTn: Q / (K * F), dTp: Q * s.peakS / (K * F), A: zs.reduce(function (a, z) { return a + z.A; }, 0) };
      gr.Tout = s.Tin + gr.dTp;
      var cum = 0; zs.forEach(function (z) { z.F = F; z.dTn = z.Q / (K * F); z.dTp = z.Qp / (K * F); z.vel = z.T.vel ? F / 3600 / (z.paths * z.Ap) : null; cum += z.dTp; z.Tcum = s.Tin + cum;
        z.qAl = Math.min(z.T.max || z.q * 2, Math.max(z.q * s.peakS, z.q * 1.3)); z.qAl2 = z.T.max ? Math.max(z.T.max, z.qAl * 1.2) : z.qAl * 1.5; z.dTal = z.qAl * z.A / (K * F); });
      R.groups[gk] = gr;
    });
    // tuyeres
    var fT = (1 + 0.0012 * (s.BT - 1100)) * (1 + 0.0015 * (s.PCI - 100)) * (1 + 0.02 * (s.O2 - 2));
    var tQ = s.tQ * fT, tFh = tQ * s.peakT / (K * s.tdT), tFv = s.tA * 1e-6 * s.tV * 3600, tF = Math.max(tFh, tFv);
    R.tuy = { f: fT, Q: tQ, Fh: tFh, Fv: tFv, F: tF, gov: tFv > tFh ? 'nose velocity' : 'heat / ΔT', dTn: tQ / (K * tF), dTp: tQ * s.peakT / (K * tF), vel: tF / 3600 / (s.tA * 1e-6), n: s.nT };
    R.tuy.leak = Math.max(0.5, 0.03 * tF);
    var cQ = s.cQ * (1 + 0.0006 * (s.BT - 1100)), cFh = cQ * s.peakT / (K * s.cdT), cF = Math.max(cFh, s.cMin);
    R.cool = { Q: cQ, Fh: cFh, F: cF, gov: s.cMin > cFh ? 'minimum flow' : 'heat / ΔT', dTn: cQ / (K * cF), dTp: cQ * s.peakT / (K * cF) };
    R.cool.leak = Math.max(0.3, 0.03 * cF);
    // blast
    var Va = s.BV / 60 * (s.BT + 273) / 273 * 1.013 / (s.BP + 1.013);
    R.bvel = Va / s.nT / (Math.PI / 4 * Math.pow(s.bore / 1000, 2));
    // totals
    var Fs = 0, Qs = 0, Qsp = 0; Object.keys(R.groups).forEach(function (k) { Fs += R.groups[k].F; Qs += R.groups[k].Q; Qsp += R.groups[k].Qp; });
    R.Fst = Fs; R.Qst = Qs; R.FT = tF * s.nT; R.QT = tQ * s.nT; R.FC = cF * s.nT; R.QC = cQ * s.nT;
    R.F = Fs + R.FT + R.FC; R.Q = Qs + R.QT + R.QC; R.Qp = Qsp + (R.QT + R.QC) * s.peakT;
    R.pump = R.F * (1 + s.margin / 100);
    R.spec = s.prod > 0 ? R.Q * 86.4 / s.prod : null; R.kwh = s.prod > 0 ? R.Q * 24 / s.prod : null;
    R.Tout = s.Tin + R.Qp / (K * R.F);
    // make-up
    function tower(Q, F) { var E = Q * 3.6 / 2400, D = F * s.drift / 100, B = Math.max(0, E / Math.max(0.1, s.COC - 1) - D); return { E: E, D: D, B: B, M: E + B + D, F: F }; }
    if (s.sys === 'open') { R.tw = tower(R.Q, R.F); R.prim = null; }
    else { var F2 = R.Qp / (K * s.dT2); R.tw = tower(R.Q, F2); R.prim = R.F * s.closLoss / 100; }
    R.em = { F: (R.FT + R.FC) * s.emT / 100 + (Fs) * s.emS / 100 }; R.em.V = R.em.F * s.emMin / 60;
    // checks
    var W = R.warn;
    if (Math.abs(G.Vw - s.Vw) / s.Vw > 0.06) W.push([1, 'Working volume from the profile is ' + f(G.Vw) + ' m³ but you entered ' + f(s.Vw) + ' m³. Check the heights and diameters (areas come from the profile).']);
    if (R.prodF < 1.6 || R.prodF > 3.4) W.push([1, 'Productivity ' + f(R.prodF, 2) + ' t/m³·d is outside the usual 1.6–3.4 range. The run factor scales heat loads by (P/2.5·Vw)^0.5.']);
    Object.keys(R.groups).forEach(function (k) { var g = R.groups[k];
      var lim = s.sys === 'open' ? 50 : 60;
      if (g.Tout > lim) W.push([2, g.n + ': outlet at peak load ' + f(g.Tout, 1) + ' °C is above ' + lim + ' °C (' + (s.sys === 'open' ? 'scaling risk with open industrial water' : 'closed soft water limit') + '). Raise the flow or split the loop.']);
      g.zs.forEach(function (z) { if (z.vel !== null && z.vel > 3.5) W.push([1, z.n + ': water velocity ' + f(z.vel, 1) + ' m/s is high (pressure drop, erosion). Put fewer rows in series or more parallel paths.']); });
      if (g.dTn < 1 && k !== 'S') W.push([1, g.n + ': normal ΔT is only ' + f(g.dTn, 2) + ' °C. Use ±0.05 °C class RTDs so a heat rise is visible.']);
    });
    if (R.tuy.vel < 10) W.push([2, 'Tuyere nose water velocity ' + f(R.tuy.vel, 1) + ' m/s is low. Typical high-velocity tuyeres run 12–20 m/s at the nose to avoid film boiling.']);
    if (s.tP < s.BP + 3) W.push([3, 'Tuyere supply pressure ' + f(s.tP, 1) + ' bar g is less than 3 bar above blast pressure (' + f(s.BP, 1) + ' bar g). A burnt tuyere would take gas into the water and leaks would be hard to see.']);
    if (R.bvel < 150 || R.bvel > 280) W.push([1, 'Blast velocity at the tuyere nose ' + f(R.bvel) + ' m/s is outside the usual 150–280 m/s. Check bore, blast volume and pressure.']);
    if (R.tuy.dTn > 10) W.push([2, 'Tuyere normal ΔT ' + f(R.tuy.dTn, 1) + ' °C is high. Increase tuyere flow.']);
    return R;
  }

  // ---------- views ----------
  function num(k, label, unit, step, note, obj) { obj = obj || S; return '<label>' + label + (unit ? ' (' + unit + ')' : '') + '<input class="in" type="number" inputmode="decimal" step="' + (step || 'any') + '" data-k="' + k + '" value="' + obj[k] + '">' + (note ? '<small>' + note + '</small>' : '') + '</label>'; }
  function sel(k, label, opts) { return '<label>' + label + '<select class="in" data-k="' + k + '">' + opts.map(function (o) { return '<option value="' + o[0] + '"' + (S[k] == o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') + '</select></label>'; }

  function vFur(R) {
    var h = '<h2 class="sec"><i>1</i>Furnace design</h2><div class="panel"><h3>Size and profile</h3><div class="fg">' +
      '<label>Furnace<input class="in" data-k="name" value="' + esc(S.name) + '"></label>' +
      num('Vw', 'Working volume', 'm³', 1, 'from profile: ' + f(R.G.Vw) + ' m³') + num('dH', 'Hearth dia', 'm', 0.1) + num('dB', 'Belly dia', 'm', 0.1) + num('dT', 'Throat dia', 'm', 0.1) +
      num('hS', 'Sump depth', 'm', 0.1, 'hearth bottom to taphole') + num('h1', 'Taphole to tuyere axis', 'm', 0.1) + num('t2b', 'Tuyere axis to bosh', 'm', 0.1) +
      num('h2', 'Bosh height', 'm', 0.1) + num('h3', 'Belly height', 'm', 0.1) + num('h4', 'Stack height', 'm', 0.1) + num('h5', 'Stockline depth', 'm', 0.1, 'throat part in Vw') + num('hA', 'Throat armour height', 'm', 0.1) +
      '</div></div><div class="panel"><h3>Tuyeres</h3><div class="fg">' + num('nT', 'Number of tuyeres', '', 1) + num('bore', 'Tuyere bore', 'mm', 1) + num('nTH', 'Tapholes', '', 1) +
      num('tA', 'Nose water passage', 'mm²', 1, 'from the tuyere drawing') + num('tV', 'Min nose velocity', 'm/s', 0.5, 'typical 12–20') + num('tdT', 'Tuyere design ΔT', '°C', 0.5, 'typical 5–8') + num('tQ', 'Heat per tuyere at reference', 'kW', 5, 'ref 1100 °C, PCI 100, O₂ 2 %') + num('tP', 'Tuyere water supply', 'bar g', 0.5) +
      num('cQ', 'Heat per tuyere cooler', 'kW', 5, 'typical 30–70') + num('cdT', 'Cooler design ΔT', '°C', 0.5) + num('cMin', 'Min flow per cooler', 'm³/h', 0.5) +
      '</div></div>';
    h += '<h2 class="sec"><i>2</i>Today\'s run</h2><div class="panel"><div class="fg">' + num('prod', 'Hot metal', 't/d', 10, 'productivity ' + f(R.prodF, 2) + ' t/m³·d') + num('BV', 'Blast volume', 'Nm³/min', 10) + num('BT', 'Hot blast temp', '°C', 10) + num('BP', 'Hot blast pressure', 'bar g', 0.1) +
      num('O2', 'O₂ enrichment', '%', 0.5) + num('PCI', 'PCI rate', 'kg/tHM', 5) +
      sel('wall', 'Gas flow at the wall', [['cen', 'Central (wall quiet)'], ['bal', 'Balanced'], ['per', 'Peripheral (wall working)']]) +
      num('age', 'Campaign age', 'years', 0.5) + num('life', 'Design campaign life', 'years', 1) + num('peakS', 'Stave peak / average', '×', 0.1, 'typical 1.3–2.0') + num('peakT', 'Tuyere peak / average', '×', 0.1) +
      '</div><p class="note">Run factors used now: gas side (bosh to throat) <b>×' + f(R.fGas, 2) + '</b>, hearth <b>×' + f(R.fHM, 2) + '</b>, tuyere <b>×' + f(R.tuy.f, 2) + '</b>, campaign at <b>' + f(R.camp * 100) + ' %</b> of life. Blast velocity at the nose <b>' + f(R.bvel) + ' m/s</b>.</p></div>';
    h += '<h2 class="sec"><i>3</i>Water system</h2><div class="panel"><div class="fg">' + sel('sys', 'System', [['closed', 'Closed soft water + plate HX'], ['open', 'Open industrial water + tower']]) +
      num('Tin', 'Supply temperature', '°C', 1) + num('margin', 'Pump margin', '%', 1) + num('COC', 'Tower cycles of concentration', '', 0.5) + num('drift', 'Tower drift', '% of flow', 0.01) +
      (S.sys === 'closed' ? num('closLoss', 'Closed loop loss', '% of flow', 0.01, 'typical 0.02–0.1') + num('dT2', 'Secondary (tower side) ΔT', '°C', 0.5) : '') +
      num('emMin', 'Emergency supply time', 'min', 5, 'typical 30–60') + num('emT', 'Emergency flow, tuyeres + coolers', '% of normal', 5) + num('emS', 'Emergency flow, staves', '% of normal', 5) +
      '</div></div><div class="btns"><a class="btn p" href="#lay" style="text-decoration:none">Next: cooling layout ›</a><button class="btn" data-a="reset">Reset to starting values</button></div>';
    return h;
  }

  function vLay(R) {
    var h = '<h2 class="sec"><i>2</i>Cooling layout per zone</h2><p class="note">Flux is the average heat flux at mid campaign and 2.5 t/m³·d. The page then scales it by the campaign and run factors. Zones with the same loop letter are in series: they share one flow (water goes up through each row in turn).</p>' +
      '<div class="tw lay"><table><thead><tr><th>Zone</th><th>Element</th><th class="r">Area m²</th><th class="r">Flux kW/m²<br>(mid campaign)</th><th class="r">Staves<br>around</th><th class="r">Pipes /<br>stave</th><th class="r">Pipe ID<br>mm</th><th class="r">Min v<br>m/s</th><th>Loop</th><th class="r">Flux now<br>kW/m²</th><th>Typical flux</th></tr></thead><tbody>';
    R.zones.forEach(function (z) {
      var u = z.u, k = z.k, T = z.T;
      h += '<tr><td><b>' + z.n + '</b></td><td><select class="in" data-z="' + k + '" data-f="t">' + Object.keys(TYPES).map(function (t) { return '<option value="' + t + '"' + (u.t === t ? ' selected' : '') + '>' + TYPES[t].n + '</option>'; }).join('') + '</select></td>' +
        '<td class="r">' + f(z.A, 1) + '</td>' +
        ['q', 'st', 'pp', 'id', 'v'].map(function (fl) { return '<td class="r"><input class="in" type="number" step="any" data-z="' + k + '" data-f="' + fl + '" value="' + u[fl] + '"' + (u.t === 'na' || (!T.vel && fl !== 'q') ? ' disabled' : '') + '></td>'; }).join('') +
        '<td><select class="in" data-z="' + k + '" data-f="g">' + Object.keys(GDEF).map(function (g) { return '<option' + (u.g === g ? ' selected' : '') + '>' + g + '</option>'; }).join('') + '</select></td>' +
        '<td class="r">' + (z.on ? f(z.q, 1) : '–') + '</td><td class="typ">' + (T.hi ? T.lo + '–' + T.hi : '–') + '</td></tr>';
    });
    h += '</tbody></table></div><div class="panel"><h3>Loops (design ΔT)</h3><div class="fg">' + Object.keys(GDEF).map(function (g) {
      return '<label>' + g + ' · ' + GDEF[g].n + ' (°C)<input class="in" type="number" step="0.5" data-g="' + g + '" value="' + S.groups[g].dT + '"><small>' + (R.groups[g] ? f(R.groups[g].zs.length) + ' zone(s)' : 'not used') + '</small></label>';
    }).join('') + '</div><p class="note">Typical design ΔT: hearth loops 2–5 °C (small, so a rise is easy to see), combined stave loop 6–10 °C, open-water single staves 4–8 °C.</p></div>' +
      '<div class="btns"><a class="btn p" href="#res" style="text-decoration:none">See water requirement ›</a></div>';
    return h;
  }

  function ramp(q, mx) { var i = q <= 0 ? 0 : Math.min(5, 1 + Math.floor(q / mx * 5 * 0.9999)); return i ? 'var(--h' + i + ')' : 'var(--surface-2)'; }
  function profile(R) {
    var G = R.G, H = G.H + 0.6, W = 300, top = 14, sc = (520 - top - 24) / H, maxD = Math.max(S.dB, S.dH) + 0.6, sx = 150 / maxD, cx = 130;
    var mx = 0; R.zones.forEach(function (z) { if (z.q > mx) mx = z.q; });
    function Y(y) { return top + (G.H - y) * sc; }
    var o = '<svg viewBox="0 0 ' + (W + 110) + ' 540" role="img" aria-label="Furnace profile coloured by heat flux"><title>Furnace profile coloured by heat flux</title>';
    R.zones.forEach(function (z) { var g = z.geo, x1 = g.d1 / 2 * sx, x2 = g.d2 / 2 * sx;
      var pts = [[cx - x1, Y(g.y0)], [cx - x2, Y(g.y1)], [cx + x2, Y(g.y1)], [cx + x1, Y(g.y0)]].map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ');
      o += '<polygon class="z' + (st.hz === z.k ? ' on' : '') + '" data-tz="' + z.k + '" points="' + pts + '" fill="' + ramp(z.q, mx) + '"/>';
    });
    // tuyeres and taphole
    var ty = Y(G.tuyY), xt = S.dH / 2 * sx;
    o += '<rect x="' + (cx - xt - 14) + '" y="' + (ty - 3) + '" width="14" height="6" rx="2" fill="var(--water)"/><rect x="' + (cx + xt) + '" y="' + (ty - 3) + '" width="14" height="6" rx="2" fill="var(--water)"/>';
    o += '<text x="' + (cx - xt - 16) + '" y="' + (ty - 7) + '" text-anchor="end">tuyere</text>';
    var thy = Y(G.thY); o += '<rect x="' + (cx - xt - 10) + '" y="' + (thy - 2) + '" width="10" height="4" fill="var(--ink-2)"/><text x="' + (cx - xt - 12) + '" y="' + (thy + 14) + '" text-anchor="end">taphole</text>';
    // labels (right), spaced to avoid overlap
    var lab = R.zones.map(function (z) { return { z: z, y: Y((z.geo.y0 + z.geo.y1) / 2) }; }).sort(function (a, b) { return a.y - b.y; });
    for (var i = 1; i < lab.length; i++) if (lab[i].y - lab[i - 1].y < 27) lab[i].y = lab[i - 1].y + 27;
    var over = lab[lab.length - 1].y - 528; if (over > 0) for (i = lab.length - 1; i >= 0; i--) { lab[i].y -= over; if (i && lab[i].y - lab[i - 1].y >= 27) break; over = 27 - (lab[i].y - (i ? lab[i - 1].y : -99)); if (over <= 0) break; }
    var lx = cx + maxD / 2 * sx + 22;
    lab.forEach(function (l) { var z = l.z, ym = Y((z.geo.y0 + z.geo.y1) / 2), xr = cx + Math.max(z.geo.d1, z.geo.d2) / 2 * sx;
      o += '<path d="M' + (xr + 2) + ',' + ym.toFixed(1) + ' L' + (lx - 4) + ',' + l.y.toFixed(1) + '" stroke="var(--line)" fill="none"/>';
      o += '<text x="' + lx + '" y="' + (l.y - 2).toFixed(1) + '">' + z.n + '</text><text class="v" x="' + lx + '" y="' + (l.y + 11).toFixed(1) + '">' + (z.on ? f(z.Q) + ' kW · ' + f(z.q, 1) + ' kW/m²' : 'not cooled') + '</text>';
    });
    o += '</svg>';
    var lg = '<div class="legend">Heat flux now:'; for (i = 1; i <= 5; i++) lg += ' <i style="background:var(--h' + i + ')"></i>' + f(mx * (i - 1) / 5) + '–' + f(mx * i / 5); lg += ' kW/m²</div>';
    return '<div class="panel prof">' + o + lg + '</div>';
  }

  function vRes(R) {
    var h = '<h2 class="sec"><i>3</i>Water requirement · ' + esc(S.name) + '</h2>';
    h += '<div class="kpis">' +
      kpi('Total circulation', f(R.F) + ' m³/h', 'pumps with ' + S.margin + ' % margin: ' + f(R.pump) + ' m³/h') +
      kpi('Heat to water', f(R.Q / 1000, 2) + ' MW', 'peak ' + f(R.Qp / 1000, 2) + ' MW', 'var(--h4)') +
      kpi('Specific heat loss', f(R.spec) + ' MJ/tHM', f(R.kwh, 0) + ' kWh/tHM', 'var(--h4)') +
      kpi('Make-up water', f(R.tw.M + (R.prim || 0), 1) + ' m³/h', S.sys === 'closed' ? 'tower ' + f(R.tw.M, 1) + ' + soft water ' + f(R.prim, 2) : 'evaporation ' + f(R.tw.E, 1) + ' + blowdown ' + f(R.tw.B, 1)) +
      kpi('Emergency tank', f(R.em.V) + ' m³', f(R.em.F) + ' m³/h for ' + S.emMin + ' min', 'var(--s3)') +
      kpi('Specific water', f(R.F * 24 / Math.max(1, S.prod), 1) + ' m³/tHM', 'circulated, not consumed') + '</div>';
    if (R.warn.length) h += '<ul class="msgs">' + R.warn.sort(function (a, b) { return b[0] - a[0]; }).map(function (w) { return '<li>' + sev(w[0], ['ok', 'check', 'warn', 'alarm'][w[0]]) + '<span>' + w[1] + '</span></li>'; }).join('') + '</ul>';
    h += '<div class="two">' + profile(R) + '<div>';
    // circuit table
    h += '<div class="tw run"><table><thead><tr><th>Circuit</th><th class="r">Heat avg<br>kW</th><th class="r">Flow from<br>heat m³/h</th><th class="r">Flow from<br>velocity m³/h</th><th class="r">Design flow<br>m³/h</th><th>Set by</th><th class="r">ΔT normal<br>/ peak °C</th><th class="r">Outlet<br>peak °C</th></tr></thead><tbody>';
    Object.keys(R.groups).forEach(function (k) { var g = R.groups[k];
      h += '<tr><td><b>' + k + '</b> · ' + g.n + '</td><td class="r">' + f(g.Q) + '</td><td class="r">' + f(g.Fh) + '</td><td class="r">' + f(g.Fv) + '</td><td class="r"><b>' + f(g.F) + '</b></td><td class="gov">' + g.gov + '</td><td class="r">' + f(g.dTn, 1) + ' / ' + f(g.dTp, 1) + '</td><td class="r">' + f(g.Tout, 1) + '</td></tr>'; });
    h += '<tr><td><b>T</b> · Tuyeres (' + S.nT + ' × ' + f(R.tuy.F, 1) + ')</td><td class="r">' + f(R.QT) + '</td><td class="r">' + f(R.tuy.Fh * S.nT) + '</td><td class="r">' + f(R.tuy.Fv * S.nT) + '</td><td class="r"><b>' + f(R.FT) + '</b></td><td class="gov">' + R.tuy.gov + '</td><td class="r">' + f(R.tuy.dTn, 1) + ' / ' + f(R.tuy.dTp, 1) + '</td><td class="r">' + f(S.Tin + R.tuy.dTp, 1) + '</td></tr>';
    h += '<tr><td><b>C</b> · Tuyere coolers (' + S.nT + ' × ' + f(R.cool.F, 1) + ')</td><td class="r">' + f(R.QC) + '</td><td class="r">' + f(R.cool.Fh * S.nT) + '</td><td class="r">' + f(S.cMin * S.nT) + '</td><td class="r"><b>' + f(R.FC) + '</b></td><td class="gov">' + R.cool.gov + '</td><td class="r">' + f(R.cool.dTn, 1) + ' / ' + f(R.cool.dTp, 1) + '</td><td class="r">' + f(S.Tin + R.cool.dTp, 1) + '</td></tr>';
    h += '<tr class="tot"><td>Total</td><td class="r">' + f(R.Q) + '</td><td></td><td></td><td class="r">' + f(R.F) + '</td><td></td><td></td><td class="r">' + f(R.Tout, 1) + '</td></tr></tbody></table></div>';
    // bars
    var mx = 0, items = R.zones.filter(function (z) { return z.on; }).map(function (z) { return [z.n, z.Q, z.n + ': ' + f(z.Q) + ' kW, ' + f(z.q, 1) + ' kW/m² over ' + f(z.A, 1) + ' m²']; });
    items.push(['Tuyeres', R.QT, S.nT + ' tuyeres × ' + f(R.tuy.Q) + ' kW']); items.push(['Tuyere coolers', R.QC, S.nT + ' coolers × ' + f(R.cool.Q) + ' kW']);
    items.forEach(function (i) { if (i[1] > mx) mx = i[1]; });
    h += '<div class="panel bars"><h3>Heat load by zone (kW, average)</h3>' + items.map(function (i) { return '<div class="row" data-tip="' + esc(i[2]) + '"><span>' + i[0] + '</span><div class="track"><div class="bar" style="width:' + (i[1] / mx * 100).toFixed(1) + '%"></div></div><b>' + f(i[1]) + '</b></div>'; }).join('') + '</div>';
    h += '</div></div>';
    // zone detail
    h += '<h2 class="sec">Zone detail</h2><div class="tw run"><table><thead><tr><th>Zone</th><th>Loop</th><th class="r">Area<br>m²</th><th class="r">Flux<br>kW/m²</th><th class="r">Heat<br>kW</th><th class="r">Paths</th><th class="r">Velocity<br>m/s</th><th class="r">Zone ΔT<br>°C</th><th class="r">Water out<br>of zone °C</th><th class="r">Flux alarm<br>H / HH</th><th class="r">Zone ΔT<br>alarm °C</th></tr></thead><tbody>';
    R.zones.forEach(function (z) { if (!z.on) { h += '<tr><td>' + z.n + '</td><td colspan="10" class="note">not water-cooled</td></tr>'; return; }
      var vs = z.vel === null ? '–' : f(z.vel, 2) + (z.vel < z.u.v - 0.01 ? ' ' + sev(2, 'low') : '');
      h += '<tr><td><b>' + z.n + '</b><br><span class="typ">' + z.T.n + '</span></td><td>' + z.g + '</td><td class="r">' + f(z.A, 1) + '</td><td class="r">' + f(z.q, 1) + '</td><td class="r">' + f(z.Q) + '</td><td class="r">' + (z.T.vel ? f(z.paths) + ' × Ø' + z.u.id : '–') + '</td><td class="r">' + vs + '</td><td class="r">' + f(z.dTn, 2) + '</td><td class="r">' + f(z.Tcum, 1) + '</td><td class="r">' + f(z.qAl, 0) + ' / ' + f(z.qAl2, 0) + '</td><td class="r">' + f(z.dTal, 2) + '</td></tr>'; });
    h += '</tbody></table></div>';
    // alarms
    h += '<h2 class="sec">Suggested alarm limits</h2><div class="tw run"><table><thead><tr><th>Circuit</th><th class="r">Design flow</th><th class="r">Flow low (85 %)</th><th class="r">Flow low-low (70 %)</th><th class="r">ΔT high</th><th class="r">Outlet temp high</th><th>Leak alarm</th></tr></thead><tbody>';
    var To = S.sys === 'open' ? 48 : 55;
    Object.keys(R.groups).forEach(function (k) { var g = R.groups[k]; h += '<tr><td>' + k + ' · ' + g.n + '</td><td class="r">' + f(g.F) + '</td><td class="r">' + f(g.F * 0.85) + '</td><td class="r">' + f(g.F * 0.7) + '</td><td class="r">' + f(Math.max(g.dTp, g.dTn * 1.3), 2) + ' °C</td><td class="r">' + To + ' °C</td><td>' + (S.sys === 'closed' ? 'expansion tank level falling, make-up rate up' : 'return flow < supply by 2 %') + '</td></tr>'; });
    h += '<tr><td>Each tuyere</td><td class="r">' + f(R.tuy.F, 1) + '</td><td class="r">' + f(R.tuy.F * 0.85, 1) + '</td><td class="r">' + f(R.tuy.F * 0.7, 1) + '</td><td class="r">' + f(R.tuy.dTn + 2, 1) + ' °C</td><td class="r">' + f(S.Tin + R.tuy.dTn + 4, 0) + ' °C</td><td>in − out &gt; ' + f(R.tuy.leak, 2) + ' m³/h</td></tr>';
    h += '<tr><td>Each tuyere cooler</td><td class="r">' + f(R.cool.F, 1) + '</td><td class="r">' + f(R.cool.F * 0.85, 1) + '</td><td class="r">' + f(R.cool.F * 0.7, 1) + '</td><td class="r">' + f(R.cool.dTn + 2, 1) + ' °C</td><td class="r">' + f(S.Tin + R.cool.dTn + 4, 0) + ' °C</td><td>in − out &gt; ' + f(R.cool.leak, 2) + ' m³/h</td></tr>';
    h += '</tbody></table></div><p class="note">Flux alarm H = design peak flux of the zone, HH = the element\'s safe limit. Hearth wall: also alarm a <b>rise of 30–50 %</b> over the last month\'s average at the same tap, it means lining is thinning. Low-low flow starts the standby / diesel pump and the emergency tank.</p>';
    // water system
    h += '<h2 class="sec">Water system</h2><div class="tw"><table><tbody>' +
      tr('Circulation (all circuits)', f(R.F) + ' m³/h') + tr('Pump capacity with margin', f(R.pump) + ' m³/h') +
      tr('High pressure (tuyeres)', f(R.FT) + ' m³/h at ≥ ' + f(Math.max(S.tP, S.BP + 3), 1) + ' bar g') + tr('Medium pressure (staves, coolers)', f(R.Fst + R.FC) + ' m³/h') +
      (S.sys === 'closed' ? tr('Soft water loss / make-up', f(R.prim, 2) + ' m³/h (' + S.closLoss + ' % of flow)') + tr('Secondary (tower side) flow through plate HX', f(R.tw.F) + ' m³/h at ΔT ' + S.dT2 + ' °C') : '') +
      tr('Tower evaporation', f(R.tw.E, 1) + ' m³/h') + tr('Drift', f(R.tw.D, 2) + ' m³/h') + tr('Blowdown (COC ' + S.COC + ')', f(R.tw.B, 1) + ' m³/h') + tr('Tower make-up', f(R.tw.M, 1) + ' m³/h · ' + f(R.tw.M * 24) + ' m³/d · ' + f(R.tw.M * 24 / Math.max(1, S.prod), 2) + ' m³/tHM') +
      tr('Emergency supply', f(R.em.F) + ' m³/h for ' + S.emMin + ' min = ' + f(R.em.V) + ' m³ (elevated tank or diesel pumps)') +
      '</tbody></table></div><div class="btns"><button class="btn p" data-a="share">Share report</button><button class="btn" data-a="csv">Export CSV</button><button class="btn" data-a="print">Print</button></div>';
    return h;
  }
  function kpi(t, v, s, c) { return '<div class="kpi"' + (c ? ' style="--kc:' + c + '"' : '') + '><small>' + t + '</small><b>' + v + '</b><span>' + s + '</span></div>'; }
  function tr(a, b) { return '<tr><td>' + a + '</td><td class="r">' + b + '</td></tr>'; }

  // ---------- check running ----------
  function vRun(R) {
    var h = '<h2 class="sec"><i>4</i>Check running</h2><p class="note">Type the plant readings. Heat = flow × 1.15 × ΔT (kW, with flow in m³/h). Empty boxes are skipped. Readings are saved on this device.</p>';
    h += '<div class="panel"><div class="fg"><label>Hot metal today (t/d)<input class="in" type="number" data-r="prod" value="' + (RUN.prod || '') + '" placeholder="' + S.prod + '"></label></div></div>';
    h += '<div class="tw run"><table><thead><tr><th>Loop</th><th class="r">Flow m³/h</th><th class="r">In °C</th><th class="r">Out °C</th><th class="r">Heat kW</th><th class="r">vs design</th><th class="r">Avg flux kW/m²</th><th>Status</th></tr></thead><tbody>';
    var tot = 0, cnt = 0;
    Object.keys(R.groups).forEach(function (k) { var g = R.groups[k], m = RUN.g[k] || {}, Q = null, s = '';
      if (m.F > 0 && m.ti !== '' && m.to !== '' && m.ti !== undefined && m.to !== undefined) { Q = m.F * K * (m.to - m.ti); tot += Q; cnt++;
        var r = Q / g.Q, flow = m.F / g.F;
        s = flow < 0.7 ? sev(3, 'flow low-low') : flow < 0.85 ? sev(2, 'flow low') : r > S.peakS ? sev(3, 'heat above peak') : r > 1.25 ? sev(2, 'heat high') : r < 0.5 ? sev(1, 'heat low (scab / check meter)') : sev(0, 'normal');
        if (m.to > (S.sys === 'open' ? 48 : 55)) s += ' ' + sev(2, 'outlet hot'); }
      h += '<tr><td><b>' + k + '</b> · ' + g.n + '<br><span class="typ">design ' + f(g.F) + ' m³/h, ' + f(g.Q) + ' kW</span></td>' + ['F', 'ti', 'to'].map(function (x) { return '<td class="r"><input class="in" type="number" step="any" data-rg="' + k + '" data-f="' + x + '" value="' + (m[x] === undefined ? '' : m[x]) + '"></td>'; }).join('') +
        '<td class="r">' + f(Q) + '</td><td class="r">' + (Q === null ? '–' : f(Q / g.Q * 100) + ' %') + '</td><td class="r">' + (Q === null ? '–' : f(Q / g.A, 1)) + '</td><td>' + s + '</td></tr>'; });
    h += '</tbody></table></div>';
    // zone row ΔT
    h += '<h2 class="sec">Stave rows (zone ΔT)</h2><p class="note">If each zone has its own inlet / outlet thermometers, enter the ΔT across that zone. The loop flow above (or design flow) is used.</p><div class="tw run"><table><thead><tr><th>Zone</th><th class="r">ΔT °C</th><th class="r">Heat kW</th><th class="r">Flux kW/m²</th><th class="r">Design / alarm H / HH</th><th>Status</th></tr></thead><tbody>';
    R.zones.forEach(function (z) { if (!z.on) return; var g = R.groups[z.g], m = RUN.g[z.g] || {}, F = m.F > 0 ? m.F : g.F, d = RUN.z[z.k], Q = null, q = null, s = '';
      if (d !== undefined && d !== '') { Q = F * K * d; q = Q / z.A; s = q >= z.qAl2 ? sev(3, 'above safe limit') : q >= z.qAl ? sev(2, 'alarm') : q > z.q * 1.25 ? sev(1, 'rising') : sev(0, 'normal'); }
      h += '<tr><td><b>' + z.n + '</b> <span class="typ">(' + z.g + ')</span></td><td class="r"><input class="in" type="number" step="any" data-rz="' + z.k + '" value="' + (d === undefined ? '' : d) + '"></td><td class="r">' + f(Q) + '</td><td class="r">' + f(q, 1) + '</td><td class="r">' + f(z.q, 0) + ' / ' + f(z.qAl, 0) + ' / ' + f(z.qAl2, 0) + '</td><td>' + s + '</td></tr>'; });
    h += '</tbody></table></div>';
    // tuyeres
    h += '<h2 class="sec">Tuyeres one by one</h2><p class="note">Flow in, flow out and ΔT for each tuyere. In − out above ' + f(R.tuy.leak, 2) + ' m³/h means a suspected leak: confirm with the gas test / pressure drop test per SOP.</p><div class="tw run"><table><thead><tr><th>No</th><th class="r">Flow in m³/h</th><th class="r">Flow out m³/h</th><th class="r">ΔT °C</th><th class="r">Heat kW</th><th class="r">In − out</th><th>Status</th></tr></thead><tbody>';
    var tq = 0, tn = 0;
    for (var i = 0; i < S.nT; i++) { var t = RUN.t[i] || {}, Q2 = null, s2 = '', dF = null;
      if (t.fi > 0 && t.dt !== undefined && t.dt !== '') { Q2 = t.fi * K * t.dt; tq += Q2; tn++; s2 = Q2 > R.tuy.Q * S.peakT ? sev(2, 'heat high') : sev(0, 'normal'); if (t.fi < R.tuy.F * 0.85) s2 += ' ' + sev(2, 'flow low'); }
      if (t.fi > 0 && t.fo > 0) { dF = t.fi - t.fo; if (dF > R.tuy.leak) s2 = sev(3, 'leak suspected') + ' ' + s2; }
      h += '<tr><td><b>' + (i + 1) + '</b></td>' + ['fi', 'fo', 'dt'].map(function (x) { return '<td class="r"><input class="in" type="number" step="any" data-rt="' + i + '" data-f="' + x + '" value="' + (t[x] === undefined ? '' : t[x]) + '"></td>'; }).join('') + '<td class="r">' + f(Q2) + '</td><td class="r">' + f(dF, 2) + '</td><td>' + s2 + '</td></tr>'; }
    h += '<tr class="tot"><td>Σ</td><td colspan="3" class="r">' + tn + ' tuyeres entered</td><td class="r">' + f(tq) + '</td><td colspan="2" class="r">design ' + f(R.tuy.Q * tn) + ' kW</td></tr></tbody></table></div>';
    var P = RUN.prod > 0 ? RUN.prod : S.prod, all = tot + tq;
    if (cnt || tn) h += '<div class="kpis">' + kpi('Measured heat to water', f(all / 1000, 2) + ' MW', 'loops ' + f(tot) + ' kW + tuyeres ' + f(tq) + ' kW', 'var(--h4)') + kpi('Specific heat loss', f(all * 86.4 / P) + ' MJ/tHM', 'design ' + f(R.spec) + ' MJ/tHM (all circuits)', 'var(--h4)') + '</div>';
    h += '<div class="btns"><button class="btn p" data-a="rshare">Share readings</button><button class="btn" data-a="rclear">Clear readings</button></div>';
    return h;
  }

  function vGv() {
    var rows = [
      ['Hearth bottom (under-hearth pipes)', '0.5–5 kW/m²', 'Low and steady. A rise means the bottom is eroding or the salamander is thin.'],
      ['Hearth wall, cast iron staves', '3–15 kW/m² normal, alarm about 15–25', 'Keep its own loop and precise ΔT (±0.05 °C). Taphole area runs highest.'],
      ['Tuyere belt staves', '15–40 kW/m²', 'Raceway radiation; between tuyere openings.'],
      ['Bosh / belly / lower stack, copper staves', '20–120 kW/m² average, peaks to 200–300', 'Highest loads. Peaks when scab falls or the wall works.'],
      ['Bosh / belly / lower stack, cast iron staves', '20–60 kW/m², safe limit about 80', 'Cast iron cracks above its limit; copper is used where loads are high.'],
      ['Middle / upper stack', '5–30 kW/m²', 'Rises late in campaign as the lining wears away.'],
      ['Tuyere (per tuyere)', '100–250 kW (small/medium BF), 250–450 (large)', 'Rises with blast temperature, PCI, O₂ and when liquids touch the nose.'],
      ['Tuyere water', '12–20 m/s at the nose; ΔT 5–8 °C; supply 8–16 bar g', 'High velocity stops film boiling at the nose. Supply must stay well above blast pressure.'],
      ['Tuyere cooler (intermediate)', '30–70 kW; ΔT 3–6 °C', ''],
      ['Stave pipe water velocity', '1.5–2.5 m/s (cast iron), 2–3 m/s (copper)', 'Usually sets the stave flow, not ΔT.'],
      ['Closed soft-water loop ΔT', '6–10 °C over all staves in series', 'Outlet kept below about 55–60 °C.'],
      ['Open industrial water', 'outlet below 45–50 °C', 'Above this, hardness scales the pipes.'],
      ['Total heat to cooling water', '300–600 MJ/tHM (large BF); small BF often 500–900', 'Includes staves, tuyeres and coolers.'],
      ['Specific circulation', 'small BF commonly 20–50 m³/tHM circulated; plant data vary widely', 'Compare like with like (same circuits counted).'],
      ['Tower evaporation', '≈ 1.5 m³/h per MW rejected', 'Latent heat about 2 400 kJ/kg.'],
      ['Emergency supply', '30–60 min of reduced flow to tuyeres and coolers', 'Elevated tank or diesel pumps with auto start on low-low pressure.']
    ];
    var h = '<h2 class="sec">Guide values (typical, not plant-verified)</h2><div class="tw gv"><table><thead><tr><th>Item</th><th>Typical range</th><th>Note</th></tr></thead><tbody>' + rows.map(function (r) { return '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td><td class="note">' + r[2] + '</td></tr>'; }).join('') + '</tbody></table></div>';
    h += '<h2 class="sec">How the page calculates</h2><div class="fx">' +
      'Areas      shell areas from the profile (cylinders and cone frusta), hearth bottom = π/4·d²\n' +
      'Flux now   q = q(mid campaign) × campaign factor × run factor\n' +
      '           campaign factor: interpolated new / mid / late per zone (e.g. hearth wall 0.5 / 1.0 / 2.0)\n' +
      '           run factor, bosh to throat = (P / 2.5·Vw)^0.5 × wall factor (central 0.85, balanced 1, peripheral 1.3)\n' +
      '           run factor, hearth = (P / 2.5·Vw)^0.3\n' +
      'Heat       Q = q × A (kW)\n' +
      'Flow, heat F = Q × peak / (ρ·cp·ΔT) = Q × peak / (1.15 × ΔT)   [m³/h, kW, °C]\n' +
      'Flow, vel  F = paths × π/4·ID² × v × 3600, paths = staves around × pipes per stave\n' +
      'Design     F = the larger of the two, per loop (zones in one loop are in series)\n' +
      'Tuyere     Q = Qref × (1 + 0.0012(BT−1100)) × (1 + 0.0015(PCI−100)) × (1 + 0.02(O₂−2))\n' +
      '           F = max(Q × peak / (1.15·ΔT), nose area × v_min × 3600)\n' +
      'Blast v    V = BV/60 × (BT+273)/273 × 1.013/(BP+1.013) / n / (π/4·bore²)\n' +
      'Specific   MJ/tHM = Q(kW) × 86.4 / P(t/d)\n' +
      'Tower      E = Q × 3.6 / 2400, blowdown = E/(COC−1) − drift, make-up = E + blowdown + drift</div>';
    h += '<p class="note"><b>Where the numbers come from.</b> Ranges are collected from published blast furnace practice (for example Geerdes, Toxopeus &amp; van der Vliet, <i>Modern Blast Furnace Ironmaking</i>, and stave / tuyere supplier literature) and general cooling-tower practice. They are starting values for a study, not a design basis. Use your stave and tuyere supplier\'s design heat loads, pipe sizes and velocities, and calibrate the flux values with a few months of your own ΔT data (enter the readings on Check running and change the flux on Cooling layout until design matches the furnace).</p>';
    return h;
  }

  // ---------- report ----------
  function report(R) {
    var L = [S.name + ' cooling water requirement (' + new Date().toLocaleDateString() + ')',
      'Vw ' + S.Vw + ' m3, hearth ' + S.dH + ' m, ' + S.nT + ' tuyeres. Run ' + S.prod + ' t/d, BT ' + S.BT + ' C, PCI ' + S.PCI + ' kg/t, O2 ' + S.O2 + ' %, campaign ' + S.age + '/' + S.life + ' y.', '',
      'Total circulation ' + f(R.F) + ' m3/h (pumps ' + f(R.pump) + ' m3/h). Heat ' + f(R.Q / 1000, 2) + ' MW avg, ' + f(R.Qp / 1000, 2) + ' MW peak, ' + f(R.spec) + ' MJ/tHM.', ''];
    Object.keys(R.groups).forEach(function (k) { var g = R.groups[k]; L.push(k + ' ' + g.n + ': ' + f(g.F) + ' m3/h (set by ' + g.gov + '), heat ' + f(g.Q) + ' kW, dT ' + f(g.dTn, 1) + '/' + f(g.dTp, 1) + ' C'); });
    L.push('Tuyeres: ' + S.nT + ' x ' + f(R.tuy.F, 1) + ' = ' + f(R.FT) + ' m3/h, ' + f(R.tuy.Q) + ' kW each, nose ' + f(R.tuy.vel, 1) + ' m/s, leak alarm in-out > ' + f(R.tuy.leak, 2) + ' m3/h');
    L.push('Tuyere coolers: ' + S.nT + ' x ' + f(R.cool.F, 1) + ' = ' + f(R.FC) + ' m3/h'); L.push('');
    R.zones.forEach(function (z) { if (z.on) L.push(z.n + ': ' + f(z.A, 1) + ' m2, ' + f(z.q, 1) + ' kW/m2, ' + f(z.Q) + ' kW, v ' + (z.vel === null ? '-' : f(z.vel, 2)) + ' m/s, flux alarm ' + f(z.qAl) + '/' + f(z.qAl2)); });
    L.push('', 'Make-up ' + f(R.tw.M + (R.prim || 0), 1) + ' m3/h, emergency tank ' + f(R.em.V) + ' m3.');
    R.warn.forEach(function (w) { L.push('! ' + w[1]); });
    L.push('', 'Typical values, not OEM design. Follow plant SOP.');
    return L.join('\n');
  }
  function share(title, text) { if (window.Android && window.Android.share) { window.Android.share(title, text); return; } if (navigator.share) { navigator.share({ title: title, text: text }).catch(function () { }); return; } download(title.replace(/\W+/g, '-') + '.txt', text, 'text/plain'); }
  function download(name, text, type) { var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([text], { type: type })); a.download = name; document.body.appendChild(a); a.click(); setTimeout(function () { a.remove(); }, 500); }
  function csv(R) {
    var L = ['Item,Loop,Area m2,Flux kW/m2,Heat kW,Flow m3/h,Velocity m/s,dT normal C,Flux alarm H,Flux alarm HH'];
    R.zones.forEach(function (z) { if (z.on) L.push([z.n, z.g, z.A.toFixed(1), z.q.toFixed(1), z.Q.toFixed(0), z.F.toFixed(0), z.vel === null ? '' : z.vel.toFixed(2), z.dTn.toFixed(2), z.qAl.toFixed(0), z.qAl2.toFixed(0)].join(',')); });
    L.push(['Tuyere (each)', 'T', '', '', R.tuy.Q.toFixed(0), R.tuy.F.toFixed(1), R.tuy.vel.toFixed(1), R.tuy.dTn.toFixed(2), '', ''].join(','));
    L.push(['Tuyere cooler (each)', 'C', '', '', R.cool.Q.toFixed(0), R.cool.F.toFixed(1), '', R.cool.dTn.toFixed(2), '', ''].join(','));
    L.push(['Total', '', '', '', R.Q.toFixed(0), R.F.toFixed(0), '', '', '', ''].join(','));
    if (window.Android && window.Android.share) window.Android.share('Cooling water CSV', L.join('\n')); else download('cooling-water-' + S.name.replace(/\W+/g, '') + '.csv', L.join('\n'), 'text/csv');
  }

  // ---------- render & events ----------
  var R0;
  function render(keepFocus) {
    var m = document.getElementById('main'), sign = m.querySelector('.pm-sign'), fe = document.activeElement, fk = null, sel0 = null;
    if (keepFocus && fe && m.contains(fe)) { fk = ['k', 'z', 'g', 'rg', 'rz', 'rt', 'r'].map(function (a) { return fe.getAttribute('data-' + a); }).join('|') + '|' + fe.getAttribute('data-f'); try { sel0 = fe.selectionStart; } catch (e) { } }
    R0 = calc(S);
    var v = st.view;
    m.innerHTML = v === 'lay' ? vLay(R0) : v === 'res' ? vRes(R0) : v === 'run' ? vRun(R0) : v === 'gv' ? vGv() : vFur(R0);
    if (sign) m.appendChild(sign);
    [].forEach.call(document.querySelectorAll('#tabs button'), function (b) { b.setAttribute('aria-selected', b.getAttribute('data-v') === (['fur', 'lay', 'res', 'run', 'gv'].indexOf(v) < 0 ? 'fur' : v) ? 'true' : 'false'); });
    document.getElementById('tot').textContent = f(R0.F) + ' m³/h · ' + f(R0.Q / 1000, 1) + ' MW';
    if (fk) { var els = m.querySelectorAll('input,select'); for (var i = 0; i < els.length; i++) { var e = els[i]; var k2 = ['k', 'z', 'g', 'rg', 'rz', 'rt', 'r'].map(function (a) { return e.getAttribute('data-' + a); }).join('|') + '|' + e.getAttribute('data-f'); if (k2 === fk) { e.focus(); try { if (sel0 !== null) e.setSelectionRange(sel0, sel0); } catch (x) { } break; } } }
  }
  function val(e) { if (e.type === 'number') { var x = parseFloat(e.value); return isFinite(x) ? x : null; } return e.value; }
  var tmr;
  function onInput(e) {
    var t = e.target, d = t.dataset, x = val(t), runEdit = false;
    if (d.k) { if (x === null && t.type === 'number') return; S[d.k] = x; }
    else if (d.z) { if (x === null && t.type === 'number') return; S.zones[d.z][d.f] = x; if (d.f === 't') { S.zones[d.z].v = TYPES[x].v; S.zones[d.z].on = x !== 'na'; } }
    else if (d.g) { if (x === null || x <= 0) return; S.groups[d.g].dT = x; }
    else if (d.rg) { RUN.g[d.rg] = RUN.g[d.rg] || {}; RUN.g[d.rg][d.f] = x === null ? '' : x; runEdit = true; }
    else if (d.rz) { RUN.z[d.rz] = x === null ? '' : x; runEdit = true; }
    else if (d.rt) { RUN.t[+d.rt] = RUN.t[+d.rt] || {}; RUN.t[+d.rt][d.f] = x === null ? '' : x; runEdit = true; }
    else if (d.r) { RUN[d.r] = x === null ? '' : x; runEdit = true; }
    else return;
    if (runEdit) ls('cw.run', RUN); else ls('cw.state', S);
    clearTimeout(tmr);
    var whole = e.type === 'change' && t.tagName === 'SELECT';
    tmr = setTimeout(function () { render(true); }, whole ? 0 : e.type === 'change' ? 0 : 450);
  }
  var main = document.getElementById('main');
  main.addEventListener('input', function (e) { if (e.target.tagName === 'INPUT') onInput(e); });
  main.addEventListener('change', onInput);
  main.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-a]'); if (b) { var a = b.getAttribute('data-a');
      if (a === 'reset' && confirm('Put every input back to the starting values? Values from the BF Model are taken again.')) { S = clone(DEF); if (window.CW_LINK) window.CW_LINK(S, DEF, null, true); ls('cw.state', S); render(); }
      if (a === 'share') share('Cooling water ' + S.name, report(R0));
      if (a === 'csv') csv(R0);
      if (a === 'print') { if (window.Android && window.Android.printPdf) { try { window.Android.printPdf('Water_cooling_requirement'); } catch (er) { window.print(); } } else window.print(); }
      if (a === 'rclear' && confirm('Clear all readings?')) { RUN = { g: {}, z: {}, t: [], prod: '' }; ls('cw.run', RUN); render(); }
      if (a === 'rshare') { var tx = [S.name + ' cooling readings ' + new Date().toLocaleString()]; [].forEach.call(main.querySelectorAll('tbody tr'), function (r) { var c = [].map.call(r.cells, function (td) { var i = td.querySelector('input'); return i ? i.value : td.textContent.trim(); }).filter(Boolean); if (c.length > 1) tx.push(c.join(' | ')); }); share('Cooling readings', tx.join('\n')); }
      return; }
    var z = e.target.closest && e.target.closest('[data-tz]'); if (z) { st.hz = st.hz === z.getAttribute('data-tz') ? null : z.getAttribute('data-tz'); showTip(e, z); }
  });
  var tip = document.getElementById('tip');
  function tipFor(el) { if (el.hasAttribute('data-tip')) return el.getAttribute('data-tip'); var k = el.getAttribute('data-tz'), z = R0.zones.filter(function (q) { return q.k === k; })[0]; if (!z) return '';
    return '<b>' + z.n + '</b><br>' + z.T.n + '<br>' + (z.on ? f(z.A, 1) + ' m² × ' + f(z.q, 1) + ' kW/m² = ' + f(z.Q) + ' kW<br>loop ' + z.g + ', ' + f(z.F) + ' m³/h' + (z.vel !== null ? ', ' + f(z.vel, 2) + ' m/s' : '') + '<br>zone ΔT ' + f(z.dTn, 2) + ' °C' : 'not water-cooled'); }
  function showTip(e, el) { var t = tipFor(el); if (!t) return; tip.innerHTML = t; tip.style.display = 'block'; var x = e.clientX + 14, y = e.clientY + 14; if (x + 270 > innerWidth) x = e.clientX - 274; if (y + 120 > innerHeight) y = e.clientY - 120; tip.style.left = Math.max(4, x) + 'px'; tip.style.top = Math.max(4, y) + 'px'; }
  main.addEventListener('mousemove', function (e) { var el = e.target.closest && e.target.closest('[data-tz],[data-tip]'); if (el) showTip(e, el); else tip.style.display = 'none'; });
  main.addEventListener('mouseleave', function () { tip.style.display = 'none'; });
  document.addEventListener('scroll', function () { tip.style.display = 'none'; }, { passive: true });
  document.getElementById('tabs').addEventListener('click', function (e) { var v = e.target.getAttribute && e.target.getAttribute('data-v'); if (v) location.hash = v; });
  window.addEventListener('hashchange', function () { st.view = (location.hash || '#fur').slice(1); render(); window.scrollTo(0, 0); });
  render();
})();
