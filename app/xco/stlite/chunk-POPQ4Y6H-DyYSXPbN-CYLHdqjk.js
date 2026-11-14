import { T as e, b6 as t, c as n } from "./mermaid.core-iLj2gv8s-DM09IeU-.js";
//#region ../react/build/chunk-POPQ4Y6H-DyYSXPbN.js
var r = /* @__PURE__ */ n((n, r, o, s) => {
	n.attr("class", o);
	let { width: c, height: l, x: u, y: d } = i(n, r);
	e(n, l, c, s);
	let f = a(u, d, c, l, r);
	n.attr("viewBox", f), t.debug(`viewBox configured: ${f} with padding: ${r}`);
}, "setupViewPortForSVG"), i = /* @__PURE__ */ n((e, t) => {
	let n = e.node()?.getBBox() || {
		width: 0,
		height: 0,
		x: 0,
		y: 0
	};
	return {
		width: n.width + t * 2,
		height: n.height + t * 2,
		x: n.x,
		y: n.y
	};
}, "calculateDimensionsWithPadding"), a = /* @__PURE__ */ n((e, t, n, r, i) => `${e - i} ${t - i} ${n} ${r}`, "createViewBox");
//#endregion
export { r as t };

//# sourceMappingURL=chunk-POPQ4Y6H-DyYSXPbN-CYLHdqjk.js.map