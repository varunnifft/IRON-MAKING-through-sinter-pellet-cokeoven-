import { b as e } from "./string-BvOnLx8K-BsWpS-s0.js";
import { r as t } from "./value-Fb9HFOxE-BHCNJ526.js";
import { t as n } from "./init-5BClRdiB-LyILMlTE.js";
import { i as r, n as i, r as a, t as o } from "./defaultLocale-2bEbhetO-QGFVckfi.js";
//#region ../react/build/linear-CJvvCWKw.js
function s(e, t) {
	return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function c(e, t) {
	return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function l(e) {
	let t, n, r;
	e.length === 2 ? (t = e === s || e === c ? e : u, n = e, r = e) : (t = s, n = (t, n) => s(e(t), n), r = (t, n) => e(t) - n);
	function i(e, r, i = 0, a = e.length) {
		if (i < a) {
			if (t(r, r) !== 0) return a;
			do {
				let t = i + a >>> 1;
				n(e[t], r) < 0 ? i = t + 1 : a = t;
			} while (i < a);
		}
		return i;
	}
	function a(e, r, i = 0, a = e.length) {
		if (i < a) {
			if (t(r, r) !== 0) return a;
			do {
				let t = i + a >>> 1;
				n(e[t], r) <= 0 ? i = t + 1 : a = t;
			} while (i < a);
		}
		return i;
	}
	function o(e, t, n = 0, a = e.length) {
		let o = i(e, t, n, a - 1);
		return o > n && r(e[o - 1], t) > -r(e[o], t) ? o - 1 : o;
	}
	return {
		left: i,
		center: o,
		right: a
	};
}
function u() {
	return 0;
}
function d(e) {
	return e === null ? NaN : +e;
}
function* f(e, t) {
	if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
	else {
		let n = -1;
		for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
	}
}
var p = l(s), m = p.right, h = p.left;
l(d).center;
var g = Math.sqrt(50), _ = Math.sqrt(10), v = Math.sqrt(2);
function y(e, t, n) {
	let r = (t - e) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / 10 ** i, o = a >= g ? 10 : a >= _ ? 5 : a >= v ? 2 : 1, s, c, l;
	return i < 0 ? (l = 10 ** -i / o, s = Math.round(e * l), c = Math.round(t * l), s / l < e && ++s, c / l > t && --c, l = -l) : (l = 10 ** i * o, s = Math.round(e / l), c = Math.round(t / l), s * l < e && ++s, c * l > t && --c), c < s && .5 <= n && n < 2 ? y(e, t, n * 2) : [
		s,
		c,
		l
	];
}
function b(e, t, n) {
	if (t = +t, e = +e, n = +n, !(n > 0)) return [];
	if (e === t) return [e];
	let r = t < e, [i, a, o] = r ? y(t, e, n) : y(e, t, n);
	if (!(a >= i)) return [];
	let s = a - i + 1, c = Array(s);
	if (r) {
		if (o < 0) for (let e = 0; e < s; ++e) c[e] = (a - e) / -o;
		else for (let e = 0; e < s; ++e) c[e] = (a - e) * o;
	} else if (o < 0) for (let e = 0; e < s; ++e) c[e] = (i + e) / -o;
	else for (let e = 0; e < s; ++e) c[e] = (i + e) * o;
	return c;
}
function x(e, t, n) {
	return t = +t, e = +e, n = +n, y(e, t, n)[2];
}
function S(e, t, n) {
	t = +t, e = +e, n = +n;
	let r = t < e, i = r ? x(t, e, n) : x(e, t, n);
	return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function C(e, t) {
	return e = +e, t = +t, function(n) {
		return Math.round(e * (1 - n) + t * n);
	};
}
function w(e) {
	return function() {
		return e;
	};
}
function T(e) {
	return +e;
}
var E = [0, 1];
function D(e) {
	return e;
}
function O(e, t) {
	return (t -= e = +e) ? function(n) {
		return (n - e) / t;
	} : w(isNaN(t) ? NaN : .5);
}
function k(e, t) {
	var n;
	return e > t && (n = e, e = t, t = n), function(n) {
		return Math.max(e, Math.min(t, n));
	};
}
function A(e, t, n) {
	var r = e[0], i = e[1], a = t[0], o = t[1];
	return i < r ? (r = O(i, r), a = n(o, a)) : (r = O(r, i), a = n(a, o)), function(e) {
		return a(r(e));
	};
}
function j(e, t, n) {
	var r = Math.min(e.length, t.length) - 1, i = Array(r), a = Array(r), o = -1;
	for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < r;) i[o] = O(e[o], e[o + 1]), a[o] = n(t[o], t[o + 1]);
	return function(t) {
		var n = m(e, t, 1, r) - 1;
		return a[n](i[n](t));
	};
}
function M(e, t) {
	return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function N() {
	var n = E, r = E, i = t, a, o, s, c = D, l, u, d;
	function f() {
		var e = Math.min(n.length, r.length);
		return c !== D && (c = k(n[0], n[e - 1])), l = e > 2 ? j : A, u = d = null, p;
	}
	function p(e) {
		return e == null || isNaN(e = +e) ? s : (u ||= l(n.map(a), r, i))(a(c(e)));
	}
	return p.invert = function(t) {
		return c(o((d ||= l(r, n.map(a), e))(t)));
	}, p.domain = function(e) {
		return arguments.length ? (n = Array.from(e, T), f()) : n.slice();
	}, p.range = function(e) {
		return arguments.length ? (r = Array.from(e), f()) : r.slice();
	}, p.rangeRound = function(e) {
		return r = Array.from(e), i = C, f();
	}, p.clamp = function(e) {
		return arguments.length ? (c = e ? !0 : D, f()) : c !== D;
	}, p.interpolate = function(e) {
		return arguments.length ? (i = e, f()) : i;
	}, p.unknown = function(e) {
		return arguments.length ? (s = e, p) : s;
	}, function(e, t) {
		return a = e, o = t, f();
	};
}
function P() {
	return N()(D, D);
}
function F(e) {
	return Math.max(0, -o(Math.abs(e)));
}
function I(e, t) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(o(t) / 3))) * 3 - o(Math.abs(e)));
}
function L(e, t) {
	return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, o(t) - o(e)) + 1;
}
function R(e, t, n, o) {
	var s = S(e, t, n), c;
	switch (o = i(o ?? ",f"), o.type) {
		case "s":
			var l = Math.max(Math.abs(e), Math.abs(t));
			return o.precision == null && !isNaN(c = I(s, l)) && (o.precision = c), r(o, l);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			o.precision == null && !isNaN(c = L(s, Math.max(Math.abs(e), Math.abs(t)))) && (o.precision = c - (o.type === "e"));
			break;
		case "f":
		case "%": o.precision == null && !isNaN(c = F(s)) && (o.precision = c - (o.type === "%") * 2);
	}
	return a(o);
}
function z(e) {
	var t = e.domain;
	return e.ticks = function(e) {
		var n = t();
		return b(n[0], n[n.length - 1], e ?? 10);
	}, e.tickFormat = function(e, n) {
		var r = t();
		return R(r[0], r[r.length - 1], e ?? 10, n);
	}, e.nice = function(n) {
		n ??= 10;
		var r = t(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, l, u = 10;
		for (s < o && (l = o, o = s, s = l, l = i, i = a, a = l); u-- > 0;) {
			if (l = x(o, s, n), l === c) return r[i] = o, r[a] = s, t(r);
			if (l > 0) o = Math.floor(o / l) * l, s = Math.ceil(s / l) * l;
			else if (l < 0) o = Math.ceil(o * l) / l, s = Math.floor(s * l) / l;
			else break;
			c = l;
		}
		return e;
	}, e;
}
function B() {
	var e = P();
	return e.copy = function() {
		return M(e, B());
	}, n.apply(e, arguments), z(e);
}
//#endregion
export { d as _, b as a, P as c, B as d, s as f, h as g, f as h, m as i, R as l, D as m, C as n, M as o, l as p, T as r, N as s, S as t, z as u };

//# sourceMappingURL=linear-CJvvCWKw-rrRTERsA.js.map