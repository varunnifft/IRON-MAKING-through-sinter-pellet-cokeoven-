import "./transform-B2AI7qp--hg0kwf7R.js";
import { b6 as e, c as t } from "./mermaid.core-iLj2gv8s-DM09IeU-.js";
import { n, r, t as i } from "./chunk-SVP7TREG-D2-vJCBu-90SHpbMF.js";
import { t as a } from "./chunk-JWPE2WC7-BuMGiM24-C4YAbtTB.js";
import { a as o, r as s } from "./cynefin-OW5HDTMX--IlWkCwH-DhMvmN4k.js";
//#region ../react/build/railroadDiagram-O6MQD6OU-SZzx-OSK.js
var c = s().Railroad.parser.LangiumParser, l = /* @__PURE__ */ t((e) => {
	switch (e.$type) {
		case "RailroadTerminalExpr": return {
			type: "terminal",
			value: e.value
		};
		case "RailroadNonTerminalExpr": return {
			type: "nonterminal",
			name: e.name
		};
		case "RailroadSpecialExpr": return {
			type: "special",
			text: e.text
		};
		case "RailroadSequenceExpr": {
			let t = e.elements.map(l);
			return t.length === 1 ? t[0] : {
				type: "sequence",
				elements: t
			};
		}
		case "RailroadChoiceExpr": {
			let t = e.alternatives.map(l);
			return t.length === 1 ? t[0] : {
				type: "choice",
				alternatives: t
			};
		}
		case "RailroadOptionalExpr": return {
			type: "optional",
			element: l(e.element)
		};
		case "RailroadOneOrMoreExpr": return {
			type: "repetition",
			element: l(e.element),
			min: 1,
			max: 1 / 0
		};
		case "RailroadZeroOrMoreExpr": return {
			type: "repetition",
			element: l(e.element),
			min: 0,
			max: 1 / 0
		};
		default: throw Error(`Unsupported railroad expression: ${e.$type}`);
	}
}, "transformExpression"), u = /* @__PURE__ */ t((e) => ({
	name: e.name,
	definition: l(e.definition)
}), "transformRule"), d = /* @__PURE__ */ t((e) => {
	a(e, n), e.title && n.setTitle(e.title), e.rules.map((e) => n.addRule(u(e)));
}, "populateDb"), f = {
	parser: {
		parse: /* @__PURE__ */ t((t) => {
			n.clear(), e.debug("[Railroad Parser] Starting Langium parse");
			let r = c.parse(t);
			if (r.lexerErrors.length > 0 || r.parserErrors.length > 0) throw new o(r);
			let i = r.value;
			e.debug("[Railroad Parser] Parsed rules:", i.rules.length), d(i), e.debug("[Railroad Parser] Parse complete");
		}, "parse"),
		parser: { yy: n }
	},
	db: n,
	renderer: r,
	styles: i
};
//#endregion
export { f as diagram };

//# sourceMappingURL=railroadDiagram-O6MQD6OU-SZzx-OSK-BMh8ujWi.js.map