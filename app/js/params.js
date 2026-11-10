/* Learn about input / output parameters: a definition page for every input and output of the model, with the
   labels the file reader accepts and what to put in an Excel, PDF or link for a better prediction. */
(function () {
  'use strict';
  function C() { return window.SinterApp.ctx; }
  function I(n) { return window.SP_ICON ? window.SP_ICON(n) : ''; }

  // ---------- definitions ----------
  var MATDEF = {
    Ore: 'Iron-bearing feed. Brings Fe and most of the SiO₂ and Al₂O₃; its size (−1 mm, +3 mm) and LOI drive granulation, permeability and FeO.',
    Return: 'Screened −6 mm sinter (plant or BF return) recycled to the mix. Acts as nuclei for granulation and lowers the fuel need; a high share means low net yield. The plant\'s own return fines take the sinter\'s chemistry (lab result, else the prediction) and do not change sinter chemistry or net production.',
    Flux: 'Supplies CaO and MgO for the target basicity and MgO. Limestone and dolomite burn off CO₂ (LOI); burnt lime also improves granulation and productivity.',
    Fuel: 'Solid fuel. Its fixed carbon sets the heat in the bed, so it controls FeO, strength (TI) and RDI; the −3 mm fraction controls how evenly it burns.'
  };
  var CHEMDEF = {
    moist: ['Free moisture of the material as received', 'Converts wet use to dry mass; wrong moisture shifts every chemistry result'],
    fe: ['Total iron Fe(T)', 'Sets sinter Fe(T)'], feo: ['Ferrous oxide in the material', 'Mill scale and magnetite carry FeO; affects heat balance'],
    sio2: ['Silica', 'Sets sinter SiO₂ and, with CaO, the basicity'], al2o3: ['Alumina', 'Raises RDI and weakens the bonding phase'],
    cao: ['Lime', 'Sets basicity with SiO₂'], mgo: ['Magnesia', 'Sets sinter MgO; improves RDI, can reduce strength at high level'], mno: ['Manganese oxide', 'Passes into the sinter'],
    loi: ['Loss on ignition at about 1000 °C (CO₂, combined water)', 'Mass lost in sintering; high-LOI (goethitic) ores need more fuel'],
    fc: ['Fixed carbon (fuels)', 'Heat input; drives FeO, TI and RDI'], burn: ['Total burn-off (LOI, or fixed C + volatile matter for fuels)', 'Used in the mass balance'],
    mps: ['Mean particle size of the material', 'Granulation and permeability'], m1: ['Fraction below 1 mm', 'Fines reduce bed permeability unless well granulated'],
    p3: ['Fraction above 3 mm', 'Coarse ore helps permeability; coarse coke burns unevenly'], s: ['Sulphur', 'Sinter S, mostly from fuel'], p: ['Phosphorus', 'Passes fully into hot metal'], tio2: ['Titania', 'Raises RDI']
  };
  var INDEF = {
    speed: ['Pallet (strand) speed. Files in Hz are converted with your machine factor (Plant level).', 'Higher speed = more production but a later burn-through and more return fines'],
    ign: ['Temperature in the ignition hood', 'Too low leaves a weak top layer, too high melts and seals the surface'],
    windP: ['Suction in the wind main (kPa, as a positive number)', 'Higher suction pulls more air: faster sintering, but more leakage'],
    windT: ['Waste-gas temperature in the wind main', 'Rises when the flame front reaches the grate early or air leaks fall'],
    idFan: ['Speed of the main (ID) fan', 'Sets the air volume through the bed'],
    btp: ['Burn-through point temperature (peak wind-box temperature near the discharge end)', 'Shows where sintering finishes; used to set the speed'],
    bfg: ['Blast-furnace gas flow to the ignition hood', 'Ignition energy'],
    bed: ['Height of the mix on the pallets', 'Deeper beds save fuel and raise TI and yield, at the cost of permeability'],
    moist: ['Moisture of the mix after the mixing drum', 'Optimum moisture gives the best granulation and permeability'],
    coke3: ['Share of coke breeze below 3 mm', 'Fine coke burns fast and unevenly; 75–85 % −3 mm is common practice'],
    alk: ['Na₂O + K₂O in sinter', 'Alkalis raise RDI'],
    area: ['Suction area of the strand (length × width)', 'Converts production to productivity in t/m²/day'],
    cacl2: ['CaCl₂ (halide) spraying on the product sinter', 'Lowers RDI by several points'],
    basis: ['How production is calculated: charge mass balance or machine (speed × bed × width)', ''],
    prodOverride: ['Your own production figure, if you want it used instead of the model', ''],
    biasOn: ['Shift the mass-balance chemistry by the average error against lab results', 'Keeps the predicted chemistry in line with your lab']
  };
  var LABDEF = {
    fe: 'Total iron in sinter', feo: 'Ferrous oxide in sinter; a direct indicator of the heat level in the bed', sio2: 'Silica in sinter', al2o3: 'Alumina in sinter', cao: 'Lime in sinter', mgo: 'Magnesia in sinter', mno: 'Manganese oxide in sinter',
    b2: 'Basicity CaO / SiO₂ of the sinter', ti: 'Tumbler index ISO 3271: % above 6.3 mm after tumbling (cold strength)', rdi: 'Reduction degradation index ISO 4696-1: % below 3.15 mm after low-temperature reduction',
    ri: 'Reducibility index ISO 4695', si: 'Shatter index: % above 10 mm after the drop test', ai: 'Abrasion index: % below 0.5 mm after tumbling', mps: 'Mean particle size of product sinter',
    p50: 'Product sinter above 50 mm', p40: 'Product sinter 40–50 mm', p25: 'Product sinter 25–40 mm', p10: 'Product sinter 10–25 mm', p6: 'Product sinter 6–10 mm', m6: 'Below 6 mm (return fines)', prod: 'Actual sinter production that day'
  };
  var OUTDEF = {
    fe: 'Total iron. Higher means less slag in the blast furnace.', feo: 'Ferrous oxide: rises with fuel and heat. Too high lowers reducibility, too low weakens the sinter.', fe2o3: 'Hematite, derived from Fe(T) and FeO.',
    sio2: 'Silica: the bonding (slag) phase. Too low weakens the sinter, too high adds slag.', al2o3: 'Alumina: raises RDI and viscosity of the bond; lower is better.', cao: 'Lime from the fluxes.', mgo: 'Magnesia for blast-furnace slag; improves RDI.', mno: 'Manganese oxide.',
    b2: 'Binary basicity CaO / SiO₂: the main control of the bonding phase (calcium ferrite).', b4: '(CaO + MgO) / (SiO₂ + Al₂O₃).', b3: '(CaO + MgO) / SiO₂.', as: 'Al₂O₃ / SiO₂: above about 0.5 the bond weakens and RDI rises.',
    s: 'Sulphur, mostly from the fuel.', p: 'Phosphorus: passes fully into hot metal.', tio2: 'Titania: raises RDI.',
    p50: 'Coarse sinter above 50 mm.', p40: 'Size class 40–50 mm.', p25: 'Size class 25–40 mm.', p10: 'Size class 10–25 mm.', p6: 'Size class 6–10 mm.', m6: 'Return fines below 6 mm, screened back to the mix.',
    mps: 'Mean particle size of product sinter.', hd: 'Harmonic diameter 1/Σ(xᵢ/dᵢ): tracks blast-furnace permeability; higher is better.',
    ti: 'Tumbler index (+6.3 mm): cold strength in handling.', ai: 'Abrasion index (−0.5 mm): dust made in handling.', si: 'Shatter index (+10 mm): resistance to drops at transfer points.',
    rdi: 'Reduction degradation index (−3.15 mm): break-up in the upper BF shaft. Lower is better.', ri: 'Reducibility: how easily oxygen is removed in the BF. Higher saves coke.',
    prod: 'Sinter production per day.', prodMachine: 'Production from speed × bed × width × density.', productivity: 'Production per m² of strand per hour.', productivityDay: 'Production per m² of strand per day.',
    fuel: 'Wet coke + anthracite per tonne of sinter.', fcKg: 'Fixed carbon per tonne of sinter (heat input).', flux: 'Wet lime + limestone + dolomite per tonne of sinter.',
    fcMix: 'Fixed carbon in the dry mix.', m1: 'Fines below 1 mm in the mix (granulation load).', p3: 'Coarse fraction above 3 mm in the mix.', retShare: 'Return sinter share of the dry mix.',
    moistCharge: 'Moisture brought in by the raw materials (before water addition).', oreLoi: 'LOI of the ore blend (goethite index).', limeShare: 'Burnt-lime share of the dry mix.', yieldMB: 'Sinter made per tonne of dry mix (mass balance).'
  };
  var RANGE = { speed: '1–4 m/min', ign: '1050–1200 °C', windP: '10–17 kPa', windT: '120–200 °C', btp: '300–450 °C', bed: '500–800 mm', moist: '6–8.5 %', coke3: '75–85 %', alk: '0.05–0.2 %' };

  // ---------- what to upload ----------
  var UPLOAD = [
    ['file-spreadsheet', 'Daily blend / feeder report', 'Excel, CSV or the DPR as PDF',
      ['One row per material: name and MT/day (TPH, % of charge or kg/t sinter also work).', 'Include return fines, coke breeze, limestone, dolomite, burnt lime, mill scale and flue dust, not only ores.', 'Put the unit in the header ("MT/day", "%", "kg/t") so the basis is read correctly.']],
    ['flask-conical', 'Raw-material analysis', 'Lab Excel or PDF, latest two analyses with dates',
      ['A table with one row per material and columns Fe, FeO, SiO₂, Al₂O₃, CaO, MgO, MnO, LOI, moisture.', 'For fuels add fixed carbon, volatile matter and ash; for ores −1 mm, +3 mm and mean size.', 'S, P and TiO₂ when available. Dates let the app use the latest or the average of the last two.']],
    ['settings-2', 'Machine log', 'Shift or day averages in Excel/CSV',
      ['Machine speed (m/min or Hz), bed height, ignition temperature, wind-main suction and temperature, ID fan rpm, BTP, BF gas to ignition.', 'Mix moisture after the drum and coke −3 mm fraction.', 'Averages for the same period as the blend and the lab results.']],
    ['test-tube', 'Sinter lab results', 'Lab Excel or PDF for the same day',
      ['Fe(T), FeO, SiO₂, Al₂O₃, CaO, MgO, MnO, basicity, TI, RDI, RI, SI, AI.', 'Size fractions (+50, 40–50, 25–40, 10–25, 6–10, −6 mm), MPS and the actual production.', 'These are compared with the prediction and used to calibrate chemistry and anchor RDI / RI / SI / AI.']],
    ['link', 'Links', 'Google Sheets / Drive, OneDrive or a web page',
      ['Share as "anyone with the link can view".', 'A direct link to an .xlsx, .csv or .pdf, or a page with a table.', 'Scanned image PDFs cannot be read; export text PDFs from Excel or the lab system.']]
  ];
  var TIPS = ['A label next to its value, or a table with a header row, is read automatically. One value per cell, no merged cells over numbers.',
    'Short or plant-specific names (LST, Dolo, CB, M/c spd, Ign tmp, BTP) are matched by Smart match; check its guesses once and they are remembered.',
    'Anything you do not give is filled by the app with a justified assumption and shown in red on the Inputs page. The fewer red inputs, the better the prediction.',
    'The most valuable data for accuracy: the raw-material analysis, the full blend including fluxes and fuel, and daily lab results for RDI / RI (see References for the full ranked list).',
    'Use the Inputs › Get template file to see the layout that is always read without any matching.'];

  function labels(key) {
    var A = (window.SinterParse && SinterParse.aliases) || {}, a = (A[key] || []).slice(0, 6);
    return a.length ? '<div class="pd-al">Accepted labels: ' + a.map(function (x) { return '<code>' + C().esc(x) + '</code>'; }).join(' ') + '</div>' : '';
  }
  function row(name, unit, def, eff, extra) {
    var esc = C().esc;
    return '<div class="pd" data-q="' + esc((name + ' ' + def + ' ' + (eff || '')).toLowerCase()) + '"><div class="pd-h"><b>' + name + '</b>' + (unit ? '<span class="pd-u">' + unit + '</span>' : '') + '</div><p>' + def + '</p>' + (eff ? '<p class="pd-e">' + I('arrow-right') + eff + '</p>' : '') + (extra || '') + '</div>';
  }
  function page(m) {
    var c = C(), esc = c.esc, h = '';
    h += '<section class="bn"><img class="bn-img" src="img/ocean-dawn.webp" alt="" loading="lazy" decoding="async" onerror="this.remove()"><div class="bn-shade"></div><div class="bn-in"><div class="bn-k">' + I('book-open') + 'Parameter guide</div><h1>Input &amp; output parameters</h1><p>What every parameter means, how it moves the prediction, and what to put in your Excel, PDF or link</p></div></section>';
    h += '<div class="pd-search"><input class="sel" id="pdQ" placeholder="Search a parameter, e.g. RDI, basicity, bed height" autocomplete="off"></div>';
    h += '<div class="pd-tabs" id="pdTabs"><button data-t="up" class="on">What to upload</button><button data-t="in">Inputs</button><button data-t="out">Outputs</button></div>';
    // what to upload
    h += '<div class="pd-sec" data-s="up"><div class="g-up">' + UPLOAD.map(function (u) {
      return '<div class="card up"><h2>' + I(u[0]) + u[1] + '</h2><p class="sub">' + u[2] + '</p><ul>' + u[3].map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div>';
    }).join('') + '</div><div class="card"><h2>' + I('lightbulb') + 'For a better prediction</h2><ul class="tips">' + TIPS.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul>' +
      '<div class="row wrap"><button class="btn primary" data-go="input">' + I('upload') + ' Go to Inputs</button><button class="btn" id="pdTpl">' + I('download') + ' Download template</button></div></div></div>';
    // inputs
    var hi = '<h2 class="sec">' + I('layers') + 'Raw-material blend</h2>' + ['Ore', 'Return', 'Flux', 'Fuel'].map(function (t) {
      var ms = c.ORD.filter(function (i) { return c.SD.types[i] === t; });
      return row({ Ore: 'Iron ore fines & iron-bearing materials', Return: 'Return fines', Flux: 'Fluxes', Fuel: 'Solid fuel (coke breeze, anthracite)' }[t], 'MT/day wet · % · kg/t', MATDEF[t], '',
        '<div class="pd-al">In the app: ' + ms.map(function (i) { return esc(c.MAT[i]); }).join(' · ') + '</div>' + labels('use.' + ms[0]));
    }).join('');
    hi += '<h2 class="sec">' + I('flask-conical') + 'Raw-material analysis (per material)</h2>' + c.CHEMF.map(function (q) { var d = CHEMDEF[q[0]] || ['', '']; return row(q[1], q[2], d[0], d[1]); }).join('');
    hi += '<h2 class="sec">' + I('settings-2') + 'Machine parameters</h2>' + c.MACH.map(function (p) { var d = INDEF[p.k] || ['', '']; return row(p.l, p.u, d[0], d[1], (RANGE[p.k] ? '<div class="pd-al">Common range: ' + RANGE[p.k] + ' (guide only, plants differ)</div>' : '') + labels(p.k)); }).join('');
    hi += '<h2 class="sec">' + I('factory') + 'Process &amp; other inputs</h2>' + c.PROC.map(function (p) { var d = INDEF[p.k] || ['', '']; return row(p.l, p.u || '', d[0], d[1], (RANGE[p.k] ? '<div class="pd-al">Common range: ' + RANGE[p.k] + ' (guide only)</div>' : '') + labels(p.k)); }).join('');
    hi += '<h2 class="sec">' + I('test-tube') + 'Sinter lab results (actual)</h2>' + c.LAB.map(function (p) { return row(p.l, p.u, LABDEF[p.k] || '', 'Compared with the prediction; used to calibrate the model', labels('lab.' + p.k)); }).join('');
    h += '<div class="pd-sec" data-s="in" hidden>' + hi + '</div>';
    // outputs
    var ho = '', grp = { A: 'flask-conical', B: 'ruler', C: 'shield-check', D: 'factory', E: 'layers' };
    c.OUTS.forEach(function (o) {
      if (o.length === 2) { ho += '<h2 class="sec">' + I(grp[o[0]] || 'activity') + o[1] + '</h2>'; return; }
      var t = c.state.targets[o[0]], better = { hi: 'Higher is better', lo: 'Lower is better', mid: 'Keep within the target band' }[o[4]] || '';
      ho += row(o[1], o[2] === '-' ? '' : o[2], OUTDEF[o[0]] || '', better + (t && (t[0] != null || t[1] != null) ? (better ? ' · ' : '') + 'your target ' + c.tgtText(o[0]) : ''));
    });
    h += '<div class="pd-sec" data-s="out" hidden>' + ho + '</div><div class="pd-none" hidden>No parameter matches your search.</div>';
    m.innerHTML = h;
    var show = function (t) { Array.prototype.forEach.call(m.querySelectorAll('.pd-sec'), function (s) { s.hidden = t && s.dataset.s !== t; }); Array.prototype.forEach.call(m.querySelectorAll('#pdTabs button'), function (b) { b.classList.toggle('on', b.dataset.t === t); }); };
    Array.prototype.forEach.call(m.querySelectorAll('#pdTabs button'), function (b) { b.onclick = function () { m.querySelector('#pdQ').value = ''; filter(''); show(b.dataset.t); }; });
    var filter = function (q) {
      var n = 0; q = q.trim().toLowerCase();
      Array.prototype.forEach.call(m.querySelectorAll('.pd'), function (d) { var ok = !q || d.dataset.q.indexOf(q) >= 0; d.hidden = !ok; if (ok) n++; });
      if (q) show(null); m.querySelector('.pd-none').hidden = !q || n > 0;
      Array.prototype.forEach.call(m.querySelectorAll('.pd-sec h2.sec'), function (hd) { var e = hd.nextElementSibling, any = false; while (e && !e.matches('h2.sec')) { if (!e.hidden) any = true; e = e.nextElementSibling; } hd.hidden = !any; });
      Array.prototype.forEach.call(m.querySelectorAll('.pd-sec[data-s="up"]'), function (s) { s.hidden = !!q || s.hidden; });
    };
    m.querySelector('#pdQ').oninput = function () { filter(this.value); if (!this.value) show('up'); };
    var tp = m.querySelector('#pdTpl'); if (tp) tp.onclick = function () { if (window.SinterApp.downloadTemplate) window.SinterApp.downloadTemplate(); else c.toast('Use Menu › Download input template'); };
  }
  window.SinterParams = { page: page };
})();
