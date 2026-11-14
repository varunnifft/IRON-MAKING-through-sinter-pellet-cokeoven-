import { $a as e, $o as t, Ai as n, Bn as r, Co as i, Da as a, Dn as o, Fn as s, Ho as c, Hr as l, Lr as u, Ma as d, Sa as f, So as p, To as m, Vo as h, Vr as g, Wa as _, Wo as v, Xn as y, Xr as b, ds as x, ja as S, jn as ee, ms as C, qo as w, vo as te, za as T } from "./index-B1FrxEMd-BsPMjC5n.js";
import { n as ne, t as re } from "./withFullScreenWrapper-C8-Fpvyp-DxnGM32Q.js";
import { T as E, c as ie, g as ae, p as D, u as O, x as oe } from "./pandasStylerUtils-CW7C-2r_-shYCGj7z.js";
import { a as k, c as se, i as A, n as ce, o as le, r as j, s as M, t as N } from "./styled-components-QCR0zGl1-gqUrmVXI.js";
import { t as ue } from "./FileDownload.esm-CRjxpEeO-BaCWUjYd.js";
import { D as P } from "./DataFrame-DRF8lFxD-CzB3xmp7.js";
import { t as de } from "./downloadDataUrl-DWF0xXIp-B1lPap8q.js";
import { t as fe } from "./TableChart.esm-pzrJ7Hep-BMvXRoA-.js";
//#region ../react/build/ArrowVegaLiteChart-DESdGa-n.js
var F = /* @__PURE__ */ C(x(), 1), pe = /* @__PURE__ */ F.forwardRef(function(e, t) {
	return /* @__PURE__ */ F.createElement(r, b({
		iconAttrs: {
			fill: "currentColor",
			xmlns: "http://www.w3.org/2000/svg"
		},
		iconVerticalAlign: "middle",
		iconViewBox: "0 0 24 24"
	}, e, { ref: t }), /* @__PURE__ */ F.createElement("path", {
		fill: "none",
		d: "M0 0h24v24H0V0z"
	}), /* @__PURE__ */ F.createElement("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" }));
});
pe.displayName = "InsertChart";
var me = ({ data: e, height: t, width: n, customToolbarActions: r, alt: i }) => /* @__PURE__ */ T.jsx(P, {
	element: new s({
		editingMode: s.EditingMode.READ_ONLY,
		disabled: !0,
		arrowData: null,
		id: "",
		columns: "",
		formId: "",
		columnOrder: [],
		selectionMode: [],
		alt: i ?? ""
	}),
	data: e,
	widgetMgr: void 0,
	disabled: !0,
	fragmentId: void 0,
	disableFullscreenMode: !0,
	customToolbarActions: r,
	widthConfig: n ?? new m.WidthConfig({ useStretch: !0 }),
	heightConfig: t ? new m.HeightConfig({ pixelHeight: t }) : void 0
});
function I(e, t) {
	if (L(e, t), Array.isArray(e.layer)) for (let n of e.layer) n && typeof n == "object" && I(n, t);
	for (let n of [
		"vconcat",
		"hconcat",
		"concat"
	]) if (Array.isArray(e[n])) for (let r of e[n]) r && typeof r == "object" && I(r, t);
	("facet" in e || "repeat" in e) && e.spec && typeof e.spec == "object" && I(e.spec, t);
}
function L(e, t) {
	let n = e.encoding;
	if (!n) return;
	let r = n.color;
	if (!r) return;
	"value" in r && S(r.value) && (r.value = te(r.value, t));
	let i = r.scale;
	i && Array.isArray(i.range) && (i.range = i.range.map((e) => S(e) ? te(e, t) : e));
}
var R = 20;
function z(e) {
	if (!(e.usermeta === null || typeof e.usermeta != "object" || Array.isArray(e.usermeta))) return e.usermeta;
}
function B(e) {
	return typeof e == "number" && Number.isFinite(e) && e >= 0;
}
function V(e) {
	return typeof e == "string" && [
		"svg",
		"canvas",
		"hybrid"
	].includes(e) ? e : void 0;
}
function H(e) {
	if (B(e)) return e;
	if (typeof e != "object" || !e || Array.isArray(e)) return;
	let t = {};
	for (let n of [
		"left",
		"right",
		"top",
		"bottom"
	]) {
		let r = e[n];
		B(r) && (t[n] = r);
	}
	return Object.keys(t).length > 0 ? t : void 0;
}
function U(e) {
	let t = z(e);
	if (!t || !("embedOptions" in t)) return;
	let n = {}, r = t.embedOptions, i = r?.theme;
	i !== "streamlit" && (typeof i == "string" || i === null) && (n.theme = i);
	let a = V(r?.renderer);
	a && (n.renderer = a);
	let o = H(r?.padding);
	if (o !== void 0 && (n.padding = o), Object.keys(n).length > 0) {
		t.embedOptions = n;
		return;
	}
	delete t.embedOptions;
}
function W(e) {
	"params" in e && "encoding" in e && e.params.forEach((t) => {
		"select" in t && (typeof t.select == "string" && ["interval", "point"].includes(t.select) && (t.select = { type: t.select }), !(typeof t.select != "object" || t.select === null || !("type" in t.select)) && t.select.type === "point" && !("encodings" in t.select) && d(t.select.encodings) && !("fields" in t.select) && d(t.select.fields) && (t.select.encodings = Object.keys(e.encoding)));
	});
}
var G = (e, t, n, r, i, a, o, s, c = "") => {
	let l = JSON.parse(e);
	c && (l.description = c), typeof l.height == "number" && l.height <= 0 && delete l.height, typeof l.width == "number" && l.width <= 0 && delete l.width;
	let u = z(l)?.embedOptions?.theme;
	if (l.config = r === "streamlit" || u === "streamlit" ? ce(l.config, a) : k(l.config, a), U(l), l.title) {
		let e = typeof l.title == "string" ? { text: l.title } : l.title;
		e.limit = e.limit ?? Math.max(o - 40, 0), l.title = e;
	}
	return n && s && s > 0 && (l.height = s), t && o && o > 0 && (l.width = o, "vconcat" in l && l.vconcat.forEach((e) => {
		typeof e != "object" || !e || "hconcat" in e || "vconcat" in e || "concat" in e || "facet" in e || "repeat" in e || (e.width = o);
	})), l.padding ||= {}, d(l.padding.bottom) && (l.padding.bottom = R), i.length > 0 && W(l), I(l, a), l;
}, he = (e, t, n, r, i) => {
	let a = v(), { id: o, formId: s, spec: c, data: l, datasets: u, vegaLiteTheme: d, selectionMode: f, alt: p = "" } = e, m = JSON.stringify(f), h = (0, F.useMemo)(() => f, [m]), g = (0, F.useMemo)(() => G(c, r, i, d, h, a, 0, 0, p), [
		c,
		r,
		i,
		d,
		h,
		a,
		p
	]), _ = "vconcat" in g || "hconcat" in g || "concat" in g, y = _ && r ? t : void 0, b = _ && i ? n : void 0, x = (0, F.useMemo)(() => {
		let e = { ...g };
		return r && delete e.width, i && delete e.height, JSON.stringify({
			spec: e,
			useContainerWidth: r,
			useContainerHeight: i,
			concatWidth: y,
			concatHeight: b
		});
	}, [
		g,
		r,
		i,
		y,
		b
	]);
	return {
		id: o,
		formId: s,
		vegaLiteTheme: d,
		spec: (0, F.useMemo)(() => G(c, r, i, d, h, a, t, n, p), [
			c,
			r,
			i,
			d,
			h,
			a,
			t,
			n,
			p
		]),
		selectionMode: h,
		data: l,
		datasets: u,
		useContainerWidth: r,
		alt: p,
		baseSpecKey: x
	};
}, K = { DATAFRAME_INDEX: "(index)" };
function ge(e) {
	return !e || e.dimensions.numDataRows === 0 ? null : Y(e);
}
function q(e) {
	let t = J(e);
	if (d(t)) return null;
	let n = {};
	for (let [e, r] of Object.entries(t)) n[e] = Y(r);
	return n;
}
function J(e) {
	if (e?.length === 0) return null;
	let t = {};
	return e.forEach((e) => {
		if (!e) return;
		let n = e.hasName ? e.name : null;
		t[n] = e.data;
	}), t;
}
function Y(e) {
	if (e.dimensions.numDataRows === 0) return [];
	let t = [], { numDataRows: n, numDataColumns: r, numIndexColumns: i } = e.dimensions, a = e.columnTypes[0] ?? void 0, o = a?.type === O.INDEX && (oe(a) || ae(a) || E(a));
	for (let a = 0; a < n; a++) {
		let n = {};
		if (o) {
			let { content: t } = e.getCell(a, 0);
			n[K.DATAFRAME_INDEX] = typeof t == "bigint" ? Number(t) : t;
		}
		for (let t = 0; t < r; t++) {
			let r = t + i, { content: o, contentType: s } = e.getCell(a, r);
			if ((o instanceof Date || typeof o == "number" && Number.isFinite(o)) && (ae(s) || E(s)) && !D(s)) {
				let t = new Date(o).getTimezoneOffset() * 60 * 1e3;
				n[e.columnNames[0][r]] = o.valueOf() + t;
			} else n[e.columnNames[0][r]] = typeof o == "bigint" ? Number(o) : o;
		}
		t.push(n);
	}
	return t;
}
var _e = 150, ve = _.getLogger("useVegaLiteSelections"), X = (t, r, i) => {
	let { id: a, formId: o, selectionMode: s } = t;
	return {
		maybeConfigureSelections: (0, F.useCallback)((t) => {
			s.forEach((c) => {
				t.addSignalListener(c, n(_e, (n, c) => {
					let l = t.getState({
						data: (e, t) => s.some((t) => `${t}_store` === e),
						recurse: !1
					});
					e(l) && r.setElementState(a, "viewState", l);
					let u = c;
					"vlPoint" in c && "or" in c.vlPoint && (u = c.vlPoint.or);
					let d = {
						id: a,
						formId: o
					}, p = JSON.parse(r.getStringValue(d) || "{}"), m = { selection: {
						...p?.selection,
						[n]: u || {}
					} };
					f(p, m) || r.setStringValue(d.id, JSON.stringify(m), {
						formId: d.formId,
						fragmentId: i,
						fromUser: !0
					});
				}));
			});
			let c = r.getElementState(a, "viewState");
			if (e(c)) try {
				return t.setState(c);
			} catch (e) {
				ve.warn("Failed to restore view state", e);
			}
			return t;
		}, [
			a,
			s,
			r,
			o,
			i
		]),
		onFormCleared: (0, F.useCallback)(() => {
			let e = { selection: {} };
			s.forEach((t) => {
				e.selection[t] = {};
			});
			let t = {
				id: a,
				formId: o
			}, n = r.getStringValue(t), c = n ? JSON.parse(n) : e;
			f(c, e) || r.setStringValue(t.id, JSON.stringify(e), {
				formId: t.formId,
				fragmentId: i,
				fromUser: !0
			});
		}, [
			a,
			o,
			i,
			s,
			r
		])
	};
}, Z = "source", Q = _.getLogger("useVegaEmbed");
function ye(e, t, n) {
	let r = (0, F.useRef)(null), i = (0, F.useRef)(null), a = (0, F.useRef)(Z), o = (0, F.useRef)(null), s = (0, F.useRef)([]), c = (0, F.useRef)(null), l = (0, F.useRef)([]), u = (0, F.useRef)(0), [d, f] = (0, F.useState)(!1), { maybeConfigureSelections: p, onFormCleared: m } = X(e, t, n);
	w({
		widgetMgr: t,
		element: e,
		onFormCleared: m
	});
	let { data: h, datasets: g } = e;
	c.current = h, l.current = g, (0, F.useEffect)(() => {
		r.current === null && (o.current = h, s.current = g);
	}, [h, g]);
	let _ = (0, F.useCallback)(() => {
		u.current += 1, i.current && i.current(), i.current = null, r.current = null;
	}, []), v = (0, F.useCallback)((e, t, n, r) => {
		if (!r || r.dimensions.numDataRows === 0) {
			try {
				e.remove(t, N);
			} catch {}
			return;
		}
		if (!n || n.dimensions.numDataRows === 0) {
			e.insert(t, Y(r));
			return;
		}
		r.hash !== n.hash && (e.data(t, Y(r)), Q.info(`Replaced the ${t} dataset in Vega view.`));
	}, []), y = (0, F.useCallback)((e, t, n) => {
		let r = o.current, i = s.current;
		(r || t) && v(e, a.current, r, t);
		let c = J(i) ?? {}, l = J(n) ?? {};
		for (let [t, n] of Object.entries(l)) {
			let r = t || a.current, i = c[r];
			v(e, r, i, n);
		}
		for (let t of Object.keys(c)) !Object.hasOwn(l, t) && t !== a.current && v(e, t, null, null);
	}, [v]);
	return {
		createView: (0, F.useCallback)(async (e, t) => {
			if (e.current === null) throw Error("Element missing.");
			let n = e.current;
			_();
			let d = u.current;
			f(!0);
			try {
				let e = {
					ast: !0,
					expr: M,
					tooltip: { disableDefaultStyle: !0 },
					defaultStyle: !1,
					actions: !1
				}, f = c.current, m = l.current, h = q(m) ?? {}, g = Object.keys(h), _;
				if (typeof t == "string") _ = t;
				else {
					let e = { ...t };
					g.length > 0 && (e.datasets = {
						...e.datasets,
						...h
					}), _ = e;
				}
				let { vgSpec: v, view: b, finalize: x } = await j(n, _, e);
				if (d !== u.current) return x(), null;
				let S = p(b);
				r.current = S;
				let ee = A(n);
				i.current = () => {
					ee(), x();
				};
				let C = () => d !== u.current || r.current !== S;
				if (g.length === 1) {
					let [e] = g;
					a.current = e;
				} else g.length === 0 && v.data && (a.current = Z);
				let w = ge(f);
				if (w && S.insert(a.current, w), typeof t == "string") for (let [e, t] of Object.entries(h)) S.insert(e || a.current, t);
				if (await S.runAsync(), C() || (await S.resize().runAsync(), C())) return r.current;
				for (o.current = f, s.current = m; c.current !== o.current || l.current !== s.current;) {
					if (C()) return r.current;
					let e = c.current, t = l.current;
					if (y(S, e, t), await S.resize().runAsync(), C()) return r.current;
					o.current = e, s.current = t;
				}
				return S;
			} finally {
				d === u.current && f(!1);
			}
		}, [
			_,
			p,
			y
		]),
		updateView: (0, F.useCallback)(async (e, t) => r.current === null || d ? null : (y(r.current, e, t), await r.current.resize().runAsync(), o.current = e, s.current = t, r.current), [y, d]),
		finalizeView: _,
		resizeView: (0, F.useCallback)(async (e, t) => {
			if (r.current === null || d) return !1;
			try {
				return e > 0 && r.current.width(e), t > 0 && r.current.height(t), await r.current.resize().runAsync(), !0;
			} catch (e) {
				return Q.warn("Failed to resize Vega view:", e), !1;
			}
		}, [d]),
		exportToPng: (0, F.useCallback)(async () => {
			if (r.current === null || d) return null;
			try {
				let e = Math.max(2, window.devicePixelRatio || 1);
				return await r.current.toImageURL("png", e);
			} catch (e) {
				return Q.warn("Failed to export Vega view as PNG:", e), null;
			}
		}, [d]),
		isViewReady: r.current !== null && !d
	};
}
function be(e) {
	try {
		let t = typeof e == "string" ? JSON.parse(e) : e;
		return !!(t.facet || t.encoding?.row || t.encoding?.column || t.encoding?.facet);
	} catch {
		return !1;
	}
}
function xe(e) {
	try {
		let t = typeof e == "string" ? JSON.parse(e) : e;
		if (typeof t != "object" || !t || Array.isArray(t)) return !1;
		let { vconcat: n } = t;
		return Array.isArray(n) ? n.some((e) => typeof e == "object" && !!e && ("hconcat" in e || "vconcat" in e || "concat" in e || "layer" in e || "facet" in e || "repeat" in e)) : !1;
	} catch {
		return !1;
	}
}
function Se(e) {
	return e.map((e) => ({
		hasName: e.hasName,
		name: e.name,
		data: new ie(e.data)
	}));
}
var Ce = ne(({ disableFullscreenMode: e, element: n, elementHash: r, fragmentId: s, widgetMgr: d, widthConfig: f, heightConfig: m }) => {
	let _ = (0, F.useMemo)(() => ({
		data: n.data ? new ie(n.data) : null,
		spec: n.spec,
		datasets: Se(n.datasets),
		useContainerWidth: n.useContainerWidth,
		vegaLiteTheme: n.theme,
		id: n.id,
		selectionMode: n.selectionMode,
		formId: n.formId,
		alt: n.alt ?? ""
	}), [r, n]), [v, b] = (0, F.useState)(!1), [x, S] = (0, F.useState)(!1), { expanded: C, height: w, width: te, expand: ne, collapse: E } = t(re), { width: ae, height: D, elementRef: O } = h([v]), oe = i(f) || _.useContainerWidth, k = p(m), A = be(_.spec), ce = xe(_.spec), j = A && !C ? !1 : oe, M = A ? C ? te ?? 0 : 0 : ae, N = (C ? w : D) ?? 0, P = C && !ce ? !0 : j, I = C ? !0 : k, L = he(_, M, N, P, I), { createView: R, updateView: z, finalizeView: B, resizeView: V, exportToPng: H, isViewReady: U } = ye(L, d, s), { data: W, datasets: G, spec: K, baseSpecKey: ge } = L, { isCopied: q, copyToClipboard: J } = c(), Y = a(), _e = (0, F.useCallback)(() => {
		(async () => {
			let e = await H();
			e && de(e, "png");
		})();
	}, [H]), ve = (0, F.useCallback)(() => {
		J(typeof K == "string" ? K : JSON.stringify(K, null, 2));
	}, [J, K]), X = (0, F.useRef)(null), Z = (0, F.useRef)(K);
	Z.current = K;
	let Q = (0, F.useRef)({
		width: M,
		height: N
	});
	Q.current = {
		width: M,
		height: N
	};
	let Ce = (!(j || C) || M > 0) && (!(k || C) || N > 0);
	(0, F.useLayoutEffect)(() => (O.current !== null && Ce && (X.current = {
		width: Q.current.width,
		height: Q.current.height
	}, R(O, Z.current)), () => {
		B();
	}), [
		R,
		B,
		ge,
		v,
		O,
		Ce
	]);
	let we = P || I;
	(0, F.useEffect)(() => {
		if (!U || !we) return;
		let e = X.current, t = P && e?.width !== M, n = I && e?.height !== N;
		if (!t && !n) return;
		let r = !1;
		return (async () => await V(P ? M : 0, I ? N : 0) && !r && (X.current = {
			width: M,
			height: N
		}))(), () => {
			r = !0;
		};
	}, [
		U,
		we,
		P,
		I,
		V,
		M,
		N
	]), (0, F.useEffect)(() => {
		z(W, G);
	}, [W, G]), (0, F.useEffect)(() => {
		W || G?.[0]?.data ? S(!0) : S(!1);
	}, [W, G]);
	let $ = _.alt?.trim() || void 0;
	if (v) {
		let e = w ?? (D > 0 ? D : void 0);
		return /* @__PURE__ */ T.jsx(me, {
			data: W ?? G[0]?.data,
			height: e,
			width: f ?? void 0,
			alt: $,
			customToolbarActions: [/* @__PURE__ */ T.jsx(l, {
				label: "Show chart",
				icon: pe,
				onClick: () => {
					b(!1);
				},
				labelContext: $
			}, "show-chart")]
		});
	}
	return /* @__PURE__ */ T.jsxs(u, {
		height: k ? C ? w : "100%" : w,
		useContainerWidth: C ? !0 : j,
		children: [
			/* @__PURE__ */ T.jsxs(g, {
				target: u,
				isFullScreen: C,
				onExpand: ne,
				onCollapse: E,
				disableFullscreenMode: e,
				labelContext: $,
				children: [
					x && /* @__PURE__ */ T.jsx(l, {
						label: "Show data",
						icon: fe,
						onClick: () => {
							b(!0);
						},
						labelContext: $
					}),
					U && /* @__PURE__ */ T.jsx(l, {
						label: "Download as PNG",
						icon: ue,
						onClick: _e,
						labelContext: $
					}),
					Y && /* @__PURE__ */ T.jsx(l, {
						label: q ? "Copied!" : "Copy Vega-Lite spec",
						icon: q ? o : ee,
						onClick: ve,
						labelContext: q ? void 0 : $
					})
				]
			}),
			/* @__PURE__ */ T.jsx(y, { styles: se }),
			/* @__PURE__ */ T.jsx(le, {
				"data-testid": "stVegaLiteChart",
				className: "stVegaLiteChart",
				useContainerWidth: j,
				useContainerHeight: k,
				ref: O
			})
		]
	});
}), we = (0, F.memo)(Ce);
//#endregion
export { we as default, xe as hasNestedComposition, be as isFacetChart };

//# sourceMappingURL=ArrowVegaLiteChart-DESdGa-n-CEaS8POZ.js.map