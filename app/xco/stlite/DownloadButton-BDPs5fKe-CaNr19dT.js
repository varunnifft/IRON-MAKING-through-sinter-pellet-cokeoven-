import { Cn as e, Ga as t, Ln as n, Or as r, Qo as i, Sn as a, bn as o, ds as s, ir as c, ms as l, os as u, rs as d, ts as f, xn as p, yn as m, za as h } from "./index-B1FrxEMd-BsPMjC5n.js";
import { t as g } from "./createDownloadLinkElement-DiNIFj9z-DoAwXp-8.js";
//#region ../react/build/DownloadButton-BDPs5fKe.js
var _ = /* @__PURE__ */ l(s(), 1), v = /%([0-9A-Fa-f]{2})/g, y = /[^\x20-\x7e\xa0-\xff]/g, b = /\\([\u0000-\u007f])/g, x = /;[\x09\x20]*([!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*=[\x09\x20]*("(?:[\x20!\x23-\x5b\x5d-\x7e\x80-\xff]|\\[\x20-\x7e])*"|[!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*/g, S = /^([A-Za-z0-9!#$%&+\-^_`{}~]+)'(?:[A-Za-z]{2,3}(?:-[A-Za-z]{3}){0,3}|[A-Za-z]{4,8}|)'((?:%[0-9A-Fa-f]{2}|[A-Za-z0-9!#$&+.^_`|~-])+)$/, C = /^([!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*(?:$|;)/, w = (e) => String(e).replace(y, "?"), T = class {
	constructor(e, t) {
		this.type = e, this.parameters = t;
	}
}, E = (e, t) => String.fromCharCode(Number.parseInt(t, 16));
function D(e) {
	let t = S.exec(e);
	if (!t) throw TypeError("invalid extended field value");
	let n = t[1].toLowerCase(), r = t[2], i;
	switch (n) {
		case "iso-8859-1":
			i = w(r.replace(v, E));
			break;
		case "utf-8":
			try {
				i = decodeURIComponent(r);
			} catch {
				throw TypeError("invalid encoded utf-8");
			}
			break;
		default: throw TypeError("unsupported charset in extended field");
	}
	return i;
}
function O(e) {
	let t = C.exec(e);
	if (!t) throw TypeError("invalid type format");
	let n = t[0].length, r = t[1].toLowerCase(), i, a = [], o = {}, s;
	for (n = x.lastIndex = t[0].slice(-1) === ";" ? n - 1 : n; t = x.exec(e);) {
		if (t.index !== n) throw TypeError("invalid parameter format");
		if (n += t[0].length, i = t[1].toLowerCase(), s = t[2], a.indexOf(i) !== -1) throw TypeError("invalid duplicate parameter");
		if (a.push(i), i.indexOf("*") + 1 === i.length) {
			i = i.slice(0, -1), s = D(s), o[i] = s;
			continue;
		}
		typeof o[i] != "string" && (s[0] === "\"" && (s = s.slice(1, s.length - 1).replace(b, "$1")), o[i] = s);
	}
	if (n !== -1 && n !== e.length) throw TypeError("invalid parameter format");
	return new T(r, o);
}
function k(e) {
	let t = O(e);
	if (t.type !== "attachment") return;
	let n = t.parameters.filename;
	if (typeof n == "string") return n;
}
function A(e, t) {
	return e.sendHttpRequest({
		method: "GET",
		path: `${t}?title=${encodeURIComponent(document.title)}`,
		headers: {},
		body: ""
	}).then(({ statusCode: e, headers: t, body: n }) => {
		if (e !== 200) return;
		let r = t.get("Content-Disposition"), i = (r && k(r)) ?? "", a = t.get("Content-Type"), o = new Blob([n], a ? { type: a } : void 0), s = URL.createObjectURL(o), c = document.createElement("a");
		c.setAttribute("href", s), c.setAttribute("target", "_blank"), c.setAttribute("download", i), c.click(), URL.revokeObjectURL(s), c.remove();
	});
}
function j() {
	let e = d();
	return (0, _.useCallback)((t) => {
		if (e == null) {
			let e = document.createElement("a");
			e.href = new URL(t, window.location.href).toString(), e.download = "", e.style.display = "none", document.body.append(e), e.click(), e.remove();
			return;
		}
		return A(e, t);
	}, [e]);
}
function M(s) {
	let { disabled: l, element: d, widgetMgr: v, endpoints: y, fragmentId: b } = s, { help: x, label: S, icon: C, ignoreRerun: w, type: T, url: E, deferredFileId: D } = d, O = d.shortcut || void 0, k = f(d.wrap), A = !k && !x, [M, N] = (0, _.useState)(!1), [P, F] = (0, _.useState)(null), { enforceDownloadInNewTab: I = !1 } = (0, _.useContext)(c), { backendOperationClient: L } = (0, _.useContext)(m), R = p.SECONDARY;
	T === "primary" ? R = p.PRIMARY : T === "tertiary" && (R = p.TERTIARY);
	let z = (0, _.useMemo)(() => y.buildDownloadUrl(E), [y, E]);
	(0, _.useEffect)(() => {
		D?.length || y.checkSourceUrlResponse(z, "Download Button");
	}, [
		z,
		y,
		D
	]);
	let B = (0, _.useCallback)(async () => {
		if (!L || !D) {
			F("Deferred download not properly configured");
			return;
		}
		N(!0), F(null);
		try {
			let e = await L.requestDeferredFile(D), t = y.buildDownloadUrl(e.url);
			y.checkSourceUrlResponse(t, "Download Button"), g({
				filename: "",
				url: t,
				enforceDownloadInNewTab: I
			}).click();
		} catch (e) {
			let t = e instanceof Error ? e.message : "Download failed";
			F(t);
		} finally {
			N(!1);
		}
	}, [
		L,
		D,
		y,
		I
	]), V = j(), H = (0, _.useCallback)(() => {
		if (!l) {
			if (w || v.setTriggerValue(d.id, {
				formId: d.formId,
				fragmentId: b,
				fromUser: !0
			}), d.url.startsWith("/media")) {
				V(d.url);
				return;
			}
			D?.length ? B() : g({
				filename: "",
				url: z,
				enforceDownloadInNewTab: I
			}).click();
		}
	}, [
		l,
		w,
		v,
		d,
		b,
		D,
		B,
		z,
		I,
		V
	]);
	i({
		shortcut: O,
		disabled: l,
		onActivate: H
	});
	let { clear: U, restart: W } = u(() => {
		F(null);
	}, 5e3, { autoStart: !1 });
	return (0, _.useEffect)(() => {
		P ? W() : U();
	}, [
		U,
		P,
		W
	]), /* @__PURE__ */ h.jsxs("div", {
		className: "stDownloadButton",
		"data-testid": "stDownloadButton",
		children: [/* @__PURE__ */ h.jsx(e, {
			help: x,
			containerWidth: !0,
			children: /* @__PURE__ */ h.jsx(o, {
				kind: R,
				size: a.SMALL,
				disabled: l || M,
				onClick: H,
				containerWidth: !0,
				children: /* @__PURE__ */ h.jsx(n, {
					icon: M ? "spinner" : C,
					iconPosition: t(d.iconPosition),
					label: S,
					shortcut: O,
					wrap: k,
					addTitleTooltip: A
				})
			})
		}), P && /* @__PURE__ */ h.jsx(r, {
			"data-testid": "stDownloadButtonError",
			children: P
		})]
	});
}
var N = (0, _.memo)(M);
//#endregion
export { N as default };

//# sourceMappingURL=DownloadButton-BDPs5fKe-CaNr19dT.js.map