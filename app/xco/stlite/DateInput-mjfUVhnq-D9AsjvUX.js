import { Ha as e, Jn as t, Ko as n, Ma as r, O as i, Qn as a, Ta as o, Ur as s, Wo as ee, Xo as c, Zn as l, ds as u, er as d, ir as f, ms as p, ur as te, wi as m, wr as h, za as g } from "./index-B1FrxEMd-BsPMjC5n.js";
import { t as ne } from "./WidgetLabel--oJQrsAd-IbrOPlTn.js";
import { t as _ } from "./WidgetLabelHelpIcon-CWnOrY3T-BtbNCfjY.js";
import { t as v } from "./useBasicWidgetState-DVivDFu--yiQ4kKRs.js";
import { t as re } from "./Cancel.esm-CtMNidjq-CXB-pKHk.js";
import { t as y } from "./ErrorOutline.esm-BTDiocCk-BcENiBMZ.js";
import { t as b } from "./DateField-BaLw2J5b-CSjqjxpp.js";
import { A as ie, B as x, C as ae, D as oe, E as se, F as ce, G as le, H as S, I as ue, J as C, K as de, M as w, N as fe, O as pe, P as T, R as me, S as he, T as ge, U as E, V as _e, W as ve, _ as ye, a as be, b as D, c as O, d as xe, f as k, g as Se, h as Ce, i as we, j as Te, k as A, l as Ee, m as j, n as De, o as M, p as Oe, q as N, r as ke, s as Ae, u as je, v as Me, w as P, x as Ne, y as Pe, z as Fe } from "./ReorderedSegments-gjZpUY_f-DojNzhSR.js";
//#region ../react/build/DateInput-mjfUVhnq.js
var F = /* @__PURE__ */ p(u(), 1), I = "stDateInputQuickSelectPopover";
function Ie({ seedAnchor: e, onAnchorSelect: t }) {
	let n = (0, F.useContext)(M), r = n?.anchorDate ?? null, i = n?.setAnchorDate, a = (0, F.useRef)(null), o = (0, F.useRef)(null);
	return (0, F.useEffect)(() => {
		if (e && !D(e, o.current)) {
			o.current = e, a.current = e, i?.(e);
			return;
		}
		e || (o.current = null, a.current && i?.(null)), r && !a.current && t(r), a.current = r;
	}, [
		r,
		i,
		t,
		e
	]), null;
}
function L(e) {
	return e.filter((e) => e !== null);
}
function Le(e, t) {
	return e.length === t.length && e.every((e, n) => D(e, t[n]));
}
function Re(e) {
	let t = e?.querySelectorAll("[data-range-field]");
	if (!t) return !1;
	for (let e of t) {
		let t = e.querySelectorAll("[role=\"spinbutton\"]"), n = e.querySelectorAll("[role=\"spinbutton\"][data-placeholder=\"true\"]");
		if (n.length > 0 && n.length < t.length) return !0;
	}
	return !1;
}
function ze({ startValue: e, endValue: r, onChange: a, minDate: o, maxDate: u, format: f, disabled: p, clearable: ne, label: _, error: v, locale: le, isInSidebar: ue, enableQuickSelect: C, focusedValue: E, onFocusChange: O, onValidate: k, onClose: Se, formCommit: Ce, formResetKey: A }) {
	let M = ee(), N = (0, F.useId)(), Ae = `${N}-error`, ze = `${N}-calendar`, R = `${N}-calendar-desc`, z = (0, F.useRef)(null), Be = (0, F.useMemo)(() => De(le), [le]), B = (0, F.useMemo)(() => {
		let e = Oe();
		return u ? e.filter((e) => e.start.compare(u) <= 0).map((e) => e.end.compare(u) > 0 ? {
			...e,
			end: u
		} : e) : e;
	}, [u]), V = (0, F.useRef)(null), Ve = (0, F.useRef)(null), H = (0, F.useRef)(!1), U = (0, F.useRef)(!1), He = (0, F.useRef)(!1), [W, Ue] = (0, F.useState)(!1), We = (0, F.useRef)(!1);
	We.current = W;
	let Ge = (0, F.useRef)(null), Ke = (0, F.useRef)(null), G = (0, F.useRef)(!1), K = (0, F.useRef)(null), [q, J] = (0, F.useState)(e), [Y, X] = (0, F.useState)(r), [qe, Je] = (0, F.useState)(e), [Ye, Xe] = (0, F.useState)(r);
	(qe !== e || Ye !== r) && (K.current !== null && r === null && D(e, K.current) || (G.current = !1, K.current = null)), qe !== e && (Je(e), J(e)), Ye !== r && (Xe(r), X(r));
	let [Ze, Qe] = (0, F.useState)(A);
	Ze !== A && (Qe(A), J(e), X(r), G.current = !1, K.current = null, Ge.current = null, He.current = !!z.current?.contains(document.activeElement));
	let $e = (0, F.useMemo)(() => !q || !Y ? null : B.find((e) => D(e.start, q) && D(e.end, Y)) ?? null, [
		q,
		Y,
		B
	]), et = $e?.label ?? "Select...", Z = (0, F.useRef)(q);
	Z.current = q;
	let Q = (0, F.useRef)(Y);
	Q.current = Y;
	let tt = (0, F.useRef)(a);
	tt.current = a;
	let nt = (0, F.useRef)(Se);
	nt.current = Se;
	let [$, rt] = (0, F.useState)(!1), it = (0, F.useRef)($);
	(0, F.useEffect)(() => {
		if (it.current && !$) {
			if (G.current = !1, K.current = null, H.current) H.current = !1;
			else if (Re(z.current)) J(e), X(r), nt.current(!0);
			else {
				let t = z.current?.querySelectorAll("[role=\"spinbutton\"]"), n = t && t.length > 0 && Array.from(t).every((e) => e.matches("[data-placeholder=\"true\"]")), i;
				i = n ? [] : L([Z.current, Q.current]);
				let a = L([e, r]);
				Le(i, a) || tt.current(i);
			}
		}
		it.current = $;
	}, [
		$,
		e,
		r
	]), (0, F.useEffect)(() => {
		He.current && (He.current = !1, U.current = !0, z.current?.querySelector("[data-type]:not([data-type=\"literal\"])")?.focus(), U.current = !1);
	}, [A]), (0, F.useEffect)(() => {
		if (!W || !$) return;
		let e = requestAnimationFrame(() => {
			Ke.current?.querySelector("[role=\"grid\"] [tabindex=\"0\"]")?.focus();
		});
		return () => cancelAnimationFrame(e);
	}, [W, $]);
	let at = (0, F.useMemo)(() => {
		let e = {
			open: $,
			placement: "bottom-start",
			offsetPx: m(M.spacing.twoXS)
		};
		if (!ue || typeof document > "u") return e;
		let t = document.documentElement;
		return {
			...e,
			flipOptions: { boundary: t },
			shiftOptions: {
				boundary: t,
				padding: 8
			}
		};
	}, [
		$,
		M.spacing.twoXS,
		ue
	]), { refs: ot, floatingStyles: st } = n(at), ct = (0, F.useCallback)(() => {
		if (U.current = !0, We.current && Ge.current) Ge.current.focus();
		else {
			let e = z.current?.querySelectorAll("[role=\"spinbutton\"]"), t = e ? Array.from(e).at(-1) : void 0;
			t ? t.focus() : z.current?.focus();
		}
		requestAnimationFrame(() => {
			U.current = !1;
		});
	}, []), { setFloatingRef: lt, setReferenceRef: ut } = c({
		isOpen: $,
		onClose: () => {
			if (rt(!1), Ue(!1), Ce && !Re(z.current)) {
				let t = L([Z.current, Q.current]);
				Le(t, L([e, r])) || Ce(t);
			}
		},
		floatingSetFn: ot.setFloating,
		referenceSetFn: ot.setReference,
		restoreFocusFn: ct,
		excludeSelectors: [`.${se}`, `.${I}`],
		excludeEscape: !0
	}), dt = (0, F.useCallback)((e) => {
		Ke.current = e, lt(e);
	}, [lt]), ft = (0, F.useCallback)((e) => {
		z.current = e, ut(e);
	}, [ut]), [pt, mt] = (0, F.useState)(!1), ht = (0, F.useRef)(null), { setFloatingRef: gt, setReferenceRef: _t } = c({
		isOpen: pt,
		onClose: () => mt(!1),
		floatingSetFn: me
	}), vt = (0, F.useCallback)((e) => {
		ht.current = e, _t(e);
	}, [_t]), yt = (0, F.useCallback)(() => {
		U.current || p || rt(!0);
	}, [p]), bt = (0, F.useCallback)((e) => {
		Ve.current?.contains(e.target) || (Ue(!1), yt());
	}, [yt]), xt = (0, F.useCallback)((e, t) => {
		k((e && j(e, o, u) ? e : null) ?? (t && j(t, o, u) ? t : null));
	}, [
		o,
		u,
		k
	]), St = (0, F.useCallback)((e) => {
		J(e), e || X(null), xt(e, e ? Q.current : null), e && O(e);
	}, [O, xt]), Ct = (0, F.useCallback)((e) => {
		e && !Z.current || (X(e), xt(Z.current, e), e && O(e));
	}, [O, xt]), wt = (0, F.useMemo)(() => q && Y && q.compare(Y) <= 0 ? {
		start: q,
		end: Y
	} : null, [q, Y]), Tt = (0, F.useCallback)((e) => {
		if (!H.current) {
			if (D(e.start, e.end)) {
				if (Q.current) {
					G.current = !0, K.current = e.start, J(e.start), X(null), a([e.start]);
					return;
				}
				if (G.current && Z.current) {
					let t = Z.current;
					G.current = !1, K.current = null;
					let [n, r] = t.compare(e.start) <= 0 ? [t, e.start] : [e.start, t];
					J(n), X(r), a([n, r]), H.current = !0, rt(!1), ct(), Ue(!1);
					return;
				}
			}
			G.current = !1, K.current = null, J(e.start), X(e.end), a([e.start, e.end]), H.current = !0, rt(!1), ct(), Ue(!1);
		}
	}, [a, ct]), Et = (0, F.useCallback)((e) => {
		if (e.altKey && e.key === "ArrowDown") {
			e.preventDefault(), Ge.current = e.target, $ || rt(!0), Ue(!0);
			return;
		}
		if (e.key !== "Tab" || !$) return;
		let t = z.current;
		if (!t) return;
		let n = t.querySelectorAll("[role=\"spinbutton\"]"), r = Array.from(n);
		(!e.shiftKey && e.target === r.at(-1) || e.shiftKey && e.target === r[0]) && rt(!1);
	}, [$]), Dt = (0, F.useCallback)((e) => {
		if (e.key !== "Tab") return;
		if (!We.current) {
			let t = ht.current;
			if (!e.shiftKey && t && !t.contains(e.target)) {
				e.preventDefault(), t.focus();
				return;
			}
			e.preventDefault(), rt(!1), ct();
			return;
		}
		e.preventDefault();
		let t = Ke.current;
		if (!t) return;
		let n = Array.from(t.querySelectorAll("button:not([tabindex=\"-1\"]):not([disabled]), [tabindex=\"0\"]"));
		if (n.length === 0) return;
		let r = n.indexOf(document.activeElement), i;
		i = e.shiftKey ? r <= 0 ? n.length - 1 : r - 1 : r >= n.length - 1 ? 0 : r + 1, n[i].focus();
	}, [ct]), Ot = (0, F.useCallback)((e) => {
		G.current && D(Z.current, e) || (G.current = !0, K.current = e, J(e), X(null), a([e]));
	}, [a]), kt = (0, F.useCallback)(() => {
		G.current = !1, K.current = null, J(null), X(null), a([]);
	}, [a]), At = (0, F.useCallback)((e) => {
		let t = B.find((t) => t.id === e);
		t && (G.current = !1, K.current = null, J(t.start), X(t.end), a([t.start, t.end]), mt(!1));
	}, [B, a]), jt = (0, F.useCallback)((e) => {
		if (e === "all") return;
		let t = [...e][0];
		t ? At(String(t)) : (kt(), mt(!1));
	}, [kt, At]), Mt = (0, F.useCallback)((e) => {
		e.key === "Tab" && (e.preventDefault(), e.stopPropagation(), mt(!1), ht.current?.focus());
	}, []), Nt = (0, F.useCallback)((e, t, n) => (r) => {
		if (p || !n && !Z.current) return;
		let i = r.clipboardData.getData("text").trim(), s = r.target, ee = s.getAttribute("role") === "spinbutton" ? s.getAttribute("data-type") : null, c = Pe(i, f, {
			allowRangePaste: n,
			segmentType: ee
		});
		if (!c) return;
		if (r.preventDefault(), c.kind === "range") {
			G.current = !1, K.current = null;
			let [e, t] = c.start.compare(c.end) <= 0 ? [c.start, c.end] : [c.end, c.start];
			J(e), X(t), a([e, t]);
			return;
		}
		if (c.kind === "date") {
			t(c.date), a(L([n ? c.date : Z.current, n ? Q.current : c.date]));
			return;
		}
		if (!fe(c.segmentType, c.value)) return;
		let l = e ?? (n ? o : Z.current ?? o), u = Ee(l, c);
		u && (t(u), a(L([n ? u : Z.current, n ? Q.current : u])));
	}, [
		p,
		f,
		o,
		a
	]), Pt = (0, F.useMemo)(() => Nt(q, J, !0), [Nt, q]), Ft = (0, F.useMemo)(() => Nt(Y, X, !1), [Nt, Y]), It = (0, F.useCallback)((t) => {
		if (t.currentTarget.contains(t.relatedTarget) || We.current || Re(z.current)) return;
		let n = L([Z.current, Q.current]);
		Le(n, L([e, r])) || (tt.current(n), Ce?.(n));
	}, [
		Ce,
		e,
		r
	]), Lt = q !== null || Y !== null;
	return /* @__PURE__ */ g.jsxs(ve, { children: [/* @__PURE__ */ g.jsxs(xe, {
		ref: ft,
		"aria-keyshortcuts": "Alt+ArrowDown",
		"aria-haspopup": "dialog",
		"aria-expanded": W,
		"aria-controls": W ? ze : void 0,
		"data-testid": "stDateInputField",
		"data-disabled": p || void 0,
		"data-has-error": v ? "" : void 0,
		onFocus: yt,
		onBlur: It,
		onClickCapture: bt,
		onKeyDown: Et,
		children: [
			/* @__PURE__ */ g.jsx(ie, {
				"data-testid": "stDateInputFieldsScroller",
				children: /* @__PURE__ */ g.jsxs(i, {
					locale: "en-US",
					children: [
						/* @__PURE__ */ g.jsx(pe, {
							$isRange: !0,
							"data-range-field": "start",
							children: /* @__PURE__ */ g.jsx("div", {
								onPaste: Pt,
								children: /* @__PURE__ */ g.jsx(b, {
									"aria-label": `${_} start date`,
									"aria-describedby": v ? Ae : void 0,
									isInvalid: !!v,
									value: q,
									onChange: St,
									minValue: o,
									maxValue: u,
									shouldForceLeadingZeros: !0,
									isDisabled: p,
									children: /* @__PURE__ */ g.jsx(be, {
										format: f,
										isRange: !0
									})
								}, A)
							})
						}),
						/* @__PURE__ */ g.jsx(je, {
							"aria-hidden": "true",
							children: "–"
						}),
						/* @__PURE__ */ g.jsx(pe, {
							$isRange: !0,
							"data-range-field": "end",
							children: /* @__PURE__ */ g.jsx("div", {
								onPaste: Ft,
								children: /* @__PURE__ */ g.jsx(b, {
									"aria-label": `${_} end date`,
									"aria-describedby": v ? Ae : void 0,
									isInvalid: !!v,
									value: Y,
									onChange: Ct,
									minValue: o,
									maxValue: u,
									shouldForceLeadingZeros: !0,
									isDisabled: p,
									children: /* @__PURE__ */ g.jsx(be, {
										format: f,
										isRange: !0
									})
								}, A)
							})
						})
					]
				})
			}),
			/* @__PURE__ */ g.jsxs(Te, { children: [v && /* @__PURE__ */ g.jsx(T, {
				"data-testid": "stDateInputError",
				children: /* @__PURE__ */ g.jsx(s, {
					content: /* @__PURE__ */ g.jsx(h, {
						source: v,
						allowHTML: !1
					}),
					placement: te.TOP_RIGHT,
					error: !0,
					children: /* @__PURE__ */ g.jsx(l, {
						content: y,
						size: "base"
					})
				})
			}), ne && Lt && /* @__PURE__ */ g.jsx(Fe, {
				ref: Ve,
				type: "button",
				onClick: kt,
				"aria-label": "Clear dates",
				"data-testid": "stDateInputClearButton",
				tabIndex: -1,
				onMouseDown: (e) => e.preventDefault(),
				children: /* @__PURE__ */ g.jsx(l, {
					content: re,
					size: "base"
				})
			})] }),
			v && /* @__PURE__ */ g.jsx(oe, {
				id: Ae,
				role: "alert",
				children: v.replaceAll("**", "")
			})
		]
	}), $ && /* @__PURE__ */ g.jsx(t, {
		id: "stFloatingOverlayPortal",
		children: /* @__PURE__ */ g.jsxs(ge, {
			id: ze,
			ref: dt,
			style: st,
			"data-testid": "stDateInputCalendar",
			onKeyDown: Dt,
			role: W ? "dialog" : void 0,
			"aria-modal": W ? "true" : void 0,
			"aria-label": W ? "Choose date range" : void 0,
			"aria-describedby": W ? R : void 0,
			children: [
				W && /* @__PURE__ */ g.jsx(oe, {
					id: R,
					children: "Use arrow keys to navigate dates. Enter to select. Escape to close."
				}),
				/* @__PURE__ */ g.jsx(i, {
					locale: Be,
					children: /* @__PURE__ */ g.jsxs(P, {
						"aria-label": "Choose date range",
						value: wt,
						onChange: Tt,
						commitBehavior: "reset",
						minValue: o,
						maxValue: u,
						focusedValue: E ?? void 0,
						onFocusChange: O,
						children: [
							/* @__PURE__ */ g.jsx(Ie, {
								seedAnchor: Y === null ? q : null,
								onAnchorSelect: Ot
							}),
							/* @__PURE__ */ g.jsx(ke, {}),
							/* @__PURE__ */ g.jsxs(_e, {
								weekdayStyle: "narrow",
								children: [/* @__PURE__ */ g.jsx(S, { children: (e) => /* @__PURE__ */ g.jsx(ae, { children: e }) }), /* @__PURE__ */ g.jsx(Ne, { children: (e) => /* @__PURE__ */ g.jsx(Me, {
									date: e,
									$isRangeMode: !0
								}) })]
							})
						]
					})
				}),
				C && B.length > 0 && /* @__PURE__ */ g.jsxs(w, {
					ref: V,
					"data-testid": "stDateInputQuickSelect",
					children: [
						/* @__PURE__ */ g.jsx(ce, { children: "Date range" }),
						/* @__PURE__ */ g.jsxs(de, {
							ref: vt,
							$isPlaceholder: !$e,
							"aria-label": "Quick select a date range",
							"aria-expanded": pt,
							"aria-haspopup": "listbox",
							onPress: () => mt((e) => !e),
							children: [et, /* @__PURE__ */ g.jsx(we, { children: /* @__PURE__ */ g.jsx(d, { size: M.iconSizes.base }) })]
						}),
						/* @__PURE__ */ g.jsx(x, {
							className: I,
							ref: gt,
							triggerRef: ht,
							isOpen: pt,
							onOpenChange: mt,
							isNonModal: !0,
							placement: "bottom end",
							"data-testid": "stDateInputQuickSelectPopover",
							children: /* @__PURE__ */ g.jsx("div", {
								onKeyDown: Mt,
								children: /* @__PURE__ */ g.jsx(he, {
									"aria-label": "Quick select a date range",
									selectionMode: "single",
									disallowEmptySelection: !ne,
									selectedKeys: $e ? [$e.id] : [],
									onSelectionChange: jt,
									autoFocus: !0,
									children: B.map((e) => /* @__PURE__ */ g.jsx(ye, {
										id: e.id,
										children: e.label
									}, e.id))
								})
							})
						})
					]
				})
			]
		})
	})] });
}
var R = (0, F.memo)(ze);
function z({ value: e, onChange: a, minDate: o, maxDate: u, format: d, disabled: f, clearable: p, label: ne, error: _, locale: v, isInSidebar: x, focusedValue: ce, onFocusChange: le, onValidate: ue, onClose: C, formCommit: de, formResetKey: w }) {
	let me = ee(), he = (0, F.useId)(), E = `${he}-error`, ye = `${he}-calendar`, O = `${he}-calendar-desc`, k = (0, F.useRef)(null), Se = (0, F.useRef)(null), Ce = (0, F.useMemo)(() => De(v), [v]), we = (0, F.useRef)(!1), A = (0, F.useRef)(!1), [j, M] = (0, F.useState)(!1), Oe = (0, F.useRef)(!1);
	Oe.current = j;
	let N = (0, F.useRef)(null), je = (0, F.useRef)(null), [P, I] = (0, F.useState)(e), [Ie, L] = (0, F.useState)(e);
	Ie !== e && (L(e), I(e));
	let Le = (0, F.useRef)(!1), [Re, ze] = (0, F.useState)(w);
	Re !== w && (ze(w), I(e), N.current = null, Le.current = !!k.current?.contains(document.activeElement));
	let R = (0, F.useRef)(P);
	R.current = P;
	let z = (0, F.useRef)(C);
	z.current = C;
	let Be = (0, F.useRef)(a);
	Be.current = a;
	let [B, V] = (0, F.useState)(!1), Ve = (0, F.useRef)(B);
	(0, F.useEffect)(() => {
		if (Ve.current && !B) {
			if (A.current) A.current = !1;
			else {
				let t = k.current?.querySelectorAll("[role=\"spinbutton\"]"), n = k.current?.querySelectorAll("[role=\"spinbutton\"][data-placeholder=\"true\"]"), r = t && n && n.length > 0 && n.length < t.length, i = t && t.length > 0 && n?.length === t.length;
				if (r || i && !p) I(e), z.current(!0);
				else {
					let t = i ? null : R.current;
					D(t, e) || Be.current(t);
				}
			}
		}
		Ve.current = B;
	}, [
		B,
		e,
		p
	]), (0, F.useEffect)(() => {
		Le.current && (Le.current = !1, we.current = !0, k.current?.querySelector("[data-type]:not([data-type=\"literal\"])")?.focus(), we.current = !1);
	}, [w]), (0, F.useEffect)(() => {
		if (!j || !B) return;
		let e = requestAnimationFrame(() => {
			je.current?.querySelector("[role=\"grid\"] [tabindex=\"0\"]")?.focus();
		});
		return () => cancelAnimationFrame(e);
	}, [j, B]);
	let H = (0, F.useMemo)(() => {
		let e = {
			open: B,
			placement: "bottom-start",
			offsetPx: m(me.spacing.twoXS)
		};
		if (!x || typeof document > "u") return e;
		let t = document.documentElement;
		return {
			...e,
			flipOptions: { boundary: t },
			shiftOptions: {
				boundary: t,
				padding: 8
			}
		};
	}, [
		B,
		me.spacing.twoXS,
		x
	]), { refs: U, floatingStyles: He } = n(H), W = (0, F.useCallback)(() => {
		if (we.current = !0, Oe.current && N.current) N.current.focus();
		else {
			let e = k.current?.querySelectorAll("[role=\"spinbutton\"]"), t = e ? Array.from(e).at(-1) : void 0;
			t ? t.focus() : k.current?.focus();
		}
		requestAnimationFrame(() => {
			we.current = !1;
		});
	}, []), { setFloatingRef: Ue, setReferenceRef: We } = c({
		isOpen: B,
		onClose: () => {
			if (V(!1), M(!1), de) {
				let t = k.current?.querySelectorAll("[role=\"spinbutton\"]"), n = k.current?.querySelectorAll("[role=\"spinbutton\"][data-placeholder=\"true\"]"), r = t && n && n.length > 0 && n.length < t.length, i = t && t.length > 0 && n?.length === t.length;
				if (!(r || i && !p)) {
					let t = i ? null : R.current;
					D(t, e) || de(t);
				}
			}
		},
		floatingSetFn: U.setFloating,
		referenceSetFn: U.setReference,
		restoreFocusFn: W,
		excludeSelectors: [`.${se}`],
		excludeEscape: !0
	}), Ge = (0, F.useCallback)((e) => {
		je.current = e, Ue(e);
	}, [Ue]), Ke = (0, F.useCallback)((e) => {
		k.current = e, We(e);
	}, [We]), G = (0, F.useCallback)((e) => {
		I(e), ue(e), e && le(e);
	}, [le, ue]), K = (0, F.useCallback)((e) => {
		I(e), a(e), A.current = !0, V(!1), W(), M(!1);
	}, [a, W]), q = (0, F.useCallback)(() => {
		we.current || f || V(!0);
	}, [f]), J = (0, F.useCallback)((e) => {
		Se.current?.contains(e.target) || (M(!1), q());
	}, [q]), Y = (0, F.useCallback)(() => {
		I(null), a(null);
	}, [a]), X = (0, F.useCallback)((e) => {
		if (f) return;
		let t = e.clipboardData.getData("text").trim(), n = e.target, r = n.getAttribute("role") === "spinbutton" ? n.getAttribute("data-type") : null, i = Pe(t, d, { segmentType: r });
		if (!i) return;
		if (e.preventDefault(), i.kind === "date") {
			I(i.date), a(i.date);
			return;
		}
		if (i.kind !== "partial" || !fe(i.segmentType, i.value)) return;
		let s = Ee(P ?? o, i);
		s && (I(s), a(s));
	}, [
		f,
		d,
		a,
		P,
		o
	]), qe = (0, F.useCallback)((e) => {
		if (e.altKey && e.key === "ArrowDown") {
			e.preventDefault(), N.current = e.target, B || V(!0), M(!0);
			return;
		}
		if (e.key !== "Tab" || !B) return;
		let t = k.current;
		if (!t) return;
		let n = t.querySelectorAll("[role=\"spinbutton\"]"), r = Array.from(n);
		(!e.shiftKey && e.target === r.at(-1) || e.shiftKey && e.target === r[0]) && V(!1);
	}, [B]), Je = (0, F.useCallback)((e) => {
		if (e.key !== "Tab") return;
		if (e.preventDefault(), !Oe.current) {
			V(!1), W();
			return;
		}
		let t = je.current;
		if (!t) return;
		let n = Array.from(t.querySelectorAll("button:not([tabindex=\"-1\"]):not([disabled]), [tabindex=\"0\"]"));
		if (n.length === 0) return;
		let r = n.indexOf(document.activeElement), i;
		i = e.shiftKey ? r <= 0 ? n.length - 1 : r - 1 : r >= n.length - 1 ? 0 : r + 1, n[i].focus();
	}, [W]), Ye = (0, F.useCallback)((t) => {
		if (t.currentTarget.contains(t.relatedTarget) || Oe.current) return;
		let n = k.current?.querySelectorAll("[role=\"spinbutton\"]"), r = k.current?.querySelectorAll("[role=\"spinbutton\"][data-placeholder=\"true\"]");
		if (n && r && (r.length > 0 && r.length < n.length || r.length === n.length && !p)) return;
		let i = R.current;
		D(i, e) || (Be.current(i), de?.(i));
	}, [
		de,
		e,
		p
	]);
	return /* @__PURE__ */ g.jsxs(ve, { children: [/* @__PURE__ */ g.jsxs(xe, {
		ref: Ke,
		"aria-keyshortcuts": "Alt+ArrowDown",
		"aria-haspopup": "dialog",
		"aria-expanded": j,
		"aria-controls": j ? ye : void 0,
		"data-testid": "stDateInputField",
		"data-disabled": f || void 0,
		"data-has-error": _ ? "" : void 0,
		onFocus: q,
		onBlur: Ye,
		onClickCapture: J,
		onPaste: X,
		onKeyDown: qe,
		children: [
			/* @__PURE__ */ g.jsx(ie, {
				"data-testid": "stDateInputFieldsScroller",
				children: /* @__PURE__ */ g.jsx(i, {
					locale: "en-US",
					children: /* @__PURE__ */ g.jsx(pe, { children: /* @__PURE__ */ g.jsx(b, {
						"aria-label": ne,
						"aria-describedby": _ ? E : void 0,
						isInvalid: !!_,
						value: P,
						onChange: G,
						minValue: o,
						maxValue: u,
						shouldForceLeadingZeros: !0,
						isDisabled: f,
						children: /* @__PURE__ */ g.jsx(be, { format: d })
					}, w) })
				})
			}),
			/* @__PURE__ */ g.jsxs(Te, { children: [_ && /* @__PURE__ */ g.jsx(T, {
				"data-testid": "stDateInputError",
				children: /* @__PURE__ */ g.jsx(s, {
					content: /* @__PURE__ */ g.jsx(h, {
						source: _,
						allowHTML: !1
					}),
					placement: te.TOP_RIGHT,
					error: !0,
					children: /* @__PURE__ */ g.jsx(l, {
						content: y,
						size: "base"
					})
				})
			}), p && !r(P) && /* @__PURE__ */ g.jsx(Fe, {
				ref: Se,
				type: "button",
				onClick: Y,
				"aria-label": "Clear date",
				"data-testid": "stDateInputClearButton",
				tabIndex: -1,
				onMouseDown: (e) => e.preventDefault(),
				children: /* @__PURE__ */ g.jsx(l, {
					content: re,
					size: "base"
				})
			})] }),
			_ && /* @__PURE__ */ g.jsx(oe, {
				id: E,
				role: "alert",
				children: _.replaceAll("**", "")
			})
		]
	}), B && /* @__PURE__ */ g.jsx(t, {
		id: "stFloatingOverlayPortal",
		children: /* @__PURE__ */ g.jsxs(ge, {
			id: ye,
			ref: Ge,
			style: He,
			"data-testid": "stDateInputCalendar",
			onKeyDown: Je,
			role: j ? "dialog" : void 0,
			"aria-modal": j ? "true" : void 0,
			"aria-label": j ? "Choose date" : void 0,
			"aria-describedby": j ? O : void 0,
			children: [j && /* @__PURE__ */ g.jsx(oe, {
				id: O,
				children: "Use arrow keys to navigate dates. Enter to select. Escape to close."
			}), /* @__PURE__ */ g.jsx(i, {
				locale: Ce,
				children: /* @__PURE__ */ g.jsxs(Ae, {
					"aria-label": "Choose date",
					value: P,
					onChange: K,
					minValue: o,
					maxValue: u,
					focusedValue: ce ?? void 0,
					onFocusChange: le,
					children: [/* @__PURE__ */ g.jsx(ke, {}), /* @__PURE__ */ g.jsxs(_e, {
						weekdayStyle: "narrow",
						children: [/* @__PURE__ */ g.jsx(S, { children: (e) => /* @__PURE__ */ g.jsx(ae, { children: e }) }), /* @__PURE__ */ g.jsx(Ne, { children: (e) => /* @__PURE__ */ g.jsx(Me, {
							date: e,
							$isRangeMode: !1
						}) })]
					})]
				})
			})]
		})
	})] });
}
var Be = (0, F.memo)(z);
function B({ disabled: t, element: n, widgetMgr: r, fragmentId: i }) {
	let s = (0, F.useContext)(a), [ee, c] = (0, F.useState)(null), [l, u] = (0, F.useState)(0), d = (0, F.useCallback)(() => {
		c(null);
	}, []), p = (0, F.useCallback)(() => {
		d(), u((e) => e + 1);
	}, [d]), te = n.queryParamKey ? {
		paramKey: n.queryParamKey,
		valueType: "string_array_value",
		clearable: n.default.length === 0,
		urlFormat: n.isRange ? "repeated" : void 0
	} : void 0, [m, h] = v({
		getStateFromWidgetMgr: V,
		getDefaultStateFromProto: Ve,
		getCurrStateFromProto: H,
		updateWidgetMgrState: U,
		element: n,
		widgetMgr: r,
		fragmentId: i,
		queryParamBinding: te,
		formClearBehavior: "resetValueAndRunCallback",
		onFormCleared: p
	}), { locale: re } = (0, F.useContext)(f), y = (0, F.useMemo)(() => N(n), [n]), b = (0, F.useMemo)(() => ue(n), [n]), [ie, x] = (0, F.useState)(() => Se(m, y, b)), ae = (0, F.useMemo)(() => n.isRange ? O(y) : !1, [n.isRange, y]), oe = n.default.length === 0 && !t, se = (0, F.useMemo)(() => le(y, n.format), [y, n.format]), ce = (0, F.useMemo)(() => b ? le(b, n.format) : "", [b, n.format]), S = (0, F.useCallback)((e) => k(e, n.isRange, se, ce), [
		n.isRange,
		se,
		ce
	]), de = (0, F.useCallback)((e) => {
		if (d(), !e) {
			h({
				value: [],
				fromUser: !0
			});
			return;
		}
		let t = j(e, y, b);
		if (t) {
			c(S(t));
			return;
		}
		h({
			value: [C(e)],
			fromUser: !0
		});
	}, [
		S,
		b,
		y,
		d,
		c,
		h
	]), w = (0, F.useCallback)((e) => {
		if (d(), !e) return;
		let t = j(e, y, b);
		t && c(S(t));
	}, [
		S,
		b,
		y,
		d,
		c
	]), fe = (0, F.useCallback)((e) => {
		if (d(), e.length === 0) {
			h({
				value: [],
				fromUser: !0
			});
			return;
		}
		let t = null, n = [];
		if (e.forEach((e) => {
			let r = j(e, y, b);
			r && (t = r), n.push(C(e));
		}), t) {
			c(S(t));
			return;
		}
		h({
			value: Ce(n),
			fromUser: !0
		});
	}, [
		S,
		b,
		y,
		d,
		c,
		h
	]), pe = (0, F.useCallback)((e) => {
		e && d();
	}, [d]), T = o({ formId: n.formId }), me = (0, F.useCallback)((e) => {
		T && U(n, r, {
			value: e ? [C(e)] : [],
			fromUser: !0
		}, i);
	}, [
		T,
		n,
		r,
		i
	]), he = (0, F.useCallback)((e) => {
		T && U(n, r, {
			value: Ce(e.map(C)),
			fromUser: !0
		}, i);
	}, [
		T,
		n,
		r,
		i
	]), ge = (0, F.useMemo)(() => E(m[0] ?? "") ?? null, [m]), _e = (0, F.useMemo)(() => E(m[0] ?? "") ?? null, [m]), ve = (0, F.useMemo)(() => E(m[1] ?? "") ?? null, [m]);
	return (0, F.useEffect)(() => {
		if (!n.isRange) {
			if (ge) x(ge);
			else {
				let e = A(y, b);
				x((t) => D(t, e) ? t : e);
			}
		}
	}, [
		n.isRange,
		ge,
		y,
		b
	]), (0, F.useEffect)(() => {
		if (n.isRange) {
			if (_e) x(_e);
			else {
				let e = A(y, b);
				x((t) => D(t, e) ? t : e);
			}
		}
	}, [
		n.isRange,
		_e,
		y,
		b
	]), /* @__PURE__ */ g.jsxs("div", {
		className: "stDateInput",
		"data-testid": "stDateInput",
		children: [/* @__PURE__ */ g.jsx(ne, {
			label: n.label,
			disabled: t,
			labelVisibility: e(n.labelVisibility?.value),
			children: n.help && /* @__PURE__ */ g.jsx(_, {
				content: n.help,
				label: n.label
			})
		}), n.isRange ? /* @__PURE__ */ g.jsx(R, {
			startValue: _e,
			endValue: ve,
			onChange: fe,
			minDate: y,
			maxDate: b,
			format: n.format,
			disabled: t,
			clearable: oe,
			label: n.label,
			error: ee,
			locale: re,
			isInSidebar: s,
			enableQuickSelect: ae,
			focusedValue: ie,
			onFocusChange: x,
			onValidate: w,
			onClose: pe,
			formCommit: T ? he : void 0,
			formResetKey: l
		}) : /* @__PURE__ */ g.jsx(Be, {
			value: ge,
			onChange: de,
			minDate: y,
			maxDate: b,
			format: n.format,
			disabled: t,
			clearable: oe,
			label: n.label,
			error: ee,
			locale: re,
			isInSidebar: s,
			focusedValue: ie,
			onFocusChange: x,
			onValidate: w,
			onClose: pe,
			formCommit: T ? me : void 0,
			formResetKey: l
		})]
	});
}
function V(e, t) {
	return e.getStringArrayValue(t);
}
function Ve(e) {
	return e.default ?? [];
}
function H(e) {
	return e.value ?? [];
}
function U(e, t, n, r) {
	let i = N(e), a = ue(e);
	(n.value || []).every((e) => {
		let t = E(e);
		return t ? !j(t, i, a) : !1;
	}) && t.setStringArrayValue(e.id, n.value, {
		formId: e.formId,
		fragmentId: r,
		fromUser: n.fromUser,
		...e.ignoreRerun ? { triggerRerun: !1 } : {}
	});
}
var He = (0, F.memo)(B);
//#endregion
export { He as default };

//# sourceMappingURL=DateInput-mjfUVhnq-D9AsjvUX.js.map