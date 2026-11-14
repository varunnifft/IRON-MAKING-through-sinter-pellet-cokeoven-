/* Coke Improvement Planner engine: the calculations of Coke_Improvement_Planner_2.xlsx
   (Inputs, Project_Settings, Benefits, Prioritisation, Plan_Strategy, Roadmap, BF_Quality).
   Rs Cr = Rs 10 million. Every default is a placeholder for a typical Indian integrated plant. */
(function (root) {
  'use strict';
  var COALS = [
    ['Prime hard coking coal (imported, low-vol)', 24000, 0.45, 0.38, 9.5, 21, 0.55, 1.35, 150, 35, 0.12],
    ['Medium hard coking coal (imported)', 21000, 0.10, 0.12, 9, 26, 0.8, 1.15, 1500, 28, 0.10],
    ['Semi-soft coking coal (imported)', 17000, 0.20, 0.25, 9.5, 34, 0.6, 0.85, 3000, 25, 0.10],
    ['Domestic washed medium coking coal', 13000, 0.20, 0.18, 17.5, 25, 0.6, 1.05, 40, 45, 0.10],
    ['Weak / non-coking coal', 11000, 0.03, 0.05, 10, 38, 0.5, 0.7, 20, 30, 0.12],
    ['Domestic high-ash washed coal (Washery Gr. III/IV)', 9500, 0, 0, 22, 24, 0.55, 1.0, 15, 48, 0.10],
    ['Petroleum coke (blend additive)', 14000, 0.02, 0.02, 0.5, 11, 5, 1.4, 1, 60, 0.30]
  ];
  var PROJECTS = [
    { id: 1, name: 'Coal blend optimisation', ben: 'Lower coal purchase cost', zone: 'tower', capex: 1, months: 3, cx: 1, risk: 2, fit: 5, conf: 0.8,
      strategy: 'Run a linear-programming blend optimiser monthly against CSR, M40, ash, S, VM and fluidity limits (use the coke quality prediction). Qualify 2-3 cheaper semi-soft coals, step substitution in 5% increments with trial ovens, and lock procurement contracts to the optimised blend.',
      steps: ['Build coal database and price file', 'Calibrate quality model on 6 months of data', 'Run optimiser for target blend', 'Trial ovens / plant trials in 5% steps', 'Update procurement plan', 'Re-run after projects 2 and 3'],
      kpis: 'Blend cost Rs/t; CSR, M40 vs limits; share of prime coal', dep: 'Re-run after projects 2, 3 and 4 change coal options or quality targets', risks: 'Quality drift from new coals - trial in steps, keep safety margin on CSR' },
    { id: 2, name: 'Coal beneficiation', ben: 'Higher usable domestic coal', zone: 'coal', capex: 60, months: 18, cx: 4, risk: 3, fit: 4, conf: 0.6,
      strategy: 'Upgrade the domestic washery (dense-medium cyclones, fines flotation, better sizing) to lift clean-coal yield at the same ash. Contract consistent raw-coal sources and grade them by washability so more domestic coal can replace imported prime coal.',
      steps: ['Washability tests on main domestic sources', 'Washery circuit audit', 'Select upgrades (DMC, flotation)', 'Capex approval', 'Install and commission', 'Raise domestic share in blend'],
      kpis: 'Washery yield %; clean-coal ash %; domestic coal share', dep: 'Feeds project 1 (more domestic coal options)', risks: 'Raw coal variability - grade sources, long-term supply contracts' },
    { id: 3, name: 'Stamp charging', ben: 'Greater low-grade coal flexibility', zone: 'charging', capex: 250, months: 24, cx: 5, risk: 4, fit: 5, conf: 0.65,
      strategy: 'Do a techno-economic feasibility study, then convert batteries during scheduled maintenance windows. Combine with crushing changes (finer crushing, 9-11% moisture) and re-optimise the blend to take more low-cost coal once cakes are stable.',
      steps: ['Feasibility and oven-structure study', 'Technology supplier selection', 'Capex approval', 'Civil and machine works per battery', 'Cake-stability trials', 'Ramp up low-cost coal share'],
      kpis: 'Bulk density t/m3; low-cost coal share; cake breakage; CSR', dep: 'Enables more low-cost coal in project 1; needs crushing changes (project 5)', risks: 'High capex and long outage - phase battery by battery; wall-pressure checks' },
    { id: 4, name: 'Coke quality optimisation', ben: 'Potential BF coke-rate reduction', zone: 'oven', capex: 3, months: 6, cx: 2, risk: 3, fit: 5, conf: 0.7,
      strategy: 'Set a CSR/ash target agreed with the blast furnace team, model it with the coke quality prediction, and control blend Ro, fluidity, inerts, bulk density and coking time. Track coke-rate response monthly to calibrate the sensitivities.',
      steps: ['Agree CSR/ash targets with BF', 'Baseline correlation of CSR with BF coke rate', 'Set blend and operating limits', 'Daily quality control', 'Monthly review of BF response'],
      kpis: 'CSR, CRI, M40, M10, ash; BF coke rate kg/tHM', dep: 'Depends on project 1 blend; CDQ (project 8) adds CSR', risks: 'BF response lower than assumed - verify sensitivity before scaling' },
    { id: 5, name: 'Coal crushing optimisation', ben: 'Lower power consumption', zone: 'crusher', capex: 2, months: 6, cx: 2, risk: 1, fit: 2, conf: 0.85,
      strategy: 'Audit size distribution and crusher settings; avoid over-crushing. Use selective or group crushing for hard coals, install VFDs on crusher drives, and set a hammer-replacement schedule from wear monitoring.',
      steps: ['Sieve analysis and power metering', 'Adjust crusher gap and speed', 'VFD retrofit', 'Selective crushing trial', 'Standardise settings'],
      kpis: 'kWh/t coal; % <3.2 mm; hammer life (t per set)', dep: 'Linked to project 3 (stamp charging needs finer crushing)', risks: 'Too coarse coal lowers coke strength - monitor M40/CSR during trials' },
    { id: 6, name: 'Coke oven heating optimisation', ben: 'Lower fuel consumption', zone: 'walls', capex: 15, months: 9, cx: 3, risk: 2, fit: 4, conf: 0.75,
      strategy: 'Balance heating first (burner and air distribution, regenerator cleaning), then cut set-point temperatures with automatic heating control and coke-end temperature measurement. Seal doors and walls to stop gas leakage.',
      steps: ['Flue temperature survey', 'Burner/air rebalancing', 'Regenerator and nozzle cleaning', 'Automatic heating control', 'Gradual set-point reduction'],
      kpis: 'kcal/kg coal; flue temp std dev; gas Nm3/t coal', dep: 'Supports project 7 (yield) and project 10 (wall life)', risks: 'Under-heating gives green coke and hard pushes - reduce set-point gradually' },
    { id: 7, name: 'Coke yield improvement', ben: 'Lower coal consumption/t coke', zone: 'oven', capex: 10, months: 9, cx: 3, risk: 2, fit: 4, conf: 0.7,
      strategy: 'Control blend VM within a narrow band, keep charge levels full and uniform, minimise oven leakage and push/handling losses, and confirm coke end-point so ovens are not over-coked.',
      steps: ['Yield loss audit (VM, leakage, pushing)', 'Charge level control', 'Door and lid sealing', 'Coking time / end-point control', 'Monthly yield reconciliation'],
      kpis: 'Dry coke yield %; coal t per t coke', dep: 'Supported by projects 6 and 10', risks: 'Under-coking to gain yield harms quality - watch coke end temperature' },
    { id: 8, name: 'CDQ and waste heat recovery', ben: 'Energy recovery', zone: 'quench', capex: 400, months: 30, cx: 5, risk: 3, fit: 4, conf: 0.75,
      strategy: 'Prepare a CDQ feasibility study with steam/power integration; apply for energy-efficiency incentives (PAT scheme credits). Meanwhile improve wet quench quality and any waste-heat boilers already in place.',
      steps: ['Steam/power demand study', 'Detailed project report', 'Capex approval and funding', 'EPC award', 'Construction', 'Commissioning and CSR benefit verification'],
      kpis: 'Steam t/t coke; CDQ availability %; CSR gain; kWh exported', dep: 'Adds CSR to project 4; overlaps with its coke-rate saving', risks: 'High capex and long build - secure funding and incentives early' },
    { id: 9, name: 'By-product recovery', ben: 'Additional revenue', zone: 'byp', capex: 40, months: 15, cx: 3, risk: 2, fit: 3, conf: 0.7,
      strategy: 'Benchmark by-product yields; upgrade primary coolers, ESP, ammonia and benzol scrubbers; tighten gas cleaning and storage losses; seek better offtake contracts for tar and benzol.',
      steps: ['By-product yield benchmark', 'Plant audit of coolers, ESP, scrubbers', 'Prioritised upgrades', 'Implement', 'Renegotiate offtake contracts'],
      kpis: 'Tar, benzol, ammonium sulphate kg/t dry coal; by-product revenue Rs Cr', dep: 'Only for by-product ovens; gas savings from project 6 add surplus COG', risks: 'By-product prices volatile - use conservative prices, term contracts' },
    { id: 10, name: 'Battery life and maintenance', ben: 'Lower repair and production losses', zone: 'pusher', capex: 25, months: 12, cx: 3, risk: 2, fit: 4, conf: 0.7,
      strategy: 'Move from breakdown to predictive maintenance: wall thermography and laser profiling, ceramic welding, door and frame maintenance, pushing-force monitoring and a long-term battery life plan.',
      steps: ['Battery condition survey', 'Predictive maintenance plan', 'Ceramic welding and door programme', 'Pushing-force and wall monitoring', 'Life-extension roadmap'],
      kpis: 'Battery-days lost; repair Rs Cr; pushing force; oven wall condition', dep: 'Supports projects 6 and 7; protects stamp charging (project 3) wall loads', risks: 'Battery condition worse than expected - early survey, contingency budget' }
  ];
  /* Inputs: [key, label, default, unit, benchmark, note, group] */
  var INPUTS = [
    ['coke', 'Gross dry coke production', 700000, 't/yr', '', 'All coke sizes, dry basis', 'A'],
    ['yield', 'Dry coke yield on dry coal (current)', 0.76, 'fraction', 0.78, 'Same basis as coke yield % db in the coke quality prediction', 'A'],
    ['moist', 'Coal charge moisture', 0.10, 'fraction', 0.09, 'Top charging 8-10%; stamp charging 9-11%', 'A'],
    ['hm', 'Blast furnace hot metal production', 1400000, 't HM/yr', '', '', 'A'],
    ['cokerate', 'BF coke rate (current)', 490, 'kg/tHM', 450, 'Skip coke + nut coke, excluding PCI', 'A'],
    ['battery', 'Battery type', 'By-product recovery', 'list:By-product recovery|Non-recovery (heat recovery)', '', '', 'A'],
    ['stamped', 'Battery already stamp charged?', 'No', 'list:Yes|No', '', 'If Yes, project 3 benefit is zero', 'A'],
    ['cdq_have', 'CDQ already installed?', 'No', 'list:Yes|No', '', 'If Yes, the CDQ part of project 8 is zero', 'A'],
    ['p_coke', 'Coke market price (for production value)', 32000, 'Rs/t', '', '', 'B'],
    ['conv', 'Coke conversion cost (excl. coal)', 1500, 'Rs/t coke', '', 'Power, fuel, labour, consumables', 'B'],
    ['power', 'Power tariff', 7.5, 'Rs/kWh', '', '', 'B'],
    ['gas_price', 'Underfiring gas price', 6, 'Rs/Nm3', '', '', 'B'],
    ['gas_cv', 'Underfiring gas calorific value', 4200, 'kcal/Nm3', '', 'COG ~4,200; mixed gas lower', 'B'],
    ['water', 'Make-up water cost', 40, 'Rs/m3', '', '', 'B'],
    ['disc', 'Discount rate', 0.12, 'fraction', '', '', 'B'],
    ['life', 'Evaluation period', 10, 'years', '', '', 'B'],
    ['scen', 'Benefit scenario', 'Base', 'list:Conservative|Base|Optimistic', '', 'Conservative 0.7x, Base 1.0x, Optimistic 1.2x', 'B'],
    ['p1_qcost', 'Extra testing / quality-control cost', 20, 'Rs/t dry coal', '', 'Lab, petrography, trial ovens', 'P1'],
    ['wy_cur', 'Washery clean-coal yield - current', 0.45, 'fraction', 0.55, 'Indian medium coking coal washeries often 35-50%', 'P2'],
    ['wy_tgt', 'Washery clean-coal yield - target', 0.52, 'fraction', '', 'Same clean-coal ash, via better circuits', 'P2'],
    ['raw_price', 'Raw domestic coal price', 5200, 'Rs/t', '', '', 'P2'],
    ['wash_cost', 'Washing cost', 600, 'Rs/t raw coal', '', '', 'P2'],
    ['dom_add', 'Extra domestic washed coal share made usable', 0.05, 'fraction of blend', '', 'Replaces the coal chosen below', 'P2'],
    ['dom_repl', 'Coal type replaced by extra domestic coal', 0, 'coal', '', '', 'P2'],
    ['st_low', 'Extra low-cost coal share enabled', 0.15, 'fraction of blend', '', 'Stamping tolerates weaker coals', 'P3'],
    ['st_lowtype', 'Low-cost coal type used with stamping', 4, 'coal', '', '', 'P3'],
    ['st_repl', 'Coal type it replaces', 0, 'coal', '', '', 'P3'],
    ['st_cost', 'Extra operating cost of stamp charging', 150, 'Rs/t wet coal', '', '', 'P3'],
    ['st_thru', 'Throughput gain from higher bulk density', 0.08, 'fraction', '', 'Bulk density ~0.75 -> ~1.1 t/m3; net of longer coking time', 'P3'],
    ['csr_cur', 'CSR - current', 60, '%', 65, '', 'P4'],
    ['csr_tgt', 'CSR - target', 64, '%', '', '', 'P4'],
    ['ash_cur', 'Coke ash - current', 14, '% db', 12.5, '', 'P4'],
    ['ash_tgt', 'Coke ash - target', 13.2, '% db', '', '', 'P4'],
    ['k_csr', 'Coke-rate sensitivity to CSR', 2, 'kg/tHM per CSR point', '', 'Literature ~1.5-3; calibrate on your BF data', 'P4'],
    ['k_ash', 'Coke-rate sensitivity to coke ash', 9, 'kg/tHM per 1% ash', '', '~2% of coke rate per 1% ash', 'P4'],
    ['p4_bcost', 'Extra blend cost to reach target quality', 300, 'Rs/t dry coal', '', '0 if achieved by operation only', 'P4'],
    ['kwh_cur', 'Crusher specific power - current', 2.5, 'kWh/t coal', 1.8, '', 'P5'],
    ['kwh_tgt', 'Crusher specific power - target', 1.9, 'kWh/t coal', '', '', 'P5'],
    ['wear_cur', 'Hammer / liner wear cost - current', 12, 'Rs/t coal', '', '', 'P5'],
    ['wear_tgt', 'Hammer / liner wear cost - target', 8, 'Rs/t coal', '', '', 'P5'],
    ['fine_cur', 'Crushing fineness <3.2 mm - current', 0.88, 'fraction', 0.82, 'Top charge 78-85%, stamp 88-92%', 'P5'],
    ['heat_cur', 'Heat consumption for coking - current', 600, 'kcal/kg wet coal', 540, '', 'P6'],
    ['heat_tgt', 'Heat consumption for coking - target', 560, 'kcal/kg wet coal', '', '', 'P6'],
    ['tsd_cur', 'Flue temperature std. deviation - current', 25, 'degC', 15, 'Target < 20', 'P6'],
    ['yield_tgt', 'Dry coke yield on dry coal - target', 0.77, 'fraction', '', 'VM control, charge level, less leakage and push losses', 'P7'],
    ['steam', 'CDQ steam generation', 0.55, 't steam/t coke', '', 'Typical 0.5-0.6', 'P8'],
    ['steam_val', 'Value of steam', 1500, 'Rs/t steam', '', '', 'P8'],
    ['q_water', 'Quench water saved', 0.45, 'm3/t coke', '', '', 'P8'],
    ['cdq_csr', 'CSR gain from dry quenching', 3, 'CSR points', '', 'Typical +2 to +4', 'P8'],
    ['cdq_om', 'CDQ operating and maintenance cost', 250, 'Rs/t coke', '', '', 'P8'],
    ['whr_cur', 'Waste-heat power - current', 0, 'kWh/t coke', '', '', 'P8'],
    ['whr_tgt', 'Waste-heat power - target', 30, 'kWh/t coke', '', '', 'P8'],
    ['tar_cur', 'Tar recovery - current', 30, 'kg/t dry coal', 35, '', 'P9'], ['tar_tgt', 'Tar recovery - target', 34, 'kg/t dry coal', '', '', 'P9'], ['tar_p', 'Tar price', 35, 'Rs/kg', '', '', 'P9'],
    ['bz_cur', 'Crude benzol recovery - current', 8, 'kg/t dry coal', 10, '', 'P9'], ['bz_tgt', 'Crude benzol recovery - target', 9.5, 'kg/t dry coal', '', '', 'P9'], ['bz_p', 'Crude benzol price', 60, 'Rs/kg', '', '', 'P9'],
    ['as_cur', 'Ammonium sulphate - current', 9, 'kg/t dry coal', 11, '', 'P9'], ['as_tgt', 'Ammonium sulphate - target', 10.5, 'kg/t dry coal', '', '', 'P9'], ['as_p', 'Ammonium sulphate price', 12, 'Rs/kg', '', '', 'P9'],
    ['s_cur', 'Elemental sulphur - current', 1, 'kg/t dry coal', '', '', 'P9'], ['s_tgt', 'Elemental sulphur - target', 1.6, 'kg/t dry coal', '', '', 'P9'], ['s_p', 'Sulphur price', 10, 'Rs/kg', '', '', 'P9'],
    ['bp_om', 'Extra by-product plant operating cost', 30, 'Rs/t dry coal', '', '', 'P9'],
    ['mnt_cost', 'Annual battery repair and maintenance cost', 30, 'Rs Cr/yr', '', '', 'P10'],
    ['mnt_red', 'Expected reduction in repair cost', 0.15, 'fraction', '', 'Ceramic welding, door/frame care, pushing-force monitoring', 'P10'],
    ['loss_cur', 'Production lost to oven problems - current', 12, 'battery-days/yr', 5, '', 'P10'],
    ['loss_tgt', 'Production lost to oven problems - target', 6, 'battery-days/yr', '', '', 'P10'],
    ['age', 'Battery age', 12, 'years', '', '', 'P10']
  ];
  var GROUPS = { A: 'A. Plant baseline', B: 'B. Prices and economic settings', P1: '1. Coal blend optimisation', P2: '2. Coal beneficiation', P3: '3. Stamp charging', P4: '4. Coke quality optimisation', P5: '5. Coal crushing optimisation', P6: '6. Coke oven heating optimisation', P7: '7. Coke yield improvement', P8: '8. CDQ and waste heat recovery', P9: '9. By-product recovery (by-product ovens only)', P10: '10. Battery life and maintenance' };
  var WEIGHTS = [['npv', 'Net present value (risk-adjusted)', 0.35, '5 x NPV / highest NPV (negative = 0)'], ['pay', 'Payback speed', 0.25, '<=1 yr 5, <=2 4, <=3 3, <=5 2, else 1'], ['ease', 'Ease of implementation', 0.15, '6 - complexity'], ['risk', 'Low risk', 0.10, '6 - risk'], ['fit', 'Strategic fit', 0.15, 'as entered']];
  var THRESH = [['qw_pay', 'Quick win: payback at or below (years)', 1.5], ['qw_cx', 'Quick win: complexity at or below', 2], ['hv_pay', 'High value: payback at or below (years)', 3], ['si_capex', 'Strategic investment: capex at or above (Rs Cr)', 100]];
  var TARGETS = [['CSR', '%', 'Min', 62, 'Raise blend Ro / prime coal share; lower MBI; raise bulk density (stamp, oil); ensure coke centre >= 1000 degC and soaking; consider CDQ.'],
    ['CRI', '%', 'Max', 26, 'Cut basic oxides and alkali in blend ash (MBI); raise Ro; reduce inertinite / oxidised coal; raise final coke temperature.'],
    ['M40', '%', 'Min', 78, 'Raise Ro and fluidity (mid-vol high-fluidity coal), raise bulk density, cut coke ash; check over-crushing and heating uniformity.'],
    ['M10', '%', 'Max', 8, 'Raise bulk density, finish carbonisation (centre T, soaking), reduce inerts, gentler quench and fewer handling drops.'],
    ['Coke ash', '% db', 'Max', 14, 'Cut high-ash coal share or improve washing; coke ash ~1.3x blend ash.'],
    ['Coke sulphur', '% db', 'Max', 0.65, 'Lower blend S: limit high-S coals and petroleum coke.'],
    ['Coke VM', '% db', 'Max', 1.2, 'Under-carbonised: raise flue temperature or extend coking / soaking time.'],
    ['Coke moisture', '%', 'Max', 6, 'Reduce quench water / improve draining; CDQ gives near-dry coke.'],
    ['Coking time margin', 'h', 'Min', 0, 'Extend gross coking time or raise flue temperature; stamp charging and wetter coal need more time.']];
  var LEVERS = [['charge', 'Charging method', 'list:Top|Stamp', 'Top', 'Stamp', 'Stamp charging raises bulk density but needs longer coking'], ['quench', 'Quenching method', 'list:Wet|CDQ', 'Wet', 'Wet', 'CDQ lowers CRI (raises CSR) and coke moisture'],
    ['gross', 'Gross coking time (charge to push)', 'h', 21, 25, 'Longer time gives more margin and hotter coke centre, less output'], ['flue', 'Mean flue temperature (crown temp. for non-recovery)', 'degC', 1250, 1270, 'Higher temperature shortens required coking time'],
    ['soak', 'Soaking time', 'h', 1, 1, 'Time after coke centre reaches ~950 degC'], ['moist', 'Charge moisture', '%', 10, 10, 'Each 1% above 9% adds ~0.4 h coking time'],
    ['oil', 'Oil addition (top charge only)', '% of coal', 0, 0, 'Raises top-charge bulk density ~150 kg/m3 per 1%'], ['bd', 'Bulk density override (blank = from method)', 'kg/m3 wet', '', '', 'Leave blank to use typical top / stamp values'],
    ['turn', 'Turnaround time (push to recharge)', 'h', 0.5, 0.5, '']];
  var K = { cri0: 12, criMbi: 7, criRo: -25, criMf: -2, criIn: 0.1, criT: -0.03, criCdq: -1, criNr: -1.5, criBd: -1, csr0: 89.1, csrCri: -1.28, m400: 80, m40Ro: 15, m40Mf: 2, m40Ash: -0.5, m40Bd: 0.01, m40Nr: 1,
    m100: 7, m10Ro: -4, m10Mf: -0.8, m10Ash: 0.15, m10Bd: -0.004, m10T: -0.01, y0: 103.19, yVm: -0.75, yT: -0.0067, burn: 2, sRet: 0.65, roRef: 1.2, mfRef: 2.7, inRef: 32, tRef: 1000, ashRef: 12, bdRef: 750,
    vm1000: 1, vmT: 0.004, vmSoak: 0.1, netRef: 19, width: 450, widthRef: 450, flueRef: 1250, netNr: 48, bed: 1, bedRef: 1, crownRef: 1300, t0: 700, dimExp: 1.5, bdExp: 0.5, moistPen: 0.4, moistRef: 9, bdOil: 150,
    tFlue: 0.5, tMargin: 10, tMax: 1100, tMin: 850, bdTop: 760, bdStamp: 1100, moistWet: 5, moistCdq: 0.5 };

  function defaults() {
    var I = {}; INPUTS.forEach(function (r) { I[r[0]] = r[2]; });
    var SCN0 = [0.38, 0.12, 0.20, 0.18, 0.10, 0, 0.02];
    I.coals = COALS.map(function (c, i) { return { name: c[0], price: c[1], cur: c[2], tgt: c[3], ash: c[4], vm: c[5], s: c[6], ro: c[7], mf: c[8], inert: c[9], ba: c[10], scn: SCN0[i] }; });
    I.proj = PROJECTS.map(function (p) { return { capex: p.capex, months: p.months, cx: p.cx, risk: p.risk, fit: p.fit, conf: p.conf, start: '', inc: 'Yes' }; });
    I.w = {}; WEIGHTS.forEach(function (w) { I.w[w[0]] = w[2]; });
    I.th = {}; THRESH.forEach(function (t) { I.th[t[0]] = t[2]; });
    I.tgt = TARGETS.map(function (t) { return t[3]; });
    I.lev = { base: {}, scn: {} }; LEVERS.forEach(function (l) { I.lev.base[l[0]] = l[3]; I.lev.scn[l[0]] = l[4]; });
    return I;
  }
  function num(v) { v = Number(v); return isFinite(v) ? v : 0; }
  function sum(a) { return a.reduce(function (s, x) { return s + x; }, 0); }
  function pv(r, n, pmt) { return r === 0 ? pmt * n : pmt * (1 - Math.pow(1 + r, -n)) / r; }
  function rate(n, pmt, pvv) { // RATE(n, pmt, -capex): solve pv(r,n,pmt) = capex
    var lo = 0, hi = 10, c = -pvv; for (var i = 0; i < 80; i++) { var m = (lo + hi) / 2; if (pv(m, n, pmt) > c) lo = m; else hi = m; } return (lo + hi) / 2;
  }
  function log10(x) { return Math.log(x) / Math.LN10; }

  function benefits(I) {
    var c = I.coals, dry = num(I.coke) / num(I.yield), wet = dry / (1 - num(I.moist));
    var blendCost = sum(c.map(function (x) { return num(x.price) * num(x.cur); }));
    var prodCost = blendCost / num(I.yield) + num(I.conv), margin = num(I.p_coke) - prodCost, fuelGcal = num(I.gas_price) / num(I.gas_cv) * 1e6, perDay = num(I.coke) / 365;
    var base = { dry: dry, wet: wet, blendCost: blendCost, prodCost: prodCost, margin: margin, fuelGcal: fuelGcal, perDay: perDay, curShare: sum(c.map(function (x) { return num(x.cur); })), tgtShare: sum(c.map(function (x) { return num(x.tgt); })) };
    var B = [], D = [];
    var tgtCost = sum(c.map(function (x) { return num(x.price) * num(x.tgt); })), save1 = blendCost - tgtCost - num(I.p1_qcost);
    B[0] = Math.round(base.tgtShare * 1000) !== 1000 ? 0 : save1 * dry / 1e7; D[0] = { tgtCost: tgtCost, save: save1 };
    var cCur = (num(I.raw_price) + num(I.wash_cost)) / num(I.wy_cur), cTgt = (num(I.raw_price) + num(I.wash_cost)) / num(I.wy_tgt);
    var s1 = (cCur - cTgt) * num(c[3].cur) * dry / 1e7, pr2 = num(c[num(I.dom_repl)].price), s2 = (pr2 - cTgt) * num(I.dom_add) * dry / 1e7;
    B[1] = s1 + s2; D[1] = { cCur: cCur, cTgt: cTgt, s1: s1, pr: pr2, s2: s2 };
    var pr3 = num(c[num(I.st_repl)].price), pl3 = num(c[num(I.st_lowtype)].price), sub3 = (pr3 - pl3) * num(I.st_low) * dry / 1e7, ex3 = num(I.st_thru) * num(I.coke) * margin / 1e7, cost3 = -num(I.st_cost) * wet / 1e7;
    B[2] = I.stamped === 'Yes' ? 0 : sub3 + ex3 + cost3; D[2] = { pr: pr3, pl: pl3, sub: sub3, extra: ex3, cost: cost3 };
    var dr = Math.max(0, num(I.csr_tgt) - num(I.csr_cur)) * num(I.k_csr) + Math.max(0, num(I.ash_cur) - num(I.ash_tgt)) * num(I.k_ash), saved4 = dr * num(I.hm) / 1000, val4 = saved4 * prodCost / 1e7, ex4 = -num(I.p4_bcost) * dry / 1e7;
    B[3] = val4 + ex4; D[3] = { dr: dr, saved: saved4, val: val4, extra: ex4 };
    var pw = (num(I.kwh_cur) - num(I.kwh_tgt)) * wet * num(I.power) / 1e7, wr = (num(I.wear_cur) - num(I.wear_tgt)) * wet / 1e7;
    B[4] = pw + wr; D[4] = { power: pw, wear: wr };
    var heat = (num(I.heat_cur) - num(I.heat_tgt)) * wet / 1000, gas = heat * 1e6 / num(I.gas_cv);
    B[5] = heat * fuelGcal / 1e7; D[5] = { heat: heat, gas: gas };
    var coalSaved = (1 / num(I.yield) - 1 / num(I.yield_tgt)) * num(I.coke);
    B[6] = coalSaved * blendCost / 1e7; D[6] = { coalSaved: coalSaved };
    var st = num(I.steam) * num(I.coke) * num(I.steam_val) / 1e7, wa = num(I.q_water) * num(I.coke) * num(I.water) / 1e7, cs = num(I.cdq_csr) * num(I.k_csr) * num(I.hm) / 1000 * prodCost / 1e7, om = -num(I.cdq_om) * num(I.coke) / 1e7;
    var sub8 = I.cdq_have === 'Yes' ? 0 : st + wa + cs + om, whr = (num(I.whr_tgt) - num(I.whr_cur)) * num(I.coke) * num(I.power) / 1e7;
    B[7] = sub8 + whr; D[7] = { steam: st, water: wa, csr: cs, om: om, sub: sub8, whr: whr };
    var rev = ((num(I.tar_tgt) - num(I.tar_cur)) * num(I.tar_p) + (num(I.bz_tgt) - num(I.bz_cur)) * num(I.bz_p) + (num(I.as_tgt) - num(I.as_cur)) * num(I.as_p) + (num(I.s_tgt) - num(I.s_cur)) * num(I.s_p)) * dry / 1e7, cost9 = -num(I.bp_om) * dry / 1e7;
    B[8] = I.battery === 'By-product recovery' ? rev + cost9 : 0; D[8] = { rev: rev, cost: cost9 };
    var rep = num(I.mnt_cost) * num(I.mnt_red), rec = (num(I.loss_cur) - num(I.loss_tgt)) * perDay, valr = rec * margin / 1e7;
    B[9] = rep + valr; D[9] = { repair: rep, recovered: rec, value: valr };
    return { base: base, gross: B, detail: D };
  }
  function prioritise(I, ben) {
    var sf = I.scen === 'Conservative' ? 0.7 : I.scen === 'Optimistic' ? 1.2 : 1, W = I.w, T = I.th, r = num(I.disc), n = num(I.life);
    var rows = PROJECTS.map(function (p, i) {
      var s = I.proj[i], inc = s.inc === 'Yes', F = inc ? ben.gross[i] * num(s.conf) * sf : 0, G = num(s.capex);
      var H = F <= 0 ? 99 : G / F, NPV = inc ? pv(r, n, F) - G : 0, IRR = (F <= 0 || G <= 0) ? '' : F >= G ? '>100%' : rate(n, F, -G);
      return { i: i, p: p, s: s, gross: ben.gross[i], conf: num(s.conf), sf: sf, F: F, G: G, H: H, NPV: NPV, IRR: IRR, K: G <= 0 ? '' : F / G, inc: inc };
    });
    var maxNPV = Math.max.apply(null, rows.map(function (x) { return x.NPV; })), wsum = sum(WEIGHTS.map(function (w) { return num(W[w[0]]); }));
    rows.forEach(function (x) {
      x.L = maxNPV <= 0 ? 0 : 5 * Math.max(0, x.NPV) / maxNPV;
      x.M = x.F <= 0 ? 0 : x.H <= 1 ? 5 : x.H <= 2 ? 4 : x.H <= 3 ? 3 : x.H <= 5 ? 2 : 1;
      x.N = 6 - num(x.s.cx); x.O = 6 - num(x.s.risk); x.P = num(x.s.fit);
      x.Q = (!x.inc || wsum === 0) ? 0 : (x.L * num(W.npv) + x.M * num(W.pay) + x.N * num(W.ease) + x.O * num(W.risk) + x.P * num(W.fit)) / wsum;
    });
    rows.forEach(function (x, i) { var rk = 1; rows.forEach(function (y, j) { if (y.Q > x.Q || (y.Q === x.Q && j < i)) rk++; }); x.rank = rk; });
    rows.forEach(function (x) {
      x.cat = !x.inc ? 'Excluded' : x.F <= 0 ? 'Not viable as entered' : (x.H <= num(T.qw_pay) && num(x.s.cx) <= num(T.qw_cx)) ? 'Quick win' : x.G >= num(T.si_capex) ? 'Strategic investment' : x.H <= num(T.hv_pay) ? 'High value' : 'Long-term / review';
      x.V = num(x.s.months);
      x.phase = (x.cat === 'Excluded' || x.cat === 'Not viable as entered') ? '-' : x.cat === 'Quick win' ? 'Phase 1' : x.V <= 12 ? 'Phase 2' : x.cat === 'Long-term / review' ? 'Phase 3' : x.rank <= 5 ? 'Phase 2' : 'Phase 3';
      var ov = x.s.start === '' || x.s.start == null ? NaN : Number(x.s.start);
      x.start = x.phase === '-' ? '' : isFinite(ov) ? ov : x.phase === 'Phase 1' ? 1 : x.phase === 'Phase 2' ? 7 : 19;
      x.end = x.start === '' ? '' : x.start + x.V - 1;
    });
    var tot = { F: sum(rows.map(function (x) { return x.F; })), G: sum(rows.map(function (x) { return x.G; })), NPV: sum(rows.map(function (x) { return x.NPV; })), gross: sum(ben.gross) };
    tot.H = tot.F <= 0 ? 99 : tot.G / tot.F;
    var byRank = rows.slice().sort(function (a, b) { return a.rank - b.rank; });
    return { rows: rows, byRank: byRank, total: tot, quickWins: rows.filter(function (x) { return x.cat === 'Quick win'; }).length, qwBenefit: sum(rows.filter(function (x) { return x.cat === 'Quick win'; }).map(function (x) { return x.F; })), phase1: sum(rows.filter(function (x) { return x.phase === 'Phase 1'; }).map(function (x) { return x.F; })), strategic: rows.filter(function (x) { return x.cat === 'Strategic investment'; }).length };
  }
  function fmt(n, d) { n = Number(n); if (!isFinite(n)) return '-'; return n.toLocaleString('en-IN', { maximumFractionDigits: d == null ? 1 : d, minimumFractionDigits: d == null ? 0 : d }); }
  function pct(n, d) { return fmt(Number(n) * 100, d == null ? 0 : d) + '%'; }
  function diagnosis(I, ben, pr) {
    var b = ben.base, D = ben.detail, c = I.coals, q = quality(I), o = [];
    o[0] = (Math.round(b.tgtShare * 1000) !== 1000 ? 'CHECK: target blend shares add to ' + pct(b.tgtShare) + ' - must be 100%. ' : '') + 'Blend Rs ' + fmt(b.blendCost, 0) + '/t now, Rs ' + fmt(D[0].tgtCost, 0) + '/t target. Prime coal share ' + pct(c[0].cur) + ' now, ' + pct(c[0].tgt) + ' target. ' + (num(c[0].cur) > 0.5 ? 'Import dependence is high - biggest lever in the portfolio. ' : '') + 'Net saving Rs ' + fmt(D[0].save, 0) + '/t coal.';
    o[1] = 'Washery yield ' + pct(I.wy_cur) + ' vs target ' + pct(I.wy_tgt) + ' (benchmark 55%). Washed domestic coal Rs ' + fmt(D[1].cTgt, 0) + '/t vs replaced coal Rs ' + fmt(D[1].pr, 0) + '/t. ' + (D[1].cTgt >= D[1].pr ? 'Washed domestic coal is NOT cheaper than the coal it replaces - revisit raw price or yield.' : num(I.wy_cur) < 0.55 ? 'Yield is below benchmark - washery upgrade pays twice (cheaper coal and more of it).' : 'Yield near benchmark - focus on ash consistency.');
    o[2] = I.stamped === 'Yes' ? 'Battery already stamp charged: benefit set to zero. Push cake density and low-cost coal share within CSR limits instead.' : 'Top-charged battery: stamping enables about ' + pct(I.st_low) + ' more low-cost coal plus ~' + pct(I.st_thru) + ' throughput. ' + (I.battery !== 'By-product recovery' ? 'Stamp charging is standard for non-recovery ovens - check oven design.' : 'Needs oven height/wall strength check for by-product ovens.');
    o[3] = 'CSR ' + fmt(I.csr_cur, 0) + ' -> ' + fmt(I.csr_tgt, 0) + ' (benchmark 65); ash ' + fmt(I.ash_cur, 1) + ' -> ' + fmt(I.ash_tgt, 1) + '%. Coke-rate cut ~' + fmt(D[3].dr, 1) + ' kg/tHM. ' + (num(I.csr_cur) < 65 ? 'CSR below benchmark - high value to BF. ' : '') + (num(I.ash_cur) > 12.5 ? 'Ash above benchmark - tighten washed-coal ash. ' : '');
    o[4] = 'Crusher power ' + fmt(I.kwh_cur, 2) + ' kWh/t vs benchmark 1.80; fineness ' + pct(I.fine_cur) + ' <3.2 mm. ' + (num(I.fine_cur) > 0.82 ? 'Likely over-crushing: lower fineness saves power and raises bulk density. ' : '') + (num(I.kwh_cur) > 1.8 ? 'Power above benchmark.' : 'Power near benchmark - limited gain.');
    o[5] = 'Heat consumption ' + fmt(I.heat_cur, 0) + ' kcal/kg vs benchmark 540. Flue temp std dev ' + fmt(I.tsd_cur, 0) + ' degC. ' + (num(I.tsd_cur) > 15 ? 'Uneven heating - balance burners before cutting heat input. ' : '') + 'Saving ' + fmt(D[5].gas / 1e6, 1) + ' million Nm3 gas/yr.';
    o[6] = 'Yield ' + pct(I.yield, 1) + ' -> ' + pct(I.yield_tgt, 1) + ' (benchmark 78.0%). Saves ' + fmt(D[6].coalSaved, 0) + ' t coal/yr. ' + (num(I.yield) < 0.78 ? 'Yield gap exists - check VM of blend, oven leakage and push losses.' : 'Yield near benchmark.');
    o[7] = (I.cdq_have === 'Yes' ? 'CDQ already installed: CDQ part set to zero; value comes from waste-heat power and CDQ availability.' : 'Wet quenching today: CDQ recovers ~' + fmt(I.steam, 2) + ' t steam/t coke and adds ~' + fmt(I.cdq_csr, 0) + ' CSR points. ') + (I.battery !== 'By-product recovery' ? ' Non-recovery ovens: maximise HRSG power export.' : '');
    o[8] = I.battery !== 'By-product recovery' ? 'Non-recovery battery: no by-product plant, benefit set to zero. Energy value is captured in project 8.' : 'Tar ' + fmt(I.tar_cur, 0) + ' vs benchmark 35 kg/t; benzol ' + fmt(I.bz_cur, 1) + ' vs 10.0 kg/t. ' + ((num(I.tar_cur) < 35 || num(I.bz_cur) < 10) ? 'Recovery below benchmark - check primary cooler, ESP and benzol scrubber.' : 'Recovery near benchmark.');
    o[9] = 'Battery age ' + fmt(I.age, 0) + ' years; ' + fmt(I.loss_cur, 0) + ' battery-days/yr lost vs benchmark 5. ' + (num(I.age) >= 20 ? 'Ageing battery - plan hot repair / rebuild studies now. ' : '') + (num(I.loss_cur) > 5 ? 'Losses above benchmark - start predictive maintenance.' : 'Losses near benchmark.');
    return o;
  }
  function strategyLines(I, pr) {
    var r = pr.byRank, qw = pr.rows.filter(function (x) { return x.cat === 'Quick win'; });
    return ['1. Start with: ' + r[0].p.name + ' and ' + r[1].p.name + ' - the two highest-scoring projects.',
      '2. Quick wins to launch in the first 6 months: ' + qw.length + ' project(s), worth Rs ' + fmt(pr.qwBenefit, 1) + ' Cr/yr. Use their savings to fund later phases.',
      '3. Capital projects (capex >= Rs ' + fmt(I.th.si_capex, 0) + ' Cr): ' + pr.strategic + ' - start feasibility studies in Phase 1 so approvals are ready by Phase 2/3.',
      '4. Treat coal blend optimisation as a continuous process: re-run the optimiser whenever beneficiation, stamp charging or quality targets change.',
      '5. Avoid double counting: blend, beneficiation and stamp charging all save on coal; coke quality and CDQ both cut BF coke rate. Lower Confidence % where they overlap.',
      '6. Review monthly: compare actual KPIs with targets, update Inputs, and let the ranking re-order.'];
  }
  /* BF coke quality: base vs scenario */
  function qualityOne(I, L, shares) {
    var c = I.coals, nr = I.battery !== 'By-product recovery' ? 1 : 0, stamp = L.charge === 'Stamp' ? 1 : 0, cdq = L.quench === 'CDQ' ? 1 : 0;
    var w = function (f) { return sum(c.map(function (x, i) { return num(shares[i]) * f(x); })); };
    var ash = w(function (x) { return num(x.ash); }), vm = w(function (x) { return num(x.vm); }), s = w(function (x) { return num(x.s); }), ro = w(function (x) { return num(x.ro); }), lmf = w(function (x) { return log10(Math.max(1e-9, num(x.mf))); }), inert = w(function (x) { return num(x.inert); });
    var ashBA = sum(c.map(function (x, i) { return num(shares[i]) * num(x.ash) * num(x.ba); })), ba = ash === 0 ? 0 : ashBA / ash, mbi = 100 * ash * ba / (100 - vm);
    var bd = (L.bd !== '' && L.bd != null && isFinite(Number(L.bd))) ? Number(L.bd) : stamp ? K.bdStamp : K.bdTop + K.bdOil * num(L.oil);
    var flue = num(L.flue), tref = nr ? K.crownRef : K.flueRef;
    var net = (nr ? K.netNr * Math.pow(K.bed / K.bedRef, K.dimExp) * (K.crownRef - K.t0) / (flue - K.t0) : K.netRef * Math.pow(K.width / K.widthRef, K.dimExp) * (K.flueRef - K.t0) / (flue - K.t0)) * Math.pow(bd / K.bdRef, K.bdExp) + K.moistPen * (num(L.moist) - K.moistRef);
    var req = net + num(L.soak), avail = num(L.gross) - num(L.turn), margin = avail - req;
    var tc = Math.min(K.tMax, Math.max(K.tMin, K.tRef + K.tFlue * (flue - tref) + K.tMargin * margin));
    var yieldP = K.y0 + K.yVm * vm + K.yT * tc - K.burn * nr, cokeAsh = ash / yieldP * 100, cokeS = s * K.sRet / yieldP * 100, cokeVm = Math.max(0.3, K.vm1000 - K.vmT * (tc - K.tRef) - K.vmSoak * num(L.soak)), cokeMoist = cdq ? K.moistCdq : K.moistWet;
    var cri = K.cri0 + K.criMbi * mbi + K.criRo * (ro - K.roRef) + K.criMf * (lmf - K.mfRef) + K.criIn * (inert - K.inRef) + K.criT * (tc - K.tRef) + K.criCdq * cdq + K.criNr * nr + K.criBd * (bd - K.bdRef) / 100;
    var csr = K.csr0 + K.csrCri * cri, m40 = K.m400 + K.m40Ro * (ro - K.roRef) + K.m40Mf * (lmf - K.mfRef) + K.m40Ash * (cokeAsh - K.ashRef) + K.m40Bd * (bd - K.bdRef) + K.m40Nr * nr;
    var m10 = K.m100 + K.m10Ro * (ro - K.roRef) + K.m10Mf * (lmf - K.mfRef) + K.m10Ash * (cokeAsh - K.ashRef) + K.m10Bd * (bd - K.bdRef) + K.m10T * (tc - K.tRef);
    return { nr: nr, stamp: stamp, cdq: cdq, ash: ash, vm: vm, s: s, ro: ro, lmf: lmf, inert: inert, ba: ba, mbi: mbi, bd: bd, net: net, req: req, avail: avail, margin: margin, tc: tc, yield: yieldP, cokeAsh: cokeAsh, cokeS: cokeS, cokeVm: cokeVm, cokeMoist: cokeMoist, cri: cri, csr: csr, m40: m40, m10: m10, share: sum(shares.map(num)), gross: num(L.gross), tref: tref, flue: flue, turn: num(L.turn) };
  }
  function quality(I) {
    var base = qualityOne(I, I.lev.base, I.coals.map(function (x) { return x.cur; })), scn = qualityOne(I, I.lev.scn, I.coals.map(function (x) { return x.scn; }));
    var keys = ['csr', 'cri', 'm40', 'm10', 'cokeAsh', 'cokeS', 'cokeVm', 'cokeMoist', 'margin'];
    var rows = TARGETS.map(function (t, i) {
      var tgt = I.tgt[i], b = base[keys[i]], s = scn[keys[i]], has = tgt !== '' && tgt != null && isFinite(Number(tgt));
      var ok = function (v) { return !has ? 'No target' : t[2] === 'Min' ? (v >= Number(tgt) ? 'MET' : 'NOT MET') : (v <= Number(tgt) ? 'MET' : 'NOT MET'); };
      var ach = function (v) { return (!has || Number(tgt) === 0 || v <= 0) ? 0 : Math.min(150, (t[2] === 'Min' ? v / Number(tgt) : Number(tgt) / v) * 100); };
      return { name: t[0], unit: t[1], lim: t[2], tgt: tgt, base: b, scn: s, bs: ok(b), ss: ok(s), diff: s - b, fix: t[4], achB: ach(b), achS: ach(s) };
    });
    var nT = rows.filter(function (r) { return r.tgt !== '' && r.tgt != null; }).length;
    var metB = rows.filter(function (r) { return r.bs === 'MET'; }).length, metS = rows.filter(function (r) { return r.ss === 'MET'; }).length;
    scn.output = base.gross === 0 || scn.gross === 0 ? 0 : (base.gross / scn.gross) * (scn.bd / base.bd) * (scn.yield / base.yield);
    var moved = [
      ['Coal blend', K.csrCri * (K.criMbi * (scn.mbi - base.mbi) + K.criRo * (scn.ro - base.ro) + K.criMf * (scn.lmf - base.lmf) + K.criIn * (scn.inert - base.inert)), K.m40Ro * (scn.ro - base.ro) + K.m40Mf * (scn.lmf - base.lmf) + K.m40Ash * (scn.cokeAsh - base.cokeAsh), K.m10Ro * (scn.ro - base.ro) + K.m10Mf * (scn.lmf - base.lmf) + K.m10Ash * (scn.cokeAsh - base.cokeAsh)],
      ['Charging method / bulk density', K.csrCri * K.criBd * (scn.bd - base.bd) / 100, K.m40Bd * (scn.bd - base.bd), K.m10Bd * (scn.bd - base.bd)],
      ['Coking duration and temperature', K.csrCri * K.criT * (scn.tc - base.tc), 0, K.m10T * (scn.tc - base.tc)],
      ['Quenching method', K.csrCri * K.criCdq * (scn.cdq - base.cdq), 0, 0]];
    var curve = []; for (var g = 16; g <= 28; g++) {
      var f = function (Q, L) { var m = g - num(L.turn) - Q.req; var tc = Math.min(K.tMax, Math.max(K.tMin, K.tRef + K.tFlue * (num(L.flue) - Q.tref) + K.tMargin * m)); return Q.csr + K.csrCri * K.criT * (tc - Q.tc); };
      curve.push({ h: g, base: f(base, I.lev.base), scn: f(scn, I.lev.scn), tgt: Number(I.tgt[0]) || 0, margin: g - num(I.lev.scn.turn) - scn.req });
    }
    return { base: base, scn: scn, rows: rows, metB: metB + ' of ' + nT, metS: metS + ' of ' + nT, moved: moved, curve: curve };
  }
  function run(I) {
    var ben = benefits(I), pr = prioritise(I, ben), q = quality(I);
    return { ben: ben, pr: pr, q: q, diag: diagnosis(I, ben, pr), strategy: strategyLines(I, pr) };
  }
  root.CIP = { COALS: COALS, PROJECTS: PROJECTS, INPUTS: INPUTS, GROUPS: GROUPS, WEIGHTS: WEIGHTS, THRESH: THRESH, TARGETS: TARGETS, LEVERS: LEVERS, K: K,
    MATCFG: { key: 'coals', title: 'C. Coal types, prices and blend shares (dry basis)', unit: 'Rs/t dry' }, MOVEDCOLS: ['CSR', 'M40', 'M10'], defaults: defaults, run: run, benefits: benefits, prioritise: prioritise, quality: quality, fmt: fmt, pct: pct, pv: pv, rate: rate };
})(typeof window !== 'undefined' ? window : module.exports);
