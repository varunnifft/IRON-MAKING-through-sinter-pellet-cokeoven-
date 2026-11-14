import { $a as e, Br as t, Di as n, Ha as r, Oa as i, Rn as a, Ta as o, Ui as s, Ur as ee, Vo as te, Wa as c, Wo as ne, Zn as re, _r as l, ds as u, ms as d, ur as ie, wi as ae, za as f } from "./index-B1FrxEMd-BsPMjC5n.js";
import { t as oe } from "./useDebouncedCallback-BCfvDBFe-DLr1Sw-B.js";
import { t as se } from "./WidgetLabel--oJQrsAd-IbrOPlTn.js";
import { t as ce } from "./WidgetLabelHelpIcon-CWnOrY3T-BtbNCfjY.js";
import { t as le } from "./useBasicWidgetState-DVivDFu--yiQ4kKRs.js";
import { t as ue } from "./Cancel.esm-CtMNidjq-CXB-pKHk.js";
import { t as de } from "./ErrorOutline.esm-BTDiocCk-BcENiBMZ.js";
import { t as fe } from "./InputInstructions-CbZRC43y-BKqlI7Nl.js";
import { t as pe } from "./inputUtils-DCYiajnz-DpM8zsby.js";
import { n as me } from "./Input-B1waFcLc-Ckq09rqm.js";
import { t as he } from "./TextField-Co5gRJYP-Dyt18gzB.js";
import { n as ge, t as _e } from "./useUpdateUiValue-Ctu5Rqeq-DXh24rKr.js";
//#region ../react/build/TextInput-B7gtKsp2.js
var p = /* @__PURE__ */ d(u(), 1), ve = /* @__PURE__ */ n("div", { target: "e96qjds9" })({
	name: "bjn8wh",
	styles: "position:relative"
}), ye = /* @__PURE__ */ n("span", { target: "e96qjds8" })({
	name: "1dja9su",
	styles: "position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0"
}), be = /* @__PURE__ */ n("div", { target: "e96qjds7" })(({ theme: e, $isFocused: t, $hasIcon: n, $hasError: r }) => ({
	display: "flex",
	alignItems: "center",
	height: e.sizes.minElementHeight,
	borderWidth: e.sizes.borderWidth,
	borderStyle: "solid",
	borderColor: r ? e.colors.redTextColor : s(e.colors, t),
	borderRadius: e.radii.default,
	backgroundColor: r ? e.colors.redBackgroundColor : e.colors.secondaryBg,
	paddingLeft: n ? e.spacing.sm : 0,
	overflow: "hidden",
	transitionDuration: "200ms",
	transitionProperty: "border",
	transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.4, 1)",
	"&:focus-within": { borderColor: r ? e.colors.redTextColor : s(e.colors, !0) }
}), ""), xe = /* @__PURE__ */ n(me, { target: "e96qjds6" })(({ theme: e }) => ({
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
	"::-webkit-search-cancel-button": { display: "none" },
	"::-webkit-search-decoration": { display: "none" },
	"&[disabled]": {
		cursor: "not-allowed",
		color: e.colors.fadedText40,
		WebkitTextFillColor: e.colors.fadedText40,
		backgroundColor: "transparent"
	}
}), ""), Se = /* @__PURE__ */ n("div", { target: "e96qjds5" })(({ theme: e, $isMaterialIcon: t }) => ({
	display: "flex",
	alignItems: "center",
	paddingLeft: 0,
	paddingRight: 0,
	minWidth: e.iconSizes.base,
	color: t ? e.colors.fadedText60 : "inherit",
	flexShrink: 0
}), ""), Ce = /* @__PURE__ */ n("div", { target: "e96qjds4" })({
	name: "za0kxg",
	styles: "display:flex;align-items:center;flex-shrink:0"
}), we = /* @__PURE__ */ n("div", { target: "e96qjds3" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	color: e.colors.redTextColor,
	paddingLeft: e.spacing.xs,
	paddingRight: e.spacing.sm
}), ""), Te = /* @__PURE__ */ n("button", { target: "e96qjds2" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	background: "none",
	border: "none",
	cursor: "pointer",
	padding: `0 ${e.spacing.sm}`,
	color: e.colors.grayTextColor,
	flexShrink: 0,
	"&:hover:not(:disabled)": { color: e.colors.bodyText },
	"&:disabled": { cursor: "not-allowed" }
}), ""), Ee = /* @__PURE__ */ n("div", { target: "e96qjds1" })(({ theme: e, $hasErrorIcon: t, $hasClearButton: n, $hasPasswordToggle: r }) => {
	let i = [];
	return t && i.push(`${e.spacing.xs} + ${e.iconSizes.base} + ${e.spacing.sm}`), n && i.push(`${e.spacing.sm} + ${e.iconSizes.base} + ${e.spacing.sm}`), r && i.push(`${e.spacing.sm} + ${e.iconSizes.base} + ${e.spacing.sm}`), {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: i.length ? `calc(${i.join(" + ")})` : 0
	};
}, ""), De = /* @__PURE__ */ n("button", { target: "e96qjds0" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	background: "none",
	border: "none",
	cursor: "pointer",
	padding: `0 ${e.spacing.sm}`,
	color: e.colors.bodyText,
	flexShrink: 0,
	"&:hover:not(:disabled)": { opacity: .7 },
	"&:disabled": {
		cursor: "not-allowed",
		color: e.colors.fadedText40
	},
	"&:focus-visible": {
		outline: "none",
		borderRadius: e.radii.default,
		boxShadow: `inset ${e.shadows.focusRing}`
	}
}), ""), Oe = "Invalid input.", ke = "This field is required.";
function m(e) {
	return e === null || e.trim() === "";
}
function Ae(e) {
	return `${Oe} Must match pattern: ${e.toString()}`;
}
function je(e) {
	if (e) try {
		return new RegExp(e, "us");
	} catch (t) {
		return `Invalid validate regex: ${e}. Error: ${String(t)}`;
	}
}
function Me(e, t) {
	return e === null || e === "" || t.test(e);
}
var Ne = c.getLogger("TextInput");
function h(t, n) {
	return n.length === 0 || e(t) && n.includes(t);
}
function Pe({ fragmentId: e, dirtyRef: t, pendingLiveCommitsRef: n }) {
	let { scriptRunFinishedSequence: r, scriptRunFinishedFragmentIds: i } = (0, p.useContext)(l), a = (0, p.useRef)(r);
	return (0, p.useEffect)(() => {
		let o = a.current !== r;
		a.current = r, !(!o || t.current) && h(e, i) && n.current.clear();
	}, [
		t,
		e,
		n,
		i,
		r
	]), null;
}
function g({ disabled: n, element: s, widgetMgr: c, fragmentId: l }) {
	let [u, d] = (0, p.useState)(() => _(c, s) ?? null), { width: me, elementRef: h } = te(), [g, Re] = (0, p.useState)(!1), [v, y] = (0, p.useState)(!1), b = (0, p.useRef)(g);
	b.current = g;
	let x = (0, p.useRef)(u);
	x.current = u;
	let S = (0, p.useRef)(_(c, s) ?? null), C = (0, p.useRef)(/* @__PURE__ */ new Set()), w = (0, p.useRef)(!1), T = (0, p.useRef)(!1), E = (0, p.useCallback)((e) => {
		b.current = e, Re(e);
	}, []), D = (0, p.useCallback)((e) => {
		x.current = e, d(e);
	}, []), [O, Ve] = (0, p.useState)(!1), [He, k] = (0, p.useState)(!1), [Ue, A] = (0, p.useState)(!1), We = (0, p.useCallback)(() => {
		x.current = s.default ?? null, d(s.default ?? null), E(!0), k(!1), A(!1);
	}, [s.default, E]), Ge = s.queryParamKey ? {
		paramKey: s.queryParamKey,
		valueType: "string_value",
		clearable: !0
	} : void 0, { placeholder: Ke, formId: j, icon: M, maxChars: N } = s, P = o({ formId: j }), qe = e(s.liveDebounceMs), F = s.liveDebounceMs ?? 0, I = qe && !P, Je = (0, p.useCallback)((e) => b.current ? (T.current = !0, !1) : e === S.current ? (C.current.delete(e), !1) : !C.current.has(e), []), [Ye, L] = le({
		getStateFromWidgetMgr: _,
		getDefaultStateFromProto: Fe,
		getCurrStateFromProto: Ie,
		updateWidgetMgrState: Le,
		element: s,
		widgetMgr: c,
		fragmentId: l,
		formClearBehavior: "resetValueAndRunCallback",
		onFormCleared: We,
		queryParamBinding: Ge,
		shouldApplyIncomingValue: I ? Je : void 0
	});
	g || (S.current = Ye), ge(Ye, u, d, g);
	let Xe = ne(), R = (0, p.useId)(), z = `${R}-error`, B = s.type === t.Type.PASSWORD, Ze = s.type === t.Type.SEARCH && !n && !s.required && !!u, V = (0, p.useMemo)(() => je(s.validateRegex), [s.validateRegex]), H = V instanceof RegExp ? V : void 0, U = typeof V == "string" ? V : null, W = !!s.validateRegex, Qe = He ? s.validateMessage || (H ? Ae(H) : Oe) : null, $e = s.required && Ue && m(u) ? ke : null;
	Ue && (!s.required || !m(u)) && A(!1);
	let G = $e ?? (W ? U ?? Qe : null), K = (0, p.useCallback)((e = x.current) => {
		S.current = e, I && !s.ignoreRerun && C.current.add(e), E(!1), L({
			value: e,
			fromUser: !0
		});
	}, [
		s.ignoreRerun,
		I,
		E,
		L
	]), et = (0, p.useCallback)((e) => H ? !Me(e, H) : !1, [H]), q = (0, p.useCallback)((e = x.current, { showRequiredError: t = !0 } = {}) => {
		if (s.required && m(e)) return t && A(!0), k(!1), !1;
		if (A(!1), e === null || e === "") return k(!1), !0;
		if (U) return !1;
		let n = et(e);
		return k(n), !n;
	}, [
		U,
		s.required,
		et
	]), J = (0, p.useCallback)((e = x.current, { showRequiredError: t = !0 } = {}) => {
		if (!b.current) return !0;
		if (!q(e, { showRequiredError: t })) return !1;
		let n = T.current;
		return e === S.current && !n ? (E(!1), !0) : (T.current = !1, K(e), !0);
	}, [
		K,
		E,
		q
	]), Y = (0, p.useCallback)(() => J(x.current, { showRequiredError: !1 }), [J]), { debouncedCallback: X, cancel: Z } = oe(Y, F);
	(0, p.useEffect)(() => {
		let e = C.current;
		return () => {
			Z(), e.clear();
		};
	}, [Z, I]);
	let tt = (0, p.useRef)(F);
	(0, p.useEffect)(() => {
		let e = tt.current !== F;
		if (tt.current = F, !(!e || !I || !b.current)) {
			if (F === 0) {
				Y();
				return;
			}
			X();
		}
	}, [
		F,
		I,
		X,
		Y
	]);
	let nt = (0, p.useCallback)((e = x.current) => {
		if (!(!I || w.current)) {
			if (F === 0) {
				J(e, { showRequiredError: !1 });
				return;
			}
			X();
		}
	}, [
		F,
		I,
		X,
		J
	]), rt = (0, p.useCallback)((e) => {
		k(!1), A(!1), nt(e);
	}, [nt]), it = (0, p.useRef)(() => !0);
	it.current = () => q(x.current) ? (b.current && (c.setStringValue(s.id, x.current, {
		formId: s.formId,
		fragmentId: l,
		fromUser: !0
	}), S.current = x.current, E(!1)), !0) : !1;
	let Q = P ? c.allowFormEnterToSubmit(j) : g && !qe, at = v && me > ae(Xe.breakpoints.hideWidgetDetails), ot = (0, p.useCallback)(() => {
		y(!0);
	}, []), st = (0, p.useCallback)((e) => {
		if (h.current?.contains(e.relatedTarget)) {
			y(!1);
			return;
		}
		P ? b.current && K() : (Z(), J()), y(!1);
	}, [
		Z,
		K,
		h,
		P,
		J
	]), ct = (0, p.useCallback)(() => {
		Ve((e) => !e);
	}, []), lt = (0, p.useCallback)(() => {
		Z(), D(""), k(!1), K("");
	}, [
		Z,
		K,
		D
	]), $ = _e({
		formId: j,
		maxChars: N,
		setDirty: E,
		setUiValue: D,
		setValueWithSource: L,
		additionalAction: rt
	}), ut = (0, p.useCallback)(() => {
		w.current = !0, Z();
	}, [Z]), dt = (0, p.useCallback)((e) => {
		w.current = !1, $({ target: { value: e.currentTarget.value } });
		let t = x.current ?? "";
		e.currentTarget.value !== t && (e.currentTarget.value = t);
	}, [$]), ft = (0, p.useCallback)((e) => {
		if (pe(e)) {
			if (e.preventDefault(), P) {
				if (Q) {
					c.submitForm(j, l) && E(!1);
					return;
				}
				b.current && K();
				return;
			}
			Z(), J();
		}
	}, [
		Q,
		Z,
		K,
		j,
		l,
		P,
		E,
		J,
		c
	]);
	return (0, p.useEffect)(() => {
		U && Ne.error(U);
	}, [U]), (0, p.useEffect)(() => !P || !s.required && !W ? void 0 : (c.addFormSubmitValidator(j, s.id, () => it.current()), () => {
		c.removeFormSubmitValidator(j, s.id);
	}), [
		s.id,
		s.required,
		j,
		W,
		P,
		c
	]), /* @__PURE__ */ f.jsxs(ve, {
		className: "stTextInput",
		"data-testid": "stTextInput",
		ref: h,
		children: [
			I && /* @__PURE__ */ f.jsx(Pe, {
				fragmentId: l,
				dirtyRef: b,
				pendingLiveCommitsRef: C
			}),
			/* @__PURE__ */ f.jsx(se, {
				label: s.label,
				disabled: n,
				required: s.required,
				labelVisibility: r(s.labelVisibility?.value),
				htmlFor: R,
				children: s.help && /* @__PURE__ */ f.jsx(ce, {
					content: s.help,
					label: s.label
				})
			}),
			/* @__PURE__ */ f.jsx(he, {
				isDisabled: n,
				validationBehavior: "aria",
				children: /* @__PURE__ */ f.jsxs(be, {
					"data-testid": "stTextInputRootElement",
					$isFocused: v,
					$hasIcon: !!M,
					$hasError: !!G,
					children: [
						M && /* @__PURE__ */ f.jsx(Se, {
							$isMaterialIcon: i(M),
							children: /* @__PURE__ */ f.jsx(a, {
								"data-testid": "stTextInputIcon",
								iconValue: M,
								size: "base"
							})
						}),
						/* @__PURE__ */ f.jsx(xe, {
							id: R,
							"data-testid": "stTextInputField",
							"aria-label": s.label,
							"aria-required": s.required ? !0 : void 0,
							"aria-invalid": G ? !0 : void 0,
							"aria-describedby": G ? z : void 0,
							value: u ?? "",
							placeholder: Ke,
							type: O ? "text" : ze(s),
							enterKeyHint: s.type === t.Type.SEARCH ? "search" : void 0,
							autoComplete: s.autocomplete,
							onFocus: ot,
							onBlur: st,
							onChange: $,
							onKeyDown: ft,
							onCompositionStart: ut,
							onCompositionEnd: dt
						}),
						/* @__PURE__ */ f.jsxs(Ce, { children: [
							G && /* @__PURE__ */ f.jsx(we, {
								"data-testid": "stTextInputErrorIcon",
								children: /* @__PURE__ */ f.jsx(ee, {
									content: G,
									placement: ie.TOP_RIGHT,
									error: !0,
									children: /* @__PURE__ */ f.jsx(re, {
										content: de,
										size: "base"
									})
								})
							}),
							Ze && /* @__PURE__ */ f.jsx(Te, {
								type: "button",
								"data-testid": "stTextInputClearButton",
								"aria-label": "Clear entry",
								tabIndex: -1,
								onMouseDown: Be,
								onClick: lt,
								children: /* @__PURE__ */ f.jsx(ue, {
									size: Xe.iconSizes.base,
									"aria-hidden": "true"
								})
							}),
							B && /* @__PURE__ */ f.jsx(De, {
								type: "button",
								onMouseDown: Be,
								onClick: ct,
								"aria-label": O ? "Hide password" : "Show password",
								"aria-pressed": O,
								disabled: n,
								children: /* @__PURE__ */ f.jsx(a, {
									iconValue: O ? ":material/visibility_off:" : ":material/visibility:",
									size: "base"
								})
							})
						] })
					]
				})
			}),
			G && /* @__PURE__ */ f.jsx(ye, {
				id: z,
				role: "alert",
				children: G
			}),
			at && /* @__PURE__ */ f.jsx(Ee, {
				$hasErrorIcon: !!G,
				$hasClearButton: Ze,
				$hasPasswordToggle: B,
				children: /* @__PURE__ */ f.jsx(fe, {
					dirty: g,
					value: u ?? "",
					maxLength: N,
					inForm: P,
					allowEnterToSubmit: Q
				})
			})
		]
	});
}
function _(e, t) {
	return e.getStringValue(t) ?? null;
}
function Fe(e) {
	return e.default ?? null;
}
function Ie(e) {
	return e.value ?? null;
}
function Le(e, t, n, r) {
	t.setStringValue(e.id, n.value, {
		formId: e.formId,
		fragmentId: r,
		fromUser: n.fromUser,
		...e.ignoreRerun ? { triggerRerun: !1 } : {}
	});
}
var Re = {
	[t.Type.DEFAULT]: "text",
	[t.Type.PASSWORD]: "password",
	[t.Type.EMAIL]: "email",
	[t.Type.URL]: "url",
	[t.Type.PHONE]: "tel",
	[t.Type.SEARCH]: "search"
};
function ze(e) {
	return Re[e.type] ?? "text";
}
function Be(e) {
	e.preventDefault();
}
var v = (0, p.memo)(g);
//#endregion
export { v as default };

//# sourceMappingURL=TextInput-B7gtKsp2--zO9t9WA.js.map