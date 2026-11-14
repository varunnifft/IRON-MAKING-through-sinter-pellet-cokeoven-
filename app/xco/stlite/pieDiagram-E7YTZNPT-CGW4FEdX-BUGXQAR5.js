import { n as e } from "./ordinal-DkyryJlW-DURmPlUH.js";
import "./transform-B2AI7qp--hg0kwf7R.js";
import { M as t, N as n, T as r, V as i, a7 as a, ai as o, aj as s, am as c, an as l, b6 as u, bB as d, bO as f, bi as p, bx as m, by as h, bz as g, c as _, i as v } from "./mermaid.core-iLj2gv8s-DM09IeU-.js";
import { t as y } from "./chunk-JWPE2WC7-BuMGiM24-C4YAbtTB.js";
import { i as b } from "./cynefin-OW5HDTMX--IlWkCwH-DhMvmN4k.js";
import { t as x } from "./arc-DMsMwa2D-xC8iGnUF.js";
//#region ../react/build/pieDiagram-E7YTZNPT-CGW4FEdX.js
function S(e, t) {
	return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function C(e) {
	return e;
}
function w() {
	var e = C, t = S, n = null, r = i(0), a = i(f), o = i(0);
	function s(i) {
		var s, c = (i = v(i)).length, l, u, d = 0, p = Array(c), m = Array(c), h = +r.apply(this, arguments), g = Math.min(f, Math.max(-f, a.apply(this, arguments) - h)), _, y = Math.min(Math.abs(g) / c, o.apply(this, arguments)), b = y * (g < 0 ? -1 : 1), x;
		for (s = 0; s < c; ++s) (x = m[p[s] = s] = +e(i[s], s, i)) > 0 && (d += x);
		for (t == null ? n != null && p.sort(function(e, t) {
			return n(i[e], i[t]);
		}) : p.sort(function(e, n) {
			return t(m[e], m[n]);
		}), s = 0, u = d ? (g - c * b) / d : 0; s < c; ++s, h = _) l = p[s], x = m[l], _ = h + (x > 0 ? x * u : 0) + b, m[l] = {
			data: i[l],
			index: s,
			value: x,
			startAngle: h,
			endAngle: _,
			padAngle: y
		};
		return m;
	}
	return s.value = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : i(+t), s) : e;
	}, s.sortValues = function(e) {
		return arguments.length ? (t = e, n = null, s) : t;
	}, s.sort = function(e) {
		return arguments.length ? (n = e, t = null, s) : n;
	}, s.startAngle = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : i(+e), s) : r;
	}, s.endAngle = function(e) {
		return arguments.length ? (a = typeof e == "function" ? e : i(+e), s) : a;
	}, s.padAngle = function(e) {
		return arguments.length ? (o = typeof e == "function" ? e : i(+e), s) : o;
	}, s;
}
var T = a.pie, E = {
	sections: /* @__PURE__ */ new Map(),
	showData: !1
}, D = E.sections, O = E.showData, k = structuredClone(T), A = {
	getConfig: /* @__PURE__ */ _(() => structuredClone(k), "getConfig"),
	clear: /* @__PURE__ */ _(() => {
		D = /* @__PURE__ */ new Map(), O = E.showData, n();
	}, "clear"),
	setDiagramTitle: d,
	getDiagramTitle: l,
	setAccTitle: g,
	getAccTitle: s,
	setAccDescription: h,
	getAccDescription: o,
	addSection: /* @__PURE__ */ _(({ label: e, value: t }) => {
		if (t < 0) throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);
		D.has(e) || (D.set(e, t), u.debug(`added new section: ${e}, with value: ${t}`));
	}, "addSection"),
	getSections: /* @__PURE__ */ _(() => D, "getSections"),
	setShowData: /* @__PURE__ */ _((e) => {
		O = e;
	}, "setShowData"),
	getShowData: /* @__PURE__ */ _(() => O, "getShowData")
}, j = /* @__PURE__ */ _((e, t) => {
	y(e, t), t.setShowData(e.showData), e.sections.map(t.addSection);
}, "populateDb"), M = { parse: /* @__PURE__ */ _(async (e) => {
	let t = await b("pie", e);
	u.debug(t), j(t, A);
}, "parse") }, N = /* @__PURE__ */ _((e) => `
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`, "getStyles"), P = /* @__PURE__ */ _((e) => {
	let t = [...e.values()].reduce((e, t) => e + t, 0), n = [...e.entries()].map(([e, t]) => ({
		label: e,
		value: t
	})).filter((e) => e.value / t * 100 >= 1);
	return w().value((e) => e.value).sort(null)(n);
}, "createPieArcs"), F = {
	parser: M,
	db: A,
	renderer: { draw: /* @__PURE__ */ _((n, i, a, o) => {
		u.debug("rendering pie chart\n" + n);
		let s = o.db, l = c(), d = t(s.getConfig(), l.pie), f = m(i), h = f.append("g");
		h.attr("transform", "translate(225,225)");
		let { themeVariables: g } = l, [_] = p(g.pieOuterStrokeWidth);
		_ ??= 2;
		let v = d.legendPosition, y = d.textPosition, b = d.donutHole > 0 && d.donutHole <= .9 ? d.donutHole : 0, S = x().innerRadius(b * 185).outerRadius(185), C = x().innerRadius(185 * y).outerRadius(185 * y), w = h.append("g");
		w.append("circle").attr("cx", 0).attr("cy", 0).attr("r", 185 + _ / 2).attr("class", "pieOuterCircle");
		let T = s.getSections(), E = P(T), D = [
			g.pie1,
			g.pie2,
			g.pie3,
			g.pie4,
			g.pie5,
			g.pie6,
			g.pie7,
			g.pie8,
			g.pie9,
			g.pie10,
			g.pie11,
			g.pie12
		], O = 0;
		T.forEach((e) => {
			O += e;
		});
		let k = E.filter((e) => (e.data.value / O * 100).toFixed(0) !== "0"), A = e(D).domain([...T.keys()]);
		w.selectAll("mySlices").data(k).enter().append("path").attr("d", S).attr("fill", (e) => A(e.data.label)).attr("class", (e) => {
			let t = "pieCircle";
			return d.highlightSlice === "hover" ? t += " highlightedOnHover" : d.highlightSlice === e.data.label && (t += " highlighted"), t;
		}), w.selectAll("mySlices").data(k).enter().append("text").text((e) => (e.data.value / O * 100).toFixed(0) + "%").attr("transform", (e) => "translate(" + C.centroid(e) + ")").style("text-anchor", "middle").attr("class", "slice");
		let j = h.append("text").text(s.getDiagramTitle()).attr("x", 0).attr("y", -200).attr("class", "pieTitleText"), M = [...T.entries()].map(([e, t]) => ({
			label: e,
			value: t
		})), N = h.selectAll(".legend").data(M).enter().append("g").attr("class", "legend");
		N.append("rect").attr("width", 18).attr("height", 18).style("fill", (e) => A(e.label)).style("stroke", (e) => A(e.label)), N.append("text").attr("x", 22).attr("y", 14).text((e) => s.getShowData() ? `${e.label} [${e.value}]` : e.label);
		let F = Math.max(...N.selectAll("text").nodes().map((e) => e?.getBoundingClientRect().width ?? 0)), I = 450, L = 490, R = M.length * 22;
		switch (v) {
			case "center":
				N.attr("transform", (e, t) => {
					let n = 22 * M.length / 2, r = -F / 2 - 22, i = t * 22 - n;
					return "translate(" + r + "," + i + ")";
				});
				break;
			case "top":
				I += R, N.attr("transform", (e, t) => `translate(${-F / 2 - 22}, ${t * 22 - 185})`), w.attr("transform", () => `translate(0, ${R + 22})`);
				break;
			case "bottom":
				I += R, N.attr("transform", (e, t) => {
					let n = -F / 2 - 22, r = t * 22 - -207;
					return "translate(" + n + "," + r + ")";
				});
				break;
			case "left":
				L += 22 + F, N.attr("transform", (e, t) => {
					let n = 22 * M.length / 2;
					return "translate(-207," + (t * 22 - n) + ")";
				}), w.attr("transform", () => `translate(${F + 18 + 4}, 0)`);
				break;
			default: L += 22 + F, N.attr("transform", (e, t) => {
				let n = 22 * M.length / 2;
				return "translate(216," + (t * 22 - n) + ")";
			});
		}
		let z = j.node()?.getBoundingClientRect().width ?? 0, B = 225 - z / 2, V = 225 + z / 2, H = Math.min(0, B), U = Math.max(L, V) - H;
		f.attr("viewBox", `${H} 0 ${U} ${I}`), r(f, I, U, d.useMaxWidth);
	}, "draw") },
	styles: N
};
//#endregion
export { F as diagram };

//# sourceMappingURL=pieDiagram-E7YTZNPT-CGW4FEdX-BUGXQAR5.js.map