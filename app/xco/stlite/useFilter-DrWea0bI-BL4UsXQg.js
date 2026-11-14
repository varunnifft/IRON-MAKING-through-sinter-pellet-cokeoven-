import { ds as e, ms as t } from "./index-B1FrxEMd-BsPMjC5n.js";
import { t as n } from "./useCollator-DP4BnoIq-QM8AOSx3.js";
//#region ../react/build/useFilter-DrWea0bI.js
var r = /* @__PURE__ */ t(e(), 1);
function i(e) {
	let t = n({
		usage: "search",
		...e
	}), i = (0, r.useCallback)((e, n) => n.length === 0 || (e = e.normalize("NFC"), n = n.normalize("NFC"), t.compare(e.slice(0, n.length), n) === 0), [t]), a = (0, r.useCallback)((e, n) => n.length === 0 || (e = e.normalize("NFC"), n = n.normalize("NFC"), t.compare(e.slice(-n.length), n) === 0), [t]), o = (0, r.useCallback)((e, n) => {
		if (n.length === 0) return !0;
		e = e.normalize("NFC"), n = n.normalize("NFC");
		let r = 0, i = n.length;
		for (; r + i <= e.length; r++) {
			let a = e.slice(r, r + i);
			if (t.compare(n, a) === 0) return !0;
		}
		return !1;
	}, [t]);
	return (0, r.useMemo)(() => ({
		startsWith: i,
		endsWith: a,
		contains: o
	}), [
		i,
		a,
		o
	]);
}
//#endregion
export { i as t };

//# sourceMappingURL=useFilter-DrWea0bI-BL4UsXQg.js.map