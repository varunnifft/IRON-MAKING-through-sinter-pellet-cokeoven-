import { $a as e, Cr as t, Di as n, Hn as r, Ma as i, Mi as a, Mn as o, No as s, Wa as c, Wo as l, _n as u, ds as d, fo as f, ms as p, os as m, tr as h, us as g, vn as _, xr as v, za as y } from "./index-B1FrxEMd-BsPMjC5n.js";
import { i as b, r as x } from "./urls-hxAPaE-_-CaxBV_RZ.js";
import { t as S } from "./withCalculatedWidth-Ddrgk5vM-CtHlZhi_.js";
import { n as C, t as w } from "./IFrameUtil-BYTcNZ4E-B8B2FnkH.js";
//#region ../react/build/ComponentInstance-B2dNydsJ.js
var T = /* @__PURE__ */ p(d(), 1), E = /* @__PURE__ */ p(g(), 1), D = /* @__PURE__ */ ((e) => (e.COMPONENT_READY = "streamlit:componentReady", e.SET_COMPONENT_VALUE = "streamlit:setComponentValue", e.SET_FRAME_HEIGHT = "streamlit:setFrameHeight", e))(D || {}), O = /* @__PURE__ */ ((e) => (e.RENDER = "streamlit:render", e))(O || {}), k = 1, A = c.getLogger("componentUtils");
function j(e) {
	return (t, n) => {
		if (!e.current) return;
		let { isReady: r, element: i, widgetMgr: a, setComponentError: o, componentReadyCallback: s, frameHeightCallback: c, fragmentId: l } = e.current, u = r();
		switch (t) {
			case D.COMPONENT_READY: {
				let { apiVersion: e } = n;
				e === k ? s() : o(/* @__PURE__ */ Error(`Unrecognized component API version: '${e}'`));
				break;
			}
			case D.SET_COMPONENT_VALUE:
				u ? P(F(n, "value"), n.dataType, { fromUser: !0 }, i, a, l) : A.warn(`Got ${t} before ${D.COMPONENT_READY}!`);
				break;
			case D.SET_FRAME_HEIGHT:
				u ? c(F(n, "height")) : A.warn(`Got ${t} before ${D.COMPONENT_READY}!`);
				break;
			default: A.warn(`Unrecognized ComponentBackMsgType: ${t}`);
		}
	};
}
function M(e, t) {
	let n = JSON.parse(e), r = [];
	for (let e of t) {
		let { key: t } = e;
		switch (e.value?.toLowerCase()) {
			case "arrowdataframe":
				r.push({
					key: t,
					value: _.toObject(e.arrowDataframe)
				});
				break;
			case "bytes":
				n[t] = e.bytes;
				break;
			default: throw Error(`Unrecognized SpecialArg type: ${e.value}`);
		}
	}
	return [n, r];
}
function N(e, t, n, r, a) {
	if (!a) {
		A.warn("Can't send ForwardMsg; missing our iframe!");
		return;
	}
	if (i(a.contentWindow)) {
		A.warn("Can't send ForwardMsg; iframe has no contentWindow!");
		return;
	}
	a.contentWindow.postMessage({
		type: O.RENDER,
		args: e,
		dfs: t,
		disabled: n,
		theme: {
			...s(r),
			font: r.genericFonts.bodyFont
		}
	}, "*");
}
function P(e, t, n, r, i, a) {
	if (e === void 0) {
		A.warn("handleSetComponentValue: missing 'value' prop");
		return;
	}
	switch (t) {
		case "dataframe":
			i.setArrowValue(r.id, e, {
				...n,
				formId: r.formId,
				fragmentId: a
			});
			break;
		case "bytes":
			i.setBytesValue(r.id, e, {
				...n,
				formId: r.formId,
				fragmentId: a
			});
			break;
		default: i.setJsonValue(r.id, e, {
			...n,
			formId: r.formId,
			fragmentId: a
		});
	}
}
function F(e, t, n = void 0) {
	return Object.hasOwn(e, t) ? e[t] : n;
}
var I = /* @__PURE__ */ n("iframe", { target: "e1fjvnnc0" })(({ theme: e, componentReady: t }) => ({
	colorScheme: "normal",
	border: "none",
	padding: e.spacing.none,
	margin: e.spacing.none,
	display: t ? "initial" : "none"
}), ""), L = c.getLogger("ComponentInstance"), R = 6e4;
function z(n, r, i) {
	let a;
	a = e(i) && i !== "" ? i : r.getComponentURL(n, "index.html");
	let o = t.CUSTOM_COMPONENT_CLIENT_ID, s = new URL(window.location.href);
	return a = f.stringifyUrl({
		url: a,
		query: {
			streamlitUrl: s.origin + s.pathname,
			...o && { __streamlit_parent_client_id: o }
		}
	}), a;
}
function B(e, t) {
	let n;
	return n = t && t !== "" ? `Your app is having trouble loading the **${e}** component.
The app is attempting to load the component from **${t}**,
and hasn't received its \`Streamlit.setComponentReady()\` message.

If this is a development build, have you started the dev server?

For more troubleshooting help, please see the [Streamlit Component docs](${b}) or visit our [forums](${x}).` : `Your app is having trouble loading the **${e}** component.

If this is an installed component that works locally, the app may be having trouble accessing the component frontend assets due to network latency or proxy settings in your app deployment.

For more troubleshooting help, please see the [Streamlit Component docs](${b}) or visit our [forums](${x}).`, n;
}
function V(e, t, n, r) {
	if (!r) try {
		return M(e, t);
	} catch (e) {
		n(a(e));
	}
	return [{}, []];
}
function H(e, t) {
	return e === t || e.length === t.length && e.every((e, n) => {
		let r = t[n];
		return e.key === r.key && e.value === r.value;
	});
}
function U(e) {
	let t = l(), [n, a] = (0, T.useState)(), { disabled: s, element: c, widgetMgr: d, width: f, fragmentId: p, componentRegistry: g } = e, { componentName: _, jsonArgs: b, specialArgs: x, url: S } = c, [D, O] = V(b, x, a, n), k = (0, T.useMemo)(() => z(_, g, S), [
		_,
		g,
		S
	]), A = (0, T.useRef)({
		args: {},
		dataframeArgs: []
	}), M = H(A.current.dataframeArgs, O);
	A.current.args = D, A.current.dataframeArgs = O;
	let [P, F] = (0, T.useState)(), [U, W] = (0, T.useState)(() => {
		let e = D.height, t = typeof e == "number" ? e : typeof e == "string" && e.trim() !== "" ? Number(e) : NaN;
		return Number.isFinite(t) ? t : void 0;
	}), G = (0, T.useRef)(!1), K = (0, T.useRef)(null), q = (0, T.useRef)(), { clear: J } = m(() => L.warn(B(_, S)), R / 4), { clear: Y } = m(() => {
		(0, E.flushSync)(() => {
			F(!0);
		});
	}, R);
	if ((0, T.useEffect)(() => {
		g.checkSourceUrlResponse(k, _);
	}, [
		k,
		_,
		g
	]), (0, T.useEffect)(() => {
		P && !G.current && (L.error(`Client Error: Custom Component ${_} timeout error`), g.sendTimeoutError(k, _));
	}, [
		P,
		k,
		_,
		g
	]), (0, T.useEffect)(() => {
		G.current && N(A.current.args, A.current.dataframeArgs, s, t, K.current ?? void 0);
	}, [
		s,
		U,
		M,
		b,
		t,
		f
	]), (0, T.useEffect)(() => {
		q.current = {
			isReady: () => G.current,
			element: c,
			widgetMgr: d,
			setComponentError: a,
			componentReadyCallback: () => {
				N(A.current.args, A.current.dataframeArgs, s, t, K.current ?? void 0), J(), Y(), G.current = !0, (0, E.flushSync)(() => {
					F(!1);
				});
			},
			frameHeightCallback: (e) => {
				if (e === void 0) {
					L.warn("handleSetFrameHeight: missing 'height' prop");
					return;
				}
				if (e !== U) {
					if (i(K.current)) {
						L.warn("handleSetFrameHeight: missing our iframeRef!");
						return;
					}
					K.current.height = e.toString(), (0, E.flushSync)(() => {
						W(e);
					});
				}
			},
			fragmentId: p
		};
	}, [
		_,
		s,
		c,
		U,
		M,
		P,
		b,
		t,
		d,
		Y,
		J,
		p
	]), (0, T.useEffect)(() => {
		let e = K.current?.contentWindow ?? void 0;
		if (e) return g.registerListener(e, j(q)), () => {
			e && g.deregisterListener(e);
		};
	}, [g, _]), n) return /* @__PURE__ */ y.jsx(r, {
		name: n.name,
		message: n.message
	});
	let X = !G.current && !P && U !== 0 && /* @__PURE__ */ y.jsx(v, {
		"data-testid": "stSkeleton",
		height: U ? `${U}px` : void 0,
		"aria-hidden": "true"
	}), Z = !G.current && P ? /* @__PURE__ */ y.jsx(u, {
		body: B(_, S),
		kind: h.WARNING
	}) : null;
	return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
		X,
		Z,
		/* @__PURE__ */ y.jsx(o, {
			IframeComponent: I,
			className: "stCustomComponentV1",
			"data-testid": "stCustomComponentV1",
			allow: C,
			ref: K,
			src: k,
			width: f,
			height: U ?? 0,
			scrolling: "no",
			sandbox: w,
			title: _,
			componentReady: G.current,
			tabIndex: c.tabIndex ?? void 0
		})
	] });
}
var W = S((0, T.memo)(U));
//#endregion
export { R as COMPONENT_READY_WARNING_TIME_MS, W as default };

//# sourceMappingURL=ComponentInstance-B2dNydsJ-BUC1BWfn.js.map