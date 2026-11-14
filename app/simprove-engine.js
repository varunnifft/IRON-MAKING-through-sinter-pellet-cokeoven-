/* Sinter Improvement Planner engine: the calculations of Sinter_Improvement_Planner_1.xlsx
   (Inputs, Project_Settings, Benefits, Prioritisation, Plan_Strategy, Roadmap, BF_Quality).
   Rs Cr = Rs 10 million. Every default is a placeholder for a typical Indian integrated plant. */
(function (root) {
  'use strict';
  // name, price Rs/t dry, current share, target share, Fe, SiO2, Al2O3, CaO, MgO, LOI, group (ore|flux|fuel|revert)
  var MATS = [
    ['High-grade iron ore fines (Fe 63.5%)', 5600, 0.41, 0.30, 63.5, 2.8, 2.2, 0.1, 0.05, 3, 'ore'],
    ['Medium-grade iron ore fines (Fe 61%)', 4300, 0.22, 0.27, 61, 3.8, 3.4, 0.1, 0.05, 4, 'ore'],
    ['Low-grade / high-alumina fines (Fe 58%)', 2900, 0.05, 0.08, 58, 5, 5, 0.1, 0.1, 5.5, 'ore'],
    ['Beneficiated ore concentrate (Fe 64.5%)', 4800, 0.03, 0.03, 64.5, 2.5, 1.5, 0.1, 0.05, 1, 'ore'],
    ['Blue dust (Fe 66%)', 6000, 0, 0, 66, 1.5, 1.2, 0.1, 0.05, 1.5, 'ore'],
    ['Pellet fines / pellet plant screenings (Fe 63%)', 4500, 0, 0.02, 63, 3.5, 2, 0.8, 0.3, 0.5, 'ore'],
    ['High-silica fines - Goa / Karnataka (Fe 57%)', 2600, 0, 0, 57, 8, 2.5, 0.1, 0.1, 4, 'ore'],
    ['Imported low-alumina fines (Fe 62%)', 7500, 0, 0, 62, 4, 2.2, 0.1, 0.1, 5.5, 'ore'],
    ['Limestone', 1900, 0.09, 0.095, 0.3, 6, 1, 47, 2.5, 40, 'flux'],
    ['Dolomite', 2100, 0.06, 0.06, 0.3, 4, 0.8, 30, 19, 43, 'flux'],
    ['Burnt lime', 7800, 0.02, 0.025, 0.2, 2.5, 0.8, 88, 2, 4, 'flux'],
    ['Dunite / serpentine (MgO flux)', 3500, 0, 0, 5, 38, 0.8, 0.5, 38, 8, 'flux'],
    ['Quartzite (SiO2 flux)', 1500, 0, 0, 0.5, 95, 1.5, 0.3, 0.1, 0.5, 'flux'],
    ['Coke breeze (-3 mm)', 11000, 0.045, 0.045, 1, 9, 5, 0.6, 0.3, 83, 'fuel'],
    ['BF stock house coke fines (-6 mm, re-crushed)', 9000, 0, 0, 0.8, 8.5, 5, 0.5, 0.3, 85, 'fuel'],
    ['Purchased low-ash coke fines (merchant / imported)', 13000, 0, 0, 0.5, 6, 3.5, 0.4, 0.2, 87, 'fuel'],
    ['Anthracite / low-ash coal fines', 14000, 0.015, 0.015, 0.5, 6, 4, 0.5, 0.3, 88, 'fuel'],
    ['Mill scale', 2000, 0.02, 0.02, 72, 1, 0.3, 0.5, 0.2, 0, 'revert'],
    ['Plant reverts (BF/SMS dust, LD sludge)', 300, 0.04, 0.04, 40, 5, 2, 12, 3, 15, 'revert']
  ];
  var PROJECTS = [
    { id: 1, name: 'Raw mix and flux optimisation', ben: 'Lower raw material cost', zone: 'bins', capex: 2, months: 3, cx: 2, risk: 2, fit: 5, conf: 0.75,
      strategy: 'Run a least-cost raw mix model monthly (LP or Solver) against Fe, SiO2, Al2O3, basicity, MgO and the BF quality targets. Qualify cheaper medium-grade fines, step substitution in 3-5% increments, and keep a tight bedding-blending discipline so chemistry stays stable.',
      steps: ['Build material analysis and price file', 'Set BF chemistry limits with BF team', 'Run optimiser for target mix', 'Plant trials in steps with daily XRF', 'Update procurement plan', 'Re-run when prices or ores change'],
      kpis: 'Raw mix cost Rs/t sinter; sinter Fe, SiO2, Al2O3, basicity SD; share of high-grade fines', dep: 'Interacts with project 7 (reverts) and 6 (quality); check BF slag volume', risks: 'Quality drift from new ores - trial in steps, hold safety margin on Al2O3 and basicity' },
    { id: 2, name: 'Solid fuel rate reduction', ben: 'Lower solid fuel cost (and CO2)', zone: 'coke', capex: 8, months: 6, cx: 2, risk: 2, fit: 5, conf: 0.75,
      strategy: 'Cut fuel by controlling breeze size (80-85% -3 mm), raising bed height, fuel segregation and split fuel addition, and by optimising the burn-through point. Use mill scale and reverts carefully as they change the heat balance.',
      steps: ['Audit breeze size and moisture daily', 'Fix crusher (rod mill) settings', 'Trial higher bed and segregation', 'Optimise burn-through point control', 'Track FeO and TI as fuel falls'],
      kpis: 'Solid fuel kg/t sinter; breeze -3 mm %; FeO %; TI', dep: 'Linked to project 5 (return fines) and 6 (FeO drives TI and RI)', risks: 'TI may fall if fuel is cut too far - keep FeO above about 7.5% and watch returns' },
    { id: 3, name: 'Ignition furnace optimisation', ben: 'Lower ignition gas consumption', zone: 'hood', capex: 6, months: 6, cx: 2, risk: 1, fit: 3, conf: 0.85,
      strategy: 'Replace old burners with multi-slit or line burners, seal the ignition hood, control ignition temperature and time, and use hot cooler air for combustion where possible.',
      steps: ['Measure gas flow and ignition temperature profile', 'Fix hood and seal air ingress', 'Tune air-gas ratio', 'Burner upgrade at planned shutdown', 'Lock settings in SOP'],
      kpis: 'Ignition heat MJ/t; ignition temperature; surface sinter quality', dep: 'Hot-air recirculation links to project 8 (cooler WHR)', risks: 'Poor top-layer sinter if heat is cut too far - trial and check surface fines' },
    { id: 4, name: 'Bed permeability and productivity', ben: 'Higher sinter output', zone: 'strand', capex: 35, months: 12, cx: 3, risk: 3, fit: 5, conf: 0.6,
      strategy: 'Raise bed permeability through better granulation (mixer drum time, water addition control, burnt lime), steady moisture near optimum, higher bed with stronger fan suction, and less segregation at the feeder.',
      steps: ['Granulometry study of mix', 'Moisture control loop', 'Burnt lime trial', 'Bed height trials with the quality levers', 'Fan and pallet capacity check', 'Standardise'],
      kpis: 'Net productivity t/m2/h; mean granule size; bed permeability (JPU); fan suction', dep: 'Overlaps with projects 5 and 10 (all add sinter output); needs BF to absorb extra sinter', risks: 'More output can lower TI if burn-through is rushed - track quality as output rises' },
    { id: 5, name: 'Return fines reduction', ben: 'Higher net sinter yield', zone: 'returnbin', capex: 10, months: 9, cx: 3, risk: 2, fit: 4, conf: 0.7,
      strategy: 'Strengthen sinter (TI), stabilise the burn-through point, maintain screens and the hot screen, and reduce drops and degradation at the cooler and conveyors to cut return fines.',
      steps: ['Return fines balance by source', 'Burn-through point control', 'Screen deck audit and repair', 'Cooler discharge and chute redesign', 'Monitor return fines daily'],
      kpis: 'Return fines % of cake; TI; screen efficiency; fines at BF', dep: 'Depends on project 6 (TI) and 2 (fuel); overlaps output gains of projects 4 and 10', risks: 'Over-screening loses product; under-screening sends fines to BF - balance both' },
    { id: 6, name: 'Sinter quality improvement for BF', ben: 'Potential BF coke-rate reduction', zone: 'bf', capex: 12, months: 9, cx: 3, risk: 3, fit: 5, conf: 0.6,
      strategy: 'Agree the sinter specification with the BF, then use the quality model to set mix chemistry (Al2O3, MgO, basicity) and the FeO window. Add CaCl2 spraying for RDI, and manage size and fines at the stock house.',
      steps: ['Set BF targets on the BF quality page', 'Calibrate quality coefficients on 6 months of data', 'CaCl2 spray trial', 'MgO and Al2O3 adjustment', 'Track BF coke rate response'],
      kpis: 'TI, RDI, RI, MPS, -5 mm fines; BF coke rate kg/tHM; BF permeability', dep: 'Uses project 1 mix and project 2 fuel; same BF lever as the coke planner (CSR)', risks: 'Coke-rate sensitivity is uncertain - calibrate on BF data before committing' },
    { id: 7, name: 'Use of plant wastes (reverts)', ben: 'Lower ore cost and waste disposal', zone: 'drum', capex: 25, months: 12, cx: 3, risk: 3, fit: 4, conf: 0.7,
      strategy: 'Build a reverts recycling route: micro-pelletise or nodulise LD sludge and dusts, control Zn, alkali and P input to the BF, and dose reverts at a steady rate through the bedding plant.',
      steps: ['Characterise wastes (Fe, C, Zn, alkali, moisture)', 'Set BF input limits', 'Micro-pelletising or dewatering plant', 'Dosing trial', 'Monitor BF Zn and alkali load'],
      kpis: 'Waste used t/yr; Zn and alkali load at BF kg/tHM; landfill t/yr', dep: 'Changes the raw mix of project 1; carbon in dust reduces fuel need', risks: 'Zn and alkali build-up in BF - cap input and monitor top gas dust' },
    { id: 8, name: 'Cooler waste heat recovery', ben: 'Energy recovery (steam / power)', zone: 'cooler', capex: 180, months: 24, cx: 4, risk: 3, fit: 4, conf: 0.75,
      strategy: 'Install waste heat recovery on the annular cooler (steam or power), and recycle cooler hot air to the ignition hood / bed preheating. Seal the cooler first to raise the hot-air temperature.',
      steps: ['Cooler heat and leakage survey', 'Cooler sealing', 'Feasibility and vendor selection', 'Approvals and order', 'Erection at planned shutdown', 'Commissioning'],
      kpis: 'Steam t/t sinter; hot-air temperature; power generated MWh', dep: 'Hot-air reuse links to project 3 (ignition); needs a steam or power user', risks: 'High capex and long lead time - start feasibility early; risk of low hot-air temperature' },
    { id: 9, name: 'Air leakage reduction', ben: 'Lower main fan power', zone: 'windbox', capex: 20, months: 9, cx: 3, risk: 2, fit: 3, conf: 0.8,
      strategy: 'Run a leakage programme: pallet side seals and grate bars, wind-box and end seals, dust catcher and duct joints. Measure leakage by O2 balance and renew seals on a fixed schedule.',
      steps: ['Leakage audit by O2 / flow balance', 'Fix worst pallets and seals', 'Seal renewal plan', 'Fan speed reduction or output increase', 'Monthly re-measurement'],
      kpis: 'Air leakage %; fan kWh/t; suction at wind-boxes; O2 at fan inlet', dep: 'Saved flow can also be taken as productivity (project 4)', risks: 'Gains slip back without a renewal schedule - make it part of the maintenance plan' },
    { id: 10, name: 'Maintenance and availability', ben: 'Lower repair cost and lost production', zone: 'fan', capex: 15, months: 12, cx: 3, risk: 2, fit: 4, conf: 0.7,
      strategy: 'Move from breakdown to condition-based maintenance for pallets, main fan, cooler and conveyors; plan pallet rebuilds, hold critical spares, and track lost hours by cause.',
      steps: ['Lost-hours Pareto by equipment', 'Vibration and thermography on fans and drives', 'Pallet rebuild cycle', 'Critical spares list', 'Planned shutdown calendar'],
      kpis: 'Operating hours/yr; MTBF of pallets and fan; repair cost Rs Cr/yr', dep: 'Supports projects 4 and 9 (pallets and seals); overlaps output gains of 4 and 5', risks: 'Short-term cost rise for spares and rebuilds - phase spend against savings' }
  ];
  var INPUTS = [
    ['area', 'Sinter machine suction area', 360, 'm2', '', 'e.g. one 360 m2 strand', 'A'],
    ['prod_cur', 'Net productivity - current', 1.3, 't/m2/h', 1.5, 'Net sinter to BF (after return fines) per m2 per operating hour', 'A'],
    ['hrs_cur', 'Operating hours - current', 7900, 'h/yr', 8300, '', 'A'],
    ['rf_cur', 'Return fines - current', 0.28, 'fraction of cake', 0.22, 'Hot + cold screen undersize returned to the mix', 'A'],
    ['hm', 'Blast furnace hot metal production', 3300000, 't HM/yr', '', '', 'A'],
    ['cokerate', 'BF coke rate (current)', 480, 'kg/tHM', 450, 'Skip coke + nut coke, excluding PCI', 'A'],
    ['whr_have', 'Cooler waste heat recovery already installed?', 'No', 'list:Yes|No', '', 'If Yes, project 8 benefit is zero', 'A'],
    ['p_alt', 'Price of BF burden replaced by extra sinter', 8800, 'Rs/t', '', 'Pellets / sized lump ore bought in', 'B'],
    ['conv', 'Sinter conversion cost (excl. raw materials)', 750, 'Rs/t sinter', '', 'Power, ignition gas, labour, maintenance', 'B'],
    ['power', 'Power tariff', 7.5, 'Rs/kWh', '', '', 'B'],
    ['gas_price', 'Ignition gas price', 6, 'Rs/Nm3', '', 'COG / mixed gas', 'B'],
    ['gas_cv', 'Ignition gas calorific value', 4200, 'kcal/Nm3', '', '', 'B'],
    ['p_coke', 'BF coke price (for coke-rate savings)', 32000, 'Rs/t', '', '', 'B'],
    ['disc', 'Discount rate', 0.12, 'fraction', '', '', 'B'],
    ['life', 'Evaluation period', 10, 'years', '', '', 'B'],
    ['scen', 'Benefit scenario', 'Base', 'list:Conservative|Base|Optimistic', '', 'Conservative 0.7x, Base 1.0x, Optimistic 1.2x', 'B'],
    ['p1_qc', 'Extra sampling, testing and blending cost', 10, 'Rs/t sinter', '', 'XRF and size analysis, stacker-reclaimer discipline', 'P1'],
    ['p1_fepen', 'BF cost of lower sinter Fe (credit if Fe rises)', 60, 'Rs/t sinter per 1% Fe', '', 'Lower Fe = more slag and coke at the BF; 0 to ignore', 'P1'],
    ['fuel_tgt', 'Solid fuel rate - target', 62, 'kg/t sinter', 55, 'Current rate is calculated from the solid fuel rows of the mix', 'P2'],
    ['p2_cost', 'Extra cost of fuel size control and segregation', 5, 'Rs/t sinter', '', 'Breeze crushing to 80-85% -3 mm, split fuel addition', 'P2'],
    ['ign_cur', 'Ignition heat - current', 85, 'MJ/t sinter', 45, '', 'P3'],
    ['ign_tgt', 'Ignition heat - target', 55, 'MJ/t sinter', '', 'Multi-slit / line burners, hood sealing', 'P3'],
    ['prod_tgt', 'Net productivity - target', 1.42, 't/m2/h', '', 'Via granulation, moisture control, burnt lime, bed height', 'P4'],
    ['p4_cost', 'Extra operating cost for higher output', 35, 'Rs/t sinter', '', 'Extra burnt lime, binder and power, on all tonnes', 'P4'],
    ['rf_tgt', 'Return fines - target', 0.24, 'fraction of cake', '', 'Via TI, burn-through control, screen care', 'P5'],
    ['rf_fuel', 'Fuel saved per 1 point lower return fines', 0.5, 'kg/t sinter', '', 'Less fuel re-sintering circulating fines', 'P5'],
    ['ti_cur', 'Tumbler index (+6.3 mm) - current', 70, '%', 74, 'ISO 3271', 'P6'],
    ['ti_tgt', 'Tumbler index - target', 73, '%', '', '', 'P6'],
    ['rdi_cur', 'RDI (-3.15 mm) - current', 32, '%', 26, 'High-alumina Indian sinter often 28-35', 'P6'],
    ['rdi_tgt', 'RDI - target', 28, '%', '', '', 'P6'],
    ['k_ti', 'Coke-rate sensitivity to TI', 1, 'kg/tHM per TI point', '', 'Literature ~0.5-1.5; calibrate on your BF data', 'P6'],
    ['k_rdi', 'Coke-rate sensitivity to RDI', 0.5, 'kg/tHM per RDI point', '', 'Literature ~0.3-0.8; calibrate', 'P6'],
    ['p6_cost', 'Extra cost to reach target quality', 25, 'Rs/t sinter', '', 'CaCl2 spraying, extra MgO / lime; 0 if by operation only', 'P6'],
    ['w_type', 'Plant waste type added', 18, 'mat', '', 'Choose from the material table', 'P7'],
    ['w_add', 'Extra plant waste in raw mix', 0.02, 'fraction of mix', '', 'Limit by Zn, alkali and P in BF burden', 'P7'],
    ['w_repl', 'Material it replaces', 1, 'mat', '', '', 'P7'],
    ['w_disp', 'Avoided disposal / landfill cost', 400, 'Rs/t waste', '', '', 'P7'],
    ['w_proc', 'Extra preparation cost', 350, 'Rs/t waste', '', 'Micro-pelletising, dewatering, blending', 'P7'],
    ['steam', 'Steam generation from cooler hot air', 0.1, 't steam/t sinter', '', 'Typical 0.08-0.12', 'P8'],
    ['steam_val', 'Value of steam', 1500, 'Rs/t steam', '', 'Power-equivalent or fuel-replacement value', 'P8'],
    ['whr_om', 'WHR operating and maintenance cost', 25, 'Rs/t sinter', '', '', 'P8'],
    ['fan_kwh', 'Main exhaust fan specific power - current', 24, 'kWh/t sinter', '', '', 'P9'],
    ['leak_cur', 'Air leakage - current', 0.55, 'fraction of fan flow', 0.35, 'Pallet side seals, wind-box, dust catcher, ducts', 'P9'],
    ['leak_tgt', 'Air leakage - target', 0.40, 'fraction of fan flow', '', 'Same air through the bed at less total fan flow', 'P9'],
    ['hrs_tgt', 'Operating hours - target', 8200, 'h/yr', '', 'Fewer pallet, fan, cooler and conveyor breakdowns', 'P10'],
    ['mnt_cost', 'Annual repair and maintenance cost', 40, 'Rs Cr/yr', '', '', 'P10'],
    ['mnt_red', 'Expected reduction in repair cost', 0.12, 'fraction', '', 'Condition monitoring, pallet rebuilds, spares planning', 'P10']
  ];
  var GROUPS = { A: 'A. Plant baseline', B: 'B. Prices and economic settings', P1: '1. Raw mix and flux optimisation', P2: '2. Solid fuel rate reduction', P3: '3. Ignition furnace optimisation', P4: '4. Bed permeability and productivity', P5: '5. Return fines reduction', P6: '6. Sinter quality improvement for BF', P7: '7. Use of plant wastes (reverts)', P8: '8. Cooler waste heat recovery', P9: '9. Air leakage reduction', P10: '10. Maintenance and availability' };
  var WEIGHTS = [['npv', 'Net present value (risk-adjusted)', 0.35, '5 x NPV / highest NPV (negative = 0)'], ['pay', 'Payback speed', 0.25, '<=1 yr 5, <=2 4, <=3 3, <=5 2, else 1'], ['ease', 'Ease of implementation', 0.15, '6 - complexity'], ['risk', 'Low risk', 0.10, '6 - risk'], ['fit', 'Strategic fit', 0.15, 'as entered']];
  var THRESH = [['qw_pay', 'Quick win: payback at or below (years)', 1.5], ['qw_cx', 'Quick win: complexity at or below', 2], ['hv_pay', 'High value: payback at or below (years)', 3], ['si_capex', 'Strategic investment: capex at or above (Rs Cr)', 100]];
  var TARGETS = [
    ['Tumbler index TI (+6.3 mm)', '%', 'Min', 72, 'Raise FeO a little (fuel), keep basicity ~2.0, cut Al2O3, raise bed height.'],
    ['RDI (-3.15 mm)', '%', 'Max', 30, 'Spray CaCl2 on sinter, cut Al2O3 (less high-alumina fines), raise MgO, keep FeO up.'],
    ['Reducibility RI', '%', 'Min', 65, 'Avoid excess fuel (high FeO), keep basicity >= 1.9 for calcium ferrite bonding.'],
    ['Basicity CaO/SiO2 - lower limit', 'ratio', 'Min', 1.9, 'Add limestone or burnt lime; check SiO2 of ores and fluxes.'],
    ['Basicity CaO/SiO2 - upper limit', 'ratio', 'Max', 2.3, 'Cut limestone; balance BF slag with other burden.'],
    ['FeO', '%', 'Max', 10, 'Lower solid fuel rate; check mill scale share and fuel segregation.'],
    ['Fe (total)', '%', 'Min', 54, 'More high-grade fines or concentrate; less flux SiO2.'],
    ['Al2O3', '%', 'Max', 3, 'Limit low-grade / high-alumina fines; beneficiate fines.'],
    ['MgO', '%', 'Min', 1.7, 'Raise dolomite share.'],
    ['SiO2', '%', 'Max', 5.5, 'Use lower-silica ore and limestone.'],
    ['Mean size (MPS)', 'mm', 'Min', 18, 'Raise TI and bed height; reduce handling drops before the BF.'],
    ['Fines -5 mm at BF stock house', '%', 'Max', 6, 'Raise TI; check screens at stock house; fewer transfer points.']
  ];
  var LEVERS = [
    ['bed', 'Bed height (incl. hearth layer)', 'mm', 600, 650, 'Higher bed: stronger sinter, less fuel, slightly lower output'],
    ['suction', 'Main fan suction under grate', 'mmWC', 1500, 1500, 'Higher suction raises air flow and output'],
    ['leak', 'Air leakage', 'fraction of fan flow', 0.55, 0.55, 'Leakage wastes fan flow'],
    ['moist', 'Raw mix moisture', '%', 7.5, 7, 'Off-optimum moisture hurts granulation and permeability'],
    ['mixer', 'Intensive mixer / micro-pelletising', 'list:Yes|No', 'No', 'No', 'Better granulation of concentrate and reverts'],
    ['cacl2', 'CaCl2 spraying on product sinter', 'list:Yes|No', 'No', 'Yes', 'Lowers RDI by ~6-10 points'],
    ['rf', 'Return fines', 'fraction of cake', 0.28, 0.28, 'Net output falls as return fines rise']
  ];
  var K = { feo0: 8.5, fuelRef: 70, feoFuel: 0.25, feoMgo: 0.4, mgoRef: 1.8, ti0: 70.2, tiFeo: 0.8, tiB: 4, bRef: 2, tiAl: -2.5, alRef: 2.5, tiBed: 0.006, bedRef: 600,
    rdi0: 30.2, rdiFeo: -1.2, rdiAl: 5, rdiMgo: -1.5, rdiCacl: -8, ri0: 68, riFeo: -1.5, riB: 3, mps0: 20, mpsTi: 0.4, mpsBed: 0.005, fines0: 6, finesTi: -0.3,
    sucRef: 1000, sucExp: 0.5, bedExp: -0.25, moistLoss: 0.04, moistOpt: 7, limeGain: 0.03, mixerGain: 0.05, limeRow: 10 };
  function defaults() {
    var I = {}; INPUTS.forEach(function (r) { I[r[0]] = r[2]; });
    I.mats = MATS.map(function (m) { return { name: m[0], price: m[1], cur: m[2], tgt: m[3], fe: m[4], sio2: m[5], al: m[6], cao: m[7], mgo: m[8], loi: m[9], group: m[10], scn: m[3] }; });
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
  function rate(n, pmt, pvv) { var lo = 0, hi = 10, c = -pvv; for (var i = 0; i < 80; i++) { var m = (lo + hi) / 2; if (pv(m, n, pmt) > c) lo = m; else hi = m; } return (lo + hi) / 2; }
  function fmt(n, d) { n = Number(n); if (!isFinite(n)) return '-'; return n.toLocaleString('en-IN', { maximumFractionDigits: d == null ? 1 : d, minimumFractionDigits: d == null ? 0 : d }); }
  function pct(n, d) { return fmt(Number(n) * 100, d == null ? 0 : d) + '%'; }

  /* mix helpers over a share accessor ('cur' | 'tgt' | 'scn') */
  function mixOf(I, key) {
    var sh = I.mats.map(function (m) { return num(m[key]); }), tot = sum(sh);
    var made = sum(I.mats.map(function (m, i) { return sh[i] * (1 - num(m.loi) / 100); })) / (tot || 1);
    var cons = made > 0 ? 1 / made : 0;
    var cost = sum(I.mats.map(function (m, i) { return sh[i] * num(m.price); })) / (tot || 1);
    var fuelSh = sum(I.mats.map(function (m, i) { return m.group === 'fuel' ? sh[i] : 0; })) / (tot || 1);
    var fuelPrice = fuelSh > 0 ? sum(I.mats.map(function (m, i) { return m.group === 'fuel' ? sh[i] * num(m.price) : 0; })) / (tot || 1) / fuelSh : 0;
    function oxide(f) { return sum(I.mats.map(function (m, i) { return sh[i] * num(m[f]); })) / (tot || 1) / (made || 1); }
    var limePct = (sh[K.limeRow] / (tot || 1)) * 100;
    return { tot: tot, made: made, cons: cons, cost: cost, fuelRate: fuelSh * cons * 1000, fuelPrice: fuelPrice,
      fe: oxide('fe'), sio2: oxide('sio2'), al: oxide('al'), cao: oxide('cao'), mgo: oxide('mgo'), lime: limePct };
  }
  function benefits(I) {
    var sinter = num(I.area) * num(I.prod_cur) * num(I.hrs_cur);
    var cur = mixOf(I, 'cur'), tgt = mixOf(I, 'tgt');
    var rmCost = cur.cost * cur.cons, prodCost = rmCost + num(I.conv), valExtra = num(I.p_alt) - prodCost;
    var gasGJ = num(I.gas_cv) * 4.1868 / 1000 / 1000;          // GJ per Nm3
    var gasRs = gasGJ > 0 ? num(I.gas_price) / gasGJ : 0;      // Rs per GJ
    var base = { sinter: sinter, perHour: num(I.area) * num(I.prod_cur), cons: cur.cons, mixCost: cur.cost, rmCost: rmCost, prodCost: prodCost,
      valExtra: valExtra, fuelRate: cur.fuelRate, fuelPrice: cur.fuelPrice, gasRs: gasRs, fe: cur.fe, perHM: num(I.hm) > 0 ? sinter / num(I.hm) * 1000 : 0, curShare: cur.tot, tgtShare: tgt.tot };
    var D = [], g = [];
    // 1 raw mix
    var feD = cur.fe - tgt.fe, fePen = feD * num(I.p1_fepen);
    var save1 = (rmCost - tgt.cost * tgt.cons) - fePen - num(I.p1_qc);
    D[0] = { tgtCost: tgt.cost, tgtCons: tgt.cons, feTgt: tgt.fe, fePen: fePen, save: save1 };
    g[0] = Math.round(tgt.tot * 1000) === 1000 ? save1 * sinter / 1e7 : 0;
    // 2 fuel rate
    var cut2 = cur.fuelRate - num(I.fuel_tgt);
    D[1] = { cut: cut2, save: cut2 / 1000 * sinter * cur.fuelPrice / 1e7, prep: num(I.p2_cost) * sinter / 1e7 };
    g[1] = D[1].save - D[1].prep;
    // 3 ignition
    var gj3 = (num(I.ign_cur) - num(I.ign_tgt)) / 1000 * sinter;
    D[2] = { gj: gj3, nm3: gasGJ > 0 ? gj3 / gasGJ : 0 };
    g[2] = gj3 * gasRs / 1e7;
    // 4 productivity
    var extra4 = (num(I.prod_tgt) - num(I.prod_cur)) * num(I.area) * num(I.hrs_cur);
    D[3] = { extra: extra4, val: extra4 * valExtra / 1e7, cost: num(I.p4_cost) * (sinter + extra4) / 1e7 };
    g[3] = D[3].val - D[3].cost;
    // 5 return fines
    var extra5 = num(I.rf_cur) < 1 ? sinter * ((1 - num(I.rf_tgt)) / (1 - num(I.rf_cur)) - 1) : 0;
    var fuel5 = (num(I.rf_cur) - num(I.rf_tgt)) * 100 * num(I.rf_fuel) / 1000 * sinter * cur.fuelPrice / 1e7;
    D[4] = { extra: extra5, val: extra5 * valExtra / 1e7, fuel: fuel5 };
    g[4] = D[4].val + fuel5;
    // 6 quality for BF
    var dr6 = (num(I.ti_tgt) - num(I.ti_cur)) * num(I.k_ti) + (num(I.rdi_cur) - num(I.rdi_tgt)) * num(I.k_rdi);
    var coke6 = dr6 * num(I.hm) / 1000;
    D[5] = { dr: dr6, coke: coke6, val: coke6 * num(I.p_coke) / 1e7, cost: num(I.p6_cost) * sinter / 1e7 };
    g[5] = D[5].val - D[5].cost;
    // 7 plant wastes
    var wi = Math.min(Math.max(0, Math.round(num(I.w_type))), I.mats.length - 1), ri7 = Math.min(Math.max(0, Math.round(num(I.w_repl))), I.mats.length - 1);
    var waste = num(I.w_add) * cur.cons * sinter;
    var feRatio = num(I.mats[ri7].fe) > 0 ? num(I.mats[wi].fe) / num(I.mats[ri7].fe) : 0;
    var netPerT = num(I.mats[ri7].price) * feRatio - num(I.mats[wi].price) + num(I.w_disp) - num(I.w_proc);
    D[6] = { waste: waste, feRatio: feRatio, netPerT: netPerT, wName: I.mats[wi].name, rName: I.mats[ri7].name };
    g[6] = waste * netPerT / 1e7;
    // 8 cooler WHR
    D[7] = { steamVal: num(I.steam) * num(I.steam_val) * sinter / 1e7, om: num(I.whr_om) * sinter / 1e7 };
    g[7] = I.whr_have === 'Yes' ? 0 : D[7].steamVal - D[7].om;
    // 9 air leakage
    var saved9 = num(I.leak_cur) < 1 ? num(I.fan_kwh) * (1 - (1 - num(I.leak_cur)) / (1 - num(I.leak_tgt))) : 0;
    D[8] = { kwh: saved9 };
    g[8] = saved9 * sinter * num(I.power) / 1e7;
    // 10 availability
    var extra10 = (num(I.hrs_tgt) - num(I.hrs_cur)) * num(I.area) * num(I.prod_cur);
    D[9] = { repair: num(I.mnt_cost) * num(I.mnt_red), extra: extra10, val: extra10 * valExtra / 1e7 };
    g[9] = D[9].repair + D[9].val;
    return { base: base, gross: g, detail: D };
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
  /* BF sinter quality: base vs scenario */
  function qualityOne(I, L, key) {
    var m = mixOf(I, key);
    var feo = K.feo0 + K.feoFuel * (m.fuelRate - K.fuelRef) + K.feoMgo * (m.mgo - K.mgoRef);
    var B = m.sio2 > 0 ? m.cao / m.sio2 : 0;
    var bed = num(L.bed);
    var ti = K.ti0 + K.tiFeo * (feo - K.feo0) + K.tiB * (B - K.bRef) + K.tiAl * (m.al - K.alRef) + K.tiBed * (bed - K.bedRef);
    var cacl = L.cacl2 === 'Yes' ? 1 : 0, mixer = L.mixer === 'Yes' ? 1 : 0;
    var rdi = K.rdi0 + K.rdiFeo * (feo - K.feo0) + K.rdiAl * (m.al - K.alRef) + K.rdiMgo * (m.mgo - K.mgoRef) + K.rdiCacl * cacl;
    var ri = K.ri0 + K.riFeo * (feo - K.feo0) + K.riB * (B - K.bRef);
    var mps = K.mps0 + K.mpsTi * (ti - K.ti0) + K.mpsBed * (bed - K.bedRef);
    var fines = K.fines0 + K.finesTi * (ti - K.ti0);
    var f = Math.pow(num(L.suction) / K.sucRef, K.sucExp) * (1 - num(L.leak)) * Math.pow(bed / K.bedRef, K.bedExp) *
      (1 - K.moistLoss * Math.abs(num(L.moist) - K.moistOpt)) * (1 + K.limeGain * m.lime) * (1 + K.mixerGain * mixer) * (1 - num(L.rf));
    return { mix: m, feo: feo, b: B, ti: ti, rdi: rdi, ri: ri, mps: mps, fines: fines, factor: f,
      fe: m.fe, sio2: m.sio2, al: m.al, cao: m.cao, mgo: m.mgo, fuelRate: m.fuelRate, lime: m.lime, bed: bed };
  }
  function quality(I) {
    var base = qualityOne(I, I.lev.base, 'cur'), scn = qualityOne(I, I.lev.scn, 'scn');
    base.prod = num(I.prod_cur); scn.prod = base.factor > 0 ? num(I.prod_cur) * scn.factor / base.factor : 0;
    scn.output = base.factor > 0 ? scn.factor / base.factor : 0;
    var keys = ['ti', 'rdi', 'ri', 'b', 'b', 'feo', 'fe', 'al', 'mgo', 'sio2', 'mps', 'fines'];
    var rows = TARGETS.map(function (t, i) {
      var tgt = I.tgt[i], b = base[keys[i]], s = scn[keys[i]], has = tgt !== '' && tgt != null && isFinite(Number(tgt));
      var ok = function (v) { return !has ? 'No target' : t[2] === 'Min' ? (v >= Number(tgt) ? 'MET' : 'NOT MET') : (v <= Number(tgt) ? 'MET' : 'NOT MET'); };
      var ach = function (v) { return (!has || Number(tgt) === 0 || v <= 0) ? 0 : Math.min(150, (t[2] === 'Min' ? v / Number(tgt) : Number(tgt) / v) * 100); };
      return { name: t[0], unit: t[1], lim: t[2], tgt: tgt, base: b, scn: s, bs: ok(b), ss: ok(s), diff: s - b, fix: t[4], achB: ach(b), achS: ach(s) };
    });
    var nT = rows.filter(function (r) { return r.tgt !== '' && r.tgt != null; }).length;
    var metB = rows.filter(function (r) { return r.bs === 'MET'; }).length, metS = rows.filter(function (r) { return r.ss === 'MET'; }).length;
    var chem = qualityOne(I, I.lev.base, 'scn');       // scenario mix with base levers: isolates the raw-mix effect
    var moved = [
      ['Raw mix (chemistry and fuel rows)', chem.ti - base.ti, chem.rdi - base.rdi, chem.ri - base.ri],
      ['Process levers (bed, moisture, CaCl2, mixer)', scn.ti - chem.ti, scn.rdi - chem.rdi, scn.ri - chem.ri]
    ];
    return { base: base, scn: scn, rows: rows, metB: metB + ' of ' + nT, metS: metS + ' of ' + nT, moved: moved };
  }
  function diagnosis(I, ben, pr) {
    var b = ben.base, D = ben.detail, q = quality(I), o = [];
    var hi = I.mats[0];
    o[0] = (Math.round(b.tgtShare * 1000) !== 1000 ? 'CHECK: target mix shares add to ' + pct(b.tgtShare) + ' - must be 100%. ' : '') + 'Raw mix Rs ' + fmt(b.mixCost, 0) + '/t now, Rs ' + fmt(D[0].tgtCost, 0) + '/t target. Sinter Fe ' + fmt(b.fe, 1) + '% now, ' + fmt(D[0].feTgt, 1) + '% with target mix. High-grade fines ' + pct(hi.cur) + ' now, ' + pct(hi.tgt) + ' target. ' + (num(hi.cur) > 0.35 ? 'Dependence on costly high-grade fines is high - the main mix lever. ' : '') + 'Net saving Rs ' + fmt(D[0].save, 0) + '/t sinter after Fe penalty and QC.';
    o[1] = 'Solid fuel ' + fmt(b.fuelRate, 1) + ' kg/t from the mix vs target ' + fmt(I.fuel_tgt, 0) + ' (benchmark 55). ' + (b.fuelRate > 65 ? 'Fuel above benchmark - size control and segregation pay quickly. ' : '') + 'Watch FeO ' + fmt(q.base.feo, 1) + '% and TI as fuel falls.';
    o[2] = 'Ignition heat ' + fmt(I.ign_cur, 0) + ' MJ/t vs benchmark 45. ' + (num(I.ign_cur) > 60 ? 'Well above benchmark - burner and hood work justified. ' : '') + 'Saving ' + fmt(D[2].nm3 / 1e6, 2) + ' million Nm3 gas/yr.';
    o[3] = 'Productivity ' + fmt(I.prod_cur, 2) + ' -> ' + fmt(I.prod_tgt, 2) + ' t/m2/h (benchmark 1.5). Extra sinter ' + fmt(D[3].extra, 0) + ' t/yr, worth Rs ' + fmt(b.valExtra, 0) + '/t against bought-in burden. ' + (q.base.factor > 0 && num(I.lev.base.leak) > 0.45 ? 'High air leakage is throttling the same fan - project 9 helps output too.' : '');
    o[4] = 'Return fines ' + pct(I.rf_cur) + ' of cake vs target ' + pct(I.rf_tgt) + ' (benchmark 22%). Extra net sinter ' + fmt(D[4].extra, 0) + ' t/yr at the same cake rate. ' + (num(I.rf_cur) > 0.25 ? 'Returns above benchmark - TI and burn-through control first.' : '');
    o[5] = 'TI ' + fmt(I.ti_cur, 0) + ' -> ' + fmt(I.ti_tgt, 0) + ' (benchmark 74); RDI ' + fmt(I.rdi_cur, 0) + ' -> ' + fmt(I.rdi_tgt, 0) + ' (benchmark 26). Coke-rate cut ~' + fmt(D[5].dr, 1) + ' kg/tHM = ' + fmt(D[5].coke, 0) + ' t coke/yr. Model says RDI responds strongly to Al2O3 (' + fmt(q.base.al, 2) + '%) and CaCl2.';
    o[6] = 'Adding ' + pct(I.w_add) + ' ' + D[6].wName + ' replaces ' + D[6].rName + ' (Fe ratio ' + fmt(D[6].feRatio, 2) + '). Net value Rs ' + fmt(D[6].netPerT, 0) + '/t waste after preparation. ' + (D[6].netPerT <= 0 ? 'NOT paying as entered - check prices and preparation cost.' : 'Cap Zn and alkali input to the BF.');
    o[7] = I.whr_have === 'Yes' ? 'Cooler WHR already installed: benefit set to zero. Focus on hot-air recirculation to ignition.' : 'No cooler WHR today: ~' + fmt(I.steam, 2) + ' t steam/t sinter is recoverable, worth Rs ' + fmt(D[7].steamVal, 1) + ' Cr/yr before O&M. Seal the cooler first.';
    o[8] = 'Air leakage ' + pct(I.leak_cur) + ' vs target ' + pct(I.leak_tgt) + ' (benchmark 35%). Fan saving ' + fmt(D[8].kwh, 1) + ' kWh/t sinter. ' + (num(I.leak_cur) > 0.45 ? 'Over half the fan flow is leaking - seals programme is overdue.' : '');
    o[9] = 'Operating hours ' + fmt(I.hrs_cur, 0) + ' -> ' + fmt(I.hrs_tgt, 0) + ' h/yr (benchmark 8300). Extra sinter ' + fmt(D[9].extra, 0) + ' t/yr plus Rs ' + fmt(D[9].repair, 1) + ' Cr/yr repair saving.';
    return o;
  }
  function strategyLines(I, pr) {
    var r = pr.byRank, qw = pr.rows.filter(function (x) { return x.cat === 'Quick win'; });
    return ['1. Start with: ' + r[0].p.name + ' and ' + r[1].p.name + ' - the two highest-scoring projects.',
      '2. Quick wins to launch in the first 6 months: ' + qw.length + ' project(s), worth Rs ' + fmt(pr.qwBenefit, 1) + ' Cr/yr. Use their savings to fund later phases.',
      '3. Capital projects (capex >= Rs ' + fmt(I.th.si_capex, 0) + ' Cr): ' + pr.strategic + ' - start feasibility studies in Phase 1 so approvals are ready by Phase 2/3.',
      '4. Treat raw mix optimisation as a continuous process: re-run it whenever ore grades, prices or BF sinter targets change, and check the result on the BF quality page.',
      '5. Avoid double counting: bed permeability, return fines and availability all add sinter output; fuel rate and return fines both cut fuel; raw mix and reverts both change the mix. Lower Confidence % where they overlap.',
      '6. Review monthly: compare actual KPIs with targets, update Inputs, and let the ranking re-order.'];
  }
  function run(I) {
    var ben = benefits(I), pr = prioritise(I, ben), q = quality(I);
    return { ben: ben, pr: pr, q: q, diag: diagnosis(I, ben, pr), strategy: strategyLines(I, pr) };
  }
  root.SIP = { MATS: MATS, PROJECTS: PROJECTS, INPUTS: INPUTS, GROUPS: GROUPS, WEIGHTS: WEIGHTS, THRESH: THRESH, TARGETS: TARGETS, LEVERS: LEVERS, K: K,
    MATCFG: { key: 'mats', title: 'C. Raw materials, prices and mix shares (dry basis)', unit: 'Rs/t dry' }, MOVEDCOLS: ['TI', 'RDI', 'RI'],
    defaults: defaults, run: run, benefits: benefits, prioritise: prioritise, quality: quality, fmt: fmt, pct: pct, pv: pv, rate: rate };
})(typeof window !== 'undefined' ? window : module.exports);
