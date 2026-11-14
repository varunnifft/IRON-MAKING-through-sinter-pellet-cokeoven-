import { b as e, d as t, n, r, y as i } from "./string-BvOnLx8K-BsWpS-s0.js";
//#region ../react/build/value-Fb9HFOxE.js
function a(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function o(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function s(e, t) {
	return (o(t) ? a : c)(e, t);
}
function c(e, t) {
	var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o;
	for (o = 0; o < r; ++o) i[o] = d(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
function l(e, t) {
	var n = /* @__PURE__ */ new Date();
	return e = +e, t = +t, function(r) {
		return n.setTime(e * (1 - r) + t * r), n;
	};
}
function u(e, t) {
	var n = {}, r = {}, i;
	for (i in (typeof e != "object" || !e) && (e = {}), (typeof t != "object" || !t) && (t = {}), t) i in e ? n[i] = d(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
function d(s, d) {
	var f = typeof d, p;
	return d == null || f === "boolean" ? n(d) : (f === "number" ? e : f === "string" ? (p = r(d)) ? (d = p, i) : t : d instanceof r ? i : d instanceof Date ? l : o(d) ? a : Array.isArray(d) ? c : typeof d.valueOf != "function" && typeof d.toString != "function" || isNaN(d) ? u : e)(s, d);
}
//#endregion
export { u as a, a as i, l as n, d as r, s as t };

//# sourceMappingURL=value-Fb9HFOxE-BHCNJ526.js.map