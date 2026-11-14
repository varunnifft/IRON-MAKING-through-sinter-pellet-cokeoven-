import "./transform-B2AI7qp--hg0kwf7R.js";
import { b6 as e, c as t } from "./mermaid.core-iLj2gv8s-DM09IeU-.js";
import { n, r, t as i } from "./chunk-SVP7TREG-D2-vJCBu-90SHpbMF.js";
import { t as a } from "./chunk-JWPE2WC7-BuMGiM24-C4YAbtTB.js";
import { a as o, o as s } from "./cynefin-OW5HDTMX--IlWkCwH-DhMvmN4k.js";
//#region ../react/build/ebnfDiagram-PWID7BFC-BK2ifBA4.js
var c = s().RailroadEbnf.parser.LangiumParser, l = /* @__PURE__ */ t((e) => {
	let t = e.alternatives.map(u);
	return t.length === 1 ? t[0] : {
		type: "choice",
		alternatives: t
	};
}, "transformChoice"), u = /* @__PURE__ */ t((e) => {
	let t = e.elements.map(p);
	return t.length === 1 ? t[0] : {
		type: "sequence",
		elements: t
	};
}, "transformSequence"), d = /* @__PURE__ */ t((e) => {
	switch (e.$type) {
		case "EbnfTerminal": return {
			type: "terminal",
			value: e.value
		};
		case "EbnfNonTerminal": return {
			type: "nonterminal",
			name: e.name
		};
		case "EbnfSpecial": return {
			type: "special",
			text: e.text
		};
		case "EbnfGroup": return l(e.element);
		case "EbnfOptional": return {
			type: "optional",
			element: l(e.element)
		};
		case "EbnfRepetition": return {
			type: "repetition",
			element: l(e.element),
			min: 0,
			max: 1 / 0
		};
		default: throw Error(`Unsupported EBNF primary node: ${e.$type}`);
	}
}, "transformPrimary"), f = /* @__PURE__ */ t((e, t) => {
	switch (t.$type) {
		case "EbnfOptionalPostfix": return {
			type: "optional",
			element: e
		};
		case "EbnfZeroOrMorePostfix": return {
			type: "repetition",
			element: e,
			min: 0,
			max: 1 / 0
		};
		case "EbnfOneOrMorePostfix": return {
			type: "repetition",
			element: e,
			min: 1,
			max: 1 / 0
		};
		case "EbnfExceptionPostfix": return {
			type: "sequence",
			elements: [
				e,
				{
					type: "terminal",
					value: "-"
				},
				d(t.except)
			]
		};
		default: throw Error(`Unsupported EBNF postfix node: ${t.$type}`);
	}
}, "transformPostfix"), p = /* @__PURE__ */ t((e) => e.postfixes.reduce((e, t) => f(e, t), d(e.base)), "transformTerm"), m = /* @__PURE__ */ t((e) => ({
	name: e.name,
	definition: l(e.definition)
}), "transformRule"), h = /* @__PURE__ */ t((e) => {
	a(e, n), e.title && n.setTitle(e.title), e.rules.map((e) => n.addRule(m(e)));
}, "populateDb"), g = {
	parser: {
		parse: /* @__PURE__ */ t((t) => {
			n.clear(), e.debug("[EBNF Parser] Starting Langium parse");
			let r = c.parse(t);
			if (r.lexerErrors.length > 0 || r.parserErrors.length > 0) throw new o(r);
			let i = r.value;
			e.debug("[EBNF Parser] Parsed rules:", i.rules.length), h(i), e.debug("[EBNF Parser] Parse complete");
		}, "parse"),
		parser: { yy: n }
	},
	db: n,
	renderer: r,
	styles: i
};
//#endregion
export { g as diagram };

//# sourceMappingURL=ebnfDiagram-PWID7BFC-BK2ifBA4-WqLJd2cT.js.map