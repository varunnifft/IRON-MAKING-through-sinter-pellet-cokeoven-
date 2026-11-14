import { Di as e, Ha as t, Ta as n, Vo as r, Wo as i, ds as a, ms as o, rr as s, wi as c, za as l } from "./index-B1FrxEMd-BsPMjC5n.js";
import { t as u } from "./WidgetLabel--oJQrsAd-IbrOPlTn.js";
import { t as d } from "./WidgetLabelHelpIcon-CWnOrY3T-BtbNCfjY.js";
import { t as f } from "./useBasicWidgetState-DVivDFu--yiQ4kKRs.js";
import { t as p } from "./InputInstructions-CbZRC43y-BKqlI7Nl.js";
import { t as m } from "./useTextInputAutoExpand-DMMYfD-T-DIVuO6XL.js";
import { t as h } from "./inputUtils-DCYiajnz-DpM8zsby.js";
import { n as g, t as ee } from "./useUpdateUiValue-Ctu5Rqeq-DXh24rKr.js";
//#region ../react/build/TextArea-TFma7YiN.js
var _ = /* @__PURE__ */ o(a(), 1);
function v(e, t, n, r, i, a = !1) {
	return (0, _.useCallback)((o) => {
		let s = !a || o.metaKey || o.ctrlKey;
		!h(o) || !s || (o.preventDefault(), n && t(), r.allowFormEnterToSubmit(e) && r.submitForm(e, i));
	}, [
		e,
		i,
		n,
		t,
		r,
		a
	]);
}
var y = (e, n) => {
	let r = "auto";
	if (e.heightConfig?.useStretch) r = "100%";
	else if (e.heightConfig?.pixelHeight && e.heightConfig.pixelHeight > 0) {
		let i = t(n.labelVisibility?.value) === s.Collapsed ? 2 : 30, a = e.heightConfig.pixelHeight - i;
		r = `${Math.max(0, a)}px`;
	}
	return r;
}, b = /* @__PURE__ */ e("div", { target: "ezh4s2r2" })({
	name: "kdbhus",
	styles: "height:100%;display:flex;flex-direction:column"
}), x = /* @__PURE__ */ e("div", { target: "ezh4s2r1" })(({ theme: e }) => ({
	border: `${e.sizes.borderWidth} solid`,
	borderColor: e.colors.widgetBorderColor ?? e.colors.secondaryBg,
	borderRadius: e.radii.default,
	backgroundColor: e.colors.secondaryBg,
	flexGrow: 1,
	"&:focus-within": { borderColor: e.colors.primary }
}), ""), S = /* @__PURE__ */ e("textarea", { target: "ezh4s2r0" })(({ theme: e, $height: t, $maxHeight: n, $resize: r }) => ({
	width: "100%",
	height: t,
	maxHeight: n,
	minHeight: e.sizes.largestElementHeight,
	resize: r,
	fontWeight: e.fontWeights.normal,
	lineHeight: e.lineHeights.inputWidget,
	fontFamily: "inherit",
	fontSize: e.fontSizes.sm,
	color: "inherit",
	backgroundColor: "transparent",
	border: "none",
	outline: "none",
	boxSizing: "border-box",
	display: "block",
	overflowY: "auto",
	padding: e.spacing.md,
	"&::placeholder": { color: e.colors.fadedText60 },
	"&:disabled": {
		cursor: "not-allowed",
		color: e.colors.fadedText40,
		WebkitTextFillColor: e.colors.fadedText40
	}
}), ""), C = (e, t) => e.getStringValue(t) ?? null, w = (e) => e.default ?? null, T = (e) => e.value ?? null, E = (e, t, n, r) => {
	t.setStringValue(e.id, n.value, {
		formId: e.formId,
		fragmentId: r,
		fromUser: n.fromUser,
		...e.ignoreRerun ? { triggerRerun: !1 } : {}
	});
}, D = (0, _.memo)(({ disabled: e, element: a, widgetMgr: o, fragmentId: s, outerElement: h }) => {
	let D = (0, _.useId)(), { width: O, elementRef: k } = r(), [A, j] = (0, _.useState)(!1), [M, N] = (0, _.useState)(!1), P = h.heightConfig?.useContent ?? !1, F = h.heightConfig?.useStretch ?? !1, I = y(h, a), L = (0, _.useRef)(null), [R, z] = (0, _.useState)(() => C(o, a) ?? null), B = (0, _.useCallback)(() => {
		z(a.default ?? null), j(!0);
	}, [a]), V = a.queryParamKey ? {
		paramKey: a.queryParamKey,
		valueType: "string_value",
		clearable: !0
	} : void 0, [H, U] = f({
		getStateFromWidgetMgr: C,
		getDefaultStateFromProto: w,
		getCurrStateFromProto: T,
		updateWidgetMgrState: E,
		element: a,
		widgetMgr: o,
		fragmentId: s,
		formClearBehavior: "resetValueAndRunCallback",
		onFormCleared: B,
		queryParamBinding: V
	});
	g(H, R, z, A);
	let W = i(), G = (0, _.useRef)(!1), { height: K, maxHeight: q, updateScrollHeight: J } = m({
		textareaRef: L,
		dependencies: [a.placeholder, ...P ? [R] : [H]]
	});
	(0, _.useLayoutEffect)(() => {
		P && O > 0 && !G.current && (G.current = !0, J());
	}, [
		P,
		O,
		J
	]);
	let Y = (0, _.useCallback)(() => {
		j(!1), U({
			value: R,
			fromUser: !0
		});
	}, [R, U]), X = (0, _.useCallback)(() => {
		A && Y(), N(!1);
	}, [A, Y]), Z = (0, _.useCallback)(() => {
		N(!0);
	}, []), Q = (0, _.useCallback)(() => {
		P && J();
	}, [P, J]), te = ee({
		formId: a.formId,
		maxChars: a.maxChars,
		setDirty: j,
		setUiValue: z,
		setValueWithSource: U,
		additionalAction: Q
	}), ne = v(a.formId, Y, A, o, s, !0), { placeholder: re, formId: $ } = a, ie = n({ formId: $ }) ? o.allowFormEnterToSubmit($) : A, ae = M && O > c(W.breakpoints.hideWidgetDetails);
	return /* @__PURE__ */ l.jsxs(b, {
		className: "stTextArea",
		"data-testid": "stTextArea",
		ref: k,
		children: [
			/* @__PURE__ */ l.jsx(u, {
				label: a.label,
				disabled: e,
				labelVisibility: t(a.labelVisibility?.value),
				htmlFor: D,
				children: a.help && /* @__PURE__ */ l.jsx(d, {
					content: a.help,
					label: a.label
				})
			}),
			/* @__PURE__ */ l.jsx(x, {
				"data-testid": "stTextAreaRootElement",
				children: /* @__PURE__ */ l.jsx(S, {
					ref: P ? L : void 0,
					value: R ?? "",
					placeholder: re,
					onBlur: X,
					onFocus: Z,
					onChange: te,
					onKeyDown: ne,
					"aria-label": a.label,
					disabled: e,
					id: D,
					rows: 3,
					$height: P ? K : I,
					$maxHeight: P ? q : "",
					$resize: F ? "none" : "vertical"
				})
			}),
			ae && /* @__PURE__ */ l.jsx(p, {
				dirty: A,
				value: R ?? "",
				maxLength: a.maxChars,
				type: "multiline",
				inForm: n({ formId: $ }),
				allowEnterToSubmit: ie
			})
		]
	});
});
//#endregion
export { D as default };

//# sourceMappingURL=TextArea-TFma7YiN-MGdc36aS.js.map