import { Di as e, Z as t, za as n } from "./index-B1FrxEMd-BsPMjC5n.js";
//#region ../react/build/ProgressBar-DKsZdv_W.js
var r = /* @__PURE__ */ ((e) => (e.EXTRASMALL = "xs", e.SMALL = "sm", e))(r || {}), i = /* @__PURE__ */ e("div", { target: "e15pnmdi1" })(({ theme: e, $size: t }) => ({
	height: t === r.EXTRASMALL ? e.spacing.twoXS : e.spacing.sm,
	backgroundColor: e.colors.secondaryBg,
	borderRadius: e.radii.sm,
	overflow: "hidden"
}), ""), a = /* @__PURE__ */ e("div", { target: "e15pnmdi0" })(({ theme: e }) => ({
	width: "100%",
	height: "100%",
	backgroundColor: e.colors.secondary,
	transition: "transform 0.5s ease"
}), "");
function o({ value: e, size: o = r.SMALL, squareTopCorners: s = !1, "aria-label": c = "progress" }) {
	let l = Math.min(100, Math.max(0, e));
	return /* @__PURE__ */ n.jsx(t, {
		value: l,
		minValue: 0,
		maxValue: 100,
		"aria-label": c,
		children: /* @__PURE__ */ n.jsx(i, {
			$size: o,
			"data-testid": "stProgressBarTrack",
			style: s ? {
				borderTopLeftRadius: "0",
				borderTopRightRadius: "0"
			} : void 0,
			children: /* @__PURE__ */ n.jsx(a, { style: { transform: `translateX(${l - 100}%)` } })
		})
	});
}
//#endregion
export { o as n, r as t };

//# sourceMappingURL=ProgressBar-DKsZdv_W-C2badIUa.js.map