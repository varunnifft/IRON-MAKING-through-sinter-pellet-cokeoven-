import { Di as e, Hn as t, Ho as n, Jn as r, Ko as i, Mi as a, Rn as o, Un as s, Wo as c, ds as l, ms as u, sa as d, za as f } from "./index-B1FrxEMd-BsPMjC5n.js";
import { t as p } from "./index-CVld_lKx-DBjTNNj_.js";
import { t as m } from "./reactJsonViewCompat-PzF5iqZ4-oi2jTtgM.js";
//#region ../react/build/Json-Bv8cZ4Ae.js
var h = /* @__PURE__ */ u(l(), 1), g = /* @__PURE__ */ e("div", { target: "e1xfr5s3" })(({ theme: e }) => ({
	overflowY: "auto",
	position: "relative",
	".react-json-view .copy-icon svg": {
		fontSize: "1em !important",
		marginRight: `${e.spacing.threeXS} !important`,
		verticalAlign: "middle !important"
	}
}), ""), _ = /* @__PURE__ */ e("div", { target: "e1xfr5s2" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	gap: e.spacing.sm,
	padding: e.spacing.sm,
	paddingLeft: e.spacing.md,
	fontFamily: e.genericFonts.codeFont,
	fontSize: e.fontSizes.twoSm,
	color: e.colors.bodyText,
	maxWidth: "90vw",
	wordBreak: "break-all"
}), ""), v = /* @__PURE__ */ e("button", { target: "e1xfr5s1" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	padding: e.spacing.threeXS,
	backgroundColor: "transparent",
	border: "none",
	borderRadius: e.radii.sm,
	cursor: "pointer",
	color: e.colors.fadedText60,
	transition: "color 0.15s ease, background-color 0.15s ease",
	"&:hover": {
		backgroundColor: e.colors.darkenedBgMix15,
		color: e.colors.bodyText
	},
	"&:active": { backgroundColor: e.colors.darkenedBgMix25 },
	"&:focus": { outline: "none" },
	"&:focus-visible": { boxShadow: e.shadows.focusRing }
}), ""), y = /* @__PURE__ */ e("div", { target: "e1xfr5s0" })(({ theme: e }) => ({
	backgroundColor: d(e) ? e.colors.bgColor : e.colors.secondaryBg,
	borderRadius: e.radii.default,
	boxShadow: e.shadows.tooltip,
	overflow: "hidden",
	zIndex: e.zIndices.popup
}), ""), b = 50;
function x({ top: e, left: t, path: a, clearTooltip: c }) {
	let { isCopied: l, copyToClipboard: u, label: d } = n(), { refs: p, floatingStyles: m } = i({
		open: !0,
		placement: "top",
		offsetPx: 15
	}), g = (0, h.useRef)(0);
	(0, h.useEffect)(() => {
		g.current = Date.now();
	}, []);
	let x = (0, h.useRef)(c);
	(0, h.useEffect)(() => {
		x.current = c;
	}, [c]);
	let S = (0, h.useRef)(null);
	(0, h.useEffect)(() => {
		p.setReference({ getBoundingClientRect: () => ({
			x: t,
			y: e,
			top: e,
			left: t,
			bottom: e,
			right: t,
			width: 0,
			height: 0
		}) });
	}, [
		p,
		e,
		t
	]);
	let C = (0, h.useCallback)((e) => {
		p.setFloating(e), S.current = e;
	}, [p]);
	(0, h.useEffect)(() => {
		let e = (e) => {
			Date.now() - g.current < b || S.current?.contains(e.target) || x.current();
		}, t = (e) => {
			e.key === "Escape" && (e.stopPropagation(), x.current());
		};
		return document.addEventListener("click", e), document.addEventListener("keydown", t, !0), () => {
			document.removeEventListener("click", e), document.removeEventListener("keydown", t, !0);
		};
	}, []);
	let w = (0, h.useCallback)(() => {
		u(a);
	}, [u, a]);
	return /* @__PURE__ */ f.jsx(r, {
		id: s,
		children: /* @__PURE__ */ f.jsx(y, {
			ref: C,
			"data-testid": "stJsonPathTooltipBody",
			style: m,
			role: "dialog",
			"aria-label": "JSON path",
			children: /* @__PURE__ */ f.jsxs(_, {
				"data-testid": "stJsonPathTooltip",
				children: [/* @__PURE__ */ f.jsx("code", { children: a }), /* @__PURE__ */ f.jsx(v, {
					onClick: w,
					title: d,
					"aria-label": d,
					autoFocus: !0,
					children: /* @__PURE__ */ f.jsx(o, {
						size: "sm",
						iconValue: l ? ":material/check:" : ":material/content_copy:"
					})
				})]
			})
		})
	});
}
var S = (0, h.memo)(x);
function C(e) {
	return e.length === 0 ? "$" : e.reduce((e, t, n) => t === null ? e : /^\d+$/.test(t) ? `${e}[${t}]` : t === "" || /[^a-zA-Z0-9_$]/.test(t) || /^\d/.test(t) ? `${e}["${t.replaceAll("\\", "\\\\").replaceAll("\"", "\\\"")}"]` : n === 0 || e === "" ? t : `${e}.${t}`, "");
}
function w() {
	let [e, t] = (0, h.useState)(null), n = (0, h.useRef)({
		x: 0,
		y: 0
	});
	return (0, h.useEffect)(() => {
		let e = (e) => {
			n.current = {
				x: e.clientX,
				y: e.clientY
			};
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, []), {
		tooltip: e,
		handleSelect: (0, h.useCallback)((e) => {
			let { x: r, y: i } = n.current, a = C([...e.namespace, e.name]);
			t({
				path: a,
				x: r,
				y: i
			});
		}, []),
		clearTooltip: (0, h.useCallback)(() => {
			t(null);
		}, [])
	};
}
function T({ element: e }) {
	let r = c(), { tooltip: i, handleSelect: o, clearTooltip: s } = w(), { copyToClipboard: l } = n(), u = (0, h.useCallback)((e) => {
		l(JSON.stringify(e.src));
	}, [l]), _;
	try {
		_ = JSON.parse(e.body);
	} catch (n) {
		let r = a(n);
		try {
			_ = p.parse(e.body);
		} catch {
			let n = Number.parseInt(r.message.replaceAll(/[^0-9]/g, ""), 10);
			return r.message += `
${e.body.slice(0, n + 1)} ← here`, /* @__PURE__ */ f.jsx(t, {
				name: "Json Parse Error",
				message: r.message
			});
		}
	}
	let v = d(r) ? "rjv-default" : "monokai";
	return /* @__PURE__ */ f.jsxs(g, {
		className: "stJson",
		"data-testid": "stJson",
		children: [/* @__PURE__ */ f.jsx(m, {
			src: _,
			collapsed: e.maxExpandDepth ?? !e.expanded,
			displayDataTypes: !1,
			displayObjectSize: !1,
			name: !1,
			theme: v,
			enableClipboard: u,
			onSelect: o,
			showComma: !1,
			style: {
				fontFamily: r.genericFonts.codeFont,
				fontSize: r.fontSizes.codeFontSize,
				fontWeight: r.fontWeights.code,
				backgroundColor: r.colors.bgColor,
				whiteSpace: "pre-wrap"
			}
		}), i && /* @__PURE__ */ f.jsx(S, {
			top: i.y,
			left: i.x,
			path: i.path,
			clearTooltip: s
		})]
	});
}
var E = (0, h.memo)(T);
//#endregion
export { E as default };

//# sourceMappingURL=Json-Bv8cZ4Ae-BsDPgm3k.js.map