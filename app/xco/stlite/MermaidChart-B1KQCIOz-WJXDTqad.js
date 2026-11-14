import { $i as e, $o as t, Ar as n, Dn as r, Ho as i, Hr as a, Lr as o, Vn as s, Vr as c, Wa as l, Wo as u, _i as d, aa as f, ds as p, jn as m, kr as h, ms as g, wi as _, xr as v, za as y } from "./index-B1FrxEMd-BsPMjC5n.js";
import { n as b, t as x } from "./withFullScreenWrapper-C8-Fpvyp-DxnGM32Q.js";
import { t as S } from "./FileDownload.esm-CRjxpEeO-BaCWUjYd.js";
//#region ../react/build/MermaidChart-B1KQCIOz.js
var C = /* @__PURE__ */ g(p(), 1), w = l.getLogger("MermaidChart"), T = {
	graph: "flowchart",
	flowchart: "flowchart",
	sequencediagram: "sequence diagram",
	classDiagram: "class diagram",
	stateDiagram: "state diagram",
	erDiagram: "entity relationship diagram",
	journey: "user journey diagram",
	gantt: "Gantt chart",
	pie: "pie chart",
	quadrantChart: "quadrant chart",
	requirementDiagram: "requirement diagram",
	gitGraph: "Git graph",
	mindmap: "mindmap",
	timeline: "timeline",
	sankey: "Sankey diagram",
	packet: "packet diagram",
	block: "block diagram",
	architecture: "architecture diagram",
	kanban: "Kanban board",
	xychart: "XY chart",
	radar: "radar chart",
	treemap: "treemap"
};
function E(e) {
	let t = e.trim().split("\n")[0].trim().toLowerCase();
	for (let [e, n] of Object.entries(T)) if (t.startsWith(e.toLowerCase())) return n;
	return "diagram";
}
function D(e) {
	let t = {}, n = /^\s*accTitle\s*:\s*(.+)$/m.exec(e);
	n && (t.title = n[1].trim());
	let r = /^\s*accDescr\s*:\s*(.+)$/m.exec(e);
	if (r) t.description = r[1].trim();
	else {
		let n = /^\s*accDescr\s*\{([^}]*)\}/m.exec(e);
		n && (t.description = n[1].trim().replaceAll(/\s+/g, " "));
	}
	return t;
}
function O(e) {
	let t = /^\s*%%\s*stAlt\s*:[^\S\n]*(.+)$/m.exec(e);
	return t ? t[1].trim() : void 0;
}
function k(e) {
	let t = O(e);
	if (t) return t;
	let { title: n, description: r } = D(e);
	if (n && r) return `${n}: ${r}`;
	if (n) return n;
	if (r) return r;
}
function A(e) {
	return k(e) ?? `Mermaid ${E(e)}`;
}
var j = /* @__PURE__ */ Symbol.for("streamlit.mermaid.themeConfigKey"), M = [
	"secure",
	"securityLevel",
	"startOnLoad",
	"maxTextSize",
	"suppressErrorRendering",
	"maxEdges",
	"htmlLabels",
	"themeCSS",
	"fontFamily",
	"altFontFamily",
	"dompurifyConfig"
];
function N(e) {
	let t = new DOMParser().parseFromString(e, "image/svg+xml").querySelector("svg");
	if (!t) return e;
	let n = 0, r = 0, i = t.getAttribute("viewBox");
	if (i) {
		let [, , e, t] = i.split(/[\s,]+/).map(Number);
		e > 0 && t > 0 && (n = e, r = t);
	}
	return (!n || !r) && (n = Number.parseFloat(t.getAttribute("width") ?? "") || 100, r = Number.parseFloat(t.getAttribute("height") ?? "") || 100, t.setAttribute("viewBox", `0 0 ${n} ${r}`)), t.setAttribute("width", String(n)), t.setAttribute("height", String(r)), t.setAttribute("preserveAspectRatio", "xMidYMid meet"), t.style.removeProperty("max-width"), new XMLSerializer().serializeToString(t);
}
function P(t) {
	let n = f(t), r = e(t.colors.bgColor) > .5, i = {
		blue: d(n.bluebg, t.colors.bgColor),
		green: d(n.greenbg, t.colors.bgColor),
		orange: d(n.orangebg, t.colors.bgColor),
		red: d(n.redbg, t.colors.bgColor),
		violet: d(n.violetbg, t.colors.bgColor),
		yellow: d(n.yellowbg, t.colors.bgColor),
		gray: d(n.graybg, t.colors.bgColor)
	}, a = [
		t.colors.blueTextColor,
		t.colors.greenTextColor,
		t.colors.orangeTextColor,
		t.colors.redTextColor,
		t.colors.violetTextColor,
		t.colors.yellowTextColor,
		t.colors.grayTextColor
	];
	return {
		darkMode: !r,
		theme: "base",
		fontFamily: t.genericFonts.bodyFont,
		fontSize: _(t.fontSizes.sm),
		htmlLabels: !1,
		flowchart: { htmlLabels: !1 },
		themeVariables: {
			darkMode: !r,
			primaryColor: i.blue,
			primaryTextColor: t.colors.bodyText,
			primaryBorderColor: t.colors.borderColor,
			secondaryColor: i.green,
			tertiaryColor: i.orange,
			background: t.colors.bgColor,
			mainBkg: t.colors.secondaryBg,
			fontFamily: t.genericFonts.bodyFont,
			fontSize: `${_(t.fontSizes.sm)}px`,
			lineColor: t.colors.fadedText60,
			textColor: t.colors.bodyText,
			errorBkgColor: i.red,
			errorTextColor: t.colors.redTextColor,
			noteBkgColor: i.yellow,
			noteTextColor: t.colors.bodyText,
			doneTaskBkgColor: i.green,
			doneTaskBorderColor: t.colors.greenTextColor,
			critBkgColor: i.red,
			critBorderColor: t.colors.redTextColor,
			todayLineColor: t.colors.primary,
			gridColor: t.colors.borderColor,
			taskTextColor: t.colors.bodyText,
			taskTextOutsideColor: t.colors.bodyText,
			taskTextLightColor: t.colors.bodyText,
			taskTextDarkColor: t.colors.bodyText,
			sectionBkgColor: t.colors.secondaryBg,
			altSectionBkgColor: t.colors.bgColor,
			pie1: i.blue,
			pie2: i.green,
			pie3: i.orange,
			pie4: i.red,
			pie5: i.violet,
			pie6: i.yellow,
			pie7: i.gray,
			pieStrokeColor: t.colors.borderColor,
			pieOuterStrokeColor: t.colors.borderColor,
			git0: t.colors.blueTextColor,
			git1: t.colors.greenTextColor,
			git2: t.colors.orangeTextColor,
			git3: t.colors.redTextColor,
			git4: t.colors.violetTextColor,
			git5: t.colors.yellowTextColor,
			git6: t.colors.grayTextColor,
			git7: t.colors.primary,
			gitBranchLabel0: t.colors.bgColor,
			gitBranchLabel1: t.colors.bgColor,
			gitBranchLabel2: t.colors.bgColor,
			gitBranchLabel3: t.colors.bgColor,
			gitBranchLabel4: t.colors.bgColor,
			gitBranchLabel5: t.colors.bgColor,
			gitBranchLabel6: t.colors.bgColor,
			gitBranchLabel7: t.colors.bgColor,
			mindmap1: i.blue,
			mindmap2: i.green,
			mindmap3: i.orange,
			mindmap4: i.red,
			mindmap5: i.violet,
			cScale0: i.blue,
			cScale1: i.green,
			cScale2: i.orange,
			cScale3: i.red,
			cScale4: i.violet,
			cScale5: i.yellow,
			cScale6: i.gray,
			quadrant1Fill: i.blue,
			quadrant2Fill: i.green,
			quadrant3Fill: i.orange,
			quadrant4Fill: i.red,
			quadrantPointFill: t.colors.primary,
			fillType0: i.blue,
			fillType1: i.green,
			fillType2: i.orange,
			fillType3: i.red,
			fillType4: i.violet,
			fillType5: i.yellow,
			fillType6: i.gray,
			fillType7: t.colors.secondaryBg,
			xyChart: {
				backgroundColor: t.colors.bgColor,
				titleColor: t.colors.bodyText,
				xAxisLabelColor: t.colors.bodyText,
				xAxisTitleColor: t.colors.bodyText,
				xAxisTickColor: t.colors.fadedText60,
				xAxisLineColor: t.colors.fadedText60,
				yAxisLabelColor: t.colors.bodyText,
				yAxisTitleColor: t.colors.bodyText,
				yAxisTickColor: t.colors.fadedText60,
				yAxisLineColor: t.colors.fadedText60,
				plotColorPalette: a.join(", ")
			},
			radar: {
				curveOpacity: .5,
				curveStrokeWidth: 2.5
			}
		}
	};
}
var F = (0, C.memo)(function({ source: e }) {
	let l = u(), d = (0, C.useId)(), [f, p] = (0, C.useState)(null), [g, _] = (0, C.useState)(null), [b, T] = (0, C.useState)(!0), { expanded: E, width: D, height: O, expand: F, collapse: I } = t(x), { copyToClipboard: L, isCopied: R, label: z } = i(), B = (0, C.useMemo)(() => P(l), [l]), V = (0, C.useRef)(0), H = (0, C.useRef)(null), U = (0, C.useRef)(null);
	(0, C.useEffect)(() => {
		let t = !1, n = !1;
		V.current += 1;
		let r = V.current;
		return (async () => {
			T(!0), _(null);
			let i = null;
			try {
				let a = (await import("./mermaid.core-iLj2gv8s-DM09IeU-.js").then((e) => e.bb)).default;
				if (t) return;
				let o = JSON.stringify(B), s = a;
				s[j] !== o && (a.initialize({
					startOnLoad: !1,
					securityLevel: "strict",
					secure: M,
					suppressErrorRendering: !0,
					...B
				}), s[j] = o);
				let c = `mermaid-${d.replaceAll(":", "")}-${r}`, { svg: l } = await a.render(c, e);
				if (t) return;
				let u = N(l), f = new Blob([u], { type: "image/svg+xml;charset=utf-8" });
				i = URL.createObjectURL(f), t ? URL.revokeObjectURL(i) : (p(i), n = !0, T(!1));
			} catch (e) {
				if (i && !n && URL.revokeObjectURL(i), !t) {
					let t = e instanceof Error ? e.message : "Failed to render diagram";
					_(t), p(null), T(!1);
				}
			}
		})(), () => {
			t = !0;
		};
	}, [
		e,
		B,
		d
	]), (0, C.useEffect)(() => (U.current = f, () => {
		f && f !== H.current && URL.revokeObjectURL(f);
	}), [f]);
	let W = (0, C.useCallback)(() => {
		L(e);
	}, [L, e]), G = (0, C.useCallback)(() => {
		if (!f) return;
		H.current = f;
		let e = () => {
			let e = H.current;
			H.current = null, e && e !== U.current && URL.revokeObjectURL(e);
		}, t = new Image();
		t.addEventListener("load", () => {
			let n = t.naturalWidth || 800, r = t.naturalHeight || 600, i = document.createElement("canvas");
			i.width = n * 2, i.height = r * 2;
			let a = i.getContext("2d");
			if (!a) {
				H.current = null;
				return;
			}
			a.fillStyle = l.colors.bgColor, a.fillRect(0, 0, i.width, i.height), a.scale(2, 2), a.drawImage(t, 0, 0, n, r);
			let o = document.createElement("a");
			o.download = "mermaid-diagram.png", o.href = i.toDataURL("image/png"), o.click(), e();
		}, { once: !0 }), t.addEventListener("error", () => {
			w.error("Failed to load SVG for PNG export"), e();
		}, { once: !0 }), t.src = f;
	}, [f, l.colors.bgColor]);
	if (b) return /* @__PURE__ */ y.jsx(o, {
		width: D,
		height: O,
		useContainerWidth: !0,
		children: /* @__PURE__ */ y.jsx(h, {
			hasError: !1,
			isFullScreen: !1,
			"data-testid": "stMermaidChart",
			"aria-busy": "true",
			"aria-label": "Loading mermaid diagram",
			children: /* @__PURE__ */ y.jsx(v, {
				"data-testid": "stSkeleton",
				"aria-hidden": "true"
			})
		})
	});
	if (g) return /* @__PURE__ */ y.jsx(o, {
		width: D,
		height: O,
		useContainerWidth: !0,
		children: /* @__PURE__ */ y.jsx(h, {
			hasError: !0,
			isFullScreen: !1,
			"data-testid": "stMermaidChart",
			children: /* @__PURE__ */ y.jsxs(n, {
				"data-testid": "stMermaidError",
				role: "alert",
				children: ["Mermaid diagram error: ", g]
			})
		})
	});
	let K = k(e);
	return /* @__PURE__ */ y.jsx(s, { children: /* @__PURE__ */ y.jsxs(o, {
		width: D,
		height: O,
		useContainerWidth: !0,
		children: [/* @__PURE__ */ y.jsxs(c, {
			target: o,
			isFullScreen: E,
			onExpand: F,
			onCollapse: I,
			labelContext: K,
			children: [/* @__PURE__ */ y.jsx(a, {
				label: "Download as PNG",
				icon: S,
				onClick: G,
				labelContext: K
			}), /* @__PURE__ */ y.jsx(a, {
				label: z,
				icon: R ? r : m,
				onClick: W,
				labelContext: R ? void 0 : K
			})]
		}), /* @__PURE__ */ y.jsx(h, {
			hasError: !1,
			isFullScreen: E,
			"data-testid": "stMermaidChart",
			children: f && /* @__PURE__ */ y.jsx("img", {
				src: f,
				alt: A(e)
			})
		})]
	}) });
}), I = b(F);
//#endregion
export { I as MermaidChart };

//# sourceMappingURL=MermaidChart-B1KQCIOz-WJXDTqad.js.map