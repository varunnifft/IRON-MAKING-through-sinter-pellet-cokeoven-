/* Sinter Predict: Master Sheet Builder. The Inputs page in five steps:
   1 Inputs (one upload section: files, links, notes)  >  2 Review & fill missing  >  3 Master Sheet  >  4 Run prediction  >  5 Results.
   Every source is read on the device (parse.js / smart.js / match.js); nothing is sent to a cloud service.
   Each value is mapped to a fixed cell of the Master Sheet (master.js) with a confidence, a reason and its source.
   v1.3: a value you do not give is taken from the master default table at once and shown RED until you type or upload
   your own; the additional parameters that sharpen the prediction are shown GREEN when you give them. */
(function () {
  'use strict';
  var M = window.SinterMaster, SD = window.SD, PR = window.SinterParse;
  var KEY = 'sp.builder', MAPKEY = 'sp.plantMaps';
  var X = null; function cx() { return X || (X = window.SinterApp.ctx); }
  var BYTES = {}; // source id -> file bytes, kept in memory only
  var busy = false;
  var STEPS = ['Inputs', 'Review & fill missing', 'Master Sheet', 'Run prediction', 'Results'];
  var MODE_L = { use: 'MT/day (wet)', pct: '% of charge', kgt: 'kg/t sinter' }, MODE_X = { use: 'MT/day', pct: '%', kgt: 'kg/t' };
  var ACCEPT = '.xlsx,.xls,.xlsm,.csv,.pdf,.jpg,.jpeg,.png,.docx,.txt,image/*,application/pdf,text/csv,text/plain,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel.sheet.macroEnabled.12,application/vnd.openxmlformats-officedocument.wordprocessingml.document';

  function fresh() { return { v: 1, step: 1, plant: '', notes: '', sources: [], cells: {}, mode: null, modeUser: null, modeAsk: false, gen: null, unmatched: [], tab: 'Blend', formed: null, ran: null, seq: 0, chemAvg: 'last', pending: {} }; }
  var B = fresh();
  function load() {
    try { var s = JSON.parse(localStorage.getItem(KEY) || 'null'); if (s && s.v === 1) { B = s; B.sources.forEach(function (x) { if (x.kind === 'file' && x.status !== 'failed') x.lost = true; }); } } catch (e) { }
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(B)); } catch (e) { } }
  load();
  setTimeout(function () { try { flushPublish(); } catch (e) { } }, 6000); // send results that were waiting for a connection

  // ---------- helpers ----------
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function $(s, el) { return (el || document).querySelector(s); }
  function $$(s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); }
  function isNum(v) { return typeof v === 'number' && isFinite(v); }
  function toNum(v) { if (v == null || v === '') return null; if (typeof v === 'number') return isFinite(v) ? v : null; var n = parseFloat(String(v).replace(/,/g, '')); return isFinite(n) ? n : null; }
  function fmt(v, d) { if (!isNum(v)) return v == null ? '' : String(v); var a = Math.abs(v); if (d == null) d = a >= 1000 ? 0 : a >= 100 ? 1 : a >= 1 ? 2 : 3; return String(+v.toFixed(d)); }
  function ic(n) { return window.SP_ICON ? window.SP_ICON(n) : ''; }
  function toast(t) { cx().toast(t); }
  function sizeTxt(n) { return !n ? '' : n < 1024 ? n + ' B' : n < 1048576 ? (n / 1024).toFixed(0) + ' KB' : (n / 1048576).toFixed(1) + ' MB'; }
  function extOf(n) { var m = String(n || '').toLowerCase().match(/\.([a-z0-9]+)(?:$|\?)/); return m ? m[1] : ''; }
  function kindOf(name, mime) {
    var e = extOf(name);
    if (/^(xlsx|xls|xlsm)$/.test(e)) return 'Excel'; if (e === 'csv') return 'CSV'; if (e === 'pdf' || /pdf/.test(mime || '')) return 'PDF';
    if (/^(jpg|jpeg|png|webp|heic|bmp)$/.test(e) || /^image\//.test(mime || '')) return 'Image'; if (e === 'docx') return 'Word'; if (e === 'txt') return 'Text';
    return e ? e.toUpperCase() : 'File';
  }

  // ---------- Master Sheet cells ----------
  var META = {}, ORDER = [];
  function addMeta(id, o) { META[id] = o; ORDER.push(id); }
  M.BLEND_ROWS.forEach(function (r) {
    M.BLEND_COLS.forEach(function (c) { addMeta('blend.' + c.k + '.' + r.i, { sheet: 'Blend', row: r.l, col: c.l, unit: c.u, lo: c.lo, hi: c.hi, mat: r.i, bcol: c.k }); });
    addMeta('blend.name.' + r.i, { sheet: 'Blend', row: r.l, col: 'Plant name', type: 'text', mat: r.i });
  });
  M.BLEND_EXTRA.forEach(function (e) { addMeta('blend.' + e.k, { sheet: 'Blend', row: e.l, unit: e.u, lo: e.lo, hi: e.hi, need: e.need }); });
  M.MACHINE.forEach(function (p) { addMeta('mach.' + p.k, { sheet: 'Machine', row: p.l, unit: p.u, lo: p.lo, hi: p.hi, type: p.type, opts: p.opts, d: p.d, def: true, k: p.k }); });
  M.LAB.forEach(function (p) { addMeta('lab.' + p.k, { sheet: 'Lab_Results', row: p.l, unit: p.u, lo: p.lo, hi: p.hi, k: p.k }); });
  M.CHEM_ROWS.forEach(function (r) {
    M.CHEM.forEach(function (c) { var g = M.chemRange(c.k, r.i); addMeta('chem.' + r.i + '.' + c.k, { sheet: 'RM_Chemistry', row: r.l, col: c.l, unit: c.u, lo: g[0], hi: g[1], def: true, mat: r.i, k: c.k }); });
  });
  function lbl(id) { var m = META[id]; return m ? m.row + (m.col ? ' · ' + m.col : '') : id; }
  var ROWL = {}; M.BLEND_ROWS.forEach(function (r) { ROWL[r.i] = r.l; });
  function defVal(id) {
    var m = META[id], D = M.loadDefaults(); if (!m || !m.def) return null;
    if (m.sheet === 'Machine') return D.mach[m.k] ? D.mach[m.k].v : null;
    var r = D.chem[m.mat]; return r && r[m.k] != null ? r[m.k] : null;
  }
  function isExtraCell(id) { var m = META[id]; if (!m || !m.k) return false; return m.sheet === 'Machine' ? M.isExtra('mach', m.k) : m.sheet === 'RM_Chemistry' ? M.isExtra('chem', m.k) : false; }
  function autoDef(id, why) { var d = defVal(id); if (d == null) return null; return { v: d, st: 'default', approved: true, auto: true, req: true, why: why || 'master default (not in your data): type or upload your value' }; }
  function userGiven(c) { return !!c && /^(file|review|typed)$/.test(c.st) && (isNum(c.v) || (typeof c.v === 'string' && c.v !== '')); }
  // parse.js field key <-> cell id
  function cellOfKey(k) {
    var p = k.split('.');
    if (/^(use|pct|kgt)$/.test(p[0])) return META['blend.' + k] ? 'blend.' + k : null;
    if (k === 'totCharge' || k === 'sinterProd') return 'blend.' + k;
    if (p[0] === 'lab') return META[k] ? k : null;
    return META['mach.' + k] ? 'mach.' + k : null;
  }
  function keyOfCell(id) { var p = id.split('.'); if (p[0] === 'blend' && /^(use|pct|kgt)$/.test(p[1])) return p[1] + '.' + p[2]; if (p[0] === 'mach') return p[1]; if (p[0] === 'lab') return id; if (id === 'blend.totCharge' || id === 'blend.sinterProd') return p[1]; return null; }

  // ---------- unit conversion (on import, to the template unit) ----------
  function spdK() { var m = cx().state.machine; return m && +m.k > 0 ? +m.k : 0.0656; }
  function convertUnit(id, v, u) {
    var n = toNum(v), how = '', m = META[id]; u = String(u || '').toLowerCase().replace(/\s+/g, '');
    if (n == null || !m) return { v: v, how: '' };
    if (id === 'mach.windP') { if (/mmwc|mmh2o|mmwg|mmaq|mmw\.?c/.test(u)) { n *= 0.00980665; how = 'mmWC to kPa'; } else if (/mbar/.test(u)) { n *= 0.1; how = 'mbar to kPa'; } else if (/^pa$/.test(u)) { n /= 1000; how = 'Pa to kPa'; } else if (/^bar$/.test(u)) { n *= 100; how = 'bar to kPa'; } else if (/kgf?\/cm/.test(u)) { n *= 98.0665; how = 'kg/cm² to kPa'; } }
    if (id === 'mach.speed') { if (/hz/.test(u)) { n *= spdK(); how = 'Hz to m/min with your machine factor ' + spdK() + ' m/min per Hz'; } else if (/m\/h/.test(u)) { n /= 60; how = 'm/h to m/min'; } }
    if (/^blend\.use\./.test(id) || id === 'blend.totCharge' || id === 'blend.sinterProd' || id === 'lab.prod') { if (/t\/h|tph|mt\/h|t\/hr|tonnes?\/h/.test(u)) { n *= 24; how = 't/h to MT/day'; } else if (/t\/shift/.test(u)) { n *= 3; how = 't/shift to MT/day (3 shifts)'; } }
    if (m.unit === '%' && /fraction|^frac|^-$/.test(u) && n <= 1) { n *= 100; how = 'fraction to %'; }
    if (m.unit === '°C' && /^(k|kelvin)$/.test(u)) { n -= 273.15; how = 'K to °C'; }
    if (m.unit === '°C' && /^(°?f|degf)$/.test(u)) { n = (n - 32) * 5 / 9; how = '°F to °C'; }
    if (m.unit === 'mm' && id === 'mach.bed') { if (/^m$/.test(u)) { n *= 1000; how = 'm to mm'; } else if (/^cm$/.test(u)) { n *= 10; how = 'cm to mm'; } }
    if (m.unit === 'm' && /^mm$/.test(u)) { n /= 1000; how = 'mm to m'; }
    return { v: n, how: how };
  }

  // ---------- mapping memory (per plant) ----------
  function maps() { try { return JSON.parse(localStorage.getItem(MAPKEY) || '{}') || {}; } catch (e) { return {}; } }
  function saveMaps(o) { try { localStorage.setItem(MAPKEY, JSON.stringify(o)); } catch (e) { } }
  function plantKey() { return String(B.plant || '').trim().toLowerCase(); }
  function plantMap() { var o = maps()[plantKey()]; return (o && o.map) || {}; }

  // ---------- reading sources ----------
  function docxText(u8) {
    var z = XLSX.CFB.read(u8, { type: 'array' }), f = XLSX.CFB.find(z, '/word/document.xml');
    if (!f) throw new Error('this Word file has no document text');
    var xml = new TextDecoder('utf-8').decode(new Uint8Array(f.content));
    return xml.replace(/<\/w:p>\s*<\/w:tc>/g, '</w:tc>').replace(/<\/w:tc>/g, '\t').replace(/<\/w:tr>/g, '\n').replace(/<\/w:p>/g, '\n').replace(/<w:tab\/>/g, '\t').replace(/<[^>]+>/g, '')
      .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, '&');
  }
  function textBytes(t) { return new TextEncoder().encode(t); }
  function nothing(out) { return !Object.keys(out.found || {}).length && !Object.keys(out.chem || {}).length && !(out.unmatched || []).length; }
  var LINK_ERR = 'Cannot open this link. Please download the file and upload it here.';
  function parseSource(s, by, mime) {
    var k = kindOf(s.name, mime);
    if (k === 'Image') return Promise.reject(new Error('Photos and scanned images cannot be read on the device. Type their values in Step 2, or upload the Excel or text PDF instead.'));
    if (k === 'Word') {
      var t; try { t = docxText(by); } catch (e) { return Promise.reject(new Error('could not open the Word file (' + e.message + ')')); }
      return PR.parseBytes(textBytes(t), s.name + '.txt', 'text/plain', {});
    }
    return PR.parseBytes(by, s.name, mime || '', { day: s.day || undefined }).then(function (out) {
      if (out.dayInfo) { s.dayInfo = out.dayInfo; if (!s.day) s.day = out.dayInfo.pick; }
      if (s.kind === 'link' && nothing(out)) {
        var head = new TextDecoder('utf-8').decode(by.subarray(0, 4000));
        if (/<html|<!doctype/i.test(head)) throw new Error(LINK_ERR + ' (it opened a web page that needs a login or shows no values)');
      }
      if (k === 'PDF' && nothing(out)) throw new Error('No text found in this PDF (it looks like a scan). Type its values in Step 2, or upload the Excel or text PDF instead.');
      return out;
    });
  }
  function readSource(s) {
    if (s.kind === 'link') {
      return PR.fetchLink(s.name).then(function (r) {
        BYTES[s.id] = r.bytes; s.size = r.bytes.length; s.mime = r.mime || ''; s.lost = false;
        if (/pdf/.test(s.mime) && !/\.pdf$/i.test(s.name)) s.fname = 'link.pdf';
        return parseSource({ id: s.id, name: s.fname || decodeURIComponent((r.url || s.name).split('?')[0].split('/').pop() || 'link'), kind: 'link', day: s.day, dayInfo: s.dayInfo }, r.bytes, s.mime).then(function (o) { return o; });
      }, function (e) { throw new Error(LINK_ERR + ' (' + (e && e.message || e) + ')'); });
    }
    if (!BYTES[s.id]) return Promise.reject(new Error('This file is no longer in memory (the app was closed). Remove it and add it again.'));
    return parseSource(s, BYTES[s.id], s.mime);
  }

  // ---------- candidates from one source ----------
  var ORE_I = { 2: 1, 0: 1, 1: 1, 16: 1 };
  function matchCands() {
    var A = PR.aliases || {}, C = [];
    M.BLEND_ROWS.forEach(function (r) {
      C.push({ key: 'use.' + r.i, label: r.l, aliases: A['use.' + r.i] });
      C.push({ key: 'pct.' + r.i, label: r.l + ' %', aliases: (A['use.' + r.i] || []).map(function (a) { return a + ' %'; }) });
      C.push({ key: 'kgt.' + r.i, label: r.l + ' kg/t', aliases: (A['use.' + r.i] || []).map(function (a) { return a + ' kg/t'; }) });
    });
    C.push({ key: 'totCharge', label: 'Total wet charge', aliases: A.totCharge }, { key: 'sinterProd', label: 'Sinter production base', aliases: A.sinterProd });
    M.MACHINE.forEach(function (p) { if (!p.type) C.push({ key: p.k, label: p.l, aliases: (A[p.k] || []).concat(p.syn || []) }); });
    M.LAB.forEach(function (p) { C.push({ key: 'lab.' + p.k, label: 'Sinter ' + p.l, aliases: (A['lab.' + p.k] || []).map(function (a) { return 'sinter ' + a; }).concat(A['lab.' + p.k] || []) }); });
    return C;
  }
  var MC = null;
  function candsFrom(out, s, order) {
    var name = s.kind === 'note' ? 'Notes typed in Step 1' : s.name, C = [], pm = plantMap();
    var F = out.found || {};
    var bb = F.blendBasis && String(F.blendBasis.value || '');
    if (bb) C.push({ cell: 'blend.mode', v: /kg/i.test(bb) ? 'kgt' : /%|pct|percent/i.test(bb) ? 'pct' : 'use', conf: 99, order: order, why: 'file says "Blend entered as ' + bb + '"', src: { name: name, label: 'Blend entered as' } });
    var hasBlend = false;
    Object.keys(F).forEach(function (k) {
      var id = cellOfKey(k); if (!id) return;
      var x = F[k], v = x.value, orig = v, conf = 95, how = 'label', why = '"' + x.label + '" read as ' + lbl(id), ou = '';
      if (/^blend\.(use|pct|kgt)\./.test(id)) hasBlend = true;
      if (pm[PR.norm(x.label)]) { conf = 98; how = 'saved'; why = 'saved mapping for ' + B.plant + ': "' + x.label + '"'; }
      if (x.calc) { conf = 70; why = String(x.label) + ' (check it)'; }
      if (id === 'mach.speed' && isNum(v) && (v > 8 || /hz/i.test(x.label))) { var c1 = convertUnit(id, v, 'Hz'); v = c1.v; ou = 'Hz'; conf = 75; why = '"' + x.label + '" ' + orig + ' Hz converted ' + c1.how + ': check the factor on the Plant level page'; }
      if (id === 'mach.windP') { var un = (out.notes || []).filter(function (t) { return t.indexOf('Suction "' + String(x.label).trim() + '"') === 0; })[0];
        if (un) { why += ' · ' + un.replace(/^Suction "[^"]*" /, ''); var um0 = /^Suction "[^"]*" ([\d.]+) (\w+)/.exec(un); if (um0) { orig = +um0[1]; ou = um0[2]; } if (/assumed/.test(un)) { conf = 70; why += ' (unit not stated: check it)'; } } }
      var mi = /^blend\.(use|pct|kgt)\.(\d+)$/.exec(id);
      if (mi && ORE_I[mi[2]] && SD.oreGrade(x.label) < 0 && !pm[PR.norm(x.label)]) { conf = 78; why = 'grade not stated in "' + x.label + '": matched to ' + ROWL[mi[2]] + ' by its Fe content'; }
      if (id === 'mach.cacl2') v = v === true || /^(y|yes|1|on|true)/i.test(String(v)) ? 'Yes' : 'No';
      if (id === 'mach.basis') v = /mach/i.test(String(v)) ? 'Machine' : 'Charge';
      C.push({ cell: id, v: v, conf: conf, order: order, why: why, src: { name: name, loc: String(x.src || '').replace(name + ' / ', ''), label: x.label, orig: orig, ou: ou, how: how, day: x.day } });
      if (mi && x.label && PR.norm(x.label) !== PR.norm(ROWL[mi[2]]) && !/^(grade [abcd]|[abcd])$/i.test(String(x.label).trim())) C.push({ cell: 'blend.name.' + mi[2], v: String(x.label).trim(), conf: 90, order: order, why: 'plant name of the material', src: { name: name, label: x.label } });
    });
    var CH = (B.chemAvg === 'avg2' && out.chem2 && out.chemN2) ? out.chem2 : out.chem || {};
    Object.keys(CH).forEach(function (mi) {
      if (+mi === SD.OWN_RF || mi === 'rf') return;
      var c = CH[mi], nm = out.matNames && out.matNames[mi], grd = ORE_I[mi] && nm && SD.oreGrade(nm) < 0;
      Object.keys(c).forEach(function (k) {
        var id = 'chem.' + mi + '.' + k; if (!META[id] || c[k] == null || !isFinite(c[k])) return;
        C.push({ cell: id, v: +c[k], conf: grd ? 78 : 93, order: order, why: grd ? 'analysis of "' + nm + '": grade not stated, matched to ' + ROWL[mi] + ' by Fe' : 'analysis of ' + (nm ? '"' + nm + '"' : ROWL[mi]) + (B.chemAvg === 'avg2' && out.chemN2 ? ' (average of the last two)' : ''),
          src: { name: name, loc: String((out.chemFile && out.chemFile[mi]) || '').replace(name, '').replace(/^ \/ /, ''), label: nm || ROWL[mi], orig: +c[k], how: 'label' } });
      });
      if (SD.types[mi] === 'Fuel' && c.burn == null && isFinite(c.fc) && isFinite(c.vm)) C.push({ cell: 'chem.' + mi + '.burn', v: +c.fc + +c.vm, conf: 92, order: order, why: 'burn-off = Fixed C ' + c.fc + ' + VM ' + c.vm, src: { name: name, label: nm || ROWL[mi], how: 'label' } });
      if (nm && META['blend.name.' + mi]) C.push({ cell: 'blend.name.' + mi, v: String(nm), conf: 90, order: order, why: 'plant name of the material', src: { name: name, label: nm } });
    });
    // labels read but not recognised: on-device smart match (and AI later, when a key is set)
    if (!MC) MC = matchCands();
    var taken = {}; C.forEach(function (c) { taken[c.cell] = 1; });
    (out.unmatched || []).slice(0, 150).forEach(function (u) {
      var g = window.SinterMatch ? SinterMatch.suggest(u.label, u.value, MC) : [];
      g = g.map(function (x) { return { id: cellOfKey(x.key), conf: Math.round(x.conf * 100), label: x.label }; }).filter(function (x) { return x.id && !taken[x.id] && !(hasBlend && /^blend\./.test(x.id)); });
      var um = { label: u.label, value: u.value, src: String(u.src || name).replace(name + ' / ', ''), name: name, guess: g };
      if (g[0] && g[0].conf >= 50) {
        C.push({ cell: g[0].id, v: g[0].id === 'mach.speed' && u.value > 8 ? convertUnit('mach.speed', u.value, 'Hz').v : u.value, conf: g[0].conf, order: order, guess: true,
          why: 'smart match of "' + u.label + '" (' + g[0].conf + ' %)', alts: g.slice(1, 3).map(function (x) { return { id: x.id, conf: x.conf }; }),
          src: { name: name, loc: u.src, label: u.label, orig: u.value, how: 'smart' } });
        um.used = g[0].id;
      }
      B.unmatched.push(um);
    });
    return C;
  }

  // ---------- merge, keep the user's values, derive and validate ----------
  function differs(a, b) {
    if (isNum(a) && isNum(b)) return Math.abs(a - b) > 0.005 * Math.max(Math.abs(a), Math.abs(b), 1e-9);
    return PR.norm(String(a)) !== PR.norm(String(b));
  }
  function merge(all) {
    var by = {}, cells = {};
    all.forEach(function (c) { if (c.v == null || c.v === '' || (META[c.cell] && !META[c.cell].type && c.cell !== 'blend.mode' && !isNum(c.v))) return; (by[c.cell] = by[c.cell] || []).push(c); });
    Object.keys(by).forEach(function (id) {
      var L = by[id], direct = L.filter(function (c) { return !c.guess; }); if (direct.length) L = direct;
      L.sort(function (a, b) { return (b.conf - a.conf) || (b.order - a.order); });
      var best = L[0], seen = [best];
      L.slice(1).forEach(function (c) { if (c.src.name !== best.src.name && seen.every(function (s) { return differs(s.v, c.v); })) seen.push(c); });
      var cell = { v: best.v, conf: best.conf, why: best.why, src: best.src, st: best.conf >= 85 ? 'file' : 'review', alts: best.alts || null };
      if (seen.length > 1) { cell.st = 'review'; cell.conflict = seen.map(function (c) { return { v: c.v, src: c.src, why: c.why, conf: c.conf }; }); cell.why = seen.length + ' sources give different values: choose one'; }
      cells[id] = cell;
    });
    return cells;
  }
  function q(id) { var c = B.cells[id]; return c && isNum(c.v) ? c.v : null; }
  function finalize() {
    var C = B.cells, err = [];
    // blend: which column is the entry
    var has = { use: 0, pct: 0, kgt: 0 };
    Object.keys(C).forEach(function (id) { var m = /^blend\.(use|pct|kgt)\.\d+$/.exec(id); if (m && isNum(C[id].v) && C[id].st !== 'calc') has[m[1]]++; });
    var mode = B.modeUser || (C['blend.mode'] && C['blend.mode'].v), ks = Object.keys(has).filter(function (k) { return has[k]; });
    B.modeAsk = false;
    if (!mode) { if (ks.length === 1) mode = ks[0]; else if (ks.length > 1) { mode = ks.sort(function (a, b) { return has[b] - has[a]; })[0]; B.modeAsk = true; } else mode = 'use'; }
    B.mode = mode;
    // other two columns are calculated from the entry column
    var rows = M.BLEND_ROWS.map(function (r) { return r.i; }), qty = {};
    rows.forEach(function (i) { var c = C['blend.' + mode + '.' + i]; qty[i] = c && isNum(c.v) && c.st !== 'calc' ? c.v : null; });
    var sum = rows.reduce(function (a, i) { return a + (qty[i] || 0); }, 0);
    var prodC = C['blend.sinterProd'], prod = prodC && isNum(prodC.v) ? prodC.v : q('lab.prod');
    var tot = q('blend.totCharge');
    var useOf = function (i) { var v = qty[i]; if (v == null) return null; return mode === 'use' ? v : mode === 'pct' ? (tot && sum ? v / sum * tot : null) : (prod ? v * prod / 1000 : null); };
    var useSum = rows.reduce(function (a, i) { return a + (useOf(i) || 0); }, 0);
    rows.forEach(function (i) {
      ['use', 'pct', 'kgt'].forEach(function (k) {
        if (k === mode) return;
        var id = 'blend.' + k + '.' + i, u = useOf(i), v = null;
        if (u != null) v = k === 'use' ? u : k === 'pct' ? (useSum ? u / useSum * 100 : null) : (prod ? u * 1000 / prod : null);
        if (C[id] && C[id].st !== 'calc' && (C[id].st === 'typed' || C[id].src)) C[id].shadow = true; // the file's own figure in a column that is not the entry: kept for the log only
        C[id] = { v: v == null ? null : +v.toFixed(3), st: 'calc', why: v == null ? 'not calculable yet' : 'calculated from ' + MODE_L[mode] };
      });
      var c = C['blend.' + mode + '.' + i];
      if (!c || !isNum(c.v)) C['blend.' + mode + '.' + i] = { v: null, st: 'na', why: 'not in your data: material not used (type a value to use it)' };
      else if (c.st === 'na') c.st = 'typed';
    });
    // extra blend rows
    ['totCharge', 'sinterProd'].forEach(function (k) {
      var id = 'blend.' + k, c = C[id], need = META[id].need === mode;
      if (need && (!c || !isNum(c.v))) {
        if (k === 'sinterProd' && isNum(q('lab.prod'))) C[id] = { v: q('lab.prod'), st: 'review', conf: 70, why: 'taken from Actual production in Lab_Results: check it is the base for the kg/t', src: C['lab.prod'].src };
        else C[id] = { v: null, st: 'missing', req: true, why: 'needed because the blend is entered as ' + MODE_L[mode] + ' (no default)' };
      } else if (!need && (!c || !isNum(c.v))) C[id] = { v: null, st: 'na', why: 'only needed with the ' + (k === 'totCharge' ? '%' : 'kg/t') + ' column' };
      else if (c) c.req = need;
    });
    if (mode === 'pct' && sum > 0 && Math.abs(sum - 100) > 0.5) err.push({ w: 1, t: 'The blend % add up to ' + fmt(sum, 1) + ' %. They are scaled to 100 % of the total wet charge.' });
    var used = {}; rows.forEach(function (i) { used[i] = (qty[i] || 0) > 0; });
    var feed = rows.filter(function (i) { return used[i] && (SD.types[i] === 'Ore'); }).length, fuel = [12, 13, 14].filter(function (i) { return used[i]; }).length;
    if (!feed) err.push({ b: 1, t: 'The blend has no iron-bearing material. Type at least one iron ore (or other iron-bearing) quantity in the Blend tab.' });
    if (!fuel) err.push({ b: 1, t: 'The blend has no fuel. Type the coke fines or anthracite quantity in the Blend tab.' });
    // machine: every parameter is needed (a default is allowed)
    M.MACHINE.forEach(function (p) {
      var id = 'mach.' + p.k, c = C[id];
      if (!c || c.v == null || c.v === '' || c.st === 'missing') C[id] = autoDef(id) || { v: null, st: 'missing', req: true, why: 'not found in your files' };
      else c.req = true;
    });
    // lab results: optional
    M.LAB.forEach(function (p) { var id = 'lab.' + p.k; if (!C[id] || !isNum(C[id].v)) C[id] = { v: null, st: 'na', why: 'optional: only used for predicted vs actual' }; });
    // raw-material chemistry: needed for every material in the blend
    M.CHEM_ROWS.forEach(function (r) {
      var i = r.i;
      M.CK.forEach(function (k) {
        var id = 'chem.' + i + '.' + k, c = C[id], ap = M.chemApplies(k, i), have = c && isNum(c.v) && c.st !== 'calc';
        if (!ap && k === 'burn') { // ores and fluxes: burn-off = LOI
          if (have) { c.req = false; return; }
          var l = C['chem.' + i + '.loi']; C[id] = { v: l && isNum(l.v) ? l.v : null, st: 'calc', why: 'burn-off = LOI for ores and fluxes' }; return;
        }
        if (c && c.st === 'default' && c.auto && (!ap || !used[i])) { C[id] = c = null; have = false; }
        if (!ap) { if (!have) C[id] = { v: null, st: 'na', why: 'not applicable to this material' }; else c.req = false; return; }
        if (!used[i]) { if (!have) C[id] = { v: null, st: 'na', why: 'material not in the blend: no analysis needed' }; else c.req = false; return; }
        if (!have) C[id] = autoDef(id, 'master default analysis of ' + r.l + ' (not in your data): type or upload your value') || { v: null, st: 'missing', req: true, why: 'no analysis found for this material' };
        else c.req = true;
      });
    });
    // ranges, and analyses that add up to more than 100 %
    Object.keys(C).forEach(function (id) {
      var c = C[id], m = META[id]; if (!m || !isNum(c.v) || c.st === 'calc') { if (c) c.warn = null; return; }
      c.warn = (m.lo != null && (c.v < m.lo || c.v > m.hi)) ? 'outside the usual range ' + m.lo + ' – ' + m.hi + ' ' + (m.unit || '') : null;
      if (c.warn && c.st === 'file') c.st = 'review';
    });
    M.CHEM_ROWS.forEach(function (r) {
      var i = r.i, g = function (k) { return q('chem.' + i + '.' + k) || 0; }, fuel = SD.types[i] === 'Fuel';
      var fe2o3 = Math.max(0, (g('fe') - g('feo') * 0.7773) * 1.4297);
      var tot = fe2o3 + g('feo') + g('sio2') + g('al2o3') + g('cao') + g('mgo') + g('mno') + g('tio2') + g('s') + g('p') + (fuel ? g('burn') : g('loi'));
      if (tot > (fuel ? 106 : 102.5)) M.CK.forEach(function (k) { var c = C['chem.' + i + '.' + k]; if (c && isNum(c.v) && c.st !== 'calc' && M.chemApplies(k, i) && k !== 'moist' && !/^(mps|m1|p3)$/.test(k)) { c.warn = (c.warn ? c.warn + '; ' : '') + 'analysis adds up to ' + fmt(tot, 1) + ' % (over 100 %)'; if (c.st === 'file') c.st = 'review'; } });
    });
    B.err = err;
    // pending defaults that a file now provides are dropped; approved ones are kept
    return B;
  }
  function counts() {
    var n = { file: 0, review: 0, missing: 0, typed: 0, def: 0, calc: 0, xtra: 0 };
    Object.keys(B.cells).forEach(function (id) { var c = B.cells[id]; if (!META[id]) return; if (isExtraCell(id) && userGiven(c)) n.xtra++; if (c.st === 'file') n.file++; else if (c.st === 'review') n.review++; else if (c.st === 'missing') n.missing++; else if (c.st === 'typed') n.typed++; else if (c.st === 'default') n.def++; });
    return n;
  }

  // ---------- Generate Master Sheet ----------
  function generate() {
    if (busy) return;
    var srcs = B.sources.filter(function (s) { return s.status !== 'removed'; });
    var bare = !srcs.length && !String(B.notes || '').trim(); // start from the master defaults: type your values in Step 2
    busy = true; B.unmatched = []; MC = null;
    var keepAlias = cx().state.aliasMap || {}, merged = {}; Object.keys(keepAlias).forEach(function (k) { merged[k] = keepAlias[k]; });
    var pm = plantMap(); Object.keys(pm).forEach(function (k) { merged[k] = pm[k]; }); PR.setUserAliases(merged);
    var all = [];
    var step = function (ix) {
      if (ix >= srcs.length) return Promise.resolve();
      var s = srcs[ix]; s.status = 'reading'; s.err = ''; drawList();
      return readSource(s).then(function (out) {
        var C = candsFrom(out, s, ix + 1); all = all.concat(C);
        s.status = 'done'; s.n = C.filter(function (c) { return !/^blend\.name\./.test(c.cell); }).length; s.notes = (out.notes || []).slice(0, 6);
        if (!s.n) { s.status = 'failed'; s.err = 'Nothing recognised in this source. Type its values in Step 2, or map its labels under "Read but not placed".'; }
      }, function (e) { s.status = 'failed'; s.err = e && e.message ? e.message : String(e); }).then(function () { drawList(); return step(ix + 1); });
    };
    var notes = String(B.notes || '').trim();
    $('#mbGen') && ($('#mbGen').disabled = true, $('#mbGen').innerHTML = ic('loader') + ' Reading ' + (srcs.length + (notes ? 1 : 0)) + ' source' + (srcs.length + (notes ? 1 : 0) > 1 ? 's' : '') + ' …');
    step(0).then(function () {
      if (!notes) return;
      var lines = notes.split(/\n|;|,(?=\s*[A-Za-z])/).map(function (x) { return x.trim(); }).filter(Boolean).join('\n');
      return PR.parseBytes(textBytes(lines), 'notes.txt', 'text/plain', {}).then(function (out) { all = all.concat(candsFrom(out, { kind: 'note', name: 'Notes' }, srcs.length + 1)); });
    }).then(function () {
      var old = B.cells, cells = merge(all);
      // a downloaded Master Sheet uploaded back: cells still holding the master default it was given stay master defaults (red)
      var left = defaultsLeftIn(srcs);
      Object.keys(cells).forEach(function (id) { var c = cells[id], k = lbl(id); if (k in left && isNum(c.v) && isNum(left[k]) && !differs(c.v, left[k])) { var d = autoDef(id, 'master default still in your uploaded Master Sheet: replace it with your value'); if (d) cells[id] = d; } });
      Object.keys(old).forEach(function (id) { var o = old[id]; if (o.user || (o.st === 'default' && o.approved && !o.auto)) cells[id] = o; });
      if (old['blend.mode'] && old['blend.mode'].user) cells['blend.mode'] = old['blend.mode'];
      B.cells = cells; finalize();
      var n = counts(); B.gen = { at: new Date().toLocaleString('en-IN'), n: n, srcs: srcs.length }; B.formed = null; B.step = 2; B.tab = 'Blend';
      PR.setUserAliases(keepAlias); busy = false; save(); render();
      toast(bare ? 'Master Sheet started from the master defaults (red): type your values' : n.file + ' values filled, ' + n.review + ' need review, ' + n.def + ' master defaults (red)');
    }).catch(function (e) { busy = false; PR.setUserAliases(keepAlias); toast('Generate failed: ' + (e.message || e)); render(); });
  }

  function defaultsLeftIn(srcs) {
    var out = {};
    srcs.forEach(function (s) {
      var u8 = BYTES[s.id]; if (!u8 || kindOf(s.name, s.mime) !== 'Excel') return;
      try {
        var wb = XLSX.read(u8, { type: 'array' }); if (wb.SheetNames.indexOf('Mapping_Log') < 0) return;
        XLSX.utils.sheet_to_json(wb.Sheets.Mapping_Log, { header: 1, raw: true }).slice(1).forEach(function (r) { if (r && String(r[10]).toLowerCase() === 'default' && r[1]) out[r[1]] = toNum(r[7]); });
      } catch (e) { }
    });
    return out;
  }
  // ---------- page shell ----------
  var root = null;
  function page(m) { root = m; if (B.step === 5) B.step = B.gen ? 2 : 1; render(); }
  function canStep(n) { return n === 1 || (n === 2 && !!B.gen) || ((n === 3 || n === 4) && !!B.formed) || (n === 5 && !!cx().state.result && !!B.ran); }
  function render() {
    if (!root) return;
    if (B.step === 5) { cx().go('results'); return; }
    var h = '<div class="mb">' + stepper() + '<section class="mb-body">' + [null, step1, step2, step3, step4][B.step]() + '</section></div>';
    root.innerHTML = h;
    bind();
  }
  function stepper() {
    return '<nav class="mb-steps" aria-label="Steps">' + STEPS.map(function (l, i) {
      var n = i + 1, done = n < B.step && canStep(n);
      return '<button data-step="' + n + '" class="' + (B.step === n ? 'on' : '') + (done ? ' done' : '') + '"' + (canStep(n) ? '' : ' disabled') + '><b>' + (done ? '✓' : n) + '</b><span>' + l + '</span></button>';
    }).join('') + '</nav>';
  }

  // ---------- Step 1: Inputs ----------
  function step1() {
    var src = B.sources, ready = src.length || String(B.notes || '').trim();
    var plants = Object.keys(maps());
    var h = '<div class="card mb-up"><h2>Inputs</h2><p class="sub">Add everything you have for the plant: Excel, CSV, PDF, Word or text files, and links. Add them one by one or many at once, in any order, now or later. Then press <b>Generate Master Sheet</b>.</p>' +
      '<div class="mb-drop" id="mbDrop" tabindex="0" role="button">' + ic('upload') + '<b>Drop any files here or click to browse</b><small>.xlsx .xls .xlsm .csv .pdf .jpg .png .docx .txt · your filled master template works too</small></div>' +
      '<div class="mb-link"><input id="mbLink" type="url" inputmode="url" placeholder="Paste a link (Google Sheets / Drive, OneDrive, web page, PDF URL)"><button class="btn" id="mbLinkAdd">' + ic('link') + ' Add</button></div>' +
      '<div id="mbList">' + listHtml() + '</div>' +
      '<div class="mb-two"><label class="mb-f"><span>Plant name <small>optional · saves and reuses your label mapping</small></span><input id="mbPlant" list="mbPlants" value="' + esc(B.plant) + '" placeholder="e.g. SP-02 Raipur"><datalist id="mbPlants">' + plants.map(function (p) { return '<option value="' + esc(maps()[p].name || p) + '">'; }).join('') + '</datalist></label>' +
      '<label class="mb-f"><span>Notes <small>optional · extra information in plain words</small></span><textarea id="mbNotes" rows="3" placeholder="e.g. bed height 600 mm, speed 2.1 m/min, suction 1250 mmWC">' + esc(B.notes) + '</textarea></label></div>' +
      '<details class="mb-opt"><summary>Reading options</summary><p class="sub">When a file has more than one analysis per material, use:</p><div class="seg2" id="mbAvg"><button data-ca="last" class="' + (B.chemAvg !== 'avg2' ? 'on' : '') + '">Current analysis only</button><button data-ca="avg2" class="' + (B.chemAvg === 'avg2' ? 'on' : '') + '">Average of last two</button></div></details>' +
      '<button class="btn primary block mb-gen" id="mbGen">' + ic('sparkles') + (ready ? ' Generate Master Sheet' : ' Start with master defaults') + '</button>' +
      '<p class="muted small mb-defhint"><span class="tag-red">Red</span> = master default value used because you did not give it · <span class="tag-green">Green</span> = additional parameter you gave, used for a better prediction. You can start with no file and type your values over the red ones.</p>' +
      '<div class="mb-tools"><button class="lnk" id="mbLib">' + ic('book-open') + ' Mapping Library</button><button class="lnk" id="mbDefs">' + ic('layers') + ' Master default table</button><button class="lnk" id="mbTpl">' + ic('download') + ' Blank master template</button><button class="lnk" data-go="params">' + ic('book-open') + ' What each input means</button><button class="lnk danger" id="mbReset">' + ic('rotate-ccw') + ' Reset</button></div>' +
      '</div>';
    return h;
  }
  function stLabel(s) {
    if (s.status === 'reading') return '<span class="mb-s reading">Reading</span>';
    if (s.status === 'failed') return '<span class="mb-s failed">Failed</span>';
    if (s.status === 'done') return '<span class="mb-s done">Read · ' + s.n + ' values</span>';
    if (s.lost) return '<span class="mb-s failed">Add again</span>';
    return '<span class="mb-s ready">Ready</span>';
  }
  function listHtml() {
    if (!B.sources.length) return '<p class="muted small mb-empty">Nothing added yet.</p>';
    return '<div class="mb-list">' + B.sources.map(function (s) {
      var k = s.kind === 'link' ? 'Link' : kindOf(s.name, s.mime), info = [k, s.kind === 'link' ? '' : sizeTxt(s.size), s.pages ? s.pages + (k === 'PDF' ? ' pages' : ' sheets') : ''].filter(Boolean).join(' · ');
      var day = s.dayInfo && s.dayInfo.days && s.dayInfo.days.length > 1 ? '<label class="mb-day">Day <select data-day="' + s.id + '">' + s.dayInfo.days.slice().reverse().map(function (d, i) { return '<option value="' + esc(d.key) + '"' + (s.day === d.key ? ' selected' : '') + '>' + esc(d.label) + (i === 0 ? ' (latest)' : '') + '</option>'; }).join('') +
        (s.dayInfo.days.length >= 3 ? '<option value="avg3"' + (s.day === 'avg3' ? ' selected' : '') + '>Average of last 3 days</option>' : '') + (s.dayInfo.days.length >= 7 ? '<option value="avg7"' + (s.day === 'avg7' ? ' selected' : '') + '>Average of last 7 days</option>' : '') + '<option value="avgall"' + (s.day === 'avgall' ? ' selected' : '') + '>Average of all days</option></select></label>' : '';
      return '<div class="mb-item ' + (s.status || '') + '"><span class="mb-ic">' + ic(s.kind === 'link' ? 'link' : k === 'PDF' || k === 'Word' || k === 'Text' ? 'file-text' : k === 'Image' ? 'image' : 'file-spreadsheet') + '</span>' +
        '<div class="mb-nm"><b title="' + esc(s.name) + '">' + esc(s.name) + '</b><small>' + esc(info) + '</small>' + day + (s.err ? '<div class="mb-err">' + esc(s.err) + (s.status === 'failed' && !s.lost ? ' <button class="lnk" data-retry="' + s.id + '">Retry</button>' : '') + '</div>' : '') + '</div>' +
        stLabel(s) + '<button class="icon-btn mb-x" data-rm="' + s.id + '" aria-label="Remove" title="Remove">' + ic('x') + '</button></div>';
    }).join('') + '</div>';
  }
  function drawList() { var l = $('#mbList'); if (l) { l.innerHTML = listHtml(); bindList(); } }
  function addFiles(files) {
    files.forEach(function (f) {
      var s = { id: 's' + (++B.seq), kind: 'file', name: String(f.name || 'file').replace(/^\d+_/, ''), mime: f.type || '', size: f.size || 0, status: 'reading' };
      B.sources.push(s);
      readBytes(f).then(function (u8) {
        if (!u8.length) throw new Error('the file is empty');
        BYTES[s.id] = u8; s.status = 'ready'; s.lost = false; s.size = u8.length;
        var k = kindOf(s.name, s.mime);
        try { if (k === 'Excel') s.pages = XLSX.read(u8, { type: 'array', bookSheets: true }).SheetNames.length; } catch (e) { }
        if (k === 'PDF' && window.pdfjsLib) pdfjsLib.getDocument({ data: u8.slice() }).promise.then(function (d) { s.pages = d.numPages; save(); drawList(); }, function () { });
        save(); drawList(); refreshGen();
      }, function (e) { s.status = 'failed'; s.err = e.message || String(e); save(); drawList(); });
    });
    save(); drawList(); refreshGen();
  }
  function readBytes(file) {
    if (file.arrayBuffer) return file.arrayBuffer().then(function (b) { return new Uint8Array(b); });
    return new Promise(function (res, rej) { var rd = new FileReader(); rd.onload = function () { res(new Uint8Array(rd.result)); }; rd.onerror = function () { rej(new Error('the device did not let the app read it. Save it to Downloads first, or paste a link.')); }; rd.readAsArrayBuffer(file); });
  }
  function pick() {
    var fi = $('#fileInput'); fi.value = ''; fi.setAttribute('accept', ACCEPT); fi.multiple = true;
    fi.onchange = function () { var files = Array.prototype.slice.call(fi.files || []); if (files.length) addFiles(files); };
    fi.click();
  }
  function addLink() {
    var el = $('#mbLink'), u = el.value.trim();
    if (!/^https?:\/\//i.test(u)) { toast('Paste a full link starting with http:// or https://'); return; }
    if (B.sources.some(function (s) { return s.kind === 'link' && s.name === u; })) { toast('This link is already in the list'); return; }
    B.sources.push({ id: 's' + (++B.seq), kind: 'link', name: u, status: 'ready' }); el.value = ''; save(); drawList(); refreshGen();
  }
  function refreshGen() { var g = $('#mbGen'); if (g && !busy) { g.disabled = false; g.innerHTML = ic('sparkles') + ((B.sources.length || String(B.notes || '').trim()) ? ' Generate Master Sheet' : ' Start with master defaults'); } }
  function bindList() {
    $$('[data-rm]', root).forEach(function (b) { b.onclick = function () { var id = b.dataset.rm; B.sources = B.sources.filter(function (s) { return s.id !== id; }); delete BYTES[id]; save(); drawList(); refreshGen(); }; });
    $$('[data-retry]', root).forEach(function (b) { b.onclick = function () { var s = B.sources.find(function (x) { return x.id === b.dataset.retry; }); if (s) { s.status = 'ready'; s.err = ''; save(); generate(); } }; });
    $$('[data-day]', root).forEach(function (sel) { sel.onchange = function () { var s = B.sources.find(function (x) { return x.id === sel.dataset.day; }); if (s) { s.day = sel.value; s.status = 'ready'; save(); toast('Press Generate Master Sheet to read this day'); } }; });
  }

  // ---------- Step 2: Review & fill missing ----------
  var TABS = ['Blend', 'Machine', 'Lab_Results', 'RM_Chemistry'];
  function srcShort(c) {
    if (!c) return '';
    if (c.st === 'typed') return 'Typed by you';
    if (c.st === 'default') return c.auto ? 'Master default' : c.approved ? 'Default (user approved)' : 'Default (waiting for OK)';
    if (c.st === 'calc') return c.why || 'Calculated';
    if (c.src) return c.src.name || '';
    return '';
  }
  function tip(id) {
    var c = B.cells[id] || {}, s = c.src || {}, t = [lbl(id)];
    if (s.name) t.push('Source: ' + s.name + (s.loc && s.loc !== s.name ? ' › ' + s.loc : '') + (s.label ? ' › "' + s.label + '"' : ''));
    if (s.orig != null && s.ou) t.push('Original: ' + s.orig + ' ' + s.ou);
    if (c.conf != null && c.st !== 'typed') t.push('Confidence: ' + c.conf + ' %');
    if (c.why) t.push(c.why); if (c.warn) t.push('⚠ ' + c.warn);
    return t.join('\n');
  }
  function cellTd(id, extra) {
    var c = B.cells[id] || { st: 'na' }, m = META[id], v = c.v, cls = 'mbc st-' + c.st + (c.warn ? ' warn' : '') + (c.conflict ? ' conflict' : '') + (isExtraCell(id) && userGiven(c) ? ' xtra' : '') + (isExtraCell(id) ? ' xcol' : '');
    var inp;
    if (m.type === 'yn' || m.type === 'sel') {
      var opts = m.type === 'yn' ? ['Yes', 'No'] : m.opts;
      inp = '<select data-c="' + id + '"><option value=""' + (v == null || v === '' ? ' selected' : '') + '>–</option>' + opts.map(function (o) { return '<option' + (v === o ? ' selected' : '') + '>' + o + '</option>'; }).join('') + '</select>';
    } else if (m.type === 'text') inp = '<input data-c="' + id + '" value="' + esc(v == null ? '' : v) + '" placeholder="–">';
    else inp = '<input data-c="' + id + '" inputmode="decimal" value="' + (isNum(v) ? fmt(v) : '') + '"' + (c.st === 'calc' ? ' readonly tabindex="-1"' : '') + ' placeholder="' + (c.st === 'missing' ? 'missing' : '–') + '">';
    return '<td class="' + cls + '" data-id="' + id + '" title="' + esc(tip(id)) + '"' + (extra || '') + '>' + inp + '</td>';
  }
  function step2() {
    var n = counts(), C = B.cells;
    var miss = ORDER.filter(function (id) { return C[id] && C[id].st === 'missing'; }), rev = ORDER.filter(function (id) { return C[id] && C[id].st === 'review'; });
    var groups = {}; miss.forEach(function (id) { (groups[META[id].sheet] = groups[META[id].sheet] || []).push(id); });
    var rgroups = {}; rev.forEach(function (id) { (rgroups[META[id].sheet] = rgroups[META[id].sheet] || []).push(id); });
    var defable = miss.filter(function (id) { return META[id].def && defVal(id) != null; });
    var dl = ORDER.filter(function (id) { return C[id] && C[id].st === 'default'; }), dgroups = {}; dl.forEach(function (id) { (dgroups[META[id].sheet] = dgroups[META[id].sheet] || []).push(id); });
    var xg = ORDER.filter(function (id) { return isExtraCell(id) && C[id] && C[id].st !== 'na'; }), xgiven = xg.filter(function (id) { return userGiven(C[id]); });
    var h = '<div class="card mb-sum">' +
      '<p class="mb-gen-note">' + esc(B.gen ? 'Generated ' + B.gen.at + ' from ' + B.gen.srcs + ' source' + (B.gen.srcs === 1 ? '' : 's') + (String(B.notes || '').trim() ? ' and your notes' : '') + ': ' + B.gen.n.file + ' values filled, ' + B.gen.n.review + ' need review, ' + B.gen.n.missing + ' missing.' : '') + '</p>' +
      '<div class="mb-counters"><div class="ok"><b>' + n.file + '</b><span>Mapped</span></div><div class="warn"><b>' + n.review + '</b><span>Needs review</span></div><div class="dflt"><b>' + n.def + '</b><span>Master default</span></div><div class="xtra"><b>' + n.xtra + '</b><span>Extra given</span></div>' +
      '<div class="sm"><span><i class="dot typed"></i>' + n.typed + ' typed</span>' + (n.missing ? '<span><i class="dot missing"></i>' + n.missing + ' missing</span>' : '') + '</div></div>' +
      (dl.length ? '<div class="note dflt-n"><b>' + dl.length + ' value' + (dl.length > 1 ? 's are' : ' is') + ' taken from the master default table (red).</b> The prediction runs with them now; type or upload your own value and the cell turns from red to your value.</div>' +
        '<details class="mb-miss"><summary><b>Red: master default values</b> · ' + dl.length + '</summary>' + TABS.filter(function (t) { return dgroups[t]; }).map(function (t) { return '<div class="mb-chips"><b class="small">' + t + '</b> ' + dgroups[t].map(function (id) { return '<button class="chip dflt" data-jump="' + id + '">' + esc(lbl(id)) + '</button>'; }).join('') + '</div>'; }).join('') + '</details>' : '') +
      (xg.length ? '<div class="note xtra-n"><b>Additional parameters for a better prediction: ' + xgiven.length + ' of ' + xg.length + ' given (green).</b> Wind main temperature, ID fan speed, BF gas to ignition, and the FeO, +3 mm and mean size of each raw material now act on FeO, TI and bed permeability. Left at the master default they do not move the result.' +
        (xg.length > xgiven.length ? '<details><summary class="small">Show the ' + (xg.length - xgiven.length) + ' not yet given</summary><div class="mb-chips">' + xg.filter(function (id) { return !userGiven(C[id]); }).slice(0, 30).map(function (id) { return '<button class="chip xtra-o" data-jump="' + id + '">' + esc(lbl(id)) + '</button>'; }).join('') + '</div></details>' : '') + '</div>' : '') +
      (B.err || []).map(function (e) { return '<div class="note ' + (e.b ? 'bad' : 'warn') + '">' + esc(e.t) + '</div>'; }).join('') +
      (B.modeAsk ? '<div class="note warn"><b>Your files give the blend in more than one way.</b> Check the entry column in the Blend tab (now ' + MODE_L[B.mode] + ').</div>' : '') +
      (miss.length ? '<div class="note bad"><b>' + miss.length + ' value' + (miss.length > 1 ? 's are' : ' is') + ' missing and ha' + (miss.length > 1 ? 've' : 's') + ' no master default.</b> Please fill ' + (miss.length > 1 ? 'them' : 'it') + ' or upload more files/links.</div>' +
        '<div class="mb-miss">' + TABS.filter(function (t) { return groups[t]; }).map(function (t) { return '<details' + (miss.length <= 24 ? ' open' : '') + '><summary><b>' + t + '</b> · ' + groups[t].length + ' missing</summary><div class="mb-chips">' + groups[t].map(function (id) { return '<button class="chip bad" data-jump="' + id + '">' + esc(lbl(id)) + '</button>'; }).join('') + '</div></details>'; }).join('') + '</div>'
        : '') +
      (rev.length ? '<details class="mb-miss"><summary><b>' + rev.length + ' value' + (rev.length > 1 ? 's' : '') + ' to review</b> (amber: low confidence, sources differ, or outside the usual range)</summary><div class="mb-chips">' + rev.map(function (id) { return '<button class="chip warn" data-jump="' + id + '">' + esc(lbl(id)) + '</button>'; }).join('') + '</div></details>' : '') +
      '<div class="row wrap mb-acts">' + (defable.length ? '<button class="btn" id="mbDefAll">' + ic('layers') + ' Use default values for all missing data (' + defable.length + ')</button>' : '') +
      '<button class="btn ghost" id="mbMore">' + ic('upload') + ' Add more files / links</button><button class="btn ghost" id="mbRegen">' + ic('rotate-ccw') + ' Generate again</button></div>' +
      '</div>';
    h += '<div class="card mb-rev"><div class="mb-tabs">' + TABS.map(function (t) {
      var k = (groups[t] || []).length, r = (rgroups[t] || []).length;
      return '<button data-tab="' + t + '" class="' + (B.tab === t ? 'on' : '') + '">' + t + (k ? ' <i class="cnt bad">' + k + '</i>' : '') + (r ? ' <i class="cnt warn">' + r + '</i>' : '') + '</button>';
    }).join('') + '</div>' +
      '<div class="mb-legend"><span><i class="dot default"></i><b class="red-t">Master default</b></span><span><i class="dot xtra"></i><b class="green-t">Additional parameter (yours)</b></span><span><i class="dot file"></i>From your data</span><span><i class="dot typed"></i>Typed by you</span><span><i class="dot review"></i>Review / out of range</span><span><i class="dot missing"></i>Missing</span><span><i class="dot na"></i>Not needed</span></div>' +
      '<div id="mbTab">' + tabHtml(B.tab) + '</div><div class="mb-insp" id="mbInsp"><span class="muted small">Tap or hover a cell to see where its value came from. You can type over any value.</span></div></div>';
    if (B.unmatched && B.unmatched.length) {
      var um = B.unmatched.filter(function (u) { return !u.used; });
      if (um.length) h += '<div class="card"><details><summary><b>Read but not placed: ' + um.length + ' labels</b> · tap if any of them is a Master Sheet value</summary><p class="muted small">Numbers found in your files that match no Master Sheet cell (for example design data, cooler speed, O₂). Choose the cell for any you want to use. Your choice is saved for this plant when you press OK in Step 3.</p>' +
        um.slice(0, 80).map(function (u, ix) { var i = B.unmatched.indexOf(u); return '<div class="um"><div><b>' + esc(u.label) + '</b><small class="muted"> = ' + esc(fmt(toNum(u.value) == null ? u.value : toNum(u.value))) + ' · ' + esc(u.src) + '</small>' + (u.guess && u.guess.length ? '<div class="ai-g">Possible: ' + u.guess.map(function (g) { return '<button type="button" class="ai-alt" data-ump="' + i + '" data-k="' + g.id + '">' + esc(lbl(g.id)) + ' ' + g.conf + ' %</button>'; }).join(' ') + '</div>' : '') + '</div><select class="sel" data-um="' + i + '">' + cellOptions() + '</select></div>'; }).join('') + '</details></div>';
    }
    h += '<div class="mb-foot"><button class="btn ghost" data-step="1">← Inputs</button><button class="btn" id="mbNormals">' + ic('target') + ' Plant normals &amp; targets</button><button class="btn primary" id="mbCont">Continue →</button></div>';
    return h;
  }
  var OPTS = null;
  function cellOptions() {
    if (OPTS) return OPTS;
    var g = {}; ORDER.forEach(function (id) { var m = META[id]; if (m.type === 'text' || /^chem\./.test(id)) return; (g[m.sheet] = g[m.sheet] || []).push(id); });
    return (OPTS = '<option value="">Ignore</option>' + Object.keys(g).map(function (s) { return '<optgroup label="' + s + '">' + g[s].map(function (id) { return '<option value="' + id + '">' + esc(lbl(id)) + '</option>'; }).join('') + '</optgroup>'; }).join(''));
  }
  function tabHtml(t) {
    var C = B.cells, h = '';
    if (t === 'Blend') {
      h += '<div class="mb-mode"><span>Blend entered as</span><div class="seg2" id="mbMode">' + ['use', 'pct', 'kgt'].map(function (k) { return '<button data-mode="' + k + '" class="' + (B.mode === k ? 'on' : '') + '">' + MODE_L[k] + '</button>'; }).join('') + '</div></div>' +
        '<div class="tbl-wrap"><table class="mbt"><tr><th>Raw material</th><th class="n">MT/day (wet)</th><th class="n">% of charge</th><th class="n">kg/t sinter</th><th>Plant name</th><th>Source</th></tr>' +
        M.BLEND_ROWS.map(function (r) { var c = C['blend.' + B.mode + '.' + r.i]; return '<tr' + (c && c.st === 'na' ? ' class="unused"' : '') + '><th>' + esc(r.l) + (r.i === SD.OWN_RF ? '<small>chemistry follows the sinter</small>' : '') + '</th>' + ['use', 'pct', 'kgt'].map(function (k) { return cellTd('blend.' + k + '.' + r.i); }).join('') + cellTd('blend.name.' + r.i) + '<td class="msrc">' + esc(srcShort(c)) + '</td></tr>'; }).join('') +
        M.BLEND_EXTRA.map(function (e) { var id = 'blend.' + e.k; return '<tr class="extra"><th>' + esc(e.l) + '<small>' + esc(e.u + ', ' + e.note) + '</small></th>' + cellTd(id) + '<td colspan="3"></td><td class="msrc">' + esc(srcShort(C[id])) + '</td></tr>'; }).join('') + '</table></div>';
      var tot = M.BLEND_ROWS.reduce(function (a, r) { return a + (q('blend.use.' + r.i) || 0); }, 0);
      h += '<p class="muted small">Total wet charge ' + (tot ? fmt(tot, 0) + ' MT/day' : '–') + '. Type in the ' + MODE_L[B.mode] + ' column; the other two are calculated. A blank row means the material is not used.</p>';
    } else if (t === 'Machine' || t === 'Lab_Results') {
      var L = t === 'Machine' ? M.MACHINE.map(function (p) { return 'mach.' + p.k; }) : M.LAB.map(function (p) { return 'lab.' + p.k; });
      h += (t === 'Lab_Results' ? '<p class="sub">Actual sinter analysis. Optional: it never blocks the run and never gets defaults. Used for predicted vs actual (Lab check).</p>' : '') +
        '<div class="tbl-wrap"><table class="mbt"><tr><th>Parameter</th><th class="n">Value</th><th>Unit</th><th>Source</th>' + (t === 'Machine' ? '<th class="n">Master default</th>' : '') + '</tr>' +
        L.map(function (id) { var c = C[id] || {}, d = defVal(id); return '<tr><th>' + esc(META[id].row) + (isExtraCell(id) ? '<small class="xtag">+ extra: ' + esc(M.EXTRA.mach[META[id].k]) + '</small>' : '') + '</th>' + cellTd(id) + '<td>' + esc(META[id].unit) + '</td><td class="msrc">' + esc(srcShort(c)) + '</td>' + (t === 'Machine' ? '<td class="n">' + (d != null ? '<span class="defv">' + esc(fmt(d)) + '</span>' : '') + '</td>' : '') + '</tr>'; }).join('') + '</table></div>';
    } else {
      h += '<p class="sub">Dry basis, moisture as received. Needed for every material in the blend. Coke and coal: Fixed C and burn-off (FC+VM). Ores and fluxes: LOI (burn-off = LOI). Plant return fines need no analysis.</p>' +
        '<div class="tbl-wrap"><table class="mbt chem"><tr><th>Material</th>' + M.CHEM.map(function (c) { return '<th class="n' + (M.isExtra('chem', c.k) ? ' xth' : '') + '"' + (M.isExtra('chem', c.k) ? ' title="Additional parameter: ' + esc(M.EXTRA.chem[c.k]) + '"' : '') + '>' + esc(c.l) + (M.isExtra('chem', c.k) ? ' <small>+extra</small>' : '') + '</th>'; }).join('') + '<th>Source</th></tr>' +
        M.CHEM_ROWS.map(function (r) {
          var ids = M.CK.map(function (k) { return 'chem.' + r.i + '.' + k; }), mi = ids.filter(function (id) { return C[id] && C[id].st === 'missing'; }).length;
          var used = (q('blend.' + B.mode + '.' + r.i) || 0) > 0, srcs = {}; ids.forEach(function (id) { var s = srcShort(C[id]); if (s && C[id].st !== 'calc' && C[id].st !== 'na') srcs[s] = 1; });
          return '<tr' + (used ? '' : ' class="unused"') + '><th>' + esc(r.l) + (C['blend.name.' + r.i] && C['blend.name.' + r.i].v ? '<small>' + esc(C['blend.name.' + r.i].v) + '</small>' : '') + (mi ? '<button class="lnk" data-rowdef="' + r.i + '">Use defaults for ' + mi + '</button>' : '') + (function () { var nd = ids.filter(function (id) { return C[id] && C[id].st === 'default'; }).length; return nd ? '<small class="red-t">' + nd + ' master default' + (nd > 1 ? 's' : '') + '</small>' : ''; })() + (used ? '' : '<small>not in the blend</small>') + '</th>' +
            ids.map(function (id) { return cellTd(id); }).join('') + '<td class="msrc">' + esc(Object.keys(srcs).join(', ')) + '</td></tr>';
        }).join('') + '<tr class="unused"><th>Plant return fines (own, circulating)<small>no analysis: follows the sinter</small></th><td colspan="18"></td></tr></table></div>';
    }
    return h;
  }
  function inspect(id) {
    var el = $('#mbInsp'); if (!el || !META[id]) return;
    var c = B.cells[id] || { st: 'na' }, s = c.src || {}, d = defVal(id), h = '<div class="mb-ih"><b>' + esc(lbl(id)) + '</b><span class="mb-s st-' + c.st + '">' + ({ file: 'From your data', review: 'Needs review', missing: 'Missing', typed: 'Typed by you', 'default': c.auto ? 'Master default (red)' : c.approved ? 'Default (approved)' : 'Default (waiting for OK)', calc: 'Calculated', na: 'Not needed' })[c.st] + '</span></div>';
    if (isNum(c.v) || (c.v && typeof c.v === 'string')) h += '<div>Value <b>' + esc(isNum(c.v) ? fmt(c.v, 4) : c.v) + '</b> ' + esc(META[id].unit || '') + (c.conf != null && c.st !== 'typed' && c.st !== 'default' ? ' · confidence ' + c.conf + ' %' : '') + '</div>';
    if (s.name) h += '<div class="muted small">Source: ' + esc(s.name) + (s.loc && s.loc !== s.name ? ' › ' + esc(s.loc) : '') + (s.label ? ' › "' + esc(s.label) + '"' : '') + (s.orig != null && s.ou ? ' · original ' + esc(s.orig) + ' ' + esc(s.ou) : '') + '</div>';
    if (c.why) h += '<div class="small">' + esc(c.why) + '</div>';
    if (c.warn) h += '<div class="small warn-t">⚠ ' + esc(c.warn) + '</div>';
    var acts = [];
    if (c.conflict) c.conflict.forEach(function (x, i) { acts.push('<button class="btn small' + (differs(x.v, c.v) ? '' : ' on') + '" data-pickc="' + i + '">' + esc(fmt(x.v)) + ' from ' + esc(x.src.name) + '</button>'); });
    if (c.alts && c.alts.length && c.src) c.alts.forEach(function (a) { if (META[a.id]) acts.push('<button class="btn small ghost" data-move="' + a.id + '">Move to ' + esc(lbl(a.id)) + ' (' + a.conf + ' %)</button>'); });
    if (c.st === 'review') acts.push('<button class="btn small" data-accept="1">' + ic('check') + ' Value is right</button>');
    if (c.st === 'missing' && META[id].def && d != null) acts.push('<button class="btn small" data-def="' + id + '">Use default ' + esc(fmt(d)) + ' ' + esc(META[id].unit || '') + ' (typical, please verify)</button>');
    if (isExtraCell(id)) acts.push('<span class="small green-t">Additional parameter: ' + esc(M.EXTRA[META[id].sheet === 'Machine' ? 'mach' : 'chem'][META[id].k]) + '</span>');
    if (c.st === 'default' && !c.auto) acts.push('<button class="btn small ghost" data-undef="' + id + '">Undo default</button>');
    if (c.st === 'default' && c.auto) acts.push('<span class="muted small">Type your value in the cell to replace this master default.</span>');
    if (c.st === 'missing' && !META[id].def) acts.push('<span class="muted small">No default for this value: type it, or add a file that has it.</span>');
    el.innerHTML = h + (acts.length ? '<div class="row wrap mb-ia">' + acts.join('') + '</div>' : '');
    el.dataset.id = id;
    $$('[data-pickc]', el).forEach(function (b) { b.onclick = function () { var x = c.conflict[+b.dataset.pickc]; c.v = x.v; c.src = x.src; c.conf = 100; c.why = 'chosen by you from ' + c.conflict.length + ' sources'; c.st = 'file'; c.user = true; c.picked = true; afterEdit(id); }; });
    $$('[data-move]', el).forEach(function (b) { b.onclick = function () { var to = b.dataset.move, t = B.cells[to]; if (t && t.user) { toast('That cell already has your value'); return; } B.cells[to] = { v: c.v, src: c.src, conf: 100, why: 'moved here by you from ' + lbl(id), st: 'file', user: true }; c.src.how = 'user'; B.pending[c.src.label] = keyOfCell(to); B.cells[id] = { v: null, st: 'na' }; afterEdit(to); }; });
    $$('[data-accept]', el).forEach(function (b) { b.onclick = function () { c.st = 'file'; c.user = true; c.accepted = true; c.why = (c.why || '') + ' · checked by you'; if (c.src && c.src.how === 'smart' && c.src.label) B.pending[c.src.label] = keyOfCell(id); afterEdit(id); }; });
    bindDefaults(el);
  }
  function setDefault(id) { var d = defVal(id); if (d == null) return; B.cells[id] = { v: d, st: 'default', approved: false, why: 'typical value from the Defaults table (please verify)', req: true }; }
  function bindDefaults(el) {
    $$('[data-def]', el).forEach(function (b) { b.onclick = function () { setDefault(b.dataset.def); afterEdit(b.dataset.def); }; });
    $$('[data-undef]', el).forEach(function (b) { b.onclick = function () { B.cells[b.dataset.undef] = { v: null, st: 'missing' }; afterEdit(b.dataset.undef); }; });
  }
  var pend = null;
  function afterEdit(focusId) {
    B.formed = null; finalize(); save();
    clearTimeout(pend); pend = setTimeout(function () { redraw(focusId); }, 0);
  }
  function redraw(focusId) {
    var ae = document.activeElement, nx = ae && ae.dataset && ae.dataset.c;
    var y = window.scrollY, tw = $('#mbTab .tbl-wrap'), sx = tw ? tw.scrollLeft : 0; render(); window.scrollTo(0, y);
    var tw2 = $('#mbTab .tbl-wrap'); if (tw2) tw2.scrollLeft = sx;
    if (nx && nx !== focusId) { var el = $('#mbTab [data-c="' + nx + '"]'); if (el) { el.focus({ preventScroll: true }); if (el.select) el.select(); return; } }
    if (focusId) inspect(focusId);
  }
  function editCell(id, raw) {
    var m = META[id], old = B.cells[id] || {}, v;
    if (m.type === 'text' || m.type === 'yn' || m.type === 'sel') v = String(raw || '').trim() || null;
    else v = toNum(raw);
    if (v == null) B.cells[id] = { v: null, st: 'missing', user: false };
    else B.cells[id] = { v: v, st: 'typed', user: true, why: 'typed by you' + (old.src && old.src.name && isNum(old.v) && differs(old.v, v) ? ' (the file had ' + fmt(old.v) + ')' : ''), src: { name: 'Typed by you', orig: old.st === 'typed' ? (old.src || {}).orig : old.v, prev: old.st === 'typed' ? (old.src || {}).prev : old.src || null } };
    afterEdit(id);
  }
  function jump(id) {
    var t = META[id].sheet; if (B.tab !== t) { B.tab = t; save(); $('#mbTab').innerHTML = tabHtml(t); bindTab(); $$('.mb-tabs [data-tab]', root).forEach(function (b) { b.classList.toggle('on', b.dataset.tab === t); }); }
    var td = $('#mbTab td[data-id="' + id.replace(/"/g, '') + '"]'); if (!td) return;
    td.scrollIntoView({ block: 'center', inline: 'center' }); td.classList.add('flash'); setTimeout(function () { td.classList.remove('flash'); }, 1600);
    var inp = $('input,select', td); if (inp) inp.focus({ preventScroll: true }); inspect(id);
  }
  function bindTab() {
    $$('#mbTab [data-c]', root).forEach(function (el) {
      el.onchange = function () { editCell(el.dataset.c, el.value); };
      el.onfocus = function () { inspect(el.dataset.c); };
    });
    $$('#mbTab td[data-id]', root).forEach(function (td) { td.onmouseenter = function () { inspect(td.dataset.id); }; });
    $$('#mbMode [data-mode]', root).forEach(function (b) { b.onclick = function () { B.modeUser = b.dataset.mode; B.cells['blend.mode'] = { v: b.dataset.mode, user: true }; afterEdit(); }; });
    $$('[data-rowdef]', root).forEach(function (b) { b.onclick = function () { var i = b.dataset.rowdef; M.CK.forEach(function (k) { var id = 'chem.' + i + '.' + k; if (B.cells[id] && B.cells[id].st === 'missing') setDefault(id); }); afterEdit(); toast('Defaults set for ' + ROWL[i] + ': approve them in the OK dialog'); }; });
    bindDefaults($('#mbTab'));
  }

  // ---------- Step 3: confirm and form the Master Sheet ----------
  function blockers() {
    var miss = ORDER.filter(function (id) { return B.cells[id] && B.cells[id].st === 'missing'; });
    return { miss: miss, err: (B.err || []).filter(function (e) { return e.b; }) };
  }
  function cont() {
    var b = blockers(), x = cx();
    if (b.miss.length || b.err.length) {
      var byS = {}; b.miss.forEach(function (id) { (byS[META[id].sheet] = byS[META[id].sheet] || []).push(id); });
      x.openSheet('Values still needed', b.err.map(function (e) { return '<div class="note bad">' + esc(e.t) + '</div>'; }).join('') +
        (b.miss.length ? '<p class="sub">These ' + b.miss.length + ' values are needed before the Master Sheet can be formed. Type them, add a file that has them, or use a default where one exists.</p>' + Object.keys(byS).map(function (s) { return '<h3>' + s + '</h3><ul class="mb-ul">' + byS[s].map(function (id) { return '<li>' + esc(lbl(id)) + (META[id].unit ? ' <small>(' + esc(META[id].unit) + ')</small>' : '') + (META[id].def && defVal(id) != null ? '' : ' <small class="bad-t">no default</small>') + '</li>'; }).join('') + '</ul>'; }).join('') : ''),
        [{ l: 'Close', fn: x.closeSheet }]);
      return;
    }
    var defs = ORDER.filter(function (id) { return B.cells[id] && B.cells[id].st === 'default'; }), n = counts();
    var body = defs.length ? '<div class="note dflt-n"><b>' + defs.length + ' value' + (defs.length > 1 ? 's come' : ' comes') + ' from the master default table (red).</b> The prediction is less specific to your plant for these. Give your own values when you have them.</div>' +
      '<div class="tbl-wrap"><table class="t"><tr><th>Sheet</th><th>Parameter</th><th class="n">Master default</th><th>Unit</th></tr>' + defs.map(function (id) { var m = META[id]; return '<tr><td>' + m.sheet + '</td><td>' + esc(m.row + (m.col ? ' · ' + m.col : '')) + '</td><td class="n red-t"><b>' + esc(fmt(B.cells[id].v)) + '</b></td><td>' + esc(m.unit || '') + '</td></tr>'; }).join('') + '</table></div>'
      : '<div class="note ok-n">No master defaults are used: every value is yours.</div>';
    if (n.xtra) body += '<div class="note xtra-n"><b>' + n.xtra + ' additional parameter' + (n.xtra > 1 ? 's' : '') + ' given (green)</b> and used for a better FeO, TI and permeability prediction.</div>';
    body += '<p class="sub">' + n.file + ' values from your data · ' + n.typed + ' typed · ' + n.review + ' to review (amber values are used as shown) · ' + defs.length + ' master default.</p>';
    x.openSheet('Form the Master Sheet', body, [{ l: 'Go back', cls: 'ghost', fn: x.closeSheet }, { l: 'OK, form Master Sheet', cls: 'primary', fn: function () { x.closeSheet(); form(); } }]);
  }
  function form() {
    ORDER.forEach(function (id) { var c = B.cells[id]; if (c && c.st === 'default') { c.approved = true; if (!c.auto) c.why = 'Default (user approved)'; } });
    // remember this plant's label choices for next time
    if (plantKey()) {
      var all = maps(), o = all[plantKey()] || { name: B.plant, map: {} };
      Object.keys(B.cells).forEach(function (id) { var c = B.cells[id], k = keyOfCell(id); if (k && c.src && c.src.label && /^(smart|user|saved)$/.test(c.src.how || '') && (c.st === 'file' || c.accepted)) o.map[PR.norm(c.src.label)] = k; });
      Object.keys(B.pending || {}).forEach(function (l) { if (B.pending[l]) o.map[PR.norm(l)] = B.pending[l]; });
      o.name = B.plant; o.saved = new Date().toISOString(); all[plantKey()] = o; saveMaps(all);
    }
    B.pending = {};
    B.formed = { at: new Date().toISOString(), name: fileName() }; B.step = 3; save(); render();
  }
  function fileName() { var d = new Date(), p = String(B.plant || 'Plant').trim().replace(/[^A-Za-z0-9_-]+/g, '_').replace(/^_+|_+$/g, '') || 'Plant'; return 'Sinter_Master_Sheet_' + p + '_' + d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2) + '.xlsx'; }
  function quality() {
    var n = { file: 0, typed: 0, def: 0 };
    Object.keys(B.cells).forEach(function (id) { var c = B.cells[id]; if (!META[id] || /^blend\.name\./.test(id) || !(isNum(c.v) || (META[id].type && c.v))) return; if (c.st === 'file' || c.st === 'review') n.file++; else if (c.st === 'typed') n.typed++; else if (c.st === 'default') n.def++; });
    var t = n.file + n.typed + n.def || 1; return { n: n, t: t, pf: Math.round(n.file / t * 100), pt: Math.round(n.typed / t * 100), pd: Math.round(n.def / t * 100) };
  }
  function step3() {
    if (!B.formed) return '<div class="card"><p>Press Continue in Step 2 to form the Master Sheet.</p><button class="btn" data-step="2">← Review</button></div>';
    var Q = quality(), defs = ORDER.filter(function (id) { return B.cells[id] && B.cells[id].st === 'default'; });
    return '<div class="card"><h2>' + ic('check') + ' Master Sheet formed</h2><p class="sub">' + esc(B.formed.name) + ' · same sheets, rows, columns and units as the master template, plus a Mapping_Log sheet. Master default cells are shaded red ("Master default"); the additional parameters you gave are shaded green.</p>' +
      qualityBar(Q) +
      (defs.length ? '<div class="note dflt-n">' + defs.length + ' value' + (defs.length > 1 ? 's use' : ' uses') + ' a master default (red): ' + defs.slice(0, 12).map(function (id) { return esc(lbl(id)); }).join(', ') + (defs.length > 12 ? ' …' : '') + '</div>' : '') +
      '<div class="row wrap mb-acts"><button class="btn" id="mbDl">' + ic('download') + ' Download Master Sheet (.xlsx)</button><button class="btn primary" id="mbRun">' + ic('play') + ' Run prediction</button></div>' +
      '<div class="mb-foot"><button class="btn ghost" data-step="2">← Review</button></div></div>';
  }
  function qualityBar(Q) {
    return '<div class="mb-q"><div class="mb-qbar"><i class="f" style="width:' + Q.pf + '%"></i><i class="t" style="width:' + Q.pt + '%"></i><i class="d" style="width:' + Q.pd + '%"></i></div>' +
      '<div class="mb-ql"><span><i class="dot file"></i>' + Q.pf + ' % from uploaded data (' + Q.n.file + ')</span><span><i class="dot typed"></i>' + Q.pt + ' % typed (' + Q.n.typed + ')</span><span><i class="dot default"></i>' + Q.pd + ' % master default (' + Q.n.def + ')</span></div></div>';
  }
  function step4() {
    if (!B.formed) return step3();
    return '<div class="card"><h2>Run prediction</h2><p class="sub">The Engine of Sinter_Prediction_Module_v2.xlsx (same formulas, same order) runs on the confirmed Master Sheet: blend, machine parameters and raw-material analysis. Lab results, if given, are compared on the Lab check page.</p>' +
      '<button class="btn primary block" id="mbRun">' + ic('play') + ' Run prediction</button><div class="mb-foot"><button class="btn ghost" data-step="3">← Master Sheet</button></div></div>';
  }

  // ---------- writing the Master Sheet into the template ----------
  function xesc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function colN(L) { var n = 0; for (var i = 0; i < L.length; i++) n = n * 26 + L.charCodeAt(i) - 64; return n; }
  function colL(n) { var s = ''; while (n > 0) { var m = (n - 1) % 26; s = String.fromCharCode(65 + m) + s; n = Math.floor((n - 1) / 26); } return s; }
  function cellXml(ref, v, s) {
    var sa = s != null ? ' s="' + s + '"' : '';
    if (v == null || v === '') return '<c r="' + ref + '"' + sa + '/>';
    if (isNum(v)) return '<c r="' + ref + '"' + sa + '><v>' + (+v.toPrecision(12)) + '</v></c>';
    return '<c r="' + ref + '"' + sa + ' t="inlineStr"><is><t xml:space="preserve">' + xesc(v) + '</t></is></c>';
  }
  function setCell(xml, ref, v, s) {
    var mm = /^([A-Z]+)(\d+)$/.exec(ref), r = +mm[2], cn = colN(mm[1]);
    var rowRe = new RegExp('<row r="' + r + '"([^>]*?)(/>|>([\\s\\S]*?)</row>)'), rm = rowRe.exec(xml);
    if (!rm) {
      var nr = '<row r="' + r + '">' + cellXml(ref, v, s) + '</row>', re = /<row r="(\d+)"/g, x, at = -1;
      while ((x = re.exec(xml))) if (+x[1] > r) { at = x.index; break; }
      if (at < 0) { if (xml.indexOf('<sheetData/>') >= 0) return xml.replace('<sheetData/>', '<sheetData>' + nr + '</sheetData>'); at = xml.indexOf('</sheetData>'); }
      return xml.slice(0, at) + nr + xml.slice(at);
    }
    var inner = rm[3] || '', cre = new RegExp('<c r="' + ref + '"([^>]*?)(/>|>[\\s\\S]*?</c>)'), cm = cre.exec(inner);
    if (cm) { if (s == null) { var sm = / s="(\d+)"/.exec(cm[1]); if (sm) s = +sm[1]; } inner = inner.replace(cm[0], cellXml(ref, v, s)); }
    else {
      var ce = /<c r="([A-Z]+)\d+"/g, y, pos = -1;
      while ((y = ce.exec(inner))) if (colN(y[1]) > cn) { pos = y.index; break; }
      inner = pos < 0 ? inner + cellXml(ref, v, s) : inner.slice(0, pos) + cellXml(ref, v, s) + inner.slice(pos);
    }
    return xml.slice(0, rm.index) + '<row r="' + r + '"' + rm[1] + '>' + inner + '</row>' + xml.slice(rm.index + rm[0].length);
  }
  function zget(z, p) { var f = XLSX.CFB.find(z, p); return f ? new TextDecoder('utf-8').decode(new Uint8Array(f.content)) : null; }
  function zput(z, p, s) { var f = XLSX.CFB.find(z, p), d = new TextEncoder().encode(s); if (f) { f.content = d; f.size = d.length; } else XLSX.CFB.utils.cfb_add(z, p, d); }
  function srcText(id) {
    var c = B.cells[id]; if (!c) return '';
    if (c.st === 'default') return c.auto ? 'Master default (not in your data)' : 'Default (user approved)';
    if (c.st === 'typed') return 'Typed by user' + (isExtraCell(id) ? ' · additional parameter' : '');
    if (c.st === 'calc') return 'Calculated (' + (c.why || '') + ')';
    var s = c.src || {}; return [s.name, s.loc && s.loc !== s.name ? s.loc : '', s.label ? '"' + s.label + '"' : ''].filter(Boolean).join(' › ');
  }
  function outVal(id) { var c = B.cells[id]; if (!c) return null; if (c.st === 'na' && !isNum(c.v)) return null; return c.v == null ? null : c.v; }
  function buildMaster() {
    var u8 = Uint8Array.from(atob(window.SP_MASTER_TPL), function (c) { return c.charCodeAt(0); });
    var z = XLSX.CFB.read(u8, { type: 'array' });
    // orange fill for default cells: one extra fill and one extra cell style
    // red for master defaults, green for the additional parameters you gave (fill + font)
    var st = zget(z, '/xl/styles.xml'), nf = +/<fills count="(\d+)"/.exec(st)[1], nx = +/<cellXfs count="(\d+)"/.exec(st)[1], nfo = +/<fonts count="(\d+)"/.exec(st)[1];
    st = st.replace(/<fonts count="\d+"([^>]*)>([\s\S]*?)<\/fonts>/, function (a, at, b) { return '<fonts count="' + (nfo + 2) + '"' + at + '>' + b + '<font><b/><sz val="11"/><color rgb="FFC00000"/><name val="Calibri"/><family val="2"/></font><font><b/><sz val="11"/><color rgb="FF00703C"/><name val="Calibri"/><family val="2"/></font></fonts>'; })
      .replace(/<fills count="\d+">([\s\S]*?)<\/fills>/, function (a, b) { return '<fills count="' + (nf + 2) + '">' + b + '<fill><patternFill patternType="solid"><fgColor rgb="FFFFC7CE"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFC6EFCE"/><bgColor indexed="64"/></patternFill></fill></fills>'; })
      .replace(/<cellXfs count="\d+">([\s\S]*?)<\/cellXfs>/, function (a, b) { return '<cellXfs count="' + (nx + 2) + '">' + b + '<xf numFmtId="0" fontId="' + nfo + '" fillId="' + nf + '" borderId="0" applyFont="1" applyFill="1" xfId="0"/><xf numFmtId="0" fontId="' + (nfo + 1) + '" fillId="' + (nf + 1) + '" borderId="0" applyFont="1" applyFill="1" xfId="0"/></cellXfs>'; });
    zput(z, '/xl/styles.xml', st);
    var OR = nx, GR = nx + 1, sty = function (id) { var c = B.cells[id]; return c && c.st === 'default' ? OR : (isExtraCell(id) && userGiven(c)) ? GR : null; };
    // Blend (sheet1)
    var x = zget(z, '/xl/worksheets/sheet1.xml');
    x = setCell(x, 'B2', MODE_X[B.mode], null);
    M.BLEND_ROWS.forEach(function (r, j) {
      var row = 5 + j, c = B.cells['blend.' + B.mode + '.' + r.i];
      x = setCell(x, 'B' + row, outVal('blend.use.' + r.i)); x = setCell(x, 'C' + row, outVal('blend.pct.' + r.i)); x = setCell(x, 'D' + row, outVal('blend.kgt.' + r.i));
      x = setCell(x, 'E' + row, outVal('blend.name.' + r.i)); x = setCell(x, 'F' + row, c && isNum(c.v) ? srcText('blend.' + B.mode + '.' + r.i) : '');
    });
    x = setCell(x, 'B24', outVal('blend.totCharge')); x = setCell(x, 'F24', isNum(q('blend.totCharge')) ? srcText('blend.totCharge') : '');
    x = setCell(x, 'B25', outVal('blend.sinterProd')); x = setCell(x, 'F25', isNum(q('blend.sinterProd')) ? srcText('blend.sinterProd') : '');
    zput(z, '/xl/worksheets/sheet1.xml', x);
    // Machine (sheet2)
    x = zget(z, '/xl/worksheets/sheet2.xml');
    M.MACHINE.forEach(function (p, j) { var id = 'mach.' + p.k; x = setCell(x, 'B' + (3 + j), outVal(id), sty(id)); x = setCell(x, 'D' + (3 + j), srcText(id)); });
    zput(z, '/xl/worksheets/sheet2.xml', x);
    // Lab_Results (sheet3): blank stays blank
    x = zget(z, '/xl/worksheets/sheet3.xml');
    M.LAB.forEach(function (p, j) { var id = 'lab.' + p.k; if (isNum(q(id))) { x = setCell(x, 'B' + (3 + j), q(id)); x = setCell(x, 'D' + (3 + j), srcText(id)); } });
    zput(z, '/xl/worksheets/sheet3.xml', x);
    // RM_Chemistry (sheet4)
    x = zget(z, '/xl/worksheets/sheet4.xml');
    M.CHEM_ROWS.forEach(function (r, j) {
      var row = 3 + j, srcs = {}, used = (q('blend.' + B.mode + '.' + r.i) || 0) > 0;
      M.CK.forEach(function (k, ci) {
        var id = 'chem.' + r.i + '.' + k, c = B.cells[id]; if (!c || !isNum(c.v)) return;
        x = setCell(x, colL(2 + ci) + row, c.v, sty(id));
        if (c.st !== 'calc') { var s = srcText(id); srcs[s] = 1; }
      });
      var S = Object.keys(srcs); if (S.length) x = setCell(x, 'S' + row, S.join(' · ') + (used ? '' : ' (material not in the blend)'));
    });
    zput(z, '/xl/worksheets/sheet4.xml', x);
    // Mapping_Log (new sheet6)
    var head = ['Sheet', 'Field', 'Source file / link', 'Source location', 'Source label', 'Original value', 'Original unit', 'Converted value', 'Unit', 'Confidence %', 'Came from', 'Note'];
    var rows = [head];
    ORDER.forEach(function (id) {
      var c = B.cells[id], m = META[id]; if (!c || (c.v == null || c.v === '') || c.st === 'na') return;
      var s = c.src || {}, from = c.st === 'default' ? 'default' : c.st === 'typed' ? 'typed' : c.st === 'calc' ? 'calculated' : 'file';
      rows.push([m.sheet, lbl(id), c.st === 'typed' || c.st === 'default' ? '' : s.name || '', s.loc || '', s.label || '', s.orig != null && s.orig !== c.v ? s.orig : (c.st === 'typed' && s.orig != null ? s.orig : ''), s.ou || '', c.v, m.unit || '', c.st === 'typed' || c.st === 'default' || c.st === 'calc' ? '' : c.conf, from, (c.why || '') + (c.warn ? ' · ' + c.warn : '')]);
    });
    var sd = rows.map(function (r, i) { return '<row r="' + (i + 1) + '">' + r.map(function (v, j) { return cellXml(colL(j + 1) + (i + 1), v, i === 0 ? 3 : null); }).join('') + '</row>'; }).join('');
    var W = [16, 52, 34, 34, 30, 14, 12, 14, 10, 12, 12, 70];
    zput(z, '/xl/worksheets/sheet6.xml', '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews><cols>' + W.map(function (w, i) { return '<col min="' + (i + 1) + '" max="' + (i + 1) + '" width="' + w + '" customWidth="1"/>'; }).join('') + '</cols><sheetData>' + sd + '</sheetData></worksheet>');
    var wb = zget(z, '/xl/workbook.xml').replace('</sheets>', '<sheet xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" name="Mapping_Log" sheetId="6" state="visible" r:id="rId99"/></sheets>');
    zput(z, '/xl/workbook.xml', wb);
    zput(z, '/xl/_rels/workbook.xml.rels', zget(z, '/xl/_rels/workbook.xml.rels').replace('</Relationships>', '<Relationship Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="/xl/worksheets/sheet6.xml" Id="rId99"/></Relationships>'));
    zput(z, '/[Content_Types].xml', zget(z, '/[Content_Types].xml').replace('</Types>', '<Override PartName="/xl/worksheets/sheet6.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/></Types>'));
    var out = XLSX.CFB.write(z, { fileType: 'zip', type: 'array', compression: true });
    return out instanceof Uint8Array ? out : new Uint8Array(out);
  }
  function downloadMaster() {
    try { cx().saveBytes(B.formed ? B.formed.name : fileName(), buildMaster(), 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'); }
    catch (e) { toast('Could not write the Master Sheet: ' + (e.message || e)); }
  }
  function downloadLog() { var o = logBytes(); cx().saveBytes(o.name, o.u8, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'); }
  function logBytes() {
    var rows = [['Sheet', 'Field', 'Source file / link', 'Source location', 'Source label', 'Value', 'Unit', 'Confidence %', 'Came from', 'Note']];
    ORDER.forEach(function (id) { var c = B.cells[id], m = META[id], s = (c && c.src) || {}; if (!c || c.v == null || c.v === '' || c.st === 'na') return; rows.push([m.sheet, lbl(id), s.name || '', s.loc || '', s.label || '', c.v, m.unit || '', c.conf == null ? '' : c.conf, c.st === 'default' ? 'default' : c.st === 'typed' ? 'typed' : c.st === 'calc' ? 'calculated' : 'file', c.why || '']); });
    var wb = XLSX.utils.book_new(), ws = XLSX.utils.aoa_to_sheet(rows); ws['!cols'] = [{ wch: 14 }, { wch: 50 }, { wch: 30 }, { wch: 30 }, { wch: 28 }, { wch: 12 }, { wch: 10 }, { wch: 12 }, { wch: 12 }, { wch: 60 }];
    XLSX.utils.book_append_sheet(wb, ws, 'Mapping_Log');
    return { name: 'Mapping_Log_' + fileName().replace(/^Sinter_Master_Sheet_/, ''), u8: new Uint8Array(XLSX.write(wb, { type: 'array', bookType: 'xlsx' })) };
  }

  // ---------- publish results with >= 95 % user inputs to the admin's Google Drive ----------
  var PUBQ = 'sp.pubQueue', XL = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  function minPct() { var v = +((window.SP_CONFIG || {}).publishMinUserPct); return v > 0 ? v : 95; }
  function userPct(Q) { var n = Q.n, t = n.file + n.typed + n.def; return t ? (n.file + n.typed) / t * 100 : 0; }
  function queue(v) { try { if (v === undefined) return JSON.parse(localStorage.getItem(PUBQ) || '[]') || []; localStorage.setItem(PUBQ, JSON.stringify(v.slice(-5))); } catch (e) { return []; } }
  function A() { return window.SinterAuth; }
  function publish() {
    var R = B.ran; if (!R) return;
    var pct = userPct(R.q); R.userPct = pct;
    if (pct < minPct()) { R.pub = { st: 'below', pct: pct }; save(); return; }
    var x = cx(), st = x.state, r = st.result || {}, ses = (A() && A().session()) || {}, pr = ses.profile || {};
    var master = buildMaster(), rep = x.reportBytes(), log = logBytes(), b = x.b64;
    var KEYS = ['fe', 'feo', 'sio2', 'al2o3', 'cao', 'mgo', 'b2', 'ti', 'rdi', 'ri', 'mps', 'm6', 'prod', 'fuel'], sum = {};
    KEYS.forEach(function (k) { if (isNum(r[k])) sum[k] = +r[k].toFixed(3); });
    var item = {
      id: 'r' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), at: new Date().toISOString(), plant: B.plant || '', userPct: +pct.toFixed(1),
      counts: { file: R.q.n.file, typed: R.q.n.typed, def: R.q.n.def }, user: { name: pr.name || (ses.admin ? 'Admin' : 'Guest'), email: pr.email || '', loginId: pr.loginId || '', company: pr.company || '', mobile: pr.mobile || '' },
      summary: sum, extra: (R.xtra || []).length,
      files: [{ name: (B.formed && B.formed.name) || fileName(), mime: XL, b64: b(master) }, { name: rep.name, mime: XL, b64: b(rep.u8) }, { name: log.name, mime: XL, b64: b(log.u8) }]
    };
    R.pub = { st: 'sending', pct: pct, id: item.id }; save();
    var q = queue(); q.push(item); queue(q);
    flushPublish();
  }
  var flushing = false;
  function flushPublish() {
    if (flushing || !A()) return Promise.resolve();
    var q = queue(), url = A().driveUrl(); if (!q.length) return Promise.resolve();
    if (!url) { if (B.ran && B.ran.pub && B.ran.pub.st === 'sending') { B.ran.pub.st = 'noserver'; save(); repaintPub(); } return Promise.resolve(); }
    flushing = true;
    var it = q[0];
    return A().postTo(url, 'publishResult', { item: it }).then(function (j) {
      queue(queue().filter(function (x) { return x.id !== it.id; }));
      if (B.ran && B.ran.pub && B.ran.pub.id === it.id) { B.ran.pub.st = 'sent'; B.ran.pub.folder = j.folder || ''; B.ran.pub.link = j.url || ''; B.ran.pub.at = new Date().toLocaleString('en-IN'); save(); repaintPub(); }
      flushing = false; return flushPublish();
    }, function (e) {
      if (B.ran && B.ran.pub && B.ran.pub.id === it.id) { B.ran.pub.st = 'queued'; B.ran.pub.err = e.message || String(e); save(); repaintPub(); }
      flushing = false;
    });
  }
  function pubHtml() {
    var R = B.ran; if (!R) return ''; var P = R.pub || {}, pct = isNum(R.userPct) ? R.userPct : userPct(R.q), need = minPct();
    var bar = '<div class="pub-meter"><i style="width:' + Math.min(100, pct).toFixed(1) + '%"></i><b style="left:' + need + '%"></b></div>';
    var t;
    if (P.st === 'sent') t = '<div class="note ok-n">' + ic('check') + ' <b>Published.</b> ' + fmt(pct, 1) + ' % of the inputs are your own data, so this result and its Master Sheet were stored in the plant results library' + (P.at ? ' (' + esc(P.at) + ')' : '') + '.</div>';
    else if (P.st === 'sending') t = '<div class="note">' + ic('loader') + ' Publishing this result (' + fmt(pct, 1) + ' % your data) …</div>';
    else if (P.st === 'queued' || P.st === 'noserver') t = '<div class="note warn"><b>Ready to publish</b> (' + fmt(pct, 1) + ' % your data). ' + (P.st === 'noserver' ? 'The results library is not connected on this device yet; it is kept and sent automatically once it is.' : 'No connection right now; it will be sent automatically next time the app is online.') + '</div>';
    else t = '<div class="note dflt-n"><b>Not published: ' + fmt(pct, 1) + ' % of the inputs are your own data</b> (needs ' + need + ' %). Fill the red cells of your Master Sheet with your plant data and run it again to publish the result.</div>';
    return '<div id="mbPub"><p class="sub" style="margin:10px 0 4px">Your own data in this prediction: <b>' + fmt(pct, 1) + ' %</b> · publishing needs ' + need + ' %</p>' + bar + t + '</div>';
  }
  function repaintPub() { var el = $('#mbPub'); if (el) el.outerHTML = pubHtml(); }

  // ---------- Step 4: run the engine on the confirmed Master Sheet ----------
  function runPrediction() {
    var x = cx(), st = x.state, C = B.cells, mode = B.mode, MAT = x.MAT;
    var srcTxt = function (id) { var c = C[id]; return c.st === 'typed' ? 'typed in Master Sheet' : c.st === 'default' ? (c.auto ? 'Master default' : 'Default (user approved)') : (c.src && c.src.name) || 'Master Sheet'; };
    st.src = {}; st.edited = {}; st.assumed = {}; st.matName = {};
    // red / green flags for every other page: app key -> reason
    var DU = {}, XU = {};
    ORDER.forEach(function (id) {
      var c = C[id], m = META[id]; if (!c || !m || !m.k) return;
      var ak = m.sheet === 'Machine' ? m.k : m.sheet === 'RM_Chemistry' ? 'chem.' + m.k + '.' + m.mat : null; if (!ak) return;
      if (c.st === 'default') DU[ak] = 'master default ' + fmt(c.v) + ' ' + (m.unit || '') + ' (not in your data: enter your value)';
      else if (isExtraCell(id) && userGiven(c)) XU[ak] = lbl(id);
    });
    st.defUsed = DU; st.extraUsed = XU;
    var qv = function (i) { return q('blend.' + mode + '.' + i) || 0; };
    if (mode === 'use') { st.blendMode = 'mt'; MAT.forEach(function (_, i) { st.inp.use[i] = qv(i); }); }
    else if (mode === 'pct') { st.blendMode = 'pct'; st.pct = MAT.map(function (_, i) { return qv(i); }); st.totCharge = q('blend.totCharge'); x.useFromPct(); }
    else { st.blendMode = 'kgt'; st.kgt = MAT.map(function (_, i) { return qv(i); }); st.sinterProd = q('blend.sinterProd'); x.useFromKgt(); }
    M.BLEND_ROWS.forEach(function (r) { var id = 'blend.' + mode + '.' + r.i; if (isNum(q(id))) st.src[(mode === 'use' ? 'use.' : mode + '.') + r.i] = srcTxt(id); var n = C['blend.name.' + r.i]; if (n && n.v) st.matName[r.i] = n.v; });
    M.MACHINE.forEach(function (p) {
      var id = 'mach.' + p.k, v = C[id].v;
      if (p.k === 'cacl2') st.inp.cacl2 = v === 'Yes';
      else if (p.k === 'basis') st.inp.basis = v || 'Charge';
      else if (p.k === 'width') { st.inp.width = v; st.machine.width = v; }
      else { st.inp[p.k] = v; if (p.k === 'area') st.machine.area = v; }
      st.src[p.k] = srcTxt(id);
    });
    if (st.machine.type !== 'custom') { var pre = x.MACHINES && x.MACHINES.find(function (t) { return t.id === st.machine.type; }); if (!pre || pre.area !== st.machine.area || pre.width !== st.machine.width) st.machine.type = 'custom'; }
    st.lab = {}; M.LAB.forEach(function (p) { var id = 'lab.' + p.k; if (isNum(q(id))) { st.lab[p.k] = q(id); st.src[id] = srcTxt(id); } });
    st.chem = x.E.clone(SD.props);
    M.CHEM_ROWS.forEach(function (r) {
      M.CK.forEach(function (k) {
        var id = 'chem.' + r.i + '.' + k, c = C[id]; if (!st.chem[k]) return;
        if (c && isNum(c.v)) { st.chem[k][r.i] = c.v; if (c.st !== 'calc') st.src['chem.' + k + '.' + r.i] = srcTxt(id); }
        else if (c && c.st === 'na' && !M.chemApplies(k, r.i) && (k === 'fc' || k === 'loi')) st.chem[k][r.i] = 0;
      });
      if (SD.types[r.i] !== 'Fuel' && r.i !== 6 && !(C['chem.' + r.i + '.burn'] && C['chem.' + r.i + '.burn'].st !== 'calc' && isNum(q('chem.' + r.i + '.burn')))) st.chem.burn[r.i] = Math.max(-5, st.chem.loi[r.i] || 0);
      if (SD.types[r.i] !== 'Fuel' && r.i !== 6) st.chem.fc[r.i] = 0;
    });
    // the analysis is the plant's own (file, typed or approved default): pure mass balance, as for any uploaded analysis
    var up = { last: {}, avg2: null, file: 'Master Sheet', files: {} };
    M.CHEM_ROWS.forEach(function (r) { M.CK.forEach(function (k) { var c = C['chem.' + r.i + '.' + k]; if (c && isNum(c.v) && /^(file|review|typed|default)$/.test(c.st)) { (up.last[r.i] = up.last[r.i] || {})[k] = c.v; up.files[r.i] = srcTxt('chem.' + r.i + '.' + k); } }); });
    st.upChem = Object.keys(up.last).length ? up : null; st.touched = true; st.loaded = 'Master Sheet' + (B.plant ? ': ' + B.plant : '');
    x.recal(); x.save();
    var Q = quality(), defs = ORDER.filter(function (id) { return C[id] && C[id].st === 'default'; });
    var xs = ORDER.filter(function (id) { return isExtraCell(id) && userGiven(C[id]); });
    B.ran = { at: new Date().toLocaleString('en-IN'), loaded: st.loaded, defs: defs.map(function (id) { return { l: lbl(id), v: C[id].v, u: META[id].unit || '' }; }), xtra: xs.map(function (id) { return { l: lbl(id), v: C[id].v, u: META[id].unit || '' }; }), q: Q };
    B.step = 5; save();
    x.doPredict();
    try { publish(); } catch (e) { B.ran.pub = { st: 'queued', err: e.message }; save(); }
    repaintPub();
  }

  // ---------- results banner (Step 5) ----------
  function resultsTop() {
    var st = cx().state; if (!B.ran || st.loaded !== B.ran.loaded) return '';
    var R = B.ran, n = R.defs.length, X = R.xtra || [];
    return '<div class="card mb-resb">' + stepperMini() +
      '<div class="note ' + (n ? 'dflt-n' : 'ok-n') + '"><b>' + n + ' value' + (n === 1 ? '' : 's') + ' from the master default table (red).</b>' + (n ? ' Give your own values for these to make the prediction specific to your plant.' : ' Every input came from your data or was typed by you.') + '</div>' +
      (n ? '<details><summary class="red-t">Show the ' + n + ' master default' + (n > 1 ? 's' : '') + '</summary><ul class="mb-ul red-l">' + R.defs.map(function (d) { return '<li>' + esc(d.l) + ': <b>' + esc(fmt(d.v)) + '</b> ' + esc(d.u) + '</li>'; }).join('') + '</ul></details>' : '') +
      '<div class="note xtra-n"><b>' + X.length + ' additional parameter' + (X.length === 1 ? '' : 's') + ' used (green)</b>' + (X.length ? ': ' + X.slice(0, 8).map(function (d) { return esc(d.l) + ' <b>' + esc(fmt(d.v)) + '</b> ' + esc(d.u); }).join(' · ') + (X.length > 8 ? ' …' : '') : '. Give wind main temperature, ID fan speed, BF gas to ignition and raw-material FeO / +3 mm / mean size for a sharper FeO, TI and permeability prediction.') + '</div>' +
      '<p class="sub" style="margin:8px 0 4px">Data quality score</p>' + qualityBar(R.q) + pubHtml() + '</div>' +
      '<div class="card dl-card"><h2>' + ic('download') + ' Download your files</h2><p class="sub">Saved to this device. Every file carries the date and plant name.</p><div class="dl-grid">' +
      '<button class="dl-t" id="mbResMaster"><span class="ic">' + ic('file-spreadsheet') + '</span><b>Master Sheet</b><small>.xlsx · all inputs of this run; red = master default, green = additional parameters</small></button>' +
      '<button class="dl-t" id="mbResOut"><span class="ic">' + ic('file-spreadsheet') + '</span><b>Results</b><small>.xlsx · every predicted parameter with targets, plus inputs and lab check</small></button>' +
      '<button class="dl-t" id="mbResPdf"><span class="ic">' + ic('file-text') + '</span><b>Results</b><small>PDF · printable result page</small></button>' +
      '<button class="dl-t" id="mbResLog"><span class="ic">' + ic('file-spreadsheet') + '</span><b>Mapping log</b><small>.xlsx · where each value came from</small></button></div>' +
      (Object.keys(st.lab || {}).length ? '<div class="row" style="margin-top:8px"><button class="btn small" data-go="lab">' + ic('test-tube') + ' Lab check</button></div>' : '') + '</div>' +
      '<div class="card advise"><h2>' + ic('sparkles') + ' Make the prediction yours</h2>' +
      '<ol class="adv-steps"><li><b>Download the Master Sheet</b> above.</li><li><b>Fill every red cell</b> with your plant\'s own value (blend, machine data and raw-material analysis). Keep the sheet names, rows and units as they are. Add the green additional parameters too: wind main temperature, ID fan speed, BF gas to ignition and the FeO, +3 mm and mean size of each material.</li><li><b>Upload the filled sheet</b> on Inputs and press Generate Master Sheet, then Run prediction.</li></ol>' +
      '<p class="sub">When at least ' + minPct() + ' % of the inputs are your own data, the result is published to the plant results library together with the Master Sheet of that run' + (n ? '. Right now ' + n + ' value' + (n > 1 ? 's are' : ' is') + ' still a master default.' : '.') + ' Published results include your name, plant and the files above.</p>' +
      '<button class="btn primary" id="mbUpFilled">' + ic('upload') + ' Upload my filled Master Sheet</button></div>';
  }
  function stepperMini() { return '<div class="mb-steps mini">' + STEPS.map(function (l, i) { return '<button data-mbstep="' + (i + 1) + '" class="' + (i === 4 ? 'on' : 'done') + '"><b>' + (i === 4 ? 5 : '✓') + '</b><span>' + l + '</span></button>'; }).join('') + '</div>'; }
  function bindResults(m) {
    var b;
    if ((b = $('#mbResMaster', m))) b.onclick = downloadMaster;
    if ((b = $('#mbResLog', m))) b.onclick = downloadLog;
    if ((b = $('#mbResOut', m))) b.onclick = function () { cx().exportReport(); };
    if ((b = $('#mbResPdf', m))) b.onclick = function () { printResults(); };
    if ((b = $('#mbUpFilled', m))) b.onclick = function () { B.step = 1; save(); cx().go('input'); setTimeout(pick, 120); };
    if (B.ran && B.ran.pub && /^(queued|noserver)$/.test(B.ran.pub.st)) flushPublish();
    $$('[data-mbstep]', m).forEach(function (x) { x.onclick = function () { var n = +x.dataset.mbstep; if (n < 5) { B.step = n; save(); cx().go('input'); } }; });
  }
  function printResults() {
    document.body.classList.add('print-results');
    setTimeout(function () {
      try { if (window.AndroidBridge && AndroidBridge.printPage) AndroidBridge.printPage('Sinter_Results'); else window.print(); } catch (e) { toast('Printing is not available here'); }
      setTimeout(function () { document.body.classList.remove('print-results'); }, window.AndroidBridge ? 4000 : 0);
    }, 60);
  }

  // ---------- Mapping Library, Defaults table, AI settings ----------
  function openLib() {
    var x = cx(), all = maps(), keys = Object.keys(all), A = PR.aliases || {}, syn = x.state.aliasMap || {};
    var nBuilt = Object.keys(A).reduce(function (a, k) { return a + A[k].length; }, 0);
    var body = '<p class="sub">Label choices saved per plant when you press OK in Step 3. Next time the same plant\'s files are read, these are used first; only unmatched labels go to smart match.</p>' +
      (keys.length ? keys.map(function (p) { var o = all[p], m = o.map || {}; return '<details class="mb-lib"><summary><b>' + esc(o.name || p) + '</b> · ' + Object.keys(m).length + ' labels · saved ' + esc(String(o.saved || '').slice(0, 10)) + '</summary><table class="t">' + Object.keys(m).map(function (l) { return '<tr><td>' + esc(l) + '</td><td>' + esc(lbl(cellOfKey(m[l]) || m[l])) + '</td><td><button class="lnk" data-dl="' + esc(p) + '" data-l="' + esc(l) + '">Delete</button></td></tr>'; }).join('') + '</table><button class="lnk danger" data-dp="' + esc(p) + '">Delete this plant\'s mapping</button></details>'; }).join('') : '<p class="muted small">No plant mappings saved yet.</p>') +
      '<h3>Synonym dictionary</h3><p class="sub">' + nBuilt + ' built-in labels (T.Fe, Total Fe, Fe(T); Dolo, Dolomite; BTP, Burn through temp …). Add your own: a label from your files and the cell it means. Used for every plant.</p>' +
      '<table class="t">' + Object.keys(syn).map(function (l) { return '<tr><td>' + esc(l) + '</td><td>' + esc(lbl(cellOfKey(syn[l]) || syn[l])) + '</td><td><button class="lnk" data-ds="' + esc(l) + '">Delete</button></td></tr>'; }).join('') + '</table>' +
      '<div class="mb-syn"><input id="synL" placeholder="Label as in your file, e.g. Dolo fines"><select id="synK" class="sel">' + cellOptions() + '</select><button class="btn small" id="synAdd">Add</button></div>' +
      '<details><summary>Built-in labels</summary><div class="small muted">' + Object.keys(A).map(function (k) { return '<div><b>' + esc(lbl(cellOfKey(k) || k)) + '</b>: ' + esc(A[k].join(', ')) + '</div>'; }).join('') + '</div></details>';
    x.openSheet('Mapping Library', body, [{ l: 'Import', cls: 'ghost', fn: importLib }, { l: 'Export', cls: 'ghost', fn: exportLib }, { l: 'Close', fn: x.closeSheet }]);
    var sh = $('#sheet');
    $$('[data-dl]', sh).forEach(function (b) { b.onclick = function () { var a = maps(); delete a[b.dataset.dl].map[b.dataset.l]; saveMaps(a); openLib(); }; });
    $$('[data-dp]', sh).forEach(function (b) { b.onclick = function () { if (!confirm('Delete the saved mapping of ' + b.dataset.dp + '?')) return; var a = maps(); delete a[b.dataset.dp]; saveMaps(a); openLib(); }; });
    $$('[data-ds]', sh).forEach(function (b) { b.onclick = function () { delete x.state.aliasMap[b.dataset.ds]; PR.setUserAliases(x.state.aliasMap); x.save(); openLib(); }; });
    $('#synAdd', sh).onclick = function () { var l = $('#synL').value.trim(), k = keyOfCell($('#synK').value); if (!l || !k) { toast('Type a label and choose its cell'); return; } x.state.aliasMap[l] = k; PR.setUserAliases(x.state.aliasMap); x.save(); openLib(); };
  }
  function exportLib() { var d = JSON.stringify({ kind: 'SinterPredict mapping library', at: new Date().toISOString(), plants: maps(), synonyms: cx().state.aliasMap || {} }, null, 1); cx().saveBytes('Sinter_Mapping_Library.json', textBytes(d), 'application/json'); }
  function importLib() {
    var fi = $('#fileInput'); fi.value = ''; fi.setAttribute('accept', '.json,application/json'); fi.multiple = false;
    fi.onchange = function () { var f = fi.files && fi.files[0]; if (!f) return; readBytes(f).then(function (u8) { var o = JSON.parse(new TextDecoder().decode(u8)); var a = maps(); Object.keys(o.plants || {}).forEach(function (p) { a[p] = o.plants[p]; }); saveMaps(a); var s = cx().state; Object.keys(o.synonyms || {}).forEach(function (l) { s.aliasMap[l] = o.synonyms[l]; }); PR.setUserAliases(s.aliasMap); cx().save(); toast('Mapping library imported'); openLib(); }).catch(function (e) { toast('Not a mapping library file: ' + e.message); }); };
    fi.click();
  }
  function openDefaults() {
    var x = cx(), D = M.loadDefaults();
    var body = '<div class="note dflt-n">Master default table (' + esc(D.source || 'built in') + '). Every value you do not give is taken from here at once and shown <b>red</b> until you type or upload your own. Additional parameters marked <span class="green-t"><b>+extra</b></span> sharpen the prediction when you give them (shown green).</div>' +
      '<h3>Machine</h3><div class="tbl-wrap"><table class="t"><tr><th>Parameter</th><th class="n">Default</th><th>Unit</th><th>Typical band</th></tr>' + M.MACHINE.map(function (p) { var d = D.mach[p.k] || {}; return '<tr><td>' + esc(p.l) + (M.isExtra('mach', p.k) ? ' <small class="green-t"><b>+extra</b></small>' : '') + '<small class="muted"> ' + esc(d.note || '') + '</small></td><td class="n"><input class="dfi" data-dm="' + p.k + '" value="' + esc(d.v) + '"></td><td>' + esc(p.u) + '</td><td>' + esc(d.band || '') + '</td></tr>'; }).join('') + '</table></div>' +
      '<h3>Raw-material analysis (dry basis)</h3><div class="tbl-wrap"><table class="t dft"><tr><th>Material</th>' + M.CHEM.map(function (c) { return '<th class="n">' + esc(c.l) + '</th>'; }).join('') + '</tr>' +
      M.CHEM_ROWS.map(function (r) { var d = D.chem[r.i] || {}; return '<tr><td>' + esc(r.l) + '</td>' + M.CK.map(function (k) { return '<td class="n">' + (M.chemApplies(k, r.i) ? '<input class="dfi" data-dc="' + r.i + '.' + k + '" value="' + esc(d[k]) + '">' : '<span class="muted">' + (k === 'burn' ? '= LOI' : '–') + '</span>') + '</td>'; }).join('') + '</tr>'; }).join('') + '</table></div>' +
      (D.edited ? '<p class="muted small">Edited ' + esc(String(D.edited).slice(0, 16).replace('T', ' ')) + '</p>' : '');
    x.openSheet('Master default table', body, [{ l: 'Import master default sheet (.xlsx)', cls: 'ghost', fn: importDefaults }, { l: 'Reset to built-in', cls: 'ghost', fn: function () { M.resetDefaults(); openDefaults(); toast('Master defaults reset'); } }, { l: 'Close', cls: 'ghost', fn: x.closeSheet }, { l: 'Save', cls: 'primary', fn: function () {
      $$('#sheet [data-dm]').forEach(function (el) { var k = el.dataset.dm, n = toNum(el.value); D.mach[k].v = (k === 'cacl2' || k === 'basis') ? el.value.trim() : n; });
      $$('#sheet [data-dc]').forEach(function (el) { var p = el.dataset.dc.split('.'), n = toNum(el.value); if (n != null) D.chem[p[0]][p[1]] = n; });
      M.saveDefaults(D); x.closeSheet(); toast('Master default table saved');
      Object.keys(B.cells).forEach(function (id) { var c = B.cells[id]; if (c && c.st === 'default' && c.auto) { var d = defVal(id); if (d != null) c.v = d; } });
      if (B.gen) { B.formed = null; finalize(); save(); } if (B.step === 2) render();
    } }]);
  }
  function importDefaults() {
    var fi = $('#fileInput'); fi.value = ''; fi.setAttribute('accept', '.xlsx,.xls,.xlsm,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel'); fi.multiple = false;
    fi.onchange = function () {
      var f = fi.files && fi.files[0]; if (!f) return;
      readBytes(f).then(function (u8) {
        var r = M.importDefaultsXlsx(u8);
        // master defaults already in the review table take the new values
        Object.keys(B.cells).forEach(function (id) { var c = B.cells[id]; if (c && c.st === 'default' && c.auto) { var d = defVal(id); if (d != null) c.v = d; } });
        if (B.gen) { B.formed = null; finalize(); save(); }
        toast(r.n + ' master default values imported' + (r.skipped.length ? ' (' + r.skipped.length + ' skipped)' : '')); openDefaults(); if (B.step === 2) render();
      }).catch(function (e) { toast('Could not read the master default sheet: ' + (e.message || e)); });
    };
    fi.click();
  }
  // ---------- binding ----------
  function bind() {
    $$('.mb-steps [data-step], .mb-foot [data-step], .card [data-step]', root).forEach(function (b) { b.onclick = function () { var n = +b.dataset.step; if (!canStep(n)) return; if (n === 5) { cx().go('results'); return; } B.step = n; save(); render(); window.scrollTo(0, 0); }; });
    if (B.step === 1) {
      var dz = $('#mbDrop');
      dz.onclick = pick; dz.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); } };
      dz.ondragover = function (e) { e.preventDefault(); dz.classList.add('over'); }; dz.ondragleave = function () { dz.classList.remove('over'); };
      dz.ondrop = function (e) { e.preventDefault(); dz.classList.remove('over'); var f = Array.prototype.slice.call((e.dataTransfer && e.dataTransfer.files) || []); if (f.length) addFiles(f); else { var t = e.dataTransfer && e.dataTransfer.getData('text'); if (/^https?:\/\//.test(t || '')) { $('#mbLink').value = t; addLink(); } } };
      $('#mbLinkAdd').onclick = addLink; $('#mbLink').onkeydown = function (e) { if (e.key === 'Enter') addLink(); };
      $('#mbPlant').onchange = function () { B.plant = this.value.trim(); save(); };
      $('#mbNotes').oninput = function () { B.notes = this.value; save(); refreshGen(); };
      $$('#mbAvg [data-ca]').forEach(function (b) { b.onclick = function () { B.chemAvg = b.dataset.ca; save(); $$('#mbAvg button').forEach(function (x) { x.classList.toggle('on', x === b); }); }; });
      $('#mbGen').onclick = function () { B.plant = $('#mbPlant').value.trim(); B.notes = $('#mbNotes').value; generate(); };
      $('#mbLib').onclick = openLib; $('#mbDefs').onclick = openDefaults;
      $('#mbTpl').onclick = function () { cx().saveBytes('Sinter_Master_Template_blank.xlsx', Uint8Array.from(atob(window.SP_MASTER_TPL), function (c) { return c.charCodeAt(0); }), 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'); };
      $('#mbReset').onclick = function () { if (!confirm('Clear all added files, links, notes and the review table?')) return; B = fresh(); BYTES = {}; save(); render(); toast('Reset'); };
      bindList();
    }
    if (B.step === 2) {
      $$('.mb-tabs [data-tab]', root).forEach(function (b) { b.onclick = function () { B.tab = b.dataset.tab; save(); $('#mbTab').innerHTML = tabHtml(B.tab); bindTab(); $$('.mb-tabs [data-tab]', root).forEach(function (x) { x.classList.toggle('on', x === b); }); }; });
      $$('[data-jump]', root).forEach(function (b) { b.onclick = function () { jump(b.dataset.jump); }; });
      var da = $('#mbDefAll'); if (da) da.onclick = function () { var n = 0; ORDER.forEach(function (id) { var c = B.cells[id]; if (c && c.st === 'missing' && META[id].def && defVal(id) != null) { setDefault(id); n++; } }); afterEdit(); toast(n + ' defaults set: you approve them in the OK dialog'); };
      $('#mbMore').onclick = function () { B.step = 1; save(); render(); };
      $('#mbRegen').onclick = function () { generate(); };
      $('#mbCont').onclick = cont;
      $('#mbNormals').onclick = function () { cx().openNormals(); };
      $$('[data-um]', root).forEach(function (sel) { sel.onchange = function () { var u = B.unmatched[+sel.dataset.um], id = sel.value; if (!u || !id) return; var cv = convertUnit(id, u.value, /hz/i.test(u.label) ? 'Hz' : ''); B.cells[id] = { v: META[id].type ? String(u.value) : toNum(cv.v), st: 'file', conf: 100, user: true, why: 'mapped by you from "' + u.label + '"' + (cv.how ? ' (converted ' + cv.how + ')' : ''), src: { name: u.name, loc: u.src, label: u.label, orig: u.value, how: 'user' } }; u.used = id; B.pending[u.label] = keyOfCell(id); afterEdit(id); }; });
      $$('[data-ump]', root).forEach(function (b) { b.onclick = function () { var sel = $('select[data-um="' + b.dataset.ump + '"]', root); if (sel) { sel.value = b.dataset.k; sel.onchange(); } }; });
      bindTab();
    }
    if (B.step === 3 || B.step === 4) {
      var d = $('#mbDl'); if (d) d.onclick = downloadMaster;
      var r = $('#mbRun'); if (r) r.onclick = function () { if (B.step === 3) { B.step = 4; save(); } runPrediction(); };
    }
  }
  function onResultsGo() { if (B.ran) { B.step = 5; save(); } }
  window.SinterBuilder = { page: page, resultsTop: resultsTop, bindResults: bindResults, state: function () { return B; }, generate: generate, finalize: finalize, buildMaster: buildMaster, META: META, ORDER: ORDER, convertUnit: convertUnit, onResults: onResultsGo,
    // test hooks
    _addBytes: function (name, u8, mime) { var s = { id: 's' + (++B.seq), kind: 'file', name: name, mime: mime || '', size: u8.length, status: 'ready' }; BYTES[s.id] = u8; B.sources.push(s); save(); return s; },
    flushPublish: flushPublish, publishQueue: function () { return queue(); },
    _reset: function () { B = fresh(); BYTES = {}; save(); }, openDefaults: openDefaults, isExtraCell: isExtraCell, importDefaultsBytes: function (u8) { return M.importDefaultsXlsx(u8); } };
})();
