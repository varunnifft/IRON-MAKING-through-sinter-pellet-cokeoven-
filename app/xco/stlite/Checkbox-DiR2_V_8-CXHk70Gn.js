import { Di as e, F as t, Gt as n, Ha as r, Kt as i, Nt as a, On as o, Yo as s, a as c, an as l, ct as u, ds as d, g as f, ht as p, mn as m, ms as h, nn as g, nt as _, oa as v, ot as y, rr as b, rt as x, sa as S, st as C, t as w, tn as T, ts as E, tt as D, ur as O, wr as k, za as A } from "./index-B1FrxEMd-BsPMjC5n.js";
import { n as j, r as M, t as N } from "./checkboxIndicatorStyles-5aHp9rTE-wuG81IsF.js";
import { t as P } from "./WidgetLabelHelpIconInline-CmMO3-ig-CNt0dgU_.js";
import { t as F } from "./useBasicWidgetState-DVivDFu--yiQ4kKRs.js";
import { a as I, i as ee, n as L, o as R, r as z, t as B } from "./useFormValidation-Cnit8K9v-CsmEyeH7.js";
import { t as te } from "./useFormReset-BZ7HXuA_-BoM-dbzr.js";
import { t as V } from "./useSlot-DKJSZCIj-BYcKzeSG.js";
//#region ../react/build/Checkbox-DiR2_V_8.js
var H = /* @__PURE__ */ h(d(), 1), U = /* @__PURE__ */ new WeakMap();
function W(e, t, r) {
	let { isDisabled: o = !1, isReadOnly: s = !1, value: c, name: l, form: u, children: d, isRequired: m, validationBehavior: h = "aria", "aria-label": g, "aria-labelledby": _, "aria-describedby": v, onPressStart: y, onPressEnd: b, onPressChange: x, onPress: S, onPressUp: C, onClick: w } = e, T = z({
		...e,
		value: t.isSelected
	}), { isInvalid: E, validationErrors: D, validationDetails: O } = T.displayValidation;
	ee(e, T, r);
	let k = (e) => {
		e.stopPropagation(), t.setSelected(f(e).checked);
	}, { pressProps: A, isPressed: j } = i({
		onPressStart: y,
		onPressEnd: b,
		onPressChange: x,
		onPress: S,
		onPressUp: C,
		onClick: w,
		isDisabled: o
	}), [M, N] = (0, H.useState)(!1), { pressProps: P } = i({
		onPressStart(e) {
			if (e.pointerType === "keyboard" || e.pointerType === "virtual") {
				e.continuePropagation();
				return;
			}
			y?.(e), x?.(!0), N(!0);
		},
		onPressEnd(e) {
			if (e.pointerType === "keyboard" || e.pointerType === "virtual") {
				e.continuePropagation();
				return;
			}
			b?.(e), x?.(!1), N(!1);
		},
		onPressUp(e) {
			if (e.pointerType === "keyboard" || e.pointerType === "virtual") {
				e.continuePropagation();
				return;
			}
			C?.(e);
		},
		onClick: w,
		onPress(n) {
			if (n.pointerType === "keyboard" || n.pointerType === "virtual") {
				n.continuePropagation();
				return;
			}
			S?.(n), t.toggle(), r.current?.focus();
			let { [B]: i } = e, { commitValidation: a } = i || T;
			a();
		},
		isDisabled: o || s
	}), { focusableProps: F } = n(e, r), I = a(A, F), L = p(e, { labelable: !0 });
	te(r, t.defaultSelected, t.setSelected);
	let R = V(), U = V();
	return {
		labelProps: a(P, { onClick: (e) => e.preventDefault() }),
		inputProps: a(L, {
			checked: t.isSelected,
			"aria-required": m && h === "aria" || void 0,
			required: m && h === "native",
			"aria-invalid": E || e.validationState === "invalid" || void 0,
			"aria-errormessage": e["aria-errormessage"],
			"aria-controls": e["aria-controls"],
			"aria-readonly": s || void 0,
			"aria-describedby": [
				R.id,
				U.id,
				v
			].filter(Boolean).join(" ") || void 0,
			onChange: k,
			disabled: o,
			...c == null ? {} : { value: c },
			name: l,
			form: u,
			type: "checkbox",
			...I
		}),
		descriptionProps: R,
		errorMessageProps: U,
		isSelected: t.isSelected,
		isPressed: j || M,
		isDisabled: o,
		isReadOnly: s,
		isInvalid: E || e.validationState === "invalid",
		validationErrors: D,
		validationDetails: O
	};
}
function G(e, t, n) {
	let { labelProps: r, inputProps: i, descriptionProps: o, errorMessageProps: s, isSelected: c, isPressed: l, isDisabled: u, isReadOnly: d, isInvalid: f, validationErrors: p, validationDetails: m } = W(e, t, n), { isIndeterminate: h } = e;
	return (0, H.useEffect)(() => {
		n.current && (n.current.indeterminate = !!h);
	}), {
		labelProps: a(r, (0, H.useMemo)(() => ({ onMouseDown: (e) => e.preventDefault() }), [])),
		inputProps: i,
		descriptionProps: o,
		errorMessageProps: s,
		isSelected: c,
		isPressed: l,
		isDisabled: u,
		isReadOnly: d,
		isInvalid: f,
		validationErrors: p,
		validationDetails: m
	};
}
function ne(e, t, n) {
	let r = m({
		isReadOnly: e.isReadOnly || t.isReadOnly,
		isSelected: t.isSelected(e.value),
		defaultSelected: t.defaultValue.includes(e.value),
		onChange(n) {
			n ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(n);
		}
	}), { name: i, form: a, descriptionId: o, errorMessageId: s, validationBehavior: c } = U.get(t);
	c = e.validationBehavior ?? c;
	let { realtimeValidation: l } = z({
		...e,
		value: r.isSelected,
		name: void 0,
		validationBehavior: "aria"
	}), u = (0, H.useRef)(R), d = () => {
		t.setInvalid(e.value, l.isInvalid ? l : u.current);
	};
	(0, H.useEffect)(d);
	let f = t.realtimeValidation.isInvalid ? t.realtimeValidation : l, p = c === "native" ? t.displayValidation : f, h = G({
		...e,
		isReadOnly: e.isReadOnly || t.isReadOnly,
		isDisabled: e.isDisabled || t.isDisabled,
		name: e.name || i,
		form: e.form || a,
		isRequired: e.isRequired ?? t.isRequired,
		validationBehavior: c,
		[B]: {
			realtimeValidation: f,
			displayValidation: p,
			resetValidation: t.resetValidation,
			commitValidation: t.commitValidation,
			updateValidation(e) {
				u.current = e, d();
			}
		}
	}, r, n);
	return {
		...h,
		inputProps: {
			...h.inputProps,
			"aria-describedby": [
				h.inputProps["aria-describedby"],
				t.isInvalid ? s : null,
				o
			].filter(Boolean).join(" ") || void 0
		}
	};
}
var re = /* @__PURE__ */ (0, H.createContext)(null), K = /* @__PURE__ */ (0, H.createContext)(null), q = /* @__PURE__ */ (0, H.createContext)(null), J = /* @__PURE__ */ (0, H.forwardRef)(function(e, t) {
	let { inputRef: n = null, ...r } = e;
	[e, t] = _(r, t, re);
	let i = (0, H.useContext)(K), [o, s] = Y(e, n), { descriptionProps: c, errorMessageProps: u, isSelected: d, isDisabled: f, isReadOnly: m, isInvalid: h, validationDetails: g, validationErrors: v } = o, b = x({
		...e,
		defaultClassName: "react-aria-CheckboxField",
		values: {
			isSelected: d,
			isIndeterminate: e.isIndeterminate || !1,
			isDisabled: f,
			isReadOnly: m,
			isInvalid: h,
			isRequired: e.isRequired || !1
		}
	}), S = p(e, { global: !0 });
	return delete S.id, delete S.onClick, /* @__PURE__ */ H.createElement(y.div, {
		...a(S, b),
		ref: t,
		slot: e.slot || void 0,
		"data-selected": d || void 0,
		"data-indeterminate": e.isIndeterminate || void 0,
		"data-disabled": f || void 0,
		"data-readonly": m || void 0,
		"data-invalid": h || void 0,
		"data-required": e.isRequired || void 0
	}, /* @__PURE__ */ H.createElement(D, { values: [
		[q, {
			...o,
			inputRef: s,
			defaultClassName: "react-aria-CheckboxButton",
			isIndeterminate: e.isIndeterminate,
			isRequired: e.isRequired
		}],
		[l, { slots: {
			description: c,
			errorMessage: u
		} }],
		[L, i ? null : {
			isInvalid: h,
			validationDetails: g,
			validationErrors: v
		}]
	] }, b.children));
});
function Y(e, n) {
	let { validationBehavior: r } = u(I) || {}, i = e.validationBehavior ?? r ?? "native", a = (0, H.useContext)(K), o = w((0, H.useMemo)(() => t(n, e.inputRef === void 0 ? null : e.inputRef), [n, e.inputRef])), s = {
		...C(e),
		children: typeof e.children == "function" || e.children,
		value: e.value,
		validationBehavior: i
	};
	return [a ? ne(s, a, o) : G(s, m(e), o), o];
}
var ie = /* @__PURE__ */ (0, H.forwardRef)(function(e, t) {
	let { labelProps: n, inputProps: r, isSelected: i, isDisabled: o, isReadOnly: s, isPressed: l, isInvalid: u, inputRef: d, defaultClassName: f, isIndeterminate: m, isRequired: h } = (0, H.useContext)(q), { isFocused: _, isFocusVisible: v, focusProps: b } = c(), S = o || s, { hoverProps: C, isHovered: w } = T({
		...e,
		isDisabled: S
	}), E = x({
		...e,
		defaultClassName: f,
		values: {
			isSelected: i,
			isIndeterminate: m || !1,
			isPressed: l,
			isHovered: w,
			isFocused: _,
			isFocusVisible: v,
			isDisabled: o,
			isReadOnly: s,
			isInvalid: u,
			isRequired: h || !1
		}
	}), D = p(e, { global: !0 });
	return delete D.id, delete D.onClick, /* @__PURE__ */ H.createElement(y.label, {
		...a(D, n, C, E),
		ref: t,
		slot: e.slot || void 0,
		"data-selected": i || void 0,
		"data-indeterminate": m || void 0,
		"data-pressed": l || void 0,
		"data-hovered": w || void 0,
		"data-focused": _ || void 0,
		"data-focus-visible": v || void 0,
		"data-disabled": o || void 0,
		"data-readonly": s || void 0,
		"data-invalid": u || void 0,
		"data-required": h || void 0
	}, /* @__PURE__ */ H.createElement(g, { elementType: "span" }, /* @__PURE__ */ H.createElement("input", {
		...a(r, b),
		ref: d
	})), E.children);
});
function ae(e, t, n) {
	let { labelProps: r, inputProps: i, isSelected: a, ...o } = W(e, t, n);
	return {
		labelProps: r,
		inputProps: {
			...i,
			role: "switch",
			checked: a
		},
		isSelected: a,
		...o
	};
}
var oe = /* @__PURE__ */ (0, H.createContext)(null), X = /* @__PURE__ */ (0, H.createContext)(null), Z = /* @__PURE__ */ (0, H.createContext)(null), se = /* @__PURE__ */ (0, H.forwardRef)(function(e, n) {
	let { inputRef: r = null, ...i } = e;
	[e, n] = _(i, n, oe);
	let { validationBehavior: o } = u(I) || {}, s = e.validationBehavior ?? o ?? "native", c = w((0, H.useMemo)(() => t(r, e.inputRef === void 0 ? null : e.inputRef), [r, e.inputRef])), d = m(e), f = ae({
		...C(e),
		children: typeof e.children == "function" || e.children,
		validationBehavior: s
	}, d, c), { descriptionProps: h, errorMessageProps: g, isSelected: v, isDisabled: b, isReadOnly: S, isInvalid: T, validationDetails: E, validationErrors: O } = f, k = x({
		...e,
		defaultClassName: "react-aria-SwitchField",
		values: {
			isSelected: v,
			isDisabled: b,
			isReadOnly: S,
			isInvalid: T,
			isRequired: e.isRequired || !1,
			state: d
		}
	}), A = p(e, { global: !0 });
	return delete A.id, delete A.onClick, /* @__PURE__ */ H.createElement(y.div, {
		...a(A, k),
		ref: n,
		slot: e.slot || void 0,
		"data-selected": v || void 0,
		"data-disabled": b || void 0,
		"data-readonly": S || void 0,
		"data-invalid": T || void 0,
		"data-required": e.isRequired || void 0
	}, /* @__PURE__ */ H.createElement(D, { values: [
		[X, d],
		[Z, {
			...f,
			inputRef: c,
			defaultClassName: "react-aria-SwitchButton",
			isRequired: e.isRequired
		}],
		[l, { slots: {
			description: h,
			errorMessage: g
		} }],
		[L, {
			isInvalid: T,
			validationDetails: E,
			validationErrors: O
		}]
	] }, k.children));
}), ce = /* @__PURE__ */ (0, H.forwardRef)(function(e, t) {
	let { labelProps: n, inputProps: r, isSelected: i, isDisabled: o, isReadOnly: s, isPressed: l, isInvalid: u, inputRef: d, defaultClassName: f, isRequired: m } = (0, H.useContext)(Z), { isFocused: h, isFocusVisible: _, focusProps: v } = c(), b = o || s, S = (0, H.useContext)(X), { hoverProps: C, isHovered: w } = T({
		...e,
		isDisabled: b
	}), E = x({
		...e,
		defaultClassName: f,
		values: {
			isSelected: i,
			isPressed: l,
			isHovered: w,
			isFocused: h,
			isFocusVisible: _,
			isDisabled: o,
			isReadOnly: s,
			isInvalid: u,
			isRequired: m || !1,
			state: S
		}
	}), D = p(e, { global: !0 });
	return delete D.id, delete D.onClick, /* @__PURE__ */ H.createElement(y.label, {
		...a(D, n, C, E),
		ref: t,
		slot: e.slot || void 0,
		"data-selected": i || void 0,
		"data-pressed": l || void 0,
		"data-hovered": w || void 0,
		"data-focused": h || void 0,
		"data-focus-visible": _ || void 0,
		"data-disabled": o || void 0,
		"data-readonly": s || void 0,
		"data-invalid": u || void 0,
		"data-required": m || void 0
	}, /* @__PURE__ */ H.createElement(g, { elementType: "span" }, /* @__PURE__ */ H.createElement("input", {
		...a(r, v),
		ref: d
	})), E.children);
}), Q = ({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	minHeight: e.sizes.smallElementHeight
}), le = /* @__PURE__ */ e(J, { target: "edwcd618" })(Q, ""), ue = /* @__PURE__ */ e(se, { target: "edwcd617" })(Q, ""), de = /* @__PURE__ */ e("div", { target: "edwcd616" })(({ theme: e, visibility: t, $truncate: n }) => ({
	display: t === b.Collapsed ? "none" : "flex",
	visibility: t === b.Hidden ? "hidden" : "visible",
	verticalAlign: "middle",
	flexDirection: "row",
	alignItems: "center",
	lineHeight: e.lineHeights.small,
	...n && { minWidth: 0 }
}), ""), fe = /* @__PURE__ */ e("div", { target: "edwcd615" })(({ $truncate: e }) => e ? {
	display: "flex",
	alignItems: "center",
	minWidth: 0
} : { display: "contents" }, ""), $ = ({ theme: e, $truncate: t }) => ({
	display: "flex",
	alignItems: "flex-start",
	gap: e.spacing.sm,
	marginBottom: 0,
	marginTop: 0,
	cursor: "pointer",
	position: "relative",
	...t && {
		minWidth: 0,
		maxWidth: "100%"
	},
	"&[data-disabled]": {
		cursor: "not-allowed",
		color: e.colors.fadedText40
	},
	"&[data-focus-visible]": { backgroundColor: e.colors.darkenedBgMix25 }
}), pe = /* @__PURE__ */ e(ie, {
	shouldForwardProp: (e) => !e.startsWith("$"),
	target: "edwcd614"
})($, ""), me = /* @__PURE__ */ e("div", { target: "edwcd613" })(({ theme: e, $isSelected: t, $isFocusVisible: n, $isHovered: r, $isDisabled: i }) => {
	let { borderColor: a, backgroundColor: o } = j(e, {
		isSelected: t,
		isHovered: r,
		isDisabled: i
	});
	return {
		...N(e),
		border: `${e.sizes.borderWidth} solid ${a}`,
		backgroundColor: o,
		boxShadow: n && t ? e.shadows.focusRing : "none",
		"& svg": M(e, { isDisabled: i })
	};
}, ""), he = /* @__PURE__ */ e(ce, {
	shouldForwardProp: (e) => !e.startsWith("$"),
	target: "edwcd612"
})($, ""), ge = /* @__PURE__ */ e("div", { target: "edwcd611" })(({ theme: e, $isSelected: t, $isHovered: n, $isDisabled: r }) => ({
	flexShrink: 0,
	marginTop: `calc((${e.lineHeights.small} * ${e.fontSizes.sm} - ${e.sizes.checkbox}) / 2)`,
	width: `calc(2 * ${e.sizes.checkbox})`,
	height: e.sizes.checkbox,
	paddingLeft: e.spacing.threeXS,
	paddingRight: e.spacing.threeXS,
	borderRadius: e.radii.full,
	backgroundColor: v(e, {
		isSelected: t,
		isHovered: n,
		isDisabled: r
	}),
	display: "flex",
	alignItems: "center",
	transition: "background-color 150ms ease"
}), ""), _e = /* @__PURE__ */ e("div", { target: "edwcd610" })(({ theme: e, $isSelected: t, $isDisabled: n }) => {
	let r = S(e), i = n ? r ? e.colors.gray70 : e.colors.gray90 : r ? e.colors.bgColor : e.colors.bodyText;
	return {
		flexShrink: 0,
		width: `calc(${e.sizes.checkbox} - ${e.spacing.twoXS})`,
		height: `calc(${e.sizes.checkbox} - ${e.spacing.twoXS})`,
		borderRadius: e.radii.full,
		backgroundColor: i,
		transform: t ? `translateX(${e.sizes.checkbox})` : "translateX(0)",
		transition: "transform 150ms ease"
	};
}, "");
function ve({ element: e, disabled: t, widgetMgr: n, fragmentId: i }) {
	let a = e.queryParamKey ? {
		paramKey: e.queryParamKey,
		valueType: "bool_value",
		clearable: !1
	} : void 0, [c, l] = F({
		getStateFromWidgetMgr: ye,
		getDefaultStateFromProto: be,
		getCurrStateFromProto: xe,
		updateWidgetMgrState: Se,
		element: e,
		widgetMgr: n,
		fragmentId: i,
		formClearBehavior: "resetValueOnly",
		queryParamBinding: a
	}), u = (0, H.useCallback)((e) => {
		l({
			value: e,
			fromUser: !0
		});
	}, [l]), d = e.type === o.StyleType.TOGGLE, f = r(e.labelVisibility?.value), p = !E(e.wrap), { titleRef: m, labelTextRef: h } = s(p, e.label), g = /* @__PURE__ */ A.jsxs(de, {
		visibility: f,
		$truncate: p,
		"data-testid": "stWidgetLabel",
		children: [/* @__PURE__ */ A.jsx(fe, {
			ref: m,
			$truncate: p,
			children: /* @__PURE__ */ A.jsx("span", {
				ref: h,
				style: { display: "contents" },
				children: /* @__PURE__ */ A.jsx(k, {
					source: e.label,
					allowHTML: !1,
					isLabel: !0,
					truncate: p,
					inheritLineHeight: !0
				})
			})
		}), e.help && /* @__PURE__ */ A.jsx(P, {
			content: e.help,
			placement: O.TOP_RIGHT,
			label: e.label
		})]
	});
	return d ? /* @__PURE__ */ A.jsx(ue, {
		className: "row-widget stCheckbox",
		"data-testid": "stCheckbox",
		isSelected: c,
		isDisabled: t,
		onChange: u,
		"aria-label": e.label,
		children: /* @__PURE__ */ A.jsx(he, {
			$truncate: p,
			children: ({ isSelected: e, isHovered: t, isDisabled: n }) => /* @__PURE__ */ A.jsxs(A.Fragment, { children: [/* @__PURE__ */ A.jsx(ge, {
				$isSelected: e,
				$isHovered: t,
				$isDisabled: n,
				children: /* @__PURE__ */ A.jsx(_e, {
					$isSelected: e,
					$isDisabled: n
				})
			}), g] })
		})
	}) : /* @__PURE__ */ A.jsx(le, {
		className: "row-widget stCheckbox",
		"data-testid": "stCheckbox",
		isSelected: c,
		isDisabled: t,
		onChange: u,
		"aria-label": e.label,
		children: /* @__PURE__ */ A.jsx(pe, {
			$truncate: p,
			children: ({ isSelected: e, isFocusVisible: t, isHovered: n, isDisabled: r }) => /* @__PURE__ */ A.jsxs(A.Fragment, { children: [/* @__PURE__ */ A.jsx(me, {
				$isSelected: e,
				$isFocusVisible: t,
				$isHovered: n,
				$isDisabled: r,
				children: e && /* @__PURE__ */ A.jsx("svg", {
					viewBox: "0 0 10 8",
					"aria-hidden": "true",
					children: /* @__PURE__ */ A.jsx("polyline", { points: "1 4 4 7 9 1" })
				})
			}), g] })
		})
	});
}
function ye(e, t) {
	return e.getBoolValue(t);
}
function be(e) {
	return e.default ?? !1;
}
function xe(e) {
	return e.value ?? !1;
}
function Se(e, t, n, r) {
	t.setBoolValue(e.id, n.value, {
		formId: e.formId,
		fragmentId: r,
		fromUser: n.fromUser,
		...e.ignoreRerun ? { triggerRerun: !1 } : {}
	});
}
var Ce = (0, H.memo)(ve);
//#endregion
export { Ce as default };

//# sourceMappingURL=Checkbox-DiR2_V_8-CXHk70Gn.js.map