import { $r as e, Bn as t, Fo as n, Qr as r, Xr as i, ds as a, ms as o } from "./index-B1FrxEMd-BsPMjC5n.js";
//#region ../react/build/toConsumableArray-B4DpFEAW.js
var s = /* @__PURE__ */ o(a(), 1), c = /* @__PURE__ */ s.forwardRef(function(e, n) {
	return /* @__PURE__ */ s.createElement(t, i({
		iconAttrs: {
			fill: "currentColor",
			xmlns: "http://www.w3.org/2000/svg"
		},
		iconVerticalAlign: "middle",
		iconViewBox: "0 0 24 24"
	}, e, { ref: n }), /* @__PURE__ */ s.createElement("path", {
		fill: "none",
		d: "M0 0h24v24H0V0z"
	}), /* @__PURE__ */ s.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" }));
});
c.displayName = "Close";
function l(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function u(e) {
	if (Array.isArray(e)) return e;
}
function d(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
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
function f(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function p(e, t) {
	if (e) {
		if (typeof e == "string") return f(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0;
	}
}
function m() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function h(e, t) {
	return u(e) || d(e, t) || p(e, t) || m();
}
function g(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function _(e, t) {
	for (var r = 0; r < t.length; r++) {
		var i = t[r];
		i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, n(i.key), i);
	}
}
function v(e, t, n) {
	return t && _(e.prototype, t), n && _(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function y(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && r(e, t);
}
function b(e) {
	return b = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, b(e);
}
function x(t, n) {
	if (n && (e(n) == "object" || typeof n == "function")) return n;
	if (n !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return l(t);
}
function S(e) {
	if (Array.isArray(e)) return f(e);
}
function C(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function w() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function T(e) {
	return S(e) || C(e) || p(e) || w();
}
//#endregion
export { l as a, g as c, h as i, y as l, T as n, x as o, v as r, b as s, c as t };

//# sourceMappingURL=toConsumableArray-B4DpFEAW-6YGARpRB.js.map