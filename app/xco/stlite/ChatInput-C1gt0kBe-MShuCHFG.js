import { Bn as e, Di as t, En as n, Gn as r, Gr as i, Li as a, Ma as o, Mi as s, Rn as c, Ur as l, Vo as u, Wa as d, Wo as f, Xr as p, Zn as m, _r as ee, cs as te, ds as h, gn as g, ii as _, kn as ne, ms as v, ss as re, ur as ie, vr as y, wi as ae, yi as oe, za as b } from "./index-B1FrxEMd-BsPMjC5n.js";
import { t as se } from "./useWaveformController-Buqp-OPP-rNN6ATlZ.js";
import { t as ce } from "./zip-DFW5sP7Z-DCXENPDG.js";
import { t as x } from "./UploadFileInfo-DdcsXhjv-C0F82PE-.js";
import { a as le, d as S, h as ue, i as de, m as fe, n as C, o as pe, p as me, s as he } from "./utils-KJzGoNUG-DTAUhUPK.js";
import { t as ge } from "./InputInstructions-CbZRC43y-BKqlI7Nl.js";
import { t as _e } from "./useTextInputAutoExpand-DMMYfD-T-DIVuO6XL.js";
import { t as ve } from "./inputUtils-DCYiajnz-DpM8zsby.js";
//#region ../react/build/ChatInput-C1gt0kBe.js
var w = /* @__PURE__ */ v(h(), 1), ye = /* @__PURE__ */ w.forwardRef(function(t, n) {
	return /* @__PURE__ */ w.createElement(e, p({
		iconAttrs: {
			fill: "currentColor",
			xmlns: "http://www.w3.org/2000/svg"
		},
		iconVerticalAlign: "middle",
		iconViewBox: "0 0 24 24"
	}, t, { ref: n }), /* @__PURE__ */ w.createElement("path", {
		fill: "none",
		d: "M0 0h24v24H0V0z"
	}), /* @__PURE__ */ w.createElement("path", { d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" }));
});
ye.displayName = "MicNone";
var be = /* @__PURE__ */ w.forwardRef(function(t, n) {
	return /* @__PURE__ */ w.createElement(e, p({
		iconAttrs: {
			fill: "currentColor",
			xmlns: "http://www.w3.org/2000/svg"
		},
		iconVerticalAlign: "middle",
		iconViewBox: "0 0 24 24"
	}, t, { ref: n }), /* @__PURE__ */ w.createElement("rect", {
		width: 24,
		height: 24,
		fill: "none"
	}), /* @__PURE__ */ w.createElement("path", { d: "M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" }));
});
be.displayName = "Add";
var xe = /* @__PURE__ */ w.forwardRef(function(t, n) {
	return /* @__PURE__ */ w.createElement(e, p({
		iconAttrs: {
			fill: "currentColor",
			xmlns: "http://www.w3.org/2000/svg"
		},
		iconVerticalAlign: "middle",
		iconViewBox: "0 0 24 24"
	}, t, { ref: n }), /* @__PURE__ */ w.createElement("path", {
		fill: "none",
		d: "M0 0h24v24H0V0z"
	}), /* @__PURE__ */ w.createElement("path", { d: "M13 19V7.83l4.88 4.88c.39.39 1.03.39 1.42 0a.996.996 0 000-1.41l-6.59-6.59a.996.996 0 00-1.41 0l-6.6 6.58a.996.996 0 101.41 1.41L11 7.83V19c0 .55.45 1 1 1s1-.45 1-1z" }));
});
xe.displayName = "ArrowUpward";
var Se = /* @__PURE__ */ w.forwardRef(function(t, n) {
	return /* @__PURE__ */ w.createElement(e, p({
		iconAttrs: {
			fill: "currentColor",
			xmlns: "http://www.w3.org/2000/svg"
		},
		iconVerticalAlign: "middle",
		iconViewBox: "0 0 24 24"
	}, t, { ref: n }), /* @__PURE__ */ w.createElement("path", {
		fill: "none",
		d: "M0 0h24v24H0V0z"
	}), /* @__PURE__ */ w.createElement("path", { d: "M18 6.7l-8.48 8.48-3.54-3.54a.996.996 0 10-1.41 1.41l4.24 4.24c.39.39 1.02.39 1.41 0l9.18-9.18a.999.999 0 00-.01-1.42c-.37-.38-1-.38-1.39.01z" }));
});
Se.displayName = "Check";
var Ce = /* @__PURE__ */ w.forwardRef(function(t, n) {
	return /* @__PURE__ */ w.createElement(e, p({
		iconAttrs: {
			fill: "currentColor",
			xmlns: "http://www.w3.org/2000/svg"
		},
		iconVerticalAlign: "middle",
		iconViewBox: "0 0 24 24"
	}, t, { ref: n }), /* @__PURE__ */ w.createElement("rect", {
		width: 24,
		height: 24,
		fill: "none"
	}), /* @__PURE__ */ w.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" }));
});
Ce.displayName = "ErrorOutline";
var we = /* @__PURE__ */ w.forwardRef(function(t, n) {
	return /* @__PURE__ */ w.createElement(e, p({
		iconAttrs: {
			fill: "currentColor",
			xmlns: "http://www.w3.org/2000/svg"
		},
		iconVerticalAlign: "middle",
		iconViewBox: "0 0 24 24"
	}, t, { ref: n }), /* @__PURE__ */ w.createElement("rect", {
		width: 24,
		height: 24,
		fill: "none"
	}), /* @__PURE__ */ w.createElement("path", { d: "M8 6h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z" }));
});
we.displayName = "Stop";
var T = d.getLogger("ChatInput"), Te = /* @__PURE__ */ t("div", { target: "e1d2x3se12" })(({ isStretchHeight: e }) => ({
	position: "relative",
	display: "flex",
	flexDirection: "column",
	...e && { height: "100%" }
}), ""), Ee = /* @__PURE__ */ t("div", { target: "e1d2x3se11" })(({ theme: e, isStretchHeight: t }) => ({
	backgroundColor: e.colors.secondaryBg,
	border: `${e.sizes.borderWidth} solid`,
	borderColor: e.colors.widgetBorderColor ?? e.colors.transparent,
	position: "relative",
	display: "flex",
	flexDirection: "column",
	alignItems: "stretch",
	flex: 1,
	paddingTop: e.spacing.md,
	paddingBottom: e.spacing.md,
	paddingLeft: e.spacing.lg,
	paddingRight: e.spacing.lg,
	gap: e.spacing.sm,
	borderRadius: e.radii.default,
	boxSizing: "border-box",
	...t && { height: "100%" },
	":focus-within": { borderColor: e.colors.primary }
}), ""), De = /* @__PURE__ */ t("div", { target: "e1d2x3se10" })(({ theme: e }) => ({
	display: "flex",
	flexWrap: "wrap",
	gap: e.spacing.sm
}), ""), Oe = /* @__PURE__ */ t("div", { target: "e1d2x3se9" })(({ theme: e, isStacked: t, hasExpandedHeight: n }) => ({
	display: "flex",
	flexDirection: n ? "column" : "row",
	alignItems: n ? "stretch" : "center",
	justifyContent: n ? "flex-start" : "space-between",
	width: "100%",
	gap: e.spacing.sm,
	flexWrap: !n && t ? "wrap" : "nowrap",
	...n && { flex: 1 }
}), ""), ke = /* @__PURE__ */ t("div", { target: "e1d2x3se8" })(({ isStacked: e, hasExpandedHeight: t }) => ({
	flex: e && !t ? "none" : 1,
	width: e || t ? "100%" : "auto",
	order: e && !t ? -1 : 0,
	display: "flex",
	alignItems: t ? "stretch" : "center",
	minWidth: 0
}), ""), Ae = /* @__PURE__ */ t("div", { target: "e1d2x3se7" })(({ theme: e, hasExpandedHeight: t }) => ({
	display: "flex",
	flexDirection: "row",
	flexShrink: 0,
	gap: e.spacing.sm,
	alignItems: "center",
	order: t ? 0 : -1
}), ""), je = /* @__PURE__ */ t("div", { target: "e1d2x3se6" })(({ theme: e }) => ({
	display: "flex",
	flexDirection: "row",
	gap: e.spacing.sm,
	alignItems: "center"
}), ""), Me = /* @__PURE__ */ t("div", { target: "e1d2x3se5" })(({ theme: e }) => ({
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
	width: "100%",
	gap: e.spacing.sm
}), ""), Ne = /* @__PURE__ */ t("div", { target: "e1d2x3se4" })(({ theme: e }) => ({
	color: e.colors.fadedText60,
	fontSize: e.fontSizes.twoSm,
	textAlign: "right",
	whiteSpace: "nowrap",
	pointerEvents: "auto",
	cursor: "text",
	"& .stChatInputInstructions": { position: "static" }
}), ""), E = /* @__PURE__ */ t("button", { target: "e1d2x3se3" })(({ theme: e, disabled: t, hasError: n, primary: r }) => r ? {
	border: "none",
	backgroundColor: t ? e.colors.darkenedBgMix15 : e.colors.primary,
	borderRadius: e.radii.button,
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	lineHeight: e.lineHeights.none,
	margin: e.spacing.none,
	padding: e.spacing.xs,
	width: e.sizes.chatInputPrimaryButtonSize,
	height: e.sizes.chatInputPrimaryButtonSize,
	color: t ? e.colors.fadedText40 : e.colors.white,
	cursor: t ? "not-allowed" : "pointer",
	transition: "background-color 200ms ease",
	"&:focus": { outline: "none" },
	":focus": { outline: "none" },
	"&:focus-visible": { boxShadow: e.shadows.focusRing },
	"&:hover": { backgroundColor: t ? e.colors.darkenedBgMix15 : e.colors.primary }
} : {
	border: "none",
	backgroundColor: e.colors.transparent,
	borderRadius: e.radii.default,
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	lineHeight: e.lineHeights.none,
	margin: e.spacing.none,
	padding: e.spacing.none,
	color: n ? e.colors.redTextColor : t ? e.colors.fadedText40 : e.colors.fadedText60,
	pointerEvents: "auto",
	"&:focus": { outline: "none" },
	":focus": { outline: "none" },
	"&:focus-visible": { boxShadow: e.shadows.focusRing },
	"&:hover": { color: n ? e.colors.redColor : e.colors.bodyText },
	"&:active": { color: e.colors.primary },
	"&:disabled, &:disabled:hover, &:disabled:active": {
		backgroundColor: e.colors.transparent,
		borderColor: e.colors.transparent,
		color: e.colors.fadedText40,
		cursor: "not-allowed"
	},
	"& svg": {
		width: e.iconSizes.lg,
		height: e.iconSizes.lg
	}
}, ""), Pe = /* @__PURE__ */ t("div", { target: "e1d2x3se2" })(({ isRecording: e }) => ({
	display: e ? "flex" : "none",
	flex: 1,
	alignItems: "center",
	minWidth: 0
}), ""), Fe = /* @__PURE__ */ t("div", { target: "e1d2x3se1" })(({ theme: e }) => ({
	position: "relative",
	width: "100%",
	height: e.sizes.chatInputPrimaryButtonSize,
	borderRadius: e.radii.default,
	overflow: "hidden",
	"& > div": {
		position: "absolute",
		inset: 0
	}
}), ""), Ie = /* @__PURE__ */ t("textarea", { target: "e1d2x3se0" })(({ theme: e, $height: t, $maxHeight: n, $minHeight: r }) => ({
	fontWeight: e.fontWeights.normal,
	lineHeight: e.lineHeights.inputWidget,
	height: t,
	maxHeight: n,
	minHeight: r,
	overflowY: "auto",
	padding: `${e.spacing.twoXS} 0`,
	width: "100%",
	border: "none",
	outline: "none",
	backgroundColor: "transparent",
	fontFamily: "inherit",
	fontSize: e.fontSizes.sm,
	color: "inherit",
	boxSizing: "border-box",
	resize: "none",
	display: "block",
	"&::placeholder": { color: e.colors.fadedText60 },
	"&:disabled": {
		color: e.colors.fadedText40,
		WebkitTextFillColor: e.colors.fadedText40,
		cursor: "not-allowed"
	}
}), ""), D = (e, t) => {
	let n = {
		...e,
		style: {
			...e.style,
			position: "absolute"
		}
	};
	return t === g.Directory ? {
		...n,
		webkitdirectory: "",
		multiple: !0
	} : n;
}, Le = (e, t) => me(e, t) ? { isValid: !0 } : {
	isValid: !1,
	errorMessage: `${e.type || "This type of"} files are not allowed.`
}, Re = (e) => {
	let t = Array.from(e.files);
	return t.length > 0 ? t : Array.from(e.items).filter((e) => e.kind === "file").map((e) => e.getAsFile()).filter((e) => e !== null);
}, O = (e) => {
	switch (e) {
		case g.None: return "a file";
		case g.Single: return "a file";
		case g.Multiple: return "files";
		case g.Directory: return "a directory";
		default: return _(e), "a file";
	}
}, ze = /* @__PURE__ */ t("div", { target: "e3id6jz2" })(({ theme: e }) => ({
	backgroundColor: e.colors.transparent,
	position: "absolute",
	inset: 0,
	zIndex: e.zIndices.priority,
	borderRadius: e.radii.chatInput
}), ""), k = /* @__PURE__ */ t("div", { target: "e3id6jz1" })(({ theme: e }) => ({
	position: "absolute",
	inset: 0,
	border: `${e.sizes.borderWidth} solid`,
	borderColor: e.colors.primary,
	borderRadius: e.radii.chatInput,
	backgroundColor: e.colors.secondaryBg,
	color: e.colors.primary,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontWeight: e.fontWeights.bold,
	pointerEvents: "none",
	zIndex: e.zIndices.priority
}), ""), A = /* @__PURE__ */ t("div", { target: "e3id6jz0" })(({ disabled: e }) => ({ pointerEvents: e ? "none" : "auto" }), ""), Be = (0, w.memo)(({ onDrop: e, multiple: t, accept: n, maxSize: r, acceptFile: i, disabled: a, fileTypes: o }) => {
	let { getRootProps: s, getInputProps: c } = ue({
		onDrop: e,
		multiple: t,
		accept: n,
		maxSize: r,
		useFsAccessApi: !1
	}), u = D(c(), i), d = s({ tabIndex: -1 }), f = () => {
		let e = `Upload or drag and drop ${O(i)}`;
		return o && o.length > 0 ? `${e} (${S(o)})` : e;
	};
	return /* @__PURE__ */ b.jsxs(A, {
		"data-testid": "stChatInputFileUploadButton",
		disabled: a,
		...d,
		children: [/* @__PURE__ */ b.jsx("input", { ...u }), /* @__PURE__ */ b.jsx(l, {
			content: f(),
			placement: ie.TOP,
			onMouseEnterDelay: 500,
			children: /* @__PURE__ */ b.jsx(E, {
				type: "button",
				disabled: a,
				"aria-label": `Upload ${O(i)}`,
				children: /* @__PURE__ */ b.jsx(m, {
					content: be,
					size: "xl",
					color: "inherit"
				})
			})
		})]
	});
}), Ve = (0, w.memo)(({ getRootProps: e, getInputProps: t, acceptFile: n }) => {
	let r = D(t(), n);
	return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [/* @__PURE__ */ b.jsx(ze, {
		...e(),
		children: /* @__PURE__ */ b.jsx("input", { ...r })
	}), /* @__PURE__ */ b.jsx(k, { children: `Drag and drop ${O(n)} here` })] });
}), j = (e, t, n) => {
	let r = [], i = [];
	return e.forEach((e) => {
		if (e.size > n) {
			i.push({
				file: e,
				errors: [{
					code: C.FileTooLarge,
					message: `File is too large. Maximum size is ${n} bytes.`
				}]
			});
			return;
		}
		let a = Le(e, t.fileType);
		if (!a.isValid) {
			i.push({
				file: e,
				errors: [{
					code: C.FileInvalidType,
					message: a.errorMessage || "File type not allowed."
				}]
			});
			return;
		}
		r.push(e);
	}), {
		accepted: r,
		rejected: i
	};
}, He = ({ acceptMultipleFiles: e, maxFileSize: t, uploadClient: n, uploadFile: r, addFiles: i, getNextLocalFileId: a, deleteExistingFiles: o, onUploadComplete: c, element: l }) => (u, d) => {
	if (u.length > 0) {
		let { accepted: e, rejected: n } = j(u, l, t);
		u = e, d = [...d, ...n];
	}
	if (!e && u.length === 0 && d.length > 1) {
		let e = d.findIndex((e) => e.errors?.[0].code === C.TooManyFiles);
		e >= 0 && (u.push(d[e].file), d.splice(e, 1));
	}
	if (!e && u.length > 1) {
		let [e, ...t] = u;
		u = [e], d = [...d, ...t.map((e) => ({
			file: e,
			errors: [{
				code: C.TooManyFiles,
				message: "Only one file is allowed."
			}]
		}))];
	}
	!e && u.length > 0 && o(), n.fetchFileURLs(u).then((e) => {
		ce(e, u).forEach(([e, t]) => {
			r(e, t);
		});
	}).catch((e) => {
		i(u.map((t) => new x(t.name, t.size, a(), {
			type: "error",
			errorMessage: s(e).message
		}, t)));
	}), d.length > 0 && i(d.map((e) => fe(e, a(), t))), c();
}, Ue = ({ getNextLocalFileId: e, addFiles: t, updateFile: n, uploadClient: r, element: i, onUploadProgress: o, onUploadComplete: s }) => (c, l) => {
	let u = l.webkitRelativePath || l.name, d = new AbortController(), f = new x(u, l.size, e(), {
		type: "uploading",
		abortController: d,
		progress: 1
	}, l);
	t([f]), r.uploadFile({
		formId: "",
		...i
	}, c.uploadUrl, l, (e) => o(e, f.id), d.signal).then(() => s(f.id, c)).catch((e) => {
		e instanceof DOMException && e.name === "AbortError" || n(f.id, f.setStatus({
			type: "error",
			errorMessage: a(e)
		}));
	});
}, We = (e, t, n) => n.map((n) => n.id === e ? t : n), Ge = (e, t) => t.find((t) => t.id === e);
function Ke({ disabled: e, element: t, widgetMgr: a, fragmentId: s, uploadClient: d, heightConfig: p }) {
	let h = f(), { placeholder: _, maxChars: v } = t, ce = (0, w.useRef)(0), x = (0, w.useRef)(null), S = (0, w.useRef)(!1), fe = (0, w.useRef)(null), C = (0, w.useRef)(null), { width: me, elementRef: be } = u(), { innerWidth: D, innerHeight: Le } = te(), [O, ze] = (0, w.useState)(t.default), [k, A] = (0, w.useState)([]), [j, Ke] = (0, w.useState)(!1), [M, qe] = (0, w.useState)(!1), [N, P] = (0, w.useState)(null), [F, Je] = (0, w.useState)(!1), [Ye, Xe] = (0, w.useState)(0), I = t.acceptAudio ?? !1, { scriptRunFinishedFragmentIds: Ze, scriptRunFinishedSequence: L, scriptRunId: R, scriptRunState: z, stopScript: B } = (0, w.useContext)(ee), [V, H] = re({
		widgetMgr: a,
		id: t.id,
		key: "submittedRunScope",
		defaultValue: void 0
	}), U = t.submitMode;
	(0, w.useEffect)(() => () => {
		C.current && C.current.abort();
	}, []);
	let Qe = (0, w.useRef)(!1), W = _e({
		textareaRef: x,
		dependencies: [_, F]
	}), { updateScrollHeight: $e } = W;
	(0, w.useLayoutEffect)(() => {
		me > 0 && !Qe.current && (Qe.current = !0, $e());
	}, [me, $e]);
	let G = (0, w.useRef)(""), K = (0, w.useRef)(0), et = (0, w.useRef)(null), tt = (0, w.useRef)(null), q = (0, w.useCallback)((e) => {
		let t = getComputedStyle(e);
		G.current = `${t.fontWeight} ${t.fontSize} ${t.fontFamily}`;
		let n = Number.parseFloat(t.paddingLeft) || 0, r = Number.parseFloat(t.paddingRight) || 0;
		K.current = e.clientWidth - n - r;
	}, []);
	(0, w.useLayoutEffect)(() => {
		let e = x.current;
		if (!e) return;
		q(e);
		let t = new ResizeObserver(() => q(e));
		return t.observe(e), () => t.disconnect();
	}, [q, F]), (0, w.useEffect)(() => {
		if (O === "") {
			Je(!1);
			return;
		}
		if (F) return;
		let e = x.current;
		if (!e || ((K.current <= 0 || !G.current) && q(e), K.current <= 0 || !G.current)) return;
		et.current || (et.current = document.createElement("canvas"), tt.current = et.current.getContext("2d"));
		let t = tt.current;
		t && (t.font = G.current, t.measureText(O).width > K.current - 10 && Je(!0));
	}, [
		O,
		F,
		q
	]);
	let J = (0, w.useMemo)(() => k.some((e) => e.status.type === "uploading") ? !1 : O !== "" || k.length > 0, [k, O]), Y = oe(t.acceptFile), nt = he(t.maxUploadSizeMb, le.Megabyte, le.Byte), rt = (0, w.useCallback)((e) => A((t) => [...t, ...e]), []), it = (0, w.useCallback)((e) => {
		e.status.type === "uploading" && e.status.abortController.abort(), e.status.type === "uploaded" && e.status.fileUrls.deleteUrl && d.deleteFile(e.status.fileUrls.deleteUrl).catch((e) => {
			T.error("Failed to delete file from server:", e);
		});
	}, [d]), at = (0, w.useCallback)((e) => {
		A((t) => {
			let n = Ge(e, t);
			if (o(n)) return t;
			it(n);
			let r = t.filter((t) => t.id !== e);
			return r.length === 0 && Xe((e) => e + 1), r;
		});
	}, [it]), ot = (0, w.useRef)(null), st = (0, w.useCallback)((e) => V === void 0 ? !1 : V.fragmentId === null ? e.length === 0 : e.includes(V.fragmentId), [V]);
	(0, w.useEffect)(() => {
		V === void 0 || L <= V.scriptRunFinishedSequence || R === V.scriptRunIdAtSubmit || (st(Ze) || Ze.length === 0) && H(void 0);
	}, [
		Ze,
		L,
		R,
		st,
		V,
		H
	]);
	let ct = z === y.STOP_REQUESTED, lt = !e && V !== void 0 && U !== n.SubmitMode.SUBMIT_MODE_SUBMIT, ut = lt && U === n.SubmitMode.SUBMIT_MODE_STOP && !ct, X = lt, dt = (0, w.useRef)(!1);
	(0, w.useEffect)(() => {
		dt.current && !X && !e && x.current?.focus(), dt.current = X;
	}, [X, e]);
	let ft = (0, w.useRef)(!1), pt = (0, w.useCallback)(() => {
		if (z === y.RUNNING || z === y.RERUN_REQUESTED) {
			B();
			return;
		}
		ft.current = !0;
	}, [z, B]);
	(0, w.useEffect)(() => {
		ft.current && (z === y.RUNNING || z === y.RERUN_REQUESTED) && (ft.current = !1, B());
	}, [z, B]);
	let mt = (0, w.useCallback)((e) => {
		!e.file || e.status.type !== "error" || (A((t) => t.filter((t) => t.id !== e.id)), ot.current && ot.current([e.file], []));
	}, []), ht = (0, w.useCallback)(() => {
		let e = k.filter((e) => e.status.type === "uploaded").map((e) => {
			let { name: t, size: n, status: r } = e, { fileId: a, fileUrls: o } = r;
			return new i({
				fileId: a,
				fileUrls: o,
				name: t,
				size: n
			});
		});
		return new r({ uploadedFileInfo: e });
	}, [k]), gt = () => ce.current++, Z = He({
		acceptMultipleFiles: Y === g.Multiple || Y === g.Directory,
		maxFileSize: nt,
		uploadClient: d,
		uploadFile: Ue({
			getNextLocalFileId: gt,
			addFiles: rt,
			updateFile: (e, t) => {
				A((n) => We(e, t, n));
			},
			uploadClient: d,
			element: t,
			onUploadProgress: (e, t) => {
				A((n) => {
					let r = Ge(t, n);
					if (o(r) || r.status.type !== "uploading") return n;
					let i = e.total ? Math.round(e.loaded * 100 / e.total) : 0;
					return r.status.progress === i ? n : We(t, r.setStatus({
						type: "uploading",
						abortController: r.status.abortController,
						progress: i
					}), n);
				});
			},
			onUploadComplete: (e, t) => {
				A((n) => {
					let r = Ge(e, n);
					return o(r) || r.status.type !== "uploading" ? n : We(r.id, r.setStatus({
						type: "uploaded",
						fileId: t.fileId,
						fileUrls: t
					}), n);
				});
			}
		}),
		addFiles: rt,
		getNextLocalFileId: gt,
		deleteExistingFiles: () => k.forEach((e) => at(e.id)),
		onUploadComplete: () => {
			x.current && x.current.focus();
		},
		element: t
	});
	ot.current = Z;
	let _t = (0, w.useCallback)((t) => {
		if (e || X || Y === g.None || !t.clipboardData) return;
		let n = Re(t.clipboardData);
		n.length !== 0 && (t.preventDefault(), ot.current?.(n, []));
	}, [
		Y,
		e,
		X
	]), { getRootProps: vt, getInputProps: yt } = ue({
		onDrop: Z,
		multiple: Y === g.Multiple || Y === g.Directory,
		accept: de(t.fileType),
		maxSize: nt,
		disabled: e || X,
		useFsAccessApi: !1
	}), bt = (0, w.useCallback)((r) => {
		if (x.current && x.current.focus(), !J && !r || e || X) return;
		let i = ht(), o = {
			data: O,
			fileUploaderState: i,
			audioFileInfo: r
		};
		a.setChatInputValue(t.id, o, {
			formId: void 0,
			fragmentId: s,
			fromUser: !0
		}), U !== n.SubmitMode.SUBMIT_MODE_SUBMIT && (ft.current = !1, H({
			fragmentId: s || null,
			scriptRunIdAtSubmit: R,
			scriptRunFinishedSequence: L
		})), k.length > 0 && Xe((e) => e + 1), A([]), ze(""), Je(!1), W.clearScrollHeight();
	}, [
		J,
		e,
		X,
		O,
		k.length,
		ht,
		a,
		t,
		s,
		W,
		U,
		R,
		L,
		H
	]), xt = (0, w.useCallback)(async (e) => {
		let n = (/* @__PURE__ */ new Date()).toISOString().replaceAll(/[:.]/g, "-"), r = new File([e], `audio-${n}.wav`, { type: "audio/wav" });
		try {
			qe(!0);
			let e = await d.fetchFileURLs([r]);
			if (e.length === 0) throw Error("Failed to get upload URL for audio file");
			let n = e[0];
			C.current = new AbortController(), await d.uploadFile({
				formId: "",
				...t
			}, n.uploadUrl, r, () => {}, C.current.signal);
			let a = new i({
				fileId: n.fileId,
				fileUrls: n,
				name: r.name,
				size: r.size
			});
			bt(a);
		} catch (e) {
			T.error("Audio upload failed:", e), P("Recording failed"), x.current && x.current.focus();
		} finally {
			qe(!1);
		}
	}, [
		d,
		t,
		bt
	]), St = (0, w.useMemo)(() => ({
		onApprove: xt,
		onPermissionDenied: () => {
			let e = "Microphone access denied";
			P(e), T.error("Permission denied:", e);
		},
		onError: (e) => {
			P("Recording failed"), T.error("Recording error:", e);
		},
		onRecordStart: () => {
			P(null);
		}
	}), [xt]), Q = se({
		containerRef: fe,
		sampleRate: t.audioSampleRate ?? void 0,
		events: St
	}), Ct = (0, w.useCallback)(() => {
		bt();
	}, [bt]), wt = (e) => {
		let { metaKey: t, ctrlKey: n, shiftKey: r } = e;
		ve(e) && !r && !n && !t && (e.preventDefault(), Ct());
	}, Tt = (e) => {
		let { value: t } = e.target;
		v !== 0 && t.length > v || (ze(t), $e(), N && P(null));
	}, Et = (0, w.useCallback)(async (t) => {
		t.preventDefault(), t.stopPropagation(), !(!I || e || X || Q.state === "recording") && await Q.start();
	}, [
		I,
		e,
		X,
		Q
	]), Dt = (0, w.useCallback)(() => {
		Q.cancel(), x.current && x.current.focus();
	}, [Q]), Ot = (0, w.useCallback)(async () => {
		let { blob: e } = await Q.stop();
		await Q.approve(e);
	}, [Q]), kt = (0, w.useCallback)((e) => {
		Et(e);
	}, [Et]), At = (0, w.useCallback)(() => {
		Ot();
	}, [Ot]), jt = (0, w.useCallback)(() => {
		x.current && x.current.focus();
	}, []);
	(0, w.useEffect)(() => {
		if (t.setValue && !S.current) {
			S.current = !0;
			let e = t.value || "";
			ze(e);
		}
	}, [t.setValue, t.value]), (0, w.useEffect)(() => {
		S.current = !1;
	}, [t]), (0, w.useEffect)(() => {
		let e = (e) => {
			e.preventDefault(), e.stopPropagation(), !j && e.dataTransfer?.types.includes("Files") && Ke(!0);
		}, t = (e) => {
			e.preventDefault(), e.stopPropagation(), j && (e.clientX <= 0 && e.clientY <= 0 || e.clientX >= D && e.clientY >= Le) && Ke(!1);
		}, n = (e) => {
			e.preventDefault(), e.stopPropagation(), j && Ke(!1);
		};
		return window.addEventListener("dragover", e), window.addEventListener("drop", n), window.addEventListener("dragleave", t), () => {
			window.removeEventListener("dragover", e), window.removeEventListener("drop", n), window.removeEventListener("dragleave", t);
		};
	}, [
		j,
		D,
		Le
	]);
	let Mt = () => ut ? /* @__PURE__ */ b.jsx(E, {
		onClick: pt,
		disabled: e,
		"data-testid": "stChatInputStopButton",
		"aria-label": "Stop script",
		primary: !0,
		children: /* @__PURE__ */ b.jsx(m, {
			content: we,
			size: "lg",
			color: "inherit"
		})
	}) : /* @__PURE__ */ b.jsx(E, {
		onClick: Ct,
		disabled: !J || e || X || M,
		"data-testid": "stChatInputSubmitButton",
		"aria-label": "Send message",
		primary: !0,
		children: /* @__PURE__ */ b.jsx(m, {
			content: xe,
			size: "lg",
			color: "inherit"
		})
	}), Nt = Y !== g.None && j, $ = Q.state === "recording", Pt = !$ && me > ae(h.breakpoints.hideWidgetDetails) && v > 0, Ft = (0, w.useMemo)(() => {
		if (!(!p || p.useContent)) {
			if (p.useStretch) return "100%";
			if (p.pixelHeight && p.pixelHeight > 0) {
				let e = Number.parseInt(h.sizes.borderWidth, 10) || 1, t = ae(h.spacing.md) * 2 + e * 2;
				return `${Math.max(0, p.pixelHeight - t)}px`;
			}
		}
	}, [
		p,
		h.sizes.borderWidth,
		h.spacing.md
	]), It = p?.useStretch ?? !1, Lt = It || (p?.pixelHeight ?? 0) > 0, Rt = Lt || W.isExtended;
	return /* @__PURE__ */ b.jsx(Te, {
		className: "stChatInput",
		"data-testid": "stChatInput",
		ref: be,
		isStretchHeight: It,
		children: /* @__PURE__ */ b.jsxs(Ee, {
			isStretchHeight: It,
			children: [
				Nt && /* @__PURE__ */ b.jsx(Ve, {
					getRootProps: vt,
					getInputProps: yt,
					acceptFile: Y
				}),
				Y !== g.None && k.length > 0 && /* @__PURE__ */ b.jsx(De, { children: /* @__PURE__ */ b.jsx(pe, {
					items: [...k],
					onDelete: at,
					onRetry: mt
				}) }),
				/* @__PURE__ */ b.jsxs(Oe, {
					isStacked: F,
					hasExpandedHeight: Rt && !$,
					children: [!$ && /* @__PURE__ */ b.jsx(ke, {
						isStacked: F,
						hasExpandedHeight: Rt,
						children: /* @__PURE__ */ b.jsx(Ie, {
							"data-testid": "stChatInputTextArea",
							ref: x,
							value: O,
							placeholder: _,
							onChange: Tt,
							onKeyDown: wt,
							onPaste: _t,
							"aria-label": _,
							disabled: e || X,
							rows: 1,
							"aria-describedby": Pt ? "stChatInputInstructions" : void 0,
							$minHeight: Ft ?? h.sizes.chatInputTextareaMinHeight,
							$height: Lt ? "100%" : W.isExtended ? W.height : "auto",
							$maxHeight: Lt ? "none" : W.maxHeight
						})
					}), Rt && !$ ? /* @__PURE__ */ b.jsxs(Me, { children: [/* @__PURE__ */ b.jsx(Ae, {
						hasExpandedHeight: !0,
						children: Y !== g.None && /* @__PURE__ */ b.jsx(Be, {
							onDrop: Z,
							multiple: Y === g.Multiple || Y === g.Directory,
							accept: de(t.fileType),
							maxSize: nt,
							acceptFile: Y,
							disabled: e || X,
							fileTypes: t.fileType
						}, Ye)
					}), /* @__PURE__ */ b.jsxs(je, { children: [
						Pt && /* @__PURE__ */ b.jsx(Ne, {
							onClick: jt,
							id: "stChatInputInstructions",
							children: /* @__PURE__ */ b.jsx(ge, {
								dirty: J,
								value: O,
								maxLength: v,
								type: "chat",
								inForm: !1,
								className: "stChatInputInstructions"
							})
						}),
						I && (N ? /* @__PURE__ */ b.jsx(l, {
							content: N,
							placement: ie.TOP,
							error: !0,
							children: /* @__PURE__ */ b.jsx(E, {
								onClick: kt,
								disabled: e || X || M,
								hasError: !0,
								"data-testid": "stChatInputMicButton",
								"aria-label": "Start recording",
								children: /* @__PURE__ */ b.jsx(m, {
									content: Ce,
									size: "xl",
									color: "inherit"
								})
							})
						}) : /* @__PURE__ */ b.jsx(E, {
							onClick: kt,
							disabled: e || X || M,
							"data-testid": "stChatInputMicButton",
							"aria-label": "Start recording",
							children: /* @__PURE__ */ b.jsx(m, {
								content: ye,
								size: "xl",
								color: "inherit"
							})
						})),
						Mt()
					] })] }) : /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
						/* @__PURE__ */ b.jsx(Ae, {
							hasExpandedHeight: !1,
							children: Y !== g.None && !$ && /* @__PURE__ */ b.jsx(Be, {
								onDrop: Z,
								multiple: Y === g.Multiple || Y === g.Directory,
								accept: de(t.fileType),
								maxSize: nt,
								acceptFile: Y,
								disabled: e || X,
								fileTypes: t.fileType
							}, Ye)
						}),
						/* @__PURE__ */ b.jsx(Pe, {
							isRecording: $,
							children: /* @__PURE__ */ b.jsx(Fe, { ref: fe })
						}),
						/* @__PURE__ */ b.jsx(je, { children: $ ? /* @__PURE__ */ b.jsxs(b.Fragment, { children: [/* @__PURE__ */ b.jsx(E, {
							onClick: Dt,
							disabled: e || X,
							"data-testid": "stChatInputCancelButton",
							"aria-label": "Cancel recording",
							children: /* @__PURE__ */ b.jsx(m, {
								content: ne,
								size: "lg",
								color: "inherit"
							})
						}), /* @__PURE__ */ b.jsx(E, {
							onClick: At,
							disabled: e || X || M,
							"data-testid": "stChatInputApproveButton",
							"aria-label": "Submit recording",
							children: M ? /* @__PURE__ */ b.jsx(c, {
								size: "lg",
								iconValue: "spinner"
							}) : /* @__PURE__ */ b.jsx(m, {
								content: Se,
								size: "lg",
								color: "inherit"
							})
						})] }) : /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
							Pt && /* @__PURE__ */ b.jsx(Ne, {
								onClick: jt,
								id: "stChatInputInstructions",
								children: /* @__PURE__ */ b.jsx(ge, {
									dirty: J,
									value: O,
									maxLength: v,
									type: "chat",
									inForm: !1,
									className: "stChatInputInstructions"
								})
							}),
							I && (N ? /* @__PURE__ */ b.jsx(l, {
								content: N,
								placement: ie.TOP,
								error: !0,
								children: /* @__PURE__ */ b.jsx(E, {
									onClick: kt,
									disabled: e || X || M,
									hasError: !0,
									"data-testid": "stChatInputMicButton",
									"aria-label": "Start recording",
									children: /* @__PURE__ */ b.jsx(m, {
										content: Ce,
										size: "xl",
										color: "inherit"
									})
								})
							}) : /* @__PURE__ */ b.jsx(E, {
								onClick: kt,
								disabled: e || X || M,
								"data-testid": "stChatInputMicButton",
								"aria-label": "Start recording",
								children: /* @__PURE__ */ b.jsx(m, {
									content: ye,
									size: "xl",
									color: "inherit"
								})
							})),
							Mt()
						] }) })
					] })]
				})
			]
		})
	});
}
var M = (0, w.memo)(Ke);
//#endregion
export { M as default };

//# sourceMappingURL=ChatInput-C1gt0kBe-MShuCHFG.js.map