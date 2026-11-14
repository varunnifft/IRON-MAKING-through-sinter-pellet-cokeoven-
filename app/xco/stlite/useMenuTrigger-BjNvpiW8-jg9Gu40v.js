import { $t as e, C as t, D as n, Dt as r, E as i, Ft as a, H as o, I as s, J as c, L as l, Lt as u, M as d, N as f, Nt as p, Ot as m, Q as h, R as g, S as _, T as v, Ut as y, W as b, Zt as x, a as S, an as C, at as w, b as T, bt as E, cn as D, d as O, dn as k, ds as A, dt as j, et as M, fn as N, ft as ee, g as P, gt as F, hn as I, ht as L, i as R, it as z, jt as B, kt as te, l as V, ms as ne, mt as re, n as ie, nt as H, on as ae, ot as U, p as oe, pn as se, pt as W, q as ce, r as G, rt as K, s as q, sn as le, t as ue, tn as de, tt as fe, vt as pe, wt as me, xt as he } from "./index-B1FrxEMd-BsPMjC5n.js";
import { t as ge } from "./useCollator-DP4BnoIq-QM8AOSx3.js";
import { a as _e, i as ve, n as ye, o as be, r as xe, t as Se } from "./useLoadMoreSentinel-7ezKn0I6-CVdwtTzs.js";
import { n as Ce } from "./Autocomplete-yBl0QZl8-BEE9EvYw.js";
//#region ../react/build/useMenuTrigger-BjNvpiW8.js
var J = /* @__PURE__ */ ne(A(), 1);
function we(e, t) {
	let n = (0, J.useRef)(!0), r = (0, J.useRef)(null), i = I(e);
	(0, J.useEffect)(() => (n.current = !0, () => {
		n.current = !1;
	}), []), (0, J.useEffect)(() => {
		let e = r.current;
		n.current ? n.current = !1 : (!e || t.some((t, n) => !Object.is(t, e[n]))) && i(), r.current = t;
	}, t);
}
var Y = /* @__PURE__ */ (0, J.createContext)({}), Te = /* @__PURE__ */ (0, J.createContext)(null), Ee = /* @__PURE__ */ (0, J.forwardRef)(function(e, t) {
	let { render: n } = (0, J.useContext)(Te);
	return /* @__PURE__ */ J.createElement(J.Fragment, null, n(e, t));
});
function De(e, t) {
	let n = e?.renderDropIndicator, r = e?.isVirtualDragging?.(), i = (0, J.useCallback)((e) => {
		if (r || t?.isDropTarget(e)) return n ? n(e) : /* @__PURE__ */ J.createElement(Ee, { target: e });
	}, [
		t?.target,
		r,
		n
	]);
	return e?.useDropIndicator ? i : void 0;
}
function Oe(e, t, n) {
	let r = e.focusedKey, i = null;
	if (t?.isVirtualDragging?.() && n?.target?.type === "item" && (i = n.target.key, n.target.dropPosition === "after")) {
		let e = n.collection.getKeyAfter(i), t = null;
		if (e != null) {
			let r = n.collection.getItem(i)?.level ?? 0;
			for (; e != null;) {
				let i = n.collection.getItem(e);
				if (!i) break;
				if (i.type !== "item") {
					e = n.collection.getKeyAfter(e);
					continue;
				}
				if ((i.level ?? 0) <= r) break;
				t = e, e = n.collection.getKeyAfter(e);
			}
		}
		i = e ?? t ?? i;
	}
	return (0, J.useMemo)(() => new Set([r, i].filter((e) => e != null)), [r, i]);
}
var X = /* @__PURE__ */ new WeakMap();
function ke(e) {
	return typeof e == "string" ? e.replace(/\s*/g, "") : "" + e;
}
function Ae(e, t) {
	let n = X.get(e);
	if (!n) throw Error("Unknown list");
	return `${n.id}-option-${ke(t)}`;
}
function je(e, t, n) {
	let r = L(e, { labelable: !0 }), a = e.selectionBehavior || "toggle", o = e.orientation || "vertical", s = e.linkBehavior || (a === "replace" ? "action" : "override");
	a === "toggle" && s === "action" && (s = "override");
	let { listProps: c } = _e({
		...e,
		ref: n,
		selectionManager: t.selectionManager,
		collection: t.collection,
		disabledKeys: t.disabledKeys,
		linkBehavior: s
	}), { focusWithinProps: l } = i({
		onFocusWithin: e.onFocus,
		onBlurWithin: e.onBlur,
		onFocusWithinChange: e.onFocusChange
	}), u = f(e.id);
	X.set(t, {
		id: u,
		shouldUseVirtualFocus: e.shouldUseVirtualFocus,
		shouldSelectOnPressUp: e.shouldSelectOnPressUp,
		shouldFocusOnHover: e.shouldFocusOnHover,
		isVirtualized: e.isVirtualized,
		onAction: e.onAction,
		linkBehavior: s,
		UNSTABLE_itemBehavior: e.UNSTABLE_itemBehavior
	});
	let { labelProps: d, fieldProps: m } = R({
		...e,
		id: u,
		labelElementType: "span"
	});
	return {
		labelProps: d,
		listBoxProps: p(r, l, t.selectionManager.selectionMode === "multiple" ? { "aria-multiselectable": "true" } : {}, {
			role: "listbox",
			"aria-orientation": o,
			...p(m, c)
		})
	};
}
function Me(e, t, n) {
	let { key: r } = e, i = X.get(t), a = e.isDisabled ?? t.selectionManager.isDisabled(r), o = e.isSelected ?? t.selectionManager.isSelected(r), s = e.shouldSelectOnPressUp ?? i?.shouldSelectOnPressUp, c = e.shouldFocusOnHover ?? i?.shouldFocusOnHover, l = e.shouldUseVirtualFocus ?? i?.shouldUseVirtualFocus, f = e.isVirtualized ?? i?.isVirtualized, m = d(), h = d(), g = {
		role: "option",
		"aria-disabled": a || void 0,
		"aria-selected": t.selectionManager.selectionMode === "none" ? void 0 : o,
		"aria-label": e["aria-label"],
		"aria-labelledby": m,
		"aria-describedby": h
	}, _ = t.collection.getItem(r);
	if (f) {
		let e = Number(_?.index);
		g["aria-posinset"] = Number.isNaN(e) ? void 0 : e + 1, g["aria-setsize"] = be(t.collection);
	}
	let v = i?.onAction ? () => i?.onAction?.(r) : void 0, y = Ae(t, r), { itemProps: b, isPressed: x, isFocused: S, hasAction: C, allowsSelection: w } = k({
		selectionManager: t.selectionManager,
		key: r,
		ref: n,
		shouldSelectOnPressUp: s,
		allowsDifferentPressOrigin: s && c,
		isVirtualized: f,
		shouldUseVirtualFocus: l,
		isDisabled: a,
		onAction: v || _?.props?.onAction ? me(_?.props?.onAction, v) : void 0,
		linkBehavior: i?.linkBehavior,
		UNSTABLE_itemBehavior: i?.UNSTABLE_itemBehavior,
		id: y
	}), { hoverProps: T } = de({
		isDisabled: a || !c,
		onHoverStart() {
			pe() || (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(r));
		}
	}), E = L(_?.props);
	delete E.id;
	let D = u(_?.props);
	return {
		optionProps: {
			...g,
			...p(E, b, T, D),
			id: y
		},
		labelProps: { id: m },
		descriptionProps: { id: h },
		isFocused: S,
		isFocusVisible: S && t.selectionManager.isFocused && pe(),
		isSelected: o,
		isDisabled: a,
		isPressed: x,
		allowsSelection: w,
		hasAction: C
	};
}
function Ne(e) {
	let { heading: t, "aria-label": n } = e, r = f();
	return {
		itemProps: { role: "presentation" },
		headingProps: t ? {
			id: r,
			role: "presentation",
			onMouseDown: (e) => {
				e.preventDefault();
			}
		} : {},
		groupProps: {
			role: "group",
			"aria-label": n,
			"aria-labelledby": t ? r : void 0
		}
	};
}
var Z = /* @__PURE__ */ (0, J.createContext)(null), Q = /* @__PURE__ */ (0, J.createContext)(null), Pe = /* @__PURE__ */ (0, J.forwardRef)(function(e, t) {
	[e, t] = H(e, t, Z);
	let n = (0, J.useContext)(Q);
	return n ? /* @__PURE__ */ J.createElement(Ie, {
		state: n,
		props: e,
		listBoxRef: t
	}) : /* @__PURE__ */ J.createElement(l, { content: /* @__PURE__ */ J.createElement(g, e) }, (n) => /* @__PURE__ */ J.createElement(Fe, {
		props: e,
		listBoxRef: t,
		collection: n
	}));
});
function Fe({ props: e, listBoxRef: t, collection: n }) {
	e = {
		...e,
		collection: n,
		children: null,
		items: null
	};
	let { layoutDelegate: i } = (0, J.useContext)(T), a = r({
		...e,
		layoutDelegate: i
	});
	return /* @__PURE__ */ J.createElement(Ie, {
		state: a,
		props: e,
		listBoxRef: t
	});
}
function Ie({ state: e, props: t, listBoxRef: r }) {
	[t, r] = H(t, r, Ce);
	let { dragAndDropHooks: i, layout: a = "stack", orientation: o = "vertical", filter: s } = t, c = m(e, s), { collection: l, selectionManager: u } = c, d = !!i?.useDraggableCollectionState, f = !!i?.useDroppableCollectionState, { direction: h } = n(), { disabledBehavior: g, disabledKeys: v } = u, y = ge({
		usage: "search",
		sensitivity: "base"
	}), { isVirtualized: x, layoutDelegate: C, dropTargetDelegate: w, CollectionRoot: E } = (0, J.useContext)(T), D = (0, J.useMemo)(() => t.keyboardDelegate || new ye({
		collection: l,
		collator: y,
		ref: r,
		disabledKeys: v,
		disabledBehavior: g,
		layout: a,
		orientation: o,
		direction: h,
		layoutDelegate: C
	}), [
		l,
		y,
		r,
		g,
		v,
		o,
		h,
		t.keyboardDelegate,
		a,
		C
	]), { listBoxProps: O } = je({
		...t,
		shouldSelectOnPressUp: d || t.shouldSelectOnPressUp,
		keyboardDelegate: D,
		isVirtualized: x
	}, c, r);
	(0, J.useRef)(d), (0, J.useRef)(f), (0, J.useEffect)(() => {}, [d, f]);
	let k, A, j, M = !1, N = null, P = (0, J.useRef)(null);
	if (d && i) {
		k = i.useDraggableCollectionState({
			collection: l,
			selectionManager: u,
			preview: i.renderDragPreview ? P : void 0
		}), i.useDraggableCollection({}, k, r);
		let e = i.DragPreview;
		N = i.renderDragPreview ? /* @__PURE__ */ J.createElement(e, { ref: P }, i.renderDragPreview) : null;
	}
	if (f && i) {
		A = i.useDroppableCollectionState({
			collection: l,
			selectionManager: u
		});
		let e = i.dropTargetDelegate || w || new i.ListDropTargetDelegate(l, r, {
			orientation: o,
			layout: a,
			direction: h
		});
		j = i.useDroppableCollection({
			keyboardDelegate: D,
			dropTargetDelegate: e
		}, A, r), M = A.isDropTarget({ type: "root" });
	}
	let { focusProps: F, isFocused: I, isFocusVisible: R } = S(), z = c.collection.size === 0, B = {
		isDropTarget: M,
		isEmpty: z,
		isFocused: I,
		isFocusVisible: R,
		layout: t.layout || "stack",
		orientation: o,
		state: c
	}, te = K({
		...t,
		children: void 0,
		defaultClassName: "react-aria-ListBox",
		values: B
	}), V = null;
	z && t.renderEmptyState && (V = /* @__PURE__ */ J.createElement("div", {
		role: "option",
		style: { display: "contents" }
	}, t.renderEmptyState(B)));
	let ne = L(t, { global: !0 });
	return /* @__PURE__ */ J.createElement(b, null, /* @__PURE__ */ J.createElement(U.div, {
		...p(ne, te, O, F, j?.collectionProps),
		ref: r,
		slot: t.slot || void 0,
		onScroll: t.onScroll,
		"data-drop-target": M || void 0,
		"data-empty": z || void 0,
		"data-focused": I || void 0,
		"data-focus-visible": R || void 0,
		"data-layout": t.layout || "stack",
		"data-orientation": o
	}, /* @__PURE__ */ J.createElement(fe, { values: [
		[Z, t],
		[Q, c],
		[Y, {
			dragAndDropHooks: i,
			dragState: k,
			dropState: A
		}],
		[ve, { elementType: "div" }],
		[Te, { render: ze }],
		[_, {
			name: "ListBoxSection",
			render: Le
		}]
	] }, /* @__PURE__ */ J.createElement(ee, null, /* @__PURE__ */ J.createElement(E, {
		collection: l,
		scrollRef: r,
		persistedKeys: Oe(u, i, A),
		renderDropIndicator: De(i, A)
	}))), V, N));
}
function Le(e, t, n, r = "react-aria-ListBoxSection") {
	let i = (0, J.useContext)(Q), { dragAndDropHooks: a, dropState: o } = (0, J.useContext)(Y), { CollectionBranch: s } = (0, J.useContext)(T), [c, l] = z(), { headingProps: u, groupProps: d } = Ne({
		heading: l,
		"aria-label": e["aria-label"] ?? void 0
	}), f = K({
		...e,
		id: void 0,
		children: void 0,
		defaultClassName: r,
		values: void 0
	}), m = L(e, { global: !0 });
	return delete m.id, /* @__PURE__ */ J.createElement(U.section, {
		...p(m, f, d),
		ref: t
	}, /* @__PURE__ */ J.createElement(xe.Provider, { value: {
		...u,
		ref: c
	} }, /* @__PURE__ */ J.createElement(s, {
		collection: i.collection,
		parent: n,
		renderDropIndicator: De(a, o)
	})));
}
var Re = /* @__PURE__ */ s(M, function(e, t, n) {
	let r = ue(t), i = (0, J.useContext)(Q), { dragAndDropHooks: a, dragState: o, dropState: s } = (0, J.useContext)(Y), c = o && !(o.isDisabled || o.selectionManager.isDisabled(n.key)), { optionProps: l, labelProps: u, descriptionProps: d, ...f } = Me({
		key: n.key,
		"aria-label": e?.["aria-label"]
	}, i, r), { hoverProps: m, isHovered: h } = de({
		isDisabled: !f.allowsSelection && !f.hasAction && !c,
		onHoverStart: n.props.onHoverStart,
		onHoverChange: n.props.onHoverChange,
		onHoverEnd: n.props.onHoverEnd
	}), { keyboardProps: g } = re(e), { focusProps: _ } = V(e), v = null;
	o && a && (v = a.useDraggableItem({
		key: n.key,
		hasAction: f.hasAction
	}, o));
	let y = null;
	s && a && (y = a.useDroppableItem({ target: {
		type: "item",
		key: n.key,
		dropPosition: "on"
	} }, s, r));
	let b = o && o.isDragging(n.key), x = K({
		...e,
		id: void 0,
		children: e.children,
		defaultClassName: "react-aria-ListBoxItem",
		values: {
			...f,
			isHovered: h,
			selectionMode: i.selectionManager.selectionMode,
			selectionBehavior: i.selectionManager.selectionBehavior,
			allowsDragging: !!o,
			isDragging: b,
			isDropTarget: y?.isDropTarget
		}
	});
	(0, J.useEffect)(() => {
		n.textValue;
	}, [n.textValue]);
	let S = e.href ? U.a : U.div, T = L(e, { global: !0 });
	return delete T.id, delete T.onClick, e.href && l.tabIndex == null && (l.tabIndex = -1), /* @__PURE__ */ J.createElement(S, {
		...p(T, x, l, m, g, _, v?.dragProps, y?.dropProps),
		ref: r,
		"data-allows-dragging": !!o || void 0,
		"data-selected": f.isSelected || void 0,
		"data-disabled": f.isDisabled || void 0,
		"data-hovered": h || void 0,
		"data-focused": f.isFocused || void 0,
		"data-focus-visible": f.isFocusVisible || void 0,
		"data-pressed": f.isPressed || void 0,
		"data-dragging": b || void 0,
		"data-drop-target": y?.isDropTarget || void 0,
		"data-selection-mode": i.selectionManager.selectionMode === "none" ? void 0 : i.selectionManager.selectionMode
	}, /* @__PURE__ */ J.createElement(fe, { values: [[C, { slots: {
		[w]: u,
		label: u,
		description: d
	} }], [E, { isSelected: f.isSelected }]] }, x.children));
});
function ze(e, t) {
	t = ue(t);
	let { dragAndDropHooks: n, dropState: r } = (0, J.useContext)(Y), { dropIndicatorProps: i, isHidden: a, isDropTarget: o } = n.useDropIndicator(e, r, t);
	return a ? null : /* @__PURE__ */ J.createElement(Ve, {
		...e,
		dropIndicatorProps: i,
		isDropTarget: o,
		ref: t
	});
}
function Be(e, t) {
	let { dropIndicatorProps: n, isDropTarget: r, ...i } = e, a = K({
		...i,
		defaultClassName: "react-aria-DropIndicator",
		values: { isDropTarget: r }
	});
	return /* @__PURE__ */ J.createElement(J.Fragment, null, /* @__PURE__ */ J.createElement(U.div, {
		...n,
		...a,
		role: "option",
		ref: t,
		"data-drop-target": r || void 0
	}));
}
var Ve = /* @__PURE__ */ (0, J.forwardRef)(Be);
s(h, function(e, t, n) {
	let r = (0, J.useContext)(Q), { isLoading: i, onLoadMore: a, scrollOffset: o, ...s } = e, c = (0, J.useRef)(null), l = (0, J.useMemo)(() => ({
		onLoadMore: a,
		collection: r?.collection,
		sentinelRef: c,
		scrollOffset: o
	}), [
		a,
		o,
		r?.collection
	]);
	Se(l, c);
	let u = K({
		...s,
		id: void 0,
		children: n.rendered,
		defaultClassName: "react-aria-ListBoxLoadingIndicator",
		values: void 0
	});
	return /* @__PURE__ */ J.createElement(J.Fragment, null, /* @__PURE__ */ J.createElement("div", {
		style: {
			position: "relative",
			width: 0,
			height: 0
		},
		inert: te(!0)
	}, /* @__PURE__ */ J.createElement("div", {
		"data-testid": "loadMoreSentinel",
		ref: c,
		style: {
			position: "absolute",
			height: 1,
			width: 1
		}
	})), i && u.children && /* @__PURE__ */ J.createElement(J.Fragment, null, /* @__PURE__ */ J.createElement(U.div, {
		...p(L(e, { global: !0 }), { tabIndex: -1 }),
		...u,
		role: "option",
		ref: t
	}, u.children)));
});
function He(e, t) {
	let { triggerRef: n, popoverRef: r, groupRef: a, isNonModal: o, isKeyboardDismissDisabled: s, shouldCloseOnInteractOutside: l, ...u } = e, d = u.trigger === "SubmenuTrigger", { overlayProps: f, underlayProps: m } = j({
		isOpen: t.isOpen,
		onClose: t.close,
		shouldCloseOnBlur: !0,
		isDismissable: !o || d,
		isKeyboardDismissDisabled: s,
		shouldCloseOnInteractOutside: l
	}, a ?? r), { overlayProps: h, arrowProps: g, placement: _, triggerAnchorPoint: v } = B({
		...u,
		targetRef: n,
		overlayRef: r,
		isOpen: t.isOpen,
		onClose: o && !d ? t.close : null,
		getTargetRect: u.getTargetRect ?? (t.point ? () => new DOMRect(t.point.x, t.point.y, 0, 0) : void 0)
	});
	ie({ isDisabled: o || !t.isOpen }), (0, J.useEffect)(() => {
		if (t.isOpen && r.current) return o ? ce(a?.current ?? r.current) : c([a?.current ?? r.current], { shouldUseInert: !0 });
	}, [
		o,
		t.isOpen,
		r,
		a
	]);
	let { focusWithinProps: y } = i(e);
	return {
		popoverProps: p(f, h, y),
		arrowProps: g,
		underlayProps: m,
		placement: _,
		triggerAnchorPoint: v
	};
}
var Ue = /* @__PURE__ */ (0, J.createContext)(null), We = /* @__PURE__ */ (0, J.createContext)(null), Ge = /* @__PURE__ */ (0, J.forwardRef)(function(t, r) {
	[t, r] = H(t, r, Ue);
	let i = (0, J.useContext)(D), a = ae(t), o = t.isOpen != null || t.defaultOpen != null || !i ? a : i, s = N(r, o.isOpen), c = t.isExiting || !t.shouldSkipAnimation && s || !1, l = e(), { direction: u } = n();
	if (l) {
		let e = t.children;
		return typeof e == "function" && (e = e({
			trigger: t.trigger || null,
			placement: "bottom",
			isEntering: !1,
			isExiting: !1,
			defaultChildren: null
		})), /* @__PURE__ */ J.createElement(J.Fragment, null, e);
	}
	return o && !o.isOpen && !c ? null : /* @__PURE__ */ J.createElement(Ke, {
		...t,
		triggerRef: t.triggerRef,
		state: o,
		popoverRef: r,
		isExiting: c,
		dir: u
	});
});
function Ke({ state: e, isExiting: t, UNSTABLE_portalContainer: n, clearContexts: r, ...i }) {
	let s = (0, J.useRef)(null), c = (0, J.useRef)(null), l = (0, J.useContext)(We), u = l && i.trigger === "SubmenuTrigger", { popoverProps: d, underlayProps: f, arrowProps: m, placement: h, triggerAnchorPoint: g } = He({
		...i,
		offset: i.offset ?? 8,
		arrowRef: s,
		groupRef: u ? l : c
	}, e), _ = i.popoverRef, v = se(_, !!h), y = i.isEntering || !i.shouldSkipAnimation && v || !1, b = K({
		...i,
		defaultClassName: "react-aria-Popover",
		values: {
			trigger: i.trigger || null,
			placement: h,
			isEntering: y,
			isExiting: t
		}
	}), S = !i.isNonModal || i.trigger === "SubmenuTrigger" || i.trigger === "PreviewTrigger", [C, w] = (0, J.useState)(i.trigger === "PreviewTrigger");
	a(() => {
		_.current && w(S && !_.current.querySelector("[role=dialog]"));
	}, [_, S]), (0, J.useEffect)(() => {
		C && i.trigger !== "PreviewTrigger" && (i.trigger !== "SubmenuTrigger" || F() !== "pointer") && _.current && !oe(_.current) && le(_.current);
	}, [
		C,
		_,
		i.trigger
	]);
	let T = (0, J.useMemo)(() => {
		let e = b.children;
		if (r) for (let t of r) e = /* @__PURE__ */ J.createElement(t.Provider, { value: null }, e);
		return e;
	}, [b.children, r]), [E, D] = (0, J.useState)(null), O = (0, J.useCallback)(() => {
		i.triggerRef.current && D(i.triggerRef.current.getBoundingClientRect().width + "px");
	}, [i.triggerRef]);
	a(O, [O]), he({
		ref: b.style?.["--trigger-width"] ? void 0 : i.triggerRef,
		onResize: O
	});
	let k = {
		...d.style,
		"--trigger-anchor-point": g ? `${g.x}px ${g.y}px` : void 0,
		...b.style,
		"--trigger-width": b.style?.["--trigger-width"] || E
	}, A = /* @__PURE__ */ J.createElement(U.div, {
		...p(L(i, { global: !0 }), d),
		...b,
		id: C ? i.id : void 0,
		role: C ? "dialog" : void 0,
		tabIndex: C ? -1 : void 0,
		"aria-label": i["aria-label"],
		"aria-labelledby": i["aria-labelledby"],
		ref: _,
		slot: i.slot || void 0,
		style: k,
		dir: i.dir,
		"data-trigger": i.trigger,
		"data-placement": h,
		"data-entering": y || void 0,
		"data-exiting": t || void 0
	}, !i.isNonModal && /* @__PURE__ */ J.createElement(G, { onDismiss: e.close }), /* @__PURE__ */ J.createElement(o.Provider, { value: {
		...m,
		placement: h,
		ref: s
	} }, T), /* @__PURE__ */ J.createElement(G, { onDismiss: e.close }));
	return u ? /* @__PURE__ */ J.createElement(x, {
		...i,
		shouldContainFocus: C && i.trigger !== "PreviewTrigger",
		isExiting: t,
		portalContainer: n ?? l?.current ?? void 0
	}, A) : /* @__PURE__ */ J.createElement(x, {
		...i,
		shouldContainFocus: C && i.trigger !== "PreviewTrigger",
		isExiting: t,
		portalContainer: n
	}, !i.isNonModal && e.isOpen && /* @__PURE__ */ J.createElement("div", {
		"data-testid": "underlay",
		...f,
		style: {
			position: "fixed",
			inset: 0
		}
	}), /* @__PURE__ */ J.createElement("div", {
		ref: c,
		style: { display: "contents" }
	}, /* @__PURE__ */ J.createElement(We.Provider, { value: c }, A)));
}
var qe = {};
qe = { longPressMessage: "اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة" };
var Je = {};
Je = { longPressMessage: "Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто" };
var Ye = {};
Ye = { longPressMessage: "Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku" };
var Xe = {};
Xe = { longPressMessage: "Langt tryk eller tryk på Alt + pil ned for at åbne menuen" };
var Ze = {};
Ze = { longPressMessage: "Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen" };
var Qe = {};
Qe = { longPressMessage: "Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού" };
var $e = {};
$e = { longPressMessage: "Long press or press Alt + ArrowDown to open menu" };
var et = {};
et = { longPressMessage: "Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú" };
var tt = {};
tt = { longPressMessage: "Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool" };
var nt = {};
nt = { longPressMessage: "Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli" };
var rt = {};
rt = { longPressMessage: "Appuyez de manière prolongée ou appuyez sur Alt\xA0+\xA0Flèche vers le bas pour ouvrir le menu." };
var it = {};
it = { longPressMessage: "לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט" };
var at = {};
at = { longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika" };
var ot = {};
ot = { longPressMessage: "Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához" };
var st = {};
st = { longPressMessage: "Premi a lungo o premi Alt + Freccia giù per aprire il menu" };
var ct = {};
ct = { longPressMessage: "長押しまたは Alt+下矢印キーでメニューを開く" };
var lt = {};
lt = { longPressMessage: "길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기" };
var ut = {};
ut = { longPressMessage: "Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“." };
var dt = {};
dt = { longPressMessage: "Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa" };
var ft = {};
ft = { longPressMessage: "Langt trykk eller trykk Alt + PilNed for å åpne menyen" };
var pt = {};
pt = { longPressMessage: "Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen" };
var mt = {};
mt = { longPressMessage: "Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu" };
var ht = {};
ht = { longPressMessage: "Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu" };
var gt = {};
gt = { longPressMessage: "Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu" };
var _t = {};
_t = { longPressMessage: "Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul" };
var vt = {};
vt = { longPressMessage: "Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню" };
var yt = {};
yt = { longPressMessage: "Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol" };
var $ = {};
$ = { longPressMessage: "Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol" };
var bt = {};
bt = { longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni" };
var xt = {};
xt = { longPressMessage: "Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn" };
var St = {};
St = { longPressMessage: "Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın" };
var Ct = {};
Ct = { longPressMessage: "Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню" };
var wt = {};
wt = { longPressMessage: "长按或按 Alt + 向下方向键以打开菜单" };
var Tt = {};
Tt = { longPressMessage: "長按或按 Alt+向下鍵以開啟功能表" };
var Et = {};
Et = {
	"ar-AE": qe,
	"bg-BG": Je,
	"cs-CZ": Ye,
	"da-DK": Xe,
	"de-DE": Ze,
	"el-GR": Qe,
	"en-US": $e,
	"es-ES": et,
	"et-EE": tt,
	"fi-FI": nt,
	"fr-FR": rt,
	"he-IL": it,
	"hr-HR": at,
	"hu-HU": ot,
	"it-IT": st,
	"ja-JP": ct,
	"ko-KR": lt,
	"lt-LT": ut,
	"lv-LV": dt,
	"nb-NO": ft,
	"nl-NL": pt,
	"pl-PL": mt,
	"pt-BR": ht,
	"pt-PT": gt,
	"ro-RO": _t,
	"ru-RU": vt,
	"sk-SK": yt,
	"sl-SI": $,
	"sr-SP": bt,
	"sv-SE": xt,
	"tr-TR": St,
	"uk-UA": Ct,
	"zh-CN": wt,
	"zh-TW": Tt
};
function Dt(e) {
	let { onContextMenu: n } = e, r = (0, J.useRef)(!1), { longPressProps: i } = W({
		onLongPressStart() {
			r.current = !1;
		},
		onLongPress(e) {
			r.current ? r.current = !1 : n?.({
				target: e.target,
				x: e.x,
				y: e.y
			});
		}
	});
	return n ? { contextMenuProps: p(v() ? i : {}, {
		onContextMenu(e) {
			e.stopPropagation(), e.preventDefault(), r.current = !0;
			let t = e.currentTarget.getBoundingClientRect();
			n({
				target: e.currentTarget,
				x: e.clientX - t.x,
				y: e.clientY - t.y
			});
		},
		onKeyDown(e) {
			if (t() && e.ctrlKey && e.key === "Enter") {
				r.current = !1;
				let t = e.currentTarget;
				e.stopPropagation(), setTimeout(() => {
					if (r.current) r.current = !1;
					else {
						let e = t.getBoundingClientRect();
						n({
							target: t,
							x: e.width / 2,
							y: e.height / 2
						});
					}
				}, 10);
			}
		}
	}) } : { contextMenuProps: {} };
}
function Ot(e, t, n) {
	let { type: r } = e, { isOpen: i } = t;
	(0, J.useEffect)(() => {
		n && n.current && O.set(n.current, t.close);
	});
	let a;
	r === "menu" ? a = !0 : r === "listbox" && (a = "listbox");
	let o = f();
	return {
		triggerProps: {
			"aria-haspopup": a,
			"aria-expanded": i,
			"aria-controls": i ? o : void 0,
			onPress: t.toggle
		},
		overlayProps: { id: o }
	};
}
function kt(e) {
	return e && e.__esModule ? e.default : e;
}
function At(e, t, n) {
	let { type: r = "menu", isDisabled: i, trigger: a = "press" } = e, o = f(), { triggerProps: s, overlayProps: c } = Ot({ type: r }, t, n), l = (e, n, r = "first") => {
		if (!e || n.isDefaultPrevented()) return !1;
		t.toggle(r);
	}, { keyboardProps: u } = re({
		isDisabled: i,
		shortcuts: {
			Enter: (e) => l(a !== "longPress", e, "first"),
			" ": (e) => l(a !== "longPress", e, "first"),
			ArrowDown: (e) => l(a !== "longPress", e, "first"),
			ArrowUp: (e) => l(a !== "longPress", e, "last"),
			"Alt+Enter": (e) => l(a === "longPress", e, "first"),
			"Alt+ ": (e) => l(a === "longPress", e, "first"),
			"Alt+ArrowDown": (e) => l(!0, e, "first"),
			"Alt+ArrowUp": (e) => l(!0, e, "last")
		}
	}), d = y(kt(Et), "@react-aria/menu"), { longPressProps: p } = W({
		isDisabled: i || a !== "longPress",
		accessibilityDescription: d.format("longPressMessage"),
		onLongPressStart() {
			t.close();
		},
		onLongPress() {
			t.open("first");
		}
	}), m = {
		preventFocusOnPress: !0,
		onPressStart(e) {
			e.pointerType !== "touch" && e.pointerType !== "keyboard" && !i && (q(e.target), t.open(e.pointerType === "virtual" ? "first" : null));
		},
		onPress(e) {
			e.pointerType === "touch" && !i && (q(e.target), t.toggle());
		}
	};
	delete s.onPress;
	let { contextMenuProps: h } = Dt({ onContextMenu(e) {
		let n = e.target.getBoundingClientRect();
		t.setPoint({
			x: n.x + e.x,
			y: n.y + e.y
		}), t.open();
	} });
	(0, J.useEffect)(() => {
		if (t.isOpen && a === "contextMenu") {
			let e = (e) => {
				(e.button === 2 || e.button === 0 && e.ctrlKey === !0) && P(e) === document.body && t.close();
			};
			return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
		}
	}, [t, a]);
	let g;
	if (a === "press") g = {
		...m,
		...u
	};
	else if (a === "longPress") g = {
		...p,
		...u
	};
	else if (a === "contextMenu") {
		g = h;
		let { "aria-haspopup": e, "aria-expanded": t, "aria-controls": n, ...r } = s;
		s = r;
	}
	return {
		menuTriggerProps: {
			...s,
			...g,
			id: o
		},
		menuProps: {
			...c,
			"aria-labelledby": o,
			autoFocus: t.focusStrategy || !0,
			onClose: t.close
		}
	};
}
//#endregion
export { Z as a, we as c, X as i, Ae as l, At as n, Q as o, Re as r, Ue as s, Ge as t, Pe as u };

//# sourceMappingURL=useMenuTrigger-BjNvpiW8-jg9Gu40v.js.map