import { Ma as e, rr as t, wr as n, za as r } from "./index-B1FrxEMd-BsPMjC5n.js";
import { a as i, i as a } from "./styled-components-DOYIt51e-DLCP0S-5.js";
//#region ../react/build/WidgetLabel--oJQrsAd.js
function o({ label: o, children: s, disabled: c, labelVisibility: l, htmlFor: u, required: d, labelTextRef: f }) {
	if (e(o)) return null;
	let p = e(l) || l === t.Visible, m = !!d && p;
	return /* @__PURE__ */ r.jsxs(a, {
		"data-testid": "stWidgetLabel",
		disabled: c,
		labelVisibility: l,
		htmlFor: u,
		children: [
			/* @__PURE__ */ r.jsx("span", {
				"aria-hidden": "true",
				ref: f,
				children: /* @__PURE__ */ r.jsx(n, {
					source: o,
					allowHTML: !1,
					isLabel: !0
				})
			}),
			m && /* @__PURE__ */ r.jsx(i, {
				"data-testid": "stWidgetLabelRequired",
				"aria-hidden": "true",
				$disabled: c,
				children: "(required)"
			}),
			s
		]
	});
}
//#endregion
export { o as t };

//# sourceMappingURL=WidgetLabel--oJQrsAd-IbrOPlTn.js.map