import { c as e } from "./transform-B2AI7qp--hg0kwf7R.js";
import { a9 as t, b4 as n, c as r } from "./mermaid.core-iLj2gv8s-DM09IeU-.js";
//#region ../react/build/chunk-F27PBJKO-D1wNBEs6.js
var i = /* @__PURE__ */ r((e, t) => {
	let n = e.append("rect");
	if (n.attr("x", t.x), n.attr("y", t.y), n.attr("fill", t.fill), n.attr("stroke", t.stroke), n.attr("width", t.width), n.attr("height", t.height), t.name && n.attr("name", t.name), t.rx && n.attr("rx", t.rx), t.ry && n.attr("ry", t.ry), t.attrs !== void 0) for (let e in t.attrs) n.attr(e, t.attrs[e]);
	return t.class && n.attr("class", t.class), n;
}, "drawRect"), a = /* @__PURE__ */ r((e, t) => {
	i(e, {
		x: t.startx,
		y: t.starty,
		width: t.stopx - t.startx,
		height: t.stopy - t.starty,
		fill: t.fill,
		stroke: t.stroke,
		class: "rect"
	}).lower();
}, "drawBackgroundRect"), o = /* @__PURE__ */ r((e, t) => {
	let r = t.text.replace(n, " "), i = e.append("text");
	i.attr("x", t.x), i.attr("y", t.y), i.attr("class", "legend"), i.style("text-anchor", t.anchor), t.class && i.attr("class", t.class);
	let a = i.append("tspan");
	return a.attr("x", t.x + t.textMargin * 2), a.text(r), i;
}, "drawText"), s = /* @__PURE__ */ r((e, n, r, i) => {
	let a = e.append("image");
	a.attr("x", n), a.attr("y", r);
	let o = t.sanitizeUrl(i);
	a.attr("xlink:href", o);
}, "drawImage"), c = /* @__PURE__ */ r((e, n, r, i) => {
	let a = e.append("use");
	a.attr("x", n), a.attr("y", r);
	let o = t.sanitizeUrl(i);
	a.attr("xlink:href", `#${o}`);
}, "drawEmbeddedImage"), l = /* @__PURE__ */ r(() => ({
	x: 0,
	y: 0,
	width: 100,
	height: 100,
	fill: "#EDF2AE",
	stroke: "#666",
	anchor: "start",
	rx: 0,
	ry: 0
}), "getNoteRect"), u = /* @__PURE__ */ r(() => ({
	x: 0,
	y: 0,
	width: 100,
	height: 100,
	"text-anchor": "start",
	style: "#666",
	textMargin: 0,
	rx: 0,
	ry: 0,
	tspan: !0
}), "getTextObj"), d = /* @__PURE__ */ r(() => {
	let t = e(".mermaidTooltip");
	return t.empty() && (t = e("body").append("div").attr("class", "mermaidTooltip").style("opacity", 0).style("position", "absolute").style("text-align", "center").style("max-width", "200px").style("padding", "2px").style("font-size", "12px").style("background", "#ffffde").style("border", "1px solid #333").style("border-radius", "2px").style("pointer-events", "none").style("z-index", "100")), t;
}, "createTooltip");
//#endregion
export { o as a, a as c, d as i, s as n, u as o, l as r, i as s, c as t };

//# sourceMappingURL=chunk-F27PBJKO-D1wNBEs6-BZkgQri7.js.map