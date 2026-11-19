/* Hearth liquid prediction: 3D cut-away of the hearth drawn from the calculated values (hl-model.js, iz-geom.js).
   Hearth diameter (less wall skull), pad (less bottom build-up), taphole, tuyeres and raceways, deadman coke bed with its
   calculated cone and its coke-free layer, hot metal and slag levels minute by minute, drops falling into the hearth and the
   tap stream while casting. Needs lib/three.min.js and lib/orbit-controls.js (r128). */
(function (root) {
  'use strict';
  var ST = null;
  function lerp(a, b, t) { return a + (b - a) * t; }
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function rnd(seed) { var s = seed >>> 0; return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }

  var LVS = 'varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }';
  var LFS = [
    'precision mediump float; uniform vec3 uA; uniform vec3 uB; uniform float uT; varying vec2 vP;',
    'float h(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5); }',
    'float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }',
    'void main(){ vec2 p = vP * 1.6; float v = n(p + vec2(uT * 0.25, 0.0)) * 0.6 + n(p * 2.3 - vec2(0.0, uT * 0.4)) * 0.4;',
    '  gl_FragColor = vec4(mix(uA, uB, smoothstep(0.25, 0.85, v)), 1.0); }'].join('\n');

  function mount(el, o) {
    dispose();
    var T = root.THREE, I = o.I, W = el.clientWidth || 360, H = el.clientHeight || 520;
    // geometry from the hearth inputs (BF_Hearth_Liquid_Module_1.xlsx): tuyere axis at y = 0, taphole H_tt below, sump below that
    var Rh = I.D_hearth / 2, DR = clamp(0.16 * I.D_hearth, 1.0, 2.2), HR = 1.1, rTip = Math.max(1, Rh - DR), apex = Math.min(2.4, rTip);
    var P = { Dh: I.D_hearth, Db: I.D_hearth * 1.12, Hbosh: 3.4, nTuy: Math.round(Math.PI * I.D_hearth / 1.25), VdotM: I.P_day / 1440 / I.rho_HM, VdotS: I.P_day / 1440 * I.SlagRate / 1000 / I.rho_SL };
    var M = { R: Rh, y0: -(I.H_tt + I.H_sump), yTap: -I.H_tt, ySafe: -I.H_tt + I.Warn * I.H_tt, rows: o.rows };
    var Gm = { rTip: rTip, apex: apex, dmSurf: function (r) { return r < rTip ? apex * (1 - r / rTip) : 0; }, rw: { cx: Rh - DR / 2, cy: HR * 0.35, a: DR / 2, b: HR / 2, w: 0.55 } };
    var yCrit = -I.H_tt + I.Crit * I.H_tt, nTH = Math.max(1, I.N_TH || 1); o.H = o.H || {};
    var R = M.R, y0 = M.y0, yTap = M.yTap, ySafe = M.ySafe, yTop = Math.min(3.2, P.Hbosh * 0.8);
    var Rw = function (y) { return y <= 0 ? R : lerp(R, Math.max(R, P.Db / 2 - (P.Dh / 2 - R)), clamp(y / P.Hbosh, 0, 1)); };
    var renderer = new T.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(2, root.devicePixelRatio || 1)); renderer.setSize(W, H); renderer.setClearColor(0x06101e);
    Array.prototype.slice.call(el.querySelectorAll('canvas')).forEach(function (c) { c.remove(); }); el.insertBefore(renderer.domElement, el.firstChild);
    var scene = new T.Scene(), yMid = (y0 - 1.2 + yTop) / 2;
    var cam = new T.PerspectiveCamera(40, W / H, 0.1, 400), tv = Math.tan(20 * Math.PI / 180);
    var spanY = yTop - y0 + 2.0, spanX = 2 * (R + 2.2), dist = Math.max(spanY / 2 / tv, spanX / 2 / (tv * W / H)) * 0.95;
    cam.position.set(dist * 0.18, yMid + dist * 0.16, dist);
    var ctl = new T.OrbitControls(cam, renderer.domElement); ctl.target.set(0, yMid, 0); ctl.enableDamping = true; ctl.minDistance = 3; ctl.maxDistance = dist * 2.5; ctl.update();
    scene.add(new T.AmbientLight(0x9aa8b8, 0.75)); var dl = new T.DirectionalLight(0xffffff, 0.65); dl.position.set(15, 30, 25); scene.add(dl);
    var glow = new T.PointLight(0xff8a3d, 1.0, 30); glow.position.set(0, yTap, 2); scene.add(glow);
    var TH0 = Math.PI / 2, THL = Math.PI;                           // back half solid; section plane z = 0 faces the camera
    var ZB = -0.5;                                                  // depth of the coke slab drawn in front of the liquid

    // ---------- refractory & shell ----------
    var wallT = 1.0 + Math.max(0, P.Dh / 2 - R), shellT = 0.08, yB = y0 - 1.2;
    function lathe(rf, ya, yb2, n, mat) { var pts = []; for (var i = 0; i <= n; i++) { var y = lerp(ya, yb2, i / n); pts.push(new T.Vector2(rf(y), y)); } var m = new T.Mesh(new T.LatheGeometry(pts, 72, TH0, THL), mat); scene.add(m); return m; }
    var refr = new T.MeshLambertMaterial({ color: 0x3d4650, side: T.DoubleSide }), steel = new T.MeshLambertMaterial({ color: 0x6b7f8c, side: T.DoubleSide }), carbon = new T.MeshLambertMaterial({ color: 0x23272e, side: T.BackSide });
    lathe(function (y) { return Rw(y) + wallT + shellT; }, yB, yTop, 30, steel);
    lathe(function (y) { return Rw(y) * 1.001; }, y0, yTop, 30, carbon);
    // section through the wall and the pad (both cut edges) with carbon-block hatching
    function hatchTex() {
      var c = document.createElement('canvas'); c.width = c.height = 128; var x = c.getContext('2d');
      x.fillStyle = '#353c45'; x.fillRect(0, 0, 128, 128); x.strokeStyle = '#4a535e'; x.lineWidth = 3;
      for (var i = -128; i < 256; i += 22) { x.beginPath(); x.moveTo(i, 128); x.lineTo(i + 128, 0); x.stroke(); }
      x.strokeStyle = '#2a2f36'; x.lineWidth = 2; for (var j = 0; j < 128; j += 32) { x.beginPath(); x.moveTo(0, j); x.lineTo(128, j); x.stroke(); }
      var t = new T.CanvasTexture(c); t.wrapS = t.wrapT = T.RepeatWrapping; t.repeat.set(1, 1); return t;
    }
    var hT = hatchTex(), secMat = new T.MeshLambertMaterial({ map: hT, side: T.DoubleSide });
    function wallSection(sign) {
      var s = new T.Shape(), n = 24, pts = [];
      for (var i = 0; i <= n; i++) { var y = lerp(y0, yTop, i / n); pts.push([Rw(y), y]); }
      s.moveTo(sign * pts[0][0], yB); s.lineTo(sign * pts[0][0], y0); pts.forEach(function (p) { s.lineTo(sign * p[0], p[1]); });
      for (var k = pts.length - 1; k >= 0; k--) s.lineTo(sign * (pts[k][0] + wallT), pts[k][1]);
      s.lineTo(sign * (pts[0][0] + wallT), yB);
      var g = new T.ShapeGeometry(s); var uv = g.attributes.uv; for (var q = 0; q < uv.count; q++) uv.setXY(q, uv.getX(q) / 1.2, uv.getY(q) / 1.2);
      var m = new T.Mesh(g, secMat); m.position.z = 0.001; scene.add(m);
    }
    wallSection(1); wallSection(-1);
    var padS = new T.Shape(); padS.moveTo(-R - wallT, yB); padS.lineTo(R + wallT, yB); padS.lineTo(R + wallT, y0); padS.lineTo(-R - wallT, y0); padS.lineTo(-R - wallT, yB);
    var pg = new T.ShapeGeometry(padS); var puv = pg.attributes.uv; for (var q2 = 0; q2 < puv.count; q2++) puv.setXY(q2, puv.getX(q2) / 1.2, puv.getY(q2) / 1.2);
    var pad = new T.Mesh(pg, secMat); pad.position.z = 0.001; scene.add(pad);
    var padTop = new T.Mesh(new T.CircleGeometry(R, 48, TH0 - Math.PI / 2, THL), new T.MeshLambertMaterial({ color: 0x2b2f36 })); padTop.rotation.x = -Math.PI / 2; padTop.rotation.z = 0; padTop.position.y = y0 + 0.005; scene.add(padTop);
    if (o.H.skullB > 0) { var sb = new T.Mesh(new T.BoxGeometry(2 * R, o.H.skullB, 0.02), new T.MeshLambertMaterial({ color: 0x8a6a4a })); sb.position.set(0, y0 - o.H.skullB / 2, 0.01); scene.add(sb); }
    // back plane of the section (coke bed interior, seen between the lumps)
    var back = new T.Mesh(new T.PlaneGeometry(2 * R * 0.998, yTop - y0), new T.MeshBasicMaterial({ color: 0x0d0a09 })); back.position.set(0, (y0 + yTop) / 2, ZB - 0.02); scene.add(back);

    // ---------- liquids: section face + free surface, metal and slag ----------
    function liqMat(a, b) { return new T.ShaderMaterial({ uniforms: { uA: { value: new T.Color(a) }, uB: { value: new T.Color(b) }, uT: { value: 0 } }, vertexShader: LVS, fragmentShader: LFS, side: T.DoubleSide }); }
    var mMetal = liqMat(0xd8460a, 0xffb347), mSlag = liqMat(0xc98a1e, 0xffe39a), mats = [mMetal, mSlag];
    function slab() { var m = new T.Mesh(new T.PlaneGeometry(1, 1), null); m.position.z = ZB - 0.01; scene.add(m); return m; }
    var face = { m: slab(), s: slab() }; face.m.material = mMetal; face.s.material = mSlag;
    function surf(mat) { var g = new T.CircleGeometry(1, 48, TH0 - Math.PI / 2, THL); g.rotateX(-Math.PI / 2); var m = new T.Mesh(g, mat); scene.add(m); return m; }
    var top = { m: surf(mMetal), s: surf(mSlag) };

    // ---------- deadman coke: lumps in a slab behind the section plane and on its calculated cone ----------
    var lumpR = clamp(R / 18, 0.2, 0.34), rr = rnd(7), cells = [];
    var dmTop = function (r) { return Gm.dmSurf(r); };
    for (var y = y0 + lumpR; y < yTop; y += lumpR * 1.55) for (var x = -R + lumpR; x < R - lumpR * 0.5; x += lumpR * 1.6) {
      var px = x + (rr() - 0.5) * lumpR * 0.7, py = y + (rr() - 0.5) * lumpR * 0.6, r = Math.abs(px);
      if (py > dmTop(r) && py > 0) continue;                       // above the deadman: active coke drawn as moving lumps
      if (Math.abs(px) > Rw(py) - lumpR * 0.6) continue;
      cells.push({ x: px, y: py, z: ZB + lumpR * 0.9 + rr() * lumpR * 0.25, s: lumpR * (0.75 + rr() * 0.5), a: rr() * 6, b: rr() * 6 });
    }
    var rt = Gm.rTip, nCone = Math.round(Math.PI * rt * Math.hypot(rt, Gm.apex) / (lumpR * lumpR * 2.6));
    for (var c = 0; c < nCone; c++) {
      var ang = TH0 + rr() * THL, rad = Math.sqrt(rr()) * rt, h = Gm.dmSurf(rad);
      cells.push({ x: rad * Math.sin(ang), y: h, z: rad * Math.cos(ang), s: lumpR * (0.75 + rr() * 0.5), a: rr() * 6, b: rr() * 6, cone: true });
    }
    var geo = new T.DodecahedronGeometry(1, 0), lumpMat = new T.MeshLambertMaterial({ color: 0xffffff }), inst = new T.InstancedMesh(geo, lumpMat, cells.length);
    inst.instanceColor = new T.InstancedBufferAttribute(new Float32Array(cells.length * 3), 3);
    var mx = new T.Matrix4(), qt = new T.Quaternion(), vs = new T.Vector3(), vp = new T.Vector3(), col = new T.Color();
    scene.add(inst);
    var shift = -1;
    function placeLumps(dy, ym, ys) {
      for (var i = 0; i < cells.length; i++) {
        var cI = cells[i], yy = cI.y + dy;
        vp.set(cI.x, yy, cI.z); qt.setFromEuler(new T.Euler(cI.a, cI.b, 0)); vs.setScalar(cI.s); mx.compose(vp, qt, vs); inst.setMatrixAt(i, mx);
        var base = 0.2 + (i % 7) * 0.018;
        if (yy < ym) col.setRGB(0.55, 0.22, 0.08); else if (yy < ys) col.setRGB(0.5, 0.38, 0.16); else if (yy > -0.2) col.setRGB(base + 0.16, base * 0.8 + 0.06, base * 0.6); else col.setRGB(base, base * 1.02, base * 1.1);
        inst.setColorAt(i, col);
      }
      inst.instanceMatrix.needsUpdate = true; inst.instanceColor.needsUpdate = true;
    }

    // ---------- tuyeres, raceways ----------
    var tm = new T.MeshLambertMaterial({ color: 0xc9d0d8 }), rwM = new T.MeshBasicMaterial({ color: 0xfff0b0, transparent: true, opacity: 0.6, depthWrite: false, blending: T.AdditiveBlending });
    var nT = clamp(Math.round(P.nTuy || 20), 4, 48), rw = Gm.rw;
    for (var t = 0; t <= nT / 2; t++) {
      var a = TH0 + t / (nT / 2) * THL, dir = new T.Vector3(Math.sin(a), 0, Math.cos(a));
      var tu = new T.Mesh(new T.CylinderGeometry(0.15, 0.2, wallT + 1.4, 10), tm); tu.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), dir); tu.position.copy(dir).multiplyScalar(R + (wallT + 1.4) / 2 - 0.3); scene.add(tu);
      var b = new T.Mesh(new T.SphereGeometry(1, 16, 12), rwM); b.scale.set(rw.a, rw.b, rw.w); b.rotation.y = a - Math.PI / 2; b.position.copy(dir).multiplyScalar(rw.cx).setY(rw.cy); scene.add(b);
    }
    // taphole on the right cut edge, sloping down outwards
    var tapDir = new T.Vector3(1, -0.18, 0).normalize();
    if (nTH > 1) { var th2 = new T.Mesh(new T.CylinderGeometry(0.11, 0.11, wallT + 0.6, 10), new T.MeshBasicMaterial({ color: 0x0b0b0b })); th2.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), new T.Vector3(-1, -0.18, 0).normalize()); th2.position.set(-R - wallT / 2, yTap - 0.08, 0.02); scene.add(th2);
      var tr2 = new T.Mesh(new T.BoxGeometry(3.2, 0.35, 0.8), new T.MeshLambertMaterial({ color: 0x5a3b2a })); tr2.position.set(-R - wallT - 2.2, y0 - 1.2 + 0.1, 0); scene.add(tr2); }
    var th = new T.Mesh(new T.CylinderGeometry(0.11, 0.11, wallT + 0.6, 10), new T.MeshBasicMaterial({ color: 0x0b0b0b })); th.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), tapDir); th.position.set(R + wallT / 2, yTap - 0.08, 0.02); scene.add(th);
    var trough = new T.Mesh(new T.BoxGeometry(3.2, 0.35, 0.8), new T.MeshLambertMaterial({ color: 0x5a3b2a })); trough.position.set(R + wallT + 2.2, yB + 0.1, 0); scene.add(trough);

    // ---------- level markers & labels ----------
    function bar(yv, color) { var m = new T.Mesh(new T.PlaneGeometry(2 * Rw(yv), 0.045), new T.MeshBasicMaterial({ color: color, transparent: true, opacity: 0.9, depthTest: false })); m.position.set(0, yv, 0.05); m.renderOrder = 25; scene.add(m); }
    bar(yTap, 0x19b3b1); bar(ySafe, 0xffb547); bar(yCrit, 0xff5a4a); bar(0, 0xffffff);
    // calculated deadman cone outline on the section plane
    (function () { var pts = [], n = 40; for (var i = 0; i <= n; i++) { var x = lerp(-R, R, i / n); pts.push(new T.Vector3(x, Math.max(0, Gm.dmSurf(Math.abs(x))), 0.06)); } var ln = new T.Line(new T.BufferGeometry().setFromPoints(pts), new T.LineBasicMaterial({ color: 0xe6e9ee, transparent: true, opacity: 0.85, depthTest: false })); ln.renderOrder = 25; scene.add(ln); })();
    function ring(yv, color, dash) {
      var pts = []; for (var i = 0; i <= 64; i++) { var aa = TH0 + THL * i / 64; pts.push(new T.Vector3((Rw(yv) + 0.02) * Math.sin(aa), yv, (Rw(yv) + 0.02) * Math.cos(aa))); }
      pts.push(new T.Vector3(-Rw(yv), yv, 0.02)); pts.unshift(new T.Vector3(Rw(yv), yv, 0.02));
      var g = new T.BufferGeometry().setFromPoints(pts), m = dash ? new T.LineDashedMaterial({ color: color, dashSize: 0.3, gapSize: 0.2 }) : new T.LineBasicMaterial({ color: color });
      var l = new T.Line(g, m); if (dash) l.computeLineDistances(); scene.add(l); return l;
    }
    ring(yTap, 0x19b3b1); ring(ySafe, 0xff5a4a, true); ring(0, 0xffffff, true);
    var labels = new T.Group(); scene.add(labels);
    function label(txt, x, y, color, small) {
      var c = document.createElement('canvas'), g2 = c.getContext('2d'), fs = small ? 32 : 38; g2.font = '600 ' + fs + 'px "IBM Plex Sans", sans-serif';
      var w = Math.ceil(g2.measureText(txt).width) + 24; c.width = w; c.height = fs + 18; g2.font = '600 ' + fs + 'px "IBM Plex Sans", sans-serif';
      g2.fillStyle = 'rgba(4,12,23,0.75)'; g2.fillRect(0, 0, w, c.height); g2.fillStyle = color || '#fff'; g2.textBaseline = 'middle'; g2.fillText(txt, 12, c.height / 2 + 1);
      var sp = new T.Sprite(new T.SpriteMaterial({ map: new T.CanvasTexture(c), depthTest: false, transparent: true })), k = (small ? 0.0105 : 0.0125) * dist / 30;
      sp.scale.set(w * k, c.height * k, 1); sp.position.set(x, y, 0.3); sp.renderOrder = 30; labels.add(sp); return sp;
    }
    var xL = -R - wallT - 0.2;
    label('Tuyere axis', -R + 1.3, 0.28, '#e6e9ee', true); label('Warning level', -R + 1.3, ySafe + 0.2, '#ffcf8a', true); label('Critical level', -R + 1.3, yCrit + 0.2, '#ff8a7a', true); label(nTH > 1 ? 'Taphole 1' : 'Taphole', R - 0.9, yTap - 0.28, '#9fe6e3', true); if (nTH > 1) label('Taphole 2', -R + 0.9, yTap - 0.28, '#9fe6e3', true); void xL;
    label('Raceway', rw.cx - 0.6, rw.cy + rw.b + 0.45, '#fff0b0', true);
    label('Deadman coke', -R * 0.35, Math.min(Gm.apex * 0.45, 1.2), '#e6e9ee');
    var lbM = label('Hot metal', -R * 0.55, y0 + 0.5, '#ffd0a0'), lbS = label('Slag', R * 0.35, yTap, '#ffe39a'), lbF = label('Coke-free layer', R * 0.25, y0 + 0.2, '#ffd0a0', true);
    label('Hearth pad', 0, yB + 0.45, '#c3d0dd', true);

    // ---------- moving: drops, active coke, tap stream ----------
    var ND = 260, dp = new Float32Array(ND * 3), dc = new Float32Array(ND * 3), drops = [];
    function spawnD(i, init) { var x = (Math.random() * 2 - 1) * R * 0.9; drops[i] = { x: x, z: ZB + 0.25 + Math.random() * 0.2, y: init ? lerp(y0, yTop, Math.random()) : yTop - Math.random() * 0.5, v: 0.5 + Math.random(), slag: Math.random() < P.VdotS / (P.VdotM + P.VdotS) }; }
    for (var i0 = 0; i0 < ND; i0++) spawnD(i0, true);
    var dg = new T.BufferGeometry(); dg.setAttribute('position', new T.BufferAttribute(dp, 3)); dg.setAttribute('color', new T.BufferAttribute(dc, 3));
    var dPts = new T.Points(dg, new T.PointsMaterial({ size: 0.16, vertexColors: true, depthWrite: false, transparent: true })); scene.add(dPts);
    var NJ = 220, jp = new Float32Array(NJ * 3), jc = new Float32Array(NJ * 3), js = []; for (var j0 = 0; j0 < NJ; j0++) js.push({ u: Math.random(), s: Math.random() });
    var jg = new T.BufferGeometry(); jg.setAttribute('position', new T.BufferAttribute(jp, 3)); jg.setAttribute('color', new T.BufferAttribute(jc, 3));
    var jet = new T.Points(jg, new T.PointsMaterial({ size: 0.2, vertexColors: true, depthWrite: false, transparent: true, blending: T.AdditiveBlending })); scene.add(jet);
    var NA = 40, act = new T.InstancedMesh(geo, new T.MeshLambertMaterial({ color: 0x3a3f48, emissive: 0x2a1004 }), NA), aS = [];
    for (var a0 = 0; a0 < NA; a0++) aS.push({ x: (Math.random() * 2 - 1) * R * 0.8, u: Math.random(), sp: 0.12 + Math.random() * 0.15, s: lumpR * (0.7 + Math.random() * 0.4) });
    scene.add(act);

    // ---------- state ----------
    var cur = null, show = { drops: true, labels: true, coke: true }, run = true, raf = 0, last = performance.now(), clock = 0;
    function setRow(row) {
      cur = row; var ym = row.ym, ys = row.ys, yb = row.yb;
      var hM = Math.max(0.01, ym - y0), hS = Math.max(0.005, ys - ym);
      face.m.scale.set(2 * R * 0.997, hM, 1); face.m.position.y = y0 + hM / 2;
      face.s.scale.set(2 * R * 0.997, hS, 1); face.s.position.y = ym + hS / 2; face.s.visible = ys - ym > 0.01;
      top.m.scale.set(R * 0.997, 1, R * 0.997); top.m.position.y = ym; top.m.visible = !(ys - ym > 0.01);
      top.s.scale.set(R * 0.997, 1, R * 0.997); top.s.position.y = ys;
      var dy = Math.max(0, yb - y0); if (Math.abs(dy - shift) > 1e-3 || true) placeLumps(dy, ym, ys); shift = dy;
      lbM.position.y = (y0 + ym) / 2 + 0.15; lbS.position.y = (ym + ys) / 2; lbS.visible = show.labels && ys - ym > 0.25;
      lbF.visible = show.labels && dy > 0.15; lbF.position.y = y0 + dy / 2;
      glow.position.y = ys;
    }
    function frame(now) {
      raf = requestAnimationFrame(frame);
      var dt = Math.min(0.05, (now - last) / 1000); last = now;
      if (run) {
        clock += dt; mats.forEach(function (m) { m.uniforms.uT.value = clock; });
        if (cur && show.drops) for (var i = 0; i < ND; i++) {
          var d = drops[i]; d.v = Math.min(3, d.v + dt * 2.5); d.y -= d.v * dt;
          dp[i * 3] = d.x; dp[i * 3 + 1] = d.y; dp[i * 3 + 2] = d.z;
          if (d.slag) { dc[i * 3] = 1; dc[i * 3 + 1] = 0.88; dc[i * 3 + 2] = 0.5; } else { dc[i * 3] = 1; dc[i * 3 + 1] = 0.55; dc[i * 3 + 2] = 0.15; }
          if (d.y < cur.ys) spawnD(i, false);
        }
        dg.attributes.position.needsUpdate = true; dg.attributes.color.needsUpdate = true;
        // active coke moving from above the deadman into the raceways
        for (var k2 = 0; k2 < NA; k2++) {
          var aa = aS[k2]; aa.u += dt * aa.sp; if (aa.u > 1) { aa.u = 0; aa.x = (Math.random() * 2 - 1) * R * 0.8; }
          var sx = aa.x >= 0 ? 1 : -1, xT = sx * rw.cx, yS = Math.max(Gm.dmSurf(Math.abs(aa.x)), 0) + 0.3, x2 = lerp(aa.x, xT, aa.u * aa.u), y2 = lerp(yTop - 0.2, rw.cy + 0.2, aa.u);
          if (y2 < Gm.dmSurf(Math.abs(x2))) y2 = Gm.dmSurf(Math.abs(x2)) + 0.15; void yS;
          vp.set(x2, y2, ZB + 0.6); qt.setFromEuler(new T.Euler(clock + k2, k2, 0)); vs.setScalar(aa.s); mx.compose(vp, qt, vs); act.setMatrixAt(k2, mx);
        }
        act.instanceMatrix.needsUpdate = true;
        var casting = cur && (cur.Qm + cur.Qs) > 0.01, sFrac = casting ? cur.Qs / (cur.Qm + cur.Qs) : 0;
        if (casting) for (var m2 = 0; m2 < NJ; m2++) {
          var jj = js[m2]; jj.u += dt * 1.1; if (jj.u > 1) { jj.u -= 1; jj.s = Math.random(); }
          var side = cur.th && nTH > 1 && cur.th % 2 === 0 ? -1 : 1, u = jj.u, xx = side * (R + wallT + u * 2.4), yy = yTap - 0.3 - u * 0.4 - u * u * (yTap - 0.3 - (yB + 0.4));
          jp[m2 * 3] = xx; jp[m2 * 3 + 1] = yy; jp[m2 * 3 + 2] = (Math.random() - 0.5) * 0.12;
          var isS = jj.s < sFrac; jc[m2 * 3] = 1; jc[m2 * 3 + 1] = isS ? 0.9 : 0.55; jc[m2 * 3 + 2] = isS ? 0.55 : 0.15;
        }
        jg.attributes.position.needsUpdate = true; jg.attributes.color.needsUpdate = true; jet.visible = casting;
        glow.intensity = 0.9 + 0.2 * Math.sin(now / 170);
      }
      dPts.visible = show.drops; labels.visible = show.labels; act.visible = show.coke;
      ctl.update(); renderer.render(scene, cam);
    }
    raf = requestAnimationFrame(frame);
    function resize() { var w = el.clientWidth, h = el.clientHeight; if (!w || !h) return; renderer.setSize(w, h); cam.aspect = w / h; cam.updateProjectionMatrix(); }
    root.addEventListener('resize', resize);
    ST = { renderer: renderer, scene: scene, stop: function () { cancelAnimationFrame(raf); }, resize: resize };
    setRow(M.rows[0]);
    return { setRow: setRow, toggle: function (k, on) { show[k] = on; }, play: function (on) { run = on; } };
  }
  function dispose() {
    if (!ST) return;
    ST.stop(); root.removeEventListener('resize', ST.resize);
    ST.scene.traverse(function (o) { if (o.geometry) o.geometry.dispose(); if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach(function (m) { if (m.map) m.map.dispose(); m.dispose(); }); });
    ST.renderer.dispose(); if (ST.renderer.domElement.parentNode) ST.renderer.domElement.parentNode.removeChild(ST.renderer.domElement);
    ST = null;
  }
  root.HL3D = { mount: mount, dispose: dispose };
})(window);
