/* BF Blow-in / Blow-down planner — engine and page logic.
   The engine follows the reference workbook BF_Blowdown_Plan.xlsx (Plan, Geometry, Profile, Timeline,
   Burden & Fuel, Tapping sheets). Empty input = default / size-scaled value. Saved on this device only. */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var KEY = 'bf.blowdown.v2', KEY_STRAT = 'bf.blowdown.strat', KEY_CHK = 'bf.blowdown.chk', KEY_SAFE = 'bf.blowdown.safe';
  var PI = Math.PI;
  function r1(x) { return Math.round(x * 10) / 10; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function fmt(n, d) { if (n == null || !isFinite(n)) return '—'; d = d == null ? 1 : d; return Number(n).toLocaleString('en-IN', { minimumFractionDigits: d, maximumFractionDigits: d }); }

  /* ---------------- Field definitions: [id, label, hint, default (null = auto), step, min, max] */
  var PLAN = [
    ['vu', 'Working (useful) volume', 'm³ — the one number that drives the plan', 750, 1, 100, 6000],
    ['prod', 'Productivity', 't/m³/day', 4.1, 0.01, 0.5, 5],
    ['o2', 'Oxygen enrichment', '% — pure O₂ at the blast main (0 = none)', 5.5, 0.1, 0, 15],
    ['o2d', 'Specific oxygen demand', 'Nm³ O₂/tHM — 280–320 typical', 300, 1, 200, 400],
    ['hm', 'Hot metal production', 't/day — empty = productivity × volume', null, 10, 50, 20000],
    ['blast', 'Cold blast (air only)', 'Nm³/min — empty = from production and O₂', null, 10, 50, 10000],
    ['coke', 'Top coke rate', 'kg/tHM — your normal top-charged coke', 450, 1, 250, 700],
    ['pci', 'PCI (injection) rate', 'kg/tHM — taken as 0 in the blowdown', 120, 1, 0, 250],
    ['ore', 'Ferrous rate', 't ore-side burden per tHM', 1.64, 0.01, 1.2, 2.2],
    ['coked', 'Coke bulk density', 't/m³ as charged', 0.5, 0.01, 0.35, 0.65],
    ['bd', 'Burden mean density', 't/m³ ore-side mix', 1.9, 0.01, 1.4, 2.6],
    ['bas', 'Normal slag basicity', 'CaO/SiO₂', 1.05, 0.01, 0.8, 1.5],
    ['topT', 'Normal top gas temperature', '°C', 130, 1, 60, 300],
    ['uT', 'Uncontrolled top T at tuyere level', '°C — empty = 950 + 25 × O₂ %', null, 1, 600, 1600],
    ['maxT', 'Max top temperature (equipment limit)', '°C — top gear, seals, chute', 400, 1, 200, 700],
    ['bag', 'Dry GCP bag limit', '°C', 260, 1, 150, 400],
    ['spray', 'Spray capacity', 'm³/h — empty = cold blast ÷ 60', null, 1, 1, 200],
    ['taps', 'Number of tapholes', 'empty = by volume', null, 1, 1, 6],
    ['n2l', 'Top N₂ lances', 'no.', 4, 1, 0, 20],
    ['n2f', 'N₂ per lance (max)', 'Nm³/h', 700, 10, 0, 5000],
    ['n2a', 'N₂ flow above-tuyere platform', 'Nm³/h (0 if not fitted)', 0, 10, 0, 20000],
    ['n2m', 'N₂ flow mid-shaft platform', 'Nm³/h (0 if not fitted)', 0, 10, 0, 20000],
    ['n2t', 'N₂ flow throat platform', 'Nm³/h (0 if not fitted)', 2500, 10, 0, 20000],
    ['bltf', 'BLT N₂ flow (max)', 'Nm³/h — bell-less top sealing/cooling', 400, 10, 0, 5000]
  ];
  var BLAST = [
    ['b1', 'Blast while stockline in shaft', 'fraction of normal (0.70–0.80)', 0.75, 0.01, 0.1, 1],
    ['b2', 'Blast while in belly', 'fraction (0.55–0.65)', 0.6, 0.01, 0.1, 1],
    ['b3', 'Blast while in bosh', 'fraction (0.45–0.55)', 0.5, 0.01, 0.1, 1],
    ['b4', 'Blast below bosh', 'fraction (0.30–0.40)', 0.35, 0.01, 0.1, 1]
  ];
  var GEO = [
    ['db', 'Belly diameter', 'm'], ['dt', 'Throat diameter', 'm'], ['dh', 'Hearth diameter', 'm'],
    ['ht', 'Throat height', 'm'], ['hsh', 'Shaft height', 'm'], ['hb', 'Belly height', 'm'], ['hbo', 'Bosh height', 'm'],
    ['htb', 'Tuyere to bosh start', 'm — tuyere centre below the bosh bottom'], ['htt', 'Taphole to tuyere', 'm'],
    ['hs', 'Sump depth', 'm — below the taphole'], ['ntu', 'Number of tuyeres', 'no.'], ['tip', 'Tuyere tip diameter', 'mm']
  ];
  var TAP = [
    ['drain', 'Tapping (drain) rate per taphole', 't/min — 3–6 typical', 3, 0.1, 0.5, 15],
    ['castm', 'Target cast duration (tap open)', 'min', 90, 1, 20, 240]
  ];
  var ALL = PLAN.concat(BLAST, TAP, GEO.map(function (g) { return [g[0], g[1], g[2], null, 0.1, 0, 100000]; }));

  function fieldHTML(f) {
    return '<label>' + esc(f[1]) + ' <small>' + esc(f[2]) + '</small><input id="i_' + f[0] + '" type="number" step="' + (f[4] || 'any') + '"' +
      (f[5] != null ? ' min="' + f[5] + '"' : '') + (f[6] != null ? ' max="' + f[6] + '"' : '') + ' inputmode="decimal" autocomplete="off"></label>';
  }
  $('planGrid').innerHTML = PLAN.slice(0, 15).map(fieldHTML).join('') +
    '<label>Gas cleaning plant type <small>dry: gas leaves at belly top · wet: at bosh top</small><select id="i_gcp"><option value="dry">Dry (bag filter)</option><option value="wet">Wet (scrubber / annular gap)</option></select></label>' +
    PLAN.slice(15, 23).map(fieldHTML).join('') +
    '<label>BLT (bell-less top) N₂ <small>nitrogen sealing the top gearbox / hoppers</small><select id="i_blt"><option value="yes">Yes</option><option value="no">No</option></select></label>' +
    fieldHTML(PLAN[23]);
  $('blastGrid').innerHTML = BLAST.map(fieldHTML).join('');
  $('geoGrid').innerHTML = GEO.map(function (g) { return fieldHTML([g[0], g[1], g[2], null, g[0] === 'ntu' ? 1 : 0.1, 0, g[0] === 'tip' ? 400 : 60]); }).join('');
  $('tapGrid').innerHTML = TAP.map(fieldHTML).join('');

  /* ---------------- Load saved values (defaults are shown as values; auto fields stay empty with the scaled value in grey) */
  var saved = null; try { saved = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { }
  function setDefaults(keepGeo) {
    ALL.forEach(function (f) { if (keepGeo && GEO.some(function (g) { return g[0] === f[0]; })) return; var el = $('i_' + f[0]); el.value = f[3] == null ? '' : f[3]; });
    $('i_gcp').value = 'dry'; $('i_blt').value = 'yes';
  }
  setDefaults();
  if (saved) { ALL.forEach(function (f) { if (saved[f[0]] !== undefined) $('i_' + f[0]).value = saved[f[0]]; }); if (saved.gcp) $('i_gcp').value = saved.gcp; if (saved.blt) $('i_blt').value = saved.blt; }
  try { $('strat').value = localStorage.getItem(KEY_STRAT) || 'reline'; } catch (e) { }
  function save() {
    var o = {}; ALL.forEach(function (f) { o[f[0]] = $('i_' + f[0]).value; }); o.gcp = $('i_gcp').value; o.blt = $('i_blt').value;
    try { localStorage.setItem(KEY, JSON.stringify(o)); localStorage.setItem(KEY_STRAT, $('strat').value); } catch (e) { }
  }

  function raw(id) { var v = $('i_' + id).value; if (v === '' || v == null) return null; var n = Number(v); return isFinite(n) ? n : null; }
  function def(id) { for (var i = 0; i < ALL.length; i++) if (ALL[i][0] === id) return ALL[i][3]; return null; }
  function val(id) { var r = raw(id); return r == null ? def(id) : r; }

  /* ---------------- The engine */
  function compute() {
    var v = {}, auto = {};
    ['vu', 'prod', 'o2', 'o2d', 'coke', 'pci', 'ore', 'coked', 'bd', 'bas', 'topT', 'maxT', 'bag', 'n2l', 'n2f', 'n2a', 'n2m', 'n2t', 'bltf', 'b1', 'b2', 'b3', 'b4', 'drain', 'castm'].forEach(function (k) { v[k] = val(k); });
    if (!(v.vu > 0)) v.vu = 750;
    v.dry = $('i_gcp').value === 'dry'; v.bltOn = $('i_blt').value === 'yes';
    auto.hm = Math.round(v.prod * v.vu / 10) * 10; v.hm = raw('hm') || auto.hm;
    auto.blast = Math.round(v.hm * v.o2d / (1440 * (0.21 + v.o2 / 100)) / 10) * 10; v.blast = raw('blast') || auto.blast;
    auto.uT = Math.round(950 + 25 * v.o2); v.uT = raw('uT') || auto.uT;
    auto.spray = Math.max(1, Math.round(v.blast / 60)); v.spray = raw('spray') || auto.spray;
    auto.taps = v.vu < 600 ? 1 : v.vu < 1500 ? 2 : v.vu < 3000 ? 3 : 4; v.taps = raw('taps') || auto.taps;
    v.n2tot = (v.bltOn ? v.bltf : 0) + v.n2l * v.n2f + v.n2a + v.n2m + v.n2t;
    v.S3 = Math.pow(v.vu / 1070, 1 / 3);
    // geometry (Geometry sheet); each value = typed value, else size-scaled
    var g = {};
    function G(k, a) { auto[k] = a; var r = raw(k); g[k] = r != null && r > 0 ? r : a; }
    G('db', r1(0.5684 * Math.pow(v.vu, 0.3924)));
    G('dt', r1(0.68 * g.db));
    G('dh', r1(0.32 * Math.pow(v.vu, 0.45)));
    G('ht', r1(1.5 * v.S3)); G('hb', r1(1.8 * v.S3)); G('hbo', r1(3 * v.S3)); G('htb', r1(0.6 * v.S3)); G('htt', r1(2.8 * v.S3));
    G('hs', r1(0.2 * g.dh));
    var shaftA = (v.vu - PI / 4 * g.dh * g.dh * (g.htt + g.htb) - PI * g.hbo / 12 * (g.dh * g.dh + g.dh * g.db + g.db * g.db) - PI / 4 * g.db * g.db * g.hb - PI / 4 * g.dt * g.dt * g.ht) / (PI / 12 * (g.db * g.db + g.db * g.dt + g.dt * g.dt));
    G('hsh', Math.max(1, r1(shaftA)));
    G('ntu', 2 * Math.round(g.dh + 2));
    G('tip', Math.round(100 * Math.sqrt(v.blast / 60 / (g.ntu * PI / 4 * 200))) * 10);
    // depths below zero stockline
    var d = { d1: g.ht }; d.d2 = d.d1 + g.hsh; d.d3 = d.d2 + g.hb; d.d4 = d.d3 + g.hbo; d.d5 = d.d4 + g.htb; d.d6 = d.d5 + g.htt; d.d7 = d.d6 + g.hs;
    var z = {
      throat: PI / 4 * g.dt * g.dt * g.ht, shaft: PI / 12 * g.hsh * (g.dt * g.dt + g.dt * g.db + g.db * g.db), belly: PI / 4 * g.db * g.db * g.hb,
      bosh: PI / 12 * g.hbo * (g.db * g.db + g.db * g.dh + g.dh * g.dh), tuy: PI / 4 * g.dh * g.dh * g.htb, hearth: PI / 4 * g.dh * g.dh * g.htt, sump: PI / 4 * g.dh * g.dh * g.hs
    };
    var c = { c1: z.throat }; c.c2 = c.c1 + z.shaft; c.c3 = c.c2 + z.belly; c.c4 = c.c3 + z.bosh; c.c5 = c.c4 + z.tuy;
    var R = v.hm / 24 * (v.ore / v.bd + v.coke / 1000 / v.coked);   // m³/h of burden at 100% blast
    // furnace profile: 120 bands from zero stockline to sump bottom
    function diam(zz) {
      if (zz <= d.d1) return g.dt;
      if (zz <= d.d2) return g.dt + (g.db - g.dt) * (zz - d.d1) / g.hsh;
      if (zz <= d.d3) return g.db;
      if (zz <= d.d4) return g.db - (g.db - g.dh) * (zz - d.d3) / g.hbo;
      return g.dh;
    }
    var N = 120, dz = d.d7 / N, pz = [0], pc = [0];
    for (var i = 1; i <= N; i++) { var a = diam(dz * (i - 1)), b = diam(dz * i); pz.push(dz * i); pc.push(pc[i - 1] + PI / 8 * (a * a + b * b) * dz); }
    function depthOf(V) {
      if (V <= 0) return 0;
      for (var j = 1; j <= N; j++) if (pc[j] >= V) return pz[j - 1] + (V - pc[j - 1]) / (pc[j] - pc[j - 1]) * dz;
      return d.d7;
    }
    function sim(deep) {
      var Vt = deep ? c.c5 : c.c2, dT = deep ? d.d5 : d.d2, rows = [], T = 0, M = 0, peak = 0, prevF = null;
      for (var k = 0; k < 400; k++) {
        var h = k * 0.25, C = Math.min(dT, depthOf(T)), F;
        if (deep) F = T >= c.c5 - 1 ? 0 : C < d.d2 ? v.b1 : C < d.d3 ? v.b2 : C < d.d4 ? v.b3 : v.b4;
        else F = T >= c.c2 - 1 ? 0 : v.b1;
        var route = F === 0 ? 'stopped' : C < (v.dry ? d.d2 : d.d3) ? 'gcp' : 'bleeder';
        var L = route === 'gcp' ? (v.dry ? Math.min(v.maxT, v.bag) : v.maxT) : v.maxT;
        var Tu = v.topT + (v.uT - v.topT) * Math.pow(Math.min(1, C / d.d5), 2);
        var H = Math.min(Tu, L);
        var K = F === 0 ? 0 : Math.min(v.spray, Math.max(0, (F * v.blast * 60 * 1.35 * 1.45 * (Tu - L) - v.n2tot * 1.3 * (L - 25)) / ((4.19 * 70 + 2257 + 1.97 * (L - 100)) * 1000)));
        if (k > 0) M += K * 0.25;
        peak = Math.max(peak, K);
        var zone = F === 0 ? 'stop' : C < d.d2 ? 'shaft' : C < d.d3 ? 'belly' : C < d.d4 ? 'bosh' : 'tuyere';
        rows.push({ h: h, C: C, F: F, route: route, Tu: Tu, H: H, K: K, M: M, zone: zone, need: K >= v.spray - 1e-6 && F > 0 });
        if (F === 0) break;
        T = Math.min(Vt, T + R * F * 0.25); prevF = F;
      }
      return { rows: rows, peak: peak, water: M };
    }
    var durDeep = c.c2 / (R * v.b1) + (c.c3 - c.c2) / (R * v.b2) + (c.c4 - c.c3) / (R * v.b3) + (c.c5 - c.c4) / (R * v.b4);
    var durPart = c.c2 / (R * v.b1);
    var gcpOff = v.dry ? c.c2 / (R * v.b1) : c.c2 / (R * v.b1) + (c.c3 - c.c2) / (R * v.b2);
    return { v: v, auto: auto, g: g, d: d, z: z, c: c, R: R, durDeep: durDeep, durPart: durPart, gcpOff: gcpOff, deep: sim(true), part: sim(false), diam: diam };
  }

  /* ---------------- Rendering */
  var S = null, tlKind = null;
  function rows(list) { return list.map(function (r) { return '<div class="row"><b>' + r[0] + (r[1] ? ' <small>' + r[1] + '</small>' : '') + '</b><span class="val' + (r[3] ? ' ' + r[3] : '') + '">' + r[2] + '</span></div>'; }).join(''); }
  function trs(list) { return list.map(function (r) { return '<tr>' + r.map(function (c, i) { return i === 0 || i === r.length - 1 && typeof c === 'string' && !/^[\d,.\-−+%—]+$/.test(c) ? '<td>' + c + '</td>' : '<td class="n">' + c + '</td>'; }).join('') + '</tr>'; }).join(''); }

  function render() {
    S = compute();
    var v = S.v, g = S.g, d = S.d, z = S.z, c = S.c, A = S.auto;
    // placeholders = values used when empty
    ['hm', 'blast', 'uT', 'spray', 'taps'].forEach(function (k) { $('i_' + k).placeholder = fmt(A[k], 0) + ' (auto)'; });
    ALL.forEach(function (f) { if (f[3] != null) $('i_' + f[0]).placeholder = String(f[3]); });
    GEO.forEach(function (gf) { $('i_' + gf[0]).placeholder = String(A[gf[0]]) + ' (scaled)'; });
    ALL.forEach(function (f) { var el = $('i_' + f[0]); el.classList.toggle('set', el.value !== '' && (f[3] == null || Number(el.value) !== f[3])); });

    $('baseRows').innerHTML = rows([
      ['Hot metal production', 'productivity × volume', fmt(v.hm, 0) + ' t/day'],
      ['Cold blast (air only)', 'enrichment O₂ excluded', fmt(v.blast, 0) + ' Nm³/min'],
      ['Uncontrolled top T at tuyere level', 'base 950 °C + 25 per % O₂', fmt(v.uT, 0) + ' °C'],
      ['Nitrogen available at the top', 'BLT + lances + platforms', fmt(v.n2tot, 0) + ' Nm³/h'],
      ['Spray capacity used', '', fmt(v.spray, 0) + ' m³/h'],
      ['Burden descent at 100% blast', 'from production and densities', fmt(S.R, 1) + ' m³/h'],
      ['Hot metal per hour', '', fmt(v.hm / 24, 1) + ' t/h'],
      ['Tuyeres · tip diameter', '', fmt(g.ntu, 0) + ' · ' + fmt(g.tip, 0) + ' mm'],
      ['Geometry scale S3', '(Vu / 1070)^(1/3)', fmt(v.S3, 3)]
    ]);
    $('depthBody').innerHTML = [
      ['d1 throat bottom', d.d1, c.c1, 'Throat'], ['d2 belly top (shaft bottom)', d.d2, c.c2, '<b class="tgt p">Partial blowdown target</b>'],
      ['d3 bosh top', d.d3, c.c3, v.dry ? '' : 'Wet GCP: gas to bleeder here'], ['d4 bosh bottom', d.d4, c.c4, ''],
      ['d5 tuyere centre line', d.d5, c.c5, '<b class="tgt d">Deep blowdown target</b>'], ['d6 taphole centre line', d.d6, null, ''], ['d7 sump bottom', d.d7, null, '']
    ].map(function (r) { return '<tr><td>' + r[0] + '</td><td class="n">' + fmt(r[1], 2) + '</td><td class="n">' + (r[2] == null ? '—' : fmt(r[2], 1)) + '</td><td>' + r[3] + '</td></tr>'; }).join('');
    $('zoneBody').innerHTML = [['Throat', z.throat], ['Shaft', z.shaft], ['Belly', z.belly], ['Bosh', z.bosh], ['Tuyere band', z.tuy], ['Hearth (tuyere to taphole)', z.hearth], ['Sump', z.sump]]
      .map(function (r) { return '<tr><td>' + r[0] + '</td><td class="n">' + fmt(r[1], 1) + '</td></tr>'; }).join('') +
      '<tr><th>Total to sump</th><th class="n">' + fmt(z.throat + z.shaft + z.belly + z.bosh + z.tuy + z.hearth + z.sump, 1) + '</th></tr>';
    drawProfile();

    // ----- strategy
    var st = BD.STOPS[$('strat').value] || BD.STOPS.reline;
    $('stratHelp').innerHTML = Object.keys(BD.STOPS).map(function (k) {
      var o = BD.STOPS[k], t = o.kind === 'deep' ? 'Deep' : o.kind === 'partial' ? 'Partial' : 'Banking';
      return '<div class="opt' + (k === $('strat').value ? ' on' : '') + '" data-k="' + k + '"><b>' + esc(o.name) + '<span class="t ' + o.kind + '">' + t + '</span></b><p>' + esc(o.what) + '</p></div>';
    }).join('');
    var tgt = st.idx === 3 ? d.d5 : st.idx === 1 ? d.d2 : 0, isDeep = st.kind === 'deep', isPart = st.kind === 'partial', sim = isDeep ? S.deep : S.part;
    $('stratSel').innerHTML = '<h3>Your stoppage · ' + esc(st.name) + '</h3>' + rows([
      ['Blowdown type', '', esc(st.type)],
      ['Target stockline', tgt ? 'm below zero stockline' : '0 = banking, no lowering', fmt(tgt, 1) + ' m'],
      ['Coke-up of the burden', '', '+' + Math.round(st.cokeUp * 100) + '%'],
      ['Duration from T0', '', st.kind === 'bank' ? '—' : fmt(isDeep ? S.durDeep : S.durPart, 1) + ' h'],
      ['Peak spray demand', 'capacity ' + fmt(v.spray, 0) + ' m³/h', st.kind === 'bank' ? '—' : fmt(sim.peak, 1) + ' m³/h', st.kind === 'bank' ? '' : sim.peak >= v.spray - 0.01 ? 'bad' : 'ok'],
      ['Typical outage before blow-in', '', st.outage + ' days'],
      ['Timeline to use', '', st.kind === 'bank' ? 'None — bank: extra coke, cast, seal tuyeres' : isDeep ? 'Deep' : 'Partial'],
      ['Salamander tap needed', '', esc(st.sal)]
    ]);
    var deepB = Math.max(0.9, v.bas - 0.15), partB = Math.max(0.9, v.bas - 0.1);
    $('stratBody').innerHTML = [
      ['Blowdown type', 'Deep, to tuyere level', 'Partial, to belly', ''],
      ['Target stockline', fmt(d.d5, 1), fmt(d.d2, 1), 'm below zero'],
      ['Burden removed', fmt(c.c5, 0), fmt(c.c2, 0), 'm³'],
      ['Duration from T0', fmt(S.durDeep, 2), fmt(S.durPart, 2), 'h'],
      ['Gas leaves GCP', fmt(S.gcpOff, 2) + ' h after T0', 'Never — stays on GCP', ''],
      ['Peak spray demand', '<span class="' + (S.deep.peak >= v.spray - 0.01 ? 'val bad' : '') + '">' + fmt(S.deep.peak, 1) + '</span>', '<span class="' + (S.part.peak >= v.spray - 0.01 ? 'val bad' : '') + '">' + fmt(S.part.peak, 1) + '</span>', 'm³/h'],
      ['Total spray water', fmt(S.deep.water, 1), fmt(S.part.water, 1), 'm³'],
      ['Spray capacity available', fmt(v.spray, 0), fmt(v.spray, 0), 'm³/h — must exceed peak'],
      ['Coke-up of blowdown burden', '+15%', '+10%', ''],
      ['Coke blank', fmt(z.bosh * v.coked, 1), '0', 't (deep only)'],
      ['Slag basicity target', fmt(deepB, 2), fmt(partB, 2), 'CaO/SiO₂ (acid wash, floor 0.90)'],
      ['Typical outage', '45 (reline) / 20 (hearth)', '4', 'days']
    ].map(function (r) { return '<tr><td>' + r[0] + '</td><td class="n">' + r[1] + '</td><td class="n">' + r[2] + '</td><td>' + r[3] + '</td></tr>'; }).join('');

    // ----- burden & fuel
    var cdump = 0.5 * PI / 4 * g.dt * g.dt * v.coked, oc = v.ore * 1000 / v.coke;
    function crate(f) { return v.hm / 24 / (cdump * oc / f + cdump); }
    $('burdenBody').innerHTML = [
      ['Coke-up on normal coke rate', '+15%', '+10%', ''],
      ['Coke rate in the burden', fmt(v.coke * 1.15, 1), fmt(v.coke * 1.1, 1), 'kg/tHM'],
      ['Normal ore/coke', fmt(oc, 2), fmt(oc, 2), 't/t'],
      ['Blowdown ore/coke', fmt(oc / 1.15, 2), fmt(oc / 1.1, 2), 't/t'],
      ['Coke dump', fmt(cdump, 2), fmt(cdump, 2), 't'],
      ['Ore dump, normal', fmt(cdump * oc, 2), fmt(cdump * oc, 2), 't'],
      ['Ore dump, blowdown', fmt(cdump * oc / 1.15, 2), fmt(cdump * oc / 1.1, 2), 't'],
      ['Charging rate', fmt(crate(1.15), 2), fmt(crate(1.1), 2), 'charges/h (1 coke + 1 ore dump)'],
      ['Normal slag basicity', fmt(v.bas, 2), fmt(v.bas, 2), 'CaO/SiO₂'],
      ['Blowdown basicity target', fmt(deepB, 2), fmt(partB, 2), 'CaO/SiO₂ — floored at 0.90'],
      ['Extra quartzite (acid wash)', fmt(Math.round(90 * (v.bas - deepB)), 0), fmt(Math.round(90 * (v.bas - partB)), 0), 'kg/tHM — ≈90 kg per unit basicity drop']
    ].map(function (r) { return '<tr><td>' + r[0] + '</td><td class="n">' + r[1] + '</td><td class="n">' + r[2] + '</td><td>' + r[3] + '</td></tr>'; }).join('');
    var cph = v.hm / 24 * v.coke / 1000, blank = z.bosh * v.coked;
    $('fuelBody').innerHTML = [
      ['Top coke', fmt(v.coke, 0), fmt(v.coke * 1.15, 1), 'kg/tHM'], ['PCI', fmt(v.pci, 0), '0', 'kg/tHM — stop at T0 − 4 h'],
      ['Total fuel (injection on)', fmt(v.coke + v.pci, 0), fmt(v.coke * 1.15, 1), 'kg/tHM'], ['Coke per hour', fmt(cph, 2), fmt(cph, 2), 't/h — unchanged, ore comes out'],
      ['Coke in 12 h window', fmt(cph * 12, 1), fmt(cph * 12, 1), 't'], ['Coke blank (deep)', '0', fmt(blank, 1), 't — bosh volume'],
      ['Total coke for the blowdown', '—', fmt(cph * 12 + blank, 1), 't']
    ].map(function (r) { return '<tr><td>' + r[0] + '</td><td class="n">' + r[1] + '</td><td class="n">' + r[2] + '</td><td>' + r[3] + '</td></tr>'; }).join('');

    // ----- timeline
    if (!tlKind) tlKind = isPart ? 'partial' : 'deep';
    renderTimeline();

    // ----- tapping
    var hmc = v.drain * v.castm, mf = v.hm / 24, avgB = (v.b1 + v.b2 + v.b3 + v.b4) / 4;
    $('tapBody').innerHTML = [['Shaft (highest blast)', v.b1], ['Belly', v.b2], ['Bosh', v.b3], ['Below bosh (near tuyeres)', v.b4]].map(function (p) {
      var mr = mf * p[1], cyc = hmc / mr;
      return '<tr><td>' + p[0] + '</td><td class="n">' + Math.round(p[1] * 100) + '%</td><td class="n">' + fmt(mr, 1) + '</td><td class="n">' + fmt(hmc, 0) + '</td><td class="n">' + fmt(cyc, 2) + '</td><td class="n">' + fmt(Math.max(0, cyc - v.castm / 60), 2) + '</td></tr>';
    }).join('');
    var avgCyc = hmc / (mf * avgB);
    $('tapRows').innerHTML = rows([
      ['Tapholes', 'from Inputs', fmt(v.taps, 0)],
      ['Average blast during blowdown', 'mean of the four steps', Math.round(avgB * 100) + '%'],
      ['Average melting rate', 'vs ' + fmt(mf, 1) + ' t/h at full blast', fmt(mf * avgB, 1) + ' t/h'],
      ['HM per cast', fmt(v.castm, 0) + '-min cast', fmt(hmc, 0) + ' t'],
      ['Intermediate casts in a deep blowdown', 'plus the final cast', fmt(Math.max(1, Math.round(S.durDeep / avgCyc)), 0)],
      ['Suggested drill bit diameter', 'tapered rod; scales with output', fmt(Math.min(75, Math.round(40 + 0.018 * (v.vu - 400))), 0) + ' mm'],
      ['Taphole length (clay depth)', 'keep the mushroom inside the hearth wall', fmt(r1(0.35 * g.dh), 1) + ' m']
    ]);

    // ----- blow-in
    if ($('biRows')) $('biRows').innerHTML = rows([
      ['Start cold blast at', '30% of normal', fmt(v.blast * 0.3, 0) + ' Nm³/min'],
      ['Top T limit during build-up', 'GCP limit − 60 °C', fmt((v.dry ? Math.min(v.bag, v.maxT) : v.maxT) - 60, 0) + ' °C'],
      ['First cast', '', '~20–30 h after blast on, or when liquid forms'],
      ['Oxygen enrichment', '', 'Off until production is stable (day 3+)']
    ]);
    if ($('biBody')) $('biBody').innerHTML = [[1, 0.35, 'Light-up, first blast; gas on bleeder; H₂ below 6%'], [2, 0.5, 'First casts; basicity 1.20–1.25; no PCI, no O₂'], [3, 0.65, 'Gas to GCP once O₂ nil; PCI starts low; coke-up tapering'],
      [5, 0.85, 'PCI towards normal; O₂ enrichment starts low'], [7, 1, 'Full production; basicity back to ' + fmt(v.bas, 2)]]
      .map(function (r) { return '<tr><td>Day ' + r[0] + '</td><td class="n">' + Math.round(r[1] * 100) + '%</td><td class="n">' + fmt(v.blast * r[1], 0) + '</td><td>' + r[2] + '</td></tr>'; }).join('');
    if (window.BD3D && window.BD3D.ready) window.BD3D.setGeo(S);
  }

  function renderTimeline() {
    var v = S.v, sim = tlKind === 'deep' ? S.deep : S.part, rw = sim.rows;
    Array.prototype.forEach.call($('tlSeg').children, function (b) { b.classList.toggle('on', b.dataset.k === tlKind); });
    $('tlSum').innerHTML = '<span class="chip">Duration <b>' + fmt(tlKind === 'deep' ? S.durDeep : S.durPart, 1) + ' h</b></span><span class="chip">Target <b>' + fmt(tlKind === 'deep' ? S.d.d5 : S.d.d2, 1) + ' m</b></span>' +
      '<span class="chip">Peak spray <b>' + fmt(sim.peak, 1) + ' / ' + fmt(v.spray, 0) + ' m³/h</b></span><span class="chip">Total water <b>' + fmt(sim.water, 1) + ' m³</b></span>' +
      '<span class="chip">N₂ at top <b>' + fmt(v.n2tot, 0) + ' Nm³/h</b></span>';
    var prev = null, sprayOn = false;
    $('tlBody').innerHTML = rw.map(function (r, i) {
      var act = '';
      if (i === 0) act = 'T0 — stop charging. Blast to ' + Math.round(r.F * 100) + '%. Hoppers sealed with N₂. Spray and N₂ ready.';
      else if (r.F === 0) act = tlKind === 'deep' ? 'Target stockline (tuyeres). Final cast — hold taphole open till it blows. Stop spray → blast off → purge. Salamander after (reline).' : 'Target stockline (belly top). Stop spray → blast off → purge. Gun the stack.';
      else {
        var a = [];
        if (prev && r.zone !== prev.zone) a.push('Stockline in ' + r.zone + ' — blast to ' + Math.round(r.F * 100) + '%');
        if (prev && r.route !== prev.route && r.route === 'bleeder') a.push('Gas off GCP to bleeder; isolate ' + (v.dry ? 'bag filter' : 'GCP'));
        if (!sprayOn && r.K > 0.05) { sprayOn = true; a.push('Top at limit — N₂ at maximum, spray on in small steps'); }
        if (r.need) a.push('Spray at capacity — hold, cut blast if top keeps rising');
        if (!a.length && Math.abs(r.h % 1) < 1e-9) a.push('Log stockline, blast, top T, spray, H₂, O₂');
        act = a.join('. ');
      }
      prev = r;
      var tc = r.Tu > v.maxT ? 'bad' : r.Tu > r.H + 1 ? 'warn' : '';
      return '<tr><td class="n">' + fmt(r.h, 2) + '</td><td><span class="phase ' + r.zone + '">' + r.zone + '</span></td><td class="n">' + fmt(r.C, 2) + '</td><td class="n">' + (r.F ? Math.round(r.F * 100) + '%' : 'off') + '</td>' +
        '<td class="n ' + tc + '">' + fmt(r.Tu, 0) + '</td><td class="n">' + fmt(r.H, 0) + '</td><td class="n' + (r.need ? ' bad' : '') + '">' + fmt(r.K, 1) + '</td><td class="n">' + fmt(r.M, 1) + '</td>' +
        '<td><span class="route ' + r.route + '">' + (r.route === 'gcp' ? 'GCP' : r.route === 'bleeder' ? 'Bleeder' : 'Stopped') + '</span></td><td>' + act + '</td></tr>';
    }).join('');
  }

  function drawProfile() {
    var g = S.g, d = S.d, svg = $('profSvg'), H = 262, top = 22, s = Math.min(H / d.d7, 150 / g.db), cx = 92;
    function y(zz) { return top + zz * s; }
    function x(r, side) { return cx + side * r * s; }
    var pts = [[g.dt / 2, 0], [g.dt / 2, d.d1], [g.db / 2, d.d2], [g.db / 2, d.d3], [g.dh / 2, d.d4], [g.dh / 2, d.d7]];
    var path = 'M' + pts.map(function (p) { return x(p[0], -1).toFixed(1) + ',' + y(p[1]).toFixed(1); }).join(' L') + ' L' + pts.slice().reverse().map(function (p) { return x(p[0], 1).toFixed(1) + ',' + y(p[1]).toFixed(1); }).join(' L') + ' Z';
    var lv = [['d1', d.d1, '#93a6ba'], ['d2', d.d2, '#ffb547'], ['d3', d.d3, '#93a6ba'], ['d4', d.d4, '#93a6ba'], ['d5', d.d5, '#ff5a4a'], ['d6', d.d6, '#93a6ba'], ['d7', d.d7, '#93a6ba']];
    var tuy = '', n = 4; for (var i = 0; i < 2; i++) tuy += '<rect x="' + (x(g.dh / 2, i ? 1 : -1) - (i ? 0 : 9)) + '" y="' + (y(d.d5) - 2) + '" width="9" height="4" fill="#3cc6c4"/>';
    svg.innerHTML = '<defs><linearGradient id="pg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a4636"/><stop offset=".75" stop-color="#3a2a22"/><stop offset=".86" stop-color="#ff7a1a"/><stop offset="1" stop-color="#c2410c"/></linearGradient></defs>' +
      '<path d="' + path + '" fill="url(#pg)" fill-opacity=".55" stroke="#c3d0dd" stroke-width="1.4"/>' + tuy +
      '<line x1="' + (cx - 40) + '" x2="' + (cx + 40) + '" y1="' + top + '" y2="' + top + '" stroke="#3cc6c4" stroke-dasharray="3 3"/><text x="' + (cx + 42) + '" y="' + (top + 3) + '" fill="#3cc6c4" font-size="9">0 stockline</text>' +
      lv.map(function (l) { return '<line x1="' + (cx - 70) + '" x2="' + (cx + 74) + '" y1="' + y(l[1]) + '" y2="' + y(l[1]) + '" stroke="' + l[2] + '" stroke-width=".7" stroke-dasharray="2 3"/><text x="' + (cx + 76) + '" y="' + (y(l[1]) + 3) + '" fill="' + l[2] + '" font-size="9" font-family="monospace">' + l[0] + ' ' + l[1].toFixed(1) + '</text>'; }).join('') +
      '<text x="4" y="' + (y(d.d2) - 3) + '" fill="#ffb547" font-size="8.5">partial</text><text x="4" y="' + (y(d.d5) - 3) + '" fill="#ff5a4a" font-size="8.5">deep</text>' +
      '<text x="4" y="12" fill="#93a6ba" font-size="9">Ø belly ' + g.db.toFixed(1) + ' m</text>';
  }

  /* ---------------- Events */
  function changed() { render(); save(); }
  ALL.forEach(function (f) { var el = $('i_' + f[0]); el.addEventListener('input', changed); el.addEventListener('change', changed); });
  ['i_gcp', 'i_blt'].forEach(function (id) { $(id).addEventListener('change', changed); });
  $('strat').addEventListener('change', function () { tlKind = null; changed(); });
  $('stratHelp').addEventListener('click', function (e) { var o = e.target.closest('.opt'); if (!o) return; $('strat').value = o.dataset.k; tlKind = null; changed(); });
  $('reset').addEventListener('click', function () { if (!confirm('Reset every input (including geometry) to the default values?')) return; setDefaults(); changed(); });
  $('geoAuto').addEventListener('click', function () { GEO.forEach(function (gf) { $('i_' + gf[0]).value = ''; }); changed(); });
  $('tlSeg').addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; tlKind = b.dataset.k; renderTimeline(); });
  $('back').addEventListener('click', function () { if (history.length > 1) history.back(); else location.href = 'index.html'; });

  // tabs
  var tabs = $('tabs').querySelectorAll('button');
  function setPh(p) {
    tabs.forEach(function (t) { t.classList.toggle('on', t.dataset.p === p); });
    document.querySelectorAll('.ph').forEach(function (s) { s.classList.toggle('on', s.dataset.ph === p); });
    var on = $('tabs').querySelector('.on'); if (on && on.scrollIntoView) on.scrollIntoView({ inline: 'center', block: 'nearest' });
    window.scrollTo(0, 0);
    if (p === 'emergency') openEmergency(); else if (window.BD3D && window.BD3D.ready) { window.BD3D.stop(); stopPlayer(); }
    try { history.replaceState(null, '', '#' + p); } catch (e) { }
  }
  tabs.forEach(function (t) { t.addEventListener('click', function () { setPh(t.dataset.p); }); });

  // import from file (Excel / PDF / Word / CSV / text)
  if (window.BFImport) window.BFImport.mount({ card: 'importCard', after: changed });

  /* ---------------- Checklists (blowdown + safety) */
  function tickList(store, el, items, prefix, onChange) {
    var st = {}; try { st = JSON.parse(localStorage.getItem(store) || '{}'); } catch (e) { }
    el.innerHTML = items.map(function (it, i) { var k = prefix + i, on = !!st[k]; return '<div class="chk' + (on ? ' done' : '') + '"><input type="checkbox" id="c_' + store + k + '"' + (on ? ' checked' : '') + ' data-k="' + k + '"><label for="c_' + store + k + '"><b>' + (i + 1) + '.</b> ' + it + '</label></div>'; }).join('');
    el.addEventListener('change', function (e) {
      var cb = e.target; if (!cb.dataset.k) return;
      var cur = {}; try { cur = JSON.parse(localStorage.getItem(store) || '{}'); } catch (x) { }
      cur[cb.dataset.k] = cb.checked; try { localStorage.setItem(store, JSON.stringify(cur)); } catch (x) { }
      cb.parentElement.classList.toggle('done', cb.checked); onChange();
    });
  }
  function countTicks(store, total, out) { var st = {}; try { st = JSON.parse(localStorage.getItem(store) || '{}'); } catch (e) { } var n = Object.keys(st).filter(function (k) { return st[k]; }).length; $(out).textContent = n + ' of ' + total + ' done'; }
  var chkTotal = BD.CHKS.A.length + BD.CHKS.B.length + BD.CHKS.C.length;
  function chkCount() { countTicks(KEY_CHK, chkTotal, 'chkCount'); }
  ['A', 'B', 'C'].forEach(function (s) { tickList(KEY_CHK, $('chk' + s), BD.CHKS[s], s, chkCount); });
  chkCount();
  $('clrChk').addEventListener('click', function () { if (!confirm('Clear all checklist ticks?')) return; try { localStorage.removeItem(KEY_CHK); } catch (e) { } document.querySelectorAll('[data-ph="checklist"] input[type=checkbox]').forEach(function (c) { c.checked = false; c.parentElement.classList.remove('done'); }); chkCount(); });

  // safety
  var safeTotal = 0;
  $('safeBody').innerHTML = BD.SAFE.map(function (sec, si) {
    safeTotal += sec.items.length;
    var tb = sec.table ? '<div class="tw"><table class="lim"><thead><tr>' + sec.table.h.map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr></thead><tbody>' +
      sec.table.r.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>' : '';
    return '<div class="box sf"><h3><i aria-hidden="true">' + sec.i + '</i>' + (si + 1) + '. ' + sec.t + '</h3>' + tb + (sec.note ? '<p class="note">' + sec.note + '</p>' : '') + '<div data-s="' + si + '"></div></div>';
  }).join('');
  function safeCount() { countTicks(KEY_SAFE, safeTotal, 'safeCount'); }
  BD.SAFE.forEach(function (sec, si) { tickList(KEY_SAFE, document.querySelector('#safeBody [data-s="' + si + '"]'), sec.items, 's' + si + '_', safeCount); });
  safeCount();
  $('clrSafe').addEventListener('click', function () { if (!confirm('Clear all safety ticks?')) return; try { localStorage.removeItem(KEY_SAFE); } catch (e) { } document.querySelectorAll('#safeBody input[type=checkbox]').forEach(function (c) { c.checked = false; c.parentElement.classList.remove('done'); }); safeCount(); });

  /* ---------------- Abnormal & emergency: list, info cards, step player; 3D in bd-3d.js (loaded on first open) */
  var curSc = null, step = 0, playing = true, timer = null, STEP_MS = 5200;
  $('scList').innerHTML = ['Blowdown', 'Blowdown & blow-in', 'Blow-in'].map(function (gname) {
    var list = BD.SC.filter(function (s) { return s.grp === gname; });
    return '<h4>' + gname + '</h4><div class="sclist">' + list.map(function (s) { return '<button class="scb" type="button" data-id="' + s.id + '" style="--c:' + s.c + '"><i></i>' + esc(s.title) + '</button>'; }).join('') + '</div>';
  }).join('');
  $('scList').addEventListener('click', function (e) { var b = e.target.closest('.scb'); if (b) { pick(b.dataset.id); $('stage').scrollIntoView({ behavior: 'smooth', block: 'start' }); } });

  function loadScript(src) { return new Promise(function (ok, bad) { var s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = function () { bad(new Error('Could not load ' + src)); }; document.head.appendChild(s); }); }
  var loading3d = null;
  function openEmergency() {
    if (!curSc) pick(BD.SC[0].id, true);
    if (!loading3d) loading3d = (window.THREE ? Promise.resolve() : loadScript('lib/three.min.js')).then(function () { return THREE.OrbitControls ? 0 : loadScript('lib/orbit-controls.js'); })
      .then(function () { return window.BD3D ? 0 : loadScript('bd-3d.js'); })
      .then(function () { BD3D.init($('bd3d'), S); $('load3d').hidden = true; applyStep(); })
      .catch(function (e) { $('load3d').textContent = '3D could not start on this device (' + e.message + '). The steps and actions below still apply.'; });
    else if (window.BD3D && BD3D.ready) { BD3D.start(); applyStep(); }
    startPlayer();
  }
  function pick(id, quiet) {
    curSc = BD.SC.filter(function (s) { return s.id === id; })[0]; step = 0;
    document.querySelectorAll('.scb').forEach(function (b) { b.classList.toggle('on', b.dataset.id === id); });
    $('scTitle').textContent = curSc.title;
    var tag = $('scTag'); tag.textContent = curSc.grp; tag.className = 'pill' + (curSc.grp === 'Blow-in' ? ' bi' : curSc.grp === 'Blowdown & blow-in' ? ' ab' : '');
    $('scDots').innerHTML = curSc.steps.map(function (s, i) { return '<span data-i="' + i + '" title="' + esc(s.t) + '"></span>'; }).join('');
    $('scInfo').innerHTML =
      '<div class="box why"><h3>Why it happens</h3><p class="lead" style="margin:0">' + esc(curSc.why) + '</p></div>' +
      '<div class="box"><h3>Signs you will see</h3><ul>' + curSc.signs.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>' +
      '<div class="box now"><h3>Do now</h3><ol>' + curSc.now.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ol></div>' +
      '<div class="box then"><h3>Then</h3><ul>' + curSc.then.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>' +
      '<div class="box dont"><h3>Do not</h3><ul>' + curSc.dont.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>';
    if (window.BD3D && BD3D.ready) BD3D.reset();
    applyStep();
    if (!quiet) { playing = true; $('scPlay').textContent = 'Pause'; startPlayer(); }
  }
  function stateAt(i) {   // accumulate state changes up to step i
    var st = { blast: .75, sl: .3, topT: 200, h2: 5, o2: .1, spray: 0, n2: .5, route: 'gcp', leak: 0, bubbles: 0, hot: 0, shellSpray: 0, hang: 0, channel: 0, tap: 0, air: 0, bagHot: 0, flame: 1, back: 0, co: 0, down: 0, dark: 0, steam: 0, x: {} };
    for (var k = 0; k <= i; k++) { var s = curSc.steps[k].s; for (var key in s) { if (key === 'x') { for (var xk in s.x) st.x[xk] = s.x[xk]; } else st[key] = s[key]; } }
    return st;
  }
  function gauge(l, v, u, sev) { return '<div class="g' + (sev ? ' ' + sev : '') + '"><span>' + l + '</span><b>' + v + (u ? ' ' + u : '') + '</b></div>'; }
  function applyStep() {
    if (!curSc) return;
    var sp = curSc.steps[step], st = stateAt(step), v = S.v;
    var n = $('stepN'); n.textContent = { sit: 'Situation', see: 'Alarm', act: 'Action', ok: 'Recovered' }[sp.k] + ' · ' + (step + 1) + '/' + curSc.steps.length; n.className = 'stepn ' + ({ sit: 'bad', see: 'bad', act: 'act', ok: 'ok' }[sp.k]);
    $('stepT').textContent = sp.t; $('stepD').textContent = sp.d;
    Array.prototype.forEach.call($('scDots').children, function (dd, i) { dd.classList.toggle('on', i <= step); });
    var html = gauge('Blast', Math.round(st.blast * 100), '%', st.blast === 0 ? 'bad' : '') +
      gauge('Top T', Math.round(st.topT), '°C', st.topT > v.maxT ? 'bad' : st.topT > v.maxT - 60 ? 'warn' : '') +
      gauge('H₂', st.h2.toFixed(1), '%', st.h2 > 12 ? 'bad' : st.h2 > 8 ? 'warn' : '') +
      gauge('O₂', st.o2.toFixed(2), '%', st.o2 > 0.5 ? 'bad' : st.o2 > 0.3 ? 'warn' : '') +
      gauge('Spray', Math.round(st.spray * v.spray), 'm³/h', st.spray > 0.9 ? 'warn' : '') +
      gauge('Gas route', st.route === 'gcp' ? 'GCP' : st.route === 'bleeder' ? 'Bleeder' : 'Stopped', '', st.route === 'bleeder' ? 'warn' : '');
    (curSc.x || []).forEach(function (xd) {
      var xv = st.x[xd.k]; if (xv == null) return;
      var sev = xd.low ? (xv <= xd.b ? 'bad' : xv <= xd.w ? 'warn' : '') : (xv >= xd.b ? 'bad' : xv >= xd.w ? 'warn' : '');
      html += gauge(xd.l, xv, xd.u, sev);
    });
    $('gauges').innerHTML = html;
    if (window.BD3D && BD3D.ready) BD3D.setState(st, sp.k);
  }
  function startPlayer() { stopPlayer(); if (playing) timer = setInterval(function () { step = (step + 1) % curSc.steps.length; if (step === 0 && window.BD3D && BD3D.ready) BD3D.reset(); applyStep(); }, STEP_MS); }
  function stopPlayer() { if (timer) clearInterval(timer); timer = null; }
  $('scPlay').addEventListener('click', function () { playing = !playing; this.textContent = playing ? 'Pause' : 'Play'; if (playing) startPlayer(); else stopPlayer(); });
  $('scNext').addEventListener('click', function () { step = Math.min(curSc.steps.length - 1, step + 1); applyStep(); if (playing) startPlayer(); });
  $('scPrev').addEventListener('click', function () { step = Math.max(0, step - 1); if (window.BD3D && BD3D.ready) BD3D.reset(); applyStep(); if (playing) startPlayer(); });
  $('scDots').addEventListener('click', function (e) { var dd = e.target.closest('span'); if (!dd) return; step = +dd.dataset.i; applyStep(); if (playing) startPlayer(); });
  document.addEventListener('visibilitychange', function () { if (!window.BD3D || !BD3D.ready) return; if (document.hidden) { BD3D.stop(); stopPlayer(); } else if (document.querySelector('[data-ph="emergency"].on')) { BD3D.start(); startPlayer(); } });

  render();
  var h = (location.hash || '').slice(1); if (h && document.querySelector('[data-ph="' + h + '"]')) setPh(h);
  window.BDPlanner = { compute: compute, get state() { return S; } };
})();
