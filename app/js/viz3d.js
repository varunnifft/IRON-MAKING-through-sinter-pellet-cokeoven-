/* 3D sinter strand driven by the prediction: bed zones from flame-front physics, BTP, windbox gas
   temperatures, cake colour by FeO, discharged lump sizes from the predicted size distribution. */
(function () {
  var T3 = window.THREE;
  var ctx = null;

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function smooth(a, b, x) { var t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); }

  // Steady-state strand estimates (indicative) from predicted results and machine inputs
  function physics(r, inp, M) {
    var area = inp.area || 120;
    var width = inp.width > 0 ? inp.width : area <= 90 ? 2.5 : area <= 220 ? 3 : area <= 450 ? 4 : 5;
    var L = area / width;
    var bedM = (inp.bed || 600) / 1000;
    var vCharge = clamp((r.wet / 1440) / (bedM * width * 1.85), 0.4, 6);       // m/min implied by charge rate, bulk density 1.85 t/m3
    var vPallet = inp.speed > 0 ? clamp(inp.speed, 0.4, 6) : vCharge;          // machine speed input (m/min)
    var xIgn = Math.min(1.5, L * 0.05);
    var fBtp = clamp(0.9 + ((M[13] || 370) - inp.btp) * 0.0015, 0.72, 0.97);    // hotter waste gas = earlier burn-through
    var xBtp = fBtp * L;
    var vss = inp.bed / ((xBtp - xIgn) / vPallet);                              // mm/min
    var ffThick = clamp(22 + (r.fcMix - 4) * 10, 12, 50);
    var tmax = clamp(1290 + 55 * (r.fcMix - (M[14] || 4.27)) + 8 * (r.feo - (M[6] || 9.86)), 1150, 1450);
    var vexag = Math.round(clamp(L / 5 / bedM, 4, 12));
    var mag = clamp(r.feo * 2.6, 5, 50), sfca = clamp(r.b2 / 2 * 40, 5, 50), glass = clamp(r.sio2 * 1.6 + r.al2o3 * 0.8, 5, 25), c2s = clamp((r.b2 - 1.6) * 6, 0, 8);
    var hem = Math.max(0, 100 - mag - sfca - glass - c2s);
    var phases = [
      { l: 'Hematite', v: hem, c: '#b5523b' }, { l: 'Magnetite', v: mag, c: '#2f3640' }, { l: 'SFCA', v: sfca, c: '#e0a43a' },
      { l: 'Silicate glass', v: glass, c: '#7fa7c9' }, { l: 'C₂S', v: c2s, c: '#9aa' }
    ];
    return { width: width, L: L, vPallet: vPallet, vCharge: vCharge, xIgn: xIgn, xBtp: xBtp, vss: vss, ffThick: ffThick, tmax: tmax, vexag: vexag, phases: phases, bed: inp.bed, btp: inp.btp };
  }

  function tempColor(T, cake) {
    // incandescence ramp: dark cake -> dull red -> orange -> yellow-white
    var stops = [[300, cake], [550, [0.45, 0.08, 0.05]], [800, [0.85, 0.2, 0.05]], [1050, [1.0, 0.55, 0.1]], [1250, [1.0, 0.85, 0.35]], [1450, [1.0, 0.97, 0.8]]];
    if (T <= stops[0][0]) return cake;
    for (var i = 1; i < stops.length; i++) {
      if (T <= stops[i][0]) {
        var a = stops[i - 1], b = stops[i], t = (T - a[0]) / (b[0] - a[0]);
        return [a[1][0] + (b[1][0] - a[1][0]) * t, a[1][1] + (b[1][1] - a[1][1]) * t, a[1][2] + (b[1][2] - a[1][2]) * t];
      }
    }
    return stops[stops.length - 1][1];
  }
  function hex(h) { var n = parseInt(h.slice(1), 16); return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255]; }

  function bedColor(ph, r, x, d) {
    var bed = ph.bed, cake = r.feo > 10.5 ? hex('#2b2f36') : r.feo > 9 ? hex('#3a3f47') : hex('#4d4442');
    var hearth = d > bed - 30;
    if (x < ph.xIgn) return hearth ? hex('#8a8a8a') : (d < 6 ? hex('#857a63') : hex('#6f6a5c'));
    var t = (x - ph.xIgn) / ph.vPallet;                // minutes since ignition
    var ff = ph.vss * t;                               // flame-front depth, mm
    var half = ph.ffThick / 2;
    if (d < ff - half) {                               // sintered, cooling since the front passed
      var tPass = (ff - d) / ph.vss;
      var T = 60 + (ph.tmax - 60) * Math.exp(-tPass / 2.2);
      if (x > ph.xBtp) T *= Math.exp(-(x - ph.xBtp) / ph.vPallet / 6);
      return tempColor(T, cake);
    }
    if (d <= ff + half) return tempColor(ph.tmax - Math.abs(d - ff) / half * 120, cake);
    if (hearth) return hex('#8a8a8a');
    var s = d - ff - half;
    if (s < 35) { var k = s / 35; return [0.76 - 0.2 * k, 0.27 + 0.08 * k, 0.11 + 0.1 * k]; }   // calcination / pre-heat
    if (s < 80) return hex('#9b8a6a');                                                            // drying
    return hex('#5b6f86');                                                                        // over-wet zone
  }

  function label(text, color) {
    var c = document.createElement('canvas'); c.width = 512; c.height = 128;
    var g = c.getContext('2d'); g.font = 'bold 46px Roboto, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillStyle = 'rgba(10,22,36,0.78)'; var w = g.measureText(text).width + 40;
    g.beginPath(); if (g.roundRect) g.roundRect(256 - w / 2, 14, w, 100, 22); else g.rect(256 - w / 2, 14, w, 100); g.fill();
    g.fillStyle = color || '#fff'; g.fillText(text, 256, 66);
    var tex = new T3.CanvasTexture(c);
    var sp = new T3.Sprite(new T3.SpriteMaterial({ map: tex, depthTest: false, transparent: true }));
    sp.scale.set(12, 3, 1); sp.renderOrder = 10;
    return sp;
  }

  function mount(el, r, inp, ph) {
    dispose();
    if (!T3) throw new Error('three.js missing');
    var W = el.clientWidth || 360, Hh = el.clientHeight || 400;
    var renderer = new T3.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(W, Hh);
    renderer.setClearColor(0x0b1624);
    el.insertBefore(renderer.domElement, el.firstChild);
    var scene = new T3.Scene();
    scene.fog = new T3.Fog(0x0b1624, 150, 400);
    var camera = new T3.PerspectiveCamera(45, W / Hh, 0.1, 500);
    var L = ph.L, H = ph.bed / 1000 * ph.vexag, Wd = ph.width * 1.6;
    var objs = [];
    function add(o) { scene.add(o); objs.push(o); return o; }

    add(new T3.AmbientLight(0xffffff, 0.45));
    var sun = new T3.DirectionalLight(0xffffff, 0.75); sun.position.set(-20, 40, 30); add(sun);

    // bed with zone colours
    var nx = 180, ny = 50;
    var geo = new T3.BoxGeometry(L, H, Wd, nx, ny, 2);
    geo.translate(L / 2, H / 2, 0);
    var pos = geo.attributes.position, cols = new Float32Array(pos.count * 3);
    for (var i = 0; i < pos.count; i++) {
      var x = pos.getX(i), y = pos.getY(i);
      var d = (H - y) / H * ph.bed;
      var c = bedColor(ph, r, x, d);
      cols[i * 3] = c[0]; cols[i * 3 + 1] = c[1]; cols[i * 3 + 2] = c[2];
    }
    geo.setAttribute('color', new T3.BufferAttribute(cols, 3));
    var bed = add(new T3.Mesh(geo, new T3.MeshLambertMaterial({ vertexColors: true, emissive: 0x000000 })));
    // self-lit copy of the hot zones so the flame front glows even in shadow
    var glowCols = new Float32Array(pos.count * 3);
    for (i = 0; i < pos.count; i++) { var lum = cols[i * 3] - cols[i * 3 + 2]; var gl = lum > 0.35 ? 1 : 0; glowCols[i * 3] = cols[i * 3] * gl; glowCols[i * 3 + 1] = cols[i * 3 + 1] * gl; glowCols[i * 3 + 2] = cols[i * 3 + 2] * gl; }
    var ggeo = geo.clone(); ggeo.setAttribute('color', new T3.BufferAttribute(glowCols, 3));
    var glowMat = new T3.MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.55, blending: T3.AdditiveBlending, depthWrite: false });
    var glow = add(new T3.Mesh(ggeo, glowMat)); glow.scale.set(1, 1, 1.002);

    // grate / pallet bottom
    add(new T3.Mesh(new T3.BoxGeometry(L, 0.35, Wd + 0.4), new T3.MeshLambertMaterial({ color: 0x2a2f36 }))).position.set(L / 2, -0.18, 0);
    // moving pallet side plates
    var plateGeo = new T3.BoxGeometry(1.3, H + 0.5, 0.12), plateMat = new T3.MeshLambertMaterial({ color: 0x4c5966 });
    var plates = [], pitch = 1.5;
    for (var s = 0; s < 2; s++) for (var p = 0; p < Math.ceil(L / pitch); p++) {
      var pl = add(new T3.Mesh(plateGeo, plateMat)); pl.visible = s === 0; pl.position.set(p * pitch + 0.65, H / 2 - 0.05, (s ? 1 : -1) * (Wd / 2 + 0.08)); pl.userData.side = s; plates.push(pl);
    }
    // ignition hood with flames
    var hoodLen = Math.max(3, ph.xIgn + 2.5);
    var hood = add(new T3.Mesh(new T3.BoxGeometry(hoodLen, 1.6, Wd + 1), new T3.MeshLambertMaterial({ color: 0x6b7480 })));
    hood.position.set(hoodLen / 2 - 0.5, H + 1.3, 0);
    var hoodGlow = add(new T3.Mesh(new T3.PlaneGeometry(hoodLen, Wd + 0.8), new T3.MeshBasicMaterial({ color: 0xff8a2a, transparent: true, opacity: 0.8, side: T3.DoubleSide })));
    hoodGlow.rotation.x = Math.PI / 2; hoodGlow.position.set(hoodLen / 2 - 0.5, H + 0.48, 0);
    var flames = [], fgeo = new T3.ConeGeometry(0.28, 1, 8), fmat = new T3.MeshBasicMaterial({ color: 0xffb13b, transparent: true, opacity: 0.85, blending: T3.AdditiveBlending, depthWrite: false });
    for (i = 0; i < 12; i++) { var fl = add(new T3.Mesh(fgeo, fmat)); fl.rotation.x = Math.PI; fl.position.set(0.2 + (i % 6) / 6 * (hoodLen - 1.2), H + 0.3, ((i / 6 | 0) ? 0.6 : -0.6) * Wd / 2); flames.push(fl); }
    var fireLight = add(new T3.PointLight(0xff7a22, 2.2, 16)); fireLight.position.set(hoodLen / 2, H + 0.2, Wd);

    // windboxes coloured by waste-gas temperature
    var nb = Math.max(8, Math.round(L / 3)), bw = L / nb;
    for (i = 0; i < nb; i++) {
      var xc = (i + 0.5) * bw;
      var Tg = 70 + (ph.btp - 70) * smooth(ph.xBtp - 0.4 * L, ph.xBtp, xc);
      if (xc > ph.xBtp) Tg = ph.btp - (xc - ph.xBtp) / L * 120;
      var k = clamp((Tg - 70) / (Math.max(ph.btp, 300) - 70), 0, 1);
      var col = new T3.Color().setHSL(0.62 - 0.62 * k, 0.75, 0.45);
      var wb = add(new T3.Mesh(new T3.CylinderGeometry(Wd * 0.18, Wd * 0.42, 2.4, 4, 1), new T3.MeshLambertMaterial({ color: col, transparent: true, opacity: 0.9 })));
      wb.rotation.y = Math.PI / 4; wb.scale.set(bw / (Wd * 0.6), 1, 1); wb.position.set(xc, -1.6, 0);
    }
    add(new T3.Mesh(new T3.BoxGeometry(L, 1.1, 1.1), new T3.MeshLambertMaterial({ color: 0x39424d }))).position.set(L / 2, -3.4, 0);

    // BTP marker
    var mk = add(new T3.Mesh(new T3.BoxGeometry(0.12, H + 4.2, 0.12), new T3.MeshBasicMaterial({ color: 0xff3b30 }))); mk.position.set(ph.xBtp, H / 2 - 1.6, Wd / 2 + 0.5);
    var lb;
    lb = add(label('BTP ' + ph.btp.toFixed(0) + ' °C @ ' + ph.xBtp.toFixed(1) + ' m', '#ffb3ad')); lb.position.set(ph.xBtp, H + 3.2, Wd / 2 + 0.5);
    lb = add(label('Ignition hood', '#ffd39a')); lb.position.set(hoodLen / 2 - 0.5, H + 3.4, 0);
    lb = add(label('Flame front ' + ph.vss.toFixed(1) + ' mm/min', '#ffe27a')); lb.position.set(Math.min(L * 0.42, ph.xBtp * 0.55), H + 2.2, Wd / 2);
    lb = add(label('Windboxes (waste gas)', '#a9d2ff')); lb.position.set(L * 0.3, -4.6, Wd / 2);
    lb = add(label('Discharge · MPS ' + r.mps.toFixed(1) + ' mm', '#d7e3ee')); lb.position.set(L + 3.5, H + 1.6, 0);

    // discharged lumps: sizes sampled from the predicted size distribution
    var bins = [[r.p50, 55], [r.p40, 45], [r.p25, 32.5], [r.p10, 17.5], [r.p6, 8], [r.m6, 3]];
    var tot = bins.reduce(function (a, b) { return a + b[0]; }, 0) || 1;
    function sampleSize() { var u = Math.random() * tot; for (var j = 0; j < bins.length; j++) { u -= bins[j][0]; if (u <= 0) return bins[j][1]; } return 17.5; }
    var NL = 260, lumpGeo = new T3.DodecahedronGeometry(1, 0);
    var cakeCol = r.feo > 10.5 ? 0x2b2f36 : r.feo > 9 ? 0x454a52 : 0x5a4a45;
    var lumps = new T3.InstancedMesh(lumpGeo, new T3.MeshLambertMaterial({ color: cakeCol }), NL); add(lumps);
    var LS = [], dummy = new T3.Object3D(), pileX = L + 3.2;
    for (i = 0; i < NL; i++) LS.push(newLump(true));
    function newLump(initial) {
      var sz = sampleSize();
      return { x: L + 0.3, y: H * (0.2 + Math.random() * 0.8), z: (Math.random() - 0.5) * Wd, vx: 1 + Math.random(), vy: 0, vz: (Math.random() - 0.5) * 0.6,
        s: 0.06 + sz / 55 * 0.42, rx: Math.random() * 6, ry: Math.random() * 6, delay: initial ? Math.random() * 6 : Math.random() * 0.5, rest: 0, life: 4 + Math.random() * 3 };
    }
    var pile = add(new T3.Mesh(new T3.ConeGeometry(4, 2.6, 24, 1, true), new T3.MeshLambertMaterial({ color: 0x3d4148 }))); pile.position.set(pileX, -5.0 + 1.3, 0);
    // dust from weak sinter: more when TI is low / AI high
    var ND = Math.round(clamp((100 - r.ti) * 6 + r.ai * 20, 40, 500));
    var dpos = new Float32Array(ND * 3), dvel = [];
    for (i = 0; i < ND; i++) { dpos[i * 3] = L + Math.random() * 4; dpos[i * 3 + 1] = Math.random() * H; dpos[i * 3 + 2] = (Math.random() - 0.5) * Wd; dvel.push(0.2 + Math.random() * 0.5); }
    var dgeo = new T3.BufferGeometry(); dgeo.setAttribute('position', new T3.BufferAttribute(dpos, 3));
    var dust = add(new T3.Points(dgeo, new T3.PointsMaterial({ color: 0x9a8f86, size: 0.12, transparent: true, opacity: 0.55 })));
    // off-gas plume above the ignition hood
    var NS = 120, spos = new Float32Array(NS * 3);
    for (i = 0; i < NS; i++) { spos[i * 3] = Math.random() * hoodLen; spos[i * 3 + 1] = H + 2 + Math.random() * 6; spos[i * 3 + 2] = (Math.random() - 0.5) * Wd; }
    var sgeo = new T3.BufferGeometry(); sgeo.setAttribute('position', new T3.BufferAttribute(spos, 3));
    add(new T3.Points(sgeo, new T3.PointsMaterial({ color: 0xb8c2cc, size: 0.35, transparent: true, opacity: 0.25, depthWrite: false })));
    // floor
    var grid = add(new T3.GridHelper(L + 30, Math.round((L + 30) / 2), 0x1f3550, 0x152538)); grid.position.set(L / 2 + 3, -5.0, 0);

    // camera control (drag rotate, pinch zoom)
    var tgt = new T3.Vector3(L / 2 + 2, H / 2 - 1, 0);
    var view = { th: -0.38, ph: 1.2, rad: L * 1.6 * Math.max(1, 1 / Math.max(0.5, W / Hh) * 0.75) }, home = { th: view.th, ph: view.ph, rad: view.rad }, sectionView = { th: 0, ph: 1.5, rad: view.rad * 0.8 };
    function place() {
      camera.position.set(tgt.x + view.rad * Math.sin(view.ph) * Math.sin(view.th), tgt.y + view.rad * Math.cos(view.ph), tgt.z + view.rad * Math.sin(view.ph) * Math.cos(view.th));
      camera.lookAt(tgt);
    }
    place();
    var ptrs = {}, lastDist = 0, cv = renderer.domElement;
    cv.addEventListener('pointerdown', function (e) { cv.setPointerCapture(e.pointerId); ptrs[e.pointerId] = { x: e.clientX, y: e.clientY }; });
    cv.addEventListener('pointermove', function (e) {
      var p0 = ptrs[e.pointerId]; if (!p0) return;
      var ids = Object.keys(ptrs);
      if (ids.length === 1) {
        view.th -= (e.clientX - p0.x) * 0.006; view.ph = clamp(view.ph - (e.clientY - p0.y) * 0.005, 0.2, 1.62);
      }
      ptrs[e.pointerId] = { x: e.clientX, y: e.clientY };
      if (ids.length === 2) {
        var a = ptrs[ids[0]], b = ptrs[ids[1]], dd = Math.hypot(a.x - b.x, a.y - b.y);
        if (lastDist) view.rad = clamp(view.rad * lastDist / dd, 8, L * 5);
        lastDist = dd;
      }
      place();
    });
    function up(e) { delete ptrs[e.pointerId]; lastDist = 0; }
    cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
    cv.addEventListener('wheel', function (e) { e.preventDefault(); view.rad = clamp(view.rad * (1 + e.deltaY * 0.001), 8, L * 5); place(); }, { passive: false });

    var paused = false, section = false, last = performance.now(), tAll = 0, raf = 0;
    var vis = ph.vPallet / 60 * 25; // drawn pallet speed: 25x real so the motion is visible
    function frame(now) {
      raf = requestAnimationFrame(frame);
      var dt = Math.min(0.05, (now - last) / 1000); last = now;
      if (!paused) {
        tAll += dt;
        plates.forEach(function (pl) { pl.position.x += vis * dt; if (pl.position.x > L) pl.position.x -= Math.ceil(L / pitch) * pitch; });
        flames.forEach(function (fl, j) { var s2 = 0.7 + 0.4 * Math.sin(tAll * 11 + j * 1.7) + 0.15 * Math.sin(tAll * 23 + j); fl.scale.set(1, s2, 1); });
        fireLight.intensity = 2 + 0.6 * Math.sin(tAll * 9) + 0.3 * Math.sin(tAll * 21);
        glowMat.opacity = 0.45 + 0.12 * Math.sin(tAll * 6);
        for (var j = 0; j < NL; j++) {
          var q = LS[j];
          if (q.delay > 0) { q.delay -= dt; dummy.position.set(0, -100, 0); }
          else {
            if (q.rest <= 0) {
              q.vy -= 9.8 * dt; q.x += q.vx * dt; q.y += q.vy * dt; q.z += q.vz * dt; q.rx += dt * 3; q.ry += dt * 2;
              var floor = -5 + Math.max(0, 2.6 - Math.hypot(q.x - pileX, q.z) * 0.65);
              if (q.y < floor + q.s) { q.y = floor + q.s; q.rest = q.life; }
            } else { q.rest -= dt; if (q.rest <= 0) LS[j] = newLump(false); }
            dummy.position.set(q.x, q.y, q.z);
          }
          dummy.rotation.set(q.rx, q.ry, 0); dummy.scale.setScalar(q.s); dummy.updateMatrix(); lumps.setMatrixAt(j, dummy.matrix);
        }
        lumps.instanceMatrix.needsUpdate = true;
        var da = dgeo.attributes.position.array;
        for (j = 0; j < ND; j++) { da[j * 3 + 1] -= dvel[j] * dt; da[j * 3] += 0.3 * dt; if (da[j * 3 + 1] < -5) { da[j * 3 + 1] = H * Math.random(); da[j * 3] = L + Math.random(); } }
        dgeo.attributes.position.needsUpdate = true;
        var sa = sgeo.attributes.position.array;
        for (j = 0; j < NS; j++) { sa[j * 3 + 1] += 0.8 * dt; sa[j * 3] += 0.4 * dt; if (sa[j * 3 + 1] > H + 9) { sa[j * 3 + 1] = H + 2; sa[j * 3] = Math.random() * hoodLen; } }
        sgeo.attributes.position.needsUpdate = true;
      }
      renderer.render(scene, camera);
    }
    raf = requestAnimationFrame(frame);
    function onResize() { var w = el.clientWidth, h = el.clientHeight; if (!w || !h) return; renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix(); }
    window.addEventListener('resize', onResize);
    ctx = {
      stop: function () { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); scene.traverse(function (o) { if (o.geometry) o.geometry.dispose(); if (o.material) { if (o.material.map) o.material.map.dispose(); o.material.dispose(); } }); renderer.dispose(); if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement); },
      pause: function () { paused = !paused; return paused; },
      section: function () {
        section = !section;
        var v = section ? sectionView : home; view.th = v.th; view.ph = v.ph; view.rad = v.rad; place();
        return section;
      },
      reset: function () { view.th = home.th; view.ph = home.ph; view.rad = home.rad; if (section) ctx.section(); place(); }
    };
  }
  function dispose() { if (ctx) { ctx.stop(); ctx = null; } }

  window.SinterViz = {
    physics: physics, mount: mount, dispose: dispose,
    togglePause: function () { return ctx ? ctx.pause() : false; },
    toggleSection: function () { return ctx ? ctx.section() : false; },
    resetView: function () { if (ctx) ctx.reset(); }
  };
})();
