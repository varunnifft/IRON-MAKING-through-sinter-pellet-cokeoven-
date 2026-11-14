import { b as e } from "./string-BvOnLx8K-BsWpS-s0.js";
//#region ../react/build/cubic-Dir1Ko--.js
var t = Math.PI, n = 2 * t, r = 1e-6, i = n - r;
function a(e) {
	this._ += e[0];
	for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function o(e) {
	let t = Math.floor(e);
	if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
	if (t > 15) return a;
	let n = 10 ** t;
	return function(e) {
		this._ += e[0];
		for (let t = 1, r = e.length; t < r; ++t) this._ += Math.round(arguments[t] * n) / n + e[t];
	};
}
var s = class {
	constructor(e) {
		this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = e == null ? a : o(e);
	}
	moveTo(e, t) {
		this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}`;
	}
	closePath() {
		this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
	}
	lineTo(e, t) {
		this._append`L${this._x1 = +e},${this._y1 = +t}`;
	}
	quadraticCurveTo(e, t, n, r) {
		this._append`Q${+e},${+t},${this._x1 = +n},${this._y1 = +r}`;
	}
	bezierCurveTo(e, t, n, r, i, a) {
		this._append`C${+e},${+t},${+n},${+r},${this._x1 = +i},${this._y1 = +a}`;
	}
	arcTo(e, n, i, a, o) {
		if (e = +e, n = +n, i = +i, a = +a, o = +o, o < 0) throw Error(`negative radius: ${o}`);
		let s = this._x1, c = this._y1, l = i - e, u = a - n, d = s - e, f = c - n, p = d * d + f * f;
		if (this._x1 === null) this._append`M${this._x1 = e},${this._y1 = n}`;
		else if (p > r) {
			if (!(Math.abs(f * l - u * d) > r) || !o) this._append`L${this._x1 = e},${this._y1 = n}`;
			else {
				let m = i - s, h = a - c, g = l * l + u * u, _ = m * m + h * h, v = Math.sqrt(g), y = Math.sqrt(p), b = o * Math.tan((t - Math.acos((g + p - _) / (2 * v * y))) / 2), x = b / y, S = b / v;
				Math.abs(x - 1) > r && this._append`L${e + x * d},${n + x * f}`, this._append`A${o},${o},0,0,${+(f * m > d * h)},${this._x1 = e + S * l},${this._y1 = n + S * u}`;
			}
		}
	}
	arc(e, a, o, s, c, l) {
		if (e = +e, a = +a, o = +o, l = !!l, o < 0) throw Error(`negative radius: ${o}`);
		let u = o * Math.cos(s), d = o * Math.sin(s), f = e + u, p = a + d, m = 1 ^ l, h = l ? s - c : c - s;
		this._x1 === null ? this._append`M${f},${p}` : (Math.abs(this._x1 - f) > r || Math.abs(this._y1 - p) > r) && this._append`L${f},${p}`, o && (h < 0 && (h = h % n + n), h > i ? this._append`A${o},${o},0,1,${m},${e - u},${a - d}A${o},${o},0,1,${m},${this._x1 = f},${this._y1 = p}` : h > r && this._append`A${o},${o},0,${+(h >= t)},${m},${this._x1 = e + o * Math.cos(c)},${this._y1 = a + o * Math.sin(c)}`);
	}
	rect(e, t, n, r) {
		this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}h${n = +n}v${+r}h${-n}Z`;
	}
	toString() {
		return this._;
	}
};
function c() {
	return new s();
}
c.prototype = s.prototype;
var l = 180 / Math.PI, u = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function d(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * l,
		skewX: Math.atan(c) * l,
		scaleX: o,
		scaleY: s
	};
}
var f;
function p(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? u : d(t.a, t.b, t.c, t.d, t.e, t.f);
}
function m(e) {
	return e == null || (f ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), f.setAttribute("transform", e), !(e = f.transform.baseVal.consolidate())) ? u : (e = e.matrix, d(e.a, e.b, e.c, e.d, e.e, e.f));
}
function h(t, n, r, i) {
	function a(e) {
		return e.length ? e.pop() + " " : "";
	}
	function o(t, i, a, o, s, c) {
		if (t !== a || i !== o) {
			var l = s.push("translate(", null, n, null, r);
			c.push({
				i: l - 4,
				x: e(t, a)
			}, {
				i: l - 2,
				x: e(i, o)
			});
		} else (a || o) && s.push("translate(" + a + n + o + r);
	}
	function s(t, n, r, o) {
		t === n ? n && r.push(a(r) + "rotate(" + n + i) : (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({
			i: r.push(a(r) + "rotate(", null, i) - 2,
			x: e(t, n)
		}));
	}
	function c(t, n, r, o) {
		t === n ? n && r.push(a(r) + "skewX(" + n + i) : o.push({
			i: r.push(a(r) + "skewX(", null, i) - 2,
			x: e(t, n)
		});
	}
	function l(t, n, r, i, o, s) {
		if (t !== r || n !== i) {
			var c = o.push(a(o) + "scale(", null, ",", null, ")");
			s.push({
				i: c - 4,
				x: e(t, r)
			}, {
				i: c - 2,
				x: e(n, i)
			});
		} else (r !== 1 || i !== 1) && o.push(a(o) + "scale(" + r + "," + i + ")");
	}
	return function(e, n) {
		var r = [], i = [];
		return e = t(e), n = t(n), o(e.translateX, e.translateY, n.translateX, n.translateY, r, i), s(e.rotate, n.rotate, r, i), c(e.skewX, n.skewX, r, i), l(e.scaleX, e.scaleY, n.scaleX, n.scaleY, r, i), e = n = null, function(e) {
			for (var t = -1, n = i.length, a; ++t < n;) r[(a = i[t]).i] = a.x(e);
			return r.join("");
		};
	};
}
var g = h(p, "px, ", "px)", "deg)"), _ = h(m, ", ", ")", ")"), v = { value: () => {} };
function y() {
	for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
		if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw Error("illegal type: " + r);
		n[r] = [];
	}
	return new b(n);
}
function b(e) {
	this._ = e;
}
function x(e, t) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var n = "", r = e.indexOf(".");
		if (r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), e && !t.hasOwnProperty(e)) throw Error("unknown type: " + e);
		return {
			type: e,
			name: n
		};
	});
}
b.prototype = y.prototype = {
	constructor: b,
	on: function(e, t) {
		var n = this._, r = x(e + "", n), i, a = -1, o = r.length;
		if (arguments.length < 2) {
			for (; ++a < o;) if ((i = (e = r[a]).type) && (i = S(n[i], e.name))) return i;
			return;
		}
		if (t != null && typeof t != "function") throw Error("invalid callback: " + t);
		for (; ++a < o;) if (i = (e = r[a]).type) n[i] = C(n[i], e.name, t);
		else if (t == null) for (i in n) n[i] = C(n[i], e.name, null);
		return this;
	},
	copy: function() {
		var e = {}, t = this._;
		for (var n in t) e[n] = t[n].slice();
		return new b(e);
	},
	call: function(e, t) {
		if ((i = arguments.length - 2) > 0) for (var n = Array(i), r = 0, i, a; r < i; ++r) n[r] = arguments[r + 2];
		if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
		for (a = this._[e], r = 0, i = a.length; r < i; ++r) a[r].value.apply(t, n);
	},
	apply: function(e, t, n) {
		if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
		for (var r = this._[e], i = 0, a = r.length; i < a; ++i) r[i].value.apply(t, n);
	}
};
function S(e, t) {
	for (var n = 0, r = e.length, i; n < r; ++n) if ((i = e[n]).name === t) return i.value;
}
function C(e, t, n) {
	for (var r = 0, i = e.length; r < i; ++r) if (e[r].name === t) {
		e[r] = v, e = e.slice(0, r).concat(e.slice(r + 1));
		break;
	}
	return n != null && e.push({
		name: t,
		value: n
	}), e;
}
var w = 0, T = 0, E = 0, D = 1e3, O, k, A = 0, j = 0, M = 0, N = typeof performance == "object" && performance.now ? performance : Date, P = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
	setTimeout(e, 17);
};
function F() {
	return j ||= (P(I), N.now() + M);
}
function I() {
	j = 0;
}
function L() {
	this._call = this._time = this._next = null;
}
L.prototype = R.prototype = {
	constructor: L,
	restart: function(e, t, n) {
		if (typeof e != "function") throw TypeError("callback is not a function");
		n = (n == null ? F() : +n) + (t == null ? 0 : +t), !this._next && k !== this && (k ? k._next = this : O = this, k = this), this._call = e, this._time = n, U();
	},
	stop: function() {
		this._call && (this._call = null, this._time = 1 / 0, U());
	}
};
function R(e, t, n) {
	var r = new L();
	return r.restart(e, t, n), r;
}
function z() {
	F(), ++w;
	for (var e = O, t; e;) (t = j - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
	--w;
}
function B() {
	j = (A = N.now()) + M, w = T = 0;
	try {
		z();
	} finally {
		w = 0, H(), j = 0;
	}
}
function V() {
	var e = N.now(), t = e - A;
	t > D && (M -= t, A = e);
}
function H() {
	for (var e, t = O, n, r = 1 / 0; t;) t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : O = n);
	k = e, U(r);
}
function U(e) {
	w || (T &&= clearTimeout(T), e - j > 24 ? (e < 1 / 0 && (T = setTimeout(B, e - N.now() - M)), E &&= clearInterval(E)) : (E ||= (A = N.now(), setInterval(V, D)), w = 1, P(B)));
}
function W(e) {
	return e * e * e;
}
function G(e) {
	return --e * e * e + 1;
}
function K(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
//#endregion
export { G as a, g as c, K as d, c as i, R as l, L as n, _ as o, s as r, y as s, F as t, W as u };

//# sourceMappingURL=cubic-Dir1Ko---Ccey17jF.js.map