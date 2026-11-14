import { D as e } from "./index-B1FrxEMd-BsPMjC5n.js";
//#region ../react/build/useCollator-DP4BnoIq.js
var t = /* @__PURE__ */ new Map();
function n(n) {
	let { locale: r } = e(), i = r + (n ? Object.entries(n).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
	if (t.has(i)) return t.get(i);
	let a = new Intl.Collator(r, n);
	return t.set(i, a), a;
}
//#endregion
export { n as t };

//# sourceMappingURL=useCollator-DP4BnoIq-QM8AOSx3.js.map