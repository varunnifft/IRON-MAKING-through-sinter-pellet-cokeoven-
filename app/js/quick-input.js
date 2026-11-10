/* Sinter Predict: Inputs page in the same three steps as Coke Making.
   1 Inputs: upload Sinter_Prediction_Module_Reference_Input.xlsx (filled with your data) or enter values by hand.
   2 Review & fill missing: every blank input is listed with its reference value; Take reference / Don't take.
   3 Results: runs the Sinter Predict engine.  The earlier input page (any file type, mapping library) stays
   available as "Advanced input". */
(function () {
  'use strict';
  var R = window.SINTER_REF, REF_FILE = 'Sinter_Prediction_Module_Reference_Input.xlsx', BLANK_FILE = 'Sinter_Prediction_Input_Template_Blank.xlsx';
  var KEY = 'sp.quick.v1';
  var TGT = { 'Fe(T)': 'fe', 'FeO': 'feo', 'SiO2': 'sio2', 'Al2O3': 'al2o3', 'MgO': 'mgo', 'Basicity B2 (CaO/SiO2)': 'b2', '-6 mm (return fines)': 'm6',
    'Mean particle size (MPS)': 'mps', 'Tumbler Index (+6.3 mm)': 'ti', 'Abrasion index (-0.5 mm)': 'ai', 'Shatter index (+10 mm)': 'si',
    'RDI (-3.15 mm, lower is better)': 'rdi', 'Reducibility index RI': 'ri' };
  var Q = load() || { mode: 'upload', step: 1, form: emptyForm(), raw: null, items: [], fileName: '', last: null };
  var advanced = false;
  function cx() { return window.SinterApp.ctx; }
  function $(s, el) { return (el || document).querySelector(s); }
  function $$(s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function blank(v) { return v === undefined || v === null || (typeof v === 'string' && v.trim() === '') || (typeof v === 'number' && !isFinite(v)); }
  function fmt(v) { return blank(v) ? '—' : typeof v === 'number' ? (+v.toFixed(3)).toLocaleString('en-IN') : String(v); }
  function emptyForm() { return { mats: R.mats.map(function () { return ''; }), mach: R.mach.map(function () { return ''; }), extra: R.extra.map(function () { return ''; }), prod: '', bias: 'Yes', targets: R.targets.map(function (t) { return [t.min, t.max]; }) }; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(Q)); } catch (e) { } }
  function load() { try { var s = JSON.parse(localStorage.getItem(KEY) || 'null'); if (s && s.form) return s; } catch (e) { } return null; }
  function toast(m) { try { cx().toast(m); } catch (e) { } }

  // ---------------- styles (scoped) ----------------
  var css = '.qi-steps{display:flex;gap:8px;overflow-x:auto;padding:2px 0 8px;scrollbar-width:none}' +
    '.qi-steps button{flex:none;display:flex;align-items:center;gap:8px;padding:9px 14px 9px 9px;border-radius:12px;border:1px solid #dfe5ec;background:#e6ebf1;color:#6b7a8c;font-weight:600;font-size:14px}' +
    '.qi-steps button i{width:24px;height:24px;border-radius:50%;display:grid;place-items:center;font-style:normal;font-size:12px;font-weight:800;background:#fff}' +
    '.qi-steps button.on{background:#fff;color:#0F2A44;border-color:#2A6FB0}.qi-steps button.on i{background:#2A6FB0;color:#fff}' +
    '.qi-opts{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:10px;margin-top:10px}' +
    '.qi-opt{display:flex;flex-direction:column;align-items:flex-start;gap:6px;padding:14px;border-radius:14px;border:2px solid #dfe5ec;background:#fff;text-align:left;min-width:0}' +
    '.qi-opt b{font-size:15px;color:#0F2A44}.qi-opt small{color:#6b7a8c;font-size:12.5px;line-height:1.35;overflow-wrap:anywhere}.qi-opt.on{border-color:#2A6FB0;background:#E6F0FA}' +
    '.qi-drop{display:block;margin-top:12px;border:2px dashed #9fb7d6;border-radius:16px;background:#eef4fb;padding:22px 14px;text-align:center}' +
    '.qi-drop b{display:block;font-size:16px;margin-top:6px;color:#0F2A44}.qi-drop small{color:#6b7a8c;overflow-wrap:anywhere}' +
    '.qi-links{display:grid;gap:2px;margin-top:10px}.qi-lk{display:flex;align-items:center;gap:8px;min-height:40px;border:0;background:none;color:#2A6FB0;font-weight:600;font-size:14px;text-align:left;padding:4px 0;overflow-wrap:anywhere;min-width:0}' +
    '.qi-red{color:#C8372D}.qi-green{color:#1E8E5A}.qi-tag{display:inline-block;padding:2px 8px;border-radius:999px;font-size:11px;font-weight:800;white-space:nowrap}' +
    '.qi-tag.r{background:#FBE7E5;color:#C8372D}.qi-tag.g{background:#E3F4EB;color:#1E8E5A}.qi-tag.n{background:#EEF1F4;color:#5b6876}' +
    'details.qi-sec{margin-top:12px;background:#fff;border-radius:14px;border:1px solid #e3e8ee;box-shadow:0 1px 2px rgba(15,42,68,.05);overflow:hidden}' +
    'details.qi-sec>summary{list-style:none;padding:13px 14px;font-weight:700;color:#0F2A44;display:flex;align-items:center;gap:8px;cursor:pointer}' +
    'details.qi-sec>summary::-webkit-details-marker{display:none}details.qi-sec>summary span{margin-left:auto;font-size:12px;color:#6b7a8c;font-weight:600}' +
    '.qi-b{padding:0 14px 12px}.qi-f{display:grid;grid-template-columns:minmax(0,1fr) 120px;gap:4px 10px;align-items:center;padding:7px 0;border-bottom:1px solid #f0f3f7}' +
    '.qi-f label{font-size:13.5px}.qi-f label small{display:block;color:#6b7a8c;font-size:11.5px}' +
    '.qi-f input,.qi-f select{width:100%;min-height:40px;border:1px solid #CBD3DC;border-radius:9px;padding:8px;font-size:15px;text-align:right;background:#FFFDF6;color:#2A6FB0}' +
    '.qi-f input::placeholder{color:#c0c8d2}.qi-f.t3{grid-template-columns:minmax(0,1fr) 74px 74px}' +
    '.qi-sum{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:10px}.qi-sum div{background:#F5F7FA;border-radius:12px;padding:10px;text-align:center}' +
    '.qi-sum b{display:block;font-size:22px}.qi-sum small{color:#6b7a8c;font-size:11.5px}' +
    '.qi-rv{display:grid;gap:8px;padding:11px 0;border-bottom:1px solid #eef1f5}.qi-rv .lb{font-weight:600;font-size:14px}.qi-rv .lb small{display:block;font-weight:500;color:#6b7a8c;font-size:12px;margin-top:2px}' +
    '.qi-seg{display:flex;border:1px solid #CBD3DC;border-radius:11px;overflow:hidden;background:#fff}' +
    '.qi-seg button{flex:1;min-height:40px;border:0;background:#fff;font-size:13.5px;font-weight:700;color:#6b7a8c;padding:6px 8px}.qi-seg button+button{border-left:1px solid #CBD3DC}' +
    '.qi-seg .take.on{background:#FBE7E5;color:#C8372D}.qi-seg .skip.on{background:#e9edf2;color:#14202e}' +
    '.qi-row{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}.qi-row>.btn{flex:1 1 140px;min-height:46px}' +
    '.qi-total{display:flex;justify-content:space-between;margin-top:10px;padding:10px 12px;border-radius:12px;background:#F5F7FA;font-weight:700}' +
    '@media(min-width:640px){.qi-rv{grid-template-columns:1fr 250px;align-items:center}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  // ---------------- Excel ----------------
  function readXlsx(u8, name) {
    var wb = XLSX.read(u8, { type: 'array' });
    if (!wb.Sheets.Input) throw new Error('This file has no "Input" sheet. Download ' + REF_FILE + ' from this page, fill column D with your data and upload it.');
    var cell = function (sh, a) { var ws = wb.Sheets[sh]; if (!ws || !ws[a]) return null; var v = ws[a].v; if (typeof v === 'string') { v = v.trim(); if (!v) return null; var n = Number(v.replace(/,/g, '')); if (isFinite(n) && /^[-+.\d,eE]+$/.test(v)) return n; } return v; };
    var num = function (v) { return typeof v === 'number' && isFinite(v) ? v : null; };
    var raw = { mats: R.mats.map(function (m) { return num(cell('Input', 'D' + m.row)); }), mach: R.mach.map(function (m) { return num(cell('Input', 'D' + m.row)); }),
      extra: R.extra.map(function (m) { return num(cell('Input', 'D' + m.row)); }), prod: num(cell('Input', 'D41')), bias: String(cell('Input', 'D42') || '').toLowerCase() === 'no' ? 'No' : (cell('Input', 'D42') == null ? null : 'Yes'),
      targets: R.targets.map(function (t) { return [t.min, t.max]; }) };
    if (wb.Sheets.Output) raw.targets = R.targets.map(function (t) { var a = num(cell('Output', 'D' + t.row)), b = num(cell('Output', 'E' + t.row)); return [a, b]; });
    Q.raw = raw; Q.fileName = name; Q.mode = 'upload'; Q.items = detect(raw); Q.step = 2; save();
    toast('Read ' + countUser(raw) + ' values from ' + name + (Q.items.length ? ' · ' + Q.items.length + ' missing' : ''));
  }
  function countUser(raw) { var n = 0; ['mats', 'mach', 'extra'].forEach(function (g) { raw[g].forEach(function (v) { if (!blank(v)) n++; }); }); if (!blank(raw.prod)) n++; if (!blank(raw.bias)) n++; return n; }
  function pick() { var fi = $('#qiFile'); fi.value = ''; fi.click(); }
  function readFile(fl) {
    var fr = new FileReader();
    fr.onload = function () { try { readXlsx(new Uint8Array(fr.result), fl.name); render(); } catch (e) { toast(e.message || 'Could not read the file'); } };
    fr.readAsArrayBuffer(fl);
  }
  function getAsset(name, cb) {   // file:// pages: XHR works (fetch does not)
    var x = new XMLHttpRequest(); x.open('GET', name, true); x.responseType = 'arraybuffer';
    x.onload = function () { if (x.response && (x.status === 200 || x.status === 0)) cb(new Uint8Array(x.response)); else toast('Could not open ' + name); };
    x.onerror = function () { toast('Could not open ' + name); }; x.send();
  }
  function download(name) { getAsset(name, function (u8) { cx().saveBytes(name, u8, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'); }); }

  // ---------------- missing inputs ----------------
  function detect(raw) {
    var items = [];
    R.mats.forEach(function (m, i) { if (blank(raw.mats[i])) items.push({ id: 'mats.' + i, grp: 'Raw-material usage (wet MT/day)', l: m.l, u: 'MT/day', ref: m.ref, alt: '0 MT/day (material not used)', choice: 'take', hint: m.range }); });
    R.mach.forEach(function (m, i) { if (blank(raw.mach[i])) items.push({ id: 'mach.' + i, grp: 'Sinter machine settings', l: m.l, u: m.u, ref: m.ref, alt: 'plant average ' + fmt(m.avg) + ' ' + m.u + ' (no effect on the prediction)', choice: 'take', hint: m.range }); });
    R.extra.forEach(function (m, i) { if (blank(raw.extra[i])) items.push({ id: 'extra.' + i, grp: 'Parameters not in the DPR', l: m.l, u: m.u, ref: m.ref, alt: 'plant normal ' + fmt(m.avg) + ' ' + m.u + ' (no effect on the prediction)', choice: 'take', hint: m.range }); });
    if (blank(raw.bias)) items.push({ id: 'bias', grp: 'Model', l: 'Apply calibration bias to chemistry?', u: 'Yes/No', ref: R.bias, alt: 'No (pure mass balance)', choice: 'take', hint: '' });
    return items;
  }
  function final() {
    var raw = Q.raw, v = { mats: raw.mats.slice(), mach: raw.mach.slice(), extra: raw.extra.slice(), prod: raw.prod, bias: raw.bias, targets: raw.targets }, src = {};
    ['mats', 'mach', 'extra'].forEach(function (g) { raw[g].forEach(function (x, i) { if (!blank(x)) src[g + '.' + i] = 'user'; }); });
    if (!blank(raw.bias)) src.bias = 'user';
    Q.items.forEach(function (it) {
      var take = it.choice === 'take', a = it.id.split('.');
      if (a[0] === 'bias') { v.bias = take ? R.bias : 'No'; src.bias = take ? 'ref' : 'skip'; return; }
      var g = a[0], i = +a[1];
      v[g][i] = take ? R[g][i].ref : (g === 'mats' ? 0 : R[g][i].avg); src[it.id] = take ? 'ref' : 'skip';
    });
    return { v: v, src: src };
  }

  // ---------------- apply to Sinter Predict and run ----------------
  function calc() {
    if (!Q.raw) return toast('Upload a file or enter values first');
    var c = cx(), S = c.state, F = final(), v = F.v, label = Q.mode === 'upload' ? (Q.fileName || 'Excel upload') : 'Manual entry';
    var use = S.inp.use.map(function () { return 0; });
    v.mats.forEach(function (x, i) { use[i] = +x || 0; });
    S.inp.use = use; S.blendMode = 'mt';
    var mk = { speed: 0, ign: 1, windP: 2, windT: 3, idFan: 4, btp: 5, bfg: 6 };
    Object.keys(mk).forEach(function (k) { var x = +v.mach[mk[k]]; S.inp[k] = k === 'speed' ? c.hzToMpm(x) : x; });
    S.inp.bed = +v.extra[0]; S.inp.moist = +v.extra[1]; S.inp.alk = +v.extra[2];
    S.inp.prodOverride = blank(v.prod) ? null : +v.prod; S.inp.biasOn = v.bias !== 'No';
    R.targets.forEach(function (t, i) { var k = TGT[t.l]; if (k) S.targets[k] = [blank(v.targets[i][0]) ? null : +v.targets[i][0], blank(v.targets[i][1]) ? null : +v.targets[i][1]]; });
    // provenance for the app's own red / green marking
    Object.keys(S.src).forEach(function (k) { if (/^(use|pct|kgt)\.|^(speed|ign|windP|windT|idFan|btp|bfg|bed|moist|alk)$/.test(k)) delete S.src[k]; });
    R.mats.forEach(function (_, i) { if (F.src['mats.' + i] === 'user') S.src['use.' + i] = label; });
    Object.keys(mk).forEach(function (k) { if (F.src['mach.' + mk[k]] === 'user') S.src[k] = label; });
    ['bed', 'moist', 'alk'].forEach(function (k, i) { if (F.src['extra.' + i] === 'user') S.src[k] = label; });
    S.touched = true; S.loaded = label;
    Q.last = { src: F.src, at: Date.now(), label: label }; Q.step = 3; save();
    c.doPredict();
    setTimeout(note, 0);
  }
  function lbl(id) { if (id === 'bias') return 'Calibration bias'; var a = id.split('.'); return R[a[0]][+a[1]].l; }
  function note() {
    if (!Q.last) return; var m = document.getElementById('main'); if (!m || !/results/.test(cx().state.page)) return;
    var s = Q.last.src, u = 0, r = [], k = [];
    Object.keys(s).forEach(function (id) { if (s[id] === 'user') u++; else if (s[id] === 'ref') r.push(lbl(id)); else k.push(lbl(id)); });
    var d = document.createElement('div'); d.className = 'card'; d.style.marginBottom = '12px';
    d.innerHTML = '<div style="display:flex;flex-wrap:wrap;gap:6px;align-items:center"><span class="qi-tag g">' + u + ' your values</span>' + (r.length ? '<span class="qi-tag r">' + r.length + ' from reference</span>' : '') + (k.length ? '<span class="qi-tag n">' + k.length + ' not taken</span>' : '') +
      '<span class="sub" style="margin:0">' + esc(Q.last.label) + '</span></div>' +
      (r.length ? '<p class="sub" style="margin:8px 0 0"><b class="qi-red">Reference:</b> ' + r.map(esc).join(' · ') + '</p>' : '') +
      (k.length ? '<p class="sub" style="margin:6px 0 0"><b>Not taken:</b> ' + k.map(esc).join(' · ') + '</p>' : '') +
      '<button class="btn small ghost" id="qiChg" style="margin-top:8px">Change choices</button>';
    m.insertBefore(d, m.firstChild);
    $('#qiChg').onclick = function () { Q.step = 2; save(); cx().go('input'); };
  }

  // ---------------- page ----------------
  function page(m) {
    if (advanced) { advanced = false; return false; }
    m.innerHTML = '<div id="qiRoot"></div><input type="file" id="qiFile" accept=".xlsx,.xlsm,.xls" hidden>';
    $('#qiFile').addEventListener('change', function () { var f = this.files && this.files[0]; if (f) readFile(f); });
    render(); return true;
  }
  function render() {
    var el = $('#qiRoot'); if (!el) return;
    var s = Q.step === 2 && Q.raw ? 2 : 1;
    el.innerHTML = '<div class="qi-steps"><button data-s="1" class="' + (s === 1 ? 'on' : '') + '"><i>1</i>Inputs</button><button data-s="2" class="' + (s === 2 ? 'on' : '') + '"><i>2</i>Review &amp; fill missing</button><button data-s="3"><i>3</i>Results</button></div>' + (s === 1 ? step1() : step2());
    $$('.qi-steps button', el).forEach(function (b) { b.onclick = function () {
      var n = +b.getAttribute('data-s'); readForm();
      if (n === 3) return calc();
      if (n === 2 && Q.mode === 'manual') return toReview();
      if (n === 2 && !Q.raw) return toast('Upload a file or enter values first');
      Q.step = n; save(); render();
    }; });
    if (s === 1) bind1(); else bind2();
  }
  function step1() {
    var h = '<div class="card"><h2>Inputs</h2><p class="sub">Choose how to give your sinter plant data. Anything you leave blank is listed in the next step, where you decide whether to take the reference value.</p>' +
      '<div class="qi-opts"><button class="qi-opt' + (Q.mode === 'upload' ? ' on' : '') + '" data-m="upload"><b>Upload Excel</b><small>The ' + esc(REF_FILE) + ' layout, Input sheet column D filled with your data</small></button>' +
      '<button class="qi-opt' + (Q.mode === 'manual' ? ' on' : '') + '" data-m="manual"><b>Enter manually</b><small>Type raw-material usage and machine settings</small></button></div>';
    if (Q.mode === 'upload') h += '<button class="qi-drop" id="qiDrop" style="width:100%"><b>Tap to choose the Excel file</b><small>.xlsx · ' + esc(REF_FILE) + ' or the blank template, filled</small></button>' +
      '<p class="sub" style="margin:8px 0 0">' + (Q.raw && Q.fileName ? 'Loaded: <b>' + esc(Q.fileName) + '</b> · ' + countUser(Q.raw) + ' values · ' + Q.items.length + ' missing' : 'No file loaded yet.') + '</p>';
    h += '<div class="qi-links"><button class="qi-lk" data-dl="ref">⤓ Download ' + esc(REF_FILE) + ' <span class="qi-tag r">master</span></button>' +
      '<button class="qi-lk" data-dl="blank">⤓ Download blank input template</button>' +
      '<button class="qi-lk" id="qiAllRef">↺ Use reference input for everything</button>' +
      '<button class="qi-lk" id="qiAdv">⚙ Advanced input (any file type, mapping library, lab results)</button></div>' +
      '<div class="note" style="margin-top:10px"><b class="qi-red">Red</b> = reference (master) value used because you did not give it · <b class="qi-green">Green</b> = your value. In the Excel, type your values in the yellow column D of the Input sheet and leave a cell empty if you do not know it. Targets are read from the Output sheet.</div></div>';
    if (Q.mode === 'manual') h += form() + '<div class="qi-row"><button class="btn ghost" id="qiFill">Fill blanks with reference</button><button class="btn primary" id="qiRev">Review inputs ›</button></div>';
    return h;
  }
  function fld(key, l, u, val, ref, hint) {
    return '<div class="qi-f"><label>' + esc(l) + '<small>' + esc(u || '') + (hint ? ' · ' + esc(hint) : '') + '</small></label><input inputmode="decimal" data-q="' + key + '" value="' + esc(blank(val) ? '' : val) + '" placeholder="' + esc(fmt(ref)) + '"></div>';
  }
  function form() {
    var F = Q.form, tot = F.mats.reduce(function (a, b) { return a + (+b || 0); }, 0);
    var sec = function (t, body, open, cnt) { return '<details class="qi-sec"' + (open ? ' open' : '') + '><summary>' + t + '<span>' + (cnt || '') + '</span></summary><div class="qi-b">' + body + '</div></details>'; };
    var filled = function (a) { return a.filter(function (x) { return !blank(x); }).length + ' / ' + a.length + ' filled'; };
    var h = sec('Raw-material usage (wet MT/day)', R.mats.map(function (m, i) { return fld('mats.' + i, m.l, 'MT/day', F.mats[i], m.ref, m.range); }).join('') +
      '<div class="qi-total" id="qiTot"><span>Total wet charge</span><span>' + Math.round(tot).toLocaleString('en-IN') + ' MT/day</span></div>', true, filled(F.mats));
    h += sec('Sinter machine settings', R.mach.map(function (m, i) { return fld('mach.' + i, m.l, m.u, F.mach[i], m.ref, m.range); }).join(''), false, filled(F.mach));
    h += sec('Parameters not in the DPR', R.extra.map(function (m, i) { return fld('extra.' + i, m.l, m.u, F.extra[i], m.ref, m.range); }).join('') +
      fld('prod', 'Production target override', 'MT/day · leave blank to predict', F.prod, '', '') +
      '<div class="qi-f"><label>Apply calibration bias to chemistry?<small>Yes = shift chemistry by its average error vs DPR</small></label><select data-q="bias"><option' + (F.bias === 'Yes' ? ' selected' : '') + '>Yes</option><option' + (F.bias === 'No' ? ' selected' : '') + '>No</option></select></div>', false, filled(F.extra));
    h += sec('Targets', '<p class="sub" style="margin:6px 0 0">Min / max for each output. Leave empty for no limit.</p>' + R.targets.map(function (t, i) {
      if (!TGT[t.l]) return '';
      return '<div class="qi-f t3"><label>' + esc(t.l) + '<small>' + esc(t.u || '') + '</small></label><input inputmode="decimal" data-q="t.' + i + '.0" value="' + (blank(F.targets[i][0]) ? '' : F.targets[i][0]) + '" placeholder="min"><input inputmode="decimal" data-q="t.' + i + '.1" value="' + (blank(F.targets[i][1]) ? '' : F.targets[i][1]) + '" placeholder="max"></div>';
    }).join(''), false);
    return h;
  }
  function readForm() {
    $$('#qiRoot [data-q]').forEach(function (el) {
      var a = el.getAttribute('data-q').split('.'), v = el.value.trim(), F = Q.form;
      if (a[0] === 't') F.targets[+a[1]][+a[2]] = v === '' ? null : +v;
      else if (a[0] === 'prod') F.prod = v; else if (a[0] === 'bias') F.bias = v;
      else F[a[0]][+a[1]] = v;
    });
    save();
  }
  function toReview() {
    readForm(); var F = Q.form, n = function (x) { return blank(x) || isNaN(+x) ? null : +x; };
    Q.raw = { mats: F.mats.map(n), mach: F.mach.map(n), extra: F.extra.map(n), prod: n(F.prod), bias: F.bias, targets: F.targets };
    Q.fileName = ''; Q.items = detect(Q.raw); Q.step = 2; save(); render(); window.scrollTo(0, 0);
  }
  function bind1() {
    $$('#qiRoot [data-m]').forEach(function (b) { b.onclick = function () { readForm(); Q.mode = b.getAttribute('data-m'); save(); render(); }; });
    var d = $('#qiDrop'); if (d) d.onclick = pick;
    $$('#qiRoot [data-dl]').forEach(function (b) { b.onclick = function () { download(b.getAttribute('data-dl') === 'ref' ? REF_FILE : BLANK_FILE); }; });
    $('#qiAllRef').onclick = function () {
      Q.raw = { mats: R.mats.map(function (m) { return m.ref; }), mach: R.mach.map(function (m) { return m.ref; }), extra: R.extra.map(function (m) { return m.ref; }), prod: null, bias: R.bias, targets: R.targets.map(function (t) { return [t.min, t.max]; }) };
      Q.items = []; Q.fileName = REF_FILE; Q.mode = 'upload'; save(); calc();
      var s = Q.last && Q.last.src; if (s) { Object.keys(s).forEach(function (k) { s[k] = 'ref'; }); save(); }
    };
    $('#qiAdv').onclick = function () { advanced = true; cx().go('input'); };
    var f = $('#qiFill'); if (f) f.onclick = function () {
      readForm(); var F = Q.form, k = 0;
      ['mats', 'mach', 'extra'].forEach(function (g) { F[g] = F[g].map(function (x, i) { if (blank(x)) { k++; return R[g][i].ref; } return x; }); });
      save(); render(); toast(k + ' blanks filled with reference values');
    };
    var r = $('#qiRev'); if (r) r.onclick = toReview;
    $$('#qiRoot [data-q^="mats."]').forEach(function (el) { el.addEventListener('input', function () {
      readForm(); var t = Q.form.mats.reduce(function (a, b) { return a + (+b || 0); }, 0), e = $('#qiTot'); if (e) e.lastChild.textContent = Math.round(t).toLocaleString('en-IN') + ' MT/day';
    }); });
  }
  function step2() {
    var it = Q.items, u = countUser(Q.raw), t = it.filter(function (x) { return x.choice === 'take'; }).length;
    var h = '<div class="card"><h2>Review &amp; fill missing</h2><p class="sub">' + (Q.mode === 'upload' && Q.fileName ? 'From <b>' + esc(Q.fileName) + '</b>. ' : 'From the manual entry. ') +
      (it.length ? 'These inputs were not given. For each one, take the reference (master) value or leave it out; the line under each says what is used if you do not take it.' : 'All inputs are given. Nothing is taken from the reference data.') + '</p>' +
      '<div class="qi-sum"><div><b class="qi-green">' + u + '</b><small>your values</small></div><div><b class="qi-red">' + t + '</b><small>take reference</small></div><div><b>' + (it.length - t) + '</b><small>don\'t take</small></div></div>' +
      (it.length ? '<div class="qi-row"><button class="btn small ghost qi-red" id="qiTakeAll">Take all reference values</button><button class="btn small ghost" id="qiSkipAll">Don\'t take any</button></div>' : '') + '</div>';
    var groups = {}; it.forEach(function (x, i) { (groups[x.grp] = groups[x.grp] || []).push(i); });
    Object.keys(groups).forEach(function (g) {
      h += '<details class="qi-sec" open><summary>' + esc(g) + '<span>' + groups[g].length + '</span></summary><div class="qi-b">' + groups[g].map(function (i) {
        var x = it[i];
        return '<div class="qi-rv"><div class="lb">' + esc(x.l) + '<small>Reference: <b class="qi-red">' + esc(fmt(x.ref)) + '</b> ' + esc(x.u) + (x.hint ? ' · typical ' + esc(x.hint) : '') + '</small><small>Don\'t take → ' + esc(x.alt) + '</small></div>' +
          '<div class="qi-seg"><button class="take' + (x.choice === 'take' ? ' on' : '') + '" data-i="' + i + '" data-c="take">Take reference</button><button class="skip' + (x.choice === 'skip' ? ' on' : '') + '" data-i="' + i + '" data-c="skip">Don\'t take</button></div></div>';
      }).join('') + '</div></details>';
    });
    h += '<div class="qi-row"><button class="btn ghost" id="qiBack">‹ Back to inputs</button><button class="btn primary" id="qiCalc">▶ Predict sinter quality</button></div>';
    return h;
  }
  function bind2() {
    $$('#qiRoot .qi-seg button').forEach(function (b) { b.onclick = function () { Q.items[+b.getAttribute('data-i')].choice = b.getAttribute('data-c'); save(); var y = window.scrollY; render(); window.scrollTo(0, y); }; });
    var a = $('#qiTakeAll'); if (a) a.onclick = function () { Q.items.forEach(function (x) { x.choice = 'take'; }); save(); render(); };
    var s = $('#qiSkipAll'); if (s) s.onclick = function () { Q.items.forEach(function (x) { x.choice = 'skip'; }); save(); render(); };
    $('#qiBack').onclick = function () { Q.step = 1; save(); render(); };
    $('#qiCalc').onclick = calc;
  }
  window.SinterQuick = { page: page, state: function () { return Q; }, readXlsx: readXlsx, calc: calc };
})();
