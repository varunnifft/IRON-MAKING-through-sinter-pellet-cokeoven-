/* In-app user guides for the Cohesive & melting zone and Hearth liquid prediction modules (Iron Making 5.8). */
(function (root) {
  'use strict';
  var zones = '<div class="gz">' +
    [['Lumpy zone (top)', 'solid ore and coke layers; gas heats them', ''], ['Thermal reserve zone', 'about 900–1000 °C; ore reduced by gas', ''], ['Cohesive zone', 'ore softens and melts; gas passes only through coke slits', 'cz'],
      ['Dripping zone (active coke)', 'molten drops trickle down through coke', ''], ['Raceway at the tuyeres', 'hot blast burns coke and makes the gas', ''], ['Hearth (bottom)', 'deadman coke, hot metal with slag on top', 'h']]
      .map(function (z) { return '<div class="gzb ' + z[2] + '"><b>' + z[0] + '</b><small>' + z[1] + '</small></div>'; }).join('') +
    '<div class="gzl"><span class="a">Cohesive &amp; melting zone module</span><span class="b">Hearth liquid prediction</span></div></div>';
  function sec(t, body) { return '<details class="fs gd"><summary>' + t + '</summary><div class="fb">' + body + '</div></details>'; }
  function tbl(head, rows) { return '<div class="scroll"><table class="tbl gt"><tr>' + head.map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr>' + rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</table></div>'; }

  var cz = '<div class="card"><h3>User guide · Cohesive &amp; melting zone</h3><p class="sub">Where the burden softens and melts, what shape that zone has, and how gas flows through it, calculated from the data you already record. Tap a heading to open it.</p></div>' +
    sec('1. The furnace in one picture', '<p>Solid ore and coke go in at the top. Lower down the ore softens and melts (cohesive zone). Drops trickle through the coke (dripping zone). The blast burns coke at the tuyeres (raceway). Liquid iron and slag collect in the hearth.</p>' + zones) +
    sec('2. What this module tells you', '<p>The cohesive zone is the furnace\'s gas distributor: gas can only pass through the thin <b>coke slits</b> between sticky ore layers, so its height and shape decide where the gas goes, how well it is used, and the pressure drop.</p><ul class="how">' +
      '<li><b>Where the zone sits</b>: top (softening starts) and root (melting ends) in 5 rings from centre to wall.</li><li><b>Its shape</b>: inverted V (strong centre gas), W (centre + wall), flat or V (weak centre). Mostly set by the charging matrix.</li>' +
      '<li><b>Gas flow</b>: share up the centre and the wall, gas and solid temperature, pressure profile.</li><li><b>Raceway</b>: RAFT, tuyere velocity, kinetic energy, raceway depth, bosh gas.</li>' +
      '<li><b>Gas use</b>: ηCO, direct reduction, carbon balance.</li><li><b>Permeability</b>: how ΔP splits between zones, against your measured ΔP.</li><li><b>Dripping zone</b>: liquid held in the coke, slag viscosity, flooding index.</li></ul>' +
      '<p><b>Why it matters:</b> a zone that is too low or flat starves the centre of gas and raises fuel rate; too high or uneven raises ΔP and causes hanging and slips.</p>') +
    sec('3. How to use it', '<ol class="how"><li><b>Inputs</b> → <i>Upload Excel</i> (blank template or reference file from the Inputs tab) or <i>Enter manually</i>: production &amp; fuels, blast &amp; top gas, geometry, burden &amp; coke, slag analysis, casting, charging matrix.</li>' +
      '<li>Values already on other BF Model pages (Data input, Batch chemistry, Burden calculator, Furnace 3D view) are <b>not asked again</b>; they are listed under <i>From other BF Model pages</i>.</li>' +
      '<li><b>Review &amp; fill missing</b>: for each blank input choose <i>Take reference</i> or <i>Don\'t take</i>.</li><li><b>Calculate</b>: the Dashboard opens. Data stays on the phone.</li></ol>' +
      '<p>Tips: fill the charging matrix carefully (it sets the shape); measured softening/melting temperatures and measured ΔP make results much closer to your furnace.</p>') +
    sec('4. Reading each tab', tbl(['Tab', 'What you see', 'Look for'], [
      ['<b>Dashboard</b>', 'Every result as a card with OK / WATCH / ALARM and its band', 'Start from the red cards'],
      ['<b>Cohesive zone</b>', 'Zone shape, top and root heights, ring-by-ring table, burden layers, ore share across the radius', 'Inverted V or W = healthy; flat or V = weak centre; very thick zone = high ΔP'],
      ['<b>Gas &amp; ΔP</b>', 'Temperatures, pressure, ΔP split, raceway and RAFT, top gas balance, dripping zone', 'Model ΔP near measured ΔP; flooding index rising'],
      ['<b>3D view</b>', 'Half-cut furnace drawn from the results: layers, cohesive zone, coke, deadman, raceways, isotherms', 'Calculated geometry card lists every number behind the picture']])) +
    sec('5. OK, WATCH, ALARM', tbl(['Status', 'Meaning', 'Do'], [['<b style="color:var(--ok)">OK</b>', 'Inside the normal band', 'Nothing'], ['<b style="color:var(--watch)">WATCH</b>', 'Drifting to a limit', 'Check the input first; then discuss charging, blast or cast plan'], ['<b style="color:var(--alarm)">ALARM</b>', 'Outside the safe band', 'Recheck data; act per plant SOP; inform shift in-charge']]) +
      tbl(['You see', 'Likely cause', 'Typical response'], [['Zone flat or V-shaped', 'Too much ore in the centre', 'Review the charging matrix to open the centre'], ['High ΔP share in cohesive zone', 'Thick zone, poor slits or fines', 'Check coke quality and sinter fines'], ['Flooding index rising', 'Too much liquid held in coke', 'Check slag viscosity and coke size; avoid sudden blast increases']]) +
      '<p class="sub">Typical responses are general practice; your plant SOPs decide the action.</p>') +
    sec('6. Words used', tbl(['Term', 'Plain meaning'], [['Cohesive zone (CZ)', 'Band where ore softens and melts; top = softening starts, root = melting ends'], ['Coke slits', 'Coke layers inside the CZ; the only gas paths through it'], ['TRZ', 'Thermal reserve zone, near-flat ~900–1000 °C band'], ['RAFT', 'Flame temperature at the tuyeres'], ['ηCO', 'Share of CO turned into CO₂'], ['ΔP', 'Pressure drop blast → top gas'], ['Flooding', 'Liquid held in coke starts blocking gas'], ['Deadman', 'Slow-moving cone of coke in the centre reaching into the hearth']])) +
    sec('7. Limits', '<p>A calculation model, as good as the data entered; it supports, not replaces, the shift in-charge and plant SOPs. Deadman drawn as a 45° cone (change in 3D view → 3D geometry assumptions).</p>');

  var hl = '<div class="card"><h3>User guide · Hearth liquid prediction</h3><p class="sub">Hot metal and slag in the hearth, liquid level against tapholes and tuyeres, tap duration, first-slag time and what is left after each tap. Built on BF_Hearth_Liquid_Module_1.xlsx and calibrated from your own tap log.</p></div>' +
    sec('1. What it tells you', '<ul class="how"><li><b>Now</b>: how much metal and slag has built up since the last tap closed, the level above the taphole, and minutes left to the warning and critical levels.</li>' +
      '<li><b>Next 48 h</b>: minute-by-minute level with automatic taps: when each taphole opens and closes, HM and slag tapped, first slag, liquid left at close, peak level.</li>' +
      '<li><b>Calibration</b>: predicted vs actual tap duration, gap, HM and slag per tap, tap rate, first slag, taps per day, casting ratio.</li></ul>' +
      '<p><b>Why it matters:</b> slag rising towards the tuyeres can damage tuyeres and upset the furnace. Knowing the safe time and whether casts keep up with production lets the cast house open the taphole at the right time.</p>') +
    sec('2. The ideas behind it', '<ul class="how"><li><b>Dead iron</b>: the sump below the taphole is always full of iron (area × sump depth × porosity); it never drains.</li>' +
      '<li><b>Retained slag</b>: at the end of a cast the liquid surface tilts towards the taphole, so gas blows through while some slag is left. You pick how casts usually end: <i>Clean blow</i> 0.20 m, <i>Normal</i> 0.30 m, <i>Slaggy blow</i> 0.45 m layer.</li>' +
      '<li><b>Level</b> = liquid volume above the taphole ÷ (hearth area × deadman porosity). With porosity 0.35 the level rises about 3× faster than in an empty hearth.</li>' +
      '<li><b>Tap flow</b> Q = Cd · A · √(2ΔP/ρ). ΔP is mainly the blast pressure plus the liquid head. The flow factor Cd is back-calculated from your taps that ended in Blow and lasted ≥ 20 min (default 0.55 until 3 such taps).</li>' +
      '<li><b>During a tap</b> only metal flows while the metal/slag interface is above the taphole; then slag appears (first slag) and both flow until the taphole blows.</li></ul>') +
    sec('3. How to use it', '<ol class="how"><li><b>Inputs</b> (once): hearth diameter, sump depth, taphole → tuyere height, tapholes, drill bit, production, slag rate, blast pressure, tapping practice, cast-end type, warning and critical levels. Upload the module workbook or type them. Inputs already on other BF Model pages are taken from there.</li>' +
      '<li><b>Tap log</b>: add every tap (taphole, open and close time, HM tapped from the weighbridge, end condition). At least 10–20 taps ending in Blow give a good flow factor. The 48 h simulation starts from the last tap close.</li>' +
      '<li><b>Check calibration</b> on Results: predicted vs actual within about 10–15 %. If not: log more taps, change "How does a typical cast end?", or adjust the deadman porosity.</li>' +
      '<li><b>Use it live</b>: on Results enter the current time (or tap <i>Use the time now</i>) and whether a taphole is open. You get the status and the minutes left to warning and critical levels.</li></ol>') +
    sec('4. Reading each tab', tbl(['Tab', 'What you see'], [
      ['<b>Results</b>', 'Flow factor and capacity check; live estimate since the last close; 48 h summary (max level, rise rate, dead iron, retained slag, time at HIGH); level chart; predicted vs actual table'],
      ['<b>Inputs</b>', 'All inputs by section A–G; shared values from other BF pages; upload, templates, review and fill missing'],
      ['<b>Tap log</b>', 'Add, edit or delete taps; duration, slag used, calibrated Cd per tap and whether it is used for calibration'],
      ['<b>48 h</b>', 'Level chart with warning and critical lines, table of predicted taps, liquid in the hearth, tap stream'],
      ['<b>3D</b>', 'Half-cut hearth drawn to your sizes: deadman coke, metal and slag filling the gaps, sump, tapholes, raceways, warning and critical levels; play the 48 h or jump to the next tap'],
      ['<b>Guide</b>', 'This page']])) +
    sec('5. Status and what to do', tbl(['You see', 'Meaning', 'Typical response'], [
      ['<b style="color:var(--ok)">NORMAL</b>', 'Level below the warning level', 'Nothing'], ['<b style="color:var(--watch)">HIGH</b>', 'Level at or above the warning level', 'Open the next taphole'],
      ['<b style="color:var(--alarm)">CRITICAL</b>', 'Level at or above the critical level', 'Open a taphole now; inform shift in-charge'],
      ['Check: last tap not drained', 'Last tap closed before blowing', 'Residual is higher than shown; tap early'],
      ['Capacity ratio below 1.05', 'Taphole drains hardly faster than the furnace makes liquid', 'Bigger drill bit or double tapping; casts will be long'],
      ['Taps closed by max duration', 'Casts end before the hearth drains', 'Raise the maximum duration or the drill bit']]) + '<p class="sub">Limits and actions must follow your furnace experience and plant safety rules.</p>') +
    sec('6. Inputs explained', tbl(['Input', 'What to enter'], [
      ['Hearth inner diameter', 'Working diameter, wear-adjusted if surveyed'], ['Sump depth', 'Taphole centre to hearth bottom'], ['Taphole → tuyere height', 'Taphole centre to tuyere centre'], ['Tapholes installed / in service', 'In service = in rotation, excluding one under repair'],
      ['Drill-bit diameter', 'From the drill machine record'], ['Deadman porosity', 'Default 0.35; tune during calibration'], ['Production, slag rate', 'Daily report'], ['Densities', 'Defaults are adequate'], ['Hot blast pressure', 'Average from the DCS, bar g'],
      ['Gap between taps', 'Minutes all tapholes stay closed: 1 TH ≈ 30, 2 TH 0–15, 4 TH ≈ 0'], ['Maximum tap duration', 'Planned close / torpedo capacity'], ['Double tapping, trigger levels', 'Only for 3–4 taphole furnaces'], ['How does a typical cast end?', 'Clean blow / Normal / Slaggy blow'], ['Warning / critical level', '% of taphole → tuyere height (plant rule)']])) +
    sec('7. Limits', '<p>One porosity for the whole hearth; production constant over 48 h; taphole wear is inside the average flow factor. An engineering estimate for operations support, not a replacement for plant safety rules.</p>');
  root.IMGuide = { cz: cz, hl: hl };
})(window);
