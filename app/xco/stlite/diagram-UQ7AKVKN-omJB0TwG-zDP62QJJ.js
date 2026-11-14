import { M as e, N as t, T as n, a7 as r, ai as i, aj as a, al as o, an as s, av as c, b6 as l, bB as u, bx as d, by as f, bz as p, c as m } from "./mermaid.core-iLj2gv8s-DM09IeU-.js";
import { t as h } from "./chunk-JWPE2WC7-BuMGiM24-C4YAbtTB.js";
import { i as g } from "./cynefin-OW5HDTMX--IlWkCwH-DhMvmN4k.js";
//#region ../react/build/diagram-UQ7AKVKN-omJB0TwG.js
var _ = {
	showLegend: !0,
	ticks: 5,
	max: null,
	min: 0,
	graticule: "circle"
}, v = 32, y = {
	axes: [],
	curves: [],
	options: _
}, b = structuredClone(y), x = r.radar, S = /* @__PURE__ */ m(() => e({
	...x,
	...o().radar
}), "getConfig"), C = /* @__PURE__ */ m(() => b.axes, "getAxes"), w = /* @__PURE__ */ m(() => b.curves, "getCurves"), T = /* @__PURE__ */ m(() => b.options, "getOptions"), E = /* @__PURE__ */ m((e) => {
	b.axes = e.map((e) => ({
		name: e.name,
		label: e.label ?? e.name
	}));
}, "setAxes"), D = /* @__PURE__ */ m((e) => {
	b.curves = e.map((e) => ({
		name: e.name,
		label: e.label ?? e.name,
		entries: O(e.entries)
	}));
}, "setCurves"), O = /* @__PURE__ */ m((e) => {
	if (e[0].axis == null) return e.map((e) => e.value);
	let t = C();
	if (t.length === 0) throw Error("Axes must be populated before curves for reference entries");
	return t.map((t) => {
		let n = e.find((e) => e.axis?.$refText === t.name);
		if (n === void 0) throw Error("Missing entry for axis " + t.label);
		return n.value;
	});
}, "computeCurveEntries"), k = {
	getAxes: C,
	getCurves: w,
	getOptions: T,
	setAxes: E,
	setCurves: D,
	setOptions: /* @__PURE__ */ m((e) => {
		let t = e.reduce((e, t) => (e[t.name] = t, e), {});
		b.options = {
			showLegend: t.showLegend?.value ?? _.showLegend,
			ticks: t.ticks?.value ?? _.ticks,
			max: t.max?.value ?? _.max,
			min: t.min?.value ?? _.min,
			graticule: t.graticule?.value ?? _.graticule
		}, b.options.ticks > v && (l.warn(`Radar diagram ticks (${b.options.ticks}) exceeds maximum allowed (${v}). Using ${v} instead.`), b.options.ticks = v);
	}, "setOptions"),
	getConfig: S,
	clear: /* @__PURE__ */ m(() => {
		t(), b = structuredClone(y);
	}, "clear"),
	setAccTitle: p,
	getAccTitle: a,
	setDiagramTitle: u,
	getDiagramTitle: s,
	getAccDescription: i,
	setAccDescription: f
}, A = /* @__PURE__ */ m((e) => {
	h(e, k);
	let { axes: t, curves: n, options: r } = e;
	k.setAxes(t), k.setCurves(n), k.setOptions(r);
}, "populate"), j = { parse: /* @__PURE__ */ m(async (e) => {
	let t = await g("radar", e);
	l.debug(t), A(t);
}, "parse") }, M = /* @__PURE__ */ m((e, t, n, r) => {
	let i = r.db, a = i.getAxes(), o = i.getCurves(), s = i.getOptions(), c = i.getConfig(), l = i.getDiagramTitle(), u = N(d(t), c), f = s.max ?? Math.max(...o.map((e) => Math.max(...e.entries))), p = s.min, m = Math.min(c.width, c.height) / 2;
	P(u, a, m, s.ticks, s.graticule), F(u, a, m, c), I(u, a, o, p, f, s.graticule, c), z(u, o, s.showLegend, c), u.append("text").attr("class", "radarTitle").text(l).attr("x", 0).attr("y", -c.height / 2 - c.marginTop);
}, "draw"), N = /* @__PURE__ */ m((e, t) => {
	let r = t.width + t.marginLeft + t.marginRight, i = t.height + t.marginTop + t.marginBottom, a = {
		x: t.marginLeft + t.width / 2,
		y: t.marginTop + t.height / 2
	};
	return n(e, i, r, t.useMaxWidth ?? !0), e.attr("viewBox", `0 0 ${r} ${i}`).attr("overflow", "visible"), e.append("g").attr("transform", `translate(${a.x}, ${a.y})`);
}, "drawFrame"), P = /* @__PURE__ */ m((e, t, n, r, i) => {
	if (i === "circle") for (let t = 0; t < r; t++) {
		let i = n * (t + 1) / r;
		e.append("circle").attr("r", i).attr("class", "radarGraticule");
	}
	else if (i === "polygon") {
		let i = t.length;
		for (let a = 0; a < r; a++) {
			let o = n * (a + 1) / r, s = t.map((e, t) => {
				let n = 2 * t * Math.PI / i - Math.PI / 2;
				return `${o * Math.cos(n)},${o * Math.sin(n)}`;
			}).join(" ");
			e.append("polygon").attr("points", s).attr("class", "radarGraticule");
		}
	}
}, "drawGraticule"), F = /* @__PURE__ */ m((e, t, n, r) => {
	let i = t.length;
	for (let a = 0; a < i; a++) {
		let o = t[a].label, s = 2 * a * Math.PI / i - Math.PI / 2, c = Math.cos(s), l = Math.sin(s);
		e.append("line").attr("x1", 0).attr("y1", 0).attr("x2", n * r.axisScaleFactor * c).attr("y2", n * r.axisScaleFactor * l).attr("class", "radarAxisLine");
		let u = c > .01 ? "start" : c < -.01 ? "end" : "middle", d = l > .01 ? "hanging" : l < -.01 ? "auto" : "central";
		e.append("text").text(o).attr("x", n * r.axisLabelFactor * c + 4 * c).attr("y", n * r.axisLabelFactor * l + 4 * l).attr("text-anchor", u).attr("dominant-baseline", d).attr("class", "radarAxisLabel");
	}
}, "drawAxes");
function I(e, t, n, r, i, a, o) {
	let s = t.length, c = Math.min(o.width, o.height) / 2;
	n.forEach((t, n) => {
		if (t.entries.length !== s) return;
		let l = t.entries.map((e, t) => {
			let n = 2 * Math.PI * t / s - Math.PI / 2, a = L(e, r, i, c);
			return {
				x: a * Math.cos(n),
				y: a * Math.sin(n)
			};
		});
		a === "circle" ? e.append("path").attr("d", R(l, o.curveTension)).attr("class", `radarCurve-${n}`) : a === "polygon" && e.append("polygon").attr("points", l.map((e) => `${e.x},${e.y}`).join(" ")).attr("class", `radarCurve-${n}`);
	});
}
m(I, "drawCurves");
function L(e, t, n, r) {
	return r * (Math.min(Math.max(e, t), n) - t) / (n - t);
}
m(L, "relativeRadius");
function R(e, t) {
	let n = e.length, r = `M${e[0].x},${e[0].y}`;
	for (let i = 0; i < n; i++) {
		let a = e[(i - 1 + n) % n], o = e[i], s = e[(i + 1) % n], c = e[(i + 2) % n], l = {
			x: o.x + (s.x - a.x) * t,
			y: o.y + (s.y - a.y) * t
		}, u = {
			x: s.x - (c.x - o.x) * t,
			y: s.y - (c.y - o.y) * t
		};
		r += ` C${l.x},${l.y} ${u.x},${u.y} ${s.x},${s.y}`;
	}
	return `${r} Z`;
}
m(R, "closedRoundCurve");
function z(e, t, n, r) {
	if (!n) return;
	let i = (r.width / 2 + r.marginRight) * 3 / 4, a = -(r.height / 2 + r.marginTop) * 3 / 4;
	t.forEach((t, n) => {
		let r = e.append("g").attr("transform", `translate(${i}, ${a + n * 20})`);
		r.append("rect").attr("width", 12).attr("height", 12).attr("class", `radarLegendBox-${n}`), r.append("text").attr("x", 16).attr("y", 0).attr("class", "radarLegendText").text(t.label);
	});
}
m(z, "drawLegend");
var B = { draw: M }, V = /* @__PURE__ */ m((e, t) => {
	let n = "";
	for (let r = 0; r < e.THEME_COLOR_LIMIT; r++) {
		let i = e[`cScale${r}`];
		n += `
		.radarCurve-${r} {
			color: ${i};
			fill: ${i};
			fill-opacity: ${t.curveOpacity};
			stroke: ${i};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${i};
			fill-opacity: ${t.curveOpacity};
			stroke: ${i};
		}
		`;
	}
	return n;
}, "genIndexStyles"), H = /* @__PURE__ */ m((t) => {
	let n = c(), r = o(), i = e(n, r.themeVariables);
	return {
		themeVariables: i,
		radarOptions: e(i.radar, t)
	};
}, "buildRadarStyleOptions"), U = {
	parser: j,
	db: k,
	renderer: B,
	styles: /* @__PURE__ */ m(({ radar: e } = {}) => {
		let { themeVariables: t, radarOptions: n } = H(e);
		return `
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${n.axisColor};
		stroke-width: ${n.axisStrokeWidth};
	}
	.radarAxisLabel {
		font-size: ${n.axisLabelFontSize}px;
		color: ${n.axisColor};
	}
	.radarGraticule {
		fill: ${n.graticuleColor};
		fill-opacity: ${n.graticuleOpacity};
		stroke: ${n.graticuleColor};
		stroke-width: ${n.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${n.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${V(t, n)}
	`;
	}, "styles")
};
//#endregion
export { U as diagram };

//# sourceMappingURL=diagram-UQ7AKVKN-omJB0TwG-zDP62QJJ.js.map