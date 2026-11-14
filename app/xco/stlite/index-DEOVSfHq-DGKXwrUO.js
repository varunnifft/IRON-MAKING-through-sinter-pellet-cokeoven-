//#region ../react/build/index-DEOVSfHq.js
function e(e, t) {
	return function() {
		return e.apply(t, arguments);
	};
}
var { toString: t } = Object.prototype, { getPrototypeOf: n } = Object, { iterator: r, toStringTag: i } = Symbol, a = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), o = (e) => typeof e == "string" && (e === "__proto__" || e === "constructor" || e === "prototype"), s = (e, t, n) => e === Object.prototype || !n && t === null, c = (e) => {
	if (!Object.isExtensible(e)) return !1;
	let t = Object.getOwnPropertyNames(e);
	return Object.getOwnPropertySymbols && t.push(...Object.getOwnPropertySymbols(e)), t.every((t) => {
		if (o(t)) return !1;
		let n = Object.getOwnPropertyDescriptor(e, t);
		return !!n && n.configurable && n.writable === !0;
	});
}, l = (e, t) => {
	let r = e, i = [];
	for (; r != null;) {
		if (i.indexOf(r) !== -1) return !1;
		i.push(r);
		let o = n(r);
		if (s(r, o, r === e)) return !1;
		if (a(r, t)) return !0;
		r = o;
	}
	return !1;
}, u = (e, t) => e != null && l(e, t) ? e[t] : void 0, d = (e) => {
	if (e == null || typeof e != "object" && typeof e != "function") return e;
	let t = n(e);
	if (t === null && c(e)) return e;
	let r = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), l = [], u = e;
	for (; u != null && l.indexOf(u) === -1;) {
		l.push(u);
		let c = u === e ? t : n(u);
		if (s(u, c, u === e)) break;
		let d = Object.getOwnPropertyNames(u);
		Object.getOwnPropertySymbols && d.push(...Object.getOwnPropertySymbols(u));
		for (let t of d) o(t) || a(i, t) || (r[t] = e[t], i[t] = !0);
		u = c;
	}
	return r;
}, f = /* @__PURE__ */ ((e) => (n) => {
	let r = t.call(n);
	return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), p = (e) => (e = e.toLowerCase(), (t) => f(t) === e), m = (e) => (t) => typeof t === e, { isArray: h } = Array, g = m("undefined");
function _(e) {
	return e !== null && !g(e) && e.constructor !== null && !g(e.constructor) && b(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
var v = p("ArrayBuffer");
function ee(e) {
	let t;
	return t = typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && v(e.buffer), t;
}
var y = m("string"), b = m("function"), x = m("number"), S = (e) => typeof e == "object" && !!e, C = (e) => e === !0 || e === !1, w = (e) => {
	if (!S(e)) return !1;
	let t = n(e);
	return (t === null || t === Object.prototype || n(t) === null) && !l(e, i) && !l(e, r);
}, te = (e) => {
	if (!S(e) || _(e)) return !1;
	try {
		return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
	} catch {
		return !1;
	}
}, T = p("Date"), ne = p("File"), re = (e) => !!(e && typeof e.uri < "u"), ie = (e) => e && typeof e.getParts < "u", E = p("Blob"), D = p("FileList"), O = p("Set"), k = (e) => S(e) && b(e.pipe);
function A() {
	return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
var j = A(), ae = typeof j.FormData < "u" ? j.FormData : void 0, M = (e) => {
	if (!e) return !1;
	if (ae && e instanceof ae) return !0;
	let t = n(e);
	if (!t || t === Object.prototype || !b(e.append)) return !1;
	let r = f(e);
	return r === "formdata" || r === "object" && b(e.toString) && e.toString() === "[object FormData]";
}, N = p("URLSearchParams"), [P, oe, se, F] = [
	"ReadableStream",
	"Request",
	"Response",
	"Headers"
].map(p), ce = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function I(e, t, { allOwnKeys: n = !1 } = {}) {
	if (e === null || typeof e > "u") return;
	let r, i;
	if (typeof e != "object" && (e = [e]), h(e)) for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
	else {
		if (_(e)) return;
		let i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length, o;
		for (r = 0; r < a; r++) o = i[r], t.call(null, e[o], o, e);
	}
}
function le(e, t) {
	if (_(e)) return null;
	t = t.toLowerCase();
	let n = Object.keys(e), r = n.length, i;
	for (; r-- > 0;) if (i = n[r], t === i.toLowerCase()) return i;
	return null;
}
var L = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ue = (e) => !g(e) && e !== L;
function de(...e) {
	let { caseless: t, skipUndefined: n } = ue(this) && this || {}, r = {}, i = (e, i) => {
		if (i === "__proto__" || i === "constructor" || i === "prototype") return;
		let o = t && typeof i == "string" && le(r, i) || i, s = a(r, o) ? r[o] : void 0;
		w(s) && w(e) ? r[o] = de(s, e) : w(e) ? r[o] = de({}, e) : h(e) ? r[o] = e.slice() : (!n || !g(e)) && (r[o] = e);
	};
	for (let t = 0, n = e.length; t < n; t++) {
		let n = e[t];
		if (!n || _(n) || (I(n, i), typeof n != "object" || h(n))) continue;
		let r = Object.getOwnPropertySymbols(n);
		for (let e = 0; e < r.length; e++) {
			let t = r[e];
			Ce.call(n, t) && i(n[t], t);
		}
	}
	return r;
}
var fe = (t, n, r, { allOwnKeys: i } = {}) => (I(n, (n, i) => {
	r && b(n) ? Object.defineProperty(t, i, {
		__proto__: null,
		value: e(n, r),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : Object.defineProperty(t, i, {
		__proto__: null,
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}, { allOwnKeys: i }), t), pe = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), me = (e, t, n, r) => {
	e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
		__proto__: null,
		value: e,
		writable: !0,
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e, "super", {
		__proto__: null,
		value: t.prototype
	}), n && Object.assign(e.prototype, n);
}, he = (e, t, r, i) => {
	let a, o, s, c = {};
	if (t ||= {}, e == null) return t;
	do {
		for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0;) s = a[o], (!i || i(s, e, t)) && !c[s] && (t[s] = e[s], c[s] = !0);
		e = r !== !1 && n(e);
	} while (e && (!r || r(e, t)) && e !== Object.prototype);
	return t;
}, ge = (e, t, n) => {
	e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
	let r = e.indexOf(t, n);
	return r !== -1 && r === n;
}, _e = (e) => {
	if (!e) return null;
	if (h(e)) return e;
	let t = e.length;
	if (!x(t)) return null;
	let n = Array(t);
	for (; t-- > 0;) n[t] = e[t];
	return n;
}, ve = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && n(Uint8Array)), ye = (e, t) => {
	let n = (e && e[r]).call(e), i;
	for (; (i = n.next()) && !i.done;) {
		let n = i.value;
		t.call(e, n[0], n[1]);
	}
}, be = (e, t) => {
	let n, r = [];
	for (; (n = e.exec(t)) !== null;) r.push(n);
	return r;
}, xe = p("HTMLFormElement"), Se = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, n) {
	return t.toUpperCase() + n;
}), { propertyIsEnumerable: Ce } = Object.prototype, we = p("RegExp"), Te = (e, t) => {
	let n = Object.getOwnPropertyDescriptors(e), r = {};
	I(n, (n, i) => {
		let a;
		(a = t(n, i, e)) !== !1 && (r[i] = a || n);
	}), Object.defineProperties(e, r);
}, Ee = (e) => {
	Te(e, (t, n) => {
		if (b(e) && [
			"arguments",
			"caller",
			"callee"
		].includes(n)) return !1;
		let r = e[n];
		if (b(r)) {
			if (t.enumerable = !1, "writable" in t) {
				t.writable = !1;
				return;
			}
			t.set ||= () => {
				throw Error("Can not rewrite read-only method '" + n + "'");
			};
		}
	});
}, De = (e, t) => {
	let n = {}, r = (e) => {
		e.forEach((e) => {
			n[e] = !0;
		});
	};
	return h(e) ? r(e) : r(String(e).split(t)), n;
}, Oe = () => {}, ke = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Ae(e) {
	return !!(e && b(e.append) && e[i] === "FormData" && e[r]);
}
var je = (e) => {
	let t = /* @__PURE__ */ new WeakSet(), n = (e) => {
		if (S(e)) {
			if (t.has(e)) return;
			if (_(e)) return e;
			if (!("toJSON" in e)) {
				t.add(e);
				let r;
				if (O(e)) {
					r = [];
					for (let t of e) {
						let e = n(t);
						!g(e) && r.push(e);
					}
				} else r = h(e) ? [] : {}, I(e, (e, t) => {
					let i = n(e);
					!g(i) && (r[t] = i);
				});
				return t.delete(e), r;
			}
		}
		return e;
	};
	return n(e);
}, Me = p("AsyncFunction"), Ne = (e) => e && (S(e) || b(e)) && b(e.then) && b(e.catch), Pe = ((e, t) => e ? setImmediate : t ? ((e, t) => (L.addEventListener("message", ({ source: n, data: r }) => {
	n === L && r === e && t.length && t.shift()();
}, !1), (n) => {
	t.push(n), L.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(typeof setImmediate == "function", b(L.postMessage)), Fe = typeof queueMicrotask < "u" ? queueMicrotask.bind(L) : typeof process < "u" && process.nextTick || Pe, Ie = (e) => e != null && b(e[r]), R = {
	isArray: h,
	isArrayBuffer: v,
	isBuffer: _,
	isFormData: M,
	isArrayBufferView: ee,
	isString: y,
	isNumber: x,
	isBoolean: C,
	isObject: S,
	isPlainObject: w,
	isEmptyObject: te,
	isReadableStream: P,
	isRequest: oe,
	isResponse: se,
	isHeaders: F,
	isUndefined: g,
	isDate: T,
	isFile: ne,
	isReactNativeBlob: re,
	isReactNative: ie,
	isBlob: E,
	isRegExp: we,
	isFunction: b,
	isStream: k,
	isURLSearchParams: N,
	isTypedArray: ve,
	isFileList: D,
	forEach: I,
	merge: de,
	extend: fe,
	trim: ce,
	stripBOM: pe,
	inherits: me,
	toFlatObject: he,
	kindOf: f,
	kindOfTest: p,
	endsWith: ge,
	toArray: _e,
	forEachEntry: ye,
	matchAll: be,
	isHTMLForm: xe,
	hasOwnProperty: a,
	hasOwnProp: a,
	hasOwnInPrototypeChain: l,
	getSafeProp: u,
	toSafeFlatObject: d,
	reduceDescriptors: Te,
	freezeMethods: Ee,
	toObjectSet: De,
	toCamelCase: Se,
	noop: Oe,
	toFiniteNumber: ke,
	findKey: le,
	global: L,
	isContextDefined: ue,
	isSpecCompliantForm: Ae,
	toJSONObject: je,
	isAsyncFn: Me,
	isThenable: Ne,
	setImmediate: Pe,
	asap: Fe,
	isIterable: Ie,
	isSafeIterable: (e) => e != null && l(e, r) && Ie(e)
}, Le = R.toObjectSet([
	"age",
	"authorization",
	"content-length",
	"content-type",
	"etag",
	"expires",
	"from",
	"host",
	"if-modified-since",
	"if-unmodified-since",
	"last-modified",
	"location",
	"max-forwards",
	"proxy-authorization",
	"referer",
	"retry-after",
	"user-agent"
]), Re = (e) => {
	let t = {}, n, r, i;
	return e && e.split("\n").forEach(function(e) {
		i = e.indexOf(":"), n = e.substring(0, i).trim().toLowerCase(), r = e.substring(i + 1).trim();
		let a = R.hasOwnProp(t, n);
		!n || a && R.hasOwnProp(Le, n) || (n === "set-cookie" ? a ? t[n].push(r) : t[n] = [r] : t[n] = a ? t[n] + ", " + r : r);
	}), t;
};
function ze(e) {
	let t = 0, n = e.length;
	for (; t < n;) {
		let n = e.charCodeAt(t);
		if (n !== 9 && n !== 32) break;
		t += 1;
	}
	for (; n > t;) {
		let t = e.charCodeAt(n - 1);
		if (t !== 9 && t !== 32) break;
		--n;
	}
	return t === 0 && n === e.length ? e : e.slice(t, n);
}
var Be = /* @__PURE__ */ RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), Ve = /* @__PURE__ */ RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function He(e, t) {
	return R.isArray(e) ? e.map((e) => He(e, t)) : ze(String(e).replace(t, ""));
}
var Ue = (e) => He(e, Be), We = (e) => He(e, Ve);
function Ge(e) {
	let t = /* @__PURE__ */ Object.create(null);
	return R.forEach(e.toJSON(), (e, n) => {
		t[n] = We(e);
	}), t;
}
var Ke = /* @__PURE__ */ Symbol("internals");
function z(e) {
	return e && String(e).trim().toLowerCase();
}
function qe(e) {
	return e === !1 || e == null ? e : R.isArray(e) ? e.map(qe) : Ue(String(e));
}
function Je(e) {
	let t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, r;
	for (; r = n.exec(e);) t[r[1]] = r[2];
	return t;
}
var Ye = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function Xe(e) {
	let t = 0, n = e.length;
	for (; t < n;) {
		let n = e.charCodeAt(t);
		if (n !== 9 && n !== 32) break;
		t += 1;
	}
	for (; n > t;) {
		let t = e.charCodeAt(n - 1);
		if (t !== 9 && t !== 32) break;
		--n;
	}
	return t === 0 && n === e.length ? e : e.slice(t, n);
}
function Ze(e) {
	let t = e.length - 1;
	if (t < 1 || e.charCodeAt(0) !== 34 || e.charCodeAt(t) !== 34) return e;
	let n = "";
	for (let r = 1; r < t; r++) {
		let i = e.charCodeAt(r);
		if (i === 34 || i === 92 && (r += 1, r >= t)) return e;
		n += e[r];
	}
	return n;
}
function Qe(e) {
	let t = /* @__PURE__ */ Object.create(null), n = String(e), r = 0, i = !1, a = !1;
	function o(e) {
		let i = Xe(n.slice(r, e)), a = i.indexOf("=");
		if (a < 1) return;
		let o = Xe(i.slice(0, a));
		if (!Ye.test(o)) return;
		let s = o.toLowerCase();
		if (s === "__proto__" || s === "constructor" || s === "prototype") return;
		let c = Xe(i.slice(a + 1));
		t[s] = Ze(c);
	}
	for (let e = 0; e < n.length; e++) {
		let t = n.charCodeAt(e);
		i ? a ? a = !1 : t === 92 ? a = !0 : t === 34 && (i = !1) : t === 34 ? i = !0 : (t === 44 || t === 59) && (o(e), r = e + 1);
	}
	return o(n.length), t;
}
var $e = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function et(e, t, n, r, i) {
	if (R.isFunction(r)) return r.call(this, t, n);
	if (i && (t = n), R.isString(t)) {
		if (R.isString(r)) return t.indexOf(r) !== -1;
		if (R.isRegExp(r)) return r.test(t);
	}
}
function tt(e) {
	return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function nt(e, t) {
	let n = R.toCamelCase(" " + t);
	[
		"get",
		"set",
		"has"
	].forEach((r) => {
		Object.defineProperty(e, r + n, {
			__proto__: null,
			value: function(e, n, i) {
				return this[r].call(this, t, e, n, i);
			},
			configurable: !0
		});
	});
}
var B = class {
	constructor(e) {
		e && this.set(e);
	}
	set(e, t, n) {
		let r = this;
		function i(e, t, n) {
			let i = z(t);
			if (!i) return;
			let a = R.findKey(r, i);
			(!a || r[a] === void 0 || n === !0 || n === void 0 && r[a] !== !1) && (r[a || t] = qe(e));
		}
		let a = (e, t) => R.forEach(e, (e, n) => i(e, n, t));
		if (R.isPlainObject(e) || e instanceof this.constructor) a(e, t);
		else if (R.isString(e) && (e = e.trim()) && !$e(e)) a(Re(e), t);
		else if (R.isObject(e) && R.isSafeIterable(e)) {
			let n = /* @__PURE__ */ Object.create(null), r, i;
			for (let t of e) {
				if (!R.isArray(t)) throw TypeError("Object iterator must return a key-value pair");
				i = t[0], R.hasOwnProp(n, i) ? (r = n[i], n[i] = R.isArray(r) ? [...r, t[1]] : [r, t[1]]) : n[i] = t[1];
			}
			a(n, t);
		} else e != null && i(t, e, n);
		return this;
	}
	get(e, t) {
		if (e = z(e), e) {
			let n = R.findKey(this, e);
			if (n) {
				let e = this[n];
				if (!t) return e;
				if (t === !0) return Je(e);
				if (R.isFunction(t)) return t.call(this, e, n);
				if (R.isRegExp(t)) return t.exec(e);
				throw TypeError("parser must be boolean|regexp|function");
			}
		}
	}
	has(e, t) {
		if (e = z(e), e) {
			let n = R.findKey(this, e);
			return !!(n && this[n] !== void 0 && (!t || et(this, this[n], n, t)));
		}
		return !1;
	}
	delete(e, t) {
		let n = this, r = !1;
		function i(e) {
			if (e = z(e), e) {
				let i = R.findKey(n, e);
				i && (!t || et(n, n[i], i, t)) && (delete n[i], r = !0);
			}
		}
		return R.isArray(e) ? e.forEach(i) : i(e), r;
	}
	clear(e) {
		let t = Object.keys(this), n = t.length, r = !1;
		for (; n--;) {
			let i = t[n];
			(!e || et(this, this[i], i, e, !0)) && (delete this[i], r = !0);
		}
		return r;
	}
	normalize(e) {
		let t = this, n = {};
		return R.forEach(this, (r, i) => {
			let a = R.findKey(n, i);
			if (a) {
				t[a] = qe(r), delete t[i];
				return;
			}
			let o = e ? tt(i) : String(i).trim();
			o !== i && delete t[i], t[o] = qe(r), n[o] = !0;
		}), this;
	}
	concat(...e) {
		return this.constructor.concat(this, ...e);
	}
	toJSON(e) {
		let t = /* @__PURE__ */ Object.create(null);
		return R.forEach(this, (n, r) => {
			n != null && n !== !1 && (t[r] = e && R.isArray(n) ? n.join(", ") : n);
		}), t;
	}
	[Symbol.iterator]() {
		return Object.entries(this.toJSON())[Symbol.iterator]();
	}
	toString() {
		return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join("\n");
	}
	getSetCookie() {
		let e = this.get("set-cookie");
		return R.isArray(e) ? e : e == null || e === !1 ? [] : [e];
	}
	get [Symbol.toStringTag]() {
		return "AxiosHeaders";
	}
	static from(e) {
		return e instanceof this ? e : new this(e);
	}
	static parseParameters(e) {
		return Qe(e);
	}
	static concat(e, ...t) {
		let n = new this(e);
		return t.forEach((e) => n.set(e)), n;
	}
	static accessor(e) {
		let t = (this[Ke] = this[Ke] = { accessors: {} }).accessors, n = this.prototype;
		function r(e) {
			let r = z(e);
			t[r] || (nt(n, e), t[r] = !0);
		}
		return R.isArray(e) ? e.forEach(r) : r(e), this;
	}
};
B.accessor([
	"Content-Type",
	"Content-Length",
	"Accept",
	"Accept-Encoding",
	"User-Agent",
	"Authorization"
]), R.reduceDescriptors(B.prototype, ({ value: e }, t) => {
	let n = t[0].toUpperCase() + t.slice(1);
	return {
		get: () => e,
		set(e) {
			this[n] = e;
		}
	};
}), R.freezeMethods(B);
var rt = "[REDACTED ****]";
function it(e) {
	if (R.hasOwnProp(e, "toJSON")) return !0;
	let t = Object.getPrototypeOf(e);
	for (; t && t !== Object.prototype;) {
		if (R.hasOwnProp(t, "toJSON")) return !0;
		t = Object.getPrototypeOf(t);
	}
	return !1;
}
function at(e, t) {
	let n = new Set(t.map((e) => String(e).toLowerCase())), r = [], i = (e) => {
		if (typeof e != "object" || !e || R.isBuffer(e)) return e;
		if (r.indexOf(e) !== -1) return;
		e instanceof B && (e = e.toJSON()), r.push(e);
		let t;
		if (R.isArray(e)) t = [], e.forEach((e, n) => {
			let r = i(e);
			R.isUndefined(r) || (t[n] = r);
		});
		else {
			if (!R.isPlainObject(e) && it(e)) return r.pop(), e;
			t = /* @__PURE__ */ Object.create(null);
			for (let [r, a] of Object.entries(e)) {
				let e = n.has(r.toLowerCase()) ? rt : i(a);
				R.isUndefined(e) || (t[r] = e);
			}
		}
		return r.pop(), t;
	};
	return i(e);
}
function ot(e) {
	try {
		return String(e);
	} catch {
		return "";
	}
}
function st(e) {
	return e.errors.map((e) => {
		try {
			return e && e.message ? ot(e.message) : ot(e);
		} catch {
			return "";
		}
	}).filter(Boolean).join("; ") || e.name || "AggregateError";
}
var V = class e extends Error {
	static from(t, n, r, i, a, o) {
		let s = t.message;
		!s && R.isArray(t.errors) && t.errors.length && (s = st(t));
		let c = new e(s, n || t.code, r, i, a);
		return Object.defineProperty(c, "cause", {
			__proto__: null,
			value: t,
			writable: !0,
			enumerable: !1,
			configurable: !0
		}), c.name = t.name, t.status != null && c.status == null && (c.status = t.status), o && Object.assign(c, o), c;
	}
	constructor(e, t, n, r, i) {
		super(e), Object.defineProperty(this, "message", {
			__proto__: null,
			value: e,
			enumerable: !0,
			writable: !0,
			configurable: !0
		}), this.name = "AxiosError", this.isAxiosError = !0, t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i, this.status = i.status);
	}
	toJSON() {
		let e = this.config, t = e && R.hasOwnProp(e, "redact") ? e.redact : void 0, n = R.isArray(t) && t.length > 0 ? at(e, t) : R.toJSONObject(e);
		return {
			message: this.message,
			name: this.name,
			description: this.description,
			number: this.number,
			fileName: this.fileName,
			lineNumber: this.lineNumber,
			columnNumber: this.columnNumber,
			stack: this.stack,
			config: n,
			code: this.code,
			status: this.status
		};
	}
};
V.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE", V.ERR_BAD_OPTION = "ERR_BAD_OPTION", V.ECONNABORTED = "ECONNABORTED", V.ETIMEDOUT = "ETIMEDOUT", V.ECONNREFUSED = "ECONNREFUSED", V.ERR_NETWORK = "ERR_NETWORK", V.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS", V.ERR_DEPRECATED = "ERR_DEPRECATED", V.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE", V.ERR_BAD_REQUEST = "ERR_BAD_REQUEST", V.ERR_CANCELED = "ERR_CANCELED", V.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT", V.ERR_INVALID_URL = "ERR_INVALID_URL", V.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
var ct = null, lt = 100;
function ut(e) {
	return R.isPlainObject(e) || R.isArray(e);
}
function dt(e) {
	return R.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ft(e, t, n) {
	return e ? e.concat(t).map(function(e, t) {
		return e = dt(e), !n && t ? "[" + e + "]" : e;
	}).join(n ? "." : "") : t;
}
function pt(e) {
	return R.isArray(e) && !e.some(ut);
}
var mt = R.toFlatObject(R, {}, null, function(e) {
	return /^is[A-Z]/.test(e);
});
function H(e, t, n) {
	if (!R.isObject(e)) throw TypeError("target must be an object");
	t ||= new FormData();
	let r = (e, t) => {
		let r = R.getSafeProp(n, e);
		return R.isUndefined(r) ? t : r;
	}, i = r("metaTokens", !0), a = r("visitor") || h, o = r("dots", !1), s = r("indexes", !1), c = r("Blob") || typeof Blob < "u" && Blob, l = r("maxDepth", lt), u = c && R.isSpecCompliantForm(t), d = [];
	if (!R.isFunction(a)) throw TypeError("visitor must be a function");
	function f(e) {
		if (e === null) return "";
		if (R.isDate(e)) return e.toISOString();
		if (R.isBoolean(e)) return e.toString();
		if (!u && R.isBlob(e)) throw new V("Blob is not supported. Use a Buffer instead.");
		if (R.isArrayBuffer(e) || R.isTypedArray(e)) {
			if (u && typeof c == "function") return new c([e]);
			throw new V("Blob is not supported. Use a Buffer instead.", V.ERR_NOT_SUPPORT);
		}
		return e;
	}
	function p(e) {
		if (e > l) throw new V("Object is too deeply nested (" + e + " levels). Max depth: " + l, V.ERR_FORM_DATA_DEPTH_EXCEEDED);
	}
	function m(e, t) {
		if (l === 1 / 0) return JSON.stringify(e);
		let n = [];
		return JSON.stringify(e, function(e, r) {
			if (!R.isObject(r)) return r;
			for (; n.length && n[n.length - 1] !== this;) n.pop();
			return n.push(r), p(t + n.length - 1), r;
		});
	}
	function h(e, n, r) {
		let a = e;
		if (R.isReactNative(t) && R.isReactNativeBlob(e)) return t.append(ft(r, n, o), f(e)), !1;
		if (e && !r && typeof e == "object") {
			if (R.endsWith(n, "{}")) n = i ? n : n.slice(0, -2), e = m(e, 1);
			else if (R.isArray(e) && pt(e) || (R.isFileList(e) || R.endsWith(n, "[]")) && (a = R.toArray(e))) return n = dt(n), a.forEach(function(e, r) {
				!(R.isUndefined(e) || e === null) && t.append(s === !0 ? ft([n], r, o) : s === null ? n : n + "[]", f(e));
			}), !1;
		}
		return ut(e) ? !0 : (t.append(ft(r, n, o), f(e)), !1);
	}
	let g = Object.assign(mt, {
		defaultVisitor: h,
		convertValue: f,
		isVisitable: ut
	});
	function _(e, n, r = 0) {
		if (!R.isUndefined(e)) {
			if (p(r), d.indexOf(e) !== -1) throw Error("Circular reference detected in " + n.join("."));
			d.push(e), R.forEach(e, function(e, i) {
				(!(R.isUndefined(e) || e === null) && a.call(t, e, R.isString(i) ? i.trim() : i, n, g)) === !0 && _(e, n ? n.concat(i) : [i], r + 1);
			}), d.pop();
		}
	}
	if (!R.isObject(e)) throw TypeError("data must be an object");
	return _(e), t;
}
function ht(e) {
	let t = {
		"!": "%21",
		"'": "%27",
		"(": "%28",
		")": "%29",
		"~": "%7E",
		"%20": "+"
	};
	return encodeURIComponent(e).replace(/[!'()~]|%20/g, function(e) {
		return t[e];
	});
}
function gt(e, t) {
	this._pairs = [], e && H(e, this, t);
}
var _t = gt.prototype;
_t.append = function(e, t) {
	this._pairs.push([e, t]);
}, _t.toString = function(e) {
	let t = e ? (t) => e.call(this, t, ht) : ht;
	return this._pairs.map(function(e) {
		return t(e[0]) + "=" + t(e[1]);
	}, "").join("&");
};
function vt(e) {
	return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function yt(e, t, n) {
	if (!t) return e;
	e ||= "";
	let r = R.isFunction(n) ? { serialize: n } : n, i = R.getSafeProp(r, "encode") || vt, a = R.getSafeProp(r, "serialize"), o;
	if (o = a ? a(t, r) : R.isURLSearchParams(t) ? t.toString() : new gt(t, r).toString(i), o) {
		let t = e.indexOf("#");
		t !== -1 && (e = e.slice(0, t)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
	}
	return e;
}
var U = /* @__PURE__ */ Symbol("internals");
function bt(e) {
	return e ? e.length : 0;
}
function xt(e) {
	if (e) for (; e.length && e[e.length - 1] === null;) e.pop();
}
function W(e, t) {
	let n = e.handlers, r = bt(n);
	n === t.handlersRef ? r !== t.handlersLength && (r ? t.handlerEntries.forEach(function(e, r) {
		n[e.index] !== e.handler && t.handlerEntries.delete(r);
	}) : t.handlerEntries.clear()) : (t.handlersRef = n, t.handlerEntries.clear()), t.handlersLength = r;
}
var St = class {
	constructor() {
		this.handlers = [], this[U] = {
			handlersRef: this.handlers,
			handlersLength: this.handlers.length,
			handlerEntries: /* @__PURE__ */ new Map(),
			iterationDepth: 0,
			nextId: 0
		};
	}
	use(e, t, n) {
		let r = {
			fulfilled: e,
			rejected: t,
			synchronous: n ? n.synchronous : !1,
			runWhen: n ? n.runWhen : null
		}, i = this[U];
		this.handlers ??= [], W(this, i);
		let a = i.nextId++;
		return this.handlers.push(r), i.handlerEntries.set(a, {
			handler: r,
			index: this.handlers.length - 1
		}), i.handlersLength = this.handlers.length, a;
	}
	eject(e) {
		let t = this[U];
		W(this, t);
		let n = t.handlerEntries.get(e);
		if (n) {
			if (t.handlerEntries.delete(e), this.handlers[n.index] !== n.handler) return;
			this.handlers[n.index] = null, t.iterationDepth || (xt(this.handlers), t.handlersLength = this.handlers.length);
		}
	}
	clear() {
		this.handlers && (this.handlers = [], W(this, this[U]));
	}
	forEach(e) {
		let t = this[U];
		W(this, t), t.iterationDepth++;
		try {
			R.forEach(this.handlers, function(t) {
				t !== null && e(t);
			});
		} finally {
			--t.iterationDepth || (W(this, t), xt(this.handlers), t.handlersLength = bt(this.handlers));
		}
	}
}, Ct = {
	silentJSONParsing: !0,
	forcedJSONParsing: !0,
	clarifyTimeoutError: !1,
	legacyInterceptorReqResOrdering: !0,
	advertiseZstdAcceptEncoding: !1,
	validateStatusUndefinedResolves: !0
}, wt = {
	isBrowser: !0,
	classes: {
		URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : gt,
		FormData: typeof FormData < "u" ? FormData : null,
		Blob: typeof Blob < "u" ? Blob : null
	},
	protocols: [
		"http",
		"https",
		"file",
		"blob",
		"url",
		"data"
	]
}, Tt = typeof window < "u" && typeof document < "u", Et = typeof navigator == "object" && navigator || void 0, Dt = Tt && (!Et || [
	"ReactNative",
	"NativeScript",
	"NS"
].indexOf(Et.product) < 0), Ot = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", kt = Tt && window.location.href || "http://localhost", G = {
	.../* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
		__proto__: null,
		hasBrowserEnv: Tt,
		hasStandardBrowserEnv: Dt,
		hasStandardBrowserWebWorkerEnv: Ot,
		navigator: Et,
		origin: kt
	}, Symbol.toStringTag, { value: "Module" })),
	...wt
};
function At(e, t) {
	return H(e, new G.classes.URLSearchParams(), {
		visitor: function(e, t, n, r) {
			return G.isNode && R.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
		},
		...t
	});
}
var jt = lt;
function Mt(e) {
	if (e > jt) throw new V("FormData field is too deeply nested (" + e + " levels). Max depth: 100", V.ERR_FORM_DATA_DEPTH_EXCEEDED);
}
function Nt(e) {
	let t = [], n = /[^.[\]]+|\[([^.[\]]*)]/g, r;
	for (; (r = n.exec(e)) !== null;) Mt(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
	return t;
}
function Pt(e) {
	let t = {}, n = Object.keys(e), r, i = n.length, a;
	for (r = 0; r < i; r++) a = n[r], t[a] = e[a];
	return t;
}
function Ft(e) {
	function t(e, n, r, i) {
		Mt(i);
		let a = e[i++];
		if (a === "__proto__") return !0;
		let o = Number.isFinite(+a), s = i >= e.length;
		return a = !a && R.isArray(r) ? r.length : a, s ? (R.hasOwnProp(r, a) ? r[a] = R.isArray(r[a]) ? r[a].concat(n) : [r[a], n] : r[a] = n, !o) : ((!R.hasOwnProp(r, a) || !R.isObject(r[a])) && (r[a] = []), t(e, n, r[a], i) && R.isArray(r[a]) && (r[a] = Pt(r[a])), !o);
	}
	if (R.isFormData(e) && R.isFunction(e.entries)) {
		let n = {};
		return R.forEachEntry(e, (e, r) => {
			t(Nt(e), r, n, 0);
		}), n;
	}
	return null;
}
var It = Object.freeze([
	"get",
	"delete",
	"head",
	"options",
	"post",
	"put",
	"patch",
	"purge",
	"link",
	"unlink",
	"query"
]), K = (e, t) => e != null && R.hasOwnProp(e, t) ? e[t] : void 0;
function Lt(e, t, n) {
	if (R.isString(e)) try {
		return (t || JSON.parse)(e), R.trim(e);
	} catch (e) {
		if (e.name !== "SyntaxError") throw e;
	}
	return (n || JSON.stringify)(e);
}
var q = {
	transitional: Ct,
	adapter: [
		"xhr",
		"http",
		"fetch"
	],
	transformRequest: [function(e, t) {
		let n = t.getContentType() || "", r = n.indexOf("application/json") > -1, i = R.isObject(e);
		if (i && R.isHTMLForm(e) && (e = new FormData(e)), R.isFormData(e)) return r ? JSON.stringify(Ft(e)) : e;
		if (R.isArrayBuffer(e) || R.isBuffer(e) || R.isStream(e) || R.isFile(e) || R.isBlob(e) || R.isReadableStream(e)) return e;
		if (R.isArrayBufferView(e)) return e.buffer;
		if (R.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
		let a;
		if (i) {
			let t = K(this, "formSerializer");
			if (n.indexOf("application/x-www-form-urlencoded") > -1) return At(e, t).toString();
			if ((a = R.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
				let n = K(this, "env"), r = n && n.FormData;
				return H(a ? { "files[]": e } : e, r && new r(), t);
			}
		}
		return i || r ? (t.setContentType("application/json", !1), Lt(e)) : e;
	}],
	transformResponse: [function(e) {
		let t = K(this, "transitional") || q.transitional, n = t && t.forcedJSONParsing, r = K(this, "responseType"), i = r === "json";
		if (R.isResponse(e) || R.isReadableStream(e)) return e;
		if (e && R.isString(e) && (n && !r || i)) {
			let n = !(t && t.silentJSONParsing) && i;
			try {
				return JSON.parse(e, K(this, "parseReviver"));
			} catch (e) {
				if (n) throw e.name === "SyntaxError" ? V.from(e, V.ERR_BAD_RESPONSE, this, null, K(this, "response")) : e;
			}
		}
		return e;
	}],
	timeout: 0,
	xsrfCookieName: "XSRF-TOKEN",
	xsrfHeaderName: "X-XSRF-TOKEN",
	maxContentLength: -1,
	maxBodyLength: -1,
	env: {
		FormData: G.classes.FormData,
		Blob: G.classes.Blob
	},
	validateStatus: function(e) {
		return e >= 200 && e < 300;
	},
	headers: { common: {
		Accept: "application/json, text/plain, */*",
		"Content-Type": void 0
	} }
};
R.forEach(It, (e) => {
	q.headers[e] = {};
});
function Rt(e, t) {
	let n = this || q, r = t || n, i = B.from(r.headers), a = r.data;
	return R.forEach(e, function(e) {
		a = e.call(n, a, i.normalize(), t ? t.status : void 0);
	}), i.normalize(), a;
}
function zt(e) {
	return !!(e && e.__CANCEL__);
}
var J = class extends V {
	constructor(e, t, n) {
		super(e ?? "canceled", V.ERR_CANCELED, t, n), this.name = "CanceledError", this.__CANCEL__ = !0;
	}
};
function Bt(e, t, n) {
	let r = n.config.validateStatus;
	!n.status || !r || r(n.status) ? e(n) : t(new V("Request failed with status code " + n.status, n.status >= 400 && n.status < 500 ? V.ERR_BAD_REQUEST : V.ERR_BAD_RESPONSE, n.config, n.request, n));
}
var Vt = /[\t\n\r]/g;
function Ht(e) {
	if (typeof e != "string") return e;
	let t = 0;
	for (; t < e.length && e.charCodeAt(t) <= 32;) t++;
	return e.slice(t).replace(Vt, "");
}
function Ut(e) {
	let t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
	return t && t[1] || "";
}
function Wt(e, t) {
	e ||= 10;
	let n = Array(e), r = Array(e), i = 0, a = 0, o;
	return t = t === void 0 ? 1e3 : t, function(s) {
		let c = Date.now(), l = r[a];
		o ||= c, n[i] = s, r[i] = c;
		let u = a, d = 0;
		for (; u !== i;) d += n[u++], u %= e;
		if (i = (i + 1) % e, i === a && (a = (a + 1) % e), c - o < t) return;
		let f = l && c - l;
		return f ? Math.round(d * 1e3 / f) : void 0;
	};
}
function Gt(e, t) {
	let n = 0, r = 1e3 / t, i, a, o = (t, r = Date.now()) => {
		n = r, i = null, a &&= (clearTimeout(a), null), e(...t);
	};
	return [
		(...e) => {
			let t = Date.now(), s = t - n;
			s >= r ? o(e, t) : (i = e, a ||= setTimeout(() => {
				a = null, o(i);
			}, r - s));
		},
		() => i && o(i),
		(...e) => o(e)
	];
}
var Kt = (e, t, n = 3) => {
	let r = 0, i = Wt(50, 250);
	return Gt((n) => {
		if (!n || !R.isNumber(n.loaded)) return;
		let a = n.loaded, o = n.lengthComputable ? n.total : void 0, s = Math.max(0, o == null ? a : Math.min(a, o)), c = Math.max(0, s - r), l = i(c);
		r = Math.max(r, s), e({
			loaded: s,
			total: o,
			progress: o ? s / o : void 0,
			bytes: c,
			rate: l || void 0,
			estimated: l && o ? (o - s) / l : void 0,
			event: n,
			lengthComputable: o != null,
			[t ? "download" : "upload"]: !0
		});
	}, n);
}, qt = (e, t) => {
	let n = e != null;
	return [(r) => t[0]({
		lengthComputable: n,
		total: e,
		loaded: r
	}), t[1]];
}, Jt = (e, t = R.asap) => (...n) => t(() => e(...n)), Yt = G.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, G.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(G.origin), G.navigator && /(msie|trident)/i.test(G.navigator.userAgent)) : () => !0, Xt = G.hasStandardBrowserEnv ? {
	write(e, t, n, r, i, a, o) {
		if (typeof document > "u") return;
		let s = [`${e}=${encodeURIComponent(t)}`];
		R.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`), R.isString(r) && s.push(`path=${r}`), R.isString(i) && s.push(`domain=${i}`), a === !0 && s.push("secure"), R.isString(o) && s.push(`SameSite=${o}`), document.cookie = s.join("; ");
	},
	read(e) {
		if (typeof document > "u") return null;
		let t = document.cookie.split(";");
		for (let n = 0; n < t.length; n++) {
			let r = t[n].replace(/^\s+/, ""), i = r.indexOf("=");
			if (i !== -1 && r.slice(0, i) === e) try {
				return decodeURIComponent(r.slice(i + 1));
			} catch {
				return r.slice(i + 1);
			}
		}
		return null;
	},
	remove(e) {
		this.write(e, "", Date.now() - 864e5, "/");
	}
} : {
	write() {},
	read() {
		return null;
	},
	remove() {}
};
function Zt(e) {
	return typeof e == "string" && /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Qt(e, t) {
	if (!t) return e;
	let n = e.length;
	for (; n > 0 && e.charCodeAt(n - 1) === 47;) n--;
	return e.slice(0, n) + "/" + t.replace(/^\/+/, "");
}
var $t = /^https?:(?!\/\/)/i;
function en(e) {
	return e && e.replace(/(^|&)([^=&]*=)?[^&]+/g, (e, t, n = "") => `${t}${n}${rt}`);
}
function tn(e) {
	let t = e.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${rt}@`), n = t.indexOf("#"), r = (n === -1 ? t : t.slice(0, n)).replace(/([?&][^=&#]*=)[^&#]*/g, `$1${rt}`);
	return n === -1 ? r : `${r}#${en(t.slice(n + 1))}`;
}
function nn(e, t) {
	if (typeof e == "string") {
		let n = Ht(e);
		if ($t.test(n)) throw new V(`Invalid URL ${JSON.stringify(tn(n))}: missing "//" after protocol`, V.ERR_INVALID_URL, t);
	}
}
function rn(e, t, n, r) {
	nn(t, r);
	let i = !Zt(t);
	return e && (i || n === !1) ? (nn(e, r), Qt(e, t)) : t;
}
var an = (e) => e instanceof B ? { ...e } : e, on = (e) => Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor ? Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)) : Object.keys(e);
function Y(e, t) {
	e ||= {}, t ||= {};
	let n = /* @__PURE__ */ Object.create(null);
	Object.defineProperty(n, "hasOwnProperty", {
		__proto__: null,
		value: Object.prototype.hasOwnProperty,
		enumerable: !1,
		writable: !0,
		configurable: !0
	});
	function r(e, t, n, r) {
		return R.isPlainObject(e) && R.isPlainObject(t) ? R.merge.call({ caseless: r }, e, t) : R.isPlainObject(t) ? R.merge({}, t) : R.isArray(t) ? t.slice() : t;
	}
	function i(e, t, n, i) {
		if (R.isUndefined(t)) {
			if (!R.isUndefined(e)) return r(void 0, e, n, i);
		} else return r(e, t, n, i);
	}
	function a(e, t) {
		if (!R.isUndefined(t)) return r(void 0, t);
	}
	function o(e, t) {
		if (R.isUndefined(t)) {
			if (!R.isUndefined(e)) return r(void 0, e);
		} else return r(void 0, t);
	}
	function s(n) {
		let r = R.hasOwnProp(t, "transitional") ? t.transitional : void 0;
		if (!R.isUndefined(r)) {
			if (R.isPlainObject(r)) {
				if (R.hasOwnProp(r, n)) return r[n];
			} else return;
		}
		let i = R.hasOwnProp(e, "transitional") ? e.transitional : void 0;
		if (R.isPlainObject(i) && R.hasOwnProp(i, n)) return i[n];
	}
	function c(n, i, a) {
		if (R.hasOwnProp(t, a)) return r(n, i);
		if (R.hasOwnProp(e, a)) return r(void 0, n);
	}
	let l = {
		url: a,
		method: a,
		data: a,
		baseURL: o,
		transformRequest: o,
		transformResponse: o,
		paramsSerializer: o,
		timeout: o,
		timeoutErrorMessage: o,
		withCredentials: o,
		withXSRFToken: o,
		adapter: o,
		responseType: o,
		xsrfCookieName: o,
		xsrfHeaderName: o,
		onUploadProgress: o,
		onDownloadProgress: o,
		decompress: o,
		maxContentLength: o,
		maxBodyLength: o,
		beforeRedirect: o,
		transport: o,
		httpAgent: o,
		httpsAgent: o,
		cancelToken: o,
		socketPath: o,
		allowedSocketPaths: o,
		responseEncoding: o,
		validateStatus: c,
		headers: (e, t, n) => i(an(e), an(t), n, !0)
	};
	return R.forEach(on({
		...e,
		...t
	}), function(r) {
		if (r === "__proto__" || r === "constructor" || r === "prototype") return;
		let a = R.hasOwnProp(l, r) ? l[r] : i, o = a(R.hasOwnProp(e, r) ? e[r] : void 0, R.hasOwnProp(t, r) ? t[r] : void 0, r);
		R.isUndefined(o) && a !== c || (n[r] = o);
	}), R.hasOwnProp(t, "validateStatus") && R.isUndefined(t.validateStatus) && s("validateStatusUndefinedResolves") === !1 && (R.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
}
var sn = ["content-type", "content-length"];
function cn(e, t, n) {
	if (n !== "content-only") {
		e.set(t);
		return;
	}
	Object.entries(t || {}).forEach(([t, n]) => {
		sn.includes(t.toLowerCase()) && e.set(t, n);
	});
}
var ln = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16)));
function un(e) {
	let t = Y({}, e), n = (e) => R.hasOwnProp(t, e) ? t[e] : void 0, r = n("data"), i = n("withXSRFToken"), a = n("xsrfHeaderName"), o = n("xsrfCookieName"), s = n("headers"), c = n("auth"), l = n("baseURL"), u = n("allowAbsoluteUrls"), d = n("url");
	if (t.headers = s = B.from(s), t.url = yt(rn(l, d, u, t), n("params"), n("paramsSerializer")), c) {
		let t = R.getSafeProp(c, "username") || "", n = R.getSafeProp(c, "password") || "";
		try {
			s.set("Authorization", "Basic " + btoa(t + ":" + (n ? ln(n) : "")));
		} catch (t) {
			throw V.from(t, V.ERR_BAD_OPTION_VALUE, e);
		}
	}
	if (R.isFormData(r)) {
		let e = R.getSafeProp(r, "getHeaders");
		G.hasStandardBrowserEnv || G.hasStandardBrowserWebWorkerEnv || R.isReactNative(r) ? s.setContentType(void 0) : R.isFunction(e) && cn(s, e.call(r), n("formDataHeaderPolicy"));
	}
	if (G.hasStandardBrowserEnv && (R.isFunction(i) && (i = i(t)), i === !0 || i == null && Yt(t.url))) {
		let e = a && o && Xt.read(o);
		e && s.set(a, e);
	}
	return t;
}
var dn = typeof XMLHttpRequest < "u" && function(e) {
	return new Promise(function(t, n) {
		let r = un(e), i = r.data, a = B.from(r.headers).normalize(), { responseType: o, onUploadProgress: s, onDownloadProgress: c } = r, l, u, d, f, p, m;
		function h() {
			f && f(), p && p(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l);
		}
		let g = new XMLHttpRequest();
		g.open(r.method.toUpperCase(), r.url, !0), g.timeout = r.timeout;
		function _(i) {
			if (!g) return;
			if (g.status === 0 && (Ut(Ht(r.url)) || Ut(G.origin)) !== "file" && !(g.responseURL && g.responseURL.startsWith("file:"))) {
				n(new V("Request aborted", V.ECONNABORTED, e, g)), h(), g = null;
				return;
			}
			try {
				i ? m && m(i) : p && p();
			} catch (e) {
				setTimeout(() => {
					throw e;
				});
			}
			if (!g) return;
			let a = B.from("getAllResponseHeaders" in g && g.getAllResponseHeaders());
			Bt(function(e) {
				t(e), h();
			}, function(e) {
				n(e), h();
			}, {
				data: !o || o === "text" || o === "json" ? g.responseText : g.response,
				status: g.status,
				statusText: g.statusText,
				headers: a,
				config: e,
				request: g
			}), g = null;
		}
		"onloadend" in g ? g.onloadend = _ : g.onreadystatechange = function() {
			!g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.startsWith("file:")) || setTimeout(_);
		}, g.onabort = function() {
			g &&= (n(new V("Request aborted", V.ECONNABORTED, e, g)), h(), null);
		}, g.onerror = function(t) {
			let r = new V(t && t.message ? t.message : "Network Error", V.ERR_NETWORK, e, g);
			r.event = t || null, n(r), h(), g = null;
		}, g.ontimeout = function() {
			let t = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded", i = r.transitional || Ct;
			r.timeoutErrorMessage && (t = r.timeoutErrorMessage), n(new V(t, i.clarifyTimeoutError ? V.ETIMEDOUT : V.ECONNABORTED, e, g)), h(), g = null;
		}, i === void 0 && a.setContentType(null), "setRequestHeader" in g && R.forEach(Ge(a), function(e, t) {
			g.setRequestHeader(t, e);
		}), R.isUndefined(r.withCredentials) || (g.withCredentials = !!r.withCredentials), o && o !== "json" && (g.responseType = r.responseType), c && ([d, p, m] = Kt(c, !0), g.addEventListener("progress", d)), s && g.upload && ([u, f] = Kt(s), g.upload.addEventListener("progress", u), g.upload.addEventListener("loadend", f)), (r.cancelToken || r.signal) && (l = (t) => {
			g &&= (n(!t || t.type ? new J(null, e, g) : t), g.abort(), h(), null);
		}, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
		let v = Ut(r.url);
		if (v && !G.protocols.includes(v)) {
			n(new V("Unsupported protocol " + v + ":", V.ERR_BAD_REQUEST, e)), h();
			return;
		}
		g.send(i || null);
	});
}, fn = (e, t) => {
	if (e = e ? e.filter(Boolean) : [], !t && !e.length) return;
	let n = new AbortController(), r = !1, i = function(e) {
		if (!r) {
			r = !0, o();
			let t = e instanceof Error ? e : this.reason;
			n.abort(t instanceof V ? t : new J(t instanceof Error ? t.message : t));
		}
	}, a = t && setTimeout(() => {
		a = null, i(new V(`timeout of ${t}ms exceeded`, V.ETIMEDOUT));
	}, t), o = () => {
		e &&= (a && clearTimeout(a), a = null, e.forEach((e) => {
			e.unsubscribe ? e.unsubscribe(i) : e.removeEventListener("abort", i);
		}), null);
	};
	e.forEach((e) => {
		if (!r) {
			if (e.aborted) {
				i.call(e);
				return;
			}
			e.addEventListener("abort", i, { once: !0 });
		}
	});
	let { signal: s } = n;
	return s.unsubscribe = () => R.asap(o), s;
}, pn = function* (e, t) {
	let n = e.byteLength;
	if (n < t) {
		yield e;
		return;
	}
	let r = 0, i;
	for (; r < n;) i = r + t, yield e.slice(r, i), r = i;
}, mn = async function* (e, t) {
	for await (let n of hn(e)) yield* pn(n, t);
}, hn = async function* (e) {
	if (e[Symbol.asyncIterator]) {
		yield* e;
		return;
	}
	let t = e.getReader();
	try {
		for (;;) {
			let { done: e, value: n } = await t.read();
			if (e) break;
			yield n;
		}
	} finally {
		await t.cancel();
	}
}, gn = (e, t, n, r) => {
	let i = mn(e, t), a = 0, o, s = (e) => {
		o || (o = !0, r && r(e));
	};
	return new ReadableStream({
		async pull(e) {
			try {
				let { done: t, value: r } = await i.next();
				if (t) {
					s(), e.close();
					return;
				}
				let o = r.byteLength;
				n && n(a += o), e.enqueue(new Uint8Array(r));
			} catch (e) {
				throw s(e), e;
			}
		},
		cancel(e) {
			return s(e), i.return();
		}
	}, { highWaterMark: 2 });
}, _n = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, vn = (e, t, n) => t + 2 < n && _n(e.charCodeAt(t + 1)) && _n(e.charCodeAt(t + 2)), yn = (e) => e <= 57 ? e - 48 : (e & 223) - 55, bn = (e) => e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || e === 43 || e === 47 || e === 45 || e === 95, xn = (e) => e === 9 || e === 10 || e === 12 || e === 13 || e === 32, Sn = (e) => {
	let t = Math.floor(e / 4), n = e % 4;
	return t * 3 + (n === 2 ? 1 : n === 3 ? 2 : 0);
}, Cn = (e) => {
	let t = e.length, n = 0;
	return t > 0 && e.charCodeAt(t - 1) === 61 && (n++, t > 1 && e.charCodeAt(t - 2) === 61 && n++), Math.floor((t - n) * 3 / 4);
}, wn = (e) => {
	let t = e.length, n = 0, r = 0, i = !1;
	for (let a = 0; a < t; a++) {
		let o = e.charCodeAt(a);
		if (o === 37 && vn(e, a, t) && (o = yn(e.charCodeAt(a + 1)) * 16 + yn(e.charCodeAt(a + 2)), a += 2), !xn(o)) {
			if (o === 61) {
				r++;
				continue;
			}
			if (!bn(o) || r > 0) {
				i = !0;
				continue;
			}
			n++;
		}
	}
	return i || r > 2 || r > 0 && (n + r) % 4 != 0 || n % 4 == 1 ? Cn(e) : Sn(n);
}, Tn = (e, t) => {
	if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
	let n = e.indexOf(",");
	if (n < 0) return 0;
	let r = e.slice(5, n), i = e.slice(n + 1);
	if (/;base64/i.test(r)) return t(i);
	let a = 0;
	for (let e = 0, t = i.length; e < t; e++) {
		let n = i.charCodeAt(e);
		if (n === 37 && vn(i, e, t)) a += 1, e += 2;
		else if (n < 128) a += 1;
		else if (n < 2048) a += 2;
		else if (n >= 55296 && n <= 56319 && e + 1 < t) {
			let t = i.charCodeAt(e + 1);
			t >= 56320 && t <= 57343 ? (a += 4, e++) : a += 3;
		} else a += 3;
	}
	return a;
};
function En(e) {
	let t = typeof e == "string" ? e.indexOf("#") : -1;
	return Tn(t === -1 ? e : e.slice(0, t), wn);
}
var Dn = "1.20.0", On = 65536, kn = {
	cache: "default",
	redirect: "follow",
	referrer: "about:client",
	referrerPolicy: "",
	mode: "cors",
	integrity: "",
	keepalive: !1,
	priority: "auto",
	window: null
}, { isFunction: X } = R, An = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16))), jn = (e) => {
	if (!R.isString(e)) return e;
	try {
		return decodeURIComponent(e);
	} catch {
		return e;
	}
}, Mn = (e, ...t) => {
	try {
		return !!e(...t);
	} catch {
		return !1;
	}
}, Nn = (e) => {
	let t = e.indexOf("://"), n = e;
	return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, Pn = (e) => {
	let t = R.global !== void 0 && R.global !== null ? R.global : globalThis, { ReadableStream: n, TextEncoder: r } = t;
	e = R.merge.call({ skipUndefined: !0 }, {
		Request: t.Request,
		Response: t.Response
	}, e);
	let { fetch: i, Request: a, Response: o } = e, s = i ? X(i) : typeof fetch == "function", c = X(a), l = X(o);
	if (!s) return !1;
	let u = s && X(n), d = s && (typeof r == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new r()) : async (e) => new Uint8Array(await new a(e).arrayBuffer())), f = c && u && Mn(() => {
		let e = !1, t = new a(G.origin, {
			body: new n(),
			method: "POST",
			get duplex() {
				return e = !0, "half";
			}
		}), r = t.headers.has("Content-Type");
		return t.body != null && t.body.cancel(), e && !r;
	}), p = l && u && Mn(() => R.isReadableStream(new o("").body)), m = { stream: p && ((e) => e.body) };
	s && [
		"text",
		"arrayBuffer",
		"blob",
		"formData",
		"stream"
	].forEach((e) => {
		!m[e] && (m[e] = (t, n) => {
			let r = t && t[e];
			if (r) return r.call(t);
			throw new V(`Response type '${e}' is not supported`, V.ERR_NOT_SUPPORT, n);
		});
	});
	let h = async (e) => {
		if (e == null) return 0;
		if (R.isBlob(e)) return e.size;
		if (R.isSpecCompliantForm(e)) return (await new a(G.origin, {
			method: "POST",
			body: e
		}).arrayBuffer()).byteLength;
		if (R.isArrayBufferView(e) || R.isArrayBuffer(e)) return e.byteLength;
		if (R.isURLSearchParams(e) && (e += ""), R.isString(e)) return (await d(e)).byteLength;
	}, g = async (e, t) => R.toFiniteNumber(e.getContentLength()) ?? h(t);
	return async (e) => {
		let { url: t, method: n, data: s, signal: l, cancelToken: d, timeout: _, onDownloadProgress: v, onUploadProgress: ee, responseType: y, headers: b, withCredentials: x = "same-origin", fetchOptions: S, maxContentLength: C, maxBodyLength: w, maxRedirects: te } = un(e), T = R.isNumber(C) && C > -1, ne = R.isNumber(w) && w > -1, re = (t) => R.hasOwnProp(e, t) ? e[t] : void 0, ie = i || fetch;
		y = y ? (y + "").toLowerCase() : "text";
		let E = fn([l, d && d.toAbortSignal()], _), D = null, O = E && E.unsubscribe && (() => {
			E.unsubscribe();
		}), k, A = null, j = () => new V("Request body larger than maxBodyLength limit", V.ERR_BAD_REQUEST, e, D);
		try {
			let i, l = re("auth");
			if (l && (i = {
				username: R.getSafeProp(l, "username") || "",
				password: R.getSafeProp(l, "password") || ""
			}), Nn(t)) {
				let e = new URL(t, G.origin);
				!i && (e.username || e.password) && (i = {
					username: jn(e.username),
					password: jn(e.password)
				}), (e.username || e.password) && (e.username = "", e.password = "", t = e.href);
			}
			if (i && (b.delete("authorization"), b.set("Authorization", "Basic " + btoa(An((i.username || "") + ":" + (i.password || ""))))), T && typeof t == "string" && t.startsWith("data:") && En(t) > C) throw new V("maxContentLength size of " + C + " exceeded", V.ERR_BAD_RESPONSE, e, D);
			if (ne && n !== "get" && n !== "head") {
				let e = await h(s);
				if (typeof e == "number" && isFinite(e) && (k = e, e > w)) throw j();
			}
			let d = ne && (R.isReadableStream(s) || R.isStream(s)), _ = (e, t, n) => gn(e, On, (e) => {
				if (ne && e > w) throw A = j();
				t && t(e);
			}, n);
			if (f && n !== "get" && n !== "head" && (ee || d)) {
				if (k ??= await g(b, s), k !== 0 || d) {
					let e = new a(t, {
						method: "POST",
						body: s,
						duplex: "half"
					}), n;
					if (R.isFormData(s) && (n = e.headers.get("content-type")) && b.setContentType(n), e.body) {
						let [t, n] = ee && qt(k, Kt(Jt(ee))) || [];
						s = _(e.body, t, n);
					}
				}
			} else if (d && !c && u && n !== "get" && n !== "head") s = _(s);
			else if (d && c && !f && n !== "get" && n !== "head") throw new V("Stream request bodies are not supported by the current fetch implementation", V.ERR_NOT_SUPPORT, e, D);
			R.isString(x) || (x = x ? "include" : "omit");
			let ae = c && "credentials" in a.prototype;
			if (R.isFormData(s)) {
				let e = b.getContentType();
				e && /^multipart\/form-data/i.test(e) && !/boundary=/i.test(e) && b.delete("content-type");
			}
			b.set("User-Agent", "axios/" + Dn, !1);
			let M = S == null ? S : Object.assign(/* @__PURE__ */ Object.create(null), S);
			M && (delete M.body, delete M.headers, delete M.method, delete M.signal, delete M.duplex, delete M.credentials);
			let N = Object.assign(/* @__PURE__ */ Object.create(null), M, {
				signal: E,
				method: n.toUpperCase(),
				headers: Ge(b.normalize()),
				body: s,
				duplex: "half",
				credentials: ae ? x : void 0
			});
			c && (R.forEach(kn, (e, t) => {
				N[t] === void 0 && (N[t] = e);
			}), N.signal === void 0 && (N.signal = null), N.body === void 0 && (N.body = null)), te === 0 && (N.redirect = "manual", M && (M.redirect = "manual")), D = c && new a(t, N);
			let P = await (c ? ie(D, M) : ie(t, N)), oe = B.from(P.headers);
			if (T) {
				let t = R.toFiniteNumber(oe.getContentLength());
				if (t != null && t > C) throw new V("maxContentLength size of " + C + " exceeded", V.ERR_BAD_RESPONSE, e, D);
			}
			let se = p && (y === "stream" || y === "response");
			if (p && P.body && (v || T || se && O)) {
				let t = {};
				[
					"status",
					"statusText",
					"headers"
				].forEach((e) => {
					t[e] = P[e];
				});
				let n = R.toFiniteNumber(oe.getContentLength()), [r, i] = v && qt(n, Kt(Jt(v), !0)) || [], a = 0;
				P = new o(gn(P.body, On, (t) => {
					if (T && (a = t, a > C)) throw new V("maxContentLength size of " + C + " exceeded", V.ERR_BAD_RESPONSE, e, D);
					r && r(t);
				}, () => {
					i && i(), O && O();
				}), t);
			}
			y ||= "text";
			let F = await m[R.findKey(m, y) || "text"](P, e);
			if (T && !p && !se) {
				let t;
				if (F != null && (typeof F.byteLength == "number" ? t = F.byteLength : typeof F.size == "number" ? t = F.size : typeof F == "string" && (t = typeof r == "function" ? new r().encode(F).byteLength : F.length)), typeof t == "number" && t > C) throw new V("maxContentLength size of " + C + " exceeded", V.ERR_BAD_RESPONSE, e, D);
			}
			return !se && O && O(), await new Promise((t, n) => {
				Bt(t, n, {
					data: F,
					headers: B.from(P.headers),
					status: P.status,
					statusText: P.statusText,
					config: e,
					request: D
				});
			});
		} catch (t) {
			if (O && O(), E && E.aborted && E.reason instanceof V) {
				let n = E.reason;
				throw n.config = e, D && (n.request = D), t !== n && Object.defineProperty(n, "cause", {
					__proto__: null,
					value: t,
					writable: !0,
					enumerable: !1,
					configurable: !0
				}), n;
			}
			if (A) throw D && !A.request && (A.request = D), A;
			if (t instanceof V) throw D && !t.request && (t.request = D), t;
			if (t && t.name === "TypeError" && /Load failed|fetch/i.test(t.message)) {
				let n = new V("Network Error", V.ERR_NETWORK, e, D, t && t.response);
				throw Object.defineProperty(n, "cause", {
					__proto__: null,
					value: t.cause || t,
					writable: !0,
					enumerable: !1,
					configurable: !0
				}), n;
			}
			throw V.from(t, t && t.code, e, D, t && t.response);
		}
	};
}, Fn = /* @__PURE__ */ new Map(), In = (e) => {
	let t = e && e.env || {}, { fetch: n, Request: r, Response: i } = t, a = [
		r,
		i,
		n
	], o = a.length, s, c, l = Fn;
	for (; o--;) s = a[o], c = l.get(s), c === void 0 && l.set(s, c = o ? /* @__PURE__ */ new Map() : Pn(t)), l = c;
	return c;
};
In();
var Ln = {
	http: ct,
	xhr: dn,
	fetch: { get: In }
};
R.forEach(Ln, (e, t) => {
	if (e) {
		try {
			Object.defineProperty(e, "name", {
				__proto__: null,
				value: t
			});
		} catch {}
		Object.defineProperty(e, "adapterName", {
			__proto__: null,
			value: t
		});
	}
});
var Rn = (e) => `- ${e}`, zn = (e) => R.isFunction(e) || e === null || e === !1;
function Bn(e, t) {
	e = R.isArray(e) ? e : [e];
	let { length: n } = e, r, i, a = {};
	for (let o = 0; o < n; o++) {
		r = e[o];
		let n;
		if (i = r, !zn(r) && (i = Ln[(n = String(r)).toLowerCase()], i === void 0)) throw new V(`Unknown adapter '${n}'`);
		if (i && (R.isFunction(i) || (i = i.get(t)))) break;
		a[n || "#" + o] = i;
	}
	if (!i) {
		let e = Object.entries(a).map(([e, t]) => `adapter ${e} ` + (t === !1 ? "is not supported by the environment" : "is not available in the build"));
		throw new V("There is no suitable adapter to dispatch the request " + (n ? e.length > 1 ? "since :\n" + e.map(Rn).join("\n") : " " + Rn(e[0]) : "as no adapter specified"), V.ERR_NOT_SUPPORT);
	}
	return i;
}
var Vn = {
	getAdapter: Bn,
	adapters: Ln
};
function Hn(e) {
	if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new J(null, e);
}
function Un(e) {
	let t = R.toSafeFlatObject(e);
	return Hn(t), t.headers = B.from(R.getSafeProp(t, "headers")), t.data = Rt.call(t, t.transformRequest), [
		"post",
		"put",
		"patch"
	].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Vn.getAdapter(t.adapter || q.adapter, t)(t).then(function(e) {
		Hn(t), t.response = e;
		try {
			e.data = Rt.call(t, t.transformResponse, e);
		} finally {
			delete t.response;
		}
		return e.headers = B.from(e.headers), e;
	}, function(e) {
		if (!zt(e) && (Hn(t), e && e.response)) {
			t.response = e.response;
			try {
				e.response.data = Rt.call(t, t.transformResponse, e.response);
			} finally {
				delete t.response;
			}
			e.response.headers = B.from(e.response.headers);
		}
		return Promise.reject(e);
	});
}
var Wn = {};
[
	"object",
	"boolean",
	"number",
	"function",
	"string",
	"symbol"
].forEach((e, t) => {
	Wn[e] = function(n) {
		return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
	};
});
var Gn = {};
Wn.transitional = function(e, t, n) {
	function r(e, t) {
		return "[Axios v1.20.0] Transitional option '" + e + "'" + t + (n ? ". " + n : "");
	}
	return (n, i, a) => {
		if (e === !1) throw new V(r(i, " has been removed" + (t ? " in " + t : "")), V.ERR_DEPRECATED);
		return t && !Gn[i] && (Gn[i] = !0, console.warn(r(i, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, i, a);
	};
}, Wn.spelling = function(e) {
	return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
};
function Kn(e, t, n) {
	if (typeof e != "object" || !e) throw new V("options must be an object", V.ERR_BAD_OPTION_VALUE);
	let r = Object.keys(e), i = r.length;
	for (; i-- > 0;) {
		let a = r[i], o = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : void 0;
		if (o) {
			let t = e[a], n = t === void 0 || o(t, a, e);
			if (n !== !0) throw new V("option " + a + " must be " + n, V.ERR_BAD_OPTION_VALUE);
			continue;
		}
		if (n !== !0) throw new V("Unknown option " + a, V.ERR_BAD_OPTION);
	}
}
var qn = {
	assertOptions: Kn,
	validators: Wn
}, Z = qn.validators, Q = class {
	constructor(e) {
		this.defaults = e || {}, this.interceptors = {
			request: new St(),
			response: new St()
		};
	}
	async request(e, t) {
		try {
			return await this._request(e, t);
		} catch (e) {
			if (e instanceof Error) try {
				let t = {};
				Error.captureStackTrace ? Error.captureStackTrace(t) : t = /* @__PURE__ */ Error();
				let n = t.stack, r = "";
				if (typeof n == "string") {
					let e = n.indexOf("\n");
					r = e === -1 ? "" : n.slice(e + 1);
				}
				if (!e.stack) e.stack = r;
				else if (r) {
					let t = r.indexOf("\n"), n = t === -1 ? -1 : r.indexOf("\n", t + 1), i = n === -1 ? "" : r.slice(n + 1);
					String(e.stack).endsWith(i) || (e.stack += "\n" + r);
				}
			} catch {}
			throw e;
		}
	}
	_request(e, t) {
		typeof e == "string" ? (t ||= {}, t.url = e) : t = e || {}, t = Y(this.defaults, t);
		let { transitional: n, paramsSerializer: r, headers: i } = t;
		n !== void 0 && qn.assertOptions(n, {
			silentJSONParsing: Z.transitional(Z.boolean),
			forcedJSONParsing: Z.transitional(Z.boolean),
			clarifyTimeoutError: Z.transitional(Z.boolean),
			legacyInterceptorReqResOrdering: Z.transitional(Z.boolean),
			advertiseZstdAcceptEncoding: Z.transitional(Z.boolean),
			validateStatusUndefinedResolves: Z.transitional(Z.boolean)
		}, !1), r != null && (R.isFunction(r) ? t.paramsSerializer = { serialize: r } : qn.assertOptions(r, {
			encode: Z.function,
			serialize: Z.function
		}, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls === void 0 ? t.allowAbsoluteUrls = !0 : t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls), qn.assertOptions(t, {
			baseUrl: Z.spelling("baseURL"),
			withXsrfToken: Z.spelling("withXSRFToken")
		}, !0), t.method = (R.getSafeProp(t, "method") || R.getSafeProp(this.defaults, "method") || "get").toLowerCase();
		let a = i && R.merge(i.common, i[t.method]);
		i && R.forEach(It.concat("common"), (e) => {
			delete i[e];
		}), t.headers = B.concat(a, i);
		let o = [], s = !0;
		this.interceptors.request.forEach(function(e) {
			if (typeof e.runWhen == "function" && e.runWhen(t) === !1) return;
			s &&= e.synchronous;
			let n = t.transitional || Ct;
			n && n.legacyInterceptorReqResOrdering ? o.unshift(e.fulfilled, e.rejected) : o.push(e.fulfilled, e.rejected);
		});
		let c = [];
		this.interceptors.response.forEach(function(e) {
			c.push(e.fulfilled, e.rejected);
		});
		let l, u = 0, d;
		if (!s) {
			let e = [Un.bind(this), void 0];
			for (e.unshift(...o), e.push(...c), d = e.length, l = Promise.resolve(t); u < d;) l = l.then(e[u++], e[u++]);
			return l;
		}
		d = o.length;
		let f = t;
		for (; u < d;) {
			let e = o[u++], t = o[u++];
			try {
				f = e ? e(f) : f;
			} catch (e) {
				if (!t) {
					l = Promise.reject(e);
					break;
				}
				try {
					let n = t.call(this, e);
					R.isThenable(n) && (l = Promise.resolve(n).then(() => Un.call(this, f)));
				} catch (e) {
					l = Promise.reject(e);
				}
				break;
			}
		}
		if (!l) try {
			l = Un.call(this, f);
		} catch (e) {
			l = Promise.reject(e);
		}
		for (u = 0, d = c.length; u < d;) l = l.then(c[u++], c[u++]);
		return l;
	}
	getUri(e) {
		return e = Y(this.defaults, e), yt(rn(e.baseURL, e.url, e.allowAbsoluteUrls, e), e.params, e.paramsSerializer);
	}
};
R.forEach([
	"delete",
	"get",
	"head",
	"options"
], function(e) {
	Q.prototype[e] = function(t, n) {
		return this.request(Y(n || {}, {
			method: e,
			url: t,
			data: n && R.hasOwnProp(n, "data") ? n.data : void 0
		}));
	};
}), R.forEach([
	"post",
	"put",
	"patch",
	"query"
], function(e) {
	function t(t) {
		return function(n, r, i) {
			return this.request(Y(i || {}, {
				method: e,
				headers: t ? { "Content-Type": "multipart/form-data" } : {},
				url: n,
				data: r
			}));
		};
	}
	Q.prototype[e] = t(), e !== "query" && (Q.prototype[e + "Form"] = t(!0));
});
var Jn = class e {
	constructor(e) {
		if (typeof e != "function") throw TypeError("executor must be a function.");
		let t;
		this.promise = new Promise(function(e) {
			t = e;
		});
		let n = this;
		this.promise.then((e) => {
			if (!n._listeners) return;
			let t = n._listeners.length;
			for (; t-- > 0;) n._listeners[t](e);
			n._listeners = null;
		}), this.promise.then = (e) => {
			let t, r = new Promise((e) => {
				n.subscribe(e), t = e;
			}).then(e);
			return r.cancel = function() {
				n.unsubscribe(t);
			}, r;
		}, e(function(e, r, i) {
			n.reason || (n.reason = new J(e, r, i), t(n.reason));
		});
	}
	throwIfRequested() {
		if (this.reason) throw this.reason;
	}
	subscribe(e) {
		if (this.reason) {
			e(this.reason);
			return;
		}
		this._listeners ? this._listeners.push(e) : this._listeners = [e];
	}
	unsubscribe(e) {
		if (!this._listeners) return;
		let t = this._listeners.indexOf(e);
		t !== -1 && this._listeners.splice(t, 1);
	}
	toAbortSignal() {
		let e = new AbortController(), t = (t) => {
			e.abort(t);
		};
		return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal;
	}
	static source() {
		let t;
		return {
			token: new e(function(e) {
				t = e;
			}),
			cancel: t
		};
	}
};
function Yn(e) {
	return function(t) {
		return e.apply(null, t);
	};
}
function Xn(e) {
	return R.isObject(e) && e.isAxiosError === !0;
}
var Zn = {
	Continue: 100,
	SwitchingProtocols: 101,
	Processing: 102,
	EarlyHints: 103,
	Ok: 200,
	Created: 201,
	Accepted: 202,
	NonAuthoritativeInformation: 203,
	NoContent: 204,
	ResetContent: 205,
	PartialContent: 206,
	MultiStatus: 207,
	AlreadyReported: 208,
	ImUsed: 226,
	MultipleChoices: 300,
	MovedPermanently: 301,
	Found: 302,
	SeeOther: 303,
	NotModified: 304,
	UseProxy: 305,
	Unused: 306,
	TemporaryRedirect: 307,
	PermanentRedirect: 308,
	BadRequest: 400,
	Unauthorized: 401,
	PaymentRequired: 402,
	Forbidden: 403,
	NotFound: 404,
	MethodNotAllowed: 405,
	NotAcceptable: 406,
	ProxyAuthenticationRequired: 407,
	RequestTimeout: 408,
	Conflict: 409,
	Gone: 410,
	LengthRequired: 411,
	PreconditionFailed: 412,
	PayloadTooLarge: 413,
	ContentTooLarge: 413,
	UriTooLong: 414,
	UnsupportedMediaType: 415,
	RangeNotSatisfiable: 416,
	ExpectationFailed: 417,
	ImATeapot: 418,
	MisdirectedRequest: 421,
	UnprocessableEntity: 422,
	UnprocessableContent: 422,
	Locked: 423,
	FailedDependency: 424,
	TooEarly: 425,
	UpgradeRequired: 426,
	PreconditionRequired: 428,
	TooManyRequests: 429,
	RequestHeaderFieldsTooLarge: 431,
	UnavailableForLegalReasons: 451,
	InternalServerError: 500,
	NotImplemented: 501,
	BadGateway: 502,
	ServiceUnavailable: 503,
	GatewayTimeout: 504,
	HttpVersionNotSupported: 505,
	VariantAlsoNegotiates: 506,
	InsufficientStorage: 507,
	LoopDetected: 508,
	NotExtended: 510,
	NetworkAuthenticationRequired: 511,
	WebServerReturnsAnUnknownError: 520,
	WebServerIsDown: 521,
	ConnectionTimedOut: 522,
	OriginIsUnreachable: 523,
	TimeoutOccurred: 524,
	SslHandshakeFailed: 525,
	InvalidSslCertificate: 526
};
Object.entries(Zn).forEach(([e, t]) => {
	Zn[t] === void 0 && (Zn[t] = e);
});
function Qn(t) {
	let n = new Q(t), r = e(Q.prototype.request, n);
	return R.extend(r, Q.prototype, n, { allOwnKeys: !0 }), R.extend(r, n, null, { allOwnKeys: !0 }), r.create = function(e) {
		return Qn(Y(t, e));
	}, r;
}
var $ = Qn(q);
$.Axios = Q, $.CanceledError = J, $.CancelToken = Jn, $.isCancel = zt, $.VERSION = Dn, $.toFormData = H, $.AxiosError = V, $.Cancel = $.CanceledError, $.all = function(e) {
	return Promise.all(e);
}, $.spread = Yn, $.isAxiosError = Xn, $.mergeConfig = Y, $.AxiosHeaders = B, $.formToJSON = (e) => Ft(R.isHTMLForm(e) ? new FormData(e) : e), $.getAdapter = Vn.getAdapter, $.HttpStatusCode = Zn, $.default = $;
var { Axios: $n, AxiosError: er, CanceledError: tr, isCancel: nr, CancelToken: rr, VERSION: ir, all: ar, Cancel: or, isAxiosError: sr, spread: cr, toFormData: lr, AxiosHeaders: ur, HttpStatusCode: dr, formToJSON: fr, getAdapter: pr, mergeConfig: mr, create: hr } = $;
//#endregion
export { $n as Axios, er as AxiosError, ur as AxiosHeaders, or as Cancel, rr as CancelToken, tr as CanceledError, dr as HttpStatusCode, ir as VERSION, ar as all, hr as create, $ as default, fr as formToJSON, pr as getAdapter, sr as isAxiosError, nr as isCancel, mr as mergeConfig, cr as spread, lr as toFormData };

//# sourceMappingURL=index-DEOVSfHq-DGKXwrUO.js.map