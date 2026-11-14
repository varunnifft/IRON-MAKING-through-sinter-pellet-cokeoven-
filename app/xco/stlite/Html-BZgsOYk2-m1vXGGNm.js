import { Di as e, ds as t, ms as n, za as r } from "./index-B1FrxEMd-BsPMjC5n.js";
//#region ../react/build/Html-BZgsOYk2.js
var i = /* @__PURE__ */ n(t(), 1);
function a(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function o(e) {
	if (Array.isArray(e)) return e;
}
function s(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t !== 0) for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function c() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function l(e, t) {
	return o(e) || s(e, t) || u(e, t) || c();
}
function u(e, t) {
	if (e) {
		if (typeof e == "string") return a(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0;
	}
}
var ee = Object.entries, d = Object.setPrototypeOf, te = Object.isFrozen, ne = Object.getPrototypeOf, re = Object.getOwnPropertyDescriptor, f = Object.freeze, p = Object.seal, ie = Object.create, ae = typeof Reflect < "u" && Reflect, m = ae.apply, h = ae.construct;
f ||= function(e) {
	return e;
}, p ||= function(e) {
	return e;
}, m ||= function(e, t) {
	var n = [...arguments].slice(2);
	return e.apply(t, n);
}, h ||= function(e) {
	return new e(...[...arguments].slice(1));
};
var g = w(Array.prototype.forEach), oe = w(Array.prototype.lastIndexOf), se = w(Array.prototype.pop), ce = w(Array.prototype.push), le = w(Array.prototype.splice), _ = Array.isArray, ue = w(String.prototype.toLowerCase), de = w(String.prototype.toString), fe = w(String.prototype.match), pe = w(String.prototype.replace), me = w(String.prototype.indexOf), he = w(String.prototype.trim), ge = w(Number.prototype.toString), _e = w(Boolean.prototype.toString), v = typeof BigInt > "u" ? null : w(BigInt.prototype.toString), y = typeof Symbol > "u" ? null : w(Symbol.prototype.toString), b = w(Object.prototype.hasOwnProperty), x = w(Object.prototype.toString), S = w(RegExp.prototype.test), C = ve(TypeError);
function w(e) {
	return function(t) {
		t instanceof RegExp && (t.lastIndex = 0);
		var n = [...arguments].slice(1);
		return m(e, t, n);
	};
}
function ve(e) {
	return function() {
		return h(e, [...arguments]);
	};
}
function T(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ue;
	if (d && d(e, null), !_(t)) return e;
	let r = t.length;
	for (; r--;) {
		let i = t[r];
		if (typeof i == "string") {
			let e = n(i);
			e !== i && (te(t) || (t[r] = e), i = e);
		}
		e[i] = !0;
	}
	return e;
}
function E(e) {
	for (let t = 0; t < e.length; t++) b(e, t) || (e[t] = null);
	return e;
}
function D(e) {
	let t = ie(null);
	for (let r of ee(e)) {
		var n = l(r, 2);
		let i = n[0], a = n[1];
		b(e, i) && (t[i] = _(a) ? E(a) : a && typeof a == "object" && a.constructor === Object ? D(a) : a);
	}
	return t;
}
function ye(e) {
	switch (typeof e) {
		case "string": return e;
		case "number": return ge(e);
		case "boolean": return _e(e);
		case "bigint": return v ? v(e) : "0";
		case "symbol": return y ? y(e) : "Symbol()";
		case "undefined": return x(e);
		case "function":
		case "object": {
			if (e === null) return x(e);
			let t = e, n = O(t, "toString");
			if (typeof n == "function") {
				let e = n(t);
				return typeof e == "string" ? e : x(e);
			}
			return x(e);
		}
		default: return x(e);
	}
}
function O(e, t) {
	for (; e !== null;) {
		let n = re(e, t);
		if (n) {
			if (n.get) return w(n.get);
			if (typeof n.value == "function") return w(n.value);
		}
		e = ne(e);
	}
	function n() {
		return null;
	}
	return n;
}
function be(e) {
	try {
		return S(e, ""), !0;
	} catch {
		return !1;
	}
}
var xe = f(/* @__PURE__ */ "a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr".split(".")), Se = f(/* @__PURE__ */ "svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern".split(".")), Ce = f([
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence"
]), we = f([
	"animate",
	"color-profile",
	"cursor",
	"discard",
	"font-face",
	"font-face-format",
	"font-face-name",
	"font-face-src",
	"font-face-uri",
	"foreignobject",
	"hatch",
	"hatchpath",
	"mesh",
	"meshgradient",
	"meshpatch",
	"meshrow",
	"missing-glyph",
	"script",
	"set",
	"solidcolor",
	"unknown",
	"use"
]), Te = f(/* @__PURE__ */ "math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts".split(".")), Ee = f([
	"maction",
	"maligngroup",
	"malignmark",
	"mlongdiv",
	"mscarries",
	"mscarry",
	"msgroup",
	"mstack",
	"msline",
	"msrow",
	"semantics",
	"annotation",
	"annotation-xml",
	"mprescripts",
	"none"
]), De = f(["#text"]), Oe = f(/* @__PURE__ */ "accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns".split(".")), ke = f(/* @__PURE__ */ "accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dominant-baseline.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.pointer-events.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-orientation.text-rendering.textlength.type.u1.u2.unicode.values.vector-effect.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan".split(".")), Ae = f(/* @__PURE__ */ "accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns".split(".")), je = f([
	"xlink:href",
	"xml:id",
	"xlink:title",
	"xml:space",
	"xmlns:xlink"
]), Me = p(/{{[\w\W]*|^[\w\W]*}}/g), Ne = p(/<%[\w\W]*|^[\w\W]*%>/g), Pe = p(/\${[\w\W]*/g), Fe = p(/^data-[\-\w.\u00B7-\uFFFF]+$/), Ie = p(/^aria-[\-\w]+$/), Le = p(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), Re = p(/^(?:\w+script|data):/i), ze = p(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Be = p(/^html$/i), Ve = p(/^[a-z][.\w]*(-[.\w]+)+$/i), He = p(/<[/\w!]/g), Ue = p(/<[/\w]/g), We = p(/<\/no(script|embed|frames)/i), Ge = p(/\/>/i), k = {
	element: 1,
	attribute: 2,
	text: 3,
	cdataSection: 4,
	entityReference: 5,
	entityNode: 6,
	processingInstruction: 7,
	comment: 8,
	document: 9,
	documentType: 10,
	documentFragment: 11,
	notation: 12
}, A = [
	"style",
	"script",
	"xmp",
	"iframe",
	"noembed",
	"noframes",
	"plaintext",
	"noscript"
], Ke = f(T({}, A)), qe = function() {
	let e = {};
	return g(A, (t) => {
		e[t] = p(RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
	}), f(e);
}(), Je = function() {
	return typeof window > "u" ? null : window;
}, Ye = function(e, t) {
	if (typeof e != "object" || typeof e.createPolicy != "function") return null;
	let n = null, r = "data-tt-policy-suffix";
	t && t.hasAttribute(r) && (n = t.getAttribute(r));
	let i = "dompurify" + (n ? "#" + n : "");
	try {
		return e.createPolicy(i, {
			createHTML(e) {
				return e;
			},
			createScriptURL(e) {
				return e;
			}
		});
	} catch {
		return console.warn("TrustedTypes policy " + i + " could not be created."), null;
	}
}, Xe = function() {
	return {
		afterSanitizeAttributes: [],
		afterSanitizeElements: [],
		afterSanitizeShadowDOM: [],
		beforeSanitizeAttributes: [],
		beforeSanitizeElements: [],
		beforeSanitizeShadowDOM: [],
		uponSanitizeAttribute: [],
		uponSanitizeElement: [],
		uponSanitizeShadowNode: []
	};
}, j = function(e, t, n, r) {
	return b(e, t) && _(e[t]) ? T(r.base ? D(r.base) : {}, e[t], r.transform) : n;
}, Ze = function(e, t, n) {
	let r = b(e, t) ? e[t] : void 0;
	return r && typeof r == "object" ? D(r) : n();
};
function Qe() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Je(), t = (e) => Qe(e);
	if (t.version = "3.4.16", t.removed = [], !e || !e.document || e.document.nodeType !== k.document || !e.Element) return t.isSupported = !1, t;
	let n = e.document, r = n, i = r.currentScript;
	e.DocumentFragment;
	let a = e.HTMLTemplateElement, o = e.Node, s = e.Element, c = e.NodeFilter;
	e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
	let l = e.DOMParser, u = e.trustedTypes, d = s.prototype, te = O(d, "cloneNode"), ne = O(d, "remove"), re = O(d, "removeAttributeNode"), ae = O(d, "nextSibling"), m = O(d, "childNodes"), h = O(d, "parentNode"), ge = O(d, "shadowRoot"), _e = O(d, "attributes"), v = o && o.prototype ? O(o.prototype, "nodeType") : null, y = o && o.prototype ? O(o.prototype, "nodeName") : null, x = o && o.prototype ? O(o.prototype, "ownerDocument") : null, w = function(e) {
		return v ? v(e) : e.nodeType;
	}, ve = function(e) {
		return y ? y(e) : e.nodeName;
	};
	if (typeof a == "function") {
		let e = n.createElement("template");
		e.content && e.content.ownerDocument && (n = e.content.ownerDocument);
	}
	let E, A = "", M, $e = !1, N = 0, et = function() {
		if (N > 0) throw C("A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the \"DOMPurify and Trusted Types\" section of the README.");
	}, P = function(e) {
		et(), N++;
		try {
			return E.createHTML(e);
		} finally {
			N--;
		}
	}, tt = function(e) {
		et(), N++;
		try {
			return E.createScriptURL(e);
		} finally {
			N--;
		}
	}, nt = function() {
		return $e ||= (M = Ye(u, i), !0), M;
	}, rt = n, it = rt.implementation, at = rt.createNodeIterator, ot = rt.createDocumentFragment, st = rt.getElementsByTagName, ct = r.importNode, F = Xe();
	t.isSupported = typeof ee == "function" && typeof h == "function" && it && it.createHTMLDocument !== void 0;
	let lt = Me, ut = Ne, dt = Pe, ft = Fe, pt = Ie, mt = Re, ht = ze, gt = Ve, _t = Le, I = null, vt = T({}, [
		...xe,
		...Se,
		...Ce,
		...Te,
		...De
	]), L = null, yt = T({}, [
		...Oe,
		...ke,
		...Ae,
		...je
	]), R = Object.seal(ie(null, {
		tagNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		allowCustomizedBuiltInElements: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: !1
		}
	})), bt = null, xt = null, z = Object.seal(ie(null, {
		tagCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		}
	})), St = !0, Ct = !0, wt = !1, Tt = !0, B = !1, V = !0, H = !1, Et = !1, Dt = null, Ot = null, kt = !1, U = !1, At = !1, jt = !1, Mt = !0, Nt = !1, Pt = "user-content-", Ft = !0, It = !1, W = {}, G = null, Lt = T({}, /* @__PURE__ */ "annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp".split(".")), Rt = null, zt = T({}, [
		"audio",
		"video",
		"img",
		"source",
		"image",
		"track"
	]), Bt = null, Vt = T({}, [
		"alt",
		"class",
		"for",
		"id",
		"label",
		"name",
		"pattern",
		"placeholder",
		"role",
		"summary",
		"title",
		"value",
		"style",
		"xmlns"
	]), Ht = "http://www.w3.org/1998/Math/MathML", Ut = "http://www.w3.org/2000/svg", K = "http://www.w3.org/1999/xhtml", q = K, Wt = !1, Gt = null, Kt = T({}, [
		Ht,
		Ut,
		K
	], de), qt = f([
		"mi",
		"mo",
		"mn",
		"ms",
		"mtext"
	]), Jt = T({}, qt), Yt = f(["annotation-xml"]), Xt = T({}, Yt), Zt = T({}, [
		"title",
		"style",
		"font",
		"a",
		"script"
	]), Qt = null, $t = ["application/xhtml+xml", "text/html"], J = null, Y = null, en = n.createElement("form"), tn = function(e) {
		return e instanceof RegExp || e instanceof Function;
	}, nn = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		if (Y && Y === e) return;
		(!e || typeof e != "object") && (e = {}), e = D(e), Qt = $t.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? "text/html" : e.PARSER_MEDIA_TYPE, J = Qt === "application/xhtml+xml" ? de : ue, I = j(e, "ALLOWED_TAGS", vt, { transform: J }), L = j(e, "ALLOWED_ATTR", yt, { transform: J }), Gt = j(e, "ALLOWED_NAMESPACES", Kt, { transform: de }), Bt = j(e, "ADD_URI_SAFE_ATTR", Vt, {
			transform: J,
			base: Vt
		}), Rt = j(e, "ADD_DATA_URI_TAGS", zt, {
			transform: J,
			base: zt
		}), G = j(e, "FORBID_CONTENTS", Lt, { transform: J }), bt = j(e, "FORBID_TAGS", D({}), { transform: J }), xt = j(e, "FORBID_ATTR", D({}), { transform: J }), W = b(e, "USE_PROFILES") ? e.USE_PROFILES && typeof e.USE_PROFILES == "object" ? D(e.USE_PROFILES) : e.USE_PROFILES : !1, St = e.ALLOW_ARIA_ATTR !== !1, Ct = e.ALLOW_DATA_ATTR !== !1, wt = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Tt = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, B = e.SAFE_FOR_TEMPLATES || !1, V = e.SAFE_FOR_XML !== !1, H = e.WHOLE_DOCUMENT || !1, U = e.RETURN_DOM || !1, At = e.RETURN_DOM_FRAGMENT || !1, jt = e.RETURN_TRUSTED_TYPE || !1, kt = e.FORCE_BODY || !1, Mt = e.SANITIZE_DOM !== !1, Nt = e.SANITIZE_NAMED_PROPS || !1, Ft = e.KEEP_CONTENT !== !1, It = e.IN_PLACE || !1, _t = be(e.ALLOWED_URI_REGEXP) ? e.ALLOWED_URI_REGEXP : Le, q = typeof e.NAMESPACE == "string" ? e.NAMESPACE : K, Jt = Ze(e, "MATHML_TEXT_INTEGRATION_POINTS", () => T({}, qt)), Xt = Ze(e, "HTML_INTEGRATION_POINTS", () => T({}, Yt));
		let t = Ze(e, "CUSTOM_ELEMENT_HANDLING", () => ie(null));
		if (R = ie(null), b(t, "tagNameCheck") && tn(t.tagNameCheck) && (R.tagNameCheck = t.tagNameCheck), b(t, "attributeNameCheck") && tn(t.attributeNameCheck) && (R.attributeNameCheck = t.attributeNameCheck), b(t, "allowCustomizedBuiltInElements") && typeof t.allowCustomizedBuiltInElements == "boolean" && (R.allowCustomizedBuiltInElements = t.allowCustomizedBuiltInElements), p(R), B && (Ct = !1), At && (U = !0), W && (I = T({}, De), L = ie(null), W.html === !0 && (T(I, xe), T(L, Oe)), W.svg === !0 && (T(I, Se), T(L, ke), T(L, je)), W.svgFilters === !0 && (T(I, Ce), T(L, ke), T(L, je)), W.mathMl === !0 && (T(I, Te), T(L, Ae), T(L, je))), z.tagCheck = null, z.attributeCheck = null, b(e, "ADD_TAGS") && (typeof e.ADD_TAGS == "function" ? z.tagCheck = e.ADD_TAGS : _(e.ADD_TAGS) && (I === vt && (I = D(I)), T(I, e.ADD_TAGS, J))), b(e, "ADD_ATTR") && (typeof e.ADD_ATTR == "function" ? z.attributeCheck = e.ADD_ATTR : _(e.ADD_ATTR) && (L === yt && (L = D(L)), T(L, e.ADD_ATTR, J))), b(e, "ADD_FORBID_CONTENTS") && _(e.ADD_FORBID_CONTENTS) && (G === Lt && (G = D(G)), T(G, e.ADD_FORBID_CONTENTS, J)), Ft && (I["#text"] = !0), H && T(I, [
			"html",
			"head",
			"body"
		]), I.table && (T(I, ["tbody"]), delete bt.tbody), e.TRUSTED_TYPES_POLICY) {
			if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function") throw C("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
			if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw C("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
			let t = E;
			E = e.TRUSTED_TYPES_POLICY;
			try {
				A = P("");
			} catch (e) {
				throw E = t, e;
			}
		} else e.TRUSTED_TYPES_POLICY === null ? (E = void 0, A = "") : (E === void 0 && (E = nt()), E && typeof A == "string" && (A = P("")));
		f && f(e), Y = e;
	}, rn = T({}, [
		...Se,
		...Ce,
		...we
	]), an = T({}, [...Te, ...Ee]), on = function(e, t, n) {
		return t.namespaceURI === K ? e === "svg" : t.namespaceURI === Ht ? e === "svg" && (n === "annotation-xml" || Jt[n]) : !!rn[e];
	}, sn = function(e, t, n) {
		return t.namespaceURI === K ? e === "math" : t.namespaceURI === Ut ? e === "math" && Xt[n] : !!an[e];
	}, cn = function(e, t, n) {
		return t.namespaceURI === Ut && !Xt[n] || t.namespaceURI === Ht && !Jt[n] ? !1 : !an[e] && (Zt[e] || !rn[e]);
	}, ln = function(e) {
		let t = h(e);
		(!t || !t.tagName) && (t = {
			namespaceURI: q,
			tagName: "template"
		});
		let n = ue(e.tagName), r = ue(t.tagName);
		return Gt[e.namespaceURI] ? e.namespaceURI === Ut ? on(n, t, r) : e.namespaceURI === Ht ? sn(n, t, r) : e.namespaceURI === K ? cn(n, t, r) : !!(Qt === "application/xhtml+xml" && Gt[e.namespaceURI]) : !1;
	}, X = function(e) {
		ce(t.removed, { element: e });
		try {
			h(e).removeChild(e);
		} catch {
			if (ne(e), !h(e)) throw C("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
		}
	}, un = function(e, t, n) {
		try {
			re(e, t);
		} catch {
			try {
				e.removeAttribute(n);
			} catch {}
		}
	}, dn = function(e) {
		pn(e);
		let t = m(e);
		if (t) {
			let e = [];
			g(t, (t) => {
				ce(e, t);
			}), g(e, (e) => {
				try {
					ne(e);
				} catch {}
			});
		}
		let n = _e(e);
		if (n) for (let t = n.length - 1; t >= 0; --t) {
			let r = n[t], i = r && r.name;
			typeof i == "string" && un(e, r, i);
		}
	}, Z = function(e, n, r) {
		if (!r) try {
			r = n.getAttributeNode(e);
		} catch {
			r = null;
		}
		ce(t.removed, {
			attribute: r || null,
			from: n
		});
		try {
			r ? re(n, r) : n.removeAttribute(e);
		} catch {
			try {
				n.removeAttribute(e);
			} catch {}
		}
		if (e === "is") {
			if (U || At) try {
				X(n);
			} catch {}
			else try {
				n.setAttribute(e, "");
			} catch {}
		}
	}, fn = function(e) {
		let t = _e(e);
		if (t) for (let n = t.length - 1; n >= 0; --n) {
			let r = t[n], i = r && r.name;
			typeof i != "string" || L[J(i)] || un(e, r, i);
		}
	}, pn = function(e) {
		let t = [e];
		for (; t.length > 0;) {
			let e = t.pop();
			w(e) === k.element && fn(e);
			let n = m(e);
			if (n) for (let e = n.length - 1; e >= 0; --e) t.push(n[e]);
		}
	}, mn = function(e, t) {
		return V ? e === "patchsrc" || e === "for" && t !== "label" && t !== "output" : !1;
	}, hn = function(e) {
		if (!V) return;
		let t = [e];
		for (; t.length > 0;) {
			let e = t.pop(), n = w(e);
			if (n === k.processingInstruction || n === k.comment && S(Ue, e.data)) {
				try {
					ne(e);
				} catch {}
				continue;
			}
			if (n === k.element) {
				let t = e, n = J(ve(e));
				try {
					t.hasAttribute && t.hasAttribute("patchsrc") && t.removeAttribute("patchsrc"), t.hasAttribute && t.hasAttribute("for") && mn("for", n) && t.removeAttribute("for");
				} catch {}
			}
			let r = m(e);
			if (r) for (let e = r.length - 1; e >= 0; --e) t.push(r[e]);
		}
	}, gn = function(e) {
		let t = null, r = null;
		if (kt) e = "<remove></remove>" + e;
		else {
			let t = fe(e, /^[\r\n\t ]+/);
			r = t && t[0];
		}
		Qt === "application/xhtml+xml" && q === K && (e = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + e + "</body></html>");
		let i = E ? P(e) : e;
		if (q === K) try {
			t = new l().parseFromString(i, Qt);
		} catch {}
		if (!t || !t.documentElement) {
			t = it.createDocument(q, "template", null);
			try {
				t.documentElement.innerHTML = Wt ? A : i;
			} catch {}
		}
		let a = t.body || t.documentElement;
		return e && r && a.insertBefore(n.createTextNode(r), a.childNodes[0] || null), q === K ? st.call(t, H ? "html" : "body")[0] : H ? t.documentElement : a;
	}, _n = function(e) {
		let t = x ? x(e) : e.ownerDocument;
		return at.call(t || e, e, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION, null);
	}, vn = function(e) {
		return e = pe(e, lt, " "), e = pe(e, ut, " "), e = pe(e, dt, " "), e;
	}, yn = function(e) {
		e.normalize();
		let t = x ? x(e) : e.ownerDocument, n = at.call(t || e, e, c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION, null), r = n.nextNode();
		for (; r;) r.data = vn(r.data), r = n.nextNode();
		let i = e.querySelectorAll?.call(e, "template");
		i && g(i, (e) => {
			Q(e.content) && yn(e.content);
		});
	}, bn = function(e) {
		let t = y ? y(e) : null;
		return typeof t != "string" || J(t) !== "form" ? !1 : typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || e.attributes !== _e(e) || typeof e.removeAttribute != "function" || typeof e.removeAttributeNode != "function" || typeof e.getAttributeNode != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function" || e.nodeType !== v(e) || e.childNodes !== m(e);
	}, Q = function(e) {
		if (!v || typeof e != "object" || !e) return !1;
		try {
			return v(e) === k.documentFragment;
		} catch {
			return !1;
		}
	}, xn = function(e) {
		if (!v || typeof e != "object" || !e) return !1;
		try {
			return typeof v(e) == "number";
		} catch {
			return !1;
		}
	};
	function $(e, n, r) {
		e.length !== 0 && g(e, (e) => {
			e.call(t, n, r, Y);
		});
	}
	let Sn = function(e, t) {
		return !!(V && e.hasChildNodes() && !xn(e.firstElementChild) && S(He, e.textContent) && S(He, e.innerHTML) || V && e.namespaceURI === K && Ke[t] && (xn(e.firstElementChild) || typeof e.textContent == "string" && S(qe[t], e.textContent)) || e.nodeType === k.processingInstruction || V && e.nodeType === k.comment && S(Ue, e.data));
	}, Cn = function(e, t) {
		return e instanceof RegExp ? S(e, t) : e instanceof Function && !!e(t, ...[...arguments].slice(2));
	}, wn = function(e, t, n) {
		if (!bt[t] && An(t) && Cn(R.tagNameCheck, t)) return !1;
		if (Ft && !G[t]) {
			let t = h(e), r = m(e);
			if (r && t) {
				let i = r.length;
				for (let a = i - 1; a >= 0; --a) {
					let i = e === n ? te(r[a], !0) : r[a];
					t.insertBefore(i, ae(e));
				}
			}
		}
		return X(e), !0;
	}, Tn = function(e, t, n, r) {
		return e.length === 0 ? t : t === n || t === r ? D(t) : t;
	}, En = function(e, t) {
		return e === t || h(e) !== null ? !1 : (It && pn(e), !0);
	}, Dn = function(e, n) {
		if ($(F.beforeSanitizeElements, e, null), En(e, n)) return !0;
		if (bn(e)) return X(e), !0;
		let r = J(ve(e));
		if (I = Tn(F.uponSanitizeElement, I, vt, Dt), $(F.uponSanitizeElement, e, {
			tagName: r,
			allowedTags: I
		}), En(e, n)) return !0;
		if (Sn(e, r)) return X(e), !0;
		if (bt[r] || !(z.tagCheck instanceof Function && z.tagCheck(r)) && !I[r]) {
			let t = wn(e, r, n);
			return t === !1 && ($(F.afterSanitizeElements, e, null), En(e, n)) ? !0 : t;
		}
		if (w(e) === k.element && !ln(e) || (r === "noscript" || r === "noembed" || r === "noframes") && S(We, e.innerHTML)) return X(e), !0;
		if (B && e.nodeType === k.text) {
			let n = vn(e.textContent);
			e.textContent !== n && (ce(t.removed, { element: e.cloneNode() }), e.textContent = n);
		}
		return $(F.afterSanitizeElements, e, null), En(e, n);
	}, On = function(e, t, r) {
		if (xt[t] || mn(t, e) || Mt && (t === "id" || t === "name") && (r in n || r in en)) return !1;
		let i = L[t] || z.attributeCheck instanceof Function && z.attributeCheck(t, e);
		return Ct && S(ft, t) || St && S(pt, t) ? !0 : i ? Bt[t] || S(_t, pe(r, ht, "")) || (t === "src" || t === "xlink:href" || t === "href") && e !== "script" && me(r, "data:") === 0 && Rt[e] || wt && !S(mt, pe(r, ht, "")) ? !0 : !r : An(e) && Cn(R.tagNameCheck, e) && Cn(R.attributeNameCheck, t, e) || t === "is" && R.allowCustomizedBuiltInElements && Cn(R.tagNameCheck, r);
	}, kn = T({}, [
		"annotation-xml",
		"color-profile",
		"font-face",
		"font-face-format",
		"font-face-name",
		"font-face-src",
		"font-face-uri",
		"missing-glyph"
	]), An = function(e) {
		return !kn[ue(e)] && S(gt, e);
	}, jn = function(e, t, n, r) {
		if (E && typeof u == "object" && typeof u.getAttributeType == "function" && !n) switch (u.getAttributeType(e, t)) {
			case "TrustedHTML": return P(r);
			case "TrustedScriptURL": return tt(r);
		}
		return r;
	}, Mn = function(e, t, n, r) {
		try {
			return n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r), !bn(e) || (X(e), !1);
		} catch {
			return Z(t, e), !1;
		}
	}, Nn = function(e, n) {
		if ($(F.beforeSanitizeAttributes, e, null), En(e, n)) return;
		let r = e.attributes;
		if (!r || bn(e)) return;
		L = Tn(F.uponSanitizeAttribute, L, yt, Ot);
		let i = {
			attrName: "",
			attrValue: "",
			keepAttr: !0,
			allowedAttributes: L,
			forceKeepAttr: void 0
		}, a = r.length, o = J(e.nodeName);
		for (; a--;) {
			let n = r[a], s = n.name, c = n.namespaceURI, l = n.value, u = J(s), ee = l, d = s === "value" ? ee : he(ee), te = !1;
			if (i.attrName = u, i.attrValue = d, i.keepAttr = !0, i.forceKeepAttr = void 0, $(F.uponSanitizeAttribute, e, i), d = i.attrValue, Nt && (u === "id" || u === "name") && me(d, Pt) !== 0 && (Z(s, e, n), d = Pt + d, te = !0), V && S(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, d)) {
				Z(s, e, n);
				continue;
			}
			if (u === "attributename" && fe(d, "href")) {
				Z(s, e, n);
				continue;
			}
			if (!i.forceKeepAttr) {
				if (!i.keepAttr) {
					Z(s, e, n);
					continue;
				}
				if (!Tt && S(Ge, d)) {
					Z(s, e, n);
					continue;
				}
				if (B && (d = vn(d)), !On(o, u, d)) {
					Z(s, e, n);
					continue;
				}
				d = jn(o, u, c, d), d !== ee && Mn(e, s, c, d) && te && se(t.removed);
			}
		}
		$(F.afterSanitizeAttributes, e, null), En(e, n);
	}, Pn = function(e) {
		let t = null, n = _n(e);
		for ($(F.beforeSanitizeShadowDOM, e, null); t = n.nextNode();) if ($(F.uponSanitizeShadowNode, t, null), Dn(t, e), Nn(t, e), Q(t.content) && Pn(t.content), w(t) === k.element) {
			let e = ge(t);
			Q(e) && (Fn(e), Pn(e));
		}
		$(F.afterSanitizeShadowDOM, e, null);
	}, Fn = function(e) {
		let t = [{
			node: e,
			shadow: null
		}];
		for (; t.length > 0;) {
			let e = t.pop();
			if (e.shadow) {
				Pn(e.shadow);
				continue;
			}
			let n = e.node, r = w(n) === k.element, i = m(n);
			if (i) for (let e = i.length - 1; e >= 0; --e) t.push({
				node: i[e],
				shadow: null
			});
			if (r) {
				let e = y ? y(n) : null;
				if (typeof e == "string" && J(e) === "template") {
					let e = n.content;
					Q(e) && t.push({
						node: e,
						shadow: null
					});
				}
			}
			if (r) {
				let e = ge(n);
				Q(e) && t.push({
					node: null,
					shadow: e
				}, {
					node: e,
					shadow: null
				});
			}
		}
	};
	return t.sanitize = function(e) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = null, a = null, o = null, s = null;
		if (Wt = !e, Wt && (e = "<!-->"), typeof e != "string" && !xn(e) && (e = ye(e), typeof e != "string")) throw C("dirty is not a string, aborting");
		if (!t.isSupported) return e;
		Et ? (I = Dt, L = Ot) : nn(n), (F.uponSanitizeElement.length > 0 || F.uponSanitizeAttribute.length > 0) && (I = D(I)), F.uponSanitizeAttribute.length > 0 && (L = D(L)), t.removed = [];
		let c = It && typeof e != "string" && xn(e);
		if (c) {
			hn(e);
			let t = ve(e);
			if (typeof t == "string") {
				let n = J(t);
				if (!I[n] || bt[n]) throw dn(e), C("root node is forbidden and cannot be sanitized in-place");
			}
			if (bn(e)) throw dn(e), C("root node is clobbered and cannot be sanitized in-place");
			try {
				Fn(e);
			} catch (t) {
				throw dn(e), t;
			}
		} else if (xn(e)) i = gn("<!---->"), a = i.ownerDocument.importNode(e, !0), a.nodeType === k.element && a.nodeName === "BODY" || a.nodeName === "HTML" ? i = a : i.appendChild(a), Fn(i);
		else {
			if (!U && !B && !H && e.indexOf("<") === -1) return E && jt ? P(e) : e;
			if (i = gn(e), !i) return U ? null : jt ? A : "";
		}
		i && kt && X(i.firstChild);
		let l = c ? e : i;
		try {
			let e = _n(l);
			for (; o = e.nextNode();) Dn(o, l), Nn(o, l), Q(o.content) && Pn(o.content);
		} catch (n) {
			throw c && (dn(e), g(t.removed, (e) => {
				e.element && pn(e.element);
			})), n;
		}
		if (c) {
			let n = !1;
			if (g(t.removed, (t) => {
				t.element && (t.element === e && (n = !0), pn(t.element));
			}), n) throw C("a node selected for removal could not be safely returned; refusing to sanitize in place");
			return B && yn(e), e;
		}
		if (U) {
			if (B && yn(i), At) for (s = ot.call(i.ownerDocument); i.firstChild;) s.appendChild(i.firstChild);
			else s = i;
			return (L.shadowroot || L.shadowrootmode) && (s = ct.call(r, s, !0)), s;
		}
		let u = H ? i.outerHTML : i.innerHTML;
		return H && I["!doctype"] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && S(Be, i.ownerDocument.doctype.name) && (u = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + u), B && (u = vn(u)), E && jt ? P(u) : u;
	}, t.setConfig = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		nn(e), Et = !0, Dt = I, Ot = L;
	}, t.clearConfig = function() {
		Y = null, Et = !1, Dt = null, Ot = null, E = M, A = "";
	}, t.isValidAttribute = function(e, t, n) {
		Y || nn({});
		let r = J(e), i = J(t);
		return On(r, i, n);
	}, t.addHook = function(e, t) {
		typeof t == "function" && b(F, e) && ce(F[e], t);
	}, t.removeHook = function(e, t) {
		if (b(F, e)) {
			if (t !== void 0) {
				let n = oe(F[e], t);
				return n === -1 ? void 0 : le(F[e], n, 1)[0];
			}
			return se(F[e]);
		}
	}, t.removeHooks = function(e) {
		b(F, e) && (F[e] = []);
	}, t.removeAllHooks = function() {
		F = Xe();
	}, t;
}
var M = Qe(), $e = "data-temp-href-target";
M.addHook("beforeSanitizeAttributes", function(e) {
	e instanceof HTMLElement && e.hasAttribute("target") && e.getAttribute("target") === "_blank" && e.setAttribute($e, "_blank");
}), M.addHook("afterSanitizeAttributes", function(e) {
	e instanceof HTMLElement && e.hasAttribute($e) && (e.setAttribute("target", "_blank"), e.setAttribute("rel", "noopener noreferrer"), e.removeAttribute($e));
});
var N = {
	USE_PROFILES: { html: !0 },
	FORCE_BODY: !0
}, et = /* @__PURE__ */ e("div", { target: "e18540fl0" })(({ theme: e }) => ({
	width: "100%",
	"ul, ol, dl": { paddingLeft: e.spacing.threeXL }
}), ""), P = (0, i.forwardRef)(function(e, t) {
	return /* @__PURE__ */ r.jsx(et, {
		className: "stHtml",
		"data-testid": "stHtml",
		ref: t,
		...e
	});
}), tt = {
	...N,
	ADD_TAGS: ["script", "style"],
	ADD_ATTR: [
		"src",
		"type",
		"async",
		"defer",
		"nonce",
		"crossorigin",
		"referrerpolicy",
		"integrity"
	]
};
function nt(e) {
	return M.sanitize(e, tt);
}
var rt = (0, i.memo)(({ body: e }) => {
	let t = (0, i.useRef)(null), n = (0, i.useMemo)(() => nt(e), [e]);
	return (0, i.useEffect)(() => {
		let e = t.current;
		return e ? (e.innerHTML = n, Array.from(e.querySelectorAll("script")).forEach((e) => {
			let t = document.createElement("script");
			for (let { name: n, value: r } of Array.from(e.attributes)) try {
				t.setAttribute(n, r);
			} catch {}
			e.src || (t.textContent = e.textContent), e.parentNode?.replaceChild(t, e);
		}), () => {
			e.innerHTML = "";
		}) : void 0;
	}, [n]), /* @__PURE__ */ r.jsx(P, { ref: t });
});
function it(e) {
	return M.sanitize(e, N);
}
function at({ body: e }) {
	let t = (0, i.useMemo)(() => it(e), [e]);
	return t ? /* @__PURE__ */ r.jsx(P, { dangerouslySetInnerHTML: { __html: t } }) : null;
}
var ot = (0, i.memo)(at);
function st({ element: e }) {
	let { body: t, unsafeAllowJavascript: n } = e;
	return n ? /* @__PURE__ */ r.jsx(rt, { body: t }) : /* @__PURE__ */ r.jsx(ot, { body: t });
}
var ct = (0, i.memo)(st);
//#endregion
export { ct as default };

//# sourceMappingURL=Html-BZgsOYk2-m1vXGGNm.js.map