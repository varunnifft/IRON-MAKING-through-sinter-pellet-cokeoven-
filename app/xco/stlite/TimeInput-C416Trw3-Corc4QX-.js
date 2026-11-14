import { $i as e, Di as t, Ha as n, Ma as r, O as i, Ta as a, Ui as o, Ur as s, Vo as c, Wo as l, Zn as ee, ds as u, ir as d, ms as f, ur as te, wi as ne, wr as p, za as m } from "./index-B1FrxEMd-BsPMjC5n.js";
import { t as h } from "./WidgetLabel--oJQrsAd-IbrOPlTn.js";
import { t as g } from "./WidgetLabelHelpIcon-CWnOrY3T-BtbNCfjY.js";
import { t as _ } from "./useBasicWidgetState-DVivDFu--yiQ4kKRs.js";
import { t as re } from "./Cancel.esm-CtMNidjq-CXB-pKHk.js";
import { t as ie } from "./ErrorOutline.esm-BTDiocCk-BcENiBMZ.js";
import { t as ae } from "./InputInstructions-CbZRC43y-BKqlI7Nl.js";
import { _ as v, a as y, b, f as x } from "./DateField-BaLw2J5b-CSjqjxpp.js";
//#region ../react/build/TimeInput-C416Trw3.js
var S = /* @__PURE__ */ f(u(), 1), oe = /* @__PURE__ */ t("div", { target: "e1ipygm17" })({
	name: "1d3w5wq",
	styles: "width:100%"
}), se = /* @__PURE__ */ t(y, { target: "e1ipygm16" })({
	name: "82a6rk",
	styles: "flex:1"
}), ce = /* @__PURE__ */ t("div", { target: "e1ipygm15" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	width: "100%",
	height: e.sizes.minElementHeight,
	borderRadius: e.radii.default,
	borderWidth: e.sizes.borderWidth,
	borderStyle: "solid",
	borderColor: o(e.colors, !1),
	backgroundColor: e.colors.secondaryBg,
	cursor: "text",
	fontSize: e.fontSizes.sm,
	lineHeight: e.lineHeights.inputWidget,
	"&:focus-within": {
		borderColor: o(e.colors, !0),
		outline: "none"
	},
	"&[data-has-error]": {
		borderColor: e.colors.redTextColor,
		backgroundColor: e.colors.redBackgroundColor
	},
	"&[data-disabled]": {
		color: e.colors.fadedText40,
		cursor: "not-allowed"
	}
}), ""), le = /* @__PURE__ */ t(v, { target: "e1ipygm14" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	flex: 1,
	paddingTop: e.spacing.sm,
	paddingBottom: e.spacing.sm,
	paddingLeft: `calc(${e.spacing.sm} + ${e.sizes.tagMarginInsideBorder})`,
	paddingRight: e.spacing.sm,
	outline: "none"
}), ""), C = /* @__PURE__ */ t(x, { target: "e1ipygm13" })(({ theme: t }) => {
	let n = e(t.colors.primary) > .5;
	return {
		paddingLeft: t.spacing.threeXS,
		paddingRight: t.spacing.threeXS,
		borderRadius: t.radii.sm,
		color: t.colors.bodyText,
		caretColor: "transparent",
		outline: "none",
		fontWeight: t.fontWeights.normal,
		"&[data-type=literal]": {
			color: t.colors.fadedText60,
			padding: 0
		},
		"&[data-placeholder]": { color: t.colors.fadedText60 },
		"&[data-focused]": {
			backgroundColor: t.colors.primary,
			color: n ? t.colors.black : t.colors.white
		},
		"&[data-disabled]": { color: "inherit" }
	};
}, ""), w = /* @__PURE__ */ t("div", { target: "e1ipygm12" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	color: e.colors.redTextColor,
	paddingLeft: e.spacing.twoXS,
	paddingRight: e.spacing.sm,
	flexShrink: 0
}), ""), T = /* @__PURE__ */ t("button", { target: "e1ipygm11" })(({ theme: e }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	background: "none",
	border: "none",
	cursor: "pointer",
	padding: `0 ${e.spacing.twoXS}`,
	marginRight: e.spacing.sm,
	color: e.colors.grayTextColor,
	flexShrink: 0,
	"&:hover": { color: e.colors.bodyText },
	"&:focus-visible": {
		outline: `${e.sizes.borderWidth} solid ${e.colors.primary}`,
		borderRadius: e.radii.sm
	}
}), ""), E = /* @__PURE__ */ t("span", { target: "e1ipygm10" })({
	name: "1dja9su",
	styles: "position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0"
});
function D(e) {
	return e % 60 == 0 ? "minute" : "second";
}
function O(e) {
	let [t, n, r = 0] = e.split(":").map(Number);
	return new b(t, n, r);
}
function ue(e, t) {
	let n = String(e.hour).padStart(2, "0"), r = String(e.minute).padStart(2, "0");
	return t === "second" ? `${n}:${r}:${String(e.second).padStart(2, "0")}` : `${n}:${r}`;
}
function k({ disabled: e, element: t, widgetMgr: o, fragmentId: u }) {
	let f = t.queryParamKey ? {
		paramKey: t.queryParamKey,
		valueType: "string_value",
		clearable: !t.default
	} : void 0, v = (0, S.useRef)(() => {}), y = (0, S.useCallback)(() => {
		v.current();
	}, []), [x, k] = _({
		getStateFromWidgetMgr: de,
		getDefaultStateFromProto: fe,
		getCurrStateFromProto: pe,
		updateWidgetMgrState: A,
		element: t,
		widgetMgr: o,
		fragmentId: u,
		queryParamBinding: f,
		formClearBehavior: "resetValueAndRunCallback",
		onFormCleared: y
	}), [j, M] = (0, S.useState)(x), [N, P] = (0, S.useState)(!1), [F, I] = (0, S.useState)(!1), [L, R] = (0, S.useState)(null), [z, B] = (0, S.useState)(null);
	v.current = () => {
		M(t.default ?? null), P(!1), R(null), B(null);
	};
	let [V, me] = (0, S.useState)(x);
	V !== x && (me(x), R(null), B(null), j === V && M(x));
	let H = (0, S.useRef)(j);
	H.current = j;
	let U = (0, S.useRef)(x);
	U.current = x;
	let W = (0, S.useRef)(!1), G = `${(0, S.useId)()}-validation-error`, K = l(), { locale: q } = (0, S.useContext)(d), J = t.step ? Number(t.step) : 900, Y = r(t.default) && !e, X = a({ formId: t.formId }), Z = J / 60, Q = J / 3600, { width: he, elementRef: ge } = c(), _e = F && he > ne(K.breakpoints.hideWidgetDetails), ve = X ? o.allowFormEnterToSubmit(t.formId) : N, ye = t.format === "localized" ? void 0 : t.format === "12h" ? 12 : 24, be = (0, S.useMemo)(() => {
		if (t.format === "12h") return !0;
		if (t.format === "localized") {
			let e = new Intl.DateTimeFormat(q, { hour: "numeric" }).resolvedOptions().hourCycle;
			return e === "h11" || e === "h12";
		}
		return !1;
	}, [t.format, q]), $ = (0, S.useCallback)((e) => {
		if (e === null && !Y) {
			W.current = !1, R(null), B(null);
			return;
		}
		let n = D(J), r = e ? ue(e, n) : null;
		M(r), W.current ? (W.current = !1, P(!1), k({
			value: r,
			fromUser: !0
		}), X && A(t, o, {
			value: r,
			fromUser: !0
		}, u)) : P(!0), R(null), B(null);
	}, [
		Y,
		k,
		J,
		X,
		t,
		o,
		u
	]), xe = (0, S.useCallback)((e) => {
		e.currentTarget.contains(e.relatedTarget) || (I(!1), B(null), R(null), P(!1), H.current !== U.current && (k({
			value: H.current,
			fromUser: !0
		}), X && A(t, o, {
			value: H.current,
			fromUser: !0
		}, u)));
	}, [
		k,
		X,
		t,
		o,
		u
	]), Se = (0, S.useCallback)(() => {
		I(!0);
	}, []), Ce = (0, S.useCallback)(() => {
		M(null), P(!1), R(null), B(null), U.current !== null && (k({
			value: null,
			fromUser: !0
		}), X && A(t, o, {
			value: null,
			fromUser: !0
		}, u));
	}, [
		k,
		X,
		t,
		o,
		u
	]), we = (0, S.useCallback)((t) => {
		if (e) return;
		let n = t.clipboardData.getData("text").trim(), r = D(J), i = /^(\d{1,2}):(\d{2}):(\d{2})$/.exec(n), a = i ? null : /^(\d{1,2}):(\d{2})$/.exec(n), o = !i && !a ? /^(\d{1,2})(\d{2})$/.exec(n) : null, s = i ?? a ?? o;
		if (s) {
			let e = Number(s[1]), n = Number(s[2]), i = s[3] === void 0 ? 0 : Number(s[3]);
			if (t.preventDefault(), e > 23 || n > 59 || i > 59) {
				B({
					hour: String(e).padStart(2, "0"),
					minute: String(n).padStart(2, "0"),
					second: r === "second" ? String(i).padStart(2, "0") : void 0
				});
				let t = ["Hours must be 0–23", "minutes 0–59"];
				r === "second" && t.push("seconds 0–59"), R(`Time is out of range. ${t.join(", ")}.`);
				return;
			}
			W.current = !0, $(r === "second" ? new b(e, n, i) : new b(e, n));
			return;
		}
		if (/^\d{1,2}$/.exec(n)) {
			let e = t.target;
			if (e.getAttribute("role") !== "spinbutton") return;
			let i = e.getAttribute("data-type"), a = Number(n), o = j ? O(j) : null, s = o ? String(o.hour).padStart(2, "0") : "00", c = o ? String(o.minute).padStart(2, "0") : "00", l = o ? String(o.second).padStart(2, "0") : "00";
			if (t.preventDefault(), i === "hour" && a <= 23) W.current = !0, $(new b(a, o ? o.minute : 0, r === "second" && o ? o.second : 0));
			else if (i === "minute" && a <= 59) W.current = !0, $(new b(o ? o.hour : 0, a, r === "second" && o ? o.second : 0));
			else if (i === "second" && a <= 59) W.current = !0, $(new b(o ? o.hour : 0, o ? o.minute : 0, a));
			else {
				let e = i === "hour" ? "Hours must be 0–23." : i === "second" ? "Seconds must be 0–59." : "Minutes must be 0–59.";
				B({
					hour: i === "hour" ? String(a).padStart(2, "0") : s,
					minute: i === "minute" ? String(a).padStart(2, "0") : c,
					second: r === "second" ? i === "second" ? String(a).padStart(2, "0") : l : void 0
				}), R(`Value is out of range for ${i}. ${e}`);
			}
			return;
		}
		n.includes(":") && (t.preventDefault(), R(r === "second" ? "Invalid time format. Please use HH:MM:SS or HH:MM." : "Invalid time format. Please use HH:MM."));
	}, [
		e,
		j,
		$,
		J
	]), Te = (0, S.useCallback)((n) => {
		let r = n.target;
		if (r.getAttribute("role") !== "spinbutton" || e) return;
		if (n.key === "Enter") {
			B(null), R(null), P(!1), H.current !== U.current && (k({
				value: H.current,
				fromUser: !0
			}), X && A(t, o, {
				value: H.current,
				fromUser: !0
			}, u)), !L && o.allowFormEnterToSubmit(t.formId) && o.submitForm(t.formId, u);
			return;
		}
		if (n.key !== "ArrowUp" && n.key !== "ArrowDown") return;
		if (z) {
			n.preventDefault(), n.stopPropagation(), n.nativeEvent.stopImmediatePropagation(), B(null), R(null);
			return;
		}
		if (!j) return;
		W.current = !0;
		let i = r.getAttribute("data-type"), a = n.key === "ArrowUp", s = O(j);
		if (i === "minute" && J % 60 == 0) {
			if (!Number.isInteger(Z) || Z <= 1) return;
			n.preventDefault(), n.stopPropagation(), n.nativeEvent.stopImmediatePropagation();
			let e = s.hour * 60 + s.minute, t = a ? Math.floor(e / Z) * Z + Z : Math.ceil(e / Z) * Z - Z, r = t >= 1440 ? 0 : t < 0 ? Math.floor(1439 / Z) * Z : t;
			$(new b(Math.floor(r / 60), r % 60));
		} else if (i === "hour" && J % 3600 == 0) {
			if (!Number.isInteger(Q) || Q <= 1) return;
			n.preventDefault(), n.stopPropagation(), n.nativeEvent.stopImmediatePropagation();
			let e = a ? Math.floor(s.hour / Q) * Q + Q : Math.ceil(s.hour / Q) * Q - Q, t = e >= 24 ? 0 : e < 0 ? Math.floor(23 / Q) * Q : e;
			$(new b(t, 0));
		} else if (J % 60 != 0 && J > 1) {
			if (i !== "hour" && i !== "minute" && i !== "second") return;
			n.preventDefault(), n.stopPropagation(), n.nativeEvent.stopImmediatePropagation();
			let e = s.hour * 3600 + s.minute * 60 + s.second, t;
			if (i === "second") t = a ? Math.floor(e / J) * J + J : Math.ceil(e / J) * J - J;
			else {
				let n = i === "hour" ? 3600 : 60;
				t = a ? Math.ceil((e + n) / J) * J : Math.floor((e - n) / J) * J;
			}
			let r = (t % 86400 + 86400) % 86400;
			$(new b(Math.floor(r / 3600), Math.floor(r % 3600 / 60), r % 60));
		}
	}, [
		e,
		j,
		z,
		L,
		J,
		Z,
		Q,
		$,
		k,
		X,
		t,
		o,
		u
	]);
	return /* @__PURE__ */ m.jsxs("div", {
		className: "stTimeInput",
		"data-testid": "stTimeInput",
		ref: ge,
		children: [
			/* @__PURE__ */ m.jsx(h, {
				label: t.label,
				disabled: e,
				labelVisibility: n(t.labelVisibility?.value),
				children: t.help && /* @__PURE__ */ m.jsx(g, {
					content: t.help,
					label: t.label
				})
			}),
			/* @__PURE__ */ m.jsx(oe, { children: /* @__PURE__ */ m.jsxs(ce, {
				"data-testid": "stTimeInputTimeDisplay",
				"data-disabled": e || void 0,
				onFocus: Se,
				onBlur: xe,
				"data-has-error": L ? "" : void 0,
				onKeyDownCapture: Te,
				onPaste: we,
				children: [
					/* @__PURE__ */ m.jsx(i, {
						locale: q,
						children: /* @__PURE__ */ m.jsx(se, {
							"aria-label": t.label,
							"aria-describedby": L ? G : void 0,
							isInvalid: !!L,
							value: r(j) ? null : O(j),
							onChange: $,
							granularity: D(J),
							hourCycle: ye,
							shouldForceLeadingZeros: !0,
							isDisabled: e,
							children: /* @__PURE__ */ m.jsx(le, { children: (e) => /* @__PURE__ */ m.jsx(C, {
								segment: e,
								children: ({ text: e, isPlaceholder: t, type: n }) => {
									if (z) {
										if (n === "hour") return z.hour;
										if (n === "minute") return z.minute;
										if (n === "second" && z.second) return z.second;
									}
									return t ? n === "hour" ? be ? "hh" : "HH" : n === "minute" ? "mm" : n === "second" ? "ss" : e : e;
								}
							}) })
						})
					}),
					L && /* @__PURE__ */ m.jsx(w, {
						"data-testid": "stTimeInputError",
						children: /* @__PURE__ */ m.jsx(s, {
							content: /* @__PURE__ */ m.jsx(p, {
								source: `**Error**: ${L}`,
								allowHTML: !1
							}),
							placement: te.TOP_RIGHT,
							error: !0,
							children: /* @__PURE__ */ m.jsx(ee, {
								content: ie,
								size: "base"
							})
						})
					}),
					Y && (!r(j) || z) && /* @__PURE__ */ m.jsx(T, {
						type: "button",
						onClick: Ce,
						"aria-label": "Clear time",
						"data-testid": "stTimeInputClearButton",
						tabIndex: -1,
						onMouseDown: (e) => e.preventDefault(),
						children: /* @__PURE__ */ m.jsx(re, {
							size: K.iconSizes.base,
							"aria-hidden": "true"
						})
					}),
					L && /* @__PURE__ */ m.jsx(E, {
						id: G,
						role: "alert",
						children: z ? `Error: time ${z.hour}:${z.minute}${z.second ? `:${z.second}` : ""} is invalid. ${L}` : `Error: ${L}`
					})
				]
			}) }),
			_e && /* @__PURE__ */ m.jsx(ae, {
				dirty: N,
				value: j ?? "",
				inForm: X,
				allowEnterToSubmit: ve
			})
		]
	});
}
function de(e, t) {
	let n = e.getStringValue(t);
	if (n !== void 0) return n ?? null;
}
function fe(e) {
	return e.default ?? null;
}
function pe(e) {
	return e.value ?? null;
}
function A(e, t, n, r) {
	t.setStringValue(e.id, n.value, {
		formId: e.formId,
		fragmentId: r,
		fromUser: n.fromUser,
		...e.ignoreRerun ? { triggerRerun: !1 } : {}
	});
}
var j = (0, S.memo)(k);
//#endregion
export { j as default };

//# sourceMappingURL=TimeInput-C416Trw3-Corc4QX-.js.map