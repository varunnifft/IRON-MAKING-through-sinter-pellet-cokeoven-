import { Aa as e, Ai as t, Bn as n, Di as r, Gn as i, Gr as a, Ha as o, Ki as s, Li as c, Ma as l, Mo as u, Sa as d, Ur as f, Vo as p, Wa as m, Wo as h, Xr as g, Zn as _, bn as v, ds as y, ms as b, os as ee, qo as te, ur as x, us as S, xn as C, za as w } from "./index-B1FrxEMd-BsPMjC5n.js";
import { t as ne } from "./WidgetLabel--oJQrsAd-IbrOPlTn.js";
import { t as re } from "./WidgetLabelHelpIcon-CWnOrY3T-BtbNCfjY.js";
import { t as T } from "./urls-hxAPaE-_-CaxBV_RZ.js";
import { t as E } from "./UploadFileInfo-DdcsXhjv-C0F82PE-.js";
import { n as D, t as O } from "./ProgressBar-DKsZdv_W-C2badIUa.js";
//#region ../react/build/CameraInput-Cpc8v52c.js
var k = /* @__PURE__ */ b(y(), 1), ie = /* @__PURE__ */ b(S(), 1), A = /* @__PURE__ */ k.forwardRef(function(e, t) {
	return /* @__PURE__ */ k.createElement(n, g({
		iconAttrs: {
			fill: "currentColor",
			xmlns: "http://www.w3.org/2000/svg"
		},
		iconVerticalAlign: "middle",
		iconViewBox: "0 0 24 24"
	}, e, { ref: t }), /* @__PURE__ */ k.createElement("rect", {
		width: 24,
		height: 24,
		fill: "none"
	}), /* @__PURE__ */ k.createElement("path", { d: "M20 5h-3.17l-1.24-1.35A1.99 1.99 0 0014.12 3H9.88c-.56 0-1.1.24-1.48.65L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1.35 8.35l-2.79 2.79c-.32.32-.86.1-.86-.35v-1.75H9v1.75c0 .45-.54.67-.85.35l-2.79-2.79c-.2-.2-.2-.51 0-.71l2.79-2.79a.5.5 0 01.85.36v1.83h6v-1.83c0-.45.54-.67.85-.35l2.79 2.79c.2.19.2.51.01.7z" }));
});
A.displayName = "SwitchCamera";
var j = /* @__PURE__ */ k.forwardRef(function(e, t) {
	return /* @__PURE__ */ k.createElement(n, g({
		iconAttrs: {
			fill: "currentColor",
			xmlns: "http://www.w3.org/2000/svg"
		},
		iconVerticalAlign: "middle",
		iconViewBox: "0 0 8 8"
	}, e, { ref: t }), /* @__PURE__ */ k.createElement("path", { d: "M.5 1c-.28 0-.5.23-.5.5v4c0 .28.23.5.5.5h5c.28 0 .5-.22.5-.5V4l1 1h1V2H7L6 3V1.5c0-.28-.22-.5-.5-.5h-5z" }));
});
j.displayName = "Video";
var M = /* @__PURE__ */ k.forwardRef(function(e, t) {
	return /* @__PURE__ */ k.createElement(n, g({
		iconAttrs: {
			fill: "currentColor",
			xmlns: "http://www.w3.org/2000/svg"
		},
		iconVerticalAlign: "middle",
		iconViewBox: "0 0 8 8"
	}, e, { ref: t }), /* @__PURE__ */ k.createElement("path", { d: "M1.41 0L0 1.41l.72.72L2.5 3.94.72 5.72 0 6.41l1.41 1.44.72-.72 1.81-1.81 1.78 1.81.69.72 1.44-1.44-.72-.69-1.81-1.78 1.81-1.81.72-.72L6.41 0l-.69.72L3.94 2.5 2.13.72 1.41 0z" }));
});
M.displayName = "X";
function N(e, t) {
	switch (e) {
		case "xsmall": return {
			padding: `${t.spacing.twoXS} ${t.spacing.sm}`,
			fontSize: t.fontSizes.sm
		};
		case "small": return { padding: `${t.spacing.twoXS} ${t.spacing.md}` };
		case "large": return { padding: `${t.spacing.md} ${t.spacing.md}` };
		default: return { padding: `${t.spacing.xs} ${t.spacing.md}` };
	}
}
var ae = /* @__PURE__ */ r("div", { target: "etz5kuj8" })({
	name: "b6gpc",
	styles: "position:relative;overflow:hidden;width:100%;object-fit:contain"
}), P = /* @__PURE__ */ r("div", { target: "etz5kuj7" })(({ theme: e, width: t }) => ({
	backgroundColor: e.colors.secondaryBg,
	borderRadius: `${e.radii.default} ${e.radii.default} 0 0`,
	width: "100%",
	height: t * 9 / 16,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center"
}), ""), F = /* @__PURE__ */ r("p", { target: "etz5kuj6" })(({ theme: e }) => ({
	marginTop: e.spacing.sm,
	textAlign: "center"
}), ""), oe = /* @__PURE__ */ r("img", { target: "etz5kuj5" })(({ theme: e, opacity: t }) => ({
	borderRadius: `${e.radii.default} ${e.radii.default} 0 0`,
	objectFit: "contain",
	opacity: t
}), ""), I = /* @__PURE__ */ r("a", { target: "etz5kuj4" })(({ theme: e }) => ({
	color: e.colors.link,
	textDecoration: e.linkUnderline ? "underline" : "none",
	display: "block"
}), ""), se = /* @__PURE__ */ r("span", { target: "etz5kuj3" })({
	name: "s5xdrg",
	styles: "display:flex;align-items:center"
}), L = /* @__PURE__ */ r("div", { target: "etz5kuj2" })(({ theme: e }) => ({
	position: "absolute",
	top: e.spacing.lg,
	right: e.spacing.lg,
	zIndex: e.zIndices.priority,
	color: e.colors.fadedText40,
	mixBlendMode: "difference",
	opacity: e.opacities.secondary
}), ""), R = /* @__PURE__ */ r("div", { target: "etz5kuj1" })({
	name: "1yoks5w",
	styles: "height:fit-content;width:100%;position:absolute;bottom:0"
}), z = /* @__PURE__ */ r("button", { target: "etz5kuj0" })(({ theme: e }) => ({
	position: "relative",
	display: "inline-flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: e.colors.lightenedBg05,
	border: `${e.sizes.borderWidth} solid ${e.colors.borderColor}`,
	borderRadius: `0 0 ${e.radii.default} ${e.radii.default}`,
	"&:hover": {
		borderColor: e.colors.primary,
		color: e.colors.primary
	},
	"&:active": {
		color: e.colors.white,
		borderColor: e.colors.primary,
		backgroundColor: e.colors.primary
	},
	"&:focus:not(:active)": {
		borderColor: e.colors.primary,
		color: e.colors.primary
	},
	"&:disabled, &:disabled:hover, &:disabled:active": {
		color: e.colors.fadedText40,
		borderColor: e.colors.borderColor,
		backgroundColor: e.colors.lightenedBg05,
		cursor: "not-allowed"
	},
	fontWeight: e.fontWeights.normal,
	padding: `${e.spacing.xs} ${e.spacing.md}`,
	margin: e.spacing.none,
	lineHeight: e.lineHeights.base,
	color: "inherit",
	width: "100%",
	userSelect: "none",
	"&:focus": { outline: "none" },
	"&:focus-visible": { boxShadow: e.shadows.focusRing },
	...N("medium", e)
}), "");
function B({ disabled: e, onClick: t, children: n, progress: r }) {
	return /* @__PURE__ */ w.jsxs(z, {
		disabled: e || !1,
		onClick: t || (() => {}),
		progress: r || null,
		"data-testid": "stCameraInputButton",
		children: [n, r ? /* @__PURE__ */ w.jsx(R, { children: /* @__PURE__ */ w.jsx(D, {
			value: r,
			size: O.EXTRASMALL,
			squareTopCorners: !0
		}) }) : null]
	});
}
var V = (0, k.memo)(B), H = /* @__PURE__ */ ((e) => (e.USER = "user", e.ENVIRONMENT = "environment", e))(H || {}), U = (0, k.memo)(({ switchFacingMode: e }) => /* @__PURE__ */ w.jsx(L, {
	"data-testid": "stCameraInputSwitchButton",
	children: /* @__PURE__ */ w.jsx(f, {
		content: "Switch camera",
		placement: x.TOP_RIGHT,
		children: /* @__PURE__ */ w.jsx(v, {
			kind: C.MINIMAL,
			onClick: e,
			children: /* @__PURE__ */ w.jsx(_, {
				content: A,
				size: "twoXL",
				color: u.white
			})
		})
	})
})), W = { exports: {} }, G = W.exports, K;
function q() {
	return K || (K = 1, function(e, t) {
		(function(t, n) {
			e.exports = n(k.default);
		})(G, function(e) {
			return function(e) {
				var t = {};
				function n(r) {
					if (t[r]) return t[r].exports;
					var i = t[r] = {
						i: r,
						l: !1,
						exports: {}
					};
					return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
				}
				return n.m = e, n.c = t, n.d = function(e, t, r) {
					n.o(e, t) || Object.defineProperty(e, t, {
						enumerable: !0,
						get: r
					});
				}, n.r = function(e) {
					typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
				}, n.t = function(e, t) {
					if (t & 1 && (e = n(e)), t & 8 || t & 4 && typeof e == "object" && e && e.__esModule) return e;
					var r = /* @__PURE__ */ Object.create(null);
					if (n.r(r), Object.defineProperty(r, "default", {
						enumerable: !0,
						value: e
					}), t & 2 && typeof e != "string") for (var i in e) n.d(r, i, function(t) {
						return e[t];
					}.bind(null, i));
					return r;
				}, n.n = function(e) {
					var t = e && e.__esModule ? (function() {
						return e.default;
					}) : (function() {
						return e;
					});
					return n.d(t, "a", t), t;
				}, n.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t);
				}, n.p = "", n(n.s = "./src/react-webcam.tsx");
			}({
				"./src/react-webcam.tsx": (function(e, t, n) {
					n.r(t);
					var r = n("react"), i = /* @__PURE__ */ function() {
						var e = function(t, n) {
							return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
								e.__proto__ = t;
							} || function(e, t) {
								for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
							}, e(t, n);
						};
						return function(t, n) {
							e(t, n);
							function r() {
								this.constructor = t;
							}
							t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
						};
					}(), a = function() {
						return a = Object.assign || function(e) {
							for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
							return e;
						}, a.apply(this, arguments);
					}, o = function(e, t) {
						var n = {};
						for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
						if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
						return n;
					};
					(function() {
						typeof window > "u" || (navigator.mediaDevices === void 0 && (navigator.mediaDevices = {}), navigator.mediaDevices.getUserMedia === void 0 && (navigator.mediaDevices.getUserMedia = function(e) {
							var t = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
							return t ? new Promise(function(n, r) {
								t.call(navigator, e, n, r);
							}) : Promise.reject(/* @__PURE__ */ Error("getUserMedia is not implemented in this browser"));
						}));
					})();
					function s() {
						return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
					}
					t.default = function(e) {
						i(t, e);
						function t(t) {
							var n = e.call(this, t) || this;
							return n.canvas = null, n.ctx = null, n.requestUserMediaId = 0, n.unmounted = !1, n.state = { hasUserMedia: !1 }, n;
						}
						return t.prototype.componentDidMount = function() {
							var e = this, t = e.state, n = e.props;
							if (this.unmounted = !1, !s()) {
								n.onUserMediaError("getUserMedia not supported");
								return;
							}
							t.hasUserMedia || this.requestUserMedia(), n.children && typeof n.children != "function" && console.warn("children must be a function");
						}, t.prototype.componentDidUpdate = function(e) {
							var t = this.props;
							if (!s()) {
								t.onUserMediaError("getUserMedia not supported");
								return;
							}
							var n = JSON.stringify(e.audioConstraints) !== JSON.stringify(t.audioConstraints), r = JSON.stringify(e.videoConstraints) !== JSON.stringify(t.videoConstraints), i = e.minScreenshotWidth !== t.minScreenshotWidth, a = e.minScreenshotHeight !== t.minScreenshotHeight;
							(r || i || a) && (this.canvas = null, this.ctx = null), (n || r) && (this.stopAndCleanup(), this.requestUserMedia());
						}, t.prototype.componentWillUnmount = function() {
							this.unmounted = !0, this.stopAndCleanup();
						}, t.stopMediaStream = function(e) {
							e && (e.getVideoTracks && e.getAudioTracks ? (e.getVideoTracks().map(function(t) {
								e.removeTrack(t), t.stop();
							}), e.getAudioTracks().map(function(t) {
								e.removeTrack(t), t.stop();
							})) : e.stop());
						}, t.prototype.stopAndCleanup = function() {
							var e = this.state;
							e.hasUserMedia && (t.stopMediaStream(this.stream), e.src && window.URL.revokeObjectURL(e.src));
						}, t.prototype.getScreenshot = function(e) {
							var t = this, n = t.state, r = t.props;
							if (!n.hasUserMedia) return null;
							var i = this.getCanvas(e);
							return i && i.toDataURL(r.screenshotFormat, r.screenshotQuality);
						}, t.prototype.getCanvas = function(e) {
							var t = this, n = t.state, r = t.props;
							if (!this.video || !n.hasUserMedia || !this.video.videoHeight) return null;
							if (!this.ctx) {
								var i = this.video.videoWidth, a = this.video.videoHeight;
								if (!this.props.forceScreenshotSourceSize) {
									var o = i / a;
									i = r.minScreenshotWidth || this.video.clientWidth, a = i / o, r.minScreenshotHeight && a < r.minScreenshotHeight && (a = r.minScreenshotHeight, i = a * o);
								}
								this.canvas = document.createElement("canvas"), this.canvas.width = e?.width || i, this.canvas.height = e?.height || a, this.ctx = this.canvas.getContext("2d");
							}
							var s = this, c = s.ctx, l = s.canvas;
							return c && l && (l.width = e?.width || l.width, l.height = e?.height || l.height, r.mirrored && (c.translate(l.width, 0), c.scale(-1, 1)), c.imageSmoothingEnabled = r.imageSmoothing, c.drawImage(this.video, 0, 0, e?.width || l.width, e?.height || l.height), r.mirrored && (c.scale(-1, 1), c.translate(-l.width, 0))), l;
						}, t.prototype.requestUserMedia = function() {
							var e = this, n = this.props, r = function(r, i) {
								var a = { video: typeof i < "u" ? i : !0 };
								n.audio && (a.audio = typeof r < "u" ? r : !0), e.requestUserMediaId++;
								var o = e.requestUserMediaId;
								navigator.mediaDevices.getUserMedia(a).then(function(n) {
									e.unmounted || o !== e.requestUserMediaId ? t.stopMediaStream(n) : e.handleUserMedia(null, n);
								}).catch(function(t) {
									e.handleUserMedia(t);
								});
							};
							if ("mediaDevices" in navigator) r(n.audioConstraints, n.videoConstraints);
							else {
								var i = function(e) {
									return { optional: [{ sourceId: e }] };
								}, a = function(e) {
									var t = e.deviceId;
									return typeof t == "string" ? t : Array.isArray(t) && t.length > 0 ? t[0] : typeof t == "object" && t.ideal ? t.ideal : null;
								};
								MediaStreamTrack.getSources(function(e) {
									var t = null, o = null;
									e.forEach(function(e) {
										e.kind === "audio" ? t = e.id : e.kind === "video" && (o = e.id);
									});
									var s = a(n.audioConstraints);
									s && (t = s);
									var c = a(n.videoConstraints);
									c && (o = c), r(i(t), i(o));
								});
							}
						}, t.prototype.handleUserMedia = function(e, t) {
							var n = this.props;
							if (e || !t) {
								this.setState({ hasUserMedia: !1 }), n.onUserMediaError(e);
								return;
							}
							this.stream = t;
							try {
								this.video && (this.video.srcObject = t), this.setState({ hasUserMedia: !0 });
							} catch {
								this.setState({
									hasUserMedia: !0,
									src: window.URL.createObjectURL(t)
								});
							}
							n.onUserMedia(t);
						}, t.prototype.render = function() {
							var e = this, t = this, n = t.state, i = t.props, s = i.audio;
							i.forceScreenshotSourceSize;
							var c = i.disablePictureInPicture;
							i.onUserMedia, i.onUserMediaError, i.screenshotFormat, i.screenshotQuality, i.minScreenshotWidth, i.minScreenshotHeight, i.audioConstraints, i.videoConstraints, i.imageSmoothing;
							var l = i.mirrored, u = i.style, d = u === void 0 ? {} : u, f = i.children, p = o(i, [
								"audio",
								"forceScreenshotSourceSize",
								"disablePictureInPicture",
								"onUserMedia",
								"onUserMediaError",
								"screenshotFormat",
								"screenshotQuality",
								"minScreenshotWidth",
								"minScreenshotHeight",
								"audioConstraints",
								"videoConstraints",
								"imageSmoothing",
								"mirrored",
								"style",
								"children"
							]), m = l ? a(a({}, d), { transform: (d.transform || "") + " scaleX(-1)" }) : d, h = { getScreenshot: this.getScreenshot.bind(this) };
							return r.createElement(r.Fragment, null, r.createElement("video", a({
								autoPlay: !0,
								disablePictureInPicture: c,
								src: n.src,
								muted: !s,
								playsInline: !0,
								ref: function(t) {
									e.video = t;
								},
								style: m
							}, p)), f && f(h));
						}, t.defaultProps = {
							audio: !1,
							disablePictureInPicture: !1,
							forceScreenshotSourceSize: !1,
							imageSmoothing: !0,
							mirrored: !1,
							onUserMedia: function() {},
							onUserMediaError: function() {},
							screenshotFormat: "image/webp",
							screenshotQuality: .92
						}, t;
					}(r.Component);
				}),
				react: (function(t, n) {
					t.exports = e;
				})
			}).default;
		});
	}(W)), W.exports;
}
var ce = q(), J = /* @__PURE__ */ s(ce), Y = ({ width: e }) => /* @__PURE__ */ w.jsxs(P, {
	width: e,
	children: [/* @__PURE__ */ w.jsx(_, {
		size: "threeXL",
		color: u.gray60,
		content: j
	}), /* @__PURE__ */ w.jsxs(F, { children: ["This app would like to use your camera.", /* @__PURE__ */ w.jsx(I, {
		href: T,
		rel: "noopener noreferrer",
		target: "_blank",
		children: "Learn how to allow access."
	})] })]
}), le = (0, k.memo)(({ handleCapture: n, width: r, disabled: i, clearPhotoInProgress: a, setClearPhotoInProgress: o, facingMode: s, setFacingMode: c, resolutionHeight: u, testOverride: d }) => {
	let [f, p] = (0, k.useState)(d || "pending"), m = (0, k.useRef)(null), [g, _] = (0, k.useState)(r), v = (0, k.useCallback)(t(1e3, _), []);
	(0, k.useEffect)(() => {
		v(r);
	}, [r, v]);
	function y() {
		m.current !== null && n(m.current.getScreenshot());
	}
	let b = h(), ee = (0, k.useMemo)(() => ({
		height: { ideal: u },
		facingMode: s
	}), [u, s]), te = (0, k.useMemo)(() => ({
		width: { ideal: g },
		facingMode: s
	}), [g, s]), x = l(u) ? te : ee;
	return /* @__PURE__ */ w.jsxs(ae, {
		"data-testid": "stCameraInputWebcamComponent",
		children: [
			f !== "success" && !i && !a ? /* @__PURE__ */ w.jsx(Y, { width: g }) : e() && /* @__PURE__ */ w.jsx(U, { switchFacingMode: c }),
			/* @__PURE__ */ w.jsx(P, {
				"data-testid": "stCameraInputWebcamStyledBox",
				hidden: f !== "success" && !i && !a,
				width: g,
				children: !i && /* @__PURE__ */ w.jsx(J, {
					audio: !1,
					ref: m,
					screenshotFormat: "image/jpeg",
					screenshotQuality: 1,
					width: g,
					height: g * 9 / 16,
					style: { borderRadius: `${b.radii.default} ${b.radii.default} 0 0` },
					onUserMediaError: () => {
						p("error");
					},
					onUserMedia: () => {
						p("success"), o(!1);
					},
					videoConstraints: x,
					forceScreenshotSourceSize: !l(u)
				})
			}),
			/* @__PURE__ */ w.jsx(V, {
				onClick: y,
				disabled: f !== "success" || i || a,
				children: "Take Photo"
			})
		]
	});
}), ue = "RESTORED_FROM_WIDGET", de = 150, fe = m.getLogger("CameraInput"), X = (e) => {
	let t = e.filter((e) => e.status.type === "uploaded").map((e) => {
		let { name: t, size: n, status: r } = e, { fileId: i, fileUrls: o } = r;
		return new a({
			fileId: i,
			fileUrls: o,
			name: t,
			size: n
		});
	});
	return new i({ uploadedFileInfo: t });
}, pe = (e, t) => {
	let n = t.getFileUploaderStateValue(e);
	if (l(n)) return {
		files: [],
		nextLocalId: 1,
		imgSrc: null
	};
	let { uploadedFileInfo: r } = n;
	if (l(r) || r.length === 0) return {
		files: [],
		nextLocalId: 1,
		imgSrc: null
	};
	let i = 1, a = r.map((e) => {
		let t = e.name, n = e.size, r = e.fileId, a = e.fileUrls, o = new E(t, n, i, {
			type: "uploaded",
			fileId: r,
			fileUrls: a
		});
		return i += 1, o;
	});
	return {
		files: a,
		nextLocalId: i,
		imgSrc: a.length > 0 ? ue : null
	};
};
function me(e, t) {
	return fetch(e).then((e) => e.arrayBuffer()).then((e) => new File([e], t, { type: "image/jpeg" }));
}
var Z = (0, k.memo)(({ element: e, widgetMgr: t, uploadClient: n, disabled: r, fragmentId: i, testOverride: a }) => {
	let { width: s, elementRef: u } = p(), f = (0, k.useRef)(null);
	f.current === null && (f.current = pe(e, t));
	let { files: m, nextLocalId: h, imgSrc: g } = f.current, v = (0, k.useRef)(h), [y, b] = (0, k.useState)(() => m), x = (0, k.useRef)(y);
	(0, k.useLayoutEffect)(() => {
		x.current = y;
	}, [y]);
	let [S, C] = (0, k.useState)(() => g), [T, D] = (0, k.useState)(!1), [O, A] = (0, k.useState)(!0), [j, N] = (0, k.useState)(!1), [F, I] = (0, k.useState)(H.USER), L = (0, k.useRef)([]), R = (0, k.useRef)(null), z = (0, k.useCallback)(() => {
		L.current.length !== 0 && (L.current.forEach((e) => e()), L.current = []);
	}, []), { clear: B, restart: U } = ee(() => {
		z();
	}, de, { autoStart: !1 }), W = (0, k.useCallback)(() => new Promise((e) => {
		L.current.push(e), U();
	}), [U]);
	(0, k.useEffect)(() => () => {
		B(), z(), R.current = null;
	}, [B, z]);
	let G = (0, k.useCallback)(() => {
		let e = v.current;
		return v.current += 1, e;
	}, []), K = (0, k.useMemo)(() => y.some((e) => e.status.type === "uploading") ? "updating" : "ready", [y]), q = (0, k.useMemo)(() => {
		let e = y.at(-1);
		if (e?.status.type === "uploading") return e.status.progress;
	}, [y]), ce = (0, k.useCallback)(() => {
		I((e) => e === H.USER ? H.ENVIRONMENT : H.USER);
	}, []), J = (0, k.useCallback)((e) => x.current.find((t) => t.id === e), []), Y = (0, k.useCallback)((e) => {
		(0, ie.flushSync)(() => {
			b((t) => [...t, e]);
		});
	}, []), Z = (0, k.useCallback)((e) => {
		b((t) => t.filter((t) => t.id !== e));
	}, []), Q = (0, k.useCallback)((e, t) => {
		b((n) => n.map((n) => n.id === e ? t : n));
	}, []), he = (0, k.useCallback)((e, t) => {
		D(!1);
		let n = J(e);
		l(n) || n.status.type !== "uploading" || Q(n.id, n.setStatus({
			type: "uploaded",
			fileId: t.fileId,
			fileUrls: t
		}));
	}, [J, Q]), ge = (0, k.useCallback)((e, t) => {
		let n = J(t);
		if (l(n) || n.status.type !== "uploading") return;
		let r = e.total ? Math.round(e.loaded * 100 / e.total) : 0;
		n.status.progress !== r && Q(t, n.setStatus({
			type: "uploading",
			abortController: n.status.abortController,
			progress: r
		}));
	}, [J, Q]), _e = (0, k.useCallback)((t, r) => {
		let i = new AbortController(), a = new E(r.name, r.size, G(), {
			type: "uploading",
			abortController: i,
			progress: 1
		});
		Y(a), n.uploadFile(e, t.uploadUrl, r, (e) => ge(e, a.id), i.signal).then(() => he(a.id, t)).catch((e) => {
			e instanceof DOMException && e.name === "AbortError" || Q(a.id, a.setStatus({
				type: "error",
				errorMessage: c(e)
			}));
		});
	}, [
		Y,
		e,
		G,
		he,
		ge,
		Q,
		n
	]), $ = (0, k.useCallback)((e) => {
		let t = J(e);
		l(t) || (t.status.type === "uploading" && t.status.abortController.abort(), t.status.type === "uploaded" && t.status.fileUrls.deleteUrl && n.deleteFile(t.status.fileUrls.deleteUrl), Z(e));
	}, [
		J,
		Z,
		n
	]), ve = (0, k.useCallback)((e) => {
		if (e === null) return Promise.resolve();
		if (R.current) return R.current;
		C(e), D(!0), A(!1);
		let t = me(e, `camera-input-${(/* @__PURE__ */ new Date()).toISOString().replaceAll(":", "_")}.jpg`).then((e) => n.fetchFileURLs([e]).then((t) => ({
			file: e,
			fileUrls: t[0]
		}))).then(({ file: e, fileUrls: t }) => _e(t, e)).then(W).then(() => {
			A(!0);
		}).catch((e) => {
			fe.error(e);
		}).finally(() => {
			R.current = null;
		});
		return R.current = t, t;
	}, [
		n,
		_e,
		W
	]), ye = (0, k.useCallback)((e) => {
		ve(e);
	}, [ve]), be = (0, k.useCallback)(() => {
		y.length !== 0 && (y.forEach((e) => $(e.id)), C(null), N(!0));
	}, [y, $]);
	(0, k.useEffect)(() => {
		t.getFileUploaderStateValue(e) === void 0 && t.setFileUploaderStateValue(e.id, X(y), {
			formId: e.formId,
			fragmentId: i,
			fromUser: !1
		});
	}, []), (0, k.useEffect)(() => {
		if (K !== "ready") return;
		let n = X(y), r = t.getFileUploaderStateValue(e);
		d(n, r) || t.setFileUploaderStateValue(e.id, n, {
			formId: e.formId,
			fragmentId: i,
			fromUser: !0
		});
	}, [
		K,
		y,
		t,
		e,
		i
	]);
	let xe = (0, k.useCallback)(() => {
		b([]), C(null);
		let n = X([]);
		t.setFileUploaderStateValue(e.id, n, {
			formId: e.formId,
			fragmentId: i,
			fromUser: !0
		});
	}, [
		e,
		i,
		t
	]);
	return te({
		element: e,
		widgetMgr: t,
		onFormCleared: xe
	}), /* @__PURE__ */ w.jsxs(ae, {
		className: "stCameraInput",
		"data-testid": "stCameraInput",
		ref: u,
		children: [/* @__PURE__ */ w.jsx(ne, {
			label: e.label,
			disabled: r,
			labelVisibility: o(e.labelVisibility?.value),
			children: e.help && /* @__PURE__ */ w.jsx(re, {
				content: e.help,
				label: e.label
			})
		}), S ? /* @__PURE__ */ w.jsxs(w.Fragment, { children: [/* @__PURE__ */ w.jsx(P, {
			width: s,
			children: S !== ue && /* @__PURE__ */ w.jsx(oe, {
				src: S,
				alt: "Snapshot",
				opacity: T || !O ? "50%" : "100%",
				width: s,
				height: s * 9 / 16
			})
		}), /* @__PURE__ */ w.jsx(V, {
			onClick: be,
			progress: q,
			disabled: !!q || r,
			children: q ? "Uploading..." : /* @__PURE__ */ w.jsxs(se, { children: [/* @__PURE__ */ w.jsx(_, {
				content: M,
				margin: "0 xs 0 0",
				size: "sm"
			}), " Clear photo"] })
		})] }) : /* @__PURE__ */ w.jsx(le, {
			handleCapture: ye,
			width: s,
			disabled: r,
			clearPhotoInProgress: j,
			setClearPhotoInProgress: N,
			facingMode: F,
			setFacingMode: ce,
			resolutionHeight: e.resolutionHeight ?? void 0,
			testOverride: a
		})]
	});
});
//#endregion
export { Z as default };

//# sourceMappingURL=CameraInput-Cpc8v52c-DAA5P4W1.js.map