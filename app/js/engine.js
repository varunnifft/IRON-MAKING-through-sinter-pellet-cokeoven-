/* Sinter prediction engine - a line-by-line port of the Engine / Model / Calib sheets of
   Sinter_Prediction_Module_v2.xlsx. Row numbers in comments refer to the Model sheet (B column). */
(function () {
  var SD = window.SD;
  var N = SD.mats.length;
  var PROPS = ['moist', 'fe', 'feo', 'sio2', 'al2o3', 'cao', 'mgo', 'mno', 'burn', 'fc', 'mps', 'm1', 'p3', 'fuel', 'flux', 'ret', 'ore', 'loi', 's', 'p', 'tio2', 'lime'];

  function avg(a) { var s = 0, n = 0; a.forEach(function (v) { if (typeof v === 'number' && isFinite(v)) { s += v; n++; } }); return n ? s / n : 0; }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  // Material property table with the derived flags rebuilt from the editable chemistry (Engine rows 13, 18-20, 59-64)
  function buildProps(chem) {
    var P = {};
    PROPS.forEach(function (k) { P[k] = chem[k].slice(); });
    for (var i = 0; i < N; i++) {
      var t = SD.types[i];
      P.fuel[i] = t === 'Fuel' ? 1 : 0;
      P.flux[i] = t === 'Flux' ? 1 : 0;
      P.ret[i] = t === 'Return' ? 1 : 0;
      P.ore[i] = (t === 'Ore' && P.fe[i] >= 50) ? 1 : 0;
      P.lime[i] = P.cao[i] >= 60 ? 1 : 0;
      P.loi[i] = Math.max(0, P.loi[i]);
    }
    return P;
  }

  // Mass balance of one blend (Engine columns S..AU, BT..BZ)
  function massBalance(use, P, M) {
    var T = 0, S = 0, V = 0, sp = {}, k;
    var keys = ['fe', 'sio2', 'al2o3', 'cao', 'mgo', 'mno', 'feo', 'fc', 'm1', 'p3', 'mps', 'ret', 's', 'p', 'tio2', 'lime'];
    keys.forEach(function (x) { sp[x] = 0; });
    var fuel = 0, flux = 0, oreDry = 0, oreLoi = 0, own = 0, ownWet = 0;
    for (var i = 0; i < N; i++) {
      var u = +use[i] || 0;
      // the plant's own return fines are recycled product: same chemistry as the sinter, not new feed
      if (i === SD.OWN_RF) { ownWet = u; own = u * (1 - P.moist[i] / 100); continue; }
      var dry = u * (1 - P.moist[i] / 100);
      S += u; T += dry; V += dry * P.burn[i] / 100;
      for (k = 0; k < keys.length; k++) sp[keys[k]] += dry * P[keys[k]][i];
      fuel += u * P.fuel[i]; flux += u * P.flux[i];
      oreDry += dry * P.ore[i]; oreLoi += dry * P.ore[i] * P.loi[i];
    }
    var W = T - V;
    var r = { S: S, T: T, V: V, W: W, U: S ? (S - T) / S * 100 : 0, fuelWet: fuel, fluxWet: flux, fcDry: sp.fc };
    r.rawFe = W ? sp.fe / W : 0; r.rawSiO2 = W ? sp.sio2 / W : 0; r.rawAl2O3 = W ? sp.al2o3 / W : 0;
    r.rawCaO = W ? sp.cao / W : 0; r.rawMgO = W ? sp.mgo / W : 0; r.rawMnO = W ? sp.mno / W : 0;
    r.feoMix = T ? sp.feo / T : 0;
    r.fcMix = T ? sp.fc / T : 0;           // AN
    r.m1 = T ? sp.m1 / T : 0;              // AR
    r.p3 = T ? sp.p3 / T : 0;              // AS
    r.mixMps = T ? sp.mps / T : 0;         // AT
    r.retShare = T + own ? (sp.ret + own) / (T + own) * 100 : 0; // AU, with the plant's own return fines
    r.ownRF = own; r.ownRFwet = ownWet;
    r.oreLoi = oreDry ? oreLoi / oreDry : 0; // BT
    r.limeShare = T ? sp.lime / T * 100 : 0; // BU
    r.tio2 = W ? sp.tio2 / W * M[115] / 100 : 0; // BX
    r.S_ = W ? sp.s / W * M[113] / 100 : 0;      // BY
    r.P_ = W ? sp.p / W * M[114] / 100 : 0;      // BZ
    r.yieldMB = T ? W / T * 100 : 0;             // CF
    return r;
  }

  function perProd(mb, prod) {
    return {
      fuel: prod ? mb.fuelWet / prod * 1000 : 0,           // AO
      flux: prod ? mb.fluxWet / prod * 1000 : 0,           // AP
      fcKg: prod ? mb.fcDry / 100 / prod * 1000 : 0        // AQ
    };
  }

  // Quality predictions (Engine BF..CC) for a case c = {mb, chem, speed, ign, windP, btp, bed, moist, alk, coke3, cacl2}
  function quality(c, M) {
    var mb = c.mb, ch = c.chem, out = {}, d = {};
    // FeO (BF) with its driver breakdown
    d.feo = {
      'Fixed C in mix': M[38] * (mb.fcMix - M[14]),
      'Basicity B2': M[39] * (ch.b2 - M[5]),
      'MgO': M[40] * (ch.mgo - M[9]),
      'Machine speed': M[41] * (c.speed - M[11]),
      'BTP temperature': M[42] * (c.btp - M[13]),
      'Bed height': M[43] * (c.bed - M[16])
    };
    var X = extraDrivers(c, M);
    for (var xk in X.feo) d.feo[xk] = X.feo[xk];
    var feoRaw = M[6] + sum(d.feo);
    out.feo = Math.max(M[68], Math.min(M[69], feoRaw));
    // v2 TI extra (CA)
    var tiExtra = {
      'Ore LOI (goethite)': M[102] * (mb.oreLoi - M[117]),
      'Burnt lime share': M[104] * (mb.limeShare - M[118]),
      'Coke -3 mm size': -M[105] * (Math.pow(c.coke3 - M[106], 2) - Math.pow(M[122] - M[106], 2)),
      'Ignition temperature': -M[107] * (Math.pow(c.ign - M[108], 2) - Math.pow(M[12] - M[108], 2)),
      'Wind main suction': M[109] * (c.windP - M[120]),
      'Return fines share': M[110] * (mb.retShare - M[119])
    };
    d.ti = {
      'Basicity B2': M[44] * (Math.min(ch.b2, M[94]) - Math.min(M[5], M[94])) + M[95] * (Math.max(ch.b2, M[94]) - Math.max(M[5], M[94])),
      'FeO': M[45] * (out.feo - M[6]),
      'Al2O3': M[46] * (ch.al2o3 - M[8]),
      'MgO': M[47] * (ch.mgo - M[9]),
      '-1 mm fines in mix': M[48] * (mb.m1 - M[15]),
      'Machine speed': M[49] * (c.speed - M[11]),
      'Bed height': M[50] * (c.bed - M[16]),
      'Mix moisture': -M[51] * (Math.pow(c.moist - M[52], 2) - Math.pow(M[17] - M[52], 2))
    };
    for (var k in tiExtra) d.ti[k] = tiExtra[k];
    for (var xt in X.ti) d.ti[xt] = X.ti[xt];
    out.perm = X.perm;
    out.ti = Math.max(40, Math.min(88, M[10] + sum(d.ti)));
    // RDI (BH)
    d.rdi = {
      'Basicity B2': M[53] * (ch.b2 - M[5]),
      'FeO': M[54] * (out.feo - M[6]),
      'Al2O3': M[97] * (Math.min(ch.al2o3, M[96]) - Math.min(M[8], M[96])) + M[55] * (Math.max(ch.al2o3, M[96]) - Math.max(M[8], M[96])),
      'MgO': M[56] * (ch.mgo - M[9]),
      'Alkali Na2O+K2O': M[57] * (c.alk - M[18]),
      'SiO2': M[98] * (ch.sio2 - M[7]),
      'TiO2': M[99] * (mb.tio2 - M[121]),
      'CaCl2 spraying': M[100] * (c.cacl2 - M[123])
    };
    out.rdi = Math.max(0, Math.min(100, M[30] + sum(d.rdi)));
    // RI (BI)
    d.ri = {
      'FeO': M[58] * (out.feo - M[6]),
      'Basicity B2': M[59] * (ch.b2 - M[5]),
      'SiO2': M[60] * (ch.sio2 - M[7]),
      'MgO': M[61] * (ch.mgo - M[9]),
      'Al2O3': M[62] * (ch.al2o3 - M[8]),
      'TI': M[63] * (out.ti - M[10]),
      'Ore LOI (goethite)': M[103] * (mb.oreLoi - M[117]),
      'CaCl2 spraying': M[101] * (c.cacl2 - M[123])
    };
    out.ri = M[32] + sum(d.ri);
    out.si = M[34] + M[64] * (out.ti - M[10]);
    out.ai = M[36] + M[65] * (out.ti - M[10]);
    // Size distribution (BL..BR)
    out.m6 = Math.max(0, M[24] + M[66] * (out.ti - M[10]) + M[112] * (c.bed - M[16]));
    out.p50 = Math.max(0, M[19] + 0.5 * M[67] * (out.ti - M[10]) + 0.5 * M[111] * (c.bed - M[16]));
    out.p40 = Math.max(0, M[20] + 0.5 * M[67] * (out.ti - M[10]) + 0.5 * M[111] * (c.bed - M[16]));
    var rest = (M[21] + M[22] + M[23]) ? (100 - out.m6 - out.p50 - out.p40) / (M[21] + M[22] + M[23]) : 1;
    out.p25 = M[21] * rest; out.p10 = M[22] * rest; out.p6 = M[23] * rest;
    out.mps = (out.p50 * M[77] + out.p40 * M[78] + out.p25 * M[79] + out.p10 * M[80] + out.p6 * M[81] + out.m6 * M[82]) / 100 * M[27];
    out.drivers = d;
    return out;
  }

  /* Harmonic diameter of the sinter, Dh = 1 / sum(x_i / d_i) (Kronberger, Schaler & Schoenegger 2012,
     Siemens VAI): a low share of small sizes gives a high Dh and a permeable BF burden. Uses the same class
     sizes as the MPS (cells M77..M82). */
  function harmonic(q, M) {
    var x = [q.p50, q.p40, q.p25, q.p10, q.p6, q.m6], d = [M[77], M[78], M[79], M[80], M[81], M[82]], s = 0, t = 0;
    for (var i = 0; i < 6; i++) if (x[i] > 0 && d[i] > 0) { s += x[i] / d[i]; t += x[i]; }
    return s ? t / s : 0;
  }
  function sum(o) { var s = 0; for (var k in o) s += o[k]; return s; }
  function dv(x, ref) { return (typeof x === 'number' && isFinite(x) && typeof ref === 'number' && isFinite(ref)) ? x - ref : 0; }
  function clampAbs(v, m) { return Math.max(-m, Math.min(m, v)); }
  /* Additional drivers (v1.3, Master default sheet parameters). Each acts on the difference from the
     calibration plant, so a value left at its master default (= reference plant) does not move the result.
     Literature-direction, deliberately small slopes; capped so they never dominate the module's drivers. */
  var EXTRA = {
    feoMix: 0.12,    // sinter FeO per 1 % FeO in the dry mix (mill scale, return sinter: magnetite / wustite carry-over)
    windT: 0.004,    // sinter FeO per 1 deg C wind-main temperature (excess heat in the bed)
    idFan: -0.003,   // TI per 1 rpm ID fan (more air = faster flame front = shorter time above 1100 deg C)
    bfg: 0.00015,    // TI per 1 Nm3/h ignition gas, normalised to the reference strand area (better top-layer ignition)
    p3: 0.004,       // machine-basis production per 1 % +3 mm granules in the mix (bed permeability)
    mixMps: 0.04,    // machine-basis production per 1 mm mean size of the mix
    fanPerm: 0.0002  // machine-basis production per 1 rpm ID fan (air volume)
  };
  function extraDrivers(c, M) {
    var mb = c.mb, ar = c.area > 0 ? c.area : M[116] || 120, refA = M[143] || 120;
    var bfgEq = (typeof c.bfg === 'number' && isFinite(c.bfg)) ? c.bfg * refA / ar : NaN;
    return {
      feo: {
        'Raw-mix FeO (mill scale etc.)': clampAbs(EXTRA.feoMix * dv(mb.feoMix, M[131]), 2.0),
        'Wind main temperature': clampAbs(EXTRA.windT * dv(c.windT, M[133]), 0.6)
      },
      ti: {
        'ID fan speed (air flow)': clampAbs(EXTRA.idFan * dv(c.idFan, M[135]), 1.5),
        'Ignition gas (BF gas flow)': clampAbs(EXTRA.bfg * dv(bfgEq, M[137]), 1.0)
      },
      perm: Math.max(0.85, Math.min(1.15, 1 + EXTRA.p3 * dv(mb.p3, M[139]) + EXTRA.mixMps * dv(mb.mixMps, M[141]) + EXTRA.fanPerm * dv(c.idFan, M[135])))
    };
  }

  function chemistry(mb, bias, on) {
    var f = on ? 1 : 0;
    var c = {
      fe: mb.rawFe + f * bias.fe, sio2: mb.rawSiO2 + f * bias.sio2, al2o3: mb.rawAl2O3 + f * bias.al2o3,
      cao: mb.rawCaO + f * bias.cao, mgo: mb.rawMgO + f * bias.mgo, mno: mb.rawMnO + f * bias.mno
    };
    c.b2 = c.sio2 ? c.cao / c.sio2 : 0;
    c.b4 = (c.sio2 + c.al2o3) ? (c.cao + c.mgo) / (c.sio2 + c.al2o3) : 0;
    c.b3 = c.sio2 ? (c.cao + c.mgo) / c.sio2 : 0;
    c.as = c.sio2 ? c.al2o3 / c.sio2 : 0;
    return c;
  }

  /* Calibrate: rebuild the reference point, anchors, yield / MPS factors and chemistry bias from the
     DPR days, exactly as Model section A/E/F and Calib do. refIn = plant normals (bed, moisture ...). */
  function calibrate(chemTable, refIn, anchors) {
    var P = buildProps(chemTable);
    var days = SD.days.filter(function (d) { return d.prod > 0; });
    var M = {};
    for (var k in SD.model) M[k] = SD.model[k];
    var A = function (f) { return avg(days.map(f)); };
    M[5] = A(function (d) { return d.act.b2; }); M[6] = A(function (d) { return d.act.feo; });
    M[7] = A(function (d) { return d.act.sio2; }); M[8] = A(function (d) { return d.act.al2o3; });
    M[9] = A(function (d) { return d.act.mgo; }); M[10] = A(function (d) { return d.act.ti; });
    M[11] = A(function (d) { return d.mach[0]; }); M[12] = A(function (d) { return d.mach[1]; });
    M[13] = A(function (d) { return d.mach[5]; }); M[120] = A(function (d) { return d.mach[2]; });
    M[19] = A(function (d) { return d.act.p50; }); M[20] = A(function (d) { return d.act.p40; });
    M[21] = A(function (d) { return d.act.p25; }); M[22] = A(function (d) { return d.act.p10; });
    M[23] = A(function (d) { return d.act.p6; }); M[24] = A(function (d) { return d.act.m6; });
    M[25] = A(function (d) { return d.act.mps; });
    M[85] = A(function (d) { return d.act.fe; }); M[86] = A(function (d) { return d.act.cao; });
    M[87] = A(function (d) { return d.act.mno; }); M[88] = A(function (d) { return d.prod; });
    M[16] = refIn.bed; M[17] = refIn.moist; M[18] = refIn.alk; M[122] = refIn.coke3; M[123] = refIn.cacl2 ? 1 : 0;
    M[30] = anchors && isFinite(anchors.rdi) ? anchors.rdi : M[29];
    M[32] = anchors && isFinite(anchors.ri) ? anchors.ri : M[31];
    M[34] = anchors && isFinite(anchors.si) ? anchors.si : M[33];
    M[36] = anchors && isFinite(anchors.ai) ? anchors.ai : M[35];
    var mbs = days.map(function (d) { return massBalance(d.use, P, M); });
    M[14] = avg(mbs.map(function (m) { return m.fcMix; }));
    M[15] = avg(mbs.map(function (m) { return m.m1; }));
    M[26] = avg(mbs.map(function (m, i) { return m.W ? days[i].prod / m.W : NaN; })) || 1;
    M[89] = avg(mbs.map(function (m, i) { return perProd(m, days[i].prod).fuel; }));
    M[90] = avg(mbs.map(function (m, i) { return perProd(m, days[i].prod).fcKg; }));
    M[91] = avg(mbs.map(function (m, i) { return perProd(m, days[i].prod).flux; }));
    M[117] = avg(mbs.map(function (m) { return m.oreLoi; }));
    M[118] = avg(mbs.map(function (m) { return m.limeShare; }));
    M[119] = avg(mbs.map(function (m) { return m.retShare; }));
    M[121] = avg(mbs.map(function (m) { return m.tio2; }));
    M[124] = avg(mbs.map(function (m) { return m.yieldMB; }));
    // references of the additional drivers (v1.3)
    M[131] = avg(mbs.map(function (m) { return m.feoMix; }));
    M[133] = A(function (d) { return d.mach[3]; }); M[135] = A(function (d) { return d.mach[4]; }); M[137] = A(function (d) { return d.mach[6]; });
    M[139] = avg(mbs.map(function (m) { return m.p3; })); M[141] = avg(mbs.map(function (m) { return m.mixMps; }));
    M[143] = (SD.refin && SD.refin.area) || 120;
    var binMps = (M[19] * M[77] + M[20] * M[78] + M[21] * M[79] + M[22] * M[80] + M[23] * M[81] + M[24] * M[82]) / 100;
    M[27] = binMps ? M[25] / binMps : 1;
    var bias = {
      fe: avg(mbs.map(function (m, i) { return days[i].act.fe - m.rawFe; })),
      sio2: avg(mbs.map(function (m, i) { return days[i].act.sio2 - m.rawSiO2; })),
      al2o3: avg(mbs.map(function (m, i) { return days[i].act.al2o3 - m.rawAl2O3; })),
      cao: avg(mbs.map(function (m, i) { return days[i].act.cao - m.rawCaO; })),
      mgo: avg(mbs.map(function (m, i) { return days[i].act.mgo - m.rawMgO; })),
      mno: avg(mbs.map(function (m, i) { return days[i].act.mno - m.rawMnO; }))
    };
    return { M: M, P: P, bias: bias, days: days };
  }

  /* Predict one scenario. inp: {use[16], speed, ign, windP, windT, idFan, btp, bfg, bed, moist, alk,
     coke3, cacl2 (bool), area, basis ('Charge'|'Machine'), prodOverride, biasOn (bool)} */
  function predict(inp, cal) {
    var M = {}; for (var k in cal.M) M[k] = cal.M[k];
    M[116] = inp.area;
    var mb = massBalance(inp.use, cal.P, M);
    var ch = chemistry(mb, inp.chemBias || cal.bias, inp.biasOn);
    /* Machine speed on another strand: the module's speed effects are per Hz of the calibration plant's drive.
       A different machine is compared by its time on the strand (length / speed), turned into the equivalent
       drive frequency of the calibration plant, and kept within ±30 % of its normal so the literature slopes
       are not stretched far outside the data they came from. */
    var spd = inp.speed, refMpm = M[11] * (inp.refK || 0.0656), refL = (SD.refin.area || 120) / (inp.refWidth || 3);
    if (inp.speedMpm > 0 && inp.area > 0 && inp.width > 0 && refMpm > 0) {
      var tRatio = (refL / refMpm) / ((inp.area / inp.width) / inp.speedMpm); // > 1 = less time on the strand than normal
      spd = M[11] * Math.max(0.7, Math.min(1.3, tRatio));
    }
    // CG: production from speed × bed × width, relative to the calibration plant
    var prodMachine = M[11] && M[16] ? (inp.speedMpm > 0 && inp.width > 0 && refMpm > 0 ? M[88] * inp.speedMpm / refMpm * inp.bed / M[16] * inp.width / (inp.refWidth || 3) : M[88] * inp.speed / M[11] * inp.bed / M[16]) : 0;
    var prodCharge = mb.W * M[26];
    var permQ = extraDrivers({ mb: mb, idFan: inp.idFan, windT: inp.windT, bfg: inp.bfg, area: inp.area }, M).perm;
    prodMachine *= permQ;
    var prod = (isFinite(inp.prodOverride) && inp.prodOverride > 0) ? inp.prodOverride : (inp.basis === 'Machine' ? prodMachine : prodCharge); // B24
    var pp = perProd(mb, prod);
    // plant level of FeO and TI learned from the user's lab results (the module's drivers then act around it)
    if (isFinite(inp.feoBias)) M[6] += inp.feoBias;
    if (isFinite(inp.tiBias)) M[10] += inp.tiBias;
    var q = quality({ mb: mb, chem: ch, speed: spd, ign: inp.ign, windP: inp.windP, btp: inp.btp, bed: inp.bed,
      moist: inp.moist, alk: inp.alk, coke3: inp.coke3, cacl2: inp.cacl2 ? 1 : 0, windT: inp.windT, idFan: inp.idFan, bfg: inp.bfg, area: inp.area }, M);
    var r = {
      fe: ch.fe, feo: q.feo, fe2o3: (ch.fe - q.feo * 0.7773) / 0.6994, sio2: ch.sio2, al2o3: ch.al2o3, cao: ch.cao, mgo: ch.mgo, mno: ch.mno,
      b2: ch.b2, b4: ch.b4, b3: ch.b3, as: ch.as,
      p50: q.p50, p40: q.p40, p25: q.p25, p10: q.p10, p6: q.p6, m6: q.m6, mps: q.mps, hd: harmonic(q, M),
      ti: q.ti, ai: q.ai, si: q.si, rdi: q.rdi, ri: q.ri,
      prod: prod, prodMachine: prodMachine, prodCharge: prodCharge, fuel: pp.fuel, fcKg: pp.fcKg, flux: pp.flux,
      ownRF: mb.ownRF, ownRFwet: mb.ownRFwet, grossProd: prod + mb.ownRF, fcMix: mb.fcMix, m1: mb.m1, p3: mb.p3, retShare: mb.retShare, moistCharge: mb.U,
      s: mb.S_, p: mb.P_, tio2: mb.tio2, oreLoi: mb.oreLoi, limeShare: mb.limeShare, yieldMB: mb.yieldMB,
      productivity: M[116] ? prod / 24 / M[116] : 0, speedEq: spd,
      wet: mb.S, dry: mb.T, sinterMB: mb.W, mixMps: mb.mixMps, feoMix: mb.feoMix, perm: permQ * 100
    };
    r.productivityDay = r.productivity * 24;
    r.drivers = q.drivers;
    r.M = M;
    return r;
  }

  // Back-test one DPR day exactly like Engine rows 26+ (production = actual, bed etc. = plant normals)
  function backtest(day, cal, refIn, biasOn) {
    var M = cal.M;
    var mb = massBalance(day.use, cal.P, M);
    var ch = chemistry(mb, cal.bias, biasOn);
    var q = quality({ mb: mb, chem: ch, speed: day.mach[0], ign: day.mach[1], windP: day.mach[2], btp: day.mach[5], bed: refIn.bed,
      moist: refIn.moist, alk: refIn.alk, coke3: refIn.coke3, cacl2: refIn.cacl2 ? 1 : 0, windT: day.mach[3], idFan: day.mach[4], bfg: day.mach[6], area: M[143] }, M);
    return { fe: ch.fe, sio2: ch.sio2, al2o3: ch.al2o3, cao: ch.cao, mgo: ch.mgo, mno: ch.mno, b2: ch.b2, feo: q.feo, ti: q.ti, mps: q.mps };
  }

  // RMSE of the in-sample back-test (Calib row 7), used as the "typical error" band
  function rmse(cal, refIn, biasOn) {
    var keys = ['fe', 'sio2', 'al2o3', 'cao', 'mgo', 'mno', 'b2', 'feo', 'ti', 'mps'];
    var acc = {}; keys.forEach(function (k) { acc[k] = []; });
    cal.days.forEach(function (d) {
      var p = backtest(d, cal, refIn, biasOn);
      keys.forEach(function (k) { if (typeof d.act[k] === 'number') acc[k].push(Math.pow(d.act[k] - p[k], 2)); });
    });
    var r = {}; keys.forEach(function (k) { r[k] = Math.sqrt(avg(acc[k])); });
    return r;
  }

  window.SinterEngine = { EXTRA: EXTRA, buildProps: buildProps, calibrate: calibrate, predict: predict, backtest: backtest, rmse: rmse, harmonic: harmonic, PROPS: PROPS, clone: clone, avg: avg };
})();
