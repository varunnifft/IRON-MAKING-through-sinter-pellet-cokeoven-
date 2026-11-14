import { Di as e, Rn as t, ds as n, ms as r, wr as i, za as a } from "./index-B1FrxEMd-BsPMjC5n.js";
//#region ../react/build/Spinner-DnbXuvDk.js
var o = /* @__PURE__ */ r(n(), 1), s = /* @__PURE__ */ e("div", { target: "e1se5lgy3" })(({ theme: e, cache: t }) => ({ ...t ? {
	paddingBottom: e.spacing.lg,
	background: `linear-gradient(to bottom, ${e.colors.bgColor} 0%, ${e.colors.bgColor} 80%, transparent 100%)`
} : null }), ""), c = /* @__PURE__ */ e("div", { target: "e1se5lgy2" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	width: "100%",
	gap: e.spacing.sm
}), ""), l = /* @__PURE__ */ e("div", { target: "e1se5lgy1" })(({ theme: e }) => ({
	display: "flex",
	gap: e.spacing.sm,
	alignItems: "baseline"
}), ""), u = /* @__PURE__ */ e("span", { target: "e1se5lgy0" })(({ theme: e }) => ({
	opacity: e.opacities.secondary,
	fontSize: e.fontSizes.sm,
	lineHeight: e.lineHeights.none,
	whiteSpace: "nowrap"
}), ""), d = (e) => {
	let t = Math.floor(e / 3600), n = Math.floor(e % 3600 / 60), r = e % 60;
	return t === 0 && n === 0 ? `(${r.toFixed(1)} seconds)` : t === 0 ? `(${`${n} minute${n === 1 ? "" : "s"}`}${r === 0 ? "" : `, ${r.toFixed(1)} seconds`})` : `(${`${t} hour${t === 1 ? "" : "s"}`}${n === 0 ? "" : `, ${n} minute${n === 1 ? "" : "s"}`}${r === 0 ? "" : `, ${r.toFixed(1)} seconds`})`;
};
function f({ element: e }) {
	let { cache: n, showTime: r } = e, [f, p] = (0, o.useState)(0), m = (0, o.useRef)(null);
	return (0, o.useEffect)(() => {
		if (!r) return;
		m.current = Date.now();
		let e = () => {
			if (m.current !== null) {
				let e = (Date.now() - m.current) / 1e3;
				p(e);
			}
		};
		e();
		let t = setInterval(e, 100);
		return () => clearInterval(t);
	}, [r]), /* @__PURE__ */ a.jsx(s, {
		className: n ? "stSpinner stCacheSpinner" : "stSpinner",
		"data-testid": "stSpinner",
		cache: n,
		children: /* @__PURE__ */ a.jsxs(c, { children: [/* @__PURE__ */ a.jsx(t, {
			size: "lg",
			iconValue: "spinner"
		}), /* @__PURE__ */ a.jsxs(l, { children: [/* @__PURE__ */ a.jsx("div", {
			role: "status",
			children: /* @__PURE__ */ a.jsx(i, {
				source: e.text,
				allowHTML: !1
			})
		}), r && /* @__PURE__ */ a.jsx(u, { children: d(f) })] })] })
	});
}
var p = (0, o.memo)(f);
//#endregion
export { p as default };

//# sourceMappingURL=Spinner-DnbXuvDk-gNIGYDhd.js.map