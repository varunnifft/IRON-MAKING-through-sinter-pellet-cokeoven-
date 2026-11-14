import { t as e } from "./init-5BClRdiB-LyILMlTE.js";
import { i as t } from "./linear-CJvvCWKw-rrRTERsA.js";
//#region ../react/build/threshold-je-9V4hw.js
function n() {
	var r = [.5], i = [0, 1], a, o = 1;
	function s(e) {
		return e != null && e <= e ? i[t(r, e, 0, o)] : a;
	}
	return s.domain = function(e) {
		return arguments.length ? (r = Array.from(e), o = Math.min(r.length, i.length - 1), s) : r.slice();
	}, s.range = function(e) {
		return arguments.length ? (i = Array.from(e), o = Math.min(r.length, i.length - 1), s) : i.slice();
	}, s.invertExtent = function(e) {
		var t = i.indexOf(e);
		return [r[t - 1], r[t]];
	}, s.unknown = function(e) {
		return arguments.length ? (a = e, s) : a;
	}, s.copy = function() {
		return n().domain(r).range(i).unknown(a);
	}, e.apply(s, arguments);
}
//#endregion
export { n as t };

//# sourceMappingURL=threshold-je-9V4hw-qdwK0deF.js.map