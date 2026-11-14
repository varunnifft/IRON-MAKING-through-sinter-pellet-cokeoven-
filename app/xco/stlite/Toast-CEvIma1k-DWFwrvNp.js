import { $a as e, Lo as t, Wo as n, _n as r, ds as i, ms as a, tr as o, za as s } from "./index-B1FrxEMd-BsPMjC5n.js";
//#region ../react/build/Toast-CEvIma1k.js
var c = /* @__PURE__ */ a(i(), 1);
function l({ element: i, toastId: a }) {
	let { body: l, icon: u, duration: d } = i, f = n();
	(0, c.useEffect)(() => {
		if (f.inSidebar || t.visibleToasts.some((e) => e.content.toastId === a)) return;
		let n = e(d) ? d === 0 ? void 0 : d * 1e3 : 4e3;
		t.add({
			body: l,
			icon: u || void 0,
			toastId: a
		}, { timeout: n });
	}, []);
	let p = /* @__PURE__ */ s.jsx(r, {
		kind: o.ERROR,
		body: "Streamlit API Error: `st.toast` cannot be called directly on the sidebar with `st.sidebar.toast`.\n        See our `st.toast` API [docs](https://docs.streamlit.io/develop/api-reference/status/st.toast) for more information."
	});
	return f.inSidebar ? p : null;
}
var u = (0, c.memo)(l);
//#endregion
export { u as default };

//# sourceMappingURL=Toast-CEvIma1k-DWFwrvNp.js.map