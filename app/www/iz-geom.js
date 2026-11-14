/* Hearth & Cohesive Zone Prediction: 2-D (radius × height) geometry of the furnace interior for the 3D view.
   Built only from the inner-zone model results (BF_Inner_Zone_Model_v3.xlsx), with the same equations the workbook uses:
   - solid temperature per ring: Ts = Tlo + (Tdmax − Tlo)(1 − y/L_i)^p below the TRZ bottom L_i of ring i (Radial_CZ col L),
     Tlo across the thermal reserve zone (length LTRZ), then the upper (preheat) profile of the average ring (Gas_Flow col H);
     gas temperature the same with TTRZ and RAFT (Gas_Flow col G). CZ top / root per ring (Radial_CZ cols M / N) are the
     heights where Ts reaches the softening-start / melt-down temperature, so the zones and the colours always agree.
   - ore/coke layers: thickness at the stockline from the charging matrix (Charging cols AD / AE across the radius), thinned as
     the diameter grows, (Dt / D)², and shrunk by the ore-layer shrinkage in the cohesive zone.
   - raceway: depth DR, height HR, width WR (Nakamura/Hatano correlation on the Raceway sheet).
   Added here (not in the workbook, typical values – replace with plant data):
   - deadman: cone from the raceway tips (r = R_hearth − DR) to an apex at the centre, surface angle θ (default 45°),
     kept at least 0.5 m below the centre CZ root so an active-coke (dripping) zone remains between them.
   - deadman sitting / floating: force balance per unit hearth area. Buoyancy of the coke submerged in metal and slag vs the
     coke's own weight plus the burden load reaching it. Burden load = Janssen silo stress of the burden weight not carried by
     the gas, (1 − burden support ratio), with wall friction μ (0.4) and stress ratio K (0.4). Floating ⇒ coke-free layer. */
(function (root) {
  'use strict';
  function lerp(a, b, t) { return a + (b - a) * t; }
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function interp(xs, ys, x) { if (x <= xs[0]) return ys[0]; for (var i = 0; i < xs.length - 1; i++) if (x <= xs[i + 1]) return lerp(ys[i], ys[i + 1], (x - xs[i]) / Math.max(1e-9, xs[i + 1] - xs[i])); return ys[ys.length - 1]; }

  function build(P, opt) {
    opt = opt || {};
    var G = { P: P }, g = 9.81;
    var y0 = -(P.Hhearth + P.Hsump), Hsl = P.Hsl;
    G.y0 = y0; G.Hsl = Hsl;
    G.Rw = function (y) {
      if (y <= 0) return P.Dh / 2;
      if (y <= P.Hbosh) return lerp(P.Dh / 2, P.Db / 2, y / P.Hbosh);
      if (y <= P.Hbosh + P.Hbelly) return P.Db / 2;
      return lerp(P.Db / 2, P.Dt / 2, clamp((y - P.Hbosh - P.Hbelly) / P.Hstack, 0, 1));
    };
    // ring mid positions (equal-area rings) as a fraction s of the local radius
    var S = [0, 1, 2, 3, 4].map(function (i) { return Math.sqrt((i + 0.5) / 5); });
    var xsS = [0].concat(S).concat([1]);
    function ringFn(v) { var ys = [v[0]].concat(v).concat([v[4]]); return function (s) { return interp(xsS, ys, s); }; }
    G.L = ringFn(P.trzB);                      // as on Radial_CZ col L (the centre TRZ may reach the stockline: central working)
    G.czTop = ringFn(P.czTop); G.czRoot = ringFn(P.czRoot); G.gasShare = ringFn(P.gasShare);
    // upper (preheat) profiles of the average ring, as a function of the fraction ζ from the TRZ top to the stockline
    var up = { z: [], ts: [], tg: [] };
    P.prof.forEach(function (r) { if (r[0] >= P.TRZt - 1e-6) { up.z.push((r[0] - P.TRZt) / Math.max(0.1, Hsl - P.TRZt)); up.ts.push(r[2]); up.tg.push(r[1]); } });
    if (!up.z.length) { up.z = [0, 1]; up.ts = [P.Tlo, 25]; up.tg = [P.TTRZ, P.TopT]; }
    G.Ts = function (s, y) {
      if (y < 0) return P.HMT;
      var L = G.L(s);
      if (y <= L) return P.Tlo + (P.Tdmax - P.Tlo) * Math.pow(Math.max(0, 1 - y / L), P.p);
      var tt = L + P.LTRZ; if (y <= tt || tt >= Hsl - 0.1) return P.Tlo;
      return interp(up.z, up.ts, (y - tt) / Math.max(0.1, Hsl - tt));
    };
    G.Tg = function (s, y) {
      if (y < 0) return P.HMT;
      var L = G.L(s);
      if (y <= L) return P.TTRZ + (P.RAFT - P.TTRZ) * Math.pow(Math.max(0, 1 - y / L), P.p);
      var tt = L + P.LTRZ; if (y <= tt || tt >= Hsl - 0.1) return P.TTRZ;
      return interp(up.z, up.tg, (y - tt) / Math.max(0.1, Hsl - tt));
    };
    // ---------- layers ----------
    var Rt = P.Dt / 2, ch = P.charging, ofS = [], ofV = [], prS = [], prV = [];
    ch.forEach(function (c) { if (isFinite(c[0]) && isFinite(c[1]) && isFinite(c[2]) && c[1] + c[2] > 1e-4) { var s = c[0] / Rt; ofS.push(s); ofV.push(c[2] / (c[1] + c[2])); prS.push(s); prV.push(c[1] + c[2]); } });
    if (!ofS.length) { ofS = [0, 1]; ofV = [P.oreFrac, P.oreFrac]; prS = [0, 1]; prV = [P.pair, P.pair]; }
    G.oreFrac = function (s) { return clamp(interp(ofS, ofV, s), 0.05, 0.95); };
    var pairSL = prV.reduce(function (a, b) { return a + b; }, 0) / prV.length;
    G.pairAt = function (y) { var R = G.Rw(Math.max(0, y)); return pairSL * Math.pow(Rt / R, 2); };
    // cumulative layer phase from the stockline down: Φ(y) = ∫ dy / pair(y)  (so layers keep their real thickness)
    var NPH = 512, ph = new Float32Array(NPH), dy = (Hsl - y0) / (NPH - 1); ph[NPH - 1] = 0;
    for (var i = NPH - 2; i >= 0; i--) { var yy = y0 + (i + 0.5) * dy; ph[i] = ph[i + 1] + dy / Math.max(0.05, G.pairAt(yy)); }
    G.phase = function (y) { var f = clamp((y - y0) / (Hsl - y0), 0, 1) * (NPH - 1), k = Math.min(NPH - 2, Math.floor(f)); return lerp(ph[k], ph[k + 1], f - k); };
    G.phaseArr = ph; G.NPH = NPH;
    // ---------- raceway & deadman ----------
    var Rh = P.Dh / 2, rt = Math.max(0.3, Rh - P.DR), th = (opt.theta != null ? opt.theta : 45) * Math.PI / 180;
    var apexGeo = rt * Math.tan(th), apexMax = Math.max(P.HR, G.czRoot(0) - 0.5);
    G.rTip = rt; G.apex = clamp(apexGeo, P.HR * 0.8, apexMax); G.apexClamped = apexGeo > apexMax + 1e-6;
    G.dmSurf = function (r) { return r < rt ? G.apex * (1 - r / rt) : 0; };            // deadman top surface (m above tuyere)
    G.rw = { cx: Rh - P.DR / 2, cy: P.HR * 0.35, a: P.DR / 2, b: P.HR / 2, w: P.WR / 2 };   // raceway ellipse in the (r, y) plane
    G.inRaceway = function (r, y) { var e = G.rw; return Math.pow((r - e.cx) / e.a, 2) + Math.pow((y - e.cy) / e.b, 2) <= 1; };
    // deadman volume and mean height per hearth area
    var Ah = Math.PI * Rh * Rh, Vcyl = Ah * (P.Hhearth + P.Hsump), Vcone = Math.PI * rt * rt * G.apex / 3;
    G.dmV = Vcyl + Vcone; G.dmH = G.dmV / Ah; G.Ah = Ah;
    // force balance (per m² of hearth), kPa
    var mu = opt.mu != null ? opt.mu : 0.4, K = opt.K != null ? opt.K : 0.4, eps = P.eDM;
    var rhoAvg = ((P.xo * P.rhoO + (1 - P.xo) * P.rhoC) * (Hsl - P.czRootAvg) + P.rhoC * P.czRootAvg) / Hsl * 1000;  // kg/m³ (burden column)
    var gam = Math.max(0, 1 - P.BSR) * rhoAvg * g, Dj = P.Db, lam = 4 * mu * K / Dj;
    G.sigBurden = gam / lam * (1 - Math.exp(-lam * Hsl)) / 1000;
    G.wCoke = P.rhoCapp * (1 - eps) * g * G.dmH / 1000;
    G.float = function (level) {   // level = liquid surface height (m, tuyere axis = 0)
      var yTap = -P.Hhearth, hLiq = clamp(level - y0, 0, P.Hhearth + P.Hsump + 1);
      var metalTop = level <= yTap ? level : yTap + (level - yTap) * P.metalShare;
      var hm = clamp(metalTop - y0, 0, hLiq), hs = Math.max(0, hLiq - hm);
      var buoy = (1 - eps) * g * (P.rhoM * hm + P.rhoS * hs) / 1000, load = G.wCoke + G.sigBurden;
      var free = 0;
      if (buoy > load) { var need = load * 1000 / ((1 - eps) * g); free = clamp((P.rhoM * hm + P.rhoS * hs - need) / P.rhoM, 0, hm); }
      return { buoy: buoy, load: load, floating: buoy > load, free: free, metalTop: metalTop, hm: hm, hs: hs };
    };
    G.opt = { theta: th * 180 / Math.PI, mu: mu, K: K };
    // ---------- zone code for a point (s = r / local radius, y) ----------
    // 1 lumpy (incl. TRZ), 2 cohesive, 3 active coke (dripping), 4 deadman, 6 raceway
    G.zone = function (s, y) {
      var r = s * G.Rw(y);
      if (y < 0) return 4;
      if (G.inRaceway(r, y)) return 6;
      if (y < G.dmSurf(r)) return 4;
      var rootY = G.czRoot(s), topY = G.czTop(s);
      if (y < rootY) return 3;
      if (y <= topY) return 2;
      return 1;
    };
    // isotherm heights on the axis (for labels), solid temperature
    G.isoAxis = function (T) { var lo = 0, hi = Hsl; if (G.Ts(0, lo) < T || G.Ts(0, hi) > T) return null; for (var k = 0; k < 40; k++) { var m = (lo + hi) / 2; if (G.Ts(0, m) > T) lo = m; else hi = m; } return (lo + hi) / 2; };
    return G;
  }

  /* textures for the section shader: field (NW × NH, RGBA8): R = solid T / 2200, G = zone code × 32, B = ore fraction, A = gas T / 2200
     and phase (NH × 1, RGBA8): layer phase Φ(y) as 16-bit fixed point over 0..256 layers. */
  function textures(G, NW, NH) {
    NW = NW || 96; NH = NH || 512;
    var f = new Uint8Array(NW * NH * 4), p = new Uint8Array(NH * 4);
    for (var j = 0; j < NH; j++) {
      var y = G.y0 + (G.Hsl - G.y0) * j / (NH - 1);
      for (var i = 0; i < NW; i++) {
        var s = i / (NW - 1), o = (j * NW + i) * 4;
        f[o] = Math.round(clamp(G.Ts(s, y) / 2200, 0, 1) * 255);
        f[o + 1] = G.zone(s, y) * 32;
        f[o + 2] = Math.round(G.oreFrac(s) * 255);
        f[o + 3] = Math.round(clamp(G.Tg(s, y) / 2200, 0, 1) * 255);
      }
      var v = Math.round(clamp(G.phase(y) / 256, 0, 0.99999) * 65535);
      p[j * 4] = v >> 8; p[j * 4 + 1] = v & 255; p[j * 4 + 2] = 0; p[j * 4 + 3] = 255;
    }
    return { field: f, phase: p, NW: NW, NH: NH };
  }
  root.IZGeom = { build: build, textures: textures };
  if (typeof module !== 'undefined') module.exports = root.IZGeom;
})(typeof window !== 'undefined' ? window : globalThis);
