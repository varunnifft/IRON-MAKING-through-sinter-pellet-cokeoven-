/* BF Blow-in / Blow-down planner — live 3D scenes for abnormal & emergency situations (three.js r128).
   The furnace is built from the planner's geometry; the scenario steps drive a state that the scene eases towards. */
(function () {
  'use strict';
  var T = window.THREE, R = { ready: false };
  var renderer, scene, camera, controls, clock, raf = 0, running = false, canvas, idleT = 0;
  var furn, burden = null, builtSl = -1, S, sc = 1, Y0 = 10, geo;
  var NUM = ['blast', 'sl', 'topT', 'h2', 'o2', 'spray', 'n2', 'leak', 'bubbles', 'hot', 'shellSpray', 'channel', 'air', 'bagHot', 'flame', 'back', 'co', 'dark', 'steam'];
  var cur = {}, tgt = {}, disc = { route: 'gcp', hang: 0, tap: 0, down: 0 }, kind = 'sit', shake = 0, snap = false;
  var o = {};   // scene objects

  function col(h) { return new T.Color(h); }
  function mat(c, opt) { return new T.MeshStandardMaterial(Object.assign({ color: c, metalness: .35, roughness: .55 }, opt || {})); }
  function y(z) { return (geo.d.d7 - z) * sc; }
  function rad(dm) { return dm / 2 * sc; }

  function label(text, colr) {
    var c = document.createElement('canvas'), x = c.getContext('2d'); c.width = 256; c.height = 64;
    x.font = '600 30px "IBM Plex Sans", system-ui, sans-serif'; var w = x.measureText(text).width + 28;
    x.fillStyle = 'rgba(4,12,23,.82)'; x.strokeStyle = colr || '#3cc6c4'; x.lineWidth = 3;
    x.beginPath(); if (x.roundRect) x.roundRect(2, 6, w, 52, 14); else x.rect(2, 6, w, 52); x.fill(); x.stroke();
    x.fillStyle = '#eef3f8'; x.fillText(text, 16, 43);
    var t = new T.CanvasTexture(c); t.minFilter = T.LinearFilter;
    var s = new T.Sprite(new T.SpriteMaterial({ map: t, depthTest: false, transparent: true }));
    s.scale.set(1.6, .4, 1); s.center.set(0, .5); s.renderOrder = 10; return s;
  }

  /* ---------- particle helper: a pool drawn up to `amount` × max */
  function pool(n, color, size, additive) {
    var g = new T.BufferGeometry(), pos = new Float32Array(n * 3), cl = new Float32Array(n * 3);
    g.setAttribute('position', new T.BufferAttribute(pos, 3)); g.setAttribute('color', new T.BufferAttribute(cl, 3));
    var m = new T.PointsMaterial({ size: size, vertexColors: true, transparent: true, opacity: .9, depthWrite: false, blending: additive ? T.AdditiveBlending : T.NormalBlending, sizeAttenuation: true });
    var p = new T.Points(g, m); p.frustumCulled = false;
    var c = col(color); for (var i = 0; i < n; i++) { cl[i * 3] = c.r; cl[i * 3 + 1] = c.g; cl[i * 3 + 2] = c.b; }
    var P = { pts: p, n: n, pos: pos, cl: cl, v: new Float32Array(n * 3), life: new Float32Array(n), base: c };
    for (var k = 0; k < n; k++) P.life[k] = -1;
    g.setDrawRange(0, 0); return P;
  }
  function flush(P, count) { P.pts.geometry.setDrawRange(0, Math.max(0, Math.min(P.n, count | 0))); P.pts.geometry.attributes.position.needsUpdate = true; P.pts.geometry.attributes.color.needsUpdate = true; }

  /* ---------- build the furnace from geometry */
  function build() {
    if (furn) { scene.remove(furn); furn.traverse(function (m) { if (m.geometry) m.geometry.dispose(); }); }
    furn = new T.Group(); scene.add(furn); burden = null; builtSl = -1;
    var g = geo.g, d = geo.d; sc = 10 / d.d7; Y0 = y(0);
    var wall = .14, rt = rad(g.dt) + wall, rb = rad(g.db) + wall, rh = rad(g.dh) + wall;
    o.rh = rad(g.dh); o.rb = rad(g.db); o.rt = rad(g.dt);
    var prof = [[rh, 0], [rh, y(d.d4)], [rb, y(d.d3)], [rb, y(d.d2)], [rt, y(d.d1)], [rt, Y0], [rt * .78, Y0 + .45], [rt * .36, Y0 + .8], [.05, Y0 + .86]].map(function (p) { return new T.Vector2(p[0], p[1]); });
    var lg = new T.LatheGeometry(prof, 64);
    furn.add(new T.Mesh(lg, mat(0x9fb2c6, { metalness: .7, roughness: .35, transparent: true, opacity: .2, side: T.DoubleSide, depthWrite: false })));
    var wire = new T.LineSegments(new T.EdgesGeometry(new T.LatheGeometry(prof, 24), 1), new T.LineBasicMaterial({ color: 0x4d6a88, transparent: true, opacity: .35 }));
    furn.add(wire);
    // zone rings
    function ring(z, r, c, op) { var cg = new T.BufferGeometry().setFromPoints(new T.EllipseCurve(0, 0, r, r, 0, 2 * Math.PI).getPoints(72)); var l = new T.LineLoop(cg, new T.LineBasicMaterial({ color: c, transparent: true, opacity: op })); l.rotation.x = Math.PI / 2; l.position.y = y(z); furn.add(l); return l; }
    ring(d.d2, rb + .03, 0xffb547, .9); ring(d.d5, rh + .03, 0xff5a4a, .9);
    // hearth liquid
    var lh = Math.max(.25, y(d.d6) - .05);
    o.liquid = new T.Mesh(new T.CylinderGeometry(o.rh * .97, o.rh * .97, lh, 48), mat(0xff6a00, { emissive: 0xff4500, emissiveIntensity: 1.2, roughness: .3 }));
    o.liquid.position.y = lh / 2; furn.add(o.liquid); o.liqTop = lh;
    o.hearthLight = new T.PointLight(0xff6a00, 1.2, 8); o.hearthLight.position.set(0, lh + .4, 0); furn.add(o.hearthLight);
    // tuyeres + flames
    var nt = Math.min(24, Math.max(8, g.ntu)), ty = y(d.d5); o.tuy = []; o.ty = ty; o.nt = nt;
    var bp = new T.CylinderGeometry(.06, .06, .7, 10), fl = new T.ConeGeometry(.13, .7, 12);
    for (var i = 0; i < nt; i++) {
      var a = i / nt * Math.PI * 2, ca = Math.cos(a), sa = Math.sin(a);
      var pipe = new T.Mesh(bp, mat(0x7a8a9a, { metalness: .8 })); pipe.position.set(ca * (rh + .3), ty, sa * (rh + .3)); pipe.rotation.z = Math.PI / 2; pipe.rotation.y = -a; furn.add(pipe);
      var f = new T.Mesh(fl, new T.MeshBasicMaterial({ color: 0xffb030, transparent: true, opacity: .85, blending: T.AdditiveBlending, depthWrite: false }));
      f.position.set(ca * (o.rh - .25), ty, sa * (o.rh - .25)); f.rotation.z = Math.PI / 2; f.rotation.y = -a + Math.PI; furn.add(f);
      o.tuy.push(f);
    }
    var bustle = new T.Mesh(new T.TorusGeometry(rh + .8, .13, 10, 64), mat(0x5c6b7a, { metalness: .7 })); bustle.rotation.x = Math.PI / 2; bustle.position.y = ty + .95; furn.add(bustle);
    // tuyere platform
    var plat = new T.Mesh(new T.RingGeometry(rh + .2, rh + 2.4, 64), mat(0x2a3b52, { side: T.DoubleSide, transparent: true, opacity: .55 })); plat.rotation.x = -Math.PI / 2; plat.position.y = ty - .45; furn.add(plat); o.platY = ty - .45;
    // top: uptakes, bleeder, downcomer, dust catcher, GCP
    var up = Y0 + .8;
    var bleed = new T.Mesh(new T.CylinderGeometry(.12, .12, 1.8, 12), mat(0x8a99a8, { metalness: .7 })); bleed.position.set(0, up + .9, 0); furn.add(bleed); o.bleedTop = new T.Vector3(0, up + 1.85, 0);
    var cap = new T.Mesh(new T.CylinderGeometry(.2, .2, .1, 16), mat(0xffb547, { emissive: 0x332000 })); cap.position.copy(o.bleedTop); furn.add(cap); o.bleedCap = cap;
    var dcx = Math.max(3.2, rb + 2.2);
    var path = new T.CatmullRomCurve3([new T.Vector3(.2, up + .3, 0), new T.Vector3(1.2, up + 1.1, 0), new T.Vector3(dcx - .6, up + .6, 0), new T.Vector3(dcx, up - 1.2, 0), new T.Vector3(dcx, Y0 - 2.2, 0)]);
    furn.add(new T.Mesh(new T.TubeGeometry(path, 40, .16, 10), mat(0x7a8a9a, { metalness: .7 }))); o.gasPath = path;
    var dc = new T.Mesh(new T.CylinderGeometry(.7, .7, 1.6, 24), mat(0x6b7b8c, { metalness: .6 })); dc.position.set(dcx, Y0 - 3, 0); furn.add(dc);
    var dcc = new T.Mesh(new T.ConeGeometry(.7, .9, 24), mat(0x6b7b8c, { metalness: .6 })); dcc.rotation.x = Math.PI; dcc.position.set(dcx, Y0 - 4.25, 0); furn.add(dcc);
    var gcpM = mat(0x55687d, { metalness: .5, emissive: 0x000000 });
    o.gcp = new T.Mesh(new T.BoxGeometry(1.5, 2.3, 1.5), gcpM); o.gcp.position.set(dcx + 2.1, Y0 - 3.3, 0); furn.add(o.gcp);
    var link = new T.Mesh(new T.CylinderGeometry(.12, .12, 1.4, 10), mat(0x7a8a9a)); link.rotation.z = Math.PI / 2; link.position.set(dcx + 1, Y0 - 2.6, 0); furn.add(link);
    // taphole + runner
    var th = y(d.d6); o.tapPos = new T.Vector3(0, th, rh + .05); o.tapY = th;
    var tap = new T.Mesh(new T.CylinderGeometry(.11, .11, .4, 12), mat(0x3a2a22)); tap.rotation.x = Math.PI / 2; tap.position.set(0, th, rh + .15); furn.add(tap);
    var run = new T.Mesh(new T.BoxGeometry(.4, .12, 2.6), mat(0x4a3a30)); run.position.set(0, th - .55, rh + 1.5); run.rotation.x = .12; furn.add(run);
    o.plug = new T.Mesh(new T.SphereGeometry(.16, 12, 10), mat(0x777777, { roughness: .9 })); o.plug.position.set(0, th, rh + .3); furn.add(o.plug);
    // hot spot on the shell (hearth level, -x side)
    o.hotMat = new T.MeshBasicMaterial({ color: 0xff2a1a, transparent: true, opacity: 0, blending: T.AdditiveBlending, depthWrite: false });
    o.hotSpot = new T.Mesh(new T.SphereGeometry(.6, 20, 14), o.hotMat); o.hotSpot.scale.set(.25, 1, 1); o.hotSpot.position.set(-(rh + .02), y(d.d5) - .9, 0); furn.add(o.hotSpot);
    o.hotLight = new T.PointLight(0xff2a1a, 0, 4); o.hotLight.position.set(-(rh + .6), y(d.d5) - .9, 0); furn.add(o.hotLight);
    o.topLight = new T.PointLight(0xff3d00, 0, 6); o.topLight.position.set(0, Y0 - .3, 0); furn.add(o.topLight);
    // people on the tuyere platform
    o.person = person(0xffb547); o.person.position.set(rh + 1.4, o.platY, .6); furn.add(o.person);
    o.rescuer = person(0x3cc6c4); o.rescuer.visible = false; furn.add(o.rescuer);
    // labels
    var L = [['Top / throat', 0, Y0 + 1, rt + .3, '#3cc6c4'], ['Bleeder', .3, up + 1.9, 0, '#ffb547'], ['GCP', dcx + 1.4, Y0 - 1.9, 0, '#8fd3ff'], ['Tuyeres', 0, ty + .55, rh + .9, '#ff7a1a'],
      ['Taphole', .3, th - .2, rh + 1.2, '#ff5a4a'], ['Partial target', 0, y(d.d2), rb + .25, '#ffb547'], ['Deep target', 0, y(d.d5) + .25, -rh - 2.1, '#ff5a4a']];
    o.labels = L.map(function (l) { var s = label(l[0], l[4]); s.position.set(l[1] + (l[3] > 0 ? 0 : 0), l[2], l[3]); if (l[3] === 0) s.position.x = l[1]; furn.add(s); return s; });
    // particle systems
    o.gas = pool(700, '#ffb547', .09, true); furn.add(o.gas.pts);
    o.spray = pool(260, '#5fb8ff', .07, false); furn.add(o.spray.pts);
    o.n2 = pool(260, '#7ff3ff', .07, true); furn.add(o.n2.pts);
    o.leak = pool(120, '#2e8bff', .09, false); furn.add(o.leak.pts);
    o.bub = pool(160, '#ffffff', .08, true); furn.add(o.bub.pts);
    o.plume = pool(300, '#ffc23d', .22, true); furn.add(o.plume.pts);
    o.flow = pool(120, '#8fd3ff', .1, true); furn.add(o.flow.pts);
    o.jet = pool(220, '#ff8a1a', .11, true); furn.add(o.jet.pts);
    o.air = pool(160, '#d8f3ff', .08, true); furn.add(o.air.pts);
    o.co = pool(220, '#5fd38a', .5, false); o.co.pts.material.opacity = .28; furn.add(o.co.pts);
    o.steam = pool(200, '#e8f0f8', .3, false); o.steam.pts.material.opacity = .45; furn.add(o.steam.pts);
    o.shw = pool(160, '#5fb8ff', .07, false); furn.add(o.shw.pts);
    o.chan = pool(200, '#fff27a', .12, true); furn.add(o.chan.pts);
    // camera framing
    controls.target.set(1.6, 5.6, 0); camera.position.set(13, 10.5, 19.5); controls.update();
  }

  function person(c) {
    var g = new T.Group();
    var body = new T.Mesh(new T.CylinderGeometry(.11, .13, .55, 10), mat(c, { roughness: .8 })); body.position.y = .5; g.add(body);
    var head = new T.Mesh(new T.SphereGeometry(.1, 12, 10), mat(0xf0c8a0, { roughness: .8 })); head.position.y = .9; g.add(head);
    var hat = new T.Mesh(new T.SphereGeometry(.11, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat(0xffffff)); hat.position.y = .93; g.add(hat);
    var legs = new T.Mesh(new T.CylinderGeometry(.1, .08, .3, 8), mat(0x223344)); legs.position.y = .15; g.add(legs);
    return g;
  }

  /* ---------- burden column up to the stockline (rebuilt when it moves) */
  function setBurden(sl) {
    var d = geo.d, zs = Math.max(0, Math.min(d.d5, sl * d.d5)), yTop = y(zs), y0 = o.liqTop;
    if (burden) { furn.remove(burden); burden.geometry.dispose(); }
    var pts = [new T.Vector2(.001, y0)], step = .1;
    for (var yy = y0; yy < yTop; yy += step) { var z = d.d7 - yy / sc; pts.push(new T.Vector2(rad(geo.diam(z)) * .96, yy)); }
    pts.push(new T.Vector2(rad(geo.diam(zs)) * .96, yTop)); pts.push(new T.Vector2(.001, yTop));
    var lg = new T.LatheGeometry(pts, 48), p = lg.attributes.position, cl = new Float32Array(p.count * 3);
    var coke = col(0x2c2d33), ore = col(0x8a5032), hot = col(0xff7a1a), c = new T.Color();
    var cz = y(d.d3);   // below bosh top: softening / glowing
    for (var i = 0; i < p.count; i++) {
      var yy2 = p.getY(i), layer = Math.floor((yTop - yy2) / .32) % 2;
      c.copy(layer ? ore : coke);
      var hf = Math.max(0, Math.min(1, (cz - yy2) / Math.max(.5, cz - y0)));
      c.lerp(hot, hf * .75);
      if (yy2 > yTop - .02) c.lerp(col(0x5a4a40), .3);
      cl[i * 3] = c.r; cl[i * 3 + 1] = c.g; cl[i * 3 + 2] = c.b;
    }
    lg.setAttribute('color', new T.BufferAttribute(cl, 3));
    burden = new T.Mesh(lg, new T.MeshStandardMaterial({ vertexColors: true, roughness: .9, metalness: 0, emissive: 0x2a0d00, emissiveIntensity: .5 }));
    furn.add(burden); builtSl = sl; o.slY = yTop; o.slR = rad(geo.diam(zs)) * .96;
  }

  /* ---------- per-frame particle updates */
  function rnd(a, b) { return a + Math.random() * (b - a); }
  function tcol(t) { var a = col('#4cc3ff'), b = col('#ffb547'), c = col('#ff3d00'); var k = Math.max(0, Math.min(1, (t - 120) / 380)); return k < .5 ? a.lerp(b, k * 2) : b.lerp(c, (k - .5) * 2); }

  function upGas(dt) {
    var P = o.gas, n = Math.round(P.n * Math.min(1, cur.blast * 1.25 + cur.back * .8)), sp = .8 + cur.blast * 3.2, topC = tcol(cur.topT), hotC = col('#ffcf6a');
    for (var i = 0; i < n; i++) {
      var k = i * 3;
      if (P.life[i] < 0) {
        if (cur.back > .3) { var a = Math.random() * 6.283, r = rnd(0, o.rt * .8); P.pos[k] = Math.cos(a) * r; P.pos[k + 1] = rnd(o.slY, Y0); P.pos[k + 2] = Math.sin(a) * r; }
        else { var a2 = Math.random() * 6.283, r2 = rnd(o.rh * .3, o.rh * .9); P.pos[k] = Math.cos(a2) * r2; P.pos[k + 1] = o.ty + rnd(-.1, .3); P.pos[k + 2] = Math.sin(a2) * r2; }
        P.life[i] = rnd(.5, 1);
      }
      var yy = P.pos[k + 1];
      if (cur.back > .3) {   // gas flowing back down and out of the tuyeres
        P.pos[k + 1] -= dt * 1.4; var rr = Math.hypot(P.pos[k], P.pos[k + 2]) || 1;
        if (P.pos[k + 1] < o.ty + .2) { P.pos[k] += P.pos[k] / rr * dt * 2.5; P.pos[k + 2] += P.pos[k + 2] / rr * dt * 2.5; }
        if (P.pos[k + 1] < o.ty - .5 || rr > o.rh + 1.5) P.life[i] = -1;
        P.cl[k] = .55; P.cl[k + 1] = .65; P.cl[k + 2] = .8; continue;
      }
      var inB = yy < o.slY, v = inB ? sp * .45 : sp * 1.4;
      P.pos[k + 1] += v * dt;
      var zr = Math.max(.2, rad(geo.diam(geo.d.d7 - P.pos[k + 1] / sc)) * .9), rr2 = Math.hypot(P.pos[k], P.pos[k + 2]);
      if (rr2 > zr) { P.pos[k] *= zr / rr2; P.pos[k + 2] *= zr / rr2; }
      if (!inB) { P.pos[k] *= 1 - dt * .9; P.pos[k + 2] *= 1 - dt * .9; }
      var cc = inB ? hotC : topC; P.cl[k] = cc.r; P.cl[k + 1] = cc.g; P.cl[k + 2] = cc.b;
      if (P.pos[k + 1] > Y0 + .7) P.life[i] = -1;
    }
    flush(P, n);
  }
  function fall(P, amt, spawn, floorY, g, colr) {
    var n = Math.round(P.n * amt);
    for (var i = 0; i < n; i++) {
      var k = i * 3;
      if (P.life[i] < 0) { spawn(P, k); P.life[i] = 1; }
      P.v[k + 1] -= g * .016; P.pos[k] += P.v[k] * .016; P.pos[k + 1] += P.v[k + 1] * .016; P.pos[k + 2] += P.v[k + 2] * .016;
      if (P.pos[k + 1] < floorY(P, k)) P.life[i] = -1;
    }
    flush(P, n);
  }
  function rise(P, amt, spawn, dt, speed, topY, spread) {
    var n = Math.round(P.n * amt);
    for (var i = 0; i < n; i++) {
      var k = i * 3;
      if (P.life[i] < 0) { spawn(P, k); P.life[i] = 1; }
      P.pos[k + 1] += speed * dt * rnd(.6, 1.2); P.pos[k] += rnd(-1, 1) * spread * dt; P.pos[k + 2] += rnd(-1, 1) * spread * dt;
      P.life[i] -= dt * .5;
      if (P.pos[k + 1] > topY(P, k) || P.life[i] <= 0) P.life[i] = -1;
    }
    flush(P, n);
  }

  function frame() {
    if (!running) return;
    raf = requestAnimationFrame(frame);
    var dt = Math.min(.05, clock.getDelta()), t = clock.elapsedTime;
    // ease numeric state
    NUM.forEach(function (k) { var r = k === 'sl' && disc.hang === 2 ? 5 : k === 'topT' || k === 'h2' ? 1.6 : 2.2; cur[k] += (tgt[k] - cur[k]) * Math.min(1, dt * r); });
    if (Math.abs(cur.sl - builtSl) > .004) setBurden(cur.sl);
    // flames & dark tuyeres
    var nd = Math.round(cur.dark * o.nt);
    o.tuy.forEach(function (f, i) { var on = i >= nd; var s = on ? Math.max(.02, cur.blast * cur.flame) : .02; f.scale.set(1, .4 + s * 1.2 * (1 + Math.sin(t * 20 + i) * .08), 1); f.material.opacity = on ? .3 + s * .6 : .05; });
    // hearth liquid / frozen
    var frozen = disc.tap === 2;
    o.liquid.material.emissiveIntensity += ((frozen ? .05 : 1.2) - o.liquid.material.emissiveIntensity) * dt * 2;
    o.liquid.material.color.lerp(col(frozen ? 0x555a60 : 0xff6a00), dt * 2);
    o.hearthLight.intensity = frozen ? .15 : 1.1;
    o.plug.visible = disc.tap === 0 || disc.tap === 2;
    // top glow, hot spot, GCP heat
    o.topLight.intensity = Math.max(0, (cur.topT - 280) / 120) * 2.2;
    o.hotMat.opacity = cur.hot * (.55 + .35 * Math.sin(t * 5)); o.hotLight.intensity = cur.hot * 2.5;
    o.gcp.material.emissive.setRGB(cur.bagHot * (.6 + .3 * Math.sin(t * 6)), cur.bagHot * .1, 0);
    o.bleedCap.position.y = o.bleedTop.y + (disc.route === 'bleeder' ? .18 : 0);
    // people
    var p = o.person;
    if (disc.down === 1) { p.rotation.z += (Math.PI / 2 - p.rotation.z) * dt * 3; p.position.set(o.rh + 1.4, o.platY + .12, .6); o.rescuer.visible = false; }
    else if (disc.down === 2) { p.rotation.z = Math.PI / 2; p.position.x += (o.rh + 3.6 - p.position.x) * dt * 1.5; o.rescuer.visible = true; o.rescuer.position.set(p.position.x - .3, o.platY, .1); }
    else { p.rotation.z += (0 - p.rotation.z) * dt * 3; p.position.x += (o.rh + 1.4 - p.position.x) * dt * 2; p.position.y = o.platY; o.rescuer.visible = false; }

    upGas(dt);
    // spray droplets from 6 nozzles at the throat
    fall(o.spray, cur.spray, function (P, k) { var a = Math.floor(Math.random() * 6) / 6 * 6.283 + rnd(-.2, .2), r = o.rt * .75; P.pos[k] = Math.cos(a) * r; P.pos[k + 1] = Y0 - .1; P.pos[k + 2] = Math.sin(a) * r; P.v[k] = -Math.cos(a) * rnd(.4, 1.2); P.v[k + 1] = rnd(-1, 0); P.v[k + 2] = -Math.sin(a) * rnd(.4, 1.2); }, function () { return o.slY; }, 9.8);
    // nitrogen jets from lances
    fall(o.n2, cur.n2, function (P, k) { var a = Math.floor(Math.random() * 4) / 4 * 6.283 + .4, r = o.rt + .1; P.pos[k] = Math.cos(a) * r; P.pos[k + 1] = Y0 - .5 + rnd(-.1, .1); P.pos[k + 2] = Math.sin(a) * r; P.v[k] = -Math.cos(a) * rnd(2, 3.5); P.v[k + 1] = rnd(-.6, .2); P.v[k + 2] = -Math.sin(a) * rnd(2, 3.5); }, function (P, k) { return Math.hypot(P.pos[k], P.pos[k + 2]) < .2 ? 99 : Y0 - 2.2; }, 0);
    // stave leak (water) and H2 bubbles
    var lz = Math.min(geo.d.d2 + .5, geo.d.d3), ly = y(lz), lr = rad(geo.diam(lz)) * .95;
    fall(o.leak, cur.leak, function (P, k) { P.pos[k] = -lr; P.pos[k + 1] = Math.min(ly + 1.2, Y0 - .5); P.pos[k + 2] = rnd(-.15, .15); P.v[k] = rnd(.6, 1.4); P.v[k + 1] = rnd(-.5, 0); P.v[k + 2] = rnd(-.2, .2); }, function () { return o.slY; }, 6);
    rise(o.bub, Math.max(cur.bubbles, (cur.h2 - 8) / 10 * .5), function (P, k) { var a = Math.random() * 6.283, r = rnd(0, o.slR * .8); P.pos[k] = Math.cos(a) * r; P.pos[k + 1] = o.slY; P.pos[k + 2] = Math.sin(a) * r; }, dt, 1.6, function () { return Y0 + .6; }, .3);
    // bleeder plume (flare) / back-flow vent
    var bAmt = disc.route === 'bleeder' ? Math.max(.25, cur.blast) : 0;
    rise(o.plume, bAmt, function (P, k) { P.pos[k] = rnd(-.08, .08); P.pos[k + 1] = o.bleedTop.y + .1; P.pos[k + 2] = rnd(-.08, .08); var cc = Math.random() < .55 ? col('#ffc23d') : col('#9aa7b8'); P.cl[k] = cc.r; P.cl[k + 1] = cc.g; P.cl[k + 2] = cc.b; }, dt, 2.2, function () { return o.bleedTop.y + 3.2; }, .9);
    // gas to GCP along the downcomer
    var fAmt = disc.route === 'gcp' ? Math.min(1, cur.blast + .15) : 0, fp = o.flow;
    var fn = Math.round(fp.n * fAmt), hotc = tcol(cur.topT);
    for (var i = 0; i < fn; i++) { var k3 = i * 3; if (fp.life[i] < 0 || fp.life[i] > 1) fp.life[i] = Math.random() * .1; fp.life[i] += dt * (.25 + cur.blast * .35); var pt = o.gasPath.getPointAt(Math.min(1, fp.life[i])); fp.pos[k3] = pt.x; fp.pos[k3 + 1] = pt.y; fp.pos[k3 + 2] = pt.z; fp.cl[k3] = hotc.r; fp.cl[k3 + 1] = hotc.g; fp.cl[k3 + 2] = hotc.b; if (fp.life[i] >= 1) fp.life[i] = -1; }
    flush(fp, fn);
    // taphole: iron stream (1) or oxygen lance sparks (3)
    var tapOn = disc.tap === 1 || disc.tap === 3;
    fall(o.jet, tapOn ? 1 : 0, function (P, k) {
      P.pos[k] = rnd(-.04, .04); P.pos[k + 1] = o.tapY; P.pos[k + 2] = o.tapPos.z + .2;
      if (disc.tap === 3) { P.v[k] = rnd(-1.5, 1.5); P.v[k + 1] = rnd(.5, 2.5); P.v[k + 2] = rnd(.5, 3); var w = col('#fff6d8'); P.cl[k] = w.r; P.cl[k + 1] = w.g; P.cl[k + 2] = w.b; }
      else { P.v[k] = rnd(-.1, .1); P.v[k + 1] = rnd(-.2, .2); P.v[k + 2] = rnd(1.6, 2.2); var oc = col('#ff8a1a'); P.cl[k] = oc.r; P.cl[k + 1] = oc.g; P.cl[k + 2] = oc.b; }
    }, function () { return o.tapY - 1.2; }, 4);
    // air ingress at the top
    fall(o.air, cur.air, function (P, k) { var a = Math.random() * 6.283, r = o.rt + 1.4; P.pos[k] = Math.cos(a) * r; P.pos[k + 1] = Y0 + rnd(.1, .6); P.pos[k + 2] = Math.sin(a) * r; P.v[k] = -Math.cos(a) * 2.2; P.v[k + 1] = -.3; P.v[k + 2] = -Math.sin(a) * 2.2; }, function (P, k) { return Math.hypot(P.pos[k], P.pos[k + 2]) < o.rt * .6 ? 99 : Y0 - 1.5; }, 0);
    // CO cloud on the tuyere platform
    rise(o.co, cur.co, function (P, k) { var a = rnd(-.9, .9), r = rnd(o.rh + .4, o.rh + 2.2); P.pos[k] = Math.cos(a) * r; P.pos[k + 1] = o.platY + rnd(0, .4); P.pos[k + 2] = Math.sin(a) * r; }, dt, .25, function () { return o.platY + 1.6; }, .25);
    // steam at tuyeres
    rise(o.steam, cur.steam, function (P, k) { var a = Math.random() * 6.283, r = o.rh + .5; P.pos[k] = Math.cos(a) * r; P.pos[k + 1] = o.ty; P.pos[k + 2] = Math.sin(a) * r; }, dt, .9, function () { return o.ty + 2; }, .3);
    // shell water spray onto the hot spot
    fall(o.shw, cur.shellSpray, function (P, k) { P.pos[k] = -(o.rh + 2.4); P.pos[k + 1] = o.hotSpot.position.y + .9; P.pos[k + 2] = rnd(-.15, .15); P.v[k] = rnd(2.2, 2.8); P.v[k + 1] = rnd(.2, 1); P.v[k + 2] = rnd(-.3, .3); }, function (P, k) { return P.pos[k] > -(o.rh + .05) ? 99 : o.hotSpot.position.y - 1.5; }, 4);
    // gas channel jet
    rise(o.chan, cur.channel, function (P, k) { P.pos[k] = o.rb * .55 + rnd(-.12, .12); P.pos[k + 1] = o.ty + rnd(0, 1); P.pos[k + 2] = rnd(-.12, .12); }, dt, 6, function () { return Y0 + .4; }, .05);
    // hanging: a dark bridge under the stockline; slip: camera shake
    if (disc.hang === 2 && shake > 0) { shake -= dt; camera.position.x += Math.sin(t * 60) * .04 * shake; }
    if (!controls.autoRotate && performance.now() - idleT > 9000) controls.autoRotate = true;
    controls.update();
    renderer.render(scene, camera);
  }

  function resize() {
    if (!renderer) return;
    var w = canvas.clientWidth, h = canvas.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
  }

  R.init = function (cv, planner) {
    canvas = cv; geo = planner;
    renderer = new T.WebGLRenderer({ canvas: cv, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    scene = new T.Scene(); scene.fog = new T.Fog(0x050d19, 25, 60);
    camera = new T.PerspectiveCamera(38, 1, .1, 200);
    scene.add(new T.HemisphereLight(0xbfd6ff, 0x1a1008, .75));
    var dl = new T.DirectionalLight(0xffffff, .8); dl.position.set(6, 14, 8); scene.add(dl);
    var floor = new T.Mesh(new T.CircleGeometry(16, 48), mat(0x0b1f38, { roughness: 1, metalness: 0 })); floor.rotation.x = -Math.PI / 2; floor.position.y = -.02; scene.add(floor);
    controls = new T.OrbitControls(camera, cv); controls.enableDamping = true; controls.dampingFactor = .08; controls.autoRotate = true; controls.autoRotateSpeed = .6;
    controls.minDistance = 5; controls.maxDistance = 48; controls.maxPolarAngle = Math.PI * .52;
    controls.addEventListener('start', function () { controls.autoRotate = false; idleT = performance.now(); });
    controls.addEventListener('end', function () { idleT = performance.now(); });
    clock = new T.Clock();
    NUM.forEach(function (k) { cur[k] = tgt[k] = 0; }); cur.sl = tgt.sl = .3; cur.topT = tgt.topT = 200; cur.flame = tgt.flame = 1; cur.blast = tgt.blast = .75;
    build();
    if (window.ResizeObserver) new ResizeObserver(resize).observe(cv); else window.addEventListener('resize', resize);
    resize(); R.ready = true; R.start();
  };
  R.setGeo = function (planner) { geo = planner; if (R.ready) build(); };
  R.setState = function (st, k) {
    kind = k;
    NUM.forEach(function (key) { if (st[key] != null) tgt[key] = st[key]; });
    if (st.hang === 2 && disc.hang !== 2) shake = 1.2;
    disc.route = st.route; disc.hang = st.hang; disc.tap = st.tap; disc.down = st.down;
    if (snap) { snap = false; NUM.forEach(function (key) { cur[key] = tgt[key]; }); shake = 0; }
  };
  R.reset = function () { snap = true; };
  R.start = function () { if (running || !R.ready) return; running = true; clock.getDelta(); resize(); frame(); };
  R.stop = function () { running = false; cancelAnimationFrame(raf); };
  window.BD3D = R;
})();
