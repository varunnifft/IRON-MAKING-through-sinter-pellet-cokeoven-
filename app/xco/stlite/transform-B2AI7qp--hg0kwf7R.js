import { b as e, d as t, r as n, y as r } from "./string-BvOnLx8K-BsWpS-s0.js";
import { c as i, d as a, l as o, n as s, o as c, s as l, t as u } from "./cubic-Dir1Ko---Ccey17jF.js";
//#region ../react/build/transform-B2AI7qp-.js
function d(e, t, n) {
	var r = new s();
	return t = t == null ? 0 : +t, r.restart((n) => {
		r.stop(), e(n + t);
	}, t, n), r;
}
var f = "http://www.w3.org/1999/xhtml", p = {
	svg: "http://www.w3.org/2000/svg",
	xhtml: f,
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
};
function m(e) {
	var t = e += "", n = t.indexOf(":");
	return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), p.hasOwnProperty(t) ? {
		space: p[t],
		local: e
	} : e;
}
function h(e) {
	return function() {
		var t = this.ownerDocument, n = this.namespaceURI;
		return n === f && t.documentElement.namespaceURI === f ? t.createElement(e) : t.createElementNS(n, e);
	};
}
function g(e) {
	return function() {
		return this.ownerDocument.createElementNS(e.space, e.local);
	};
}
function _(e) {
	var t = m(e);
	return (t.local ? g : h)(t);
}
function v() {}
function y(e) {
	return e == null ? v : function() {
		return this.querySelector(e);
	};
}
function b(e) {
	typeof e != "function" && (e = y(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = Array(o), c, l, u = 0; u < o; ++u) (c = a[u]) && (l = e.call(c, c.__data__, u, a)) && ("__data__" in c && (l.__data__ = c.__data__), s[u] = l);
	return new P(r, this._parents);
}
function x(e) {
	return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function ee() {
	return [];
}
function te(e) {
	return e == null ? ee : function() {
		return this.querySelectorAll(e);
	};
}
function ne(e) {
	return function() {
		return x(e.apply(this, arguments));
	};
}
function re(e) {
	e = typeof e == "function" ? ne(e) : te(e);
	for (var t = this._groups, n = t.length, r = [], i = [], a = 0; a < n; ++a) for (var o = t[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && (r.push(e.call(c, c.__data__, l, o)), i.push(c));
	return new P(r, i);
}
function S(e) {
	return function() {
		return this.matches(e);
	};
}
function C(e) {
	return function(t) {
		return t.matches(e);
	};
}
var ie = Array.prototype.find;
function ae(e) {
	return function() {
		return ie.call(this.children, e);
	};
}
function oe() {
	return this.firstElementChild;
}
function se(e) {
	return this.select(e == null ? oe : ae(typeof e == "function" ? e : C(e)));
}
var ce = Array.prototype.filter;
function le() {
	return Array.from(this.children);
}
function ue(e) {
	return function() {
		return ce.call(this.children, e);
	};
}
function de(e) {
	return this.selectAll(e == null ? le : ue(typeof e == "function" ? e : C(e)));
}
function fe(e) {
	typeof e != "function" && (e = S(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new P(r, this._parents);
}
function w(e) {
	return Array(e.length);
}
function pe() {
	return new P(this._enter || this._groups.map(w), this._parents);
}
function T(e, t) {
	this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
T.prototype = {
	constructor: T,
	appendChild: function(e) {
		return this._parent.insertBefore(e, this._next);
	},
	insertBefore: function(e, t) {
		return this._parent.insertBefore(e, t);
	},
	querySelector: function(e) {
		return this._parent.querySelector(e);
	},
	querySelectorAll: function(e) {
		return this._parent.querySelectorAll(e);
	}
};
function me(e) {
	return function() {
		return e;
	};
}
function he(e, t, n, r, i, a) {
	for (var o = 0, s, c = t.length, l = a.length; o < l; ++o) (s = t[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new T(e, a[o]);
	for (; o < c; ++o) (s = t[o]) && (i[o] = s);
}
function ge(e, t, n, r, i, a, o) {
	var s, c, l = /* @__PURE__ */ new Map(), u = t.length, d = a.length, f = Array(u), p;
	for (s = 0; s < u; ++s) (c = t[s]) && (f[s] = p = o.call(c, c.__data__, s, t) + "", l.has(p) ? i[s] = c : l.set(p, c));
	for (s = 0; s < d; ++s) p = o.call(e, a[s], s, a) + "", (c = l.get(p)) ? (r[s] = c, c.__data__ = a[s], l.delete(p)) : n[s] = new T(e, a[s]);
	for (s = 0; s < u; ++s) (c = t[s]) && l.get(f[s]) === c && (i[s] = c);
}
function _e(e) {
	return e.__data__;
}
function ve(e, t) {
	if (!arguments.length) return Array.from(this, _e);
	var n = t ? ge : he, r = this._parents, i = this._groups;
	typeof e != "function" && (e = me(e));
	for (var a = i.length, o = Array(a), s = Array(a), c = Array(a), l = 0; l < a; ++l) {
		var u = r[l], d = i[l], f = d.length, p = ye(e.call(u, u && u.__data__, l, r)), m = p.length, h = s[l] = Array(m), g = o[l] = Array(m);
		n(u, d, h, g, c[l] = Array(f), p, t);
		for (var _ = 0, v = 0, y, b; _ < m; ++_) if (y = h[_]) {
			for (_ >= v && (v = _ + 1); !(b = g[v]) && ++v < m;);
			y._next = b || null;
		}
	}
	return o = new P(o, r), o._enter = s, o._exit = c, o;
}
function ye(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function be() {
	return new P(this._exit || this._groups.map(w), this._parents);
}
function xe(e, t, n) {
	var r = this.enter(), i = this, a = this.exit();
	return typeof e == "function" ? (r = e(r), r &&= r.selection()) : r = r.append(e + ""), t != null && (i = t(i), i &&= i.selection()), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
function Se(e) {
	for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, a = r.length, o = Math.min(i, a), s = Array(i), c = 0; c < o; ++c) for (var l = n[c], u = r[c], d = l.length, f = s[c] = Array(d), p, m = 0; m < d; ++m) (p = l[m] || u[m]) && (f[m] = p);
	for (; c < i; ++c) s[c] = n[c];
	return new P(s, this._parents);
}
function Ce() {
	for (var e = this._groups, t = -1, n = e.length; ++t < n;) for (var r = e[t], i = r.length - 1, a = r[i], o; --i >= 0;) (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
	return this;
}
function we(e) {
	e ||= Te;
	function t(t, n) {
		return t && n ? e(t.__data__, n.__data__) : !t - !n;
	}
	for (var n = this._groups, r = n.length, i = Array(r), a = 0; a < r; ++a) {
		for (var o = n[a], s = o.length, c = i[a] = Array(s), l, u = 0; u < s; ++u) (l = o[u]) && (c[u] = l);
		c.sort(t);
	}
	return new P(i, this._parents).order();
}
function Te(e, t) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ee() {
	var e = arguments[0];
	return arguments[0] = this, e.apply(null, arguments), this;
}
function De() {
	return Array.from(this);
}
function Oe() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length; i < a; ++i) {
		var o = r[i];
		if (o) return o;
	}
	return null;
}
function ke() {
	let e = 0;
	for (let t of this) ++e;
	return e;
}
function Ae() {
	return !this.node();
}
function je(e) {
	for (var t = this._groups, n = 0, r = t.length; n < r; ++n) for (var i = t[n], a = 0, o = i.length, s; a < o; ++a) (s = i[a]) && e.call(s, s.__data__, a, i);
	return this;
}
function Me(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function Ne(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function Pe(e, t) {
	return function() {
		this.setAttribute(e, t);
	};
}
function Fe(e, t) {
	return function() {
		this.setAttributeNS(e.space, e.local, t);
	};
}
function Ie(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
	};
}
function Le(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
	};
}
function Re(e, t) {
	var n = m(e);
	if (arguments.length < 2) {
		var r = this.node();
		return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
	}
	return this.each((t == null ? n.local ? Ne : Me : typeof t == "function" ? n.local ? Le : Ie : n.local ? Fe : Pe)(n, t));
}
function ze(e) {
	return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Be(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function Ve(e, t, n) {
	return function() {
		this.style.setProperty(e, t, n);
	};
}
function He(e, t, n) {
	return function() {
		var r = t.apply(this, arguments);
		r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
	};
}
function Ue(e, t, n) {
	return arguments.length > 1 ? this.each((t == null ? Be : typeof t == "function" ? He : Ve)(e, t, n ?? "")) : E(this.node(), e);
}
function E(e, t) {
	return e.style.getPropertyValue(t) || ze(e).getComputedStyle(e, null).getPropertyValue(t);
}
function We(e) {
	return function() {
		delete this[e];
	};
}
function Ge(e, t) {
	return function() {
		this[e] = t;
	};
}
function Ke(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? delete this[e] : this[e] = n;
	};
}
function qe(e, t) {
	return arguments.length > 1 ? this.each((t == null ? We : typeof t == "function" ? Ke : Ge)(e, t)) : this.node()[e];
}
function D(e) {
	return e.trim().split(/^|\s+/);
}
function O(e) {
	return e.classList || new k(e);
}
function k(e) {
	this._node = e, this._names = D(e.getAttribute("class") || "");
}
k.prototype = {
	add: function(e) {
		this._names.indexOf(e) < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
	},
	remove: function(e) {
		var t = this._names.indexOf(e);
		t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
	},
	contains: function(e) {
		return this._names.indexOf(e) >= 0;
	}
};
function A(e, t) {
	for (var n = O(e), r = -1, i = t.length; ++r < i;) n.add(t[r]);
}
function j(e, t) {
	for (var n = O(e), r = -1, i = t.length; ++r < i;) n.remove(t[r]);
}
function Je(e) {
	return function() {
		A(this, e);
	};
}
function Ye(e) {
	return function() {
		j(this, e);
	};
}
function Xe(e, t) {
	return function() {
		(t.apply(this, arguments) ? A : j)(this, e);
	};
}
function Ze(e, t) {
	var n = D(e + "");
	if (arguments.length < 2) {
		for (var r = O(this.node()), i = -1, a = n.length; ++i < a;) if (!r.contains(n[i])) return !1;
		return !0;
	}
	return this.each((typeof t == "function" ? Xe : t ? Je : Ye)(n, t));
}
function Qe() {
	this.textContent = "";
}
function $e(e) {
	return function() {
		this.textContent = e;
	};
}
function et(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.textContent = t ?? "";
	};
}
function tt(e) {
	return arguments.length ? this.each(e == null ? Qe : (typeof e == "function" ? et : $e)(e)) : this.node().textContent;
}
function nt() {
	this.innerHTML = "";
}
function rt(e) {
	return function() {
		this.innerHTML = e;
	};
}
function it(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.innerHTML = t ?? "";
	};
}
function at(e) {
	return arguments.length ? this.each(e == null ? nt : (typeof e == "function" ? it : rt)(e)) : this.node().innerHTML;
}
function ot() {
	this.nextSibling && this.parentNode.appendChild(this);
}
function st() {
	return this.each(ot);
}
function ct() {
	this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function lt() {
	return this.each(ct);
}
function ut(e) {
	var t = typeof e == "function" ? e : _(e);
	return this.select(function() {
		return this.appendChild(t.apply(this, arguments));
	});
}
function dt() {
	return null;
}
function ft(e, t) {
	var n = typeof e == "function" ? e : _(e), r = t == null ? dt : typeof t == "function" ? t : y(t);
	return this.select(function() {
		return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
	});
}
function pt() {
	var e = this.parentNode;
	e && e.removeChild(this);
}
function mt() {
	return this.each(pt);
}
function ht() {
	var e = this.cloneNode(!1), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function gt() {
	var e = this.cloneNode(!0), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function _t(e) {
	return this.select(e ? gt : ht);
}
function vt(e) {
	return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function yt(e) {
	return function(t) {
		e.call(this, t, this.__data__);
	};
}
function bt(e) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var t = "", n = e.indexOf(".");
		return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {
			type: e,
			name: t
		};
	});
}
function xt(e) {
	return function() {
		var t = this.__on;
		if (t) {
			for (var n = 0, r = -1, i = t.length, a; n < i; ++n) a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
			++r ? t.length = r : delete this.__on;
		}
	};
}
function St(e, t, n) {
	return function() {
		var r = this.__on, i, a = yt(t);
		if (r) {
			for (var o = 0, s = r.length; o < s; ++o) if ((i = r[o]).type === e.type && i.name === e.name) {
				this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = n), i.value = t;
				return;
			}
		}
		this.addEventListener(e.type, a, n), i = {
			type: e.type,
			name: e.name,
			value: t,
			listener: a,
			options: n
		}, r ? r.push(i) : this.__on = [i];
	};
}
function Ct(e, t, n) {
	var r = bt(e + ""), i, a = r.length, o;
	if (arguments.length < 2) {
		var s = this.node().__on;
		if (s) {
			for (var c = 0, l = s.length, u; c < l; ++c) for (i = 0, u = s[c]; i < a; ++i) if ((o = r[i]).type === u.type && o.name === u.name) return u.value;
		}
		return;
	}
	for (s = t ? St : xt, i = 0; i < a; ++i) this.each(s(r[i], t, n));
	return this;
}
function M(e, t, n) {
	var r = ze(e), i = r.CustomEvent;
	typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function wt(e, t) {
	return function() {
		return M(this, e, t);
	};
}
function Tt(e, t) {
	return function() {
		return M(this, e, t.apply(this, arguments));
	};
}
function Et(e, t) {
	return this.each((typeof t == "function" ? Tt : wt)(e, t));
}
function* Dt() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length, o; i < a; ++i) (o = r[i]) && (yield o);
}
var N = [null];
function P(e, t) {
	this._groups = e, this._parents = t;
}
function F() {
	return new P([[document.documentElement]], N);
}
function Ot() {
	return this;
}
P.prototype = F.prototype = {
	constructor: P,
	select: b,
	selectAll: re,
	selectChild: se,
	selectChildren: de,
	filter: fe,
	data: ve,
	enter: pe,
	exit: be,
	join: xe,
	merge: Se,
	selection: Ot,
	order: Ce,
	sort: we,
	call: Ee,
	nodes: De,
	node: Oe,
	size: ke,
	empty: Ae,
	each: je,
	attr: Re,
	style: Ue,
	property: qe,
	classed: Ze,
	text: tt,
	html: at,
	raise: st,
	lower: lt,
	append: ut,
	insert: ft,
	remove: mt,
	clone: _t,
	datum: vt,
	on: Ct,
	dispatch: Et,
	[Symbol.iterator]: Dt
};
function kt(e) {
	return typeof e == "string" ? new P([[document.querySelector(e)]], [document.documentElement]) : new P([[e]], N);
}
var At = l("start", "end", "cancel", "interrupt"), jt = [], I = 0, L = 2, R = 3, z = 4, B = 5, V = 6;
function H(e, t, n, r, i, a) {
	var o = e.__transition;
	if (!o) e.__transition = {};
	else if (n in o) return;
	Mt(e, n, {
		name: t,
		index: r,
		group: i,
		on: At,
		tween: jt,
		time: a.time,
		delay: a.delay,
		duration: a.duration,
		ease: a.ease,
		timer: null,
		state: I
	});
}
function U(e, t) {
	var n = G(e, t);
	if (n.state > I) throw Error("too late; already scheduled");
	return n;
}
function W(e, t) {
	var n = G(e, t);
	if (n.state > R) throw Error("too late; already running");
	return n;
}
function G(e, t) {
	var n = e.__transition;
	if (!n || !(n = n[t])) throw Error("transition not found");
	return n;
}
function Mt(e, t, n) {
	var r = e.__transition, i;
	r[t] = n, n.timer = o(a, 0, n.time);
	function a(e) {
		n.state = 1, n.timer.restart(s, n.delay, n.time), n.delay <= e && s(e - n.delay);
	}
	function s(a) {
		var o, u, f, p;
		if (n.state !== 1) return l();
		for (o in r) if (p = r[o], p.name === n.name) {
			if (p.state === R) return d(s);
			p.state === z ? (p.state = V, p.timer.stop(), p.on.call("interrupt", e, e.__data__, p.index, p.group), delete r[o]) : +o < t && (p.state = V, p.timer.stop(), p.on.call("cancel", e, e.__data__, p.index, p.group), delete r[o]);
		}
		if (d(function() {
			n.state === R && (n.state = z, n.timer.restart(c, n.delay, n.time), c(a));
		}), n.state = L, n.on.call("start", e, e.__data__, n.index, n.group), n.state === L) {
			for (n.state = R, i = Array(f = n.tween.length), o = 0, u = -1; o < f; ++o) (p = n.tween[o].value.call(e, e.__data__, n.index, n.group)) && (i[++u] = p);
			i.length = u + 1;
		}
	}
	function c(t) {
		for (var r = t < n.duration ? n.ease.call(null, t / n.duration) : (n.timer.restart(l), n.state = B, 1), a = -1, o = i.length; ++a < o;) i[a].call(e, r);
		n.state === B && (n.on.call("end", e, e.__data__, n.index, n.group), l());
	}
	function l() {
		for (var i in n.state = V, n.timer.stop(), delete r[t], r) return;
		delete e.__transition;
	}
}
function K(e, t) {
	var n = e.__transition, r, i, a = !0, o;
	if (n) {
		for (o in t = t == null ? null : t + "", n) {
			if ((r = n[o]).name !== t) {
				a = !1;
				continue;
			}
			i = r.state > L && r.state < B, r.state = V, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[o];
		}
		a && delete e.__transition;
	}
}
function Nt(e) {
	return this.each(function() {
		K(this, e);
	});
}
function Pt(e, t) {
	var n, r;
	return function() {
		var i = W(this, e), a = i.tween;
		if (a !== n) {
			r = n = a;
			for (var o = 0, s = r.length; o < s; ++o) if (r[o].name === t) {
				r = r.slice(), r.splice(o, 1);
				break;
			}
		}
		i.tween = r;
	};
}
function Ft(e, t, n) {
	var r, i;
	if (typeof n != "function") throw Error();
	return function() {
		var a = W(this, e), o = a.tween;
		if (o !== r) {
			i = (r = o).slice();
			for (var s = {
				name: t,
				value: n
			}, c = 0, l = i.length; c < l; ++c) if (i[c].name === t) {
				i[c] = s;
				break;
			}
			c === l && i.push(s);
		}
		a.tween = i;
	};
}
function It(e, t) {
	var n = this._id;
	if (e += "", arguments.length < 2) {
		for (var r = G(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i) if ((o = r[i]).name === e) return o.value;
		return null;
	}
	return this.each((t == null ? Pt : Ft)(n, e, t));
}
function q(e, t, n) {
	var r = e._id;
	return e.each(function() {
		var e = W(this, r);
		(e.value ||= {})[t] = n.apply(this, arguments);
	}), function(e) {
		return G(e, r).value[t];
	};
}
function J(i, a) {
	var o;
	return (typeof a == "number" ? e : a instanceof n ? r : (o = n(a)) ? (a = o, r) : t)(i, a);
}
function Lt(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function Rt(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function zt(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttribute(e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function Bt(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttributeNS(e.space, e.local);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function Vt(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function Ht(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function Ut(e, t) {
	var n = m(e), r = n === "transform" ? c : J;
	return this.attrTween(e, typeof t == "function" ? (n.local ? Ht : Vt)(n, r, q(this, "attr." + e, t)) : t == null ? (n.local ? Rt : Lt)(n) : (n.local ? Bt : zt)(n, r, t));
}
function Wt(e, t) {
	return function(n) {
		this.setAttribute(e, t.call(this, n));
	};
}
function Gt(e, t) {
	return function(n) {
		this.setAttributeNS(e.space, e.local, t.call(this, n));
	};
}
function Kt(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && Gt(e, i)), n;
	}
	return i._value = t, i;
}
function qt(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && Wt(e, i)), n;
	}
	return i._value = t, i;
}
function Jt(e, t) {
	var n = "attr." + e;
	if (arguments.length < 2) return (n = this.tween(n)) && n._value;
	if (t == null) return this.tween(n, null);
	if (typeof t != "function") throw Error();
	var r = m(e);
	return this.tween(n, (r.local ? Kt : qt)(r, t));
}
function Yt(e, t) {
	return function() {
		U(this, e).delay = +t.apply(this, arguments);
	};
}
function Xt(e, t) {
	return t = +t, function() {
		U(this, e).delay = t;
	};
}
function Zt(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? Yt : Xt)(t, e)) : G(this.node(), t).delay;
}
function Qt(e, t) {
	return function() {
		W(this, e).duration = +t.apply(this, arguments);
	};
}
function $t(e, t) {
	return t = +t, function() {
		W(this, e).duration = t;
	};
}
function en(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? Qt : $t)(t, e)) : G(this.node(), t).duration;
}
function tn(e, t) {
	if (typeof t != "function") throw Error();
	return function() {
		W(this, e).ease = t;
	};
}
function nn(e) {
	var t = this._id;
	return arguments.length ? this.each(tn(t, e)) : G(this.node(), t).ease;
}
function rn(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		if (typeof n != "function") throw Error();
		W(this, e).ease = n;
	};
}
function an(e) {
	if (typeof e != "function") throw Error();
	return this.each(rn(this._id, e));
}
function on(e) {
	typeof e != "function" && (e = S(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new X(r, this._parents, this._name, this._id);
}
function sn(e) {
	if (e._id !== this._id) throw Error();
	for (var t = this._groups, n = e._groups, r = t.length, i = n.length, a = Math.min(r, i), o = Array(r), s = 0; s < a; ++s) for (var c = t[s], l = n[s], u = c.length, d = o[s] = Array(u), f, p = 0; p < u; ++p) (f = c[p] || l[p]) && (d[p] = f);
	for (; s < r; ++s) o[s] = t[s];
	return new X(o, this._parents, this._name, this._id);
}
function cn(e) {
	return (e + "").trim().split(/^|\s+/).every(function(e) {
		var t = e.indexOf(".");
		return t >= 0 && (e = e.slice(0, t)), !e || e === "start";
	});
}
function ln(e, t, n) {
	var r, i, a = cn(t) ? U : W;
	return function() {
		var o = a(this, e), s = o.on;
		s !== r && (i = (r = s).copy()).on(t, n), o.on = i;
	};
}
function un(e, t) {
	var n = this._id;
	return arguments.length < 2 ? G(this.node(), n).on.on(e) : this.each(ln(n, e, t));
}
function dn(e) {
	return function() {
		var t = this.parentNode;
		for (var n in this.__transition) if (+n !== e) return;
		t && t.removeChild(this);
	};
}
function fn() {
	return this.on("end.remove", dn(this._id));
}
function pn(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = y(e));
	for (var r = this._groups, i = r.length, a = Array(i), o = 0; o < i; ++o) for (var s = r[o], c = s.length, l = a[o] = Array(c), u, d, f = 0; f < c; ++f) (u = s[f]) && (d = e.call(u, u.__data__, f, s)) && ("__data__" in u && (d.__data__ = u.__data__), l[f] = d, H(l[f], t, n, f, l, G(u, n)));
	return new X(a, this._parents, t, n);
}
function mn(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = te(e));
	for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s) for (var c = r[s], l = c.length, u, d = 0; d < l; ++d) if (u = c[d]) {
		for (var f = e.call(u, u.__data__, d, c), p, m = G(u, n), h = 0, g = f.length; h < g; ++h) (p = f[h]) && H(p, t, n, h, f, m);
		a.push(f), o.push(u);
	}
	return new X(a, o, t, n);
}
var hn = F.prototype.constructor;
function gn() {
	return new hn(this._groups, this._parents);
}
function _n(e, t) {
	var n, r, i;
	return function() {
		var a = E(this, e), o = (this.style.removeProperty(e), E(this, e));
		return a === o ? null : a === n && o === r ? i : i = t(n = a, r = o);
	};
}
function Y(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function vn(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = E(this, e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function yn(e, t, n) {
	var r, i, a;
	return function() {
		var o = E(this, e), s = n(this), c = s + "";
		return s ?? (c = s = (this.style.removeProperty(e), E(this, e))), o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s));
	};
}
function bn(e, t) {
	var n, r, i, a = "style." + t, o = "end." + a, s;
	return function() {
		var c = W(this, e), l = c.on, u = c.value[a] == null ? s ||= Y(t) : void 0;
		(l !== n || i !== u) && (r = (n = l).copy()).on(o, i = u), c.on = r;
	};
}
function xn(e, t, n) {
	var r = (e += "") == "transform" ? i : J;
	return t == null ? this.styleTween(e, _n(e, r)).on("end.style." + e, Y(e)) : typeof t == "function" ? this.styleTween(e, yn(e, r, q(this, "style." + e, t))).each(bn(this._id, e)) : this.styleTween(e, vn(e, r, t), n).on("end.style." + e, null);
}
function Sn(e, t, n) {
	return function(r) {
		this.style.setProperty(e, t.call(this, r), n);
	};
}
function Cn(e, t, n) {
	var r, i;
	function a() {
		var a = t.apply(this, arguments);
		return a !== i && (r = (i = a) && Sn(e, a, n)), r;
	}
	return a._value = t, a;
}
function wn(e, t, n) {
	var r = "style." + (e += "");
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (t == null) return this.tween(r, null);
	if (typeof t != "function") throw Error();
	return this.tween(r, Cn(e, t, n ?? ""));
}
function Tn(e) {
	return function() {
		this.textContent = e;
	};
}
function En(e) {
	return function() {
		var t = e(this);
		this.textContent = t ?? "";
	};
}
function Dn(e) {
	return this.tween("text", typeof e == "function" ? En(q(this, "text", e)) : Tn(e == null ? "" : e + ""));
}
function On(e) {
	return function(t) {
		this.textContent = e.call(this, t);
	};
}
function kn(e) {
	var t, n;
	function r() {
		var r = e.apply(this, arguments);
		return r !== n && (t = (n = r) && On(r)), t;
	}
	return r._value = e, r;
}
function An(e) {
	var t = "text";
	if (arguments.length < 1) return (t = this.tween(t)) && t._value;
	if (e == null) return this.tween(t, null);
	if (typeof e != "function") throw Error();
	return this.tween(t, kn(e));
}
function jn() {
	for (var e = this._name, t = this._id, n = Pn(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) if (c = o[l]) {
		var u = G(c, t);
		H(c, e, n, l, o, {
			time: u.time + u.delay + u.duration,
			delay: 0,
			duration: u.duration,
			ease: u.ease
		});
	}
	return new X(r, this._parents, e, n);
}
function Mn() {
	var e, t, n = this, r = n._id, i = n.size();
	return new Promise(function(a, o) {
		var s = { value: o }, c = { value: function() {
			--i === 0 && a();
		} };
		n.each(function() {
			var n = W(this, r), i = n.on;
			i !== e && (t = (e = i).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), n.on = t;
		}), i === 0 && a();
	});
}
var Nn = 0;
function X(e, t, n, r) {
	this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Z(e) {
	return F().transition(e);
}
function Pn() {
	return ++Nn;
}
var Q = F.prototype;
X.prototype = Z.prototype = {
	constructor: X,
	select: pn,
	selectAll: mn,
	selectChild: Q.selectChild,
	selectChildren: Q.selectChildren,
	filter: on,
	merge: sn,
	selection: gn,
	transition: jn,
	call: Q.call,
	nodes: Q.nodes,
	node: Q.node,
	size: Q.size,
	empty: Q.empty,
	each: Q.each,
	on: un,
	attr: Ut,
	attrTween: Jt,
	style: xn,
	styleTween: wn,
	text: Dn,
	textTween: An,
	remove: fn,
	tween: It,
	delay: Zt,
	duration: en,
	ease: nn,
	easeVarying: an,
	end: Mn,
	[Symbol.iterator]: Q[Symbol.iterator]
};
var Fn = {
	time: null,
	delay: 0,
	duration: 250,
	ease: a
};
function In(e, t) {
	for (var n; !(n = e.__transition) || !(n = n[t]);) if (!(e = e.parentNode)) throw Error(`transition ${t} not found`);
	return n;
}
function Ln(e) {
	var t, n;
	e instanceof X ? (t = e._id, e = e._name) : (t = Pn(), (n = Fn).time = u(), e = e == null ? null : e + "");
	for (var r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && H(c, e, t, l, o, n || In(c, t));
	return new X(r, this._parents, e, t);
}
F.prototype.interrupt = Nt, F.prototype.transition = Ln;
function $(e, t, n) {
	this.k = e, this.x = t, this.y = n;
}
$.prototype = {
	constructor: $,
	scale: function(e) {
		return e === 1 ? this : new $(this.k * e, this.x, this.y);
	},
	translate: function(e, t) {
		return e === 0 & t === 0 ? this : new $(this.k, this.x + this.k * e, this.y + this.k * t);
	},
	apply: function(e) {
		return [e[0] * this.k + this.x, e[1] * this.k + this.y];
	},
	applyX: function(e) {
		return e * this.k + this.x;
	},
	applyY: function(e) {
		return e * this.k + this.y;
	},
	invert: function(e) {
		return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
	},
	invertX: function(e) {
		return (e - this.x) / this.k;
	},
	invertY: function(e) {
		return (e - this.y) / this.k;
	},
	rescaleX: function(e) {
		return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
	},
	rescaleY: function(e) {
		return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
	},
	toString: function() {
		return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
	}
};
var Rn = new $(1, 0, 0);
zn.prototype = $.prototype;
function zn(e) {
	for (; !e.__zoom;) if (!(e = e.parentNode)) return Rn;
	return e.__zoom;
}
//#endregion
export { Z as a, kt as c, Rn as d, zn as f, d as i, K as l, F as n, X as o, x as r, N as s, $ as t, P as u };

//# sourceMappingURL=transform-B2AI7qp--hg0kwf7R.js.map