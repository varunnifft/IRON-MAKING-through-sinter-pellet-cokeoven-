import { B as e, Bt as t, D as n, Di as r, Go as i, Gt as a, Ha as o, Jt as s, Nt as c, P as l, Pt as u, _ as d, _t as f, a as p, ct as m, ds as h, g, hn as _, ht as v, i as y, it as b, ms as x, mt as S, nn as C, nt as w, ot as T, rt as E, s as D, ti as O, tn as k, tt as A, v as j, wr as M, yr as N, z as P, za as F, zt as I } from "./index-B1FrxEMd-BsPMjC5n.js";
import { n as L, r as R } from "./formatMoment-CSglijqE-wHP8MmD-.js";
import { t as z } from "./formatNumber-Q1A8AyDZ-C1p6HSP6.js";
import { t as B } from "./WidgetLabel--oJQrsAd-IbrOPlTn.js";
import { t as V } from "./WidgetLabelHelpIcon-CWnOrY3T-BtbNCfjY.js";
import { t as ee } from "./useBasicWidgetState-DVivDFu--yiQ4kKRs.js";
import { t as te } from "./useFormReset-BZ7HXuA_-BoM-dbzr.js";
import { t as ne } from "./withCalculatedWidth-Ddrgk5vM-CtHlZhi_.js";
//#region ../react/build/Slider-Cbc6kPhU.js
var H = /* @__PURE__ */ x(h(), 1);
function U(n) {
	let { onMoveStart: r, onMove: i, onMoveEnd: a } = n, o = (0, H.useRef)({
		didMove: !1,
		lastPosition: null,
		id: null
	}), { addGlobalListener: c, removeGlobalListener: l } = e(), u = (0, H.useCallback)((e, t, n, a) => {
		n === 0 && a === 0 || (o.current.didMove || (o.current.didMove = !0, r?.({
			type: "movestart",
			pointerType: t,
			shiftKey: e.shiftKey,
			metaKey: e.metaKey,
			ctrlKey: e.ctrlKey,
			altKey: e.altKey
		})), i?.({
			type: "move",
			pointerType: t,
			deltaX: n,
			deltaY: a,
			shiftKey: e.shiftKey,
			metaKey: e.metaKey,
			ctrlKey: e.ctrlKey,
			altKey: e.altKey
		}));
	}, [
		r,
		i,
		o
	]), d = _(u), f = (0, H.useCallback)((e, n) => {
		t(), o.current.didMove && a?.({
			type: "moveend",
			pointerType: n,
			shiftKey: e.shiftKey,
			metaKey: e.metaKey,
			ctrlKey: e.ctrlKey,
			altKey: e.altKey
		});
	}, [a, o]), p = _(f);
	return { moveProps: (0, H.useMemo)(() => {
		let e = {}, t = () => {
			I(), o.current.didMove = !1;
		};
		{
			let n = (e) => {
				if (e.pointerId === o.current.id) {
					let t = e.pointerType || "mouse";
					d(e, t, e.pageX - (o.current.lastPosition?.pageX ?? 0), e.pageY - (o.current.lastPosition?.pageY ?? 0)), o.current.lastPosition = {
						pageX: e.pageX,
						pageY: e.pageY
					};
				}
			}, r = (e) => {
				if (e.pointerId === o.current.id) {
					let t = e.pointerType || "mouse";
					p(e, t), o.current.id = null;
					let i = s(g(e));
					l(i, "pointermove", n, !1), l(i, "pointerup", r, !1), l(i, "pointercancel", r, !1);
				}
			};
			e.onPointerDown = (e) => {
				if (e.button === 0 && o.current.id == null) {
					t(), e.stopPropagation(), e.preventDefault(), o.current.lastPosition = {
						pageX: e.pageX,
						pageY: e.pageY
					}, o.current.id = e.pointerId;
					let i = s(g(e));
					c(i, "pointermove", n, !1), c(i, "pointerup", r, !1), c(i, "pointercancel", r, !1);
				}
			};
		}
		let n = (e, n, r) => {
			t(), d(e, "keyboard", n, r), p(e, "keyboard");
		};
		return e.onKeyDown = (e) => {
			switch (e.key) {
				case "Left":
				case "ArrowLeft":
					e.preventDefault(), e.stopPropagation(), n(e, -1, 0);
					break;
				case "Right":
				case "ArrowRight":
					e.preventDefault(), e.stopPropagation(), n(e, 1, 0);
					break;
				case "Up":
				case "ArrowUp":
					e.preventDefault(), e.stopPropagation(), n(e, 0, -1);
					break;
				case "Down":
				case "ArrowDown": e.preventDefault(), e.stopPropagation(), n(e, 0, 1);
			}
		}, e;
	}, [
		c,
		l,
		o
	]) };
}
var W = /* @__PURE__ */ new WeakMap();
function G(e, t) {
	let n = W.get(e);
	if (!n) throw Error("Unknown slider state");
	return `${n.id}-${t}`;
}
function re(t, r, i) {
	let { labelProps: a, fieldProps: o } = y(t), s = t.orientation === "vertical";
	W.set(r, {
		id: a.id ?? o.id,
		"aria-describedby": t["aria-describedby"],
		"aria-details": t["aria-details"]
	});
	let { direction: l } = n(), { addGlobalListener: u, removeGlobalListener: p } = e(), m = (0, H.useRef)(null), h = l === "rtl", g = (0, H.useRef)(null), { moveProps: _ } = U({
		onMoveStart() {
			g.current = null;
		},
		onMove({ deltaX: e, deltaY: t }) {
			if (!i.current) return;
			let { height: n, width: a } = i.current.getBoundingClientRect(), o = s ? n : a;
			g.current == null && m.current != null && (g.current = r.getThumbPercent(m.current) * o);
			let c = s ? t : e;
			if ((s || h) && (c = -c), g.current += c, m.current != null && i.current) {
				let e = d(g.current / o, 0, 1);
				r.setThumbPercent(m.current, e);
			}
		},
		onMoveEnd() {
			m.current != null && (r.setThumbDragging(m.current, !1), m.current = null);
		}
	}), v = (0, H.useRef)(void 0), b = (e, n, a, o) => {
		if (i.current && !t.isDisabled && r.values.every((e, t) => !r.isThumbDragging(t))) {
			let { height: t, width: c, top: d, left: f } = i.current.getBoundingClientRect(), p = s ? t : c, h = ((s ? o : a) - (s ? d : f)) / p;
			(l === "rtl" || s) && (h = 1 - h);
			let g = r.getPercentValue(h), _, y = r.values.findIndex((e) => g - e < 0);
			if (y === 0) _ = y;
			else if (y === -1) _ = r.values.length - 1;
			else {
				let e = r.values[y - 1], t = r.values[y];
				_ = Math.abs(e - g) < Math.abs(t - g) ? y - 1 : y;
			}
			_ >= 0 && r.isThumbEditable(_) ? (e.preventDefault(), m.current = _, r.setFocusedThumb(_), v.current = n, r.setThumbDragging(m.current, !0), r.setThumbValue(_, g), u(window, "mouseup", x, !1), u(window, "touchend", x, !1), u(window, "pointerup", x, !1)) : m.current = null;
		}
	}, x = (e) => {
		(e.pointerId ?? e.changedTouches?.[0].identifier) === v.current && (m.current != null && (r.setThumbDragging(m.current, !1), m.current = null), p(window, "mouseup", x, !1), p(window, "touchend", x, !1), p(window, "pointerup", x, !1));
	};
	return "htmlFor" in a && a.htmlFor && (delete a.htmlFor, a.onClick = () => {
		document.getElementById(G(r, 0))?.focus(), f("keyboard");
	}), {
		labelProps: a,
		groupProps: {
			role: "group",
			...o
		},
		trackProps: c({
			onMouseDown(e) {
				e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || b(e, void 0, e.clientX, e.clientY);
			},
			onPointerDown(e) {
				e.pointerType === "mouse" && (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) || b(e, e.pointerId, e.clientX, e.clientY);
			},
			onTouchStart(e) {
				b(e, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
			},
			style: {
				position: "relative",
				touchAction: "none"
			}
		}, _),
		outputProps: {
			htmlFor: r.values.map((e, t) => G(r, t)).join(" "),
			"aria-live": "off"
		}
	};
}
function ie(t, r) {
	let { index: i = 0, isRequired: o, validationState: s, isInvalid: l, trackRef: u, inputRef: f, orientation: p = r.orientation, name: m, form: h } = t, _ = t.isDisabled || r.isDisabled, v = p === "vertical", { direction: b } = n(), { addGlobalListener: x, removeGlobalListener: C } = e(), w = W.get(r), { labelProps: T, fieldProps: E } = y({
		...t,
		id: G(r, i),
		"aria-labelledby": `${w.id} ${t["aria-labelledby"] ?? ""}`.trim()
	}), O = r.values[i], k = (0, H.useCallback)(() => {
		f.current && D(f.current);
	}, [f]), A = r.focusedThumb === i;
	(0, H.useEffect)(() => {
		A && k();
	}, [A, k]);
	let j = b === "rtl", M = (0, H.useRef)(null), N = (e) => {
		r.setThumbDragging(i, !0), e(), r.setThumbDragging(i, !1);
	}, { keyboardProps: P } = S({
		shortcuts: {
			PageUp: () => N(() => {
				r.incrementThumb(i, r.pageSize);
			}),
			PageDown: () => N(() => {
				r.decrementThumb(i, r.pageSize);
			}),
			Home: () => N(() => {
				r.setThumbValue(i, r.getThumbMinValue(i));
			}),
			End: () => N(() => {
				r.setThumbValue(i, r.getThumbMaxValue(i));
			})
		},
		allowRepeats: !0
	}), { moveProps: F } = U({
		onMoveStart() {
			M.current = null, r.setThumbDragging(i, !0);
		},
		onMove({ deltaX: e, deltaY: t, pointerType: n, shiftKey: a }) {
			let { getThumbPercent: o, setThumbPercent: s, decrementThumb: c, incrementThumb: l, step: f, pageSize: p } = r;
			if (!u.current) return;
			let { width: m, height: h } = u.current.getBoundingClientRect(), g = v ? h : m;
			if (M.current ??= o(i) * g, n === "keyboard") e > 0 && j || e < 0 && !j || t > 0 ? c(i, a ? p : f) : l(i, a ? p : f);
			else {
				let n = v ? t : e;
				(v || j) && (n = -n), M.current += n, s(i, d(M.current / g, 0, 1));
			}
		},
		onMoveEnd() {
			r.setThumbDragging(i, !1);
		}
	});
	r.setThumbEditable(i, !_);
	let { focusableProps: I } = a(c(t, {
		onFocus: () => r.setFocusedThumb(i),
		onBlur: () => r.setFocusedThumb(void 0)
	}), f), L = (0, H.useRef)(void 0), R = (e) => {
		k(), L.current = e, r.setThumbDragging(i, !0), x(window, "mouseup", z, !1), x(window, "touchend", z, !1), x(window, "pointerup", z, !1);
	}, z = (e) => {
		(e.pointerId ?? e.changedTouches?.[0].identifier) === L.current && (k(), r.setThumbDragging(i, !1), C(window, "mouseup", z, !1), C(window, "touchend", z, !1), C(window, "pointerup", z, !1));
	}, B = r.getThumbPercent(i);
	(v || b === "rtl") && (B = 1 - B);
	let V = _ ? {} : c(P, F, {
		onMouseDown: (e) => {
			e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || R();
		},
		onPointerDown: (e) => {
			e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || R(e.pointerId);
		},
		onTouchStart: (e) => {
			R(e.changedTouches[0].identifier);
		}
	});
	return te(f, r.defaultValues[i], (e) => {
		r.setThumbValue(i, e);
	}), {
		inputProps: c(I, E, {
			type: "range",
			tabIndex: _ ? void 0 : 0,
			min: r.getThumbMinValue(i),
			max: r.getThumbMaxValue(i),
			step: r.step,
			value: O,
			name: m,
			form: h,
			disabled: _,
			"aria-orientation": p,
			"aria-valuetext": r.getThumbValueLabel(i),
			"aria-required": o || void 0,
			"aria-invalid": l || s === "invalid" || void 0,
			"aria-errormessage": t["aria-errormessage"],
			"aria-describedby": [w["aria-describedby"], t["aria-describedby"]].filter(Boolean).join(" "),
			"aria-details": [w["aria-details"], t["aria-details"]].filter(Boolean).join(" "),
			onChange: (e) => {
				r.setThumbValue(i, parseFloat(g(e).value));
			}
		}),
		thumbProps: {
			...V,
			style: {
				position: "absolute",
				[v ? "top" : "left"]: `${B * 100}%`,
				transform: "translate(-50%, -50%)",
				touchAction: "none"
			}
		},
		labelProps: T,
		isDragging: r.isThumbDragging(i),
		isDisabled: _,
		isFocused: A
	};
}
var ae = 0, oe = 100, se = 1;
function ce(e) {
	let { isDisabled: t = !1, minValue: n = ae, maxValue: r = oe, numberFormatter: i, step: a = se, orientation: o = "horizontal" } = e, s = (0, H.useMemo)(() => {
		let e = (r - n) / 10;
		return e = j(e, 0, e + a, a), Math.max(e, a);
	}, [
		a,
		r,
		n
	]), c = (0, H.useCallback)((e) => e?.map((t, i) => {
		let o = i === 0 ? n : e[i - 1], s = i === e.length - 1 ? r : e[i + 1];
		return j(t, o, s, a);
	}), [
		n,
		r,
		a
	]), u = (0, H.useMemo)(() => c(q(e.value)), [e.value, c]), f = (0, H.useMemo)(() => c(q(e.defaultValue) ?? [n]), [
		e.defaultValue,
		n,
		c
	]), p = le(e.value, e.defaultValue, e.onChange), m = le(e.value, e.defaultValue, e.onChangeEnd), [h, g] = l(u, f, p), [_] = (0, H.useState)(h), [v, y] = (0, H.useState)(Array(h.length).fill(!1)), b = (0, H.useRef)(Array(h.length).fill(!0)), [x, S] = (0, H.useState)(void 0), C = (0, H.useRef)(h), w = (0, H.useRef)(v), T = (e) => {
		C.current = e, g(e);
	}, E = (e) => {
		w.current = e, y(e);
	};
	function D(e) {
		return (e - n) / (r - n);
	}
	function O(e) {
		return e === 0 ? n : h[e - 1];
	}
	function k(e) {
		return e === h.length - 1 ? r : h[e + 1];
	}
	function A(e) {
		return b.current[e];
	}
	function M(e, t) {
		b.current[e] = t;
	}
	function N(e, n) {
		if (t || !A(e)) return;
		let r = O(e), i = k(e);
		n = j(n, r, i, a);
		let o = K(C.current, e, n);
		T(o);
	}
	function P(e, n) {
		if (t || !A(e)) return;
		n && (C.current = h);
		let r = w.current[e];
		w.current = K(w.current, e, n), E(w.current), m && r && !w.current.some(Boolean) && m(C.current);
	}
	let F = (0, H.useRef)(null);
	function I(e = h) {
		switch (typeof e == "number" && (e = [e]), e.length) {
			case 0: return "";
			case 1: return i.format(e[0]);
			case 2: return i.formatRange(e[0], e[1]);
			default: {
				let t = e.map((e) => i.format(e)), n = F.current;
				return (!n || n.resolvedOptions().locale !== i.resolvedOptions().locale) && (n = F.current = new Intl.ListFormat(i.resolvedOptions().locale, { type: "unit" })), n.format(t);
			}
		}
	}
	function L(e, t) {
		N(e, z(t));
	}
	function R(e) {
		return Math.round((e - n) / a) * a + n;
	}
	function z(e) {
		let t = e * (r - n) + n;
		return d(R(t), n, r);
	}
	function B(e, t = 1) {
		let i = Math.max(t, a);
		N(e, j(h[e] + i, n, r, a));
	}
	function V(e, t = 1) {
		let i = Math.max(t, a);
		N(e, j(h[e] - i, n, r, a));
	}
	return {
		values: h,
		defaultValues: e.defaultValue === void 0 ? _ : f,
		getThumbValue: (e) => h[e],
		setThumbValue: N,
		setThumbPercent: L,
		isThumbDragging: (e) => v[e],
		setThumbDragging: P,
		focusedThumb: x,
		setFocusedThumb: S,
		getThumbPercent: (e) => D(h[e]),
		getValuePercent: D,
		getThumbValueLabel: (e) => I(h[e]),
		getFormattedValue: I,
		getThumbMinValue: O,
		getThumbMaxValue: k,
		getPercentValue: z,
		isThumbEditable: A,
		setThumbEditable: M,
		incrementThumb: B,
		decrementThumb: V,
		step: a,
		pageSize: s,
		orientation: o,
		isDisabled: t
	};
}
function K(e, t, n) {
	return e[t] === n ? e : [
		...e.slice(0, t),
		n,
		...e.slice(t + 1)
	];
}
function q(e) {
	if (e != null) return Array.isArray(e) ? e : [e];
}
function le(e, t, n) {
	return (r) => {
		n?.(typeof e == "number" || typeof t == "number" ? r[0] : r);
	};
}
var ue = /* @__PURE__ */ (0, H.createContext)(null), J = /* @__PURE__ */ (0, H.createContext)(null), Y = /* @__PURE__ */ (0, H.createContext)(null), de = /* @__PURE__ */ (0, H.createContext)(null), fe = /* @__PURE__ */ (0, H.forwardRef)(function(e, t) {
	[e, t] = w(e, t, ue);
	let n = (0, H.useRef)(null), r = u(e.formatOptions), i = ce({
		...e,
		numberFormatter: r
	}), [a, o] = b(!e["aria-label"] && !e["aria-labelledby"]), { groupProps: s, trackProps: l, labelProps: d, outputProps: f } = re({
		...e,
		label: o
	}, i, n), p = E({
		...e,
		values: {
			orientation: i.orientation,
			isDisabled: i.isDisabled,
			state: i
		},
		defaultClassName: "react-aria-Slider"
	}), m = v(e, { global: !0 });
	return delete m.id, /* @__PURE__ */ H.createElement(A, { values: [
		[J, i],
		[Y, {
			...l,
			ref: n
		}],
		[de, f],
		[P, {
			...d,
			ref: a
		}]
	] }, /* @__PURE__ */ H.createElement(T.div, {
		...c(m, p, s),
		ref: t,
		slot: e.slot || void 0,
		"data-orientation": i.orientation,
		"data-disabled": i.isDisabled || void 0
	}));
}), pe = /* @__PURE__ */ (0, H.forwardRef)(function(e, t) {
	[e, t] = w(e, t, Y);
	let n = (0, H.useContext)(J), { onHoverStart: r, onHoverEnd: i, onHoverChange: a, ...o } = e, { hoverProps: s, isHovered: l } = k({
		onHoverStart: r,
		onHoverEnd: i,
		onHoverChange: a
	}), u = E({
		...e,
		defaultClassName: "react-aria-SliderTrack",
		values: {
			orientation: n.orientation,
			isDisabled: n.isDisabled,
			isHovered: l,
			state: n
		}
	});
	return /* @__PURE__ */ H.createElement(T.div, {
		...c(o, s),
		...u,
		ref: t,
		"data-hovered": l || void 0,
		"data-orientation": n.orientation || void 0,
		"data-disabled": n.isDisabled || void 0
	});
}), me = /* @__PURE__ */ (0, H.forwardRef)(function(e, t) {
	let { inputRef: n = null } = e, r = (0, H.useContext)(J), { ref: i } = m(Y), { index: a = 0 } = e, o = (0, H.useRef)(null), s = n || o, [l, u] = b(!e["aria-label"] && !e["aria-labelledby"]), { thumbProps: d, inputProps: f, labelProps: h, isDragging: g, isFocused: _, isDisabled: y } = ie({
		...e,
		index: a,
		trackRef: i,
		inputRef: s,
		label: u
	}, r), { focusProps: x, isFocusVisible: S } = p(), { hoverProps: w, isHovered: D } = k(e), O = E({
		...e,
		defaultClassName: "react-aria-SliderThumb",
		values: {
			state: r,
			isHovered: D,
			isDragging: g,
			isFocused: _,
			isFocusVisible: S,
			isDisabled: y
		}
	}), j = v(e, { global: !0 });
	return delete j.id, /* @__PURE__ */ H.createElement(T.div, {
		...c(j, d, w),
		...O,
		ref: t,
		style: {
			...d.style,
			...O.style
		},
		"data-hovered": D || void 0,
		"data-dragging": g || void 0,
		"data-focused": _ || void 0,
		"data-focus-visible": S || void 0,
		"data-disabled": y || void 0
	}, /* @__PURE__ */ H.createElement(C, null, /* @__PURE__ */ H.createElement("input", {
		ref: s,
		...c(f, x)
	})), /* @__PURE__ */ H.createElement(A, { values: [[P, {
		...h,
		ref: l
	}]] }, O.children));
}), he = /* @__PURE__ */ r("div", { target: "ew7r33m6" })({
	name: "igqoeg",
	styles: "position:relative;:focus-within:has(:focus-visible){--slider-focused:1;}"
}), ge = /* @__PURE__ */ r(fe, { target: "ew7r33m5" })(({ theme: e }) => ({
	position: "relative",
	width: "100%",
	paddingLeft: `calc(${e.sizes.sliderThumb} / 2)`,
	paddingRight: `calc(${e.sizes.sliderThumb} / 2)`
}), ""), _e = /* @__PURE__ */ r(pe, { target: "ew7r33m4" })(({ theme: e }) => ({
	position: "relative",
	paddingTop: `calc(${e.sizes.minElementHeight} / 2)`,
	paddingBottom: `calc(${e.sizes.minElementHeight} / 2)`
}), ""), ve = /* @__PURE__ */ r(me, { target: "ew7r33m3" })(({ theme: e }) => ({
	alignItems: "center",
	backgroundColor: e.colors.primary,
	borderTopLeftRadius: "100%",
	borderTopRightRadius: "100%",
	borderBottomLeftRadius: "100%",
	borderBottomRightRadius: "100%",
	borderTopStyle: "none",
	borderBottomStyle: "none",
	borderRightStyle: "none",
	borderLeftStyle: "none",
	display: "flex",
	justifyContent: "center",
	height: e.sizes.sliderThumb,
	width: e.sizes.sliderThumb,
	top: "50%",
	boxShadow: e.shadows.none,
	"&[data-disabled]": { backgroundColor: e.colors.gray60 },
	"&[data-dragging], &[data-focus-visible]": { boxShadow: e.shadows.focusRing },
	":focus": { outline: "none" }
}), ""), ye = /* @__PURE__ */ r("div", { target: "ew7r33m2" })(({ disabled: e, theme: t }) => ({
	fontFamily: t.genericFonts.bodyFont,
	fontSize: t.fontSizes.sm,
	color: e ? t.colors.gray60 : t.colors.primary,
	top: "-1.6em",
	position: "absolute",
	whiteSpace: "nowrap",
	backgroundColor: t.colors.transparent,
	lineHeight: t.lineHeights.base,
	fontWeight: t.fontWeights.normal,
	pointerEvents: "none"
}), ""), be = /* @__PURE__ */ r("div", { target: "ew7r33m1" })(({ theme: e, isDisabled: t, fillStart: n, fillEnd: r }) => ({
	position: "absolute",
	height: e.spacing.twoXS,
	left: 0,
	right: 0,
	top: "50%",
	transform: "translateY(-50%)",
	pointerEvents: "none",
	background: t ? e.colors.darkenedBgMix25 : `linear-gradient(
          to right,
          ${e.colors.darkenedBgMix25} ${n}%,
          ${e.colors.primary} ${n}%,
          ${e.colors.primary} ${r}%,
          ${e.colors.darkenedBgMix25} ${r}%)`
}), ""), xe = /* @__PURE__ */ r("div", { target: "ew7r33m0" })(({ theme: e, isHovered: t, isDisabled: n }) => ({
	position: "absolute",
	left: 0,
	right: 0,
	top: "100%",
	display: "flex",
	justifyContent: "space-between",
	pointerEvents: "none",
	marginTop: `-${e.spacing.md}`,
	fontSize: e.fontSizes.sm,
	lineHeight: e.lineHeights.base,
	fontWeight: e.fontWeights.normal,
	color: n ? e.colors.fadedText40 : e.colors.fadedText60,
	opacity: t ? 1 : "var(--slider-focused, 0)",
	transition: t ? "none" : "opacity 300ms 200ms"
}), "");
function Se({ minLabel: e, maxLabel: t, isHovered: n, isDisabled: r }) {
	return /* @__PURE__ */ F.jsxs(xe, {
		"data-testid": "stSliderTickBar",
		isHovered: n,
		isDisabled: r,
		children: [/* @__PURE__ */ F.jsx(M, {
			source: e,
			allowHTML: !1,
			inheritFont: !0,
			isLabel: !0
		}), /* @__PURE__ */ F.jsx(M, {
			source: t,
			allowHTML: !1,
			inheritFont: !0,
			isLabel: !0
		})]
	});
}
function X(e) {
	return e.type === N.Type.SELECT_SLIDER;
}
function Z(e, t, n) {
	return e.map((e, r) => {
		let i = t.indexOf(e);
		return i >= 0 ? i : n[r] ?? 0;
	});
}
function Ce(e, t) {
	return e.map((e) => t[e] ?? "");
}
var we = (e) => Array.isArray(e) ? e : [e];
function Te({ disabled: e, element: t, widgetMgr: n, fragmentId: r }) {
	let a = t.queryParamKey ? {
		paramKey: t.queryParamKey,
		valueType: X(t) ? "string_array_value" : "double_array_value",
		clearable: !1,
		urlFormat: "repeated",
		urlDefault: X(t) ? Ce(t.default, t.options) : void 0,
		dateType: Ae(t) ? je(t) : void 0
	} : void 0, [s, c] = ee({
		getStateFromWidgetMgr: Ee,
		getDefaultStateFromProto: De,
		getCurrStateFromProto: Oe,
		updateWidgetMgrState: ke,
		element: t,
		widgetMgr: n,
		fragmentId: r,
		formClearBehavior: "resetValueOnly",
		queryParamBinding: a
	}), [l, u] = (0, H.useState)(s), [d, f] = (0, H.useState)(!1), [p, m] = (0, H.useState)(!1), h = (0, H.useCallback)(() => f(!0), []), g = (0, H.useCallback)(() => f(!1), []), _ = (0, H.useRef)(null), v = (0, H.useRef)([]), y = (0, H.useRef)([]), b = l.map((e) => Q(e, t)), x = Q(t.min, t), S = Q(t.max, t);
	(0, H.useEffect)(() => {
		u(s);
	}, [s]), i(() => {
		if (!X(t)) return;
		let e = n.getStringArrayValue(t);
		if (e === void 0) return;
		let r = Z(e, t.options, t.default);
		u(r);
	}, [t.options], (e, t) => O(e[0], t[0]));
	let C = (0, H.useCallback)((e) => {
		c({
			value: we(e),
			fromUser: !0
		}), m(!1);
	}, [c]), w = (0, H.useCallback)((e) => {
		u(we(e)), m(!0);
	}, []);
	return (0, H.useLayoutEffect)(() => {
		v.current.forEach((e, t) => {
			if (!e) return;
			let n = e.querySelector("input[type=\"range\"]");
			n && b[t] !== void 0 && n.setAttribute("aria-valuetext", b[t]);
		}), Ne(_.current ?? null, v.current[0] ?? null, v.current[1] ?? null, y.current[0] ?? null, y.current[1] ?? null);
	}), /* @__PURE__ */ F.jsxs(he, {
		ref: _,
		className: "stSlider",
		"data-testid": "stSlider",
		onMouseEnter: h,
		onMouseLeave: g,
		children: [/* @__PURE__ */ F.jsx(B, {
			label: t.label,
			disabled: e,
			labelVisibility: o(t.labelVisibility?.value),
			children: t.help && /* @__PURE__ */ F.jsx(V, {
				content: t.help,
				label: t.label
			})
		}), /* @__PURE__ */ F.jsx(ge, {
			minValue: t.min,
			maxValue: t.max,
			step: t.step,
			value: Me(l, t),
			onChange: w,
			onChangeEnd: C,
			isDisabled: e,
			"aria-label": t.label,
			children: /* @__PURE__ */ F.jsx(_e, { children: ({ state: n }) => {
				let r = n.values.length > 1, i = r ? n.getThumbPercent(0) * 100 : 0, a = n.getThumbPercent(+!!r) * 100;
				return /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
					/* @__PURE__ */ F.jsx(be, {
						isDisabled: e,
						fillStart: i,
						fillEnd: a
					}),
					n.values.map((r, i) => /* @__PURE__ */ F.jsx(ve, {
						index: i,
						ref: (e) => {
							v.current[i] = e;
						},
						"aria-label": n.values.length > 1 ? `${t.label} — ${i === 0 ? "start" : "end"}` : t.label,
						children: /* @__PURE__ */ F.jsx(ye, {
							"data-testid": "stSliderThumbValue",
							disabled: e,
							ref: (e) => {
								y.current[i] = e;
							},
							children: /* @__PURE__ */ F.jsx(M, {
								source: b[i] ?? "",
								allowHTML: !1,
								inheritFont: !0,
								isLabel: !0
							})
						})
					}, i)),
					/* @__PURE__ */ F.jsx(Se, {
						minLabel: x,
						maxLabel: S,
						isHovered: d || p,
						isDisabled: e
					})
				] });
			} })
		})]
	});
}
function Ee(e, t) {
	if (X(t)) {
		let n = e.getStringArrayValue(t);
		return n === void 0 ? void 0 : Z(n, t.options, t.default);
	}
	return e.getDoubleArrayValue(t);
}
function De(e) {
	return e.default;
}
function Oe(e) {
	if (X(e)) {
		let t = e.rawValue;
		return t && t.length > 0 ? Z(t, e.options, e.default) : e.default;
	}
	return e.value;
}
function ke(e, t, n, r) {
	let i = {
		formId: e.formId,
		fragmentId: r,
		fromUser: n.fromUser,
		...e.ignoreRerun ? { triggerRerun: !1 } : {}
	};
	if (X(e)) {
		let r = Ce(n.value, e.options);
		t.setStringArrayValue(e.id, r, i);
	} else t.setDoubleArrayValue(e.id, n.value, i);
}
function Ae(e) {
	let { dataType: t } = e;
	return t === N.DataType.DATETIME || t === N.DataType.DATE || t === N.DataType.TIME;
}
function je(e) {
	let { dataType: t } = e;
	return t === N.DataType.DATE ? "date" : t === N.DataType.TIME ? "time" : "datetime";
}
function Q(e, t) {
	let { format: n, options: r } = t;
	if (r.length > 0) return r[e] ?? "";
	if (Ae(t)) {
		let r = R.utc(e / 1e3);
		return L(r, n, je(t));
	}
	return z(e, n);
}
function Me(e, t) {
	let { min: n, max: r } = t, i = Math.min(Math.max(e[0], n), r), a = Math.min(Math.max(e.length > 1 ? e[1] : e[0], i), r);
	return e.length > 1 ? [i, a] : [i];
}
function Ne(e, t, n, r, i) {
	!e || !t || !r || ($(e, t, r), n && i && ($(e, n, i), Pe(e, t, n, r, i)));
}
function $(e, t, n) {
	let r = e.getBoundingClientRect(), i = t.getBoundingClientRect(), a = n.getBoundingClientRect(), o = i.width / 2, s = i.left + o, c = Math.round(s - a.width / 2) < Math.round(r.left), l = Math.round(s + a.width / 2) > Math.round(r.right);
	c ? (n.style.left = `${r.left - s + o}px`, n.style.right = "") : l ? (n.style.left = "", n.style.right = `${s + o - r.right}px`) : (n.style.left = "", n.style.right = "");
}
function Pe(e, t, n, r, i) {
	let a = e.getBoundingClientRect(), o = t.getBoundingClientRect(), s = n.getBoundingClientRect(), c = r.getBoundingClientRect(), l = i.getBoundingClientRect(), u = a.left + a.width / 2, d = o.left + o.width / 2, f = s.left + s.width / 2, p = d - c.width / 2 >= a.left, m = f + l.width / 2 <= a.right, h = o.left - c.width >= a.left, g = s.right + l.width <= a.right, _ = p ? c.width / 2 : c.width, v = m ? l.width / 2 : l.width, y = d + _;
	if (f - v - y > 24) {
		$(e, t, r), $(e, n, i);
		return;
	}
	if (h && g) {
		r.style.left = "", r.style.right = `${Math.round(o.width)}px`, i.style.left = `${Math.round(s.width)}px`, i.style.right = "";
		return;
	}
	d < u ? ($(e, t, r), i.style.left = `${Math.round(d + _ + 24 - f + s.width / 2)}px`, i.style.right = "") : ($(e, n, i), r.style.left = "", r.style.right = `${Math.round(d - f + v + 24 + o.width / 2)}px`);
}
var Fe = ne((0, H.memo)(Te));
//#endregion
export { Fe as default };

//# sourceMappingURL=Slider-Cbc6kPhU-fxTBcD91.js.map