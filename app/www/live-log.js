/* Iron Making 6.3.9 · Live prediction: coke, hot metal, slag and liquid in the furnace, from time 0.
   Used in three places: mode 'blowdown' (blow-down planner), 'blowin' (blow-in planner), 'normal' (BF Model › Live BF log).
   1. Furnace & burden at time 0: working volume, working height, stock level, burden make-up, liquid in the hearth.
   2. Operation: blast, O2, moisture, PCI, coke fixed carbon, raceway coke, coke rate, fuel rate, slag rate.
      Typed by hand or read from an Excel / CSV / Word / PDF file (label + value).
   3. Confirm: the clock starts at time 0. The prediction runs live (hourly table or time-left view).
   4. Taps: the user records hot metal and slag tapped; the module shows what is left in the furnace.
   Model (per step):
     O2 = blast × 60 × (0.21 + enrichment/100) Nm3/h;   steam = blast × 60 × moisture/1000/18.015 × 22.414 Nm3/h
     raceway C = O2 × 2 × 12.011/22.414 + steam × 12.011/22.414;   coke C = raceway C − PCI × C%
     coke burnt at tuyeres (t/h) = coke C / (1000 × FC)          hot metal (t/h) = coke burnt × 1000 / raceway coke (kg/tHM)
     coke used (t/h) = max(coke burnt, HM × coke rate/1000)       burden used (t/h) = HM × Fe(HM)/Fe(burden)
     slag (t/h) = HM × slag rate/1000                             stock level: burden volume / (working volume / working height)
     liquid in furnace = start liquid + made − tapped */
(function () {
  'use strict';
  var MV = 22.414, MC = 12.011, MW = 18.015;
  function num(v) { return v !== '' && v != null && isFinite(+v); }
  function N(v) { return num(v) ? +v : 0; }
  function f(v, d) { if (!num(v)) return '—'; return (+v).toLocaleString('en-IN', { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 }); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function pad(n) { return ('0' + n).slice(-2); }
  function iso(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + 'T' + pad(d.getHours()) + ':' + pad(d.getMinutes()); }
  function tms(s) { var t = Date.parse(s); return isNaN(t) ? null : t; }
  function clock(ms) { var d = new Date(ms); return pad(d.getDate()) + '/' + pad(d.getMonth() + 1) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes()); }
  function dur(h) { if (!num(h)) return '—'; if (h < 0) return '0 min'; var m = Math.round(h * 60), d = Math.floor(m / 1440); m -= d * 1440; return (d ? d + ' d ' : '') + Math.floor(m / 60) + ' h ' + pad(m % 60) + ' min'; }

  /* inputs: [key, label, unit, default, group, modes (optional)] */
  var SETUP = [
    ['vw', 'Working volume', 'm³', 1500], ['hw', 'Working height (stockline zero to tuyeres)', 'm', 20], ['sl0', 'Stock level at time 0', 'm below zero', 1.5],
    ['cv', 'Coke share of burden volume', '%', 55], ['rc', 'Coke bulk density', 't/m³', 0.5], ['ro', 'Ore burden bulk density', 't/m³', 1.8],
    ['coke0', 'Coke in furnace at time 0 (blank = from volume)', 't', ''], ['feo', 'Fe in ore burden', '%', 57], ['feh', 'Fe in hot metal', '%', 94.5],
    ['hm0', 'Hot metal in furnace at time 0', 't', 0], ['sg0', 'Slag in furnace at time 0', 't', 0], ['cap', 'Liquid hot metal that calls for a cast', 't', 150],
    ['slEnd', 'Blow-down end: stock level', 'm below zero', '', null, ['blowdown']]];
  var OPS = [
    ['q', 'Blast volume', 'Nm³/min', 3000], ['o2', 'Oxygen enrichment', '% points', 2], ['mo', 'Blast moisture', 'g/Nm³', 15], ['pci', 'PCI', 't/h', 0],
    ['fc', 'Coke fixed carbon', '%', 86.5], ['rck', 'Raceway coke', 'kg/tHM', 340], ['cr', 'Coke rate', 'kg/tHM', 480], ['fr', 'Fuel rate (blank = coke + PCI)', 'kg/tHM', ''],
    ['sr', 'Slag rate', 'kg/tHM', 320], ['pcic', 'PCI carbon', '%', 78], ['keep', 'Charge to keep the stock level (1 = yes, 0 = no)', '1/0', 1, null, ['blowin', 'normal']], ['chs', 'Charging starts after', 'h from time 0', 3, null, ['blowin']]];
  var MODES = {
    blowdown: { title: 'Blow-down live prediction', t0: 'Blow-down start (time 0)', lead: 'Enter the furnace stock level and burden when the blow-down starts, and the blast you will blow. Confirm to start: the app predicts, hour by hour from time 0, the stock level, the coke and burden left and the hot metal and slag made. Record each tap as it happens.' },
    blowin: { title: 'Blow-in live prediction', t0: 'Light-up / blast on (time 0)', lead: 'Enter the filled furnace (working volume, stock level, fill coke) and the blast plan. Confirm at blast-on: the app predicts, hour by hour from time 0, the coke burnt and the hot metal and slag made. Record each tap as it happens.' },
    normal: { title: 'Live BF prediction', t0: 'Prediction start (time 0)', lead: 'Enter the furnace state at time 0 and today\'s operation. Confirm to start: the app predicts, live, hot metal and slag made, coke burnt and charged, and the liquid still in the furnace after each tap, with the time to the next cast.' }
  };
  function use(d, mode) { return !d[5] || d[5].indexOf(mode) >= 0; }

  var CSS = '.lp{color:var(--ink,#eaf1f7);font:15px/1.5 var(--f-body,system-ui)}.lp *{box-sizing:border-box}.lp .bx{margin:12px 0;padding:14px;border-radius:16px;border:1px solid var(--line,#22344a);background:var(--surface,rgba(11,31,56,.85))}' +
    '.lp h3{margin:0 0 6px;font:700 18px/1.15 var(--f-display,system-ui);letter-spacing:.05em;text-transform:uppercase;color:#fff}.lp h4{margin:12px 0 6px;font:700 12px var(--f-mono,monospace);letter-spacing:.1em;text-transform:uppercase;color:#ffb547}.lp .lead{margin:0 0 6px;color:var(--ink-2,#b7c5d3);font-size:14px}' +
    '.lp .hero{border:1px solid rgba(42,245,196,.5);background:radial-gradient(120% 140% at 0 0,rgba(42,245,196,.22),transparent 55%),radial-gradient(120% 140% at 100% 100%,rgba(58,168,255,.22),transparent 55%),#071a2c}' +
    '.lp .fg{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px 10px}@media(min-width:720px){.lp .fg{grid-template-columns:repeat(4,minmax(0,1fr))}}' +
    '.lp label{display:flex;flex-direction:column;justify-content:flex-end;gap:3px;font-size:12.5px;color:var(--ink-2,#b7c5d3)}.lp label small{color:var(--muted,#8fa1b4);font-size:11px}' +
    '.lp input{width:100%;min-height:42px;padding:8px 10px;border-radius:10px;border:1px solid var(--line,#2a4a70);background:rgba(4,12,23,.7);color:var(--ink,#eaf1f7);font:16px var(--f-body,system-ui)}.lp input:disabled{opacity:.6}.lp input:focus{outline:2px solid rgba(255,181,71,.6);border-color:transparent}' +
    '.lp .row{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;align-items:center}.lp button{min-height:42px;padding:8px 14px;border-radius:10px;border:1px solid var(--line,#2a4a70);background:rgba(4,12,23,.5);color:var(--ink,#eaf1f7);font:600 14px var(--f-body,system-ui);cursor:pointer}' +
    '.lp button.p{background:linear-gradient(90deg,#ff7a1a,#ffc23d);color:#2a1200;border:0}.lp button.go{background:linear-gradient(90deg,#2af5c4,#19b3b1 45%,#3aa8ff);color:#032a2a;border:0;font-weight:700;min-height:50px;padding:10px 22px;font-size:16px}.lp button.s{min-height:32px;padding:4px 9px;font-size:12px}' +
    '.lp .clk{display:flex;flex-wrap:wrap;gap:6px 18px;align-items:baseline}.lp .clk b{font:700 34px/1 var(--f-mono,monospace);color:#2af5c4}.lp .clk span{font-size:13px;color:var(--ink-2,#b7c5d3)}.lp .live{display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:99px;background:#ff2d55;color:#fff;font:700 11px/1.5 var(--f-mono,monospace);letter-spacing:.1em}.lp .live i{width:7px;height:7px;border-radius:50%;background:#fff;animation:lpb 1.2s infinite}@keyframes lpb{50%{opacity:.25}}' +
    '.lp .kp{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}@media(min-width:720px){.lp .kp{grid-template-columns:repeat(4,minmax(0,1fr))}}' +
    '.lp .k{padding:10px 12px;border-radius:12px;background:rgba(4,12,23,.55);border:1px solid var(--line,#22344a);border-left:4px solid var(--c,#ffb547)}.lp .k small{display:block;font:600 11px/1.2 var(--f-mono,monospace);letter-spacing:.04em;text-transform:uppercase;color:var(--muted,#8fa1b4)}' +
    '.lp .k b{display:block;font:700 26px/1.1 var(--f-display,system-ui);color:#fff}.lp .k span{font-size:12px;color:var(--ink-2,#b7c5d3)}.lp .k.warn{border-color:#ff6a5a;background:rgba(60,10,10,.45)}' +
    '.lp .seg{display:inline-flex;border:1px solid var(--line,#2a4a70);border-radius:12px;overflow:hidden}.lp .seg button{border:0;border-radius:0;min-width:110px}.lp .seg button.on{background:linear-gradient(90deg,#2af5c4,#3aa8ff);color:#032a2a;font-weight:700}' +
    '.lp .tw{overflow-x:auto;margin-top:8px;max-height:460px}.lp table{border-collapse:collapse;width:100%;font-size:13px;white-space:nowrap}.lp th,.lp td{padding:7px 8px;border-bottom:1px solid rgba(34,52,74,.8);text-align:right}.lp th{font:600 11px var(--f-mono,monospace);text-transform:uppercase;color:var(--muted,#8fa1b4);position:sticky;top:0;background:#0b1a2b}' +
    '.lp td:first-child,.lp th:first-child{text-align:left}.lp tr.now td{background:rgba(42,245,196,.14);font-weight:700}.lp tr.past td{color:var(--muted,#8fa1b4)}.lp .msg{min-height:20px;font-size:13px;color:#7fe0b8;margin-top:6px}.lp .msg.e{color:#ff8a7a}' +
    '.lp .tl{display:grid;gap:10px}@media(min-width:720px){.lp .tl{grid-template-columns:repeat(2,minmax(0,1fr))}}.lp .tl .k b{font-size:30px;color:#2af5c4}' +
    '.lp details{margin:12px 0;border-radius:14px;border:1px solid var(--line,#22344a);background:rgba(11,31,56,.6)}.lp summary{padding:12px 14px;font-weight:700;cursor:pointer}.lp details>div{padding:0 14px 14px}' +
    '.lp .how div{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:2px 10px;padding:6px 0;border-top:1px solid rgba(34,52,74,.7);font-size:13px}.lp .how small{grid-column:1/-1;color:#9fe6e3;font:500 11.5px var(--f-mono,monospace)}.lp .how b{font-family:var(--f-mono,monospace);color:#ffd9a8}' +
    '.lp .lock{font-size:12.5px;color:#ffd27a}.lp .imp-wrap{margin:12px 0;padding:12px;border-radius:14px;border:1px dashed rgba(42,245,196,.45);background:rgba(42,245,196,.05)}.lp .imp h2{margin:0;font:700 15px var(--f-display,system-ui);letter-spacing:.05em;text-transform:uppercase;color:#9fe6e3}.lp .imp .btn{display:inline-flex;align-items:center;min-height:42px;padding:8px 14px;border-radius:10px;border:1px solid #2a4a70;background:rgba(4,12,23,.6);color:#eaf1f7;font:600 14px var(--f-body,system-ui);cursor:pointer}.lp .imp .btn.primary{background:linear-gradient(90deg,#ff7a1a,#ffc23d);color:#2a1200;border:0}.lp .imp .hint{font-size:12.5px;color:var(--ink-2,#b7c5d3)}';

  function mount(el, opt) {
    if (!el) return null;
    if (!document.getElementById('lpcss')) { var st = document.createElement('style'); st.id = 'lpcss'; st.textContent = CSS; document.head.appendChild(st); }
    var mode = opt.mode, M = MODES[mode], KEY = opt.key, ID = 'lp' + mode, S = load(), view = S.view || 'time', ticker = null;
    function load() { var o = null; try { o = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { } o = o && o.v === 2 ? o : { v: 2 }; o.set = o.set || {}; o.ops = o.ops || {}; o.segs = o.segs || []; o.taps = o.taps || []; return o; }
    function save() { S.view = view; try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { } }
    function defs() { var p = {}; try { p = (opt.prefill && opt.prefill()) || {}; } catch (e) { } return p; }
    function val(d, src) { var u = src[d[0]]; if (num(u)) return +u; var p = defs()[d[0]]; return num(p) ? +p : d[3]; }
    function setup() { var o = {}; SETUP.forEach(function (d) { if (use(d, mode)) o[d[0]] = val(d, S.set); }); o.slEnd = num(S.set.slEnd) ? +S.set.slEnd : o.hw; return o; }
    function opsNow() { var o = {}; OPS.forEach(function (d) { if (use(d, mode)) o[d[0]] = val(d, S.ops); }); if (mode === 'blowdown') o.keep = 0; if (mode === 'normal') o.chs = 0; return o; }

    /* ---------- the model ---------- */
    function rates(p) {
      var fc = (N(p.fc) || 86.5) / 100, q = N(p.q), o2 = q * 60 * (0.21 + N(p.o2) / 100), stm = q * 60 * N(p.mo) / 1000 / MW * MV;
      var cO2 = o2 * 2 * MC / MV, cSt = stm * MC / MV, cR = cO2 + cSt, cP = N(p.pci) * 1000 * N(p.pcic) / 100, cC = Math.max(0, cR - cP);
      var burn = cC / (1000 * fc), hm = N(p.rck) > 0 ? burn * 1000 / N(p.rck) : 0;
      var pciR = hm > 0 ? N(p.pci) * 1000 / hm : 0, cr = num(p.cr) && +p.cr > 0 ? +p.cr : (num(p.fr) ? Math.max(0, p.fr - pciR) : N(p.rck));
      var use = Math.max(burn, hm * cr / 1000), sl = hm * N(p.sr) / 1000;
      return { o2: o2, stm: stm, cO2: cO2, cSt: cSt, cR: cR, cP: cP, cC: cC, burn: burn, hm: hm, cr: cr, pciR: pciR, fr: cr + pciR, use: use, sl: sl, fc: fc };
    }
    function sim(toH, stepH) {
      var F = setup(), A = F.vw / Math.max(0.1, F.hw), vol0 = Math.max(0, A * (F.hw - F.sl0));
      var coke = num(F.coke0) ? +F.coke0 : vol0 * N(F.cv) / 100 * F.rc, ore = Math.max(0, (vol0 - coke / F.rc)) * F.ro, coke0 = coke;
      var s = { h: 0, burnC: 0, useC: 0, chC: 0, coke: coke, ore: ore, hm: 0, sl: 0, oreUse: 0 }, out = [snap(s, F, A)], ev = {}, segs = S.segs.length ? S.segs : [{ t: 0, p: opsNow() }];
      var dt = stepH || 0.05;
      for (var h = 0; h < toH - 1e-9; h += dt) {
        var p = segs[0].p; for (var i = 0; i < segs.length; i++) if (segs[i].t <= h + 1e-9) p = segs[i].p;
        var r = rates(p), d = Math.min(dt, toH - h), keep = N(p.keep) === 1 && h >= N(p.chs);
        var hm = r.hm, burn = r.burn, useC = r.use, oreU = hm * N(F.feh) / Math.max(1, N(F.feo));
        if (!keep && s.ore <= 0) { hm = 0; oreU = 0; useC = burn; }
        if (!keep && s.coke <= 0) { burn = 0; useC = 0; hm = 0; oreU = 0; }
        s.burnC += burn * d; s.useC += useC * d; s.hm += hm * d; s.sl += hm * N(p.sr) / 1000 * d; s.oreUse += oreU * d;
        if (keep) { s.chC += useC * d; } else { s.coke = Math.max(0, s.coke - useC * d); s.ore = Math.max(0, s.ore - oreU * d); }
        s.h = h + d;
        var o = snap(s, F, A); out.push(o);
        if (ev.coke == null && coke0 > 0 && s.burnC >= coke0) ev.coke = s.h;
        if (mode === 'blowdown' && ev.end == null && o.stock >= F.slEnd - 1e-6) ev.end = s.h;
        if (mode === 'blowdown' && ev.cokeOut == null && !keep && s.coke <= 0) ev.cokeOut = s.h;
      }
      return { out: out, F: F, A: A, coke0: coke0, ore0: ore, vol0: vol0, ev: ev };
    }
    function snap(s, F, A) { var vol = s.coke / F.rc + s.ore / F.ro; return { h: s.h, burnC: s.burnC, useC: s.useC, chC: s.chC, coke: s.coke, ore: s.ore, hm: s.hm, sl: s.sl, stock: Math.max(0, F.hw - vol / A) }; }
    function tapped(hFrom0) { var t0 = tms(S.t0), a = { hm: 0, sl: 0, n: 0 }; S.taps.forEach(function (x) { var h = (tms(x.at) - t0) / 3600000; if (h <= hFrom0 + 1e-9) { a.hm += N(x.hm); a.sl += N(x.sl); a.n++; } }); return a; }
    function at(R, h) { var o = R.out, i = Math.max(0, Math.min(o.length - 1, Math.round(h / 0.05))); return o[i]; }
    function nowH() { var t0 = tms(S.t0); return t0 == null ? 0 : (Date.now() - t0) / 3600000; }

    /* ---------- rendering ---------- */
    function render() {
      var h = '<div class="lp" id="' + ID + '">';
      h += '<div class="bx hero"><h3>' + esc(M.title) + '</h3><p class="lead">' + esc(M.lead) + '</p>' + (S.on ? statusBar() : '<p class="lock">Step 1: fill the inputs below (or import a file). Step 2: tap <b>Confirm and start</b>.</p>') + '</div>';
      if (S.on) h += '<div id="' + ID + 'dash">' + dash() + '</div>';
      if (S.on) h += tapsBox();
      h += inputsBox();
      h += '</div>';
      el.innerHTML = h; bind();
      if (!S.on && window.BFImport && document.getElementById(ID + 'imp')) { try { BFImport.mount({ card: ID + 'imp', scope: ID + 'in', after: function () { readInputs(); save(); } }); } catch (e) { } }
      clearInterval(ticker); if (S.on) ticker = setInterval(tick, 1000);
    }
    function statusBar() {
      var t0 = tms(S.t0), e = nowH();
      return '<div class="clk"><span class="live"><i></i>LIVE</span><span>Time 0: <b style="font-size:15px;color:#fff">' + clock(t0) + '</b></span></div><div class="clk" style="margin-top:6px"><b id="' + ID + 'clk">' + (e < 0 ? '−' : '') + hms(Math.abs(e)) + '</b><span>' + (e < 0 ? 'until time 0' : 'since time 0') + '</span></div>';
    }
    function hms(hh) { var s = Math.floor(hh * 3600), H = Math.floor(s / 3600); s -= H * 3600; return pad(H) + ':' + pad(Math.floor(s / 60)) + ':' + pad(s % 60); }
    var lastDash = 0;
    function tick() { var c = document.getElementById(ID + 'clk'); if (!c) { clearInterval(ticker); return; } var e = nowH(); c.textContent = (e < 0 ? '−' : '') + hms(Math.abs(e)); if (Date.now() - lastDash > 15000) { var d = document.getElementById(ID + 'dash'); if (d) { d.innerHTML = dash(); bindDash(); } } }

    function dash() {
      lastDash = Date.now();
      var e = Math.max(0, nowH()), F = setup(), horizon = Math.max(e + 48, 24), R = sim(Math.min(horizon, 24 * 30)), o = at(R, e), tp = tapped(e);
      var p = curOps(), r = rates(p), liqHM = N(F.hm0) + o.hm - tp.hm, liqSl = N(F.sg0) + o.sl - tp.sl;
      var hz = '';
      if (false) hz += '<div class="kp" style="margin-top:10px">' +
        k('#ff4d3d', 'Liquid hot metal in furnace', f(Math.max(0, liqHM), 0) + ' t', 'start ' + f(F.hm0, 0) + ' + made ' + f(o.hm, 0) + ' − tapped ' + f(tp.hm, 0), liqHM >= N(F.cap)) +
        k('#c9a227', 'Liquid slag in furnace', f(Math.max(0, liqSl), 0) + ' t', 'start ' + f(F.sg0, 0) + ' + made ' + f(o.sl, 0) + ' − tapped ' + f(tp.sl, 0)) +
        k('#8fd3ff', mode === 'blowdown' ? 'Coke left in furnace' : 'Coke in furnace', f(o.coke, 0) + ' t', mode === 'blowdown' ? 'from ' + f(R.coke0, 0) + ' t at time 0' : 'charged so far ' + f(o.chC, 0) + ' t') +
        k('#ff7a1a', 'Coke burnt at tuyeres', f(o.burnC, 0) + ' t', 'now ' + f(r.burn, 1) + ' t/h · used incl. solution loss ' + f(o.useC, 0) + ' t') +
        k('#ff9a8a', 'Hot metal made', f(o.hm, 0) + ' t', 'now ' + f(r.hm, 0) + ' t/h · ' + f(r.hm * 24, 0) + ' t/day') +
        k('#ffd27a', 'Slag made', f(o.sl, 0) + ' t', 'now ' + f(r.sl, 0) + ' t/h') +
        k('#2af5c4', 'Stock level', f(o.stock, 2) + ' m', 'below zero · started at ' + f(F.sl0, 2) + ' m') +
        k('#a78bfa', 'Taps recorded', tp.n + '', 'HM ' + f(tp.hm, 0) + ' t · slag ' + f(tp.sl, 0) + ' t') +
        '</div>';
      hz += hourly(R, e, F);
      hz += howBox(r, p);
      return hz;
    }
    function curOps() { var e = Math.max(0, nowH()), p = S.segs.length ? S.segs[0].p : opsNow(); S.segs.forEach(function (s) { if (s.t <= e) p = s.p; }); return p; }
    function k(c, t, v, sub, warn) { return '<div class="k' + (warn ? ' warn' : '') + '" style="--c:' + c + '"><small>' + esc(t) + '</small><b>' + v + '</b><span>' + sub + '</span></div>'; }
    function timeLeft(R, e, F, liqHM, r) {
      var t0 = tms(S.t0), ev = R.ev, cards = '', at2 = function (h) { return h == null ? '' : ' · at ' + clock(t0 + h * 3600000); };
      var castIn = r.hm > 0 ? (N(F.cap) - liqHM) / r.hm : null;
      cards += k('#ff4d3d', mode === 'blowin' && tapped(e).n === 0 ? 'First cast due in' : 'Next cast due in', castIn == null ? '—' : castIn <= 0 ? 'NOW' : dur(castIn), 'liquid reaches ' + f(F.cap, 0) + ' t HM' + (castIn != null && castIn > 0 ? at2(e + castIn) : ''), castIn != null && castIn <= 0.25);
      if (mode === 'blowdown') {
        cards += k('#2af5c4', 'Blow-down end (stock level ' + f(F.slEnd, 1) + ' m) in', ev.end == null ? '> ' + dur(R.out[R.out.length - 1].h - e) : ev.end <= e ? 'reached' : dur(ev.end - e), ev.end == null ? 'not reached in the window' : at2(ev.end));
        cards += k('#8fd3ff', 'Coke in furnace runs out in', ev.cokeOut == null ? (ev.end != null ? 'after the end' : '—') : dur(ev.cokeOut - e), ev.cokeOut != null ? at2(ev.cokeOut) : 'coke lasts beyond the end stock level');
        var o = at(R, e), ra = r.use > 0 ? o.coke / r.use : null; cards += k('#ffd27a', 'At today\'s rate, coke lasts', dur(ra), f(o.coke, 0) + ' t ÷ ' + f(r.use, 1) + ' t/h');
      } else if (mode === 'blowin') {
        cards += k('#8fd3ff', 'Fill coke burnt through in', ev.coke == null ? '—' : ev.coke <= e ? 'done' : dur(ev.coke - e), ev.coke != null ? 'fill ' + f(R.coke0, 0) + ' t' + at2(ev.coke) : 'set the fill coke');
        cards += k('#ffd27a', 'Hot metal in the next 8 h', f(r.hm * 8, 0) + ' t', 'slag ' + f(r.sl * 8, 0) + ' t · coke burnt ' + f(r.burn * 8, 0) + ' t');
        cards += k('#7fe0b8', 'Coke to charge', f(r.hm * r.cr / 1000, 1) + ' t/h', 'at ' + f(r.cr, 0) + ' kg/tHM coke rate');
      } else {
        cards += k('#ffd27a', 'Hot metal in the next 8 h', f(r.hm * 8, 0) + ' t', 'slag ' + f(r.sl * 8, 0) + ' t · ' + f(r.hm * 24, 0) + ' t/day');
        cards += k('#7fe0b8', 'Coke to charge', f(r.hm * r.cr / 1000, 1) + ' t/h', 'coke rate ' + f(r.cr, 0) + ' · fuel rate ' + f(r.fr, 0) + ' kg/tHM');
        cards += k('#8fd3ff', 'Burden to charge', f(r.hm * N(F.feh) / Math.max(1, N(F.feo)), 0) + ' t/h', 'Fe ' + f(F.feo, 1) + ' % burden');
      }
      return '<div class="bx"><h3>Time left</h3><div class="tl">' + cards + '</div><p class="lead" style="font-size:12px;margin-top:8px">Counted from now with the operation in use. If the blast changes, change the operation below and tap <b>Apply operation from now</b>.</p></div>';
    }
    function hourly(R, e, F) {
      var t0 = tms(S.t0), last = R.out[R.out.length - 1].h, endH = mode === 'blowdown' && R.ev.end != null ? Math.min(last, Math.ceil(R.ev.end)) : Math.min(last, Math.ceil(e) + 24), rows = '';
      for (var hh = 0; hh <= endH + 1e-9; hh++) {
        var o = at(R, hh), tp = tapped(hh), cls = hh <= e && e < hh + 1 ? 'now' : hh + 1 <= e ? 'past' : '';
        rows += '<tr class="' + cls + '"><td>' + clock(t0 + hh * 3600000) + '</td><td>' + hh + '</td><td>' + f(o.burnC, 0) + '</td><td>' + f(o.coke, 0) + '</td><td>' + f(o.stock, 2) + '</td><td>' + f(o.hm, 0) + '</td><td>' + f(tp.hm, 0) + '</td><td>' + f(Math.max(0, N(F.hm0) + o.hm - tp.hm), 0) + '</td><td>' + f(o.sl, 0) + '</td><td>' + f(Math.max(0, N(F.sg0) + o.sl - tp.sl), 0) + '</td></tr>';
      }
      return '<div class="bx"><h3>Hourly prediction · ' + dur(e) + ' after time 0</h3><div class="tw"><table><thead><tr><th>Time</th><th>h</th><th>Coke burnt Σ t</th><th>Coke in furnace t</th><th>Stock m</th><th>HM made Σ t</th><th>HM tapped Σ t</th><th>Liquid HM t</th><th>Slag made Σ t</th><th>Liquid slag t</th></tr></thead><tbody>' + rows +
        '</tbody></table></div><div class="row"><button data-a="csv">Export CSV (Excel)</button></div></div>';
    }
    function howBox(r, p) {
      return '<details><summary>How it is calculated (operation in use)</summary><div class="how">' +
        ln('O₂ in blast', f(r.o2, 0) + ' Nm³/h', f(p.q, 0) + ' Nm³/min × 60 × (0.21 + ' + f(p.o2, 1) + '/100)') +
        ln('Raceway carbon', f(r.cR, 0) + ' kg/h', 'O₂ × 2 × 12.011/22.414 + steam ' + f(r.stm, 0) + ' Nm³/h × 12.011/22.414') +
        ln('PCI carbon', '− ' + f(r.cP, 0) + ' kg/h', f(p.pci, 1) + ' t/h × ' + f(p.pcic, 1) + ' %') +
        ln('Coke burnt at tuyeres', f(r.burn, 2) + ' t/h', f(r.cC, 0) + ' kg C ÷ (1000 × ' + f(p.fc, 1) + ' % FC)') +
        ln('Hot metal make', f(r.hm, 1) + ' t/h', 'coke burnt × 1000 ÷ raceway coke ' + f(p.rck, 0) + ' kg/tHM') +
        ln('Coke used', f(r.use, 2) + ' t/h', 'max(coke burnt, HM × coke rate ' + f(r.cr, 0) + ' kg/tHM)' + (num(p.fr) && !(num(p.cr) && +p.cr > 0) ? ' · coke rate = fuel rate − PCI ' + f(r.pciR, 0) : '')) +
        ln('Slag make', f(r.sl, 1) + ' t/h', 'HM × slag rate ' + f(p.sr, 0) + ' kg/tHM') +
        ln('Liquid in furnace', 'start + made − tapped', 'taps you record are taken off at their time') +
        '</div></details>';
    }
    function ln(a, b, c) { return '<div><span>' + a + '</span><b>' + b + '</b><small>' + c + '</small></div>'; }
    function tapsBox() {
      var list = S.taps.slice().sort(function (a, b) { return tms(b.at) - tms(a.at); });
      return '<div class="bx"><h3>Taps · hot metal and slag tapped</h3><p class="lead">Record each tap. Leave slag blank to take it from the slag rate (hot metal × slag rate), or type the measured slag if you have it.</p><div class="fg">' +
        '<label>Tap time<input data-t="at" type="datetime-local" value="' + iso(new Date()) + '"></label><label>Hot metal tapped <small>t</small><input data-t="hm" inputmode="decimal"></label><label>Slag tapped <small>t · blank = from slag rate</small><input data-t="sl" inputmode="decimal" placeholder="auto"></label><label>Note<input data-t="note" type="text" maxlength="80"></label></div>' +
        '<div class="row"><button class="p" data-a="tap">Record tap</button></div><div class="msg" id="' + ID + 'tmsg"></div>' +
        (list.length ? '<div class="tw"><table><thead><tr><th>Tap time</th><th>HM t</th><th>Slag t</th><th>Note</th><th></th></tr></thead><tbody>' + list.map(function (x) { return '<tr><td>' + clock(tms(x.at)) + '</td><td>' + f(x.hm, 0) + '</td><td>' + f(x.sl, 0) + (x.auto ? ' <small style="color:#8fa1b4">auto</small>' : '') + '</td><td style="text-align:left">' + esc(x.note || '') + '</td><td><button class="s" data-dt="' + esc(x.at) + '">✕</button></td></tr>'; }).join('') + '</tbody></table></div>' : '') + '</div>';
    }
    function inputsBox() {
      var lock = S.on, F = function (list, src, grp) {
        return '<div class="fg">' + list.filter(function (d) { return use(d, mode); }).map(function (d) {
          var u = src[d[0]], p = defs()[d[0]], ph = num(p) ? p : d[3];
          return '<label>' + esc(d[1]) + ' <small>' + esc(d[2]) + '</small><input type="number" step="any" id="' + ID + '_' + grp + '_' + d[0] + '" data-g="' + grp + '" data-k="' + d[0] + '" aria-label="' + esc(d[1]) + '" value="' + esc(num(u) ? u : (ph === '' ? '' : ph)) + '"' + (lock && grp === 's' ? ' disabled' : '') + '></label>';
        }).join('') + '</div>';
      };
      var h = '<div class="bx" id="' + ID + 'in"><h3>' + (S.on ? 'Inputs in use' : 'Inputs') + '</h3>';
      if (!S.on) h += '<div class="imp-wrap box" id="' + ID + 'imp"></div>';
      h += '<label style="max-width:320px">' + esc(M.t0) + '<input type="datetime-local" data-t0 value="' + esc(S.t0 || iso(new Date())) + '"' + (lock ? ' disabled' : '') + '></label>';
      h += '<h4>1 · Furnace &amp; burden at time 0</h4>' + F(SETUP, S.set, 's');
      h += '<h4>2 · Operation</h4>' + F(OPS, S.ops, 'o');
      h += '<div class="row">' + (S.on ? '<button class="p" data-a="apply">Apply operation from now</button><button data-a="restart">Stop &amp; edit time 0 / furnace</button>' : '<button class="go" data-a="go">Confirm and start ▶</button><button data-a="reset">Reset inputs</button>') + '</div><div class="msg" id="' + ID + 'msg"></div>';
      if (S.on) h += '<p class="lock">Time 0 and the furnace inputs are locked while the prediction runs. Operation changes apply from the moment you tap Apply.</p>';
      return h + '</div>';
    }
    function readInputs() {
      el.querySelectorAll('[data-g]').forEach(function (i) { if (i.disabled) return; var g = i.getAttribute('data-g') === 's' ? S.set : S.ops, kk = i.getAttribute('data-k'), v = i.value.trim(); if (v === '') g[kk] = ''; else if (isFinite(+v)) g[kk] = +v; });
      var t = el.querySelector('[data-t0]'); if (t && !t.disabled) S.t0 = t.value;
    }
    function msg(t, e, id) { var m = document.getElementById(id || ID + 'msg'); if (m) { m.textContent = t; m.className = 'msg' + (e ? ' e' : ''); } }
    function bindDash() {
      el.querySelectorAll('[data-v]').forEach(function (b) { b.onclick = function () { view = b.getAttribute('data-v'); save(); var d = document.getElementById(ID + 'dash'); d.innerHTML = dash(); bindDash(); }; });
      el.querySelectorAll('#' + ID + 'dash [data-a]').forEach(function (b) { b.onclick = function () { act(b.getAttribute('data-a')); }; });
    }
    function bind() {
      bindDash();
      el.querySelectorAll('[data-a]').forEach(function (b) { if (!b.closest('#' + ID + 'dash') && !b.closest('.imp')) b.onclick = function () { act(b.getAttribute('data-a')); }; });
      el.querySelectorAll('[data-dt]').forEach(function (b) { b.onclick = function () { var a = b.getAttribute('data-dt'); if (!confirm('Delete the tap at ' + clock(tms(a)) + '?')) return; S.taps = S.taps.filter(function (x) { return x.at !== a; }); save(); render(); }; });
      el.querySelectorAll('[data-g],[data-t0]').forEach(function (i) { i.addEventListener('change', function () { readInputs(); save(); }); });
    }
    function act(a) {
      if (a === 'go') {
        readInputs();
        if (!S.t0 || tms(S.t0) == null) { msg('Set time 0 (date and time).', true); return; }
        var F = setup(), p = opsNow(), bad = [];
        if (!(F.vw > 0)) bad.push('working volume'); if (!(F.hw > 0)) bad.push('working height'); if (!(N(p.q) > 0)) bad.push('blast volume'); if (!(N(p.rck) > 0)) bad.push('raceway coke'); if (!(N(p.fc) > 0)) bad.push('coke fixed carbon');
        if (F.sl0 >= F.hw) bad.push('stock level (must be above the tuyeres)');
        if (bad.length) { msg('Check: ' + bad.join(', ') + '.', true); return; }
        S.segs = [{ t: 0, p: p }]; S.on = true; save(); render(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); return;
      }
      if (a === 'apply') { readInputs(); var e = Math.max(0, nowH()); S.segs = S.segs.filter(function (s) { return s.t < e; }); S.segs.push({ t: e, p: opsNow() }); save(); render(); msg('Operation applied from ' + clock(Date.now()) + '.'); return; }
      if (a === 'restart') { if (!confirm('Stop the live prediction to change time 0 or the furnace inputs? Your taps are kept.')) return; S.on = false; S.segs = []; save(); render(); return; }
      if (a === 'reset') { if (!confirm('Clear all inputs on this page?')) return; S.set = {}; S.ops = {}; save(); render(); return; }
      if (a === 'tap') {
        var g = function (kk) { var i = el.querySelector('[data-t="' + kk + '"]'); return i ? i.value.trim() : ''; }, x = { at: g('at'), hm: g('hm') === '' ? 0 : +g('hm'), sl: g('sl') === '' ? 0 : +g('sl'), note: g('note') };
        if (tms(x.at) == null) { msg('Set the tap time.', true, ID + 'tmsg'); return; }
        if (!(x.hm > 0) || !isFinite(x.hm) || !isFinite(x.sl)) { msg('Type the hot metal tapped (t).', true, ID + 'tmsg'); return; }
        if (g('sl') === '') { x.sl = Math.round(x.hm * N(curOps().sr) / 100) / 10; x.auto = 1; }
        if (tms(x.at) < tms(S.t0)) { msg('The tap is before time 0.', true, ID + 'tmsg'); return; }
        S.taps = S.taps.filter(function (y) { return y.at !== x.at; }); S.taps.push(x); save(); render(); msg('Tap at ' + clock(tms(x.at)) + ' recorded.', false, ID + 'tmsg'); return;
      }
      if (a === 'csv') {
        var R = sim(Math.max(nowH() + 24, 24)), F2 = setup(), t0 = tms(S.t0), L = ['Time,h from time 0,Coke burnt cum t,Coke in furnace t,Stock level m,HM made cum t,HM tapped cum t,Liquid HM t,Slag made cum t,Liquid slag t'];
        for (var hh = 0; hh <= R.out[R.out.length - 1].h + 1e-9; hh++) { var o = at(R, hh), tp = tapped(hh); L.push([clock(t0 + hh * 3600000), hh, o.burnC.toFixed(1), o.coke.toFixed(1), o.stock.toFixed(2), o.hm.toFixed(1), tp.hm, Math.max(0, N(F2.hm0) + o.hm - tp.hm).toFixed(1), o.sl.toFixed(1), Math.max(0, N(F2.sg0) + o.sl - tp.sl).toFixed(1)].join(',')); }
        var csv = '﻿' + L.join('\r\n'), name = (opt.file || 'IronMaking-live') + '-' + new Date().toISOString().slice(0, 10) + '.csv';
        if (window.AndroidBridge && AndroidBridge.saveFile) { var res = String(AndroidBridge.saveFile(name, btoa(unescape(encodeURIComponent(csv))), 'text/csv') || ''); alert(/^ERROR/.test(res) ? res.replace(/^ERROR\s*/, 'Not saved: ') : 'Saved to Downloads: ' + name); }
        else { var u = URL.createObjectURL(new Blob([csv], { type: 'text/csv' })), x2 = document.createElement('a'); x2.href = u; x2.download = name; document.body.appendChild(x2); x2.click(); x2.remove(); setTimeout(function () { URL.revokeObjectURL(u); }, 4000); }
      }
    }
    render();
    return { render: render, data: function () { return S; } };
  }
  window.IMLive = { mount: mount };
})();
