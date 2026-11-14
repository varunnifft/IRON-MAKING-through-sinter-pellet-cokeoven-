import { Ki as e } from "./index-B1FrxEMd-BsPMjC5n.js";
import { d as t } from "./linear-CJvvCWKw-rrRTERsA.js";
import { C as n, D as r, E as i, F as a, L as o, O as s, P as c, R as l, b as u, i as d, m as f, o as p, p as m, r as h, s as g, t as _, u as v, x as y } from "./time-p2i1Qn9v-RYMFf5JC.js";
import { c as b } from "./transform-B2AI7qp--hg0kwf7R.js";
import { N as x, Q as S, T as C, a5 as w, a9 as T, ai as E, aj as D, am as O, an as k, b6 as A, bB as j, bX as M, by as N, bz as P, c as F } from "./mermaid.core-iLj2gv8s-DM09IeU-.js";
//#region ../react/build/ganttDiagram-EL5Y4UJY-B1AT_1JT.js
function ee(e) {
	return e;
}
var I = 1, L = 2, R = 3, z = 4, B = 1e-6;
function te(e) {
	return "translate(" + e + ",0)";
}
function ne(e) {
	return "translate(0," + e + ")";
}
function re(e) {
	return (t) => +e(t);
}
function ie(e, t) {
	return t = Math.max(0, e.bandwidth() - t * 2) / 2, e.round() && (t = Math.round(t)), (n) => +e(n) + t;
}
function ae() {
	return !this.__axis;
}
function oe(e, t) {
	var n = [], r = null, i = null, a = 6, o = 6, s = 3, c = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : .5, l = e === I || e === z ? -1 : 1, u = e === z || e === L ? "x" : "y", d = e === I || e === R ? te : ne;
	function f(f) {
		var p = r ?? (t.ticks ? t.ticks.apply(t, n) : t.domain()), m = i ?? (t.tickFormat ? t.tickFormat.apply(t, n) : ee), h = Math.max(a, 0) + s, g = t.range(), _ = +g[0] + c, v = +g[g.length - 1] + c, y = (t.bandwidth ? ie : re)(t.copy(), c), b = f.selection ? f.selection() : f, x = b.selectAll(".domain").data([null]), S = b.selectAll(".tick").data(p, t).order(), C = S.exit(), w = S.enter().append("g").attr("class", "tick"), T = S.select("line"), E = S.select("text");
		x = x.merge(x.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), S = S.merge(w), T = T.merge(w.append("line").attr("stroke", "currentColor").attr(u + "2", l * a)), E = E.merge(w.append("text").attr("fill", "currentColor").attr(u, l * h).attr("dy", e === I ? "0em" : e === R ? "0.71em" : "0.32em")), f !== b && (x = x.transition(f), S = S.transition(f), T = T.transition(f), E = E.transition(f), C = C.transition(f).attr("opacity", B).attr("transform", function(e) {
			return isFinite(e = y(e)) ? d(e + c) : this.getAttribute("transform");
		}), w.attr("opacity", B).attr("transform", function(e) {
			var t = this.parentNode.__axis;
			return d((t && isFinite(t = t(e)) ? t : y(e)) + c);
		})), C.remove(), x.attr("d", e === z || e === L ? o ? "M" + l * o + "," + _ + "H" + c + "V" + v + "H" + l * o : "M" + c + "," + _ + "V" + v : o ? "M" + _ + "," + l * o + "V" + c + "H" + v + "V" + l * o : "M" + _ + "," + c + "H" + v), S.attr("opacity", 1).attr("transform", function(e) {
			return d(y(e) + c);
		}), T.attr(u + "2", l * a), E.attr(u, l * h).text(m), b.filter(ae).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === L ? "start" : e === z ? "end" : "middle"), b.each(function() {
			this.__axis = y;
		});
	}
	return f.scale = function(e) {
		return arguments.length ? (t = e, f) : t;
	}, f.ticks = function() {
		return n = Array.from(arguments), f;
	}, f.tickArguments = function(e) {
		return arguments.length ? (n = e == null ? [] : Array.from(e), f) : n.slice();
	}, f.tickValues = function(e) {
		return arguments.length ? (r = e == null ? null : Array.from(e), f) : r && r.slice();
	}, f.tickFormat = function(e) {
		return arguments.length ? (i = e, f) : i;
	}, f.tickSize = function(e) {
		return arguments.length ? (a = o = +e, f) : a;
	}, f.tickSizeInner = function(e) {
		return arguments.length ? (a = +e, f) : a;
	}, f.tickSizeOuter = function(e) {
		return arguments.length ? (o = +e, f) : o;
	}, f.tickPadding = function(e) {
		return arguments.length ? (s = +e, f) : s;
	}, f.offset = function(e) {
		return arguments.length ? (c = +e, f) : c;
	}, f;
}
function se(e) {
	return oe(I, e);
}
function ce(e) {
	return oe(R, e);
}
var le = { exports: {} }, ue = le.exports, de;
function fe() {
	return de || (de = 1, function(e, t) {
		(function(t, n) {
			e.exports = n();
		})(ue, function() {
			return function(e, t, n) {
				var r = function(e) {
					return e.add(4 - e.isoWeekday(), "day");
				}, i = t.prototype;
				i.isoWeekYear = function() {
					return r(this).year();
				}, i.isoWeek = function(e) {
					if (!this.$utils().u(e)) return this.add(7 * (e - this.isoWeek()), "day");
					var t, i, a, o, s = r(this), c = (t = this.isoWeekYear(), i = this.$u, a = (i ? n.utc : n)().year(t).startOf("year"), o = 4 - a.isoWeekday(), a.isoWeekday() > 4 && (o += 7), a.add(o, "day"));
					return s.diff(c, "week") + 1;
				}, i.isoWeekday = function(e) {
					return this.$utils().u(e) ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7);
				};
				var a = i.startOf;
				i.startOf = function(e, t) {
					var n = this.$utils(), r = !!n.u(t) || t;
					return n.p(e) === "isoweek" ? r ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : a.bind(this)(e, t);
				};
			};
		});
	}(le)), le.exports;
}
var pe = fe(), me = /* @__PURE__ */ e(pe), he = { exports: {} }, ge = he.exports, _e;
function ve() {
	return _e || (_e = 1, function(e, t) {
		(function(t, n) {
			e.exports = n();
		})(ge, function() {
			var e = {
				LTS: "h:mm:ss A",
				LT: "h:mm A",
				L: "MM/DD/YYYY",
				LL: "MMMM D, YYYY",
				LLL: "MMMM D, YYYY h:mm A",
				LLLL: "dddd, MMMM D, YYYY h:mm A"
			}, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n = /\d/, r = /\d\d/, i = /\d\d?/, a = /\d*[^-_:/,()\s\d]+/, o = {}, s = function(e) {
				return (e = +e) + (e > 68 ? 1900 : 2e3);
			}, c = function(e) {
				return function(t) {
					this[e] = +t;
				};
			}, l = [/[+-]\d\d:?(\d\d)?|Z/, function(e) {
				(this.zone ||= {}).offset = function(e) {
					if (!e || e === "Z") return 0;
					var t = e.match(/([+-]|\d\d)/g), n = 60 * t[1] + (+t[2] || 0);
					return n === 0 ? 0 : t[0] === "+" ? -n : n;
				}(e);
			}], u = function(e) {
				var t = o[e];
				return t && (t.indexOf ? t : t.s.concat(t.f));
			}, d = function(e, t) {
				var n, r = o.meridiem;
				if (r) {
					for (var i = 1; i <= 24; i += 1) if (e.indexOf(r(i, 0, t)) > -1) {
						n = i > 12;
						break;
					}
				} else n = e === (t ? "pm" : "PM");
				return n;
			}, f = {
				A: [a, function(e) {
					this.afternoon = d(e, !1);
				}],
				a: [a, function(e) {
					this.afternoon = d(e, !0);
				}],
				Q: [n, function(e) {
					this.month = 3 * (e - 1) + 1;
				}],
				S: [n, function(e) {
					this.milliseconds = 100 * e;
				}],
				SS: [r, function(e) {
					this.milliseconds = 10 * e;
				}],
				SSS: [/\d{3}/, function(e) {
					this.milliseconds = +e;
				}],
				s: [i, c("seconds")],
				ss: [i, c("seconds")],
				m: [i, c("minutes")],
				mm: [i, c("minutes")],
				H: [i, c("hours")],
				h: [i, c("hours")],
				HH: [i, c("hours")],
				hh: [i, c("hours")],
				D: [i, c("day")],
				DD: [r, c("day")],
				Do: [a, function(e) {
					var t = o.ordinal, n = e.match(/\d+/);
					if (this.day = n[0], t) for (var r = 1; r <= 31; r += 1) t(r).replace(/\[|\]/g, "") === e && (this.day = r);
				}],
				w: [i, c("week")],
				ww: [r, c("week")],
				M: [i, c("month")],
				MM: [r, c("month")],
				MMM: [a, function(e) {
					var t = u("months"), n = (u("monthsShort") || t.map(function(e) {
						return e.slice(0, 3);
					})).indexOf(e) + 1;
					if (n < 1) throw Error();
					this.month = n % 12 || n;
				}],
				MMMM: [a, function(e) {
					var t = u("months").indexOf(e) + 1;
					if (t < 1) throw Error();
					this.month = t % 12 || t;
				}],
				Y: [/[+-]?\d+/, c("year")],
				YY: [r, function(e) {
					this.year = s(e);
				}],
				YYYY: [/\d{4}/, c("year")],
				Z: l,
				ZZ: l
			};
			function p(n) {
				for (var r = n, i = o && o.formats, a = (n = r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t, n, r) {
					var a = r && r.toUpperCase();
					return n || i[r] || e[r] || i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e, t, n) {
						return t || n.slice(1);
					});
				})).match(t), s = a.length, c = 0; c < s; c += 1) {
					var l = a[c], u = f[l], d = u && u[0], p = u && u[1];
					a[c] = p ? {
						regex: d,
						parser: p
					} : l.replace(/^\[|\]$/g, "");
				}
				return function(e) {
					for (var t = {}, n = 0, r = 0; n < s; n += 1) {
						var i = a[n];
						if (typeof i == "string") r += i.length;
						else {
							var o = i.regex, c = i.parser, l = e.slice(r), u = o.exec(l)[0];
							c.call(t, u), e = e.replace(u, "");
						}
					}
					return function(e) {
						var t = e.afternoon;
						if (t !== void 0) {
							var n = e.hours;
							t ? n < 12 && (e.hours += 12) : n === 12 && (e.hours = 0), delete e.afternoon;
						}
					}(t), t;
				};
			}
			return function(e, t, n) {
				n.p.customParseFormat = !0, e && e.parseTwoDigitYear && (s = e.parseTwoDigitYear);
				var r = t.prototype, i = r.parse;
				r.parse = function(e) {
					var t = e.date, r = e.utc, a = e.args;
					this.$u = r;
					var s = a[1];
					if (typeof s == "string") {
						var c = a[2] === !0, l = a[3] === !0, u = c || l, d = a[2];
						l && (d = a[2]), o = this.$locale(), !c && d && (o = n.Ls[d]), this.$d = function(e, t, n, r) {
							try {
								if (["x", "X"].indexOf(t) > -1) return /* @__PURE__ */ new Date((t === "X" ? 1e3 : 1) * e);
								var i = p(t)(e), a = i.year, o = i.month, s = i.day, c = i.hours, l = i.minutes, u = i.seconds, d = i.milliseconds, f = i.zone, m = i.week, h = /* @__PURE__ */ new Date(), g = s || (a || o ? 1 : h.getDate()), _ = a || h.getFullYear(), v = 0;
								a && !o || (v = o > 0 ? o - 1 : h.getMonth());
								var y, b = c || 0, x = l || 0, S = u || 0, C = d || 0;
								return f ? new Date(Date.UTC(_, v, g, b, x, S, C + 60 * f.offset * 1e3)) : n ? new Date(Date.UTC(_, v, g, b, x, S, C)) : (y = new Date(_, v, g, b, x, S, C), m && (y = r(y).week(m).toDate()), y);
							} catch {
								return /* @__PURE__ */ new Date("");
							}
						}(t, s, r, n), this.init(), d && d !== !0 && (this.$L = this.locale(d).$L), u && t != this.format(s) && (this.$d = /* @__PURE__ */ new Date("")), o = {};
					} else if (s instanceof Array) for (var f = s.length, m = 1; m <= f; m += 1) {
						a[1] = s[m - 1];
						var h = n.apply(this, a);
						if (h.isValid()) {
							this.$d = h.$d, this.$L = h.$L, this.init();
							break;
						}
						m === f && (this.$d = /* @__PURE__ */ new Date(""));
					}
					else i.call(this, e);
				};
			};
		});
	}(he)), he.exports;
}
var ye = ve(), be = /* @__PURE__ */ e(ye), xe = { exports: {} }, Se = xe.exports, Ce;
function we() {
	return Ce || (Ce = 1, function(e, t) {
		(function(t, n) {
			e.exports = n();
		})(Se, function() {
			return function(e, t) {
				var n = t.prototype, r = n.format;
				n.format = function(e) {
					var t = this, n = this.$locale();
					if (!this.isValid()) return r.bind(this)(e);
					var i = this.$utils(), a = (e || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(e) {
						switch (e) {
							case "Q": return Math.ceil((t.$M + 1) / 3);
							case "Do": return n.ordinal(t.$D);
							case "gggg": return t.weekYear();
							case "GGGG": return t.isoWeekYear();
							case "wo": return n.ordinal(t.week(), "W");
							case "w":
							case "ww": return i.s(t.week(), e === "w" ? 1 : 2, "0");
							case "W":
							case "WW": return i.s(t.isoWeek(), e === "W" ? 1 : 2, "0");
							case "k":
							case "kk": return i.s(String(t.$H === 0 ? 24 : t.$H), e === "k" ? 1 : 2, "0");
							case "X": return Math.floor(t.$d.getTime() / 1e3);
							case "x": return t.$d.getTime();
							case "z": return "[" + t.offsetName() + "]";
							case "zzz": return "[" + t.offsetName("long") + "]";
							default: return e;
						}
					});
					return r.bind(this)(a);
				};
			};
		});
	}(xe)), xe.exports;
}
var Te = we(), Ee = /* @__PURE__ */ e(Te), De = { exports: {} }, Oe = De.exports, ke;
function Ae() {
	return ke || (ke = 1, function(e, t) {
		(function(t, n) {
			e.exports = n();
		})(Oe, function() {
			var e, t, n = 1e3, r = 6e4, i = 36e5, a = 864e5, o = 31536e6, s = 2628e6, c = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, l = /\[([^\]]+)]|YYYY|YY|Y|M{1,2}|D{1,2}|H{1,2}|m{1,2}|s{1,2}|SSS/g, u = {
				years: o,
				months: s,
				days: a,
				hours: i,
				minutes: r,
				seconds: n,
				milliseconds: 1,
				weeks: 6048e5
			}, d = function(e) {
				return e instanceof v;
			}, f = function(e, t, n) {
				return new v(e, n, t.$l);
			}, p = function(e) {
				return t.p(e) + "s";
			}, m = function(e) {
				return e < 0;
			}, h = function(e) {
				return m(e) ? Math.ceil(e) : Math.floor(e);
			}, g = function(e) {
				return Math.abs(e);
			}, _ = function(e, t) {
				return e ? m(e) ? {
					negative: !0,
					format: "" + g(e) + t
				} : {
					negative: !1,
					format: "" + e + t
				} : {
					negative: !1,
					format: ""
				};
			}, v = function() {
				function m(e, t, n) {
					var r = this;
					if (this.$d = {}, this.$l = n, e === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), t) return f(e * u[p(t)], this);
					if (typeof e == "number") return this.$ms = e, this.parseFromMilliseconds(), this;
					if (typeof e == "object") return Object.keys(e).forEach(function(t) {
						r.$d[p(t)] = e[t];
					}), this.calMilliseconds(), this;
					if (typeof e == "string") {
						var i = e.match(c);
						if (i) {
							var a = i.slice(2).map(function(e) {
								return e == null ? 0 : Number(e);
							});
							return this.$d.years = a[0], this.$d.months = a[1], this.$d.weeks = a[2], this.$d.days = a[3], this.$d.hours = a[4], this.$d.minutes = a[5], this.$d.seconds = a[6], this.calMilliseconds(), this;
						}
					}
					return this;
				}
				var g = m.prototype;
				return g.calMilliseconds = function() {
					var e = this;
					this.$ms = Object.keys(this.$d).reduce(function(t, n) {
						return t + (e.$d[n] || 0) * u[n];
					}, 0);
				}, g.parseFromMilliseconds = function() {
					var e = this.$ms;
					this.$d.years = h(e / o), e %= o, this.$d.months = h(e / s), e %= s, this.$d.days = h(e / a), e %= a, this.$d.hours = h(e / i), e %= i, this.$d.minutes = h(e / r), e %= r, this.$d.seconds = h(e / n), e %= n, this.$d.milliseconds = e;
				}, g.toISOString = function() {
					var e = _(this.$d.years, "Y"), t = _(this.$d.months, "M"), n = +this.$d.days || 0;
					this.$d.weeks && (n += 7 * this.$d.weeks);
					var r = _(n, "D"), i = _(this.$d.hours, "H"), a = _(this.$d.minutes, "M"), o = this.$d.seconds || 0;
					this.$d.milliseconds && (o += this.$d.milliseconds / 1e3, o = Math.round(1e3 * o) / 1e3);
					var s = _(o, "S"), c = e.negative || t.negative || r.negative || i.negative || a.negative || s.negative, l = i.format || a.format || s.format ? "T" : "", u = (c ? "-" : "") + "P" + e.format + t.format + r.format + l + i.format + a.format + s.format;
					return u === "P" || u === "-P" ? "P0D" : u;
				}, g.toJSON = function() {
					return this.toISOString();
				}, g.format = function(e) {
					var n = e || "YYYY-MM-DDTHH:mm:ss", r = {
						Y: this.$d.years,
						YY: t.s(this.$d.years, 2, "0"),
						YYYY: t.s(this.$d.years, 4, "0"),
						M: this.$d.months,
						MM: t.s(this.$d.months, 2, "0"),
						D: this.$d.days,
						DD: t.s(this.$d.days, 2, "0"),
						H: this.$d.hours,
						HH: t.s(this.$d.hours, 2, "0"),
						m: this.$d.minutes,
						mm: t.s(this.$d.minutes, 2, "0"),
						s: this.$d.seconds,
						ss: t.s(this.$d.seconds, 2, "0"),
						SSS: t.s(this.$d.milliseconds, 3, "0")
					};
					return n.replace(l, function(e, t) {
						return t || String(r[e]);
					});
				}, g.as = function(e) {
					return this.$ms / u[p(e)];
				}, g.get = function(e) {
					var t = this.$ms, n = p(e);
					return n === "milliseconds" ? t %= 1e3 : t = n === "weeks" ? h(t / u[n]) : this.$d[n], t || 0;
				}, g.add = function(e, t, n) {
					var r;
					return r = t ? e * u[p(t)] : d(e) ? e.$ms : f(e, this).$ms, f(this.$ms + r * (n ? -1 : 1), this);
				}, g.subtract = function(e, t) {
					return this.add(e, t, !0);
				}, g.locale = function(e) {
					var t = this.clone();
					return t.$l = e, t;
				}, g.clone = function() {
					return f(this.$ms, this);
				}, g.humanize = function(t) {
					return e().add(this.$ms, "ms").locale(this.$l).fromNow(!t);
				}, g.valueOf = function() {
					return this.asMilliseconds();
				}, g.milliseconds = function() {
					return this.get("milliseconds");
				}, g.asMilliseconds = function() {
					return this.as("milliseconds");
				}, g.seconds = function() {
					return this.get("seconds");
				}, g.asSeconds = function() {
					return this.as("seconds");
				}, g.minutes = function() {
					return this.get("minutes");
				}, g.asMinutes = function() {
					return this.as("minutes");
				}, g.hours = function() {
					return this.get("hours");
				}, g.asHours = function() {
					return this.as("hours");
				}, g.days = function() {
					return this.get("days");
				}, g.asDays = function() {
					return this.as("days");
				}, g.weeks = function() {
					return this.get("weeks");
				}, g.asWeeks = function() {
					return this.as("weeks");
				}, g.months = function() {
					return this.get("months");
				}, g.asMonths = function() {
					return this.as("months");
				}, g.years = function() {
					return this.get("years");
				}, g.asYears = function() {
					return this.as("years");
				}, m;
			}(), y = function(e, t, n) {
				return e.add(t.years() * n, "y").add(t.months() * n, "M").add(t.days() * n, "d").add(t.hours() * n, "h").add(t.minutes() * n, "m").add(t.seconds() * n, "s").add(t.milliseconds() * n, "ms");
			};
			return function(n, r, i) {
				e = i, t = i().$utils(), i.duration = function(e, t) {
					return f(e, { $l: i.locale() }, t);
				}, i.isDuration = d;
				var a = r.prototype.add, o = r.prototype.subtract;
				r.prototype.add = function(e, t) {
					return d(e) ? y(this, e, 1) : a.bind(this)(e, t);
				}, r.prototype.subtract = function(e, t) {
					return d(e) ? y(this, e, -1) : o.bind(this)(e, t);
				};
			};
		});
	}(De)), De.exports;
}
var je = Ae(), Me = /* @__PURE__ */ e(je), Ne = function() {
	var e = /* @__PURE__ */ F(function(e, t, n, r) {
		for (n ||= {}, r = e.length; r--; n[e[r]] = t);
		return n;
	}, "o"), t = [
		6,
		8,
		10,
		12,
		13,
		14,
		15,
		16,
		17,
		18,
		20,
		21,
		22,
		23,
		24,
		25,
		26,
		27,
		28,
		29,
		30,
		31,
		33,
		35,
		36,
		38,
		40
	], n = [1, 26], r = [1, 27], i = [1, 28], a = [1, 29], o = [1, 30], s = [1, 31], c = [1, 32], l = [1, 33], u = [1, 34], d = [1, 9], f = [1, 10], p = [1, 11], m = [1, 12], h = [1, 13], g = [1, 14], _ = [1, 15], v = [1, 16], y = [1, 19], b = [1, 20], x = [1, 21], S = [1, 22], C = [1, 23], w = [1, 25], T = [1, 35], E = {
		trace: /* @__PURE__ */ F(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			gantt: 4,
			document: 5,
			EOF: 6,
			line: 7,
			SPACE: 8,
			statement: 9,
			NL: 10,
			weekday: 11,
			weekday_monday: 12,
			weekday_tuesday: 13,
			weekday_wednesday: 14,
			weekday_thursday: 15,
			weekday_friday: 16,
			weekday_saturday: 17,
			weekday_sunday: 18,
			weekend: 19,
			weekend_friday: 20,
			weekend_saturday: 21,
			dateFormat: 22,
			inclusiveEndDates: 23,
			topAxis: 24,
			axisFormat: 25,
			tickInterval: 26,
			excludes: 27,
			includes: 28,
			todayMarker: 29,
			title: 30,
			acc_title: 31,
			acc_title_value: 32,
			acc_descr: 33,
			acc_descr_value: 34,
			acc_descr_multiline_value: 35,
			section: 36,
			clickStatement: 37,
			taskTxt: 38,
			taskData: 39,
			click: 40,
			callbackname: 41,
			callbackargs: 42,
			href: 43,
			clickStatementDebug: 44,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			4: "gantt",
			6: "EOF",
			8: "SPACE",
			10: "NL",
			12: "weekday_monday",
			13: "weekday_tuesday",
			14: "weekday_wednesday",
			15: "weekday_thursday",
			16: "weekday_friday",
			17: "weekday_saturday",
			18: "weekday_sunday",
			20: "weekend_friday",
			21: "weekend_saturday",
			22: "dateFormat",
			23: "inclusiveEndDates",
			24: "topAxis",
			25: "axisFormat",
			26: "tickInterval",
			27: "excludes",
			28: "includes",
			29: "todayMarker",
			30: "title",
			31: "acc_title",
			32: "acc_title_value",
			33: "acc_descr",
			34: "acc_descr_value",
			35: "acc_descr_multiline_value",
			36: "section",
			38: "taskTxt",
			39: "taskData",
			40: "click",
			41: "callbackname",
			42: "callbackargs",
			43: "href"
		},
		productions_: [
			0,
			[3, 3],
			[5, 0],
			[5, 2],
			[7, 2],
			[7, 1],
			[7, 1],
			[7, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[19, 1],
			[19, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 2],
			[9, 2],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 2],
			[37, 2],
			[37, 3],
			[37, 3],
			[37, 4],
			[37, 3],
			[37, 4],
			[37, 2],
			[44, 2],
			[44, 3],
			[44, 3],
			[44, 4],
			[44, 3],
			[44, 4],
			[44, 2]
		],
		performAction: /* @__PURE__ */ F(function(e, t, n, r, i, a, o) {
			var s = a.length - 1;
			switch (i) {
				case 1: return a[s - 1];
				case 2:
					this.$ = [];
					break;
				case 3:
					a[s - 1].push(a[s]), this.$ = a[s - 1];
					break;
				case 4:
				case 5:
					this.$ = a[s];
					break;
				case 6:
				case 7:
					this.$ = [];
					break;
				case 8:
					r.setWeekday("monday");
					break;
				case 9:
					r.setWeekday("tuesday");
					break;
				case 10:
					r.setWeekday("wednesday");
					break;
				case 11:
					r.setWeekday("thursday");
					break;
				case 12:
					r.setWeekday("friday");
					break;
				case 13:
					r.setWeekday("saturday");
					break;
				case 14:
					r.setWeekday("sunday");
					break;
				case 15:
					r.setWeekend("friday");
					break;
				case 16:
					r.setWeekend("saturday");
					break;
				case 17:
					r.setDateFormat(a[s].substr(11)), this.$ = a[s].substr(11);
					break;
				case 18:
					r.enableInclusiveEndDates(), this.$ = a[s].substr(18);
					break;
				case 19:
					r.TopAxis(), this.$ = a[s].substr(8);
					break;
				case 20:
					r.setAxisFormat(a[s].substr(11)), this.$ = a[s].substr(11);
					break;
				case 21:
					r.setTickInterval(a[s].substr(13)), this.$ = a[s].substr(13);
					break;
				case 22:
					r.setExcludes(a[s].substr(9)), this.$ = a[s].substr(9);
					break;
				case 23:
					r.setIncludes(a[s].substr(9)), this.$ = a[s].substr(9);
					break;
				case 24:
					r.setTodayMarker(a[s].substr(12)), this.$ = a[s].substr(12);
					break;
				case 27:
					r.setDiagramTitle(a[s].substr(6)), this.$ = a[s].substr(6);
					break;
				case 28:
					this.$ = a[s].trim(), r.setAccTitle(this.$);
					break;
				case 29:
				case 30:
					this.$ = a[s].trim(), r.setAccDescription(this.$);
					break;
				case 31:
					r.addSection(a[s].substr(8)), this.$ = a[s].substr(8);
					break;
				case 33:
					r.addTask(a[s - 1], a[s]), this.$ = "task";
					break;
				case 34:
					this.$ = a[s - 1], r.setClickEvent(a[s - 1], a[s], null);
					break;
				case 35:
					this.$ = a[s - 2], r.setClickEvent(a[s - 2], a[s - 1], a[s]);
					break;
				case 36:
					this.$ = a[s - 2], r.setClickEvent(a[s - 2], a[s - 1], null), r.setLink(a[s - 2], a[s]);
					break;
				case 37:
					this.$ = a[s - 3], r.setClickEvent(a[s - 3], a[s - 2], a[s - 1]), r.setLink(a[s - 3], a[s]);
					break;
				case 38:
					this.$ = a[s - 2], r.setClickEvent(a[s - 2], a[s], null), r.setLink(a[s - 2], a[s - 1]);
					break;
				case 39:
					this.$ = a[s - 3], r.setClickEvent(a[s - 3], a[s - 1], a[s]), r.setLink(a[s - 3], a[s - 2]);
					break;
				case 40:
					this.$ = a[s - 1], r.setLink(a[s - 1], a[s]);
					break;
				case 41:
				case 47:
					this.$ = a[s - 1] + " " + a[s];
					break;
				case 42:
				case 43:
				case 45:
					this.$ = a[s - 2] + " " + a[s - 1] + " " + a[s];
					break;
				case 44:
				case 46: this.$ = a[s - 3] + " " + a[s - 2] + " " + a[s - 1] + " " + a[s];
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: [1, 2]
			},
			{ 1: [3] },
			e(t, [2, 2], { 5: 3 }),
			{
				6: [1, 4],
				7: 5,
				8: [1, 6],
				9: 7,
				10: [1, 8],
				11: 17,
				12: n,
				13: r,
				14: i,
				15: a,
				16: o,
				17: s,
				18: c,
				19: 18,
				20: l,
				21: u,
				22: d,
				23: f,
				24: p,
				25: m,
				26: h,
				27: g,
				28: _,
				29: v,
				30: y,
				31: b,
				33: x,
				35: S,
				36: C,
				37: 24,
				38: w,
				40: T
			},
			e(t, [2, 7], { 1: [2, 1] }),
			e(t, [2, 3]),
			{
				9: 36,
				11: 17,
				12: n,
				13: r,
				14: i,
				15: a,
				16: o,
				17: s,
				18: c,
				19: 18,
				20: l,
				21: u,
				22: d,
				23: f,
				24: p,
				25: m,
				26: h,
				27: g,
				28: _,
				29: v,
				30: y,
				31: b,
				33: x,
				35: S,
				36: C,
				37: 24,
				38: w,
				40: T
			},
			e(t, [2, 5]),
			e(t, [2, 6]),
			e(t, [2, 17]),
			e(t, [2, 18]),
			e(t, [2, 19]),
			e(t, [2, 20]),
			e(t, [2, 21]),
			e(t, [2, 22]),
			e(t, [2, 23]),
			e(t, [2, 24]),
			e(t, [2, 25]),
			e(t, [2, 26]),
			e(t, [2, 27]),
			{ 32: [1, 37] },
			{ 34: [1, 38] },
			e(t, [2, 30]),
			e(t, [2, 31]),
			e(t, [2, 32]),
			{ 39: [1, 39] },
			e(t, [2, 8]),
			e(t, [2, 9]),
			e(t, [2, 10]),
			e(t, [2, 11]),
			e(t, [2, 12]),
			e(t, [2, 13]),
			e(t, [2, 14]),
			e(t, [2, 15]),
			e(t, [2, 16]),
			{
				41: [1, 40],
				43: [1, 41]
			},
			e(t, [2, 4]),
			e(t, [2, 28]),
			e(t, [2, 29]),
			e(t, [2, 33]),
			e(t, [2, 34], {
				42: [1, 42],
				43: [1, 43]
			}),
			e(t, [2, 40], { 41: [1, 44] }),
			e(t, [2, 35], { 43: [1, 45] }),
			e(t, [2, 36]),
			e(t, [2, 38], { 42: [1, 46] }),
			e(t, [2, 37]),
			e(t, [2, 39])
		],
		defaultActions: {},
		parseError: /* @__PURE__ */ F(function(e, t) {
			if (t.recoverable) this.trace(e);
			else {
				var n = Error(e);
				throw n.hash = t, n;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ F(function(e) {
			var t = this, n = [0], r = [], i = [null], a = [], o = this.table, s = "", c = 0, l = 0, u = 2, d = 1, f = a.slice.call(arguments, 1), p = Object.create(this.lexer), m = { yy: {} };
			for (var h in this.yy) Object.prototype.hasOwnProperty.call(this.yy, h) && (m.yy[h] = this.yy[h]);
			p.setInput(e, m.yy), m.yy.lexer = p, m.yy.parser = this, typeof p.yylloc > "u" && (p.yylloc = {});
			var g = p.yylloc;
			a.push(g);
			var _ = p.options && p.options.ranges;
			this.parseError = typeof m.yy.parseError == "function" ? m.yy.parseError : Object.getPrototypeOf(this).parseError;
			function v(e) {
				n.length -= 2 * e, i.length -= e, a.length -= e;
			}
			F(v, "popStack");
			function y() {
				var e;
				return e = r.pop() || p.lex() || d, typeof e != "number" && (e instanceof Array && (r = e, e = r.pop()), e = t.symbols_[e] || e), e;
			}
			F(y, "lex");
			for (var b, x, S, C, w = {}, T, E, D, O;;) {
				if (x = n[n.length - 1], this.defaultActions[x] ? S = this.defaultActions[x] : ((b === null || typeof b > "u") && (b = y()), S = o[x] && o[x][b]), typeof S > "u" || !S.length || !S[0]) {
					var k = "";
					for (T in O = [], o[x]) this.terminals_[T] && T > u && O.push("'" + this.terminals_[T] + "'");
					k = p.showPosition ? "Parse error on line " + (c + 1) + ":\n" + p.showPosition() + "\nExpecting " + O.join(", ") + ", got '" + (this.terminals_[b] || b) + "'" : "Parse error on line " + (c + 1) + ": Unexpected " + (b == d ? "end of input" : "'" + (this.terminals_[b] || b) + "'"), this.parseError(k, {
						text: p.match,
						token: this.terminals_[b] || b,
						line: p.yylineno,
						loc: g,
						expected: O
					});
				}
				if (S[0] instanceof Array && S.length > 1) throw Error("Parse Error: multiple actions possible at state: " + x + ", token: " + b);
				switch (S[0]) {
					case 1:
						n.push(b), i.push(p.yytext), a.push(p.yylloc), n.push(S[1]), b = null, l = p.yyleng, s = p.yytext, c = p.yylineno, g = p.yylloc;
						break;
					case 2:
						if (E = this.productions_[S[1]][1], w.$ = i[i.length - E], w._$ = {
							first_line: a[a.length - (E || 1)].first_line,
							last_line: a[a.length - 1].last_line,
							first_column: a[a.length - (E || 1)].first_column,
							last_column: a[a.length - 1].last_column
						}, _ && (w._$.range = [a[a.length - (E || 1)].range[0], a[a.length - 1].range[1]]), C = this.performAction.apply(w, [
							s,
							l,
							c,
							m.yy,
							S[1],
							i,
							a
						].concat(f)), typeof C < "u") return C;
						E && (n = n.slice(0, -1 * E * 2), i = i.slice(0, -1 * E), a = a.slice(0, -1 * E)), n.push(this.productions_[S[1]][0]), i.push(w.$), a.push(w._$), D = o[n[n.length - 2]][n[n.length - 1]], n.push(D);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	E.lexer = /* @__PURE__ */ function() {
		return {
			EOF: 1,
			parseError: /* @__PURE__ */ F(function(e, t) {
				if (this.yy.parser) this.yy.parser.parseError(e, t);
				else throw Error(e);
			}, "parseError"),
			setInput: /* @__PURE__ */ F(function(e, t) {
				return this.yy = t || this.yy || {}, this._input = e, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
					first_line: 1,
					first_column: 0,
					last_line: 1,
					last_column: 0
				}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
			}, "setInput"),
			input: /* @__PURE__ */ F(function() {
				var e = this._input[0];
				return this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e, e.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e;
			}, "input"),
			unput: /* @__PURE__ */ F(function(e) {
				var t = e.length, n = e.split(/(?:\r\n?|\n)/g);
				this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t), this.offset -= t;
				var r = this.match.split(/(?:\r\n?|\n)/g);
				this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1);
				var i = this.yylloc.range;
				return this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: n ? (n.length === r.length ? this.yylloc.first_column : 0) + r[r.length - n.length].length - n[0].length : this.yylloc.first_column - t
				}, this.options.ranges && (this.yylloc.range = [i[0], i[0] + this.yyleng - t]), this.yyleng = this.yytext.length, this;
			}, "unput"),
			more: /* @__PURE__ */ F(function() {
				return this._more = !0, this;
			}, "more"),
			reject: /* @__PURE__ */ F(function() {
				if (this.options.backtrack_lexer) this._backtrack = !0;
				else return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
				return this;
			}, "reject"),
			less: /* @__PURE__ */ F(function(e) {
				this.unput(this.match.slice(e));
			}, "less"),
			pastInput: /* @__PURE__ */ F(function() {
				var e = this.matched.substr(0, this.matched.length - this.match.length);
				return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "");
			}, "pastInput"),
			upcomingInput: /* @__PURE__ */ F(function() {
				var e = this.match;
				return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "");
			}, "upcomingInput"),
			showPosition: /* @__PURE__ */ F(function() {
				var e = this.pastInput(), t = Array(e.length + 1).join("-");
				return e + this.upcomingInput() + "\n" + t + "^";
			}, "showPosition"),
			test_match: /* @__PURE__ */ F(function(e, t) {
				var n, r, i;
				if (this.options.backtrack_lexer && (i = {
					yylineno: this.yylineno,
					yylloc: {
						first_line: this.yylloc.first_line,
						last_line: this.last_line,
						first_column: this.yylloc.first_column,
						last_column: this.yylloc.last_column
					},
					yytext: this.yytext,
					match: this.match,
					matches: this.matches,
					matched: this.matched,
					yyleng: this.yyleng,
					offset: this.offset,
					_more: this._more,
					_input: this._input,
					yy: this.yy,
					conditionStack: this.conditionStack.slice(0),
					done: this.done
				}, this.options.ranges && (i.yylloc.range = this.yylloc.range.slice(0))), r = e[0].match(/(?:\r\n?|\n).*/g), r && (this.yylineno += r.length), this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: r ? r[r.length - 1].length - r[r.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
				}, this.yytext += e[0], this.match += e[0], this.matches = e, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(e[0].length), this.matched += e[0], n = this.performAction.call(this, this.yy, this, t, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), n) return n;
				if (this._backtrack) {
					for (var a in i) this[a] = i[a];
					return !1;
				}
				return !1;
			}, "test_match"),
			next: /* @__PURE__ */ F(function() {
				if (this.done) return this.EOF;
				this._input || (this.done = !0);
				var e, t, n, r;
				this._more || (this.yytext = "", this.match = "");
				for (var i = this._currentRules(), a = 0; a < i.length; a++) if (n = this._input.match(this.rules[i[a]]), n && (!t || n[0].length > t[0].length)) {
					if (t = n, r = a, this.options.backtrack_lexer) {
						if (e = this.test_match(n, i[a]), e !== !1) return e;
						if (this._backtrack) {
							t = !1;
							continue;
						}
						return !1;
					}
					if (!this.options.flex) break;
				}
				return t ? (e = this.test_match(t, i[r]), e !== !1 && e) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
			}, "next"),
			lex: /* @__PURE__ */ F(function() {
				return this.next() || this.lex();
			}, "lex"),
			begin: /* @__PURE__ */ F(function(e) {
				this.conditionStack.push(e);
			}, "begin"),
			popState: /* @__PURE__ */ F(function() {
				return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
			}, "popState"),
			_currentRules: /* @__PURE__ */ F(function() {
				return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
			}, "_currentRules"),
			topState: /* @__PURE__ */ F(function(e) {
				return e = this.conditionStack.length - 1 - Math.abs(e || 0), e >= 0 ? this.conditionStack[e] : "INITIAL";
			}, "topState"),
			pushState: /* @__PURE__ */ F(function(e) {
				this.begin(e);
			}, "pushState"),
			stateStackSize: /* @__PURE__ */ F(function() {
				return this.conditionStack.length;
			}, "stateStackSize"),
			options: { "case-insensitive": !0 },
			performAction: /* @__PURE__ */ F(function(e, t, n, r) {
				switch (n) {
					case 0: return this.begin("open_directive"), "open_directive";
					case 1: return this.begin("acc_title"), 31;
					case 2: return this.popState(), "acc_title_value";
					case 3: return this.begin("acc_descr"), 33;
					case 4: return this.popState(), "acc_descr_value";
					case 5:
						this.begin("acc_descr_multiline");
						break;
					case 6:
						this.popState();
						break;
					case 7: return "acc_descr_multiline_value";
					case 8: break;
					case 9: break;
					case 10: break;
					case 11: return 10;
					case 12: break;
					case 13: break;
					case 14:
						this.begin("href");
						break;
					case 15:
						this.popState();
						break;
					case 16: return 43;
					case 17:
						this.begin("callbackname");
						break;
					case 18:
						this.popState();
						break;
					case 19:
						this.popState(), this.begin("callbackargs");
						break;
					case 20: return 41;
					case 21:
						this.popState();
						break;
					case 22: return 42;
					case 23:
						this.begin("click");
						break;
					case 24:
						this.popState();
						break;
					case 25: return 40;
					case 26: return 4;
					case 27: return 22;
					case 28: return 23;
					case 29: return 24;
					case 30: return 25;
					case 31: return 26;
					case 32: return 28;
					case 33: return 27;
					case 34: return 29;
					case 35: return 12;
					case 36: return 13;
					case 37: return 14;
					case 38: return 15;
					case 39: return 16;
					case 40: return 17;
					case 41: return 18;
					case 42: return 20;
					case 43: return 21;
					case 44: return "date";
					case 45: return 30;
					case 46: return "accDescription";
					case 47: return 36;
					case 48: return 38;
					case 49: return 39;
					case 50: return ":";
					case 51: return 6;
					case 52: return "INVALID";
				}
			}, "anonymous"),
			rules: [
				/^(?:%%\{)/i,
				/^(?:accTitle\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*\{\s*)/i,
				/^(?:[\}])/i,
				/^(?:[^\}]*)/i,
				/^(?:%%(?!\{)*[^\n]*)/i,
				/^(?:[^\}]%%*[^\n]*)/i,
				/^(?:%%*[^\n]*[\n]*)/i,
				/^(?:[\n]+)/i,
				/^(?:\s+)/i,
				/^(?:%[^\n]*)/i,
				/^(?:href[\s]+["])/i,
				/^(?:["])/i,
				/^(?:[^"]*)/i,
				/^(?:call[\s]+)/i,
				/^(?:\([\s]*\))/i,
				/^(?:\()/i,
				/^(?:[^(]*)/i,
				/^(?:\))/i,
				/^(?:[^)]*)/i,
				/^(?:click[\s]+)/i,
				/^(?:[\s\n])/i,
				/^(?:[^\s\n]*)/i,
				/^(?:gantt\b)/i,
				/^(?:dateFormat\s[^#\n;]+)/i,
				/^(?:inclusiveEndDates\b)/i,
				/^(?:topAxis\b)/i,
				/^(?:axisFormat\s[^#\n;]+)/i,
				/^(?:tickInterval\s[^#\n;]+)/i,
				/^(?:includes\s[^#\n;]+)/i,
				/^(?:excludes\s[^#\n;]+)/i,
				/^(?:todayMarker\s[^\n;]+)/i,
				/^(?:weekday\s+monday\b)/i,
				/^(?:weekday\s+tuesday\b)/i,
				/^(?:weekday\s+wednesday\b)/i,
				/^(?:weekday\s+thursday\b)/i,
				/^(?:weekday\s+friday\b)/i,
				/^(?:weekday\s+saturday\b)/i,
				/^(?:weekday\s+sunday\b)/i,
				/^(?:weekend\s+friday\b)/i,
				/^(?:weekend\s+saturday\b)/i,
				/^(?:\d\d\d\d-\d\d-\d\d\b)/i,
				/^(?:title\s[^\n]+)/i,
				/^(?:accDescription\s[^#\n;]+)/i,
				/^(?:section\s[^\n]+)/i,
				/^(?:[^:\n]+)/i,
				/^(?::[^#\n;]+)/i,
				/^(?::)/i,
				/^(?:$)/i,
				/^(?:.)/i
			],
			conditions: {
				acc_descr_multiline: {
					rules: [6, 7],
					inclusive: !1
				},
				acc_descr: {
					rules: [4],
					inclusive: !1
				},
				acc_title: {
					rules: [2],
					inclusive: !1
				},
				callbackargs: {
					rules: [21, 22],
					inclusive: !1
				},
				callbackname: {
					rules: [
						18,
						19,
						20
					],
					inclusive: !1
				},
				href: {
					rules: [15, 16],
					inclusive: !1
				},
				click: {
					rules: [24, 25],
					inclusive: !1
				},
				INITIAL: {
					rules: [
						0,
						1,
						3,
						5,
						8,
						9,
						10,
						11,
						12,
						13,
						14,
						17,
						23,
						26,
						27,
						28,
						29,
						30,
						31,
						32,
						33,
						34,
						35,
						36,
						37,
						38,
						39,
						40,
						41,
						42,
						43,
						44,
						45,
						46,
						47,
						48,
						49,
						50,
						51,
						52
					],
					inclusive: !0
				}
			}
		};
	}();
	function D() {
		this.yy = {};
	}
	return F(D, "Parser"), D.prototype = E, E.Parser = D, new D();
}();
Ne.parser = Ne;
var Pe = Ne;
w.extend(me), w.extend(be), w.extend(Ee);
var Fe = {
	friday: 5,
	saturday: 6
}, V = "", Ie = "", Le = void 0, Re = "", H = [], U = [], ze = /* @__PURE__ */ new Map(), Be = [], W = [], G = "", Ve = "", He = [
	"active",
	"done",
	"crit",
	"milestone",
	"vert"
], Ue = [], K = "", q = !1, We = !1, Ge = "sunday", J = "saturday", Ke = 0, qe = /* @__PURE__ */ F(function() {
	Be = [], W = [], G = "", Ue = [], Dt = 0, At = void 0, X = void 0, Z = [], V = "", Ie = "", Ve = "", Le = void 0, Re = "", H = [], U = [], q = !1, We = !1, Ke = 0, ze = /* @__PURE__ */ new Map(), K = "", x(), Ge = "sunday", J = "saturday";
}, "clear"), Je = /* @__PURE__ */ F(function(e) {
	K = e;
}, "setDiagramId"), Ye = /* @__PURE__ */ F(function(e) {
	Ie = e;
}, "setAxisFormat"), Xe = /* @__PURE__ */ F(function() {
	return Ie;
}, "getAxisFormat"), Ze = /* @__PURE__ */ F(function(e) {
	Le = e;
}, "setTickInterval"), Qe = /* @__PURE__ */ F(function() {
	return Le;
}, "getTickInterval"), $e = /* @__PURE__ */ F(function(e) {
	Re = e;
}, "setTodayMarker"), et = /* @__PURE__ */ F(function() {
	return Re;
}, "getTodayMarker"), tt = /* @__PURE__ */ F(function(e) {
	V = e;
}, "setDateFormat"), nt = /* @__PURE__ */ F(function() {
	q = !0;
}, "enableInclusiveEndDates"), rt = /* @__PURE__ */ F(function() {
	return q;
}, "endDatesAreInclusive"), it = /* @__PURE__ */ F(function() {
	We = !0;
}, "enableTopAxis"), at = /* @__PURE__ */ F(function() {
	return We;
}, "topAxisEnabled"), ot = /* @__PURE__ */ F(function(e) {
	Ve = e;
}, "setDisplayMode"), st = /* @__PURE__ */ F(function() {
	return Ve;
}, "getDisplayMode"), ct = /* @__PURE__ */ F(function() {
	return V;
}, "getDateFormat"), lt = /* @__PURE__ */ F((e, t) => {
	let n = t.toLowerCase().split(/[\s,]+/).filter((e) => e !== "");
	return [.../* @__PURE__ */ new Set([...e, ...n])];
}, "mergeTokens"), ut = /* @__PURE__ */ F(function(e) {
	H = lt(H, e);
}, "setIncludes"), dt = /* @__PURE__ */ F(function() {
	return H;
}, "getIncludes"), ft = /* @__PURE__ */ F(function(e) {
	U = lt(U, e);
}, "setExcludes"), pt = /* @__PURE__ */ F(function() {
	return U;
}, "getExcludes"), mt = /* @__PURE__ */ F(function() {
	return ze;
}, "getLinks"), ht = /* @__PURE__ */ F(function(e) {
	G = e, Be.push(e);
}, "addSection"), gt = /* @__PURE__ */ F(function() {
	return Be;
}, "getSections"), _t = /* @__PURE__ */ F(function() {
	let e = Pt(), t = 0;
	for (; !e && t < 10;) e = Pt(), t++;
	return W = Z, W;
}, "getTasks"), vt = /* @__PURE__ */ F(function(e, t, n, r) {
	let i = e.format(t.trim()), a = e.format("YYYY-MM-DD");
	return r.includes(i) || r.includes(a) ? !1 : n.includes("weekends") && (e.isoWeekday() === Fe[J] || e.isoWeekday() === Fe[J] + 1) || n.includes(e.format("dddd").toLowerCase()) ? !0 : n.includes(i) || n.includes(a);
}, "isInvalidDate"), yt = /* @__PURE__ */ F(function(e) {
	Ge = e;
}, "setWeekday"), bt = /* @__PURE__ */ F(function() {
	return Ge;
}, "getWeekday"), xt = /* @__PURE__ */ F(function(e) {
	J = e;
}, "setWeekend"), St = /* @__PURE__ */ F(function(e, t, n, r) {
	if (!n.length || e.manualEndTime) return;
	let i;
	i = e.startTime instanceof Date ? w(e.startTime) : w(e.startTime, t, !0), i = i.add(1, "d");
	let a;
	a = e.endTime instanceof Date ? w(e.endTime) : w(e.endTime, t, !0);
	let [o, s] = Ct(i, a, t, n, r);
	e.endTime = o.toDate(), e.renderEndTime = s;
}, "checkTaskDates"), Ct = /* @__PURE__ */ F(function(e, t, n, r, i) {
	let a = !1, o = null, s = t.add(1e4, "d");
	for (; e <= t;) {
		if (a || (o = t.toDate()), a = vt(e, n, r, i), a && (t = t.add(1, "d"), t > s)) throw Error("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.");
		e = e.add(1, "d");
	}
	return [t, o];
}, "fixTaskDates"), wt = /* @__PURE__ */ F(function(e, t, n) {
	if (n = n.trim(), (/* @__PURE__ */ F((e) => {
		let t = e.trim();
		return t === "x" || t === "X";
	}, "isTimestampFormat"))(t) && /^\d+$/.test(n)) return new Date(Number(n));
	let r = /^after\s+(?<ids>[\d\w- ]+)/.exec(n);
	if (r !== null) {
		let e = null;
		for (let t of r.groups.ids.split(" ")) {
			let n = Q(t);
			n !== void 0 && (!e || n.endTime > e.endTime) && (e = n);
		}
		if (e) return e.endTime;
		let t = /* @__PURE__ */ new Date();
		return t.setHours(0, 0, 0, 0), t;
	}
	let i = w(n, t.trim(), !0);
	if (i.isValid()) return i.toDate();
	{
		A.debug("Invalid date:" + n), A.debug("With date format:" + t.trim());
		let e = new Date(n);
		if (e === void 0 || isNaN(e.getTime()) || e.getFullYear() < -1e4 || e.getFullYear() > 1e4) throw Error("Invalid date:" + n);
		return e;
	}
}, "getStartDate"), Tt = /* @__PURE__ */ F(function(e) {
	let t = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(e.trim());
	return t === null ? [NaN, "ms"] : [Number.parseFloat(t[1]), t[2]];
}, "parseDuration"), Et = /* @__PURE__ */ F(function(e, t, n, r = !1) {
	n = n.trim();
	let i = /^until\s+(?<ids>[\d\w- ]+)/.exec(n);
	if (i !== null) {
		let e = null;
		for (let t of i.groups.ids.split(" ")) {
			let n = Q(t);
			n !== void 0 && (!e || n.startTime < e.startTime) && (e = n);
		}
		if (e) return e.startTime;
		let t = /* @__PURE__ */ new Date();
		return t.setHours(0, 0, 0, 0), t;
	}
	let a = w(n, t.trim(), !0);
	if (a.isValid()) return r && (a = a.add(1, "d")), a.toDate();
	let o = w(e), [s, c] = Tt(n);
	if (!Number.isNaN(s)) {
		let e = o.add(s, c);
		e.isValid() && (o = e);
	}
	return o.toDate();
}, "getEndDate"), Dt = 0, Y = /* @__PURE__ */ F(function(e) {
	return e === void 0 ? (Dt += 1, "task" + Dt) : e;
}, "parseId"), Ot = /* @__PURE__ */ F(function(e, t) {
	let n;
	n = t.substr(0, 1) === ":" ? t.substr(1, t.length) : t;
	let r = n.split(","), i = {};
	Bt(r, i, He);
	for (let e = 0; e < r.length; e++) r[e] = r[e].trim();
	let a = "";
	switch (r.length) {
		case 1:
			i.id = Y(), i.startTime = e.endTime, a = r[0];
			break;
		case 2:
			i.id = Y(), i.startTime = wt(void 0, V, r[0]), a = r[1];
			break;
		case 3: i.id = Y(r[0]), i.startTime = wt(void 0, V, r[1]), a = r[2];
	}
	return a && (i.endTime = Et(i.startTime, V, a, q), i.manualEndTime = w(a, "YYYY-MM-DD", !0).isValid(), St(i, V, U, H)), i;
}, "compileData"), kt = /* @__PURE__ */ F(function(e, t) {
	let n;
	n = t.substr(0, 1) === ":" ? t.substr(1, t.length) : t;
	let r = n.split(","), i = {};
	Bt(r, i, He);
	for (let e = 0; e < r.length; e++) r[e] = r[e].trim();
	switch (r.length) {
		case 1:
			i.id = Y(), i.startTime = {
				type: "prevTaskEnd",
				id: e
			}, i.endTime = { data: r[0] };
			break;
		case 2:
			i.id = Y(), i.startTime = {
				type: "getStartDate",
				startData: r[0]
			}, i.endTime = { data: r[1] };
			break;
		case 3: i.id = Y(r[0]), i.startTime = {
			type: "getStartDate",
			startData: r[1]
		}, i.endTime = { data: r[2] };
	}
	return i;
}, "parseData"), At, X, Z = [], jt = {}, Mt = /* @__PURE__ */ F(function(e, t) {
	let n = {
		section: G,
		type: G,
		processed: !1,
		manualEndTime: !1,
		renderEndTime: null,
		raw: { data: t },
		task: e,
		classes: []
	}, r = kt(X, t);
	n.raw.startTime = r.startTime, n.raw.endTime = r.endTime, n.id = r.id, n.prevTaskId = X, n.active = r.active, n.done = r.done, n.crit = r.crit, n.milestone = r.milestone, n.vert = r.vert, n.vert ? n.order = -1 : (n.order = Ke, Ke++);
	let i = Z.push(n);
	X = n.id, jt[n.id] = i - 1;
}, "addTask"), Q = /* @__PURE__ */ F(function(e) {
	let t = jt[e];
	return Z[t];
}, "findTaskById"), Nt = /* @__PURE__ */ F(function(e, t) {
	let n = {
		section: G,
		type: G,
		description: e,
		task: e,
		classes: []
	}, r = Ot(At, t);
	n.startTime = r.startTime, n.endTime = r.endTime, n.id = r.id, n.active = r.active, n.done = r.done, n.crit = r.crit, n.milestone = r.milestone, n.vert = r.vert, At = n, W.push(n);
}, "addTaskOrg"), Pt = /* @__PURE__ */ F(function() {
	let e = /* @__PURE__ */ F(function(e) {
		let t = Z[e], n = "";
		switch (Z[e].raw.startTime.type) {
			case "prevTaskEnd":
				t.startTime = Q(t.prevTaskId).endTime;
				break;
			case "getStartDate": n = wt(void 0, V, Z[e].raw.startTime.startData), n && (Z[e].startTime = n);
		}
		return Z[e].startTime && (Z[e].endTime = Et(Z[e].startTime, V, Z[e].raw.endTime.data, q), Z[e].endTime && (Z[e].processed = !0, Z[e].manualEndTime = w(Z[e].raw.endTime.data, "YYYY-MM-DD", !0).isValid(), St(Z[e], V, U, H))), Z[e].processed;
	}, "compileTask"), t = !0;
	for (let [n, r] of Z.entries()) e(n), t &&= r.processed;
	return t;
}, "compileTasks"), Ft = /* @__PURE__ */ F(function(e, t) {
	let n = t;
	O().securityLevel !== "loose" && (n = T.sanitizeUrl(t)), e.split(",").forEach(function(e) {
		Q(e) !== void 0 && (Rt(e, () => {
			window.open(n, "_self");
		}), ze.set(e, n));
	}), It(e, "clickable");
}, "setLink"), It = /* @__PURE__ */ F(function(e, t) {
	e.split(",").forEach(function(e) {
		let n = Q(e);
		n !== void 0 && n.classes.push(t);
	});
}, "setClass"), Lt = /* @__PURE__ */ F(function(e, t, n) {
	if (O().securityLevel !== "loose" || t === void 0) return;
	let r = [];
	if (typeof n == "string") {
		r = n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
		for (let e = 0; e < r.length; e++) {
			let t = r[e].trim();
			t.startsWith("\"") && t.endsWith("\"") && (t = t.substr(1, t.length - 2)), r[e] = t;
		}
	}
	r.length === 0 && r.push(e), Q(e) !== void 0 && Rt(e, () => {
		M.runFunc(t, ...r);
	});
}, "setClickFun"), Rt = /* @__PURE__ */ F(function(e, t) {
	Ue.push(function() {
		let n = K ? `${K}-${e}` : e, r = document.querySelector(`[id="${n}"]`);
		r !== null && r.addEventListener("click", function() {
			t();
		});
	}, function() {
		let n = K ? `${K}-${e}` : e, r = document.querySelector(`[id="${n}-text"]`);
		r !== null && r.addEventListener("click", function() {
			t();
		});
	});
}, "pushFun"), zt = {
	getConfig: /* @__PURE__ */ F(() => O().gantt, "getConfig"),
	clear: qe,
	setDateFormat: tt,
	getDateFormat: ct,
	enableInclusiveEndDates: nt,
	endDatesAreInclusive: rt,
	enableTopAxis: it,
	topAxisEnabled: at,
	setAxisFormat: Ye,
	getAxisFormat: Xe,
	setTickInterval: Ze,
	getTickInterval: Qe,
	setTodayMarker: $e,
	getTodayMarker: et,
	setAccTitle: P,
	getAccTitle: D,
	setDiagramTitle: j,
	getDiagramTitle: k,
	setDiagramId: Je,
	setDisplayMode: ot,
	getDisplayMode: st,
	setAccDescription: N,
	getAccDescription: E,
	addSection: ht,
	getSections: gt,
	getTasks: _t,
	addTask: Mt,
	findTaskById: Q,
	addTaskOrg: Nt,
	setIncludes: ut,
	getIncludes: dt,
	setExcludes: ft,
	getExcludes: pt,
	setClickEvent: /* @__PURE__ */ F(function(e, t, n) {
		e.split(",").forEach(function(e) {
			Lt(e, t, n);
		}), It(e, "clickable");
	}, "setClickEvent"),
	setLink: Ft,
	getLinks: mt,
	bindFunctions: /* @__PURE__ */ F(function(e) {
		Ue.forEach(function(t) {
			t(e);
		});
	}, "bindFunctions"),
	parseDuration: Tt,
	isInvalidDate: vt,
	setWeekday: yt,
	getWeekday: bt,
	setWeekend: xt
};
function Bt(e, t, n) {
	let r = !0;
	for (; r;) r = !1, n.forEach(function(n) {
		let i = "^\\s*" + n + "\\s*$", a = new RegExp(i);
		e[0].match(a) && (t[n] = !0, e.shift(1), r = !0);
	});
}
F(Bt, "getTaskTags"), w.extend(Me);
var Vt = /* @__PURE__ */ F(function() {
	A.debug("Something is calling, setConf, remove the call");
}, "setConf"), Ht = {
	monday: s,
	tuesday: i,
	wednesday: g,
	thursday: f,
	friday: v,
	saturday: h,
	sunday: c
}, Ut = /* @__PURE__ */ F((e, t) => {
	let n = [...e].map(() => -1 / 0), r = [...e].sort((e, t) => e.startTime - t.startTime || e.order - t.order), i = 0;
	for (let e of r) for (let r = 0; r < n.length; r++) if (e.startTime >= n[r]) {
		n[r] = e.endTime, e.order = r + t, r > i && (i = r);
		break;
	}
	return i;
}, "getMaxIntersections"), $, Wt = 1e4, Gt = {
	parser: Pe,
	db: zt,
	renderer: {
		setConf: Vt,
		draw: /* @__PURE__ */ F(function(e, i, s, c) {
			let f = O().gantt;
			c.db.setDiagramId(i);
			let h = O().securityLevel, g;
			h === "sandbox" && (g = b("#i" + i));
			let v = b(h === "sandbox" ? g.nodes()[0].contentDocument.body : "body"), x = h === "sandbox" ? g.nodes()[0].contentDocument : document, T = x.getElementById(i);
			$ = T.parentElement.offsetWidth, $ === void 0 && ($ = 1200), f.useWidth !== void 0 && ($ = f.useWidth);
			let E = c.db.getTasks(), D = E.filter((e) => !e.vert), k = [];
			for (let e of D) k.push(e.type);
			k = re(k);
			let j = {}, M = 2 * f.topPadding;
			if (c.db.getDisplayMode() === "compact" || f.displayMode === "compact") {
				let e = {};
				for (let t of D) e[t.section] === void 0 ? e[t.section] = [t] : e[t.section].push(t);
				let t = 0;
				for (let n of Object.keys(e)) {
					let r = Ut(e[n], t) + 1;
					t += r, M += r * (f.barHeight + f.barGap), j[n] = r;
				}
			} else {
				M += D.length * (f.barHeight + f.barGap);
				for (let e of k) j[e] = D.filter((t) => t.type === e).length;
			}
			T.setAttribute("viewBox", "0 0 " + $ + " " + M);
			let N = v.select(`[id="${i}"]`), P = r().domain([u(E, function(e) {
				return e.startTime;
			}), a(E, function(e) {
				return e.endTime;
			})]).rangeRound([0, $ - f.leftPadding - f.rightPadding]);
			function ee(e, t) {
				let n = e.startTime, r = t.startTime, i = 0;
				return n > r ? i = 1 : n < r && (i = -1), i;
			}
			F(ee, "taskCompare"), E.sort(ee), I(E, $, M), C(N, M, $, f.useMaxWidth), N.append("text").text(c.db.getDiagramTitle()).attr("x", $ / 2).attr("y", f.titleTopMargin).attr("class", "titleText");
			function I(e, n, r) {
				let i = f.barHeight, a = i + f.barGap, o = f.topPadding, s = f.leftPadding, l = t().domain([0, k.length]).range(["#00B9FA", "#F95002"]).interpolate(y);
				R(a, o, s, n, r, e, c.db.getExcludes(), c.db.getIncludes()), B(s, o, n, r), L(e, a, o, s, i, l, n), te(a, o), ne(s, o, n, r);
			}
			F(I, "makeGantt");
			function L(e, t, n, r, a, o, s) {
				e.sort((e, t) => e.vert === t.vert ? 0 : e.vert ? 1 : -1);
				let l = e.filter((e) => !e.vert), u = [...new Set(l.map((e) => e.order))].map((e) => l.find((t) => t.order === e));
				N.append("g").selectAll("rect").data(u).enter().append("rect").attr("x", 0).attr("y", function(e, r) {
					return r = e.order, r * t + n - 2;
				}).attr("width", function() {
					return s - f.rightPadding / 2;
				}).attr("height", t).attr("class", function(e) {
					for (let [t, n] of k.entries()) if (e.type === n) return "section section" + t % f.numberSectionStyles;
					return "section section0";
				}).enter();
				let d = N.append("g").selectAll("rect").data(e).enter(), p = c.db.getLinks();
				if (d.append("rect").attr("id", function(e) {
					return i + "-" + e.id;
				}).attr("rx", 3).attr("ry", 3).attr("x", function(e) {
					return e.milestone ? P(e.startTime) + r + .5 * (P(e.endTime) - P(e.startTime)) - .5 * a : P(e.startTime) + r;
				}).attr("y", function(e, r) {
					return r = e.order, e.vert ? f.gridLineStartPadding : r * t + n;
				}).attr("width", function(e) {
					return e.milestone ? a : e.vert ? .08 * a : P(e.renderEndTime || e.endTime) - P(e.startTime);
				}).attr("height", function(e) {
					return e.vert ? l.length * (f.barHeight + f.barGap) + f.barHeight * 2 : a;
				}).attr("transform-origin", function(e, i) {
					return i = e.order, (P(e.startTime) + r + .5 * (P(e.endTime) - P(e.startTime))).toString() + "px " + (i * t + n + .5 * a).toString() + "px";
				}).attr("class", function(e) {
					let t = "";
					e.classes.length > 0 && (t = e.classes.join(" "));
					let n = 0;
					for (let [t, r] of k.entries()) e.type === r && (n = t % f.numberSectionStyles);
					let r = "";
					return e.active ? e.crit ? r += " activeCrit" : r = " active" : e.done ? r = e.crit ? " doneCrit" : " done" : e.crit && (r += " crit"), r.length === 0 && (r = " task"), e.milestone && (r = " milestone " + r), e.vert && (r = " vert " + r), r += n, r += " " + t, "task" + r;
				}), d.append("text").attr("id", function(e) {
					return i + "-" + e.id + "-text";
				}).text(function(e) {
					return e.task;
				}).attr("font-size", f.fontSize).attr("x", function(e) {
					let t = P(e.startTime), n = P(e.renderEndTime || e.endTime);
					if (e.milestone && (t += .5 * (P(e.endTime) - P(e.startTime)) - .5 * a, n = t + a), e.vert) return P(e.startTime) + r;
					let i = this.getBBox().width;
					return i > n - t ? n + i + 1.5 * f.leftPadding > s ? t + r - 5 : n + r + 5 : (n - t) / 2 + t + r;
				}).attr("y", function(e, r) {
					return e.vert ? f.gridLineStartPadding + l.length * (f.barHeight + f.barGap) + 60 : (r = e.order, r * t + f.barHeight / 2 + (f.fontSize / 2 - 2) + n);
				}).attr("text-height", a).attr("class", function(e) {
					let t = P(e.startTime), n = P(e.endTime);
					e.milestone && (n = t + a);
					let r = this.getBBox().width, i = "";
					e.classes.length > 0 && (i = e.classes.join(" "));
					let o = 0;
					for (let [t, n] of k.entries()) e.type === n && (o = t % f.numberSectionStyles);
					let c = "";
					return e.active && (c = e.crit ? "activeCritText" + o : "activeText" + o), e.done ? c = e.crit ? c + " doneCritText" + o : c + " doneText" + o : e.crit && (c = c + " critText" + o), e.milestone && (c += " milestoneText"), e.vert && (c += " vertText"), r > n - t ? n + r + 1.5 * f.leftPadding > s ? i + " taskTextOutsideLeft taskTextOutside" + o + " " + c : i + " taskTextOutsideRight taskTextOutside" + o + " " + c + " width-" + r : i + " taskText taskText" + o + " " + c + " width-" + r;
				}), O().securityLevel === "sandbox") {
					let e;
					e = b("#i" + i);
					let t = e.nodes()[0].contentDocument;
					d.filter(function(e) {
						return p.has(e.id);
					}).each(function(e) {
						var n = t.querySelector("#" + CSS.escape(i + "-" + e.id)), r = t.querySelector("#" + CSS.escape(i + "-" + e.id + "-text"));
						let a = n.parentNode;
						var o = t.createElement("a");
						o.setAttribute("xlink:href", p.get(e.id)), o.setAttribute("target", "_top"), a.appendChild(o), o.appendChild(n), o.appendChild(r);
					});
				}
			}
			F(L, "drawRects");
			function R(e, t, n, r, a, o, s, l) {
				if (s.length === 0 && l.length === 0) return;
				let u, d;
				for (let { startTime: e, endTime: t } of o) (u === void 0 || e < u) && (u = e), (d === void 0 || t > d) && (d = t);
				if (!u || !d) return;
				if (w(d).diff(w(u), "year") > 5) {
					A.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");
					return;
				}
				let p = c.db.getDateFormat(), m = [], h = null, g = w(u);
				for (; g.valueOf() <= d;) c.db.isInvalidDate(g, p, s, l) ? h ? h.end = g : h = {
					start: g,
					end: g
				} : h &&= (m.push(h), null), g = g.add(1, "d");
				N.append("g").selectAll("rect").data(m).enter().append("rect").attr("id", (e) => i + "-exclude-" + e.start.format("YYYY-MM-DD")).attr("x", (e) => P(e.start.startOf("day")) + n).attr("y", f.gridLineStartPadding).attr("width", (e) => P(e.end.endOf("day")) - P(e.start.startOf("day"))).attr("height", a - t - f.gridLineStartPadding).attr("transform-origin", function(t, r) {
					return (P(t.start) + n + .5 * (P(t.end) - P(t.start))).toString() + "px " + (r * e + .5 * a).toString() + "px";
				}).attr("class", "exclude-range");
			}
			F(R, "drawExcludeDays");
			function z(e, t, n, r) {
				if (n <= 0 || e > t) return 1 / 0;
				let i = t - e, a = w.duration({ [r ?? "day"]: n }).asMilliseconds();
				return a <= 0 ? 1 / 0 : Math.ceil(i / a);
			}
			F(z, "getEstimatedTickCount");
			function B(e, t, r, i) {
				let a = c.db.getDateFormat(), s = c.db.getAxisFormat(), u;
				u = s || (a === "D" ? "%d" : f.axisFormat ?? "%Y-%m-%d");
				let h = ce(P).tickSize(-i + t + f.gridLineStartPadding).tickFormat(_(u)), g = /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(c.db.getTickInterval() || f.tickInterval);
				if (g !== null) {
					let e = parseInt(g[1], 10);
					if (isNaN(e) || e <= 0) A.warn(`Invalid tick interval value: "${g[1]}". Skipping custom tick interval.`);
					else {
						let t = g[2], r = c.db.getWeekday() || f.weekday, i = P.domain(), a = i[0], s = i[1], u = z(a, s, e, t);
						if (u > Wt) A.warn(`The tick interval "${e}${t}" would generate ${u} ticks, which exceeds the maximum allowed (${Wt}). This may indicate an invalid date or time range. Skipping custom tick interval.`);
						else switch (t) {
							case "millisecond":
								h.ticks(n.every(e));
								break;
							case "second":
								h.ticks(l.every(e));
								break;
							case "minute":
								h.ticks(m.every(e));
								break;
							case "hour":
								h.ticks(d.every(e));
								break;
							case "day":
								h.ticks(p.every(e));
								break;
							case "week":
								h.ticks(Ht[r].every(e));
								break;
							case "month": h.ticks(o.every(e));
						}
					}
				}
				if (N.append("g").attr("class", "grid").attr("transform", "translate(" + e + ", " + (i - 50) + ")").call(h).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em"), c.db.topAxisEnabled() || f.topAxis) {
					let r = se(P).tickSize(-i + t + f.gridLineStartPadding).tickFormat(_(u));
					if (g !== null) {
						let e = parseInt(g[1], 10);
						if (isNaN(e) || e <= 0) A.warn(`Invalid tick interval value: "${g[1]}". Skipping custom tick interval.`);
						else {
							let t = g[2], i = c.db.getWeekday() || f.weekday, a = P.domain(), s = a[0], u = a[1];
							if (z(s, u, e, t) <= Wt) switch (t) {
								case "millisecond":
									r.ticks(n.every(e));
									break;
								case "second":
									r.ticks(l.every(e));
									break;
								case "minute":
									r.ticks(m.every(e));
									break;
								case "hour":
									r.ticks(d.every(e));
									break;
								case "day":
									r.ticks(p.every(e));
									break;
								case "week":
									r.ticks(Ht[i].every(e));
									break;
								case "month": r.ticks(o.every(e));
							}
						}
					}
					N.append("g").attr("class", "grid").attr("transform", "translate(" + e + ", " + t + ")").call(r).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
				}
			}
			F(B, "makeGrid");
			function te(e, t) {
				let n = 0, r = Object.keys(j).map((e) => [e, j[e]]);
				N.append("g").selectAll("text").data(r).enter().append(function(e) {
					let t = e[0].split(S.lineBreakRegex), n = -(t.length - 1) / 2, r = x.createElementNS("http://www.w3.org/2000/svg", "text");
					r.setAttribute("dy", n + "em");
					for (let [e, n] of t.entries()) {
						let t = x.createElementNS("http://www.w3.org/2000/svg", "tspan");
						t.setAttribute("alignment-baseline", "central"), t.setAttribute("x", "10"), e > 0 && t.setAttribute("dy", "1em"), t.textContent = n, r.appendChild(t);
					}
					return r;
				}).attr("x", 10).attr("y", function(i, a) {
					if (a > 0) for (let o = 0; o < a; o++) return n += r[a - 1][1], i[1] * e / 2 + n * e + t;
					else return i[1] * e / 2 + t;
				}).attr("font-size", f.sectionFontSize).attr("class", function(e) {
					for (let [t, n] of k.entries()) if (e[0] === n) return "sectionTitle sectionTitle" + t % f.numberSectionStyles;
					return "sectionTitle";
				});
			}
			F(te, "vertLabels");
			function ne(e, t, n, r) {
				let i = c.db.getTodayMarker();
				if (i === "off") return;
				let a = N.append("g").attr("class", "today"), o = /* @__PURE__ */ new Date(), s = a.append("line");
				s.attr("x1", P(o) + e).attr("x2", P(o) + e).attr("y1", f.titleTopMargin).attr("y2", r - f.titleTopMargin).attr("class", "today"), i !== "" && s.attr("style", i.replace(/,/g, ";"));
			}
			F(ne, "drawToday");
			function re(e) {
				let t = {}, n = [];
				for (let r = 0, i = e.length; r < i; ++r) Object.prototype.hasOwnProperty.call(t, e[r]) || (t[e[r]] = !0, n.push(e[r]));
				return n;
			}
			F(re, "checkUnique");
		}, "draw")
	},
	styles: /* @__PURE__ */ F((e) => `
  .mermaid-main-font {
        font-family: ${e.fontFamily};
  }

  .exclude-range {
    fill: ${e.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${e.sectionBkgColor};
  }

  .section2 {
    fill: ${e.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${e.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${e.titleColor};
  }

  .sectionTitle1 {
    fill: ${e.titleColor};
  }

  .sectionTitle2 {
    fill: ${e.titleColor};
  }

  .sectionTitle3 {
    fill: ${e.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${e.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${e.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${e.fontFamily};
    fill: ${e.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${e.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${e.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${e.taskTextDarkColor};
    text-anchor: start;
    font-family: ${e.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${e.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${e.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${e.taskBkgColor};
    stroke: ${e.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${e.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${e.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${e.activeTaskBkgColor};
    stroke: ${e.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${e.doneTaskBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${e.taskTextOutsideColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  /* Done-crit task text outside the bar — same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${e.taskTextOutsideColor} !important;
  }

  .vert {
    stroke: ${e.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${e.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.titleColor || e.textColor};
    font-family: ${e.fontFamily};
  }
`, "getStyles")
};
//#endregion
export { Gt as diagram };

//# sourceMappingURL=ganttDiagram-EL5Y4UJY-B1AT_1JT-B5O5M-PN.js.map