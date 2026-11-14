import { Di as e, Kr as t, Uo as n, Wa as r, as as i, ds as a, is as o, ms as s, za as c } from "./index-B1FrxEMd-BsPMjC5n.js";
//#region ../react/build/Video-Vp7hc40F.js
var l = /* @__PURE__ */ s(a(), 1), u = /* @__PURE__ */ e("iframe", { target: "evvcert1" })(({ theme: e }) => ({
	colorScheme: "normal",
	border: "none",
	padding: e.spacing.none,
	margin: e.spacing.none,
	width: "100%",
	aspectRatio: "16 / 9",
	borderRadius: e.radii.default,
	overflow: "hidden"
}), ""), d = /* @__PURE__ */ e("video", { target: "evvcert0" })(({ theme: e }) => ({
	display: "block",
	width: "100%",
	borderRadius: e.radii.default,
	overflow: "hidden"
}), ""), f = r.getLogger("Video");
function p({ element: e, endpoints: r, elementMgr: a }) {
	let s = (0, l.useRef)(null), { type: p, url: m, startTime: h, subtitles: g, endTime: _, loop: v, autoplay: y, muted: b, alt: x } = e, S = o(m), C = i(g), w = n(S), T = (0, l.useMemo)(() => {
		if (!e.id) return !0;
		let t = a.getElementState(e.id, "preventAutoplay");
		return t || a.setElementState(e.id, "preventAutoplay", !0), t ?? !1;
	}, [e.id, a]), E = (0, l.useMemo)(() => JSON.stringify(C ? C.map((e) => r.buildMediaURL(`${e.url}`)) : []), [C, r]);
	return (0, l.useEffect)(() => {
		let e = JSON.parse(E);
		e.length !== 0 && e.forEach((e) => {
			r.checkSourceUrlResponse(e, "Video Subtitle");
		});
	}, [E, r]), (0, l.useEffect)(() => {
		s.current && (s.current.currentTime = h);
	}, [h]), (0, l.useEffect)(() => {
		let t = s.current, n = () => {
			t && (t.currentTime = e.startTime);
		};
		return t && t.addEventListener("loadedmetadata", n), () => {
			t && t.removeEventListener("loadedmetadata", n);
		};
	}, [e]), (0, l.useEffect)(() => {
		let e = s.current;
		if (!e) return;
		let t = !1, n = () => {
			_ > 0 && e.currentTime >= _ && (v ? (e.currentTime = h || 0, e.play()) : t || (t = !0, e.pause()));
		};
		return _ > 0 && e.addEventListener("timeupdate", n), () => {
			e && _ > 0 && e.removeEventListener("timeupdate", n);
		};
	}, [
		_,
		v,
		h
	]), (0, l.useEffect)(() => {
		let e = s.current;
		if (!e) return;
		let t = () => {
			v && (e.currentTime = h || 0, e.play());
		};
		return e.addEventListener("ended", t), () => {
			e && e.removeEventListener("ended", t);
		};
	}, [v, h]), p === t.Type.YOUTUBE_IFRAME ? /* @__PURE__ */ c.jsx(u, {
		className: "stVideo",
		"data-testid": "stVideo",
		title: x?.trim() || S,
		src: ((e) => {
			let t = new URL(e);
			if (h && !Number.isNaN(h) && t.searchParams.append("start", h.toString()), _ && !Number.isNaN(_) && t.searchParams.append("end", _.toString()), v) {
				t.searchParams.append("loop", "1");
				let e = t.pathname.split("/").pop();
				e && t.searchParams.append("playlist", e);
			}
			return y && t.searchParams.append("autoplay", "1"), b && t.searchParams.append("mute", "1"), t.toString();
		})(S),
		allow: "autoplay; encrypted-media",
		allowFullScreen: !0
	}) : /* @__PURE__ */ c.jsx(d, {
		className: "stVideo",
		"data-testid": "stVideo",
		ref: s,
		controls: !0,
		"aria-label": x?.trim() || void 0,
		muted: b,
		autoPlay: y && !T,
		src: r.buildMediaURL(S),
		crossOrigin: w,
		onError: (e) => {
			let t = e.currentTarget.src;
			f.error(`Client Error: Video source error - ${t}`), r.sendClientErrorToHost("Video", "Video source failed to load", "onerror triggered", t);
		},
		children: C?.map((e, t) => /* @__PURE__ */ c.jsx("track", {
			kind: "captions",
			src: r.buildMediaURL(`${e.url}`),
			label: `${e.label}`,
			default: t === 0,
			"data-testid": "stVideoSubtitle"
		}, t))
	});
}
var m = (0, l.memo)(p);
//#endregion
export { m as default };

//# sourceMappingURL=Video-Vp7hc40F-BJYVPd3r.js.map