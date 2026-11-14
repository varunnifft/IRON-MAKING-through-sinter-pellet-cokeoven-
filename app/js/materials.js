/* Iron ore fines by grade. The module's three ore lines become Grade A/B/C (same data, same index),
   and Grade D (Fe below 58 %) is added as material 17 with typical low-grade Indian fines chemistry.
   ORDER is the display order: Grade A, B, C, D, then the rest as in the module. */
(function () {
  var SD = window.SD;
  SD.mats[0] = 'Iron ore fines Grade B (Fe 60–62)';
  SD.mats[1] = 'Iron ore fines Grade C (Fe 58–60)';
  SD.mats[2] = 'Iron ore fines Grade A (Fe 62+)';
  if (SD.mats.length === 16) {
    SD.mats.push('Iron ore fines Grade D (Fe below 58)');
    SD.types.push('Ore');
    var D = { moist: 11.5, fe: 56.5, feo: 0.5, sio2: 6.8, al2o3: 4.0, cao: 0.15, mgo: 0.1, mno: 0.1, burn: 6.0, fc: 0, mps: 3.0, m1: 36, p3: 36,
      fuel: 0, flux: 0, ret: 0, ore: 1, loi: 6.0, s: 0.01, p: 0.08, tio2: 0.18, lime: 0 };
    Object.keys(SD.props).forEach(function (k) { SD.props[k].push(D[k] != null ? D[k] : 0); });
    SD.days.forEach(function (d) { d.use.push(0); });
  }
  /* Plant's own return fines (screened sinter going back to the mix): material 18. It is the plant's own product,
     so its chemistry follows the sinter (lab result, else the prediction) and the engine keeps it out of the
     new-feed mass balance; it counts in the return-fines share of the dry mix and in the total mix on the strand. */
  if (SD.mats.length === 17) {
    SD.mats.push('Plant return fines (own, circulating)');
    SD.types.push('Return');
    var R = { moist: 0.5, fe: 55, feo: 9, sio2: 5.8, al2o3: 2.9, cao: 10.8, mgo: 2, mno: 0.25, burn: 0, fc: 0, mps: 2.5, m1: 15, p3: 45,
      fuel: 0, flux: 0, ret: 1, ore: 0, loi: 0, s: 0.01, p: 0.07, tio2: 0.15, lime: 0 };
    Object.keys(SD.props).forEach(function (k) { SD.props[k].push(R[k] != null ? R[k] : 0); });
    SD.days.forEach(function (d) { d.use.push(0); });
  }
  SD.OWN_RF = 17;
  SD.matOrder = [2, 0, 1, 16].concat([3, 4, 17, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  // Fe grade of an iron-ore label: "62+" / "62" -> A, "60" / "60+" / "60-62" -> B, "58" .. "59.9" / "58-60" -> C, below 58 -> D
  SD.oreGrade = function (label) {
    var L = String(label || '').toLowerCase();
    if (/sinter|return|dust|scale|pellet|sludge|crm/.test(L)) return -1;
    var g = L.match(/grade\s*[-–:]?\s*([abcd])\b/);
    if (g) return { a: 2, b: 0, c: 1, d: 16 }[g[1]];
    if (!/iron|ore|iof|\bfines?\b|\bfe\b/.test(L)) return -1;
    var m = L.match(/(\d{2}(?:\.\d+)?)\s*(\+)?(?:\s*(?:-|–|to)\s*(\d{2}(?:\.\d+)?))?/g), lo = null;
    (m || []).forEach(function (t) {
      var nums = t.match(/\d{2}(?:\.\d+)?/g).map(Number).filter(function (x) { return x >= 45 && x <= 70; });
      if (nums.length && lo == null) lo = Math.min.apply(null, nums);
    });
    if (lo == null) return -1;
    return lo >= 62 ? 2 : lo >= 60 ? 0 : lo >= 58 ? 1 : 16;
  };
})();
