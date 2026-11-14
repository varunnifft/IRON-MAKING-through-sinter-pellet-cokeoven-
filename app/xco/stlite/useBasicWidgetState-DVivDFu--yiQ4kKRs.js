import { Ma as e, Zo as t, ds as n, ms as r, qo as i } from "./index-B1FrxEMd-BsPMjC5n.js";
//#region ../react/build/useBasicWidgetState-DVivDFu-.js
var a = /* @__PURE__ */ r(n(), 1);
function o({ getStateFromWidgetMgr: t, getDefaultState: n, updateWidgetMgrState: r, element: o, widgetMgr: s, fragmentId: c, onFormCleared: l }) {
	let [u, d] = (0, a.useState)(() => t(s, o) ?? n(s, o)), [f, p] = (0, a.useState)({
		value: u,
		fromUser: !1
	}), m = e(f) ? u : f.value;
	(0, a.useEffect)(() => {
		e(f) || (p(null), d(f.value), r(o, s, f, c));
	}, [
		f,
		r,
		o,
		s,
		c
	]);
	let h = (0, a.useCallback)(() => {
		p({
			value: n(s, o),
			fromUser: !0
		}), l?.();
	}, [
		p,
		o,
		n,
		s,
		l
	]);
	return i({
		widgetMgr: s,
		element: o,
		onFormCleared: h
	}), [m, p];
}
function s(n) {
	let { getStateFromWidgetMgr: r, getDefaultStateFromProto: i, getCurrStateFromProto: s, updateWidgetMgrState: c, element: l, widgetMgr: u, fragmentId: d, queryParamBinding: f, shouldApplyIncomingValue: p } = n, m = n.formClearBehavior === "resetValueAndRunCallback" ? n.onFormCleared : void 0, [h, g] = o({
		getStateFromWidgetMgr: r,
		getDefaultState: (0, a.useCallback)((e, t) => t.setValue ? s(t) : i(t), [i, s]),
		updateWidgetMgrState: c,
		element: l,
		widgetMgr: u,
		fragmentId: d,
		onFormCleared: m
	}), _ = !e(f), v = f?.urlDefault === void 0 ? void 0 : JSON.stringify(f.urlDefault), y = (0, a.useMemo)(() => {
		if (_) return f?.urlDefault === void 0 ? i(l) : f.urlDefault;
	}, [
		_,
		l,
		i,
		v
	]), b = (0, a.useMemo)(() => _ ? {
		urlFormat: f?.urlFormat,
		dateType: f?.dateType
	} : void 0, [
		_,
		f?.urlFormat,
		f?.dateType
	]);
	return t(u, l.id, f?.paramKey ?? null, f?.valueType ?? "string_value", y, f?.clearable ?? !1, b), (0, a.useEffect)(() => {
		if (!l.setValue) return;
		l.setValue = !1;
		let e = s(l);
		p && !p(e) || g({
			value: e,
			fromUser: !1
		});
	}, [
		l,
		s,
		g,
		p
	]), [h, g];
}
//#endregion
export { o as n, s as t };

//# sourceMappingURL=useBasicWidgetState-DVivDFu--yiQ4kKRs.js.map