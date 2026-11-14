import { c as e } from "./transform-B2AI7qp--hg0kwf7R.js";
import { G as t, Q as n, T as r, a1 as i, am as a, aw as o, b3 as s, b6 as c, bX as l, c as u } from "./mermaid.core-iLj2gv8s-DM09IeU-.js";
import { t as d } from "./layout-DQTnpldL-DhRkhSO3.js";
import { i as f, n as p, r as m } from "./chunk-IMKFNOWR-DB9EQfRk-Ep3OROQw.js";
//#region ../react/build/stateDiagram-D77RDMKH-CswFRitx.js
var h = /* @__PURE__ */ u((e) => e.append("circle").attr("class", "start-state").attr("r", a().state.sizeUnit).attr("cx", a().state.padding + a().state.sizeUnit).attr("cy", a().state.padding + a().state.sizeUnit), "drawStartState"), g = /* @__PURE__ */ u((e) => e.append("line").style("stroke", "grey").style("stroke-dasharray", "3").attr("x1", a().state.textHeight).attr("class", "divider").attr("x2", a().state.textHeight * 2).attr("y1", 0).attr("y2", 0), "drawDivider"), _ = /* @__PURE__ */ u((e, t) => {
	let n = e.append("text").attr("x", 2 * a().state.padding).attr("y", a().state.textHeight + 2 * a().state.padding).attr("font-size", a().state.fontSize).attr("class", "state-title").text(t.id), r = n.node().getBBox();
	return e.insert("rect", ":first-child").attr("x", a().state.padding).attr("y", a().state.padding).attr("width", r.width + 2 * a().state.padding).attr("height", r.height + 2 * a().state.padding).attr("rx", a().state.radius), n;
}, "drawSimpleState"), v = /* @__PURE__ */ u((e, t) => {
	let n = /* @__PURE__ */ u(function(e, t, n) {
		let r = e.append("tspan").attr("x", 2 * a().state.padding).text(t);
		n || r.attr("dy", a().state.textHeight);
	}, "addTspan"), r = e.append("text").attr("x", 2 * a().state.padding).attr("y", a().state.textHeight + 1.3 * a().state.padding).attr("font-size", a().state.fontSize).attr("class", "state-title").text(t.descriptions[0]).node().getBBox(), i = r.height, o = e.append("text").attr("x", a().state.padding).attr("y", i + a().state.padding * .4 + a().state.dividerMargin + a().state.textHeight).attr("class", "state-description"), s = !0, c = !0;
	t.descriptions.forEach(function(e) {
		s || (n(o, e, c), c = !1), s = !1;
	});
	let l = e.append("line").attr("x1", a().state.padding).attr("y1", a().state.padding + i + a().state.dividerMargin / 2).attr("y2", a().state.padding + i + a().state.dividerMargin / 2).attr("class", "descr-divider"), d = o.node().getBBox(), f = Math.max(d.width, r.width);
	return l.attr("x2", f + 3 * a().state.padding), e.insert("rect", ":first-child").attr("x", a().state.padding).attr("y", a().state.padding).attr("width", f + 2 * a().state.padding).attr("height", d.height + i + 2 * a().state.padding).attr("rx", a().state.radius), e;
}, "drawDescrState"), y = /* @__PURE__ */ u((e, t, n) => {
	let r = a().state.padding, i = 2 * a().state.padding, o = e.node().getBBox(), s = o.width, c = o.x, l = e.append("text").attr("x", 0).attr("y", a().state.titleShift).attr("font-size", a().state.fontSize).attr("class", "state-title").text(t.id), u = l.node().getBBox().width + i, d = Math.max(u, s);
	d === s && (d += i);
	let f, p = e.node().getBBox();
	t.doc, f = c - r, u > s && (f = (s - d) / 2 + r), Math.abs(c - p.x) < r && u > s && (f = c - (u - s) / 2);
	let m = 1 - a().state.textHeight;
	return e.insert("rect", ":first-child").attr("x", f).attr("y", m).attr("class", n ? "alt-composit" : "composit").attr("width", d).attr("height", p.height + a().state.textHeight + a().state.titleShift + 1).attr("rx", "0"), l.attr("x", f + r), u <= s && l.attr("x", c + (d - i) / 2 - u / 2 + r), e.insert("rect", ":first-child").attr("x", f).attr("y", a().state.titleShift - a().state.textHeight - a().state.padding).attr("width", d).attr("height", a().state.textHeight * 3).attr("rx", a().state.radius), e.insert("rect", ":first-child").attr("x", f).attr("y", a().state.titleShift - a().state.textHeight - a().state.padding).attr("width", d).attr("height", p.height + 3 + 2 * a().state.textHeight).attr("rx", a().state.radius), e;
}, "addTitleAndBox"), b = /* @__PURE__ */ u((e) => (e.append("circle").attr("class", "end-state-outer").attr("r", a().state.sizeUnit + a().state.miniPadding).attr("cx", a().state.padding + a().state.sizeUnit + a().state.miniPadding).attr("cy", a().state.padding + a().state.sizeUnit + a().state.miniPadding), e.append("circle").attr("class", "end-state-inner").attr("r", a().state.sizeUnit).attr("cx", a().state.padding + a().state.sizeUnit + 2).attr("cy", a().state.padding + a().state.sizeUnit + 2)), "drawEndState"), x = /* @__PURE__ */ u((e, t) => {
	let n = a().state.forkWidth, r = a().state.forkHeight;
	if (t.parentId) {
		let e = n;
		n = r, r = e;
	}
	return e.append("rect").style("stroke", "black").style("fill", "black").attr("width", n).attr("height", r).attr("x", a().state.padding).attr("y", a().state.padding);
}, "drawForkJoinState"), S = /* @__PURE__ */ u((e, t, r, i) => {
	let o = 0, s = i.append("text");
	s.style("text-anchor", "start"), s.attr("class", "noteText");
	let c = e.replace(/\r\n/g, "<br/>");
	c = c.replace(/\n/g, "<br/>");
	let l = c.split(n.lineBreakRegex), u = 1.25 * a().state.noteMargin;
	for (let e of l) {
		let n = e.trim();
		if (n.length > 0) {
			let e = s.append("tspan");
			if (e.text(n), u === 0) {
				let t = e.node().getBBox();
				u += t.height;
			}
			o += u, e.attr("x", t + a().state.noteMargin), e.attr("y", r + o + 1.25 * a().state.noteMargin);
		}
	}
	return {
		textWidth: s.node().getBBox().width,
		textHeight: o
	};
}, "_drawLongText"), C = /* @__PURE__ */ u((e, t) => {
	t.attr("class", "state-note");
	let n = t.append("rect").attr("x", 0).attr("y", a().state.padding), { textWidth: r, textHeight: i } = S(e, 0, 0, t.append("g"));
	return n.attr("height", i + 2 * a().state.noteMargin), n.attr("width", r + a().state.noteMargin * 2), n;
}, "drawNote"), w = /* @__PURE__ */ u(function(e, t) {
	let n = t.id, r = {
		id: n,
		label: t.id,
		width: 0,
		height: 0
	}, i = e.append("g").attr("id", n).attr("class", "stateGroup");
	t.type === "start" && h(i), t.type === "end" && b(i), (t.type === "fork" || t.type === "join") && x(i, t), t.type === "note" && C(t.note.text, i), t.type === "divider" && g(i), t.type === "default" && t.descriptions.length === 0 && _(i, t), t.type === "default" && t.descriptions.length > 0 && v(i, t);
	let o = i.node().getBBox();
	return r.width = o.width + 2 * a().state.padding, r.height = o.height + 2 * a().state.padding, r;
}, "drawState"), T = 0, E = /* @__PURE__ */ u(function(e, t, r) {
	let d = /* @__PURE__ */ u(function(e) {
		switch (e) {
			case f.relationType.AGGREGATION: return "aggregation";
			case f.relationType.EXTENSION: return "extension";
			case f.relationType.COMPOSITION: return "composition";
			case f.relationType.DEPENDENCY: return "dependency";
		}
	}, "getRelationType");
	t.points = t.points.filter((e) => !Number.isNaN(e.y));
	let p = t.points, m = s().x(function(e) {
		return e.x;
	}).y(function(e) {
		return e.y;
	}).curve(i), h = e.append("path").attr("d", m(p)).attr("id", "edge" + T).attr("class", "transition"), g = "";
	if (a().state.arrowMarkerAbsolute && (g = o(!0)), h.attr("marker-end", "url(" + g + "#" + d(f.relationType.DEPENDENCY) + "End)"), r.title !== void 0) {
		let i = e.append("g").attr("class", "stateLabel"), { x: o, y: s } = l.calcLabelPosition(t.points), u = n.getRows(r.title), d = 0, f = [], p = 0, m = 0;
		for (let e = 0; e <= u.length; e++) {
			let t = i.append("text").attr("text-anchor", "middle").text(u[e]).attr("x", o).attr("y", s + d), n = t.node().getBBox();
			p = Math.max(p, n.width), m = Math.min(m, n.x), c.info(n.x, o, s + d), d === 0 && (d = t.node().getBBox().height, c.info("Title height", d, s)), f.push(t);
		}
		let h = d * u.length;
		if (u.length > 1) {
			let e = (u.length - 1) * d * .5;
			f.forEach((t, n) => t.attr("y", s + n * d - e)), h = d * u.length;
		}
		let g = i.node().getBBox();
		i.insert("rect", ":first-child").attr("class", "box").attr("x", o - p / 2 - a().state.padding / 2).attr("y", s - h / 2 - a().state.padding / 2 - 3.5).attr("width", p + a().state.padding).attr("height", h + a().state.padding), c.info(g);
	}
	T++;
}, "drawEdge"), D, O = {}, k = /* @__PURE__ */ u(function() {}, "setConf"), A = /* @__PURE__ */ u(function(e) {
	e.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "insertMarkers"), j = /* @__PURE__ */ u(function(t, n, i, o) {
	D = a().state;
	let s = a().securityLevel, l;
	s === "sandbox" && (l = e("#i" + n));
	let u = e(s === "sandbox" ? l.nodes()[0].contentDocument.body : "body"), d = s === "sandbox" ? l.nodes()[0].contentDocument : document;
	c.debug("Rendering diagram " + t);
	let f = u.select(`[id='${n}']`);
	A(f), N(o.db.getRootDoc(), f.append("g").attr("id", n + "-root"), void 0, !1, u, d, o);
	let p = D.padding, m = f.node().getBBox(), h = m.width + p * 2, g = m.height + p * 2, _ = h * 1.75;
	r(f, g, _, D.useMaxWidth), f.attr("viewBox", `${m.x - D.padding}  ${m.y - D.padding} ` + h + " " + g);
}, "draw"), M = /* @__PURE__ */ u((e) => e ? e.length * D.fontSizeFactor : 1, "getLabelWidth"), N = /* @__PURE__ */ u((e, r, i, a, o, s, l) => {
	let u = new t({
		compound: !0,
		multigraph: !0
	}), f, p = !0;
	for (f = 0; f < e.length; f++) if (e[f].stmt === "relation") {
		p = !1;
		break;
	}
	i ? u.setGraph({
		rankdir: "LR",
		multigraph: !0,
		compound: !0,
		ranker: "tight-tree",
		ranksep: p ? 1 : D.edgeLengthFactor,
		nodeSep: p ? 1 : 50,
		isMultiGraph: !0
	}) : u.setGraph({
		rankdir: "TB",
		multigraph: !0,
		compound: !0,
		ranksep: p ? 1 : D.edgeLengthFactor,
		nodeSep: p ? 1 : 50,
		ranker: "tight-tree",
		isMultiGraph: !0
	}), u.setDefaultEdgeLabel(function() {
		return {};
	});
	let m = l.db.getStates(), h = l.db.getRelations(), g = Object.keys(m);
	for (let e of g) {
		let t = m[e];
		i && (t.parentId = i);
		let n;
		if (t.doc) {
			let e = r.append("g").attr("id", t.id).attr("class", "stateGroup");
			n = N(t.doc, e, t.id, !a, o, s, l);
			{
				e = y(e, t, a);
				let r = e.node().getBBox();
				n.width = r.width, n.height = r.height + D.padding / 2, O[t.id] = { y: D.compositTitleSize };
			}
		} else n = w(r, t, u);
		if (t.note) {
			let e = w(r, {
				descriptions: [],
				id: t.id + "-note",
				note: t.note,
				type: "note"
			}, u);
			t.note.position === "left of" ? (u.setNode(n.id + "-note", e), u.setNode(n.id, n)) : (u.setNode(n.id, n), u.setNode(n.id + "-note", e)), u.setParent(n.id, n.id + "-group"), u.setParent(n.id + "-note", n.id + "-group");
		} else u.setNode(n.id, n);
	}
	c.debug("Count=", u.nodeCount(), u);
	let _ = 0;
	h.forEach(function(e) {
		_++, c.debug("Setting edge", e), u.setEdge(e.id1, e.id2, {
			relation: e,
			width: M(e.title),
			height: D.labelHeight * n.getRows(e.title).length,
			labelpos: "c"
		}, "id" + _);
	}), d(u), c.debug("Graph after layout", u.nodes());
	let v = r.node();
	u.nodes().forEach(function(e) {
		e !== void 0 && u.node(e) !== void 0 ? (c.warn("Node " + e + ": " + JSON.stringify(u.node(e))), o.select("#" + v.id + " #" + e).attr("transform", "translate(" + (u.node(e).x - u.node(e).width / 2) + "," + (u.node(e).y + (O[e] ? O[e].y : 0) - u.node(e).height / 2) + " )"), o.select("#" + v.id + " #" + e).attr("data-x-shift", u.node(e).x - u.node(e).width / 2), s.querySelectorAll("#" + v.id + " #" + e + " .divider").forEach((e) => {
			let t = e.parentElement, n = 0, r = 0;
			t && (t.parentElement && (n = t.parentElement.getBBox().width), r = parseInt(t.getAttribute("data-x-shift"), 10), Number.isNaN(r) && (r = 0)), e.setAttribute("x1", 0 - r + 8), e.setAttribute("x2", n - r - 8);
		})) : c.debug("No Node " + e + ": " + JSON.stringify(u.node(e)));
	});
	let b = v.getBBox();
	u.edges().forEach(function(e) {
		e !== void 0 && u.edge(e) !== void 0 && (c.debug("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(u.edge(e))), E(r, u.edge(e), u.edge(e).relation));
	}), b = v.getBBox();
	let x = {
		id: i || "root",
		label: i || "root",
		width: 0,
		height: 0
	};
	return x.width = b.width + 2 * D.padding, x.height = b.height + 2 * D.padding, c.debug("Doc rendered", x, u), x;
}, "renderDoc"), P = {
	parser: m,
	get db() {
		return new f(1);
	},
	renderer: {
		setConf: k,
		draw: j
	},
	styles: p,
	init: /* @__PURE__ */ u((e) => {
		e.state ||= {}, e.state.arrowMarkerAbsolute = e.arrowMarkerAbsolute;
	}, "init")
};
//#endregion
export { P as diagram };

//# sourceMappingURL=stateDiagram-D77RDMKH-CswFRitx-BPGW8SjV.js.map