/* "Sinter look": two sinter lumps (last vs recent) that form live from the green mix, glow in the flame front,
   cool, and settle into an appearance driven by the predicted results:
   - colour / lustre from FeO (magnetite: black, metallic; hematite / ferrite bonded: steel-grey to rust-red)
   - surface porosity from RI (open, fine pores = reducible; glassy, dense = low RI)
   - lump size from MPS, fines from the -6 mm fraction, cracks from TI
   - unfused (raw) granules when fixed carbon in the mix is low, glassy sheen when FeO is high. */
(function () {
  var T3 = window.THREE;
  var ctx = null;

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function mix3(a, b, t) { return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)]; }
  function rng(seed) { var s = seed >>> 0 || 1; return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
  function noise3(x, y, z) {
    return Math.sin(x * 1.7 + Math.sin(y * 2.3)) * 0.5 + Math.sin(y * 2.9 + Math.sin(z * 1.3)) * 0.3 + Math.sin(z * 3.7 + Math.sin(x * 2.1)) * 0.2;
  }

  // predicted result -> appearance
  function spec(r) {
    var dark = clamp((r.feo - 5) / 9, 0, 1);                 // FeO 5 % -> 0, 14 % -> 1
    var por = clamp((r.ri - 55) / 30, 0.08, 0.95);           // RI 55 -> dense, 85 -> very porous
    var glass = clamp((r.feo - 9) / 5, 0, 1) * (1 - por * 0.5);
    var hem = [0.52, 0.34, 0.29], steel = [0.38, 0.36, 0.37], mag = [0.12, 0.12, 0.14];
    var base = dark < 0.5 ? mix3(hem, steel, dark * 2) : mix3(steel, mag, (dark - 0.5) * 2);
    return {
      base: base, dark: dark, por: por, glass: glass,
      rough: clamp(0.92 - 0.55 * glass - 0.15 * dark, 0.3, 0.95), metal: clamp(0.12 + 0.45 * dark, 0.1, 0.6),
      scale: clamp((r.mps || 26) / 26, 0.6, 1.45),
      cracks: Math.round(clamp((76 - (r.ti || 72)) / 1.6, 0, 9)),
      fines: Math.round(clamp((r.m6 || 4) * 14, 10, 160)),
      unfused: clamp((3.6 - (r.fcMix || 4)) / 1.2, 0, 1) + clamp((6.5 - r.feo) / 3, 0, 1) * 0.6,
      b2: r.b2
    };
  }

  function lumpGeo(sp, seed, size) {
    var g = new T3.SphereGeometry(size, 96, 64), pos = g.attributes.position, n = pos.count, R = rng(seed);
    var cols = new Float32Array(n * 3), v = new T3.Vector3();
    var pores = [], nP = Math.round(25 + 140 * sp.por), cracks = [];
    for (var i = 0; i < nP; i++) pores.push({ d: new T3.Vector3(R() - 0.5, R() - 0.5, R() - 0.5).normalize(), r: 0.05 + 0.1 * R() * (1.2 - sp.por * 0.5) });
    for (var c = 0; c < sp.cracks; c++) cracks.push(new T3.Vector3(R() - 0.5, R() - 0.5, R() - 0.5).normalize());
    var raw = [], nRaw = Math.round(sp.unfused * 60);
    for (var u = 0; u < nRaw; u++) raw.push({ d: new T3.Vector3(R() - 0.5, R() - 0.5, R() - 0.5).normalize(), r: 0.06 + 0.06 * R() });
    var ox = R() * 10, oy = R() * 10, oz = R() * 10, stretch = new T3.Vector3(1 + R() * 0.35, 0.75 + R() * 0.2, 0.9 + R() * 0.3);
    for (var k = 0; k < n; k++) {
      v.fromBufferAttribute(pos, k); var d = v.clone().normalize();
      var h = 1 + 0.22 * noise3(d.x * 2 + ox, d.y * 2 + oy, d.z * 2 + oz) + 0.07 * noise3(d.x * 7, d.y * 7, d.z * 7);
      var col = sp.base.slice(), shade = 1 + 0.12 * noise3(d.x * 11 + 3, d.y * 11, d.z * 11);
      pores.forEach(function (p) { var a = d.angleTo(p.d); if (a < p.r) { var t = 1 - a / p.r; h -= 0.09 * t * t; shade *= 1 - 0.65 * t; } });
      cracks.forEach(function (cn) { var a = Math.abs(d.dot(cn)); if (a < 0.025) { h -= 0.05 * (1 - a / 0.025); shade *= 0.35; } });
      raw.forEach(function (p) { var a = d.angleTo(p.d); if (a < p.r) { var t = 1 - a / p.r; col = mix3(col, [0.55, 0.44, 0.27], t * 0.9); h += 0.03 * t; } });
      v.copy(d).multiplyScalar(size * h).multiply(stretch);
      pos.setXYZ(k, v.x, v.y, v.z);
      cols[k * 3] = clamp(col[0] * shade, 0, 1); cols[k * 3 + 1] = clamp(col[1] * shade, 0, 1); cols[k * 3 + 2] = clamp(col[2] * shade, 0, 1);
    }
    g.setAttribute('color', new T3.BufferAttribute(cols, 3));
    g.computeVertexNormals();
    return g;
  }

  function buildSide(scene, sp, x, seed) {
    var grp = new T3.Group(); grp.position.x = x; scene.add(grp);
    var R = rng(seed + 7), parts = [];
    var mat = function () { return new T3.MeshStandardMaterial({ vertexColors: true, roughness: sp.rough, metalness: sp.metal, emissive: new T3.Color(0, 0, 0), transparent: true, opacity: 0 }); };
    // main lump + smaller pieces of the size distribution
    var sizes = [0.95 * sp.scale, 0.45 * sp.scale, 0.38 * sp.scale, 0.3 * sp.scale];
    var spots = [[0, 0.1, 0], [-0.95, -0.55, 0.45], [0.85, -0.6, 0.55], [0.15, -0.68, -0.85]];
    sizes.forEach(function (s, i) {
      var m = new T3.Mesh(lumpGeo(sp, seed * 13 + i, s), mat());
      m.position.set(spots[i][0] * Math.max(1, sp.scale * 0.85), spots[i][1], spots[i][2]); m.rotation.set(R() * 3, R() * 3, R() * 3);
      grp.add(m); parts.push(m);
    });
    // fines (-6 mm) around the lumps
    var fg = new T3.IcosahedronGeometry(0.035, 0), fm = new T3.MeshStandardMaterial({ color: new T3.Color(sp.base[0] * 0.9, sp.base[1] * 0.9, sp.base[2] * 0.9), roughness: 0.9, transparent: true, opacity: 0 });
    var fines = new T3.InstancedMesh(fg, fm, sp.fines), M = new T3.Matrix4();
    for (var i = 0; i < sp.fines; i++) { var a = R() * 6.283, rr = 0.6 + R() * 1.3; M.makeTranslation(Math.cos(a) * rr, -0.82, Math.sin(a) * rr); fines.setMatrixAt(i, M); }
    grp.add(fines);
    // green-mix granules that move in and fuse
    var nG = 260, gg = new T3.SphereGeometry(0.06, 8, 6), gm = new T3.MeshStandardMaterial({ color: 0x6b5a45, roughness: 1, emissive: new T3.Color(0, 0, 0) });
    var gran = new T3.InstancedMesh(gg, gm, nG), from = [], to = [];
    for (var j = 0; j < nG; j++) {
      var d = new T3.Vector3(R() - 0.5, R() - 0.5, R() - 0.5).normalize();
      to.push(d.clone().multiplyScalar(0.9 * sp.scale * (0.6 + 0.4 * R())).add(new T3.Vector3(0, 0.1, 0)));
      from.push(new T3.Vector3((R() - 0.5) * 3.2, 1.6 + R() * 1.8, (R() - 0.5) * 3.2));
    }
    grp.add(gran);
    return { grp: grp, parts: parts, fines: fines, gran: gran, from: from, to: to, sp: sp };
  }

  var CYCLE = 9; // seconds for one forming sequence
  function animateSide(s, t, M) {
    // t in [0,1]: 0-.3 granules gather, .3-.5 flame front (glow), .5-.85 cooling, then final look
    var gather = clamp(t / 0.3, 0, 1), fuse = clamp((t - 0.3) / 0.2, 0, 1), cool = clamp((t - 0.5) / 0.35, 0, 1);
    var e = gather < 1 ? gather * gather * (3 - 2 * gather) : 1, v = new T3.Vector3();
    for (var i = 0; i < s.from.length; i++) {
      v.lerpVectors(s.from[i], s.to[i], e);
      var sc = 1 - fuse * 0.95; M.makeScale(sc + 0.001, sc + 0.001, sc + 0.001); M.setPosition(v); s.gran.setMatrixAt(i, M);
    }
    s.gran.instanceMatrix.needsUpdate = true;
    var glowT = fuse * (1 - cool);
    s.gran.material.emissive.setRGB(1.0 * glowT, 0.42 * glowT, 0.08 * glowT);
    s.gran.visible = fuse < 1;
    var op = fuse;
    s.parts.forEach(function (p, i) {
      p.material.opacity = op; p.material.transparent = op < 1; p.material.depthWrite = op > 0.5;
      var heat = Math.max(0, 1 - cool * 1.15);
      p.material.emissive.setRGB(1.0 * heat * fuse, (0.38 + 0.25 * heat) * heat * fuse, 0.05 * heat * fuse);
      var shrink = 1 - 0.05 * cool; p.scale.setScalar(shrink);
      if (i > 0) p.position.y = lerp(0.1, [0, -0.55, -0.6, -0.68][i], clamp((t - 0.82) / 0.12, 0, 1));
    });
    s.fines.material.opacity = clamp((t - 0.85) / 0.1, 0, 1);
  }

  function mount(el, rA, rB) {
    dispose();
    var w = el.clientWidth || 360, h = el.clientHeight || 300;
    var renderer = new T3.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)); renderer.setSize(w, h);
    renderer.outputColorSpace = T3.SRGBColorSpace || renderer.outputColorSpace;
    el.appendChild(renderer.domElement);
    var scene = new T3.Scene(); scene.background = new T3.Color(0x1b2430);
    var cam = new T3.PerspectiveCamera(38, w / h, 0.1, 100);
    scene.add(new T3.HemisphereLight(0xdfe8f5, 0x3a3026, 0.9));
    var key = new T3.DirectionalLight(0xffffff, 1.6); key.position.set(3, 5, 4); scene.add(key);
    var rim = new T3.DirectionalLight(0x9fc2ff, 0.6); rim.position.set(-4, 2, -3); scene.add(rim);
    var floor = new T3.Mesh(new T3.CircleGeometry(6, 48), new T3.MeshStandardMaterial({ color: 0x3a3632, roughness: 1 }));
    floor.rotation.x = -Math.PI / 2; floor.position.y = -0.86; scene.add(floor);
    var sA = spec(rA), sB = spec(rB);
    var L = buildSide(scene, sA, -1.75, 11), Rr = buildSide(scene, sB, 1.75, 29);
    var M = new T3.Matrix4(), t0 = performance.now(), paused = false, held = 0, yaw = 0, drag = null, dist = 7.2;
    function place() { cam.position.set(Math.sin(yaw) * dist, dist * 0.3, Math.cos(yaw) * dist); cam.lookAt(0, -0.15, 0); }
    function fit() { var asp = cam.aspect; dist = 8.8 / Math.min(1.25, Math.max(0.45, asp)) + 1.5; place(); }
    fit();
    place();
    var dom = renderer.domElement;
    dom.addEventListener('pointerdown', function (e) { drag = e.clientX; });
    window.addEventListener('pointerup', function () { drag = null; });
    dom.addEventListener('pointermove', function (e) { if (drag != null) { yaw -= (e.clientX - drag) * 0.008; yaw = clamp(yaw, -0.9, 0.9); drag = e.clientX; place(); } });
    var raf;
    function frame(now) {
      raf = requestAnimationFrame(frame);
      var t = paused ? held : Math.min(1, (now - t0) / 1000 / CYCLE);
      animateSide(L, t, M); animateSide(Rr, t, M);
      if (t >= 1 && !paused) { L.grp.rotation.y += 0.003; Rr.grp.rotation.y += 0.003; }
      renderer.render(scene, cam);
      if (ctx) ctx.t = t;
    }
    raf = requestAnimationFrame(frame);
    function onResize() { var w2 = el.clientWidth, h2 = el.clientHeight; if (!w2) return; renderer.setSize(w2, h2); cam.aspect = w2 / h2; cam.updateProjectionMatrix(); fit(); }
    window.addEventListener('resize', onResize);
    ctx = {
      t: 0, specs: [sA, sB],
      replay: function () { t0 = performance.now(); paused = false; L.grp.rotation.y = 0; Rr.grp.rotation.y = 0; },
      pause: function () { if (!paused) { held = ctx.t; paused = true; } else { t0 = performance.now() - held * CYCLE * 1000; paused = false; } return paused; },
      stop: function () {
        cancelAnimationFrame(raf); window.removeEventListener('resize', onResize);
        scene.traverse(function (o) { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });
        renderer.dispose(); if (dom.parentNode) dom.parentNode.removeChild(dom);
      }
    };
    return ctx;
  }
  function dispose() { if (ctx) { ctx.stop(); ctx = null; } }

  // plain-language description of one sinter
  function describe(r) {
    var s = spec(r), out = {};
    out.colour = s.dark > 0.7 ? 'Dark grey to black, metallic, glassy sheen (magnetite-rich)' : s.dark > 0.4 ? 'Steel-grey with dark patches (hematite + magnetite)' : 'Steel-grey to rust-brown, dull (hematite / ferrite-rich)';
    out.pores = s.por > 0.65 ? 'Many fine open pores' : s.por > 0.4 ? 'Moderate porosity' : 'Dense, few open pores';
    out.size = (r.mps < 22 ? 'Small lumps' : r.mps > 30 ? 'Large lumps' : 'Medium lumps') + ', ' + (r.m6 > 6 ? 'many fines' : r.m6 > 4 ? 'some fines' : 'few fines');
    out.strength = s.cracks >= 5 ? 'Cracked, breaks easily' : s.cracks >= 2 ? 'Some cracks' : 'Compact, strong';
    out.bond = r.b2 >= 1.8 ? 'Calcium-ferrite (SFCA) bonded' : r.b2 >= 1.5 ? 'Mixed ferrite / silicate bond' : 'Mostly silicate-glass bonded';
    out.raw = s.unfused > 0.4 ? 'Unfused raw-mix granules visible' : '';
    return out;
  }

  window.SinterLook = { mount: mount, dispose: dispose, spec: spec, describe: describe, replay: function () { if (ctx) ctx.replay(); }, t: function () { return ctx ? ctx.t : 1; }, togglePause: function () { return ctx ? ctx.pause() : false; } };
})();
