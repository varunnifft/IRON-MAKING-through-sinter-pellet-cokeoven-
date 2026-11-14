import { D as e, Di as t, E as n, F as r, G as i, Gt as a, Ha as o, Jt as s, Kt as c, Ma as l, N as u, Nt as d, P as f, a as p, an as m, bt as h, ct as g, ds as _, ft as v, g as y, ht as b, in as x, it as S, ms as C, mt as w, nn as T, nt as E, ot as D, rt as O, st as k, t as A, tn as j, tt as M, ur as N, wi as P, wr as F, z as I, za as L } from "./index-B1FrxEMd-BsPMjC5n.js";
import { t as ee } from "./WidgetLabel--oJQrsAd-IbrOPlTn.js";
import { t as te } from "./WidgetLabelHelpIconInline-CmMO3-ig-CNt0dgU_.js";
import { t as ne } from "./useBasicWidgetState-DVivDFu--yiQ4kKRs.js";
import { a as re, i as ie, n as R, r as z } from "./useFormValidation-Cnit8K9v-CsmEyeH7.js";
import { t as B } from "./useFormReset-BZ7HXuA_-BoM-dbzr.js";
import { t as V } from "./useSlot-DKJSZCIj-BYcKzeSG.js";
import { t as H } from "./useField-BVpgvwQT-C8iZdscS.js";
//#region ../react/build/Radio-BhjCl1ye.js
var U = /* @__PURE__ */ C(_(), 1), W = /* @__PURE__ */ new WeakMap();
function G(e, t, n) {
	let { value: r, children: i, "aria-label": o, "aria-labelledby": s, onPressStart: l, onPressEnd: u, onPressChange: f, onPress: p, onPressUp: m, onClick: h } = e, g = e.isDisabled || t.isDisabled, _ = t.selectedValue === r, v = (e) => {
		e.stopPropagation(), t.setSelectedValue(r);
	}, { pressProps: y, isPressed: x } = c({
		onPressStart: l,
		onPressEnd: u,
		onPressChange: f,
		onPress: p,
		onPressUp: m,
		onClick: h,
		isDisabled: g
	}), { pressProps: S, isPressed: C } = c({
		onPressStart: l,
		onPressEnd: u,
		onPressChange: f,
		onPressUp: m,
		onClick: h,
		isDisabled: g,
		onPress(e) {
			p?.(e), t.setSelectedValue(r), n.current?.focus();
		}
	}), { focusableProps: w } = a(d(e, { onFocus: () => t.setLastFocusedValue(r) }), n), T = d(y, w), E = b(e, { labelable: !0 }), D = -1;
	t.selectedValue == null ? (t.lastFocusedValue === r || t.lastFocusedValue == null) && (D = 0) : t.selectedValue === r && (D = 0), g && (D = void 0);
	let { name: O, form: k, descriptionId: A, errorMessageId: j, validationBehavior: M } = W.get(t);
	B(n, t.defaultSelectedValue, t.setSelectedValue), ie({ validationBehavior: M }, t, n);
	let N = V();
	return {
		labelProps: d(S, (0, U.useMemo)(() => ({
			onClick: (e) => e.preventDefault(),
			onMouseDown: (e) => e.preventDefault()
		}), [])),
		inputProps: d(E, {
			...T,
			type: "radio",
			name: O,
			form: k,
			tabIndex: D,
			disabled: g,
			required: t.isRequired && M === "native",
			checked: _,
			value: r,
			onChange: v,
			"aria-describedby": [
				e["aria-describedby"],
				N.id,
				t.isInvalid ? j : null,
				A
			].filter(Boolean).join(" ") || void 0
		}),
		descriptionProps: N,
		isDisabled: g,
		isSelected: _,
		isPressed: x || C
	};
}
function K(t, r) {
	let { name: a, form: o, isReadOnly: c, isRequired: l, isDisabled: f, orientation: p = "vertical", validationBehavior: m = "aria" } = t, { direction: h } = e(), { isInvalid: g, validationErrors: _, validationDetails: v } = r.displayValidation, { labelProps: x, fieldProps: S, descriptionProps: C, errorMessageProps: T } = H({
		...t,
		labelElementType: "span",
		isInvalid: r.isInvalid,
		errorMessage: t.errorMessage || _
	}), E = b(t, { labelable: !0 }), { focusWithinProps: D } = n({
		onBlurWithin(e) {
			t.onBlur?.(e), r.selectedValue || r.setLastFocusedValue(null);
		},
		onFocusWithin: t.onFocus,
		onFocusWithinChange: t.onFocusChange
	});
	function O(e, t) {
		let n = i(t.currentTarget, {
			from: y(t),
			accept: (e) => e instanceof s(e).HTMLInputElement && e.type === "radio"
		}), a;
		return e === "next" ? (a = n.nextNode(), a ||= (n.currentNode = t.currentTarget, n.firstChild())) : (a = n.previousNode(), a ||= (n.currentNode = t.currentTarget, n.lastChild())), a ? (a.focus(), r.setSelectedValue(a.value), !0) : !1;
	}
	let { keyboardProps: k } = w({
		shortcuts: {
			ArrowRight: (e) => O(h === "rtl" && p !== "vertical" ? "prev" : "next", e),
			ArrowLeft: (e) => O(h === "rtl" && p !== "vertical" ? "next" : "prev", e),
			ArrowDown: (e) => O("next", e),
			ArrowUp: (e) => O("prev", e)
		},
		allowRepeats: !0
	}), A = u(a);
	return W.set(r, {
		name: A,
		form: o,
		descriptionId: C.id,
		errorMessageId: T.id,
		validationBehavior: m
	}), {
		radioGroupProps: d(E, {
			role: "radiogroup",
			...k,
			"aria-invalid": r.isInvalid || void 0,
			"aria-errormessage": t["aria-errormessage"],
			"aria-readonly": c || void 0,
			"aria-required": l || void 0,
			"aria-disabled": f || void 0,
			"aria-orientation": p,
			...S,
			...D
		}),
		labelProps: x,
		descriptionProps: C,
		errorMessageProps: T,
		isInvalid: g,
		validationErrors: _,
		validationDetails: v
	};
}
var q = Math.round(Math.random() * 1e10), J = 0;
function Y(e) {
	let t = (0, U.useMemo)(() => e.name || `radio-group-${q}-${++J}`, [e.name]), [n, r] = f(e.value, e.defaultValue ?? null, e.onChange), [i] = (0, U.useState)(n), [a, o] = (0, U.useState)(null), s = z({
		...e,
		value: n
	}), c = (t) => {
		!e.isReadOnly && !e.isDisabled && (r(t), s.commitValidation());
	}, l = s.displayValidation.isInvalid;
	return {
		...s,
		name: t,
		selectedValue: n,
		defaultSelectedValue: e.value === void 0 ? e.defaultValue ?? null : i,
		setSelectedValue: c,
		lastFocusedValue: a,
		setLastFocusedValue: o,
		isDisabled: e.isDisabled || !1,
		isReadOnly: e.isReadOnly || !1,
		isRequired: e.isRequired || !1,
		validationState: e.validationState || (l ? "invalid" : null),
		isInvalid: l
	};
}
var ae = /* @__PURE__ */ (0, U.createContext)(null), oe = /* @__PURE__ */ (0, U.createContext)(null), X = /* @__PURE__ */ (0, U.createContext)(null), se = /* @__PURE__ */ (0, U.forwardRef)(function(e, t) {
	[e, t] = E(e, t, ae);
	let { validationBehavior: n } = g(re) || {}, r = e.validationBehavior ?? n ?? "native", i = Y({
		...e,
		validationBehavior: r
	}), [a, o] = S(!e["aria-label"] && !e["aria-labelledby"]), { radioGroupProps: s, labelProps: c, descriptionProps: l, errorMessageProps: u, ...f } = K({
		...e,
		label: o,
		validationBehavior: r
	}, i), p = O({
		...e,
		values: {
			orientation: e.orientation || "vertical",
			isDisabled: i.isDisabled,
			isReadOnly: i.isReadOnly,
			isRequired: i.isRequired,
			isInvalid: i.isInvalid,
			state: i
		},
		defaultClassName: "react-aria-RadioGroup"
	}), h = b(e, { global: !0 });
	return /* @__PURE__ */ U.createElement(D.div, {
		...d(h, p, s),
		ref: t,
		slot: e.slot || void 0,
		"data-orientation": e.orientation || "vertical",
		"data-invalid": i.isInvalid || void 0,
		"data-disabled": i.isDisabled || void 0,
		"data-readonly": i.isReadOnly || void 0,
		"data-required": i.isRequired || void 0
	}, /* @__PURE__ */ U.createElement(M, { values: [
		[X, i],
		[I, {
			...c,
			ref: a,
			elementType: "span"
		}],
		[m, { slots: {
			description: l,
			errorMessage: u
		} }],
		[R, f]
	] }, /* @__PURE__ */ U.createElement(v, null, p.children)));
}), Z = /* @__PURE__ */ (0, U.createContext)(null), ce = /* @__PURE__ */ (0, U.forwardRef)(function(e, t) {
	let { inputRef: n = null, ...i } = e;
	[e, t] = E(i, t, oe);
	let a = U.useContext(X), o = A((0, U.useMemo)(() => r(n, e.inputRef === void 0 ? null : e.inputRef), [n, e.inputRef])), s = G({
		...k(e),
		children: typeof e.children == "function" || e.children
	}, a, o), { descriptionProps: c, isSelected: l, isDisabled: u } = s, f = O({
		...e,
		defaultClassName: "react-aria-RadioField",
		values: {
			isSelected: l,
			isDisabled: u,
			isReadOnly: a.isReadOnly,
			isInvalid: a.isInvalid,
			isRequired: a.isRequired
		}
	}), p = b(e, { global: !0 });
	return delete p.id, delete p.onClick, /* @__PURE__ */ U.createElement(D.div, {
		...d(p, f),
		ref: t,
		"data-selected": l || void 0,
		"data-disabled": u || void 0,
		"data-readonly": a.isReadOnly || void 0,
		"data-invalid": a.isInvalid || void 0,
		"data-required": a.isRequired || void 0
	}, /* @__PURE__ */ U.createElement(M, { values: [
		[h, { isSelected: l }],
		[Z, {
			...s,
			inputRef: o,
			defaultClassName: "react-aria-RadioButton"
		}],
		[m, { slots: { description: c } }]
	] }, f.children));
}), le = /* @__PURE__ */ (0, U.forwardRef)(function(e, t) {
	let { labelProps: n, inputProps: r, isSelected: i, isDisabled: a, isPressed: o, defaultClassName: s, inputRef: c } = (0, U.useContext)(Z), l = U.useContext(X), { isFocused: u, isFocusVisible: f, focusProps: m } = p(), h = a || l.isReadOnly, { hoverProps: g, isHovered: _ } = j({
		...e,
		isDisabled: h
	}), v = O({
		...e,
		defaultClassName: s,
		values: {
			isSelected: i,
			isPressed: o,
			isHovered: _,
			isFocused: u,
			isFocusVisible: f,
			isDisabled: a,
			isReadOnly: l.isReadOnly,
			isInvalid: l.isInvalid,
			isRequired: l.isRequired
		}
	}), y = b(e, { global: !0 });
	return delete y.id, delete y.onClick, /* @__PURE__ */ U.createElement(D.label, {
		...d(y, n, g, v),
		ref: t,
		"data-selected": i || void 0,
		"data-pressed": o || void 0,
		"data-hovered": _ || void 0,
		"data-focused": u || void 0,
		"data-focus-visible": f || void 0,
		"data-disabled": a || void 0,
		"data-readonly": l.isReadOnly || void 0,
		"data-invalid": l.isInvalid || void 0,
		"data-required": l.isRequired || void 0
	}, /* @__PURE__ */ U.createElement(T, { elementType: "span" }, /* @__PURE__ */ U.createElement("input", {
		...d(r, m),
		ref: c
	})), v.children);
}), ue = /* @__PURE__ */ t(se, {
	shouldForwardProp: (e) => !e.startsWith("$"),
	target: "e1ah07i87"
})(({ theme: e, $horizontal: t, $hasCaptions: n }) => ({
	display: "flex",
	flexDirection: t ? "row" : "column",
	flexWrap: "wrap",
	alignItems: t ? "center" : "flex-start",
	gap: t ? e.spacing.lg : n ? e.spacing.sm : e.spacing.none,
	minHeight: e.sizes.minElementHeight
}), ""), de = /* @__PURE__ */ t(ce, { target: "e1ah07i86" })(({ theme: e }) => ({
	display: "flex",
	flexDirection: "column",
	color: e.colors.bodyText,
	"&[data-disabled]": { color: e.colors.fadedText40 }
}), ""), fe = /* @__PURE__ */ t(le, { target: "e1ah07i85" })(({ theme: e }) => ({
	display: "block",
	cursor: "pointer",
	paddingLeft: e.spacing.none,
	paddingRight: e.spacing.threeXS,
	marginTop: e.spacing.none,
	marginBottom: e.spacing.none,
	"&[data-focus-visible]": { backgroundColor: e.colors.darkenedBgMix25 },
	"&[data-disabled]": { cursor: "not-allowed" }
}), ""), pe = /* @__PURE__ */ t("div", { target: "e1ah07i84" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	gap: e.spacing.sm
}), ""), me = /* @__PURE__ */ t("div", { target: "e1ah07i83" })(({ theme: e, $isSelected: t, $isHovered: n, $isDisabled: r }) => {
	let i, a = "none";
	return r ? i = e.colors.borderColor : t ? (a = `${e.sizes.borderWidth} solid ${e.colors.primary}`, i = e.colors.primary) : n ? (a = `${e.sizes.borderWidth} solid ${e.colors.borderColor}`, i = e.colors.darkenedBgMix15) : (a = `${e.sizes.borderWidth} solid ${e.colors.borderColor}`, i = e.colors.bgColor), {
		width: e.sizes.checkbox,
		height: e.sizes.checkbox,
		flexShrink: 0,
		boxSizing: "border-box",
		borderRadius: "50%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: i,
		border: a,
		transition: "background-color 100ms ease, border-color 100ms ease"
	};
}, ""), Q = /* @__PURE__ */ t("div", { target: "e1ah07i82" })(({ theme: e, $isSelected: t, $isDisabled: n }) => {
	let r = Number.parseFloat(e.sizes.checkbox), i = P(r.toString()), a = Math.round(i * .375), o = t ? a : 0, s = e.colors.white;
	if (n && !t) {
		let t = Number.parseFloat(e.sizes.borderWidth);
		o = Math.max(0, Math.round(i - 2 * t)), s = e.colors.bgColor;
	}
	return {
		borderRadius: "50%",
		backgroundColor: s,
		width: `${o}px`,
		height: `${o}px`
	};
}, ""), $ = ({ theme: e }) => ({
	paddingLeft: `calc(${e.sizes.checkbox} + ${e.spacing.sm})`,
	paddingRight: e.spacing.threeXS
}), he = /* @__PURE__ */ t(x, { target: "e1ah07i81" })($, ""), ge = /* @__PURE__ */ t("div", { target: "e1ah07i80" })($, "");
function _e({ disabled: e, horizontal: t, value: n, onChange: r, options: i, captions: a, label: o, labelVisibility: s, help: c }) {
	let [l, u] = (0, U.useState)(n ?? null);
	(0, U.useEffect)(() => {
		n !== l && u(n ?? null);
	}, [n]);
	let d = (0, U.useCallback)((e) => {
		let t = Number.parseInt(e, 10);
		u(t), r(t);
	}, [r]), f = i.length > 0, p = f ? i : ["No options to select."], m = a.slice(0, i.length).map((e) => e.trim() === "" ? "" : e), h = m.some((e) => e !== ""), g = e || !f;
	return /* @__PURE__ */ L.jsxs("div", {
		className: "stRadio",
		"data-testid": "stRadio",
		children: [/* @__PURE__ */ L.jsx(ee, {
			label: o,
			disabled: g,
			labelVisibility: s,
			children: c && /* @__PURE__ */ L.jsx(te, {
				content: c,
				placement: N.TOP_RIGHT,
				label: o
			})
		}), /* @__PURE__ */ L.jsx(ue, {
			onChange: d,
			value: l === null ? null : l.toString(),
			isDisabled: g,
			orientation: t ? "horizontal" : "vertical",
			"aria-label": o,
			"data-testid": "stRadioGroup",
			$horizontal: t,
			$hasCaptions: h,
			children: p.map((e, n) => {
				let r = m[n] ?? "", i = r === "" && t && h;
				return /* @__PURE__ */ L.jsxs(de, {
					value: n.toString(),
					children: [
						/* @__PURE__ */ L.jsx(fe, {
							"data-testid": "stRadioOption",
							children: ({ isSelected: t, isHovered: n, isDisabled: r }) => /* @__PURE__ */ L.jsxs(pe, { children: [/* @__PURE__ */ L.jsx(me, {
								$isSelected: t,
								$isHovered: n,
								$isDisabled: r,
								children: /* @__PURE__ */ L.jsx(Q, {
									$isSelected: t,
									$isDisabled: r
								})
							}), /* @__PURE__ */ L.jsx(F, {
								source: e,
								allowHTML: !1,
								isLabel: !0
							})] })
						}),
						r !== "" && /* @__PURE__ */ L.jsx(he, {
							slot: "description",
							elementType: "div",
							"data-testid": "stRadioCaption",
							children: /* @__PURE__ */ L.jsx(F, {
								source: r,
								allowHTML: !1,
								isCaption: !0,
								isLabel: !0
							})
						}),
						i && /* @__PURE__ */ L.jsx(ge, {
							"aria-hidden": "true",
							"data-testid": "stRadioCaptionSpacer",
							children: /* @__PURE__ */ L.jsx(F, {
								source: "\xA0",
								allowHTML: !1,
								isCaption: !0,
								isLabel: !0
							})
						})
					]
				}, n);
			})
		})]
	});
}
var ve = (0, U.memo)(_e);
function ye({ disabled: e, element: t, widgetMgr: n, fragmentId: r }) {
	let i = t.queryParamKey ? {
		paramKey: t.queryParamKey,
		valueType: "string_value",
		clearable: l(t.default)
	} : void 0, [a, s] = ne({
		getStateFromWidgetMgr: be,
		getDefaultStateFromProto: xe,
		getCurrStateFromProto: Se,
		updateWidgetMgrState: Ce,
		element: t,
		widgetMgr: n,
		fragmentId: r,
		formClearBehavior: "resetValueOnly",
		queryParamBinding: i
	}), { horizontal: c, options: u, captions: d, label: f, labelVisibility: p, help: m } = t, h = (0, U.useCallback)((e) => {
		let t = u[e] ?? null;
		s({
			value: t,
			fromUser: !0
		});
	}, [s, u]), g = (0, U.useMemo)(() => {
		if (a === null) return null;
		let e = u.lastIndexOf(a);
		return e >= 0 ? e : null;
	}, [a, u]);
	return /* @__PURE__ */ L.jsx(ve, {
		label: f,
		onChange: h,
		options: u,
		captions: d,
		disabled: e,
		horizontal: c,
		labelVisibility: o(p?.value),
		value: g,
		help: m
	});
}
function be(e, t) {
	return e.getStringValue(t);
}
function xe(e) {
	return e.options.length === 0 || l(e.default) ? null : e.options[e.default];
}
function Se(e) {
	return e.rawValue ?? null;
}
function Ce(e, t, n, r) {
	t.setStringValue(e.id, n.value, {
		formId: e.formId,
		fragmentId: r,
		fromUser: n.fromUser,
		...e.ignoreRerun ? { triggerRerun: !1 } : {}
	});
}
var we = (0, U.memo)(ye);
//#endregion
export { we as default };

//# sourceMappingURL=Radio-BhjCl1ye-Dl8N1b4y.js.map