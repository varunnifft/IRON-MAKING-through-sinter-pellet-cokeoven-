import { $o as e, Di as t, Lr as n, Ma as r, Uo as i, Vr as a, Wa as o, as as s, ds as c, ms as l, so as u, wr as d, xa as f, za as p } from "./index-B1FrxEMd-BsPMjC5n.js";
import { n as m, t as h } from "./withFullScreenWrapper-C8-Fpvyp-DxnGM32Q.js";
//#region ../react/build/ImageList-yGh-sRGo.js
var g = /* @__PURE__ */ l(c(), 1), _ = /* @__PURE__ */ t("div", { target: "e115fcil3" })(({ theme: e, shouldStretch: t }) => ({
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	rowGap: e.spacing.lg,
	maxWidth: "100%",
	width: t ? "100%" : "fit-content"
}), ""), v = /* @__PURE__ */ t("div", { target: "e115fcil2" })(({ theme: e, shouldStretch: t }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "stretch",
	width: t ? "100%" : "auto",
	flexGrow: +!!t,
	">img": { borderRadius: e.radii.default }
}), ""), y = /* @__PURE__ */ t("div", { target: "e115fcil1" })(({ theme: e }) => ({
	textAlign: "center",
	marginTop: e.spacing.xs,
	wordWrap: "break-word",
	padding: e.spacing.threeXS
}), ""), b = /* @__PURE__ */ t("a", { target: "e115fcil0" })(({ theme: e }) => ({
	display: "block",
	borderRadius: e.radii.default,
	overflow: "hidden",
	"&:hover": { opacity: .85 },
	"&:focus-visible": { boxShadow: e.shadows.focusRing }
}), ""), x = o.getLogger("ImageList");
function S(e, t) {
	if (e) {
		if (e.useStretch) return t;
		if (e.useContent) return;
		if (e.pixelWidth) return e.pixelWidth;
	}
}
var C = ({ image: e, imgStyle: t, buildMediaURL: n, handleImageError: a, shouldStretch: o, link: s, onCaptionPlainTextChange: c }) => {
	let l = i(e.url), m = (0, g.useId)(), h = (0, g.useRef)(null), [_, x] = (0, g.useState)(!1), S = s && !f(s) ? s : void 0, C = r(e.alt) ? void 0 : e.alt;
	(0, g.useLayoutEffect)(() => {
		let t = h.current;
		if (!S && !c || !e.caption || !t) {
			x(!1), c?.(void 0);
			return;
		}
		let n = () => {
			let e = u(t);
			x(e.length > 0), c?.(e || void 0);
		};
		n();
		let r = new MutationObserver(n);
		return r.observe(t, {
			childList: !0,
			subtree: !0,
			characterData: !0
		}), () => r.disconnect();
	}, [
		e.caption,
		c,
		S
	]);
	let w = /* @__PURE__ */ p.jsx("img", {
		style: t,
		src: n(e.url),
		alt: C,
		onError: a,
		crossOrigin: l
	});
	return /* @__PURE__ */ p.jsxs(v, {
		"data-testid": "stImageContainer",
		shouldStretch: o,
		children: [S ? /* @__PURE__ */ p.jsx(b, {
			href: S,
			target: "_blank",
			rel: "noreferrer",
			..._ ? { "aria-labelledby": m } : { "aria-label": C || S },
			"data-testid": "stImageLink",
			children: w
		}) : w, e.caption && /* @__PURE__ */ p.jsx(y, {
			ref: h,
			id: m,
			"data-testid": "stImageCaption",
			style: t,
			children: /* @__PURE__ */ p.jsx(d, {
				source: e.caption,
				allowHTML: !1,
				isCaption: !0,
				isLabel: !0
			})
		})]
	});
};
function w({ element: t, endpoints: r, widthConfig: i, disableFullscreenMode: o }) {
	let c = s(t.imgs), { expanded: l, width: u, height: d, expand: f, collapse: m } = e(h), v = u || 0, y = S(i, v), b = i?.useStretch ?? !1, w = {};
	d && l ? (w.maxHeight = d, w.objectFit = "contain", w.width = "100%") : (w.width = y ?? "100%", w.maxWidth = "100%");
	let T = (e) => {
		let t = e.currentTarget.src;
		x.error(`Client Error: Image source error - ${t}`), r.sendClientErrorToHost("Image", "Image source failed to load", "onerror triggered", t);
	}, [E, D] = (0, g.useState)(), O = t.imgs.length === 1 ? t.imgs[0] : void 0, k = O?.alt?.trim() || void 0, A = k ?? (O ? E : void 0), j = O && !k ? D : void 0;
	return /* @__PURE__ */ p.jsxs(n, {
		width: v,
		height: d,
		useContainerWidth: l,
		topCentered: !0,
		children: [/* @__PURE__ */ p.jsx(a, {
			target: n,
			isFullScreen: l,
			onExpand: f,
			onCollapse: m,
			disableFullscreenMode: o,
			labelContext: A
		}), /* @__PURE__ */ p.jsx(_, {
			className: "stImage",
			"data-testid": "stImage",
			shouldStretch: b,
			children: c.map((e, n) => /* @__PURE__ */ p.jsx(C, {
				image: e,
				imgStyle: w,
				buildMediaURL: (e) => r.buildMediaURL(e),
				handleImageError: T,
				shouldStretch: b,
				link: t.imgs.length === 1 ? t.link : void 0,
				onCaptionPlainTextChange: n === 0 ? j : void 0
			}, n))
		})]
	});
}
var T = m(w), E = (0, g.memo)(T);
//#endregion
export { E as default };

//# sourceMappingURL=ImageList-yGh-sRGo-BNqOAulv.js.map