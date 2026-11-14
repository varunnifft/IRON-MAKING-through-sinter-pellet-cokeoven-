import { Wo as e, ds as t, ms as n } from "./index-B1FrxEMd-BsPMjC5n.js";
//#region ../react/build/useTextInputAutoExpand-DMMYfD-T.js
var r = /* @__PURE__ */ n(t(), 1), i = 6.5, a = 1, o = (e) => {
	let t = 0, { current: n } = e;
	return n && (n.style.height = "auto", t = n.scrollHeight, n.style.height = ""), t;
}, s = (e, t, n) => e > 0 && n.current ? Math.abs(e - t) > a : !1, c = (e, t) => {
	if (e.current && t.current) {
		let { offsetHeight: n } = e.current;
		if (n === 0) return;
		t.current.minHeight = n, t.current.maxHeight = n * i;
	}
}, l = (e, t, n) => e ? `${t + a}px` : n ? String(n) : "", u = (e) => e ? `${e}px` : "", d = ({ textareaRef: t, dependencies: n = [] }) => {
	let i = e(), a = (0, r.useRef)({
		minHeight: 0,
		maxHeight: 0
	}), [d, f] = (0, r.useState)(0), [p, m] = (0, r.useState)(!1), h = (0, r.useCallback)(() => {
		a.current.minHeight === 0 && c(t, a), f(o(t));
	}, [t, f]), g = (0, r.useCallback)(() => {
		f(0);
	}, [f]);
	(0, r.useLayoutEffect)(() => {
		t.current && c(t, a);
	}, [t]), (0, r.useLayoutEffect)(() => {
		let { minHeight: e } = a.current;
		m(s(d, e, t));
	}, [d, t]), (0, r.useLayoutEffect)(() => {
		h();
	}, [
		t,
		h,
		...n
	]);
	let { maxHeight: _ } = a.current, v = i.sizes.minElementHeight;
	return {
		isExtended: p,
		height: l(p, d, v),
		maxHeight: u(_),
		updateScrollHeight: h,
		clearScrollHeight: g
	};
};
//#endregion
export { d as t };

//# sourceMappingURL=useTextInputAutoExpand-DMMYfD-T-DIVuO6XL.js.map