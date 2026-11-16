/* Content for the BF Blow-in / Blow-down planner: stoppage options, checklists, emergency scenarios
   (with the step states the 3D scene plays) and safety aspects. Planning & training aid; plant SOP governs. */
(function () {
  'use strict';

  // ---------- Stoppage options (same five cases as the reference Excel)
  var STOPS = {
    reline: { name: 'Full reline', kind: 'deep', type: 'Deep blowdown (to tuyere level)', idx: 3, cokeUp: 0.15, outage: 45, sal: 'Yes — tap after blast off',
      what: 'The whole refractory lining (hearth, bosh, stack) is torn out and rebuilt. The furnace is emptied down to the tuyeres and the left-over iron at the hearth bottom (salamander) is tapped out. Longest stop, every few years to decades.' },
    hearth: { name: 'Hearth repair', kind: 'deep', type: 'Deep blowdown (to tuyere level)', idx: 3, cokeUp: 0.15, outage: 20, sal: 'Only if the hearth is opened',
      what: 'Hearth wall or bottom carbon blocks are repaired (thin hearth, hot spots, taphole area). Needs the furnace empty to tuyere level so the hearth can be reached; stack lining stays.' },
    stack: { name: 'Stack / shaft repair (gunning, above tuyeres)', kind: 'partial', type: 'Partial blowdown (to belly)', idx: 1, cokeUp: 0.10, outage: 4, sal: 'No',
      what: 'Worn stack lining or staves are repaired by shotcrete gunning or stave change above the belly. The stockline is lowered only to the belly so the gun can reach; bosh and hearth stay full of hot burden.' },
    tuyere: { name: 'Tuyere / cooler repairs', kind: 'bank', type: 'Banking (no stockline lowering)', idx: 0, cokeUp: 0.25, outage: 1.5, sal: 'No',
      what: 'Short stop to change tuyeres, coolers, blowpipes or do top / cast-house maintenance. The furnace is not emptied: extra coke is charged, casts taken, blast off and tuyeres sealed ("banked") so it restarts quickly.' },
    long: { name: 'Long stoppage (market / raw material)', kind: 'bank', type: 'Banking (no stockline lowering)', idx: 0, cokeUp: 0.25, outage: 10, sal: 'No',
      what: 'The furnace is held idle for days to weeks (low demand, raw-material shortage, strike). It is banked full with a coke-rich burden and sealed so the hearth stays warm enough to restart without a full blow-in.' }
  };

  // ---------- Blowdown checklist (from the reference Excel)
  var CHKS = {
    A: ['Repair scope frozen; blowdown type and target stockline agreed.',
      'Blowdown plan, blow-in plan and isolation list approved and issued to each shift.',
      'Top spray system installed and flow-tested to the required capacity; standby pump proved.',
      'Nitrogen to the top confirmed with the oxygen plant for the full duration.',
      'Stockline measurement proved to the target depth (radar / extended rods).',
      'Top gas analysers H₂, CO, CO₂, O₂ calibrated and trended in the control room.',
      'Bleeders stroked; flare / ignition ready. GCP isolation (goggle valve, water seal, bag limit) proved.',
      'Blowdown coke, coke-blank coke and quartzite segregated and in stock.',
      'Cast house ready: tapholes, drill + spare, mud gun, runners, ladles, slag capacity.',
      'Leaking tuyeres / coolers identified; isolation plan agreed. Water leaks into the furnace isolated.',
      'Charging matrix for the blowdown burden loaded and checked.',
      'Emergency cover in place: gas rescue, breathing apparatus, personal CO monitors, ambulance, fire tender.',
      'All crews briefed on the plan, the stop rules and the abnormal situations.'],
    B: ['Blowdown burden started: coke-up, acid wash, centre-coke matrix.',
      'Hot-metal temperature and silicon raised to target; hearth cast dry.',
      'PCI to zero and oxygen enrichment off at T0 − 4 h; top pressure lowered; TRT to bypass.',
      'Coke blank charged (deep blowdown only).',
      'Top and gas areas cleared of people and barricaded; spray and N₂ on standby.'],
    C: ['Charging stopped at T0; blast to the shaft step; hoppers sealed with nitrogen.',
      'Top temperature held under limit: nitrogen first, then spray in small steps.',
      'H₂ and O₂ watched continuously; blast cut rather than water added if spray reaches capacity.',
      'Gas moved from GCP to bleeder at the planned level; bag filter isolated.',
      'Blast stepped down by zone (see the timeline); casts taken on schedule.',
      'Target stockline reached; final cast drilled and held open until it blew.',
      'Spray stopped, then blast off, back-draught and purge completed.',
      'Salamander tapped (reline).']
  };

  /* ---------- Emergency scenarios.
     Each step: k = sit (what happens) | see (what you see) | act (what you do) | ok (recovered),
     s = changes to the 3D state (kept until changed again). State keys used by bd-3d.js:
     blast 0–1, sl 0–1 (stockline as fraction of tuyere depth), topT °C, h2 %, o2 %, spray 0–1, n2 0–1,
     route gcp|bleeder|stopped, leak, bubbles, hot, shellSpray, hang 0|1|2, channel, tap 0|1|2(frozen)|3(lance),
     air, bagHot, flame 0–1, back (gas back-flow), co (CO cloud), down (person down), dark (dark tuyeres 0–1), steam, x = extra gauges */
  var SC = [
    { id: 'top', grp: 'Blowdown', c: '#ff5a4a', title: 'Top temperature runaway',
      why: 'The stockline falls into the belly or bosh while blast is still high. A short column absorbs little heat, so the top gas gets hotter faster than nitrogen and spray can cool it.',
      steps: [
        { k: 'sit', t: 'Stockline enters the belly at shaft blast', d: 'Column is short now, but blast is still at the shaft step. Hot gas reaches the top almost un-cooled.', s: { sl: .72, blast: .75, topT: 300, spray: .55, n2: .5, route: 'gcp', h2: 6 } },
        { k: 'see', t: 'Top temperature climbs past the limit', d: 'Top T alarm, bag inlet hot, spray already near capacity. H₂ starts rising with the extra water.', s: { sl: .78, topT: 430, spray: .95, h2: 9.5 } },
        { k: 'act', t: '1 · Nitrogen to maximum at the top', d: 'All lances, BLT and throat platform N₂ fully open. N₂ cools by dilution and adds no H₂.', s: { n2: 1, topT: 400 } },
        { k: 'act', t: '2 · Cut blast one step', d: 'Drop to the belly step. Less blast = less hot gas = the top cools within minutes. Never chase it with more water.', s: { blast: .6, topT: 360 } },
        { k: 'act', t: '3 · Gas to the bleeder, isolate the bag filter', d: 'Protect the bag cloth: open bleeder, close the GCP inlet (goggle / water seal).', s: { route: 'bleeder', topT: 340 } },
        { k: 'ok', t: 'Top held under limit · continue at the lower step', d: 'Spray back to small steps, H₂ falling. Re-plan the remaining timeline at this blast.', s: { topT: 320, spray: .5, h2: 6.5 } }
      ],
      signs: ['Top gas T rising more than ~20 °C in 15 min', 'Spray at or near capacity and T still rising', 'Bag / GCP inlet T near its limit', 'H₂ rising with spray water'],
      now: ['N₂ at the top to maximum', 'Cut blast one step (do not add water beyond the planned step)', 'Gas to bleeder if on dry GCP; isolate bag filter', 'Tell the control room shift in-charge; log time and values'],
      then: ['Hold the new blast until T is stable 30 min', 'Re-plan the rest of the timeline at the lower blast', 'Check spray nozzles are all working (a blocked nozzle gives a hot sector)'],
      dont: ['Do not open spray to full in one step — water floods the burden and makes H₂', 'Do not raise blast to "finish faster"', 'Nobody on the top platform while T is above limit'] },

    { id: 'h2', grp: 'Blowdown', c: '#8fd3ff', title: 'High H₂ in top gas (water in the furnace)',
      why: 'Water reaching hot coke makes hydrogen (C + H₂O → CO + H₂). The source is too much spray, or a leaking tuyere, stave or cooler pouring water inside. H₂ widens the explosive range of the top gas.',
      steps: [
        { k: 'sit', t: 'A stave cooler starts leaking inside', d: 'Water drips onto the hot burden; with the spray on, steam and hydrogen build up in the top gas.', s: { sl: .62, blast: .75, topT: 270, spray: .6, n2: .6, route: 'gcp', h2: 7, leak: 1, bubbles: 1 } },
        { k: 'see', t: 'H₂ above the 12% action limit', d: 'H₂ alarm. Water flow IN is higher than OUT on one cooling circuit. Steam at a tuyere peep sight.', s: { h2: 13.5, x: { wf: 18 } } },
        { k: 'act', t: '1 · Stop the spray', d: 'Stop adding water at once. Hold the top with nitrogen only.', s: { spray: 0, n2: 1, h2: 12 } },
        { k: 'act', t: '2 · Gas to the bleeder', d: 'Take the hydrogen-rich gas off the GCP and out of the gas net.', s: { route: 'bleeder' } },
        { k: 'act', t: '3 · Find and isolate the leaking cooler', d: 'Compare water in/out per circuit; close the leaking element to minimum flow per SOP.', s: { leak: 0, bubbles: .3, h2: 9, x: { wf: 2 } } },
        { k: 'act', t: '4 · Cut blast if the top heats without spray', d: 'One blast step down keeps the top under limit with N₂ alone.', s: { blast: .6, topT: 300 } },
        { k: 'ok', t: 'H₂ below 8% · spray back in small steps', d: 'Restart spray only after H₂ is falling and the leak is isolated.', s: { h2: 6.5, bubbles: 0, spray: .3 } }
      ],
      x: [{ k: 'wf', l: 'Water in−out', u: 'm³/h', w: 3, b: 8 }],
      signs: ['H₂ rising faster than the spray change explains', 'Water in > water out on a cooling circuit', 'Steam or wet / dark tuyere at the peep sight', 'Top gas CO₂ drops, H₂ climbs'],
      now: ['Stop the spray', 'Gas to bleeder, N₂ to maximum', 'Locate the leaking element (flow balance) and isolate', 'If top T rises: cut blast one step'],
      then: ['Restart spray only below 8% H₂ and falling', 'Log the leaking element for replacement in the repair', 'Increase H₂ watch to every 5 min'],
      dont: ['Do not keep spraying "to hold the top" above 12% H₂', 'Do not shut a hot cooler completely without the SOP (burn-through)', 'Do not stay near bleeders / explosion doors'] },

    { id: 'o2', grp: 'Blowdown', c: '#ff3d00', title: 'O₂ in top gas — air ingress (explosion risk)',
      why: 'At low top pressure air can be sucked in through open hoppers, seals, inspection doors or a bleeder. Air in CO + H₂ gas makes an explosive mixture inside the top, uptakes and gas cleaning.',
      steps: [
        { k: 'sit', t: 'Top pressure low · a seal is leaking', d: 'Air is drawn into the top through a hopper seal / open door while CO and H₂ are high.', s: { sl: .55, blast: .7, topT: 260, spray: .4, n2: .4, route: 'gcp', h2: 8, o2: .35, air: 1 } },
        { k: 'see', t: 'O₂ above 0.5% — explosion danger', d: 'O₂ alarm on the top gas analyser. Combustible gas + oxygen = explosive mixture.', s: { o2: .9 } },
        { k: 'act', t: '1 · Stop spray, N₂ to maximum everywhere', d: 'Flood the top, hoppers and uptakes with nitrogen to push O₂ down and dilute the gas.', s: { spray: 0, n2: 1, o2: .7 } },
        { k: 'act', t: '2 · Close the air path, keep positive pressure', d: 'Close inspection doors, check hopper seal valves and N₂ to hoppers. Keep a small positive top pressure.', s: { air: 0, o2: .45 } },
        { k: 'act', t: '3 · Clear the top area · gas to bleeder', d: 'Everyone off the top and gas areas; no ignition sources; gas off GCP.', s: { route: 'bleeder', o2: .3 } },
        { k: 'ok', t: 'O₂ below 0.5% and falling', d: 'If O₂ does not fall within minutes → blast off and N₂ purge per SOP.', s: { o2: .15 } }
      ],
      signs: ['O₂ in top gas above 0.5%', 'Top pressure near zero or negative', 'Hissing at seals, open doors at the top'],
      now: ['Stop spray; N₂ to maximum (top, hoppers, uptakes)', 'Close the air path; keep positive top pressure', 'Clear the top and gas areas of people; no hot work', 'Gas to bleeder'],
      then: ['If O₂ stays above limit: blast off and purge with N₂', 'Re-check analyser (sample line leak can read high)', 'Investigate before restarting'],
      dont: ['Never open top manholes or inspection doors during a blowdown', 'Never stop nitrogen to the top while gas is present', 'No welding, cutting or vehicles near gas lines'] },

    { id: 'hang', grp: 'Blowdown', c: '#ffb547', title: 'Hanging and slip',
      why: 'In a short, coke-rich column the burden can bridge (hang) and stop descending. When the bridge breaks the whole column drops at once (slip), pushing a gas surge to the top.',
      steps: [
        { k: 'sit', t: 'Burden stops descending (hanging)', d: 'Stockline rods stop moving. Blast pressure rises, top pressure falls, top T becomes erratic.', s: { sl: .45, blast: .75, topT: 250, spray: .35, n2: .6, route: 'gcp', h2: 6, hang: 1, x: { bp: 2.6 } } },
        { k: 'act', t: '1 · Reduce blast one step', d: 'Lower the pressure difference so the bridge can settle on its own. Keep N₂ on.', s: { blast: .6, x: { bp: 2.1 } } },
        { k: 'sit', t: 'Slip — the column drops suddenly', d: 'Gas surge: top pressure spike, bleeder may lift, dust puff, top T jumps.', s: { hang: 2, sl: .6, topT: 340, x: { bp: 1.6 } } },
        { k: 'act', t: '2 · Check bleeders re-closed, stockline new depth', d: 'Confirm bleeders re-seat, read the new stockline, re-sync the timeline from the new depth.', s: { topT: 300, route: 'gcp' } },
        { k: 'act', t: '3 · Small spray steps only', d: 'Fresh hot surface after a slip — add water slowly to avoid an H₂ jump.', s: { spray: .35 } },
        { k: 'ok', t: 'Steady descent at the lower blast', d: 'Hold the step 30 min before returning to plan.', s: { hang: 0, topT: 280, x: { bp: 1.9 } } }
      ],
      x: [{ k: 'bp', l: 'Blast press.', u: 'bar', w: 2.4, b: 2.55 }],
      signs: ['Stockline not moving for 2 readings', 'Blast pressure up, top pressure down', 'Sudden top pressure spike / bleeder lifting (slip)'],
      now: ['Reduce blast one step', 'Keep N₂ on; spray in small steps', 'After a slip: check bleeders and new stockline'],
      then: ['Re-sync the timeline to the new depth', 'If repeated: hold lower blast, consider a controlled check (short blast reduction) per SOP'],
      dont: ['Do not raise blast to "push" the burden down', 'Nobody at the top or near bleeders', 'Do not open full spray after a slip'] },

    { id: 'channel', grp: 'Blowdown', c: '#c3d0dd', title: 'Gas channelling & dust blow-out',
      why: 'Gas finds an easy path (centre or wall) through the shortening column. One sector gets very hot and gas speed throws coke and dust into the gas system.',
      steps: [
        { k: 'sit', t: 'A gas channel opens through the column', d: 'Hot gas jets up one side; the rest of the burden is bypassed.', s: { sl: .5, blast: .75, topT: 290, spray: .45, n2: .6, route: 'gcp', h2: 6, channel: 1, x: { dt: 160 } } },
        { k: 'see', t: 'One top probe very hot, dust carry-over', d: 'Top T spread between probes is large; dust catcher fills fast; gas analysis scatters.', s: { topT: 360, x: { dt: 210 } } },
        { k: 'act', t: '1 · Cut blast one step', d: 'Lower gas velocity closes the channel and stops material blowing out.', s: { blast: .55, x: { dt: 110 } } },
        { k: 'act', t: '2 · N₂ up, keep spray even', d: 'Hold the hot sector with nitrogen; check all spray nozzles work.', s: { n2: 1, topT: 320 } },
        { k: 'ok', t: 'Even top temperatures again', d: 'Channel closed; continue at the lower step.', s: { channel: 0, topT: 290, x: { dt: 50 } } }
      ],
      x: [{ k: 'dt', l: 'Top T spread', u: '°C', w: 120, b: 180 }],
      signs: ['Large spread between top T probes', 'Dust catcher / GCP dust load high', 'Low CO₂ in top gas, unstable pressure'],
      now: ['Cut blast one step', 'N₂ to maximum, check spray nozzles', 'Watch dust catcher level'],
      then: ['Hold until probes even out', 'Empty dust catcher more often'],
      dont: ['Do not increase blast', 'Do not over-spray the hot sector'] },

    { id: 'bag', grp: 'Blowdown', c: '#ff7a1a', title: 'GCP bag filter overheating',
      why: 'With a dry gas cleaning plant, gas above the bag limit burns the filter cloth and can start a bag-house fire.',
      steps: [
        { k: 'sit', t: 'Gas still on GCP, inlet near the bag limit', d: 'Stockline nearing the belly top; bag inlet T climbing.', s: { sl: .66, blast: .75, topT: 255, spray: .5, n2: .7, route: 'gcp', h2: 6, x: { bt: 250 } } },
        { k: 'see', t: 'Bag inlet above limit · ΔP rising', d: 'High bag inlet T alarm; a hot-spot or spark detector may trip.', s: { bagHot: 1, topT: 285, x: { bt: 285 } } },
        { k: 'act', t: '1 · Gas to the bleeder now', d: 'Open bleeder, close GCP inlet — goggle / water seal per SOP.', s: { route: 'bleeder' } },
        { k: 'act', t: '2 · Inertise the bag house', d: 'N₂ purge of the bag house; isolate the hot chamber.', s: { bagHot: 0, x: { bt: 180 } } },
        { k: 'ok', t: 'Bag house cool and isolated', d: 'Blowdown continues on the bleeder.', s: { topT: 300, x: { bt: 90 } } }
      ],
      x: [{ k: 'bt', l: 'Bag inlet T', u: '°C', w: 240, b: 260 }],
      signs: ['Bag inlet T at or above the bag limit', 'Rising ΔP across the bags', 'Spark / hot-spot detector alarm'],
      now: ['Divert gas to bleeder', 'Isolate GCP inlet', 'N₂ purge the bag house'],
      then: ['Inspect bags before the next use', 'Next time divert earlier (see timeline Gas column)'],
      dont: ['Do not "hold on GCP a bit longer" above the limit', 'Do not open a hot bag chamber (air → fire)'] },

    { id: 'trip', grp: 'Blowdown', c: '#b4ecec', title: 'Blower trip / power failure',
      why: 'Blast is lost suddenly. Furnace gas can flow back through the tuyeres into the blowpipes and blast main; slag and iron can run into cold tuyeres; the spray now has no gas to evaporate it.',
      steps: [
        { k: 'sit', t: 'Blower trips — blast goes to zero', d: 'Tuyere flames die, blast pressure collapses; gas starts to flow backwards.', s: { sl: .5, blast: 0, flame: 0, back: 1, topT: 220, spray: .5, n2: .6, route: 'gcp', h2: 7, x: { bp: .1 } } },
        { k: 'act', t: '1 · Snort valve open, hot blast valves closed', d: 'Isolate the stoves from the furnace so gas cannot reach them.', s: { back: .5 } },
        { k: 'act', t: '2 · Stop spray, bleeders open, N₂ on', d: 'No blast to carry water up — water would pool. Gas to bleeder, keep positive pressure with N₂.', s: { spray: 0, route: 'bleeder', n2: 1, back: .2 } },
        { k: 'act', t: '3 · Watch the tuyeres', d: 'Check for slag/iron entering tuyeres; keep peep sights closed; prepare to cast.', s: { back: 0, dark: 1 } },
        { k: 'ok', t: 'Restart at low blast — or blast off', d: 'After checks, restore blast slowly (back-draught first), or decide a controlled blast-off.', s: { blast: .4, flame: .6, dark: 0, x: { bp: 1.2 } } }
      ],
      x: [{ k: 'bp', l: 'Blast press.', u: 'bar', w: .6, b: .3, low: true }],
      signs: ['Cold blast flow drops to zero', 'Tuyeres go dark', 'Blast pressure collapses; power / blower trip alarm'],
      now: ['Snort valve open, hot blast valves closed', 'Stop spray; gas to bleeder; N₂ to maximum', 'Check tuyeres for slag entry'],
      then: ['Restore blast slowly after back-draught, or controlled blast-off', 'Re-plan the remaining timeline'],
      dont: ['Do not leave spray running without blast', 'Do not open tuyere peep sights without face protection', 'Do not let gas reach the stoves'] },

    { id: 'water', grp: 'Blowdown', c: '#5fb8ff', title: 'Cooling water failure',
      why: 'Pump trip or header pressure loss. Staves and tuyeres heat within minutes; a dry red-hot cooler can burn through and later explode if water returns suddenly.',
      steps: [
        { k: 'sit', t: 'Cooling header pressure drops', d: 'Pump trip — flow to staves and tuyeres falls.', s: { sl: .5, blast: .7, topT: 260, spray: .4, n2: .6, route: 'gcp', h2: 6, x: { cw: 1.2 } } },
        { k: 'see', t: 'Coolers heat up, steam at tuyeres', d: 'Water outlet T rising fast; steam plumes at tuyeres.', s: { steam: 1, hot: .5, x: { cw: .6 } } },
        { k: 'act', t: '1 · Emergency water on', d: 'Overhead tank / diesel pump to the tuyeres first, then staves.', s: { x: { cw: 3.5 } } },
        { k: 'act', t: '2 · Cut blast (or blast off)', d: 'Less heat load while cooling is weak.', s: { blast: .35, steam: .4, hot: .2 } },
        { k: 'ok', t: 'Cooling restored step by step', d: 'Bring circuits back gradually per SOP; check each for leaks (H₂).', s: { steam: 0, hot: 0, blast: .5, x: { cw: 5 } } }
      ],
      x: [{ k: 'cw', l: 'CW header', u: 'bar', w: 3, b: 2, low: true }],
      signs: ['Header pressure / flow low alarm', 'Outlet water T rising', 'Steam at tuyeres or stave pipes'],
      now: ['Emergency water to tuyeres first', 'Cut blast or blast off', 'Inform utilities'],
      then: ['Restore circuits gradually', 'Check every circuit for leaks before full blast'],
      dont: ['Never slam full water into a dry, red-hot cooler — steam explosion', 'Do not keep full blast on weak cooling'] },

    { id: 'tuyere', grp: 'Blowdown', c: '#3cc6c4', title: 'Tuyere burn / leaking tuyere',
      why: 'Liquid iron touches the tuyere nose and burns through. Cooling water then sprays into the raceway — H₂, chilling and a risk of a blow-out at the tuyere.',
      steps: [
        { k: 'sit', t: 'A tuyere nose burns through', d: 'Water enters the raceway in front of the tuyere.', s: { sl: .4, blast: .75, topT: 250, spray: .3, n2: .6, route: 'gcp', h2: 7.5, leak: .6, steam: .6, x: { wf: 6 } } },
        { k: 'see', t: 'Dark tuyere, water in > out, H₂ up', d: 'Peep sight dark or wet; flow imbalance on that tuyere.', s: { h2: 10, dark: .15, x: { wf: 9 } } },
        { k: 'act', t: '1 · Reduce water to that tuyere to minimum', d: 'Keep it just cooled while limiting the leak (SOP flow).', s: { leak: .2, x: { wf: 2 } } },
        { k: 'act', t: '2 · Cut blast one step', d: 'Lower the heat load; watch H₂.', s: { blast: .6, h2: 8 } },
        { k: 'ok', t: 'Leak controlled · replace in the repair', d: 'In a blowdown the tuyere is changed after blast off.', s: { steam: 0, leak: 0, h2: 6, dark: 0, x: { wf: 1 } } }
      ],
      x: [{ k: 'wf', l: 'Tuyere in−out', u: 'm³/h', w: 2, b: 5 }],
      signs: ['Dark or wet tuyere at the peep sight', 'Water in > out on one tuyere', 'H₂ rising, steam at the tuyere'],
      now: ['Water to that tuyere to minimum (SOP)', 'Cut blast one step', 'Watch H₂; stop spray if above 12%'],
      then: ['Change the tuyere at blast off', 'Inspect neighbouring tuyeres'],
      dont: ['Do not shut its water completely (burn-through)', 'Do not stand in front of the tuyere / blowpipe'] },

    { id: 'hot', grp: 'Blowdown', c: '#ff2a1a', title: 'Shell hot spot / breakout risk',
      why: 'A thin hearth or stave lining lets heat reach the steel shell. If the shell gets red-hot it can tear and liquid iron breaks out.',
      steps: [
        { k: 'sit', t: 'Hearth shell temperature rising', d: 'Thermocouples / thermal camera show a hot patch at hearth level.', s: { sl: .5, blast: .7, topT: 260, spray: .4, n2: .6, route: 'gcp', h2: 6, hot: .6, x: { st: 95 } } },
        { k: 'see', t: 'Shell glowing — breakout danger', d: 'Shell T far above normal, paint burnt off, red patch.', s: { hot: 1, x: { st: 260 } } },
        { k: 'act', t: '1 · Clear and barricade the area', d: 'Nobody in front of or below the hot spot.', s: {} },
        { k: 'act', t: '2 · Cast to lower the liquid, cut blast', d: 'Less liquid head against the wall; less heat. Open the nearest taphole.', s: { blast: .4, tap: 1 } },
        { k: 'act', t: '3 · External shell cooling', d: 'Water spray on the shell from a safe distance, only the hot area; max flow to that cooling zone.', s: { shellSpray: 1, hot: .5, x: { st: 140 } } },
        { k: 'ok', t: 'Shell cooling down', d: 'If a breakout happens: blast off, evacuate, keep water away from flowing iron.', s: { hot: .2, tap: 0, x: { st: 85 } } }
      ],
      x: [{ k: 'st', l: 'Shell T', u: '°C', w: 80, b: 150 }],
      signs: ['Shell thermocouple rising, paint discolouring', 'Hearth thermocouples high', 'Steam from staves near the spot'],
      now: ['Clear & barricade the area', 'Cast to drop the liquid level; cut blast', 'External water spray from a distance'],
      then: ['Plan the repair at that spot', 'Keep the area restricted until cold'],
      dont: ['Never put water on liquid iron that has broken out', 'Do not stand below or in line with the hot spot'] },

    { id: 'frozen', grp: 'Blowdown', c: '#9aa7b8', title: 'Hearth chilling — final cast won\'t run',
      why: 'At the end of a deep blowdown the hearth is cold (too little coke-up, wet burden, long delays). Iron and slag freeze; the taphole drill hits solid and nothing runs.',
      steps: [
        { k: 'sit', t: 'Target stockline · final cast drilled', d: 'Drill goes in, only gas or a little sticky slag comes out.', s: { sl: 1, blast: .3, topT: 340, spray: .2, n2: 1, route: 'bleeder', h2: 7, tap: 2 } },
        { k: 'see', t: 'Hearth frozen — no iron', d: 'Cold, viscous slag; taphole freezes behind the drill.', s: { x: { ht: 1180 } } },
        { k: 'act', t: '1 · Oxygen-lance the taphole', d: 'Trained crew, full face shield and aluminised suit; lance in short bursts.', s: { tap: 3 } },
        { k: 'act', t: '2 · Keep minimum blast for heat', d: 'If allowed by SOP, hold low blast so the remaining coke keeps the hearth hot.', s: { blast: .25 } },
        { k: 'ok', t: 'Iron runs', d: 'If still frozen: open a lower hole (salamander level) and lance from there.', s: { tap: 1, x: { ht: 1420 } } }
      ],
      x: [{ k: 'ht', l: 'Iron T', u: '°C', w: 1350, b: 1250, low: true }],
      signs: ['Taphole drill hits solid', 'Only gas / sticky slag at the taphole', 'Low hot-metal temperature in last casts'],
      now: ['Oxygen lance with trained crew and full PPE', 'Hold minimum blast for heat (if SOP allows)', 'Prepare a lower opening'],
      then: ['Salamander plan: cut a hole 0.3–0.6 m below the taphole', 'Record for next blowdown: coke-up, HM temperature, delays'],
      dont: ['No water anywhere near the taphole / salamander area', 'Do not stand in line with the lance or taphole'] },

    { id: 'co', grp: 'Blowdown & blow-in', c: '#72c784', title: 'CO gas leak in the work area',
      why: 'During blowdown and blow-in the furnace runs at low, changing pressure: CO leaks at tuyere stocks, flanges, the cast house and gas lines. CO has no colour or smell and kills quickly.',
      steps: [
        { k: 'sit', t: 'CO leaks at the tuyere platform', d: 'A worker without a monitor feels dizzy and collapses.', s: { sl: .5, blast: .6, topT: 260, spray: .4, n2: .6, route: 'gcp', h2: 6, co: 1, down: 1, x: { co: 320 } } },
        { k: 'see', t: 'Personal CO monitor alarm', d: 'Alarm at the area; colleague sees the person down.', s: {} },
        { k: 'act', t: '1 · Raise the alarm, do NOT rush in', d: 'Call the gas rescue team. Rescuers go in only with breathing apparatus, in pairs.', s: {} },
        { k: 'act', t: '2 · Casualty to fresh air, oxygen', d: 'Carry upwind, give oxygen, CPR if not breathing, ambulance to hospital.', s: { down: 2 } },
        { k: 'act', t: '3 · Isolate the leak, ventilate', d: 'Find and stop the source; ventilate; gas-test before anyone returns.', s: { co: .3, x: { co: 40 } } },
        { k: 'ok', t: 'Area gas-free · re-entry permitted', d: 'Only after a gas test below the plant limit.', s: { co: 0, down: 0, x: { co: 12 } } }
      ],
      x: [{ k: 'co', l: 'CO in area', u: 'ppm', w: 25, b: 50 }],
      signs: ['Personal CO monitor alarm', 'Headache, dizziness, nausea, confusion', 'Person down without visible cause'],
      now: ['Alarm, evacuate upwind', 'Rescue only with breathing apparatus, two persons', 'Fresh air + oxygen + CPR; medical help'],
      then: ['Isolate and repair the leak', 'Gas test before re-entry; review why the monitor was missing'],
      dont: ['Never enter a gas area to rescue without BA — most CO deaths are rescuers', 'Never work alone in gas areas'] },

    { id: 'bitu', grp: 'Blow-in', c: '#3ccf8e', title: 'Blow-in: tuyeres dark / no ignition',
      why: 'At first blast some tuyeres stay dark: blocked by coke fines, clay or slag, or the coke in front has not lit. The furnace then heats unevenly and can hang.',
      steps: [
        { k: 'sit', t: 'Blast on — several tuyeres stay dark', d: 'Only part of the tuyere ring is burning.', s: { sl: .05, blast: .3, topT: 120, spray: 0, n2: .4, route: 'bleeder', h2: 3, dark: .45, flame: .5 } },
        { k: 'see', t: 'Uneven ring, high blast pressure', d: 'Dark peep sights, blast pressure higher than expected for the flow.', s: { x: { bp: 1.4 } } },
        { k: 'act', t: '1 · Keep blast low', d: 'Do not force more blast through the open tuyeres.', s: {} },
        { k: 'act', t: '2 · Clear the blocked tuyeres', d: 'Rod / oxygen-lance through the peep sight per SOP, or plug them and blow on fewer tuyeres.', s: { dark: .1, flame: .8 } },
        { k: 'ok', t: 'All tuyeres bright', d: 'Raise blast in 10% steps every 2 h.', s: { dark: 0, flame: 1, blast: .4, x: { bp: 1.0 } } }
      ],
      x: [{ k: 'bp', l: 'Blast press.', u: 'bar', w: 1.25, b: 1.5 }],
      signs: ['Dark peep sights after blast on', 'Blast pressure high for the flow', 'Top T not rising on one side'],
      now: ['Keep blast low', 'Clear or plug blocked tuyeres', 'Gas stays on bleeder until analysis is steady'],
      then: ['Raise blast in steps while all tuyeres burn', 'Check gas ignites at the bleeder flare'],
      dont: ['Do not raise blast to "light" dark tuyeres', 'Do not look into a peep sight without a face shield'] },

    { id: 'bicold', grp: 'Blow-in', c: '#3ccf8e', title: 'Blow-in: first cast too cold',
      why: 'The first iron and slag of a blow-in are cold and viscous (heat used to dry and heat the new lining). The taphole can freeze and slag can build up in the hearth.',
      steps: [
        { k: 'sit', t: 'First cast after blow-in', d: 'Iron runs slowly, slag sticky; runner crusts.', s: { sl: .05, blast: .5, topT: 150, spray: 0, n2: .4, route: 'bleeder', h2: 3, tap: 1, x: { ht: 1290 } } },
        { k: 'see', t: 'Taphole starts to freeze', d: 'Flow stops; slag freezing in the runner.', s: { tap: 2, x: { ht: 1230 } } },
        { k: 'act', t: '1 · Oxygen-lance the taphole', d: 'Keep the taphole open; clear the runner.', s: { tap: 3 } },
        { k: 'act', t: '2 · More heat to the hearth', d: 'Raise coke rate, lighter ore/coke, keep lime-rich fluid slag; no PCI yet.', s: { blast: .55 } },
        { k: 'ok', t: 'Iron hotter each cast', d: 'Normal casting once HM is above ~1400 °C and slag is fluid.', s: { tap: 1, x: { ht: 1410 } } }
      ],
      x: [{ k: 'ht', l: 'Iron T', u: '°C', w: 1350, b: 1280, low: true }],
      signs: ['Low hot-metal temperature', 'Sticky slag, crust in runners', 'Taphole closing behind the stream'],
      now: ['Oxygen lance with full PPE', 'Raise coke rate / lighter burden', 'Cast more often'],
      then: ['Return to normal coke rate only after hot, fluid casts'],
      dont: ['Do not start PCI or oxygen enrichment early', 'Keep runners and ladles dry'] }
  ];

  // ---------- Safety aspects
  var SAFE = [
    { i: '☁', t: 'Gas hazards you are dealing with',
      table: { h: ['Gas', 'Danger', 'Typical limits / bands'], r: [
        ['Carbon monoxide (CO)', 'Toxic, no colour or smell. Main killer around blast furnaces.', 'Below 25 ppm normal work · 25–50 ppm limited time, find the source · above 50 ppm breathing apparatus only · evacuate at the plant alarm level'],
        ['Hydrogen (H₂)', 'Explosive 4–75% in air; made by water on hot coke.', 'Top gas H₂ action limit 12% (stop spray, bleeder)'],
        ['Oxygen in top gas (O₂)', 'Turns combustible gas explosive.', 'Below 0.5% always; above → N₂, close air path, blast off if it stays'],
        ['Nitrogen (N₂)', 'Asphyxiant — no warning, sudden collapse.', 'Safe air 19.5–23.5% O₂; never enter N₂-purged spaces without BA'],
        ['Blast-furnace gas', 'Combustible and explosive when mixed with air.', 'Gas-free test before entry: CO below plant limit, O₂ 19.5–23.5%, combustibles below 10% LEL (0% for hot work)'],
        ['Steam / hot water', 'Burns; steam explosion when water meets molten iron or a red-hot cooler.', 'Keep cast house, salamander area and runners dry']] },
      note: 'Bands are typical. Your plant gas-safety standard and statutory limits govern.',
      items: ['Every person in gas areas carries a calibrated personal CO monitor.', 'Fixed CO / H₂ / O₂ analysers at the top, tuyere platform and cast house trended in the control room.', 'Gas-zone map (red / amber / green) displayed at every entry point.', 'Wind direction indicator visible; assembly points upwind.'] },
    { i: '📋', t: 'Permits, isolation and approvals before T0',
      items: ['Blowdown and blow-in plans approved by the BF head and safety officer, issued to each shift.', 'Permit-to-work system active for every job; no work without a permit during the blowdown.', 'Isolation list: gas (goggle valves, water seals, blinds), blast, water, power, N₂ — each lock-out / tag-out signed.', 'Hot-work permits suspended near gas lines during blowdown and purge.', 'Job hazard analysis (JHA / HIRA) done for spray, salamander tapping, dig-out and relining.', 'Contractor crews inducted on gas hazards and the emergency plan.'] },
    { i: '🚧', t: 'Zones, barricades and access control',
      items: ['Exclusion zones barricaded: furnace top, bleeder area, gas cleaning plant, tuyere platform, cast house.', 'Only named essential persons in red zones; headcount board / tag system at entry.', 'No one in line with bleeders, explosion doors, tapholes, tuyeres or the slag runner.', 'Escape routes and stairways clear and lit (emergency lighting checked).', 'Two-person rule in all gas zones; no lone working.'] },
    { i: '🦺', t: 'Personal protective equipment by area',
      table: { h: ['Area / job', 'Minimum PPE'], r: [
        ['All furnace areas', 'Helmet, FR clothing, safety shoes, goggles, gloves, personal CO monitor'],
        ['Cast house, tapping, lancing', 'Aluminised suit / apron, face shield, heat-resistant gloves, leggings'],
        ['Furnace top / gas areas', 'Breathing apparatus (SCBA / airline) as per gas test, CO monitor, harness at height'],
        ['Tuyere platform', 'Face shield for peep sights, FR clothing, CO monitor'],
        ['Confined space entry (after purge)', 'Gas test, BA standby, harness and lifeline, attendant outside'],
        ['Spray / water work', 'Face shield, waterproofs, non-slip shoes']] },
      items: ['BA sets checked, charged and counted; trained wearers listed per shift.', 'Spare CO monitors and bump-test station available.'] },
    { i: '⛔', t: 'Stop rules during the blowdown',
      items: ['H₂ above 12% → stop spray, gas to bleeder.', 'O₂ above 0.5% → stop spray, N₂ to maximum, close air path; blast off if it does not fall.', 'Top T above limit with spray at capacity → cut blast, never add more water.', 'Spray water never added faster than the planned step; nitrogen first, spray second.', 'Loss of blast → stop spray immediately.', 'Any person unaccounted for → stop and search before continuing.'] },
    { i: '🔥', t: 'Cast house, final cast and salamander',
      items: ['Runners, ladles, slag pots and the salamander area completely dry; no water hoses near.', 'Final cast: taphole held open until it blows gas — stand clear of the gas jet.', 'Oxygen lancing only by trained persons with full PPE; oxygen hoses checked, no grease.', 'Salamander tapped into dry sand beds or ladles; area barricaded during and after tapping.', 'Never step on solidified crust — liquid may be under it.'] },
    { i: '💨', t: 'After blast off — purging, gas-free and entry',
      items: ['Back-draught and N₂ / steam purge until top gas CO and combustibles are near zero.', 'Positive isolation of gas mains (goggle valve / blind) before any entry.', 'Gas test at several heights inside the furnace: CO, O₂, combustibles — recorded on the entry permit.', 'Confined-space entry permit, attendant outside, rescue plan and tripod / lifeline ready.', 'Continuous gas monitoring during dig-out and relining; ventilation fans running.', 'Hot burden dig-out: watch for hidden hot coke and steam pockets; water quenching only from a distance.'] },
    { i: '🌅', t: 'Blow-in safety',
      items: ['All persons out of the furnace, all manholes closed and counted before blast on.', 'Gas to bleeder with flare / ignition burning until analysis is steady and O₂ nil — then to GCP.', 'Purge gas lines with N₂ before admitting BF gas (no air–gas mixture).', 'Stove changeovers by SOP only; hot blast valve interlocks checked.', 'First casts: extra crew, full PPE, dry runners; expect cold, sticky iron and slag.', 'Tuyere platform: watch for leaks and dark tuyeres; face shield at peep sights.'] },
    { i: '🚑', t: 'Emergency response and rescue',
      items: ['Emergency plan briefed: alarms, assembly points, head-count, who calls whom.', 'Gas rescue team with BA, resuscitator and stretcher on standby for the whole blowdown and blow-in.', 'Ambulance, fire tender and first-aid post at the furnace; route to hospital agreed.', 'CO poisoning first aid: casualty to fresh air, oxygen, CPR if needed, hospital — even if they feel better.', 'Burns first aid: cool with clean water (not on molten metal areas), cover, hospital.', 'Rescuers never enter a gas area without breathing apparatus.'] },
    { i: '📡', t: 'Communication and roles',
      items: ['One blowdown in-charge with authority to stop; named for each shift.', 'Radio channel reserved for the blowdown; radio checks every hour.', 'Control room logs every 15–30 min: stockline, blast, top T, spray, H₂, O₂, gas route.', 'Shift handover in writing with the current step and any open issues.', 'Utilities (N₂, water, power) and the oxygen plant on direct line.'] },
    { i: '🌿', t: 'Environment',
      items: ['Bleeder gas flared where possible; flaring announced to neighbours / authorities as required.', 'Dust from the dust catcher and GCP handled and stored covered.', 'Spray and quench water contained; no discharge to drains without treatment.', 'Noise from bleeders and blow-down announced to nearby work areas.'] }
  ];

  window.BD = { STOPS: STOPS, CHKS: CHKS, SC: SC, SAFE: SAFE };
})();
