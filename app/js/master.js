/* Master Sheet: the fixed target every upload is mapped into (same sheets, rows, columns and units as
   Sinter_Master_Template_blank.xlsx), the validation ranges, and the editable Defaults table.
   Defaults are typical, generally accepted sinter-plant values: every item is marked "typical, please verify"
   and is only ever used after the user approves it in the OK dialog. */
(function () {
  'use strict';
  var SD = window.SD;
  var TEMPLATE_VERSION = 'Sinter_Master_Template_blank.xlsx (Blend, Machine, Lab_Results, RM_Chemistry, Sources)';

  // ---------- Blend ----------
  // template row order -> app material index (SD.mats)
  var BLEND_ROWS = [
    { i: 2, l: 'Iron ore fines Grade A (Fe 62+)' }, { i: 0, l: 'Iron ore fines Grade B (Fe 60–62)' },
    { i: 1, l: 'Iron ore fines Grade C (Fe 58–60)' }, { i: 16, l: 'Iron ore fines Grade D (Fe below 58)' },
    { i: 3, l: 'Mill scale' }, { i: 4, l: 'BF sinter fines return' }, { i: 17, l: 'Plant return fines (own, circulating)' },
    { i: 5, l: 'BF iron ore fines return' }, { i: 6, l: 'Flue dust' }, { i: 7, l: 'Dolomite fines' }, { i: 8, l: 'Limestone fines' },
    { i: 9, l: 'Limestone undersize (LP return)' }, { i: 10, l: 'Calcined lime (purchased)' }, { i: 11, l: 'Calcined lime (lime plant)' },
    { i: 12, l: 'Coke fines (purchased)' }, { i: 13, l: 'Coke fines (BF return online)' }, { i: 14, l: 'Anthracite / nut coke' },
    { i: 15, l: 'Other iron-bearing (pellet fines, CRM, sludge ...)' }
  ];
  var BLEND_COLS = [
    { k: 'use', l: 'MT/day (wet)', u: 'MT/day', lo: 0, hi: 20000 },
    { k: 'pct', l: '% of charge', u: '%', lo: 0, hi: 100 },
    { k: 'kgt', l: 'kg/t sinter', u: 'kg/t', lo: 0, hi: 2000 }
  ];
  var BLEND_EXTRA = [
    { k: 'totCharge', l: 'Total wet charge', u: 'MT/day', need: 'pct', lo: 100, hi: 40000, note: 'only needed with the % column' },
    { k: 'sinterProd', l: 'Sinter production base', u: 'MT/day', need: 'kgt', lo: 100, hi: 30000, note: 'only needed with the kg/t column' }
  ];

  // ---------- Machine ----------
  var MACHINE = [
    { k: 'speed', l: 'Machine (pallet) speed', u: 'm/min', d: 2, lo: 0.5, hi: 6, syn: ['m/c speed', 'strand speed', 'pallet speed', 'sm speed', 's/m speed', 'machine speed hz'] },
    { k: 'ign', l: 'Ignition furnace temperature', u: '°C', d: 0, lo: 900, hi: 1350, syn: ['ign temp', 'ignition hood temp', 'ign fur temp'] },
    { k: 'windP', l: 'Wind main pressure (suction)', u: 'kPa', d: 2, lo: 5, hi: 25, syn: ['wind main suction', 'main suction', 'w/m suct', 'suction under grate'] },
    { k: 'windT', l: 'Wind main temperature', u: '°C', d: 0, lo: 60, hi: 300, syn: ['waste gas temp', 'wind main temp', 'w/m temp'] },
    { k: 'idFan', l: 'ID fan speed', u: 'rpm', d: 0, lo: 300, hi: 1600, syn: ['id fan rpm', 'idf speed', 'main fan speed'] },
    { k: 'btp', l: 'Burn-through temperature (BTP)', u: '°C', d: 0, lo: 200, hi: 600, syn: ['btp', 'burn through temp', 'btp temp'] },
    { k: 'bfg', l: 'BF gas flow to ignition', u: 'Nm³/h', d: 0, lo: 500, hi: 30000, syn: ['bfg flow', 'bf gas', 'ignition gas flow'] },
    { k: 'bed', l: 'Sinter bed height', u: 'mm', d: 0, lo: 300, hi: 1000, syn: ['bed height', 'bed ht', 'bed depth', 'layer height'] },
    { k: 'moist', l: 'Granulated mix moisture', u: '%', d: 2, lo: 4, hi: 12, syn: ['mix moisture', 'green mix moisture', 'charge moisture'] },
    { k: 'coke3', l: 'Coke breeze -3 mm fraction', u: '%', d: 1, lo: 50, hi: 100, syn: ['coke -3 mm', 'cb -3mm', 'coke crushing index'] },
    { k: 'alk', l: 'Sinter alkali Na₂O+K₂O', u: '%', d: 3, lo: 0, hi: 0.6, syn: ['alkali', 'na2o+k2o'] },
    { k: 'area', l: 'Strand (suction) area', u: 'm²', d: 0, lo: 20, hi: 700, syn: ['suction area', 'grate area', 'machine area'] },
    { k: 'width', l: 'Pallet width', u: 'm', d: 1, lo: 1.5, hi: 6, syn: ['strand width', 'grate width'] },
    { k: 'cacl2', l: 'CaCl₂ (halide) spraying', u: 'Yes/No', type: 'yn', syn: ['halide spraying', 'cacl2 spraying'] },
    { k: 'basis', l: 'Production basis', u: 'Charge/Machine', type: 'sel', opts: ['Charge', 'Machine'], syn: ['production basis'] }
  ];

  // ---------- Lab_Results (optional, never defaulted) ----------
  var LAB = [
    { k: 'fe', l: 'Fe(T)', u: '%', lo: 40, hi: 65 }, { k: 'feo', l: 'FeO', u: '%', lo: 3, hi: 20 }, { k: 'sio2', l: 'SiO₂', u: '%', lo: 2, hi: 12 },
    { k: 'al2o3', l: 'Al₂O₃', u: '%', lo: 0.5, hi: 6 }, { k: 'cao', l: 'CaO', u: '%', lo: 4, hi: 20 }, { k: 'mgo', l: 'MgO', u: '%', lo: 0.5, hi: 5 },
    { k: 'mno', l: 'MnO', u: '%', lo: 0, hi: 2 }, { k: 'b2', l: 'Basicity B2 (CaO/SiO₂)', u: '-', lo: 0.8, hi: 3.5 },
    { k: 'ti', l: 'Tumbler index TI (+6.3 mm)', u: '%', lo: 50, hi: 85 }, { k: 'rdi', l: 'RDI (-3.15 mm)', u: '%', lo: 5, hi: 50 },
    { k: 'ri', l: 'Reducibility RI', u: '%', lo: 40, hi: 90 }, { k: 'si', l: 'Shatter index SI (+10 mm)', u: '%', lo: 60, hi: 95 },
    { k: 'ai', l: 'Abrasion index AI (-0.5 mm)', u: '%', lo: 1, hi: 12 }, { k: 'mps', l: 'Mean particle size MPS', u: 'mm', lo: 10, hi: 40 },
    { k: 'p50', l: '+50 mm', u: '%', lo: 0, hi: 100 }, { k: 'p40', l: '40-50 mm', u: '%', lo: 0, hi: 100 }, { k: 'p25', l: '25-40 mm', u: '%', lo: 0, hi: 100 },
    { k: 'p10', l: '10-25 mm', u: '%', lo: 0, hi: 100 }, { k: 'p6', l: '6-10 mm', u: '%', lo: 0, hi: 100 }, { k: 'm6', l: '-6 mm', u: '%', lo: 0, hi: 100 },
    { k: 'prod', l: 'Actual production', u: 'MT/day', lo: 100, hi: 30000 }
  ];

  // ---------- RM_Chemistry ----------
  var CHEM = [
    { k: 'moist', l: 'Moisture %', u: '%' }, { k: 'fe', l: 'Fe(T) %', u: '%' }, { k: 'feo', l: 'FeO %', u: '%' }, { k: 'sio2', l: 'SiO₂ %', u: '%' },
    { k: 'al2o3', l: 'Al₂O₃ %', u: '%' }, { k: 'cao', l: 'CaO %', u: '%' }, { k: 'mgo', l: 'MgO %', u: '%' }, { k: 'mno', l: 'MnO %', u: '%' },
    { k: 'loi', l: 'LOI %', u: '%' }, { k: 'fc', l: 'Fixed C %', u: '%' }, { k: 'burn', l: 'Burn-off (LOI or FC+VM) %', u: '%' },
    { k: 'mps', l: 'Mean size mm', u: 'mm' }, { k: 'm1', l: '-1 mm %', u: '%' }, { k: 'p3', l: '+3 mm %', u: '%' },
    { k: 's', l: 'S %', u: '%' }, { k: 'p', l: 'P %', u: '%' }, { k: 'tio2', l: 'TiO₂ %', u: '%' }
  ];
  var CHEM_ROWS = BLEND_ROWS.filter(function (r) { return r.i !== 17; }); // plant return fines follow the sinter: no analysis
  function matType(i) { return SD.types[i]; } // Ore | Flux | Fuel | Return
  /* which columns a material needs. Fuels: Fixed C and burn-off (FC+VM), no LOI. Ores and fluxes: LOI, and the burn-off
     is the LOI (filled from it, never asked separately). Flue dust carries both LOI and fixed carbon. */
  function chemApplies(k, i) {
    var t = matType(i);
    if (k === 'fc') return t === 'Fuel' || i === 6;
    if (k === 'loi') return t !== 'Fuel';
    if (k === 'burn') return t === 'Fuel' || i === 6; // ores/fluxes: burn-off = LOI (derived)
    return true;
  }
  // validation range of an analysis value by material type
  function chemRange(k, i) {
    var t = matType(i), ore = t === 'Ore' || t === 'Return';
    var R = {
      moist: [0, 15], fe: ore ? (i === 3 ? [60, 76] : i === 6 || i === 15 ? [20, 70] : [40, 70]) : [0, 10],
      feo: i === 3 ? [30, 70] : ore ? [0, 25] : [0, 5], sio2: [0, 15], al2o3: [0, 15], cao: t === 'Flux' ? [20, 98] : [0, 15],
      mgo: i === 7 ? [12, 25] : [0, 10], mno: [0, 3], loi: [0, 48], fc: t === 'Fuel' ? [55, 95] : [0, 40], burn: t === 'Fuel' ? [55, 98] : [-5, 48],
      mps: [0.05, 10], m1: [0, 100], p3: [0, 100], s: [0, 2], p: [0, 0.5], tio2: [0, 3]
    };
    return R[k] || [0, 100];
  }

  // ---------- Defaults table (typical, generally accepted values; please verify) ----------
  /* Machine: a medium strand (90–220 m², 3 m wide) on Indian/Asian ore, typical operating band in brackets.
     Chemistry: dry basis, moisture as received; typical Indian sinter-plant raw materials. */
  /* Neutral machine defaults: the Engine's reference plant (Sinter_Prediction_Module_v2 DPR average and plant normals).
     The Engine reacts to the difference from this plant, so a default here does not shift the prediction. */
  var DEF_MACHINE = {
    speed: { v: 1.23, band: '1.2–3.0', note: 'Engine reference plant (18.76 Hz × 0.0656 m/min per Hz)' },
    ign: { v: 1171, band: '1050–1250', note: 'Engine reference plant' },
    windP: { v: 12.66, band: '10–17', note: 'Engine reference plant (about 1290 mmWC)' },
    windT: { v: 181, band: '110–200', note: 'Engine reference plant' },
    idFan: { v: 1269, band: '750–1500', note: 'Engine reference plant' },
    btp: { v: 373, band: '320–450', note: 'Engine reference plant' },
    bfg: { v: 7644, band: '3000–9000', note: 'Engine reference plant' },
    bed: { v: 600, band: '500–700', note: 'Engine reference plant normal' },
    moist: { v: 7.5, band: '6.0–8.5', note: 'Engine reference plant normal' },
    coke3: { v: 80, band: '75–85', note: 'Engine reference plant normal' },
    alk: { v: 0.09, band: '0.05–0.20', note: 'Engine reference plant normal' },
    area: { v: 120, band: '60–500', note: 'Engine reference plant (machine specific: use your strand area)' },
    width: { v: 3.0, band: '2.5–5.0', note: 'Engine reference plant (machine specific)' },
    cacl2: { v: 'No', band: 'Yes/No', note: 'Engine reference plant' },
    basis: { v: 'Charge', band: 'Charge/Machine', note: 'Charge = mass balance of the blend' }
  };

  //           moist  Fe   FeO   SiO2  Al2O3 CaO   MgO   MnO   LOI   FC    Burn  MPS  -1mm +3mm  S     P     TiO2
  var CK = ['moist', 'fe', 'feo', 'sio2', 'al2o3', 'cao', 'mgo', 'mno', 'loi', 'fc', 'burn', 'mps', 'm1', 'p3', 's', 'p', 'tio2'];
  var DEF_CHEM_ROWS = {
    2:  [8.0, 63.5, 0.5, 3.0, 2.0, 0.10, 0.10, 0.10, 3.0, 0, 3.0, 3.0, 30, 40, 0.01, 0.06, 0.10],
    0:  [9.0, 61.0, 0.5, 4.0, 2.8, 0.15, 0.10, 0.10, 4.5, 0, 4.5, 3.0, 33, 38, 0.01, 0.07, 0.12],
    1:  [10.0, 59.0, 0.5, 5.0, 3.5, 0.15, 0.10, 0.10, 5.5, 0, 5.5, 3.0, 35, 36, 0.01, 0.08, 0.15],
    16: [11.0, 56.5, 0.5, 6.8, 4.0, 0.15, 0.10, 0.10, 6.0, 0, 6.0, 3.0, 36, 36, 0.01, 0.08, 0.18],
    3:  [4.0, 71.0, 50.0, 1.0, 0.4, 0.5, 0.2, 0.8, 0, 0, -1.0, 1.5, 55, 10, 0.02, 0.01, 0.01],
    4:  [1.0, 55.0, 9.0, 5.8, 3.0, 10.8, 1.9, 0.3, 0, 0, 0, 2.5, 25, 35, 0.02, 0.07, 0.15],
    5:  [8.0, 61.5, 0.5, 4.3, 2.7, 0.15, 0.10, 0.10, 4.0, 0, 4.0, 3.5, 28, 45, 0.01, 0.06, 0.15],
    6:  [10.0, 36.0, 5.0, 7.0, 3.5, 5.0, 1.5, 0.3, 25.0, 25.0, 27.0, 0.1, 95, 0, 0.3, 0.05, 0.15],
    7:  [3.0, 0.5, 0, 2.0, 0.5, 30.0, 20.0, 0.05, 45.5, 0, 45.5, 1.5, 40, 10, 0.02, 0.01, 0.01],
    8:  [3.0, 0.3, 0, 2.0, 0.5, 52.0, 2.0, 0.05, 42.5, 0, 42.5, 1.5, 40, 10, 0.03, 0.01, 0.02],
    9:  [4.0, 0.5, 0, 3.0, 0.7, 50.0, 2.0, 0.05, 41.0, 0, 41.0, 2.0, 35, 15, 0.03, 0.01, 0.02],
    10: [0.5, 0.3, 0, 2.0, 0.6, 88.0, 2.0, 0.05, 6.0, 0, 6.0, 1.0, 60, 5, 0.05, 0.01, 0.02],
    11: [0.5, 0.3, 0, 2.5, 0.7, 85.0, 2.5, 0.05, 8.0, 0, 8.0, 1.0, 60, 5, 0.05, 0.01, 0.02],
    12: [10.0, 1.5, 0, 8.0, 5.0, 0.7, 0.3, 0.02, 0, 82.0, 84.5, 1.5, 45, 20, 0.6, 0.03, 0.15],
    13: [12.0, 2.0, 0, 9.0, 5.5, 0.8, 0.4, 0.02, 0, 80.0, 82.5, 1.6, 45, 20, 0.6, 0.03, 0.15],
    14: [8.0, 1.0, 0, 6.0, 3.5, 0.6, 0.3, 0.02, 0, 80.0, 88.0, 1.5, 45, 18, 0.5, 0.02, 0.10],
    15: [12.0, 45.0, 8.0, 8.0, 3.0, 3.0, 1.0, 0.2, 12.0, 0, 12.0, 0.2, 80, 2, 0.1, 0.05, 0.10]
  };
  var DEF_CHEM_NOTE = {
    2: 'Hematite fines, Fe 62 % and above', 0: 'Hematite fines, Fe 60–62 %', 1: 'Hematite/goethite fines, Fe 58–60 %', 16: 'Low-grade high-alumina fines, Fe below 58 %',
    3: 'FeO-rich; gains mass when it oxidises, so burn-off is −1 %', 4: 'Screened BF sinter, chemistry close to the sinter', 5: 'Screened BF ore, like Grade B',
    6: 'Very variable; contains carbon', 7: 'Sinter-grade dolomite, crushed to −3 mm', 8: 'Sinter-grade limestone, crushed to −3 mm', 9: 'Lime-plant undersize, slightly more silica',
    10: 'Purchased quicklime', 11: 'Own lime plant, slightly less burnt', 12: 'Ash about 15 %, VM about 2.5 %', 13: 'Higher ash and moisture than purchased',
    14: 'VM about 8 %', 15: 'Very variable (pellet fines, CRM, sludge): use your own analysis where possible'
  };
  function builtinDefaults() {
    var chem = {};
    Object.keys(DEF_CHEM_ROWS).forEach(function (i) { var o = {}; CK.forEach(function (k, j) { o[k] = DEF_CHEM_ROWS[i][j]; }); chem[i] = o; });
    var mach = {}; Object.keys(DEF_MACHINE).forEach(function (k) { mach[k] = { v: DEF_MACHINE[k].v, band: DEF_MACHINE[k].band, note: DEF_MACHINE[k].note }; });
    return { v: 1, mach: mach, chem: chem, chemNote: JSON.parse(JSON.stringify(DEF_CHEM_NOTE)), status: 'typical, please verify', edited: null, source: 'Master_default_data.xlsx (built in)' };
  }
  /* Additional parameters of the master sheet that v1.3 uses for a better prediction (shown green when you give them).
     Machine: wind main temperature (FeO), ID fan speed (TI and bed permeability), BF gas to ignition (TI).
     RM_Chemistry: FeO of each material (sinter FeO via the mix FeO), +3 mm and mean size (bed permeability). */
  var EXTRA = {
    mach: { windT: 'raises sinter FeO when the wind main runs hot (excess heat in the bed)', idFan: 'more air: faster flame front, slightly lower TI, better bed permeability', bfg: 'ignition intensity per m² of strand: top-layer strength (TI)' },
    chem: { feo: 'FeO carried in by mill scale, return sinter and magnetite raises sinter FeO', p3: '+3 mm granules open the bed: machine-basis production', mps: 'coarser mix opens the bed: machine-basis production' }
  };
  function isExtra(sheet, k) { return !!(EXTRA[sheet] && EXTRA[sheet][k]); }

  /* Read Master_default_data.xlsx (sheets Defaults_Machine and Defaults_RM_Chemistry) into the defaults table.
     Rows and columns are matched by their labels, so the sheet may be re-ordered. Returns {D, n, skipped}. */
  function normL(t) { return String(t == null ? '' : t).toLowerCase().replace(/[₀-₉]/g, function (c) { return String(c.charCodeAt(0) - 8320); }).replace(/[–—−]/g, '-').replace(/[^a-z0-9+\-.%/]+/g, ' ').trim(); }
  function importDefaultsXlsx(u8) {
    if (!window.XLSX) throw new Error('Excel reader not loaded');
    var wb = XLSX.read(u8, { type: 'array' }), D = loadDefaults(), n = 0, skipped = [];
    var sh = function (re) { var nm = wb.SheetNames.find(function (x) { return re.test(x); }); return nm ? XLSX.utils.sheet_to_json(wb.Sheets[nm], { header: 1, raw: true, defval: null }) : null; };
    var numv = function (v) { if (typeof v === 'number') return isFinite(v) ? v : null; var t = String(v == null ? '' : v).trim(); if (!t || /^[-–=]/.test(t) && !/^-\d/.test(t)) return null; var x = parseFloat(t.replace(/,/g, '')); return isFinite(x) ? x : null; };
    var mrows = sh(/defaults?_?machine/i);
    if (mrows) mrows.forEach(function (r) {
      if (!r || r[0] == null) return; var l = normL(r[0]), p = MACHINE.find(function (q) { return normL(q.l) === l; }); if (!p) return;
      var v = r[1]; if (p.type) { v = String(v == null ? '' : v).trim(); if (!v) return; } else { v = numv(v); if (v == null) { skipped.push(p.l); return; } }
      D.mach[p.k] = D.mach[p.k] || {}; D.mach[p.k].v = v; if (r[3] != null) D.mach[p.k].band = String(r[3]); if (r[4] != null) D.mach[p.k].note = String(r[4]); n++;
    });
    var crows = sh(/defaults?_?rm|rm_?chem/i);
    if (crows) {
      var hi = crows.findIndex(function (r) { return r && normL(r[0]) === 'material'; });
      if (hi >= 0) {
        var head = crows[hi].map(normL), col = {};
        CHEM.forEach(function (c) { var j = head.indexOf(normL(c.l)); if (j >= 0) col[c.k] = j; });
        crows.slice(hi + 1).forEach(function (r) {
          if (!r || r[0] == null) return; var l = normL(r[0]), row = BLEND_ROWS.find(function (b) { return normL(b.l) === l; });
          if (!row || row.i === 17) return; var o = D.chem[row.i] || (D.chem[row.i] = {});
          Object.keys(col).forEach(function (k) { var v = numv(r[col[k]]); if (v != null) { o[k] = v; n++; } });
          var nj = head.indexOf('note'); if (nj >= 0 && r[nj]) D.chemNote[row.i] = String(r[nj]);
        });
      }
    }
    if (!n) throw new Error('no Defaults_Machine / Defaults_RM_Chemistry values found');
    D.source = 'imported master default sheet'; saveDefaults(D);
    return { D: D, n: n, skipped: skipped };
  }
  var DKEY = 'sp.defaultsTable.v2';
  function loadDefaults() {
    try { var d = JSON.parse(localStorage.getItem(DKEY) || 'null'); if (d && d.mach && d.chem) return d; } catch (e) { }
    return builtinDefaults();
  }
  function saveDefaults(d) { d.edited = new Date().toISOString(); try { localStorage.setItem(DKEY, JSON.stringify(d)); } catch (e) { } }
  function resetDefaults() { try { localStorage.removeItem(DKEY); } catch (e) { } return builtinDefaults(); }

  window.SinterMaster = {
    TEMPLATE_VERSION: TEMPLATE_VERSION, BLEND_ROWS: BLEND_ROWS, BLEND_COLS: BLEND_COLS, BLEND_EXTRA: BLEND_EXTRA, MACHINE: MACHINE, LAB: LAB,
    CHEM: CHEM, CHEM_ROWS: CHEM_ROWS, CK: CK, chemApplies: chemApplies, chemRange: chemRange, matType: matType,
    builtinDefaults: builtinDefaults, loadDefaults: loadDefaults, EXTRA: EXTRA, isExtra: isExtra, importDefaultsXlsx: importDefaultsXlsx, saveDefaults: saveDefaults, resetDefaults: resetDefaults, DEF_CHEM_NOTE: DEF_CHEM_NOTE
  };
})();
