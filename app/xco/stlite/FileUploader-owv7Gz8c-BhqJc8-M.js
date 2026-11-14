import { Di as e, Gn as t, Gr as n, Ha as r, Li as i, Ln as a, Ma as o, Mi as s, Sa as c, Sn as l, Vo as u, bn as d, ds as f, ms as p, qo as m, us as h, wi as g, xn as _, za as v } from "./index-B1FrxEMd-BsPMjC5n.js";
import { t as y } from "./WidgetLabel--oJQrsAd-IbrOPlTn.js";
import { t as b } from "./WidgetLabelHelpIcon-CWnOrY3T-BtbNCfjY.js";
import { t as x } from "./zip-DFW5sP7Z-DCXENPDG.js";
import { t as S } from "./UploadFileInfo-DdcsXhjv-C0F82PE-.js";
import { a as C, c as w, d as T, f as E, i as D, l as O, m as k, o as A, p as j, r as M, s as N, t as P, u as F } from "./utils-KJzGoNUG-DTAUhUPK.js";
//#region ../react/build/FileUploader-owv7Gz8c.js
var I = /* @__PURE__ */ p(f(), 1), L = /* @__PURE__ */ p(h(), 1), R = /* @__PURE__ */ e("section", { target: "e1b2p2ww8" })(({ isDisabled: e, isDragActive: t, theme: n }) => ({
	position: "relative",
	display: "flex",
	gap: n.spacing.lg,
	alignItems: "flex-start",
	padding: n.spacing.md,
	backgroundColor: n.colors.secondaryBg,
	borderRadius: n.radii.default,
	border: n.colors.widgetBorderColor ? `${n.sizes.borderWidth} solid ${n.colors.widgetBorderColor}` : void 0,
	height: "auto",
	minHeight: n.sizes.largestElementHeight,
	":focus": { outline: "none" },
	":focus-visible": { boxShadow: n.shadows.focusRingOutline },
	cursor: e ? "not-allowed" : "pointer",
	...t && { boxShadow: `inset 0 0 0 2px ${n.colors.primary}` }
}), ""), z = /* @__PURE__ */ e("div", { target: "e1b2p2ww7" })(({ theme: e }) => ({
	position: "absolute",
	top: e.spacing.threeXS,
	right: e.spacing.threeXS,
	bottom: e.spacing.threeXS,
	left: e.spacing.threeXS,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: e.colors.secondaryBg,
	borderRadius: e.radii.default,
	zIndex: e.zIndices.priority
}), ""), B = /* @__PURE__ */ e("span", { target: "e1b2p2ww6" })(({ theme: e }) => ({
	color: e.colors.primary,
	fontSize: e.fontSizes.sm,
	fontWeight: e.fontWeights.extrabold
}), ""), V = /* @__PURE__ */ e("div", { target: "e1b2p2ww5" })({
	name: "1xfl00o",
	styles: "display:flex;align-items:center;justify-content:flex-start;text-align:left;align-self:center;min-width:0;flex:1"
}), H = /* @__PURE__ */ e("span", { target: "e1b2p2ww4" })(({ theme: e, disabled: t }) => ({
	fontSize: e.fontSizes.sm,
	color: t ? e.colors.fadedText40 : e.colors.fadedText60,
	display: "block",
	overflow: "hidden",
	textOverflow: "ellipsis",
	whiteSpace: "nowrap"
}), ""), U = /* @__PURE__ */ e("div", { target: "e1b2p2ww3" })({
	name: "1s8jot1",
	styles: "display:flex;flex-direction:column;min-width:0;max-width:100%"
}), W = /* @__PURE__ */ e("span", { target: "e1b2p2ww2" })({
	name: "1bmnxg7",
	styles: "white-space:nowrap"
}), G = /* @__PURE__ */ e("div", { target: "e1b2p2ww1" })(({ theme: e }) => ({ lineHeight: e.lineHeights.tight }), ""), K = 2.5, q = .5;
function J(e) {
	let t = Math.floor(e), n = e - t;
	return `${t * K + Math.max(0, t - 1) * q + (n > 0 ? q + n * K : 0)}rem`;
}
var Y = () => ({ [O]: {
	maxHeight: J(2.25),
	overflowY: "auto"
} }), X = (e) => ({
	[R]: {
		flexDirection: "column",
		alignItems: "stretch",
		height: "fit-content",
		gap: e.spacing.md
	},
	[V]: { alignSelf: "stretch" },
	[O]: {
		flexDirection: "column",
		flexWrap: "nowrap",
		alignItems: "flex-start",
		maxHeight: "none",
		overflowY: "visible",
		gap: e.spacing.sm
	},
	[w]: {
		display: "flex",
		flexDirection: "column",
		flexWrap: "nowrap",
		alignItems: "flex-start",
		gap: e.spacing.sm,
		maxHeight: J(5.25),
		overflowY: "auto",
		width: e.sizes.full
	},
	[P]: { width: e.sizes.full },
	[E]: { width: e.sizes.full }
}), ee = /* @__PURE__ */ e("div", { target: "e1b2p2ww0" })(({ theme: e, width: t }) => ({
	...Y(),
	...t < g("23rem") ? X(e) : {}
}), ""), Z = (0, I.memo)(({ acceptedTypes: e, maxSizeBytes: t, disabled: n }) => /* @__PURE__ */ v.jsx(V, {
	"data-testid": "stFileUploaderDropzoneInstructions",
	children: /* @__PURE__ */ v.jsx(U, { children: /* @__PURE__ */ v.jsxs(H, {
		disabled: n,
		children: [`${F(t, C.Byte, 0)} per file`, e.length ? ` • ${T(e)}` : null]
	}) })
})), te = (0, I.memo)(({ onDrop: e, multiple: t, acceptedTypes: n, maxSizeBytes: r, disabled: i, label: o, acceptDirectory: s = !1, uploadedFiles: c, hasFiles: u = !1 }) => /* @__PURE__ */ v.jsx(M, {
	onDrop: e,
	multiple: t,
	accept: D(n),
	maxSize: r,
	disabled: i,
	useFsAccessApi: !1,
	children: ({ getRootProps: e, getInputProps: f, isDragActive: p }) => {
		let m = f({ multiple: t || !!s });
		return /* @__PURE__ */ v.jsxs(R, {
			...e({ tabIndex: -1 }),
			"data-testid": "stFileUploaderDropzone",
			isDisabled: i,
			isDragActive: p,
			"aria-label": o,
			"aria-disabled": i,
			children: [
				/* @__PURE__ */ v.jsx("input", {
					"data-testid": "stFileUploaderDropzoneInput",
					...m,
					style: {
						...m.style,
						position: "absolute"
					},
					...s && { webkitdirectory: "" }
				}),
				p && /* @__PURE__ */ v.jsx(z, { children: /* @__PURE__ */ v.jsx(B, { children: s ? "Drag and drop directories here" : t ? "Drag and drop files here" : "Drag and drop a file here" }) }),
				u && c ? c : /* @__PURE__ */ v.jsxs(v.Fragment, { children: [/* @__PURE__ */ v.jsx(W, { children: /* @__PURE__ */ v.jsx(d, {
					kind: _.SECONDARY,
					disabled: i,
					size: l.MEDIUM,
					children: /* @__PURE__ */ v.jsx(a, {
						icon: ":material/upload:",
						label: s ? "Upload directories" : "Upload"
					})
				}) }), /* @__PURE__ */ v.jsx(Z, {
					acceptedTypes: n,
					maxSizeBytes: r,
					disabled: i
				})] })
			]
		});
	}
})), ne = (0, I.memo)(({ items: e, onDelete: t, disabled: n, trailingContent: r }) => /* @__PURE__ */ v.jsx(G, { children: /* @__PURE__ */ v.jsx(A, {
	items: e,
	onDelete: t,
	disabled: n,
	trailingContent: r
}) })), re = (e, t) => {
	let n = t.getFileUploaderStateValue(e);
	if (o(n)) return {
		files: [],
		nextLocalId: 1
	};
	let { uploadedFileInfo: r } = n;
	if (o(r) || r.length === 0) return {
		files: [],
		nextLocalId: 1
	};
	let i = 1;
	return {
		files: r.map((e) => {
			let t = e.name, n = e.size, r = e.fileId, a = e.fileUrls, o = new S(t, n, i, {
				type: "uploaded",
				fileId: r,
				fileUrls: a
			});
			return i += 1, o;
		}),
		nextLocalId: i
	};
}, Q = (e) => {
	let r = e.filter((e) => e.status.type === "uploaded").map((e) => {
		let { name: t, size: r, status: i } = e, { fileId: a, fileUrls: o } = i;
		return new n({
			fileId: a,
			fileUrls: o,
			name: t,
			size: r
		});
	});
	return new t({ uploadedFileInfo: r });
}, $ = (0, I.memo)(({ disabled: e, element: t, widgetMgr: n, uploadClient: f, fragmentId: p }) => {
	let { width: h, elementRef: g } = u(), { files: w, nextLocalId: T } = (0, I.useMemo)(() => re(t, n), [t, n]), E = (0, I.useRef)(T), [D, O] = (0, I.useState)(() => w), A = (0, I.useRef)(D);
	(0, I.useEffect)(() => {
		A.current = D;
	}, [D]);
	let [M, P] = (0, I.useState)(!1), F = (0, I.useCallback)(() => {
		let e = E.current;
		return E.current += 1, e;
	}, []), R = (0, I.useMemo)(() => {
		let e = t.maxUploadSizeMb;
		return N(e, C.Megabyte, C.Byte);
	}, [t.maxUploadSizeMb]), z = (0, I.useCallback)((e) => {
		(0, L.flushSync)(() => {
			O((t) => {
				let n = typeof e == "function" ? e(t) : e;
				return A.current = n, n;
			});
		});
	}, []), B = (0, I.useCallback)((e) => {
		(0, L.flushSync)(() => {
			P(e);
		});
	}, [P]), V = (0, I.useCallback)((e) => {
		z((t) => [...t, e]);
	}, [z]), H = (0, I.useCallback)((e) => {
		e.length !== 0 && z((t) => [...t, ...e]);
	}, [z]), U = (0, I.useCallback)((e) => {
		z((t) => t.filter((t) => t.id !== e));
	}, [z]), W = (0, I.useCallback)((e, t) => {
		z((n) => n.map((n) => n.id === e ? t : n));
	}, [z]), G = (0, I.useCallback)((e) => A.current.find((t) => t.id === e), []), K = D.some((e) => e.status.type === "uploading") || M ? "updating" : "ready";
	(0, I.useEffect)(() => {
		n.getFileUploaderStateValue(t) === void 0 && n.setFileUploaderStateValue(t.id, Q(A.current), {
			formId: t.formId,
			fragmentId: p,
			fromUser: !1
		});
	}, [
		n,
		t,
		p
	]), (0, I.useEffect)(() => {
		if (K !== "ready") return;
		let e = Q(D), r = n.getFileUploaderStateValue(t);
		c(e, r) || n.setFileUploaderStateValue(t.id, e, {
			formId: t.formId,
			fragmentId: p,
			fromUser: !0,
			...t.ignoreRerun ? { triggerRerun: !1 } : {}
		});
	}, [
		K,
		D,
		n,
		t,
		p
	]);
	let q = (0, I.useCallback)(() => {
		z(() => []);
		let e = Q([]);
		n.setFileUploaderStateValue(t.id, e, {
			formId: t.formId,
			fragmentId: p,
			fromUser: !0
		});
	}, [
		t,
		p,
		z,
		n
	]);
	m({
		element: t,
		widgetMgr: n,
		onFormCleared: q
	});
	let J = t.type, Y = (0, I.useCallback)((e) => {
		let t = [], n = [];
		return e.forEach((e) => {
			j(e, J) ? t.push(e) : n.push({
				file: e,
				errors: [{
					code: "file-invalid-type",
					message: `${e.type} files are not allowed.`
				}]
			});
		}), {
			accepted: t,
			rejected: n
		};
	}, [J]), X = (0, I.useCallback)((e, t) => {
		let n = G(e);
		o(n) || n.status.type !== "uploading" || W(n.id, n.setStatus({
			type: "uploaded",
			fileId: t.fileId,
			fileUrls: t
		}));
	}, [G, W]), Z = (0, I.useCallback)((e, n) => {
		let r = new AbortController(), a = n.webkitRelativePath || n.name, o = new S(a, n.size, F(), {
			type: "uploading",
			abortController: r,
			progress: 0
		});
		V(o), f.uploadFile(t, e.uploadUrl, n, void 0, r.signal).then(() => X(o.id, e)).catch((e) => {
			e instanceof DOMException && e.name === "AbortError" || W(o.id, o.setStatus({
				type: "error",
				errorMessage: i(e)
			}));
		});
	}, [
		V,
		t,
		F,
		X,
		W,
		f
	]), $ = (0, I.useCallback)((t) => {
		if (e) return;
		let n = G(t);
		o(n) || (n.status.type === "uploading" && n.status.abortController.abort(), n.status.type === "uploaded" && n.status.fileUrls.deleteUrl && f.deleteFile(n.status.fileUrls.deleteUrl), U(t));
	}, [
		e,
		G,
		U,
		f
	]), ie = (0, I.useCallback)((e, n) => {
		let { multipleFiles: r } = t, i = !!t.acceptDirectory, a = [...e], o = [...n];
		if (i && a.length > 0) {
			let { accepted: e, rejected: t } = Y(a);
			a = e, o = [...o, ...t];
		}
		if (!r && a.length === 0 && o.length > 1) {
			let e = o.findIndex((e) => e.errors.length === 1 && e.errors[0].code === "too-many-files");
			e >= 0 && (a.push(o[e].file), o.splice(e, 1));
		}
		let c = () => {
			if (r || a.length === 0) return;
			let e = A.current.find((e) => e.status.type !== "error");
			if (e) {
				B(!0);
				try {
					$(e.id);
				} finally {
					B(!1);
				}
			}
		};
		if (f.fetchFileURLs(a).then((e) => {
			c(), x(e, a).forEach(([e, t]) => {
				Z(e, t);
			});
		}).catch((e) => {
			H(a.map((t) => new S(t.name, t.size, F(), {
				type: "error",
				errorMessage: s(e).message
			})));
		}), o.length > 0) {
			let e = o.map((e) => k(e, F(), R));
			H(e);
		}
	}, [
		H,
		$,
		t,
		Y,
		R,
		F,
		f,
		Z,
		B
	]);
	return /* @__PURE__ */ v.jsxs(ee, {
		className: "stFileUploader",
		"data-testid": "stFileUploader",
		width: h,
		ref: g,
		children: [/* @__PURE__ */ v.jsx(y, {
			label: t.label,
			disabled: e,
			labelVisibility: r(t.labelVisibility?.value),
			children: t.help && /* @__PURE__ */ v.jsx(b, {
				content: t.help,
				label: t.label
			})
		}), /* @__PURE__ */ v.jsx(te, {
			onDrop: ie,
			multiple: t.multipleFiles,
			acceptedTypes: J,
			maxSizeBytes: R,
			label: t.label,
			disabled: e,
			acceptDirectory: !!t.acceptDirectory,
			hasFiles: D.length > 0,
			uploadedFiles: D.length > 0 ? /* @__PURE__ */ v.jsx(ne, {
				items: D,
				onDelete: $,
				disabled: e,
				trailingContent: /* @__PURE__ */ v.jsx(d, {
					kind: _.BORDERLESS_ICON,
					disabled: e,
					size: l.XSMALL,
					"aria-label": "Add files",
					children: /* @__PURE__ */ v.jsx(a, { icon: ":material/add:" })
				})
			}) : null
		})]
	});
});
//#endregion
export { $ as default };

//# sourceMappingURL=FileUploader-owv7Gz8c-BhqJc8-M.js.map