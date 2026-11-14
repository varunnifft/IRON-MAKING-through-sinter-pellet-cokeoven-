import { Cn as e, Di as t, Ga as n, Ln as r, Oi as i, Qo as a, Sn as o, ds as s, ms as c, ts as l, wn as u, xa as d, xn as f, za as p } from "./index-B1FrxEMd-BsPMjC5n.js";
//#region ../react/build/LinkButton-Dlcgt6NT.js
var m = /* @__PURE__ */ c(s(), 1);
function h(e, t) {
	switch (e) {
		case o.XSMALL: return {
			padding: `${t.spacing.twoXS} ${t.spacing.sm}`,
			fontSize: t.fontSizes.sm
		};
		case o.SMALL: return { padding: `${t.spacing.twoXS} ${t.spacing.md}` };
		case o.LARGE: return { padding: `${t.spacing.md} ${t.spacing.md}` };
		default: return { padding: `${t.spacing.xs} ${t.spacing.md}` };
	}
}
var g = /* @__PURE__ */ t("a", { target: "e16zdaao3" })(({ containerWidth: e, size: t, theme: n }) => ({
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	fontWeight: n.fontWeights.normal,
	padding: `${n.spacing.xs} ${n.spacing.md}`,
	borderRadius: n.radii.button,
	minHeight: n.sizes.minElementHeight,
	margin: 0,
	lineHeight: n.lineHeights.base,
	color: n.colors.primary,
	textDecoration: "none",
	width: e ? "100%" : "auto",
	userSelect: "none",
	"&:visited": { color: n.colors.primary },
	"&:focus": { outline: "none" },
	"&:focus-visible": { boxShadow: n.shadows.focusRing },
	"&:hover": { textDecoration: "none" },
	"&:active": { textDecoration: "none" },
	...h(t, n)
}), ""), _ = /* @__PURE__ */ t(g, { target: "e16zdaao2" })(({ theme: e }) => ({
	backgroundColor: e.colors.primary,
	color: e.colors.white,
	border: `${e.sizes.borderWidth} solid ${e.colors.primary}`,
	"&:hover, &:focus-visible": {
		backgroundColor: i(e.colors.primary, .15),
		borderColor: i(e.colors.primary, .15)
	},
	"&:active": {
		backgroundColor: e.colors.primary,
		borderColor: i(e.colors.primary, .15)
	},
	"&:visited:not(:active)": { color: e.colors.white },
	"&[disabled], &[disabled]:hover, &[disabled]:active, &[disabled]:visited": {
		borderColor: e.colors.borderColor,
		backgroundColor: e.colors.transparent,
		color: e.colors.fadedText40,
		cursor: "not-allowed"
	}
}), ""), v = /* @__PURE__ */ t(g, { target: "e16zdaao1" })(({ theme: e }) => ({
	backgroundColor: e.colors.lightenedBg05,
	color: e.colors.bodyText,
	border: `${e.sizes.borderWidth} solid ${e.colors.borderColor}`,
	"&:visited": { color: e.colors.bodyText },
	"&:hover, &:focus-visible": { backgroundColor: e.colors.darkenedBgMix15 },
	"&:active": { backgroundColor: e.colors.darkenedBgMix25 },
	"&[disabled], &[disabled]:hover, &[disabled]:active": {
		borderColor: e.colors.borderColor,
		backgroundColor: e.colors.transparent,
		color: e.colors.fadedText40,
		cursor: "not-allowed"
	}
}), ""), y = /* @__PURE__ */ t(g, { target: "e16zdaao0" })(({ theme: e }) => ({
	padding: e.spacing.none,
	backgroundColor: e.colors.transparent,
	color: e.colors.bodyText,
	border: "none",
	"&:visited": { color: e.colors.bodyText },
	"&:hover, &:focus-visible": { color: e.colors.primary },
	"&:hover:not([disabled]), &:focus-visible:not([disabled])": { "span.stMarkdownColoredText": { color: "inherit !important" } },
	"&:active": { color: i(e.colors.primary, .25) },
	"&[disabled], &[disabled]:hover, &[disabled]:active": {
		backgroundColor: e.colors.transparent,
		color: e.colors.fadedText40,
		cursor: "not-allowed"
	}
}), ""), b = (0, m.forwardRef)(function({ kind: e, size: t, disabled: n, children: r, autoFocus: i, href: a, rel: s, target: c, onClick: l }, u) {
	let d = _;
	return e === f.SECONDARY ? d = v : e === f.TERTIARY && (d = y), /* @__PURE__ */ p.jsx(d, {
		ref: u,
		kind: e,
		size: t || o.MEDIUM,
		containerWidth: !0,
		disabled: n || !1,
		autoFocus: i || !1,
		href: a,
		target: c,
		rel: s,
		onClick: l,
		tabIndex: n ? -1 : 0,
		"data-testid": `stBaseLinkButton-${e}`,
		children: r
	});
});
b.displayName = "BaseLinkButton";
var x = (0, m.memo)(b);
function S(t) {
	let { element: i, widgetMgr: s, fragmentId: c } = t, h = i.shortcut || void 0, g = d(i.url), _ = g ? "#" : i.url, v = l(i.wrap), y = !v && !i.help, b = f.SECONDARY;
	i.type === "primary" ? b = f.PRIMARY : i.type === "tertiary" && (b = f.TERTIARY);
	let S = (0, m.useRef)(null), C = (0, m.useCallback)(() => {
		i.disabled || g || S.current?.click();
	}, [i.disabled, g]), w = (0, m.useCallback)((e) => {
		if (i.disabled || g) {
			e.preventDefault();
			return;
		}
		!i.ignoreRerun && i.id && s.setTriggerValue(i.id, {
			formId: void 0,
			fragmentId: c,
			fromUser: !0
		});
	}, [
		i,
		c,
		g,
		s
	]);
	return a({
		shortcut: h,
		disabled: i.disabled,
		onActivate: C
	}), /* @__PURE__ */ p.jsx(u, {
		className: "stLinkButton",
		"data-testid": "stLinkButton",
		children: /* @__PURE__ */ p.jsx(e, {
			help: i.help,
			containerWidth: !0,
			children: /* @__PURE__ */ p.jsx(x, {
				ref: S,
				kind: b,
				size: o.SMALL,
				disabled: i.disabled,
				onClick: w,
				href: _,
				target: g ? "_self" : "_blank",
				rel: "noreferrer",
				"aria-disabled": i.disabled,
				children: /* @__PURE__ */ p.jsx(r, {
					icon: i.icon,
					iconPosition: n(i.iconPosition),
					label: i.label,
					shortcut: h,
					wrap: v,
					addTitleTooltip: y
				})
			})
		})
	});
}
var C = (0, m.memo)(S);
//#endregion
export { C as default };

//# sourceMappingURL=LinkButton-Dlcgt6NT-Cj87ciQ1.js.map