import { $a as e, Bn as t, Di as n, Ha as r, Ma as i, Oa as a, Rn as o, Ta as ee, Ui as s, Ur as te, Vo as ne, Wa as c, Wo as re, Xr as l, Zn as u, ds as d, lr as f, ms as p, ur as ie, wi as m, wr as ae, za as h } from "./index-B1FrxEMd-BsPMjC5n.js";
import { t as g } from "./sprintfjs-CjmCzARP-HuCjLGam.js";
import { t as oe } from "./WidgetLabel--oJQrsAd-IbrOPlTn.js";
import { t as se } from "./WidgetLabelHelpIcon-CWnOrY3T-BtbNCfjY.js";
import { t as ce } from "./useBasicWidgetState-DVivDFu--yiQ4kKRs.js";
import { t as le } from "./Cancel.esm-CtMNidjq-CXB-pKHk.js";
import { t as ue } from "./ErrorOutline.esm-BTDiocCk-BcENiBMZ.js";
import { t as de } from "./InputInstructions-CbZRC43y-BKqlI7Nl.js";
import { n as _ } from "./Input-B1waFcLc-Ckq09rqm.js";
import { t as fe } from "./TextField-Co5gRJYP-Dyt18gzB.js";
//#region ../react/build/NumberInput-C7YGxq-_.js
var v = /* @__PURE__ */ p(d(), 1), y = /* @__PURE__ */ v.forwardRef(function(e, n) {
	return /* @__PURE__ */ v.createElement(t, l({
		iconAttrs: {
			fill: "currentColor",
			xmlns: "http://www.w3.org/2000/svg"
		},
		iconVerticalAlign: "middle",
		iconViewBox: "0 0 8 8"
	}, e, { ref: n }), /* @__PURE__ */ v.createElement("path", { d: "M0 3v2h8V3H0z" }));
});
y.displayName = "Minus";
var b = /* @__PURE__ */ v.forwardRef(function(e, n) {
	return /* @__PURE__ */ v.createElement(t, l({
		iconAttrs: {
			fill: "currentColor",
			xmlns: "http://www.w3.org/2000/svg"
		},
		iconVerticalAlign: "middle",
		iconViewBox: "0 0 8 8"
	}, e, { ref: n }), /* @__PURE__ */ v.createElement("path", { d: "M3 0v3H0v2h3v3h2V5h3V3H5V0H3z" }));
});
b.displayName = "Plus";
var pe = /* @__PURE__ */ n("div", { target: "e116k4er8" })(({ theme: e, $isFocused: t, $hasError: n }) => ({
	display: "flex",
	flexDirection: "row",
	flexWrap: "nowrap",
	alignItems: "center",
	height: e.sizes.minElementHeight,
	borderWidth: e.sizes.borderWidth,
	borderStyle: "solid",
	borderColor: n ? e.colors.redTextColor : s(e.colors, t),
	backgroundColor: n ? e.colors.redBackgroundColor : e.colors.secondaryBg,
	transitionDuration: "200ms",
	transitionProperty: "border",
	transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.4, 1)",
	borderRadius: e.radii.default,
	overflow: "hidden"
}), ""), me = /* @__PURE__ */ n("div", { target: "e116k4er7" })({
	name: "76z9jo",
	styles: "display:flex;flex-direction:row;align-self:stretch"
}), he = /* @__PURE__ */ n("button", { target: "e116k4er6" })(({ theme: e }) => ({
	margin: e.spacing.none,
	border: "none",
	height: e.sizes.full,
	display: "flex",
	alignItems: "center",
	width: e.sizes.numberInputControlsWidth,
	justifyContent: "center",
	color: e.colors.bodyText,
	transition: "color 300ms, backgroundColor 300ms",
	backgroundColor: e.colors.transparent,
	"&:hover:enabled, &:focus:enabled": {
		color: e.colors.white,
		backgroundColor: e.colors.primary,
		transition: "none",
		outline: "none"
	},
	"&:active": {
		outline: "none",
		border: "none"
	},
	"&:disabled": {
		cursor: "not-allowed",
		color: e.colors.fadedText40
	}
}), ""), ge = /* @__PURE__ */ n(_, { target: "e116k4er5" })(({ theme: e }) => ({
	flex: 1,
	minWidth: 0,
	border: "none",
	background: "transparent",
	outline: "none",
	color: e.colors.bodyText,
	fontFamily: e.genericFonts.bodyFont,
	fontSize: e.fontSizes.sm,
	fontWeight: e.fontWeights.normal,
	lineHeight: e.lineHeights.inputWidget,
	paddingTop: e.spacing.sm,
	paddingBottom: e.spacing.sm,
	paddingLeft: e.spacing.md,
	paddingRight: e.spacing.sm,
	"::placeholder": { color: e.colors.fadedText60 },
	MozAppearance: "textfield",
	"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
		WebkitAppearance: "none",
		margin: e.spacing.none
	},
	"&[disabled]": {
		cursor: "not-allowed",
		color: e.colors.fadedText40,
		WebkitTextFillColor: e.colors.fadedText40,
		backgroundColor: "transparent"
	},
	"&[aria-invalid='true']": { color: e.colors.redTextColor }
}), ""), _e = /* @__PURE__ */ n("div", { target: "e116k4er4" })(({ theme: e, $isMaterialIcon: t }) => ({
	display: "flex",
	alignItems: "center",
	paddingLeft: e.spacing.sm,
	paddingRight: 0,
	minWidth: e.iconSizes.base,
	color: t ? e.colors.fadedText60 : "inherit",
	flexShrink: 0
}), ""), ve = /* @__PURE__ */ n("button", { target: "e116k4er3" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	background: "none",
	border: "none",
	cursor: "pointer",
	padding: `0 ${e.spacing.twoXS}`,
	color: e.colors.grayTextColor,
	flexShrink: 0,
	"&:hover:not(:disabled)": { color: e.colors.bodyText },
	"&:disabled": { cursor: "not-allowed" }
}), ""), ye = /* @__PURE__ */ n("div", { target: "e116k4er2" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	color: e.colors.redTextColor,
	backgroundColor: e.colors.transparent,
	paddingLeft: e.spacing.twoXS,
	paddingRight: e.spacing.twoXS,
	flexShrink: 0
}), ""), be = /* @__PURE__ */ n("div", { target: "e116k4er1" })(({ theme: e, $clearable: t, $hasError: n }) => ({
	position: "absolute",
	marginRight: e.spacing.twoXS,
	left: 0,
	right: `calc(${e.sizes.numberInputControlsWidth} * 2 + ${t ? "1em" : "0em"} + ${n ? "1em" : "0em"})`
}), ""), xe = /* @__PURE__ */ n("span", { target: "e116k4er0" })({
	name: "1dja9su",
	styles: "position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0"
}), Se = c.getLogger("NumberInput");
function x(e) {
	return i(e) || e === "" ? void 0 : e;
}
var S = (e) => {
	let t = e.toString();
	if (t.includes("e-")) {
		let e = t.match(/(\d+(?:\.\d+)?)e-(\d+)/);
		return e ? (e[1]?.split(".")[1] || "").length + Number.parseInt(e[2], 10) : 0;
	}
	return (t.split(".")[1] || "").length;
}, Ce = ({ value: t, format: n, step: r, dataType: a }) => {
	if (i(t)) return null;
	let o = x(n);
	if (i(o) && e(r) && a === f.DataType.FLOAT && r !== 0) {
		let e = S(r);
		e > 0 && (o = `%0.${e}f`);
	}
	if (i(o)) return t.toString();
	try {
		return g(o, t);
	} catch (e) {
		return Se.warn(`Error in sprintf(${o}, ${t}): ${e}`), String(t);
	}
}, we = (e, t, n) => !i(e) && e - t >= n, Te = (e, t, n) => !i(e) && e + t <= n, C = (e, t, n) => {
	let r = S(t);
	if (r === 0) switch (n) {
		case "add": return e + t;
		case "subtract": return e - t;
	}
	let i = 10 ** r, a = Math.round(e * i), o = Math.round(t * i);
	switch (n) {
		case "add": return (a + o) / i;
		case "subtract": return (a - o) / i;
	}
}, Ee = ({ step: e, dataType: t }) => e || (t === f.DataType.INT ? 1 : .01);
function w(e, t) {
	return t.dataType === f.DataType.INT ? e.getIntValue(t) : e.getDoubleValue(t);
}
function De(e) {
	return e.default ?? null;
}
function Oe(e) {
	return e.value ?? e.default ?? null;
}
function T(e, t, n, r) {
	let i = {
		formId: e.formId,
		fragmentId: r,
		fromUser: n.fromUser,
		...e.ignoreRerun ? { triggerRerun: !1 } : {}
	};
	switch (e.dataType) {
		case f.DataType.INT:
			t.setIntValue(e.id, n.value, i);
			break;
		case f.DataType.FLOAT:
			t.setDoubleValue(e.id, n.value, i);
			break;
		default: throw Error("Invalid data type");
	}
}
var ke = "This field is required.", E = (0, v.memo)(({ disabled: t, element: n, widgetMgr: s, fragmentId: c }) => {
	let l = re(), { dataType: d, formId: p, default: g, format: _, icon: Se, min: x, max: S, hasMin: E, hasMax: D } = n, { width: O, elementRef: Ae } = ne(), k = (0, v.useMemo)(() => Ee({
		step: n.step,
		dataType: n.dataType
	}), [n.step, n.dataType]), A = (0, v.useCallback)((e) => Ce({
		value: e,
		dataType: d,
		format: _,
		step: k
	}), [
		d,
		_,
		k
	]), [j, M] = (0, v.useState)(!1), [N, P] = (0, v.useState)(() => Ce({
		value: w(s, n) ?? g ?? null,
		dataType: d,
		format: _,
		step: k
	})), [F, I] = (0, v.useState)(null), [L, R] = (0, v.useState)(!1), je = n.queryParamKey ? {
		paramKey: n.queryParamKey,
		valueType: "double_value",
		clearable: i(n.default)
	} : void 0, [z, Me] = ce({
		getStateFromWidgetMgr: w,
		getDefaultStateFromProto: De,
		getCurrStateFromProto: Oe,
		updateWidgetMgrState: T,
		element: n,
		widgetMgr: s,
		fragmentId: c,
		formClearBehavior: "resetValueAndRunCallback",
		onFormCleared: (0, v.useCallback)(() => {
			let e = g ?? null;
			M(!1), P(A(e)), I(null), R(!1);
		}, [g, A]),
		queryParamBinding: je
	}), [Ne, Pe] = (0, v.useState)(!1), Fe = (0, v.useRef)(null), Ie = (0, v.useRef)(() => !0), B = (0, v.useId)(), Le = `${B}-validation-error`, V = ee({ formId: p }), Re = V ? s.allowFormEnterToSubmit(p) : j, ze = Ne && O > m(l.breakpoints.hideWidgetDetails);
	(0, v.useEffect)(() => {
		j || (P(A(z)), I(null));
	}, [
		z,
		j,
		A
	]);
	let Be = (0, v.useCallback)((e) => {
		let t = e < x;
		if (!t && !(e > S)) return null;
		let n = A(x) ?? String(x), r = A(S) ?? String(S);
		return E && D ? `Number is outside the allowed range. Please enter a value between ${n} and ${r}.` : t ? E ? `Number is below the allowed range. Please enter a value greater than or equal to ${n}.` : "Number is below the allowed range." : D ? `Number is above the allowed range. Please enter a value less than or equal to ${r}.` : "Number is above the allowed range.";
	}, [
		A,
		D,
		E,
		S,
		x
	]), H = (0, v.useCallback)(({ value: t, fromUser: r, skipRequired: i = !1 }) => {
		let a = t ?? g ?? null;
		if (n.required && a === null && !i) return R(!0), !1;
		if (e(t)) {
			let e = Be(t);
			if (e) return I(e), !1;
		}
		return R(!1), I(null), Me({
			value: a,
			fromUser: r
		}), V && T(n, s, {
			value: a,
			fromUser: r
		}, c), M(!1), P(A(a)), !0;
	}, [
		g,
		A,
		Be,
		Me,
		V,
		n,
		s,
		c
	]), U = i(n.default) && !t && !n.required, W = (0, v.useCallback)(() => {
		H({
			value: null,
			fromUser: !0
		});
	}, [H]), Ve = (0, v.useCallback)(() => {
		Pe(!0);
	}, []);
	(0, v.useEffect)(() => {
		let e = Fe.current;
		if (e) {
			let t = (e) => {
				e.preventDefault();
			};
			return e.addEventListener("wheel", t), () => {
				e.removeEventListener("wheel", t);
			};
		}
	}, []);
	let He = (0, v.useCallback)((e) => {
		let { value: t } = e.target;
		I(null), R(!1), M(!0), P(t === "" ? null : t);
	}, []), G = (0, v.useMemo)(() => {
		if (N === null || N === "") return null;
		if (n.dataType === f.DataType.INT) {
			let e = Number.parseInt(N, 10);
			return Number.isNaN(e) ? null : e;
		}
		let e = Number.parseFloat(N);
		return Number.isNaN(e) ? null : e;
	}, [N, n.dataType]), K = (e) => (e ?? g ?? null) === null, q = n.required && L && K(G) ? ke : null;
	L && (!n.required || !K(G)) && R(!1);
	let J = q ?? F, Ue = q ?? (F ? `Error: ${F}` : null), We = q ?? (F ? `**Error**: ${F}` : null), Y = we(G, k, x), X = Te(G, k, S), Ge = (0, v.useCallback)(() => {
		j && H({
			value: G,
			fromUser: !0,
			skipRequired: V
		}), Pe(!1);
	}, [
		j,
		G,
		H,
		V
	]), Z = (0, v.useCallback)(() => {
		if (X) {
			let e = C(G ?? x, k, "add");
			H({
				value: e,
				fromUser: !0
			});
		}
	}, [
		G,
		x,
		k,
		X,
		H
	]), Q = (0, v.useCallback)(() => {
		if (Y) {
			let e = C(G ?? S, k, "subtract");
			H({
				value: e,
				fromUser: !0
			});
		}
	}, [
		G,
		S,
		k,
		Y,
		H
	]), Ke = (0, v.useCallback)((e) => {
		let { key: t } = e;
		switch (t) {
			case "ArrowUp":
				e.preventDefault(), Z();
				break;
			case "ArrowDown":
				e.preventDefault(), Q();
				break;
			case "Escape":
				U && (e.preventDefault(), W());
				break;
			case "Enter": {
				let e = !0;
				j && (e = H({
					value: G,
					fromUser: !0,
					skipRequired: V
				})), e && !F && s.allowFormEnterToSubmit(p) && s.submitForm(p, c);
				break;
			}
		}
	}, [
		Z,
		Q,
		U,
		W,
		j,
		G,
		H,
		V,
		F,
		s,
		p,
		c
	]);
	Ie.current = () => j ? H({
		value: G,
		fromUser: !0
	}) : n.required && K(z) ? (R(!0), !1) : !F, (0, v.useEffect)(() => V ? (s.addFormSubmitValidator(p, n.id, () => Ie.current()), () => {
		s.removeFormSubmitValidator(p, n.id);
	}) : void 0, [
		n.id,
		p,
		V,
		s
	]);
	let qe = m(l.iconSizes.base) + 2 * m(l.spacing.twoXS), $ = m(l.breakpoints.hideNumberInputControls), Je = Se ? $ + qe : $;
	return /* @__PURE__ */ h.jsxs("div", {
		className: "stNumberInput",
		"data-testid": "stNumberInput",
		ref: Ae,
		children: [
			/* @__PURE__ */ h.jsx(oe, {
				label: n.label,
				disabled: t,
				required: n.required,
				labelVisibility: r(n.labelVisibility?.value),
				htmlFor: B,
				children: n.help && /* @__PURE__ */ h.jsx(se, {
					content: n.help,
					label: n.label
				})
			}),
			/* @__PURE__ */ h.jsx(fe, {
				isDisabled: t,
				"aria-label": n.label,
				validationBehavior: "aria",
				isInvalid: !!J,
				children: /* @__PURE__ */ h.jsxs(pe, {
					$isFocused: Ne,
					$hasError: !!J,
					"data-testid": "stNumberInputContainer",
					children: [
						n.icon && /* @__PURE__ */ h.jsx(_e, {
							$isMaterialIcon: a(n.icon),
							children: /* @__PURE__ */ h.jsx(o, {
								"data-testid": "stNumberInputIcon",
								iconValue: n.icon,
								size: "base"
							})
						}),
						/* @__PURE__ */ h.jsx(ge, {
							ref: Fe,
							id: B,
							"data-testid": "stNumberInputField",
							type: "number",
							step: k,
							min: x,
							max: S,
							value: N ?? "",
							placeholder: n.placeholder,
							"aria-required": n.required ? !0 : void 0,
							"aria-describedby": J ? Le : void 0,
							onFocus: Ve,
							onBlur: Ge,
							onChange: He,
							onKeyDown: Ke
						}),
						We && /* @__PURE__ */ h.jsx(ye, { children: /* @__PURE__ */ h.jsx(te, {
							content: /* @__PURE__ */ h.jsx(ae, {
								source: We,
								allowHTML: !1
							}),
							placement: ie.TOP_RIGHT,
							error: !0,
							children: /* @__PURE__ */ h.jsx(u, {
								content: ue,
								size: "base"
							})
						}) }),
						U && e(N) && /* @__PURE__ */ h.jsx(ve, {
							type: "button",
							"data-testid": "stNumberInputClearButton",
							"aria-label": "Clear value",
							disabled: t,
							tabIndex: -1,
							onMouseDown: (e) => e.preventDefault(),
							onClick: W,
							children: /* @__PURE__ */ h.jsx(le, {
								size: l.iconSizes.base,
								"aria-hidden": "true"
							})
						}),
						O > Je && /* @__PURE__ */ h.jsxs(me, { children: [/* @__PURE__ */ h.jsx(he, {
							type: "button",
							"data-testid": "stNumberInputStepDown",
							"aria-label": "Decrement",
							onClick: Q,
							disabled: !Y || t,
							tabIndex: -1,
							children: /* @__PURE__ */ h.jsx(u, {
								content: y,
								size: "xs",
								color: Y ? "inherit" : l.colors.fadedText40
							})
						}), /* @__PURE__ */ h.jsx(he, {
							type: "button",
							"data-testid": "stNumberInputStepUp",
							"aria-label": "Increment",
							onClick: Z,
							disabled: !X || t,
							tabIndex: -1,
							children: /* @__PURE__ */ h.jsx(u, {
								content: b,
								size: "xs",
								color: X ? "inherit" : l.colors.fadedText40
							})
						})] }),
						Ue && /* @__PURE__ */ h.jsx(xe, {
							id: Le,
							role: "alert",
							children: Ue
						})
					]
				})
			}),
			ze && /* @__PURE__ */ h.jsx(be, {
				$clearable: U,
				$hasError: !!J,
				children: /* @__PURE__ */ h.jsx(de, {
					dirty: j,
					value: N ?? "",
					inForm: V,
					allowEnterToSubmit: Re
				})
			})
		]
	});
});
//#endregion
export { E as default };

//# sourceMappingURL=NumberInput-C7YGxq-_-YqHWBRvg.js.map