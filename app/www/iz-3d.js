/* Hearth & Cohesive Zone Prediction: 3D cut-away furnace drawn from the calculated geometry (iz-geom.js).
   The two section faces are coloured pixel by pixel from the calculated zones and temperature field: ore/coke layers
   (descending, real thickness), cohesive zone with coke slits, active coke, raceways, deadman coke with metal and slag in
   its voids, the coke-free layer when the deadman floats, isotherms. Gas, liquid drops and coke lumps move along the
   section faces; the hearth level follows the casting cycle. Needs lib/three.min.js and lib/orbit-controls.js (r128). */
(function (root) {
  'use strict';
  var ST = null;
  function lerp(a, b, t) { return a + (b - a) * t; }
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }

  var VS = [
    'attribute float aS; attribute float aY; varying float vS; varying float vY; varying vec3 vW;',
    'void main(){ vS = aS; vY = aY; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }'].join('\n');
  var FS = [
    'precision highp float;',
    'uniform sampler2D uFL; uniform sampler2D uFN; uniform sampler2D uPh;',
    'uniform float uY0; uniform float uH; uniform float uT; uniform float uClock; uniform float uLevel; uniform float uIface; uniform float uFree;',
    'uniform vec2 uTx; uniform float uEps; uniform float uIso; uniform float uTap; uniform float uTapOn; uniform float uRh; uniform float uYTap;',
    'varying float vS; varying float vY; varying vec3 vW;',
    'float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }',
    'vec2 h22(vec2 p){ return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453); }',
    // cellular noise: x = distance to the nearest lump centre, y = lump id
    'vec2 cell(vec2 p){ vec2 i = floor(p), f = fract(p); float d = 8.0, id = 0.0;',
    '  for (int a = -1; a <= 1; a++) for (int b = -1; b <= 1; b++) { vec2 g = vec2(float(a), float(b)); vec2 o = h22(i + g); vec2 r = g + o - f; float q = dot(r, r); if (q < d) { d = q; id = h21(i + g); } }',
    '  return vec2(sqrt(d), id); }',
    'vec3 heat(float T){ float t = clamp(T / 2100.0, 0.0, 1.0);',
    '  vec3 c = mix(vec3(0.16, 0.30, 0.85), vec3(0.20, 0.75, 0.85), smoothstep(0.0, 0.2, t));',
    '  c = mix(c, vec3(1.0, 0.82, 0.22), smoothstep(0.2, 0.45, t)); c = mix(c, vec3(1.0, 0.45, 0.10), smoothstep(0.45, 0.68, t)); c = mix(c, vec3(1.0, 0.96, 0.86), smoothstep(0.72, 1.0, t)); return c; }',
    'vec3 glowOf(float T){ float g = smoothstep(650.0, 1500.0, T); return vec3(1.0, 0.42, 0.08) * g * 0.55 + vec3(1.0, 0.9, 0.6) * smoothstep(1500.0, 2100.0, T) * 0.5; }',
    'vec3 coke(vec2 p, float T, float lit){ vec2 c = cell(p); float sh = 1.0 - smoothstep(0.15, 0.62, c.x); vec3 b = mix(vec3(0.10, 0.11, 0.13), vec3(0.24, 0.26, 0.31), c.y) * (0.45 + 0.75 * sh);',
    '  return b + glowOf(T) * (0.35 + 0.5 * sh) * lit; }',
    'void main(){',
    '  vec2 uv = vec2(clamp(vS, 0.0, 1.0), clamp((vY - uY0) / uH, 0.0, 1.0));',
    '  vec4 fl = texture2D(uFL, uv); vec4 fn = texture2D(uFN, uv);',
    '  float T = fl.r * 2200.0; float Tg = fl.a * 2200.0; float z = floor(fn.g * 255.0 / 32.0 + 0.5); float ore = fn.b;',
    '  vec4 pp = texture2D(uPh, vec2(uv.y, 0.5)); float ph = (pp.r * 255.0 * 256.0 + pp.g * 255.0) / 65535.0 * 256.0;',
    '  float f = fract(ph - uT); bool isOre = f < ore; float edge = min(f, abs(f - ore)) ;',
    '  vec2 P = vec2(vS * uRh * 2.0, vY); vec3 col;',
    '  if (z < 1.5) {',                                   // lumpy zone incl. thermal reserve zone
    '    vec3 base = isOre ? mix(vec3(0.36, 0.16, 0.09), vec3(0.50, 0.23, 0.12), cell(P * 3.2).y) * (0.7 + 0.45 * (1.0 - smoothstep(0.1, 0.7, cell(P * 3.2).x))) : coke(P * 2.4, T, 0.6);',
    '    col = base * (0.85 + 0.35 * smoothstep(200.0, 1100.0, T)) + glowOf(T) * 0.12; if (edge < 0.025) col *= 0.7;',
    '  } else if (z < 2.5) {',                            // cohesive zone: fused ore layers + coke slits
    '    float m = smoothstep(1100.0, 1450.0, T);',
    '    col = isOre ? mix(vec3(1.0, 0.50, 0.08), vec3(1.0, 0.86, 0.42), m) * (0.92 + 0.08 * sin(vY * 9.0 + uClock * 2.0)) : coke(P * 2.4, T, 1.0) * 0.8;',
    '    if (edge < 0.02) col *= 0.75;',
    '  } else if (z < 3.5) {',                            // active coke / dripping zone
    '    col = coke(P * 2.6, T, 1.0); vec2 c = cell(P * 2.6);',
    '    float drip = step(0.86, fract(vY * 1.3 + uClock * 0.9 + c.y * 7.0)) * step(c.x, 0.5) * step(0.55, c.y);',
    '    col = mix(col, vec3(1.0, 0.62, 0.18), drip * 0.85);',
    '  } else if (z < 4.5) {',                            // deadman (and hearth)
    '    vec2 c = cell(P * 2.6); bool voidc = c.x > 0.48 + (0.45 - uEps) * 0.6;',
    '    vec3 liq = vY < uIface ? mix(vec3(1.0, 0.55, 0.10), vec3(1.0, 0.86, 0.45), 0.5 + 0.5 * sin(vS * 20.0 + vY * 6.0 + uClock * 1.5)) : vec3(0.82, 0.60, 0.22);',
    '    if (vY < uLevel && vY < uFree) col = liq * (0.92 + 0.08 * sin(vS * 30.0 + uClock * 3.0));',
    '    else if (vY < uLevel) col = voidc ? liq : coke(P * 2.6, 1500.0, 0.55) * 0.95;',
    '    else col = voidc ? vec3(0.06, 0.04, 0.035) + glowOf(T) * 0.15 : coke(P * 2.6, T, 0.35) * 0.7;',
    '  } else {',                                         // raceway
    '    float fl2 = 0.8 + 0.2 * sin(uClock * 9.0 + vY * 13.0 + vS * 17.0); col = mix(vec3(1.0, 0.72, 0.25), vec3(1.0, 0.98, 0.9), fl2);',
    '  }',
    '  float zx = floor(texture2D(uFN, uv + vec2(uTx.x, 0.0)).g * 255.0 / 32.0 + 0.5), zy = floor(texture2D(uFN, uv + vec2(0.0, uTx.y)).g * 255.0 / 32.0 + 0.5);',
'float zx2 = floor(texture2D(uFN, uv - vec2(uTx.x, 0.0)).g * 255.0 / 32.0 + 0.5), zy2 = floor(texture2D(uFN, uv - vec2(0.0, uTx.y)).g * 255.0 / 32.0 + 0.5);',
'float zmax = max(max(zx, zy), max(zx2, zy2)), zmin = min(min(zx, zy), min(zx2, zy2));',
'if (zmax != zmin || zmax != z) {',
'if (z < 2.5 && zmin < 1.5 && zmax > 1.5 && zmax < 2.5 || (z > 1.5 && z < 2.5 && zmin < 1.5)) col = vec3(1.0, 0.93, 0.55);',
'else if ((z > 1.5 && z < 3.5) && (zmax > 2.5 && zmin < 2.5)) col = vec3(1.0, 0.62, 0.2);',
'else if (zmax > 3.5 && zmax < 4.5 && zmin < 3.5 && zmin > 2.5) col = vec3(0.85, 0.9, 0.95);',
'}',
    '  if (uIso > 0.5 && z < 3.5 && vY > 0.0) { float d = abs(fract(T / 200.0 + 0.5) - 0.5) * 200.0, w = fwidth(T) * 1.3; if (d < w) col = mix(col, vec3(1.0), 0.6 * (1.0 - d / w)); }',
    '  if (uTap > 0.5 && abs(vY - uYTap) < 0.09 && vS > 0.9) col = uTapOn > 0.5 ? vec3(1.0, 0.7, 0.2) : vec3(0.12, 0.1, 0.1);',
    '  if (vS > 0.985) col *= 0.6;',
    '  gl_FragColor = vec4(col, 1.0); }'].join('\n');

  function mount(el, G, o) {
    dispose(); o = o || {};
    var T = root.THREE, W = el.clientWidth || 360, H = el.clientHeight || 520, P = G.P;
    var renderer = new T.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(2, root.devicePixelRatio || 1)); renderer.setSize(W, H); renderer.setClearColor(0x06101e);
    Array.prototype.slice.call(el.querySelectorAll('canvas')).forEach(function (c) { c.remove(); }); el.insertBefore(renderer.domElement, el.firstChild);
    var scene = new T.Scene(), y0 = G.y0, Hsl = G.Hsl, mid = (y0 + Hsl) / 2;
    var camera = new T.PerspectiveCamera(42, W / H, 0.1, 500);
    var span = Hsl - y0 + 2, tv = Math.tan(21 * Math.PI / 180), th = tv * Math.min(1, W / H), dist = Math.max(span / 2 / tv, (P.Db / 2 + 1.5) / th) * 1.2;
    camera.position.set(dist * 0.12, mid + span * 0.12, dist);
    var controls = new T.OrbitControls(camera, renderer.domElement); controls.target.set(0, mid + span * 0.05, 0); controls.enableDamping = true; controls.minDistance = 3; controls.maxDistance = dist * 2.4; controls.update();
    scene.add(new T.AmbientLight(0x8899aa, 0.7)); var dl = new T.DirectionalLight(0xffffff, 0.6); dl.position.set(20, 40, 30); scene.add(dl);
    var hot = new T.PointLight(0xff8a3d, 1.2, 25); hot.position.set(0, 0.5, 0); scene.add(hot);

    // ---------- section shader ----------
    var tx = root.IZGeom.textures(G, 96, 512);
    function dtex(data, w, h, near) { var t = new T.DataTexture(data, w, h, T.RGBAFormat); t.magFilter = t.minFilter = near ? T.NearestFilter : T.LinearFilter; t.wrapS = t.wrapT = T.ClampToEdgeWrapping; t.needsUpdate = true; return t; }
    var texL = dtex(tx.field, tx.NW, tx.NH, false), texN = dtex(new Uint8Array(tx.field), tx.NW, tx.NH, true), texP = dtex(tx.phase, tx.NH, 1, true);
    var yTap = -P.Hhearth;
    var U = { uFL: { value: texL }, uFN: { value: texN }, uPh: { value: texP }, uY0: { value: y0 }, uH: { value: Hsl - y0 }, uT: { value: 0 }, uClock: { value: 0 },
      uLevel: { value: yTap }, uIface: { value: yTap }, uFree: { value: y0 }, uEps: { value: P.eDM }, uIso: { value: 1 }, uTap: { value: 0 }, uTapOn: { value: 0 }, uTx: { value: new T.Vector2(1 / tx.NW, 1 / tx.NH) }, uRh: { value: P.Dh / 2 }, uYTap: { value: yTap } };
    function mat(tap) { var u = T.UniformsUtils.clone(U); Object.keys(U).forEach(function (k) { if (k === 'uFL' || k === 'uFN' || k === 'uPh') u[k] = U[k]; }); u.uTap = { value: tap ? 1 : 0 }; return new T.ShaderMaterial({ uniforms: u, vertexShader: VS, fragmentShader: FS, side: T.DoubleSide, extensions: { derivatives: true } }); }
    var mats = [];
    var TH0 = Math.PI * 0.5, THL = Math.PI;     // back half is solid; the diametral section faces the camera (+z), as in a furnace cut-away drawing
    function face(a, tap) {
      var NY = 240, NX = 56, pos = [], aS = [], aY = [], idx = [];
      for (var j = 0; j <= NY; j++) { var y = lerp(y0, Hsl, j / NY), R = G.Rw(y) * 0.995; for (var i = 0; i <= NX; i++) { var s = i / NX; pos.push(s * R * Math.sin(a), y, s * R * Math.cos(a)); aS.push(s); aY.push(y); } }
      for (var j2 = 0; j2 < NY; j2++) for (var i2 = 0; i2 < NX; i2++) { var q = j2 * (NX + 1) + i2; idx.push(q, q + 1, q + NX + 1, q + 1, q + NX + 2, q + NX + 1); }
      var g = new T.BufferGeometry(); g.setAttribute('position', new T.Float32BufferAttribute(pos, 3)); g.setAttribute('aS', new T.Float32BufferAttribute(aS, 1)); g.setAttribute('aY', new T.Float32BufferAttribute(aY, 1)); g.setIndex(idx);
      var m = mat(tap); mats.push(m); var mesh = new T.Mesh(g, m); scene.add(mesh); return mesh;
    }
    var A1 = TH0, A2 = TH0 + THL;
    face(A1, true); face(A2, false);
    // stockline surface of the solid sector
    (function () {
      var pos = [], aS = [], aY = [], idx = [], NA = 48, NR = 24, R = G.Rw(Hsl) * 0.995;
      for (var j = 0; j <= NR; j++) for (var i = 0; i <= NA; i++) { var a = TH0 + THL * i / NA, s = j / NR; pos.push(s * R * Math.sin(a), Hsl, s * R * Math.cos(a)); aS.push(s); aY.push(Hsl - 0.01); }
      for (var j2 = 0; j2 < NR; j2++) for (var i2 = 0; i2 < NA; i2++) { var q = j2 * (NA + 1) + i2; idx.push(q, q + NA + 1, q + 1, q + 1, q + NA + 1, q + NA + 2); }
      var g = new T.BufferGeometry(); g.setAttribute('position', new T.Float32BufferAttribute(pos, 3)); g.setAttribute('aS', new T.Float32BufferAttribute(aS, 1)); g.setAttribute('aY', new T.Float32BufferAttribute(aY, 1)); g.setIndex(idx);
      var m = mat(false); mats.push(m); scene.add(new T.Mesh(g, m));
    })();
    // furnace shell (refractory + stave cooling), hearth pad
    var sh = []; for (var i = 0; i <= 80; i++) { var yy = lerp(y0 - 0.7, Hsl + 1.4, i / 80); sh.push(new T.Vector2(G.Rw(clamp(yy, y0, Hsl)) + 0.6, yy)); }
    var shellMat = new T.MeshLambertMaterial({ color: 0x2f6b70, transparent: true, opacity: 0.55, side: T.DoubleSide, depthWrite: false });
    scene.add(new T.Mesh(new T.LatheGeometry(sh, 96, TH0, THL), shellMat));
    var inner = []; for (var i3 = 0; i3 <= 80; i3++) { var y3 = lerp(y0, Hsl, i3 / 80); inner.push(new T.Vector2(G.Rw(y3) * 0.995, y3)); }
    scene.add(new T.Mesh(new T.LatheGeometry(inner, 96, TH0, THL), new T.MeshLambertMaterial({ color: 0x1b2a33, side: T.BackSide })));
    // section edges of the shell (the cut through the wall)
    [A1, A2].forEach(function (a) {
      var s2 = new T.Shape(), pts = [];
      for (var k = 0; k <= 60; k++) { var y4 = lerp(y0 - 0.7, Hsl + 1.4, k / 60); pts.push([G.Rw(clamp(y4, y0, Hsl)) * 0.995, y4]); }
      s2.moveTo(pts[0][0], pts[0][1]); pts.forEach(function (p) { s2.lineTo(p[0], p[1]); });
      for (var k2 = pts.length - 1; k2 >= 0; k2--) s2.lineTo(pts[k2][0] + 0.6 + 0.005, pts[k2][1]);
      var m4 = new T.Mesh(new T.ShapeGeometry(s2), new T.MeshLambertMaterial({ color: 0x4a7f84, side: T.DoubleSide })); m4.rotation.y = a - Math.PI / 2; scene.add(m4);
    });
    var pad = new T.Mesh(new T.CylinderGeometry(P.Dh / 2 + 0.6, P.Dh / 2 + 0.7, 0.8, 72, 1, false, TH0, THL), new T.MeshLambertMaterial({ color: 0x3b4650 })); pad.position.y = y0 - 0.4; scene.add(pad);

    // ---------- tuyeres, bustle main, raceways ----------
    var nT = clamp(Math.round(P.nTuy || 20), 4, 48), rw = G.rw;
    var tuyMat = new T.MeshLambertMaterial({ color: 0xc9d0d8 }), rwMat = new T.MeshBasicMaterial({ color: 0xfff0b0, transparent: true, opacity: 0.55, depthWrite: false, blending: T.AdditiveBlending });
    // blowpipe + tuyere nose through the wall on each section face (the other tuyeres sit in the solid half)
    [TH0, TH0 + THL].forEach(function (ang) {
      var dir = new T.Vector3(Math.sin(ang), 0, Math.cos(ang));
      var tu = new T.Mesh(new T.CylinderGeometry(0.16, 0.2, 1.3, 12), tuyMat); tu.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), dir); tu.position.copy(dir).multiplyScalar(P.Dh / 2 + 0.3); scene.add(tu);
      var bp = new T.Mesh(new T.CylinderGeometry(0.22, 0.22, 2.2, 12), tuyMat); var d2 = new T.Vector3(dir.x, 0.45, dir.z).normalize(); bp.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), d2);
      bp.position.copy(dir).multiplyScalar(P.Dh / 2 + 1.9).setY(0.5); scene.add(bp);
    });
    // raceway balloons on the two section planes (half inside the open quarter, so they read in 3D)
    [A1, A2].forEach(function (a) {
      var b = new T.Mesh(new T.SphereGeometry(1, 20, 14), rwMat); b.scale.set(rw.a, rw.b, rw.w); b.rotation.y = a + Math.PI / 2; b.position.set(rw.cx * Math.sin(a), rw.cy, rw.cx * Math.cos(a)); scene.add(b);
    });
    // taphole: tube through the wall on face A1 and the iron runner
    var tapDir = new T.Vector3(Math.sin(A1), 0, Math.cos(A1));
    var tapTube = new T.Mesh(new T.CylinderGeometry(0.12, 0.12, 1.6, 10), new T.MeshLambertMaterial({ color: 0x555b63 })); tapTube.rotation.z = Math.PI / 2; tapTube.rotation.y = A1 + Math.PI / 2;
    tapTube.position.copy(tapDir.clone().multiplyScalar(P.Dh / 2 + 0.6)).setY(yTap); scene.add(tapTube);
    var runner = new T.Mesh(new T.BoxGeometry(0.6, 0.25, 4.5), new T.MeshLambertMaterial({ color: 0x3a3f46 })); runner.rotation.y = A1; runner.position.copy(tapDir.clone().multiplyScalar(P.Dh / 2 + 3.2)).setY(yTap - 1.6); scene.add(runner);

    // ---------- moving things, kept just in front of the section faces ----------
    function nrm(a, side) { return new T.Vector3(Math.cos(a), 0, -Math.sin(a)).multiplyScalar(side); }   // towards the open quarter
    var faces = [{ a: A1, n: nrm(A1, -1) }, { a: A2, n: nrm(A2, 1) }];
    function place(arr, k, fc, r, y, off) { var a = fc.a; arr[k] = r * Math.sin(a) + fc.n.x * off; arr[k + 1] = y; arr[k + 2] = r * Math.cos(a) + fc.n.z * off; }
    var CM = function (Tc, out, k) { var c = new T.Color(); var t2 = clamp(Tc / 2100, 0, 1);
      var st = [[0, [0.25, 0.45, 1]], [0.2, [0.3, 0.85, 0.95]], [0.45, [1, 0.85, 0.3]], [0.68, [1, 0.5, 0.15]], [1, [1, 0.97, 0.9]]], i4 = 0; while (i4 < st.length - 2 && t2 > st[i4 + 1][0]) i4++;
      var u2 = clamp((t2 - st[i4][0]) / (st[i4 + 1][0] - st[i4][0]), 0, 1); for (var q = 0; q < 3; q++) out[k + q] = lerp(st[i4][1][q], st[i4 + 1][1][q], u2); };
    // gas
    var NG = 650, gp = new Float32Array(NG * 3), gc = new Float32Array(NG * 3), gs = [], Sm = [0, 1, 2, 3, 4].map(function (i) { return Math.sqrt((i + 0.5) / 5); });
    var shares = Sm.map(function (s) { return Math.max(0.05, G.gasShare(s)); }), acc = 0, cum = shares.map(function (s) { acc += s; return acc; });
    function spawnGas(i, rnd) { var x = Math.random() * acc, ring = 0; while (ring < 4 && x > cum[ring]) ring++; var sT = clamp(Sm[ring] + (Math.random() - 0.5) * 0.18, 0.02, 0.97);
      gs[i] = { f: faces[i % 2], sT: sT, s: (P.Dh / 2 - Math.random() * P.DR * 0.8) / G.Rw(0.2), y: rw.cy + (Math.random() - 0.5) * rw.b, st: 0, v: 0.7 + Math.random() * 0.6 };
      if (rnd) { gs[i].y = lerp(0, Hsl, Math.random()); gs[i].s = sT; gs[i].st = 2; } }
    for (var g0 = 0; g0 < NG; g0++) spawnGas(g0, true);
    var gGeo = new T.BufferGeometry(); gGeo.setAttribute('position', new T.BufferAttribute(gp, 3)); gGeo.setAttribute('color', new T.BufferAttribute(gc, 3));
    var gas = new T.Points(gGeo, new T.PointsMaterial({ size: 0.24, vertexColors: true, transparent: true, opacity: 0.9, depthWrite: false })); scene.add(gas);
    // drops (metal & slag)
    var ND = 300, dp = new Float32Array(ND * 3), ds = [];
    function spawnDrop(i, rnd) { var s = Math.sqrt(Math.random()) * 0.95; ds[i] = { f: faces[i % 2], s: s, y: G.czRoot(s), v: rnd ? Math.random() * 2 : 0 }; if (rnd) ds[i].y = lerp(yLev, G.czRoot(s), Math.random()); }
    var dGeo = new T.BufferGeometry(); dGeo.setAttribute('position', new T.BufferAttribute(dp, 3));
    var drops = new T.Points(dGeo, new T.PointsMaterial({ size: 0.22, color: 0xffa030, transparent: true, opacity: 1, depthWrite: false })); scene.add(drops);
    // coke lumps feeding the raceways
    var NC = 70, lumps = new T.InstancedMesh(new T.DodecahedronGeometry(0.17, 0), new T.MeshLambertMaterial({ color: 0x2b2f37, emissive: 0x2a1004 }), NC), cs = [], m4x = new T.Matrix4(), qx = new T.Quaternion(), vx = new T.Vector3(), sx = new T.Vector3();
    function spawnCoke(i) { var s = 0.35 + Math.random() * 0.6; cs[i] = { f: faces[i % 2], s: s, y: G.czRoot(s) - 0.1, t: 0, sp: 0.35 + Math.random() * 0.3, rx: Math.random() * 6, rz: Math.random() * 6, sc: 0.7 + Math.random() * 0.8 }; }
    for (var c0 = 0; c0 < NC; c0++) { spawnCoke(c0); cs[c0].t = Math.random(); }
    scene.add(lumps);
    // casting jet
    var NJ = 160, jp = new Float32Array(NJ * 3), js = [];
    for (var j0 = 0; j0 < NJ; j0++) js.push({ t: Math.random() });
    var jGeo = new T.BufferGeometry(); jGeo.setAttribute('position', new T.BufferAttribute(jp, 3));
    var jet = new T.Points(jGeo, new T.PointsMaterial({ size: 0.28, color: 0xffb030, transparent: true, depthWrite: false, blending: T.AdditiveBlending })); scene.add(jet);

    // ---------- labels ----------
    var labels = new T.Group(); scene.add(labels);
    function label(txt, pos, color, small) {
      var c = document.createElement('canvas'), x = c.getContext('2d'), fs = small ? 34 : 40; x.font = '600 ' + fs + 'px "IBM Plex Sans", sans-serif';
      var w = Math.ceil(x.measureText(txt).width) + 28; c.width = w; c.height = fs + 22; x.font = '600 ' + fs + 'px "IBM Plex Sans", sans-serif';
      x.fillStyle = 'rgba(4,12,23,0.72)'; x.fillRect(0, 0, w, c.height); x.fillStyle = color || '#ffffff'; x.textBaseline = 'middle'; x.fillText(txt, 14, c.height / 2 + 1);
      var tex = new T.CanvasTexture(c), sp = new T.Sprite(new T.SpriteMaterial({ map: tex, depthTest: false, transparent: true })); var k = (small ? 0.012 : 0.014) * dist / 40;
      sp.scale.set(w * k, c.height * k, 1); sp.position.copy(pos); sp.renderOrder = 20; labels.add(sp); return sp;
    }
    function onFace(fc, s, y, off) { var R = G.Rw(Math.max(0, y)) * s, a = fc.a; return new T.Vector3(R * Math.sin(a) + fc.n.x * (off || 0.4), y, R * Math.cos(a) + fc.n.z * (off || 0.4)); }
    var F1 = faces[0], F2 = faces[1];
    function isoAt(Tc, sF) { var yP = null; for (var k = 0; k <= 400; k++) { var y = lerp(0.2, Hsl - 0.3, k / 400), v = G.Ts(sF, y); if (yP != null && (v - Tc) * (yP.v - Tc) <= 0) return y; yP = { v: v }; } return null; }
    [200, 400, 900, 1200, 1400].forEach(function (Tc, k) { var sF = 0.93, yI = isoAt(Tc, sF); if (yI != null) label(Tc + ' °C', onFace(k % 2 ? F1 : F2, sF - 0.08, yI), '#ffffff', true); });
    label('Cohesive zone', onFace(F2, 0.78, (G.czTop(0.78) + G.czRoot(0.78)) / 2), '#ffb36b');
    label('Active coke zone', onFace(F1, 0.62, Math.max(0.6, G.czRoot(0.62) * 0.6 + 0.3)), '#e6e9ee');
    label('Deadman', onFace(F2, 0.25, Math.min(G.apex * 0.3, -0.6)), '#e6e9ee');
    label('Raceway', onFace(F2, 0.9, rw.cy + rw.b * 0.5 + 0.55), '#fff0b0', true);
    var Lc = G.L(0.3); if (Lc < Hsl - 1) label('Thermal reserve zone', onFace(F1, 0.3, Math.min(Hsl - 1, Lc + Math.min(P.LTRZ, Hsl - Lc) / 2)), '#9fe6e3', true);
    label('Lumpy zone', onFace(F1, 0.72, Hsl - 2.2), '#e6e9ee');
    label('Coke · Ore layers', onFace(F2, 0.6, Hsl - 0.6), '#d9b28a', true);
    var lbSlag = label('Slag', onFace(F2, 0.55, yTap + 0.3), '#ffd27a'), lbMetal = label('Hot metal', onFace(F2, 0.55, y0 + 0.6), '#ffb030');
    label('Taphole', new T.Vector3().copy(tapDir).multiplyScalar(P.Dh / 2 + 1.6).setY(yTap + 0.7), '#9fe6e3', true);
    label('Tuyere', new T.Vector3(Math.sin(A2) * (P.Dh / 2 + 2.2), 1.9, Math.cos(A2) * (P.Dh / 2 + 2.2)), '#c3d0dd', true);

    // ---------- state ----------
    var show = { gas: true, liquid: true, burden: true, labels: true, iso: true }, running = true, last = performance.now(), raf = 0, clock = 0, tLayer = 0;
    var yLev = yTap, yIface = yTap, yFree = y0, casting = false, dmShift = 0;
    function setLiquid(level, cast) {
      yLev = level; casting = !!cast; var fz = G.float(level); yIface = fz.metalTop; yFree = y0 + fz.free;
      mats.forEach(function (m) { m.uniforms.uLevel.value = yLev; m.uniforms.uIface.value = yIface; m.uniforms.uFree.value = yFree; m.uniforms.uTapOn.value = casting ? 1 : 0; });
      lbSlag.visible = show.labels && yLev - yIface > 0.15; lbSlag.position.y = (yLev + Math.max(yIface, yTap)) / 2; lbMetal.position.y = (Math.max(y0, yFree) + yIface) / 2;
      return fz;
    }
    for (var d0 = 0; d0 < ND; d0++) spawnDrop(d0, true);
    function frame(now) {
      raf = requestAnimationFrame(frame);
      var dt = Math.min(0.05, (now - last) / 1000); last = now;
      if (running) {
        clock += dt; if (show.burden) tLayer += dt * 0.06;
        mats.forEach(function (m) { m.uniforms.uT.value = tLayer; m.uniforms.uClock.value = clock; m.uniforms.uIso.value = show.iso ? 1 : 0; });
        if (show.gas) for (var i = 0; i < NG; i++) {
          var p = gs[i];
          if (p.st === 0) {                // active coke: from the raceway inwards and up to the ring it feeds
            var tgt = G.czRoot(p.sT); p.y += dt * p.v * 1.6; p.s = lerp(p.s, p.sT, clamp(dt * 1.3, 0, 1));
            if (p.y >= tgt - 0.05) p.st = 1;
          } else if (p.st === 1) {         // cohesive zone: sideways through the coke slits towards the lower side of the CZ
            var tp = G.czTop(p.s), dir = G.czTop(Math.min(0.99, p.s + 0.04)) < G.czTop(Math.max(0, p.s - 0.04)) ? 1 : -1;
            p.s = clamp(p.s + dir * dt * 0.35 * p.v, 0.01, 0.98); p.y += dt * 0.25;
            if (p.y > G.czTop(p.s) || p.s <= 0.011 || p.s >= 0.979) p.st = 2;
          } else {                         // lumpy zone: up the ring, faster where the gas share is higher
            p.y += dt * p.v * (1.4 + 2.4 * G.gasShare(p.s));
          }
          place(gp, i * 3, p.f, p.s * G.Rw(Math.max(0, p.y)), p.y, 0.22);
          CM(G.Tg(p.s, p.y), gc, i * 3);
          if (p.y > Hsl) spawnGas(i, false);
        }
        if (show.liquid) for (var j = 0; j < ND; j++) {
          var q2 = ds[j]; q2.v = Math.min(2.6, q2.v + dt * 3); q2.y -= dt * q2.v;
          place(dp, j * 3, q2.f, q2.s * G.Rw(Math.max(0, q2.y)), q2.y, 0.26);
          if (q2.y < yLev) spawnDrop(j, false);
        }
        if (show.burden) for (var k = 0; k < NC; k++) {
          var c = cs[k]; c.t += dt * c.sp; var u = clamp(c.t, 0, 1), sA = c.s, yA = G.czRoot(sA) - 0.1;
          var rB = rw.cx - rw.a * 0.6, yB = rw.cy + rw.b * 0.3, rA = sA * G.Rw(yA);
          var r = lerp(rA, rB, u * u), y = lerp(yA, yB, u);
          vx.set(r * Math.sin(c.f.a) + c.f.n.x * 0.32, y, r * Math.cos(c.f.a) + c.f.n.z * 0.32); qx.setFromEuler(new T.Euler(c.rx + clock, c.rz, 0)); sx.setScalar(c.sc);
          m4x.compose(vx, qx, sx); lumps.setMatrixAt(k, m4x); if (c.t >= 1) spawnCoke(k);
        }
        lumps.instanceMatrix.needsUpdate = true;
        for (var m2 = 0; m2 < NJ; m2++) {
          var jt = js[m2]; jt.t += dt * 0.9; if (jt.t > 1) jt.t -= 1; var dd = P.Dh / 2 + 0.6 + jt.t * 3.0, yy2 = yTap - 1.6 * jt.t * jt.t;
          jp[m2 * 3] = tapDir.x * dd + (Math.random() - 0.5) * 0.08; jp[m2 * 3 + 1] = yy2; jp[m2 * 3 + 2] = tapDir.z * dd + (Math.random() - 0.5) * 0.08;
        }
        gGeo.attributes.position.needsUpdate = true; gGeo.attributes.color.needsUpdate = true; dGeo.attributes.position.needsUpdate = true; jGeo.attributes.position.needsUpdate = true;
        hot.intensity = 1.1 + 0.25 * Math.sin(now / 160);
      }
      gas.visible = show.gas; drops.visible = show.liquid; lumps.visible = show.burden; jet.visible = casting; labels.visible = show.labels;
      controls.update(); renderer.render(scene, camera);
    }
    raf = requestAnimationFrame(frame);
    function resize() { var w = el.clientWidth, h = el.clientHeight; if (!w || !h) return; renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix(); }
    root.addEventListener('resize', resize);
    ST = { renderer: renderer, stop: function () { cancelAnimationFrame(raf); }, resize: resize, scene: scene, tex: [texL, texN, texP],
      api: { setLiquid: setLiquid, toggle: function (k, on) { show[k] = on; }, play: function (on) { running = on; } } };
    setLiquid(yTap, false);
    return ST.api;
  }
  function dispose() {
    if (!ST) return;
    ST.stop(); root.removeEventListener('resize', ST.resize);
    ST.scene.traverse(function (o) { if (o.geometry) o.geometry.dispose(); if (o.material) { (Array.isArray(o.material) ? o.material : [o.material]).forEach(function (m) { if (m.map) m.map.dispose(); m.dispose(); }); } });
    ST.tex.forEach(function (t) { t.dispose(); });
    ST.renderer.dispose(); if (ST.renderer.domElement.parentNode) ST.renderer.domElement.parentNode.removeChild(ST.renderer.domElement);
    ST = null;
  }
  root.IZ3D = { mount: mount, dispose: dispose };
})(window);
