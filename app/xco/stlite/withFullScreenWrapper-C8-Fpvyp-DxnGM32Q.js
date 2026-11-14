import { Di as e, Vo as t, Wo as n, cs as r, ds as i, ms as a, qr as o, ua as s, za as c } from "./index-B1FrxEMd-BsPMjC5n.js";
//#region ../react/build/withFullScreenWrapper-C8-Fpvyp.js
var l = /* @__PURE__ */ a(i(), 1), u = (0, l.createContext)(null);
u.displayName = "ElementFullscreenContext";
var d = /* @__PURE__ */ e("div", { target: "elp1w7k0" })(({ theme: e, isExpanded: t }) => ({
	width: "100%",
	height: "100%",
	...t ? {
		position: "fixed",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		background: e.colors.bgColor,
		zIndex: e.zIndices.fullscreenWrapper,
		padding: e.spacing.md,
		paddingTop: e.sizes.fullScreenHeaderHeight,
		overflow: "auto",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	} : {}
}), ""), f = () => {
	let { setFullScreen: e } = (0, l.useContext)(o), [t, n] = (0, l.useState)(!1), { fullHeight: i, fullWidth: a } = r(), s = (0, l.useCallback)((t) => {
		n(t), e(t);
	}, [e]), c = (0, l.useCallback)(() => {
		document.body.style.overflow = "hidden", s(!0);
	}, [s]), u = (0, l.useCallback)(() => {
		document.body.style.overflow = "unset", s(!1);
	}, [s]), d = (0, l.useCallback)((e) => {
		e.key === "Escape" && t && u();
	}, [u, t]);
	return (0, l.useEffect)(() => (document.addEventListener("keydown", d, !1), () => {
		document.removeEventListener("keydown", d, !1);
	}), [d]), (0, l.useMemo)(() => ({
		expanded: t,
		zoomIn: c,
		zoomOut: u,
		fullHeight: i,
		fullWidth: a
	}), [
		t,
		c,
		u,
		i,
		a
	]);
}, p = ({ children: e }) => {
	let r = n(), { expanded: i, fullHeight: a, fullWidth: o, zoomIn: s, zoomOut: p } = f(), { width: m, elementRef: h } = t(), g = (0, l.useMemo)(() => ({
		width: i ? o : m,
		height: i ? a : void 0,
		expanded: i,
		expand: s,
		collapse: p
	}), [
		i,
		a,
		o,
		m,
		s,
		p
	]);
	return /* @__PURE__ */ c.jsx(u.Provider, {
		value: g,
		children: /* @__PURE__ */ c.jsx(d, {
			ref: h,
			isExpanded: i,
			"data-testid": "stFullScreenFrame",
			theme: r,
			children: e
		})
	});
};
function m(e) {
	let t = (t) => /* @__PURE__ */ c.jsx(p, { children: /* @__PURE__ */ c.jsx(e, { ...t }) });
	return t.displayName = `withFullScreenWrapper(${e.displayName || e.name})`, s(t, e);
}
//#endregion
export { m as n, u as t };

//# sourceMappingURL=withFullScreenWrapper-C8-Fpvyp-DxnGM32Q.js.map