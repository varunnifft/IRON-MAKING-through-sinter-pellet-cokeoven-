/* Reads inputs from Excel / CSV / PDF / text / web links and maps labels to app fields.
   Works on any layout where a label sits next to its value, on tables with a header row, and on the
   app's own template and the Sinter_Prediction_Module workbook. */
(function () {
  var SD = window.SD;

  function norm(s) {
    return String(s == null ? '' : s).replace(/[\u2080-\u2089]/g, function (c) { return String(c.charCodeAt(0) - 0x2080); }).toLowerCase().replace(/[–—−]/g, '-')
      .replace(/[()\[\]{}]/g, ' ').replace(/[^a-z0-9+\-.\/% ]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  // field key -> aliases. use.N = raw-material usage, lab.X = sinter lab result, plain = machine/process
  var ALIASES = {
    'use.0': ['iron ore fines grade b', 'grade b', 'iof grade b', 'iron fine grade b', 'iron ore fines fe 60', 'fe 60', 'fe60', 'ore fines 60', 'iof 60', 'iron ore 60', 'fe-60'],
    'use.1': ['iron ore fines grade c', 'grade c', 'iof grade c', 'iron fine grade c', 'fe 58-60', '58-60', 'iron ore fines fe 58', 'fe 58', 'fe58', 'ore fines 58', 'iof 58', 'iron ore 58', 'fe-58'],
    'use.2': ['iron ore fines grade a', 'grade a', 'iof grade a', 'iron fine grade a', 'iron ore fines fe 62+', 'iron ore fines fe 62', 'fe 62+', 'fe 62', 'fe62', 'ore fines 62', 'iof 62', 'fe-62'],
    'use.3': ['mill scale', 'millscale'],
    'use.4': ['bf sinter fines return', 'bf sinter return', 'bf return sinter', 'bf sinter fines', 'bf rs', 'bfrs'],
    'use.17': ['plant return fines', 'own return fines', 'sinter return fines', 'sinter fines return', 'return sinter', 'return fines', 'ret fines', 'circulating return fines', 'hot return fines', 'cold return fines', 'plant rf'],
    'use.5': ['bf iron ore fines return', 'bf iron ore fines', 'bf iof', 'bf ore fines return', 'bf iron ore return', 'bf ore return', 'iron ore fines return'],
    'use.6': ['flue dust', 'bf flue dust'],
    'use.7': ['dolomite fines', 'dolomite'],
    'use.8': ['limestone fines', 'limestone', 'lime stone'],
    'use.9': ['limestone undersize lp return', 'limestone undersize', 'lp return', 'ls undersize'],
    'use.10': ['calcined lime purchased', 'purchased lime', 'burnt lime purchased', 'calcined lime', 'burnt lime', 'quick lime'],
    'use.11': ['calcined lime lime plant', 'lime plant lime', 'lime plant', 'lime from lime plant'],
    'use.12': ['coke fines purchased', 'purchased coke', 'coke breeze', 'coke fines', 'coke'],
    'use.13': ['coke fines bf return online', 'coke fines bf return', 'coke bf return', 'bf return coke', 'bf coke return', 'bf coke fines'],
    'use.14': ['anthracite / nut coke', 'anthracite', 'nut coke'],
    'use.16': ['iron ore fines grade d', 'grade d', 'iof grade d', 'low grade fines', 'low grade ore'],
    'use.15': ['other iron-bearing', 'other iron bearing', 'pellet fines', 'crm', 'sludge', 'other iron'],
    blendBasis: ['blend entry basis', 'blend entered as', 'enter blend as', 'entry basis'],
    sinterProd: ['sinter production base', 'base sinter production', 'sinter production for kg/t', 'production base for kg/t'],
    width: ['pallet width', 'strand width', 'machine width', 'grate width', 'width of pallet', 'width of strand'],
    totCharge: ['total wet charge', 'total charge', 'total raw mix', 'total wet mix', 'wet charge', 'total feed', 'total raw material', 'total blend'],
    speed: ['sinter machine speed', 'machine speed', 'strand speed', 'pallet speed', 'm/c speed', 'mc speed', 'speed'],
    ign: ['ign fur temp', 'ign furnace temp', 'ignition fur temp', 'ignition furnace temperature', 'ignition furnace temp', 'ignition hood temperature', 'ignition hood temp', 'ignition temperature', 'ignition temp', 'ign temp', 'ignition'],
    windP: ['wind main pressure', 'wind main suction', 'suction under grate', 'wind box suction', 'windbox suction', 'main header suction', 'main header pressure', 'suction at main header', 'windmain pressure', 'main suction', 'suction pressure', 'suction', 'wind main p'],
    windT: ['wind main temperature', 'wind main temp', 'windmain temp', 'waste gas temperature', 'waste gas temp', 'main header temperature', 'main header temp', 'exhaust gas temperature', 'exhaust gas temp', 'wind main t'],
    idFan: ['id fan speed', 'id fan rpm', 'id fan', 'fan speed'],
    btp: ['burn-through temperature', 'burn through temperature', 'burn-through temp', 'burn through temp', 'btp temperature', 'btp temp', 'btp'],
    bfg: ['bf gas flow to ignition', 'bf gas flow', 'bfg flow', 'bf gas', 'bfg', 'mixed gas flow', 'ignition gas flow', 'gas flow to ignition', 'ignition fuel gas flow'],
    bed: ['sinter bed height', 'bed height', 'bed depth', 'layer height', 'bed thickness'],
    moist: ['granulated mix moisture', 'mix moisture', 'mixture moisture', 'moisture of mix', 'green mix moisture', 'charge moisture added', 'moisture'],
    alk: ['sinter alkali na2o+k2o', 'alkali na2o+k2o', 'na2o+k2o', 'na2o + k2o', 'alkali'],
    coke3: ['coke breeze -3 mm fraction', 'coke breeze -3 mm', 'coke -3 mm', 'coke -3mm', '-3 mm coke', 'coke size -3', 'coke breeze -3'],
    cacl2: ['cacl2 halide spraying on sinter', 'cacl2 spraying', 'halide spraying', 'cacl2'],
    area: ['sinter strand suction area', 'strand area', 'suction area', 'sinter strand area', 'machine area', 'grate area'],
    basis: ['production basis'],
    prodOverride: ['production target override', 'production target', 'production override'],
    'lab.fe': ['fe t', 'fe total', 'total fe', 'fet', 'tfe', 't.fe', 'fe'],
    'lab.feo': ['feo'],
    'lab.sio2': ['sio2'],
    'lab.al2o3': ['al2o3'],
    'lab.cao': ['cao'],
    'lab.mgo': ['mgo'],
    'lab.mno': ['mno'],
    'lab.b2': ['basicity b2', 'basicity', 'cao/sio2', 'b2'],
    'lab.ti': ['tumbler index', 'tumbler', 'ti +6.3', 't.i.', 't.i', 'ti'],
    'lab.ai': ['abrasion index', 'abrasion', 'ai -0.5', 'ai'],
    'lab.si': ['shatter index', 'shatter', 'si +10', 'si'],
    'lab.rdi': ['reduction degradation index', 'rdi -3.15', 'rdi'],
    'lab.ri': ['reducibility index', 'reducibility', 'ri'],
    'lab.mps': ['mean particle size', 'mean size', 'mps'],
    'lab.p50': ['+50 mm', '+ 50 mm', '+50mm', '> 50 mm'],
    'lab.p40': ['40-50 mm', '40 - 50 mm', '+40 mm', '40-50'],
    'lab.p25': ['25-40 mm', '25 - 40 mm', '+25 mm', '25-40'],
    'lab.p10': ['10-25 mm', '10 - 25 mm', '+10 mm', '10-25'],
    'lab.p6': ['6-10 mm', '6 - 10 mm', '+6 mm', '6-10'],
    'lab.m6': ['-6 mm', '- 6 mm', '-6mm', '< 6 mm', 'return fines -6'],
    'lab.prod': ['sinter production', 'actual production', 'production']
  };
  // raw-material chemistry column headers (RM table)
  var CHEM_COLS = {
    moist: ['moisture %', 'moisture', 'h2o', 'moist'], fe: ['fe t %', 'fe t', 'fe total', 'tfe', 'fe %', 'fe'], feo: ['feo %', 'feo'],
    sio2: ['sio2 %', 'sio2'], al2o3: ['al2o3 %', 'al2o3'], cao: ['cao %', 'cao'], mgo: ['mgo %', 'mgo'], mno: ['mno %', 'mno'],
    loi: ['loi %', 'loi'], fc: ['fixed c %', 'fixed carbon', 'fixed c', 'f.c', 'fc'], burn: ['burn-off %', 'burn-off', 'burn off'],
    mps: ['mps mm', 'mps', 'mean size mm', 'mean size', 'mean particle size mm', 'mean particle size', 'avg size mm', 'average size mm'], m1: ['-1 mm %', '-1 mm', '-1mm'], p3: ['+3 mm %', '+3 mm', '+3mm'],
    s: ['s %', 'sulphur', 'sulfur', 's'], p: ['p %', 'phosphorus', 'p'], tio2: ['tio2 %', 'tio2']
  };
  var NA = {}; // pre-normalised aliases
  Object.keys(ALIASES).forEach(function (k) { NA[k] = ALIASES[k].map(norm); });
  var NC = {}; Object.keys(CHEM_COLS).forEach(function (k) { NC[k] = CHEM_COLS[k].map(norm); });

  function findIn(label, alias) {
    var i = label.indexOf(alias);
    while (i >= 0) {
      var b = i === 0 ? '' : label[i - 1], a = label[i + alias.length] || '';
      if (!/[a-z0-9]/.test(b) && !/[a-z0-9]/.test(a)) return i;
      i = label.indexOf(alias, i + 1);
    }
    return -1;
  }

  // best field for a label: longest alias wins; ctx = 'lab' | 'blend' | 'machine' | 'rm' | ''
  // labels the user mapped by hand on an earlier upload (exact label -> field)
  var USER = {};
  function setUserAliases(m) { USER = {}; Object.keys(m || {}).forEach(function (k) { USER[norm(k)] = m[k]; }); }
  function matchField(label, ctx) {
    var L = norm(label);
    if (!L || L.length > 90) return null;
    if (USER[L]) return { key: USER[L], score: 1e6, end: L.length, L: L };
    if (ctx !== 'lab' && ctx !== 'rm') {
      var og = window.SD && SD.oreGrade ? SD.oreGrade(label) : -1;
      // the grade number belongs to the label, so the value is whatever follows the whole label
      if (og >= 0 && /iron|ore|iof|fines?|grade/.test(L)) return { key: 'use.' + og, score: 5e5, end: L.length, L: L };
    }
    var best = null;
    Object.keys(NA).forEach(function (k) {
      var isLab = k.indexOf('lab.') === 0, isUse = k.indexOf('use.') === 0;
      if (ctx === 'blend' && isLab) return;
      if (ctx === 'rm') return;
      NA[k].forEach(function (a) {
        var pos = findIn(L, a);
        if (pos < 0) return;
        var score = a.length * 10 - pos * 0.1 + (isLab && ctx === 'lab' ? 3 : 0) + (isUse && ctx === 'blend' ? 3 : 0) + (a === L ? 5 : 0);
        if (!best || score > best.score) best = { key: k, score: score, end: pos + a.length, L: L };
      });
    });
    // a short chemistry label sitting inside a raw-material line is material chemistry, not sinter lab
    if (best && best.key.indexOf('lab.') === 0 && /ore|coke|lime|dolomite|scale|dust|anthracite/.test(L) && !/sinter/.test(L)) return null;
    // similar labels that mean something else ("Cooler speed", "Ignition hood pressure", "Granule MPS", "Al2O3/SiO2")
    if (best && EXCL[best.key] && EXCL[best.key].test(L) && !(best.key === 'speed' && /strand|machine|pallet|m\/c|sinter m/.test(L))) return null;
    if (best && best.key.indexOf('lab.') === 0 && (/granul|green|nodul|raw mix|\bfeed\b|\bmix\b|\bbed\b/.test(L) || (best.key !== 'lab.b2' && /[a-z0-9]\s*\/\s*[a-z]/.test(L) && !/\bt\.?\s*\/|kg\s*\/|mt\s*\//.test(L)))) return null;
    if (best && best.key === 'lab.b2' && /\bb[345]\b|mgo|al2o3/.test(L)) return null;
    return best;
  }

  var EXCL = {
    speed: /cooler|cooling|fan|drum|mixer|feeder|conveyor|belt|roll|crusher|screen|motor|range/,
    ign: /pressure|draft|length|heat|flow|time|calorific|\bcv\b|burner|hood length/,
    windP: /hood|ignition|static|cooler|cooling/, windT: /cool|discharge|ignition|cooled/, idFan: /cooler|cooling/,
    bed: /^hearth|cooler/, area: /cooler|cooling|screen/, btp: /wind ?box (no|number)|position|location|\bwb\b no/,
    moist: /coke|ore|limestone|dolomite|coal|concentrate|lime\b|scale/, bfg: /\bcv\b|calorific|pressure/
  };
  // usual range of each plant value; numbers far outside are left for the user to map
  var PLAUS = { speed: [0.3, 70], ign: [700, 1400], windP: [2, 30], windT: [40, 400], idFan: [150, 2500], btp: [120, 750], bfg: [30, 60000],
    bed: [150, 1100], moist: [2, 15], coke3: [25, 100], alk: [0, 1], area: [10, 1000], width: [1, 8], totCharge: [100, 100000] };
  // value in the app's unit: suction in kPa (files often give mmWC, mbar or Pa)
  function inUnit(key, val, unit, out, label) {
    if (typeof val !== 'number') return val;
    var u = String(unit || '').toLowerCase();
    if (key === 'windP') {
      var a = Math.abs(val), how = null;
      if (/mm ?w\.?c|mm ?h2o|mmh₂o|mm ?wg|mm of water/.test(u)) { a = a * 0.00980665; how = 'mmWC'; }
      else if (/mbar/.test(u)) { a = a * 0.1; how = 'mbar'; }
      else if (/kpa/.test(u)) how = null;
      else if (/\bpa\b/.test(u) || a > 3000) { a = a / 1000; how = 'Pa'; }
      else if (a > 40) { a = a * 0.00980665; how = 'mmWC (assumed from the size of the number)'; }
      if (how && out) out.notes.push('Suction "' + String(label).trim() + '" ' + val + ' ' + how + ' converted to ' + (+a.toFixed(2)) + ' kPa.');
      return a;
    }
    if (key === 'width' && /\bmm\b/.test(u)) return val / 1000;
    if (key === 'bed' && /\bm\b/.test(u) && val < 2) return val * 1000;
    return val;
  }
  // values the app does not ask for directly, but uses to work out the total charge
  function extras(label, val, unit, out, low) {
    if (typeof val !== 'number') return false;
    var L = norm(label), u = String(unit || '').toLowerCase(), x = out.extra = out.extra || {}, k = null;
    if (/bulk density/.test(L) && val > 0.5 && val < 3.5) k = 'density';
    else if (/return fines|ret\.? fines|\brf\b/.test(L) && !/size/.test(L) && /%|mix|charge|share/.test(L + ' ' + u) && val >= 5 && val <= 60) k = 'rf';
    else if (/hearth/.test(L) && /thick|height|depth/.test(L) && val >= 5 && val <= 100) k = 'hearth';
    else if (/^na2o$|^na 2o$|^na2o %$/.test(L) && val < 1) k = 'na2o';
    else if (/^k2o$|^k 2o$|^k2o %$/.test(L) && val < 1) k = 'k2o';
    if (!k) return false;
    if (!low || x[k] == null) x[k] = val;
    return true;
  }

  function toNum(v) {
    if (typeof v === 'number') return isFinite(v) ? v : null;
    if (v == null) return null;
    var s = String(v).trim();
    var m = s.match(/^[-+]?\d{1,3}(,\d{3})+(\.\d+)?|^[-+]?\d*\.?\d+(e[-+]?\d+)?/i);
    if (!m) return null;
    return parseFloat(m[0].replace(/,/g, ''));
  }
  function numAfter(text, from) {
    var rest = String(text).slice(from);
    var m = rest.match(/[-+]?\d{1,3}(,\d{3})+(\.\d+)?|[-+]?\d*\.?\d+/);
    return m ? parseFloat(m[0].replace(/,/g, '')) : null;
  }
  function yesNo(v) {
    var s = norm(v);
    if (/^(yes|y|on|true|1)$/.test(s)) return true;
    if (/^(no|n|off|false|0)$/.test(s)) return false;
    return null;
  }
  function sectionOf(text) {
    var s = norm(text);
    if (/lab|quality|analysis|result|actual sinter|sinter chem/.test(s)) return 'lab';
    if (/blend|raw material|usage|consumption|bunker|proportion|charge mix|mix design/.test(s)) return 'blend';
    if (/machine|process|operating|parameter|strand/.test(s)) return 'machine';
    if (/chemistry of raw|rm chem|material chem|rm_data|raw material chem/.test(s)) return 'rm';
    return null;
  }
  function matIndex(label) {
    var g = window.SD && SD.oreGrade ? SD.oreGrade(label) : -1;
    if (g >= 0) return g;
    var L = norm(label), best = null;
    for (var i = 0; i < SD.mats.length; i++) {
      NA['use.' + i].forEach(function (a) {
        if (findIn(L, a) >= 0 && (!best || a.length > best.len)) best = { i: i, len: a.length };
      });
    }
    return best ? best.i : -1;
  }

  /* rows: array of arrays (cells). Returns {found:{key:{value,label,src}}, chem:{matIdx:{prop:value}}} */
  var KGT = /kg ?\/ ?t(on|onne)?s?\b|kg ?\/ ?t ?(of )?s(inter|in)?\b|kg ?per ?t(on|onne)?\b|\bkgpt\b|kg ?\/ ?tps\b/;
  function scanRows(rows, src, ctx0, out) {
    var ctx = ctx0 || '';
    var valueCol = -1, pctCol = -1, tpdCol = -1, kgtCol = -1; // blend tables may give MT/day, % of charge, or both
    var ptab = null, title = ''; // parameter table: "Group | Parameter | Unit | Value" (group and unit columns are not labels)
    for (var r = 0; r < rows.length; r++) {
      var row = rows[r] || [], meta = null;
      if (ptab && typeof row[ptab.p] === 'string' && row[ptab.p].trim()) {
        var rv = row[ptab.v], isRange = false;
        if (typeof rv === 'string') {
          var rm = rv.match(/^\s*([-+]?\d[\d,]*\.?\d*)\s*(?:-|\u2013|\u2014|to)\s*([-+]?\d[\d,]*\.?\d*)\s*(?:[a-z%°\/]{0,8})\s*$/i);
          if (rm) { rv = (toNum(rm[1]) + toNum(rm[2])) / 2; isRange = true; } else if (/^\s*[-+]?\d[\d,]*\.?\d*\s*$/.test(rv)) rv = toNum(rv);
        }
        if (typeof rv === 'number') {
          var un = ptab.u >= 0 && row[ptab.u] != null ? String(row[ptab.u]).trim() : '';
          meta = { design: ptab.design || isRange, unit: un, range: isRange };
          row = [row[ptab.p], rv].concat(un && un !== '-' ? [un] : []);
        }
      }
      var texts = [], nums = 0;
      row.forEach(function (c) { if (typeof c === 'number') nums++; else if (c != null && String(c).trim() !== '') texts.push(c); });
      if (texts.length === 1 && nums === 0) title = String(texts[0]);
      // header row that names the column to read ("Used in model", "Value", "Actual", "Lab")
      if (!meta && nums === 0 && texts.length >= 2) {
        var pc = -1, vc = -1, uc = -1, vh = '';
        for (var h0 = 0; h0 < row.length; h0++) {
          var hn0 = norm(row[h0]);
          if (pc < 0 && /^(parameters?|parameter name|description|particulars?|property|variable|items?|tag|attribute)$/.test(hn0)) pc = h0;
          else if (uc < 0 && /^(units?|uom|unit of measure)$/.test(hn0)) uc = h0;
          else if (vc < 0 && pc >= 0 && /^(values?|design value|design|rated|actual|average|avg|normal|typical|operating value|operating|current|reading|data|result|now|used in model|lab value|your value|case\b.*|scenario.*|run\b.*|trial\b.*|shift\b.*|day\b.*|\d.*)$/.test(hn0)) { vc = h0; vh = hn0; }
        }
        if (pc >= 0 && vc >= 0) {
          ptab = { p: pc, v: vc, u: uc, design: /design|rated|spec/.test(vh + ' ' + norm(title)) };
          valueCol = pctCol = tpdCol = kgtCol = -1;
          continue;
        }
        var hp = -1, ht = -1, hk = -1;
        for (var h = 0; h < row.length; h++) {
          var hn = norm(row[h]);
          if (/^(used in model|value|actual|lab value|result|now|scenario value|your value)$/.test(hn)) valueCol = h;
          var isT = /mt\/day|t\/day|tpd|mt\/d\b|tons?\/day|tonnes\/day/.test(hn) || /^(quantity|consumption|wet qty|usage|qty)$/.test(hn);
          if (KGT.test(hn)) hk = h;
          else if (!isT && /%|percent|share|proportion/.test(hn)) hp = h;
          else if (isT) ht = h;
        }
        if ((hp >= 0 || ht >= 0 || hk >= 0) && row.some(function (x) { return /material|item|raw|blend|input|description|name|component/.test(norm(x)); })) { pctCol = hp; tpdCol = ht; kgtCol = hk; }
        // header-type table: raw material chemistry
        var chemHits = {}, nChem = 0;
        row.forEach(function (c, ci) {
          var n = norm(c), n2 = norm(String(c == null ? '' : c).replace(/\([^)]*\)/g, ' ')); if (!n) return;
          Object.keys(NC).forEach(function (k) { if ((NC[k].indexOf(n) >= 0 || NC[k].indexOf(n2) >= 0) && chemHits[k] == null) { chemHits[k] = ci; nChem++; } });
        });
        if (nChem >= 4) {
          var used = 0; pctCol = tpdCol = kgtCol = -1;
          for (var rr = r + 1; rr < rows.length; rr++) {
            var rw = rows[rr] || [], mi = -1;
            for (var c0 = 0; c0 < Math.min(rw.length, 4); c0++) if (typeof rw[c0] === 'string') { mi = matIndex(rw[c0]); if (mi >= 0) break; }
            if (mi < 0) { if (used) break; else continue; }
            used++;
            Object.keys(chemHits).forEach(function (k) {
              var v = toNum(rw[chemHits[k]]);
              if (v != null) { out.chem[mi] = out.chem[mi] || {}; out.chem[mi][k] = v; }
            });
          }
          if (used) { out.notes.push(src + ': raw-material chemistry table (' + used + ' materials)'); r += used; continue; }
        }
        // header-type table: lab results across columns, values in the last filled row below
        var labHits = [];
        row.forEach(function (c, ci) { var m = matchField(c, 'lab'); if (m && m.key.indexOf('lab.') === 0 && norm(c).length <= 40) labHits.push({ key: m.key, col: ci, label: c }); });
        if (labHits.length >= 3) {
          var last = null;
          for (var r2 = r + 1; r2 < rows.length; r2++) {
            var rw2 = rows[r2] || [], cnt = 0;
            labHits.forEach(function (lh) { if (toNum(rw2[lh.col]) != null) cnt++; });
            if (cnt >= 1) last = rw2; else if (last && cnt === 0 && rw2.filter(function (x) { return x != null && x !== ''; }).length === 0) break;
          }
          if (last) labHits.forEach(function (lh) { var v = toNum(last[lh.col]); if (v != null) put(out, lh.key, v, lh.label, src + ' (table)'); });
          continue;
        }
      }
      if (texts.length === 1 && nums === 0 && ctx0 !== 'rm' && !/\d/.test(texts[0])) { var sc = sectionOf(texts[0]); if (sc) { ctx = sc; continue; } }
      // label -> value scan
      var putsBefore = out._puts || 0;
      var usedX = (function () { var l0 = null; for (var e = 0; e < row.length; e++) { if (l0 == null && typeof row[e] === 'string' && /[a-z]/i.test(row[e])) l0 = row[e]; else if (l0 != null && typeof row[e] === 'number') return extras(l0, row[e], meta ? meta.unit : row.slice(e + 1).join(' '), out, meta && meta.design); } return false; })();
      for (var c = 0; c < row.length; c++) {
        var cell = row[c];
        if (cell == null || typeof cell === 'number') continue;
        var s = String(cell);
        if (norm(s).length < 1) continue;
        var m2 = matchField(s, ctx);
        if (!m2) continue;
        // "Coke breeze (-3 mm)" in a blend table is the material, not the -3 mm fraction
        if (m2.key === 'coke3' && (pctCol > c || tpdCol > c || kgtCol > c)) m2 = { key: 'use.12', score: m2.score, end: m2.end, L: m2.L };
        var low = meta && meta.design || /\b(max|maximum|min|minimum|rated|design|range|limit|target|max\.|min\.)\b/.test(m2.L);
        var prio = (low ? 0 : 1e7) + m2.score;
        var val = null;
        if (m2.key === 'cacl2' || m2.key === 'basis' || m2.key === 'blendBasis') {
          for (var c2 = c + 1; c2 < row.length && val == null; c2++) {
            if (m2.key === 'cacl2') val = yesNo(row[c2]);
            else if (m2.key === 'blendBasis') { var bn = norm(row[c2]); if (/kg/.test(bn)) val = 'kgt'; else if (/%|percent|share/.test(bn)) val = 'pct'; else if (/mt|t\/day|tpd|wet|ton/.test(bn)) val = 'mt'; }
            else if (/machine|charge/.test(norm(row[c2]))) val = /machine/.test(norm(row[c2])) ? 'Machine' : 'Charge';
          }
          if (val != null) put(out, m2.key, val, s, src);
          break;
        }
        if (m2.key.indexOf('use.') === 0 && (pctCol > c || tpdCol > c || kgtCol > c)) {
          var vt = tpdCol > c ? toNum(row[tpdCol]) : null, vp = pctCol > c ? toNum(row[pctCol]) : null, vk = kgtCol > c ? toNum(row[kgtCol]) : null;
          if (vt != null) put(out, m2.key, vt, s, src, prio);
          if (vp != null) put(out, 'pct.' + m2.key.slice(4), vp, s, src, prio);
          if (vk != null) put(out, 'kgt.' + m2.key.slice(4), vk, s, src, prio);
          if (vt != null || vp != null || vk != null) break;
        }
        if (valueCol > c && toNum(row[valueCol]) != null) val = toNum(row[valueCol]);
        var rest = m2.L.slice(m2.end);
        if (val == null && /^\s*[:=]?\s*(mm|%|hz|kpa|rpm)?\s*[:=]?\s*[-+]?\d[\d.,]*\s*[a-z%\/]{0,8}\s*$/.test(rest)) val = numAfter(rest, 0);
        for (var c3 = c + 1; c3 < row.length && val == null; c3++) {
          var v3 = toNum(row[c3]);
          if (v3 != null) val = v3;
          else if (typeof row[c3] === 'string' && matchField(row[c3], ctx)) break; // next label - no value for this one
        }
        if (val != null) {
          // "Dolomite %" / "Dolomite  8.5 %" / unit column "%" -> share of the charge
          var unitPct = m2.key.indexOf('use.') === 0 && (/%\s*$/.test(m2.L) || row.slice(c + 1).some(function (x) { return typeof x === 'string' && /^\s*%\s*(of charge|of blend|wet)?\s*$/i.test(x); }) || /^\s*[:=]?\s*[-+]?\d[\d.,]*\s*%/.test(rest));
          var unitKgt = m2.key.indexOf('use.') === 0 && (KGT.test(m2.L) || KGT.test(rest) || row.slice(c + 1).some(function (x) { return typeof x === 'string' && KGT.test(x.toLowerCase()); }));
          var fk = unitKgt ? 'kgt.' + m2.key.slice(4) : unitPct ? 'pct.' + m2.key.slice(4) : m2.key;
          var un2 = { notes: [] };
          if (PLAUS[fk]) {
            val = inUnit(fk, val, (meta ? meta.unit : '') + ' ' + s + ' ' + row.slice(c + 1).filter(function (x) { return typeof x === 'string'; }).join(' '), un2, s);
            if (val < PLAUS[fk][0] || val > PLAUS[fk][1]) break; // not this input after all (offered for manual mapping)
          }
          var had = out.found[fk];
          put(out, fk, val, s + (meta && meta.range ? ' (middle of range)' : ''), src, prio);
          if (out.found[fk] !== had) out.unitNote = out.unitNote || {}, out.unitNote[fk] = un2.notes[0] || null;
          break;
        }
      }
      // a label with a number that matched nothing: offer it for manual mapping
      if ((out._puts || 0) === putsBefore && nums > 0 && ctx !== 'rm' && !usedX) {
        var lab = null, num = null;
        for (var u = 0; u < row.length; u++) {
          var cu = row[u];
          if (lab == null && typeof cu === 'string' && /[a-z]{2,}/i.test(cu) && norm(cu).length <= 60) lab = String(cu).trim();
          else if (lab != null && num == null && toNum(cu) != null) num = toNum(cu);
        }
        if (lab != null && num != null && (out.unmatched = out.unmatched || []).length < 150 && !out.unmatched.some(function (x) { return x.label === lab; })) out.unmatched.push({ label: lab, value: num, src: src, ptab: !!meta });
      }
    }
  }

  // a better match (longer label, operating rather than design/max value) is not overwritten by a weaker one
  function put(out, key, value, label, src, prio) {
    out._puts = (out._puts || 0) + 1;
    prio = prio == null ? 5e6 : prio;
    var o = out.found[key];
    if (o && o.prio > prio) return;
    out.found[key] = { value: value, label: String(label).trim().slice(0, 60), src: src, prio: prio };
  }

  function emptyOut() { return { found: {}, chem: {}, notes: [], errors: [] }; }

  /* ---------- day-wise / shift-wise logs (DPR): one row per date, one column per input ----------
     Header row with "Date", often a group row ("IBRM Consumptions (MT)", "Chemical Quality Report", "Sinter Machine
     Parameter") over an item row ("Iron Ore Fines Fe 60", "FeO", "S/M Speed (Hz)"). The operator picks the day (or an
     average of days); every column of that day is then read by its group and item. */
  function isDateCell(v) {
    if (v instanceof Date) return !isNaN(v.getTime());
    return typeof v === 'string' && /^\s*(\d{4}-\d\d-\d\d|\d{1,2}[-\/.](\d{1,2}|[a-z]{3})[-\/.]\d{2,4})/i.test(v);
  }
  function dateKey(v) {
    if (v instanceof Date) return v.getFullYear() + '-' + ('0' + (v.getMonth() + 1)).slice(-2) + '-' + ('0' + v.getDate()).slice(-2) + (v.getHours() || v.getMinutes() ? ' ' + ('0' + v.getHours()).slice(-2) + ':' + ('0' + v.getMinutes()).slice(-2) : '');
    return String(v).trim();
  }
  var MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function dateLabel(k) { var m = String(k).match(/^(\d{4})-(\d\d)-(\d\d)(.*)$/); return m ? +m[3] + ' ' + MON[+m[2] - 1] + ' ' + m[1] + m[4] : k; }
  function findDayTable(rows) {
    for (var r = 0; r < Math.min(rows.length, 20); r++) {
      var row = rows[r] || [], dc = -1;
      for (var c = 0; c < Math.min(row.length, 6); c++) if (/^(date|day|dt|dated|date of production|production date|date\/shift|date & shift|date and time|date\/time|date time)$/.test(norm(row[c]))) { dc = c; break; }
      if (dc < 0) continue;
      var first = -1, n = 0;
      for (var q = r + 1; q < rows.length; q++) if (isDateCell((rows[q] || [])[dc])) { if (first < 0) first = q; n++; }
      if (n < 3) continue;
      // item row between the header and the first date row (the one with most text cells)
      var ir = r, best = 0;
      for (var q2 = r + 1; q2 < first; q2++) { var t = (rows[q2] || []).filter(function (x) { return typeof x === 'string' && /[a-z]/i.test(x); }).length; if (t >= 3 && t > best) { best = t; ir = q2; } }
      var tc = -1, hr = rows[ir] || [];
      [rows[r] || [], hr].forEach(function (h) { for (var c2 = 0; c2 < Math.min(h.length, 6); c2++) if (c2 !== dc && /^(shift|time|hour|hr|hrs)$/.test(norm(h[c2]))) tc = c2; });
      var w = 0; for (var q3 = r; q3 < rows.length; q3++) w = Math.max(w, (rows[q3] || []).length);
      var cols = [], g = '';
      for (var c3 = 0; c3 < w; c3++) {
        if (c3 === dc || c3 === tc) continue;
        var own = (rows[r] || [])[c3];
        if (own != null && String(own).trim() !== '') g = String(own).replace(/\s+/g, ' ').trim();
        var it = ir > r ? hr[c3] : null;
        var label = it != null && String(it).trim() !== '' ? String(it).replace(/\s+/g, ' ').trim() : own != null && String(own).trim() !== '' ? String(own).replace(/\s+/g, ' ').trim() : '';
        if (!label) continue;
        cols.push({ c: c3, group: ir > r ? g : '', item: label });
      }
      var days = [];
      for (var q4 = first; q4 < rows.length; q4++) {
        var rw = rows[q4] || [];
        if (!isDateCell(rw[dc])) continue;
        var nums = cols.filter(function (x) { return typeof rw[x.c] === 'number' && rw[x.c] !== 0; }).length;
        if (nums < 1) continue;
        var key = dateKey(rw[dc]) + (tc >= 0 && rw[tc] != null && String(rw[tc]).trim() !== '' ? ' · ' + String(rw[tc]).trim() : '');
        days.push({ key: key, label: dateLabel(key), row: q4, n: nums });
      }
      // days with real entries only (formula rows of future days hold zeros)
      var mx = Math.max.apply(null, days.map(function (d) { return d.n; }).concat([0]));
      days = days.filter(function (d) { return d.n >= Math.max(1, mx * 0.3); });
      if (days.length) return { hdr: r, items: ir, dc: dc, cols: cols, days: days };
    }
    return null;
  }
  // what a DPR column is, from its group and item text
  function dayCat(col) {
    var g = norm(col.group), i = norm(col.item), gi = g + ' ' + i;
    if (/^total|^sum\b/.test(i)) return 'skip';
    if (/remark|delay|running|utility|electric|power|water|nitrogen|stock|transfer|sales|cbm|despatch|dispatch|kwh/.test(gi)) return 'other';
    if (/analysis|anal\b|chemistry/.test(g) && /raw material|\brm\b|material|ore|flux|coke/.test(g)) return 'chem';
    if (/quality|finished|product|\blab\b|sinter chem|sinter analysis|physical|size|tumbler/.test(g)) return 'lab';
    if (/specific|kg ?\/ ?mt|kg ?\/ ?t|per ?mt|%/.test(g)) return /consumption|ibrm|blend|feed|flux|fuel|material/.test(g) ? 'alt' : 'gen';
    if (/machine|parameter|process|operat|m\/c/.test(g)) return 'machine';
    if (/consumption|ibrm|blend|feed|flux|fuel|raw material|\brm\b|material|bunker/.test(g)) return 'blend';
    return 'gen';
  }
  // material slot of a DPR blend column; plant by-products without a slot go to "other iron-bearing"
  function dayMat(item, fe) {
    var m = matchField(item, 'blend');
    if (m && m.key.indexOf('use.') === 0) return +m.key.slice(4);
    var mi = window.SinterSmart ? SinterSmart.classify(item, fe) : -1;
    if (mi === 'rf') return SD.OWN_RF != null ? SD.OWN_RF : 4;
    if (typeof mi !== 'number' || mi < 0) return -1;
    if (mi === 6 && !/flue/i.test(item)) return 15;
    if ([0, 1, 2, 16].indexOf(mi) >= 0 && !(SD.oreGrade && SD.oreGrade(item) >= 0) && !/iron ore|\biof\b|ore fines|hematite|haematite|concentrate|magnetite/i.test(item)) return 15;
    return mi;
  }
  // read one day (key), or the average of the last N days ('avg7', 'avgAll'), from a day table into out
  function readDay(rows, dt, pick, src, out, keys) {
    var sel = keys ? dt.days.filter(function (d) { return keys.indexOf(d.key) >= 0; }) : /^avg(\d+|all)$/i.test(pick || '') ? dt.days.slice(/all/i.test(pick) ? 0 : -(+pick.slice(3))) : [dt.days.filter(function (d) { return d.key === pick; })[0] || dt.days[dt.days.length - 1]];
    if (!sel.length) return null;
    var tag = sel.length > 1 ? 'average of ' + sel.length + ' days (' + sel[0].label + ' – ' + sel[sel.length - 1].label + ')' : sel[0].label;
    function val(col, blankZero) {
      var a = sel.map(function (d) { var v = (rows[d.row] || [])[col.c]; return typeof v === 'number' && isFinite(v) ? v : blankZero ? 0 : null; }).filter(function (v) { return v != null; });
      return a.length ? a.reduce(function (x, y) { return x + y; }, 0) / a.length : null;
    }
    var before = Object.keys(out.found).filter(function (k) { return out.found[k].day; }).length;
    var blend = {}, bl = {}, alt = {}, al = {}, synth = { lab: [], machine: [], gen: [] }, other = [], chem = {};
    dt.cols.forEach(function (col) {
      var cat = dayCat(col);
      if (cat === 'skip') return;
      if (cat === 'other') { if (val(col) != null) other.push(col.item); return; }
      var v = val(col, cat === 'blend' || cat === 'alt');
      if (v == null) return;
      if (cat === 'blend' || cat === 'alt') {
        var mi = dayMat(col.item, null);
        if (mi < 0) { if (v) (out.unmatched = out.unmatched || []).push({ label: col.item, value: v, src: src, ptab: true }); return; }
        var B = cat === 'blend' ? blend : alt, L = cat === 'blend' ? bl : al;
        B[mi] = (B[mi] || 0) + v; if (v) (L[mi] = L[mi] || []).push(col.item);
        return;
      }
      if (cat === 'chem') {
        var pk = window.SinterSmart && (SinterSmart.chemKey((col.group.match(/\(([^)]*)\)/) || [])[1] || '') || SinterSmart.chemKey(col.group.replace(/.*analysis/i, '')));
        var mi2 = dayMat(col.item, pk === 'fe' ? v : null);
        if (!pk || mi2 < 0) return;
        if (pk === 'loi') { (chem[mi2] = chem[mi2] || {}).loi = v; chem[mi2].burn = v; } else (chem[mi2] = chem[mi2] || {})[pk] = v;
        return;
      }
      synth[cat].push([col.item, v]);
    });
    var mt = Object.keys(blend).some(function (k) { return blend[k] > 0; });
    var useB = mt ? blend : alt, useL = mt ? bl : al, pctAlt = !mt && /%/.test((dt.cols.filter(function (c) { return dayCat(c) === 'alt'; })[0] || {}).group || '');
    var tot = Object.keys(useB).reduce(function (a, k) { return a + useB[k]; }, 0), frac = pctAlt && tot > 0.5 && tot < 1.5;
    Object.keys(useB).forEach(function (mi) {
      if (!(useB[mi] > 0)) return;
      out.found[(mt ? 'use.' : pctAlt ? 'pct.' : 'kgt.') + mi] = { value: useB[mi] * (frac ? 100 : 1), label: (useL[mi] || []).join(' + ').slice(0, 60), src: src + ' · ' + tag, prio: 9e7, day: true };
    });
    ['machine', 'lab', 'gen'].forEach(function (cat) {
      if (!synth[cat].length) return;
      var o = emptyOut();
      scanRows(synth[cat], src + ' · ' + tag, cat === 'gen' ? '' : cat, o);
      Object.keys(o.found).forEach(function (k) { if (/^(use|pct|kgt)\./.test(k)) return; var e = o.found[k]; e.prio = 9e7; e.day = true; if (!out.found[k] || !out.found[k].day) out.found[k] = e; });
      (o.unmatched || []).forEach(function (u) { u.ptab = true; (out.unmatched = out.unmatched || []).push(u); });
      if (o.unitNote) { out.unitNote = out.unitNote || {}; Object.keys(o.unitNote).forEach(function (k) { if (o.unitNote[k]) out.unitNote[k] = o.unitNote[k]; }); }
    });
    Object.keys(chem).forEach(function (mi) { out.chem[mi] = out.chem[mi] || {}; Object.keys(chem[mi]).forEach(function (k) { out.chem[mi][k] = chem[mi][k]; }); });
    var nIn = Object.keys(out.found).filter(function (k) { return out.found[k].day; }).length - before;
    out.notes.push('Day-wise log "' + src.split(' / ').pop() + '": ' + dt.days.length + ' days (' + dt.days[0].label + ' – ' + dt.days[dt.days.length - 1].label + '). Read ' + tag + ': ' + nIn + ' inputs' + (Object.keys(chem).length ? ' and analysis of ' + Object.keys(chem).length + ' materials' : '') + '.');
    if (other.length) out.notes.push('Not model inputs, so not used: ' + other.slice(0, 12).join(', ') + (other.length > 12 ? ' and ' + (other.length - 12) + ' more' : '') + '.');
    if (dt.cols.some(function (c) { return dayCat(c) === 'chem'; }) && !Object.keys(chem).length) out.notes.push('The raw-material analysis columns are empty for this day, so the analysis on the Inputs page is kept. Fill them in the file, or upload your lab analysis, for a better prediction.');
    return sel.map(function (d) { return d.key; });
  }

  var SKIP = /^(readme|output|engine|model|calib|driver_breakdown|before_after|normals_check|sensitivity_guide|param_suggest|references|dpr_data|pba_data|mapping_log)$/i;

  function parseWorkbook(wb, name, out, opts) {
    var isModule = wb.SheetNames.indexOf('Engine') >= 0 && wb.SheetNames.indexOf('Input') >= 0;
    // day-wise logs first: the operator chooses the day; the largest log sets the list of days offered
    var logs = [];
    if (!isModule) wb.SheetNames.forEach(function (sn) {
      var rows = XLSX.utils.sheet_to_json(wb.Sheets[sn], { header: 1, raw: true, defval: null, blankrows: true });
      var dt = findDayTable(rows);
      // a plant log (DPR) has blend or machine columns; a sheet of daily analyses of one material is left to the analysis reader
      if (dt) {
        var nb = dt.cols.filter(function (c) { var k = dayCat(c); return (k === 'blend' || k === 'alt') && dayMat(c.item, null) >= 0; }).length;
        var nm = dt.cols.filter(function (c) { var m = matchField(c.item, 'machine'); return m && /^(speed|ign|windP|windT|idFan|btp|bfg|bed|moist)$/.test(m.key); }).length;
        if (nb >= 3 || nm >= 2) logs.push({ sn: sn, rows: rows, dt: dt });
      }
    });
    logs.sort(function (a, b) { return b.dt.cols.length - a.dt.cols.length; });
    if (logs.length) {
      var main = logs[0].dt, pick = (opts && opts.day) || main.days[main.days.length - 1].key;
      out.dayInfo = { sheet: logs[0].sn, days: main.days.map(function (d) { return { key: d.key, label: d.label }; }), pick: pick };
      out.daySheets = logs.map(function (l) { return l.sn; });
      var keys = readDay(logs[0].rows, main, pick, name + ' / ' + logs[0].sn, out);
      logs.slice(1).forEach(function (l) { readDay(l.rows, l.dt, pick, name + ' / ' + l.sn, out, keys); });
    }
    wb.SheetNames.forEach(function (sn) {
      if ((isModule && SKIP.test(sn)) || /^mapping_log$/i.test(sn)) return;
      if (out.daySheets && out.daySheets.indexOf(sn) >= 0) return;
      if (/^(sources|readme|read me|notes|instructions)$/i.test(sn.trim())) return; // text only (the master file's list of sources)
      var ws = wb.Sheets[sn];
      var rows = XLSX.utils.sheet_to_json(ws, { header: 1, raw: true, defval: null, blankrows: true });
      var ctx = sectionOf(sn) || '';
      if (isModule && sn === 'RM_Data') ctx = 'rm';
      scanRows(rows, name + (wb.SheetNames.length > 1 ? ' / ' + sn : ''), ctx, out);
    });
    if (isModule) out.notes.push(name + ': recognised as the Sinter Prediction Module workbook (Input, Lab_Results, RM_Data sheets read)');
  }

  function textToRows(text) {
    return String(text).split(/\r?\n/).map(function (line) {
      var parts = line.split(/\t|\s{2,}|\s*[|;]\s*|:\s+|\s=\s/).filter(function (p) { return p.trim() !== ''; });
      if (parts.length === 1 && line.indexOf(',') >= 0) parts = line.split(',');
      return parts.map(function (p) { var t = p.trim(); return /^[-+]?\d{1,3}(,\d{3})*(\.\d+)?$|^[-+]?\d*\.?\d+$/.test(t) ? parseFloat(t.replace(/,/g, '')) : t; });
    });
  }

  function parsePdf(bytes, name) {
    var task = pdfjsLib.getDocument({ data: bytes, disableFontFace: true, isEvalSupported: false });
    return task.promise.then(function (pdf) {
      var pages = [];
      for (var i = 1; i <= Math.min(pdf.numPages, 30); i++) pages.push(pdf.getPage(i).then(function (pg) { return pg.getTextContent(); }));
      return Promise.all(pages);
    }).then(function (contents) {
      var rows = [];
      contents.forEach(function (tc) {
        var lines = {};
        tc.items.forEach(function (it) {
          if (!it.str || !it.str.trim()) return;
          var y = Math.round(it.transform[5] / 3) * 3;
          (lines[y] = lines[y] || []).push({ x: it.transform[4], w: it.width || 0, s: it.str });
        });
        Object.keys(lines).map(Number).sort(function (a, b) { return b - a; }).forEach(function (y) {
          var its = lines[y].sort(function (a, b) { return a.x - b.x; });
          var cells = [], cur = null, lastEnd = -1e9;
          its.forEach(function (it) {
            if (cur !== null && it.x - lastEnd < 4) cur += it.s; else { if (cur !== null) cells.push(cur); cur = it.s; }
            lastEnd = it.x + it.w;
          });
          if (cur !== null) cells.push(cur);
          var row = [];
          cells.forEach(function (c) { textToRows(c)[0].forEach(function (x) { row.push(x); }); });
          rows.push(row);
        });
      });
      return rows;
    });
  }

  function sniff(bytes) {
    if (bytes[0] === 0x50 && bytes[1] === 0x4B) return 'xlsx';
    if (bytes[0] === 0x25 && bytes[1] === 0x50 && bytes[2] === 0x44 && bytes[3] === 0x46) return 'pdf';
    if (bytes[0] === 0xD0 && bytes[1] === 0xCF) return 'xls';
    return 'text';
  }

  function decodeText(bytes) {
    try { return new TextDecoder('utf-8').decode(bytes); } catch (e) { var s = ''; for (var i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]); return s; }
  }

  function htmlToText(html) {
    var doc = new DOMParser().parseFromString(html, 'text/html');
    doc.querySelectorAll('script,style,noscript').forEach(function (n) { n.remove(); });
    var rows = [];
    doc.querySelectorAll('tr').forEach(function (tr) {
      rows.push(Array.prototype.map.call(tr.querySelectorAll('td,th'), function (td) { return td.textContent.trim(); }).join('\t'));
      tr.remove();
    });
    doc.querySelectorAll('br,p,div,li,h1,h2,h3,h4,h5,h6').forEach(function (n) { n.insertAdjacentText('afterend', '\n'); });
    return rows.join('\n') + '\n' + (doc.body ? doc.body.textContent : '');
  }

  // smart (layout) reading wins for blend, chemistry and lab; machine and process values still come from the label scan
  function withGeneric(sm, gen) {
    sm.errors = sm.errors || [];
    if (gen.dayInfo) { sm.dayInfo = gen.dayInfo; Object.keys(gen.found).forEach(function (k) { if (gen.found[k].day && !sm.found[k]) sm.found[k] = gen.found[k]; }); Object.keys(gen.chem).forEach(function (mi) { if (!sm.chem[mi]) sm.chem[mi] = gen.chem[mi]; }); sm.notes = gen.notes.filter(function (n) { return /^Day-wise|^Not model inputs|analysis columns are empty/.test(n); }).concat(sm.notes); }
    Object.keys(gen.found).forEach(function (k) {
      if (/^(use|pct|kgt|lab)\./.test(k) || k === 'totCharge' || k === 'sinterProd' || k === 'blendBasis' || sm.found[k]) return;
      if (window.SinterSmart && SinterSmart.chemKey(gen.found[k].label)) return; // "Moisture" in an analysis table is not mix moisture
      sm.found[k] = gen.found[k];
    });
    // rows of parameter tables ("Group | Parameter | Unit | Value") that match no input are offered for mapping
    sm.unmatched = sm.unmatched || [];
    (gen.unmatched || []).forEach(function (u) { if (u.ptab && !sm.unmatched.some(function (x) { return x.label === u.label; })) sm.unmatched.push(u); });
    if (!Object.keys(sm.found).some(function (k) { return k.indexOf('lab.') === 0; })) {
      // lab results: from a sheet named for the lab / sinter, or a sheet whose numbers look like sinter (Fe 45-62 %, CaO 4-16 %)
      var bySrc = {};
      Object.keys(gen.found).forEach(function (k) { if (k.indexOf('lab.') === 0) (bySrc[gen.found[k].src] = bySrc[gen.found[k].src] || {})[k] = gen.found[k]; });
      Object.keys(bySrc).forEach(function (sr) {
        var g = bySrc[sr], v = function (k) { return g['lab.' + k] ? +g['lab.' + k].value : null; };
        var looks = v('fe') >= 45 && v('fe') <= 62 && ((v('cao') >= 4 && v('cao') <= 16) || (v('b2') >= 0.8 && v('b2') <= 3.5));
        Object.keys(g).forEach(function (k) { if (looks || /lab|result|sinter|product/i.test(String(sr).split(' / ').slice(1).join(' ') + ' ' + g[k].label)) sm.found[k] = g[k]; });
      });
    }
    return sm;
  }

  // after reading: unit notes, alkali from Na2O + K2O, and the total wet charge worked out from the machine when only % are given
  function finish(res, gen, name) {
    var F = res.found, x = gen.extra || {};
    Object.keys(gen.unitNote || {}).forEach(function (k) { if (gen.unitNote[k] && F[k] === gen.found[k]) res.notes.push(gen.unitNote[k]); });
    if (!F.alk && x.na2o != null && x.k2o != null) F.alk = { value: +(x.na2o + x.k2o).toFixed(4), label: 'Na2O ' + x.na2o + ' + K2O ' + x.k2o + ' (sinter analysis)', src: name };
    var hasPct = Object.keys(F).some(function (k) { return k.indexOf('pct.') === 0; });
    var rf = x.rf || 0, addRf = rf && hasPct && !F['pct.17'] && !F['use.17'];
    // plant return fines given as a share of the total mix: added to the blend as their own input
    if (addRf) {
      var pS = Object.keys(F).filter(function (k) { return k.indexOf('pct.') === 0; }).reduce(function (a, k) { return a + (+F[k].value || 0); }, 0);
      Object.keys(F).forEach(function (k) { if (k.indexOf('pct.') === 0) F[k] = { value: +F[k].value * (100 - rf) / pS, label: F[k].label, src: F[k].src, prio: F[k].prio }; });
      F['pct.17'] = { value: rf, label: 'Return fines ' + rf + ' % of the total mix', src: name };
      res.notes.push('Plant return fines (' + rf + ' % of the total mix) added to the blend as their own input, so the other materials make up the remaining ' + (100 - rf) + ' %. Their chemistry follows the sinter product.');
    }
    var sp = F.speed && +F.speed.value, bed = F.bed && +F.bed.value, w = F.width && +F.width.value, d = x.density;
    if (hasPct && !F.totCharge && sp > 0 && sp <= 8 && bed > 0 && w > 0 && d > 0) {
      var hearth = x.hearth && /hearth|incl|total/i.test(F.bed.label) ? x.hearth : 0, mixBed = bed - hearth;
      var t = sp * 60 * 24 * mixBed / 1000 * w * d, keep = addRf || !rf ? 1 : 1 - rf / 100;
      F.totCharge = { value: Math.round(t * keep), label: 'worked out from the file', src: name, calc: true };
      res.notes.push('Total wet charge worked out from the file: speed ' + sp + ' m/min × 1440 min × mix bed ' + mixBed + ' mm' + (hearth ? ' (bed ' + bed + ' − hearth ' + hearth + ')' : '') + ' × width ' + w + ' m × bulk density ' + d + ' t/m³' + (keep < 1 ? ' × (1 − ' + rf + ' % return fines)' : '') + ' = ' + Math.round(t * keep) + ' MT/day' + (addRf ? ' on the strand (new mix ' + Math.round(t * (1 - rf / 100)) + ' + return fines ' + Math.round(t * rf / 100) + ')' : '') + '. The blend % are applied to this.');
    } else if (hasPct && !F.totCharge && (sp || bed)) {
      var miss = []; if (!(sp > 0)) miss.push('machine speed'); if (!(bed > 0)) miss.push('bed height'); if (!(w > 0)) miss.push('pallet width'); if (!(d > 0)) miss.push('mix bulk density');
      res.notes.push('The blend is in % only. To work out the total charge in MT/day the file would also need: ' + miss.join(', ') + '. The current total wet charge is kept (change it on the Inputs page).');
    }
    return res;
  }

  // bytes: Uint8Array
  function parseBytes(bytes, name, mime, opts) {
    var out = emptyOut();
    var kind = sniff(bytes);
    if (/\.csv$/i.test(name) || /csv/.test(mime || '')) kind = kind === 'text' ? 'csv' : kind;
    if (kind === 'xlsx' || kind === 'xls' || kind === 'csv') {
      // CSV text is decoded as UTF-8 first so symbols such as ° and ₂ survive
      var wb = kind === 'csv' ? XLSX.read(decodeText(bytes).replace(/^\ufeff/, ''), { type: 'string', cellDates: true }) : XLSX.read(bytes, { type: 'array', cellDates: true });
      var sm = null;
      var isTpl = wb.SheetNames.indexOf('Blend') >= 0 && wb.SheetNames.indexOf('RM_Chemistry') >= 0; // the app's own template
      parseWorkbook(wb, name, out, opts);
      try { sm = window.SinterSmart && !isTpl ? SinterSmart.read(wb, name, { scope: opts && opts.scope, skip: out.daySheets }) : null; } catch (e) { sm = null; }
      if (sm) return Promise.resolve(finish(withGeneric(sm, out), out, name));
      return Promise.resolve(finish(out, out, name));
    }
    if (kind === 'pdf') {
      return parsePdf(bytes, name).then(function (rows) {
        scanRows(rows, name, '', out);
        var sm = null;
        try { sm = window.SinterSmart ? SinterSmart.readRows(rows, name, opts) : null; } catch (e) { sm = null; }
        return sm ? finish(withGeneric(sm, out), out, name) : finish(out, out, name);
      });
    }
    var text = decodeText(bytes);
    if (/<html|<table|<body/i.test(text)) text = htmlToText(text);
    scanRows(textToRows(text), name, '', out);
    return Promise.resolve(finish(out, out, name));
  }

  function directLink(u) {
    var m;
    if ((m = u.match(/docs\.google\.com\/spreadsheets\/d\/([\w-]+)/))) return 'https://docs.google.com/spreadsheets/d/' + m[1] + '/export?format=xlsx';
    if ((m = u.match(/drive\.google\.com\/file\/d\/([\w-]+)/)) || (m = u.match(/drive\.google\.com\/open\?id=([\w-]+)/))) return 'https://drive.google.com/uc?export=download&id=' + m[1];
    if (/dropbox\.com/.test(u)) return u.replace(/[?&]dl=0/, '').replace(/\?$/, '') + (u.indexOf('?') >= 0 ? '&' : '?') + 'dl=1';
    return u;
  }

  var pending = {}, seq = 0;
  window.__onFetch = function (id, ok, data, ct, finalUrl) {
    var p = pending[id]; if (!p) return; delete pending[id];
    if (!ok) { p.reject(new Error(data || 'download failed')); return; }
    var bin = atob(data), bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    p.resolve({ bytes: bytes, mime: ct || '', url: finalUrl });
  };
  function fetchLink(url) {
    var u = directLink(url.trim());
    if (window.AndroidBridge && AndroidBridge.fetchUrl) {
      return new Promise(function (res, rej) {
        var id = 'f' + (++seq); pending[id] = { resolve: res, reject: rej };
        AndroidBridge.fetchUrl(id, u);
        setTimeout(function () { if (pending[id]) { delete pending[id]; rej(new Error('timed out')); } }, 60000);
      });
    }
    return fetch(u).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      var ct = r.headers.get('content-type') || '';
      return r.arrayBuffer().then(function (b) { return { bytes: new Uint8Array(b), mime: ct, url: u }; });
    });
  }

  window.SinterParse = { parseBytes: parseBytes, setUserAliases: setUserAliases, fetchLink: fetchLink, scanRows: scanRows, textToRows: textToRows, emptyOut: emptyOut, norm: norm, matchField: matchField, aliases: ALIASES };
})();
