import { J as e, a2 as t, a7 as n, aD as r, aH as i, aQ as a, am as o, b2 as s, b5 as c, b6 as l, bF as u, bm as d, bw as f, bx as p, c as m } from "./mermaid.core-iLj2gv8s-DM09IeU-.js";
import { t as h } from "./chunk-5VM5RSS4-B7DhKFUG-BwybK4B6.js";
//#region ../react/build/kanban-definition-UXKFOSKX-CEEnhMPV.js
var g = function() {
	var e = /* @__PURE__ */ m(function(e, t, n, r) {
		for (n ||= {}, r = e.length; r--; n[e[r]] = t);
		return n;
	}, "o"), t = [1, 4], n = [1, 13], r = [1, 12], i = [1, 15], a = [1, 16], o = [1, 20], s = [1, 19], c = [
		6,
		7,
		8
	], l = [1, 26], u = [1, 24], d = [1, 25], f = [
		6,
		7,
		11
	], p = [1, 31], h = [
		6,
		7,
		11,
		24
	], g = [
		1,
		6,
		13,
		16,
		17,
		20,
		23
	], _ = [1, 35], v = [1, 36], y = [
		1,
		6,
		7,
		11,
		13,
		16,
		17,
		20,
		23
	], b = [1, 38], x = {
		trace: /* @__PURE__ */ m(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			mindMap: 4,
			spaceLines: 5,
			SPACELINE: 6,
			NL: 7,
			KANBAN: 8,
			document: 9,
			stop: 10,
			EOF: 11,
			statement: 12,
			SPACELIST: 13,
			node: 14,
			shapeData: 15,
			ICON: 16,
			CLASS: 17,
			nodeWithId: 18,
			nodeWithoutId: 19,
			NODE_DSTART: 20,
			NODE_DESCR: 21,
			NODE_DEND: 22,
			NODE_ID: 23,
			SHAPE_DATA: 24,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			6: "SPACELINE",
			7: "NL",
			8: "KANBAN",
			11: "EOF",
			13: "SPACELIST",
			16: "ICON",
			17: "CLASS",
			20: "NODE_DSTART",
			21: "NODE_DESCR",
			22: "NODE_DEND",
			23: "NODE_ID",
			24: "SHAPE_DATA"
		},
		productions_: [
			0,
			[3, 1],
			[3, 2],
			[5, 1],
			[5, 2],
			[5, 2],
			[4, 2],
			[4, 3],
			[10, 1],
			[10, 1],
			[10, 1],
			[10, 2],
			[10, 2],
			[9, 3],
			[9, 2],
			[12, 3],
			[12, 2],
			[12, 2],
			[12, 2],
			[12, 1],
			[12, 2],
			[12, 1],
			[12, 1],
			[12, 1],
			[12, 1],
			[14, 1],
			[14, 1],
			[19, 3],
			[18, 1],
			[18, 4],
			[15, 2],
			[15, 1]
		],
		performAction: /* @__PURE__ */ m(function(e, t, n, r, i, a, o) {
			var s = a.length - 1;
			switch (i) {
				case 6:
				case 7: return r;
				case 8:
					r.getLogger().trace("Stop NL ");
					break;
				case 9:
					r.getLogger().trace("Stop EOF ");
					break;
				case 11:
					r.getLogger().trace("Stop NL2 ");
					break;
				case 12:
					r.getLogger().trace("Stop EOF2 ");
					break;
				case 15:
					r.getLogger().info("Node: ", a[s - 1].id), r.addNode(a[s - 2].length, a[s - 1].id, a[s - 1].descr, a[s - 1].type, a[s]);
					break;
				case 16:
					r.getLogger().info("Node: ", a[s].id), r.addNode(a[s - 1].length, a[s].id, a[s].descr, a[s].type);
					break;
				case 17:
					r.getLogger().trace("Icon: ", a[s]), r.decorateNode({ icon: a[s] });
					break;
				case 18:
				case 23:
					r.decorateNode({ class: a[s] });
					break;
				case 19:
					r.getLogger().trace("SPACELIST");
					break;
				case 20:
					r.getLogger().trace("Node: ", a[s - 1].id), r.addNode(0, a[s - 1].id, a[s - 1].descr, a[s - 1].type, a[s]);
					break;
				case 21:
					r.getLogger().trace("Node: ", a[s].id), r.addNode(0, a[s].id, a[s].descr, a[s].type);
					break;
				case 22:
					r.decorateNode({ icon: a[s] });
					break;
				case 27:
					r.getLogger().trace("node found ..", a[s - 2]), this.$ = {
						id: a[s - 1],
						descr: a[s - 1],
						type: r.getType(a[s - 2], a[s])
					};
					break;
				case 28:
					this.$ = {
						id: a[s],
						descr: a[s],
						type: 0
					};
					break;
				case 29:
					r.getLogger().trace("node found ..", a[s - 3]), this.$ = {
						id: a[s - 3],
						descr: a[s - 1],
						type: r.getType(a[s - 2], a[s])
					};
					break;
				case 30:
					this.$ = a[s - 1] + a[s];
					break;
				case 31: this.$ = a[s];
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: 2,
				5: 3,
				6: [1, 5],
				8: t
			},
			{ 1: [3] },
			{ 1: [2, 1] },
			{
				4: 6,
				6: [1, 7],
				7: [1, 8],
				8: t
			},
			{
				6: n,
				7: [1, 10],
				9: 9,
				12: 11,
				13: r,
				14: 14,
				16: i,
				17: a,
				18: 17,
				19: 18,
				20: o,
				23: s
			},
			e(c, [2, 3]),
			{ 1: [2, 2] },
			e(c, [2, 4]),
			e(c, [2, 5]),
			{
				1: [2, 6],
				6: n,
				12: 21,
				13: r,
				14: 14,
				16: i,
				17: a,
				18: 17,
				19: 18,
				20: o,
				23: s
			},
			{
				6: n,
				9: 22,
				12: 11,
				13: r,
				14: 14,
				16: i,
				17: a,
				18: 17,
				19: 18,
				20: o,
				23: s
			},
			{
				6: l,
				7: u,
				10: 23,
				11: d
			},
			e(f, [2, 24], {
				18: 17,
				19: 18,
				14: 27,
				16: [1, 28],
				17: [1, 29],
				20: o,
				23: s
			}),
			e(f, [2, 19]),
			e(f, [2, 21], {
				15: 30,
				24: p
			}),
			e(f, [2, 22]),
			e(f, [2, 23]),
			e(h, [2, 25]),
			e(h, [2, 26]),
			e(h, [2, 28], { 20: [1, 32] }),
			{ 21: [1, 33] },
			{
				6: l,
				7: u,
				10: 34,
				11: d
			},
			{
				1: [2, 7],
				6: n,
				12: 21,
				13: r,
				14: 14,
				16: i,
				17: a,
				18: 17,
				19: 18,
				20: o,
				23: s
			},
			e(g, [2, 14], {
				7: _,
				11: v
			}),
			e(y, [2, 8]),
			e(y, [2, 9]),
			e(y, [2, 10]),
			e(f, [2, 16], {
				15: 37,
				24: p
			}),
			e(f, [2, 17]),
			e(f, [2, 18]),
			e(f, [2, 20], { 24: b }),
			e(h, [2, 31]),
			{ 21: [1, 39] },
			{ 22: [1, 40] },
			e(g, [2, 13], {
				7: _,
				11: v
			}),
			e(y, [2, 11]),
			e(y, [2, 12]),
			e(f, [2, 15], { 24: b }),
			e(h, [2, 30]),
			{ 22: [1, 41] },
			e(h, [2, 27]),
			e(h, [2, 29])
		],
		defaultActions: {
			2: [2, 1],
			6: [2, 2]
		},
		parseError: /* @__PURE__ */ m(function(e, t) {
			if (t.recoverable) this.trace(e);
			else {
				var n = Error(e);
				throw n.hash = t, n;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ m(function(e) {
			var t = this, n = [0], r = [], i = [null], a = [], o = this.table, s = "", c = 0, l = 0, u = 2, d = 1, f = a.slice.call(arguments, 1), p = Object.create(this.lexer), h = { yy: {} };
			for (var g in this.yy) Object.prototype.hasOwnProperty.call(this.yy, g) && (h.yy[g] = this.yy[g]);
			p.setInput(e, h.yy), h.yy.lexer = p, h.yy.parser = this, typeof p.yylloc > "u" && (p.yylloc = {});
			var _ = p.yylloc;
			a.push(_);
			var v = p.options && p.options.ranges;
			this.parseError = typeof h.yy.parseError == "function" ? h.yy.parseError : Object.getPrototypeOf(this).parseError;
			function y(e) {
				n.length -= 2 * e, i.length -= e, a.length -= e;
			}
			m(y, "popStack");
			function b() {
				var e;
				return e = r.pop() || p.lex() || d, typeof e != "number" && (e instanceof Array && (r = e, e = r.pop()), e = t.symbols_[e] || e), e;
			}
			m(b, "lex");
			for (var x, S, C, w, T = {}, E, D, O, k;;) {
				if (S = n[n.length - 1], this.defaultActions[S] ? C = this.defaultActions[S] : ((x === null || typeof x > "u") && (x = b()), C = o[S] && o[S][x]), typeof C > "u" || !C.length || !C[0]) {
					var A = "";
					for (E in k = [], o[S]) this.terminals_[E] && E > u && k.push("'" + this.terminals_[E] + "'");
					A = p.showPosition ? "Parse error on line " + (c + 1) + ":\n" + p.showPosition() + "\nExpecting " + k.join(", ") + ", got '" + (this.terminals_[x] || x) + "'" : "Parse error on line " + (c + 1) + ": Unexpected " + (x == d ? "end of input" : "'" + (this.terminals_[x] || x) + "'"), this.parseError(A, {
						text: p.match,
						token: this.terminals_[x] || x,
						line: p.yylineno,
						loc: _,
						expected: k
					});
				}
				if (C[0] instanceof Array && C.length > 1) throw Error("Parse Error: multiple actions possible at state: " + S + ", token: " + x);
				switch (C[0]) {
					case 1:
						n.push(x), i.push(p.yytext), a.push(p.yylloc), n.push(C[1]), x = null, l = p.yyleng, s = p.yytext, c = p.yylineno, _ = p.yylloc;
						break;
					case 2:
						if (D = this.productions_[C[1]][1], T.$ = i[i.length - D], T._$ = {
							first_line: a[a.length - (D || 1)].first_line,
							last_line: a[a.length - 1].last_line,
							first_column: a[a.length - (D || 1)].first_column,
							last_column: a[a.length - 1].last_column
						}, v && (T._$.range = [a[a.length - (D || 1)].range[0], a[a.length - 1].range[1]]), w = this.performAction.apply(T, [
							s,
							l,
							c,
							h.yy,
							C[1],
							i,
							a
						].concat(f)), typeof w < "u") return w;
						D && (n = n.slice(0, -1 * D * 2), i = i.slice(0, -1 * D), a = a.slice(0, -1 * D)), n.push(this.productions_[C[1]][0]), i.push(T.$), a.push(T._$), O = o[n[n.length - 2]][n[n.length - 1]], n.push(O);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	x.lexer = /* @__PURE__ */ function() {
		return {
			EOF: 1,
			parseError: /* @__PURE__ */ m(function(e, t) {
				if (this.yy.parser) this.yy.parser.parseError(e, t);
				else throw Error(e);
			}, "parseError"),
			setInput: /* @__PURE__ */ m(function(e, t) {
				return this.yy = t || this.yy || {}, this._input = e, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
					first_line: 1,
					first_column: 0,
					last_line: 1,
					last_column: 0
				}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
			}, "setInput"),
			input: /* @__PURE__ */ m(function() {
				var e = this._input[0];
				return this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e, e.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e;
			}, "input"),
			unput: /* @__PURE__ */ m(function(e) {
				var t = e.length, n = e.split(/(?:\r\n?|\n)/g);
				this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t), this.offset -= t;
				var r = this.match.split(/(?:\r\n?|\n)/g);
				this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1);
				var i = this.yylloc.range;
				return this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: n ? (n.length === r.length ? this.yylloc.first_column : 0) + r[r.length - n.length].length - n[0].length : this.yylloc.first_column - t
				}, this.options.ranges && (this.yylloc.range = [i[0], i[0] + this.yyleng - t]), this.yyleng = this.yytext.length, this;
			}, "unput"),
			more: /* @__PURE__ */ m(function() {
				return this._more = !0, this;
			}, "more"),
			reject: /* @__PURE__ */ m(function() {
				if (this.options.backtrack_lexer) this._backtrack = !0;
				else return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
				return this;
			}, "reject"),
			less: /* @__PURE__ */ m(function(e) {
				this.unput(this.match.slice(e));
			}, "less"),
			pastInput: /* @__PURE__ */ m(function() {
				var e = this.matched.substr(0, this.matched.length - this.match.length);
				return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "");
			}, "pastInput"),
			upcomingInput: /* @__PURE__ */ m(function() {
				var e = this.match;
				return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "");
			}, "upcomingInput"),
			showPosition: /* @__PURE__ */ m(function() {
				var e = this.pastInput(), t = Array(e.length + 1).join("-");
				return e + this.upcomingInput() + "\n" + t + "^";
			}, "showPosition"),
			test_match: /* @__PURE__ */ m(function(e, t) {
				var n, r, i;
				if (this.options.backtrack_lexer && (i = {
					yylineno: this.yylineno,
					yylloc: {
						first_line: this.yylloc.first_line,
						last_line: this.last_line,
						first_column: this.yylloc.first_column,
						last_column: this.yylloc.last_column
					},
					yytext: this.yytext,
					match: this.match,
					matches: this.matches,
					matched: this.matched,
					yyleng: this.yyleng,
					offset: this.offset,
					_more: this._more,
					_input: this._input,
					yy: this.yy,
					conditionStack: this.conditionStack.slice(0),
					done: this.done
				}, this.options.ranges && (i.yylloc.range = this.yylloc.range.slice(0))), r = e[0].match(/(?:\r\n?|\n).*/g), r && (this.yylineno += r.length), this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: r ? r[r.length - 1].length - r[r.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
				}, this.yytext += e[0], this.match += e[0], this.matches = e, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(e[0].length), this.matched += e[0], n = this.performAction.call(this, this.yy, this, t, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), n) return n;
				if (this._backtrack) {
					for (var a in i) this[a] = i[a];
					return !1;
				}
				return !1;
			}, "test_match"),
			next: /* @__PURE__ */ m(function() {
				if (this.done) return this.EOF;
				this._input || (this.done = !0);
				var e, t, n, r;
				this._more || (this.yytext = "", this.match = "");
				for (var i = this._currentRules(), a = 0; a < i.length; a++) if (n = this._input.match(this.rules[i[a]]), n && (!t || n[0].length > t[0].length)) {
					if (t = n, r = a, this.options.backtrack_lexer) {
						if (e = this.test_match(n, i[a]), e !== !1) return e;
						if (this._backtrack) {
							t = !1;
							continue;
						}
						return !1;
					}
					if (!this.options.flex) break;
				}
				return t ? (e = this.test_match(t, i[r]), e !== !1 && e) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
			}, "next"),
			lex: /* @__PURE__ */ m(function() {
				return this.next() || this.lex();
			}, "lex"),
			begin: /* @__PURE__ */ m(function(e) {
				this.conditionStack.push(e);
			}, "begin"),
			popState: /* @__PURE__ */ m(function() {
				return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
			}, "popState"),
			_currentRules: /* @__PURE__ */ m(function() {
				return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
			}, "_currentRules"),
			topState: /* @__PURE__ */ m(function(e) {
				return e = this.conditionStack.length - 1 - Math.abs(e || 0), e >= 0 ? this.conditionStack[e] : "INITIAL";
			}, "topState"),
			pushState: /* @__PURE__ */ m(function(e) {
				this.begin(e);
			}, "pushState"),
			stateStackSize: /* @__PURE__ */ m(function() {
				return this.conditionStack.length;
			}, "stateStackSize"),
			options: { "case-insensitive": !0 },
			performAction: /* @__PURE__ */ m(function(e, t, n, r) {
				switch (n) {
					case 0: return this.pushState("shapeData"), t.yytext = "", 24;
					case 1: return this.pushState("shapeDataStr"), 24;
					case 2: return this.popState(), 24;
					case 3: return t.yytext = t.yytext.replace(/\n\s*/g, "<br/>"), 24;
					case 4: return 24;
					case 5:
						this.popState();
						break;
					case 6: return e.getLogger().trace("Found comment", t.yytext), 6;
					case 7: return 8;
					case 8:
						this.begin("CLASS");
						break;
					case 9: return this.popState(), 17;
					case 10:
						this.popState();
						break;
					case 11:
						e.getLogger().trace("Begin icon"), this.begin("ICON");
						break;
					case 12: return e.getLogger().trace("SPACELINE"), 6;
					case 13: return 7;
					case 14: return 16;
					case 15:
						e.getLogger().trace("end icon"), this.popState();
						break;
					case 16: return e.getLogger().trace("Exploding node"), this.begin("NODE"), 20;
					case 17: return e.getLogger().trace("Cloud"), this.begin("NODE"), 20;
					case 18: return e.getLogger().trace("Explosion Bang"), this.begin("NODE"), 20;
					case 19: return e.getLogger().trace("Cloud Bang"), this.begin("NODE"), 20;
					case 20: return this.begin("NODE"), 20;
					case 21: return this.begin("NODE"), 20;
					case 22: return this.begin("NODE"), 20;
					case 23: return this.begin("NODE"), 20;
					case 24: return 13;
					case 25: return 23;
					case 26: return 11;
					case 27:
						this.begin("NSTR2");
						break;
					case 28: return "NODE_DESCR";
					case 29:
						this.popState();
						break;
					case 30:
						e.getLogger().trace("Starting NSTR"), this.begin("NSTR");
						break;
					case 31: return e.getLogger().trace("description:", t.yytext), "NODE_DESCR";
					case 32:
						this.popState();
						break;
					case 33: return this.popState(), e.getLogger().trace("node end ))"), "NODE_DEND";
					case 34: return this.popState(), e.getLogger().trace("node end )"), "NODE_DEND";
					case 35: return this.popState(), e.getLogger().trace("node end ...", t.yytext), "NODE_DEND";
					case 36: return this.popState(), e.getLogger().trace("node end (("), "NODE_DEND";
					case 37: return this.popState(), e.getLogger().trace("node end (-"), "NODE_DEND";
					case 38: return this.popState(), e.getLogger().trace("node end (-"), "NODE_DEND";
					case 39: return this.popState(), e.getLogger().trace("node end (("), "NODE_DEND";
					case 40: return this.popState(), e.getLogger().trace("node end (("), "NODE_DEND";
					case 41: return e.getLogger().trace("Long description:", t.yytext), 21;
					case 42: return e.getLogger().trace("Long description:", t.yytext), 21;
				}
			}, "anonymous"),
			rules: [
				/^(?:@\{)/i,
				/^(?:["])/i,
				/^(?:["])/i,
				/^(?:[^\"]+)/i,
				/^(?:[^}^"]+)/i,
				/^(?:\})/i,
				/^(?:\s*%%.*)/i,
				/^(?:kanban\b)/i,
				/^(?::::)/i,
				/^(?:.+)/i,
				/^(?:\n)/i,
				/^(?:::icon\()/i,
				/^(?:[\s]+[\n])/i,
				/^(?:[\n]+)/i,
				/^(?:[^\)]+)/i,
				/^(?:\))/i,
				/^(?:-\))/i,
				/^(?:\(-)/i,
				/^(?:\)\))/i,
				/^(?:\))/i,
				/^(?:\(\()/i,
				/^(?:\{\{)/i,
				/^(?:\()/i,
				/^(?:\[)/i,
				/^(?:[\s]+)/i,
				/^(?:[^\(\[\n\)\{\}@]+)/i,
				/^(?:$)/i,
				/^(?:["][`])/i,
				/^(?:[^`"]+)/i,
				/^(?:[`]["])/i,
				/^(?:["])/i,
				/^(?:[^"]+)/i,
				/^(?:["])/i,
				/^(?:[\)]\))/i,
				/^(?:[\)])/i,
				/^(?:[\]])/i,
				/^(?:\}\})/i,
				/^(?:\(-)/i,
				/^(?:-\))/i,
				/^(?:\(\()/i,
				/^(?:\()/i,
				/^(?:[^\)\]\(\}]+)/i,
				/^(?:.+(?!\(\())/i
			],
			conditions: {
				shapeDataEndBracket: {
					rules: [],
					inclusive: !1
				},
				shapeDataStr: {
					rules: [2, 3],
					inclusive: !1
				},
				shapeData: {
					rules: [
						1,
						4,
						5
					],
					inclusive: !1
				},
				CLASS: {
					rules: [9, 10],
					inclusive: !1
				},
				ICON: {
					rules: [14, 15],
					inclusive: !1
				},
				NSTR2: {
					rules: [28, 29],
					inclusive: !1
				},
				NSTR: {
					rules: [31, 32],
					inclusive: !1
				},
				NODE: {
					rules: [
						27,
						30,
						33,
						34,
						35,
						36,
						37,
						38,
						39,
						40,
						41,
						42
					],
					inclusive: !1
				},
				INITIAL: {
					rules: [
						0,
						6,
						7,
						8,
						11,
						12,
						13,
						16,
						17,
						18,
						19,
						20,
						21,
						22,
						23,
						24,
						25,
						26
					],
					inclusive: !0
				}
			}
		};
	}();
	function S() {
		this.yy = {};
	}
	return m(S, "Parser"), S.prototype = x, x.Parser = S, new S();
}();
g.parser = g;
var _ = g, v = [], y = [], b = 0, x = {}, S = /* @__PURE__ */ m(() => {
	v = [], y = [], b = 0, x = {};
}, "clear"), C = /* @__PURE__ */ m((e) => {
	if (v.length === 0) return null;
	let t = v[0].level, n = null;
	for (let e = v.length - 1; e >= 0; e--) if (v[e].level === t && !n && (n = v[e]), v[e].level < t) throw Error("Items without section detected, found section (\"" + v[e].label + "\")");
	return e === n?.level ? null : n;
}, "getSection"), w = /* @__PURE__ */ m(function() {
	return y;
}, "getSections"), T = /* @__PURE__ */ m(function() {
	let e = [], t = [], n = w(), r = o();
	for (let e of n) {
		let n = {
			id: e.id,
			label: f(e.label ?? "", r),
			labelType: "markdown",
			isGroup: !0,
			ticket: e.ticket,
			shape: "kanbanSection",
			level: e.level,
			look: r.look
		};
		t.push(n);
		let i = v.filter((t) => t.parentId === e.id);
		for (let n of i) {
			let i = {
				id: n.id,
				parentId: e.id,
				label: f(n.label ?? "", r),
				labelType: "markdown",
				isGroup: !1,
				ticket: n?.ticket,
				priority: n?.priority,
				assigned: n?.assigned,
				icon: n?.icon,
				shape: "kanbanItem",
				level: n.level,
				rx: 5,
				ry: 5,
				cssStyles: ["text-align: left"]
			};
			t.push(i);
		}
	}
	return {
		nodes: t,
		edges: e,
		other: {},
		config: o()
	};
}, "getData"), E = /* @__PURE__ */ m((t, r, i, a, s) => {
	let l = o(), u = l.mindmap?.padding ?? n.mindmap.padding;
	switch (a) {
		case D.ROUNDED_RECT:
		case D.RECT:
		case D.HEXAGON: u *= 2;
	}
	let d = {
		id: f(r, l) || "kbn" + b++,
		level: t,
		label: f(i, l),
		width: l.mindmap?.maxNodeWidth ?? n.mindmap.maxNodeWidth,
		padding: u,
		isGroup: !1
	};
	if (s !== void 0) {
		let t;
		t = s.includes("\n") ? s + "\n" : "{\n" + s + "\n}";
		let n = c(t, { schema: e });
		if (n.shape && (n.shape !== n.shape.toLowerCase() || n.shape.includes("_"))) throw Error(`No such shape: ${n.shape}. Shape names should be lowercase.`);
		n?.shape && n.shape === "kanbanItem" && (d.shape = n?.shape), n?.label && (d.label = n?.label), n?.icon && (d.icon = n?.icon.toString()), n?.assigned && (d.assigned = n?.assigned.toString()), n?.ticket && (d.ticket = n?.ticket.toString()), n?.priority && (d.priority = n?.priority);
	}
	let p = C(t);
	p ? d.parentId = p.id || "kbn" + b++ : y.push(d), v.push(d);
}, "addNode"), D = {
	DEFAULT: 0,
	NO_BORDER: 0,
	ROUNDED_RECT: 1,
	RECT: 2,
	CIRCLE: 3,
	CLOUD: 4,
	BANG: 5,
	HEXAGON: 6
}, O = {
	clear: S,
	addNode: E,
	getSections: w,
	getData: T,
	nodeType: D,
	getType: /* @__PURE__ */ m((e, t) => {
		switch (l.debug("In get type", e, t), e) {
			case "[": return D.RECT;
			case "(": return t === ")" ? D.ROUNDED_RECT : D.CLOUD;
			case "((": return D.CIRCLE;
			case ")": return D.CLOUD;
			case "))": return D.BANG;
			case "{{": return D.HEXAGON;
			default: return D.DEFAULT;
		}
	}, "getType"),
	setElementForId: /* @__PURE__ */ m((e, t) => {
		x[e] = t;
	}, "setElementForId"),
	decorateNode: /* @__PURE__ */ m((e) => {
		if (!e) return;
		let t = o(), n = v[v.length - 1];
		e.icon && (n.icon = f(e.icon, t)), e.class && (n.cssClasses = f(e.class, t));
	}, "decorateNode"),
	type2Str: /* @__PURE__ */ m((e) => {
		switch (e) {
			case D.DEFAULT: return "no-border";
			case D.RECT: return "rect";
			case D.ROUNDED_RECT: return "rounded-rect";
			case D.CIRCLE: return "circle";
			case D.CLOUD: return "cloud";
			case D.BANG: return "bang";
			case D.HEXAGON: return "hexgon";
			default: return "no-border";
		}
	}, "type2Str"),
	getLogger: /* @__PURE__ */ m(() => l, "getLogger"),
	getElementById: /* @__PURE__ */ m((e) => x[e], "getElementById")
}, k = { draw: /* @__PURE__ */ m(async (e, t, a, s) => {
	l.debug("Rendering kanban diagram\n" + e);
	let c = s.db.getData(), f = o();
	f.htmlLabels = !1;
	let m = p(t);
	for (let e of c.nodes) e.domId = `${t}-${e.id}`;
	let h = m.append("g");
	h.attr("class", "sections");
	let g = m.append("g");
	g.attr("class", "items");
	let _ = c.nodes.filter((e) => e.isGroup), v = 0, y = [], b = 25;
	for (let e of _) {
		let t = f?.kanban?.sectionWidth || 200;
		v += 1, e.x = t * v + (v - 1) * 10 / 2, e.width = t, e.y = 0, e.height = t * 3, e.rx = 5, e.ry = 5, e.cssClasses = e.cssClasses + " section-" + v;
		let n = await r(h, e);
		b = Math.max(b, n?.labelBBox?.height), y.push(n);
	}
	let x = 0;
	for (let e of _) {
		let t = y[x];
		x += 1;
		let n = f?.kanban?.sectionWidth || 200, r = -n * 3 / 2 + b, a = r, o = c.nodes.filter((t) => t.parentId === e.id);
		for (let t of o) {
			if (t.isGroup) throw Error("Groups within groups are not allowed in Kanban diagrams");
			t.x = e.x, t.width = n - 15;
			let r = (await i(g, t, { config: f })).node().getBBox();
			t.y = a + r.height / 2, await d(t), a = t.y + r.height / 2 + 5;
		}
		let s = t.cluster.select("rect"), l = Math.max(a - r + 30, 50) + (b - 25);
		s.attr("height", l);
	}
	u(void 0, m, f.mindmap?.padding ?? n.kanban.padding, f.mindmap?.useMaxWidth ?? n.kanban.useMaxWidth);
}, "draw") }, A = /* @__PURE__ */ m((e) => {
	let n = "";
	for (let n = 0; n < e.THEME_COLOR_LIMIT; n++) e["lineColor" + n] = e["lineColor" + n] || e["cScaleInv" + n], a(e["lineColor" + n]) ? e["lineColor" + n] = s(e["lineColor" + n], 20) : e["lineColor" + n] = t(e["lineColor" + n], 20);
	let r = /* @__PURE__ */ m((n, r) => e.darkMode ? t(n, r) : s(n, r), "adjuster");
	for (let t = 0; t < e.THEME_COLOR_LIMIT; t++) {
		let i = "" + (17 - 3 * t);
		n += `
    .section-${t - 1} rect, .section-${t - 1} path, .section-${t - 1} circle, .section-${t - 1} polygon, .section-${t - 1} path  {
      fill: ${r(e["cScale" + t], 10)};
      stroke: ${r(e["cScale" + t], 10)};

    }
    .section-${t - 1} text {
     fill: ${e["cScaleLabel" + t]};
    }
    .node-icon-${t - 1} {
      font-size: 40px;
      color: ${e["cScaleLabel" + t]};
    }
    .section-edge-${t - 1}{
      stroke: ${e["cScale" + t]};
    }
    .edge-depth-${t - 1}{
      stroke-width: ${i};
    }
    .section-${t - 1} line {
      stroke: ${e["cScaleInv" + t]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.background};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }

  .kanban-ticket-link {
    fill: ${e.background};
    stroke: ${e.nodeBorder};
    text-decoration: underline;
  }
    `;
	}
	return n;
}, "genSections"), j = {
	db: O,
	renderer: k,
	parser: _,
	styles: /* @__PURE__ */ m((e) => `
  .edge {
    stroke-width: 3;
  }
  ${A(e)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${e.git0};
  }
  .section-root text {
    fill: ${e.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .cluster-label, .label {
    color: ${e.textColor};
    fill: ${e.textColor};
    }
  .kanban-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
    ${h()}
`, "getStyles")
};
//#endregion
export { j as diagram };

//# sourceMappingURL=kanban-definition-UXKFOSKX-CEEnhMPV-CwdafsIk.js.map