import { At as e, B as t, Ct as n, D as r, E as i, Ft as a, G as o, Ht as s, K as c, Kt as l, N as u, Nt as d, P as f, St as p, T as m, Tt as h, U as g, Ut as _, Y as v, a as y, an as b, c as x, ct as S, ds as C, en as w, f as T, g as E, hn as D, ht as O, it as k, j as ee, m as te, ms as ne, mt as re, nt as A, o as ie, ot as j, rn as M, rt as N, st as P, t as F, tn as I, tt as L, z as R } from "./index-B1FrxEMd-BsPMjC5n.js";
import { a as ae, i as oe, n as se, r as ce } from "./useFormValidation-Cnit8K9v-CsmEyeH7.js";
import { t as le } from "./useFormReset-BZ7HXuA_-BoM-dbzr.js";
import { i as ue, n as de, r as fe, t as pe } from "./Input-B1waFcLc-Ckq09rqm.js";
import { t as me } from "./useField-BVpgvwQT-C8iZdscS.js";
import { t as he } from "./useFilter-DrWea0bI-BL4UsXQg.js";
//#region ../react/build/DateField-BaLw2J5b.js
var z = /* @__PURE__ */ ne(C(), 1), ge = /* @__PURE__ */ RegExp("^.*\\(.*\\).*$"), _e = [
	"latn",
	"arab",
	"hanidec",
	"deva",
	"beng",
	"fullwide"
], ve = class {
	constructor(e, t = {}) {
		this.locale = e, this.options = t;
	}
	parse(e) {
		return be(this.locale, this.options, e).parse(e);
	}
	isValidPartialNumber(e, t, n) {
		return be(this.locale, this.options, e).isValidPartialNumber(e, t, n);
	}
	getNumberingSystem(e) {
		return be(this.locale, this.options, e).options.numberingSystem;
	}
}, ye = /* @__PURE__ */ new Map();
function be(e, t, n) {
	let r = xe(e, t);
	if (!e.includes("-nu-") && !r.isValidPartialNumber(n)) {
		for (let i of _e) if (i !== r.options.numberingSystem) {
			let r = xe(e + (e.includes("-u-") ? "-nu-" : "-u-nu-") + i, t);
			if (r.isValidPartialNumber(n)) return r;
		}
	}
	return r;
}
function xe(e, t) {
	let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : ""), r = ye.get(n);
	return r || (r = new Se(e, t), ye.set(n, r)), r;
}
var Se = class {
	constructor(e, t = {}) {
		this.locale = e, t.roundingIncrement !== 1 && t.roundingIncrement != null && (t.maximumFractionDigits == null && t.minimumFractionDigits == null ? (t.maximumFractionDigits = 0, t.minimumFractionDigits = 0) : t.maximumFractionDigits == null ? t.maximumFractionDigits = t.minimumFractionDigits : t.minimumFractionDigits ??= t.maximumFractionDigits), this.formatter = new Intl.NumberFormat(e, t), this.options = this.formatter.resolvedOptions(), this.symbols = Te(e, this.formatter, this.options, t), this.options.style === "percent" && ((this.options.minimumFractionDigits ?? 0) > 18 || (this.options.maximumFractionDigits ?? 0) > 18) && console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.");
	}
	parse(e) {
		let t = this.formatter.resolvedOptions().useGrouping, n = this.sanitize(e);
		if (!t && this.symbols.group && n.includes(this.symbols.group)) return NaN;
		if (this.symbols.group && (n = n.replaceAll(this.symbols.group, "")), this.symbols.decimal && (n = n.replace(this.symbols.decimal, ".")), this.symbols.minusSign && (n = n.replace(this.symbols.minusSign, "-")), n = n.replace(this.symbols.numeral, this.symbols.index), this.options.style === "percent") {
			let e = n.indexOf("-");
			n = n.replace("-", ""), n = n.replace("+", "");
			let t = n.indexOf(".");
			t === -1 && (t = n.length), n = n.replace(".", ""), n = t - 2 == 0 ? `0.${n}` : t - 2 == -1 ? `0.0${n}` : t - 2 == -2 ? "0.00" : `${n.slice(0, t - 2)}.${n.slice(t - 2)}`, e > -1 && (n = `-${n}`);
		}
		let r = n ? +n : NaN;
		if (isNaN(r)) return NaN;
		if (this.options.style === "percent") {
			let e = {
				...this.options,
				style: "decimal",
				minimumFractionDigits: Math.min((this.options.minimumFractionDigits ?? 0) + 2, 20),
				maximumFractionDigits: Math.min((this.options.maximumFractionDigits ?? 0) + 2, 20)
			};
			return new ve(this.locale, e).parse(new x(this.locale, e).format(r));
		}
		return this.options.currencySign === "accounting" && ge.test(e) && (r = -1 * r), r;
	}
	sanitize(e) {
		let t = this.formatter.resolvedOptions().useGrouping;
		return this.symbols.noNumeralUnits.length > 0 && this.symbols.noNumeralUnits.find((t) => t.unit === e) ? this.symbols.noNumeralUnits.find((t) => t.unit === e).value.toString() : (e = e.replace(this.symbols.literals, ""), this.symbols.minusSign && (e = e.replace("-", this.symbols.minusSign)), this.options.numberingSystem === "arab" && (this.symbols.decimal && (e = B(e, ",", this.symbols.decimal), e = B(e, "،", this.symbols.decimal)), this.symbols.group && t && (e = B(e, ".", this.symbols.group))), this.symbols.group === "’" && e.includes("'") && t && (e = B(e, "'", this.symbols.group)), this.symbols.group === "'" && e.includes("’") && t && (e = B(e, "’", this.symbols.group)), this.options.locale === "fr-FR" && this.symbols.group && t && (e = B(e, " ", this.symbols.group), e = B(e, /\u00A0/g, this.symbols.group)), e);
	}
	isValidPartialNumber(e, t = -1 / 0, n = 1 / 0) {
		let r = this.formatter.resolvedOptions().useGrouping;
		return e = this.sanitize(e), this.symbols.minusSign && e.startsWith(this.symbols.minusSign) && t < 0 ? e = e.slice(this.symbols.minusSign.length) : this.symbols.plusSign && e.startsWith(this.symbols.plusSign) && n > 0 && (e = e.slice(this.symbols.plusSign.length)), this.symbols.decimal && e.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0 ? !1 : (this.symbols.group && r && (e = B(e, this.symbols.group, "")), e = e.replace(this.symbols.numeral, ""), this.symbols.decimal && (e = e.replace(this.symbols.decimal, "")), e.length === 0);
	}
}, Ce = /* @__PURE__ */ new Set([
	"decimal",
	"fraction",
	"integer",
	"minusSign",
	"plusSign",
	"group"
]), we = [
	0,
	4,
	2,
	1,
	11,
	20,
	3,
	7,
	100,
	21,
	.1,
	1.1
];
function Te(e, t, n, r) {
	let i = new Intl.NumberFormat(e, {
		...n,
		minimumSignificantDigits: 1,
		maximumSignificantDigits: 21,
		roundingIncrement: 1,
		roundingPriority: "auto",
		roundingMode: "halfExpand",
		useGrouping: !0
	}), a = i.formatToParts(-10000.111), o = i.formatToParts(10000.111), s = we.map((e) => i.formatToParts(e)), c = s.map((e, t) => {
		let n = e.find((e) => e.type === "unit");
		return n && !e.some((e) => e.type === "integer" || e.type === "fraction") ? {
			unit: n.value,
			value: we[t]
		} : null;
	}).filter((e) => !!e), l = a.find((e) => e.type === "minusSign")?.value ?? "-", u = o.find((e) => e.type === "plusSign")?.value;
	!u && (r?.signDisplay === "exceptZero" || r?.signDisplay === "always") && (u = "+");
	let d = new Intl.NumberFormat(e, {
		...n,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).formatToParts(.001).find((e) => e.type === "decimal")?.value, f = a.find((e) => e.type === "group")?.value, p = a.filter((e) => !Ce.has(e.type)).map((e) => Ee(e.value)), m = s.flatMap((e) => e.filter((e) => !Ce.has(e.type)).map((e) => Ee(e.value))), h = [.../* @__PURE__ */ new Set([...p, ...m])].sort((e, t) => t.length - e.length), g = h.length === 0 ? /* @__PURE__ */ RegExp("\\p{White_Space}|\\p{Cf}", "gu") : RegExp(`${h.join("|")}|\\p{White_Space}|\\p{Cf}`, "gu"), _ = [...new Intl.NumberFormat(n.locale, { useGrouping: !1 }).format(9876543210)].reverse(), v = new Map(_.map((e, t) => [e, t])), y = RegExp(`[${_.join("")}]`, "g");
	return {
		minusSign: l,
		plusSign: u,
		decimal: d,
		group: f,
		literals: g,
		numeral: y,
		numerals: _,
		index: (e) => String(v.get(e)),
		noNumeralUnits: c
	};
}
function B(e, t, n) {
	return e.replaceAll ? e.replaceAll(t, n) : e.split(t).join(n);
}
function Ee(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function De(e, t) {
	let n = (0, z.useRef)(null);
	return e && n.current && t(e, n.current) && (e = n.current), n.current = e, e;
}
function Oe(e, t) {
	return e - t * Math.floor(e / t);
}
var ke = 1721426;
function Ae(e, t, n, r) {
	t = je(e, t);
	let i = t - 1, a = -2;
	return n <= 2 ? a = 0 : V(t) && (a = -1), 1721425 + 365 * i + Math.floor(i / 4) - Math.floor(i / 100) + Math.floor(i / 400) + Math.floor((367 * n - 362) / 12 + a + r);
}
function V(e) {
	return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function je(e, t) {
	return e === "BC" ? 1 - t : t;
}
function Me(e) {
	let t = "AD";
	return e <= 0 && (t = "BC", e = 1 - e), [t, e];
}
var Ne = {
	standard: [
		31,
		28,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	],
	leapyear: [
		31,
		29,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	]
}, H = class {
	fromJulianDay(e) {
		let t = e, n = t - ke, r = Math.floor(n / 146097), i = Oe(n, 146097), a = Math.floor(i / 36524), o = Oe(i, 36524), s = Math.floor(o / 1461), c = Oe(o, 1461), l = Math.floor(c / 365), [u, d] = Me(r * 400 + a * 100 + s * 4 + l + +(a !== 4 && l !== 4)), f = t - Ae(u, d, 1, 1), p = 2;
		t < Ae(u, d, 3, 1) ? p = 0 : V(d) && (p = 1);
		let m = Math.floor(((f + p) * 12 + 373) / 367);
		return new Y(u, d, m, t - Ae(u, d, m, 1) + 1);
	}
	toJulianDay(e) {
		return Ae(e.era, e.year, e.month, e.day);
	}
	getDaysInMonth(e) {
		return Ne[V(e.year) ? "leapyear" : "standard"][e.month - 1];
	}
	getMonthsInYear(e) {
		return 12;
	}
	getDaysInYear(e) {
		return V(e.year) ? 366 : 365;
	}
	getMaximumMonthsInYear() {
		return 12;
	}
	getMaximumDaysInMonth() {
		return 31;
	}
	getYearsInEra(e) {
		return 9999;
	}
	getEras() {
		return ["BC", "AD"];
	}
	isInverseEra(e) {
		return e.era === "BC";
	}
	balanceDate(e) {
		e.year <= 0 && (e.era = e.era === "BC" ? "AD" : "BC", e.year = 1 - e.year);
	}
	constructor() {
		this.identifier = "gregory";
	}
}, Pe = {
	"001": 1,
	AD: 1,
	AE: 6,
	AF: 6,
	AI: 1,
	AL: 1,
	AM: 1,
	AN: 1,
	AR: 1,
	AT: 1,
	AU: 1,
	AX: 1,
	AZ: 1,
	BA: 1,
	BE: 1,
	BG: 1,
	BH: 6,
	BM: 1,
	BN: 1,
	BY: 1,
	CH: 1,
	CL: 1,
	CM: 1,
	CN: 1,
	CR: 1,
	CY: 1,
	CZ: 1,
	DE: 1,
	DJ: 6,
	DK: 1,
	DZ: 6,
	EC: 1,
	EE: 1,
	EG: 6,
	ES: 1,
	FI: 1,
	FJ: 1,
	FO: 1,
	FR: 1,
	GB: 1,
	GE: 1,
	GF: 1,
	GP: 1,
	GR: 1,
	HR: 1,
	HU: 1,
	IE: 1,
	IQ: 6,
	IR: 6,
	IS: 1,
	IT: 1,
	JO: 6,
	KG: 1,
	KW: 6,
	KZ: 1,
	LB: 1,
	LI: 1,
	LK: 1,
	LT: 1,
	LU: 1,
	LV: 1,
	LY: 6,
	MC: 1,
	MD: 1,
	ME: 1,
	MK: 1,
	MN: 1,
	MQ: 1,
	MV: 5,
	MY: 1,
	NL: 1,
	NO: 1,
	NZ: 1,
	OM: 6,
	PL: 1,
	QA: 6,
	RE: 1,
	RO: 1,
	RS: 1,
	RU: 1,
	SD: 6,
	SE: 1,
	SI: 1,
	SK: 1,
	SM: 1,
	SY: 6,
	TJ: 1,
	TM: 1,
	TR: 1,
	UA: 1,
	UY: 1,
	UZ: 1,
	VA: 1,
	VN: 1,
	XK: 1
};
function Fe(e, t) {
	return t = K(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function Ie(e, t) {
	return t = K(t, e.calendar), e = Qe(e), t = Qe(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function Le(e, t) {
	return t = K(t, e.calendar), e = et(e), t = et(t), e.era === t.era && e.year === t.year;
}
function Re(e, t) {
	return ze(e.calendar, t.calendar) && Fe(e, t);
}
function ze(e, t) {
	return e.isEqual?.(t) ?? t.isEqual?.(e) ?? e.identifier === t.identifier;
}
function Be(e, t) {
	return Fe(e, We(t));
}
var Ve = {
	sun: 0,
	mon: 1,
	tue: 2,
	wed: 3,
	thu: 4,
	fri: 5,
	sat: 6
};
function He(e, t, n) {
	let r = e.calendar.toJulianDay(e), i = n ? Ve[n] : ot(t), a = Math.ceil(r + 1 - i) % 7;
	return a < 0 && (a += 7), a;
}
function Ue(e) {
	return W(Date.now(), e);
}
function We(e) {
	return yt(Ue(e));
}
function Ge(e, t) {
	return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function Ke(e, t) {
	return qe(e) - qe(t);
}
function qe(e) {
	return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
var Je = null, Ye = !1;
function Xe() {
	return Je ??= new Intl.DateTimeFormat().resolvedOptions().timeZone, Je;
}
function Ze() {
	return Ye;
}
function Qe(e) {
	return e.subtract({ days: e.day - 1 });
}
function $e(e) {
	return e.add({ days: e.calendar.getDaysInMonth(e) - e.day });
}
function et(e) {
	return Qe(e.subtract({ months: e.month - 1 }));
}
function tt(e, t, n) {
	let r = He(e, t, n);
	return e.subtract({ days: r });
}
function nt(e, t, n) {
	return tt(e, t, n).add({ days: 6 });
}
var rt = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map();
function at(e) {
	if (Intl.Locale) {
		let t = rt.get(e);
		return t || (t = new Intl.Locale(e).maximize().region, t && rt.set(e, t)), t;
	}
	let t = e.split("-")[1];
	return t === "u" ? void 0 : t;
}
function ot(e) {
	let t = it.get(e);
	if (!t) {
		if (Intl.Locale) {
			let n = new Intl.Locale(e);
			if ("getWeekInfo" in n && (t = n.getWeekInfo(), t)) return it.set(e, t), t.firstDay;
		}
		let n = at(e);
		if (e.includes("-fw-")) {
			let n = e.split("-fw-")[1].split("-")[0];
			t = n === "mon" ? { firstDay: 1 } : n === "tue" ? { firstDay: 2 } : n === "wed" ? { firstDay: 3 } : n === "thu" ? { firstDay: 4 } : n === "fri" ? { firstDay: 5 } : n === "sat" ? { firstDay: 6 } : { firstDay: 0 };
		} else t = e.includes("-ca-iso8601") ? { firstDay: 1 } : { firstDay: n && Pe[n] || 0 };
		it.set(e, t);
	}
	return t.firstDay;
}
function st(e, t, n) {
	let r = e.calendar.getDaysInMonth(e);
	return Math.ceil((He(Qe(e), t, n) + r) / 7);
}
function ct(e, t) {
	return e && t ? e.compare(t) <= 0 ? e : t : e || t;
}
function lt(e, t) {
	return e && t ? e.compare(t) >= 0 ? e : t : e || t;
}
function ut(e) {
	return e = K(e, new H()), dt(je(e.era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function dt(e, t, n, r, i, a, o) {
	let s = /* @__PURE__ */ new Date();
	return s.setUTCHours(r, i, a, o), s.setUTCFullYear(e, t - 1, n), s.getTime();
}
function ft(e, t) {
	if (t === "UTC") return 0;
	if (e > 0 && t === Xe() && !Ze()) return new Date(e).getTimezoneOffset() * -6e4;
	let { year: n, month: r, day: i, hour: a, minute: o, second: s } = mt(e, t);
	return dt(n, r, i, a, o, s, 0) - Math.floor(e / 1e3) * 1e3;
}
var pt = /* @__PURE__ */ new Map();
function mt(e, t) {
	let n = pt.get(t);
	n || (n = new Intl.DateTimeFormat("en-US", {
		timeZone: t,
		hour12: !1,
		era: "short",
		year: "numeric",
		month: "numeric",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric"
	}), pt.set(t, n));
	let r = n.formatToParts(new Date(e)), i = {};
	for (let e of r) e.type !== "literal" && (i[e.type] = e.value);
	return {
		year: i.era === "BC" || i.era === "B" ? -i.year + 1 : +i.year,
		month: +i.month,
		day: +i.day,
		hour: i.hour === "24" ? 0 : +i.hour,
		minute: +i.minute,
		second: +i.second
	};
}
var ht = 864e5;
function gt(e, t, n, r) {
	return (n === r ? [n] : [n, r]).filter((n) => _t(e, t, n));
}
function _t(e, t, n) {
	let r = mt(n, t);
	return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second;
}
function U(e, t, n = "compatible") {
	let r = G(e);
	if (t === "UTC") return ut(r);
	if (t === Xe() && n === "compatible" && !Ze()) {
		r = K(r, new H());
		let e = /* @__PURE__ */ new Date(), t = je(r.era, r.year);
		return e.setFullYear(t, r.month - 1, r.day), e.setHours(r.hour, r.minute, r.second, r.millisecond), e.getTime();
	}
	let i = ut(r), a = ft(i - ht, t), o = ft(i + ht, t), s = gt(r, t, i - a, i - o);
	if (s.length === 1) return s[0];
	if (s.length > 1) switch (n) {
		case "compatible":
		case "earlier": return s[0];
		case "later": return s[s.length - 1];
		case "reject": throw RangeError("Multiple possible absolute times found");
	}
	switch (n) {
		case "earlier": return Math.min(i - a, i - o);
		case "compatible":
		case "later": return Math.max(i - a, i - o);
		case "reject": throw RangeError("No such absolute time found");
	}
}
function vt(e, t, n = "compatible") {
	return new Date(U(e, t, n));
}
function W(e, t) {
	let n = ft(e, t), r = new Date(e + n), i = r.getUTCFullYear(), a = r.getUTCMonth() + 1, o = r.getUTCDate(), s = r.getUTCHours(), c = r.getUTCMinutes(), l = r.getUTCSeconds(), u = r.getUTCMilliseconds();
	return new cn(i < 1 ? "BC" : "AD", i < 1 ? -i + 1 : i, a, o, t, n, s, c, l, u);
}
function yt(e) {
	return new Y(e.calendar, e.era, e.year, e.month, e.day);
}
function G(e, t) {
	let n = 0, r = 0, i = 0, a = 0;
	if ("timeZone" in e) ({hour: n, minute: r, second: i, millisecond: a} = e);
	else if ("hour" in e && !t) return e;
	return t && ({hour: n, minute: r, second: i, millisecond: a} = t), new sn(e.calendar, e.era, e.year, e.month, e.day, n, r, i, a);
}
function bt(e) {
	return new on(e.hour, e.minute, e.second, e.millisecond);
}
function K(e, t) {
	if (ze(e.calendar, t)) return e;
	let n = t.fromJulianDay(e.calendar.toJulianDay(e)), r = e.copy();
	return r.calendar = t, r.era = n.era, r.year = n.year, r.month = n.month, r.day = n.day, jt(r), r;
}
function xt(e, t, n) {
	return e instanceof cn ? e.timeZone === t ? e : Ct(e, t) : W(U(e, t, n), t);
}
function St(e) {
	let t = ut(e) - e.offset;
	return new Date(t);
}
function Ct(e, t) {
	return K(W(ut(e) - e.offset, t), e.calendar);
}
function wt(e) {
	return Ct(e, Xe());
}
var Tt = 36e5;
function Et(e, t) {
	let n = e.copy(), r = "hour" in n ? zt(n, t) : 0;
	Dt(n, t.years || 0), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e), n.month += t.months || 0, Ot(n), At(n), n.day += (t.weeks || 0) * 7, n.day += t.days || 0, n.day += r, kt(n), n.calendar.balanceDate && n.calendar.balanceDate(n), n.year < 1 && (n.year = 1, n.month = 1, n.day = 1);
	let i = n.calendar.getYearsInEra(n);
	if (n.year > i) {
		let e = n.calendar.isInverseEra?.(n);
		n.year = i, n.month = e ? 1 : n.calendar.getMonthsInYear(n), n.day = e ? 1 : n.calendar.getDaysInMonth(n);
	}
	n.month < 1 && (n.month = 1, n.day = 1);
	let a = n.calendar.getMonthsInYear(n);
	return n.month > a && (n.month = a, n.day = n.calendar.getDaysInMonth(n)), n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day)), n;
}
function Dt(e, t) {
	e.calendar.isInverseEra?.(e) && (t = -t), e.year += t;
}
function Ot(e) {
	for (; e.month < 1;) Dt(e, -1), e.month += e.calendar.getMonthsInYear(e);
	let t = 0;
	for (; e.month > (t = e.calendar.getMonthsInYear(e));) e.month -= t, Dt(e, 1);
}
function kt(e) {
	for (; e.day < 1;) e.month--, Ot(e), e.day += e.calendar.getDaysInMonth(e);
	for (; e.day > e.calendar.getDaysInMonth(e);) e.day -= e.calendar.getDaysInMonth(e), e.month++, Ot(e);
}
function At(e) {
	e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function jt(e) {
	e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), At(e);
}
function Mt(e) {
	let t = {};
	for (let n in e) typeof e[n] == "number" && (t[n] = -e[n]);
	return t;
}
function Nt(e, t) {
	return Et(e, Mt(t));
}
function Pt(e, t) {
	let n = e.copy();
	return t.era != null && (n.era = t.era), t.year != null && (n.year = t.year), t.month != null && (n.month = t.month), t.day != null && (n.day = t.day), jt(n), n;
}
function Ft(e, t) {
	let n = e.copy();
	return t.hour != null && (n.hour = t.hour), t.minute != null && (n.minute = t.minute), t.second != null && (n.second = t.second), t.millisecond != null && (n.millisecond = t.millisecond), Lt(n), n;
}
function It(e) {
	e.second += Math.floor(e.millisecond / 1e3), e.millisecond = Rt(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = Rt(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = Rt(e.minute, 60);
	let t = Math.floor(e.hour / 24);
	return e.hour = Rt(e.hour, 24), t;
}
function Lt(e) {
	e.millisecond = Math.max(0, Math.min(e.millisecond, 999)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function Rt(e, t) {
	let n = e % t;
	return n < 0 && (n += t), n;
}
function zt(e, t) {
	return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, It(e);
}
function Bt(e, t) {
	let n = e.copy();
	return zt(n, t), n;
}
function Vt(e, t) {
	return Bt(e, Mt(t));
}
function Ht(e, t, n, r) {
	let i = e.copy();
	switch (t) {
		case "era": {
			let t = e.calendar.getEras(), a = t.indexOf(e.era);
			if (a < 0) throw Error("Invalid era: " + e.era);
			a = q(a, n, 0, t.length - 1, r?.round), i.era = t[a], jt(i);
			break;
		}
		case "year":
			i.calendar.isInverseEra?.(i) && (n = -n), i.year = q(e.year, n, -1 / 0, 9999, r?.round), i.year === -1 / 0 && (i.year = 1), i.calendar.balanceYearMonth && i.calendar.balanceYearMonth(i, e);
			break;
		case "month":
			i.month = q(e.month, n, 1, e.calendar.getMonthsInYear(e), r?.round);
			break;
		case "day":
			i.day = q(e.day, n, 1, e.calendar.getDaysInMonth(e), r?.round);
			break;
		default: throw Error("Unsupported field " + t);
	}
	return e.calendar.balanceDate && e.calendar.balanceDate(i), jt(i), i;
}
function Ut(e, t, n, r) {
	let i = e.copy();
	switch (t) {
		case "hour": {
			let t = e.hour, a = 0, o = 23;
			if (r?.hourCycle === 12) {
				let e = t >= 12;
				a = e ? 12 : 0, o = e ? 23 : 11;
			}
			i.hour = q(t, n, a, o, r?.round);
			break;
		}
		case "minute":
			i.minute = q(e.minute, n, 0, 59, r?.round);
			break;
		case "second":
			i.second = q(e.second, n, 0, 59, r?.round);
			break;
		case "millisecond":
			i.millisecond = q(e.millisecond, n, 0, 999, r?.round);
			break;
		default: throw Error("Unsupported field " + t);
	}
	return i;
}
function q(e, t, n, r, i = !1) {
	if (i) {
		e += Math.sign(t), e < n && (e = r);
		let i = Math.abs(t);
		e = t > 0 ? Math.ceil(e / i) * i : Math.floor(e / i) * i, e > r && (e = n);
	} else e += t, e < n ? e = r - (n - e - 1) : e > r && (e = n + (e - r - 1));
	return e;
}
function Wt(e, t) {
	let n;
	return n = t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0 ? U(Et(G(e), {
		years: t.years,
		months: t.months,
		weeks: t.weeks,
		days: t.days
	}), e.timeZone) : ut(e) - e.offset, n += t.milliseconds || 0, n += (t.seconds || 0) * 1e3, n += (t.minutes || 0) * 6e4, n += (t.hours || 0) * 36e5, K(W(n, e.timeZone), e.calendar);
}
function Gt(e, t) {
	return Wt(e, Mt(t));
}
function Kt(e, t, n, r) {
	switch (t) {
		case "hour": {
			let t = 0, i = 23;
			if (r?.hourCycle === 12) {
				let n = e.hour >= 12;
				t = n ? 12 : 0, i = n ? 23 : 11;
			}
			let a = G(e), o = K(Ft(a, { hour: t }), new H()), s = [U(o, e.timeZone, "earlier"), U(o, e.timeZone, "later")].filter((t) => W(t, e.timeZone).day === o.day)[0], c = K(Ft(a, { hour: i }), new H()), l = [U(c, e.timeZone, "earlier"), U(c, e.timeZone, "later")].filter((t) => W(t, e.timeZone).day === c.day).pop(), u = ut(e) - e.offset, d = Math.floor(u / Tt), f = u % Tt;
			return u = q(d, n, Math.floor(s / Tt), Math.floor(l / Tt), r?.round) * Tt + f, K(W(u, e.timeZone), e.calendar);
		}
		case "minute":
		case "second":
		case "millisecond": return Ut(e, t, n, r);
		case "era":
		case "year":
		case "month":
		case "day": return K(W(U(Ht(G(e), t, n, r), e.timeZone), e.timeZone), e.calendar);
		default: throw Error("Unsupported field " + t);
	}
}
function qt(e, t, n) {
	let r = G(e), i = Ft(Pt(r, t), t);
	return i.compare(r) === 0 ? e : K(W(U(i, e.timeZone, n), e.timeZone), e.calendar);
}
var Jt = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})$/, Yt = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/, Xt = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:(?:([+-]\d{2})(?::?(\d{2}))?)|Z)$/;
function Zt(e) {
	let t = e.match(Jt);
	if (!t) throw Xt.test(e) ? /* @__PURE__ */ Error(`Invalid ISO 8601 date string: ${e}. Use parseAbsolute() instead.`) : /* @__PURE__ */ Error("Invalid ISO 8601 date string: " + e);
	let n = new Y(J(t[1], 0, 9999), J(t[2], 1, 12), 1);
	return n.day = J(t[3], 1, n.calendar.getDaysInMonth(n)), n;
}
function Qt(e) {
	let t = e.match(Yt);
	if (!t) throw Xt.test(e) ? /* @__PURE__ */ Error(`Invalid ISO 8601 date time string: ${e}. Use parseAbsolute() instead.`) : /* @__PURE__ */ Error("Invalid ISO 8601 date time string: " + e);
	let n = J(t[1], -9999, 9999), r = new sn(n < 1 ? "BC" : "AD", n < 1 ? -n + 1 : n, J(t[2], 1, 12), 1, t[4] ? J(t[4], 0, 23) : 0, t[5] ? J(t[5], 0, 59) : 0, t[6] ? J(t[6], 0, 59) : 0, t[7] ? J(t[7], 0, 1 / 0) * 1e3 : 0);
	return r.day = J(t[3], 0, r.calendar.getDaysInMonth(r)), r;
}
function J(e, t, n) {
	let r = Number(e);
	if (r < t || r > n) throw RangeError(`Value out of range: ${t} <= ${r} <= ${n}`);
	return r;
}
function $t(e) {
	return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function en(e) {
	let t = K(e, new H()), n;
	return n = t.era === "BC" ? t.year === 1 ? "0000" : "-" + String(Math.abs(1 - t.year)).padStart(6, "00") : String(t.year).padStart(4, "0"), `${n}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function tn(e) {
	return `${en(e)}T${$t(e)}`;
}
function nn(e) {
	let t = Math.sign(e) < 0 ? "-" : "+";
	e = Math.abs(e);
	let n = Math.floor(e / 36e5), r = Math.floor(e % 36e5 / 6e4), i = Math.floor(e % 36e5 % 6e4 / 1e3), a = `${t}${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
	return i !== 0 && (a += `:${String(i).padStart(2, "0")}`), a;
}
function rn(e) {
	return `${tn(e)}${nn(e.offset)}[${e.timeZone}]`;
}
function an(e) {
	let t = typeof e[0] == "object" ? e.shift() : new H(), n;
	if (typeof e[0] == "string") n = e.shift();
	else {
		let e = t.getEras();
		n = e[e.length - 1];
	}
	let r = e.shift(), i = e.shift(), a = e.shift();
	return [
		t,
		n,
		r,
		i,
		a
	];
}
var Y = class e {
	constructor(...e) {
		let [t, n, r, i, a] = an(e);
		this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = a, jt(this);
	}
	copy() {
		return this.era ? new e(this.calendar, this.era, this.year, this.month, this.day) : new e(this.calendar, this.year, this.month, this.day);
	}
	add(e) {
		return Et(this, e);
	}
	subtract(e) {
		return Nt(this, e);
	}
	set(e) {
		return Pt(this, e);
	}
	cycle(e, t, n) {
		return Ht(this, e, t, n);
	}
	toDate(e) {
		return vt(this, e);
	}
	toString() {
		return en(this);
	}
	compare(e) {
		return Ge(this, e);
	}
}, on = class e {
	constructor(e = 0, t = 0, n = 0, r = 0) {
		this.hour = e, this.minute = t, this.second = n, this.millisecond = r, Lt(this);
	}
	copy() {
		return new e(this.hour, this.minute, this.second, this.millisecond);
	}
	add(e) {
		return Bt(this, e);
	}
	subtract(e) {
		return Vt(this, e);
	}
	set(e) {
		return Ft(this, e);
	}
	cycle(e, t, n) {
		return Ut(this, e, t, n);
	}
	toString() {
		return $t(this);
	}
	compare(e) {
		return Ke(this, e);
	}
}, sn = class e {
	constructor(...e) {
		let [t, n, r, i, a] = an(e);
		this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = a, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, jt(this);
	}
	copy() {
		return this.era ? new e(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new e(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
	}
	add(e) {
		return Et(this, e);
	}
	subtract(e) {
		return Nt(this, e);
	}
	set(e) {
		return Pt(Ft(this, e), e);
	}
	cycle(e, t, n) {
		switch (e) {
			case "era":
			case "year":
			case "month":
			case "day": return Ht(this, e, t, n);
			default: return Ut(this, e, t, n);
		}
	}
	toDate(e, t) {
		return vt(this, e, t);
	}
	toString() {
		return tn(this);
	}
	compare(e) {
		let t = Ge(this, e);
		return t === 0 ? Ke(this, G(e)) : t;
	}
}, cn = class e {
	constructor(...e) {
		let [t, n, r, i, a] = an(e), o = e.shift(), s = e.shift();
		this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = a, this.timeZone = o, this.offset = s, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, jt(this);
	}
	copy() {
		return this.era ? new e(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new e(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
	}
	add(e) {
		return Wt(this, e);
	}
	subtract(e) {
		return Gt(this, e);
	}
	set(e, t) {
		return qt(this, e, t);
	}
	cycle(e, t, n) {
		return Kt(this, e, t, n);
	}
	toDate() {
		return St(this);
	}
	toString() {
		return rn(this);
	}
	toAbsoluteString() {
		return this.toDate().toISOString();
	}
	compare(e) {
		return this.toDate().getTime() - xt(e, this.timeZone).toDate().getTime();
	}
}, ln = [
	[
		1868,
		9,
		8
	],
	[
		1912,
		7,
		30
	],
	[
		1926,
		12,
		25
	],
	[
		1989,
		1,
		8
	],
	[
		2019,
		5,
		1
	]
], un = [
	[
		1912,
		7,
		29
	],
	[
		1926,
		12,
		24
	],
	[
		1989,
		1,
		7
	],
	[
		2019,
		4,
		30
	]
], dn = [
	1867,
	1911,
	1925,
	1988,
	2018
], X = [
	"meiji",
	"taisho",
	"showa",
	"heisei",
	"reiwa"
];
function fn(e) {
	let t = ln.findIndex(([t, n, r]) => e.year < t || e.year === t && e.month < n || e.year === t && e.month === n && e.day < r);
	return t === -1 ? ln.length - 1 : t === 0 ? 0 : t - 1;
}
function pn(e) {
	let t = dn[X.indexOf(e.era)];
	if (!t) throw Error("Unknown era: " + e.era);
	return new Y(e.year + t, e.month, e.day);
}
var mn = class extends H {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), n = fn(t);
		return new Y(this, X[n], t.year - dn[n], t.month, t.day);
	}
	toJulianDay(e) {
		return super.toJulianDay(pn(e));
	}
	balanceDate(e) {
		let t = pn(e), n = fn(t);
		X[n] !== e.era && (e.era = X[n], e.year = t.year - dn[n]), this.constrainDate(e);
	}
	constrainDate(e) {
		let t = X.indexOf(e.era), n = un[t];
		if (n != null) {
			let [r, i, a] = n, o = r - dn[t];
			e.year = Math.max(1, Math.min(o, e.year)), e.year === o && (e.month = Math.min(i, e.month), e.month === i && (e.day = Math.min(a, e.day)));
		}
		if (e.year === 1 && t >= 0) {
			let [, n, r] = ln[t];
			e.month = Math.max(n, e.month), e.month === n && (e.day = Math.max(r, e.day));
		}
	}
	getEras() {
		return X;
	}
	getYearsInEra(e) {
		let t = X.indexOf(e.era), n = ln[t], r = ln[t + 1];
		if (r == null) return 9999 - n[0] + 1;
		let i = r[0] - n[0];
		return (e.month < r[1] || e.month === r[1] && e.day < r[2]) && i++, i;
	}
	getDaysInMonth(e) {
		return super.getDaysInMonth(pn(e));
	}
	getMinimumMonthInYear(e) {
		let t = hn(e);
		return t ? t[1] : 1;
	}
	getMinimumDayInMonth(e) {
		let t = hn(e);
		return t && e.month === t[1] ? t[2] : 1;
	}
	constructor(...e) {
		super(...e), this.identifier = "japanese";
	}
};
function hn(e) {
	if (e.year === 1) return ln[X.indexOf(e.era)];
}
var gn = -543, _n = class extends H {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), n = je(t.era, t.year);
		return new Y(this, n - gn, t.month, t.day);
	}
	toJulianDay(e) {
		return super.toJulianDay(vn(e));
	}
	getEras() {
		return ["BE"];
	}
	getDaysInMonth(e) {
		return super.getDaysInMonth(vn(e));
	}
	balanceDate() {}
	constructor(...e) {
		super(...e), this.identifier = "buddhist";
	}
};
function vn(e) {
	let [t, n] = Me(e.year + gn);
	return new Y(t, n, e.month, e.day);
}
var yn = 1911;
function bn(e) {
	return e.era === "minguo" ? e.year + yn : 1 - e.year + yn;
}
function xn(e) {
	let t = e - yn;
	return t > 0 ? ["minguo", t] : ["before_minguo", 1 - t];
}
var Sn = class extends H {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), [n, r] = xn(je(t.era, t.year));
		return new Y(this, n, r, t.month, t.day);
	}
	toJulianDay(e) {
		return super.toJulianDay(Cn(e));
	}
	getEras() {
		return ["before_minguo", "minguo"];
	}
	balanceDate(e) {
		let [t, n] = xn(bn(e));
		e.era = t, e.year = n;
	}
	isInverseEra(e) {
		return e.era === "before_minguo";
	}
	getDaysInMonth(e) {
		return super.getDaysInMonth(Cn(e));
	}
	getYearsInEra(e) {
		return e.era === "before_minguo" ? 9999 : 8088;
	}
	constructor(...e) {
		super(...e), this.identifier = "roc";
	}
};
function Cn(e) {
	let [t, n] = Me(bn(e));
	return new Y(t, n, e.month, e.day);
}
var wn = 1948320, Tn = [
	0,
	31,
	62,
	93,
	124,
	155,
	186,
	216,
	246,
	276,
	306,
	336
], En = class {
	fromJulianDay(e) {
		let t = e - wn, n = 1 + Math.floor((33 * t + 3) / 12053), r = t - (365 * (n - 1) + Math.floor((8 * n + 21) / 33)), i = Math.floor(r < 216 ? r / 31 : (r - 6) / 30), a = r - Tn[i] + 1;
		return new Y(this, n, i + 1, a);
	}
	toJulianDay(e) {
		let t = 1948319 + 365 * (e.year - 1) + Math.floor((8 * e.year + 21) / 33);
		return t += Tn[e.month - 1], t += e.day, t;
	}
	getMonthsInYear() {
		return 12;
	}
	getDaysInMonth(e) {
		return e.month <= 6 ? 31 : e.month <= 11 || Oe(25 * e.year + 11, 33) < 8 ? 30 : 29;
	}
	getMaximumMonthsInYear() {
		return 12;
	}
	getMaximumDaysInMonth() {
		return 31;
	}
	getEras() {
		return ["AP"];
	}
	getYearsInEra() {
		return 9377;
	}
	constructor() {
		this.identifier = "persian";
	}
}, Dn = 78, On = 80, kn = class extends H {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), n = t.year - Dn, r = e - Ae(t.era, t.year, 1, 1), i;
		r < On ? (n--, i = V(t.year - 1) ? 31 : 30, r += i + 155 + 90 + 10) : (i = V(t.year) ? 31 : 30, r -= On);
		let a, o;
		if (r < i) a = 1, o = r + 1;
		else {
			let e = r - i;
			e < 155 ? (a = Math.floor(e / 31) + 2, o = e % 31 + 1) : (e -= 155, a = Math.floor(e / 30) + 7, o = e % 30 + 1);
		}
		return new Y(this, n, a, o);
	}
	toJulianDay(e) {
		let [t, n] = Me(e.year + Dn), r, i;
		return V(n) ? (r = 31, i = Ae(t, n, 3, 21)) : (r = 30, i = Ae(t, n, 3, 22)), e.month === 1 ? i + e.day - 1 : (i += r + Math.min(e.month - 2, 5) * 31, e.month >= 8 && (i += (e.month - 7) * 30), i += e.day - 1, i);
	}
	getDaysInMonth(e) {
		return e.month === 1 && V(e.year + Dn) || e.month >= 2 && e.month <= 6 ? 31 : 30;
	}
	getYearsInEra() {
		return 9919;
	}
	getEras() {
		return ["saka"];
	}
	balanceDate() {}
	constructor(...e) {
		super(...e), this.identifier = "indian";
	}
}, An = 1948440, jn = 1948439, Z = 1300, Mn = 1600, Nn = 460322;
function Pn(e, t, n, r) {
	return r + Math.ceil(29.5 * (n - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1;
}
function Fn(e, t, n) {
	let r = Math.floor((30 * (n - t) + 10646) / 10631), i = Math.min(12, Math.ceil((n - (29 + Pn(t, r, 1, 1))) / 29.5) + 1);
	return new Y(e, r, i, n - Pn(t, r, i, 1) + 1);
}
function In(e) {
	return (14 + 11 * e) % 30 < 11;
}
var Ln = class {
	fromJulianDay(e) {
		return Fn(this, An, e);
	}
	toJulianDay(e) {
		return Pn(An, e.year, e.month, e.day);
	}
	getDaysInMonth(e) {
		let t = 29 + e.month % 2;
		return e.month === 12 && In(e.year) && t++, t;
	}
	getMonthsInYear() {
		return 12;
	}
	getDaysInYear(e) {
		return In(e.year) ? 355 : 354;
	}
	getMaximumMonthsInYear() {
		return 12;
	}
	getMaximumDaysInMonth() {
		return 30;
	}
	getYearsInEra() {
		return 9665;
	}
	getEras() {
		return ["AH"];
	}
	constructor() {
		this.identifier = "islamic-civil";
	}
}, Rn = class extends Ln {
	fromJulianDay(e) {
		return Fn(this, jn, e);
	}
	toJulianDay(e) {
		return Pn(jn, e.year, e.month, e.day);
	}
	constructor(...e) {
		super(...e), this.identifier = "islamic-tbla";
	}
}, zn = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=", Bn, Vn;
function Hn(e) {
	return Nn + Vn[e - Z];
}
function Un(e, t) {
	let n = e - Z, r = 1 << 11 - (t - 1);
	return (Bn[n] & r) === 0 ? 29 : 30;
}
function Wn(e, t) {
	let n = Hn(e);
	for (let r = 1; r < t; r++) n += Un(e, r);
	return n;
}
function Gn(e) {
	return Vn[e + 1 - Z] - Vn[e - Z];
}
var Kn = class extends Ln {
	constructor() {
		if (super(), this.identifier = "islamic-umalqura", Bn ||= new Uint16Array(Uint8Array.from(atob(zn), (e) => e.charCodeAt(0)).buffer), !Vn) {
			Vn = /* @__PURE__ */ new Uint32Array(301);
			let e = 0;
			for (let t = Z; t <= Mn; t++) {
				Vn[t - Z] = e;
				for (let n = 1; n <= 12; n++) e += Un(t, n);
			}
		}
	}
	fromJulianDay(e) {
		let t = e - An, n = Hn(Z), r = Hn(Mn);
		if (t < n || t > r) return super.fromJulianDay(e);
		{
			let e = 1299, n = 1, r = 1;
			for (; r > 0;) {
				e++, r = t - Hn(e) + 1;
				let i = Gn(e);
				if (r === i) {
					n = 12;
					break;
				}
				if (r < i) {
					let t = Un(e, n);
					for (n = 1; r > t;) r -= t, n++, t = Un(e, n);
					break;
				}
			}
			return new Y(this, e, n, t - Wn(e, n) + 1);
		}
	}
	toJulianDay(e) {
		return e.year < Z || e.year > Mn ? super.toJulianDay(e) : An + Wn(e.year, e.month) + (e.day - 1);
	}
	getDaysInMonth(e) {
		return e.year < Z || e.year > Mn ? super.getDaysInMonth(e) : Un(e.year, e.month);
	}
	getDaysInYear(e) {
		return e.year < Z || e.year > Mn ? super.getDaysInYear(e) : Gn(e.year);
	}
}, qn = 347997, Jn = 25920, Yn = 765433;
function Xn(e) {
	return Oe(e * 7 + 1, 19) < 7;
}
function Zn(e) {
	let t = Math.floor((235 * e - 234) / 19), n = 12084 + 13753 * t, r = t * 29 + Math.floor(n / 25920);
	return Oe(3 * (r + 1), 7) < 3 && (r += 1), r;
}
function Qn(e) {
	let t = Zn(e - 1), n = Zn(e);
	return Zn(e + 1) - n === 356 ? 2 : +(n - t === 382);
}
function $n(e) {
	return Zn(e) + Qn(e);
}
function er(e) {
	return $n(e + 1) - $n(e);
}
function tr(e) {
	let t = er(e);
	switch (t > 380 && (t -= 30), t) {
		case 353: return 0;
		case 354: return 1;
		case 355: return 2;
	}
}
function nr(e, t) {
	if (t >= 6 && !Xn(e) && t++, t === 4 || t === 7 || t === 9 || t === 11 || t === 13) return 29;
	let n = tr(e);
	return t === 2 ? n === 2 ? 30 : 29 : t === 3 ? n === 0 ? 29 : 30 : t === 6 ? Xn(e) ? 30 : 0 : 30;
}
var rr = class {
	fromJulianDay(e) {
		let t = e - qn, n = t * Jn / Yn, r = Math.floor((19 * n + 234) / 235) + 1, i = $n(r), a = Math.floor(t - i);
		for (; a < 1;) r--, i = $n(r), a = Math.floor(t - i);
		let o = 1, s = 0;
		for (; s < a;) s += nr(r, o), o++;
		o--, s -= nr(r, o);
		let c = a - s;
		return new Y(this, r, o, c);
	}
	toJulianDay(e) {
		let t = $n(e.year);
		for (let n = 1; n < e.month; n++) t += nr(e.year, n);
		return t + e.day + qn;
	}
	getDaysInMonth(e) {
		return nr(e.year, e.month);
	}
	getMonthsInYear(e) {
		return Xn(e.year) ? 13 : 12;
	}
	getDaysInYear(e) {
		return er(e.year);
	}
	getMaximumMonthsInYear() {
		return 13;
	}
	getMaximumDaysInMonth() {
		return 30;
	}
	getYearsInEra() {
		return 9999;
	}
	getEras() {
		return ["AM"];
	}
	balanceYearMonth(e, t) {
		t.year !== e.year && (Xn(t.year) && !Xn(e.year) && t.month > 6 ? e.month-- : !Xn(t.year) && Xn(e.year) && t.month > 6 && e.month++);
	}
	constructor() {
		this.identifier = "hebrew";
	}
}, ir = 1723856, ar = 1824665, or = 5500;
function sr(e, t, n, r) {
	return e + 365 * t + Math.floor(t / 4) + 30 * (n - 1) + r - 1;
}
function cr(e, t) {
	let n = Math.floor(4 * (t - e) / 1461);
	t >= sr(e, n + 1, 1, 1) && n++;
	let r = 1 + Math.floor((t - sr(e, n, 1, 1)) / 30), i = t + 1 - sr(e, n, r, 1);
	return [
		n,
		r,
		i
	];
}
function lr(e) {
	return Math.floor(e % 4 / 3);
}
function ur(e, t) {
	return t % 13 == 0 ? lr(e) + 5 : 30;
}
var dr = class {
	fromJulianDay(e) {
		let [t, n, r] = cr(ir, e), i = "AM";
		return t <= 0 && (i = "AA", t += or), new Y(this, i, t, n, r);
	}
	toJulianDay(e) {
		let t = e.year;
		return e.era === "AA" && (t -= or), sr(ir, t, e.month, e.day);
	}
	getDaysInMonth(e) {
		return ur(e.year, e.month);
	}
	getMonthsInYear() {
		return 13;
	}
	getDaysInYear(e) {
		return 365 + lr(e.year);
	}
	getMaximumMonthsInYear() {
		return 13;
	}
	getMaximumDaysInMonth() {
		return 30;
	}
	getYearsInEra(e) {
		return e.era === "AA" ? 9999 : 9991;
	}
	getEras() {
		return ["AA", "AM"];
	}
	constructor() {
		this.identifier = "ethiopic";
	}
}, fr = class extends dr {
	fromJulianDay(e) {
		let [t, n, r] = cr(ir, e);
		return t += or, new Y(this, "AA", t, n, r);
	}
	getEras() {
		return ["AA"];
	}
	getYearsInEra() {
		return 9999;
	}
	constructor(...e) {
		super(...e), this.identifier = "ethioaa";
	}
}, pr = class extends dr {
	fromJulianDay(e) {
		let [t, n, r] = cr(ar, e), i = "CE";
		return t <= 0 && (i = "BCE", t = 1 - t), new Y(this, i, t, n, r);
	}
	toJulianDay(e) {
		let t = e.year;
		return e.era === "BCE" && (t = 1 - t), sr(ar, t, e.month, e.day);
	}
	getDaysInMonth(e) {
		let t = e.year;
		return e.era === "BCE" && (t = 1 - t), ur(t, e.month);
	}
	isInverseEra(e) {
		return e.era === "BCE";
	}
	balanceDate(e) {
		e.year <= 0 && (e.era = e.era === "BCE" ? "CE" : "BCE", e.year = 1 - e.year);
	}
	getEras() {
		return ["BCE", "CE"];
	}
	getYearsInEra(e) {
		return e.era === "BCE" ? 9999 : 9715;
	}
	constructor(...e) {
		super(...e), this.identifier = "coptic";
	}
};
function mr(e) {
	switch (e) {
		case "buddhist": return new _n();
		case "ethiopic": return new dr();
		case "ethioaa": return new fr();
		case "coptic": return new pr();
		case "hebrew": return new rr();
		case "indian": return new kn();
		case "islamic-civil": return new Ln();
		case "islamic-tbla": return new Rn();
		case "islamic-umalqura": return new Kn();
		case "japanese": return new mn();
		case "persian": return new En();
		case "roc": return new Sn();
		default: return new H();
	}
}
var hr = /* @__PURE__ */ new Map(), Q = class {
	constructor(e, t = {}) {
		this.formatter = _r(e, t), this.options = t;
	}
	format(e) {
		return this.formatter.format(e);
	}
	formatToParts(e) {
		return this.formatter.formatToParts(e);
	}
	formatRange(e, t) {
		if (typeof this.formatter.formatRange == "function") return this.formatter.formatRange(e, t);
		if (t < e) throw RangeError("End date must be >= start date");
		return `${this.formatter.format(e)} – ${this.formatter.format(t)}`;
	}
	formatRangeToParts(e, t) {
		if (typeof this.formatter.formatRangeToParts == "function") return this.formatter.formatRangeToParts(e, t);
		if (t < e) throw RangeError("End date must be >= start date");
		let n = this.formatter.formatToParts(e), r = this.formatter.formatToParts(t);
		return [
			...n.map((e) => ({
				...e,
				source: "startRange"
			})),
			{
				type: "literal",
				value: " – ",
				source: "shared"
			},
			...r.map((e) => ({
				...e,
				source: "endRange"
			}))
		];
	}
	resolvedOptions() {
		let e = this.formatter.resolvedOptions();
		return xr() && (this.resolvedHourCycle ||= Sr(e.locale, this.options), e.hourCycle = this.resolvedHourCycle, e.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), e.calendar === "ethiopic-amete-alem" && (e.calendar = "ethioaa"), e;
	}
}, gr = {
	true: { ja: "h11" },
	false: {}
};
function _r(e, t = {}) {
	if (typeof t.hour12 == "boolean" && yr()) {
		t = { ...t };
		let n = gr[String(t.hour12)][e.split("-")[0]], r = t.hour12 ? "h12" : "h23";
		t.hourCycle = n ?? r, delete t.hour12;
	}
	let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
	if (hr.has(n)) return hr.get(n);
	let r = new Intl.DateTimeFormat(e, t);
	return hr.set(n, r), r;
}
var vr = null;
function yr() {
	return vr ??= new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		hour12: !1
	}).format(new Date(2020, 2, 3, 0)) === "24", vr;
}
var br = null;
function xr() {
	return br ??= new Intl.DateTimeFormat("fr", {
		hour: "numeric",
		hour12: !1
	}).resolvedOptions().hourCycle === "h12", br;
}
function Sr(e, t) {
	if (!t.timeStyle && !t.hour) return;
	e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
	let n = _r(e, {
		...t,
		timeZone: void 0
	}), r = parseInt(n.formatToParts(new Date(2020, 2, 3, 0)).find((e) => e.type === "hour").value, 10), i = parseInt(n.formatToParts(new Date(2020, 2, 3, 23)).find((e) => e.type === "hour").value, 10);
	if (r === 0 && i === 23) return "h23";
	if (r === 24 && i === 23) return "h24";
	if (r === 0 && i === 11) return "h11";
	if (r === 12 && i === 11) return "h12";
	throw Error("Unexpected hour cycle result");
}
function Cr(e) {
	e = De(e ?? {}, wr);
	let { locale: t } = r();
	return (0, z.useMemo)(() => new Q(t, e), [t, e]);
}
function wr(e, t) {
	if (e === t) return !0;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (t[r] !== e[r]) return !1;
	return !0;
}
var Tr = {};
Tr = { Empty: "فارغ" };
var Er = {};
Er = { Empty: "Изпразни" };
var Dr = {};
Dr = { Empty: "Prázdné" };
var Or = {};
Or = { Empty: "Tom" };
var kr = {};
kr = { Empty: "Leer" };
var Ar = {};
Ar = { Empty: "Άδειο" };
var jr = {};
jr = { Empty: "Empty" };
var Mr = {};
Mr = { Empty: "Vacío" };
var Nr = {};
Nr = { Empty: "Tühjenda" };
var Pr = {};
Pr = { Empty: "Tyhjä" };
var Fr = {};
Fr = { Empty: "Vide" };
var Ir = {};
Ir = { Empty: "ריק" };
var Lr = {};
Lr = { Empty: "Prazno" };
var Rr = {};
Rr = { Empty: "Üres" };
var zr = {};
zr = { Empty: "Vuoto" };
var Br = {};
Br = { Empty: "空" };
var Vr = {};
Vr = { Empty: "비어 있음" };
var Hr = {};
Hr = { Empty: "Tuščias" };
var Ur = {};
Ur = { Empty: "Tukšs" };
var Wr = {};
Wr = { Empty: "Tom" };
var Gr = {};
Gr = { Empty: "Leeg" };
var Kr = {};
Kr = { Empty: "Pusty" };
var qr = {};
qr = { Empty: "Vazio" };
var Jr = {};
Jr = { Empty: "Vazio" };
var Yr = {};
Yr = { Empty: "Gol" };
var Xr = {};
Xr = { Empty: "Не заполнено" };
var Zr = {};
Zr = { Empty: "Prázdne" };
var Qr = {};
Qr = { Empty: "Prazen" };
var $r = {};
$r = { Empty: "Prazno" };
var ei = {};
ei = { Empty: "Tomt" };
var ti = {};
ti = { Empty: "Boş" };
var ni = {};
ni = { Empty: "Пусто" };
var ri = {};
ri = { Empty: "空" };
var ii = {};
ii = { Empty: "空白" };
var ai = {};
ai = {
	"ar-AE": Tr,
	"bg-BG": Er,
	"cs-CZ": Dr,
	"da-DK": Or,
	"de-DE": kr,
	"el-GR": Ar,
	"en-US": jr,
	"es-ES": Mr,
	"et-EE": Nr,
	"fi-FI": Pr,
	"fr-FR": Fr,
	"he-IL": Ir,
	"hr-HR": Lr,
	"hu-HU": Rr,
	"it-IT": zr,
	"ja-JP": Br,
	"ko-KR": Vr,
	"lt-LT": Hr,
	"lv-LV": Ur,
	"nb-NO": Wr,
	"nl-NL": Gr,
	"pl-PL": Kr,
	"pt-BR": qr,
	"pt-PT": Jr,
	"ro-RO": Yr,
	"ru-RU": Xr,
	"sk-SK": Zr,
	"sl-SI": Qr,
	"sr-SP": $r,
	"sv-SE": ei,
	"tr-TR": ti,
	"uk-UA": ni,
	"zh-CN": ri,
	"zh-TW": ii
};
function oi(e) {
	return e && e.__esModule ? e.default : e;
}
var si = () => {};
function ci(e) {
	let r = (0, z.useRef)(void 0), { value: i, textValue: a, minValue: o, maxValue: s, isDisabled: c, isReadOnly: l, isRequired: u, onIncrement: d, onIncrementPage: f, onDecrement: m, onDecrementPage: h, onDecrementToMin: g, onIncrementToMax: v } = e, y = _(oi(ai), "@react-aria/spinbutton"), b = (0, z.useRef)(!1), x = (0, z.useCallback)(() => {
		clearTimeout(r.current), b.current = !1;
	}, []), S = D(() => {
		x();
	});
	(0, z.useEffect)(() => () => S(), []);
	let { keyboardProps: C } = re({
		isDisabled: c || l,
		shortcuts: {
			PageUp: () => {
				if (f) {
					f();
					return;
				}
				if (d) {
					d();
					return;
				}
				return !1;
			},
			ArrowUp: () => {
				if (d) {
					d();
					return;
				}
				return !1;
			},
			PageDown: () => {
				if (h) {
					h();
					return;
				}
				if (m) {
					m();
					return;
				}
				return !1;
			},
			ArrowDown: () => {
				if (m) {
					m();
					return;
				}
				return !1;
			},
			Home: () => {
				if (g) {
					g();
					return;
				}
				return !1;
			},
			End: () => {
				if (v) {
					v();
					return;
				}
				return !1;
			}
		},
		allowRepeats: !0
	}), w = (0, z.useRef)(!1), T = () => {
		w.current = !0;
	}, E = () => {
		w.current = !1;
	}, O = a === "" ? y.format("Empty") : (a || `${i}`).replace("-", "−");
	(0, z.useEffect)(() => {
		w.current && (n("assertive"), p(O, "assertive"));
	}, [O]);
	let k = (0, z.useCallback)(() => {
		x();
	}, [x]), ee = D(d ?? si), te = D(m ?? si), ne = D(() => {
		(s === void 0 || isNaN(s) || i === void 0 || isNaN(i) || i < s) && (ee(), A(60));
	}), A = D((e) => {
		S(), b.current = !0, r.current = window.setTimeout(ne, e);
	}), ie = D(() => {
		(o === void 0 || isNaN(o) || i === void 0 || isNaN(i) || i > o) && (te(), j(60));
	}), j = D((e) => {
		S(), b.current = !0, r.current = window.setTimeout(ie, e);
	}), M = (e) => {
		e.preventDefault();
	}, { addGlobalListener: N, removeAllGlobalListeners: P } = t(), F = (0, z.useRef)(!1), [I, L] = (0, z.useState)(null);
	(0, z.useEffect)(() => {
		I === "touch" ? A(600) : I ? A(400) : I || S();
	}, [I]);
	let [R, ae] = (0, z.useState)(null);
	return (0, z.useEffect)(() => {
		R === "touch" ? j(600) : R ? j(400) : R || S();
	}, [R]), {
		spinButtonProps: {
			role: "spinbutton",
			"aria-valuenow": i !== void 0 && !isNaN(i) ? i : void 0,
			"aria-valuetext": O,
			"aria-valuemin": o,
			"aria-valuemax": s,
			"aria-disabled": c || void 0,
			"aria-readonly": l || void 0,
			"aria-required": u || void 0,
			...C,
			onFocus: T,
			onBlur: E
		},
		incrementButtonProps: {
			onPressStart: (e) => {
				x(), e.pointerType === "touch" ? (N(window, "pointercancel", k, { capture: !0 }), F.current = !1, L("touch")) : (d?.(), L("mouse")), N(window, "contextmenu", M);
			},
			onPressUp: (e) => {
				x(), e.pointerType === "touch" && (F.current = !0), P(), L(null);
			},
			onPressEnd: (e) => {
				x(), e.pointerType === "touch" && !b.current && F.current && d?.(), F.current = !1, L(null);
			},
			onFocus: T,
			onBlur: E
		},
		decrementButtonProps: {
			onPressStart: (e) => {
				x(), e.pointerType === "touch" ? (N(window, "pointercancel", k, { capture: !0 }), F.current = !1, ae("touch")) : (m?.(), ae("mouse"));
			},
			onPressUp: (e) => {
				x(), e.pointerType === "touch" && (F.current = !0), P(), ae(null);
			},
			onPressEnd: (e) => {
				x(), e.pointerType === "touch" && !b.current && F.current && m?.(), F.current = !1, ae(null);
			},
			onFocus: T,
			onBlur: E
		}
	};
}
var li = [
	"day",
	"month",
	"year"
], ui = {
	hour: 1,
	minute: 2,
	second: 3
};
function di(e, t) {
	let { autoComplete: n, isDisabled: r, name: i } = e, { visuallyHiddenProps: a } = M({ style: {
		position: "fixed",
		top: 0,
		left: 0
	} }), o = 60;
	t.granularity === "second" ? o = 1 : t.granularity === "hour" && (o = 3600);
	let s = "";
	t.value && (s = t.granularity === "day" ? yt(t.value).toString() : G("timeZone" in t.value ? wt(t.value) : t.value).toString());
	let c = t.granularity === "day" ? "date" : "datetime-local", l = [
		"hour",
		"minute",
		"second"
	], u = 0;
	return l.includes(t.granularity) && (u = ui[t.granularity], l = l.slice(0, u)), {
		containerProps: {
			...a,
			"aria-hidden": !0,
			"data-react-aria-prevent-focus": !0,
			"data-a11y-ignore": "aria-hidden-focus"
		},
		inputProps: {
			tabIndex: -1,
			autoComplete: n,
			disabled: r,
			type: c,
			form: "",
			name: i,
			step: o,
			value: s,
			onChange: (e) => {
				let n = E(e).value.toString();
				if (n) try {
					let e = Qt(n);
					if (t.granularity === "day" && (e = Zt(n)), "setSegment" in t) for (let n in e) li.includes(n) && t.setSegment(n, e[n]), l.includes(n) && t.setSegment(n, e[n]);
					t.setValue(e);
				} catch {}
			}
		}
	};
}
function fi(e) {
	let { state: t } = e, { containerProps: n, inputProps: r } = di({ ...e }, t);
	return /* @__PURE__ */ z.createElement("div", {
		...n,
		"data-testid": "hidden-dateinput-container"
	}, /* @__PURE__ */ z.createElement("input", r));
}
var pi = {};
pi = {
	calendar: "التقويم",
	day: "يوم",
	dayPeriod: "ص/م",
	endDate: "تاريخ الانتهاء",
	era: "العصر",
	hour: "الساعات",
	minute: "الدقائق",
	month: "الشهر",
	second: "الثواني",
	selectedDateDescription: (e) => `تاريخ محدد: ${e.date}`,
	selectedRangeDescription: (e) => `المدى الزمني المحدد: ${e.startDate} إلى ${e.endDate}`,
	selectedTimeDescription: (e) => `الوقت المحدد: ${e.time}`,
	startDate: "تاريخ البدء",
	timeZoneName: "التوقيت",
	weekday: "اليوم",
	year: "السنة"
};
var mi = {};
mi = {
	calendar: "Календар",
	day: "ден",
	dayPeriod: "пр.об./сл.об.",
	endDate: "Крайна дата",
	era: "ера",
	hour: "час",
	minute: "минута",
	month: "месец",
	second: "секунда",
	selectedDateDescription: (e) => `Избрана дата: ${e.date}`,
	selectedRangeDescription: (e) => `Избран диапазон: ${e.startDate} до ${e.endDate}`,
	selectedTimeDescription: (e) => `Избрано време: ${e.time}`,
	startDate: "Начална дата",
	timeZoneName: "часова зона",
	weekday: "ден от седмицата",
	year: "година"
};
var hi = {};
hi = {
	calendar: "Kalendář",
	day: "den",
	dayPeriod: "část dne",
	endDate: "Konečné datum",
	era: "letopočet",
	hour: "hodina",
	minute: "minuta",
	month: "měsíc",
	second: "sekunda",
	selectedDateDescription: (e) => `Vybrané datum: ${e.date}`,
	selectedRangeDescription: (e) => `Vybrané období: ${e.startDate} až ${e.endDate}`,
	selectedTimeDescription: (e) => `Vybraný čas: ${e.time}`,
	startDate: "Počáteční datum",
	timeZoneName: "časové pásmo",
	weekday: "den v týdnu",
	year: "rok"
};
var gi = {};
gi = {
	calendar: "Kalender",
	day: "dag",
	dayPeriod: "AM/PM",
	endDate: "Slutdato",
	era: "æra",
	hour: "time",
	minute: "minut",
	month: "måned",
	second: "sekund",
	selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
	selectedRangeDescription: (e) => `Valgt interval: ${e.startDate} til ${e.endDate}`,
	selectedTimeDescription: (e) => `Valgt tidspunkt: ${e.time}`,
	startDate: "Startdato",
	timeZoneName: "tidszone",
	weekday: "ugedag",
	year: "år"
};
var _i = {};
_i = {
	calendar: "Kalender",
	day: "Tag",
	dayPeriod: "Tageshälfte",
	endDate: "Enddatum",
	era: "Epoche",
	hour: "Stunde",
	minute: "Minute",
	month: "Monat",
	second: "Sekunde",
	selectedDateDescription: (e) => `Ausgewähltes Datum: ${e.date}`,
	selectedRangeDescription: (e) => `Ausgewählter Bereich: ${e.startDate} bis ${e.endDate}`,
	selectedTimeDescription: (e) => `Ausgewählte Zeit: ${e.time}`,
	startDate: "Startdatum",
	timeZoneName: "Zeitzone",
	weekday: "Wochentag",
	year: "Jahr"
};
var vi = {};
vi = {
	calendar: "Ημερολόγιο",
	day: "ημέρα",
	dayPeriod: "π.μ./μ.μ.",
	endDate: "Ημερομηνία λήξης",
	era: "περίοδος",
	hour: "ώρα",
	minute: "λεπτό",
	month: "μήνας",
	second: "δευτερόλεπτο",
	selectedDateDescription: (e) => `Επιλεγμένη ημερομηνία: ${e.date}`,
	selectedRangeDescription: (e) => `Επιλεγμένο εύρος: ${e.startDate} έως ${e.endDate}`,
	selectedTimeDescription: (e) => `Επιλεγμένη ώρα: ${e.time}`,
	startDate: "Ημερομηνία έναρξης",
	timeZoneName: "ζώνη ώρας",
	weekday: "καθημερινή",
	year: "έτος"
};
var yi = {};
yi = {
	era: "era",
	year: "year",
	month: "month",
	day: "day",
	hour: "hour",
	minute: "minute",
	second: "second",
	dayPeriod: "AM/PM",
	calendar: "Calendar",
	startDate: "Start Date",
	endDate: "End Date",
	weekday: "day of the week",
	timeZoneName: "time zone",
	selectedDateDescription: (e) => `Selected Date: ${e.date}`,
	selectedRangeDescription: (e) => `Selected Range: ${e.startDate} to ${e.endDate}`,
	selectedTimeDescription: (e) => `Selected Time: ${e.time}`
};
var bi = {};
bi = {
	calendar: "Calendario",
	day: "día",
	dayPeriod: "a.\xA0m./p.\xA0m.",
	endDate: "Fecha final",
	era: "era",
	hour: "hora",
	minute: "minuto",
	month: "mes",
	second: "segundo",
	selectedDateDescription: (e) => `Fecha seleccionada: ${e.date}`,
	selectedRangeDescription: (e) => `Rango seleccionado: ${e.startDate} a ${e.endDate}`,
	selectedTimeDescription: (e) => `Hora seleccionada: ${e.time}`,
	startDate: "Fecha de inicio",
	timeZoneName: "zona horaria",
	weekday: "día de la semana",
	year: "año"
};
var xi = {};
xi = {
	calendar: "Kalender",
	day: "päev",
	dayPeriod: "enne/pärast lõunat",
	endDate: "Lõppkuupäev",
	era: "ajastu",
	hour: "tund",
	minute: "minut",
	month: "kuu",
	second: "sekund",
	selectedDateDescription: (e) => `Valitud kuupäev: ${e.date}`,
	selectedRangeDescription: (e) => `Valitud vahemik: ${e.startDate} kuni ${e.endDate}`,
	selectedTimeDescription: (e) => `Valitud aeg: ${e.time}`,
	startDate: "Alguskuupäev",
	timeZoneName: "ajavöönd",
	weekday: "nädalapäev",
	year: "aasta"
};
var Si = {};
Si = {
	calendar: "Kalenteri",
	day: "päivä",
	dayPeriod: "vuorokaudenaika",
	endDate: "Päättymispäivä",
	era: "aikakausi",
	hour: "tunti",
	minute: "minuutti",
	month: "kuukausi",
	second: "sekunti",
	selectedDateDescription: (e) => `Valittu päivämäärä: ${e.date}`,
	selectedRangeDescription: (e) => `Valittu aikaväli: ${e.startDate} – ${e.endDate}`,
	selectedTimeDescription: (e) => `Valittu aika: ${e.time}`,
	startDate: "Alkamispäivä",
	timeZoneName: "aikavyöhyke",
	weekday: "viikonpäivä",
	year: "vuosi"
};
var Ci = {};
Ci = {
	calendar: "Calendrier",
	day: "jour",
	dayPeriod: "cadran",
	endDate: "Date de fin",
	era: "ère",
	hour: "heure",
	minute: "minute",
	month: "mois",
	second: "seconde",
	selectedDateDescription: (e) => `Date sélectionnée : ${e.date}`,
	selectedRangeDescription: (e) => `Plage sélectionnée : ${e.startDate} au ${e.endDate}`,
	selectedTimeDescription: (e) => `Heure choisie : ${e.time}`,
	startDate: "Date de début",
	timeZoneName: "fuseau horaire",
	weekday: "jour de la semaine",
	year: "année"
};
var wi = {};
wi = {
	calendar: "לוח שנה",
	day: "יום",
	dayPeriod: "לפנה״צ/אחה״צ",
	endDate: "תאריך סיום",
	era: "תקופה",
	hour: "שעה",
	minute: "דקה",
	month: "חודש",
	second: "שנייה",
	selectedDateDescription: (e) => `תאריך נבחר: ${e.date}`,
	selectedRangeDescription: (e) => `טווח נבחר: ${e.startDate} עד ${e.endDate}`,
	selectedTimeDescription: (e) => `זמן נבחר: ${e.time}`,
	startDate: "תאריך התחלה",
	timeZoneName: "אזור זמן",
	weekday: "יום בשבוע",
	year: "שנה"
};
var Ti = {};
Ti = {
	calendar: "Kalendar",
	day: "dan",
	dayPeriod: "AM/PM",
	endDate: "Datum završetka",
	era: "era",
	hour: "sat",
	minute: "minuta",
	month: "mjesec",
	second: "sekunda",
	selectedDateDescription: (e) => `Odabrani datum: ${e.date}`,
	selectedRangeDescription: (e) => `Odabrani raspon: ${e.startDate} do ${e.endDate}`,
	selectedTimeDescription: (e) => `Odabrano vrijeme: ${e.time}`,
	startDate: "Datum početka",
	timeZoneName: "vremenska zona",
	weekday: "dan u tjednu",
	year: "godina"
};
var Ei = {};
Ei = {
	calendar: "Naptár",
	day: "nap",
	dayPeriod: "napszak",
	endDate: "Befejező dátum",
	era: "éra",
	hour: "óra",
	minute: "perc",
	month: "hónap",
	second: "másodperc",
	selectedDateDescription: (e) => `Kijelölt dátum: ${e.date}`,
	selectedRangeDescription: (e) => `Kijelölt tartomány: ${e.startDate}–${e.endDate}`,
	selectedTimeDescription: (e) => `Kijelölt idő: ${e.time}`,
	startDate: "Kezdő dátum",
	timeZoneName: "időzóna",
	weekday: "hét napja",
	year: "év"
};
var Di = {};
Di = {
	calendar: "Calendario",
	day: "giorno",
	dayPeriod: "AM/PM",
	endDate: "Data finale",
	era: "era",
	hour: "ora",
	minute: "minuto",
	month: "mese",
	second: "secondo",
	selectedDateDescription: (e) => `Data selezionata: ${e.date}`,
	selectedRangeDescription: (e) => `Intervallo selezionato: da ${e.startDate} a ${e.endDate}`,
	selectedTimeDescription: (e) => `Ora selezionata: ${e.time}`,
	startDate: "Data iniziale",
	timeZoneName: "fuso orario",
	weekday: "giorno della settimana",
	year: "anno"
};
var Oi = {};
Oi = {
	calendar: "カレンダー",
	day: "日",
	dayPeriod: "午前/午後",
	endDate: "終了日",
	era: "時代",
	hour: "時",
	minute: "分",
	month: "月",
	second: "秒",
	selectedDateDescription: (e) => `選択した日付 : ${e.date}`,
	selectedRangeDescription: (e) => `選択範囲 : ${e.startDate} から ${e.endDate}`,
	selectedTimeDescription: (e) => `選択した時間 : ${e.time}`,
	startDate: "開始日",
	timeZoneName: "タイムゾーン",
	weekday: "曜日",
	year: "年"
};
var ki = {};
ki = {
	calendar: "달력",
	day: "일",
	dayPeriod: "오전/오후",
	endDate: "종료일",
	era: "연호",
	hour: "시",
	minute: "분",
	month: "월",
	second: "초",
	selectedDateDescription: (e) => `선택 일자: ${e.date}`,
	selectedRangeDescription: (e) => `선택 범위: ${e.startDate} ~ ${e.endDate}`,
	selectedTimeDescription: (e) => `선택 시간: ${e.time}`,
	startDate: "시작일",
	timeZoneName: "시간대",
	weekday: "요일",
	year: "년"
};
var Ai = {};
Ai = {
	calendar: "Kalendorius",
	day: "diena",
	dayPeriod: "iki pietų / po pietų",
	endDate: "Pabaigos data",
	era: "era",
	hour: "valanda",
	minute: "minutė",
	month: "mėnuo",
	second: "sekundė",
	selectedDateDescription: (e) => `Pasirinkta data: ${e.date}`,
	selectedRangeDescription: (e) => `Pasirinktas intervalas: nuo ${e.startDate} iki ${e.endDate}`,
	selectedTimeDescription: (e) => `Pasirinktas laikas: ${e.time}`,
	startDate: "Pradžios data",
	timeZoneName: "laiko juosta",
	weekday: "savaitės diena",
	year: "metai"
};
var ji = {};
ji = {
	calendar: "Kalendārs",
	day: "diena",
	dayPeriod: "priekšpusdienā/pēcpusdienā",
	endDate: "Beigu datums",
	era: "ēra",
	hour: "stundas",
	minute: "minūtes",
	month: "mēnesis",
	second: "sekundes",
	selectedDateDescription: (e) => `Atlasītais datums: ${e.date}`,
	selectedRangeDescription: (e) => `Atlasītais diapazons: no ${e.startDate} līdz ${e.endDate}`,
	selectedTimeDescription: (e) => `Atlasītais laiks: ${e.time}`,
	startDate: "Sākuma datums",
	timeZoneName: "laika josla",
	weekday: "nedēļas diena",
	year: "gads"
};
var Mi = {};
Mi = {
	calendar: "Kalender",
	day: "dag",
	dayPeriod: "a.m./p.m.",
	endDate: "Sluttdato",
	era: "tidsalder",
	hour: "time",
	minute: "minutt",
	month: "måned",
	second: "sekund",
	selectedDateDescription: (e) => `Valgt dato: ${e.date}`,
	selectedRangeDescription: (e) => `Valgt område: ${e.startDate} til ${e.endDate}`,
	selectedTimeDescription: (e) => `Valgt tid: ${e.time}`,
	startDate: "Startdato",
	timeZoneName: "tidssone",
	weekday: "ukedag",
	year: "år"
};
var Ni = {};
Ni = {
	calendar: "Kalender",
	day: "dag",
	dayPeriod: "a.m./p.m.",
	endDate: "Einddatum",
	era: "tijdperk",
	hour: "uur",
	minute: "minuut",
	month: "maand",
	second: "seconde",
	selectedDateDescription: (e) => `Geselecteerde datum: ${e.date}`,
	selectedRangeDescription: (e) => `Geselecteerd bereik: ${e.startDate} tot ${e.endDate}`,
	selectedTimeDescription: (e) => `Geselecteerde tijd: ${e.time}`,
	startDate: "Startdatum",
	timeZoneName: "tijdzone",
	weekday: "dag van de week",
	year: "jaar"
};
var Pi = {};
Pi = {
	calendar: "Kalendarz",
	day: "dzień",
	dayPeriod: "rano / po południu / wieczorem",
	endDate: "Data końcowa",
	era: "era",
	hour: "godzina",
	minute: "minuta",
	month: "miesiąc",
	second: "sekunda",
	selectedDateDescription: (e) => `Wybrana data: ${e.date}`,
	selectedRangeDescription: (e) => `Wybrany zakres: ${e.startDate} do ${e.endDate}`,
	selectedTimeDescription: (e) => `Wybrany czas: ${e.time}`,
	startDate: "Data początkowa",
	timeZoneName: "strefa czasowa",
	weekday: "dzień tygodnia",
	year: "rok"
};
var Fi = {};
Fi = {
	calendar: "Calendário",
	day: "dia",
	dayPeriod: "AM/PM",
	endDate: "Data final",
	era: "era",
	hour: "hora",
	minute: "minuto",
	month: "mês",
	second: "segundo",
	selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
	selectedRangeDescription: (e) => `Intervalo selecionado: ${e.startDate} a ${e.endDate}`,
	selectedTimeDescription: (e) => `Hora selecionada: ${e.time}`,
	startDate: "Data inicial",
	timeZoneName: "fuso horário",
	weekday: "dia da semana",
	year: "ano"
};
var Ii = {};
Ii = {
	calendar: "Calendário",
	day: "dia",
	dayPeriod: "am/pm",
	endDate: "Data de Término",
	era: "era",
	hour: "hora",
	minute: "minuto",
	month: "mês",
	second: "segundo",
	selectedDateDescription: (e) => `Data selecionada: ${e.date}`,
	selectedRangeDescription: (e) => `Intervalo selecionado: ${e.startDate} a ${e.endDate}`,
	selectedTimeDescription: (e) => `Hora selecionada: ${e.time}`,
	startDate: "Data de Início",
	timeZoneName: "fuso horário",
	weekday: "dia da semana",
	year: "ano"
};
var Li = {};
Li = {
	calendar: "Calendar",
	day: "zi",
	dayPeriod: "a.m/p.m.",
	endDate: "Dată final",
	era: "eră",
	hour: "oră",
	minute: "minut",
	month: "lună",
	second: "secundă",
	selectedDateDescription: (e) => `Dată selectată: ${e.date}`,
	selectedRangeDescription: (e) => `Interval selectat: de la ${e.startDate} până la ${e.endDate}`,
	selectedTimeDescription: (e) => `Ora selectată: ${e.time}`,
	startDate: "Dată început",
	timeZoneName: "fus orar",
	weekday: "ziua din săptămână",
	year: "an"
};
var Ri = {};
Ri = {
	calendar: "Календарь",
	day: "день",
	dayPeriod: "AM/PM",
	endDate: "Дата окончания",
	era: "эра",
	hour: "час",
	minute: "минута",
	month: "месяц",
	second: "секунда",
	selectedDateDescription: (e) => `Выбранная дата: ${e.date}`,
	selectedRangeDescription: (e) => `Выбранный диапазон: с ${e.startDate} по ${e.endDate}`,
	selectedTimeDescription: (e) => `Выбранное время: ${e.time}`,
	startDate: "Дата начала",
	timeZoneName: "часовой пояс",
	weekday: "день недели",
	year: "год"
};
var zi = {};
zi = {
	calendar: "Kalendár",
	day: "deň",
	dayPeriod: "AM/PM",
	endDate: "Dátum ukončenia",
	era: "letopočet",
	hour: "hodina",
	minute: "minúta",
	month: "mesiac",
	second: "sekunda",
	selectedDateDescription: (e) => `Vybratý dátum: ${e.date}`,
	selectedRangeDescription: (e) => `Vybratý rozsah: od ${e.startDate} do ${e.endDate}`,
	selectedTimeDescription: (e) => `Vybratý čas: ${e.time}`,
	startDate: "Dátum začatia",
	timeZoneName: "časové pásmo",
	weekday: "deň týždňa",
	year: "rok"
};
var Bi = {};
Bi = {
	calendar: "Koledar",
	day: "dan",
	dayPeriod: "dop/pop",
	endDate: "Datum konca",
	era: "doba",
	hour: "ura",
	minute: "minuta",
	month: "mesec",
	second: "sekunda",
	selectedDateDescription: (e) => `Izbrani datum: ${e.date}`,
	selectedRangeDescription: (e) => `Izbrano območje: ${e.startDate} do ${e.endDate}`,
	selectedTimeDescription: (e) => `Izbrani čas: ${e.time}`,
	startDate: "Datum začetka",
	timeZoneName: "časovni pas",
	weekday: "dan v tednu",
	year: "leto"
};
var Vi = {};
Vi = {
	calendar: "Kalendar",
	day: "дан",
	dayPeriod: "пре подне/по подне",
	endDate: "Datum završetka",
	era: "ера",
	hour: "сат",
	minute: "минут",
	month: "месец",
	second: "секунд",
	selectedDateDescription: (e) => `Izabrani datum: ${e.date}`,
	selectedRangeDescription: (e) => `Izabrani opseg: od ${e.startDate} do ${e.endDate}`,
	selectedTimeDescription: (e) => `Izabrano vreme: ${e.time}`,
	startDate: "Datum početka",
	timeZoneName: "временска зона",
	weekday: "дан у недељи",
	year: "година"
};
var Hi = {};
Hi = {
	calendar: "Kalender",
	day: "dag",
	dayPeriod: "fm/em",
	endDate: "Slutdatum",
	era: "era",
	hour: "timme",
	minute: "minut",
	month: "månad",
	second: "sekund",
	selectedDateDescription: (e) => `Valt datum: ${e.date}`,
	selectedRangeDescription: (e) => `Valt intervall: ${e.startDate} till ${e.endDate}`,
	selectedTimeDescription: (e) => `Vald tid: ${e.time}`,
	startDate: "Startdatum",
	timeZoneName: "tidszon",
	weekday: "veckodag",
	year: "år"
};
var Ui = {};
Ui = {
	calendar: "Takvim",
	day: "gün",
	dayPeriod: "ÖÖ/ÖS",
	endDate: "Bitiş Tarihi",
	era: "çağ",
	hour: "saat",
	minute: "dakika",
	month: "ay",
	second: "saniye",
	selectedDateDescription: (e) => `Seçilen Tarih: ${e.date}`,
	selectedRangeDescription: (e) => `Seçilen Aralık: ${e.startDate} - ${e.endDate}`,
	selectedTimeDescription: (e) => `Seçilen Zaman: ${e.time}`,
	startDate: "Başlangıç Tarihi",
	timeZoneName: "saat dilimi",
	weekday: "haftanın günü",
	year: "yıl"
};
var Wi = {};
Wi = {
	calendar: "Календар",
	day: "день",
	dayPeriod: "дп/пп",
	endDate: "Дата завершення",
	era: "ера",
	hour: "година",
	minute: "хвилина",
	month: "місяць",
	second: "секунда",
	selectedDateDescription: (e) => `Вибрана дата: ${e.date}`,
	selectedRangeDescription: (e) => `Вибраний діапазон: ${e.startDate} — ${e.endDate}`,
	selectedTimeDescription: (e) => `Вибраний час: ${e.time}`,
	startDate: "Дата початку",
	timeZoneName: "часовий пояс",
	weekday: "день тижня",
	year: "рік"
};
var Gi = {};
Gi = {
	calendar: "日历",
	day: "日",
	dayPeriod: "上午/下午",
	endDate: "结束日期",
	era: "纪元",
	hour: "小时",
	minute: "分钟",
	month: "月",
	second: "秒",
	selectedDateDescription: (e) => `选定的日期：${e.date}`,
	selectedRangeDescription: (e) => `选定的范围：${e.startDate} 至 ${e.endDate}`,
	selectedTimeDescription: (e) => `选定的时间：${e.time}`,
	startDate: "开始日期",
	timeZoneName: "时区",
	weekday: "工作日",
	year: "年"
};
var Ki = {};
Ki = {
	calendar: "日曆",
	day: "日",
	dayPeriod: "上午/下午",
	endDate: "結束日期",
	era: "纪元",
	hour: "小时",
	minute: "分钟",
	month: "月",
	second: "秒",
	selectedDateDescription: (e) => `選定的日期：${e.date}`,
	selectedRangeDescription: (e) => `選定的範圍：${e.startDate} 至 ${e.endDate}`,
	selectedTimeDescription: (e) => `選定的時間：${e.time}`,
	startDate: "開始日期",
	timeZoneName: "时区",
	weekday: "工作日",
	year: "年"
};
var qi = {};
qi = {
	"ar-AE": pi,
	"bg-BG": mi,
	"cs-CZ": hi,
	"da-DK": gi,
	"de-DE": _i,
	"el-GR": vi,
	"en-US": yi,
	"es-ES": bi,
	"et-EE": xi,
	"fi-FI": Si,
	"fr-FR": Ci,
	"he-IL": wi,
	"hr-HR": Ti,
	"hu-HU": Ei,
	"it-IT": Di,
	"ja-JP": Oi,
	"ko-KR": ki,
	"lt-LT": Ai,
	"lv-LV": ji,
	"nb-NO": Mi,
	"nl-NL": Ni,
	"pl-PL": Pi,
	"pt-BR": Fi,
	"pt-PT": Ii,
	"ro-RO": Li,
	"ru-RU": Ri,
	"sk-SK": zi,
	"sl-SI": Bi,
	"sr-SP": Vi,
	"sv-SE": Hi,
	"tr-TR": Ui,
	"uk-UA": Wi,
	"zh-CN": Gi,
	"zh-TW": Ki
};
function Ji(e, t, n) {
	let { direction: i } = r(), a = (0, z.useMemo)(() => c(t), [t]), { keyboardProps: s } = re({
		shortcuts: {
			"Alt+ArrowDown": () => {
				if ("setOpen" in e) {
					e.setOpen(!0);
					return;
				}
				return !1;
			},
			"Alt+ArrowUp": () => {
				if ("setOpen" in e) {
					e.setOpen(!0);
					return;
				}
				return !1;
			},
			ArrowLeft: (e) => {
				if (n) return !1;
				if (i === "rtl") {
					if (t.current) {
						let n = E(e), r = Yi(t.current, n.getBoundingClientRect().left, -1);
						if (r) {
							r.focus();
							return;
						}
					}
				} else {
					a.focusPrevious();
					return;
				}
				return !1;
			},
			ArrowRight: (e) => {
				if (n) return !1;
				if (i === "rtl") {
					if (t.current) {
						let n = E(e), r = Yi(t.current, n.getBoundingClientRect().left, 1);
						if (r) {
							r.focus();
							return;
						}
					}
				} else {
					a.focusNext();
					return;
				}
				return !1;
			}
		},
		allowRepeats: !0
	}), u = () => {
		if (!t.current) return;
		let e = window.event ? E(window.event) : null, n = o(t.current, { tabbable: !0 });
		if (e &&= (n.currentNode = e, n.previousNode()), !e) {
			let t;
			do
				t = n.lastChild(), t && (e = t);
			while (t);
		}
		for (; e?.hasAttribute("data-placeholder");) {
			let t = n.previousNode();
			if (t && t.hasAttribute("data-placeholder")) e = t;
			else break;
		}
		e && e.focus();
	}, { pressProps: f } = l({
		preventFocusOnPress: !0,
		allowTextSelectionOnPress: !0,
		onPressStart(e) {
			e.pointerType === "mouse" && u();
		},
		onPress(e) {
			(e.pointerType === "touch" || e.pointerType === "pen") && u();
		}
	});
	return d(f, s);
}
function Yi(e, t, n) {
	let r = o(e, { tabbable: !0 }), i = r.nextNode(), a = null, s = 1 / 0;
	for (; i;) {
		let e = i.getBoundingClientRect().left - t, o = Math.abs(e);
		Math.sign(e) === n && o < s && (a = i, s = o), i = r.nextNode();
	}
	return a;
}
function Xi(e) {
	return e && e.__esModule ? e.default : e;
}
var Zi = /* @__PURE__ */ new WeakMap(), Qi = "__reactAriaDateFieldRole", $i = "__reactAriaDateFieldFocusManager";
function ea(e, t, n) {
	let { isInvalid: r, validationErrors: a, validationDetails: o } = t.displayValidation, { labelProps: s, fieldProps: l, descriptionProps: u, errorMessageProps: f } = me({
		...e,
		labelElementType: "span",
		isInvalid: r,
		errorMessage: e.errorMessage || a
	}), p = (0, z.useRef)(null), { focusWithinProps: m } = i({
		...e,
		onFocusWithin(n) {
			p.current = t.value, e.onFocus?.(n);
		},
		onBlurWithin: (n) => {
			t.confirmPlaceholder(), t.value !== p.current && t.commitValidation(), e.onBlur?.(n);
		},
		onFocusWithinChange: e.onFocusChange
	}), h = _(Xi(qi), "@react-aria/datepicker"), g = t.maxGranularity === "hour" ? "selectedTimeDescription" : "selectedDateDescription", v = t.maxGranularity === "hour" ? "time" : "date", y = t.value ? h.format(g, { [v]: t.formatValue({ month: "long" }) }) : "", b = ie(y), x = e[Qi] === "presentation" ? l["aria-describedby"] : [b["aria-describedby"], l["aria-describedby"]].filter(Boolean).join(" ") || void 0, S = e[$i], C = (0, z.useMemo)(() => S || c(n), [S, n]), w = Ji(t, n, e[Qi] === "presentation");
	Zi.set(t, {
		ariaLabel: e["aria-label"],
		ariaLabelledBy: [s.id, e["aria-labelledby"]].filter(Boolean).join(" ") || void 0,
		ariaDescribedBy: x,
		focusManager: C
	});
	let T = (0, z.useRef)(e.autoFocus), E;
	E = e[Qi] === "presentation" ? { role: "presentation" } : d(l, {
		role: "group",
		"aria-disabled": e.isDisabled || void 0,
		"aria-describedby": x
	}), (0, z.useEffect)(() => {
		T.current && C.focusFirst(), T.current = !1;
	}, [C]), le(e.inputRef, t.defaultValue, t.setValue), oe({
		...e,
		focus() {
			C.focusFirst();
		}
	}, t, e.inputRef);
	let D = {
		type: "hidden",
		name: e.name,
		form: e.form,
		value: t.value?.toString() || "",
		disabled: e.isDisabled
	};
	e.validationBehavior === "native" && (D.type = "text", D.hidden = !0, D.required = e.isRequired, D.onChange = () => {});
	let k = O(e);
	return {
		labelProps: {
			...s,
			onClick: () => {
				C.focusFirst();
			}
		},
		fieldProps: d(k, E, w, m, {
			onKeyDown: e.onKeyDown,
			onKeyUp: e.onKeyUp,
			style: { unicodeBidi: "isolate" }
		}),
		inputProps: D,
		descriptionProps: u,
		errorMessageProps: f,
		isInvalid: r,
		validationErrors: a,
		validationDetails: o
	};
}
function ta(e, t, n) {
	let r = ea(e, t, n);
	return r.inputProps.value = t.timeValue?.toString() || "", r;
}
function na(e) {
	return e && e.__esModule ? e.default : e;
}
function ra() {
	let { locale: e } = r(), t = s(na(qi), "@react-aria/datepicker");
	return (0, z.useMemo)(() => {
		try {
			return new Intl.DisplayNames(e, { type: "dateTimeField" });
		} catch {
			return new ia(e, t);
		}
	}, [e, t]);
}
var ia = class {
	constructor(e, t) {
		this.locale = e, this.dictionary = t;
	}
	of(e) {
		return this.dictionary.getStringForLocale(e, this.locale);
	}
};
function aa(e, t, n) {
	let i = (0, z.useRef)(""), { locale: o, direction: s } = r(), c = ra(), { ariaLabel: l, ariaLabelledBy: f, ariaDescribedBy: p, focusManager: h } = Zi.get(t), _ = e.isPlaceholder ? "" : e.text, y = (0, z.useMemo)(() => t.dateFormatter.resolvedOptions(), [t.dateFormatter]), b = Cr({
		month: "long",
		timeZone: y.timeZone
	}), x = Cr({
		hour: "numeric",
		hour12: y.hour12,
		timeZone: y.timeZone
	});
	if (e.type === "month" && !e.isPlaceholder) {
		let e = b.format(t.dateValue);
		_ = e === _ ? e : `${_} – ${e}`;
	} else e.type === "hour" && !e.isPlaceholder && (_ = x.format(t.dateValue));
	let { spinButtonProps: S } = ci({
		value: e.value ?? void 0,
		textValue: _,
		minValue: e.minValue,
		maxValue: e.maxValue,
		isDisabled: t.isDisabled,
		isReadOnly: t.isReadOnly || !e.isEditable,
		isRequired: t.isRequired,
		onIncrement: () => {
			i.current = "", t.increment(e.type);
		},
		onDecrement: () => {
			i.current = "", t.decrement(e.type);
		},
		onIncrementPage: () => {
			i.current = "", t.incrementPage(e.type);
		},
		onDecrementPage: () => {
			i.current = "", t.decrementPage(e.type);
		},
		onIncrementToMax: () => {
			i.current = "", t.incrementToMax(e.type);
		},
		onDecrementToMin: () => {
			i.current = "", t.decrementToMin(e.type);
		}
	}), C = (0, z.useMemo)(() => new ve(o, { maximumFractionDigits: 0 }), [o]), E = () => {
		if (e.text === e.placeholder && h.focusPrevious(), C.isValidPartialNumber(e.text) && !t.isReadOnly && !e.isPlaceholder) {
			let n = e.text.slice(0, -1), r = C.parse(n);
			n = r === 0 ? "" : n, n.length === 0 || r === 0 ? t.clearSegment(e.type) : t.setSegment(e.type, r), i.current = n;
		} else (e.type === "dayPeriod" || e.type === "era") && t.clearSegment(e.type);
	}, { keyboardProps: D } = re({
		shortcuts: {
			Backspace: () => {
				E();
			},
			Delete: () => {
				E();
			},
			"Mod+a": () => {}
		},
		allowRepeats: !0
	}), { startsWith: O } = he({ sensitivity: "base" }), k = Cr({
		hour: "numeric",
		hour12: !0
	}), ne = (0, z.useMemo)(() => {
		let e = /* @__PURE__ */ new Date();
		return e.setHours(0), k.formatToParts(e).find((e) => e.type === "dayPeriod").value;
	}, [k]), A = (0, z.useMemo)(() => {
		let e = /* @__PURE__ */ new Date();
		return e.setHours(12), k.formatToParts(e).find((e) => e.type === "dayPeriod").value;
	}, [k]), ie = Cr({
		year: "numeric",
		era: "narrow",
		timeZone: "UTC"
	}), j = (0, z.useMemo)(() => {
		if (e.type !== "era") return [];
		let n = K(new Y(1, 1, 1), t.calendar), r = t.calendar.getEras().map((e) => {
			let t = n.set({
				year: 1,
				month: 1,
				day: 1,
				era: e
			}).toDate("UTC");
			return {
				era: e,
				formatted: ie.formatToParts(t).find((e) => e.type === "era").value
			};
		}), i = oa(r.map((e) => e.formatted));
		if (i) for (let e of r) e.formatted = e.formatted.slice(i);
		return r;
	}, [
		ie,
		t.calendar,
		e.type
	]), M = (n) => {
		if (t.isDisabled || t.isReadOnly) return;
		let r = i.current + n;
		switch (e.type) {
			case "dayPeriod":
				if (O(ne, n)) t.setSegment("dayPeriod", 0);
				else if (O(A, n)) t.setSegment("dayPeriod", 1);
				else break;
				h.focusNext();
				break;
			case "era": {
				let e = j.find((e) => O(e.formatted, n));
				e && (t.setSegment("era", e.era), h.focusNext());
				break;
			}
			case "day":
			case "hour":
			case "minute":
			case "second":
			case "month":
			case "year": {
				if (!C.isValidPartialNumber(r)) return;
				let a = C.parse(r), o = a;
				if (e.maxValue !== void 0 && a > e.maxValue && (o = C.parse(n)), isNaN(a)) return;
				t.setSegment(e.type, o), e.maxValue !== void 0 && (+(a + "0") > e.maxValue || r.length >= String(e.maxValue).length) ? (i.current = "", h.focusNext()) : i.current = r;
				break;
			}
		}
	}, N = () => {
		i.current = "", n.current && g(n.current, { containingElement: ee(n.current) }), window.getSelection()?.collapse(n.current);
	}, P = (0, z.useRef)(typeof document < "u" ? document : null);
	v(P, "selectionchange", () => {
		let e = window.getSelection();
		e?.anchorNode && T(n.current, e?.anchorNode) && te() === n.current && e.collapse(n.current);
	});
	let F = (0, z.useRef)("");
	v(n, "beforeinput", (r) => {
		if (n.current) switch (r.preventDefault(), r.inputType) {
			case "deleteContentBackward":
			case "deleteContentForward":
				C.isValidPartialNumber(e.text) && !t.isReadOnly && E();
				break;
			case "insertCompositionText":
				F.current = n.current.textContent, n.current.textContent = n.current.textContent;
				break;
			default: r.data != null && M(r.data);
		}
	}), v(n, "input", (e) => {
		let { inputType: t, data: r } = e;
		t === "insertCompositionText" && (n.current && (n.current.textContent = F.current), r != null && (O(ne, r) || O(A, r)) && M(r));
	}), a(() => {
		let e = n.current;
		return () => {
			te() === e && (h.focusPrevious() || h.focusNext());
		};
	}, [n, h]);
	let I = m() || e.type === "timeZoneName" ? {
		role: "textbox",
		"aria-valuemax": null,
		"aria-valuemin": null,
		"aria-valuetext": null,
		"aria-valuenow": null
	} : {};
	e !== (0, z.useMemo)(() => t.segments.find((e) => e.isEditable), [t.segments]) && !t.isInvalid && (p = void 0);
	let L = u(), R = !t.isDisabled && !t.isReadOnly && e.isEditable, ae = e.type === "literal" ? "" : c.of(e.type), oe = w({
		"aria-label": `${ae}${l ? `, ${l}` : ""}${f ? ", " : ""}`,
		"aria-labelledby": f
	});
	if (e.type === "literal") return { segmentProps: { "aria-hidden": !0 } };
	let se = { caretColor: "transparent" };
	if (s === "rtl") {
		se.unicodeBidi = "embed";
		let t = y[e.type];
		(t === "numeric" || t === "2-digit") && (se.direction = "ltr");
	}
	return { segmentProps: d(S, oe, {
		id: L,
		...I,
		...D,
		"aria-invalid": t.isInvalid ? "true" : void 0,
		"aria-describedby": p,
		"aria-readonly": t.isReadOnly || !e.isEditable ? "true" : void 0,
		"data-placeholder": e.isPlaceholder || void 0,
		contentEditable: R,
		suppressContentEditableWarning: R,
		spellCheck: R ? "false" : void 0,
		autoCorrect: R ? "off" : void 0,
		enterKeyHint: R ? "next" : void 0,
		inputMode: t.isDisabled || e.type === "dayPeriod" || e.type === "era" || !R ? void 0 : "numeric",
		tabIndex: t.isDisabled ? void 0 : 0,
		onFocus: N,
		style: se,
		onPointerDown(e) {
			e.stopPropagation();
		},
		onMouseDown(e) {
			e.stopPropagation();
		}
	}) };
}
function oa(e) {
	e.sort();
	let t = e[0], n = e[e.length - 1];
	for (let e = 0; e < t.length; e++) if (t[e] !== n[e]) return e;
	return 0;
}
var sa = {};
sa = {
	rangeOverflow: (e) => `يجب أن تكون القيمة ${e.maxValue} أو قبل ذلك.`,
	rangeReversed: "تاريخ البدء يجب أن يكون قبل تاريخ الانتهاء.",
	rangeUnderflow: (e) => `يجب أن تكون القيمة ${e.minValue} أو بعد ذلك.`,
	unavailableDate: "البيانات المحددة غير متاحة."
};
var ca = {};
ca = {
	rangeOverflow: (e) => `Стойността трябва да е ${e.maxValue} или по-ранна.`,
	rangeReversed: "Началната дата трябва да е преди крайната.",
	rangeUnderflow: (e) => `Стойността трябва да е ${e.minValue} или по-късно.`,
	unavailableDate: "Избраната дата не е налична."
};
var la = {};
la = {
	rangeOverflow: (e) => `Hodnota musí být ${e.maxValue} nebo dřívější.`,
	rangeReversed: "Datum zahájení musí předcházet datu ukončení.",
	rangeUnderflow: (e) => `Hodnota musí být ${e.minValue} nebo pozdější.`,
	unavailableDate: "Vybrané datum není k dispozici."
};
var ua = {};
ua = {
	rangeOverflow: (e) => `Værdien skal være ${e.maxValue} eller tidligere.`,
	rangeReversed: "Startdatoen skal være før slutdatoen.",
	rangeUnderflow: (e) => `Værdien skal være ${e.minValue} eller nyere.`,
	unavailableDate: "Den valgte dato er ikke tilgængelig."
};
var da = {};
da = {
	rangeOverflow: (e) => `Der Wert muss ${e.maxValue} oder früher sein.`,
	rangeReversed: "Das Startdatum muss vor dem Enddatum liegen.",
	rangeUnderflow: (e) => `Der Wert muss ${e.minValue} oder später sein.`,
	unavailableDate: "Das ausgewählte Datum ist nicht verfügbar."
};
var fa = {};
fa = {
	rangeOverflow: (e) => `Η τιμή πρέπει να είναι ${e.maxValue} ή παλαιότερη.`,
	rangeReversed: "Η ημερομηνία έναρξης πρέπει να είναι πριν από την ημερομηνία λήξης.",
	rangeUnderflow: (e) => `Η τιμή πρέπει να είναι ${e.minValue} ή μεταγενέστερη.`,
	unavailableDate: "Η επιλεγμένη ημερομηνία δεν είναι διαθέσιμη."
};
var pa = {};
pa = {
	rangeUnderflow: (e) => `Value must be ${e.minValue} or later.`,
	rangeOverflow: (e) => `Value must be ${e.maxValue} or earlier.`,
	rangeReversed: "Start date must be before end date.",
	unavailableDate: "Selected date unavailable."
};
var ma = {};
ma = {
	rangeOverflow: (e) => `El valor debe ser ${e.maxValue} o anterior.`,
	rangeReversed: "La fecha de inicio debe ser anterior a la fecha de finalización.",
	rangeUnderflow: (e) => `El valor debe ser ${e.minValue} o posterior.`,
	unavailableDate: "Fecha seleccionada no disponible."
};
var ha = {};
ha = {
	rangeOverflow: (e) => `Väärtus peab olema ${e.maxValue} või varasem.`,
	rangeReversed: "Alguskuupäev peab olema enne lõppkuupäeva.",
	rangeUnderflow: (e) => `Väärtus peab olema ${e.minValue} või hilisem.`,
	unavailableDate: "Valitud kuupäev pole saadaval."
};
var ga = {};
ga = {
	rangeOverflow: (e) => `Arvon on oltava ${e.maxValue} tai sitä aikaisempi.`,
	rangeReversed: "Aloituspäivän on oltava ennen lopetuspäivää.",
	rangeUnderflow: (e) => `Arvon on oltava ${e.minValue} tai sitä myöhäisempi.`,
	unavailableDate: "Valittu päivämäärä ei ole käytettävissä."
};
var _a = {};
_a = {
	rangeOverflow: (e) => `La valeur doit être ${e.maxValue} ou antérieure.`,
	rangeReversed: "La date de début doit être antérieure à la date de fin.",
	rangeUnderflow: (e) => `La valeur doit être ${e.minValue} ou ultérieure.`,
	unavailableDate: "La date sélectionnée n’est pas disponible."
};
var va = {};
va = {
	rangeOverflow: (e) => `הערך חייב להיות ${e.maxValue} או מוקדם יותר.`,
	rangeReversed: "תאריך ההתחלה חייב להיות לפני תאריך הסיום.",
	rangeUnderflow: (e) => `הערך חייב להיות ${e.minValue} או מאוחר יותר.`,
	unavailableDate: "התאריך הנבחר אינו זמין."
};
var ya = {};
ya = {
	rangeOverflow: (e) => `Vrijednost mora biti ${e.maxValue} ili ranije.`,
	rangeReversed: "Datum početka mora biti prije datuma završetka.",
	rangeUnderflow: (e) => `Vrijednost mora biti ${e.minValue} ili kasnije.`,
	unavailableDate: "Odabrani datum nije dostupan."
};
var ba = {};
ba = {
	rangeOverflow: (e) => `Az értéknek ${e.maxValue} vagy korábbinak kell lennie.`,
	rangeReversed: "A kezdő dátumnak a befejező dátumnál korábbinak kell lennie.",
	rangeUnderflow: (e) => `Az értéknek ${e.minValue} vagy későbbinek kell lennie.`,
	unavailableDate: "A kiválasztott dátum nem érhető el."
};
var xa = {};
xa = {
	rangeOverflow: (e) => `Il valore deve essere ${e.maxValue} o precedente.`,
	rangeReversed: "La data di inizio deve essere antecedente alla data di fine.",
	rangeUnderflow: (e) => `Il valore deve essere ${e.minValue} o successivo.`,
	unavailableDate: "Data selezionata non disponibile."
};
var Sa = {};
Sa = {
	rangeOverflow: (e) => `値は ${e.maxValue} 以下にする必要があります。`,
	rangeReversed: "開始日は終了日より前にする必要があります。",
	rangeUnderflow: (e) => `値は ${e.minValue} 以上にする必要があります。`,
	unavailableDate: "選択した日付は使用できません。"
};
var Ca = {};
Ca = {
	rangeOverflow: (e) => `값은 ${e.maxValue} 이전이어야 합니다.`,
	rangeReversed: "시작일은 종료일 이전이어야 합니다.",
	rangeUnderflow: (e) => `값은 ${e.minValue} 이후여야 합니다.`,
	unavailableDate: "선택한 날짜를 사용할 수 없습니다."
};
var wa = {};
wa = {
	rangeOverflow: (e) => `Reikšmė turi būti ${e.maxValue} arba ankstesnė.`,
	rangeReversed: "Pradžios data turi būti ankstesnė nei pabaigos data.",
	rangeUnderflow: (e) => `Reikšmė turi būti ${e.minValue} arba naujesnė.`,
	unavailableDate: "Pasirinkta data nepasiekiama."
};
var Ta = {};
Ta = {
	rangeOverflow: (e) => `Vērtībai ir jābūt ${e.maxValue} vai agrākai.`,
	rangeReversed: "Sākuma datumam ir jābūt pirms beigu datuma.",
	rangeUnderflow: (e) => `Vērtībai ir jābūt ${e.minValue} vai vēlākai.`,
	unavailableDate: "Atlasītais datums nav pieejams."
};
var Ea = {};
Ea = {
	rangeOverflow: (e) => `Verdien må være ${e.maxValue} eller tidligere.`,
	rangeReversed: "Startdatoen må være før sluttdatoen.",
	rangeUnderflow: (e) => `Verdien må være ${e.minValue} eller senere.`,
	unavailableDate: "Valgt dato utilgjengelig."
};
var Da = {};
Da = {
	rangeOverflow: (e) => `Waarde moet ${e.maxValue} of eerder zijn.`,
	rangeReversed: "De startdatum moet voor de einddatum liggen.",
	rangeUnderflow: (e) => `Waarde moet ${e.minValue} of later zijn.`,
	unavailableDate: "Geselecteerde datum niet beschikbaar."
};
var Oa = {};
Oa = {
	rangeOverflow: (e) => `Wartość musi mieć wartość ${e.maxValue} lub wcześniejszą.`,
	rangeReversed: "Data rozpoczęcia musi być wcześniejsza niż data zakończenia.",
	rangeUnderflow: (e) => `Wartość musi mieć wartość ${e.minValue} lub późniejszą.`,
	unavailableDate: "Wybrana data jest niedostępna."
};
var ka = {};
ka = {
	rangeOverflow: (e) => `O valor deve ser ${e.maxValue} ou anterior.`,
	rangeReversed: "A data inicial deve ser anterior à data final.",
	rangeUnderflow: (e) => `O valor deve ser ${e.minValue} ou posterior.`,
	unavailableDate: "Data selecionada indisponível."
};
var Aa = {};
Aa = {
	rangeOverflow: (e) => `O valor tem de ser ${e.maxValue} ou anterior.`,
	rangeReversed: "A data de início deve ser anterior à data de fim.",
	rangeUnderflow: (e) => `O valor tem de ser ${e.minValue} ou posterior.`,
	unavailableDate: "Data selecionada indisponível."
};
var ja = {};
ja = {
	rangeOverflow: (e) => `Valoarea trebuie să fie ${e.maxValue} sau anterioară.`,
	rangeReversed: "Data de început trebuie să fie anterioară datei de sfârșit.",
	rangeUnderflow: (e) => `Valoarea trebuie să fie ${e.minValue} sau ulterioară.`,
	unavailableDate: "Data selectată nu este disponibilă."
};
var Ma = {};
Ma = {
	rangeOverflow: (e) => `Значение должно быть не позже ${e.maxValue}.`,
	rangeReversed: "Дата начала должна предшествовать дате окончания.",
	rangeUnderflow: (e) => `Значение должно быть не раньше ${e.minValue}.`,
	unavailableDate: "Выбранная дата недоступна."
};
var Na = {};
Na = {
	rangeOverflow: (e) => `Hodnota musí byť ${e.maxValue} alebo skoršia.`,
	rangeReversed: "Dátum začiatku musí byť skorší ako dátum konca.",
	rangeUnderflow: (e) => `Hodnota musí byť ${e.minValue} alebo neskoršia.`,
	unavailableDate: "Vybratý dátum je nedostupný."
};
var Pa = {};
Pa = {
	rangeOverflow: (e) => `Vrednost mora biti ${e.maxValue} ali starejša.`,
	rangeReversed: "Začetni datum mora biti pred končnim datumom.",
	rangeUnderflow: (e) => `Vrednost mora biti ${e.minValue} ali novejša.`,
	unavailableDate: "Izbrani datum ni na voljo."
};
var Fa = {};
Fa = {
	rangeOverflow: (e) => `Vrednost mora da bude ${e.maxValue} ili starija.`,
	rangeReversed: "Datum početka mora biti pre datuma završetka.",
	rangeUnderflow: (e) => `Vrednost mora da bude ${e.minValue} ili novija.`,
	unavailableDate: "Izabrani datum nije dostupan."
};
var Ia = {};
Ia = {
	rangeOverflow: (e) => `Värdet måste vara ${e.maxValue} eller tidigare.`,
	rangeReversed: "Startdatumet måste vara före slutdatumet.",
	rangeUnderflow: (e) => `Värdet måste vara ${e.minValue} eller senare.`,
	unavailableDate: "Det valda datumet är inte tillgängligt."
};
var La = {};
La = {
	rangeOverflow: (e) => `Değer, ${e.maxValue} veya öncesi olmalıdır.`,
	rangeReversed: "Başlangıç tarihi bitiş tarihinden önce olmalıdır.",
	rangeUnderflow: (e) => `Değer, ${e.minValue} veya sonrası olmalıdır.`,
	unavailableDate: "Seçilen tarih kullanılamıyor."
};
var Ra = {};
Ra = {
	rangeOverflow: (e) => `Значення має бути не пізніше ${e.maxValue}.`,
	rangeReversed: "Дата початку має передувати даті завершення.",
	rangeUnderflow: (e) => `Значення має бути не раніше ${e.minValue}.`,
	unavailableDate: "Вибрана дата недоступна."
};
var za = {};
za = {
	rangeOverflow: (e) => `值必须是 ${e.maxValue} 或更早日期。`,
	rangeReversed: "开始日期必须早于结束日期。",
	rangeUnderflow: (e) => `值必须是 ${e.minValue} 或更晚日期。`,
	unavailableDate: "所选日期不可用。"
};
var Ba = {};
Ba = {
	rangeOverflow: (e) => `值必須是 ${e.maxValue} 或更早。`,
	rangeReversed: "開始日期必須在結束日期之前。",
	rangeUnderflow: (e) => `值必須是 ${e.minValue} 或更晚。`,
	unavailableDate: "所選日期無法使用。"
};
var Va = {};
Va = {
	"ar-AE": sa,
	"bg-BG": ca,
	"cs-CZ": la,
	"da-DK": ua,
	"de-DE": da,
	"el-GR": fa,
	"en-US": pa,
	"es-ES": ma,
	"et-EE": ha,
	"fi-FI": ga,
	"fr-FR": _a,
	"he-IL": va,
	"hr-HR": ya,
	"hu-HU": ba,
	"it-IT": xa,
	"ja-JP": Sa,
	"ko-KR": Ca,
	"lt-LT": wa,
	"lv-LV": Ta,
	"nb-NO": Ea,
	"nl-NL": Da,
	"pl-PL": Oa,
	"pt-BR": ka,
	"pt-PT": Aa,
	"ro-RO": ja,
	"ru-RU": Ma,
	"sk-SK": Na,
	"sl-SI": Pa,
	"sr-SP": Fa,
	"sv-SE": Ia,
	"tr-TR": La,
	"uk-UA": Ra,
	"zh-CN": za,
	"zh-TW": Ba
};
function Ha(e) {
	return e && e.__esModule ? e.default : e;
}
var Ua = new h(Ha(Va));
function Wa() {
	let e = typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
	try {
		Intl.DateTimeFormat.supportedLocalesOf([e]);
	} catch {
		e = "en-US";
	}
	return e;
}
function Ga(t, n, r, i, a) {
	let o = t != null && r != null && t.compare(r) > 0, s = t != null && n != null && t.compare(n) < 0, c = t != null && i?.(t) || !1, l = o || s || c, u = [];
	if (l) {
		let t = Wa(), i = h.getGlobalDictionaryForPackage("@react-stately/datepicker") || Ua, l = new e(t, i), d = new Q(t, Ja({}, a)), f = d.resolvedOptions().timeZone;
		s && n != null && u.push(l.format("rangeUnderflow", { minValue: d.format(n.toDate(f)) })), o && r != null && u.push(l.format("rangeOverflow", { maxValue: d.format(r.toDate(f)) })), c && u.push(l.format("unavailableDate"));
	}
	return {
		isInvalid: l,
		validationErrors: u,
		validationDetails: {
			badInput: c,
			customError: !1,
			patternMismatch: !1,
			rangeOverflow: o,
			rangeUnderflow: s,
			stepMismatch: !1,
			tooLong: !1,
			tooShort: !1,
			typeMismatch: !1,
			valueMissing: !1,
			valid: !l
		}
	};
}
var Ka = {
	year: "numeric",
	month: "numeric",
	day: "numeric",
	hour: "numeric",
	minute: "2-digit",
	second: "2-digit"
}, qa = {
	year: "numeric",
	month: "2-digit",
	day: "2-digit",
	hour: "2-digit",
	minute: "2-digit",
	second: "2-digit"
};
function Ja(e, t) {
	e = {
		...t.shouldForceLeadingZeros ? qa : Ka,
		...e
	};
	let n = t.granularity || "minute", r = Object.keys(e), i = r.indexOf(t.maxGranularity ?? "year");
	i < 0 && (i = 0);
	let a = r.indexOf(n);
	if (a < 0 && (a = 2), i > a) throw Error("maxGranularity must be greater than granularity");
	let o = r.slice(i, a + 1).reduce((t, n) => (t[n] = e[n], t), {});
	return t.hourCycle != null && (o.hour12 = t.hourCycle === 12), o.timeZone = t.timeZone || "UTC", (n === "hour" || n === "minute" || n === "second") && t.timeZone && !t.hideTimeZone && (o.timeZoneName = "short"), t.showEra && i === 0 && (o.era = "short"), o;
}
function Ya(e, t) {
	if (e === null) return null;
	if (e) return K(e, t);
}
function Xa(e, t, n, r) {
	if (e) return Ya(e, n);
	let i = K(Ue(r ?? Xe()).set({
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	}), n);
	return t === "year" || t === "month" || t === "day" ? yt(i) : r ? i : G(i);
}
function Za(e, t) {
	let n = e && "timeZone" in e ? e.timeZone : void 0, r = e && "minute" in e ? "minute" : "day";
	if (e && t && !(t in e)) throw Error("Invalid granularity " + t + " for value " + e.toString());
	let [i, a] = (0, z.useState)([r, n]);
	e && (i[0] !== r || i[1] !== n) && a([r, n]), t ||= e ? r : i[0];
	let o = e ? n : i[1];
	return [t, o];
}
var Qa = new h({
	ach: {
		year: "mwaka",
		month: "dwe",
		day: "nino"
	},
	af: {
		year: "jjjj",
		month: "mm",
		day: "dd"
	},
	am: {
		year: "ዓዓዓዓ",
		month: "ሚሜ",
		day: "ቀቀ"
	},
	an: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	ar: {
		year: "سنة",
		month: "شهر",
		day: "يوم"
	},
	ast: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	az: {
		year: "iiii",
		month: "aa",
		day: "gg"
	},
	be: {
		year: "гггг",
		month: "мм",
		day: "дд"
	},
	bg: {
		year: "гггг",
		month: "мм",
		day: "дд"
	},
	bn: {
		year: "yyyy",
		month: "মিমি",
		day: "dd"
	},
	br: {
		year: "bbbb",
		month: "mm",
		day: "dd"
	},
	bs: {
		year: "gggg",
		month: "mm",
		day: "dd"
	},
	ca: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	cak: {
		year: "jjjj",
		month: "ii",
		day: "q'q'"
	},
	ckb: {
		year: "ساڵ",
		month: "مانگ",
		day: "ڕۆژ"
	},
	cs: {
		year: "rrrr",
		month: "mm",
		day: "dd"
	},
	cy: {
		year: "bbbb",
		month: "mm",
		day: "dd"
	},
	da: {
		year: "åååå",
		month: "mm",
		day: "dd"
	},
	de: {
		year: "jjjj",
		month: "mm",
		day: "tt"
	},
	dsb: {
		year: "llll",
		month: "mm",
		day: "źź"
	},
	el: {
		year: "εεεε",
		month: "μμ",
		day: "ηη"
	},
	en: {
		year: "yyyy",
		month: "mm",
		day: "dd"
	},
	eo: {
		year: "jjjj",
		month: "mm",
		day: "tt"
	},
	es: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	et: {
		year: "aaaa",
		month: "kk",
		day: "pp"
	},
	eu: {
		year: "uuuu",
		month: "hh",
		day: "ee"
	},
	fa: {
		year: "سال",
		month: "ماه",
		day: "روز"
	},
	ff: {
		year: "hhhh",
		month: "ll",
		day: "ññ"
	},
	fi: {
		year: "vvvv",
		month: "kk",
		day: "pp"
	},
	fr: {
		year: "aaaa",
		month: "mm",
		day: "jj"
	},
	fy: {
		year: "jjjj",
		month: "mm",
		day: "dd"
	},
	ga: {
		year: "bbbb",
		month: "mm",
		day: "ll"
	},
	gd: {
		year: "bbbb",
		month: "mm",
		day: "ll"
	},
	gl: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	he: {
		year: "שנה",
		month: "חודש",
		day: "יום"
	},
	hr: {
		year: "gggg",
		month: "mm",
		day: "dd"
	},
	hsb: {
		year: "llll",
		month: "mm",
		day: "dd"
	},
	hu: {
		year: "éééé",
		month: "hh",
		day: "nn"
	},
	ia: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	id: {
		year: "tttt",
		month: "bb",
		day: "hh"
	},
	is: {
		year: "áááá",
		month: "mm",
		day: "dd"
	},
	it: {
		year: "aaaa",
		month: "mm",
		day: "gg"
	},
	ja: {
		year: "年",
		month: "月",
		day: "日"
	},
	ka: {
		year: "წწწწ",
		month: "თთ",
		day: "რრ"
	},
	kk: {
		year: "жжжж",
		month: "аа",
		day: "кк"
	},
	kn: {
		year: "ವವವವ",
		month: "ಮಿಮೀ",
		day: "ದಿದಿ"
	},
	ko: {
		year: "연도",
		month: "월",
		day: "일"
	},
	lb: {
		year: "jjjj",
		month: "mm",
		day: "dd"
	},
	lo: {
		year: "ປປປປ",
		month: "ດດ",
		day: "ວວ"
	},
	lt: {
		year: "mmmm",
		month: "mm",
		day: "dd"
	},
	lv: {
		year: "gggg",
		month: "mm",
		day: "dd"
	},
	meh: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	ml: {
		year: "വർഷം",
		month: "മാസം",
		day: "തീയതി"
	},
	ms: {
		year: "tttt",
		month: "mm",
		day: "hh"
	},
	nb: {
		year: "åååå",
		month: "mm",
		day: "dd"
	},
	nl: {
		year: "jjjj",
		month: "mm",
		day: "dd"
	},
	nn: {
		year: "åååå",
		month: "mm",
		day: "dd"
	},
	no: {
		year: "åååå",
		month: "mm",
		day: "dd"
	},
	oc: {
		year: "aaaa",
		month: "mm",
		day: "jj"
	},
	pl: {
		year: "rrrr",
		month: "mm",
		day: "dd"
	},
	pt: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	rm: {
		year: "oooo",
		month: "mm",
		day: "dd"
	},
	ro: {
		year: "aaaa",
		month: "ll",
		day: "zz"
	},
	ru: {
		year: "гггг",
		month: "мм",
		day: "дд"
	},
	sc: {
		year: "aaaa",
		month: "mm",
		day: "dd"
	},
	scn: {
		year: "aaaa",
		month: "mm",
		day: "jj"
	},
	sk: {
		year: "rrrr",
		month: "mm",
		day: "dd"
	},
	sl: {
		year: "llll",
		month: "mm",
		day: "dd"
	},
	sr: {
		year: "гггг",
		month: "мм",
		day: "дд"
	},
	"sr-Latn": {
		year: "gggg",
		month: "mm",
		day: "dd"
	},
	sv: {
		year: "åååå",
		month: "mm",
		day: "dd"
	},
	szl: {
		year: "rrrr",
		month: "mm",
		day: "dd"
	},
	tg: {
		year: "сссс",
		month: "мм",
		day: "рр"
	},
	th: {
		year: "ปปปป",
		month: "ดด",
		day: "วว"
	},
	tr: {
		year: "yyyy",
		month: "aa",
		day: "gg"
	},
	uk: {
		year: "рррр",
		month: "мм",
		day: "дд"
	},
	"zh-CN": {
		year: "年",
		month: "月",
		day: "日"
	},
	"zh-TW": {
		year: "年",
		month: "月",
		day: "日"
	}
}, "en");
function $a(e, t, n) {
	return e === "era" || e === "dayPeriod" ? t : e === "year" || e === "month" || e === "day" ? Qa.getStringForLocale(e, n) : "––";
}
var $ = class e {
	constructor(e, t, n) {
		if (this.era = n?.era ?? null, this.calendar = e, this.year = n?.year ?? null, this.month = n?.month ?? null, this.day = n?.day ?? null, this.hour = n?.hour ?? null, this.hourCycle = t, this.dayPeriod = null, this.minute = n?.minute ?? null, this.second = n?.second ?? null, this.millisecond = n?.millisecond ?? null, this.offset = "offset" in (n ?? {}) ? n.offset : null, this.hour != null) {
			let [e, n] = to(this.hour, t);
			this.dayPeriod = e, this.hour = n;
		}
	}
	copy() {
		let t = new e(this.calendar, this.hourCycle);
		return t.era = this.era, t.year = this.year, t.month = this.month, t.day = this.day, t.hour = this.hour, t.dayPeriod = this.dayPeriod, t.minute = this.minute, t.second = this.second, t.millisecond = this.millisecond, t.offset = this.offset, t;
	}
	isComplete(e) {
		return e.every((e) => this[e] != null);
	}
	validate(e, t) {
		return t.every((t) => {
			if ((t === "hour" || t === "dayPeriod") && "hour" in e) {
				let [t, n] = to(e.hour, this.hourCycle);
				return this.dayPeriod === t && this.hour === n;
			}
			return this[t] === e[t];
		});
	}
	isCleared(e) {
		return e.every((e) => this[e] === null);
	}
	set(e, t, n) {
		let r = this.copy();
		return r[e] = t, e === "hour" && r.dayPeriod == null && "hour" in n && (r.dayPeriod = to(n.hour, this.hourCycle)[0]), e === "year" && r.era == null && (r.era = n.era), e !== "second" && e !== "literal" && e !== "timeZoneName" && (r.offset = null), r;
	}
	clear(e) {
		let t = this.copy();
		return t[e] = null, e === "year" && (t.era = null), t.offset = null, t;
	}
	cycle(e, t, n, r) {
		let i = this.copy();
		if (i[e] == null && e !== "dayPeriod" && e !== "era") {
			if (e === "hour" && "hour" in n) {
				let [e, t] = to(n.hour, this.hourCycle);
				i.dayPeriod = e, i.hour = t;
			} else i[e] = n[e];
			return e === "year" && i.era == null && (i.era = n.era), i;
		}
		switch (e) {
			case "era": {
				let e = this.calendar.getEras(), n = e.indexOf(i.era);
				n = eo(n, t, 0, e.length - 1), i.era = e[n];
				break;
			}
			case "year": {
				let r = new Y(this.calendar, this.era ?? n.era, this.year ?? n.year, this.month ?? 1, this.day ?? 1);
				r = r.cycle(e, t, { round: e === "year" }), i.era = r.era, i.year = r.year;
				break;
			}
			case "month":
				i.month = eo(i.month ?? 1, t, 1, this.calendar.getMaximumMonthsInYear());
				break;
			case "day":
				i.day = eo(i.day ?? 1, t, 1, this.calendar.getMaximumDaysInMonth());
				break;
			case "hour": {
				let e = r.some((e) => [
					"year",
					"month",
					"day"
				].includes(e));
				if ("timeZone" in n && (!e || i.year != null && i.month != null && i.day != null)) {
					let e = this.toValue(n);
					e = e.cycle("hour", t, {
						hourCycle: this.hourCycle === "h12" ? 12 : 24,
						round: !1
					});
					let [r, a] = to(e.hour, this.hourCycle);
					i.hour = a, i.dayPeriod = r, i.offset = e.offset;
				} else {
					let e = i.hour ?? 0, r = this.getSegmentLimits("hour");
					i.hour = eo(e, t, r.minValue, r.maxValue), i.dayPeriod == null && "hour" in n && (i.dayPeriod = to(n.hour, this.hourCycle)[0]);
				}
				break;
			}
			case "dayPeriod":
				i.dayPeriod = eo(i.dayPeriod ?? 0, t, 0, 1);
				break;
			case "minute":
				i.minute = eo(i.minute ?? 0, t, 0, 59, !0);
				break;
			case "second": i.second = eo(i.second ?? 0, t, 0, 59, !0);
		}
		return i;
	}
	toValue(e) {
		if ("hour" in e) {
			let t = this.hour;
			t == null ? (this.hourCycle === "h12" || this.hourCycle === "h11") && (t = this.dayPeriod === 1 ? 12 : 0) : t = no(t, this.dayPeriod ?? 0, this.hourCycle);
			let n = e.set({
				era: this.era ?? e.era,
				year: this.year ?? e.year,
				month: this.month ?? e.month,
				day: this.day ?? e.day,
				hour: t ?? e.hour,
				minute: this.minute ?? e.minute,
				second: this.second ?? e.second,
				millisecond: this.millisecond ?? e.millisecond
			});
			return "offset" in n && this.offset != null && n.offset !== this.offset && (n = n.add({ milliseconds: n.offset - this.offset })), n;
		}
		return e.set({
			era: this.era ?? e.era,
			year: this.year ?? e.year,
			month: this.month ?? e.month,
			day: this.day ?? e.day
		});
	}
	getSegmentLimits(e) {
		switch (e) {
			case "era": {
				let e = this.calendar.getEras();
				return {
					value: this.era == null ? e.length - 1 : e.indexOf(this.era),
					minValue: 0,
					maxValue: e.length - 1
				};
			}
			case "year": return {
				value: this.year,
				minValue: 1,
				maxValue: 9999
			};
			case "month": return {
				value: this.month,
				minValue: 1,
				maxValue: this.calendar.getMaximumMonthsInYear()
			};
			case "day": return {
				value: this.day,
				minValue: 1,
				maxValue: this.calendar.getMaximumDaysInMonth()
			};
			case "dayPeriod": return {
				value: this.dayPeriod,
				minValue: 0,
				maxValue: 1
			};
			case "hour": {
				let e = 0, t = 23;
				return this.hourCycle === "h12" ? (e = 1, t = 12) : this.hourCycle === "h11" && (e = 0, t = 11), {
					value: this.hour,
					minValue: e,
					maxValue: t
				};
			}
			case "minute": return {
				value: this.minute,
				minValue: 0,
				maxValue: 59
			};
			case "second": return {
				value: this.second,
				minValue: 0,
				maxValue: 59
			};
		}
	}
};
function eo(e, t, n, r, i = !1) {
	if (i) {
		e += Math.sign(t), e < n && (e = r);
		let i = Math.abs(t);
		e = t > 0 ? Math.ceil(e / i) * i : Math.floor(e / i) * i, e > r && (e = n);
	} else e += t, e < n ? e = r - (n - e - 1) : e > r && (e = n + (e - r - 1));
	return e;
}
function to(e, t) {
	let n = +(e >= 12);
	switch (t) {
		case "h11":
			e >= 12 && (e -= 12);
			break;
		case "h12":
			e === 0 ? e = 12 : e > 12 && (e -= 12);
			break;
		case "h23":
			n = null;
			break;
		case "h24": e += 1, n = null;
	}
	return [n, e];
}
function no(e, t, n) {
	switch (n) {
		case "h11":
			t === 1 && (e += 12);
			break;
		case "h12":
			e === 12 && (e = 0), t === 1 && (e += 12);
			break;
		case "h24": --e;
	}
	return e;
}
var ro = {
	year: !0,
	month: !0,
	day: !0,
	hour: !0,
	minute: !0,
	second: !0,
	dayPeriod: !0,
	era: !0
}, io = {
	year: 5,
	month: 2,
	day: 7,
	hour: 2,
	minute: 15,
	second: 15
}, ao = {
	dayperiod: "dayPeriod",
	relatedYear: "year",
	yearName: "literal",
	unknown: "literal"
};
function oo(e) {
	let { locale: t, createCalendar: n, hideTimeZone: r, isDisabled: i = !1, isReadOnly: a = !1, isRequired: o = !1, minValue: s, maxValue: c, isDateUnavailable: l } = e, u = e.value || e.defaultValue || e.placeholderValue || null, [d, p] = Za(u, e.granularity), m = p || "UTC";
	if (u && !(d in u)) throw Error("Invalid granularity " + d + " for value " + u.toString());
	let [h, g] = (0, z.useMemo)(() => {
		let r = new Q(t, {
			dateStyle: "short",
			timeStyle: "short",
			hour12: e.hourCycle == null ? void 0 : e.hourCycle === 12
		}).resolvedOptions();
		return [n(r.calendar), r.hourCycle];
	}, [
		t,
		e.hourCycle,
		n
	]), [_, v] = f(e.value, e.defaultValue ?? null, e.onChange), [y] = (0, z.useState)(_), b = (0, z.useMemo)(() => Ya(_, h) ?? null, [_, h]), [x, S] = (0, z.useState)(() => new $(h, g, b)), C = h.identifier === "gregory" && x.era === "BC", w = (0, z.useMemo)(() => ({
		granularity: d,
		maxGranularity: e.maxGranularity ?? "year",
		timeZone: p,
		hideTimeZone: r,
		hourCycle: e.hourCycle,
		showEra: C,
		shouldForceLeadingZeros: e.shouldForceLeadingZeros
	}), [
		e.maxGranularity,
		d,
		e.hourCycle,
		e.shouldForceLeadingZeros,
		p,
		r,
		C
	]), T = (0, z.useMemo)(() => Ja({}, w), [w]), E = (0, z.useMemo)(() => new Q(t, T), [t, T]), D = (0, z.useMemo)(() => E.resolvedOptions(), [E]), O = (0, z.useMemo)(() => Xa(e.placeholderValue, d, h, p), [
		e.placeholderValue,
		d,
		h,
		p
	]), k = (0, z.useMemo)(() => {
		let t = g === "h11" || g === "h12", n = [
			"era",
			"year",
			"month",
			"day",
			"hour",
			...t ? ["dayPeriod"] : [],
			"minute",
			"second"
		], r = n.indexOf(e.maxGranularity || "era"), i = n.indexOf(d === "hour" && t ? "dayPeriod" : d);
		return n.slice(r, i + 1);
	}, [
		e.maxGranularity,
		d,
		g
	]), [ee, te] = (0, z.useState)(b), [ne, re] = (0, z.useState)(h), [A, ie] = (0, z.useState)(g);
	(b !== ee || g !== A || !ze(h, ne)) && (x = new $(h, g, b), te(b), re(h), ie(g), S(x));
	let j = (t) => {
		if (!(e.isDisabled || e.isReadOnly)) {
			if (t == null || t instanceof $ && t.isCleared(k)) S(new $(h, g, b)), v(null);
			else if (!(t instanceof $)) t = K(t, u?.calendar || new H()), S(new $(h, g, b)), v(t);
			else {
				if (t.isComplete(k)) {
					let e = t.toValue(b ?? O);
					if (t.validate(e, k)) {
						let t = K(e, u?.calendar || new H());
						if (!_ || t.compare(_) !== 0) {
							S(new $(h, g, b)), v(t);
							return;
						}
					}
				}
				S(t);
			}
		}
	}, M = (0, z.useMemo)(() => x.toValue(b ?? O).toDate(m), [
		x,
		m,
		b,
		O
	]), N = (0, z.useMemo)(() => so(M, x, E, D, h, t, d), [
		M,
		E,
		D,
		x,
		h,
		t,
		d
	]), P = (e, t) => {
		j(x.cycle(e, t, O, k));
	}, F = (0, z.useMemo)(() => Ga(_, s, c, l, w), [
		_,
		s,
		c,
		l,
		w
	]), I = ce({
		...e,
		value: _,
		builtinValidation: F
	}), L = I.displayValidation.isInvalid, R = e.validationState || (L ? "invalid" : null);
	return {
		...I,
		value: b,
		defaultValue: e.defaultValue ?? y,
		dateValue: M,
		calendar: h,
		setValue: j,
		segments: N,
		dateFormatter: E,
		validationState: R,
		isInvalid: L,
		granularity: d,
		maxGranularity: e.maxGranularity ?? "year",
		isDisabled: i,
		isReadOnly: a,
		isRequired: o,
		increment(e) {
			P(e, 1);
		},
		decrement(e) {
			P(e, -1);
		},
		incrementPage(e) {
			P(e, io[e] || 1);
		},
		decrementPage(e) {
			P(e, -(io[e] || 1));
		},
		incrementToMax(e) {
			let t = e === "hour" && g === "h12" ? 11 : x.getSegmentLimits(e).maxValue;
			j(x.set(e, t, O));
		},
		decrementToMin(e) {
			let t = e === "hour" && g === "h12" ? 12 : x.getSegmentLimits(e).minValue;
			j(x.set(e, t, O));
		},
		setSegment(e, t) {
			j(x.set(e, t, O));
		},
		confirmPlaceholder() {
			if (!(e.isDisabled || e.isReadOnly) && x.isComplete(k)) {
				let e = K(x.toValue(b ?? O), u?.calendar || new H());
				(!_ || e.compare(_) !== 0) && v(e), S(new $(h, g, b));
			}
		},
		clearSegment(e) {
			let t = x;
			e !== "timeZoneName" && e !== "literal" && (t = x.clear(e)), j(t);
		},
		formatValue(e) {
			if (!b) return "";
			let n = Ja(e, w);
			return new Q(t, n).format(M);
		},
		getDateFormatter(e, t) {
			return new Q(e, Ja({}, {
				...w,
				...t
			}));
		}
	};
}
function so(e, t, n, r, i, a, o) {
	let s = [
		"hour",
		"minute",
		"second"
	], c = n.formatToParts(e), l = new x(a, { useGrouping: !1 }), u = new x(a, {
		useGrouping: !1,
		minimumIntegerDigits: 2
	});
	for (let e of c) if (e.type === "year" || e.type === "month" || e.type === "day" || e.type === "hour") {
		let n = t[e.type] ?? 0;
		e.value = r[e.type] === "2-digit" ? u.format(n) : l.format(n);
	}
	let d = [];
	for (let e of c) {
		let n = ao[e.type] || e.type, r = ro[n];
		n === "era" && i.getEras().length === 1 && (r = !1);
		let c = ro[n] && t[e.type] == null, l = ro[n] ? $a(n, e.value, a) : null, u = {
			type: n,
			text: c ? l : e.value,
			...t.getSegmentLimits(n),
			isPlaceholder: c,
			placeholder: l,
			isEditable: r
		};
		n === "hour" ? (d.push({
			type: "literal",
			text: "⁦",
			isPlaceholder: !1,
			placeholder: "",
			isEditable: !1
		}), d.push(u), n === o && d.push({
			type: "literal",
			text: "⁩",
			isPlaceholder: !1,
			placeholder: "",
			isEditable: !1
		})) : s.includes(n) && n === o ? (d.push(u), d.push({
			type: "literal",
			text: "⁩",
			isPlaceholder: !1,
			placeholder: "",
			isEditable: !1
		})) : d.push(u);
	}
	return d;
}
function co(e) {
	let { placeholderValue: t = new on(), minValue: n, maxValue: r, defaultValue: i, granularity: a, validate: o } = e, [s, c] = f(e.value, i ?? null, e.onChange), l = s || t, u = l && "day" in l ? l : void 0, d = i && "timeZone" in i ? i.timeZone : void 0, p = (0, z.useMemo)(() => {
		let e = l && "timeZone" in l ? l.timeZone : void 0;
		return (e || d) && t ? xt(lo(t), e || d) : lo(t);
	}, [
		t,
		l,
		d
	]), m = (0, z.useMemo)(() => lo(n, u), [n, u]), h = (0, z.useMemo)(() => lo(r, u), [r, u]), g = (0, z.useMemo)(() => s && "day" in s ? bt(s) : s, [s]), _ = (0, z.useMemo)(() => s == null ? null : lo(s), [s]), v = (0, z.useMemo)(() => i == null ? null : lo(i), [i]);
	return {
		...oo({
			...e,
			value: _,
			defaultValue: v,
			minValue: m,
			maxValue: h,
			onChange: (e) => {
				c(u || d ? e : e && bt(e));
			},
			granularity: a || "minute",
			maxGranularity: "hour",
			placeholderValue: p ?? void 0,
			createCalendar: () => new H(),
			validate: (0, z.useCallback)(() => o?.(s), [o, s])
		}),
		timeValue: g
	};
}
function lo(e, t = We(Xe())) {
	return e ? "day" in e ? e : G(t, e) : null;
}
var uo = /* @__PURE__ */ (0, z.createContext)(null), fo = /* @__PURE__ */ (0, z.createContext)(null), po = /* @__PURE__ */ (0, z.createContext)(null), mo = /* @__PURE__ */ (0, z.createContext)(null), ho = /* @__PURE__ */ (0, z.forwardRef)(function(e, t) {
	[e, t] = A(e, t, uo);
	let { validationBehavior: n } = S(ae) || {}, i = e.validationBehavior ?? n ?? "native", { locale: a } = r(), o = oo({
		...e,
		locale: a,
		createCalendar: mr,
		validationBehavior: i
	}), s = (0, z.useRef)(null), [c, l] = k(!e["aria-label"] && !e["aria-labelledby"]), u = (0, z.useRef)(null), { labelProps: d, fieldProps: f, inputProps: p, descriptionProps: m, errorMessageProps: h, ...g } = ea({
		...P(e),
		label: l,
		inputRef: u,
		validationBehavior: i
	}, o, s), _ = N({
		...P(e),
		values: {
			state: o,
			isInvalid: o.isInvalid,
			isDisabled: o.isDisabled,
			isReadOnly: o.isReadOnly,
			isRequired: e.isRequired || !1
		},
		defaultClassName: "react-aria-DateField"
	}), v = O(e, { global: !0 });
	return delete v.id, /* @__PURE__ */ z.createElement(L, { values: [
		[po, o],
		[pe, {
			...f,
			ref: s,
			isInvalid: o.isInvalid,
			isDisabled: o.isDisabled
		}],
		[fe, {
			...p,
			ref: u
		}],
		[R, {
			...d,
			ref: c,
			elementType: "span"
		}],
		[b, { slots: {
			description: m,
			errorMessage: h
		} }],
		[se, g]
	] }, /* @__PURE__ */ z.createElement(j.div, {
		...v,
		..._,
		ref: t,
		slot: e.slot || void 0,
		"data-invalid": o.isInvalid || void 0,
		"data-disabled": o.isDisabled || void 0,
		"data-readonly": o.isReadOnly || void 0,
		"data-required": e.isRequired || void 0
	}), /* @__PURE__ */ z.createElement(fi, {
		autoComplete: e.autoComplete,
		name: e.name,
		isDisabled: e.isDisabled,
		state: o
	}));
}), go = /* @__PURE__ */ (0, z.forwardRef)(function(e, t) {
	[e, t] = A(e, t, fo);
	let { validationBehavior: n } = S(ae) || {}, i = e.validationBehavior ?? n ?? "native", { locale: a } = r(), o = co({
		...e,
		locale: a,
		validationBehavior: i
	}), s = (0, z.useRef)(null), [c, l] = k(!e["aria-label"] && !e["aria-labelledby"]), u = (0, z.useRef)(null), { labelProps: d, fieldProps: f, inputProps: p, descriptionProps: m, errorMessageProps: h, ...g } = ta({
		...P(e),
		label: l,
		inputRef: u,
		validationBehavior: i
	}, o, s), _ = N({
		...e,
		values: {
			state: o,
			isInvalid: o.isInvalid,
			isDisabled: o.isDisabled,
			isReadOnly: o.isReadOnly,
			isRequired: e.isRequired || !1
		},
		defaultClassName: "react-aria-TimeField"
	}), v = O(e, { global: !0 });
	return delete v.id, /* @__PURE__ */ z.createElement(L, { values: [
		[mo, o],
		[pe, {
			...f,
			ref: s,
			isInvalid: o.isInvalid,
			isDisabled: o.isDisabled
		}],
		[fe, {
			...p,
			ref: u
		}],
		[R, {
			...d,
			ref: c,
			elementType: "span"
		}],
		[b, { slots: {
			description: m,
			errorMessage: h
		} }],
		[se, g]
	] }, /* @__PURE__ */ z.createElement(j.div, {
		...v,
		..._,
		ref: t,
		slot: e.slot || void 0,
		"data-invalid": o.isInvalid || void 0,
		"data-disabled": o.isDisabled || void 0,
		"data-readonly": o.isReadOnly || void 0,
		"data-required": e.isRequired || void 0
	}));
}), _o = /* @__PURE__ */ (0, z.forwardRef)(function(e, t) {
	let n = (0, z.useContext)(po), r = (0, z.useContext)(mo);
	return n || r ? /* @__PURE__ */ z.createElement(yo, {
		...e,
		ref: t
	}) : /* @__PURE__ */ z.createElement(vo, {
		...e,
		ref: t
	});
}), vo = /* @__PURE__ */ (0, z.forwardRef)((e, t) => {
	let [n, i] = A({ slot: e.slot }, t, uo), { locale: a } = r(), o = oo({
		...n,
		locale: a,
		createCalendar: mr
	}), s = (0, z.useRef)(null), { fieldProps: c, inputProps: l } = ea({
		...n,
		inputRef: s
	}, o, i);
	return /* @__PURE__ */ z.createElement(L, { values: [
		[po, o],
		[fe, {
			...l,
			ref: s
		}],
		[pe, {
			...c,
			ref: i,
			isInvalid: o.isInvalid,
			isDisabled: o.isDisabled
		}]
	] }, /* @__PURE__ */ z.createElement(yo, e));
}), yo = /* @__PURE__ */ (0, z.forwardRef)((e, t) => {
	let { className: n, children: r } = e, i = (0, z.useContext)(po), a = (0, z.useContext)(mo), o = i ?? a;
	return /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement(ue, {
		...e,
		ref: t,
		slot: e.slot || void 0,
		className: n ?? "react-aria-DateInput",
		isReadOnly: o.isReadOnly,
		isInvalid: o.isInvalid,
		isDisabled: o.isDisabled
	}, o.segments.map((e, t) => /* @__PURE__ */ (0, z.cloneElement)(r(e), { key: t }))), /* @__PURE__ */ z.createElement(de, { className: "" }));
}), bo = /* @__PURE__ */ (0, z.forwardRef)(function({ segment: e, ...t }, n) {
	let r = (0, z.useContext)(po), i = (0, z.useContext)(mo), a = r ?? i, o = F(n), { segmentProps: s } = aa(e, a, o), { focusProps: c, isFocused: l, isFocusVisible: u } = y(), { hoverProps: f, isHovered: p } = I({
		...t,
		isDisabled: a.isDisabled || e.type === "literal"
	}), m = N({
		...t,
		values: {
			...e,
			isReadOnly: a.isReadOnly,
			isInvalid: a.isInvalid,
			isDisabled: a.isDisabled,
			isHovered: p,
			isFocused: l,
			isFocusVisible: u
		},
		defaultChildren: e.text,
		defaultClassName: "react-aria-DateSegment"
	});
	return /* @__PURE__ */ z.createElement(j.span, {
		...d(O(t, { global: !0 }), s, c, f),
		...m,
		style: s.style,
		ref: o,
		"data-placeholder": e.isPlaceholder || void 0,
		"data-invalid": a.isInvalid || void 0,
		"data-readonly": a.isReadOnly || void 0,
		"data-disabled": a.isDisabled || void 0,
		"data-type": e.type,
		"data-hovered": p || void 0,
		"data-focused": l || void 0,
		"data-focus-visible": u || void 0
	});
});
//#endregion
export { $e as A, Zt as C, Q as D, He as E, Re as M, Qe as N, Le as O, Be as S, yt as T, _o as _, go as a, on as b, Xe as c, ze as d, bo as f, sn as g, Cr as h, st as i, lt as j, et as k, De as l, H as m, ct as n, tt as o, Fe as p, nt as r, K as s, ho as t, Y as u, po as v, mr as w, Ie as x, We as y };

//# sourceMappingURL=DateField-BaLw2J5b-CSjqjxpp.js.map