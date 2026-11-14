import { Co as e, Fr as t, Ha as n, Jo as r, Ln as i, Nr as a, Tn as o, Tr as s, ds as c, jr as l, ms as u, nr as d, ts as f, ur as p, za as m } from "./index-B1FrxEMd-BsPMjC5n.js";
import { t as h } from "./WidgetLabel--oJQrsAd-IbrOPlTn.js";
import { t as g } from "./WidgetLabelHelpIconInline-CmMO3-ig-CNt0dgU_.js";
import { t as _ } from "./useBasicWidgetState-DVivDFu--yiQ4kKRs.js";
//#region ../react/build/ButtonGroup-D_brxMJk.js
var v = /* @__PURE__ */ u(c(), 1);
function y(e) {
	let t = e.contentIcon, n = e.content ?? "";
	return t ? `${t} ${n}`.trim() : n;
}
function b(e, t) {
	if (!(t instanceof HTMLElement)) return;
	let n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), i = getComputedStyle(e), a = Number.parseFloat(i.scrollPaddingInlineStart) || 0, o = Number.parseFloat(i.scrollPaddingInlineEnd) || 0, s = r.left - (n.left + a), c = r.right - (n.right - o);
	s >= 0 && c <= 0 || (e.scrollLeft += s < 0 ? s : c);
}
function x(e, t) {
	for (let n = e.length - 1; n >= 0; n--) if (y(e[n]) === t) return n;
	return -1;
}
function S(e, t) {
	let n = [];
	for (let r of t) {
		let t = x(e, r);
		t >= 0 && n.push(t);
	}
	return n;
}
function C(e, t) {
	return e.getStringArrayValue(t);
}
function w(e) {
	return (e.default ?? []).map((t) => {
		let n = e.options[t];
		return n ? y(n) : "";
	}).filter((e) => e !== "");
}
function T(e) {
	return e.rawValues ?? [];
}
function E(e, t, n, r) {
	t.setStringArrayValue(e.id, n.value, {
		formId: e.formId,
		fragmentId: r,
		fromUser: n.fromUser
	});
}
function D(c) {
	let { disabled: u, element: x, fragmentId: D, widgetMgr: O, widthConfig: k } = c, { clickMode: A, options: j, style: M, label: N, labelVisibility: P, help: F, required: I } = x, L = x.queryParamKey ? {
		paramKey: x.queryParamKey,
		valueType: "string_array_value",
		clearable: !0,
		urlFormat: "repeated"
	} : void 0, [R, z] = _({
		getStateFromWidgetMgr: C,
		getDefaultStateFromProto: w,
		getCurrStateFromProto: T,
		updateWidgetMgrState: E,
		element: x,
		widgetMgr: O,
		fragmentId: D,
		formClearBehavior: "resetValueOnly",
		queryParamBinding: L
	}), B = e(k), V = f(x.wrap), H = (0, v.useRef)(null), U = (0, v.useMemo)(() => j.map(y).join("\0"), [j]), { canScrollLeft: W, canScrollRight: G } = r({
		elementRef: H,
		enabled: !V,
		layoutKey: U
	});
	(0, v.useEffect)(() => {
		H.current && (I ? H.current.setAttribute("aria-required", "true") : H.current.removeAttribute("aria-required"));
	}, [I]), (0, v.useEffect)(() => {
		if (V || !H.current || R.length === 0) return;
		let e = H.current, t = document.activeElement, n = t instanceof Element && e.contains(t);
		if (n && !t.hasAttribute("data-selected")) return;
		let r = n ? t : e.querySelector("[data-selected]");
		r && b(e, r);
	}, [
		V,
		R,
		U
	]), (0, v.useEffect)(() => {
		if (R.length === 0 || S(j, R).length > 0) return;
		let e = T(x);
		z({
			value: e.length > 0 ? e : w(x),
			fromUser: !1
		});
	}, [
		j,
		R,
		z,
		x
	]);
	let K = A === o.ClickMode.MULTI_SELECT ? "multiple" : "single", q = (0, v.useCallback)((e) => `${x.id}-${e}`, [x.id]), J = (0, v.useMemo)(() => new Set(S(j, R).map((e) => q(e))), [
		j,
		R,
		q
	]), Y = (0, v.useCallback)((e) => {
		if (e === "all") return;
		let t = `${x.id}-`, n = [...e].map((e) => y(j[Number(String(e).slice(t.length))])), r = new Set(R);
		n.length === R.length && n.every((e) => r.has(e)) || z({
			value: n,
			fromUser: !0
		});
	}, [
		j,
		R,
		z,
		x.id
	]), X = M === o.Style.PILLS, Z = (0, v.useMemo)(() => {
		let e = X ? l : a, t = X ? "pills" : "segmented_control";
		return j.map((n, r) => /* @__PURE__ */ m.jsx(e, {
			id: q(r),
			"data-variant": t,
			$containerWidth: B,
			$wrap: V,
			children: /* @__PURE__ */ m.jsx(i, {
				icon: n.contentIcon ?? void 0,
				label: n.content ?? "",
				iconSize: "base"
			})
		}, `${y(n)}-${r}`));
	}, [
		j,
		X,
		B,
		V,
		q
	]);
	return /* @__PURE__ */ m.jsxs(s, {
		className: "stButtonGroup",
		"data-testid": "stButtonGroup",
		containerWidth: B,
		children: [/* @__PURE__ */ m.jsx(h, {
			label: N,
			disabled: u,
			labelVisibility: n(P?.value ?? d.LabelVisibilityOptions.COLLAPSED),
			children: F && /* @__PURE__ */ m.jsx(g, {
				content: F,
				placement: p.TOP,
				label: N
			})
		}), /* @__PURE__ */ m.jsx(t, {
			ref: H,
			selectionMode: K,
			selectedKeys: J,
			onSelectionChange: Y,
			isDisabled: u,
			disallowEmptySelection: I && K === "single",
			"aria-label": x.label,
			$isPills: X,
			$containerWidth: B,
			$wrap: V,
			"data-can-scroll-start": W ? "" : void 0,
			"data-can-scroll-end": G ? "" : void 0,
			children: Z
		})]
	});
}
var O = (0, v.memo)(D);
//#endregion
export { O as default };

//# sourceMappingURL=ButtonGroup-D_brxMJk-BOjSceyZ.js.map