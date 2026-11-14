import { M as e, N as t, T as n, a7 as r, ai as i, aj as a, al as o, an as s, b6 as c, bB as l, bx as u, by as d, bz as f, c as p } from "./mermaid.core-iLj2gv8s-DM09IeU-.js";
import { t as m } from "./chunk-JWPE2WC7-BuMGiM24-C4YAbtTB.js";
import { i as h } from "./cynefin-OW5HDTMX--IlWkCwH-DhMvmN4k.js";
//#region ../react/build/diagram-Z3DM3KII-CHY7MdRm.js
var g = r.packet, _, v = (_ = class {
	constructor() {
		this.packet = [], this.setAccTitle = f, this.getAccTitle = a, this.setDiagramTitle = l, this.getDiagramTitle = s, this.getAccDescription = i, this.setAccDescription = d;
	}
	getConfig() {
		let t = e({
			...g,
			...o().packet
		});
		return t.showBits && (t.paddingY += 10), t;
	}
	getPacket() {
		return this.packet;
	}
	pushWord(e) {
		e.length > 0 && this.packet.push(e);
	}
	clear() {
		t(), this.packet = [];
	}
}, p(_, "PacketDB"), _), y = 1e4, b = /* @__PURE__ */ p((e, t) => {
	m(e, t);
	let n = -1, r = [], i = 1, { bitsPerRow: a } = t.getConfig();
	for (let { start: o, end: s, bits: l, label: u } of e.blocks) {
		if (o !== void 0 && s !== void 0 && s < o) throw Error(`Packet block ${o} - ${s} is invalid. End must be greater than start.`);
		if (o ??= n + 1, o !== n + 1) throw Error(`Packet block ${o} - ${s ?? o} is not contiguous. It should start from ${n + 1}.`);
		if (l === 0) throw Error(`Packet block ${o} is invalid. Cannot have a zero bit field.`);
		for (s ??= o + (l ?? 1) - 1, l ??= s - o + 1, n = s, c.debug(`Packet block ${o} - ${n} with label ${u}`); r.length <= a + 1 && t.getPacket().length < y;) {
			let [e, n] = x({
				start: o,
				end: s,
				bits: l,
				label: u
			}, i, a);
			if (r.push(e), e.end + 1 === i * a && (t.pushWord(r), r = [], i++), !n) break;
			({start: o, end: s, bits: l, label: u} = n);
		}
	}
	t.pushWord(r);
}, "populate"), x = /* @__PURE__ */ p((e, t, n) => {
	if (e.start === void 0) throw Error("start should have been set during first phase");
	if (e.end === void 0) throw Error("end should have been set during first phase");
	if (e.start > e.end) throw Error(`Block start ${e.start} is greater than block end ${e.end}.`);
	if (e.end + 1 <= t * n) return [e, void 0];
	let r = t * n - 1, i = t * n;
	return [{
		start: e.start,
		end: r,
		label: e.label,
		bits: r - e.start
	}, {
		start: i,
		end: e.end,
		label: e.label,
		bits: e.end - i
	}];
}, "getNextFittingBlock"), S = {
	parser: { yy: void 0 },
	parse: /* @__PURE__ */ p(async (e) => {
		let t = await h("packet", e), n = S.parser?.yy;
		if (!(n instanceof v)) throw Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
		c.debug(t), b(t, n);
	}, "parse")
}, C = /* @__PURE__ */ p((e, t, r, i) => {
	let a = i.db, o = a.getConfig(), { rowHeight: s, paddingY: c, bitWidth: l, bitsPerRow: d } = o, f = a.getPacket(), p = a.getDiagramTitle(), m = s + c, h = m * (f.length + 1) - (p ? 0 : s), g = l * d + 2, _ = u(t);
	_.attr("viewBox", `0 0 ${g} ${h}`), n(_, h, g, o.useMaxWidth);
	for (let [e, t] of f.entries()) w(_, t, e, o);
	_.append("text").text(p).attr("x", g / 2).attr("y", h - m / 2).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("class", "packetTitle");
}, "draw"), w = /* @__PURE__ */ p((e, t, n, { rowHeight: r, paddingX: i, paddingY: a, bitWidth: o, bitsPerRow: s, showBits: c }) => {
	let l = e.append("g"), u = n * (r + a) + a;
	for (let e of t) {
		let t = e.start % s * o + 1, n = (e.end - e.start + 1) * o - i;
		if (l.append("rect").attr("x", t).attr("y", u).attr("width", n).attr("height", r).attr("class", "packetBlock"), l.append("text").attr("x", t + n / 2).attr("y", u + r / 2).attr("class", "packetLabel").attr("dominant-baseline", "middle").attr("text-anchor", "middle").text(e.label), !c) continue;
		let a = e.end === e.start, d = u - 2;
		l.append("text").attr("x", t + (a ? n / 2 : 0)).attr("y", d).attr("class", "packetByte start").attr("dominant-baseline", "auto").attr("text-anchor", a ? "middle" : "start").text(e.start), a || l.append("text").attr("x", t + n).attr("y", d).attr("class", "packetByte end").attr("dominant-baseline", "auto").attr("text-anchor", "end").text(e.end);
	}
}, "drawWord"), T = { draw: C }, E = {
	byteFontSize: "10px",
	startByteColor: "black",
	endByteColor: "black",
	labelColor: "black",
	labelFontSize: "12px",
	titleColor: "black",
	titleFontSize: "14px",
	blockStrokeColor: "black",
	blockStrokeWidth: "1",
	blockFillColor: "#efefef"
}, D = {
	parser: S,
	get db() {
		return new v();
	},
	renderer: T,
	styles: /* @__PURE__ */ p(({ packet: t } = {}) => {
		let n = e(E, t);
		return `
	.packetByte {
		font-size: ${n.byteFontSize};
	}
	.packetByte.start {
		fill: ${n.startByteColor};
	}
	.packetByte.end {
		fill: ${n.endByteColor};
	}
	.packetLabel {
		fill: ${n.labelColor};
		font-size: ${n.labelFontSize};
	}
	.packetTitle {
		fill: ${n.titleColor};
		font-size: ${n.titleFontSize};
	}
	.packetBlock {
		stroke: ${n.blockStrokeColor};
		stroke-width: ${n.blockStrokeWidth};
		fill: ${n.blockFillColor};
	}
	`;
	}, "styles")
};
//#endregion
export { D as diagram };

//# sourceMappingURL=diagram-Z3DM3KII-CHY7MdRm-BZtKZf8E.js.map