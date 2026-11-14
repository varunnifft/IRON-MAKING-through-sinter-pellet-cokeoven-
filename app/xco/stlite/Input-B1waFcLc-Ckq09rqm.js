import { Nt as e, Qt as t, a as n, ds as r, ms as i, nt as a, ot as o, rt as s, tn as c } from "./index-B1FrxEMd-BsPMjC5n.js";
//#region ../react/build/Input-B1waFcLc.js
var l = /* @__PURE__ */ i(r(), 1), u = /* @__PURE__ */ (0, l.createContext)({}), d = /* @__PURE__ */ (0, l.forwardRef)(function(t, r) {
	[t, r] = a(t, r, u);
	let { isDisabled: i, isInvalid: d, isReadOnly: f, onHoverStart: p, onHoverChange: m, onHoverEnd: h, ...g } = t;
	i ??= !!t["aria-disabled"] && t["aria-disabled"] !== "false", d ??= !!t["aria-invalid"] && t["aria-invalid"] !== "false";
	let { hoverProps: _, isHovered: v } = c({
		onHoverStart: p,
		onHoverChange: m,
		onHoverEnd: h,
		isDisabled: i
	}), { isFocused: y, isFocusVisible: b, focusProps: x } = n({ within: !0 }), S = s({
		...t,
		values: {
			isHovered: v,
			isFocusWithin: y,
			isFocusVisible: b,
			isDisabled: i,
			isInvalid: d
		},
		defaultClassName: "react-aria-Group"
	});
	return /* @__PURE__ */ l.createElement(o.div, {
		...e(g, x, _),
		...S,
		ref: r,
		role: t.role ?? "group",
		slot: t.slot ?? void 0,
		"data-focus-within": y || void 0,
		"data-hovered": v || void 0,
		"data-focus-visible": b || void 0,
		"data-disabled": i || void 0,
		"data-invalid": d || void 0,
		"data-readonly": f || void 0
	}, S.children);
}), f = /* @__PURE__ */ (0, l.createContext)({}), p = (e) => {
	let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, ...i } = e;
	return i;
}, m = /* @__PURE__ */ t(function(t, r) {
	[t, r] = a(t, r, f);
	let { hoverProps: i, isHovered: u } = c({
		...t,
		isDisabled: t.disabled
	}), { isFocused: d, isFocusVisible: m, focusProps: h } = n({
		isTextInput: !0,
		autoFocus: t.autoFocus
	}), g = !!t["aria-invalid"] && t["aria-invalid"] !== "false", _ = s({
		...t,
		values: {
			isHovered: u,
			isFocused: d,
			isFocusVisible: m,
			isDisabled: t.disabled || !1,
			isInvalid: g
		},
		defaultClassName: "react-aria-Input"
	});
	return /* @__PURE__ */ l.createElement(o.input, {
		...e(p(t), h, i),
		..._,
		ref: r,
		"data-focused": d || void 0,
		"data-disabled": t.disabled || void 0,
		"data-hovered": u || void 0,
		"data-focus-visible": m || void 0,
		"data-invalid": g || void 0
	});
});
//#endregion
export { d as i, m as n, f as r, u as t };

//# sourceMappingURL=Input-B1waFcLc-Ckq09rqm.js.map