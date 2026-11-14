import { Cn as e, Di as t, Ga as n, Rn as r, Wo as i, cr as a, ds as o, ms as s, ur as c, wr as l, za as u } from "./index-B1FrxEMd-BsPMjC5n.js";
//#region ../react/build/PageLink-DijBkx-E.js
var d = /* @__PURE__ */ s(o(), 1), f = /* @__PURE__ */ t("div", { target: "e11k5jya2" })({
	name: "b6wrti",
	styles: "display:flex;flex-direction:column;width:100%"
}), p = /* @__PURE__ */ t("a", { target: "e11k5jya1" })(({ disabled: e, isCurrentPage: t, theme: n }) => ({
	textDecoration: "none",
	width: "100%",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "flex-start",
	gap: n.spacing.sm,
	borderRadius: n.radii.default,
	paddingLeft: n.spacing.sm,
	paddingRight: n.spacing.sm,
	marginTop: n.spacing.threeXS,
	marginBottom: n.spacing.threeXS,
	lineHeight: n.lineHeights.menuItem,
	backgroundColor: t ? n.colors.darkenedBgMix15 : "transparent",
	"&:hover": { backgroundColor: t ? n.colors.darkenedBgMix25 : n.colors.darkenedBgMix15 },
	"&:active,&:visited,&:hover": { textDecoration: "none" },
	"&:focus": { outline: "none" },
	"&:focus-visible": { backgroundColor: n.colors.darkenedBgMix15 },
	"@media print": { paddingLeft: n.spacing.none },
	...e ? {
		borderColor: n.colors.borderColor,
		backgroundColor: n.colors.transparent,
		color: n.colors.fadedText40,
		cursor: "not-allowed",
		"&:hover": {
			color: n.colors.fadedText40,
			backgroundColor: n.colors.transparent
		}
	} : {}
}), ""), m = /* @__PURE__ */ t("span", { target: "e11k5jya0" })(({ disabled: e, theme: t }) => ({
	color: t.colors.bodyText,
	overflow: "hidden",
	whiteSpace: "nowrap",
	textOverflow: "ellipsis",
	display: "table-cell",
	...e ? {
		borderColor: t.colors.borderColor,
		backgroundColor: t.colors.transparent,
		color: t.colors.fadedText40,
		cursor: "not-allowed"
	} : {}
}), "");
function h(e) {
	let t = e.page;
	if (e.queryString) {
		if (e.external) try {
			let n = new URL(e.page);
			new URLSearchParams(e.queryString).forEach((e, t) => n.searchParams.append(t, e)), t = n.toString();
		} catch {
			let [n, r] = t.split("#");
			t = n + (n.includes("?") ? "&" : "?") + e.queryString + (r ? "#" + r : "");
		}
		else t += (t.includes("?") ? "&" : "?") + e.queryString;
	}
	return t;
}
function g(t) {
	let { onPageChange: o, currentPageScriptHash: s } = (0, d.useContext)(a), { colors: g } = i(), { disabled: _, element: v } = t, y = s === v.pageScriptHash, b = (e) => {
		v.external ? _ && e.preventDefault() : (e.preventDefault(), _ || o(v.pageScriptHash, v.queryString));
	}, x = n(v.iconPosition), S = h(v);
	return /* @__PURE__ */ u.jsx("div", {
		className: "stPageLink",
		"data-testid": "stPageLink",
		children: /* @__PURE__ */ u.jsx(e, {
			help: v.help,
			placement: c.TOP_RIGHT,
			containerWidth: !0,
			children: /* @__PURE__ */ u.jsx(f, { children: /* @__PURE__ */ u.jsxs(p, {
				"data-testid": "stPageLink-NavLink",
				disabled: _,
				isCurrentPage: y,
				href: S,
				target: v.external ? "_blank" : "",
				rel: "noreferrer",
				onClick: b,
				children: [
					v.icon && x === "left" && /* @__PURE__ */ u.jsx(r, {
						size: "base",
						color: _ ? g.fadedText40 : g.bodyText,
						iconValue: v.icon
					}),
					/* @__PURE__ */ u.jsx(m, {
						disabled: _,
						children: /* @__PURE__ */ u.jsx(l, {
							source: v.label,
							allowHTML: !1,
							isLabel: !0,
							boldLabel: y,
							disableLinks: !0
						})
					}),
					v.icon && x === "right" && /* @__PURE__ */ u.jsx(r, {
						size: "base",
						color: _ ? g.fadedText40 : g.bodyText,
						iconValue: v.icon
					})
				]
			}) })
		})
	});
}
var _ = (0, d.memo)(g);
//#endregion
export { h as buildHref, _ as default };

//# sourceMappingURL=PageLink-DijBkx-E-DJv5PDuc.js.map