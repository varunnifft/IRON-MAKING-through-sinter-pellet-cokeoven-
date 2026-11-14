import { Co as e, Di as t, Rn as n, Wo as r, ds as i, es as a, ms as o, wi as s, za as c } from "./index-B1FrxEMd-BsPMjC5n.js";
import { t as l } from "./useBasicWidgetState-DVivDFu--yiQ4kKRs.js";
//#region ../react/build/Pagination-pDKwUkpJ.js
var u = /* @__PURE__ */ o(i(), 1), d = /* @__PURE__ */ t("div", { target: "e1vml7fu4" })(({ shouldStretch: e }) => ({
	display: "flex",
	justifyContent: e ? "center" : "flex-start",
	width: "100%"
}), ""), f = /* @__PURE__ */ t("div", { target: "e1vml7fu3" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	gap: e.spacing.twoXS,
	overflow: "hidden"
}), ""), p = /* @__PURE__ */ t("button", { target: "e1vml7fu2" })(({ theme: e, isSelected: t, disabled: n }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	minWidth: e.spacing.threeXL,
	height: e.spacing.threeXL,
	padding: `0 ${e.spacing.sm}`,
	border: "none",
	borderRadius: e.radii.default,
	backgroundColor: t ? e.colors.darkenedBgMix25 : e.colors.transparent,
	color: n ? e.colors.fadedText40 : e.colors.bodyText,
	cursor: n ? "not-allowed" : "pointer",
	fontSize: e.fontSizes.sm,
	fontFamily: e.fonts.sansSerif,
	fontWeight: e.fontWeights.normal,
	transition: "background-color 0.15s ease",
	lineHeight: e.lineHeights.none,
	"&:hover:not(:disabled)": { backgroundColor: t ? e.colors.darkenedBgMix40 : e.colors.darkenedBgMix25 },
	"&:focus-visible": {
		outline: "none",
		boxShadow: e.shadows.focusRing
	},
	"&:disabled": {
		cursor: "not-allowed",
		opacity: .5
	}
}), ""), m = /* @__PURE__ */ t("span", { target: "e1vml7fu1" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	minWidth: e.spacing.threeXL,
	height: e.spacing.threeXL,
	padding: `0 ${e.spacing.sm}`,
	backgroundColor: e.colors.transparent,
	color: e.colors.fadedText40,
	fontSize: e.fontSizes.sm,
	fontFamily: e.fonts.sansSerif,
	fontWeight: e.fontWeights.normal,
	lineHeight: e.lineHeights.none
}), ""), h = /* @__PURE__ */ t("button", { target: "e1vml7fu0" })(({ theme: e, disabled: t }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: e.spacing.threeXL,
	height: e.spacing.threeXL,
	padding: e.spacing.none,
	border: "none",
	borderRadius: e.radii.default,
	backgroundColor: e.colors.transparent,
	color: t ? e.colors.fadedText40 : e.colors.bodyText,
	cursor: t ? "not-allowed" : "pointer",
	transition: "background-color 0.15s ease",
	"&:hover:not(:disabled)": { backgroundColor: e.colors.darkenedBgMix25 },
	"&:focus-visible": {
		outline: "none",
		boxShadow: e.shadows.focusRing
	},
	"&:disabled": { opacity: .5 }
}), ""), g = 50, _ = (e) => ({
	type: "page",
	page: e
}), v = (e) => ({
	type: "ellipsis",
	position: e
});
function y(e, t, n) {
	if (n === 0) return [];
	if (n === 1) return [_(e)];
	if (t <= n) return Array.from({ length: t }, (e, t) => _(t + 1));
	if (n === 2) return e === 1 ? [
		_(1),
		v("end"),
		_(t)
	] : e === t ? [
		_(1),
		v("start"),
		_(t)
	] : [
		_(e),
		v("end"),
		_(t)
	];
	if (n === 3 && t > 4) return e <= 3 ? [
		_(1),
		_(2),
		_(3),
		v("end"),
		_(t)
	] : e >= t - 2 ? [
		_(1),
		v("start"),
		_(t - 2),
		_(t - 1),
		_(t)
	] : [
		_(1),
		v("start"),
		_(e),
		v("end"),
		_(t)
	];
	let r = [], i = e > 3, a = e < t - 2, o = +!!i + +!!a, s = Math.max(1, n - 2 - o);
	r.push(_(1)), i && r.push(v("start"));
	let c, l;
	if (!i) c = 2, l = Math.max(e, Math.min(t - 1, 2 + s - 1)), l - c + 1 < s && (l = Math.min(t - 1, c + s - 1));
	else if (!a) l = t - 1, c = Math.min(e, Math.max(2, t - s)), l - c + 1 < s && (c = Math.max(2, l - s + 1));
	else {
		let n = Math.floor((s - 1) / 2);
		c = Math.max(2, e - n), l = Math.min(t - 1, c + s - 1), l === t - 1 && (c = Math.max(2, l - s + 1)), c === 2 && (l = Math.min(t - 1, c + s - 1));
	}
	for (let e = c; e <= l; e++) r.push(_(e));
	return a && r.push(v("end")), t > 1 && r.push(_(t)), r;
}
function b(e, t) {
	return e.getIntValue(t);
}
function x(e) {
	return e.default || 1;
}
function S(e) {
	return e.value || e.default || 1;
}
function C(e, t, n, r) {
	t.setIntValue(e.id, n.value, {
		formId: e.formId,
		fragmentId: r,
		fromUser: n.fromUser
	});
}
function w(t) {
	let { disabled: i, element: o, fragmentId: _, widgetMgr: v, widthConfig: w } = t, { numPages: T } = o, E = o.maxVisiblePages ?? T, D = r(), O = (0, u.useMemo)(() => s(D.spacing.threeXL) + s(D.spacing.twoXS), [D.spacing.threeXL, D.spacing.twoXS]), k = (0, u.useMemo)(() => 2 * s(D.spacing.threeXL) + s(D.spacing.twoXS), [D.spacing.threeXL, D.spacing.twoXS]), A = o.queryParamKey ? {
		paramKey: o.queryParamKey,
		valueType: "int_value",
		clearable: !1
	} : void 0, [j, M] = l({
		getStateFromWidgetMgr: b,
		getDefaultStateFromProto: x,
		getCurrStateFromProto: S,
		updateWidgetMgrState: C,
		element: o,
		widgetMgr: v,
		fragmentId: _,
		formClearBehavior: "resetValueOnly",
		queryParamBinding: A
	}), N = o.setValue ? o.value : j, P = Math.min(T, Math.max(1, N)), F = e(w), I = (0, u.useMemo)(() => ["width"], []), { values: L, elementRef: R } = a(I), z = L[0] ?? 0, B = (0, u.useMemo)(() => {
		if (z === 0) return Math.min(E, g);
		let e = z - k, t = Math.max(0, Math.floor(e / O)), n = Math.min(E, t);
		return n >= 5 ? n : n >= 3 ? 2 : +(n >= 1);
	}, [
		z,
		E,
		k,
		O
	]), V = (0, u.useMemo)(() => y(P, T, B), [
		P,
		T,
		B
	]), H = (0, u.useCallback)((e) => {
		e >= 1 && e <= T && e !== P && M({
			value: e,
			fromUser: !0
		});
	}, [
		P,
		T,
		M
	]), U = (0, u.useCallback)(() => {
		P > 1 && M({
			value: P - 1,
			fromUser: !0
		});
	}, [P, M]), W = (0, u.useCallback)(() => {
		P < T && M({
			value: P + 1,
			fromUser: !0
		});
	}, [
		P,
		T,
		M
	]), G = i || P === 1, K = i || P === T;
	return /* @__PURE__ */ c.jsx(d, {
		ref: R,
		className: "stPagination",
		"data-testid": "stPagination",
		shouldStretch: F,
		children: /* @__PURE__ */ c.jsxs(f, {
			role: "navigation",
			"aria-label": "Pagination",
			children: [
				/* @__PURE__ */ c.jsx(h, {
					type: "button",
					onClick: U,
					disabled: G,
					"aria-label": "Previous page",
					"data-testid": "stPaginationPrev",
					children: /* @__PURE__ */ c.jsx(n, {
						iconValue: ":material/chevron_left:",
						size: "lg"
					})
				}),
				V.map((e) => {
					if (e.type === "ellipsis") return /* @__PURE__ */ c.jsx(m, {
						"aria-hidden": "true",
						"data-testid": "stPaginationEllipsis",
						children: "…"
					}, `ellipsis-${e.position}`);
					let t = e.page === P;
					return /* @__PURE__ */ c.jsx(p, {
						type: "button",
						isSelected: t,
						disabled: i,
						onClick: () => H(e.page),
						"aria-label": `Page ${e.page}`,
						"aria-current": t ? "page" : void 0,
						"data-testid": t ? "stPaginationPageActive" : "stPaginationPage",
						children: e.page
					}, e.page);
				}),
				/* @__PURE__ */ c.jsx(h, {
					type: "button",
					onClick: W,
					disabled: K,
					"aria-label": "Next page",
					"data-testid": "stPaginationNext",
					children: /* @__PURE__ */ c.jsx(n, {
						iconValue: ":material/chevron_right:",
						size: "lg"
					})
				})
			]
		})
	});
}
var T = (0, u.memo)(w);
//#endregion
export { T as default };

//# sourceMappingURL=Pagination-pDKwUkpJ-DjGpyma5.js.map