import { $a as e, Aa as t, Di as n, Go as r, Ha as i, Jo as a, Ko as o, O as s, Qn as c, To as l, Ui as u, Wo as d, Zi as f, ds as p, ea as m, er as ee, ms as h, ns as te, ra as ne, ta as g, ts as re, ut as _, wi as v, za as y } from "./index-B1FrxEMd-BsPMjC5n.js";
import { t as ie } from "./WidgetLabel--oJQrsAd-IbrOPlTn.js";
import { t as ae } from "./WidgetLabelHelpIcon-CWnOrY3T-BtbNCfjY.js";
import { t as oe } from "./useBasicWidgetState-DVivDFu--yiQ4kKRs.js";
import { t as se } from "./Cancel.esm-CtMNidjq-CXB-pKHk.js";
import { i as b, n as x } from "./Input-B1waFcLc-Ckq09rqm.js";
import { r as S, t as C, u as w } from "./useMenuTrigger-BjNvpiW8-jg9Gu40v.js";
import { a as T, i as E, n as D, o as ce, r as le, t as ue } from "./fuzzyFilterSelectOptions-KB6RlC97-DFGqimxU.js";
//#region ../react/build/Multiselect-DBXDK3cr.js
var O = /* @__PURE__ */ h(p(), 1), k = "__select_all__", A = "__select_matches__", j = "__creatable__", M = -1, N = 1e3;
function P(e, t) {
	if (e < 2) return !1;
	let n = t ?? N;
	return n === M || n > 0 && e <= n;
}
function de({ options: e, selectedValues: t, inputValue: n, filterActive: r, filterMode: i, acceptNewOptions: a, maxSelections: o, selectAll: s }) {
	let c = (0, O.useMemo)(() => T(i), [i]), l = o > 0 && t.length >= o, u = (0, O.useMemo)(() => e.map((e, t) => ({
		id: String(t),
		label: e,
		value: e
	})), [e]), d = (0, O.useMemo)(() => new Set(t), [t]), f = (0, O.useMemo)(() => u.filter((e) => !d.has(e.value)), [u, d]), p = (0, O.useMemo)(() => l ? [] : !r || !n ? f : E(f, n, c), [
		f,
		n,
		c,
		r,
		l
	]);
	return {
		displayOptions: (0, O.useMemo)(() => {
			if (l) return [];
			let i = [];
			return P(p.length, s) && (r && n.trim() ? i.push({
				id: A,
				label: `Select ${p.length} matches`,
				value: A,
				isBulkAction: !0
			}) : i.push({
				id: k,
				label: "Select all",
				value: k,
				isBulkAction: !0
			})), i.push(...p), a && r && n && (e.some((e) => e === n) || t.includes(n) || i.push({
				id: j,
				label: `Add: ${n}`,
				value: j,
				isCreatable: !0
			})), i;
		}, [
			p,
			e,
			t,
			r,
			n,
			a,
			l,
			s
		]),
		resolvedFilterMode: c
	};
}
function F(e) {
	return `max(0px, calc(${e.sizes.tagMarginInsideBorder} - var(--scrollbar-gutter-size, 0px)))`;
}
var fe = /* @__PURE__ */ n(b, {
	shouldForwardProp: (e) => !e.startsWith("$"),
	target: "e6zijwc13"
})(({ theme: e, $maxHeight: t }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "stretch",
	width: "100%",
	minHeight: e.sizes.minElementHeight,
	maxHeight: t,
	borderLeftWidth: e.sizes.borderWidth,
	borderRightWidth: e.sizes.borderWidth,
	borderTopWidth: e.sizes.borderWidth,
	borderBottomWidth: e.sizes.borderWidth,
	borderStyle: "solid",
	borderColor: u(e.colors, !1),
	boxSizing: "border-box",
	borderRadius: e.radii.default,
	backgroundColor: e.colors.secondaryBg,
	"&[data-focus-within]": { borderColor: u(e.colors, !0) }
}), ""), pe = /* @__PURE__ */ n("div", { target: "e6zijwc12" })(({ theme: e, $wrap: t }) => ({
	display: "flex",
	flexWrap: t ? "wrap" : "nowrap",
	alignItems: "center",
	flexGrow: 1,
	overflowY: t ? "auto" : "hidden",
	overflowX: t ? "hidden" : "auto",
	paddingLeft: e.sizes.tagMarginInsideBorder,
	paddingTop: e.sizes.tagMarginInsideBorder,
	paddingBottom: e.spacing.none,
	paddingRight: e.spacing.none,
	cursor: "text",
	...!t && f(e.spacing.lg)
}), ""), me = /* @__PURE__ */ n("span", { target: "e6zijwc11" })({
	name: "49aokf",
	styles: "display:contents"
}), he = /* @__PURE__ */ n("span", { target: "e6zijwc10" })(({ theme: e, $disabled: t, $wrap: n }) => ({
	display: "inline-flex",
	alignItems: "center",
	flexShrink: n === !1 ? 0 : 1,
	height: e.sizes.elementHighlightHeight,
	maxWidth: `calc(100% - ${e.spacing.lg})`,
	borderRadius: e.radii.md2,
	fontSize: e.fontSizes.sm,
	fontWeight: e.fontWeights.normal,
	paddingLeft: e.spacing.sm,
	paddingRight: e.spacing.sm,
	marginRight: e.spacing.twoXS,
	marginBottom: e.sizes.tagMarginInsideBorder,
	marginTop: e.spacing.none,
	marginLeft: e.spacing.none,
	backgroundColor: t ? e.colors.fadedText10 : e.colors.primary,
	color: t ? e.colors.fadedText40 : e.colors.white,
	cursor: "default",
	overflow: "hidden",
	whiteSpace: "nowrap",
	outline: "none",
	"&:focus-visible": { boxShadow: e.shadows.focusRing }
}), ""), ge = /* @__PURE__ */ n("span", { target: "e6zijwc9" })({
	name: "cajug",
	styles: "overflow:hidden;text-overflow:ellipsis;white-space:nowrap;pointer-events:auto"
}), _e = /* @__PURE__ */ n("button", { target: "e6zijwc8" })(({ theme: e }) => ({
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	border: "none",
	background: "transparent",
	padding: e.spacing.none,
	paddingLeft: e.spacing.sm,
	cursor: "pointer",
	color: "inherit",
	flexShrink: 0
}), ""), ve = /* @__PURE__ */ n(x, {
	shouldForwardProp: (e) => !e.startsWith("$"),
	target: "e6zijwc7"
})(({ theme: e, $typingDisabled: t, $hasValues: n }) => ({
	height: e.sizes.elementHighlightHeight,
	marginBottom: e.sizes.tagMarginInsideBorder,
	marginTop: e.spacing.none,
	marginLeft: e.spacing.none,
	flexGrow: 1,
	flexShrink: 1,
	flexBasis: n ? 0 : "100%",
	minWidth: n ? e.spacing.sm : e.spacing.threeXS,
	"&:focus": { minWidth: "3rem" },
	border: "none",
	outline: "none",
	background: "transparent",
	fontSize: e.fontSizes.sm,
	lineHeight: e.lineHeights.inputWidget,
	fontWeight: e.fontWeights.normal,
	color: e.colors.bodyText,
	paddingLeft: e.spacing.twoXS,
	paddingRight: e.spacing.twoXS,
	paddingTop: e.spacing.none,
	paddingBottom: e.spacing.none,
	boxSizing: "border-box",
	caretColor: t ? "transparent" : e.colors.bodyText,
	cursor: t ? "pointer" : void 0,
	userSelect: t ? "none" : void 0,
	"&::placeholder": { color: e.colors.fadedText60 },
	"&[data-disabled]": {
		cursor: "not-allowed",
		color: e.colors.fadedText40,
		"&::placeholder": { color: e.colors.fadedText40 }
	}
}), ""), ye = /* @__PURE__ */ n(_, { target: "e6zijwc6" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	alignSelf: "center",
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
}), ""), be = /* @__PURE__ */ n(_, { target: "e6zijwc5" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	alignSelf: "center",
	flexShrink: 0,
	padding: e.spacing.threeXS,
	width: e.sizes.clearIconSize,
	height: e.sizes.clearIconSize,
	border: "none",
	outline: "none",
	borderRadius: e.radii.default,
	background: "transparent",
	cursor: "pointer",
	color: e.colors.grayTextColor,
	"&:hover, &[data-hovered]": { color: e.colors.bodyText },
	"&:focus-visible": { boxShadow: e.shadows.focusRing }
}), ""), xe = /* @__PURE__ */ n(C, { target: "e6zijwc4" })(({ theme: e, $isInSidebar: t }) => ({
	...g(e),
	backgroundColor: t ? e.colors.secondaryBg : e.colors.bgColor,
	zIndex: m(e),
	maxHeight: `min(${e.sizes.maxDropdownHeight}, 70vh)`,
	overflow: "hidden",
	opacity: 1,
	transition: "opacity 120ms ease-out",
	"&[data-entering], &[data-exiting]": { opacity: 0 },
	position: "fixed !important",
	top: "0 !important",
	left: "0 !important",
	right: "auto !important",
	bottom: "auto !important"
}), ""), Se = /* @__PURE__ */ n(w, { target: "e6zijwc3" })(({ theme: e }) => ({
	outline: "none",
	maxHeight: `min(${e.sizes.maxDropdownHeight}, 70vh)`,
	overflowY: "auto",
	overflowX: "hidden",
	paddingTop: e.spacing.none,
	paddingBottom: e.spacing.none,
	paddingLeft: e.spacing.none,
	paddingRight: e.spacing.none,
	listStyle: "none",
	margin: e.spacing.none,
	"&:not(:has([data-focused])):not(:has([data-hovered])) [role='option'][aria-posinset='1'] [data-item-hl]": { backgroundColor: e.colors.darkenedBgMix15 }
}), ""), Ce = /* @__PURE__ */ n("span", { target: "e6zijwc2" })(({ theme: e }) => ({
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
}), ""), we = /* @__PURE__ */ n(S, {
	shouldForwardProp: (e) => !e.startsWith("$"),
	target: "e6zijwc1"
})(({ theme: e, $isCreatable: t, $isBulkAction: n }) => ({
	display: "flex",
	alignItems: "center",
	height: e.sizes.dropdownItemHeight,
	paddingLeft: e.sizes.tagMarginInsideBorder,
	paddingRight: F(e),
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
	} },
	...n && { "&::after": {
		content: "\"\"",
		position: "absolute",
		bottom: 0,
		left: e.sizes.tagMarginInsideBorder,
		right: e.sizes.tagMarginInsideBorder,
		height: e.sizes.borderWidth,
		backgroundColor: e.colors.fadedText10,
		transform: "translateY(50%)"
	} }
}), ""), Te = /* @__PURE__ */ n("div", { target: "e6zijwc0" })(({ theme: e }) => ({
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
}), ""), Ee = (e, t) => e.getStringArrayValue(t), De = (e) => e.default.map((t) => e.options[t]), Oe = (e) => e.rawValues ?? [], ke = (e, t, n, r) => {
	t.setStringArrayValue(e.id, n.value, {
		formId: e.formId,
		fragmentId: r,
		fromUser: n.fromUser,
		...e.ignoreRerun ? { triggerRerun: !1 } : {}
	});
}, I = (0, O.memo)(({ openRef: e, focusedKeyRef: t }) => {
	let n = (0, O.useContext)(D);
	return (0, O.useEffect)(() => (n && (e.current = (e = null) => n.open(e, "manual")), () => {
		e.current = null;
	}), [n, e]), t.current = n?.selectionManager.focusedKey ?? null, null;
});
I.displayName = "DropdownController";
var Ae = () => /* @__PURE__ */ y.jsx("svg", {
	"aria-hidden": "true",
	height: "0.5em",
	width: "0.5em",
	viewBox: "0 0 10 10",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ y.jsx("path", {
		d: "M9 1L5 5M1 9L5 5M5 5L1 1M5 5L9 9",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeWidth: "2"
	})
}), je = () => !0, L = (e) => {
	e.preventDefault();
}, R = (0, O.memo)((n) => {
	let { element: u, widgetMgr: f, fragmentId: p } = n, m = d(), h = (0, O.useContext)(c), g = te(), _ = (0, O.useRef)(null), b = (0, O.useRef)(null), x = (0, O.useRef)(0), S = (0, O.useRef)(0), C = (0, O.useRef)(!1), w = (0, O.useRef)(0), T = u.queryParamKey ? {
		paramKey: u.queryParamKey,
		valueType: "string_array_value",
		clearable: !0,
		urlFormat: "repeated"
	} : void 0, [E, D] = oe({
		getStateFromWidgetMgr: Ee,
		getDefaultStateFromProto: De,
		getCurrStateFromProto: Oe,
		updateWidgetMgrState: ke,
		element: u,
		widgetMgr: f,
		fragmentId: p,
		formClearBehavior: "resetValueOnly",
		queryParamBinding: T
	}), [M, N] = (0, O.useState)(""), P = M !== "", F = (0, O.useRef)(!1);
	F.current = P;
	let R = (0, O.useRef)("");
	R.current = M, r(() => N(""), [E]);
	let z = (0, O.useRef)(!1), B = (0, O.useRef)(null), V = (0, O.useRef)(null), H = (0, O.useRef)(null), U = h ? { boundary: document.documentElement } : void 0, { refs: W, floatingStyles: Me } = o({
		open: !0,
		placement: "bottom-start",
		offsetPx: v(m.spacing.twoXS),
		flipOptions: U,
		shiftOptions: U && {
			...U,
			padding: 8
		},
		matchTriggerWidth: !0
	}), { displayOptions: G, resolvedFilterMode: Ne } = de({
		options: u.options,
		selectedValues: E,
		inputValue: M,
		filterActive: P,
		filterMode: u.filterMode,
		acceptNewOptions: u.acceptNewOptions ?? !1,
		maxSelections: u.maxSelections,
		selectAll: u.selectAll
	}), K = (0, O.useRef)(G);
	K.current = G, e(H.current) && !G.some((e) => e.id === H.current) && (H.current = null);
	let q = (0, O.useRef)(E);
	q.current = E;
	let J = Ne === l.SelectWidgetFilterMode.FILTER_MODE_NONE, { placeholder: Pe, shouldDisable: Fe } = (0, O.useMemo)(() => ne(u.placeholder, u.options, u.acceptNewOptions ?? !1, !0), [
		u.placeholder,
		u.options,
		u.acceptNewOptions
	]), Y = n.disabled || Fe, X = re(u.wrap), { canScrollLeft: Ie, canScrollRight: Le } = a({
		elementRef: _,
		enabled: !X,
		layoutKey: E
	}), Re = (0, O.useMemo)(() => X ? `calc(4.5 * ${`calc(${m.sizes.elementHighlightHeight} + ${m.sizes.tagMarginInsideBorder})`} + ${m.sizes.tagMarginInsideBorder} + 2 * ${m.sizes.borderWidth})` : m.sizes.minElementHeight, [
		X,
		m.sizes.minElementHeight,
		m.sizes.elementHighlightHeight,
		m.sizes.tagMarginInsideBorder,
		m.sizes.borderWidth
	]), ze = (0, O.useMemo)(() => ({ rowSize: v(m.sizes.dropdownItemHeight) }), [m.sizes.dropdownItemHeight]), Be = (0, O.useMemo)(() => {
		if (u.maxSelections === 0) return "No results";
		if (E.length >= u.maxSelections) {
			let e = u.maxSelections === 1 ? "option" : "options";
			return `You can only select up to ${u.maxSelections} ${e}. Remove an option first.`;
		}
		return "No results";
	}, [u.maxSelections, E.length]), Z = (0, O.useRef)(E.length);
	(0, O.useLayoutEffect)(() => {
		let e = Z.current;
		Z.current = E.length;
		let t = _.current;
		if (t) {
			if (C.current) {
				let e = x.current, n = S.current;
				C.current = !1, requestAnimationFrame(() => {
					t.scrollTop = e, t.scrollLeft = n, x.current = e, S.current = n;
				});
				return;
			}
			!X && E.length > e && requestAnimationFrame(() => {
				t.scrollLeft = t.scrollWidth, S.current = t.scrollLeft;
			});
		}
	}, [E, X]);
	let Ve = (0, O.useCallback)((e) => {
		if (C.current) return;
		let t = e.currentTarget;
		x.current = t.scrollTop, S.current = t.scrollLeft;
	}, []), Q = (0, O.useCallback)((e) => {
		if (!z.current) return;
		let t = e.map(String);
		if (t.find((e) => e === k || e === A)) {
			let e = K.current.filter((e) => !e.isBulkAction && !e.isCreatable).map((e) => e.value), t;
			if (u.maxSelections > 0) {
				let n = u.maxSelections - E.length;
				t = [...E, ...e.slice(0, n)];
			} else t = [...E, ...e];
			D({
				value: t,
				fromUser: !0
			}), N("");
			return;
		}
		if (t.includes(j)) {
			if (u.maxSelections > 0 && E.length >= u.maxSelections) return;
			if (E.includes(R.current)) {
				N("");
				return;
			}
			let e = [...E, R.current];
			D({
				value: e,
				fromUser: !0
			}), N("");
			return;
		}
		let n = new Map(K.current.filter((e) => !e.isBulkAction && !e.isCreatable).map((e) => [e.id, e.value])), r = t.map((e) => n.get(e)).filter((e) => e !== void 0), i = new Set(n.values()), a = [...E.filter((e) => !i.has(e)), ...r];
		u.maxSelections > 0 && a.length > u.maxSelections || (D({
			value: a,
			fromUser: !0
		}), N(""));
	}, [
		u.maxSelections,
		D,
		E
	]), He = (0, O.useCallback)((e) => {
		e !== R.current && (N(e), e !== "" && !z.current && B.current?.());
	}, []), Ue = (0, O.useCallback)((e) => {
		z.current = e, e || (N(""), H.current = null);
	}, []), We = (0, O.useCallback)((e) => {
		let t = e;
		return /* @__PURE__ */ y.jsx(we, {
			id: t.id,
			textValue: t.label,
			$isCreatable: t.isCreatable,
			$isBulkAction: t.isBulkAction,
			onHoverStart: () => {
				H.current = t.id;
			},
			onHoverEnd: () => {
				H.current === t.id && (H.current = null);
			},
			children: /* @__PURE__ */ y.jsx(Te, {
				"data-item-hl": "",
				children: t.label
			})
		});
	}, []), $ = (0, O.useCallback)((e) => {
		C.current = !0;
		let t = _.current;
		t && (x.current = t.scrollTop, S.current = t.scrollLeft);
		let n = new Set([...e].map(String)), r = q.current.filter((e) => !n.has(e));
		q.current = r, D({
			value: r,
			fromUser: !0
		});
	}, [D]), Ge = (0, O.useCallback)((e) => {
		let t = e.currentTarget, n = t.parentElement;
		if (!n) return;
		let r = Array.from(n.querySelectorAll("[data-tag]")), i = r.indexOf(t);
		if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
			e.preventDefault();
			let n = r[i - 1];
			n && (t.tabIndex = -1, n.tabIndex = 0, n.focus(), w.current = i - 1);
		} else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
			e.preventDefault();
			let n = r[i + 1];
			if (n) t.tabIndex = -1, n.tabIndex = 0, n.focus(), w.current = i + 1;
			else {
				t.tabIndex = -1;
				let e = r[0];
				e && (e.tabIndex = 0), w.current = 0, b.current?.focus();
			}
		} else if (e.key === "Delete" || e.key === "Backspace") {
			e.preventDefault();
			let n = E[i];
			if (n !== void 0) {
				let e = r[i + 1] ?? r[i - 1];
				$(/* @__PURE__ */ new Set([n])), e && e !== t ? (w.current = e === r[i + 1] ? i : i - 1, e.tabIndex = 0, e.focus({ preventScroll: !0 })) : (w.current = 0, b.current?.focus({ preventScroll: !0 }));
			}
		} else if (e.key === "Home") {
			e.preventDefault();
			let n = r[0];
			n && n !== t && (t.tabIndex = -1, n.tabIndex = 0, n.focus(), w.current = 0);
		} else if (e.key === "End") {
			e.preventDefault();
			let n = r.at(-1);
			n && n !== t && (t.tabIndex = -1, n.tabIndex = 0, n.focus(), w.current = r.length - 1);
		} else e.key === " " && e.preventDefault();
	}, [$, E]), Ke = (0, O.useCallback)((e) => {
		let t = e.currentTarget, n = t.parentElement;
		if (!n) return;
		n.querySelectorAll("[data-tag]").forEach((e) => {
			e.tabIndex = e === t ? 0 : -1;
		});
		let r = Number(t.dataset.tagIndex);
		w.current = r;
	}, []), qe = (0, O.useCallback)(() => {
		D({
			value: [],
			fromUser: !0
		});
	}, [D]), Je = (0, O.useCallback)((e) => {
		if (Y) return;
		let t = e.target;
		t.closest("button") || t.closest("[data-tag]") || (b.current?.focus(), B.current?.());
	}, [Y]), Ye = (0, O.useCallback)(() => {
		Y || B.current?.();
	}, [Y]), Xe = (0, O.useCallback)((t) => {
		if (!Y) {
			if (t.key.toLowerCase() === "a" && (t.ctrlKey || t.metaKey) && !t.altKey && !t.shiftKey) {
				t.stopPropagation();
				return;
			}
			if (J && !t.ctrlKey && !t.metaKey && !t.altKey && !(t.key === "Backspace" && !t.currentTarget.value && E.length > 0) && (t.key.length === 1 || t.key === "Backspace" || t.key === "Delete")) {
				t.preventDefault();
				return;
			}
			if ((t.key === "ArrowDown" || t.key === "ArrowUp") && !z.current && B.current?.(), t.key === "Escape" && F.current) {
				t.preventDefault(), t.stopPropagation(), N("");
				return;
			}
			if (t.key === "Enter" && !t.nativeEvent.isComposing) {
				if (e(V.current) || !z.current) return;
				let n = K.current, r = H.current, i = e(r) && n.some((e) => e.id === r);
				t.preventDefault(), t.stopPropagation();
				let a = i ? r : n[0]?.id;
				e(a) && Q([a]);
				return;
			}
			if (t.key === "Backspace" && !t.currentTarget.value && E.length > 0) {
				t.preventDefault(), C.current = !0;
				let e = _.current;
				e && (x.current = e.scrollTop, S.current = e.scrollLeft);
				let n = q.current.slice(0, -1);
				q.current = n, D({
					value: n,
					fromUser: !0
				});
			}
		}
	}, [
		Y,
		Q,
		J,
		D,
		E
	]), Ze = (0, O.useMemo)(() => new Map(u.options.map((e, t) => [e, t])), [u.options]), Qe = (0, O.useMemo)(() => {
		let e = /* @__PURE__ */ new Set();
		for (let t of E) {
			let n = Ze.get(t);
			n !== void 0 && e.add(String(n));
		}
		return e;
	}, [E, Ze]), $e = (0, O.useMemo)(() => [...Qe], [Qe]), et = !J && t() && u.options.length <= 10 && !(u.acceptNewOptions ?? !1), tt = Math.min(w.current, Math.max(0, E.length - 1));
	return /* @__PURE__ */ y.jsxs("div", {
		className: "stMultiSelect",
		"data-testid": "stMultiSelect",
		children: [/* @__PURE__ */ y.jsx(ie, {
			label: u.label,
			disabled: Y,
			labelVisibility: i(u.labelVisibility?.value),
			children: u.help && /* @__PURE__ */ y.jsx(ae, {
				content: u.help,
				label: u.label
			})
		}), /* @__PURE__ */ y.jsx(s, {
			locale: "en-US",
			children: /* @__PURE__ */ y.jsxs(ue, {
				selectionMode: "multiple",
				value: $e,
				inputValue: M,
				onChange: Q,
				onInputChange: He,
				onOpenChange: Ue,
				isDisabled: Y,
				allowsCustomValue: u.acceptNewOptions ?? !1,
				allowsEmptyCollection: !0,
				menuTrigger: "manual",
				defaultFilter: je,
				"aria-label": u.label || "Multiselect",
				children: [
					/* @__PURE__ */ y.jsx(I, {
						openRef: B,
						focusedKeyRef: V
					}),
					/* @__PURE__ */ y.jsxs(fe, {
						ref: W.setReference,
						$maxHeight: Re,
						onClick: Je,
						children: [
							/* @__PURE__ */ y.jsxs(pe, {
								ref: _,
								onScroll: Ve,
								"data-testid": "stMultiSelectTagsContainer",
								$wrap: X,
								"data-can-scroll-start": Ie ? "" : void 0,
								"data-can-scroll-end": Le ? "" : void 0,
								children: [E.length > 0 && /* @__PURE__ */ y.jsx(me, {
									role: "group",
									"aria-label": "Selected values",
									children: E.map((e, t) => /* @__PURE__ */ y.jsxs(he, {
										tabIndex: !Y && t === tt ? 0 : -1,
										"aria-label": e,
										$disabled: Y,
										$wrap: X,
										"data-tag": "",
										"data-tag-index": t,
										onKeyDown: Y ? void 0 : Ge,
										onPointerDown: Y ? void 0 : Ke,
										children: [/* @__PURE__ */ y.jsx(ge, {
											title: e,
											children: e
										}), !Y && /* @__PURE__ */ y.jsx(_e, {
											"aria-label": `Remove ${e}`,
											tabIndex: -1,
											onClick: (t) => {
												t.stopPropagation(), $(/* @__PURE__ */ new Set([e])), b.current?.focus({ preventScroll: !0 });
											},
											children: /* @__PURE__ */ y.jsx(Ae, {})
										})]
									}, e))
								}), /* @__PURE__ */ y.jsx(ve, {
									ref: b,
									placeholder: E.length === 0 ? Pe : "",
									readOnly: et,
									inputMode: J ? "none" : void 0,
									$typingDisabled: J,
									$hasValues: E.length > 0,
									onPointerDown: Ye,
									onKeyDownCapture: Xe,
									onPaste: J ? L : void 0,
									onCompositionStart: J ? L : void 0
								})]
							}),
							E.length > 0 && !Y && /* @__PURE__ */ y.jsx(be, {
								"aria-label": "Clear all",
								slot: null,
								onPress: qe,
								children: /* @__PURE__ */ y.jsx(se, {
									size: m.iconSizes.base,
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ y.jsx(ye, {
								"aria-label": "Open",
								excludeFromTabOrder: !0,
								onPress: () => B.current?.(),
								children: /* @__PURE__ */ y.jsx(ee, {
									size: m.iconSizes.lg,
									"aria-hidden": "true"
								})
							})
						]
					}),
					/* @__PURE__ */ y.jsx(xe, {
						ref: W.setFloating,
						"data-testid": "stMultiSelectDropdown",
						placement: "bottom left",
						isNonModal: !0,
						$isInSidebar: h,
						offset: 0,
						style: {
							...Me,
							"--scrollbar-gutter-size": `${g}px`
						},
						children: /* @__PURE__ */ y.jsx(ce, {
							layout: le,
							layoutOptions: ze,
							children: /* @__PURE__ */ y.jsx(Se, {
								"aria-label": u.label || "Multiselect options",
								items: G,
								renderEmptyState: () => /* @__PURE__ */ y.jsx(Ce, { children: Be }),
								children: We
							})
						})
					})
				]
			})
		})]
	});
});
//#endregion
export { R as default };

//# sourceMappingURL=Multiselect-DBXDK3cr-3J8OBdHw.js.map