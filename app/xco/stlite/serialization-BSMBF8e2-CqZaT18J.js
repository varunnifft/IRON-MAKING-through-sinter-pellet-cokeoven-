//#region ../react/build/serialization-BSMBF8e2.js
function e(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}
function t(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function n(e) {
	return this instanceof n ? (this.v = e, this) : new n(e);
}
function r(e, t, r) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var i = r.apply(e, t || []), a, o = [];
	return a = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), c("next"), c("throw"), c("return", s), a[Symbol.asyncIterator] = function() {
		return this;
	}, a;
	function s(e) {
		return function(t) {
			return Promise.resolve(t).then(e, d);
		};
	}
	function c(e, t) {
		i[e] && (a[e] = function(t) {
			return new Promise(function(n, r) {
				o.push([
					e,
					t,
					n,
					r
				]) > 1 || l(e, t);
			});
		}, t && (a[e] = t(a[e])));
	}
	function l(e, t) {
		try {
			u(i[e](t));
		} catch (e) {
			f(o[0][3], e);
		}
	}
	function u(e) {
		e.value instanceof n ? Promise.resolve(e.value.v).then(ee, d) : f(o[0][2], e);
	}
	function ee(e) {
		l("next", e);
	}
	function d(e) {
		l("throw", e);
	}
	function f(e, t) {
		e(t), o.shift(), o.length && l(o[0][0], o[0][1]);
	}
}
function i(e) {
	var t, r;
	return t = {}, i("next"), i("throw", function(e) {
		throw e;
	}), i("return"), t[Symbol.iterator] = function() {
		return this;
	}, t;
	function i(i, a) {
		t[i] = e[i] ? function(t) {
			return (r = !r) ? {
				value: n(e[i](t)),
				done: !1
			} : a ? a(t) : t;
		} : a;
	}
}
function a(e) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var n = e[Symbol.asyncIterator], r;
	return n ? n.call(e) : (e = typeof t == "function" ? t(e) : e[Symbol.iterator](), r = {}, i("next"), i("throw"), i("return"), r[Symbol.asyncIterator] = function() {
		return this;
	}, r);
	function i(t) {
		r[t] = e[t] && function(n) {
			return new Promise(function(r, i) {
				n = e[t](n), a(r, i, n.done, n.value);
			});
		};
	}
	function a(e, t, n, r) {
		Promise.resolve(r).then(function(t) {
			e({
				value: t,
				done: n
			});
		}, t);
	}
}
var o = new TextDecoder("utf-8"), s = o.decode.bind(o), c = new TextEncoder(), l = (e) => c.encode(e), u = (e) => typeof e == "number", ee = (e) => typeof e == "boolean", d = (e) => typeof e == "function", f = (e) => e != null && Object(e) === e, te = (e) => f(e) && d(e.then), ne = (e) => f(e) && d(e[Symbol.iterator]), re = (e) => f(e) && d(e[Symbol.asyncIterator]), ie = (e) => f(e) && f(e.schema), ae = (e) => f(e) && "done" in e && "value" in e, oe = (e) => f(e) && d(e.stat) && u(e.fd), se = (e) => f(e) && le(e.body), ce = (e) => "_getDOMStream" in e && "_getNodeStream" in e, le = (e) => f(e) && d(e.cancel) && d(e.getReader) && !ce(e), ue = (e) => f(e) && d(e.read) && d(e.pipe) && ee(e.readable) && !ce(e), de = (e) => f(e) && d(e.clear) && d(e.bytes) && d(e.position) && d(e.setPosition) && d(e.capacity) && d(e.getBufferIdentifier) && d(e.createLong), fe = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : ArrayBuffer;
function pe(e) {
	let t = e[0] ? [e[0]] : [], n, r, i, a;
	for (let o, s, c = 0, l = 0, u = e.length; ++c < u;) {
		if (o = t[l], s = e[c], !o || !s || o.buffer !== s.buffer || s.byteOffset < o.byteOffset) {
			s && (t[++l] = s);
			continue;
		}
		if ({byteOffset: n, byteLength: i} = o, {byteOffset: r, byteLength: a} = s, n + i < r || r + a < n) {
			s && (t[++l] = s);
			continue;
		}
		t[l] = new Uint8Array(o.buffer, n, r - n + a);
	}
	return t;
}
function me(e, t, n = 0, r = t.byteLength) {
	let i = e.byteLength, a = new Uint8Array(e.buffer, e.byteOffset, i), o = new Uint8Array(t.buffer, t.byteOffset, Math.min(r, i));
	return a.set(o, n), e;
}
function he(e, t) {
	let n = pe(e), r = n.reduce((e, t) => e + t.byteLength, 0), i, a, o, s = 0, c = -1, l = Math.min(t || Infinity, r);
	for (let e = n.length; ++c < e;) {
		if (i = n[c], a = i.subarray(0, Math.min(i.length, l - s)), l <= s + a.length) {
			a.length < i.length ? n[c] = i.subarray(a.length) : a.length === i.length && c++, o ? me(o, a, s) : o = a;
			break;
		}
		me(o ||= new Uint8Array(l), a, s), s += a.length;
	}
	return [
		o || /* @__PURE__ */ new Uint8Array(),
		n.slice(c),
		r - (o ? o.byteLength : 0)
	];
}
function p(e, t) {
	let n = ae(t) ? t.value : t;
	return n instanceof e ? e === Uint8Array ? new e(n.buffer, n.byteOffset, n.byteLength) : n : n ? (typeof n == "string" && (n = l(n)), n instanceof ArrayBuffer || n instanceof fe ? new e(n) : de(n) ? p(e, n.bytes()) : ArrayBuffer.isView(n) ? n.byteLength <= 0 ? new e(0) : new e(n.buffer, n.byteOffset, n.byteLength / e.BYTES_PER_ELEMENT) : e.from(n)) : new e(0);
}
var ge = (e) => p(Int8Array, e), _e = (e) => p(Int16Array, e), ve = (e) => p(Int32Array, e), ye = (e) => p(BigInt64Array, e), m = (e) => p(Uint8Array, e), be = (e) => p(Uint16Array, e), xe = (e) => p(Uint32Array, e), Se = (e) => p(BigUint64Array, e), Ce = (e) => p(Float32Array, e), we = (e) => p(Float64Array, e), Te = (e) => p(Uint8ClampedArray, e), Ee = (e) => (e.next(), e);
function* De(e, t) {
	let n = function* (e) {
		yield e;
	};
	return yield* Ee(function* (t) {
		let n = null;
		do
			n = t.next(yield p(e, n));
		while (!n.done);
	}((typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof fe ? n(t) : ne(t) ? t : n(t))[Symbol.iterator]())), new e();
}
var Oe = (e) => De(Int8Array, e), ke = (e) => De(Int16Array, e), Ae = (e) => De(Int32Array, e), je = (e) => De(Uint8Array, e), Me = (e) => De(Uint16Array, e), Ne = (e) => De(Uint32Array, e), Pe = (e) => De(Float32Array, e), Fe = (e) => De(Float64Array, e), Ie = (e) => De(Uint8ClampedArray, e);
function Le(e, t) {
	return r(this, arguments, function* () {
		if (te(t)) return yield n(yield n(yield* i(a(Le(e, yield n(t))))));
		let o = function(e) {
			return r(this, arguments, function* () {
				yield yield n(yield n(e));
			});
		};
		return yield n(yield* i(a(Ee(function(t) {
			return r(this, arguments, function* () {
				let r = null;
				do
					r = yield n(t.next(yield yield n(p(e, r))));
				while (!r.done);
			});
		}((typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof fe ? o(t) : ne(t) ? function(e) {
			return r(this, arguments, function* () {
				yield n(yield* i(a(Ee(function* (e) {
					let t = null;
					do
						t = e.next(yield t?.value);
					while (!t.done);
				}(e[Symbol.iterator]())))));
			});
		}(t) : re(t) ? t : o(t))[Symbol.asyncIterator]()))))), yield n(new e());
	});
}
var Re = (e) => Le(Int8Array, e), ze = (e) => Le(Int16Array, e), Be = (e) => Le(Int32Array, e), Ve = (e) => Le(Uint8Array, e), He = (e) => Le(Uint16Array, e), Ue = (e) => Le(Uint32Array, e), We = (e) => Le(Float32Array, e), Ge = (e) => Le(Float64Array, e), Ke = (e) => Le(Uint8ClampedArray, e);
function qe(e, t, n) {
	if (e !== 0) {
		n = n.slice(0, t);
		let r = typeof n[0] == "bigint" ? BigInt(e) : e;
		for (let e = -1, t = n.length; ++e < t;) n[e] += r;
	}
	return n.subarray(0, t);
}
function Je(e, t) {
	let n = 0, r = e.length;
	if (r !== t.length) return !1;
	if (r > 0) do
		if (e[n] !== t[n]) return !1;
	while (++n < r);
	return !0;
}
var Ye = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	compareArrayLike: Je,
	joinUint8Arrays: he,
	memcpy: me,
	rebaseValueOffsets: qe,
	toArrayBufferView: p,
	toArrayBufferViewAsyncIterator: Le,
	toArrayBufferViewIterator: De,
	toBigInt64Array: ye,
	toBigUint64Array: Se,
	toFloat32Array: Ce,
	toFloat32ArrayAsyncIterator: We,
	toFloat32ArrayIterator: Pe,
	toFloat64Array: we,
	toFloat64ArrayAsyncIterator: Ge,
	toFloat64ArrayIterator: Fe,
	toInt16Array: _e,
	toInt16ArrayAsyncIterator: ze,
	toInt16ArrayIterator: ke,
	toInt32Array: ve,
	toInt32ArrayAsyncIterator: Be,
	toInt32ArrayIterator: Ae,
	toInt8Array: ge,
	toInt8ArrayAsyncIterator: Re,
	toInt8ArrayIterator: Oe,
	toUint16Array: be,
	toUint16ArrayAsyncIterator: He,
	toUint16ArrayIterator: Me,
	toUint32Array: xe,
	toUint32ArrayAsyncIterator: Ue,
	toUint32ArrayIterator: Ne,
	toUint8Array: m,
	toUint8ArrayAsyncIterator: Ve,
	toUint8ArrayIterator: je,
	toUint8ClampedArray: Te,
	toUint8ClampedArrayAsyncIterator: Ke,
	toUint8ClampedArrayIterator: Ie
}, Symbol.toStringTag, { value: "Module" })), Xe = {
	fromIterable(e) {
		return Ze(Qe(e));
	},
	fromAsyncIterable(e) {
		return Ze($e(e));
	},
	fromDOMStream(e) {
		return Ze(et(e));
	},
	fromNodeStream(e) {
		return Ze(rt(e));
	},
	toDOMStream(e, t) {
		throw Error("\"toDOMStream\" not available in this environment");
	},
	toNodeStream(e, t) {
		throw Error("\"toNodeStream\" not available in this environment");
	}
}, Ze = (e) => (e.next(), e);
function* Qe(e) {
	let t, n = !1, r = [], i, a, o, s = 0;
	function c() {
		return a === "peek" ? he(r, o)[0] : ([i, r, s] = he(r, o), i);
	}
	({cmd: a, size: o} = (yield null) || {
		cmd: "read",
		size: 0
	});
	let l = je(e)[Symbol.iterator]();
	try {
		do
			if ({done: t, value: i} = Number.isNaN(o - s) ? l.next() : l.next(o - s), !t && i.byteLength > 0 && (r.push(i), s += i.byteLength), t || o <= s) do
				({cmd: a, size: o} = yield c());
			while (o < s);
		while (!t);
	} catch (e) {
		n = !0, typeof l.throw == "function" && l.throw(e);
	} finally {
		n === !1 && typeof l.return == "function" && l.return(null);
	}
	return null;
}
function $e(e) {
	return r(this, arguments, function* () {
		let t, r = !1, i = [], a, o, s, c = 0;
		function l() {
			return o === "peek" ? he(i, s)[0] : ([a, i, c] = he(i, s), a);
		}
		({cmd: o, size: s} = (yield yield n(null)) || {
			cmd: "read",
			size: 0
		});
		let u = Ve(e)[Symbol.asyncIterator]();
		try {
			do
				if ({done: t, value: a} = Number.isNaN(s - c) ? yield n(u.next()) : yield n(u.next(s - c)), !t && a.byteLength > 0 && (i.push(a), c += a.byteLength), t || s <= c) do
					({cmd: o, size: s} = yield yield n(l()));
				while (s < c);
			while (!t);
		} catch (e) {
			r = !0, typeof u.throw == "function" && (yield n(u.throw(e)));
		} finally {
			r === !1 && typeof u.return == "function" && (yield n(u.return(/* @__PURE__ */ new Uint8Array())));
		}
		return yield n(null);
	});
}
function et(e) {
	return r(this, arguments, function* () {
		let t = !1, r = !1, i = [], a, o, s, c = 0;
		function l() {
			return o === "peek" ? he(i, s)[0] : ([a, i, c] = he(i, s), a);
		}
		({cmd: o, size: s} = (yield yield n(null)) || {
			cmd: "read",
			size: 0
		});
		let u = new tt(e);
		try {
			do
				if ({done: t, value: a} = Number.isNaN(s - c) ? yield n(u.read()) : yield n(u.read(s - c)), !t && a.byteLength > 0 && (i.push(m(a)), c += a.byteLength), t || s <= c) do
					({cmd: o, size: s} = yield yield n(l()));
				while (s < c);
			while (!t);
		} catch (e) {
			r = !0, yield n(u.cancel(e));
		} finally {
			r === !1 ? yield n(u.cancel()) : e.locked && u.releaseLock();
		}
		return yield n(null);
	});
}
var tt = class {
	constructor(e) {
		this.source = e, this.reader = null, this.reader = this.source.getReader(), this.reader.closed.catch(() => {});
	}
	get closed() {
		return this.reader ? this.reader.closed.catch(() => {}) : Promise.resolve();
	}
	releaseLock() {
		this.reader && this.reader.releaseLock(), this.reader = null;
	}
	cancel(t) {
		return e(this, void 0, void 0, function* () {
			let { reader: e, source: n } = this;
			e && (yield e.cancel(t).catch(() => {})), n && n.locked && this.releaseLock();
		});
	}
	read(t) {
		return e(this, void 0, void 0, function* () {
			if (t === 0) return {
				done: this.reader == null,
				value: /* @__PURE__ */ new Uint8Array()
			};
			let e = yield this.reader.read();
			return !e.done && (e.value = m(e)), e;
		});
	}
}, nt = (e, t) => {
	let n = (e) => r([t, e]), r;
	return [
		t,
		n,
		new Promise((i) => (r = i) && e.once(t, n))
	];
};
function rt(e) {
	return r(this, arguments, function* () {
		let t = [], r = "error", i = !1, a = null, o, s, c = 0, l = [], u;
		function ee() {
			return o === "peek" ? he(l, s)[0] : ([u, l, c] = he(l, s), u);
		}
		if ({cmd: o, size: s} = (yield yield n(null)) || {
			cmd: "read",
			size: 0
		}, e.isTTY) return yield yield n(/* @__PURE__ */ new Uint8Array()), yield n(null);
		try {
			t[0] = nt(e, "end"), t[1] = nt(e, "error");
			do {
				if (t[2] = nt(e, "readable"), [r, a] = yield n(Promise.race(t.map((e) => e[2]))), r === "error") break;
				if ((i = r === "end") || (Number.isFinite(s - c) ? (u = m(e.read(s - c)), u.byteLength < s - c && (u = m(e.read()))) : u = m(e.read()), u.byteLength > 0 && (l.push(u), c += u.byteLength)), i || s <= c) do
					({cmd: o, size: s} = yield yield n(ee()));
				while (s < c);
			} while (!i);
		} finally {
			yield n(d(t, r === "error" ? a : null));
		}
		return yield n(null);
		function d(t, n) {
			return u = l = null, new Promise((r, i) => {
				for (let [n, r] of t) e.off(n, r);
				try {
					let t = e.destroy;
					t && t.call(e, n), n = void 0;
				} catch (e) {
					n = e || n;
				} finally {
					n == null ? r() : i(n);
				}
			});
		}
	});
}
var h;
(function(e) {
	e[e.V1 = 0] = "V1", e[e.V2 = 1] = "V2", e[e.V3 = 2] = "V3", e[e.V4 = 3] = "V4", e[e.V5 = 4] = "V5";
})(h ||= {});
var g;
(function(e) {
	e[e.Sparse = 0] = "Sparse", e[e.Dense = 1] = "Dense";
})(g ||= {});
var _;
(function(e) {
	e[e.HALF = 0] = "HALF", e[e.SINGLE = 1] = "SINGLE", e[e.DOUBLE = 2] = "DOUBLE";
})(_ ||= {});
var it;
(function(e) {
	e[e.DAY = 0] = "DAY", e[e.MILLISECOND = 1] = "MILLISECOND";
})(it ||= {});
var v;
(function(e) {
	e[e.SECOND = 0] = "SECOND", e[e.MILLISECOND = 1] = "MILLISECOND", e[e.MICROSECOND = 2] = "MICROSECOND", e[e.NANOSECOND = 3] = "NANOSECOND";
})(v ||= {});
var y;
(function(e) {
	e[e.YEAR_MONTH = 0] = "YEAR_MONTH", e[e.DAY_TIME = 1] = "DAY_TIME", e[e.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
})(y ||= {});
var at = 2, ot = 4, st = 4, b = 4, ct = /* @__PURE__ */ new Int32Array(2), lt = new Float32Array(ct.buffer), ut = new Float64Array(ct.buffer), dt = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1, ft;
(function(e) {
	e[e.UTF8_BYTES = 1] = "UTF8_BYTES", e[e.UTF16_STRING = 2] = "UTF16_STRING";
})(ft ||= {});
var pt = class e {
	constructor(e) {
		this.bytes_ = e, this.position_ = 0, this.text_decoder_ = new TextDecoder();
	}
	static allocate(t) {
		return new e(new Uint8Array(t));
	}
	clear() {
		this.position_ = 0;
	}
	bytes() {
		return this.bytes_;
	}
	position() {
		return this.position_;
	}
	setPosition(e) {
		this.position_ = e;
	}
	capacity() {
		return this.bytes_.length;
	}
	readInt8(e) {
		return this.readUint8(e) << 24 >> 24;
	}
	readUint8(e) {
		return this.bytes_[e];
	}
	readInt16(e) {
		return this.readUint16(e) << 16 >> 16;
	}
	readUint16(e) {
		return this.bytes_[e] | this.bytes_[e + 1] << 8;
	}
	readInt32(e) {
		return this.bytes_[e] | this.bytes_[e + 1] << 8 | this.bytes_[e + 2] << 16 | this.bytes_[e + 3] << 24;
	}
	readUint32(e) {
		return this.readInt32(e) >>> 0;
	}
	readInt64(e) {
		return BigInt.asIntN(64, BigInt(this.readUint32(e)) + (BigInt(this.readUint32(e + 4)) << BigInt(32)));
	}
	readUint64(e) {
		return BigInt.asUintN(64, BigInt(this.readUint32(e)) + (BigInt(this.readUint32(e + 4)) << BigInt(32)));
	}
	readFloat32(e) {
		return ct[0] = this.readInt32(e), lt[0];
	}
	readFloat64(e) {
		return ct[+!dt] = this.readInt32(e), ct[+!!dt] = this.readInt32(e + 4), ut[0];
	}
	writeInt8(e, t) {
		this.bytes_[e] = t;
	}
	writeUint8(e, t) {
		this.bytes_[e] = t;
	}
	writeInt16(e, t) {
		this.bytes_[e] = t, this.bytes_[e + 1] = t >> 8;
	}
	writeUint16(e, t) {
		this.bytes_[e] = t, this.bytes_[e + 1] = t >> 8;
	}
	writeInt32(e, t) {
		this.bytes_[e] = t, this.bytes_[e + 1] = t >> 8, this.bytes_[e + 2] = t >> 16, this.bytes_[e + 3] = t >> 24;
	}
	writeUint32(e, t) {
		this.bytes_[e] = t, this.bytes_[e + 1] = t >> 8, this.bytes_[e + 2] = t >> 16, this.bytes_[e + 3] = t >> 24;
	}
	writeInt64(e, t) {
		this.writeInt32(e, Number(BigInt.asIntN(32, t))), this.writeInt32(e + 4, Number(BigInt.asIntN(32, t >> BigInt(32))));
	}
	writeUint64(e, t) {
		this.writeUint32(e, Number(BigInt.asUintN(32, t))), this.writeUint32(e + 4, Number(BigInt.asUintN(32, t >> BigInt(32))));
	}
	writeFloat32(e, t) {
		lt[0] = t, this.writeInt32(e, ct[0]);
	}
	writeFloat64(e, t) {
		ut[0] = t, this.writeInt32(e, ct[+!dt]), this.writeInt32(e + 4, ct[+!!dt]);
	}
	getBufferIdentifier() {
		if (this.bytes_.length < this.position_ + ot + st) throw Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
		let e = "";
		for (let t = 0; t < st; t++) e += String.fromCharCode(this.readInt8(this.position_ + ot + t));
		return e;
	}
	__offset(e, t) {
		let n = e - this.readInt32(e);
		return t < this.readInt16(n) ? this.readInt16(n + t) : 0;
	}
	__union(e, t) {
		return e.bb_pos = t + this.readInt32(t), e.bb = this, e;
	}
	__string(e, t) {
		e += this.readInt32(e);
		let n = this.readInt32(e);
		e += ot;
		let r = this.bytes_.subarray(e, e + n);
		return t === ft.UTF8_BYTES ? r : this.text_decoder_.decode(r);
	}
	__union_with_string(e, t) {
		return typeof e == "string" ? this.__string(t) : this.__union(e, t);
	}
	__indirect(e) {
		return e + this.readInt32(e);
	}
	__vector(e) {
		return e + this.readInt32(e) + ot;
	}
	__vector_len(e) {
		return this.readInt32(e + this.readInt32(e));
	}
	__has_identifier(e) {
		if (e.length != st) throw Error("FlatBuffers: file identifier must be length 4");
		for (let t = 0; t < st; t++) if (e.charCodeAt(t) != this.readInt8(this.position() + ot + t)) return !1;
		return !0;
	}
	createScalarList(e, t) {
		let n = [];
		for (let r = 0; r < t; ++r) {
			let t = e(r);
			t !== null && n.push(t);
		}
		return n;
	}
	createObjList(e, t) {
		let n = [];
		for (let r = 0; r < t; ++r) {
			let t = e(r);
			t !== null && n.push(t.unpack());
		}
		return n;
	}
}, mt = class e {
	constructor(e) {
		this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null, this.text_encoder = new TextEncoder();
		let t;
		t = e || 1024, this.bb = pt.allocate(t), this.space = t;
	}
	clear() {
		this.bb.clear(), this.space = this.bb.capacity(), this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null;
	}
	forceDefaults(e) {
		this.force_defaults = e;
	}
	dataBuffer() {
		return this.bb;
	}
	asUint8Array() {
		return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset());
	}
	prep(t, n) {
		t > this.minalign && (this.minalign = t);
		let r = ~(this.bb.capacity() - this.space + n) + 1 & t - 1;
		for (; this.space < r + t + n;) {
			let t = this.bb.capacity();
			this.bb = e.growByteBuffer(this.bb), this.space += this.bb.capacity() - t;
		}
		this.pad(r);
	}
	pad(e) {
		for (let t = 0; t < e; t++) this.bb.writeInt8(--this.space, 0);
	}
	writeInt8(e) {
		this.bb.writeInt8(--this.space, e);
	}
	writeInt16(e) {
		this.bb.writeInt16(this.space -= 2, e);
	}
	writeInt32(e) {
		this.bb.writeInt32(this.space -= 4, e);
	}
	writeInt64(e) {
		this.bb.writeInt64(this.space -= 8, e);
	}
	writeFloat32(e) {
		this.bb.writeFloat32(this.space -= 4, e);
	}
	writeFloat64(e) {
		this.bb.writeFloat64(this.space -= 8, e);
	}
	addInt8(e) {
		this.prep(1, 0), this.writeInt8(e);
	}
	addInt16(e) {
		this.prep(2, 0), this.writeInt16(e);
	}
	addInt32(e) {
		this.prep(4, 0), this.writeInt32(e);
	}
	addInt64(e) {
		this.prep(8, 0), this.writeInt64(e);
	}
	addFloat32(e) {
		this.prep(4, 0), this.writeFloat32(e);
	}
	addFloat64(e) {
		this.prep(8, 0), this.writeFloat64(e);
	}
	addFieldInt8(e, t, n) {
		(this.force_defaults || t != n) && (this.addInt8(t), this.slot(e));
	}
	addFieldInt16(e, t, n) {
		(this.force_defaults || t != n) && (this.addInt16(t), this.slot(e));
	}
	addFieldInt32(e, t, n) {
		(this.force_defaults || t != n) && (this.addInt32(t), this.slot(e));
	}
	addFieldInt64(e, t, n) {
		(this.force_defaults || t !== n) && (this.addInt64(t), this.slot(e));
	}
	addFieldFloat32(e, t, n) {
		(this.force_defaults || t != n) && (this.addFloat32(t), this.slot(e));
	}
	addFieldFloat64(e, t, n) {
		(this.force_defaults || t != n) && (this.addFloat64(t), this.slot(e));
	}
	addFieldOffset(e, t, n) {
		(this.force_defaults || t != n) && (this.addOffset(t), this.slot(e));
	}
	addFieldStruct(e, t, n) {
		t != n && (this.nested(t), this.slot(e));
	}
	nested(e) {
		if (e != this.offset()) throw TypeError("FlatBuffers: struct must be serialized inline.");
	}
	notNested() {
		if (this.isNested) throw TypeError("FlatBuffers: object serialization must not be nested.");
	}
	slot(e) {
		this.vtable !== null && (this.vtable[e] = this.offset());
	}
	offset() {
		return this.bb.capacity() - this.space;
	}
	static growByteBuffer(e) {
		let t = e.capacity();
		if (t & 3221225472) throw Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");
		let n = t << 1, r = pt.allocate(n);
		return r.setPosition(n - t), r.bytes().set(e.bytes(), n - t), r;
	}
	addOffset(e) {
		this.prep(ot, 0), this.writeInt32(this.offset() - e + ot);
	}
	startObject(e) {
		this.notNested(), this.vtable ??= [], this.vtable_in_use = e;
		for (let t = 0; t < e; t++) this.vtable[t] = 0;
		this.isNested = !0, this.object_start = this.offset();
	}
	endObject() {
		if (this.vtable == null || !this.isNested) throw Error("FlatBuffers: endObject called without startObject");
		this.addInt32(0);
		let e = this.offset(), t = this.vtable_in_use - 1;
		for (; t >= 0 && this.vtable[t] == 0; t--);
		let n = t + 1;
		for (; t >= 0; t--) this.addInt16(this.vtable[t] == 0 ? 0 : e - this.vtable[t]);
		this.addInt16(e - this.object_start);
		let r = (n + 2) * at;
		this.addInt16(r);
		let i = 0, a = this.space;
		t: for (t = 0; t < this.vtables.length; t++) {
			let e = this.bb.capacity() - this.vtables[t];
			if (r == this.bb.readInt16(e)) {
				for (let t = at; t < r; t += at) if (this.bb.readInt16(a + t) != this.bb.readInt16(e + t)) continue t;
				i = this.vtables[t];
				break;
			}
		}
		return i ? (this.space = this.bb.capacity() - e, this.bb.writeInt32(this.space, i - e)) : (this.vtables.push(this.offset()), this.bb.writeInt32(this.bb.capacity() - e, this.offset() - e)), this.isNested = !1, e;
	}
	finish(e, t, n) {
		let r = n ? b : 0;
		if (t) {
			let e = t;
			if (this.prep(this.minalign, 8 + r), e.length != st) throw TypeError("FlatBuffers: file identifier must be length 4");
			for (let t = 3; t >= 0; t--) this.writeInt8(e.charCodeAt(t));
		}
		this.prep(this.minalign, ot + r), this.addOffset(e), r && this.addInt32(this.bb.capacity() - this.space), this.bb.setPosition(this.space);
	}
	finishSizePrefixed(e, t) {
		this.finish(e, t, !0);
	}
	requiredField(e, t) {
		let n = this.bb.capacity() - e, r = n - this.bb.readInt32(n);
		if (!(t < this.bb.readInt16(r) && this.bb.readInt16(r + t) != 0)) throw TypeError("FlatBuffers: field " + t + " must be set");
	}
	startVector(e, t, n) {
		this.notNested(), this.vector_num_elems = t, this.prep(ot, e * t), this.prep(n, e * t);
	}
	endVector() {
		return this.writeInt32(this.vector_num_elems), this.offset();
	}
	createSharedString(e) {
		if (!e) return 0;
		if (this.string_maps ||= /* @__PURE__ */ new Map(), this.string_maps.has(e)) return this.string_maps.get(e);
		let t = this.createString(e);
		return this.string_maps.set(e, t), t;
	}
	createString(e) {
		if (e == null) return 0;
		let t;
		return t = e instanceof Uint8Array ? e : this.text_encoder.encode(e), this.addInt8(0), this.startVector(1, t.length, 1), this.bb.setPosition(this.space -= t.length), this.bb.bytes().set(t, this.space), this.endVector();
	}
	createByteVector(e) {
		return e == null ? 0 : (this.startVector(1, e.length, 1), this.bb.setPosition(this.space -= e.length), this.bb.bytes().set(e, this.space), this.endVector());
	}
	createObjectOffset(e) {
		return e === null ? 0 : typeof e == "string" ? this.createString(e) : e.pack(this);
	}
	createObjectOffsetList(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) {
			let r = e[n];
			if (r !== null) t.push(this.createObjectOffset(r));
			else throw TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.");
		}
		return t;
	}
	createStructOffsetList(e, t) {
		return t(this, e.length), this.createObjectOffsetList(e.slice().reverse()), this.endVector();
	}
}, ht;
(function(e) {
	e[e.BUFFER = 0] = "BUFFER";
})(ht ||= {});
var gt;
(function(e) {
	e[e.LZ4_FRAME = 0] = "LZ4_FRAME", e[e.ZSTD = 1] = "ZSTD";
})(gt ||= {});
var _t = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsBodyCompression(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsBodyCompression(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	codec() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt8(this.bb_pos + e) : gt.LZ4_FRAME;
	}
	method() {
		let e = this.bb.__offset(this.bb_pos, 6);
		return e ? this.bb.readInt8(this.bb_pos + e) : ht.BUFFER;
	}
	static startBodyCompression(e) {
		e.startObject(2);
	}
	static addCodec(e, t) {
		e.addFieldInt8(0, t, gt.LZ4_FRAME);
	}
	static addMethod(e, t) {
		e.addFieldInt8(1, t, ht.BUFFER);
	}
	static endBodyCompression(e) {
		return e.endObject();
	}
	static createBodyCompression(t, n, r) {
		return e.startBodyCompression(t), e.addCodec(t, n), e.addMethod(t, r), e.endBodyCompression(t);
	}
}, vt = class {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	offset() {
		return this.bb.readInt64(this.bb_pos);
	}
	length() {
		return this.bb.readInt64(this.bb_pos + 8);
	}
	static sizeOf() {
		return 16;
	}
	static createBuffer(e, t, n) {
		return e.prep(8, 16), e.writeInt64(BigInt(n ?? 0)), e.writeInt64(BigInt(t ?? 0)), e.offset();
	}
}, yt = class {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	length() {
		return this.bb.readInt64(this.bb_pos);
	}
	nullCount() {
		return this.bb.readInt64(this.bb_pos + 8);
	}
	static sizeOf() {
		return 16;
	}
	static createFieldNode(e, t, n) {
		return e.prep(8, 16), e.writeInt64(BigInt(n ?? 0)), e.writeInt64(BigInt(t ?? 0)), e.offset();
	}
}, x = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsRecordBatch(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsRecordBatch(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	length() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt64(this.bb_pos + e) : BigInt("0");
	}
	nodes(e, t) {
		let n = this.bb.__offset(this.bb_pos, 6);
		return n ? (t || new yt()).__init(this.bb.__vector(this.bb_pos + n) + e * 16, this.bb) : null;
	}
	nodesLength() {
		let e = this.bb.__offset(this.bb_pos, 6);
		return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
	}
	buffers(e, t) {
		let n = this.bb.__offset(this.bb_pos, 8);
		return n ? (t || new vt()).__init(this.bb.__vector(this.bb_pos + n) + e * 16, this.bb) : null;
	}
	buffersLength() {
		let e = this.bb.__offset(this.bb_pos, 8);
		return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
	}
	compression(e) {
		let t = this.bb.__offset(this.bb_pos, 10);
		return t ? (e || new _t()).__init(this.bb.__indirect(this.bb_pos + t), this.bb) : null;
	}
	variadicBufferCounts(e) {
		let t = this.bb.__offset(this.bb_pos, 12);
		return t ? this.bb.readInt64(this.bb.__vector(this.bb_pos + t) + e * 8) : BigInt(0);
	}
	variadicBufferCountsLength() {
		let e = this.bb.__offset(this.bb_pos, 12);
		return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
	}
	static startRecordBatch(e) {
		e.startObject(5);
	}
	static addLength(e, t) {
		e.addFieldInt64(0, t, BigInt("0"));
	}
	static addNodes(e, t) {
		e.addFieldOffset(1, t, 0);
	}
	static startNodesVector(e, t) {
		e.startVector(16, t, 8);
	}
	static addBuffers(e, t) {
		e.addFieldOffset(2, t, 0);
	}
	static startBuffersVector(e, t) {
		e.startVector(16, t, 8);
	}
	static addCompression(e, t) {
		e.addFieldOffset(3, t, 0);
	}
	static addVariadicBufferCounts(e, t) {
		e.addFieldOffset(4, t, 0);
	}
	static createVariadicBufferCountsVector(e, t) {
		e.startVector(8, t.length, 8);
		for (let n = t.length - 1; n >= 0; n--) e.addInt64(t[n]);
		return e.endVector();
	}
	static startVariadicBufferCountsVector(e, t) {
		e.startVector(8, t, 8);
	}
	static endRecordBatch(e) {
		return e.endObject();
	}
}, bt = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsDictionaryBatch(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsDictionaryBatch(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	id() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt64(this.bb_pos + e) : BigInt("0");
	}
	data(e) {
		let t = this.bb.__offset(this.bb_pos, 6);
		return t ? (e || new x()).__init(this.bb.__indirect(this.bb_pos + t), this.bb) : null;
	}
	isDelta() {
		let e = this.bb.__offset(this.bb_pos, 8);
		return e ? !!this.bb.readInt8(this.bb_pos + e) : !1;
	}
	static startDictionaryBatch(e) {
		e.startObject(3);
	}
	static addId(e, t) {
		e.addFieldInt64(0, t, BigInt("0"));
	}
	static addData(e, t) {
		e.addFieldOffset(1, t, 0);
	}
	static addIsDelta(e, t) {
		e.addFieldInt8(2, +t, 0);
	}
	static endDictionaryBatch(e) {
		return e.endObject();
	}
}, xt;
(function(e) {
	e[e.Little = 0] = "Little", e[e.Big = 1] = "Big";
})(xt ||= {});
var St;
(function(e) {
	e[e.DenseArray = 0] = "DenseArray";
})(St ||= {});
var Ct = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsInt(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsInt(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	bitWidth() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt32(this.bb_pos + e) : 0;
	}
	isSigned() {
		let e = this.bb.__offset(this.bb_pos, 6);
		return e ? !!this.bb.readInt8(this.bb_pos + e) : !1;
	}
	static startInt(e) {
		e.startObject(2);
	}
	static addBitWidth(e, t) {
		e.addFieldInt32(0, t, 0);
	}
	static addIsSigned(e, t) {
		e.addFieldInt8(1, +t, 0);
	}
	static endInt(e) {
		return e.endObject();
	}
	static createInt(t, n, r) {
		return e.startInt(t), e.addBitWidth(t, n), e.addIsSigned(t, r), e.endInt(t);
	}
}, wt = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsDictionaryEncoding(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsDictionaryEncoding(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	id() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt64(this.bb_pos + e) : BigInt("0");
	}
	indexType(e) {
		let t = this.bb.__offset(this.bb_pos, 6);
		return t ? (e || new Ct()).__init(this.bb.__indirect(this.bb_pos + t), this.bb) : null;
	}
	isOrdered() {
		let e = this.bb.__offset(this.bb_pos, 8);
		return e ? !!this.bb.readInt8(this.bb_pos + e) : !1;
	}
	dictionaryKind() {
		let e = this.bb.__offset(this.bb_pos, 10);
		return e ? this.bb.readInt16(this.bb_pos + e) : St.DenseArray;
	}
	static startDictionaryEncoding(e) {
		e.startObject(4);
	}
	static addId(e, t) {
		e.addFieldInt64(0, t, BigInt("0"));
	}
	static addIndexType(e, t) {
		e.addFieldOffset(1, t, 0);
	}
	static addIsOrdered(e, t) {
		e.addFieldInt8(2, +t, 0);
	}
	static addDictionaryKind(e, t) {
		e.addFieldInt16(3, t, St.DenseArray);
	}
	static endDictionaryEncoding(e) {
		return e.endObject();
	}
}, S = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsKeyValue(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsKeyValue(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	key(e) {
		let t = this.bb.__offset(this.bb_pos, 4);
		return t ? this.bb.__string(this.bb_pos + t, e) : null;
	}
	value(e) {
		let t = this.bb.__offset(this.bb_pos, 6);
		return t ? this.bb.__string(this.bb_pos + t, e) : null;
	}
	static startKeyValue(e) {
		e.startObject(2);
	}
	static addKey(e, t) {
		e.addFieldOffset(0, t, 0);
	}
	static addValue(e, t) {
		e.addFieldOffset(1, t, 0);
	}
	static endKeyValue(e) {
		return e.endObject();
	}
	static createKeyValue(t, n, r) {
		return e.startKeyValue(t), e.addKey(t, n), e.addValue(t, r), e.endKeyValue(t);
	}
}, Tt = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsBinary(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsBinary(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static startBinary(e) {
		e.startObject(0);
	}
	static endBinary(e) {
		return e.endObject();
	}
	static createBinary(t) {
		return e.startBinary(t), e.endBinary(t);
	}
}, Et = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsBinaryView(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsBinaryView(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static startBinaryView(e) {
		e.startObject(0);
	}
	static endBinaryView(e) {
		return e.endObject();
	}
	static createBinaryView(t) {
		return e.startBinaryView(t), e.endBinaryView(t);
	}
}, Dt = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsBool(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsBool(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static startBool(e) {
		e.startObject(0);
	}
	static endBool(e) {
		return e.endObject();
	}
	static createBool(t) {
		return e.startBool(t), e.endBool(t);
	}
}, Ot = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsDate(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsDate(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	unit() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt16(this.bb_pos + e) : it.MILLISECOND;
	}
	static startDate(e) {
		e.startObject(1);
	}
	static addUnit(e, t) {
		e.addFieldInt16(0, t, it.MILLISECOND);
	}
	static endDate(e) {
		return e.endObject();
	}
	static createDate(t, n) {
		return e.startDate(t), e.addUnit(t, n), e.endDate(t);
	}
}, kt = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsDecimal(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsDecimal(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	precision() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt32(this.bb_pos + e) : 0;
	}
	scale() {
		let e = this.bb.__offset(this.bb_pos, 6);
		return e ? this.bb.readInt32(this.bb_pos + e) : 0;
	}
	bitWidth() {
		let e = this.bb.__offset(this.bb_pos, 8);
		return e ? this.bb.readInt32(this.bb_pos + e) : 128;
	}
	static startDecimal(e) {
		e.startObject(3);
	}
	static addPrecision(e, t) {
		e.addFieldInt32(0, t, 0);
	}
	static addScale(e, t) {
		e.addFieldInt32(1, t, 0);
	}
	static addBitWidth(e, t) {
		e.addFieldInt32(2, t, 128);
	}
	static endDecimal(e) {
		return e.endObject();
	}
	static createDecimal(t, n, r, i) {
		return e.startDecimal(t), e.addPrecision(t, n), e.addScale(t, r), e.addBitWidth(t, i), e.endDecimal(t);
	}
}, At = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsDuration(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsDuration(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	unit() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt16(this.bb_pos + e) : v.MILLISECOND;
	}
	static startDuration(e) {
		e.startObject(1);
	}
	static addUnit(e, t) {
		e.addFieldInt16(0, t, v.MILLISECOND);
	}
	static endDuration(e) {
		return e.endObject();
	}
	static createDuration(t, n) {
		return e.startDuration(t), e.addUnit(t, n), e.endDuration(t);
	}
}, jt = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsFixedSizeBinary(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsFixedSizeBinary(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	byteWidth() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt32(this.bb_pos + e) : 0;
	}
	static startFixedSizeBinary(e) {
		e.startObject(1);
	}
	static addByteWidth(e, t) {
		e.addFieldInt32(0, t, 0);
	}
	static endFixedSizeBinary(e) {
		return e.endObject();
	}
	static createFixedSizeBinary(t, n) {
		return e.startFixedSizeBinary(t), e.addByteWidth(t, n), e.endFixedSizeBinary(t);
	}
}, Mt = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsFixedSizeList(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsFixedSizeList(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	listSize() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt32(this.bb_pos + e) : 0;
	}
	static startFixedSizeList(e) {
		e.startObject(1);
	}
	static addListSize(e, t) {
		e.addFieldInt32(0, t, 0);
	}
	static endFixedSizeList(e) {
		return e.endObject();
	}
	static createFixedSizeList(t, n) {
		return e.startFixedSizeList(t), e.addListSize(t, n), e.endFixedSizeList(t);
	}
}, Nt = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsFloatingPoint(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsFloatingPoint(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	precision() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt16(this.bb_pos + e) : _.HALF;
	}
	static startFloatingPoint(e) {
		e.startObject(1);
	}
	static addPrecision(e, t) {
		e.addFieldInt16(0, t, _.HALF);
	}
	static endFloatingPoint(e) {
		return e.endObject();
	}
	static createFloatingPoint(t, n) {
		return e.startFloatingPoint(t), e.addPrecision(t, n), e.endFloatingPoint(t);
	}
}, Pt = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsInterval(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsInterval(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	unit() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt16(this.bb_pos + e) : y.YEAR_MONTH;
	}
	static startInterval(e) {
		e.startObject(1);
	}
	static addUnit(e, t) {
		e.addFieldInt16(0, t, y.YEAR_MONTH);
	}
	static endInterval(e) {
		return e.endObject();
	}
	static createInterval(t, n) {
		return e.startInterval(t), e.addUnit(t, n), e.endInterval(t);
	}
}, Ft = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsLargeBinary(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsLargeBinary(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static startLargeBinary(e) {
		e.startObject(0);
	}
	static endLargeBinary(e) {
		return e.endObject();
	}
	static createLargeBinary(t) {
		return e.startLargeBinary(t), e.endLargeBinary(t);
	}
}, It = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsLargeList(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsLargeList(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static startLargeList(e) {
		e.startObject(0);
	}
	static endLargeList(e) {
		return e.endObject();
	}
	static createLargeList(t) {
		return e.startLargeList(t), e.endLargeList(t);
	}
}, Lt = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsLargeUtf8(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsLargeUtf8(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static startLargeUtf8(e) {
		e.startObject(0);
	}
	static endLargeUtf8(e) {
		return e.endObject();
	}
	static createLargeUtf8(t) {
		return e.startLargeUtf8(t), e.endLargeUtf8(t);
	}
}, Rt = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsList(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsList(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static startList(e) {
		e.startObject(0);
	}
	static endList(e) {
		return e.endObject();
	}
	static createList(t) {
		return e.startList(t), e.endList(t);
	}
}, zt = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsMap(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsMap(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	keysSorted() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? !!this.bb.readInt8(this.bb_pos + e) : !1;
	}
	static startMap(e) {
		e.startObject(1);
	}
	static addKeysSorted(e, t) {
		e.addFieldInt8(0, +t, 0);
	}
	static endMap(e) {
		return e.endObject();
	}
	static createMap(t, n) {
		return e.startMap(t), e.addKeysSorted(t, n), e.endMap(t);
	}
}, Bt = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsNull(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsNull(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static startNull(e) {
		e.startObject(0);
	}
	static endNull(e) {
		return e.endObject();
	}
	static createNull(t) {
		return e.startNull(t), e.endNull(t);
	}
}, Vt = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsStruct_(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsStruct_(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static startStruct_(e) {
		e.startObject(0);
	}
	static endStruct_(e) {
		return e.endObject();
	}
	static createStruct_(t) {
		return e.startStruct_(t), e.endStruct_(t);
	}
}, Ht = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsTime(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsTime(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	unit() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt16(this.bb_pos + e) : v.MILLISECOND;
	}
	bitWidth() {
		let e = this.bb.__offset(this.bb_pos, 6);
		return e ? this.bb.readInt32(this.bb_pos + e) : 32;
	}
	static startTime(e) {
		e.startObject(2);
	}
	static addUnit(e, t) {
		e.addFieldInt16(0, t, v.MILLISECOND);
	}
	static addBitWidth(e, t) {
		e.addFieldInt32(1, t, 32);
	}
	static endTime(e) {
		return e.endObject();
	}
	static createTime(t, n, r) {
		return e.startTime(t), e.addUnit(t, n), e.addBitWidth(t, r), e.endTime(t);
	}
}, Ut = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsTimestamp(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsTimestamp(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	unit() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt16(this.bb_pos + e) : v.SECOND;
	}
	timezone(e) {
		let t = this.bb.__offset(this.bb_pos, 6);
		return t ? this.bb.__string(this.bb_pos + t, e) : null;
	}
	static startTimestamp(e) {
		e.startObject(2);
	}
	static addUnit(e, t) {
		e.addFieldInt16(0, t, v.SECOND);
	}
	static addTimezone(e, t) {
		e.addFieldOffset(1, t, 0);
	}
	static endTimestamp(e) {
		return e.endObject();
	}
	static createTimestamp(t, n, r) {
		return e.startTimestamp(t), e.addUnit(t, n), e.addTimezone(t, r), e.endTimestamp(t);
	}
}, Wt = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsUnion(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsUnion(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	mode() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt16(this.bb_pos + e) : g.Sparse;
	}
	typeIds(e) {
		let t = this.bb.__offset(this.bb_pos, 6);
		return t ? this.bb.readInt32(this.bb.__vector(this.bb_pos + t) + e * 4) : 0;
	}
	typeIdsLength() {
		let e = this.bb.__offset(this.bb_pos, 6);
		return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
	}
	typeIdsArray() {
		let e = this.bb.__offset(this.bb_pos, 6);
		return e ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e), this.bb.__vector_len(this.bb_pos + e)) : null;
	}
	static startUnion(e) {
		e.startObject(2);
	}
	static addMode(e, t) {
		e.addFieldInt16(0, t, g.Sparse);
	}
	static addTypeIds(e, t) {
		e.addFieldOffset(1, t, 0);
	}
	static createTypeIdsVector(e, t) {
		e.startVector(4, t.length, 4);
		for (let n = t.length - 1; n >= 0; n--) e.addInt32(t[n]);
		return e.endVector();
	}
	static startTypeIdsVector(e, t) {
		e.startVector(4, t, 4);
	}
	static endUnion(e) {
		return e.endObject();
	}
	static createUnion(t, n, r) {
		return e.startUnion(t), e.addMode(t, n), e.addTypeIds(t, r), e.endUnion(t);
	}
}, Gt = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsUtf8(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsUtf8(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static startUtf8(e) {
		e.startObject(0);
	}
	static endUtf8(e) {
		return e.endObject();
	}
	static createUtf8(t) {
		return e.startUtf8(t), e.endUtf8(t);
	}
}, Kt = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsUtf8View(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsUtf8View(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static startUtf8View(e) {
		e.startObject(0);
	}
	static endUtf8View(e) {
		return e.endObject();
	}
	static createUtf8View(t) {
		return e.startUtf8View(t), e.endUtf8View(t);
	}
}, C;
(function(e) {
	e[e.NONE = 0] = "NONE", e[e.Null = 1] = "Null", e[e.Int = 2] = "Int", e[e.FloatingPoint = 3] = "FloatingPoint", e[e.Binary = 4] = "Binary", e[e.Utf8 = 5] = "Utf8", e[e.Bool = 6] = "Bool", e[e.Decimal = 7] = "Decimal", e[e.Date = 8] = "Date", e[e.Time = 9] = "Time", e[e.Timestamp = 10] = "Timestamp", e[e.Interval = 11] = "Interval", e[e.List = 12] = "List", e[e.Struct_ = 13] = "Struct_", e[e.Union = 14] = "Union", e[e.FixedSizeBinary = 15] = "FixedSizeBinary", e[e.FixedSizeList = 16] = "FixedSizeList", e[e.Map = 17] = "Map", e[e.Duration = 18] = "Duration", e[e.LargeBinary = 19] = "LargeBinary", e[e.LargeUtf8 = 20] = "LargeUtf8", e[e.LargeList = 21] = "LargeList", e[e.RunEndEncoded = 22] = "RunEndEncoded", e[e.BinaryView = 23] = "BinaryView", e[e.Utf8View = 24] = "Utf8View", e[e.ListView = 25] = "ListView", e[e.LargeListView = 26] = "LargeListView";
})(C ||= {});
var w = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsField(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsField(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	name(e) {
		let t = this.bb.__offset(this.bb_pos, 4);
		return t ? this.bb.__string(this.bb_pos + t, e) : null;
	}
	nullable() {
		let e = this.bb.__offset(this.bb_pos, 6);
		return e ? !!this.bb.readInt8(this.bb_pos + e) : !1;
	}
	typeType() {
		let e = this.bb.__offset(this.bb_pos, 8);
		return e ? this.bb.readUint8(this.bb_pos + e) : C.NONE;
	}
	type(e) {
		let t = this.bb.__offset(this.bb_pos, 10);
		return t ? this.bb.__union(e, this.bb_pos + t) : null;
	}
	dictionary(e) {
		let t = this.bb.__offset(this.bb_pos, 12);
		return t ? (e || new wt()).__init(this.bb.__indirect(this.bb_pos + t), this.bb) : null;
	}
	children(t, n) {
		let r = this.bb.__offset(this.bb_pos, 14);
		return r ? (n || new e()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null;
	}
	childrenLength() {
		let e = this.bb.__offset(this.bb_pos, 14);
		return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
	}
	customMetadata(e, t) {
		let n = this.bb.__offset(this.bb_pos, 16);
		return n ? (t || new S()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + e * 4), this.bb) : null;
	}
	customMetadataLength() {
		let e = this.bb.__offset(this.bb_pos, 16);
		return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
	}
	static startField(e) {
		e.startObject(7);
	}
	static addName(e, t) {
		e.addFieldOffset(0, t, 0);
	}
	static addNullable(e, t) {
		e.addFieldInt8(1, +t, 0);
	}
	static addTypeType(e, t) {
		e.addFieldInt8(2, t, C.NONE);
	}
	static addType(e, t) {
		e.addFieldOffset(3, t, 0);
	}
	static addDictionary(e, t) {
		e.addFieldOffset(4, t, 0);
	}
	static addChildren(e, t) {
		e.addFieldOffset(5, t, 0);
	}
	static createChildrenVector(e, t) {
		e.startVector(4, t.length, 4);
		for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
		return e.endVector();
	}
	static startChildrenVector(e, t) {
		e.startVector(4, t, 4);
	}
	static addCustomMetadata(e, t) {
		e.addFieldOffset(6, t, 0);
	}
	static createCustomMetadataVector(e, t) {
		e.startVector(4, t.length, 4);
		for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
		return e.endVector();
	}
	static startCustomMetadataVector(e, t) {
		e.startVector(4, t, 4);
	}
	static endField(e) {
		return e.endObject();
	}
}, qt = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsSchema(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsSchema(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	endianness() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt16(this.bb_pos + e) : xt.Little;
	}
	fields(e, t) {
		let n = this.bb.__offset(this.bb_pos, 6);
		return n ? (t || new w()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + e * 4), this.bb) : null;
	}
	fieldsLength() {
		let e = this.bb.__offset(this.bb_pos, 6);
		return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
	}
	customMetadata(e, t) {
		let n = this.bb.__offset(this.bb_pos, 8);
		return n ? (t || new S()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + e * 4), this.bb) : null;
	}
	customMetadataLength() {
		let e = this.bb.__offset(this.bb_pos, 8);
		return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
	}
	features(e) {
		let t = this.bb.__offset(this.bb_pos, 10);
		return t ? this.bb.readInt64(this.bb.__vector(this.bb_pos + t) + e * 8) : BigInt(0);
	}
	featuresLength() {
		let e = this.bb.__offset(this.bb_pos, 10);
		return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
	}
	static startSchema(e) {
		e.startObject(4);
	}
	static addEndianness(e, t) {
		e.addFieldInt16(0, t, xt.Little);
	}
	static addFields(e, t) {
		e.addFieldOffset(1, t, 0);
	}
	static createFieldsVector(e, t) {
		e.startVector(4, t.length, 4);
		for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
		return e.endVector();
	}
	static startFieldsVector(e, t) {
		e.startVector(4, t, 4);
	}
	static addCustomMetadata(e, t) {
		e.addFieldOffset(2, t, 0);
	}
	static createCustomMetadataVector(e, t) {
		e.startVector(4, t.length, 4);
		for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
		return e.endVector();
	}
	static startCustomMetadataVector(e, t) {
		e.startVector(4, t, 4);
	}
	static addFeatures(e, t) {
		e.addFieldOffset(3, t, 0);
	}
	static createFeaturesVector(e, t) {
		e.startVector(8, t.length, 8);
		for (let n = t.length - 1; n >= 0; n--) e.addInt64(t[n]);
		return e.endVector();
	}
	static startFeaturesVector(e, t) {
		e.startVector(8, t, 8);
	}
	static endSchema(e) {
		return e.endObject();
	}
	static createSchema(t, n, r, i, a) {
		return e.startSchema(t), e.addEndianness(t, n), e.addFields(t, r), e.addCustomMetadata(t, i), e.addFeatures(t, a), e.endSchema(t);
	}
}, T;
(function(e) {
	e[e.NONE = 0] = "NONE", e[e.Schema = 1] = "Schema", e[e.DictionaryBatch = 2] = "DictionaryBatch", e[e.RecordBatch = 3] = "RecordBatch", e[e.Tensor = 4] = "Tensor", e[e.SparseTensor = 5] = "SparseTensor";
})(T ||= {});
var E;
(function(e) {
	e[e.NONE = 0] = "NONE", e[e.Null = 1] = "Null", e[e.Int = 2] = "Int", e[e.Float = 3] = "Float", e[e.Binary = 4] = "Binary", e[e.Utf8 = 5] = "Utf8", e[e.Bool = 6] = "Bool", e[e.Decimal = 7] = "Decimal", e[e.Date = 8] = "Date", e[e.Time = 9] = "Time", e[e.Timestamp = 10] = "Timestamp", e[e.Interval = 11] = "Interval", e[e.List = 12] = "List", e[e.Struct = 13] = "Struct", e[e.Union = 14] = "Union", e[e.FixedSizeBinary = 15] = "FixedSizeBinary", e[e.FixedSizeList = 16] = "FixedSizeList", e[e.Map = 17] = "Map", e[e.Duration = 18] = "Duration", e[e.LargeBinary = 19] = "LargeBinary", e[e.LargeUtf8 = 20] = "LargeUtf8", e[e.LargeList = 21] = "LargeList", e[e.BinaryView = 23] = "BinaryView", e[e.Utf8View = 24] = "Utf8View", e[e.Dictionary = -1] = "Dictionary", e[e.Int8 = -2] = "Int8", e[e.Int16 = -3] = "Int16", e[e.Int32 = -4] = "Int32", e[e.Int64 = -5] = "Int64", e[e.Uint8 = -6] = "Uint8", e[e.Uint16 = -7] = "Uint16", e[e.Uint32 = -8] = "Uint32", e[e.Uint64 = -9] = "Uint64", e[e.Float16 = -10] = "Float16", e[e.Float32 = -11] = "Float32", e[e.Float64 = -12] = "Float64", e[e.DateDay = -13] = "DateDay", e[e.DateMillisecond = -14] = "DateMillisecond", e[e.TimestampSecond = -15] = "TimestampSecond", e[e.TimestampMillisecond = -16] = "TimestampMillisecond", e[e.TimestampMicrosecond = -17] = "TimestampMicrosecond", e[e.TimestampNanosecond = -18] = "TimestampNanosecond", e[e.TimeSecond = -19] = "TimeSecond", e[e.TimeMillisecond = -20] = "TimeMillisecond", e[e.TimeMicrosecond = -21] = "TimeMicrosecond", e[e.TimeNanosecond = -22] = "TimeNanosecond", e[e.DenseUnion = -23] = "DenseUnion", e[e.SparseUnion = -24] = "SparseUnion", e[e.IntervalDayTime = -25] = "IntervalDayTime", e[e.IntervalYearMonth = -26] = "IntervalYearMonth", e[e.DurationSecond = -27] = "DurationSecond", e[e.DurationMillisecond = -28] = "DurationMillisecond", e[e.DurationMicrosecond = -29] = "DurationMicrosecond", e[e.DurationNanosecond = -30] = "DurationNanosecond", e[e.IntervalMonthDayNano = -31] = "IntervalMonthDayNano";
})(E ||= {});
var Jt;
(function(e) {
	e[e.OFFSET = 0] = "OFFSET", e[e.DATA = 1] = "DATA", e[e.VALIDITY = 2] = "VALIDITY", e[e.TYPE = 3] = "TYPE";
})(Jt ||= {});
var Yt = void 0;
function Xt(e) {
	if (e === null) return "null";
	if (e === Yt) return "undefined";
	switch (typeof e) {
		case "number": return `${e}`;
		case "bigint": return `${e}`;
		case "string": return `"${e}"`;
	}
	return typeof e[Symbol.toPrimitive] == "function" ? e[Symbol.toPrimitive]("string") : ArrayBuffer.isView(e) ? e instanceof BigInt64Array || e instanceof BigUint64Array ? `[${[...e].map((e) => Xt(e))}]` : `[${e}]` : ArrayBuffer.isView(e) ? `[${e}]` : JSON.stringify(e, (e, t) => typeof t == "bigint" ? `${t}` : t);
}
var Zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	valueToString: Xt
}, Symbol.toStringTag, { value: "Module" }));
function D(e) {
	if (typeof e == "bigint" && (e < -(2 ** 53 - 1) || e > 2 ** 53 - 1)) throw TypeError(`${e} is not safe to convert to a number.`);
	return Number(e);
}
function Qt(e, t) {
	return D(e / t) + D(e % t) / D(t);
}
var $t = /* @__PURE__ */ Symbol.for("isArrowBigNum");
function en(e, ...t) {
	return t.length === 0 ? Object.setPrototypeOf(p(this.TypedArray, e), this.constructor.prototype) : Object.setPrototypeOf(new this.TypedArray(e, ...t), this.constructor.prototype);
}
en.prototype[$t] = !0, en.prototype.toJSON = function() {
	return `"${sn(this)}"`;
}, en.prototype.valueOf = function(e) {
	return on(this, e);
}, en.prototype.toString = function() {
	return sn(this);
}, en.prototype[Symbol.toPrimitive] = function(e = "default") {
	switch (e) {
		case "number": return on(this);
		case "string": return sn(this);
		case "default": return cn(this);
	}
	return sn(this);
};
function tn(...e) {
	return en.apply(this, e);
}
function nn(...e) {
	return en.apply(this, e);
}
function rn(...e) {
	return en.apply(this, e);
}
Object.setPrototypeOf(tn.prototype, Object.create(Int32Array.prototype)), Object.setPrototypeOf(nn.prototype, Object.create(Uint32Array.prototype)), Object.setPrototypeOf(rn.prototype, Object.create(Uint32Array.prototype)), Object.assign(tn.prototype, en.prototype, {
	constructor: tn,
	signed: !0,
	TypedArray: Int32Array,
	BigIntArray: BigInt64Array
}), Object.assign(nn.prototype, en.prototype, {
	constructor: nn,
	signed: !1,
	TypedArray: Uint32Array,
	BigIntArray: BigUint64Array
}), Object.assign(rn.prototype, en.prototype, {
	constructor: rn,
	signed: !0,
	TypedArray: Uint32Array,
	BigIntArray: BigUint64Array
});
var an = BigInt(4294967296) * BigInt(4294967296) - BigInt(1);
function on(e, t) {
	let { buffer: n, byteOffset: r, byteLength: i, signed: a } = e, o = new BigUint64Array(n, r, i / 8), s = a && o.at(-1) & BigInt(1) << BigInt(63), c = BigInt(0), l = 0;
	if (s) {
		for (let e of o) c |= (e ^ an) * (BigInt(1) << BigInt(64 * l++));
		c *= BigInt(-1), c -= BigInt(1);
	} else for (let e of o) c |= e * (BigInt(1) << BigInt(64 * l++));
	if (typeof t == "number" && t > 0) {
		let e = BigInt("1".padEnd(t + 1, "0")), n = c / e, r = s ? -(c % e) : c % e, i = D(n), a = `${r}`.padStart(t, "0");
		return +`${s && i === 0 ? "-" : ""}${i}.${a}`;
	}
	return D(c);
}
function sn(e) {
	if (e.byteLength === 8) return `${new e.BigIntArray(e.buffer, e.byteOffset, 1)[0]}`;
	if (!e.signed) return ln(e);
	let t = new Uint16Array(e.buffer, e.byteOffset, e.byteLength / 2);
	if (new Int16Array([t.at(-1)])[0] >= 0) return ln(e);
	t = t.slice();
	let n = 1;
	for (let e = 0; e < t.length; e++) {
		let r = t[e], i = ~r + n;
		t[e] = i, n &= +(r === 0);
	}
	return `-${ln(t)}`;
}
function cn(e) {
	return e.byteLength === 8 ? new e.BigIntArray(e.buffer, e.byteOffset, 1)[0] : sn(e);
}
function ln(e) {
	let t = "", n = /* @__PURE__ */ new Uint32Array(2), r = new Uint16Array(e.buffer, e.byteOffset, e.byteLength / 2), i = new Uint32Array((r = new Uint16Array(r).reverse()).buffer), a = -1, o = r.length - 1;
	do {
		for (n[0] = r[a = 0]; a < o;) r[a++] = n[1] = n[0] / 10, n[0] = (n[0] - n[1] * 10 << 16) + r[a];
		r[a] = n[1] = n[0] / 10, n[0] -= n[1] * 10, t = `${n[0]}${t}`;
	} while (i[0] || i[1] || i[2] || i[3]);
	return t ?? "0";
}
var un = class e {
	static new(e, t) {
		switch (t) {
			case !0: return new tn(e);
			case !1: return new nn(e);
		}
		switch (e.constructor) {
			case Int8Array:
			case Int16Array:
			case Int32Array:
			case BigInt64Array: return new tn(e);
		}
		return e.byteLength === 16 ? new rn(e) : new nn(e);
	}
	static signed(e) {
		return new tn(e);
	}
	static unsigned(e) {
		return new nn(e);
	}
	static decimal(e) {
		return new rn(e);
	}
	constructor(t, n) {
		return e.new(t, n);
	}
}, dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	BN: un,
	bigNumToBigInt: cn,
	bigNumToNumber: on,
	bigNumToString: sn,
	isArrowBigNumSymbol: $t
}, Symbol.toStringTag, { value: "Module" })), fn, pn, mn, hn, gn, _n, vn, yn, bn, xn, Sn, Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln = /* @__PURE__ */ Symbol.for("apache-arrow/DataType"), O = class e {
	static isDataType(e) {
		return e?.[Ln] === !0;
	}
	static isNull(e) {
		return e?.typeId === E.Null;
	}
	static isInt(e) {
		return e?.typeId === E.Int;
	}
	static isFloat(e) {
		return e?.typeId === E.Float;
	}
	static isBinary(e) {
		return e?.typeId === E.Binary;
	}
	static isBinaryView(e) {
		return e?.typeId === E.BinaryView;
	}
	static isLargeBinary(e) {
		return e?.typeId === E.LargeBinary;
	}
	static isUtf8(e) {
		return e?.typeId === E.Utf8;
	}
	static isUtf8View(e) {
		return e?.typeId === E.Utf8View;
	}
	static isLargeUtf8(e) {
		return e?.typeId === E.LargeUtf8;
	}
	static isBool(e) {
		return e?.typeId === E.Bool;
	}
	static isDecimal(e) {
		return e?.typeId === E.Decimal;
	}
	static isDate(e) {
		return e?.typeId === E.Date;
	}
	static isTime(e) {
		return e?.typeId === E.Time;
	}
	static isTimestamp(e) {
		return e?.typeId === E.Timestamp;
	}
	static isInterval(e) {
		return e?.typeId === E.Interval;
	}
	static isDuration(e) {
		return e?.typeId === E.Duration;
	}
	static isList(e) {
		return e?.typeId === E.List;
	}
	static isLargeList(e) {
		return e?.typeId === E.LargeList;
	}
	static isStruct(e) {
		return e?.typeId === E.Struct;
	}
	static isUnion(e) {
		return e?.typeId === E.Union;
	}
	static isFixedSizeBinary(e) {
		return e?.typeId === E.FixedSizeBinary;
	}
	static isFixedSizeList(e) {
		return e?.typeId === E.FixedSizeList;
	}
	static isMap(e) {
		return e?.typeId === E.Map;
	}
	static isDictionary(e) {
		return e?.typeId === E.Dictionary;
	}
	static isDenseUnion(t) {
		return e.isUnion(t) && t.mode === g.Dense;
	}
	static isSparseUnion(t) {
		return e.isUnion(t) && t.mode === g.Sparse;
	}
	constructor(e) {
		this.typeId = e;
	}
};
fn = Symbol.toStringTag, O[fn] = ((e) => (e.children = null, e.ArrayType = Array, e.OffsetArrayType = Int32Array, e[Ln] = !0, e[Symbol.toStringTag] = "DataType"))(O.prototype);
var Rn = class extends O {
	constructor() {
		super(E.Null);
	}
	toString() {
		return "Null";
	}
};
pn = Symbol.toStringTag, Rn[pn] = ((e) => e[Symbol.toStringTag] = "Null")(Rn.prototype);
var zn = class extends O {
	constructor(e, t) {
		super(E.Int), this.isSigned = e, this.bitWidth = t;
	}
	get ArrayType() {
		switch (this.bitWidth) {
			case 8: return this.isSigned ? Int8Array : Uint8Array;
			case 16: return this.isSigned ? Int16Array : Uint16Array;
			case 32: return this.isSigned ? Int32Array : Uint32Array;
			case 64: return this.isSigned ? BigInt64Array : BigUint64Array;
		}
		throw Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
	}
	toString() {
		return `${this.isSigned ? "I" : "Ui"}nt${this.bitWidth}`;
	}
};
mn = Symbol.toStringTag, zn[mn] = ((e) => (e.isSigned = null, e.bitWidth = null, e[Symbol.toStringTag] = "Int"))(zn.prototype);
var Bn = class extends zn {
	constructor() {
		super(!0, 32);
	}
	get ArrayType() {
		return Int32Array;
	}
};
Object.defineProperty(Bn.prototype, "ArrayType", { value: Int32Array });
var Vn = class extends O {
	constructor(e) {
		super(E.Float), this.precision = e;
	}
	get ArrayType() {
		switch (this.precision) {
			case _.HALF: return Uint16Array;
			case _.SINGLE: return Float32Array;
			case _.DOUBLE: return Float64Array;
		}
		throw Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
	}
	toString() {
		return `Float${this.precision << 5 || 16}`;
	}
};
hn = Symbol.toStringTag, Vn[hn] = ((e) => (e.precision = null, e[Symbol.toStringTag] = "Float"))(Vn.prototype);
var Hn = class extends O {
	constructor() {
		super(E.Binary);
	}
	toString() {
		return "Binary";
	}
};
gn = Symbol.toStringTag, Hn[gn] = ((e) => (e.ArrayType = Uint8Array, e[Symbol.toStringTag] = "Binary"))(Hn.prototype);
var k = class extends O {
	constructor() {
		super(E.BinaryView);
	}
	toString() {
		return "BinaryView";
	}
};
_n = Symbol.toStringTag, k.ELEMENT_WIDTH = 16, k.INLINE_CAPACITY = 12, k.LENGTH_OFFSET = 0, k.INLINE_OFFSET = 4, k.BUFFER_INDEX_OFFSET = 8, k.BUFFER_OFFSET_OFFSET = 12, k[_n] = ((e) => (e.ArrayType = Uint8Array, e[Symbol.toStringTag] = "BinaryView"))(k.prototype);
var Un = class extends O {
	constructor() {
		super(E.LargeBinary);
	}
	toString() {
		return "LargeBinary";
	}
};
vn = Symbol.toStringTag, Un[vn] = ((e) => (e.ArrayType = Uint8Array, e.OffsetArrayType = BigInt64Array, e[Symbol.toStringTag] = "LargeBinary"))(Un.prototype);
var Wn = class extends O {
	constructor() {
		super(E.Utf8);
	}
	toString() {
		return "Utf8";
	}
};
yn = Symbol.toStringTag, Wn[yn] = ((e) => (e.ArrayType = Uint8Array, e[Symbol.toStringTag] = "Utf8"))(Wn.prototype);
var Gn = class extends O {
	constructor() {
		super(E.Utf8View);
	}
	toString() {
		return "Utf8View";
	}
};
bn = Symbol.toStringTag, Gn.ELEMENT_WIDTH = k.ELEMENT_WIDTH, Gn.INLINE_CAPACITY = k.INLINE_CAPACITY, Gn[bn] = ((e) => (e.ArrayType = Uint8Array, e[Symbol.toStringTag] = "Utf8View"))(Gn.prototype);
var Kn = class extends O {
	constructor() {
		super(E.LargeUtf8);
	}
	toString() {
		return "LargeUtf8";
	}
};
xn = Symbol.toStringTag, Kn[xn] = ((e) => (e.ArrayType = Uint8Array, e.OffsetArrayType = BigInt64Array, e[Symbol.toStringTag] = "LargeUtf8"))(Kn.prototype);
var qn = class extends O {
	constructor() {
		super(E.Bool);
	}
	toString() {
		return "Bool";
	}
};
Sn = Symbol.toStringTag, qn[Sn] = ((e) => (e.ArrayType = Uint8Array, e[Symbol.toStringTag] = "Bool"))(qn.prototype);
var Jn = class extends O {
	constructor(e, t, n = 128) {
		super(E.Decimal), this.scale = e, this.precision = t, this.bitWidth = n;
	}
	toString() {
		return `Decimal[${this.precision}e${this.scale > 0 ? "+" : ""}${this.scale}]`;
	}
};
Cn = Symbol.toStringTag, Jn[Cn] = ((e) => (e.scale = null, e.precision = null, e.ArrayType = Uint32Array, e[Symbol.toStringTag] = "Decimal"))(Jn.prototype);
var Yn = class extends O {
	constructor(e) {
		super(E.Date), this.unit = e;
	}
	toString() {
		return `Date${(this.unit + 1) * 32}<${it[this.unit]}>`;
	}
	get ArrayType() {
		return this.unit === it.DAY ? Int32Array : BigInt64Array;
	}
};
wn = Symbol.toStringTag, Yn[wn] = ((e) => (e.unit = null, e[Symbol.toStringTag] = "Date"))(Yn.prototype);
var Xn = class extends O {
	constructor(e, t) {
		super(E.Time), this.unit = e, this.bitWidth = t;
	}
	toString() {
		return `Time${this.bitWidth}<${v[this.unit]}>`;
	}
	get ArrayType() {
		switch (this.bitWidth) {
			case 32: return Int32Array;
			case 64: return BigInt64Array;
		}
		throw Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
	}
};
Tn = Symbol.toStringTag, Xn[Tn] = ((e) => (e.unit = null, e.bitWidth = null, e[Symbol.toStringTag] = "Time"))(Xn.prototype);
var Zn = class extends O {
	constructor(e, t) {
		super(E.Timestamp), this.unit = e, this.timezone = t;
	}
	toString() {
		return `Timestamp<${v[this.unit]}${this.timezone ? `, ${this.timezone}` : ""}>`;
	}
};
En = Symbol.toStringTag, Zn[En] = ((e) => (e.unit = null, e.timezone = null, e.ArrayType = BigInt64Array, e[Symbol.toStringTag] = "Timestamp"))(Zn.prototype);
var Qn = class extends O {
	constructor(e) {
		super(E.Interval), this.unit = e;
	}
	toString() {
		return `Interval<${y[this.unit]}>`;
	}
};
Dn = Symbol.toStringTag, Qn[Dn] = ((e) => (e.unit = null, e.ArrayType = Int32Array, e[Symbol.toStringTag] = "Interval"))(Qn.prototype);
var $n = class extends O {
	constructor(e) {
		super(E.Duration), this.unit = e;
	}
	toString() {
		return `Duration<${v[this.unit]}>`;
	}
};
On = Symbol.toStringTag, $n[On] = ((e) => (e.unit = null, e.ArrayType = BigInt64Array, e[Symbol.toStringTag] = "Duration"))($n.prototype);
var er = class extends O {
	constructor(e) {
		super(E.List), this.children = [e];
	}
	toString() {
		return `List<${this.valueType}>`;
	}
	get valueType() {
		return this.children[0].type;
	}
	get valueField() {
		return this.children[0];
	}
	get ArrayType() {
		return this.valueType.ArrayType;
	}
};
kn = Symbol.toStringTag, er[kn] = ((e) => (e.children = null, e[Symbol.toStringTag] = "List"))(er.prototype);
var tr = class extends O {
	constructor(e) {
		super(E.LargeList), this.children = [e];
	}
	toString() {
		return `LargeList<${this.valueType}>`;
	}
	get valueType() {
		return this.children[0].type;
	}
	get valueField() {
		return this.children[0];
	}
	get ArrayType() {
		return this.valueType.ArrayType;
	}
};
An = Symbol.toStringTag, tr[An] = ((e) => (e.children = null, e.OffsetArrayType = BigInt64Array, e[Symbol.toStringTag] = "LargeList"))(tr.prototype);
var A = class extends O {
	constructor(e) {
		super(E.Struct), this.children = e;
	}
	toString() {
		return `Struct<{${this.children.map((e) => `${e.name}:${e.type}`).join(", ")}}>`;
	}
};
jn = Symbol.toStringTag, A[jn] = ((e) => (e.children = null, e[Symbol.toStringTag] = "Struct"))(A.prototype);
var nr = class extends O {
	constructor(e, t, n) {
		super(E.Union), this.mode = e, this.children = n, this.typeIds = t = Int32Array.from(t), this.typeIdToChildIndex = t.reduce((e, t, n) => (e[t] = n) && e || e, /* @__PURE__ */ Object.create(null));
	}
	toString() {
		return `${this[Symbol.toStringTag]}<${this.children.map((e) => `${e.type}`).join(" | ")}>`;
	}
};
Mn = Symbol.toStringTag, nr[Mn] = ((e) => (e.mode = null, e.typeIds = null, e.children = null, e.typeIdToChildIndex = null, e.ArrayType = Int8Array, e[Symbol.toStringTag] = "Union"))(nr.prototype);
var rr = class extends O {
	constructor(e) {
		super(E.FixedSizeBinary), this.byteWidth = e;
	}
	toString() {
		return `FixedSizeBinary[${this.byteWidth}]`;
	}
};
Nn = Symbol.toStringTag, rr[Nn] = ((e) => (e.byteWidth = null, e.ArrayType = Uint8Array, e[Symbol.toStringTag] = "FixedSizeBinary"))(rr.prototype);
var ir = class extends O {
	constructor(e, t) {
		super(E.FixedSizeList), this.listSize = e, this.children = [t];
	}
	get valueType() {
		return this.children[0].type;
	}
	get valueField() {
		return this.children[0];
	}
	get ArrayType() {
		return this.valueType.ArrayType;
	}
	toString() {
		return `FixedSizeList[${this.listSize}]<${this.valueType}>`;
	}
};
Pn = Symbol.toStringTag, ir[Pn] = ((e) => (e.children = null, e.listSize = null, e[Symbol.toStringTag] = "FixedSizeList"))(ir.prototype);
var ar = class extends O {
	constructor(e, t = !1) {
		var n;
		if (super(E.Map), this.children = [e], this.keysSorted = t, e && (e.name = "entries", (n = e?.type) != null && n.children)) {
			let t = (e?.type)?.children[0];
			t && (t.name = "key");
			let n = (e?.type)?.children[1];
			n && (n.name = "value");
		}
	}
	get keyType() {
		return this.children[0].type.children[0].type;
	}
	get valueType() {
		return this.children[0].type.children[1].type;
	}
	get childType() {
		return this.children[0].type;
	}
	toString() {
		return `Map<{${this.children[0].type.children.map((e) => `${e.name}:${e.type}`).join(", ")}}>`;
	}
};
Fn = Symbol.toStringTag, ar[Fn] = ((e) => (e.children = null, e.keysSorted = null, e[Symbol.toStringTag] = "Map_"))(ar.prototype);
var or = /* @__PURE__ */ ((e) => () => ++e)(-1), sr = class extends O {
	constructor(e, t, n, r) {
		super(E.Dictionary), this.indices = t, this.dictionary = e, this.isOrdered = r || !1, this.id = n == null ? or() : D(n);
	}
	get children() {
		return this.dictionary.children;
	}
	get valueType() {
		return this.dictionary;
	}
	get ArrayType() {
		return this.dictionary.ArrayType;
	}
	toString() {
		return `Dictionary<${this.indices}, ${this.dictionary}>`;
	}
};
In = Symbol.toStringTag, sr[In] = ((e) => (e.id = null, e.indices = null, e.isOrdered = null, e.dictionary = null, e[Symbol.toStringTag] = "Dictionary"))(sr.prototype);
function cr(e) {
	let t = e;
	switch (e.typeId) {
		case E.Decimal: return e.bitWidth / 32;
		case E.Interval: return t.unit === y.MONTH_DAY_NANO ? 4 : 1 + t.unit;
		case E.BinaryView:
		case E.Utf8View: return 16;
		case E.FixedSizeList: return t.listSize;
		case E.FixedSizeBinary: return t.byteWidth;
		default: return 1;
	}
}
var j = class {
	visitMany(e, ...t) {
		return e.map((e, n) => this.visit(e, ...t.map((e) => e[n])));
	}
	visit(...e) {
		return this.getVisitFn(e[0], !1).apply(this, e);
	}
	getVisitFn(e, t = !0) {
		return lr(this, e, t);
	}
	getVisitFnByTypeId(e, t = !0) {
		return ur(this, e, t);
	}
	visitNull(e, ...t) {
		return null;
	}
	visitBool(e, ...t) {
		return null;
	}
	visitInt(e, ...t) {
		return null;
	}
	visitFloat(e, ...t) {
		return null;
	}
	visitUtf8(e, ...t) {
		return null;
	}
	visitLargeUtf8(e, ...t) {
		return null;
	}
	visitUtf8View(e, ...t) {
		return null;
	}
	visitBinary(e, ...t) {
		return null;
	}
	visitLargeBinary(e, ...t) {
		return null;
	}
	visitBinaryView(e, ...t) {
		return null;
	}
	visitFixedSizeBinary(e, ...t) {
		return null;
	}
	visitDate(e, ...t) {
		return null;
	}
	visitTimestamp(e, ...t) {
		return null;
	}
	visitTime(e, ...t) {
		return null;
	}
	visitDecimal(e, ...t) {
		return null;
	}
	visitList(e, ...t) {
		return null;
	}
	visitLargeList(e, ...t) {
		return null;
	}
	visitStruct(e, ...t) {
		return null;
	}
	visitUnion(e, ...t) {
		return null;
	}
	visitDictionary(e, ...t) {
		return null;
	}
	visitInterval(e, ...t) {
		return null;
	}
	visitDuration(e, ...t) {
		return null;
	}
	visitFixedSizeList(e, ...t) {
		return null;
	}
	visitMap(e, ...t) {
		return null;
	}
};
function lr(e, t, n = !0) {
	return typeof t == "number" ? ur(e, t, n) : typeof t == "string" && t in E ? ur(e, E[t], n) : t && t instanceof O ? ur(e, dr(t), n) : t?.type && t.type instanceof O ? ur(e, dr(t.type), n) : ur(e, E.NONE, n);
}
function ur(e, t, n = !0) {
	let r = null;
	switch (t) {
		case E.Null:
			r = e.visitNull;
			break;
		case E.Bool:
			r = e.visitBool;
			break;
		case E.Int:
			r = e.visitInt;
			break;
		case E.Int8:
			r = e.visitInt8 || e.visitInt;
			break;
		case E.Int16:
			r = e.visitInt16 || e.visitInt;
			break;
		case E.Int32:
			r = e.visitInt32 || e.visitInt;
			break;
		case E.Int64:
			r = e.visitInt64 || e.visitInt;
			break;
		case E.Uint8:
			r = e.visitUint8 || e.visitInt;
			break;
		case E.Uint16:
			r = e.visitUint16 || e.visitInt;
			break;
		case E.Uint32:
			r = e.visitUint32 || e.visitInt;
			break;
		case E.Uint64:
			r = e.visitUint64 || e.visitInt;
			break;
		case E.Float:
			r = e.visitFloat;
			break;
		case E.Float16:
			r = e.visitFloat16 || e.visitFloat;
			break;
		case E.Float32:
			r = e.visitFloat32 || e.visitFloat;
			break;
		case E.Float64:
			r = e.visitFloat64 || e.visitFloat;
			break;
		case E.Utf8:
			r = e.visitUtf8;
			break;
		case E.LargeUtf8:
			r = e.visitLargeUtf8;
			break;
		case E.Utf8View:
			r = e.visitUtf8View || e.visitUtf8;
			break;
		case E.Binary:
			r = e.visitBinary;
			break;
		case E.LargeBinary:
			r = e.visitLargeBinary;
			break;
		case E.BinaryView:
			r = e.visitBinaryView || e.visitBinary;
			break;
		case E.FixedSizeBinary:
			r = e.visitFixedSizeBinary;
			break;
		case E.Date:
			r = e.visitDate;
			break;
		case E.DateDay:
			r = e.visitDateDay || e.visitDate;
			break;
		case E.DateMillisecond:
			r = e.visitDateMillisecond || e.visitDate;
			break;
		case E.Timestamp:
			r = e.visitTimestamp;
			break;
		case E.TimestampSecond:
			r = e.visitTimestampSecond || e.visitTimestamp;
			break;
		case E.TimestampMillisecond:
			r = e.visitTimestampMillisecond || e.visitTimestamp;
			break;
		case E.TimestampMicrosecond:
			r = e.visitTimestampMicrosecond || e.visitTimestamp;
			break;
		case E.TimestampNanosecond:
			r = e.visitTimestampNanosecond || e.visitTimestamp;
			break;
		case E.Time:
			r = e.visitTime;
			break;
		case E.TimeSecond:
			r = e.visitTimeSecond || e.visitTime;
			break;
		case E.TimeMillisecond:
			r = e.visitTimeMillisecond || e.visitTime;
			break;
		case E.TimeMicrosecond:
			r = e.visitTimeMicrosecond || e.visitTime;
			break;
		case E.TimeNanosecond:
			r = e.visitTimeNanosecond || e.visitTime;
			break;
		case E.Decimal:
			r = e.visitDecimal;
			break;
		case E.List:
			r = e.visitList;
			break;
		case E.LargeList:
			r = e.visitLargeList;
			break;
		case E.Struct:
			r = e.visitStruct;
			break;
		case E.Union:
			r = e.visitUnion;
			break;
		case E.DenseUnion:
			r = e.visitDenseUnion || e.visitUnion;
			break;
		case E.SparseUnion:
			r = e.visitSparseUnion || e.visitUnion;
			break;
		case E.Dictionary:
			r = e.visitDictionary;
			break;
		case E.Interval:
			r = e.visitInterval;
			break;
		case E.IntervalDayTime:
			r = e.visitIntervalDayTime || e.visitInterval;
			break;
		case E.IntervalYearMonth:
			r = e.visitIntervalYearMonth || e.visitInterval;
			break;
		case E.IntervalMonthDayNano:
			r = e.visitIntervalMonthDayNano || e.visitInterval;
			break;
		case E.Duration:
			r = e.visitDuration;
			break;
		case E.DurationSecond:
			r = e.visitDurationSecond || e.visitDuration;
			break;
		case E.DurationMillisecond:
			r = e.visitDurationMillisecond || e.visitDuration;
			break;
		case E.DurationMicrosecond:
			r = e.visitDurationMicrosecond || e.visitDuration;
			break;
		case E.DurationNanosecond:
			r = e.visitDurationNanosecond || e.visitDuration;
			break;
		case E.FixedSizeList:
			r = e.visitFixedSizeList;
			break;
		case E.Map: r = e.visitMap;
	}
	if (typeof r == "function") return r;
	if (!n) return () => null;
	throw Error(`Unrecognized type '${E[t]}'`);
}
function dr(e) {
	switch (e.typeId) {
		case E.Null: return E.Null;
		case E.Int: {
			let { bitWidth: t, isSigned: n } = e;
			switch (t) {
				case 8: return n ? E.Int8 : E.Uint8;
				case 16: return n ? E.Int16 : E.Uint16;
				case 32: return n ? E.Int32 : E.Uint32;
				case 64: return n ? E.Int64 : E.Uint64;
			}
			return E.Int;
		}
		case E.Float:
			switch (e.precision) {
				case _.HALF: return E.Float16;
				case _.SINGLE: return E.Float32;
				case _.DOUBLE: return E.Float64;
			}
			return E.Float;
		case E.Binary: return E.Binary;
		case E.LargeBinary: return E.LargeBinary;
		case E.BinaryView: return E.BinaryView;
		case E.Utf8: return E.Utf8;
		case E.LargeUtf8: return E.LargeUtf8;
		case E.Utf8View: return E.Utf8View;
		case E.Bool: return E.Bool;
		case E.Decimal: return E.Decimal;
		case E.Time:
			switch (e.unit) {
				case v.SECOND: return E.TimeSecond;
				case v.MILLISECOND: return E.TimeMillisecond;
				case v.MICROSECOND: return E.TimeMicrosecond;
				case v.NANOSECOND: return E.TimeNanosecond;
			}
			return E.Time;
		case E.Timestamp:
			switch (e.unit) {
				case v.SECOND: return E.TimestampSecond;
				case v.MILLISECOND: return E.TimestampMillisecond;
				case v.MICROSECOND: return E.TimestampMicrosecond;
				case v.NANOSECOND: return E.TimestampNanosecond;
			}
			return E.Timestamp;
		case E.Date:
			switch (e.unit) {
				case it.DAY: return E.DateDay;
				case it.MILLISECOND: return E.DateMillisecond;
			}
			return E.Date;
		case E.Interval:
			switch (e.unit) {
				case y.DAY_TIME: return E.IntervalDayTime;
				case y.YEAR_MONTH: return E.IntervalYearMonth;
				case y.MONTH_DAY_NANO: return E.IntervalMonthDayNano;
			}
			return E.Interval;
		case E.Duration:
			switch (e.unit) {
				case v.SECOND: return E.DurationSecond;
				case v.MILLISECOND: return E.DurationMillisecond;
				case v.MICROSECOND: return E.DurationMicrosecond;
				case v.NANOSECOND: return E.DurationNanosecond;
			}
			return E.Duration;
		case E.Map: return E.Map;
		case E.List: return E.List;
		case E.LargeList: return E.LargeList;
		case E.Struct: return E.Struct;
		case E.Union:
			switch (e.mode) {
				case g.Dense: return E.DenseUnion;
				case g.Sparse: return E.SparseUnion;
			}
			return E.Union;
		case E.FixedSizeBinary: return E.FixedSizeBinary;
		case E.FixedSizeList: return E.FixedSizeList;
		case E.Dictionary: return E.Dictionary;
	}
	throw Error(`Unrecognized type '${E[e.typeId]}'`);
}
j.prototype.visitInt8 = null, j.prototype.visitInt16 = null, j.prototype.visitInt32 = null, j.prototype.visitInt64 = null, j.prototype.visitUint8 = null, j.prototype.visitUint16 = null, j.prototype.visitUint32 = null, j.prototype.visitUint64 = null, j.prototype.visitFloat16 = null, j.prototype.visitFloat32 = null, j.prototype.visitFloat64 = null, j.prototype.visitDateDay = null, j.prototype.visitDateMillisecond = null, j.prototype.visitTimestampSecond = null, j.prototype.visitTimestampMillisecond = null, j.prototype.visitTimestampMicrosecond = null, j.prototype.visitTimestampNanosecond = null, j.prototype.visitTimeSecond = null, j.prototype.visitTimeMillisecond = null, j.prototype.visitTimeMicrosecond = null, j.prototype.visitTimeNanosecond = null, j.prototype.visitDenseUnion = null, j.prototype.visitSparseUnion = null, j.prototype.visitIntervalDayTime = null, j.prototype.visitIntervalYearMonth = null, j.prototype.visitIntervalMonthDayNano = null, j.prototype.visitDuration = null, j.prototype.visitDurationSecond = null, j.prototype.visitDurationMillisecond = null, j.prototype.visitDurationMicrosecond = null, j.prototype.visitDurationNanosecond = null;
var fr = /* @__PURE__ */ new Float64Array(1), pr = new Uint32Array(fr.buffer);
function mr(e) {
	let t = (e & 31744) >> 10, n = (e & 1023) / 1024, r = (-1) ** ((e & 32768) >> 15);
	switch (t) {
		case 31: return r * (n ? NaN : 1 / 0);
		case 0: return r * (n ? 6103515625e-14 * n : 0);
	}
	return r * 2 ** (t - 15) * (1 + n);
}
function hr(e) {
	if (e !== e) return 32256;
	fr[0] = e;
	let t = (pr[1] & 2147483648) >> 16 & 65535, n = pr[1] & 2146435072, r = 0;
	return n >= 1089470464 ? pr[0] > 0 ? n = 31744 : (n = (n & 2080374784) >> 16, r = (pr[1] & 1048575) >> 10) : n <= 1056964608 ? (r = 1048576 + (pr[1] & 1048575), r = 1048576 + (r << (n >> 20) - 998) >> 21, n = 0) : (n = n - 1056964608 >> 10, r = (pr[1] & 1048575) + 512 >> 10), t | n | r & 65535;
}
var gr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	float64ToUint16: hr,
	uint16ToFloat64: mr
}, Symbol.toStringTag, { value: "Module" })), M = class extends j {};
function N(e) {
	return (t, n, r) => {
		if (t.setValid(n, r != null)) return e(t, n, r);
	};
}
var _r = (e, t, n) => {
	e[t] = Math.floor(n / 864e5);
}, vr = (e, t, n, r) => {
	if (n + 1 < t.length) {
		let i = D(t[n]), a = D(t[n + 1]);
		e.set(r.subarray(0, a - i), i);
	}
}, yr = ({ offset: e, values: t }, n, r) => {
	let i = e + n;
	r ? t[i >> 3] |= 1 << i % 8 : t[i >> 3] &= ~(1 << i % 8);
}, br = ({ values: e }, t, n) => {
	e[t] = n;
}, xr = ({ values: e }, t, n) => {
	e[t] = n;
}, Sr = ({ values: e }, t, n) => {
	e[t] = hr(n);
}, Cr = (e, t, n) => {
	switch (e.type.precision) {
		case _.HALF: return Sr(e, t, n);
		case _.SINGLE:
		case _.DOUBLE: return xr(e, t, n);
	}
}, wr = ({ values: e }, t, n) => {
	_r(e, t, n.valueOf());
}, Tr = ({ values: e }, t, n) => {
	e[t] = BigInt(n);
}, Er = ({ stride: e, values: t }, n, r) => {
	t.set(r.subarray(0, e), e * n);
}, Dr = ({ values: e, valueOffsets: t }, n, r) => vr(e, t, n, r), Or = (e) => {
	let t = e.variadicBuffers;
	return (!Array.isArray(t) || Object.isFrozen(t)) && (t = Array.from(t), e.variadicBuffers = t), t;
}, kr = (e, t, n) => {
	let r = e.values;
	if (!r) throw Error("BinaryView data is missing view buffer");
	let i = k.ELEMENT_WIDTH, a = t * i, o = a + i;
	if (a < 0 || o > r.length) throw RangeError(`BinaryView index ${t} out of bounds`);
	r.fill(0, a, o);
	let s = new DataView(r.buffer, r.byteOffset + a, i), c = n.length;
	if (s.setInt32(k.LENGTH_OFFSET, c, !0), c <= k.INLINE_CAPACITY) {
		r.set(n, a + k.INLINE_OFFSET);
		return;
	}
	let l = (n[0] ?? 0) | (n[1] ?? 0) << 8 | (n[2] ?? 0) << 16 | (n[3] ?? 0) << 24;
	s.setUint32(k.INLINE_OFFSET, l >>> 0, !0);
	let u = Or(e), ee = n.slice(), d = u.push(ee) - 1;
	s.setInt32(k.BUFFER_INDEX_OFFSET, d, !0), s.setInt32(k.BUFFER_OFFSET_OFFSET, 0, !0);
}, Ar = (e, t, n) => {
	kr(e, t, n instanceof Uint8Array ? n : new Uint8Array(n));
}, jr = ({ values: e, valueOffsets: t }, n, r) => vr(e, t, n, l(r)), Mr = (e, t, n) => {
	kr(e, t, l(n));
}, Nr = (e, t, n) => {
	e.type.unit === it.DAY ? wr(e, t, n) : Tr(e, t, n);
}, Pr = ({ values: e }, t, n) => {
	e[t] = BigInt(n / 1e3);
}, Fr = ({ values: e }, t, n) => {
	e[t] = BigInt(n);
}, Ir = ({ values: e }, t, n) => {
	e[t] = BigInt(n * 1e3);
}, Lr = ({ values: e }, t, n) => {
	e[t] = BigInt(n * 1e6);
}, Rr = (e, t, n) => {
	switch (e.type.unit) {
		case v.SECOND: return Pr(e, t, n);
		case v.MILLISECOND: return Fr(e, t, n);
		case v.MICROSECOND: return Ir(e, t, n);
		case v.NANOSECOND: return Lr(e, t, n);
	}
}, zr = ({ values: e }, t, n) => {
	e[t] = n;
}, Br = ({ values: e }, t, n) => {
	e[t] = n;
}, Vr = ({ values: e }, t, n) => {
	e[t] = n;
}, Hr = ({ values: e }, t, n) => {
	e[t] = n;
}, Ur = (e, t, n) => {
	switch (e.type.unit) {
		case v.SECOND: return zr(e, t, n);
		case v.MILLISECOND: return Br(e, t, n);
		case v.MICROSECOND: return Vr(e, t, n);
		case v.NANOSECOND: return Hr(e, t, n);
	}
}, Wr = ({ values: e, stride: t }, n, r) => {
	e.set(r.subarray(0, t), t * n);
}, Gr = (e, t, n) => {
	let r = e.children[0], i = e.valueOffsets, a = P.getVisitFn(r), o = D(i[t]), s = D(i[t + 1]);
	if (Array.isArray(n)) for (let e = -1, t = o; t < s;) a(r, t++, n[++e]);
	else for (let e = -1, t = o; t < s;) a(r, t++, n.get(++e));
}, Kr = (e, t, n) => {
	let r = e.children[0], { valueOffsets: i } = e, a = P.getVisitFn(r), { [t]: o, [t + 1]: s } = i, c = n instanceof Map ? n.entries() : Object.entries(n);
	for (let e of c) if (a(r, o, e), ++o >= s) break;
}, qr = (e, t) => (n, r, i, a) => r && n(r, e, t[a]), Jr = (e, t) => (n, r, i, a) => r && n(r, e, t.get(a)), Yr = (e, t) => (n, r, i, a) => r && n(r, e, t.get(i.name)), Xr = (e, t) => (n, r, i, a) => r && n(r, e, t[i.name]), Zr = (e, t, n) => {
	let r = e.type.children.map((e) => P.getVisitFn(e.type)), i = n instanceof Map ? Yr(t, n) : n instanceof W ? Jr(t, n) : Array.isArray(n) ? qr(t, n) : Xr(t, n);
	e.type.children.forEach((t, n) => i(r[n], e.children[n], t, n));
}, Qr = (e, t, n) => {
	e.type.mode === g.Dense ? $r(e, t, n) : ei(e, t, n);
}, $r = (e, t, n) => {
	let r = e.type.typeIdToChildIndex[e.typeIds[t]], i = e.children[r];
	P.visit(i, e.valueOffsets[t], n);
}, ei = (e, t, n) => {
	let r = e.type.typeIdToChildIndex[e.typeIds[t]], i = e.children[r];
	P.visit(i, t, n);
}, ti = (e, t, n) => {
	var r;
	(r = e.dictionary) == null || r.set(e.values[t], n);
}, ni = (e, t, n) => {
	switch (e.type.unit) {
		case y.YEAR_MONTH: return ii(e, t, n);
		case y.DAY_TIME: return ri(e, t, n);
		case y.MONTH_DAY_NANO: return ai(e, t, n);
	}
}, ri = ({ values: e }, t, n) => {
	e.set(n.subarray(0, 2), 2 * t);
}, ii = ({ values: e }, t, n) => {
	e[t] = n[0] * 12 + n[1] % 12;
}, ai = ({ values: e, stride: t }, n, r) => {
	e.set(r.subarray(0, t), t * n);
}, oi = ({ values: e }, t, n) => {
	e[t] = n;
}, si = ({ values: e }, t, n) => {
	e[t] = n;
}, ci = ({ values: e }, t, n) => {
	e[t] = n;
}, li = ({ values: e }, t, n) => {
	e[t] = n;
}, ui = (e, t, n) => {
	switch (e.type.unit) {
		case v.SECOND: return oi(e, t, n);
		case v.MILLISECOND: return si(e, t, n);
		case v.MICROSECOND: return ci(e, t, n);
		case v.NANOSECOND: return li(e, t, n);
	}
}, di = (e, t, n) => {
	let { stride: r } = e, i = e.children[0], a = P.getVisitFn(i);
	if (Array.isArray(n)) for (let e = -1, o = t * r; ++e < r;) a(i, o + e, n[e]);
	else for (let e = -1, o = t * r; ++e < r;) a(i, o + e, n.get(e));
};
M.prototype.visitBool = N(yr), M.prototype.visitInt = N(br), M.prototype.visitInt8 = N(br), M.prototype.visitInt16 = N(br), M.prototype.visitInt32 = N(br), M.prototype.visitInt64 = N(br), M.prototype.visitUint8 = N(br), M.prototype.visitUint16 = N(br), M.prototype.visitUint32 = N(br), M.prototype.visitUint64 = N(br), M.prototype.visitFloat = N(Cr), M.prototype.visitFloat16 = N(Sr), M.prototype.visitFloat32 = N(xr), M.prototype.visitFloat64 = N(xr), M.prototype.visitUtf8 = N(jr), M.prototype.visitLargeUtf8 = N(jr), M.prototype.visitUtf8View = N(Mr), M.prototype.visitBinary = N(Dr), M.prototype.visitLargeBinary = N(Dr), M.prototype.visitBinaryView = N(Ar), M.prototype.visitFixedSizeBinary = N(Er), M.prototype.visitDate = N(Nr), M.prototype.visitDateDay = N(wr), M.prototype.visitDateMillisecond = N(Tr), M.prototype.visitTimestamp = N(Rr), M.prototype.visitTimestampSecond = N(Pr), M.prototype.visitTimestampMillisecond = N(Fr), M.prototype.visitTimestampMicrosecond = N(Ir), M.prototype.visitTimestampNanosecond = N(Lr), M.prototype.visitTime = N(Ur), M.prototype.visitTimeSecond = N(zr), M.prototype.visitTimeMillisecond = N(Br), M.prototype.visitTimeMicrosecond = N(Vr), M.prototype.visitTimeNanosecond = N(Hr), M.prototype.visitDecimal = N(Wr), M.prototype.visitList = N(Gr), M.prototype.visitLargeList = N(Gr), M.prototype.visitStruct = N(Zr), M.prototype.visitUnion = N(Qr), M.prototype.visitDenseUnion = N($r), M.prototype.visitSparseUnion = N(ei), M.prototype.visitDictionary = N(ti), M.prototype.visitInterval = N(ni), M.prototype.visitIntervalDayTime = N(ri), M.prototype.visitIntervalYearMonth = N(ii), M.prototype.visitIntervalMonthDayNano = N(ai), M.prototype.visitDuration = N(ui), M.prototype.visitDurationSecond = N(oi), M.prototype.visitDurationMillisecond = N(si), M.prototype.visitDurationMicrosecond = N(ci), M.prototype.visitDurationNanosecond = N(li), M.prototype.visitFixedSizeList = N(di), M.prototype.visitMap = N(Kr);
var P = new M(), fi = /* @__PURE__ */ Symbol.for("parent"), pi = /* @__PURE__ */ Symbol.for("rowIndex"), mi = class {
	constructor(e, t) {
		return this[fi] = e, this[pi] = t, new Proxy(this, gi);
	}
	toArray() {
		return Object.values(this.toJSON());
	}
	toJSON() {
		let e = this[pi], t = this[fi], n = t.type.children, r = {};
		for (let i = -1, a = n.length; ++i < a;) r[n[i].name] = L.visit(t.children[i], e);
		return r;
	}
	toString() {
		return `{${[...this].map(([e, t]) => `${Xt(e)}: ${Xt(t)}`).join(", ")}}`;
	}
	[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
		return this.toString();
	}
	[Symbol.iterator]() {
		return new hi(this[fi], this[pi]);
	}
}, hi = class {
	constructor(e, t) {
		this.childIndex = 0, this.children = e.children, this.rowIndex = t, this.childFields = e.type.children, this.numChildren = this.childFields.length;
	}
	[Symbol.iterator]() {
		return this;
	}
	next() {
		let e = this.childIndex;
		return e < this.numChildren ? (this.childIndex = e + 1, {
			done: !1,
			value: [this.childFields[e].name, L.visit(this.children[e], this.rowIndex)]
		}) : {
			done: !0,
			value: null
		};
	}
};
Object.defineProperties(mi.prototype, {
	[Symbol.toStringTag]: {
		enumerable: !1,
		configurable: !1,
		value: "Row"
	},
	[fi]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: null
	},
	[pi]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: -1
	}
});
var gi = new class {
	isExtensible() {
		return !1;
	}
	deleteProperty() {
		return !1;
	}
	preventExtensions() {
		return !0;
	}
	ownKeys(e) {
		return e[fi].type.children.map((e) => e.name);
	}
	has(e, t) {
		return e[fi].type.children.some((e) => e.name === t);
	}
	getOwnPropertyDescriptor(e, t) {
		if (e[fi].type.children.some((e) => e.name === t)) return {
			writable: !0,
			enumerable: !0,
			configurable: !0
		};
	}
	get(e, t) {
		if (Reflect.has(e, t)) return e[t];
		let n = e[fi].type.children.findIndex((e) => e.name === t);
		if (n !== -1) {
			let r = L.visit(e[fi].children[n], e[pi]);
			return Reflect.set(e, t, r), r;
		}
	}
	set(e, t, n) {
		let r = e[fi].type.children.findIndex((e) => e.name === t);
		return r === -1 ? Reflect.has(e, t) || typeof t == "symbol" ? Reflect.set(e, t, n) : !1 : (P.visit(e[fi].children[r], e[pi], n), Reflect.set(e, t, n));
	}
}(), F = class extends j {};
function I(e) {
	return (t, n) => t.getValid(n) ? e(t, n) : null;
}
var _i = (e, t) => 864e5 * e[t], vi = 16, yi = 12, bi = (e, t) => null, xi = (e, t, n) => {
	if (n + 1 >= t.length) return null;
	let r = D(t[n]), i = D(t[n + 1]);
	return e.subarray(r, i);
}, Si = ({ offset: e, values: t }, n) => {
	let r = e + n;
	return !!(t[r >> 3] & 1 << r % 8);
}, Ci = ({ values: e }, t) => _i(e, t), wi = ({ values: e }, t) => D(e[t]), Ti = ({ stride: e, values: t }, n) => t[e * n], Ei = ({ stride: e, values: t }, n) => mr(t[e * n]), Di = ({ values: e }, t) => e[t], Oi = ({ stride: e, values: t }, n) => t.subarray(e * n, e * (n + 1)), ki = ({ values: e, valueOffsets: t }, n) => xi(e, t, n), Ai = (e, t) => {
	let n = e.values;
	if (!n) throw Error("BinaryView data is missing view buffer");
	let r = t * vi, i = r + vi;
	if (r < 0 || i > n.length) throw Error(`BinaryView data buffer is too short: expected ${vi} bytes, got ${Math.max(0, n.length - r)}`);
	let a = n.subarray(r, i);
	if (a.length < vi) throw Error(`BinaryView data buffer is too short: expected ${vi} bytes, got ${a.length}`);
	let o = new DataView(n.buffer, a.byteOffset, vi), s = o.getInt32(0, !0);
	if (s <= 0) return /* @__PURE__ */ new Uint8Array();
	if (s <= yi) return a.subarray(4, 4 + s);
	let c = o.getInt32(8, !0), l = o.getInt32(12, !0), u = e.variadicBuffers?.[c];
	if (!u) throw Error(`BinaryView variadic buffer ${c} is missing`);
	return u.subarray(l, l + s);
}, ji = (e, t) => Ai(e, t), Mi = ({ values: e, valueOffsets: t }, n) => {
	let r = xi(e, t, n);
	return r === null ? null : s(r);
}, Ni = (e, t) => s(Ai(e, t)), Pi = ({ values: e }, t) => e[t], Fi = ({ type: e, values: t }, n) => e.precision === _.HALF ? mr(t[n]) : t[n], Ii = (e, t) => e.type.unit === it.DAY ? Ci(e, t) : wi(e, t), Li = ({ values: e }, t) => 1e3 * D(e[t]), Ri = ({ values: e }, t) => D(e[t]), zi = ({ values: e }, t) => Qt(e[t], BigInt(1e3)), Bi = ({ values: e }, t) => Qt(e[t], BigInt(1e6)), Vi = (e, t) => {
	switch (e.type.unit) {
		case v.SECOND: return Li(e, t);
		case v.MILLISECOND: return Ri(e, t);
		case v.MICROSECOND: return zi(e, t);
		case v.NANOSECOND: return Bi(e, t);
	}
}, Hi = ({ values: e }, t) => e[t], Ui = ({ values: e }, t) => e[t], Wi = ({ values: e }, t) => e[t], Gi = ({ values: e }, t) => e[t], Ki = (e, t) => {
	switch (e.type.unit) {
		case v.SECOND: return Hi(e, t);
		case v.MILLISECOND: return Ui(e, t);
		case v.MICROSECOND: return Wi(e, t);
		case v.NANOSECOND: return Gi(e, t);
	}
}, qi = ({ values: e, stride: t }, n) => un.decimal(e.subarray(t * n, t * (n + 1))), Ji = (e, t) => {
	let { valueOffsets: n, stride: r, children: i } = e, a = D(n[t * r]), o = D(n[t * r + 1]);
	return new W([i[0].slice(a, o - a)]);
}, Yi = (e, t) => {
	let { valueOffsets: n, children: r } = e, { [t]: i, [t + 1]: a } = n, o = r[0];
	return new ha(o.slice(i, a - i));
}, Xi = (e, t) => new mi(e, t), Zi = (e, t) => e.type.mode === g.Dense ? Qi(e, t) : $i(e, t), Qi = (e, t) => {
	let n = e.type.typeIdToChildIndex[e.typeIds[t]], r = e.children[n];
	return L.visit(r, e.valueOffsets[t]);
}, $i = (e, t) => {
	let n = e.type.typeIdToChildIndex[e.typeIds[t]], r = e.children[n];
	return L.visit(r, t);
}, ea = (e, t) => e.dictionary?.get(e.values[t]), ta = (e, t) => e.type.unit === y.MONTH_DAY_NANO ? ia(e, t) : e.type.unit === y.DAY_TIME ? na(e, t) : ra(e, t), na = ({ values: e }, t) => e.subarray(2 * t, 2 * (t + 1)), ra = ({ values: e }, t) => {
	let n = e[t], r = /* @__PURE__ */ new Int32Array(2);
	return r[0] = Math.trunc(n / 12), r[1] = Math.trunc(n % 12), r;
}, ia = ({ values: e }, t) => e.subarray(4 * t, 4 * (t + 1)), aa = ({ values: e }, t) => e[t], oa = ({ values: e }, t) => e[t], sa = ({ values: e }, t) => e[t], ca = ({ values: e }, t) => e[t], la = (e, t) => {
	switch (e.type.unit) {
		case v.SECOND: return aa(e, t);
		case v.MILLISECOND: return oa(e, t);
		case v.MICROSECOND: return sa(e, t);
		case v.NANOSECOND: return ca(e, t);
	}
}, ua = (e, t) => {
	let { stride: n, children: r } = e;
	return new W([r[0].slice(t * n, n)]);
};
F.prototype.visitNull = I(bi), F.prototype.visitBool = I(Si), F.prototype.visitInt = I(Pi), F.prototype.visitInt8 = I(Ti), F.prototype.visitInt16 = I(Ti), F.prototype.visitInt32 = I(Ti), F.prototype.visitInt64 = I(Di), F.prototype.visitUint8 = I(Ti), F.prototype.visitUint16 = I(Ti), F.prototype.visitUint32 = I(Ti), F.prototype.visitUint64 = I(Di), F.prototype.visitFloat = I(Fi), F.prototype.visitFloat16 = I(Ei), F.prototype.visitFloat32 = I(Ti), F.prototype.visitFloat64 = I(Ti), F.prototype.visitUtf8 = I(Mi), F.prototype.visitLargeUtf8 = I(Mi), F.prototype.visitUtf8View = I(Ni), F.prototype.visitBinary = I(ki), F.prototype.visitLargeBinary = I(ki), F.prototype.visitBinaryView = I(ji), F.prototype.visitFixedSizeBinary = I(Oi), F.prototype.visitDate = I(Ii), F.prototype.visitDateDay = I(Ci), F.prototype.visitDateMillisecond = I(wi), F.prototype.visitTimestamp = I(Vi), F.prototype.visitTimestampSecond = I(Li), F.prototype.visitTimestampMillisecond = I(Ri), F.prototype.visitTimestampMicrosecond = I(zi), F.prototype.visitTimestampNanosecond = I(Bi), F.prototype.visitTime = I(Ki), F.prototype.visitTimeSecond = I(Hi), F.prototype.visitTimeMillisecond = I(Ui), F.prototype.visitTimeMicrosecond = I(Wi), F.prototype.visitTimeNanosecond = I(Gi), F.prototype.visitDecimal = I(qi), F.prototype.visitList = I(Ji), F.prototype.visitLargeList = I(Ji), F.prototype.visitStruct = I(Xi), F.prototype.visitUnion = I(Zi), F.prototype.visitDenseUnion = I(Qi), F.prototype.visitSparseUnion = I($i), F.prototype.visitDictionary = I(ea), F.prototype.visitInterval = I(ta), F.prototype.visitIntervalDayTime = I(na), F.prototype.visitIntervalYearMonth = I(ra), F.prototype.visitIntervalMonthDayNano = I(ia), F.prototype.visitDuration = I(la), F.prototype.visitDurationSecond = I(aa), F.prototype.visitDurationMillisecond = I(oa), F.prototype.visitDurationMicrosecond = I(sa), F.prototype.visitDurationNanosecond = I(ca), F.prototype.visitFixedSizeList = I(ua), F.prototype.visitMap = I(Yi);
var L = new F(), da = /* @__PURE__ */ Symbol.for("keys"), fa = /* @__PURE__ */ Symbol.for("vals"), pa = /* @__PURE__ */ Symbol.for("kKeysAsStrings"), ma = /* @__PURE__ */ Symbol.for("_kKeysAsStrings"), ha = class {
	constructor(e) {
		return this[da] = new W([e.children[0]]).memoize(), this[fa] = e.children[1], new Proxy(this, new _a());
	}
	get [pa]() {
		return this[ma] || (this[ma] = Array.from(this[da].toArray(), String));
	}
	[Symbol.iterator]() {
		return new ga(this[da], this[fa]);
	}
	get size() {
		return this[da].length;
	}
	toArray() {
		return Object.values(this.toJSON());
	}
	toJSON() {
		let e = this[da], t = this[fa], n = {};
		for (let r = -1, i = e.length; ++r < i;) n[e.get(r)] = L.visit(t, r);
		return n;
	}
	toString() {
		return `{${[...this].map(([e, t]) => `${Xt(e)}: ${Xt(t)}`).join(", ")}}`;
	}
	[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
		return this.toString();
	}
}, ga = class {
	constructor(e, t) {
		this.keys = e, this.vals = t, this.keyIndex = 0, this.numKeys = e.length;
	}
	[Symbol.iterator]() {
		return this;
	}
	next() {
		let e = this.keyIndex;
		return e === this.numKeys ? {
			done: !0,
			value: null
		} : (this.keyIndex++, {
			done: !1,
			value: [this.keys.get(e), L.visit(this.vals, e)]
		});
	}
}, _a = class {
	isExtensible() {
		return !1;
	}
	deleteProperty() {
		return !1;
	}
	preventExtensions() {
		return !0;
	}
	ownKeys(e) {
		return e[pa];
	}
	has(e, t) {
		return e[pa].includes(t);
	}
	getOwnPropertyDescriptor(e, t) {
		if (e[pa].indexOf(t) !== -1) return {
			writable: !0,
			enumerable: !0,
			configurable: !0
		};
	}
	get(e, t) {
		if (Reflect.has(e, t)) return e[t];
		let n = e[pa].indexOf(t);
		if (n !== -1) {
			let r = L.visit(Reflect.get(e, fa), n);
			return Reflect.set(e, t, r), r;
		}
	}
	set(e, t, n) {
		let r = e[pa].indexOf(t);
		return r === -1 ? Reflect.has(e, t) ? Reflect.set(e, t, n) : !1 : (P.visit(Reflect.get(e, fa), r, n), Reflect.set(e, t, n));
	}
};
Object.defineProperties(ha.prototype, {
	[Symbol.toStringTag]: {
		enumerable: !1,
		configurable: !1,
		value: "Row"
	},
	[da]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: null
	},
	[fa]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: null
	},
	[ma]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: null
	}
});
var va;
function ya(e, t, n, r) {
	let { length: i = 0 } = e, a = typeof t == "number" ? t : 0, o = typeof n == "number" ? n : i;
	return a < 0 && (a = (a % i + i) % i), o < 0 && (o = (o % i + i) % i), o < a && (va = a, a = o, o = va), o > i && (o = i), r ? r(e, a, o) : [a, o];
}
var ba = (e, t) => e < 0 ? t + e : e, xa = (e) => e !== e;
function Sa(e) {
	if (typeof e != "object" || !e) return xa(e) ? xa : (t) => t === e;
	if (e instanceof Date) {
		let t = e.valueOf();
		return (e) => e instanceof Date && e.valueOf() === t;
	}
	return ArrayBuffer.isView(e) ? (t) => t ? Je(e, t) : !1 : e instanceof Map ? wa(e) : Array.isArray(e) ? Ca(e) : e instanceof W ? Ta(e) : Ea(e, !0);
}
function Ca(e) {
	let t = [];
	for (let n = -1, r = e.length; ++n < r;) t[n] = Sa(e[n]);
	return Da(t);
}
function wa(e) {
	let t = -1, n = [];
	for (let r of e.values()) n[++t] = Sa(r);
	return Da(n);
}
function Ta(e) {
	let t = [];
	for (let n = -1, r = e.length; ++n < r;) t[n] = Sa(e.get(n));
	return Da(t);
}
function Ea(e, t = !1) {
	let n = Object.keys(e);
	if (!t && n.length === 0) return () => !1;
	let r = [];
	for (let t = -1, i = n.length; ++t < i;) r[t] = Sa(e[n[t]]);
	return Da(r, n);
}
function Da(e, t) {
	return (n) => {
		if (!n || typeof n != "object") return !1;
		switch (n.constructor) {
			case Array: return Oa(e, n);
			case Map: return Aa(e, n, n.keys());
			case ha:
			case mi:
			case Object:
			case void 0: return Aa(e, n, t || Object.keys(n));
		}
		return n instanceof W && ka(e, n);
	};
}
function Oa(e, t) {
	let n = e.length;
	if (t.length !== n) return !1;
	for (let r = -1; ++r < n;) if (!e[r](t[r])) return !1;
	return !0;
}
function ka(e, t) {
	let n = e.length;
	if (t.length !== n) return !1;
	for (let r = -1; ++r < n;) if (!e[r](t.get(r))) return !1;
	return !0;
}
function Aa(e, t, n) {
	let r = n[Symbol.iterator](), i = t instanceof Map ? t.keys() : Object.keys(t)[Symbol.iterator](), a = t instanceof Map ? t.values() : Object.values(t)[Symbol.iterator](), o = 0, s = e.length, c = a.next(), l = r.next(), u = i.next();
	for (; o < s && !l.done && !u.done && !c.done && !(l.value !== u.value || !e[o](c.value)); ++o, l = r.next(), u = i.next(), c = a.next());
	return o === s && l.done && u.done && c.done ? !0 : (r.return && r.return(), i.return && i.return(), a.return && a.return(), !1);
}
var ja = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	clampRange: ya,
	createElementComparator: Sa,
	wrapIndex: ba
}, Symbol.toStringTag, { value: "Module" }));
function Ma(e, t, n, r) {
	return !!(n & 1 << r);
}
function Na(e, t, n, r) {
	return (n & 1 << r) >> r;
}
function Pa(e, t, n) {
	return n ? !!(e[t >> 3] |= 1 << t % 8) || !0 : !(e[t >> 3] &= ~(1 << t % 8)) && !1;
}
function Fa(e, t, n) {
	let r = n.byteLength + 7 & -8;
	if (e > 0 || n.byteLength < r) {
		let i = new Uint8Array(r);
		return i.set(e % 8 == 0 ? n.subarray(e >> 3) : Ia(new La(n, e, t, null, Ma)).subarray(0, r)), i;
	}
	return n;
}
function Ia(e) {
	let t = [], n = 0, r = 0, i = 0;
	for (let a of e) a && (i |= 1 << r), ++r === 8 && (t[n++] = i, i = r = 0);
	(n === 0 || r > 0) && (t[n++] = i);
	let a = new Uint8Array(t.length + 7 & -8);
	return a.set(t), a;
}
var La = class {
	constructor(e, t, n, r, i) {
		this.bytes = e, this.length = n, this.context = r, this.get = i, this.bit = t % 8, this.byteIndex = t >> 3, this.byte = e[this.byteIndex++], this.index = 0;
	}
	next() {
		return this.index < this.length ? (this.bit === 8 && (this.bit = 0, this.byte = this.bytes[this.byteIndex++]), { value: this.get(this.context, this.index++, this.byte, this.bit++) }) : {
			done: !0,
			value: null
		};
	}
	[Symbol.iterator]() {
		return this;
	}
};
function Ra(e, t, n) {
	if (n - t <= 0) return 0;
	if (n - t < 8) {
		let r = 0;
		for (let i of new La(e, t, n - t, e, Na)) r += i;
		return r;
	}
	let r = n >> 3 << 3, i = t + (t % 8 == 0 ? 0 : 8 - t % 8);
	return Ra(e, t, i) + Ra(e, r, n) + za(e, i >> 3, r - i >> 3);
}
function za(e, t, n) {
	let r = 0, i = Math.trunc(t), a = new DataView(e.buffer, e.byteOffset, e.byteLength), o = n === void 0 ? e.byteLength : i + n;
	for (; o - i >= 4;) r += Ba(a.getUint32(i)), i += 4;
	for (; o - i >= 2;) r += Ba(a.getUint16(i)), i += 2;
	for (; o - i >= 1;) r += Ba(a.getUint8(i)), i += 1;
	return r;
}
function Ba(e) {
	let t = Math.trunc(e);
	return t -= t >>> 1 & 1431655765, t = (t & 858993459) + (t >>> 2 & 858993459), (t + (t >>> 4) & 252645135) * 16843009 >>> 24;
}
var Va = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	BitIterator: La,
	getBit: Na,
	getBool: Ma,
	packBools: Ia,
	popcnt_array: za,
	popcnt_bit_range: Ra,
	popcnt_uint32: Ba,
	setBool: Pa,
	truncateBitmap: Fa
}, Symbol.toStringTag, { value: "Module" })), Ha = -1, Ua = /* @__PURE__ */ Symbol.for("apache-arrow/Data"), R = class e {
	static isData(e) {
		return e?.[Ua] === !0;
	}
	get typeId() {
		return this.type.typeId;
	}
	get ArrayType() {
		return this.type.ArrayType;
	}
	get buffers() {
		return [
			this.valueOffsets,
			this.values,
			this.nullBitmap,
			this.typeIds
		];
	}
	get nullable() {
		if (this._nullCount !== 0) {
			let { type: e } = this;
			return O.isSparseUnion(e) || O.isDenseUnion(e) ? this.children.some((e) => e.nullable) : this.nullBitmap && this.nullBitmap.byteLength > 0;
		}
		return !0;
	}
	get byteLength() {
		let e = 0, { valueOffsets: t, values: n, nullBitmap: r, typeIds: i } = this;
		return t && (e += t.byteLength), n && (e += n.byteLength), r && (e += r.byteLength), i && (e += i.byteLength), e += this.variadicBuffers.reduce((e, t) => e + (t?.byteLength ?? 0), 0), this.children.reduce((e, t) => e + t.byteLength, e);
	}
	get nullCount() {
		if (O.isUnion(this.type)) return this.children.reduce((e, t) => e + t.nullCount, 0);
		let e = this._nullCount, t;
		return e <= Ha && (t = this.nullBitmap) && (this._nullCount = e = t.length === 0 ? 0 : this.length - Ra(t, this.offset, this.offset + this.length)), e;
	}
	constructor(t, n, r, i, a, o = [], s, c = []) {
		this.type = t, this.children = o, this.dictionary = s, this.offset = Math.floor(Math.max(n || 0, 0)), this.length = Math.floor(Math.max(r || 0, 0)), this._nullCount = Math.floor(Math.max(i || 0, -1));
		let l;
		a instanceof e ? (this.stride = a.stride, this.values = a.values, this.typeIds = a.typeIds, this.nullBitmap = a.nullBitmap, this.valueOffsets = a.valueOffsets, this.variadicBuffers = a.variadicBuffers) : (this.stride = cr(t), a && ((l = a[0]) && (this.valueOffsets = l), (l = a[1]) && (this.values = l), (l = a[2]) && (this.nullBitmap = l), (l = a[3]) && (this.typeIds = l)), this.variadicBuffers = c), this.variadicBuffers ??= [];
	}
	getValid(e) {
		let { type: t } = this;
		if (O.isUnion(t)) {
			let n = t, r = this.typeIds[e], i = n.typeIdToChildIndex[r], a = this.children[i], o = this.valueOffsets, s = n.mode === g.Dense && o ? Number(o[e]) : e;
			return a.getValid(s);
		}
		if (this.nullable && this.nullCount > 0) {
			let t = this.offset + e;
			return !!(this.nullBitmap[t >> 3] & 1 << t % 8);
		}
		return !0;
	}
	setValid(e, t) {
		let n, { type: r } = this;
		if (O.isUnion(r)) {
			let i = r, a = this.typeIds[e], o = i.typeIdToChildIndex[a], s = this.children[o], c = this.valueOffsets, l = i.mode === g.Dense && c ? Number(c[e]) : e;
			n = s.getValid(l), s.setValid(l, t);
		} else {
			let { nullBitmap: r } = this, { offset: i, length: a } = this, o = i + e, s = 1 << o % 8, c = o >> 3;
			(!r || r.byteLength <= c) && (r = new Uint8Array((i + a + 63 & -64) >> 3).fill(255), this.nullCount > 0 ? (r.set(Fa(i, a, this.nullBitmap), 0), Object.assign(this, { nullBitmap: r })) : Object.assign(this, {
				nullBitmap: r,
				_nullCount: 0
			}));
			let l = r[c];
			n = (l & s) !== 0, r[c] = t ? l | s : l & ~s;
		}
		return n !== !!t && (this._nullCount = this.nullCount + (t ? -1 : 1)), t;
	}
	clone(t = this.type, n = this.offset, r = this.length, i = this._nullCount, a = this, o = this.children, s = this.variadicBuffers) {
		return new e(t, n, r, i, a, o, this.dictionary, s);
	}
	slice(e, t) {
		let { stride: n, typeId: r, children: i } = this, a = (this._nullCount === 0) - 1, o = r === 16 ? n : 1, s = this._sliceBuffers(e, t, n, r);
		return this.clone(this.type, this.offset + e, t, a, s, i.length === 0 || this.valueOffsets ? i : this._sliceChildren(i, o * e, o * t), this.variadicBuffers);
	}
	_changeLengthAndBackfillNullBitmap(e) {
		if (this.typeId === E.Null) return this.clone(this.type, 0, e, 0, this.buffers, this.children, this.variadicBuffers);
		let { length: t, nullCount: n } = this, r = new Uint8Array((e + 63 & -64) >> 3).fill(255, 0, t >> 3);
		r[t >> 3] = (1 << t - (t & -8)) - 1, n > 0 && r.set(Fa(this.offset, t, this.nullBitmap), 0);
		let i = this.buffers;
		return i[Jt.VALIDITY] = r, this.clone(this.type, 0, e, n + (e - t), i, this.children, this.variadicBuffers);
	}
	_sliceBuffers(e, t, n, r) {
		let i, { buffers: a } = this;
		if ((i = a[Jt.TYPE]) && (a[Jt.TYPE] = i.subarray(e, e + t)), O.isBinaryView(this.type) || O.isUtf8View(this.type)) {
			let n = k.ELEMENT_WIDTH;
			(i = a[Jt.DATA]) && (a[Jt.DATA] = i.subarray(e * n, (e + t) * n));
		} else (i = a[Jt.OFFSET]) && (a[Jt.OFFSET] = i.subarray(e, e + t + 1)) || (i = a[Jt.DATA]) && (a[Jt.DATA] = r === 6 ? i : i.subarray(n * e, n * (e + t)));
		return a;
	}
	_sliceChildren(e, t, n) {
		return e.map((e) => e.slice(t, n));
	}
};
R.prototype.children = Object.freeze([]), R.prototype[Ua] = !0, Object.defineProperty(R, Symbol.hasInstance, { value: function(e) {
	return Function.prototype[Symbol.hasInstance].call(this, e) || this === R && R.isData(e);
} });
var Wa = new class e extends j {
	visit(e) {
		return this.getVisitFn(e.type).call(this, e);
	}
	visitNull(e) {
		let { type: t, offset: n = 0, length: r = 0 } = e;
		return new R(t, n, r, r);
	}
	visitBool(e) {
		let { type: t, offset: n = 0 } = e, r = m(e.nullBitmap), i = p(t.ArrayType, e.data), { length: a = i.length >> 3, nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new R(t, n, a, o, [
			void 0,
			i,
			r
		]);
	}
	visitInt(e) {
		let { type: t, offset: n = 0 } = e, r = m(e.nullBitmap), i = p(t.ArrayType, e.data), { length: a = i.length, nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new R(t, n, a, o, [
			void 0,
			i,
			r
		]);
	}
	visitFloat(e) {
		let { type: t, offset: n = 0 } = e, r = m(e.nullBitmap), i = p(t.ArrayType, e.data), { length: a = i.length, nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new R(t, n, a, o, [
			void 0,
			i,
			r
		]);
	}
	visitUtf8(e) {
		let { type: t, offset: n = 0 } = e, r = m(e.data), i = m(e.nullBitmap), a = ve(e.valueOffsets), { length: o = a.length - 1, nullCount: s = e.nullBitmap ? -1 : 0 } = e;
		return new R(t, n, o, s, [
			a,
			r,
			i
		]);
	}
	visitUtf8View(e) {
		let { type: t, offset: n = 0 } = e, r = p(t.ArrayType, e.views), i = m(e.nullBitmap), a = (e.variadicBuffers || []).map((e) => m(e));
		return new R(t, n, e.length ?? Math.trunc(r.length / Gn.ELEMENT_WIDTH), e.nullBitmap ? -1 : 0, [
			void 0,
			r,
			i
		], [], void 0, a);
	}
	visitLargeUtf8(e) {
		let { type: t, offset: n = 0 } = e, r = m(e.data), i = m(e.nullBitmap), a = ye(e.valueOffsets), { length: o = a.length - 1, nullCount: s = e.nullBitmap ? -1 : 0 } = e;
		return new R(t, n, o, s, [
			a,
			r,
			i
		]);
	}
	visitBinary(e) {
		let { type: t, offset: n = 0 } = e, r = m(e.data), i = m(e.nullBitmap), a = ve(e.valueOffsets), { length: o = a.length - 1, nullCount: s = e.nullBitmap ? -1 : 0 } = e;
		return new R(t, n, o, s, [
			a,
			r,
			i
		]);
	}
	visitBinaryView(e) {
		let { type: t, offset: n = 0 } = e, r = p(t.ArrayType, e.views), i = m(e.nullBitmap), a = (e.variadicBuffers || []).map((e) => m(e));
		return new R(t, n, e.length ?? Math.trunc(r.length / k.ELEMENT_WIDTH), e.nullBitmap ? -1 : 0, [
			void 0,
			r,
			i
		], [], void 0, a);
	}
	visitLargeBinary(e) {
		let { type: t, offset: n = 0 } = e, r = m(e.data), i = m(e.nullBitmap), a = ye(e.valueOffsets), { length: o = a.length - 1, nullCount: s = e.nullBitmap ? -1 : 0 } = e;
		return new R(t, n, o, s, [
			a,
			r,
			i
		]);
	}
	visitFixedSizeBinary(e) {
		let { type: t, offset: n = 0 } = e, r = m(e.nullBitmap), i = p(t.ArrayType, e.data), { length: a = i.length / cr(t), nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new R(t, n, a, o, [
			void 0,
			i,
			r
		]);
	}
	visitDate(e) {
		let { type: t, offset: n = 0 } = e, r = m(e.nullBitmap), i = p(t.ArrayType, e.data), { length: a = i.length / cr(t), nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new R(t, n, a, o, [
			void 0,
			i,
			r
		]);
	}
	visitTimestamp(e) {
		let { type: t, offset: n = 0 } = e, r = m(e.nullBitmap), i = p(t.ArrayType, e.data), { length: a = i.length / cr(t), nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new R(t, n, a, o, [
			void 0,
			i,
			r
		]);
	}
	visitTime(e) {
		let { type: t, offset: n = 0 } = e, r = m(e.nullBitmap), i = p(t.ArrayType, e.data), { length: a = i.length / cr(t), nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new R(t, n, a, o, [
			void 0,
			i,
			r
		]);
	}
	visitDecimal(e) {
		let { type: t, offset: n = 0 } = e, r = m(e.nullBitmap), i = p(t.ArrayType, e.data), { length: a = i.length / cr(t), nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new R(t, n, a, o, [
			void 0,
			i,
			r
		]);
	}
	visitList(e) {
		let { type: t, offset: n = 0, child: r } = e, i = m(e.nullBitmap), a = ve(e.valueOffsets), { length: o = a.length - 1, nullCount: s = e.nullBitmap ? -1 : 0 } = e;
		return new R(t, n, o, s, [
			a,
			void 0,
			i
		], [r]);
	}
	visitLargeList(e) {
		let { type: t, offset: n = 0, child: r } = e, i = m(e.nullBitmap), a = ye(e.valueOffsets), { length: o = a.length - 1, nullCount: s = e.nullBitmap ? -1 : 0 } = e;
		return new R(t, n, o, s, [
			a,
			void 0,
			i
		], [r]);
	}
	visitStruct(e) {
		let { type: t, offset: n = 0, children: r = [] } = e, i = m(e.nullBitmap), { length: a = r.reduce((e, { length: t }) => Math.max(e, t), 0), nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new R(t, n, a, o, [
			void 0,
			void 0,
			i
		], r);
	}
	visitUnion(e) {
		let { type: t, offset: n = 0, children: r = [] } = e, i = p(t.ArrayType, e.typeIds), { length: a = i.length, nullCount: o = -1 } = e;
		return O.isSparseUnion(t) ? new R(t, n, a, o, [
			void 0,
			void 0,
			void 0,
			i
		], r) : new R(t, n, a, o, [
			ve(e.valueOffsets),
			void 0,
			void 0,
			i
		], r);
	}
	visitDictionary(t) {
		let { type: n, offset: r = 0 } = t, i = m(t.nullBitmap), a = p(n.indices.ArrayType, t.data), { dictionary: o = new W([new e().visit({ type: n.dictionary })]) } = t, { length: s = a.length, nullCount: c = t.nullBitmap ? -1 : 0 } = t;
		return new R(n, r, s, c, [
			void 0,
			a,
			i
		], [], o);
	}
	visitInterval(e) {
		let { type: t, offset: n = 0 } = e, r = m(e.nullBitmap), i = p(t.ArrayType, e.data), { length: a = i.length / cr(t), nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new R(t, n, a, o, [
			void 0,
			i,
			r
		]);
	}
	visitDuration(e) {
		let { type: t, offset: n = 0 } = e, r = m(e.nullBitmap), i = p(t.ArrayType, e.data), { length: a = i.length, nullCount: o = e.nullBitmap ? -1 : 0 } = e;
		return new R(t, n, a, o, [
			void 0,
			i,
			r
		]);
	}
	visitFixedSizeList(t) {
		let { type: n, offset: r = 0, child: i = new e().visit({ type: n.valueType }) } = t, a = m(t.nullBitmap), { length: o = i.length / cr(n), nullCount: s = t.nullBitmap ? -1 : 0 } = t;
		return new R(n, r, o, s, [
			void 0,
			void 0,
			a
		], [i]);
	}
	visitMap(t) {
		let { type: n, offset: r = 0, child: i = new e().visit({ type: n.childType }) } = t, a = m(t.nullBitmap), o = ve(t.valueOffsets), { length: s = o.length - 1, nullCount: c = t.nullBitmap ? -1 : 0 } = t;
		return new R(n, r, s, c, [
			o,
			void 0,
			a
		], [i]);
	}
}();
function z(e) {
	return Wa.visit(e);
}
var Ga = class {
	constructor(e = 0, t) {
		this.numChunks = e, this.getChunkIterator = t, this.chunkIndex = 0, this.chunkIterator = this.getChunkIterator(0);
	}
	next() {
		for (; this.chunkIndex < this.numChunks;) {
			let e = this.chunkIterator.next();
			if (!e.done) return e;
			++this.chunkIndex < this.numChunks && (this.chunkIterator = this.getChunkIterator(this.chunkIndex));
		}
		return {
			done: !0,
			value: null
		};
	}
	[Symbol.iterator]() {
		return this;
	}
};
function Ka(e) {
	return e.some((e) => e.nullable);
}
function qa(e) {
	return e.reduce((e, t) => e + t.nullCount, 0);
}
function Ja(e) {
	return e.reduce((e, t, n) => (e[n + 1] = e[n] + t.length, e), new Uint32Array(e.length + 1));
}
function Ya(e, t, n, r) {
	let i = [];
	for (let a = -1, o = e.length; ++a < o;) {
		let o = e[a], s = t[a], { length: c } = o;
		if (s >= r) break;
		if (n >= s + c) continue;
		if (s >= n && s + c <= r) {
			i.push(o);
			continue;
		}
		let l = Math.max(0, n - s), u = Math.min(r - s, c);
		i.push(o.slice(l, u - l));
	}
	return i.length === 0 && i.push(e[0].slice(0, 0)), i;
}
function Xa(e, t, n, r) {
	let i = 0, a = 0, o = t.length - 1;
	do {
		if (i >= o - 1) return n < t[o] ? r(e, i, n - t[i]) : null;
		a = i + Math.trunc((o - i) * .5), n < t[a] ? o = a : i = a;
	} while (i < o);
}
function Za(e, t) {
	return e.getValid(t);
}
function Qa(e) {
	function t(t, n, r) {
		return e(t[n], r);
	}
	return function(e) {
		let n = this.data;
		return Xa(n, this._offsets, e, t);
	};
}
function $a(e) {
	let t;
	function n(n, r, i) {
		return e(n[r], i, t);
	}
	return function(e, r) {
		let i = this.data;
		t = r;
		let a = Xa(i, this._offsets, e, n);
		return t = void 0, a;
	};
}
function eo(e) {
	let t;
	function n(n, r, i) {
		let a = i, o = 0, s = 0;
		for (let i = r - 1, c = n.length; ++i < c;) {
			let r = n[i];
			if (~(o = e(r, t, a))) return s + o;
			a = 0, s += r.length;
		}
		return -1;
	}
	return function(e, r) {
		t = e;
		let i = this.data, a = typeof r == "number" ? Xa(i, this._offsets, r, n) : n(i, 0, 0);
		return t = void 0, a;
	};
}
var B = class extends j {};
function to(e, t) {
	return t === null && e.length > 0 ? 0 : -1;
}
function no(e, t) {
	let { nullBitmap: n } = e;
	if (!n || e.nullCount <= 0) return -1;
	let r = 0;
	for (let i of new La(n, e.offset + (t || 0), e.length, n, Ma)) {
		if (!i) return r;
		++r;
	}
	return -1;
}
function V(e, t, n) {
	if (t === void 0) return -1;
	if (t === null) switch (e.typeId) {
		case E.Union: break;
		case E.Dictionary: break;
		default: return no(e, n);
	}
	let r = L.getVisitFn(e), i = Sa(t);
	for (let t = (n || 0) - 1, a = e.length; ++t < a;) if (i(r(e, t))) return t;
	return -1;
}
function ro(e, t, n) {
	let r = L.getVisitFn(e), i = Sa(t);
	for (let t = (n || 0) - 1, a = e.length; ++t < a;) if (i(r(e, t))) return t;
	return -1;
}
B.prototype.visitNull = to, B.prototype.visitBool = V, B.prototype.visitInt = V, B.prototype.visitInt8 = V, B.prototype.visitInt16 = V, B.prototype.visitInt32 = V, B.prototype.visitInt64 = V, B.prototype.visitUint8 = V, B.prototype.visitUint16 = V, B.prototype.visitUint32 = V, B.prototype.visitUint64 = V, B.prototype.visitFloat = V, B.prototype.visitFloat16 = V, B.prototype.visitFloat32 = V, B.prototype.visitFloat64 = V, B.prototype.visitUtf8 = V, B.prototype.visitLargeUtf8 = V, B.prototype.visitUtf8View = V, B.prototype.visitBinary = V, B.prototype.visitLargeBinary = V, B.prototype.visitBinaryView = V, B.prototype.visitFixedSizeBinary = V, B.prototype.visitDate = V, B.prototype.visitDateDay = V, B.prototype.visitDateMillisecond = V, B.prototype.visitTimestamp = V, B.prototype.visitTimestampSecond = V, B.prototype.visitTimestampMillisecond = V, B.prototype.visitTimestampMicrosecond = V, B.prototype.visitTimestampNanosecond = V, B.prototype.visitTime = V, B.prototype.visitTimeSecond = V, B.prototype.visitTimeMillisecond = V, B.prototype.visitTimeMicrosecond = V, B.prototype.visitTimeNanosecond = V, B.prototype.visitDecimal = V, B.prototype.visitList = V, B.prototype.visitLargeList = V, B.prototype.visitStruct = V, B.prototype.visitUnion = V, B.prototype.visitDenseUnion = ro, B.prototype.visitSparseUnion = ro, B.prototype.visitDictionary = V, B.prototype.visitInterval = V, B.prototype.visitIntervalDayTime = V, B.prototype.visitIntervalYearMonth = V, B.prototype.visitIntervalMonthDayNano = V, B.prototype.visitDuration = V, B.prototype.visitDurationSecond = V, B.prototype.visitDurationMillisecond = V, B.prototype.visitDurationMicrosecond = V, B.prototype.visitDurationNanosecond = V, B.prototype.visitFixedSizeList = V, B.prototype.visitMap = V;
var io = new B(), H = class extends j {};
function U(e) {
	let { type: t } = e;
	if (e.nullCount === 0 && e.stride === 1 && (O.isInt(t) && t.bitWidth !== 64 || O.isTime(t) && t.bitWidth !== 64 || O.isFloat(t) && t.precision !== _.HALF)) return new Ga(e.data.length, (t) => {
		let n = e.data[t];
		return n.values.subarray(0, n.length)[Symbol.iterator]();
	});
	let n = 0;
	return new Ga(e.data.length, (t) => {
		let r = e.data[t].length, i = e.slice(n, n + r);
		return n += r, new ao(i);
	});
}
var ao = class {
	constructor(e) {
		this.vector = e, this.index = 0;
	}
	next() {
		return this.index < this.vector.length ? { value: this.vector.get(this.index++) } : {
			done: !0,
			value: null
		};
	}
	[Symbol.iterator]() {
		return this;
	}
};
H.prototype.visitNull = U, H.prototype.visitBool = U, H.prototype.visitInt = U, H.prototype.visitInt8 = U, H.prototype.visitInt16 = U, H.prototype.visitInt32 = U, H.prototype.visitInt64 = U, H.prototype.visitUint8 = U, H.prototype.visitUint16 = U, H.prototype.visitUint32 = U, H.prototype.visitUint64 = U, H.prototype.visitFloat = U, H.prototype.visitFloat16 = U, H.prototype.visitFloat32 = U, H.prototype.visitFloat64 = U, H.prototype.visitUtf8 = U, H.prototype.visitLargeUtf8 = U, H.prototype.visitUtf8View = U, H.prototype.visitBinary = U, H.prototype.visitLargeBinary = U, H.prototype.visitBinaryView = U, H.prototype.visitFixedSizeBinary = U, H.prototype.visitDate = U, H.prototype.visitDateDay = U, H.prototype.visitDateMillisecond = U, H.prototype.visitTimestamp = U, H.prototype.visitTimestampSecond = U, H.prototype.visitTimestampMillisecond = U, H.prototype.visitTimestampMicrosecond = U, H.prototype.visitTimestampNanosecond = U, H.prototype.visitTime = U, H.prototype.visitTimeSecond = U, H.prototype.visitTimeMillisecond = U, H.prototype.visitTimeMicrosecond = U, H.prototype.visitTimeNanosecond = U, H.prototype.visitDecimal = U, H.prototype.visitList = U, H.prototype.visitLargeList = U, H.prototype.visitStruct = U, H.prototype.visitUnion = U, H.prototype.visitDenseUnion = U, H.prototype.visitSparseUnion = U, H.prototype.visitDictionary = U, H.prototype.visitInterval = U, H.prototype.visitIntervalDayTime = U, H.prototype.visitIntervalYearMonth = U, H.prototype.visitIntervalMonthDayNano = U, H.prototype.visitDuration = U, H.prototype.visitDurationSecond = U, H.prototype.visitDurationMillisecond = U, H.prototype.visitDurationMicrosecond = U, H.prototype.visitDurationNanosecond = U, H.prototype.visitFixedSizeList = U, H.prototype.visitMap = U;
var oo = new H(), so, co = /* @__PURE__ */ Symbol.for("apache-arrow/Vector"), lo = {}, uo = {}, W = class e {
	static isVector(e) {
		return e?.[co] === !0;
	}
	constructor(t) {
		let n = t[0] instanceof e ? t.flatMap((e) => e.data) : t;
		if (n.length === 0 || n.some((e) => !(e instanceof R))) throw TypeError("Vector constructor expects an Array of Data instances.");
		let r = n[0]?.type;
		switch (n.length) {
			case 0:
				this._offsets = [0];
				break;
			case 1: {
				let { get: e, set: t, indexOf: i } = lo[r.typeId], a = n[0];
				this.isValid = (e) => Za(a, e), this.get = (t) => e(a, t), this.set = (e, n) => t(a, e, n), this.indexOf = (e) => i(a, e), this._offsets = [0, a.length];
				break;
			}
			default: Object.setPrototypeOf(this, uo[r.typeId]), this._offsets = Ja(n);
		}
		this.data = n, this.type = r, this.stride = cr(r), this.numChildren = r.children?.length ?? 0, this.length = this._offsets.at(-1);
	}
	get byteLength() {
		return this.data.reduce((e, t) => e + t.byteLength, 0);
	}
	get nullable() {
		return Ka(this.data);
	}
	get nullCount() {
		return qa(this.data);
	}
	get ArrayType() {
		return this.type.ArrayType;
	}
	get [Symbol.toStringTag]() {
		return `${this.VectorName}<${this.type[Symbol.toStringTag]}>`;
	}
	get VectorName() {
		return `${E[this.type.typeId]}Vector`;
	}
	isValid(e) {
		return !1;
	}
	get(e) {
		return null;
	}
	at(e) {
		return this.get(ba(e, this.length));
	}
	set(e, t) {}
	indexOf(e, t) {
		return -1;
	}
	includes(e, t) {
		return this.indexOf(e, t) > -1;
	}
	[Symbol.iterator]() {
		return oo.visit(this);
	}
	concat(...t) {
		return new e(this.data.concat(t.flatMap((e) => e.data).flat(Infinity)));
	}
	slice(t, n) {
		return new e(ya(this, t, n, ({ data: e, _offsets: t }, n, r) => Ya(e, t, n, r)));
	}
	toJSON() {
		return [...this];
	}
	toArray() {
		let { type: e, data: t, length: n, stride: r, ArrayType: i } = this;
		switch (e.typeId) {
			case E.Int:
			case E.Float:
			case E.Decimal:
			case E.Time:
			case E.Timestamp: switch (t.length) {
				case 0: return new i();
				case 1: return t[0].values.subarray(0, n * r);
				default: return t.reduce((e, { values: t, length: n }) => (e.array.set(t.subarray(0, n * r), e.offset), e.offset += n * r, e), {
					array: new i(n * r),
					offset: 0
				}).array;
			}
		}
		return [...this];
	}
	toString() {
		return `[${[...this].join(",")}]`;
	}
	getChild(e) {
		return this.getChildAt(this.type.children?.findIndex((t) => t.name === e));
	}
	getChildAt(t) {
		return t > -1 && t < this.numChildren ? new e(this.data.map(({ children: e }) => e[t])) : null;
	}
	get isMemoized() {
		return O.isDictionary(this.type) ? this.data[0].dictionary.isMemoized : !1;
	}
	memoize() {
		if (O.isDictionary(this.type)) {
			let t = new fo(this.data[0].dictionary), n = this.data.map((e) => {
				let n = e.clone();
				return n.dictionary = t, n;
			});
			return new e(n);
		}
		return new fo(this);
	}
	unmemoize() {
		if (O.isDictionary(this.type) && this.isMemoized) {
			let t = this.data[0].dictionary.unmemoize(), n = this.data.map((e) => {
				let n = e.clone();
				return n.dictionary = t, n;
			});
			return new e(n);
		}
		return this;
	}
};
so = Symbol.toStringTag, W[so] = ((e) => {
	e.type = O.prototype, e.data = [], e.length = 0, e.stride = 1, e.numChildren = 0, e._offsets = new Uint32Array([0]), e[Symbol.isConcatSpreadable] = !0, e[co] = !0;
	let t = Object.keys(E).map((e) => E[e]).filter((e) => typeof e == "number" && e !== E.NONE);
	for (let n of t) lo[n] = {
		get: L.getVisitFnByTypeId(n),
		set: P.getVisitFnByTypeId(n),
		indexOf: io.getVisitFnByTypeId(n)
	}, uo[n] = Object.create(e, {
		isValid: { value: Qa(Za) },
		get: { value: Qa(L.getVisitFnByTypeId(n)) },
		set: { value: $a(P.getVisitFnByTypeId(n)) },
		indexOf: { value: eo(io.getVisitFnByTypeId(n)) }
	});
	return "Vector";
})(W.prototype), Object.defineProperty(W, Symbol.hasInstance, { value: function(e) {
	return Function.prototype[Symbol.hasInstance].call(this, e) || this === W && W.isVector(e);
} });
var fo = class e extends W {
	constructor(t) {
		super(t.data);
		let n = this.get, r = this.set, i = this.slice, a = Array(this.length);
		Object.defineProperty(this, "get", { value(e) {
			let t = a[e];
			if (t !== void 0) return t;
			let r = n.call(this, e);
			return a[e] = r, r;
		} }), Object.defineProperty(this, "set", { value(e, t) {
			r.call(this, e, t), a[e] = t;
		} }), Object.defineProperty(this, "slice", { value: (t, n) => new e(i.call(this, t, n)) }), Object.defineProperty(this, "isMemoized", { value: !0 }), Object.defineProperty(this, "unmemoize", { value: () => new W(this.data) }), Object.defineProperty(this, "memoize", { value: () => this });
	}
}, po = class {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	offset() {
		return this.bb.readInt64(this.bb_pos);
	}
	metaDataLength() {
		return this.bb.readInt32(this.bb_pos + 8);
	}
	bodyLength() {
		return this.bb.readInt64(this.bb_pos + 16);
	}
	static sizeOf() {
		return 24;
	}
	static createBlock(e, t, n, r) {
		return e.prep(8, 24), e.writeInt64(BigInt(r ?? 0)), e.pad(4), e.writeInt32(n), e.writeInt64(BigInt(t ?? 0)), e.offset();
	}
}, mo = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsFooter(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsFooter(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	version() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt16(this.bb_pos + e) : h.V1;
	}
	schema(e) {
		let t = this.bb.__offset(this.bb_pos, 6);
		return t ? (e || new qt()).__init(this.bb.__indirect(this.bb_pos + t), this.bb) : null;
	}
	dictionaries(e, t) {
		let n = this.bb.__offset(this.bb_pos, 8);
		return n ? (t || new po()).__init(this.bb.__vector(this.bb_pos + n) + e * 24, this.bb) : null;
	}
	dictionariesLength() {
		let e = this.bb.__offset(this.bb_pos, 8);
		return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
	}
	recordBatches(e, t) {
		let n = this.bb.__offset(this.bb_pos, 10);
		return n ? (t || new po()).__init(this.bb.__vector(this.bb_pos + n) + e * 24, this.bb) : null;
	}
	recordBatchesLength() {
		let e = this.bb.__offset(this.bb_pos, 10);
		return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
	}
	customMetadata(e, t) {
		let n = this.bb.__offset(this.bb_pos, 12);
		return n ? (t || new S()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + e * 4), this.bb) : null;
	}
	customMetadataLength() {
		let e = this.bb.__offset(this.bb_pos, 12);
		return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
	}
	static startFooter(e) {
		e.startObject(5);
	}
	static addVersion(e, t) {
		e.addFieldInt16(0, t, h.V1);
	}
	static addSchema(e, t) {
		e.addFieldOffset(1, t, 0);
	}
	static addDictionaries(e, t) {
		e.addFieldOffset(2, t, 0);
	}
	static startDictionariesVector(e, t) {
		e.startVector(24, t, 8);
	}
	static addRecordBatches(e, t) {
		e.addFieldOffset(3, t, 0);
	}
	static startRecordBatchesVector(e, t) {
		e.startVector(24, t, 8);
	}
	static addCustomMetadata(e, t) {
		e.addFieldOffset(4, t, 0);
	}
	static createCustomMetadataVector(e, t) {
		e.startVector(4, t.length, 4);
		for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
		return e.endVector();
	}
	static startCustomMetadataVector(e, t) {
		e.startVector(4, t, 4);
	}
	static endFooter(e) {
		return e.endObject();
	}
	static finishFooterBuffer(e, t) {
		e.finish(t);
	}
	static finishSizePrefixedFooterBuffer(e, t) {
		e.finish(t, void 0, !0);
	}
}, ho = /* @__PURE__ */ Symbol.for("apache-arrow/Schema"), go = /* @__PURE__ */ Symbol.for("apache-arrow/Field"), G = class e {
	static isSchema(e) {
		return e?.[ho] === !0;
	}
	constructor(e = [], t, n, r = h.V5) {
		this.fields = e || [], this.metadata = t || /* @__PURE__ */ new Map(), n ||= vo(this.fields), this.dictionaries = n, this.metadataVersion = r;
	}
	get [Symbol.toStringTag]() {
		return "Schema";
	}
	get names() {
		return this.fields.map((e) => e.name);
	}
	toString() {
		return `Schema<{ ${this.fields.map((e, t) => `${t}: ${e}`).join(", ")} }>`;
	}
	select(t) {
		let n = new Set(t), r = this.fields.filter((e) => n.has(e.name));
		return new e(r, this.metadata);
	}
	selectAt(t) {
		let n = t.map((e) => this.fields[e]).filter(Boolean);
		return new e(n, this.metadata);
	}
	assign(...t) {
		let n = t[0] instanceof e ? t[0] : Array.isArray(t[0]) ? new e(t[0]) : new e(t), r = [...this.fields], i = _o(_o(/* @__PURE__ */ new Map(), this.metadata), n.metadata), a = n.fields.filter((e) => {
			let t = r.findIndex((t) => t.name === e.name);
			return !~t || (r[t] = e.clone({ metadata: _o(_o(/* @__PURE__ */ new Map(), r[t].metadata), e.metadata) })) && !1;
		}), o = vo(a, /* @__PURE__ */ new Map());
		return new e([...r, ...a], i, new Map([...this.dictionaries, ...o]));
	}
};
G.prototype.fields = null, G.prototype.metadata = null, G.prototype.dictionaries = null, G.prototype[ho] = !0, Object.defineProperty(G, Symbol.hasInstance, { value: function(e) {
	return Function.prototype[Symbol.hasInstance].call(this, e) || this === G && G.isSchema(e);
} });
var K = class e {
	static isField(e) {
		return e?.[go] === !0;
	}
	static new(...t) {
		let [n, r, i, a] = t;
		return t[0] && typeof t[0] == "object" && ({name: n} = t[0], r === void 0 && (r = t[0].type), i === void 0 && (i = t[0].nullable), a === void 0 && (a = t[0].metadata)), new e(`${n}`, r, i, a);
	}
	constructor(e, t, n = !1, r) {
		this.name = e, this.type = t, this.nullable = n, this.metadata = r || /* @__PURE__ */ new Map();
	}
	get typeId() {
		return this.type.typeId;
	}
	get [Symbol.toStringTag]() {
		return "Field";
	}
	toString() {
		return `${this.name}: ${this.type}`;
	}
	clone(...t) {
		let [n, r, i, a] = t;
		return !t[0] || typeof t[0] != "object" ? [n = this.name, r = this.type, i = this.nullable, a = this.metadata] = t : {name: n = this.name, type: r = this.type, nullable: i = this.nullable, metadata: a = this.metadata} = t[0], e.new(n, r, i, a);
	}
};
K.prototype.type = null, K.prototype.name = null, K.prototype.nullable = null, K.prototype.metadata = null, K.prototype[go] = !0, Object.defineProperty(K, Symbol.hasInstance, { value: function(e) {
	return Function.prototype[Symbol.hasInstance].call(this, e) || this === K && K.isField(e);
} });
function _o(e, t) {
	return new Map([...e || /* @__PURE__ */ new Map(), ...t || /* @__PURE__ */ new Map()]);
}
function vo(e, t = /* @__PURE__ */ new Map()) {
	for (let n = -1, r = e.length; ++n < r;) {
		let r = e[n].type;
		if (O.isDictionary(r)) {
			if (!t.has(r.id)) t.set(r.id, r.dictionary);
			else if (t.get(r.id) !== r.dictionary) throw Error("Cannot create Schema containing two different dictionaries with the same Id");
		}
		r.children && r.children.length > 0 && vo(r.children, t);
	}
	return t;
}
var yo = mt, bo = pt, xo = class {
	static decode(e) {
		e = new bo(m(e));
		let t = mo.getRootAsFooter(e);
		return new So(G.decode(t.schema(), /* @__PURE__ */ new Map(), t.version()), t);
	}
	static encode(e) {
		let t = new yo(), n = G.encode(t, e.schema);
		mo.startRecordBatchesVector(t, e.numRecordBatches);
		for (let n of [...e.recordBatches()].slice().reverse()) Co.encode(t, n);
		let r = t.endVector();
		mo.startDictionariesVector(t, e.numDictionaries);
		for (let n of [...e.dictionaryBatches()].slice().reverse()) Co.encode(t, n);
		let i = t.endVector();
		return mo.startFooter(t), mo.addSchema(t, n), mo.addVersion(t, h.V5), mo.addRecordBatches(t, r), mo.addDictionaries(t, i), mo.finishFooterBuffer(t, mo.endFooter(t)), t.asUint8Array();
	}
	get numRecordBatches() {
		return this._recordBatches.length;
	}
	get numDictionaries() {
		return this._dictionaryBatches.length;
	}
	constructor(e, t = h.V5, n, r) {
		this.schema = e, this.version = t, n && (this._recordBatches = n), r && (this._dictionaryBatches = r);
	}
	*recordBatches() {
		for (let e, t = -1, n = this.numRecordBatches; ++t < n;) (e = this.getRecordBatch(t)) && (yield e);
	}
	*dictionaryBatches() {
		for (let e, t = -1, n = this.numDictionaries; ++t < n;) (e = this.getDictionaryBatch(t)) && (yield e);
	}
	getRecordBatch(e) {
		return e >= 0 && e < this.numRecordBatches && this._recordBatches[e] || null;
	}
	getDictionaryBatch(e) {
		return e >= 0 && e < this.numDictionaries && this._dictionaryBatches[e] || null;
	}
}, So = class extends xo {
	get numRecordBatches() {
		return this._footer.recordBatchesLength();
	}
	get numDictionaries() {
		return this._footer.dictionariesLength();
	}
	constructor(e, t) {
		super(e, t.version()), this._footer = t;
	}
	getRecordBatch(e) {
		if (e >= 0 && e < this.numRecordBatches) {
			let t = this._footer.recordBatches(e);
			if (t) return Co.decode(t);
		}
		return null;
	}
	getDictionaryBatch(e) {
		if (e >= 0 && e < this.numDictionaries) {
			let t = this._footer.dictionaries(e);
			if (t) return Co.decode(t);
		}
		return null;
	}
}, Co = class e {
	static decode(t) {
		return new e(t.metaDataLength(), t.bodyLength(), t.offset());
	}
	static encode(e, t) {
		let { metaDataLength: n } = t, r = BigInt(t.offset), i = BigInt(t.bodyLength);
		return po.createBlock(e, r, n, i);
	}
	constructor(e, t, n) {
		this.metaDataLength = e, this.offset = D(n), this.bodyLength = D(t);
	}
}, wo = class e {
	constructor() {
		this.bb = null, this.bb_pos = 0;
	}
	__init(e, t) {
		return this.bb_pos = e, this.bb = t, this;
	}
	static getRootAsMessage(t, n) {
		return (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	static getSizePrefixedRootAsMessage(t, n) {
		return t.setPosition(t.position() + b), (n || new e()).__init(t.readInt32(t.position()) + t.position(), t);
	}
	version() {
		let e = this.bb.__offset(this.bb_pos, 4);
		return e ? this.bb.readInt16(this.bb_pos + e) : h.V1;
	}
	headerType() {
		let e = this.bb.__offset(this.bb_pos, 6);
		return e ? this.bb.readUint8(this.bb_pos + e) : T.NONE;
	}
	header(e) {
		let t = this.bb.__offset(this.bb_pos, 8);
		return t ? this.bb.__union(e, this.bb_pos + t) : null;
	}
	bodyLength() {
		let e = this.bb.__offset(this.bb_pos, 10);
		return e ? this.bb.readInt64(this.bb_pos + e) : BigInt("0");
	}
	customMetadata(e, t) {
		let n = this.bb.__offset(this.bb_pos, 12);
		return n ? (t || new S()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + e * 4), this.bb) : null;
	}
	customMetadataLength() {
		let e = this.bb.__offset(this.bb_pos, 12);
		return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
	}
	static startMessage(e) {
		e.startObject(5);
	}
	static addVersion(e, t) {
		e.addFieldInt16(0, t, h.V1);
	}
	static addHeaderType(e, t) {
		e.addFieldInt8(1, t, T.NONE);
	}
	static addHeader(e, t) {
		e.addFieldOffset(2, t, 0);
	}
	static addBodyLength(e, t) {
		e.addFieldInt64(3, t, BigInt("0"));
	}
	static addCustomMetadata(e, t) {
		e.addFieldOffset(4, t, 0);
	}
	static createCustomMetadataVector(e, t) {
		e.startVector(4, t.length, 4);
		for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
		return e.endVector();
	}
	static startCustomMetadataVector(e, t) {
		e.startVector(4, t, 4);
	}
	static endMessage(e) {
		return e.endObject();
	}
	static finishMessageBuffer(e, t) {
		e.finish(t);
	}
	static finishSizePrefixedMessageBuffer(e, t) {
		e.finish(t, void 0, !0);
	}
	static createMessage(t, n, r, i, a, o) {
		return e.startMessage(t), e.addVersion(t, n), e.addHeaderType(t, r), e.addHeader(t, i), e.addBodyLength(t, a), e.addCustomMetadata(t, o), e.endMessage(t);
	}
}, To = new class extends j {
	visit(e, t) {
		return e == null || t == null ? void 0 : super.visit(e, t);
	}
	visitNull(e, t) {
		return Bt.startNull(t), Bt.endNull(t);
	}
	visitInt(e, t) {
		return Ct.startInt(t), Ct.addBitWidth(t, e.bitWidth), Ct.addIsSigned(t, e.isSigned), Ct.endInt(t);
	}
	visitFloat(e, t) {
		return Nt.startFloatingPoint(t), Nt.addPrecision(t, e.precision), Nt.endFloatingPoint(t);
	}
	visitBinary(e, t) {
		return Tt.startBinary(t), Tt.endBinary(t);
	}
	visitBinaryView(e, t) {
		return Et.startBinaryView(t), Et.endBinaryView(t);
	}
	visitLargeBinary(e, t) {
		return Ft.startLargeBinary(t), Ft.endLargeBinary(t);
	}
	visitBool(e, t) {
		return Dt.startBool(t), Dt.endBool(t);
	}
	visitUtf8(e, t) {
		return Gt.startUtf8(t), Gt.endUtf8(t);
	}
	visitUtf8View(e, t) {
		return Kt.startUtf8View(t), Kt.endUtf8View(t);
	}
	visitLargeUtf8(e, t) {
		return Lt.startLargeUtf8(t), Lt.endLargeUtf8(t);
	}
	visitDecimal(e, t) {
		return kt.startDecimal(t), kt.addScale(t, e.scale), kt.addPrecision(t, e.precision), kt.addBitWidth(t, e.bitWidth), kt.endDecimal(t);
	}
	visitDate(e, t) {
		return Ot.startDate(t), Ot.addUnit(t, e.unit), Ot.endDate(t);
	}
	visitTime(e, t) {
		return Ht.startTime(t), Ht.addUnit(t, e.unit), Ht.addBitWidth(t, e.bitWidth), Ht.endTime(t);
	}
	visitTimestamp(e, t) {
		let n = e.timezone && t.createString(e.timezone) || void 0;
		return Ut.startTimestamp(t), Ut.addUnit(t, e.unit), n !== void 0 && Ut.addTimezone(t, n), Ut.endTimestamp(t);
	}
	visitInterval(e, t) {
		return Pt.startInterval(t), Pt.addUnit(t, e.unit), Pt.endInterval(t);
	}
	visitDuration(e, t) {
		return At.startDuration(t), At.addUnit(t, e.unit), At.endDuration(t);
	}
	visitList(e, t) {
		return Rt.startList(t), Rt.endList(t);
	}
	visitLargeList(e, t) {
		return It.startLargeList(t), It.endLargeList(t);
	}
	visitStruct(e, t) {
		return Vt.startStruct_(t), Vt.endStruct_(t);
	}
	visitUnion(e, t) {
		Wt.startTypeIdsVector(t, e.typeIds.length);
		let n = Wt.createTypeIdsVector(t, e.typeIds);
		return Wt.startUnion(t), Wt.addMode(t, e.mode), Wt.addTypeIds(t, n), Wt.endUnion(t);
	}
	visitDictionary(e, t) {
		let n = this.visit(e.indices, t);
		return wt.startDictionaryEncoding(t), wt.addId(t, BigInt(e.id)), wt.addIsOrdered(t, e.isOrdered), n !== void 0 && wt.addIndexType(t, n), wt.endDictionaryEncoding(t);
	}
	visitFixedSizeBinary(e, t) {
		return jt.startFixedSizeBinary(t), jt.addByteWidth(t, e.byteWidth), jt.endFixedSizeBinary(t);
	}
	visitFixedSizeList(e, t) {
		return Mt.startFixedSizeList(t), Mt.addListSize(t, e.listSize), Mt.endFixedSizeList(t);
	}
	visitMap(e, t) {
		return zt.startMap(t), zt.addKeysSorted(t, e.keysSorted), zt.endMap(t);
	}
}();
function Eo(e, t = /* @__PURE__ */ new Map()) {
	return new G(ko(e, t), Io(e.metadata), t);
}
function Do(e) {
	return new q(e.count, jo(e.columns), Mo(e.columns), null, Po(e.columns));
}
function Oo(e) {
	return new Ho(Do(e.data), e.id, e.isDelta);
}
function ko(e, t) {
	return (e.fields || []).filter(Boolean).map((e) => K.fromJSON(e, t));
}
function Ao(e, t) {
	return (e.children || []).filter(Boolean).map((e) => K.fromJSON(e, t));
}
function jo(e) {
	return (e || []).reduce((e, t) => [
		...e,
		new Uo(t.count, No(t.VALIDITY)),
		...jo(t.children)
	], []);
}
function Mo(e, t = []) {
	for (let n = -1, r = (e || []).length; ++n < r;) {
		let r = e[n];
		if (r.VALIDITY && t.push(new J(t.length, r.VALIDITY.length)), r.TYPE_ID && t.push(new J(t.length, r.TYPE_ID.length)), r.OFFSET && t.push(new J(t.length, r.OFFSET.length)), r.DATA && t.push(new J(t.length, r.DATA.length)), r.VIEWS && t.push(new J(t.length, r.VIEWS.length)), r.VARIADIC_DATA_BUFFERS) for (let e of r.VARIADIC_DATA_BUFFERS) t.push(new J(t.length, e.length));
		t = Mo(r.children, t);
	}
	return t;
}
function No(e) {
	return (e || []).reduce((e, t) => e + +(t === 0), 0);
}
function Po(e) {
	return (e || []).reduce((e, t) => [
		...e,
		...t.VARIADIC_DATA_BUFFERS ? [t.VARIADIC_DATA_BUFFERS.length] : [],
		...Po(t.children)
	], []);
}
function Fo(e, t) {
	let n, r, i, a, o, s;
	return !t || !(a = e.dictionary) ? (o = Ro(e, Ao(e, t)), i = new K(e.name, o, e.nullable, Io(e.metadata))) : t.has(n = a.id) ? (r = (r = a.indexType) ? Lo(r) : new Bn(), s = new sr(t.get(n), r, n, a.isOrdered), i = new K(e.name, s, e.nullable, Io(e.metadata))) : (r = (r = a.indexType) ? Lo(r) : new Bn(), t.set(n, o = Ro(e, Ao(e, t))), s = new sr(o, r, n, a.isOrdered), i = new K(e.name, s, e.nullable, Io(e.metadata))), i || null;
}
function Io(e = []) {
	return new Map(e.map(({ key: e, value: t }) => [e, t]));
}
function Lo(e) {
	return new zn(e.isSigned, e.bitWidth);
}
function Ro(e, t) {
	let n = e.type.name;
	switch (n) {
		case "NONE": return new Rn();
		case "null": return new Rn();
		case "binary": return new Hn();
		case "largebinary": return new Un();
		case "binaryview": return new k();
		case "utf8": return new Wn();
		case "largeutf8": return new Kn();
		case "utf8view": return new Gn();
		case "bool": return new qn();
		case "list": return new er((t || [])[0]);
		case "largelist": return new tr((t || [])[0]);
		case "struct": return new A(t || []);
		case "struct_": return new A(t || []);
	}
	switch (n) {
		case "int": {
			let t = e.type;
			return new zn(t.isSigned, t.bitWidth);
		}
		case "floatingpoint": {
			let t = e.type;
			return new Vn(_[t.precision]);
		}
		case "decimal": {
			let t = e.type;
			return new Jn(t.scale, t.precision, t.bitWidth);
		}
		case "date": {
			let t = e.type;
			return new Yn(it[t.unit]);
		}
		case "time": {
			let t = e.type;
			return new Xn(v[t.unit], t.bitWidth);
		}
		case "timestamp": {
			let t = e.type;
			return new Zn(v[t.unit], t.timezone);
		}
		case "interval": {
			let t = e.type;
			return new Qn(y[t.unit]);
		}
		case "duration": {
			let t = e.type;
			return new $n(v[t.unit]);
		}
		case "union": {
			let n = e.type, [r, ...i] = (n.mode + "").toLowerCase(), a = r.toUpperCase() + i.join("");
			return new nr(g[a], n.typeIds || [], t || []);
		}
		case "fixedsizebinary": {
			let t = e.type;
			return new rr(t.byteWidth);
		}
		case "fixedsizelist": {
			let n = e.type;
			return new ir(n.listSize, (t || [])[0]);
		}
		case "map": {
			let n = e.type;
			return new ar((t || [])[0], n.keysSorted);
		}
	}
	throw Error(`Unrecognized type: "${n}"`);
}
var zo = mt, Bo = pt, Vo = class e {
	static fromJSON(t, n) {
		let r = new e(0, h.V5, n);
		return r._createHeader = Go(t, n), r;
	}
	static decode(t) {
		t = new Bo(m(t));
		let n = wo.getRootAsMessage(t), r = n.bodyLength(), i = n.version(), a = n.headerType(), o = as(n), s = new e(r, i, a, void 0, o);
		return s._createHeader = Ko(n, a), s;
	}
	static encode(e) {
		let t = new zo(), n = -1;
		e.isSchema() ? n = G.encode(t, e.header()) : e.isRecordBatch() ? n = q.encode(t, e.header()) : e.isDictionaryBatch() && (n = Ho.encode(t, e.header()));
		let r = e.metadata && e.metadata.size > 0 ? wo.createCustomMetadataVector(t, [...e.metadata].map(([e, n]) => {
			let r = t.createString(`${e}`), i = t.createString(`${n}`);
			return S.startKeyValue(t), S.addKey(t, r), S.addValue(t, i), S.endKeyValue(t);
		})) : -1;
		return wo.startMessage(t), wo.addVersion(t, h.V5), wo.addHeader(t, n), wo.addHeaderType(t, e.headerType), wo.addBodyLength(t, BigInt(e.bodyLength)), r !== -1 && wo.addCustomMetadata(t, r), wo.finishMessageBuffer(t, wo.endMessage(t)), t.asUint8Array();
	}
	static from(t, n = 0) {
		if (t instanceof G) return new e(0, h.V5, T.Schema, t);
		if (t instanceof q) return new e(n, h.V5, T.RecordBatch, t, t.metadata);
		if (t instanceof Ho) return new e(n, h.V5, T.DictionaryBatch, t);
		throw Error(`Unrecognized Message header: ${t}`);
	}
	get type() {
		return this.headerType;
	}
	get version() {
		return this._version;
	}
	get headerType() {
		return this._headerType;
	}
	get compression() {
		return this._compression;
	}
	get bodyLength() {
		return this._bodyLength;
	}
	get metadata() {
		return this._metadata;
	}
	header() {
		return this._createHeader();
	}
	isSchema() {
		return this.headerType === T.Schema;
	}
	isRecordBatch() {
		return this.headerType === T.RecordBatch;
	}
	isDictionaryBatch() {
		return this.headerType === T.DictionaryBatch;
	}
	constructor(e, t, n, r, i) {
		this._version = t, this._headerType = n, this.body = /* @__PURE__ */ new Uint8Array(), this._compression = r?.compression, r && (this._createHeader = () => r), this._bodyLength = D(e), this._metadata = i || /* @__PURE__ */ new Map();
	}
}, q = class {
	get nodes() {
		return this._nodes;
	}
	get length() {
		return this._length;
	}
	get buffers() {
		return this._buffers;
	}
	get compression() {
		return this._compression;
	}
	get variadicBufferCounts() {
		return this._variadicBufferCounts;
	}
	get metadata() {
		return this._metadata;
	}
	constructor(e, t, n, r, i = [], a) {
		this._nodes = t, this._buffers = n, this._length = D(e), this._compression = r, this._variadicBufferCounts = i, this._metadata = a || /* @__PURE__ */ new Map();
	}
}, Ho = class {
	get id() {
		return this._id;
	}
	get data() {
		return this._data;
	}
	get isDelta() {
		return this._isDelta;
	}
	get length() {
		return this.data.length;
	}
	get nodes() {
		return this.data.nodes;
	}
	get buffers() {
		return this.data.buffers;
	}
	constructor(e, t, n = !1) {
		this._data = e, this._isDelta = n, this._id = D(t);
	}
}, J = class {
	constructor(e, t) {
		this.offset = D(e), this.length = D(t);
	}
}, Uo = class {
	constructor(e, t) {
		this.length = D(e), this.nullCount = D(t);
	}
}, Wo = class {
	constructor(e, t = ht.BUFFER) {
		this.type = e, this.method = t;
	}
};
function Go(e, t) {
	return () => {
		switch (t) {
			case T.Schema: return G.fromJSON(e);
			case T.RecordBatch: return q.fromJSON(e);
			case T.DictionaryBatch: return Ho.fromJSON(e);
		}
		throw Error(`Unrecognized Message type: { name: ${T[t]}, type: ${t} }`);
	};
}
function Ko(e, t) {
	return () => {
		switch (t) {
			case T.Schema: return G.decode(e.header(new qt()), /* @__PURE__ */ new Map(), e.version());
			case T.RecordBatch: return q.decode(e.header(new x()), e.version());
			case T.DictionaryBatch: return Ho.decode(e.header(new bt()), e.version());
		}
		throw Error(`Unrecognized Message type: { name: ${T[t]}, type: ${t} }`);
	};
}
K.encode = us, K.decode = rs, K.fromJSON = Fo, G.encode = ls, G.decode = qo, G.fromJSON = Eo, q.encode = ds, q.decode = Jo, q.fromJSON = Do, Ho.encode = ps, Ho.decode = Yo, Ho.fromJSON = Oo, Uo.encode = ms, Uo.decode = Zo, J.encode = hs, J.decode = Xo, Wo.encode = fs, Wo.decode = cs;
function qo(e, t = /* @__PURE__ */ new Map(), n = h.V5) {
	return new G(ts(e, t), is(e), t, n);
}
function Jo(e, t = h.V5) {
	return new q(e.length(), Qo(e), $o(e, t), cs(e.compression()), es(e));
}
function Yo(e, t = h.V5) {
	return new Ho(q.decode(e.data(), t), e.id(), e.isDelta());
}
function Xo(e) {
	return new J(e.offset(), e.length());
}
function Zo(e) {
	return new Uo(e.length(), e.nullCount());
}
function Qo(e) {
	let t = [];
	for (let n, r = -1, i = -1, a = e.nodesLength(); ++r < a;) (n = e.nodes(r)) && (t[++i] = Uo.decode(n));
	return t;
}
function $o(e, t) {
	let n = [];
	for (let r, i = -1, a = -1, o = e.buffersLength(); ++i < o;) (r = e.buffers(i)) && (t < h.V4 && (r.bb_pos += 8 * (i + 1)), n[++a] = J.decode(r));
	return n;
}
function es(e) {
	let t = [], n = Math.trunc(e.variadicBufferCountsLength());
	for (let r = 0; r < n; ++r) t.push(D(e.variadicBufferCounts(r)));
	return t;
}
function ts(e, t) {
	let n = [];
	for (let r, i = -1, a = -1, o = e.fieldsLength(); ++i < o;) (r = e.fields(i)) && (n[++a] = K.decode(r, t));
	return n;
}
function ns(e, t) {
	let n = [];
	for (let r, i = -1, a = -1, o = e.childrenLength(); ++i < o;) (r = e.children(i)) && (n[++a] = K.decode(r, t));
	return n;
}
function rs(e, t) {
	let n, r, i, a, o, s;
	return !t || !(s = e.dictionary()) ? (i = ss(e, ns(e, t)), r = new K(e.name(), i, e.nullable(), is(e))) : t.has(n = D(s.id())) ? (a = (a = s.indexType()) ? os(a) : new Bn(), o = new sr(t.get(n), a, n, s.isOrdered()), r = new K(e.name(), o, e.nullable(), is(e))) : (a = (a = s.indexType()) ? os(a) : new Bn(), t.set(n, i = ss(e, ns(e, t))), o = new sr(i, a, n, s.isOrdered()), r = new K(e.name(), o, e.nullable(), is(e))), r || null;
}
function is(e) {
	let t = /* @__PURE__ */ new Map();
	if (e) for (let n, r, i = -1, a = Math.trunc(e.customMetadataLength()); ++i < a;) (n = e.customMetadata(i)) && (r = n.key()) != null && t.set(r, n.value());
	return t;
}
function as(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n, r, i = -1, a = Math.trunc(e.customMetadataLength()); ++i < a;) (n = e.customMetadata(i)) && (r = n.key()) != null && t.set(r, n.value());
	return t;
}
function os(e) {
	return new zn(e.isSigned(), e.bitWidth());
}
function ss(e, t) {
	let n = e.typeType();
	switch (n) {
		case C.NONE: return new Rn();
		case C.Null: return new Rn();
		case C.Binary: return new Hn();
		case C.LargeBinary: return new Un();
		case C.BinaryView: return new k();
		case C.Utf8: return new Wn();
		case C.LargeUtf8: return new Kn();
		case C.Utf8View: return new Gn();
		case C.Bool: return new qn();
		case C.List: return new er((t || [])[0]);
		case C.LargeList: return new tr((t || [])[0]);
		case C.Struct_: return new A(t || []);
	}
	switch (n) {
		case C.Int: {
			let t = e.type(new Ct());
			return new zn(t.isSigned(), t.bitWidth());
		}
		case C.FloatingPoint: return new Vn(e.type(new Nt()).precision());
		case C.Decimal: {
			let t = e.type(new kt());
			return new Jn(t.scale(), t.precision(), t.bitWidth());
		}
		case C.Date: return new Yn(e.type(new Ot()).unit());
		case C.Time: {
			let t = e.type(new Ht());
			return new Xn(t.unit(), t.bitWidth());
		}
		case C.Timestamp: {
			let t = e.type(new Ut());
			return new Zn(t.unit(), t.timezone());
		}
		case C.Interval: return new Qn(e.type(new Pt()).unit());
		case C.Duration: return new $n(e.type(new At()).unit());
		case C.Union: {
			let n = e.type(new Wt());
			return new nr(n.mode(), n.typeIdsArray() || [], t || []);
		}
		case C.FixedSizeBinary: return new rr(e.type(new jt()).byteWidth());
		case C.FixedSizeList: return new ir(e.type(new Mt()).listSize(), (t || [])[0]);
		case C.Map: {
			let n = e.type(new zt());
			return new ar((t || [])[0], n.keysSorted());
		}
	}
	throw Error(`Unrecognized type: "${C[n]}" (${n})`);
}
function cs(e) {
	return e ? new Wo(e.codec(), e.method()) : null;
}
function ls(e, t) {
	let n = t.fields.map((t) => K.encode(e, t));
	qt.startFieldsVector(e, n.length);
	let r = qt.createFieldsVector(e, n), i = t.metadata && t.metadata.size > 0 ? qt.createCustomMetadataVector(e, [...t.metadata].map(([t, n]) => {
		let r = e.createString(`${t}`), i = e.createString(`${n}`);
		return S.startKeyValue(e), S.addKey(e, r), S.addValue(e, i), S.endKeyValue(e);
	})) : -1;
	return qt.startSchema(e), qt.addFields(e, r), qt.addEndianness(e, gs ? xt.Little : xt.Big), i !== -1 && qt.addCustomMetadata(e, i), qt.endSchema(e);
}
function us(e, t) {
	let n = -1, r = -1, i = -1, a = t.type, o = t.typeId;
	O.isDictionary(a) ? (o = a.dictionary.typeId, i = To.visit(a, e), r = To.visit(a.dictionary, e)) : r = To.visit(a, e);
	let s = (a.children || []).map((t) => K.encode(e, t)), c = w.createChildrenVector(e, s), l = t.metadata && t.metadata.size > 0 ? w.createCustomMetadataVector(e, [...t.metadata].map(([t, n]) => {
		let r = e.createString(`${t}`), i = e.createString(`${n}`);
		return S.startKeyValue(e), S.addKey(e, r), S.addValue(e, i), S.endKeyValue(e);
	})) : -1;
	return t.name && (n = e.createString(t.name)), w.startField(e), w.addType(e, r), w.addTypeType(e, o), w.addChildren(e, c), w.addNullable(e, !!t.nullable), n !== -1 && w.addName(e, n), i !== -1 && w.addDictionary(e, i), l !== -1 && w.addCustomMetadata(e, l), w.endField(e);
}
function ds(e, t) {
	let n = t.nodes || [], r = t.buffers || [], i = t.variadicBufferCounts || [];
	x.startNodesVector(e, n.length);
	for (let t of n.slice().reverse()) Uo.encode(e, t);
	let a = e.endVector();
	x.startBuffersVector(e, r.length);
	for (let t of r.slice().reverse()) J.encode(e, t);
	let o = e.endVector(), s = null;
	t.compression !== null && (s = fs(e, t.compression));
	let c = -1;
	return i.length > 0 && (c = x.createVariadicBufferCountsVector(e, i.map(BigInt))), x.startRecordBatch(e), x.addLength(e, BigInt(t.length)), x.addNodes(e, a), x.addBuffers(e, o), t.compression !== null && s && x.addCompression(e, s), c !== -1 && x.addVariadicBufferCounts(e, c), x.endRecordBatch(e);
}
function fs(e, t) {
	return _t.startBodyCompression(e), _t.addCodec(e, t.type), _t.addMethod(e, t.method), _t.endBodyCompression(e);
}
function ps(e, t) {
	let n = q.encode(e, t.data);
	return bt.startDictionaryBatch(e), bt.addId(e, BigInt(t.id)), bt.addIsDelta(e, t.isDelta), bt.addData(e, n), bt.endDictionaryBatch(e);
}
function ms(e, t) {
	return yt.createFieldNode(e, BigInt(t.length), BigInt(t.nullCount));
}
function hs(e, t) {
	return vt.createBuffer(e, BigInt(t.offset), BigInt(t.length));
}
var gs = (() => {
	let e = /* @__PURE__ */ new ArrayBuffer(2);
	return new DataView(e).setInt16(0, 256, !0), new Int16Array(e)[0] === 256;
})(), Y = Object.freeze({
	done: !0,
	value: void 0
}), _s = class {
	constructor(e) {
		this._json = e;
	}
	get schema() {
		return this._json.schema;
	}
	get batches() {
		return this._json.batches || [];
	}
	get dictionaries() {
		return this._json.dictionaries || [];
	}
}, vs = class {
	tee() {
		return this._getDOMStream().tee();
	}
	pipe(e, t) {
		return this._getNodeStream().pipe(e, t);
	}
	pipeTo(e, t) {
		return this._getDOMStream().pipeTo(e, t);
	}
	pipeThrough(e, t) {
		return this._getDOMStream().pipeThrough(e, t);
	}
	_getDOMStream() {
		return this._DOMStream ||= this.toDOMStream();
	}
	_getNodeStream() {
		return this._nodeStream ||= this.toNodeStream();
	}
}, ys = class extends vs {
	constructor() {
		super(), this._values = [], this.resolvers = [], this._closedPromise = new Promise((e) => this._closedPromiseResolve = e);
	}
	get closed() {
		return this._closedPromise;
	}
	cancel(t) {
		return e(this, void 0, void 0, function* () {
			yield this.return(t);
		});
	}
	write(e) {
		this._ensureOpen() && (this.resolvers.length <= 0 ? this._values.push(e) : this.resolvers.shift().resolve({
			done: !1,
			value: e
		}));
	}
	abort(e) {
		this._closedPromiseResolve && (this.resolvers.length <= 0 ? this._error = { error: e } : this.resolvers.shift().reject({
			done: !0,
			value: e
		}));
	}
	close() {
		if (this._closedPromiseResolve) {
			let { resolvers: e } = this;
			for (; e.length > 0;) e.shift().resolve(Y);
			this._closedPromiseResolve(), this._closedPromiseResolve = void 0;
		}
	}
	[Symbol.asyncIterator]() {
		return this;
	}
	toDOMStream(e) {
		return Xe.toDOMStream(this._closedPromiseResolve || this._error ? this : this._values, e);
	}
	toNodeStream(e) {
		return Xe.toNodeStream(this._closedPromiseResolve || this._error ? this : this._values, e);
	}
	throw(t) {
		return e(this, void 0, void 0, function* () {
			return yield this.abort(t), Y;
		});
	}
	return(t) {
		return e(this, void 0, void 0, function* () {
			return yield this.close(), Y;
		});
	}
	read(t) {
		return e(this, void 0, void 0, function* () {
			return (yield this.next(t, "read")).value;
		});
	}
	peek(t) {
		return e(this, void 0, void 0, function* () {
			return (yield this.next(t, "peek")).value;
		});
	}
	next(...e) {
		return this._values.length > 0 ? Promise.resolve({
			done: !1,
			value: this._values.shift()
		}) : this._error ? Promise.reject({
			done: !0,
			value: this._error.error
		}) : this._closedPromiseResolve ? new Promise((e, t) => {
			this.resolvers.push({
				resolve: e,
				reject: t
			});
		}) : Promise.resolve(Y);
	}
	_ensureOpen() {
		if (this._closedPromiseResolve) return !0;
		throw Error("AsyncQueue is closed");
	}
}, bs = class extends ys {
	write(e) {
		if ((e = m(e)).byteLength > 0) return super.write(e);
	}
	toString(e = !1) {
		return e ? s(this.toUint8Array(!0)) : this.toUint8Array(!1).then(s);
	}
	toUint8Array(t = !1) {
		return t ? he(this._values)[0] : e(this, void 0, void 0, function* () {
			var e, t, n, r;
			let i = [], o = 0;
			try {
				for (var s = !0, c = a(this), l; l = yield c.next(), e = l.done, !e; s = !0) {
					r = l.value, s = !1;
					let e = r;
					i.push(e), o += e.byteLength;
				}
			} catch (e) {
				t = { error: e };
			} finally {
				try {
					!s && !e && (n = c.return) && (yield n.call(c));
				} finally {
					if (t) throw t.error;
				}
			}
			return he(i, o)[0];
		});
	}
}, xs = class {
	constructor(e) {
		e && (this.source = new Cs(Xe.fromIterable(e)));
	}
	[Symbol.iterator]() {
		return this;
	}
	next(e) {
		return this.source.next(e);
	}
	throw(e) {
		return this.source.throw(e);
	}
	return(e) {
		return this.source.return(e);
	}
	peek(e) {
		return this.source.peek(e);
	}
	read(e) {
		return this.source.read(e);
	}
}, Ss = class e {
	constructor(t) {
		t instanceof e ? this.source = t.source : t instanceof bs ? this.source = new ws(Xe.fromAsyncIterable(t)) : ue(t) ? this.source = new ws(Xe.fromNodeStream(t)) : le(t) ? this.source = new ws(Xe.fromDOMStream(t)) : se(t) ? this.source = new ws(Xe.fromDOMStream(t.body)) : ne(t) ? this.source = new ws(Xe.fromIterable(t)) : (te(t) || re(t)) && (this.source = new ws(Xe.fromAsyncIterable(t)));
	}
	[Symbol.asyncIterator]() {
		return this;
	}
	next(e) {
		return this.source.next(e);
	}
	throw(e) {
		return this.source.throw(e);
	}
	return(e) {
		return this.source.return(e);
	}
	get closed() {
		return this.source.closed;
	}
	cancel(e) {
		return this.source.cancel(e);
	}
	peek(e) {
		return this.source.peek(e);
	}
	read(e) {
		return this.source.read(e);
	}
}, Cs = class {
	constructor(e) {
		this.source = e;
	}
	cancel(e) {
		this.return(e);
	}
	peek(e) {
		return this.next(e, "peek").value;
	}
	read(e) {
		return this.next(e, "read").value;
	}
	next(e, t = "read") {
		return this.source.next({
			cmd: t,
			size: e
		});
	}
	throw(e) {
		return Object.create(this.source.throw && this.source.throw(e) || Y);
	}
	return(e) {
		return Object.create(this.source.return && this.source.return(e) || Y);
	}
}, ws = class {
	constructor(e) {
		this.source = e, this._closedPromise = new Promise((e) => this._closedPromiseResolve = e);
	}
	cancel(t) {
		return e(this, void 0, void 0, function* () {
			yield this.return(t);
		});
	}
	get closed() {
		return this._closedPromise;
	}
	read(t) {
		return e(this, void 0, void 0, function* () {
			return (yield this.next(t, "read")).value;
		});
	}
	peek(t) {
		return e(this, void 0, void 0, function* () {
			return (yield this.next(t, "peek")).value;
		});
	}
	next(t) {
		return e(this, arguments, void 0, function* (e, t = "read") {
			return yield this.source.next({
				cmd: t,
				size: e
			});
		});
	}
	throw(t) {
		return e(this, void 0, void 0, function* () {
			let e = this.source.throw && (yield this.source.throw(t)) || Y;
			return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e);
		});
	}
	return(t) {
		return e(this, void 0, void 0, function* () {
			let e = this.source.return && (yield this.source.return(t)) || Y;
			return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e);
		});
	}
}, Ts = class extends xs {
	constructor(e, t) {
		super(), this.position = 0, this.buffer = m(e), this.size = t === void 0 ? this.buffer.byteLength : t;
	}
	readInt32(e) {
		let { buffer: t, byteOffset: n } = this.readAt(e, 4);
		return new DataView(t, n).getInt32(0, !0);
	}
	seek(e) {
		return this.position = Math.min(e, this.size), e < this.size;
	}
	read(e) {
		let { buffer: t, size: n, position: r } = this;
		return t && r < n ? (typeof e != "number" && (e = Infinity), this.position = Math.min(n, r + Math.min(n - r, e)), t.subarray(r, this.position)) : null;
	}
	readAt(e, t) {
		let n = this.buffer, r = Math.min(this.size, e + t);
		return n ? n.subarray(e, r) : new Uint8Array(t);
	}
	close() {
		this.buffer &&= null;
	}
	throw(e) {
		return this.close(), {
			done: !0,
			value: e
		};
	}
	return(e) {
		return this.close(), {
			done: !0,
			value: e
		};
	}
}, Es = class extends Ss {
	constructor(t, n) {
		super(), this.position = 0, this._handle = t, typeof n == "number" ? this.size = n : this._pending = e(this, void 0, void 0, function* () {
			this.size = (yield t.stat()).size, delete this._pending;
		});
	}
	readInt32(t) {
		return e(this, void 0, void 0, function* () {
			let { buffer: e, byteOffset: n } = yield this.readAt(t, 4);
			return new DataView(e, n).getInt32(0, !0);
		});
	}
	seek(t) {
		return e(this, void 0, void 0, function* () {
			return this._pending && (yield this._pending), this.position = Math.min(t, this.size), t < this.size;
		});
	}
	read(t) {
		return e(this, void 0, void 0, function* () {
			this._pending && (yield this._pending);
			let { _handle: e, size: n, position: r } = this;
			if (e && r < n) {
				typeof t != "number" && (t = Infinity);
				let i = r, a = 0, o = 0, s = Math.min(n, i + Math.min(n - i, t)), c = new Uint8Array(Math.max(0, (this.position = s) - i));
				for (; (i += o) < s && (a += o) < c.byteLength;) ({bytesRead: o} = yield e.read(c, a, c.byteLength - a, i));
				return c;
			}
			return null;
		});
	}
	readAt(t, n) {
		return e(this, void 0, void 0, function* () {
			this._pending && (yield this._pending);
			let { _handle: e, size: r } = this;
			if (e && t + n < r) {
				let i = Math.min(r, t + n), a = new Uint8Array(i - t);
				return (yield e.read(a, 0, n, t)).buffer;
			}
			return new Uint8Array(n);
		});
	}
	close() {
		return e(this, void 0, void 0, function* () {
			let e = this._handle;
			this._handle = null, e && (yield e.close());
		});
	}
	throw(t) {
		return e(this, void 0, void 0, function* () {
			return yield this.close(), {
				done: !0,
				value: t
			};
		});
	}
	return(t) {
		return e(this, void 0, void 0, function* () {
			return yield this.close(), {
				done: !0,
				value: t
			};
		});
	}
}, Ds = 65536;
function Os(e) {
	return e < 0 && (e = 4294967295 + e + 1), `0x${e.toString(16)}`;
}
var ks = 8, As = [
	1,
	10,
	100,
	1e3,
	1e4,
	1e5,
	1e6,
	1e7,
	1e8
], js = class {
	constructor(e) {
		this.buffer = e;
	}
	high() {
		return this.buffer[1];
	}
	low() {
		return this.buffer[0];
	}
	_times(e) {
		let t = new Uint32Array([
			this.buffer[1] >>> 16,
			this.buffer[1] & 65535,
			this.buffer[0] >>> 16,
			this.buffer[0] & 65535
		]), n = new Uint32Array([
			e.buffer[1] >>> 16,
			e.buffer[1] & 65535,
			e.buffer[0] >>> 16,
			e.buffer[0] & 65535
		]), r = t[3] * n[3];
		this.buffer[0] = r & 65535;
		let i = r >>> 16;
		return r = t[2] * n[3], i += r, r = t[3] * n[2] >>> 0, i += r, this.buffer[0] += i << 16, this.buffer[1] = i >>> 0 < r ? Ds : 0, this.buffer[1] += i >>> 16, this.buffer[1] += t[1] * n[3] + t[2] * n[2] + t[3] * n[1], this.buffer[1] += t[0] * n[3] + t[1] * n[2] + t[2] * n[1] + t[3] * n[0] << 16, this;
	}
	_plus(e) {
		let t = this.buffer[0] + e.buffer[0] >>> 0;
		this.buffer[1] += e.buffer[1], t < this.buffer[0] >>> 0 && ++this.buffer[1], this.buffer[0] = t;
	}
	lessThan(e) {
		return this.buffer[1] < e.buffer[1] || this.buffer[1] === e.buffer[1] && this.buffer[0] < e.buffer[0];
	}
	equals(e) {
		return this.buffer[1] === e.buffer[1] && this.buffer[0] == e.buffer[0];
	}
	greaterThan(e) {
		return e.lessThan(this);
	}
	hex() {
		return `${Os(this.buffer[1])} ${Os(this.buffer[0])}`;
	}
}, X = class e extends js {
	times(e) {
		return this._times(e), this;
	}
	plus(e) {
		return this._plus(e), this;
	}
	static from(t, n = /* @__PURE__ */ new Uint32Array(2)) {
		return e.fromString(typeof t == "string" ? t : t.toString(), n);
	}
	static fromNumber(t, n = /* @__PURE__ */ new Uint32Array(2)) {
		return e.fromString(t.toString(), n);
	}
	static fromString(t, n = /* @__PURE__ */ new Uint32Array(2)) {
		let r = t.length, i = new e(n);
		for (let n = 0; n < r;) {
			let a = ks < r - n ? ks : r - n, o = new e(new Uint32Array([Number.parseInt(t.slice(n, n + a), 10), 0])), s = new e(new Uint32Array([As[a], 0]));
			i.times(s), i.plus(o), n += a;
		}
		return i;
	}
	static convertArray(t) {
		let n = new Uint32Array(t.length * 2);
		for (let r = -1, i = t.length; ++r < i;) e.from(t[r], new Uint32Array(n.buffer, n.byteOffset + 2 * r * 4, 2));
		return n;
	}
	static multiply(t, n) {
		return new e(new Uint32Array(t.buffer)).times(n);
	}
	static add(t, n) {
		return new e(new Uint32Array(t.buffer)).plus(n);
	}
}, Ms = class e extends js {
	negate() {
		return this.buffer[0] = ~this.buffer[0] + 1, this.buffer[1] = ~this.buffer[1], this.buffer[0] == 0 && ++this.buffer[1], this;
	}
	times(e) {
		return this._times(e), this;
	}
	plus(e) {
		return this._plus(e), this;
	}
	lessThan(e) {
		let t = this.buffer[1] << 0, n = e.buffer[1] << 0;
		return t < n || t === n && this.buffer[0] < e.buffer[0];
	}
	static from(t, n = /* @__PURE__ */ new Uint32Array(2)) {
		return e.fromString(typeof t == "string" ? t : t.toString(), n);
	}
	static fromNumber(t, n = /* @__PURE__ */ new Uint32Array(2)) {
		return e.fromString(t.toString(), n);
	}
	static fromString(t, n = /* @__PURE__ */ new Uint32Array(2)) {
		let r = t.startsWith("-"), i = t.length, a = new e(n);
		for (let n = +!!r; n < i;) {
			let r = ks < i - n ? ks : i - n, o = new e(new Uint32Array([Number.parseInt(t.slice(n, n + r), 10), 0])), s = new e(new Uint32Array([As[r], 0]));
			a.times(s), a.plus(o), n += r;
		}
		return r ? a.negate() : a;
	}
	static convertArray(t) {
		let n = new Uint32Array(t.length * 2);
		for (let r = -1, i = t.length; ++r < i;) e.from(t[r], new Uint32Array(n.buffer, n.byteOffset + 2 * r * 4, 2));
		return n;
	}
	static multiply(t, n) {
		return new e(new Uint32Array(t.buffer)).times(n);
	}
	static add(t, n) {
		return new e(new Uint32Array(t.buffer)).plus(n);
	}
}, Ns = class e {
	constructor(e) {
		this.buffer = e;
	}
	high() {
		return new Ms(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
	}
	low() {
		return new Ms(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2));
	}
	negate() {
		return this.buffer[0] = ~this.buffer[0] + 1, this.buffer[1] = ~this.buffer[1], this.buffer[2] = ~this.buffer[2], this.buffer[3] = ~this.buffer[3], this.buffer[0] == 0 && ++this.buffer[1], this.buffer[1] == 0 && ++this.buffer[2], this.buffer[2] == 0 && ++this.buffer[3], this;
	}
	times(e) {
		let t = new X(new Uint32Array([this.buffer[3], 0])), n = new X(new Uint32Array([this.buffer[2], 0])), r = new X(new Uint32Array([this.buffer[1], 0])), i = new X(new Uint32Array([this.buffer[0], 0])), a = new X(new Uint32Array([e.buffer[3], 0])), o = new X(new Uint32Array([e.buffer[2], 0])), s = new X(new Uint32Array([e.buffer[1], 0])), c = new X(new Uint32Array([e.buffer[0], 0])), l = X.multiply(i, c);
		this.buffer[0] = l.low();
		let u = new X(new Uint32Array([l.high(), 0]));
		return l = X.multiply(r, c), u.plus(l), l = X.multiply(i, s), u.plus(l), this.buffer[1] = u.low(), this.buffer[3] = +!!u.lessThan(l), this.buffer[2] = u.high(), new X(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2)).plus(X.multiply(n, c)).plus(X.multiply(r, s)).plus(X.multiply(i, o)), this.buffer[3] += X.multiply(t, c).plus(X.multiply(n, s)).plus(X.multiply(r, o)).plus(X.multiply(i, a)).low(), this;
	}
	plus(e) {
		let t = /* @__PURE__ */ new Uint32Array(4);
		return t[3] = this.buffer[3] + e.buffer[3] >>> 0, t[2] = this.buffer[2] + e.buffer[2] >>> 0, t[1] = this.buffer[1] + e.buffer[1] >>> 0, t[0] = this.buffer[0] + e.buffer[0] >>> 0, t[0] < this.buffer[0] >>> 0 && ++t[1], t[1] < this.buffer[1] >>> 0 && ++t[2], t[2] < this.buffer[2] >>> 0 && ++t[3], this.buffer[3] = t[3], this.buffer[2] = t[2], this.buffer[1] = t[1], this.buffer[0] = t[0], this;
	}
	hex() {
		return `${Os(this.buffer[3])} ${Os(this.buffer[2])} ${Os(this.buffer[1])} ${Os(this.buffer[0])}`;
	}
	static multiply(t, n) {
		return new e(new Uint32Array(t.buffer)).times(n);
	}
	static add(t, n) {
		return new e(new Uint32Array(t.buffer)).plus(n);
	}
	static from(t, n = /* @__PURE__ */ new Uint32Array(4)) {
		return e.fromString(typeof t == "string" ? t : t.toString(), n);
	}
	static fromNumber(t, n = /* @__PURE__ */ new Uint32Array(4)) {
		return e.fromString(t.toString(), n);
	}
	static fromString(t, n = /* @__PURE__ */ new Uint32Array(4)) {
		let r = t.startsWith("-"), i = t.length, a = new e(n);
		for (let n = +!!r; n < i;) {
			let r = ks < i - n ? ks : i - n, o = new e(new Uint32Array([
				Number.parseInt(t.slice(n, n + r), 10),
				0,
				0,
				0
			])), s = new e(new Uint32Array([
				As[r],
				0,
				0,
				0
			]));
			a.times(s), a.plus(o), n += r;
		}
		return r ? a.negate() : a;
	}
	static convertArray(t) {
		let n = new Uint32Array(t.length * 4);
		for (let r = -1, i = t.length; ++r < i;) e.from(t[r], new Uint32Array(n.buffer, n.byteOffset + 16 * r, 4));
		return n;
	}
}, Ps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	BaseInt64: js,
	Int128: Ns,
	Int64: Ms,
	Uint64: X
}, Symbol.toStringTag, { value: "Module" }));
function Fs(e) {
	let t = e.length, n = new Int32Array(t * 2);
	for (let r = 0, i = 0; r < t; r++) {
		let t = e[r];
		n[i++] = t.days ?? 0, n[i++] = t.milliseconds ?? 0;
	}
	return n;
}
function Is(e) {
	let t = e.length, n = new Int32Array(t * 4);
	for (let r = 0, i = 0; r < t; r++) {
		let t = e[r];
		n[i++] = t.months ?? 0, n[i++] = t.days ?? 0;
		let a = t.nanoseconds;
		if (a) {
			let e = BigInt(a);
			n[i++] = Number(e & BigInt(4294967295)) >>> 0, n[i++] = Number(e >> BigInt(32)) >>> 0;
		} else i += 2;
	}
	return n;
}
function Ls(e) {
	let t = e.length, n = Array(t / 2);
	for (let r = 0, i = 0; r < t; r += 2) n[i++] = {
		days: e[r],
		milliseconds: e[r + 1]
	};
	return n;
}
function Rs(e, t) {
	let n = e.length, r = Array(n / 4);
	for (let i = 0, a = 0; i < n; i += 4) {
		let n = BigInt(e[i + 3]) << BigInt(32) | BigInt(e[i + 2] >>> 0);
		r[a++] = {
			months: e[i],
			days: e[i + 1],
			nanoseconds: t ? `${n}` : n
		};
	}
	return r;
}
var zs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	toIntervalDayTimeInt32Array: Fs,
	toIntervalDayTimeObjects: Ls,
	toIntervalMonthDayNanoInt32Array: Is,
	toIntervalMonthDayNanoObjects: Rs
}, Symbol.toStringTag, { value: "Module" })), Bs = class extends j {
	constructor(e, t, n, r, i = h.V5, a = []) {
		super(), this.nodesIndex = -1, this.buffersIndex = -1, this.variadicBufferIndex = -1, this.bytes = e, this.nodes = t, this.buffers = n, this.dictionaries = r, this.metadataVersion = i, this.variadicBufferCounts = a;
	}
	visit(e) {
		return super.visit(e instanceof K ? e.type : e);
	}
	visitNull(e, { length: t } = this.nextFieldNode()) {
		return z({
			type: e,
			length: t
		});
	}
	visitBool(e, { length: t, nullCount: n } = this.nextFieldNode()) {
		return z({
			type: e,
			length: t,
			nullCount: n,
			nullBitmap: this.readNullBitmap(e, n),
			data: this.readData(e)
		});
	}
	visitInt(e, { length: t, nullCount: n } = this.nextFieldNode()) {
		return z({
			type: e,
			length: t,
			nullCount: n,
			nullBitmap: this.readNullBitmap(e, n),
			data: this.readData(e)
		});
	}
	visitFloat(e, { length: t, nullCount: n } = this.nextFieldNode()) {
		return z({
			type: e,
			length: t,
			nullCount: n,
			nullBitmap: this.readNullBitmap(e, n),
			data: this.readData(e)
		});
	}
	visitUtf8(e, { length: t, nullCount: n } = this.nextFieldNode()) {
		return z({
			type: e,
			length: t,
			nullCount: n,
			nullBitmap: this.readNullBitmap(e, n),
			valueOffsets: this.readOffsets(e),
			data: this.readData(e)
		});
	}
	visitLargeUtf8(e, { length: t, nullCount: n } = this.nextFieldNode()) {
		return z({
			type: e,
			length: t,
			nullCount: n,
			nullBitmap: this.readNullBitmap(e, n),
			valueOffsets: this.readOffsets(e),
			data: this.readData(e)
		});
	}
	visitUtf8View(e, { length: t, nullCount: n } = this.nextFieldNode()) {
		return z({
			type: e,
			length: t,
			nullCount: n,
			nullBitmap: this.readNullBitmap(e, n),
			views: this.readData(e),
			variadicBuffers: this.readVariadicBuffers(this.nextVariadicBufferCount())
		});
	}
	visitBinary(e, { length: t, nullCount: n } = this.nextFieldNode()) {
		return z({
			type: e,
			length: t,
			nullCount: n,
			nullBitmap: this.readNullBitmap(e, n),
			valueOffsets: this.readOffsets(e),
			data: this.readData(e)
		});
	}
	visitLargeBinary(e, { length: t, nullCount: n } = this.nextFieldNode()) {
		return z({
			type: e,
			length: t,
			nullCount: n,
			nullBitmap: this.readNullBitmap(e, n),
			valueOffsets: this.readOffsets(e),
			data: this.readData(e)
		});
	}
	visitBinaryView(e, { length: t, nullCount: n } = this.nextFieldNode()) {
		return z({
			type: e,
			length: t,
			nullCount: n,
			nullBitmap: this.readNullBitmap(e, n),
			views: this.readData(e),
			variadicBuffers: this.readVariadicBuffers(this.nextVariadicBufferCount())
		});
	}
	visitFixedSizeBinary(e, { length: t, nullCount: n } = this.nextFieldNode()) {
		return z({
			type: e,
			length: t,
			nullCount: n,
			nullBitmap: this.readNullBitmap(e, n),
			data: this.readData(e)
		});
	}
	visitDate(e, { length: t, nullCount: n } = this.nextFieldNode()) {
		return z({
			type: e,
			length: t,
			nullCount: n,
			nullBitmap: this.readNullBitmap(e, n),
			data: this.readData(e)
		});
	}
	visitTimestamp(e, { length: t, nullCount: n } = this.nextFieldNode()) {
		return z({
			type: e,
			length: t,
			nullCount: n,
			nullBitmap: this.readNullBitmap(e, n),
			data: this.readData(e)
		});
	}
	visitTime(e, { length: t, nullCount: n } = this.nextFieldNode()) {
		return z({
			type: e,
			length: t,
			nullCount: n,
			nullBitmap: this.readNullBitmap(e, n),
			data: this.readData(e)
		});
	}
	visitDecimal(e, { length: t, nullCount: n } = this.nextFieldNode()) {
		return z({
			type: e,
			length: t,
			nullCount: n,
			nullBitmap: this.readNullBitmap(e, n),
			data: this.readData(e)
		});
	}
	visitList(e, { length: t, nullCount: n } = this.nextFieldNode()) {
		return z({
			type: e,
			length: t,
			nullCount: n,
			nullBitmap: this.readNullBitmap(e, n),
			valueOffsets: this.readOffsets(e),
			child: this.visit(e.children[0])
		});
	}
	visitLargeList(e, { length: t, nullCount: n } = this.nextFieldNode()) {
		return z({
			type: e,
			length: t,
			nullCount: n,
			nullBitmap: this.readNullBitmap(e, n),
			valueOffsets: this.readOffsets(e),
			child: this.visit(e.children[0])
		});
	}
	visitStruct(e, { length: t, nullCount: n } = this.nextFieldNode()) {
		return z({
			type: e,
			length: t,
			nullCount: n,
			nullBitmap: this.readNullBitmap(e, n),
			children: this.visitMany(e.children)
		});
	}
	visitUnion(e, { length: t, nullCount: n } = this.nextFieldNode()) {
		return this.metadataVersion < h.V5 && this.readNullBitmap(e, n), e.mode === g.Sparse ? this.visitSparseUnion(e, {
			length: t,
			nullCount: n
		}) : this.visitDenseUnion(e, {
			length: t,
			nullCount: n
		});
	}
	visitDenseUnion(e, { length: t, nullCount: n } = this.nextFieldNode()) {
		return z({
			type: e,
			length: t,
			nullCount: n,
			typeIds: this.readTypeIds(e),
			valueOffsets: this.readOffsets(e),
			children: this.visitMany(e.children)
		});
	}
	visitSparseUnion(e, { length: t, nullCount: n } = this.nextFieldNode()) {
		return z({
			type: e,
			length: t,
			nullCount: n,
			typeIds: this.readTypeIds(e),
			children: this.visitMany(e.children)
		});
	}
	visitDictionary(e, { length: t, nullCount: n } = this.nextFieldNode()) {
		return z({
			type: e,
			length: t,
			nullCount: n,
			nullBitmap: this.readNullBitmap(e, n),
			data: this.readData(e.indices),
			dictionary: this.readDictionary(e)
		});
	}
	visitInterval(e, { length: t, nullCount: n } = this.nextFieldNode()) {
		return z({
			type: e,
			length: t,
			nullCount: n,
			nullBitmap: this.readNullBitmap(e, n),
			data: this.readData(e)
		});
	}
	visitDuration(e, { length: t, nullCount: n } = this.nextFieldNode()) {
		return z({
			type: e,
			length: t,
			nullCount: n,
			nullBitmap: this.readNullBitmap(e, n),
			data: this.readData(e)
		});
	}
	visitFixedSizeList(e, { length: t, nullCount: n } = this.nextFieldNode()) {
		return z({
			type: e,
			length: t,
			nullCount: n,
			nullBitmap: this.readNullBitmap(e, n),
			child: this.visit(e.children[0])
		});
	}
	visitMap(e, { length: t, nullCount: n } = this.nextFieldNode()) {
		return z({
			type: e,
			length: t,
			nullCount: n,
			nullBitmap: this.readNullBitmap(e, n),
			valueOffsets: this.readOffsets(e),
			child: this.visit(e.children[0])
		});
	}
	nextFieldNode() {
		return this.nodes[++this.nodesIndex];
	}
	nextBufferRange() {
		return this.buffers[++this.buffersIndex];
	}
	readNullBitmap(e, t, n = this.nextBufferRange()) {
		return t > 0 && this.readData(e, n) || /* @__PURE__ */ new Uint8Array();
	}
	readOffsets(e, t) {
		return this.readData(e, t);
	}
	readTypeIds(e, t) {
		return this.readData(e, t);
	}
	readData(e, { length: t, offset: n } = this.nextBufferRange()) {
		return this.bytes.subarray(n, n + t);
	}
	readVariadicBuffers(e) {
		return Array.from({ length: e }, () => this.readData(null));
	}
	nextVariadicBufferCount() {
		return this.variadicBufferCounts[++this.variadicBufferIndex] ?? 0;
	}
	readDictionary(e) {
		return this.dictionaries.get(e.id);
	}
}, Vs = class extends Bs {
	constructor(e, t, n, r, i, a = []) {
		super(/* @__PURE__ */ new Uint8Array(), t, n, r, i, a), this.sources = e;
	}
	readNullBitmap(e, t, { offset: n } = this.nextBufferRange()) {
		return t <= 0 ? /* @__PURE__ */ new Uint8Array() : Ia(this.sources[n]);
	}
	readOffsets(e, { offset: t } = this.nextBufferRange()) {
		return p(Uint8Array, p(e.OffsetArrayType, this.sources[t]));
	}
	readTypeIds(e, { offset: t } = this.nextBufferRange()) {
		return p(Uint8Array, p(e.ArrayType, this.sources[t]));
	}
	readData(e, { offset: t } = this.nextBufferRange()) {
		let { sources: n } = this;
		if (O.isTimestamp(e) || (O.isInt(e) || O.isTime(e)) && e.bitWidth === 64 || O.isDuration(e) || O.isDate(e) && e.unit === it.MILLISECOND) return p(Uint8Array, Ms.convertArray(n[t]));
		if (O.isDecimal(e)) return p(Uint8Array, Ns.convertArray(n[t]));
		if (O.isBinary(e) || O.isLargeBinary(e) || O.isFixedSizeBinary(e)) return Us(n[t]);
		if (O.isBinaryView(e)) return Gs(n[t]);
		if (O.isUtf8View(e)) return Ks(n[t]);
		if (O.isBool(e)) return Ia(n[t]);
		if (O.isUtf8(e) || O.isLargeUtf8(e)) return l(n[t].join(""));
		if (O.isInterval(e)) switch (e.unit) {
			case y.DAY_TIME: return Fs(n[t]);
			case y.MONTH_DAY_NANO: return Is(n[t]);
		}
		return p(Uint8Array, p(e.ArrayType, n[t].map((e) => +e)));
	}
	readVariadicBuffers(e) {
		let t = [];
		for (let n = 0; n < e; n++) {
			let { offset: e } = this.nextBufferRange(), n = this.sources[e];
			t.push(Hs(n));
		}
		return t;
	}
};
function Hs(e) {
	let t = new Uint8Array(e.length / 2);
	for (let n = 0; n < e.length; n += 2) t[n >> 1] = Number.parseInt(e.slice(n, n + 2), 16);
	return t;
}
function Us(e) {
	return Hs(e.join(""));
}
function Ws(e, t) {
	let n = new Uint8Array(e.length * 16), r = new DataView(n.buffer);
	for (let [i, a] of e.entries()) {
		let e = i * 16, o = a.SIZE;
		if (r.setInt32(e, o, !0), a.INLINED !== void 0) {
			let r = t(a.INLINED);
			for (let t = 0; t < r.length && t < 12; t++) n[e + 4 + t] = r[t];
		} else {
			let t = a.PREFIX_HEX;
			for (let r = 0; r < 8 && r < t.length; r += 2) n[e + 4 + (r >> 1)] = Number.parseInt(t.slice(r, r + 2), 16);
			r.setInt32(e + 8, a.BUFFER_INDEX, !0), r.setInt32(e + 12, a.OFFSET, !0);
		}
	}
	return n;
}
function Gs(e) {
	return Ws(e, (e) => {
		let t = new Uint8Array(e.length / 2);
		for (let n = 0; n < e.length; n += 2) t[n >> 1] = Number.parseInt(e.slice(n, n + 2), 16);
		return t;
	});
}
function Ks(e) {
	return Ws(e, (e) => new TextEncoder().encode(e));
}
var qs = class extends Bs {
	constructor(e, t, n, r, i, a = []) {
		super(/* @__PURE__ */ new Uint8Array(), t, n, r, i, a), this.bodyChunks = e;
	}
	readData(e, t = this.nextBufferRange()) {
		return this.bodyChunks[this.buffersIndex];
	}
}, Z = class extends j {
	compareSchemas(e, t) {
		return e === t || t instanceof e.constructor && this.compareManyFields(e.fields, t.fields);
	}
	compareManyFields(e, t) {
		return e === t || Array.isArray(e) && Array.isArray(t) && e.length === t.length && e.every((e, n) => this.compareFields(e, t[n]));
	}
	compareFields(e, t) {
		return e === t || t instanceof e.constructor && e.name === t.name && e.nullable === t.nullable && this.visit(e.type, t.type);
	}
};
function Q(e, t) {
	return t instanceof e.constructor;
}
function Js(e, t) {
	return e === t || Q(e, t);
}
function Ys(e, t) {
	return e === t || Q(e, t) && e.bitWidth === t.bitWidth && e.isSigned === t.isSigned;
}
function Xs(e, t) {
	return e === t || Q(e, t) && e.precision === t.precision;
}
function Zs(e, t) {
	return e === t || Q(e, t) && e.byteWidth === t.byteWidth;
}
function Qs(e, t) {
	return e === t || Q(e, t) && e.unit === t.unit;
}
function $s(e, t) {
	return e === t || Q(e, t) && e.unit === t.unit && e.timezone === t.timezone;
}
function ec(e, t) {
	return e === t || Q(e, t) && e.unit === t.unit && e.bitWidth === t.bitWidth;
}
function tc(e, t) {
	return e === t || Q(e, t) && e.children.length === t.children.length && lc.compareManyFields(e.children, t.children);
}
function nc(e, t) {
	return e === t || Q(e, t) && e.children.length === t.children.length && lc.compareManyFields(e.children, t.children);
}
function rc(e, t) {
	return e === t || Q(e, t) && e.mode === t.mode && e.typeIds.every((e, n) => e === t.typeIds[n]) && lc.compareManyFields(e.children, t.children);
}
function ic(e, t) {
	return e === t || Q(e, t) && e.id === t.id && e.isOrdered === t.isOrdered && lc.visit(e.indices, t.indices) && lc.visit(e.dictionary, t.dictionary);
}
function ac(e, t) {
	return e === t || Q(e, t) && e.unit === t.unit;
}
function oc(e, t) {
	return e === t || Q(e, t) && e.unit === t.unit;
}
function sc(e, t) {
	return e === t || Q(e, t) && e.listSize === t.listSize && e.children.length === t.children.length && lc.compareManyFields(e.children, t.children);
}
function cc(e, t) {
	return e === t || Q(e, t) && e.keysSorted === t.keysSorted && e.children.length === t.children.length && lc.compareManyFields(e.children, t.children);
}
Z.prototype.visitNull = Js, Z.prototype.visitBool = Js, Z.prototype.visitInt = Ys, Z.prototype.visitInt8 = Ys, Z.prototype.visitInt16 = Ys, Z.prototype.visitInt32 = Ys, Z.prototype.visitInt64 = Ys, Z.prototype.visitUint8 = Ys, Z.prototype.visitUint16 = Ys, Z.prototype.visitUint32 = Ys, Z.prototype.visitUint64 = Ys, Z.prototype.visitFloat = Xs, Z.prototype.visitFloat16 = Xs, Z.prototype.visitFloat32 = Xs, Z.prototype.visitFloat64 = Xs, Z.prototype.visitUtf8 = Js, Z.prototype.visitLargeUtf8 = Js, Z.prototype.visitUtf8View = Js, Z.prototype.visitBinary = Js, Z.prototype.visitLargeBinary = Js, Z.prototype.visitBinaryView = Js, Z.prototype.visitFixedSizeBinary = Zs, Z.prototype.visitDate = Qs, Z.prototype.visitDateDay = Qs, Z.prototype.visitDateMillisecond = Qs, Z.prototype.visitTimestamp = $s, Z.prototype.visitTimestampSecond = $s, Z.prototype.visitTimestampMillisecond = $s, Z.prototype.visitTimestampMicrosecond = $s, Z.prototype.visitTimestampNanosecond = $s, Z.prototype.visitTime = ec, Z.prototype.visitTimeSecond = ec, Z.prototype.visitTimeMillisecond = ec, Z.prototype.visitTimeMicrosecond = ec, Z.prototype.visitTimeNanosecond = ec, Z.prototype.visitDecimal = Js, Z.prototype.visitList = tc, Z.prototype.visitLargeList = tc, Z.prototype.visitStruct = nc, Z.prototype.visitUnion = rc, Z.prototype.visitDenseUnion = rc, Z.prototype.visitSparseUnion = rc, Z.prototype.visitDictionary = ic, Z.prototype.visitInterval = ac, Z.prototype.visitIntervalDayTime = ac, Z.prototype.visitIntervalYearMonth = ac, Z.prototype.visitIntervalMonthDayNano = ac, Z.prototype.visitDuration = oc, Z.prototype.visitDurationSecond = oc, Z.prototype.visitDurationMillisecond = oc, Z.prototype.visitDurationMicrosecond = oc, Z.prototype.visitDurationNanosecond = oc, Z.prototype.visitFixedSizeList = sc, Z.prototype.visitMap = cc;
var lc = new Z();
function uc(e, t) {
	return lc.compareSchemas(e, t);
}
function dc(e, t) {
	return lc.compareFields(e, t);
}
function fc(e, t) {
	return lc.visit(e, t);
}
function pc(e, t) {
	return mc(e, t.map((e) => e.data.concat()));
}
function mc(e, t) {
	let n = [...e.fields], r = [], i = { numBatches: t.reduce((e, t) => Math.max(e, t.length), 0) }, a = 0, o = 0, s = -1, c = t.length, l, u = [];
	for (; i.numBatches-- > 0;) {
		for (o = Infinity, s = -1; ++s < c;) u[s] = l = t[s].shift(), o = Math.min(o, l ? l.length : o);
		Number.isFinite(o) && (u = hc(n, o, u, t, i), o > 0 && (r[a++] = z({
			type: new A(n),
			length: o,
			nullCount: 0,
			children: u.slice()
		})));
	}
	return [e = e.assign(n), r.map((t) => new $(e, t))];
}
function hc(e, t, n, r, i) {
	let a = (t + 63 & -64) >> 3;
	for (let o = -1, s = r.length; ++o < s;) {
		let s = n[o], c = s?.length;
		if (c >= t) c === t ? n[o] = s : (n[o] = s.slice(0, t), i.numBatches = Math.max(i.numBatches, r[o].unshift(s.slice(t, c - t))));
		else {
			let r = e[o];
			e[o] = r.clone({ nullable: !0 }), n[o] = s?._changeLengthAndBackfillNullBitmap(t) ?? z({
				type: r.type,
				length: t,
				nullCount: t,
				nullBitmap: new Uint8Array(a)
			});
		}
	}
	return n;
}
var gc, _c = /* @__PURE__ */ Symbol.for("apache-arrow/Table"), vc = class e {
	static isTable(e) {
		return e?.[_c] === !0;
	}
	constructor(...t) {
		if (t.length === 0) return this.batches = [], this.schema = new G([]), this._offsets = [0], this;
		let n, r;
		t[0] instanceof G && (n = t.shift()), t.at(-1) instanceof Uint32Array && (r = t.pop());
		let i = (t) => {
			if (t) {
				if (t instanceof $) return [t];
				if (t instanceof e) return t.batches;
				if (t instanceof R) {
					if (t.type instanceof A) return [new $(new G(t.type.children), t)];
				} else {
					if (Array.isArray(t)) return t.flatMap((e) => i(e));
					if (typeof t[Symbol.iterator] == "function") return [...t].flatMap((e) => i(e));
					if (typeof t == "object") {
						let e = Object.keys(t), r = e.map((e) => new W([t[e]])), [, i] = pc(n ?? new G(e.map((e, t) => new K(String(e), r[t].type, r[t].nullable))), r);
						return i.length === 0 ? [new $(t)] : i;
					}
				}
			}
			return [];
		}, a = t.flatMap((e) => i(e));
		if (n = n ?? a[0]?.schema ?? new G([]), !(n instanceof G)) throw TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
		for (let e of a) {
			if (!(e instanceof $)) throw TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
			if (!uc(n, e.schema)) throw TypeError("Table and inner RecordBatch schemas must be equivalent.");
		}
		this.schema = n, this.batches = a, this._offsets = r ?? Ja(this.data);
	}
	get data() {
		return this.batches.map(({ data: e }) => e);
	}
	get numCols() {
		return this.schema.fields.length;
	}
	get numRows() {
		return this.data.reduce((e, t) => e + t.length, 0);
	}
	get nullCount() {
		return this._nullCount === -1 && (this._nullCount = qa(this.data)), this._nullCount;
	}
	isValid(e) {
		return !1;
	}
	get(e) {
		return null;
	}
	at(e) {
		return this.get(ba(e, this.numRows));
	}
	set(e, t) {}
	indexOf(e, t) {
		return -1;
	}
	[Symbol.iterator]() {
		return this.batches.length > 0 ? oo.visit(new W(this.data)) : [][Symbol.iterator]();
	}
	toArray() {
		return [...this];
	}
	toString() {
		return `[
  ${this.toArray().join(",\n  ")}
]`;
	}
	concat(...t) {
		let n = this.schema, r = this.data.concat(t.flatMap(({ data: e }) => e));
		return new e(n, r.map((e) => new $(n, e)));
	}
	slice(t, n) {
		let r = this.schema;
		[t, n] = ya({ length: this.numRows }, t, n);
		let i = Ya(this.data, this._offsets, t, n);
		return new e(r, i.map((e) => new $(r, e)));
	}
	getChild(e) {
		return this.getChildAt(this.schema.fields.findIndex((t) => t.name === e));
	}
	getChildAt(e) {
		if (e > -1 && e < this.schema.fields.length) {
			let t = this.data.map((t) => t.children[e]);
			if (t.length === 0) {
				let { type: n } = this.schema.fields[e], r = z({
					type: n,
					length: 0,
					nullCount: 0
				});
				t.push(r._changeLengthAndBackfillNullBitmap(this.numRows));
			}
			return new W(t);
		}
		return null;
	}
	setChild(e, t) {
		return this.setChildAt(this.schema.fields?.findIndex((t) => t.name === e), t);
	}
	setChildAt(t, n) {
		let r = this.schema, i = [...this.batches];
		if (t > -1 && t < this.numCols) {
			n ||= new W([z({
				type: new Rn(),
				length: this.numRows
			})]);
			let e = r.fields.slice(), a = e[t].clone({ type: n.type }), o = this.schema.fields.map((e, t) => this.getChildAt(t));
			[e[t], o[t]] = [a, n], [r, i] = pc(r, o);
		}
		return new e(r, i);
	}
	select(e) {
		let t = this.schema.fields.reduce((e, t, n) => e.set(t.name, n), /* @__PURE__ */ new Map());
		return this.selectAt(e.map((e) => t.get(e)).filter((e) => e > -1));
	}
	selectAt(t) {
		let n = this.schema.selectAt(t), r = this.batches.map((e) => e.selectAt(t));
		return new e(n, r);
	}
	assign(t) {
		let n = this.schema.fields, [r, i] = t.schema.fields.reduce((e, t, r) => {
			let [i, a] = e, o = n.findIndex((e) => e.name === t.name);
			return ~o ? a[o] = r : i.push(r), e;
		}, [[], []]), a = this.schema.assign(t.schema), o = [...n.map((e, t) => [t, i[t]]).map(([e, n]) => n === void 0 ? this.getChildAt(e) : t.getChildAt(n)), ...r.map((e) => t.getChildAt(e))].filter(Boolean);
		return new e(...pc(a, o));
	}
};
gc = Symbol.toStringTag, vc[gc] = ((e) => (e.schema = null, e.batches = [], e._offsets = new Uint32Array([0]), e._nullCount = -1, e[Symbol.isConcatSpreadable] = !0, e[_c] = !0, e.isValid = Qa(Za), e.get = Qa(L.getVisitFn(E.Struct)), e.set = $a(P.getVisitFn(E.Struct)), e.indexOf = eo(io.getVisitFn(E.Struct)), "Table"))(vc.prototype), Object.defineProperty(vc, Symbol.hasInstance, { value: function(e) {
	return Function.prototype[Symbol.hasInstance].call(this, e) || this === vc && vc.isTable(e);
} });
var yc, bc = /* @__PURE__ */ Symbol.for("apache-arrow/RecordBatch"), $ = class e {
	static isRecordBatch(e) {
		return e?.[bc] === !0;
	}
	constructor(...e) {
		switch (e.length) {
			case 3:
			case 2:
				if ([this.schema] = e, !(this.schema instanceof G) || ([, this.data = z({
					nullCount: 0,
					type: new A(this.schema.fields),
					children: this.schema.fields.map((e) => z({
						type: e.type,
						nullCount: 0
					}))
				}), this._metadata = /* @__PURE__ */ new Map()] = e, !(this.data instanceof R))) throw TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
				[this.schema, this.data] = xc(this.schema, this.data.children, this.data.length);
				break;
			case 1: {
				let [t] = e, { fields: n, children: r, length: i } = Object.keys(t).reduce((e, n, r) => (e.children[r] = t[n], e.length = Math.max(e.length, t[n].length), e.fields[r] = K.new({
					name: n,
					type: t[n].type,
					nullable: !0
				}), e), {
					length: 0,
					fields: [],
					children: []
				}), a = new G(n), o = z({
					type: new A(n),
					length: i,
					children: r,
					nullCount: 0
				});
				[this.schema, this.data] = xc(a, o.children, i), this._metadata = /* @__PURE__ */ new Map();
				break;
			}
			default: throw TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.");
		}
	}
	get metadata() {
		return this._metadata;
	}
	get dictionaries() {
		return this._dictionaries ||= Sc(this.schema.fields, this.data.children);
	}
	get numCols() {
		return this.schema.fields.length;
	}
	get numRows() {
		return this.data.length;
	}
	get nullCount() {
		return this.data.nullCount;
	}
	isValid(e) {
		return this.data.getValid(e);
	}
	get(e) {
		return L.visit(this.data, e);
	}
	at(e) {
		return this.get(ba(e, this.numRows));
	}
	set(e, t) {
		return P.visit(this.data, e, t);
	}
	indexOf(e, t) {
		return io.visit(this.data, e, t);
	}
	[Symbol.iterator]() {
		return oo.visit(new W([this.data]));
	}
	toArray() {
		return [...this];
	}
	concat(...e) {
		return new vc(this.schema, [this, ...e]);
	}
	slice(t, n) {
		let [r] = new W([this.data]).slice(t, n).data;
		return new e(this.schema, r, this._metadata);
	}
	getChild(e) {
		return this.getChildAt(this.schema.fields?.findIndex((t) => t.name === e));
	}
	getChildAt(e) {
		return e > -1 && e < this.schema.fields.length ? new W([this.data.children[e]]) : null;
	}
	setChild(e, t) {
		return this.setChildAt(this.schema.fields?.findIndex((t) => t.name === e), t);
	}
	setChildAt(t, n) {
		let r = this.schema, i = this.data;
		if (t > -1 && t < this.numCols) {
			n ||= new W([z({
				type: new Rn(),
				length: this.numRows
			})]);
			let e = r.fields.slice(), a = i.children.slice(), o = e[t].clone({ type: n.type });
			[e[t], a[t]] = [o, n.data[0]], r = new G(e, new Map(this.schema.metadata)), i = z({
				type: new A(e),
				length: i.length,
				children: a
			});
		}
		return new e(r, i, this._metadata);
	}
	select(t) {
		let n = this.schema.select(t), r = new A(n.fields), i = [];
		for (let e of t) {
			let t = this.schema.fields.findIndex((t) => t.name === e);
			~t && (i[t] = this.data.children[t]);
		}
		return new e(n, z({
			type: r,
			length: this.numRows,
			children: i
		}), this._metadata);
	}
	selectAt(t) {
		let n = this.schema.selectAt(t), r = t.map((e) => this.data.children[e]).filter(Boolean), i = z({
			type: new A(n.fields),
			length: this.numRows,
			children: r
		});
		return new e(n, i, this._metadata);
	}
};
yc = Symbol.toStringTag, $[yc] = ((e) => (e._nullCount = -1, e[Symbol.isConcatSpreadable] = !0, e[bc] = !0, "RecordBatch"))($.prototype), Object.defineProperty($, Symbol.hasInstance, { value: function(e) {
	return Function.prototype[Symbol.hasInstance].call(this, e) || this === $ && $.isRecordBatch(e);
} });
function xc(e, t, n = t.reduce((e, t) => Math.max(e, t.length), 0)) {
	let r = [...e.fields], i = [...t], a = (n + 63 & -64) >> 3;
	for (let [o, s] of e.fields.entries()) {
		let e = t[o];
		(!e || e.length !== n) && (r[o] = s.clone({ nullable: !0 }), i[o] = e?._changeLengthAndBackfillNullBitmap(n) ?? z({
			type: s.type,
			length: n,
			nullCount: n,
			nullBitmap: new Uint8Array(a)
		}));
	}
	return [e.assign(r), z({
		type: new A(r),
		length: n,
		children: i
	})];
}
function Sc(e, t, n = /* @__PURE__ */ new Map()) {
	if ((e?.length ?? 0) > 0 && e?.length === t?.length) for (let r = -1, i = e.length; ++r < i;) {
		let { type: i } = e[r], a = t[r];
		for (let e of [a, ...a?.dictionary?.data || []]) Sc(i.children, e?.children, n);
		if (O.isDictionary(i)) {
			let { id: e } = i;
			if (!n.has(e)) a?.dictionary && n.set(e, a.dictionary);
			else if (n.get(e) !== a.dictionary) throw Error("Cannot create Schema containing two different dictionaries with the same Id");
		}
	}
	return n;
}
var Cc = class extends $ {
	constructor(e, t) {
		let n = e.fields.map((e) => z({ type: e.type })), r = z({
			type: new A(e.fields),
			length: 0,
			nullCount: 0,
			children: n
		});
		super(e, r, t || /* @__PURE__ */ new Map());
	}
}, wc = (e) => `Expected ${T[e]} Message in stream, but was null or length 0.`, Tc = (e) => `Header pointer of flatbuffer-encoded ${T[e]} Message is null or length 0.`, Ec = (e, t) => `Expected to read ${e} metadata bytes, but only read ${t}.`, Dc = (e, t) => `Expected to read ${e} bytes for message body, but only read ${t}.`, Oc = class {
	constructor(e) {
		this.source = e instanceof xs ? e : new xs(e);
	}
	[Symbol.iterator]() {
		return this;
	}
	next() {
		let e;
		return (e = this.readMetadataLength()).done || e.value === -1 && (e = this.readMetadataLength()).done || (e = this.readMetadata(e.value)).done ? Y : e;
	}
	throw(e) {
		return this.source.throw(e);
	}
	return(e) {
		return this.source.return(e);
	}
	readMessage(e) {
		let t;
		if ((t = this.next()).done) return null;
		if (e != null && t.value.headerType !== e) throw Error(wc(e));
		return t.value;
	}
	readMessageBody(e) {
		if (e <= 0) return /* @__PURE__ */ new Uint8Array();
		let t = m(this.source.read(e));
		if (t.byteLength < e) throw Error(Dc(e, t.byteLength));
		return t.byteOffset % 8 == 0 && t.byteOffset + t.byteLength <= t.buffer.byteLength ? t : t.slice();
	}
	readSchema(e = !1) {
		let t = T.Schema, n = this.readMessage(t)?.header();
		if (e && !n) throw Error(Tc(t));
		return n;
	}
	readMetadataLength() {
		let e = this.source.read(jc), t = (e && new pt(e))?.readInt32(0) || 0;
		return {
			done: t === 0,
			value: t
		};
	}
	readMetadata(e) {
		let t = this.source.read(e);
		if (!t) return Y;
		if (t.byteLength < e) throw Error(Ec(e, t.byteLength));
		return {
			done: !1,
			value: Vo.decode(t)
		};
	}
}, kc = class {
	constructor(e, t) {
		this.source = e instanceof Ss ? e : oe(e) ? new Es(e, t) : new Ss(e);
	}
	[Symbol.asyncIterator]() {
		return this;
	}
	next() {
		return e(this, void 0, void 0, function* () {
			let e;
			return (e = yield this.readMetadataLength()).done || e.value === -1 && (e = yield this.readMetadataLength()).done || (e = yield this.readMetadata(e.value)).done ? Y : e;
		});
	}
	throw(t) {
		return e(this, void 0, void 0, function* () {
			return yield this.source.throw(t);
		});
	}
	return(t) {
		return e(this, void 0, void 0, function* () {
			return yield this.source.return(t);
		});
	}
	readMessage(t) {
		return e(this, void 0, void 0, function* () {
			let e;
			if ((e = yield this.next()).done) return null;
			if (t != null && e.value.headerType !== t) throw Error(wc(t));
			return e.value;
		});
	}
	readMessageBody(t) {
		return e(this, void 0, void 0, function* () {
			if (t <= 0) return /* @__PURE__ */ new Uint8Array();
			let e = m(yield this.source.read(t));
			if (e.byteLength < t) throw Error(Dc(t, e.byteLength));
			return e.byteOffset % 8 == 0 && e.byteOffset + e.byteLength <= e.buffer.byteLength ? e : e.slice();
		});
	}
	readSchema() {
		return e(this, arguments, void 0, function* (e = !1) {
			let t = T.Schema, n = (yield this.readMessage(t))?.header();
			if (e && !n) throw Error(Tc(t));
			return n;
		});
	}
	readMetadataLength() {
		return e(this, void 0, void 0, function* () {
			let e = yield this.source.read(jc), t = (e && new pt(e))?.readInt32(0) || 0;
			return {
				done: t === 0,
				value: t
			};
		});
	}
	readMetadata(t) {
		return e(this, void 0, void 0, function* () {
			let e = yield this.source.read(t);
			if (!e) return Y;
			if (e.byteLength < t) throw Error(Ec(t, e.byteLength));
			return {
				done: !1,
				value: Vo.decode(e)
			};
		});
	}
}, Ac = class extends Oc {
	constructor(e) {
		super(/* @__PURE__ */ new Uint8Array()), this._schema = !1, this._body = [], this._batchIndex = 0, this._dictionaryIndex = 0, this._json = e instanceof _s ? e : new _s(e);
	}
	next() {
		let { _json: e } = this;
		if (!this._schema) return this._schema = !0, {
			done: !1,
			value: Vo.fromJSON(e.schema, T.Schema)
		};
		if (this._dictionaryIndex < e.dictionaries.length) {
			let t = e.dictionaries[this._dictionaryIndex++];
			return this._body = t.data.columns, {
				done: !1,
				value: Vo.fromJSON(t, T.DictionaryBatch)
			};
		}
		if (this._batchIndex < e.batches.length) {
			let t = e.batches[this._batchIndex++];
			return this._body = t.columns, {
				done: !1,
				value: Vo.fromJSON(t, T.RecordBatch)
			};
		}
		return this._body = [], Y;
	}
	readMessageBody(e) {
		return t(this._body);
		function t(e) {
			return (e || []).reduce((e, n) => [
				...e,
				...n.VALIDITY && [n.VALIDITY] || [],
				...n.TYPE_ID && [n.TYPE_ID] || [],
				...n.OFFSET && [n.OFFSET] || [],
				...n.DATA && [n.DATA] || [],
				...n.VIEWS && [n.VIEWS] || [],
				...n.VARIADIC_DATA_BUFFERS || [],
				...t(n.children)
			], []);
		}
	}
	readMessage(e) {
		let t;
		if ((t = this.next()).done) return null;
		if (e != null && t.value.headerType !== e) throw Error(wc(e));
		return t.value;
	}
	readSchema() {
		let e = T.Schema, t = this.readMessage(e), n = t?.header();
		if (!t || !n) throw Error(Tc(e));
		return n;
	}
}, jc = 4, Mc = "ARROW1", Nc = /* @__PURE__ */ new Uint8Array(6);
for (let e = 0; e < 6; e += 1) Nc[e] = Mc.codePointAt(e);
function Pc(e, t = 0) {
	for (let n = -1, r = Nc.length; ++n < r;) if (Nc[n] !== e[t + n]) return !1;
	return !0;
}
var Fc = Nc.length, Ic = Fc + jc, Lc = Fc * 2 + jc, Rc = class {
	constructor() {
		this.LZ4_FRAME_MAGIC = new Uint8Array([
			4,
			34,
			77,
			24
		]), this.MIN_HEADER_LENGTH = 7;
	}
	isValidCodecEncode(e) {
		let t = new Uint8Array([
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8
		]), n = e.encode(t);
		return this._isValidCompressed(n);
	}
	_isValidCompressed(e) {
		return this._hasMinimumLength(e) && this._hasValidMagicNumber(e) && this._hasValidVersion(e);
	}
	_hasMinimumLength(e) {
		return e.length >= this.MIN_HEADER_LENGTH;
	}
	_hasValidMagicNumber(e) {
		return this.LZ4_FRAME_MAGIC.every((t, n) => e[n] === t);
	}
	_hasValidVersion(e) {
		return (e[4] & 192) >> 6 == 1;
	}
}, zc = class {
	constructor() {
		this.ZSTD_MAGIC = new Uint8Array([
			40,
			181,
			47,
			253
		]), this.MIN_HEADER_LENGTH = 6;
	}
	isValidCodecEncode(e) {
		let t = new Uint8Array([
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8
		]), n = e.encode(t);
		return this._isValidCompressed(n);
	}
	_isValidCompressed(e) {
		return this._hasMinimumLength(e) && this._hasValidMagicNumber(e);
	}
	_hasMinimumLength(e) {
		return e.length >= this.MIN_HEADER_LENGTH;
	}
	_hasValidMagicNumber(e) {
		return this.ZSTD_MAGIC.every((t, n) => e[n] === t);
	}
}, Bc = {
	[gt.LZ4_FRAME]: new Rc(),
	[gt.ZSTD]: new zc()
}, Vc = new class {
	constructor() {
		this.registry = {};
	}
	set(e, t) {
		if (t?.encode && typeof t.encode == "function" && !Bc[e].isValidCodecEncode(t)) throw Error(`Encoder for ${gt[e]} is not valid.`);
		this.registry[e] = t;
	}
	get(e) {
		return this.registry?.[e] || null;
	}
}(), Hc = -1, Uc = 8, Wc = class t extends vs {
	constructor(e) {
		super(), this._impl = e;
	}
	get closed() {
		return this._impl.closed;
	}
	get schema() {
		return this._impl.schema;
	}
	get autoDestroy() {
		return this._impl.autoDestroy;
	}
	get dictionaries() {
		return this._impl.dictionaries;
	}
	get numDictionaries() {
		return this._impl.numDictionaries;
	}
	get numRecordBatches() {
		return this._impl.numRecordBatches;
	}
	get footer() {
		return this._impl.isFile() ? this._impl.footer : null;
	}
	isSync() {
		return this._impl.isSync();
	}
	isAsync() {
		return this._impl.isAsync();
	}
	isFile() {
		return this._impl.isFile();
	}
	isStream() {
		return this._impl.isStream();
	}
	next() {
		return this._impl.next();
	}
	throw(e) {
		return this._impl.throw(e);
	}
	return(e) {
		return this._impl.return(e);
	}
	cancel() {
		return this._impl.cancel();
	}
	reset(e) {
		return this._impl.reset(e), this._DOMStream = void 0, this._nodeStream = void 0, this;
	}
	open(e) {
		let t = this._impl.open(e);
		return te(t) ? t.then(() => this) : this;
	}
	readRecordBatch(e) {
		return this._impl.isFile() ? this._impl.readRecordBatch(e) : null;
	}
	[Symbol.iterator]() {
		return this._impl[Symbol.iterator]();
	}
	[Symbol.asyncIterator]() {
		return this._impl[Symbol.asyncIterator]();
	}
	toDOMStream() {
		return Xe.toDOMStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this });
	}
	toNodeStream() {
		return Xe.toNodeStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this }, { objectMode: !0 });
	}
	static throughNode(e) {
		throw Error("\"throughNode\" not available in this environment");
	}
	static throughDOM(e, t) {
		throw Error("\"throughDOM\" not available in this environment");
	}
	static from(n) {
		return n instanceof t ? n : ie(n) ? il(n) : oe(n) ? sl(n) : te(n) ? e(this, void 0, void 0, function* () {
			return yield t.from(yield n);
		}) : se(n) || le(n) || ue(n) || re(n) ? ol(new Ss(n)) : al(new xs(n));
	}
	static readAll(e) {
		return e instanceof t ? e.isSync() ? nl(e) : rl(e) : ie(e) || ArrayBuffer.isView(e) || ne(e) || ae(e) ? nl(e) : rl(e);
	}
}, Gc = class extends Wc {
	constructor(e) {
		super(e), this._impl = e;
	}
	readAll() {
		return [...this];
	}
	[Symbol.iterator]() {
		return this._impl[Symbol.iterator]();
	}
	[Symbol.asyncIterator]() {
		return r(this, arguments, function* () {
			yield n(yield* i(a(this[Symbol.iterator]())));
		});
	}
}, Kc = class extends Wc {
	constructor(e) {
		super(e), this._impl = e;
	}
	readAll() {
		return e(this, void 0, void 0, function* () {
			var e, t, n, r;
			let i = [];
			try {
				for (var o = !0, s = a(this), c; c = yield s.next(), e = c.done, !e; o = !0) {
					r = c.value, o = !1;
					let e = r;
					i.push(e);
				}
			} catch (e) {
				t = { error: e };
			} finally {
				try {
					!o && !e && (n = s.return) && (yield n.call(s));
				} finally {
					if (t) throw t.error;
				}
			}
			return i;
		});
	}
	[Symbol.iterator]() {
		throw Error("AsyncRecordBatchStreamReader is not Iterable");
	}
	[Symbol.asyncIterator]() {
		return this._impl[Symbol.asyncIterator]();
	}
}, qc = class extends Gc {
	constructor(e) {
		super(e), this._impl = e;
	}
}, Jc = class extends Kc {
	constructor(e) {
		super(e), this._impl = e;
	}
}, Yc = class {
	get numDictionaries() {
		return this._dictionaryIndex;
	}
	get numRecordBatches() {
		return this._recordBatchIndex;
	}
	constructor(e = /* @__PURE__ */ new Map()) {
		this.closed = !1, this.autoDestroy = !0, this._dictionaryIndex = 0, this._recordBatchIndex = 0, this.dictionaries = e;
	}
	isSync() {
		return !1;
	}
	isAsync() {
		return !1;
	}
	isFile() {
		return !1;
	}
	isStream() {
		return !1;
	}
	reset(e) {
		return this._dictionaryIndex = 0, this._recordBatchIndex = 0, this.schema = e, this.dictionaries = /* @__PURE__ */ new Map(), this;
	}
	_loadRecordBatch(e, t, n) {
		let r;
		if (e.compression != null) {
			let n = Vc.get(e.compression.type);
			if (n?.decode && typeof n.decode == "function") {
				let { decommpressedBody: i, buffers: a } = this._decompressBuffers(e, t, n);
				r = this._loadCompressedVectors(e, i, this.schema.fields), e = new q(e.length, e.nodes, a, null);
			} else throw Error("Record batch is compressed but codec not found");
		} else r = this._loadVectors(e, t, this.schema.fields);
		let i = z({
			type: new A(this.schema.fields),
			length: e.length,
			children: r
		});
		return new $(this.schema, i, n);
	}
	_loadDictionaryBatch(e, t) {
		let { id: n, isDelta: r } = e, { dictionaries: i, schema: a } = this, o = i.get(n), s = a.dictionaries.get(n), c;
		if (e.data.compression != null) {
			let i = Vc.get(e.data.compression.type);
			if (i?.decode && typeof i.decode == "function") {
				let { decommpressedBody: a, buffers: o } = this._decompressBuffers(e.data, t, i);
				c = this._loadCompressedVectors(e.data, a, [s]), e = new Ho(new q(e.data.length, e.data.nodes, o, null, e.data.variadicBufferCounts), n, r);
			} else throw Error("Dictionary batch is compressed but codec not found");
		} else c = this._loadVectors(e.data, t, [s]);
		return (o && r ? o.concat(new W(c)) : new W(c)).memoize();
	}
	_loadVectors(e, t, n) {
		return new Bs(t, e.nodes, e.buffers, this.dictionaries, this.schema.metadataVersion, e.variadicBufferCounts).visitMany(n);
	}
	_loadCompressedVectors(e, t, n) {
		return new qs(t, e.nodes, e.buffers, this.dictionaries, this.schema.metadataVersion, e.variadicBufferCounts).visitMany(n);
	}
	_decompressBuffers(e, t, n) {
		let r = [], i = [], a = 0;
		for (let { offset: o, length: s } of e.buffers) {
			if (s === 0) {
				r.push(/* @__PURE__ */ new Uint8Array()), i.push(new J(a, 0));
				continue;
			}
			let e = new pt(t.subarray(o, o + s)), c = D(e.readInt64(0)), l = e.bytes().subarray(Uc), u = c === Hc ? l : n.decode(l);
			r.push(u);
			let ee = (a + 7 & -8) - a;
			a += ee, i.push(new J(a, u.length)), a += u.length;
		}
		return {
			decommpressedBody: r,
			buffers: i
		};
	}
}, Xc = class extends Yc {
	constructor(e, t) {
		super(t), this._reader = ie(e) ? new Ac(this._handle = e) : new Oc(this._handle = e);
	}
	isSync() {
		return !0;
	}
	isStream() {
		return !0;
	}
	[Symbol.iterator]() {
		return this;
	}
	cancel() {
		!this.closed && (this.closed = !0) && (this.reset()._reader.return(), this._reader = null, this.dictionaries = null);
	}
	open(e) {
		return this.closed || (this.autoDestroy = tl(this, e), (this.schema ||= this._reader.readSchema()) || this.cancel()), this;
	}
	throw(e) {
		return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.throw(e) : Y;
	}
	return(e) {
		return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.return(e) : Y;
	}
	next() {
		if (this.closed) return Y;
		let e, { _reader: t } = this;
		for (; e = this._readNextMessageAndValidate();) if (e.isSchema()) this.reset(e.header());
		else if (e.isRecordBatch()) {
			this._recordBatchIndex++;
			let n = e.header(), r = t.readMessageBody(e.bodyLength);
			return {
				done: !1,
				value: this._loadRecordBatch(n, r, e.metadata)
			};
		} else if (e.isDictionaryBatch()) {
			this._dictionaryIndex++;
			let n = e.header(), r = t.readMessageBody(e.bodyLength), i = this._loadDictionaryBatch(n, r);
			this.dictionaries.set(n.id, i);
		}
		return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, {
			done: !1,
			value: new Cc(this.schema)
		}) : this.return();
	}
	_readNextMessageAndValidate(e) {
		return this._reader.readMessage(e);
	}
}, Zc = class extends Yc {
	constructor(e, t) {
		super(t), this._reader = new kc(this._handle = e);
	}
	isAsync() {
		return !0;
	}
	isStream() {
		return !0;
	}
	[Symbol.asyncIterator]() {
		return this;
	}
	cancel() {
		return e(this, void 0, void 0, function* () {
			!this.closed && (this.closed = !0) && (yield this.reset()._reader.return(), this._reader = null, this.dictionaries = null);
		});
	}
	open(t) {
		return e(this, void 0, void 0, function* () {
			return this.closed || (this.autoDestroy = tl(this, t), (this.schema ||= yield this._reader.readSchema()) || (yield this.cancel())), this;
		});
	}
	throw(t) {
		return e(this, void 0, void 0, function* () {
			return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.throw(t) : Y;
		});
	}
	return(t) {
		return e(this, void 0, void 0, function* () {
			return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.return(t) : Y;
		});
	}
	next() {
		return e(this, void 0, void 0, function* () {
			if (this.closed) return Y;
			let e, { _reader: t } = this;
			for (; e = yield this._readNextMessageAndValidate();) if (e.isSchema()) yield this.reset(e.header());
			else if (e.isRecordBatch()) {
				this._recordBatchIndex++;
				let n = e.header(), r = yield t.readMessageBody(e.bodyLength);
				return {
					done: !1,
					value: this._loadRecordBatch(n, r, e.metadata)
				};
			} else if (e.isDictionaryBatch()) {
				this._dictionaryIndex++;
				let n = e.header(), r = yield t.readMessageBody(e.bodyLength), i = this._loadDictionaryBatch(n, r);
				this.dictionaries.set(n.id, i);
			}
			return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, {
				done: !1,
				value: new Cc(this.schema)
			}) : yield this.return();
		});
	}
	_readNextMessageAndValidate(t) {
		return e(this, void 0, void 0, function* () {
			return yield this._reader.readMessage(t);
		});
	}
}, Qc = class extends Xc {
	get footer() {
		return this._footer;
	}
	get numDictionaries() {
		return this._footer ? this._footer.numDictionaries : 0;
	}
	get numRecordBatches() {
		return this._footer ? this._footer.numRecordBatches : 0;
	}
	constructor(e, t) {
		super(e instanceof Ts ? e : new Ts(e), t);
	}
	isSync() {
		return !0;
	}
	isFile() {
		return !0;
	}
	open(e) {
		if (!this.closed && !this._footer) {
			this.schema = (this._footer = this._readFooter()).schema;
			for (let e of this._footer.dictionaryBatches()) e && this._readDictionaryBatch(this._dictionaryIndex++);
		}
		return super.open(e);
	}
	readRecordBatch(e) {
		if (this.closed) return null;
		this._footer || this.open();
		let t = this._footer?.getRecordBatch(e);
		if (t && this._handle.seek(t.offset)) {
			let e = this._reader.readMessage(T.RecordBatch);
			if (e?.isRecordBatch()) {
				let t = e.header(), n = this._reader.readMessageBody(e.bodyLength);
				return this._loadRecordBatch(t, n, e.metadata);
			}
		}
		return null;
	}
	_readDictionaryBatch(e) {
		let t = this._footer?.getDictionaryBatch(e);
		if (t && this._handle.seek(t.offset)) {
			let e = this._reader.readMessage(T.DictionaryBatch);
			if (e?.isDictionaryBatch()) {
				let t = e.header(), n = this._reader.readMessageBody(e.bodyLength), r = this._loadDictionaryBatch(t, n);
				this.dictionaries.set(t.id, r);
			}
		}
	}
	_readFooter() {
		let { _handle: e } = this, t = e.size - Ic, n = e.readInt32(t), r = e.readAt(t - n, n);
		return xo.decode(r);
	}
	_readNextMessageAndValidate(e) {
		if (this._footer || this.open(), this._footer && this._recordBatchIndex < this.numRecordBatches) {
			let t = this._footer?.getRecordBatch(this._recordBatchIndex);
			if (t && this._handle.seek(t.offset)) return this._reader.readMessage(e);
		}
		return null;
	}
}, $c = class extends Zc {
	get footer() {
		return this._footer;
	}
	get numDictionaries() {
		return this._footer ? this._footer.numDictionaries : 0;
	}
	get numRecordBatches() {
		return this._footer ? this._footer.numRecordBatches : 0;
	}
	constructor(e, ...t) {
		let n = typeof t[0] == "number" ? void 0 : t.shift(), r = t[0] instanceof Map ? t.shift() : void 0;
		super(e instanceof Es ? e : new Es(e, n), r);
	}
	isFile() {
		return !0;
	}
	isAsync() {
		return !0;
	}
	open(t) {
		let n = Object.create(null, { open: { get: () => super.open } });
		return e(this, void 0, void 0, function* () {
			if (!this.closed && !this._footer) {
				this.schema = (this._footer = yield this._readFooter()).schema;
				for (let e of this._footer.dictionaryBatches()) e && (yield this._readDictionaryBatch(this._dictionaryIndex++));
			}
			return yield n.open.call(this, t);
		});
	}
	readRecordBatch(t) {
		return e(this, void 0, void 0, function* () {
			if (this.closed) return null;
			this._footer || (yield this.open());
			let e = this._footer?.getRecordBatch(t);
			if (e && (yield this._handle.seek(e.offset))) {
				let e = yield this._reader.readMessage(T.RecordBatch);
				if (e?.isRecordBatch()) {
					let t = e.header(), n = yield this._reader.readMessageBody(e.bodyLength);
					return this._loadRecordBatch(t, n, e.metadata);
				}
			}
			return null;
		});
	}
	_readDictionaryBatch(t) {
		return e(this, void 0, void 0, function* () {
			let e = this._footer?.getDictionaryBatch(t);
			if (e && (yield this._handle.seek(e.offset))) {
				let e = yield this._reader.readMessage(T.DictionaryBatch);
				if (e?.isDictionaryBatch()) {
					let t = e.header(), n = yield this._reader.readMessageBody(e.bodyLength), r = this._loadDictionaryBatch(t, n);
					this.dictionaries.set(t.id, r);
				}
			}
		});
	}
	_readFooter() {
		return e(this, void 0, void 0, function* () {
			let { _handle: e } = this;
			e._pending && (yield e._pending);
			let t = e.size - Ic, n = yield e.readInt32(t), r = yield e.readAt(t - n, n);
			return xo.decode(r);
		});
	}
	_readNextMessageAndValidate(t) {
		return e(this, void 0, void 0, function* () {
			if (this._footer || (yield this.open()), this._footer && this._recordBatchIndex < this.numRecordBatches) {
				let e = this._footer.getRecordBatch(this._recordBatchIndex);
				if (e && (yield this._handle.seek(e.offset))) return yield this._reader.readMessage(t);
			}
			return null;
		});
	}
}, el = class extends Xc {
	constructor(e, t) {
		super(e, t);
	}
	_loadVectors(e, t, n) {
		return new Vs(t, e.nodes, e.buffers, this.dictionaries, this.schema.metadataVersion, e.variadicBufferCounts).visitMany(n);
	}
};
function tl(e, t) {
	return t && typeof t.autoDestroy == "boolean" ? t.autoDestroy : e.autoDestroy;
}
function* nl(e) {
	let t = Wc.from(e);
	try {
		if (!t.open({ autoDestroy: !1 }).closed) do
			yield t;
		while (!t.reset().open().closed);
	} finally {
		t.cancel();
	}
}
function rl(e) {
	return r(this, arguments, function* () {
		let t = yield n(Wc.from(e));
		try {
			if (!(yield n(t.open({ autoDestroy: !1 }))).closed) do
				yield yield n(t);
			while (!(yield n(t.reset().open())).closed);
		} finally {
			yield n(t.cancel());
		}
	});
}
function il(e) {
	return new Gc(new el(e));
}
function al(e) {
	let t = e.peek(Fc + 7 & -8);
	return t && t.byteLength >= 4 ? Pc(t) ? new qc(new Qc(e.read())) : new Gc(new Xc(e)) : new Gc(new Xc(function* () {}()));
}
function ol(t) {
	return e(this, void 0, void 0, function* () {
		let e = yield t.peek(Fc + 7 & -8);
		return e && e.byteLength >= 4 ? Pc(e) ? new qc(new Qc(yield t.read())) : new Kc(new Zc(t)) : new Kc(new Zc(function() {
			return r(this, arguments, function* () {});
		}()));
	});
}
function sl(t) {
	return e(this, void 0, void 0, function* () {
		let { size: e } = yield t.stat(), n = new Es(t, e);
		return e >= Lc && Pc(yield n.readAt(0, Fc + 7 & -8)) ? new Jc(new $c(n)) : new Kc(new Zc(n));
	});
}
function cl(e) {
	let t = Wc.from(e);
	return te(t) ? t.then((e) => cl(e)) : t.isAsync() ? t.readAll().then((e) => new vc(e)) : new vc(t.readAll());
}
//#endregion
export { fc as C, ja as S, Ps as _, sr as a, dc as b, Va as c, W as d, Rn as f, dn as g, zn as h, cl as i, v as l, gr as m, Zt as n, Ye as o, vc as p, $ as r, R as s, uc as t, G as u, O as v, K as w, A as x, zs as y };

//# sourceMappingURL=serialization-BSMBF8e2-CqZaT18J.js.map