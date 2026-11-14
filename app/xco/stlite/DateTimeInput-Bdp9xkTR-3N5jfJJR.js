import { $i as e, Di as t, Ha as n, Jn as r, Ko as i, Ma as a, O as o, Qn as s, Ta as c, Ur as l, Wo as u, Xo as d, Zn as f, ds as p, ir as m, ms as h, ur as ee, wi as g, wr as te, za as _ } from "./index-B1FrxEMd-BsPMjC5n.js";
import { t as ne } from "./WidgetLabel--oJQrsAd-IbrOPlTn.js";
import { t as v } from "./WidgetLabelHelpIcon-CWnOrY3T-BtbNCfjY.js";
import { t as re } from "./useBasicWidgetState-DVivDFu--yiQ4kKRs.js";
import { t as ie } from "./Cancel.esm-CtMNidjq-CXB-pKHk.js";
import { t as y } from "./ErrorOutline.esm-BTDiocCk-BcENiBMZ.js";
import { _ as b, a as x, b as S, c as C, f as w, g as T, t as E, u as D, y as ae } from "./DateField-BaLw2J5b-CSjqjxpp.js";
import { A as oe, C as se, D as ce, E as O, F as le, H as ue, L as k, M as de, O as A, P as fe, T as pe, V as me, W as he, a as ge, d as _e, j as ve, n as ye, r as be, s as xe, t as j, v as Se, x as Ce, z as we } from "./ReorderedSegments-gjZpUY_f-DojNzhSR.js";
//#region ../react/build/DateTimeInput-Bdp9xkTR.js
var M = /* @__PURE__ */ h(p(), 1);
function N(e, t) {
	return String(Math.abs(e)).padStart(t, "0");
}
function P(e) {
	if (!e) return null;
	let t = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::[0-5]\d)?$/.exec(e.trim());
	if (!t) return null;
	let [, n, r, i, a, o] = t, s = Number(n), c = Number(r), l = Number(i), u = Number(a), d = Number(o);
	if (c < 1 || c > 12 || l < 1 || l > 31 || u < 0 || u > 23 || d < 0 || d > 59) return null;
	try {
		let e = new T(s, c, l, u, d);
		return e.day === l ? e : null;
	} catch {
		return null;
	}
}
function Te(e) {
	return `${N(e.year, 4)}-${N(e.month, 2)}-${N(e.day, 2)}T${N(e.hour, 2)}:${N(e.minute, 2)}`;
}
function Ee(e, t) {
	return e === t ? !0 : !e || !t ? !1 : e.compare(t) === 0;
}
function De(e, t, n) {
	return e ? n && e.compare(n) > 0 ? "afterMax" : t && e.compare(t) < 0 ? "beforeMin" : null : null;
}
function F(e, t) {
	let { order: n, separator: r } = j(t);
	return `${n.map((t) => t === "Y" ? N(e.year, 4) : N(t === "M" ? e.month : e.day, 2)).join(r)}, ${N(e.hour, 2)}:${N(e.minute, 2)}`;
}
function Oe(e, t, n) {
	return e ? e === "afterMax" ? `**Error**: Date and time set outside allowed range. Please select a date and time on or before ${n}.` : n ? `**Error**: Date and time set outside allowed range. Please select a date and time between ${t} and ${n}.` : `**Error**: Date and time set outside allowed range. Please select a date and time on or after ${t}.` : null;
}
function ke(e, t) {
	let n = e.trim(), r = P(n);
	if (r) return r;
	let { order: i, separator: a } = j(t), o = a.replaceAll(/[.*+?^${}()|[\]\\]/g, "\\$&"), s = `(\\d{1,4})${o}(\\d{1,4})${o}(\\d{1,4})`, c = RegExp(`^${s}[,\\s]+(\\d{1,2}):(\\d{2})$`).exec(n);
	if (!c) return null;
	let l = {};
	i.forEach((e, t) => {
		l[e] = Number(c[t + 1]);
	});
	let { Y: u, M: d, D: f } = l, p = Number(c[4]), m = Number(c[5]);
	if (u === void 0 || d === void 0 || f === void 0 || d < 1 || d > 12 || f < 1 || f > 31 || p < 0 || p > 23 || m < 0 || m > 59) return null;
	try {
		let e = new T(u, d, f, p, m);
		return e.day === f ? e : null;
	} catch {
		return null;
	}
}
function I(e, t, n, r) {
	let i = n ? Math.floor(e / t) * t + t : Math.ceil(e / t) * t - t;
	return i >= r ? 0 : i < 0 ? Math.floor((r - 1) / t) * t : i;
}
function Ae(e, t, n, r) {
	if (t === "minute" && n % 60 == 0) {
		let t = n / 60;
		if (t <= 1) return null;
		let i = I(e.hour * 60 + e.minute, t, r, 1440);
		return e.set({
			hour: Math.floor(i / 60),
			minute: i % 60
		});
	}
	if (t === "hour" && n % 3600 == 0) {
		let t = n / 3600;
		if (t <= 1) return null;
		let i = I(e.hour, t, r, 24);
		return e.set({
			hour: i,
			minute: 0
		});
	}
	return null;
}
function je(e) {
	let t = e.querySelectorAll(k), n = e.querySelectorAll(`${k}[data-placeholder="true"]`), r = t.length, i = n.length;
	return {
		totalSegments: r,
		placeholderCount: i,
		isPartiallyTyped: i > 0 && i < r,
		isFullyCleared: r > 0 && i === r
	};
}
var Me = {
	hour: 23,
	minute: 59,
	year: 9999,
	month: 12,
	day: 31
};
function L(e, t) {
	let n = Me[t], r = e?.querySelector(`[data-type="${t}"]:not([data-placeholder="true"])`);
	if (!r) return null;
	let i = r.getAttribute("aria-valuenow") ?? r.textContent;
	if (!i) return null;
	let a = Number(i);
	return Number.isInteger(a) && a >= 0 && a <= n ? a : null;
}
function Ne(e) {
	let t = L(e, "hour"), n = L(e, "minute");
	return t === null && n === null ? null : new S(t ?? 0, n ?? 0);
}
function Pe(e) {
	let t = L(e, "year"), n = L(e, "month"), r = L(e, "day");
	if (t === null || n === null || r === null || t < 1 || n < 1 || r < 1) return null;
	let i = new D(t, n, r);
	return i.day === r ? i : null;
}
function Fe(e, t) {
	let n = e.getStringArrayValue(t);
	if (n !== void 0) return n.length > 0 ? n[0] : null;
}
function Ie(e) {
	return e.default?.length ? e.default[0] : null;
}
function R(e) {
	return e.value?.length ? e.value[0] : null;
}
function z(e, t, n, r) {
	let i = P(e.min), a = P(e.max), o = (i) => {
		t.setStringArrayValue(e.id, i ? [i] : [], {
			formId: e.formId,
			fragmentId: r,
			fromUser: n.fromUser
		});
	};
	if (n.value) {
		let e = P(n.value);
		if (e) {
			De(e, i, a) || o(n.value);
			return;
		}
	}
	o(n.value);
}
var Le = /* @__PURE__ */ t(x, { target: "e1i6dpda2" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	"&[data-disabled]": {
		color: e.colors.fadedText40,
		cursor: "not-allowed"
	}
}), ""), Re = /* @__PURE__ */ t(b, { target: "e1i6dpda1" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	padding: `${e.spacing.twoXS} 0`,
	outline: "none"
}), ""), ze = /* @__PURE__ */ t(w, { target: "e1i6dpda0" })(({ theme: t }) => {
	let n = e(t.colors.primary) > .5;
	return {
		paddingLeft: t.spacing.threeXS,
		paddingRight: t.spacing.threeXS,
		borderRadius: t.radii.sm,
		color: t.colors.bodyText,
		fontSize: t.fontSizes.sm,
		fontWeight: t.fontWeights.normal,
		whiteSpace: "pre",
		caretColor: "transparent",
		outline: "none",
		"&[data-type=literal]": {
			color: t.colors.fadedText60,
			padding: 0
		},
		"&[data-placeholder]": { color: t.colors.fadedText60 },
		"&:hover:not([data-type=literal]):not([data-focused])": { backgroundColor: t.colors.secondaryBg },
		"&[data-focused]": {
			backgroundColor: t.colors.primary,
			color: n ? t.colors.black : t.colors.white
		},
		"&[data-disabled]": { color: "inherit" }
	};
}, "");
function B({ value: e, onChange: t, minDateTime: n, maxDateTime: s, format: c, step: p, disabled: m, clearable: h, label: ne, error: v, locale: re, isInSidebar: b, focusedValue: x, onFocusChange: C, onValidate: w, onClose: ae, formCommit: j, formSubmit: N, formResetKey: P }) {
	let Te = u(), F = (0, M.useId)(), Oe = `${F}-error`, I = `${F}-calendar`, Me = `${F}-calendar-desc`, L = (0, M.useRef)(null), Fe = (0, M.useRef)(null), Ie = (0, M.useMemo)(() => ye(re), [re]), R = (0, M.useRef)(!1), [z, B] = (0, M.useState)(!1), V = (0, M.useRef)(!1);
	V.current = z;
	let H = (0, M.useRef)(null), U = (0, M.useRef)(null), [W, G] = (0, M.useState)(e), K = (0, M.useRef)(void 0), Be = (0, M.useRef)("inline"), [Ve, q] = (0, M.useState)(null), [He, Ue] = (0, M.useState)(e);
	He !== e && (Ue(e), G(e), q(null), K.current = void 0);
	let We = (0, M.useRef)(!1), [Ge, Ke] = (0, M.useState)(P);
	Ge !== P && (Ke(P), G(e), q(null), K.current = void 0, We.current = !!L.current?.contains(document.activeElement));
	let J = (0, M.useRef)(W);
	J.current = W;
	let Y = (0, M.useCallback)(() => {
		let e = J.current;
		if (e) return new S(e.hour, e.minute);
		let t = Ne(U.current), n = Ne(L.current);
		return Be.current === "popover" ? t ?? n : n ?? t;
	}, []), qe = (0, M.useRef)(ae);
	qe.current = ae;
	let Je = (0, M.useRef)(t);
	Je.current = t;
	let X = (0, M.useRef)(j);
	X.current = j;
	let [Z, Q] = (0, M.useState)(!1), Ye = (0, M.useCallback)(() => {
		let e = Pe(L.current), t = Y();
		return !e || !t ? null : new T(e.year, e.month, e.day, t.hour, t.minute);
	}, [Y]), $ = (0, M.useCallback)(({ popoverStaysOpen: t = !1 } = {}) => {
		if (!L.current) return !1;
		let { isPartiallyTyped: r, isFullyCleared: i } = je(L.current), a = J.current ? null : Ye();
		if (t || q(null), r && !a || i && !h) return G(e), qe.current(!0), !1;
		let o = a ?? (i ? null : J.current);
		return De(o, n, s) ? (G(e), qe.current(!0), !1) : (Ee(o, e) || K.current !== void 0 && Ee(o, K.current) || (K.current = o, J.current = o, Je.current(o), X.current?.(o)), !0);
	}, [
		e,
		h,
		n,
		s,
		Ye
	]), Xe = (0, M.useRef)(Z);
	(0, M.useEffect)(() => {
		!Xe.current && Z && (K.current = void 0, e && C(new D(e.year, e.month, e.day))), Xe.current = Z;
	}, [
		Z,
		e,
		C
	]), (0, M.useEffect)(() => {
		We.current && (We.current = !1, R.current = !0, L.current?.querySelector("[data-type]:not([data-type=\"literal\"])")?.focus(), R.current = !1);
	}, [P]), (0, M.useEffect)(() => {
		if (!z || !Z) return;
		let e = requestAnimationFrame(() => {
			U.current?.querySelector("[role=\"grid\"] [tabindex=\"0\"]")?.focus();
		});
		return () => cancelAnimationFrame(e);
	}, [z, Z]);
	let Ze = (0, M.useMemo)(() => {
		let e = {
			open: Z,
			placement: "bottom-start",
			offsetPx: g(Te.spacing.twoXS)
		};
		if (!b || typeof document > "u") return e;
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
		Z,
		Te.spacing.twoXS,
		b
	]), { refs: Qe, floatingStyles: $e } = i(Ze), et = (0, M.useCallback)(() => {
		if (R.current = !0, V.current && H.current) H.current.focus();
		else {
			let e = L.current?.querySelectorAll(k), t = e ? Array.from(e).at(-1) : void 0;
			t ? t.focus() : L.current?.focus();
		}
		requestAnimationFrame(() => {
			R.current = !1;
		});
	}, []), { setFloatingRef: tt, setReferenceRef: nt } = d({
		isOpen: Z,
		onClose: () => {
			Q(!1), B(!1), $();
		},
		floatingSetFn: Qe.setFloating,
		referenceSetFn: Qe.setReference,
		restoreFocusFn: et,
		excludeSelectors: [`.${O}`],
		excludeEscape: !0
	}), rt = (0, M.useCallback)((e) => {
		U.current = e, tt(e);
	}, [tt]), it = (0, M.useCallback)((e) => {
		L.current = e, nt(e);
	}, [nt]), at = (0, M.useCallback)((e) => {
		G(e), w(e), e && (q(null), C(new D(e.year, e.month, e.day)));
	}, [C, w]), ot = (0, M.useCallback)((e) => {
		let t = Y(), n = new T(e.year, e.month, e.day, t?.hour ?? 0, t?.minute ?? 0);
		G(n), q(null), w(n), B(!0), H.current = null;
	}, [w, Y]), st = (0, M.useCallback)(() => {
		Be.current = "inline", !R.current && (m || Q(!0));
	}, [m]), ct = (0, M.useCallback)(() => {
		Be.current = "popover";
	}, []), lt = (0, M.useCallback)((e) => {
		Fe.current?.contains(e.target) || (B(!1), st());
	}, [st]), ut = (0, M.useCallback)(() => {
		G(null), q(null), K.current = null, t(null), X.current?.(null);
	}, [t]), dt = (0, M.useCallback)((e) => {
		if (m) return;
		let n = ke(e.clipboardData.getData("text").trim(), c);
		if (n) {
			e.preventDefault(), G(n), K.current = n, t(n), X.current?.(n);
			return;
		}
	}, [
		m,
		c,
		t
	]), ft = (0, M.useCallback)((e, t) => {
		if (e.key !== "ArrowUp" && e.key !== "ArrowDown" || !t) return;
		let n = Ae(t, e.target.getAttribute("data-type"), p, e.key === "ArrowUp");
		n && (e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), G(n), w(n));
	}, [p, w]), pt = (0, M.useCallback)((e) => {
		if (e.altKey && e.key === "ArrowDown") {
			e.preventDefault(), H.current = e.target, Z || Q(!0), B(!0);
			return;
		}
		if (e.key === "Enter") {
			e.preventDefault(), $({ popoverStaysOpen: !0 }) && !v && N?.();
			return;
		}
		if (e.key === "ArrowUp" || e.key === "ArrowDown") {
			ft(e, W);
			return;
		}
		if (e.key !== "Tab" || !Z) return;
		let t = L.current;
		if (!t) return;
		let n = t.querySelectorAll(k), r = Array.from(n);
		(!e.shiftKey && e.target === r.at(-1) || e.shiftKey && e.target === r[0]) && ($(), Q(!1));
	}, [
		Z,
		W,
		v,
		N,
		$,
		ft
	]), mt = (0, M.useCallback)((e) => {
		if (e.key !== "Tab") return;
		if (e.preventDefault(), !V.current) {
			$(), Q(!1), et();
			return;
		}
		let t = U.current;
		if (!t) return;
		let n = Array.from(t.querySelectorAll("button:not([tabindex=\"-1\"]):not([disabled]), [tabindex=\"0\"]"));
		if (n.length === 0) return;
		let r = n.indexOf(document.activeElement), i;
		i = e.shiftKey ? r <= 0 ? n.length - 1 : r - 1 : r >= n.length - 1 ? 0 : r + 1, n[i].focus();
	}, [$, et]), ht = (0, M.useCallback)((e) => {
		e.currentTarget.contains(e.relatedTarget) || V.current || Z && (!e.relatedTarget || U.current?.contains(e.relatedTarget)) || $();
	}, [Z, $]), gt = (0, M.useMemo)(() => W ? new D(W.year, W.month, W.day) : null, [W]), _t = (0, M.useMemo)(() => W ? new S(W.hour, W.minute) : Ve, [W, Ve]), vt = (0, M.useCallback)((e) => {
		let t = J.current;
		if (!t) {
			q(e ? new S(e.hour, e.minute) : null);
			return;
		}
		if (!e) return;
		let n = new T(t.year, t.month, t.day, e.hour, e.minute);
		G(n), w(n);
	}, [w]), yt = (0, M.useCallback)((e) => {
		ft(e, J.current);
	}, [ft]), bt = (0, M.useMemo)(() => {
		if (n) return new D(n.year, n.month, n.day);
	}, [n]), xt = (0, M.useMemo)(() => {
		if (s) return new D(s.year, s.month, s.day);
	}, [s]);
	return /* @__PURE__ */ _.jsxs(he, { children: [/* @__PURE__ */ _.jsxs(_e, {
		ref: it,
		"aria-keyshortcuts": "Alt+ArrowDown",
		"aria-haspopup": "dialog",
		"aria-expanded": z,
		"aria-controls": z ? I : void 0,
		"data-testid": "stDateTimeInputField",
		"data-disabled": m || void 0,
		"data-has-error": v ? "" : void 0,
		onFocus: st,
		onBlur: ht,
		onClickCapture: lt,
		onPaste: dt,
		onKeyDownCapture: pt,
		children: [
			/* @__PURE__ */ _.jsx(oe, {
				"data-testid": "stDateTimeInputFieldsScroller",
				children: /* @__PURE__ */ _.jsx(o, {
					locale: "en-US",
					children: /* @__PURE__ */ _.jsx(A, { children: /* @__PURE__ */ _.jsx(E, {
						"aria-label": ne,
						"aria-describedby": v ? Oe : void 0,
						isInvalid: !!v,
						value: W,
						onChange: at,
						minValue: n ?? void 0,
						maxValue: s ?? void 0,
						granularity: "minute",
						hourCycle: 24,
						shouldForceLeadingZeros: !0,
						isDisabled: m,
						children: /* @__PURE__ */ _.jsx(ge, {
							format: c,
							includeTime: !0
						})
					}, P) })
				})
			}),
			/* @__PURE__ */ _.jsxs(ve, { children: [v && /* @__PURE__ */ _.jsx(fe, {
				"data-testid": "stDateTimeInputError",
				children: /* @__PURE__ */ _.jsx(l, {
					content: /* @__PURE__ */ _.jsx(te, {
						source: v,
						allowHTML: !1
					}),
					placement: ee.TOP_RIGHT,
					error: !0,
					children: /* @__PURE__ */ _.jsx(f, {
						content: y,
						size: "base"
					})
				})
			}), h && !a(W) && /* @__PURE__ */ _.jsx(we, {
				ref: Fe,
				type: "button",
				onClick: ut,
				"aria-label": "Clear date and time",
				"data-testid": "stDateTimeInputClearButton",
				tabIndex: -1,
				onMouseDown: (e) => e.preventDefault(),
				children: /* @__PURE__ */ _.jsx(f, {
					content: ie,
					size: "base"
				})
			})] }),
			v && /* @__PURE__ */ _.jsx(ce, {
				id: Oe,
				role: "alert",
				children: v.replaceAll("**", "")
			})
		]
	}), Z && /* @__PURE__ */ _.jsx(r, {
		id: "stFloatingOverlayPortal",
		children: /* @__PURE__ */ _.jsxs(pe, {
			id: I,
			ref: rt,
			style: $e,
			"data-testid": "stDateTimeInputCalendar",
			onKeyDown: mt,
			role: z ? "dialog" : void 0,
			"aria-modal": z ? "true" : void 0,
			"aria-label": z ? "Choose date and time" : void 0,
			"aria-describedby": z ? Me : void 0,
			children: [z && /* @__PURE__ */ _.jsx(ce, {
				id: Me,
				children: "Use arrow keys to navigate. Enter to select. Tab to switch between calendar and time. Escape to close."
			}), /* @__PURE__ */ _.jsxs(o, {
				locale: Ie,
				children: [/* @__PURE__ */ _.jsxs(xe, {
					"aria-label": "Choose date and time",
					value: gt,
					onChange: ot,
					minValue: bt,
					maxValue: xt,
					focusedValue: x ?? void 0,
					onFocusChange: C,
					children: [/* @__PURE__ */ _.jsx(be, {}), /* @__PURE__ */ _.jsxs(me, {
						weekdayStyle: "narrow",
						children: [/* @__PURE__ */ _.jsx(ue, { children: (e) => /* @__PURE__ */ _.jsx(se, { children: e }) }), /* @__PURE__ */ _.jsx(Ce, { children: (e) => /* @__PURE__ */ _.jsx(Se, {
							date: e,
							$isRangeMode: !1
						}) })]
					})]
				}), /* @__PURE__ */ _.jsxs(de, {
					"data-testid": "stDateTimeInputPopoverTime",
					onKeyDownCapture: yt,
					onFocus: ct,
					children: [/* @__PURE__ */ _.jsx(le, {
						id: `${F}-time-label`,
						children: "Time"
					}), /* @__PURE__ */ _.jsx(o, {
						locale: "en-US",
						children: /* @__PURE__ */ _.jsx(Le, {
							"aria-labelledby": `${F}-time-label`,
							"aria-describedby": v ? Oe : void 0,
							isInvalid: !!v,
							value: _t,
							onChange: vt,
							granularity: "minute",
							hourCycle: 24,
							shouldForceLeadingZeros: !0,
							isDisabled: m,
							children: /* @__PURE__ */ _.jsx(Re, { children: (e) => /* @__PURE__ */ _.jsx(ze, { segment: e }) })
						}, P)
					})]
				})]
			})]
		})
	})] });
}
var V = (0, M.memo)(B);
function H({ disabled: e, element: t, widgetMgr: r, fragmentId: i }) {
	let a = (0, M.useContext)(s), [o, l] = (0, M.useState)(null), [u, d] = (0, M.useState)(0), f = (0, M.useCallback)(() => {
		l(null);
	}, []), p = (0, M.useCallback)(() => {
		f(), d((e) => e + 1);
	}, [f]), h = t.queryParamKey ? {
		paramKey: t.queryParamKey,
		valueType: "string_array_value",
		clearable: t.default.length === 0
	} : void 0, [ee, g] = re({
		getStateFromWidgetMgr: Fe,
		getDefaultStateFromProto: Ie,
		getCurrStateFromProto: R,
		updateWidgetMgrState: z,
		element: t,
		widgetMgr: r,
		fragmentId: i,
		queryParamBinding: h,
		formClearBehavior: "resetValueAndRunCallback",
		onFormCleared: p
	}), { locale: te } = (0, M.useContext)(m), ie = t.step ? Number(t.step) : 900, y = (0, M.useMemo)(() => P(t.min), [t.min]), b = (0, M.useMemo)(() => P(t.max), [t.max]), x = (0, M.useMemo)(() => P(ee), [ee]), S = t.default.length === 0 && !e, w = (0, M.useMemo)(() => y ? F(y, t.format) : "", [y, t.format]), T = (0, M.useMemo)(() => b ? F(b, t.format) : "", [b, t.format]), E = (0, M.useCallback)((e) => Oe(e, w, T), [w, T]), oe = (0, M.useCallback)((e) => {
		if (f(), !e) {
			g({
				value: null,
				fromUser: !0
			});
			return;
		}
		let t = De(e, y, b);
		if (t) {
			l(E(t));
			return;
		}
		g({
			value: Te(e),
			fromUser: !0
		});
	}, [
		E,
		b,
		y,
		f,
		g
	]), se = (0, M.useCallback)((e) => {
		if (f(), !e) return;
		let t = De(e, y, b);
		t && l(E(t));
	}, [
		E,
		b,
		y,
		f
	]), ce = (0, M.useCallback)((e) => {
		e && f();
	}, [f]), O = c({ formId: t.formId }), le = (0, M.useCallback)((e) => {
		O && z(t, r, {
			value: e ? Te(e) : null,
			fromUser: !0
		}, i);
	}, [
		O,
		t,
		r,
		i
	]), ue = (0, M.useCallback)(() => {
		r.submitForm(t.formId, i);
	}, [
		t.formId,
		r,
		i
	]), k = O ? r.allowFormEnterToSubmit(t.formId) : !1, [de, A] = (0, M.useState)(() => {
		if (x) return new D(x.year, x.month, x.day);
		let e = ae(C());
		if (y) {
			let t = new D(y.year, y.month, y.day);
			return e.compare(t) < 0 ? t : e;
		}
		return e;
	});
	return (0, M.useEffect)(() => {
		if (x) A(new D(x.year, x.month, x.day));
		else {
			let e = ae(C());
			if (y) {
				let t = new D(y.year, y.month, y.day);
				A(e.compare(t) < 0 ? t : e);
			} else A(e);
		}
	}, [x, y]), /* @__PURE__ */ _.jsxs("div", {
		className: "stDateTimeInput",
		"data-testid": "stDateTimeInput",
		children: [/* @__PURE__ */ _.jsx(ne, {
			label: t.label,
			disabled: e,
			labelVisibility: n(t.labelVisibility?.value),
			children: t.help && /* @__PURE__ */ _.jsx(v, {
				content: t.help,
				label: t.label
			})
		}), /* @__PURE__ */ _.jsx(V, {
			value: x,
			onChange: oe,
			minDateTime: y,
			maxDateTime: b,
			format: t.format,
			step: ie,
			disabled: e,
			clearable: S,
			label: t.label,
			error: o,
			locale: te,
			isInSidebar: a,
			focusedValue: de,
			onFocusChange: A,
			onValidate: se,
			onClose: ce,
			formCommit: O ? le : void 0,
			formSubmit: k ? ue : void 0,
			formResetKey: u
		})]
	});
}
var U = (0, M.memo)(H);
//#endregion
export { U as default };

//# sourceMappingURL=DateTimeInput-Bdp9xkTR-3N5jfJJR.js.map