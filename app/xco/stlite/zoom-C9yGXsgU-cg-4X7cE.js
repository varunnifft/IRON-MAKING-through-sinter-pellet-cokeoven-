function e(e) {
	return ((e = Math.exp(e)) + 1 / e) / 2;
}
function t(e) {
	return ((e = Math.exp(e)) - 1 / e) / 2;
}
function n(e) {
	return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
var r = function r(i, a, o) {
	function s(r, s) {
		var c = r[0], l = r[1], u = r[2], d = s[0], f = s[1], p = s[2], m = d - c, h = f - l, g = m * m + h * h, _, v;
		if (g < 1e-12) v = Math.log(p / u) / i, _ = function(e) {
			return [
				c + e * m,
				l + e * h,
				u * Math.exp(i * e * v)
			];
		};
		else {
			var y = Math.sqrt(g), b = (p * p - u * u + o * g) / (2 * u * a * y), x = (p * p - u * u - o * g) / (2 * p * a * y), S = Math.log(Math.sqrt(b * b + 1) - b);
			v = (Math.log(Math.sqrt(x * x + 1) - x) - S) / i, _ = function(r) {
				var o = r * v, s = e(S), d = u / (a * y) * (s * n(i * o + S) - t(S));
				return [
					c + d * m,
					l + d * h,
					u * s / e(i * o + S)
				];
			};
		}
		return _.duration = v * 1e3 * i / Math.SQRT2, _;
	}
	return s.rho = function(e) {
		var t = Math.max(.001, +e), n = t * t;
		return r(t, n, n * n);
	}, s;
}(Math.SQRT2, 2, 4);
//#endregion
export { r as t };

//# sourceMappingURL=zoom-C9yGXsgU-cg-4X7cE.js.map