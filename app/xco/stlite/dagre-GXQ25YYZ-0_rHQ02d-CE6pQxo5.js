import { $ as e, G as t, O as n, Y as r, aD as i, aE as a, aF as o, aG as s, ad as c, am as l, as as u, b6 as d, bC as f, bJ as p, bW as m, bl as h, bm as g, c as _, g as v } from "./mermaid.core-iLj2gv8s-DM09IeU-.js";
import { t as y } from "./layout-DQTnpldL-DhRkhSO3.js";
//#region ../react/build/dagre-GXQ25YYZ-0_rHQ02d.js
var b = /* @__PURE__ */ _((e, t, n) => Math.max(t, Math.min(n, e)), "clamp"), x = /* @__PURE__ */ _((e = "TB") => {
	switch (e) {
		case "BT": return "bottom";
		case "LR": return "right";
		case "RL": return "left";
		default: return "top";
	}
}, "getDefaultSelfLoopSide"), S = /* @__PURE__ */ _((e) => e === "flowchart" || e === "flowchart-v2" || e === "stateDiagram" || e === "er" || e === "classDiagram", "shouldMergeSelfLoopSegments"), C = [
	"x",
	"y",
	"width",
	"height",
	"labelBBox",
	"intersect",
	"calcIntersect",
	"diff",
	"clusterNode"
], w = /* @__PURE__ */ _((e, t, n, r, i) => {
	let a = [], o = /* @__PURE__ */ new Set();
	if (n.forEach(({ start: e, end: t }) => {
		e !== r && o.add(e), t !== r && o.add(t);
	}), o.forEach((t) => {
		let n = e.node(t);
		typeof n?.x == "number" && typeof n?.y == "number" && a.push(n);
	}), a.length === 0 && n.forEach(({ edge: e }) => {
		(e.points ?? []).forEach((e) => {
			typeof e?.x == "number" && typeof e?.y == "number" && a.push(e);
		});
	}), a.length === 0) return x(i);
	let s = a.reduce((e, t) => ({
		x: e.x + t.x / a.length,
		y: e.y + t.y / a.length
	}), {
		x: 0,
		y: 0
	}), c = s.x - t.x, l = s.y - t.y;
	return Math.abs(c) > Math.abs(l) ? c > 0 ? "right" : "left" : Math.abs(l) > 0 ? l > 0 ? "bottom" : "top" : x(i);
}, "getSelfLoopSide"), T = /* @__PURE__ */ _((e, t = "top", n = 0, r = 0) => {
	let i = e.x, a = e.y - n, o = e.width / 2, s = e.height / 2, c = Math.max(36, Math.min(100, e.width * .8)), l = b(Math.max(r, e.width * .35), 36, c), u = b(Math.min(e.width, e.height) * .45, 24, 48);
	switch (t) {
		case "bottom": {
			let e = a + s;
			return [
				{
					x: i - l / 2,
					y: e
				},
				{
					x: i - l / 2,
					y: e + u
				},
				{
					x: i + l / 2,
					y: e + u
				},
				{
					x: i + l / 2,
					y: e
				}
			];
		}
		case "right": {
			let e = i + o;
			return [
				{
					x: e,
					y: a - l / 2
				},
				{
					x: e + u,
					y: a - l / 2
				},
				{
					x: e + u,
					y: a + l / 2
				},
				{
					x: e,
					y: a + l / 2
				}
			];
		}
		case "left": {
			let e = i - o;
			return [
				{
					x: e,
					y: a - l / 2
				},
				{
					x: e - u,
					y: a - l / 2
				},
				{
					x: e - u,
					y: a + l / 2
				},
				{
					x: e,
					y: a + l / 2
				}
			];
		}
		default: {
			let e = a - s;
			return [
				{
					x: i - l / 2,
					y: e
				},
				{
					x: i - l / 2,
					y: e - u
				},
				{
					x: i + l / 2,
					y: e - u
				},
				{
					x: i + l / 2,
					y: e
				}
			];
		}
	}
}, "getSelfLoopPoints"), E = /* @__PURE__ */ _((e, t, n = "top", r = 0, i = {}) => {
	let a = e.x, o = e.y - r, s = i.width ?? 0, c = i.height ?? 0;
	switch (n) {
		case "bottom": return {
			x: a,
			y: Math.max(...t.map((e) => e.y)) + c / 2 + 4
		};
		case "right": return {
			x: Math.max(...t.map((e) => e.x)) + s / 2 + 4,
			y: o
		};
		case "left": return {
			x: Math.min(...t.map((e) => e.x)) - s / 2 - 4,
			y: o
		};
		default: return {
			x: a,
			y: Math.min(...t.map((e) => e.y)) - c / 2 - 4
		};
	}
}, "getSelfLoopLabelPosition"), D = /* @__PURE__ */ _((e, t = 0, { mergeSelfLoops: n = !0 } = {}) => {
	let r = /* @__PURE__ */ new Map(), i = [], a = e.graph()?.rankdir;
	return e.edges().forEach((t) => {
		let a = e.edge(t);
		if (n && a.selfLoop) {
			let e = a.selfLoop.id;
			r.has(e) || r.set(e, []), r.get(e).push({
				edge: a,
				start: t.v,
				end: t.w
			});
		} else i.push({
			edge: a,
			start: t.v,
			end: t.w
		});
	}), r.forEach((n) => {
		if (n.length !== 3) {
			n.forEach((e) => i.push(e));
			return;
		}
		n.sort((e, t) => e.edge.selfLoop.order - t.edge.selfLoop.order);
		let [r, o, s] = n, c = r.edge.originalEdge ?? o.edge.originalEdge ?? s.edge.originalEdge ?? o.edge, l = e.node(c.start);
		if (!l) {
			n.forEach((e) => i.push(e));
			return;
		}
		let u = {
			width: o.edge.width,
			height: o.edge.height
		}, d = w(e, l, n, c.start, a), f = T(l, d, t, u.width ?? 0), p = E(l, f, d, t, u), m = {
			...o.edge,
			...c,
			id: c.id,
			points: f,
			start: c.start,
			end: c.end,
			x: p.x,
			y: p.y,
			width: u.width,
			height: u.height,
			labelStyle: o.edge.labelStyle,
			fromCluster: r.edge.fromCluster ?? o.edge.fromCluster ?? s.edge.fromCluster,
			toCluster: r.edge.toCluster ?? o.edge.toCluster ?? s.edge.toCluster
		};
		delete m.selfLoop, delete m.originalEdge, i.push({
			edge: m,
			start: m.start,
			end: m.end
		});
	}), i;
}, "getEdgesToRender"), O = /* @__PURE__ */ _(async ({ element: t, graph: r, diagramType: i, id: a, parentCluster: l, siteConfig: p }) => {
	let h = r.graph().rankdir;
	d.trace("Dir in recursive render - dir:", h);
	let { clusters: g, edgePaths: v, edgeLabels: y, nodes: b, rootGroups: x } = e(t, { edgePathsClass: "edgePaths" });
	r.nodes() ? d.info("Recursive render XXX", r.nodes()) : d.info("No nodes found for", r), r.edges().length > 0 && d.info("Recursive edges", r.edge(r.edges()[0]));
	let C = S(i);
	await Promise.all(r.nodes().map(async function(e) {
		let t = r.node(e);
		if (l !== void 0) {
			let t = JSON.parse(JSON.stringify(l.clusterData));
			d.trace("Setting data for parent cluster XXX\n Node.id = ", e, "\n data=", t.height, "\nParent cluster", l.height), r.setNode(l.id, t), r.parent(e) || (d.trace("Setting parent", e, l.id), r.setParent(e, l.id, t));
		}
		if (d.info("(Insert) Node XXX" + e + ": " + JSON.stringify(r.node(e))), t?.clusterNode) {
			d.info("Cluster identified XBX", e, t.width, r.node(e));
			let { ranksep: n, nodesep: o } = r.graph();
			t.graph.setGraph({
				...t.graph.graph(),
				ranksep: n + 25,
				nodesep: o
			});
			let s = await F({
				element: b,
				graph: t.graph,
				diagramType: i,
				id: a,
				parentCluster: r.node(e),
				siteConfig: p
			}), c = s.elem;
			m(t, c), t.diff = s.diff || 0, d.info("New compound node after recursive render XAX", e, "width", t.width, "height", t.height), f(c, t);
		} else r.children(e).length > 0 ? (d.trace("Cluster - the non recursive path XBX", e, t.id, t, t.width, "Graph:", r), d.trace(c(t.id, r)), n.set(t.id, {
			id: c(t.id, r),
			node: t
		})) : (d.trace("Node - the non recursive path XAX", e, b, r.node(e), h), await s(b, r.node(e), {
			config: p,
			dir: h
		}));
	})), await (/* @__PURE__ */ _(async () => {
		let e = r.edges().map(async function(e) {
			let t = r.edge(e.v, e.w, e.name);
			if (d.info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e)), d.info("Edge " + e.v + " -> " + e.w + ": ", e, " ", JSON.stringify(r.edge(e))), d.info("Fix", n, "ids:", e.v, e.w, "Translating: ", n.get(e.v), n.get(e.w)), C && t.selfLoop) {
				if (t.selfLoop.order !== 1) return;
				let e = {
					...t.originalEdge,
					...t,
					id: t.selfLoop.id,
					startLabelLeft: t.originalEdge?.startLabelLeft ?? t.startLabelLeft,
					startLabelRight: t.originalEdge?.startLabelRight ?? t.startLabelRight,
					endLabelLeft: t.originalEdge?.endLabelLeft ?? t.endLabelLeft,
					endLabelRight: t.originalEdge?.endLabelRight ?? t.endLabelRight
				};
				await o(y, e), t.width = e.width, t.height = e.height, t.labelStyle = e.labelStyle;
				return;
			}
			await o(y, t);
		});
		await Promise.all(e);
	}, "processEdges"))();
	let { subGraphTitleTotalMargin: w } = u(p);
	return {
		elem: x,
		graph: r,
		groups: {
			clusters: g,
			edgePaths: v,
			edgeLabels: y,
			nodes: b,
			rootGroups: x
		},
		diagramType: i,
		id: a,
		mergeSelfLoops: C,
		subGraphTitleTotalMargin: w
	};
}, "measureDagreGraph"), k = /* @__PURE__ */ _((e) => {
	d.info("############################################# XXX"), d.info("###                Layout                 ### XXX"), d.info("############################################# XXX"), y(e);
}, "runDagreGraphLayout"), A = /* @__PURE__ */ _((e, t, n) => {
	let r = e.node(t);
	if (!r) return;
	let i = { ...r };
	return r?.clusterNode ? i.y = (r.y ?? 0) + n : e.children(t).length > 0 ? i.height = (r.height ?? 0) + n : i.y = (r.y ?? 0) + n / 2, i;
}, "normalizeDagreNode"), j = /* @__PURE__ */ _((e, t) => {
	C.forEach((n) => {
		t[n] !== void 0 && (e[n] = t[n]);
	});
}, "applyDagreNodeLayout"), M = /* @__PURE__ */ _((e, t, n, r) => ({
	...e,
	start: e.start ?? t,
	end: e.end ?? n,
	points: (e.points ?? []).map((e) => ({
		...e,
		y: typeof e.y == "number" ? e.y + r : e.y
	}))
}), "normalizeDagreEdge"), N = /* @__PURE__ */ _((e, t) => {
	let { graph: n, mergeSelfLoops: r, subGraphTitleTotalMargin: i = 0 } = t, a = new Map(e.nodes.map((e) => [e.id, e]));
	p(n).forEach((e) => {
		let t = A(n, e, i);
		if (!t) return;
		j(n.node(e), t);
		let r = a.get(e);
		r && j(r, t);
	});
	let o = i / 2;
	return e.edges = D(n, o, { mergeSelfLoops: r }).map(({ edge: e, start: t, end: n }) => M(e, t, n, o)), e;
}, "applyDagreLayoutResult"), P = /* @__PURE__ */ _(async ({ elem: e, graph: t, groups: { clusters: r, edgePaths: o }, diagramType: s, id: c, mergeSelfLoops: l, subGraphTitleTotalMargin: u }) => {
	let f = 0;
	await Promise.all(p(t).map(async function(e) {
		let a = t.node(e);
		if (d.info("Position XBX => " + e + ": (" + a.x, "," + a.y, ") width: ", a.width, " height: ", a.height), a?.clusterNode) a.y += u, d.info("A tainted cluster node XBX1", e, a.id, a.width, a.height, a.x, a.y, t.parent(e)), n.get(a.id).node = a, g(a);
		else if (t.children(e).length > 0) {
			d.info("A pure cluster node XBX1", e, a.id, a.x, a.y, a.width, a.height, t.parent(e)), a.height += u, t.node(a.parentId);
			let o = a?.padding / 2 || 0, s = a?.labelBBox?.height || 0, c = s - o || 0;
			d.debug("OffsetY", c, "labelHeight", s, "halfPadding", o), await i(r, a), n.get(a.id).node = a;
		} else {
			let e = t.node(a.parentId);
			a.y += u / 2, d.info("A regular node XBX1 - using the padding", a.id, "parent", a.parentId, a.width, a.height, a.x, a.y, "offsetY", a.offsetY, "parent", e, e?.offsetY, a), g(a);
		}
	}));
	let m = u / 2;
	return D(t, m, { mergeSelfLoops: l }).forEach(function({ edge: e, start: r, end: i }) {
		d.info("Edge " + r + " -> " + i + ": " + JSON.stringify(e), e), e.points.forEach((e) => e.y += m);
		let l = t.node(r), u = t.node(i), f = a(o, e, n, s, l, u, c);
		h(e, f);
	}), t.nodes().forEach(function(e) {
		let n = t.node(e);
		d.info(e, n.type, n.diff), n.isGroup && (f = n.diff);
	}), d.warn("Returning from recursive render XAX", e, f), {
		elem: e,
		diff: f
	};
}, "paintDagreLayoutCore"), F = /* @__PURE__ */ _(async (e) => {
	let t = await O(e);
	return k(t.graph), await P(t);
}, "renderDagreSubgraph"), I = /* @__PURE__ */ _((e) => {
	let n = new t({
		multigraph: !0,
		compound: !0
	}).setGraph({
		rankdir: e.direction,
		nodesep: e.config?.nodeSpacing || e.nodeSpacing || e.config?.flowchart?.nodeSpacing,
		ranksep: e.config?.rankSpacing || e.rankSpacing || e.config?.flowchart?.rankSpacing,
		marginx: 8,
		marginy: 8
	}).setDefaultEdgeLabel(function() {
		return {};
	});
	return e.nodes.forEach((e) => {
		n.setNode(e.id, { ...e }), e.parentId && n.setParent(e.id, e.parentId);
	}), d.debug("Edges:", e.edges), e.edges.forEach((e) => {
		if (e.start === e.end) {
			let t = e.start, r = t + "---" + t + "---1", i = t + "---" + t + "---2", a = n.node(t);
			n.setNode(r, {
				domId: r,
				id: r,
				parentId: a.parentId,
				labelStyle: "",
				label: "",
				padding: 0,
				shape: "labelRect",
				style: "",
				width: 10,
				height: 10
			}), n.setParent(r, a.parentId), n.setNode(i, {
				domId: i,
				id: i,
				parentId: a.parentId,
				labelStyle: "",
				padding: 0,
				shape: "labelRect",
				label: "",
				style: "",
				width: 10,
				height: 10
			}), n.setParent(i, a.parentId);
			let o = structuredClone(e), s = structuredClone(e), c = structuredClone(e), l = structuredClone(e);
			s.originalEdge = o, s.selfLoop = {
				id: o.id,
				order: 0
			}, c.originalEdge = o, c.selfLoop = {
				id: o.id,
				order: 1
			}, l.originalEdge = o, l.selfLoop = {
				id: o.id,
				order: 2
			}, s.label = "", s.arrowTypeEnd = "none", s.endLabelLeft = "", s.endLabelRight = "", s.startLabelLeft = "", s.id = t + "-cyclic-special-1", c.startLabelRight = "", c.startLabelLeft = "", c.endLabelLeft = "", c.endLabelRight = "", c.arrowTypeStart = "none", c.arrowTypeEnd = "none", c.id = t + "-cyclic-special-mid", l.label = "", l.startLabelRight = "", l.startLabelLeft = "", l.arrowTypeStart = "none", a.isGroup && (s.fromCluster = t, l.toCluster = t), l.id = t + "-cyclic-special-2", l.arrowTypeStart = "none", n.setEdge(t, r, s, t + "-cyclic-special-0"), n.setEdge(r, i, c, t + "-cyclic-special-1"), n.setEdge(i, t, l, t + "-cyclic-special-2");
		} else n.setEdge(e.start, e.end, { ...e }, e.id);
	}), v(n), { graph: n };
}, "prepareLayoutForDagre"), L = /* @__PURE__ */ _(async (e, { element: t, preparedLayout: n }) => {
	let r = n ?? I(e), i = l(), a = await O({
		element: t,
		graph: r.graph,
		diagramType: e.type,
		id: e.diagramId,
		parentCluster: void 0,
		siteConfig: i
	});
	return r.measuredLayout = a, a;
}, "measureDagreLayout"), R = /* @__PURE__ */ _((e, t) => {
	let n = t.preparedLayout?.measuredLayout;
	if (!n) throw Error("runDagreLayoutCore requires measureDagreLayout to run first");
	return k(n.graph), N(e, n), n;
}, "runDagreLayoutCore"), z = r({
	prepareLayout: I,
	measureLayout: L,
	runLayoutCore: R,
	paintOptions: {
		clusterDb: n,
		getNodes: /* @__PURE__ */ _((e, { measure: t }) => p(t.graph).map((e) => t.graph.node(e)).filter(Boolean), "getDagrePaintNodes"),
		getEdgeNode: /* @__PURE__ */ _((e, t, { measure: n }) => e ? n.graph.node(e) : void 0, "getDagreEdgeNode"),
		skipNode: /* @__PURE__ */ _((e, { measure: t }) => !t.graph.hasNode(e.id), "skipNode"),
		isCluster: /* @__PURE__ */ _((e, { measure: t }) => t.graph.hasNode(e.id) && (t.graph.children(e.id) ?? []).length > 0, "isCluster")
	}
});
//#endregion
export { N as applyDagreLayoutResult, D as getEdgesToRender, L as measureDagreLayout, I as prepareLayoutForDagre, z as render, R as runDagreLayoutCore };

//# sourceMappingURL=dagre-GXQ25YYZ-0_rHQ02d-CE6pQxo5.js.map