import { Co as e, Di as t, Rn as n, Wn as r, ds as i, ms as a, za as o } from "./index-B1FrxEMd-BsPMjC5n.js";
import { t as s } from "./useBasicWidgetState-DVivDFu--yiQ4kKRs.js";
//#region ../react/build/Feedback-DKeqK8yO.js
var c = /* @__PURE__ */ a(i(), 1), l = /* @__PURE__ */ t("div", { target: "e1b8h3j92" })(({ containerWidth: e }) => ({
	width: e ? "100%" : "auto",
	minWidth: "fit-content"
}), ""), u = /* @__PURE__ */ t("div", { target: "e1b8h3j91" })(({ theme: e }) => ({
	display: "flex",
	flexWrap: "nowrap",
	gap: e.spacing.threeXS,
	minWidth: "fit-content"
}), ""), d = /* @__PURE__ */ t("button", { target: "e1b8h3j90" })(({ theme: e, isSelected: t }) => ({
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	padding: e.spacing.threeXS,
	margin: e.spacing.none,
	backgroundColor: e.colors.transparent,
	color: t ? e.colors.bodyText : e.colors.fadedText60,
	border: "none",
	borderRadius: e.radii.button,
	cursor: "pointer",
	userSelect: "none",
	minHeight: "unset",
	flex: "0 0 fit-content",
	"&:focus": {
		boxShadow: "none",
		outline: "none"
	},
	"&:focus-visible": { boxShadow: e.shadows.focusRing },
	"&:hover:not(:disabled)": { color: e.colors.bodyText },
	"&:disabled": {
		color: t ? e.colors.fadedText40 : e.colors.fadedText10,
		cursor: "not-allowed",
		img: { opacity: .4 }
	}
}), ""), f = [":material/thumb_up:", ":material/thumb_down:"], p = [
	":material/sentiment_sad:",
	":material/sentiment_dissatisfied:",
	":material/sentiment_neutral:",
	":material/sentiment_satisfied:",
	":material/sentiment_very_satisfied:"
], m = ":material/star:", h = ":material/star_filled:", g = 5;
function _(e) {
	switch (e) {
		case r.FeedbackType.FACES: return p.map((e, t) => ({
			icon: e,
			selectedIcon: e,
			value: t
		}));
		case r.FeedbackType.STARS: return Array.from({ length: g }, (e, t) => ({
			icon: m,
			selectedIcon: h,
			value: t
		}));
		default: return [{
			icon: f[0],
			selectedIcon: f[0],
			value: 1
		}, {
			icon: f[1],
			selectedIcon: f[1],
			value: 0
		}];
	}
}
function v(e, t) {
	switch (t) {
		case r.FeedbackType.THUMBS: return e === 1 ? "Thumbs up" : "Thumbs down";
		case r.FeedbackType.FACES: return [
			"Very dissatisfied",
			"Dissatisfied",
			"Neutral",
			"Satisfied",
			"Very satisfied"
		][e] ?? `Rating ${e + 1}`;
		case r.FeedbackType.STARS: return `${e + 1} out of ${g} stars`;
		default: return `Rating ${e + 1}`;
	}
}
function y(e, t, n) {
	return t === null ? !1 : n === r.FeedbackType.STARS ? e <= t : e === t;
}
function b(e, t) {
	let n = e.getStringValue(t);
	if (n !== void 0) return n === "" ? null : Number.parseInt(n, 10);
}
function x(e) {
	return e.default ?? null;
}
function S(e) {
	return e.value ?? null;
}
function C(e, t, n, r) {
	let i = n.value === null ? "" : String(n.value);
	t.setStringValue(e.id, i, {
		formId: e.formId,
		fragmentId: r,
		fromUser: n.fromUser
	});
}
function w(t) {
	let { disabled: r, element: i, fragmentId: a, widgetMgr: f, widthConfig: p } = t, { type: m } = i, [h, g] = s({
		getStateFromWidgetMgr: b,
		getDefaultStateFromProto: x,
		getCurrStateFromProto: S,
		updateWidgetMgrState: C,
		element: i,
		widgetMgr: f,
		fragmentId: a,
		formClearBehavior: "resetValueOnly"
	}), w = e(p), T = (0, c.useMemo)(() => _(m), [m]), E = (0, c.useRef)([]), D = (0, c.useCallback)((e) => {
		g({
			value: h === e ? null : e,
			fromUser: !0
		});
	}, [h, g]), O = (0, c.useCallback)((e, t) => {
		let n;
		switch (e.key) {
			case "ArrowLeft":
			case "ArrowUp":
				e.preventDefault(), n = t > 0 ? t - 1 : T.length - 1;
				break;
			case "ArrowRight":
			case "ArrowDown":
				e.preventDefault(), n = t < T.length - 1 ? t + 1 : 0;
				break;
			case " ":
			case "Enter":
				e.preventDefault(), D(T[t].value);
				return;
			default: return;
		}
		E.current[n]?.focus();
	}, [T, D]);
	return /* @__PURE__ */ o.jsx(l, {
		className: "stFeedback",
		"data-testid": "stFeedback",
		containerWidth: w,
		children: /* @__PURE__ */ o.jsx(u, {
			role: "radiogroup",
			"aria-label": "Feedback rating",
			children: T.map((e, t) => {
				let i = y(e.value, h, m), a = i ? e.selectedIcon : e.icon;
				return /* @__PURE__ */ o.jsx(d, {
					ref: (e) => {
						E.current[t] = e;
					},
					type: "button",
					role: "radio",
					"aria-checked": h === e.value,
					"aria-label": v(e.value, m),
					tabIndex: h === e.value || h === null && t === 0 ? 0 : -1,
					disabled: r,
					isSelected: i,
					onClick: () => D(e.value),
					onKeyDown: (e) => O(e, t),
					"data-testid": i ? "stFeedbackButtonActive" : "stFeedbackButton",
					children: /* @__PURE__ */ o.jsx(n, {
						iconValue: a,
						size: "lg"
					})
				}, e.value);
			})
		})
	});
}
var T = (0, c.memo)(w);
//#endregion
export { T as default };

//# sourceMappingURL=Feedback-DKeqK8yO-CVWGZkys.js.map