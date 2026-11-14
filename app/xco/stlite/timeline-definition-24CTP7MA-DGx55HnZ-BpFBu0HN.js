import { c as e } from "./transform-B2AI7qp--hg0kwf7R.js";
import { N as t, P as n, _ as r, a2 as i, aQ as a, al as o, am as s, b2 as c, b6 as l, bF as u, bi as d, bx as f, c as p } from "./mermaid.core-iLj2gv8s-DM09IeU-.js";
import { t as m } from "./arc-DMsMwa2D-xC8iGnUF.js";
//#region ../react/build/timeline-definition-24CTP7MA-DGx55HnZ.js
var h = function() {
	var e = /* @__PURE__ */ p(function(e, t, n, r) {
		for (n ||= {}, r = e.length; r--; n[e[r]] = t);
		return n;
	}, "o"), t = [
		6,
		11,
		13,
		14,
		15,
		17,
		19,
		20,
		23,
		24
	], n = [1, 12], r = [1, 13], i = [1, 14], a = [1, 15], o = [1, 16], s = [1, 19], c = [1, 20], l = {
		trace: /* @__PURE__ */ p(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			timeline_header: 4,
			document: 5,
			EOF: 6,
			timeline: 7,
			timeline_lr: 8,
			timeline_td: 9,
			line: 10,
			SPACE: 11,
			statement: 12,
			NEWLINE: 13,
			title: 14,
			acc_title: 15,
			acc_title_value: 16,
			acc_descr: 17,
			acc_descr_value: 18,
			acc_descr_multiline_value: 19,
			section: 20,
			period_statement: 21,
			event_statement: 22,
			period: 23,
			event: 24,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			6: "EOF",
			7: "timeline",
			8: "timeline_lr",
			9: "timeline_td",
			11: "SPACE",
			13: "NEWLINE",
			14: "title",
			15: "acc_title",
			16: "acc_title_value",
			17: "acc_descr",
			18: "acc_descr_value",
			19: "acc_descr_multiline_value",
			20: "section",
			23: "period",
			24: "event"
		},
		productions_: [
			0,
			[3, 3],
			[4, 1],
			[4, 1],
			[4, 1],
			[5, 0],
			[5, 2],
			[10, 2],
			[10, 1],
			[10, 1],
			[10, 1],
			[12, 1],
			[12, 2],
			[12, 2],
			[12, 1],
			[12, 1],
			[12, 1],
			[12, 1],
			[21, 1],
			[22, 1]
		],
		performAction: /* @__PURE__ */ p(function(e, t, n, r, i, a, o) {
			var s = a.length - 1;
			switch (i) {
				case 1: return a[s - 1];
				case 3:
					r.setDirection("LR");
					break;
				case 4:
					r.setDirection("TD");
					break;
				case 5:
					this.$ = [];
					break;
				case 6:
					a[s - 1].push(a[s]), this.$ = a[s - 1];
					break;
				case 7:
				case 8:
					this.$ = a[s];
					break;
				case 9:
				case 10:
					this.$ = [];
					break;
				case 11:
					r.getCommonDb().setDiagramTitle(a[s].substr(6)), this.$ = a[s].substr(6);
					break;
				case 12:
					this.$ = a[s].trim(), r.getCommonDb().setAccTitle(this.$);
					break;
				case 13:
				case 14:
					this.$ = a[s].trim(), r.getCommonDb().setAccDescription(this.$);
					break;
				case 15:
					r.addSection(a[s].substr(8)), this.$ = a[s].substr(8);
					break;
				case 18:
					r.addTask(a[s], 0, ""), this.$ = a[s];
					break;
				case 19: r.addEvent(a[s].substr(2)), this.$ = a[s];
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: 2,
				7: [1, 3],
				8: [1, 4],
				9: [1, 5]
			},
			{ 1: [3] },
			e(t, [2, 5], { 5: 6 }),
			e(t, [2, 2]),
			e(t, [2, 3]),
			e(t, [2, 4]),
			{
				6: [1, 7],
				10: 8,
				11: [1, 9],
				12: 10,
				13: [1, 11],
				14: n,
				15: r,
				17: i,
				19: a,
				20: o,
				21: 17,
				22: 18,
				23: s,
				24: c
			},
			e(t, [2, 10], { 1: [2, 1] }),
			e(t, [2, 6]),
			{
				12: 21,
				14: n,
				15: r,
				17: i,
				19: a,
				20: o,
				21: 17,
				22: 18,
				23: s,
				24: c
			},
			e(t, [2, 8]),
			e(t, [2, 9]),
			e(t, [2, 11]),
			{ 16: [1, 22] },
			{ 18: [1, 23] },
			e(t, [2, 14]),
			e(t, [2, 15]),
			e(t, [2, 16]),
			e(t, [2, 17]),
			e(t, [2, 18]),
			e(t, [2, 19]),
			e(t, [2, 7]),
			e(t, [2, 12]),
			e(t, [2, 13])
		],
		defaultActions: {},
		parseError: /* @__PURE__ */ p(function(e, t) {
			if (t.recoverable) this.trace(e);
			else {
				var n = Error(e);
				throw n.hash = t, n;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ p(function(e) {
			var t = this, n = [0], r = [], i = [null], a = [], o = this.table, s = "", c = 0, l = 0, u = 2, d = 1, f = a.slice.call(arguments, 1), m = Object.create(this.lexer), h = { yy: {} };
			for (var g in this.yy) Object.prototype.hasOwnProperty.call(this.yy, g) && (h.yy[g] = this.yy[g]);
			m.setInput(e, h.yy), h.yy.lexer = m, h.yy.parser = this, typeof m.yylloc > "u" && (m.yylloc = {});
			var _ = m.yylloc;
			a.push(_);
			var v = m.options && m.options.ranges;
			this.parseError = typeof h.yy.parseError == "function" ? h.yy.parseError : Object.getPrototypeOf(this).parseError;
			function y(e) {
				n.length -= 2 * e, i.length -= e, a.length -= e;
			}
			p(y, "popStack");
			function b() {
				var e;
				return e = r.pop() || m.lex() || d, typeof e != "number" && (e instanceof Array && (r = e, e = r.pop()), e = t.symbols_[e] || e), e;
			}
			p(b, "lex");
			for (var x, S, C, w, T = {}, E, D, O, k;;) {
				if (S = n[n.length - 1], this.defaultActions[S] ? C = this.defaultActions[S] : ((x === null || typeof x > "u") && (x = b()), C = o[S] && o[S][x]), typeof C > "u" || !C.length || !C[0]) {
					var A = "";
					for (E in k = [], o[S]) this.terminals_[E] && E > u && k.push("'" + this.terminals_[E] + "'");
					A = m.showPosition ? "Parse error on line " + (c + 1) + ":\n" + m.showPosition() + "\nExpecting " + k.join(", ") + ", got '" + (this.terminals_[x] || x) + "'" : "Parse error on line " + (c + 1) + ": Unexpected " + (x == d ? "end of input" : "'" + (this.terminals_[x] || x) + "'"), this.parseError(A, {
						text: m.match,
						token: this.terminals_[x] || x,
						line: m.yylineno,
						loc: _,
						expected: k
					});
				}
				if (C[0] instanceof Array && C.length > 1) throw Error("Parse Error: multiple actions possible at state: " + S + ", token: " + x);
				switch (C[0]) {
					case 1:
						n.push(x), i.push(m.yytext), a.push(m.yylloc), n.push(C[1]), x = null, l = m.yyleng, s = m.yytext, c = m.yylineno, _ = m.yylloc;
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
	l.lexer = /* @__PURE__ */ function() {
		return {
			EOF: 1,
			parseError: /* @__PURE__ */ p(function(e, t) {
				if (this.yy.parser) this.yy.parser.parseError(e, t);
				else throw Error(e);
			}, "parseError"),
			setInput: /* @__PURE__ */ p(function(e, t) {
				return this.yy = t || this.yy || {}, this._input = e, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
					first_line: 1,
					first_column: 0,
					last_line: 1,
					last_column: 0
				}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
			}, "setInput"),
			input: /* @__PURE__ */ p(function() {
				var e = this._input[0];
				return this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e, e.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e;
			}, "input"),
			unput: /* @__PURE__ */ p(function(e) {
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
			more: /* @__PURE__ */ p(function() {
				return this._more = !0, this;
			}, "more"),
			reject: /* @__PURE__ */ p(function() {
				if (this.options.backtrack_lexer) this._backtrack = !0;
				else return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
				return this;
			}, "reject"),
			less: /* @__PURE__ */ p(function(e) {
				this.unput(this.match.slice(e));
			}, "less"),
			pastInput: /* @__PURE__ */ p(function() {
				var e = this.matched.substr(0, this.matched.length - this.match.length);
				return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "");
			}, "pastInput"),
			upcomingInput: /* @__PURE__ */ p(function() {
				var e = this.match;
				return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "");
			}, "upcomingInput"),
			showPosition: /* @__PURE__ */ p(function() {
				var e = this.pastInput(), t = Array(e.length + 1).join("-");
				return e + this.upcomingInput() + "\n" + t + "^";
			}, "showPosition"),
			test_match: /* @__PURE__ */ p(function(e, t) {
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
			next: /* @__PURE__ */ p(function() {
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
			lex: /* @__PURE__ */ p(function() {
				return this.next() || this.lex();
			}, "lex"),
			begin: /* @__PURE__ */ p(function(e) {
				this.conditionStack.push(e);
			}, "begin"),
			popState: /* @__PURE__ */ p(function() {
				return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
			}, "popState"),
			_currentRules: /* @__PURE__ */ p(function() {
				return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
			}, "_currentRules"),
			topState: /* @__PURE__ */ p(function(e) {
				return e = this.conditionStack.length - 1 - Math.abs(e || 0), e >= 0 ? this.conditionStack[e] : "INITIAL";
			}, "topState"),
			pushState: /* @__PURE__ */ p(function(e) {
				this.begin(e);
			}, "pushState"),
			stateStackSize: /* @__PURE__ */ p(function() {
				return this.conditionStack.length;
			}, "stateStackSize"),
			options: { "case-insensitive": !0 },
			performAction: /* @__PURE__ */ p(function(e, t, n, r) {
				switch (n) {
					case 0: break;
					case 1: break;
					case 2: return 13;
					case 3: break;
					case 4: break;
					case 5: return 8;
					case 6: return 9;
					case 7: return 7;
					case 8: return 14;
					case 9: return this.begin("acc_title"), 15;
					case 10: return this.popState(), "acc_title_value";
					case 11: return this.begin("acc_descr"), 17;
					case 12: return this.popState(), "acc_descr_value";
					case 13:
						this.begin("acc_descr_multiline");
						break;
					case 14:
						this.popState();
						break;
					case 15: return "acc_descr_multiline_value";
					case 16: return 20;
					case 17: return 24;
					case 18: return 23;
					case 19: return 6;
					case 20: return "INVALID";
				}
			}, "anonymous"),
			rules: [
				/^(?:%(?!\{)[^\n]*)/i,
				/^(?:[^\}]%%[^\n]*)/i,
				/^(?:[\n]+)/i,
				/^(?:\s+)/i,
				/^(?:#[^\n]*)/i,
				/^(?:timeline[ \t]+LR\b)/i,
				/^(?:timeline[ \t]+TD\b)/i,
				/^(?:timeline\b)/i,
				/^(?:title\s[^\n]+)/i,
				/^(?:accTitle\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*\{\s*)/i,
				/^(?:[\}])/i,
				/^(?:[^\}]*)/i,
				/^(?:section\s[^:\n]+)/i,
				/^(?::\s(?:[^:\n]|:(?!\s))+)/i,
				/^(?:[^#:\n]+)/i,
				/^(?:$)/i,
				/^(?:.)/i
			],
			conditions: {
				acc_descr_multiline: {
					rules: [14, 15],
					inclusive: !1
				},
				acc_descr: {
					rules: [12],
					inclusive: !1
				},
				acc_title: {
					rules: [10],
					inclusive: !1
				},
				INITIAL: {
					rules: [
						0,
						1,
						2,
						3,
						4,
						5,
						6,
						7,
						8,
						9,
						11,
						13,
						16,
						17,
						18,
						19,
						20
					],
					inclusive: !0
				}
			}
		};
	}();
	function u() {
		this.yy = {};
	}
	return p(u, "Parser"), u.prototype = l, l.Parser = u, new u();
}();
h.parser = h;
var g = h, _ = {};
r(_, {
	addEvent: () => M,
	addSection: () => O,
	addTask: () => j,
	addTaskOrg: () => N,
	clear: () => T,
	default: () => ee,
	getCommonDb: () => w,
	getDirection: () => D,
	getSections: () => k,
	getTasks: () => A,
	setDirection: () => E
});
var v = "", y = 0, b = "LR", x = [], S = [], C = [], w = /* @__PURE__ */ p(() => n, "getCommonDb"), T = /* @__PURE__ */ p(function() {
	x.length = 0, S.length = 0, v = "", C.length = 0, b = "LR", t();
}, "clear"), E = /* @__PURE__ */ p(function(e) {
	b = e;
}, "setDirection"), D = /* @__PURE__ */ p(function() {
	return b;
}, "getDirection"), O = /* @__PURE__ */ p(function(e) {
	v = e, x.push(e);
}, "addSection"), k = /* @__PURE__ */ p(function() {
	return x;
}, "getSections"), A = /* @__PURE__ */ p(function() {
	let e = P(), t = 0;
	for (; !e && t < 100;) e = P(), t++;
	return S.push(...C), S;
}, "getTasks"), j = /* @__PURE__ */ p(function(e, t, n) {
	let r = {
		id: y++,
		section: v,
		type: v,
		task: e,
		score: t || 0,
		events: n ? [n] : []
	};
	C.push(r);
}, "addTask"), M = /* @__PURE__ */ p(function(e) {
	C.find((e) => e.id === y - 1).events.push(e);
}, "addEvent"), N = /* @__PURE__ */ p(function(e) {
	let t = {
		section: v,
		type: v,
		description: e,
		task: e,
		classes: []
	};
	S.push(t);
}, "addTaskOrg"), P = /* @__PURE__ */ p(function() {
	let e = /* @__PURE__ */ p(function(e) {
		return C[e].processed;
	}, "compileTask"), t = !0;
	for (let [n, r] of C.entries()) e(n), t &&= r.processed;
	return t;
}, "compileTasks"), ee = {
	clear: T,
	getCommonDb: w,
	getDirection: D,
	setDirection: E,
	addSection: O,
	getSections: k,
	getTasks: A,
	addTask: j,
	addTaskOrg: N,
	addEvent: M
}, F = 0, I = /* @__PURE__ */ p(function(e, t) {
	let n = e.append("rect");
	return n.attr("x", t.x), n.attr("y", t.y), n.attr("fill", t.fill), n.attr("stroke", t.stroke), n.attr("width", t.width), n.attr("height", t.height), n.attr("rx", t.rx), n.attr("ry", t.ry), t.class !== void 0 && n.attr("class", t.class), n;
}, "drawRect"), te = /* @__PURE__ */ p(function(e, t) {
	let n = e.append("circle").attr("cx", t.cx).attr("cy", t.cy).attr("class", "face").attr("r", 15).attr("stroke-width", 2).attr("overflow", "visible"), r = e.append("g");
	r.append("circle").attr("cx", t.cx - 5).attr("cy", t.cy - 5).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666"), r.append("circle").attr("cx", t.cx + 5).attr("cy", t.cy - 5).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
	function i(e) {
		let n = m().startAngle(Math.PI / 2).endAngle(Math.PI / 2 * 3).innerRadius(7.5).outerRadius(6.8181818181818175);
		e.append("path").attr("class", "mouth").attr("d", n).attr("transform", "translate(" + t.cx + "," + (t.cy + 2) + ")");
	}
	p(i, "smile");
	function a(e) {
		let n = m().startAngle(3 * Math.PI / 2).endAngle(Math.PI / 2 * 5).innerRadius(7.5).outerRadius(6.8181818181818175);
		e.append("path").attr("class", "mouth").attr("d", n).attr("transform", "translate(" + t.cx + "," + (t.cy + 7) + ")");
	}
	p(a, "sad");
	function o(e) {
		e.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", t.cx - 5).attr("y1", t.cy + 7).attr("x2", t.cx + 5).attr("y2", t.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
	}
	return p(o, "ambivalent"), t.score > 3 ? i(r) : t.score < 3 ? a(r) : o(r), n;
}, "drawFace"), ne = /* @__PURE__ */ p(function(e, t) {
	let n = e.append("circle");
	return n.attr("cx", t.cx), n.attr("cy", t.cy), n.attr("class", "actor-" + t.pos), n.attr("fill", t.fill), n.attr("stroke", t.stroke), n.attr("r", t.r), n.class !== void 0 && n.attr("class", n.class), t.title !== void 0 && n.append("title").text(t.title), n;
}, "drawCircle"), L = /* @__PURE__ */ p(function(e, t) {
	let n = t.text.replace(/<br\s*\/?>/gi, " "), r = e.append("text");
	r.attr("x", t.x), r.attr("y", t.y), r.attr("class", "legend"), r.style("text-anchor", t.anchor), t.class !== void 0 && r.attr("class", t.class);
	let i = r.append("tspan");
	return i.attr("x", t.x + t.textMargin * 2), i.text(n), r;
}, "drawText"), re = /* @__PURE__ */ p(function(e, t) {
	function n(e, t, n, r, i) {
		return e + "," + t + " " + (e + n) + "," + t + " " + (e + n) + "," + (t + r - i) + " " + (e + n - i * 1.2) + "," + (t + r) + " " + e + "," + (t + r);
	}
	p(n, "genPoints");
	let r = e.append("polygon");
	r.attr("points", n(t.x, t.y, 50, 20, 7)), r.attr("class", "labelBox"), t.y += t.labelMargin, t.x += .5 * t.labelMargin, L(e, t);
}, "drawLabel"), R = /* @__PURE__ */ p(function(e, t, n) {
	let r = e.append("g"), i = B();
	i.x = t.x, i.y = t.y, i.fill = t.fill, i.width = n.width, i.height = n.height, i.class = "journey-section section-type-" + t.num, i.rx = 3, i.ry = 3, I(r, i), V(n)(t.text, r, i.x, i.y, i.width, i.height, { class: "journey-section section-type-" + t.num }, n, t.colour);
}, "drawSection"), z = -1, ie = /* @__PURE__ */ p(function(e, t, n, r) {
	let i = t.x + n.width / 2, a = e.append("g");
	z++, a.append("line").attr("id", r + "-task" + z).attr("x1", i).attr("y1", t.y).attr("x2", i).attr("y2", 450).attr("class", "task-line").attr("stroke-width", "1px").attr("stroke-dasharray", "4 2").attr("stroke", "#666"), te(a, {
		cx: i,
		cy: 300 + (5 - t.score) * 30,
		score: t.score
	});
	let o = B();
	o.x = t.x, o.y = t.y, o.fill = t.fill, o.width = n.width, o.height = n.height, o.class = "task task-type-" + t.num, o.rx = 3, o.ry = 3, I(a, o), V(n)(t.task, a, o.x, o.y, o.width, o.height, { class: "task" }, n, t.colour);
}, "drawTask"), ae = /* @__PURE__ */ p(function(e, t) {
	I(e, {
		x: t.startx,
		y: t.starty,
		width: t.stopx - t.startx,
		height: t.stopy - t.starty,
		fill: t.fill,
		class: "rect"
	}).lower();
}, "drawBackgroundRect"), oe = /* @__PURE__ */ p(function() {
	return {
		x: 0,
		y: 0,
		fill: void 0,
		"text-anchor": "start",
		width: 100,
		height: 100,
		textMargin: 0,
		rx: 0,
		ry: 0
	};
}, "getTextObj"), B = /* @__PURE__ */ p(function() {
	return {
		x: 0,
		y: 0,
		width: 100,
		anchor: "start",
		height: 100,
		rx: 0,
		ry: 0
	};
}, "getNoteRect"), V = /* @__PURE__ */ function() {
	function e(e, t, n, i, a, o, s, c) {
		r(t.append("text").attr("x", n + a / 2).attr("y", i + o / 2 + 5).style("font-color", c).style("text-anchor", "middle").text(e), s);
	}
	p(e, "byText");
	function t(e, t, n, i, a, o, s, c, l) {
		let { taskFontSize: u, taskFontFamily: d } = c, f = e.split(/<br\s*\/?>/gi);
		for (let e = 0; e < f.length; e++) {
			let c = e * u - u * (f.length - 1) / 2, p = t.append("text").attr("x", n + a / 2).attr("y", i).attr("fill", l).style("text-anchor", "middle").style("font-size", u).style("font-family", d);
			p.append("tspan").attr("x", n + a / 2).attr("dy", c).text(f[e]), p.attr("y", i + o / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central"), r(p, s);
		}
	}
	p(t, "byTspan");
	function n(e, n, i, a, o, s, c, l) {
		let u = n.append("switch"), d = u.append("foreignObject").attr("x", i).attr("y", a).attr("width", o).attr("height", s).attr("position", "fixed").append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
		d.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(e), t(e, u, i, a, o, s, c, l), r(d, c);
	}
	p(n, "byFo");
	function r(e, t) {
		for (let n in t) n in t && e.attr(n, t[n]);
	}
	return p(r, "_setTextAttrs"), function(r) {
		return r.textPlacement === "fo" ? n : r.textPlacement === "old" ? e : t;
	};
}(), se = /* @__PURE__ */ p(function(e, t) {
	F = 0, z = -1, e.append("defs").append("marker").attr("id", t + "-arrowhead").attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
}, "initGraphics");
function H(t, n) {
	t.each(function() {
		var t = e(this), r = t.text().split(/(\s+|<br>)/).reverse(), i, a = [], o = 1.1, s = t.attr("y"), c = parseFloat(t.attr("dy")), l = t.text(null).append("tspan").attr("x", 0).attr("y", s).attr("dy", c + "em");
		for (let e = 0; e < r.length; e++) i = r[r.length - 1 - e], a.push(i), l.text(a.join(" ").trim()), (l.node().getComputedTextLength() > n || i === "<br>") && (a.pop(), l.text(a.join(" ").trim()), a = i === "<br>" ? [""] : [i], l = t.append("tspan").attr("x", 0).attr("y", s).attr("dy", o + "em").text(i));
	});
}
p(H, "wrap");
var ce = /* @__PURE__ */ p(function(t, n, r, i, a, o = !1) {
	let { theme: s, look: c } = i, l = s?.includes("redux"), u = r % (i?.themeVariables?.THEME_COLOR_LIMIT ?? 12) - 1, d = t.append("g");
	n.section = u, d.attr("class", (n.class ? n.class + " " : "") + "timeline-node " + ("section-" + u));
	let f = d.append("g"), p = d.append("g"), m = p.append("text").text(n.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(H, n.width).node().getBBox(), h = i.fontSize?.replace ? i.fontSize.replace("px", "") : i.fontSize;
	if (n.height = m.height + h * 1.1 * .5 + n.padding, n.height = Math.max(n.height, n.maxHeight), n.width += 2 * n.padding, p.attr("transform", "translate(" + n.width / 2 + ", " + n.padding / 2 + ")"), l && p.attr("transform", `translate(${n.width / 2}, ${o ? n.padding / 2 + 3 : n.padding})`), ue(f, n, u, a, i), c === "neo" && (d.attr("data-look", "neo"), l)) {
		let n = s.includes("dark"), r = t.node()?.ownerSVGElement ?? t.node(), i = e(r), a = i.attr("id") ?? "", o = a ? `${a}-drop-shadow` : "drop-shadow";
		if (i.select(`#${o}`).empty()) {
			let e = i.select("defs");
			(e.empty() ? i.append("defs") : e).append("filter").attr("id", o).attr("height", "130%").attr("width", "130%").append("feDropShadow").attr("dx", "4").attr("dy", "4").attr("stdDeviation", 0).attr("flood-opacity", n ? "0.2" : "0.06").attr("flood-color", n ? "#FFFFFF" : "#000000");
		}
	}
	return n;
}, "drawNode"), le = /* @__PURE__ */ p(function(e, t, n) {
	let r = e.append("g"), i = r.append("text").text(t.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(H, t.width).node().getBBox(), a = n.fontSize?.replace ? n.fontSize.replace("px", "") : n.fontSize;
	return r.remove(), i.height + a * 1.1 * .5 + t.padding;
}, "getVirtualNodeHeight"), ue = /* @__PURE__ */ p(function(e, t, n, r, i) {
	let { theme: a } = i, o = a?.includes("redux") ? 0 : 5, s = o > 0 ? `M0 ${t.height - 5} v${-t.height + 10} q0,-${o},${o},-${o} h${t.width - 10} q${o},0,${o},${o} v${t.height - 5} H0 Z` : `M0 ${t.height - 5} v${-(t.height - 5)} h${t.width} v${t.height} H0 Z`;
	e.append("path").attr("id", r + "-node-" + F++).attr("class", "node-bkg node-" + t.type).attr("d", s), a?.includes("redux") || e.append("line").attr("class", "node-line-" + n).attr("x1", 0).attr("y1", t.height).attr("x2", t.width).attr("y2", t.height);
}, "defaultBkg"), U = {
	drawRect: I,
	drawCircle: ne,
	drawSection: R,
	drawText: L,
	drawLabel: re,
	drawTask: ie,
	drawBackgroundRect: ae,
	getTextObj: oe,
	getNoteRect: B,
	initGraphics: se,
	drawNode: ce,
	getVirtualNodeHeight: le
}, de = /* @__PURE__ */ p(function(t, n, r, i) {
	let a = s(), { look: o, theme: c, themeVariables: d } = a, { useGradient: f, gradientStart: p, gradientStop: m } = d, h = a.timeline?.leftMargin ?? 50;
	l.debug("timeline", i.db);
	let g = a.securityLevel, _;
	g === "sandbox" && (_ = e("#i" + n));
	let v = e(g === "sandbox" ? _.nodes()[0].contentDocument.body : "body").select("#" + n);
	v.append("g");
	let y = i.db.getTasks(), b = i.db.getCommonDb().getDiagramTitle();
	l.debug("task", y), U.initGraphics(v, n);
	let x = i.db.getSections();
	l.debug("sections", x);
	let S = 0, C = 0, w = 0, T = 0, E = 50 + h, D = 50;
	T = 50;
	let O = 0, k = !0;
	x.forEach(function(e) {
		let t = {
			number: O,
			descr: e,
			section: O,
			width: 150,
			padding: 20,
			maxHeight: S
		}, n = U.getVirtualNodeHeight(v, t, a);
		l.debug("sectionHeight before draw", n), S = Math.max(S, n + 20);
	});
	let A = 0, j = 0;
	l.debug("tasks.length", y.length);
	for (let [e, t] of y.entries()) {
		let n = {
			number: e,
			descr: t,
			section: t.section,
			width: 150,
			padding: 20,
			maxHeight: C
		}, r = U.getVirtualNodeHeight(v, n, a);
		l.debug("taskHeight before draw", r), C = Math.max(C, r + 20), A = Math.max(A, t.events.length);
		let i = 0;
		for (let e of t.events) {
			let n = {
				descr: e,
				section: t.section,
				number: t.section,
				width: 150,
				padding: 20,
				maxHeight: 50
			};
			i += U.getVirtualNodeHeight(v, n, a);
		}
		t.events.length > 0 && (i += (t.events.length - 1) * 10), j = Math.max(j, i);
	}
	l.debug("maxSectionHeight before draw", S), l.debug("maxTaskHeight before draw", C), x && x.length > 0 ? x.forEach((e) => {
		let t = y.filter((t) => t.section === e), r = {
			number: O,
			descr: e,
			section: O,
			width: 200 * Math.max(t.length, 1) - 50,
			padding: 20,
			maxHeight: S
		};
		l.debug("sectionNode", r);
		let i = v.append("g"), o = U.drawNode(i, r, O, a, n);
		l.debug("sectionNode output", o), i.attr("transform", `translate(${E}, ${T})`), D += S + 50, t.length > 0 && W(v, t, O, E, D, C, a, A, j, S, !1, n), E += 200 * Math.max(t.length, 1), D = T, O++;
	}) : (k = !1, W(v, y, O, E, D, C, a, A, j, S, !0, n));
	let M = v.node().getBBox();
	if (l.debug("bounds", M), b && v.append("text").text(b).attr("x", o === "neo" ? M.x * 2 + h : M.width / 2 - h).attr("font-size", "4ex").attr("font-weight", "bold").attr("y", 20), w = k ? S + C + 150 : C + 100, v.append("g").attr("class", "lineWrapper").append("line").attr("x1", h).attr("y1", w).attr("x2", M.width + 3 * h).attr("y2", w).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", `url(#${n}-arrowhead)`), o === "neo" && f && c !== "neutral") {
		let e = v.select("defs"), t = (e.empty() ? v.append("defs") : e).append("linearGradient").attr("id", v.attr("id") + "-gradient").attr("gradientUnits", "objectBoundingBox").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
		t.append("stop").attr("offset", "0%").attr("stop-color", p).attr("stop-opacity", 1), t.append("stop").attr("offset", "100%").attr("stop-color", m).attr("stop-opacity", 1);
	}
	u(void 0, v, a.timeline?.padding ?? 50, a.timeline?.useMaxWidth ?? !1);
}, "draw"), W = /* @__PURE__ */ p(function(e, t, n, r, i, a, o, s, c, u, d, f) {
	for (let s of t) {
		let t = {
			descr: s.task,
			section: n,
			number: n,
			width: 150,
			padding: 20,
			maxHeight: a
		};
		l.debug("taskNode", t);
		let u = e.append("g").attr("class", "taskWrapper"), p = U.drawNode(u, t, n, o, f).height;
		if (l.debug("taskHeight after draw", p), u.attr("transform", `translate(${r}, ${i})`), a = Math.max(a, p), s.events) {
			let t = e.append("g").attr("class", "lineWrapper"), l = a;
			i += 100, l += fe(e, s.events, n, r, i, o, f), i -= 100, t.append("line").attr("x1", r + 95).attr("y1", i + a).attr("x2", r + 95).attr("y2", i + a + 100 + c + 100).attr("stroke-width", 2).attr("stroke", "black").attr("marker-end", `url(#${f}-arrowhead)`).attr("stroke-dasharray", "5,5");
		}
		r += 200, d && !o.timeline?.disableMulticolor && n++;
	}
	i -= 10;
}, "drawTasks"), fe = /* @__PURE__ */ p(function(e, t, n, r, i, a, o) {
	let s = 0, c = i;
	i += 100;
	for (let c of t) {
		let t = {
			descr: c,
			section: n,
			number: n,
			width: 150,
			padding: 20,
			maxHeight: 50
		};
		l.debug("eventNode", t);
		let u = e.append("g").attr("class", "eventWrapper"), d = U.drawNode(u, t, n, a, o, !0).height;
		s += d, u.attr("transform", `translate(${r}, ${i})`), i = i + 10 + d;
	}
	return i = c, s;
}, "drawEvents"), pe = {
	setConf: /* @__PURE__ */ p(() => {}, "setConf"),
	draw: de
}, G = 200, K = 5, me = G + K * 2, q = G + 100, he = q + K * 2, J = 10, ge = 0, Y = 20, X = 20, Z = 30, Q = 50, _e = /* @__PURE__ */ p(function(e, t, n, r) {
	let i = s(), a = i.timeline?.leftMargin ?? 50;
	l.debug("timeline", r.db);
	let o = f(t);
	o.append("g");
	let c = r.db.getTasks(), p = r.db.getCommonDb().getDiagramTitle();
	l.debug("task", c), U.initGraphics(o);
	let m = r.db.getSections();
	l.debug("sections", m);
	let h = 0, g = 0, _ = 50 + a, v = 50, y = v, b = _, x = me + X, S = he + Q, C = b + x, w = 0, T = m && m.length > 0, E = T ? C : _ + x, D = Math.max(50, x + S - K * 2);
	m.forEach(function(e) {
		let t = {
			number: w,
			descr: e,
			section: w,
			width: D,
			padding: K,
			maxHeight: h
		}, n = U.getVirtualNodeHeight(o, t, i);
		l.debug("sectionHeight before draw", n), h = Math.max(h, n);
	});
	let O = 0;
	l.debug("tasks.length", c.length);
	for (let [e, t] of c.entries()) {
		let n = {
			number: e,
			descr: t,
			section: t.section,
			width: G,
			padding: K,
			maxHeight: g
		}, r = U.getVirtualNodeHeight(o, n, i);
		l.debug("taskHeight before draw", r), g = Math.max(g, r);
		let a = 0;
		for (let e of t.events) {
			let n = {
				descr: e,
				section: t.section,
				number: t.section,
				width: q,
				padding: K,
				maxHeight: 50
			};
			a += U.getVirtualNodeHeight(o, n, i);
		}
		t.events.length > 0 && (a += (t.events.length - 1) * J), O = Math.max(O, a) + ge;
	}
	l.debug("maxSectionHeight before draw", h), l.debug("maxTaskHeight before draw", g);
	let k = Math.max(g, O) + Z;
	T ? m.forEach((e) => {
		let t = c.filter((t) => t.section === e), n = {
			number: w,
			descr: e,
			section: w,
			width: D,
			padding: K,
			maxHeight: h
		};
		l.debug("sectionNode", n);
		let r = o.append("g"), a = U.drawNode(r, n, w, i);
		l.debug("sectionNode output", a);
		let s = E - x;
		r.attr("transform", `translate(${s}, ${v})`);
		let u = v + a.height + Y;
		t.length > 0 && $(o, t, w, E, u, g, i, k, !1);
		let d = t.length, f = a.height + Y + k * Math.max(d, 1) - (d > 0 ? Z * 2 : 0);
		v += f, w++;
	}) : $(o, c, w, E, v, g, i, k, !0);
	let A = o.node()?.getBBox();
	if (!A) throw Error("bbox not found");
	if (l.debug("bounds", A), p) {
		if (o.append("text").text(p).attr("x", A.width / 2 - a).attr("font-size", "4ex").attr("font-weight", "bold").attr("y", 20), A = o.node()?.getBBox(), !A) throw Error("bbox not found");
		l.debug("bounds after title", A);
	}
	let [j] = d(i.fontSize), M = (j ?? 16) * 2, N = (j ?? 16) * .5 + 20, P = o.append("g").attr("class", "lineWrapper");
	P.append("line").attr("x1", E).attr("y1", y - M).attr("x2", E).attr("y2", A.y + A.height + N).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)"), P.lower(), u(void 0, o, i.timeline?.padding ?? 50, i.timeline?.useMaxWidth ?? !1);
}, "draw"), $ = /* @__PURE__ */ p(function(e, t, n, r, i, a, o, s, c) {
	for (let u of t) {
		let t = {
			descr: u.task,
			section: n,
			number: n,
			width: G,
			padding: K,
			maxHeight: a
		};
		l.debug("taskNode", t);
		let d = e.append("g").attr("class", "taskWrapper"), f = U.drawNode(d, t, n, o), p = f.height;
		l.debug("taskHeight after draw", p);
		let m = r - X - f.width;
		if (d.attr("transform", `translate(${m}, ${i})`), a = Math.max(a, p), u.events && u.events.length > 0) {
			let t = i, a = r + Q;
			ve(e, u.events, n, r, a, t, o);
		}
		i += s, c && !o.timeline?.disableMulticolor && n++;
	}
}, "drawTasks"), ve = /* @__PURE__ */ p(function(e, t, n, r, i, a, o) {
	let s = a;
	for (let a of t) {
		let t = {
			descr: a,
			section: n,
			number: n,
			width: q,
			padding: K,
			maxHeight: 0
		};
		l.debug("eventNode", t);
		let c = e.append("g").attr("class", "eventWrapper"), u = U.drawNode(c, t, n, o).height;
		c.attr("transform", `translate(${i}, ${s})`);
		let d = e.append("g").attr("class", "lineWrapper"), f = s + u / 2;
		d.append("line").attr("x1", r).attr("y1", f).attr("x2", i).attr("y2", f).attr("stroke-width", 2).attr("stroke", "black").attr("marker-end", "url(#arrowhead)").attr("stroke-dasharray", "5,5"), s = s + u + J;
	}
	return s - a;
}, "drawEvents"), ye = {
	setConf: /* @__PURE__ */ p(() => {}, "setConf"),
	draw: _e
}, be = /* @__PURE__ */ p((e) => {
	let { theme: t } = o(), n = t?.includes("dark"), r = t?.includes("color"), i = e.svgId?.replace(/^#/, "") ?? "", a = i ? `url(#${i}-drop-shadow)` : e.dropShadow ?? "none", s = "";
	for (let t = 0; t < e.THEME_COLOR_LIMIT; t++) {
		let i = `${17 - 3 * t}`, o = r ? e.borderColorArray[t] : e.mainBkg, c = r ? e.borderColorArray[t] : e.nodeBorder;
		s += `
    .section-${t - 1} rect,
    .section-${t - 1} path,
    .section-${t - 1} circle {
      fill: ${n && r ? e.mainBkg : o};
      stroke: ${c};
      stroke-width: ${e.strokeWidth};
      filter: ${a};
    }

    .section-${t - 1} text {
      fill: ${e.nodeBorder};
      font-weight: ${e.fontWeight}
    }

    .node-icon-${t - 1} {
      font-size: 40px;
      color: ${e["cScaleLabel" + t]};
    }

    .section-edge-${t - 1} {
      stroke: ${e["cScale" + t]};
    }

    .edge-depth-${t - 1} {
      stroke-width: ${i};
    }

    .section-${t - 1} line {
      stroke: ${e["cScaleInv" + t]};
      stroke-width: 3;
    }

    .lineWrapper line {
      stroke: ${e.nodeBorder};
      stroke-width:${e.strokeWidth}
    }

    .disabled,
    .disabled circle,
    .disabled text {
      fill: ${e.tertiaryColor ?? "lightgray"};
    }

    .disabled text {
      fill: ${e.clusterBorder ?? "#efefef"};
    }
    `;
	}
	return s;
}, "genReduxSections"), xe = /* @__PURE__ */ p((e) => {
	let t = "";
	for (let t = 0; t < e.THEME_COLOR_LIMIT; t++) e["lineColor" + t] = e["lineColor" + t] || e["cScaleInv" + t], a(e["lineColor" + t]) ? e["lineColor" + t] = c(e["lineColor" + t], 20) : e["lineColor" + t] = i(e["lineColor" + t], 20);
	for (let n = 0; n < e.THEME_COLOR_LIMIT; n++) {
		let r = "" + (17 - 3 * n);
		t += `
    .section-${n - 1} rect, .section-${n - 1} path, .section-${n - 1} circle, .section-${n - 1} path  {
      fill: ${e["cScale" + n]};
    }
    .section-${n - 1} text {
     fill: ${e["cScaleLabel" + n]};
    }
    .node-icon-${n - 1} {
      font-size: 40px;
      color: ${e["cScaleLabel" + n]};
    }
    .section-edge-${n - 1}{
      stroke: ${e["cScale" + n]};
    }
    .edge-depth-${n - 1}{
      stroke-width: ${r};
    }
    .section-${n - 1} line {
      stroke: ${e["cScaleInv" + n]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${e["cScaleLabel" + n]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: ${e.tertiaryColor ?? "lightgray"};
    }
    .disabled text {
      fill: ${e.clusterBorder ?? "#efefef"};
    }
    `;
	}
	return t;
}, "genSections"), Se = {
	db: _,
	renderer: {
		setConf: /* @__PURE__ */ p(() => {}, "setConf"),
		draw: /* @__PURE__ */ p((e, t, n, r) => (r?.db?.getDirection?.() ?? "LR") === "TD" ? ye.draw(e, t, n, r) : pe.draw(e, t, n, r), "draw")
	},
	parser: g,
	styles: /* @__PURE__ */ p((e) => {
		let { theme: t } = o(), n = t?.includes("redux"), r = t === "neutral", i = e.svgId?.replace(/^#/, "") ?? "", a = "";
		if (e.useGradient && i && e.THEME_COLOR_LIMIT && !r) for (let t = 0; t < e.THEME_COLOR_LIMIT; t++) a += `
      .section-${t - 1}[data-look="neo"] rect,
      .section-${t - 1}[data-look="neo"] path,
      .section-${t - 1}[data-look="neo"] circle {
        fill: ${e.mainBkg};
        stroke: url(#${i}-gradient);
        stroke-width: 2;
      }
      .section-${t - 1}[data-look="neo"] line {
        stroke: url(#${i}-gradient);
        stroke-width: 2;
      }`;
		return `
  .edge {
    stroke-width: 3;
  }
  ${n ? be(e) : xe(e)}
  ${a}
  .section-root rect, .section-root path, .section-root circle  {
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
  .eventWrapper  {
   filter: brightness(120%);
  }
`;
	}, "getStyles")
};
//#endregion
export { Se as diagram };

//# sourceMappingURL=timeline-definition-24CTP7MA-DGx55HnZ-BpFBu0HN.js.map