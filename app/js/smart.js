/* Smart reader for plant laboratory workbooks (bunker feed sheet + material analysis sheets + sinter
   product sheet), such as the SP-02 bunker file. It finds:
   - a feed table: material per bunker with feed rate (TPH, MT/day or %) -> raw-material blend
   - snapshot chemistry tables: one row per material with Fe, SiO2, CaO ... -> raw-material chemistry
   - history tables: DATE + analysis columns, one row per sample -> the latest valid analysis
   - a sinter product history table -> lab results (Fe, FeO, SiO2 ... basicity, RDI, RI)
   Plant names are mapped to app materials by keywords, and iron ore blends by their analysed Fe. */
(function () {
  var SD = window.SD;

  function norm(s) {
    return String(s == null ? '' : s).replace(/[\u2080-\u2089]/g, function (c) { return String(c.charCodeAt(0) - 0x2080); }).toLowerCase().replace(/[–—−]/g, '-').replace(/[()\[\]{}%]/g, ' ')
      .replace(/[^a-z0-9+\-.\/ ]/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function num(v) {
    if (typeof v === 'number') return isFinite(v) ? v : null;
    if (v == null) return null;
    var s = String(v).trim();
    if (!/^[-+]?\d*\.?\d+(e[-+]?\d+)?$/i.test(s)) return null;
    return parseFloat(s);
  }
  function isDate(v) { return v instanceof Date || (typeof v === 'string' && /^\d{4}-\d\d-\d\d/.test(v)); }
  function fmtDate(v) {
    if (v instanceof Date) return v.getFullYear() + '-' + ('0' + (v.getMonth() + 1)).slice(-2) + '-' + ('0' + v.getDate()).slice(-2);
    return String(v).slice(0, 10);
  }

  // analysis column header -> property
  function chemKey(h) {
    var n = norm(h).replace(/\s/g, '');
    if (!n) return null;
    if (/^fe\(?t\)?$|^fet$|^tfe$|^t\.?fe$|^fe\.?t$|^fetotal$|^totalfe$|^totaliron$|^fe$/.test(n)) return 'fe';
    if (/^feo$/.test(n)) return 'feo';
    if (/^fe2o3$/.test(n)) return 'fe2o3';
    if (/^sio2$/.test(n)) return 'sio2';
    if (/^al2o3$/.test(n)) return 'al2o3';
    if (/^r2o3$/.test(n)) return 'r2o3';
    if (/^cao$/.test(n)) return 'cao';
    if (/^mgo$/.test(n)) return 'mgo';
    if (/^mno$|^mn\(?o\)?$/.test(n)) return 'mno';
    if (/^p$/.test(n)) return 'p';
    if (/^s$/.test(n)) return 's';
    if (/^tio2$/.test(n)) return 'tio2';
    if (/^loi$/.test(n)) return 'loi';
    if (/^tm$|^totalmoisture$|^moisture$|^moist\.?$|^h2o$|^m\.?c\.?$/.test(n)) return 'moist';
    if (/^fcdb$|^fc$|^f\.c\.?$|^fixedcarbon$|^fcadb$/.test(n)) return 'fc';
    if (/^ashdb$|^ash$|^ashadb$/.test(n)) return 'ash';
    if (/^vmdb$|^vm$|^v\.m\.?$|^volatilematter$|^vmadb$/.test(n)) return 'vm';
    if (/^basicity$|^b2$|^cao\/sio2$/.test(n)) return 'b2';
    if (/^rdi/.test(n)) return 'rdi';
    if (/^ri$|^reducibility/.test(n)) return 'ri';
    if (/^ti$|^tumbler/.test(n)) return 'ti';
    if (/^ai$|^abrasion/.test(n)) return 'ai';
    return null;
  }

  // plant material name (+ analysed Fe) -> app material index; -1 = not a blend material; 'sinter' = product
  function classify(name, fe) {
    var L = ' ' + norm(name) + ' ';
    if (!/[a-z]{2,}/.test(L) || /^ *(nr|na|total|avg|average|std ?dev|stdev|min|max|ref)\b/.test(L)) return -1;
    if (/sinter product|sinter prod\b|product sinter|^ *sinter *$/.test(L)) return 'sinter';
    if (/raw ?mix|balling|gas sample|special sample|quartzite|silica sand/.test(L)) return -1;
    if (/\b(feo|sio2|cao|mgo|al2o3|rdi|ri|tumbler|basicity|speed|temp|temperature|pressure|suction|production)\b/.test(L)) return -1;
    if (/anthracite|\bcoal\b|nut coke/.test(L)) return 14;
    if (/coke|breeze|\beml\b|\bcf\b|\bfuel\b/.test(L)) return /bf r|return|online/.test(L) ? 13 : 12;
    if (/dolo|\bdf\b|dunite|serpentin|pyroxenite|olivine/.test(L)) return 7;
    if (/lime ?stone|\bl\/s\b|\blsf?\b|\blf\b/.test(L)) return /undersize|lp return/.test(L) ? 9 : 8;
    if (/quick ?lime|calcined|burnt ?lime|\bcl\b|\bql\d*\b|\blime\b/.test(L)) return /lime plant/.test(L) ? 11 : 10;
    if (/mill ?scale|\bmsc?\b/.test(L)) return 3;
    if (/dust|\besp\b|\bflue\b/.test(L)) return 6;
    if (/\bbf\b.*\b(iron ore|ore fines|iof|ore)\b.*return|\bbf ore return/.test(L)) return 5;
    if (/\bbf.?r|\bbfrf|\bbf ?iof|blast furnace/.test(L)) return 4;
    // the plant's own return fines are a circulating load, not new feed
    if (/\brf\d*\b|return fines|ret\.? fines|r\/fines|\br\/f\b/.test(L)) return 'rf';
    if (/sinter|r\/s/.test(L)) return 4;
    if (/met\.? ?waste|metallurgical|sludge|\bcrm\b|pellet|slag|\bipd\b/.test(L)) return 15;
    if (/ore|\biof\b|fines|premix|blend|nmdc|lloyd|conc|\brom\b|donimalai|bacheli|bachelli|geomin|gimpl|haematite|hematite|magnetite|\bfe\b|grade/.test(L)) {
      var g = SD.oreGrade ? SD.oreGrade(name) : -1;
      if (g >= 0) return g;
      if (fe != null) return fe >= 62 ? 2 : fe >= 60 ? 0 : fe >= 58 ? 1 : 16;
      return 0;
    }
    return -1;
  }

  function cellText(v) { return v == null ? '' : String(v).trim(); }

  // ---------- table finders ----------
  var MAT_HDR = /^(materials?|raw ?materials?|raw material name|material name|name of material|source|item|items|description|particulars?|name|component|input|commodity|ingredients?)$/;
  var KGT = /kg ?\/ ?t(on|onne)?s?\b|kg ?\/ ?t ?(of )?s(inter|in)?\b|kg ?per ?t(on|onne)?\b|\bkgpt\b|kg ?\/ ?tps\b/;
  var RATE_HDR = /kg ?\/ ?t|kg ?per ?t|\bkgpt\b|feed ?rate|^tph$|wet ?tph|dry ?tph|tph wet|tph dry|mt\/day|t\/day|mt ?per ?day|\btpd\b|^qty|quantity|feed prop|consumption|proportion|^%$|^% ?(in )?(blend|mix|charge)|(blend|mix|charge) ?%|^share|^wt ?%|\bwet ?%|\bdry ?%|% ?wet\b|% ?dry\b|tonnage|^mt$|^tons?$|^tonnes?$|^usage|^uses?\b|^ratio/;
  // the column whose cells below look most like material names
  function matColByContent(rows, r, skip) {
    var best = -1, bs = 0, w = 0;
    for (var rr = r + 1; rr < Math.min(rows.length, r + 25); rr++) w = Math.max(w, (rows[rr] || []).length);
    for (var c = 0; c < w; c++) {
      if (skip && skip[c]) continue;
      var sc = 0;
      for (var rr2 = r + 1; rr2 < Math.min(rows.length, r + 25); rr2++) { var v = (rows[rr2] || [])[c]; if (typeof v === 'string' && typeof classify(v, null) === 'number' && classify(v, null) >= 0) sc++; }
      if (sc > bs) { bs = sc; best = c; }
    }
    return bs >= 2 ? best : -1;
  }
  function findFeed(rows, sheet) {
    var best = null;
    for (var r = 0; r < Math.min(rows.length, 80); r++) {
      var row = rows[r] || [], mCol = -1, fCol = -1, unit = '';
      row.forEach(function (c, i) {
        var n = norm(c);
        if (mCol < 0 && MAT_HDR.test(n)) mCol = i;
        if (!chemKey(c) && (RATE_HDR.test(n) || RATE_HDR.test(String(c == null ? '' : c).toLowerCase().trim()) || /^(in )?(blend|mix|charge)$/.test(n)) && (fCol < 0 || (/wet/.test(n) && !/wet/.test(unit)) || (KGT.test(unit) && !KGT.test(String(c).toLowerCase())))) { fCol = i; unit = String(c).toLowerCase(); }
      });
      if (fCol < 0 || row.filter(function (c) { return c != null && String(c).trim() !== ''; }).length < 2) continue;
      var named = mCol >= 0;
      if (mCol < 0) { var sk = {}; sk[fCol] = 1; mCol = matColByContent(rows, r, sk); }
      if (mCol < 0) continue;
      var below = norm((rows[r + 1] || [])[fCol]);
      if (/tph|t\/h|mt\/day|t\/day|%/.test(below)) unit += ' ' + below;
      var isKgt = KGT.test(unit) || KGT.test(below);
      var isPct = !isKgt && /%|prop|share|ratio/.test(unit) && !/tph|t\/h|day|tpd|\bmt\b|ton/.test(unit);
      var perDay = !isKgt && /tph|t\/h/.test(unit) ? 24 : 1;
      var items = [], skipped = [], blank = 0;
      for (var rr = r + 1; rr < rows.length && blank < 3; rr++) {
        var rw = rows[rr] || [], nm = cellText(rw[mCol]), v = num(rw[fCol]);
        if (/^total/i.test(cellText(rw[1])) || /^total/i.test(nm)) break;
        if (rw.filter(function (c) { return chemKey(c); }).length >= 3 || /^(date\b|sinter product|product sinter|sinter analysis)/i.test(nm)) break; // next table starts
        if (!nm && v == null) { blank++; continue; }
        blank = 0;
        if (v == null) continue;
        var sofar = items.reduce(function (a, x) { return a + x.v; }, 0) / (isPct ? 1 : perDay);
        if (!nm && items.length >= 3 && Math.abs(v - sofar) <= Math.max(0.5, sofar * 0.005)) break; // unlabelled total row
        var bunker = cellText(rw[mCol - 1]);
        if (!/[a-z]{2,}/i.test(nm) || /^#|^nr$|^na$/i.test(nm)) { if (v > 0) skipped.push((bunker ? 'bunker ' + bunker : 'row ' + (rr + 1)) + ' (' + v + ')'); continue; }
        items.push({ name: nm, bunker: bunker, v: v * (isPct ? 1 : perDay), row: rr });
      }
      var score = items.length + (/feed/i.test(sheet) ? 5 : 0) + (named ? 3 : 0);
      if (items.length >= 3 && (!best || score > best.score)) best = { sheet: sheet, items: items, skipped: skipped, pct: isPct, kgt: isKgt, tph: perDay === 24, score: score, mCol: mCol, hdr: r };
    }
    return best;
  }

  // transposed sheet: one column per material ("Material | QL1 | Dolomite | 58+ Fe ..."), rows below hold
  // "Uses %" (or a tonnage) and the analysis (CaO %, SiO2 %, T.Fe %, LOI %, Ash %, FC % ...)
  function findWide(rows, sheet) { return findWide1(rows, sheet, true) || findWide1(rows, sheet, false); }
  function findWide1(rows, sheet, labelled) {
    for (var r = 0; r < Math.min(rows.length, 60); r++) {
      var row = rows[r] || [], lc = -1;
      if (labelled) row.forEach(function (c, i) { if (lc < 0 && MAT_HDR.test(norm(c))) lc = i; });
      if (labelled && lc < 0) continue;
      if (!labelled) {
        // no "Material" label: a row of 4+ material names, labels (CaO, SiO2 ...) in a column to their left
        var mc = row.map(function (c, i) { return typeof c === 'string' && typeof classify(c, null) === 'number' && classify(c, null) >= 0 ? i : -1; }).filter(function (i) { return i >= 0; });
        if (mc.length < 4) continue;
        var bestC = -1, bn = 0;
        for (var c0 = 0; c0 < mc[0]; c0++) {
          var n0 = 0;
          for (var q = r + 1; q < Math.min(rows.length, r + 30); q++) if (chemKey((rows[q] || [])[c0])) n0++;
          if (n0 > bn) { bn = n0; bestC = c0; }
        }
        if (bn < 3) continue;
        lc = bestC;
      }
      var mats = [];
      for (var c = lc + 1; c < row.length; c++) { var nm = cellText(row[c]); if (nm && typeof row[c] === 'string' && /[a-z]|\d\s*\+/i.test(nm)) mats.push({ c: c, name: nm }); }
      if (mats.length < 4) continue;
      var pctRow = -1, tpdRow = -1, kgtRow = -1, chemRows = {}, seen = {};
      for (var rr = r + 1; rr < Math.min(rows.length, r + 40); rr++) {
        var lab = norm((rows[rr] || [])[lc]);
        if (!lab) continue;
        if (seen[lab]) break; // a second block (calculated contributions) starts
        seen[lab] = 1;
        if (KGT.test(lab)) { if (kgtRow < 0) kgtRow = rr; continue; }
        if (/^(uses?|use %|usage|% ?charge|charge %|proportion|blend|mix %|% in mix|% of charge|feed %|consumption %)/.test(lab)) { if (pctRow < 0) pctRow = rr; continue; }
        if (/tph|t\/h|mt\/day|t\/day|tons?\/day|tpd|qty/.test(lab)) { if (tpdRow < 0) tpdRow = rr; continue; }
        var k = chemKey(lab);
        if (k && chemRows[k] == null) chemRows[k] = rr;
      }
      if ((pctRow < 0 && tpdRow < 0 && kgtRow < 0) || Object.keys(chemRows).length < 3) continue;
      var vRow = pctRow >= 0 ? pctRow : tpdRow >= 0 ? tpdRow : kgtRow, perDay = tpdRow >= 0 && pctRow < 0 && /tph|t\/h/.test(norm(rows[tpdRow][lc])) ? 24 : 1;
      // group labels in the rows above ("Iron Ore Fines" over 58+ / 60+ / 62+)
      function group(c) {
        for (var g = r - 1; g >= Math.max(0, r - 4); g--) {
          var gr = rows[g] || [];
          for (var x = c; x > lc; x--) { var t = cellText(gr[x]); if (t && /[a-z]{3,}/i.test(t)) return t; }
        }
        return '';
      }
      var items = [];
      mats.forEach(function (m) {
        var v = num(rows[vRow][m.c]);
        if (v == null) return;
        var chem = {};
        Object.keys(chemRows).forEach(function (k) { var x = num(rows[chemRows[k]][m.c]); if (x != null) chem[k] = x; });
        items.push({ name: m.name, group: group(m.c), v: v * perDay, chem: Object.keys(chem).length ? chem : null });
      });
      if (items.length >= 3) return { sheet: sheet, items: items, skipped: [], pct: vRow === pctRow, kgt: vRow === kgtRow, tph: perDay === 24, score: items.length + 10, wide: true };
    }
    return null;
  }

  // header row with a material/date column and >= 3 analysis columns
  function findTables(rows, sheet, title) {
    var out = [];
    for (var r = 0; r < rows.length; r++) {
      var row = rows[r] || [], cols = {}, nChem = 0, mCol = -1, dCol = -1, hdr = r;
      // header split over two rows: "Material" on one row, "%Fe(T) %SiO2 ..." on the next
      if (row.some(function (c) { return MAT_HDR.test(norm(c)); }) && row.filter(function (c) { return chemKey(c); }).length < 3) {
        var nx0 = rows[r + 1] || [];
        if (nx0.filter(function (c) { return chemKey(c); }).length >= 3) {
          row = row.slice();
          nx0.forEach(function (c, i) { if (c != null && c !== '' && !MAT_HDR.test(norm(row[i]))) row[i] = c; });
          hdr = r + 1;
        }
      }
      row.forEach(function (c, i) {
        var n = norm(c), k = chemKey(c);
        if (k && cols[k] == null) { cols[k] = i; nChem++; }
        if (mCol < 0 && (MAT_HDR.test(n) || /^(sample id|sample|sample name)$/.test(n))) mCol = i;
        if (dCol < 0 && /^(date|sampling date|date of sampling|dt)$/.test(n)) dCol = i;
      });
      if (mCol < 0 && dCol < 0 && nChem >= 3) { var skc = {}; Object.keys(cols).forEach(function (k) { skc[cols[k]] = 1; }); mCol = matColByContent(rows, r, skc); }
      var anon = mCol < 0 && dCol < 0;
      if (nChem < 3 || (anon && nChem < 5)) continue;
      // repeated header rows (row 3 and row 5 in the lab sheets): keep the last one
      var nx = rows[r + 1] || [], nx2 = rows[r + 2] || [];
      if (dCol >= 0 && (norm(nx[dCol]) === 'date' || norm(nx2[dCol]) === 'date')) continue;
      // a caption just above the header ("Sinter product") names the table
      var cap = '';
      for (var u = r - 1; u >= Math.max(0, r - 3) && !cap; u--) {
        var txt = (rows[u] || []).filter(function (c) { return c != null && String(c).trim() !== ''; });
        if (txt.length === 1 && typeof txt[0] === 'string' && /[a-z]{3,}/i.test(txt[0])) cap = txt[0].trim();
        else if (txt.length > 1) break;
      }
      if (hdr > r) r = hdr;
      out.push({ sheet: sheet, title: cap || title, hdr: hdr, cols: cols, mCol: mCol, dCol: dCol, history: dCol >= 0 || anon, anon: anon });
    }
    return out;
  }

  function rowChem(t, rw) {
    var c = {}, n = 0;
    Object.keys(t.cols).forEach(function (k) { var v = num(rw[t.cols[k]]); if (v != null) { c[k] = v; n++; } });
    return n ? { c: c, n: n } : null;
  }

  // latest analysed sample in a history table (rows below the header, newest at the bottom)
  function latest(t, rows) {
    var key = t.cols.fe != null ? 'fe' : t.cols.cao != null ? 'cao' : t.cols.fc != null ? 'fc' : Object.keys(t.cols)[0];
    var avg = null, last = null, prev = null;
    for (var r = t.hdr + 1; r < rows.length; r++) {
      var rw = rows[r] || [], first = norm(rw[0]) + ' ' + norm(rw[1]);
      if (/\b(avg|average)\b/.test(first)) { var a = rowChem(t, rw); if (a) avg = { chem: a.c, row: r, date: 'average' }; continue; }
      if (/std|stdev|min\b|max\b/.test(first)) continue;
      var rc = rowChem(t, rw);
      if (!rc || rc.c[key] == null || rc.n < Math.min(3, Object.keys(t.cols).length)) continue;
      var dv = t.dCol >= 0 ? rw[t.dCol] : null;
      var nm = t.mCol >= 0 ? cellText(rw[t.mCol]) : '';
      // a different material in the same table starts a new series
      if (last && nm && last.name && norm(nm) !== norm(last.name)) prev = null; else prev = last;
      last = { chem: rc.c, row: r, date: dv != null && isDate(dv) ? fmtDate(dv) : '', name: nm };
    }
    if (!last) { if (avg) avg.chem2 = avg.chem; return avg; }
    // average of the last two analyses (keys present in both; otherwise the latest value)
    last.chem2 = {}; last.n2 = prev ? 2 : 1;
    Object.keys(last.chem).forEach(function (k) { last.chem2[k] = prev && prev.chem[k] != null ? (last.chem[k] + prev.chem[k]) / 2 : last.chem[k]; });
    return last;
  }

  // ---------- main ----------
  function sheetOf(sn, rows) {
    var title = '';
    for (var r = 0; r < Math.min(3, rows.length) && !title; r++) (rows[r] || []).forEach(function (c) { if (!title && typeof c === 'string' && /[a-z]{3,}/i.test(c)) title = c.trim(); });
    return { sn: sn, rows: rows, title: title };
  }
  function read(wb, fileName, opts) {
    return core(wb.SheetNames.filter(function (sn) { return !(opts && opts.skip && opts.skip.indexOf(sn) >= 0); }).map(function (sn) { return sheetOf(sn, XLSX.utils.sheet_to_json(wb.Sheets[sn], { header: 1, raw: true, defval: null, blankrows: true })); }), fileName, opts);
  }
  // rows from a PDF or text report (one "sheet" per page block)
  function readRows(rows, fileName, opts) { return core([sheetOf(fileName, rows)], fileName, opts); }
  function core(sheets, fileName, opts) {
    opts = opts || {};
    var feed = null;
    sheets.forEach(function (s) { var f = findFeed(s.rows, s.sn); if (f && (!feed || f.score > feed.score)) feed = f; });
    sheets.forEach(function (s) { var f = findWide(s.rows, s.sn); if (f && (!feed || f.score > feed.score)) feed = f; });
    var tables = [];
    sheets.forEach(function (s) { if (!/^print$/i.test(s.sn.trim())) tables = tables.concat(findTables(s.rows, s.sn, s.title).map(function (t) { t.rows = s.rows; return t; })); });
    var hist = tables.filter(function (t) { return t.history; });
    // a plain two-column list (Item | Qty) is left to the general reader; this one is for plant lab workbooks
    if (feed && !feed.wide && !feed.tph && !tables.length) feed = null;
    var nSnap = tables.filter(function (t) { return !t.history && t.mCol >= 0; }).length;
    if (!feed && hist.length < (opts.scope === 'chem' ? 1 : 2) && !nSnap) return null;

    var out = { found: {}, chem: {}, notes: [], errors: [], unmatched: [], smart: true };
    var src = function (sheet) { return fileName + ' / ' + sheet; };

    // 1. chemistry per material name: snapshot tables first, then latest from history tables
    var snap = {}, hist2 = [];
    tables.forEach(function (t) {
      if (t.history) {
        var l = latest(t, t.rows);
        if (l && !hist2.some(function (h) { return h.t.sheet === t.sheet && h.l.row === l.row; })) hist2.push({ t: t, l: l, name: l.name || t.title || t.sheet });
        return;
      }
      for (var r = t.hdr + 1; r < t.rows.length; r++) {
        var rw = t.rows[r] || [], nm = cellText(rw[t.mCol]);
        if (/^total/i.test(cellText(rw[1])) || /^total/i.test(nm)) break;
        var rc = rowChem(t, rw);
        if (!nm || !rc || !/[a-z]{2,}/i.test(nm)) continue;
        if (Object.keys(rc.c).every(function (k) { return rc.c[k] === 0; })) continue;
        (snap[norm(nm)] = snap[norm(nm)] || []).push({ chem: rc.c, sheet: t.sheet, name: nm });
      }
    });

    // 2. blend from the feed table
    var idxFe = {}, used = {}, feedTot = 0, moved = [];
    // two different iron ores (e.g. "Fines A" and "Concentrate") each get their own ore input instead of being averaged
    function slot(mi, name) {
      // same grade number in the name ("60+ Fe" and "60+") = the same ore, kept together
      var gk = function (n) { var m = String(n).match(/\d{2}(\.\d+)?\s*\+?/); return m ? m[0].replace(/\s/g, '') : ''; };
      if (typeof mi !== 'number' || [0, 1, 2, 16].indexOf(mi) < 0 || !used[mi] || used[mi].some(function (x) { return norm(x.name) === norm(name) || (gk(name) && gk(x.name) === gk(name)); })) return mi;
      var free = [2, 0, 1, 16].filter(function (s) { return !used[s]; })[0];
      if (free != null) moved.push(name + ' → ' + SD.mats[free] + ' (its own input; ' + SD.mats[mi].replace(/\s*\(.*$/, '') + ' already holds ' + used[mi][0].name + ')');
      return free == null ? mi : free;
    }
    if (feed) {
      var zeroNames = feed.items.filter(function (it) { return !(it.v > 0); }).map(function (it) { return it.name; });
      var rfTot = 0, rfNames = [];
      feed.items.forEach(function (it) {
        if (!(it.v > 0)) return;
        var hb = it.chem ? null : histBest(it.name), sc = it.chem ? { chem: it.chem } : snapFor(it.name) || hb, fe = sc ? sc.chem.fe : null;
        var mi = classify(it.name, fe);
        if (mi === -1 && it.group) mi = classify(it.name + ' ' + it.group, fe);
        if (mi === 'rf') { rfTot += it.v; rfNames.push(it.name); mi = SD.OWN_RF != null ? SD.OWN_RF : 4; }
        if (mi === -1 || mi === 'sinter') { out.unmatched.push({ label: it.name, value: it.v, src: src(feed.sheet) }); return; }
        mi = slot(mi, it.name);
        // chemistry: the material's own analysis history when there is one (latest, or average of the last two), else the bunker table
        var c1 = hb ? hb.chem : sc ? sc.chem : null, c2 = hb ? hb.chem2 : c1;
        (used[mi] = used[mi] || []).push({ name: it.name, v: it.v, chem: c1, chem2: c2, n2: hb ? hb.n2 : 1 });
        feedTot += it.v;
      });
      // % basis: the shares add up to 100 again
      if (feed.pct && feedTot > 0 && Math.abs(feedTot - 100) > 0.5) {
        var f100 = 100 / feedTot;
        Object.keys(used).forEach(function (mi) { used[mi].forEach(function (x) { x.v *= f100; }); });
        out.notes.push('Blend % rescaled to 100 over the new feed (they added up to ' + (+feedTot.toFixed(2)) + '%).');
        feedTot = 100;
      }
      if (rfNames.length) out.notes.push('Plant return fines (' + rfNames.join(', ') + ', ' + (+rfTot.toFixed(2)) + (feed.pct ? '%' : feed.kgt ? ' kg/t' : ' MT/day') + ') go to their own input. They are recycled sinter, so their chemistry follows the sinter product and they do not change sinter chemistry or net production.');
      Object.keys(used).forEach(function (mi) {
        var list = used[mi], v = list.reduce(function (a, x) { return a + x.v; }, 0);
        var names = []; list.forEach(function (x) { if (names.indexOf(x.name) < 0) names.push(x.name); });
        out.found[(feed.kgt ? 'kgt.' : feed.pct ? 'pct.' : 'use.') + mi] = { value: v, label: names.join(' + ').slice(0, 60), src: src(feed.sheet) };
      });
      out.notes.unshift('Read as a plant lab workbook. Blend from "' + feed.sheet + '": ' + feed.items.length + (feed.wide ? ' material columns (Uses %)' : feed.pct ? ' materials as % of the mix' : ' bunkers') +
        (feed.tph ? ', feed rate in TPH × 24 = MT/day wet (total ' + Math.round(feedTot) + ' MT/day)' : feed.kgt ? ', given as kg per ton of sinter (total ' + Math.round(feedTot) + ' kg/t)' : '') + '.');
      if (feed.skipped.length) out.notes.push('Bunkers without a material name were left out: ' + feed.skipped.join(', ') + '.');
      if (zeroNames.length) out.notes.push('At 0 in the blend (read, not used): ' + zeroNames.join(', ') + '.');
      if (moved.length) out.notes.push('Different iron ores are kept apart, not averaged: ' + moved.join('; ') + '.');
    }

    // no feed table (analysis sheets only): one material per analysis sheet
    if (!feed) hist2.forEach(function (h) {
      if (h.t.anon) return;
      var fe = h.l.chem.fe, mi = classify(h.name, fe);
      if (mi === -1) mi = classify(h.t.sheet, fe);
      if (mi === -1) mi = classify(h.t.title, fe);
      if (typeof mi !== 'number' || mi < 0) return;
      mi = slot(mi, h.name);
      (used[mi] = used[mi] || []).push({ name: h.name, v: 1, chem: h.l.chem, chem2: h.l.chem2, n2: h.l.n2, sheet: h.t.sheet, hist: true });
    });

    // no feed table: snapshot analysis tables (one row per material)
    if (!feed) Object.keys(snap).forEach(function (k) {
      var e = snap[k][0], mi = classify(e.name, e.chem.fe);
      if (typeof mi !== 'number' || mi < 0 || used[mi] && used[mi].some(function (x) { return x.hist; })) return;
      mi = slot(mi, e.name);
      (used[mi] = used[mi] || []).push({ name: e.name, v: 1, chem: e.chem, chem2: e.chem, n2: 1, sheet: e.sheet });
    });

    out.matNames = {};
    Object.keys(used).forEach(function (mi) { var nm = []; used[mi].forEach(function (x) { if (nm.indexOf(x.name) < 0) nm.push(x.name); }); out.matNames[mi] = nm.join(' + ').slice(0, 70); });
    // 3. chemistry for every material in the blend (mode 1 = latest analysis, 2 = average of the last two)
    out.chem = build(1); out.chem2 = build(2);
    out.chemN2 = Object.keys(used).filter(function (mi) { return used[mi].some(function (x) { return x.n2 === 2; }); }).length;
    var nC = Object.keys(out.chem).length;
    if (nC) out.notes.push('Raw-material chemistry for ' + nC + (nC === 1 ? ' material' : ' materials') + (feed ? '' : ' (analysis only, no blend in the file)') + ', from the analysis in the file' + (out.chemN2 ? '; ' + (out.chemN2 === nC ? (nC === 1 ? 'it has' : 'all have') : out.chemN2 + ' have') + ' more than one analysis, so you can use the latest or the average of the last two (Inputs → Load)' : '') + '.');
    if (!feed) {
      var multi = Object.keys(used).filter(function (mi) { return used[mi].length > 1; });
      if (multi.length) out.notes.push('Several sheets fall under the same input, so their analyses were averaged: ' + multi.map(function (mi) { return SD.mats[mi].replace(/\s*\(.*$/, '') + ' (' + used[mi].map(function (x) { return x.sheet; }).join(', ') + ')'; }).join('; ') + '.');
    }

    function build(mode) {
    var res0 = {};
    Object.keys(used).forEach(function (mi) {
      mi = +mi;
      var parts = used[mi].map(function (x) {
        var c = (mode === 2 ? x.chem2 : x.chem) || histFor(x.name, mi, false, mode);
        return c ? { c: c, w: x.v } : null;
      }).filter(Boolean);
      var fuel = SD.types[mi] === 'Fuel';
      if (!parts.length && !fuel) return;
      var W = parts.reduce(function (a, p) { return a + p.w; }, 0) || 1, ch = {};
      parts.forEach(function (p) { Object.keys(p.c).forEach(function (k) { ch[k] = (ch[k] || 0) + p.c[k] * p.w / W; }); });
      if (fuel) {
        // coke / coal: proximate analysis (own rows, or the history sheet); oxides are either on a whole-fuel
        // basis already, or the ash composition (SiO2 > 20) and are scaled by ash %
        var px = ch.fc == null && ch.ash == null ? histFor(used[mi][0].name, mi, true, mode) : null;
        var ash = ch.ash != null ? ch.ash : px && px.ash != null ? px.ash : null, res = {};
        var fc = ch.fc != null ? ch.fc : px ? px.fc : null;
        if (fc != null) res.fc = fc;
        if (px && px.moist != null && !ch.moist) res.moist = px.moist; else if (ch.moist != null) res.moist = ch.moist;
        if (ash != null) res.burn = Math.max(0, 100 - ash); else if (ch.loi != null) res.burn = ch.loi;
        var ashBasis = ch.sio2 != null && ch.sio2 > 20;
        ['fe', 'sio2', 'al2o3', 'cao', 'mgo', 'mno', 'p', 'tio2', 's'].forEach(function (k) {
          if (ch[k] == null) return;
          if (!ashBasis) res[k] = ch[k]; else if (ash != null) res[k] = ch[k] * ash / 100;
        });
        ch = res;
      } else {
        if (ch.fe == null && ch.fe2o3 != null) ch.fe = ch.fe2o3 * 0.6994;
        if (ch.al2o3 == null && ch.r2o3 != null) ch.al2o3 = ch.r2o3;
        if (ch.loi != null) ch.burn = ch.loi;
      }
      var keep = {};
      ['moist', 'fe', 'feo', 'sio2', 'al2o3', 'cao', 'mgo', 'mno', 'loi', 'fc', 'burn', 's', 'p', 'tio2'].forEach(function (k) { if (k === 'fc' && !fuel) return; if (ch[k] != null && isFinite(ch[k])) keep[k] = +ch[k].toFixed(4); });
      if (Object.keys(keep).length) res0[mi] = keep;
    });
    return res0;
    }

    // 4. sinter product: latest analysis -> lab results
    var sp = hist2.filter(function (h) { return !h.t.anon && (classify(h.name, null) === 'sinter' || classify(h.t.title, null) === 'sinter'); })
      .sort(function (a, b) { return Object.keys(b.l.chem).length - Object.keys(a.l.chem).length; })[0];
    // no labelled sinter table: an unlabelled analysis table whose numbers look like sinter
    if (!sp) sp = hist2.filter(function (h) {
      var c = h.l.chem;
      return h.t.anon && c.fe >= 45 && c.fe <= 62 && c.cao >= 4 && c.cao <= 16 && c.sio2 >= 3 && c.sio2 <= 10 && !/predict|calculat|estimat/i.test(h.t.title);
    })[0];
    if (sp) {
      ['fe', 'feo', 'sio2', 'al2o3', 'cao', 'mgo', 'mno', 'b2', 'rdi', 'ri', 'ti', 'ai'].forEach(function (k) {
        var v = sp.l.chem[k]; if (v != null) out.found['lab.' + k] = { value: v, label: sp.t.sheet + (sp.l.date ? ' · ' + sp.l.date : ''), src: src(sp.t.sheet) };
      });
      out.notes.push((sp.t.anon ? 'Lab results from the last row of the sinter analysis table on "' : 'Lab results from the latest sinter product analysis on "') + sp.t.sheet + '"' + (sp.l.date ? ' (' + sp.l.date + ')' : '') + '. Check these are your current sinter results.');
    }
    return out;

    function snapFor(name) {
      var k = norm(name);
      if (snap[k]) return snap[k][0];
      // bunker table often shortens names ("PREMIX BLEND COMPOSITE" vs "PREMIX BLEND(LLOYDS ...)")
      var words = k.split(' ').filter(function (w) { return w.length >= 3 && !/^(fines?|iron|ore|mix|bf|the|and)$/.test(w); });
      var best = null, bs = 0;
      Object.keys(snap).forEach(function (s) {
        var sc = words.filter(function (w) { return s.indexOf(w) >= 0; }).length;
        var same = classify(snap[s][0].name, snap[s][0].chem.fe) === classify(name, snap[s][0].chem.fe);
        if (same && sc > bs) { bs = sc; best = snap[s][0]; }
      });
      return best;
    }
    // history sheet that best names this feed material ("PREMIX BLEND(LLOYDS..." -> sheet "PREMIX BLEND COMPOSITE")
    function histBest(name) {
      var words = norm(name).split(' ').filter(function (w) { return w.length >= 3 && !/^(fines?|iron|ore|mix|the|and|rack|nov|oct)$/.test(w); });
      var best = null, bs = 0, cls = classify(name, null), ore = typeof cls === 'number' && SD.types[cls] === 'Ore';
      hist2.forEach(function (h) {
        if (h.t.anon || h.l.chem.fe == null && h.l.chem.cao == null) return;
        var hc = classify(h.name + ' ' + h.t.sheet, h.l.chem.fe), hore = typeof hc === 'number' && SD.types[hc] === 'Ore';
        if (hc !== cls && !(ore && hore)) return;
        var sc = 0;
        words.forEach(function (w) { if (norm(h.name).indexOf(w) >= 0) sc += 2; if (norm(h.t.sheet).indexOf(w) >= 0) sc += 1; });
        if (sc > bs) { bs = sc; best = { chem: h.l.chem, chem2: h.l.chem2, n2: h.l.n2 }; }
      });
      return bs >= 2 ? best : null;
    }
    function histFor(name, mi, proximate, mode) {
      var k = norm(name), words = k.split(' ').filter(function (w) { return w.length >= 3 && !/^(fines?|iron|ore|mix|bf|the|and)$/.test(w); });
      var cand = hist2.filter(function (h) {
        var hm = classify(h.name, h.l.chem.fe), ht = classify(h.t.title, h.l.chem.fe), hs = classify(h.t.sheet, h.l.chem.fe);
        if (proximate && h.l.chem.fc == null && h.l.chem.ash == null) return false;
        if (!proximate && h.l.chem.fc != null && h.l.chem.fe == null && h.l.chem.cao == null) return false;
        return hm === mi || ht === mi || hs === mi || norm(h.name) === k;
      });
      // iron ore: only a sheet that names the same blend / source
      if (typeof mi === 'number' && SD.types[mi] === 'Ore' && mi !== 3 && mi !== 6 && mi !== 15)
        cand = cand.filter(function (h) { var t = norm(h.name + ' ' + h.t.title + ' ' + h.t.sheet); return words.some(function (w) { return t.indexOf(w) >= 0; }); });
      return cand.length ? (mode === 2 ? cand[0].l.chem2 : cand[0].l.chem) : null;
    }
  }

  window.SinterSmart = { read: read, readRows: readRows, classify: classify, chemKey: chemKey };
})();
