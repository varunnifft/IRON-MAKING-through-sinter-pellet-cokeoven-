import { Ea as e, Po as t } from "./index-B1FrxEMd-BsPMjC5n.js";
//#region ../react/build/range-CdxqIeI4.js
var n = Math.ceil, r = Math.max;
function i(e, t, i, a) {
	for (var o = -1, s = r(n((t - e) / (i || 1)), 0), c = Array(s); s--;) c[++o] = e, e += i;
	return c;
}
function a(n) {
	return function(n, r, a) {
		return a && typeof a != "number" && e(n, r, a) && (r = a = void 0), n = t(n), r === void 0 ? (r = n, n = 0) : r = t(r), a = a === void 0 ? n < r ? 1 : -1 : t(a), i(n, r, a);
	};
}
var o = a();
//#endregion
export { o as t };

//# sourceMappingURL=range-CdxqIeI4-DXvN35R3.js.map