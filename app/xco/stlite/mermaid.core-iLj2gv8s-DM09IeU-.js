import { Ki as e } from "./index-B1FrxEMd-BsPMjC5n.js";
import { r as t } from "./cubic-Dir1Ko---Ccey17jF.js";
import { c as n } from "./transform-B2AI7qp--hg0kwf7R.js";
//#region ../react/build/mermaid.core-iLj2gv8s.js
var r = Object.defineProperty, i = (e, t) => r(e, "name", {
	value: t,
	configurable: !0
}), a = (e, t) => {
	for (var n in t) r(e, n, {
		get: t[n],
		enumerable: !0
	});
}, o = { exports: {} }, s = o.exports, c;
function l() {
	return c || (c = 1, function(e, t) {
		(function(t, n) {
			e.exports = n();
		})(s, function() {
			var e = 1e3, t = 6e4, n = 36e5, r = "millisecond", i = "second", a = "minute", o = "hour", s = "day", c = "week", l = "month", u = "quarter", d = "year", f = "date", p = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, h = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = {
				name: "en",
				weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
				months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
				ordinal: function(e) {
					var t = [
						"th",
						"st",
						"nd",
						"rd"
					], n = e % 100;
					return "[" + e + (t[(n - 20) % 10] || t[n] || t[0]) + "]";
				}
			}, _ = function(e, t, n) {
				var r = String(e);
				return !r || r.length >= t ? e : "" + Array(t + 1 - r.length).join(n) + e;
			}, v = {
				s: _,
				z: function(e) {
					var t = -e.utcOffset(), n = Math.abs(t), r = Math.floor(n / 60), i = n % 60;
					return (t <= 0 ? "+" : "-") + _(r, 2, "0") + ":" + _(i, 2, "0");
				},
				m: function e(t, n) {
					if (t.date() < n.date()) return -e(n, t);
					var r = 12 * (n.year() - t.year()) + (n.month() - t.month()), i = t.clone().add(r, l), a = n - i < 0, o = t.clone().add(r + (a ? -1 : 1), l);
					return +(-(r + (n - i) / (a ? i - o : o - i)) || 0);
				},
				a: function(e) {
					return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
				},
				p: function(e) {
					return {
						M: l,
						y: d,
						w: c,
						d: s,
						D: f,
						h: o,
						m: a,
						s: i,
						ms: r,
						Q: u
					}[e] || String(e || "").toLowerCase().replace(/s$/, "");
				},
				u: function(e) {
					return e === void 0;
				}
			}, y = "en", b = {};
			b[y] = g;
			var x = "$isDayjsObject", S = function(e) {
				return e instanceof E || !(!e || !e[x]);
			}, C = function e(t, n, r) {
				var i;
				if (!t) return y;
				if (typeof t == "string") {
					var a = t.toLowerCase();
					b[a] && (i = a), n && (b[a] = n, i = a);
					var o = t.split("-");
					if (!i && o.length > 1) return e(o[0]);
				} else {
					var s = t.name;
					b[s] = t, i = s;
				}
				return !r && i && (y = i), i || !r && y;
			}, w = function(e, t) {
				if (S(e)) return e.clone();
				var n = typeof t == "object" ? t : {};
				return n.date = e, n.args = arguments, new E(n);
			}, T = v;
			T.l = C, T.i = S, T.w = function(e, t) {
				return w(e, {
					locale: t.$L,
					utc: t.$u,
					x: t.$x,
					$offset: t.$offset
				});
			};
			var E = function() {
				function g(e) {
					this.$L = C(e.locale, null, !0), this.parse(e), this.$x = this.$x || e.x || {}, this[x] = !0;
				}
				var _ = g.prototype;
				return _.parse = function(e) {
					this.$d = function(e) {
						var t = e.date, n = e.utc;
						if (t === null) return /* @__PURE__ */ new Date(NaN);
						if (T.u(t)) return /* @__PURE__ */ new Date();
						if (t instanceof Date) return new Date(t);
						if (typeof t == "string" && !/Z$/i.test(t)) {
							var r = t.match(m);
							if (r) {
								var i = r[2] - 1 || 0, a = (r[7] || "0").substring(0, 3);
								return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, a)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, a);
							}
						}
						return new Date(t);
					}(e), this.init();
				}, _.init = function() {
					var e = this.$d;
					this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds();
				}, _.$utils = function() {
					return T;
				}, _.isValid = function() {
					return this.$d.toString() !== p;
				}, _.isSame = function(e, t) {
					var n = w(e);
					return this.startOf(t) <= n && n <= this.endOf(t);
				}, _.isAfter = function(e, t) {
					return w(e) < this.startOf(t);
				}, _.isBefore = function(e, t) {
					return this.endOf(t) < w(e);
				}, _.$g = function(e, t, n) {
					return T.u(e) ? this[t] : this.set(n, e);
				}, _.unix = function() {
					return Math.floor(this.valueOf() / 1e3);
				}, _.valueOf = function() {
					return this.$d.getTime();
				}, _.startOf = function(e, t) {
					var n = this, r = !!T.u(t) || t, u = T.p(e), p = function(e, t) {
						var i = T.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e), n);
						return r ? i : i.endOf(s);
					}, m = function(e, t) {
						return T.w(n.toDate()[e].apply(n.toDate("s"), (r ? [
							0,
							0,
							0,
							0
						] : [
							23,
							59,
							59,
							999
						]).slice(t)), n);
					}, h = this.$W, g = this.$M, _ = this.$D, v = "set" + (this.$u ? "UTC" : "");
					switch (u) {
						case d: return r ? p(1, 0) : p(31, 11);
						case l: return r ? p(1, g) : p(0, g + 1);
						case c:
							var y = this.$locale().weekStart || 0, b = (h < y ? h + 7 : h) - y;
							return p(r ? _ - b : _ + (6 - b), g);
						case s:
						case f: return m(v + "Hours", 0);
						case o: return m(v + "Minutes", 1);
						case a: return m(v + "Seconds", 2);
						case i: return m(v + "Milliseconds", 3);
						default: return this.clone();
					}
				}, _.endOf = function(e) {
					return this.startOf(e, !1);
				}, _.$set = function(e, t) {
					var n, c = T.p(e), u = "set" + (this.$u ? "UTC" : ""), p = (n = {}, n[s] = u + "Date", n[f] = u + "Date", n[l] = u + "Month", n[d] = u + "FullYear", n[o] = u + "Hours", n[a] = u + "Minutes", n[i] = u + "Seconds", n[r] = u + "Milliseconds", n)[c], m = c === s ? this.$D + (t - this.$W) : t;
					if (c === l || c === d) {
						var h = this.clone().set(f, 1);
						h.$d[p](m), h.init(), this.$d = h.set(f, Math.min(this.$D, h.daysInMonth())).$d;
					} else p && this.$d[p](m);
					return this.init(), this;
				}, _.set = function(e, t) {
					return this.clone().$set(e, t);
				}, _.get = function(e) {
					return this[T.p(e)]();
				}, _.add = function(r, u) {
					var f, p = this;
					r = Number(r);
					var m = T.p(u), h = function(e) {
						var t = w(p);
						return T.w(t.date(t.date() + Math.round(e * r)), p);
					};
					if (m === l) return this.set(l, this.$M + r);
					if (m === d) return this.set(d, this.$y + r);
					if (m === s) return h(1);
					if (m === c) return h(7);
					var g = (f = {}, f[a] = t, f[o] = n, f[i] = e, f)[m] || 1, _ = this.$d.getTime() + r * g;
					return T.w(_, this);
				}, _.subtract = function(e, t) {
					return this.add(-1 * e, t);
				}, _.format = function(e) {
					var t = this, n = this.$locale();
					if (!this.isValid()) return n.invalidDate || p;
					var r = e || "YYYY-MM-DDTHH:mm:ssZ", i = T.z(this), a = this.$H, o = this.$m, s = this.$M, c = n.weekdays, l = n.months, u = n.meridiem, d = function(e, n, i, a) {
						return e && (e[n] || e(t, r)) || i[n].slice(0, a);
					}, f = function(e) {
						return T.s(a % 12 || 12, e, "0");
					}, m = u || function(e, t, n) {
						var r = e < 12 ? "AM" : "PM";
						return n ? r.toLowerCase() : r;
					};
					return r.replace(h, function(e, r) {
						return r || function(e) {
							switch (e) {
								case "YY": return String(t.$y).slice(-2);
								case "YYYY": return T.s(t.$y, 4, "0");
								case "M": return s + 1;
								case "MM": return T.s(s + 1, 2, "0");
								case "MMM": return d(n.monthsShort, s, l, 3);
								case "MMMM": return d(l, s);
								case "D": return t.$D;
								case "DD": return T.s(t.$D, 2, "0");
								case "d": return String(t.$W);
								case "dd": return d(n.weekdaysMin, t.$W, c, 2);
								case "ddd": return d(n.weekdaysShort, t.$W, c, 3);
								case "dddd": return c[t.$W];
								case "H": return String(a);
								case "HH": return T.s(a, 2, "0");
								case "h": return f(1);
								case "hh": return f(2);
								case "a": return m(a, o, !0);
								case "A": return m(a, o, !1);
								case "m": return String(o);
								case "mm": return T.s(o, 2, "0");
								case "s": return String(t.$s);
								case "ss": return T.s(t.$s, 2, "0");
								case "SSS": return T.s(t.$ms, 3, "0");
								case "Z": return i;
							}
							return null;
						}(e) || i.replace(":", "");
					});
				}, _.utcOffset = function() {
					return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
				}, _.diff = function(r, f, p) {
					var m, h = this, g = T.p(f), _ = w(r), v = (_.utcOffset() - this.utcOffset()) * t, y = this - _, b = function() {
						return T.m(h, _);
					};
					switch (g) {
						case d:
							m = b() / 12;
							break;
						case l:
							m = b();
							break;
						case u:
							m = b() / 3;
							break;
						case c:
							m = (y - v) / 6048e5;
							break;
						case s:
							m = (y - v) / 864e5;
							break;
						case o:
							m = y / n;
							break;
						case a:
							m = y / t;
							break;
						case i:
							m = y / e;
							break;
						default: m = y;
					}
					return p ? m : T.a(m);
				}, _.daysInMonth = function() {
					return this.endOf(l).$D;
				}, _.$locale = function() {
					return b[this.$L];
				}, _.locale = function(e, t) {
					if (!e) return this.$L;
					var n = this.clone(), r = C(e, t, !0);
					return r && (n.$L = r), n;
				}, _.clone = function() {
					return T.w(this.$d, this);
				}, _.toDate = function() {
					return new Date(this.valueOf());
				}, _.toJSON = function() {
					return this.isValid() ? this.toISOString() : null;
				}, _.toISOString = function() {
					return this.$d.toISOString();
				}, _.toString = function() {
					return this.$d.toUTCString();
				}, g;
			}(), D = E.prototype;
			return w.prototype = D, [
				["$ms", r],
				["$s", i],
				["$m", a],
				["$H", o],
				["$W", s],
				["$M", l],
				["$y", d],
				["$D", f]
			].forEach(function(e) {
				D[e[1]] = function(t) {
					return this.$g(t, e[0], e[1]);
				};
			}), w.extend = function(e, t) {
				return e.$i ||= (e(t, E, w), !0), w;
			}, w.locale = C, w.isDayjs = S, w.unix = function(e) {
				return w(1e3 * e);
			}, w.en = b[y], w.Ls = b, w.p = {}, w;
		});
	}(o)), o.exports;
}
var u = l(), d = /* @__PURE__ */ e(u), f = {
	trace: 0,
	debug: 1,
	info: 2,
	warn: 3,
	error: 4,
	fatal: 5
}, p = {
	trace: /* @__PURE__ */ i((...e) => {}, "trace"),
	debug: /* @__PURE__ */ i((...e) => {}, "debug"),
	info: /* @__PURE__ */ i((...e) => {}, "info"),
	warn: /* @__PURE__ */ i((...e) => {}, "warn"),
	error: /* @__PURE__ */ i((...e) => {}, "error"),
	fatal: /* @__PURE__ */ i((...e) => {}, "fatal")
}, m = /* @__PURE__ */ i(function(e = "fatal") {
	let t = f.fatal;
	typeof e == "string" ? e.toLowerCase() in f && (t = f[e]) : typeof e == "number" && (t = e), p.trace = () => {}, p.debug = () => {}, p.info = () => {}, p.warn = () => {}, p.error = () => {}, p.fatal = () => {}, t <= f.fatal && (p.fatal = console.error ? console.error.bind(console, h("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", h("FATAL"))), t <= f.error && (p.error = console.error ? console.error.bind(console, h("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", h("ERROR"))), t <= f.warn && (p.warn = console.warn ? console.warn.bind(console, h("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", h("WARN"))), t <= f.info && (p.info = console.info ? console.info.bind(console, h("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", h("INFO"))), t <= f.debug && (p.debug = console.debug ? console.debug.bind(console, h("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", h("DEBUG"))), t <= f.trace && (p.trace = console.debug ? console.debug.bind(console, h("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", h("TRACE")));
}, "setLogLevel"), h = /* @__PURE__ */ i((e) => `%c${d().format("ss.SSS")} : ${e} : `, "format"), g = {
	min: {
		r: 0,
		g: 0,
		b: 0,
		s: 0,
		l: 0,
		a: 0
	},
	max: {
		r: 255,
		g: 255,
		b: 255,
		h: 360,
		s: 100,
		l: 100,
		a: 1
	},
	clamp: {
		r: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
		g: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
		b: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
		h: (e) => e % 360,
		s: (e) => e >= 100 ? 100 : e < 0 ? 0 : e,
		l: (e) => e >= 100 ? 100 : e < 0 ? 0 : e,
		a: (e) => e >= 1 ? 1 : e < 0 ? 0 : e
	},
	toLinear: (e) => {
		let t = e / 255;
		return e > .03928 ? ((t + .055) / 1.055) ** 2.4 : t / 12.92;
	},
	hue2rgb: (e, t, n) => (n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e),
	hsl2rgb: ({ h: e, s: t, l: n }, r) => {
		if (!t) return n * 2.55;
		e /= 360, t /= 100, n /= 100;
		let i = n < .5 ? n * (1 + t) : n + t - n * t, a = 2 * n - i;
		switch (r) {
			case "r": return g.hue2rgb(a, i, e + 1 / 3) * 255;
			case "g": return g.hue2rgb(a, i, e) * 255;
			case "b": return g.hue2rgb(a, i, e - 1 / 3) * 255;
		}
	},
	rgb2hsl: ({ r: e, g: t, b: n }, r) => {
		e /= 255, t /= 255, n /= 255;
		let i = Math.max(e, t, n), a = Math.min(e, t, n), o = (i + a) / 2;
		if (r === "l") return o * 100;
		if (i === a) return 0;
		let s = i - a, c = o > .5 ? s / (2 - i - a) : s / (i + a);
		if (r === "s") return c * 100;
		switch (i) {
			case e: return ((t - n) / s + (t < n ? 6 : 0)) * 60;
			case t: return ((n - e) / s + 2) * 60;
			case n: return ((e - t) / s + 4) * 60;
			default: return -1;
		}
	}
}, _ = {
	channel: g,
	lang: {
		clamp: (e, t, n) => t > n ? Math.min(t, Math.max(n, e)) : Math.min(n, Math.max(t, e)),
		round: (e) => Math.round(e * 1e10) / 1e10
	},
	unit: { dec2hex: (e) => {
		let t = Math.round(e).toString(16);
		return t.length > 1 ? t : `0${t}`;
	} }
}, v = {};
for (let e = 0; e <= 255; e++) v[e] = _.unit.dec2hex(e);
var y = {
	ALL: 0,
	RGB: 1,
	HSL: 2
}, b = class {
	constructor() {
		this.type = y.ALL;
	}
	get() {
		return this.type;
	}
	set(e) {
		if (this.type && this.type !== e) throw Error("Cannot change both RGB and HSL channels at the same time");
		this.type = e;
	}
	reset() {
		this.type = y.ALL;
	}
	is(e) {
		return this.type === e;
	}
}, x = new class {
	constructor(e, t) {
		this.color = t, this.changed = !1, this.data = e, this.type = new b();
	}
	set(e, t) {
		return this.color = t, this.changed = !1, this.data = e, this.type.type = y.ALL, this;
	}
	_ensureHSL() {
		let e = this.data, { h: t, s: n, l: r } = e;
		t === void 0 && (e.h = _.channel.rgb2hsl(e, "h")), n === void 0 && (e.s = _.channel.rgb2hsl(e, "s")), r === void 0 && (e.l = _.channel.rgb2hsl(e, "l"));
	}
	_ensureRGB() {
		let e = this.data, { r: t, g: n, b: r } = e;
		t === void 0 && (e.r = _.channel.hsl2rgb(e, "r")), n === void 0 && (e.g = _.channel.hsl2rgb(e, "g")), r === void 0 && (e.b = _.channel.hsl2rgb(e, "b"));
	}
	get r() {
		let e = this.data, t = e.r;
		return !this.type.is(y.HSL) && t !== void 0 ? t : (this._ensureHSL(), _.channel.hsl2rgb(e, "r"));
	}
	get g() {
		let e = this.data, t = e.g;
		return !this.type.is(y.HSL) && t !== void 0 ? t : (this._ensureHSL(), _.channel.hsl2rgb(e, "g"));
	}
	get b() {
		let e = this.data, t = e.b;
		return !this.type.is(y.HSL) && t !== void 0 ? t : (this._ensureHSL(), _.channel.hsl2rgb(e, "b"));
	}
	get h() {
		let e = this.data, t = e.h;
		return !this.type.is(y.RGB) && t !== void 0 ? t : (this._ensureRGB(), _.channel.rgb2hsl(e, "h"));
	}
	get s() {
		let e = this.data, t = e.s;
		return !this.type.is(y.RGB) && t !== void 0 ? t : (this._ensureRGB(), _.channel.rgb2hsl(e, "s"));
	}
	get l() {
		let e = this.data, t = e.l;
		return !this.type.is(y.RGB) && t !== void 0 ? t : (this._ensureRGB(), _.channel.rgb2hsl(e, "l"));
	}
	get a() {
		return this.data.a;
	}
	set r(e) {
		this.type.set(y.RGB), this.changed = !0, this.data.r = e;
	}
	set g(e) {
		this.type.set(y.RGB), this.changed = !0, this.data.g = e;
	}
	set b(e) {
		this.type.set(y.RGB), this.changed = !0, this.data.b = e;
	}
	set h(e) {
		this.type.set(y.HSL), this.changed = !0, this.data.h = e;
	}
	set s(e) {
		this.type.set(y.HSL), this.changed = !0, this.data.s = e;
	}
	set l(e) {
		this.type.set(y.HSL), this.changed = !0, this.data.l = e;
	}
	set a(e) {
		this.changed = !0, this.data.a = e;
	}
}({
	r: 0,
	g: 0,
	b: 0,
	a: 0
}, "transparent"), S = {
	re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
	parse: (e) => {
		if (e.charCodeAt(0) !== 35) return;
		let t = e.match(S.re);
		if (!t) return;
		let n = t[1], r = parseInt(n, 16), i = n.length, a = i % 4 == 0, o = i > 4, s = o ? 1 : 17, c = o ? 8 : 4, l = a ? 0 : -1, u = o ? 255 : 15;
		return x.set({
			r: (r >> c * (l + 3) & u) * s,
			g: (r >> c * (l + 2) & u) * s,
			b: (r >> c * (l + 1) & u) * s,
			a: a ? (r & u) * s / 255 : 1
		}, e);
	},
	stringify: (e) => {
		let { r: t, g: n, b: r, a: i } = e;
		return i < 1 ? `#${v[Math.round(t)]}${v[Math.round(n)]}${v[Math.round(r)]}${v[Math.round(i * 255)]}` : `#${v[Math.round(t)]}${v[Math.round(n)]}${v[Math.round(r)]}`;
	}
}, C = {
	re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
	hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
	_hue2deg: (e) => {
		let t = e.match(C.hueRe);
		if (t) {
			let [, e, n] = t;
			switch (n) {
				case "grad": return _.channel.clamp.h(parseFloat(e) * .9);
				case "rad": return _.channel.clamp.h(parseFloat(e) * 180 / Math.PI);
				case "turn": return _.channel.clamp.h(parseFloat(e) * 360);
			}
		}
		return _.channel.clamp.h(parseFloat(e));
	},
	parse: (e) => {
		let t = e.charCodeAt(0);
		if (t !== 104 && t !== 72) return;
		let n = e.match(C.re);
		if (!n) return;
		let [, r, i, a, o, s] = n;
		return x.set({
			h: C._hue2deg(r),
			s: _.channel.clamp.s(parseFloat(i)),
			l: _.channel.clamp.l(parseFloat(a)),
			a: o ? _.channel.clamp.a(s ? parseFloat(o) / 100 : parseFloat(o)) : 1
		}, e);
	},
	stringify: (e) => {
		let { h: t, s: n, l: r, a: i } = e;
		return i < 1 ? `hsla(${_.lang.round(t)}, ${_.lang.round(n)}%, ${_.lang.round(r)}%, ${i})` : `hsl(${_.lang.round(t)}, ${_.lang.round(n)}%, ${_.lang.round(r)}%)`;
	}
}, w = {
	colors: {
		aliceblue: "#f0f8ff",
		antiquewhite: "#faebd7",
		aqua: "#00ffff",
		aquamarine: "#7fffd4",
		azure: "#f0ffff",
		beige: "#f5f5dc",
		bisque: "#ffe4c4",
		black: "#000000",
		blanchedalmond: "#ffebcd",
		blue: "#0000ff",
		blueviolet: "#8a2be2",
		brown: "#a52a2a",
		burlywood: "#deb887",
		cadetblue: "#5f9ea0",
		chartreuse: "#7fff00",
		chocolate: "#d2691e",
		coral: "#ff7f50",
		cornflowerblue: "#6495ed",
		cornsilk: "#fff8dc",
		crimson: "#dc143c",
		cyanaqua: "#00ffff",
		darkblue: "#00008b",
		darkcyan: "#008b8b",
		darkgoldenrod: "#b8860b",
		darkgray: "#a9a9a9",
		darkgreen: "#006400",
		darkgrey: "#a9a9a9",
		darkkhaki: "#bdb76b",
		darkmagenta: "#8b008b",
		darkolivegreen: "#556b2f",
		darkorange: "#ff8c00",
		darkorchid: "#9932cc",
		darkred: "#8b0000",
		darksalmon: "#e9967a",
		darkseagreen: "#8fbc8f",
		darkslateblue: "#483d8b",
		darkslategray: "#2f4f4f",
		darkslategrey: "#2f4f4f",
		darkturquoise: "#00ced1",
		darkviolet: "#9400d3",
		deeppink: "#ff1493",
		deepskyblue: "#00bfff",
		dimgray: "#696969",
		dimgrey: "#696969",
		dodgerblue: "#1e90ff",
		firebrick: "#b22222",
		floralwhite: "#fffaf0",
		forestgreen: "#228b22",
		fuchsia: "#ff00ff",
		gainsboro: "#dcdcdc",
		ghostwhite: "#f8f8ff",
		gold: "#ffd700",
		goldenrod: "#daa520",
		gray: "#808080",
		green: "#008000",
		greenyellow: "#adff2f",
		grey: "#808080",
		honeydew: "#f0fff0",
		hotpink: "#ff69b4",
		indianred: "#cd5c5c",
		indigo: "#4b0082",
		ivory: "#fffff0",
		khaki: "#f0e68c",
		lavender: "#e6e6fa",
		lavenderblush: "#fff0f5",
		lawngreen: "#7cfc00",
		lemonchiffon: "#fffacd",
		lightblue: "#add8e6",
		lightcoral: "#f08080",
		lightcyan: "#e0ffff",
		lightgoldenrodyellow: "#fafad2",
		lightgray: "#d3d3d3",
		lightgreen: "#90ee90",
		lightgrey: "#d3d3d3",
		lightpink: "#ffb6c1",
		lightsalmon: "#ffa07a",
		lightseagreen: "#20b2aa",
		lightskyblue: "#87cefa",
		lightslategray: "#778899",
		lightslategrey: "#778899",
		lightsteelblue: "#b0c4de",
		lightyellow: "#ffffe0",
		lime: "#00ff00",
		limegreen: "#32cd32",
		linen: "#faf0e6",
		magenta: "#ff00ff",
		maroon: "#800000",
		mediumaquamarine: "#66cdaa",
		mediumblue: "#0000cd",
		mediumorchid: "#ba55d3",
		mediumpurple: "#9370db",
		mediumseagreen: "#3cb371",
		mediumslateblue: "#7b68ee",
		mediumspringgreen: "#00fa9a",
		mediumturquoise: "#48d1cc",
		mediumvioletred: "#c71585",
		midnightblue: "#191970",
		mintcream: "#f5fffa",
		mistyrose: "#ffe4e1",
		moccasin: "#ffe4b5",
		navajowhite: "#ffdead",
		navy: "#000080",
		oldlace: "#fdf5e6",
		olive: "#808000",
		olivedrab: "#6b8e23",
		orange: "#ffa500",
		orangered: "#ff4500",
		orchid: "#da70d6",
		palegoldenrod: "#eee8aa",
		palegreen: "#98fb98",
		paleturquoise: "#afeeee",
		palevioletred: "#db7093",
		papayawhip: "#ffefd5",
		peachpuff: "#ffdab9",
		peru: "#cd853f",
		pink: "#ffc0cb",
		plum: "#dda0dd",
		powderblue: "#b0e0e6",
		purple: "#800080",
		rebeccapurple: "#663399",
		red: "#ff0000",
		rosybrown: "#bc8f8f",
		royalblue: "#4169e1",
		saddlebrown: "#8b4513",
		salmon: "#fa8072",
		sandybrown: "#f4a460",
		seagreen: "#2e8b57",
		seashell: "#fff5ee",
		sienna: "#a0522d",
		silver: "#c0c0c0",
		skyblue: "#87ceeb",
		slateblue: "#6a5acd",
		slategray: "#708090",
		slategrey: "#708090",
		snow: "#fffafa",
		springgreen: "#00ff7f",
		tan: "#d2b48c",
		teal: "#008080",
		thistle: "#d8bfd8",
		transparent: "#00000000",
		turquoise: "#40e0d0",
		violet: "#ee82ee",
		wheat: "#f5deb3",
		white: "#ffffff",
		whitesmoke: "#f5f5f5",
		yellow: "#ffff00",
		yellowgreen: "#9acd32"
	},
	parse: (e) => {
		e = e.toLowerCase();
		let t = w.colors[e];
		if (t) return S.parse(t);
	},
	stringify: (e) => {
		let t = S.stringify(e);
		for (let e in w.colors) if (w.colors[e] === t) return e;
	}
}, T = {
	re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
	parse: (e) => {
		let t = e.charCodeAt(0);
		if (t !== 114 && t !== 82) return;
		let n = e.match(T.re);
		if (!n) return;
		let [, r, i, a, o, s, c, l, u] = n;
		return x.set({
			r: _.channel.clamp.r(i ? parseFloat(r) * 2.55 : parseFloat(r)),
			g: _.channel.clamp.g(o ? parseFloat(a) * 2.55 : parseFloat(a)),
			b: _.channel.clamp.b(c ? parseFloat(s) * 2.55 : parseFloat(s)),
			a: l ? _.channel.clamp.a(u ? parseFloat(l) / 100 : parseFloat(l)) : 1
		}, e);
	},
	stringify: (e) => {
		let { r: t, g: n, b: r, a: i } = e;
		return i < 1 ? `rgba(${_.lang.round(t)}, ${_.lang.round(n)}, ${_.lang.round(r)}, ${_.lang.round(i)})` : `rgb(${_.lang.round(t)}, ${_.lang.round(n)}, ${_.lang.round(r)})`;
	}
}, E = {
	format: {
		keyword: w,
		hex: S,
		rgb: T,
		rgba: T,
		hsl: C,
		hsla: C
	},
	parse: (e) => {
		if (typeof e != "string") return e;
		let t = S.parse(e) || T.parse(e) || C.parse(e) || w.parse(e);
		if (t) return t;
		throw Error(`Unsupported color format: "${e}"`);
	},
	stringify: (e) => !e.changed && e.color ? e.color : e.type.is(y.HSL) || e.data.r === void 0 ? C.stringify(e) : e.a < 1 || !Number.isInteger(e.r) || !Number.isInteger(e.g) || !Number.isInteger(e.b) ? T.stringify(e) : S.stringify(e)
}, D = (e, t) => {
	let n = E.parse(e);
	for (let e in t) n[e] = _.channel.clamp[e](t[e]);
	return E.stringify(n);
}, O = (e, t, n = 0, r = 1) => {
	if (typeof e != "number") return D(e, { a: t });
	let i = x.set({
		r: _.channel.clamp.r(e),
		g: _.channel.clamp.g(t),
		b: _.channel.clamp.b(n),
		a: _.channel.clamp.a(r)
	});
	return E.stringify(i);
}, k = (e) => {
	let { r: t, g: n, b: r } = E.parse(e), i = .2126 * _.channel.toLinear(t) + .7152 * _.channel.toLinear(n) + .0722 * _.channel.toLinear(r);
	return _.lang.round(i);
}, ee = (e) => k(e) >= .5, A = (e) => !ee(e), te = (e, t, n) => {
	let r = E.parse(e), i = r[t], a = _.channel.clamp[t](i + n);
	return i !== a && (r[t] = a), E.stringify(r);
}, j = (e, t) => te(e, "l", t), M = (e, t) => te(e, "l", -t), N = (e, t) => {
	let n = E.parse(e), r = {};
	for (let e in t) t[e] && (r[e] = n[e] + t[e]);
	return D(e, r);
}, ne = (e, t, n = 50) => {
	let { r, g: i, b: a, a: o } = E.parse(e), { r: s, g: c, b: l, a: u } = E.parse(t), d = n / 100, f = d * 2 - 1, p = o - u, m = ((f * p === -1 ? f : (f + p) / (1 + f * p)) + 1) / 2, h = 1 - m;
	return O(r * m + s * h, i * m + c * h, a * m + l * h, o * d + u * (1 - d));
}, P = (e, t = 100) => {
	let n = E.parse(e);
	return n.r = 255 - n.r, n.g = 255 - n.g, n.b = 255 - n.b, ne(n, e, t);
};
function re(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function F(e) {
	if (Array.isArray(e)) return e;
}
function ie(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t !== 0) for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function ae() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function oe(e, t) {
	return F(e) || ie(e, t) || se(e, t) || ae();
}
function se(e, t) {
	if (e) {
		if (typeof e == "string") return re(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? re(e, t) : void 0;
	}
}
var ce = Object.entries, le = Object.setPrototypeOf, ue = Object.isFrozen, de = Object.getPrototypeOf, fe = Object.getOwnPropertyDescriptor, pe = Object.freeze, me = Object.seal, he = Object.create, ge = typeof Reflect < "u" && Reflect, I = ge.apply, _e = ge.construct;
pe ||= function(e) {
	return e;
}, me ||= function(e) {
	return e;
}, I ||= function(e, t) {
	var n = [...arguments].slice(2);
	return e.apply(t, n);
}, _e ||= function(e) {
	return new e(...[...arguments].slice(1));
};
var ve = L(Array.prototype.forEach), ye = L(Array.prototype.lastIndexOf), be = L(Array.prototype.pop), xe = L(Array.prototype.push), Se = L(Array.prototype.splice), Ce = Array.isArray, we = L(String.prototype.toLowerCase), Te = L(String.prototype.toString), Ee = L(String.prototype.match), De = L(String.prototype.replace), Oe = L(String.prototype.indexOf), ke = L(String.prototype.trim), Ae = L(Number.prototype.toString), je = L(Boolean.prototype.toString), Me = typeof BigInt > "u" ? null : L(BigInt.prototype.toString), Ne = typeof Symbol > "u" ? null : L(Symbol.prototype.toString), Pe = L(Object.prototype.hasOwnProperty), Fe = L(Object.prototype.toString), Ie = L(RegExp.prototype.test), Le = Re(TypeError);
function L(e) {
	return function(t) {
		t instanceof RegExp && (t.lastIndex = 0);
		var n = [...arguments].slice(1);
		return I(e, t, n);
	};
}
function Re(e) {
	return function() {
		return _e(e, [...arguments]);
	};
}
function R(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : we;
	if (le && le(e, null), !Ce(t)) return e;
	let r = t.length;
	for (; r--;) {
		let i = t[r];
		if (typeof i == "string") {
			let e = n(i);
			e !== i && (ue(t) || (t[r] = e), i = e);
		}
		e[i] = !0;
	}
	return e;
}
function ze(e) {
	for (let t = 0; t < e.length; t++) Pe(e, t) || (e[t] = null);
	return e;
}
function Be(e) {
	let t = he(null);
	for (let r of ce(e)) {
		var n = oe(r, 2);
		let i = n[0], a = n[1];
		Pe(e, i) && (t[i] = Ce(a) ? ze(a) : a && typeof a == "object" && a.constructor === Object ? Be(a) : a);
	}
	return t;
}
function Ve(e) {
	switch (typeof e) {
		case "string": return e;
		case "number": return Ae(e);
		case "boolean": return je(e);
		case "bigint": return Me ? Me(e) : "0";
		case "symbol": return Ne ? Ne(e) : "Symbol()";
		case "undefined": return Fe(e);
		case "function":
		case "object": {
			if (e === null) return Fe(e);
			let t = e, n = He(t, "toString");
			if (typeof n == "function") {
				let e = n(t);
				return typeof e == "string" ? e : Fe(e);
			}
			return Fe(e);
		}
		default: return Fe(e);
	}
}
function He(e, t) {
	for (; e !== null;) {
		let n = fe(e, t);
		if (n) {
			if (n.get) return L(n.get);
			if (typeof n.value == "function") return L(n.value);
		}
		e = de(e);
	}
	function n() {
		return null;
	}
	return n;
}
function Ue(e) {
	try {
		return Ie(e, ""), !0;
	} catch {
		return !1;
	}
}
var We = pe(/* @__PURE__ */ "a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr".split(".")), Ge = pe(/* @__PURE__ */ "svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern".split(".")), Ke = pe([
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence"
]), qe = pe([
	"animate",
	"color-profile",
	"cursor",
	"discard",
	"font-face",
	"font-face-format",
	"font-face-name",
	"font-face-src",
	"font-face-uri",
	"foreignobject",
	"hatch",
	"hatchpath",
	"mesh",
	"meshgradient",
	"meshpatch",
	"meshrow",
	"missing-glyph",
	"script",
	"set",
	"solidcolor",
	"unknown",
	"use"
]), Je = pe(/* @__PURE__ */ "math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts".split(".")), Ye = pe([
	"maction",
	"maligngroup",
	"malignmark",
	"mlongdiv",
	"mscarries",
	"mscarry",
	"msgroup",
	"mstack",
	"msline",
	"msrow",
	"semantics",
	"annotation",
	"annotation-xml",
	"mprescripts",
	"none"
]), Xe = pe(["#text"]), Ze = pe(/* @__PURE__ */ "accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns".split(".")), Qe = pe(/* @__PURE__ */ "accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dominant-baseline.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.pointer-events.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-orientation.text-rendering.textlength.type.u1.u2.unicode.values.vector-effect.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan".split(".")), $e = pe(/* @__PURE__ */ "accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns".split(".")), et = pe([
	"xlink:href",
	"xml:id",
	"xlink:title",
	"xml:space",
	"xmlns:xlink"
]), tt = me(/{{[\w\W]*|^[\w\W]*}}/g), nt = me(/<%[\w\W]*|^[\w\W]*%>/g), rt = me(/\${[\w\W]*/g), it = me(/^data-[\-\w.\u00B7-\uFFFF]+$/), at = me(/^aria-[\-\w]+$/), ot = me(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), st = me(/^(?:\w+script|data):/i), ct = me(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), lt = me(/^html$/i), ut = me(/^[a-z][.\w]*(-[.\w]+)+$/i), dt = me(/<[/\w!]/g), ft = me(/<[/\w]/g), pt = me(/<\/no(script|embed|frames)/i), mt = me(/\/>/i), ht = {
	element: 1,
	attribute: 2,
	text: 3,
	cdataSection: 4,
	entityReference: 5,
	entityNode: 6,
	processingInstruction: 7,
	comment: 8,
	document: 9,
	documentType: 10,
	documentFragment: 11,
	notation: 12
}, gt = [
	"style",
	"script",
	"xmp",
	"iframe",
	"noembed",
	"noframes",
	"plaintext",
	"noscript"
], _t = pe(R({}, gt)), vt = function() {
	let e = {};
	return ve(gt, (t) => {
		e[t] = me(RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
	}), pe(e);
}(), yt = function() {
	return typeof window > "u" ? null : window;
}, bt = function(e, t) {
	if (typeof e != "object" || typeof e.createPolicy != "function") return null;
	let n = null, r = "data-tt-policy-suffix";
	t && t.hasAttribute(r) && (n = t.getAttribute(r));
	let i = "dompurify" + (n ? "#" + n : "");
	try {
		return e.createPolicy(i, {
			createHTML(e) {
				return e;
			},
			createScriptURL(e) {
				return e;
			}
		});
	} catch {
		return console.warn("TrustedTypes policy " + i + " could not be created."), null;
	}
}, xt = function() {
	return {
		afterSanitizeAttributes: [],
		afterSanitizeElements: [],
		afterSanitizeShadowDOM: [],
		beforeSanitizeAttributes: [],
		beforeSanitizeElements: [],
		beforeSanitizeShadowDOM: [],
		uponSanitizeAttribute: [],
		uponSanitizeElement: [],
		uponSanitizeShadowNode: []
	};
}, St = function(e, t, n, r) {
	return Pe(e, t) && Ce(e[t]) ? R(r.base ? Be(r.base) : {}, e[t], r.transform) : n;
}, Ct = function(e, t, n) {
	let r = Pe(e, t) ? e[t] : void 0;
	return r && typeof r == "object" ? Be(r) : n();
};
function wt() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : yt(), t = (e) => wt(e);
	if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== ht.document || !e.Element) return t.isSupported = !1, t;
	let n = e.document, r = n, i = r.currentScript;
	e.DocumentFragment;
	let a = e.HTMLTemplateElement, o = e.Node, s = e.Element, c = e.NodeFilter;
	e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
	let l = e.DOMParser, u = e.trustedTypes, d = s.prototype, f = He(d, "cloneNode"), p = He(d, "remove"), m = He(d, "nextSibling"), h = He(d, "childNodes"), g = He(d, "parentNode"), _ = He(d, "shadowRoot"), v = He(d, "attributes"), y = o && o.prototype ? He(o.prototype, "nodeType") : null, b = o && o.prototype ? He(o.prototype, "nodeName") : null, x = o && o.prototype ? He(o.prototype, "ownerDocument") : null, S = function(e) {
		return y ? y(e) : e.nodeType;
	}, C = function(e) {
		return b ? b(e) : e.nodeName;
	};
	if (typeof a == "function") {
		let e = n.createElement("template");
		e.content && e.content.ownerDocument && (n = e.content.ownerDocument);
	}
	let w, T = "", E, D = !1, O = 0, k = function() {
		if (O > 0) throw Le("A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the \"DOMPurify and Trusted Types\" section of the README.");
	}, ee = function(e) {
		k(), O++;
		try {
			return w.createHTML(e);
		} finally {
			O--;
		}
	}, A = function(e) {
		k(), O++;
		try {
			return w.createScriptURL(e);
		} finally {
			O--;
		}
	}, te = function() {
		return D ||= (E = bt(u, i), !0), E;
	}, j = n, M = j.implementation, N = j.createNodeIterator, ne = j.createDocumentFragment, P = j.getElementsByTagName, re = r.importNode, F = xt();
	t.isSupported = typeof ce == "function" && typeof g == "function" && M && M.createHTMLDocument !== void 0;
	let ie = tt, ae = nt, oe = rt, se = it, le = at, ue = st, de = ct, fe = ut, ge = ot, I = null, _e = R({}, [
		...We,
		...Ge,
		...Ke,
		...Je,
		...Xe
	]), Ae = null, je = R({}, [
		...Ze,
		...Qe,
		...$e,
		...et
	]), Me = Object.seal(he(null, {
		tagNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		allowCustomizedBuiltInElements: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: !1
		}
	})), Ne = null, Fe = null, L = Object.seal(he(null, {
		tagCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		}
	})), Re = !0, ze = !0, gt = !1, Tt = !0, Et = !1, Dt = !0, Ot = !1, kt = !1, z = null, At = null, jt = !1, Mt = !1, Nt = !1, Pt = !1, Ft = !0, It = !1, Lt = "user-content-", Rt = !0, zt = !1, Bt = {}, Vt = null, Ht = R({}, /* @__PURE__ */ "annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp".split(".")), Ut = null, Wt = R({}, [
		"audio",
		"video",
		"img",
		"source",
		"image",
		"track"
	]), Gt = null, Kt = R({}, [
		"alt",
		"class",
		"for",
		"id",
		"label",
		"name",
		"pattern",
		"placeholder",
		"role",
		"summary",
		"title",
		"value",
		"style",
		"xmlns"
	]), qt = "http://www.w3.org/1998/Math/MathML", Jt = "http://www.w3.org/2000/svg", Yt = "http://www.w3.org/1999/xhtml", Xt = Yt, Zt = !1, Qt = null, $t = R({}, [
		qt,
		Jt,
		Yt
	], Te), en = pe([
		"mi",
		"mo",
		"mn",
		"ms",
		"mtext"
	]), tn = R({}, en), nn = pe(["annotation-xml"]), rn = R({}, nn), an = R({}, [
		"title",
		"style",
		"font",
		"a",
		"script"
	]), on = null, sn = ["application/xhtml+xml", "text/html"], cn = null, ln = null, un = n.createElement("form"), dn = function(e) {
		return e instanceof RegExp || e instanceof Function;
	}, fn = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		if (ln && ln === e) return;
		(!e || typeof e != "object") && (e = {}), e = Be(e), on = sn.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? "text/html" : e.PARSER_MEDIA_TYPE, cn = on === "application/xhtml+xml" ? Te : we, I = St(e, "ALLOWED_TAGS", _e, { transform: cn }), Ae = St(e, "ALLOWED_ATTR", je, { transform: cn }), Qt = St(e, "ALLOWED_NAMESPACES", $t, { transform: Te }), Gt = St(e, "ADD_URI_SAFE_ATTR", Kt, {
			transform: cn,
			base: Kt
		}), Ut = St(e, "ADD_DATA_URI_TAGS", Wt, {
			transform: cn,
			base: Wt
		}), Vt = St(e, "FORBID_CONTENTS", Ht, { transform: cn }), Ne = St(e, "FORBID_TAGS", Be({}), { transform: cn }), Fe = St(e, "FORBID_ATTR", Be({}), { transform: cn }), Bt = Pe(e, "USE_PROFILES") ? e.USE_PROFILES && typeof e.USE_PROFILES == "object" ? Be(e.USE_PROFILES) : e.USE_PROFILES : !1, Re = e.ALLOW_ARIA_ATTR !== !1, ze = e.ALLOW_DATA_ATTR !== !1, gt = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Tt = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Et = e.SAFE_FOR_TEMPLATES || !1, Dt = e.SAFE_FOR_XML !== !1, Ot = e.WHOLE_DOCUMENT || !1, Mt = e.RETURN_DOM || !1, Nt = e.RETURN_DOM_FRAGMENT || !1, Pt = e.RETURN_TRUSTED_TYPE || !1, jt = e.FORCE_BODY || !1, Ft = e.SANITIZE_DOM !== !1, It = e.SANITIZE_NAMED_PROPS || !1, Rt = e.KEEP_CONTENT !== !1, zt = e.IN_PLACE || !1, ge = Ue(e.ALLOWED_URI_REGEXP) ? e.ALLOWED_URI_REGEXP : ot, Xt = typeof e.NAMESPACE == "string" ? e.NAMESPACE : Yt, tn = Ct(e, "MATHML_TEXT_INTEGRATION_POINTS", () => R({}, en)), rn = Ct(e, "HTML_INTEGRATION_POINTS", () => R({}, nn));
		let t = Ct(e, "CUSTOM_ELEMENT_HANDLING", () => he(null));
		if (Me = he(null), Pe(t, "tagNameCheck") && dn(t.tagNameCheck) && (Me.tagNameCheck = t.tagNameCheck), Pe(t, "attributeNameCheck") && dn(t.attributeNameCheck) && (Me.attributeNameCheck = t.attributeNameCheck), Pe(t, "allowCustomizedBuiltInElements") && typeof t.allowCustomizedBuiltInElements == "boolean" && (Me.allowCustomizedBuiltInElements = t.allowCustomizedBuiltInElements), me(Me), Et && (ze = !1), Nt && (Mt = !0), Bt && (I = R({}, Xe), Ae = he(null), Bt.html === !0 && (R(I, We), R(Ae, Ze)), Bt.svg === !0 && (R(I, Ge), R(Ae, Qe), R(Ae, et)), Bt.svgFilters === !0 && (R(I, Ke), R(Ae, Qe), R(Ae, et)), Bt.mathMl === !0 && (R(I, Je), R(Ae, $e), R(Ae, et))), L.tagCheck = null, L.attributeCheck = null, Pe(e, "ADD_TAGS") && (typeof e.ADD_TAGS == "function" ? L.tagCheck = e.ADD_TAGS : Ce(e.ADD_TAGS) && (I === _e && (I = Be(I)), R(I, e.ADD_TAGS, cn))), Pe(e, "ADD_ATTR") && (typeof e.ADD_ATTR == "function" ? L.attributeCheck = e.ADD_ATTR : Ce(e.ADD_ATTR) && (Ae === je && (Ae = Be(Ae)), R(Ae, e.ADD_ATTR, cn))), Pe(e, "ADD_FORBID_CONTENTS") && Ce(e.ADD_FORBID_CONTENTS) && (Vt === Ht && (Vt = Be(Vt)), R(Vt, e.ADD_FORBID_CONTENTS, cn)), Rt && (I["#text"] = !0), Ot && R(I, [
			"html",
			"head",
			"body"
		]), I.table && (R(I, ["tbody"]), delete Ne.tbody), e.TRUSTED_TYPES_POLICY) {
			if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function") throw Le("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
			if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Le("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
			let t = w;
			w = e.TRUSTED_TYPES_POLICY;
			try {
				T = ee("");
			} catch (e) {
				throw w = t, e;
			}
		} else e.TRUSTED_TYPES_POLICY === null ? (w = void 0, T = "") : (w === void 0 && (w = te()), w && typeof T == "string" && (T = ee("")));
		pe && pe(e), ln = e;
	}, pn = R({}, [
		...Ge,
		...Ke,
		...qe
	]), mn = R({}, [...Je, ...Ye]), hn = function(e, t, n) {
		return t.namespaceURI === Yt ? e === "svg" : t.namespaceURI === qt ? e === "svg" && (n === "annotation-xml" || tn[n]) : !!pn[e];
	}, gn = function(e, t, n) {
		return t.namespaceURI === Yt ? e === "math" : t.namespaceURI === Jt ? e === "math" && rn[n] : !!mn[e];
	}, _n = function(e, t, n) {
		return t.namespaceURI === Jt && !rn[n] || t.namespaceURI === qt && !tn[n] ? !1 : !mn[e] && (an[e] || !pn[e]);
	}, vn = function(e) {
		let t = g(e);
		(!t || !t.tagName) && (t = {
			namespaceURI: Xt,
			tagName: "template"
		});
		let n = we(e.tagName), r = we(t.tagName);
		return Qt[e.namespaceURI] ? e.namespaceURI === Jt ? hn(n, t, r) : e.namespaceURI === qt ? gn(n, t, r) : e.namespaceURI === Yt ? _n(n, t, r) : !!(on === "application/xhtml+xml" && Qt[e.namespaceURI]) : !1;
	}, yn = function(e) {
		xe(t.removed, { element: e });
		try {
			g(e).removeChild(e);
		} catch {
			if (p(e), !g(e)) throw Le("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
		}
	}, bn = function(e, t, n) {
		try {
			e.removeAttributeNode(t);
		} catch {
			try {
				e.removeAttribute(n);
			} catch {}
		}
	}, xn = function(e) {
		wn(e);
		let t = h(e);
		if (t) {
			let e = [];
			ve(t, (t) => {
				xe(e, t);
			}), ve(e, (e) => {
				try {
					p(e);
				} catch {}
			});
		}
		let n = v(e);
		if (n) for (let t = n.length - 1; t >= 0; --t) {
			let r = n[t], i = r && r.name;
			typeof i == "string" && bn(e, r, i);
		}
	}, Sn = function(e, n, r) {
		if (!r) try {
			r = n.getAttributeNode(e);
		} catch {
			r = null;
		}
		xe(t.removed, {
			attribute: r || null,
			from: n
		});
		try {
			r ? n.removeAttributeNode(r) : n.removeAttribute(e);
		} catch {
			try {
				n.removeAttribute(e);
			} catch {}
		}
		if (e === "is") {
			if (Mt || Nt) try {
				yn(n);
			} catch {}
			else try {
				n.setAttribute(e, "");
			} catch {}
		}
	}, Cn = function(e) {
		let t = v(e);
		if (t) for (let n = t.length - 1; n >= 0; --n) {
			let r = t[n], i = r && r.name;
			typeof i != "string" || Ae[cn(i)] || bn(e, r, i);
		}
	}, wn = function(e) {
		let t = [e];
		for (; t.length > 0;) {
			let e = t.pop();
			S(e) === ht.element && Cn(e);
			let n = h(e);
			if (n) for (let e = n.length - 1; e >= 0; --e) t.push(n[e]);
		}
	}, Tn = function(e, t) {
		return Dt ? e === "patchsrc" || e === "for" && t !== "label" && t !== "output" : !1;
	}, En = function(e) {
		if (!Dt) return;
		let t = [e];
		for (; t.length > 0;) {
			let e = t.pop(), n = S(e);
			if (n === ht.processingInstruction || n === ht.comment && Ie(ft, e.data)) {
				try {
					p(e);
				} catch {}
				continue;
			}
			if (n === ht.element) {
				let t = e, n = cn(C(e));
				try {
					t.hasAttribute && t.hasAttribute("patchsrc") && t.removeAttribute("patchsrc"), t.hasAttribute && t.hasAttribute("for") && Tn("for", n) && t.removeAttribute("for");
				} catch {}
			}
			let r = h(e);
			if (r) for (let e = r.length - 1; e >= 0; --e) t.push(r[e]);
		}
	}, Dn = function(e) {
		let t = null, r = null;
		if (jt) e = "<remove></remove>" + e;
		else {
			let t = Ee(e, /^[\r\n\t ]+/);
			r = t && t[0];
		}
		on === "application/xhtml+xml" && Xt === Yt && (e = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + e + "</body></html>");
		let i = w ? ee(e) : e;
		if (Xt === Yt) try {
			t = new l().parseFromString(i, on);
		} catch {}
		if (!t || !t.documentElement) {
			t = M.createDocument(Xt, "template", null);
			try {
				t.documentElement.innerHTML = Zt ? T : i;
			} catch {}
		}
		let a = t.body || t.documentElement;
		return e && r && a.insertBefore(n.createTextNode(r), a.childNodes[0] || null), Xt === Yt ? P.call(t, Ot ? "html" : "body")[0] : Ot ? t.documentElement : a;
	}, On = function(e) {
		let t = x ? x(e) : e.ownerDocument;
		return N.call(t || e, e, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION, null);
	}, kn = function(e) {
		return e = De(e, ie, " "), e = De(e, ae, " "), e = De(e, oe, " "), e;
	}, An = function(e) {
		e.normalize();
		let t = x ? x(e) : e.ownerDocument, n = N.call(t || e, e, c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION, null), r = n.nextNode();
		for (; r;) r.data = kn(r.data), r = n.nextNode();
		let i = e.querySelectorAll?.call(e, "template");
		i && ve(i, (e) => {
			jn(e.content) && An(e.content);
		});
	}, B = function(e) {
		let t = b ? b(e) : null;
		return typeof t != "string" || cn(t) !== "form" ? !1 : typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || e.attributes !== v(e) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function" || e.nodeType !== y(e) || e.childNodes !== h(e);
	}, jn = function(e) {
		if (!y || typeof e != "object" || !e) return !1;
		try {
			return y(e) === ht.documentFragment;
		} catch {
			return !1;
		}
	}, Mn = function(e) {
		if (!y || typeof e != "object" || !e) return !1;
		try {
			return typeof y(e) == "number";
		} catch {
			return !1;
		}
	};
	function Nn(e, n, r) {
		e.length !== 0 && ve(e, (e) => {
			e.call(t, n, r, ln);
		});
	}
	let Pn = function(e, t) {
		return !!(Dt && e.hasChildNodes() && !Mn(e.firstElementChild) && Ie(dt, e.textContent) && Ie(dt, e.innerHTML) || Dt && e.namespaceURI === Yt && _t[t] && (Mn(e.firstElementChild) || typeof e.textContent == "string" && Ie(vt[t], e.textContent)) || e.nodeType === ht.processingInstruction || Dt && e.nodeType === ht.comment && Ie(ft, e.data));
	}, Fn = function(e, t) {
		return e instanceof RegExp ? Ie(e, t) : e instanceof Function && !!e(t, ...[...arguments].slice(2));
	}, In = function(e, t, n) {
		if (!Ne[t] && Hn(t) && Fn(Me.tagNameCheck, t)) return !1;
		if (Rt && !Vt[t]) {
			let t = g(e), r = h(e);
			if (r && t) {
				let i = r.length;
				for (let a = i - 1; a >= 0; --a) {
					let i = e === n ? f(r[a], !0) : r[a];
					t.insertBefore(i, m(e));
				}
			}
		}
		return yn(e), !0;
	}, Ln = function(e, t, n, r) {
		return e.length === 0 ? t : t === n || t === r ? Be(t) : t;
	}, Rn = function(e, t) {
		return e === t || g(e) !== null ? !1 : (zt && wn(e), !0);
	}, zn = function(e, n) {
		if (Nn(F.beforeSanitizeElements, e, null), Rn(e, n)) return !0;
		if (B(e)) return yn(e), !0;
		let r = cn(C(e));
		if (I = Ln(F.uponSanitizeElement, I, _e, z), Nn(F.uponSanitizeElement, e, {
			tagName: r,
			allowedTags: I
		}), Rn(e, n)) return !0;
		if (Pn(e, r)) return yn(e), !0;
		if (Ne[r] || !(L.tagCheck instanceof Function && L.tagCheck(r)) && !I[r]) {
			let t = In(e, r, n);
			return t === !1 && Nn(F.afterSanitizeElements, e, null), t;
		}
		if (S(e) === ht.element && !vn(e) || (r === "noscript" || r === "noembed" || r === "noframes") && Ie(pt, e.innerHTML)) return yn(e), !0;
		if (Et && e.nodeType === ht.text) {
			let n = kn(e.textContent);
			e.textContent !== n && (xe(t.removed, { element: e.cloneNode() }), e.textContent = n);
		}
		return Nn(F.afterSanitizeElements, e, null), !1;
	}, Bn = function(e, t, r) {
		if (Fe[t] || Tn(t, e) || Ft && (t === "id" || t === "name") && (r in n || r in un)) return !1;
		let i = Ae[t] || L.attributeCheck instanceof Function && L.attributeCheck(t, e);
		return ze && Ie(se, t) || Re && Ie(le, t) ? !0 : i ? Gt[t] || Ie(ge, De(r, de, "")) || (t === "src" || t === "xlink:href" || t === "href") && e !== "script" && Oe(r, "data:") === 0 && Ut[e] || gt && !Ie(ue, De(r, de, "")) ? !0 : !r : Hn(e) && Fn(Me.tagNameCheck, e) && Fn(Me.attributeNameCheck, t, e) || t === "is" && Me.allowCustomizedBuiltInElements && Fn(Me.tagNameCheck, r);
	}, Vn = R({}, [
		"annotation-xml",
		"color-profile",
		"font-face",
		"font-face-format",
		"font-face-name",
		"font-face-src",
		"font-face-uri",
		"missing-glyph"
	]), Hn = function(e) {
		return !Vn[we(e)] && Ie(fe, e);
	}, Un = function(e, t, n, r) {
		if (w && typeof u == "object" && typeof u.getAttributeType == "function" && !n) switch (u.getAttributeType(e, t)) {
			case "TrustedHTML": return ee(r);
			case "TrustedScriptURL": return A(r);
		}
		return r;
	}, Wn = function(e, n, r, i) {
		try {
			r ? e.setAttributeNS(r, n, i) : e.setAttribute(n, i), B(e) ? yn(e) : be(t.removed);
		} catch {
			Sn(n, e);
		}
	}, Gn = function(e) {
		Nn(F.beforeSanitizeAttributes, e, null);
		let t = e.attributes;
		if (!t || B(e)) return;
		Ae = Ln(F.uponSanitizeAttribute, Ae, je, At);
		let n = {
			attrName: "",
			attrValue: "",
			keepAttr: !0,
			allowedAttributes: Ae,
			forceKeepAttr: void 0
		}, r = t.length, i = cn(e.nodeName);
		for (; r--;) {
			let a = t[r], o = a.name, s = a.namespaceURI, c = a.value, l = cn(o), u = c, d = o === "value" ? u : ke(u);
			if (n.attrName = l, n.attrValue = d, n.keepAttr = !0, n.forceKeepAttr = void 0, Nn(F.uponSanitizeAttribute, e, n), d = n.attrValue, It && (l === "id" || l === "name") && Oe(d, Lt) !== 0 && (Sn(o, e, a), d = Lt + d), Dt && Ie(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, d)) {
				Sn(o, e, a);
				continue;
			}
			if (l === "attributename" && Ee(d, "href")) {
				Sn(o, e, a);
				continue;
			}
			if (!n.forceKeepAttr) {
				if (!n.keepAttr) {
					Sn(o, e, a);
					continue;
				}
				if (!Tt && Ie(mt, d)) {
					Sn(o, e, a);
					continue;
				}
				if (Et && (d = kn(d)), !Bn(i, l, d)) {
					Sn(o, e, a);
					continue;
				}
				d = Un(i, l, s, d), d !== u && Wn(e, o, s, d);
			}
		}
		Nn(F.afterSanitizeAttributes, e, null);
	}, Kn = function(e) {
		let t = null, n = On(e);
		for (Nn(F.beforeSanitizeShadowDOM, e, null); t = n.nextNode();) if (Nn(F.uponSanitizeShadowNode, t, null), zn(t, e), Gn(t), jn(t.content) && Kn(t.content), S(t) === ht.element) {
			let e = _(t);
			jn(e) && (qn(e), Kn(e));
		}
		Nn(F.afterSanitizeShadowDOM, e, null);
	}, qn = function(e) {
		let t = [{
			node: e,
			shadow: null
		}];
		for (; t.length > 0;) {
			let e = t.pop();
			if (e.shadow) {
				Kn(e.shadow);
				continue;
			}
			let n = e.node, r = S(n) === ht.element, i = h(n);
			if (i) for (let e = i.length - 1; e >= 0; --e) t.push({
				node: i[e],
				shadow: null
			});
			if (r) {
				let e = b ? b(n) : null;
				if (typeof e == "string" && cn(e) === "template") {
					let e = n.content;
					jn(e) && t.push({
						node: e,
						shadow: null
					});
				}
			}
			if (r) {
				let e = _(n);
				jn(e) && t.push({
					node: null,
					shadow: e
				}, {
					node: e,
					shadow: null
				});
			}
		}
	};
	return t.sanitize = function(e) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = null, a = null, o = null, s = null;
		if (Zt = !e, Zt && (e = "<!-->"), typeof e != "string" && !Mn(e) && (e = Ve(e), typeof e != "string")) throw Le("dirty is not a string, aborting");
		if (!t.isSupported) return e;
		kt ? (I = z, Ae = At) : fn(n), (F.uponSanitizeElement.length > 0 || F.uponSanitizeAttribute.length > 0) && (I = Be(I)), F.uponSanitizeAttribute.length > 0 && (Ae = Be(Ae)), t.removed = [];
		let c = zt && typeof e != "string" && Mn(e);
		if (c) {
			En(e);
			let t = C(e);
			if (typeof t == "string") {
				let n = cn(t);
				if (!I[n] || Ne[n]) throw xn(e), Le("root node is forbidden and cannot be sanitized in-place");
			}
			if (B(e)) throw xn(e), Le("root node is clobbered and cannot be sanitized in-place");
			try {
				qn(e);
			} catch (t) {
				throw xn(e), t;
			}
		} else if (Mn(e)) i = Dn("<!---->"), a = i.ownerDocument.importNode(e, !0), a.nodeType === ht.element && a.nodeName === "BODY" || a.nodeName === "HTML" ? i = a : i.appendChild(a), qn(a);
		else {
			if (!Mt && !Et && !Ot && e.indexOf("<") === -1) return w && Pt ? ee(e) : e;
			if (i = Dn(e), !i) return Mt ? null : Pt ? T : "";
		}
		i && jt && yn(i.firstChild);
		let l = c ? e : i;
		try {
			let e = On(l);
			for (; o = e.nextNode();) zn(o, l), Gn(o), jn(o.content) && Kn(o.content);
		} catch (n) {
			throw c && (xn(e), ve(t.removed, (e) => {
				e.element && wn(e.element);
			})), n;
		}
		if (c) return ve(t.removed, (e) => {
			e.element && wn(e.element);
		}), Et && An(e), e;
		if (Mt) {
			if (Et && An(i), Nt) for (s = ne.call(i.ownerDocument); i.firstChild;) s.appendChild(i.firstChild);
			else s = i;
			return (Ae.shadowroot || Ae.shadowrootmode) && (s = re.call(r, s, !0)), s;
		}
		let u = Ot ? i.outerHTML : i.innerHTML;
		return Ot && I["!doctype"] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && Ie(lt, i.ownerDocument.doctype.name) && (u = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + u), Et && (u = kn(u)), w && Pt ? ee(u) : u;
	}, t.setConfig = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		fn(e), kt = !0, z = I, At = Ae;
	}, t.clearConfig = function() {
		ln = null, kt = !1, z = null, At = null, w = E, T = "";
	}, t.isValidAttribute = function(e, t, n) {
		ln || fn({});
		let r = cn(e), i = cn(t);
		return Bn(r, i, n);
	}, t.addHook = function(e, t) {
		typeof t == "function" && Pe(F, e) && xe(F[e], t);
	}, t.removeHook = function(e, t) {
		if (Pe(F, e)) {
			if (t !== void 0) {
				let n = ye(F[e], t);
				return n === -1 ? void 0 : Se(F[e], n, 1)[0];
			}
			return be(F[e]);
		}
	}, t.removeHooks = function(e) {
		Pe(F, e) && (F[e] = []);
	}, t.removeAllHooks = function() {
		F = xt();
	}, t;
}
var Tt = wt(), Et = /* @__PURE__ */ i((e, t, { depth: n = 2 } = {}) => {
	let r = { depth: n };
	if (Array.isArray(t) && !Array.isArray(e)) return t.forEach((t) => Et(e, t, r)), e;
	if (Array.isArray(t) && Array.isArray(e)) return t.forEach((t) => {
		e.includes(t) || e.push(t);
	}), e;
	if (e == null || n <= 0) return typeof e == "object" && e && typeof t == "object" ? Object.assign(e, t) : t;
	if (t != null && typeof e == "object" && typeof t == "object") {
		let r = e;
		Object.entries(t).forEach(([t, i]) => {
			if (typeof i == "object") {
				if (i === null) return;
				Object.hasOwn(e, t) || Object.defineProperty(e, t, {
					value: void 0,
					writable: !0,
					enumerable: !0,
					configurable: !0
				}), r[t] === void 0 && (r[t] = Array.isArray(i) ? [] : {}), typeof r[t] == "object" && (r[t] = Et(r[t], i, { depth: n - 1 }));
			} else typeof r[t] != "object" && (Object.hasOwn(e, t) ? r[t] = i : Object.defineProperty(e, t, {
				value: i,
				writable: !0,
				enumerable: !0,
				configurable: !0
			}));
		});
	}
	return e;
}, "assignWithDepth"), Dt = Et, Ot = "#ffffff", kt = "#f2f2f2", z = /* @__PURE__ */ i((e, t) => t ? N(e, {
	s: -40,
	l: 10
}) : N(e, {
	s: -40,
	l: -10
}), "mkBorder"), At, jt = (At = class {
	constructor() {
		this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif", this.fontSize = "16px", this.useGradient = !0, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))";
	}
	updateColors() {
		if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || N(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || N(this.primaryColor, {
			h: 180,
			l: 5
		}), this.primaryBorderColor = this.primaryBorderColor || z(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || z(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || z(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || z(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || P(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || P(this.tertiaryColor), this.lineColor = this.lineColor || P(this.background), this.arrowheadColor = this.arrowheadColor || P(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || M(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || P(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || j(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.vertLineColor = this.vertLineColor || "navy", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.noteFontWeight = this.noteFontWeight || "normal", this.fontWeight = this.fontWeight || "normal", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.darkMode ? (this.rowOdd = this.rowOdd || M(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || M(this.mainBkg, 10)) : (this.rowOdd = this.rowOdd || j(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || j(this.mainBkg, 5)), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || N(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || N(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || N(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || N(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || N(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || N(this.primaryColor, {
			h: 210,
			l: 150
		}), this.cScale9 = this.cScale9 || N(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || N(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || N(this.primaryColor, { h: 330 }), this.darkMode) for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScale" + e] = M(this["cScale" + e], 75);
		else for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScale" + e] = M(this["cScale" + e], 25);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleInv" + e] = this["cScaleInv" + e] || P(this["cScale" + e]);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this.darkMode ? this["cScalePeer" + e] = this["cScalePeer" + e] || j(this["cScale" + e], 10) : this["cScalePeer" + e] = this["cScalePeer" + e] || M(this["cScale" + e], 10);
		this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
		let e = this.darkMode ? -4 : -1;
		for (let t = 0; t < 5; t++) this["surface" + t] = this["surface" + t] || N(this.mainBkg, {
			h: 180,
			s: -15,
			l: e * (5 + t * 3)
		}), this["surfacePeer" + t] = this["surfacePeer" + t] || N(this.mainBkg, {
			h: 180,
			s: -15,
			l: e * (8 + t * 3)
		});
		this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || N(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || N(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || N(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || N(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || N(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || N(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || N(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || N(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || N(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || N(this.primaryColor, {
			h: 60,
			l: -10
		}), this.pie8 = this.pie8 || N(this.primaryColor, {
			h: -60,
			l: -10
		}), this.pie9 = this.pie9 || N(this.primaryColor, {
			h: 120,
			l: 0
		}), this.pie10 = this.pie10 || N(this.primaryColor, {
			h: 60,
			l: -20
		}), this.pie11 = this.pie11 || N(this.primaryColor, {
			h: -60,
			l: -20
		}), this.pie12 = this.pie12 || N(this.primaryColor, {
			h: 120,
			l: -10
		}), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.venn1 = this.venn1 ?? N(this.primaryColor, { l: -30 }), this.venn2 = this.venn2 ?? N(this.secondaryColor, { l: -30 }), this.venn3 = this.venn3 ?? N(this.tertiaryColor, { l: -30 }), this.venn4 = this.venn4 ?? N(this.primaryColor, {
			h: 60,
			l: -30
		}), this.venn5 = this.venn5 ?? N(this.primaryColor, {
			h: -60,
			l: -30
		}), this.venn6 = this.venn6 ?? N(this.secondaryColor, {
			h: 60,
			l: -30
		}), this.venn7 = this.venn7 ?? N(this.primaryColor, {
			h: 120,
			l: -30
		}), this.venn8 = this.venn8 ?? N(this.secondaryColor, {
			h: 120,
			l: -30
		}), this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.cynefin = {
			domainFontSize: this.cynefin?.domainFontSize || 16,
			itemFontSize: this.cynefin?.itemFontSize || 12,
			boundaryColor: this.cynefin?.boundaryColor || this.lineColor,
			boundaryWidth: this.cynefin?.boundaryWidth || 2,
			cliffColor: this.cynefin?.cliffColor || "#8B0000",
			cliffWidth: this.cynefin?.cliffWidth || 4,
			arrowColor: this.cynefin?.arrowColor || this.lineColor,
			arrowWidth: this.cynefin?.arrowWidth || 2,
			complexBg: this.cynefin?.complexBg || "#E8F5E9",
			complicatedBg: this.cynefin?.complicatedBg || "#E3F2FD",
			chaoticBg: this.cynefin?.chaoticBg || "#FBE9E7",
			clearBg: this.cynefin?.clearBg || "#FFF8E1",
			confusionBg: this.cynefin?.confusionBg || "#F3E5F5",
			textColor: this.cynefin?.textColor || this.textColor,
			labelColor: this.cynefin?.labelColor || this.primaryTextColor
		}, this.radar = {
			axisColor: this.radar?.axisColor || this.lineColor,
			axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
			axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
			curveOpacity: this.radar?.curveOpacity || .5,
			curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
			graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
			graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
			graticuleOpacity: this.radar?.graticuleOpacity || .3,
			legendBoxSize: this.radar?.legendBoxSize || 12,
			legendFontSize: this.radar?.legendFontSize || 12
		}, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545", this.wardley = {
			backgroundColor: this.wardley?.backgroundColor || this.background,
			axisColor: this.wardley?.axisColor || this.lineColor,
			axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
			gridColor: this.wardley?.gridColor || this.gridColor,
			componentFill: this.wardley?.componentFill || this.background,
			componentStroke: this.wardley?.componentStroke || this.lineColor,
			componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
			linkStroke: this.wardley?.linkStroke || this.lineColor,
			evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
			annotationStroke: this.wardley?.annotationStroke || this.lineColor,
			annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
			annotationFill: this.wardley?.annotationFill || this.background
		}, this.archEdgeColor = this.archEdgeColor || "#777", this.archEdgeArrowColor = this.archEdgeArrowColor || "#777", this.archEdgeWidth = this.archEdgeWidth || "3", this.archGroupBorderColor = this.archGroupBorderColor || "#000", this.archGroupBorderWidth = this.archGroupBorderWidth || "2px", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || N(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || N(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || N(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || N(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || N(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || N(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || A(this.quadrant1Fill) ? j(this.quadrant1Fill) : M(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
			legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
		}, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || N(this.primaryColor, { h: -30 }), this.git4 = this.git4 || N(this.primaryColor, { h: -60 }), this.git5 = this.git5 || N(this.primaryColor, { h: -90 }), this.git6 = this.git6 || N(this.primaryColor, { h: 60 }), this.git7 = this.git7 || N(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = j(this.git0, 25), this.git1 = j(this.git1, 25), this.git2 = j(this.git2, 25), this.git3 = j(this.git3, 25), this.git4 = j(this.git4, 25), this.git5 = j(this.git5, 25), this.git6 = j(this.git6, 25), this.git7 = j(this.git7, 25)) : (this.git0 = M(this.git0, 25), this.git1 = M(this.git1, 25), this.git2 = M(this.git2, 25), this.git3 = M(this.git3, 25), this.git4 = M(this.git4, 25), this.git5 = M(this.git5, 25), this.git6 = M(this.git6, 25), this.git7 = M(this.git7, 25)), this.gitInv0 = this.gitInv0 || P(this.git0), this.gitInv1 = this.gitInv1 || P(this.git1), this.gitInv2 = this.gitInv2 || P(this.git2), this.gitInv3 = this.gitInv3 || P(this.git3), this.gitInv4 = this.gitInv4 || P(this.git4), this.gitInv5 = this.gitInv5 || P(this.git5), this.gitInv6 = this.gitInv6 || P(this.git6), this.gitInv7 = this.gitInv7 || P(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ot, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || kt, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor;
	}
	calculate(e) {
		if (typeof e != "object") {
			this.updateColors();
			return;
		}
		let t = Object.keys(e);
		t.forEach((t) => {
			this[t] = e[t];
		}), this.updateColors(), t.forEach((t) => {
			this[t] = e[t];
		});
	}
}, i(At, "Theme"), At), Mt = /* @__PURE__ */ i((e) => {
	let t = new jt();
	return t.calculate(e), t;
}, "getThemeVariables"), Nt, Pt = (Nt = class {
	constructor() {
		this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = j(this.primaryColor, 16), this.tertiaryColor = N(this.primaryColor, { h: -160 }), this.primaryBorderColor = P(this.background), this.secondaryBorderColor = z(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = z(this.tertiaryColor, this.darkMode), this.primaryTextColor = P(this.primaryColor), this.secondaryTextColor = P(this.secondaryColor), this.tertiaryTextColor = P(this.tertiaryColor), this.lineColor = P(this.background), this.textColor = P(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = j(P("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#ccc", this.border2 = O(255, 255, 255, .25), this.arrowheadColor = "calculated", this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif", this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.clusterBkg = "#302F3D", this.sectionBkgColor = M("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = M(this.sectionBkgColor, 10), this.taskBorderColor = O(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = O(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || j(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || M(this.mainBkg, 10), this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd", this.useGradient = !0, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))", this.noteFontWeight = this.noteFontWeight || "normal", this.fontWeight = this.fontWeight || "normal";
	}
	updateColors() {
		this.secondBkg = j(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = j(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.actorBorder, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.background, this.taskBkgColor = j(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = P(this.doneTaskBkgColor), this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = N(this.primaryColor, { h: 64 }), this.fillType3 = N(this.secondaryColor, { h: 64 }), this.fillType4 = N(this.primaryColor, { h: -64 }), this.fillType5 = N(this.secondaryColor, { h: -64 }), this.fillType6 = N(this.primaryColor, { h: 128 }), this.fillType7 = N(this.secondaryColor, { h: 128 }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || N(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || N(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || N(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || N(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || N(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || N(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || N(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || N(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || N(this.primaryColor, { h: 330 });
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleInv" + e] = this["cScaleInv" + e] || P(this["cScale" + e]);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScalePeer" + e] = this["cScalePeer" + e] || j(this["cScale" + e], 10);
		for (let e = 0; e < 5; e++) this["surface" + e] = this["surface" + e] || N(this.mainBkg, {
			h: 30,
			s: -30,
			l: -(-10 + e * 4)
		}), this["surfacePeer" + e] = this["surfacePeer" + e] || N(this.mainBkg, {
			h: 30,
			s: -30,
			l: -(-7 + e * 4)
		});
		this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["pie" + e] = this["cScale" + e];
		this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.mainContrastColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.mainContrastColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7";
		for (let e = 0; e < 8; e++) this["venn" + (e + 1)] = this["venn" + (e + 1)] ?? j(this["cScale" + e], 30);
		this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.cynefin = {
			domainFontSize: this.cynefin?.domainFontSize || 16,
			itemFontSize: this.cynefin?.itemFontSize || 12,
			boundaryColor: this.cynefin?.boundaryColor || this.lineColor,
			boundaryWidth: this.cynefin?.boundaryWidth || 2,
			cliffColor: this.cynefin?.cliffColor || "#FF6B6B",
			cliffWidth: this.cynefin?.cliffWidth || 4,
			arrowColor: this.cynefin?.arrowColor || this.lineColor,
			arrowWidth: this.cynefin?.arrowWidth || 2,
			complexBg: this.cynefin?.complexBg || "#1B5E20",
			complicatedBg: this.cynefin?.complicatedBg || "#0D47A1",
			chaoticBg: this.cynefin?.chaoticBg || "#BF360C",
			clearBg: this.cynefin?.clearBg || "#F57F17",
			confusionBg: this.cynefin?.confusionBg || "#4A148C",
			textColor: this.cynefin?.textColor || this.textColor,
			labelColor: this.cynefin?.labelColor || this.primaryTextColor
		}, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || N(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || N(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || N(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || N(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || N(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || N(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || A(this.quadrant1Fill) ? j(this.quadrant1Fill) : M(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
			legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
		}, this.packet = {
			startByteColor: this.primaryTextColor,
			endByteColor: this.primaryTextColor,
			labelColor: this.primaryTextColor,
			titleColor: this.primaryTextColor,
			blockStrokeColor: this.primaryTextColor,
			blockFillColor: this.background
		}, this.radar = {
			axisColor: this.radar?.axisColor || this.lineColor,
			axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
			axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
			curveOpacity: this.radar?.curveOpacity || .5,
			curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
			graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
			graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
			graticuleOpacity: this.radar?.graticuleOpacity || .3,
			legendBoxSize: this.radar?.legendBoxSize || 12,
			legendFontSize: this.radar?.legendFontSize || 12
		}, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#ff6b6b", this.wardley = {
			backgroundColor: this.wardley?.backgroundColor || this.background,
			axisColor: this.wardley?.axisColor || this.lineColor,
			axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
			gridColor: this.wardley?.gridColor || this.gridColor,
			componentFill: this.wardley?.componentFill || this.mainBkg,
			componentStroke: this.wardley?.componentStroke || this.lineColor,
			componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
			linkStroke: this.wardley?.linkStroke || this.lineColor,
			evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
			annotationStroke: this.wardley?.annotationStroke || this.lineColor,
			annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
			annotationFill: this.wardley?.annotationFill || this.mainBkg
		}, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = j(this.secondaryColor, 20), this.git1 = j(this.pie2 || this.secondaryColor, 20), this.git2 = j(this.pie3 || this.tertiaryColor, 20), this.git3 = j(this.pie4 || N(this.primaryColor, { h: -30 }), 20), this.git4 = j(this.pie5 || N(this.primaryColor, { h: -60 }), 20), this.git5 = j(this.pie6 || N(this.primaryColor, { h: -90 }), 10), this.git6 = j(this.pie7 || N(this.primaryColor, { h: 60 }), 10), this.git7 = j(this.pie8 || N(this.primaryColor, { h: 120 }), 20), this.gitInv0 = this.gitInv0 || P(this.git0), this.gitInv1 = this.gitInv1 || P(this.git1), this.gitInv2 = this.gitInv2 || P(this.git2), this.gitInv3 = this.gitInv3 || P(this.git3), this.gitInv4 = this.gitInv4 || P(this.git4), this.gitInv5 = this.gitInv5 || P(this.git5), this.gitInv6 = this.gitInv6 || P(this.git6), this.gitInv7 = this.gitInv7 || P(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || P(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || P(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "#2d2d2d", this.emUiStroke = this.emUiStroke || "#555", this.emProcessorFill = this.emProcessorFill || j("#5a3d5c", 10), this.emProcessorStroke = this.emProcessorStroke || "#8a6d8c", this.emReadModelFill = this.emReadModelFill || j("#3d5a2d", 10), this.emReadModelStroke = this.emReadModelStroke || "#6d8c5c", this.emCommandFill = this.emCommandFill || j("#2d3d5a", 10), this.emCommandStroke = this.emCommandStroke || "#5c6d8c", this.emEventFill = this.emEventFill || j("#5a452d", 10), this.emEventStroke = this.emEventStroke || "#8c755c", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || j(this.background, 5), this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || j(this.background, 12), this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || j(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || j(this.background, 2), this.nodeBorder = this.nodeBorder || "#999";
	}
	calculate(e) {
		if (typeof e != "object") {
			this.updateColors();
			return;
		}
		let t = Object.keys(e);
		t.forEach((t) => {
			this[t] = e[t];
		}), this.updateColors(), t.forEach((t) => {
			this[t] = e[t];
		});
	}
}, i(Nt, "Theme"), Nt), Ft = /* @__PURE__ */ i((e) => {
	let t = new Pt();
	return t.calculate(e), t;
}, "getThemeVariables"), It, Lt = (It = class {
	constructor() {
		this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = N(this.primaryColor, { h: 120 }), this.secondaryColor = "#ffffde", this.tertiaryColor = N(this.primaryColor, { h: -160 }), this.primaryBorderColor = z(this.primaryColor, this.darkMode), this.secondaryBorderColor = z(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = z(this.tertiaryColor, this.darkMode), this.primaryTextColor = P(this.primaryColor), this.secondaryTextColor = P(this.secondaryColor), this.tertiaryTextColor = P(this.tertiaryColor), this.lineColor = P(this.background), this.textColor = P(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.primaryBorderColor = z(this.primaryColor, this.darkMode), this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif", this.fontSize = "16px", this.labelBackground = "rgba(232,232,232, 0.8)", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.clusterBkg = "#FBFBFF", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.sectionBkgColor = O(102, 102, 255, .49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "navy", this.noteFontWeight = this.noteFontWeight || "normal", this.fontWeight = this.fontWeight || "normal", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = "calculated", this.rowEven = "calculated", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.useGradient = !1, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow(1px 2px 2px rgba(185, 185, 185, 1))", this.updateColors();
	}
	updateColors() {
		this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || N(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || N(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || N(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || N(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || N(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || N(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || N(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || N(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || N(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || M(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || M(this.tertiaryColor, 40);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScale" + e] = M(this["cScale" + e], 10), this["cScalePeer" + e] = this["cScalePeer" + e] || M(this["cScale" + e], 25);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleInv" + e] = this["cScaleInv" + e] || N(this["cScale" + e], { h: 180 });
		for (let e = 0; e < 5; e++) this["surface" + e] = this["surface" + e] || N(this.mainBkg, {
			h: 30,
			l: -(5 + e * 5)
		}), this["surfacePeer" + e] = this["surfacePeer" + e] || N(this.mainBkg, {
			h: 30,
			l: -(7 + e * 5)
		});
		if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
			this.cScaleLabel0 = this.cScaleLabel0 || P(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || P(this.labelTextColor);
			for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.labelTextColor;
		}
		this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || j(this.primaryColor, 75) || "#ffffff", this.rowEven = this.rowEven || j(this.primaryColor, 1), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = N(this.primaryColor, { h: 64 }), this.fillType3 = N(this.secondaryColor, { h: 64 }), this.fillType4 = N(this.primaryColor, { h: -64 }), this.fillType5 = N(this.secondaryColor, { h: -64 }), this.fillType6 = N(this.primaryColor, { h: 128 }), this.fillType7 = N(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || N(this.tertiaryColor, { l: -40 }), this.pie4 = this.pie4 || N(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || N(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || N(this.tertiaryColor, { l: -20 }), this.pie7 = this.pie7 || N(this.primaryColor, {
			h: 60,
			l: -20
		}), this.pie8 = this.pie8 || N(this.primaryColor, {
			h: -60,
			l: -40
		}), this.pie9 = this.pie9 || N(this.primaryColor, {
			h: 120,
			l: -40
		}), this.pie10 = this.pie10 || N(this.primaryColor, {
			h: 60,
			l: -40
		}), this.pie11 = this.pie11 || N(this.primaryColor, {
			h: -90,
			l: -40
		}), this.pie12 = this.pie12 || N(this.primaryColor, {
			h: 120,
			l: -30
		}), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.venn1 = this.venn1 ?? N(this.primaryColor, { l: -30 }), this.venn2 = this.venn2 ?? N(this.secondaryColor, { l: -30 }), this.venn3 = this.venn3 ?? N(this.tertiaryColor, { l: -40 }), this.venn4 = this.venn4 ?? N(this.primaryColor, {
			h: 60,
			l: -30
		}), this.venn5 = this.venn5 ?? N(this.primaryColor, {
			h: -60,
			l: -30
		}), this.venn6 = this.venn6 ?? N(this.secondaryColor, {
			h: 60,
			l: -30
		}), this.venn7 = this.venn7 ?? N(this.primaryColor, {
			h: 120,
			l: -30
		}), this.venn8 = this.venn8 ?? N(this.secondaryColor, {
			h: 120,
			l: -30
		}), this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.cynefin = {
			domainFontSize: this.cynefin?.domainFontSize || 16,
			itemFontSize: this.cynefin?.itemFontSize || 12,
			boundaryColor: this.cynefin?.boundaryColor || this.lineColor,
			boundaryWidth: this.cynefin?.boundaryWidth || 2,
			cliffColor: this.cynefin?.cliffColor || "#8B0000",
			cliffWidth: this.cynefin?.cliffWidth || 4,
			arrowColor: this.cynefin?.arrowColor || this.lineColor,
			arrowWidth: this.cynefin?.arrowWidth || 2,
			complexBg: this.cynefin?.complexBg || "#E8F5E9",
			complicatedBg: this.cynefin?.complicatedBg || "#E3F2FD",
			chaoticBg: this.cynefin?.chaoticBg || "#FBE9E7",
			clearBg: this.cynefin?.clearBg || "#FFF8E1",
			confusionBg: this.cynefin?.confusionBg || "#F3E5F5",
			textColor: this.cynefin?.textColor || this.textColor,
			labelColor: this.cynefin?.labelColor || this.primaryTextColor
		}, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || N(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || N(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || N(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || N(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || N(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || N(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || A(this.quadrant1Fill) ? j(this.quadrant1Fill) : M(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.radar = {
			axisColor: this.radar?.axisColor || this.lineColor,
			axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
			axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
			curveOpacity: this.radar?.curveOpacity || .5,
			curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
			graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
			graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
			graticuleOpacity: this.radar?.graticuleOpacity || .3,
			legendBoxSize: this.radar?.legendBoxSize || 12,
			legendFontSize: this.radar?.legendFontSize || 12
		}, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545", this.wardley = {
			backgroundColor: this.wardley?.backgroundColor || this.background,
			axisColor: this.wardley?.axisColor || this.lineColor,
			axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
			gridColor: this.wardley?.gridColor || this.gridColor,
			componentFill: this.wardley?.componentFill || this.background,
			componentStroke: this.wardley?.componentStroke || this.lineColor,
			componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
			linkStroke: this.wardley?.linkStroke || this.lineColor,
			evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
			annotationStroke: this.wardley?.annotationStroke || this.lineColor,
			annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
			annotationFill: this.wardley?.annotationFill || this.background
		}, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
			legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
		}, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || N(this.primaryColor, { h: -30 }), this.git4 = this.git4 || N(this.primaryColor, { h: -60 }), this.git5 = this.git5 || N(this.primaryColor, { h: -90 }), this.git6 = this.git6 || N(this.primaryColor, { h: 60 }), this.git7 = this.git7 || N(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = j(this.git0, 25), this.git1 = j(this.git1, 25), this.git2 = j(this.git2, 25), this.git3 = j(this.git3, 25), this.git4 = j(this.git4, 25), this.git5 = j(this.git5, 25), this.git6 = j(this.git6, 25), this.git7 = j(this.git7, 25)) : (this.git0 = M(this.git0, 25), this.git1 = M(this.git1, 25), this.git2 = M(this.git2, 25), this.git3 = M(this.git3, 25), this.git4 = M(this.git4, 25), this.git5 = M(this.git5, 25), this.git6 = M(this.git6, 25), this.git7 = M(this.git7, 25)), this.gitInv0 = this.gitInv0 || M(P(this.git0), 25), this.gitInv1 = this.gitInv1 || P(this.git1), this.gitInv2 = this.gitInv2 || P(this.git2), this.gitInv3 = this.gitInv3 || P(this.git3), this.gitInv4 = this.gitInv4 || P(this.git4), this.gitInv5 = this.gitInv5 || P(this.git5), this.gitInv6 = this.gitInv6 || P(this.git6), this.gitInv7 = this.gitInv7 || P(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || P(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || P(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ot, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || kt;
	}
	calculate(e) {
		if (Object.keys(this).forEach((e) => {
			this[e] === "calculated" && (this[e] = void 0);
		}), typeof e != "object") {
			this.updateColors();
			return;
		}
		let t = Object.keys(e);
		t.forEach((t) => {
			this[t] = e[t];
		}), this.updateColors(), t.forEach((t) => {
			this[t] = e[t];
		});
	}
}, i(It, "Theme"), It), Rt = /* @__PURE__ */ i((e) => {
	let t = new Lt();
	return t.calculate(e), t;
}, "getThemeVariables"), zt, Bt = (zt = class {
	constructor() {
		this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif", this.fontSize = "16px", this.tertiaryColor = j("#cde498", 10), this.primaryBorderColor = z(this.primaryColor, this.darkMode), this.secondaryBorderColor = z(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = z(this.tertiaryColor, this.darkMode), this.primaryTextColor = P(this.primaryColor), this.secondaryTextColor = P(this.secondaryColor), this.tertiaryTextColor = P(this.primaryColor), this.lineColor = P(this.background), this.textColor = P(this.background), this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.useGradient = !0, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,0.5))";
	}
	updateColors() {
		this.actorBorder = M(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || N(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || N(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || N(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || N(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || N(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || N(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || N(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || N(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || N(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || M(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || M(this.tertiaryColor, 40);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScale" + e] = M(this["cScale" + e], 10), this["cScalePeer" + e] = this["cScalePeer" + e] || M(this["cScale" + e], 25);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleInv" + e] = this["cScaleInv" + e] || N(this["cScale" + e], { h: 180 });
		this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
		for (let e = 0; e < 5; e++) this["surface" + e] = this["surface" + e] || N(this.mainBkg, {
			h: 30,
			s: -30,
			l: -(5 + e * 5)
		}), this["surfacePeer" + e] = this["surfacePeer" + e] || N(this.mainBkg, {
			h: 30,
			s: -30,
			l: -(8 + e * 5)
		});
		this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || j(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || j(this.mainBkg, 20), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = N(this.primaryColor, { h: 64 }), this.fillType3 = N(this.secondaryColor, { h: 64 }), this.fillType4 = N(this.primaryColor, { h: -64 }), this.fillType5 = N(this.secondaryColor, { h: -64 }), this.fillType6 = N(this.primaryColor, { h: 128 }), this.fillType7 = N(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || N(this.primaryColor, { l: -30 }), this.pie5 = this.pie5 || N(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || N(this.tertiaryColor, {
			h: 40,
			l: -40
		}), this.pie7 = this.pie7 || N(this.primaryColor, {
			h: 60,
			l: -10
		}), this.pie8 = this.pie8 || N(this.primaryColor, {
			h: -60,
			l: -10
		}), this.pie9 = this.pie9 || N(this.primaryColor, {
			h: 120,
			l: 0
		}), this.pie10 = this.pie10 || N(this.primaryColor, {
			h: 60,
			l: -50
		}), this.pie11 = this.pie11 || N(this.primaryColor, {
			h: -60,
			l: -50
		}), this.pie12 = this.pie12 || N(this.primaryColor, {
			h: 120,
			l: -50
		}), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.venn1 = this.venn1 ?? N(this.primaryColor, { l: -30 }), this.venn2 = this.venn2 ?? N(this.secondaryColor, { l: -30 }), this.venn3 = this.venn3 ?? N(this.tertiaryColor, { l: -30 }), this.venn4 = this.venn4 ?? N(this.primaryColor, {
			h: 60,
			l: -30
		}), this.venn5 = this.venn5 ?? N(this.primaryColor, {
			h: -60,
			l: -30
		}), this.venn6 = this.venn6 ?? N(this.secondaryColor, {
			h: 60,
			l: -30
		}), this.venn7 = this.venn7 ?? N(this.primaryColor, {
			h: 120,
			l: -30
		}), this.venn8 = this.venn8 ?? N(this.secondaryColor, {
			h: 120,
			l: -30
		}), this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.cynefin = {
			domainFontSize: this.cynefin?.domainFontSize || 16,
			itemFontSize: this.cynefin?.itemFontSize || 12,
			boundaryColor: this.cynefin?.boundaryColor || this.lineColor,
			boundaryWidth: this.cynefin?.boundaryWidth || 2,
			cliffColor: this.cynefin?.cliffColor || "#8B4513",
			cliffWidth: this.cynefin?.cliffWidth || 4,
			arrowColor: this.cynefin?.arrowColor || this.lineColor,
			arrowWidth: this.cynefin?.arrowWidth || 2,
			complexBg: this.cynefin?.complexBg || "#C8E6C9",
			complicatedBg: this.cynefin?.complicatedBg || "#DCEDC8",
			chaoticBg: this.cynefin?.chaoticBg || "#FFE0B2",
			clearBg: this.cynefin?.clearBg || "#FFF9C4",
			confusionBg: this.cynefin?.confusionBg || "#D7CCC8",
			textColor: this.cynefin?.textColor || this.textColor,
			labelColor: this.cynefin?.labelColor || this.primaryTextColor
		}, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || N(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || N(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || N(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || N(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || N(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || N(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || A(this.quadrant1Fill) ? j(this.quadrant1Fill) : M(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.packet = {
			startByteColor: this.primaryTextColor,
			endByteColor: this.primaryTextColor,
			labelColor: this.primaryTextColor,
			titleColor: this.primaryTextColor,
			blockStrokeColor: this.primaryTextColor,
			blockFillColor: this.mainBkg
		}, this.radar = {
			axisColor: this.radar?.axisColor || this.lineColor,
			axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
			axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
			curveOpacity: this.radar?.curveOpacity || .5,
			curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
			graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
			graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
			graticuleOpacity: this.radar?.graticuleOpacity || .3,
			legendBoxSize: this.radar?.legendBoxSize || 12,
			legendFontSize: this.radar?.legendFontSize || 12
		}, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545", this.wardley = {
			backgroundColor: this.wardley?.backgroundColor || this.background,
			axisColor: this.wardley?.axisColor || this.lineColor,
			axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
			gridColor: this.wardley?.gridColor || this.gridColor,
			componentFill: this.wardley?.componentFill || this.background,
			componentStroke: this.wardley?.componentStroke || this.lineColor,
			componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
			linkStroke: this.wardley?.linkStroke || this.lineColor,
			evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
			annotationStroke: this.wardley?.annotationStroke || this.lineColor,
			annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
			annotationFill: this.wardley?.annotationFill || this.background
		}, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
			legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
		}, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || N(this.primaryColor, { h: -30 }), this.git4 = this.git4 || N(this.primaryColor, { h: -60 }), this.git5 = this.git5 || N(this.primaryColor, { h: -90 }), this.git6 = this.git6 || N(this.primaryColor, { h: 60 }), this.git7 = this.git7 || N(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = j(this.git0, 25), this.git1 = j(this.git1, 25), this.git2 = j(this.git2, 25), this.git3 = j(this.git3, 25), this.git4 = j(this.git4, 25), this.git5 = j(this.git5, 25), this.git6 = j(this.git6, 25), this.git7 = j(this.git7, 25)) : (this.git0 = M(this.git0, 25), this.git1 = M(this.git1, 25), this.git2 = M(this.git2, 25), this.git3 = M(this.git3, 25), this.git4 = M(this.git4, 25), this.git5 = M(this.git5, 25), this.git6 = M(this.git6, 25), this.git7 = M(this.git7, 25)), this.gitInv0 = this.gitInv0 || P(this.git0), this.gitInv1 = this.gitInv1 || P(this.git1), this.gitInv2 = this.gitInv2 || P(this.git2), this.gitInv3 = this.gitInv3 || P(this.git3), this.gitInv4 = this.gitInv4 || P(this.git4), this.gitInv5 = this.gitInv5 || P(this.git5), this.gitInv6 = this.gitInv6 || P(this.git6), this.gitInv7 = this.gitInv7 || P(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || P(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || P(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ot, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || kt;
	}
	calculate(e) {
		if (typeof e != "object") {
			this.updateColors();
			return;
		}
		let t = Object.keys(e);
		t.forEach((t) => {
			this[t] = e[t];
		}), this.updateColors(), t.forEach((t) => {
			this[t] = e[t];
		});
	}
}, i(zt, "Theme"), zt), Vt = /* @__PURE__ */ i((e) => {
	let t = new Bt();
	return t.calculate(e), t;
}, "getThemeVariables"), Ht, Ut = (Ht = class {
	constructor() {
		this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = j(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = N(this.primaryColor, { h: -160 }), this.primaryBorderColor = z(this.primaryColor, this.darkMode), this.secondaryBorderColor = z(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = z(this.tertiaryColor, this.darkMode), this.primaryTextColor = P(this.primaryColor), this.secondaryTextColor = P(this.secondaryColor), this.tertiaryTextColor = P(this.tertiaryColor), this.lineColor = P(this.background), this.textColor = P(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif", this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = this.actorBorder, this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal", this.rowOdd = this.rowOdd || j(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || "#f4f4f4", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.useGradient = !0, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))";
	}
	updateColors() {
		this.secondBkg = j(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = j(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.actorBorder, this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleInv" + e] = this["cScaleInv" + e] || P(this["cScale" + e]);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this.darkMode ? this["cScalePeer" + e] = this["cScalePeer" + e] || j(this["cScale" + e], 10) : this["cScalePeer" + e] = this["cScalePeer" + e] || M(this["cScale" + e], 10);
		this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
		for (let e = 0; e < 5; e++) this["surface" + e] = this["surface" + e] || N(this.mainBkg, { l: -(5 + e * 5) }), this["surfacePeer" + e] = this["surfacePeer" + e] || N(this.mainBkg, { l: -(8 + e * 5) });
		this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = j(this.contrast, 30), this.sectionBkgColor2 = j(this.contrast, 30), this.taskBorderColor = M(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = j(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = M(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.vertLineColor = this.critBkgColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = N(this.primaryColor, { h: 64 }), this.fillType3 = N(this.secondaryColor, { h: 64 }), this.fillType4 = N(this.primaryColor, { h: -64 }), this.fillType5 = N(this.secondaryColor, { h: -64 }), this.fillType6 = N(this.primaryColor, { h: 128 }), this.fillType7 = N(this.secondaryColor, { h: 128 });
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["pie" + e] = this["cScale" + e];
		this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7";
		for (let e = 0; e < 8; e++) this["venn" + (e + 1)] = this["venn" + (e + 1)] ?? this["cScale" + e];
		this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.cynefin = {
			domainFontSize: this.cynefin?.domainFontSize || 16,
			itemFontSize: this.cynefin?.itemFontSize || 12,
			boundaryColor: this.cynefin?.boundaryColor || this.lineColor,
			boundaryWidth: this.cynefin?.boundaryWidth || 2,
			cliffColor: this.cynefin?.cliffColor || "#8B0000",
			cliffWidth: this.cynefin?.cliffWidth || 4,
			arrowColor: this.cynefin?.arrowColor || this.lineColor,
			arrowWidth: this.cynefin?.arrowWidth || 2,
			complexBg: this.cynefin?.complexBg || "#E8F5E9",
			complicatedBg: this.cynefin?.complicatedBg || "#E3F2FD",
			chaoticBg: this.cynefin?.chaoticBg || "#FBE9E7",
			clearBg: this.cynefin?.clearBg || "#FFF8E1",
			confusionBg: this.cynefin?.confusionBg || "#F3E5F5",
			textColor: this.cynefin?.textColor || this.textColor,
			labelColor: this.cynefin?.labelColor || this.primaryTextColor
		}, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || N(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || N(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || N(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || N(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || N(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || N(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || A(this.quadrant1Fill) ? j(this.quadrant1Fill) : M(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
			legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
		}, this.radar = {
			axisColor: this.radar?.axisColor || this.lineColor,
			axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
			axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
			curveOpacity: this.radar?.curveOpacity || .5,
			curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
			graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
			graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
			graticuleOpacity: this.radar?.graticuleOpacity || .3,
			legendBoxSize: this.radar?.legendBoxSize || 12,
			legendFontSize: this.radar?.legendFontSize || 12
		}, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545", this.wardley = {
			backgroundColor: this.wardley?.backgroundColor || this.background,
			axisColor: this.wardley?.axisColor || this.lineColor,
			axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
			gridColor: this.wardley?.gridColor || this.gridColor,
			componentFill: this.wardley?.componentFill || this.background,
			componentStroke: this.wardley?.componentStroke || this.lineColor,
			componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
			linkStroke: this.wardley?.linkStroke || this.lineColor,
			evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
			annotationStroke: this.wardley?.annotationStroke || this.lineColor,
			annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
			annotationFill: this.wardley?.annotationFill || this.background
		}, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = M(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || N(this.primaryColor, { h: -30 }), this.git4 = this.pie5 || N(this.primaryColor, { h: -60 }), this.git5 = this.pie6 || N(this.primaryColor, { h: -90 }), this.git6 = this.pie7 || N(this.primaryColor, { h: 60 }), this.git7 = this.pie8 || N(this.primaryColor, { h: 120 }), this.gitInv0 = this.gitInv0 || P(this.git0), this.gitInv1 = this.gitInv1 || P(this.git1), this.gitInv2 = this.gitInv2 || P(this.git2), this.gitInv3 = this.gitInv3 || P(this.git3), this.gitInv4 = this.gitInv4 || P(this.git4), this.gitInv5 = this.gitInv5 || P(this.git5), this.gitInv6 = this.gitInv6 || P(this.git6), this.gitInv7 = this.gitInv7 || P(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ot, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || kt;
	}
	calculate(e) {
		if (typeof e != "object") {
			this.updateColors();
			return;
		}
		let t = Object.keys(e);
		t.forEach((t) => {
			this[t] = e[t];
		}), this.updateColors(), t.forEach((t) => {
			this[t] = e[t];
		});
	}
}, i(Ht, "Theme"), Ht), Wt = /* @__PURE__ */ i((e) => {
	let t = new Ut();
	return t.calculate(e), t;
}, "getThemeVariables"), Gt, Kt = (Gt = class {
	constructor() {
		this.background = "#ffffff", this.primaryColor = "#cccccc", this.mainBkg = "#ffffff", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.radius = 3, this.strokeWidth = 2, this.primaryBorderColor = z(this.primaryColor, this.darkMode), this.fontFamily = "arial, sans-serif", this.fontSize = "14px", this.nodeBorder = "#000000", this.stateBorder = "#000000", this.useGradient = !0, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "drop-shadow( 0px 1px 2px rgba(0, 0, 0, 0.25));", this.tertiaryColor = "#ffffff", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal";
	}
	updateColors() {
		this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || N(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || N(this.primaryColor, {
			h: 180,
			l: 5
		}), this.primaryBorderColor = this.primaryBorderColor || z(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || z(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || z(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || z(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || P(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || P(this.tertiaryColor), this.lineColor = this.lineColor || P(this.background), this.arrowheadColor = this.arrowheadColor || P(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || M(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || P(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor;
		let e = "#ECECFE", t = "#E9E9F1", n = N(e, {
			h: 180,
			l: 5
		});
		if (this.sectionBkgColor = this.sectionBkgColor || n, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || t, this.sectionBkgColor2 = this.sectionBkgColor2 || e, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || e, this.activeTaskBorderColor = this.activeTaskBorderColor || e, this.activeTaskBkgColor = this.activeTaskBkgColor || j(e, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || e, this.cScale1 = this.cScale1 || t, this.cScale2 = this.cScale2 || n, this.cScale3 = this.cScale3 || N(e, { h: 30 }), this.cScale4 = this.cScale4 || N(e, { h: 60 }), this.cScale5 = this.cScale5 || N(e, { h: 90 }), this.cScale6 = this.cScale6 || N(e, { h: 120 }), this.cScale7 = this.cScale7 || N(e, { h: 150 }), this.cScale8 = this.cScale8 || N(e, {
			h: 210,
			l: 150
		}), this.cScale9 = this.cScale9 || N(e, { h: 270 }), this.cScale10 = this.cScale10 || N(e, { h: 300 }), this.cScale11 = this.cScale11 || N(e, { h: 330 }), this.darkMode) for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScale" + e] = M(this["cScale" + e], 75);
		else for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScale" + e] = M(this["cScale" + e], 25);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleInv" + e] = this["cScaleInv" + e] || P(this["cScale" + e]);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this.darkMode ? this["cScalePeer" + e] = this["cScalePeer" + e] || j(this["cScale" + e], 10) : this["cScalePeer" + e] = this["cScalePeer" + e] || M(this["cScale" + e], 10);
		this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
		let r = this.darkMode ? -4 : -1;
		for (let e = 0; e < 5; e++) this["surface" + e] = this["surface" + e] || N(this.mainBkg, {
			h: 180,
			s: -15,
			l: r * (5 + e * 3)
		}), this["surfacePeer" + e] = this["surfacePeer" + e] || N(this.mainBkg, {
			h: 180,
			s: -15,
			l: r * (8 + e * 3)
		});
		this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || e, this.fillType1 = this.fillType1 || t, this.fillType2 = this.fillType2 || N(e, { h: 64 }), this.fillType3 = this.fillType3 || N(t, { h: 64 }), this.fillType4 = this.fillType4 || N(e, { h: -64 }), this.fillType5 = this.fillType5 || N(t, { h: -64 }), this.fillType6 = this.fillType6 || N(e, { h: 128 }), this.fillType7 = this.fillType7 || N(t, { h: 128 }), this.pie1 = this.pie1 || e, this.pie2 = this.pie2 || t, this.pie3 = this.pie3 || n, this.pie4 = this.pie4 || N(e, { l: -10 }), this.pie5 = this.pie5 || N(t, { l: -10 }), this.pie6 = this.pie6 || N(n, { l: -10 }), this.pie7 = this.pie7 || N(e, {
			h: 60,
			l: -10
		}), this.pie8 = this.pie8 || N(e, {
			h: -60,
			l: -10
		}), this.pie9 = this.pie9 || N(e, {
			h: 120,
			l: 0
		}), this.pie10 = this.pie10 || N(e, {
			h: 60,
			l: -20
		}), this.pie11 = this.pie11 || N(e, {
			h: -60,
			l: -20
		}), this.pie12 = this.pie12 || N(e, {
			h: 120,
			l: -10
		}), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || e, this.quadrant2Fill = this.quadrant2Fill || N(e, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || N(e, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || N(e, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || N(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || N(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || N(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || A(this.quadrant1Fill) ? j(this.quadrant1Fill) : M(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
		}, this.requirementBackground = this.requirementBackground || e, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || e, this.git1 = this.git1 || t, this.git2 = this.git2 || n, this.git3 = this.git3 || N(e, { h: -30 }), this.git4 = this.git4 || N(e, { h: -60 }), this.git5 = this.git5 || N(e, { h: -90 }), this.git6 = this.git6 || N(e, { h: 60 }), this.git7 = this.git7 || N(e, { h: 120 }), this.darkMode ? (this.git0 = j(this.git0, 25), this.git1 = j(this.git1, 25), this.git2 = j(this.git2, 25), this.git3 = j(this.git3, 25), this.git4 = j(this.git4, 25), this.git5 = j(this.git5, 25), this.git6 = j(this.git6, 25), this.git7 = j(this.git7, 25)) : (this.git0 = M(this.git0, 25), this.git1 = M(this.git1, 25), this.git2 = M(this.git2, 25), this.git3 = M(this.git3, 25), this.git4 = M(this.git4, 25), this.git5 = M(this.git5, 25), this.git6 = M(this.git6, 25), this.git7 = M(this.git7, 25)), this.gitInv0 = this.gitInv0 || P(this.git0), this.gitInv1 = this.gitInv1 || P(this.git1), this.gitInv2 = this.gitInv2 || P(this.git2), this.gitInv3 = this.gitInv3 || P(this.git3), this.gitInv4 = this.gitInv4 || P(this.git4), this.gitInv5 = this.gitInv5 || P(this.git5), this.gitInv6 = this.gitInv6 || P(this.git6), this.gitInv7 = this.gitInv7 || P(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ot, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || kt;
	}
	calculate(e) {
		if (typeof e != "object") {
			this.updateColors();
			return;
		}
		let t = Object.keys(e);
		t.forEach((t) => {
			this[t] = e[t];
		}), this.updateColors(), t.forEach((t) => {
			this[t] = e[t];
		});
	}
}, i(Gt, "Theme"), Gt), qt = /* @__PURE__ */ i((e) => {
	let t = new Kt();
	return t.calculate(e), t;
}, "getThemeVariables"), Jt, Yt = (Jt = class {
	constructor() {
		this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = j(this.primaryColor, 16), this.tertiaryColor = N(this.primaryColor, { h: -160 }), this.primaryBorderColor = P(this.background), this.secondaryBorderColor = z(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = z(this.tertiaryColor, this.darkMode), this.primaryTextColor = P(this.primaryColor), this.secondaryTextColor = P(this.secondaryColor), this.tertiaryTextColor = P(this.tertiaryColor), this.mainBkg = "#2a2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = j(P("#323D47"), 10), this.border1 = "#ccc", this.border2 = O(255, 255, 255, .25), this.arrowheadColor = P(this.background), this.fontFamily = "arial, sans-serif", this.fontSize = "14px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 3, this.strokeWidth = 1, this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = "arial, sans-serif", this.fontSize = "14px", this.useGradient = !0, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,0.2))", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal";
	}
	updateColors() {
		if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || N(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || N(this.primaryColor, {
			h: 180,
			l: 5
		}), this.primaryBorderColor = this.primaryBorderColor || z(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || z(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || z(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || z(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || P(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || P(this.tertiaryColor), this.lineColor = this.lineColor || P(this.background), this.arrowheadColor = this.arrowheadColor || P(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.border1, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || M(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || P(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || j(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || N(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || N(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || N(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || N(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || N(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || N(this.primaryColor, {
			h: 210,
			l: 150
		}), this.cScale9 = this.cScale9 || N(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || N(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || N(this.primaryColor, { h: 330 }), this.darkMode) for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScale" + e] = M(this["cScale" + e], 75);
		else for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScale" + e] = M(this["cScale" + e], 25);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleInv" + e] = this["cScaleInv" + e] || P(this["cScale" + e]);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this.darkMode ? this["cScalePeer" + e] = this["cScalePeer" + e] || j(this["cScale" + e], 10) : this["cScalePeer" + e] = this["cScalePeer" + e] || M(this["cScale" + e], 10);
		this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
		let e = this.darkMode ? -4 : -1;
		for (let t = 0; t < 5; t++) this["surface" + t] = this["surface" + t] || N(this.mainBkg, {
			h: 180,
			s: -15,
			l: e * (5 + t * 3)
		}), this["surfacePeer" + t] = this["surfacePeer" + t] || N(this.mainBkg, {
			h: 180,
			s: -15,
			l: e * (8 + t * 3)
		});
		this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || N(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || N(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || N(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || N(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || N(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || N(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || N(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || N(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || N(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || N(this.primaryColor, {
			h: 60,
			l: -10
		}), this.pie8 = this.pie8 || N(this.primaryColor, {
			h: -60,
			l: -10
		}), this.pie9 = this.pie9 || N(this.primaryColor, {
			h: 120,
			l: 0
		}), this.pie10 = this.pie10 || N(this.primaryColor, {
			h: 60,
			l: -20
		}), this.pie11 = this.pie11 || N(this.primaryColor, {
			h: -60,
			l: -20
		}), this.pie12 = this.pie12 || N(this.primaryColor, {
			h: 120,
			l: -10
		}), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || N(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || N(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || N(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || N(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || N(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || N(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || A(this.quadrant1Fill) ? j(this.quadrant1Fill) : M(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
		}, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || "#0b0000", this.git1 = this.git1 || "#4d1037", this.git2 = this.git2 || "#3f5258", this.git3 = this.git3 || "#4f2f1b", this.git4 = this.git4 || "#6e0a0a", this.git5 = this.git5 || "#3b0048", this.git6 = this.git6 || "#995a01", this.git7 = this.git7 || "#154706", this.gitDarkMode = !0, this.gitDarkMode ? (this.git0 = j(this.git0, 25), this.git1 = j(this.git1, 25), this.git2 = j(this.git2, 25), this.git3 = j(this.git3, 25), this.git4 = j(this.git4, 25), this.git5 = j(this.git5, 25), this.git6 = j(this.git6, 25), this.git7 = j(this.git7, 25)) : (this.git0 = M(this.git0, 25), this.git1 = M(this.git1, 25), this.git2 = M(this.git2, 25), this.git3 = M(this.git3, 25), this.git4 = M(this.git4, 25), this.git5 = M(this.git5, 25), this.git6 = M(this.git6, 25), this.git7 = M(this.git7, 25)), this.gitInv0 = this.gitInv0 || P(this.git0), this.gitInv1 = this.gitInv1 || P(this.git1), this.gitInv2 = this.gitInv2 || P(this.git2), this.gitInv3 = this.gitInv3 || P(this.git3), this.gitInv4 = this.gitInv4 || P(this.git4), this.gitInv5 = this.gitInv5 || P(this.git5), this.gitInv6 = this.gitInv6 || P(this.git6), this.gitInv7 = this.gitInv7 || P(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ot, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || kt;
	}
	calculate(e) {
		if (typeof e != "object") {
			this.updateColors();
			return;
		}
		let t = Object.keys(e);
		t.forEach((t) => {
			this[t] = e[t];
		}), this.updateColors(), t.forEach((t) => {
			this[t] = e[t];
		});
	}
}, i(Jt, "Theme"), Jt), Xt = /* @__PURE__ */ i((e) => {
	let t = new Yt();
	return t.calculate(e), t;
}, "getThemeVariables"), Zt, Qt = (Zt = class {
	constructor() {
		this.background = "#ffffff", this.primaryColor = "#cccccc", this.mainBkg = "#ffffff", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#28253D", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.primaryBorderColor = z("#28253D", this.darkMode), this.fontFamily = "\"Recursive Variable\", arial, sans-serif", this.fontSize = "14px", this.nodeBorder = "#28253D", this.stateBorder = "#28253D", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.tertiaryColor = "#ffffff", this.clusterBkg = "#F9F9FB", this.clusterBorder = "#BDBCCC", this.noteBorderColor = "#FACC15", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.actorBorder = "#28253D", this.filterColor = "#000000";
	}
	updateColors() {
		this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#28253D"), this.secondaryColor = this.secondaryColor || N(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || N(this.primaryColor, {
			h: 180,
			l: 5
		}), this.primaryBorderColor = this.primaryBorderColor || z(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || z(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || z(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || z(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#FEF9C3", this.noteTextColor = this.noteTextColor || "#28253D", this.secondaryTextColor = this.secondaryTextColor || P(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || P(this.tertiaryColor), this.lineColor = this.lineColor || P(this.background), this.arrowheadColor = this.arrowheadColor || P(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.noteFontWeight = 600, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || M(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || P(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor;
		let e = "#ECECFE", t = "#E9E9F1", n = N(e, {
			h: 180,
			l: 5
		});
		this.sectionBkgColor = this.sectionBkgColor || n, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || t, this.sectionBkgColor2 = this.sectionBkgColor2 || e, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || e, this.activeTaskBorderColor = this.activeTaskBorderColor || e, this.activeTaskBkgColor = this.activeTaskBkgColor || j(e, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.compositeTitleBackground = "#F9F9FB", this.altBackground = "#F9F9FB", this.stateEdgeLabelBackground = "#FFFFFF", this.fontWeight = 600, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor;
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScale" + e] = this.mainBkg;
		if (this.darkMode) for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScale" + e] = M(this["cScale" + e], 75);
		else for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScale" + e] = M(this["cScale" + e], 25);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleInv" + e] = this["cScaleInv" + e] || P(this["cScale" + e]);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this.darkMode ? this["cScalePeer" + e] = this["cScalePeer" + e] || j(this["cScale" + e], 10) : this["cScalePeer" + e] = this["cScalePeer" + e] || M(this["cScale" + e], 10);
		this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
		let r = this.darkMode ? -4 : -1;
		for (let e = 0; e < 5; e++) this["surface" + e] = this["surface" + e] || N(this.mainBkg, {
			h: 180,
			s: -15,
			l: r * (5 + e * 3)
		}), this["surfacePeer" + e] = this["surfacePeer" + e] || N(this.mainBkg, {
			h: 180,
			s: -15,
			l: r * (8 + e * 3)
		});
		this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || e, this.fillType1 = this.fillType1 || t, this.fillType2 = this.fillType2 || N(e, { h: 64 }), this.fillType3 = this.fillType3 || N(t, { h: 64 }), this.fillType4 = this.fillType4 || N(e, { h: -64 }), this.fillType5 = this.fillType5 || N(t, { h: -64 }), this.fillType6 = this.fillType6 || N(e, { h: 128 }), this.fillType7 = this.fillType7 || N(t, { h: 128 }), this.pie1 = this.pie1 || e, this.pie2 = this.pie2 || t, this.pie3 = this.pie3 || n, this.pie4 = this.pie4 || N(e, { l: -10 }), this.pie5 = this.pie5 || N(t, { l: -10 }), this.pie6 = this.pie6 || N(n, { l: -10 }), this.pie7 = this.pie7 || N(e, {
			h: 60,
			l: -10
		}), this.pie8 = this.pie8 || N(e, {
			h: -60,
			l: -10
		}), this.pie9 = this.pie9 || N(e, {
			h: 120,
			l: 0
		}), this.pie10 = this.pie10 || N(e, {
			h: 60,
			l: -20
		}), this.pie11 = this.pie11 || N(e, {
			h: -60,
			l: -20
		}), this.pie12 = this.pie12 || N(e, {
			h: 120,
			l: -10
		}), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || e, this.quadrant2Fill = this.quadrant2Fill || N(e, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || N(e, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || N(e, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || N(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || N(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || N(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || A(this.quadrant1Fill) ? j(this.quadrant1Fill) : M(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
		}, this.requirementBackground = this.requirementBackground || e, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.requirementEdgeLabelBackground = "#FFFFFF", this.git0 = this.git0 || e, this.git1 = this.git1 || t, this.git2 = this.git2 || n, this.git3 = this.git3 || N(e, { h: -30 }), this.git4 = this.git4 || N(e, { h: -60 }), this.git5 = this.git5 || N(e, { h: -90 }), this.git6 = this.git6 || N(e, { h: 60 }), this.git7 = this.git7 || N(e, { h: 120 }), this.darkMode ? (this.git0 = j(this.git0, 25), this.git1 = j(this.git1, 25), this.git2 = j(this.git2, 25), this.git3 = j(this.git3, 25), this.git4 = j(this.git4, 25), this.git5 = j(this.git5, 25), this.git6 = j(this.git6, 25), this.git7 = j(this.git7, 25)) : (this.git0 = M(this.git0, 25), this.git1 = M(this.git1, 25), this.git2 = M(this.git2, 25), this.git3 = M(this.git3, 25), this.git4 = M(this.git4, 25), this.git5 = M(this.git5, 25), this.git6 = M(this.git6, 25), this.git7 = M(this.git7, 25)), this.gitInv0 = this.gitInv0 || P(this.git0), this.gitInv1 = this.gitInv1 || P(this.git1), this.gitInv2 = this.gitInv2 || P(this.git2), this.gitInv3 = this.gitInv3 || P(this.git3), this.gitInv4 = this.gitInv4 || P(this.git4), this.gitInv5 = this.gitInv5 || P(this.git5), this.gitInv6 = this.gitInv6 || P(this.git6), this.gitInv7 = this.gitInv7 || P(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.erEdgeLabelBackground = "#FFFFFF", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ot, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || kt;
	}
	calculate(e) {
		if (typeof e != "object") {
			this.updateColors();
			return;
		}
		let t = Object.keys(e);
		t.forEach((t) => {
			this[t] = e[t];
		}), this.updateColors(), t.forEach((t) => {
			this[t] = e[t];
		});
	}
}, i(Zt, "Theme"), Zt), $t = /* @__PURE__ */ i((e) => {
	let t = new Qt();
	return t.calculate(e), t;
}, "getThemeVariables"), en, tn = (en = class {
	constructor() {
		this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = j(this.primaryColor, 16), this.tertiaryColor = N(this.primaryColor, { h: -160 }), this.primaryBorderColor = P(this.background), this.secondaryBorderColor = z(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = z(this.tertiaryColor, this.darkMode), this.primaryTextColor = P(this.primaryColor), this.secondaryTextColor = P(this.secondaryColor), this.tertiaryTextColor = P(this.tertiaryColor), this.mainBkg = "#111113", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = j(P("#323D47"), 10), this.border1 = "#ccc", this.border2 = O(255, 255, 255, .25), this.arrowheadColor = P(this.background), this.fontFamily = "\"Recursive Variable\", arial, sans-serif", this.fontSize = "14px", this.labelBackground = "#111113", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.noteBkgColor = this.noteBkgColor ?? "#FEF9C3", this.noteTextColor = this.noteTextColor ?? "#28253D", this.THEME_COLOR_LIMIT = 12, this.fontFamily = "\"Recursive Variable\", arial, sans-serif", this.fontSize = "14px", this.nodeBorder = "#FFFFFF", this.stateBorder = "#FFFFFF", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.clusterBkg = "#1E1A2E", this.clusterBorder = "#BDBCCC", this.noteBorderColor = "#FACC15", this.noteFontWeight = 600, this.filterColor = "#FFFFFF";
	}
	updateColors() {
		if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#FFFFFF"), this.secondaryColor = this.secondaryColor || N(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || N(this.primaryColor, {
			h: 180,
			l: 5
		}), this.primaryBorderColor = this.primaryBorderColor || z(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || z(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || z(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || z(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#FFFFFF", this.secondaryTextColor = this.secondaryTextColor || P(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || P(this.tertiaryColor), this.lineColor = this.lineColor || P(this.background), this.arrowheadColor = this.arrowheadColor || P(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.border1, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = "#FFFFFF", this.signalColor = "#FFFFFF", this.labelBoxBorderColor = "#BDBCCC", this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || M(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || P(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || j(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.compositeBackground = "#16141F", this.altBackground = "#16141F", this.compositeTitleBackground = "#16141F", this.stateEdgeLabelBackground = "#16141F", this.fontWeight = 600, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || N(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || N(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || N(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || N(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || N(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || N(this.primaryColor, {
			h: 210,
			l: 150
		}), this.cScale9 = this.cScale9 || N(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || N(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || N(this.primaryColor, { h: 330 }), this.darkMode) for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScale" + e] = M(this["cScale" + e], 75);
		else for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScale" + e] = M(this["cScale" + e], 25);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleInv" + e] = this["cScaleInv" + e] || P(this["cScale" + e]);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this.darkMode ? this["cScalePeer" + e] = this["cScalePeer" + e] || j(this["cScale" + e], 10) : this["cScalePeer" + e] = this["cScalePeer" + e] || M(this["cScale" + e], 10);
		this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
		let e = this.darkMode ? -4 : -1;
		for (let t = 0; t < 5; t++) this["surface" + t] = this["surface" + t] || N(this.mainBkg, {
			h: 180,
			s: -15,
			l: e * (5 + t * 3)
		}), this["surfacePeer" + t] = this["surfacePeer" + t] || N(this.mainBkg, {
			h: 180,
			s: -15,
			l: e * (8 + t * 3)
		});
		this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || N(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || N(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || N(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || N(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || N(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || N(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || N(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || N(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || N(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || N(this.primaryColor, {
			h: 60,
			l: -10
		}), this.pie8 = this.pie8 || N(this.primaryColor, {
			h: -60,
			l: -10
		}), this.pie9 = this.pie9 || N(this.primaryColor, {
			h: 120,
			l: 0
		}), this.pie10 = this.pie10 || N(this.primaryColor, {
			h: 60,
			l: -20
		}), this.pie11 = this.pie11 || N(this.primaryColor, {
			h: -60,
			l: -20
		}), this.pie12 = this.pie12 || N(this.primaryColor, {
			h: 120,
			l: -10
		}), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || N(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || N(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || N(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || N(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || N(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || N(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || A(this.quadrant1Fill) ? j(this.quadrant1Fill) : M(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
		}, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.requirementEdgeLabelBackground = "#16141F", this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || N(this.primaryColor, { h: -30 }), this.git4 = this.git4 || N(this.primaryColor, { h: -60 }), this.git5 = this.git5 || N(this.primaryColor, { h: -90 }), this.git6 = this.git6 || N(this.primaryColor, { h: 60 }), this.git7 = this.git7 || N(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = j(this.git0, 25), this.git1 = j(this.git1, 25), this.git2 = j(this.git2, 25), this.git3 = j(this.git3, 25), this.git4 = j(this.git4, 25), this.git5 = j(this.git5, 25), this.git6 = j(this.git6, 25), this.git7 = j(this.git7, 25)) : (this.git0 = M(this.git0, 25), this.git1 = M(this.git1, 25), this.git2 = M(this.git2, 25), this.git3 = M(this.git3, 25), this.git4 = M(this.git4, 25), this.git5 = M(this.git5, 25), this.git6 = M(this.git6, 25), this.git7 = M(this.git7, 25)), this.gitInv0 = this.gitInv0 || P(this.git0), this.gitInv1 = this.gitInv1 || P(this.git1), this.gitInv2 = this.gitInv2 || P(this.git2), this.gitInv3 = this.gitInv3 || P(this.git3), this.gitInv4 = this.gitInv4 || P(this.git4), this.gitInv5 = this.gitInv5 || P(this.git5), this.gitInv6 = this.gitInv6 || P(this.git6), this.gitInv7 = this.gitInv7 || P(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.erEdgeLabelBackground = "#16141F", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ot, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || kt;
	}
	calculate(e) {
		if (typeof e != "object") {
			this.updateColors();
			return;
		}
		let t = Object.keys(e);
		t.forEach((t) => {
			this[t] = e[t];
		}), this.updateColors(), t.forEach((t) => {
			this[t] = e[t];
		});
	}
}, i(en, "Theme"), en), nn = /* @__PURE__ */ i((e) => {
	let t = new tn();
	return t.calculate(e), t;
}, "getThemeVariables"), rn, an = (rn = class {
	constructor() {
		this.background = "#ffffff", this.primaryColor = "#cccccc", this.mainBkg = "#ffffff", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#28253D", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.primaryBorderColor = z(this.primaryColor, this.darkMode), this.fontFamily = "\"Recursive Variable\", arial, sans-serif", this.fontSize = "14px", this.nodeBorder = "#28253D", this.stateBorder = "#28253D", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.tertiaryColor = "#ffffff", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.actorBorder = "#28253D", this.noteBorderColor = "#FACC15", this.noteFontWeight = 600, this.borderColorArray = [
			"#E879F9",
			"#2DD4BF",
			"#FB923C",
			"#22D3EE",
			"#4ADE80",
			"#A78BFA",
			"#F87171",
			"#FACC15",
			"#818CF8",
			"#A3E635 ",
			"#38BDF8",
			"#FB7185"
		], this.bkgColorArray = [
			"#FDF4FF",
			"#F0FDFA",
			"#FFF7ED",
			"#ECFEFF",
			"#F0FDF4",
			"#F5F3FF",
			"#FEF2F2",
			"#FEFCE8",
			"#EEF2FF",
			"#F7FEE7",
			"#F0F9FF",
			"#FFF1F2"
		], this.filterColor = "#000000";
	}
	updateColors() {
		this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#28253D"), this.secondaryColor = this.secondaryColor || N(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || N(this.primaryColor, {
			h: 180,
			l: 5
		}), this.primaryBorderColor = this.primaryBorderColor || z(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || z(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || z(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || z(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#28253D", this.secondaryTextColor = this.secondaryTextColor || P(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || P(this.tertiaryColor), this.lineColor = this.lineColor || P(this.background), this.arrowheadColor = this.arrowheadColor || P(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || M(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || P(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor;
		let e = "#ECECFE", t = "#E9E9F1", n = N(e, {
			h: 180,
			l: 5
		});
		this.sectionBkgColor = this.sectionBkgColor || n, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || t, this.sectionBkgColor2 = this.sectionBkgColor2 || e, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || e, this.activeTaskBorderColor = this.activeTaskBorderColor || e, this.activeTaskBkgColor = this.activeTaskBkgColor || j(e, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || "#f4a8ff", this.cScale1 = this.cScale1 || "#46ecd5", this.cScale2 = this.cScale2 || "#ffb86a", this.cScale3 = this.cScale3 || "#dab2ff", this.cScale4 = this.cScale4 || "#7bf1a8", this.cScale5 = this.cScale5 || "#c4b4ff", this.cScale6 = this.cScale6 || "#ffa2a2", this.cScale7 = this.cScale7 || "#ffdf20", this.cScale8 = this.cScale8 || "#a3b3ff", this.cScale9 = this.cScale9 || "#bbf451", this.cScale10 = this.cScale10 || "#74d4ff", this.cScale11 = this.cScale11 || "#ffa1ad";
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleInv" + e] = this["cScaleInv" + e] || P(this["cScale" + e]);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this.darkMode ? this["cScalePeer" + e] = this["cScalePeer" + e] || j(this["cScale" + e], 10) : this["cScalePeer" + e] = this["cScalePeer" + e] || M(this["cScale" + e], 10);
		this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
		let r = this.darkMode ? -4 : -1;
		for (let e = 0; e < 5; e++) this["surface" + e] = this["surface" + e] || N(this.mainBkg, {
			h: 180,
			s: -15,
			l: r * (5 + e * 3)
		}), this["surfacePeer" + e] = this["surfacePeer" + e] || N(this.mainBkg, {
			h: 180,
			s: -15,
			l: r * (8 + e * 3)
		});
		this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || e, this.fillType1 = this.fillType1 || t, this.fillType2 = this.fillType2 || N(e, { h: 64 }), this.fillType3 = this.fillType3 || N(t, { h: 64 }), this.fillType4 = this.fillType4 || N(e, { h: -64 }), this.fillType5 = this.fillType5 || N(t, { h: -64 }), this.fillType6 = this.fillType6 || N(e, { h: 128 }), this.fillType7 = this.fillType7 || N(t, { h: 128 }), this.pie1 = this.pie1 || e, this.pie2 = this.pie2 || t, this.pie3 = this.pie3 || n, this.pie4 = this.pie4 || N(e, { l: -10 }), this.pie5 = this.pie5 || N(t, { l: -10 }), this.pie6 = this.pie6 || N(n, { l: -10 }), this.pie7 = this.pie7 || N(e, {
			h: 60,
			l: -10
		}), this.pie8 = this.pie8 || N(e, {
			h: -60,
			l: -10
		}), this.pie9 = this.pie9 || N(e, {
			h: 120,
			l: 0
		}), this.pie10 = this.pie10 || N(e, {
			h: 60,
			l: -20
		}), this.pie11 = this.pie11 || N(e, {
			h: -60,
			l: -20
		}), this.pie12 = this.pie12 || N(e, {
			h: 120,
			l: -10
		}), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || e, this.quadrant2Fill = this.quadrant2Fill || N(e, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || N(e, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || N(e, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || N(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || N(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || N(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || A(this.quadrant1Fill) ? j(this.quadrant1Fill) : M(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
		}, this.requirementBackground = this.requirementBackground || e, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || e, this.git1 = this.git1 || t, this.git2 = this.git2 || n, this.git3 = this.git3 || N(e, { h: -30 }), this.git4 = this.git4 || N(e, { h: -60 }), this.git5 = this.git5 || N(e, { h: -90 }), this.git6 = this.git6 || N(e, { h: 60 }), this.git7 = this.git7 || N(e, { h: 120 }), this.darkMode ? (this.git0 = j(this.git0, 25), this.git1 = j(this.git1, 25), this.git2 = j(this.git2, 25), this.git3 = j(this.git3, 25), this.git4 = j(this.git4, 25), this.git5 = j(this.git5, 25), this.git6 = j(this.git6, 25), this.git7 = j(this.git7, 25)) : (this.git0 = M(this.git0, 25), this.git1 = M(this.git1, 25), this.git2 = M(this.git2, 25), this.git3 = M(this.git3, 25), this.git4 = M(this.git4, 25), this.git5 = M(this.git5, 25), this.git6 = M(this.git6, 25), this.git7 = M(this.git7, 25)), this.gitInv0 = this.gitInv0 || P(this.git0), this.gitInv1 = this.gitInv1 || P(this.git1), this.gitInv2 = this.gitInv2 || P(this.git2), this.gitInv3 = this.gitInv3 || P(this.git3), this.gitInv4 = this.gitInv4 || P(this.git4), this.gitInv5 = this.gitInv5 || P(this.git5), this.gitInv6 = this.gitInv6 || P(this.git6), this.gitInv7 = this.gitInv7 || P(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.fontWeight = 600, this.erEdgeLabelBackground = "#FFFFFF", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ot, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || kt;
	}
	calculate(e) {
		if (typeof e != "object") {
			this.updateColors();
			return;
		}
		let t = Object.keys(e);
		t.forEach((t) => {
			this[t] = e[t];
		}), this.updateColors(), t.forEach((t) => {
			this[t] = e[t];
		});
	}
}, i(rn, "Theme"), rn), on = /* @__PURE__ */ i((e) => {
	let t = new an();
	return t.calculate(e), t;
}, "getThemeVariables"), sn, cn = (sn = class {
	constructor() {
		this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = j(this.primaryColor, 16), this.tertiaryColor = N(this.primaryColor, { h: -160 }), this.primaryBorderColor = P(this.background), this.secondaryBorderColor = z(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = z(this.tertiaryColor, this.darkMode), this.primaryTextColor = P(this.primaryColor), this.secondaryTextColor = P(this.secondaryColor), this.tertiaryTextColor = P(this.tertiaryColor), this.mainBkg = "#111113", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = j(P("#323D47"), 10), this.border1 = "#ccc", this.border2 = O(255, 255, 255, .25), this.arrowheadColor = P(this.background), this.fontFamily = "\"Recursive Variable\", arial, sans-serif", this.fontSize = "14px", this.labelBackground = "#111113", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.noteBkgColor = this.noteBkgColor ?? "#FEF9C3", this.noteTextColor = this.noteTextColor ?? "#28253D", this.THEME_COLOR_LIMIT = 12, this.fontFamily = "\"Recursive Variable\", arial, sans-serif", this.fontSize = "14px", this.nodeBorder = "#FFFFFF", this.stateBorder = "#FFFFFF", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.clusterBkg = "#1E1A2E", this.clusterBorder = "#BDBCCC", this.noteBorderColor = "#FACC15", this.noteFontWeight = 600, this.borderColorArray = [
			"#E879F9",
			"#2DD4BF",
			"#FB923C",
			"#22D3EE",
			"#4ADE80",
			"#A78BFA",
			"#F87171",
			"#FACC15",
			"#818CF8",
			"#A3E635 ",
			"#38BDF8",
			"#FB7185"
		], this.bkgColorArray = [], this.filterColor = "#FFFFFF";
	}
	updateColors() {
		this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#FFFFFF"), this.secondaryColor = this.secondaryColor || N(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || N(this.primaryColor, {
			h: 180,
			l: 5
		}), this.primaryBorderColor = this.primaryBorderColor || z(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || z(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || z(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || z(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#FFFFFF", this.secondaryTextColor = this.secondaryTextColor || P(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || P(this.tertiaryColor), this.lineColor = this.lineColor || P(this.background), this.arrowheadColor = this.arrowheadColor || P(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.border1, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = "#FFFFFF", this.signalColor = "#FFFFFF", this.labelBoxBorderColor = "#BDBCCC", this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || M(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || P(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.rootLabelColor = "#FFFFFF", this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || j(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || "#f4a8ff", this.cScale1 = this.cScale1 || "#46ecd5", this.cScale2 = this.cScale2 || "#ffb86a", this.cScale3 = this.cScale3 || "#dab2ff", this.cScale4 = this.cScale4 || "#7bf1a8", this.cScale5 = this.cScale5 || "#c4b4ff", this.cScale6 = this.cScale6 || "#ffa2a2", this.cScale7 = this.cScale7 || "#ffdf20", this.cScale8 = this.cScale8 || "#a3b3ff", this.cScale9 = this.cScale9 || "#bbf451", this.cScale10 = this.cScale10 || "#74d4ff", this.cScale11 = this.cScale11 || "#ffa1ad";
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleInv" + e] = this["cScaleInv" + e] || P(this["cScale" + e]);
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this.darkMode ? this["cScalePeer" + e] = this["cScalePeer" + e] || j(this["cScale" + e], 10) : this["cScalePeer" + e] = this["cScalePeer" + e] || M(this["cScale" + e], 10);
		this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
		for (let e = 0; e < this.THEME_COLOR_LIMIT; e++) this["cScaleLabel" + e] = M(this["cScale" + e], 75);
		let e = this.darkMode ? -4 : -1;
		for (let t = 0; t < 5; t++) this["surface" + t] = this["surface" + t] || N(this.mainBkg, {
			h: 180,
			s: -15,
			l: e * (5 + t * 3)
		}), this["surfacePeer" + t] = this["surfacePeer" + t] || N(this.mainBkg, {
			h: 180,
			s: -15,
			l: e * (8 + t * 3)
		});
		this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || N(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || N(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || N(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || N(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || N(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || N(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || N(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || N(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || N(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || N(this.primaryColor, {
			h: 60,
			l: -10
		}), this.pie8 = this.pie8 || N(this.primaryColor, {
			h: -60,
			l: -10
		}), this.pie9 = this.pie9 || N(this.primaryColor, {
			h: 120,
			l: 0
		}), this.pie10 = this.pie10 || N(this.primaryColor, {
			h: 60,
			l: -20
		}), this.pie11 = this.pie11 || N(this.primaryColor, {
			h: -60,
			l: -20
		}), this.pie12 = this.pie12 || N(this.primaryColor, {
			h: 120,
			l: -10
		}), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || N(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || N(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || N(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || N(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || N(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || N(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || A(this.quadrant1Fill) ? j(this.quadrant1Fill) : M(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
		}, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || N(this.primaryColor, { h: -30 }), this.git4 = this.git4 || N(this.primaryColor, { h: -60 }), this.git5 = this.git5 || N(this.primaryColor, { h: -90 }), this.git6 = this.git6 || N(this.primaryColor, { h: 60 }), this.git7 = this.git7 || N(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = j(this.git0, 25), this.git1 = j(this.git1, 25), this.git2 = j(this.git2, 25), this.git3 = j(this.git3, 25), this.git4 = j(this.git4, 25), this.git5 = j(this.git5, 25), this.git6 = j(this.git6, 25), this.git7 = j(this.git7, 25)) : (this.git0 = M(this.git0, 25), this.git1 = M(this.git1, 25), this.git2 = M(this.git2, 25), this.git3 = M(this.git3, 25), this.git4 = M(this.git4, 25), this.git5 = M(this.git5, 25), this.git6 = M(this.git6, 25), this.git7 = M(this.git7, 25)), this.gitInv0 = this.gitInv0 || P(this.git0), this.gitInv1 = this.gitInv1 || P(this.git1), this.gitInv2 = this.gitInv2 || P(this.git2), this.gitInv3 = this.gitInv3 || P(this.git3), this.gitInv4 = this.gitInv4 || P(this.git4), this.gitInv5 = this.gitInv5 || P(this.git5), this.gitInv6 = this.gitInv6 || P(this.git6), this.gitInv7 = this.gitInv7 || P(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.fontWeight = 600, this.erEdgeLabelBackground = "#16141F", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ot, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || kt;
	}
	calculate(e) {
		if (typeof e != "object") {
			this.updateColors();
			return;
		}
		let t = Object.keys(e);
		t.forEach((t) => {
			this[t] = e[t];
		}), this.updateColors(), t.forEach((t) => {
			this[t] = e[t];
		});
	}
}, i(sn, "Theme"), sn), ln = {
	base: { getThemeVariables: Mt },
	dark: { getThemeVariables: Ft },
	default: { getThemeVariables: Rt },
	forest: { getThemeVariables: Vt },
	neutral: { getThemeVariables: Wt },
	neo: { getThemeVariables: qt },
	"neo-dark": { getThemeVariables: Xt },
	redux: { getThemeVariables: $t },
	"redux-dark": { getThemeVariables: nn },
	"redux-color": { getThemeVariables: on },
	"redux-dark-color": { getThemeVariables: /* @__PURE__ */ i((e) => {
		let t = new cn();
		return t.calculate(e), t;
	}, "getThemeVariables") }
}, un = {
	flowchart: {
		useMaxWidth: !0,
		titleTopMargin: 25,
		subGraphTitleMargin: {
			top: 0,
			bottom: 0
		},
		diagramPadding: 8,
		htmlLabels: null,
		nodeSpacing: 50,
		rankSpacing: 50,
		curve: "basis",
		padding: 15,
		defaultRenderer: "dagre-wrapper",
		wrappingWidth: 200,
		inheritDir: !1
	},
	swimlane: {
		useMaxWidth: !0,
		lineHops: "arc",
		ignoreCrossLaneEdges: !0,
		optimizeRanksByCrossings: !0,
		automaticLaneOrdering: !1
	},
	sequence: {
		useMaxWidth: !0,
		hideUnusedParticipants: !1,
		activationWidth: 10,
		diagramMarginX: 50,
		diagramMarginY: 10,
		actorMargin: 50,
		width: 150,
		height: 65,
		boxMargin: 10,
		boxTextMargin: 5,
		noteMargin: 10,
		messageMargin: 35,
		messageAlign: "center",
		mirrorActors: !0,
		forceMenus: !1,
		bottomMarginAdj: 1,
		rightAngles: !1,
		showSequenceNumbers: !1,
		actorFontSize: 14,
		actorFontFamily: "\"Open Sans\", sans-serif",
		actorFontWeight: 400,
		noteFontSize: 14,
		noteFontFamily: "\"trebuchet ms\", verdana, arial, sans-serif",
		noteFontWeight: 400,
		noteAlign: "center",
		messageFontSize: 16,
		messageFontFamily: "\"trebuchet ms\", verdana, arial, sans-serif",
		messageFontWeight: 400,
		wrap: !1,
		wrapPadding: 10,
		labelBoxWidth: 50,
		labelBoxHeight: 20
	},
	gantt: {
		useMaxWidth: !0,
		titleTopMargin: 25,
		barHeight: 20,
		barGap: 4,
		topPadding: 50,
		rightPadding: 75,
		leftPadding: 75,
		gridLineStartPadding: 35,
		fontSize: 11,
		sectionFontSize: 11,
		numberSectionStyles: 4,
		axisFormat: "%Y-%m-%d",
		topAxis: !1,
		displayMode: "",
		weekday: "sunday"
	},
	journey: {
		useMaxWidth: !0,
		diagramMarginX: 50,
		diagramMarginY: 10,
		leftMargin: 150,
		maxLabelWidth: 360,
		width: 150,
		height: 50,
		boxMargin: 10,
		boxTextMargin: 5,
		noteMargin: 10,
		messageMargin: 35,
		messageAlign: "center",
		bottomMarginAdj: 1,
		rightAngles: !1,
		taskFontSize: 14,
		taskFontFamily: "\"Open Sans\", sans-serif",
		taskMargin: 50,
		activationWidth: 10,
		textPlacement: "fo",
		actorColours: [
			"#8FBC8F",
			"#7CFC00",
			"#00FFFF",
			"#20B2AA",
			"#B0E0E6",
			"#FFFFE0"
		],
		sectionFills: [
			"#191970",
			"#8B008B",
			"#4B0082",
			"#2F4F4F",
			"#800000",
			"#8B4513",
			"#00008B"
		],
		sectionColours: ["#fff"],
		titleColor: "",
		titleFontFamily: "\"trebuchet ms\", verdana, arial, sans-serif",
		titleFontSize: "4ex"
	},
	class: {
		useMaxWidth: !0,
		titleTopMargin: 25,
		arrowMarkerAbsolute: !1,
		dividerMargin: 10,
		padding: 5,
		textHeight: 10,
		defaultRenderer: "dagre-wrapper",
		htmlLabels: !1,
		hideEmptyMembersBox: !1,
		hierarchicalNamespaces: !0
	},
	state: {
		useMaxWidth: !0,
		titleTopMargin: 25,
		dividerMargin: 10,
		sizeUnit: 5,
		padding: 8,
		textHeight: 10,
		titleShift: -15,
		noteMargin: 10,
		forkWidth: 70,
		forkHeight: 7,
		miniPadding: 2,
		fontSizeFactor: 5.02,
		fontSize: 24,
		labelHeight: 16,
		edgeLengthFactor: "20",
		compositTitleSize: 35,
		radius: 5,
		defaultRenderer: "dagre-wrapper"
	},
	er: {
		useMaxWidth: !0,
		titleTopMargin: 25,
		diagramPadding: 20,
		layoutDirection: "TB",
		minEntityWidth: 100,
		minEntityHeight: 75,
		entityPadding: 15,
		nodeSpacing: 140,
		rankSpacing: 80,
		stroke: "gray",
		fill: "honeydew",
		fontSize: 12
	},
	pie: {
		useMaxWidth: !0,
		textPosition: .75,
		donutHole: 0,
		legendPosition: "right",
		highlightSlice: ""
	},
	quadrantChart: {
		useMaxWidth: !0,
		chartWidth: 500,
		chartHeight: 500,
		titleFontSize: 20,
		titlePadding: 10,
		quadrantPadding: 5,
		xAxisLabelPadding: 5,
		yAxisLabelPadding: 5,
		xAxisLabelFontSize: 16,
		yAxisLabelFontSize: 16,
		quadrantLabelFontSize: 16,
		quadrantTextTopPadding: 5,
		pointTextPadding: 5,
		pointLabelFontSize: 12,
		pointRadius: 5,
		xAxisPosition: "top",
		yAxisPosition: "left",
		quadrantInternalBorderStrokeWidth: 1,
		quadrantExternalBorderStrokeWidth: 2
	},
	xyChart: {
		useMaxWidth: !0,
		width: 700,
		height: 500,
		titleFontSize: 20,
		titlePadding: 10,
		showDataLabel: !1,
		showDataLabelOutsideBar: !1,
		showTitle: !0,
		showLegend: !0,
		legendFontSize: 14,
		legendPadding: 10,
		xAxis: {
			$ref: "#/$defs/XYChartAxisConfig",
			showLabel: !0,
			labelFontSize: 14,
			labelPadding: 5,
			showTitle: !0,
			titleFontSize: 16,
			titlePadding: 5,
			showTick: !0,
			tickLength: 5,
			tickWidth: 2,
			showAxisLine: !0,
			axisLineWidth: 2,
			labelRotation: 0
		},
		yAxis: {
			$ref: "#/$defs/XYChartAxisConfig",
			showLabel: !0,
			labelFontSize: 14,
			labelPadding: 5,
			showTitle: !0,
			titleFontSize: 16,
			titlePadding: 5,
			showTick: !0,
			tickLength: 5,
			tickWidth: 2,
			showAxisLine: !0,
			axisLineWidth: 2,
			labelRotation: 0
		},
		chartOrientation: "vertical",
		plotReservedSpacePercent: 50
	},
	requirement: {
		useMaxWidth: !0,
		rect_fill: "#f9f9f9",
		text_color: "#333",
		rect_border_size: "0.5px",
		rect_border_color: "#bbb",
		rect_min_width: 200,
		rect_min_height: 200,
		fontSize: 14,
		rect_padding: 10,
		line_height: 20
	},
	mindmap: {
		useMaxWidth: !0,
		padding: 10,
		maxNodeWidth: 200,
		layoutAlgorithm: "cose-bilkent"
	},
	ishikawa: {
		useMaxWidth: !0,
		diagramPadding: 20
	},
	kanban: {
		useMaxWidth: !0,
		padding: 8,
		sectionWidth: 200,
		ticketBaseUrl: ""
	},
	timeline: {
		useMaxWidth: !0,
		diagramMarginX: 50,
		diagramMarginY: 10,
		leftMargin: 150,
		width: 150,
		height: 50,
		boxMargin: 10,
		boxTextMargin: 5,
		noteMargin: 10,
		messageMargin: 35,
		messageAlign: "center",
		bottomMarginAdj: 1,
		rightAngles: !1,
		taskFontSize: 14,
		taskFontFamily: "\"Open Sans\", sans-serif",
		taskMargin: 50,
		activationWidth: 10,
		textPlacement: "fo",
		actorColours: [
			"#8FBC8F",
			"#7CFC00",
			"#00FFFF",
			"#20B2AA",
			"#B0E0E6",
			"#FFFFE0"
		],
		sectionFills: [
			"#191970",
			"#8B008B",
			"#4B0082",
			"#2F4F4F",
			"#800000",
			"#8B4513",
			"#00008B"
		],
		sectionColours: ["#fff"],
		disableMulticolor: !1
	},
	gitGraph: {
		useMaxWidth: !0,
		titleTopMargin: 25,
		diagramPadding: 8,
		nodeLabel: {
			width: 75,
			height: 100,
			x: -25,
			y: 0
		},
		mainBranchName: "main",
		mainBranchOrder: 0,
		showCommitLabel: !0,
		showBranches: !0,
		rotateCommitLabel: !0,
		parallelCommits: !1,
		arrowMarkerAbsolute: !1
	},
	c4: {
		useMaxWidth: !0,
		diagramMarginX: 50,
		diagramMarginY: 10,
		c4ShapeMargin: 50,
		c4ShapePadding: 20,
		width: 216,
		height: 60,
		boxMargin: 10,
		c4ShapeInRow: 4,
		nextLinePaddingX: 0,
		c4BoundaryInRow: 2,
		personFontSize: 14,
		personFontFamily: "\"Open Sans\", sans-serif",
		personFontWeight: "normal",
		external_personFontSize: 14,
		external_personFontFamily: "\"Open Sans\", sans-serif",
		external_personFontWeight: "normal",
		systemFontSize: 14,
		systemFontFamily: "\"Open Sans\", sans-serif",
		systemFontWeight: "normal",
		external_systemFontSize: 14,
		external_systemFontFamily: "\"Open Sans\", sans-serif",
		external_systemFontWeight: "normal",
		system_dbFontSize: 14,
		system_dbFontFamily: "\"Open Sans\", sans-serif",
		system_dbFontWeight: "normal",
		external_system_dbFontSize: 14,
		external_system_dbFontFamily: "\"Open Sans\", sans-serif",
		external_system_dbFontWeight: "normal",
		system_queueFontSize: 14,
		system_queueFontFamily: "\"Open Sans\", sans-serif",
		system_queueFontWeight: "normal",
		external_system_queueFontSize: 14,
		external_system_queueFontFamily: "\"Open Sans\", sans-serif",
		external_system_queueFontWeight: "normal",
		boundaryFontSize: 14,
		boundaryFontFamily: "\"Open Sans\", sans-serif",
		boundaryFontWeight: "normal",
		messageFontSize: 12,
		messageFontFamily: "\"Open Sans\", sans-serif",
		messageFontWeight: "normal",
		containerFontSize: 14,
		containerFontFamily: "\"Open Sans\", sans-serif",
		containerFontWeight: "normal",
		external_containerFontSize: 14,
		external_containerFontFamily: "\"Open Sans\", sans-serif",
		external_containerFontWeight: "normal",
		container_dbFontSize: 14,
		container_dbFontFamily: "\"Open Sans\", sans-serif",
		container_dbFontWeight: "normal",
		external_container_dbFontSize: 14,
		external_container_dbFontFamily: "\"Open Sans\", sans-serif",
		external_container_dbFontWeight: "normal",
		container_queueFontSize: 14,
		container_queueFontFamily: "\"Open Sans\", sans-serif",
		container_queueFontWeight: "normal",
		external_container_queueFontSize: 14,
		external_container_queueFontFamily: "\"Open Sans\", sans-serif",
		external_container_queueFontWeight: "normal",
		componentFontSize: 14,
		componentFontFamily: "\"Open Sans\", sans-serif",
		componentFontWeight: "normal",
		external_componentFontSize: 14,
		external_componentFontFamily: "\"Open Sans\", sans-serif",
		external_componentFontWeight: "normal",
		component_dbFontSize: 14,
		component_dbFontFamily: "\"Open Sans\", sans-serif",
		component_dbFontWeight: "normal",
		external_component_dbFontSize: 14,
		external_component_dbFontFamily: "\"Open Sans\", sans-serif",
		external_component_dbFontWeight: "normal",
		component_queueFontSize: 14,
		component_queueFontFamily: "\"Open Sans\", sans-serif",
		component_queueFontWeight: "normal",
		external_component_queueFontSize: 14,
		external_component_queueFontFamily: "\"Open Sans\", sans-serif",
		external_component_queueFontWeight: "normal",
		wrap: !0,
		wrapPadding: 10,
		person_bg_color: "#08427B",
		person_border_color: "#073B6F",
		external_person_bg_color: "#686868",
		external_person_border_color: "#8A8A8A",
		system_bg_color: "#1168BD",
		system_border_color: "#3C7FC0",
		system_db_bg_color: "#1168BD",
		system_db_border_color: "#3C7FC0",
		system_queue_bg_color: "#1168BD",
		system_queue_border_color: "#3C7FC0",
		external_system_bg_color: "#999999",
		external_system_border_color: "#8A8A8A",
		external_system_db_bg_color: "#999999",
		external_system_db_border_color: "#8A8A8A",
		external_system_queue_bg_color: "#999999",
		external_system_queue_border_color: "#8A8A8A",
		container_bg_color: "#438DD5",
		container_border_color: "#3C7FC0",
		container_db_bg_color: "#438DD5",
		container_db_border_color: "#3C7FC0",
		container_queue_bg_color: "#438DD5",
		container_queue_border_color: "#3C7FC0",
		external_container_bg_color: "#B3B3B3",
		external_container_border_color: "#A6A6A6",
		external_container_db_bg_color: "#B3B3B3",
		external_container_db_border_color: "#A6A6A6",
		external_container_queue_bg_color: "#B3B3B3",
		external_container_queue_border_color: "#A6A6A6",
		component_bg_color: "#85BBF0",
		component_border_color: "#78A8D8",
		component_db_bg_color: "#85BBF0",
		component_db_border_color: "#78A8D8",
		component_queue_bg_color: "#85BBF0",
		component_queue_border_color: "#78A8D8",
		external_component_bg_color: "#CCCCCC",
		external_component_border_color: "#BFBFBF",
		external_component_db_bg_color: "#CCCCCC",
		external_component_db_border_color: "#BFBFBF",
		external_component_queue_bg_color: "#CCCCCC",
		external_component_queue_border_color: "#BFBFBF"
	},
	sankey: {
		useMaxWidth: !0,
		width: 600,
		height: 400,
		linkColor: "gradient",
		nodeAlignment: "justify",
		showValues: !0,
		prefix: "",
		suffix: "",
		nodeWidth: 10,
		nodePadding: 12,
		labelStyle: "legacy"
	},
	block: {
		useMaxWidth: !0,
		padding: 8
	},
	packet: {
		useMaxWidth: !0,
		rowHeight: 32,
		bitWidth: 32,
		bitsPerRow: 32,
		showBits: !0,
		paddingX: 5,
		paddingY: 5
	},
	treeView: {
		useMaxWidth: !0,
		rowIndent: 10,
		paddingX: 5,
		paddingY: 5,
		lineThickness: 1,
		showIcons: !1,
		defaultIconPack: "",
		filenameIcons: {},
		extensionIcons: {}
	},
	architecture: {
		useMaxWidth: !0,
		padding: 40,
		iconSize: 80,
		fontSize: 16,
		randomize: !1,
		nodeSeparation: 75,
		idealEdgeLengthMultiplier: 1.5,
		edgeElasticity: .45,
		numIter: 2500,
		seed: 1
	},
	eventmodeling: {
		useMaxWidth: !0,
		padding: 30,
		rowHeight: 32
	},
	radar: {
		useMaxWidth: !0,
		width: 600,
		height: 600,
		marginTop: 50,
		marginRight: 50,
		marginBottom: 50,
		marginLeft: 50,
		axisScaleFactor: 1,
		axisLabelFactor: 1.05,
		curveTension: .17
	},
	venn: {
		useMaxWidth: !0,
		width: 800,
		height: 450,
		padding: 8,
		useDebugLayout: !1
	},
	cynefin: {
		useMaxWidth: !0,
		width: 800,
		height: 600,
		padding: 40,
		showDomainDescriptions: !0,
		boundaryAmplitude: 8,
		seed: 0
	},
	theme: "default",
	look: "classic",
	handDrawnSeed: 0,
	layout: "dagre",
	maxTextSize: 5e4,
	maxEdges: 500,
	darkMode: !1,
	fontFamily: "\"trebuchet ms\", verdana, arial, sans-serif;",
	logLevel: 5,
	securityLevel: "strict",
	startOnLoad: !0,
	arrowMarkerAbsolute: !1,
	secure: [
		"secure",
		"securityLevel",
		"startOnLoad",
		"maxTextSize",
		"suppressErrorRendering",
		"maxEdges"
	],
	legacyMathML: !1,
	forceLegacyMathML: !1,
	deterministicIds: !1,
	fontSize: 16,
	markdownAutoWrap: !0,
	suppressErrorRendering: !1
}, dn = {
	...un,
	deterministicIDSeed: void 0,
	elk: {
		mergeEdges: !1,
		nodePlacementStrategy: "BRANDES_KOEPF",
		nodePlacementAlignment: "NONE",
		forceNodeModelOrder: !1,
		considerModelOrder: "NODES_AND_EDGES",
		keepEntryNodeOnTop: !1
	},
	themeCSS: void 0,
	themeVariables: ln.default.getThemeVariables(),
	sequence: {
		...un.sequence,
		messageFont: /* @__PURE__ */ i(function() {
			return {
				fontFamily: this.messageFontFamily,
				fontSize: this.messageFontSize,
				fontWeight: this.messageFontWeight
			};
		}, "messageFont"),
		noteFont: /* @__PURE__ */ i(function() {
			return {
				fontFamily: this.noteFontFamily,
				fontSize: this.noteFontSize,
				fontWeight: this.noteFontWeight
			};
		}, "noteFont"),
		actorFont: /* @__PURE__ */ i(function() {
			return {
				fontFamily: this.actorFontFamily,
				fontSize: this.actorFontSize,
				fontWeight: this.actorFontWeight
			};
		}, "actorFont")
	},
	class: {
		defaultRenderer: "dagre-wrapper",
		hideEmptyMembersBox: !1,
		hierarchicalNamespaces: !0
	},
	gantt: {
		...un.gantt,
		tickInterval: void 0,
		useWidth: void 0
	},
	c4: {
		...un.c4,
		useWidth: void 0,
		personFont: /* @__PURE__ */ i(function() {
			return {
				fontFamily: this.personFontFamily,
				fontSize: this.personFontSize,
				fontWeight: this.personFontWeight
			};
		}, "personFont"),
		flowchart: {
			...un.flowchart,
			inheritDir: !1
		},
		external_personFont: /* @__PURE__ */ i(function() {
			return {
				fontFamily: this.external_personFontFamily,
				fontSize: this.external_personFontSize,
				fontWeight: this.external_personFontWeight
			};
		}, "external_personFont"),
		systemFont: /* @__PURE__ */ i(function() {
			return {
				fontFamily: this.systemFontFamily,
				fontSize: this.systemFontSize,
				fontWeight: this.systemFontWeight
			};
		}, "systemFont"),
		external_systemFont: /* @__PURE__ */ i(function() {
			return {
				fontFamily: this.external_systemFontFamily,
				fontSize: this.external_systemFontSize,
				fontWeight: this.external_systemFontWeight
			};
		}, "external_systemFont"),
		system_dbFont: /* @__PURE__ */ i(function() {
			return {
				fontFamily: this.system_dbFontFamily,
				fontSize: this.system_dbFontSize,
				fontWeight: this.system_dbFontWeight
			};
		}, "system_dbFont"),
		external_system_dbFont: /* @__PURE__ */ i(function() {
			return {
				fontFamily: this.external_system_dbFontFamily,
				fontSize: this.external_system_dbFontSize,
				fontWeight: this.external_system_dbFontWeight
			};
		}, "external_system_dbFont"),
		system_queueFont: /* @__PURE__ */ i(function() {
			return {
				fontFamily: this.system_queueFontFamily,
				fontSize: this.system_queueFontSize,
				fontWeight: this.system_queueFontWeight
			};
		}, "system_queueFont"),
		external_system_queueFont: /* @__PURE__ */ i(function() {
			return {
				fontFamily: this.external_system_queueFontFamily,
				fontSize: this.external_system_queueFontSize,
				fontWeight: this.external_system_queueFontWeight
			};
		}, "external_system_queueFont"),
		containerFont: /* @__PURE__ */ i(function() {
			return {
				fontFamily: this.containerFontFamily,
				fontSize: this.containerFontSize,
				fontWeight: this.containerFontWeight
			};
		}, "containerFont"),
		external_containerFont: /* @__PURE__ */ i(function() {
			return {
				fontFamily: this.external_containerFontFamily,
				fontSize: this.external_containerFontSize,
				fontWeight: this.external_containerFontWeight
			};
		}, "external_containerFont"),
		container_dbFont: /* @__PURE__ */ i(function() {
			return {
				fontFamily: this.container_dbFontFamily,
				fontSize: this.container_dbFontSize,
				fontWeight: this.container_dbFontWeight
			};
		}, "container_dbFont"),
		external_container_dbFont: /* @__PURE__ */ i(function() {
			return {
				fontFamily: this.external_container_dbFontFamily,
				fontSize: this.external_container_dbFontSize,
				fontWeight: this.external_container_dbFontWeight
			};
		}, "external_container_dbFont"),
		container_queueFont: /* @__PURE__ */ i(function() {
			return {
				fontFamily: this.container_queueFontFamily,
				fontSize: this.container_queueFontSize,
				fontWeight: this.container_queueFontWeight
			};
		}, "container_queueFont"),
		external_container_queueFont: /* @__PURE__ */ i(function() {
			return {
				fontFamily: this.external_container_queueFontFamily,
				fontSize: this.external_container_queueFontSize,
				fontWeight: this.external_container_queueFontWeight
			};
		}, "external_container_queueFont"),
		componentFont: /* @__PURE__ */ i(function() {
			return {
				fontFamily: this.componentFontFamily,
				fontSize: this.componentFontSize,
				fontWeight: this.componentFontWeight
			};
		}, "componentFont"),
		external_componentFont: /* @__PURE__ */ i(function() {
			return {
				fontFamily: this.external_componentFontFamily,
				fontSize: this.external_componentFontSize,
				fontWeight: this.external_componentFontWeight
			};
		}, "external_componentFont"),
		component_dbFont: /* @__PURE__ */ i(function() {
			return {
				fontFamily: this.component_dbFontFamily,
				fontSize: this.component_dbFontSize,
				fontWeight: this.component_dbFontWeight
			};
		}, "component_dbFont"),
		external_component_dbFont: /* @__PURE__ */ i(function() {
			return {
				fontFamily: this.external_component_dbFontFamily,
				fontSize: this.external_component_dbFontSize,
				fontWeight: this.external_component_dbFontWeight
			};
		}, "external_component_dbFont"),
		component_queueFont: /* @__PURE__ */ i(function() {
			return {
				fontFamily: this.component_queueFontFamily,
				fontSize: this.component_queueFontSize,
				fontWeight: this.component_queueFontWeight
			};
		}, "component_queueFont"),
		external_component_queueFont: /* @__PURE__ */ i(function() {
			return {
				fontFamily: this.external_component_queueFontFamily,
				fontSize: this.external_component_queueFontSize,
				fontWeight: this.external_component_queueFontWeight
			};
		}, "external_component_queueFont"),
		boundaryFont: /* @__PURE__ */ i(function() {
			return {
				fontFamily: this.boundaryFontFamily,
				fontSize: this.boundaryFontSize,
				fontWeight: this.boundaryFontWeight
			};
		}, "boundaryFont"),
		messageFont: /* @__PURE__ */ i(function() {
			return {
				fontFamily: this.messageFontFamily,
				fontSize: this.messageFontSize,
				fontWeight: this.messageFontWeight
			};
		}, "messageFont")
	},
	pie: {
		...un.pie,
		useWidth: 984
	},
	xyChart: {
		...un.xyChart,
		useWidth: void 0
	},
	requirement: {
		...un.requirement,
		useWidth: void 0
	},
	packet: { ...un.packet },
	eventmodeling: { ...un.eventmodeling },
	treeView: {
		...un.treeView,
		useWidth: void 0
	},
	radar: { ...un.radar },
	railroad: {
		...un.railroad,
		fontSize: void 0,
		fontFamily: void 0,
		terminalFill: void 0,
		terminalStroke: void 0,
		terminalTextColor: void 0,
		nonTerminalFill: void 0,
		nonTerminalStroke: void 0,
		nonTerminalTextColor: void 0,
		lineColor: void 0,
		markerFill: void 0,
		commentFill: void 0,
		commentStroke: void 0,
		commentTextColor: void 0,
		specialFill: void 0,
		specialStroke: void 0,
		ruleNameColor: void 0
	},
	ishikawa: { ...un.ishikawa },
	sankey: {
		...un.sankey,
		nodeColors: void 0
	},
	treemap: {
		useMaxWidth: !0,
		padding: 10,
		diagramPadding: 8,
		showValues: !0,
		nodeWidth: 100,
		nodeHeight: 40,
		borderWidth: 1,
		valueFontSize: 12,
		labelFontSize: 14,
		valueFormat: ","
	},
	venn: { ...un.venn },
	cynefin: { ...un.cynefin }
}, fn = /* @__PURE__ */ i((e, t = "") => Object.keys(e).reduce((n, r) => Array.isArray(e[r]) ? n : typeof e[r] == "object" && e[r] !== null ? [
	...n,
	t + r,
	...fn(e[r], "")
] : [...n, t + r], []), "keyify"), pn = new Set(fn(dn, "")), mn = dn, hn = {
	nodeColors: /^#[\da-f]{3,8}$|^rgb\([\d\s%,.]+\)$|^hsl\([\d\s%,.]+\)$|^[a-z]+$/i,
	filenameIcons: /^[\w-]+(?::[\w-]+)?$/,
	extensionIcons: /^[\w-]+(?::[\w-]+)?$/
}, gn = /* @__PURE__ */ i((e, t) => {
	for (let n of Object.keys(e)) {
		let r = e[n];
		(n.startsWith("__") || n.includes("proto") || n.includes("constr") || typeof r != "string" || !t.test(r)) && (p.debug("sanitize deleting dictionary entry:", n, r), delete e[n]);
	}
}, "sanitizeDictionaryConfig"), _n = /* @__PURE__ */ i((e) => {
	if (p.debug("sanitizeDirective called with", e), !(typeof e != "object" || !e)) {
		if (Array.isArray(e)) {
			e.forEach((e) => _n(e));
			return;
		}
		for (let t of Object.keys(e)) {
			if (p.debug("Checking key", t), t.startsWith("__") || t.includes("proto") || t.includes("constr") || !pn.has(t) || e[t] == null) {
				p.debug("sanitize deleting key: ", t), delete e[t];
				continue;
			}
			if (typeof e[t] == "object") {
				let n = hn[t];
				n ? gn(e[t], n) : (p.debug("sanitizing object", t), _n(e[t]));
				continue;
			}
			for (let n of [
				"themeCSS",
				"fontFamily",
				"altFontFamily"
			]) t.includes(n) && (p.debug("sanitizing css option", t), e[t] = vn(e[t]));
		}
		if (e.themeVariables) for (let t of Object.keys(e.themeVariables)) {
			let n = e.themeVariables[t];
			n?.match && !n.match(/^[\d "#%(),.;A-Za-z]+$/) && (e.themeVariables[t] = "");
		}
		p.debug("After sanitization", e);
	}
}, "sanitizeDirective"), vn = /* @__PURE__ */ i((e) => {
	let t = 0, n = 0;
	for (let r of e) {
		if (t < n) return "{ /* ERROR: Unbalanced CSS */ }";
		r === "{" ? t++ : r === "}" && n++;
	}
	return t === n ? e : "{ /* ERROR: Unbalanced CSS */ }";
}, "sanitizeCss"), yn = Object.freeze(mn), bn = /* @__PURE__ */ i((e) => !(e === !1 || [
	"false",
	"null",
	"0"
].includes(String(e).trim().toLowerCase())), "evaluate"), xn = Dt({}, yn), Sn, Cn = [], wn = Dt({}, yn), Tn = /* @__PURE__ */ i((e, t) => {
	let n = Dt({}, e), r = {};
	for (let e of t) jn(e), r = Dt(r, e);
	if (n = Dt(n, r), r.theme && r.theme in ln) {
		let e = Dt(Dt({}, Sn).themeVariables || {}, r.themeVariables);
		n.theme && n.theme in ln && (n.themeVariables = ln[n.theme].getThemeVariables(e));
	}
	return wn = n, Ln(wn), wn;
}, "updateCurrentConfig"), En = /* @__PURE__ */ i((e) => (xn = Dt({}, yn), xn = Dt(xn, e), e.theme && ln[e.theme] && (xn.themeVariables = ln[e.theme].getThemeVariables(e.themeVariables)), Tn(xn, Cn), xn), "setSiteConfig"), Dn = /* @__PURE__ */ i((e) => {
	Sn = Dt({}, e);
}, "saveConfigFromInitialize"), On = /* @__PURE__ */ i((e) => (xn = Dt(xn, e), Tn(xn, Cn), xn), "updateSiteConfig"), kn = /* @__PURE__ */ i(() => Dt({}, xn), "getSiteConfig"), An = /* @__PURE__ */ i((e) => (Tn(wn, [e]), B()), "setConfig"), B = /* @__PURE__ */ i(() => Dt({}, wn), "getConfig"), jn = /* @__PURE__ */ i((e) => {
	e && (["secure", ...xn.secure ?? []].forEach((t) => {
		Object.hasOwn(e, t) && (p.debug(`Denied attempt to modify a secure key ${t}`, e[t]), delete e[t]);
	}), Object.keys(e).forEach((t) => {
		t.startsWith("__") && delete e[t];
	}), Object.keys(e).forEach((t) => {
		typeof e[t] == "string" && (e[t].includes("<") || e[t].includes(">") || e[t].includes("url(data:")) && delete e[t], typeof e[t] == "object" && jn(e[t]);
	}));
}, "sanitize"), Mn = /* @__PURE__ */ i((e) => {
	_n(e), e.fontFamily && !e.themeVariables?.fontFamily && (e.themeVariables = {
		...e.themeVariables,
		fontFamily: e.fontFamily
	}), Cn.push(e), Tn(xn, Cn);
}, "addDirective"), Nn = /* @__PURE__ */ i((e = xn) => {
	Cn = [], Tn(e, Cn);
}, "reset"), Pn = {
	LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead.",
	FLOWCHART_HTML_LABELS_DEPRECATED: "flowchart.htmlLabels is deprecated. Please use global htmlLabels instead."
}, Fn = {}, In = /* @__PURE__ */ i((e) => {
	Fn[e] || (p.warn(Pn[e]), Fn[e] = !0);
}, "issueWarning"), Ln = /* @__PURE__ */ i((e) => {
	e && (e.lazyLoadedDiagrams || e.loadExternalDiagramsAtStartup) && In("LAZY_LOAD_DEPRECATED");
}, "checkConfig"), Rn = /* @__PURE__ */ i(() => {
	let e = {};
	Sn && (e = Dt(e, Sn));
	for (let t of Cn) e = Dt(e, t);
	return e;
}, "getUserDefinedConfig"), zn = /* @__PURE__ */ i((e) => (e.flowchart?.htmlLabels != null && In("FLOWCHART_HTML_LABELS_DEPRECATED"), bn(e.htmlLabels ?? e.flowchart?.htmlLabels ?? !0)), "getEffectiveHtmlLabels"), Bn = /^([^\S\n\r]*)-{3}\s*[\n\r](.*?)[\n\r]\1-{3}\s*[\n\r]+/s, Vn = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, Hn = /\s*%%.*\n/gm, Un, Wn = (Un = class extends Error {
	constructor(e) {
		super(e), this.name = "UnknownDiagramError";
	}
}, i(Un, "UnknownDiagramError"), Un), Gn = {}, Kn = /* @__PURE__ */ i(function(e, t) {
	e = e.replace(Bn, "").replace(Vn, "").replace(Hn, "\n");
	for (let [n, { detector: r }] of Object.entries(Gn)) if (r(e, t)) return n;
	throw new Wn(`No diagram type detected matching given configuration for text: ${e}`);
}, "detectType"), qn = /* @__PURE__ */ i((...e) => {
	for (let { id: t, detector: n, loader: r } of e) Jn(t, n, r);
}, "registerLazyLoadedDiagrams"), Jn = /* @__PURE__ */ i((e, t, n) => {
	Gn[e] && p.warn(`Detector with key ${e} already exists. Overwriting.`), Gn[e] = {
		detector: t,
		loader: n
	}, p.debug(`Detector with key ${e} added${n ? " with loader" : ""}`);
}, "addDetector"), Yn = /* @__PURE__ */ i((e) => Gn[e].loader, "getDiagramLoader"), Xn = /<br\s*\/?>/gi, Zn = /* @__PURE__ */ i((e) => e ? sr(e).replace(/\\n/g, "#br#").split("#br#") : [""], "getRows"), Qn = /* @__PURE__ */ (() => {
	let e = !1;
	return () => {
		e ||= ($n(), !0);
	};
})();
function $n() {
	let e = "data-temp-href-target";
	Tt.addHook("beforeSanitizeAttributes", (t) => {
		t.tagName === "A" && t.hasAttribute("target") && t.setAttribute(e, t.getAttribute("target") ?? "");
	}), Tt.addHook("afterSanitizeAttributes", (t) => {
		t.tagName === "A" && t.hasAttribute(e) && (t.setAttribute("target", t.getAttribute(e) ?? ""), t.removeAttribute(e), t.getAttribute("target") === "_blank" && t.setAttribute("rel", "noopener"));
	});
}
i($n, "setupDompurifyHooks");
var er = /* @__PURE__ */ i((e) => (Qn(), Tt.sanitize(e)), "removeScript"), tr = /* @__PURE__ */ i((e, t) => {
	if (zn(t)) {
		let n = t.securityLevel;
		n === "antiscript" || n === "strict" || n === "sandbox" ? e = er(e) : n !== "loose" && (e = sr(e), e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;"), e = e.replace(/=/g, "&equals;"), e = or(e));
	}
	return e;
}, "sanitizeMore"), nr = /* @__PURE__ */ i((e, t) => e && (e = t.dompurifyConfig ? Tt.sanitize(tr(e, t), t.dompurifyConfig).toString() : Tt.sanitize(tr(e, t), { FORBID_TAGS: ["style"] }).toString(), e), "sanitizeText"), rr = /* @__PURE__ */ i((e, t) => typeof e == "string" ? nr(e, t) : e.flat().map((e) => nr(e, t)), "sanitizeTextOrArray"), ir = /* @__PURE__ */ i((e) => Xn.test(e), "hasBreaks"), ar = /* @__PURE__ */ i((e) => e.split(Xn), "splitBreaks"), or = /* @__PURE__ */ i((e) => e.replace(/#br#/g, "<br/>"), "placeholderToBreak"), sr = /* @__PURE__ */ i((e) => e.replace(Xn, "#br#"), "breakToPlaceholder"), cr = /* @__PURE__ */ i((e) => {
	let t = "";
	return e && (t = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, t = CSS.escape(t)), t;
}, "getUrl"), lr = /* @__PURE__ */ i(function(...e) {
	let t = e.filter((e) => !isNaN(e));
	return Math.max(...t);
}, "getMax"), ur = /* @__PURE__ */ i(function(...e) {
	let t = e.filter((e) => !isNaN(e));
	return Math.min(...t);
}, "getMin"), dr = /* @__PURE__ */ i(function(e) {
	let t = e.split(/(,)/), n = [];
	for (let e = 0; e < t.length; e++) {
		let r = t[e];
		if (r === "," && e > 0 && e + 1 < t.length) {
			let i = t[e - 1], a = t[e + 1];
			pr(i, a) && (r = i + "," + a, e++, n.pop());
		}
		n.push(mr(r));
	}
	return n.join("");
}, "parseGenericTypes"), fr = /* @__PURE__ */ i((e, t) => Math.max(0, e.split(t).length - 1), "countOccurrence"), pr = /* @__PURE__ */ i((e, t) => {
	let n = fr(e, "~"), r = fr(t, "~");
	return n === 1 && r === 1;
}, "shouldCombineSets"), mr = /* @__PURE__ */ i((e) => {
	let t = fr(e, "~"), n = !1;
	if (t <= 1) return e;
	t % 2 != 0 && e.startsWith("~") && (e = e.substring(1), n = !0);
	let r = [...e], i = r.indexOf("~"), a = r.lastIndexOf("~");
	for (; i !== -1 && a !== -1 && i !== a;) r[i] = "<", r[a] = ">", i = r.indexOf("~"), a = r.lastIndexOf("~");
	return n && r.unshift("~"), r.join("");
}, "processSet"), hr = /* @__PURE__ */ i(() => window.MathMLElement !== void 0, "isMathMLSupported"), gr = /\$\$(.*?)\$\$/g, _r = /* @__PURE__ */ i((e) => (e.match(gr)?.length ?? 0) > 0, "hasKatex"), vr = /* @__PURE__ */ i(async (e, t) => {
	let n = document.createElement("div");
	n.innerHTML = await br(e, t), n.id = "katex-temp", n.style.visibility = "hidden", n.style.position = "absolute", n.style.top = "0", document.querySelector("body")?.insertAdjacentElement("beforeend", n);
	let r = {
		width: n.clientWidth,
		height: n.clientHeight
	};
	return n.remove(), r;
}, "calculateMathMLDimensions"), yr = /* @__PURE__ */ i(async (e, t) => {
	if (!_r(e)) return e;
	if (!(hr() || t.legacyMathML || t.forceLegacyMathML)) return e.replace(gr, "MathML is unsupported in this environment.");
	{
		let { default: n } = await import("./katex-DoRnZ_sp-BOTuK-J8.js"), r = t.forceLegacyMathML || !hr() && t.legacyMathML ? "htmlAndMathml" : "mathml";
		return e.split(Xn).map((e) => _r(e) ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${e}</div>` : `<div>${e}</div>`).join("").replace(gr, (e, t) => n.renderToString(t, {
			throwOnError: !0,
			displayMode: !0,
			output: r
		}).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, ""));
	}
}, "renderKatexUnsanitized"), br = /* @__PURE__ */ i(async (e, t) => nr(await yr(e, t), t), "renderKatexSanitized"), xr = {
	getRows: Zn,
	sanitizeText: nr,
	sanitizeTextOrArray: rr,
	hasBreaks: ir,
	splitBreaks: ar,
	lineBreakRegex: Xn,
	removeScript: er,
	getUrl: cr,
	evaluate: bn,
	getMax: lr,
	getMin: ur
}, Sr = /* @__PURE__ */ i(function(e, t) {
	for (let n of t) e.attr(n[0], n[1]);
}, "d3Attrs"), Cr = /* @__PURE__ */ i(function(e, t, n) {
	let r = /* @__PURE__ */ new Map();
	return n ? (r.set("width", "100%"), r.set("style", `max-width: ${t}px;`)) : (r.set("height", e), r.set("width", t)), r;
}, "calculateSvgSizeAttrs"), wr = /* @__PURE__ */ i(function(e, t, n, r) {
	Sr(e, Cr(t, n, r));
}, "configureSvgSize"), Tr = /* @__PURE__ */ i(function(e, t, n, r) {
	let i = t.node().getBBox(), a = i.width, o = i.height;
	p.info(`SVG bounds: ${a}x${o}`, i);
	let s = 0, c = 0;
	p.info(`Graph bounds: ${s}x${c}`, e), s = a + n * 2, c = o + n * 2, p.info(`Calculated bounds: ${s}x${c}`), wr(t, c, s, r);
	let l = `${i.x - n} ${i.y - n} ${i.width + 2 * n} ${i.height + 2 * n}`;
	t.attr("viewBox", l);
}, "setupGraphViewbox"), Er = {};
function Dr(e) {
	return [...e.cssRules].map((e) => e.cssText).join("\n");
}
i(Dr, "cssStyleSheetToString");
var Or = /* @__PURE__ */ i((e, t, n, r) => {
	let i = "";
	return e in Er && Er[e] ? i = Er[e]({
		...n,
		svgId: r
	}) : p.warn(`No theme found for ${e}`), `& {
    font-family: ${n.fontFamily};
    font-size: ${n.fontSize};
    fill: ${n.textColor}
  }
  @keyframes edge-animation-frame {
    from {
      stroke-dashoffset: 0;
    }
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  & .edge-animation-slow {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 50s linear infinite;
    stroke-linecap: round;
  }
  & .edge-animation-fast {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 20s linear infinite;
    stroke-linecap: round;
  }
  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${n.errorBkgColor};
  }
  & .error-text {
    fill: ${n.errorTextColor};
    stroke: ${n.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: ${n.strokeWidth ?? 1}px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }
  & .edge-thickness-invisible {
    stroke-width: 0;
    fill: none;
  }
  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${n.lineColor};
    stroke: ${n.lineColor};
  }
  & .marker.cross {
    stroke: ${n.lineColor};
  }

  & svg {
    font-family: ${n.fontFamily};
    font-size: ${n.fontSize};
  }
   & p {
    margin: 0
   }

  ${i}
  .node .neo-node {
    stroke: ${n.nodeBorder};
  }

  [data-look="neo"].node rect, [data-look="neo"].cluster rect, [data-look="neo"].node polygon {
    stroke: ${n.useGradient ? "url(" + r + "-gradient)" : n.nodeBorder};
    filter: ${n.dropShadow ? n.dropShadow.replace("url(#drop-shadow)", `url(${r}-drop-shadow)`) : "none"};
  }
  [data-look="neo"].swimlane.cluster rect {
    filter: none;
  }


  [data-look="neo"].node path {
    stroke: ${n.useGradient ? "url(" + r + "-gradient)" : n.nodeBorder};
    stroke-width: ${n.strokeWidth ?? 1}px;
  }

  [data-look="neo"].node .outer-path {
    filter: ${n.dropShadow ? n.dropShadow.replace("url(#drop-shadow)", `url(${r}-drop-shadow)`) : "none"};
  }

  [data-look="neo"].node .neo-line path {
    stroke: ${n.nodeBorder};
    filter: none;
  }

  [data-look="neo"].node circle{
    stroke: ${n.useGradient ? "url(" + r + "-gradient)" : n.nodeBorder};
    filter: ${n.dropShadow ? n.dropShadow.replace("url(#drop-shadow)", `url(${r}-drop-shadow)`) : "none"};
  }

  [data-look="neo"].node circle .state-start{
    fill: #000000;
  }

  [data-look="neo"].icon-shape .icon {
    fill: ${n.useGradient ? "url(" + r + "-gradient)" : n.nodeBorder};
    filter: ${n.dropShadow ? n.dropShadow.replace("url(#drop-shadow)", `url(${r}-drop-shadow)`) : "none"};
  }

    [data-look="neo"].icon-shape .icon-neo path {
    stroke: ${n.useGradient ? "url(" + r + "-gradient)" : n.nodeBorder};
    filter: ${n.dropShadow ? n.dropShadow.replace("url(#drop-shadow)", `url(${r}-drop-shadow)`) : "none"};
  }

  ${t}
`;
}, "getStyles"), kr = /* @__PURE__ */ i((e, t) => {
	t !== void 0 && (Er[e] = t);
}, "addStylesForDiagram"), Ar = Or, jr = {};
a(jr, {
	clear: () => Ir,
	getAccDescription: () => Br,
	getAccTitle: () => Rr,
	getDiagramTitle: () => Hr,
	setAccDescription: () => zr,
	setAccTitle: () => Lr,
	setDiagramTitle: () => Vr
});
var Mr = "", Nr = "", Pr = "", Fr = /* @__PURE__ */ i((e) => nr(e, B()), "sanitizeText"), Ir = /* @__PURE__ */ i(() => {
	Mr = "", Pr = "", Nr = "";
}, "clear"), Lr = /* @__PURE__ */ i((e) => {
	Mr = Fr(e).replace(/^\s+/g, "");
}, "setAccTitle"), Rr = /* @__PURE__ */ i(() => Mr, "getAccTitle"), zr = /* @__PURE__ */ i((e) => {
	Pr = Fr(e).replace(/\n\s+/g, "\n");
}, "setAccDescription"), Br = /* @__PURE__ */ i(() => Pr, "getAccDescription"), Vr = /* @__PURE__ */ i((e) => {
	Nr = Fr(e);
}, "setDiagramTitle"), Hr = /* @__PURE__ */ i(() => Nr, "getDiagramTitle"), Ur = p, Wr = m, V = B, Gr = An, Kr = yn, qr = /* @__PURE__ */ i((e) => nr(e, V()), "sanitizeText"), Jr = Tr, Yr = /* @__PURE__ */ i(() => jr, "getCommonDb"), Xr = {}, Zr = /* @__PURE__ */ i((e, t, n) => {
	Xr[e] && Ur.warn(`Diagram with id ${e} already registered. Overwriting.`), Xr[e] = t, n && Jn(e, n), kr(e, t.styles), t.injectUtils?.(Ur, Wr, V, qr, Jr, Yr(), () => {});
}, "registerDiagram"), Qr = /* @__PURE__ */ i((e) => {
	if (e in Xr) return Xr[e];
	throw new ei(e);
}, "getDiagram"), $r, ei = ($r = class extends Error {
	constructor(e) {
		super(`Diagram ${e} not found.`);
	}
}, i($r, "DiagramNotFoundError"), $r);
function ti(e) {
	return function() {
		return e;
	};
}
var ni = Math.abs, ri = Math.atan2, ii = Math.cos, ai = Math.max, oi = Math.min, si = Math.sin, ci = Math.sqrt, li = 1e-12, ui = Math.PI, di = ui / 2, fi = 2 * ui;
function pi(e) {
	return e > 1 ? 0 : e < -1 ? ui : Math.acos(e);
}
function mi(e) {
	return e >= 1 ? di : e <= -1 ? -di : Math.asin(e);
}
function hi(e) {
	let n = 3;
	return e.digits = function(t) {
		if (!arguments.length) return n;
		if (t == null) n = null;
		else {
			let e = Math.floor(t);
			if (!(e >= 0)) throw RangeError(`invalid digits: ${t}`);
			n = e;
		}
		return e;
	}, () => new t(n);
}
function gi(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function _i(e) {
	this._context = e;
}
_i.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._point = 0;
	},
	lineEnd: function() {
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1: this._point = 2;
			default: this._context.lineTo(e, t);
		}
	}
};
function vi(e) {
	return new _i(e);
}
function yi(e) {
	return e[0];
}
function bi(e) {
	return e[1];
}
function xi(e, t) {
	var n = ti(!0), r = null, i = vi, a = null, o = hi(s);
	e = typeof e == "function" ? e : e === void 0 ? yi : ti(e), t = typeof t == "function" ? t : t === void 0 ? bi : ti(t);
	function s(s) {
		var c, l = (s = gi(s)).length, u, d = !1, f;
		for (r ?? (a = i(f = o())), c = 0; c <= l; ++c) !(c < l && n(u = s[c], c, s)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e(u, c, s), +t(u, c, s));
		if (f) return a = null, f + "" || null;
	}
	return s.x = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : ti(+t), s) : e;
	}, s.y = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : ti(+e), s) : t;
	}, s.defined = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : ti(!!e), s) : n;
	}, s.curve = function(e) {
		return arguments.length ? (i = e, r != null && (a = i(r)), s) : i;
	}, s.context = function(e) {
		return arguments.length ? (e == null ? r = a = null : a = i(r = e), s) : r;
	}, s;
}
var Si = class {
	constructor(e, t) {
		this._context = e, this._x = t;
	}
	areaStart() {
		this._line = 0;
	}
	areaEnd() {
		this._line = NaN;
	}
	lineStart() {
		this._point = 0;
	}
	lineEnd() {
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	}
	point(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1: this._point = 2;
			default: this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + e) / 2, this._y0, this._x0, t, e, t) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + t) / 2, e, this._y0, e, t);
		}
		this._x0 = e, this._y0 = t;
	}
};
function Ci(e) {
	return new Si(e, !0);
}
function wi(e) {
	return new Si(e, !1);
}
function Ti() {}
function Ei(e, t, n) {
	e._context.bezierCurveTo((2 * e._x0 + e._x1) / 3, (2 * e._y0 + e._y1) / 3, (e._x0 + 2 * e._x1) / 3, (e._y0 + 2 * e._y1) / 3, (e._x0 + 4 * e._x1 + t) / 6, (e._y0 + 4 * e._y1 + n) / 6);
}
function Di(e) {
	this._context = e;
}
Di.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 3: Ei(this, this._x1, this._y1);
			case 2: this._context.lineTo(this._x1, this._y1);
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1:
				this._point = 2;
				break;
			case 2: this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
			default: Ei(this, e, t);
		}
		this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
	}
};
function Oi(e) {
	return new Di(e);
}
function ki(e) {
	this._context = e;
}
ki.prototype = {
	areaStart: Ti,
	areaEnd: Ti,
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 1:
				this._context.moveTo(this._x2, this._y2), this._context.closePath();
				break;
			case 2:
				this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
				break;
			case 3: this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
		}
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._x2 = e, this._y2 = t;
				break;
			case 1:
				this._point = 2, this._x3 = e, this._y3 = t;
				break;
			case 2:
				this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
				break;
			default: Ei(this, e, t);
		}
		this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
	}
};
function Ai(e) {
	return new ki(e);
}
function ji(e) {
	this._context = e;
}
ji.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
	},
	lineEnd: function() {
		(this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1;
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				this._point = 3;
				var n = (this._x0 + 4 * this._x1 + e) / 6, r = (this._y0 + 4 * this._y1 + t) / 6;
				this._line ? this._context.lineTo(n, r) : this._context.moveTo(n, r);
				break;
			case 3: this._point = 4;
			default: Ei(this, e, t);
		}
		this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
	}
};
function Mi(e) {
	return new ji(e);
}
function Ni(e, t) {
	this._basis = new Di(e), this._beta = t;
}
Ni.prototype = {
	lineStart: function() {
		this._x = [], this._y = [], this._basis.lineStart();
	},
	lineEnd: function() {
		var e = this._x, t = this._y, n = e.length - 1;
		if (n > 0) for (var r = e[0], i = t[0], a = e[n] - r, o = t[n] - i, s = -1, c; ++s <= n;) c = s / n, this._basis.point(this._beta * e[s] + (1 - this._beta) * (r + c * a), this._beta * t[s] + (1 - this._beta) * (i + c * o));
		this._x = this._y = null, this._basis.lineEnd();
	},
	point: function(e, t) {
		this._x.push(+e), this._y.push(+t);
	}
};
var Pi = function e(t) {
	function n(e) {
		return t === 1 ? new Di(e) : new Ni(e, t);
	}
	return n.beta = function(t) {
		return e(+t);
	}, n;
}(.85);
function Fi(e, t, n) {
	e._context.bezierCurveTo(e._x1 + e._k * (e._x2 - e._x0), e._y1 + e._k * (e._y2 - e._y0), e._x2 + e._k * (e._x1 - t), e._y2 + e._k * (e._y1 - n), e._x2, e._y2);
}
function Ii(e, t) {
	this._context = e, this._k = (1 - t) / 6;
}
Ii.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 2:
				this._context.lineTo(this._x2, this._y2);
				break;
			case 3: Fi(this, this._x1, this._y1);
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1:
				this._point = 2, this._x1 = e, this._y1 = t;
				break;
			case 2: this._point = 3;
			default: Fi(this, e, t);
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var Li = function e(t) {
	function n(e) {
		return new Ii(e, t);
	}
	return n.tension = function(t) {
		return e(+t);
	}, n;
}(0);
function Ri(e, t) {
	this._context = e, this._k = (1 - t) / 6;
}
Ri.prototype = {
	areaStart: Ti,
	areaEnd: Ti,
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 1:
				this._context.moveTo(this._x3, this._y3), this._context.closePath();
				break;
			case 2:
				this._context.lineTo(this._x3, this._y3), this._context.closePath();
				break;
			case 3: this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
		}
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._x3 = e, this._y3 = t;
				break;
			case 1:
				this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
				break;
			case 2:
				this._point = 3, this._x5 = e, this._y5 = t;
				break;
			default: Fi(this, e, t);
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var zi = function e(t) {
	function n(e) {
		return new Ri(e, t);
	}
	return n.tension = function(t) {
		return e(+t);
	}, n;
}(0);
function Bi(e, t) {
	this._context = e, this._k = (1 - t) / 6;
}
Bi.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
	},
	lineEnd: function() {
		(this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1;
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
				break;
			case 3: this._point = 4;
			default: Fi(this, e, t);
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var Vi = function e(t) {
	function n(e) {
		return new Bi(e, t);
	}
	return n.tension = function(t) {
		return e(+t);
	}, n;
}(0);
function Hi(e, t, n) {
	var r = e._x1, i = e._y1, a = e._x2, o = e._y2;
	if (e._l01_a > 1e-12) {
		var s = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, c = 3 * e._l01_a * (e._l01_a + e._l12_a);
		r = (r * s - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / c, i = (i * s - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / c;
	}
	if (e._l23_a > 1e-12) {
		var l = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, u = 3 * e._l23_a * (e._l23_a + e._l12_a);
		a = (a * l + e._x1 * e._l23_2a - t * e._l12_2a) / u, o = (o * l + e._y1 * e._l23_2a - n * e._l12_2a) / u;
	}
	e._context.bezierCurveTo(r, i, a, o, e._x2, e._y2);
}
function Ui(e, t) {
	this._context = e, this._alpha = t;
}
Ui.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 2:
				this._context.lineTo(this._x2, this._y2);
				break;
			case 3: this.point(this._x2, this._y2);
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		if (e = +e, t = +t, this._point) {
			var n = this._x2 - e, r = this._y2 - t;
			this._l23_a = Math.sqrt(this._l23_2a = (n * n + r * r) ** +this._alpha);
		}
		switch (this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1:
				this._point = 2;
				break;
			case 2: this._point = 3;
			default: Hi(this, e, t);
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var Wi = function e(t) {
	function n(e) {
		return t ? new Ui(e, t) : new Ii(e, 0);
	}
	return n.alpha = function(t) {
		return e(+t);
	}, n;
}(.5);
function Gi(e, t) {
	this._context = e, this._alpha = t;
}
Gi.prototype = {
	areaStart: Ti,
	areaEnd: Ti,
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 1:
				this._context.moveTo(this._x3, this._y3), this._context.closePath();
				break;
			case 2:
				this._context.lineTo(this._x3, this._y3), this._context.closePath();
				break;
			case 3: this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
		}
	},
	point: function(e, t) {
		if (e = +e, t = +t, this._point) {
			var n = this._x2 - e, r = this._y2 - t;
			this._l23_a = Math.sqrt(this._l23_2a = (n * n + r * r) ** +this._alpha);
		}
		switch (this._point) {
			case 0:
				this._point = 1, this._x3 = e, this._y3 = t;
				break;
			case 1:
				this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
				break;
			case 2:
				this._point = 3, this._x5 = e, this._y5 = t;
				break;
			default: Hi(this, e, t);
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var Ki = function e(t) {
	function n(e) {
		return t ? new Gi(e, t) : new Ri(e, 0);
	}
	return n.alpha = function(t) {
		return e(+t);
	}, n;
}(.5);
function qi(e, t) {
	this._context = e, this._alpha = t;
}
qi.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	},
	lineEnd: function() {
		(this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		if (e = +e, t = +t, this._point) {
			var n = this._x2 - e, r = this._y2 - t;
			this._l23_a = Math.sqrt(this._l23_2a = (n * n + r * r) ** +this._alpha);
		}
		switch (this._point) {
			case 0:
				this._point = 1;
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
				break;
			case 3: this._point = 4;
			default: Hi(this, e, t);
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var Ji = function e(t) {
	function n(e) {
		return t ? new qi(e, t) : new Bi(e, 0);
	}
	return n.alpha = function(t) {
		return e(+t);
	}, n;
}(.5);
function Yi(e) {
	this._context = e;
}
Yi.prototype = {
	areaStart: Ti,
	areaEnd: Ti,
	lineStart: function() {
		this._point = 0;
	},
	lineEnd: function() {
		this._point && this._context.closePath();
	},
	point: function(e, t) {
		e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
	}
};
function Xi(e) {
	return new Yi(e);
}
function Zi(e) {
	return e < 0 ? -1 : 1;
}
function Qi(e, t, n) {
	var r = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (r || i < 0 && -0), o = (n - e._y1) / (i || r < 0 && -0), s = (a * i + o * r) / (r + i);
	return (Zi(a) + Zi(o)) * Math.min(Math.abs(a), Math.abs(o), .5 * Math.abs(s)) || 0;
}
function $i(e, t) {
	var n = e._x1 - e._x0;
	return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function ea(e, t, n) {
	var r = e._x0, i = e._y0, a = e._x1, o = e._y1, s = (a - r) / 3;
	e._context.bezierCurveTo(r + s, i + s * t, a - s, o - s * n, a, o);
}
function ta(e) {
	this._context = e;
}
ta.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 2:
				this._context.lineTo(this._x1, this._y1);
				break;
			case 3: ea(this, this._t0, $i(this, this._t0));
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		var n = NaN;
		if (e = +e, t = +t, e !== this._x1 || t !== this._y1) {
			switch (this._point) {
				case 0:
					this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
					break;
				case 1:
					this._point = 2;
					break;
				case 2:
					this._point = 3, ea(this, $i(this, n = Qi(this, e, t)), n);
					break;
				default: ea(this, this._t0, n = Qi(this, e, t));
			}
			this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
		}
	}
};
function na(e) {
	this._context = new ra(e);
}
(na.prototype = Object.create(ta.prototype)).point = function(e, t) {
	ta.prototype.point.call(this, t, e);
};
function ra(e) {
	this._context = e;
}
ra.prototype = {
	moveTo: function(e, t) {
		this._context.moveTo(t, e);
	},
	closePath: function() {
		this._context.closePath();
	},
	lineTo: function(e, t) {
		this._context.lineTo(t, e);
	},
	bezierCurveTo: function(e, t, n, r, i, a) {
		this._context.bezierCurveTo(t, e, r, n, a, i);
	}
};
function ia(e) {
	return new ta(e);
}
function aa(e) {
	return new na(e);
}
function oa(e) {
	this._context = e;
}
oa.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x = [], this._y = [];
	},
	lineEnd: function() {
		var e = this._x, t = this._y, n = e.length;
		if (n) {
			if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), n === 2) this._context.lineTo(e[1], t[1]);
			else for (var r = sa(e), i = sa(t), a = 0, o = 1; o < n; ++a, ++o) this._context.bezierCurveTo(r[0][a], i[0][a], r[1][a], i[1][a], e[o], t[o]);
		}
		(this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
	},
	point: function(e, t) {
		this._x.push(+e), this._y.push(+t);
	}
};
function sa(e) {
	var t, n = e.length - 1, r, i = Array(n), a = Array(n), o = Array(n);
	for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
	for (i[n - 1] = 2, a[n - 1] = 7, o[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t) r = i[t] / a[t - 1], a[t] -= r, o[t] -= r * o[t - 1];
	for (i[n - 1] = o[n - 1] / a[n - 1], t = n - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
	for (a[n - 1] = (e[n] + i[n - 1]) / 2, t = 0; t < n - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
	return [i, a];
}
function ca(e) {
	return new oa(e);
}
function la(e, t) {
	this._context = e, this._t = t;
}
la.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x = this._y = NaN, this._point = 0;
	},
	lineEnd: function() {
		0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1: this._point = 2;
			default: if (this._t <= 0) this._context.lineTo(this._x, t), this._context.lineTo(e, t);
			else {
				var n = this._x * (1 - this._t) + e * this._t;
				this._context.lineTo(n, this._y), this._context.lineTo(n, t);
			}
		}
		this._x = e, this._y = t;
	}
};
function ua(e) {
	return new la(e, .5);
}
function da(e) {
	return new la(e, 0);
}
function fa(e) {
	return new la(e, 1);
}
var pa = /* @__PURE__ */ i((e) => {
	let { securityLevel: t } = V(), r = n("body");
	if (t === "sandbox") {
		let t = n(`#i${e}`).node()?.contentDocument ?? document;
		r = n(t.body);
	}
	return r.select(`#${e}`);
}, "selectSvgElement"), ma = /* @__PURE__ */ i((e) => {
	let { handDrawnSeed: t } = V();
	return {
		fill: e,
		hachureAngle: 120,
		hachureGap: 4,
		fillWeight: 2,
		roughness: .7,
		stroke: e,
		seed: t
	};
}, "solidStateFill"), ha = /* @__PURE__ */ i((e) => Array.isArray(e) ? e : e ? e.split(";").map((e) => e.trim()).filter(Boolean) : [], "normalizeStyleList"), ga = /* @__PURE__ */ i((e) => {
	let t = _a([
		...e.cssCompiledStyles || [],
		...e.cssStyles || [],
		...ha(e.labelStyle)
	]);
	return {
		stylesMap: t,
		stylesArray: [...t]
	};
}, "compileStyles"), _a = /* @__PURE__ */ i((e) => {
	let t = /* @__PURE__ */ new Map();
	return e.forEach((e) => {
		let [n, r] = e.split(":");
		t.set(n.trim(), r?.trim());
	}), t;
}, "styles2Map"), va = /* @__PURE__ */ i((e) => e === "color" || e === "font-size" || e === "font-family" || e === "font-weight" || e === "font-style" || e === "text-decoration" || e === "text-align" || e === "text-transform" || e === "line-height" || e === "letter-spacing" || e === "word-spacing" || e === "text-shadow" || e === "text-overflow" || e === "white-space" || e === "word-wrap" || e === "word-break" || e === "overflow-wrap" || e === "hyphens", "isLabelStyle"), H = /* @__PURE__ */ i((e) => {
	let { stylesArray: t } = ga(e), n = [], r = [], i = [], a = [];
	return t.forEach((e) => {
		let t = e[0];
		va(t) ? n.push(e.join(":") + " !important") : (r.push(e.join(":") + " !important"), t.includes("stroke") && i.push(e.join(":") + " !important"), t === "fill" && a.push(e.join(":") + " !important"));
	}), {
		labelStyles: n.join(";"),
		nodeStyles: r.join(";"),
		stylesArray: t,
		borderStyles: i,
		backgroundStyles: a
	};
}, "styles2String"), U = /* @__PURE__ */ i((e, t) => {
	let { themeVariables: n, handDrawnSeed: r } = V(), { nodeBorder: i, mainBkg: a } = n, { stylesMap: o } = ga(e);
	return Object.assign({
		roughness: .7,
		fill: o.get("fill") || a,
		fillStyle: "hachure",
		fillWeight: 4,
		hachureGap: 5.2,
		stroke: o.get("stroke") || i,
		seed: r,
		strokeWidth: o.get("stroke-width")?.replace("px", "") || 1.3,
		fillLineDash: [0, 0],
		strokeLineDash: ya(o.get("stroke-dasharray"))
	}, t);
}, "userNodeOverrides"), ya = /* @__PURE__ */ i((e) => {
	if (!e) return [0, 0];
	let t = e.trim().split(/\s+/).map(Number);
	if (t.length === 1) {
		let e = isNaN(t[0]) ? 0 : t[0];
		return [e, e];
	}
	return [isNaN(t[0]) ? 0 : t[0], isNaN(t[1]) ? 0 : t[1]];
}, "getStrokeDashArray"), ba = Object.freeze({
	left: 0,
	top: 0,
	width: 16,
	height: 16
}), xa = Object.freeze({
	rotate: 0,
	vFlip: !1,
	hFlip: !1
}), Sa = Object.freeze({
	...ba,
	...xa
}), Ca = Object.freeze({
	...Sa,
	body: "",
	hidden: !1
}), wa = Object.freeze({
	width: null,
	height: null
}), Ta = Object.freeze({
	...wa,
	...xa
}), Ea = (e, t, n, r = "") => {
	let i = e.split(":");
	if (e.slice(0, 1) === "@") {
		if (i.length < 2 || i.length > 3) return null;
		r = i.shift().slice(1);
	}
	if (i.length > 3 || !i.length) return null;
	if (i.length > 1) {
		let e = i.pop(), t = i.pop(), n = {
			provider: i.length > 0 ? i[0] : r,
			prefix: t,
			name: e
		};
		return Da(n) ? n : null;
	}
	let a = i[0], o = a.split("-");
	if (o.length > 1) {
		let e = {
			provider: r,
			prefix: o.shift(),
			name: o.join("-")
		};
		return Da(e) ? e : null;
	}
	if (n && r === "") {
		let e = {
			provider: r,
			prefix: "",
			name: a
		};
		return Da(e, n) ? e : null;
	}
	return null;
}, Da = (e, t) => e ? !!((t && e.prefix === "" || e.prefix) && e.name) : !1;
function Oa(e, t) {
	let n = {};
	!e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
	let r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
	return r && (n.rotate = r), n;
}
function ka(e, t) {
	let n = Oa(e, t);
	for (let r in Ca) r in xa ? r in e && !(r in n) && (n[r] = xa[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
	return n;
}
function Aa(e, t) {
	let n = e.icons, r = e.aliases || /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
	function a(e) {
		if (n[e]) return i[e] = [];
		if (!(e in i)) {
			i[e] = null;
			let t = r[e] && r[e].parent, n = t && a(t);
			n && (i[e] = [t].concat(n));
		}
		return i[e];
	}
	return (t || Object.keys(n).concat(Object.keys(r))).forEach(a), i;
}
function ja(e, t, n) {
	let r = e.icons, i = e.aliases || /* @__PURE__ */ Object.create(null), a = {};
	function o(e) {
		a = ka(r[e] || i[e], a);
	}
	return o(t), n.forEach(o), ka(e, a);
}
function Ma(e, t) {
	if (e.icons[t]) return ja(e, t, []);
	let n = Aa(e, [t])[t];
	return n ? ja(e, t, n) : null;
}
var Na = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Pa = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Fa(e, t, n) {
	if (t === 1) return e;
	if (n ||= 100, typeof e == "number") return Math.ceil(e * t * n) / n;
	if (typeof e != "string") return e;
	let r = e.split(Na);
	if (r === null || !r.length) return e;
	let i = [], a = r.shift(), o = Pa.test(a);
	for (;;) {
		if (o) {
			let e = parseFloat(a);
			isNaN(e) ? i.push(a) : i.push(Math.ceil(e * t * n) / n);
		} else i.push(a);
		if (a = r.shift(), a === void 0) return i.join("");
		o = !o;
	}
}
function Ia(e, t = "defs") {
	let n = "", r = e.indexOf("<" + t);
	for (; r >= 0;) {
		let i = e.indexOf(">", r), a = e.indexOf("</" + t);
		if (i === -1 || a === -1) break;
		let o = e.indexOf(">", a);
		if (o === -1) break;
		n += e.slice(i + 1, a).trim(), e = e.slice(0, r).trim() + e.slice(o + 1);
	}
	return {
		defs: n,
		content: e
	};
}
function La(e, t) {
	return e ? "<defs>" + e + "</defs>" + t : t;
}
function Ra(e, t, n) {
	let r = Ia(e);
	return La(r.defs, t + r.content + n);
}
var za = (e) => e === "unset" || e === "undefined" || e === "none";
function Ba(e, t) {
	let n = {
		...Sa,
		...e
	}, r = {
		...Ta,
		...t
	}, i = {
		left: n.left,
		top: n.top,
		width: n.width,
		height: n.height
	}, a = n.body;
	[n, r].forEach((e) => {
		let t = [], n = e.hFlip, r = e.vFlip, o = e.rotate;
		n ? r ? o += 2 : (t.push("translate(" + (i.width + i.left).toString() + " " + (0 - i.top).toString() + ")"), t.push("scale(-1 1)"), i.top = i.left = 0) : r && (t.push("translate(" + (0 - i.left).toString() + " " + (i.height + i.top).toString() + ")"), t.push("scale(1 -1)"), i.top = i.left = 0);
		let s;
		switch (o < 0 && (o -= Math.floor(o / 4) * 4), o %= 4, o) {
			case 1:
				s = i.height / 2 + i.top, t.unshift("rotate(90 " + s.toString() + " " + s.toString() + ")");
				break;
			case 2:
				t.unshift("rotate(180 " + (i.width / 2 + i.left).toString() + " " + (i.height / 2 + i.top).toString() + ")");
				break;
			case 3: s = i.width / 2 + i.left, t.unshift("rotate(-90 " + s.toString() + " " + s.toString() + ")");
		}
		o % 2 == 1 && (i.left !== i.top && (s = i.left, i.left = i.top, i.top = s), i.width !== i.height && (s = i.width, i.width = i.height, i.height = s)), t.length && (a = Ra(a, "<g transform=\"" + t.join(" ") + "\">", "</g>"));
	});
	let o = r.width, s = r.height, c = i.width, l = i.height, u, d;
	o === null ? (d = s === null ? "1em" : s === "auto" ? l : s, u = Fa(d, c / l)) : (u = o === "auto" ? c : o, d = s === null ? Fa(u, l / c) : s === "auto" ? l : s);
	let f = {}, p = (e, t) => {
		za(t) || (f[e] = t.toString());
	};
	p("width", u), p("height", d);
	let m = [
		i.left,
		i.top,
		c,
		l
	];
	return f.viewBox = m.join(" "), {
		attributes: f,
		viewBox: m,
		body: a
	};
}
var Va = /\sid="(\S+)"/g, Ha = /* @__PURE__ */ new Map();
function Ua(e) {
	e = e.replace(/[0-9]+$/, "") || "a";
	let t = Ha.get(e) || 0;
	return Ha.set(e, t + 1), t ? `${e}${t}` : e;
}
function Wa(e) {
	let t = [], n;
	for (; n = Va.exec(e);) t.push(n[1]);
	if (!t.length) return e;
	let r = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
	return t.forEach((t) => {
		let n = Ua(t), i = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		e = e.replace(RegExp("([#;\"])(" + i + ")([\")]|\\.[a-z])", "g"), "$1" + n + r + "$3");
	}), e = e.replace(new RegExp(r, "g"), ""), e;
}
function Ga(e, t) {
	let n = e.indexOf("xlink:") === -1 ? "" : " xmlns:xlink=\"http://www.w3.org/1999/xlink\"";
	for (let e in t) n += " " + e + "=\"" + t[e] + "\"";
	return "<svg xmlns=\"http://www.w3.org/2000/svg\"" + n + ">" + e + "</svg>";
}
var Ka = {
	body: "<g><rect width=\"80\" height=\"80\" style=\"fill: #087ebf; stroke-width: 0px;\"/><text transform=\"translate(21.16 64.67)\" style=\"fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;\"><tspan x=\"0\" y=\"0\">?</tspan></text></g>",
	height: 80,
	width: 80
}, qa = /* @__PURE__ */ new Map(), Ja = /* @__PURE__ */ new Map(), Ya = /* @__PURE__ */ i((e) => {
	for (let t of e) {
		if (!t.name) throw Error("Invalid icon loader. Must have a \"name\" property with non-empty string value.");
		if (p.debug("Registering icon pack:", t.name), "loader" in t) Ja.set(t.name, t.loader);
		else if ("icons" in t) qa.set(t.name, t.icons);
		else throw p.error("Invalid icon loader:", t), /* @__PURE__ */ Error("Invalid icon loader. Must have either \"icons\" or \"loader\" property.");
	}
}, "registerIconPacks"), Xa = /* @__PURE__ */ i(async (e, t) => {
	let n = Ea(e, !0, t !== void 0);
	if (!n) throw Error(`Invalid icon name: ${e}`);
	let r = n.prefix || t;
	if (!r) throw Error(`Icon name must contain a prefix: ${e}`);
	let i = qa.get(r);
	if (!i) {
		let e = Ja.get(r);
		if (!e) throw Error(`Icon set not found: ${n.prefix}`);
		try {
			i = {
				...await e(),
				prefix: r
			}, qa.set(r, i);
		} catch (e) {
			throw p.error(e), /* @__PURE__ */ Error(`Failed to load icon set: ${n.prefix}`);
		}
	}
	let a = Ma(i, n.name);
	if (!a) throw Error(`Icon not found: ${e}`);
	return a;
}, "getRegisteredIconData"), Za = /* @__PURE__ */ i(async (e) => {
	try {
		return await Xa(e), !0;
	} catch {
		return !1;
	}
}, "isIconAvailable"), Qa = /* @__PURE__ */ i(async (e, t, n) => {
	let r;
	try {
		r = await Xa(e, t?.fallbackPrefix);
	} catch (e) {
		p.error(e), r = Ka;
	}
	let i = Ba(r, t);
	return nr(Ga(Wa(i.body), {
		...i.attributes,
		...n
	}), B());
}, "getIconSVG"), $a = {}, eo = {}, to;
function no() {
	return to || (to = 1, Object.defineProperty(eo, "__esModule", { value: !0 }), eo.BLANK_URL = eo.relativeFirstCharacters = eo.whitespaceEscapeCharsRegex = eo.urlSchemeRegex = eo.ctrlCharactersRegex = eo.htmlCtrlEntityRegex = eo.htmlEntitiesRegex = eo.invalidProtocolRegex = void 0, eo.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im, eo.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g, eo.htmlCtrlEntityRegex = /&(newline|tab);/gi, eo.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, eo.urlSchemeRegex = /^.+(:|&colon;)/gim, eo.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g, eo.relativeFirstCharacters = [".", "/"], eo.BLANK_URL = "about:blank"), eo;
}
var ro;
function io() {
	if (ro) return $a;
	ro = 1, Object.defineProperty($a, "__esModule", { value: !0 }), $a.sanitizeUrl = a;
	var e = no();
	function t(t) {
		return e.relativeFirstCharacters.indexOf(t[0]) > -1;
	}
	function n(t) {
		return t.replace(e.ctrlCharactersRegex, "").replace(e.htmlEntitiesRegex, function(e, t) {
			return String.fromCharCode(t);
		});
	}
	function r(e) {
		return URL.canParse(e);
	}
	function i(e) {
		try {
			return decodeURIComponent(e);
		} catch {
			return e;
		}
	}
	function a(a) {
		if (!a) return e.BLANK_URL;
		var o, s = i(a.trim());
		do
			s = n(s).replace(e.htmlCtrlEntityRegex, "").replace(e.ctrlCharactersRegex, "").replace(e.whitespaceEscapeCharsRegex, "").trim(), s = i(s), o = s.match(e.ctrlCharactersRegex) || s.match(e.htmlEntitiesRegex) || s.match(e.htmlCtrlEntityRegex) || s.match(e.whitespaceEscapeCharsRegex);
		while (o && o.length > 0);
		var c = s;
		if (!c) return e.BLANK_URL;
		if (t(c)) return c;
		var l = c.trimStart(), u = l.match(e.urlSchemeRegex);
		if (!u) return c;
		var d = u[0].toLowerCase().trim();
		if (e.invalidProtocolRegex.test(d)) return e.BLANK_URL;
		var f = l.replace(/\\/g, "/");
		if (d === "mailto:" || d.includes("://")) return f;
		if (d === "http:" || d === "https:") {
			if (!r(f)) return e.BLANK_URL;
			var p = new URL(f);
			return p.protocol = p.protocol.toLowerCase(), p.hostname = p.hostname.toLowerCase(), p.toString();
		}
		return f;
	}
	return $a;
}
var ao = io();
function oo(e) {
	if (typeof e != "object" || !e) return !1;
	if (Object.getPrototypeOf(e) === null) return !0;
	if (Object.prototype.toString.call(e) !== "[object Object]") {
		let t = e[Symbol.toStringTag];
		return t == null || !Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)?.writable ? !1 : e.toString() === `[object ${t}]`;
	}
	let t = e;
	for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t;
}
function so() {}
function co(e) {
	return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
function lo(e) {
	return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
var uo = "[object RegExp]", fo = "[object String]", po = "[object Number]", mo = "[object Boolean]", ho = "[object Arguments]", go = "[object Symbol]", _o = "[object Date]", vo = "[object Map]", yo = "[object Set]", bo = "[object Array]", xo = "[object ArrayBuffer]", So = "[object Object]", Co = "[object DataView]", wo = "[object Uint8Array]", To = "[object Uint8ClampedArray]", Eo = "[object Uint16Array]", Do = "[object Uint32Array]", Oo = "[object Int8Array]", ko = "[object Int16Array]", Ao = "[object Int32Array]", jo = "[object Float32Array]", Mo = "[object Float64Array]", No = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || /* @__PURE__ */ function() {
	return this;
}();
function Po(e) {
	return typeof No.Buffer < "u" && No.Buffer.isBuffer(e);
}
function Fo(e) {
	return Number.isSafeInteger(e) && e >= 0;
}
function Io(e) {
	return e != null && typeof e != "function" && Fo(e.length);
}
function Lo(e) {
	return e === "__proto__";
}
function Ro(e) {
	return e == null || typeof e != "object" && typeof e != "function";
}
function zo(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Bo(e, t) {
	return Vo(e, void 0, e, /* @__PURE__ */ new Map(), t);
}
function Vo(e, t, n, r = /* @__PURE__ */ new Map(), i = void 0) {
	let a = i?.(e, t, n, r);
	if (a !== void 0) return a;
	if (Ro(e)) return e;
	if (r.has(e)) return r.get(e);
	if (Array.isArray(e)) {
		let t = Array(e.length);
		r.set(e, t);
		for (let a = 0; a < e.length; a++) t[a] = Vo(e[a], a, n, r, i);
		return Object.hasOwn(e, "index") && (t.index = e.index), Object.hasOwn(e, "input") && (t.input = e.input), t;
	}
	if (e instanceof Date) return new Date(e.getTime());
	if (e instanceof RegExp) {
		let t = new RegExp(e.source, e.flags);
		return t.lastIndex = e.lastIndex, t;
	}
	if (e instanceof Map) {
		let t = /* @__PURE__ */ new Map();
		r.set(e, t);
		for (let [a, o] of e) t.set(a, Vo(o, a, n, r, i));
		return t;
	}
	if (e instanceof Set) {
		let t = /* @__PURE__ */ new Set();
		r.set(e, t);
		for (let a of e) t.add(Vo(a, void 0, n, r, i));
		return t;
	}
	if (Po(e)) return e.subarray();
	if (zo(e)) {
		let t = new (Object.getPrototypeOf(e)).constructor(e.length);
		r.set(e, t);
		for (let a = 0; a < e.length; a++) t[a] = Vo(e[a], a, n, r, i);
		return t;
	}
	if (e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer) return e.slice(0);
	if (e instanceof DataView) {
		let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
		return r.set(e, t), Ho(t, e, n, r, i), t;
	}
	if (typeof File < "u" && e instanceof File) {
		let t = new File([e], e.name, { type: e.type });
		return r.set(e, t), Ho(t, e, n, r, i), t;
	}
	if (typeof Blob < "u" && e instanceof Blob) {
		let t = new Blob([e], { type: e.type });
		return r.set(e, t), Ho(t, e, n, r, i), t;
	}
	if (e instanceof Error) {
		let t = structuredClone(e);
		return r.set(e, t), t.message = e.message, t.name = e.name, t.stack = e.stack, t.cause = e.cause, t.constructor = e.constructor, Ho(t, e, n, r, i), t;
	}
	if (e instanceof Boolean) {
		let t = new Boolean(e.valueOf());
		return r.set(e, t), Ho(t, e, n, r, i), t;
	}
	if (e instanceof Number) {
		let t = new Number(e.valueOf());
		return r.set(e, t), Ho(t, e, n, r, i), t;
	}
	if (e instanceof String) {
		let t = new String(e.valueOf());
		return r.set(e, t), Ho(t, e, n, r, i), t;
	}
	if (typeof e == "object" && Uo(e)) {
		let t = Object.create(Object.getPrototypeOf(e));
		return r.set(e, t), Ho(t, e, n, r, i), t;
	}
	return e;
}
function Ho(e, t, n = e, r, i) {
	let a = [...Object.keys(t), ...co(t)];
	for (let o = 0; o < a.length; o++) {
		let s = a[o], c = Object.getOwnPropertyDescriptor(e, s);
		(c == null || c.writable) && (e[s] = Vo(t[s], s, n, r, i));
	}
}
function Uo(e) {
	switch (lo(e)) {
		case ho:
		case bo:
		case xo:
		case Co:
		case mo:
		case _o:
		case jo:
		case Mo:
		case Oo:
		case ko:
		case Ao:
		case vo:
		case po:
		case So:
		case uo:
		case yo:
		case fo:
		case go:
		case wo:
		case To:
		case Eo:
		case Do: return !0;
		default: return !1;
	}
}
function Wo(e, t) {
	return Bo(e, (t, n, r, i) => {
		if (typeof e == "object") {
			if (lo(e) === "[object Object]" && typeof e.constructor != "function") {
				let t = {};
				return i.set(e, t), Ho(t, e, r, i), t;
			}
			switch (Object.prototype.toString.call(e)) {
				case po:
				case fo:
				case mo: {
					let t = new e.constructor(e?.valueOf());
					return Ho(t, e), t;
				}
				case ho: {
					let t = {};
					return Ho(t, e), t.length = e.length, t[Symbol.iterator] = e[Symbol.iterator], t;
				}
				default: return;
			}
		}
	});
}
function Go(e) {
	return Wo(e);
}
function Ko(e) {
	return typeof e == "object" && !!e && lo(e) === "[object Arguments]";
}
function qo(e) {
	return typeof e == "object" && !!e;
}
function Jo(e) {
	return qo(e) && Io(e);
}
function Yo(e) {
	return zo(e);
}
function Xo(e) {
	let t = e?.constructor;
	return e === (typeof t == "function" ? t.prototype : Object.prototype);
}
function Zo(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError("Expected a function");
	let n = function(...r) {
		let i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		let o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (Zo.Cache || Map)(), n;
}
Zo.Cache = Map;
function Qo(e) {
	if (Ro(e)) return e;
	if (Array.isArray(e) || zo(e) || e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer) return e.slice(0);
	let t = Object.getPrototypeOf(e);
	if (t == null) return Object.assign(Object.create(t), e);
	let n = t.constructor;
	if (e instanceof Date || e instanceof Map || e instanceof Set) return new n(e);
	if (e instanceof RegExp) {
		let t = new n(e);
		return t.lastIndex = e.lastIndex, t;
	}
	if (e instanceof DataView) return new n(e.buffer.slice(0));
	if (e instanceof Error) {
		let t;
		return t = e instanceof AggregateError ? new n(e.errors, e.message, { cause: e.cause }) : new n(e.message, { cause: e.cause }), t.stack = e.stack, Object.assign(t, e), t;
	}
	return typeof File < "u" && e instanceof File ? new n([e], e.name, {
		type: e.type,
		lastModified: e.lastModified
	}) : typeof e == "object" ? Object.assign(Object.create(t), e) : e;
}
function $o(e, ...t) {
	let n = t.slice(0, -1), r = t[t.length - 1], i = e;
	for (let e = 0; e < n.length; e++) {
		let t = n[e];
		i = es(i, t, r, /* @__PURE__ */ new Map());
	}
	return i;
}
function es(e, t, n, r) {
	if (Ro(e) && (e = Object(e)), typeof t != "object" || !t) return e;
	if (r.has(t)) return Qo(r.get(t));
	if (r.set(t, e), Array.isArray(t)) {
		t = t.slice();
		for (let e = 0; e < t.length; e++) t[e] = t[e] ?? void 0;
	}
	let i = [...Object.keys(t), ...co(t)];
	for (let a = 0; a < i.length; a++) {
		let o = i[a];
		if (Lo(o)) continue;
		let s = t[o], c = e[o];
		if (Ko(s) && (s = { ...s }), Ko(c) && (c = { ...c }), Po(s) && (s = Go(s)), Array.isArray(s)) {
			if (Array.isArray(c)) {
				let e = [], t = Reflect.ownKeys(c);
				for (let n = 0; n < t.length; n++) {
					let r = t[n];
					e[r] = c[r];
				}
				c = e;
			} else if (Jo(c)) {
				let e = [];
				for (let t = 0; t < c.length; t++) e[t] = c[t];
				c = e;
			} else c = [];
		}
		let l = n(c, s, o, e, t, r);
		l === void 0 ? Array.isArray(s) || qo(c) && qo(s) && (oo(c) || oo(s) || Yo(c) || Yo(s)) ? e[o] = es(c, s, n, r) : c == null && oo(s) ? e[o] = es({}, s, n, r) : c == null && Yo(s) ? e[o] = Go(s) : (c === void 0 || s !== void 0) && (e[o] = s) : e[o] = l;
	}
	return e;
}
function ts(e, ...t) {
	return $o(e, ...t, so);
}
function ns(e) {
	if (e == null) return !0;
	if (Io(e)) return typeof e.splice != "function" && typeof e != "string" && !Po(e) && !Yo(e) && !Ko(e) ? !1 : e.length === 0;
	if (typeof e == "object" || typeof e == "function") {
		if (e instanceof Map || e instanceof Set) return e.size === 0;
		let t = Object.keys(e);
		return Xo(e) ? t.filter((e) => e !== "constructor").length === 0 : t.length === 0;
	}
	return !0;
}
var rs = {
	curveBasis: Oi,
	curveBasisClosed: Ai,
	curveBasisOpen: Mi,
	curveBumpX: Ci,
	curveBumpY: wi,
	curveBundle: Pi,
	curveCardinalClosed: zi,
	curveCardinalOpen: Vi,
	curveCardinal: Li,
	curveCatmullRomClosed: Ki,
	curveCatmullRomOpen: Ji,
	curveCatmullRom: Wi,
	curveLinear: vi,
	curveLinearClosed: Xi,
	curveMonotoneX: ia,
	curveMonotoneY: aa,
	curveNatural: ca,
	curveStep: ua,
	curveStepAfter: fa,
	curveStepBefore: da
}, is = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, as = /* @__PURE__ */ i(function(e, t) {
	let n = os(e, /(?:init\b)|(?:initialize\b)/), r = {};
	if (Array.isArray(n)) {
		let e = n.map((e) => e.args);
		_n(e), r = Dt(r, [...e]);
	} else r = n.args;
	if (!r) return;
	let i = Kn(e, t), a = "config";
	return r[a] !== void 0 && (i === "flowchart-v2" && (i = "flowchart"), r[i] = r[a], delete r[a]), r;
}, "detectInit"), os = /* @__PURE__ */ i(function(e, t = null) {
	try {
		let n = RegExp(`[%]{2}(?![{]${is.source})(?=[}][%]{2}).*
`, "ig");
		e = e.trim().replace(n, "").replace(/'/gm, "\""), p.debug(`Detecting diagram directive${t === null ? "" : " type:" + t} based on the text:${e}`);
		let r, i = [];
		for (; (r = Vn.exec(e)) !== null;) if (r.index === Vn.lastIndex && Vn.lastIndex++, r && !t || t && r[1]?.match(t) || t && r[2]?.match(t)) {
			let e = r[1] ? r[1] : r[2], t = r[3] ? r[3].trim() : r[4] ? JSON.parse(r[4].trim()) : null;
			i.push({
				type: e,
				args: t
			});
		}
		return i.length === 0 ? {
			type: e,
			args: null
		} : i.length === 1 ? i[0] : i;
	} catch (n) {
		return p.error(`ERROR: ${n.message} - Unable to parse directive type: '${t}' based on the text: '${e}'`), {
			type: void 0,
			args: null
		};
	}
}, "detectDirective"), ss = /* @__PURE__ */ i(function(e) {
	return e.replace(Vn, "");
}, "removeDirectives"), cs = /* @__PURE__ */ i(function(e, t) {
	for (let [n, r] of t.entries()) if (r.match(e)) return n;
	return -1;
}, "isSubstringInArray");
function ls(e, t) {
	return e ? rs[`curve${e.charAt(0).toUpperCase() + e.slice(1)}`] ?? t : t;
}
i(ls, "interpolateToCurve");
function us(e, t) {
	let n = e.trim();
	if (n) return t.securityLevel === "loose" ? n : ao.sanitizeUrl(n);
}
i(us, "formatUrl");
var ds = /* @__PURE__ */ i((e, ...t) => {
	let n = e.split("."), r = n.length - 1, i = n[r], a = window;
	for (let t = 0; t < r; t++) if (a = a[n[t]], !a) {
		p.error(`Function name: ${e} not found in window`);
		return;
	}
	a[i](...t);
}, "runFunc");
function fs(e, t) {
	return !e || !t ? 0 : Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
}
i(fs, "distance");
function ps(e) {
	let t, n = 0;
	return e.forEach((e) => {
		n += fs(e, t), t = e;
	}), gs(e, n / 2);
}
i(ps, "traverseEdge");
function ms(e) {
	return e.length === 1 ? e[0] : ps(e);
}
i(ms, "calcLabelPosition");
var hs = /* @__PURE__ */ i((e, t = 2) => {
	let n = 10 ** t;
	return Math.round(e * n) / n;
}, "roundNumber"), gs = /* @__PURE__ */ i((e, t) => {
	let n, r = t;
	for (let t of e) {
		if (n) {
			let e = fs(t, n);
			if (e === 0) return n;
			if (e < r) r -= e;
			else {
				let i = r / e;
				if (i <= 0) return n;
				if (i >= 1) return {
					x: t.x,
					y: t.y
				};
				if (i > 0 && i < 1) return {
					x: hs((1 - i) * n.x + i * t.x, 5),
					y: hs((1 - i) * n.y + i * t.y, 5)
				};
			}
		}
		n = t;
	}
	throw Error("Could not find a suitable point for the given distance");
}, "calculatePoint"), _s = /* @__PURE__ */ i((e, t, n) => {
	p.info(`our points ${JSON.stringify(t)}`), t[0] !== n && (t = t.reverse());
	let r = gs(t, 25), i = e ? 10 : 5, a = Math.atan2(t[0].y - r.y, t[0].x - r.x), o = {
		x: 0,
		y: 0
	};
	return o.x = Math.sin(a) * i + (t[0].x + r.x) / 2, o.y = -Math.cos(a) * i + (t[0].y + r.y) / 2, o;
}, "calcCardinalityPosition");
function vs(e, t, n) {
	let r = structuredClone(n);
	p.info("our points", r), t !== "start_left" && t !== "start_right" && r.reverse();
	let i = gs(r, 25 + e), a = 10 + e * .5, o = Math.atan2(r[0].y - i.y, r[0].x - i.x), s = {
		x: 0,
		y: 0
	};
	return t === "start_left" ? (s.x = Math.sin(o + Math.PI) * a + (r[0].x + i.x) / 2, s.y = -Math.cos(o + Math.PI) * a + (r[0].y + i.y) / 2) : t === "end_right" ? (s.x = Math.sin(o - Math.PI) * a + (r[0].x + i.x) / 2 - 5, s.y = -Math.cos(o - Math.PI) * a + (r[0].y + i.y) / 2 - 5) : t === "end_left" ? (s.x = Math.sin(o) * a + (r[0].x + i.x) / 2 - 5, s.y = -Math.cos(o) * a + (r[0].y + i.y) / 2 - 5) : (s.x = Math.sin(o) * a + (r[0].x + i.x) / 2, s.y = -Math.cos(o) * a + (r[0].y + i.y) / 2), s;
}
i(vs, "calcTerminalLabelPosition");
function ys(e) {
	let t = "", n = "";
	for (let r of e) r !== void 0 && (r.startsWith("color:") || r.startsWith("text-align:") ? n = n + r + ";" : t = t + r + ";");
	return {
		style: t,
		labelStyle: n
	};
}
i(ys, "getStylesFromArray");
var bs = 0, xs = /* @__PURE__ */ i(() => (bs++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + bs), "generateId");
function Ss(e) {
	let t = "";
	for (let n = 0; n < e; n++) t += "0123456789abcdef".charAt(Math.floor(Math.random() * 16));
	return t;
}
i(Ss, "makeRandomHex");
var Cs = /* @__PURE__ */ i((e) => Ss(e.length), "random"), ws = /* @__PURE__ */ i(function() {
	return {
		x: 0,
		y: 0,
		fill: void 0,
		anchor: "start",
		style: "#666",
		width: 100,
		height: 100,
		textMargin: 0,
		rx: 0,
		ry: 0,
		valign: void 0,
		text: ""
	};
}, "getTextObj"), Ts = /* @__PURE__ */ i(function(e, t) {
	let n = t.text.replace(xr.lineBreakRegex, " "), [, r] = Ls(t.fontSize), i = e.append("text");
	i.attr("x", t.x), i.attr("y", t.y), i.style("text-anchor", t.anchor), i.style("font-family", t.fontFamily), i.style("font-size", r), i.style("font-weight", t.fontWeight), i.attr("fill", t.fill), t.class !== void 0 && i.attr("class", t.class);
	let a = i.append("tspan");
	return a.attr("x", t.x + t.textMargin * 2), a.attr("fill", t.fill), a.text(n), i;
}, "drawSimpleText"), Es = Zo((e, t, n) => {
	if (!e || (n = Object.assign({
		fontSize: 12,
		fontWeight: 400,
		fontFamily: "Arial",
		joinWith: "<br/>"
	}, n), xr.lineBreakRegex.test(e))) return e;
	let r = e.split(" ").filter(Boolean), i = [], a = "";
	return r.forEach((e, o) => {
		let s = ks(`${e} `, n), c = ks(a, n);
		if (s > t) {
			let { hyphenatedStrings: r, remainingWord: o } = Ds(e, t, "-", n);
			i.push(a, ...r), a = o;
		} else c + s >= t ? (i.push(a), a = e) : a = [a, e].filter(Boolean).join(" ");
		o + 1 === r.length && i.push(a);
	}), i.filter((e) => e !== "").join(n.joinWith);
}, (e, t, n) => `${e}${t}${n.fontSize}${n.fontWeight}${n.fontFamily}${n.joinWith}`), Ds = Zo((e, t, n = "-", r) => {
	r = Object.assign({
		fontSize: 12,
		fontWeight: 400,
		fontFamily: "Arial",
		margin: 0
	}, r);
	let i = [...e], a = [], o = "";
	return i.forEach((e, s) => {
		let c = `${o}${e}`;
		if (ks(c, r) >= t) {
			let e = s + 1, t = i.length === e, r = `${c}${n}`;
			a.push(t ? c : r), o = "";
		} else o = c;
	}), {
		hyphenatedStrings: a,
		remainingWord: o
	};
}, (e, t, n = "-", r) => `${e}${t}${n}${r.fontSize}${r.fontWeight}${r.fontFamily}`);
function Os(e, t) {
	return As(e, t).height;
}
i(Os, "calculateTextHeight");
function ks(e, t) {
	return As(e, t).width;
}
i(ks, "calculateTextWidth");
var As = Zo((e, t) => {
	let { fontSize: r = 12, fontFamily: i = "Arial", fontWeight: a = 400 } = t;
	if (!e) return {
		width: 0,
		height: 0
	};
	let [, o] = Ls(r), s = ["sans-serif", i], c = e.split(xr.lineBreakRegex), l = [], u = n("body");
	if (!u.remove) return {
		width: 0,
		height: 0,
		lineHeight: 0
	};
	let d = u.append("svg");
	for (let e of s) {
		let t = 0, n = {
			width: 0,
			height: 0,
			lineHeight: 0
		};
		for (let r of c) {
			let i = ws();
			i.text = r || "​";
			let s = Ts(d, i).style("font-size", o).style("font-weight", a).style("font-family", e), c = (s._groups || s)[0][0].getBBox();
			if (c.width === 0 && c.height === 0) throw Error("svg element not in render tree");
			n.width = Math.round(Math.max(n.width, c.width)), t = Math.round(c.height), n.height += t, n.lineHeight = Math.round(Math.max(n.lineHeight, t));
		}
		l.push(n);
	}
	return d.remove(), l[isNaN(l[1].height) || isNaN(l[1].width) || isNaN(l[1].lineHeight) || l[0].height > l[1].height && l[0].width > l[1].width && l[0].lineHeight > l[1].lineHeight ? 0 : 1];
}, (e, t) => `${e}${t.fontSize}${t.fontWeight}${t.fontFamily}`), js, Ms = (js = class {
	constructor(e = !1, t) {
		this.count = 0, this.count = t ? t.length : 0, this.next = e ? () => this.count++ : () => Date.now();
	}
}, i(js, "InitIDGenerator"), js), Ns, Ps = /* @__PURE__ */ i(function(e) {
	return Ns ||= document.createElement("div"), e = escape(e).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), Ns.innerHTML = e, unescape(Ns.textContent);
}, "entityDecode");
function Fs(e) {
	return "str" in e;
}
i(Fs, "isDetailedError");
var Is = /* @__PURE__ */ i((e, t, n, r) => {
	if (!r) return;
	let i = e.node()?.getBBox();
	i && e.append("text").text(r).attr("text-anchor", "middle").attr("x", i.x + i.width / 2).attr("y", -n).attr("class", t);
}, "insertTitle"), Ls = /* @__PURE__ */ i((e) => {
	if (typeof e == "number") return [e, e + "px"];
	let t = parseInt(e ?? "", 10);
	return Number.isNaN(t) ? [void 0, void 0] : e === String(t) ? [t, e + "px"] : [t, e];
}, "parseFontSize");
function Rs(e, t) {
	return ts({}, e, t);
}
i(Rs, "cleanAndMerge");
var zs = {
	assignWithDepth: Dt,
	wrapLabel: Es,
	calculateTextHeight: Os,
	calculateTextWidth: ks,
	calculateTextDimensions: As,
	cleanAndMerge: Rs,
	detectInit: as,
	detectDirective: os,
	isSubstringInArray: cs,
	interpolateToCurve: ls,
	calcLabelPosition: ms,
	calcCardinalityPosition: _s,
	calcTerminalLabelPosition: vs,
	formatUrl: us,
	getStylesFromArray: ys,
	generateId: xs,
	random: Cs,
	runFunc: ds,
	entityDecode: Ps,
	insertTitle: Is,
	isLabelCoordinateInPath: Ws,
	parseFontSize: Ls,
	InitIDGenerator: Ms
}, Bs = /* @__PURE__ */ i(function(e) {
	let t = e;
	return t = t.replace(/style.*:\S*#.*;/g, function(e) {
		return e.substring(0, e.length - 1);
	}), t = t.replace(/classDef.*:\S*#.*;/g, function(e) {
		return e.substring(0, e.length - 1);
	}), t = t.replace(/#\w+;/g, function(e) {
		let t = e.substring(1, e.length - 1);
		return /^\+?\d+$/.test(t) ? "ﬂ°°" + t + "¶ß" : "ﬂ°" + t + "¶ß";
	}), t;
}, "encodeEntities"), Vs = /* @__PURE__ */ i(function(e) {
	return e.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, "decodeEntities"), Hs = /* @__PURE__ */ i((e, t, { counter: n = 0, prefix: r, suffix: i }, a) => a || `${r ? `${r}_` : ""}${e}_${t}_${n}${i ? `_${i}` : ""}`, "getEdgeId");
function Us(e) {
	return e ?? null;
}
i(Us, "handleUndefinedAttr");
function Ws(e, t) {
	let n = Math.round(e.x), r = Math.round(e.y), i = t.replace(/(\d+\.\d+)/g, (e) => Math.round(parseFloat(e)).toString());
	return i.includes(n.toString()) || i.includes(r.toString());
}
i(Ws, "isLabelCoordinateInPath");
var Gs = { exports: {} }, Ks = Gs.exports, qs;
function Js() {
	return qs || (qs = 1, function(e) {
		(function(t) {
			var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
				return setTimeout(e, 16);
			};
			function r() {
				var e = this;
				e.reads = [], e.writes = [], e.raf = n.bind(t);
			}
			r.prototype = {
				constructor: r,
				runTasks: function(e) {
					for (var t; t = e.shift();) t();
				},
				measure: function(e, t) {
					var n = t ? e.bind(t) : e;
					return this.reads.push(n), i(this), n;
				},
				mutate: function(e, t) {
					var n = t ? e.bind(t) : e;
					return this.writes.push(n), i(this), n;
				},
				clear: function(e) {
					return o(this.reads, e) || o(this.writes, e);
				},
				extend: function(e) {
					if (typeof e != "object") throw Error("expected object");
					var t = Object.create(this);
					return s(t, e), t.fastdom = this, t.initialize && t.initialize(), t;
				},
				catch: null
			};
			function i(e) {
				e.scheduled || (e.scheduled = !0, e.raf(a.bind(null, e)));
			}
			function a(e) {
				var t = e.writes, n = e.reads, r;
				try {
					n.length, e.runTasks(n), t.length, e.runTasks(t);
				} catch (e) {
					r = e;
				}
				if (e.scheduled = !1, (n.length || t.length) && i(e), r) {
					if (r.message, e.catch) e.catch(r);
					else throw r;
				}
			}
			function o(e, t) {
				var n = e.indexOf(t);
				return !!~n && !!e.splice(n, 1);
			}
			function s(e, t) {
				for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
			}
			e.exports = t.fastdom = t.fastdom || new r();
		})(typeof window < "u" ? window : typeof Ks < "u" ? Ks : globalThis);
	}(Gs)), Gs.exports;
}
var Ys = Js(), Xs = /* @__PURE__ */ e(Ys), Zs = { exports: {} }, Qs;
function $s() {
	return Qs || (Qs = 1, function(e) {
		(function() {
			var t = {
				initialize: function() {
					this._tasks = /* @__PURE__ */ new Map();
				},
				mutate: function(e, t) {
					return n(this, "mutate", e, t);
				},
				measure: function(e, t) {
					return n(this, "measure", e, t);
				},
				clear: function(e) {
					var t = this._tasks, n = t.get(e);
					this.fastdom.clear(n), t.delete(e);
				}
			};
			function n(e, t, n, r) {
				var i = e._tasks, a = e.fastdom, o, s = new Promise(function(e, c) {
					o = a[t](function() {
						i.delete(s);
						try {
							e(r ? n.call(r) : n());
						} catch (e) {
							c(e);
						}
					}, r);
				});
				return i.set(s, o), s;
			}
			e.exports = t;
		})();
	}(Zs)), Zs.exports;
}
var ec = $s(), tc = /* @__PURE__ */ e(ec);
function nc() {
	return {
		async: !1,
		breaks: !1,
		extensions: null,
		gfm: !0,
		hooks: null,
		pedantic: !1,
		renderer: null,
		silent: !1,
		tokenizer: null,
		walkTokens: null
	};
}
var rc = nc();
function ic(e) {
	rc = e;
}
var ac = { exec: () => null };
function W(e, t = "") {
	let n = typeof e == "string" ? e : e.source, r = {
		replace: (e, t) => {
			let i = typeof t == "string" ? t : t.source;
			return i = i.replace(sc.caret, "$1"), n = n.replace(e, i), r;
		},
		getRegex: () => new RegExp(n, t)
	};
	return r;
}
var oc = (() => {
	try {
		return !0;
	} catch {
		return !1;
	}
})(), sc = {
	codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
	outputLinkReplace: /\\([\[\]])/g,
	indentCodeCompensation: /^(\s+)(?:```)/,
	beginningSpace: /^\s+/,
	endingHash: /#$/,
	startingSpaceChar: /^ /,
	endingSpaceChar: / $/,
	nonSpaceChar: /[^ ]/,
	newLineCharGlobal: /\n/g,
	tabCharGlobal: /\t/g,
	multipleSpaceGlobal: /\s+/g,
	blankLine: /^[ \t]*$/,
	doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
	blockquoteStart: /^ {0,3}>/,
	blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
	blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
	listReplaceTabs: /^\t+/,
	listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
	listIsTask: /^\[[ xX]\] /,
	listReplaceTask: /^\[[ xX]\] +/,
	anyLine: /\n.*\n/,
	hrefBrackets: /^<(.*)>$/,
	tableDelimiter: /[:|]/,
	tableAlignChars: /^\||\| *$/g,
	tableRowBlankLine: /\n[ \t]*$/,
	tableAlignRight: /^ *-+: *$/,
	tableAlignCenter: /^ *:-+: *$/,
	tableAlignLeft: /^ *:-+ *$/,
	startATag: /^<a /i,
	endATag: /^<\/a>/i,
	startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
	endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
	startAngleBracket: /^</,
	endAngleBracket: />$/,
	pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
	unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
	escapeTest: /[&<>"']/,
	escapeReplace: /[&<>"']/g,
	escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
	escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
	unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
	caret: /(^|[^\[])\^/g,
	percentDecode: /%25/g,
	findPipe: /\|/g,
	splitPipe: / \|/,
	slashPipe: /\\\|/g,
	carriageReturn: /\r\n|\r/g,
	spaceLine: /^ +$/gm,
	notSpaceStart: /^\S*/,
	endingNewline: /\n$/,
	listItemRegex: (e) => RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
	nextBulletRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
	hrRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
	fencesBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
	headingBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
	htmlBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i")
}, cc = /^(?:[ \t]*(?:\n|$))+/, lc = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, uc = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, dc = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, fc = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, pc = /(?:[*+-]|\d{1,9}[.)])/, mc = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, hc = W(mc).replace(/bull/g, pc).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), gc = W(mc).replace(/bull/g, pc).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), _c = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, vc = /^[^\n]+/, yc = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, bc = W(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", yc).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), xc = W(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, pc).getRegex(), Sc = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Cc = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, wc = W("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Cc).replace("tag", Sc).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Tc = W(_c).replace("hr", dc).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Sc).getRegex(), Ec = {
	blockquote: W(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Tc).getRegex(),
	code: lc,
	def: bc,
	fences: uc,
	heading: fc,
	hr: dc,
	html: wc,
	lheading: hc,
	list: xc,
	newline: cc,
	paragraph: Tc,
	table: ac,
	text: vc
}, Dc = W("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", dc).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Sc).getRegex(), Oc = {
	...Ec,
	lheading: gc,
	table: Dc,
	paragraph: W(_c).replace("hr", dc).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Dc).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Sc).getRegex()
}, kc = {
	...Ec,
	html: W("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", Cc).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
	def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
	heading: /^(#{1,6})(.*)(?:\n+|$)/,
	fences: ac,
	lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
	paragraph: W(_c).replace("hr", dc).replace("heading", " *#{1,6} *[^\n]").replace("lheading", hc).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Ac = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, jc = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Mc = /^( {2,}|\\)\n(?!\s*$)/, Nc = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Pc = /[\p{P}\p{S}]/u, Fc = /[\s\p{P}\p{S}]/u, Ic = /[^\s\p{P}\p{S}]/u, Lc = W(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Fc).getRegex(), Rc = /(?!~)[\p{P}\p{S}]/u, zc = /(?!~)[\s\p{P}\p{S}]/u, Bc = /(?:[^\s\p{P}\p{S}]|~)/u, Vc = W(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", oc ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Hc = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Uc = W(Hc, "u").replace(/punct/g, Pc).getRegex(), Wc = W(Hc, "u").replace(/punct/g, Rc).getRegex(), Gc = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Kc = W(Gc, "gu").replace(/notPunctSpace/g, Ic).replace(/punctSpace/g, Fc).replace(/punct/g, Pc).getRegex(), qc = W(Gc, "gu").replace(/notPunctSpace/g, Bc).replace(/punctSpace/g, zc).replace(/punct/g, Rc).getRegex(), Jc = W("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Ic).replace(/punctSpace/g, Fc).replace(/punct/g, Pc).getRegex(), Yc = W(/\\(punct)/, "gu").replace(/punct/g, Pc).getRegex(), Xc = W(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Zc = W(Cc).replace("(?:-->|$)", "-->").getRegex(), Qc = W("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Zc).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), $c = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, el = W(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", $c).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), tl = W(/^!?\[(label)\]\[(ref)\]/).replace("label", $c).replace("ref", yc).getRegex(), nl = W(/^!?\[(ref)\](?:\[\])?/).replace("ref", yc).getRegex(), rl = W("reflink|nolink(?!\\()", "g").replace("reflink", tl).replace("nolink", nl).getRegex(), il = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, al = {
	_backpedal: ac,
	anyPunctuation: Yc,
	autolink: Xc,
	blockSkip: Vc,
	br: Mc,
	code: jc,
	del: ac,
	emStrongLDelim: Uc,
	emStrongRDelimAst: Kc,
	emStrongRDelimUnd: Jc,
	escape: Ac,
	link: el,
	nolink: nl,
	punctuation: Lc,
	reflink: tl,
	reflinkSearch: rl,
	tag: Qc,
	text: Nc,
	url: ac
}, ol = {
	...al,
	link: W(/^!?\[(label)\]\((.*?)\)/).replace("label", $c).getRegex(),
	reflink: W(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", $c).getRegex()
}, sl = {
	...al,
	emStrongRDelimAst: qc,
	emStrongLDelim: Wc,
	url: W(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", il).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
	_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
	del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
	text: W(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", il).getRegex()
}, cl = {
	...sl,
	br: W(Mc).replace("{2,}", "*").getRegex(),
	text: W(sl.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, ll = {
	normal: Ec,
	gfm: Oc,
	pedantic: kc
}, ul = {
	normal: al,
	gfm: sl,
	breaks: cl,
	pedantic: ol
}, dl = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
}, fl = (e) => dl[e];
function pl(e, t) {
	if (t) {
		if (sc.escapeTest.test(e)) return e.replace(sc.escapeReplace, fl);
	} else if (sc.escapeTestNoEncode.test(e)) return e.replace(sc.escapeReplaceNoEncode, fl);
	return e;
}
function ml(e) {
	try {
		e = encodeURI(e).replace(sc.percentDecode, "%");
	} catch {
		return null;
	}
	return e;
}
function hl(e, t) {
	let n = e.replace(sc.findPipe, (e, t, n) => {
		let r = !1, i = t;
		for (; --i >= 0 && n[i] === "\\";) r = !r;
		return r ? "|" : " |";
	}).split(sc.splitPipe), r = 0;
	if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), t) {
		if (n.length > t) n.splice(t);
		else for (; n.length < t;) n.push("");
	}
	for (; r < n.length; r++) n[r] = n[r].trim().replace(sc.slashPipe, "|");
	return n;
}
function gl(e, t, n) {
	let r = e.length;
	if (r === 0) return "";
	let i = 0;
	for (; i < r && e.charAt(r - i - 1) === t;) i++;
	return e.slice(0, r - i);
}
function _l(e, t) {
	if (e.indexOf(t[1]) === -1) return -1;
	let n = 0;
	for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
	else if (e[r] === t[0]) n++;
	else if (e[r] === t[1] && (n--, n < 0)) return r;
	return n > 0 ? -2 : -1;
}
function vl(e, t, n, r, i) {
	let a = t.href, o = t.title || null, s = e[1].replace(i.other.outputLinkReplace, "$1");
	r.state.inLink = !0;
	let c = {
		type: e[0].charAt(0) === "!" ? "image" : "link",
		raw: n,
		href: a,
		title: o,
		text: s,
		tokens: r.inlineTokens(s)
	};
	return r.state.inLink = !1, c;
}
function yl(e, t, n) {
	let r = e.match(n.other.indentCodeCompensation);
	if (r === null) return t;
	let i = r[1];
	return t.split("\n").map((e) => {
		let t = e.match(n.other.beginningSpace);
		if (t === null) return e;
		let [r] = t;
		return r.length >= i.length ? e.slice(i.length) : e;
	}).join("\n");
}
var bl = class {
	options;
	rules;
	lexer;
	constructor(e) {
		this.options = e || rc;
	}
	space(e) {
		let t = this.rules.block.newline.exec(e);
		if (t && t[0].length > 0) return {
			type: "space",
			raw: t[0]
		};
	}
	code(e) {
		let t = this.rules.block.code.exec(e);
		if (t) {
			let e = t[0].replace(this.rules.other.codeRemoveIndent, "");
			return {
				type: "code",
				raw: t[0],
				codeBlockStyle: "indented",
				text: this.options.pedantic ? e : gl(e, "\n")
			};
		}
	}
	fences(e) {
		let t = this.rules.block.fences.exec(e);
		if (t) {
			let e = t[0], n = yl(e, t[3] || "", this.rules);
			return {
				type: "code",
				raw: e,
				lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
				text: n
			};
		}
	}
	heading(e) {
		let t = this.rules.block.heading.exec(e);
		if (t) {
			let e = t[2].trim();
			if (this.rules.other.endingHash.test(e)) {
				let t = gl(e, "#");
				(this.options.pedantic || !t || this.rules.other.endingSpaceChar.test(t)) && (e = t.trim());
			}
			return {
				type: "heading",
				raw: t[0],
				depth: t[1].length,
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	hr(e) {
		let t = this.rules.block.hr.exec(e);
		if (t) return {
			type: "hr",
			raw: gl(t[0], "\n")
		};
	}
	blockquote(e) {
		let t = this.rules.block.blockquote.exec(e);
		if (t) {
			let e = gl(t[0], "\n").split("\n"), n = "", r = "", i = [];
			for (; e.length > 0;) {
				let t = !1, a = [], o;
				for (o = 0; o < e.length; o++) if (this.rules.other.blockquoteStart.test(e[o])) a.push(e[o]), t = !0;
				else if (!t) a.push(e[o]);
				else break;
				e = e.slice(o);
				let s = a.join("\n"), c = s.replace(this.rules.other.blockquoteSetextReplace, "\n    $1").replace(this.rules.other.blockquoteSetextReplace2, "");
				n = n ? `${n}
${s}` : s, r = r ? `${r}
${c}` : c;
				let l = this.lexer.state.top;
				if (this.lexer.state.top = !0, this.lexer.blockTokens(c, i, !0), this.lexer.state.top = l, e.length === 0) break;
				let u = i.at(-1);
				if (u?.type === "code") break;
				if (u?.type === "blockquote") {
					let t = u, a = t.raw + "\n" + e.join("\n"), o = this.blockquote(a);
					i[i.length - 1] = o, n = n.substring(0, n.length - t.raw.length) + o.raw, r = r.substring(0, r.length - t.text.length) + o.text;
					break;
				}
				if (u?.type === "list") {
					let t = u, a = t.raw + "\n" + e.join("\n"), o = this.list(a);
					i[i.length - 1] = o, n = n.substring(0, n.length - u.raw.length) + o.raw, r = r.substring(0, r.length - t.raw.length) + o.raw, e = a.substring(i.at(-1).raw.length).split("\n");
					continue;
				}
			}
			return {
				type: "blockquote",
				raw: n,
				tokens: i,
				text: r
			};
		}
	}
	list(e) {
		let t = this.rules.block.list.exec(e);
		if (t) {
			let n = t[1].trim(), r = n.length > 1, i = {
				type: "list",
				raw: "",
				ordered: r,
				start: r ? +n.slice(0, -1) : "",
				loose: !1,
				items: []
			};
			n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
			let a = this.rules.other.listItemRegex(n), o = !1;
			for (; e;) {
				let n = !1, r = "", s = "";
				if (!(t = a.exec(e)) || this.rules.block.hr.test(e)) break;
				r = t[0], e = e.substring(r.length);
				let c = t[2].split("\n", 1)[0].replace(this.rules.other.listReplaceTabs, (e) => " ".repeat(3 * e.length)), l = e.split("\n", 1)[0], u = !c.trim(), d = 0;
				if (this.options.pedantic ? (d = 2, s = c.trimStart()) : u ? d = t[1].length + 1 : (d = t[2].search(this.rules.other.nonSpaceChar), d = d > 4 ? 1 : d, s = c.slice(d), d += t[1].length), u && this.rules.other.blankLine.test(l) && (r += l + "\n", e = e.substring(l.length + 1), n = !0), !n) {
					let t = this.rules.other.nextBulletRegex(d), n = this.rules.other.hrRegex(d), i = this.rules.other.fencesBeginRegex(d), a = this.rules.other.headingBeginRegex(d), o = this.rules.other.htmlBeginRegex(d);
					for (; e;) {
						let f = e.split("\n", 1)[0], p;
						if (l = f, this.options.pedantic ? (l = l.replace(this.rules.other.listReplaceNesting, "  "), p = l) : p = l.replace(this.rules.other.tabCharGlobal, "    "), i.test(l) || a.test(l) || o.test(l) || t.test(l) || n.test(l)) break;
						if (p.search(this.rules.other.nonSpaceChar) >= d || !l.trim()) s += "\n" + p.slice(d);
						else {
							if (u || c.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || i.test(c) || a.test(c) || n.test(c)) break;
							s += "\n" + l;
						}
						!u && !l.trim() && (u = !0), r += f + "\n", e = e.substring(f.length + 1), c = p.slice(d);
					}
				}
				i.loose || (o ? i.loose = !0 : this.rules.other.doubleBlankLine.test(r) && (o = !0));
				let f = null, p;
				this.options.gfm && (f = this.rules.other.listIsTask.exec(s), f && (p = f[0] !== "[ ] ", s = s.replace(this.rules.other.listReplaceTask, ""))), i.items.push({
					type: "list_item",
					raw: r,
					task: !!f,
					checked: p,
					loose: !1,
					text: s,
					tokens: []
				}), i.raw += r;
			}
			let s = i.items.at(-1);
			if (s) s.raw = s.raw.trimEnd(), s.text = s.text.trimEnd();
			else return;
			i.raw = i.raw.trimEnd();
			for (let e = 0; e < i.items.length; e++) if (this.lexer.state.top = !1, i.items[e].tokens = this.lexer.blockTokens(i.items[e].text, []), !i.loose) {
				let t = i.items[e].tokens.filter((e) => e.type === "space");
				i.loose = t.length > 0 && t.some((e) => this.rules.other.anyLine.test(e.raw));
			}
			if (i.loose) for (let e = 0; e < i.items.length; e++) i.items[e].loose = !0;
			return i;
		}
	}
	html(e) {
		let t = this.rules.block.html.exec(e);
		if (t) return {
			type: "html",
			block: !0,
			raw: t[0],
			pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
			text: t[0]
		};
	}
	def(e) {
		let t = this.rules.block.def.exec(e);
		if (t) {
			let e = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
			return {
				type: "def",
				tag: e,
				raw: t[0],
				href: n,
				title: r
			};
		}
	}
	table(e) {
		let t = this.rules.block.table.exec(e);
		if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
		let n = hl(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [], a = {
			type: "table",
			raw: t[0],
			header: [],
			align: [],
			rows: []
		};
		if (n.length === r.length) {
			for (let e of r) this.rules.other.tableAlignRight.test(e) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(e) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(e) ? a.align.push("left") : a.align.push(null);
			for (let e = 0; e < n.length; e++) a.header.push({
				text: n[e],
				tokens: this.lexer.inline(n[e]),
				header: !0,
				align: a.align[e]
			});
			for (let e of i) a.rows.push(hl(e, a.header.length).map((e, t) => ({
				text: e,
				tokens: this.lexer.inline(e),
				header: !1,
				align: a.align[t]
			})));
			return a;
		}
	}
	lheading(e) {
		let t = this.rules.block.lheading.exec(e);
		if (t) return {
			type: "heading",
			raw: t[0],
			depth: t[2].charAt(0) === "=" ? 1 : 2,
			text: t[1],
			tokens: this.lexer.inline(t[1])
		};
	}
	paragraph(e) {
		let t = this.rules.block.paragraph.exec(e);
		if (t) {
			let e = t[1].charAt(t[1].length - 1) === "\n" ? t[1].slice(0, -1) : t[1];
			return {
				type: "paragraph",
				raw: t[0],
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	text(e) {
		let t = this.rules.block.text.exec(e);
		if (t) return {
			type: "text",
			raw: t[0],
			text: t[0],
			tokens: this.lexer.inline(t[0])
		};
	}
	escape(e) {
		let t = this.rules.inline.escape.exec(e);
		if (t) return {
			type: "escape",
			raw: t[0],
			text: t[1]
		};
	}
	tag(e) {
		let t = this.rules.inline.tag.exec(e);
		if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
			type: "html",
			raw: t[0],
			inLink: this.lexer.state.inLink,
			inRawBlock: this.lexer.state.inRawBlock,
			block: !1,
			text: t[0]
		};
	}
	link(e) {
		let t = this.rules.inline.link.exec(e);
		if (t) {
			let e = t[2].trim();
			if (!this.options.pedantic && this.rules.other.startAngleBracket.test(e)) {
				if (!this.rules.other.endAngleBracket.test(e)) return;
				let t = gl(e.slice(0, -1), "\\");
				if ((e.length - t.length) % 2 == 0) return;
			} else {
				let e = _l(t[2], "()");
				if (e === -2) return;
				if (e > -1) {
					let n = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + e;
					t[2] = t[2].substring(0, e), t[0] = t[0].substring(0, n).trim(), t[3] = "";
				}
			}
			let n = t[2], r = "";
			if (this.options.pedantic) {
				let e = this.rules.other.pedanticHrefTitle.exec(n);
				e && (n = e[1], r = e[3]);
			} else r = t[3] ? t[3].slice(1, -1) : "";
			return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (n = this.options.pedantic && !this.rules.other.endAngleBracket.test(e) ? n.slice(1) : n.slice(1, -1)), vl(t, {
				href: n && n.replace(this.rules.inline.anyPunctuation, "$1"),
				title: r && r.replace(this.rules.inline.anyPunctuation, "$1")
			}, t[0], this.lexer, this.rules);
		}
	}
	reflink(e, t) {
		let n;
		if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
			let e = t[(n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " ").toLowerCase()];
			if (!e) {
				let e = n[0].charAt(0);
				return {
					type: "text",
					raw: e,
					text: e
				};
			}
			return vl(n, e, n[0], this.lexer, this.rules);
		}
	}
	emStrong(e, t, n = "") {
		let r = this.rules.inline.emStrongLDelim.exec(e);
		if (!(!r || r[3] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(r[1] || r[2]) || !n || this.rules.inline.punctuation.exec(n))) {
			let n = [...r[0]].length - 1, i, a, o = n, s = 0, c = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
			for (c.lastIndex = 0, t = t.slice(-1 * e.length + n); (r = c.exec(t)) != null;) {
				if (i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !i) continue;
				if (a = [...i].length, r[3] || r[4]) {
					o += a;
					continue;
				}
				if ((r[5] || r[6]) && n % 3 && !((n + a) % 3)) {
					s += a;
					continue;
				}
				if (o -= a, o > 0) continue;
				a = Math.min(a, a + o + s);
				let t = [...r[0]][0].length, c = e.slice(0, n + r.index + t + a);
				if (Math.min(n, a) % 2) {
					let e = c.slice(1, -1);
					return {
						type: "em",
						raw: c,
						text: e,
						tokens: this.lexer.inlineTokens(e)
					};
				}
				let l = c.slice(2, -2);
				return {
					type: "strong",
					raw: c,
					text: l,
					tokens: this.lexer.inlineTokens(l)
				};
			}
		}
	}
	codespan(e) {
		let t = this.rules.inline.code.exec(e);
		if (t) {
			let e = t[2].replace(this.rules.other.newLineCharGlobal, " "), n = this.rules.other.nonSpaceChar.test(e), r = this.rules.other.startingSpaceChar.test(e) && this.rules.other.endingSpaceChar.test(e);
			return n && r && (e = e.substring(1, e.length - 1)), {
				type: "codespan",
				raw: t[0],
				text: e
			};
		}
	}
	br(e) {
		let t = this.rules.inline.br.exec(e);
		if (t) return {
			type: "br",
			raw: t[0]
		};
	}
	del(e) {
		let t = this.rules.inline.del.exec(e);
		if (t) return {
			type: "del",
			raw: t[0],
			text: t[2],
			tokens: this.lexer.inlineTokens(t[2])
		};
	}
	autolink(e) {
		let t = this.rules.inline.autolink.exec(e);
		if (t) {
			let e, n;
			return t[2] === "@" ? (e = t[1], n = "mailto:" + e) : (e = t[1], n = e), {
				type: "link",
				raw: t[0],
				text: e,
				href: n,
				tokens: [{
					type: "text",
					raw: e,
					text: e
				}]
			};
		}
	}
	url(e) {
		let t;
		if (t = this.rules.inline.url.exec(e)) {
			let e, n;
			if (t[2] === "@") e = t[0], n = "mailto:" + e;
			else {
				let r;
				do
					r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
				while (r !== t[0]);
				e = t[0], n = t[1] === "www." ? "http://" + t[0] : t[0];
			}
			return {
				type: "link",
				raw: t[0],
				text: e,
				href: n,
				tokens: [{
					type: "text",
					raw: e,
					text: e
				}]
			};
		}
	}
	inlineText(e) {
		let t = this.rules.inline.text.exec(e);
		if (t) {
			let e = this.lexer.state.inRawBlock;
			return {
				type: "text",
				raw: t[0],
				text: t[0],
				escaped: e
			};
		}
	}
}, xl = class e {
	tokens;
	options;
	state;
	tokenizer;
	inlineQueue;
	constructor(e) {
		this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || rc, this.options.tokenizer = this.options.tokenizer || new bl(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
			inLink: !1,
			inRawBlock: !1,
			top: !0
		};
		let t = {
			other: sc,
			block: ll.normal,
			inline: ul.normal
		};
		this.options.pedantic ? (t.block = ll.pedantic, t.inline = ul.pedantic) : this.options.gfm && (t.block = ll.gfm, t.inline = this.options.breaks ? ul.breaks : ul.gfm), this.tokenizer.rules = t;
	}
	static get rules() {
		return {
			block: ll,
			inline: ul
		};
	}
	static lex(t, n) {
		return new e(n).lex(t);
	}
	static lexInline(t, n) {
		return new e(n).inlineTokens(t);
	}
	lex(e) {
		e = e.replace(sc.carriageReturn, "\n"), this.blockTokens(e, this.tokens);
		for (let e = 0; e < this.inlineQueue.length; e++) {
			let t = this.inlineQueue[e];
			this.inlineTokens(t.src, t.tokens);
		}
		return this.inlineQueue = [], this.tokens;
	}
	blockTokens(e, t = [], n = !1) {
		for (this.options.pedantic && (e = e.replace(sc.tabCharGlobal, "    ").replace(sc.spaceLine, "")); e;) {
			let r;
			if (this.options.extensions?.block?.some((n) => (r = n.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1)) continue;
			if (r = this.tokenizer.space(e)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				r.raw.length === 1 && n !== void 0 ? n.raw += "\n" : t.push(r);
				continue;
			}
			if (r = this.tokenizer.code(e)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				n?.type === "paragraph" || n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + r.raw, n.text += "\n" + r.text, this.inlineQueue.at(-1).src = n.text) : t.push(r);
				continue;
			}
			if (r = this.tokenizer.fences(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.heading(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.hr(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.blockquote(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.list(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.html(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.def(e)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				n?.type === "paragraph" || n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + r.raw, n.text += "\n" + r.raw, this.inlineQueue.at(-1).src = n.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
					href: r.href,
					title: r.title
				}, t.push(r));
				continue;
			}
			if (r = this.tokenizer.table(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.lheading(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			let i = e;
			if (this.options.extensions?.startBlock) {
				let t = 1 / 0, n = e.slice(1), r;
				this.options.extensions.startBlock.forEach((e) => {
					r = e.call({ lexer: this }, n), typeof r == "number" && r >= 0 && (t = Math.min(t, r));
				}), t < 1 / 0 && t >= 0 && (i = e.substring(0, t + 1));
			}
			if (this.state.top && (r = this.tokenizer.paragraph(i))) {
				let a = t.at(-1);
				n && a?.type === "paragraph" ? (a.raw += (a.raw.endsWith("\n") ? "" : "\n") + r.raw, a.text += "\n" + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : t.push(r), n = i.length !== e.length, e = e.substring(r.raw.length);
				continue;
			}
			if (r = this.tokenizer.text(e)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + r.raw, n.text += "\n" + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = n.text) : t.push(r);
				continue;
			}
			if (e) {
				let t = "Infinite loop on byte: " + e.charCodeAt(0);
				if (this.options.silent) {
					console.error(t);
					break;
				}
				throw Error(t);
			}
		}
		return this.state.top = !0, t;
	}
	inline(e, t = []) {
		return this.inlineQueue.push({
			src: e,
			tokens: t
		}), t;
	}
	inlineTokens(e, t = []) {
		let n = e, r = null;
		if (this.tokens.links) {
			let e = Object.keys(this.tokens.links);
			if (e.length > 0) for (; (r = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null;) e.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
		}
		for (; (r = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null;) n = n.slice(0, r.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
		let i;
		for (; (r = this.tokenizer.rules.inline.blockSkip.exec(n)) != null;) i = r[2] ? r[2].length : 0, n = n.slice(0, r.index + i) + "[" + "a".repeat(r[0].length - i - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
		n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
		let a = !1, o = "";
		for (; e;) {
			a || (o = ""), a = !1;
			let r;
			if (this.options.extensions?.inline?.some((n) => (r = n.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1)) continue;
			if (r = this.tokenizer.escape(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.tag(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.link(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.reflink(e, this.tokens.links)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				r.type === "text" && n?.type === "text" ? (n.raw += r.raw, n.text += r.text) : t.push(r);
				continue;
			}
			if (r = this.tokenizer.emStrong(e, n, o)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.codespan(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.br(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.del(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.autolink(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (!this.state.inLink && (r = this.tokenizer.url(e))) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			let i = e;
			if (this.options.extensions?.startInline) {
				let t = 1 / 0, n = e.slice(1), r;
				this.options.extensions.startInline.forEach((e) => {
					r = e.call({ lexer: this }, n), typeof r == "number" && r >= 0 && (t = Math.min(t, r));
				}), t < 1 / 0 && t >= 0 && (i = e.substring(0, t + 1));
			}
			if (r = this.tokenizer.inlineText(i)) {
				e = e.substring(r.raw.length), r.raw.slice(-1) !== "_" && (o = r.raw.slice(-1)), a = !0;
				let n = t.at(-1);
				n?.type === "text" ? (n.raw += r.raw, n.text += r.text) : t.push(r);
				continue;
			}
			if (e) {
				let t = "Infinite loop on byte: " + e.charCodeAt(0);
				if (this.options.silent) {
					console.error(t);
					break;
				}
				throw Error(t);
			}
		}
		return t;
	}
}, Sl = class {
	options;
	parser;
	constructor(e) {
		this.options = e || rc;
	}
	space(e) {
		return "";
	}
	code({ text: e, lang: t, escaped: n }) {
		let r = (t || "").match(sc.notSpaceStart)?.[0], i = e.replace(sc.endingNewline, "") + "\n";
		return r ? "<pre><code class=\"language-" + pl(r) + "\">" + (n ? i : pl(i, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? i : pl(i, !0)) + "</code></pre>\n";
	}
	blockquote({ tokens: e }) {
		return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
	}
	html({ text: e }) {
		return e;
	}
	def(e) {
		return "";
	}
	heading({ tokens: e, depth: t }) {
		return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
	}
	hr(e) {
		return "<hr>\n";
	}
	list(e) {
		let t = e.ordered, n = e.start, r = "";
		for (let t = 0; t < e.items.length; t++) {
			let n = e.items[t];
			r += this.listitem(n);
		}
		let i = t ? "ol" : "ul", a = t && n !== 1 ? " start=\"" + n + "\"" : "";
		return "<" + i + a + ">\n" + r + "</" + i + ">\n";
	}
	listitem(e) {
		let t = "";
		if (e.task) {
			let n = this.checkbox({ checked: !!e.checked });
			e.loose ? e.tokens[0]?.type === "paragraph" ? (e.tokens[0].text = n + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = n + " " + pl(e.tokens[0].tokens[0].text), e.tokens[0].tokens[0].escaped = !0)) : e.tokens.unshift({
				type: "text",
				raw: n + " ",
				text: n + " ",
				escaped: !0
			}) : t += n + " ";
		}
		return t += this.parser.parse(e.tokens, !!e.loose), `<li>${t}</li>
`;
	}
	checkbox({ checked: e }) {
		return "<input " + (e ? "checked=\"\" " : "") + "disabled=\"\" type=\"checkbox\">";
	}
	paragraph({ tokens: e }) {
		return `<p>${this.parser.parseInline(e)}</p>
`;
	}
	table(e) {
		let t = "", n = "";
		for (let t = 0; t < e.header.length; t++) n += this.tablecell(e.header[t]);
		t += this.tablerow({ text: n });
		let r = "";
		for (let t = 0; t < e.rows.length; t++) {
			let i = e.rows[t];
			n = "";
			for (let e = 0; e < i.length; e++) n += this.tablecell(i[e]);
			r += this.tablerow({ text: n });
		}
		return r &&= `<tbody>${r}</tbody>`, "<table>\n<thead>\n" + t + "</thead>\n" + r + "</table>\n";
	}
	tablerow({ text: e }) {
		return `<tr>
${e}</tr>
`;
	}
	tablecell(e) {
		let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
		return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
	}
	strong({ tokens: e }) {
		return `<strong>${this.parser.parseInline(e)}</strong>`;
	}
	em({ tokens: e }) {
		return `<em>${this.parser.parseInline(e)}</em>`;
	}
	codespan({ text: e }) {
		return `<code>${pl(e, !0)}</code>`;
	}
	br(e) {
		return "<br>";
	}
	del({ tokens: e }) {
		return `<del>${this.parser.parseInline(e)}</del>`;
	}
	link({ href: e, title: t, tokens: n }) {
		let r = this.parser.parseInline(n), i = ml(e);
		if (i === null) return r;
		e = i;
		let a = "<a href=\"" + e + "\"";
		return t && (a += " title=\"" + pl(t) + "\""), a += ">" + r + "</a>", a;
	}
	image({ href: e, title: t, text: n, tokens: r }) {
		r && (n = this.parser.parseInline(r, this.parser.textRenderer));
		let i = ml(e);
		if (i === null) return pl(n);
		e = i;
		let a = `<img src="${e}" alt="${n}"`;
		return t && (a += ` title="${pl(t)}"`), a += ">", a;
	}
	text(e) {
		return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : pl(e.text);
	}
}, Cl = class {
	strong({ text: e }) {
		return e;
	}
	em({ text: e }) {
		return e;
	}
	codespan({ text: e }) {
		return e;
	}
	del({ text: e }) {
		return e;
	}
	html({ text: e }) {
		return e;
	}
	text({ text: e }) {
		return e;
	}
	link({ text: e }) {
		return "" + e;
	}
	image({ text: e }) {
		return "" + e;
	}
	br() {
		return "";
	}
}, wl = class e {
	options;
	renderer;
	textRenderer;
	constructor(e) {
		this.options = e || rc, this.options.renderer = this.options.renderer || new Sl(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Cl();
	}
	static parse(t, n) {
		return new e(n).parse(t);
	}
	static parseInline(t, n) {
		return new e(n).parseInline(t);
	}
	parse(e, t = !0) {
		let n = "";
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			if (this.options.extensions?.renderers?.[i.type]) {
				let e = i, t = this.options.extensions.renderers[e.type].call({ parser: this }, e);
				if (t !== !1 || ![
					"space",
					"hr",
					"heading",
					"code",
					"table",
					"blockquote",
					"list",
					"html",
					"def",
					"paragraph",
					"text"
				].includes(e.type)) {
					n += t || "";
					continue;
				}
			}
			let a = i;
			switch (a.type) {
				case "space":
					n += this.renderer.space(a);
					continue;
				case "hr":
					n += this.renderer.hr(a);
					continue;
				case "heading":
					n += this.renderer.heading(a);
					continue;
				case "code":
					n += this.renderer.code(a);
					continue;
				case "table":
					n += this.renderer.table(a);
					continue;
				case "blockquote":
					n += this.renderer.blockquote(a);
					continue;
				case "list":
					n += this.renderer.list(a);
					continue;
				case "html":
					n += this.renderer.html(a);
					continue;
				case "def":
					n += this.renderer.def(a);
					continue;
				case "paragraph":
					n += this.renderer.paragraph(a);
					continue;
				case "text": {
					let i = a, o = this.renderer.text(i);
					for (; r + 1 < e.length && e[r + 1].type === "text";) i = e[++r], o += "\n" + this.renderer.text(i);
					n += t ? this.renderer.paragraph({
						type: "paragraph",
						raw: o,
						text: o,
						tokens: [{
							type: "text",
							raw: o,
							text: o,
							escaped: !0
						}]
					}) : o;
					continue;
				}
				default: {
					let e = "Token with \"" + a.type + "\" type was not found.";
					if (this.options.silent) return console.error(e), "";
					throw Error(e);
				}
			}
		}
		return n;
	}
	parseInline(e, t = this.renderer) {
		let n = "";
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			if (this.options.extensions?.renderers?.[i.type]) {
				let e = this.options.extensions.renderers[i.type].call({ parser: this }, i);
				if (e !== !1 || ![
					"escape",
					"html",
					"link",
					"image",
					"strong",
					"em",
					"codespan",
					"br",
					"del",
					"text"
				].includes(i.type)) {
					n += e || "";
					continue;
				}
			}
			let a = i;
			switch (a.type) {
				case "escape":
					n += t.text(a);
					break;
				case "html":
					n += t.html(a);
					break;
				case "link":
					n += t.link(a);
					break;
				case "image":
					n += t.image(a);
					break;
				case "strong":
					n += t.strong(a);
					break;
				case "em":
					n += t.em(a);
					break;
				case "codespan":
					n += t.codespan(a);
					break;
				case "br":
					n += t.br(a);
					break;
				case "del":
					n += t.del(a);
					break;
				case "text":
					n += t.text(a);
					break;
				default: {
					let e = "Token with \"" + a.type + "\" type was not found.";
					if (this.options.silent) return console.error(e), "";
					throw Error(e);
				}
			}
		}
		return n;
	}
}, Tl = class {
	options;
	block;
	constructor(e) {
		this.options = e || rc;
	}
	static passThroughHooks = /* @__PURE__ */ new Set([
		"preprocess",
		"postprocess",
		"processAllTokens",
		"emStrongMask"
	]);
	static passThroughHooksRespectAsync = /* @__PURE__ */ new Set([
		"preprocess",
		"postprocess",
		"processAllTokens"
	]);
	preprocess(e) {
		return e;
	}
	postprocess(e) {
		return e;
	}
	processAllTokens(e) {
		return e;
	}
	emStrongMask(e) {
		return e;
	}
	provideLexer() {
		return this.block ? xl.lex : xl.lexInline;
	}
	provideParser() {
		return this.block ? wl.parse : wl.parseInline;
	}
}, El = new class {
	defaults = nc();
	options = this.setOptions;
	parse = this.parseMarkdown(!0);
	parseInline = this.parseMarkdown(!1);
	Parser = wl;
	Renderer = Sl;
	TextRenderer = Cl;
	Lexer = xl;
	Tokenizer = bl;
	Hooks = Tl;
	constructor(...e) {
		this.use(...e);
	}
	walkTokens(e, t) {
		let n = [];
		for (let r of e) switch (n = n.concat(t.call(this, r)), r.type) {
			case "table": {
				let e = r;
				for (let r of e.header) n = n.concat(this.walkTokens(r.tokens, t));
				for (let r of e.rows) for (let e of r) n = n.concat(this.walkTokens(e.tokens, t));
				break;
			}
			case "list": {
				let e = r;
				n = n.concat(this.walkTokens(e.items, t));
				break;
			}
			default: {
				let e = r;
				this.defaults.extensions?.childTokens?.[e.type] ? this.defaults.extensions.childTokens[e.type].forEach((r) => {
					let i = e[r].flat(1 / 0);
					n = n.concat(this.walkTokens(i, t));
				}) : e.tokens && (n = n.concat(this.walkTokens(e.tokens, t)));
			}
		}
		return n;
	}
	use(...e) {
		let t = this.defaults.extensions || {
			renderers: {},
			childTokens: {}
		};
		return e.forEach((e) => {
			let n = { ...e };
			if (n.async = this.defaults.async || n.async || !1, e.extensions && (e.extensions.forEach((e) => {
				if (!e.name) throw Error("extension name required");
				if ("renderer" in e) {
					let n = t.renderers[e.name];
					n ? t.renderers[e.name] = function(...t) {
						let r = e.renderer.apply(this, t);
						return r === !1 && (r = n.apply(this, t)), r;
					} : t.renderers[e.name] = e.renderer;
				}
				if ("tokenizer" in e) {
					if (!e.level || e.level !== "block" && e.level !== "inline") throw Error("extension level must be 'block' or 'inline'");
					let n = t[e.level];
					n ? n.unshift(e.tokenizer) : t[e.level] = [e.tokenizer], e.start && (e.level === "block" ? t.startBlock ? t.startBlock.push(e.start) : t.startBlock = [e.start] : e.level === "inline" && (t.startInline ? t.startInline.push(e.start) : t.startInline = [e.start]));
				}
				"childTokens" in e && e.childTokens && (t.childTokens[e.name] = e.childTokens);
			}), n.extensions = t), e.renderer) {
				let t = this.defaults.renderer || new Sl(this.defaults);
				for (let n in e.renderer) {
					if (!(n in t)) throw Error(`renderer '${n}' does not exist`);
					if (["options", "parser"].includes(n)) continue;
					let r = n, i = e.renderer[r], a = t[r];
					t[r] = (...e) => {
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n || "";
					};
				}
				n.renderer = t;
			}
			if (e.tokenizer) {
				let t = this.defaults.tokenizer || new bl(this.defaults);
				for (let n in e.tokenizer) {
					if (!(n in t)) throw Error(`tokenizer '${n}' does not exist`);
					if ([
						"options",
						"rules",
						"lexer"
					].includes(n)) continue;
					let r = n, i = e.tokenizer[r], a = t[r];
					t[r] = (...e) => {
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n;
					};
				}
				n.tokenizer = t;
			}
			if (e.hooks) {
				let t = this.defaults.hooks || new Tl();
				for (let n in e.hooks) {
					if (!(n in t)) throw Error(`hook '${n}' does not exist`);
					if (["options", "block"].includes(n)) continue;
					let r = n, i = e.hooks[r], a = t[r];
					t[r] = Tl.passThroughHooks.has(n) ? (e) => {
						if (this.defaults.async && Tl.passThroughHooksRespectAsync.has(n)) return (async () => {
							let n = await i.call(t, e);
							return a.call(t, n);
						})();
						let r = i.call(t, e);
						return a.call(t, r);
					} : (...e) => {
						if (this.defaults.async) return (async () => {
							let n = await i.apply(t, e);
							return n === !1 && (n = await a.apply(t, e)), n;
						})();
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n;
					};
				}
				n.hooks = t;
			}
			if (e.walkTokens) {
				let t = this.defaults.walkTokens, r = e.walkTokens;
				n.walkTokens = function(e) {
					let n = [];
					return n.push(r.call(this, e)), t && (n = n.concat(t.call(this, e))), n;
				};
			}
			this.defaults = {
				...this.defaults,
				...n
			};
		}), this;
	}
	setOptions(e) {
		return this.defaults = {
			...this.defaults,
			...e
		}, this;
	}
	lexer(e, t) {
		return xl.lex(e, t ?? this.defaults);
	}
	parser(e, t) {
		return wl.parse(e, t ?? this.defaults);
	}
	parseMarkdown(e) {
		return (t, n) => {
			let r = { ...n }, i = {
				...this.defaults,
				...r
			}, a = this.onError(!!i.silent, !!i.async);
			if (this.defaults.async === !0 && r.async === !1) return a(/* @__PURE__ */ Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
			if (typeof t > "u" || t === null) return a(/* @__PURE__ */ Error("marked(): input parameter is undefined or null"));
			if (typeof t != "string") return a(/* @__PURE__ */ Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
			if (i.hooks && (i.hooks.options = i, i.hooks.block = e), i.async) return (async () => {
				let n = i.hooks ? await i.hooks.preprocess(t) : t, r = await (i.hooks ? await i.hooks.provideLexer() : e ? xl.lex : xl.lexInline)(n, i), a = i.hooks ? await i.hooks.processAllTokens(r) : r;
				i.walkTokens && await Promise.all(this.walkTokens(a, i.walkTokens));
				let o = await (i.hooks ? await i.hooks.provideParser() : e ? wl.parse : wl.parseInline)(a, i);
				return i.hooks ? await i.hooks.postprocess(o) : o;
			})().catch(a);
			try {
				i.hooks && (t = i.hooks.preprocess(t));
				let n = (i.hooks ? i.hooks.provideLexer() : e ? xl.lex : xl.lexInline)(t, i);
				i.hooks && (n = i.hooks.processAllTokens(n)), i.walkTokens && this.walkTokens(n, i.walkTokens);
				let r = (i.hooks ? i.hooks.provideParser() : e ? wl.parse : wl.parseInline)(n, i);
				return i.hooks && (r = i.hooks.postprocess(r)), r;
			} catch (e) {
				return a(e);
			}
		};
	}
	onError(e, t) {
		return (n) => {
			if (n.message += "\nPlease report this to https://github.com/markedjs/marked.", e) {
				let e = "<p>An error occurred:</p><pre>" + pl(n.message + "", !0) + "</pre>";
				return t ? Promise.resolve(e) : e;
			}
			if (t) return Promise.reject(n);
			throw n;
		};
	}
}();
function G(e, t) {
	return El.parse(e, t);
}
G.options = G.setOptions = function(e) {
	return El.setOptions(e), G.defaults = El.defaults, ic(G.defaults), G;
}, G.getDefaults = nc, G.defaults = rc, G.use = function(...e) {
	return El.use(...e), G.defaults = El.defaults, ic(G.defaults), G;
}, G.walkTokens = function(e, t) {
	return El.walkTokens(e, t);
}, G.parseInline = El.parseInline, G.Parser = wl, G.parser = wl.parse, G.Renderer = Sl, G.TextRenderer = Cl, G.Lexer = xl, G.lexer = xl.lex, G.Tokenizer = bl, G.Hooks = Tl, G.parse = G, G.options, G.setOptions, G.use, G.walkTokens, G.parseInline, wl.parse, xl.lex;
function Dl(e) {
	var t = [...arguments].slice(1), n = Array.from(typeof e == "string" ? [e] : e);
	n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
	var r = n.reduce(function(e, t) {
		var n = t.match(/\n([\t ]+|(?!\s).)/g);
		return n ? e.concat(n.map(function(e) {
			return e.match(/[\t ]/g)?.length ?? 0;
		})) : e;
	}, []);
	if (r.length) {
		var i = RegExp(`
[	 ]{${Math.min.apply(Math, r)}}`, "g");
		n = n.map(function(e) {
			return e.replace(i, "\n");
		});
	}
	n[0] = n[0].replace(/^\r?\n/, "");
	var a = n[0];
	return t.forEach(function(e, t) {
		var r = a.match(/(?:^|\n)( *)$/), i = r ? r[1] : "", o = e;
		typeof e == "string" && e.includes("\n") && (o = String(e).split("\n").map(function(e, t) {
			return t === 0 ? e : `${i}${e}`;
		}).join("\n")), a += o + n[t + 1];
	}), a;
}
var Ol = typeof performance < "u" && typeof performance.now == "function", kl = /* @__PURE__ */ i(() => Ol ? performance.now() : 0, "now"), Al = "🧜 ", jl = "Mermaid render", Ml = "Mermaid", Nl = {
	parse: "tertiary",
	prepare: "secondary",
	measure: "primary",
	layout: "primary-dark",
	layoutCore: "error",
	draw: "primary-light",
	paint: "secondary-dark",
	serialize: "tertiary-dark",
	render: "primary-light"
};
i(class {
	constructor() {
		this.enabled = !1, this.autoPrint = !0, this.records = [], this.maxRecords = 200, this.roots = [], this.stack = [], this.buckets = {};
	}
	enable() {
		return this.enabled = !0, this;
	}
	disable() {
		return this.enabled = !1, this;
	}
	start(e) {
		this.enabled && (this.roots = [], this.stack = [], this.buckets = {}, this.begin(e));
	}
	tickSync(e, t) {
		if (!this.enabled) return t();
		let n = kl();
		try {
			return t();
		} finally {
			this.buckets[e] = (this.buckets[e] ?? 0) + (kl() - n);
		}
	}
	async tick(e, t) {
		if (!this.enabled) return t();
		let n = kl();
		try {
			return await t();
		} finally {
			this.buckets[e] = (this.buckets[e] ?? 0) + (kl() - n);
		}
	}
	stop() {
		if (!this.enabled) return;
		for (; this.stack.length > 0;) this.end();
		let e = this.roots.at(-1), t = this.runLabel ?? e?.name;
		return e && (this.records.push({
			label: t ?? e.name,
			tree: e,
			buckets: { ...this.buckets }
		}), this.records.length > this.maxRecords && this.records.splice(0, this.records.length - this.maxRecords), this.autoPrint && this.printSummary(e, t)), this.runLabel = void 0, e;
	}
	begin(e) {
		if (!this.enabled) return;
		let t = {
			name: e,
			start: kl(),
			duration: -1,
			children: []
		}, n = this.stack.at(-1);
		if (n ? n.children.push(t) : this.roots.push(t), this.stack.push(t), Ol && typeof performance.mark == "function") try {
			performance.mark(`${Al}${e} ▶`);
		} catch {}
	}
	end() {
		if (!this.enabled) return;
		let e = this.stack.pop();
		if (!e) return;
		let t = kl();
		if (e.duration = t - e.start, Ol && typeof performance.measure == "function") try {
			performance.measure(`${Al}${e.name}`, {
				start: e.start,
				end: t,
				detail: { devtools: {
					dataType: "track-entry",
					track: jl,
					trackGroup: Ml,
					color: Nl[e.name] ?? "primary",
					tooltipText: `${e.name} — ${e.duration.toFixed(1)} ms`
				} }
			});
		} catch {}
	}
	async span(e, t) {
		if (!this.enabled) return t();
		this.begin(e);
		try {
			return await t();
		} finally {
			this.end();
		}
	}
	report() {
		return this.records.at(-1)?.tree ?? this.roots.at(-1);
	}
	clear() {
		this.records.length = 0, this.roots = [], this.stack = [], this.runLabel = void 0;
	}
	reset() {
		this.roots = [], this.stack = [];
	}
	printSummary(e = this.report(), t) {
		if (!e) return;
		let n = e.duration, r = t && t !== e.name ? `${e.name} [${t}]` : e.name, a = ["ms        %    phase"], o = /* @__PURE__ */ i((e, t) => {
			let r = "  ".repeat(t), i = e.duration.toFixed(1).padStart(8), s = n > 0 ? `${(e.duration / n * 100).toFixed(0).padStart(3)}%` : "   -";
			a.push(`${i}  ${s}  ${r}${e.name}`);
			for (let n of e.children) o(n, t + 1);
			if (e.children.length > 0) {
				let t = e.children.reduce((e, t) => e + t.duration, 0), n = e.duration - t;
				if (n > .5) {
					let e = n.toFixed(1).padStart(8);
					a.push(`${e}       ${r}  (self)`);
				}
			}
		}, "walk");
		o(e, 0);
		let s = Object.keys(this.buckets);
		if (s.length > 0) {
			a.push("—— buckets (summed) ——");
			for (let e of s) a.push(`${this.buckets[e].toFixed(1).padStart(8)}       ${e}`);
		}
		console.log(`${Al}mermaid render profile · ${r}
${a.join("\n")}`);
	}
}, "Profiler"), globalThis.injected ??= {
	includeLargeFeatures: !0,
	profiling: !1,
	version: "0.0.0"
};
var Pl = Xs.extend({ raf(e) {
	typeof queueMicrotask == "function" ? queueMicrotask(e) : setTimeout(e, 0);
} }).extend(tc);
function Fl(e, { markdownAutoWrap: t }) {
	return Dl(e.replace(/<br\/>/g, "\n").replace(/\n{2,}/g, "\n"));
}
i(Fl, "preprocessMarkdown");
function Il(e) {
	return e.split(/\\n|\n|<br\s*\/?>/gi).map((e) => e.trim().match(/<[^>]+>|[^\s<>]+/g)?.map((e) => ({
		content: e,
		type: "normal"
	})) ?? []);
}
i(Il, "nonMarkdownToLines");
function Ll(e, t = {}) {
	let n = Fl(e, t), r = G.lexer(n), a = [[]], o = 0;
	function s(e, t = "normal") {
		e.type === "text" ? e.text.split("\n").forEach((e, n) => {
			n !== 0 && (o++, a.push([])), e.split(" ").forEach((e) => {
				e = e.replace(/&#39;/g, "'"), e && a[o].push({
					content: e,
					type: t
				});
			});
		}) : e.type === "strong" || e.type === "em" ? e.tokens.forEach((t) => {
			s(t, e.type);
		}) : e.type === "html" && a[o].push({
			content: e.text,
			type: "normal"
		});
	}
	return i(s, "processNode"), r.forEach((e) => {
		e.type === "paragraph" ? e.tokens?.forEach((e) => {
			s(e);
		}) : e.type === "html" ? a[o].push({
			content: e.text,
			type: "normal"
		}) : a[o].push({
			content: e.raw,
			type: "normal"
		});
	}), a;
}
i(Ll, "markdownToLines");
function Rl(e) {
	return e ? `<p>${e.replace(/\\n|\n/g, "<br />")}</p>` : "";
}
i(Rl, "nonMarkdownToHTML");
function zl(e, { markdownAutoWrap: t } = {}) {
	let n = G.lexer(e);
	function r(e) {
		return e.type === "text" ? t === !1 ? e.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;") : e.text.replace(/\n */g, "<br/>") : e.type === "strong" ? `<strong>${e.tokens?.map(r).join("")}</strong>` : e.type === "em" ? `<em>${e.tokens?.map(r).join("")}</em>` : e.type === "paragraph" ? `<p>${e.tokens?.map(r).join("")}</p>` : e.type === "space" ? "" : e.type === "html" ? `${e.text}` : e.type === "escape" ? e.text : (p.warn(`Unsupported markdown: ${e.type}`), e.raw);
	}
	return i(r, "output"), n.map(r).join("");
}
i(zl, "markdownToHTML");
function Bl(e) {
	return Intl.Segmenter ? [...new Intl.Segmenter().segment(e)].map((e) => e.segment) : [...e];
}
i(Bl, "splitTextToChars");
function Vl(e, t) {
	return Hl(e, [], Bl(t.content), t.type);
}
i(Vl, "splitWordToFitWidth");
function Hl(e, t, n, r) {
	if (n.length === 0) return [{
		content: t.join(""),
		type: r
	}, {
		content: "",
		type: r
	}];
	let [i, ...a] = n, o = [...t, i];
	return e([{
		content: o.join(""),
		type: r
	}]) ? Hl(e, o, a, r) : (t.length === 0 && i && (t.push(i), n.shift()), [{
		content: t.join(""),
		type: r
	}, {
		content: n.join(""),
		type: r
	}]);
}
i(Hl, "splitWordToFitWidthRecursion");
function Ul(e, t) {
	if (e.some(({ content: e }) => e.includes("\n"))) throw Error("splitLineToFitWidth does not support newlines in the line");
	return Wl(e, t);
}
i(Ul, "splitLineToFitWidth");
function Wl(e, t, n = [], r = []) {
	if (e.length === 0) return r.length > 0 && n.push(r), n.length > 0 ? n : [];
	let i = "";
	e[0].content === " " && (i = " ", e.shift());
	let a = e.shift() ?? {
		content: " ",
		type: "normal"
	}, o = [...r];
	if (i !== "" && o.push({
		content: i,
		type: "normal"
	}), o.push(a), t(o)) return Wl(e, t, n, o);
	if (r.length > 0) n.push(r), e.unshift(a);
	else if (a.content) {
		let [r, i] = Vl(t, a);
		n.push([r]), i.content && e.unshift(i);
	}
	return Wl(e, t, n);
}
i(Wl, "splitLineToFitWidthRecursion");
function Gl(e, t) {
	t && e.attr("style", t);
}
i(Gl, "applyStyle");
var Kl = 16384;
async function ql(e, t, n, r, i = !1, a = B()) {
	let o = e.append("foreignObject");
	o.attr("width", `${Math.min(10 * n, Kl)}px`), o.attr("height", `${Math.min(10 * n, Kl)}px`);
	let s = o.append("xhtml:div"), c = _r(t.label) ? await br(t.label.replace(xr.lineBreakRegex, "\n"), a) : nr(t.label, a), l = t.isNode ? "nodeLabel" : "edgeLabel", u = s.append("span");
	return u.html(c), Gl(u, t.labelStyle), u.attr("class", `${l} ${r}`), Gl(s, t.labelStyle), s.style("display", "table-cell"), s.style("white-space", "nowrap"), s.style("line-height", "1.5"), n !== Infinity && (s.style("max-width", n + "px"), s.style("text-align", "center")), s.attr("xmlns", "http://www.w3.org/1999/xhtml"), i && s.attr("class", "labelBkg"), (await Pl.measure(() => s.node().getBoundingClientRect())).width === n && (s.style("display", "table"), s.style("white-space", "break-spaces"), s.style("width", n + "px")), o.node();
}
i(ql, "addHtmlSpan");
function Jl(e, t, n, r = !1) {
	let i = e.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", t * n - .1 + "em").attr("dy", n + "em");
	return r && i.attr("text-anchor", "middle"), i;
}
i(Jl, "createTspan");
function Yl(e, t, n) {
	let r = e.append("text"), i = Jl(r, 1, t);
	$l(i, n);
	let a = i.node().getComputedTextLength();
	return r.remove(), a;
}
i(Yl, "computeWidthOfText");
function Xl(e, t, n) {
	let r = e.append("text"), i = Jl(r, 1, t);
	$l(i, [{
		content: n,
		type: "normal"
	}]);
	let a = i.node()?.getBoundingClientRect();
	return a && r.remove(), a;
}
i(Xl, "computeDimensionOfText");
function Zl(e, t, n, r = !1, a = !1) {
	let o = t.append("g"), s = o.insert("rect").attr("class", "background").attr("style", "stroke: none"), c = o.append("text").attr("y", "-10.1");
	a && c.attr("text-anchor", "middle");
	let l = 0;
	for (let t of n) {
		let n = /* @__PURE__ */ i((t) => Yl(o, 1.1, t) <= e, "checkWidth"), r = n(t) ? [t] : Ul(t, n);
		for (let e of r) $l(Jl(c, l, 1.1, a), e), l++;
	}
	if (r) {
		let e = c.node().getBBox();
		return s.attr("x", e.x - 2).attr("y", e.y - 2).attr("width", e.width + 4).attr("height", e.height + 4), o.node();
	}
	return c.node();
}
i(Zl, "createFormattedText");
function Ql(e) {
	return e.replace(/&(amp|lt|gt);/g, (e, t) => {
		switch (t) {
			case "amp": return "&";
			case "lt": return "<";
			case "gt": return ">";
			default: return e;
		}
	});
}
i(Ql, "decodeHTMLEntities");
function $l(e, t) {
	e.text(""), t.forEach((t, n) => {
		let r = e.append("tspan").attr("font-style", t.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", t.type === "strong" ? "bold" : "normal");
		n === 0 ? r.text(Ql(t.content)) : r.text(" " + Ql(t.content));
	});
}
i($l, "updateTextContentAndStyles");
async function eu(e, t = {}) {
	let n = [];
	e.replace(/(fa[bklrs]?):fa-([\w-]+)/g, (e, r, i) => (n.push((async () => {
		let n = `${r}:${i}`;
		return await Za(n) ? await Qa(n, void 0, { class: "label-icon" }) : `<i class='${nr(e, t).replace(":", " ")}'></i>`;
	})()), e));
	let r = await Promise.all(n);
	return e.replace(/(fa[bklrs]?):fa-([\w-]+)/g, () => r.shift() ?? "");
}
i(eu, "replaceIconSubstring");
var tu = /* @__PURE__ */ i(async (e, t = "", { style: r = "", isTitle: i = !1, classes: a = "", useHtmlLabels: o = !0, markdown: s = !0, isNode: c = !0, width: l = 200, addSvgBackground: u = !1 } = {}, d) => {
	if (p.debug("XYZ createText", t, r, i, a, o, c, "addSvgBackground: ", u), o) {
		let n = await eu(Vs(s ? zl(t, d) : Rl(t)), d), i = t.replace(/\\\\/g, "\\");
		return await ql(e, {
			isNode: c,
			label: _r(t) ? i : n,
			labelStyle: r.replace("fill:", "color:")
		}, l, a, u, d);
	}
	{
		let a = Vs(t.replace(/<br\s*\/?>/g, "<br/>")), o = Zl(l, e, s ? Ll(a.replace("<br>", "<br/>"), d) : Il(a), t ? u : !1, !c);
		if (c) {
			/stroke:/.exec(r) && (r = r.replace("stroke:", "lineColor:"));
			let e = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
			n(o).attr("style", e);
		} else {
			let e = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
			n(o).select("rect").attr("style", e.replace(/background:/g, "fill:"));
			let t = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
			n(o).select("text").attr("style", t);
		}
		return i ? n(o).selectAll("tspan.text-outer-tspan").classed("title-row", !0) : n(o).selectAll("tspan.text-outer-tspan").classed("row", !0), o;
	}
}, "createText");
function nu(e, t, n) {
	if (e && e.length) {
		let [r, i] = t, a = Math.PI / 180 * n, o = Math.cos(a), s = Math.sin(a);
		for (let t of e) {
			let [e, n] = t;
			t[0] = (e - r) * o - (n - i) * s + r, t[1] = (e - r) * s + (n - i) * o + i;
		}
	}
}
function ru(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}
function iu(e, t, n, r = 1) {
	let i = n, a = Math.max(t, .1), o = e[0] && e[0][0] && typeof e[0][0] == "number" ? [e] : e, s = [0, 0];
	if (i) for (let e of o) nu(e, s, i);
	let c = function(e, t, n) {
		let r = [];
		for (let t of e) {
			let e = [...t];
			ru(e[0], e[e.length - 1]) || e.push([e[0][0], e[0][1]]), e.length > 2 && r.push(e);
		}
		let i = [];
		t = Math.max(t, .1);
		let a = [];
		for (let e of r) for (let t = 0; t < e.length - 1; t++) {
			let n = e[t], r = e[t + 1];
			if (n[1] !== r[1]) {
				let e = Math.min(n[1], r[1]);
				a.push({
					ymin: e,
					ymax: Math.max(n[1], r[1]),
					x: e === n[1] ? n[0] : r[0],
					islope: (r[0] - n[0]) / (r[1] - n[1])
				});
			}
		}
		if (a.sort((e, t) => e.ymin < t.ymin ? -1 : e.ymin > t.ymin ? 1 : e.x < t.x ? -1 : e.x > t.x ? 1 : e.ymax === t.ymax ? 0 : (e.ymax - t.ymax) / Math.abs(e.ymax - t.ymax)), !a.length) return i;
		let o = [], s = a[0].ymin, c = 0;
		for (; o.length || a.length;) {
			if (a.length) {
				let e = -1;
				for (let t = 0; t < a.length && !(a[t].ymin > s); t++) e = t;
				a.splice(0, e + 1).forEach((e) => {
					o.push({
						s,
						edge: e
					});
				});
			}
			if (o = o.filter((e) => !(e.edge.ymax <= s)), o.sort((e, t) => e.edge.x === t.edge.x ? 0 : (e.edge.x - t.edge.x) / Math.abs(e.edge.x - t.edge.x)), (n !== 1 || c % t == 0) && o.length > 1) for (let e = 0; e < o.length; e += 2) {
				let t = e + 1;
				if (t >= o.length) break;
				let n = o[e].edge, r = o[t].edge;
				i.push([[Math.round(n.x), s], [Math.round(r.x), s]]);
			}
			s += n, o.forEach((e) => {
				e.edge.x = e.edge.x + n * e.edge.islope;
			}), c++;
		}
		return i;
	}(o, a, r);
	if (i) {
		for (let e of o) nu(e, s, -i);
		(function(e, t, n) {
			let r = [];
			e.forEach((e) => r.push(...e)), nu(r, t, n);
		})(c, s, -i);
	}
	return c;
}
function au(e, t) {
	let n = t.hachureAngle + 90, r = t.hachureGap;
	r < 0 && (r = 4 * t.strokeWidth), r = Math.round(Math.max(r, .1));
	let i = 1;
	return t.roughness >= 1 && (t.randomizer?.next() || Math.random()) > .7 && (i = r), iu(e, r, n, i || 1);
}
var ou = class {
	constructor(e) {
		this.helper = e;
	}
	fillPolygons(e, t) {
		return this._fillPolygons(e, t);
	}
	_fillPolygons(e, t) {
		let n = au(e, t);
		return {
			type: "fillSketch",
			ops: this.renderLines(n, t)
		};
	}
	renderLines(e, t) {
		let n = [];
		for (let r of e) n.push(...this.helper.doubleLineOps(r[0][0], r[0][1], r[1][0], r[1][1], t));
		return n;
	}
};
function su(e) {
	let t = e[0], n = e[1];
	return Math.sqrt((t[0] - n[0]) ** 2 + (t[1] - n[1]) ** 2);
}
var cu = class extends ou {
	fillPolygons(e, t) {
		let n = t.hachureGap;
		n < 0 && (n = 4 * t.strokeWidth), n = Math.max(n, .1);
		let r = au(e, Object.assign({}, t, { hachureGap: n })), i = Math.PI / 180 * t.hachureAngle, a = [], o = .5 * n * Math.cos(i), s = .5 * n * Math.sin(i);
		for (let [e, t] of r) su([e, t]) && a.push([[e[0] - o, e[1] + s], [...t]], [[e[0] + o, e[1] - s], [...t]]);
		return {
			type: "fillSketch",
			ops: this.renderLines(a, t)
		};
	}
}, lu = class extends ou {
	fillPolygons(e, t) {
		let n = this._fillPolygons(e, t), r = Object.assign({}, t, { hachureAngle: t.hachureAngle + 90 }), i = this._fillPolygons(e, r);
		return n.ops = n.ops.concat(i.ops), n;
	}
}, uu = class {
	constructor(e) {
		this.helper = e;
	}
	fillPolygons(e, t) {
		let n = au(e, t = Object.assign({}, t, { hachureAngle: 0 }));
		return this.dotsOnLines(n, t);
	}
	dotsOnLines(e, t) {
		let n = [], r = t.hachureGap;
		r < 0 && (r = 4 * t.strokeWidth), r = Math.max(r, .1);
		let i = t.fillWeight;
		i < 0 && (i = t.strokeWidth / 2);
		let a = r / 4;
		for (let o of e) {
			let e = su(o), s = e / r, c = Math.ceil(s) - 1, l = e - c * r, u = (o[0][0] + o[1][0]) / 2 - r / 4, d = Math.min(o[0][1], o[1][1]);
			for (let e = 0; e < c; e++) {
				let o = d + l + e * r, s = u - a + 2 * Math.random() * a, c = o - a + 2 * Math.random() * a, f = this.helper.ellipse(s, c, i, i, t);
				n.push(...f.ops);
			}
		}
		return {
			type: "fillSketch",
			ops: n
		};
	}
}, du = class {
	constructor(e) {
		this.helper = e;
	}
	fillPolygons(e, t) {
		let n = au(e, t);
		return {
			type: "fillSketch",
			ops: this.dashedLine(n, t)
		};
	}
	dashedLine(e, t) {
		let n = t.dashOffset < 0 ? t.hachureGap < 0 ? 4 * t.strokeWidth : t.hachureGap : t.dashOffset, r = t.dashGap < 0 ? t.hachureGap < 0 ? 4 * t.strokeWidth : t.hachureGap : t.dashGap, i = [];
		return e.forEach((e) => {
			let a = su(e), o = Math.floor(a / (n + r)), s = (a + r - o * (n + r)) / 2, c = e[0], l = e[1];
			c[0] > l[0] && (c = e[1], l = e[0]);
			let u = Math.atan((l[1] - c[1]) / (l[0] - c[0]));
			for (let e = 0; e < o; e++) {
				let a = e * (n + r), o = a + n, l = [c[0] + a * Math.cos(u) + s * Math.cos(u), c[1] + a * Math.sin(u) + s * Math.sin(u)], d = [c[0] + o * Math.cos(u) + s * Math.cos(u), c[1] + o * Math.sin(u) + s * Math.sin(u)];
				i.push(...this.helper.doubleLineOps(l[0], l[1], d[0], d[1], t));
			}
		}), i;
	}
}, fu = class {
	constructor(e) {
		this.helper = e;
	}
	fillPolygons(e, t) {
		let n = t.hachureGap < 0 ? 4 * t.strokeWidth : t.hachureGap, r = t.zigzagOffset < 0 ? n : t.zigzagOffset, i = au(e, t = Object.assign({}, t, { hachureGap: n + r }));
		return {
			type: "fillSketch",
			ops: this.zigzagLines(i, r, t)
		};
	}
	zigzagLines(e, t, n) {
		let r = [];
		return e.forEach((e) => {
			let i = su(e), a = Math.round(i / (2 * t)), o = e[0], s = e[1];
			o[0] > s[0] && (o = e[1], s = e[0]);
			let c = Math.atan((s[1] - o[1]) / (s[0] - o[0]));
			for (let e = 0; e < a; e++) {
				let i = 2 * e * t, a = 2 * (e + 1) * t, s = Math.sqrt(2 * t ** 2), l = [o[0] + i * Math.cos(c), o[1] + i * Math.sin(c)], u = [o[0] + a * Math.cos(c), o[1] + a * Math.sin(c)], d = [l[0] + s * Math.cos(c + Math.PI / 4), l[1] + s * Math.sin(c + Math.PI / 4)];
				r.push(...this.helper.doubleLineOps(l[0], l[1], d[0], d[1], n), ...this.helper.doubleLineOps(d[0], d[1], u[0], u[1], n));
			}
		}), r;
	}
}, pu = {}, mu = class {
	constructor(e) {
		this.seed = e;
	}
	next() {
		return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
	}
}, hu = 0, gu = 1, _u = 2, vu = {
	A: 7,
	a: 7,
	C: 6,
	c: 6,
	H: 1,
	h: 1,
	L: 2,
	l: 2,
	M: 2,
	m: 2,
	Q: 4,
	q: 4,
	S: 4,
	s: 4,
	T: 2,
	t: 2,
	V: 1,
	v: 1,
	Z: 0,
	z: 0
};
function yu(e, t) {
	return e.type === t;
}
function bu(e) {
	let t = [], n = function(e) {
		let t = [];
		for (; e !== "";) if (e.match(/^([ \t\r\n,]+)/)) e = e.substr(RegExp.$1.length);
		else if (e.match(/^([aAcChHlLmMqQsStTvVzZ])/)) t[t.length] = {
			type: hu,
			text: RegExp.$1
		}, e = e.substr(RegExp.$1.length);
		else {
			if (!e.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
			t[t.length] = {
				type: gu,
				text: `${parseFloat(RegExp.$1)}`
			}, e = e.substr(RegExp.$1.length);
		}
		return t[t.length] = {
			type: _u,
			text: ""
		}, t;
	}(e), r = "BOD", i = 0, a = n[i];
	for (; !yu(a, _u);) {
		let o = 0, s = [];
		if (r === "BOD") {
			if (a.text !== "M" && a.text !== "m") return bu("M0,0" + e);
			i++, o = vu[a.text], r = a.text;
		} else yu(a, gu) ? o = vu[r] : (i++, o = vu[a.text], r = a.text);
		if (!(i + o < n.length)) throw Error("Path data ended short");
		for (let e = i; e < i + o; e++) {
			let t = n[e];
			if (!yu(t, gu)) throw Error("Param not a number: " + r + "," + t.text);
			s[s.length] = +t.text;
		}
		if (typeof vu[r] != "number") throw Error("Bad segment: " + r);
		{
			let e = {
				key: r,
				data: s
			};
			t.push(e), i += o, a = n[i], r === "M" && (r = "L"), r === "m" && (r = "l");
		}
	}
	return t;
}
function xu(e) {
	let t = 0, n = 0, r = 0, i = 0, a = [];
	for (let { key: o, data: s } of e) switch (o) {
		case "M":
			a.push({
				key: "M",
				data: [...s]
			}), [t, n] = s, [r, i] = s;
			break;
		case "m":
			t += s[0], n += s[1], a.push({
				key: "M",
				data: [t, n]
			}), r = t, i = n;
			break;
		case "L":
			a.push({
				key: "L",
				data: [...s]
			}), [t, n] = s;
			break;
		case "l":
			t += s[0], n += s[1], a.push({
				key: "L",
				data: [t, n]
			});
			break;
		case "C":
			a.push({
				key: "C",
				data: [...s]
			}), t = s[4], n = s[5];
			break;
		case "c": {
			let e = s.map((e, r) => r % 2 ? e + n : e + t);
			a.push({
				key: "C",
				data: e
			}), t = e[4], n = e[5];
			break;
		}
		case "Q":
			a.push({
				key: "Q",
				data: [...s]
			}), t = s[2], n = s[3];
			break;
		case "q": {
			let e = s.map((e, r) => r % 2 ? e + n : e + t);
			a.push({
				key: "Q",
				data: e
			}), t = e[2], n = e[3];
			break;
		}
		case "A":
			a.push({
				key: "A",
				data: [...s]
			}), t = s[5], n = s[6];
			break;
		case "a":
			t += s[5], n += s[6], a.push({
				key: "A",
				data: [
					s[0],
					s[1],
					s[2],
					s[3],
					s[4],
					t,
					n
				]
			});
			break;
		case "H":
			a.push({
				key: "H",
				data: [...s]
			}), t = s[0];
			break;
		case "h":
			t += s[0], a.push({
				key: "H",
				data: [t]
			});
			break;
		case "V":
			a.push({
				key: "V",
				data: [...s]
			}), n = s[0];
			break;
		case "v":
			n += s[0], a.push({
				key: "V",
				data: [n]
			});
			break;
		case "S":
			a.push({
				key: "S",
				data: [...s]
			}), t = s[2], n = s[3];
			break;
		case "s": {
			let e = s.map((e, r) => r % 2 ? e + n : e + t);
			a.push({
				key: "S",
				data: e
			}), t = e[2], n = e[3];
			break;
		}
		case "T":
			a.push({
				key: "T",
				data: [...s]
			}), t = s[0], n = s[1];
			break;
		case "t":
			t += s[0], n += s[1], a.push({
				key: "T",
				data: [t, n]
			});
			break;
		case "Z":
		case "z": a.push({
			key: "Z",
			data: []
		}), t = r, n = i;
	}
	return a;
}
function Su(e) {
	let t = [], n = "", r = 0, i = 0, a = 0, o = 0, s = 0, c = 0;
	for (let { key: l, data: u } of e) {
		switch (l) {
			case "M":
				t.push({
					key: "M",
					data: [...u]
				}), [r, i] = u, [a, o] = u;
				break;
			case "C":
				t.push({
					key: "C",
					data: [...u]
				}), r = u[4], i = u[5], s = u[2], c = u[3];
				break;
			case "L":
				t.push({
					key: "L",
					data: [...u]
				}), [r, i] = u;
				break;
			case "H":
				r = u[0], t.push({
					key: "L",
					data: [r, i]
				});
				break;
			case "V":
				i = u[0], t.push({
					key: "L",
					data: [r, i]
				});
				break;
			case "S": {
				let e = 0, a = 0;
				n === "C" || n === "S" ? (e = r + (r - s), a = i + (i - c)) : (e = r, a = i), t.push({
					key: "C",
					data: [
						e,
						a,
						...u
					]
				}), s = u[0], c = u[1], r = u[2], i = u[3];
				break;
			}
			case "T": {
				let [e, a] = u, o = 0, l = 0;
				n === "Q" || n === "T" ? (o = r + (r - s), l = i + (i - c)) : (o = r, l = i);
				let d = r + 2 * (o - r) / 3, f = i + 2 * (l - i) / 3, p = e + 2 * (o - e) / 3, m = a + 2 * (l - a) / 3;
				t.push({
					key: "C",
					data: [
						d,
						f,
						p,
						m,
						e,
						a
					]
				}), s = o, c = l, r = e, i = a;
				break;
			}
			case "Q": {
				let [e, n, a, o] = u, l = r + 2 * (e - r) / 3, d = i + 2 * (n - i) / 3, f = a + 2 * (e - a) / 3, p = o + 2 * (n - o) / 3;
				t.push({
					key: "C",
					data: [
						l,
						d,
						f,
						p,
						a,
						o
					]
				}), s = e, c = n, r = a, i = o;
				break;
			}
			case "A": {
				let e = Math.abs(u[0]), n = Math.abs(u[1]), a = u[2], o = u[3], s = u[4], c = u[5], l = u[6];
				e === 0 || n === 0 ? (t.push({
					key: "C",
					data: [
						r,
						i,
						c,
						l,
						c,
						l
					]
				}), r = c, i = l) : (r !== c || i !== l) && (wu(r, i, c, l, e, n, a, o, s).forEach(function(e) {
					t.push({
						key: "C",
						data: e
					});
				}), r = c, i = l);
				break;
			}
			case "Z": t.push({
				key: "Z",
				data: []
			}), r = a, i = o;
		}
		n = l;
	}
	return t;
}
function Cu(e, t, n) {
	return [e * Math.cos(n) - t * Math.sin(n), e * Math.sin(n) + t * Math.cos(n)];
}
function wu(e, t, n, r, i, a, o, s, c, l) {
	let u = (d = o, Math.PI * d / 180);
	var d;
	let f = [], p = 0, m = 0, h = 0, g = 0;
	if (l) [p, m, h, g] = l;
	else {
		[e, t] = Cu(e, t, -u), [n, r] = Cu(n, r, -u);
		let o = (e - n) / 2, l = (t - r) / 2, d = o * o / (i * i) + l * l / (a * a);
		d > 1 && (d = Math.sqrt(d), i *= d, a *= d);
		let f = i * i, _ = a * a, v = f * _ - f * l * l - _ * o * o, y = f * l * l + _ * o * o, b = (s === c ? -1 : 1) * Math.sqrt(Math.abs(v / y));
		h = b * i * l / a + (e + n) / 2, g = b * -a * o / i + (t + r) / 2, p = Math.asin(parseFloat(((t - g) / a).toFixed(9))), m = Math.asin(parseFloat(((r - g) / a).toFixed(9))), e < h && (p = Math.PI - p), n < h && (m = Math.PI - m), p < 0 && (p = 2 * Math.PI + p), m < 0 && (m = 2 * Math.PI + m), c && p > m && (p -= 2 * Math.PI), !c && m > p && (m -= 2 * Math.PI);
	}
	let _ = m - p;
	if (Math.abs(_) > 120 * Math.PI / 180) {
		let e = m, t = n, s = r;
		m = c && m > p ? p + 120 * Math.PI / 180 * 1 : p + 120 * Math.PI / 180 * -1, f = wu(n = h + i * Math.cos(m), r = g + a * Math.sin(m), t, s, i, a, o, 0, c, [
			m,
			e,
			h,
			g
		]);
	}
	_ = m - p;
	let v = Math.cos(p), y = Math.sin(p), b = Math.cos(m), x = Math.sin(m), S = Math.tan(_ / 4), C = 4 / 3 * i * S, w = 4 / 3 * a * S, T = [e, t], E = [e + C * y, t - w * v], D = [n + C * x, r - w * b], O = [n, r];
	if (E[0] = 2 * T[0] - E[0], E[1] = 2 * T[1] - E[1], l) return [
		E,
		D,
		O
	].concat(f);
	{
		f = [
			E,
			D,
			O
		].concat(f);
		let e = [];
		for (let t = 0; t < f.length; t += 3) {
			let n = Cu(f[t][0], f[t][1], u), r = Cu(f[t + 1][0], f[t + 1][1], u), i = Cu(f[t + 2][0], f[t + 2][1], u);
			e.push([
				n[0],
				n[1],
				r[0],
				r[1],
				i[0],
				i[1]
			]);
		}
		return e;
	}
}
var Tu = {
	randOffset: function(e, t) {
		return K(e, t);
	},
	randOffsetWithRange: function(e, t, n) {
		return Ru(e, t, n);
	},
	ellipse: function(e, t, n, r, i) {
		return ju(e, t, i, Au(n, r, i)).opset;
	},
	doubleLineOps: function(e, t, n, r, i) {
		return zu(e, t, n, r, i, !0);
	}
};
function Eu(e, t, n, r, i) {
	return {
		type: "path",
		ops: zu(e, t, n, r, i)
	};
}
function Du(e, t, n) {
	let r = (e || []).length;
	if (r > 2) {
		let i = [];
		for (let t = 0; t < r - 1; t++) i.push(...zu(e[t][0], e[t][1], e[t + 1][0], e[t + 1][1], n));
		return t && i.push(...zu(e[r - 1][0], e[r - 1][1], e[0][0], e[0][1], n)), {
			type: "path",
			ops: i
		};
	}
	return r === 2 ? Eu(e[0][0], e[0][1], e[1][0], e[1][1], n) : {
		type: "path",
		ops: []
	};
}
function Ou(e, t, n, r, i) {
	return function(e, t) {
		return Du(e, !0, t);
	}([
		[e, t],
		[e + n, t],
		[e + n, t + r],
		[e, t + r]
	], i);
}
function ku(e, t) {
	if (e.length) {
		let n = typeof e[0][0] == "number" ? [e] : e, r = Vu(n[0], 1 * (1 + .2 * t.roughness), t), i = t.disableMultiStroke ? [] : Vu(n[0], 1.5 * (1 + .22 * t.roughness), Iu(t));
		for (let e = 1; e < n.length; e++) {
			let a = n[e];
			if (a.length) {
				let e = Vu(a, 1 * (1 + .2 * t.roughness), t), n = t.disableMultiStroke ? [] : Vu(a, 1.5 * (1 + .22 * t.roughness), Iu(t));
				for (let t of e) t.op !== "move" && r.push(t);
				for (let e of n) e.op !== "move" && i.push(e);
			}
		}
		return {
			type: "path",
			ops: r.concat(i)
		};
	}
	return {
		type: "path",
		ops: []
	};
}
function Au(e, t, n) {
	let r = Math.sqrt(2 * Math.PI * Math.sqrt(((e / 2) ** 2 + (t / 2) ** 2) / 2)), i = Math.ceil(Math.max(n.curveStepCount, n.curveStepCount / Math.sqrt(200) * r)), a = 2 * Math.PI / i, o = Math.abs(e / 2), s = Math.abs(t / 2), c = 1 - n.curveFitting;
	return o += K(o * c, n), s += K(s * c, n), {
		increment: a,
		rx: o,
		ry: s
	};
}
function ju(e, t, n, r) {
	let [i, a] = Uu(r.increment, e, t, r.rx, r.ry, 1, r.increment * Ru(.1, Ru(.4, 1, n), n), n), o = Hu(i, null, n);
	if (!n.disableMultiStroke && n.roughness !== 0) {
		let [i] = Uu(r.increment, e, t, r.rx, r.ry, 1.5, 0, n), a = Hu(i, null, n);
		o = o.concat(a);
	}
	return {
		estimatedPoints: a,
		opset: {
			type: "path",
			ops: o
		}
	};
}
function Mu(e, t, n, r, i, a, o, s, c) {
	let l = e, u = t, d = Math.abs(n / 2), f = Math.abs(r / 2);
	d += K(.01 * d, c), f += K(.01 * f, c);
	let p = i, m = a;
	for (; p < 0;) p += 2 * Math.PI, m += 2 * Math.PI;
	m - p > 2 * Math.PI && (p = 0, m = 2 * Math.PI);
	let h = 2 * Math.PI / c.curveStepCount, g = Math.min(h / 2, (m - p) / 2), _ = Wu(g, l, u, d, f, p, m, 1, c);
	if (!c.disableMultiStroke) {
		let e = Wu(g, l, u, d, f, p, m, 1.5, c);
		_.push(...e);
	}
	return o && (s ? _.push(...zu(l, u, l + d * Math.cos(p), u + f * Math.sin(p), c), ...zu(l, u, l + d * Math.cos(m), u + f * Math.sin(m), c)) : _.push({
		op: "lineTo",
		data: [l, u]
	}, {
		op: "lineTo",
		data: [l + d * Math.cos(p), u + f * Math.sin(p)]
	})), {
		type: "path",
		ops: _
	};
}
function Nu(e, t) {
	let n = Su(xu(bu(e))), r = [], i = [0, 0], a = [0, 0];
	for (let { key: e, data: o } of n) switch (e) {
		case "M":
			a = [o[0], o[1]], i = [o[0], o[1]];
			break;
		case "L":
			r.push(...zu(a[0], a[1], o[0], o[1], t)), a = [o[0], o[1]];
			break;
		case "C": {
			let [e, n, i, s, c, l] = o;
			r.push(...Gu(e, n, i, s, c, l, a, t)), a = [c, l];
			break;
		}
		case "Z": r.push(...zu(a[0], a[1], i[0], i[1], t)), a = [i[0], i[1]];
	}
	return {
		type: "path",
		ops: r
	};
}
function Pu(e, t) {
	let n = [];
	for (let r of e) if (r.length) {
		let e = t.maxRandomnessOffset || 0, i = r.length;
		if (i > 2) {
			n.push({
				op: "move",
				data: [r[0][0] + K(e, t), r[0][1] + K(e, t)]
			});
			for (let a = 1; a < i; a++) n.push({
				op: "lineTo",
				data: [r[a][0] + K(e, t), r[a][1] + K(e, t)]
			});
		}
	}
	return {
		type: "fillPath",
		ops: n
	};
}
function Fu(e, t) {
	return function(e, t) {
		let n = e.fillStyle || "hachure";
		if (!pu[n]) switch (n) {
			case "zigzag":
				pu[n] || (pu[n] = new cu(t));
				break;
			case "cross-hatch":
				pu[n] || (pu[n] = new lu(t));
				break;
			case "dots":
				pu[n] || (pu[n] = new uu(t));
				break;
			case "dashed":
				pu[n] || (pu[n] = new du(t));
				break;
			case "zigzag-line":
				pu[n] || (pu[n] = new fu(t));
				break;
			default: n = "hachure", pu[n] || (pu[n] = new ou(t));
		}
		return pu[n];
	}(t, Tu).fillPolygons(e, t);
}
function Iu(e) {
	let t = Object.assign({}, e);
	return t.randomizer = void 0, e.seed && (t.seed = e.seed + 1), t;
}
function Lu(e) {
	return e.randomizer ||= new mu(e.seed || 0), e.randomizer.next();
}
function Ru(e, t, n, r = 1) {
	return n.roughness * r * (Lu(n) * (t - e) + e);
}
function K(e, t, n = 1) {
	return Ru(-e, e, t, n);
}
function zu(e, t, n, r, i, a = !1) {
	let o = a ? i.disableMultiStrokeFill : i.disableMultiStroke, s = Bu(e, t, n, r, i, !0, !1);
	if (o) return s;
	let c = Bu(e, t, n, r, i, !0, !0);
	return s.concat(c);
}
function Bu(e, t, n, r, i, a, o) {
	let s = (e - n) ** 2 + (t - r) ** 2, c = Math.sqrt(s), l = 1;
	l = c < 200 ? 1 : c > 500 ? .4 : -.0016668 * c + 1.233334;
	let u = i.maxRandomnessOffset || 0;
	u * u * 100 > s && (u = c / 10);
	let d = u / 2, f = .2 + .2 * Lu(i), p = i.bowing * i.maxRandomnessOffset * (r - t) / 200, m = i.bowing * i.maxRandomnessOffset * (e - n) / 200;
	p = K(p, i, l), m = K(m, i, l);
	let h = [], g = () => K(d, i, l), _ = () => K(u, i, l), v = i.preserveVertices;
	return o ? h.push({
		op: "move",
		data: [e + (v ? 0 : g()), t + (v ? 0 : g())]
	}) : h.push({
		op: "move",
		data: [e + (v ? 0 : K(u, i, l)), t + (v ? 0 : K(u, i, l))]
	}), o ? h.push({
		op: "bcurveTo",
		data: [
			p + e + (n - e) * f + g(),
			m + t + (r - t) * f + g(),
			p + e + 2 * (n - e) * f + g(),
			m + t + 2 * (r - t) * f + g(),
			n + (v ? 0 : g()),
			r + (v ? 0 : g())
		]
	}) : h.push({
		op: "bcurveTo",
		data: [
			p + e + (n - e) * f + _(),
			m + t + (r - t) * f + _(),
			p + e + 2 * (n - e) * f + _(),
			m + t + 2 * (r - t) * f + _(),
			n + (v ? 0 : _()),
			r + (v ? 0 : _())
		]
	}), h;
}
function Vu(e, t, n) {
	if (!e.length) return [];
	let r = [];
	r.push([e[0][0] + K(t, n), e[0][1] + K(t, n)]), r.push([e[0][0] + K(t, n), e[0][1] + K(t, n)]);
	for (let i = 1; i < e.length; i++) r.push([e[i][0] + K(t, n), e[i][1] + K(t, n)]), i === e.length - 1 && r.push([e[i][0] + K(t, n), e[i][1] + K(t, n)]);
	return Hu(r, null, n);
}
function Hu(e, t, n) {
	let r = e.length, i = [];
	if (r > 3) {
		let t = [], a = 1 - n.curveTightness;
		i.push({
			op: "move",
			data: [e[1][0], e[1][1]]
		});
		for (let n = 1; n + 2 < r; n++) {
			let r = e[n];
			t[0] = [r[0], r[1]], t[1] = [r[0] + (a * e[n + 1][0] - a * e[n - 1][0]) / 6, r[1] + (a * e[n + 1][1] - a * e[n - 1][1]) / 6], t[2] = [e[n + 1][0] + (a * e[n][0] - a * e[n + 2][0]) / 6, e[n + 1][1] + (a * e[n][1] - a * e[n + 2][1]) / 6], t[3] = [e[n + 1][0], e[n + 1][1]], i.push({
				op: "bcurveTo",
				data: [
					t[1][0],
					t[1][1],
					t[2][0],
					t[2][1],
					t[3][0],
					t[3][1]
				]
			});
		}
	} else r === 3 ? (i.push({
		op: "move",
		data: [e[1][0], e[1][1]]
	}), i.push({
		op: "bcurveTo",
		data: [
			e[1][0],
			e[1][1],
			e[2][0],
			e[2][1],
			e[2][0],
			e[2][1]
		]
	})) : r === 2 && i.push(...Bu(e[0][0], e[0][1], e[1][0], e[1][1], n, !0, !0));
	return i;
}
function Uu(e, t, n, r, i, a, o, s) {
	let c = [], l = [];
	if (s.roughness === 0) {
		e /= 4, l.push([t + r * Math.cos(-e), n + i * Math.sin(-e)]);
		for (let a = 0; a <= 2 * Math.PI; a += e) {
			let e = [t + r * Math.cos(a), n + i * Math.sin(a)];
			c.push(e), l.push(e);
		}
		l.push([t + r * Math.cos(0), n + i * Math.sin(0)]), l.push([t + r * Math.cos(e), n + i * Math.sin(e)]);
	} else {
		let u = K(.5, s) - Math.PI / 2;
		l.push([K(a, s) + t + .9 * r * Math.cos(u - e), K(a, s) + n + .9 * i * Math.sin(u - e)]);
		let d = 2 * Math.PI + u - .01;
		for (let o = u; o < d; o += e) {
			let e = [K(a, s) + t + r * Math.cos(o), K(a, s) + n + i * Math.sin(o)];
			c.push(e), l.push(e);
		}
		l.push([K(a, s) + t + r * Math.cos(u + 2 * Math.PI + .5 * o), K(a, s) + n + i * Math.sin(u + 2 * Math.PI + .5 * o)]), l.push([K(a, s) + t + .98 * r * Math.cos(u + o), K(a, s) + n + .98 * i * Math.sin(u + o)]), l.push([K(a, s) + t + .9 * r * Math.cos(u + .5 * o), K(a, s) + n + .9 * i * Math.sin(u + .5 * o)]);
	}
	return [l, c];
}
function Wu(e, t, n, r, i, a, o, s, c) {
	let l = a + K(.1, c), u = [];
	u.push([K(s, c) + t + .9 * r * Math.cos(l - e), K(s, c) + n + .9 * i * Math.sin(l - e)]);
	for (let a = l; a <= o; a += e) u.push([K(s, c) + t + r * Math.cos(a), K(s, c) + n + i * Math.sin(a)]);
	return u.push([t + r * Math.cos(o), n + i * Math.sin(o)]), u.push([t + r * Math.cos(o), n + i * Math.sin(o)]), Hu(u, null, c);
}
function Gu(e, t, n, r, i, a, o, s) {
	let c = [], l = [s.maxRandomnessOffset || 1, (s.maxRandomnessOffset || 1) + .3], u = [0, 0], d = s.disableMultiStroke ? 1 : 2, f = s.preserveVertices;
	for (let p = 0; p < d; p++) p === 0 ? c.push({
		op: "move",
		data: [o[0], o[1]]
	}) : c.push({
		op: "move",
		data: [o[0] + (f ? 0 : K(l[0], s)), o[1] + (f ? 0 : K(l[0], s))]
	}), u = f ? [i, a] : [i + K(l[p], s), a + K(l[p], s)], c.push({
		op: "bcurveTo",
		data: [
			e + K(l[p], s),
			t + K(l[p], s),
			n + K(l[p], s),
			r + K(l[p], s),
			u[0],
			u[1]
		]
	});
	return c;
}
function Ku(e) {
	return [...e];
}
function qu(e, t = 0) {
	let n = e.length;
	if (n < 3) throw Error("A curve must have at least three points.");
	let r = [];
	if (n === 3) r.push(Ku(e[0]), Ku(e[1]), Ku(e[2]), Ku(e[2]));
	else {
		let n = [];
		n.push(e[0], e[0]);
		for (let t = 1; t < e.length; t++) n.push(e[t]), t === e.length - 1 && n.push(e[t]);
		let i = [], a = 1 - t;
		r.push(Ku(n[0]));
		for (let e = 1; e + 2 < n.length; e++) {
			let t = n[e];
			i[0] = [t[0], t[1]], i[1] = [t[0] + (a * n[e + 1][0] - a * n[e - 1][0]) / 6, t[1] + (a * n[e + 1][1] - a * n[e - 1][1]) / 6], i[2] = [n[e + 1][0] + (a * n[e][0] - a * n[e + 2][0]) / 6, n[e + 1][1] + (a * n[e][1] - a * n[e + 2][1]) / 6], i[3] = [n[e + 1][0], n[e + 1][1]], r.push(i[1], i[2], i[3]);
		}
	}
	return r;
}
function Ju(e, t) {
	return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2;
}
function Yu(e, t, n) {
	let r = Ju(t, n);
	if (r === 0) return Ju(e, t);
	let i = ((e[0] - t[0]) * (n[0] - t[0]) + (e[1] - t[1]) * (n[1] - t[1])) / r;
	return i = Math.max(0, Math.min(1, i)), Ju(e, Xu(t, n, i));
}
function Xu(e, t, n) {
	return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n];
}
function Zu(e, t, n, r) {
	let i = r || [];
	if (function(e, t) {
		let n = e[t + 0], r = e[t + 1], i = e[t + 2], a = e[t + 3], o = 3 * r[0] - 2 * n[0] - a[0];
		o *= o;
		let s = 3 * r[1] - 2 * n[1] - a[1];
		s *= s;
		let c = 3 * i[0] - 2 * a[0] - n[0];
		c *= c;
		let l = 3 * i[1] - 2 * a[1] - n[1];
		return l *= l, o < c && (o = c), s < l && (s = l), o + s;
	}(e, t) < n) {
		let n = e[t + 0];
		i.length ? (a = i[i.length - 1], o = n, Math.sqrt(Ju(a, o)) > 1 && i.push(n)) : i.push(n), i.push(e[t + 3]);
	} else {
		let r = e[t + 0], a = e[t + 1], o = e[t + 2], s = e[t + 3], c = Xu(r, a, .5), l = Xu(a, o, .5), u = Xu(o, s, .5), d = Xu(c, l, .5), f = Xu(l, u, .5), p = Xu(d, f, .5);
		Zu([
			r,
			c,
			d,
			p
		], 0, n, i), Zu([
			p,
			f,
			u,
			s
		], 0, n, i);
	}
	var a, o;
	return i;
}
function Qu(e, t) {
	return $u(e, 0, e.length, t);
}
function $u(e, t, n, r, i) {
	let a = i || [], o = e[t], s = e[n - 1], c = 0, l = 1;
	for (let r = t + 1; r < n - 1; ++r) {
		let t = Yu(e[r], o, s);
		t > c && (c = t, l = r);
	}
	return Math.sqrt(c) > r ? ($u(e, t, l + 1, r, a), $u(e, l, n, r, a)) : (a.length || a.push(o), a.push(s)), a;
}
function ed(e, t = .15, n) {
	let r = [], i = (e.length - 1) / 3;
	for (let n = 0; n < i; n++) Zu(e, 3 * n, t, r);
	return n && n > 0 ? $u(r, 0, r.length, n) : r;
}
var td = "none", nd = class {
	constructor(e) {
		this.defaultOptions = {
			maxRandomnessOffset: 2,
			roughness: 1,
			bowing: 1,
			stroke: "#000",
			strokeWidth: 1,
			curveTightness: 0,
			curveFitting: .95,
			curveStepCount: 9,
			fillStyle: "hachure",
			fillWeight: -1,
			hachureAngle: -41,
			hachureGap: -1,
			dashOffset: -1,
			dashGap: -1,
			zigzagOffset: -1,
			seed: 0,
			disableMultiStroke: !1,
			disableMultiStrokeFill: !1,
			preserveVertices: !1,
			fillShapeRoughnessGain: .8
		}, this.config = e || {}, this.config.options && (this.defaultOptions = this._o(this.config.options));
	}
	static newSeed() {
		return Math.floor(Math.random() * 2 ** 31);
	}
	_o(e) {
		return e ? Object.assign({}, this.defaultOptions, e) : this.defaultOptions;
	}
	_d(e, t, n) {
		return {
			shape: e,
			sets: t || [],
			options: n || this.defaultOptions
		};
	}
	line(e, t, n, r, i) {
		let a = this._o(i);
		return this._d("line", [Eu(e, t, n, r, a)], a);
	}
	rectangle(e, t, n, r, i) {
		let a = this._o(i), o = [], s = Ou(e, t, n, r, a);
		if (a.fill) {
			let i = [
				[e, t],
				[e + n, t],
				[e + n, t + r],
				[e, t + r]
			];
			a.fillStyle === "solid" ? o.push(Pu([i], a)) : o.push(Fu([i], a));
		}
		return a.stroke !== td && o.push(s), this._d("rectangle", o, a);
	}
	ellipse(e, t, n, r, i) {
		let a = this._o(i), o = [], s = Au(n, r, a), c = ju(e, t, a, s);
		if (a.fill) {
			if (a.fillStyle === "solid") {
				let n = ju(e, t, a, s).opset;
				n.type = "fillPath", o.push(n);
			} else o.push(Fu([c.estimatedPoints], a));
		}
		return a.stroke !== td && o.push(c.opset), this._d("ellipse", o, a);
	}
	circle(e, t, n, r) {
		let i = this.ellipse(e, t, n, n, r);
		return i.shape = "circle", i;
	}
	linearPath(e, t) {
		let n = this._o(t);
		return this._d("linearPath", [Du(e, !1, n)], n);
	}
	arc(e, t, n, r, i, a, o = !1, s) {
		let c = this._o(s), l = [], u = Mu(e, t, n, r, i, a, o, !0, c);
		if (o && c.fill) {
			if (c.fillStyle === "solid") {
				let o = Object.assign({}, c);
				o.disableMultiStroke = !0;
				let s = Mu(e, t, n, r, i, a, !0, !1, o);
				s.type = "fillPath", l.push(s);
			} else l.push(function(e, t, n, r, i, a, o) {
				let s = e, c = t, l = Math.abs(n / 2), u = Math.abs(r / 2);
				l += K(.01 * l, o), u += K(.01 * u, o);
				let d = i, f = a;
				for (; d < 0;) d += 2 * Math.PI, f += 2 * Math.PI;
				f - d > 2 * Math.PI && (d = 0, f = 2 * Math.PI);
				let p = (f - d) / o.curveStepCount, m = [];
				for (let e = d; e <= f; e += p) m.push([s + l * Math.cos(e), c + u * Math.sin(e)]);
				return m.push([s + l * Math.cos(f), c + u * Math.sin(f)]), m.push([s, c]), Fu([m], o);
			}(e, t, n, r, i, a, c));
		}
		return c.stroke !== td && l.push(u), this._d("arc", l, c);
	}
	curve(e, t) {
		let n = this._o(t), r = [], i = ku(e, n);
		if (n.fill && n.fill !== td) {
			if (n.fillStyle === "solid") {
				let t = ku(e, Object.assign(Object.assign({}, n), {
					disableMultiStroke: !0,
					roughness: n.roughness ? n.roughness + n.fillShapeRoughnessGain : 0
				}));
				r.push({
					type: "fillPath",
					ops: this._mergedShape(t.ops)
				});
			} else {
				let t = [], i = e;
				if (i.length) {
					let e = typeof i[0][0] == "number" ? [i] : i;
					for (let r of e) r.length < 3 ? t.push(...r) : r.length === 3 ? t.push(...ed(qu([
						r[0],
						r[0],
						r[1],
						r[2]
					]), 10, (1 + n.roughness) / 2)) : t.push(...ed(qu(r), 10, (1 + n.roughness) / 2));
				}
				t.length && r.push(Fu([t], n));
			}
		}
		return n.stroke !== td && r.push(i), this._d("curve", r, n);
	}
	polygon(e, t) {
		let n = this._o(t), r = [], i = Du(e, !0, n);
		return n.fill && (n.fillStyle === "solid" ? r.push(Pu([e], n)) : r.push(Fu([e], n))), n.stroke !== td && r.push(i), this._d("polygon", r, n);
	}
	path(e, t) {
		let n = this._o(t), r = [];
		if (!e) return this._d("path", r, n);
		e = (e || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
		let i = n.fill && n.fill !== "transparent" && n.fill !== td, a = n.stroke !== td, o = !!(n.simplification && n.simplification < 1), s = function(e, t, n) {
			let r = Su(xu(bu(e))), i = [], a = [], o = [0, 0], s = [], c = () => {
				s.length >= 4 && a.push(...ed(s, t)), s = [];
			}, l = () => {
				c(), a.length && (i.push(a), a = []);
			};
			for (let { key: e, data: t } of r) switch (e) {
				case "M":
					l(), o = [t[0], t[1]], a.push(o);
					break;
				case "L":
					c(), a.push([t[0], t[1]]);
					break;
				case "C":
					if (!s.length) {
						let e = a.length ? a[a.length - 1] : o;
						s.push([e[0], e[1]]);
					}
					s.push([t[0], t[1]]), s.push([t[2], t[3]]), s.push([t[4], t[5]]);
					break;
				case "Z": c(), a.push([o[0], o[1]]);
			}
			if (l(), !n) return i;
			let u = [];
			for (let e of i) {
				let t = Qu(e, n);
				t.length && u.push(t);
			}
			return u;
		}(e, 1, o ? 4 - 4 * (n.simplification || 1) : (1 + n.roughness) / 2), c = Nu(e, n);
		if (i) {
			if (n.fillStyle === "solid") {
				if (s.length === 1) {
					let t = Nu(e, Object.assign(Object.assign({}, n), {
						disableMultiStroke: !0,
						roughness: n.roughness ? n.roughness + n.fillShapeRoughnessGain : 0
					}));
					r.push({
						type: "fillPath",
						ops: this._mergedShape(t.ops)
					});
				} else r.push(Pu(s, n));
			} else r.push(Fu(s, n));
		}
		return a && (o ? s.forEach((e) => {
			r.push(Du(e, !1, n));
		}) : r.push(c)), this._d("path", r, n);
	}
	opsToPath(e, t) {
		let n = "";
		for (let r of e.ops) {
			let e = typeof t == "number" && t >= 0 ? r.data.map((e) => +e.toFixed(t)) : r.data;
			switch (r.op) {
				case "move":
					n += `M${e[0]} ${e[1]} `;
					break;
				case "bcurveTo":
					n += `C${e[0]} ${e[1]}, ${e[2]} ${e[3]}, ${e[4]} ${e[5]} `;
					break;
				case "lineTo": n += `L${e[0]} ${e[1]} `;
			}
		}
		return n.trim();
	}
	toPaths(e) {
		let t = e.sets || [], n = e.options || this.defaultOptions, r = [];
		for (let e of t) {
			let t = null;
			switch (e.type) {
				case "path":
					t = {
						d: this.opsToPath(e),
						stroke: n.stroke,
						strokeWidth: n.strokeWidth,
						fill: td
					};
					break;
				case "fillPath":
					t = {
						d: this.opsToPath(e),
						stroke: td,
						strokeWidth: 0,
						fill: n.fill || td
					};
					break;
				case "fillSketch": t = this.fillSketch(e, n);
			}
			t && r.push(t);
		}
		return r;
	}
	fillSketch(e, t) {
		let n = t.fillWeight;
		return n < 0 && (n = t.strokeWidth / 2), {
			d: this.opsToPath(e),
			stroke: t.fill || td,
			strokeWidth: n,
			fill: td
		};
	}
	_mergedShape(e) {
		return e.filter((e, t) => t === 0 || e.op !== "move");
	}
}, rd = class {
	constructor(e, t) {
		this.canvas = e, this.ctx = this.canvas.getContext("2d"), this.gen = new nd(t);
	}
	draw(e) {
		let t = e.sets || [], n = e.options || this.getDefaultOptions(), r = this.ctx, i = e.options.fixedDecimalPlaceDigits;
		for (let a of t) switch (a.type) {
			case "path":
				r.save(), r.strokeStyle = n.stroke === "none" ? "transparent" : n.stroke, r.lineWidth = n.strokeWidth, n.strokeLineDash && r.setLineDash(n.strokeLineDash), n.strokeLineDashOffset && (r.lineDashOffset = n.strokeLineDashOffset), this._drawToContext(r, a, i), r.restore();
				break;
			case "fillPath": {
				r.save(), r.fillStyle = n.fill || "";
				let t = e.shape === "curve" || e.shape === "polygon" || e.shape === "path" ? "evenodd" : "nonzero";
				this._drawToContext(r, a, i, t), r.restore();
				break;
			}
			case "fillSketch": this.fillSketch(r, a, n);
		}
	}
	fillSketch(e, t, n) {
		let r = n.fillWeight;
		r < 0 && (r = n.strokeWidth / 2), e.save(), n.fillLineDash && e.setLineDash(n.fillLineDash), n.fillLineDashOffset && (e.lineDashOffset = n.fillLineDashOffset), e.strokeStyle = n.fill || "", e.lineWidth = r, this._drawToContext(e, t, n.fixedDecimalPlaceDigits), e.restore();
	}
	_drawToContext(e, t, n, r = "nonzero") {
		e.beginPath();
		for (let r of t.ops) {
			let t = typeof n == "number" && n >= 0 ? r.data.map((e) => +e.toFixed(n)) : r.data;
			switch (r.op) {
				case "move":
					e.moveTo(t[0], t[1]);
					break;
				case "bcurveTo":
					e.bezierCurveTo(t[0], t[1], t[2], t[3], t[4], t[5]);
					break;
				case "lineTo": e.lineTo(t[0], t[1]);
			}
		}
		t.type === "fillPath" ? e.fill(r) : e.stroke();
	}
	get generator() {
		return this.gen;
	}
	getDefaultOptions() {
		return this.gen.defaultOptions;
	}
	line(e, t, n, r, i) {
		let a = this.gen.line(e, t, n, r, i);
		return this.draw(a), a;
	}
	rectangle(e, t, n, r, i) {
		let a = this.gen.rectangle(e, t, n, r, i);
		return this.draw(a), a;
	}
	ellipse(e, t, n, r, i) {
		let a = this.gen.ellipse(e, t, n, r, i);
		return this.draw(a), a;
	}
	circle(e, t, n, r) {
		let i = this.gen.circle(e, t, n, r);
		return this.draw(i), i;
	}
	linearPath(e, t) {
		let n = this.gen.linearPath(e, t);
		return this.draw(n), n;
	}
	polygon(e, t) {
		let n = this.gen.polygon(e, t);
		return this.draw(n), n;
	}
	arc(e, t, n, r, i, a, o = !1, s) {
		let c = this.gen.arc(e, t, n, r, i, a, o, s);
		return this.draw(c), c;
	}
	curve(e, t) {
		let n = this.gen.curve(e, t);
		return this.draw(n), n;
	}
	path(e, t) {
		let n = this.gen.path(e, t);
		return this.draw(n), n;
	}
}, id = "http://www.w3.org/2000/svg", ad = class {
	constructor(e, t) {
		this.svg = e, this.gen = new nd(t);
	}
	draw(e) {
		let t = e.sets || [], n = e.options || this.getDefaultOptions(), r = this.svg.ownerDocument || window.document, i = r.createElementNS(id, "g"), a = e.options.fixedDecimalPlaceDigits;
		for (let o of t) {
			let t = null;
			switch (o.type) {
				case "path":
					t = r.createElementNS(id, "path"), t.setAttribute("d", this.opsToPath(o, a)), t.setAttribute("stroke", n.stroke), t.setAttribute("stroke-width", n.strokeWidth + ""), t.setAttribute("fill", "none"), n.strokeLineDash && t.setAttribute("stroke-dasharray", n.strokeLineDash.join(" ").trim()), n.strokeLineDashOffset && t.setAttribute("stroke-dashoffset", `${n.strokeLineDashOffset}`);
					break;
				case "fillPath":
					t = r.createElementNS(id, "path"), t.setAttribute("d", this.opsToPath(o, a)), t.setAttribute("stroke", "none"), t.setAttribute("stroke-width", "0"), t.setAttribute("fill", n.fill || ""), e.shape !== "curve" && e.shape !== "polygon" || t.setAttribute("fill-rule", "evenodd");
					break;
				case "fillSketch": t = this.fillSketch(r, o, n);
			}
			t && i.appendChild(t);
		}
		return i;
	}
	fillSketch(e, t, n) {
		let r = n.fillWeight;
		r < 0 && (r = n.strokeWidth / 2);
		let i = e.createElementNS(id, "path");
		return i.setAttribute("d", this.opsToPath(t, n.fixedDecimalPlaceDigits)), i.setAttribute("stroke", n.fill || ""), i.setAttribute("stroke-width", r + ""), i.setAttribute("fill", "none"), n.fillLineDash && i.setAttribute("stroke-dasharray", n.fillLineDash.join(" ").trim()), n.fillLineDashOffset && i.setAttribute("stroke-dashoffset", `${n.fillLineDashOffset}`), i;
	}
	get generator() {
		return this.gen;
	}
	getDefaultOptions() {
		return this.gen.defaultOptions;
	}
	opsToPath(e, t) {
		return this.gen.opsToPath(e, t);
	}
	line(e, t, n, r, i) {
		let a = this.gen.line(e, t, n, r, i);
		return this.draw(a);
	}
	rectangle(e, t, n, r, i) {
		let a = this.gen.rectangle(e, t, n, r, i);
		return this.draw(a);
	}
	ellipse(e, t, n, r, i) {
		let a = this.gen.ellipse(e, t, n, r, i);
		return this.draw(a);
	}
	circle(e, t, n, r) {
		let i = this.gen.circle(e, t, n, r);
		return this.draw(i);
	}
	linearPath(e, t) {
		let n = this.gen.linearPath(e, t);
		return this.draw(n);
	}
	polygon(e, t) {
		let n = this.gen.polygon(e, t);
		return this.draw(n);
	}
	arc(e, t, n, r, i, a, o = !1, s) {
		let c = this.gen.arc(e, t, n, r, i, a, o, s);
		return this.draw(c);
	}
	curve(e, t) {
		let n = this.gen.curve(e, t);
		return this.draw(n);
	}
	path(e, t) {
		let n = this.gen.path(e, t);
		return this.draw(n);
	}
}, q = {
	canvas: (e, t) => new rd(e, t),
	svg: (e, t) => new ad(e, t),
	generator: (e) => new nd(e),
	newSeed: () => nd.newSeed()
}, od = 1, sd = 3;
async function cd(e) {
	let t = e.getElementsByTagName("img");
	if (!t || t.length === 0) return;
	let n = !ld(e);
	await Promise.all([...t].map((e) => new Promise((t) => {
		function r() {
			if (e.style.display = "flex", e.style.flexDirection = "column", n) {
				let [t = mn.fontSize] = Ls(V().fontSize ? V().fontSize : window.getComputedStyle(document.body).fontSize), n = t * 5 + "px";
				e.style.minWidth = n, e.style.maxWidth = n;
			} else e.style.width = "100%";
			t(e);
		}
		i(r, "setupImage"), setTimeout(() => {
			e.complete && r();
		}), e.addEventListener("error", r), e.addEventListener("load", r);
	})));
}
i(cd, "configureLabelImages");
function ld(e) {
	return e.nodeType === sd ? e.textContent?.trim() !== "" : e.nodeType !== od || e.tagName.toLowerCase() === "img" ? !1 : [...e.childNodes].some(ld);
}
i(ld, "hasTextBesidesImages");
var ud = 3, dd = 32, fd = /* @__PURE__ */ i(async (e, t, r) => {
	let i = V(), a = e.insert("g").attr("class", r ?? "node default").attr("id", t.domId || t.id), o = a.insert("g").attr("class", "label").attr("style", Us(t.labelStyle)), s = [
		{
			text: typeof t.label == "string" ? t.label : t.label?.[0] ?? "",
			cssClass: "c4-name"
		},
		{
			text: t.stereotype,
			cssClass: "c4-type"
		},
		...(t.description ?? []).map((e) => ({
			text: e,
			cssClass: "c4-descr"
		}))
	].filter((e) => e.text), c = t.width ? Math.max(t.width - 2 * (t.padding ?? 0), dd) : V().flowchart?.wrappingWidth ?? 200, l = i.c4?.wrap ?? !0 ? c : Infinity, u = await Promise.all(s.map(async (e) => {
		let r = o.append("g").attr("class", e.cssClass), a = await tu(r, nr(Vs(e.text ?? ""), i), {
			useHtmlLabels: !1,
			markdown: !1,
			isNode: !0,
			width: l,
			style: t.labelStyle
		}, i);
		return n(a).selectAll("tspan.text-outer-tspan").attr("text-anchor", "middle"), n(a).selectAll("tspan.text-inner-tspan").attr("font-weight", null).attr("font-style", null), {
			el: r,
			box: r.node().getBBox()
		};
	})), d = Math.max(...u.map(({ box: e }) => e.width), 0), f = 0;
	for (let { el: e, box: t } of u) e.attr("transform", `translate(${d / 2 - t.x - t.width / 2}, ${f - t.y})`), f += t.height + ud;
	let p = u.length > 0 ? f - ud : 0;
	return o.insert("rect", ":first-child"), o.attr("transform", `translate(${-d / 2}, ${-p / 2})`), {
		shapeSvg: a,
		bbox: o.node().getBBox(),
		halfPadding: (t.padding ?? 0) / 2,
		label: o
	};
}, "c4LabelHelper"), J = /* @__PURE__ */ i(async (e, t, r) => {
	if (t.stereotype !== void 0) return fd(e, t, r);
	let i, a = t.useHtmlLabels || bn(V()?.htmlLabels);
	i = r || "node default";
	let o = e.insert("g").attr("class", i).attr("id", t.domId || t.id), s = o.insert("g").attr("class", "label").attr("style", Us(t.labelStyle)), c;
	c = t.label === void 0 ? "" : typeof t.label == "string" ? t.label : t.label[0];
	let l = !!t.icon || !!t.img, u = t.labelType === "markdown", d = await tu(s, nr(Vs(c), V()), {
		useHtmlLabels: a,
		width: t.width || t.wrappingWidth || V().flowchart?.wrappingWidth,
		classes: u ? "markdown-node-label" : "",
		style: t.labelStyle,
		addSvgBackground: l,
		markdown: u
	}, V()), f = (t?.padding ?? 0) / 2, p;
	if (a) {
		let e = d.children[0], t = n(d);
		await cd(e), p = await Pl.measure(() => e.getBoundingClientRect()), t.attr("width", p.width), t.attr("height", p.height);
	} else p = await Pl.measure(() => d.getBBox());
	return a ? s.attr("transform", "translate(" + -p.width / 2 + ", " + -p.height / 2 + ")") : s.attr("transform", "translate(0, " + -p.height / 2 + ")"), t.centerLabel && s.attr("transform", "translate(" + -p.width / 2 + ", " + -p.height / 2 + ")"), s.insert("rect", ":first-child"), {
		shapeSvg: o,
		bbox: p,
		halfPadding: f,
		label: s
	};
}, "labelHelper"), pd = /* @__PURE__ */ i(async (e, t, r) => {
	let i = r.useHtmlLabels ?? zn(V()), a = e.insert("g").attr("class", "label").attr("style", r.labelStyle || ""), o = await tu(a, nr(Vs(t), V()), {
		useHtmlLabels: i,
		width: r.width || V()?.flowchart?.wrappingWidth,
		style: r.labelStyle,
		addSvgBackground: !!r.icon || !!r.img
	}), s = r.padding / 2, c;
	if (zn(V())) {
		let e = o.children[0], t = n(o);
		c = await Pl.measure(() => e.getBoundingClientRect()), t.attr("width", c.width), t.attr("height", c.height);
	} else c = await Pl.measure(() => o.getBBox());
	return i ? a.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")") : a.attr("transform", "translate(0, " + -c.height / 2 + ")"), r.centerLabel && a.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")"), a.insert("rect", ":first-child"), {
		shapeSvg: e,
		bbox: c,
		halfPadding: s,
		label: a
	};
}, "insertLabel"), Y = /* @__PURE__ */ i((e, t, n) => {
	if (n) {
		e.width = n.width, e.height = n.height;
		return;
	}
	let r = t.node().getBBox();
	e.width = r.width, e.height = r.height;
}, "updateNodeBounds"), X = /* @__PURE__ */ i((e, t) => (e.look === "handDrawn" ? "rough-node" : "node") + " " + e.cssClasses + " " + (t || ""), "getNodeClasses");
function Z(e) {
	let t = e.map((e, t) => `${t === 0 ? "M" : "L"}${e.x},${e.y}`);
	return t.push("Z"), t.join(" ");
}
i(Z, "createPathFromPoints");
function md(e, t, n, r, i, a) {
	let o = [], s = n - e, c = r - t, l = s / a, u = 2 * Math.PI / l, d = t + c / 2;
	for (let t = 0; t <= 50; t++) {
		let n = e + t / 50 * s, r = d + i * Math.sin(u * (n - e));
		o.push({
			x: n,
			y: r
		});
	}
	return o;
}
i(md, "generateFullSineWavePoints");
function hd(e, t, n, r, i, a) {
	let o = [], s = i * Math.PI / 180, c = (a * Math.PI / 180 - s) / (r - 1);
	for (let i = 0; i < r; i++) {
		let r = s + i * c, a = e + n * Math.cos(r), l = t + n * Math.sin(r);
		o.push({
			x: -a,
			y: -l
		});
	}
	return o;
}
i(hd, "generateCirclePoints");
function gd(e) {
	let t = Array.from(e.childNodes).filter((e) => e.tagName === "path"), n = document.createElementNS("http://www.w3.org/2000/svg", "path"), r = t.map((e) => e.getAttribute("d")).filter((e) => e !== null).join(" ");
	n.setAttribute("d", r);
	let a = t.find((e) => e.getAttribute("fill") !== "none"), o = t.find((e) => e.getAttribute("stroke") !== "none"), s = /* @__PURE__ */ i((e, t) => e?.getAttribute(t) ?? void 0, "getAttr");
	if (a) {
		let e = {
			fill: s(a, "fill"),
			"fill-opacity": s(a, "fill-opacity") ?? "1"
		};
		Object.entries(e).forEach(([e, t]) => {
			t && n.setAttribute(e, t);
		});
	}
	if (o) {
		let e = {
			stroke: s(o, "stroke"),
			"stroke-width": s(o, "stroke-width") ?? "1",
			"stroke-opacity": s(o, "stroke-opacity") ?? "1"
		};
		Object.entries(e).forEach(([e, t]) => {
			t && n.setAttribute(e, t);
		});
	}
	let c = document.createElementNS("http://www.w3.org/2000/svg", "g");
	return c.appendChild(n), c;
}
i(gd, "mergePaths");
var _d = /* @__PURE__ */ i((e, t) => {
	var n = e.x, r = e.y, i = t.x - n, a = t.y - r, o = e.width / 2, s = e.height / 2, c, l;
	return Math.abs(a) * o > Math.abs(i) * s ? (a < 0 && (s = -s), c = a === 0 ? 0 : s * i / a, l = s) : (i < 0 && (o = -o), c = o, l = i === 0 ? 0 : o * a / i), {
		x: n + c,
		y: r + l
	};
}, "intersectRect"), vd = /* @__PURE__ */ i((e, t, n, r, i) => [
	"M",
	e + i,
	t,
	"H",
	e + n - i,
	"A",
	i,
	i,
	0,
	0,
	1,
	e + n,
	t + i,
	"V",
	t + r - i,
	"A",
	i,
	i,
	0,
	0,
	1,
	e + n - i,
	t + r,
	"H",
	e + i,
	"A",
	i,
	i,
	0,
	0,
	1,
	e,
	t + r - i,
	"V",
	t + i,
	"A",
	i,
	i,
	0,
	0,
	1,
	e + i,
	t,
	"Z"
].join(" "), "createRoundedRectPathD"), yd = /* @__PURE__ */ i(async (e, t, n, r = !1, i = !1) => {
	let a = t || "";
	typeof a == "object" && (a = a[0]);
	let o = V(), s = zn(o);
	return await tu(e, a, {
		style: n,
		isTitle: r,
		useHtmlLabels: s,
		markdown: !1,
		isNode: i,
		width: Infinity
	}, o);
}, "createLabel");
function bd(e, t) {
	return e.intersect(t);
}
i(bd, "intersectNode");
var xd = bd;
function Sd(e, t, n, r) {
	var i = e.x, a = e.y, o = i - r.x, s = a - r.y, c = Math.sqrt(t * t * s * s + n * n * o * o), l = Math.abs(t * n * o / c);
	r.x < i && (l = -l);
	var u = Math.abs(t * n * s / c);
	return r.y < a && (u = -u), {
		x: i + l,
		y: a + u
	};
}
i(Sd, "intersectEllipse");
var Cd = Sd;
function wd(e, t, n) {
	return Cd(e, t, t, n);
}
i(wd, "intersectCircle");
var Td = wd;
function Ed(e, t, n, r) {
	{
		let i = t.y - e.y, a = e.x - t.x, o = t.x * e.y - e.x * t.y, s = i * n.x + a * n.y + o, c = i * r.x + a * r.y + o, l = 1e-6;
		if (s !== 0 && c !== 0 && Dd(s, c)) return;
		let u = r.y - n.y, d = n.x - r.x, f = r.x * n.y - n.x * r.y, p = u * e.x + d * e.y + f, m = u * t.x + d * t.y + f;
		if (Math.abs(p) < l && Math.abs(m) < l && Dd(p, m)) return;
		let h = i * d - u * a;
		if (h === 0) return;
		let g = Math.abs(h / 2), _ = a * f - d * o, v = _ < 0 ? (_ - g) / h : (_ + g) / h;
		return _ = u * o - i * f, {
			x: v,
			y: _ < 0 ? (_ - g) / h : (_ + g) / h
		};
	}
}
i(Ed, "intersectLine");
function Dd(e, t) {
	return e * t > 0;
}
i(Dd, "sameSign");
var Od = Ed;
function kd(e, t, n) {
	let r = e.x, i = e.y, a = [], o = Infinity, s = Infinity;
	typeof t.forEach == "function" ? t.forEach(function(e) {
		o = Math.min(o, e.x), s = Math.min(s, e.y);
	}) : (o = Math.min(o, t.x), s = Math.min(s, t.y));
	let c = r - e.width / 2 - o, l = i - e.height / 2 - s;
	for (let r = 0; r < t.length; r++) {
		let i = t[r], o = t[r < t.length - 1 ? r + 1 : 0], s = Od(e, n, {
			x: c + i.x,
			y: l + i.y
		}, {
			x: c + o.x,
			y: l + o.y
		});
		s && a.push(s);
	}
	return a.length ? (a.length > 1 && a.sort(function(e, t) {
		let r = e.x - n.x, i = e.y - n.y, a = Math.sqrt(r * r + i * i), o = t.x - n.x, s = t.y - n.y, c = Math.sqrt(o * o + s * s);
		return a < c ? -1 : a === c ? 0 : 1;
	}), a[0]) : e;
}
i(kd, "intersectPolygon");
var Q = {
	node: xd,
	circle: Td,
	ellipse: Cd,
	polygon: kd,
	rect: _d
};
function Ad(e, t) {
	let { labelStyles: n } = H(t);
	t.labelStyle = n;
	let r = X(t), i = r;
	r || (i = "anchor");
	let a = e.insert("g").attr("class", i).attr("id", t.domId || t.id), { cssStyles: o } = t, s = q.svg(a), c = U(t, {
		fill: "black",
		stroke: "none",
		fillStyle: "solid"
	});
	t.look !== "handDrawn" && (c.roughness = 0);
	let l = s.circle(0, 0, 2, c), u = a.insert(() => l, ":first-child");
	return u.attr("class", "anchor").attr("style", Us(o)), Y(t, u), t.intersect = function(e) {
		return p.info("Circle intersect", t, 1, e), Q.circle(t, 1, e);
	}, a;
}
i(Ad, "anchor");
function jd(e, t, n, r, i, a, o) {
	let s = (e + n) / 2, c = (t + r) / 2, l = Math.atan2(r - t, n - e), u = (n - e) / 2, d = (r - t) / 2, f = u / i, p = d / a, m = Math.sqrt(f ** 2 + p ** 2);
	if (m > 1) throw Error("The given radii are too small to create an arc between the points.");
	let h = Math.sqrt(1 - m ** 2), g = s + h * a * Math.sin(l) * (o ? -1 : 1), _ = c - h * i * Math.cos(l) * (o ? -1 : 1), v = Math.atan2((t - _) / a, (e - g) / i), y = Math.atan2((r - _) / a, (n - g) / i) - v;
	o && y < 0 && (y += 2 * Math.PI), !o && y > 0 && (y -= 2 * Math.PI);
	let b = [];
	for (let e = 0; e < 20; e++) {
		let t = v + e / 19 * y, n = g + i * Math.cos(t), r = _ + a * Math.sin(t);
		b.push({
			x: n,
			y: r
		});
	}
	return b;
}
i(jd, "generateArcPoints");
function Md(e, t, n) {
	let [r, i] = [t, n].sort((e, t) => t - e);
	return i * (1 - Math.sqrt(1 - (e / r / 2) ** 2));
}
i(Md, "calculateArcSagitta");
async function Nd(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let a = t.padding ?? 0, o = t.look === "neo" ? 16 : a, s = t.look === "neo" ? 12 : a, c = /* @__PURE__ */ i((e) => e + s, "calcTotalHeight"), l = /* @__PURE__ */ i((e) => {
		let t = e / 2;
		return [t / (2.5 + e / 50), t];
	}, "calcEllipseRadius"), { shapeSvg: u, bbox: d } = await J(e, t, X(t)), f = c(t?.height ? t?.height : d.height), [p, m] = l(f), h = Md(f, p, m), g = (t?.width ? t?.width : d.width) + o * 2 + h - h, _ = f, { cssStyles: v } = t, y = [
		{
			x: g / 2,
			y: -_ / 2
		},
		{
			x: -g / 2,
			y: -_ / 2
		},
		...jd(-g / 2, -_ / 2, -g / 2, _ / 2, p, m, !1),
		{
			x: g / 2,
			y: _ / 2
		},
		...jd(g / 2, _ / 2, g / 2, -_ / 2, p, m, !0)
	], b = q.svg(u), x = U(t, {});
	t.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
	let S = Z(y), C = b.path(S, x), w = u.insert(() => C, ":first-child");
	return w.attr("class", "basic label-container outer-path"), v && t.look !== "handDrawn" && w.selectAll("path").attr("style", v), r && t.look !== "handDrawn" && w.selectAll("path").attr("style", r), w.attr("transform", `translate(${p / 2}, 0)`), Y(t, w), t.intersect = function(e) {
		return Q.polygon(t, y, e);
	}, u;
}
i(Nd, "bowTieRect");
async function Pd(e, t, { config: { themeVariables: n } }) {
	let { labelStyles: r, nodeStyles: a } = H(t);
	t.labelStyle = r;
	let { shapeSvg: o, bbox: s, label: c } = await J(e, t, X(t)), l = n?.nodeBorder ?? n?.lineColor ?? "currentColor", u = t.padding ?? 12, d = Math.max(s.width + u * 2, t.width ?? 0, 80), f = Math.max(Math.min(d * .08, 12), 5), p = Math.max(s.height + u * 2 + f, t.height ?? 0), m = -p / 2 + f, h = p / 2, g = d * .72, _ = [
		`M${-d / 2},${m}`,
		`L${-g / 2},${h}`,
		`A${g / 2},${f} 0 0 0 ${g / 2},${h}`,
		`L${d / 2},${m}`,
		`A${d / 2},${f} 0 0 0 ${-d / 2},${m}`,
		"Z"
	].join(" "), { cssStyles: v } = t, y = o.insert("g", ":first-child").attr("class", "basic label-container");
	if (t.look === "handDrawn") {
		let e = q.svg(o).path(_, U(t, {}));
		y.node()?.appendChild(e), v && y.attr("style", v);
	} else y.append("path").attr("d", _).attr("style", a);
	y.append("ellipse").attr("cx", 0).attr("cy", m).attr("rx", d / 2).attr("ry", f).attr("style", `fill:none;stroke:${l};stroke-width:1px`), Y(t, y);
	let b = m + (h - m) / 2;
	c.attr("transform", `translate(${-(s.width / 2) - (s.x - (s.left ?? 0))}, ${b - s.height / 2 - (s.y - (s.top ?? 0))})`);
	let x = /* @__PURE__ */ i((e, t, n) => Array.from({ length: 13 }, (r, i) => {
		let a = Math.PI - i * Math.PI / 12;
		return {
			x: e * Math.cos(a),
			y: t + n * f * Math.sin(a)
		};
	}), "arc"), S = [...x(d / 2, m, -1), ...x(g / 2, h, 1).reverse()];
	return t.intersect = function(e) {
		return Q.polygon(t, S, e);
	}, o;
}
i(Pd, "bucket");
var Fd = 20, Id = 8, Ld = 80, Rd = 8;
async function zd(e, t) {
	let { themeVariables: n } = V(), r = n.clusterBkg, i = n.clusterBorder, { nodeStyles: a } = H(t), { shapeSvg: o, bbox: s } = await J(e, t, X(t)), c = t.padding ?? 8, l = s.height, u = Math.max(s.width + c * 2, Ld, t?.width ?? 0), d = Math.max(l + Id + Fd + c * 2, t?.height ?? 0), f = -u / 2, p = -d / 2, m = o.select(".label");
	m && (t.useHtmlLabels ?? zn(V()) ? m.attr("transform", `translate(${-s.width / 2}, ${-s.height / 2 + -14})`) : m.attr("transform", `translate(0, ${-s.height / 2 + -14})`));
	let h;
	if (t.look === "handDrawn") {
		let e = q.svg(o), n = U(t, {
			fill: r,
			stroke: i,
			fillStyle: "solid"
		}), a = e.path(vd(f, p, u, d, Rd), n);
		h = o.insert(() => a, ":first-child"), h.attr("class", "basic label-container collapsed-group").attr("style", Us(t.cssStyles));
	} else h = o.insert("rect", ":first-child"), h.attr("class", "basic label-container collapsed-group").attr("style", a).attr("rx", Rd).attr("ry", Rd).attr("x", f).attr("y", p).attr("width", u).attr("height", d).attr("fill", r).attr("stroke", i);
	let g = p + c + l + Id;
	o.append("line").attr("class", "collapsed-separator").attr("x1", f + 8).attr("y1", g).attr("x2", f + u - 8).attr("y2", g).attr("stroke", i).attr("stroke-dasharray", "3, 3");
	let _ = g + Fd / 2;
	for (let e = -1; e <= 1; e++) o.append("circle").attr("class", "collapsed-indicator").attr("cx", e * 10).attr("cy", _).attr("r", 2.5).attr("fill", i);
	return Y(t, h), t.calcIntersect = function(e, t) {
		return Q.rect(e, t);
	}, t.intersect = function(e) {
		return Q.rect(t, e);
	}, o;
}
i(zd, "collapsedGroup");
function Bd(e, t, n, r) {
	return e.insert("polygon", ":first-child").attr("points", r.map(function(e) {
		return e.x + "," + e.y;
	}).join(" ")).attr("class", "label-container").attr("transform", "translate(" + -t / 2 + "," + n / 2 + ")");
}
i(Bd, "insertPolygonShape");
var Vd = [
	"right",
	"left",
	"up",
	"down"
], Hd = "point", Ud = /* @__PURE__ */ i((e) => {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) switch (n) {
		case "x":
			t.add("right"), t.add("left");
			break;
		case "y":
			t.add("up"), t.add("down");
			break;
		default: t.add(n);
	}
	return t;
}, "expandAndDeduplicateDirections"), Wd = /* @__PURE__ */ i((e) => Vd.filter((t) => e.has(t)).join("|") || Hd, "getDirectionKey"), Gd = {
	"right|left|up|down": /* @__PURE__ */ i(({ height: e, midpoint: t, padding: n, width: r }) => [
		{
			x: 0,
			y: 0
		},
		{
			x: t,
			y: 0
		},
		{
			x: r / 2,
			y: 2 * n
		},
		{
			x: r - t,
			y: 0
		},
		{
			x: r,
			y: 0
		},
		{
			x: r,
			y: -e / 3
		},
		{
			x: r + 2 * n,
			y: -e / 2
		},
		{
			x: r,
			y: -2 * e / 3
		},
		{
			x: r,
			y: -e
		},
		{
			x: r - t,
			y: -e
		},
		{
			x: r / 2,
			y: -e - 2 * n
		},
		{
			x: t,
			y: -e
		},
		{
			x: 0,
			y: -e
		},
		{
			x: 0,
			y: -2 * e / 3
		},
		{
			x: -2 * n,
			y: -e / 2
		},
		{
			x: 0,
			y: -e / 3
		}
	], "right|left|up|down"),
	"right|left|up": /* @__PURE__ */ i(({ height: e, midpoint: t, width: n }) => [
		{
			x: t,
			y: 0
		},
		{
			x: n - t,
			y: 0
		},
		{
			x: n,
			y: -e / 2
		},
		{
			x: n - t,
			y: -e
		},
		{
			x: t,
			y: -e
		},
		{
			x: 0,
			y: -e / 2
		}
	], "right|left|up"),
	"right|left|down": /* @__PURE__ */ i(({ height: e, midpoint: t, width: n }) => [
		{
			x: 0,
			y: 0
		},
		{
			x: t,
			y: -e
		},
		{
			x: n - t,
			y: -e
		},
		{
			x: n,
			y: 0
		}
	], "right|left|down"),
	"right|up|down": /* @__PURE__ */ i(({ height: e, midpoint: t, width: n }) => [
		{
			x: 0,
			y: 0
		},
		{
			x: n,
			y: -t
		},
		{
			x: n,
			y: -e + t
		},
		{
			x: 0,
			y: -e
		}
	], "right|up|down"),
	"left|up|down": /* @__PURE__ */ i(({ height: e, midpoint: t, width: n }) => [
		{
			x: n,
			y: 0
		},
		{
			x: 0,
			y: -t
		},
		{
			x: 0,
			y: -e + t
		},
		{
			x: n,
			y: -e
		}
	], "left|up|down"),
	"right|left": /* @__PURE__ */ i(({ height: e, midpoint: t, padding: n, width: r }) => [
		{
			x: t,
			y: 0
		},
		{
			x: t,
			y: -n
		},
		{
			x: r - t,
			y: -n
		},
		{
			x: r - t,
			y: 0
		},
		{
			x: r,
			y: -e / 2
		},
		{
			x: r - t,
			y: -e
		},
		{
			x: r - t,
			y: -e + n
		},
		{
			x: t,
			y: -e + n
		},
		{
			x: t,
			y: -e
		},
		{
			x: 0,
			y: -e / 2
		}
	], "right|left"),
	"up|down": /* @__PURE__ */ i(({ height: e, midpoint: t, padding: n, width: r }) => [
		{
			x: r / 2,
			y: 0
		},
		{
			x: 0,
			y: -n
		},
		{
			x: t,
			y: -n
		},
		{
			x: t,
			y: -e + n
		},
		{
			x: 0,
			y: -e + n
		},
		{
			x: r / 2,
			y: -e
		},
		{
			x: r,
			y: -e + n
		},
		{
			x: r - t,
			y: -e + n
		},
		{
			x: r - t,
			y: -n
		},
		{
			x: r,
			y: -n
		}
	], "up|down"),
	"right|up": /* @__PURE__ */ i(({ height: e, midpoint: t, width: n }) => [
		{
			x: 0,
			y: 0
		},
		{
			x: n,
			y: -t
		},
		{
			x: 0,
			y: -e
		}
	], "right|up"),
	"right|down": /* @__PURE__ */ i(({ height: e, width: t }) => [
		{
			x: 0,
			y: 0
		},
		{
			x: t,
			y: 0
		},
		{
			x: 0,
			y: -e
		}
	], "right|down"),
	"left|up": /* @__PURE__ */ i(({ height: e, midpoint: t, width: n }) => [
		{
			x: n,
			y: 0
		},
		{
			x: 0,
			y: -t
		},
		{
			x: n,
			y: -e
		}
	], "left|up"),
	"left|down": /* @__PURE__ */ i(({ height: e, width: t }) => [
		{
			x: t,
			y: 0
		},
		{
			x: 0,
			y: 0
		},
		{
			x: t,
			y: -e
		}
	], "left|down"),
	right: /* @__PURE__ */ i(({ height: e, midpoint: t, padding: n, width: r }) => [
		{
			x: t,
			y: -n
		},
		{
			x: t,
			y: -n
		},
		{
			x: r - t,
			y: -n
		},
		{
			x: r - t,
			y: 0
		},
		{
			x: r,
			y: -e / 2
		},
		{
			x: r - t,
			y: -e
		},
		{
			x: r - t,
			y: -e + n
		},
		{
			x: t,
			y: -e + n
		},
		{
			x: t,
			y: -e + n
		}
	], "right"),
	left: /* @__PURE__ */ i(({ height: e, midpoint: t, padding: n, width: r }) => [
		{
			x: t,
			y: 0
		},
		{
			x: t,
			y: -n
		},
		{
			x: r - t,
			y: -n
		},
		{
			x: r - t,
			y: -e + n
		},
		{
			x: t,
			y: -e + n
		},
		{
			x: t,
			y: -e
		},
		{
			x: 0,
			y: -e / 2
		}
	], "left"),
	up: /* @__PURE__ */ i(({ height: e, midpoint: t, padding: n, width: r }) => [
		{
			x: t,
			y: -n
		},
		{
			x: t,
			y: -e + n
		},
		{
			x: 0,
			y: -e + n
		},
		{
			x: r / 2,
			y: -e
		},
		{
			x: r,
			y: -e + n
		},
		{
			x: r - t,
			y: -e + n
		},
		{
			x: r - t,
			y: -n
		}
	], "up"),
	down: /* @__PURE__ */ i(({ height: e, midpoint: t, padding: n, width: r }) => [
		{
			x: r / 2,
			y: 0
		},
		{
			x: 0,
			y: -n
		},
		{
			x: t,
			y: -n
		},
		{
			x: t,
			y: -e + n
		},
		{
			x: r - t,
			y: -e + n
		},
		{
			x: r - t,
			y: -n
		},
		{
			x: r,
			y: -n
		}
	], "down"),
	[Hd]: () => [{
		x: 0,
		y: 0
	}]
}, Kd = /* @__PURE__ */ i((e, t, n, r) => {
	let i = Ud(e), a = (n.padding ?? 0) / 2, o = t.height + 4 * a, s = o / 2, c = r ?? t.width + 2 * s + 2 * a;
	return (Gd[Wd(i)] ?? Gd[Hd])({
		height: o,
		midpoint: s,
		padding: a,
		width: c
	});
}, "getArrowPoints");
async function qd(e, t) {
	let n = t, { shapeSvg: r, bbox: i } = await J(e, n, X(n)), a = n.padding ?? 0, o = i.height + 2 * a, s = o / 2, c = i.width + 2 * s + a, l = n.width ?? 0, u = n.positioned && (n.widthInColumns ?? 1) > 1 && l > c ? l : c, d = Kd(n.directions ?? [], i, n, u), f = Bd(r, u, o, d);
	return f.attr("style", n.style ?? null), Y(n, f), n.intersect = function(e) {
		return Q.polygon(n, d, e);
	}, r;
}
i(qd, "block_arrow");
async function Jd(e, t, { config: { themeVariables: n } }) {
	let { labelStyles: r, nodeStyles: i } = H(t);
	t.labelStyle = r;
	let { shapeSvg: a, bbox: o, label: s } = await J(e, t, X(t)), c = n?.nodeBorder ?? n?.lineColor ?? "currentColor", l = t.padding ?? 12, u = Math.max(o.width + l * 2, t.width ?? 0, 90), d = Math.max(o.height + l * 2 + 18, t.height ?? 0), f = -d / 2, { cssStyles: p } = t, m = a.insert("g", ":first-child").attr("class", "basic label-container");
	if (t.look === "handDrawn") {
		let e = q.svg(a).path(vd(-u / 2, f, u, d, 12), U(t, {}));
		m.node()?.appendChild(e), p && m.attr("style", p);
	} else m.append("rect").attr("x", -u / 2).attr("y", f).attr("width", u).attr("height", d).attr("rx", 12).attr("ry", 12).attr("style", i);
	m.append("line").attr("x1", -u / 2).attr("y1", f + 18).attr("x2", u / 2).attr("y2", f + 18).attr("style", `stroke:${c};stroke-width:1px`);
	for (let e = 0; e < 3; e++) m.append("circle").attr("cx", -u / 2 + 12 + e * 9).attr("cy", f + 9).attr("r", 2.5).attr("style", `fill:${c};stroke:none`);
	m.append("rect").attr("class", "browser-address-bar").attr("x", -u / 2 + 44).attr("y", f + 4).attr("width", Math.max(u - 56, 10)).attr("height", 10).attr("rx", 3).attr("ry", 3).attr("style", `fill:none;stroke:${c};stroke-width:1px;opacity:0.6`), Y(t, m);
	let h = f + 18 + (d - 18) / 2;
	return s.attr("transform", `translate(${-(o.width / 2) - (o.x - (o.left ?? 0))}, ${h - o.height / 2 - (o.y - (o.top ?? 0))})`), t.intersect = function(e) {
		return Q.rect(t, e);
	}, a;
}
i(Jd, "browser");
var Yd = 12;
async function Xd(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let i = t.padding ?? 0, a = t.look === "neo" ? 28 : i, o = t.look === "neo" ? 24 : i, { shapeSvg: s, bbox: c } = await J(e, t, X(t)), l = (t?.width ?? c.width) + (t.look === "neo" ? a * 2 : a + Yd), u = (t?.height ?? c.height) + (t.look === "neo" ? o * 2 : o), d = l, f = -u, p = [
		{
			x: 0 + Yd,
			y: f
		},
		{
			x: d,
			y: f
		},
		{
			x: d,
			y: 0
		},
		{
			x: 0,
			y: 0
		},
		{
			x: 0,
			y: f + Yd
		},
		{
			x: 0 + Yd,
			y: f
		}
	], m, { cssStyles: h } = t;
	if (t.look === "handDrawn") {
		let e = q.svg(s), n = U(t, {}), r = Z(p), i = e.path(r, n);
		m = s.insert(() => i, ":first-child").attr("transform", `translate(${-l / 2}, ${u / 2})`), h && m.attr("style", h);
	} else m = Bd(s, l, u, p);
	return r && m.attr("style", r), Y(t, m), t.intersect = function(e) {
		return Q.polygon(t, p, e);
	}, s;
}
i(Xd, "card");
function Zd(e, t) {
	let { nodeStyles: n } = H(t);
	t.label = "";
	let r = e.insert("g").attr("class", X(t)).attr("id", t.domId ?? t.id), { cssStyles: i } = t, a = Math.max(28, t.width ?? 0), o = [
		{
			x: 0,
			y: a / 2
		},
		{
			x: a / 2,
			y: 0
		},
		{
			x: 0,
			y: -a / 2
		},
		{
			x: -a / 2,
			y: 0
		}
	], s = q.svg(r), c = U(t, {});
	t.look !== "handDrawn" && (c.roughness = 0, c.fillStyle = "solid");
	let l = Z(o), u = s.path(l, c), d = r.insert(() => u, ":first-child");
	return i && t.look !== "handDrawn" && d.selectAll("path").attr("style", i), n && t.look !== "handDrawn" && d.selectAll("path").attr("style", n), t.width = 28, t.height = 28, t.intersect = function(e) {
		return Q.polygon(t, o, e);
	}, r;
}
i(Zd, "choice");
async function Qd(e, t, n) {
	let { labelStyles: r, nodeStyles: i } = H(t);
	t.labelStyle = r;
	let { shapeSvg: a, bbox: o, halfPadding: s } = await J(e, t, X(t)), c = n?.padding ?? s, l = t.look === "neo" ? o.width / 2 + 32 : o.width / 2 + c, u, { cssStyles: d } = t;
	if (t.look === "handDrawn") {
		let e = q.svg(a), n = U(t, {}), r = e.circle(0, 0, l * 2, n);
		u = a.insert(() => r, ":first-child"), u.attr("class", "basic label-container").attr("style", Us(d));
	} else u = a.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", i).attr("r", l).attr("cx", 0).attr("cy", 0);
	return Y(t, u), t.calcIntersect = function(e, t) {
		let n = e.width / 2;
		return Q.circle(e, n, t);
	}, t.intersect = function(e) {
		return p.info("Circle intersect", t, l, e), Q.circle(t, l, e);
	}, a;
}
i(Qd, "circle");
async function $d(e, t) {
	let n = t, { shapeSvg: r, bbox: i, halfPadding: a } = await J(e, n, [
		"node",
		n.cssClasses,
		n.class
	].filter(Boolean).join(" ")), o = r.insert("rect", ":first-child"), s = n.padding ?? 0, c = n.positioned ? n.width ?? 0 : i.width + s, l = n.positioned ? n.height ?? 0 : i.height + s, u = n.positioned ? -c / 2 : -i.width / 2 - a, d = n.positioned ? -l / 2 : -i.height / 2 - a;
	return o.attr("class", "basic cluster composite label-container").attr("style", n.style ?? null).attr("rx", n.rx ?? null).attr("ry", n.ry ?? null).attr("x", u).attr("y", d).attr("width", c).attr("height", l), Y(n, o), n.intersect = function(e) {
		return Q.rect(n, e);
	}, r;
}
i($d, "composite");
async function ef(e, t, { config: { themeVariables: n } }) {
	let { labelStyles: r, nodeStyles: i } = H(t);
	t.labelStyle = r;
	let { shapeSvg: a, bbox: o, label: s } = await J(e, t, X(t)), c = n?.nodeBorder ?? n?.lineColor ?? "currentColor", l = t.padding ?? 12, u = Math.max(o.width + l * 2, t.width ?? 0, 90), d = Math.max(o.height + l * 2 + 20, t.height ?? 0), f = -d / 2, { cssStyles: p } = t, m = a.insert("g", ":first-child").attr("class", "basic label-container");
	if (t.look === "handDrawn") {
		let e = q.svg(a).path(vd(-u / 2, f, u, d, 12), U(t, {}));
		m.node()?.appendChild(e), p && m.attr("style", p);
	} else m.append("rect").attr("x", -u / 2).attr("y", f).attr("width", u).attr("height", d).attr("rx", 12).attr("ry", 12).attr("style", i);
	m.append("text").attr("x", -u / 2 + 12).attr("y", f + 16).attr("class", "console-glyph").attr("style", `font-family:monospace;font-weight:bold;font-size:14px;fill:${c}`).text(">_"), Y(t, m);
	let h = f + 20 + (d - 20) / 2;
	return s.attr("transform", `translate(${-(o.width / 2) - (o.x - (o.left ?? 0))}, ${h - o.height / 2 - (o.y - (o.top ?? 0))})`), t.intersect = function(e) {
		return Q.rect(t, e);
	}, a;
}
i(ef, "consoleWindow");
function tf(e) {
	let t = Math.cos(Math.PI / 4), n = Math.sin(Math.PI / 4), r = e * 2, i = {
		x: r / 2 * t,
		y: r / 2 * n
	}, a = {
		x: -(r / 2) * t,
		y: r / 2 * n
	}, o = {
		x: -(r / 2) * t,
		y: -(r / 2) * n
	}, s = {
		x: r / 2 * t,
		y: -(r / 2) * n
	};
	return `M ${a.x},${a.y} L ${s.x},${s.y}
                   M ${i.x},${i.y} L ${o.x},${o.y}`;
}
i(tf, "createLine");
function nf(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n, t.label = "";
	let i = e.insert("g").attr("class", X(t)).attr("id", t.domId ?? t.id), a = Math.max(30, t?.width ?? 0), { cssStyles: o } = t, s = q.svg(i), c = U(t, {});
	t.look !== "handDrawn" && (c.roughness = 0, c.fillStyle = "solid");
	let l = s.circle(0, 0, a * 2, c), u = tf(a), d = s.path(u, c), f = i.insert(() => l, ":first-child");
	return f.insert(() => d), f.attr("class", "outer-path"), o && t.look !== "handDrawn" && f.selectAll("path").attr("style", o), r && t.look !== "handDrawn" && f.selectAll("path").attr("style", r), Y(t, f), t.intersect = function(e) {
		return p.info("crossedCircle intersect", t, {
			radius: a,
			point: e
		}), Q.circle(t, a, e);
	}, i;
}
i(nf, "crossedCircle");
function rf(e, t, n, r = 100, i = 0, a = 180) {
	let o = [], s = i * Math.PI / 180, c = (a * Math.PI / 180 - s) / (r - 1);
	for (let i = 0; i < r; i++) {
		let r = s + i * c, a = e + n * Math.cos(r), l = t + n * Math.sin(r);
		o.push({
			x: -a,
			y: -l
		});
	}
	return o;
}
i(rf, "generateCirclePoints");
async function af(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let { shapeSvg: i, bbox: a, label: o } = await J(e, t, X(t)), s = t.look === "neo" ? 18 : t.padding ?? 0, c = t.look === "neo" ? 12 : t.padding ?? 0, l = a.width + s, u = a.height + c, d = Math.max(5, u * .1), { cssStyles: f } = t, p = [
		...rf(l / 2, -u / 2, d, 30, -90, 0),
		{
			x: -l / 2 - d,
			y: d
		},
		...rf(l / 2 + d * 2, -d, d, 20, -180, -270),
		...rf(l / 2 + d * 2, d, d, 20, -90, -180),
		{
			x: -l / 2 - d,
			y: -u / 2
		},
		...rf(l / 2, u / 2, d, 20, 0, 90)
	], m = [
		{
			x: l / 2,
			y: -u / 2 - d
		},
		{
			x: -l / 2,
			y: -u / 2 - d
		},
		...rf(l / 2, -u / 2, d, 20, -90, 0),
		{
			x: -l / 2 - d,
			y: -d
		},
		...rf(l / 2 + l * .1, -d, d, 20, -180, -270),
		...rf(l / 2 + l * .1, d, d, 20, -90, -180),
		{
			x: -l / 2 - d,
			y: u / 2
		},
		...rf(l / 2, u / 2, d, 20, 0, 90),
		{
			x: -l / 2,
			y: u / 2 + d
		},
		{
			x: l / 2,
			y: u / 2 + d
		}
	], h = q.svg(i), g = U(t, { fill: "none" });
	t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
	let _ = Z(p).replace("Z", ""), v = h.path(_, g), y = Z(m), b = h.path(y, { ...g }), x = i.insert("g", ":first-child");
	return x.insert(() => b, ":first-child").attr("stroke-opacity", 0), x.insert(() => v, ":first-child"), x.attr("class", "text"), f && t.look !== "handDrawn" && x.selectAll("path").attr("style", f), r && t.look !== "handDrawn" && x.selectAll("path").attr("style", r), x.attr("transform", `translate(${d}, 0)`), o.attr("transform", `translate(${-l / 2 + d - (a.x - (a.left ?? 0))},${-u / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), Y(t, x), t.intersect = function(e) {
		return Q.polygon(t, m, e);
	}, i;
}
i(af, "curlyBraceLeft");
function of(e, t, n, r = 100, i = 0, a = 180) {
	let o = [], s = i * Math.PI / 180, c = (a * Math.PI / 180 - s) / (r - 1);
	for (let i = 0; i < r; i++) {
		let r = s + i * c, a = e + n * Math.cos(r), l = t + n * Math.sin(r);
		o.push({
			x: a,
			y: l
		});
	}
	return o;
}
i(of, "generateCirclePoints");
async function sf(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let { shapeSvg: i, bbox: a, label: o } = await J(e, t, X(t)), s = t.look === "neo" ? 18 : t.padding ?? 0, c = t.look === "neo" ? 12 : t.padding ?? 0, l = a.width + (t.look === "neo" ? s * 2 : s), u = a.height + (t.look === "neo" ? c * 2 : c), d = Math.max(5, u * .1), { cssStyles: f } = t, p = [
		...of(l / 2, -u / 2, d, 20, -90, 0),
		{
			x: l / 2 + d,
			y: -d
		},
		...of(l / 2 + d * 2, -d, d, 20, -180, -270),
		...of(l / 2 + d * 2, d, d, 20, -90, -180),
		{
			x: l / 2 + d,
			y: u / 2
		},
		...of(l / 2, u / 2, d, 20, 0, 90)
	], m = [
		{
			x: -l / 2,
			y: -u / 2 - d
		},
		{
			x: l / 2,
			y: -u / 2 - d
		},
		...of(l / 2, -u / 2, d, 20, -90, 0),
		{
			x: l / 2 + d,
			y: -d
		},
		...of(l / 2 + d * 2, -d, d, 20, -180, -270),
		...of(l / 2 + d * 2, d, d, 20, -90, -180),
		{
			x: l / 2 + d,
			y: u / 2
		},
		...of(l / 2, u / 2, d, 20, 0, 90),
		{
			x: l / 2,
			y: u / 2 + d
		},
		{
			x: -l / 2,
			y: u / 2 + d
		}
	], h = q.svg(i), g = U(t, { fill: "none" });
	t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
	let _ = Z(p).replace("Z", ""), v = h.path(_, g), y = Z(m), b = h.path(y, { ...g }), x = i.insert("g", ":first-child");
	return x.insert(() => b, ":first-child").attr("stroke-opacity", 0), x.insert(() => v, ":first-child"), x.attr("class", "text"), f && t.look !== "handDrawn" && x.selectAll("path").attr("style", f), r && t.look !== "handDrawn" && x.selectAll("path").attr("style", r), x.attr("transform", `translate(${-d}, 0)`), o.attr("transform", `translate(${-l / 2 + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))},${-u / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), Y(t, x), t.intersect = function(e) {
		return Q.polygon(t, m, e);
	}, i;
}
i(sf, "curlyBraceRight");
function cf(e, t, n, r = 100, i = 0, a = 180) {
	let o = [], s = i * Math.PI / 180, c = (a * Math.PI / 180 - s) / (r - 1);
	for (let i = 0; i < r; i++) {
		let r = s + i * c, a = e + n * Math.cos(r), l = t + n * Math.sin(r);
		o.push({
			x: -a,
			y: -l
		});
	}
	return o;
}
i(cf, "generateCirclePoints");
async function lf(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let { shapeSvg: i, bbox: a, label: o } = await J(e, t, X(t)), s = t.look === "neo" ? 18 : t.padding ?? 0, c = t.look === "neo" ? 12 : t.padding ?? 0, l = a.width + (t.look === "neo" ? s * 2 : s), u = a.height + (t.look === "neo" ? c * 2 : c), d = Math.max(5, u * .1), { cssStyles: f } = t, p = [
		...cf(l / 2, -u / 2, d, 30, -90, 0),
		{
			x: -l / 2 - d,
			y: d
		},
		...cf(l / 2 + d * 2, -d, d, 20, -180, -270),
		...cf(l / 2 + d * 2, d, d, 20, -90, -180),
		{
			x: -l / 2 - d,
			y: -u / 2
		},
		...cf(l / 2, u / 2, d, 20, 0, 90)
	], m = [
		...cf(-l / 2 + d + d / 2, -u / 2, d, 20, -90, -180),
		{
			x: l / 2 - d / 2,
			y: d
		},
		...cf(-l / 2 - d / 2, -d, d, 20, 0, 90),
		...cf(-l / 2 - d / 2, d, d, 20, -90, 0),
		{
			x: l / 2 - d / 2,
			y: -d
		},
		...cf(-l / 2 + d + d / 2, u / 2, d, 30, -180, -270)
	], h = [
		{
			x: l / 2,
			y: -u / 2 - d
		},
		{
			x: -l / 2,
			y: -u / 2 - d
		},
		...cf(l / 2, -u / 2, d, 20, -90, 0),
		{
			x: -l / 2 - d,
			y: -d
		},
		...cf(l / 2 + d * 2, -d, d, 20, -180, -270),
		...cf(l / 2 + d * 2, d, d, 20, -90, -180),
		{
			x: -l / 2 - d,
			y: u / 2
		},
		...cf(l / 2, u / 2, d, 20, 0, 90),
		{
			x: -l / 2,
			y: u / 2 + d
		},
		{
			x: l / 2 - d - d / 2,
			y: u / 2 + d
		},
		...cf(-l / 2 + d + d / 2, -u / 2, d, 20, -90, -180),
		{
			x: l / 2 - d / 2,
			y: d
		},
		...cf(-l / 2 - d / 2, -d, d, 20, 0, 90),
		...cf(-l / 2 - d / 2, d, d, 20, -90, 0),
		{
			x: l / 2 - d / 2,
			y: -d
		},
		...cf(-l / 2 + d + d / 2, u / 2, d, 30, -180, -270)
	], g = q.svg(i), _ = U(t, { fill: "none" });
	t.look !== "handDrawn" && (_.roughness = 0, _.fillStyle = "solid");
	let v = Z(p).replace("Z", ""), y = g.path(v, _), b = Z(m).replace("Z", ""), x = g.path(b, _), S = Z(h), C = g.path(S, { ..._ }), w = i.insert("g", ":first-child");
	return w.insert(() => C, ":first-child").attr("stroke-opacity", 0), w.insert(() => y, ":first-child"), w.insert(() => x, ":first-child"), w.attr("class", "text"), f && t.look !== "handDrawn" && w.selectAll("path").attr("style", f), r && t.look !== "handDrawn" && w.selectAll("path").attr("style", r), w.attr("transform", `translate(${d - d / 4}, 0)`), o.attr("transform", `translate(${-l / 2 + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))},${-u / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), Y(t, w), t.intersect = function(e) {
		return Q.polygon(t, h, e);
	}, i;
}
i(lf, "curlyBraces");
async function uf(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let i = t.padding ?? 0, a = t.look === "neo" ? 16 : i, o = t.look === "neo" ? 12 : i, { shapeSvg: s, bbox: c } = await J(e, t, X(t)), l = Math.max(20, (c.width + a * 2) * 1.25, t?.width ?? 0), u = Math.max(5, c.height + o * 2, t?.height ?? 0), d = u / 2, { cssStyles: f } = t, p = q.svg(s), m = U(t, {});
	t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
	let h = l, g = u, _ = h - d, v = g / 4, y = [
		{
			x: _,
			y: 0
		},
		{
			x: v,
			y: 0
		},
		{
			x: 0,
			y: g / 2
		},
		{
			x: v,
			y: g
		},
		{
			x: _,
			y: g
		},
		...hd(-_, -g / 2, d, 50, 270, 90)
	], b = Z(y), x = p.path(b, m), S = s.insert(() => x, ":first-child");
	return S.attr("class", "basic label-container outer-path"), f && t.look !== "handDrawn" && S.selectChildren("path").attr("style", f), r && t.look !== "handDrawn" && S.selectChildren("path").attr("style", r), S.attr("transform", `translate(${-l / 2}, ${-u / 2})`), Y(t, S), t.intersect = function(e) {
		return Q.polygon(t, y, e);
	}, s;
}
i(uf, "curvedTrapezoid");
async function df(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let { shapeSvg: i, bbox: a, label: o } = await J(e, t, X(t)), s = t.padding ?? 20, c = Math.max(a.width + s * 2, t.width ?? 0, 100), l = Math.min(Math.max(c * .23, 16), 56), u = l * .27, d = Math.max(a.height + s * 2, t.height ? t.height - (2 * l - u) : 0), f = Math.min(c * .177, d * .45), p = d + 2 * l - u, m = -p / 2, h = m + 2 * l - u, g = i.insert("g", ":first-child").attr("class", "basic label-container"), { cssStyles: _ } = t;
	if (t.look === "handDrawn") {
		let e = q.svg(i), n = U(t, {}), r = e.path(vd(-c / 2, h, c, d, f), n), a = e.circle(0, m + l, l * 2, n);
		g.insert(() => a, ":first-child"), g.insert(() => r, ":first-child"), _ && g.attr("style", _);
	} else g.append("rect").attr("x", -c / 2).attr("y", h).attr("width", c).attr("height", d).attr("rx", f).attr("ry", f).attr("style", r), g.append("circle").attr("cx", 0).attr("cy", m + l).attr("r", l).attr("style", r);
	Y(t, g);
	let v = h + d / 2;
	o.attr("transform", `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${v - a.height / 2 - (a.y - (a.top ?? 0))})`);
	let y = m + l, b = Math.asin(Math.min(1, (h - y) / l)) * 180 / Math.PI, x = [
		...hd(0, -y, l, 24, 180 + b, -b),
		...hd(-(-c / 2 + f), -(h + f), f, 12, 90, 0),
		...hd(-(-c / 2 + f), -(p / 2 - f), f, 12, 360, 270),
		...hd(-(c / 2 - f), -(p / 2 - f), f, 12, 270, 180),
		...hd(-(c / 2 - f), -(h + f), f, 12, 180, 90)
	];
	return t.intersect = function(e) {
		return Q.polygon(t, x, e);
	}, i;
}
i(df, "person");
var ff = /* @__PURE__ */ i((e, t, n, r, i, a) => [
	`M${e},${t + a}`,
	`a${i},${a} 0,0,0 ${n},0`,
	`a${i},${a} 0,0,0 ${-n},0`,
	`l0,${r}`,
	`a${i},${a} 0,0,0 ${n},0`,
	`l0,${-r}`
].join(" "), "createCylinderPathD"), pf = /* @__PURE__ */ i((e, t, n, r, i, a) => [
	`M${e},${t + a}`,
	`M${e + n},${t + a}`,
	`a${i},${a} 0,0,0 ${-n},0`,
	`l0,${r}`,
	`a${i},${a} 0,0,0 ${n},0`,
	`l0,${-r}`
].join(" "), "createOuterCylinderPathD"), mf = /* @__PURE__ */ i((e, t, n, r, i, a) => [`M${e - n / 2},${-r / 2}`, `a${i},${a} 0,0,0 ${n},0`].join(" "), "createInnerCylinderPathD"), hf = 8, gf = 8;
async function _f(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let i = t.padding ?? 0, a = t.look === "neo" ? 24 : i, o = t.look === "neo" ? 24 : i, s = t.width ?? 0;
	if (t.width && (t.width -= o, t.width < gf && (t.width = gf)), t.height) {
		let e = s / 2 / (2.5 + s / 50);
		t.height = t.height - a - e * 3, t.height < hf && (t.height = hf);
	}
	let { shapeSvg: c, bbox: l, label: u } = await J(e, t, X(t)), d = Math.max(t.width ?? 0, l.width) + o, f = d / 2, p = f / (2.5 + d / 50), m = Math.max(t.height ?? 0, l.height) + a + p, h, { cssStyles: g } = t;
	if (t.look === "handDrawn") {
		let e = q.svg(c), n = pf(0, 0, d, m, f, p), r = mf(0, p, d, m, f, p), i = U(t, {}), a = e.path(n, i), o = e.path(r, U(t, { fill: "none" }));
		h = c.insert(() => o, ":first-child"), h = c.insert(() => a, ":first-child"), h.attr("class", "basic label-container"), g && h.attr("style", g);
	} else {
		let e = ff(0, 0, d, m, f, p);
		h = c.insert("path", ":first-child").attr("d", e).attr("class", "basic label-container outer-path").attr("style", Us(g)).attr("style", r);
	}
	return h.attr("label-offset-y", p), h.attr("transform", `translate(${-d / 2}, ${-(m / 2 + p)})`), Y(t, h), u.attr("transform", `translate(${-(l.width / 2) - (l.x - (l.left ?? 0))}, ${-(l.height / 2) + (t.padding ?? 0) / 1.5 - (l.y - (l.top ?? 0))})`), t.intersect = function(e) {
		let n = Q.rect(t, e), r = n.x - (t.x ?? 0);
		if (f != 0 && (Math.abs(r) < (t.width ?? 0) / 2 || Math.abs(r) == (t.width ?? 0) / 2 && Math.abs(n.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - p)) {
			let i = p * p * (1 - r * r / (f * f));
			i > 0 && (i = Math.sqrt(i)), i = p - i, e.y - (t.y ?? 0) > 0 && (i = -i), n.y += i;
		}
		return n;
	}, c;
}
i(_f, "cylinder");
async function vf(e, t, n) {
	let { labelStyles: r, nodeStyles: i } = H(t);
	t.labelStyle = r;
	let { shapeSvg: a, bbox: o } = await J(e, t, X(t)), s = Math.max(o.width + n.labelPaddingX * 2, t?.width || 0), c = Math.max(o.height + n.labelPaddingY * 2, t?.height || 0), l = -s / 2, u = -c / 2, d, { rx: f, ry: p } = t, { cssStyles: m } = t;
	if (n?.rx && n.ry && (f = n.rx, p = n.ry), t.look === "handDrawn") {
		let e = q.svg(a), n = U(t, {}), r = f || p ? e.path(vd(l, u, s, c, f || 0), n) : e.rectangle(l, u, s, c, n);
		d = a.insert(() => r, ":first-child"), d.attr("class", "basic label-container").attr("style", Us(m));
	} else d = a.insert("rect", ":first-child"), d.attr("class", "basic label-container").attr("style", i).attr("rx", Us(f)).attr("ry", Us(p)).attr("x", l).attr("y", u).attr("width", s).attr("height", c);
	return Y(t, d, t.look === "handDrawn" ? void 0 : {
		width: s,
		height: c
	}), t.calcIntersect = function(e, t) {
		return Q.rect(e, t);
	}, t.intersect = function(e) {
		return Q.rect(t, e);
	}, a;
}
i(vf, "drawRect");
async function yf(e, t) {
	let { cssClasses: n, labelPaddingX: r, labelPaddingY: i, padding: a, width: o, height: s } = t, c = await vf(e, t, {
		rx: 0,
		ry: 0,
		labelPaddingX: r ?? (a ?? 0) * 2,
		labelPaddingY: i ?? a ?? 0
	});
	if (t.look === "handDrawn") {
		let e = q.svg(c), n = U(t, {}), r = c.select(".basic.label-container > path:nth-child(2)"), i = r.node();
		if (!i) return c;
		let a = null;
		if (i instanceof SVGGraphicsElement) a = i.getBBox();
		else return c;
		return c.insert(() => e.line(a.x, a.y, a.x + a.width, a.y, n), ".basic.label-container g.label"), c.insert(() => e.line(a.x, a.y + a.height, a.x + a.width, a.y + a.height, n), ".basic.label-container g.label"), r.remove(), c;
	}
	let l = c.select(".basic.label-container"), u = (Number(l.attr("width")) || o) ?? 0, d = (Number(l.attr("height")) || s) ?? 0;
	return u > 0 && d > 0 && l.attr("stroke-dasharray", `${u} ${d}`), c;
}
i(yf, "datastore");
async function bf(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let i = t.look === "neo" ? 16 : t.padding ?? 0, a = t.look === "neo" ? 16 : t.padding ?? 0, { shapeSvg: o, bbox: s, label: c } = await J(e, t, X(t)), l = s.width + i, u = s.height + a, d = u * .2, f = -l / 2, p = -u / 2 - d / 2, { cssStyles: m } = t, h = q.svg(o), g = U(t, {});
	t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
	let _ = [
		{
			x: f,
			y: p + d
		},
		{
			x: -f,
			y: p + d
		},
		{
			x: -f,
			y: -p
		},
		{
			x: f,
			y: -p
		},
		{
			x: f,
			y: p
		},
		{
			x: -f,
			y: p
		},
		{
			x: -f,
			y: p + d
		}
	], v = h.polygon(_.map((e) => [e.x, e.y]), g), y = o.insert(() => v, ":first-child");
	return y.attr("class", "basic label-container outer-path"), m && t.look !== "handDrawn" && y.selectAll("path").attr("style", m), r && t.look !== "handDrawn" && y.selectAll("path").attr("style", r), c.attr("transform", `translate(${f + (t.padding ?? 0) / 2 - (s.x - (s.left ?? 0))}, ${p + d + (t.padding ?? 0) / 2 - (s.y - (s.top ?? 0))})`), Y(t, y), t.intersect = function(e) {
		return Q.rect(t, e);
	}, o;
}
i(bf, "dividedRectangle");
async function xf(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t), i = t.look === "neo" ? 12 : 5;
	t.labelStyle = n;
	let a = t.padding ?? 0, o = t.look === "neo" ? 16 : a, { shapeSvg: s, bbox: c } = await J(e, t, X(t)), l = (t?.width ? t?.width / 2 : c.width / 2) + (o ?? 0), u = l - i, d, { cssStyles: f } = t;
	if (t.look === "handDrawn") {
		let e = q.svg(s), n = U(t, {
			roughness: .2,
			strokeWidth: 2.5
		}), r = U(t, {
			roughness: .2,
			strokeWidth: 1.5
		}), i = e.circle(0, 0, l * 2, n), a = e.circle(0, 0, u * 2, r);
		d = s.insert("g", ":first-child"), d.attr("class", Us(t.cssClasses)).attr("style", Us(f)), d.node()?.appendChild(i), d.node()?.appendChild(a);
	} else {
		d = s.insert("g", ":first-child");
		let e = d.insert("circle", ":first-child"), t = d.insert("circle");
		d.attr("class", "basic label-container").attr("style", r), e.attr("class", "outer-circle").attr("style", r).attr("r", l).attr("cx", 0).attr("cy", 0), t.attr("class", "inner-circle").attr("style", r).attr("r", u).attr("cx", 0).attr("cy", 0);
	}
	return Y(t, d), t.intersect = function(e) {
		return p.info("DoubleCircle intersect", t, l, e), Q.circle(t, l, e);
	}, s;
}
i(xf, "doublecircle");
function Sf(e, t, { config: { themeVariables: n } }) {
	let { labelStyles: r, nodeStyles: i } = H(t);
	t.label = "", t.labelStyle = r;
	let a = e.insert("g").attr("class", X(t)).attr("id", t.domId ?? t.id), { cssStyles: o } = t, s = q.svg(a), { nodeBorder: c } = n, l = U(t, { fillStyle: "solid" });
	t.look !== "handDrawn" && (l.roughness = 0);
	let u = s.circle(0, 0, 14, l), d = a.insert(() => u, ":first-child");
	return d.selectAll("path").attr("style", `fill: ${c} !important;`), o && o.length > 0 && t.look !== "handDrawn" && d.selectAll("path").attr("style", o), i && t.look !== "handDrawn" && d.selectAll("path").attr("style", i), Y(t, d), t.intersect = function(e) {
		return p.info("filledCircle intersect", t, {
			radius: 7,
			point: e
		}), Q.circle(t, 7, e);
	}, a;
}
i(Sf, "filledCircle");
var Cf = 10, wf = 10;
async function Tf(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let i = t.padding ?? 0, a = t.look === "neo" ? i * 2 : i;
	(t.width || t.height) && (t.height = t?.height ?? 0, t.height < Cf && (t.height = Cf), t.width = (t?.width ?? 0) - a - a / 2, t.width < wf && (t.width = wf));
	let { shapeSvg: o, bbox: s, label: c } = await J(e, t, X(t)), l = (t?.width ? t?.width : s.width) + (a ?? 0), u = t?.height ? t?.height : l + s.height, d = u, f = [
		{
			x: 0,
			y: -u
		},
		{
			x: d,
			y: -u
		},
		{
			x: d / 2,
			y: 0
		}
	], { cssStyles: m } = t, h = q.svg(o), g = U(t, {});
	t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
	let _ = Z(f), v = h.path(_, g), y = o.insert(() => v, ":first-child").attr("transform", `translate(${-u / 2}, ${u / 2})`).attr("class", "outer-path");
	return m && t.look !== "handDrawn" && y.selectChildren("path").attr("style", m), r && t.look !== "handDrawn" && y.selectChildren("path").attr("style", r), t.width = l, t.height = u, Y(t, y), c.attr("transform", `translate(${-s.width / 2 - (s.x - (s.left ?? 0))}, ${-u / 2 + (t.padding ?? 0) / 2 + (s.y - (s.top ?? 0))})`), t.intersect = function(e) {
		return p.info("Triangle intersect", t, f, e), Q.polygon(t, f, e);
	}, o;
}
i(Tf, "flippedTriangle");
async function Ef(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let { shapeSvg: i, bbox: a, label: o } = await J(e, t, X(t)), s = t.padding ?? 12, c = Math.max(a.width + s * 2, t.width ?? 0, 90), l = a.height + s * 2, u = Math.max(Math.min(l * .16, 14), 8), d = Math.max(l + u, t.height ?? 0), f = d - u, p = Math.max(c * .38, 28), m = -d / 2, h = [
		{
			x: -c / 2,
			y: m
		},
		{
			x: -c / 2 + p,
			y: m
		},
		{
			x: -c / 2 + p,
			y: m + u
		},
		{
			x: c / 2,
			y: m + u
		},
		{
			x: c / 2,
			y: d / 2
		},
		{
			x: -c / 2,
			y: d / 2
		}
	], g = [
		`M${h[0].x},${h[0].y}`,
		...h.slice(1).map((e) => `L${e.x},${e.y}`),
		"Z"
	].join(" "), { cssStyles: _ } = t, v;
	if (t.look === "handDrawn") {
		let e = q.svg(i).path(g, U(t, {}));
		v = i.insert(() => e, ":first-child").attr("class", "basic label-container"), _ && v.attr("style", _);
	} else v = i.insert("path", ":first-child").attr("d", g).attr("class", "basic label-container").attr("style", r);
	t.look === "handDrawn" ? Y(t, v) : Y(t, v, {
		width: c,
		height: d
	});
	let y = m + u + f / 2;
	return o.attr("transform", `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${y - a.height / 2 - (a.y - (a.top ?? 0))})`), t.intersect = function(e) {
		return Q.polygon(t, h, e);
	}, i;
}
i(Ef, "folder");
function Df(e, t, { dir: n, config: { state: r, themeVariables: i } }) {
	let { nodeStyles: a } = H(t);
	t.label = "";
	let o = e.insert("g").attr("class", X(t)).attr("id", t.domId ?? t.id), { cssStyles: s } = t, c = Math.max(70, t?.width ?? 0), l = Math.max(10, t?.height ?? 0);
	n === "LR" && (c = Math.max(10, t?.width ?? 0), l = Math.max(70, t?.height ?? 0));
	let u = -1 * c / 2, d = -1 * l / 2, f = q.svg(o), p = U(t, {
		stroke: i.lineColor,
		fill: i.lineColor
	});
	t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
	let m = f.rectangle(u, d, c, l, p), h = o.insert(() => m, ":first-child");
	s && t.look !== "handDrawn" && h.selectAll("path").attr("style", s), a && t.look !== "handDrawn" && h.selectAll("path").attr("style", a), Y(t, h);
	let g = r?.padding ?? 0;
	return t.width && t.height && (t.width += g / 2 || 0, t.height += g / 2 || 0), t.intersect = function(e) {
		return Q.rect(t, e);
	}, o;
}
i(Df, "forkJoin");
async function Of(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let i = t.look === "neo" ? 16 : t.padding ?? 0, a = t.look === "neo" ? 12 : t.padding ?? 0;
	(t.width || t.height) && (t.height = (t?.height ?? 0) - a * 2, t.height < 10 && (t.height = 10), t.width = (t?.width ?? 0) - i * 2, t.width < 15 && (t.width = 15));
	let { shapeSvg: o, bbox: s } = await J(e, t, X(t)), c = (t?.width ? t?.width : Math.max(15, s.width)) + i * 2, l = (t?.height ? t?.height : Math.max(10, s.height)) + a * 2, u = l / 2, { cssStyles: d } = t, f = q.svg(o), m = U(t, {});
	t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
	let h = [
		{
			x: -c / 2,
			y: -l / 2
		},
		{
			x: c / 2 - u,
			y: -l / 2
		},
		...hd(-c / 2 + u, 0, u, 50, 90, 270),
		{
			x: c / 2 - u,
			y: l / 2
		},
		{
			x: -c / 2,
			y: l / 2
		}
	], g = Z(h), _ = f.path(g, m), v = o.insert(() => _, ":first-child");
	return v.attr("class", "basic label-container outer-path"), d && t.look !== "handDrawn" && v.selectChildren("path").attr("style", d), r && t.look !== "handDrawn" && v.selectChildren("path").attr("style", r), Y(t, v), t.intersect = function(e) {
		return p.info("Pill intersect", t, {
			radius: u,
			point: e
		}), Q.polygon(t, h, e);
	}, o;
}
i(Of, "halfRoundedRectangle");
var kf = /* @__PURE__ */ i((e, t, n, r, i) => [
	`M${e + i},${t}`,
	`L${e + n - i},${t}`,
	`L${e + n},${t - r / 2}`,
	`L${e + n - i},${t - r}`,
	`L${e + i},${t - r}`,
	`L${e},${t - r / 2}`,
	"Z"
].join(" "), "createHexagonPathD");
async function Af(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t), i = t.look === "neo" ? 3.5 : 4;
	t.labelStyle = n;
	let a = t.padding ?? 0, o = t.look === "neo" ? 70 : a, s = t.look === "neo" ? 32 : a;
	if (t.width || t.height) {
		let e = (t.height ?? 0) / i;
		t.width = (t?.width ?? 0) - 2 * e - s, t.height = (t.height ?? 0) - o;
	}
	let { shapeSvg: c, bbox: l } = await J(e, t, X(t)), u = (t?.height ? t?.height : l.height) + o, d = u / i, f = (t?.width ? t?.width : l.width) + 2 * d + s, p = [
		{
			x: d,
			y: 0
		},
		{
			x: f - d,
			y: 0
		},
		{
			x: f,
			y: -u / 2
		},
		{
			x: f - d,
			y: -u
		},
		{
			x: d,
			y: -u
		},
		{
			x: 0,
			y: -u / 2
		}
	], m, { cssStyles: h } = t;
	if (t.look === "handDrawn") {
		let e = q.svg(c), n = U(t, {}), r = kf(0, 0, f, u, d), i = e.path(r, n);
		m = c.insert(() => i, ":first-child").attr("transform", `translate(${-f / 2}, ${u / 2})`), h && m.attr("style", h);
	} else m = Bd(c, f, u, p);
	return r && m.attr("style", r), t.width = f, t.height = u, Y(t, m), t.intersect = function(e) {
		return Q.polygon(t, p, e);
	}, c;
}
i(Af, "hexagon");
async function jf(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.label = "", t.labelStyle = n;
	let { shapeSvg: i } = await J(e, t, X(t)), a = Math.max(30, t?.width ?? 0), o = Math.max(30, t?.height ?? 0), { cssStyles: s } = t, c = q.svg(i), l = U(t, {});
	t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
	let u = [
		{
			x: 0,
			y: 0
		},
		{
			x: a,
			y: 0
		},
		{
			x: 0,
			y: o
		},
		{
			x: a,
			y: o
		}
	], d = Z(u), f = c.path(d, l), m = i.insert(() => f, ":first-child");
	return m.attr("class", "basic label-container outer-path"), s && t.look !== "handDrawn" && m.selectChildren("path").attr("style", s), r && t.look !== "handDrawn" && m.selectChildren("path").attr("style", r), m.attr("transform", `translate(${-a / 2}, ${-o / 2})`), Y(t, m), t.intersect = function(e) {
		return p.info("Pill intersect", t, { points: u }), Q.polygon(t, u, e);
	}, i;
}
i(jf, "hourglass");
async function Mf(e, t, { config: { themeVariables: n, flowchart: r } }) {
	let { labelStyles: i } = H(t);
	t.labelStyle = i;
	let a = t.assetHeight ?? 48, o = t.assetWidth ?? 48, s = Math.max(a, o), c = r?.wrappingWidth;
	t.width = Math.max(s, c ?? 0);
	let { shapeSvg: l, bbox: u, label: d } = await J(e, t, "icon-shape default"), f = t.pos === "t", m = s, h = s, { nodeBorder: g } = n, { stylesMap: _ } = ga(t), v = -h / 2, y = -m / 2, b = t.label ? 8 : 0, x = q.svg(l), S = U(t, {
		stroke: "none",
		fill: "none"
	});
	t.look !== "handDrawn" && (S.roughness = 0, S.fillStyle = "solid");
	let C = x.rectangle(v, y, h, m, S), w = Math.max(h, u.width), T = m + u.height + b, E = x.rectangle(-w / 2, -T / 2, w, T, {
		...S,
		fill: "transparent",
		stroke: "none"
	}), D = l.insert(() => C, ":first-child"), O = l.insert(() => E);
	if (t.icon) {
		let e = l.append("g");
		e.html(`<g>${await Qa(t.icon, {
			height: s,
			width: s,
			fallbackPrefix: ""
		})}</g>`);
		let n = e.node().getBBox(), r = n.width, i = n.height, a = n.x, o = n.y;
		e.attr("transform", `translate(${-r / 2 - a},${f ? u.height / 2 + b / 2 - i / 2 - o : -u.height / 2 - b / 2 - i / 2 - o})`), e.attr("style", `color: ${_.get("stroke") ?? g};`);
	}
	return d.attr("transform", `translate(${-u.width / 2 - (u.x - (u.left ?? 0))},${f ? -T / 2 : T / 2 - u.height})`), D.attr("transform", `translate(0,${f ? u.height / 2 + b / 2 : -u.height / 2 - b / 2})`), Y(t, O), t.intersect = function(e) {
		if (p.info("iconSquare intersect", t, e), !t.label) return Q.rect(t, e);
		let n = t.x ?? 0, r = t.y ?? 0, i = t.height ?? 0, a = [];
		return a = f ? [
			{
				x: n - u.width / 2,
				y: r - i / 2
			},
			{
				x: n + u.width / 2,
				y: r - i / 2
			},
			{
				x: n + u.width / 2,
				y: r - i / 2 + u.height + b
			},
			{
				x: n + h / 2,
				y: r - i / 2 + u.height + b
			},
			{
				x: n + h / 2,
				y: r + i / 2
			},
			{
				x: n - h / 2,
				y: r + i / 2
			},
			{
				x: n - h / 2,
				y: r - i / 2 + u.height + b
			},
			{
				x: n - u.width / 2,
				y: r - i / 2 + u.height + b
			}
		] : [
			{
				x: n - h / 2,
				y: r - i / 2
			},
			{
				x: n + h / 2,
				y: r - i / 2
			},
			{
				x: n + h / 2,
				y: r - i / 2 + m
			},
			{
				x: n + u.width / 2,
				y: r - i / 2 + m
			},
			{
				x: n + u.width / 2 / 2,
				y: r + i / 2
			},
			{
				x: n - u.width / 2,
				y: r + i / 2
			},
			{
				x: n - u.width / 2,
				y: r - i / 2 + m
			},
			{
				x: n - h / 2,
				y: r - i / 2 + m
			}
		], Q.polygon(t, a, e);
	}, l;
}
i(Mf, "icon");
async function Nf(e, t, { config: { themeVariables: n, flowchart: r } }) {
	let { labelStyles: i } = H(t);
	t.labelStyle = i;
	let a = t.assetHeight ?? 48, o = t.assetWidth ?? 48, s = Math.max(a, o), c = r?.wrappingWidth;
	t.width = Math.max(s, c ?? 0);
	let { shapeSvg: l, bbox: u, label: d } = await J(e, t, "icon-shape default"), f = t.label ? 8 : 0, m = t.pos === "t", { nodeBorder: h, mainBkg: g } = n, { stylesMap: _ } = ga(t), v = q.svg(l), y = U(t, {});
	t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid"), y.stroke = _.get("fill") ?? g;
	let b = l.append("g");
	t.icon && b.html(`<g>${await Qa(t.icon, {
		height: s,
		width: s,
		fallbackPrefix: ""
	})}</g>`);
	let x = b.node().getBBox(), S = x.width, C = x.height, w = x.x, T = x.y, E = Math.max(S, C) * Math.SQRT2 + 40, D = v.circle(0, 0, E, y), O = Math.max(E, u.width), k = E + u.height + f, ee = v.rectangle(-O / 2, -k / 2, O, k, {
		...y,
		fill: "transparent",
		stroke: "none"
	}), A = l.insert(() => D, ":first-child"), te = l.insert(() => ee);
	return b.attr("transform", `translate(${-S / 2 - w},${m ? u.height / 2 + f / 2 - C / 2 - T : -u.height / 2 - f / 2 - C / 2 - T})`), b.attr("style", `color: ${_.get("stroke") ?? h};`), d.attr("transform", `translate(${-u.width / 2 - (u.x - (u.left ?? 0))},${m ? -k / 2 : k / 2 - u.height})`), A.attr("transform", `translate(0,${m ? u.height / 2 + f / 2 : -u.height / 2 - f / 2})`), Y(t, te), t.intersect = function(e) {
		return p.info("iconSquare intersect", t, e), Q.rect(t, e);
	}, l;
}
i(Nf, "iconCircle");
async function Pf(e, t, { config: { themeVariables: n, flowchart: r } }) {
	let { labelStyles: i } = H(t);
	t.labelStyle = i;
	let a = t.assetHeight ?? 48, o = t.assetWidth ?? 48, s = Math.max(a, o), c = r?.wrappingWidth;
	t.width = Math.max(s, c ?? 0);
	let { shapeSvg: l, bbox: u, halfPadding: d, label: f } = await J(e, t, "icon-shape default"), m = t.pos === "t", h = s + d * 2, g = s + d * 2, { nodeBorder: _, mainBkg: v } = n, { stylesMap: y } = ga(t), b = -g / 2, x = -h / 2, S = t.label ? 8 : 0, C = q.svg(l), w = U(t, {});
	t.look !== "handDrawn" && (w.roughness = 0, w.fillStyle = "solid"), w.stroke = y.get("fill") ?? v;
	let T = C.path(vd(b, x, g, h, 5), w), E = Math.max(g, u.width), D = h + u.height + S, O = C.rectangle(-E / 2, -D / 2, E, D, {
		...w,
		fill: "transparent",
		stroke: "none"
	}), k = l.insert(() => T, ":first-child").attr("class", "icon-shape2"), ee = l.insert(() => O);
	if (t.icon) {
		let e = l.append("g");
		e.html(`<g>${await Qa(t.icon, {
			height: s,
			width: s,
			fallbackPrefix: ""
		})}</g>`);
		let n = e.node().getBBox(), r = n.width, i = n.height, a = n.x, o = n.y;
		e.attr("transform", `translate(${-r / 2 - a},${m ? u.height / 2 + S / 2 - i / 2 - o : -u.height / 2 - S / 2 - i / 2 - o})`), e.attr("style", `color: ${y.get("stroke") ?? _};`);
	}
	return f.attr("transform", `translate(${-u.width / 2 - (u.x - (u.left ?? 0))},${m ? -D / 2 : D / 2 - u.height})`), k.attr("transform", `translate(0,${m ? u.height / 2 + S / 2 : -u.height / 2 - S / 2})`), Y(t, ee), t.intersect = function(e) {
		if (p.info("iconSquare intersect", t, e), !t.label) return Q.rect(t, e);
		let n = t.x ?? 0, r = t.y ?? 0, i = t.height ?? 0, a = [];
		return a = m ? [
			{
				x: n - u.width / 2,
				y: r - i / 2
			},
			{
				x: n + u.width / 2,
				y: r - i / 2
			},
			{
				x: n + u.width / 2,
				y: r - i / 2 + u.height + S
			},
			{
				x: n + g / 2,
				y: r - i / 2 + u.height + S
			},
			{
				x: n + g / 2,
				y: r + i / 2
			},
			{
				x: n - g / 2,
				y: r + i / 2
			},
			{
				x: n - g / 2,
				y: r - i / 2 + u.height + S
			},
			{
				x: n - u.width / 2,
				y: r - i / 2 + u.height + S
			}
		] : [
			{
				x: n - g / 2,
				y: r - i / 2
			},
			{
				x: n + g / 2,
				y: r - i / 2
			},
			{
				x: n + g / 2,
				y: r - i / 2 + h
			},
			{
				x: n + u.width / 2,
				y: r - i / 2 + h
			},
			{
				x: n + u.width / 2 / 2,
				y: r + i / 2
			},
			{
				x: n - u.width / 2,
				y: r + i / 2
			},
			{
				x: n - u.width / 2,
				y: r - i / 2 + h
			},
			{
				x: n - g / 2,
				y: r - i / 2 + h
			}
		], Q.polygon(t, a, e);
	}, l;
}
i(Pf, "iconRounded");
async function Ff(e, t, { config: { themeVariables: n, flowchart: r } }) {
	let { labelStyles: i } = H(t);
	t.labelStyle = i;
	let a = t.assetHeight ?? 48, o = t.assetWidth ?? 48, s = Math.max(a, o), c = r?.wrappingWidth;
	t.width = Math.max(s, c ?? 0);
	let { shapeSvg: l, bbox: u, halfPadding: d, label: f } = await J(e, t, "icon-shape default"), m = t.pos === "t", h = s + d * 2, g = s + d * 2, { nodeBorder: _, mainBkg: v } = n, { stylesMap: y } = ga(t), b = -g / 2, x = -h / 2, S = t.label ? 8 : 0, C = q.svg(l), w = U(t, {});
	t.look !== "handDrawn" && (w.roughness = 0, w.fillStyle = "solid"), w.stroke = y.get("fill") ?? v;
	let T = C.path(vd(b, x, g, h, .1), w), E = Math.max(g, u.width), D = h + u.height + S, O = C.rectangle(-E / 2, -D / 2, E, D, {
		...w,
		fill: "transparent",
		stroke: "none"
	}), k = l.insert(() => T, ":first-child"), ee = l.insert(() => O);
	if (t.icon) {
		let e = l.append("g");
		e.html(`<g>${await Qa(t.icon, {
			height: s,
			width: s,
			fallbackPrefix: ""
		})}</g>`);
		let n = e.node().getBBox(), r = n.width, i = n.height, a = n.x, o = n.y;
		e.attr("transform", `translate(${-r / 2 - a},${m ? u.height / 2 + S / 2 - i / 2 - o : -u.height / 2 - S / 2 - i / 2 - o})`), e.attr("style", `color: ${y.get("stroke") ?? _};`);
	}
	return f.attr("transform", `translate(${-u.width / 2 - (u.x - (u.left ?? 0))},${m ? -D / 2 : D / 2 - u.height})`), k.attr("transform", `translate(0,${m ? u.height / 2 + S / 2 : -u.height / 2 - S / 2})`), Y(t, ee), t.intersect = function(e) {
		if (p.info("iconSquare intersect", t, e), !t.label) return Q.rect(t, e);
		let n = t.x ?? 0, r = t.y ?? 0, i = t.height ?? 0, a = [];
		return a = m ? [
			{
				x: n - u.width / 2,
				y: r - i / 2
			},
			{
				x: n + u.width / 2,
				y: r - i / 2
			},
			{
				x: n + u.width / 2,
				y: r - i / 2 + u.height + S
			},
			{
				x: n + g / 2,
				y: r - i / 2 + u.height + S
			},
			{
				x: n + g / 2,
				y: r + i / 2
			},
			{
				x: n - g / 2,
				y: r + i / 2
			},
			{
				x: n - g / 2,
				y: r - i / 2 + u.height + S
			},
			{
				x: n - u.width / 2,
				y: r - i / 2 + u.height + S
			}
		] : [
			{
				x: n - g / 2,
				y: r - i / 2
			},
			{
				x: n + g / 2,
				y: r - i / 2
			},
			{
				x: n + g / 2,
				y: r - i / 2 + h
			},
			{
				x: n + u.width / 2,
				y: r - i / 2 + h
			},
			{
				x: n + u.width / 2 / 2,
				y: r + i / 2
			},
			{
				x: n - u.width / 2,
				y: r + i / 2
			},
			{
				x: n - u.width / 2,
				y: r - i / 2 + h
			},
			{
				x: n - g / 2,
				y: r - i / 2 + h
			}
		], Q.polygon(t, a, e);
	}, l;
}
i(Ff, "iconSquare");
async function If(e, t, { config: { flowchart: n } }) {
	let r = new Image();
	r.src = t?.img ?? "", await r.decode();
	let i = Number(r.naturalWidth.toString().replace("px", "")), a = Number(r.naturalHeight.toString().replace("px", ""));
	t.imageAspectRatio = i / a;
	let { labelStyles: o } = H(t);
	t.labelStyle = o;
	let s = n?.wrappingWidth;
	t.defaultWidth = n?.wrappingWidth;
	let c = Math.max(t.label ? s ?? 0 : 0, t?.assetWidth ?? i), l = t.constraint === "on" && t?.assetHeight ? t.assetHeight * t.imageAspectRatio : c, u = t.constraint === "on" ? l / t.imageAspectRatio : t?.assetHeight ?? a;
	t.width = Math.max(l, s ?? 0);
	let { shapeSvg: d, bbox: f, label: m } = await J(e, t, "image-shape default"), h = t.pos === "t", g = -l / 2, _ = -u / 2, v = t.label ? 8 : 0, y = q.svg(d), b = U(t, {});
	t.look !== "handDrawn" && (b.roughness = 0, b.fillStyle = "solid");
	let x = y.rectangle(g, _, l, u, b), S = Math.max(l, f.width), C = u + f.height + v, w = y.rectangle(-S / 2, -C / 2, S, C, {
		...b,
		fill: "none",
		stroke: "none"
	}), T = d.insert(() => x, ":first-child"), E = d.insert(() => w);
	if (t.img) {
		let e = d.append("image");
		e.attr("href", t.img), e.attr("width", l), e.attr("height", u), e.attr("preserveAspectRatio", "none"), e.attr("transform", `translate(${-l / 2},${h ? C / 2 - u : -C / 2})`);
	}
	return m.attr("transform", `translate(${-f.width / 2 - (f.x - (f.left ?? 0))},${h ? -u / 2 - f.height / 2 - v / 2 : u / 2 - f.height / 2 + v / 2})`), T.attr("transform", `translate(0,${h ? f.height / 2 + v / 2 : -f.height / 2 - v / 2})`), Y(t, E), t.intersect = function(e) {
		if (p.info("iconSquare intersect", t, e), !t.label) return Q.rect(t, e);
		let n = t.x ?? 0, r = t.y ?? 0, i = t.height ?? 0, a = [];
		return a = h ? [
			{
				x: n - f.width / 2,
				y: r - i / 2
			},
			{
				x: n + f.width / 2,
				y: r - i / 2
			},
			{
				x: n + f.width / 2,
				y: r - i / 2 + f.height + v
			},
			{
				x: n + l / 2,
				y: r - i / 2 + f.height + v
			},
			{
				x: n + l / 2,
				y: r + i / 2
			},
			{
				x: n - l / 2,
				y: r + i / 2
			},
			{
				x: n - l / 2,
				y: r - i / 2 + f.height + v
			},
			{
				x: n - f.width / 2,
				y: r - i / 2 + f.height + v
			}
		] : [
			{
				x: n - l / 2,
				y: r - i / 2
			},
			{
				x: n + l / 2,
				y: r - i / 2
			},
			{
				x: n + l / 2,
				y: r - i / 2 + u
			},
			{
				x: n + f.width / 2,
				y: r - i / 2 + u
			},
			{
				x: n + f.width / 2 / 2,
				y: r + i / 2
			},
			{
				x: n - f.width / 2,
				y: r + i / 2
			},
			{
				x: n - f.width / 2,
				y: r - i / 2 + u
			},
			{
				x: n - l / 2,
				y: r - i / 2 + u
			}
		], Q.polygon(t, a, e);
	}, d;
}
i(If, "imageSquare");
async function Lf(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let i = t.padding ?? 0, a = i, o = t.look === "neo" ? i * 2 : i, { shapeSvg: s, bbox: c } = await J(e, t, X(t)), l = Math.max(c.height + a * 2, t.height ?? 0), u = Math.max(c.width + o * 2, (t.width ?? 0) - l), d = [
		{
			x: 0,
			y: 0
		},
		{
			x: u,
			y: 0
		},
		{
			x: u + 3 * l / 6,
			y: -l
		},
		{
			x: -3 * l / 6,
			y: -l
		}
	], f, { cssStyles: p } = t;
	if (t.look === "handDrawn") {
		let e = q.svg(s), n = U(t, {}), r = Z(d), i = e.path(r, n);
		f = s.insert(() => i, ":first-child").attr("transform", `translate(${-u / 2}, ${l / 2})`), p && f.attr("style", p);
	} else f = Bd(s, u, l, d);
	return r && f.attr("style", r), t.width = u, t.height = l, Y(t, f), t.intersect = function(e) {
		return Q.polygon(t, d, e);
	}, s;
}
i(Lf, "inv_trapezoid");
async function Rf(e, t) {
	let { shapeSvg: n, bbox: r, label: i } = await J(e, t, "label"), a = n.insert("rect", ":first-child");
	return a.attr("width", .1).attr("height", .1), n.attr("class", "label edgeLabel"), i.attr("transform", `translate(${-(r.width / 2) - (r.x - (r.left ?? 0))}, ${-(r.height / 2) - (r.y - (r.top ?? 0))})`), Y(t, a), t.intersect = function(e) {
		return Q.rect(t, e);
	}, n;
}
i(Rf, "labelRect");
async function zf(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let i = t.padding ?? 0, a = i, o = t.look === "neo" ? i * 2 : i, { shapeSvg: s, bbox: c } = await J(e, t, X(t)), l = Math.max(c.height + a, t.height ?? 0), u = Math.max(c.width + o, (t.width ?? 0) - l), d = [
		{
			x: 0,
			y: 0
		},
		{
			x: u + 3 * l / 6,
			y: 0
		},
		{
			x: u,
			y: -l
		},
		{
			x: -(3 * l) / 6,
			y: -l
		}
	], f, { cssStyles: p } = t;
	if (t.look === "handDrawn") {
		let e = q.svg(s), n = U(t, {}), r = Z(d), i = e.path(r, n);
		f = s.insert(() => i, ":first-child").attr("transform", `translate(${-u / 2}, ${l / 2})`), p && f.attr("style", p);
	} else f = Bd(s, u, l, d);
	return r && f.attr("style", r), t.width = u, t.height = l, Y(t, f), t.intersect = function(e) {
		return Q.polygon(t, d, e);
	}, s;
}
i(zf, "lean_left");
async function Bf(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let i = t.padding ?? 0, a = i, o = t.look === "neo" ? i * 2 : i, { shapeSvg: s, bbox: c } = await J(e, t, X(t)), l = Math.max(c.height + a, t.height ?? 0), u = Math.max(c.width + o, (t.width ?? 0) - l), d = [
		{
			x: -3 * l / 6,
			y: 0
		},
		{
			x: u,
			y: 0
		},
		{
			x: u + 3 * l / 6,
			y: -l
		},
		{
			x: 0,
			y: -l
		}
	], f, { cssStyles: p } = t;
	if (t.look === "handDrawn") {
		let e = q.svg(s), n = U(t, {}), r = Z(d), i = e.path(r, n);
		f = s.insert(() => i, ":first-child").attr("transform", `translate(${-u / 2}, ${l / 2})`), p && f.attr("style", p);
	} else f = Bd(s, u, l, d);
	return r && f.attr("style", r), t.width = u, t.height = l, Y(t, f), t.intersect = function(e) {
		return Q.polygon(t, d, e);
	}, s;
}
i(Bf, "lean_right");
function Vf(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.label = "", t.labelStyle = n;
	let i = e.insert("g").attr("class", X(t)).attr("id", t.domId ?? t.id), { cssStyles: a } = t, o = Math.max(35, t?.width ?? 0), s = Math.max(35, t?.height ?? 0), c = [
		{
			x: o,
			y: 0
		},
		{
			x: 0,
			y: s + 7 / 2
		},
		{
			x: o - 14,
			y: s + 7 / 2
		},
		{
			x: 0,
			y: 2 * s
		},
		{
			x: o,
			y: s - 7 / 2
		},
		{
			x: 14,
			y: s - 7 / 2
		}
	], l = q.svg(i), u = U(t, {});
	t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
	let d = Z(c), f = l.path(d, u), m = i.insert(() => f, ":first-child");
	return m.attr("class", "outer-path"), a && t.look !== "handDrawn" && m.selectAll("path").attr("style", a), r && t.look !== "handDrawn" && m.selectAll("path").attr("style", r), m.attr("transform", `translate(-${o / 2},${-s})`), Y(t, m), t.intersect = function(e) {
		return p.info("lightningBolt intersect", t, e), Q.polygon(t, c, e);
	}, i;
}
i(Vf, "lightningBolt");
var Hf = /* @__PURE__ */ i((e, t, n, r, i, a, o) => [
	`M${e},${t + a}`,
	`a${i},${a} 0,0,0 ${n},0`,
	`a${i},${a} 0,0,0 ${-n},0`,
	`l0,${r}`,
	`a${i},${a} 0,0,0 ${n},0`,
	`l0,${-r}`,
	`M${e},${t + a + o}`,
	`a${i},${a} 0,0,0 ${n},0`
].join(" "), "createCylinderPathD"), Uf = /* @__PURE__ */ i((e, t, n, r, i, a, o) => [
	`M${e},${t + a}`,
	`M${e + n},${t + a}`,
	`a${i},${a} 0,0,0 ${-n},0`,
	`l0,${r}`,
	`a${i},${a} 0,0,0 ${n},0`,
	`l0,${-r}`,
	`M${e},${t + a + o}`,
	`a${i},${a} 0,0,0 ${n},0`
].join(" "), "createOuterCylinderPathD"), Wf = /* @__PURE__ */ i((e, t, n, r, i, a) => [`M${e - n / 2},${-r / 2}`, `a${i},${a} 0,0,0 ${n},0`].join(" "), "createInnerCylinderPathD"), Gf = 10, Kf = 10;
async function qf(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let i = t.padding ?? 0, a = t.look === "neo" ? 16 : i, o = t.look === "neo" ? 24 : i;
	if (t.width || t.height) {
		let e = t.width ?? 0;
		t.width = (t.width ?? 0) - a, t.width < Kf && (t.width = Kf);
		let n = e / 2 / (2.5 + e / 50);
		t.height = (t.height ?? 0) - o - n * 3, t.height < Gf && (t.height = Gf);
	}
	let { shapeSvg: s, bbox: c, label: l } = await J(e, t, X(t)), u = (t?.width ? t?.width : c.width) + a * 2, d = u / 2, f = d / (2.5 + u / 50), p = (t?.height ? t?.height : c.height) + f + o * 2, m = p * .1, h, { cssStyles: g } = t;
	if (t.look === "handDrawn") {
		let e = q.svg(s), n = Uf(0, 0, u, p, d, f, m), r = Wf(0, f, u, p, d, f), i = U(t, {}), a = e.path(n, i), o = e.path(r, i);
		s.insert(() => o, ":first-child").attr("class", "line"), h = s.insert(() => a, ":first-child"), h.attr("class", "basic label-container"), g && h.attr("style", g);
	} else {
		let e = Hf(0, 0, u, p, d, f, m);
		h = s.insert("path", ":first-child").attr("d", e).attr("class", "basic label-container outer-path").attr("style", Us(g)).attr("style", r);
	}
	return h.attr("label-offset-y", f), h.attr("transform", `translate(${-u / 2}, ${-(p / 2 + f)})`), Y(t, h), l.attr("transform", `translate(${-(c.width / 2) - (c.x - (c.left ?? 0))}, ${-(c.height / 2) + f - (c.y - (c.top ?? 0))})`), t.intersect = function(e) {
		let n = Q.rect(t, e), r = n.x - (t.x ?? 0);
		if (d != 0 && (Math.abs(r) < (t.width ?? 0) / 2 || Math.abs(r) == (t.width ?? 0) / 2 && Math.abs(n.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - f)) {
			let i = f * f * (1 - r * r / (d * d));
			i > 0 && (i = Math.sqrt(i)), i = f - i, e.y - (t.y ?? 0) > 0 && (i = -i), n.y += i;
		}
		return n;
	}, s;
}
i(qf, "linedCylinder");
async function Jf(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let i = t.padding ?? 0, a = t.look === "neo" ? 16 : i, o = t.look === "neo" ? 12 : i;
	(t.width || t.height) && (t.width = (t.width ?? 0) * 10 / 11 - a * 2, t.width < 10 && (t.width = 10), t.height = (t?.height ?? 0) - o * 2, t.height < 10 && (t.height = 10));
	let { shapeSvg: s, bbox: c, label: l } = await J(e, t, X(t)), u = (t?.width ? t?.width : c.width) + (a ?? 0) * 2, d = (t?.height ? t?.height : c.height) + (o ?? 0) * 2, f = t.look === "neo" ? d / 4 : d / 8, p = d + f, { cssStyles: m } = t, h = q.svg(s), g = U(t, {});
	t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
	let _ = [
		{
			x: -u / 2 - u / 2 * .1,
			y: -p / 2
		},
		{
			x: -u / 2 - u / 2 * .1,
			y: p / 2
		},
		...md(-u / 2 - u / 2 * .1, p / 2, u / 2 + u / 2 * .1, p / 2, f, .8),
		{
			x: u / 2 + u / 2 * .1,
			y: -p / 2
		},
		{
			x: -u / 2 - u / 2 * .1,
			y: -p / 2
		},
		{
			x: -u / 2,
			y: -p / 2
		},
		{
			x: -u / 2,
			y: p / 2 * 1.1
		},
		{
			x: -u / 2,
			y: -p / 2
		}
	], v = h.polygon(_.map((e) => [e.x, e.y]), g), y = s.insert(() => v, ":first-child");
	return y.attr("class", "basic label-container outer-path"), m && t.look !== "handDrawn" && y.selectAll("path").attr("style", m), r && t.look !== "handDrawn" && y.selectAll("path").attr("style", r), y.attr("transform", `translate(0,${-f / 2})`), l.attr("transform", `translate(${-u / 2 + (t.padding ?? 0) + u / 2 * .1 / 2 - (c.x - (c.left ?? 0))},${-d / 2 + (t.padding ?? 0) - f / 2 - (c.y - (c.top ?? 0))})`), Y(t, y), t.intersect = function(e) {
		return Q.polygon(t, _, e);
	}, s;
}
i(Jf, "linedWaveEdgedRect");
async function Yf(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let i = t.padding ?? 0, a = t.look === "neo" ? 16 : i, o = t.look === "neo" ? 12 : i, s = t.look === "neo" ? 10 : 5;
	(t.width || t.height) && (t.width = Math.max((t?.width ?? 0) - a * 2 - 2 * s, 10), t.height = Math.max((t?.height ?? 0) - o * 2 - 2 * s, 10));
	let { shapeSvg: c, bbox: l, label: u } = await J(e, t, X(t)), d = (t?.width ? t?.width : l.width) + a * 2 + 2 * s, f = (t?.height ? t?.height : l.height) + o * 2 + 2 * s, p = d - 2 * s, m = f - 2 * s, h = -p / 2, g = -m / 2, { cssStyles: _ } = t, v = q.svg(c), y = U(t, {}), b = [
		{
			x: h - s,
			y: g + s
		},
		{
			x: h - s,
			y: g + m + s
		},
		{
			x: h + p - s,
			y: g + m + s
		},
		{
			x: h + p - s,
			y: g + m
		},
		{
			x: h + p,
			y: g + m
		},
		{
			x: h + p,
			y: g + m - s
		},
		{
			x: h + p + s,
			y: g + m - s
		},
		{
			x: h + p + s,
			y: g - s
		},
		{
			x: h + s,
			y: g - s
		},
		{
			x: h + s,
			y: g
		},
		{
			x: h,
			y: g
		},
		{
			x: h,
			y: g + s
		}
	], x = [
		{
			x: h,
			y: g + s
		},
		{
			x: h + p - s,
			y: g + s
		},
		{
			x: h + p - s,
			y: g + m
		},
		{
			x: h + p,
			y: g + m
		},
		{
			x: h + p,
			y: g
		},
		{
			x: h,
			y: g
		}
	];
	t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
	let S = Z(b), C = v.path(S, y), w = Z(x), T = v.path(w, y);
	t.look !== "handDrawn" && (C = gd(C), T = gd(T));
	let E = c.insert("g", ":first-child");
	return E.insert(() => C), E.insert(() => T), E.attr("class", "basic label-container outer-path"), _ && t.look !== "handDrawn" && E.selectAll("path").attr("style", _), r && t.look !== "handDrawn" && E.selectAll("path").attr("style", r), u.attr("transform", `translate(${-(l.width / 2) - s - (l.x - (l.left ?? 0))}, ${-(l.height / 2) + s - (l.y - (l.top ?? 0))})`), Y(t, E), t.intersect = function(e) {
		return Q.polygon(t, b, e);
	}, c;
}
i(Yf, "multiRect");
async function Xf(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let { shapeSvg: i, bbox: a, label: o } = await J(e, t, X(t)), s = t.padding ?? 0, c = t.look === "neo" ? 16 : s, l = t.look === "neo" ? 12 : s, u = !0;
	(t.width || t.height) && (u = !1, t.width = (t?.width ?? 0) - c * 2, t.height = (t?.height ?? 0) - l * 3);
	let d = Math.max(a.width, t?.width ?? 0) + c * 2, f = Math.max(a.height, t?.height ?? 0) + l * 3, p = t.look === "neo" ? f / 4 : f / 8, m = f + (u ? p / 2 : -p / 2), h = -d / 2, g = -m / 2, { cssStyles: _ } = t, v = md(h - 10, g + m + 10, h + d - 10, g + m + 10, p, .8), y = v?.[v.length - 1], b = [
		{
			x: h - 10,
			y: g + 10
		},
		{
			x: h - 10,
			y: g + m + 10
		},
		...v,
		{
			x: h + d - 10,
			y: y.y - 10
		},
		{
			x: h + d,
			y: y.y - 10
		},
		{
			x: h + d,
			y: y.y - 20
		},
		{
			x: h + d + 10,
			y: y.y - 20
		},
		{
			x: h + d + 10,
			y: g - 10
		},
		{
			x: h + 10,
			y: g - 10
		},
		{
			x: h + 10,
			y: g
		},
		{
			x: h,
			y: g
		},
		{
			x: h,
			y: g + 10
		}
	], x = [
		{
			x: h,
			y: g + 10
		},
		{
			x: h + d - 10,
			y: g + 10
		},
		{
			x: h + d - 10,
			y: y.y - 10
		},
		{
			x: h + d,
			y: y.y - 10
		},
		{
			x: h + d,
			y: g
		},
		{
			x: h,
			y: g
		}
	], S = q.svg(i), C = U(t, {});
	t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
	let w = Z(b), T = S.path(w, C), E = Z(x), D = S.path(E, C), O = i.insert(() => T, ":first-child");
	return O.insert(() => D), O.attr("class", "basic label-container outer-path"), _ && t.look !== "handDrawn" && O.selectAll("path").attr("style", _), r && t.look !== "handDrawn" && O.selectAll("path").attr("style", r), O.attr("transform", `translate(0,${-p / 2})`), o.attr("transform", `translate(${-(a.width / 2) - 10 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + 10 - p / 2 - (a.y - (a.top ?? 0))})`), Y(t, O), t.intersect = function(e) {
		return Q.polygon(t, b, e);
	}, i;
}
i(Xf, "multiWaveEdgedRectangle");
async function Zf(e, t, { config: { themeVariables: n } }) {
	let { labelStyles: r, nodeStyles: i } = H(t);
	t.labelStyle = r, t.useHtmlLabels || zn(B()) || (t.centerLabel = !0);
	let { shapeSvg: a, bbox: o, label: s } = await J(e, t, X(t)), c = Math.max(o.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = Math.max(o.height + (t.padding ?? 0) * 2, t?.height ?? 0), u = -c / 2, d = -l / 2, { cssStyles: f } = t, p = q.svg(a), m = U(t, {
		fill: n.noteBkgColor,
		stroke: n.noteBorderColor
	});
	t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
	let h = p.rectangle(u, d, c, l, m), g = a.insert(() => h, ":first-child");
	return g.attr("class", "basic label-container outer-path"), s.attr("class", "label noteLabel"), f && t.look !== "handDrawn" && g.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && g.selectAll("path").attr("style", i), s.attr("transform", `translate(${-o.width / 2 - (o.x - (o.left ?? 0))}, ${-(o.height / 2) - (o.y - (o.top ?? 0))})`), Y(t, g), t.intersect = function(e) {
		return Q.rect(t, e);
	}, a;
}
i(Zf, "note");
var Qf = /* @__PURE__ */ i((e, t, n) => [
	`M${e + n / 2},${t}`,
	`L${e + n},${t - n / 2}`,
	`L${e + n / 2},${t - n}`,
	`L${e},${t - n / 2}`,
	"Z"
].join(" "), "createDecisionBoxPathD");
async function $f(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let { shapeSvg: i, bbox: a } = await J(e, t, X(t)), o = a.width + (t.padding ?? 0) + (a.height + (t.padding ?? 0)), s = .5, c = [
		{
			x: o / 2,
			y: 0
		},
		{
			x: o,
			y: -o / 2
		},
		{
			x: o / 2,
			y: -o
		},
		{
			x: 0,
			y: -o / 2
		}
	], l, { cssStyles: u } = t;
	if (t.look === "handDrawn") {
		let e = q.svg(i), n = U(t, {}), r = Qf(0, 0, o), a = e.path(r, n);
		l = i.insert(() => a, ":first-child").attr("transform", `translate(${-o / 2 + s}, ${o / 2})`), u && l.attr("style", u);
	} else l = Bd(i, o, o, c), l.attr("transform", `translate(${-o / 2 + s}, ${o / 2})`);
	return r && l.attr("style", r), Y(t, l), t.calcIntersect = function(e, t) {
		let n = e.width, r = [
			{
				x: n / 2,
				y: 0
			},
			{
				x: n,
				y: -n / 2
			},
			{
				x: n / 2,
				y: -n
			},
			{
				x: 0,
				y: -n / 2
			}
		], i = Q.polygon(e, r, t);
		return {
			x: i.x - .5,
			y: i.y - .5
		};
	}, t.intersect = function(e) {
		return this.calcIntersect(t, e);
	}, i;
}
i($f, "question");
async function ep(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let i = t.padding ?? 0, a = t.look === "neo" ? 21 : i ?? 0, o = t.look === "neo" ? 12 : i ?? 0, { shapeSvg: s, bbox: c, label: l } = await J(e, t, X(t)), u = c.width + (t.look === "neo" ? a * 2 : a), d = Math.max(c.height + (t.look === "neo" ? o * 2 : o), t.height ?? 0), f = d / 4, p = -Math.max(u, (t.width ?? 0) - f) / 2, m = -d / 2, h = m / 2, g = [
		{
			x: p + h,
			y: m
		},
		{
			x: p,
			y: 0
		},
		{
			x: p + h,
			y: -m
		},
		{
			x: -p,
			y: -m
		},
		{
			x: -p,
			y: m
		}
	], { cssStyles: _ } = t, v = q.svg(s), y = U(t, {});
	t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
	let b = Z(g), x = v.path(b, y), S = s.insert(() => x, ":first-child");
	return S.attr("class", "basic label-container outer-path"), _ && t.look !== "handDrawn" && S.selectAll("path").attr("style", _), r && t.look !== "handDrawn" && S.selectAll("path").attr("style", r), S.attr("transform", `translate(${-h / 2},0)`), l.attr("transform", `translate(${-h / 2 - c.width / 2 - (c.x - (c.left ?? 0))}, ${-(c.height / 2) - (c.y - (c.top ?? 0))})`), Y(t, S), t.intersect = function(e) {
		return Q.polygon(t, g, e);
	}, s;
}
i(ep, "rect_left_inv_arrow");
async function tp(e, t) {
	let { labelStyles: r, nodeStyles: i } = H(t);
	t.labelStyle = r;
	let a;
	a = t.cssClasses ? "node " + t.cssClasses : "node default";
	let o = e.insert("g").attr("class", a).attr("id", t.domId || t.id), s = o.insert("g"), c = o.insert("g").attr("class", "label").attr("style", i), l = t.description, u = t.label, d = await yd(c, u, t.labelStyle, !0, !0), f = {
		width: 0,
		height: 0
	};
	if (zn(V())) {
		let e = d.children[0], t = n(d);
		f = e.getBoundingClientRect(), t.attr("width", f.width), t.attr("height", f.height);
	}
	p.info("Text 2", l);
	let m = l || [], h = d.getBBox(), g = await yd(c, Array.isArray(m) ? m.join("<br/>") : m, t.labelStyle, !0, !0), _ = g.children[0], v = n(g);
	f = _.getBoundingClientRect(), v.attr("width", f.width), v.attr("height", f.height);
	let y = (t.padding || 0) / 2;
	n(g).attr("transform", "translate( " + (f.width > h.width ? 0 : (h.width - f.width) / 2) + ", " + (h.height + y + 5) + ")"), n(d).attr("transform", "translate( " + (f.width < h.width ? 0 : -(h.width - f.width) / 2) + ", 0)"), f = c.node().getBBox(), c.attr("transform", "translate(" + -f.width / 2 + ", " + (-f.height / 2 - y + 3) + ")");
	let b = f.width + (t.padding || 0), x = f.height + (t.padding || 0), S = -f.width / 2 - y, C = -f.height / 2 - y, w, T;
	if (t.look === "handDrawn") {
		let e = q.svg(o), n = U(t, {}), r = e.path(vd(S, C, b, x, t.rx || 0), n), i = e.line(-f.width / 2 - y, -f.height / 2 - y + h.height + y, f.width / 2 + y, -f.height / 2 - y + h.height + y, n);
		T = o.insert(() => (p.debug("Rough node insert CXC", r), i), ":first-child"), w = o.insert(() => (p.debug("Rough node insert CXC", r), r), ":first-child");
	} else w = s.insert("rect", ":first-child"), T = s.insert("line"), w.attr("class", "outer title-state").attr("style", i).attr("x", -f.width / 2 - y).attr("y", -f.height / 2 - y).attr("width", f.width + (t.padding || 0)).attr("height", f.height + (t.padding || 0)), T.attr("class", "divider").attr("x1", -f.width / 2 - y).attr("x2", f.width / 2 + y).attr("y1", -f.height / 2 - y + h.height + y).attr("y2", -f.height / 2 - y + h.height + y);
	return Y(t, w), t.intersect = function(e) {
		return Q.rect(t, e);
	}, o;
}
i(tp, "rectWithTitle");
async function np(e, t, { config: { themeVariables: n } }) {
	let r = n?.radius ?? 5;
	return vf(e, t, {
		rx: r,
		ry: r,
		labelPaddingX: (t?.padding ?? 0) * 1,
		labelPaddingY: (t?.padding ?? 0) * 1
	});
}
i(np, "roundedRect");
var rp = 8;
async function ip(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let i = t.look === "neo" ? 16 : t.padding ?? 0, a = t.look === "neo" ? 12 : t.padding ?? 0, { shapeSvg: o, bbox: s, label: c } = await J(e, t, X(t)), l = (t?.width ?? s.width) + i * 2 + (t.look === "neo" ? rp : rp * 2), u = (t?.height ?? s.height) + a * 2, d = l - rp, f = u, p = rp - l / 2, m = -u / 2, { cssStyles: h } = t, g = q.svg(o), _ = U(t, {});
	t.look !== "handDrawn" && (_.roughness = 0, _.fillStyle = "solid");
	let v = [
		{
			x: p,
			y: m
		},
		{
			x: p + d,
			y: m
		},
		{
			x: p + d,
			y: m + f
		},
		{
			x: p - rp,
			y: m + f
		},
		{
			x: p - rp,
			y: m
		},
		{
			x: p,
			y: m
		},
		{
			x: p,
			y: m + f
		}
	], y = g.polygon(v.map((e) => [e.x, e.y]), _), b = o.insert(() => y, ":first-child");
	return b.attr("class", "basic label-container outer-path").attr("style", Us(h)), r && t.look !== "handDrawn" && b.selectAll("path").attr("style", r), h && t.look !== "handDrawn" && b.selectAll("path").attr("style", r), c.attr("transform", `translate(${rp / 2 - s.width / 2 - (s.x - (s.left ?? 0))}, ${-(s.height / 2) - (s.y - (s.top ?? 0))})`), Y(t, b), t.intersect = function(e) {
		return Q.rect(t, e);
	}, o;
}
i(ip, "shadedProcess");
async function ap(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let i = t.padding ?? 0, a = t.look === "neo" ? 16 : i, o = t.look === "neo" ? 12 : i;
	(t.width || t.height) && (t.width = Math.max((t?.width ?? 0) - a * 2, 10), t.height = Math.max((t?.height ?? 0) / 1.5 - o * 2, 10));
	let { shapeSvg: s, bbox: c, label: l } = await J(e, t, X(t)), u = (t?.width ? t?.width : c.width) + a * 2, d = ((t?.height ? t?.height : c.height) + o * 2) * 1.5, f = u, p = d / 1.5, m = -f / 2, h = -p / 2, { cssStyles: g } = t, _ = q.svg(s), v = U(t, {});
	t.look !== "handDrawn" && (v.roughness = 0, v.fillStyle = "solid");
	let y = [
		{
			x: m,
			y: h
		},
		{
			x: m,
			y: h + p
		},
		{
			x: m + f,
			y: h + p
		},
		{
			x: m + f,
			y: h - p / 2
		}
	], b = Z(y), x = _.path(b, v), S = s.insert(() => x, ":first-child");
	return S.attr("class", "basic label-container  outer-path"), g && t.look !== "handDrawn" && S.selectChildren("path").attr("style", g), r && t.look !== "handDrawn" && S.selectChildren("path").attr("style", r), S.attr("transform", `translate(0, ${p / 4})`), l.attr("transform", `translate(${-f / 2 + (t.padding ?? 0) - (c.x - (c.left ?? 0))}, ${-p / 4 + (t.padding ?? 0) - (c.y - (c.top ?? 0))})`), Y(t, S), t.intersect = function(e) {
		return Q.polygon(t, y, e);
	}, s;
}
i(ap, "slopedRect");
async function op(e, t) {
	let n = t.padding ?? 0, r = t.look === "neo" ? 16 : n * 2, i = t.look === "neo" ? 12 : n;
	return vf(e, t, {
		rx: 0,
		ry: 0,
		labelPaddingX: t.labelPaddingX ?? r,
		labelPaddingY: i
	});
}
i(op, "squareRect");
async function sp(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let i = t.padding ?? 0, a = t.look === "neo" ? 20 : i, o = t.look === "neo" ? 12 : i, { shapeSvg: s, bbox: c } = await J(e, t, X(t)), l = c.height + (t.look === "neo" ? o * 2 : o), u = c.width + l / 4 + (t.look === "neo" ? a * 2 : a), d = l / 2, { cssStyles: f } = t, p = q.svg(s), m = U(t, {});
	t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
	let h = [
		{
			x: -u / 2 + d,
			y: -l / 2
		},
		{
			x: u / 2 - d,
			y: -l / 2
		},
		...hd(-u / 2 + d, 0, d, 50, 90, 270),
		{
			x: u / 2 - d,
			y: l / 2
		},
		...hd(u / 2 - d, 0, d, 50, 270, 450)
	], g = Z(h), _ = p.path(g, m), v = s.insert(() => _, ":first-child");
	return v.attr("class", "basic label-container outer-path"), f && t.look !== "handDrawn" && v.selectChildren("path").attr("style", f), r && t.look !== "handDrawn" && v.selectChildren("path").attr("style", r), Y(t, v), t.intersect = function(e) {
		return Q.polygon(t, h, e);
	}, s;
}
i(sp, "stadium");
async function cp(e, t) {
	return vf(e, t, {
		rx: t.look === "neo" ? 3 : 5,
		ry: t.look === "neo" ? 3 : 5
	});
}
i(cp, "state");
function lp(e, t, { config: { themeVariables: n } }) {
	let { labelStyles: r, nodeStyles: i } = H(t);
	t.labelStyle = r;
	let { cssStyles: a } = t, { lineColor: o, stateBorder: s, nodeBorder: c, nodeShadow: l } = n;
	(t.width || t.height) && ((t.width ?? 0) < 14 && (t.width = 14), (t.height ?? 0) < 14 && (t.height = 14)), t.width ||= 14, t.height ||= 14;
	let u = e.insert("g").attr("class", "node default").attr("id", t.domId ?? t.id), d = q.svg(u), f = U(t, {});
	t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
	let p = d.circle(0, 0, t.width, {
		...f,
		stroke: o,
		strokeWidth: 2
	}), m = s ?? c, h = (t.width ?? 0) * 5 / 14, g = d.circle(0, 0, h, {
		...f,
		fill: m,
		stroke: m,
		strokeWidth: 2,
		fillStyle: "solid"
	}), _ = u.insert(() => p, ":first-child");
	if (_.insert(() => g), t.look !== "handDrawn" && _.attr("class", "outer-path"), a && _.selectAll("path").attr("style", a), i && _.selectAll("path").attr("style", i), t.width < 25 && l && t.look !== "handDrawn") {
		let t = e.node()?.ownerSVGElement?.id ?? "", n = t ? `${t}-drop-shadow-small` : "drop-shadow-small";
		_.attr("style", `filter:url(#${n})`);
	}
	return Y(t, _), t.intersect = function(e) {
		return Q.circle(t, (t.width ?? 0) / 2, e);
	}, u;
}
i(lp, "stateEnd");
function up(e, t, { config: { themeVariables: n } }) {
	let { lineColor: r, nodeShadow: i } = n;
	(t.width || t.height) && ((t.width ?? 0) < 14 && (t.width = 14), (t.height ?? 0) < 14 && (t.height = 14)), t.width ||= 14, t.height ||= 14;
	let a = e.insert("g").attr("class", "node default").attr("id", t.domId || t.id), o;
	if (t.look === "handDrawn") {
		let e = q.svg(a).circle(0, 0, t.width, ma(r));
		o = a.insert(() => e), o.attr("class", "state-start").attr("r", (t.width ?? 7) / 2).attr("width", t.width ?? 14).attr("height", t.height ?? 14);
	} else o = a.insert("circle", ":first-child"), o.attr("class", "state-start").attr("r", (t.width ?? 7) / 2).attr("width", t.width ?? 14).attr("height", t.height ?? 14);
	if (t.width < 25 && i && t.look !== "handDrawn") {
		let t = e.node()?.ownerSVGElement?.id ?? "", n = t ? `${t}-drop-shadow-small` : "drop-shadow-small";
		o.attr("style", `filter:url(#${n})`);
	}
	return Y(t, o), t.intersect = function(e) {
		return Q.circle(t, (t.width ?? 7) / 2, e);
	}, a;
}
i(up, "stateStart");
var dp = 8;
async function fp(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let i = t?.padding ?? 8, a = t.look === "neo" ? 28 : i, o = t.look === "neo" ? 12 : i, { shapeSvg: s, bbox: c } = await J(e, t, X(t)), l = Math.max(c.width + 2 * dp + a, t.width ?? 0), u = Math.max(c.height + o, t.height ?? 0), d = l - 2 * dp, f = u, p = -l / 2, m = -u / 2, h = [
		{
			x: 0,
			y: 0
		},
		{
			x: d,
			y: 0
		},
		{
			x: d,
			y: -f
		},
		{
			x: 0,
			y: -f
		},
		{
			x: 0,
			y: 0
		},
		{
			x: -8,
			y: 0
		},
		{
			x: d + 8,
			y: 0
		},
		{
			x: d + 8,
			y: -f
		},
		{
			x: -8,
			y: -f
		},
		{
			x: -8,
			y: 0
		}
	];
	if (t.look === "handDrawn") {
		let e = q.svg(s), n = U(t, {}), r = e.rectangle(p, m, d + 16, f, n), i = e.line(p + dp, m, p + dp, m + f, n), a = e.line(p + dp + d, m, p + dp + d, m + f, n);
		s.insert(() => i, ":first-child"), s.insert(() => a, ":first-child");
		let o = s.insert(() => r, ":first-child"), { cssStyles: c } = t;
		o.attr("class", "basic label-container").attr("style", Us(c)), Y(t, o);
	} else {
		let e = Bd(s, d, f, h);
		r && e.attr("style", r), Y(t, e);
	}
	return t.intersect = function(e) {
		return Q.polygon(t, h, e);
	}, s;
}
i(fp, "subroutine");
var pp = .2;
async function mp(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let i = t.padding ?? 0, a = t.look === "neo" ? 16 : i, o = t.look === "neo" ? 12 : i;
	(t.width || t.height) && (t.height = Math.max((t?.height ?? 0) - o * 2, 10), t.width = Math.max((t?.width ?? 0) - a * 2 - pp * (t.height + o * 2), 10));
	let { shapeSvg: s, bbox: c } = await J(e, t, X(t)), l = (t?.height ? t?.height : c.height) + o * 2, u = pp * l, d = pp * l, f = (t?.width ? t?.width : c.width) + a * 2 + u - u, p = l, m = -f / 2, h = -p / 2, { cssStyles: g } = t, _ = q.svg(s), v = U(t, {}), y = [
		{
			x: m - u / 2,
			y: h
		},
		{
			x: m + f + u / 2,
			y: h
		},
		{
			x: m + f + u / 2,
			y: h + p
		},
		{
			x: m - u / 2,
			y: h + p
		}
	], b = [
		{
			x: m + f - u / 2,
			y: h + p
		},
		{
			x: m + f + u / 2,
			y: h + p
		},
		{
			x: m + f + u / 2,
			y: h + p - d
		}
	];
	t.look !== "handDrawn" && (v.roughness = 0, v.fillStyle = "solid");
	let x = Z(y), S = _.path(x, v), C = Z(b), w = _.path(C, {
		...v,
		fillStyle: "solid"
	}), T = s.insert(() => w, ":first-child");
	return T.insert(() => S, ":first-child"), T.attr("class", "basic label-container outer-path"), g && t.look !== "handDrawn" && T.selectAll("path").attr("style", g), r && t.look !== "handDrawn" && T.selectAll("path").attr("style", r), Y(t, T), t.intersect = function(e) {
		return Q.polygon(t, y, e);
	}, s;
}
i(mp, "taggedRect");
async function hp(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let { shapeSvg: i, bbox: a, label: o } = await J(e, t, X(t)), s = Math.max(a.width + (t.padding ?? 0) * 2, t?.width ?? 0), c = Math.max(a.height + (t.padding ?? 0) * 2, t?.height ?? 0), l = c / 8, u = .2 * s, d = .2 * c, f = c + l, { cssStyles: p } = t, m = q.svg(i), h = U(t, {});
	t.look !== "handDrawn" && (h.roughness = 0, h.fillStyle = "solid");
	let g = [
		{
			x: -s / 2 - s / 2 * .1,
			y: f / 2
		},
		...md(-s / 2 - s / 2 * .1, f / 2, s / 2 + s / 2 * .1, f / 2, l, .8),
		{
			x: s / 2 + s / 2 * .1,
			y: -f / 2
		},
		{
			x: -s / 2 - s / 2 * .1,
			y: -f / 2
		}
	], _ = -s / 2 + s / 2 * .1, v = -f / 2 - d * .4, y = [
		{
			x: _ + s - u,
			y: (v + c) * 1.3
		},
		{
			x: _ + s,
			y: v + c - d
		},
		{
			x: _ + s,
			y: (v + c) * .9
		},
		...md(_ + s, (v + c) * 1.25, _ + s - u, (v + c) * 1.3, -c * .02, .5)
	], b = Z(g), x = m.path(b, h), S = Z(y), C = m.path(S, {
		...h,
		fillStyle: "solid"
	}), w = i.insert(() => C, ":first-child");
	return w.insert(() => x, ":first-child"), w.attr("class", "basic label-container outer-path"), p && t.look !== "handDrawn" && w.selectAll("path").attr("style", p), r && t.look !== "handDrawn" && w.selectAll("path").attr("style", r), w.attr("transform", `translate(0,${-l / 2})`), o.attr("transform", `translate(${-s / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-c / 2 + (t.padding ?? 0) - l / 2 - (a.y - (a.top ?? 0))})`), Y(t, w), t.intersect = function(e) {
		return Q.polygon(t, g, e);
	}, i;
}
i(hp, "taggedWaveEdgedRectangle");
async function gp(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let { shapeSvg: i, bbox: a } = await J(e, t, X(t)), o = Math.max(a.width + (t.padding ?? 0), t?.width || 0), s = Math.max(a.height + (t.padding ?? 0), t?.height || 0), c = -o / 2, l = -s / 2, u = i.insert("rect", ":first-child");
	return u.attr("class", "text").attr("style", r).attr("rx", 0).attr("ry", 0).attr("x", c).attr("y", l).attr("width", o).attr("height", s), Y(t, u), t.intersect = function(e) {
		return Q.rect(t, e);
	}, i;
}
i(gp, "text");
var _p = /* @__PURE__ */ i((e, t, n, r, i, a) => `M${e},${t}
    a${i},${a} 0,0,1 0,${-r}
    l${n},0
    a${i},${a} 0,0,1 0,${r}
    M${n},${-r}
    a${i},${a} 0,0,0 0,${r}
    l${-n},0`, "createCylinderPathD"), vp = /* @__PURE__ */ i((e, t, n, r, i, a) => [
	`M${e},${t}`,
	`M${e + n},${t}`,
	`a${i},${a} 0,0,0 0,${-r}`,
	`l${-n},0`,
	`a${i},${a} 0,0,0 0,${r}`,
	`l${n},0`
].join(" "), "createOuterCylinderPathD"), yp = /* @__PURE__ */ i((e, t, n, r, i, a) => [`M${e + n / 2},${-r / 2}`, `a${i},${a} 0,0,0 0,${r}`].join(" "), "createInnerCylinderPathD"), bp = 5, xp = 10;
async function Sp(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let i = t.padding ?? 0, a = t.look === "neo" ? 12 : i / 2, o = t.height ?? 0;
	if (t.height && (t.height -= a, t.height < bp && (t.height = bp)), t.width) {
		let e = o / 2 / (2.5 + o / 50);
		t.width = t.width - a - e * 3, t.width < xp && (t.width = xp);
	}
	let { shapeSvg: s, bbox: c, label: l } = await J(e, t, X(t)), u = Math.max(t.height ?? 0, c.height) + a, d = u / 2, f = d / (2.5 + u / 50), p = Math.max(t.width ?? 0, c.width) + f + a, { cssStyles: m } = t, h;
	if (t.look === "handDrawn") {
		let e = q.svg(s), n = vp(0, 0, p, u, f, d), r = yp(0, 0, p, u, f, d), i = e.path(n, U(t, {})), a = e.path(r, U(t, { fill: "none" }));
		h = s.insert(() => a, ":first-child"), h = s.insert(() => i, ":first-child"), h.attr("class", "basic label-container"), m && h.attr("style", m);
	} else {
		let e = _p(0, 0, p, u, f, d);
		h = s.insert("path", ":first-child").attr("d", e).attr("class", "basic label-container").attr("style", Us(m)).attr("style", r), h.attr("class", "basic label-container outer-path"), m && h.selectAll("path").attr("style", m), r && h.selectAll("path").attr("style", r);
	}
	return h.attr("label-offset-x", f), h.attr("transform", `translate(${-p / 2}, ${u / 2} )`), l.attr("transform", `translate(${-(c.width / 2) - f - (c.x - (c.left ?? 0))}, ${-(c.height / 2) - (c.y - (c.top ?? 0))})`), Y(t, h), t.intersect = function(e) {
		let n = Q.rect(t, e), r = n.y - (t.y ?? 0);
		if (d != 0 && (Math.abs(r) < (t.height ?? 0) / 2 || Math.abs(r) == (t.height ?? 0) / 2 && Math.abs(n.x - (t.x ?? 0)) > (t.width ?? 0) / 2 - f)) {
			let i = f * f * (1 - r * r / (d * d));
			i != 0 && (i = Math.sqrt(Math.abs(i))), i = f - i, e.x - (t.x ?? 0) > 0 && (i = -i), n.x += i;
		}
		return n;
	}, s;
}
i(Sp, "tiltedCylinder");
async function Cp(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let i = t.padding ?? 0, a = (t.look, i), o = t.look === "neo" ? i * 2 : i, { shapeSvg: s, bbox: c } = await J(e, t, X(t)), l = Math.max(c.height + a, t.height ?? 0), u = Math.max(c.width + o, (t.width ?? 0) - l), d = [
		{
			x: -3 * l / 6,
			y: 0
		},
		{
			x: u + 3 * l / 6,
			y: 0
		},
		{
			x: u,
			y: -l
		},
		{
			x: 0,
			y: -l
		}
	], f, { cssStyles: p } = t;
	if (t.look === "handDrawn") {
		let e = q.svg(s), n = U(t, {}), r = Z(d), i = e.path(r, n);
		f = s.insert(() => i, ":first-child").attr("transform", `translate(${-u / 2}, ${l / 2})`), p && f.attr("style", p);
	} else f = Bd(s, u, l, d);
	return r && f.attr("style", r), t.width = u, t.height = l, Y(t, f), t.intersect = function(e) {
		return Q.polygon(t, d, e);
	}, s;
}
i(Cp, "trapezoid");
async function wp(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let i = t.padding ?? 0, a = t.look === "neo" ? 16 : i, o = t.look === "neo" ? 12 : i;
	(t.width || t.height) && (t.height = (t.height ?? 0) - o * 2, t.height < 5 && (t.height = 5), t.width = (t.width ?? 0) - a * 2, t.width < 15 && (t.width = 15));
	let { shapeSvg: s, bbox: c } = await J(e, t, X(t)), l = (t?.width ? t?.width : c.width) + a * 2, u = (t?.height ? t?.height : c.height) + o * 2, { cssStyles: d } = t, f = q.svg(s), p = U(t, {});
	t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
	let m = [
		{
			x: -l / 2 * .8,
			y: -u / 2
		},
		{
			x: l / 2 * .8,
			y: -u / 2
		},
		{
			x: l / 2,
			y: -u / 2 * .6
		},
		{
			x: l / 2,
			y: u / 2
		},
		{
			x: -l / 2,
			y: u / 2
		},
		{
			x: -l / 2,
			y: -u / 2 * .6
		}
	], h = Z(m), g = f.path(h, p), _ = s.insert(() => g, ":first-child");
	return _.attr("class", "basic label-container outer-path"), d && t.look !== "handDrawn" && _.selectChildren("path").attr("style", d), r && t.look !== "handDrawn" && _.selectChildren("path").attr("style", r), Y(t, _), t.intersect = function(e) {
		return Q.polygon(t, m, e);
	}, s;
}
i(wp, "trapezoidalPentagon");
var Tp = 10, Ep = 10;
async function Dp(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let i = t.padding ?? 0, a = t.look === "neo" ? i * 2 : i;
	(t.width || t.height) && (t.width = ((t?.width ?? 0) - a) / 2, t.width < Ep && (t.width = Ep), t.height = t?.height ?? 0, t.height < Tp && (t.height = Tp));
	let { shapeSvg: o, bbox: s, label: c } = await J(e, t, X(t)), l = bn(V().flowchart?.htmlLabels), u = (t?.width ? t?.width : s.width) + a, d = t?.height ? t?.height : u + s.height, f = d, m = [
		{
			x: 0,
			y: 0
		},
		{
			x: f,
			y: 0
		},
		{
			x: f / 2,
			y: -d
		}
	], { cssStyles: h } = t, g = q.svg(o), _ = U(t, {});
	t.look !== "handDrawn" && (_.roughness = 0, _.fillStyle = "solid");
	let v = Z(m), y = g.path(v, _), b = o.insert(() => y, ":first-child").attr("transform", `translate(${-d / 2}, ${d / 2})`).attr("class", "outer-path");
	return h && t.look !== "handDrawn" && b.selectChildren("path").attr("style", h), r && t.look !== "handDrawn" && b.selectChildren("path").attr("style", r), t.width = u, t.height = d, Y(t, b), c.attr("transform", `translate(${-s.width / 2 - (s.x - (s.left ?? 0))}, ${d / 2 - (s.height + (t.padding ?? 0) / (l ? 2 : 1) - (s.y - (s.top ?? 0)))})`), t.intersect = function(e) {
		return p.info("Triangle intersect", t, m, e), Q.polygon(t, m, e);
	}, o;
}
i(Dp, "triangle");
async function Op(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let i = t.padding ?? 0, a = t.look === "neo" ? 16 : i, o = t.look === "neo" ? 12 : i, s = !0;
	(t.width || t.height) && (s = !1, t.width = (t?.width ?? 0) - a * 2, t.width < 10 && (t.width = 10), t.height = (t?.height ?? 0) - o * 2, t.height < 10 && (t.height = 10));
	let { shapeSvg: c, bbox: l, label: u } = await J(e, t, X(t)), d = (t?.width ? t?.width : l.width) + (a ?? 0) * 2, f = (t?.height ? t?.height : l.height) + (o ?? 0) * 2, p = t.look === "neo" ? f / 4 : f / 8, m = f + (s ? p : -p), { cssStyles: h } = t, g = 14 - d, _ = g > 0 ? g / 2 : 0, v = q.svg(c), y = U(t, {});
	t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
	let b = [
		{
			x: -d / 2 - _,
			y: m / 2
		},
		...md(-d / 2 - _, m / 2, d / 2 + _, m / 2, p, .8),
		{
			x: d / 2 + _,
			y: -m / 2
		},
		{
			x: -d / 2 - _,
			y: -m / 2
		}
	], x = Z(b), S = v.path(x, y), C = c.insert(() => S, ":first-child");
	return C.attr("class", "basic label-container outer-path"), h && t.look !== "handDrawn" && C.selectAll("path").attr("style", h), r && t.look !== "handDrawn" && C.selectAll("path").attr("style", r), C.attr("transform", `translate(0,${-p / 2})`), u.attr("transform", `translate(${-d / 2 + (t.padding ?? 0) - (l.x - (l.left ?? 0))},${-f / 2 + (t.padding ?? 0) - p - (l.y - (l.top ?? 0))})`), Y(t, C), t.intersect = function(e) {
		return Q.polygon(t, b, e);
	}, c;
}
i(Op, "waveEdgedRectangle");
async function kp(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let i = t.padding ?? 0, a = t.look === "neo" ? 16 : i, o = t.look === "neo" ? 20 : i;
	if (t.width || t.height) {
		t.width = t?.width ?? 0, t.width < 20 && (t.width = 20), t.height = t?.height ?? 0, t.height < 10 && (t.height = 10);
		let e = Math.min(t.height * .2, t.height / 4);
		t.height = Math.ceil(t.height - o - 20 / 9 * e), t.width -= a * 2;
	}
	let { shapeSvg: s, bbox: c } = await J(e, t, X(t)), l = (t?.width ? t?.width : c.width) + a * 2, u = (t?.height ? t?.height : c.height) + o, d = u / 8, f = u + d * 2, { cssStyles: p } = t, m = q.svg(s), h = U(t, {});
	t.look !== "handDrawn" && (h.roughness = 0, h.fillStyle = "solid");
	let g = [
		{
			x: -l / 2,
			y: f / 2
		},
		...md(-l / 2, f / 2, l / 2, f / 2, d, 1),
		{
			x: l / 2,
			y: -f / 2
		},
		...md(l / 2, -f / 2, -l / 2, -f / 2, d, -1)
	], _ = Z(g), v = m.path(_, h), y = s.insert(() => v, ":first-child");
	return y.attr("class", "basic label-container"), p && t.look !== "handDrawn" && y.selectAll("path").attr("style", p), r && t.look !== "handDrawn" && y.selectAll("path").attr("style", r), Y(t, y), t.intersect = function(e) {
		return Q.polygon(t, g, e);
	}, s;
}
i(kp, "waveRectangle");
var Ap = 10;
async function jp(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let i = t.look === "neo" ? 16 : t.padding ?? 0, a = t.look === "neo" ? 12 : t.padding ?? 0;
	(t.width || t.height) && (t.width = Math.max((t?.width ?? 0) - i * 2 - Ap, 10), t.height = Math.max((t?.height ?? 0) - a * 2 - Ap, 10));
	let { shapeSvg: o, bbox: s, label: c } = await J(e, t, X(t)), l = (t?.width ? t?.width : s.width) + i * 2 + Ap, u = (t?.height ? t?.height : s.height) + a * 2 + Ap, d = l - Ap, f = u - Ap, p = -d / 2, m = -f / 2, { cssStyles: h } = t, g = q.svg(o), _ = U(t, {}), v = [
		{
			x: p - Ap,
			y: m - Ap
		},
		{
			x: p - Ap,
			y: m + f
		},
		{
			x: p + d,
			y: m + f
		},
		{
			x: p + d,
			y: m - Ap
		}
	], y = `M${p - Ap},${m - Ap} L${p + d},${m - Ap} L${p + d},${m + f} L${p - Ap},${m + f} L${p - Ap},${m - Ap}
                M${p - Ap},${m} L${p + d},${m}
                M${p},${m - Ap} L${p},${m + f}`;
	t.look !== "handDrawn" && (_.roughness = 0, _.fillStyle = "solid");
	let b = g.path(y, _), x = o.insert(() => b, ":first-child");
	return x.attr("transform", `translate(${Ap / 2}, ${Ap / 2})`), x.attr("class", "basic label-container outer-path"), h && t.look !== "handDrawn" && x.selectAll("path").attr("style", h), r && t.look !== "handDrawn" && x.selectAll("path").attr("style", r), c.attr("transform", `translate(${-(s.width / 2) + Ap / 2 - (s.x - (s.left ?? 0))}, ${-(s.height / 2) + Ap / 2 - (s.y - (s.top ?? 0))})`), Y(t, x), t.intersect = function(e) {
		return Q.polygon(t, v, e);
	}, o;
}
i(jp, "windowPane");
var Mp = /* @__PURE__ */ new Set(["redux-color", "redux-dark-color"]), Np = /* @__PURE__ */ new Set([
	"redux",
	"redux-dark",
	"redux-color",
	"redux-dark-color"
]);
async function Pp(e, t) {
	let r = t;
	r.alias && (t.label = r.alias);
	let { theme: i, themeVariables: a } = B(), { rowEven: o, rowOdd: s, nodeBorder: c, borderColorArray: l } = a;
	if (t.look === "handDrawn") {
		let { themeVariables: n } = B(), { background: r } = n;
		await Pp(e, {
			...t,
			id: t.id + "-background",
			domId: (t.domId || t.id) + "-background",
			look: "default",
			cssStyles: ["stroke: none", `fill: ${r}`]
		});
	}
	let u = B();
	t.useHtmlLabels = u.htmlLabels;
	let d = u.er?.diagramPadding ?? 10, f = u.er?.entityPadding ?? 6, { cssStyles: p } = t, { labelStyles: m, nodeStyles: h } = H(t);
	if (r.attributes.length === 0 && t.label) {
		let n = {
			rx: 0,
			ry: 0,
			labelPaddingX: d,
			labelPaddingY: d * 1.5
		};
		ks(t.label, u) + n.labelPaddingX * 2 < u.er.minEntityWidth && (t.width = u.er.minEntityWidth);
		let a = await vf(e, t, n);
		if (i != null && Mp.has(i)) {
			let e = r.colorIndex ?? 0;
			a.attr("data-color-id", `color-${e % l.length}`);
		}
		if (!bn(u.htmlLabels)) {
			let e = a.select("text"), t = e.node()?.getBBox();
			e.attr("transform", `translate(${-t.width / 2}, 0)`);
		}
		return a;
	}
	u.htmlLabels || (d *= 1.25, f *= 1.25);
	let g = X(t);
	g ||= "node default";
	let _ = e.insert("g").attr("class", g).attr("id", t.domId || t.id), v = await Fp(_, t.label ?? "", u, 0, 0, ["name"], m);
	v.height += f;
	let y = 0, b = [], x = [], S = 0, C = 0, w = 0, T = 0, E = !0, D = !0;
	for (let e of r.attributes) {
		let t = await Fp(_, e.type, u, 0, y, ["attribute-type"], m);
		S = Math.max(S, t.width + d);
		let n = await Fp(_, e.name, u, 0, y, ["attribute-name"], m);
		C = Math.max(C, n.width + d);
		let r = await Fp(_, e.keys.join(), u, 0, y, ["attribute-keys"], m);
		w = Math.max(w, r.width + d);
		let i = await Fp(_, e.comment, u, 0, y, ["attribute-comment"], m);
		T = Math.max(T, i.width + d);
		let a = Math.max(t.height, n.height, r.height, i.height) + f;
		x.push({
			yOffset: y,
			rowHeight: a
		}), y += a;
	}
	let O = 4;
	w <= d && (E = !1, w = 0, O--), T <= d && (D = !1, T = 0, O--);
	let k = _.node().getBBox();
	if (v.width + d * 2 - (S + C + w + T) > 0) {
		let e = v.width + d * 2 - (S + C + w + T);
		S += e / O, C += e / O, w > 0 && (w += e / O), T > 0 && (T += e / O);
	}
	let ee = S + C + w + T, A = q.svg(_), te = U(t, {});
	t.look !== "handDrawn" && (te.roughness = 0, te.fillStyle = "solid");
	let j = 0;
	x.length > 0 && (j = x.reduce((e, t) => e + (t?.rowHeight ?? 0), 0));
	let M = Math.max(k.width + d * 2, t?.width || 0, ee), N = Math.max((j ?? 0) + v.height, t?.height || 0), ne = -M / 2, P = -N / 2;
	if (_.selectAll("g:not(:first-child)").each((e, t, r) => {
		let i = n(r[t]), a = i.attr("transform"), o = 0, s = 0;
		if (a) {
			let e = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(a);
			e && (o = parseFloat(e[1]), s = parseFloat(e[2]), i.attr("class").includes("attribute-name") ? o += S : i.attr("class").includes("attribute-keys") ? o += S + C : i.attr("class").includes("attribute-comment") && (o += S + C + w));
		}
		i.attr("transform", `translate(${ne + d / 2 + o}, ${s + P + v.height + f / 2})`);
	}), _.select(".name").attr("transform", "translate(" + -v.width / 2 + ", " + (P + f / 2) + ")"), i != null && Mp.has(i)) {
		let e = r.colorIndex ?? 0;
		_.attr("data-color-id", `color-${e % l.length}`);
	}
	let re = A.rectangle(ne, P, M, N, te), F = _.insert(() => re, ":first-child").attr("class", "outer-path").attr("style", p.join(""));
	b.push(0);
	for (let [e, t] of x.entries()) {
		let n = (e + 1) % 2 == 0 && t.yOffset !== 0, r = A.rectangle(ne, v.height + P + t?.yOffset, M, t?.rowHeight, {
			...te,
			fill: n ? o : s,
			stroke: c
		});
		_.insert(() => r, "g.label").attr("style", p.join("")).attr("class", `row-rect-${n ? "even" : "odd"}`);
	}
	let ie = 1e-4, ae = Ip(ne, v.height + P, M + ne, v.height + P, ie), oe = A.polygon(ae.map((e) => [e.x, e.y]), te);
	if (_.insert(() => oe).attr("class", "divider"), ae = Ip(S + ne, v.height + P, S + ne, N + P, ie), oe = A.polygon(ae.map((e) => [e.x, e.y]), te), _.insert(() => oe).attr("class", "divider"), E) {
		let e = S + C + ne;
		ae = Ip(e, v.height + P, e, N + P, ie), oe = A.polygon(ae.map((e) => [e.x, e.y]), te), _.insert(() => oe).attr("class", "divider");
	}
	if (D) {
		let e = S + C + w + ne;
		ae = Ip(e, v.height + P, e, N + P, ie), oe = A.polygon(ae.map((e) => [e.x, e.y]), te), _.insert(() => oe).attr("class", "divider");
	}
	for (let e of b) {
		let t = v.height + P + e;
		ae = Ip(ne, t, M + ne, t, ie), oe = A.polygon(ae.map((e) => [e.x, e.y]), te), _.insert(() => oe).attr("class", "divider");
	}
	if (Y(t, F), h && t.look !== "handDrawn") {
		if (i != null && Np.has(i)) _.selectAll("path").attr("style", h);
		else {
			let e = h.split(";")?.filter((e) => e.includes("stroke"))?.map((e) => `${e}`).join("; ");
			_.selectAll("path").attr("style", e ?? ""), _.selectAll(".row-rect-even path").attr("style", h);
		}
	}
	return t.intersect = function(e) {
		return Q.rect(t, e);
	}, _;
}
i(Pp, "erBox");
async function Fp(e, t, r, i = 0, a = 0, o = [], s = "") {
	let c = e.insert("g").attr("class", `label ${o.join(" ")}`).attr("transform", `translate(${i}, ${a})`).attr("style", s);
	t !== dr(t) && (t = dr(t), t = t.replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
	let l = c.node().appendChild(await tu(c, t, {
		width: ks(t, r) + 100,
		style: s,
		useHtmlLabels: r.htmlLabels
	}, r));
	if (t.includes("&lt;") || t.includes("&gt;")) {
		let e = l.children[0];
		for (e.textContent = e.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">"); e.childNodes[0];) e = e.childNodes[0], e.textContent = e.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
	}
	let u = l.getBBox();
	if (bn(r.htmlLabels)) {
		let e = l.children[0];
		e.style.textAlign = "start";
		let t = n(l);
		u = e.getBoundingClientRect(), t.attr("width", u.width), t.attr("height", u.height);
	}
	return u;
}
i(Fp, "addText");
function Ip(e, t, n, r, i) {
	return e === n ? [
		{
			x: e - i / 2,
			y: t
		},
		{
			x: e + i / 2,
			y: t
		},
		{
			x: n + i / 2,
			y: r
		},
		{
			x: n - i / 2,
			y: r
		}
	] : [
		{
			x: e,
			y: t - i / 2
		},
		{
			x: e,
			y: t + i / 2
		},
		{
			x: n,
			y: r + i / 2
		},
		{
			x: n,
			y: r - i / 2
		}
	];
}
i(Ip, "lineToPolygon");
async function Lp(e, t, n, r, i = n.class.padding ?? 12) {
	let a = r ? 0 : 3, o = e.insert("g").attr("class", X(t)).attr("id", t.domId || t.id), s = null, c = null, l = null, u = null, d = 0, f = 0, p = 0;
	if (s = o.insert("g").attr("class", "annotation-group text"), t.annotations.length > 0) {
		let e = t.annotations[0];
		await Rp(s, { text: `«${e}»` }, 0), d = s.node().getBBox().height;
	}
	c = o.insert("g").attr("class", "label-group text"), await Rp(c, t, 0, ["font-weight: bolder"]);
	let m = c.node().getBBox();
	f = m.height, l = o.insert("g").attr("class", "members-group text");
	let h = 0;
	for (let e of t.members) {
		let t = await Rp(l, e, h, [e.parseClassifier()]);
		h += t + a;
	}
	p = l.node().getBBox().height, p <= 0 && (p = i / 2), u = o.insert("g").attr("class", "methods-group text");
	let g = 0;
	for (let e of t.methods) {
		let t = await Rp(u, e, g, [e.parseClassifier()]);
		g += t + a;
	}
	let _ = o.node().getBBox();
	if (s !== null) {
		let e = s.node().getBBox();
		s.attr("transform", `translate(${-e.width / 2})`);
	}
	return c.attr("transform", `translate(${-m.width / 2}, ${d})`), _ = o.node().getBBox(), l.attr("transform", `translate(0, ${d + f + i * 2})`), _ = o.node().getBBox(), u.attr("transform", `translate(0, ${d + f + (p ? p + i * 4 : i * 2)})`), _ = o.node().getBBox(), {
		shapeSvg: o,
		bbox: _
	};
}
i(Lp, "textHelper");
async function Rp(e, t, r, i = []) {
	let a = e.insert("g").attr("class", "label").attr("style", i.join("; ")), o = B(), s = "useHtmlLabels" in t ? t.useHtmlLabels : bn(o.htmlLabels) ?? !0, c = "";
	c = "text" in t ? t.text : t.label, !s && c.startsWith("\\") && (c = c.substring(1)), _r(c) && (s = !0);
	let l = await tu(a, qr(Vs(c)), {
		width: ks(c, o) + 50,
		classes: "markdown-node-label",
		useHtmlLabels: s
	}, o), u, d = 1;
	if (s) {
		let e = l.children[0], t = n(l);
		d = e.innerHTML.split("<br>").length, e.innerHTML.includes("</math>") && (d += e.innerHTML.split("<mrow>").length - 1), await cd(e), u = e.getBoundingClientRect(), t.attr("width", u.width), t.attr("height", u.height);
	} else {
		i.includes("font-weight: bolder") && n(l).selectAll("tspan").attr("font-weight", ""), d = l.children.length;
		let e = l.children[0];
		(l.textContent === "" || l.textContent.includes("&gt")) && (e.textContent = c[0] + c.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim(), c[1] === " " && (e.textContent = e.textContent[0] + " " + e.textContent.substring(1))), e.textContent === "undefined" && (e.textContent = ""), u = l.getBBox();
	}
	return a.attr("transform", "translate(0," + (-u.height / (2 * d) + r) + ")"), u.height;
}
i(Rp, "addText");
async function zp(e, t) {
	let r = V(), { themeVariables: i } = r, { useGradient: a } = i, o = r.class.padding ?? 12, s = o, c = t.useHtmlLabels ?? bn(r.htmlLabels) ?? !0, l = t;
	l.annotations = l.annotations ?? [], l.members = l.members ?? [], l.methods = l.methods ?? [];
	let { shapeSvg: u, bbox: d } = await Lp(e, t, r, c, s), { labelStyles: f, nodeStyles: p } = H(t);
	t.labelStyle = f, t.cssStyles = l.styles || "";
	let m = l.styles?.join(";") || p || "";
	t.cssStyles ||= m.replaceAll("!important", "").split(";");
	let h = l.members.length === 0 && l.methods.length === 0 && !r.class?.hideEmptyMembersBox, g = q.svg(u), _ = U(t, {});
	t.look !== "handDrawn" && (_.roughness = 0, _.fillStyle = "solid");
	let v = Math.max(t.width ?? 0, d.width), y = Math.max(t.height ?? 0, d.height), b = (t.height ?? 0) > d.height;
	l.members.length === 0 && l.methods.length === 0 ? y += s : l.members.length > 0 && l.methods.length === 0 && (y += s * 2);
	let x = -v / 2, S = -y / 2, C = h ? o * 2 : l.members.length === 0 && l.methods.length === 0 ? -o : 0;
	b && (C = o * 2);
	let w = g.rectangle(x - o, S - o - (h ? o : l.members.length === 0 && l.methods.length === 0 ? -o / 2 : 0), v + 2 * o, y + 2 * o + C, _), T = u.insert(() => w, ":first-child");
	T.attr("class", "basic label-container outer-path");
	let E = T.node().getBBox(), D = u.select(".annotation-group").node().getBBox().height - (h ? o / 2 : 0) || 0, O = u.select(".label-group").node().getBBox().height - (h ? o / 2 : 0) || 0, k = u.select(".members-group").node().getBBox().height - (h ? o / 2 : 0) || 0, ee = (D + O + S + o - (S - o - (h ? o : l.members.length === 0 && l.methods.length === 0 ? -o / 2 : 0))) / 2;
	if (u.selectAll(".text").each((e, t, i) => {
		let a = n(i[t]), d = a.attr("transform"), f = 0;
		if (d) {
			let e = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(d);
			e && (f = parseFloat(e[2]));
		}
		let p = f + S + o - (h ? o : l.members.length === 0 && l.methods.length === 0 ? -o / 2 : 0);
		if (a.attr("class").includes("methods-group")) {
			let e = Math.max(k, s / 2);
			p = b ? Math.max(ee, D + O + e + S + s * 2 + o) + s * 2 : D + O + e + S + s * 4 + o;
		}
		l.members.length === 0 && l.methods.length === 0 && r.class?.hideEmptyMembersBox && (p = l.annotations.length > 0 ? f - s : f), c || (p -= 4);
		let m = x;
		(a.attr("class").includes("label-group") || a.attr("class").includes("annotation-group")) && (m = -a.node()?.getBBox().width / 2 || 0, u.selectAll("text").each(function(e, t, n) {
			window.getComputedStyle(n[t]).textAnchor === "middle" && (m = 0);
		})), a.attr("transform", `translate(${m}, ${p})`);
	}), l.members.length > 0 || l.methods.length > 0 || h) {
		let e = D + O + S + o, n = g.line(E.x, e, E.x + E.width, e + .001, _);
		u.insert(() => n).attr("class", `divider${t.look === "neo" && !a ? " neo-line" : ""}`).attr("style", m);
	}
	if (h || l.members.length > 0 || l.methods.length > 0) {
		let e = D + O + k + S + s * 2 + o, n = g.line(E.x, b ? Math.max(ee, e) : e, E.x + E.width, (b ? Math.max(ee, e) : e) + .001, _);
		u.insert(() => n).attr("class", `divider${t.look === "neo" && !a ? " neo-line" : ""}`).attr("style", m);
	}
	if (l.look !== "handDrawn" && u.selectAll("path").attr("style", m), T.select(":nth-child(2)").attr("style", m), u.selectAll(".divider").select("path").attr("style", m), t.labelStyle ? u.selectAll("span").attr("style", t.labelStyle) : u.selectAll("span").attr("style", m), !c) {
		let e = RegExp(/color\s*:\s*([^;]*)/), t = e.exec(m);
		if (t) {
			let e = t[0].replace("color", "fill");
			u.selectAll("tspan").attr("style", e);
		} else if (f) {
			let t = e.exec(f);
			if (t) {
				let e = t[0].replace("color", "fill");
				u.selectAll("tspan").attr("style", e);
			}
		}
	}
	return Y(t, T), t.intersect = function(e) {
		return Q.rect(t, e);
	}, u;
}
i(zp, "classBox");
async function Bp(e, t) {
	let { labelStyles: r, nodeStyles: i } = H(t);
	t.labelStyle = r;
	let a = t, o = t, s = "verifyMethod" in t, c = X(t), l = V(), { themeVariables: u } = l, { borderColorArray: d, requirementEdgeLabelBackground: f } = u, p = l.layout === "elk" ? "start" : "center", m = e.insert("g").attr("class", c).attr("id", t.domId ?? t.id), h;
	h = s ? await Vp(m, `&lt;&lt;${a.type}&gt;&gt;`, 0, t.labelStyle) : await Vp(m, "&lt;&lt;Element&gt;&gt;", 0, t.labelStyle);
	let g = h, _ = await Vp(m, a.name, g, t.labelStyle + "; font-weight: bold;");
	if (g += _ + 20, s) {
		let e = await Vp(m, `${a.requirementId ? `ID: ${a.requirementId}` : ""}`, g, t.labelStyle, p);
		g += e;
		let n = await Vp(m, `${a.text ? `Text: ${a.text}` : ""}`, g, t.labelStyle, p);
		g += n;
		let r = await Vp(m, `${a.risk ? `Risk: ${a.risk}` : ""}`, g, t.labelStyle, p);
		g += r, await Vp(m, `${a.verifyMethod ? `Verification: ${a.verifyMethod}` : ""}`, g, t.labelStyle, p);
	} else {
		let e = await Vp(m, `${o.type ? `Type: ${o.type}` : ""}`, g, t.labelStyle, p);
		g += e, await Vp(m, `${o.docRef ? `Doc Ref: ${o.docRef}` : ""}`, g, t.labelStyle, p);
	}
	let v = (m.node()?.getBBox().width ?? 200) + 20, y = (m.node()?.getBBox().height ?? 200) + 20, b = -v / 2, x = -y / 2, S = q.svg(m), C = U(t, {});
	t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
	let w = S.rectangle(b, x, v, y, C), T = m.insert(() => w, ":first-child");
	if (T.attr("class", "basic label-container outer-path").attr("style", i), d?.length) {
		let e = t.colorIndex ?? 0;
		m.attr("data-color-id", `color-${e % d.length}`);
	}
	if (m.selectAll(".label").each((e, t, r) => {
		let i = n(r[t]), a = i.attr("transform"), o = 0, s = 0;
		if (a) {
			let e = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(a);
			e && (o = parseFloat(e[1]), s = parseFloat(e[2]));
		}
		let c = s - y / 2, l = b + 10;
		(t === 0 || t === 1) && (l = o), i.attr("transform", `translate(${l}, ${c + 20})`);
	}), g > h + _ + 20) {
		let e = x + h + _ + 20, n;
		if (t.look === "neo") {
			let t = [
				[b, e],
				[b + v, e],
				[b + v, e + .001],
				[b, e + .001]
			];
			n = S.polygon(t, C);
		} else n = S.line(b, e, b + v, e, C);
		m.insert(() => n).attr("class", "divider");
	}
	return Y(t, T), t.intersect = function(e) {
		return Q.rect(t, e);
	}, i && t.look !== "handDrawn" && (f || d?.length) && m.selectAll("path").attr("style", i), m;
}
i(Bp, "requirementBox");
async function Vp(e, t, r, i = "", a = "center") {
	if (t === "") return 0;
	let o = e.insert("g").attr("class", "label").attr("style", i), s = V(), c = s.htmlLabels ?? !0, l = await tu(o, qr(Vs(t)), {
		width: ks(t, s) + 50,
		classes: "markdown-node-label",
		useHtmlLabels: c,
		style: i
	}, s), u;
	if (c) {
		let e = l.children[0], t = n(l);
		a === "start" && n(e).style("text-align", "left"), u = e.getBoundingClientRect(), t.attr("width", u.width), t.attr("height", u.height);
	} else {
		let e = l.children[0];
		for (let t of e.children) i && t.setAttribute("style", i);
		if (a === "start") {
			e.setAttribute("text-anchor", "start");
			for (let t of e.children) t.setAttribute("text-anchor", "start");
		}
		u = l.getBBox(), u.height += 6;
	}
	return o.attr("transform", `translate(${-u.width / 2},${-u.height / 2 + r})`), u.height;
}
i(Vp, "addText");
var Hp = /* @__PURE__ */ i((e) => {
	switch (e) {
		case "Very High": return "red";
		case "High": return "orange";
		case "Medium": return null;
		case "Low": return "blue";
		case "Very Low": return "lightblue";
	}
}, "colorFromPriority");
async function Up(e, t, { config: n }) {
	let { labelStyles: r, nodeStyles: i } = H(t);
	t.labelStyle = r || "";
	let a = t.width;
	t.width = (t.width ?? 200) - 10;
	let { shapeSvg: o, bbox: s, label: c } = await J(e, t, X(t)), l = t.padding || 10, u = "", d;
	"ticket" in t && t.ticket && n?.kanban?.ticketBaseUrl && (u = n?.kanban?.ticketBaseUrl.replace("#TICKET#", t.ticket), d = o.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", u).attr("target", "_blank"));
	let f = {
		useHtmlLabels: t.useHtmlLabels,
		labelStyle: t.labelStyle || "",
		width: t.width,
		img: t.img,
		padding: t.padding || 8,
		centerLabel: !1
	}, p, m;
	d ? {label: p, bbox: m} = await pd(d, "ticket" in t && t.ticket || "", f) : {label: p, bbox: m} = await pd(o, "ticket" in t && t.ticket || "", f);
	let { label: h, bbox: g } = await pd(o, "assigned" in t && t.assigned || "", f);
	t.width = a;
	let _ = t?.width || 0, v = Math.max(m.height, g.height) / 2, y = Math.max(s.height + 20, t?.height || 0) + v, b = -_ / 2, x = -y / 2;
	c.attr("transform", "translate(" + (l - _ / 2) + ", " + (-v - s.height / 2) + ")"), p.attr("transform", "translate(" + (l - _ / 2) + ", " + (-v + s.height / 2) + ")"), h.attr("transform", "translate(" + (l + _ / 2 - g.width - 20) + ", " + (-v + s.height / 2) + ")");
	let S, { rx: C, ry: w } = t, { cssStyles: T } = t;
	if (t.look === "handDrawn") {
		let e = q.svg(o), n = U(t, {}), r = C || w ? e.path(vd(b, x, _, y, C || 0), n) : e.rectangle(b, x, _, y, n);
		S = o.insert(() => r, ":first-child"), S.attr("class", "basic label-container").attr("style", T || null);
	} else {
		S = o.insert("rect", ":first-child"), S.attr("class", "basic label-container __APA__").attr("style", i).attr("rx", C ?? 5).attr("ry", w ?? 5).attr("x", b).attr("y", x).attr("width", _).attr("height", y);
		let e = "priority" in t && t.priority;
		if (e) {
			let t = o.append("line"), n = b + 2, r = x + Math.floor((C ?? 0) / 2), i = x + y - Math.floor((C ?? 0) / 2);
			t.attr("x1", n).attr("y1", r).attr("x2", n).attr("y2", i).attr("stroke-width", "4").attr("stroke", Hp(e));
		}
	}
	return Y(t, S), t.height = y, t.intersect = function(e) {
		return Q.rect(t, e);
	}, o;
}
i(Up, "kanbanItem");
async function Wp(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let { shapeSvg: i, bbox: a, halfPadding: o, label: s } = await J(e, t, X(t)), c = a.width + 10 * o, l = a.height + 8 * o, u = .15 * c, { cssStyles: d } = t, f = a.width + 20, m = a.height + 20, h = Math.max(c, f), g = Math.max(l, m);
	s.attr("transform", `translate(${-a.width / 2}, ${-a.height / 2})`);
	let _, v = `M0 0 
    a${u},${u} 1 0,0 ${h * .25},${-1 * g * .1}
    a${u},${u} 1 0,0 ${h * .25},0
    a${u},${u} 1 0,0 ${h * .25},0
    a${u},${u} 1 0,0 ${h * .25},${g * .1}

    a${u},${u} 1 0,0 ${h * .15},${g * .33}
    a${u * .8},${u * .8} 1 0,0 0,${g * .34}
    a${u},${u} 1 0,0 ${-1 * h * .15},${g * .33}

    a${u},${u} 1 0,0 ${-1 * h * .25},${g * .15}
    a${u},${u} 1 0,0 ${-1 * h * .25},0
    a${u},${u} 1 0,0 ${-1 * h * .25},0
    a${u},${u} 1 0,0 ${-1 * h * .25},${-1 * g * .15}

    a${u},${u} 1 0,0 ${-1 * h * .1},${-1 * g * .33}
    a${u * .8},${u * .8} 1 0,0 0,${-1 * g * .34}
    a${u},${u} 1 0,0 ${h * .1},${-1 * g * .33}
  H0 V0 Z`;
	if (t.look === "handDrawn") {
		let e = q.svg(i), n = U(t, {}), r = e.path(v, n);
		_ = i.insert(() => r, ":first-child"), _.attr("class", "basic label-container").attr("style", Us(d));
	} else _ = i.insert("path", ":first-child").attr("class", "basic label-container").attr("style", r).attr("d", v);
	return _.attr("transform", `translate(${-h / 2}, ${-g / 2})`), Y(t, _), t.calcIntersect = function(e, t) {
		return Q.rect(e, t);
	}, t.intersect = function(e) {
		return p.info("Bang intersect", t, e), Q.rect(t, e);
	}, i;
}
i(Wp, "bang");
async function Gp(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let { shapeSvg: i, bbox: a, halfPadding: o, label: s } = await J(e, t, X(t)), c = a.width + 2 * o, l = a.height + 2 * o, u = .15 * c, d = .25 * c, f = .35 * c, m = .2 * c, { cssStyles: h } = t, g, _ = `M0 0 
    a${u},${u} 0 0,1 ${c * .25},${-1 * c * .1}
    a${f},${f} 1 0,1 ${c * .4},${-1 * c * .1}
    a${d},${d} 1 0,1 ${c * .35},${c * .2}

    a${u},${u} 1 0,1 ${c * .15},${l * .35}
    a${m},${m} 1 0,1 ${-1 * c * .15},${l * .65}

    a${d},${u} 1 0,1 ${-1 * c * .25},${c * .15}
    a${f},${f} 1 0,1 ${-1 * c * .5},0
    a${u},${u} 1 0,1 ${-1 * c * .25},${-1 * c * .15}

    a${u},${u} 1 0,1 ${-1 * c * .1},${-1 * l * .35}
    a${m},${m} 1 0,1 ${c * .1},${-1 * l * .65}
  H0 V0 Z`;
	if (t.look === "handDrawn") {
		let e = q.svg(i), n = U(t, {}), r = e.path(_, n);
		g = i.insert(() => r, ":first-child"), g.attr("class", "basic label-container").attr("style", Us(h));
	} else g = i.insert("path", ":first-child").attr("class", "basic label-container").attr("style", r).attr("d", _);
	return s.attr("transform", `translate(${-a.width / 2}, ${-a.height / 2})`), g.attr("transform", `translate(${-c / 2}, ${-l / 2})`), Y(t, g), t.calcIntersect = function(e, t) {
		return Q.rect(e, t);
	}, t.intersect = function(e) {
		return p.info("Cloud intersect", t, e), Q.rect(t, e);
	}, i;
}
i(Gp, "cloud");
async function Kp(e, t) {
	let { labelStyles: n, nodeStyles: r } = H(t);
	t.labelStyle = n;
	let { shapeSvg: i, bbox: a, halfPadding: o, label: s } = await J(e, t, X(t)), c = a.width + 8 * o, l = a.height + 2 * o, u = t.look === "neo" ? `
    M${-c / 2} ${l / 2 - 5}
    v${-l + 10}
    q0,-5 5,-5
    h${c - 10}
    q5,0 5,5
    v${l - 5}
    H${-c / 2}
    Z
  ` : `
    M${-c / 2} ${l / 2 - 5}
    v${-l + 10}
    q0,-5 5,-5
    h${c - 10}
    q5,0 5,5
    v${l - 10}
    q0,5 -5,5
    h${-(c - 10)}
    q-5,0 -5,-5
    Z
  `;
	if (!t.domId) throw Error(`defaultMindmapNode: node "${t.id}" is missing a domId — was render.ts domId prefixing skipped?`);
	let d = i.append("path").attr("id", t.domId).attr("class", "node-bkg node-" + t.type).attr("style", r).attr("d", u);
	return i.append("line").attr("class", "node-line-").attr("x1", -c / 2).attr("y1", l / 2).attr("x2", c / 2).attr("y2", l / 2), s.attr("transform", `translate(${-a.width / 2}, ${-a.height / 2})`), i.append(() => s.node()), Y(t, d), t.calcIntersect = function(e, t) {
		return Q.rect(e, t);
	}, t.intersect = function(e) {
		return Q.rect(t, e);
	}, i;
}
i(Kp, "defaultMindmapNode");
async function qp(e, t) {
	return Qd(e, t, { padding: t.padding ?? 0 });
}
i(qp, "mindmapCircle");
var Jp = [
	{
		semanticName: "Process",
		name: "Rectangle",
		shortName: "rect",
		description: "Standard process shape",
		aliases: [
			"proc",
			"process",
			"rectangle"
		],
		internalAliases: ["squareRect"],
		handler: op
	},
	{
		semanticName: "Event",
		name: "Rounded Rectangle",
		shortName: "rounded",
		description: "Represents an event",
		aliases: ["event"],
		internalAliases: ["roundedRect"],
		handler: np
	},
	{
		semanticName: "Terminal Point",
		name: "Stadium",
		shortName: "stadium",
		description: "Terminal point",
		aliases: ["terminal", "pill"],
		handler: sp
	},
	{
		semanticName: "Subprocess",
		name: "Framed Rectangle",
		shortName: "fr-rect",
		description: "Subprocess",
		aliases: [
			"subprocess",
			"subproc",
			"framed-rectangle",
			"subroutine"
		],
		handler: fp
	},
	{
		semanticName: "Database",
		name: "Cylinder",
		shortName: "cyl",
		description: "Database storage",
		aliases: [
			"db",
			"database",
			"cylinder"
		],
		handler: _f
	},
	{
		semanticName: "Data Store",
		name: "Data Store",
		shortName: "datastore",
		description: "Data flow diagram data store",
		aliases: ["data-store"],
		handler: yf
	},
	{
		semanticName: "Folder",
		name: "Folder",
		shortName: "folder",
		description: "Folder or directory",
		aliases: ["directory"],
		handler: Ef
	},
	{
		semanticName: "Bucket",
		name: "Bucket",
		shortName: "bucket",
		description: "Object storage bucket",
		handler: Pd
	},
	{
		semanticName: "Console",
		name: "Console (terminal window)",
		shortName: "console",
		description: "Terminal or console window",
		handler: ef
	},
	{
		semanticName: "Browser",
		name: "Browser",
		shortName: "browser",
		description: "Browser window",
		handler: Jd
	},
	{
		semanticName: "Person",
		name: "Person",
		shortName: "person",
		description: "Person (circular head above a rounded body)",
		handler: df
	},
	{
		semanticName: "Start",
		name: "Circle",
		shortName: "circle",
		description: "Starting point",
		aliases: ["circ"],
		handler: Qd
	},
	{
		semanticName: "Bang",
		name: "Bang",
		shortName: "bang",
		description: "Bang",
		aliases: ["bang"],
		handler: Wp
	},
	{
		semanticName: "Cloud",
		name: "Cloud",
		shortName: "cloud",
		description: "cloud",
		aliases: ["cloud"],
		handler: Gp
	},
	{
		semanticName: "Decision",
		name: "Diamond",
		shortName: "diam",
		description: "Decision-making step",
		aliases: [
			"decision",
			"diamond",
			"question"
		],
		handler: $f
	},
	{
		semanticName: "Prepare Conditional",
		name: "Hexagon",
		shortName: "hex",
		description: "Preparation or condition step",
		aliases: ["hexagon", "prepare"],
		handler: Af
	},
	{
		semanticName: "Data Input/Output",
		name: "Lean Right",
		shortName: "lean-r",
		description: "Represents input or output",
		aliases: ["lean-right", "in-out"],
		internalAliases: ["lean_right"],
		handler: Bf
	},
	{
		semanticName: "Data Input/Output",
		name: "Lean Left",
		shortName: "lean-l",
		description: "Represents output or input",
		aliases: ["lean-left", "out-in"],
		internalAliases: ["lean_left"],
		handler: zf
	},
	{
		semanticName: "Priority Action",
		name: "Trapezoid Base Bottom",
		shortName: "trap-b",
		description: "Priority action",
		aliases: [
			"priority",
			"trapezoid-bottom",
			"trapezoid"
		],
		handler: Cp
	},
	{
		semanticName: "Manual Operation",
		name: "Trapezoid Base Top",
		shortName: "trap-t",
		description: "Represents a manual task",
		aliases: [
			"manual",
			"trapezoid-top",
			"inv-trapezoid"
		],
		internalAliases: ["inv_trapezoid"],
		handler: Lf
	},
	{
		semanticName: "Stop",
		name: "Double Circle",
		shortName: "dbl-circ",
		description: "Represents a stop point",
		aliases: ["double-circle"],
		internalAliases: ["doublecircle"],
		handler: xf
	},
	{
		semanticName: "Text Block",
		name: "Text Block",
		shortName: "text",
		description: "Text block",
		handler: gp
	},
	{
		semanticName: "Card",
		name: "Notched Rectangle",
		shortName: "notch-rect",
		description: "Represents a card",
		aliases: ["card", "notched-rectangle"],
		handler: Xd
	},
	{
		semanticName: "Lined/Shaded Process",
		name: "Lined Rectangle",
		shortName: "lin-rect",
		description: "Lined process shape",
		aliases: [
			"lined-rectangle",
			"lined-process",
			"lin-proc",
			"shaded-process"
		],
		handler: ip
	},
	{
		semanticName: "Start",
		name: "Small Circle",
		shortName: "sm-circ",
		description: "Small starting point",
		aliases: ["start", "small-circle"],
		internalAliases: ["stateStart"],
		handler: up
	},
	{
		semanticName: "Stop",
		name: "Framed Circle",
		shortName: "fr-circ",
		description: "Stop point",
		aliases: ["stop", "framed-circle"],
		internalAliases: ["stateEnd"],
		handler: lp
	},
	{
		semanticName: "Fork/Join",
		name: "Filled Rectangle",
		shortName: "fork",
		description: "Fork or join in process flow",
		aliases: ["join"],
		internalAliases: ["forkJoin"],
		handler: Df
	},
	{
		semanticName: "Collate",
		name: "Hourglass",
		shortName: "hourglass",
		description: "Represents a collate operation",
		aliases: ["hourglass", "collate"],
		handler: jf
	},
	{
		semanticName: "Comment",
		name: "Curly Brace",
		shortName: "brace",
		description: "Adds a comment",
		aliases: ["comment", "brace-l"],
		handler: af
	},
	{
		semanticName: "Comment Right",
		name: "Curly Brace",
		shortName: "brace-r",
		description: "Adds a comment",
		handler: sf
	},
	{
		semanticName: "Comment with braces on both sides",
		name: "Curly Braces",
		shortName: "braces",
		description: "Adds a comment",
		handler: lf
	},
	{
		semanticName: "Com Link",
		name: "Lightning Bolt",
		shortName: "bolt",
		description: "Communication link",
		aliases: ["com-link", "lightning-bolt"],
		handler: Vf
	},
	{
		semanticName: "Document",
		name: "Document",
		shortName: "doc",
		description: "Represents a document",
		aliases: ["doc", "document"],
		handler: Op
	},
	{
		semanticName: "Delay",
		name: "Half-Rounded Rectangle",
		shortName: "delay",
		description: "Represents a delay",
		aliases: ["half-rounded-rectangle"],
		handler: Of
	},
	{
		semanticName: "Direct Access Storage",
		name: "Horizontal Cylinder",
		shortName: "h-cyl",
		description: "Direct access storage",
		aliases: ["das", "horizontal-cylinder"],
		handler: Sp
	},
	{
		semanticName: "Disk Storage",
		name: "Lined Cylinder",
		shortName: "lin-cyl",
		description: "Disk storage",
		aliases: ["disk", "lined-cylinder"],
		handler: qf
	},
	{
		semanticName: "Display",
		name: "Curved Trapezoid",
		shortName: "curv-trap",
		description: "Represents a display",
		aliases: ["curved-trapezoid", "display"],
		handler: uf
	},
	{
		semanticName: "Divided Process",
		name: "Divided Rectangle",
		shortName: "div-rect",
		description: "Divided process shape",
		aliases: [
			"div-proc",
			"divided-rectangle",
			"divided-process"
		],
		handler: bf
	},
	{
		semanticName: "Extract",
		name: "Triangle",
		shortName: "tri",
		description: "Extraction process",
		aliases: ["extract", "triangle"],
		handler: Dp
	},
	{
		semanticName: "Internal Storage",
		name: "Window Pane",
		shortName: "win-pane",
		description: "Internal storage",
		aliases: ["internal-storage", "window-pane"],
		handler: jp
	},
	{
		semanticName: "Junction",
		name: "Filled Circle",
		shortName: "f-circ",
		description: "Junction point",
		aliases: ["junction", "filled-circle"],
		handler: Sf
	},
	{
		semanticName: "Loop Limit",
		name: "Trapezoidal Pentagon",
		shortName: "notch-pent",
		description: "Loop limit step",
		aliases: ["loop-limit", "notched-pentagon"],
		handler: wp
	},
	{
		semanticName: "Manual File",
		name: "Flipped Triangle",
		shortName: "flip-tri",
		description: "Manual file operation",
		aliases: ["manual-file", "flipped-triangle"],
		handler: Tf
	},
	{
		semanticName: "Manual Input",
		name: "Sloped Rectangle",
		shortName: "sl-rect",
		description: "Manual input step",
		aliases: ["manual-input", "sloped-rectangle"],
		handler: ap
	},
	{
		semanticName: "Multi-Document",
		name: "Stacked Document",
		shortName: "docs",
		description: "Multiple documents",
		aliases: [
			"documents",
			"st-doc",
			"stacked-document"
		],
		handler: Xf
	},
	{
		semanticName: "Multi-Process",
		name: "Stacked Rectangle",
		shortName: "st-rect",
		description: "Multiple processes",
		aliases: [
			"procs",
			"processes",
			"stacked-rectangle"
		],
		handler: Yf
	},
	{
		semanticName: "Stored Data",
		name: "Bow Tie Rectangle",
		shortName: "bow-rect",
		description: "Stored data",
		aliases: ["stored-data", "bow-tie-rectangle"],
		handler: Nd
	},
	{
		semanticName: "Summary",
		name: "Crossed Circle",
		shortName: "cross-circ",
		description: "Summary",
		aliases: ["summary", "crossed-circle"],
		handler: nf
	},
	{
		semanticName: "Tagged Document",
		name: "Tagged Document",
		shortName: "tag-doc",
		description: "Tagged document",
		aliases: ["tag-doc", "tagged-document"],
		handler: hp
	},
	{
		semanticName: "Tagged Process",
		name: "Tagged Rectangle",
		shortName: "tag-rect",
		description: "Tagged process",
		aliases: [
			"tagged-rectangle",
			"tag-proc",
			"tagged-process"
		],
		handler: mp
	},
	{
		semanticName: "Paper Tape",
		name: "Flag",
		shortName: "flag",
		description: "Paper tape",
		aliases: ["paper-tape"],
		handler: kp
	},
	{
		semanticName: "Odd",
		name: "Odd",
		shortName: "odd",
		description: "Odd shape",
		internalAliases: ["rect_left_inv_arrow"],
		handler: ep
	},
	{
		semanticName: "Lined Document",
		name: "Lined Document",
		shortName: "lin-doc",
		description: "Lined document",
		aliases: ["lined-document"],
		handler: Jf
	}
], Yp = (/* @__PURE__ */ i(() => {
	let e = [...Object.entries({
		state: cp,
		choice: Zd,
		note: Zf,
		composite: $d,
		rectWithTitle: tp,
		labelRect: Rf,
		block_arrow: qd,
		collapsedGroup: zd,
		iconSquare: Ff,
		iconCircle: Nf,
		icon: Mf,
		iconRounded: Pf,
		imageSquare: If,
		anchor: Ad,
		kanbanItem: Up,
		mindmapCircle: qp,
		defaultMindmapNode: Kp,
		classBox: zp,
		erBox: Pp,
		requirementBox: Bp
	}), ...Jp.flatMap((e) => [
		e.shortName,
		..."aliases" in e ? e.aliases : [],
		..."internalAliases" in e ? e.internalAliases : []
	].map((t) => [t, e.handler]))];
	return Object.fromEntries(e);
}, "generateShapeMap"))();
function Xp(e) {
	return e in Yp;
}
i(Xp, "isValidShape");
var Zp = /* @__PURE__ */ i(({ flowchart: e }) => {
	let t = e?.subGraphTitleMargin?.top ?? 0, n = e?.subGraphTitleMargin?.bottom ?? 0;
	return {
		subGraphTitleTopMargin: t,
		subGraphTitleBottomMargin: n,
		subGraphTitleTotalMargin: t + n
	};
}, "getSubGraphTitleMargins"), Qp = /* @__PURE__ */ new Map();
async function $p(e, t, n) {
	let r, i;
	t.shape === "rect" && (t.shape = t.rx && t.ry ? "roundedRect" : "squareRect");
	let a = t.shape ? Yp[t.shape] : void 0;
	if (!a) throw Error(`No such shape: ${t.shape}. Please check your syntax.`);
	if (t.link) {
		let o;
		n.config.securityLevel === "sandbox" ? o = "_top" : t.linkTarget && (o = t.linkTarget || "_blank"), r = e.insert("svg:a").attr("xlink:href", t.link).attr("target", o ?? null), i = await a(r, t, n);
	} else i = await a(e, t, n), r = i;
	return r.attr("data-look", Us(t.look)), t.tooltip && i.attr("title", t.tooltip), Qp.set(t.id, r), t.haveCallback && r.attr("class", r.attr("class") + " clickable"), r;
}
i($p, "insertNode");
var em = /* @__PURE__ */ i((e, t) => {
	Qp.set(t.id, e);
}, "setNodeElem"), tm = /* @__PURE__ */ i(() => {
	Qp.clear();
}, "clear"), nm = /* @__PURE__ */ i((e) => {
	let t = Qp.get(e.id);
	p.trace("Transforming node", e.diff, e, "translate(" + (e.x - e.width / 2 - 5) + ", " + e.width / 2 + ")");
	let n = e.diff || 0;
	return e.clusterNode ? t.attr("transform", "translate(" + (e.x + n - e.width / 2) + ", " + (e.y - e.height / 2 - 8) + ")") : t.attr("transform", "translate(" + e.x + ", " + e.y + ")"), n;
}, "positionNode"), rm = /* @__PURE__ */ i(async (e, t) => {
	let r = V(), { themeVariables: i, handDrawnSeed: a } = r, { clusterBkg: o, clusterBorder: s } = i, c = s, { labelStyles: l, nodeStyles: u, borderStyles: d, backgroundStyles: f } = H(t), m = e.insert("g").attr("class", "cluster swimlane " + (t.cssClasses || "")).attr("id", t.id).attr("data-id", t.id).attr("data-et", "cluster").attr("data-look", t.look), h = bn(r.flowchart.htmlLabels), g = t.direction === "LR", _ = m.insert("g").attr("class", "cluster-label swimlane-label"), v = await tu(_, t.label, {
		style: t.labelStyle,
		useHtmlLabels: h,
		isNode: !0,
		width: t.width
	}), y = v.getBBox();
	if (h) {
		let e = v.children[0], t = n(v);
		y = e.getBoundingClientRect(), t.attr("width", y.width), t.attr("height", y.height);
	}
	let b = t.padding ?? 0, x = t.width <= y.width + b ? y.width + b : t.width;
	t.diff = t.width <= y.width + b ? (x - t.width) / 2 - b : -b;
	let S = t.height, C = t.y - S / 2, w = t.y + S / 2, T = t.x - x / 2, E = t.swimlaneContentTop === void 0 ? C + S / 3 : t.swimlaneContentTop, D = g ? 4 : 0, O = y.height + 2 * D, k, ee;
	if (g) {
		let e = Math.max(O, y.height + 2 * D), n = T + e, r = Math.max(0, x - e);
		if (t.look === "handDrawn") {
			let i = q.svg(m), s = U(t, {
				roughness: .7,
				fill: o,
				stroke: c,
				fillWeight: 3,
				seed: a
			}), l = U(t, {
				roughness: .7,
				fill: "none",
				stroke: c,
				seed: a
			}), u = i.rectangle(T, C, e, S, s);
			k = m.insert(() => u, ":first-child");
			let p = i.rectangle(n, C, r, S, l);
			ee = m.insert(() => p, ":first-child"), k.select("path:nth-child(2)").attr("style", d.join(";")), k.select("path").attr("style", f.join(";").replace("fill", "stroke"));
		} else k = m.insert("rect", ":first-child"), ee = m.insert("rect", ":first-child"), k.attr("class", "swimlane-title").attr("style", u).attr("x", T).attr("y", C).attr("width", e).attr("height", S).attr("fill", o).attr("stroke", c), ee.attr("class", "swimlane-body").attr("style", u).attr("x", n).attr("y", C).attr("width", r).attr("height", S).attr("fill", "none").attr("stroke", c);
		let i = T + e / 2, s = t.y;
		_.attr("transform", `translate(${i}, ${s}) rotate(-90) translate(${-y.width / 2}, ${-y.height / 2})`);
	} else {
		let e = Math.max(0, E - C), n = Math.min(O, e), r = C + n, i = Math.max(0, w - r), s = t.x - x / 2;
		if (t.look === "handDrawn") {
			let e = q.svg(m), l = U(t, {
				roughness: .7,
				fill: o,
				stroke: c,
				fillWeight: 3,
				seed: a
			}), u = U(t, {
				roughness: .7,
				fill: "none",
				stroke: c,
				seed: a
			}), p = e.rectangle(s, C, x, n, l);
			k = m.insert(() => p, ":first-child");
			let h = e.rectangle(s, r, x, i, u);
			ee = m.insert(() => h, ":first-child"), k.select("path:nth-child(2)").attr("style", d.join(";")), k.select("path").attr("style", f.join(";").replace("fill", "stroke"));
		} else k = m.insert("rect", ":first-child"), ee = m.insert("rect", ":first-child"), k.attr("class", "swimlane-title").attr("style", u).attr("x", s).attr("y", C).attr("width", x).attr("height", n).attr("fill", o).attr("stroke", c), ee.attr("class", "swimlane-body").attr("style", u).attr("x", s).attr("y", r).attr("width", x).attr("height", i).attr("fill", "none").attr("stroke", c);
		let l = t.x - y.width / 2, p = C + (n - y.height) / 2;
		_.attr("transform", `translate(${l}, ${p})`);
	}
	if (p.trace("Swimlane data ", t, JSON.stringify(t)), l) {
		let e = _.select("span");
		e && e.attr("style", l);
	}
	return t.offsetX = 0, t.width = x, t.height = S, t.offsetY = y.height - b / 2, t.intersect = function(e) {
		return _d(t, e);
	}, {
		cluster: m,
		labelBBox: y
	};
}, "swimlane"), im = /* @__PURE__ */ i(async (e, t) => {
	p.info("Creating subgraph rect for ", t.id, t);
	let r = V(), { themeVariables: i, handDrawnSeed: a } = r, { clusterBkg: o, clusterBorder: s } = i, { labelStyles: c, nodeStyles: l, borderStyles: u, backgroundStyles: d } = H(t), f = e.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.domId).attr("data-look", t.look), m = zn(r), h = f.insert("g").attr("class", "cluster-label "), g;
	g = t.labelType === "markdown" ? await tu(h, t.label, {
		style: t.labelStyle,
		useHtmlLabels: m,
		isNode: !0,
		width: t.width
	}) : await yd(h, t.label, t.labelStyle || "", !1, !0);
	let _ = g.getBBox();
	if (zn(r)) {
		let e = g.children[0], t = n(g);
		_ = e.getBoundingClientRect(), t.attr("width", _.width), t.attr("height", _.height);
	}
	let v = t.width <= _.width + t.padding ? _.width + t.padding : t.width;
	t.diff = t.width <= _.width + t.padding ? (v - t.width) / 2 - t.padding : -t.padding;
	let y = t.height, b = t.x - v / 2, x = t.y - y / 2;
	p.trace("Data ", t, JSON.stringify(t));
	let S;
	if (t.look === "handDrawn") {
		let e = q.svg(f), n = U(t, {
			roughness: .7,
			fill: o,
			stroke: s,
			fillWeight: 3,
			seed: a
		}), r = e.path(vd(b, x, v, y, 0), n);
		S = f.insert(() => (p.debug("Rough node insert CXC", r), r), ":first-child"), S.select("path:nth-child(2)").attr("style", u.join(";")), S.select("path").attr("style", d.join(";").replace("fill", "stroke"));
	} else S = f.insert("rect", ":first-child"), S.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", x).attr("width", v).attr("height", y);
	let { subGraphTitleTopMargin: C } = Zp(r);
	if (h.attr("transform", `translate(${t.x - _.width / 2}, ${t.y - t.height / 2 + C})`), c) {
		let e = h.select("span");
		e && e.attr("style", c);
	}
	let w = S.node().getBBox();
	return t.offsetX = 0, t.width = w.width, t.height = w.height, t.offsetY = _.height - t.padding / 2, t.intersect = function(e) {
		return _d(t, e);
	}, {
		cluster: f,
		labelBBox: _
	};
}, "rect"), am = {
	rect: im,
	squareRect: im,
	roundedWithTitle: /* @__PURE__ */ i(async (e, t) => {
		let r = V(), { themeVariables: i, handDrawnSeed: a } = r, { altBackground: o, compositeBackground: s, compositeTitleBackground: c, nodeBorder: l } = i, u = e.insert("g").attr("class", t.cssClasses).attr("id", t.domId).attr("data-id", t.id).attr("data-look", t.look), d = u.insert("g", ":first-child"), f = u.insert("g").attr("class", "cluster-label"), p = u.append("rect"), m = await yd(f, t.label, t.labelStyle, void 0, !0), h = m.getBBox();
		if (zn(r)) {
			let e = m.children[0], t = n(m);
			h = e.getBoundingClientRect(), t.attr("width", h.width), t.attr("height", h.height);
		}
		let g = 0 * t.padding, _ = g / 2, v = (t.width <= h.width + t.padding ? h.width + t.padding : t.width) + g;
		t.diff = t.width <= h.width + t.padding ? (v - t.width) / 2 - t.padding : -t.padding;
		let y = t.height + g, b = t.height + g - h.height - 6, x = t.x - v / 2, S = t.y - y / 2;
		t.width = v;
		let C = t.y - t.height / 2 - _ + h.height + 2, w;
		if (t.look === "handDrawn") {
			let e = t.cssClasses.includes("statediagram-cluster-alt"), n = q.svg(u), r = t.rx || t.ry ? n.path(vd(x, S, v, y, 10), {
				roughness: .7,
				fill: c,
				fillStyle: "solid",
				stroke: l,
				seed: a
			}) : n.rectangle(x, S, v, y, { seed: a });
			w = u.insert(() => r, ":first-child");
			let i = n.rectangle(x, C, v, b, {
				fill: e ? o : s,
				fillStyle: e ? "hachure" : "solid",
				stroke: l,
				seed: a
			});
			w = u.insert(() => r, ":first-child"), p = u.insert(() => i);
		} else w = d.insert("rect", ":first-child"), w.attr("class", "outer").attr("x", x).attr("y", S).attr("width", v).attr("height", y).attr("data-look", t.look), p.attr("class", "inner").attr("x", x).attr("y", C).attr("width", v).attr("height", b);
		return f.attr("transform", `translate(${t.x - h.width / 2}, ${S + 1 - (zn(r) ? 0 : 3)})`), t.height = w.node().getBBox().height, t.offsetX = 0, t.offsetY = h.height - t.padding / 2, t.labelBBox = h, t.intersect = function(e) {
			return _d(t, e);
		}, {
			cluster: u,
			labelBBox: h
		};
	}, "roundedWithTitle"),
	noteGroup: /* @__PURE__ */ i((e, t) => {
		let n = e.insert("g").attr("class", "note-cluster").attr("id", t.domId), r = n.insert("rect", ":first-child"), i = 0 * t.padding, a = i / 2;
		r.attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - t.width / 2 - a).attr("y", t.y - t.height / 2 - a).attr("width", t.width + i).attr("height", t.height + i).attr("fill", "none");
		let o = r.node().getBBox();
		return t.width = o.width, t.height = o.height, t.intersect = function(e) {
			return _d(t, e);
		}, {
			cluster: n,
			labelBBox: {
				width: 0,
				height: 0
			}
		};
	}, "noteGroup"),
	divider: /* @__PURE__ */ i((e, t) => {
		let { themeVariables: n, handDrawnSeed: r } = V(), { nodeBorder: i } = n, a = e.insert("g").attr("class", t.cssClasses).attr("id", t.domId).attr("data-look", t.look), o = a.insert("g", ":first-child"), s = 0 * t.padding, c = t.width + s;
		t.diff = -t.padding;
		let l = t.height + s, u = t.x - c / 2, d = t.y - l / 2;
		t.width = c;
		let f;
		if (t.look === "handDrawn") {
			let e = q.svg(a).rectangle(u, d, c, l, {
				fill: "lightgrey",
				roughness: .5,
				strokeLineDash: [5],
				stroke: i,
				seed: r
			});
			f = a.insert(() => e, ":first-child");
		} else {
			f = o.insert("rect", ":first-child");
			let e = "outer";
			t.look, e = "divider", f.attr("class", e).attr("x", u).attr("y", d).attr("width", c).attr("height", l).attr("data-look", t.look);
		}
		return t.height = f.node().getBBox().height, t.offsetX = 0, t.offsetY = 0, t.intersect = function(e) {
			return _d(t, e);
		}, {
			cluster: a,
			labelBBox: {}
		};
	}, "divider"),
	kanbanSection: /* @__PURE__ */ i(async (e, t) => {
		p.info("Creating subgraph rect for ", t.id, t);
		let r = V(), { themeVariables: i, handDrawnSeed: a } = r, { clusterBkg: o, clusterBorder: s } = i, { labelStyles: c, nodeStyles: l, borderStyles: u, backgroundStyles: d } = H(t), f = e.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.domId).attr("data-look", t.look), m = zn(r), h = f.insert("g").attr("class", "cluster-label "), g = await tu(h, t.label, {
			style: t.labelStyle,
			useHtmlLabels: m,
			isNode: !0,
			width: t.width
		}), _ = g.getBBox();
		if (zn(r)) {
			let e = g.children[0], t = n(g);
			_ = e.getBoundingClientRect(), t.attr("width", _.width), t.attr("height", _.height);
		}
		let v = t.width <= _.width + t.padding ? _.width + t.padding : t.width;
		t.diff = t.width <= _.width + t.padding ? (v - t.width) / 2 - t.padding : -t.padding;
		let y = t.height, b = t.x - v / 2, x = t.y - y / 2;
		p.trace("Data ", t, JSON.stringify(t));
		let S;
		if (t.look === "handDrawn") {
			let e = q.svg(f), n = U(t, {
				roughness: .7,
				fill: o,
				stroke: s,
				fillWeight: 4,
				seed: a
			}), r = e.path(vd(b, x, v, y, t.rx), n);
			S = f.insert(() => (p.debug("Rough node insert CXC", r), r), ":first-child"), S.select("path:nth-child(2)").attr("style", u.join(";")), S.select("path").attr("style", d.join(";").replace("fill", "stroke"));
		} else S = f.insert("rect", ":first-child"), S.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", x).attr("width", v).attr("height", y);
		let { subGraphTitleTopMargin: C } = Zp(r);
		if (h.attr("transform", `translate(${t.x - _.width / 2}, ${t.y - t.height / 2 + C})`), c) {
			let e = h.select("span");
			e && e.attr("style", c);
		}
		let w = S.node().getBBox();
		return t.offsetX = 0, t.width = w.width, t.height = w.height, t.offsetY = _.height - t.padding / 2, t.intersect = function(e) {
			return _d(t, e);
		}, {
			cluster: f,
			labelBBox: _
		};
	}, "kanbanSection"),
	swimlane: rm
}, om = /* @__PURE__ */ new Map(), sm = /* @__PURE__ */ i(async (e, t) => {
	let n = await am[t.shape || "rect"](e, t);
	return om.set(t.id, n), n;
}, "insertCluster"), cm = /* @__PURE__ */ i(() => {
	om = /* @__PURE__ */ new Map();
}, "clear"), lm = /* @__PURE__ */ i((e, t) => {
	if (t) return "translate(" + -e.width / 2 + ", " + -e.height / 2 + ")";
	let n = e.x ?? 0, r = e.y ?? 0;
	return "translate(" + -(n + e.width / 2) + ", " + -(r + e.height / 2) + ")";
}, "computeLabelTransform"), um = {
	aggregation: 17.25,
	extension: 17.25,
	composition: 17.25,
	dependency: 6,
	lollipop: 13.5,
	arrow_point: 4,
	arrow_barb: 0,
	arrow_barb_neo: 5.5
}, dm = {
	arrow_point: 4,
	arrow_cross: 12.5,
	arrow_circle: 12.5
};
function fm(e, t) {
	if (e === void 0 || t === void 0) return {
		angle: 0,
		deltaX: 0,
		deltaY: 0
	};
	e = pm(e), t = pm(t);
	let [n, r] = [e.x, e.y], [i, a] = [t.x, t.y], o = i - n, s = a - r;
	return {
		angle: Math.atan(s / o),
		deltaX: o,
		deltaY: s
	};
}
i(fm, "calculateDeltaAndAngle");
var pm = /* @__PURE__ */ i((e) => Array.isArray(e) ? {
	x: e[0],
	y: e[1]
} : e, "pointTransformer"), mm = /* @__PURE__ */ i((e) => ({
	x: /* @__PURE__ */ i(function(t, n, r) {
		let i = 0, a = pm(r[0]).x < pm(r[r.length - 1]).x ? "left" : "right";
		if (n === 0 && Object.hasOwn(um, e.arrowTypeStart)) {
			let { angle: t, deltaX: n } = fm(r[0], r[1]);
			i = um[e.arrowTypeStart] * Math.cos(t) * (n >= 0 ? 1 : -1);
		} else if (n === r.length - 1 && Object.hasOwn(um, e.arrowTypeEnd)) {
			let { angle: t, deltaX: n } = fm(r[r.length - 1], r[r.length - 2]);
			i = um[e.arrowTypeEnd] * Math.cos(t) * (n >= 0 ? 1 : -1);
		}
		let o = Math.abs(pm(t).x - pm(r[r.length - 1]).x), s = Math.abs(pm(t).y - pm(r[r.length - 1]).y), c = Math.abs(pm(t).x - pm(r[0]).x), l = Math.abs(pm(t).y - pm(r[0]).y), u = um[e.arrowTypeStart], d = um[e.arrowTypeEnd];
		if (o < d && o > 0 && s < d) {
			let e = d + 1 - o;
			e *= a === "right" ? -1 : 1, i -= e;
		}
		if (c < u && c > 0 && l < u) {
			let e = u + 1 - c;
			e *= a === "right" ? -1 : 1, i += e;
		}
		return pm(t).x + i;
	}, "x"),
	y: /* @__PURE__ */ i(function(t, n, r) {
		let i = 0, a = pm(r[0]).y < pm(r[r.length - 1]).y ? "down" : "up";
		if (n === 0 && Object.hasOwn(um, e.arrowTypeStart)) {
			let { angle: t, deltaY: n } = fm(r[0], r[1]);
			i = um[e.arrowTypeStart] * Math.abs(Math.sin(t)) * (n >= 0 ? 1 : -1);
		} else if (n === r.length - 1 && Object.hasOwn(um, e.arrowTypeEnd)) {
			let { angle: t, deltaY: n } = fm(r[r.length - 1], r[r.length - 2]);
			i = um[e.arrowTypeEnd] * Math.abs(Math.sin(t)) * (n >= 0 ? 1 : -1);
		}
		let o = Math.abs(pm(t).y - pm(r[r.length - 1]).y), s = Math.abs(pm(t).x - pm(r[r.length - 1]).x), c = Math.abs(pm(t).y - pm(r[0]).y), l = Math.abs(pm(t).x - pm(r[0]).x), u = um[e.arrowTypeStart], d = um[e.arrowTypeEnd];
		if (o < d && o > 0 && s < d) {
			let e = d + 1 - o;
			e *= a === "up" ? -1 : 1, i -= e;
		}
		if (c < u && c > 0 && l < u) {
			let e = u + 1 - c;
			e *= a === "up" ? -1 : 1, i += e;
		}
		return pm(t).y + i;
	}, "y")
}), "getLineFunctionsWithOffset"), hm = /* @__PURE__ */ i((e, t, n, r, i, a = !1, o) => {
	t.arrowTypeStart && vm(e, "start", t.arrowTypeStart, n, r, i, a, o), t.arrowTypeEnd && vm(e, "end", t.arrowTypeEnd, n, r, i, a, o);
}, "addEdgeMarkers"), gm = {
	arrow_cross: {
		type: "cross",
		fill: !1
	},
	arrow_point: {
		type: "point",
		fill: !0
	},
	arrow_barb: {
		type: "barb",
		fill: !0
	},
	arrow_barb_neo: {
		type: "barb",
		fill: !0
	},
	arrow_circle: {
		type: "circle",
		fill: !1
	},
	aggregation: {
		type: "aggregation",
		fill: !1
	},
	extension: {
		type: "extension",
		fill: !1
	},
	composition: {
		type: "composition",
		fill: !0
	},
	dependency: {
		type: "dependency",
		fill: !0
	},
	lollipop: {
		type: "lollipop",
		fill: !1
	},
	only_one: {
		type: "onlyOne",
		fill: !1
	},
	zero_or_one: {
		type: "zeroOrOne",
		fill: !1
	},
	one_or_more: {
		type: "oneOrMore",
		fill: !1
	},
	zero_or_more: {
		type: "zeroOrMore",
		fill: !1
	},
	requirement_arrow: {
		type: "requirement_arrow",
		fill: !1
	},
	requirement_contains: {
		type: "requirement_contains",
		fill: !1
	}
}, _m = [
	"cross",
	"point",
	"circle",
	"lollipop",
	"aggregation",
	"extension",
	"composition",
	"dependency",
	"barb"
], vm = /* @__PURE__ */ i((e, t, n, r, i, a, o = !1, s) => {
	if (!n || n === "none") return;
	let c = gm[n], l = c && _m.includes(c.type);
	if (!c) {
		p.warn(`Unknown arrow type: ${n}`);
		return;
	}
	let u = `${i}_${a}-${c.type}${t === "start" ? "Start" : "End"}${o && l ? "-margin" : ""}`;
	if (s && s.trim() !== "") {
		let n = `${u}_${s.replace(/[^\dA-Za-z]/g, "_")}`;
		if (!document.getElementById(n)) {
			let e = document.getElementById(u);
			if (e) {
				let t = e.cloneNode(!0);
				t.id = n, t.querySelectorAll("path, circle, line").forEach((e) => {
					e.setAttribute("stroke", s), c.fill && e.setAttribute("fill", s);
				}), e.parentNode?.appendChild(t);
			}
		}
		e.attr(`marker-${t}`, `url(${r}#${n})`);
	} else e.attr(`marker-${t}`, `url(${r}#${u})`);
}, "addEdgeMarker"), ym = /* @__PURE__ */ i((e) => typeof e == "string" ? e : V()?.flowchart?.curve, "resolveEdgeCurveType"), bm = /* @__PURE__ */ new Map(), xm = /* @__PURE__ */ new Map(), Sm = /* @__PURE__ */ i(() => {
	bm.clear(), xm.clear();
}, "clear"), Cm = /* @__PURE__ */ i((e) => !!(e.label || e.startLabelLeft || e.startLabelRight || e.endLabelLeft || e.endLabelRight), "hasEdgeLabel"), wm = /* @__PURE__ */ i((e) => e ? typeof e == "string" ? e : e.reduce((e, t) => e + ";" + t, "") : "", "getLabelStyles"), Tm = /* @__PURE__ */ i(async (e, t) => {
	let r = V(), i = zn(r), { labelStyles: a } = H(t);
	t.labelStyle = a;
	let o = e.insert("g").attr("class", "edgeLabel"), s = o.insert("g").attr("class", "label").attr("data-id", t.id), c = t.labelType === "markdown", l = await tu(e, t.label, {
		style: wm(t.labelStyle),
		useHtmlLabels: i,
		addSvgBackground: !0,
		isNode: !1,
		markdown: c,
		width: void 0
	}, r);
	s.node().appendChild(l), p.info("abc82", t, t.labelType);
	let u, d;
	if (i) {
		let e = l.children[0], t = n(l);
		u = await Pl.measure(() => e.getBoundingClientRect()), d = u, t.attr("width", u.width), t.attr("height", u.height);
	} else {
		let e = n(l).select("text").node();
		await Pl.measure(() => {
			u = l.getBBox(), d = e && typeof e.getBBox == "function" ? e.getBBox() : u;
		});
	}
	s.attr("transform", lm(d, i)), bm.set(t.id, o), t.width = u.width, t.height = u.height;
	let f;
	if (t.startLabelLeft) {
		let r = e.insert("g").attr("class", "edgeTerminals"), a = r.insert("g").attr("class", "inner"), o = await yd(a, t.startLabelLeft, wm(t.labelStyle) || "", !1, !1);
		f = o;
		let s = o.getBBox();
		if (i) {
			let e = o.children[0], t = n(o);
			s = e.getBoundingClientRect(), t.attr("width", s.width), t.attr("height", s.height);
		}
		a.attr("transform", lm(s, i)), xm.get(t.id) || xm.set(t.id, {}), xm.get(t.id).startLeft = r, Em(f, t.startLabelLeft);
	}
	if (t.startLabelRight) {
		let r = e.insert("g").attr("class", "edgeTerminals"), a = r.insert("g").attr("class", "inner"), o = await yd(a, t.startLabelRight, wm(t.labelStyle) || "", !1, !1);
		f = o;
		let s = o.getBBox();
		if (i) {
			let e = o.children[0], t = n(o);
			s = e.getBoundingClientRect(), t.attr("width", s.width), t.attr("height", s.height);
		}
		a.attr("transform", lm(s, i)), xm.get(t.id) || xm.set(t.id, {}), xm.get(t.id).startRight = r, Em(f, t.startLabelRight);
	}
	if (t.endLabelLeft) {
		let r = e.insert("g").attr("class", "edgeTerminals"), a = r.insert("g").attr("class", "inner"), o = await yd(r, t.endLabelLeft, wm(t.labelStyle) || "", !1, !1);
		f = o;
		let s = o.getBBox();
		if (i) {
			let e = o.children[0], t = n(o);
			s = e.getBoundingClientRect(), t.attr("width", s.width), t.attr("height", s.height);
		}
		a.attr("transform", lm(s, i)), xm.get(t.id) || xm.set(t.id, {}), xm.get(t.id).endLeft = r, Em(f, t.endLabelLeft);
	}
	if (t.endLabelRight) {
		let r = e.insert("g").attr("class", "edgeTerminals"), a = r.insert("g").attr("class", "inner"), o = await yd(r, t.endLabelRight, wm(t.labelStyle) || "", !1, !1);
		f = o;
		let s = o.getBBox();
		if (i) {
			let e = o.children[0], t = n(o);
			s = e.getBoundingClientRect(), t.attr("width", s.width), t.attr("height", s.height);
		}
		a.attr("transform", lm(s, i)), xm.get(t.id) || xm.set(t.id, {}), xm.get(t.id).endRight = r, Em(f, t.endLabelRight);
	}
	return l;
}, "insertEdgeLabel");
function Em(e, t) {
	zn(V()) && e && (e.style.width = t.length * 9 + "px", e.style.height = "12px");
}
i(Em, "setTerminalWidth");
var Dm = /* @__PURE__ */ i((e, t) => {
	p.debug("Moving label abc88 ", e.id, e.label, bm.get(e.id), t);
	let n = t.updatedPath ? t.updatedPath : t.originalPath, { subGraphTitleTotalMargin: r } = Zp(V());
	if (e.label) {
		let i = bm.get(e.id), a = e.x, o = e.y;
		if (n) {
			let r = zs.calcLabelPosition(n);
			p.debug("Moving label " + e.label + " from (", a, ",", o, ") to (", r.x, ",", r.y, ") abc88"), t.updatedPath && (a = r.x, o = r.y);
		}
		i.attr("transform", `translate(${a}, ${o + r / 2})`);
	}
	if (e.startLabelLeft) {
		let t = xm.get(e.id).startLeft, r = e.x, i = e.y;
		if (n) {
			let t = zs.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_left", n);
			r = t.x, i = t.y;
		}
		t.attr("transform", `translate(${r}, ${i})`);
	}
	if (e.startLabelRight) {
		let t = xm.get(e.id).startRight, r = e.x, i = e.y;
		if (n) {
			let t = zs.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_right", n);
			r = t.x, i = t.y;
		}
		t.attr("transform", `translate(${r}, ${i})`);
	}
	if (e.endLabelLeft) {
		let t = xm.get(e.id).endLeft, r = e.x, i = e.y;
		if (n) {
			let t = zs.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_left", n);
			r = t.x, i = t.y;
		}
		t.attr("transform", `translate(${r}, ${i})`);
	}
	if (e.endLabelRight) {
		let t = xm.get(e.id).endRight, r = e.x, i = e.y;
		if (n) {
			let t = zs.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_right", n);
			r = t.x, i = t.y;
		}
		t.attr("transform", `translate(${r}, ${i})`);
	}
}, "positionEdgeLabel"), Om = /* @__PURE__ */ i((e, t) => {
	if (!e?.isLabelEdge || !e?.id?.endsWith("-to-label") || !Array.isArray(t) || t.length !== 2) return t;
	let [n, r] = t, i = Math.abs(r.x - n.x), a = Math.abs(r.y - n.y);
	return i < .001 || a < .001 ? t : a >= i ? [
		n,
		{
			x: n.x,
			y: r.y
		},
		r
	] : [
		n,
		{
			x: r.x,
			y: n.y
		},
		r
	];
}, "orthogonalizeToLabelClippedPoints"), km = /* @__PURE__ */ i((e, t) => {
	let n = e.x, r = e.y, i = Math.abs(t.x - n), a = Math.abs(t.y - r), o = e.width / 2, s = e.height / 2;
	return i >= o || a >= s;
}, "outsideNode"), Am = /* @__PURE__ */ i((e, t, n) => {
	p.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(n)}
  node        : x:${e.x} y:${e.y} w:${e.width} h:${e.height}`);
	let r = e.x, i = e.y, a = Math.abs(r - n.x), o = e.width / 2, s = n.x < t.x ? o - a : o + a, c = e.height / 2, l = Math.abs(t.y - n.y), u = Math.abs(t.x - n.x);
	if (Math.abs(i - t.y) * o > Math.abs(r - t.x) * c) {
		let e = n.y < t.y ? t.y - c - i : i - c - t.y;
		s = u * e / l;
		let r = {
			x: n.x < t.x ? n.x + s : n.x - u + s,
			y: n.y < t.y ? n.y + l - e : n.y - l + e
		};
		return s === 0 && (r.x = t.x, r.y = t.y), u === 0 && (r.x = t.x), l === 0 && (r.y = t.y), p.debug(`abc89 top/bottom calc, Q ${l}, q ${e}, R ${u}, r ${s}`, r), r;
	}
	{
		s = n.x < t.x ? t.x - o - r : r - o - t.x;
		let e = l * s / u, i = n.x < t.x ? n.x + u - s : n.x - u + s, a = n.y < t.y ? n.y + e : n.y - e;
		return p.debug(`sides calc abc89, Q ${l}, q ${e}, R ${u}, r ${s}`, {
			_x: i,
			_y: a
		}), s === 0 && (i = t.x, a = t.y), u === 0 && (i = t.x), l === 0 && (a = t.y), {
			x: i,
			y: a
		};
	}
}, "intersection"), jm = /* @__PURE__ */ i((e, t) => {
	p.warn("abc88 cutPathAtIntersect", e, t);
	let n = [], r = e[0], i = !1;
	return e.forEach((e) => {
		if (p.info("abc88 checking point", e, t), !km(t, e) && !i) {
			let a = Am(t, r, e);
			p.debug("abc88 inside", e, r, a), p.debug("abc88 intersection", a, t);
			let o = !1;
			n.forEach((e) => {
				o ||= e.x === a.x && e.y === a.y;
			}), n.some((e) => e.x === a.x && e.y === a.y) ? p.warn("abc88 no intersect", a, n) : n.push(a), i = !0;
		} else p.warn("abc88 outside", e, r), r = e, i || n.push(e);
	}), p.debug("returning points", n), n;
}, "cutPathAtIntersect");
function Mm(e) {
	let t = [], n = [];
	for (let r = 1; r < e.length - 1; r++) {
		let i = e[r - 1], a = e[r], o = e[r + 1];
		(i.x === a.x && a.y === o.y && Math.abs(a.x - o.x) > 5 && Math.abs(a.y - i.y) > 5 || i.y === a.y && a.x === o.x && Math.abs(a.x - i.x) > 5 && Math.abs(a.y - o.y) > 5) && (t.push(a), n.push(r));
	}
	return {
		cornerPoints: t,
		cornerPointPositions: n
	};
}
i(Mm, "extractCornerPoints");
var Nm = /* @__PURE__ */ i(function(e, t, n) {
	let r = t.x - e.x, i = t.y - e.y, a = n / Math.sqrt(r * r + i * i);
	return {
		x: t.x - a * r,
		y: t.y - a * i
	};
}, "findAdjacentPoint"), Pm = /* @__PURE__ */ i(function(e) {
	let { cornerPointPositions: t } = Mm(e), n = [];
	for (let r = 0; r < e.length; r++) if (t.includes(r)) {
		let t = e[r - 1], i = e[r + 1], a = e[r], o = Nm(t, a, 5), s = Nm(i, a, 5), c = s.x - o.x, l = s.y - o.y;
		n.push(o);
		let u = Math.sqrt(2) * 2, d = {
			x: a.x,
			y: a.y
		};
		Math.abs(i.x - t.x) > 10 && Math.abs(i.y - t.y) >= 10 ? (p.debug("Corner point fixing", Math.abs(i.x - t.x), Math.abs(i.y - t.y)), d = a.x === o.x ? {
			x: c < 0 ? o.x - 5 + u : o.x + 5 - u,
			y: l < 0 ? o.y - u : o.y + u
		} : {
			x: c < 0 ? o.x - u : o.x + u,
			y: l < 0 ? o.y - 5 + u : o.y + 5 - u
		}) : p.debug("Corner point skipping fixing", Math.abs(i.x - t.x), Math.abs(i.y - t.y)), n.push(d, s);
	} else n.push(e[r]);
	return n;
}, "fixCorners"), Fm = /* @__PURE__ */ i((e, t, n) => {
	let r = e - t - n, i = Math.floor(r / 4);
	return `0 ${t} ${Array(Number.isFinite(i) ? Math.max(0, i) : 0).fill("2 2").join(" ")} ${n}`;
}, "generateDashArray"), Im = /* @__PURE__ */ i(function(e, t, r, i, a, o, s, c = !1) {
	if (!s) throw Error(`insertEdge: missing diagramId for edge "${t.id}" — edge IDs require a diagram prefix for uniqueness`);
	let { handDrawnSeed: l, layout: u } = V(), d = t.points, f = !1, m = a;
	var h = o;
	let g = [];
	for (let e in t.cssCompiledStyles) va(e) || g.push(t.cssCompiledStyles[e]);
	if (u === "swimlane") {
		if (h.intersect && m.intersect && Array.isArray(d) && d.length >= 2) {
			if (d.length === 2) d = [m.intersect(d[0]), h.intersect(d[1])];
			else {
				let e = d.slice(1, -1), t = e[0], n = e[e.length - 1], r = .5, i = Math.abs(d[d.length - 1].x - n.x) < r && Math.abs(d[d.length - 1].y - n.y) < r, a = m.intersect(t), o = i ? n : h.intersect(n), s = Math.abs(o.x - n.x) < r && Math.abs(o.y - n.y) < r, c = Math.abs(a.x - t.x) < r && Math.abs(a.y - t.y) < r ? [] : [a], l = s ? [] : [o];
				d = [
					...c,
					...e,
					...l
				];
			}
		}
		d = Om(t, d);
	} else h.intersect && m.intersect && !c && (d = d.slice(1, t.points.length - 1), d.unshift(m.intersect(d[0])), d.push(h.intersect(d[d.length - 1])));
	let _ = btoa(JSON.stringify(d));
	t.toCluster && (p.info("to cluster abc88", r.get(t.toCluster)), d = jm(t.points, r.get(t.toCluster).node), f = !0), t.fromCluster && (p.debug("from cluster abc88", r.get(t.fromCluster), JSON.stringify(d, null, 2)), d = jm(d.reverse(), r.get(t.fromCluster).node).reverse(), f = !0);
	let v = d.filter((e) => !Number.isNaN(e.y)), y = ym(t.curve);
	y !== "rounded" && (v = Pm(v));
	let b = vi;
	switch (y) {
		case "linear":
			b = vi;
			break;
		case "basis":
			b = Oi;
			break;
		case "cardinal":
			b = Li;
			break;
		case "bumpX":
			b = Ci;
			break;
		case "bumpY":
			b = wi;
			break;
		case "catmullRom":
			b = Wi;
			break;
		case "monotoneX":
			b = ia;
			break;
		case "monotoneY":
			b = aa;
			break;
		case "natural":
			b = ca;
			break;
		case "step":
			b = ua;
			break;
		case "stepAfter":
			b = fa;
			break;
		case "stepBefore":
			b = da;
			break;
		case "rounded":
			b = vi;
			break;
		default: b = Oi;
	}
	let { x, y: S } = mm(t), C = xi().x(x).y(S).curve(b), w;
	switch (t.thickness) {
		case "normal":
			w = "edge-thickness-normal";
			break;
		case "thick":
			w = "edge-thickness-thick";
			break;
		case "invisible":
			w = "edge-thickness-invisible";
			break;
		default: w = "edge-thickness-normal";
	}
	switch (t.pattern) {
		case "solid":
			w += " edge-pattern-solid";
			break;
		case "dotted":
			w += " edge-pattern-dotted";
			break;
		case "dashed":
			w += " edge-pattern-dashed";
			break;
		default: w += " edge-pattern-solid";
	}
	let T, E = y === "rounded" ? Lm(zm(v, t), 5) : C(v), D = Array.isArray(t.style) ? t.style : [t.style], O = D.find((e) => e?.startsWith("stroke:")), k = "";
	t.animate && (k = "edge-animation-fast"), t.animation && (k = "edge-animation-" + t.animation);
	let ee = !1;
	if (t.look === "handDrawn") {
		let r = q.svg(e);
		Object.assign([], v);
		let i = r.path(E, {
			roughness: .3,
			seed: l
		});
		w += " transition", T = n(i).select("path").attr("id", `${s}-${t.id}`).attr("class", " " + w + (t.classes ? " " + t.classes : "") + (k ? " " + k : "")).attr("style", D ? D.reduce((e, t) => e + ";" + t, "") : "");
		let a = T.attr("d");
		T.attr("d", a), e.node().appendChild(T.node());
	} else {
		let n = g.join(";"), r = D ? D.reduce((e, t) => e + t + ";", "") : "", i = (n ? n + ";" + r + ";" : r) + ";" + (D ? D.reduce((e, t) => e + ";" + t, "") : "");
		T = e.append("path").attr("d", E).attr("id", `${s}-${t.id}`).attr("class", " " + w + (t.classes ? " " + t.classes : "") + (k ? " " + k : "")).attr("style", i), O = i.match(/stroke:([^;]+)/)?.[1], ee = t.animate === !0 || !!t.animation || n.includes("animation");
		let a = T.node(), o = typeof a.getTotalLength == "function" ? a.getTotalLength() : 0, c = dm[t.arrowTypeStart] || 0, l = dm[t.arrowTypeEnd] || 0;
		if (t.look === "neo" && !ee) {
			let e = `stroke-dasharray: ${t.pattern === "dotted" || t.pattern === "dashed" ? Fm(o, c, l) : `0 ${c} ${o - c - l} ${l}`}; stroke-dashoffset: 0;`;
			T.attr("style", e + T.attr("style"));
		}
	}
	T.attr("data-edge", !0), T.attr("data-et", "edge"), T.attr("data-id", t.id), T.attr("data-points", _), T.attr("data-look", Us(t.look)), t.showPoints && v.forEach((t) => {
		e.append("circle").style("stroke", "red").style("fill", "red").attr("r", 1).attr("cx", t.x).attr("cy", t.y);
	});
	let A = "";
	(V().flowchart.arrowMarkerAbsolute || V().state.arrowMarkerAbsolute) && (A = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, A = A.replace(/\(/g, "\\(").replace(/\)/g, "\\)")), p.info("arrowTypeStart", t.arrowTypeStart), p.info("arrowTypeEnd", t.arrowTypeEnd);
	let te = !ee && t?.look === "neo";
	hm(T, t, A, s, i, te, O);
	let j = Math.floor(d.length / 2), M = d[j];
	zs.isLabelCoordinateInPath(M, T.attr("d")) || (f = !0);
	let N = {};
	return f && (N.updatedPath = d), N.originalPath = t.points, N;
}, "insertEdge");
function Lm(e, t) {
	if (e.length < 2) return "";
	let n = "", r = e.length, i = 1e-5;
	for (let a = 0; a < r; a++) {
		let o = e[a], s = e[a - 1], c = e[a + 1];
		if (a === 0) n += `M${o.x},${o.y}`;
		else if (a === r - 1) n += `L${o.x},${o.y}`;
		else {
			let e = o.x - s.x, r = o.y - s.y, a = c.x - o.x, l = c.y - o.y, u = Math.hypot(e, r), d = Math.hypot(a, l);
			if (u < i || d < i) {
				n += `L${o.x},${o.y}`;
				continue;
			}
			let f = e / u, p = r / u, m = a / d, h = l / d, g = f * m + p * h, _ = Math.acos(Math.max(-1, Math.min(1, g)));
			if (_ < i || Math.abs(Math.PI - _) < i) {
				n += `L${o.x},${o.y}`;
				continue;
			}
			let v = Math.min(t / Math.sin(_ / 2), u / 2, d / 2), y = o.x - f * v, b = o.y - p * v, x = o.x + m * v, S = o.y + h * v;
			n += `L${y},${b}`, n += `Q${o.x},${o.y} ${x},${S}`;
		}
	}
	return n;
}
i(Lm, "generateRoundedPath");
function Rm(e, t) {
	if (!e || !t) return {
		angle: 0,
		deltaX: 0,
		deltaY: 0
	};
	let n = t.x - e.x, r = t.y - e.y;
	return {
		angle: Math.atan2(r, n),
		deltaX: n,
		deltaY: r
	};
}
i(Rm, "calculateDeltaAndAngle");
function zm(e, t) {
	let n = e.map((e) => ({ ...e }));
	if (e.length >= 2 && um[t.arrowTypeStart]) {
		let r = um[t.arrowTypeStart], i = e[0], a = e[1], { angle: o } = Rm(i, a), s = r * Math.cos(o), c = r * Math.sin(o);
		n[0].x = i.x + s, n[0].y = i.y + c;
	}
	let r = e.length;
	if (r >= 2 && um[t.arrowTypeEnd]) {
		let i = um[t.arrowTypeEnd], a = e[r - 1], o = e[r - 2], { angle: s } = Rm(o, a), c = i * Math.cos(s), l = i * Math.sin(s);
		n[r - 1].x = a.x - c, n[r - 1].y = a.y - l;
	}
	return n;
}
i(zm, "applyMarkerOffsetsToPoints");
var Bm = /* @__PURE__ */ i((e, t, n, r) => {
	t.forEach((t) => {
		Vm[t](e, n, r);
	});
}, "insertMarkers"), Vm = {
	extension: /* @__PURE__ */ i((e, t, n) => {
		p.trace("Making markers for ", n), e.append("defs").append("marker").attr("id", n + "_" + t + "-extensionStart").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), e.append("defs").append("marker").attr("id", n + "_" + t + "-extensionEnd").attr("class", "marker extension " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 1,1 V 13 L18,7 Z"), e.append("marker").attr("id", n + "_" + t + "-extensionStart-margin").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").attr("viewBox", "0 0 20 14").append("polygon").attr("points", "10,7 18,13 18,1").style("stroke-width", 2).style("stroke-dasharray", "0"), e.append("defs").append("marker").attr("id", n + "_" + t + "-extensionEnd-margin").attr("class", "marker extension " + t).attr("refX", 9).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").attr("viewBox", "0 0 20 14").append("polygon").attr("points", "10,1 10,13 18,7").style("stroke-width", 2).style("stroke-dasharray", "0");
	}, "extension"),
	composition: /* @__PURE__ */ i((e, t, n) => {
		e.append("defs").append("marker").attr("id", n + "_" + t + "-compositionStart").attr("class", "marker composition " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", n + "_" + t + "-compositionEnd").attr("class", "marker composition " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", n + "_" + t + "-compositionStart-margin").attr("class", "marker composition " + t).attr("refX", 15).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("viewBox", "0 0 15 15").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", n + "_" + t + "-compositionEnd-margin").attr("class", "marker composition " + t).attr("refX", 3.5).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
	}, "composition"),
	aggregation: /* @__PURE__ */ i((e, t, n) => {
		e.append("defs").append("marker").attr("id", n + "_" + t + "-aggregationStart").attr("class", "marker aggregation " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", n + "_" + t + "-aggregationEnd").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", n + "_" + t + "-aggregationStart-margin").attr("class", "marker aggregation " + t).attr("refX", 15).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 2).attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", n + "_" + t + "-aggregationEnd-margin").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 2).attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
	}, "aggregation"),
	dependency: /* @__PURE__ */ i((e, t, n) => {
		e.append("defs").append("marker").attr("id", n + "_" + t + "-dependencyStart").attr("class", "marker dependency " + t).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", n + "_" + t + "-dependencyEnd").attr("class", "marker dependency " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z"), e.append("defs").append("marker").attr("id", n + "_" + t + "-dependencyStart-margin").attr("class", "marker dependency " + t).attr("refX", 4).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", n + "_" + t + "-dependencyEnd-margin").attr("class", "marker dependency " + t).attr("refX", 16).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
	}, "dependency"),
	lollipop: /* @__PURE__ */ i((e, t, n) => {
		e.append("defs").append("marker").attr("id", n + "_" + t + "-lollipopStart").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e.append("defs").append("marker").attr("id", n + "_" + t + "-lollipopEnd").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e.append("defs").append("marker").attr("id", n + "_" + t + "-lollipopStart-margin").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6).attr("stroke-width", 2), e.append("defs").append("marker").attr("id", n + "_" + t + "-lollipopEnd-margin").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6).attr("stroke-width", 2);
	}, "lollipop"),
	point: /* @__PURE__ */ i((e, t, n) => {
		e.append("marker").attr("id", n + "_" + t + "-pointEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", n + "_" + t + "-pointStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", n + "_" + t + "-pointEnd-margin").attr("class", "marker " + t).attr("viewBox", "0 0 11.5 14").attr("refX", 11.5).attr("refY", 7).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 10.5).attr("markerHeight", 14).attr("orient", "auto").append("path").attr("d", "M 0 0 L 11.5 7 L 0 14 z").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", n + "_" + t + "-pointStart-margin").attr("class", "marker " + t).attr("viewBox", "0 0 11.5 14").attr("refX", 1).attr("refY", 7).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11.5).attr("markerHeight", 14).attr("orient", "auto").append("polygon").attr("points", "0,7 11.5,14 11.5,0").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0");
	}, "point"),
	circle: /* @__PURE__ */ i((e, t, n) => {
		e.append("marker").attr("id", n + "_" + t + "-circleEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", n + "_" + t + "-circleStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", n + "_" + t + "-circleEnd-margin").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refY", 5).attr("refX", 12.25).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 14).attr("markerHeight", 14).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", n + "_" + t + "-circleStart-margin").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -2).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 14).attr("markerHeight", 14).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0");
	}, "circle"),
	cross: /* @__PURE__ */ i((e, t, n) => {
		e.append("marker").attr("id", n + "_" + t + "-crossEnd").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", n + "_" + t + "-crossStart").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", n + "_" + t + "-crossEnd-margin").attr("class", "marker cross " + t).attr("viewBox", "0 0 15 15").attr("refX", 17.7).attr("refY", 7.5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 1,1 L 14,14 M 1,14 L 14,1").attr("class", "arrowMarkerPath").style("stroke-width", 2.5), e.append("marker").attr("id", n + "_" + t + "-crossStart-margin").attr("class", "marker cross " + t).attr("viewBox", "0 0 15 15").attr("refX", -3.5).attr("refY", 7.5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 1,1 L 14,14 M 1,14 L 14,1").attr("class", "arrowMarkerPath").style("stroke-width", 2.5).style("stroke-dasharray", "1,0");
	}, "cross"),
	barb: /* @__PURE__ */ i((e, t, n) => {
		e.append("defs").append("marker").attr("id", n + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
	}, "barb"),
	barbNeo: /* @__PURE__ */ i((e, t, n) => {
		let { themeVariables: r } = B(), { transitionColor: i } = r;
		e.append("defs").append("marker").attr("id", n + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "strokeWidth").attr("orient", "auto").append("path").attr("d", "M 19,7 L11,14 L13,7 L11,0 Z"), e.append("defs").append("marker").attr("id", n + "_" + t + "-barbEnd-margin").attr("refX", 17).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L11,14 L13,7 L11,0 Z").attr("fill", `${i}`);
	}, "barbNeo"),
	only_one: /* @__PURE__ */ i((e, t, n) => {
		e.append("defs").append("marker").attr("id", n + "_" + t + "-onlyOneStart").attr("class", "marker onlyOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18"), e.append("defs").append("marker").attr("id", n + "_" + t + "-onlyOneEnd").attr("class", "marker onlyOne " + t).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18");
	}, "only_one"),
	zero_or_one: /* @__PURE__ */ i((e, t, n) => {
		let r = e.append("defs").append("marker").attr("id", n + "_" + t + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
		r.append("circle").attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6), r.append("path").attr("d", "M9,0 L9,18");
		let i = e.append("defs").append("marker").attr("id", n + "_" + t + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + t).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
		i.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6), i.append("path").attr("d", "M21,0 L21,18");
	}, "zero_or_one"),
	one_or_more: /* @__PURE__ */ i((e, t, n) => {
		e.append("defs").append("marker").attr("id", n + "_" + t + "-oneOrMoreStart").attr("class", "marker oneOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"), e.append("defs").append("marker").attr("id", n + "_" + t + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + t).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
	}, "one_or_more"),
	zero_or_more: /* @__PURE__ */ i((e, t, n) => {
		let r = e.append("defs").append("marker").attr("id", n + "_" + t + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
		r.append("circle").attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6), r.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
		let i = e.append("defs").append("marker").attr("id", n + "_" + t + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + t).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
		i.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6), i.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
	}, "zero_or_more"),
	only_one_neo: /* @__PURE__ */ i((e, t, n) => {
		let { themeVariables: r } = B(), { strokeWidth: i } = r;
		e.append("defs").append("marker").attr("id", n + "_" + t + "-onlyOneStart").attr("class", "marker onlyOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18").attr("stroke-width", `${i}`), e.append("defs").append("marker").attr("id", n + "_" + t + "-onlyOneEnd").attr("class", "marker onlyOne " + t).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18").attr("stroke-width", `${i}`);
	}, "only_one_neo"),
	zero_or_one_neo: /* @__PURE__ */ i((e, t, n) => {
		let { themeVariables: r } = B(), { strokeWidth: i, mainBkg: a } = r, o = e.append("defs").append("marker").attr("id", n + "_" + t + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse");
		o.append("circle").attr("fill", a ?? "white").attr("cx", 21).attr("cy", 9).attr("stroke-width", `${i}`).attr("r", 6), o.append("path").attr("d", "M9,0 L9,18").attr("stroke-width", `${i}`);
		let s = e.append("defs").append("marker").attr("id", n + "_" + t + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + t).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto");
		s.append("circle").attr("fill", a ?? "white").attr("cx", 9).attr("cy", 9).attr("stroke-width", `${i}`).attr("r", 6), s.append("path").attr("d", "M21,0 L21,18").attr("stroke-width", `${i}`);
	}, "zero_or_one_neo"),
	one_or_more_neo: /* @__PURE__ */ i((e, t, n) => {
		let { themeVariables: r } = B(), { strokeWidth: i } = r;
		e.append("defs").append("marker").attr("id", n + "_" + t + "-oneOrMoreStart").attr("class", "marker oneOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27").attr("stroke-width", `${i}`), e.append("defs").append("marker").attr("id", n + "_" + t + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + t).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18").attr("stroke-width", `${i}`);
	}, "one_or_more_neo"),
	zero_or_more_neo: /* @__PURE__ */ i((e, t, n) => {
		let { themeVariables: r } = B(), { strokeWidth: i, mainBkg: a } = r, o = e.append("defs").append("marker").attr("id", n + "_" + t + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto");
		o.append("circle").attr("fill", a ?? "white").attr("cx", 45.5).attr("cy", 18).attr("r", 6).attr("stroke-width", `${i}`), o.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18").attr("stroke-width", `${i}`);
		let s = e.append("defs").append("marker").attr("id", n + "_" + t + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + t).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse");
		s.append("circle").attr("fill", a ?? "white").attr("cx", 11).attr("cy", 18).attr("r", 6).attr("stroke-width", `${i}`), s.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18").attr("stroke-width", `${i}`);
	}, "zero_or_more_neo"),
	requirement_arrow: /* @__PURE__ */ i((e, t, n) => {
		e.append("defs").append("marker").attr("id", n + "_" + t + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("path").attr("d", "M0,0\n      L20,10\n      M20,10\n      L0,20");
	}, "requirement_arrow"),
	requirement_contains: /* @__PURE__ */ i((e, t, n) => {
		let r = e.append("defs").append("marker").attr("id", n + "_" + t + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("g");
		r.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), r.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), r.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10);
	}, "requirement_contains"),
	requirement_arrow_neo: /* @__PURE__ */ i((e, t, n) => {
		let { themeVariables: r } = B(), { strokeWidth: i } = r;
		e.append("defs").append("marker").attr("id", n + "_" + t + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").attr("stroke-width", `${i}`).attr("viewBox", "0 0 25 20").append("path").attr("d", "M0,0\n      L20,10\n      M20,10\n      L0,20").attr("stroke-linejoin", "miter");
	}, "requirement_arrow_neo"),
	requirement_contains_neo: /* @__PURE__ */ i((e, t, n) => {
		let { themeVariables: r } = B(), { strokeWidth: i } = r, a = e.append("defs").append("marker").attr("id", n + "_" + t + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("g");
		a.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), a.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), a.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10), a.selectAll("*").attr("stroke-width", `${i}`);
	}, "requirement_contains_neo")
}, Hm = Bm, Um = typeof global == "object" && global && global.Object === Object && global, Wm = typeof self == "object" && self && self.Object === Object && self, Gm = Um || Wm || Function("return this")(), Km = Gm.Symbol, qm = Object.prototype, Jm = qm.hasOwnProperty, Ym = qm.toString, Xm = Km ? Km.toStringTag : void 0;
function Zm(e) {
	var t = Jm.call(e, Xm), n = e[Xm];
	try {
		e[Xm] = void 0;
		var r = !0;
	} catch {}
	var i = Ym.call(e);
	return r && (t ? e[Xm] = n : delete e[Xm]), i;
}
var Qm = Object.prototype.toString;
function $m(e) {
	return Qm.call(e);
}
var eh = "[object Null]", th = "[object Undefined]", nh = Km ? Km.toStringTag : void 0;
function rh(e) {
	return e == null ? e === void 0 ? th : eh : nh && nh in Object(e) ? Zm(e) : $m(e);
}
function ih(e) {
	return typeof e == "object" && !!e;
}
var ah = "[object Symbol]";
function oh(e) {
	return typeof e == "symbol" || ih(e) && rh(e) == ah;
}
function sh(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
var ch = Array.isArray, lh = Km ? Km.prototype : void 0, uh = lh ? lh.toString : void 0;
function dh(e) {
	if (typeof e == "string") return e;
	if (ch(e)) return sh(e, dh) + "";
	if (oh(e)) return uh ? uh.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function fh(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
function ph(e) {
	return e;
}
var mh = "[object AsyncFunction]", hh = "[object Function]", gh = "[object GeneratorFunction]", _h = "[object Proxy]";
function vh(e) {
	if (!fh(e)) return !1;
	var t = rh(e);
	return t == hh || t == gh || t == mh || t == _h;
}
var yh = Gm["__core-js_shared__"], bh = function() {
	var e = /[^.]+$/.exec(yh && yh.keys && yh.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function xh(e) {
	return !!bh && bh in e;
}
var Sh = Function.prototype.toString;
function Ch(e) {
	if (e != null) {
		try {
			return Sh.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
var wh = /[\\^$.*+?()[\]{}|]/g, Th = /^\[object .+?Constructor\]$/, Eh = Function.prototype, Dh = Object.prototype, Oh = Eh.toString, kh = Dh.hasOwnProperty, Ah = RegExp("^" + Oh.call(kh).replace(wh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function jh(e) {
	return !fh(e) || xh(e) ? !1 : (vh(e) ? Ah : Th).test(Ch(e));
}
function Mh(e, t) {
	return e?.[t];
}
function Nh(e, t) {
	var n = Mh(e, t);
	return jh(n) ? n : void 0;
}
var Ph = Nh(Gm, "WeakMap");
function Fh(e, t, n) {
	switch (n.length) {
		case 0: return e.call(t);
		case 1: return e.call(t, n[0]);
		case 2: return e.call(t, n[0], n[1]);
		case 3: return e.call(t, n[0], n[1], n[2]);
	}
	return e.apply(t, n);
}
function Ih() {}
var Lh = 800, Rh = 16, zh = Date.now;
function Bh(e) {
	var t = 0, n = 0;
	return function() {
		var r = zh(), i = Rh - (r - n);
		if (n = r, i > 0) {
			if (++t >= Lh) return arguments[0];
		} else t = 0;
		return e.apply(void 0, arguments);
	};
}
function Vh(e) {
	return function() {
		return e;
	};
}
var Hh = function() {
	try {
		var e = Nh(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}(), Uh = Bh(Hh ? function(e, t) {
	return Hh(e, "toString", {
		configurable: !0,
		enumerable: !1,
		value: Vh(t),
		writable: !0
	});
} : ph);
function Wh(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
function Gh(e, t, n, r) {
	for (var i = e.length, a = n + -1; ++a < i;) if (t(e[a], a, e)) return a;
	return -1;
}
function Kh(e) {
	return e !== e;
}
function qh(e, t, n) {
	for (var r = n - 1, i = e.length; ++r < i;) if (e[r] === t) return r;
	return -1;
}
function Jh(e, t, n) {
	return t === t ? qh(e, t, n) : Gh(e, Kh, n);
}
function Yh(e, t) {
	return !!(e != null && e.length) && Jh(e, t, 0) > -1;
}
var Xh = 9007199254740991, Zh = /^(?:0|[1-9]\d*)$/;
function Qh(e, t) {
	var n = typeof e;
	return t ??= Xh, !!t && (n == "number" || n != "symbol" && Zh.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function $h(e, t) {
	return e === t || e !== e && t !== t;
}
var eg = Math.max;
function tg(e, t, n) {
	return t = eg(t === void 0 ? e.length - 1 : t, 0), function() {
		for (var r = arguments, i = -1, a = eg(r.length - t, 0), o = Array(a); ++i < a;) o[i] = r[t + i];
		i = -1;
		for (var s = Array(t + 1); ++i < t;) s[i] = r[i];
		return s[t] = n(o), Fh(e, this, s);
	};
}
function ng(e, t) {
	return Uh(tg(e, t, ph), e + "");
}
var rg = 9007199254740991;
function ig(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= rg;
}
function ag(e) {
	return e != null && ig(e.length) && !vh(e);
}
var og = Object.prototype;
function sg(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || og);
}
function cg(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
var lg = "[object Arguments]";
function ug(e) {
	return ih(e) && rh(e) == lg;
}
var dg = Object.prototype, fg = dg.hasOwnProperty, pg = dg.propertyIsEnumerable, mg = ug(/* @__PURE__ */ function() {
	return arguments;
}()) ? ug : function(e) {
	return ih(e) && fg.call(e, "callee") && !pg.call(e, "callee");
};
function hg() {
	return !1;
}
var gg = typeof exports == "object" && exports && !exports.nodeType && exports, _g = gg && typeof module == "object" && module && !module.nodeType && module, vg = _g && _g.exports === gg ? Gm.Buffer : void 0, yg = (vg ? vg.isBuffer : void 0) || hg, bg = "[object Arguments]", xg = "[object Array]", Sg = "[object Boolean]", Cg = "[object Date]", wg = "[object Error]", Tg = "[object Function]", Eg = "[object Map]", Dg = "[object Number]", Og = "[object Object]", kg = "[object RegExp]", Ag = "[object Set]", jg = "[object String]", Mg = "[object WeakMap]", Ng = "[object ArrayBuffer]", Pg = "[object DataView]", Fg = "[object Float32Array]", Ig = "[object Float64Array]", Lg = "[object Int8Array]", Rg = "[object Int16Array]", zg = "[object Int32Array]", Bg = "[object Uint8Array]", Vg = "[object Uint8ClampedArray]", Hg = "[object Uint16Array]", Ug = "[object Uint32Array]", Wg = {};
Wg[Fg] = Wg[Ig] = Wg[Lg] = Wg[Rg] = Wg[zg] = Wg[Bg] = Wg[Vg] = Wg[Hg] = Wg[Ug] = !0, Wg[bg] = Wg[xg] = Wg[Ng] = Wg[Sg] = Wg[Pg] = Wg[Cg] = Wg[wg] = Wg[Tg] = Wg[Eg] = Wg[Dg] = Wg[Og] = Wg[kg] = Wg[Ag] = Wg[jg] = Wg[Mg] = !1;
function Gg(e) {
	return ih(e) && ig(e.length) && !!Wg[rh(e)];
}
function Kg(e) {
	return function(t) {
		return e(t);
	};
}
var qg = typeof exports == "object" && exports && !exports.nodeType && exports, Jg = qg && typeof module == "object" && module && !module.nodeType && module, Yg = Jg && Jg.exports === qg && Um.process, Xg = function() {
	try {
		return Jg && Jg.require && Jg.require("util").types || Yg && Yg.binding && Yg.binding("util");
	} catch {}
}(), Zg = Xg && Xg.isTypedArray, Qg = Zg ? Kg(Zg) : Gg, $g = Object.prototype.hasOwnProperty;
function e_(e, t) {
	var n = ch(e), r = !n && mg(e), i = !n && !r && yg(e), a = !n && !r && !i && Qg(e), o = n || r || i || a, s = o ? cg(e.length, String) : [], c = s.length;
	for (var l in e) (t || $g.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Qh(l, c))) && s.push(l);
	return s;
}
function t_(e, t) {
	return function(n) {
		return e(t(n));
	};
}
var n_ = t_(Object.keys, Object), r_ = Object.prototype.hasOwnProperty;
function i_(e) {
	if (!sg(e)) return n_(e);
	var t = [];
	for (var n in Object(e)) r_.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
function a_(e) {
	return ag(e) ? e_(e) : i_(e);
}
var o_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, s_ = /^\w*$/;
function c_(e, t) {
	if (ch(e)) return !1;
	var n = typeof e;
	return n == "number" || n == "symbol" || n == "boolean" || e == null || oh(e) ? !0 : s_.test(e) || !o_.test(e) || t != null && e in Object(t);
}
var l_ = Nh(Object, "create");
function u_() {
	this.__data__ = l_ ? l_(null) : {}, this.size = 0;
}
function d_(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= +!!t, t;
}
var f_ = "__lodash_hash_undefined__", p_ = Object.prototype.hasOwnProperty;
function m_(e) {
	var t = this.__data__;
	if (l_) {
		var n = t[e];
		return n === f_ ? void 0 : n;
	}
	return p_.call(t, e) ? t[e] : void 0;
}
var h_ = Object.prototype.hasOwnProperty;
function g_(e) {
	var t = this.__data__;
	return l_ ? t[e] !== void 0 : h_.call(t, e);
}
var __ = "__lodash_hash_undefined__";
function v_(e, t) {
	var n = this.__data__;
	return this.size += +!this.has(e), n[e] = l_ && t === void 0 ? __ : t, this;
}
function y_(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
y_.prototype.clear = u_, y_.prototype.delete = d_, y_.prototype.get = m_, y_.prototype.has = g_, y_.prototype.set = v_;
function b_() {
	this.__data__ = [], this.size = 0;
}
function x_(e, t) {
	for (var n = e.length; n--;) if ($h(e[n][0], t)) return n;
	return -1;
}
var S_ = Array.prototype.splice;
function C_(e) {
	var t = this.__data__, n = x_(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : S_.call(t, n, 1), --this.size, !0);
}
function w_(e) {
	var t = this.__data__, n = x_(t, e);
	return n < 0 ? void 0 : t[n][1];
}
function T_(e) {
	return x_(this.__data__, e) > -1;
}
function E_(e, t) {
	var n = this.__data__, r = x_(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function D_(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
D_.prototype.clear = b_, D_.prototype.delete = C_, D_.prototype.get = w_, D_.prototype.has = T_, D_.prototype.set = E_;
var O_ = Nh(Gm, "Map");
function k_() {
	this.size = 0, this.__data__ = {
		hash: new y_(),
		map: new (O_ || D_)(),
		string: new y_()
	};
}
function A_(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function j_(e, t) {
	var n = e.__data__;
	return A_(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function M_(e) {
	var t = j_(this, e).delete(e);
	return this.size -= +!!t, t;
}
function N_(e) {
	return j_(this, e).get(e);
}
function P_(e) {
	return j_(this, e).has(e);
}
function F_(e, t) {
	var n = j_(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function I_(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
I_.prototype.clear = k_, I_.prototype.delete = M_, I_.prototype.get = N_, I_.prototype.has = P_, I_.prototype.set = F_;
var L_ = "Expected a function";
function R_(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(L_);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (R_.Cache || I_)(), n;
}
R_.Cache = I_;
var z_ = 500;
function B_(e) {
	var t = R_(e, function(e) {
		return n.size === z_ && n.clear(), e;
	}), n = t.cache;
	return t;
}
var V_ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, H_ = /\\(\\)?/g, U_ = B_(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(V_, function(e, n, r, i) {
		t.push(r ? i.replace(H_, "$1") : n || e);
	}), t;
});
function W_(e) {
	return e == null ? "" : dh(e);
}
function G_(e, t) {
	return ch(e) ? e : c_(e, t) ? [e] : U_(W_(e));
}
function K_(e) {
	if (typeof e == "string" || oh(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function q_(e, t) {
	t = G_(t, e);
	for (var n = 0, r = t.length; e != null && n < r;) e = e[K_(t[n++])];
	return n && n == r ? e : void 0;
}
function J_(e, t, n) {
	var r = e == null ? void 0 : q_(e, t);
	return r === void 0 ? n : r;
}
function Y_(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
var X_ = Km ? Km.isConcatSpreadable : void 0;
function Z_(e) {
	return ch(e) || mg(e) || !!(X_ && e && e[X_]);
}
function Q_(e, t, n, r, i) {
	var a = -1, o = e.length;
	for (n ||= Z_, i ||= []; ++a < o;) {
		var s = e[a];
		n(s) ? Y_(i, s) : r || (i[i.length] = s);
	}
	return i;
}
function $_(e, t, n, r) {
	var i = -1, a = e == null ? 0 : e.length;
	for (r && a && (n = e[++i]); ++i < a;) n = t(n, e[i], i, e);
	return n;
}
function ev() {
	this.__data__ = new D_(), this.size = 0;
}
function tv(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
function nv(e) {
	return this.__data__.get(e);
}
function rv(e) {
	return this.__data__.has(e);
}
var iv = 200;
function av(e, t) {
	var n = this.__data__;
	if (n instanceof D_) {
		var r = n.__data__;
		if (!O_ || r.length < iv - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new I_(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
function ov(e) {
	var t = this.__data__ = new D_(e);
	this.size = t.size;
}
ov.prototype.clear = ev, ov.prototype.delete = tv, ov.prototype.get = nv, ov.prototype.has = rv, ov.prototype.set = av;
function sv(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
function cv() {
	return [];
}
var lv = Object.prototype.propertyIsEnumerable, uv = Object.getOwnPropertySymbols, dv = uv ? function(e) {
	return e == null ? [] : (e = Object(e), sv(uv(e), function(t) {
		return lv.call(e, t);
	}));
} : cv;
function fv(e, t, n) {
	var r = t(e);
	return ch(e) ? r : Y_(r, n(e));
}
function pv(e) {
	return fv(e, a_, dv);
}
var mv = Nh(Gm, "DataView"), hv = Nh(Gm, "Promise"), gv = Nh(Gm, "Set"), _v = "[object Map]", vv = "[object Object]", yv = "[object Promise]", bv = "[object Set]", xv = "[object WeakMap]", Sv = "[object DataView]", Cv = Ch(mv), wv = Ch(O_), Tv = Ch(hv), Ev = Ch(gv), Dv = Ch(Ph), Ov = rh;
(mv && Ov(new mv(/* @__PURE__ */ new ArrayBuffer(1))) != Sv || O_ && Ov(new O_()) != _v || hv && Ov(hv.resolve()) != yv || gv && Ov(new gv()) != bv || Ph && Ov(new Ph()) != xv) && (Ov = function(e) {
	var t = rh(e), n = t == vv ? e.constructor : void 0, r = n ? Ch(n) : "";
	if (r) switch (r) {
		case Cv: return Sv;
		case wv: return _v;
		case Tv: return yv;
		case Ev: return bv;
		case Dv: return xv;
	}
	return t;
});
var kv = Gm.Uint8Array, Av = "__lodash_hash_undefined__";
function jv(e) {
	return this.__data__.set(e, Av), this;
}
function Mv(e) {
	return this.__data__.has(e);
}
function Nv(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.__data__ = new I_(); ++t < n;) this.add(e[t]);
}
Nv.prototype.add = Nv.prototype.push = jv, Nv.prototype.has = Mv;
function Pv(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
	return !1;
}
function Fv(e, t) {
	return e.has(t);
}
var Iv = 1, Lv = 2;
function Rv(e, t, n, r, i, a) {
	var o = n & Iv, s = e.length, c = t.length;
	if (s != c && !(o && c > s)) return !1;
	var l = a.get(e), u = a.get(t);
	if (l && u) return l == t && u == e;
	var d = -1, f = !0, p = n & Lv ? new Nv() : void 0;
	for (a.set(e, t), a.set(t, e); ++d < s;) {
		var m = e[d], h = t[d];
		if (r) var g = o ? r(h, m, d, t, e, a) : r(m, h, d, e, t, a);
		if (g !== void 0) {
			if (g) continue;
			f = !1;
			break;
		}
		if (p) {
			if (!Pv(t, function(e, t) {
				if (!Fv(p, t) && (m === e || i(m, e, n, r, a))) return p.push(t);
			})) {
				f = !1;
				break;
			}
		} else if (!(m === h || i(m, h, n, r, a))) {
			f = !1;
			break;
		}
	}
	return a.delete(e), a.delete(t), f;
}
function zv(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e, r) {
		n[++t] = [r, e];
	}), n;
}
function Bv(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e) {
		n[++t] = e;
	}), n;
}
var Vv = 1, Hv = 2, Uv = "[object Boolean]", Wv = "[object Date]", Gv = "[object Error]", Kv = "[object Map]", qv = "[object Number]", Jv = "[object RegExp]", Yv = "[object Set]", Xv = "[object String]", Zv = "[object Symbol]", Qv = "[object ArrayBuffer]", $v = "[object DataView]", ey = Km ? Km.prototype : void 0, ty = ey ? ey.valueOf : void 0;
function ny(e, t, n, r, i, a, o) {
	switch (n) {
		case $v:
			if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
			e = e.buffer, t = t.buffer;
		case Qv: return !(e.byteLength != t.byteLength || !a(new kv(e), new kv(t)));
		case Uv:
		case Wv:
		case qv: return $h(+e, +t);
		case Gv: return e.name == t.name && e.message == t.message;
		case Jv:
		case Xv: return e == t + "";
		case Kv: var s = zv;
		case Yv:
			var c = r & Vv;
			if (s ||= Bv, e.size != t.size && !c) return !1;
			var l = o.get(e);
			if (l) return l == t;
			r |= Hv, o.set(e, t);
			var u = Rv(s(e), s(t), r, i, a, o);
			return o.delete(e), u;
		case Zv: if (ty) return ty.call(e) == ty.call(t);
	}
	return !1;
}
var ry = 1, iy = Object.prototype.hasOwnProperty;
function ay(e, t, n, r, i, a) {
	var o = n & ry, s = pv(e), c = s.length;
	if (c != pv(t).length && !o) return !1;
	for (var l = c; l--;) {
		var u = s[l];
		if (!(o ? u in t : iy.call(t, u))) return !1;
	}
	var d = a.get(e), f = a.get(t);
	if (d && f) return d == t && f == e;
	var p = !0;
	a.set(e, t), a.set(t, e);
	for (var m = o; ++l < c;) {
		u = s[l];
		var h = e[u], g = t[u];
		if (r) var _ = o ? r(g, h, u, t, e, a) : r(h, g, u, e, t, a);
		if (!(_ === void 0 ? h === g || i(h, g, n, r, a) : _)) {
			p = !1;
			break;
		}
		m ||= u == "constructor";
	}
	if (p && !m) {
		var v = e.constructor, y = t.constructor;
		v != y && "constructor" in e && "constructor" in t && !(typeof v == "function" && v instanceof v && typeof y == "function" && y instanceof y) && (p = !1);
	}
	return a.delete(e), a.delete(t), p;
}
var oy = 1, sy = "[object Arguments]", cy = "[object Array]", ly = "[object Object]", uy = Object.prototype.hasOwnProperty;
function dy(e, t, n, r, i, a) {
	var o = ch(e), s = ch(t), c = o ? cy : Ov(e), l = s ? cy : Ov(t);
	c = c == sy ? ly : c, l = l == sy ? ly : l;
	var u = c == ly, d = l == ly, f = c == l;
	if (f && yg(e)) {
		if (!yg(t)) return !1;
		o = !0, u = !1;
	}
	if (f && !u) return a ||= new ov(), o || Qg(e) ? Rv(e, t, n, r, i, a) : ny(e, t, c, n, r, i, a);
	if (!(n & oy)) {
		var p = u && uy.call(e, "__wrapped__"), m = d && uy.call(t, "__wrapped__");
		if (p || m) {
			var h = p ? e.value() : e, g = m ? t.value() : t;
			return a ||= new ov(), i(h, g, n, r, a);
		}
	}
	return f ? (a ||= new ov(), ay(e, t, n, r, i, a)) : !1;
}
function fy(e, t, n, r, i) {
	return e === t ? !0 : e == null || t == null || !ih(e) && !ih(t) ? e !== e && t !== t : dy(e, t, n, r, fy, i);
}
var py = 1, my = 2;
function hy(e, t, n, r) {
	var i = n.length, a = i;
	if (e == null) return !a;
	for (e = Object(e); i--;) {
		var o = n[i];
		if (o[2] ? o[1] !== e[o[0]] : !(o[0] in e)) return !1;
	}
	for (; ++i < a;) {
		o = n[i];
		var s = o[0], c = e[s], l = o[1];
		if (o[2]) {
			if (c === void 0 && !(s in e)) return !1;
		} else {
			var u = new ov(), d;
			if (!(d === void 0 ? fy(l, c, py | my, r, u) : d)) return !1;
		}
	}
	return !0;
}
function gy(e) {
	return e === e && !fh(e);
}
function _y(e) {
	for (var t = a_(e), n = t.length; n--;) {
		var r = t[n], i = e[r];
		t[n] = [
			r,
			i,
			gy(i)
		];
	}
	return t;
}
function vy(e, t) {
	return function(n) {
		return n != null && n[e] === t && (t !== void 0 || e in Object(n));
	};
}
function yy(e) {
	var t = _y(e);
	return t.length == 1 && t[0][2] ? vy(t[0][0], t[0][1]) : function(n) {
		return n === e || hy(n, e, t);
	};
}
function by(e, t) {
	return e != null && t in Object(e);
}
function xy(e, t, n) {
	t = G_(t, e);
	for (var r = -1, i = t.length, a = !1; ++r < i;) {
		var o = K_(t[r]);
		if (!(a = e != null && n(e, o))) break;
		e = e[o];
	}
	return a || ++r != i ? a : (i = e == null ? 0 : e.length, !!i && ig(i) && Qh(o, i) && (ch(e) || mg(e)));
}
function Sy(e, t) {
	return e != null && xy(e, t, by);
}
var Cy = 1, wy = 2;
function Ty(e, t) {
	return c_(e) && gy(t) ? vy(K_(e), t) : function(n) {
		var r = J_(n, e);
		return r === void 0 && r === t ? Sy(n, e) : fy(t, r, Cy | wy);
	};
}
function Ey(e) {
	return function(t) {
		return t?.[e];
	};
}
function Dy(e) {
	return function(t) {
		return q_(t, e);
	};
}
function Oy(e) {
	return c_(e) ? Ey(K_(e)) : Dy(e);
}
function ky(e) {
	return typeof e == "function" ? e : e == null ? ph : typeof e == "object" ? ch(e) ? Ty(e[0], e[1]) : yy(e) : Oy(e);
}
function Ay(e) {
	return function(e, t, n) {
		for (var r = -1, i = Object(e), a = n(e), o = a.length; o--;) {
			var s = a[++r];
			if (t(i[s], s, i) === !1) break;
		}
		return e;
	};
}
var jy = Ay();
function My(e, t) {
	return e && jy(e, t, a_);
}
function Ny(e, t) {
	return function(t, n) {
		if (t == null) return t;
		if (!ag(t)) return e(t, n);
		for (var r = t.length, i = -1, a = Object(t); ++i < r && n(a[i], i, a) !== !1;);
		return t;
	};
}
var Py = Ny(My);
function Fy(e) {
	return ih(e) && ag(e);
}
function Iy(e) {
	return typeof e == "function" ? e : ph;
}
function Ly(e, t) {
	return (ch(e) ? Wh : Py)(e, Iy(t));
}
function Ry(e, t) {
	var n = [];
	return Py(e, function(e, r, i) {
		t(e, r, i) && n.push(e);
	}), n;
}
function zy(e, t) {
	return (ch(e) ? sv : Ry)(e, ky(t));
}
function By(e, t) {
	return sh(t, function(t) {
		return e[t];
	});
}
function Vy(e) {
	return e == null ? [] : By(e, a_(e));
}
var Hy = "[object Map]", Uy = "[object Set]", Wy = Object.prototype.hasOwnProperty;
function Gy(e) {
	if (e == null) return !0;
	if (ag(e) && (ch(e) || typeof e == "string" || typeof e.splice == "function" || yg(e) || Qg(e) || mg(e))) return !e.length;
	var t = Ov(e);
	if (t == Hy || t == Uy) return !e.size;
	if (sg(e)) return !i_(e).length;
	for (var n in e) if (Wy.call(e, n)) return !1;
	return !0;
}
function Ky(e) {
	return e === void 0;
}
function qy(e, t, n, r, i) {
	return i(e, function(e, i, a) {
		n = r ? (r = !1, e) : t(n, e, i, a);
	}), n;
}
function Jy(e, t, n) {
	var r = ch(e) ? $_ : qy, i = arguments.length < 3;
	return r(e, ky(t), n, i, Py);
}
var Yy = gv && 1 / Bv(new gv([, -0]))[1] == 1 / 0 ? function(e) {
	return new gv(e);
} : Ih, Xy = 200;
function Zy(e, t, n) {
	var r = -1, i = Yh, a = e.length, o = !0, s = [], c = s;
	if (a >= Xy) {
		var l = Yy(e);
		if (l) return Bv(l);
		o = !1, i = Fv, c = new Nv();
	} else c = s;
	t: for (; ++r < a;) {
		var u = e[r], d = u;
		if (u = u === 0 ? 0 : u, o && d === d) {
			for (var f = c.length; f--;) if (c[f] === d) continue t;
			s.push(u);
		} else i(c, d, n) || (c !== s && c.push(d), s.push(u));
	}
	return s;
}
var Qy = ng(function(e) {
	return Zy(Q_(e, 1, Fy, !0));
}), $y = "\0", eb = "\0", tb = "", nb = class {
	constructor(e = {}) {
		this._isDirected = !Object.prototype.hasOwnProperty.call(e, "directed") || e.directed, this._isMultigraph = Object.prototype.hasOwnProperty.call(e, "multigraph") ? e.multigraph : !1, this._isCompound = Object.prototype.hasOwnProperty.call(e, "compound") ? e.compound : !1, this._label = void 0, this._defaultNodeLabelFn = Vh(void 0), this._defaultEdgeLabelFn = Vh(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children[eb] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {};
	}
	isDirected() {
		return this._isDirected;
	}
	isMultigraph() {
		return this._isMultigraph;
	}
	isCompound() {
		return this._isCompound;
	}
	setGraph(e) {
		return this._label = e, this;
	}
	graph() {
		return this._label;
	}
	setDefaultNodeLabel(e) {
		return vh(e) || (e = Vh(e)), this._defaultNodeLabelFn = e, this;
	}
	nodeCount() {
		return this._nodeCount;
	}
	nodes() {
		return a_(this._nodes);
	}
	sources() {
		var e = this;
		return zy(this.nodes(), function(t) {
			return Gy(e._in[t]);
		});
	}
	sinks() {
		var e = this;
		return zy(this.nodes(), function(t) {
			return Gy(e._out[t]);
		});
	}
	setNodes(e, t) {
		var n = arguments, r = this;
		return Ly(e, function(e) {
			n.length > 1 ? r.setNode(e, t) : r.setNode(e);
		}), this;
	}
	setNode(e, t) {
		return Object.prototype.hasOwnProperty.call(this._nodes, e) ? (arguments.length > 1 && (this._nodes[e] = t), this) : (this._nodes[e] = arguments.length > 1 ? t : this._defaultNodeLabelFn(e), this._isCompound && (this._parent[e] = eb, this._children[e] = {}, this._children[eb][e] = !0), this._in[e] = {}, this._preds[e] = {}, this._out[e] = {}, this._sucs[e] = {}, ++this._nodeCount, this);
	}
	node(e) {
		return this._nodes[e];
	}
	hasNode(e) {
		return Object.prototype.hasOwnProperty.call(this._nodes, e);
	}
	removeNode(e) {
		if (Object.prototype.hasOwnProperty.call(this._nodes, e)) {
			var t = (e) => this.removeEdge(this._edgeObjs[e]);
			delete this._nodes[e], this._isCompound && (this._removeFromParentsChildList(e), delete this._parent[e], Ly(this.children(e), (e) => {
				this.setParent(e);
			}), delete this._children[e]), Ly(a_(this._in[e]), t), delete this._in[e], delete this._preds[e], Ly(a_(this._out[e]), t), delete this._out[e], delete this._sucs[e], --this._nodeCount;
		}
		return this;
	}
	setParent(e, t) {
		if (!this._isCompound) throw Error("Cannot set parent in a non-compound graph");
		if (Ky(t)) t = eb;
		else {
			t += "";
			for (var n = t; !Ky(n); n = this.parent(n)) if (n === e) throw Error("Setting " + t + " as parent of " + e + " would create a cycle");
			this.setNode(t);
		}
		return this.setNode(e), this._removeFromParentsChildList(e), this._parent[e] = t, this._children[t][e] = !0, this;
	}
	_removeFromParentsChildList(e) {
		delete this._children[this._parent[e]][e];
	}
	parent(e) {
		if (this._isCompound) {
			var t = this._parent[e];
			if (t !== eb) return t;
		}
	}
	children(e) {
		if (Ky(e) && (e = eb), this._isCompound) {
			var t = this._children[e];
			if (t) return a_(t);
		} else {
			if (e === eb) return this.nodes();
			if (this.hasNode(e)) return [];
		}
	}
	predecessors(e) {
		var t = this._preds[e];
		if (t) return a_(t);
	}
	successors(e) {
		var t = this._sucs[e];
		if (t) return a_(t);
	}
	neighbors(e) {
		var t = this.predecessors(e);
		if (t) return Qy(t, this.successors(e));
	}
	isLeaf(e) {
		var t;
		return t = this.isDirected() ? this.successors(e) : this.neighbors(e), t.length === 0;
	}
	filterNodes(e) {
		var t = new this.constructor({
			directed: this._isDirected,
			multigraph: this._isMultigraph,
			compound: this._isCompound
		});
		t.setGraph(this.graph());
		var n = this;
		Ly(this._nodes, function(n, r) {
			e(r) && t.setNode(r, n);
		}), Ly(this._edgeObjs, function(e) {
			t.hasNode(e.v) && t.hasNode(e.w) && t.setEdge(e, n.edge(e));
		});
		var r = {};
		function i(e) {
			var a = n.parent(e);
			return a === void 0 || t.hasNode(a) ? (r[e] = a, a) : a in r ? r[a] : i(a);
		}
		return this._isCompound && Ly(t.nodes(), function(e) {
			t.setParent(e, i(e));
		}), t;
	}
	setDefaultEdgeLabel(e) {
		return vh(e) || (e = Vh(e)), this._defaultEdgeLabelFn = e, this;
	}
	edgeCount() {
		return this._edgeCount;
	}
	edges() {
		return Vy(this._edgeObjs);
	}
	setPath(e, t) {
		var n = this, r = arguments;
		return Jy(e, function(e, i) {
			return r.length > 1 ? n.setEdge(e, i, t) : n.setEdge(e, i), i;
		}), this;
	}
	setEdge() {
		var e, t, n, r, i = !1, a = arguments[0];
		typeof a == "object" && a && "v" in a ? (e = a.v, t = a.w, n = a.name, arguments.length === 2 && (r = arguments[1], i = !0)) : (e = a, t = arguments[1], n = arguments[3], arguments.length > 2 && (r = arguments[2], i = !0)), e = "" + e, t = "" + t, Ky(n) || (n = "" + n);
		var o = ab(this._isDirected, e, t, n);
		if (Object.prototype.hasOwnProperty.call(this._edgeLabels, o)) return i && (this._edgeLabels[o] = r), this;
		if (!Ky(n) && !this._isMultigraph) throw Error("Cannot set a named edge when isMultigraph = false");
		this.setNode(e), this.setNode(t), this._edgeLabels[o] = i ? r : this._defaultEdgeLabelFn(e, t, n);
		var s = ob(this._isDirected, e, t, n);
		return e = s.v, t = s.w, Object.freeze(s), this._edgeObjs[o] = s, rb(this._preds[t], e), rb(this._sucs[e], t), this._in[t][o] = s, this._out[e][o] = s, this._edgeCount++, this;
	}
	edge(e, t, n) {
		var r = arguments.length === 1 ? sb(this._isDirected, arguments[0]) : ab(this._isDirected, e, t, n);
		return this._edgeLabels[r];
	}
	hasEdge(e, t, n) {
		var r = arguments.length === 1 ? sb(this._isDirected, arguments[0]) : ab(this._isDirected, e, t, n);
		return Object.prototype.hasOwnProperty.call(this._edgeLabels, r);
	}
	removeEdge(e, t, n) {
		var r = arguments.length === 1 ? sb(this._isDirected, arguments[0]) : ab(this._isDirected, e, t, n), i = this._edgeObjs[r];
		return i && (e = i.v, t = i.w, delete this._edgeLabels[r], delete this._edgeObjs[r], ib(this._preds[t], e), ib(this._sucs[e], t), delete this._in[t][r], delete this._out[e][r], this._edgeCount--), this;
	}
	inEdges(e, t) {
		var n = this._in[e];
		if (n) {
			var r = Vy(n);
			return t ? zy(r, function(e) {
				return e.v === t;
			}) : r;
		}
	}
	outEdges(e, t) {
		var n = this._out[e];
		if (n) {
			var r = Vy(n);
			return t ? zy(r, function(e) {
				return e.w === t;
			}) : r;
		}
	}
	nodeEdges(e, t) {
		var n = this.inEdges(e, t);
		if (n) return n.concat(this.outEdges(e, t));
	}
};
nb.prototype._nodeCount = 0, nb.prototype._edgeCount = 0;
function rb(e, t) {
	e[t] ? e[t]++ : e[t] = 1;
}
function ib(e, t) {
	--e[t] || delete e[t];
}
function ab(e, t, n, r) {
	var i = "" + t, a = "" + n;
	if (!e && i > a) {
		var o = i;
		i = a, a = o;
	}
	return i + tb + a + tb + (Ky(r) ? $y : r);
}
function ob(e, t, n, r) {
	var i = "" + t, a = "" + n;
	if (!e && i > a) {
		var o = i;
		i = a, a = o;
	}
	var s = {
		v: i,
		w: a
	};
	return r && (s.name = r), s;
}
function sb(e, t) {
	return ab(e, t.v, t.w, t.name);
}
function cb(e, { edgePathsClass: t = "edges edgePaths" } = {}) {
	let n = e.insert("g").attr("class", "root");
	return {
		clusters: n.insert("g").attr("class", "clusters"),
		edgePaths: n.insert("g").attr("class", t),
		edgeLabels: n.insert("g").attr("class", "edgeLabels"),
		nodes: n.insert("g").attr("class", "nodes"),
		rootGroups: n
	};
}
i(cb, "createLayoutElementGroups");
async function lb(e, t) {
	if (t.label) {
		let { shapeSvg: n, bbox: r } = await J(e, t);
		t.labelBBox = {
			width: r.width,
			height: r.height
		}, n.remove();
	} else t.labelBBox = {
		width: 0,
		height: 0
	};
}
i(lb, "measureGroupLabel");
async function ub(e, t, n) {
	let r = await $p(e, t, n), i = r.node()?.getBBox() ?? {
		width: 0,
		height: 0
	};
	return t.width = i.width, t.height = i.height, r;
}
i(ub, "insertMeasuredNode");
async function db(e, t) {
	let n = new nb({
		multigraph: !0,
		compound: !0
	}), r = [...t.edges], i = V(), a = cb(e), { edgeLabels: o, nodes: s } = a, c = /* @__PURE__ */ new Map(), l = e.node() != null;
	await Promise.all(t.nodes.map(async (e) => {
		if (e.isGroup) l && await lb(s, e), n.setNode(e.id, { ...e });
		else {
			if (l) {
				let t = await ub(s, e, {
					config: i,
					dir: e.dir
				});
				c.set(e.id, t);
			}
			n.setNode(e.id, { ...e });
		}
	}));
	for (let e of r) l && Cm(e) && await Tm(o, e), n.setEdge(e.start, e.end, { ...e }, e.id), t.edges.some((t) => t.id === e.id) || t.edges.push(e);
	if (globalThis.mermaidCaptureSizes) {
		let { captureNodeSizes: n } = await import("./sizeCapture-INFHLROL-D_10zjpN-B02vENQY.js");
		n(e, t);
	}
	return {
		graph: n,
		groups: a,
		nodeElements: c
	};
}
i(db, "createGraphWithElements");
var $ = /* @__PURE__ */ new Map(), fb = /* @__PURE__ */ new Map(), pb = /* @__PURE__ */ new Map(), mb = /* @__PURE__ */ i(() => {
	fb.clear(), pb.clear(), $.clear();
}, "clear"), hb = /* @__PURE__ */ i((e, t) => {
	let n = fb.get(t) || [];
	return p.trace("In isDescendant", t, " ", e, " = ", n.includes(e)), n.includes(e);
}, "isDescendant"), gb = /* @__PURE__ */ i((e, t) => {
	let n = fb.get(t) || [];
	return p.info("Descendants of ", t, " is ", n), p.info("Edge is ", e), e.v === t || e.w === t ? !1 : n ? n.includes(e.v) || hb(e.v, t) || hb(e.w, t) || n.includes(e.w) : (p.debug("Tilt, ", t, ",not in descendants"), !1);
}, "edgeInCluster"), _b = /* @__PURE__ */ i((e, t, n, r) => {
	p.debug("Copying children of ", e, "root", r, "data", t.node(e), r);
	let i = t.children(e) || [];
	e !== r && i.push(e), p.debug("Copying (nodes) clusterId", e, "nodes", i), i.forEach((i) => {
		if (t.children(i).length > 0) _b(i, t, n, r);
		else {
			let a = t.node(i);
			p.info("cp ", i, " to ", r, " with parent ", e), n.setNode(i, a), r !== t.parent(i) && (p.debug("Setting parent", i, t.parent(i)), n.setParent(i, t.parent(i))), e !== r && i !== e ? (p.debug("Setting parent", i, e), n.setParent(i, e)) : (p.info("In copy ", e, "root", r, "data", t.node(e), r), p.debug("Not Setting parent for node=", i, "cluster!==rootId", e !== r, "node!==clusterId", i !== e));
			let o = t.edges(i);
			p.debug("Copying Edges", o), o.forEach((i) => {
				p.info("Edge", i);
				let a = t.edge(i.v, i.w, i.name);
				p.info("Edge data", a, r);
				try {
					gb(i, r) ? (p.info("Copying as ", i.v, i.w, a, i.name), n.setEdge(i.v, i.w, a, i.name), p.info("newGraph edges ", n.edges(), n.edge(n.edges()[0]))) : p.info("Skipping copy of edge ", i.v, "-->", i.w, " rootId: ", r, " clusterId:", e);
				} catch (e) {
					p.error(e);
				}
			});
		}
		p.debug("Removing node", i), t.removeNode(i);
	});
}, "copy"), vb = /* @__PURE__ */ i((e, t) => {
	let n = t.children(e), r = [...n];
	for (let i of n) pb.set(i, e), r = [...r, ...vb(i, t)];
	return r;
}, "extractDescendants"), yb = /* @__PURE__ */ i((e, t, n) => {
	let r = e.edges().filter((e) => e.v === t || e.w === t), i = e.edges().filter((e) => e.v === n || e.w === n), a = r.map((e) => ({
		v: e.v === t ? n : e.v,
		w: e.w === t ? t : e.w
	})), o = i.map((e) => ({
		v: e.v,
		w: e.w
	}));
	return a.filter((e) => o.some((t) => e.v === t.v && e.w === t.w));
}, "findCommonEdges"), bb = /* @__PURE__ */ i((e, t, n) => {
	let r = t.children(e);
	if (p.trace("Searching children of id ", e, r), r.length < 1) return e;
	let i;
	for (let e of r) {
		let r = bb(e, t, n), a = yb(t, n, r);
		if (r) {
			if (a.length > 0) i = r;
			else return r;
		}
	}
	return i;
}, "findNonClusterChild"), xb = /* @__PURE__ */ i((e) => !$.has(e) || !$.get(e).externalConnections ? e : $.has(e) ? $.get(e).id : e, "getAnchorId"), Sb = /* @__PURE__ */ i((e, t) => {
	if (!e || t > 10) {
		p.debug("Opting out, no graph ");
		return;
	}
	p.debug("Opting in, graph "), e.nodes().forEach(function(t) {
		e.children(t).length > 0 && (p.debug("Cluster identified", t, " Replacement id in edges: ", bb(t, e, t)), fb.set(t, vb(t, e)), $.set(t, {
			id: bb(t, e, t),
			clusterData: e.node(t)
		}));
	}), e.nodes().forEach(function(t) {
		let n = e.children(t), r = e.edges();
		n.length > 0 ? (p.debug("Cluster identified", t, fb), r.forEach((e) => {
			hb(e.v, t) ^ hb(e.w, t) && (p.debug("Edge: ", e, " leaves cluster ", t), p.debug("Descendants of XXX ", t, ": ", fb.get(t)), $.get(t).externalConnections = !0);
		})) : p.debug("Not a cluster ", t, fb);
	});
	for (let t of $.keys()) {
		let n = $.get(t).id, r = e.parent(n);
		r !== t && $.has(r) && !$.get(r).externalConnections && ($.get(t).id = r);
		let i = e.edges().some((e) => e.v === t);
		if (n && $.get(t)?.externalConnections && i && Eb(e, n, t)) {
			let r = Db(e, t, e.parent(n));
			r && ($.get(t).id = r);
		}
	}
	e.edges().forEach(function(t) {
		let n = e.edge(t);
		p.debug("Edge " + t.v + " -> " + t.w + ": " + JSON.stringify(t)), p.debug("Edge " + t.v + " -> " + t.w + ": " + JSON.stringify(e.edge(t)));
		let r = t.v, i = t.w;
		if (p.debug("Fix XXX", $, "ids:", t.v, t.w, "Translating: ", $.get(t.v), " --- ", $.get(t.w)), $.get(t.v) || $.get(t.w)) {
			if (p.debug("Fixing and trying - removing XXX", t.v, t.w, t.name), r = xb(t.v), i = xb(t.w), e.removeEdge(t.v, t.w, t.name), r !== t.v) {
				let i = e.parent(r);
				$.get(i).externalConnections = !0, n.fromCluster = t.v;
			}
			if (i !== t.w) {
				let r = e.parent(i);
				$.get(r).externalConnections = !0, n.toCluster = t.w;
			}
			p.debug("Fix Replacing with XXX", r, i, t.name), e.setEdge(r, i, n, t.name);
		}
	}), Cb(e, 0), p.trace($);
}, "adjustClustersAndEdges"), Cb = /* @__PURE__ */ i((e, t) => {
	if (t > 10) {
		p.error("Bailing out");
		return;
	}
	let n = e.nodes(), r = !1;
	for (let t of n) {
		let n = e.children(t);
		r ||= n.length > 0;
	}
	if (!r) {
		p.debug("Done, no node has children", e.nodes());
		return;
	}
	p.debug("Nodes = ", n, t);
	for (let r of n) if (p.debug("Extracting node", r, $, $.has(r) && !$.get(r).externalConnections, !e.parent(r), e.node(r), e.children("D"), " Depth ", t), !$.has(r)) p.debug("Not a cluster", r, t);
	else if (!$.get(r).externalConnections && e.children(r) && e.children(r).length > 0) {
		p.debug("Cluster without external connections, without a parent and with children", r, t);
		let n = e.graph().rankdir === "TB" ? "LR" : "TB";
		$.get(r)?.clusterData?.dir && (n = $.get(r).clusterData.dir, p.debug("Fixing dir", $.get(r).clusterData.dir, n));
		let i = new nb({
			multigraph: !0,
			compound: !0
		}).setGraph({
			rankdir: n,
			nodesep: 50,
			ranksep: 50,
			marginx: 8,
			marginy: 8
		}).setDefaultEdgeLabel(function() {
			return {};
		});
		_b(r, e, i, r), e.setNode(r, {
			clusterNode: !0,
			id: r,
			clusterData: $.get(r).clusterData,
			label: $.get(r).label,
			graph: i
		});
	} else p.debug("Cluster ** ", r, " **not meeting the criteria !externalConnections:", !$.get(r).externalConnections, " no parent: ", !e.parent(r), " children ", e.children(r) && e.children(r).length > 0, e.children("D"), t), p.debug($);
	n = e.nodes(), p.debug("New list of nodes", n);
	for (let r of n) {
		let n = e.node(r);
		p.debug(" Now next level", r, n), n?.clusterNode && Cb(n.graph, t + 1);
	}
}, "extractor"), wb = /* @__PURE__ */ i((e, t) => {
	if (t.length === 0) return [];
	let n = Object.assign([], t);
	return t.forEach((t) => {
		let r = wb(e, e.children(t));
		n = [...n, ...r];
	}), n;
}, "sorter"), Tb = /* @__PURE__ */ i((e) => wb(e, e.children()), "sortNodesByHierarchy"), Eb = /* @__PURE__ */ i((e, t, n) => {
	let r = e.parent(t);
	for (; r && r !== n;) {
		let t = $.get(r);
		if (t && !t.externalConnections) return !0;
		r = e.parent(r);
	}
	return !1;
}, "isNodeInExtractableCluster"), Db = /* @__PURE__ */ i((e, t, n) => {
	let r = e.children(t) ?? [];
	for (let i of r) {
		if (i === n || hb(i, n)) continue;
		let r = bb(i, e, t);
		if (r && !Eb(e, r, t)) return r;
	}
	return null;
}, "findSafeAnchorNode");
function Ob({ prepareLayout: e, measureLayout: t, runLayoutCore: n, paintLayout: r, afterPaint: a, paintOptions: o }) {
	let s = t ?? Ab;
	return /* @__PURE__ */ i(async function(t, i, c, l) {
		let u = i.select("g");
		(c?.insertMarkers ?? Hm)(u, t.markers, t.type, t.diagramId), kb();
		let d = {
			element: u,
			helpers: c,
			options: l
		};
		d.preparedLayout = await e?.(t, d);
		let f = await s(t, d), p = await n(t, d), m = {
			...d,
			measure: f
		};
		r ? await r(t, m, p) : await jb(t, m, o), await a?.(t, m, p);
	}, "render");
}
i(Ob, "createCommonLayoutRenderer");
function kb() {
	tm(), Sm(), cm(), mb();
}
i(kb, "clearLayoutRenderState");
async function Ab(e, { element: t }) {
	return await db(t, e);
}
i(Ab, "defaultMeasureLayout");
async function jb(e, t, n = {}) {
	let { measure: r } = t, { groups: i } = r;
	for (let r of n.getNodes?.(e, t) ?? e.nodes) n.skipNode?.(r, t) || await Mb(i, r, t, n);
	let a = Pb(e.nodes);
	for (let r of e.edges) Fb(r, n) || await Ib(i, r, a, e, n, t);
}
i(jb, "paintLayoutData");
async function Mb(e, t, n, r) {
	t.clusterNode ? nm(t) : Nb(t, n, r) ? await sm(e.clusters, t) : nm(t);
}
i(Mb, "paintLayoutNode");
function Nb(e, t, n) {
	return e.isGroup === !0 && (n.isCluster?.(e, t) ?? !0);
}
i(Nb, "shouldPaintAsCluster");
function Pb(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) n?.id && t.set(n.id, n);
	return t;
}
i(Pb, "buildNodeLookup");
function Fb(e, t) {
	return e.isLayoutOnly || !!t.skipEdge?.(e);
}
i(Fb, "shouldSkipPaintEdge");
async function Ib(e, t, n, r, i, a) {
	let o = Im(e.edgePaths, { ...t }, i.clusterDb ?? /* @__PURE__ */ new Map(), r.type, Lb(t.start, t, n, a, i), Lb(t.end, t, n, a, i), r.diagramId, Rb(t, i));
	Cm(t) && (bm.has(t.id) || await Tm(e.edgeLabels, t), zb(t, o));
}
i(Ib, "paintLayoutEdge");
function Lb(e, t, n, r, i) {
	return i.getEdgeNode?.(e, t, r) ?? (e ? n.get(e) ?? {} : {});
}
i(Lb, "getRenderedNode");
function Rb(e, t) {
	return typeof t.skipIntersect == "function" ? t.skipIntersect(e) : t.skipIntersect ?? !1;
}
i(Rb, "shouldSkipIntersect");
function zb(e, t) {
	let n = t?.updatedPath ?? t?.originalPath, { subGraphTitleTotalMargin: r } = Zp({ flowchart: B().flowchart ?? {} });
	if (e.label) {
		let i = bm.get(e.id), a = e.x, o = e.y;
		if (n) {
			let r = zs.calcLabelPosition(n);
			p.debug("Moving label " + e.label + " from (", a, ",", o, ") to (", r.x, ",", r.y, ") abc88"), t?.updatedPath && (a = r.x, o = r.y);
		}
		i.attr("transform", `translate(${a}, ${o + r / 2})`);
	}
	if (e?.startLabelLeft) {
		let t = xm.get(e.id).startLeft, r = e?.x, i = e?.y;
		if (n) {
			let t = zs.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_left", n);
			r = t.x, i = t.y;
		}
		t.attr("transform", `translate(${r}, ${i})`);
	}
	if (e.startLabelRight) {
		let t = xm.get(e.id).startRight, r = e.x, i = e.y;
		if (n) {
			let t = zs.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_right", n);
			r = t.x, i = t.y;
		}
		t.attr("transform", `translate(${r}, ${i})`);
	}
	if (e.endLabelLeft) {
		let t = xm.get(e.id).endLeft, r = e.x, i = e.y;
		if (n) {
			let t = zs.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_left", n);
			r = t.x, i = t.y;
		}
		t.attr("transform", `translate(${r}, ${i})`);
	}
	if (e.endLabelRight) {
		let t = xm.get(e.id).endRight, r = e.x, i = e.y;
		if (n) {
			let t = zs.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_right", n);
			r = t.x, i = t.y;
		}
		t.attr("transform", `translate(${r}, ${i})`);
	}
}
i(zb, "positionRenderedEdgeLabel");
function Bb(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
i(Bb, "getDefaultExportFromCjs");
var Vb = {}, Hb = {}, Ub = {}, Wb;
function Gb() {
	if (Wb) return Ub;
	Wb = 1;
	function e(e) {
		return typeof e > "u" || e === null;
	}
	i(e, "isNothing");
	function t(e) {
		return typeof e == "object" && !!e;
	}
	i(t, "isObject");
	function n(t) {
		return Array.isArray(t) ? t : e(t) ? [] : [t];
	}
	i(n, "toArray");
	function r(e, t) {
		if (t) {
			let n = Object.keys(t);
			for (let r = 0, i = n.length; r < i; r += 1) {
				let i = n[r];
				e[i] = t[i];
			}
		}
		return e;
	}
	i(r, "extend");
	function a(e, t) {
		let n = "";
		for (let r = 0; r < t; r += 1) n += e;
		return n;
	}
	i(a, "repeat");
	function o(e) {
		return e === 0 && 1 / e == -Infinity;
	}
	return i(o, "isNegativeZero"), Ub.isNothing = e, Ub.isObject = t, Ub.toArray = n, Ub.repeat = a, Ub.isNegativeZero = o, Ub.extend = r, Ub;
}
i(Gb, "requireCommon");
var Kb, qb;
function Jb() {
	if (qb) return Kb;
	qb = 1;
	function e(e, t) {
		let n = "", r = e.reason || "(unknown reason)";
		return e.mark ? (e.mark.name && (n += "in \"" + e.mark.name + "\" "), n += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !t && e.mark.snippet && (n += "\n\n" + e.mark.snippet), r + " " + n) : r;
	}
	i(e, "formatError");
	function t(t, n) {
		Error.call(this), this.name = "YAMLException", this.reason = t, this.mark = n, this.message = e(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (/* @__PURE__ */ Error()).stack || "";
	}
	return i(t, "YAMLException2"), t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t.prototype.toString = /* @__PURE__ */ i(function(t) {
		return this.name + ": " + e(this, t);
	}, "toString"), Kb = t, Kb;
}
i(Jb, "requireException");
var Yb, Xb;
function Zb() {
	if (Xb) return Yb;
	Xb = 1;
	let e = Gb();
	function t(e, t, n, r, i) {
		let a = "", o = "", s = Math.floor(i / 2) - 1;
		return r - t > s && (a = " ... ", t = r - s + a.length), n - r > s && (o = " ...", n = r + s - o.length), {
			str: a + e.slice(t, n).replace(/\t/g, "→") + o,
			pos: r - t + a.length
		};
	}
	i(t, "getLine");
	function n(t, n) {
		return e.repeat(" ", n - t.length) + t;
	}
	i(n, "padStart");
	function r(r, i) {
		if (i = Object.create(i || null), !r.buffer) return null;
		i.maxLength || (i.maxLength = 79), typeof i.indent != "number" && (i.indent = 1), typeof i.linesBefore != "number" && (i.linesBefore = 3), typeof i.linesAfter != "number" && (i.linesAfter = 2);
		let a = /\r?\n|\r|\0/g, o = [0], s = [], c, l = -1;
		for (; c = a.exec(r.buffer);) s.push(c.index), o.push(c.index + c[0].length), r.position <= c.index && l < 0 && (l = o.length - 2);
		l < 0 && (l = o.length - 1);
		let u = "", d = Math.min(r.line + i.linesAfter, s.length).toString().length, f = i.maxLength - (i.indent + d + 3);
		for (let a = 1; a <= i.linesBefore && !(l - a < 0); a++) {
			let c = t(r.buffer, o[l - a], s[l - a], r.position - (o[l] - o[l - a]), f);
			u = e.repeat(" ", i.indent) + n((r.line - a + 1).toString(), d) + " | " + c.str + "\n" + u;
		}
		let p = t(r.buffer, o[l], s[l], r.position, f);
		u += e.repeat(" ", i.indent) + n((r.line + 1).toString(), d) + " | " + p.str + "\n", u += e.repeat("-", i.indent + d + 3 + p.pos) + "^\n";
		for (let a = 1; a <= i.linesAfter && !(l + a >= s.length); a++) {
			let c = t(r.buffer, o[l + a], s[l + a], r.position - (o[l] - o[l + a]), f);
			u += e.repeat(" ", i.indent) + n((r.line + a + 1).toString(), d) + " | " + c.str + "\n";
		}
		return u.replace(/\n$/, "");
	}
	return i(r, "makeSnippet"), Yb = r, Yb;
}
i(Zb, "requireSnippet");
var Qb, $b;
function ex() {
	if ($b) return Qb;
	$b = 1;
	let e = Jb(), t = [
		"kind",
		"multi",
		"resolve",
		"construct",
		"instanceOf",
		"predicate",
		"represent",
		"representName",
		"defaultStyle",
		"styleAliases"
	], n = [
		"scalar",
		"sequence",
		"mapping"
	];
	function r(e) {
		let t = {};
		return e !== null && Object.keys(e).forEach(function(n) {
			e[n].forEach(function(e) {
				t[String(e)] = n;
			});
		}), t;
	}
	i(r, "compileStyleAliases");
	function a(i, a) {
		if (a ||= {}, Object.keys(a).forEach(function(n) {
			if (t.indexOf(n) === -1) throw new e("Unknown option \"" + n + "\" is met in definition of \"" + i + "\" YAML type.");
		}), this.options = a, this.tag = i, this.kind = a.kind || null, this.resolve = a.resolve || function() {
			return !0;
		}, this.construct = a.construct || function(e) {
			return e;
		}, this.instanceOf = a.instanceOf || null, this.predicate = a.predicate || null, this.represent = a.represent || null, this.representName = a.representName || null, this.defaultStyle = a.defaultStyle || null, this.multi = a.multi || !1, this.styleAliases = r(a.styleAliases || null), n.indexOf(this.kind) === -1) throw new e("Unknown kind \"" + this.kind + "\" is specified for \"" + i + "\" YAML type.");
	}
	return i(a, "Type2"), Qb = a, Qb;
}
i(ex, "requireType");
var tx, nx;
function rx() {
	if (nx) return tx;
	nx = 1;
	let e = Jb(), t = ex();
	function n(e, t) {
		let n = [];
		return e[t].forEach(function(e) {
			let t = n.length;
			n.forEach(function(n, r) {
				n.tag === e.tag && n.kind === e.kind && n.multi === e.multi && (t = r);
			}), n[t] = e;
		}), n;
	}
	i(n, "compileList");
	function r() {
		let e = {
			scalar: {},
			sequence: {},
			mapping: {},
			fallback: {},
			multi: {
				scalar: [],
				sequence: [],
				mapping: [],
				fallback: []
			}
		};
		function t(t) {
			t.multi ? (e.multi[t.kind].push(t), e.multi.fallback.push(t)) : e[t.kind][t.tag] = e.fallback[t.tag] = t;
		}
		i(t, "collectType");
		for (let e = 0, n = arguments.length; e < n; e += 1) arguments[e].forEach(t);
		return e;
	}
	i(r, "compileMap");
	function a(e) {
		return this.extend(e);
	}
	return i(a, "Schema2"), a.prototype.extend = /* @__PURE__ */ i(function(i) {
		let o = [], s = [];
		if (i instanceof t) s.push(i);
		else if (Array.isArray(i)) s = s.concat(i);
		else if (i && (Array.isArray(i.implicit) || Array.isArray(i.explicit))) i.implicit && (o = o.concat(i.implicit)), i.explicit && (s = s.concat(i.explicit));
		else throw new e("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
		o.forEach(function(n) {
			if (!(n instanceof t)) throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");
			if (n.loadKind && n.loadKind !== "scalar") throw new e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
			if (n.multi) throw new e("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
		}), s.forEach(function(n) {
			if (!(n instanceof t)) throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");
		});
		let c = Object.create(a.prototype);
		return c.implicit = (this.implicit || []).concat(o), c.explicit = (this.explicit || []).concat(s), c.compiledImplicit = n(c, "implicit"), c.compiledExplicit = n(c, "explicit"), c.compiledTypeMap = r(c.compiledImplicit, c.compiledExplicit), c;
	}, "extend"), tx = a, tx;
}
i(rx, "requireSchema");
var ix, ax;
function ox() {
	return ax ? ix : (ax = 1, ix = new (ex())("tag:yaml.org,2002:str", {
		kind: "scalar",
		construct: /* @__PURE__ */ i(function(e) {
			return e === null ? "" : e;
		}, "construct")
	}), ix);
}
i(ox, "requireStr");
var sx, cx;
function lx() {
	return cx ? sx : (cx = 1, sx = new (ex())("tag:yaml.org,2002:seq", {
		kind: "sequence",
		construct: /* @__PURE__ */ i(function(e) {
			return e === null ? [] : e;
		}, "construct")
	}), sx);
}
i(lx, "requireSeq");
var ux, dx;
function fx() {
	return dx ? ux : (dx = 1, ux = new (ex())("tag:yaml.org,2002:map", {
		kind: "mapping",
		construct: /* @__PURE__ */ i(function(e) {
			return e === null ? {} : e;
		}, "construct")
	}), ux);
}
i(fx, "requireMap");
var px, mx;
function hx() {
	return mx ? px : (mx = 1, px = new (rx())({ explicit: [
		ox(),
		lx(),
		fx()
	] }), px);
}
i(hx, "requireFailsafe");
var gx, _x;
function vx() {
	if (_x) return gx;
	_x = 1;
	let e = ex();
	function t(e) {
		if (e === null) return !0;
		let t = e.length;
		return t === 1 && e === "~" || t === 4 && (e === "null" || e === "Null" || e === "NULL");
	}
	i(t, "resolveYamlNull");
	function n() {
		return null;
	}
	i(n, "constructYamlNull");
	function r(e) {
		return e === null;
	}
	return i(r, "isNull"), gx = new e("tag:yaml.org,2002:null", {
		kind: "scalar",
		resolve: t,
		construct: n,
		predicate: r,
		represent: {
			canonical: /* @__PURE__ */ i(function() {
				return "~";
			}, "canonical"),
			lowercase: /* @__PURE__ */ i(function() {
				return "null";
			}, "lowercase"),
			uppercase: /* @__PURE__ */ i(function() {
				return "NULL";
			}, "uppercase"),
			camelcase: /* @__PURE__ */ i(function() {
				return "Null";
			}, "camelcase"),
			empty: /* @__PURE__ */ i(function() {
				return "";
			}, "empty")
		},
		defaultStyle: "lowercase"
	}), gx;
}
i(vx, "require_null");
var yx, bx;
function xx() {
	if (bx) return yx;
	bx = 1;
	let e = ex();
	function t(e) {
		if (e === null) return !1;
		let t = e.length;
		return t === 4 && (e === "true" || e === "True" || e === "TRUE") || t === 5 && (e === "false" || e === "False" || e === "FALSE");
	}
	i(t, "resolveYamlBoolean");
	function n(e) {
		return e === "true" || e === "True" || e === "TRUE";
	}
	i(n, "constructYamlBoolean");
	function r(e) {
		return Object.prototype.toString.call(e) === "[object Boolean]";
	}
	return i(r, "isBoolean"), yx = new e("tag:yaml.org,2002:bool", {
		kind: "scalar",
		resolve: t,
		construct: n,
		predicate: r,
		represent: {
			lowercase: /* @__PURE__ */ i(function(e) {
				return e ? "true" : "false";
			}, "lowercase"),
			uppercase: /* @__PURE__ */ i(function(e) {
				return e ? "TRUE" : "FALSE";
			}, "uppercase"),
			camelcase: /* @__PURE__ */ i(function(e) {
				return e ? "True" : "False";
			}, "camelcase")
		},
		defaultStyle: "lowercase"
	}), yx;
}
i(xx, "requireBool");
var Sx, Cx;
function wx() {
	if (Cx) return Sx;
	Cx = 1;
	let e = Gb(), t = ex();
	function n(e) {
		return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
	}
	i(n, "isHexCode");
	function r(e) {
		return e >= 48 && e <= 55;
	}
	i(r, "isOctCode");
	function a(e) {
		return e >= 48 && e <= 57;
	}
	i(a, "isDecCode");
	function o(e) {
		if (e === null) return !1;
		let t = e.length, i = 0, o = !1;
		if (!t) return !1;
		let c = e[i];
		if ((c === "-" || c === "+") && (c = e[++i]), c === "0") {
			if (i + 1 === t) return !0;
			if (c = e[++i], c === "b") {
				for (i++; i < t; i++) {
					if (c = e[i], c !== "0" && c !== "1") return !1;
					o = !0;
				}
				return o && isFinite(s(e));
			}
			if (c === "x") {
				for (i++; i < t; i++) {
					if (!n(e.charCodeAt(i))) return !1;
					o = !0;
				}
				return o && isFinite(s(e));
			}
			if (c === "o") {
				for (i++; i < t; i++) {
					if (!r(e.charCodeAt(i))) return !1;
					o = !0;
				}
				return o && isFinite(s(e));
			}
		}
		for (; i < t; i++) {
			if (!a(e.charCodeAt(i))) return !1;
			o = !0;
		}
		return o ? isFinite(s(e)) : !1;
	}
	i(o, "resolveYamlInteger");
	function s(e) {
		let t = e, n = 1, r = t[0];
		if ((r === "-" || r === "+") && (r === "-" && (n = -1), t = t.slice(1), r = t[0]), t === "0") return 0;
		if (r === "0") {
			if (t[1] === "b") return n * parseInt(t.slice(2), 2);
			if (t[1] === "x") return n * parseInt(t.slice(2), 16);
			if (t[1] === "o") return n * parseInt(t.slice(2), 8);
		}
		return n * parseInt(t, 10);
	}
	i(s, "parseYamlInteger");
	function c(e) {
		return s(e);
	}
	i(c, "constructYamlInteger");
	function l(t) {
		return Object.prototype.toString.call(t) === "[object Number]" && t % 1 == 0 && !e.isNegativeZero(t);
	}
	return i(l, "isInteger"), Sx = new t("tag:yaml.org,2002:int", {
		kind: "scalar",
		resolve: o,
		construct: c,
		predicate: l,
		represent: {
			binary: /* @__PURE__ */ i(function(e) {
				return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
			}, "binary"),
			octal: /* @__PURE__ */ i(function(e) {
				return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1);
			}, "octal"),
			decimal: /* @__PURE__ */ i(function(e) {
				return e.toString(10);
			}, "decimal"),
			hexadecimal: /* @__PURE__ */ i(function(e) {
				return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1);
			}, "hexadecimal")
		},
		defaultStyle: "decimal",
		styleAliases: {
			binary: [2, "bin"],
			octal: [8, "oct"],
			decimal: [10, "dec"],
			hexadecimal: [16, "hex"]
		}
	}), Sx;
}
i(wx, "requireInt");
var Tx, Ex;
function Dx() {
	if (Ex) return Tx;
	Ex = 1;
	let e = Gb(), t = ex(), n = /* @__PURE__ */ RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"), r = /* @__PURE__ */ RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
	function a(e) {
		return e === null || !n.test(e) ? !1 : isFinite(parseFloat(e, 10)) ? !0 : r.test(e);
	}
	i(a, "resolveYamlFloat");
	function o(e) {
		let t = e.toLowerCase(), n = t[0] === "-" ? -1 : 1;
		return "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), t === ".inf" ? n === 1 ? Infinity : -Infinity : t === ".nan" ? NaN : n * parseFloat(t, 10);
	}
	i(o, "constructYamlFloat");
	let s = /^[-+]?[0-9]+e/;
	function c(t, n) {
		if (isNaN(t)) switch (n) {
			case "lowercase": return ".nan";
			case "uppercase": return ".NAN";
			case "camelcase": return ".NaN";
		}
		else if (t === Infinity) switch (n) {
			case "lowercase": return ".inf";
			case "uppercase": return ".INF";
			case "camelcase": return ".Inf";
		}
		else if (t === -Infinity) switch (n) {
			case "lowercase": return "-.inf";
			case "uppercase": return "-.INF";
			case "camelcase": return "-.Inf";
		}
		else if (e.isNegativeZero(t)) return "-0.0";
		let r = t.toString(10);
		return s.test(r) ? r.replace("e", ".e") : r;
	}
	i(c, "representYamlFloat");
	function l(t) {
		return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 != 0 || e.isNegativeZero(t));
	}
	return i(l, "isFloat"), Tx = new t("tag:yaml.org,2002:float", {
		kind: "scalar",
		resolve: a,
		construct: o,
		predicate: l,
		represent: c,
		defaultStyle: "lowercase"
	}), Tx;
}
i(Dx, "requireFloat");
var Ox, kx;
function Ax() {
	return kx || (kx = 1, Ox = hx().extend({ implicit: [
		vx(),
		xx(),
		wx(),
		Dx()
	] })), Ox;
}
i(Ax, "requireJson");
var jx, Mx;
function Nx() {
	return Mx || (Mx = 1, jx = Ax()), jx;
}
i(Nx, "requireCore");
var Px, Fx;
function Ix() {
	if (Fx) return Px;
	Fx = 1;
	let e = ex(), t = /* @__PURE__ */ RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"), n = /* @__PURE__ */ RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
	function r(e) {
		return e === null ? !1 : t.exec(e) !== null || n.exec(e) !== null;
	}
	i(r, "resolveYamlTimestamp");
	function a(e) {
		let r = 0, i = null, a = t.exec(e);
		if (a === null && (a = n.exec(e)), a === null) throw Error("Date resolve error");
		let o = +a[1], s = a[2] - 1, c = +a[3];
		if (!a[4]) return new Date(Date.UTC(o, s, c));
		let l = +a[4], u = +a[5], d = +a[6];
		if (a[7]) {
			for (r = a[7].slice(0, 3); r.length < 3;) r += "0";
			r = +r;
		}
		if (a[9]) {
			let e = +a[10], t = +(a[11] || 0);
			i = (e * 60 + t) * 6e4, a[9] === "-" && (i = -i);
		}
		let f = new Date(Date.UTC(o, s, c, l, u, d, r));
		return i && f.setTime(f.getTime() - i), f;
	}
	i(a, "constructYamlTimestamp");
	function o(e) {
		return e.toISOString();
	}
	return i(o, "representYamlTimestamp"), Px = new e("tag:yaml.org,2002:timestamp", {
		kind: "scalar",
		resolve: r,
		construct: a,
		instanceOf: Date,
		represent: o
	}), Px;
}
i(Ix, "requireTimestamp");
var Lx, Rx;
function zx() {
	if (Rx) return Lx;
	Rx = 1;
	let e = ex();
	function t(e) {
		return e === "<<" || e === null;
	}
	return i(t, "resolveYamlMerge"), Lx = new e("tag:yaml.org,2002:merge", {
		kind: "scalar",
		resolve: t
	}), Lx;
}
i(zx, "requireMerge");
var Bx, Vx;
function Hx() {
	if (Vx) return Bx;
	Vx = 1;
	let e = ex();
	function t(e) {
		if (e === null) return !1;
		let t = 0, n = e.length;
		for (let r = 0; r < n; r++) {
			let n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r".indexOf(e.charAt(r));
			if (!(n > 64)) {
				if (n < 0) return !1;
				t += 6;
			}
		}
		return t % 8 == 0;
	}
	i(t, "resolveYamlBinary");
	function n(e) {
		let t = e.replace(/[\r\n=]/g, ""), n = t.length, r = 0, i = [];
		for (let e = 0; e < n; e++) e % 4 == 0 && e && (i.push(r >> 16 & 255), i.push(r >> 8 & 255), i.push(r & 255)), r = r << 6 | "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r".indexOf(t.charAt(e));
		let a = n % 4 * 6;
		return a === 0 ? (i.push(r >> 16 & 255), i.push(r >> 8 & 255), i.push(r & 255)) : a === 18 ? (i.push(r >> 10 & 255), i.push(r >> 2 & 255)) : a === 12 && i.push(r >> 4 & 255), new Uint8Array(i);
	}
	i(n, "constructYamlBinary");
	function r(e) {
		let t = "", n = 0, r = e.length, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
		for (let a = 0; a < r; a++) a % 3 == 0 && a && (t += i[n >> 18 & 63], t += i[n >> 12 & 63], t += i[n >> 6 & 63], t += i[n & 63]), n = (n << 8) + e[a];
		let a = r % 3;
		return a === 0 ? (t += i[n >> 18 & 63], t += i[n >> 12 & 63], t += i[n >> 6 & 63], t += i[n & 63]) : a === 2 ? (t += i[n >> 10 & 63], t += i[n >> 4 & 63], t += i[n << 2 & 63], t += i[64]) : a === 1 && (t += i[n >> 2 & 63], t += i[n << 4 & 63], t += i[64], t += i[64]), t;
	}
	i(r, "representYamlBinary");
	function a(e) {
		return Object.prototype.toString.call(e) === "[object Uint8Array]";
	}
	return i(a, "isBinary"), Bx = new e("tag:yaml.org,2002:binary", {
		kind: "scalar",
		resolve: t,
		construct: n,
		predicate: a,
		represent: r
	}), Bx;
}
i(Hx, "requireBinary");
var Ux, Wx;
function Gx() {
	if (Wx) return Ux;
	Wx = 1;
	let e = ex(), t = Object.prototype.hasOwnProperty, n = Object.prototype.toString;
	function r(e) {
		if (e === null) return !0;
		let r = [], i = e;
		for (let e = 0, a = i.length; e < a; e += 1) {
			let a = i[e], o = !1;
			if (n.call(a) !== "[object Object]") return !1;
			let s;
			for (s in a) if (t.call(a, s)) {
				if (!o) o = !0;
				else return !1;
			}
			if (!o) return !1;
			if (r.indexOf(s) === -1) r.push(s);
			else return !1;
		}
		return !0;
	}
	i(r, "resolveYamlOmap");
	function a(e) {
		return e === null ? [] : e;
	}
	return i(a, "constructYamlOmap"), Ux = new e("tag:yaml.org,2002:omap", {
		kind: "sequence",
		resolve: r,
		construct: a
	}), Ux;
}
i(Gx, "requireOmap");
var Kx, qx;
function Jx() {
	if (qx) return Kx;
	qx = 1;
	let e = ex(), t = Object.prototype.toString;
	function n(e) {
		if (e === null) return !0;
		let n = e, r = Array(n.length);
		for (let e = 0, i = n.length; e < i; e += 1) {
			let i = n[e];
			if (t.call(i) !== "[object Object]") return !1;
			let a = Object.keys(i);
			if (a.length !== 1) return !1;
			r[e] = [a[0], i[a[0]]];
		}
		return !0;
	}
	i(n, "resolveYamlPairs");
	function r(e) {
		if (e === null) return [];
		let t = e, n = Array(t.length);
		for (let e = 0, r = t.length; e < r; e += 1) {
			let r = t[e], i = Object.keys(r);
			n[e] = [i[0], r[i[0]]];
		}
		return n;
	}
	return i(r, "constructYamlPairs"), Kx = new e("tag:yaml.org,2002:pairs", {
		kind: "sequence",
		resolve: n,
		construct: r
	}), Kx;
}
i(Jx, "requirePairs");
var Yx, Xx;
function Zx() {
	if (Xx) return Yx;
	Xx = 1;
	let e = ex(), t = Object.prototype.hasOwnProperty;
	function n(e) {
		if (e === null) return !0;
		let n = e;
		for (let e in n) if (t.call(n, e) && n[e] !== null) return !1;
		return !0;
	}
	i(n, "resolveYamlSet");
	function r(e) {
		return e === null ? {} : e;
	}
	return i(r, "constructYamlSet"), Yx = new e("tag:yaml.org,2002:set", {
		kind: "mapping",
		resolve: n,
		construct: r
	}), Yx;
}
i(Zx, "requireSet");
var Qx, $x;
function eS() {
	return $x || ($x = 1, Qx = Nx().extend({
		implicit: [Ix(), zx()],
		explicit: [
			Hx(),
			Gx(),
			Jx(),
			Zx()
		]
	})), Qx;
}
i(eS, "require_default");
var tS;
function nS() {
	if (tS) return Hb;
	tS = 1;
	let e = Gb(), t = Jb(), n = Zb(), r = eS(), a = Object.prototype.hasOwnProperty, o = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, s = /[\x85\u2028\u2029]/, c = /[,\[\]{}]/, l = /^(?:!|!!|![0-9A-Za-z-]+!)$/, u = /^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;
	function d(e) {
		return Object.prototype.toString.call(e);
	}
	i(d, "_class");
	function f(e) {
		return e === 10 || e === 13;
	}
	i(f, "isEol");
	function p(e) {
		return e === 9 || e === 32;
	}
	i(p, "isWhiteSpace");
	function m(e) {
		return e === 9 || e === 32 || e === 10 || e === 13;
	}
	i(m, "isWsOrEol");
	function h(e) {
		return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
	}
	i(h, "isFlowIndicator");
	function g(e) {
		if (e >= 48 && e <= 57) return e - 48;
		let t = e | 32;
		return t >= 97 && t <= 102 ? t - 97 + 10 : -1;
	}
	i(g, "fromHexCode");
	function _(e) {
		return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
	}
	i(_, "escapedHexLen");
	function v(e) {
		return e >= 48 && e <= 57 ? e - 48 : -1;
	}
	i(v, "fromDecimalCode");
	function y(e) {
		switch (e) {
			case 48: return "\0";
			case 97: return "\x07";
			case 98: return "\b";
			case 116: return "	";
			case 9: return "	";
			case 110: return "\n";
			case 118: return "\v";
			case 102: return "\f";
			case 114: return "\r";
			case 101: return "\x1B";
			case 32: return " ";
			case 34: return "\"";
			case 47: return "/";
			case 92: return "\\";
			case 78: return "";
			case 95: return "\xA0";
			case 76: return "\u2028";
			case 80: return "\u2029";
			default: return "";
		}
	}
	i(y, "simpleEscapeSequence");
	function b(e) {
		return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode((e - 65536 >> 10) + 55296, (e - 65536 & 1023) + 56320);
	}
	i(b, "charFromCodepoint");
	function x(e, t, n) {
		t === "__proto__" ? Object.defineProperty(e, t, {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			value: n
		}) : e[t] = n;
	}
	i(x, "setProperty");
	let S = Array(256), C = Array(256);
	for (let e = 0; e < 256; e++) S[e] = +!!y(e), C[e] = y(e);
	function w(e, t) {
		this.input = e, this.filename = t.filename || null, this.schema = t.schema || r, this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, this.listener = t.listener || null, this.maxDepth = typeof t.maxDepth == "number" ? t.maxDepth : 100, this.maxTotalMergeKeys = typeof t.maxTotalMergeKeys == "number" ? t.maxTotalMergeKeys : 1e4, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.depth = 0, this.totalMergeKeys = 0, this.firstTabInLine = -1, this.documents = [], this.anchorMapTransactions = [];
	}
	i(w, "State");
	function T(e, r) {
		let i = {
			name: e.filename,
			buffer: e.input.slice(0, -1),
			position: e.position,
			line: e.line,
			column: e.position - e.lineStart
		};
		return i.snippet = n(i), new t(r, i);
	}
	i(T, "generateError");
	function E(e, t) {
		throw T(e, t);
	}
	i(E, "throwError");
	function D(e, t) {
		e.onWarning && e.onWarning.call(null, T(e, t));
	}
	i(D, "throwWarning");
	function O(e, t, n) {
		let r = e.anchorMapTransactions;
		if (r.length !== 0) {
			let n = r[r.length - 1];
			a.call(n, t) || (n[t] = {
				existed: a.call(e.anchorMap, t),
				value: e.anchorMap[t]
			});
		}
		e.anchorMap[t] = n;
	}
	i(O, "storeAnchor");
	function k(e) {
		e.anchorMapTransactions.push(/* @__PURE__ */ Object.create(null));
	}
	i(k, "beginAnchorTransaction");
	function ee(e) {
		let t = e.anchorMapTransactions.pop(), n = e.anchorMapTransactions;
		if (n.length === 0) return;
		let r = n[n.length - 1], i = Object.keys(t);
		for (let e = 0, n = i.length; e < n; e += 1) {
			let n = i[e];
			a.call(r, n) || (r[n] = t[n]);
		}
	}
	i(ee, "commitAnchorTransaction");
	function A(e) {
		let t = e.anchorMapTransactions.pop(), n = Object.keys(t);
		for (let r = n.length - 1; r >= 0; --r) {
			let i = t[n[r]];
			i.existed ? e.anchorMap[n[r]] = i.value : delete e.anchorMap[n[r]];
		}
	}
	i(A, "rollbackAnchorTransaction");
	function te(e) {
		return {
			position: e.position,
			line: e.line,
			lineStart: e.lineStart,
			lineIndent: e.lineIndent,
			firstTabInLine: e.firstTabInLine,
			tag: e.tag,
			anchor: e.anchor,
			kind: e.kind,
			result: e.result
		};
	}
	i(te, "snapshotState");
	function j(e, t) {
		e.position = t.position, e.line = t.line, e.lineStart = t.lineStart, e.lineIndent = t.lineIndent, e.firstTabInLine = t.firstTabInLine, e.tag = t.tag, e.anchor = t.anchor, e.kind = t.kind, e.result = t.result;
	}
	i(j, "restoreState");
	let M = {
		YAML: /* @__PURE__ */ i(function(e, t, n) {
			e.version !== null && E(e, "duplication of %YAML directive"), n.length !== 1 && E(e, "YAML directive accepts exactly one argument");
			let r = /^([0-9]+)\.([0-9]+)$/.exec(n[0]);
			r === null && E(e, "ill-formed argument of the YAML directive");
			let i = parseInt(r[1], 10), a = parseInt(r[2], 10);
			i !== 1 && E(e, "unacceptable YAML version of the document"), e.version = n[0], e.checkLineBreaks = a < 2, a !== 1 && a !== 2 && D(e, "unsupported YAML version of the document");
		}, "handleYamlDirective"),
		TAG: /* @__PURE__ */ i(function(e, t, n) {
			let r;
			n.length !== 2 && E(e, "TAG directive accepts exactly two arguments");
			let i = n[0];
			r = n[1], l.test(i) || E(e, "ill-formed tag handle (first argument) of the TAG directive"), a.call(e.tagMap, i) && E(e, "there is a previously declared suffix for \"" + i + "\" tag handle"), u.test(r) || E(e, "ill-formed tag prefix (second argument) of the TAG directive");
			try {
				r = decodeURIComponent(r);
			} catch {
				E(e, "tag prefix is malformed: " + r);
			}
			e.tagMap[i] = r;
		}, "handleTagDirective")
	};
	function N(e, t, n, r) {
		if (t < n) {
			let i = e.input.slice(t, n);
			if (r) for (let t = 0, n = i.length; t < n; t += 1) {
				let n = i.charCodeAt(t);
				n === 9 || n >= 32 && n <= 1114111 || E(e, "expected valid JSON character");
			}
			else o.test(i) && E(e, "the stream contains non-printable characters");
			e.result += i;
		}
	}
	i(N, "captureSegment");
	function ne(t, n, r, i) {
		e.isObject(r) || E(t, "cannot merge mappings; the provided source object is unacceptable");
		let o = Object.keys(r);
		for (let e = 0, s = o.length; e < s; e += 1) {
			let s = o[e];
			t.maxTotalMergeKeys !== -1 && ++t.totalMergeKeys > t.maxTotalMergeKeys && E(t, "merge keys exceeded maxTotalMergeKeys (" + t.maxTotalMergeKeys + ")"), a.call(n, s) || (x(n, s, r[s]), i[s] = !0);
		}
	}
	i(ne, "mergeMappings");
	function P(e, t, n, r, i, o, s, c, l) {
		if (Array.isArray(i)) {
			i = Array.prototype.slice.call(i);
			for (let t = 0, n = i.length; t < n; t += 1) Array.isArray(i[t]) && E(e, "nested arrays are not supported inside keys"), typeof i == "object" && d(i[t]) === "[object Object]" && (i[t] = "[object Object]");
		}
		if (typeof i == "object" && d(i) === "[object Object]" && (i = "[object Object]"), i = String(i), t === null && (t = {}), r === "tag:yaml.org,2002:merge") {
			if (Array.isArray(o)) for (let r = 0, i = o.length; r < i; r += 1) ne(e, t, o[r], n);
			else ne(e, t, o, n);
		} else !e.json && !a.call(n, i) && a.call(t, i) && (e.line = s || e.line, e.lineStart = c || e.lineStart, e.position = l || e.position, E(e, "duplicated mapping key")), x(t, i, o), delete n[i];
		return t;
	}
	i(P, "storeMappingPair");
	function re(e) {
		let t = e.input.charCodeAt(e.position);
		t === 10 ? e.position++ : t === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : E(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
	}
	i(re, "readLineBreak");
	function F(e, t, n) {
		let r = 0, i = e.input.charCodeAt(e.position);
		for (; i !== 0;) {
			for (; p(i);) i === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position), i = e.input.charCodeAt(++e.position);
			if (t && i === 35) do
				i = e.input.charCodeAt(++e.position);
			while (i !== 10 && i !== 13 && i !== 0);
			if (f(i)) for (re(e), i = e.input.charCodeAt(e.position), r++, e.lineIndent = 0; i === 32;) e.lineIndent++, i = e.input.charCodeAt(++e.position);
			else break;
		}
		return n !== -1 && r !== 0 && e.lineIndent < n && D(e, "deficient indentation"), r;
	}
	i(F, "skipSeparationSpace");
	function ie(e) {
		let t = e.position, n = e.input.charCodeAt(t);
		return !!((n === 45 || n === 46) && n === e.input.charCodeAt(t + 1) && n === e.input.charCodeAt(t + 2) && (t += 3, n = e.input.charCodeAt(t), n === 0 || m(n)));
	}
	i(ie, "testDocumentSeparator");
	function ae(t, n) {
		n === 1 ? t.result += " " : n > 1 && (t.result += e.repeat("\n", n - 1));
	}
	i(ae, "writeFoldedLines");
	function oe(e, t, n) {
		let r, i, a, o, s, c, l = e.kind, u = e.result, d = e.input.charCodeAt(e.position);
		if (m(d) || h(d) || d === 35 || d === 38 || d === 42 || d === 33 || d === 124 || d === 62 || d === 39 || d === 34 || d === 37 || d === 64 || d === 96) return !1;
		if (d === 63 || d === 45) {
			let t = e.input.charCodeAt(e.position + 1);
			if (m(t) || n && h(t)) return !1;
		}
		for (e.kind = "scalar", e.result = "", r = i = e.position, a = !1; d !== 0;) {
			if (d === 58) {
				let t = e.input.charCodeAt(e.position + 1);
				if (m(t) || n && h(t)) break;
			} else if (d === 35) {
				if (m(e.input.charCodeAt(e.position - 1))) break;
			} else {
				if (e.position === e.lineStart && ie(e) || n && h(d)) break;
				if (f(d)) {
					if (o = e.line, s = e.lineStart, c = e.lineIndent, F(e, !1, -1), e.lineIndent >= t) {
						a = !0, d = e.input.charCodeAt(e.position);
						continue;
					}
					e.position = i, e.line = o, e.lineStart = s, e.lineIndent = c;
					break;
				}
			}
			a &&= (N(e, r, i, !1), ae(e, e.line - o), r = i = e.position, !1), p(d) || (i = e.position + 1), d = e.input.charCodeAt(++e.position);
		}
		return N(e, r, i, !1), e.result ? !0 : (e.kind = l, e.result = u, !1);
	}
	i(oe, "readPlainScalar");
	function se(e, t) {
		let n, r, i = e.input.charCodeAt(e.position);
		if (i !== 39) return !1;
		for (e.kind = "scalar", e.result = "", e.position++, n = r = e.position; (i = e.input.charCodeAt(e.position)) !== 0;) if (i === 39) {
			if (N(e, n, e.position, !0), i = e.input.charCodeAt(++e.position), i === 39) n = e.position, e.position++, r = e.position;
			else return !0;
		} else f(i) ? (N(e, n, r, !0), ae(e, F(e, !1, t)), n = r = e.position) : e.position === e.lineStart && ie(e) ? E(e, "unexpected end of the document within a single quoted scalar") : (e.position++, p(i) || (r = e.position));
		E(e, "unexpected end of the stream within a single quoted scalar");
	}
	i(se, "readSingleQuotedScalar");
	function ce(e, t) {
		let n, r, i, a = e.input.charCodeAt(e.position);
		if (a !== 34) return !1;
		for (e.kind = "scalar", e.result = "", e.position++, n = r = e.position; (a = e.input.charCodeAt(e.position)) !== 0;) {
			if (a === 34) return N(e, n, e.position, !0), e.position++, !0;
			if (a === 92) {
				if (N(e, n, e.position, !0), a = e.input.charCodeAt(++e.position), f(a)) F(e, !1, t);
				else if (a < 256 && S[a]) e.result += C[a], e.position++;
				else if ((i = _(a)) > 0) {
					let t = i, n = 0;
					for (; t > 0; t--) a = e.input.charCodeAt(++e.position), (i = g(a)) >= 0 ? n = (n << 4) + i : E(e, "expected hexadecimal character");
					e.result += b(n), e.position++;
				} else E(e, "unknown escape sequence");
				n = r = e.position;
			} else f(a) ? (N(e, n, r, !0), ae(e, F(e, !1, t)), n = r = e.position) : e.position === e.lineStart && ie(e) ? E(e, "unexpected end of the document within a double quoted scalar") : (e.position++, p(a) || (r = e.position));
		}
		E(e, "unexpected end of the stream within a double quoted scalar");
	}
	i(ce, "readDoubleQuotedScalar");
	function le(e, t) {
		let n = !0, r, i, a, o = e.tag, s, c = e.anchor, l, u, d, f, p = /* @__PURE__ */ Object.create(null), h, g, _, v = e.input.charCodeAt(e.position);
		if (v === 91) l = 93, f = !1, s = [];
		else if (v === 123) l = 125, f = !0, s = {};
		else return !1;
		for (e.anchor !== null && O(e, e.anchor, s), v = e.input.charCodeAt(++e.position); v !== 0;) {
			if (F(e, !0, t), v = e.input.charCodeAt(e.position), v === l) return e.position++, e.tag = o, e.anchor = c, e.kind = f ? "mapping" : "sequence", e.result = s, !0;
			n ? v === 44 && E(e, "expected the node content, but found ','") : E(e, "missed comma between flow collection entries"), g = h = _ = null, u = d = !1, v === 63 && m(e.input.charCodeAt(e.position + 1)) && (u = d = !0, e.position++, F(e, !0, t)), r = e.line, i = e.lineStart, a = e.position, I(e, t, 1, !1, !0), g = e.tag, h = e.result, F(e, !0, t), v = e.input.charCodeAt(e.position), (d || e.line === r) && v === 58 && (u = !0, v = e.input.charCodeAt(++e.position), F(e, !0, t), I(e, t, 1, !1, !0), _ = e.result), f ? P(e, s, p, g, h, _, r, i, a) : u ? s.push(P(e, null, p, g, h, _, r, i, a)) : s.push(h), F(e, !0, t), v = e.input.charCodeAt(e.position), v === 44 ? (n = !0, v = e.input.charCodeAt(++e.position)) : n = !1;
		}
		E(e, "unexpected end of the stream within a flow collection");
	}
	i(le, "readFlowCollection");
	function ue(t, n) {
		let r, i = 1, a = !1, o = !1, s = n, c = 0, l = !1, u, d = t.input.charCodeAt(t.position);
		if (d === 124) r = !1;
		else if (d === 62) r = !0;
		else return !1;
		for (t.kind = "scalar", t.result = ""; d !== 0;) if (d = t.input.charCodeAt(++t.position), d === 43 || d === 45) i === 1 ? i = d === 43 ? 3 : 2 : E(t, "repeat of a chomping mode identifier");
		else if ((u = v(d)) >= 0) u === 0 ? E(t, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? E(t, "repeat of an indentation width identifier") : (s = n + u - 1, o = !0);
		else break;
		if (p(d)) {
			do
				d = t.input.charCodeAt(++t.position);
			while (p(d));
			if (d === 35) do
				d = t.input.charCodeAt(++t.position);
			while (!f(d) && d !== 0);
		}
		for (; d !== 0;) {
			for (re(t), t.lineIndent = 0, d = t.input.charCodeAt(t.position); (!o || t.lineIndent < s) && d === 32;) t.lineIndent++, d = t.input.charCodeAt(++t.position);
			if (!o && t.lineIndent > s && (s = t.lineIndent), f(d)) {
				c++;
				continue;
			}
			if (!o && s === 0 && E(t, "missing indentation for block scalar"), t.lineIndent < s) {
				i === 3 ? t.result += e.repeat("\n", a ? 1 + c : c) : i === 1 && a && (t.result += "\n");
				break;
			}
			r ? p(d) ? (l = !0, t.result += e.repeat("\n", a ? 1 + c : c)) : l ? (l = !1, t.result += e.repeat("\n", c + 1)) : c === 0 ? a && (t.result += " ") : t.result += e.repeat("\n", c) : t.result += e.repeat("\n", a ? 1 + c : c), a = !0, o = !0, c = 0;
			let n = t.position;
			for (; !f(d) && d !== 0;) d = t.input.charCodeAt(++t.position);
			N(t, n, t.position, !1);
		}
		return !0;
	}
	i(ue, "readBlockScalar");
	function de(e, t) {
		let n = e.tag, r = e.anchor, i = [], a = !1;
		if (e.firstTabInLine !== -1) return !1;
		e.anchor !== null && O(e, e.anchor, i);
		let o = e.input.charCodeAt(e.position);
		for (; o !== 0 && (e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, E(e, "tab characters must not be used in indentation")), o === 45) && m(e.input.charCodeAt(e.position + 1));) {
			if (a = !0, e.position++, F(e, !0, -1) && e.lineIndent <= t) {
				i.push(null), o = e.input.charCodeAt(e.position);
				continue;
			}
			let n = e.line;
			if (I(e, t, 3, !1, !0), i.push(e.result), F(e, !0, -1), o = e.input.charCodeAt(e.position), (e.line === n || e.lineIndent > t) && o !== 0) E(e, "bad indentation of a sequence entry");
			else if (e.lineIndent < t) break;
		}
		return a ? (e.tag = n, e.anchor = r, e.kind = "sequence", e.result = i, !0) : !1;
	}
	i(de, "readBlockSequence");
	function fe(e, t, n) {
		let r, i, a, o, s = e.tag, c = e.anchor, l = {}, u = /* @__PURE__ */ Object.create(null), d = null, f = null, h = null, g = !1, _ = !1;
		if (e.firstTabInLine !== -1) return !1;
		e.anchor !== null && O(e, e.anchor, l);
		let v = e.input.charCodeAt(e.position);
		for (; v !== 0;) {
			!g && e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, E(e, "tab characters must not be used in indentation"));
			let y = e.input.charCodeAt(e.position + 1), b = e.line;
			if ((v === 63 || v === 58) && m(y)) v === 63 ? (g && (P(e, l, u, d, f, null, i, a, o), d = f = h = null), _ = !0, g = !0, r = !0) : g ? (g = !1, r = !0) : E(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, v = y;
			else {
				if (i = e.line, a = e.lineStart, o = e.position, !I(e, n, 2, !1, !0)) break;
				if (e.line === b) {
					for (v = e.input.charCodeAt(e.position); p(v);) v = e.input.charCodeAt(++e.position);
					if (v === 58) v = e.input.charCodeAt(++e.position), m(v) || E(e, "a whitespace character is expected after the key-value separator within a block mapping"), g && (P(e, l, u, d, f, null, i, a, o), d = f = h = null), _ = !0, g = !1, r = !1, d = e.tag, f = e.result;
					else if (_) E(e, "can not read an implicit mapping pair; a colon is missed");
					else return e.tag = s, e.anchor = c, !0;
				} else if (_) E(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
				else return e.tag = s, e.anchor = c, !0;
			}
			if ((e.line === b || e.lineIndent > t) && (g && (i = e.line, a = e.lineStart, o = e.position), I(e, t, 4, !0, r) && (g ? f = e.result : h = e.result), g || (P(e, l, u, d, f, h, i, a, o), d = f = h = null), F(e, !0, -1), v = e.input.charCodeAt(e.position)), (e.line === b || e.lineIndent > t) && v !== 0) E(e, "bad indentation of a mapping entry");
			else if (e.lineIndent < t) break;
		}
		return g && P(e, l, u, d, f, null, i, a, o), _ && (e.tag = s, e.anchor = c, e.kind = "mapping", e.result = l), _;
	}
	i(fe, "readBlockMapping");
	function pe(e) {
		let t = !1, n = !1, r, i, o = e.input.charCodeAt(e.position);
		if (o !== 33) return !1;
		e.tag !== null && E(e, "duplication of a tag property"), o = e.input.charCodeAt(++e.position), o === 60 ? (t = !0, o = e.input.charCodeAt(++e.position)) : o === 33 ? (n = !0, r = "!!", o = e.input.charCodeAt(++e.position)) : r = "!";
		let s = e.position;
		if (t) {
			do
				o = e.input.charCodeAt(++e.position);
			while (o !== 0 && o !== 62);
			e.position < e.length ? (i = e.input.slice(s, e.position), o = e.input.charCodeAt(++e.position)) : E(e, "unexpected end of the stream within a verbatim tag");
		} else {
			for (; o !== 0 && !m(o);) o === 33 && (n ? E(e, "tag suffix cannot contain exclamation marks") : (r = e.input.slice(s - 1, e.position + 1), l.test(r) || E(e, "named tag handle cannot contain such characters"), n = !0, s = e.position + 1)), o = e.input.charCodeAt(++e.position);
			i = e.input.slice(s, e.position), c.test(i) && E(e, "tag suffix cannot contain flow indicator characters");
		}
		i && !u.test(i) && E(e, "tag name cannot contain such characters: " + i);
		try {
			i = decodeURIComponent(i);
		} catch {
			E(e, "tag name is malformed: " + i);
		}
		return t ? e.tag = i : a.call(e.tagMap, r) ? e.tag = e.tagMap[r] + i : r === "!" ? e.tag = "!" + i : r === "!!" ? e.tag = "tag:yaml.org,2002:" + i : E(e, "undeclared tag handle \"" + r + "\""), !0;
	}
	i(pe, "readTagProperty");
	function me(e) {
		let t = e.input.charCodeAt(e.position);
		if (t !== 38) return !1;
		e.anchor !== null && E(e, "duplication of an anchor property"), t = e.input.charCodeAt(++e.position);
		let n = e.position;
		for (; t !== 0 && !m(t) && !h(t);) t = e.input.charCodeAt(++e.position);
		return e.position === n && E(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(n, e.position), !0;
	}
	i(me, "readAnchorProperty");
	function he(e) {
		let t = e.input.charCodeAt(e.position);
		if (t !== 42) return !1;
		t = e.input.charCodeAt(++e.position);
		let n = e.position;
		for (; t !== 0 && !m(t) && !h(t);) t = e.input.charCodeAt(++e.position);
		e.position === n && E(e, "name of an alias node must contain at least one character");
		let r = e.input.slice(n, e.position);
		return a.call(e.anchorMap, r) || E(e, "unidentified alias \"" + r + "\""), e.result = e.anchorMap[r], F(e, !0, -1), !0;
	}
	i(he, "readAlias");
	function ge(e, t, n, r) {
		let i = te(e);
		return k(e), j(e, t), e.tag = null, e.anchor = null, e.kind = null, e.result = null, fe(e, n, r) && e.kind === "mapping" ? (ee(e), !0) : (A(e), j(e, i), !1);
	}
	i(ge, "tryReadBlockMappingFromProperty");
	function I(e, t, n, r, i) {
		let o, s, c = 1, l = !1, u = !1, d = null, f, p, m;
		e.depth >= e.maxDepth && E(e, "nesting exceeded maxDepth (" + e.maxDepth + ")"), e.depth += 1, e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null;
		let h = o = s = n === 4 || n === 3;
		if (r && F(e, !0, -1) && (l = !0, e.lineIndent > t ? c = 1 : e.lineIndent === t ? c = 0 : e.lineIndent < t && (c = -1)), c === 1) for (;;) {
			let n = e.input.charCodeAt(e.position), r = te(e);
			if (l && (n === 33 && e.tag !== null || n === 38 && e.anchor !== null) || !pe(e) && !me(e)) break;
			d === null && (d = r), F(e, !0, -1) ? (l = !0, s = h, e.lineIndent > t ? c = 1 : e.lineIndent === t ? c = 0 : e.lineIndent < t && (c = -1)) : s = !1;
		}
		if (s &&= l || i, c === 1 || n === 4) {
			if (p = n === 1 || n === 2 ? t : t + 1, m = e.position - e.lineStart, c === 1) {
				if (s && (de(e, m) || fe(e, m, p)) || le(e, p)) u = !0;
				else {
					let t = e.input.charCodeAt(e.position);
					d !== null && h && !s && t !== 124 && t !== 62 && ge(e, d, d.position - d.lineStart, p) || o && ue(e, p) || se(e, p) || ce(e, p) ? u = !0 : he(e) ? (u = !0, (e.tag !== null || e.anchor !== null) && E(e, "alias node should not have any properties")) : oe(e, p, n === 1) && (u = !0, e.tag === null && (e.tag = "?")), e.anchor !== null && O(e, e.anchor, e.result);
				}
			} else c === 0 && (u = s && de(e, m));
		}
		if (e.tag === null) e.anchor !== null && O(e, e.anchor, e.result);
		else if (e.tag === "?") {
			e.result !== null && e.kind !== "scalar" && E(e, "unacceptable node kind for !<?> tag; it should be \"scalar\", not \"" + e.kind + "\"");
			for (let t = 0, n = e.implicitTypes.length; t < n; t += 1) if (f = e.implicitTypes[t], f.resolve(e.result)) {
				e.result = f.construct(e.result), e.tag = f.tag, e.anchor !== null && O(e, e.anchor, e.result);
				break;
			}
		} else if (e.tag !== "!") {
			if (a.call(e.typeMap[e.kind || "fallback"], e.tag)) f = e.typeMap[e.kind || "fallback"][e.tag];
			else {
				f = null;
				let t = e.typeMap.multi[e.kind || "fallback"];
				for (let n = 0, r = t.length; n < r; n += 1) if (e.tag.slice(0, t[n].tag.length) === t[n].tag) {
					f = t[n];
					break;
				}
			}
			f || E(e, "unknown tag !<" + e.tag + ">"), e.result !== null && f.kind !== e.kind && E(e, "unacceptable node kind for !<" + e.tag + "> tag; it should be \"" + f.kind + "\", not \"" + e.kind + "\""), f.resolve(e.result, e.tag) ? (e.result = f.construct(e.result, e.tag), e.anchor !== null && O(e, e.anchor, e.result)) : E(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
		}
		return e.listener !== null && e.listener("close", e), --e.depth, e.tag !== null || e.anchor !== null || u;
	}
	i(I, "composeNode");
	function _e(e) {
		let t = e.position, n = !1, r;
		for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = /* @__PURE__ */ Object.create(null), e.anchorMap = /* @__PURE__ */ Object.create(null); (r = e.input.charCodeAt(e.position)) !== 0 && (F(e, !0, -1), r = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || r !== 37));) {
			n = !0, r = e.input.charCodeAt(++e.position);
			let t = e.position;
			for (; r !== 0 && !m(r);) r = e.input.charCodeAt(++e.position);
			let i = e.input.slice(t, e.position), o = [];
			for (i.length < 1 && E(e, "directive name must not be less than one character in length"); r !== 0;) {
				for (; p(r);) r = e.input.charCodeAt(++e.position);
				if (r === 35) {
					do
						r = e.input.charCodeAt(++e.position);
					while (r !== 0 && !f(r));
					break;
				}
				if (f(r)) break;
				for (t = e.position; r !== 0 && !m(r);) r = e.input.charCodeAt(++e.position);
				o.push(e.input.slice(t, e.position));
			}
			r !== 0 && re(e), a.call(M, i) ? M[i](e, i, o) : D(e, "unknown document directive \"" + i + "\"");
		}
		if (F(e, !0, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, F(e, !0, -1)) : n && E(e, "directives end mark is expected"), I(e, e.lineIndent - 1, 4, !1, !0), F(e, !0, -1), e.checkLineBreaks && s.test(e.input.slice(t, e.position)) && D(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && ie(e)) {
			e.input.charCodeAt(e.position) === 46 && (e.position += 3, F(e, !0, -1));
			return;
		}
		e.position < e.length - 1 && E(e, "end of the stream or a document separator is expected");
	}
	i(_e, "readDocument");
	function ve(e, t) {
		e = String(e), t ||= {}, e.length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += "\n"), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
		let n = new w(e, t), r = e.indexOf("\0");
		for (r !== -1 && (n.position = r, E(n, "null byte is not allowed in input")), n.input += "\0"; n.input.charCodeAt(n.position) === 32;) n.lineIndent += 1, n.position += 1;
		for (; n.position < n.length - 1;) _e(n);
		return n.documents;
	}
	i(ve, "loadDocuments");
	function ye(e, t, n) {
		typeof t == "object" && t && typeof n > "u" && (n = t, t = null);
		let r = ve(e, n);
		if (typeof t != "function") return r;
		for (let e = 0, n = r.length; e < n; e += 1) t(r[e]);
	}
	i(ye, "loadAll2");
	function be(e, n) {
		let r = ve(e, n);
		if (r.length !== 0) {
			if (r.length === 1) return r[0];
			throw new t("expected a single document in the stream, but found more");
		}
	}
	return i(be, "load2"), Hb.loadAll = ye, Hb.load = be, Hb;
}
i(nS, "requireLoader");
var rS = {}, iS;
function aS() {
	if (iS) return rS;
	iS = 1;
	let e = Gb(), t = Jb(), n = eS(), r = Object.prototype.toString, a = Object.prototype.hasOwnProperty, o = 65279, s = {};
	s[0] = "\\0", s[7] = "\\a", s[8] = "\\b", s[9] = "\\t", s[10] = "\\n", s[11] = "\\v", s[12] = "\\f", s[13] = "\\r", s[27] = "\\e", s[34] = "\\\"", s[92] = "\\\\", s[133] = "\\N", s[160] = "\\_", s[8232] = "\\L", s[8233] = "\\P";
	let c = [
		"y",
		"Y",
		"yes",
		"Yes",
		"YES",
		"on",
		"On",
		"ON",
		"n",
		"N",
		"no",
		"No",
		"NO",
		"off",
		"Off",
		"OFF"
	], l = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
	function u(e, t) {
		if (t === null) return {};
		let n = {}, r = Object.keys(t);
		for (let i = 0, o = r.length; i < o; i += 1) {
			let o = r[i], s = String(t[o]);
			o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2));
			let c = e.compiledTypeMap.fallback[o];
			c && a.call(c.styleAliases, s) && (s = c.styleAliases[s]), n[o] = s;
		}
		return n;
	}
	i(u, "compileStyleMap");
	function d(n) {
		let r, i, a = n.toString(16).toUpperCase();
		if (n <= 255) r = "x", i = 2;
		else if (n <= 65535) r = "u", i = 4;
		else if (n <= 4294967295) r = "U", i = 8;
		else throw new t("code point within a string may not be greater than 0xFFFFFFFF");
		return "\\" + r + e.repeat("0", i - a.length) + a;
	}
	i(d, "encodeHex");
	function f(t) {
		this.schema = t.schema || n, this.indent = Math.max(1, t.indent || 2), this.noArrayIndent = t.noArrayIndent || !1, this.skipInvalid = t.skipInvalid || !1, this.flowLevel = e.isNothing(t.flowLevel) ? -1 : t.flowLevel, this.styleMap = u(this.schema, t.styles || null), this.sortKeys = t.sortKeys || !1, this.lineWidth = t.lineWidth || 80, this.noRefs = t.noRefs || !1, this.noCompatMode = t.noCompatMode || !1, this.condenseFlow = t.condenseFlow || !1, this.quotingType = t.quotingType === "\"" ? 2 : 1, this.forceQuotes = t.forceQuotes || !1, this.replacer = typeof t.replacer == "function" ? t.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
	}
	i(f, "State");
	function p(t, n) {
		let r = e.repeat(" ", n), i = 0, a = "", o = t.length;
		for (; i < o;) {
			let e, n = t.indexOf("\n", i);
			n === -1 ? (e = t.slice(i), i = o) : (e = t.slice(i, n + 1), i = n + 1), e.length && e !== "\n" && (a += r), a += e;
		}
		return a;
	}
	i(p, "indentString");
	function m(t, n) {
		return "\n" + e.repeat(" ", t.indent * n);
	}
	i(m, "generateNextLine");
	function h(e, t) {
		for (let n = 0, r = e.implicitTypes.length; n < r; n += 1) if (e.implicitTypes[n].resolve(t)) return !0;
		return !1;
	}
	i(h, "testImplicitResolving");
	function g(e) {
		return e === 32 || e === 9;
	}
	i(g, "isWhitespace");
	function _(e) {
		return e >= 32 && e <= 126 || e >= 161 && e <= 55295 && e !== 8232 && e !== 8233 || e >= 57344 && e <= 65533 && e !== o || e >= 65536 && e <= 1114111;
	}
	i(_, "isPrintable");
	function v(e) {
		return _(e) && e !== o && e !== 13 && e !== 10;
	}
	i(v, "isNsCharOrWhitespace");
	function y(e, t, n) {
		let r = v(e), i = r && !g(e);
		return (n ? r : r && e !== 44 && e !== 91 && e !== 93 && e !== 123 && e !== 125) && e !== 35 && !(t === 58 && !i) || v(t) && !g(t) && e === 35 || t === 58 && i;
	}
	i(y, "isPlainSafe");
	function b(e) {
		return _(e) && e !== o && !g(e) && e !== 45 && e !== 63 && e !== 58 && e !== 44 && e !== 91 && e !== 93 && e !== 123 && e !== 125 && e !== 35 && e !== 38 && e !== 42 && e !== 33 && e !== 124 && e !== 61 && e !== 62 && e !== 39 && e !== 34 && e !== 37 && e !== 64 && e !== 96;
	}
	i(b, "isPlainSafeFirst");
	function x(e) {
		return !g(e) && e !== 58;
	}
	i(x, "isPlainSafeLast");
	function S(e, t) {
		let n = e.charCodeAt(t), r;
		return n >= 55296 && n <= 56319 && t + 1 < e.length && (r = e.charCodeAt(t + 1), r >= 56320 && r <= 57343) ? (n - 55296) * 1024 + r - 56320 + 65536 : n;
	}
	i(S, "codePointAt");
	function C(e) {
		return /^\n* /.test(e);
	}
	i(C, "needIndentIndicator");
	function w(e, t, n, r, i, a, o, s) {
		let c, l = 0, u = null, d = !1, f = !1, p = r !== -1, m = -1, h = b(S(e, 0)) && x(S(e, e.length - 1));
		if (t || o) for (c = 0; c < e.length; l >= 65536 ? c += 2 : c++) {
			if (l = S(e, c), !_(l)) return 5;
			h &&= y(l, u, s), u = l;
		}
		else {
			for (c = 0; c < e.length; l >= 65536 ? c += 2 : c++) {
				if (l = S(e, c), l === 10) d = !0, p && (f ||= c - m - 1 > r && e[m + 1] !== " ", m = c);
				else if (!_(l)) return 5;
				h &&= y(l, u, s), u = l;
			}
			f ||= p && c - m - 1 > r && e[m + 1] !== " ";
		}
		return !d && !f ? h && !o && !i(e) ? 1 : a === 2 ? 5 : 2 : n > 9 && C(e) ? 5 : o ? a === 2 ? 5 : 2 : f ? 4 : 3;
	}
	i(w, "chooseScalarStyle");
	function T(e, n, r, a, o) {
		e.dump = function() {
			if (n.length === 0) return e.quotingType === 2 ? "\"\"" : "''";
			if (!e.noCompatMode && (c.indexOf(n) !== -1 || l.test(n))) return e.quotingType === 2 ? "\"" + n + "\"" : "'" + n + "'";
			let s = e.indent * Math.max(1, r), u = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - s), d = a || e.flowLevel > -1 && r >= e.flowLevel;
			function f(t) {
				return h(e, t);
			}
			switch (i(f, "testAmbiguity"), w(n, d, e.indent, u, f, e.quotingType, e.forceQuotes && !a, o)) {
				case 1: return n;
				case 2: return "'" + n.replace(/'/g, "''") + "'";
				case 3: return "|" + E(n, e.indent) + D(p(n, s));
				case 4: return ">" + E(n, e.indent) + D(p(O(n, u), s));
				case 5: return "\"" + ee(n) + "\"";
				default: throw new t("impossible error: invalid scalar style");
			}
		}();
	}
	i(T, "writeScalar");
	function E(e, t) {
		let n = C(e) ? String(t) : "", r = e[e.length - 1] === "\n";
		return n + (r && (e[e.length - 2] === "\n" || e === "\n") ? "+" : r ? "" : "-") + "\n";
	}
	i(E, "blockHeader");
	function D(e) {
		return e[e.length - 1] === "\n" ? e.slice(0, -1) : e;
	}
	i(D, "dropEndingNewline");
	function O(e, t) {
		let n = /(\n+)([^\n]*)/g, r = function() {
			let r = e.indexOf("\n");
			return r = r === -1 ? e.length : r, n.lastIndex = r, k(e.slice(0, r), t);
		}(), i = e[0] === "\n" || e[0] === " ", a, o;
		for (; o = n.exec(e);) {
			let e = o[1], n = o[2];
			a = n[0] === " ", r += e + (!i && !a && n !== "" ? "\n" : "") + k(n, t), i = a;
		}
		return r;
	}
	i(O, "foldString");
	function k(e, t) {
		if (e === "" || e[0] === " ") return e;
		let n = / [^ ]/g, r, i = 0, a, o = 0, s = 0, c = "";
		for (; r = n.exec(e);) s = r.index, s - i > t && (a = o > i ? o : s, c += "\n" + e.slice(i, a), i = a + 1), o = s;
		return c += "\n", e.length - i > t && o > i ? c += e.slice(i, o) + "\n" + e.slice(o + 1) : c += e.slice(i), c.slice(1);
	}
	i(k, "foldLine");
	function ee(e) {
		let t = "", n = 0;
		for (let r = 0; r < e.length; n >= 65536 ? r += 2 : r++) {
			n = S(e, r);
			let i = s[n];
			!i && _(n) ? (t += e[r], n >= 65536 && (t += e[r + 1])) : t += i || d(n);
		}
		return t;
	}
	i(ee, "escapeString");
	function A(e, t, n) {
		let r = "", i = e.tag;
		for (let i = 0, a = n.length; i < a; i += 1) {
			let a = n[i];
			e.replacer && (a = e.replacer.call(n, String(i), a)), (ne(e, t, a, !1, !1) || typeof a > "u" && ne(e, t, null, !1, !1)) && (r !== "" && (r += "," + (e.condenseFlow ? "" : " ")), r += e.dump);
		}
		e.tag = i, e.dump = "[" + r + "]";
	}
	i(A, "writeFlowSequence");
	function te(e, t, n, r) {
		let i = "", a = e.tag;
		for (let a = 0, o = n.length; a < o; a += 1) {
			let o = n[a];
			e.replacer && (o = e.replacer.call(n, String(a), o)), (ne(e, t + 1, o, !0, !0, !1, !0) || typeof o > "u" && ne(e, t + 1, null, !0, !0, !1, !0)) && ((!r || i !== "") && (i += m(e, t)), e.dump && e.dump.charCodeAt(0) === 10 ? i += "-" : i += "- ", i += e.dump);
		}
		e.tag = a, e.dump = i || "[]";
	}
	i(te, "writeBlockSequence");
	function j(e, t, n) {
		let r = "", i = e.tag, a = Object.keys(n);
		for (let i = 0, o = a.length; i < o; i += 1) {
			let o = "";
			r !== "" && (o += ", "), e.condenseFlow && (o += "\"");
			let s = a[i], c = n[s];
			e.replacer && (c = e.replacer.call(n, s, c)), ne(e, t, s, !1, !1) && (e.dump.length > 1024 && (o += "? "), o += e.dump + (e.condenseFlow ? "\"" : "") + ":" + (e.condenseFlow ? "" : " "), ne(e, t, c, !1, !1) && (o += e.dump, r += o));
		}
		e.tag = i, e.dump = "{" + r + "}";
	}
	i(j, "writeFlowMapping");
	function M(e, n, r, i) {
		let a = "", o = e.tag, s = Object.keys(r);
		if (e.sortKeys === !0) s.sort();
		else if (typeof e.sortKeys == "function") s.sort(e.sortKeys);
		else if (e.sortKeys) throw new t("sortKeys must be a boolean or a function");
		for (let t = 0, o = s.length; t < o; t += 1) {
			let o = "";
			(!i || a !== "") && (o += m(e, n));
			let c = s[t], l = r[c];
			if (e.replacer && (l = e.replacer.call(r, c, l)), !ne(e, n + 1, c, !0, !0, !0)) continue;
			let u = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024;
			u && (e.dump && e.dump.charCodeAt(0) === 10 ? o += "?" : o += "? "), o += e.dump, u && (o += m(e, n)), ne(e, n + 1, l, !0, u) && (e.dump && e.dump.charCodeAt(0) === 10 ? o += ":" : o += ": ", o += e.dump, a += o);
		}
		e.tag = o, e.dump = a || "{}";
	}
	i(M, "writeBlockMapping");
	function N(e, n, i) {
		let o = i ? e.explicitTypes : e.implicitTypes;
		for (let s = 0, c = o.length; s < c; s += 1) {
			let c = o[s];
			if ((c.instanceOf || c.predicate) && (!c.instanceOf || typeof n == "object" && n instanceof c.instanceOf) && (!c.predicate || c.predicate(n))) {
				if (e.tag = i ? c.multi && c.representName ? c.representName(n) : c.tag : "?", c.represent) {
					let i = e.styleMap[c.tag] || c.defaultStyle, o;
					if (r.call(c.represent) === "[object Function]") o = c.represent(n, i);
					else if (a.call(c.represent, i)) o = c.represent[i](n, i);
					else throw new t("!<" + c.tag + "> tag resolver accepts not \"" + i + "\" style");
					e.dump = o;
				}
				return !0;
			}
		}
		return !1;
	}
	i(N, "detectType");
	function ne(e, n, i, a, o, s, c) {
		e.tag = null, e.dump = i, N(e, i, !1) || N(e, i, !0);
		let l = r.call(e.dump), u = a;
		a &&= e.flowLevel < 0 || e.flowLevel > n;
		let d = l === "[object Object]" || l === "[object Array]", f, p;
		if (d && (f = e.duplicates.indexOf(i), p = f !== -1), (e.tag !== null && e.tag !== "?" || p || e.indent !== 2 && n > 0) && (o = !1), p && e.usedDuplicates[f]) e.dump = "*ref_" + f;
		else {
			if (d && p && !e.usedDuplicates[f] && (e.usedDuplicates[f] = !0), l === "[object Object]") a && Object.keys(e.dump).length !== 0 ? (M(e, n, e.dump, o), p && (e.dump = "&ref_" + f + e.dump)) : (j(e, n, e.dump), p && (e.dump = "&ref_" + f + " " + e.dump));
			else if (l === "[object Array]") a && e.dump.length !== 0 ? (e.noArrayIndent && !c && n > 0 ? te(e, n - 1, e.dump, o) : te(e, n, e.dump, o), p && (e.dump = "&ref_" + f + e.dump)) : (A(e, n, e.dump), p && (e.dump = "&ref_" + f + " " + e.dump));
			else if (l === "[object String]") e.tag !== "?" && T(e, e.dump, n, s, u);
			else {
				if (l === "[object Undefined]" || e.skipInvalid) return !1;
				throw new t("unacceptable kind of an object to dump " + l);
			}
			if (e.tag !== null && e.tag !== "?") {
				let t = encodeURI(e.tag[0] === "!" ? e.tag.slice(1) : e.tag).replace(/!/g, "%21");
				t = e.tag[0] === "!" ? "!" + t : t.slice(0, 18) === "tag:yaml.org,2002:" ? "!!" + t.slice(18) : "!<" + t + ">", e.dump = t + " " + e.dump;
			}
		}
		return !0;
	}
	i(ne, "writeNode");
	function P(e, t) {
		let n = [], r = [];
		re(e, n, r);
		let i = r.length;
		for (let e = 0; e < i; e += 1) t.duplicates.push(n[r[e]]);
		t.usedDuplicates = Array(i);
	}
	i(P, "getDuplicateReferences");
	function re(e, t, n) {
		if (typeof e == "object" && e) {
			let r = t.indexOf(e);
			if (r !== -1) n.indexOf(r) === -1 && n.push(r);
			else if (t.push(e), Array.isArray(e)) for (let r = 0, i = e.length; r < i; r += 1) re(e[r], t, n);
			else {
				let r = Object.keys(e);
				for (let i = 0, a = r.length; i < a; i += 1) re(e[r[i]], t, n);
			}
		}
	}
	i(re, "inspectNode");
	function F(e, t) {
		t ||= {};
		let n = new f(t);
		n.noRefs || P(e, n);
		let r = e;
		return n.replacer && (r = n.replacer.call({ "": r }, "", r)), ne(n, 0, r, !0, !0) ? n.dump + "\n" : "";
	}
	return i(F, "dump2"), rS.dump = F, rS;
}
i(aS, "requireDumper");
var oS;
function sS() {
	if (oS) return Vb;
	oS = 1;
	let e = nS(), t = aS();
	function n(e, t) {
		return function() {
			throw Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.");
		};
	}
	return i(n, "renamed"), Vb.Type = ex(), Vb.Schema = rx(), Vb.FAILSAFE_SCHEMA = hx(), Vb.JSON_SCHEMA = Ax(), Vb.CORE_SCHEMA = Nx(), Vb.DEFAULT_SCHEMA = eS(), Vb.load = e.load, Vb.loadAll = e.loadAll, Vb.dump = t.dump, Vb.YAMLException = Jb(), Vb.types = {
		binary: Hx(),
		float: Dx(),
		map: fx(),
		null: vx(),
		pairs: Jx(),
		set: Zx(),
		timestamp: Ix(),
		bool: xx(),
		int: wx(),
		merge: zx(),
		omap: Gx(),
		seq: lx(),
		str: ox()
	}, Vb.safeLoad = n("safeLoad", "load"), Vb.safeLoadAll = n("safeLoadAll", "loadAll"), Vb.safeDump = n("safeDump", "dump"), Vb;
}
i(sS, "requireJsYaml");
var { Type: cS, Schema: lS, FAILSAFE_SCHEMA: uS, JSON_SCHEMA: dS, CORE_SCHEMA: fS, DEFAULT_SCHEMA: pS, load: mS, loadAll: hS, dump: gS, YAMLException: _S, types: vS, safeLoad: yS, safeLoadAll: bS, safeDump: xS } = /* @__PURE__ */ Bb(sS()), SS = {
	common: xr,
	getConfig: B,
	insertCluster: sm,
	insertEdge: Im,
	insertEdgeLabel: Tm,
	insertMarkers: Hm,
	insertNode: $p,
	interpolateToCurve: ls,
	labelHelper: J,
	log: p,
	positionEdgeLabel: Dm
}, CS = {}, wS = /* @__PURE__ */ i((e) => {
	for (let t of e) CS[t.name] = t;
}, "registerLayoutLoaders");
(/* @__PURE__ */ i(() => {
	wS([
		{
			name: "dagre",
			loader: /* @__PURE__ */ i(async () => await import("./dagre-GXQ25YYZ-0_rHQ02d-CE6pQxo5.js"), "loader")
		},
		{
			name: "swimlane",
			loader: /* @__PURE__ */ i(async () => await import("./swimlanes-42K2YHIH-BxH86fKc-sygVt9_h.js"), "loader")
		},
		{
			name: "cose-bilkent",
			loader: /* @__PURE__ */ i(async () => await import("./cose-bilkent-JH36ORCC-Dzlkw47W-VJejQ2cn.js"), "loader")
		}
	]);
}, "registerDefaultLayoutLoaders"))();
var TS = /* @__PURE__ */ i(async (e, t) => {
	if (!(e.layoutAlgorithm in CS)) throw Error(`Unknown layout algorithm: ${e.layoutAlgorithm}`);
	if (e.diagramId) for (let t of e.nodes) {
		let n = t.domId || t.id;
		t.domId = `${e.diagramId}-${n}`;
	}
	let n = CS[e.layoutAlgorithm], r = await n.loader(), { theme: i, themeVariables: a } = e.config, { useGradient: o, gradientStart: s, gradientStop: c } = a, l = t.attr("id");
	if (t.append("defs").append("filter").attr("id", `${l}-drop-shadow`).attr("height", "130%").attr("width", "130%").append("feDropShadow").attr("dx", "4").attr("dy", "4").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", `${i?.includes("dark") ? "#FFFFFF" : "#000000"}`), t.append("defs").append("filter").attr("id", `${l}-drop-shadow-small`).attr("height", "150%").attr("width", "150%").append("feDropShadow").attr("dx", "2").attr("dy", "2").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", `${i?.includes("dark") ? "#FFFFFF" : "#000000"}`), o) {
		let e = t.append("linearGradient").attr("id", t.attr("id") + "-gradient").attr("gradientUnits", "objectBoundingBox").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
		e.append("svg:stop").attr("offset", "0%").attr("stop-color", s).attr("stop-opacity", 1), e.append("svg:stop").attr("offset", "100%").attr("stop-color", c).attr("stop-opacity", 1);
	}
	return r.render(e, t, SS, { algorithm: n.algorithm });
}, "render"), ES = /* @__PURE__ */ i((e = "", { fallback: t = "dagre" } = {}) => {
	if (e in CS) return e;
	if (t in CS) return p.warn(`Layout algorithm ${e} is not registered. Using ${t} as fallback.`), t;
	throw Error(`Both layout algorithms ${e} and ${t} are not registered.`);
}, "getRegisteredLayoutAlgorithm"), DS = "comm", OS = "rule", kS = "decl", AS = "@media", jS = "@import", MS = "@supports", NS = "@namespace", PS = "@keyframes", FS = "@layer", IS = "@scope", LS = Math.abs, RS = String.fromCharCode;
function zS(e) {
	return e.trim();
}
function BS(e, t, n) {
	return e.replace(t, n);
}
function VS(e, t) {
	return e.charCodeAt(t) | 0;
}
function HS(e, t, n) {
	return e.slice(t, n);
}
function US(e) {
	return e.length;
}
function WS(e) {
	return e.length;
}
function GS(e, t) {
	return t.push(e), e;
}
var KS = 1, qS = 1, JS = 0, YS = 0, XS = 0, ZS = "";
function QS(e, t, n, r, i, a, o, s) {
	return {
		value: e,
		root: t,
		parent: n,
		type: r,
		props: i,
		children: a,
		line: KS,
		column: qS,
		length: o,
		return: "",
		siblings: s
	};
}
function $S() {
	return XS;
}
function eC() {
	return XS = YS > 0 ? VS(ZS, --YS) : 0, qS--, XS === 10 && (qS = 1, KS--), XS;
}
function tC() {
	return XS = YS < JS ? VS(ZS, YS++) : 0, qS++, XS === 10 && (qS = 1, KS++), XS;
}
function nC() {
	return VS(ZS, YS);
}
function rC() {
	return YS;
}
function iC(e, t) {
	return HS(ZS, e, t);
}
function aC(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
function oC(e) {
	return KS = qS = 1, JS = US(ZS = e), YS = 0, [];
}
function sC(e) {
	return ZS = "", e;
}
function cC(e) {
	return zS(iC(YS - 1, dC(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function lC(e) {
	for (; (XS = nC()) && XS < 33;) tC();
	return aC(e) > 2 || aC(XS) > 3 ? "" : " ";
}
function uC(e, t) {
	for (; --t && tC() && !(XS < 48 || XS > 102 || XS > 57 && XS < 65 || XS > 70 && XS < 97););
	return iC(e, rC() + (t < 6 && nC() == 32 && tC() == 32));
}
function dC(e) {
	for (; tC();) switch (XS) {
		case e: return YS;
		case 34:
		case 39:
			e !== 34 && e !== 39 && dC(XS);
			break;
		case 40:
			e === 41 && dC(e);
			break;
		case 92: tC();
	}
	return YS;
}
function fC(e, t) {
	for (; tC() && e + XS !== 57 && (e + XS !== 84 || nC() !== 47););
	return "/*" + iC(t, YS - 1) + "*" + RS(e === 47 ? e : tC());
}
function pC(e) {
	for (; !aC(nC());) tC();
	return iC(e, YS);
}
function mC(e) {
	return sC(hC("", null, null, null, [""], e = oC(e), 0, [0], e));
}
function hC(e, t, n, r, i, a, o, s, c) {
	for (var l = 0, u = 0, d = o, f = 0, p = 0, m = 0, h = 1, g = 1, _ = 1, v = 0, y = 0, b = "", x = i, S = a, C = r, w = b; g;) switch (m = y, y = tC()) {
		case 40:
			m != 108 && VS(w, d - 1) == 58 ? (v++, w += "(") : w += cC(y);
			break;
		case 41:
			v--, w += ")";
			break;
		case 34:
		case 39:
		case 91:
			w += cC(y);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			if (v > 0) {
				w += RS(y);
				break;
			}
			w += lC(m);
			break;
		case 92:
			w += uC(rC() - 1, 7);
			continue;
		case 47:
			switch (nC()) {
				case 42:
				case 47:
					GS(_C(fC(tC(), rC()), t, n, c), c), (aC(m || 1) == 5 || aC(nC() || 1) == 5) && US(w) && HS(w, -1, void 0) !== " " && (w += " ");
					break;
				default: w += "/";
			}
			break;
		case 123 * h: s[l++] = US(w) * _;
		case 125 * h:
		case 59:
		case 0:
			if (v > 0 && y) {
				w += RS(y);
				break;
			}
			switch (y) {
				case 0:
				case 125: g = 0;
				case 59 + u:
					_ == -1 && (w = BS(w, /\f/g, "")), p > 0 && (US(w) - d || h === 0) && GS(p > 32 ? vC(w + ";", r, n, d - 1, c) : vC(BS(w, " ", "") + ";", r, n, d - 2, c), c);
					break;
				case 59: w += ";";
				default: if (GS(C = gC(w, t, n, l, u, i, s, b, x = [], S = [], d, a), a), y === 123) {
					if (u === 0) hC(w, t, C, C, x, a, d, s, S);
					else {
						switch (f) {
							case 99: if (VS(w, 3) === 110) break;
							case 108: if (VS(w, 2) === 97) break;
							default: u = 0;
							case 100:
							case 109:
							case 115:
						}
						u ? hC(e, C, C, r && GS(gC(e, C, C, 0, 0, i, s, b, i, x = [], d, S), S), i, S, d, s, r ? x : S) : hC(w, C, C, C, [""], S, 0, s, S);
					}
				}
			}
			l = u = p = 0, h = _ = 1, b = w = "", d = o;
			break;
		case 58: d = 1 + US(w), p = m;
		default:
			if (h < 1) {
				if (y == 123) --h;
				else if (y == 125 && h++ == 0 && eC() == 125) continue;
			}
			switch (w += RS(y), y * h) {
				case 38:
					_ = u > 0 ? 1 : (w += "\f", -1);
					break;
				case 44:
					if (v > 0) break;
					s[l++] = (US(w) - 1) * _, _ = 1;
					break;
				case 64:
					nC() === 45 && (w += cC(tC())), f = nC(), u = d = US(b = w += pC(rC())), y++;
					break;
				case 45: m === 45 && US(w) == 2 && (h = 0);
			}
	}
	return a;
}
function gC(e, t, n, r, i, a, o, s, c, l, u, d) {
	for (var f = i - 1, p = i === 0 ? a : [""], m = WS(p), h = 0, g = 0, _ = 0; h < r; ++h) for (var v = 0, y = HS(e, f + 1, f = LS(g = o[h])), b = e; v < m; ++v) (b = zS(g > 0 ? p[v] + " " + y : BS(y, /&\f/g, p[v]))) && (c[_++] = b);
	return QS(e, t, n, i === 0 ? OS : s, c, l, u, d);
}
function _C(e, t, n, r) {
	return QS(e, t, n, DS, RS($S()), HS(e, 2, -2), 0, r);
}
function vC(e, t, n, r, i) {
	return QS(e, t, n, kS, HS(e, 0, r), HS(e, r + 1, -1), r, i);
}
function yC(e, t) {
	for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
	return n;
}
function bC(e, t, n, r) {
	switch (e.type) {
		case FS: if (e.children.length) break;
		case jS:
		case NS:
		case kS: return e.return = e.return || e.value;
		case DS: return "";
		case PS: return e.return = e.value + "{" + yC(e.children, r) + "}";
		case OS: if (!US(e.value = e.props.join(","))) return "";
	}
	return US(n = yC(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function xC(e) {
	var t = WS(e);
	return function(n, r, i, a) {
		for (var o = "", s = 0; s < t; s++) o += e[s](n, r, i, a) || "";
		return o;
	};
}
var SC = "c4", CC = {
	id: SC,
	detector: /* @__PURE__ */ i((e) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./c4Diagram-7LVT6UL2-k40V2vIr-DhBsB9-Q.js");
		return {
			id: SC,
			diagram: e
		};
	}, "loader")
}, wC = "flowchart", TC = {
	id: wC,
	detector: /* @__PURE__ */ i((e, t) => t?.flowchart?.defaultRenderer === "dagre-wrapper" || t?.flowchart?.defaultRenderer === "elk" ? !1 : /^\s*graph/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./flowDiagram-HODETNUW-B8kSK2sQ-Bs09p9JX.js");
		return {
			id: wC,
			diagram: e
		};
	}, "loader")
}, EC = "flowchart-v2", DC = {
	id: EC,
	detector: /* @__PURE__ */ i((e, t) => t?.flowchart?.defaultRenderer !== "dagre-d3" && (t?.flowchart?.defaultRenderer === "elk" && (t.layout = "elk"), /^\s*graph/.test(e) && t?.flowchart?.defaultRenderer === "dagre-wrapper" ? !0 : /^\s*flowchart/.test(e)), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./flowDiagram-HODETNUW-B8kSK2sQ-Bs09p9JX.js");
		return {
			id: EC,
			diagram: e
		};
	}, "loader")
}, OC = "swimlane", kC = {
	id: OC,
	detector: /* @__PURE__ */ i((e) => /^\s*swimlane-beta\b/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./swimlanesDiagram-VR7AAH4N-D2GZCzYs-Cm4wl1Op.js");
		return {
			id: OC,
			diagram: e
		};
	}, "loader")
}, AC = "er", jC = {
	id: AC,
	detector: /* @__PURE__ */ i((e) => /^\s*erDiagram/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./erDiagram-RLTQ6QDP-Clqg44D3-B_TLvDWA.js");
		return {
			id: AC,
			diagram: e
		};
	}, "loader")
}, MC = "gitGraph", NC = {
	id: MC,
	detector: /* @__PURE__ */ i((e) => /^\s*gitGraph/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./gitGraphDiagram-WWUBYQGX-BqsJI4DA-DRjRy1kI.js");
		return {
			id: MC,
			diagram: e
		};
	}, "loader")
}, PC = "gantt", FC = {
	id: PC,
	detector: /* @__PURE__ */ i((e) => /^\s*gantt/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./ganttDiagram-EL5Y4UJY-B1AT_1JT-B5O5M-PN.js");
		return {
			id: PC,
			diagram: e
		};
	}, "loader")
}, IC = "info", LC = {
	id: IC,
	detector: /* @__PURE__ */ i((e) => /^\s*info/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./infoDiagram-27XIBGKW-D8ff-Xpp-CiGPvHFe.js");
		return {
			id: IC,
			diagram: e
		};
	}, "loader")
}, RC = "pie", zC = {
	id: RC,
	detector: /* @__PURE__ */ i((e) => /^\s*pie/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./pieDiagram-E7YTZNPT-CGW4FEdX-BUGXQAR5.js");
		return {
			id: RC,
			diagram: e
		};
	}, "loader")
}, BC = "quadrantChart", VC = {
	id: BC,
	detector: /* @__PURE__ */ i((e) => /^\s*quadrantChart/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./quadrantDiagram-AXDQQJYC-1i3l2RVr-CVShImHS.js");
		return {
			id: BC,
			diagram: e
		};
	}, "loader")
}, HC = "xychart", UC = {
	id: HC,
	detector: /* @__PURE__ */ i((e) => /^\s*xychart(-beta)?/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./xychartDiagram-S5SC5T6Z-Br62ykOR-DnonDtwN.js");
		return {
			id: HC,
			diagram: e
		};
	}, "loader")
}, WC = "requirement", GC = {
	id: WC,
	detector: /* @__PURE__ */ i((e) => /^\s*requirement(Diagram)?/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./requirementDiagram-BXWQKSXE-BFxleWUY-okLe38DN.js");
		return {
			id: WC,
			diagram: e
		};
	}, "loader")
}, KC = "sequence", qC = {
	id: KC,
	detector: /* @__PURE__ */ i((e) => /^\s*sequenceDiagram/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./sequenceDiagram-WJ2MYXX4-DQ5hfP2m-DVNNmsSI.js");
		return {
			id: KC,
			diagram: e
		};
	}, "loader")
}, JC = "class", YC = {
	id: JC,
	detector: /* @__PURE__ */ i((e, t) => t?.class?.defaultRenderer !== "dagre-wrapper" && /^\s*classDiagram/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./classDiagram-ZZMXUADV-BYumaw0X-DMCA2dFU.js");
		return {
			id: JC,
			diagram: e
		};
	}, "loader")
}, XC = "classDiagram", ZC = {
	id: XC,
	detector: /* @__PURE__ */ i((e, t) => /^\s*classDiagram/.test(e) && t?.class?.defaultRenderer === "dagre-wrapper" ? !0 : /^\s*classDiagram-v2/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./classDiagram-v2-VYDZK3BY-BYumaw0X-BwX0n9he.js");
		return {
			id: XC,
			diagram: e
		};
	}, "loader")
}, QC = "state", $C = {
	id: QC,
	detector: /* @__PURE__ */ i((e, t) => t?.state?.defaultRenderer !== "dagre-wrapper" && /^\s*stateDiagram/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./stateDiagram-D77RDMKH-CswFRitx-BPGW8SjV.js");
		return {
			id: QC,
			diagram: e
		};
	}, "loader")
}, ew = "stateDiagram", tw = {
	id: ew,
	detector: /* @__PURE__ */ i((e, t) => !!(/^\s*stateDiagram-v2/.test(e) || /^\s*stateDiagram/.test(e) && t?.state?.defaultRenderer === "dagre-wrapper"), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./stateDiagram-v2-MP3YSRHH-CDNXWkmB-CKXWKkyQ.js");
		return {
			id: ew,
			diagram: e
		};
	}, "loader")
}, nw = "journey", rw = {
	id: nw,
	detector: /* @__PURE__ */ i((e) => /^\s*journey/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./journeyDiagram-3NMN7TZE-Cc1PRR3r-DMIxA9bb.js");
		return {
			id: nw,
			diagram: e
		};
	}, "loader")
}, iw = { draw: /* @__PURE__ */ i((e, t, n) => {
	p.debug("rendering svg for syntax error\n");
	let r = pa(t), i = r.append("g");
	r.attr("viewBox", "0 0 2412 512"), wr(r, 100, 512, !0), i.append("path").attr("class", "error-icon").attr("d", "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"), i.append("path").attr("class", "error-icon").attr("d", "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"), i.append("path").attr("class", "error-icon").attr("d", "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"), i.append("path").attr("class", "error-icon").attr("d", "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"), i.append("path").attr("class", "error-icon").attr("d", "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"), i.append("path").attr("class", "error-icon").attr("d", "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"), i.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), i.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${n}`);
}, "draw") }, aw = iw, ow = {
	db: {},
	renderer: iw,
	parser: { parse: /* @__PURE__ */ i(() => {}, "parse") }
}, sw = "flowchart-elk", cw = {
	id: sw,
	detector: /* @__PURE__ */ i((e, t = {}) => /^\s*flowchart-elk/.test(e) || /^\s*(flowchart|graph)/.test(e) && t?.flowchart?.defaultRenderer === "elk" ? (t.layout = "elk", !0) : !1, "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./flowDiagram-HODETNUW-B8kSK2sQ-Bs09p9JX.js");
		return {
			id: sw,
			diagram: e
		};
	}, "loader")
}, lw = "timeline", uw = {
	id: lw,
	detector: /* @__PURE__ */ i((e) => /^\s*timeline/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./timeline-definition-24CTP7MA-DGx55HnZ-BpFBu0HN.js");
		return {
			id: lw,
			diagram: e
		};
	}, "loader")
}, dw = "mindmap", fw = {
	id: dw,
	detector: /* @__PURE__ */ i((e) => /^\s*mindmap/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./mindmap-definition-YA3MSWOX-7vteITMf-z0_eDwia.js");
		return {
			id: dw,
			diagram: e
		};
	}, "loader")
}, pw = "kanban", mw = {
	id: pw,
	detector: /* @__PURE__ */ i((e) => /^\s*kanban/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./kanban-definition-UXKFOSKX-CEEnhMPV-CwdafsIk.js");
		return {
			id: pw,
			diagram: e
		};
	}, "loader")
}, hw = "sankey", gw = {
	id: hw,
	detector: /* @__PURE__ */ i((e) => /^\s*sankey(-beta)?/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./sankeyDiagram-P5KCCOFB-yxvIZO6U-3gLSl8e5.js");
		return {
			id: hw,
			diagram: e
		};
	}, "loader")
}, _w = "packet", vw = {
	id: _w,
	detector: /* @__PURE__ */ i((e) => /^\s*packet(-beta)?/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./diagram-Z3DM3KII-CHY7MdRm-BZtKZf8E.js");
		return {
			id: _w,
			diagram: e
		};
	}, "loader")
}, yw = "radar", bw = {
	id: yw,
	detector: /* @__PURE__ */ i((e) => /^\s*radar-beta/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./diagram-UQ7AKVKN-omJB0TwG-zDP62QJJ.js");
		return {
			id: yw,
			diagram: e
		};
	}, "loader")
}, xw = "block", Sw = {
	id: xw,
	detector: /* @__PURE__ */ i((e) => /^\s*block(-beta)?/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./blockDiagram-I7D4REHJ-DqPs4wzi-CzKqkFxw.js");
		return {
			id: xw,
			diagram: e
		};
	}, "loader")
}, Cw = "treeView", ww = {
	id: Cw,
	detector: /* @__PURE__ */ i((e) => /^\s*treeView-beta/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./diagram-S7CK7UJ4-B7VAjEPd-CqE7JGnf.js");
		return {
			id: Cw,
			diagram: e
		};
	}, "loader")
}, Tw = "architecture", Ew = {
	id: Tw,
	detector: /* @__PURE__ */ i((e) => /^\s*architecture/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./architectureDiagram-5GKGNRK7-8EsVXpdZ-DLfztohJ.js");
		return {
			id: Tw,
			diagram: e
		};
	}, "loader")
}, Dw = "eventmodeling", Ow = {
	id: Dw,
	detector: /* @__PURE__ */ i((e) => /^\s*eventmodeling/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./diagram-VSXAHHWV-BWIEZB6y-UvzW0RL0.js");
		return {
			id: Dw,
			diagram: e
		};
	}, "loader")
}, kw = "ishikawa", Aw = {
	id: kw,
	detector: /* @__PURE__ */ i((e) => /^\s*ishikawa(-beta)?\b/i.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./ishikawaDiagram-5VMMS53U--xj-wijF-D9Y36u9e.js");
		return {
			id: kw,
			diagram: e
		};
	}, "loader")
}, jw = "venn", Mw = {
	id: jw,
	detector: /* @__PURE__ */ i((e) => /^\s*venn-beta/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./vennDiagram-4TSXK5OY-BrNTogjM-MQcZKGgC.js");
		return {
			id: jw,
			diagram: e
		};
	}, "loader")
}, Nw = "treemap", Pw = {
	id: Nw,
	detector: /* @__PURE__ */ i((e) => /^\s*treemap/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./diagram-VX7I27RA-Kbp4LP9U-Dn6WM7ay.js");
		return {
			id: Nw,
			diagram: e
		};
	}, "loader")
}, Fw = "wardley", Iw = {
	id: Fw,
	detector: /* @__PURE__ */ i((e) => /^\s*wardley-beta/i.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./wardleyDiagram-VM6X3IG4-B2PZkUwG-DYKwXw56.js");
		return {
			id: Fw,
			diagram: e
		};
	}, "loader")
}, Lw = "cynefin", Rw = {
	id: Lw,
	detector: /* @__PURE__ */ i((e) => /^\s*cynefin-beta(?:[\s:]|$)/.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./cynefinDiagram-5FMLGOSQ-BAhi5S_5-BdpzL58w.js");
		return {
			id: Lw,
			diagram: e
		};
	}, "loader")
}, zw = "railroad", Bw = {
	id: zw,
	detector: /* @__PURE__ */ i((e) => /^\s*railroad-beta/i.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./railroadDiagram-O6MQD6OU-SZzx-OSK-BMh8ujWi.js");
		return {
			id: zw,
			diagram: e
		};
	}, "loader")
}, Vw = "railroadEbnf", Hw = {
	id: Vw,
	detector: /* @__PURE__ */ i((e) => /^\s*railroad-ebnf-beta/i.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./ebnfDiagram-PWID7BFC-BK2ifBA4-WqLJd2cT.js");
		return {
			id: Vw,
			diagram: e
		};
	}, "loader")
}, Uw = "railroadAbnf", Ww = {
	id: Uw,
	detector: /* @__PURE__ */ i((e) => /^\s*railroad-abnf-beta/i.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./abnfDiagram-VCTEODGH-O1S4Ytry-BAzErIQz.js");
		return {
			id: Uw,
			diagram: e
		};
	}, "loader")
}, Gw = "railroadPeg", Kw = {
	id: Gw,
	detector: /* @__PURE__ */ i((e) => /^\s*railroad-peg-beta/i.test(e), "detector"),
	loader: /* @__PURE__ */ i(async () => {
		let { diagram: e } = await import("./pegDiagram-XKGWAZYB-ChcI1VPD-CqhIX2Cz.js");
		return {
			id: Gw,
			diagram: e
		};
	}, "loader")
}, qw = !1, Jw = /* @__PURE__ */ i(() => {
	qw || (qw = !0, Zr("error", ow, (e) => e.toLowerCase().trim() === "error"), Zr("---", {
		db: { clear: /* @__PURE__ */ i(() => {}, "clear") },
		styles: {},
		renderer: { draw: /* @__PURE__ */ i(() => {}, "draw") },
		parser: { parse: /* @__PURE__ */ i(() => {
			throw Error("Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks");
		}, "parse") },
		init: /* @__PURE__ */ i(() => null, "init")
	}, (e) => e.toLowerCase().trimStart().startsWith("---")), qn(cw, fw, Ew), qn(CC, mw, ZC, YC, jC, FC, LC, zC, GC, qC, kC, DC, TC, uw, NC, tw, $C, rw, VC, gw, vw, UC, Sw, Ow, ww, bw, Aw, Pw, Bw, Hw, Ww, Kw, Mw, Iw, Rw));
}, "addDiagrams"), Yw = /* @__PURE__ */ i(async () => {
	p.debug("Loading registered diagrams");
	let e = (await Promise.allSettled(Object.entries(Gn).map(async ([e, { detector: t, loader: n }]) => {
		if (n) try {
			Qr(e);
		} catch {
			try {
				let { diagram: e, id: r } = await n();
				Zr(r, e, t);
			} catch (t) {
				throw p.error(`Failed to load external diagram with key ${e}. Removing from detectors.`), delete Gn[e], t;
			}
		}
	}))).filter((e) => e.status === "rejected");
	if (e.length > 0) {
		p.error(`Failed to load ${e.length} external diagrams`);
		for (let t of e) p.error(t);
		throw Error(`Failed to load ${e.length} external diagrams`);
	}
}, "loadRegisteredDiagrams"), Xw = "graphics-document document";
function Zw(e, t) {
	e.attr("role", Xw), t !== "" && e.attr("aria-roledescription", t);
}
i(Zw, "setA11yDiagramInfo");
function Qw(e, t, n, r) {
	if (e.insert !== void 0) {
		if (n) {
			let t = `chart-desc-${r}`;
			e.attr("aria-describedby", t), e.insert("desc", ":first-child").attr("id", t).text(n);
		}
		if (t) {
			let n = `chart-title-${r}`;
			e.attr("aria-labelledby", n), e.insert("title", ":first-child").attr("id", n).text(t);
		}
	}
}
i(Qw, "addSVGa11yTitleDescription");
var $w, eT = ($w = class {
	constructor(e, t, n, r, i) {
		this.type = e, this.text = t, this.db = n, this.parser = r, this.renderer = i;
	}
	static async fromText(e, t = {}) {
		let n = B(), r = Kn(e, n);
		e = Bs(e) + "\n";
		try {
			Qr(r);
		} catch {
			let e = Yn(r);
			if (!e) throw new Wn(`Diagram ${r} not found.`);
			let { id: t, diagram: n } = await e();
			Zr(t, n);
		}
		let { db: i, parser: a, renderer: o, init: s } = Qr(r);
		return a.parser && (a.parser.yy = i), i.clear?.(), s?.(n), t.title && i.setDiagramTitle?.(t.title), await a.parse(e), new $w(r, e, i, a, o);
	}
	async render(e, t) {
		await this.renderer.draw(this.text, e, t, this);
	}
	getParser() {
		return this.parser;
	}
	getType() {
		return this.type;
	}
}, i($w, "Diagram"), $w), tT = [], nT = /* @__PURE__ */ i(() => {
	tT.forEach((e) => {
		e();
	}), tT = [];
}, "attachFunctions"), rT = /* @__PURE__ */ i((e) => e.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart(), "cleanupComments");
function iT(e) {
	let t = e.match(Bn);
	if (!t) return {
		text: e,
		metadata: {}
	};
	let n = t[1], r = mS(n ? t[2].split("\n").map((e) => e.startsWith(n) ? e.slice(n.length) : e).join("\n") : t[2], { schema: dS }) ?? {};
	r = typeof r == "object" && !Array.isArray(r) ? r : {};
	let i = {};
	return r.displayMode && (i.displayMode = r.displayMode.toString()), r.title && (i.title = r.title.toString()), r.config && (i.config = r.config), {
		text: e.slice(t[0].length),
		metadata: i
	};
}
i(iT, "extractFrontMatter");
var aT = /* @__PURE__ */ i((e) => e.replace(/\r\n?/g, "\n").replace(/<(\w+)([^>]*)>/g, (e, t, n) => "<" + t + n.replace(/="([^"]*)"/g, "='$1'") + ">"), "cleanupText"), oT = /* @__PURE__ */ i((e) => {
	let { text: t, metadata: n } = iT(e), { displayMode: r, title: i, config: a = {} } = n;
	return r && (a.gantt ||= {}, a.gantt.displayMode = r), {
		title: i,
		config: a,
		text: t
	};
}, "processFrontmatter"), sT = /* @__PURE__ */ i((e) => {
	let t = zs.detectInit(e) ?? {}, n = zs.detectDirective(e, "wrap");
	return Array.isArray(n) ? t.wrap = n.some(({ type: e }) => e === "wrap") : n?.type === "wrap" && (t.wrap = !0), {
		text: ss(e),
		directive: t
	};
}, "processDirectives");
function cT(e) {
	let t = oT(aT(e)), n = sT(t.text), r = Rs(t.config, n.directive);
	return e = rT(n.text), {
		code: e,
		title: t.title,
		config: r
	};
}
i(cT, "preprocessDiagram");
function lT(e) {
	let t = new TextEncoder().encode(e), n = Array.from(t, (e) => String.fromCodePoint(e)).join("");
	return btoa(n);
}
i(lT, "toBase64");
var uT = 5e4, dT = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa", fT = "sandbox", pT = "loose", mT = "http://www.w3.org/2000/svg", hT = "http://www.w3.org/1999/xlink", gT = "http://www.w3.org/1999/xhtml", _T = "100%", vT = "100%", yT = "border:0;margin:0;", bT = "margin:0", xT = "allow-top-navigation-by-user-activation allow-popups", ST = "The \"iframe\" tag is not supported by your browser.", CT = ["foreignobject"], wT = ["dominant-baseline"];
function TT(e) {
	let t = cT(e);
	return Nn(), Mn(t.config ?? {}), t;
}
i(TT, "processAndSetConfigs");
async function ET(e, t) {
	Jw();
	try {
		let { code: t, config: n } = TT(e);
		return {
			diagramType: (await RT(t)).type,
			config: n
		};
	} catch (e) {
		if (t?.suppressErrors) return !1;
		throw e;
	}
}
i(ET, "parse");
var DT = /* @__PURE__ */ i((e, t, n = []) => `.${e} ${t} ${vn(`{ ${n.join(" !important; ")} !important; }`)}`, "cssImportantStyles"), OT = /* @__PURE__ */ i((e, t = /* @__PURE__ */ new Map()) => {
	let n = new CSSStyleSheet();
	if (e.fontFamily !== void 0 && n.insertRule(`:root { --mermaid-font-family: ${e.fontFamily}}`, n.cssRules.length), e.altFontFamily !== void 0 && n.insertRule(`:root { --mermaid-alt-font-family: ${e.altFontFamily}}`, n.cssRules.length), t instanceof Map) {
		let r = zn(e) ? ["> *", "span"] : [
			"rect",
			"polygon",
			"ellipse",
			"circle",
			"path"
		];
		t.forEach((e) => {
			ns(e.styles) || r.forEach((t) => {
				n.insertRule(DT(e.id, t, e.styles), n.cssRules.length);
			}), ns(e.textStyles) || n.insertRule(DT(e.id, "tspan", (e?.textStyles || []).map((e) => e.replace("color", "fill"))), n.cssRules.length);
		});
	}
	let r = "";
	if (e.themeCSS !== void 0) {
		if (typeof n.replaceSync == "function") {
			let t = new CSSStyleSheet();
			t.replaceSync(e.themeCSS), r = Dr(t) + "\n";
		} else r += `${e.themeCSS}
`;
	}
	return r + Dr(n);
}, "createCssStyles"), kT = /* @__PURE__ */ i((e, t) => yC(mC(`${e}{${t}}`), xC([/* @__PURE__ */ i(function(t, n, r, i) {
	if (t.type === "rule" && Array.isArray(t.props)) {
		if (t.parent && t.parent.type === PS) return;
		t.props = t.props.map((n) => n === e && Array.isArray(t.children) && t.children.every((e) => e.type === "decl" && (/* @__PURE__ */ new Set([
			"font-family",
			"font-size",
			"fill"
		])).has(e.props)) || (n.startsWith(`${e} `) || n.startsWith(`${e}>`)) && !n.startsWith(`${e} ||`) ? n : `${e} ${n}`);
	} else t.type.startsWith("@") && ([
		AS,
		MS,
		FS,
		IS,
		"@container",
		"@starting-style",
		PS
	].includes(t.type) || (p.warn(`Removing unsupported at-rule ${t.type} from CSS`), t.type = DS));
}, "addNamespace"), bC])), "compileCSS"), AT = /* @__PURE__ */ i((e, t, n, r) => kT(r, Ar(t, OT(e, n), {
	...e.themeVariables,
	theme: e.theme,
	look: e.look
}, r)), "createUserStyles"), jT = /* @__PURE__ */ i((e = "", t, n) => {
	let r = e;
	return !n && !t && (r = r.replace(/marker-end="url\([\d+./:=?A-Za-z-]*?#/g, "marker-end=\"url(#")), r = Vs(r), r = r.replace(/<br>/g, "<br/>"), r;
}, "cleanUpSvgCode"), MT = /* @__PURE__ */ i((e = "", t) => `<iframe style="width:${_T};height:${t?.viewBox?.baseVal?.height ? t.viewBox.baseVal.height + "px" : vT};${yT}" src="data:text/html;charset=UTF-8;base64,${lT(`<body style="${bT}">${e}</body>`)}" sandbox="${xT}">
  ${ST}
</iframe>`, "putIntoIFrame"), NT = /* @__PURE__ */ i((e, t, n, r, i) => {
	let a = e.append("div");
	a.attr("id", n), r && a.attr("style", r);
	let o = a.append("svg").attr("id", t).attr("width", "100%").attr("xmlns", mT);
	return i && o.attr("xmlns:xlink", i), o.append("g"), e;
}, "appendDivSvgG");
function PT(e, t) {
	return e.append("iframe").attr("id", t).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
i(PT, "sandboxedIframe");
var FT = /* @__PURE__ */ i((e, t, n, r) => {
	e.getElementById(t)?.remove(), e.getElementById(n)?.remove(), e.getElementById(r)?.remove();
}, "removeExistingElements"), IT = /* @__PURE__ */ i(async function(e, t, r) {
	Jw();
	let a = TT(t);
	t = a.code;
	let o = B();
	p.debug(o), t.length > (o?.maxTextSize ?? uT) && (t = dT);
	let s = `#${e}`, c = "i" + e, l = "#" + c, u = "d" + e, d = "#" + u, f = /* @__PURE__ */ i(() => {
		let e = n(h ? l : d).node();
		e && "remove" in e && e.remove();
	}, "removeTempElements"), m = n(document.body), h = o.securityLevel === fT, g = o.securityLevel === pT, _ = o.fontFamily;
	if (r !== void 0) {
		if (r && (r.innerHTML = ""), h) {
			let e = PT(n(r), c);
			m = n(e.nodes()[0].contentDocument.body), m.node().style.margin = "0";
		} else m = n(r);
		NT(m, e, u, `font-family: ${_}`, hT);
	} else {
		if (FT(document, e, u, c), h) {
			let e = PT(n(document.body), c);
			m = n(e.nodes()[0].contentDocument.body), m.node().style.margin = "0";
		} else m = n("body");
		NT(m, e, u);
	}
	let v, y;
	try {
		v = await eT.fromText(t, { title: a.title });
	} catch (e) {
		if (o.suppressErrorRendering) throw f(), e;
		v = await eT.fromText("error"), y = e;
	}
	let b = m.select(d).node(), x = v.type, S = b.firstChild, C = S.firstChild, w = v.renderer.getClasses?.(t, v), T = AT(o, x, w, s), E = document.createElement("style");
	E.innerHTML = T, S.insertBefore(E, C);
	try {
		await v.renderer.draw(t, e, "11.17.2", v);
	} catch (n) {
		throw o.suppressErrorRendering ? f() : aw.draw(t, e, "11.17.2"), n;
	}
	let D = m.select(`${d} svg`), O = v.db.getAccTitle?.(), k = v.db.getAccDescription?.();
	zT(x, D, O, k);
	let ee = (/* @__PURE__ */ i(() => {
		m.select(`[id="${e}"]`).selectAll("foreignobject > *").attr("xmlns", gT);
		let t = m.select(d).node().innerHTML;
		if (p.debug("config.arrowMarkerAbsolute", o.arrowMarkerAbsolute), t = jT(t, h, bn(o.arrowMarkerAbsolute)), h) {
			let e = m.select(d + " svg").node();
			t = MT(t, e);
		} else g || (t = Tt.sanitize(t, {
			ADD_TAGS: CT,
			ADD_ATTR: wT,
			HTML_INTEGRATION_POINTS: { foreignobject: !0 }
		}));
		return nT(), t;
	}, "serializeSvg"))();
	if (y) throw y;
	return f(), {
		diagramType: x,
		svg: ee,
		bindFunctions: v.db.bindFunctions
	};
}, "render");
function LT(e = {}) {
	let t = Dt({}, e);
	t?.fontFamily && !t.themeVariables?.fontFamily && (t.themeVariables ||= {}, t.themeVariables.fontFamily = t.fontFamily), Dn(t), t?.theme && t.theme in ln ? t.themeVariables = ln[t.theme].getThemeVariables(t.themeVariables) : t && (t.themeVariables = ln.default.getThemeVariables(t.themeVariables)), m((typeof t == "object" ? En(t) : kn()).logLevel), Jw();
}
i(LT, "initialize");
var RT = /* @__PURE__ */ i((e, t = {}) => {
	let { code: n } = cT(e);
	return eT.fromText(n, t);
}, "getDiagramFromText");
function zT(e, t, n, r) {
	Zw(t, e), Qw(t, n, r, t.attr("id"));
}
i(zT, "addA11yInfo");
var BT = Object.freeze({
	render: IT,
	parse: ET,
	getDiagramFromText: RT,
	initialize: LT,
	getConfig: B,
	setConfig: An,
	getSiteConfig: kn,
	updateSiteConfig: On,
	reset: /* @__PURE__ */ i(() => {
		Nn();
	}, "reset"),
	globalReset: /* @__PURE__ */ i(() => {
		Nn(yn);
	}, "globalReset"),
	defaultConfig: yn
});
m(B().logLevel), Nn(B());
var VT = /* @__PURE__ */ i((e, t, n) => {
	p.warn(e), Fs(e) ? (n && n(e.str, e.hash), t.push({
		...e,
		message: e.str,
		error: e
	})) : (n && n(e), e instanceof Error && t.push({
		str: e.message,
		message: e.message,
		hash: e.name,
		error: e
	}));
}, "handleError"), HT = /* @__PURE__ */ i(async function(e = { querySelector: ".mermaid" }) {
	try {
		await UT(e);
	} catch (t) {
		if (Fs(t) && p.error(t.str), eE.parseError && eE.parseError(t), !e.suppressErrors) throw p.error("Use the suppressErrors option to suppress these errors"), t;
	}
}, "run"), UT = /* @__PURE__ */ i(async function({ postRenderCallback: e, querySelector: t, nodes: n } = { querySelector: ".mermaid" }) {
	let r = BT.getConfig();
	p.debug(`${e ? "" : "No "}Callback function found`);
	let i;
	if (n) i = n;
	else if (t) i = document.querySelectorAll(t);
	else throw Error("Nodes and querySelector are both undefined");
	p.debug(`Found ${i.length} diagrams`), r?.startOnLoad !== void 0 && (p.debug("Start On Load: " + r?.startOnLoad), BT.updateSiteConfig({ startOnLoad: r?.startOnLoad }));
	let a = new zs.InitIDGenerator(r.deterministicIds, r.deterministicIDSeed), o, s = [];
	for (let t of Array.from(i)) {
		if (p.info("Rendering diagram: " + t.id), t.getAttribute("data-processed")) continue;
		t.setAttribute("data-processed", "true");
		let n = `mermaid-${a.next()}`;
		o = t.innerHTML, o = Dl(zs.entityDecode(o)).trim().replace(/<br\s*\/?>/gi, "<br/>");
		let r = zs.detectInit(o);
		r && p.debug("Detected early reinit: ", r);
		try {
			let { svg: r, bindFunctions: i } = await $T(n, o, t);
			t.innerHTML = r, e && await e(n), i && i(t);
		} catch (e) {
			VT(e, s, eE.parseError);
		}
	}
	if (s.length > 0) throw s[0];
}, "runThrowsErrors"), WT = /* @__PURE__ */ i(function(e) {
	BT.initialize(e);
}, "initialize"), GT = /* @__PURE__ */ i(async function(e, t, n) {
	p.warn("mermaid.init is deprecated. Please use run instead."), e && WT(e);
	let r = {
		postRenderCallback: n,
		querySelector: ".mermaid"
	};
	typeof t == "string" ? r.querySelector = t : t && (r.nodes = t instanceof HTMLElement ? [t] : t), await HT(r);
}, "init"), KT = /* @__PURE__ */ i(async (e, { lazyLoad: t = !0 } = {}) => {
	Jw(), qn(...e), t === !1 && await Yw();
}, "registerExternalDiagrams"), qT = /* @__PURE__ */ i(function() {
	if (eE.startOnLoad) {
		let { startOnLoad: e } = BT.getConfig();
		e && eE.run().catch((e) => p.error("Mermaid failed to initialize", e));
	}
}, "contentLoaded");
typeof document < "u" && window.addEventListener("load", qT, !1);
var JT = /* @__PURE__ */ i(function(e) {
	eE.parseError = e;
}, "setParseErrorHandler"), YT = [], XT = !1, ZT = /* @__PURE__ */ i(async () => {
	if (!XT) {
		for (XT = !0; YT.length > 0;) {
			let e = YT.shift();
			if (e) try {
				await e();
			} catch (e) {
				p.error("Error executing queue", e);
			}
		}
		XT = !1;
	}
}, "executeQueue"), QT = /* @__PURE__ */ i(async (e, t) => new Promise((n, r) => {
	let a = /* @__PURE__ */ i(() => new Promise((i, a) => {
		BT.parse(e, t).then((e) => {
			i(e), n(e);
		}, (e) => {
			p.error("Error parsing", e), eE.parseError?.(e), a(e), r(e);
		});
	}), "performCall");
	YT.push(a), ZT().catch(r);
}), "parse"), $T = /* @__PURE__ */ i((e, t, n) => new Promise((r, a) => {
	let o = /* @__PURE__ */ i(() => new Promise((i, o) => {
		BT.render(e, t, n).then((e) => {
			i(e), r(e);
		}, (e) => {
			p.error("Error parsing", e), eE.parseError?.(e), o(e), a(e);
		});
	}), "performCall");
	YT.push(o), ZT().catch(a);
}), "render"), eE = {
	startOnLoad: !0,
	mermaidAPI: BT,
	parse: QT,
	render: $T,
	init: GT,
	run: HT,
	registerExternalDiagrams: KT,
	registerLayoutLoaders: wS,
	initialize: WT,
	parseError: void 0,
	contentLoaded: qT,
	setParseErrorHandler: JT,
	detectType: Kn,
	registerIconPacks: Ya,
	getRegisteredDiagramsMetadata: /* @__PURE__ */ i(() => Object.keys(Gn).map((e) => ({ id: e })), "getRegisteredDiagramsMetadata")
}, tE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	clearLayoutRenderState: kb,
	createCommonLayoutRenderer: Ob,
	default: eE,
	defaultMeasureLayout: Ab,
	paintLayoutData: jb
}, Symbol.toStringTag, { value: "Module" }));
//#endregion
export { cb as $, ng as A, Kg as B, E as C, mo as D, vr as E, As as F, nb as G, Os as H, ks as I, dS as J, Iy as K, G_ as L, Rs as M, Ir as N, $ as O, jr as P, xr as Q, Xl as R, ov as S, wr as T, kv as U, ti as V, Vh as W, ii as X, Ob as Y, a as _, Km as a, Ky as a$, tu as a0, Oi as a1, M as a2, Co as a3, _o as a4, d as a5, Kr as a6, mn as a7, Hh as a8, ao as a9, _r as aA, xy as aB, ph as aC, sm as aD, Im as aE, Tm as aF, ub as aG, $p as aH, ko as aI, Ao as aJ, Oo as aK, mg as aL, ch as aM, ag as aN, Fy as aO, yg as aP, A as aQ, vh as aR, Qh as aS, va as aT, fh as aU, ih as aV, Ro as aW, sg as aX, oh as aY, Yo as aZ, Qg as a_, li as aa, $h as ab, zy as ac, bb as ad, jo as ae, Mo as af, Ly as ag, xs as ah, Br as ai, Rr as aj, pv as ak, B as al, V as am, Hr as an, Hs as ao, Qa as ap, ES as aq, ys as ar, Zp as as, lo as at, Ov as au, Rt as av, cr as aw, Rn as ax, di as ay, Sy as az, _ as b, Xp as b0, a_ as b1, j as b2, xi as b3, Xn as b4, mS as b5, p as b6, vo as b7, um as b8, Hm as b9, Gr as bA, Vr as bB, em as bC, yo as bD, Uh as bE, Tr as bF, Jr as bG, Yp as bH, si as bI, Tb as bJ, ci as bK, fo as bL, H as bM, go as bN, fi as bO, K_ as bP, W_ as bQ, Eo as bR, Do as bS, wo as bT, To as bU, Ka as bV, Y as bW, zs as bX, Vy as bY, hi as bZ, Es as b_, ai as ba, tE as bb, oi as bc, Xg as bd, po as be, So as bf, t_ as bg, tg as bh, Ls as bi, dr as bj, ui as bk, Dm as bl, nm as bm, Tt as bn, Cs as bo, Jy as bp, uo as bq, Ya as br, TS as bs, br as bt, O as bu, Gm as bv, nr as bw, pa as bx, zr as by, Lr as bz, i as c, ni as d, pi as e, te as f, Sb as g, ho as h, gi as i, xo as j, Wh as k, e_ as l, sh as m, bo as n, mi as o, Dt as p, q, ri as r, Py as s, Gh as t, Q_ as u, jy as v, My as w, q_ as x, rh as y, ky as z };

//# sourceMappingURL=mermaid.core-iLj2gv8s-DM09IeU-.js.map