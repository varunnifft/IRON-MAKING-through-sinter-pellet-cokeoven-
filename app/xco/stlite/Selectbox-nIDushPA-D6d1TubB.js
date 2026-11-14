import { Aa as e, Di as t, Go as n, Ha as r, Ko as i, Ma as a, O as o, Qn as s, To as c, Ui as l, Wo as u, ds as d, ea as f, er as p, ms as m, ra as h, ta as g, ut as _, wi as v, za as y } from "./index-B1FrxEMd-BsPMjC5n.js";
import { t as ee } from "./WidgetLabel--oJQrsAd-IbrOPlTn.js";
import { t as te } from "./WidgetLabelHelpIcon-CWnOrY3T-BtbNCfjY.js";
import { t as b } from "./useBasicWidgetState-DVivDFu--yiQ4kKRs.js";
import { t as ne } from "./Cancel.esm-CtMNidjq-CXB-pKHk.js";
import { i as x, n as S } from "./Input-B1waFcLc-Ckq09rqm.js";
import { r as C, t as w, u as T } from "./useMenuTrigger-BjNvpiW8-jg9Gu40v.js";
import { a as re, i as ie, n as E, o as ae, r as oe, t as se } from "./fuzzyFilterSelectOptions-KB6RlC97-DFGqimxU.js";
//#region ../react/build/Selectbox-nIDushPA.js
var D = /* @__PURE__ */ m(d(), 1);
function O(e) {
	return `max(0px, calc(${e.sizes.tagMarginInsideBorder} - var(--scrollbar-gutter-size, 0px)))`;
}
var ce = /* @__PURE__ */ t(x, { target: "e1o0rvm38" })(({ theme: e }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "stretch",
	width: "100%",
	height: e.sizes.minElementHeight,
	overflow: "hidden",
	borderLeftWidth: e.sizes.borderWidth,
	borderRightWidth: e.sizes.borderWidth,
	borderTopWidth: e.sizes.borderWidth,
	borderBottomWidth: e.sizes.borderWidth,
	borderStyle: "solid",
	borderColor: l(e.colors, !1),
	boxSizing: "border-box",
	borderRadius: e.radii.default,
	backgroundColor: e.colors.secondaryBg,
	"&[data-focus-within]": { borderColor: l(e.colors, !0) }
}), ""), le = /* @__PURE__ */ t(S, {
	shouldForwardProp: (e) => !e.startsWith("$"),
	target: "e1o0rvm37"
})(({ theme: e, $placeholderColor: t, $typingDisabled: n }) => ({
	flexGrow: 1,
	flexShrink: 1,
	minWidth: e.spacing.threeXS,
	padding: e.spacing.sm,
	border: "none",
	outline: "none",
	background: "transparent",
	fontSize: e.fontSizes.sm,
	lineHeight: e.lineHeights.inputWidget,
	fontWeight: e.fontWeights.normal,
	color: e.colors.bodyText,
	caretColor: n ? "transparent" : e.colors.bodyText,
	cursor: n ? "pointer" : void 0,
	userSelect: n ? "none" : void 0,
	boxSizing: "border-box",
	"&::placeholder": { color: t ?? e.colors.fadedText60 },
	"&[data-disabled]": {
		cursor: "not-allowed",
		color: e.colors.fadedText40
	}
}), ""), ue = /* @__PURE__ */ t(_, { target: "e1o0rvm36" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingRight: e.spacing.sm,
	paddingLeft: e.spacing.twoXS,
	border: "none",
	background: "transparent",
	cursor: "pointer",
	color: e.colors.bodyText,
	"&[data-disabled]": {
		cursor: "not-allowed",
		color: e.colors.fadedText40
	}
}), ""), de = /* @__PURE__ */ t(_, { target: "e1o0rvm35" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	padding: e.spacing.threeXS,
	width: e.sizes.clearIconSize,
	border: "none",
	background: "transparent",
	cursor: "pointer",
	color: e.colors.grayTextColor,
	"&:hover, &[data-hovered]": { color: e.colors.bodyText }
}), ""), fe = /* @__PURE__ */ t(w, { target: "e1o0rvm34" })(({ theme: e, $isInSidebar: t }) => ({
	...g(e),
	backgroundColor: t ? e.colors.secondaryBg : e.colors.bgColor,
	zIndex: f(e),
	maxHeight: `min(${e.sizes.maxDropdownHeight}, 70vh)`,
	overflow: "hidden",
	position: "fixed !important",
	top: "0 !important",
	left: "0 !important",
	right: "auto !important",
	bottom: "auto !important"
}), ""), pe = /* @__PURE__ */ t(T, { target: "e1o0rvm33" })(({ theme: e }) => ({
	outline: "none",
	maxHeight: `min(${e.sizes.maxDropdownHeight}, 70vh)`,
	overflowY: "auto",
	overflowX: "hidden",
	paddingTop: e.spacing.none,
	paddingBottom: e.spacing.none,
	paddingLeft: e.spacing.none,
	paddingRight: e.spacing.none,
	listStyle: "none",
	margin: e.spacing.none
}), ""), me = /* @__PURE__ */ t("span", { target: "e1o0rvm32" })(({ theme: e }) => ({
	boxSizing: "border-box",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "100%",
	height: e.sizes.emptyDropdownHeight,
	padding: e.spacing.sm,
	color: e.colors.fadedText60,
	fontSize: e.fontSizes.sm,
	fontWeight: e.fontWeights.normal,
	lineHeight: e.lineHeights.base,
	textAlign: "center",
	cursor: "not-allowed"
}), ""), k = /* @__PURE__ */ t(C, {
	shouldForwardProp: (e) => !e.startsWith("$"),
	target: "e1o0rvm31"
})(({ theme: e, $isCreatable: t }) => ({
	display: "flex",
	alignItems: "center",
	height: e.sizes.dropdownItemHeight,
	paddingLeft: e.sizes.tagMarginInsideBorder,
	paddingRight: O(e),
	cursor: "pointer",
	background: "transparent",
	fontSize: e.fontSizes.sm,
	fontWeight: e.fontWeights.normal,
	color: e.colors.bodyText,
	outline: "none",
	position: "relative",
	"&[data-hovered] [data-item-hl], &[data-focused] [data-item-hl]": { backgroundColor: e.colors.darkenedBgMix15 },
	"&[data-disabled]": {
		cursor: "not-allowed",
		color: e.colors.fadedText40
	},
	...t && { "&::before": {
		content: "\"\"",
		position: "absolute",
		top: 0,
		left: e.sizes.tagMarginInsideBorder,
		right: e.sizes.tagMarginInsideBorder,
		height: e.sizes.borderWidth,
		backgroundColor: e.colors.fadedText10,
		transform: "translateY(-50%)"
	} }
}), ""), A = /* @__PURE__ */ t("div", { target: "e1o0rvm30" })(({ theme: e }) => ({
	flexGrow: 1,
	display: "flex",
	alignItems: "center",
	paddingLeft: e.spacing.sm,
	paddingRight: e.spacing.sm,
	height: e.sizes.elementHighlightHeight,
	borderRadius: e.radii.md2,
	background: "transparent",
	overflow: "hidden",
	whiteSpace: "nowrap",
	transition: "background 50ms ease",
	minWidth: 0
}), ""), j = "__creatable__", he = () => !0, ge = (e, t) => {
	let n = Math.min(e.length, t.length), r = 0;
	for (; r < n && e[r] === t[r];) r++;
	let i = Math.min(e.length - r, t.length - r), a = 0;
	for (; a < i && e[e.length - 1 - a] === t[t.length - 1 - a];) a++;
	return e.slice(r, e.length - a) === "" ? t.slice(r, t.length - a) : null;
}, M = (0, D.memo)(({ openRef: e, closeRef: t }) => {
	let n = (0, D.useContext)(E);
	return (0, D.useEffect)(() => (n && (e.current = () => n.open(null, "manual"), t.current = () => n.close()), () => {
		e.current = null, t.current = null;
	}), [
		n,
		e,
		t
	]), null;
});
M.displayName = "DropdownController";
var _e = (e) => {
	let t = e;
	return /* @__PURE__ */ y.jsx(k, {
		id: t.id,
		textValue: t.label,
		$isCreatable: t.isCreatable,
		children: /* @__PURE__ */ y.jsx(A, {
			"data-item-hl": "",
			children: t.label
		})
	});
}, N = (e) => {
	e.preventDefault();
}, P = (0, D.memo)(({ disabled: t, value: r, onChange: l, options: d, label: f, labelVisibility: m, help: g, placeholder: _, clearable: b, acceptNewOptions: x, filterMode: S }) => {
	let C = u(), w = (0, D.useContext)(s), T = (0, D.useMemo)(() => {
		let e = {
			open: !0,
			placement: "bottom-start",
			offsetPx: v(C.spacing.twoXS),
			matchTriggerWidth: !0
		};
		if (!w || typeof document > "u") return e;
		let t = document.documentElement;
		return {
			...e,
			flipOptions: { boundary: t },
			shiftOptions: {
				boundary: t,
				padding: 8
			}
		};
	}, [C.spacing.twoXS, w]), { refs: E, floatingStyles: O } = i(T), [k, A] = (0, D.useState)(r), [P, F] = (0, D.useState)(r ?? ""), [I, L] = (0, D.useState)(!1), R = (0, D.useRef)(null), z = (0, D.useRef)(null), B = (0, D.useRef)(I);
	B.current = I;
	let V = (0, D.useRef)(k);
	V.current = k;
	let H = (0, D.useRef)(P);
	H.current = P;
	let U = (0, D.useRef)(!1), W = (0, D.useRef)(!1), G = (0, D.useRef)(!1);
	n(() => {
		A(r), F(r ?? ""), L(!1);
	}, [r]);
	let K = (0, D.useMemo)(() => re(S), [S]), q = (0, D.useMemo)(() => d.map((e, t) => ({
		id: String(t),
		label: e,
		value: e
	})), [d]), J = (0, D.useMemo)(() => !I || !P ? q : ie(q, P, K), [
		q,
		P,
		K,
		I
	]), Y = (0, D.useMemo)(() => !x || !I || !P || q.some((e) => e.label === P) ? null : {
		id: j,
		label: `Add: ${P}`,
		value: P,
		isCreatable: !0
	}, [
		x,
		I,
		P,
		q
	]), X = (0, D.useMemo)(() => Y ? [...J, Y] : J, [J, Y]), ve = (0, D.useMemo)(() => ({ rowSize: v(C.sizes.dropdownItemHeight) }), [C.sizes.dropdownItemHeight]), ye = (0, D.useMemo)(() => a(k) ? null : q.find((e) => e.value === k)?.id ?? null, [k, q]), { placeholder: be, shouldDisable: xe } = (0, D.useMemo)(() => h(_, d, x, !1), [
		_,
		d,
		x
	]), Z = t || xe, Q = K === c.SelectWidgetFilterMode.FILTER_MODE_NONE, Se = e() && d.length <= 10 && !x && !Q, $ = (0, D.useCallback)((e) => {
		A(e), F(e ?? ""), L(!1), e !== V.current && l(e);
	}, [l]), Ce = (0, D.useCallback)((e) => {
		if (!W.current) return;
		if (e !== null) {
			let t = q.find((e) => e.value === V.current)?.id ?? null;
			String(e) !== String(t ?? "") && (U.current = !0);
		}
		if (e === null) {
			B.current || (F(V.current ?? ""), L(!1));
			return;
		}
		let t = String(e), n = q.find((e) => e.id === t), r = t === j ? H.current : n?.value ?? null;
		$(r);
	}, [$, q]), we = (0, D.useCallback)((e) => {
		W.current = e;
	}, []), Te = (0, D.useCallback)((e) => {
		let t = V.current ?? "", n = e;
		if (!B.current && t !== "") {
			let r = ge(t, e);
			r !== null && r !== "" && (n = r);
		}
		F(n);
		let r = e !== t;
		L(r), B.current = r, r && R.current?.();
	}, []), Ee = (0, D.useCallback)(() => {
		let e = V.current ?? "";
		H.current !== e && F(e), L(!1);
	}, []), De = (0, D.useCallback)(() => {
		Z || R.current?.();
	}, [Z]), Oe = (0, D.useCallback)((e) => {
		if (!Z) {
			if (Q && (e.key.length === 1 || e.key === "Backspace" || e.key === "Delete") && !e.ctrlKey && !e.metaKey && !e.altKey) {
				e.preventDefault();
				return;
			}
			if (e.key === "Enter" && (G.current = W.current), (e.key === "ArrowDown" || e.key === "ArrowUp") && !W.current && R.current?.(), e.key === "Escape") {
				if (B.current) {
					e.preventDefault();
					let t = V.current ?? "";
					F(t), H.current = t, L(!1), B.current = !1, z.current?.();
					return;
				}
				b && !a(V.current) && (e.preventDefault(), $(null));
			}
		}
	}, [
		b,
		$,
		Q,
		Z
	]), ke = (0, D.useCallback)((e) => {
		if (e.key === "Enter") {
			if (U.current) {
				U.current = !1;
				return;
			}
			if (Y) {
				$(P), z.current?.();
				return;
			}
			if (G.current && X.length > 0) {
				let e = X.find((e) => !e.isCreatable && e.value === P) ?? (X[0].isCreatable ? null : X[0]);
				e && ($(e.value), z.current?.());
			}
		}
	}, [
		$,
		Y,
		X,
		P
	]), Ae = (0, D.useCallback)(() => {
		$(null), z.current?.();
	}, [$]);
	return /* @__PURE__ */ y.jsxs("div", {
		className: "stSelectbox",
		"data-testid": "stSelectbox",
		children: [/* @__PURE__ */ y.jsx(ee, {
			label: f,
			labelVisibility: m,
			disabled: Z,
			children: g && /* @__PURE__ */ y.jsx(te, {
				content: g,
				label: f
			})
		}), /* @__PURE__ */ y.jsx(o, {
			locale: "en-US",
			children: /* @__PURE__ */ y.jsxs(se, {
				value: ye,
				inputValue: P,
				onChange: Ce,
				onInputChange: Te,
				onOpenChange: we,
				isDisabled: Z,
				allowsCustomValue: x,
				allowsEmptyCollection: !0,
				onBlur: Ee,
				menuTrigger: "manual",
				"aria-label": f ?? "Selectbox",
				defaultFilter: he,
				children: [
					/* @__PURE__ */ y.jsx(M, {
						openRef: R,
						closeRef: z
					}),
					/* @__PURE__ */ y.jsxs(ce, {
						ref: E.setReference,
						children: [
							/* @__PURE__ */ y.jsx(le, {
								placeholder: be,
								readOnly: Se,
								inputMode: Q ? "none" : void 0,
								$typingDisabled: Q,
								onPointerDown: De,
								onKeyDownCapture: Oe,
								onKeyDown: ke,
								onPaste: Q ? N : void 0,
								onCompositionStart: Q ? N : void 0,
								$placeholderColor: Z ? C.colors.fadedText40 : void 0
							}),
							b && !a(k) && /* @__PURE__ */ y.jsx(de, {
								"aria-label": "Clear value",
								slot: null,
								onPress: Ae,
								children: /* @__PURE__ */ y.jsx(ne, {
									size: C.iconSizes.base,
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ y.jsx(ue, {
								"aria-label": "Open",
								children: /* @__PURE__ */ y.jsx(p, {
									size: C.iconSizes.lg,
									"aria-hidden": "true"
								})
							})
						]
					}),
					/* @__PURE__ */ y.jsx(fe, {
						ref: E.setFloating,
						"data-testid": "stSelectboxVirtualDropdown",
						placement: "bottom left",
						isNonModal: !0,
						$isInSidebar: w,
						offset: 0,
						style: O,
						children: /* @__PURE__ */ y.jsx(ae, {
							layout: oe,
							layoutOptions: ve,
							children: /* @__PURE__ */ y.jsx(pe, {
								"aria-label": f ?? "Selectbox options",
								items: X,
								renderEmptyState: () => /* @__PURE__ */ y.jsx(me, { children: "No results" }),
								children: _e
							})
						})
					})
				]
			})
		})]
	});
}), F = (e, t) => e.getStringValue(t), I = (e) => e.options.length === 0 || a(e.default) ? null : e.options[e.default], L = (e) => e.rawValue ?? null, R = (e, t, n, r) => {
	t.setStringValue(e.id, n.value, {
		formId: e.formId,
		fragmentId: r,
		fromUser: n.fromUser,
		...e.ignoreRerun ? { triggerRerun: !1 } : {}
	});
}, z = (0, D.memo)(({ disabled: e, element: t, widgetMgr: n, fragmentId: i }) => {
	let { options: o, help: s, label: c, labelVisibility: l, placeholder: u, acceptNewOptions: d, filterMode: f } = t, p = t.queryParamKey ? {
		paramKey: t.queryParamKey,
		valueType: "string_value",
		clearable: a(t.default)
	} : void 0, [m, h] = b({
		getStateFromWidgetMgr: F,
		getDefaultStateFromProto: I,
		getCurrStateFromProto: L,
		updateWidgetMgrState: R,
		element: t,
		widgetMgr: n,
		fragmentId: i,
		formClearBehavior: "resetValueOnly",
		queryParamBinding: p
	}), g = (0, D.useCallback)((e) => {
		h({
			value: e,
			fromUser: !0
		});
	}, [h]), _ = a(t.default) && !e;
	return /* @__PURE__ */ y.jsx(P, {
		label: c,
		labelVisibility: r(l?.value),
		options: o,
		disabled: e,
		onChange: g,
		value: m,
		help: s,
		placeholder: u,
		clearable: _,
		acceptNewOptions: d ?? !1,
		filterMode: f
	});
});
//#endregion
export { z as default };

//# sourceMappingURL=Selectbox-nIDushPA-D6d1TubB.js.map