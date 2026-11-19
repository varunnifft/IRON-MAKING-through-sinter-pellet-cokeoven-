/* Taphole 3D: cutaway scenes of a blast furnace taphole (hearth, clay mushroom, channel, drill, mud gun, O2 lance,
   iron/slag stream, main runner, skimmer) for taphole.html. Needs three.js r128 + OrbitControls (three.min.js).
   One scene per abnormality is built from a small settings object (see taphole-data.js "s"). */
window.TH3D = (function () {
  'use strict';
  var T = window.THREE; if (!T) return null;
  var PI = Math.PI;
  var W = 2.6, D = 3.0, F = -1.0;              // wall thickness (inner face x=0 → block face x=W), cutaway depth, cast-house floor
  var XS = W + 0.15, XE = W + 11, SK = W + 7;  // runner start / end, skimmer
  var L_TARGET = (W + 0.75) / Math.cos(12 * PI / 180);

  /* ---------------- textures (shared, made once) ---------------- */
  var TX = {};
  function ctex(w, h, fn, rep) {
    var c = document.createElement('canvas'); c.width = w; c.height = h; var g = c.getContext('2d'); fn(g, w, h);
    var t = new T.CanvasTexture(c); if (rep) { t.wrapS = t.wrapT = T.RepeatWrapping; t.repeat.set(rep[0], rep[1]); } return t;
  }
  function rnd(seed) { var s = seed >>> 0; return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
  function noise(g, w, h, n, col, rmin, rmax, r) { for (var i = 0; i < n; i++) { g.fillStyle = col(r()); g.beginPath(); g.arc(r() * w, r() * h, rmin + r() * (rmax - rmin), 0, 7); g.fill(); } }
  function cracks(g, w, h, n, r, col, lw) {
    g.strokeStyle = col; g.lineCap = 'round';
    for (var i = 0; i < n; i++) { var x = r() * w, y = r() * h, a = r() * 6.28; g.lineWidth = lw * (0.6 + r());
      g.beginPath(); g.moveTo(x, y); for (var k = 0; k < 9; k++) { a += (r() - 0.5) * 1.3; x += Math.cos(a) * 14; y += Math.sin(a) * 14; g.lineTo(x, y);
        if (r() < 0.25) { var bx = x, by = y, ba = a + (r() - 0.5) * 2.4; g.moveTo(bx, by); for (var j = 0; j < 3; j++) { ba += (r() - 0.5); bx += Math.cos(ba) * 10; by += Math.sin(ba) * 10; g.lineTo(bx, by); } g.moveTo(x, y); } }
      g.stroke(); }
  }
  function tex() {
    if (TX.ok) return TX; TX.ok = 1;
    TX.glow = ctex(64, 64, function (g) { var gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.35, 'rgba(255,255,255,.55)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); });
    TX.hot = ctex(128, 128, function (g) { var gr = g.createRadialGradient(64, 64, 0, 64, 64, 64); gr.addColorStop(0, 'rgba(255,120,30,.95)'); gr.addColorStop(0.5, 'rgba(220,40,10,.45)'); gr.addColorStop(1, 'rgba(120,0,0,0)'); g.fillStyle = gr; g.fillRect(0, 0, 128, 128); });
    var hatch = function (base, line, step) { return function (g, w, h) { g.fillStyle = base; g.fillRect(0, 0, w, h); var r = rnd(7); noise(g, w, h, 160, function (v) { return 'rgba(0,0,0,' + (0.05 + v * 0.12) + ')'; }, 1, 4, r);
      g.strokeStyle = line; g.lineWidth = 1.4; for (var i = -h; i < w; i += step) { g.beginPath(); g.moveTo(i, h); g.lineTo(i + h, 0); g.stroke(); } }; };
    TX.carbon = ctex(128, 128, hatch('#3b3f45', 'rgba(255,255,255,.07)', 16), [0.7, 0.7]);
    TX.carbonSide = ctex(128, 128, function (g, w, h) { g.fillStyle = '#2f3237'; g.fillRect(0, 0, w, h); g.strokeStyle = 'rgba(0,0,0,.45)'; g.lineWidth = 2; for (var y = 0; y < h; y += 32) { g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke(); } for (var x = 0; x < w; x += 64) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, h); g.stroke(); } }, [0.6, 0.6]);
    TX.ram = ctex(64, 64, hatch('#6b625a', 'rgba(0,0,0,.18)', 8), [1, 1]);
    TX.copper = ctex(128, 128, function (g, w, h) { g.fillStyle = '#9a5a33'; g.fillRect(0, 0, w, h); g.fillStyle = '#2e6f9e'; for (var y = 16; y < h; y += 42) { g.beginPath(); g.arc(w / 2, y, 9, 0, 7); g.fill(); g.strokeStyle = '#123'; g.lineWidth = 2; g.stroke(); } var r = rnd(3); noise(g, w, h, 60, function (v) { return 'rgba(255,200,150,' + v * 0.12 + ')'; }, 1, 3, r); }, [1, 0.7]);
    TX.steel = ctex(64, 64, hatch('#59626d', 'rgba(255,255,255,.12)', 6), [1, 1]);
    TX.block = ctex(128, 128, hatch('#5a4d44', 'rgba(0,0,0,.2)', 12), [0.8, 0.8]);
    TX.blockCrack = ctex(256, 256, function (g, w, h) { hatch('#5a4d44', 'rgba(0,0,0,.2)', 12)(g, w, h); cracks(g, w, h, 14, rnd(11), 'rgba(20,10,5,.95)', 3); }, [0.8, 0.8]);
    var clay = function (base, seed, extra) { return function (g, w, h) { g.fillStyle = base; g.fillRect(0, 0, w, h); var r = rnd(seed); noise(g, w, h, 300, function (v) { return v < 0.5 ? 'rgba(0,0,0,' + v * 0.25 + ')' : 'rgba(255,230,200,' + (v - 0.5) * 0.18 + ')'; }, 1, 5, r); if (extra) extra(g, w, h, r); }; };
    TX.clay = ctex(256, 256, clay('#8a6a4c', 5), [1.2, 1.2]);
    TX.clayCured = ctex(256, 256, clay('#6a5644', 6), [1.2, 1.2]);
    TX.clayHard = ctex(256, 256, clay('#4f4842', 9, function (g, w, h, r) { noise(g, w, h, 40, function () { return 'rgba(140,140,150,.35)'; }, 2, 6, r); }), [1.2, 1.2]);
    TX.clayWet = ctex(256, 256, clay('#4c3322', 12, function (g, w, h, r) { noise(g, w, h, 50, function () { return 'rgba(170,200,230,.25)'; }, 2, 5, r); }), [1.2, 1.2]);
    TX.clayCrack = ctex(256, 256, clay('#6e5845', 14, function (g, w, h, r) { cracks(g, w, h, 16, r, 'rgba(15,8,4,.95)', 3.5); noise(g, w, h, 24, function () { return 'rgba(10,5,2,.9)'; }, 3, 8, r); }), [1, 1]);
    TX.clayLayer = ctex(256, 256, clay('#7c6049', 15, function (g, w, h) { g.strokeStyle = 'rgba(20,10,4,.85)'; g.lineWidth = 3; for (var x = 20; x < w; x += 46) { g.beginPath(); g.moveTo(x, 0); for (var y = 0; y <= h; y += 16) g.lineTo(x + Math.sin(y * 0.09 + x) * 5, y); g.stroke(); } }), [1, 1]);
    TX.iron = ctex(256, 256, function (g, w, h) { var gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#ffe7a8'); gr.addColorStop(1, '#ffb347'); g.fillStyle = gr; g.fillRect(0, 0, w, h); var r = rnd(21); noise(g, w, h, 140, function (v) { return v < 0.6 ? 'rgba(255,255,230,' + v * 0.5 + ')' : 'rgba(230,110,20,' + (v - 0.6) * 0.8 + ')'; }, 3, 14, r); }, [0.35, 0.35]);
    TX.slag = ctex(256, 256, function (g, w, h) { g.fillStyle = '#ff8a1e'; g.fillRect(0, 0, w, h); var r = rnd(22); noise(g, w, h, 220, function (v) { return v < 0.55 ? 'rgba(120,30,0,' + v * 0.9 + ')' : 'rgba(255,210,120,' + (v - 0.55) * 0.9 + ')'; }, 2, 10, r); }, [0.35, 0.35]);
    TX.flow = ctex(256, 64, function (g, w, h) { g.fillStyle = '#ffb84d'; g.fillRect(0, 0, w, h); var r = rnd(31); for (var i = 0; i < 90; i++) { g.fillStyle = r() < 0.5 ? 'rgba(255,250,220,' + r() * 0.7 + ')' : 'rgba(200,70,10,' + r() * 0.6 + ')'; g.fillRect(r() * w, r() * h, 20 + r() * 70, 1 + r() * 4); } }, [3, 1]);
    TX.slagFlow = ctex(256, 64, function (g, w, h) { g.fillStyle = '#e8701a'; g.fillRect(0, 0, w, h); var r = rnd(32); for (var i = 0; i < 120; i++) { g.fillStyle = r() < 0.6 ? 'rgba(90,25,0,' + r() * 0.8 + ')' : 'rgba(255,200,110,' + r() * 0.6 + ')'; g.beginPath(); g.arc(r() * w, r() * h, 2 + r() * 6, 0, 7); g.fill(); } }, [3, 1]);
    TX.crust = ctex(128, 64, function (g, w, h) { g.fillStyle = '#2b211c'; g.fillRect(0, 0, w, h); var r = rnd(33); noise(g, w, h, 80, function (v) { return 'rgba(' + (60 + v * 60 | 0) + ',30,15,.6)'; }, 2, 7, r); }, [3, 1]);
    TX.floor = ctex(256, 256, function (g, w, h) { g.fillStyle = '#2a2724'; g.fillRect(0, 0, w, h); var r = rnd(41); noise(g, w, h, 500, function (v) { return 'rgba(' + (v < 0.5 ? '0,0,0' : '120,110,100') + ',' + (0.08 + v * 0.1) + ')'; }, 1, 4, r); g.strokeStyle = 'rgba(0,0,0,.35)'; g.lineWidth = 3; g.strokeRect(0, 0, w, h); }, [0.25, 0.25]);
    TX.refr = ctex(128, 128, function (g, w, h) { g.fillStyle = '#4a4440'; g.fillRect(0, 0, w, h); var r = rnd(42); noise(g, w, h, 200, function (v) { return 'rgba(0,0,0,' + v * 0.25 + ')'; }, 1, 4, r); }, [0.5, 0.5]);
    TX.refrWorn = ctex(128, 128, function (g, w, h) { g.fillStyle = '#4a4440'; g.fillRect(0, 0, w, h); var r = rnd(43); noise(g, w, h, 40, function (v) { return 'rgba(15,8,5,' + (0.5 + v * 0.5) + ')'; }, 4, 14, r); cracks(g, w, h, 6, r, 'rgba(0,0,0,.9)', 2); }, [0.5, 0.5]);
    TX.stripe = ctex(64, 64, function (g, w, h) { g.fillStyle = 'rgba(220,30,40,.55)'; g.fillRect(0, 0, w, h); g.fillStyle = 'rgba(255,210,0,.55)'; for (var i = -h; i < w; i += 22) { g.beginPath(); g.moveTo(i, h); g.lineTo(i + 11, h); g.lineTo(i + 11 + h, 0); g.lineTo(i + h, 0); g.fill(); } }, [1.2, 1.2]);
    return TX;
  }

  /* ---------------- 2D helpers (section polygons) ---------------- */
  function clip(poly, f) { var out = []; for (var i = 0; i < poly.length; i++) { var a = poly[i], b = poly[(i + 1) % poly.length], fa = f(a), fb = f(b); if (fa >= 0) out.push(a); if ((fa >= 0) !== (fb >= 0)) { var t = fa / (fa - fb); out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]); } } return out; }
  function shape(poly) { var s = new T.Shape(); s.moveTo(poly[0][0], poly[0][1]); for (var i = 1; i < poly.length; i++) s.lineTo(poly[i][0], poly[i][1]); s.closePath(); return s; }
  function rect(x0, y0, x1, y1) { return [[x0, y0], [x1, y0], [x1, y1], [x0, y1]]; }

  /* ---------------- particles ---------------- */
  function PSys(N, size, color, opacity) {
    this.N = N; this.n = 0; var g = new T.BufferGeometry();
    this.pos = new Float32Array(N * 3); this.col = new Float32Array(N * 3);
    g.setAttribute('position', new T.BufferAttribute(this.pos, 3)); g.setAttribute('color', new T.BufferAttribute(this.col, 3)); g.setDrawRange(0, 0);
    this.p = []; for (var i = 0; i < N; i++) this.p.push({});
    this.mat = new T.PointsMaterial({ size: size, map: tex().glow, vertexColors: true, transparent: true, opacity: opacity || 1, depthWrite: false, blending: T.AdditiveBlending, sizeAttenuation: true });
    this.obj = new T.Points(g, this.mat); this.obj.frustumCulled = false; this.g = g;
  }
  PSys.prototype.add = function (x, y, z, vx, vy, vz, life, grav, c0, c1, kind, drag) {
    if (this.n >= this.N) return null; var q = this.p[this.n++];
    q.x = x; q.y = y; q.z = z; q.vx = vx; q.vy = vy; q.vz = vz; q.a = 0; q.l = life; q.g = grav; q.c0 = c0; q.c1 = c1 || c0; q.k = kind || 0; q.d = drag || 0; return q;
  };
  PSys.prototype.step = function (dt, hit) {
    var P = this.p, i = 0;
    while (i < this.n) { var q = P[i]; q.a += dt;
      q.vy -= q.g * dt; if (q.d) { var k = Math.max(0, 1 - q.d * dt); q.vx *= k; q.vy *= k; q.vz *= k; }
      q.x += q.vx * dt; q.y += q.vy * dt; q.z += q.vz * dt;
      if (q.a >= q.l || (hit && hit(q))) { P[i] = P[this.n - 1]; P[this.n - 1] = q; this.n--; continue; }
      i++; }
    var pos = this.pos, col = this.col;
    for (i = 0; i < this.n; i++) { q = P[i]; var t = q.a / q.l, f = t < 0.1 ? t / 0.1 : 1 - (t - 0.1) / 0.9; f = Math.max(0, f);
      pos[i * 3] = q.x; pos[i * 3 + 1] = q.y; pos[i * 3 + 2] = q.z;
      col[i * 3] = (q.c0[0] + (q.c1[0] - q.c0[0]) * t) * f; col[i * 3 + 1] = (q.c0[1] + (q.c1[1] - q.c0[1]) * t) * f; col[i * 3 + 2] = (q.c0[2] + (q.c1[2] - q.c0[2]) * t) * f; }
    this.g.attributes.position.needsUpdate = true; this.g.attributes.color.needsUpdate = true; this.g.setDrawRange(0, this.n);
  };

  var C = { iron: [1, 0.86, 0.55], ironHot: [1, 0.95, 0.8], ironEnd: [1, 0.45, 0.08], slag: [1, 0.55, 0.12], slagEnd: [0.6, 0.15, 0.02], spark: [1, 0.9, 0.6], sparkEnd: [1, 0.3, 0],
    steam: [0.42, 0.46, 0.5], steamEnd: [0.18, 0.2, 0.22], flame: [1, 0.75, 0.3], flameEnd: [0.5, 0.12, 0.02], water: [0.25, 0.6, 1], waterEnd: [0.1, 0.3, 0.8], co: [0.2, 0.26, 0.17], coEnd: [0.08, 0.1, 0.07], clay: [0.55, 0.35, 0.2], clayEnd: [0.3, 0.18, 0.1],
    lance: [1, 1, 0.9], lanceEnd: [1, 0.6, 0.2] };

  /* ---------------- scene builder ---------------- */
  function build(S) {
    S = S || {}; var X = tex();
    var scene = new T.Scene(); scene.background = new T.Color('#060b12'); scene.fog = new T.Fog('#060b12', 16, 30);
    var disp = []; function M(m) { disp.push(m); return m; }
    function std(o) { return M(new T.MeshStandardMaterial(o)); }
    function basic(o) { return M(new T.MeshBasicMaterial(o)); }
    function add(g, m, parent) { var me = new T.Mesh(g, m); disp.push(g); (parent || scene).add(me); return me; }
    function cl(t) { var c = t.clone(); c.needsUpdate = true; disp.push(c); return c; }

    var a = (S.ang || 12) * PI / 180, ca = Math.cos(a), sa = Math.sin(a), ta = Math.tan(a);
    var mode = S.mode || 'cast';
    var r = 0.17 * (S.wide || 1) * (S.narrow || 1);
    var e = S.erode || 0, BAND = [-1.9, 0.6];
    function face(y) { return (e && y > BAND[0] && y < BAND[1]) ? e : 0; }
    var faceX = face(-(W - e) * ta);
    var MU = { normal: [0.75, 1.3], big: [1.15, 1.6], huge: [1.75, 2.0], thin: [0.3, 1.0], none: [0, 0], uneven: [0.8, 1.35], layered: [0.8, 1.3], eroded: [0.42, 1.05], cracked: [0.62, 1.25] }[S.mush || 'normal'];
    var md = MU[0], mr = MU[1];
    var Lwall = (W - faceX) / ca, L = Lwall + md;
    var ironY = S.iron != null ? S.iron : -0.25, slagT = S.slagT != null ? S.slagT : 0.85;
    var cold = S.cold || 0;
    function P(s) { return [W - s * ca, -s * sa]; }                         // point on axis s inward from the mouth
    function perp(p, d) { return [p[0] - sa * d, p[1] + ca * d]; }          // offset across the axis (up = +)
    function V(p, z) { return new T.Vector3(p[0], p[1], z || 0); }
    function dist(p) { return -(p[0] - W) * sa + p[1] * ca; }
    var anchors = {}, labels = [], hud = [];
    var lab = function (t, p) { labels.push({ t: t, p: p }); };

    /* lights */
    scene.add(new T.HemisphereLight('#a9c1e0', '#3a2414', 1.0)); scene.add(new T.AmbientLight('#404a58', 0.5));
    var key = new T.DirectionalLight('#ffffff', 0.75); key.position.set(6, 9, 10); scene.add(key);
    var fillL = new T.DirectionalLight('#9fc7ff', 0.25); fillL.position.set(-8, 4, 6); scene.add(fillL);
    var mouthLight = new T.PointLight('#ff8a2a', 0, 9, 2); mouthLight.position.set(W + 0.6, 0.2, 0.6); scene.add(mouthLight);
    var hearthLight = new T.PointLight('#ff7a1a', cold ? 0.5 : 1.1, 8, 2); hearthLight.position.set(-2.2, ironY + slagT + 0.8, 1.2); scene.add(hearthLight);

    /* ---- wall layers (cut at z=0 along the taphole axis) ---- */
    var up = function (p) { return dist(p) - r; }, dn = function (p) { return -dist(p) - r; };
    function layer(poly, capT, sideMat, rough) {
      var cap = std({ map: capT, roughness: rough || 0.9, metalness: 0.05 }), parts = [clip(poly, up), clip(poly, dn)];
      parts.forEach(function (pp) { if (pp.length < 3) return; var g = new T.ExtrudeGeometry(shape(pp), { depth: r, bevelEnabled: false }); g.translate(0, 0, -r); add(g, [cap, sideMat]); });
      var g2 = new T.ExtrudeGeometry(shape(poly), { depth: D - r, bevelEnabled: false }); g2.translate(0, 0, -D); add(g2, [cap, sideMat]);
    }
    var carbonPoly = e ? [[0, -3.6], [1.7, -3.6], [1.7, 2.6], [0, 2.6], [0, BAND[1]], [e, BAND[1]], [e, BAND[0]], [0, BAND[0]]] : rect(0, -3.6, 1.7, 2.6);
    var sideCarbon = std({ map: X.carbonSide, roughness: 0.95 });
    layer(carbonPoly, X.carbon, sideCarbon);
    layer(rect(1.7, -3.6, 1.82, 2.6), X.ram, std({ color: '#5d554e', roughness: 1 }));
    layer(rect(1.82, -3.6, 2.2, 2.6), X.copper, std({ color: '#8a4f2c', roughness: 0.5, metalness: 0.5 }), 0.55);
    layer(rect(2.2, -3.6, 2.34, 2.6), X.steel, std({ color: '#4f5964', roughness: 0.6, metalness: 0.6 }));
    var blockT = (S.blockCrack || S.faceDamage) ? X.blockCrack : X.block;
    layer(rect(2.34, F, W, 1.15), blockT, std({ map: blockT, roughness: 0.9 }));
    // hearth pad
    var pad = new T.ExtrudeGeometry(shape(rect(-5.5, -3.6, 0, -2.9)), { depth: D, bevelEnabled: false }); pad.translate(0, 0, -D); add(pad, [std({ map: X.carbon, roughness: 0.9 }), sideCarbon]);
    // far hearth wall (dim)
    var back = add(new T.PlaneGeometry(5.5, 5.5), std({ color: '#1b1310', emissive: '#2a0f04', roughness: 1 })); back.position.set(-2.75, -0.15, -D + 0.01);
    lab('Carbon blocks', V([0.85, 2.15])); lab('Stave cooler', V([2.0, 2.35])); lab('Shell', V([2.27, -2.6]));
    anchors.stave = V([2.0, 1.05]); anchors.block = V([W, 0.75], 0.02);

    /* ---- hearth liquids ---- */
    function liquidPoly(y0, y1) { var ys = [y0]; BAND.forEach(function (b) { if (e && b > y0 && b < y1) ys.push(b); }); ys.push(y1); var pts = [[-5.5, y0]];
      for (var i = 0; i < ys.length - 1; i++) { var x = face((ys[i] + ys[i + 1]) / 2); pts.push([x, ys[i]], [x, ys[i + 1]]); } pts.push([-5.5, y1]); return pts; }
    var ironCol = cold ? (cold >= 1 ? '#a8461a' : '#e08a3a') : '#ffffff', slagCol = S.viscous ? '#b85a26' : cold ? (cold >= 1 ? '#8a3a14' : '#c9702c') : '#ffffff';
    var ironMat = basic({ map: X.iron, color: ironCol }), slagMat = basic({ map: X.slag, color: slagCol });
    var ig = new T.ExtrudeGeometry(shape(liquidPoly(-2.9, ironY)), { depth: D - 0.02, bevelEnabled: false }); ig.translate(0, 0, -D + 0.01); add(ig, ironMat);
    var sg = new T.ExtrudeGeometry(shape(liquidPoly(ironY, ironY + slagT)), { depth: D - 0.02, bevelEnabled: false }); sg.translate(0, 0, -D + 0.01); add(sg, slagMat);
    lab('Hot metal (iron)', V([-3.9, (Math.max(-2.9, ironY - 1.2) + ironY) / 2 - 0.2])); lab(S.viscous ? 'Viscous slag' : 'Slag', V([-3.9, ironY + slagT / 2]));
    anchors.level = V([-2.6, ironY + slagT + 0.05]); anchors.hearth = V([-2.4, ironY - 0.7]); anchors.deadman = V([-3.2, -1.9]);

    /* coke (deadman) */
    (function () {
      var tight = S.deadman === 'tight', n = tight ? 520 : 330, R = rnd(77), g = new T.IcosahedronGeometry(1, 0); disp.push(g);
      var im = new T.InstancedMesh(g, std({ color: '#ffffff', roughness: 0.85, flatShading: true }), n), m4 = new T.Matrix4(), q = new T.Quaternion(), s = new T.Vector3(), p = new T.Vector3(), c = new T.Color(), k = 0;
      for (var i = 0; i < n * 3 && k < n; i++) {
        var x = -5.4 + R() * 5.1, y = -2.85 + R() * 5.2; if (x > face(y) - 0.12) continue;
        if (x > -(md + 0.45) && Math.abs(dist([x, y])) < mr + 0.25 && md > 0) continue; if (Math.abs(dist([x, y])) < r + 0.25 && x > -(md + 0.4)) continue;
        var inLiq = y < ironY + slagT, z = inLiq ? (-0.12 + R() * 0.16) : -0.1 - R() * (D - 0.3);
        if (inLiq && R() < (tight ? 0.35 : 0.65)) continue;
        var sz = (tight ? (y < ironY ? 0.04 + R() * 0.04 : 0.06 + R() * 0.05) : 0.07 + R() * 0.07) * (inLiq ? 0.8 : 1);
        p.set(x, y, z); q.setFromEuler(new T.Euler(R() * 6, R() * 6, R() * 6)); s.set(sz, sz * (0.7 + R() * 0.4), sz);
        m4.compose(p, q, s); im.setMatrixAt(k, m4);
        c.set(inLiq ? (tight ? '#3d2a20' : '#4a2510') : (R() < 0.5 ? '#2b2c2f' : '#3a3633')); if (tight && y < ironY) c.set('#55504a'); im.setColorAt(k, c); k++; }
      im.count = k; scene.add(im);
      lab(S.deadman === 'tight' ? 'Dense deadman (fines)' : 'Coke bed / deadman', V([-4.0, Math.min(2.2, ironY + slagT + 0.7)]));
    })();

    /* ---- taphole channel (in axis frame: +x outward, 0 = mouth) ---- */
    var AX = new T.Group(); AX.position.set(W, 0, 0); AX.rotation.z = a; scene.add(AX);
    function halfCyl(x0, x1, rad, mat, side) { var g = new T.CylinderGeometry(rad, rad, x1 - x0, 28, 1, true, PI / 2, PI); g.rotateZ(-PI / 2); g.translate((x0 + x1) / 2, 0, 0); var m = add(g, mat, AX); if (side) mat.side = T.DoubleSide; return m; }
    function fill(x0, x1, rad, mat, z) { halfCyl(x0, x1, rad, mat, true); var p = add(new T.PlaneGeometry(x1 - x0, 2 * rad), mat, AX); p.position.set((x0 + x1) / 2, 0, z || 0.006); return p; }
    var boreMat = std({ color: '#2a140b', emissive: mode === 'closed' ? '#000000' : '#4a1805', roughness: 0.8, side: T.DoubleSide });
    halfCyl(-L, 0.02, r, boreMat, true);
    anchors.mouth = V([W + 0.12, 0.18], 0.05); anchors.inner = V(P(L)); anchors.chan = V(P(L * 0.45)); anchors.ghost = V([W - 3.2 * Math.cos(12 * PI / 180), -3.2 * Math.sin(12 * PI / 180) - 0.05]);
    lab('Taphole channel', V(perp(P(L * 0.28), r + 0.28)));

    var liqMatCh = basic({ map: X.iron, color: S.stream === 'slag' ? '#ff9a40' : cold ? '#e07a30' : '#ffffff' });
    var clayFresh = std({ map: X.clay, roughness: 0.9 }), clayCured = std({ map: S.hardClay ? X.clayHard : S.wetClay ? X.clayWet : X.clayCured, roughness: S.wetClay ? 0.35 : 0.95, metalness: S.wetClay ? 0.2 : 0 });

    /* ---- mushroom ---- */
    if (md > 0) {
      var prof = [], N = 18, t0 = Lwall - 0.45; prof.push(new T.Vector2(mr, t0));
      for (var i = 0; i <= N; i++) { var u = i / N, tt = Lwall + md * u, rho = r + (mr - r) * Math.sqrt(Math.max(0, 1 - u * u)) * (1 - 0.04 * u); prof.push(new T.Vector2(rho, tt)); }
      var mushT = { cracked: X.clayCrack, eroded: X.clayCrack, layered: X.clayLayer }[S.mush] || X.clayCured;
      var mm = std({ map: mushT, roughness: 0.95, side: T.DoubleSide, color: S.mush === 'huge' || S.mush === 'big' ? '#c8b8a8' : '#ffffff' });
      var lg = new T.LatheGeometry(prof, 30, PI / 2, PI); lg.rotateZ(PI / 2);
      var k = S.mush === 'uneven' ? 0.28 : 0;
      if (k) { var pa = lg.attributes.position; for (var j = 0; j < pa.count; j++) { var yy = pa.getY(j), zz = pa.getZ(j), rr = Math.sqrt(yy * yy + zz * zz) || 1, f = 1 + k * yy / rr; pa.setY(j, yy * f); pa.setZ(j, zz * f); } lg.computeVertexNormals(); }
      add(lg, mm, AX);
      // section faces of the mushroom (both sides of the bore), clipped to the hearth side of the wall
      [1, -1].forEach(function (sg2) {
        var kk = 1 + k * sg2, pts = []; prof.forEach(function (v) { pts.push([-v.y, sg2 * Math.max(r, v.x * kk)]); }); pts.push([-prof[prof.length - 1].y, sg2 * r], [-t0, sg2 * r]);
        var wp = pts.map(function (q) { return [W + q[0] * ca - q[1] * sa, q[0] * sa + q[1] * ca]; });
        wp = clip(wp, function (q) { return face(q[1]) - q[0]; }); if (wp.length < 3) return;
        var sm = add(new T.ShapeGeometry(shape(wp)), std({ map: mushT === X.clayCured ? X.clay : mushT, roughness: 0.95, color: '#ffffff', emissive: '#3a2412' })); sm.position.z = 0.004;
        var ol = new T.Line(new T.BufferGeometry().setFromPoints(wp.concat([wp[0]]).map(function (q) { return new T.Vector3(q[0], q[1], 0.006); })), M(new T.LineBasicMaterial({ color: '#2a1608' }))); disp.push(ol.geometry); scene.add(ol);
      });
      anchors.mush = V(perp(P(Lwall + md * 0.35), (mr + r) * 0.55)); lab(S.mush === 'huge' ? 'Mushroom (too big)' : 'Clay mushroom', V(perp(P(Lwall + md * 0.5), -(mr * 0.85 + 0.2))));
    } else { anchors.mush = V(P(L + 0.1)); }

    /* ---- channel contents per mode ---- */
    var dyn = { t: 0 }, bitX = 0;
    if (mode === 'cast') {
      var chLiq = fill(-L, 0, r * 0.97, liqMatCh); dyn.chLiq = liqMatCh;
      if (S.skull) { for (var s1 = 0; s1 < 3; s1++) { var sk = add(new T.DodecahedronGeometry(r * 0.55, 0), std({ color: '#4b4b52', metalness: 0.7, roughness: 0.45, emissive: '#2a0a00', flatShading: true }), AX); sk.position.set(-L * (0.35 + s1 * 0.2), (s1 % 2 ? 1 : -1) * r * 0.4, 0); sk.scale.set(1.3, 0.8, 0.8); } anchors.skull = V(P(L * 0.55)); }
    } else if (mode === 'closed') {
      fill(-L, 0, r * 0.97, clayCured);
      if (S.stream === 'ooze') { var sm2 = basic({ color: '#ffb347' }); var th = add(new T.PlaneGeometry(L, r * 0.22), sm2, AX); th.position.set(-L / 2, -r * 0.25, 0.01); th.rotation.z = 0.02; dyn.seep = sm2; }
      if (S.voids) { var vm = basic({ color: '#120804' }); for (var v = 0; v < 6; v++) { var vh = add(new T.CircleGeometry(r * (0.25 + (v % 3) * 0.12), 10), vm, AX); vh.position.set(-L * (0.12 + v * 0.14), ((v % 2) ? 1 : -1) * r * 0.35, 0.012); } }
    } else if (mode === 'drill' || mode === 'lance') {
      dyn.plugMesh = []; // rebuilt each frame cheaply: plug ahead of bit
      dyn.plugMat = mode === 'lance' ? std({ color: '#3a3a40', metalness: 0.6, roughness: 0.5, emissive: '#3a0e02', map: X.clayHard }) : clayCured;
      dyn.plugCyl = halfCyl(-L, 0, r * 0.97, dyn.plugMat, true); dyn.plugFace = add(new T.PlaneGeometry(1, 2 * r * 0.97), dyn.plugMat, AX); dyn.plugFace.position.z = 0.006;
      if (S.stream === 'around') { fill(-L, 0, r * 0.97, liqMatCh); dyn.plugCyl.visible = dyn.plugFace.visible = false; }
      if (S.skull || S.frozen) { for (var s2 = 0; s2 < (S.frozen ? 4 : 2); s2++) { var sk2 = add(new T.DodecahedronGeometry(r * 0.75, 0), std({ color: '#55555c', metalness: 0.75, roughness: 0.4, emissive: '#3a1004', flatShading: true }), AX); sk2.position.set(-L * (S.frozen ? 0.62 + s2 * 0.1 : 0.66 + s2 * 0.12), (s2 % 2 ? 0.4 : -0.3) * r, 0.02); sk2.scale.set(1.25, 1, 0.6); }
        anchors.skull = V(P(L * (S.frozen ? 0.75 : 0.72)), 0.05); }
    } else if (mode === 'gun') {
      var pl = S.plug != null ? S.plug : 1; dyn.plugL = pl;
      fill(-L * pl, 0, r * 0.97, clayFresh);
      if (pl < 1) fill(-L, -L * pl, r * 0.97, S.early ? liqMatCh : basic({ map: X.iron, color: '#ffcc88' }));
      if (pl >= 1) { var cap = add(new T.SphereGeometry(r * 2.2, 16, 10, PI / 2, PI), clayFresh, AX); cap.position.set(-L - r, 0, 0); cap.scale.set(0.6, 1, 1); }
    }

    /* ---- outer face ring, runner, floor ---- */
    var ringT = (S.faceDamage || S.mush === 'cracked') ? X.clayCrack : X.clayCured;
    var ring = add(new T.RingGeometry(r * 1.05, 0.72, 40), std({ map: ringT, roughness: 0.95, side: T.DoubleSide })); ring.rotation.y = PI / 2; ring.position.set(W + 0.012, 0, 0);
    if (S.faceDamage) { var pm = basic({ color: '#0e0703' }); for (var h1 = 0; h1 < 7; h1++) { var hh = add(new T.CircleGeometry(0.035 + (h1 % 3) * 0.02, 8), pm); hh.rotation.y = PI / 2; var an = h1 * 0.9 + 0.3, rad1 = 0.3 + (h1 % 3) * 0.12; hh.position.set(W + 0.02, Math.sin(an) * rad1, Math.cos(an) * rad1); } }
    var floorM = std({ map: X.floor, roughness: 1 }); function flr(x0, x1, z0, z1) { var g = new T.PlaneGeometry(x1 - x0, z1 - z0); g.rotateX(-PI / 2); var m = add(g, floorM); m.position.set((x0 + x1) / 2, F, (z0 + z1) / 2); }
    flr(2.34, XS, -4, 4); flr(XS, W + 11, -4, -1.3); flr(XS, W + 5.6, 1.3, 4); flr(W + 7.0, W + 11, 1.3, 4);
    var refM = std({ map: S.runnerWorn ? X.refrWorn : X.refr, roughness: 0.95 });
    function box(x0, x1, y0, y1, z0, z1, m) { var b = add(new T.BoxGeometry(x1 - x0, y1 - y0, z1 - z0), m || refM); b.position.set((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2); return b; }
    box(XS, XE, F - 0.9, F - 0.65, -1.3, 1.3); box(XS, XE, F - 0.65, F + 0.15, -1.3, -0.65);
    box(XS, W + 5.8, F - 0.65, F + 0.15, 0.65, 1.3); box(W + 6.8, XE, F - 0.65, F + 0.15, 0.65, 1.3); box(W + 5.8, W + 6.8, F - 0.65, F - 0.3, 0.65, 1.3);
    box(W + 5.8, W + 6.8, F - 0.8, F - 0.55, 1.3, 4); box(W + 5.6, W + 5.8, F - 0.8, F + 0.15, 1.3, 4); box(W + 6.8, W + 7.0, F - 0.8, F + 0.15, 1.3, 4);
    var skB = S.skimmerBad ? F - 0.6 : F - 0.45; box(SK, SK + 0.3, skB, F + 0.95, -0.65, 0.65, std({ color: '#3d3733', roughness: 0.9 }));
    box(W + 8.3, W + 8.5, F - 0.65, F - 0.36, -0.65, 0.65);
    lab('Main runner', V([W + 4.4, F + 0.25], -1.0)); lab('Skimmer', V([SK + 0.15, F + 1.1])); lab('Slag runner', V([W + 6.3, F + 0.25], 3.2));
    anchors.runner = new T.Vector3(W + 4.2, F - 0.1, 0.2); anchors.skimmer = new T.Vector3(SK + 0.15, F + 0.6, 0.66); anchors.overflow = new T.Vector3(W + 3.2, F + 0.1, 1.8); anchors.back = new T.Vector3(XS + 0.5, F - 0.1, 0); anchors.runnerSide = new T.Vector3(W + 1.9, F + 0.15, 0.8);

    var casting = mode === 'cast' || (mode === 'drill' && S.stream === 'around') || (mode === 'gun' && S.early);
    var runLvl = S.overflow || S.backflow ? F + 0.1 : F - 0.3;
    dyn.flows = [];
    function flowPlane(x0, x1, z0, z1, y, t, color, sp) { var tt = cl(t); tt.repeat.set((x1 - x0) / 3, 1); var m = basic({ map: tt, color: color || '#ffffff' }); var g = new T.PlaneGeometry(x1 - x0, z1 - z0); g.rotateX(-PI / 2); var me = add(g, m); me.position.set((x0 + x1) / 2, y, (z0 + z1) / 2); dyn.flows.push({ t: tt, sp: sp }); return me; }
    if (casting || mode === 'gun') {
      var dim = mode === 'gun' && !S.early ? '#b06a3a' : '#ffffff';
      flowPlane(XS, SK, -0.64, 0.64, runLvl, X.slagFlow, dim, 0.35); flowPlane(SK + 0.3, XE, -0.64, 0.64, F - 0.42, X.flow, dim, 0.5);
      var sgp = new T.PlaneGeometry(1.0, 3.6); sgp.rotateX(-PI / 2); var slagRun = add(sgp, basic({ map: cl(X.slagFlow), color: S.skimmerBad ? '#6a3010' : dim })); slagRun.position.set(W + 6.3, F - 0.5, 2.3);
      if (S.overflow) { var om = basic({ map: cl(X.flow), color: '#ffcf80' }); [[W + 2.2, 1.75, 0.9, 0.5], [W + 3.6, 2.0, 1.2, 0.7], [W + 1.3, -1.9, 0.7, 0.45], [W + 4.6, 1.6, 0.6, 0.35]].forEach(function (q) { var g = new T.CircleGeometry(1, 20); g.rotateX(-PI / 2); var me = add(g, om); me.scale.set(q[2], 1, q[3]); me.position.set(q[0], F + 0.01, q[1]); }); }
      if (S.backflow) { var bm = basic({ map: cl(X.slagFlow), color: '#ffb060' }); var bg = new T.PlaneGeometry(XS - 2.34 + 0.05, 1.2); bg.rotateX(-PI / 2); var me2 = add(bg, bm); me2.position.set((XS + 2.34) / 2, F + 0.02, 0); }
    } else {
      var cg = new T.PlaneGeometry(XE - XS, 1.28); cg.rotateX(-PI / 2); var crust = add(cg, std({ map: cl(X.crust), roughness: 1 })); crust.position.set((XS + XE) / 2, F - 0.62, 0);
    }
    if (S.wetRunner) { var wm = std({ color: '#2a3c4c', roughness: 0.15, metalness: 0.4, transparent: true, opacity: 0.55 }); [[W + 2.5, -1.0], [W + 3.6, 1.0], [W + 1.6, 0.98]].forEach(function (q) { var g = new T.CircleGeometry(0.28, 14); g.rotateX(-PI / 2); var m2 = add(g, wm); m2.position.set(q[0], F + 0.16, q[1]); }); }

    /* danger zone */
    if (S.zone) { var R0 = S.zone > 1 ? 3.9 : 2.7, cx = W + 1.9, pts = []; for (var zi = 0; zi < 48; zi++) { var an2 = zi / 48 * 2 * PI; pts.push([cx + Math.cos(an2) * R0, Math.sin(an2) * R0]); }
      pts = clip(pts, function (q) { return q[0] - (2.42); }); var zg = new T.ShapeGeometry(shape(pts)); zg.rotateX(-PI / 2); var zm = add(zg, basic({ map: X.stripe, transparent: true, opacity: 0.32, depthWrite: false })); zm.position.y = F + 0.2; zm.renderOrder = 2;
      anchors.zone = new T.Vector3(cx + R0 * 0.55, F + 0.25, R0 * 0.7); hud.push({ t: 'Splash zone: keep people clear', s: 3 }); }

    /* ---- machines ---- */
    var steel = std({ color: '#7d8894', metalness: 0.7, roughness: 0.4 }), dark = std({ color: '#2d343c', metalness: 0.5, roughness: 0.55 }), yel = std({ color: '#c9a227', metalness: 0.3, roughness: 0.5 });
    function cylX(x0, x1, rad, mat, parent, rad2) { var g = new T.CylinderGeometry(rad2 == null ? rad : rad2, rad, x1 - x0, 20); g.rotateZ(-PI / 2); g.translate((x0 + x1) / 2, 0, 0); return add(g, mat, parent); }
    if (mode === 'drill') {
      var mast = add(new T.BoxGeometry(L + 2.4, 0.2, 0.3), yel, AX); mast.position.set((L + 2.4) / 2 + 0.6, 0.45, 0);
      var carriage = add(new T.BoxGeometry(0.55, 0.42, 0.42), dark, AX); carriage.position.y = 0.28;
      var rod = cylX(0, 1, 0.055, steel, AX); var bitM = std({ color: '#9aa3ad', metalness: 0.8, roughness: 0.3, emissive: S.stall ? '#ff4a00' : '#000000', emissiveIntensity: S.stall ? 0.8 : 0 });
      var bit = cylX(-0.22, 0, r * 0.9, bitM, AX); dyn.drill = { rod: rod, bit: bit, car: carriage };
      var mastEnd = new T.Vector3(L + 3.0, 0.45, 0).applyMatrix4(new T.Matrix4().makeRotationZ(a)).add(new T.Vector3(W, 0, 0)); box(mastEnd.x - 0.12, mastEnd.x + 0.12, F, mastEnd.y, -0.12, 0.12, dark);
      lab('Taphole drill', new T.Vector3(W + 2.6, 1.15, 0));
    } else if (mode === 'gun') {
      var G = new T.Group(); AX.add(G);
      cylX(0.03, 0.45, 0.28, steel, G, 0.13); cylX(0.45, 2.9, 0.34, dark, G); cylX(0.9, 2.6, 0.12, steel, G).position.y = 0.45;
      var armA = add(new T.BoxGeometry(0.25, 0.25, 2.6), yel, G); armA.position.set(1.8, -0.15, 1.3);
      dyn.gun = G; G.userData.home = { x: 0, y: 0, rz: 0 };
      if (S.gap) { G.position.set(0.26, 0.17, 0); G.rotation.z = 0.12; }
      lab('Mud gun', new T.Vector3(W + 2.2, 1.1, 0.4)); anchors.gunNose = V([W + 0.15, 0.32], 0.1); anchors.gun = new T.Vector3(W + 1.9, 0.75, 0.2);
      if (S.back || S.push) hud.push({ t: 'Gun pressure falling', s: 3 });
    } else if (mode === 'lance') {
      var lx = -L * 0.55; cylX(lx, 7, 0.035, steel, AX); cylX(5.5, 7.5, 0.06, dark, AX);
      bitX = lx; dyn.lanceTip = lx; lab('O2 lance', new T.Vector3(W + 3.4, 1.0, 0));
    }
    anchors.bit = V(P(0.3)); anchors.gauge = V(perp(P(L * 0.5), 0.75));

    /* ---- extras ---- */
    if (S.ghost) { var gpts = [V(P(-1.4)), V([W - 4 * Math.cos(12 * PI / 180), -4 * Math.sin(12 * PI / 180)])]; gpts = [new T.Vector3(W + 1.4 * Math.cos(12 * PI / 180), 1.4 * Math.sin(12 * PI / 180), 0.03), new T.Vector3(W - 4 * Math.cos(12 * PI / 180), -4 * Math.sin(12 * PI / 180), 0.03)];
      var gl = new T.Line(new T.BufferGeometry().setFromPoints(gpts), M(new T.LineDashedMaterial({ color: '#5fe0db', dashSize: 0.16, gapSize: 0.1, depthTest: false }))); gl.computeLineDistances(); gl.renderOrder = 5; disp.push(gl.geometry); scene.add(gl); }
    if (S.gauge) { var ratio = L / L_TARGET, gcol = ratio < 0.9 ? '#ff5a6e' : ratio > 1.15 ? '#ffd166' : '#4fd6a2';
      var ga = [V(perp(P(0), 0.62), 0.03), V(perp(P(L), 0.62), 0.03)], gt = [V(perp(P(L_TARGET), 0.45), 0.03), V(perp(P(L_TARGET), 0.85), 0.03)];
      [ga, gt, [V(perp(P(0), 0.45), 0.03), V(perp(P(0), 0.8), 0.03)]].forEach(function (pp, ii) { var ln = new T.Line(new T.BufferGeometry().setFromPoints(pp), M(new T.LineBasicMaterial({ color: ii === 1 ? '#ffffff' : gcol, depthTest: false }))); ln.renderOrder = 6; disp.push(ln.geometry); scene.add(ln); });
      lab('Target', V(perp(P(L_TARGET), 1.0))); hud.push({ t: 'Length ' + Math.round(ratio * 100) + '% of target', s: ratio < 0.9 ? 3 : ratio > 1.15 ? 1 : 0 }); }
    if (S.tc || S.hot) { var tcs = [[0.55, -1.25], [1.05, 0.8], [1.35, -0.75]], tm = basic({ color: S.hot ? '#ff3b3b' : '#ffd166' });
      tcs.forEach(function (q) { var g = new T.CylinderGeometry(0.035, 0.035, 0.5, 8); g.rotateZ(PI / 2); var m3 = add(g, std({ color: '#c0c6cc', metalness: 0.8, roughness: 0.3 })); m3.position.set(q[0] + 0.25, q[1], 0.02); var dot = add(new T.SphereGeometry(0.11, 14, 10), tm); if (S.hot) { var sp3 = new T.Sprite(M(new T.SpriteMaterial({ map: X.glow, color: '#ff3020', blending: T.AdditiveBlending, transparent: true, depthWrite: false }))); sp3.scale.set(0.7, 0.7, 1); sp3.position.set(q[0], q[1], 0.05); scene.add(sp3); } dot.position.set(q[0], q[1], 0.03); });
      anchors.tc = V(tcs[2], 0.04); hud.push(S.hot ? { t: 'Taphole-block TC rising', s: 3 } : { t: 'Watch block thermocouples', s: 1 }); dyn.tc = tm; }
    if (S.hot) { var hp = add(new T.PlaneGeometry(3.6, 4.0), basic({ map: X.hot, transparent: true, opacity: 1, blending: T.AdditiveBlending, depthWrite: false })); hp.position.set(0.55, -0.5, 0.01); dyn.hotP = hp; }
    if (S.cold) hud.push({ t: 'Cold hearth: dull liquid', s: 2 });
    if (S.other) hud.push({ t: 'Open the other taphole', s: 3 });
    if (S.stall) hud.push({ t: 'Drill time far above normal', s: 2 });
    if (S.gasCloud) hud.push({ t: 'CO: keep monitor on', s: 3 });
    if (S.crack && md > 0) { var cp = [perp(P(Lwall - 0.1), r), perp(P(Lwall + md * 0.2), r + 0.18), perp(P(Lwall + md * 0.35), r + 0.32), perp(P(Lwall + md * 0.55), (mr + r) * 0.5), perp(P(Lwall + md * 0.62), (mr + r) * 0.58)];
      var poly = cp.map(function (q) { return [q[0] + 0.035, q[1]]; }).concat(cp.slice().reverse().map(function (q) { return [q[0] - 0.035, q[1]]; }));
      var cm = add(new T.ShapeGeometry(shape(poly)), basic({ color: mode === 'cast' ? '#ffcf7a' : '#1a0c05' })); cm.position.z = 0.008; anchors.crack = V(cp[2], 0.01); }
    var arrows = []; function arrowPath(path, n, color, sp) { var am = basic({ color: color }); for (var i2 = 0; i2 < n; i2++) { var g = new T.ConeGeometry(0.07, 0.22, 10); g.rotateZ(-PI / 2); var me3 = add(g, am); arrows.push({ m: me3, path: path, u: i2 / n, sp: sp }); } }
    if (S.flow) { arrowPath([[-4.6, -2.45], [-1.2, -2.35], [-0.2 + e, -1.7], [-0.15 + e, -0.9], P(L)], 9, '#7fe9ff', 0.12); anchors.flow = V([-1.0, -2.2], 0.05); }
    if (S.push) arrowPath([P(L), P(L * 0.66), P(L * 0.33), P(0.1)], 5, '#7fe9ff', 0.25);
    if (S.backflow) arrowPath([[W + 6.5, F + 0.25], [W + 3.5, F + 0.25], [W + 0.7, F + 0.25]].map(function (q) { return [q[0], q[1]]; }), 6, '#7fe9ff', 0.15);

    /* ---- particles ---- */
    var PS = new PSys(3200, 0.24), SP = new PSys(700, 0.06), SM = new PSys(260, 0.75, null, 0.8), FL = new PSys(320, 0.34);
    [PS, SP, SM, FL].forEach(function (p) { scene.add(p.obj); disp.push(p.g, p.mat); });
    var mouth = new T.Vector3(W + 0.02, 0, 0), U0 = new T.Vector3(ca, sa, 0); var yaw = (S.yaw || 0) * PI / 180; U0.applyAxisAngle(new T.Vector3(0, 1, 0), -yaw);
    var glow = new T.Sprite(M(new T.SpriteMaterial({ map: X.glow, color: '#ff9a3a', blending: T.AdditiveBlending, transparent: true, depthWrite: false }))); glow.position.copy(mouth); glow.scale.set(0, 0, 1); scene.add(glow);
    var tipGlow = new T.Sprite(M(new T.SpriteMaterial({ map: X.glow, color: '#fff6c8', blending: T.AdditiveBlending, transparent: true, depthWrite: false }))); tipGlow.scale.set(0, 0, 1); scene.add(tipGlow);
    var stream = casting ? (S.stream || 'normal') : (S.stream === 'ooze' ? 'ooze' : null);
    var acc = { s: 0, f: 0, m: 0, sp: 0, w: 0 }, burstT = 0.8, R2 = rnd(99);
    function land(q) {
      if (q.x < 2.36 && q.k !== 3) return false;
      var inR = q.x > XS && q.x < XE && Math.abs(q.z) < 0.65, inLip = q.x > XS && Math.abs(q.z) < 1.3;
      var lvl = inR ? (casting ? (q.x < SK ? runLvl : F - 0.42) : F - 0.6) : inLip ? F + 0.15 : F;
      if (q.y < lvl) { if (q.k === 0 && R2() < 0.18 && SP.n < SP.N - 4) { for (var j2 = 0; j2 < 2; j2++) SP.add(q.x, lvl + 0.02, q.z, (R2() - 0.5) * 1.5, 0.8 + R2() * 1.4, (R2() - 0.5) * 1.5, 0.4, 9.8, C.spark, C.sparkEnd, 1); } return true; }
      return false;
    }
    var tmp = new T.Vector3(), side = new T.Vector3(), up2 = new T.Vector3();
    function emit(dir, speed, jit, rad, c0, c1, life) {
      side.set(0, 0, 1); up2.crossVectors(dir, side).normalize();
      var ang = R2() * 2 * PI, rr = Math.sqrt(R2()) * rad;
      var x = mouth.x + side.x * Math.cos(ang) * rr + up2.x * Math.sin(ang) * rr, y = mouth.y + side.y * Math.cos(ang) * rr + up2.y * Math.sin(ang) * rr, z = mouth.z + Math.cos(ang) * rr;
      var sp = speed * (0.92 + R2() * 0.16);
      PS.add(x, y, z, dir.x * sp + (R2() - 0.5) * jit, dir.y * sp + (R2() - 0.5) * jit, dir.z * sp + (R2() - 0.5) * jit, life || 1.6, 9.8, c0, c1, 0);
    }
    var sDir = new T.Vector3(), sDir2 = new T.Vector3();
    function streamStep(dt, t) {
      if (!stream) return 0; var rate = 0, sp = 3.2, jit = 0.12, rad = r * 0.55, c0 = C.iron, c1 = C.ironEnd, str = 1;
      sDir.copy(U0);
      switch (stream) {
        case 'normal': case 'around': rate = 1300; if (stream === 'around') { rad = r * 0.95; jit = 0.6; sp = 2.6; } break;
        case 'iron': rate = 1300; c0 = C.ironHot; break;
        case 'slag': rate = 1200; c0 = C.slag; c1 = C.slagEnd; sp = 2.9; jit = 0.18; break;
        case 'weak': rate = 260; sp = 1.5; rad = r * 0.35; jit = 0.05; str = 0.45; break;
        case 'strong': rate = 1700; sp = 4.3; rad = r * 0.8; jit = 0.35; str = 1.6; break;
        case 'spray': rate = 1000; sp = 3.4; jit = 2.6; rad = r * 0.8; str = 1.2; break;
        case 'split': rate = 1000; break;
        case 'pulse': var ph = 0.5 + 0.5 * Math.sin(t * 2 * PI / 2.4); rate = 250 + 1000 * ph; sp = 2.2 + 1.6 * ph; str = 0.5 + ph; var sl = Math.sin(t * 2 * PI / 4.8) > 0; c0 = sl ? C.slag : C.iron; c1 = sl ? C.slagEnd : C.ironEnd; if (dyn.chLiq) dyn.chLiq.color.set(sl ? '#ff9a40' : '#ffffff'); break;
        case 'spit': rate = 520; sp = 2.8; jit = 0.3; burstT -= dt; if (burstT <= 0) { burstT = 0.55 + R2() * 1.0; dyn.flash = 1; for (var b = 0; b < 170; b++) { tmp.set(U0.x + (R2() - 0.5) * 1.6, U0.y + (R2() - 0.2) * 1.6, U0.z + (R2() - 0.5) * 1.6).normalize(); emit(tmp, 3 + R2() * 4, 0.5, r * 0.6, R2() < 0.4 ? C.slag : C.ironHot, C.ironEnd, 1.2); } } break;
        case 'ooze': acc.s += dt * 4; while (acc.s >= 1) { acc.s -= 1; PS.add(W + 0.04, -r * 0.8, (R2() - 0.5) * 0.15, 0.06, 0, (R2() - 0.5) * 0.05, 2.2, 3.0, C.iron, C.ironEnd, 3); } return 0.25;
      }
      if (stream === 'split') { sDir.copy(U0).applyAxisAngle(new T.Vector3(0, 0, 1), 0.2).applyAxisAngle(new T.Vector3(0, 1, 0), 0.12); sDir2.copy(U0).applyAxisAngle(new T.Vector3(0, 0, 1), -0.22).applyAxisAngle(new T.Vector3(0, 1, 0), -0.1); }
      if (mode === 'gun' && S.early) { var gp = dyn.gunPhase || 0; rate *= Math.max(0, 1 - gp * 1.1); str *= Math.max(0, 1 - gp); }
      acc.s += rate * dt;
      while (acc.s >= 1) { acc.s -= 1; var d0 = stream === 'split' ? (R2() < 0.5 ? sDir : sDir2) : sDir; emit(d0, sp, jit, rad, c0, c1); }
      return str;
    }
    function effects(dt, t) {
      // sparks at a stalled bit / lance tip
      var bw = dyn.bitWorld;
      if (S.stall && bw) { acc.sp += dt * 120; while (acc.sp >= 1) { acc.sp -= 1; SP.add(bw.x, bw.y, 0.05, 0.6 + R2() * 2.2, (R2() - 0.3) * 2.2, R2() * 1.5, 0.35, 6, C.spark, C.sparkEnd, 1); } }
      if (mode === 'lance' && bw) { acc.sp += dt * 220; while (acc.sp >= 1) { acc.sp -= 1; var o = R2() < 0.5; SP.add(o ? W + 0.05 : bw.x, o ? 0 : bw.y, o ? 0 : 0.05, (o ? 2 : 0.5) + R2() * 3, (R2() - 0.3) * 2.5, (R2() - 0.5) * 2.5, 0.5, 6, C.lance, C.lanceEnd, 1); } }
      if (S.steam) { acc.m += dt * (mode === 'drill' ? 26 : 14); while (acc.m >= 1) { acc.m -= 1; SM.add(W + 0.1, 0.1, (R2() - 0.5) * 0.3, 0.5 + R2() * 0.7, 0.5 + R2() * 0.6, (R2() - 0.5) * 0.6, 2.4, -0.15, C.steam, C.steamEnd, 2, 0.4); } }
      if (S.gasCloud) { acc.m += dt * 7; while (acc.m >= 1) { acc.m -= 1; SM.add(W + 0.3 + R2() * 0.8, -0.2 + R2() * 1.2, -0.6 + R2() * 1.4, 0.15 + R2() * 0.2, 0.08 + R2() * 0.15, (R2() - 0.5) * 0.2, 4.5, 0, C.co, C.coEnd, 2); } }
      var fpts = S.flame === 'mouth' ? [[W + 0.06, 0.08, 0]] : S.flame === 'block' ? [[W + 0.04, 0.62, -0.25], [W + 0.04, -0.55, -0.4], [W + 0.04, 0.2, 0.45], [W + 0.05, 0, 0]] : S.flame === 'joint' ? [[W + 0.18, 0.3, 0.1], [W + 0.12, -0.22, 0.15]] : null;
      if (fpts) { acc.f += dt * 90; while (acc.f >= 1) { acc.f -= 1; var fp = fpts[(R2() * fpts.length) | 0]; FL.add(fp[0] + R2() * 0.05, fp[1], fp[2] + (R2() - 0.5) * 0.1, 0.25 + R2() * 0.35, 0.5 + R2() * 0.6, (R2() - 0.5) * 0.25, 0.55, -0.6, C.flame, C.flameEnd, 2); } }
      if (S.water) { acc.w += dt * 30; while (acc.w >= 1) { acc.w -= 1; var sx = 1.85 + R2() * 0.3, sy = 0.9 + R2() * 0.5, tgt = perp(P((W - sx + 0.4) / ca), r); SP.add(sx, sy, 0.03, (tgt[0] - sx) * 0.6, (tgt[1] - sy) * 0.6, 0, 1.6, 0, C.water, C.waterEnd, 4); } }
      if (S.leak && dyn.gun) { var gx = W + 0.2, gy = 0.05; acc.f += dt * 50; while (acc.f >= 1) { acc.f -= 1; var cly = R2() < 0.6; SP.add(gx, gy + (R2() - 0.5) * 0.5, (R2() - 0.5) * 0.5, 0.4 + R2() * 0.8, R2() * 0.6, (R2() - 0.5) * 0.8, 1.1, 9.8, cly ? C.clay : C.iron, cly ? C.clayEnd : C.ironEnd, 0); } }
      if (S.overflow && casting) { acc.w += dt * 40; while (acc.w >= 1) { acc.w -= 1; var ox = W + 1.4 + R2() * 3.5, oz = R2() < 0.7 ? 1.3 : -1.3; PS.add(ox, F + 0.17, oz * 0.98, (R2() - 0.5) * 0.2, 0, Math.sign(oz) * (0.3 + R2() * 0.4), 0.9, 4, C.iron, C.ironEnd, 0); } }
    }

    var bitWorld = new T.Vector3();
    function plugTo(pl) { if (!dyn.plugCyl || !dyn.plugCyl.visible) return; var k = pl / L; dyn.plugCyl.scale.x = k; dyn.plugCyl.position.x = -(L - pl); dyn.plugFace.scale.x = pl; dyn.plugFace.position.x = -L + pl / 2; }
    function step(dt, t) {
      dyn.t = t;
      // drill
      if (dyn.drill) { var dr = S.drill || [0.3, 0.95, 8], per = dr[2], ph = (t % (per + 1.5)) / per; ph = Math.min(1, ph); if (S.stall) ph = 0.5 + 0.5 * Math.sin(t * 0.3);
        var dd = dr[0] + (dr[1] - dr[0]) * ph; if (S.stall) dd += Math.sin(t * 37) * 0.004; bitX = -dd * L;
        var rodL = L + 1.0; dyn.drill.rod.scale.x = rodL; dyn.drill.rod.position.x = bitX; dyn.drill.rod.rotation.x = t * (S.stall ? 2 : 14);
        dyn.drill.bit.position.x = bitX; dyn.drill.bit.rotation.x = t * (S.stall ? 2 : 14); dyn.drill.car.position.x = bitX + rodL + 0.25;
        plugTo(Math.max(0.001, L + bitX - 0.12));
        bitWorld.set(W + (bitX - 0.1) * ca, (bitX - 0.1) * sa, 0); dyn.bitWorld = bitWorld; anchors.bit.copy(bitWorld); }
      if (mode === 'lance') { bitWorld.set(W + dyn.lanceTip * ca, dyn.lanceTip * sa, 0.05); dyn.bitWorld = bitWorld; anchors.bit.copy(bitWorld);
        tipGlow.position.copy(bitWorld); var fl = 0.8 + Math.random() * 0.5; tipGlow.scale.set(1.5 * fl, 1.5 * fl, 1);
        plugTo(L + dyn.lanceTip); }
      // gun
      if (dyn.gun) { var G2 = dyn.gun;
        if (S.back) { var bp = (t % 4) / 4, kk = bp < 0.7 ? bp / 0.7 : 1 - (bp - 0.7) / 0.3; G2.position.x = 0.5 * kk; dyn.gunBack = kk; }
        if (S.early) { var cyc = t % 7, gp = cyc < 1.5 ? 0 : cyc < 4 ? (cyc - 1.5) / 2.5 : 1; gp = gp * gp * (3 - 2 * gp); dyn.gunPhase = gp;
          G2.position.set(1.6 * (1 - gp), 0.5 * (1 - gp), 2.8 * (1 - gp)); G2.rotation.y = -0.9 * (1 - gp); } }
      if (S.back && dyn.gun) { acc.f += dt * 30 * (dyn.gunBack || 0); while (acc.f >= 1) { acc.f -= 1; SP.add(W + 0.1, (R2() - 0.5) * 0.3, (R2() - 0.5) * 0.3, 0.3 + R2() * 0.5, R2() * 0.3, (R2() - 0.5) * 0.4, 1.0, 6, C.clay, C.clayEnd, 0); } }
      var str = streamStep(dt, t); effects(dt, t);
      PS.step(dt, land); SP.step(dt, function (q) { return q.k === 1 ? q.y < F : false; }); SM.step(dt); FL.step(dt);
      // glow + lights
      var tgtG = stream ? Math.min(1.8, 0.6 + str * 0.8) : 0; if (dyn.flash) { tgtG += 1.6; dyn.flash = 0; }
      var g0 = glow.scale.x; var gs = g0 + (tgtG - g0) * Math.min(1, dt * 8); glow.scale.set(gs, gs, 1);
      mouthLight.intensity = (stream ? 1.4 * str : 0) + (mode === 'lance' ? 1.2 : 0) + (S.flame ? 0.6 : 0) + (0.1 * Math.sin(t * 23));
      hearthLight.intensity = (cold ? 0.45 : 1.0) + 0.08 * Math.sin(t * 3.1);
      dyn.flows.forEach(function (f) { f.t.offset.x -= f.sp * dt * (casting ? 1 : 0.15); });
      if (dyn.hotP) dyn.hotP.material.opacity = 0.75 + 0.25 * Math.sin(t * 2.2);
      if (dyn.tc && S.hot) dyn.tc.color.setHSL(0, 1, 0.45 + 0.15 * Math.sin(t * 4));
      if (dyn.seep) dyn.seep.color.setHSL(0.08, 1, 0.45 + 0.15 * Math.sin(t * 3));
      arrows.forEach(function (ar) { ar.u = (ar.u + dt * ar.sp) % 1; var pth = ar.path, n = pth.length - 1, f = ar.u * n, i3 = Math.min(n - 1, f | 0), lf = f - i3, A = pth[i3], B = pth[i3 + 1];
        ar.m.position.set(A[0] + (B[0] - A[0]) * lf, A[1] + (B[1] - A[1]) * lf, 0.04); ar.m.rotation.z = Math.atan2(B[1] - A[1], B[0] - A[0]); ar.m.scale.setScalar(Math.sin(ar.u * PI) * 1.1 + 0.2); });
    }

    function dispose() { disp.forEach(function (d) { if (d && d.dispose) d.dispose(); }); }
    var view = S.view || 'section';
    return { scene: scene, step: step, anchors: anchors, labels: labels, hud: hud, dispose: dispose, view: view, L: L };
  }

  /* ---------------- camera presets ---------------- */
  var VIEWS = {
    section: { p: [2.6, 2.3, 12.6], t: [1.5, -0.95, -0.8] },
    thumb: { p: [2.7, 1.7, 8.3], t: [1.7, -0.75, -0.7] },
    cast: { p: [W + 8.5, 3.4, 6.5], t: [W + 1.2, -0.7, 0] },
    face: { p: [W + 4.6, 0.7, 2.4], t: [W, 0, -0.2] },
    runner: { p: [W + 6.5, 6.5, 8.5], t: [W + 4.5, -1, 0] },
    hearth: { p: [-2.2, 0.9, 6.8], t: [-1.2, -0.8, -0.5] }
  };
  function placeCam(cam, ctl, name, aspect) {
    var v = VIEWS[name] || VIEWS.section, t = new T.Vector3().fromArray(v.t), p = new T.Vector3().fromArray(v.p);
    var k = Math.max(1, Math.min(1.9, 1.55 / (aspect || 1.6))); p.sub(t).multiplyScalar(k).add(t);
    cam.position.copy(p); cam.lookAt(t); if (ctl) { ctl.target.copy(t); ctl.update(); }
  }

  /* ---------------- viewer ---------------- */
  var VR = null; // one renderer reused by every viewer, so moving between scenes never runs out of WebGL contexts
  function Viewer(host, o) {
    this.host = host; host.classList.add('t3'); this.o = o || {};
    try { if (!VR || VR.getContext().isContextLost()) VR = new T.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' }); this.ren = VR; this.w = this.h = 0; } catch (e) { host.innerHTML = '<div class="t3-err">3D view needs WebGL, which this device or browser has turned off.</div>'; this.dead = 1; return; }
    this.ren.setPixelRatio(Math.min(2, window.devicePixelRatio || 1)); host.appendChild(this.ren.domElement);
    this.lay = document.createElement('div'); this.lay.className = 't3-lab'; host.appendChild(this.lay);
    this.hudEl = document.createElement('div'); this.hudEl.className = 't3-hud'; host.appendChild(this.hudEl);
    this.cam = new T.PerspectiveCamera(38, 1.6, 0.05, 200);
    this.ctl = new T.OrbitControls(this.cam, this.ren.domElement); this.ctl.enableDamping = true; this.ctl.dampingFactor = 0.08; this.ctl.minDistance = 2; this.ctl.maxDistance = 30; this.ctl.maxPolarAngle = PI * 0.62;
    this.showLabels = this.o.labels !== false; this.t = 0; this.paused = false; var self = this;
    this._loop = function (ts) { if (self.dead) return; self.raf = requestAnimationFrame(self._loop); self.frame(ts); };
    this._rs = function () { self.resize(); }; window.addEventListener('resize', this._rs);
    if (window.ResizeObserver) { this.ro = new ResizeObserver(this._rs); this.ro.observe(host); }
    this.raf = requestAnimationFrame(this._loop);
  }
  Viewer.prototype.set = function (spec, calls) {
    if (this.dead) return; if (this.cur) this.cur.dispose(); this.cur = build(spec); this.calls = calls || []; this.t = 0;
    for (var i = 0; i < 40; i++) this.cur.step(1 / 30, (this.t += 1 / 30));
    this.resize(); placeCam(this.cam, this.ctl, this.cur.view, this.aspect); this.mkLabels(); this.mkHud();
  };
  Viewer.prototype.mkLabels = function () {
    var h = '', c = this.cur; this.labs = [];
    var self = this;
    (this.calls || []).forEach(function (cc, i) { var p = c.anchors[cc[0]]; if (p) self.labs.push({ p: p, k: 'call', t: cc[1], n: i + 1 }); });
    c.labels.forEach(function (l) { self.labs.push({ p: l.p, k: 'std', t: l.t }); });
    this.lay.innerHTML = this.labs.map(function (l) { return '<span class="' + l.k + '">' + (l.n ? '<i>' + l.n + '</i>' : '') + l.t.replace(/[<&]/g, '') + '</span>'; }).join('');
    this.labEls = [].slice.call(this.lay.children); this.lay.style.display = this.showLabels ? '' : 'none';
  };
  Viewer.prototype.mkHud = function () { this.hudEl.innerHTML = this.cur.hud.map(function (x) { return '<span class="h' + x.s + '">' + x.t + '</span>'; }).join(''); };
  Viewer.prototype.resize = function () { if (this.dead) return; var w = this.host.clientWidth || 600, h = this.host.clientHeight || 380; if (w === this.w && h === this.h) return; this.w = w; this.h = h; this.aspect = w / h; this.ren.setSize(w, h, false); this.cam.aspect = w / h; this.cam.updateProjectionMatrix(); };
  Viewer.prototype.view = function (n) { placeCam(this.cam, this.ctl, n || (this.cur && this.cur.view), this.aspect); };
  Viewer.prototype.labels = function (on) { this.showLabels = on; if (this.lay) this.lay.style.display = on ? '' : 'none'; };
  Viewer.prototype.pause = function (p) { this.paused = p; };
  Viewer.prototype.frame = function (ts) {
    if (!this.cur) return; var dt = this.last ? Math.min(0.05, (ts - this.last) / 1000) : 0.016; this.last = ts;
    if (!this.host.isConnected) { this.dispose(); return; }
    if (!this.paused) { this.t += dt; this.cur.step(dt, this.t); }
    this.ctl.update(); var fg = this.cur.scene.fog, dd = this.cam.position.distanceTo(this.ctl.target); fg.near = dd * 0.95; fg.far = dd * 2.6; this.ren.render(this.cur.scene, this.cam);
    if (this.showLabels && this.labEls) { var w = this.w, h = this.h, v = new T.Vector3(), placed = [];
      for (var i = 0; i < this.labs.length; i++) { v.copy(this.labs[i].p).project(this.cam); var el = this.labEls[i];
        if (v.z > 1 || v.x < -1.05 || v.x > 1.05 || v.y < -1.05 || v.y > 1.05) { el.style.display = 'none'; continue; }
        var px = (v.x + 1) / 2 * w, py = (1 - v.y) / 2 * h, lb = this.labs[i];
        if (!lb.bw) { lb.bw = el.offsetWidth || 90; lb.bh = el.offsetHeight || 20; }
        var call = lb.k === 'call', x0 = px - lb.bw / 2, y0 = call ? py - lb.bh - 8 : py - lb.bh / 2, moved = 0;
        for (var tries = 0; tries < 6; tries++) { var hit = false;
          for (var j = 0; j < placed.length; j++) { var q = placed[j]; if (x0 < q[2] && x0 + lb.bw > q[0] && y0 < q[3] && y0 + lb.bh > q[1]) { hit = true; var dy = call ? q[1] - (y0 + lb.bh) - 3 : q[3] - y0 + 3; y0 += dy; moved += dy; break; } }
          if (!hit) break; }
        if (!call && tries >= 6) { el.style.display = 'none'; continue; }
        placed.push([x0, y0, x0 + lb.bw, y0 + lb.bh]);
        el.style.display = ''; el.style.transform = 'translate(' + px.toFixed(1) + 'px,' + (py + moved).toFixed(1) + 'px)'; } }
  };
  Viewer.prototype.dispose = function () { if (this.dead) return; this.dead = 1; cancelAnimationFrame(this.raf); window.removeEventListener('resize', this._rs); if (this.ro) this.ro.disconnect(); if (this.cur) this.cur.dispose(); this.ctl.dispose(); if (this.ren.domElement.parentNode === this.host) this.host.removeChild(this.ren.domElement); this.ren.renderLists.dispose(); };

  /* ---------------- thumbnails (one shared offscreen renderer) ---------------- */
  var TR = null, TC = null;
  function thumb(spec, w, h) {
    try { if (!TR || TR.getContext().isContextLost()) { TR = new T.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true }); TR.setPixelRatio(1); TC = new T.PerspectiveCamera(38, 1.6, 0.05, 200); }
      w = w || 360; h = h || 225; TR.setSize(w, h, false); TC.aspect = w / h; TC.updateProjectionMatrix();
      var b = build(spec), t = 0; for (var i = 0; i < 70; i++) b.step(1 / 30, (t += 1 / 30));
      placeCam(TC, null, b.view === 'section' ? 'thumb' : b.view, w / h);
      var d2 = TC.position.length() + 4; b.scene.fog.near = d2; b.scene.fog.far = d2 * 2.6; TR.render(b.scene, TC); var url = TR.domElement.toDataURL('image/jpeg', 0.84); b.dispose(); return url;
    } catch (e) { return ''; }
  }
  return { Viewer: Viewer, thumb: thumb, build: build, ok: !!T.WebGLRenderer };
})();
