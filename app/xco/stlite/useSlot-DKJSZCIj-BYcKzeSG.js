import { Ft as e, N as t, ds as n, ms as r } from "./index-B1FrxEMd-BsPMjC5n.js";
//#region ../react/build/useSlot-DKJSZCIj.js
var i = /* @__PURE__ */ r(n(), 1);
function a(t = !0) {
	let [n, r] = (0, i.useState)(t), a = (0, i.useRef)(!1), o = (0, i.useCallback)((e) => {
		a.current = !0, r(!!e);
	}, []);
	return e(() => {
		a.current || r(!1);
	}, []), [o, n];
}
function o(e = !0) {
	let n = t(), [r, i] = a(e);
	return {
		id: i ? n : void 0,
		ref: r
	};
}
//#endregion
export { o as t };

//# sourceMappingURL=useSlot-DKJSZCIj-BYcKzeSG.js.map