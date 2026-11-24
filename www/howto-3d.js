/* How to use the app (6.3.6): 3D guided tour with Indian English narration.
   Three.js r128 scene: blast furnace, stoves, dust catcher, floating phone whose screen shows the current step,
   and step props (plants, burden layers, CO2 cloud, laptop). Audio: audio/howto-f01.mp3 … (female) / -m01 … (male),
   made offline with the Kokoro neural voice (Indian voices). Falls back to the device voice (en-IN) or a timer. */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var STEPS = window.HOWTO_STEPS || [], cur = 0, playing = false, voice = 'f', started = false;
  try { voice = localStorage.getItem('im.howto.voice') || 'f'; } catch (e) { }
  var aud = $('aud'), timer = null, fallbackT0 = 0, fallbackDur = 0, playTok = 0;

  /* ---------------- 3D */
  var R = null, scene, cam, ctl, clock, phone, screenTex, screenCanvas, furnace, shellMat, layers, props = {}, sparks, sparkV = [], targetCam = null, targetLook = null, look = new THREE.Vector3(0, 3, 0);
  function mat(c, m, r, e) { return new THREE.MeshStandardMaterial({ color: c, metalness: m == null ? .6 : m, roughness: r == null ? .4 : r, emissive: e || 0x000000 }); }
  function init3d() {
    var host = $('stage');
    try { R = new THREE.WebGLRenderer({ antialias: true, alpha: false }); } catch (e) { $('load').textContent = '3D is not available on this device — the narration and steps still work.'; return; }
    R.setPixelRatio(Math.min(2, window.devicePixelRatio || 1)); R.setSize(host.clientWidth, host.clientHeight);
    R.outputEncoding = THREE.sRGBEncoding; host.appendChild(R.domElement); $('load').remove();
    scene = new THREE.Scene(); scene.background = new THREE.Color(0x071426); scene.fog = new THREE.Fog(0x071426, 18, 46);
    cam = new THREE.PerspectiveCamera(48, host.clientWidth / host.clientHeight, .1, 200); cam.position.set(9, 6, 13);
    if (THREE.OrbitControls) { ctl = new THREE.OrbitControls(cam, R.domElement); ctl.enableDamping = true; ctl.enablePan = false; ctl.minDistance = 5; ctl.maxDistance = 48; ctl.maxPolarAngle = Math.PI * .49; ctl.addEventListener('start', function () { targetCam = null; }); }
    scene.add(new THREE.HemisphereLight(0x9fc3ff, 0x2a1500, .55));
    var key = new THREE.DirectionalLight(0xffe2c4, .9); key.position.set(8, 14, 6); scene.add(key);
    var rim = new THREE.DirectionalLight(0x5aa8ff, .5); rim.position.set(-10, 6, -8); scene.add(rim);
    var hot = new THREE.PointLight(0xff7a1a, 2.2, 14, 2); hot.position.set(1.8, 1.0, 1.8); scene.add(hot);
    // sky dome gradient
    var sky = new THREE.Mesh(new THREE.SphereGeometry(90, 32, 16), new THREE.ShaderMaterial({ side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { a: { value: new THREE.Color(0x0b1838) }, b: { value: new THREE.Color(0x6a3a6a) }, c: { value: new THREE.Color(0xff8a4a) } },
      vertexShader: 'varying vec3 p; void main(){ p = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'uniform vec3 a; uniform vec3 b; uniform vec3 c; varying vec3 p; void main(){ float h = p.y; vec3 col = h > .18 ? mix(b, a, smoothstep(.18,.7,h)) : mix(c, b, smoothstep(-.02,.18,h)); gl_FragColor = vec4(col,1.0); }' }));
    scene.add(sky);
    var stars = new THREE.BufferGeometry(), sp = []; for (var i = 0; i < 500; i++) { var th = Math.random() * Math.PI * 2, ph = Math.random() * .45 + .25; sp.push(80 * Math.cos(th) * Math.cos(ph), 80 * Math.sin(ph), 80 * Math.sin(th) * Math.cos(ph)); }
    stars.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3)); scene.add(new THREE.Points(stars, new THREE.PointsMaterial({ color: 0xffffff, size: .35, fog: false, transparent: true, opacity: .8 })));
    // ground
    var g = new THREE.Mesh(new THREE.CircleGeometry(60, 64), mat(0x0d121c, .2, .9)); g.rotation.x = -Math.PI / 2; scene.add(g);
    var grid = new THREE.GridHelper(60, 60, 0x1d3553, 0x13243a); grid.position.y = .01; scene.add(grid);
    // furnace (lathe profile)
    var prof = [[0, 0], [1.6, 0], [1.6, 1.3], [2.15, 2.3], [2.15, 2.9], [1.45, 6.0], [1.45, 6.5], [.7, 7.0], [.7, 7.6]].map(function (p) { return new THREE.Vector2(p[0], p[1]); });
    shellMat = mat(0x9aa6b4, .75, .32); shellMat.transparent = true;
    furnace = new THREE.Group();
    furnace.add(new THREE.Mesh(new THREE.LatheGeometry(prof, 48), shellMat));
    var bands = mat(0x5c6878, .8, .4); [1.3, 2.3, 2.9, 4.4, 6.0].forEach(function (y) { var r = y <= 1.3 ? 1.62 : y <= 2.9 ? 2.17 : 1.45 + (6 - y) / 3.1 * .7; var t = new THREE.Mesh(new THREE.TorusGeometry(r, .05, 6, 48), bands); t.rotation.x = Math.PI / 2; t.position.y = y; furnace.add(t); });
    var tuy = mat(0xffe08a, .1, .4, 0xff7a1a); for (var k = 0; k < 14; k++) { var a = k / 14 * Math.PI * 2, s = new THREE.Mesh(new THREE.SphereGeometry(.09, 10, 8), tuy); s.position.set(Math.cos(a) * 1.68, 1.15, Math.sin(a) * 1.68); furnace.add(s); }
    var ring = new THREE.Mesh(new THREE.TorusGeometry(1.95, .12, 8, 48), mat(0x7d8896, .8, .35)); ring.rotation.x = Math.PI / 2; ring.position.y = 1.55; furnace.add(ring);
    // burden layers (shown in the planner step)
    layers = new THREE.Group(); var lc = [0x2e2824, 0xb5532c]; for (var L = 0; L < 9; L++) { var y0 = 2.9 + L * .34, rr = 2.0 - L * .065; var c = new THREE.Mesh(new THREE.CylinderGeometry(rr - .03, rr, .33, 40), mat(lc[L % 2], .1, .9)); c.position.y = y0 + .17; layers.add(c); }
    var blank = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 1.5, 1.6, 40), mat(0x1c1714, .1, .95)); blank.position.y = 2.1; layers.add(blank);
    var pool = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, .5, 40), mat(0xffa040, .1, .5, 0xff5a10)); pool.position.y = .35; layers.add(pool);
    layers.visible = false; furnace.add(layers); scene.add(furnace);
    // stoves, dust catcher, downcomer, cast house
    var stoveM = mat(0xb8c2cd, .7, .3);
    for (var st = 0; st < 3; st++) { var cy = new THREE.Mesh(new THREE.CylinderGeometry(.75, .75, 5, 28), stoveM); cy.position.set(-6 - st * 1.9, 2.5, -1.5); scene.add(cy); var dome = new THREE.Mesh(new THREE.SphereGeometry(.75, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), stoveM); dome.position.set(-6 - st * 1.9, 5, -1.5); scene.add(dome); }
    var main = new THREE.Mesh(new THREE.CylinderGeometry(.22, .22, 8.6, 12), mat(0x7d8896)); main.rotation.z = Math.PI / 2; main.position.set(-6, 1.55, -1.5); scene.add(main);
    var dc = new THREE.Mesh(new THREE.CylinderGeometry(.8, .8, 3, 20), stoveM); dc.position.set(4.6, 3.8, -2.2); scene.add(dc);
    var cone = new THREE.Mesh(new THREE.ConeGeometry(.8, 1.2, 20), stoveM); cone.rotation.x = Math.PI; cone.position.set(4.6, 1.7, -2.2); scene.add(cone);
    var curve = new THREE.CatmullRomCurve3([new THREE.Vector3(.4, 7.4, -.3), new THREE.Vector3(2.4, 8.4, -1.2), new THREE.Vector3(4.6, 5.6, -2.2)]);
    scene.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 30, .22, 10, false), mat(0x8f9aa8)));
    var conv = new THREE.Mesh(new THREE.BoxGeometry(.5, .2, 11), mat(0x5c6878, .6, .5)); conv.position.set(1.0, 4.0, 5.6); conv.rotation.x = -.62; scene.add(conv);
    var ch = new THREE.Mesh(new THREE.BoxGeometry(6, 1.1, 3), mat(0x3a4350, .3, .7)); ch.position.set(1.5, .55, 3.2); scene.add(ch);
    var win = mat(0xffc95c, 0, .5, 0xffa020); for (var w = 0; w < 8; w++) { var wb = new THREE.Mesh(new THREE.PlaneGeometry(.3, .22), win); wb.position.set(-1.1 + w * .7, .65, 4.71); scene.add(wb); }
    var runner = new THREE.Mesh(new THREE.BoxGeometry(2.4, .06, .28), mat(0xffa040, 0, .4, 0xff5a10)); runner.position.set(2.6, 1.12, 2.2); runner.rotation.y = -.6; scene.add(runner);
    // sparks
    var sg = new THREE.BufferGeometry(), sa = new Float32Array(240 * 3); for (var q = 0; q < 240; q++) { resetSpark(sa, q, true); sparkV.push(.6 + Math.random() * 1.4); }
    sg.setAttribute('position', new THREE.BufferAttribute(sa, 3)); sparks = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xffb547, size: .09, transparent: true, opacity: .9, blending: THREE.AdditiveBlending, depthWrite: false })); scene.add(sparks);
    // phone with a live screen
    screenCanvas = document.createElement('canvas'); screenCanvas.width = 512; screenCanvas.height = 1024; screenTex = new THREE.CanvasTexture(screenCanvas); screenTex.encoding = THREE.sRGBEncoding;
    phone = new THREE.Group();
    phone.add(new THREE.Mesh(new THREE.BoxGeometry(2.25, 4.4, .18), mat(0x11161f, .6, .35)));
    var scr = new THREE.Mesh(new THREE.PlaneGeometry(2.05, 4.1), new THREE.MeshBasicMaterial({ map: screenTex, toneMapped: false })); scr.position.z = .095; phone.add(scr);
    var glow = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 5), new THREE.MeshBasicMaterial({ color: 0x3cc6c4, transparent: true, opacity: .12, depthWrite: false })); glow.position.z = -.12; phone.add(glow);
    phone.position.set(6.5, 4.4, 4.2); phone.rotation.y = -.55; scene.add(phone);
    buildProps();
    clock = new THREE.Clock();
    window.addEventListener('resize', function () { var w = host.clientWidth, h = host.clientHeight; R.setSize(w, h); cam.aspect = w / h; cam.updateProjectionMatrix(); });
    loop();
  }
  function resetSpark(a, q, rand) {
    var top = Math.random() < .55; a[q * 3] = (top ? 0 : 2.4) + (Math.random() - .5) * (top ? .9 : 1.6); a[q * 3 + 1] = top ? 7.6 + (rand ? Math.random() * 3 : 0) : 1.1 + (rand ? Math.random() * 1.5 : 0); a[q * 3 + 2] = (top ? 0 : 2.2) + (Math.random() - .5) * (top ? .9 : 1.2);
  }
  function grow(o) { o.userData.t = 0; o.visible = true; }
  function buildProps() {
    // other plants (sections, complex)
    var plants = new THREE.Group();
    var sinter = new THREE.Mesh(new THREE.BoxGeometry(7, 1.4, 1.6), mat(0x6c7888, .5, .5)); sinter.position.set(-9, .7, 7); plants.add(sinter);
    var strand = new THREE.Mesh(new THREE.BoxGeometry(6.6, .15, 1.4), mat(0xff7a1a, 0, .5, 0xff4d0d)); strand.position.set(-9, 1.47, 7); plants.add(strand);
    for (var b = 0; b < 5; b++) { var bat = new THREE.Mesh(new THREE.BoxGeometry(1.1, 2.2, 3.4), mat(0x4a5462, .4, .7)); bat.position.set(9 + b * 1.25, 1.1, 8); plants.add(bat); }
    var chim = new THREE.Mesh(new THREE.CylinderGeometry(.35, .5, 7, 16), mat(0x9aa6b4)); chim.position.set(15.5, 3.5, 8); plants.add(chim);
    var kiln = new THREE.Mesh(new THREE.CylinderGeometry(.9, .9, 6, 24), mat(0xc06a45, .4, .5)); kiln.rotation.z = Math.PI / 2 - .08; kiln.position.set(-4, 1.2, 11); plants.add(kiln);
    var pile = new THREE.Mesh(new THREE.ConeGeometry(3, 2, 24), mat(0x7a4a2a, .1, .95)); pile.position.set(4, 1, 13); plants.add(pile);
    plants.visible = false; scene.add(plants); props.plants = plants;
    // CO2 cloud
    var co2 = new THREE.Group(); for (var c = 0; c < 26; c++) { var s = new THREE.Mesh(new THREE.SphereGeometry(.5 + Math.random() * .7, 14, 10), new THREE.MeshStandardMaterial({ color: 0x9aa6b4, transparent: true, opacity: .32, roughness: 1, metalness: 0 })); s.position.set((Math.random() - .5) * 3, 8 + Math.random() * 5, (Math.random() - .5) * 3); s.userData.v = .3 + Math.random() * .5; co2.add(s); }
    co2.add(label('CO₂', 0x72c784, 0, 13.6, 0, 3)); co2.visible = false; scene.add(co2); props.co2 = co2;
    // laptop with lock
    var lap = new THREE.Group(); var base = new THREE.Mesh(new THREE.BoxGeometry(3.4, .12, 2.3), mat(0x9aa6b4, .7, .3)); lap.add(base);
    var lc = document.createElement('canvas'); lc.width = 512; lc.height = 320; var x = lc.getContext('2d'); var gr = x.createLinearGradient(0, 0, 0, 320); gr.addColorStop(0, '#0b1f38'); gr.addColorStop(1, '#123a33'); x.fillStyle = gr; x.fillRect(0, 0, 512, 320);
    x.fillStyle = '#ffd9a8'; x.font = '700 40px Arial Narrow, sans-serif'; x.textAlign = 'center'; x.fillText('IRON MAKING', 256, 70); x.font = '28px sans-serif'; x.fillStyle = '#c3d0dd'; x.fillText('Windows · Mac · PC', 256, 112);
    x.strokeStyle = '#ffb547'; x.lineWidth = 14; x.beginPath(); x.arc(256, 180, 34, Math.PI, 0); x.stroke(); x.fillStyle = '#ffb547'; x.fillRect(206, 180, 100, 80); x.fillStyle = '#0b1f38'; x.beginPath(); x.arc(256, 215, 12, 0, 7); x.fill();
    var lt = new THREE.CanvasTexture(lc); lt.encoding = THREE.sRGBEncoding;
    var lid = new THREE.Mesh(new THREE.BoxGeometry(3.4, 2.2, .1), mat(0x9aa6b4, .7, .3)); lid.position.set(0, 1.1, -1.12); lid.rotation.x = -.18; lap.add(lid);
    var ls = new THREE.Mesh(new THREE.PlaneGeometry(3.1, 1.95), new THREE.MeshBasicMaterial({ map: lt, toneMapped: false })); ls.position.set(0, 1.1, -1.06); ls.rotation.x = -.18; lap.add(ls);
    lap.position.set(-3.6, .08, 6.6); lap.rotation.y = .5; lap.visible = false; scene.add(lap); props.laptop = lap;
  }
  function label(text, color, x, y, z, s) {
    var c = document.createElement('canvas'); c.width = 256; c.height = 128; var g = c.getContext('2d'); g.font = '700 84px Arial, sans-serif'; g.textAlign = 'center'; g.fillStyle = '#' + color.toString(16).padStart(6, '0'); g.fillText(text, 128, 96);
    var t = new THREE.CanvasTexture(c); var sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false })); sp.position.set(x, y, z); sp.scale.set(s, s / 2, 1); return sp;
  }
  // camera spots per step
  var SPOT = {
    welcome: [[10, 6, 14], [1, 3.6, 0]], login: [[9.5, 5.2, 9.5], [5.4, 4.2, 3.6]], sections: [[0, 11, 22], [0, 2, 4]], inputs: [[9, 5, 8.5], [6, 4.3, 4]],
    results: [[8.6, 5.4, 9], [5.6, 4.3, 3.6]], bf: [[6.5, 4.5, 8], [0, 3.2, 0]], planner: [[5.2, 4.6, 6.2], [0, 3.4, 0]], complex: [[2, 15, 24], [0, 2, 6]],
    carbon: [[9, 9, 12], [0, 8, 0]], more: [[0.5, 4.5, 12.5], [-3.2, 1.2, 6.4]]
  };
  function goStep3d(s) {
    if (!R) return;
    var sp = SPOT[s.id] || SPOT.welcome; targetLook = new THREE.Vector3().fromArray(sp[1]);
    var asp = cam.aspect || 1, far = asp < 1 ? Math.min(1.9, .95 / asp) : 1;   // narrow (portrait) screens: step back so the scene fits
    targetCam = new THREE.Vector3().fromArray(sp[0]).sub(targetLook).multiplyScalar(far).add(targetLook);
    layers.visible = s.id === 'planner'; shellMat.opacity = s.id === 'planner' ? .28 : 1; shellMat.depthWrite = s.id !== 'planner';
    props.plants.visible = s.id === 'sections' || s.id === 'complex'; if (props.plants.visible) grow(props.plants);
    props.co2.visible = s.id === 'carbon'; props.laptop.visible = s.id === 'more'; if (props.laptop.visible) grow(props.laptop);
    drawScreen(s);
  }
  // the phone screen: a small mock of the page for the step
  function drawScreen(s) {
    if (!screenCanvas) return;
    var x = screenCanvas.getContext('2d'), W = 512, H = 1024;
    var g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#0b1f38'); g.addColorStop(1, '#040c17'); x.fillStyle = g; x.fillRect(0, 0, W, H);
    function rr(px, py, w, h, r, fill, stroke) { x.beginPath(); x.moveTo(px + r, py); x.arcTo(px + w, py, px + w, py + h, r); x.arcTo(px + w, py + h, px, py + h, r); x.arcTo(px, py + h, px, py, r); x.arcTo(px, py, px + w, py, r); x.closePath(); if (fill) { x.fillStyle = fill; x.fill(); } if (stroke) { x.strokeStyle = stroke; x.lineWidth = 3; x.stroke(); } }
    function txt(t, px, py, size, col, bold, align) { x.fillStyle = col; x.font = (bold ? '700 ' : '400 ') + size + 'px ' + (bold ? 'Arial Narrow, Arial, sans-serif' : 'Arial, sans-serif'); x.textAlign = align || 'left'; x.fillText(t, px, py); }
    var mg = x.createLinearGradient(0, 0, W, 0); mg.addColorStop(0, '#ff3d00'); mg.addColorStop(.5, '#ff7a1a'); mg.addColorStop(1, '#ffc23d');
    txt('IRON', 120, 92, 66, '#ffffff', true); txt('MAKING', 268, 92, 66, '#ff8a2a', true);
    txt('RAW MATERIAL TO LIQUID PIG IRON', W / 2, 128, 20, '#9fe6e3', true, 'center');
    var y = 160, id = s.id;
    function card(title, sub, col, hi) { rr(26, y, W - 52, 104, 18, hi ? 'rgba(255,122,26,.22)' : 'rgba(255,255,255,.06)', hi ? '#ff7a1a' : '#1d3553'); x.fillStyle = col; x.fillRect(26, y + 14, 8, 76); txt(title, 52, y + 46, 30, '#ffffff', true); txt(sub, 52, y + 82, 20, '#c3d0dd'); y += 120; }
    if (id === 'welcome') { card('How to use the app', '3D tour · voice guide', '#19b3b1', true); card('Carbon footprint', '1.88 tCO2/t pig iron', '#72c784'); card('Learning module', '6 plants · exams', '#8f7bff'); card('Go in Detail', 'BF · Sinter · Coke · Pellet', '#ff5a2a'); card('Iron complex project', 'Plan · build · repair', '#8fd3ff'); }
    else if (id === 'login') { txt('SIGN IN', W / 2, 250, 44, '#ffffff', true, 'center'); rr(60, 300, W - 120, 74, 14, 'rgba(255,255,255,.08)', '#1d3553'); txt('Login ID', 84, 348, 26, '#93a6ba'); rr(60, 394, W - 120, 74, 14, 'rgba(255,255,255,.08)', '#1d3553'); txt('Password', 84, 442, 26, '#93a6ba'); rr(60, 500, W - 120, 80, 16, mg); txt('Sign in', W / 2, 552, 32, '#2a1200', true, 'center'); txt('✓ Saved on this phone', W / 2, 660, 26, '#72c784', false, 'center'); txt('☁ Backup in online storage', W / 2, 706, 26, '#8fd3ff', false, 'center'); }
    else if (id === 'sections' || id === 'bf') { txt('GO IN DETAIL', 30, 196, 32, '#ffffff', true); y = 220; var cs = [['Blast furnace', '#ff5a2a'], ['Sinter plant', '#ffb02e'], ['Coke oven', '#9fa8b8'], ['Pellet plant', '#c06a45']];
      cs.forEach(function (c, i) { var cx = 26 + (i % 2) * 236, cy = y + Math.floor(i / 2) * 230; rr(cx, cy, 224, 210, 18, (id === 'bf' && i === 0) || (id === 'sections') ? 'rgba(255,255,255,.08)' : 'rgba(255,255,255,.03)', (id === 'bf' && i === 0) ? '#ff7a1a' : '#1d3553'); x.fillStyle = c[1]; x.fillRect(cx, cy, 224, 8); txt(c[0], cx + 16, cy + 160, 28, '#ffffff', true); txt('Open ›', cx + 16, cy + 194, 20, c[1]); });
      y = 700; if (id === 'bf') { ['3D distribution', 'Furnace inside 3D', 'Hearth liquid', 'Tuyere watch · Taphole'].forEach(function (t) { rr(26, y, W - 52, 60, 12, 'rgba(255,122,26,.12)', '#ff7a1a'); txt(t, 46, y + 40, 24, '#ffd9a8'); y += 72; }); } }
    else if (id === 'inputs') { txt('INPUTS', 30, 196, 34, '#ffffff', true); y = 220; [['Working volume', '750', true], ['Productivity', '4.1', false], ['Coke rate', '', false], ['PCI rate', '120', true]].forEach(function (f) { txt(f[0], 30, y + 26, 22, '#c3d0dd'); rr(30, y + 38, W - 60, 62, 12, 'rgba(4,12,23,.8)', f[2] ? '#ffb547' : '#1d3553'); txt(f[1] || '450 (default)', 50, y + 80, 26, f[1] ? '#ffffff' : '#5f7186'); y += 120; });
      rr(30, y + 10, W - 60, 80, 16, 'rgba(25,179,177,.18)', '#19b3b1'); txt('⇪ Import Excel · PDF · Word', W / 2, y + 62, 26, '#9fe6e3', true, 'center'); }
    else if (id === 'results') { txt('RESULTS', 30, 196, 34, '#ffffff', true); y = 220; [['Fuel rate', '540 kg/t', '#72c784'], ['Hot metal Si', '0.62 %', '#ffb547'], ['Top gas T', '410 °C', '#ff5a4a']].forEach(function (r) { rr(26, y, W - 52, 90, 16, 'rgba(255,255,255,.06)', r[2]); txt(r[0], 50, y + 56, 28, '#c3d0dd'); txt(r[1], W - 50, y + 58, 34, r[2], true, 'right'); y += 108; });
      ['Share', 'Download', 'Print'].forEach(function (b, i) { rr(26 + i * 156, y + 20, 144, 74, 14, i === 0 ? mg : 'rgba(255,255,255,.08)', '#1d3553'); txt(b, 98 + i * 156, y + 68, 26, i === 0 ? '#2a1200' : '#ffffff', true, 'center'); }); }
    else if (id === 'planner') { txt('BLOW-IN PLANNER', 30, 196, 34, '#ffffff', true); y = 216; ['1 Start type', '2 Inputs', '3 Recipe & filling', '4 Distribution', '5 Timeline', '6 Tapping', '7 Prediction & advice', '8 Checklist'].forEach(function (t, i) { rr(26, y, W - 52, 70, 14, i === 6 ? 'rgba(255,122,26,.25)' : 'rgba(255,255,255,.05)', i === 6 ? '#ff7a1a' : '#1d3553'); txt(t, 48, y + 46, 26, i === 6 ? '#ffd9a8' : '#ffffff', i === 6); y += 82; }); }
    else if (id === 'complex') { txt('IRON COMPLEX', 30, 196, 34, '#ffffff', true); y = 220; [['0.93 MTPA', 'Hot metal capacity'], ['Rs 3,673 cr', 'Project cost'], ['287 acres', 'Land'], ['1,096', 'Manpower']].forEach(function (k, i) { var cx = 26 + (i % 2) * 236, cy = y + Math.floor(i / 2) * 130; rr(cx, cy, 224, 116, 16, 'rgba(255,255,255,.92)'); txt(k[0], cx + 16, cy + 54, 32, '#1F3864', true); txt(k[1], cx + 16, cy + 92, 20, '#64748b'); });
      y = 500; ['Blast furnace · repair', 'Sinter · Pellet · Coke', '3D plant layout', 'Project schedule'].forEach(function (t) { rr(26, y, W - 52, 70, 14, 'rgba(255,255,255,.08)', '#8fd3ff'); txt(t, 48, y + 46, 26, '#cfeaff'); y += 82; }); }
    else if (id === 'carbon') { txt('CARBON FOOTPRINT', 30, 196, 34, '#ffffff', true); rr(26, 230, W - 52, 200, 20, 'rgba(25,179,177,.14)', '#19b3b1'); txt('1.88', 60, 370, 110, '#ffffff', true); txt('tCO2 / t pig iron', 300, 370, 22, '#93a6ba'); y = 460; [['Blast furnace', '1.585'], ['Coke oven', '0.220'], ['Sinter plant', '0.233'], ['Pellet plant', '0.128']].forEach(function (r) { rr(26, y, W - 52, 70, 14, 'rgba(255,255,255,.05)', '#1d3553'); txt(r[0], 48, y + 46, 26, '#c3d0dd'); txt(r[1], W - 48, y + 46, 28, '#ffffff', true, 'right'); y += 82; }); }
    else if (id === 'more') { txt('MORE', 30, 196, 34, '#ffffff', true); y = 220; card('App for computer', '🔒 Request access', '#19b3b1', true); card('Updates', 'Free · reminder every hour', '#72c784'); card('Feedback', 'Suggestions from any page', '#ffb547'); card('Admin', 'Online storage', '#8fd3ff'); }
    rr(26, H - 96, W - 52, 64, 32, 'rgba(255,255,255,.06)', '#1d3553'); txt('Step ' + (cur + 1) + ' of ' + STEPS.length, W / 2, H - 54, 24, '#93a6ba', false, 'center');
    screenTex.needsUpdate = true;
  }
  function loop() {
    requestAnimationFrame(loop);
    if (document.hidden) return;
    var dt = Math.min(.05, clock.getDelta()), t = clock.elapsedTime;
    if (targetCam) { cam.position.lerp(targetCam, 1 - Math.pow(.02, dt)); look.lerp(targetLook, 1 - Math.pow(.02, dt)); if (cam.position.distanceTo(targetCam) < .05) targetCam = null; }
    else if (!ctl || !ctl.state || ctl.state === -1) { var a = dt * .05; var x = cam.position.x - look.x, z = cam.position.z - look.z; cam.position.x = look.x + x * Math.cos(a) - z * Math.sin(a); cam.position.z = look.z + x * Math.sin(a) + z * Math.cos(a); }
    if (ctl) { ctl.target.copy(look); ctl.update(); } else cam.lookAt(look);
    phone.position.y = 4.4 + Math.sin(t * 1.3) * .18; phone.rotation.y = -.55 + Math.sin(t * .6) * .08;
    var pa = sparks.geometry.attributes.position.array;
    for (var q = 0; q < sparkV.length; q++) { pa[q * 3 + 1] += sparkV[q] * dt * (pa[q * 3 + 1] > 6 ? 1.6 : .9); pa[q * 3] += (Math.random() - .5) * dt * .4; if (pa[q * 3 + 1] > (pa[q * 3 + 1] > 6 ? 11.5 : 3.2)) resetSpark(pa, q, false); }
    sparks.geometry.attributes.position.needsUpdate = true;
    if (props.co2.visible) props.co2.children.forEach(function (s) { if (s.isMesh) { s.position.y += s.userData.v * dt; if (s.position.y > 14) s.position.y = 8; } });
    [props.plants, props.laptop].forEach(function (o) { if (o.visible && o.userData.t != null && o.userData.t < 1) { o.userData.t = Math.min(1, o.userData.t + dt * 1.6); var e = 1 - Math.pow(1 - o.userData.t, 3); o.scale.setScalar(.01 + e * .99); } });
    R.render(scene, cam);
  }

  /* ---------------- narration & player */
  function words(text) { return text.split(/(\s+)/).map(function (w) { return /\s+/.test(w) ? w : '<span class="w">' + w.replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; }) + '</span>'; }).join(''); }
  function setStep(i, autoplay) {
    cur = (i + STEPS.length) % STEPS.length; var s = STEPS[cur];
    $('stepn').textContent = 'Step ' + (cur + 1) + ' of ' + STEPS.length; $('ttl').textContent = s.title; $('say').innerHTML = words(s.say);
    var cta = $('cta'); if (s.href) { cta.hidden = false; cta.href = s.href; cta.textContent = (s.cta || 'Open') + ' ›'; } else cta.hidden = true;
    Array.prototype.forEach.call($('dots').children, function (d, k) { d.className = k === cur ? 'on' : k < cur ? 'done' : ''; });
    goStep3d(s);
    stopAudio();
    if (autoplay !== false && started) play();
  }
  function src() { return 'audio/howto-' + voice + String(cur + 1).padStart(2, '0') + '.mp3'; }
  function stopAudio() { try { aud.pause(); } catch (e) { } clearInterval(timer); timer = null; if (window.speechSynthesis) try { speechSynthesis.cancel(); } catch (e) { } $('prog').style.width = '0'; }
  function play() {
    playing = true; $('play').textContent = 'Pause';
    var tok = ++playTok; fallbackT0 = 0;
    aud.src = src();
    var p = aud.play(); if (p && p.catch) p.catch(function (er) { if (tok === playTok && !(er && er.name === 'AbortError')) fallback(); });
    clearInterval(timer); timer = setInterval(tick, 200);
  }
  function fallback() {   // no audio file / blocked: device voice (en-IN) if present, else a reading timer
    var s = STEPS[cur]; fallbackT0 = Date.now(); fallbackDur = (voice === 'm' ? s.dm : s.df) * 1000 || s.say.length * 70;
    if (window.speechSynthesis && window.SpeechSynthesisUtterance) {
      try { var u = new SpeechSynthesisUtterance(s.say); var vs = speechSynthesis.getVoices().filter(function (v) { return /en[-_]IN/i.test(v.lang); }); if (vs.length) u.voice = vs[0]; u.lang = 'en-IN'; u.rate = .95; u.onend = function () { if (playing) nextLater(); }; speechSynthesis.speak(u); } catch (e) { }
    }
    aud.removeAttribute('src');
  }
  function tick() {
    var s = STEPS[cur], d = aud.duration && isFinite(aud.duration) ? aud.duration : 0, t = aud.currentTime || 0, frac;
    if (d) frac = t / d; else if (fallbackT0) { frac = (Date.now() - fallbackT0) / fallbackDur; if (frac >= 1 && playing && !(window.speechSynthesis && speechSynthesis.speaking)) { fallbackT0 = 0; nextLater(); } } else frac = 0;
    frac = Math.max(0, Math.min(1, frac || 0)); $('prog').style.width = (frac * 100).toFixed(1) + '%';
    var ws = $('say').querySelectorAll('.w'), k = Math.floor(frac * ws.length * 1.02);
    for (var n = 0; n < ws.length; n++) ws[n].classList.toggle('on', n === Math.min(ws.length - 1, k));
  }
  var nt = null; function nextLater() { clearTimeout(nt); nt = setTimeout(function () { if (!playing) return; if (cur < STEPS.length - 1) setStep(cur + 1); else { playing = false; $('play').textContent = 'Replay'; } }, 900); }
  aud.addEventListener('ended', function () { if (playing) nextLater(); });
  aud.addEventListener('error', function () { if (playing && aud.getAttribute('src') && aud.error) fallback(); });
  $('play').addEventListener('click', function () {
    if ($('play').textContent === 'Replay') { setStep(0); return; }
    if (playing) { playing = false; this.textContent = 'Play'; try { aud.pause(); } catch (e) { } if (window.speechSynthesis) try { speechSynthesis.pause(); } catch (e) { } }
    else { playing = true; this.textContent = 'Pause'; if (aud.getAttribute('src') && aud.currentTime > 0 && !aud.ended) aud.play().catch(fallback); else play(); }
  });
  $('next').addEventListener('click', function () { setStep(cur + 1); });
  $('prev').addEventListener('click', function () { setStep(cur - 1); });
  $('dots').innerHTML = STEPS.map(function (s, i) { return '<span title="' + s.title.replace(/"/g, '') + '" data-i="' + i + '"></span>'; }).join('');
  $('dots').addEventListener('click', function (e) { var d = e.target.closest('span'); if (d) setStep(+d.dataset.i); });
  Array.prototype.forEach.call($('voice').children, function (b) { b.classList.toggle('on', b.dataset.v === voice); });
  $('voice').addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; voice = b.dataset.v; try { localStorage.setItem('im.howto.voice', voice); } catch (x) { } Array.prototype.forEach.call(this.children, function (c) { c.classList.toggle('on', c === b); }); if (started) setStep(cur); });
  $('go').addEventListener('click', function () { started = true; $('start').remove(); setStep(0); });
  $('back').addEventListener('click', function () { stopAudio(); if (history.length > 1) history.back(); else location.href = 'index.html'; });
  document.addEventListener('visibilitychange', function () { if (document.hidden && playing) { playing = false; $('play').textContent = 'Play'; try { aud.pause(); } catch (e) { } } });
  init3d();
  setStep(0, false);
})();
