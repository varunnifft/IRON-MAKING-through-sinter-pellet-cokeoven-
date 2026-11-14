import { Di as e, Uo as t, Wa as n, ds as r, is as i, ms as a, za as o } from "./index-B1FrxEMd-BsPMjC5n.js";
//#region ../react/build/Audio-D77MxD7R.js
var s = /* @__PURE__ */ a(r(), 1), c = /* @__PURE__ */ e("div", { target: "exyuj7n1" })(() => ({ lineHeight: 0 }), ""), l = /* @__PURE__ */ e("audio", { target: "exyuj7n0" })(({ theme: e }) => ({
	width: "100%",
	height: e.sizes.minElementHeight,
	margin: 0,
	padding: 0
}), ""), u = n.getLogger("Audio");
function d({ element: e, endpoints: n, elementMgr: r }) {
	let a = (0, s.useRef)(null), { startTime: d, endTime: f, loop: p, autoplay: m, alt: h } = e, g = (0, s.useMemo)(() => {
		if (!e.id) return !0;
		let t = r.getElementState(e.id, "preventAutoplay");
		return t || r.setElementState(e.id, "preventAutoplay", !0), t ?? !1;
	}, [e.id, r]);
	(0, s.useEffect)(() => {
		a.current && (a.current.currentTime = d);
	}, [d]), (0, s.useEffect)(() => {
		let t = a.current, n = () => {
			t && (t.currentTime = e.startTime);
		};
		return t && t.addEventListener("loadedmetadata", n), () => {
			t && t.removeEventListener("loadedmetadata", n);
		};
	}, [e]), (0, s.useEffect)(() => {
		let e = a.current;
		if (!e) return;
		let t = !1, n = () => {
			f > 0 && e.currentTime >= f && (p ? (e.currentTime = d || 0, e.play()) : t || (t = !0, e.pause()));
		};
		return f > 0 && e.addEventListener("timeupdate", n), () => {
			e && f > 0 && e.removeEventListener("timeupdate", n);
		};
	}, [
		f,
		p,
		d
	]), (0, s.useEffect)(() => {
		let e = a.current;
		if (!e) return;
		let t = () => {
			p && (e.currentTime = d || 0, e.play());
		};
		return e.addEventListener("ended", t), () => {
			e && e.removeEventListener("ended", t);
		};
	}, [p, d]);
	let _ = i(e.url), v = t(_), y = n.buildMediaURL(_);
	return /* @__PURE__ */ o.jsx(c, { children: /* @__PURE__ */ o.jsx(l, {
		className: "stAudio",
		"data-testid": "stAudio",
		ref: a,
		controls: !0,
		"aria-label": h?.trim() || void 0,
		autoPlay: m && !g,
		src: y,
		onError: (e) => {
			let t = e.currentTarget.src;
			u.error(`Client Error: Audio source error - ${t}`), n.sendClientErrorToHost("Audio", "Audio source failed to load", "onerror triggered", t);
		},
		crossOrigin: v
	}) });
}
var f = (0, s.memo)(d);
//#endregion
export { f as default };

//# sourceMappingURL=Audio-D77MxD7R-OnJ-e4iy.js.map