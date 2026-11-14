import { Bn as e, Di as t, Ha as n, Rn as r, Vo as i, Wa as a, Wo as o, Xn as s, Xr as c, Zn as l, ds as u, ms as d, rr as f, sa as p, sr as m, ur as h, wi as g, wr as _, za as v, zo as y } from "./index-B1FrxEMd-BsPMjC5n.js";
import { n as b, t as x } from "./formatNumber-Q1A8AyDZ-C1p6HSP6.js";
import { c as ee, n as S, r as C, s as w } from "./styled-components-QCR0zGl1-gqUrmVXI.js";
import { i as T } from "./styled-components-DOYIt51e-DLCP0S-5.js";
import { t as E } from "./WidgetLabelHelpIconInline-CmMO3-ig-CNt0dgU_.js";
//#region ../react/build/Metric-B4Y_nDFF.js
var D = /* @__PURE__ */ d(u(), 1), O = /* @__PURE__ */ D.forwardRef(function(t, n) {
	return /* @__PURE__ */ D.createElement(e, c({
		iconAttrs: {
			fill: "currentColor",
			xmlns: "http://www.w3.org/2000/svg"
		},
		iconVerticalAlign: "middle",
		iconViewBox: "0 0 24 24"
	}, t, { ref: n }), /* @__PURE__ */ D.createElement("path", {
		fill: "none",
		d: "M0 0h24v24H0V0z"
	}), /* @__PURE__ */ D.createElement("path", { d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" }));
});
O.displayName = "ArrowDownward";
var k = /* @__PURE__ */ D.forwardRef(function(t, n) {
	return /* @__PURE__ */ D.createElement(e, c({
		iconAttrs: {
			fill: "currentColor",
			xmlns: "http://www.w3.org/2000/svg"
		},
		iconVerticalAlign: "middle",
		iconViewBox: "0 0 24 24"
	}, t, { ref: n }), /* @__PURE__ */ D.createElement("path", {
		fill: "none",
		d: "M0 0h24v24H0V0z"
	}), /* @__PURE__ */ D.createElement("path", { d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" }));
});
k.displayName = "ArrowUpward";
function A(e, t) {
	switch (t) {
		case m.MetricColor.RED: return e.colors.redColor;
		case m.MetricColor.GREEN: return e.colors.greenColor;
		case m.MetricColor.ORANGE: return e.colors.orangeColor;
		case m.MetricColor.YELLOW: return e.colors.yellowColor;
		case m.MetricColor.BLUE: return e.colors.blueColor;
		case m.MetricColor.VIOLET: return e.colors.violetColor;
		case m.MetricColor.PRIMARY: return e.colors.primary;
		default: return e.colors.grayColor;
	}
}
function j(e, t) {
	let n = p(e);
	switch (t) {
		case m.MetricColor.RED: return e.colors.redBackgroundColor;
		case m.MetricColor.GREEN: return e.colors.greenBackgroundColor;
		case m.MetricColor.ORANGE: return e.colors.orangeBackgroundColor;
		case m.MetricColor.YELLOW: return e.colors.yellowBackgroundColor;
		case m.MetricColor.BLUE: return e.colors.blueBackgroundColor;
		case m.MetricColor.VIOLET: return e.colors.violetBackgroundColor;
		case m.MetricColor.PRIMARY: return y(e.colors.primary, n ? .9 : .7);
		default: return e.colors.grayBackgroundColor;
	}
}
function M(e, t) {
	switch (t) {
		case m.MetricColor.RED: return e.colors.redTextColor;
		case m.MetricColor.GREEN: return e.colors.greenTextColor;
		case m.MetricColor.ORANGE: return e.colors.orangeTextColor;
		case m.MetricColor.YELLOW: return e.colors.yellowTextColor;
		case m.MetricColor.BLUE: return e.colors.blueTextColor;
		case m.MetricColor.VIOLET: return e.colors.violetTextColor;
		case m.MetricColor.PRIMARY: return e.colors.primary;
		default: return e.colors.grayTextColor;
	}
}
var N = /* @__PURE__ */ t("div", { target: "e1i5pmia9" })(({ theme: e, showBorder: t }) => ({
	height: "100%",
	...t && {
		border: `${e.sizes.borderWidth} solid ${e.colors.borderColor}`,
		borderRadius: e.radii.default,
		overflow: "hidden"
	}
}), ""), P = /* @__PURE__ */ t("div", { target: "e1i5pmia8" })(({ theme: e, showBorder: t }) => ({ ...t && { padding: `calc(${e.spacing.lg} - ${e.sizes.borderWidth})` } }), ""), F = /* @__PURE__ */ t("div", { target: "e1i5pmia7" })(({ theme: e, showBorder: t }) => ({
	marginTop: t ? void 0 : e.spacing.lg,
	marginBottom: t ? e.spacing.twoXL : void 0
}), ""), I = /* @__PURE__ */ t(T, { target: "e1i5pmia6" })(({ visibility: e }) => ({
	marginBottom: 0,
	display: e === f.Collapsed ? "none" : "grid",
	gridTemplateColumns: e === f.Collapsed ? "initial" : "auto 1fr",
	visibility: e === f.Hidden ? "hidden" : "visible"
}), ""), L = /* @__PURE__ */ t("div", { target: "e1i5pmia5" })(({ theme: e }) => ({
	fontSize: e.fontSizes.metricValueFontSize,
	lineHeight: "normal",
	fontWeight: e.fontWeights.metricValueFontWeight,
	color: e.colors.bodyText,
	paddingBottom: e.spacing.twoXS
}), ""), R = /* @__PURE__ */ t("div", { target: "e1i5pmia4" })(({ theme: e, metricColor: t, showArrow: n }) => ({
	color: M(e, t),
	backgroundColor: j(e, t),
	fontSize: e.fontSizes.sm,
	lineHeight: "normal",
	display: "inline-flex",
	flexDirection: "row",
	alignItems: "center",
	fontWeight: e.fontWeights.normal,
	borderRadius: e.radii.full,
	maxWidth: "100%",
	flexShrink: 0,
	padding: `${e.spacing.threeXS} ${e.spacing.xs}`,
	...n && { paddingLeft: e.spacing.twoXS }
}), ""), z = /* @__PURE__ */ t("div", { target: "e1i5pmia3" })(({ theme: e }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	gap: "0.5em",
	maxWidth: "100%",
	overflow: "hidden",
	paddingBottom: e.spacing.twoXS
}), ""), B = /* @__PURE__ */ t("div", { target: "e1i5pmia2" })({
	name: "1m7ehjk",
	styles: "overflow:hidden;flex-shrink:1;min-width:0"
}), V = /* @__PURE__ */ t("div", { target: "e1i5pmia1" })(({ theme: e }) => ({
	display: "inline-flex",
	alignItems: "center",
	gap: e.spacing.twoXS,
	minWidth: 0
}), ""), H = /* @__PURE__ */ t("span", { target: "e1i5pmia0" })({
	name: "3ahwa4",
	styles: "display:inline-flex;align-items:center;flex-shrink:0"
}), U = a.getLogger("Metric"), W = 1e3;
function G(e) {
	if (e.length === 0) return 0;
	let t = e[0], n = e[0];
	for (let r of e) r < t && (t = r), r > n && (n = r);
	return t < 0 && n > 0 ? 0 : t;
}
function K(e, t) {
	try {
		return x(Number(e), t);
	} catch {
		return e;
	}
}
function q(e, t, n, r, i) {
	let a = `metric_chart_${Math.random().toString(36).slice(2, 10)}`, o = e.length === 1 ? [e[0], e[0]] : e, s = t === m.ChartType.AREA, c = {
		$schema: "https://vega.github.io/schema/vega-lite/v5.json",
		width: Math.round(n),
		height: Math.round(g("3.5rem")),
		data: { values: o.map((e, t) => ({
			x: t,
			y: e
		})) },
		layer: [
			{
				name: `${a}_mark`,
				mark: {
					type: "line",
					...t === m.ChartType.LINE && {
						type: "line",
						strokeCap: "round",
						strokeWidth: r.sizes.metricStrokeWidth
					},
					...t === m.ChartType.BAR && {
						type: "bar",
						cornerRadius: Number.parseFloat(r.radii.full)
					},
					...t === m.ChartType.AREA && {
						type: "area",
						color: j(r, i),
						opacity: 1,
						line: {
							color: A(r, i),
							opacity: 1,
							strokeWidth: r.sizes.metricStrokeWidth,
							strokeCap: "round"
						}
					}
				},
				encoding: {
					x: {
						field: "x",
						type: "quantitative",
						axis: null,
						scale: {
							zero: !1,
							nice: !1
						}
					},
					y: {
						field: "y",
						type: "quantitative",
						axis: null,
						scale: {
							zero: !1,
							nice: !1
						}
					},
					...s && { y2: { datum: G(o) } }
				}
			},
			{
				name: `${a}_points`,
				mark: {
					type: "point",
					opacity: 0
				},
				encoding: {
					x: {
						field: "x",
						type: "quantitative",
						axis: null,
						scale: {
							zero: !1,
							nice: !1
						}
					},
					y: {
						field: "y",
						type: "quantitative",
						axis: null,
						scale: {
							zero: !1,
							nice: !1
						}
					}
				},
				params: [{
					name: `${a}_hover_selection`,
					select: {
						type: "point",
						encodings: ["x"],
						nearest: !0,
						on: e.length > W ? "mousemove{16}" : "mousemove",
						clear: "mouseleave"
					}
				}]
			},
			{
				name: `${a}_highlighted_points`,
				transform: [{ filter: {
					param: `${a}_hover_selection`,
					empty: !1
				} }],
				mark: {
					type: "point",
					filled: !0,
					size: 65,
					tooltip: !0
				},
				encoding: {
					x: {
						field: "x",
						type: "quantitative",
						axis: null,
						scale: {
							zero: !1,
							nice: !1
						}
					},
					y: {
						field: "y",
						type: "quantitative",
						axis: null,
						scale: {
							zero: !1,
							nice: !1
						}
					}
				}
			}
		],
		config: {
			view: { stroke: null },
			padding: {
				left: -3,
				right: -3,
				top: 2,
				bottom: 2
			},
			...t === m.ChartType.BAR && { padding: {
				left: 0,
				right: 0,
				top: 2,
				bottom: 2
			} },
			mark: {
				tooltip: { content: "encoding" },
				color: A(r, i)
			}
		}
	};
	return c.config = S(c.config, r), c;
}
function J({ element: e }) {
	let t = o(), a = (0, D.useRef)(null), { MetricDirection: c } = m, { body: u, label: d, delta: f, direction: p, color: g, labelVisibility: y, help: x, showBorder: S, chartData: T, chartType: A, format: j, deltaDescription: M, icon: W } = e, G = !!T?.length, { width: J, elementRef: Y } = i([G]), X = j && b(u) ? K(u, j) : u, te = j && f && b(f) ? K(f, j) : f, Z = null;
	switch (p) {
		case c.DOWN:
			Z = O;
			break;
		case c.UP:
			Z = k;
			break;
		case c.NONE:
	}
	let Q = f !== "", $ = (0, D.useId)();
	return (0, D.useEffect)(() => {
		if (!T?.length || !a.current || J <= 0) return;
		let e = q(T, A, J, t, g), n = !1, r;
		return C(a.current, e, {
			actions: !1,
			renderer: "svg",
			ast: !0,
			expr: w,
			tooltip: {
				theme: "custom",
				formatTooltip: (e) => `${e.y}`
			}
		}).then((e) => {
			n ? e.finalize() : r = e.finalize;
		}).catch((e) => {
			U.debug("Failed to embed metric chart:", e);
		}), () => {
			n = !0, r?.();
		};
	}, [
		T,
		g,
		t,
		J,
		A
	]), /* @__PURE__ */ v.jsxs(N, {
		className: "stMetric",
		"data-testid": "stMetric",
		showBorder: S,
		children: [/* @__PURE__ */ v.jsxs(P, {
			showBorder: S,
			children: [
				/* @__PURE__ */ v.jsxs(I, {
					"data-testid": "stMetricLabel",
					visibility: n(y?.value),
					children: [/* @__PURE__ */ v.jsxs(V, { children: [W && /* @__PURE__ */ v.jsx(H, { children: /* @__PURE__ */ v.jsx(r, {
						iconValue: W,
						size: "lg",
						testid: "stMetricIcon"
					}) }), /* @__PURE__ */ v.jsx(_, {
						source: d,
						allowHTML: !1,
						isLabel: !0,
						truncate: !0
					})] }), x && /* @__PURE__ */ v.jsx(E, {
						content: x,
						placement: h.TOP_RIGHT,
						label: d
					})]
				}),
				/* @__PURE__ */ v.jsx(L, {
					"data-testid": "stMetricValue",
					children: /* @__PURE__ */ v.jsx(_, {
						source: X,
						allowHTML: !1,
						isLabel: !0,
						inheritFont: !0,
						truncate: !0
					})
				}),
				(Q || M) && /* @__PURE__ */ v.jsxs(z, { children: [Q && /* @__PURE__ */ v.jsxs(R, {
					"data-testid": "stMetricDelta",
					metricColor: g,
					showArrow: Z !== null,
					"aria-describedby": M ? $ : void 0,
					children: [Z && /* @__PURE__ */ v.jsx(l, {
						testid: Z === k ? "stMetricDeltaIcon-Up" : "stMetricDeltaIcon-Down",
						content: Z,
						size: "md",
						margin: "0 threeXS 0 0"
					}), /* @__PURE__ */ v.jsx(_, {
						source: te,
						allowHTML: !1,
						isLabel: !0,
						inheritFont: !0,
						truncate: !0
					})]
				}), M && /* @__PURE__ */ v.jsx(B, {
					"data-testid": "stMetricDeltaDescription",
					id: $,
					title: M,
					children: /* @__PURE__ */ v.jsx(_, {
						source: M,
						allowHTML: !1,
						isLabel: !0,
						isCaption: !0,
						truncate: !0
					})
				})] })
			]
		}), G && /* @__PURE__ */ v.jsxs("div", {
			ref: Y,
			children: [/* @__PURE__ */ v.jsx(s, { styles: ee }), /* @__PURE__ */ v.jsx(F, {
				ref: a,
				"data-testid": "stMetricChart",
				showBorder: S
			})]
		})]
	});
}
var Y = (0, D.memo)(J);
//#endregion
export { Y as default, q as getMetricChartSpec };

//# sourceMappingURL=Metric-B4Y_nDFF-BZYvb_ri.js.map