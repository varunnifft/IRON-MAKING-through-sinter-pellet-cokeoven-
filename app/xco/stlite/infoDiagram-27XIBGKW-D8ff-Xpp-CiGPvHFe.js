import { T as e, b6 as t, bx as n, c as r } from "./mermaid.core-iLj2gv8s-DM09IeU-.js";
import { i } from "./cynefin-OW5HDTMX--IlWkCwH-DhMvmN4k.js";
//#region ../react/build/infoDiagram-27XIBGKW-D8ff-Xpp.js
var a = { parse: /* @__PURE__ */ r(async (e) => {
	let n = await i("info", e);
	t.debug(n);
}, "parse") }, o = { version: "11.17.2" }, s = {
	parser: a,
	db: { getVersion: /* @__PURE__ */ r(() => o.version, "getVersion") },
	renderer: { draw: /* @__PURE__ */ r((r, i, a) => {
		t.debug("rendering info diagram\n" + r);
		let o = n(i);
		e(o, 100, 400, !0), o.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${a}`);
	}, "draw") }
};
//#endregion
export { s as diagram };

//# sourceMappingURL=infoDiagram-27XIBGKW-D8ff-Xpp-CiGPvHFe.js.map