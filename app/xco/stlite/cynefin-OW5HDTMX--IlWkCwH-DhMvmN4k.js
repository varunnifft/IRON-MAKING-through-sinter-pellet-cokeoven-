//#region ../react/build/cynefin-OW5HDTMX--IlWkCwH.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, n) => t(e, "name", {
	value: n,
	configurable: !0
}), s = (e, t) => function() {
	return e && (t = (0, e[r(e)[0]])(e = 0)), t;
}, c = (e, t) => function() {
	return t || (0, e[r(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, l = (e, n) => {
	for (var r in n) t(e, r, {
		get: n[r],
		enumerable: !0
	});
}, u = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (let c of r(i)) !a.call(e, c) && c !== o && t(e, c, {
		get: () => i[c],
		enumerable: !(s = n(i, c)) || s.enumerable
	});
	return e;
}, d = (e, t, n) => (u(e, t, "default"), n), f = (n, r, a) => (a = n == null ? {} : e(i(n)), u(t(a, "default", {
	value: n,
	enumerable: !0
}), n)), p = (e) => u(t({}, "__esModule", { value: !0 }), e), m = {};
l(m, {
	AnnotatedTextEdit: () => O,
	ChangeAnnotation: () => ce,
	ChangeAnnotationIdentifier: () => D,
	CodeAction: () => He,
	CodeActionContext: () => Ve,
	CodeActionKind: () => ze,
	CodeActionTriggerKind: () => Be,
	CodeDescription: () => ie,
	CodeLens: () => Ue,
	Color: () => S,
	ColorInformation: () => te,
	ColorPresentation: () => C,
	Command: () => oe,
	CompletionItem: () => Ee,
	CompletionItemKind: () => be,
	CompletionItemLabelDetails: () => Te,
	CompletionItemTag: () => Se,
	CompletionList: () => De,
	CreateFile: () => le,
	DeleteFile: () => ue,
	Diagnostic: () => ae,
	DiagnosticRelatedInformation: () => re,
	DiagnosticSeverity: () => T,
	DiagnosticTag: () => E,
	DocumentHighlight: () => Ne,
	DocumentHighlightKind: () => Me,
	DocumentLink: () => Ge,
	DocumentSymbol: () => Re,
	DocumentUri: () => h,
	EOL: () => ut,
	FoldingRange: () => ne,
	FoldingRangeKind: () => w,
	FormattingOptions: () => We,
	Hover: () => ke,
	InlayHint: () => nt,
	InlayHintKind: () => et,
	InlayHintLabelPart: () => tt,
	InlineCompletionContext: () => ct,
	InlineCompletionItem: () => it,
	InlineCompletionList: () => at,
	InlineCompletionTriggerKind: () => ot,
	InlineValueContext: () => $e,
	InlineValueEvaluatableExpression: () => Qe,
	InlineValueText: () => Xe,
	InlineValueVariableLookup: () => Ze,
	InsertReplaceEdit: () => Ce,
	InsertTextFormat: () => xe,
	InsertTextMode: () => we,
	Location: () => x,
	LocationLink: () => ee,
	MarkedString: () => Oe,
	MarkupContent: () => ye,
	MarkupKind: () => ve,
	OptionalVersionedTextDocumentIdentifier: () => ge,
	ParameterInformation: () => Ae,
	Position: () => y,
	Range: () => b,
	RenameFile: () => A,
	SelectedCompletionInfo: () => st,
	SelectionRange: () => Ke,
	SemanticTokenModifiers: () => Je,
	SemanticTokenTypes: () => qe,
	SemanticTokens: () => Ye,
	SignatureInformation: () => je,
	StringValue: () => rt,
	SymbolInformation: () => Ie,
	SymbolKind: () => Pe,
	SymbolTag: () => Fe,
	TextDocument: () => dt,
	TextDocumentEdit: () => k,
	TextDocumentIdentifier: () => me,
	TextDocumentItem: () => _e,
	TextEdit: () => se,
	URI: () => g,
	VersionedTextDocumentIdentifier: () => he,
	WorkspaceChange: () => pe,
	WorkspaceEdit: () => j,
	WorkspaceFolder: () => lt,
	WorkspaceSymbol: () => Le,
	integer: () => _,
	uinteger: () => v
});
var h, g, _, v, y, b, x, ee, S, te, C, w, ne, re, T, E, ie, ae, oe, se, ce, D, O, k, le, A, ue, j, de, fe, pe, me, he, ge, _e, ve, ye, be, xe, Se, Ce, we, Te, Ee, De, Oe, ke, Ae, je, Me, Ne, Pe, Fe, Ie, Le, Re, ze, Be, Ve, He, Ue, We, Ge, Ke, qe, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt, it, at, ot, st, ct, lt, ut, dt, ft, M, pt = s({ "../../node_modules/.pnpm/vscode-languageserver-types@3.17.5/node_modules/vscode-languageserver-types/lib/esm/main.js"() {
	var e, t, n, r;
	(function(e) {
		function t(e) {
			return typeof e == "string";
		}
		o(t, "is"), e.is = t;
	})(h ||= {}), function(e) {
		function t(e) {
			return typeof e == "string";
		}
		o(t, "is"), e.is = t;
	}(g ||= {}), function(e) {
		e.MIN_VALUE = -2147483648, e.MAX_VALUE = 2147483647;
		function t(t) {
			return typeof t == "number" && e.MIN_VALUE <= t && t <= e.MAX_VALUE;
		}
		o(t, "is"), e.is = t;
	}(_ ||= {}), function(e) {
		e.MIN_VALUE = 0, e.MAX_VALUE = 2147483647;
		function t(t) {
			return typeof t == "number" && e.MIN_VALUE <= t && t <= e.MAX_VALUE;
		}
		o(t, "is"), e.is = t;
	}(v ||= {}), function(e) {
		function t(e, t) {
			return e === Number.MAX_VALUE && (e = v.MAX_VALUE), t === Number.MAX_VALUE && (t = v.MAX_VALUE), {
				line: e,
				character: t
			};
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return M.objectLiteral(t) && M.uinteger(t.line) && M.uinteger(t.character);
		}
		o(n, "is"), e.is = n;
	}(y ||= {}), function(e) {
		function t(e, t, n, r) {
			if (M.uinteger(e) && M.uinteger(t) && M.uinteger(n) && M.uinteger(r)) return {
				start: y.create(e, t),
				end: y.create(n, r)
			};
			if (y.is(e) && y.is(t)) return {
				start: e,
				end: t
			};
			throw Error(`Range#create called with invalid arguments[${e}, ${t}, ${n}, ${r}]`);
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return M.objectLiteral(t) && y.is(t.start) && y.is(t.end);
		}
		o(n, "is"), e.is = n;
	}(b ||= {}), function(e) {
		function t(e, t) {
			return {
				uri: e,
				range: t
			};
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return M.objectLiteral(t) && b.is(t.range) && (M.string(t.uri) || M.undefined(t.uri));
		}
		o(n, "is"), e.is = n;
	}(x ||= {}), function(e) {
		function t(e, t, n, r) {
			return {
				targetUri: e,
				targetRange: t,
				targetSelectionRange: n,
				originSelectionRange: r
			};
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return M.objectLiteral(t) && b.is(t.targetRange) && M.string(t.targetUri) && b.is(t.targetSelectionRange) && (b.is(t.originSelectionRange) || M.undefined(t.originSelectionRange));
		}
		o(n, "is"), e.is = n;
	}(ee ||= {}), function(e) {
		function t(e, t, n, r) {
			return {
				red: e,
				green: t,
				blue: n,
				alpha: r
			};
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return M.objectLiteral(t) && M.numberRange(t.red, 0, 1) && M.numberRange(t.green, 0, 1) && M.numberRange(t.blue, 0, 1) && M.numberRange(t.alpha, 0, 1);
		}
		o(n, "is"), e.is = n;
	}(S ||= {}), function(e) {
		function t(e, t) {
			return {
				range: e,
				color: t
			};
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return M.objectLiteral(t) && b.is(t.range) && S.is(t.color);
		}
		o(n, "is"), e.is = n;
	}(te ||= {}), function(e) {
		function t(e, t, n) {
			return {
				label: e,
				textEdit: t,
				additionalTextEdits: n
			};
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return M.objectLiteral(t) && M.string(t.label) && (M.undefined(t.textEdit) || se.is(t)) && (M.undefined(t.additionalTextEdits) || M.typedArray(t.additionalTextEdits, se.is));
		}
		o(n, "is"), e.is = n;
	}(C ||= {}), function(e) {
		e.Comment = "comment", e.Imports = "imports", e.Region = "region";
	}(w ||= {}), function(e) {
		function t(e, t, n, r, i, a) {
			let o = {
				startLine: e,
				endLine: t
			};
			return M.defined(n) && (o.startCharacter = n), M.defined(r) && (o.endCharacter = r), M.defined(i) && (o.kind = i), M.defined(a) && (o.collapsedText = a), o;
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return M.objectLiteral(t) && M.uinteger(t.startLine) && M.uinteger(t.startLine) && (M.undefined(t.startCharacter) || M.uinteger(t.startCharacter)) && (M.undefined(t.endCharacter) || M.uinteger(t.endCharacter)) && (M.undefined(t.kind) || M.string(t.kind));
		}
		o(n, "is"), e.is = n;
	}(ne ||= {}), function(e) {
		function t(e, t) {
			return {
				location: e,
				message: t
			};
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return M.defined(t) && x.is(t.location) && M.string(t.message);
		}
		o(n, "is"), e.is = n;
	}(re ||= {}), function(e) {
		e.Error = 1, e.Warning = 2, e.Information = 3, e.Hint = 4;
	}(T ||= {}), function(e) {
		e.Unnecessary = 1, e.Deprecated = 2;
	}(E ||= {}), function(e) {
		function t(e) {
			let t = e;
			return M.objectLiteral(t) && M.string(t.href);
		}
		o(t, "is"), e.is = t;
	}(ie ||= {}), function(e) {
		function t(e, t, n, r, i, a) {
			let o = {
				range: e,
				message: t
			};
			return M.defined(n) && (o.severity = n), M.defined(r) && (o.code = r), M.defined(i) && (o.source = i), M.defined(a) && (o.relatedInformation = a), o;
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return M.defined(t) && b.is(t.range) && M.string(t.message) && (M.number(t.severity) || M.undefined(t.severity)) && (M.integer(t.code) || M.string(t.code) || M.undefined(t.code)) && (M.undefined(t.codeDescription) || M.string(t.codeDescription?.href)) && (M.string(t.source) || M.undefined(t.source)) && (M.undefined(t.relatedInformation) || M.typedArray(t.relatedInformation, re.is));
		}
		o(n, "is"), e.is = n;
	}(ae ||= {}), function(e) {
		function t(e, t, ...n) {
			let r = {
				title: e,
				command: t
			};
			return M.defined(n) && n.length > 0 && (r.arguments = n), r;
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return M.defined(t) && M.string(t.title) && M.string(t.command);
		}
		o(n, "is"), e.is = n;
	}(oe ||= {}), function(e) {
		function t(e, t) {
			return {
				range: e,
				newText: t
			};
		}
		o(t, "replace"), e.replace = t;
		function n(e, t) {
			return {
				range: {
					start: e,
					end: e
				},
				newText: t
			};
		}
		o(n, "insert"), e.insert = n;
		function r(e) {
			return {
				range: e,
				newText: ""
			};
		}
		o(r, "del"), e.del = r;
		function i(e) {
			let t = e;
			return M.objectLiteral(t) && M.string(t.newText) && b.is(t.range);
		}
		o(i, "is"), e.is = i;
	}(se ||= {}), function(e) {
		function t(e, t, n) {
			let r = { label: e };
			return t !== void 0 && (r.needsConfirmation = t), n !== void 0 && (r.description = n), r;
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return M.objectLiteral(t) && M.string(t.label) && (M.boolean(t.needsConfirmation) || t.needsConfirmation === void 0) && (M.string(t.description) || t.description === void 0);
		}
		o(n, "is"), e.is = n;
	}(ce ||= {}), function(e) {
		function t(e) {
			let t = e;
			return M.string(t);
		}
		o(t, "is"), e.is = t;
	}(D ||= {}), function(e) {
		function t(e, t, n) {
			return {
				range: e,
				newText: t,
				annotationId: n
			};
		}
		o(t, "replace"), e.replace = t;
		function n(e, t, n) {
			return {
				range: {
					start: e,
					end: e
				},
				newText: t,
				annotationId: n
			};
		}
		o(n, "insert"), e.insert = n;
		function r(e, t) {
			return {
				range: e,
				newText: "",
				annotationId: t
			};
		}
		o(r, "del"), e.del = r;
		function i(e) {
			let t = e;
			return se.is(t) && (ce.is(t.annotationId) || D.is(t.annotationId));
		}
		o(i, "is"), e.is = i;
	}(O ||= {}), function(e) {
		function t(e, t) {
			return {
				textDocument: e,
				edits: t
			};
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return M.defined(t) && ge.is(t.textDocument) && Array.isArray(t.edits);
		}
		o(n, "is"), e.is = n;
	}(k ||= {}), function(e) {
		function t(e, t, n) {
			let r = {
				kind: "create",
				uri: e
			};
			return t !== void 0 && (t.overwrite !== void 0 || t.ignoreIfExists !== void 0) && (r.options = t), n !== void 0 && (r.annotationId = n), r;
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return t && t.kind === "create" && M.string(t.uri) && (t.options === void 0 || (t.options.overwrite === void 0 || M.boolean(t.options.overwrite)) && (t.options.ignoreIfExists === void 0 || M.boolean(t.options.ignoreIfExists))) && (t.annotationId === void 0 || D.is(t.annotationId));
		}
		o(n, "is"), e.is = n;
	}(le ||= {}), function(e) {
		function t(e, t, n, r) {
			let i = {
				kind: "rename",
				oldUri: e,
				newUri: t
			};
			return n !== void 0 && (n.overwrite !== void 0 || n.ignoreIfExists !== void 0) && (i.options = n), r !== void 0 && (i.annotationId = r), i;
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return t && t.kind === "rename" && M.string(t.oldUri) && M.string(t.newUri) && (t.options === void 0 || (t.options.overwrite === void 0 || M.boolean(t.options.overwrite)) && (t.options.ignoreIfExists === void 0 || M.boolean(t.options.ignoreIfExists))) && (t.annotationId === void 0 || D.is(t.annotationId));
		}
		o(n, "is"), e.is = n;
	}(A ||= {}), function(e) {
		function t(e, t, n) {
			let r = {
				kind: "delete",
				uri: e
			};
			return t !== void 0 && (t.recursive !== void 0 || t.ignoreIfNotExists !== void 0) && (r.options = t), n !== void 0 && (r.annotationId = n), r;
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return t && t.kind === "delete" && M.string(t.uri) && (t.options === void 0 || (t.options.recursive === void 0 || M.boolean(t.options.recursive)) && (t.options.ignoreIfNotExists === void 0 || M.boolean(t.options.ignoreIfNotExists))) && (t.annotationId === void 0 || D.is(t.annotationId));
		}
		o(n, "is"), e.is = n;
	}(ue ||= {}), function(e) {
		function t(e) {
			let t = e;
			return t && (t.changes !== void 0 || t.documentChanges !== void 0) && (t.documentChanges === void 0 || t.documentChanges.every((e) => M.string(e.kind) ? le.is(e) || A.is(e) || ue.is(e) : k.is(e)));
		}
		o(t, "is"), e.is = t;
	}(j ||= {}), de = (e = class {
		constructor(e, t) {
			this.edits = e, this.changeAnnotations = t;
		}
		insert(e, t, n) {
			let r, i;
			if (n === void 0 ? r = se.insert(e, t) : D.is(n) ? (i = n, r = O.insert(e, t, n)) : (this.assertChangeAnnotations(this.changeAnnotations), i = this.changeAnnotations.manage(n), r = O.insert(e, t, i)), this.edits.push(r), i !== void 0) return i;
		}
		replace(e, t, n) {
			let r, i;
			if (n === void 0 ? r = se.replace(e, t) : D.is(n) ? (i = n, r = O.replace(e, t, n)) : (this.assertChangeAnnotations(this.changeAnnotations), i = this.changeAnnotations.manage(n), r = O.replace(e, t, i)), this.edits.push(r), i !== void 0) return i;
		}
		delete(e, t) {
			let n, r;
			if (t === void 0 ? n = se.del(e) : D.is(t) ? (r = t, n = O.del(e, t)) : (this.assertChangeAnnotations(this.changeAnnotations), r = this.changeAnnotations.manage(t), n = O.del(e, r)), this.edits.push(n), r !== void 0) return r;
		}
		add(e) {
			this.edits.push(e);
		}
		all() {
			return this.edits;
		}
		clear() {
			this.edits.splice(0, this.edits.length);
		}
		assertChangeAnnotations(e) {
			if (e === void 0) throw Error("Text edit change is not configured to manage change annotations.");
		}
	}, o(e, "TextEditChangeImpl"), e), fe = (t = class {
		constructor(e) {
			this._annotations = e === void 0 ? /* @__PURE__ */ Object.create(null) : e, this._counter = 0, this._size = 0;
		}
		all() {
			return this._annotations;
		}
		get size() {
			return this._size;
		}
		manage(e, t) {
			let n;
			if (D.is(e) ? n = e : (n = this.nextId(), t = e), this._annotations[n] !== void 0) throw Error(`Id ${n} is already in use.`);
			if (t === void 0) throw Error(`No annotation provided for id ${n}`);
			return this._annotations[n] = t, this._size++, n;
		}
		nextId() {
			return this._counter++, this._counter.toString();
		}
	}, o(t, "ChangeAnnotations"), t), pe = (n = class {
		constructor(e) {
			this._textEditChanges = /* @__PURE__ */ Object.create(null), e === void 0 ? this._workspaceEdit = {} : (this._workspaceEdit = e, e.documentChanges ? (this._changeAnnotations = new fe(e.changeAnnotations), e.changeAnnotations = this._changeAnnotations.all(), e.documentChanges.forEach((e) => {
				if (k.is(e)) {
					let t = new de(e.edits, this._changeAnnotations);
					this._textEditChanges[e.textDocument.uri] = t;
				}
			})) : e.changes && Object.keys(e.changes).forEach((t) => {
				let n = new de(e.changes[t]);
				this._textEditChanges[t] = n;
			}));
		}
		get edit() {
			return this.initDocumentChanges(), this._changeAnnotations !== void 0 && (this._changeAnnotations.size === 0 ? this._workspaceEdit.changeAnnotations = void 0 : this._workspaceEdit.changeAnnotations = this._changeAnnotations.all()), this._workspaceEdit;
		}
		getTextEditChange(e) {
			if (ge.is(e)) {
				if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw Error("Workspace edit is not configured for document changes.");
				let t = {
					uri: e.uri,
					version: e.version
				}, n = this._textEditChanges[t.uri];
				if (!n) {
					let e = [], r = {
						textDocument: t,
						edits: e
					};
					this._workspaceEdit.documentChanges.push(r), n = new de(e, this._changeAnnotations), this._textEditChanges[t.uri] = n;
				}
				return n;
			}
			{
				if (this.initChanges(), this._workspaceEdit.changes === void 0) throw Error("Workspace edit is not configured for normal text edit changes.");
				let t = this._textEditChanges[e];
				if (!t) {
					let n = [];
					this._workspaceEdit.changes[e] = n, t = new de(n), this._textEditChanges[e] = t;
				}
				return t;
			}
		}
		initDocumentChanges() {
			this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._changeAnnotations = new fe(), this._workspaceEdit.documentChanges = [], this._workspaceEdit.changeAnnotations = this._changeAnnotations.all());
		}
		initChanges() {
			this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._workspaceEdit.changes = /* @__PURE__ */ Object.create(null));
		}
		createFile(e, t, n) {
			if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw Error("Workspace edit is not configured for document changes.");
			let r;
			ce.is(t) || D.is(t) ? r = t : n = t;
			let i, a;
			if (r === void 0 ? i = le.create(e, n) : (a = D.is(r) ? r : this._changeAnnotations.manage(r), i = le.create(e, n, a)), this._workspaceEdit.documentChanges.push(i), a !== void 0) return a;
		}
		renameFile(e, t, n, r) {
			if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw Error("Workspace edit is not configured for document changes.");
			let i;
			ce.is(n) || D.is(n) ? i = n : r = n;
			let a, o;
			if (i === void 0 ? a = A.create(e, t, r) : (o = D.is(i) ? i : this._changeAnnotations.manage(i), a = A.create(e, t, r, o)), this._workspaceEdit.documentChanges.push(a), o !== void 0) return o;
		}
		deleteFile(e, t, n) {
			if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw Error("Workspace edit is not configured for document changes.");
			let r;
			ce.is(t) || D.is(t) ? r = t : n = t;
			let i, a;
			if (r === void 0 ? i = ue.create(e, n) : (a = D.is(r) ? r : this._changeAnnotations.manage(r), i = ue.create(e, n, a)), this._workspaceEdit.documentChanges.push(i), a !== void 0) return a;
		}
	}, o(n, "WorkspaceChange"), n), function(e) {
		function t(e) {
			return { uri: e };
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return M.defined(t) && M.string(t.uri);
		}
		o(n, "is"), e.is = n;
	}(me ||= {}), function(e) {
		function t(e, t) {
			return {
				uri: e,
				version: t
			};
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return M.defined(t) && M.string(t.uri) && M.integer(t.version);
		}
		o(n, "is"), e.is = n;
	}(he ||= {}), function(e) {
		function t(e, t) {
			return {
				uri: e,
				version: t
			};
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return M.defined(t) && M.string(t.uri) && (t.version === null || M.integer(t.version));
		}
		o(n, "is"), e.is = n;
	}(ge ||= {}), function(e) {
		function t(e, t, n, r) {
			return {
				uri: e,
				languageId: t,
				version: n,
				text: r
			};
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return M.defined(t) && M.string(t.uri) && M.string(t.languageId) && M.integer(t.version) && M.string(t.text);
		}
		o(n, "is"), e.is = n;
	}(_e ||= {}), function(e) {
		e.PlainText = "plaintext", e.Markdown = "markdown";
		function t(t) {
			let n = t;
			return n === e.PlainText || n === e.Markdown;
		}
		o(t, "is"), e.is = t;
	}(ve ||= {}), function(e) {
		function t(e) {
			let t = e;
			return M.objectLiteral(e) && ve.is(t.kind) && M.string(t.value);
		}
		o(t, "is"), e.is = t;
	}(ye ||= {}), function(e) {
		e.Text = 1, e.Method = 2, e.Function = 3, e.Constructor = 4, e.Field = 5, e.Variable = 6, e.Class = 7, e.Interface = 8, e.Module = 9, e.Property = 10, e.Unit = 11, e.Value = 12, e.Enum = 13, e.Keyword = 14, e.Snippet = 15, e.Color = 16, e.File = 17, e.Reference = 18, e.Folder = 19, e.EnumMember = 20, e.Constant = 21, e.Struct = 22, e.Event = 23, e.Operator = 24, e.TypeParameter = 25;
	}(be ||= {}), function(e) {
		e.PlainText = 1, e.Snippet = 2;
	}(xe ||= {}), function(e) {
		e.Deprecated = 1;
	}(Se ||= {}), function(e) {
		function t(e, t, n) {
			return {
				newText: e,
				insert: t,
				replace: n
			};
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return t && M.string(t.newText) && b.is(t.insert) && b.is(t.replace);
		}
		o(n, "is"), e.is = n;
	}(Ce ||= {}), function(e) {
		e.asIs = 1, e.adjustIndentation = 2;
	}(we ||= {}), function(e) {
		function t(e) {
			let t = e;
			return t && (M.string(t.detail) || t.detail === void 0) && (M.string(t.description) || t.description === void 0);
		}
		o(t, "is"), e.is = t;
	}(Te ||= {}), function(e) {
		function t(e) {
			return { label: e };
		}
		o(t, "create"), e.create = t;
	}(Ee ||= {}), function(e) {
		function t(e, t) {
			return {
				items: e || [],
				isIncomplete: !!t
			};
		}
		o(t, "create"), e.create = t;
	}(De ||= {}), function(e) {
		function t(e) {
			return e.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
		}
		o(t, "fromPlainText"), e.fromPlainText = t;
		function n(e) {
			let t = e;
			return M.string(t) || M.objectLiteral(t) && M.string(t.language) && M.string(t.value);
		}
		o(n, "is"), e.is = n;
	}(Oe ||= {}), function(e) {
		function t(e) {
			let t = e;
			return !!t && M.objectLiteral(t) && (ye.is(t.contents) || Oe.is(t.contents) || M.typedArray(t.contents, Oe.is)) && (e.range === void 0 || b.is(e.range));
		}
		o(t, "is"), e.is = t;
	}(ke ||= {}), function(e) {
		function t(e, t) {
			return t ? {
				label: e,
				documentation: t
			} : { label: e };
		}
		o(t, "create"), e.create = t;
	}(Ae ||= {}), function(e) {
		function t(e, t, ...n) {
			let r = { label: e };
			return M.defined(t) && (r.documentation = t), r.parameters = M.defined(n) ? n : [], r;
		}
		o(t, "create"), e.create = t;
	}(je ||= {}), function(e) {
		e.Text = 1, e.Read = 2, e.Write = 3;
	}(Me ||= {}), function(e) {
		function t(e, t) {
			let n = { range: e };
			return M.number(t) && (n.kind = t), n;
		}
		o(t, "create"), e.create = t;
	}(Ne ||= {}), function(e) {
		e.File = 1, e.Module = 2, e.Namespace = 3, e.Package = 4, e.Class = 5, e.Method = 6, e.Property = 7, e.Field = 8, e.Constructor = 9, e.Enum = 10, e.Interface = 11, e.Function = 12, e.Variable = 13, e.Constant = 14, e.String = 15, e.Number = 16, e.Boolean = 17, e.Array = 18, e.Object = 19, e.Key = 20, e.Null = 21, e.EnumMember = 22, e.Struct = 23, e.Event = 24, e.Operator = 25, e.TypeParameter = 26;
	}(Pe ||= {}), function(e) {
		e.Deprecated = 1;
	}(Fe ||= {}), function(e) {
		function t(e, t, n, r, i) {
			let a = {
				name: e,
				kind: t,
				location: {
					uri: r,
					range: n
				}
			};
			return i && (a.containerName = i), a;
		}
		o(t, "create"), e.create = t;
	}(Ie ||= {}), function(e) {
		function t(e, t, n, r) {
			return r === void 0 ? {
				name: e,
				kind: t,
				location: { uri: n }
			} : {
				name: e,
				kind: t,
				location: {
					uri: n,
					range: r
				}
			};
		}
		o(t, "create"), e.create = t;
	}(Le ||= {}), function(e) {
		function t(e, t, n, r, i, a) {
			let o = {
				name: e,
				detail: t,
				kind: n,
				range: r,
				selectionRange: i
			};
			return a !== void 0 && (o.children = a), o;
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return t && M.string(t.name) && M.number(t.kind) && b.is(t.range) && b.is(t.selectionRange) && (t.detail === void 0 || M.string(t.detail)) && (t.deprecated === void 0 || M.boolean(t.deprecated)) && (t.children === void 0 || Array.isArray(t.children)) && (t.tags === void 0 || Array.isArray(t.tags));
		}
		o(n, "is"), e.is = n;
	}(Re ||= {}), function(e) {
		e.Empty = "", e.QuickFix = "quickfix", e.Refactor = "refactor", e.RefactorExtract = "refactor.extract", e.RefactorInline = "refactor.inline", e.RefactorRewrite = "refactor.rewrite", e.Source = "source", e.SourceOrganizeImports = "source.organizeImports", e.SourceFixAll = "source.fixAll";
	}(ze ||= {}), function(e) {
		e.Invoked = 1, e.Automatic = 2;
	}(Be ||= {}), function(e) {
		function t(e, t, n) {
			let r = { diagnostics: e };
			return t != null && (r.only = t), n != null && (r.triggerKind = n), r;
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return M.defined(t) && M.typedArray(t.diagnostics, ae.is) && (t.only === void 0 || M.typedArray(t.only, M.string)) && (t.triggerKind === void 0 || t.triggerKind === Be.Invoked || t.triggerKind === Be.Automatic);
		}
		o(n, "is"), e.is = n;
	}(Ve ||= {}), function(e) {
		function t(e, t, n) {
			let r = { title: e }, i = !0;
			return typeof t == "string" ? (i = !1, r.kind = t) : oe.is(t) ? r.command = t : r.edit = t, i && n !== void 0 && (r.kind = n), r;
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return t && M.string(t.title) && (t.diagnostics === void 0 || M.typedArray(t.diagnostics, ae.is)) && (t.kind === void 0 || M.string(t.kind)) && (t.edit !== void 0 || t.command !== void 0) && (t.command === void 0 || oe.is(t.command)) && (t.isPreferred === void 0 || M.boolean(t.isPreferred)) && (t.edit === void 0 || j.is(t.edit));
		}
		o(n, "is"), e.is = n;
	}(He ||= {}), function(e) {
		function t(e, t) {
			let n = { range: e };
			return M.defined(t) && (n.data = t), n;
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return M.defined(t) && b.is(t.range) && (M.undefined(t.command) || oe.is(t.command));
		}
		o(n, "is"), e.is = n;
	}(Ue ||= {}), function(e) {
		function t(e, t) {
			return {
				tabSize: e,
				insertSpaces: t
			};
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return M.defined(t) && M.uinteger(t.tabSize) && M.boolean(t.insertSpaces);
		}
		o(n, "is"), e.is = n;
	}(We ||= {}), function(e) {
		function t(e, t, n) {
			return {
				range: e,
				target: t,
				data: n
			};
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return M.defined(t) && b.is(t.range) && (M.undefined(t.target) || M.string(t.target));
		}
		o(n, "is"), e.is = n;
	}(Ge ||= {}), function(e) {
		function t(e, t) {
			return {
				range: e,
				parent: t
			};
		}
		o(t, "create"), e.create = t;
		function n(t) {
			let n = t;
			return M.objectLiteral(n) && b.is(n.range) && (n.parent === void 0 || e.is(n.parent));
		}
		o(n, "is"), e.is = n;
	}(Ke ||= {}), function(e) {
		e.namespace = "namespace", e.type = "type", e.class = "class", e.enum = "enum", e.interface = "interface", e.struct = "struct", e.typeParameter = "typeParameter", e.parameter = "parameter", e.variable = "variable", e.property = "property", e.enumMember = "enumMember", e.event = "event", e.function = "function", e.method = "method", e.macro = "macro", e.keyword = "keyword", e.modifier = "modifier", e.comment = "comment", e.string = "string", e.number = "number", e.regexp = "regexp", e.operator = "operator", e.decorator = "decorator";
	}(qe ||= {}), function(e) {
		e.declaration = "declaration", e.definition = "definition", e.readonly = "readonly", e.static = "static", e.deprecated = "deprecated", e.abstract = "abstract", e.async = "async", e.modification = "modification", e.documentation = "documentation", e.defaultLibrary = "defaultLibrary";
	}(Je ||= {}), function(e) {
		function t(e) {
			let t = e;
			return M.objectLiteral(t) && (t.resultId === void 0 || typeof t.resultId == "string") && Array.isArray(t.data) && (t.data.length === 0 || typeof t.data[0] == "number");
		}
		o(t, "is"), e.is = t;
	}(Ye ||= {}), function(e) {
		function t(e, t) {
			return {
				range: e,
				text: t
			};
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return t != null && b.is(t.range) && M.string(t.text);
		}
		o(n, "is"), e.is = n;
	}(Xe ||= {}), function(e) {
		function t(e, t, n) {
			return {
				range: e,
				variableName: t,
				caseSensitiveLookup: n
			};
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return t != null && b.is(t.range) && M.boolean(t.caseSensitiveLookup) && (M.string(t.variableName) || t.variableName === void 0);
		}
		o(n, "is"), e.is = n;
	}(Ze ||= {}), function(e) {
		function t(e, t) {
			return {
				range: e,
				expression: t
			};
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return t != null && b.is(t.range) && (M.string(t.expression) || t.expression === void 0);
		}
		o(n, "is"), e.is = n;
	}(Qe ||= {}), function(e) {
		function t(e, t) {
			return {
				frameId: e,
				stoppedLocation: t
			};
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return M.defined(t) && b.is(e.stoppedLocation);
		}
		o(n, "is"), e.is = n;
	}($e ||= {}), function(e) {
		e.Type = 1, e.Parameter = 2;
		function t(e) {
			return e === 1 || e === 2;
		}
		o(t, "is"), e.is = t;
	}(et ||= {}), function(e) {
		function t(e) {
			return { value: e };
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return M.objectLiteral(t) && (t.tooltip === void 0 || M.string(t.tooltip) || ye.is(t.tooltip)) && (t.location === void 0 || x.is(t.location)) && (t.command === void 0 || oe.is(t.command));
		}
		o(n, "is"), e.is = n;
	}(tt ||= {}), function(e) {
		function t(e, t, n) {
			let r = {
				position: e,
				label: t
			};
			return n !== void 0 && (r.kind = n), r;
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return M.objectLiteral(t) && y.is(t.position) && (M.string(t.label) || M.typedArray(t.label, tt.is)) && (t.kind === void 0 || et.is(t.kind)) && t.textEdits === void 0 || M.typedArray(t.textEdits, se.is) && (t.tooltip === void 0 || M.string(t.tooltip) || ye.is(t.tooltip)) && (t.paddingLeft === void 0 || M.boolean(t.paddingLeft)) && (t.paddingRight === void 0 || M.boolean(t.paddingRight));
		}
		o(n, "is"), e.is = n;
	}(nt ||= {}), function(e) {
		function t(e) {
			return {
				kind: "snippet",
				value: e
			};
		}
		o(t, "createSnippet"), e.createSnippet = t;
	}(rt ||= {}), function(e) {
		function t(e, t, n, r) {
			return {
				insertText: e,
				filterText: t,
				range: n,
				command: r
			};
		}
		o(t, "create"), e.create = t;
	}(it ||= {}), function(e) {
		function t(e) {
			return { items: e };
		}
		o(t, "create"), e.create = t;
	}(at ||= {}), function(e) {
		e.Invoked = 0, e.Automatic = 1;
	}(ot ||= {}), function(e) {
		function t(e, t) {
			return {
				range: e,
				text: t
			};
		}
		o(t, "create"), e.create = t;
	}(st ||= {}), function(e) {
		function t(e, t) {
			return {
				triggerKind: e,
				selectedCompletionInfo: t
			};
		}
		o(t, "create"), e.create = t;
	}(ct ||= {}), function(e) {
		function t(e) {
			let t = e;
			return M.objectLiteral(t) && g.is(t.uri) && M.string(t.name);
		}
		o(t, "is"), e.is = t;
	}(lt ||= {}), ut = [
		"\n",
		"\r\n",
		"\r"
	], function(e) {
		function t(e, t, n, r) {
			return new ft(e, t, n, r);
		}
		o(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return !!(M.defined(t) && M.string(t.uri) && (M.undefined(t.languageId) || M.string(t.languageId)) && M.uinteger(t.lineCount) && M.func(t.getText) && M.func(t.positionAt) && M.func(t.offsetAt));
		}
		o(n, "is"), e.is = n;
		function r(e, t) {
			let n = e.getText(), r = i(t, (e, t) => {
				let n = e.range.start.line - t.range.start.line;
				return n === 0 ? e.range.start.character - t.range.start.character : n;
			}), a = n.length;
			for (let t = r.length - 1; t >= 0; t--) {
				let i = r[t], o = e.offsetAt(i.range.start), s = e.offsetAt(i.range.end);
				if (s <= a) n = n.substring(0, o) + i.newText + n.substring(s, n.length);
				else throw Error("Overlapping edit");
				a = o;
			}
			return n;
		}
		o(r, "applyEdits"), e.applyEdits = r;
		function i(e, t) {
			if (e.length <= 1) return e;
			let n = e.length / 2 | 0, r = e.slice(0, n), a = e.slice(n);
			i(r, t), i(a, t);
			let o = 0, s = 0, c = 0;
			for (; o < r.length && s < a.length;) t(r[o], a[s]) <= 0 ? e[c++] = r[o++] : e[c++] = a[s++];
			for (; o < r.length;) e[c++] = r[o++];
			for (; s < a.length;) e[c++] = a[s++];
			return e;
		}
		o(i, "mergeSort");
	}(dt ||= {}), ft = (r = class {
		constructor(e, t, n, r) {
			this._uri = e, this._languageId = t, this._version = n, this._content = r, this._lineOffsets = void 0;
		}
		get uri() {
			return this._uri;
		}
		get languageId() {
			return this._languageId;
		}
		get version() {
			return this._version;
		}
		getText(e) {
			if (e) {
				let t = this.offsetAt(e.start), n = this.offsetAt(e.end);
				return this._content.substring(t, n);
			}
			return this._content;
		}
		update(e, t) {
			this._content = e.text, this._version = t, this._lineOffsets = void 0;
		}
		getLineOffsets() {
			if (this._lineOffsets === void 0) {
				let e = [], t = this._content, n = !0;
				for (let r = 0; r < t.length; r++) {
					n &&= (e.push(r), !1);
					let i = t.charAt(r);
					n = i === "\r" || i === "\n", i === "\r" && r + 1 < t.length && t.charAt(r + 1) === "\n" && r++;
				}
				n && t.length > 0 && e.push(t.length), this._lineOffsets = e;
			}
			return this._lineOffsets;
		}
		positionAt(e) {
			e = Math.max(Math.min(e, this._content.length), 0);
			let t = this.getLineOffsets(), n = 0, r = t.length;
			if (r === 0) return y.create(0, e);
			for (; n < r;) {
				let i = Math.floor((n + r) / 2);
				t[i] > e ? r = i : n = i + 1;
			}
			let i = n - 1;
			return y.create(i, e - t[i]);
		}
		offsetAt(e) {
			let t = this.getLineOffsets();
			if (e.line >= t.length) return this._content.length;
			if (e.line < 0) return 0;
			let n = t[e.line], r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
			return Math.max(Math.min(n + e.character, r), n);
		}
		get lineCount() {
			return this.getLineOffsets().length;
		}
	}, o(r, "FullTextDocument"), r), function(e) {
		let t = Object.prototype.toString;
		function n(e) {
			return typeof e < "u";
		}
		o(n, "defined"), e.defined = n;
		function r(e) {
			return typeof e > "u";
		}
		o(r, "undefined"), e.undefined = r;
		function i(e) {
			return e === !0 || e === !1;
		}
		o(i, "boolean"), e.boolean = i;
		function a(e) {
			return t.call(e) === "[object String]";
		}
		o(a, "string"), e.string = a;
		function s(e) {
			return t.call(e) === "[object Number]";
		}
		o(s, "number"), e.number = s;
		function c(e, n, r) {
			return t.call(e) === "[object Number]" && n <= e && e <= r;
		}
		o(c, "numberRange"), e.numberRange = c;
		function l(e) {
			return t.call(e) === "[object Number]" && -2147483648 <= e && e <= 2147483647;
		}
		o(l, "integer"), e.integer = l;
		function u(e) {
			return t.call(e) === "[object Number]" && 0 <= e && e <= 2147483647;
		}
		o(u, "uinteger"), e.uinteger = u;
		function d(e) {
			return t.call(e) === "[object Function]";
		}
		o(d, "func"), e.func = d;
		function f(e) {
			return typeof e == "object" && !!e;
		}
		o(f, "objectLiteral"), e.objectLiteral = f;
		function p(e, t) {
			return Array.isArray(e) && e.every(t);
		}
		o(p, "typedArray"), e.typedArray = p;
	}(M ||= {});
} }), mt = c({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/ral.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t;
	function n() {
		if (t === void 0) throw Error("No runtime abstraction layer installed");
		return t;
	}
	o(n, "RAL"), function(e) {
		function n(e) {
			if (e === void 0) throw Error("No runtime abstraction layer provided");
			t = e;
		}
		o(n, "install"), e.install = n;
	}(n ||= {}), e.default = n;
} }), ht = c({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/is.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.stringArray = e.array = e.func = e.error = e.number = e.string = e.boolean = void 0;
	function t(e) {
		return e === !0 || e === !1;
	}
	o(t, "boolean"), e.boolean = t;
	function n(e) {
		return typeof e == "string" || e instanceof String;
	}
	o(n, "string"), e.string = n;
	function r(e) {
		return typeof e == "number" || e instanceof Number;
	}
	o(r, "number"), e.number = r;
	function i(e) {
		return e instanceof Error;
	}
	o(i, "error"), e.error = i;
	function a(e) {
		return typeof e == "function";
	}
	o(a, "func"), e.func = a;
	function s(e) {
		return Array.isArray(e);
	}
	o(s, "array"), e.array = s;
	function c(e) {
		return s(e) && e.every((e) => n(e));
	}
	o(c, "stringArray"), e.stringArray = c;
} }), gt = c({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/events.js"(e) {
	var t, n;
	Object.defineProperty(e, "__esModule", { value: !0 }), e.Emitter = e.Event = void 0;
	var r = mt(), i;
	(function(e) {
		let t = { dispose() {} };
		e.None = function() {
			return t;
		};
	})(i || (e.Event = i = {}));
	var a = (t = class {
		add(e, t = null, n) {
			this._callbacks || (this._callbacks = [], this._contexts = []), this._callbacks.push(e), this._contexts.push(t), Array.isArray(n) && n.push({ dispose: /* @__PURE__ */ o(() => this.remove(e, t), "dispose") });
		}
		remove(e, t = null) {
			if (!this._callbacks) return;
			let n = !1;
			for (let r = 0, i = this._callbacks.length; r < i; r++) if (this._callbacks[r] === e) {
				if (this._contexts[r] === t) {
					this._callbacks.splice(r, 1), this._contexts.splice(r, 1);
					return;
				}
				n = !0;
			}
			if (n) throw Error("When adding a listener with a context, you should remove it with the same context");
		}
		invoke(...e) {
			if (!this._callbacks) return [];
			let t = [], n = this._callbacks.slice(0), i = this._contexts.slice(0);
			for (let a = 0, o = n.length; a < o; a++) try {
				t.push(n[a].apply(i[a], e));
			} catch (e) {
				(0, r.default)().console.error(e);
			}
			return t;
		}
		isEmpty() {
			return !this._callbacks || this._callbacks.length === 0;
		}
		dispose() {
			this._callbacks = void 0, this._contexts = void 0;
		}
	}, o(t, "CallbackList"), t), s = (n = class {
		constructor(e) {
			this._options = e;
		}
		get event() {
			return this._event ||= (e, t, r) => {
				this._callbacks ||= new a(), this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty() && this._options.onFirstListenerAdd(this), this._callbacks.add(e, t);
				let i = { dispose: /* @__PURE__ */ o(() => {
					this._callbacks && (this._callbacks.remove(e, t), i.dispose = n._noop, this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty() && this._options.onLastListenerRemove(this));
				}, "dispose") };
				return Array.isArray(r) && r.push(i), i;
			}, this._event;
		}
		fire(e) {
			this._callbacks && this._callbacks.invoke.call(this._callbacks, e);
		}
		dispose() {
			this._callbacks &&= (this._callbacks.dispose(), void 0);
		}
	}, o(n, "Emitter"), n);
	e.Emitter = s, s._noop = function() {};
} }), _t = c({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/cancellation.js"(e) {
	var t, n;
	Object.defineProperty(e, "__esModule", { value: !0 }), e.CancellationTokenSource = e.CancellationToken = void 0;
	var r = mt(), i = ht(), a = gt(), s;
	(function(e) {
		e.None = Object.freeze({
			isCancellationRequested: !1,
			onCancellationRequested: a.Event.None
		}), e.Cancelled = Object.freeze({
			isCancellationRequested: !0,
			onCancellationRequested: a.Event.None
		});
		function t(t) {
			let n = t;
			return n && (n === e.None || n === e.Cancelled || i.boolean(n.isCancellationRequested) && !!n.onCancellationRequested);
		}
		o(t, "is"), e.is = t;
	})(s || (e.CancellationToken = s = {}));
	var c = Object.freeze(function(e, t) {
		let n = (0, r.default)().timer.setTimeout(e.bind(t), 0);
		return { dispose() {
			n.dispose();
		} };
	}), l = (t = class {
		constructor() {
			this._isCancelled = !1;
		}
		cancel() {
			this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this.dispose()));
		}
		get isCancellationRequested() {
			return this._isCancelled;
		}
		get onCancellationRequested() {
			return this._isCancelled ? c : (this._emitter ||= new a.Emitter(), this._emitter.event);
		}
		dispose() {
			this._emitter &&= (this._emitter.dispose(), void 0);
		}
	}, o(t, "MutableToken"), t);
	e.CancellationTokenSource = (n = class {
		get token() {
			return this._token ||= new l(), this._token;
		}
		cancel() {
			this._token ? this._token.cancel() : this._token = s.Cancelled;
		}
		dispose() {
			this._token ? this._token instanceof l && this._token.dispose() : this._token = s.None;
		}
	}, o(n, "CancellationTokenSource"), n);
} }), vt = c({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messages.js"(e) {
	var t, n, r, i, a, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, ee, S, te, C, w;
	Object.defineProperty(e, "__esModule", { value: !0 }), e.Message = e.NotificationType9 = e.NotificationType8 = e.NotificationType7 = e.NotificationType6 = e.NotificationType5 = e.NotificationType4 = e.NotificationType3 = e.NotificationType2 = e.NotificationType1 = e.NotificationType0 = e.NotificationType = e.RequestType9 = e.RequestType8 = e.RequestType7 = e.RequestType6 = e.RequestType5 = e.RequestType4 = e.RequestType3 = e.RequestType2 = e.RequestType1 = e.RequestType = e.RequestType0 = e.AbstractMessageSignature = e.ParameterStructures = e.ResponseError = e.ErrorCodes = void 0;
	var ne = ht(), re;
	(function(e) {
		e.ParseError = -32700, e.InvalidRequest = -32600, e.MethodNotFound = -32601, e.InvalidParams = -32602, e.InternalError = -32603, e.jsonrpcReservedErrorRangeStart = -32099, e.serverErrorStart = -32099, e.MessageWriteError = -32099, e.MessageReadError = -32098, e.PendingResponseRejected = -32097, e.ConnectionInactive = -32096, e.ServerNotInitialized = -32002, e.UnknownErrorCode = -32001, e.jsonrpcReservedErrorRangeEnd = -32e3, e.serverErrorEnd = -32e3;
	})(re || (e.ErrorCodes = re = {})), e.ResponseError = (t = class extends Error {
		constructor(e, n, r) {
			super(n), this.code = ne.number(e) ? e : re.UnknownErrorCode, this.data = r, Object.setPrototypeOf(this, t.prototype);
		}
		toJson() {
			let e = {
				code: this.code,
				message: this.message
			};
			return this.data !== void 0 && (e.data = this.data), e;
		}
	}, o(t, "ResponseError"), t);
	var T = (n = class {
		constructor(e) {
			this.kind = e;
		}
		static is(e) {
			return e === n.auto || e === n.byName || e === n.byPosition;
		}
		toString() {
			return this.kind;
		}
	}, o(n, "ParameterStructures"), n);
	e.ParameterStructures = T, T.auto = new T("auto"), T.byPosition = new T("byPosition"), T.byName = new T("byName");
	var E = (r = class {
		constructor(e, t) {
			this.method = e, this.numberOfParams = t;
		}
		get parameterStructures() {
			return T.auto;
		}
	}, o(r, "AbstractMessageSignature"), r);
	e.AbstractMessageSignature = E, e.RequestType0 = (i = class extends E {
		constructor(e) {
			super(e, 0);
		}
	}, o(i, "RequestType0"), i), e.RequestType = (a = class extends E {
		constructor(e, t = T.auto) {
			super(e, 1), this._parameterStructures = t;
		}
		get parameterStructures() {
			return this._parameterStructures;
		}
	}, o(a, "RequestType"), a), e.RequestType1 = (s = class extends E {
		constructor(e, t = T.auto) {
			super(e, 1), this._parameterStructures = t;
		}
		get parameterStructures() {
			return this._parameterStructures;
		}
	}, o(s, "RequestType1"), s), e.RequestType2 = (c = class extends E {
		constructor(e) {
			super(e, 2);
		}
	}, o(c, "RequestType2"), c), e.RequestType3 = (l = class extends E {
		constructor(e) {
			super(e, 3);
		}
	}, o(l, "RequestType3"), l), e.RequestType4 = (u = class extends E {
		constructor(e) {
			super(e, 4);
		}
	}, o(u, "RequestType4"), u), e.RequestType5 = (d = class extends E {
		constructor(e) {
			super(e, 5);
		}
	}, o(d, "RequestType5"), d), e.RequestType6 = (f = class extends E {
		constructor(e) {
			super(e, 6);
		}
	}, o(f, "RequestType6"), f), e.RequestType7 = (p = class extends E {
		constructor(e) {
			super(e, 7);
		}
	}, o(p, "RequestType7"), p), e.RequestType8 = (m = class extends E {
		constructor(e) {
			super(e, 8);
		}
	}, o(m, "RequestType8"), m), e.RequestType9 = (h = class extends E {
		constructor(e) {
			super(e, 9);
		}
	}, o(h, "RequestType9"), h), e.NotificationType = (g = class extends E {
		constructor(e, t = T.auto) {
			super(e, 1), this._parameterStructures = t;
		}
		get parameterStructures() {
			return this._parameterStructures;
		}
	}, o(g, "NotificationType"), g), e.NotificationType0 = (_ = class extends E {
		constructor(e) {
			super(e, 0);
		}
	}, o(_, "NotificationType0"), _), e.NotificationType1 = (v = class extends E {
		constructor(e, t = T.auto) {
			super(e, 1), this._parameterStructures = t;
		}
		get parameterStructures() {
			return this._parameterStructures;
		}
	}, o(v, "NotificationType1"), v), e.NotificationType2 = (y = class extends E {
		constructor(e) {
			super(e, 2);
		}
	}, o(y, "NotificationType2"), y), e.NotificationType3 = (b = class extends E {
		constructor(e) {
			super(e, 3);
		}
	}, o(b, "NotificationType3"), b), e.NotificationType4 = (x = class extends E {
		constructor(e) {
			super(e, 4);
		}
	}, o(x, "NotificationType4"), x), e.NotificationType5 = (ee = class extends E {
		constructor(e) {
			super(e, 5);
		}
	}, o(ee, "NotificationType5"), ee), e.NotificationType6 = (S = class extends E {
		constructor(e) {
			super(e, 6);
		}
	}, o(S, "NotificationType6"), S), e.NotificationType7 = (te = class extends E {
		constructor(e) {
			super(e, 7);
		}
	}, o(te, "NotificationType7"), te), e.NotificationType8 = (C = class extends E {
		constructor(e) {
			super(e, 8);
		}
	}, o(C, "NotificationType8"), C), e.NotificationType9 = (w = class extends E {
		constructor(e) {
			super(e, 9);
		}
	}, o(w, "NotificationType9"), w);
	var ie;
	(function(e) {
		function t(e) {
			let t = e;
			return t && ne.string(t.method) && (ne.string(t.id) || ne.number(t.id));
		}
		o(t, "isRequest"), e.isRequest = t;
		function n(e) {
			let t = e;
			return t && ne.string(t.method) && e.id === void 0;
		}
		o(n, "isNotification"), e.isNotification = n;
		function r(e) {
			let t = e;
			return t && (t.result !== void 0 || !!t.error) && (ne.string(t.id) || ne.number(t.id) || t.id === null);
		}
		o(r, "isResponse"), e.isResponse = r;
	})(ie || (e.Message = ie = {}));
} }), yt = c({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/linkedMap.js"(e) {
	var t, n, r;
	Object.defineProperty(e, "__esModule", { value: !0 }), e.LRUCache = e.LinkedMap = e.Touch = void 0;
	var i;
	(function(e) {
		e.None = 0, e.First = 1, e.AsOld = e.First, e.Last = 2, e.AsNew = e.Last;
	})(i || (e.Touch = i = {}));
	var a = (t = class {
		constructor() {
			this[r] = "LinkedMap", this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
		}
		clear() {
			this._map.clear(), this._head = void 0, this._tail = void 0, this._size = 0, this._state++;
		}
		isEmpty() {
			return !this._head && !this._tail;
		}
		get size() {
			return this._size;
		}
		get first() {
			return this._head?.value;
		}
		get last() {
			return this._tail?.value;
		}
		has(e) {
			return this._map.has(e);
		}
		get(e, t = i.None) {
			let n = this._map.get(e);
			if (n) return t !== i.None && this.touch(n, t), n.value;
		}
		set(e, t, n = i.None) {
			let r = this._map.get(e);
			if (r) r.value = t, n !== i.None && this.touch(r, n);
			else {
				switch (r = {
					key: e,
					value: t,
					next: void 0,
					previous: void 0
				}, n) {
					case i.None:
						this.addItemLast(r);
						break;
					case i.First:
						this.addItemFirst(r);
						break;
					case i.Last:
						this.addItemLast(r);
						break;
					default: this.addItemLast(r);
				}
				this._map.set(e, r), this._size++;
			}
			return this;
		}
		delete(e) {
			return !!this.remove(e);
		}
		remove(e) {
			let t = this._map.get(e);
			if (t) return this._map.delete(e), this.removeItem(t), this._size--, t.value;
		}
		shift() {
			if (!this._head && !this._tail) return;
			if (!this._head || !this._tail) throw Error("Invalid list");
			let e = this._head;
			return this._map.delete(e.key), this.removeItem(e), this._size--, e.value;
		}
		forEach(e, t) {
			let n = this._state, r = this._head;
			for (; r;) {
				if (t ? e.bind(t)(r.value, r.key, this) : e(r.value, r.key, this), this._state !== n) throw Error("LinkedMap got modified during iteration.");
				r = r.next;
			}
		}
		keys() {
			let e = this._state, t = this._head, n = {
				[Symbol.iterator]: () => n,
				next: /* @__PURE__ */ o(() => {
					if (this._state !== e) throw Error("LinkedMap got modified during iteration.");
					if (t) {
						let e = {
							value: t.key,
							done: !1
						};
						return t = t.next, e;
					}
					return {
						value: void 0,
						done: !0
					};
				}, "next")
			};
			return n;
		}
		values() {
			let e = this._state, t = this._head, n = {
				[Symbol.iterator]: () => n,
				next: /* @__PURE__ */ o(() => {
					if (this._state !== e) throw Error("LinkedMap got modified during iteration.");
					if (t) {
						let e = {
							value: t.value,
							done: !1
						};
						return t = t.next, e;
					}
					return {
						value: void 0,
						done: !0
					};
				}, "next")
			};
			return n;
		}
		entries() {
			let e = this._state, t = this._head, n = {
				[Symbol.iterator]: () => n,
				next: /* @__PURE__ */ o(() => {
					if (this._state !== e) throw Error("LinkedMap got modified during iteration.");
					if (t) {
						let e = {
							value: [t.key, t.value],
							done: !1
						};
						return t = t.next, e;
					}
					return {
						value: void 0,
						done: !0
					};
				}, "next")
			};
			return n;
		}
		[(r = Symbol.toStringTag, Symbol.iterator)]() {
			return this.entries();
		}
		trimOld(e) {
			if (e >= this.size) return;
			if (e === 0) {
				this.clear();
				return;
			}
			let t = this._head, n = this.size;
			for (; t && n > e;) this._map.delete(t.key), t = t.next, n--;
			this._head = t, this._size = n, t && (t.previous = void 0), this._state++;
		}
		addItemFirst(e) {
			if (!this._head && !this._tail) this._tail = e;
			else if (this._head) e.next = this._head, this._head.previous = e;
			else throw Error("Invalid list");
			this._head = e, this._state++;
		}
		addItemLast(e) {
			if (!this._head && !this._tail) this._head = e;
			else if (this._tail) e.previous = this._tail, this._tail.next = e;
			else throw Error("Invalid list");
			this._tail = e, this._state++;
		}
		removeItem(e) {
			if (e === this._head && e === this._tail) this._head = void 0, this._tail = void 0;
			else if (e === this._head) {
				if (!e.next) throw Error("Invalid list");
				e.next.previous = void 0, this._head = e.next;
			} else if (e === this._tail) {
				if (!e.previous) throw Error("Invalid list");
				e.previous.next = void 0, this._tail = e.previous;
			} else {
				let t = e.next, n = e.previous;
				if (!t || !n) throw Error("Invalid list");
				t.previous = n, n.next = t;
			}
			e.next = void 0, e.previous = void 0, this._state++;
		}
		touch(e, t) {
			if (!this._head || !this._tail) throw Error("Invalid list");
			if (t === i.First || t === i.Last) {
				if (t === i.First) {
					if (e === this._head) return;
					let t = e.next, n = e.previous;
					e === this._tail ? (n.next = void 0, this._tail = n) : (t.previous = n, n.next = t), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++;
				} else if (t === i.Last) {
					if (e === this._tail) return;
					let t = e.next, n = e.previous;
					e === this._head ? (t.previous = void 0, this._head = t) : (t.previous = n, n.next = t), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e, this._state++;
				}
			}
		}
		toJSON() {
			let e = [];
			return this.forEach((t, n) => {
				e.push([n, t]);
			}), e;
		}
		fromJSON(e) {
			this.clear();
			for (let [t, n] of e) this.set(t, n);
		}
	}, o(t, "LinkedMap"), t);
	e.LinkedMap = a, e.LRUCache = (n = class extends a {
		constructor(e, t = 1) {
			super(), this._limit = e, this._ratio = Math.min(Math.max(0, t), 1);
		}
		get limit() {
			return this._limit;
		}
		set limit(e) {
			this._limit = e, this.checkTrim();
		}
		get ratio() {
			return this._ratio;
		}
		set ratio(e) {
			this._ratio = Math.min(Math.max(0, e), 1), this.checkTrim();
		}
		get(e, t = i.AsNew) {
			return super.get(e, t);
		}
		peek(e) {
			return super.get(e, i.None);
		}
		set(e, t) {
			return super.set(e, t, i.Last), this.checkTrim(), this;
		}
		checkTrim() {
			this.size > this._limit && this.trimOld(Math.round(this._limit * this._ratio));
		}
	}, o(n, "LRUCache"), n);
} }), bt = c({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/disposable.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.Disposable = void 0;
	var t;
	(function(e) {
		function t(e) {
			return { dispose: e };
		}
		o(t, "create"), e.create = t;
	})(t || (e.Disposable = t = {}));
} }), xt = c({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js"(e) {
	var t, n, r, i;
	Object.defineProperty(e, "__esModule", { value: !0 }), e.SharedArrayReceiverStrategy = e.SharedArraySenderStrategy = void 0;
	var a = _t(), s;
	(function(e) {
		e.Continue = 0, e.Cancelled = 1;
	})(s ||= {}), e.SharedArraySenderStrategy = (t = class {
		constructor() {
			this.buffers = /* @__PURE__ */ new Map();
		}
		enableCancellation(e) {
			if (e.id === null) return;
			let t = new SharedArrayBuffer(4), n = new Int32Array(t, 0, 1);
			n[0] = s.Continue, this.buffers.set(e.id, t), e.$cancellationData = t;
		}
		async sendCancellation(e, t) {
			let n = this.buffers.get(t);
			if (n === void 0) return;
			let r = new Int32Array(n, 0, 1);
			Atomics.store(r, 0, s.Cancelled);
		}
		cleanup(e) {
			this.buffers.delete(e);
		}
		dispose() {
			this.buffers.clear();
		}
	}, o(t, "SharedArraySenderStrategy"), t);
	var c = (n = class {
		constructor(e) {
			this.data = new Int32Array(e, 0, 1);
		}
		get isCancellationRequested() {
			return Atomics.load(this.data, 0) === s.Cancelled;
		}
		get onCancellationRequested() {
			throw Error("Cancellation over SharedArrayBuffer doesn't support cancellation events");
		}
	}, o(n, "SharedArrayBufferCancellationToken"), n), l = (r = class {
		constructor(e) {
			this.token = new c(e);
		}
		cancel() {}
		dispose() {}
	}, o(r, "SharedArrayBufferCancellationTokenSource"), r);
	e.SharedArrayReceiverStrategy = (i = class {
		constructor() {
			this.kind = "request";
		}
		createCancellationTokenSource(e) {
			let t = e.$cancellationData;
			return t === void 0 ? new a.CancellationTokenSource() : new l(t);
		}
	}, o(i, "SharedArrayReceiverStrategy"), i);
} }), St = c({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/semaphore.js"(e) {
	var t;
	Object.defineProperty(e, "__esModule", { value: !0 }), e.Semaphore = void 0;
	var n = mt();
	e.Semaphore = (t = class {
		constructor(e = 1) {
			if (e <= 0) throw Error("Capacity must be greater than 0");
			this._capacity = e, this._active = 0, this._waiting = [];
		}
		lock(e) {
			return new Promise((t, n) => {
				this._waiting.push({
					thunk: e,
					resolve: t,
					reject: n
				}), this.runNext();
			});
		}
		get active() {
			return this._active;
		}
		runNext() {
			this._waiting.length === 0 || this._active === this._capacity || (0, n.default)().timer.setImmediate(() => this.doRunNext());
		}
		doRunNext() {
			if (this._waiting.length === 0 || this._active === this._capacity) return;
			let e = this._waiting.shift();
			if (this._active++, this._active > this._capacity) throw Error("To many thunks active");
			try {
				let t = e.thunk();
				t instanceof Promise ? t.then((t) => {
					this._active--, e.resolve(t), this.runNext();
				}, (t) => {
					this._active--, e.reject(t), this.runNext();
				}) : (this._active--, e.resolve(t), this.runNext());
			} catch (t) {
				this._active--, e.reject(t), this.runNext();
			}
		}
	}, o(t, "Semaphore"), t);
} }), Ct = c({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messageReader.js"(e) {
	var t, n;
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ReadableStreamMessageReader = e.AbstractMessageReader = e.MessageReader = void 0;
	var r = mt(), i = ht(), a = gt(), s = St(), c;
	(function(e) {
		function t(e) {
			let t = e;
			return t && i.func(t.listen) && i.func(t.dispose) && i.func(t.onError) && i.func(t.onClose) && i.func(t.onPartialMessage);
		}
		o(t, "is"), e.is = t;
	})(c || (e.MessageReader = c = {}));
	var l = (t = class {
		constructor() {
			this.errorEmitter = new a.Emitter(), this.closeEmitter = new a.Emitter(), this.partialMessageEmitter = new a.Emitter();
		}
		dispose() {
			this.errorEmitter.dispose(), this.closeEmitter.dispose();
		}
		get onError() {
			return this.errorEmitter.event;
		}
		fireError(e) {
			this.errorEmitter.fire(this.asError(e));
		}
		get onClose() {
			return this.closeEmitter.event;
		}
		fireClose() {
			this.closeEmitter.fire(void 0);
		}
		get onPartialMessage() {
			return this.partialMessageEmitter.event;
		}
		firePartialMessage(e) {
			this.partialMessageEmitter.fire(e);
		}
		asError(e) {
			return e instanceof Error ? e : /* @__PURE__ */ Error(`Reader received error. Reason: ${i.string(e.message) ? e.message : "unknown"}`);
		}
	}, o(t, "AbstractMessageReader"), t);
	e.AbstractMessageReader = l;
	var u;
	(function(e) {
		function t(e) {
			let t, n, i = /* @__PURE__ */ new Map(), a, o = /* @__PURE__ */ new Map();
			if (e === void 0 || typeof e == "string") t = e ?? "utf-8";
			else {
				if (t = e.charset ?? "utf-8", e.contentDecoder !== void 0 && (n = e.contentDecoder, i.set(n.name, n)), e.contentDecoders !== void 0) for (let t of e.contentDecoders) i.set(t.name, t);
				if (e.contentTypeDecoder !== void 0 && (a = e.contentTypeDecoder, o.set(a.name, a)), e.contentTypeDecoders !== void 0) for (let t of e.contentTypeDecoders) o.set(t.name, t);
			}
			return a === void 0 && (a = (0, r.default)().applicationJson.decoder, o.set(a.name, a)), {
				charset: t,
				contentDecoder: n,
				contentDecoders: i,
				contentTypeDecoder: a,
				contentTypeDecoders: o
			};
		}
		o(t, "fromOptions"), e.fromOptions = t;
	})(u ||= {}), e.ReadableStreamMessageReader = (n = class extends l {
		constructor(e, t) {
			super(), this.readable = e, this.options = u.fromOptions(t), this.buffer = (0, r.default)().messageBuffer.create(this.options.charset), this._partialMessageTimeout = 1e4, this.nextMessageLength = -1, this.messageToken = 0, this.readSemaphore = new s.Semaphore(1);
		}
		set partialMessageTimeout(e) {
			this._partialMessageTimeout = e;
		}
		get partialMessageTimeout() {
			return this._partialMessageTimeout;
		}
		listen(e) {
			this.nextMessageLength = -1, this.messageToken = 0, this.partialMessageTimer = void 0, this.callback = e;
			let t = this.readable.onData((e) => {
				this.onData(e);
			});
			return this.readable.onError((e) => this.fireError(e)), this.readable.onClose(() => this.fireClose()), t;
		}
		onData(e) {
			try {
				for (this.buffer.append(e);;) {
					if (this.nextMessageLength === -1) {
						let e = this.buffer.tryReadHeaders(!0);
						if (!e) return;
						let t = e.get("content-length");
						if (!t) {
							this.fireError(/* @__PURE__ */ Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(e))}`));
							return;
						}
						let n = parseInt(t);
						if (isNaN(n)) {
							this.fireError(/* @__PURE__ */ Error(`Content-Length value must be a number. Got ${t}`));
							return;
						}
						this.nextMessageLength = n;
					}
					let e = this.buffer.tryReadBody(this.nextMessageLength);
					if (e === void 0) {
						this.setPartialMessageTimer();
						return;
					}
					this.clearPartialMessageTimer(), this.nextMessageLength = -1, this.readSemaphore.lock(async () => {
						let t = this.options.contentDecoder === void 0 ? e : await this.options.contentDecoder.decode(e), n = await this.options.contentTypeDecoder.decode(t, this.options);
						this.callback(n);
					}).catch((e) => {
						this.fireError(e);
					});
				}
			} catch (e) {
				this.fireError(e);
			}
		}
		clearPartialMessageTimer() {
			this.partialMessageTimer &&= (this.partialMessageTimer.dispose(), void 0);
		}
		setPartialMessageTimer() {
			this.clearPartialMessageTimer(), !(this._partialMessageTimeout <= 0) && (this.partialMessageTimer = (0, r.default)().timer.setTimeout((e, t) => {
				this.partialMessageTimer = void 0, e === this.messageToken && (this.firePartialMessage({
					messageToken: e,
					waitingTime: t
				}), this.setPartialMessageTimer());
			}, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout));
		}
	}, o(n, "ReadableStreamMessageReader"), n);
} }), wt = c({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messageWriter.js"(e) {
	var t, n;
	Object.defineProperty(e, "__esModule", { value: !0 }), e.WriteableStreamMessageWriter = e.AbstractMessageWriter = e.MessageWriter = void 0;
	var r = mt(), i = ht(), a = St(), s = gt(), c = "Content-Length: ", l = "\r\n", u;
	(function(e) {
		function t(e) {
			let t = e;
			return t && i.func(t.dispose) && i.func(t.onClose) && i.func(t.onError) && i.func(t.write);
		}
		o(t, "is"), e.is = t;
	})(u || (e.MessageWriter = u = {}));
	var d = (t = class {
		constructor() {
			this.errorEmitter = new s.Emitter(), this.closeEmitter = new s.Emitter();
		}
		dispose() {
			this.errorEmitter.dispose(), this.closeEmitter.dispose();
		}
		get onError() {
			return this.errorEmitter.event;
		}
		fireError(e, t, n) {
			this.errorEmitter.fire([
				this.asError(e),
				t,
				n
			]);
		}
		get onClose() {
			return this.closeEmitter.event;
		}
		fireClose() {
			this.closeEmitter.fire(void 0);
		}
		asError(e) {
			return e instanceof Error ? e : /* @__PURE__ */ Error(`Writer received error. Reason: ${i.string(e.message) ? e.message : "unknown"}`);
		}
	}, o(t, "AbstractMessageWriter"), t);
	e.AbstractMessageWriter = d;
	var f;
	(function(e) {
		function t(e) {
			return e === void 0 || typeof e == "string" ? {
				charset: e ?? "utf-8",
				contentTypeEncoder: (0, r.default)().applicationJson.encoder
			} : {
				charset: e.charset ?? "utf-8",
				contentEncoder: e.contentEncoder,
				contentTypeEncoder: e.contentTypeEncoder ?? (0, r.default)().applicationJson.encoder
			};
		}
		o(t, "fromOptions"), e.fromOptions = t;
	})(f ||= {}), e.WriteableStreamMessageWriter = (n = class extends d {
		constructor(e, t) {
			super(), this.writable = e, this.options = f.fromOptions(t), this.errorCount = 0, this.writeSemaphore = new a.Semaphore(1), this.writable.onError((e) => this.fireError(e)), this.writable.onClose(() => this.fireClose());
		}
		async write(e) {
			return this.writeSemaphore.lock(async () => this.options.contentTypeEncoder.encode(e, this.options).then((e) => this.options.contentEncoder === void 0 ? e : this.options.contentEncoder.encode(e)).then((t) => {
				let n = [];
				return n.push(c, t.byteLength.toString(), l), n.push(l), this.doWrite(e, n, t);
			}, (e) => {
				throw this.fireError(e), e;
			}));
		}
		async doWrite(e, t, n) {
			try {
				return await this.writable.write(t.join(""), "ascii"), this.writable.write(n);
			} catch (t) {
				return this.handleError(t, e), Promise.reject(t);
			}
		}
		handleError(e, t) {
			this.errorCount++, this.fireError(e, t, this.errorCount);
		}
		end() {
			this.writable.end();
		}
	}, o(n, "WriteableStreamMessageWriter"), n);
} }), Tt = c({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messageBuffer.js"(e) {
	var t;
	Object.defineProperty(e, "__esModule", { value: !0 }), e.AbstractMessageBuffer = void 0;
	var n = 13, r = 10, i = "\r\n";
	e.AbstractMessageBuffer = (t = class {
		constructor(e = "utf-8") {
			this._encoding = e, this._chunks = [], this._totalLength = 0;
		}
		get encoding() {
			return this._encoding;
		}
		append(e) {
			let t = typeof e == "string" ? this.fromString(e, this._encoding) : e;
			this._chunks.push(t), this._totalLength += t.byteLength;
		}
		tryReadHeaders(e = !1) {
			if (this._chunks.length === 0) return;
			let t = 0, a = 0, o = 0, s = 0;
			e: for (; a < this._chunks.length;) {
				let e = this._chunks[a];
				for (o = 0; o < e.length;) {
					switch (e[o]) {
						case n:
							switch (t) {
								case 0:
									t = 1;
									break;
								case 2:
									t = 3;
									break;
								default: t = 0;
							}
							break;
						case r:
							switch (t) {
								case 1:
									t = 2;
									break;
								case 3:
									t = 4, o++;
									break e;
								default: t = 0;
							}
							break;
						default: t = 0;
					}
					o++;
				}
				s += e.byteLength, a++;
			}
			if (t !== 4) return;
			let c = this._read(s + o), l = /* @__PURE__ */ new Map(), u = this.toString(c, "ascii").split(i);
			if (u.length < 2) return l;
			for (let t = 0; t < u.length - 2; t++) {
				let n = u[t], r = n.indexOf(":");
				if (r === -1) throw Error(`Message header must separate key and value using ':'
${n}`);
				let i = n.substr(0, r), a = n.substr(r + 1).trim();
				l.set(e ? i.toLowerCase() : i, a);
			}
			return l;
		}
		tryReadBody(e) {
			if (!(this._totalLength < e)) return this._read(e);
		}
		get numberOfBytes() {
			return this._totalLength;
		}
		_read(e) {
			if (e === 0) return this.emptyBuffer();
			if (e > this._totalLength) throw Error("Cannot read so many bytes!");
			if (this._chunks[0].byteLength === e) {
				let t = this._chunks[0];
				return this._chunks.shift(), this._totalLength -= e, this.asNative(t);
			}
			if (this._chunks[0].byteLength > e) {
				let t = this._chunks[0], n = this.asNative(t, e);
				return this._chunks[0] = t.slice(e), this._totalLength -= e, n;
			}
			let t = this.allocNative(e), n = 0;
			for (; e > 0;) {
				let r = this._chunks[0];
				if (r.byteLength > e) {
					let i = r.slice(0, e);
					t.set(i, n), n += e, this._chunks[0] = r.slice(e), this._totalLength -= e, e -= e;
				} else t.set(r, n), n += r.byteLength, this._chunks.shift(), this._totalLength -= r.byteLength, e -= r.byteLength;
			}
			return t;
		}
	}, o(t, "AbstractMessageBuffer"), t);
} }), Et = c({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/connection.js"(e) {
	var t, n;
	Object.defineProperty(e, "__esModule", { value: !0 }), e.createMessageConnection = e.ConnectionOptions = e.MessageStrategy = e.CancellationStrategy = e.CancellationSenderStrategy = e.CancellationReceiverStrategy = e.RequestCancellationReceiverStrategy = e.IdCancellationReceiverStrategy = e.ConnectionStrategy = e.ConnectionError = e.ConnectionErrors = e.LogTraceNotification = e.SetTraceNotification = e.TraceFormat = e.TraceValues = e.Trace = e.NullLogger = e.ProgressType = e.ProgressToken = void 0;
	var r = mt(), i = ht(), a = vt(), s = yt(), c = gt(), l = _t(), u;
	(function(e) {
		e.type = new a.NotificationType("$/cancelRequest");
	})(u ||= {});
	var d;
	(function(e) {
		function t(e) {
			return typeof e == "string" || typeof e == "number";
		}
		o(t, "is"), e.is = t;
	})(d || (e.ProgressToken = d = {}));
	var f;
	(function(e) {
		e.type = new a.NotificationType("$/progress");
	})(f ||= {}), e.ProgressType = (t = class {
		constructor() {}
	}, o(t, "ProgressType"), t);
	var p;
	(function(e) {
		function t(e) {
			return i.func(e);
		}
		o(t, "is"), e.is = t;
	})(p ||= {}), e.NullLogger = Object.freeze({
		error: /* @__PURE__ */ o(() => {}, "error"),
		warn: /* @__PURE__ */ o(() => {}, "warn"),
		info: /* @__PURE__ */ o(() => {}, "info"),
		log: /* @__PURE__ */ o(() => {}, "log")
	});
	var m;
	(function(e) {
		e[e.Off = 0] = "Off", e[e.Messages = 1] = "Messages", e[e.Compact = 2] = "Compact", e[e.Verbose = 3] = "Verbose";
	})(m || (e.Trace = m = {}));
	var h;
	(function(e) {
		e.Off = "off", e.Messages = "messages", e.Compact = "compact", e.Verbose = "verbose";
	})(h || (e.TraceValues = h = {})), function(e) {
		function t(t) {
			if (!i.string(t)) return e.Off;
			switch (t = t.toLowerCase(), t) {
				case "off": return e.Off;
				case "messages": return e.Messages;
				case "compact": return e.Compact;
				case "verbose": return e.Verbose;
				default: return e.Off;
			}
		}
		o(t, "fromString"), e.fromString = t;
		function n(t) {
			switch (t) {
				case e.Off: return "off";
				case e.Messages: return "messages";
				case e.Compact: return "compact";
				case e.Verbose: return "verbose";
				default: return "off";
			}
		}
		o(n, "toString"), e.toString = n;
	}(m || (e.Trace = m = {}));
	var g;
	(function(e) {
		e.Text = "text", e.JSON = "json";
	})(g || (e.TraceFormat = g = {})), function(e) {
		function t(t) {
			return i.string(t) ? (t = t.toLowerCase(), t === "json" ? e.JSON : e.Text) : e.Text;
		}
		o(t, "fromString"), e.fromString = t;
	}(g || (e.TraceFormat = g = {}));
	var _;
	(function(e) {
		e.type = new a.NotificationType("$/setTrace");
	})(_ || (e.SetTraceNotification = _ = {}));
	var v;
	(function(e) {
		e.type = new a.NotificationType("$/logTrace");
	})(v || (e.LogTraceNotification = v = {}));
	var y;
	(function(e) {
		e[e.Closed = 1] = "Closed", e[e.Disposed = 2] = "Disposed", e[e.AlreadyListening = 3] = "AlreadyListening";
	})(y || (e.ConnectionErrors = y = {}));
	var b = (n = class extends Error {
		constructor(e, t) {
			super(t), this.code = e, Object.setPrototypeOf(this, n.prototype);
		}
	}, o(n, "ConnectionError"), n);
	e.ConnectionError = b;
	var x;
	(function(e) {
		function t(e) {
			let t = e;
			return t && i.func(t.cancelUndispatched);
		}
		o(t, "is"), e.is = t;
	})(x || (e.ConnectionStrategy = x = {}));
	var ee;
	(function(e) {
		function t(e) {
			let t = e;
			return t && (t.kind === void 0 || t.kind === "id") && i.func(t.createCancellationTokenSource) && (t.dispose === void 0 || i.func(t.dispose));
		}
		o(t, "is"), e.is = t;
	})(ee || (e.IdCancellationReceiverStrategy = ee = {}));
	var S;
	(function(e) {
		function t(e) {
			let t = e;
			return t && t.kind === "request" && i.func(t.createCancellationTokenSource) && (t.dispose === void 0 || i.func(t.dispose));
		}
		o(t, "is"), e.is = t;
	})(S || (e.RequestCancellationReceiverStrategy = S = {}));
	var te;
	(function(e) {
		e.Message = Object.freeze({ createCancellationTokenSource(e) {
			return new l.CancellationTokenSource();
		} });
		function t(e) {
			return ee.is(e) || S.is(e);
		}
		o(t, "is"), e.is = t;
	})(te || (e.CancellationReceiverStrategy = te = {}));
	var C;
	(function(e) {
		e.Message = Object.freeze({
			sendCancellation(e, t) {
				return e.sendNotification(u.type, { id: t });
			},
			cleanup(e) {}
		});
		function t(e) {
			let t = e;
			return t && i.func(t.sendCancellation) && i.func(t.cleanup);
		}
		o(t, "is"), e.is = t;
	})(C || (e.CancellationSenderStrategy = C = {}));
	var w;
	(function(e) {
		e.Message = Object.freeze({
			receiver: te.Message,
			sender: C.Message
		});
		function t(e) {
			let t = e;
			return t && te.is(t.receiver) && C.is(t.sender);
		}
		o(t, "is"), e.is = t;
	})(w || (e.CancellationStrategy = w = {}));
	var ne;
	(function(e) {
		function t(e) {
			let t = e;
			return t && i.func(t.handleMessage);
		}
		o(t, "is"), e.is = t;
	})(ne || (e.MessageStrategy = ne = {}));
	var re;
	(function(e) {
		function t(e) {
			let t = e;
			return t && (w.is(t.cancellationStrategy) || x.is(t.connectionStrategy) || ne.is(t.messageStrategy));
		}
		o(t, "is"), e.is = t;
	})(re || (e.ConnectionOptions = re = {}));
	var T;
	(function(e) {
		e[e.New = 1] = "New", e[e.Listening = 2] = "Listening", e[e.Closed = 3] = "Closed", e[e.Disposed = 4] = "Disposed";
	})(T ||= {});
	function E(t, n, h, x) {
		let S = h === void 0 ? e.NullLogger : h, te = 0, C = 0, re = 0, E, ie = /* @__PURE__ */ new Map(), ae, oe = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), ce, D = new s.LinkedMap(), O = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Set(), le = /* @__PURE__ */ new Map(), A = m.Off, ue = g.Text, j, de = T.New, fe = new c.Emitter(), pe = new c.Emitter(), me = new c.Emitter(), he = new c.Emitter(), ge = new c.Emitter(), _e = x && x.cancellationStrategy ? x.cancellationStrategy : w.Message;
		function ve(e) {
			if (e === null) throw Error("Can't send requests with id null since the response can't be correlated.");
			return "req-" + e.toString();
		}
		o(ve, "createRequestQueueKey");
		function ye(e) {
			return e === null ? "res-unknown-" + (++re).toString() : "res-" + e.toString();
		}
		o(ye, "createResponseQueueKey");
		function be() {
			return "not-" + (++C).toString();
		}
		o(be, "createNotificationQueueKey");
		function xe(e, t) {
			a.Message.isRequest(t) ? e.set(ve(t.id), t) : a.Message.isResponse(t) ? e.set(ye(t.id), t) : e.set(be(), t);
		}
		o(xe, "addMessageToQueue");
		function Se(e) {}
		o(Se, "cancelUndispatched");
		function Ce() {
			return de === T.Listening;
		}
		o(Ce, "isListening");
		function we() {
			return de === T.Closed;
		}
		o(we, "isClosed");
		function Te() {
			return de === T.Disposed;
		}
		o(Te, "isDisposed");
		function Ee() {
			(de === T.New || de === T.Listening) && (de = T.Closed, pe.fire(void 0));
		}
		o(Ee, "closeHandler");
		function De(e) {
			fe.fire([
				e,
				void 0,
				void 0
			]);
		}
		o(De, "readErrorHandler");
		function Oe(e) {
			fe.fire(e);
		}
		o(Oe, "writeErrorHandler"), t.onClose(Ee), t.onError(De), n.onClose(Ee), n.onError(Oe);
		function ke() {
			ce || D.size === 0 || (ce = (0, r.default)().timer.setImmediate(() => {
				ce = void 0, je();
			}));
		}
		o(ke, "triggerMessageQueue");
		function Ae(e) {
			a.Message.isRequest(e) ? Ne(e) : a.Message.isNotification(e) ? Fe(e) : a.Message.isResponse(e) ? Pe(e) : Ie(e);
		}
		o(Ae, "handleMessage");
		function je() {
			if (D.size === 0) return;
			let e = D.shift();
			try {
				let t = x?.messageStrategy;
				ne.is(t) ? t.handleMessage(e, Ae) : Ae(e);
			} finally {
				ke();
			}
		}
		o(je, "processMessageQueue");
		let Me = /* @__PURE__ */ o((e) => {
			try {
				if (a.Message.isNotification(e) && e.method === u.type.method) {
					let t = e.params.id, r = ve(t), i = D.get(r);
					if (a.Message.isRequest(i)) {
						let a = x?.connectionStrategy, o = a && a.cancelUndispatched ? a.cancelUndispatched(i, Se) : void 0;
						if (o && (o.error !== void 0 || o.result !== void 0)) {
							D.delete(r), le.delete(t), o.id = i.id, Be(o, e.method, Date.now()), n.write(o).catch(() => S.error("Sending response for canceled message failed."));
							return;
						}
					}
					let o = le.get(t);
					if (o !== void 0) {
						o.cancel(), He(e);
						return;
					}
					k.add(t);
				}
				xe(D, e);
			} finally {
				ke();
			}
		}, "callback");
		function Ne(e) {
			if (Te()) return;
			function t(t, r, i) {
				let o = {
					jsonrpc: "2.0",
					id: e.id
				};
				t instanceof a.ResponseError ? o.error = t.toJson() : o.result = t === void 0 ? null : t, Be(o, r, i), n.write(o).catch(() => S.error("Sending response failed."));
			}
			o(t, "reply");
			function r(t, r, i) {
				let a = {
					jsonrpc: "2.0",
					id: e.id,
					error: t.toJson()
				};
				Be(a, r, i), n.write(a).catch(() => S.error("Sending response failed."));
			}
			o(r, "replyError");
			function s(t, r, i) {
				t === void 0 && (t = null);
				let a = {
					jsonrpc: "2.0",
					id: e.id,
					result: t
				};
				Be(a, r, i), n.write(a).catch(() => S.error("Sending response failed."));
			}
			o(s, "replySuccess"), Ve(e);
			let c = ie.get(e.method), l, u;
			c && (l = c.type, u = c.handler);
			let d = Date.now();
			if (u || E) {
				let n = e.id ?? String(Date.now()), o = ee.is(_e.receiver) ? _e.receiver.createCancellationTokenSource(n) : _e.receiver.createCancellationTokenSource(e);
				e.id !== null && k.has(e.id) && o.cancel(), e.id !== null && le.set(n, o);
				try {
					let c;
					if (u) {
						if (e.params === void 0) {
							if (l !== void 0 && l.numberOfParams !== 0) {
								r(new a.ResponseError(a.ErrorCodes.InvalidParams, `Request ${e.method} defines ${l.numberOfParams} params but received none.`), e.method, d);
								return;
							}
							c = u(o.token);
						} else if (Array.isArray(e.params)) {
							if (l !== void 0 && l.parameterStructures === a.ParameterStructures.byName) {
								r(new a.ResponseError(a.ErrorCodes.InvalidParams, `Request ${e.method} defines parameters by name but received parameters by position`), e.method, d);
								return;
							}
							c = u(...e.params, o.token);
						} else {
							if (l !== void 0 && l.parameterStructures === a.ParameterStructures.byPosition) {
								r(new a.ResponseError(a.ErrorCodes.InvalidParams, `Request ${e.method} defines parameters by position but received parameters by name`), e.method, d);
								return;
							}
							c = u(e.params, o.token);
						}
					} else E && (c = E(e.method, e.params, o.token));
					let f = c;
					c ? f.then ? f.then((r) => {
						le.delete(n), t(r, e.method, d);
					}, (t) => {
						le.delete(n), t instanceof a.ResponseError ? r(t, e.method, d) : t && i.string(t.message) ? r(new a.ResponseError(a.ErrorCodes.InternalError, `Request ${e.method} failed with message: ${t.message}`), e.method, d) : r(new a.ResponseError(a.ErrorCodes.InternalError, `Request ${e.method} failed unexpectedly without providing any details.`), e.method, d);
					}) : (le.delete(n), t(c, e.method, d)) : (le.delete(n), s(c, e.method, d));
				} catch (o) {
					le.delete(n), o instanceof a.ResponseError ? t(o, e.method, d) : o && i.string(o.message) ? r(new a.ResponseError(a.ErrorCodes.InternalError, `Request ${e.method} failed with message: ${o.message}`), e.method, d) : r(new a.ResponseError(a.ErrorCodes.InternalError, `Request ${e.method} failed unexpectedly without providing any details.`), e.method, d);
				}
			} else r(new a.ResponseError(a.ErrorCodes.MethodNotFound, `Unhandled method ${e.method}`), e.method, d);
		}
		o(Ne, "handleRequest");
		function Pe(e) {
			if (!Te()) {
				if (e.id === null) e.error ? S.error(`Received response message without id: Error is: 
${JSON.stringify(e.error, void 0, 4)}`) : S.error("Received response message without id. No further error information provided.");
				else {
					let t = e.id, n = O.get(t);
					if (Ue(e, n), n !== void 0) {
						O.delete(t);
						try {
							if (e.error) {
								let t = e.error;
								n.reject(new a.ResponseError(t.code, t.message, t.data));
							} else if (e.result !== void 0) n.resolve(e.result);
							else throw Error("Should never happen.");
						} catch (e) {
							e.message ? S.error(`Response handler '${n.method}' failed with message: ${e.message}`) : S.error(`Response handler '${n.method}' failed unexpectedly.`);
						}
					}
				}
			}
		}
		o(Pe, "handleResponse");
		function Fe(e) {
			if (Te()) return;
			let t, n;
			if (e.method === u.type.method) {
				let t = e.params.id;
				k.delete(t), He(e);
				return;
			}
			{
				let r = oe.get(e.method);
				r && (n = r.handler, t = r.type);
			}
			if (n || ae) try {
				if (He(e), n) {
					if (e.params === void 0) t !== void 0 && t.numberOfParams !== 0 && t.parameterStructures !== a.ParameterStructures.byName && S.error(`Notification ${e.method} defines ${t.numberOfParams} params but received none.`), n();
					else if (Array.isArray(e.params)) {
						let r = e.params;
						e.method === f.type.method && r.length === 2 && d.is(r[0]) ? n({
							token: r[0],
							value: r[1]
						}) : (t !== void 0 && (t.parameterStructures === a.ParameterStructures.byName && S.error(`Notification ${e.method} defines parameters by name but received parameters by position`), t.numberOfParams !== e.params.length && S.error(`Notification ${e.method} defines ${t.numberOfParams} params but received ${r.length} arguments`)), n(...r));
					} else t !== void 0 && t.parameterStructures === a.ParameterStructures.byPosition && S.error(`Notification ${e.method} defines parameters by position but received parameters by name`), n(e.params);
				} else ae && ae(e.method, e.params);
			} catch (t) {
				t.message ? S.error(`Notification handler '${e.method}' failed with message: ${t.message}`) : S.error(`Notification handler '${e.method}' failed unexpectedly.`);
			}
			else me.fire(e);
		}
		o(Fe, "handleNotification");
		function Ie(e) {
			if (!e) {
				S.error("Received empty message.");
				return;
			}
			S.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(e, null, 4)}`);
			let t = e;
			if (i.string(t.id) || i.number(t.id)) {
				let e = t.id, n = O.get(e);
				n && n.reject(/* @__PURE__ */ Error("The received response has neither a result nor an error property."));
			}
		}
		o(Ie, "handleInvalidMessage");
		function Le(e) {
			if (e != null) switch (A) {
				case m.Verbose: return JSON.stringify(e, null, 4);
				case m.Compact: return JSON.stringify(e);
				default: return;
			}
		}
		o(Le, "stringifyTrace");
		function Re(e) {
			if (!(A === m.Off || !j)) {
				if (ue === g.Text) {
					let t;
					(A === m.Verbose || A === m.Compact) && e.params && (t = `Params: ${Le(e.params)}

`), j.log(`Sending request '${e.method} - (${e.id})'.`, t);
				} else We("send-request", e);
			}
		}
		o(Re, "traceSendingRequest");
		function ze(e) {
			if (!(A === m.Off || !j)) {
				if (ue === g.Text) {
					let t;
					(A === m.Verbose || A === m.Compact) && (t = e.params ? `Params: ${Le(e.params)}

` : "No parameters provided.\n\n"), j.log(`Sending notification '${e.method}'.`, t);
				} else We("send-notification", e);
			}
		}
		o(ze, "traceSendingNotification");
		function Be(e, t, n) {
			if (!(A === m.Off || !j)) {
				if (ue === g.Text) {
					let r;
					(A === m.Verbose || A === m.Compact) && (e.error && e.error.data ? r = `Error data: ${Le(e.error.data)}

` : e.result ? r = `Result: ${Le(e.result)}

` : e.error === void 0 && (r = "No result returned.\n\n")), j.log(`Sending response '${t} - (${e.id})'. Processing request took ${Date.now() - n}ms`, r);
				} else We("send-response", e);
			}
		}
		o(Be, "traceSendingResponse");
		function Ve(e) {
			if (!(A === m.Off || !j)) {
				if (ue === g.Text) {
					let t;
					(A === m.Verbose || A === m.Compact) && e.params && (t = `Params: ${Le(e.params)}

`), j.log(`Received request '${e.method} - (${e.id})'.`, t);
				} else We("receive-request", e);
			}
		}
		o(Ve, "traceReceivedRequest");
		function He(e) {
			if (!(A === m.Off || !j || e.method === v.type.method)) {
				if (ue === g.Text) {
					let t;
					(A === m.Verbose || A === m.Compact) && (t = e.params ? `Params: ${Le(e.params)}

` : "No parameters provided.\n\n"), j.log(`Received notification '${e.method}'.`, t);
				} else We("receive-notification", e);
			}
		}
		o(He, "traceReceivedNotification");
		function Ue(e, t) {
			if (!(A === m.Off || !j)) {
				if (ue === g.Text) {
					let n;
					if ((A === m.Verbose || A === m.Compact) && (e.error && e.error.data ? n = `Error data: ${Le(e.error.data)}

` : e.result ? n = `Result: ${Le(e.result)}

` : e.error === void 0 && (n = "No result returned.\n\n")), t) {
						let r = e.error ? ` Request failed: ${e.error.message} (${e.error.code}).` : "";
						j.log(`Received response '${t.method} - (${e.id})' in ${Date.now() - t.timerStart}ms.${r}`, n);
					} else j.log(`Received response ${e.id} without active response promise.`, n);
				} else We("receive-response", e);
			}
		}
		o(Ue, "traceReceivedResponse");
		function We(e, t) {
			if (!j || A === m.Off) return;
			let n = {
				isLSPMessage: !0,
				type: e,
				message: t,
				timestamp: Date.now()
			};
			j.log(n);
		}
		o(We, "logLSPMessage");
		function Ge() {
			if (we()) throw new b(y.Closed, "Connection is closed.");
			if (Te()) throw new b(y.Disposed, "Connection is disposed.");
		}
		o(Ge, "throwIfClosedOrDisposed");
		function Ke() {
			if (Ce()) throw new b(y.AlreadyListening, "Connection is already listening");
		}
		o(Ke, "throwIfListening");
		function qe() {
			if (!Ce()) throw Error("Call listen() first.");
		}
		o(qe, "throwIfNotListening");
		function Je(e) {
			return e === void 0 ? null : e;
		}
		o(Je, "undefinedToNull");
		function Ye(e) {
			if (e !== null) return e;
		}
		o(Ye, "nullToUndefined");
		function Xe(e) {
			return e != null && !Array.isArray(e) && typeof e == "object";
		}
		o(Xe, "isNamedParam");
		function Ze(e, t) {
			switch (e) {
				case a.ParameterStructures.auto: return Xe(t) ? Ye(t) : [Je(t)];
				case a.ParameterStructures.byName:
					if (!Xe(t)) throw Error("Received parameters by name but param is not an object literal.");
					return Ye(t);
				case a.ParameterStructures.byPosition: return [Je(t)];
				default: throw Error(`Unknown parameter structure ${e.toString()}`);
			}
		}
		o(Ze, "computeSingleParam");
		function Qe(e, t) {
			let n, r = e.numberOfParams;
			switch (r) {
				case 0:
					n = void 0;
					break;
				case 1:
					n = Ze(e.parameterStructures, t[0]);
					break;
				default:
					n = [];
					for (let e = 0; e < t.length && e < r; e++) n.push(Je(t[e]));
					if (t.length < r) for (let e = t.length; e < r; e++) n.push(null);
			}
			return n;
		}
		o(Qe, "computeMessageParams");
		let $e = {
			sendNotification: /* @__PURE__ */ o((e, ...t) => {
				Ge();
				let r, o;
				if (i.string(e)) {
					r = e;
					let n = t[0], i = 0, s = a.ParameterStructures.auto;
					a.ParameterStructures.is(n) && (i = 1, s = n);
					let c = t.length, l = c - i;
					switch (l) {
						case 0:
							o = void 0;
							break;
						case 1:
							o = Ze(s, t[i]);
							break;
						default:
							if (s === a.ParameterStructures.byName) throw Error(`Received ${l} parameters for 'by Name' notification parameter structure.`);
							o = t.slice(i, c).map((e) => Je(e));
					}
				} else {
					let n = t;
					r = e.method, o = Qe(e, n);
				}
				let s = {
					jsonrpc: "2.0",
					method: r,
					params: o
				};
				return ze(s), n.write(s).catch((e) => {
					throw S.error("Sending notification failed."), e;
				});
			}, "sendNotification"),
			onNotification: /* @__PURE__ */ o((e, t) => {
				Ge();
				let n;
				return i.func(e) ? ae = e : t && (i.string(e) ? (n = e, oe.set(e, {
					type: void 0,
					handler: t
				})) : (n = e.method, oe.set(e.method, {
					type: e,
					handler: t
				}))), { dispose: /* @__PURE__ */ o(() => {
					n === void 0 ? ae = void 0 : oe.delete(n);
				}, "dispose") };
			}, "onNotification"),
			onProgress: /* @__PURE__ */ o((e, t, n) => {
				if (se.has(t)) throw Error(`Progress handler for token ${t} already registered`);
				return se.set(t, n), { dispose: /* @__PURE__ */ o(() => {
					se.delete(t);
				}, "dispose") };
			}, "onProgress"),
			sendProgress: /* @__PURE__ */ o((e, t, n) => $e.sendNotification(f.type, {
				token: t,
				value: n
			}), "sendProgress"),
			onUnhandledProgress: he.event,
			sendRequest: /* @__PURE__ */ o((e, ...t) => {
				Ge(), qe();
				let r, s, c;
				if (i.string(e)) {
					r = e;
					let n = t[0], i = t[t.length - 1], o = 0, u = a.ParameterStructures.auto;
					a.ParameterStructures.is(n) && (o = 1, u = n);
					let d = t.length;
					l.CancellationToken.is(i) && (--d, c = i);
					let f = d - o;
					switch (f) {
						case 0:
							s = void 0;
							break;
						case 1:
							s = Ze(u, t[o]);
							break;
						default:
							if (u === a.ParameterStructures.byName) throw Error(`Received ${f} parameters for 'by Name' request parameter structure.`);
							s = t.slice(o, d).map((e) => Je(e));
					}
				} else {
					let n = t;
					r = e.method, s = Qe(e, n);
					let i = e.numberOfParams;
					c = l.CancellationToken.is(n[i]) ? n[i] : void 0;
				}
				let u = te++, d;
				c && (d = c.onCancellationRequested(() => {
					let e = _e.sender.sendCancellation($e, u);
					return e === void 0 ? (S.log(`Received no promise from cancellation strategy when cancelling id ${u}`), Promise.resolve()) : e.catch(() => {
						S.log(`Sending cancellation messages for id ${u} failed`);
					});
				}));
				let f = {
					jsonrpc: "2.0",
					id: u,
					method: r,
					params: s
				};
				return Re(f), typeof _e.sender.enableCancellation == "function" && _e.sender.enableCancellation(f), new Promise(async (e, t) => {
					let i = /* @__PURE__ */ o((t) => {
						e(t), _e.sender.cleanup(u), d?.dispose();
					}, "resolveWithCleanup"), s = /* @__PURE__ */ o((e) => {
						t(e), _e.sender.cleanup(u), d?.dispose();
					}, "rejectWithCleanup"), c = {
						method: r,
						timerStart: Date.now(),
						resolve: i,
						reject: s
					};
					try {
						await n.write(f), O.set(u, c);
					} catch (e) {
						throw S.error("Sending request failed."), c.reject(new a.ResponseError(a.ErrorCodes.MessageWriteError, e.message ? e.message : "Unknown reason")), e;
					}
				});
			}, "sendRequest"),
			onRequest: /* @__PURE__ */ o((e, t) => {
				Ge();
				let n = null;
				return p.is(e) ? (n = void 0, E = e) : i.string(e) ? (n = null, t !== void 0 && (n = e, ie.set(e, {
					handler: t,
					type: void 0
				}))) : t !== void 0 && (n = e.method, ie.set(e.method, {
					type: e,
					handler: t
				})), { dispose: /* @__PURE__ */ o(() => {
					n !== null && (n === void 0 ? E = void 0 : ie.delete(n));
				}, "dispose") };
			}, "onRequest"),
			hasPendingResponse: /* @__PURE__ */ o(() => O.size > 0, "hasPendingResponse"),
			trace: /* @__PURE__ */ o(async (e, t, n) => {
				let r = !1, a = g.Text;
				n !== void 0 && (i.boolean(n) ? r = n : (r = n.sendNotification || !1, a = n.traceFormat || g.Text)), A = e, ue = a, j = A === m.Off ? void 0 : t, r && !we() && !Te() && await $e.sendNotification(_.type, { value: m.toString(e) });
			}, "trace"),
			onError: fe.event,
			onClose: pe.event,
			onUnhandledNotification: me.event,
			onDispose: ge.event,
			end: /* @__PURE__ */ o(() => {
				n.end();
			}, "end"),
			dispose: /* @__PURE__ */ o(() => {
				if (Te()) return;
				de = T.Disposed, ge.fire(void 0);
				let e = new a.ResponseError(a.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
				for (let t of O.values()) t.reject(e);
				O = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Set(), D = new s.LinkedMap(), i.func(n.dispose) && n.dispose(), i.func(t.dispose) && t.dispose();
			}, "dispose"),
			listen: /* @__PURE__ */ o(() => {
				Ge(), Ke(), de = T.Listening, t.listen(Me);
			}, "listen"),
			inspect: /* @__PURE__ */ o(() => {
				(0, r.default)().console.log("inspect");
			}, "inspect")
		};
		return $e.onNotification(v.type, (e) => {
			if (A === m.Off || !j) return;
			let t = A === m.Verbose || A === m.Compact;
			j.log(e.message, t ? e.verbose : void 0);
		}), $e.onNotification(f.type, (e) => {
			let t = se.get(e.token);
			t ? t(e.value) : he.fire(e);
		}), $e;
	}
	o(E, "createMessageConnection"), e.createMessageConnection = E;
} }), Dt = c({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/api.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ProgressType = e.ProgressToken = e.createMessageConnection = e.NullLogger = e.ConnectionOptions = e.ConnectionStrategy = e.AbstractMessageBuffer = e.WriteableStreamMessageWriter = e.AbstractMessageWriter = e.MessageWriter = e.ReadableStreamMessageReader = e.AbstractMessageReader = e.MessageReader = e.SharedArrayReceiverStrategy = e.SharedArraySenderStrategy = e.CancellationToken = e.CancellationTokenSource = e.Emitter = e.Event = e.Disposable = e.LRUCache = e.Touch = e.LinkedMap = e.ParameterStructures = e.NotificationType9 = e.NotificationType8 = e.NotificationType7 = e.NotificationType6 = e.NotificationType5 = e.NotificationType4 = e.NotificationType3 = e.NotificationType2 = e.NotificationType1 = e.NotificationType0 = e.NotificationType = e.ErrorCodes = e.ResponseError = e.RequestType9 = e.RequestType8 = e.RequestType7 = e.RequestType6 = e.RequestType5 = e.RequestType4 = e.RequestType3 = e.RequestType2 = e.RequestType1 = e.RequestType0 = e.RequestType = e.Message = e.RAL = void 0, e.MessageStrategy = e.CancellationStrategy = e.CancellationSenderStrategy = e.CancellationReceiverStrategy = e.ConnectionError = e.ConnectionErrors = e.LogTraceNotification = e.SetTraceNotification = e.TraceFormat = e.TraceValues = e.Trace = void 0;
	var t = vt();
	Object.defineProperty(e, "Message", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return t.Message;
		}, "get")
	}), Object.defineProperty(e, "RequestType", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return t.RequestType;
		}, "get")
	}), Object.defineProperty(e, "RequestType0", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return t.RequestType0;
		}, "get")
	}), Object.defineProperty(e, "RequestType1", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return t.RequestType1;
		}, "get")
	}), Object.defineProperty(e, "RequestType2", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return t.RequestType2;
		}, "get")
	}), Object.defineProperty(e, "RequestType3", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return t.RequestType3;
		}, "get")
	}), Object.defineProperty(e, "RequestType4", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return t.RequestType4;
		}, "get")
	}), Object.defineProperty(e, "RequestType5", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return t.RequestType5;
		}, "get")
	}), Object.defineProperty(e, "RequestType6", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return t.RequestType6;
		}, "get")
	}), Object.defineProperty(e, "RequestType7", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return t.RequestType7;
		}, "get")
	}), Object.defineProperty(e, "RequestType8", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return t.RequestType8;
		}, "get")
	}), Object.defineProperty(e, "RequestType9", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return t.RequestType9;
		}, "get")
	}), Object.defineProperty(e, "ResponseError", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return t.ResponseError;
		}, "get")
	}), Object.defineProperty(e, "ErrorCodes", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return t.ErrorCodes;
		}, "get")
	}), Object.defineProperty(e, "NotificationType", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return t.NotificationType;
		}, "get")
	}), Object.defineProperty(e, "NotificationType0", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return t.NotificationType0;
		}, "get")
	}), Object.defineProperty(e, "NotificationType1", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return t.NotificationType1;
		}, "get")
	}), Object.defineProperty(e, "NotificationType2", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return t.NotificationType2;
		}, "get")
	}), Object.defineProperty(e, "NotificationType3", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return t.NotificationType3;
		}, "get")
	}), Object.defineProperty(e, "NotificationType4", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return t.NotificationType4;
		}, "get")
	}), Object.defineProperty(e, "NotificationType5", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return t.NotificationType5;
		}, "get")
	}), Object.defineProperty(e, "NotificationType6", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return t.NotificationType6;
		}, "get")
	}), Object.defineProperty(e, "NotificationType7", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return t.NotificationType7;
		}, "get")
	}), Object.defineProperty(e, "NotificationType8", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return t.NotificationType8;
		}, "get")
	}), Object.defineProperty(e, "NotificationType9", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return t.NotificationType9;
		}, "get")
	}), Object.defineProperty(e, "ParameterStructures", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return t.ParameterStructures;
		}, "get")
	});
	var n = yt();
	Object.defineProperty(e, "LinkedMap", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return n.LinkedMap;
		}, "get")
	}), Object.defineProperty(e, "LRUCache", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return n.LRUCache;
		}, "get")
	}), Object.defineProperty(e, "Touch", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return n.Touch;
		}, "get")
	});
	var r = bt();
	Object.defineProperty(e, "Disposable", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return r.Disposable;
		}, "get")
	});
	var i = gt();
	Object.defineProperty(e, "Event", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return i.Event;
		}, "get")
	}), Object.defineProperty(e, "Emitter", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return i.Emitter;
		}, "get")
	});
	var a = _t();
	Object.defineProperty(e, "CancellationTokenSource", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return a.CancellationTokenSource;
		}, "get")
	}), Object.defineProperty(e, "CancellationToken", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return a.CancellationToken;
		}, "get")
	});
	var s = xt();
	Object.defineProperty(e, "SharedArraySenderStrategy", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return s.SharedArraySenderStrategy;
		}, "get")
	}), Object.defineProperty(e, "SharedArrayReceiverStrategy", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return s.SharedArrayReceiverStrategy;
		}, "get")
	});
	var c = Ct();
	Object.defineProperty(e, "MessageReader", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return c.MessageReader;
		}, "get")
	}), Object.defineProperty(e, "AbstractMessageReader", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return c.AbstractMessageReader;
		}, "get")
	}), Object.defineProperty(e, "ReadableStreamMessageReader", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return c.ReadableStreamMessageReader;
		}, "get")
	});
	var l = wt();
	Object.defineProperty(e, "MessageWriter", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return l.MessageWriter;
		}, "get")
	}), Object.defineProperty(e, "AbstractMessageWriter", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return l.AbstractMessageWriter;
		}, "get")
	}), Object.defineProperty(e, "WriteableStreamMessageWriter", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return l.WriteableStreamMessageWriter;
		}, "get")
	});
	var u = Tt();
	Object.defineProperty(e, "AbstractMessageBuffer", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return u.AbstractMessageBuffer;
		}, "get")
	});
	var d = Et();
	Object.defineProperty(e, "ConnectionStrategy", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return d.ConnectionStrategy;
		}, "get")
	}), Object.defineProperty(e, "ConnectionOptions", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return d.ConnectionOptions;
		}, "get")
	}), Object.defineProperty(e, "NullLogger", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return d.NullLogger;
		}, "get")
	}), Object.defineProperty(e, "createMessageConnection", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return d.createMessageConnection;
		}, "get")
	}), Object.defineProperty(e, "ProgressToken", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return d.ProgressToken;
		}, "get")
	}), Object.defineProperty(e, "ProgressType", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return d.ProgressType;
		}, "get")
	}), Object.defineProperty(e, "Trace", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return d.Trace;
		}, "get")
	}), Object.defineProperty(e, "TraceValues", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return d.TraceValues;
		}, "get")
	}), Object.defineProperty(e, "TraceFormat", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return d.TraceFormat;
		}, "get")
	}), Object.defineProperty(e, "SetTraceNotification", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return d.SetTraceNotification;
		}, "get")
	}), Object.defineProperty(e, "LogTraceNotification", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return d.LogTraceNotification;
		}, "get")
	}), Object.defineProperty(e, "ConnectionErrors", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return d.ConnectionErrors;
		}, "get")
	}), Object.defineProperty(e, "ConnectionError", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return d.ConnectionError;
		}, "get")
	}), Object.defineProperty(e, "CancellationReceiverStrategy", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return d.CancellationReceiverStrategy;
		}, "get")
	}), Object.defineProperty(e, "CancellationSenderStrategy", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return d.CancellationSenderStrategy;
		}, "get")
	}), Object.defineProperty(e, "CancellationStrategy", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return d.CancellationStrategy;
		}, "get")
	}), Object.defineProperty(e, "MessageStrategy", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return d.MessageStrategy;
		}, "get")
	}), e.RAL = mt().default;
} }), Ot = c({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/browser/ril.js"(e) {
	var t, n, r;
	Object.defineProperty(e, "__esModule", { value: !0 });
	var i = Dt(), a = (t = class extends i.AbstractMessageBuffer {
		constructor(e = "utf-8") {
			super(e), this.asciiDecoder = new TextDecoder("ascii");
		}
		emptyBuffer() {
			return t.emptyBuffer;
		}
		fromString(e, t) {
			return new TextEncoder().encode(e);
		}
		toString(e, t) {
			return t === "ascii" ? this.asciiDecoder.decode(e) : new TextDecoder(t).decode(e);
		}
		asNative(e, t) {
			return t === void 0 ? e : e.slice(0, t);
		}
		allocNative(e) {
			return new Uint8Array(e);
		}
	}, o(t, "MessageBuffer"), t);
	a.emptyBuffer = /* @__PURE__ */ new Uint8Array();
	var s = (n = class {
		constructor(e) {
			this.socket = e, this._onData = new i.Emitter(), this._messageListener = (e) => {
				e.data.arrayBuffer().then((e) => {
					this._onData.fire(new Uint8Array(e));
				}, () => {
					(0, i.RAL)().console.error("Converting blob to array buffer failed.");
				});
			}, this.socket.addEventListener("message", this._messageListener);
		}
		onClose(e) {
			return this.socket.addEventListener("close", e), i.Disposable.create(() => this.socket.removeEventListener("close", e));
		}
		onError(e) {
			return this.socket.addEventListener("error", e), i.Disposable.create(() => this.socket.removeEventListener("error", e));
		}
		onEnd(e) {
			return this.socket.addEventListener("end", e), i.Disposable.create(() => this.socket.removeEventListener("end", e));
		}
		onData(e) {
			return this._onData.event(e);
		}
	}, o(n, "ReadableStreamWrapper"), n), c = (r = class {
		constructor(e) {
			this.socket = e;
		}
		onClose(e) {
			return this.socket.addEventListener("close", e), i.Disposable.create(() => this.socket.removeEventListener("close", e));
		}
		onError(e) {
			return this.socket.addEventListener("error", e), i.Disposable.create(() => this.socket.removeEventListener("error", e));
		}
		onEnd(e) {
			return this.socket.addEventListener("end", e), i.Disposable.create(() => this.socket.removeEventListener("end", e));
		}
		write(e, t) {
			if (typeof e == "string") {
				if (t !== void 0 && t !== "utf-8") throw Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${t}`);
				this.socket.send(e);
			} else this.socket.send(e);
			return Promise.resolve();
		}
		end() {
			this.socket.close();
		}
	}, o(r, "WritableStreamWrapper"), r), l = new TextEncoder(), u = Object.freeze({
		messageBuffer: Object.freeze({ create: /* @__PURE__ */ o((e) => new a(e), "create") }),
		applicationJson: Object.freeze({
			encoder: Object.freeze({
				name: "application/json",
				encode: /* @__PURE__ */ o((e, t) => {
					if (t.charset !== "utf-8") throw Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${t.charset}`);
					return Promise.resolve(l.encode(JSON.stringify(e, void 0, 0)));
				}, "encode")
			}),
			decoder: Object.freeze({
				name: "application/json",
				decode: /* @__PURE__ */ o((e, t) => {
					if (!(e instanceof Uint8Array)) throw Error("In a Browser environments only Uint8Arrays are supported.");
					return Promise.resolve(JSON.parse(new TextDecoder(t.charset).decode(e)));
				}, "decode")
			})
		}),
		stream: Object.freeze({
			asReadableStream: /* @__PURE__ */ o((e) => new s(e), "asReadableStream"),
			asWritableStream: /* @__PURE__ */ o((e) => new c(e), "asWritableStream")
		}),
		console,
		timer: Object.freeze({
			setTimeout(e, t, ...n) {
				let r = setTimeout(e, t, ...n);
				return { dispose: /* @__PURE__ */ o(() => clearTimeout(r), "dispose") };
			},
			setImmediate(e, ...t) {
				let n = setTimeout(e, 0, ...t);
				return { dispose: /* @__PURE__ */ o(() => clearTimeout(n), "dispose") };
			},
			setInterval(e, t, ...n) {
				let r = setInterval(e, t, ...n);
				return { dispose: /* @__PURE__ */ o(() => clearInterval(r), "dispose") };
			}
		})
	});
	function d() {
		return u;
	}
	o(d, "RIL"), function(e) {
		function t() {
			i.RAL.install(u);
		}
		o(t, "install"), e.install = t;
	}(d ||= {}), e.default = d;
} }), kt = c({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/browser/main.js"(e) {
	var t, n, r = e && e.__createBinding || (Object.create ? function(e, t, n, r) {
		r === void 0 && (r = n);
		var i = Object.getOwnPropertyDescriptor(t, n);
		(!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
			enumerable: !0,
			get: /* @__PURE__ */ o(function() {
				return t[n];
			}, "get")
		}), Object.defineProperty(e, r, i);
	} : function(e, t, n, r) {
		r === void 0 && (r = n), e[r] = t[n];
	}), i = e && e.__exportStar || function(e, t) {
		for (var n in e) n !== "default" && !Object.prototype.hasOwnProperty.call(t, n) && r(t, e, n);
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.createMessageConnection = e.BrowserMessageWriter = e.BrowserMessageReader = void 0, Ot().default.install();
	var a = Dt();
	i(Dt(), e), e.BrowserMessageReader = (t = class extends a.AbstractMessageReader {
		constructor(e) {
			super(), this._onData = new a.Emitter(), this._messageListener = (e) => {
				this._onData.fire(e.data);
			}, e.addEventListener("error", (e) => this.fireError(e)), e.onmessage = this._messageListener;
		}
		listen(e) {
			return this._onData.event(e);
		}
	}, o(t, "BrowserMessageReader"), t), e.BrowserMessageWriter = (n = class extends a.AbstractMessageWriter {
		constructor(e) {
			super(), this.port = e, this.errorCount = 0, e.addEventListener("error", (e) => this.fireError(e));
		}
		write(e) {
			try {
				return this.port.postMessage(e), Promise.resolve();
			} catch (t) {
				return this.handleError(t, e), Promise.reject(t);
			}
		}
		handleError(e, t) {
			this.errorCount++, this.fireError(e, t, this.errorCount);
		}
		end() {}
	}, o(n, "BrowserMessageWriter"), n);
	function s(e, t, n, r) {
		return n === void 0 && (n = a.NullLogger), a.ConnectionStrategy.is(r) && (r = { connectionStrategy: r }), (0, a.createMessageConnection)(e, t, n, r);
	}
	o(s, "createMessageConnection"), e.createMessageConnection = s;
} }), At = c({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/browser.js"(e, t) {
	t.exports = kt();
} }), N = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/messages.js"(e) {
	var t, n, r, i, a;
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ProtocolNotificationType = e.ProtocolNotificationType0 = e.ProtocolRequestType = e.ProtocolRequestType0 = e.RegistrationType = e.MessageDirection = void 0;
	var s = kt(), c;
	(function(e) {
		e.clientToServer = "clientToServer", e.serverToClient = "serverToClient", e.both = "both";
	})(c || (e.MessageDirection = c = {})), e.RegistrationType = (t = class {
		constructor(e) {
			this.method = e;
		}
	}, o(t, "RegistrationType"), t), e.ProtocolRequestType0 = (n = class extends s.RequestType0 {
		constructor(e) {
			super(e);
		}
	}, o(n, "ProtocolRequestType0"), n), e.ProtocolRequestType = (r = class extends s.RequestType {
		constructor(e) {
			super(e, s.ParameterStructures.byName);
		}
	}, o(r, "ProtocolRequestType"), r), e.ProtocolNotificationType0 = (i = class extends s.NotificationType0 {
		constructor(e) {
			super(e);
		}
	}, o(i, "ProtocolNotificationType0"), i), e.ProtocolNotificationType = (a = class extends s.NotificationType {
		constructor(e) {
			super(e, s.ParameterStructures.byName);
		}
	}, o(a, "ProtocolNotificationType"), a);
} }), jt = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/utils/is.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.objectLiteral = e.typedArray = e.stringArray = e.array = e.func = e.error = e.number = e.string = e.boolean = void 0;
	function t(e) {
		return e === !0 || e === !1;
	}
	o(t, "boolean"), e.boolean = t;
	function n(e) {
		return typeof e == "string" || e instanceof String;
	}
	o(n, "string"), e.string = n;
	function r(e) {
		return typeof e == "number" || e instanceof Number;
	}
	o(r, "number"), e.number = r;
	function i(e) {
		return e instanceof Error;
	}
	o(i, "error"), e.error = i;
	function a(e) {
		return typeof e == "function";
	}
	o(a, "func"), e.func = a;
	function s(e) {
		return Array.isArray(e);
	}
	o(s, "array"), e.array = s;
	function c(e) {
		return s(e) && e.every((e) => n(e));
	}
	o(c, "stringArray"), e.stringArray = c;
	function l(e, t) {
		return Array.isArray(e) && e.every(t);
	}
	o(l, "typedArray"), e.typedArray = l;
	function u(e) {
		return typeof e == "object" && !!e;
	}
	o(u, "objectLiteral"), e.objectLiteral = u;
} }), Mt = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ImplementationRequest = void 0;
	var t = N(), n;
	(function(e) {
		e.method = "textDocument/implementation", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.ImplementationRequest = n = {}));
} }), Nt = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.TypeDefinitionRequest = void 0;
	var t = N(), n;
	(function(e) {
		e.method = "textDocument/typeDefinition", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.TypeDefinitionRequest = n = {}));
} }), Pt = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.DidChangeWorkspaceFoldersNotification = e.WorkspaceFoldersRequest = void 0;
	var t = N(), n;
	(function(e) {
		e.method = "workspace/workspaceFolders", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolRequestType0(e.method);
	})(n || (e.WorkspaceFoldersRequest = n = {}));
	var r;
	(function(e) {
		e.method = "workspace/didChangeWorkspaceFolders", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolNotificationType(e.method);
	})(r || (e.DidChangeWorkspaceFoldersNotification = r = {}));
} }), Ft = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ConfigurationRequest = void 0;
	var t = N(), n;
	(function(e) {
		e.method = "workspace/configuration", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.ConfigurationRequest = n = {}));
} }), It = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ColorPresentationRequest = e.DocumentColorRequest = void 0;
	var t = N(), n;
	(function(e) {
		e.method = "textDocument/documentColor", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.DocumentColorRequest = n = {}));
	var r;
	(function(e) {
		e.method = "textDocument/colorPresentation", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(r || (e.ColorPresentationRequest = r = {}));
} }), Lt = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.FoldingRangeRefreshRequest = e.FoldingRangeRequest = void 0;
	var t = N(), n;
	(function(e) {
		e.method = "textDocument/foldingRange", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.FoldingRangeRequest = n = {}));
	var r;
	(function(e) {
		e.method = "workspace/foldingRange/refresh", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolRequestType0(e.method);
	})(r || (e.FoldingRangeRefreshRequest = r = {}));
} }), Rt = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.DeclarationRequest = void 0;
	var t = N(), n;
	(function(e) {
		e.method = "textDocument/declaration", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.DeclarationRequest = n = {}));
} }), zt = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.SelectionRangeRequest = void 0;
	var t = N(), n;
	(function(e) {
		e.method = "textDocument/selectionRange", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.SelectionRangeRequest = n = {}));
} }), Bt = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.WorkDoneProgressCancelNotification = e.WorkDoneProgressCreateRequest = e.WorkDoneProgress = void 0;
	var t = kt(), n = N(), r;
	(function(e) {
		e.type = new t.ProgressType();
		function n(t) {
			return t === e.type;
		}
		o(n, "is"), e.is = n;
	})(r || (e.WorkDoneProgress = r = {}));
	var i;
	(function(e) {
		e.method = "window/workDoneProgress/create", e.messageDirection = n.MessageDirection.serverToClient, e.type = new n.ProtocolRequestType(e.method);
	})(i || (e.WorkDoneProgressCreateRequest = i = {}));
	var a;
	(function(e) {
		e.method = "window/workDoneProgress/cancel", e.messageDirection = n.MessageDirection.clientToServer, e.type = new n.ProtocolNotificationType(e.method);
	})(a || (e.WorkDoneProgressCancelNotification = a = {}));
} }), Vt = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.CallHierarchyOutgoingCallsRequest = e.CallHierarchyIncomingCallsRequest = e.CallHierarchyPrepareRequest = void 0;
	var t = N(), n;
	(function(e) {
		e.method = "textDocument/prepareCallHierarchy", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.CallHierarchyPrepareRequest = n = {}));
	var r;
	(function(e) {
		e.method = "callHierarchy/incomingCalls", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(r || (e.CallHierarchyIncomingCallsRequest = r = {}));
	var i;
	(function(e) {
		e.method = "callHierarchy/outgoingCalls", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(i || (e.CallHierarchyOutgoingCallsRequest = i = {}));
} }), Ht = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.SemanticTokensRefreshRequest = e.SemanticTokensRangeRequest = e.SemanticTokensDeltaRequest = e.SemanticTokensRequest = e.SemanticTokensRegistrationType = e.TokenFormat = void 0;
	var t = N(), n;
	(function(e) {
		e.Relative = "relative";
	})(n || (e.TokenFormat = n = {}));
	var r;
	(function(e) {
		e.method = "textDocument/semanticTokens", e.type = new t.RegistrationType(e.method);
	})(r || (e.SemanticTokensRegistrationType = r = {}));
	var i;
	(function(e) {
		e.method = "textDocument/semanticTokens/full", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method), e.registrationMethod = r.method;
	})(i || (e.SemanticTokensRequest = i = {}));
	var a;
	(function(e) {
		e.method = "textDocument/semanticTokens/full/delta", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method), e.registrationMethod = r.method;
	})(a || (e.SemanticTokensDeltaRequest = a = {}));
	var o;
	(function(e) {
		e.method = "textDocument/semanticTokens/range", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method), e.registrationMethod = r.method;
	})(o || (e.SemanticTokensRangeRequest = o = {}));
	var s;
	(function(e) {
		e.method = "workspace/semanticTokens/refresh", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolRequestType0(e.method);
	})(s || (e.SemanticTokensRefreshRequest = s = {}));
} }), Ut = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ShowDocumentRequest = void 0;
	var t = N(), n;
	(function(e) {
		e.method = "window/showDocument", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.ShowDocumentRequest = n = {}));
} }), Wt = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.LinkedEditingRangeRequest = void 0;
	var t = N(), n;
	(function(e) {
		e.method = "textDocument/linkedEditingRange", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.LinkedEditingRangeRequest = n = {}));
} }), Gt = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.WillDeleteFilesRequest = e.DidDeleteFilesNotification = e.DidRenameFilesNotification = e.WillRenameFilesRequest = e.DidCreateFilesNotification = e.WillCreateFilesRequest = e.FileOperationPatternKind = void 0;
	var t = N(), n;
	(function(e) {
		e.file = "file", e.folder = "folder";
	})(n || (e.FileOperationPatternKind = n = {}));
	var r;
	(function(e) {
		e.method = "workspace/willCreateFiles", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(r || (e.WillCreateFilesRequest = r = {}));
	var i;
	(function(e) {
		e.method = "workspace/didCreateFiles", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolNotificationType(e.method);
	})(i || (e.DidCreateFilesNotification = i = {}));
	var a;
	(function(e) {
		e.method = "workspace/willRenameFiles", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(a || (e.WillRenameFilesRequest = a = {}));
	var o;
	(function(e) {
		e.method = "workspace/didRenameFiles", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolNotificationType(e.method);
	})(o || (e.DidRenameFilesNotification = o = {}));
	var s;
	(function(e) {
		e.method = "workspace/didDeleteFiles", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolNotificationType(e.method);
	})(s || (e.DidDeleteFilesNotification = s = {}));
	var c;
	(function(e) {
		e.method = "workspace/willDeleteFiles", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(c || (e.WillDeleteFilesRequest = c = {}));
} }), Kt = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.MonikerRequest = e.MonikerKind = e.UniquenessLevel = void 0;
	var t = N(), n;
	(function(e) {
		e.document = "document", e.project = "project", e.group = "group", e.scheme = "scheme", e.global = "global";
	})(n || (e.UniquenessLevel = n = {}));
	var r;
	(function(e) {
		e.$import = "import", e.$export = "export", e.local = "local";
	})(r || (e.MonikerKind = r = {}));
	var i;
	(function(e) {
		e.method = "textDocument/moniker", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(i || (e.MonikerRequest = i = {}));
} }), qt = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.TypeHierarchySubtypesRequest = e.TypeHierarchySupertypesRequest = e.TypeHierarchyPrepareRequest = void 0;
	var t = N(), n;
	(function(e) {
		e.method = "textDocument/prepareTypeHierarchy", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.TypeHierarchyPrepareRequest = n = {}));
	var r;
	(function(e) {
		e.method = "typeHierarchy/supertypes", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(r || (e.TypeHierarchySupertypesRequest = r = {}));
	var i;
	(function(e) {
		e.method = "typeHierarchy/subtypes", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(i || (e.TypeHierarchySubtypesRequest = i = {}));
} }), Jt = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.InlineValueRefreshRequest = e.InlineValueRequest = void 0;
	var t = N(), n;
	(function(e) {
		e.method = "textDocument/inlineValue", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.InlineValueRequest = n = {}));
	var r;
	(function(e) {
		e.method = "workspace/inlineValue/refresh", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolRequestType0(e.method);
	})(r || (e.InlineValueRefreshRequest = r = {}));
} }), Yt = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.InlayHintRefreshRequest = e.InlayHintResolveRequest = e.InlayHintRequest = void 0;
	var t = N(), n;
	(function(e) {
		e.method = "textDocument/inlayHint", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.InlayHintRequest = n = {}));
	var r;
	(function(e) {
		e.method = "inlayHint/resolve", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(r || (e.InlayHintResolveRequest = r = {}));
	var i;
	(function(e) {
		e.method = "workspace/inlayHint/refresh", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolRequestType0(e.method);
	})(i || (e.InlayHintRefreshRequest = i = {}));
} }), Xt = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.DiagnosticRefreshRequest = e.WorkspaceDiagnosticRequest = e.DocumentDiagnosticRequest = e.DocumentDiagnosticReportKind = e.DiagnosticServerCancellationData = void 0;
	var t = kt(), n = jt(), r = N(), i;
	(function(e) {
		function t(e) {
			let t = e;
			return t && n.boolean(t.retriggerRequest);
		}
		o(t, "is"), e.is = t;
	})(i || (e.DiagnosticServerCancellationData = i = {}));
	var a;
	(function(e) {
		e.Full = "full", e.Unchanged = "unchanged";
	})(a || (e.DocumentDiagnosticReportKind = a = {}));
	var s;
	(function(e) {
		e.method = "textDocument/diagnostic", e.messageDirection = r.MessageDirection.clientToServer, e.type = new r.ProtocolRequestType(e.method), e.partialResult = new t.ProgressType();
	})(s || (e.DocumentDiagnosticRequest = s = {}));
	var c;
	(function(e) {
		e.method = "workspace/diagnostic", e.messageDirection = r.MessageDirection.clientToServer, e.type = new r.ProtocolRequestType(e.method), e.partialResult = new t.ProgressType();
	})(c || (e.WorkspaceDiagnosticRequest = c = {}));
	var l;
	(function(e) {
		e.method = "workspace/diagnostic/refresh", e.messageDirection = r.MessageDirection.serverToClient, e.type = new r.ProtocolRequestType0(e.method);
	})(l || (e.DiagnosticRefreshRequest = l = {}));
} }), Zt = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.DidCloseNotebookDocumentNotification = e.DidSaveNotebookDocumentNotification = e.DidChangeNotebookDocumentNotification = e.NotebookCellArrayChange = e.DidOpenNotebookDocumentNotification = e.NotebookDocumentSyncRegistrationType = e.NotebookDocument = e.NotebookCell = e.ExecutionSummary = e.NotebookCellKind = void 0;
	var t = (pt(), p(m)), n = jt(), r = N(), i;
	(function(e) {
		e.Markup = 1, e.Code = 2;
		function t(e) {
			return e === 1 || e === 2;
		}
		o(t, "is"), e.is = t;
	})(i || (e.NotebookCellKind = i = {}));
	var a;
	(function(e) {
		function r(e, t) {
			let n = { executionOrder: e };
			return (t === !0 || t === !1) && (n.success = t), n;
		}
		o(r, "create"), e.create = r;
		function i(e) {
			let r = e;
			return n.objectLiteral(r) && t.uinteger.is(r.executionOrder) && (r.success === void 0 || n.boolean(r.success));
		}
		o(i, "is"), e.is = i;
		function a(e, t) {
			return e === t ? !0 : e == null || t == null ? !1 : e.executionOrder === t.executionOrder && e.success === t.success;
		}
		o(a, "equals"), e.equals = a;
	})(a || (e.ExecutionSummary = a = {}));
	var s;
	(function(e) {
		function r(e, t) {
			return {
				kind: e,
				document: t
			};
		}
		o(r, "create"), e.create = r;
		function s(e) {
			let r = e;
			return n.objectLiteral(r) && i.is(r.kind) && t.DocumentUri.is(r.document) && (r.metadata === void 0 || n.objectLiteral(r.metadata));
		}
		o(s, "is"), e.is = s;
		function c(e, t) {
			let n = /* @__PURE__ */ new Set();
			return e.document !== t.document && n.add("document"), e.kind !== t.kind && n.add("kind"), e.executionSummary !== t.executionSummary && n.add("executionSummary"), (e.metadata !== void 0 || t.metadata !== void 0) && !l(e.metadata, t.metadata) && n.add("metadata"), (e.executionSummary !== void 0 || t.executionSummary !== void 0) && !a.equals(e.executionSummary, t.executionSummary) && n.add("executionSummary"), n;
		}
		o(c, "diff"), e.diff = c;
		function l(e, t) {
			if (e === t) return !0;
			if (e == null || t == null || typeof e != typeof t || typeof e != "object") return !1;
			let r = Array.isArray(e), i = Array.isArray(t);
			if (r !== i) return !1;
			if (r && i) {
				if (e.length !== t.length) return !1;
				for (let n = 0; n < e.length; n++) if (!l(e[n], t[n])) return !1;
			}
			if (n.objectLiteral(e) && n.objectLiteral(t)) {
				let n = Object.keys(e), r = Object.keys(t);
				if (n.length !== r.length || (n.sort(), r.sort(), !l(n, r))) return !1;
				for (let r = 0; r < n.length; r++) {
					let i = n[r];
					if (!l(e[i], t[i])) return !1;
				}
			}
			return !0;
		}
		o(l, "equalsMetadata");
	})(s || (e.NotebookCell = s = {}));
	var c;
	(function(e) {
		function r(e, t, n, r) {
			return {
				uri: e,
				notebookType: t,
				version: n,
				cells: r
			};
		}
		o(r, "create"), e.create = r;
		function i(e) {
			let r = e;
			return n.objectLiteral(r) && n.string(r.uri) && t.integer.is(r.version) && n.typedArray(r.cells, s.is);
		}
		o(i, "is"), e.is = i;
	})(c || (e.NotebookDocument = c = {}));
	var l;
	(function(e) {
		e.method = "notebookDocument/sync", e.messageDirection = r.MessageDirection.clientToServer, e.type = new r.RegistrationType(e.method);
	})(l || (e.NotebookDocumentSyncRegistrationType = l = {}));
	var u;
	(function(e) {
		e.method = "notebookDocument/didOpen", e.messageDirection = r.MessageDirection.clientToServer, e.type = new r.ProtocolNotificationType(e.method), e.registrationMethod = l.method;
	})(u || (e.DidOpenNotebookDocumentNotification = u = {}));
	var d;
	(function(e) {
		function r(e) {
			let r = e;
			return n.objectLiteral(r) && t.uinteger.is(r.start) && t.uinteger.is(r.deleteCount) && (r.cells === void 0 || n.typedArray(r.cells, s.is));
		}
		o(r, "is"), e.is = r;
		function i(e, t, n) {
			let r = {
				start: e,
				deleteCount: t
			};
			return n !== void 0 && (r.cells = n), r;
		}
		o(i, "create"), e.create = i;
	})(d || (e.NotebookCellArrayChange = d = {}));
	var f;
	(function(e) {
		e.method = "notebookDocument/didChange", e.messageDirection = r.MessageDirection.clientToServer, e.type = new r.ProtocolNotificationType(e.method), e.registrationMethod = l.method;
	})(f || (e.DidChangeNotebookDocumentNotification = f = {}));
	var h;
	(function(e) {
		e.method = "notebookDocument/didSave", e.messageDirection = r.MessageDirection.clientToServer, e.type = new r.ProtocolNotificationType(e.method), e.registrationMethod = l.method;
	})(h || (e.DidSaveNotebookDocumentNotification = h = {}));
	var g;
	(function(e) {
		e.method = "notebookDocument/didClose", e.messageDirection = r.MessageDirection.clientToServer, e.type = new r.ProtocolNotificationType(e.method), e.registrationMethod = l.method;
	})(g || (e.DidCloseNotebookDocumentNotification = g = {}));
} }), Qt = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineCompletion.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.InlineCompletionRequest = void 0;
	var t = N(), n;
	(function(e) {
		e.method = "textDocument/inlineCompletion", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.InlineCompletionRequest = n = {}));
} }), $t = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.WorkspaceSymbolRequest = e.CodeActionResolveRequest = e.CodeActionRequest = e.DocumentSymbolRequest = e.DocumentHighlightRequest = e.ReferencesRequest = e.DefinitionRequest = e.SignatureHelpRequest = e.SignatureHelpTriggerKind = e.HoverRequest = e.CompletionResolveRequest = e.CompletionRequest = e.CompletionTriggerKind = e.PublishDiagnosticsNotification = e.WatchKind = e.RelativePattern = e.FileChangeType = e.DidChangeWatchedFilesNotification = e.WillSaveTextDocumentWaitUntilRequest = e.WillSaveTextDocumentNotification = e.TextDocumentSaveReason = e.DidSaveTextDocumentNotification = e.DidCloseTextDocumentNotification = e.DidChangeTextDocumentNotification = e.TextDocumentContentChangeEvent = e.DidOpenTextDocumentNotification = e.TextDocumentSyncKind = e.TelemetryEventNotification = e.LogMessageNotification = e.ShowMessageRequest = e.ShowMessageNotification = e.MessageType = e.DidChangeConfigurationNotification = e.ExitNotification = e.ShutdownRequest = e.InitializedNotification = e.InitializeErrorCodes = e.InitializeRequest = e.WorkDoneProgressOptions = e.TextDocumentRegistrationOptions = e.StaticRegistrationOptions = e.PositionEncodingKind = e.FailureHandlingKind = e.ResourceOperationKind = e.UnregistrationRequest = e.RegistrationRequest = e.DocumentSelector = e.NotebookCellTextDocumentFilter = e.NotebookDocumentFilter = e.TextDocumentFilter = void 0, e.MonikerRequest = e.MonikerKind = e.UniquenessLevel = e.WillDeleteFilesRequest = e.DidDeleteFilesNotification = e.WillRenameFilesRequest = e.DidRenameFilesNotification = e.WillCreateFilesRequest = e.DidCreateFilesNotification = e.FileOperationPatternKind = e.LinkedEditingRangeRequest = e.ShowDocumentRequest = e.SemanticTokensRegistrationType = e.SemanticTokensRefreshRequest = e.SemanticTokensRangeRequest = e.SemanticTokensDeltaRequest = e.SemanticTokensRequest = e.TokenFormat = e.CallHierarchyPrepareRequest = e.CallHierarchyOutgoingCallsRequest = e.CallHierarchyIncomingCallsRequest = e.WorkDoneProgressCancelNotification = e.WorkDoneProgressCreateRequest = e.WorkDoneProgress = e.SelectionRangeRequest = e.DeclarationRequest = e.FoldingRangeRefreshRequest = e.FoldingRangeRequest = e.ColorPresentationRequest = e.DocumentColorRequest = e.ConfigurationRequest = e.DidChangeWorkspaceFoldersNotification = e.WorkspaceFoldersRequest = e.TypeDefinitionRequest = e.ImplementationRequest = e.ApplyWorkspaceEditRequest = e.ExecuteCommandRequest = e.PrepareRenameRequest = e.RenameRequest = e.PrepareSupportDefaultBehavior = e.DocumentOnTypeFormattingRequest = e.DocumentRangesFormattingRequest = e.DocumentRangeFormattingRequest = e.DocumentFormattingRequest = e.DocumentLinkResolveRequest = e.DocumentLinkRequest = e.CodeLensRefreshRequest = e.CodeLensResolveRequest = e.CodeLensRequest = e.WorkspaceSymbolResolveRequest = void 0, e.InlineCompletionRequest = e.DidCloseNotebookDocumentNotification = e.DidSaveNotebookDocumentNotification = e.DidChangeNotebookDocumentNotification = e.NotebookCellArrayChange = e.DidOpenNotebookDocumentNotification = e.NotebookDocumentSyncRegistrationType = e.NotebookDocument = e.NotebookCell = e.ExecutionSummary = e.NotebookCellKind = e.DiagnosticRefreshRequest = e.WorkspaceDiagnosticRequest = e.DocumentDiagnosticRequest = e.DocumentDiagnosticReportKind = e.DiagnosticServerCancellationData = e.InlayHintRefreshRequest = e.InlayHintResolveRequest = e.InlayHintRequest = e.InlineValueRefreshRequest = e.InlineValueRequest = e.TypeHierarchySupertypesRequest = e.TypeHierarchySubtypesRequest = e.TypeHierarchyPrepareRequest = void 0;
	var t = N(), n = (pt(), p(m)), r = jt(), i = Mt();
	Object.defineProperty(e, "ImplementationRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return i.ImplementationRequest;
		}, "get")
	});
	var a = Nt();
	Object.defineProperty(e, "TypeDefinitionRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return a.TypeDefinitionRequest;
		}, "get")
	});
	var s = Pt();
	Object.defineProperty(e, "WorkspaceFoldersRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return s.WorkspaceFoldersRequest;
		}, "get")
	}), Object.defineProperty(e, "DidChangeWorkspaceFoldersNotification", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return s.DidChangeWorkspaceFoldersNotification;
		}, "get")
	});
	var c = Ft();
	Object.defineProperty(e, "ConfigurationRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return c.ConfigurationRequest;
		}, "get")
	});
	var l = It();
	Object.defineProperty(e, "DocumentColorRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return l.DocumentColorRequest;
		}, "get")
	}), Object.defineProperty(e, "ColorPresentationRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return l.ColorPresentationRequest;
		}, "get")
	});
	var u = Lt();
	Object.defineProperty(e, "FoldingRangeRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return u.FoldingRangeRequest;
		}, "get")
	}), Object.defineProperty(e, "FoldingRangeRefreshRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return u.FoldingRangeRefreshRequest;
		}, "get")
	});
	var d = Rt();
	Object.defineProperty(e, "DeclarationRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return d.DeclarationRequest;
		}, "get")
	});
	var f = zt();
	Object.defineProperty(e, "SelectionRangeRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return f.SelectionRangeRequest;
		}, "get")
	});
	var h = Bt();
	Object.defineProperty(e, "WorkDoneProgress", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return h.WorkDoneProgress;
		}, "get")
	}), Object.defineProperty(e, "WorkDoneProgressCreateRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return h.WorkDoneProgressCreateRequest;
		}, "get")
	}), Object.defineProperty(e, "WorkDoneProgressCancelNotification", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return h.WorkDoneProgressCancelNotification;
		}, "get")
	});
	var g = Vt();
	Object.defineProperty(e, "CallHierarchyIncomingCallsRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return g.CallHierarchyIncomingCallsRequest;
		}, "get")
	}), Object.defineProperty(e, "CallHierarchyOutgoingCallsRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return g.CallHierarchyOutgoingCallsRequest;
		}, "get")
	}), Object.defineProperty(e, "CallHierarchyPrepareRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return g.CallHierarchyPrepareRequest;
		}, "get")
	});
	var _ = Ht();
	Object.defineProperty(e, "TokenFormat", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return _.TokenFormat;
		}, "get")
	}), Object.defineProperty(e, "SemanticTokensRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return _.SemanticTokensRequest;
		}, "get")
	}), Object.defineProperty(e, "SemanticTokensDeltaRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return _.SemanticTokensDeltaRequest;
		}, "get")
	}), Object.defineProperty(e, "SemanticTokensRangeRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return _.SemanticTokensRangeRequest;
		}, "get")
	}), Object.defineProperty(e, "SemanticTokensRefreshRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return _.SemanticTokensRefreshRequest;
		}, "get")
	}), Object.defineProperty(e, "SemanticTokensRegistrationType", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return _.SemanticTokensRegistrationType;
		}, "get")
	});
	var v = Ut();
	Object.defineProperty(e, "ShowDocumentRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return v.ShowDocumentRequest;
		}, "get")
	});
	var y = Wt();
	Object.defineProperty(e, "LinkedEditingRangeRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return y.LinkedEditingRangeRequest;
		}, "get")
	});
	var b = Gt();
	Object.defineProperty(e, "FileOperationPatternKind", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return b.FileOperationPatternKind;
		}, "get")
	}), Object.defineProperty(e, "DidCreateFilesNotification", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return b.DidCreateFilesNotification;
		}, "get")
	}), Object.defineProperty(e, "WillCreateFilesRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return b.WillCreateFilesRequest;
		}, "get")
	}), Object.defineProperty(e, "DidRenameFilesNotification", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return b.DidRenameFilesNotification;
		}, "get")
	}), Object.defineProperty(e, "WillRenameFilesRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return b.WillRenameFilesRequest;
		}, "get")
	}), Object.defineProperty(e, "DidDeleteFilesNotification", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return b.DidDeleteFilesNotification;
		}, "get")
	}), Object.defineProperty(e, "WillDeleteFilesRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return b.WillDeleteFilesRequest;
		}, "get")
	});
	var x = Kt();
	Object.defineProperty(e, "UniquenessLevel", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return x.UniquenessLevel;
		}, "get")
	}), Object.defineProperty(e, "MonikerKind", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return x.MonikerKind;
		}, "get")
	}), Object.defineProperty(e, "MonikerRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return x.MonikerRequest;
		}, "get")
	});
	var ee = qt();
	Object.defineProperty(e, "TypeHierarchyPrepareRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return ee.TypeHierarchyPrepareRequest;
		}, "get")
	}), Object.defineProperty(e, "TypeHierarchySubtypesRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return ee.TypeHierarchySubtypesRequest;
		}, "get")
	}), Object.defineProperty(e, "TypeHierarchySupertypesRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return ee.TypeHierarchySupertypesRequest;
		}, "get")
	});
	var S = Jt();
	Object.defineProperty(e, "InlineValueRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return S.InlineValueRequest;
		}, "get")
	}), Object.defineProperty(e, "InlineValueRefreshRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return S.InlineValueRefreshRequest;
		}, "get")
	});
	var te = Yt();
	Object.defineProperty(e, "InlayHintRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return te.InlayHintRequest;
		}, "get")
	}), Object.defineProperty(e, "InlayHintResolveRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return te.InlayHintResolveRequest;
		}, "get")
	}), Object.defineProperty(e, "InlayHintRefreshRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return te.InlayHintRefreshRequest;
		}, "get")
	});
	var C = Xt();
	Object.defineProperty(e, "DiagnosticServerCancellationData", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return C.DiagnosticServerCancellationData;
		}, "get")
	}), Object.defineProperty(e, "DocumentDiagnosticReportKind", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return C.DocumentDiagnosticReportKind;
		}, "get")
	}), Object.defineProperty(e, "DocumentDiagnosticRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return C.DocumentDiagnosticRequest;
		}, "get")
	}), Object.defineProperty(e, "WorkspaceDiagnosticRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return C.WorkspaceDiagnosticRequest;
		}, "get")
	}), Object.defineProperty(e, "DiagnosticRefreshRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return C.DiagnosticRefreshRequest;
		}, "get")
	});
	var w = Zt();
	Object.defineProperty(e, "NotebookCellKind", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return w.NotebookCellKind;
		}, "get")
	}), Object.defineProperty(e, "ExecutionSummary", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return w.ExecutionSummary;
		}, "get")
	}), Object.defineProperty(e, "NotebookCell", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return w.NotebookCell;
		}, "get")
	}), Object.defineProperty(e, "NotebookDocument", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return w.NotebookDocument;
		}, "get")
	}), Object.defineProperty(e, "NotebookDocumentSyncRegistrationType", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return w.NotebookDocumentSyncRegistrationType;
		}, "get")
	}), Object.defineProperty(e, "DidOpenNotebookDocumentNotification", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return w.DidOpenNotebookDocumentNotification;
		}, "get")
	}), Object.defineProperty(e, "NotebookCellArrayChange", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return w.NotebookCellArrayChange;
		}, "get")
	}), Object.defineProperty(e, "DidChangeNotebookDocumentNotification", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return w.DidChangeNotebookDocumentNotification;
		}, "get")
	}), Object.defineProperty(e, "DidSaveNotebookDocumentNotification", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return w.DidSaveNotebookDocumentNotification;
		}, "get")
	}), Object.defineProperty(e, "DidCloseNotebookDocumentNotification", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return w.DidCloseNotebookDocumentNotification;
		}, "get")
	});
	var ne = Qt();
	Object.defineProperty(e, "InlineCompletionRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return ne.InlineCompletionRequest;
		}, "get")
	});
	var re;
	(function(e) {
		function t(e) {
			let t = e;
			return r.string(t) || r.string(t.language) || r.string(t.scheme) || r.string(t.pattern);
		}
		o(t, "is"), e.is = t;
	})(re || (e.TextDocumentFilter = re = {}));
	var T;
	(function(e) {
		function t(e) {
			let t = e;
			return r.objectLiteral(t) && (r.string(t.notebookType) || r.string(t.scheme) || r.string(t.pattern));
		}
		o(t, "is"), e.is = t;
	})(T || (e.NotebookDocumentFilter = T = {}));
	var E;
	(function(e) {
		function t(e) {
			let t = e;
			return r.objectLiteral(t) && (r.string(t.notebook) || T.is(t.notebook)) && (t.language === void 0 || r.string(t.language));
		}
		o(t, "is"), e.is = t;
	})(E || (e.NotebookCellTextDocumentFilter = E = {}));
	var ie;
	(function(e) {
		function t(e) {
			if (!Array.isArray(e)) return !1;
			for (let t of e) if (!r.string(t) && !re.is(t) && !E.is(t)) return !1;
			return !0;
		}
		o(t, "is"), e.is = t;
	})(ie || (e.DocumentSelector = ie = {}));
	var ae;
	(function(e) {
		e.method = "client/registerCapability", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolRequestType(e.method);
	})(ae || (e.RegistrationRequest = ae = {}));
	var oe;
	(function(e) {
		e.method = "client/unregisterCapability", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolRequestType(e.method);
	})(oe || (e.UnregistrationRequest = oe = {}));
	var se;
	(function(e) {
		e.Create = "create", e.Rename = "rename", e.Delete = "delete";
	})(se || (e.ResourceOperationKind = se = {}));
	var ce;
	(function(e) {
		e.Abort = "abort", e.Transactional = "transactional", e.TextOnlyTransactional = "textOnlyTransactional", e.Undo = "undo";
	})(ce || (e.FailureHandlingKind = ce = {}));
	var D;
	(function(e) {
		e.UTF8 = "utf-8", e.UTF16 = "utf-16", e.UTF32 = "utf-32";
	})(D || (e.PositionEncodingKind = D = {}));
	var O;
	(function(e) {
		function t(e) {
			let t = e;
			return t && r.string(t.id) && t.id.length > 0;
		}
		o(t, "hasId"), e.hasId = t;
	})(O || (e.StaticRegistrationOptions = O = {}));
	var k;
	(function(e) {
		function t(e) {
			let t = e;
			return t && (t.documentSelector === null || ie.is(t.documentSelector));
		}
		o(t, "is"), e.is = t;
	})(k || (e.TextDocumentRegistrationOptions = k = {}));
	var le;
	(function(e) {
		function t(e) {
			let t = e;
			return r.objectLiteral(t) && (t.workDoneProgress === void 0 || r.boolean(t.workDoneProgress));
		}
		o(t, "is"), e.is = t;
		function n(e) {
			let t = e;
			return t && r.boolean(t.workDoneProgress);
		}
		o(n, "hasWorkDoneProgress"), e.hasWorkDoneProgress = n;
	})(le || (e.WorkDoneProgressOptions = le = {}));
	var A;
	(function(e) {
		e.method = "initialize", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(A || (e.InitializeRequest = A = {}));
	var ue;
	(function(e) {
		e.unknownProtocolVersion = 1;
	})(ue || (e.InitializeErrorCodes = ue = {}));
	var j;
	(function(e) {
		e.method = "initialized", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolNotificationType(e.method);
	})(j || (e.InitializedNotification = j = {}));
	var de;
	(function(e) {
		e.method = "shutdown", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType0(e.method);
	})(de || (e.ShutdownRequest = de = {}));
	var fe;
	(function(e) {
		e.method = "exit", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolNotificationType0(e.method);
	})(fe || (e.ExitNotification = fe = {}));
	var pe;
	(function(e) {
		e.method = "workspace/didChangeConfiguration", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolNotificationType(e.method);
	})(pe || (e.DidChangeConfigurationNotification = pe = {}));
	var me;
	(function(e) {
		e.Error = 1, e.Warning = 2, e.Info = 3, e.Log = 4, e.Debug = 5;
	})(me || (e.MessageType = me = {}));
	var he;
	(function(e) {
		e.method = "window/showMessage", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolNotificationType(e.method);
	})(he || (e.ShowMessageNotification = he = {}));
	var ge;
	(function(e) {
		e.method = "window/showMessageRequest", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolRequestType(e.method);
	})(ge || (e.ShowMessageRequest = ge = {}));
	var _e;
	(function(e) {
		e.method = "window/logMessage", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolNotificationType(e.method);
	})(_e || (e.LogMessageNotification = _e = {}));
	var ve;
	(function(e) {
		e.method = "telemetry/event", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolNotificationType(e.method);
	})(ve || (e.TelemetryEventNotification = ve = {}));
	var ye;
	(function(e) {
		e.None = 0, e.Full = 1, e.Incremental = 2;
	})(ye || (e.TextDocumentSyncKind = ye = {}));
	var be;
	(function(e) {
		e.method = "textDocument/didOpen", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolNotificationType(e.method);
	})(be || (e.DidOpenTextDocumentNotification = be = {}));
	var xe;
	(function(e) {
		function t(e) {
			let t = e;
			return t != null && typeof t.text == "string" && t.range !== void 0 && (t.rangeLength === void 0 || typeof t.rangeLength == "number");
		}
		o(t, "isIncremental"), e.isIncremental = t;
		function n(e) {
			let t = e;
			return t != null && typeof t.text == "string" && t.range === void 0 && t.rangeLength === void 0;
		}
		o(n, "isFull"), e.isFull = n;
	})(xe || (e.TextDocumentContentChangeEvent = xe = {}));
	var Se;
	(function(e) {
		e.method = "textDocument/didChange", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolNotificationType(e.method);
	})(Se || (e.DidChangeTextDocumentNotification = Se = {}));
	var Ce;
	(function(e) {
		e.method = "textDocument/didClose", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolNotificationType(e.method);
	})(Ce || (e.DidCloseTextDocumentNotification = Ce = {}));
	var we;
	(function(e) {
		e.method = "textDocument/didSave", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolNotificationType(e.method);
	})(we || (e.DidSaveTextDocumentNotification = we = {}));
	var Te;
	(function(e) {
		e.Manual = 1, e.AfterDelay = 2, e.FocusOut = 3;
	})(Te || (e.TextDocumentSaveReason = Te = {}));
	var Ee;
	(function(e) {
		e.method = "textDocument/willSave", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolNotificationType(e.method);
	})(Ee || (e.WillSaveTextDocumentNotification = Ee = {}));
	var De;
	(function(e) {
		e.method = "textDocument/willSaveWaitUntil", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(De || (e.WillSaveTextDocumentWaitUntilRequest = De = {}));
	var Oe;
	(function(e) {
		e.method = "workspace/didChangeWatchedFiles", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolNotificationType(e.method);
	})(Oe || (e.DidChangeWatchedFilesNotification = Oe = {}));
	var ke;
	(function(e) {
		e.Created = 1, e.Changed = 2, e.Deleted = 3;
	})(ke || (e.FileChangeType = ke = {}));
	var Ae;
	(function(e) {
		function t(e) {
			let t = e;
			return r.objectLiteral(t) && (n.URI.is(t.baseUri) || n.WorkspaceFolder.is(t.baseUri)) && r.string(t.pattern);
		}
		o(t, "is"), e.is = t;
	})(Ae || (e.RelativePattern = Ae = {}));
	var je;
	(function(e) {
		e.Create = 1, e.Change = 2, e.Delete = 4;
	})(je || (e.WatchKind = je = {}));
	var Me;
	(function(e) {
		e.method = "textDocument/publishDiagnostics", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolNotificationType(e.method);
	})(Me || (e.PublishDiagnosticsNotification = Me = {}));
	var Ne;
	(function(e) {
		e.Invoked = 1, e.TriggerCharacter = 2, e.TriggerForIncompleteCompletions = 3;
	})(Ne || (e.CompletionTriggerKind = Ne = {}));
	var Pe;
	(function(e) {
		e.method = "textDocument/completion", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(Pe || (e.CompletionRequest = Pe = {}));
	var Fe;
	(function(e) {
		e.method = "completionItem/resolve", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(Fe || (e.CompletionResolveRequest = Fe = {}));
	var Ie;
	(function(e) {
		e.method = "textDocument/hover", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(Ie || (e.HoverRequest = Ie = {}));
	var Le;
	(function(e) {
		e.Invoked = 1, e.TriggerCharacter = 2, e.ContentChange = 3;
	})(Le || (e.SignatureHelpTriggerKind = Le = {}));
	var Re;
	(function(e) {
		e.method = "textDocument/signatureHelp", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(Re || (e.SignatureHelpRequest = Re = {}));
	var ze;
	(function(e) {
		e.method = "textDocument/definition", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(ze || (e.DefinitionRequest = ze = {}));
	var Be;
	(function(e) {
		e.method = "textDocument/references", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(Be || (e.ReferencesRequest = Be = {}));
	var Ve;
	(function(e) {
		e.method = "textDocument/documentHighlight", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(Ve || (e.DocumentHighlightRequest = Ve = {}));
	var He;
	(function(e) {
		e.method = "textDocument/documentSymbol", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(He || (e.DocumentSymbolRequest = He = {}));
	var Ue;
	(function(e) {
		e.method = "textDocument/codeAction", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(Ue || (e.CodeActionRequest = Ue = {}));
	var We;
	(function(e) {
		e.method = "codeAction/resolve", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(We || (e.CodeActionResolveRequest = We = {}));
	var Ge;
	(function(e) {
		e.method = "workspace/symbol", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(Ge || (e.WorkspaceSymbolRequest = Ge = {}));
	var Ke;
	(function(e) {
		e.method = "workspaceSymbol/resolve", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(Ke || (e.WorkspaceSymbolResolveRequest = Ke = {}));
	var qe;
	(function(e) {
		e.method = "textDocument/codeLens", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(qe || (e.CodeLensRequest = qe = {}));
	var Je;
	(function(e) {
		e.method = "codeLens/resolve", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(Je || (e.CodeLensResolveRequest = Je = {}));
	var Ye;
	(function(e) {
		e.method = "workspace/codeLens/refresh", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolRequestType0(e.method);
	})(Ye || (e.CodeLensRefreshRequest = Ye = {}));
	var Xe;
	(function(e) {
		e.method = "textDocument/documentLink", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(Xe || (e.DocumentLinkRequest = Xe = {}));
	var Ze;
	(function(e) {
		e.method = "documentLink/resolve", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(Ze || (e.DocumentLinkResolveRequest = Ze = {}));
	var Qe;
	(function(e) {
		e.method = "textDocument/formatting", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(Qe || (e.DocumentFormattingRequest = Qe = {}));
	var $e;
	(function(e) {
		e.method = "textDocument/rangeFormatting", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})($e || (e.DocumentRangeFormattingRequest = $e = {}));
	var et;
	(function(e) {
		e.method = "textDocument/rangesFormatting", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(et || (e.DocumentRangesFormattingRequest = et = {}));
	var tt;
	(function(e) {
		e.method = "textDocument/onTypeFormatting", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(tt || (e.DocumentOnTypeFormattingRequest = tt = {}));
	var nt;
	(function(e) {
		e.Identifier = 1;
	})(nt || (e.PrepareSupportDefaultBehavior = nt = {}));
	var rt;
	(function(e) {
		e.method = "textDocument/rename", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(rt || (e.RenameRequest = rt = {}));
	var it;
	(function(e) {
		e.method = "textDocument/prepareRename", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(it || (e.PrepareRenameRequest = it = {}));
	var at;
	(function(e) {
		e.method = "workspace/executeCommand", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(at || (e.ExecuteCommandRequest = at = {}));
	var ot;
	(function(e) {
		e.method = "workspace/applyEdit", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolRequestType("workspace/applyEdit");
	})(ot || (e.ApplyWorkspaceEditRequest = ot = {}));
} }), en = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/connection.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.createProtocolConnection = void 0;
	var t = kt();
	function n(e, n, r, i) {
		return t.ConnectionStrategy.is(i) && (i = { connectionStrategy: i }), (0, t.createMessageConnection)(e, n, r, i);
	}
	o(n, "createProtocolConnection"), e.createProtocolConnection = n;
} }), tn = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/api.js"(e) {
	var t = e && e.__createBinding || (Object.create ? function(e, t, n, r) {
		r === void 0 && (r = n);
		var i = Object.getOwnPropertyDescriptor(t, n);
		(!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
			enumerable: !0,
			get: /* @__PURE__ */ o(function() {
				return t[n];
			}, "get")
		}), Object.defineProperty(e, r, i);
	} : function(e, t, n, r) {
		r === void 0 && (r = n), e[r] = t[n];
	}), n = e && e.__exportStar || function(e, n) {
		for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.LSPErrorCodes = e.createProtocolConnection = void 0, n(kt(), e), n((pt(), p(m)), e), n(N(), e), n($t(), e);
	var r = en();
	Object.defineProperty(e, "createProtocolConnection", {
		enumerable: !0,
		get: /* @__PURE__ */ o(function() {
			return r.createProtocolConnection;
		}, "get")
	});
	var i;
	(function(e) {
		e.lspReservedErrorRangeStart = -32899, e.RequestFailed = -32803, e.ServerCancelled = -32802, e.ContentModified = -32801, e.RequestCancelled = -32800, e.lspReservedErrorRangeEnd = -32800;
	})(i || (e.LSPErrorCodes = i = {}));
} }), nn = c({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/browser/main.js"(e) {
	var t = e && e.__createBinding || (Object.create ? function(e, t, n, r) {
		r === void 0 && (r = n);
		var i = Object.getOwnPropertyDescriptor(t, n);
		(!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
			enumerable: !0,
			get: /* @__PURE__ */ o(function() {
				return t[n];
			}, "get")
		}), Object.defineProperty(e, r, i);
	} : function(e, t, n, r) {
		r === void 0 && (r = n), e[r] = t[n];
	}), n = e && e.__exportStar || function(e, n) {
		for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.createProtocolConnection = void 0;
	var r = At();
	n(At(), e), n(tn(), e);
	function i(e, t, n, i) {
		return (0, r.createMessageConnection)(e, t, n, i);
	}
	o(i, "createProtocolConnection"), e.createProtocolConnection = i;
} }), rn = {};
l(rn, {
	AbstractAstReflection: () => fn,
	AbstractCstNode: () => aM,
	AbstractLangiumParser: () => yM,
	AbstractParserErrorMessageProvider: () => CM,
	AbstractThreadedAsyncParser: () => RF,
	AstUtils: () => Tn,
	BiMap: () => WN,
	Cancellation: () => X,
	CompositeCstNodeImpl: () => lM,
	ContextCache: () => aP,
	CstNodeBuilder: () => rM,
	CstUtils: () => an,
	DEFAULT_TOKENIZE_OPTIONS: () => JP,
	DONE_RESULT: () => xn,
	DatatypeSymbol: () => mM,
	DefaultAstNodeDescriptionProvider: () => AP,
	DefaultAstNodeLocator: () => PP,
	DefaultAsyncParser: () => IF,
	DefaultCommentProvider: () => PF,
	DefaultConfigurationProvider: () => LP,
	DefaultDocumentBuilder: () => VP,
	DefaultDocumentValidator: () => wP,
	DefaultHydrator: () => WF,
	DefaultIndexManager: () => UP,
	DefaultJsonSerializer: () => hP,
	DefaultLangiumDocumentFactory: () => AN,
	DefaultLangiumDocuments: () => MN,
	DefaultLangiumProfiler: () => hI,
	DefaultLexer: () => XP,
	DefaultLexerErrorMessageProvider: () => qP,
	DefaultLinker: () => FN,
	DefaultNameProvider: () => RN,
	DefaultReferenceDescriptionProvider: () => MP,
	DefaultReferences: () => BN,
	DefaultScopeComputation: () => KN,
	DefaultScopeProvider: () => dP,
	DefaultServiceRegistry: () => _P,
	DefaultTokenBuilder: () => tN,
	DefaultValueConverter: () => rN,
	DefaultWorkspaceLock: () => HF,
	DefaultWorkspaceManager: () => GP,
	Deferred: () => mN,
	Disposable: () => zP,
	DisposableCache: () => tP,
	DocumentCache: () => sP,
	DocumentState: () => Z,
	DocumentValidator: () => OP,
	EMPTY_SCOPE: () => $N,
	EMPTY_STREAM: () => bn,
	EmptyFileSystem: () => lI,
	EmptyFileSystemProvider: () => cI,
	ErrorWithLocation: () => ca,
	GrammarAST: () => Bn,
	GrammarUtils: () => oa,
	IndentationAwareLexer: () => aI,
	IndentationAwareTokenBuilder: () => rI,
	JSDocDocumentationProvider: () => MF,
	LangiumCompletionParser: () => DM,
	LangiumParser: () => xM,
	LangiumParserErrorMessageProvider: () => TM,
	LeafCstNodeImpl: () => sM,
	LexingMode: () => tI,
	MapScope: () => XN,
	Module: () => qF,
	MultiMap: () => HN,
	MultiMapScope: () => QN,
	OperationCancelled: () => uN,
	ParserWorker: () => BF,
	ProfilingTask: () => _I,
	Reduction: () => wn,
	RefResolving: () => NN,
	RegExpUtils: () => da,
	RootCstNodeImpl: () => pM,
	SimpleCache: () => rP,
	StreamImpl: () => _n,
	StreamScope: () => JN,
	TextDocument: () => _N,
	TreeStreamImpl: () => Cn,
	URI: () => wN,
	UriTrie: () => ON,
	UriUtils: () => EN,
	VALIDATE_EACH_NODE: () => SP,
	ValidationCategory: () => yP,
	ValidationRegistry: () => xP,
	ValueConverter: () => iN,
	WorkspaceCache: () => lP,
	assertCondition: () => ua,
	assertUnreachable: () => la,
	createCompletionParser: () => ZM,
	createDefaultCoreModule: () => GF,
	createDefaultSharedCoreModule: () => KF,
	createGrammarConfig: () => wo,
	createLangiumParser: () => QM,
	createParser: () => NM,
	delayNextTick: () => aN,
	diagnosticData: () => vP,
	eagerLoad: () => YF,
	getDiagnosticRange: () => TP,
	indentationBuilderDefaultOptions: () => eI,
	inject: () => Q,
	interruptAndCheck: () => fN,
	isAstNode: () => on,
	isAstNodeDescription: () => ln,
	isAstNodeWithComment: () => fP,
	isCompositeCstNode: () => pn,
	isIMultiModeLexerDefinition: () => QP,
	isJSDoc: () => tF,
	isLeafCstNode: () => mn,
	isLinkingError: () => un,
	isMultiReference: () => cn,
	isNamed: () => IN,
	isOperationCancelled: () => dN,
	isReference: () => sn,
	isRootCstNode: () => hn,
	isTokenTypeArray: () => ZP,
	isTokenTypeDictionary: () => $P,
	loadGrammarFromJson: () => pI,
	parseJSDoc: () => eF,
	prepareLangiumParser: () => $M,
	setInterruptionPeriod: () => lN,
	startCancelableOperation: () => cN,
	stream: () => P,
	toDiagnosticData: () => DP,
	toDiagnosticSeverity: () => EP
});
var an = {};
l(an, {
	DefaultNameRegexp: () => qi,
	RangeComparison: () => Wi,
	compareRange: () => Gi,
	findCommentNode: () => Yi,
	findDeclarationNodeAtOffset: () => Ji,
	findLeafNodeAtOffset: () => Zi,
	findLeafNodeBeforeOffset: () => Qi,
	flattenCst: () => Bi,
	getDatatypeNode: () => Ri,
	getInteriorNodes: () => ra,
	getNextNode: () => ta,
	getPreviousNode: () => ea,
	getStartlineNode: () => na,
	inRange: () => Ki,
	isChildNode: () => Vi,
	isCommentNode: () => Xi,
	streamCst: () => zi,
	toDocumentSegment: () => Ui,
	tokenToRange: () => Hi
});
function on(e) {
	return typeof e == "object" && !!e && typeof e.$type == "string";
}
o(on, "isAstNode");
function sn(e) {
	return typeof e == "object" && !!e && typeof e.$refText == "string" && "ref" in e;
}
o(sn, "isReference");
function cn(e) {
	return typeof e == "object" && !!e && typeof e.$refText == "string" && "items" in e;
}
o(cn, "isMultiReference");
function ln(e) {
	return typeof e == "object" && !!e && typeof e.name == "string" && typeof e.type == "string" && typeof e.path == "string";
}
o(ln, "isAstNodeDescription");
function un(e) {
	return typeof e == "object" && !!e && typeof e.info == "object" && typeof e.message == "string";
}
o(un, "isLinkingError");
var dn, fn = (dn = class {
	constructor() {
		this.subtypes = {}, this.allSubtypes = {};
	}
	getAllTypes() {
		return Object.keys(this.types);
	}
	getReferenceType(e) {
		let t = this.types[e.container.$type];
		if (!t) throw Error(`Type ${e.container.$type || "undefined"} not found.`);
		let n = t.properties[e.property]?.referenceType;
		if (!n) throw Error(`Property ${e.property || "undefined"} of type ${e.container.$type} is not a reference.`);
		return n;
	}
	getTypeMetaData(e) {
		return this.types[e] || {
			name: e,
			properties: {},
			superTypes: []
		};
	}
	isInstance(e, t) {
		return on(e) && this.isSubtype(e.$type, t);
	}
	isSubtype(e, t) {
		if (e === t) return !0;
		let n = this.subtypes[e];
		n ||= this.subtypes[e] = {};
		let r = n[t];
		if (r !== void 0) return r;
		{
			let r = this.types[e], i = r ? r.superTypes.some((e) => this.isSubtype(e, t)) : !1;
			return n[t] = i, i;
		}
	}
	getAllSubTypes(e) {
		let t = this.allSubtypes[e];
		if (t) return t;
		{
			let t = this.getAllTypes(), n = [];
			for (let r of t) this.isSubtype(r, e) && n.push(r);
			return this.allSubtypes[e] = n, n;
		}
	}
}, o(dn, "AbstractAstReflection"), dn);
function pn(e) {
	return typeof e == "object" && !!e && Array.isArray(e.content);
}
o(pn, "isCompositeCstNode");
function mn(e) {
	return typeof e == "object" && !!e && typeof e.tokenType == "object";
}
o(mn, "isLeafCstNode");
function hn(e) {
	return pn(e) && typeof e.fullText == "string";
}
o(hn, "isRootCstNode");
var gn, _n = (gn = class {
	constructor(e, t) {
		this.startFn = e, this.nextFn = t;
	}
	iterator() {
		let e = {
			state: this.startFn(),
			next: /* @__PURE__ */ o(() => this.nextFn(e.state), "next"),
			[Symbol.iterator]: () => e
		};
		return e;
	}
	[Symbol.iterator]() {
		return this.iterator();
	}
	isEmpty() {
		return !!this.iterator().next().done;
	}
	count() {
		let e = this.iterator(), t = 0, n = e.next();
		for (; !n.done;) t++, n = e.next();
		return t;
	}
	toArray() {
		let e = [], t = this.iterator(), n;
		do
			n = t.next(), n.value !== void 0 && e.push(n.value);
		while (!n.done);
		return e;
	}
	toSet() {
		return new Set(this);
	}
	toMap(e, t) {
		let n = this.map((n) => [e ? e(n) : n, t ? t(n) : n]);
		return new Map(n);
	}
	toString() {
		return this.join();
	}
	concat(e) {
		return new gn(() => ({
			first: this.startFn(),
			firstDone: !1,
			iterator: e[Symbol.iterator]()
		}), (e) => {
			let t;
			if (!e.firstDone) {
				do
					if (t = this.nextFn(e.first), !t.done) return t;
				while (!t.done);
				e.firstDone = !0;
			}
			do
				if (t = e.iterator.next(), !t.done) return t;
			while (!t.done);
			return xn;
		});
	}
	join(e = ",") {
		let t = this.iterator(), n = "", r, i = !1;
		do
			r = t.next(), r.done || (i && (n += e), n += vn(r.value)), i = !0;
		while (!r.done);
		return n;
	}
	indexOf(e, t = 0) {
		let n = this.iterator(), r = 0, i = n.next();
		for (; !i.done;) {
			if (r >= t && i.value === e) return r;
			i = n.next(), r++;
		}
		return -1;
	}
	every(e) {
		let t = this.iterator(), n = t.next();
		for (; !n.done;) {
			if (!e(n.value)) return !1;
			n = t.next();
		}
		return !0;
	}
	some(e) {
		let t = this.iterator(), n = t.next();
		for (; !n.done;) {
			if (e(n.value)) return !0;
			n = t.next();
		}
		return !1;
	}
	forEach(e) {
		let t = this.iterator(), n = 0, r = t.next();
		for (; !r.done;) e(r.value, n), r = t.next(), n++;
	}
	map(e) {
		return new gn(this.startFn, (t) => {
			let { done: n, value: r } = this.nextFn(t);
			return n ? xn : {
				done: !1,
				value: e(r)
			};
		});
	}
	filter(e) {
		return new gn(this.startFn, (t) => {
			let n;
			do
				if (n = this.nextFn(t), !n.done && e(n.value)) return n;
			while (!n.done);
			return xn;
		});
	}
	nonNullable() {
		return this.filter((e) => e != null);
	}
	reduce(e, t) {
		let n = this.iterator(), r = t, i = n.next();
		for (; !i.done;) r = r === void 0 ? i.value : e(r, i.value), i = n.next();
		return r;
	}
	reduceRight(e, t) {
		return this.recursiveReduce(this.iterator(), e, t);
	}
	recursiveReduce(e, t, n) {
		let r = e.next();
		if (r.done) return n;
		let i = this.recursiveReduce(e, t, n);
		return i === void 0 ? r.value : t(i, r.value);
	}
	find(e) {
		let t = this.iterator(), n = t.next();
		for (; !n.done;) {
			if (e(n.value)) return n.value;
			n = t.next();
		}
	}
	findIndex(e) {
		let t = this.iterator(), n = 0, r = t.next();
		for (; !r.done;) {
			if (e(r.value)) return n;
			r = t.next(), n++;
		}
		return -1;
	}
	includes(e) {
		let t = this.iterator(), n = t.next();
		for (; !n.done;) {
			if (n.value === e) return !0;
			n = t.next();
		}
		return !1;
	}
	flatMap(e) {
		return new gn(() => ({ this: this.startFn() }), (t) => {
			do {
				if (t.iterator) {
					let e = t.iterator.next();
					if (e.done) t.iterator = void 0;
					else return e;
				}
				let { done: n, value: r } = this.nextFn(t.this);
				if (!n) {
					let n = e(r);
					if (yn(n)) t.iterator = n[Symbol.iterator]();
					else return {
						done: !1,
						value: n
					};
				}
			} while (t.iterator);
			return xn;
		});
	}
	flat(e) {
		if (e === void 0 && (e = 1), e <= 0) return this;
		let t = e > 1 ? this.flat(e - 1) : this;
		return new gn(() => ({ this: t.startFn() }), (e) => {
			do {
				if (e.iterator) {
					let t = e.iterator.next();
					if (t.done) e.iterator = void 0;
					else return t;
				}
				let { done: n, value: r } = t.nextFn(e.this);
				if (!n) {
					if (yn(r)) e.iterator = r[Symbol.iterator]();
					else return {
						done: !1,
						value: r
					};
				}
			} while (e.iterator);
			return xn;
		});
	}
	head() {
		let e = this.iterator().next();
		if (!e.done) return e.value;
	}
	tail(e = 1) {
		return new gn(() => {
			let t = this.startFn();
			for (let n = 0; n < e; n++) if (this.nextFn(t).done) return t;
			return t;
		}, this.nextFn);
	}
	limit(e) {
		return new gn(() => ({
			size: 0,
			state: this.startFn()
		}), (t) => (t.size++, t.size > e ? xn : this.nextFn(t.state)));
	}
	distinct(e) {
		return new gn(() => ({
			set: /* @__PURE__ */ new Set(),
			internalState: this.startFn()
		}), (t) => {
			let n;
			do
				if (n = this.nextFn(t.internalState), !n.done) {
					let r = e ? e(n.value) : n.value;
					if (!t.set.has(r)) return t.set.add(r), n;
				}
			while (!n.done);
			return xn;
		});
	}
	exclude(e, t) {
		let n = /* @__PURE__ */ new Set();
		for (let r of e) {
			let e = t ? t(r) : r;
			n.add(e);
		}
		return this.filter((e) => {
			let r = t ? t(e) : e;
			return !n.has(r);
		});
	}
}, o(gn, "StreamImpl"), gn);
function vn(e) {
	return typeof e == "string" ? e : typeof e > "u" ? "undefined" : typeof e.toString == "function" ? e.toString() : Object.prototype.toString.call(e);
}
o(vn, "toString");
function yn(e) {
	return !!e && typeof e[Symbol.iterator] == "function";
}
o(yn, "isIterable");
var bn = new _n(() => {}, () => xn), xn = Object.freeze({
	done: !0,
	value: void 0
});
function P(...e) {
	if (e.length === 1) {
		let t = e[0];
		if (t instanceof _n) return t;
		if (yn(t)) return new _n(() => t[Symbol.iterator](), (e) => e.next());
		if (typeof t.length == "number") return new _n(() => ({ index: 0 }), (e) => e.index < t.length ? {
			done: !1,
			value: t[e.index++]
		} : xn);
	}
	return e.length > 1 ? new _n(() => ({
		collIndex: 0,
		arrIndex: 0
	}), (t) => {
		do {
			if (t.iterator) {
				let e = t.iterator.next();
				if (!e.done) return e;
				t.iterator = void 0;
			}
			if (t.array) {
				if (t.arrIndex < t.array.length) return {
					done: !1,
					value: t.array[t.arrIndex++]
				};
				t.array = void 0, t.arrIndex = 0;
			}
			if (t.collIndex < e.length) {
				let n = e[t.collIndex++];
				yn(n) ? t.iterator = n[Symbol.iterator]() : n && typeof n.length == "number" && (t.array = n);
			}
		} while (t.iterator || t.array || t.collIndex < e.length);
		return xn;
	}) : bn;
}
o(P, "stream");
var Sn, Cn = (Sn = class extends _n {
	constructor(e, t, n) {
		super(() => ({
			iterators: n?.includeRoot ? [[e][Symbol.iterator]()] : [t(e)[Symbol.iterator]()],
			pruned: !1
		}), (e) => {
			for (e.pruned &&= (e.iterators.pop(), !1); e.iterators.length > 0;) {
				let n = e.iterators[e.iterators.length - 1].next();
				if (n.done) e.iterators.pop();
				else return e.iterators.push(t(n.value)[Symbol.iterator]()), n;
			}
			return xn;
		});
	}
	iterator() {
		let e = {
			state: this.startFn(),
			next: /* @__PURE__ */ o(() => this.nextFn(e.state), "next"),
			prune: /* @__PURE__ */ o(() => {
				e.state.pruned = !0;
			}, "prune"),
			[Symbol.iterator]: () => e
		};
		return e;
	}
}, o(Sn, "TreeStreamImpl"), Sn), wn;
(function(e) {
	function t(e) {
		return e.reduce((e, t) => e + t, 0);
	}
	o(t, "sum"), e.sum = t;
	function n(e) {
		return e.reduce((e, t) => e * t, 0);
	}
	o(n, "product"), e.product = n;
	function r(e) {
		return e.reduce((e, t) => Math.min(e, t));
	}
	o(r, "min"), e.min = r;
	function i(e) {
		return e.reduce((e, t) => Math.max(e, t));
	}
	o(i, "max"), e.max = i;
})(wn ||= {});
var Tn = {};
l(Tn, {
	assignMandatoryProperties: () => Ln,
	copyAstNode: () => zn,
	findRootNode: () => An,
	getContainerOfType: () => Dn,
	getDocument: () => kn,
	getReferenceNodes: () => jn,
	hasContainerOfType: () => On,
	linkContentToContainer: () => En,
	streamAllContents: () => Nn,
	streamAst: () => Pn,
	streamContents: () => Mn,
	streamReferences: () => In
});
function En(e, t = {}) {
	for (let [n, r] of Object.entries(e)) n.startsWith("$") || (Array.isArray(r) ? r.forEach((r, i) => {
		on(r) && (r.$container = e, r.$containerProperty = n, r.$containerIndex = i, t.deep && En(r, t));
	}) : on(r) && (r.$container = e, r.$containerProperty = n, t.deep && En(r, t)));
}
o(En, "linkContentToContainer");
function Dn(e, t) {
	let n = e;
	for (; n;) {
		if (t(n)) return n;
		n = n.$container;
	}
}
o(Dn, "getContainerOfType");
function On(e, t) {
	let n = e;
	for (; n;) {
		if (t(n)) return !0;
		n = n.$container;
	}
	return !1;
}
o(On, "hasContainerOfType");
function kn(e) {
	let t = An(e).$document;
	if (!t) throw Error("AST node has no document.");
	return t;
}
o(kn, "getDocument");
function An(e) {
	for (; e.$container;) e = e.$container;
	return e;
}
o(An, "findRootNode");
function jn(e) {
	return sn(e) ? e.ref ? [e.ref] : [] : cn(e) ? e.items.map((e) => e.ref) : [];
}
o(jn, "getReferenceNodes");
function Mn(e, t) {
	if (!e) throw Error("Node must be an AstNode.");
	let n = t?.range;
	return new _n(() => ({
		keys: Object.keys(e),
		keyIndex: 0,
		arrayIndex: 0
	}), (t) => {
		for (; t.keyIndex < t.keys.length;) {
			let r = t.keys[t.keyIndex];
			if (!r.startsWith("$")) {
				let i = e[r];
				if (on(i)) {
					if (t.keyIndex++, Fn(i, n)) return {
						done: !1,
						value: i
					};
				} else if (Array.isArray(i)) {
					for (; t.arrayIndex < i.length;) {
						let e = i[t.arrayIndex++];
						if (on(e) && Fn(e, n)) return {
							done: !1,
							value: e
						};
					}
					t.arrayIndex = 0;
				}
			}
			t.keyIndex++;
		}
		return xn;
	});
}
o(Mn, "streamContents");
function Nn(e, t) {
	if (!e) throw Error("Root node must be an AstNode.");
	return new Cn(e, (e) => Mn(e, t));
}
o(Nn, "streamAllContents");
function Pn(e, t) {
	if (e) {
		if (t?.range && !Fn(e, t.range)) return new Cn(e, () => []);
	} else throw Error("Root node must be an AstNode.");
	return new Cn(e, (e) => Mn(e, t), { includeRoot: !0 });
}
o(Pn, "streamAst");
function Fn(e, t) {
	if (!t) return !0;
	let n = e.$cstNode?.range;
	return n ? Ki(n, t) : !1;
}
o(Fn, "isAstNodeInRange");
function In(e) {
	return new _n(() => ({
		keys: Object.keys(e),
		keyIndex: 0,
		arrayIndex: 0
	}), (t) => {
		for (; t.keyIndex < t.keys.length;) {
			let n = t.keys[t.keyIndex];
			if (!n.startsWith("$")) {
				let r = e[n];
				if (sn(r) || cn(r)) return t.keyIndex++, {
					done: !1,
					value: {
						reference: r,
						container: e,
						property: n
					}
				};
				if (Array.isArray(r)) {
					for (; t.arrayIndex < r.length;) {
						let i = t.arrayIndex++, a = r[i];
						if (sn(a) || cn(r)) return {
							done: !1,
							value: {
								reference: a,
								container: e,
								property: n,
								index: i
							}
						};
					}
					t.arrayIndex = 0;
				}
			}
			t.keyIndex++;
		}
		return xn;
	});
}
o(In, "streamReferences");
function Ln(e, t) {
	let n = e.getTypeMetaData(t.$type), r = t;
	for (let e of Object.values(n.properties)) e.defaultValue !== void 0 && r[e.name] === void 0 && (r[e.name] = Rn(e.defaultValue));
}
o(Ln, "assignMandatoryProperties");
function Rn(e) {
	return Array.isArray(e) ? [...e.map(Rn)] : e;
}
o(Rn, "copyDefaultValue");
function zn(e, t, n) {
	let r = { $type: e.$type };
	n && (n.set(e, r), n.set(r, e));
	for (let [i, a] of Object.entries(e)) if (!i.startsWith("$")) {
		if (on(a)) r[i] = zn(a, t, n);
		else if (sn(a)) r[i] = t(r, i, a.$refNode, a.$refText, a);
		else if (Array.isArray(a)) {
			let e = [];
			for (let o of a) on(o) ? e.push(zn(o, t, n)) : sn(o) ? e.push(t(r, i, o.$refNode, o.$refText, o)) : e.push(o);
			r[i] = e;
		} else r[i] = a;
	}
	return En(r, { deep: !0 }), r;
}
o(zn, "copyAstNode");
var Bn = {};
l(Bn, {
	AbstractElement: () => Hn,
	AbstractParserRule: () => Wn,
	AbstractRule: () => Kn,
	AbstractType: () => Jn,
	Action: () => Xn,
	Alternatives: () => Qn,
	ArrayLiteral: () => er,
	ArrayType: () => nr,
	Assignment: () => ir,
	BooleanLiteral: () => or,
	CharacterRange: () => cr,
	Condition: () => ur,
	Conjunction: () => fr,
	CrossReference: () => mr,
	Disjunction: () => gr,
	EndOfFile: () => vr,
	Grammar: () => br,
	GrammarImport: () => Sr,
	Group: () => wr,
	InferredType: () => Er,
	InfixRule: () => Or,
	InfixRuleOperatorList: () => Ar,
	InfixRuleOperators: () => Mr,
	Interface: () => Pr,
	Keyword: () => Ir,
	LangiumGrammarAstReflection: () => Li,
	LangiumGrammarTerminals: () => Vn,
	NamedArgument: () => Rr,
	NegatedToken: () => Br,
	Negation: () => Hr,
	NumberLiteral: () => Wr,
	Parameter: () => Kr,
	ParameterReference: () => Jr,
	ParserRule: () => Xr,
	ReferenceType: () => Qr,
	RegexToken: () => ei,
	ReturnType: () => ni,
	RuleCall: () => ii,
	SimpleType: () => oi,
	StringLiteral: () => ci,
	TerminalAlternatives: () => ui,
	TerminalElement: () => fi,
	TerminalGroup: () => mi,
	TerminalRule: () => gi,
	TerminalRuleCall: () => vi,
	Type: () => bi,
	TypeAttribute: () => Si,
	TypeDefinition: () => wi,
	UnionType: () => Ei,
	UnorderedGroup: () => Oi,
	UntilToken: () => Ai,
	ValueLiteral: () => Mi,
	Wildcard: () => Pi,
	isAbstractElement: () => Un,
	isAbstractParserRule: () => Gn,
	isAbstractRule: () => qn,
	isAbstractType: () => Yn,
	isAction: () => Zn,
	isAlternatives: () => $n,
	isArrayLiteral: () => tr,
	isArrayType: () => rr,
	isAssignment: () => ar,
	isBooleanLiteral: () => sr,
	isCharacterRange: () => lr,
	isCondition: () => dr,
	isConjunction: () => pr,
	isCrossReference: () => hr,
	isDisjunction: () => _r,
	isEndOfFile: () => yr,
	isGrammar: () => xr,
	isGrammarImport: () => Cr,
	isGroup: () => Tr,
	isInferredType: () => Dr,
	isInfixRule: () => kr,
	isInfixRuleOperatorList: () => jr,
	isInfixRuleOperators: () => Nr,
	isInterface: () => Fr,
	isKeyword: () => Lr,
	isNamedArgument: () => zr,
	isNegatedToken: () => Vr,
	isNegation: () => Ur,
	isNumberLiteral: () => Gr,
	isParameter: () => qr,
	isParameterReference: () => Yr,
	isParserRule: () => Zr,
	isReferenceType: () => $r,
	isRegexToken: () => ti,
	isReturnType: () => ri,
	isRuleCall: () => ai,
	isSimpleType: () => si,
	isStringLiteral: () => li,
	isTerminalAlternatives: () => di,
	isTerminalElement: () => pi,
	isTerminalGroup: () => hi,
	isTerminalRule: () => _i,
	isTerminalRuleCall: () => yi,
	isType: () => xi,
	isTypeAttribute: () => Ci,
	isTypeDefinition: () => Ti,
	isUnionType: () => Di,
	isUnorderedGroup: () => ki,
	isUntilToken: () => ji,
	isValueLiteral: () => Ni,
	isWildcard: () => Fi,
	reflection: () => F
});
var Vn = {
	ID: /\^?[_a-zA-Z][\w_]*/,
	STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/,
	NUMBER: /NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)/,
	RegexLiteral: /\/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\/[a-z]*/,
	WS: /\s+/,
	ML_COMMENT: /\/\*[\s\S]*?\*\//,
	SL_COMMENT: /\/\/[^\n\r]*/
}, Hn = {
	$type: "AbstractElement",
	cardinality: "cardinality"
};
function Un(e) {
	return F.isInstance(e, Hn.$type);
}
o(Un, "isAbstractElement");
var Wn = { $type: "AbstractParserRule" };
function Gn(e) {
	return F.isInstance(e, Wn.$type);
}
o(Gn, "isAbstractParserRule");
var Kn = { $type: "AbstractRule" };
function qn(e) {
	return F.isInstance(e, Kn.$type);
}
o(qn, "isAbstractRule");
var Jn = { $type: "AbstractType" };
function Yn(e) {
	return F.isInstance(e, Jn.$type);
}
o(Yn, "isAbstractType");
var Xn = {
	$type: "Action",
	cardinality: "cardinality",
	feature: "feature",
	inferredType: "inferredType",
	operator: "operator",
	type: "type"
};
function Zn(e) {
	return F.isInstance(e, Xn.$type);
}
o(Zn, "isAction");
var Qn = {
	$type: "Alternatives",
	cardinality: "cardinality",
	elements: "elements"
};
function $n(e) {
	return F.isInstance(e, Qn.$type);
}
o($n, "isAlternatives");
var er = {
	$type: "ArrayLiteral",
	elements: "elements"
};
function tr(e) {
	return F.isInstance(e, er.$type);
}
o(tr, "isArrayLiteral");
var nr = {
	$type: "ArrayType",
	elementType: "elementType"
};
function rr(e) {
	return F.isInstance(e, nr.$type);
}
o(rr, "isArrayType");
var ir = {
	$type: "Assignment",
	cardinality: "cardinality",
	feature: "feature",
	operator: "operator",
	predicate: "predicate",
	terminal: "terminal"
};
function ar(e) {
	return F.isInstance(e, ir.$type);
}
o(ar, "isAssignment");
var or = {
	$type: "BooleanLiteral",
	true: "true"
};
function sr(e) {
	return F.isInstance(e, or.$type);
}
o(sr, "isBooleanLiteral");
var cr = {
	$type: "CharacterRange",
	cardinality: "cardinality",
	left: "left",
	lookahead: "lookahead",
	parenthesized: "parenthesized",
	right: "right"
};
function lr(e) {
	return F.isInstance(e, cr.$type);
}
o(lr, "isCharacterRange");
var ur = { $type: "Condition" };
function dr(e) {
	return F.isInstance(e, ur.$type);
}
o(dr, "isCondition");
var fr = {
	$type: "Conjunction",
	left: "left",
	right: "right"
};
function pr(e) {
	return F.isInstance(e, fr.$type);
}
o(pr, "isConjunction");
var mr = {
	$type: "CrossReference",
	cardinality: "cardinality",
	deprecatedSyntax: "deprecatedSyntax",
	isMulti: "isMulti",
	terminal: "terminal",
	type: "type"
};
function hr(e) {
	return F.isInstance(e, mr.$type);
}
o(hr, "isCrossReference");
var gr = {
	$type: "Disjunction",
	left: "left",
	right: "right"
};
function _r(e) {
	return F.isInstance(e, gr.$type);
}
o(_r, "isDisjunction");
var vr = {
	$type: "EndOfFile",
	cardinality: "cardinality"
};
function yr(e) {
	return F.isInstance(e, vr.$type);
}
o(yr, "isEndOfFile");
var br = {
	$type: "Grammar",
	imports: "imports",
	interfaces: "interfaces",
	isDeclared: "isDeclared",
	name: "name",
	rules: "rules",
	types: "types"
};
function xr(e) {
	return F.isInstance(e, br.$type);
}
o(xr, "isGrammar");
var Sr = {
	$type: "GrammarImport",
	path: "path"
};
function Cr(e) {
	return F.isInstance(e, Sr.$type);
}
o(Cr, "isGrammarImport");
var wr = {
	$type: "Group",
	cardinality: "cardinality",
	elements: "elements",
	guardCondition: "guardCondition",
	predicate: "predicate"
};
function Tr(e) {
	return F.isInstance(e, wr.$type);
}
o(Tr, "isGroup");
var Er = {
	$type: "InferredType",
	name: "name"
};
function Dr(e) {
	return F.isInstance(e, Er.$type);
}
o(Dr, "isInferredType");
var Or = {
	$type: "InfixRule",
	call: "call",
	dataType: "dataType",
	inferredType: "inferredType",
	name: "name",
	operators: "operators",
	parameters: "parameters",
	returnType: "returnType"
};
function kr(e) {
	return F.isInstance(e, Or.$type);
}
o(kr, "isInfixRule");
var Ar = {
	$type: "InfixRuleOperatorList",
	associativity: "associativity",
	operators: "operators"
};
function jr(e) {
	return F.isInstance(e, Ar.$type);
}
o(jr, "isInfixRuleOperatorList");
var Mr = {
	$type: "InfixRuleOperators",
	precedences: "precedences"
};
function Nr(e) {
	return F.isInstance(e, Mr.$type);
}
o(Nr, "isInfixRuleOperators");
var Pr = {
	$type: "Interface",
	attributes: "attributes",
	name: "name",
	superTypes: "superTypes"
};
function Fr(e) {
	return F.isInstance(e, Pr.$type);
}
o(Fr, "isInterface");
var Ir = {
	$type: "Keyword",
	cardinality: "cardinality",
	predicate: "predicate",
	value: "value"
};
function Lr(e) {
	return F.isInstance(e, Ir.$type);
}
o(Lr, "isKeyword");
var Rr = {
	$type: "NamedArgument",
	calledByName: "calledByName",
	parameter: "parameter",
	value: "value"
};
function zr(e) {
	return F.isInstance(e, Rr.$type);
}
o(zr, "isNamedArgument");
var Br = {
	$type: "NegatedToken",
	cardinality: "cardinality",
	lookahead: "lookahead",
	parenthesized: "parenthesized",
	terminal: "terminal"
};
function Vr(e) {
	return F.isInstance(e, Br.$type);
}
o(Vr, "isNegatedToken");
var Hr = {
	$type: "Negation",
	value: "value"
};
function Ur(e) {
	return F.isInstance(e, Hr.$type);
}
o(Ur, "isNegation");
var Wr = {
	$type: "NumberLiteral",
	value: "value"
};
function Gr(e) {
	return F.isInstance(e, Wr.$type);
}
o(Gr, "isNumberLiteral");
var Kr = {
	$type: "Parameter",
	name: "name"
};
function qr(e) {
	return F.isInstance(e, Kr.$type);
}
o(qr, "isParameter");
var Jr = {
	$type: "ParameterReference",
	parameter: "parameter"
};
function Yr(e) {
	return F.isInstance(e, Jr.$type);
}
o(Yr, "isParameterReference");
var Xr = {
	$type: "ParserRule",
	dataType: "dataType",
	definition: "definition",
	entry: "entry",
	fragment: "fragment",
	inferredType: "inferredType",
	name: "name",
	parameters: "parameters",
	returnType: "returnType"
};
function Zr(e) {
	return F.isInstance(e, Xr.$type);
}
o(Zr, "isParserRule");
var Qr = {
	$type: "ReferenceType",
	isMulti: "isMulti",
	referenceType: "referenceType"
};
function $r(e) {
	return F.isInstance(e, Qr.$type);
}
o($r, "isReferenceType");
var ei = {
	$type: "RegexToken",
	cardinality: "cardinality",
	lookahead: "lookahead",
	parenthesized: "parenthesized",
	regex: "regex"
};
function ti(e) {
	return F.isInstance(e, ei.$type);
}
o(ti, "isRegexToken");
var ni = {
	$type: "ReturnType",
	name: "name"
};
function ri(e) {
	return F.isInstance(e, ni.$type);
}
o(ri, "isReturnType");
var ii = {
	$type: "RuleCall",
	arguments: "arguments",
	cardinality: "cardinality",
	predicate: "predicate",
	rule: "rule"
};
function ai(e) {
	return F.isInstance(e, ii.$type);
}
o(ai, "isRuleCall");
var oi = {
	$type: "SimpleType",
	primitiveType: "primitiveType",
	stringType: "stringType",
	typeRef: "typeRef"
};
function si(e) {
	return F.isInstance(e, oi.$type);
}
o(si, "isSimpleType");
var ci = {
	$type: "StringLiteral",
	value: "value"
};
function li(e) {
	return F.isInstance(e, ci.$type);
}
o(li, "isStringLiteral");
var ui = {
	$type: "TerminalAlternatives",
	cardinality: "cardinality",
	elements: "elements",
	lookahead: "lookahead",
	parenthesized: "parenthesized"
};
function di(e) {
	return F.isInstance(e, ui.$type);
}
o(di, "isTerminalAlternatives");
var fi = {
	$type: "TerminalElement",
	cardinality: "cardinality",
	lookahead: "lookahead",
	parenthesized: "parenthesized"
};
function pi(e) {
	return F.isInstance(e, fi.$type);
}
o(pi, "isTerminalElement");
var mi = {
	$type: "TerminalGroup",
	cardinality: "cardinality",
	elements: "elements",
	lookahead: "lookahead",
	parenthesized: "parenthesized"
};
function hi(e) {
	return F.isInstance(e, mi.$type);
}
o(hi, "isTerminalGroup");
var gi = {
	$type: "TerminalRule",
	definition: "definition",
	fragment: "fragment",
	hidden: "hidden",
	name: "name",
	type: "type"
};
function _i(e) {
	return F.isInstance(e, gi.$type);
}
o(_i, "isTerminalRule");
var vi = {
	$type: "TerminalRuleCall",
	cardinality: "cardinality",
	lookahead: "lookahead",
	parenthesized: "parenthesized",
	rule: "rule"
};
function yi(e) {
	return F.isInstance(e, vi.$type);
}
o(yi, "isTerminalRuleCall");
var bi = {
	$type: "Type",
	name: "name",
	type: "type"
};
function xi(e) {
	return F.isInstance(e, bi.$type);
}
o(xi, "isType");
var Si = {
	$type: "TypeAttribute",
	defaultValue: "defaultValue",
	isOptional: "isOptional",
	name: "name",
	type: "type"
};
function Ci(e) {
	return F.isInstance(e, Si.$type);
}
o(Ci, "isTypeAttribute");
var wi = { $type: "TypeDefinition" };
function Ti(e) {
	return F.isInstance(e, wi.$type);
}
o(Ti, "isTypeDefinition");
var Ei = {
	$type: "UnionType",
	types: "types"
};
function Di(e) {
	return F.isInstance(e, Ei.$type);
}
o(Di, "isUnionType");
var Oi = {
	$type: "UnorderedGroup",
	cardinality: "cardinality",
	elements: "elements"
};
function ki(e) {
	return F.isInstance(e, Oi.$type);
}
o(ki, "isUnorderedGroup");
var Ai = {
	$type: "UntilToken",
	cardinality: "cardinality",
	lookahead: "lookahead",
	parenthesized: "parenthesized",
	terminal: "terminal"
};
function ji(e) {
	return F.isInstance(e, Ai.$type);
}
o(ji, "isUntilToken");
var Mi = { $type: "ValueLiteral" };
function Ni(e) {
	return F.isInstance(e, Mi.$type);
}
o(Ni, "isValueLiteral");
var Pi = {
	$type: "Wildcard",
	cardinality: "cardinality",
	lookahead: "lookahead",
	parenthesized: "parenthesized"
};
function Fi(e) {
	return F.isInstance(e, Pi.$type);
}
o(Fi, "isWildcard");
var Ii, Li = (Ii = class extends fn {
	constructor() {
		super(...arguments), this.types = {
			AbstractElement: {
				name: Hn.$type,
				properties: { cardinality: { name: Hn.cardinality } },
				superTypes: []
			},
			AbstractParserRule: {
				name: Wn.$type,
				properties: {},
				superTypes: [Kn.$type, Jn.$type]
			},
			AbstractRule: {
				name: Kn.$type,
				properties: {},
				superTypes: []
			},
			AbstractType: {
				name: Jn.$type,
				properties: {},
				superTypes: []
			},
			Action: {
				name: Xn.$type,
				properties: {
					cardinality: { name: Xn.cardinality },
					feature: { name: Xn.feature },
					inferredType: { name: Xn.inferredType },
					operator: { name: Xn.operator },
					type: {
						name: Xn.type,
						referenceType: Jn.$type
					}
				},
				superTypes: [Hn.$type]
			},
			Alternatives: {
				name: Qn.$type,
				properties: {
					cardinality: { name: Qn.cardinality },
					elements: {
						name: Qn.elements,
						defaultValue: []
					}
				},
				superTypes: [Hn.$type]
			},
			ArrayLiteral: {
				name: er.$type,
				properties: { elements: {
					name: er.elements,
					defaultValue: []
				} },
				superTypes: [Mi.$type]
			},
			ArrayType: {
				name: nr.$type,
				properties: { elementType: { name: nr.elementType } },
				superTypes: [wi.$type]
			},
			Assignment: {
				name: ir.$type,
				properties: {
					cardinality: { name: ir.cardinality },
					feature: { name: ir.feature },
					operator: { name: ir.operator },
					predicate: { name: ir.predicate },
					terminal: { name: ir.terminal }
				},
				superTypes: [Hn.$type]
			},
			BooleanLiteral: {
				name: or.$type,
				properties: { true: {
					name: or.true,
					defaultValue: !1
				} },
				superTypes: [ur.$type, Mi.$type]
			},
			CharacterRange: {
				name: cr.$type,
				properties: {
					cardinality: { name: cr.cardinality },
					left: { name: cr.left },
					lookahead: { name: cr.lookahead },
					parenthesized: {
						name: cr.parenthesized,
						defaultValue: !1
					},
					right: { name: cr.right }
				},
				superTypes: [fi.$type]
			},
			Condition: {
				name: ur.$type,
				properties: {},
				superTypes: []
			},
			Conjunction: {
				name: fr.$type,
				properties: {
					left: { name: fr.left },
					right: { name: fr.right }
				},
				superTypes: [ur.$type]
			},
			CrossReference: {
				name: mr.$type,
				properties: {
					cardinality: { name: mr.cardinality },
					deprecatedSyntax: {
						name: mr.deprecatedSyntax,
						defaultValue: !1
					},
					isMulti: {
						name: mr.isMulti,
						defaultValue: !1
					},
					terminal: { name: mr.terminal },
					type: {
						name: mr.type,
						referenceType: Jn.$type
					}
				},
				superTypes: [Hn.$type]
			},
			Disjunction: {
				name: gr.$type,
				properties: {
					left: { name: gr.left },
					right: { name: gr.right }
				},
				superTypes: [ur.$type]
			},
			EndOfFile: {
				name: vr.$type,
				properties: { cardinality: { name: vr.cardinality } },
				superTypes: [Hn.$type]
			},
			Grammar: {
				name: br.$type,
				properties: {
					imports: {
						name: br.imports,
						defaultValue: []
					},
					interfaces: {
						name: br.interfaces,
						defaultValue: []
					},
					isDeclared: {
						name: br.isDeclared,
						defaultValue: !1
					},
					name: { name: br.name },
					rules: {
						name: br.rules,
						defaultValue: []
					},
					types: {
						name: br.types,
						defaultValue: []
					}
				},
				superTypes: []
			},
			GrammarImport: {
				name: Sr.$type,
				properties: { path: { name: Sr.path } },
				superTypes: []
			},
			Group: {
				name: wr.$type,
				properties: {
					cardinality: { name: wr.cardinality },
					elements: {
						name: wr.elements,
						defaultValue: []
					},
					guardCondition: { name: wr.guardCondition },
					predicate: { name: wr.predicate }
				},
				superTypes: [Hn.$type]
			},
			InferredType: {
				name: Er.$type,
				properties: { name: { name: Er.name } },
				superTypes: [Jn.$type]
			},
			InfixRule: {
				name: Or.$type,
				properties: {
					call: { name: Or.call },
					dataType: { name: Or.dataType },
					inferredType: { name: Or.inferredType },
					name: { name: Or.name },
					operators: { name: Or.operators },
					parameters: {
						name: Or.parameters,
						defaultValue: []
					},
					returnType: {
						name: Or.returnType,
						referenceType: Jn.$type
					}
				},
				superTypes: [Wn.$type]
			},
			InfixRuleOperatorList: {
				name: Ar.$type,
				properties: {
					associativity: { name: Ar.associativity },
					operators: {
						name: Ar.operators,
						defaultValue: []
					}
				},
				superTypes: []
			},
			InfixRuleOperators: {
				name: Mr.$type,
				properties: { precedences: {
					name: Mr.precedences,
					defaultValue: []
				} },
				superTypes: []
			},
			Interface: {
				name: Pr.$type,
				properties: {
					attributes: {
						name: Pr.attributes,
						defaultValue: []
					},
					name: { name: Pr.name },
					superTypes: {
						name: Pr.superTypes,
						defaultValue: [],
						referenceType: Jn.$type
					}
				},
				superTypes: [Jn.$type]
			},
			Keyword: {
				name: Ir.$type,
				properties: {
					cardinality: { name: Ir.cardinality },
					predicate: { name: Ir.predicate },
					value: { name: Ir.value }
				},
				superTypes: [Hn.$type]
			},
			NamedArgument: {
				name: Rr.$type,
				properties: {
					calledByName: {
						name: Rr.calledByName,
						defaultValue: !1
					},
					parameter: {
						name: Rr.parameter,
						referenceType: Kr.$type
					},
					value: { name: Rr.value }
				},
				superTypes: []
			},
			NegatedToken: {
				name: Br.$type,
				properties: {
					cardinality: { name: Br.cardinality },
					lookahead: { name: Br.lookahead },
					parenthesized: {
						name: Br.parenthesized,
						defaultValue: !1
					},
					terminal: { name: Br.terminal }
				},
				superTypes: [fi.$type]
			},
			Negation: {
				name: Hr.$type,
				properties: { value: { name: Hr.value } },
				superTypes: [ur.$type]
			},
			NumberLiteral: {
				name: Wr.$type,
				properties: { value: { name: Wr.value } },
				superTypes: [Mi.$type]
			},
			Parameter: {
				name: Kr.$type,
				properties: { name: { name: Kr.name } },
				superTypes: []
			},
			ParameterReference: {
				name: Jr.$type,
				properties: { parameter: {
					name: Jr.parameter,
					referenceType: Kr.$type
				} },
				superTypes: [ur.$type]
			},
			ParserRule: {
				name: Xr.$type,
				properties: {
					dataType: { name: Xr.dataType },
					definition: { name: Xr.definition },
					entry: {
						name: Xr.entry,
						defaultValue: !1
					},
					fragment: {
						name: Xr.fragment,
						defaultValue: !1
					},
					inferredType: { name: Xr.inferredType },
					name: { name: Xr.name },
					parameters: {
						name: Xr.parameters,
						defaultValue: []
					},
					returnType: {
						name: Xr.returnType,
						referenceType: Jn.$type
					}
				},
				superTypes: [Wn.$type]
			},
			ReferenceType: {
				name: Qr.$type,
				properties: {
					isMulti: {
						name: Qr.isMulti,
						defaultValue: !1
					},
					referenceType: { name: Qr.referenceType }
				},
				superTypes: [wi.$type]
			},
			RegexToken: {
				name: ei.$type,
				properties: {
					cardinality: { name: ei.cardinality },
					lookahead: { name: ei.lookahead },
					parenthesized: {
						name: ei.parenthesized,
						defaultValue: !1
					},
					regex: { name: ei.regex }
				},
				superTypes: [fi.$type]
			},
			ReturnType: {
				name: ni.$type,
				properties: { name: { name: ni.name } },
				superTypes: []
			},
			RuleCall: {
				name: ii.$type,
				properties: {
					arguments: {
						name: ii.arguments,
						defaultValue: []
					},
					cardinality: { name: ii.cardinality },
					predicate: { name: ii.predicate },
					rule: {
						name: ii.rule,
						referenceType: Kn.$type
					}
				},
				superTypes: [Hn.$type]
			},
			SimpleType: {
				name: oi.$type,
				properties: {
					primitiveType: { name: oi.primitiveType },
					stringType: { name: oi.stringType },
					typeRef: {
						name: oi.typeRef,
						referenceType: Jn.$type
					}
				},
				superTypes: [wi.$type]
			},
			StringLiteral: {
				name: ci.$type,
				properties: { value: { name: ci.value } },
				superTypes: [Mi.$type]
			},
			TerminalAlternatives: {
				name: ui.$type,
				properties: {
					cardinality: { name: ui.cardinality },
					elements: {
						name: ui.elements,
						defaultValue: []
					},
					lookahead: { name: ui.lookahead },
					parenthesized: {
						name: ui.parenthesized,
						defaultValue: !1
					}
				},
				superTypes: [fi.$type]
			},
			TerminalElement: {
				name: fi.$type,
				properties: {
					cardinality: { name: fi.cardinality },
					lookahead: { name: fi.lookahead },
					parenthesized: {
						name: fi.parenthesized,
						defaultValue: !1
					}
				},
				superTypes: [Hn.$type]
			},
			TerminalGroup: {
				name: mi.$type,
				properties: {
					cardinality: { name: mi.cardinality },
					elements: {
						name: mi.elements,
						defaultValue: []
					},
					lookahead: { name: mi.lookahead },
					parenthesized: {
						name: mi.parenthesized,
						defaultValue: !1
					}
				},
				superTypes: [fi.$type]
			},
			TerminalRule: {
				name: gi.$type,
				properties: {
					definition: { name: gi.definition },
					fragment: {
						name: gi.fragment,
						defaultValue: !1
					},
					hidden: {
						name: gi.hidden,
						defaultValue: !1
					},
					name: { name: gi.name },
					type: { name: gi.type }
				},
				superTypes: [Kn.$type]
			},
			TerminalRuleCall: {
				name: vi.$type,
				properties: {
					cardinality: { name: vi.cardinality },
					lookahead: { name: vi.lookahead },
					parenthesized: {
						name: vi.parenthesized,
						defaultValue: !1
					},
					rule: {
						name: vi.rule,
						referenceType: gi.$type
					}
				},
				superTypes: [fi.$type]
			},
			Type: {
				name: bi.$type,
				properties: {
					name: { name: bi.name },
					type: { name: bi.type }
				},
				superTypes: [Jn.$type]
			},
			TypeAttribute: {
				name: Si.$type,
				properties: {
					defaultValue: { name: Si.defaultValue },
					isOptional: {
						name: Si.isOptional,
						defaultValue: !1
					},
					name: { name: Si.name },
					type: { name: Si.type }
				},
				superTypes: []
			},
			TypeDefinition: {
				name: wi.$type,
				properties: {},
				superTypes: []
			},
			UnionType: {
				name: Ei.$type,
				properties: { types: {
					name: Ei.types,
					defaultValue: []
				} },
				superTypes: [wi.$type]
			},
			UnorderedGroup: {
				name: Oi.$type,
				properties: {
					cardinality: { name: Oi.cardinality },
					elements: {
						name: Oi.elements,
						defaultValue: []
					}
				},
				superTypes: [Hn.$type]
			},
			UntilToken: {
				name: Ai.$type,
				properties: {
					cardinality: { name: Ai.cardinality },
					lookahead: { name: Ai.lookahead },
					parenthesized: {
						name: Ai.parenthesized,
						defaultValue: !1
					},
					terminal: { name: Ai.terminal }
				},
				superTypes: [fi.$type]
			},
			ValueLiteral: {
				name: Mi.$type,
				properties: {},
				superTypes: []
			},
			Wildcard: {
				name: Pi.$type,
				properties: {
					cardinality: { name: Pi.cardinality },
					lookahead: { name: Pi.lookahead },
					parenthesized: {
						name: Pi.parenthesized,
						defaultValue: !1
					}
				},
				superTypes: [fi.$type]
			}
		};
	}
}, o(Ii, "LangiumGrammarAstReflection"), Ii), F = new Li();
function Ri(e) {
	let t = e, n = !1;
	for (; t;) {
		let e = Dn(t.grammarSource, Zr);
		if (e && e.dataType) t = t.container, n = !0;
		else return n ? t : void 0;
	}
}
o(Ri, "getDatatypeNode");
function zi(e) {
	return new Cn(e, (e) => pn(e) ? e.content : [], { includeRoot: !0 });
}
o(zi, "streamCst");
function Bi(e) {
	return zi(e).filter(mn);
}
o(Bi, "flattenCst");
function Vi(e, t) {
	for (; e.container;) if (e = e.container, e === t) return !0;
	return !1;
}
o(Vi, "isChildNode");
function Hi(e) {
	return {
		start: {
			character: e.startColumn - 1,
			line: e.startLine - 1
		},
		end: {
			character: e.endColumn,
			line: e.endLine - 1
		}
	};
}
o(Hi, "tokenToRange");
function Ui(e) {
	if (!e) return;
	let { offset: t, end: n, range: r } = e;
	return {
		range: r,
		offset: t,
		end: n,
		length: n - t
	};
}
o(Ui, "toDocumentSegment");
var Wi;
(function(e) {
	e[e.Before = 0] = "Before", e[e.After = 1] = "After", e[e.OverlapFront = 2] = "OverlapFront", e[e.OverlapBack = 3] = "OverlapBack", e[e.Inside = 4] = "Inside", e[e.Outside = 5] = "Outside";
})(Wi ||= {});
function Gi(e, t) {
	if (e.end.line < t.start.line || e.end.line === t.start.line && e.end.character <= t.start.character) return Wi.Before;
	if (e.start.line > t.end.line || e.start.line === t.end.line && e.start.character >= t.end.character) return Wi.After;
	let n = e.start.line > t.start.line || e.start.line === t.start.line && e.start.character >= t.start.character, r = e.end.line < t.end.line || e.end.line === t.end.line && e.end.character <= t.end.character;
	return n && r ? Wi.Inside : n ? Wi.OverlapBack : r ? Wi.OverlapFront : Wi.Outside;
}
o(Gi, "compareRange");
function Ki(e, t) {
	return Gi(e, t) > Wi.After;
}
o(Ki, "inRange");
var qi = /^[\w\p{L}]$/u;
function Ji(e, t, n = qi) {
	if (e) {
		if (t > 0) {
			let r = t - e.offset, i = e.text.charAt(r);
			n.test(i) || t--;
		}
		return Zi(e, t);
	}
}
o(Ji, "findDeclarationNodeAtOffset");
function Yi(e, t) {
	if (e) {
		let n = ea(e, !0);
		if (n && Xi(n, t)) return n;
		if (hn(e)) {
			let n = e.content.findIndex((e) => !e.hidden);
			for (let r = n - 1; r >= 0; r--) {
				let n = e.content[r];
				if (Xi(n, t)) return n;
			}
		}
	}
}
o(Yi, "findCommentNode");
function Xi(e, t) {
	return mn(e) && t.includes(e.tokenType.name);
}
o(Xi, "isCommentNode");
function Zi(e, t) {
	if (mn(e)) return e;
	if (pn(e)) {
		let n = $i(e, t, !1);
		if (n) return Zi(n, t);
	}
}
o(Zi, "findLeafNodeAtOffset");
function Qi(e, t) {
	if (mn(e)) return e;
	if (pn(e)) {
		let n = $i(e, t, !0);
		if (n) return Qi(n, t);
	}
}
o(Qi, "findLeafNodeBeforeOffset");
function $i(e, t, n) {
	let r = 0, i = e.content.length - 1, a;
	for (; r <= i;) {
		let o = Math.floor((r + i) / 2), s = e.content[o];
		if (s.offset <= t && s.end > t) return s;
		s.end <= t ? (a = n ? s : void 0, r = o + 1) : i = o - 1;
	}
	return a;
}
o($i, "binarySearch");
function ea(e, t = !0) {
	for (; e.container;) {
		let n = e.container, r = n.content.indexOf(e);
		for (; r > 0;) {
			r--;
			let e = n.content[r];
			if (t || !e.hidden) return e;
		}
		e = n;
	}
}
o(ea, "getPreviousNode");
function ta(e, t = !0) {
	for (; e.container;) {
		let n = e.container, r = n.content.indexOf(e), i = n.content.length - 1;
		for (; r < i;) {
			r++;
			let e = n.content[r];
			if (t || !e.hidden) return e;
		}
		e = n;
	}
}
o(ta, "getNextNode");
function na(e) {
	if (e.range.start.character === 0) return e;
	let t = e.range.start.line, n = e, r;
	for (; e.container;) {
		let i = e.container, a = r ?? i.content.indexOf(e);
		if (a === 0 ? (e = i, r = void 0) : (r = a - 1, e = i.content[r]), e.range.start.line !== t) break;
		n = e;
	}
	return n;
}
o(na, "getStartlineNode");
function ra(e, t) {
	let n = ia(e, t);
	return n ? n.parent.content.slice(n.a + 1, n.b) : [];
}
o(ra, "getInteriorNodes");
function ia(e, t) {
	let n = aa(e), r = aa(t), i;
	for (let e = 0; e < n.length && e < r.length; e++) {
		let t = n[e], a = r[e];
		if (t.parent === a.parent) i = {
			parent: t.parent,
			a: t.index,
			b: a.index
		};
		else break;
	}
	return i;
}
o(ia, "getCommonParent");
function aa(e) {
	let t = [];
	for (; e.container;) {
		let n = e.container, r = n.content.indexOf(e);
		t.push({
			parent: n,
			index: r
		}), e = n;
	}
	return t.reverse();
}
o(aa, "getParentChain");
var oa = {};
l(oa, {
	findAssignment: () => Za,
	findNameAssignment: () => Qa,
	findNodeForKeyword: () => Ya,
	findNodeForProperty: () => Ka,
	findNodesForKeyword: () => Ja,
	findNodesForKeywordInternal: () => Xa,
	findNodesForProperty: () => Ga,
	getActionAtElement: () => eo,
	getActionType: () => uo,
	getAllReachableRules: () => Ba,
	getAllRulesUsedForCrossReferences: () => Ha,
	getCrossReferenceTerminal: () => Ua,
	getEntryRule: () => Ra,
	getExplicitRuleType: () => co,
	getHiddenRules: () => za,
	getRuleType: () => po,
	getRuleTypeName: () => fo,
	getTypeName: () => lo,
	isArrayCardinality: () => no,
	isArrayOperator: () => ro,
	isCommentTerminal: () => Wa,
	isDataType: () => oo,
	isDataTypeRule: () => io,
	isOptionalCardinality: () => to,
	terminalRegex: () => mo
});
var sa, ca = (sa = class extends Error {
	constructor(e, t) {
		super(e ? `${t} at ${e.range.start.line}:${e.range.start.character}` : t);
	}
}, o(sa, "ErrorWithLocation"), sa);
function la(e, t = "Error: Got unexpected value.") {
	throw Error(t);
}
o(la, "assertUnreachable");
function ua(e, t = "Error: Condition is violated.") {
	if (!e) throw Error(t);
}
o(ua, "assertCondition");
var da = {};
l(da, {
	NEWLINE_REGEXP: () => Da,
	escapeRegExp: () => Fa,
	getTerminalParts: () => ja,
	isMultilineComment: () => Ma,
	isWhitespace: () => Pa,
	partialMatches: () => Ia,
	partialRegExp: () => La,
	whitespaceCharacters: () => Na
});
function I(e) {
	return e.charCodeAt(0);
}
o(I, "cc");
function fa(e, t) {
	Array.isArray(e) ? e.forEach(function(e) {
		t.push(e);
	}) : t.push(e);
}
o(fa, "insertToSet");
function pa(e, t) {
	if (e[t] === !0) throw "duplicate flag " + t;
	e[t], e[t] = !0;
}
o(pa, "addFlag");
function ma(e) {
	if (e === void 0) throw Error("Internal Error - Should never get here!");
	return !0;
}
o(ma, "ASSERT_EXISTS");
function ha() {
	throw Error("Internal Error - Should never get here!");
}
o(ha, "ASSERT_NEVER_REACH_HERE");
function ga(e) {
	return e.type === "Character";
}
o(ga, "isCharacter");
var _a = [];
for (let e = I("0"); e <= I("9"); e++) _a.push(e);
var va = [I("_")].concat(_a);
for (let e = I("a"); e <= I("z"); e++) va.push(e);
for (let e = I("A"); e <= I("Z"); e++) va.push(e);
var ya = [
	I(" "),
	I("\f"),
	I("\n"),
	I("\r"),
	I("	"),
	I("\v"),
	I("	"),
	I("\xA0"),
	I(" "),
	I(" "),
	I(" "),
	I(" "),
	I(" "),
	I(" "),
	I(" "),
	I(" "),
	I(" "),
	I(" "),
	I(" "),
	I(" "),
	I("\u2028"),
	I("\u2029"),
	I(" "),
	I(" "),
	I("　"),
	I("﻿")
], ba = /[0-9a-fA-F]/, xa = /[0-9]/, Sa = /[1-9]/, Ca, wa = (Ca = class {
	constructor() {
		this.idx = 0, this.input = "", this.groupIdx = 0;
	}
	saveState() {
		return {
			idx: this.idx,
			input: this.input,
			groupIdx: this.groupIdx
		};
	}
	restoreState(e) {
		this.idx = e.idx, this.input = e.input, this.groupIdx = e.groupIdx;
	}
	pattern(e) {
		this.idx = 0, this.input = e, this.groupIdx = 0, this.consumeChar("/");
		let t = this.disjunction();
		this.consumeChar("/");
		let n = {
			type: "Flags",
			loc: {
				begin: this.idx,
				end: e.length
			},
			global: !1,
			ignoreCase: !1,
			multiLine: !1,
			unicode: !1,
			sticky: !1
		};
		for (; this.isRegExpFlag();) switch (this.popChar()) {
			case "g":
				pa(n, "global");
				break;
			case "i":
				pa(n, "ignoreCase");
				break;
			case "m":
				pa(n, "multiLine");
				break;
			case "u":
				pa(n, "unicode");
				break;
			case "y": pa(n, "sticky");
		}
		if (this.idx !== this.input.length) throw Error("Redundant input: " + this.input.substring(this.idx));
		return {
			type: "Pattern",
			flags: n,
			value: t,
			loc: this.loc(0)
		};
	}
	disjunction() {
		let e = [], t = this.idx;
		for (e.push(this.alternative()); this.peekChar() === "|";) this.consumeChar("|"), e.push(this.alternative());
		return {
			type: "Disjunction",
			value: e,
			loc: this.loc(t)
		};
	}
	alternative() {
		let e = [], t = this.idx;
		for (; this.isTerm();) e.push(this.term());
		return {
			type: "Alternative",
			value: e,
			loc: this.loc(t)
		};
	}
	term() {
		return this.isAssertion() ? this.assertion() : this.atom();
	}
	assertion() {
		let e = this.idx;
		switch (this.popChar()) {
			case "^": return {
				type: "StartAnchor",
				loc: this.loc(e)
			};
			case "$": return {
				type: "EndAnchor",
				loc: this.loc(e)
			};
			case "\\":
				switch (this.popChar()) {
					case "b": return {
						type: "WordBoundary",
						loc: this.loc(e)
					};
					case "B": return {
						type: "NonWordBoundary",
						loc: this.loc(e)
					};
				}
				throw Error("Invalid Assertion Escape");
			case "(":
				this.consumeChar("?");
				let t;
				switch (this.popChar()) {
					case "=":
						t = "Lookahead";
						break;
					case "!":
						t = "NegativeLookahead";
						break;
					case "<": switch (this.popChar()) {
						case "=":
							t = "Lookbehind";
							break;
						case "!": t = "NegativeLookbehind";
					}
				}
				ma(t);
				let n = this.disjunction();
				return this.consumeChar(")"), {
					type: t,
					value: n,
					loc: this.loc(e)
				};
		}
		return ha();
	}
	quantifier(e = !1) {
		let t, n = this.idx;
		switch (this.popChar()) {
			case "*":
				t = {
					atLeast: 0,
					atMost: 1 / 0
				};
				break;
			case "+":
				t = {
					atLeast: 1,
					atMost: 1 / 0
				};
				break;
			case "?":
				t = {
					atLeast: 0,
					atMost: 1
				};
				break;
			case "{":
				let n = this.integerIncludingZero();
				switch (this.popChar()) {
					case "}":
						t = {
							atLeast: n,
							atMost: n
						};
						break;
					case ",":
						let e;
						this.isDigit() ? (e = this.integerIncludingZero(), t = {
							atLeast: n,
							atMost: e
						}) : t = {
							atLeast: n,
							atMost: 1 / 0
						}, this.consumeChar("}");
				}
				if (e === !0 && t === void 0) return;
				ma(t);
		}
		if ((e !== !0 || t !== void 0) && ma(t)) return this.peekChar(0) === "?" ? (this.consumeChar("?"), t.greedy = !1) : t.greedy = !0, t.type = "Quantifier", t.loc = this.loc(n), t;
	}
	atom() {
		let e, t = this.idx;
		switch (this.peekChar()) {
			case ".":
				e = this.dotAll();
				break;
			case "\\":
				e = this.atomEscape();
				break;
			case "[":
				e = this.characterClass();
				break;
			case "(": e = this.group();
		}
		if (e === void 0 && this.isPatternCharacter() && (e = this.patternCharacter()), ma(e)) return e.loc = this.loc(t), this.isQuantifier() && (e.quantifier = this.quantifier()), e;
	}
	dotAll() {
		return this.consumeChar("."), {
			type: "Set",
			complement: !0,
			value: [
				I("\n"),
				I("\r"),
				I("\u2028"),
				I("\u2029")
			]
		};
	}
	atomEscape() {
		switch (this.consumeChar("\\"), this.peekChar()) {
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9": return this.decimalEscapeAtom();
			case "d":
			case "D":
			case "s":
			case "S":
			case "w":
			case "W": return this.characterClassEscape();
			case "f":
			case "n":
			case "r":
			case "t":
			case "v": return this.controlEscapeAtom();
			case "c": return this.controlLetterEscapeAtom();
			case "0": return this.nulCharacterAtom();
			case "x": return this.hexEscapeSequenceAtom();
			case "u": return this.regExpUnicodeEscapeSequenceAtom();
			default: return this.identityEscapeAtom();
		}
	}
	decimalEscapeAtom() {
		return {
			type: "GroupBackReference",
			value: this.positiveInteger()
		};
	}
	characterClassEscape() {
		let e, t = !1;
		switch (this.popChar()) {
			case "d":
				e = _a;
				break;
			case "D":
				e = _a, t = !0;
				break;
			case "s":
				e = ya;
				break;
			case "S":
				e = ya, t = !0;
				break;
			case "w":
				e = va;
				break;
			case "W": e = va, t = !0;
		}
		if (ma(e)) return {
			type: "Set",
			value: e,
			complement: t
		};
	}
	controlEscapeAtom() {
		let e;
		switch (this.popChar()) {
			case "f":
				e = I("\f");
				break;
			case "n":
				e = I("\n");
				break;
			case "r":
				e = I("\r");
				break;
			case "t":
				e = I("	");
				break;
			case "v": e = I("\v");
		}
		if (ma(e)) return {
			type: "Character",
			value: e
		};
	}
	controlLetterEscapeAtom() {
		this.consumeChar("c");
		let e = this.popChar();
		if (/[a-zA-Z]/.test(e) === !1) throw Error("Invalid ");
		return {
			type: "Character",
			value: e.toUpperCase().charCodeAt(0) - 64
		};
	}
	nulCharacterAtom() {
		return this.consumeChar("0"), {
			type: "Character",
			value: I("\0")
		};
	}
	hexEscapeSequenceAtom() {
		return this.consumeChar("x"), this.parseHexDigits(2);
	}
	regExpUnicodeEscapeSequenceAtom() {
		return this.consumeChar("u"), this.parseHexDigits(4);
	}
	identityEscapeAtom() {
		return {
			type: "Character",
			value: I(this.popChar())
		};
	}
	classPatternCharacterAtom() {
		switch (this.peekChar()) {
			case "\n":
			// istanbul ignore next
			case "\r":
			// istanbul ignore next
			case "\u2028":
			// istanbul ignore next
			case "\u2029":
			// istanbul ignore next
			case "\\":
			// istanbul ignore next
			case "]": throw Error("TBD");
			default: return {
				type: "Character",
				value: I(this.popChar())
			};
		}
	}
	characterClass() {
		let e = [], t = !1;
		for (this.consumeChar("["), this.peekChar(0) === "^" && (this.consumeChar("^"), t = !0); this.isClassAtom();) {
			let t = this.classAtom();
			if (t.type, ga(t) && this.isRangeDash()) {
				this.consumeChar("-");
				let n = this.classAtom();
				if (n.type, ga(n)) {
					if (n.value < t.value) throw Error("Range out of order in character class");
					e.push({
						from: t.value,
						to: n.value
					});
				} else fa(t.value, e), e.push(I("-")), fa(n.value, e);
			} else fa(t.value, e);
		}
		return this.consumeChar("]"), {
			type: "Set",
			complement: t,
			value: e
		};
	}
	classAtom() {
		switch (this.peekChar()) {
			case "]":
			// istanbul ignore next
			case "\n":
			// istanbul ignore next
			case "\r":
			// istanbul ignore next
			case "\u2028":
			// istanbul ignore next
			case "\u2029": throw Error("TBD");
			case "\\": return this.classEscape();
			default: return this.classPatternCharacterAtom();
		}
	}
	classEscape() {
		switch (this.consumeChar("\\"), this.peekChar()) {
			case "b": return this.consumeChar("b"), {
				type: "Character",
				value: I("\b")
			};
			case "d":
			case "D":
			case "s":
			case "S":
			case "w":
			case "W": return this.characterClassEscape();
			case "f":
			case "n":
			case "r":
			case "t":
			case "v": return this.controlEscapeAtom();
			case "c": return this.controlLetterEscapeAtom();
			case "0": return this.nulCharacterAtom();
			case "x": return this.hexEscapeSequenceAtom();
			case "u": return this.regExpUnicodeEscapeSequenceAtom();
			default: return this.identityEscapeAtom();
		}
	}
	group() {
		let e = !0;
		this.consumeChar("("), this.peekChar(0) === "?" ? (this.consumeChar("?"), this.consumeChar(":"), e = !1) : this.groupIdx++;
		let t = this.disjunction();
		this.consumeChar(")");
		let n = {
			type: "Group",
			capturing: e,
			value: t
		};
		return e && (n.idx = this.groupIdx), n;
	}
	positiveInteger() {
		let e = this.popChar();
		if (Sa.test(e) === !1) throw Error("Expecting a positive integer");
		for (; xa.test(this.peekChar(0));) e += this.popChar();
		return parseInt(e, 10);
	}
	integerIncludingZero() {
		let e = this.popChar();
		if (xa.test(e) === !1) throw Error("Expecting an integer");
		for (; xa.test(this.peekChar(0));) e += this.popChar();
		return parseInt(e, 10);
	}
	patternCharacter() {
		let e = this.popChar();
		switch (e) {
			case "\n":
			// istanbul ignore next
			case "\r":
			// istanbul ignore next
			case "\u2028":
			// istanbul ignore next
			case "\u2029":
			// istanbul ignore next
			case "^":
			// istanbul ignore next
			case "$":
			// istanbul ignore next
			case "\\":
			// istanbul ignore next
			case ".":
			// istanbul ignore next
			case "*":
			// istanbul ignore next
			case "+":
			// istanbul ignore next
			case "?":
			// istanbul ignore next
			case "(":
			// istanbul ignore next
			case ")":
			// istanbul ignore next
			case "[":
			// istanbul ignore next
			case "|": throw Error("TBD");
			default: return {
				type: "Character",
				value: I(e)
			};
		}
	}
	isRegExpFlag() {
		switch (this.peekChar(0)) {
			case "g":
			case "i":
			case "m":
			case "u":
			case "y": return !0;
			default: return !1;
		}
	}
	isRangeDash() {
		return this.peekChar() === "-" && this.isClassAtom(1);
	}
	isDigit() {
		return xa.test(this.peekChar(0));
	}
	isClassAtom(e = 0) {
		switch (this.peekChar(e)) {
			case "]":
			case "\n":
			case "\r":
			case "\u2028":
			case "\u2029": return !1;
			default: return !0;
		}
	}
	isTerm() {
		return this.isAtom() || this.isAssertion();
	}
	isAtom() {
		if (this.isPatternCharacter()) return !0;
		switch (this.peekChar(0)) {
			case ".":
			case "\\":
			case "[":
			case "(": return !0;
			default: return !1;
		}
	}
	isAssertion() {
		switch (this.peekChar(0)) {
			case "^":
			case "$": return !0;
			case "\\": switch (this.peekChar(1)) {
				case "b":
				case "B": return !0;
				default: return !1;
			}
			case "(": return this.peekChar(1) === "?" && (this.peekChar(2) === "=" || this.peekChar(2) === "!" || this.peekChar(2) === "<" && (this.peekChar(3) === "=" || this.peekChar(3) === "!"));
			default: return !1;
		}
	}
	isQuantifier() {
		let e = this.saveState();
		try {
			return this.quantifier(!0) !== void 0;
		} catch {
			return !1;
		} finally {
			this.restoreState(e);
		}
	}
	isPatternCharacter() {
		switch (this.peekChar()) {
			case "^":
			case "$":
			case "\\":
			case ".":
			case "*":
			case "+":
			case "?":
			case "(":
			case ")":
			case "[":
			case "|":
			case "/":
			case "\n":
			case "\r":
			case "\u2028":
			case "\u2029": return !1;
			default: return !0;
		}
	}
	parseHexDigits(e) {
		let t = "";
		for (let n = 0; n < e; n++) {
			let e = this.popChar();
			if (ba.test(e) === !1) throw Error("Expecting a HexDecimal digits");
			t += e;
		}
		return {
			type: "Character",
			value: parseInt(t, 16)
		};
	}
	peekChar(e = 0) {
		return this.input[this.idx + e];
	}
	popChar() {
		let e = this.peekChar(0);
		return this.consumeChar(void 0), e;
	}
	consumeChar(e) {
		if (e !== void 0 && this.input[this.idx] !== e) throw Error("Expected: '" + e + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx);
		if (this.idx >= this.input.length) throw Error("Unexpected end of input");
		this.idx++;
	}
	loc(e) {
		return {
			begin: e,
			end: this.idx
		};
	}
}, o(Ca, "RegExpParser"), Ca), Ta, Ea = (Ta = class {
	visitChildren(e) {
		for (let t in e) {
			let n = e[t];
			e.hasOwnProperty(t) && (n.type === void 0 ? Array.isArray(n) && n.forEach((e) => {
				this.visit(e);
			}, this) : this.visit(n));
		}
	}
	visit(e) {
		switch (e.type) {
			case "Pattern":
				this.visitPattern(e);
				break;
			case "Flags":
				this.visitFlags(e);
				break;
			case "Disjunction":
				this.visitDisjunction(e);
				break;
			case "Alternative":
				this.visitAlternative(e);
				break;
			case "StartAnchor":
				this.visitStartAnchor(e);
				break;
			case "EndAnchor":
				this.visitEndAnchor(e);
				break;
			case "WordBoundary":
				this.visitWordBoundary(e);
				break;
			case "NonWordBoundary":
				this.visitNonWordBoundary(e);
				break;
			case "Lookahead":
				this.visitLookahead(e);
				break;
			case "NegativeLookahead":
				this.visitNegativeLookahead(e);
				break;
			case "Lookbehind":
				this.visitLookbehind(e);
				break;
			case "NegativeLookbehind":
				this.visitNegativeLookbehind(e);
				break;
			case "Character":
				this.visitCharacter(e);
				break;
			case "Set":
				this.visitSet(e);
				break;
			case "Group":
				this.visitGroup(e);
				break;
			case "GroupBackReference":
				this.visitGroupBackReference(e);
				break;
			case "Quantifier": this.visitQuantifier(e);
		}
		this.visitChildren(e);
	}
	visitPattern(e) {}
	visitFlags(e) {}
	visitDisjunction(e) {}
	visitAlternative(e) {}
	visitStartAnchor(e) {}
	visitEndAnchor(e) {}
	visitWordBoundary(e) {}
	visitNonWordBoundary(e) {}
	visitLookahead(e) {}
	visitNegativeLookahead(e) {}
	visitLookbehind(e) {}
	visitNegativeLookbehind(e) {}
	visitCharacter(e) {}
	visitSet(e) {}
	visitGroup(e) {}
	visitGroupBackReference(e) {}
	visitQuantifier(e) {}
}, o(Ta, "BaseRegExpVisitor"), Ta), Da = /\r?\n/gm, Oa = new wa(), ka, Aa = new (ka = class extends Ea {
	constructor() {
		super(...arguments), this.isStarting = !0, this.endRegexpStack = [], this.multiline = !1;
	}
	get endRegex() {
		return this.endRegexpStack.join("");
	}
	reset(e) {
		this.multiline = !1, this.regex = e, this.startRegexp = "", this.isStarting = !0, this.endRegexpStack = [];
	}
	visitGroup(e) {
		e.quantifier && (this.isStarting = !1, this.endRegexpStack = []);
	}
	visitCharacter(e) {
		let t = String.fromCharCode(e.value);
		if (!this.multiline && t === "\n" && (this.multiline = !0), e.quantifier) this.isStarting = !1, this.endRegexpStack = [];
		else {
			let e = Fa(t);
			this.endRegexpStack.push(e), this.isStarting && (this.startRegexp += e);
		}
	}
	visitSet(e) {
		if (!this.multiline) {
			let t = this.regex.substring(e.loc.begin, e.loc.end), n = new RegExp(t);
			this.multiline = !!"\n".match(n);
		}
		if (e.quantifier) this.isStarting = !1, this.endRegexpStack = [];
		else {
			let t = this.regex.substring(e.loc.begin, e.loc.end);
			this.endRegexpStack.push(t), this.isStarting && (this.startRegexp += t);
		}
	}
	visitChildren(e) {
		e.type === "Group" && e.quantifier || super.visitChildren(e);
	}
}, o(ka, "TerminalRegExpVisitor"), ka)();
function ja(e) {
	try {
		typeof e != "string" && (e = e.source), e = `/${e}/`;
		let t = Oa.pattern(e), n = [];
		for (let r of t.value.value) Aa.reset(e), Aa.visit(r), n.push({
			start: Aa.startRegexp,
			end: Aa.endRegex
		});
		return n;
	} catch {
		return [];
	}
}
o(ja, "getTerminalParts");
function Ma(e) {
	try {
		return typeof e == "string" && (e = new RegExp(e)), e = e.toString(), Aa.reset(e), Aa.visit(Oa.pattern(e)), Aa.multiline;
	} catch {
		return !1;
	}
}
o(Ma, "isMultilineComment");
var Na = "\f\n\r	\v \xA0            \u2028\u2029  　﻿".split("");
function Pa(e) {
	let t = typeof e == "string" ? new RegExp(e) : e;
	return Na.some((e) => t.test(e));
}
o(Pa, "isWhitespace");
function Fa(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
o(Fa, "escapeRegExp");
function Ia(e, t) {
	let n = La(e), r = t.match(n);
	return !!r && r[0].length > 0;
}
o(Ia, "partialMatches");
function La(e) {
	typeof e == "string" && (e = new RegExp(e));
	let t = e, n = e.source, r = 0;
	function i() {
		let e = "", a;
		function s(t) {
			e += n.substr(r, t), r += t;
		}
		o(s, "appendRaw");
		function c(t) {
			e += "(?:" + n.substr(r, t) + "|$)", r += t;
		}
		for (o(c, "appendOptional"); r < n.length;) switch (n[r]) {
			case "\\":
				switch (n[r + 1]) {
					case "c":
						c(3);
						break;
					case "x":
						c(4);
						break;
					case "u":
						t.unicode ? n[r + 2] === "{" ? c(n.indexOf("}", r) - r + 1) : c(6) : c(2);
						break;
					case "p":
					case "P":
						t.unicode ? c(n.indexOf("}", r) - r + 1) : c(2);
						break;
					case "k":
						c(n.indexOf(">", r) - r + 1);
						break;
					default: c(2);
				}
				break;
			case "[":
				a = /\[(?:\\.|.)*?\]/g, a.lastIndex = r, a = a.exec(n) || [], c(a[0].length);
				break;
			case "|":
			case "^":
			case "$":
			case "*":
			case "+":
			case "?":
				s(1);
				break;
			case "{":
				a = /\{\d+,?\d*\}/g, a.lastIndex = r, a = a.exec(n), a ? s(a[0].length) : c(1);
				break;
			case "(":
				if (n[r + 1] === "?") switch (n[r + 2]) {
					case ":":
						e += "(?:", r += 3, e += i() + "|$)";
						break;
					case "=":
						e += "(?=", r += 3, e += i() + ")";
						break;
					case "!":
						a = r, r += 3, i(), e += n.substr(a, r - a);
						break;
					case "<": switch (n[r + 3]) {
						case "=":
						case "!":
							a = r, r += 4, i(), e += n.substr(a, r - a);
							break;
						default: s(n.indexOf(">", r) - r + 1), e += i() + "|$)";
					}
				}
				else s(1), e += i() + "|$)";
				break;
			case ")": return ++r, e;
			default: c(1);
		}
		return e;
	}
	return o(i, "process"), new RegExp(i(), e.flags);
}
o(La, "partialRegExp");
function Ra(e) {
	return e.rules.find((e) => Zr(e) && e.entry);
}
o(Ra, "getEntryRule");
function za(e) {
	return e.rules.filter((e) => _i(e) && e.hidden);
}
o(za, "getHiddenRules");
function Ba(e, t) {
	let n = /* @__PURE__ */ new Set(), r = Ra(e);
	if (!r) return new Set(e.rules);
	let i = [r].concat(za(e));
	for (let e of i) Va(e, n, t);
	let a = /* @__PURE__ */ new Set();
	for (let t of e.rules) (n.has(t.name) || _i(t) && t.hidden) && a.add(t);
	return a;
}
o(Ba, "getAllReachableRules");
function Va(e, t, n) {
	t.add(e.name), Nn(e).forEach((e) => {
		if (ai(e) || n && yi(e)) {
			let r = e.rule.ref;
			r && !t.has(r.name) && Va(r, t, n);
		}
	});
}
o(Va, "ruleDfs");
function Ha(e) {
	let t = /* @__PURE__ */ new Set();
	return Nn(e).forEach((e) => {
		hr(e) && (Zr(e.type.ref) && t.add(e.type.ref), Dr(e.type.ref) && Zr(e.type.ref.$container) && t.add(e.type.ref.$container));
	}), t;
}
o(Ha, "getAllRulesUsedForCrossReferences");
function Ua(e) {
	if (e.terminal) return e.terminal;
	if (e.type.ref) return Qa(e.type.ref)?.terminal;
}
o(Ua, "getCrossReferenceTerminal");
function Wa(e) {
	return e.hidden && !Pa(mo(e));
}
o(Wa, "isCommentTerminal");
function Ga(e, t) {
	return !e || !t ? [] : qa(e, t, e.astNode, !0);
}
o(Ga, "findNodesForProperty");
function Ka(e, t, n) {
	if (!e || !t) return;
	let r = qa(e, t, e.astNode, !0);
	if (r.length !== 0) return n = n === void 0 ? 0 : Math.max(0, Math.min(n, r.length - 1)), r[n];
}
o(Ka, "findNodeForProperty");
function qa(e, t, n, r) {
	if (!r) {
		let n = Dn(e.grammarSource, ar);
		if (n && n.feature === t) return [e];
	}
	return pn(e) && e.astNode === n ? e.content.flatMap((e) => qa(e, t, n, !1)) : [];
}
o(qa, "findNodesForPropertyInternal");
function Ja(e, t) {
	return e ? Xa(e, t, e?.astNode) : [];
}
o(Ja, "findNodesForKeyword");
function Ya(e, t, n) {
	if (!e) return;
	let r = Xa(e, t, e?.astNode);
	if (r.length !== 0) return n = n === void 0 ? 0 : Math.max(0, Math.min(n, r.length - 1)), r[n];
}
o(Ya, "findNodeForKeyword");
function Xa(e, t, n) {
	if (e.astNode !== n) return [];
	if (Lr(e.grammarSource) && e.grammarSource.value === t) return [e];
	let r = zi(e).iterator(), i, a = [];
	do
		if (i = r.next(), !i.done) {
			let e = i.value;
			e.astNode === n ? Lr(e.grammarSource) && e.grammarSource.value === t && a.push(e) : r.prune();
		}
	while (!i.done);
	return a;
}
o(Xa, "findNodesForKeywordInternal");
function Za(e) {
	let t = e.astNode;
	for (; t === e.container?.astNode;) {
		let t = Dn(e.grammarSource, ar);
		if (t) return t;
		e = e.container;
	}
}
o(Za, "findAssignment");
function Qa(e) {
	let t = e;
	return Dr(t) && (Zn(t.$container) ? t = t.$container.$container : Gn(t.$container) ? t = t.$container : la(t.$container)), $a(e, t, /* @__PURE__ */ new Map());
}
o(Qa, "findNameAssignment");
function $a(e, t, n) {
	function r(t, r) {
		let i;
		return Dn(t, ar) || (i = $a(r, r, n)), n.set(e, i), i;
	}
	if (o(r, "go"), n.has(e)) return n.get(e);
	n.set(e, void 0);
	for (let i of Nn(t)) {
		if (ar(i) && i.feature.toLowerCase() === "name") return n.set(e, i), i;
		if (ai(i) && Zr(i.rule.ref)) return r(i, i.rule.ref);
		if (si(i) && i.typeRef?.ref) return r(i, i.typeRef.ref);
	}
}
o($a, "findNameAssignmentInternal");
function eo(e) {
	let t = e.$container;
	if (Tr(t)) {
		let n = t.elements, r = n.indexOf(e);
		for (let e = r - 1; e >= 0; e--) {
			let t = n[e];
			if (Zn(t)) return t;
			{
				let t = Nn(n[e]).find(Zn);
				if (t) return t;
			}
		}
	}
	if (Un(t)) return eo(t);
}
o(eo, "getActionAtElement");
function to(e, t) {
	return e === "?" || e === "*" || Tr(t) && !!t.guardCondition;
}
o(to, "isOptionalCardinality");
function no(e) {
	return e === "*" || e === "+";
}
o(no, "isArrayCardinality");
function ro(e) {
	return e === "+=";
}
o(ro, "isArrayOperator");
function io(e) {
	return ao(e, /* @__PURE__ */ new Set());
}
o(io, "isDataTypeRule");
function ao(e, t) {
	if (t.has(e)) return !0;
	t.add(e);
	for (let n of Nn(e)) if (ai(n)) {
		if (!n.rule.ref || Zr(n.rule.ref) && !ao(n.rule.ref, t) || kr(n.rule.ref)) return !1;
	} else if (ar(n) || Zn(n)) return !1;
	return !!e.definition;
}
o(ao, "isDataTypeRuleInternal");
function oo(e) {
	return so(e.type, /* @__PURE__ */ new Set());
}
o(oo, "isDataType");
function so(e, t) {
	if (t.has(e)) return !0;
	if (t.add(e), rr(e) || $r(e)) return !1;
	if (Di(e)) return e.types.every((e) => so(e, t));
	if (si(e)) {
		if (e.primitiveType !== void 0 || e.stringType !== void 0) return !0;
		if (e.typeRef !== void 0) {
			let n = e.typeRef.ref;
			return xi(n) ? so(n.type, t) : !1;
		}
		return !1;
	}
	return !1;
}
o(so, "isDataTypeInternal");
function co(e) {
	if (!_i(e)) {
		if (e.inferredType) return e.inferredType.name;
		if (e.dataType) return e.dataType;
		if (e.returnType) {
			let t = e.returnType.ref;
			if (t) return t.name;
		}
	}
}
o(co, "getExplicitRuleType");
function lo(e) {
	if (Gn(e)) return Zr(e) && io(e) ? e.name : co(e) ?? e.name;
	if (Fr(e) || xi(e) || ri(e)) return e.name;
	if (Zn(e)) {
		let t = uo(e);
		if (t) return t;
	} else if (Dr(e)) return e.name;
	throw Error("Cannot get name of Unknown Type");
}
o(lo, "getTypeName");
function uo(e) {
	if (e.inferredType) return e.inferredType.name;
	if (e.type?.ref) return lo(e.type.ref);
}
o(uo, "getActionType");
function fo(e) {
	return _i(e) ? e.type?.name ?? "string" : Zr(e) && io(e) ? e.name : co(e) ?? e.name;
}
o(fo, "getRuleTypeName");
function po(e) {
	return _i(e) ? e.type?.name ?? "string" : co(e) ?? e.name;
}
o(po, "getRuleType");
function mo(e) {
	let t = {
		s: !1,
		i: !1,
		u: !1
	}, n = go(e.definition, t), r = Object.entries(t).filter(([, e]) => e).map(([e]) => e).join("");
	return new RegExp(n, r);
}
o(mo, "terminalRegex");
var ho = "[\\s\\S]";
function go(e, t) {
	if (di(e)) return _o(e);
	if (hi(e)) return vo(e);
	if (lr(e)) return xo(e);
	if (yi(e)) {
		let t = e.rule.ref;
		if (!t) throw Error("Missing rule reference.");
		return Co(go(t.definition), {
			cardinality: e.cardinality,
			lookahead: e.lookahead,
			parenthesized: e.parenthesized
		});
	}
	if (Vr(e)) return bo(e);
	if (ji(e)) return yo(e);
	if (ti(e)) {
		let n = e.regex.lastIndexOf("/"), r = e.regex.substring(1, n), i = e.regex.substring(n + 1);
		return t && (t.i = i.includes("i"), t.s = i.includes("s"), t.u = i.includes("u")), Co(r, {
			cardinality: e.cardinality,
			lookahead: e.lookahead,
			parenthesized: e.parenthesized,
			wrap: !1
		});
	}
	if (Fi(e)) return Co(ho, {
		cardinality: e.cardinality,
		lookahead: e.lookahead,
		parenthesized: e.parenthesized
	});
	throw Error(`Invalid terminal element: ${e?.$type}, ${e?.$cstNode?.text}`);
}
o(go, "abstractElementToRegex");
function _o(e) {
	return Co(e.elements.map((e) => go(e)).join("|"), {
		cardinality: e.cardinality,
		lookahead: e.lookahead,
		parenthesized: e.parenthesized,
		wrap: !1
	});
}
o(_o, "terminalAlternativesToRegex");
function vo(e) {
	return Co(e.elements.map((e) => go(e)).join(""), {
		cardinality: e.cardinality,
		lookahead: e.lookahead,
		parenthesized: e.parenthesized,
		wrap: !1
	});
}
o(vo, "terminalGroupToRegex");
function yo(e) {
	return Co(`${ho}*?${go(e.terminal)}`, {
		cardinality: e.cardinality,
		lookahead: e.lookahead,
		parenthesized: e.parenthesized
	});
}
o(yo, "untilTokenToRegex");
function bo(e) {
	return Co(`(?!${go(e.terminal)})${ho}*?`, {
		cardinality: e.cardinality,
		lookahead: e.lookahead,
		parenthesized: e.parenthesized
	});
}
o(bo, "negateTokenToRegex");
function xo(e) {
	return e.right ? Co(`[${So(e.left)}-${So(e.right)}]`, {
		cardinality: e.cardinality,
		lookahead: e.lookahead,
		parenthesized: e.parenthesized,
		wrap: !1
	}) : Co(So(e.left), {
		cardinality: e.cardinality,
		lookahead: e.lookahead,
		parenthesized: e.parenthesized,
		wrap: !1
	});
}
o(xo, "characterRangeToRegex");
function So(e) {
	return Fa(e.value);
}
o(So, "keywordToRegex");
function Co(e, t) {
	return (t.parenthesized || t.lookahead || t.wrap !== !1) && (e = `(${t.lookahead ?? (t.parenthesized ? "" : "?:")}${e})`), t.cardinality ? `${e}${t.cardinality}` : e;
}
o(Co, "withCardinality");
function wo(e) {
	let t = [], n = e.Grammar;
	for (let e of n.rules) _i(e) && Wa(e) && Ma(mo(e)) && t.push(e.name);
	return {
		multilineCommentRules: t,
		nameRegexp: qi
	};
}
o(wo, "createGrammarConfig");
var To = typeof global == "object" && global && global.Object === Object && global, Eo = typeof self == "object" && self && self.Object === Object && self, Do = To || Eo || Function("return this")(), Oo = Do.Symbol, ko = Object.prototype, Ao = ko.hasOwnProperty, jo = ko.toString, Mo = Oo ? Oo.toStringTag : void 0;
function No(e) {
	var t = Ao.call(e, Mo), n = e[Mo];
	try {
		e[Mo] = void 0;
		var r = !0;
	} catch {}
	var i = jo.call(e);
	return r && (t ? e[Mo] = n : delete e[Mo]), i;
}
o(No, "getRawTag");
var Po = No, Fo = Object.prototype.toString;
function Io(e) {
	return Fo.call(e);
}
o(Io, "objectToString");
var Lo = Io, Ro = "[object Null]", zo = "[object Undefined]", Bo = Oo ? Oo.toStringTag : void 0;
function Vo(e) {
	return e == null ? e === void 0 ? zo : Ro : Bo && Bo in Object(e) ? Po(e) : Lo(e);
}
o(Vo, "baseGetTag");
var Ho = Vo;
function Uo(e) {
	return typeof e == "object" && !!e;
}
o(Uo, "isObjectLike");
var Wo = Uo, Go = "[object Symbol]";
function Ko(e) {
	return typeof e == "symbol" || Wo(e) && Ho(e) == Go;
}
o(Ko, "isSymbol");
var qo = Ko;
function Jo(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
o(Jo, "arrayMap");
var Yo = Jo, L = Array.isArray, Xo = Oo ? Oo.prototype : void 0, Zo = Xo ? Xo.toString : void 0;
function Qo(e) {
	if (typeof e == "string") return e;
	if (L(e)) return Yo(e, Qo) + "";
	if (qo(e)) return Zo ? Zo.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
o(Qo, "baseToString");
var $o = Qo, es = /\s/;
function ts(e) {
	for (var t = e.length; t-- && es.test(e.charAt(t)););
	return t;
}
o(ts, "trimmedEndIndex");
var ns = ts, rs = /^\s+/;
function is(e) {
	return e && e.slice(0, ns(e) + 1).replace(rs, "");
}
o(is, "baseTrim");
var as = is;
function os(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
o(os, "isObject");
var ss = os, cs = NaN, ls = /^[-+]0x[0-9a-f]+$/i, us = /^0b[01]+$/i, ds = /^0o[0-7]+$/i, fs = parseInt;
function ps(e) {
	if (typeof e == "number") return e;
	if (qo(e)) return cs;
	if (ss(e)) {
		var t = typeof e.valueOf == "function" ? e.valueOf() : e;
		e = ss(t) ? t + "" : t;
	}
	if (typeof e != "string") return e === 0 ? e : +e;
	e = as(e);
	var n = us.test(e);
	return n || ds.test(e) ? fs(e.slice(2), n ? 2 : 8) : ls.test(e) ? cs : +e;
}
o(ps, "toNumber");
var ms = ps, hs = 1 / 0, gs = 17976931348623157e292;
function _s(e) {
	return e ? (e = ms(e), e === hs || e === -hs ? (e < 0 ? -1 : 1) * gs : e === e ? e : 0) : e === 0 ? e : 0;
}
o(_s, "toFinite");
var vs = _s;
function ys(e) {
	var t = vs(e), n = t % 1;
	return t === t ? n ? t - n : t : 0;
}
o(ys, "toInteger");
var bs = ys;
function xs(e) {
	return e;
}
o(xs, "identity");
var Ss = xs, Cs = "[object AsyncFunction]", ws = "[object Function]", Ts = "[object GeneratorFunction]", Es = "[object Proxy]";
function Ds(e) {
	if (!ss(e)) return !1;
	var t = Ho(e);
	return t == ws || t == Ts || t == Cs || t == Es;
}
o(Ds, "isFunction");
var Os = Ds, ks = Do["__core-js_shared__"], As = function() {
	var e = /[^.]+$/.exec(ks && ks.keys && ks.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function js(e) {
	return !!As && As in e;
}
o(js, "isMasked");
var Ms = js, Ns = Function.prototype.toString;
function Ps(e) {
	if (e != null) {
		try {
			return Ns.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
o(Ps, "toSource");
var Fs = Ps, Is = /[\\^$.*+?()[\]{}|]/g, Ls = /^\[object .+?Constructor\]$/, Rs = Function.prototype, zs = Object.prototype, Bs = Rs.toString, Vs = zs.hasOwnProperty, Hs = RegExp("^" + Bs.call(Vs).replace(Is, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Us(e) {
	return !ss(e) || Ms(e) ? !1 : (Os(e) ? Hs : Ls).test(Fs(e));
}
o(Us, "baseIsNative");
var Ws = Us;
function Gs(e, t) {
	return e?.[t];
}
o(Gs, "getValue");
var Ks = Gs;
function qs(e, t) {
	var n = Ks(e, t);
	return Ws(n) ? n : void 0;
}
o(qs, "getNative");
var Js = qs, Ys = Js(Do, "WeakMap"), Xs = Object.create, Zs = /* @__PURE__ */ function() {
	function e() {}
	return o(e, "object"), function(t) {
		if (!ss(t)) return {};
		if (Xs) return Xs(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
function Qs(e, t, n) {
	switch (n.length) {
		case 0: return e.call(t);
		case 1: return e.call(t, n[0]);
		case 2: return e.call(t, n[0], n[1]);
		case 3: return e.call(t, n[0], n[1], n[2]);
	}
	return e.apply(t, n);
}
o(Qs, "apply");
var $s = Qs;
function ec() {}
o(ec, "noop");
var tc = ec;
function nc(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
o(nc, "copyArray");
var rc = nc, ic = 800, ac = 16, oc = Date.now;
function sc(e) {
	var t = 0, n = 0;
	return function() {
		var r = oc(), i = ac - (r - n);
		if (n = r, i > 0) {
			if (++t >= ic) return arguments[0];
		} else t = 0;
		return e.apply(void 0, arguments);
	};
}
o(sc, "shortOut");
var cc = sc;
function lc(e) {
	return function() {
		return e;
	};
}
o(lc, "constant");
var uc = lc, dc = function() {
	try {
		var e = Js(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}(), fc = cc(dc ? function(e, t) {
	return dc(e, "toString", {
		configurable: !0,
		enumerable: !1,
		value: uc(t),
		writable: !0
	});
} : Ss);
function pc(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
o(pc, "arrayEach");
var mc = pc;
function hc(e, t, n, r) {
	for (var i = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i;) if (t(e[a], a, e)) return a;
	return -1;
}
o(hc, "baseFindIndex");
var gc = hc;
function _c(e) {
	return e !== e;
}
o(_c, "baseIsNaN");
var vc = _c;
function yc(e, t, n) {
	for (var r = n - 1, i = e.length; ++r < i;) if (e[r] === t) return r;
	return -1;
}
o(yc, "strictIndexOf");
var bc = yc;
function xc(e, t, n) {
	return t === t ? bc(e, t, n) : gc(e, vc, n);
}
o(xc, "baseIndexOf");
var Sc = xc;
function Cc(e, t) {
	return !!(e != null && e.length) && Sc(e, t, 0) > -1;
}
o(Cc, "arrayIncludes");
var wc = Cc, Tc = 9007199254740991, Ec = /^(?:0|[1-9]\d*)$/;
function Dc(e, t) {
	var n = typeof e;
	return t ??= Tc, !!t && (n == "number" || n != "symbol" && Ec.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
o(Dc, "isIndex");
var Oc = Dc;
function kc(e, t, n) {
	t == "__proto__" && dc ? dc(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
o(kc, "baseAssignValue");
var Ac = kc;
function jc(e, t) {
	return e === t || e !== e && t !== t;
}
o(jc, "eq");
var Mc = jc, Nc = Object.prototype.hasOwnProperty;
function Pc(e, t, n) {
	var r = e[t];
	(!(Nc.call(e, t) && Mc(r, n)) || n === void 0 && !(t in e)) && Ac(e, t, n);
}
o(Pc, "assignValue");
var Fc = Pc;
function Ic(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? Ac(n, s, c) : Fc(n, s, c);
	}
	return n;
}
o(Ic, "copyObject");
var Lc = Ic, Rc = Math.max;
function zc(e, t, n) {
	return t = Rc(t === void 0 ? e.length - 1 : t, 0), function() {
		for (var r = arguments, i = -1, a = Rc(r.length - t, 0), o = Array(a); ++i < a;) o[i] = r[t + i];
		i = -1;
		for (var s = Array(t + 1); ++i < t;) s[i] = r[i];
		return s[t] = n(o), $s(e, this, s);
	};
}
o(zc, "overRest");
var Bc = zc;
function Vc(e, t) {
	return fc(Bc(e, t, Ss), e + "");
}
o(Vc, "baseRest");
var Hc = Vc, Uc = 9007199254740991;
function Wc(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Uc;
}
o(Wc, "isLength");
var Gc = Wc;
function Kc(e) {
	return e != null && Gc(e.length) && !Os(e);
}
o(Kc, "isArrayLike");
var qc = Kc;
function Jc(e, t, n) {
	if (!ss(n)) return !1;
	var r = typeof t;
	return (r == "number" ? qc(n) && Oc(t, n.length) : r == "string" && t in n) ? Mc(n[t], e) : !1;
}
o(Jc, "isIterateeCall");
var Yc = Jc;
function Xc(e) {
	return Hc(function(t, n) {
		var r = -1, i = n.length, a = i > 1 ? n[i - 1] : void 0, o = i > 2 ? n[2] : void 0;
		for (a = e.length > 3 && typeof a == "function" ? (i--, a) : void 0, o && Yc(n[0], n[1], o) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++r < i;) {
			var s = n[r];
			s && e(t, s, r, a);
		}
		return t;
	});
}
o(Xc, "createAssigner");
var Zc = Xc, Qc = Object.prototype;
function $c(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || Qc);
}
o($c, "isPrototype");
var el = $c;
function tl(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
o(tl, "baseTimes");
var nl = tl, rl = "[object Arguments]";
function il(e) {
	return Wo(e) && Ho(e) == rl;
}
o(il, "baseIsArguments");
var al = il, ol = Object.prototype, sl = ol.hasOwnProperty, cl = ol.propertyIsEnumerable, ll = al(/* @__PURE__ */ function() {
	return arguments;
}()) ? al : function(e) {
	return Wo(e) && sl.call(e, "callee") && !cl.call(e, "callee");
};
function ul() {
	return !1;
}
o(ul, "stubFalse");
var dl = ul, fl = typeof exports == "object" && exports && !exports.nodeType && exports, pl = fl && typeof module == "object" && module && !module.nodeType && module, ml = pl && pl.exports === fl ? Do.Buffer : void 0, hl = (ml ? ml.isBuffer : void 0) || dl, gl = "[object Arguments]", _l = "[object Array]", vl = "[object Boolean]", yl = "[object Date]", bl = "[object Error]", xl = "[object Function]", Sl = "[object Map]", Cl = "[object Number]", wl = "[object Object]", Tl = "[object RegExp]", El = "[object Set]", Dl = "[object String]", Ol = "[object WeakMap]", kl = "[object ArrayBuffer]", Al = "[object DataView]", jl = "[object Float32Array]", Ml = "[object Float64Array]", Nl = "[object Int8Array]", Pl = "[object Int16Array]", Fl = "[object Int32Array]", Il = "[object Uint8Array]", Ll = "[object Uint8ClampedArray]", Rl = "[object Uint16Array]", zl = "[object Uint32Array]", R = {};
R[jl] = R[Ml] = R[Nl] = R[Pl] = R[Fl] = R[Il] = R[Ll] = R[Rl] = R[zl] = !0, R[gl] = R[_l] = R[kl] = R[vl] = R[Al] = R[yl] = R[bl] = R[xl] = R[Sl] = R[Cl] = R[wl] = R[Tl] = R[El] = R[Dl] = R[Ol] = !1;
function Bl(e) {
	return Wo(e) && Gc(e.length) && !!R[Ho(e)];
}
o(Bl, "baseIsTypedArray");
var Vl = Bl;
function Hl(e) {
	return function(t) {
		return e(t);
	};
}
o(Hl, "baseUnary");
var Ul = Hl, Wl = typeof exports == "object" && exports && !exports.nodeType && exports, Gl = Wl && typeof module == "object" && module && !module.nodeType && module, Kl = Gl && Gl.exports === Wl && To.process, ql = function() {
	try {
		return Gl && Gl.require && Gl.require("util").types || Kl && Kl.binding && Kl.binding("util");
	} catch {}
}(), Jl = ql && ql.isTypedArray, Yl = Jl ? Ul(Jl) : Vl, Xl = Object.prototype.hasOwnProperty;
function Zl(e, t) {
	var n = L(e), r = !n && ll(e), i = !n && !r && hl(e), a = !n && !r && !i && Yl(e), o = n || r || i || a, s = o ? nl(e.length, String) : [], c = s.length;
	for (var l in e) (t || Xl.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Oc(l, c))) && s.push(l);
	return s;
}
o(Zl, "arrayLikeKeys");
var Ql = Zl;
function $l(e, t) {
	return function(n) {
		return e(t(n));
	};
}
o($l, "overArg");
var eu = $l, tu = eu(Object.keys, Object), nu = Object.prototype.hasOwnProperty;
function ru(e) {
	if (!el(e)) return tu(e);
	var t = [];
	for (var n in Object(e)) nu.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
o(ru, "baseKeys");
var iu = ru;
function au(e) {
	return qc(e) ? Ql(e) : iu(e);
}
o(au, "keys");
var ou = au, su = Object.prototype.hasOwnProperty, cu = Zc(function(e, t) {
	if (el(t) || qc(t)) {
		Lc(t, ou(t), e);
		return;
	}
	for (var n in t) su.call(t, n) && Fc(e, n, t[n]);
});
function lu(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
o(lu, "nativeKeysIn");
var uu = lu, du = Object.prototype.hasOwnProperty;
function fu(e) {
	if (!ss(e)) return uu(e);
	var t = el(e), n = [];
	for (var r in e) r == "constructor" && (t || !du.call(e, r)) || n.push(r);
	return n;
}
o(fu, "baseKeysIn");
var pu = fu;
function mu(e) {
	return qc(e) ? Ql(e, !0) : pu(e);
}
o(mu, "keysIn");
var hu = mu, gu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, _u = /^\w*$/;
function vu(e, t) {
	if (L(e)) return !1;
	var n = typeof e;
	return n == "number" || n == "symbol" || n == "boolean" || e == null || qo(e) ? !0 : _u.test(e) || !gu.test(e) || t != null && e in Object(t);
}
o(vu, "isKey");
var yu = vu, bu = Js(Object, "create");
function xu() {
	this.__data__ = bu ? bu(null) : {}, this.size = 0;
}
o(xu, "hashClear");
var Su = xu;
function Cu(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= +!!t, t;
}
o(Cu, "hashDelete");
var wu = Cu, Tu = "__lodash_hash_undefined__", Eu = Object.prototype.hasOwnProperty;
function Du(e) {
	var t = this.__data__;
	if (bu) {
		var n = t[e];
		return n === Tu ? void 0 : n;
	}
	return Eu.call(t, e) ? t[e] : void 0;
}
o(Du, "hashGet");
var Ou = Du, ku = Object.prototype.hasOwnProperty;
function Au(e) {
	var t = this.__data__;
	return bu ? t[e] !== void 0 : ku.call(t, e);
}
o(Au, "hashHas");
var ju = Au, Mu = "__lodash_hash_undefined__";
function Nu(e, t) {
	var n = this.__data__;
	return this.size += +!this.has(e), n[e] = bu && t === void 0 ? Mu : t, this;
}
o(Nu, "hashSet");
var Pu = Nu;
function Fu(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
o(Fu, "Hash"), Fu.prototype.clear = Su, Fu.prototype.delete = wu, Fu.prototype.get = Ou, Fu.prototype.has = ju, Fu.prototype.set = Pu;
var Iu = Fu;
function Lu() {
	this.__data__ = [], this.size = 0;
}
o(Lu, "listCacheClear");
var Ru = Lu;
function zu(e, t) {
	for (var n = e.length; n--;) if (Mc(e[n][0], t)) return n;
	return -1;
}
o(zu, "assocIndexOf");
var Bu = zu, Vu = Array.prototype.splice;
function Hu(e) {
	var t = this.__data__, n = Bu(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : Vu.call(t, n, 1), --this.size, !0);
}
o(Hu, "listCacheDelete");
var Uu = Hu;
function Wu(e) {
	var t = this.__data__, n = Bu(t, e);
	return n < 0 ? void 0 : t[n][1];
}
o(Wu, "listCacheGet");
var Gu = Wu;
function Ku(e) {
	return Bu(this.__data__, e) > -1;
}
o(Ku, "listCacheHas");
var qu = Ku;
function Ju(e, t) {
	var n = this.__data__, r = Bu(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
o(Ju, "listCacheSet");
var Yu = Ju;
function Xu(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
o(Xu, "ListCache"), Xu.prototype.clear = Ru, Xu.prototype.delete = Uu, Xu.prototype.get = Gu, Xu.prototype.has = qu, Xu.prototype.set = Yu;
var Zu = Xu, Qu = Js(Do, "Map");
function $u() {
	this.size = 0, this.__data__ = {
		hash: new Iu(),
		map: new (Qu || Zu)(),
		string: new Iu()
	};
}
o($u, "mapCacheClear");
var ed = $u;
function td(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
o(td, "isKeyable");
var nd = td;
function rd(e, t) {
	var n = e.__data__;
	return nd(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
o(rd, "getMapData");
var id = rd;
function ad(e) {
	var t = id(this, e).delete(e);
	return this.size -= +!!t, t;
}
o(ad, "mapCacheDelete");
var od = ad;
function sd(e) {
	return id(this, e).get(e);
}
o(sd, "mapCacheGet");
var cd = sd;
function ld(e) {
	return id(this, e).has(e);
}
o(ld, "mapCacheHas");
var ud = ld;
function dd(e, t) {
	var n = id(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
o(dd, "mapCacheSet");
var fd = dd;
function pd(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
o(pd, "MapCache"), pd.prototype.clear = ed, pd.prototype.delete = od, pd.prototype.get = cd, pd.prototype.has = ud, pd.prototype.set = fd;
var md = pd, hd = "Expected a function";
function gd(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(hd);
	var n = /* @__PURE__ */ o(function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	}, "memoized");
	return n.cache = new (gd.Cache || md)(), n;
}
o(gd, "memoize"), gd.Cache = md;
var _d = gd, vd = 500;
function yd(e) {
	var t = _d(e, function(e) {
		return n.size === vd && n.clear(), e;
	}), n = t.cache;
	return t;
}
o(yd, "memoizeCapped");
var bd = yd, xd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Sd = /\\(\\)?/g, Cd = bd(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(xd, function(e, n, r, i) {
		t.push(r ? i.replace(Sd, "$1") : n || e);
	}), t;
});
function wd(e) {
	return e == null ? "" : $o(e);
}
o(wd, "toString");
var Td = wd;
function Ed(e, t) {
	return L(e) ? e : yu(e, t) ? [e] : Cd(Td(e));
}
o(Ed, "castPath");
var Dd = Ed;
function Od(e) {
	if (typeof e == "string" || qo(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
o(Od, "toKey");
var kd = Od;
function Ad(e, t) {
	t = Dd(t, e);
	for (var n = 0, r = t.length; e != null && n < r;) e = e[kd(t[n++])];
	return n && n == r ? e : void 0;
}
o(Ad, "baseGet");
var jd = Ad;
function Md(e, t, n) {
	var r = e == null ? void 0 : jd(e, t);
	return r === void 0 ? n : r;
}
o(Md, "get");
var Nd = Md;
function Pd(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
o(Pd, "arrayPush");
var Fd = Pd, Id = Oo ? Oo.isConcatSpreadable : void 0;
function Ld(e) {
	return L(e) || ll(e) || !!(Id && e && e[Id]);
}
o(Ld, "isFlattenable");
var Rd = Ld;
function zd(e, t, n, r, i) {
	var a = -1, o = e.length;
	for (n ||= Rd, i ||= []; ++a < o;) {
		var s = e[a];
		t > 0 && n(s) ? t > 1 ? zd(s, t - 1, n, r, i) : Fd(i, s) : r || (i[i.length] = s);
	}
	return i;
}
o(zd, "baseFlatten");
var Bd = zd;
function Vd(e) {
	return e != null && e.length ? Bd(e, 1) : [];
}
o(Vd, "flatten");
var Hd = Vd, Ud = eu(Object.getPrototypeOf, Object);
function Wd(e, t, n) {
	var r = -1, i = e.length;
	t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
	for (var a = Array(i); ++r < i;) a[r] = e[r + t];
	return a;
}
o(Wd, "baseSlice");
var Gd = Wd;
function Kd(e, t, n, r) {
	var i = -1, a = e == null ? 0 : e.length;
	for (r && a && (n = e[++i]); ++i < a;) n = t(n, e[i], i, e);
	return n;
}
o(Kd, "arrayReduce");
var qd = Kd;
function Jd() {
	this.__data__ = new Zu(), this.size = 0;
}
o(Jd, "stackClear");
var Yd = Jd;
function Xd(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
o(Xd, "stackDelete");
var Zd = Xd;
function Qd(e) {
	return this.__data__.get(e);
}
o(Qd, "stackGet");
var $d = Qd;
function ef(e) {
	return this.__data__.has(e);
}
o(ef, "stackHas");
var tf = ef, nf = 200;
function rf(e, t) {
	var n = this.__data__;
	if (n instanceof Zu) {
		var r = n.__data__;
		if (!Qu || r.length < nf - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new md(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
o(rf, "stackSet");
var af = rf;
function of(e) {
	var t = this.__data__ = new Zu(e);
	this.size = t.size;
}
o(of, "Stack"), of.prototype.clear = Yd, of.prototype.delete = Zd, of.prototype.get = $d, of.prototype.has = tf, of.prototype.set = af;
var sf = of;
function cf(e, t) {
	return e && Lc(t, ou(t), e);
}
o(cf, "baseAssign");
var lf = cf;
function uf(e, t) {
	return e && Lc(t, hu(t), e);
}
o(uf, "baseAssignIn");
var df = uf, ff = typeof exports == "object" && exports && !exports.nodeType && exports, pf = ff && typeof module == "object" && module && !module.nodeType && module, mf = pf && pf.exports === ff ? Do.Buffer : void 0, hf = mf ? mf.allocUnsafe : void 0;
function gf(e, t) {
	if (t) return e.slice();
	var n = e.length, r = hf ? hf(n) : new e.constructor(n);
	return e.copy(r), r;
}
o(gf, "cloneBuffer");
var _f = gf;
function vf(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
o(vf, "arrayFilter");
var yf = vf;
function bf() {
	return [];
}
o(bf, "stubArray");
var xf = bf, Sf = Object.prototype.propertyIsEnumerable, Cf = Object.getOwnPropertySymbols, wf = Cf ? function(e) {
	return e == null ? [] : (e = Object(e), yf(Cf(e), function(t) {
		return Sf.call(e, t);
	}));
} : xf;
function Tf(e, t) {
	return Lc(e, wf(e), t);
}
o(Tf, "copySymbols");
var Ef = Tf, Df = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) Fd(t, wf(e)), e = Ud(e);
	return t;
} : xf;
function Of(e, t) {
	return Lc(e, Df(e), t);
}
o(Of, "copySymbolsIn");
var kf = Of;
function Af(e, t, n) {
	var r = t(e);
	return L(e) ? r : Fd(r, n(e));
}
o(Af, "baseGetAllKeys");
var jf = Af;
function Mf(e) {
	return jf(e, ou, wf);
}
o(Mf, "getAllKeys");
var Nf = Mf;
function Pf(e) {
	return jf(e, hu, Df);
}
o(Pf, "getAllKeysIn");
var Ff = Pf, If = Js(Do, "DataView"), Lf = Js(Do, "Promise"), Rf = Js(Do, "Set"), zf = "[object Map]", Bf = "[object Object]", Vf = "[object Promise]", Hf = "[object Set]", Uf = "[object WeakMap]", Wf = "[object DataView]", Gf = Fs(If), Kf = Fs(Qu), qf = Fs(Lf), Jf = Fs(Rf), Yf = Fs(Ys), Xf = Ho;
(If && Xf(new If(/* @__PURE__ */ new ArrayBuffer(1))) != Wf || Qu && Xf(new Qu()) != zf || Lf && Xf(Lf.resolve()) != Vf || Rf && Xf(new Rf()) != Hf || Ys && Xf(new Ys()) != Uf) && (Xf = /* @__PURE__ */ o(function(e) {
	var t = Ho(e), n = t == Bf ? e.constructor : void 0, r = n ? Fs(n) : "";
	if (r) switch (r) {
		case Gf: return Wf;
		case Kf: return zf;
		case qf: return Vf;
		case Jf: return Hf;
		case Yf: return Uf;
	}
	return t;
}, "getTag"));
var Zf = Xf, Qf = Object.prototype.hasOwnProperty;
function $f(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && Qf.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
o($f, "initCloneArray");
var ep = $f, tp = Do.Uint8Array;
function np(e) {
	var t = new e.constructor(e.byteLength);
	return new tp(t).set(new tp(e)), t;
}
o(np, "cloneArrayBuffer");
var rp = np;
function ip(e, t) {
	var n = t ? rp(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
o(ip, "cloneDataView");
var ap = ip, op = /\w*$/;
function sp(e) {
	var t = new e.constructor(e.source, op.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
o(sp, "cloneRegExp");
var cp = sp, lp = Oo ? Oo.prototype : void 0, up = lp ? lp.valueOf : void 0;
function dp(e) {
	return up ? Object(up.call(e)) : {};
}
o(dp, "cloneSymbol");
var fp = dp;
function pp(e, t) {
	var n = t ? rp(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
o(pp, "cloneTypedArray");
var mp = pp, hp = "[object Boolean]", gp = "[object Date]", _p = "[object Map]", vp = "[object Number]", yp = "[object RegExp]", bp = "[object Set]", xp = "[object String]", Sp = "[object Symbol]", Cp = "[object ArrayBuffer]", wp = "[object DataView]", Tp = "[object Float32Array]", Ep = "[object Float64Array]", Dp = "[object Int8Array]", Op = "[object Int16Array]", kp = "[object Int32Array]", Ap = "[object Uint8Array]", jp = "[object Uint8ClampedArray]", Mp = "[object Uint16Array]", Np = "[object Uint32Array]";
function Pp(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case Cp: return rp(e);
		case hp:
		case gp: return new r(+e);
		case wp: return ap(e, n);
		case Tp:
		case Ep:
		case Dp:
		case Op:
		case kp:
		case Ap:
		case jp:
		case Mp:
		case Np: return mp(e, n);
		case _p: return new r();
		case vp:
		case xp: return new r(e);
		case yp: return cp(e);
		case bp: return new r();
		case Sp: return fp(e);
	}
}
o(Pp, "initCloneByTag");
var Fp = Pp;
function Ip(e) {
	return typeof e.constructor == "function" && !el(e) ? Zs(Ud(e)) : {};
}
o(Ip, "initCloneObject");
var Lp = Ip, Rp = "[object Map]";
function zp(e) {
	return Wo(e) && Zf(e) == Rp;
}
o(zp, "baseIsMap");
var Bp = zp, Vp = ql && ql.isMap, Hp = Vp ? Ul(Vp) : Bp, Up = "[object Set]";
function Wp(e) {
	return Wo(e) && Zf(e) == Up;
}
o(Wp, "baseIsSet");
var Gp = Wp, Kp = ql && ql.isSet, qp = Kp ? Ul(Kp) : Gp, Jp = 1, Yp = 2, Xp = 4, Zp = "[object Arguments]", Qp = "[object Array]", $p = "[object Boolean]", em = "[object Date]", tm = "[object Error]", nm = "[object Function]", rm = "[object GeneratorFunction]", im = "[object Map]", am = "[object Number]", om = "[object Object]", sm = "[object RegExp]", cm = "[object Set]", lm = "[object String]", um = "[object Symbol]", dm = "[object WeakMap]", fm = "[object ArrayBuffer]", pm = "[object DataView]", mm = "[object Float32Array]", hm = "[object Float64Array]", gm = "[object Int8Array]", _m = "[object Int16Array]", vm = "[object Int32Array]", ym = "[object Uint8Array]", bm = "[object Uint8ClampedArray]", xm = "[object Uint16Array]", Sm = "[object Uint32Array]", z = {};
z[Zp] = z[Qp] = z[fm] = z[pm] = z[$p] = z[em] = z[mm] = z[hm] = z[gm] = z[_m] = z[vm] = z[im] = z[am] = z[om] = z[sm] = z[cm] = z[lm] = z[um] = z[ym] = z[bm] = z[xm] = z[Sm] = !0, z[tm] = z[nm] = z[dm] = !1;
function Cm(e, t, n, r, i, a) {
	var o, s = t & Jp, c = t & Yp, l = t & Xp;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!ss(e)) return e;
	var u = L(e);
	if (u) {
		if (o = ep(e), !s) return rc(e, o);
	} else {
		var d = Zf(e), f = d == nm || d == rm;
		if (hl(e)) return _f(e, s);
		if (d == om || d == Zp || f && !i) {
			if (o = c || f ? {} : Lp(e), !s) return c ? kf(e, df(o, e)) : Ef(e, lf(o, e));
		} else {
			if (!z[d]) return i ? e : {};
			o = Fp(e, d, s);
		}
	}
	a ||= new sf();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), qp(e) ? e.forEach(function(r) {
		o.add(Cm(r, t, n, r, e, a));
	}) : Hp(e) && e.forEach(function(r, i) {
		o.set(i, Cm(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? Ff : Nf : c ? hu : ou)(e);
	return mc(m || e, function(r, i) {
		m && (i = r, r = e[i]), Fc(o, i, Cm(r, t, n, i, e, a));
	}), o;
}
o(Cm, "baseClone");
var wm = Cm, Tm = 4;
function Em(e) {
	return wm(e, Tm);
}
o(Em, "clone");
var Dm = Em;
function Om(e) {
	for (var t = -1, n = e == null ? 0 : e.length, r = 0, i = []; ++t < n;) {
		var a = e[t];
		a && (i[r++] = a);
	}
	return i;
}
o(Om, "compact");
var km = Om, Am = "__lodash_hash_undefined__";
function jm(e) {
	return this.__data__.set(e, Am), this;
}
o(jm, "setCacheAdd");
var Mm = jm;
function Nm(e) {
	return this.__data__.has(e);
}
o(Nm, "setCacheHas");
var Pm = Nm;
function Fm(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.__data__ = new md(); ++t < n;) this.add(e[t]);
}
o(Fm, "SetCache"), Fm.prototype.add = Fm.prototype.push = Mm, Fm.prototype.has = Pm;
var Im = Fm;
function Lm(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
	return !1;
}
o(Lm, "arraySome");
var Rm = Lm;
function zm(e, t) {
	return e.has(t);
}
o(zm, "cacheHas");
var Bm = zm, Vm = 1, Hm = 2;
function Um(e, t, n, r, i, a) {
	var o = n & Vm, s = e.length, c = t.length;
	if (s != c && !(o && c > s)) return !1;
	var l = a.get(e), u = a.get(t);
	if (l && u) return l == t && u == e;
	var d = -1, f = !0, p = n & Hm ? new Im() : void 0;
	for (a.set(e, t), a.set(t, e); ++d < s;) {
		var m = e[d], h = t[d];
		if (r) var g = o ? r(h, m, d, t, e, a) : r(m, h, d, e, t, a);
		if (g !== void 0) {
			if (g) continue;
			f = !1;
			break;
		}
		if (p) {
			if (!Rm(t, function(e, t) {
				if (!Bm(p, t) && (m === e || i(m, e, n, r, a))) return p.push(t);
			})) {
				f = !1;
				break;
			}
		} else if (!(m === h || i(m, h, n, r, a))) {
			f = !1;
			break;
		}
	}
	return a.delete(e), a.delete(t), f;
}
o(Um, "equalArrays");
var Wm = Um;
function Gm(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e, r) {
		n[++t] = [r, e];
	}), n;
}
o(Gm, "mapToArray");
var Km = Gm;
function qm(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e) {
		n[++t] = e;
	}), n;
}
o(qm, "setToArray");
var Jm = qm, Ym = 1, Xm = 2, Zm = "[object Boolean]", Qm = "[object Date]", $m = "[object Error]", eh = "[object Map]", th = "[object Number]", nh = "[object RegExp]", rh = "[object Set]", ih = "[object String]", ah = "[object Symbol]", oh = "[object ArrayBuffer]", sh = "[object DataView]", ch = Oo ? Oo.prototype : void 0, lh = ch ? ch.valueOf : void 0;
function uh(e, t, n, r, i, a, o) {
	switch (n) {
		case sh:
			if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
			e = e.buffer, t = t.buffer;
		case oh: return !(e.byteLength != t.byteLength || !a(new tp(e), new tp(t)));
		case Zm:
		case Qm:
		case th: return Mc(+e, +t);
		case $m: return e.name == t.name && e.message == t.message;
		case nh:
		case ih: return e == t + "";
		case eh: var s = Km;
		case rh:
			var c = r & Ym;
			if (s ||= Jm, e.size != t.size && !c) return !1;
			var l = o.get(e);
			if (l) return l == t;
			r |= Xm, o.set(e, t);
			var u = Wm(s(e), s(t), r, i, a, o);
			return o.delete(e), u;
		case ah: if (lh) return lh.call(e) == lh.call(t);
	}
	return !1;
}
o(uh, "equalByTag");
var dh = uh, fh = 1, ph = Object.prototype.hasOwnProperty;
function mh(e, t, n, r, i, a) {
	var o = n & fh, s = Nf(e), c = s.length;
	if (c != Nf(t).length && !o) return !1;
	for (var l = c; l--;) {
		var u = s[l];
		if (!(o ? u in t : ph.call(t, u))) return !1;
	}
	var d = a.get(e), f = a.get(t);
	if (d && f) return d == t && f == e;
	var p = !0;
	a.set(e, t), a.set(t, e);
	for (var m = o; ++l < c;) {
		u = s[l];
		var h = e[u], g = t[u];
		if (r) var _ = o ? r(g, h, u, t, e, a) : r(h, g, u, e, t, a);
		if (!(_ === void 0 ? h === g || i(h, g, n, r, a) : _)) {
			p = !1;
			break;
		}
		m ||= u == "constructor";
	}
	if (p && !m) {
		var v = e.constructor, y = t.constructor;
		v != y && "constructor" in e && "constructor" in t && !(typeof v == "function" && v instanceof v && typeof y == "function" && y instanceof y) && (p = !1);
	}
	return a.delete(e), a.delete(t), p;
}
o(mh, "equalObjects");
var hh = mh, gh = 1, _h = "[object Arguments]", vh = "[object Array]", yh = "[object Object]", bh = Object.prototype.hasOwnProperty;
function xh(e, t, n, r, i, a) {
	var o = L(e), s = L(t), c = o ? vh : Zf(e), l = s ? vh : Zf(t);
	c = c == _h ? yh : c, l = l == _h ? yh : l;
	var u = c == yh, d = l == yh, f = c == l;
	if (f && hl(e)) {
		if (!hl(t)) return !1;
		o = !0, u = !1;
	}
	if (f && !u) return a ||= new sf(), o || Yl(e) ? Wm(e, t, n, r, i, a) : dh(e, t, c, n, r, i, a);
	if (!(n & gh)) {
		var p = u && bh.call(e, "__wrapped__"), m = d && bh.call(t, "__wrapped__");
		if (p || m) {
			var h = p ? e.value() : e, g = m ? t.value() : t;
			return a ||= new sf(), i(h, g, n, r, a);
		}
	}
	return f ? (a ||= new sf(), hh(e, t, n, r, i, a)) : !1;
}
o(xh, "baseIsEqualDeep");
var Sh = xh;
function Ch(e, t, n, r, i) {
	return e === t ? !0 : e == null || t == null || !Wo(e) && !Wo(t) ? e !== e && t !== t : Sh(e, t, n, r, Ch, i);
}
o(Ch, "baseIsEqual");
var wh = Ch, Th = 1, Eh = 2;
function Dh(e, t, n, r) {
	var i = n.length, a = i, o = !r;
	if (e == null) return !a;
	for (e = Object(e); i--;) {
		var s = n[i];
		if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
	}
	for (; ++i < a;) {
		s = n[i];
		var c = s[0], l = e[c], u = s[1];
		if (o && s[2]) {
			if (l === void 0 && !(c in e)) return !1;
		} else {
			var d = new sf();
			if (r) var f = r(l, u, c, e, t, d);
			if (!(f === void 0 ? wh(u, l, Th | Eh, r, d) : f)) return !1;
		}
	}
	return !0;
}
o(Dh, "baseIsMatch");
var Oh = Dh;
function kh(e) {
	return e === e && !ss(e);
}
o(kh, "isStrictComparable");
var Ah = kh;
function jh(e) {
	for (var t = ou(e), n = t.length; n--;) {
		var r = t[n], i = e[r];
		t[n] = [
			r,
			i,
			Ah(i)
		];
	}
	return t;
}
o(jh, "getMatchData");
var Mh = jh;
function Nh(e, t) {
	return function(n) {
		return n != null && n[e] === t && (t !== void 0 || e in Object(n));
	};
}
o(Nh, "matchesStrictComparable");
var Ph = Nh;
function Fh(e) {
	var t = Mh(e);
	return t.length == 1 && t[0][2] ? Ph(t[0][0], t[0][1]) : function(n) {
		return n === e || Oh(n, e, t);
	};
}
o(Fh, "baseMatches");
var Ih = Fh;
function Lh(e, t) {
	return e != null && t in Object(e);
}
o(Lh, "baseHasIn");
var Rh = Lh;
function zh(e, t, n) {
	t = Dd(t, e);
	for (var r = -1, i = t.length, a = !1; ++r < i;) {
		var o = kd(t[r]);
		if (!(a = e != null && n(e, o))) break;
		e = e[o];
	}
	return a || ++r != i ? a : (i = e == null ? 0 : e.length, !!i && Gc(i) && Oc(o, i) && (L(e) || ll(e)));
}
o(zh, "hasPath");
var Bh = zh;
function Vh(e, t) {
	return e != null && Bh(e, t, Rh);
}
o(Vh, "hasIn");
var Hh = Vh, Uh = 1, Wh = 2;
function Gh(e, t) {
	return yu(e) && Ah(t) ? Ph(kd(e), t) : function(n) {
		var r = Nd(n, e);
		return r === void 0 && r === t ? Hh(n, e) : wh(t, r, Uh | Wh);
	};
}
o(Gh, "baseMatchesProperty");
var Kh = Gh;
function qh(e) {
	return function(t) {
		return t?.[e];
	};
}
o(qh, "baseProperty");
var Jh = qh;
function Yh(e) {
	return function(t) {
		return jd(t, e);
	};
}
o(Yh, "basePropertyDeep");
var Xh = Yh;
function Zh(e) {
	return yu(e) ? Jh(kd(e)) : Xh(e);
}
o(Zh, "property");
var Qh = Zh;
function $h(e) {
	return typeof e == "function" ? e : e == null ? Ss : typeof e == "object" ? L(e) ? Kh(e[0], e[1]) : Ih(e) : Qh(e);
}
o($h, "baseIteratee");
var eg = $h;
function tg(e, t, n, r) {
	for (var i = -1, a = e == null ? 0 : e.length; ++i < a;) {
		var o = e[i];
		t(r, o, n(o), e);
	}
	return r;
}
o(tg, "arrayAggregator");
var ng = tg;
function rg(e) {
	return function(t, n, r) {
		for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
			var c = o[e ? s : ++i];
			if (n(a[c], c, a) === !1) break;
		}
		return t;
	};
}
o(rg, "createBaseFor");
var ig = rg();
function ag(e, t) {
	return e && ig(e, t, ou);
}
o(ag, "baseForOwn");
var og = ag;
function sg(e, t) {
	return function(n, r) {
		if (n == null) return n;
		if (!qc(n)) return e(n, r);
		for (var i = n.length, a = t ? i : -1, o = Object(n); (t ? a-- : ++a < i) && r(o[a], a, o) !== !1;);
		return n;
	};
}
o(sg, "createBaseEach");
var cg = sg(og);
function lg(e, t, n, r) {
	return cg(e, function(e, i, a) {
		t(r, e, n(e), a);
	}), r;
}
o(lg, "baseAggregator");
var ug = lg;
function dg(e, t) {
	return function(n, r) {
		var i = L(n) ? ng : ug, a = t ? t() : {};
		return i(n, e, eg(r), a);
	};
}
o(dg, "createAggregator");
var fg = dg, pg = Object.prototype, mg = pg.hasOwnProperty, hg = Hc(function(e, t) {
	e = Object(e);
	var n = -1, r = t.length, i = r > 2 ? t[2] : void 0;
	for (i && Yc(t[0], t[1], i) && (r = 1); ++n < r;) for (var a = t[n], o = hu(a), s = -1, c = o.length; ++s < c;) {
		var l = o[s], u = e[l];
		(u === void 0 || Mc(u, pg[l]) && !mg.call(e, l)) && (e[l] = a[l]);
	}
	return e;
});
function gg(e) {
	return Wo(e) && qc(e);
}
o(gg, "isArrayLikeObject");
var _g = gg;
function vg(e, t, n) {
	for (var r = -1, i = e == null ? 0 : e.length; ++r < i;) if (n(t, e[r])) return !0;
	return !1;
}
o(vg, "arrayIncludesWith");
var yg = vg, bg = 200;
function xg(e, t, n, r) {
	var i = -1, a = wc, o = !0, s = e.length, c = [], l = t.length;
	if (!s) return c;
	n && (t = Yo(t, Ul(n))), r ? (a = yg, o = !1) : t.length >= bg && (a = Bm, o = !1, t = new Im(t));
	e: for (; ++i < s;) {
		var u = e[i], d = n == null ? u : n(u);
		if (u = r || u !== 0 ? u : 0, o && d === d) {
			for (var f = l; f--;) if (t[f] === d) continue e;
			c.push(u);
		} else a(t, d, r) || c.push(u);
	}
	return c;
}
o(xg, "baseDifference");
var Sg = xg, Cg = Hc(function(e, t) {
	return _g(e) ? Sg(e, Bd(t, 1, _g, !0)) : [];
});
function wg(e) {
	var t = e == null ? 0 : e.length;
	return t ? e[t - 1] : void 0;
}
o(wg, "last");
var Tg = wg;
function Eg(e, t, n) {
	var r = e == null ? 0 : e.length;
	return r ? (t = n || t === void 0 ? 1 : bs(t), Gd(e, t < 0 ? 0 : t, r)) : [];
}
o(Eg, "drop");
var Dg = Eg;
function Og(e, t, n) {
	var r = e == null ? 0 : e.length;
	return r ? (t = n || t === void 0 ? 1 : bs(t), t = r - t, Gd(e, 0, t < 0 ? 0 : t)) : [];
}
o(Og, "dropRight");
var kg = Og;
function Ag(e) {
	return typeof e == "function" ? e : Ss;
}
o(Ag, "castFunction");
var jg = Ag;
function Mg(e, t) {
	return (L(e) ? mc : cg)(e, jg(t));
}
o(Mg, "forEach");
var B = Mg;
function Ng(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (!t(e[n], n, e)) return !1;
	return !0;
}
o(Ng, "arrayEvery");
var Pg = Ng;
function Fg(e, t) {
	var n = !0;
	return cg(e, function(e, r, i) {
		return n = !!t(e, r, i), n;
	}), n;
}
o(Fg, "baseEvery");
var Ig = Fg;
function Lg(e, t, n) {
	var r = L(e) ? Pg : Ig;
	return n && Yc(e, t, n) && (t = void 0), r(e, eg(t));
}
o(Lg, "every");
var Rg = Lg;
function zg(e, t) {
	var n = [];
	return cg(e, function(e, r, i) {
		t(e, r, i) && n.push(e);
	}), n;
}
o(zg, "baseFilter");
var Bg = zg;
function Vg(e, t) {
	return (L(e) ? yf : Bg)(e, eg(t));
}
o(Vg, "filter");
var Hg = Vg;
function Ug(e) {
	return function(t, n, r) {
		var i = Object(t);
		if (!qc(t)) {
			var a = eg(n);
			t = ou(t), n = /* @__PURE__ */ o(function(e) {
				return a(i[e], e, i);
			}, "predicate");
		}
		var s = e(t, n, r);
		return s > -1 ? i[a ? t[s] : s] : void 0;
	};
}
o(Ug, "createFind");
var Wg = Ug, Gg = Math.max;
function Kg(e, t, n) {
	var r = e == null ? 0 : e.length;
	if (!r) return -1;
	var i = n == null ? 0 : bs(n);
	return i < 0 && (i = Gg(r + i, 0)), gc(e, eg(t), i);
}
o(Kg, "findIndex");
var qg = Wg(Kg);
function Jg(e) {
	return e && e.length ? e[0] : void 0;
}
o(Jg, "head");
var Yg = Jg;
function Xg(e, t) {
	var n = -1, r = qc(e) ? Array(e.length) : [];
	return cg(e, function(e, i, a) {
		r[++n] = t(e, i, a);
	}), r;
}
o(Xg, "baseMap");
var Zg = Xg;
function Qg(e, t) {
	return (L(e) ? Yo : Zg)(e, eg(t));
}
o(Qg, "map");
var V = Qg;
function $g(e, t) {
	return Bd(V(e, t), 1);
}
o($g, "flatMap");
var e_ = $g, t_ = Object.prototype.hasOwnProperty, n_ = fg(function(e, t, n) {
	t_.call(e, n) ? e[n].push(t) : Ac(e, n, [t]);
}), r_ = Object.prototype.hasOwnProperty;
function i_(e, t) {
	return e != null && r_.call(e, t);
}
o(i_, "baseHas");
var a_ = i_;
function o_(e, t) {
	return e != null && Bh(e, t, a_);
}
o(o_, "has");
var H = o_, s_ = "[object String]";
function c_(e) {
	return typeof e == "string" || !L(e) && Wo(e) && Ho(e) == s_;
}
o(c_, "isString");
var l_ = c_;
function u_(e, t) {
	return Yo(t, function(t) {
		return e[t];
	});
}
o(u_, "baseValues");
var d_ = u_;
function f_(e) {
	return e == null ? [] : d_(e, ou(e));
}
o(f_, "values");
var p_ = f_, m_ = Math.max;
function h_(e, t, n, r) {
	e = qc(e) ? e : p_(e), n = n && !r ? bs(n) : 0;
	var i = e.length;
	return n < 0 && (n = m_(i + n, 0)), l_(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && Sc(e, t, n) > -1;
}
o(h_, "includes");
var g_ = h_, __ = Math.max;
function v_(e, t, n) {
	var r = e == null ? 0 : e.length;
	if (!r) return -1;
	var i = n == null ? 0 : bs(n);
	return i < 0 && (i = __(r + i, 0)), Sc(e, t, i);
}
o(v_, "indexOf");
var y_ = v_, b_ = "[object Map]", x_ = "[object Set]", S_ = Object.prototype.hasOwnProperty;
function C_(e) {
	if (e == null) return !0;
	if (qc(e) && (L(e) || typeof e == "string" || typeof e.splice == "function" || hl(e) || Yl(e) || ll(e))) return !e.length;
	var t = Zf(e);
	if (t == b_ || t == x_) return !e.size;
	if (el(e)) return !iu(e).length;
	for (var n in e) if (S_.call(e, n)) return !1;
	return !0;
}
o(C_, "isEmpty");
var U = C_, w_ = "[object RegExp]";
function T_(e) {
	return Wo(e) && Ho(e) == w_;
}
o(T_, "baseIsRegExp");
var E_ = T_, D_ = ql && ql.isRegExp, O_ = D_ ? Ul(D_) : E_;
function k_(e) {
	return e === void 0;
}
o(k_, "isUndefined");
var A_ = k_, j_ = "Expected a function";
function M_(e) {
	if (typeof e != "function") throw TypeError(j_);
	return function() {
		var t = arguments;
		switch (t.length) {
			case 0: return !e.call(this);
			case 1: return !e.call(this, t[0]);
			case 2: return !e.call(this, t[0], t[1]);
			case 3: return !e.call(this, t[0], t[1], t[2]);
		}
		return !e.apply(this, t);
	};
}
o(M_, "negate");
var N_ = M_;
function P_(e, t, n, r) {
	if (!ss(e)) return e;
	t = Dd(t, e);
	for (var i = -1, a = t.length, o = a - 1, s = e; s != null && ++i < a;) {
		var c = kd(t[i]), l = n;
		if (c === "__proto__" || c === "constructor" || c === "prototype") return e;
		if (i != o) {
			var u = s[c];
			l = r ? r(u, c, s) : void 0, l === void 0 && (l = ss(u) ? u : Oc(t[i + 1]) ? [] : {});
		}
		Fc(s, c, l), s = s[c];
	}
	return e;
}
o(P_, "baseSet");
var F_ = P_;
function I_(e, t, n) {
	for (var r = -1, i = t.length, a = {}; ++r < i;) {
		var o = t[r], s = jd(e, o);
		n(s, o) && F_(a, Dd(o, e), s);
	}
	return a;
}
o(I_, "basePickBy");
var L_ = I_;
function R_(e, t) {
	if (e == null) return {};
	var n = Yo(Ff(e), function(e) {
		return [e];
	});
	return t = eg(t), L_(e, n, function(e, n) {
		return t(e, n[0]);
	});
}
o(R_, "pickBy");
var z_ = R_;
function B_(e, t, n, r, i) {
	return i(e, function(e, i, a) {
		n = r ? (r = !1, e) : t(n, e, i, a);
	}), n;
}
o(B_, "baseReduce");
var V_ = B_;
function H_(e, t, n) {
	var r = L(e) ? qd : V_, i = arguments.length < 3;
	return r(e, eg(t), n, i, cg);
}
o(H_, "reduce");
var U_ = H_;
function W_(e, t) {
	return (L(e) ? yf : Bg)(e, N_(eg(t)));
}
o(W_, "reject");
var G_ = W_;
function K_(e, t) {
	var n;
	return cg(e, function(e, r, i) {
		return n = t(e, r, i), !n;
	}), !!n;
}
o(K_, "baseSome");
var q_ = K_;
function J_(e, t, n) {
	var r = L(e) ? Rm : q_;
	return n && Yc(e, t, n) && (t = void 0), r(e, eg(t));
}
o(J_, "some");
var Y_ = J_, X_ = Rf && 1 / Jm(new Rf([, -0]))[1] == 1 / 0 ? function(e) {
	return new Rf(e);
} : tc, Z_ = 200;
function Q_(e, t, n) {
	var r = -1, i = wc, a = e.length, o = !0, s = [], c = s;
	if (n) o = !1, i = yg;
	else if (a >= Z_) {
		var l = t ? null : X_(e);
		if (l) return Jm(l);
		o = !1, i = Bm, c = new Im();
	} else c = t ? [] : s;
	e: for (; ++r < a;) {
		var u = e[r], d = t ? t(u) : u;
		if (u = n || u !== 0 ? u : 0, o && d === d) {
			for (var f = c.length; f--;) if (c[f] === d) continue e;
			t && c.push(d), s.push(u);
		} else i(c, d, n) || (c !== s && c.push(d), s.push(u));
	}
	return s;
}
o(Q_, "baseUniq");
var $_ = Q_;
function ev(e) {
	return e && e.length ? $_(e) : [];
}
o(ev, "uniq");
var tv = ev;
function nv(e) {
	console && console.error && console.error(`Error: ${e}`);
}
o(nv, "PRINT_ERROR");
function rv(e) {
	console && console.warn && console.warn(`Warning: ${e}`);
}
o(rv, "PRINT_WARNING");
function iv(e) {
	let t = (/* @__PURE__ */ new Date()).getTime(), n = e();
	return {
		time: (/* @__PURE__ */ new Date()).getTime() - t,
		value: n
	};
}
o(iv, "timer");
function av(e) {
	function t() {}
	o(t, "FakeConstructor"), t.prototype = e;
	let n = new t();
	function r() {
		return typeof n.bar;
	}
	return o(r, "fakeAccess"), r(), r(), e;
}
o(av, "toFastProperties");
function ov(e) {
	return sv(e) ? e.LABEL : e.name;
}
o(ov, "tokenLabel");
function sv(e) {
	return l_(e.LABEL) && e.LABEL !== "";
}
o(sv, "hasTokenLabel");
var cv, lv = (cv = class {
	get definition() {
		return this._definition;
	}
	set definition(e) {
		this._definition = e;
	}
	constructor(e) {
		this._definition = e;
	}
	accept(e) {
		e.visit(this), B(this.definition, (t) => {
			t.accept(e);
		});
	}
}, o(cv, "AbstractProduction"), cv), uv, dv = (uv = class extends lv {
	constructor(e) {
		super([]), this.idx = 1, cu(this, z_(e, (e) => e !== void 0));
	}
	set definition(e) {}
	get definition() {
		return this.referencedRule === void 0 ? [] : this.referencedRule.definition;
	}
	accept(e) {
		e.visit(this);
	}
}, o(uv, "NonTerminal"), uv), fv, pv = (fv = class extends lv {
	constructor(e) {
		super(e.definition), this.orgText = "", cu(this, z_(e, (e) => e !== void 0));
	}
}, o(fv, "Rule"), fv), mv, hv = (mv = class extends lv {
	constructor(e) {
		super(e.definition), this.ignoreAmbiguities = !1, cu(this, z_(e, (e) => e !== void 0));
	}
}, o(mv, "Alternative"), mv), gv, _v = (gv = class extends lv {
	constructor(e) {
		super(e.definition), this.idx = 1, cu(this, z_(e, (e) => e !== void 0));
	}
}, o(gv, "Option"), gv), vv, yv = (vv = class extends lv {
	constructor(e) {
		super(e.definition), this.idx = 1, cu(this, z_(e, (e) => e !== void 0));
	}
}, o(vv, "RepetitionMandatory"), vv), bv, xv = (bv = class extends lv {
	constructor(e) {
		super(e.definition), this.idx = 1, cu(this, z_(e, (e) => e !== void 0));
	}
}, o(bv, "RepetitionMandatoryWithSeparator"), bv), Sv, W = (Sv = class extends lv {
	constructor(e) {
		super(e.definition), this.idx = 1, cu(this, z_(e, (e) => e !== void 0));
	}
}, o(Sv, "Repetition"), Sv), Cv, wv = (Cv = class extends lv {
	constructor(e) {
		super(e.definition), this.idx = 1, cu(this, z_(e, (e) => e !== void 0));
	}
}, o(Cv, "RepetitionWithSeparator"), Cv), Tv, Ev = (Tv = class extends lv {
	get definition() {
		return this._definition;
	}
	set definition(e) {
		this._definition = e;
	}
	constructor(e) {
		super(e.definition), this.idx = 1, this.ignoreAmbiguities = !1, this.hasPredicates = !1, cu(this, z_(e, (e) => e !== void 0));
	}
}, o(Tv, "Alternation"), Tv), Dv, G = (Dv = class {
	constructor(e) {
		this.idx = 1, cu(this, z_(e, (e) => e !== void 0));
	}
	accept(e) {
		e.visit(this);
	}
}, o(Dv, "Terminal"), Dv);
function Ov(e) {
	return V(e, kv);
}
o(Ov, "serializeGrammar");
function kv(e) {
	function t(e) {
		return V(e, kv);
	}
	if (o(t, "convertDefinition"), e instanceof dv) {
		let t = {
			type: "NonTerminal",
			name: e.nonTerminalName,
			idx: e.idx
		};
		return l_(e.label) && (t.label = e.label), t;
	}
	if (e instanceof hv) return {
		type: "Alternative",
		definition: t(e.definition)
	};
	if (e instanceof _v) return {
		type: "Option",
		idx: e.idx,
		definition: t(e.definition)
	};
	if (e instanceof yv) return {
		type: "RepetitionMandatory",
		idx: e.idx,
		definition: t(e.definition)
	};
	if (e instanceof xv) return {
		type: "RepetitionMandatoryWithSeparator",
		idx: e.idx,
		separator: kv(new G({ terminalType: e.separator })),
		definition: t(e.definition)
	};
	if (e instanceof wv) return {
		type: "RepetitionWithSeparator",
		idx: e.idx,
		separator: kv(new G({ terminalType: e.separator })),
		definition: t(e.definition)
	};
	if (e instanceof W) return {
		type: "Repetition",
		idx: e.idx,
		definition: t(e.definition)
	};
	if (e instanceof Ev) return {
		type: "Alternation",
		idx: e.idx,
		definition: t(e.definition)
	};
	if (e instanceof G) {
		let t = {
			type: "Terminal",
			name: e.terminalType.name,
			label: ov(e.terminalType),
			idx: e.idx
		};
		l_(e.label) && (t.terminalLabel = e.label);
		let n = e.terminalType.PATTERN;
		return e.terminalType.PATTERN && (t.pattern = O_(n) ? n.source : n), t;
	}
	if (e instanceof pv) return {
		type: "Rule",
		name: e.name,
		orgText: e.orgText,
		definition: t(e.definition)
	};
	throw Error("non exhaustive match");
}
o(kv, "serializeProduction");
var Av, jv = (Av = class {
	visit(e) {
		let t = e;
		switch (t.constructor) {
			case dv: return this.visitNonTerminal(t);
			case hv: return this.visitAlternative(t);
			case _v: return this.visitOption(t);
			case yv: return this.visitRepetitionMandatory(t);
			case xv: return this.visitRepetitionMandatoryWithSeparator(t);
			case wv: return this.visitRepetitionWithSeparator(t);
			case W: return this.visitRepetition(t);
			case Ev: return this.visitAlternation(t);
			case G: return this.visitTerminal(t);
			case pv: return this.visitRule(t);
			/* c8 ignore next 2 */ default: throw Error("non exhaustive match");
		}
	}
	/* c8 ignore next */ visitNonTerminal(e) {}
	/* c8 ignore next */ visitAlternative(e) {}
	/* c8 ignore next */ visitOption(e) {}
	/* c8 ignore next */ visitRepetition(e) {}
	/* c8 ignore next */ visitRepetitionMandatory(e) {}
	/* c8 ignore next 3 */ visitRepetitionMandatoryWithSeparator(e) {}
	/* c8 ignore next */ visitRepetitionWithSeparator(e) {}
	/* c8 ignore next */ visitAlternation(e) {}
	/* c8 ignore next */ visitTerminal(e) {}
	/* c8 ignore next */ visitRule(e) {}
}, o(Av, "GAstVisitor"), Av);
function Mv(e) {
	return e instanceof hv || e instanceof _v || e instanceof W || e instanceof yv || e instanceof xv || e instanceof wv || e instanceof G || e instanceof pv;
}
o(Mv, "isSequenceProd");
function Nv(e, t = []) {
	return e instanceof _v || e instanceof W || e instanceof wv ? !0 : e instanceof Ev ? Y_(e.definition, (e) => Nv(e, t)) : e instanceof dv && g_(t, e) ? !1 : e instanceof lv && (e instanceof dv && t.push(e), Rg(e.definition, (e) => Nv(e, t)));
}
o(Nv, "isOptionalProd");
function Pv(e) {
	return e instanceof Ev;
}
o(Pv, "isBranchingProd");
function Fv(e) {
	if (e instanceof dv) return "SUBRULE";
	if (e instanceof _v) return "OPTION";
	if (e instanceof Ev) return "OR";
	if (e instanceof yv) return "AT_LEAST_ONE";
	if (e instanceof xv) return "AT_LEAST_ONE_SEP";
	if (e instanceof wv) return "MANY_SEP";
	if (e instanceof W) return "MANY";
	if (e instanceof G) return "CONSUME";
	throw Error("non exhaustive match");
}
o(Fv, "getProductionDslName");
var Iv, Lv = (Iv = class {
	walk(e, t = []) {
		B(e.definition, (n, r) => {
			let i = Dg(e.definition, r + 1);
			if (n instanceof dv) this.walkProdRef(n, i, t);
			else if (n instanceof G) this.walkTerminal(n, i, t);
			else if (n instanceof hv) this.walkFlat(n, i, t);
			else if (n instanceof _v) this.walkOption(n, i, t);
			else if (n instanceof yv) this.walkAtLeastOne(n, i, t);
			else if (n instanceof xv) this.walkAtLeastOneSep(n, i, t);
			else if (n instanceof wv) this.walkManySep(n, i, t);
			else if (n instanceof W) this.walkMany(n, i, t);
			else if (n instanceof Ev) this.walkOr(n, i, t);
			else throw Error("non exhaustive match");
		});
	}
	walkTerminal(e, t, n) {}
	walkProdRef(e, t, n) {}
	walkFlat(e, t, n) {
		let r = t.concat(n);
		this.walk(e, r);
	}
	walkOption(e, t, n) {
		let r = t.concat(n);
		this.walk(e, r);
	}
	walkAtLeastOne(e, t, n) {
		let r = [new _v({ definition: e.definition })].concat(t, n);
		this.walk(e, r);
	}
	walkAtLeastOneSep(e, t, n) {
		let r = Rv(e, t, n);
		this.walk(e, r);
	}
	walkMany(e, t, n) {
		let r = [new _v({ definition: e.definition })].concat(t, n);
		this.walk(e, r);
	}
	walkManySep(e, t, n) {
		let r = Rv(e, t, n);
		this.walk(e, r);
	}
	walkOr(e, t, n) {
		let r = t.concat(n);
		B(e.definition, (e) => {
			let t = new hv({ definition: [e] });
			this.walk(t, r);
		});
	}
}, o(Iv, "RestWalker"), Iv);
function Rv(e, t, n) {
	return [new _v({ definition: [new G({ terminalType: e.separator })].concat(e.definition) })].concat(t, n);
}
o(Rv, "restForRepetitionWithSeparator");
function zv(e) {
	if (e instanceof dv) return zv(e.referencedRule);
	if (e instanceof G) return Hv(e);
	if (Mv(e)) return Bv(e);
	if (Pv(e)) return Vv(e);
	throw Error("non exhaustive match");
}
o(zv, "first");
function Bv(e) {
	let t = [], n = e.definition, r = 0, i = n.length > r, a, o = !0;
	for (; i && o;) a = n[r], o = Nv(a), t = t.concat(zv(a)), r += 1, i = n.length > r;
	return tv(t);
}
o(Bv, "firstForSequence");
function Vv(e) {
	return tv(Hd(V(e.definition, (e) => zv(e))));
}
o(Vv, "firstForBranching");
function Hv(e) {
	return [e.terminalType];
}
o(Hv, "firstForTerminal");
var Uv = "_~IN~_", Wv, Gv = (Wv = class extends Lv {
	constructor(e) {
		super(), this.topProd = e, this.follows = {};
	}
	startWalking() {
		return this.walk(this.topProd), this.follows;
	}
	walkTerminal(e, t, n) {}
	walkProdRef(e, t, n) {
		let r = qv(e.referencedRule, e.idx) + this.topProd.name, i = zv(new hv({ definition: t.concat(n) }));
		this.follows[r] = i;
	}
}, o(Wv, "ResyncFollowsWalker"), Wv);
function Kv(e) {
	let t = {};
	return B(e, (e) => {
		let n = new Gv(e).startWalking();
		cu(t, n);
	}), t;
}
o(Kv, "computeAllProdsFollows");
function qv(e, t) {
	return e.name + t + Uv;
}
o(qv, "buildBetweenProdsFollowPrefix");
var Jv = {}, Yv = new wa();
function Xv(e) {
	let t = e.toString();
	if (Jv.hasOwnProperty(t)) return Jv[t];
	{
		let e = Yv.pattern(t);
		return Jv[t] = e, e;
	}
}
o(Xv, "getRegExpAst");
function Zv() {
	Jv = {};
}
o(Zv, "clearRegExpParserCache");
var Qv = "Complement Sets are not supported for first char optimization", $v = "Unable to use \"first char\" lexer optimizations:\n";
function ey(e, t = !1) {
	try {
		let t = Xv(e);
		return ty(t.value, {}, t.flags.ignoreCase);
	} catch (n) {
		if (n.message === Qv) t && rv(`${$v}	Unable to optimize: < ${e.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
		else {
			let n = "";
			t && (n = "\n	This will disable the lexer's first char optimizations.\n	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details."), nv(`${$v}
	Failed parsing: < ${e.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` + n);
		}
	}
	return [];
}
o(ey, "getOptimizedStartCodesIndices");
function ty(e, t, n) {
	switch (e.type) {
		case "Disjunction":
			for (let r = 0; r < e.value.length; r++) ty(e.value[r], t, n);
			break;
		case "Alternative":
			let r = e.value;
			for (let e = 0; e < r.length; e++) {
				let i = r[e];
				switch (i.type) {
					case "EndAnchor":
					case "GroupBackReference":
					case "Lookahead":
					case "NegativeLookahead":
					case "Lookbehind":
					case "NegativeLookbehind":
					case "StartAnchor":
					case "WordBoundary":
					case "NonWordBoundary": continue;
				}
				let a = i;
				switch (a.type) {
					case "Character":
						ny(a.value, t, n);
						break;
					case "Set":
						if (a.complement === !0) throw Error(Qv);
						B(a.value, (e) => {
							if (typeof e == "number") ny(e, t, n);
							else {
								let r = e;
								if (n === !0) for (let e = r.from; e <= r.to; e++) ny(e, t, n);
								else {
									for (let e = r.from; e <= r.to && e < Vy; e++) ny(e, t, n);
									if (r.to >= Vy) {
										let e = r.from >= Vy ? r.from : Vy, n = r.to, i = Uy(e), a = Uy(n);
										for (let e = i; e <= a; e++) t[e] = e;
									}
								}
							}
						});
						break;
					case "Group":
						ty(a.value, t, n);
						break;
					/* istanbul ignore next */ default: throw Error("Non Exhaustive Match");
				}
				let o = a.quantifier !== void 0 && a.quantifier.atLeast === 0;
				if (a.type === "Group" && ay(a) === !1 || a.type !== "Group" && o === !1) break;
			}
			break;
		/* istanbul ignore next */ default: throw Error("non exhaustive match!");
	}
	return p_(t);
}
o(ty, "firstCharOptimizedIndices");
function ny(e, t, n) {
	let r = Uy(e);
	t[r] = r, n === !0 && ry(e, t);
}
o(ny, "addOptimizedIdxToResult");
function ry(e, t) {
	let n = String.fromCharCode(e), r = n.toUpperCase();
	if (r !== n) {
		let e = Uy(r.charCodeAt(0));
		t[e] = e;
	} else {
		let e = n.toLowerCase();
		if (e !== n) {
			let n = Uy(e.charCodeAt(0));
			t[n] = n;
		}
	}
}
o(ry, "handleIgnoreCase");
function iy(e, t) {
	return qg(e.value, (e) => {
		if (typeof e == "number") return g_(t, e);
		{
			let n = e;
			return qg(t, (e) => n.from <= e && e <= n.to) !== void 0;
		}
	});
}
o(iy, "findCode");
function ay(e) {
	let t = e.quantifier;
	return t && t.atLeast === 0 ? !0 : e.value ? L(e.value) ? Rg(e.value, ay) : ay(e.value) : !1;
}
o(ay, "isWholeOptional");
var oy, sy = (oy = class extends Ea {
	constructor(e) {
		super(), this.targetCharCodes = e, this.found = !1;
	}
	visitChildren(e) {
		if (this.found !== !0) {
			switch (e.type) {
				case "Lookahead":
					this.visitLookahead(e);
					return;
				case "NegativeLookahead":
					this.visitNegativeLookahead(e);
					return;
				case "Lookbehind":
					this.visitLookbehind(e);
					return;
				case "NegativeLookbehind":
					this.visitNegativeLookbehind(e);
					return;
			}
			super.visitChildren(e);
		}
	}
	visitCharacter(e) {
		g_(this.targetCharCodes, e.value) && (this.found = !0);
	}
	visitSet(e) {
		e.complement ? iy(e, this.targetCharCodes) === void 0 && (this.found = !0) : iy(e, this.targetCharCodes) !== void 0 && (this.found = !0);
	}
}, o(oy, "CharCodeFinder"), oy);
function cy(e, t) {
	if (t instanceof RegExp) {
		let n = Xv(t), r = new sy(e);
		return r.visit(n), r.found;
	}
	return qg(t, (t) => g_(e, t.charCodeAt(0))) !== void 0;
}
o(cy, "canMatchCharCode");
var ly = "PATTERN", uy = "defaultMode", dy = "modes";
function fy(e, t) {
	t = hg(t, {
		debug: !1,
		safeMode: !1,
		positionTracking: "full",
		lineTerminatorCharacters: ["\r", "\n"],
		tracer: /* @__PURE__ */ o((e, t) => t(), "tracer")
	});
	let n = t.tracer;
	n("initCharCodeToOptimizedIndexMap", () => {
		Wy();
	});
	let r;
	n("Reject Lexer.NA", () => {
		r = G_(e, (e) => e[ly] === lb.NA);
	});
	let i = !1, a;
	n("Transform Patterns", () => {
		i = !1, a = V(r, (e) => {
			let t = e[ly];
			if (O_(t)) {
				let e = t.source;
				return e.length === 1 && e !== "^" && e !== "$" && e !== "." && !t.ignoreCase ? e : e.length === 2 && e[0] === "\\" && !g_([
					"d",
					"D",
					"s",
					"S",
					"t",
					"r",
					"n",
					"t",
					"0",
					"c",
					"b",
					"B",
					"f",
					"v",
					"w",
					"W"
				], e[1]) ? e[1] : Ay(t);
			}
			if (Os(t)) return i = !0, { exec: t };
			if (typeof t == "object") return i = !0, t;
			if (typeof t == "string") {
				if (t.length === 1) return t;
				{
					let e = t.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
					return Ay(new RegExp(e));
				}
			}
			throw Error("non exhaustive match");
		});
	});
	let s, c, l, u, d;
	n("misc mapping", () => {
		s = V(r, (e) => e.tokenTypeIdx), c = V(r, (e) => {
			let t = e.GROUP;
			if (t !== lb.SKIPPED) {
				if (l_(t)) return t;
				if (A_(t)) return !1;
				throw Error("non exhaustive match");
			}
		}), l = V(r, (e) => {
			let t = e.LONGER_ALT;
			if (t) return L(t) ? V(t, (e) => y_(r, e)) : [y_(r, t)];
		}), u = V(r, (e) => e.PUSH_MODE), d = V(r, (e) => H(e, "POP_MODE"));
	});
	let f;
	n("Line Terminator Handling", () => {
		let e = zy(t.lineTerminatorCharacters);
		f = V(r, (e) => !1), t.positionTracking !== "onlyOffset" && (f = V(r, (t) => H(t, "LINE_BREAKS") ? !!t.LINE_BREAKS : Ly(t, e) === !1 && cy(e, t.PATTERN)));
	});
	let p, m, h, g;
	n("Misc Mapping #2", () => {
		p = V(r, Py), m = V(a, Fy), h = U_(r, (e, t) => {
			let n = t.GROUP;
			return l_(n) && n !== lb.SKIPPED && (e[n] = []), e;
		}, {}), g = V(a, (e, t) => ({
			pattern: a[t],
			longerAlt: l[t],
			canLineTerminator: f[t],
			isCustom: p[t],
			short: m[t],
			group: c[t],
			push: u[t],
			pop: d[t],
			tokenTypeIdx: s[t],
			tokenType: r[t]
		}));
	});
	let _ = !0, v = [];
	return t.safeMode || n("First Char Optimization", () => {
		v = U_(r, (e, n, r) => {
			if (typeof n.PATTERN == "string") By(e, Uy(n.PATTERN.charCodeAt(0)), g[r]);
			else if (L(n.START_CHARS_HINT)) {
				let t;
				B(n.START_CHARS_HINT, (n) => {
					let i = Uy(typeof n == "string" ? n.charCodeAt(0) : n);
					t !== i && (t = i, By(e, i, g[r]));
				});
			} else if (O_(n.PATTERN)) {
				if (n.PATTERN.unicode) _ = !1, t.ensureOptimizations && nv(`${$v}	Unable to analyze < ${n.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
				else {
					let i = ey(n.PATTERN, t.ensureOptimizations);
					U(i) && (_ = !1), B(i, (t) => {
						By(e, t, g[r]);
					});
				}
			} else t.ensureOptimizations && nv(`${$v}	TokenType: <${n.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`), _ = !1;
			return e;
		}, []);
	}), {
		emptyGroups: h,
		patternIdxToConfig: g,
		charCodeToPatternIdxToConfig: v,
		hasCustom: i,
		canBeOptimized: _
	};
}
o(fy, "analyzeTokenTypes");
function py(e, t) {
	let n = [], r = hy(e);
	n = n.concat(r.errors);
	let i = gy(r.valid), a = i.valid;
	return n = n.concat(i.errors), n = n.concat(my(a)), n = n.concat(wy(a)), n = n.concat(Ty(a, t)), n = n.concat(Ey(a)), n;
}
o(py, "validatePatterns");
function my(e) {
	let t = [], n = Hg(e, (e) => O_(e[ly]));
	return t = t.concat(vy(n)), t = t.concat(xy(n)), t = t.concat(Sy(n)), t = t.concat(Cy(n)), t = t.concat(yy(n)), t;
}
o(my, "validateRegExpPattern");
function hy(e) {
	let t = Hg(e, (e) => !H(e, ly));
	return {
		errors: V(t, (e) => ({
			message: "Token Type: ->" + e.name + "<- missing static 'PATTERN' property",
			type: K.MISSING_PATTERN,
			tokenTypes: [e]
		})),
		valid: Cg(e, t)
	};
}
o(hy, "findMissingPatterns");
function gy(e) {
	let t = Hg(e, (e) => {
		let t = e[ly];
		return !O_(t) && !Os(t) && !H(t, "exec") && !l_(t);
	});
	return {
		errors: V(t, (e) => ({
			message: "Token Type: ->" + e.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
			type: K.INVALID_PATTERN,
			tokenTypes: [e]
		})),
		valid: Cg(e, t)
	};
}
o(gy, "findInvalidPatterns");
var _y = /[^\\][$]/;
function vy(e) {
	let t = class extends Ea {
		constructor() {
			super(...arguments), this.found = !1;
		}
		visitEndAnchor(e) {
			this.found = !0;
		}
	};
	o(t, "EndAnchorFinder");
	let n = t;
	return V(Hg(e, (e) => {
		let t = e.PATTERN;
		try {
			let e = Xv(t), r = new n();
			return r.visit(e), r.found;
		} catch {
			return _y.test(t.source);
		}
	}), (e) => ({
		message: "Unexpected RegExp Anchor Error:\n	Token Type: ->" + e.name + "<- static 'PATTERN' cannot contain end of input anchor '$'\n	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.",
		type: K.EOI_ANCHOR_FOUND,
		tokenTypes: [e]
	}));
}
o(vy, "findEndOfInputAnchor");
function yy(e) {
	return V(Hg(e, (e) => e.PATTERN.test("")), (e) => ({
		message: "Token Type: ->" + e.name + "<- static 'PATTERN' must not match an empty string",
		type: K.EMPTY_MATCH_PATTERN,
		tokenTypes: [e]
	}));
}
o(yy, "findEmptyMatchRegExps");
var by = /[^\\[][\^]|^\^/;
function xy(e) {
	let t = class extends Ea {
		constructor() {
			super(...arguments), this.found = !1;
		}
		visitStartAnchor(e) {
			this.found = !0;
		}
	};
	o(t, "StartAnchorFinder");
	let n = t;
	return V(Hg(e, (e) => {
		let t = e.PATTERN;
		try {
			let e = Xv(t), r = new n();
			return r.visit(e), r.found;
		} catch {
			return by.test(t.source);
		}
	}), (e) => ({
		message: "Unexpected RegExp Anchor Error:\n	Token Type: ->" + e.name + "<- static 'PATTERN' cannot contain start of input anchor '^'\n	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.",
		type: K.SOI_ANCHOR_FOUND,
		tokenTypes: [e]
	}));
}
o(xy, "findStartOfInputAnchor");
function Sy(e) {
	return V(Hg(e, (e) => {
		let t = e[ly];
		return t instanceof RegExp && (t.multiline || t.global);
	}), (e) => ({
		message: "Token Type: ->" + e.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
		type: K.UNSUPPORTED_FLAGS_FOUND,
		tokenTypes: [e]
	}));
}
o(Sy, "findUnsupportedFlags");
function Cy(e) {
	let t = [], n = V(e, (n) => U_(e, (e, r) => (n.PATTERN.source === r.PATTERN.source && !g_(t, r) && r.PATTERN !== lb.NA && (t.push(r), e.push(r)), e), []));
	return n = km(n), V(Hg(n, (e) => e.length > 1), (e) => {
		let t = V(e, (e) => e.name);
		return {
			message: `The same RegExp pattern ->${Yg(e).PATTERN}<-has been used in all of the following Token Types: ${t.join(", ")} <-`,
			type: K.DUPLICATE_PATTERNS_FOUND,
			tokenTypes: e
		};
	});
}
o(Cy, "findDuplicatePatterns");
function wy(e) {
	return V(Hg(e, (e) => {
		if (!H(e, "GROUP")) return !1;
		let t = e.GROUP;
		return t !== lb.SKIPPED && t !== lb.NA && !l_(t);
	}), (e) => ({
		message: "Token Type: ->" + e.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
		type: K.INVALID_GROUP_TYPE_FOUND,
		tokenTypes: [e]
	}));
}
o(wy, "findInvalidGroupType");
function Ty(e, t) {
	return V(Hg(e, (e) => e.PUSH_MODE !== void 0 && !g_(t, e.PUSH_MODE)), (e) => ({
		message: `Token Type: ->${e.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${e.PUSH_MODE}<-which does not exist`,
		type: K.PUSH_MODE_DOES_NOT_EXIST,
		tokenTypes: [e]
	}));
}
o(Ty, "findModesThatDoNotExist");
function Ey(e) {
	let t = [], n = U_(e, (e, t, n) => {
		let r = t.PATTERN;
		return r === lb.NA || (l_(r) ? e.push({
			str: r,
			idx: n,
			tokenType: t
		}) : O_(r) && Oy(r) && e.push({
			str: r.source,
			idx: n,
			tokenType: t
		})), e;
	}, []);
	return B(e, (e, r) => {
		B(n, ({ str: n, idx: i, tokenType: a }) => {
			if (r < i && Dy(n, e.PATTERN)) {
				let n = `Token: ->${a.name}<- can never be matched.
Because it appears AFTER the Token Type ->${e.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
				t.push({
					message: n,
					type: K.UNREACHABLE_PATTERN,
					tokenTypes: [e, a]
				});
			}
		});
	}), t;
}
o(Ey, "findUnreachablePatterns");
function Dy(e, t) {
	if (O_(t)) {
		if (ky(t)) return !1;
		let n = t.exec(e);
		return n !== null && n.index === 0;
	}
	if (Os(t)) return t(e, 0, [], {});
	if (H(t, "exec")) return t.exec(e, 0, [], {});
	if (typeof t == "string") return t === e;
	throw Error("non exhaustive match");
}
o(Dy, "tryToMatchStrToPattern");
function Oy(e) {
	return qg([
		".",
		"\\",
		"[",
		"]",
		"|",
		"^",
		"$",
		"(",
		")",
		"?",
		"*",
		"+",
		"{"
	], (t) => e.source.indexOf(t) !== -1) === void 0;
}
o(Oy, "noMetaChar");
function ky(e) {
	return /(\(\?=)|(\(\?!)|(\(\?<=)|(\(\?<!)/.test(e.source);
}
o(ky, "usesLookAheadOrBehind");
function Ay(e) {
	let t = e.ignoreCase ? "iy" : "y";
	return RegExp(`${e.source}`, t);
}
o(Ay, "addStickyFlag");
function jy(e, t, n) {
	let r = [];
	return H(e, uy) || r.push({
		message: "A MultiMode Lexer cannot be initialized without a <" + uy + "> property in its definition\n",
		type: K.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
	}), H(e, dy) || r.push({
		message: "A MultiMode Lexer cannot be initialized without a <" + dy + "> property in its definition\n",
		type: K.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
	}), H(e, dy) && H(e, uy) && !H(e.modes, e.defaultMode) && r.push({
		message: `A MultiMode Lexer cannot be initialized with a ${uy}: <${e.defaultMode}>which does not exist
`,
		type: K.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
	}), H(e, dy) && B(e.modes, (e, t) => {
		B(e, (n, i) => {
			A_(n) ? r.push({
				message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${t}> at index: <${i}>
`,
				type: K.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
			}) : H(n, "LONGER_ALT") && B(L(n.LONGER_ALT) ? n.LONGER_ALT : [n.LONGER_ALT], (i) => {
				!A_(i) && !g_(e, i) && r.push({
					message: `A MultiMode Lexer cannot be initialized with a longer_alt <${i.name}> on token <${n.name}> outside of mode <${t}>
`,
					type: K.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
				});
			});
		});
	}), r;
}
o(jy, "performRuntimeChecks");
function My(e, t, n) {
	let r = [], i = !1, a = G_(km(Hd(p_(e.modes))), (e) => e[ly] === lb.NA), o = zy(n);
	return t && B(a, (e) => {
		let t = Ly(e, o);
		if (t !== !1) {
			let n = {
				message: Ry(e, t),
				type: t.issue,
				tokenType: e
			};
			r.push(n);
		} else H(e, "LINE_BREAKS") ? e.LINE_BREAKS === !0 && (i = !0) : cy(o, e.PATTERN) && (i = !0);
	}), t && !i && r.push({
		message: "Warning: No LINE_BREAKS Found.\n	This Lexer has been defined to track line and column information,\n	But none of the Token Types can be identified as matching a line terminator.\n	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS \n	for details.",
		type: K.NO_LINE_BREAKS_FLAGS
	}), r;
}
o(My, "performWarningRuntimeChecks");
function Ny(e) {
	let t = {};
	return B(ou(e), (n) => {
		let r = e[n];
		if (L(r)) t[n] = [];
		else throw Error("non exhaustive match");
	}), t;
}
o(Ny, "cloneEmptyGroups");
function Py(e) {
	let t = e.PATTERN;
	if (O_(t)) return !1;
	if (Os(t) || H(t, "exec")) return !0;
	if (l_(t)) return !1;
	throw Error("non exhaustive match");
}
o(Py, "isCustomPattern");
function Fy(e) {
	return l_(e) && e.length === 1 ? e.charCodeAt(0) : !1;
}
o(Fy, "isShortPattern");
var Iy = {
	test: /* @__PURE__ */ o(function(e) {
		let t = e.length;
		for (let n = this.lastIndex; n < t; n++) {
			let t = e.charCodeAt(n);
			if (t === 10) return this.lastIndex = n + 1, !0;
			if (t === 13) return this.lastIndex = e.charCodeAt(n + 1) === 10 ? n + 2 : n + 1, !0;
		}
		return !1;
	}, "test"),
	lastIndex: 0
};
function Ly(e, t) {
	if (H(e, "LINE_BREAKS")) return !1;
	if (O_(e.PATTERN)) {
		try {
			cy(t, e.PATTERN);
		} catch (e) {
			return {
				issue: K.IDENTIFY_TERMINATOR,
				errMsg: e.message
			};
		}
		return !1;
	}
	if (l_(e.PATTERN)) return !1;
	if (Py(e)) return { issue: K.CUSTOM_LINE_BREAK };
	throw Error("non exhaustive match");
}
o(Ly, "checkLineBreaksIssues");
function Ry(e, t) {
	if (t.issue === K.IDENTIFY_TERMINATOR) return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${e.name}> Token Type
	 Root cause: ${t.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
	if (t.issue === K.CUSTOM_LINE_BREAK) return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${e.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
	throw Error("non exhaustive match");
}
o(Ry, "buildLineBreakIssueMessage");
function zy(e) {
	return V(e, (e) => l_(e) ? e.charCodeAt(0) : e);
}
o(zy, "getCharCodes");
function By(e, t, n) {
	e[t] === void 0 ? e[t] = [n] : e[t].push(n);
}
o(By, "addToMapOfArrays");
var Vy = 256, Hy = [];
function Uy(e) {
	return e < Vy ? e : Hy[e];
}
o(Uy, "charCodeToOptimizedIndex");
function Wy() {
	if (U(Hy)) {
		Hy = Array(65536);
		for (let e = 0; e < 65536; e++) Hy[e] = e > 255 ? 255 + ~~(e / 255) : e;
	}
}
o(Wy, "initCharCodeToOptimizedIndexMap");
function Gy(e, t) {
	let n = e.tokenTypeIdx;
	return n === t.tokenTypeIdx || t.isParent === !0 && t.categoryMatchesMap[n] === !0;
}
o(Gy, "tokenStructuredMatcher");
function Ky(e, t) {
	return e.tokenTypeIdx === t.tokenTypeIdx;
}
o(Ky, "tokenStructuredMatcherNoCategories");
var qy = 1, Jy = {};
function Yy(e) {
	let t = Xy(e);
	Zy(t), $y(t), Qy(t), B(t, (e) => {
		e.isParent = e.categoryMatches.length > 0;
	});
}
o(Yy, "augmentTokenTypes");
function Xy(e) {
	let t = Dm(e), n = e, r = !0;
	for (; r;) {
		n = km(Hd(V(n, (e) => e.CATEGORIES)));
		let e = Cg(n, t);
		t = t.concat(e), U(e) ? r = !1 : n = e;
	}
	return t;
}
o(Xy, "expandCategories");
function Zy(e) {
	B(e, (e) => {
		tb(e) || (Jy[qy] = e, e.tokenTypeIdx = qy++), nb(e) && !L(e.CATEGORIES) && (e.CATEGORIES = [e.CATEGORIES]), nb(e) || (e.CATEGORIES = []), rb(e) || (e.categoryMatches = []), ib(e) || (e.categoryMatchesMap = {});
	});
}
o(Zy, "assignTokenDefaultProps");
function Qy(e) {
	B(e, (e) => {
		e.categoryMatches = [], B(e.categoryMatchesMap, (t, n) => {
			e.categoryMatches.push(Jy[n].tokenTypeIdx);
		});
	});
}
o(Qy, "assignCategoriesTokensProp");
function $y(e) {
	B(e, (e) => {
		eb([], e);
	});
}
o($y, "assignCategoriesMapProp");
function eb(e, t) {
	B(e, (e) => {
		t.categoryMatchesMap[e.tokenTypeIdx] = !0;
	}), B(t.CATEGORIES, (n) => {
		let r = e.concat(t);
		g_(r, n) || eb(r, n);
	});
}
o(eb, "singleAssignCategoriesToksMap");
function tb(e) {
	return H(e, "tokenTypeIdx");
}
o(tb, "hasShortKeyProperty");
function nb(e) {
	return H(e, "CATEGORIES");
}
o(nb, "hasCategoriesProperty");
function rb(e) {
	return H(e, "categoryMatches");
}
o(rb, "hasExtendingTokensTypesProperty");
function ib(e) {
	return H(e, "categoryMatchesMap");
}
o(ib, "hasExtendingTokensTypesMapProperty");
function ab(e) {
	return H(e, "tokenTypeIdx");
}
o(ab, "isTokenType");
var ob = {
	buildUnableToPopLexerModeMessage(e) {
		return `Unable to pop Lexer Mode after encountering Token ->${e.image}<- The Mode Stack is empty`;
	},
	buildUnexpectedCharactersMessage(e, t, n, r, i, a) {
		return `unexpected character: ->${e.charAt(t)}<- at offset: ${t}, skipped ${n} characters.`;
	}
}, K;
(function(e) {
	e[e.MISSING_PATTERN = 0] = "MISSING_PATTERN", e[e.INVALID_PATTERN = 1] = "INVALID_PATTERN", e[e.EOI_ANCHOR_FOUND = 2] = "EOI_ANCHOR_FOUND", e[e.UNSUPPORTED_FLAGS_FOUND = 3] = "UNSUPPORTED_FLAGS_FOUND", e[e.DUPLICATE_PATTERNS_FOUND = 4] = "DUPLICATE_PATTERNS_FOUND", e[e.INVALID_GROUP_TYPE_FOUND = 5] = "INVALID_GROUP_TYPE_FOUND", e[e.PUSH_MODE_DOES_NOT_EXIST = 6] = "PUSH_MODE_DOES_NOT_EXIST", e[e.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE", e[e.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY", e[e.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST", e[e.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED", e[e.SOI_ANCHOR_FOUND = 11] = "SOI_ANCHOR_FOUND", e[e.EMPTY_MATCH_PATTERN = 12] = "EMPTY_MATCH_PATTERN", e[e.NO_LINE_BREAKS_FLAGS = 13] = "NO_LINE_BREAKS_FLAGS", e[e.UNREACHABLE_PATTERN = 14] = "UNREACHABLE_PATTERN", e[e.IDENTIFY_TERMINATOR = 15] = "IDENTIFY_TERMINATOR", e[e.CUSTOM_LINE_BREAK = 16] = "CUSTOM_LINE_BREAK", e[e.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
})(K ||= {});
var sb = {
	deferDefinitionErrorsHandling: !1,
	positionTracking: "full",
	lineTerminatorsPattern: /\n|\r\n?/g,
	lineTerminatorCharacters: ["\n", "\r"],
	ensureOptimizations: !1,
	safeMode: !1,
	errorMessageProvider: ob,
	traceInitPerf: !1,
	skipValidations: !1,
	recoveryEnabled: !0
};
Object.freeze(sb);
var cb, lb = (cb = class {
	constructor(e, t = sb) {
		if (this.lexerDefinition = e, this.lexerDefinitionErrors = [], this.lexerDefinitionWarning = [], this.patternIdxToConfig = {}, this.charCodeToPatternIdxToConfig = {}, this.modes = [], this.emptyGroups = {}, this.trackStartLines = !0, this.trackEndLines = !0, this.hasCustom = !1, this.canModeBeOptimized = {}, this.TRACE_INIT = (e, t) => {
			if (this.traceInitPerf === !0) {
				this.traceInitIndent++;
				let n = Array(this.traceInitIndent + 1).join("	");
				this.traceInitIndent < this.traceInitMaxIdent && console.log(`${n}--> <${e}>`);
				let { time: r, value: i } = iv(t), a = r > 10 ? console.warn : console.log;
				return this.traceInitIndent < this.traceInitMaxIdent && a(`${n}<-- <${e}> time: ${r}ms`), this.traceInitIndent--, i;
			}
			return t();
		}, typeof t == "boolean") throw Error("The second argument to the Lexer constructor is now an ILexerConfig Object.\na boolean 2nd argument is no longer supported");
		this.config = cu({}, sb, t);
		let n = this.config.traceInitPerf;
		n === !0 ? (this.traceInitMaxIdent = 1 / 0, this.traceInitPerf = !0) : typeof n == "number" && (this.traceInitMaxIdent = n, this.traceInitPerf = !0), this.traceInitIndent = -1, this.TRACE_INIT("Lexer Constructor", () => {
			let n, r = !0;
			this.TRACE_INIT("Lexer Config handling", () => {
				if (this.config.lineTerminatorsPattern === sb.lineTerminatorsPattern) this.config.lineTerminatorsPattern = Iy;
				else if (this.config.lineTerminatorCharacters === sb.lineTerminatorCharacters) throw Error("Error: Missing <lineTerminatorCharacters> property on the Lexer config.\n	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS");
				if (t.safeMode && t.ensureOptimizations) throw Error("\"safeMode\" and \"ensureOptimizations\" flags are mutually exclusive.");
				this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking), this.trackEndLines = /full/i.test(this.config.positionTracking), L(e) ? n = {
					modes: { defaultMode: Dm(e) },
					defaultMode: uy
				} : (r = !1, n = Dm(e));
			}), this.config.skipValidations === !1 && (this.TRACE_INIT("performRuntimeChecks", () => {
				this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(jy(n, this.trackStartLines, this.config.lineTerminatorCharacters));
			}), this.TRACE_INIT("performWarningRuntimeChecks", () => {
				this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(My(n, this.trackStartLines, this.config.lineTerminatorCharacters));
			})), n.modes = n.modes ? n.modes : {}, B(n.modes, (e, t) => {
				n.modes[t] = G_(e, (e) => A_(e));
			});
			let i = ou(n.modes);
			if (B(n.modes, (e, n) => {
				this.TRACE_INIT(`Mode: <${n}> processing`, () => {
					if (this.modes.push(n), this.config.skipValidations === !1 && this.TRACE_INIT("validatePatterns", () => {
						this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(py(e, i));
					}), U(this.lexerDefinitionErrors)) {
						Yy(e);
						let r;
						this.TRACE_INIT("analyzeTokenTypes", () => {
							r = fy(e, {
								lineTerminatorCharacters: this.config.lineTerminatorCharacters,
								positionTracking: t.positionTracking,
								ensureOptimizations: t.ensureOptimizations,
								safeMode: t.safeMode,
								tracer: this.TRACE_INIT
							});
						}), this.patternIdxToConfig[n] = r.patternIdxToConfig, this.charCodeToPatternIdxToConfig[n] = r.charCodeToPatternIdxToConfig, this.emptyGroups = cu({}, this.emptyGroups, r.emptyGroups), this.hasCustom = r.hasCustom || this.hasCustom, this.canModeBeOptimized[n] = r.canBeOptimized;
					}
				});
			}), this.defaultMode = n.defaultMode, !U(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling) {
				let e = V(this.lexerDefinitionErrors, (e) => e.message).join("-----------------------\n");
				throw Error("Errors detected in definition of Lexer:\n" + e);
			}
			B(this.lexerDefinitionWarning, (e) => {
				rv(e.message);
			}), this.TRACE_INIT("Choosing sub-methods implementations", () => {
				if (r && (this.handleModes = tc), this.trackStartLines === !1 && (this.computeNewColumn = Ss), this.trackEndLines === !1 && (this.updateTokenEndLineColumnLocation = tc), /full/i.test(this.config.positionTracking)) this.createTokenInstance = this.createFullToken;
				else if (/onlyStart/i.test(this.config.positionTracking)) this.createTokenInstance = this.createStartOnlyToken;
				else if (/onlyOffset/i.test(this.config.positionTracking)) this.createTokenInstance = this.createOffsetOnlyToken;
				else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
				this.hasCustom ? (this.addToken = this.addTokenUsingPush, this.handlePayload = this.handlePayloadWithCustom) : (this.addToken = this.addTokenUsingMemberAccess, this.handlePayload = this.handlePayloadNoCustom);
			}), this.TRACE_INIT("Failed Optimization Warnings", () => {
				let e = U_(this.canModeBeOptimized, (e, t, n) => (t === !1 && e.push(n), e), []);
				if (t.ensureOptimizations && !U(e)) throw Error(`Lexer Modes: < ${e.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
			}), this.TRACE_INIT("clearRegExpParserCache", () => {
				Zv();
			}), this.TRACE_INIT("toFastProperties", () => {
				av(this);
			});
		});
	}
	tokenize(e, t = this.defaultMode) {
		if (!U(this.lexerDefinitionErrors)) {
			let e = V(this.lexerDefinitionErrors, (e) => e.message).join("-----------------------\n");
			throw Error("Unable to Tokenize because Errors detected in definition of Lexer:\n" + e);
		}
		return this.tokenizeInternal(e, t);
	}
	tokenizeInternal(e, t) {
		let n, r, i, a, s, c, l, u, d, f, p, m, h, g, _, v = e, y = v.length, b = 0, x = 0, ee = this.hasCustom ? 0 : Math.floor(e.length / 10), S = Array(ee), te = [], C = this.trackStartLines ? 1 : void 0, w = this.trackStartLines ? 1 : void 0, ne = Ny(this.emptyGroups), re = this.trackStartLines, T = this.config.lineTerminatorsPattern, E = 0, ie = [], ae = [], oe = [], se = [];
		Object.freeze(se);
		let ce = !1, D = /* @__PURE__ */ o((e) => {
			if (oe.length === 1 && e.tokenType.PUSH_MODE === void 0) {
				let t = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(e);
				te.push({
					offset: e.startOffset,
					line: e.startLine,
					column: e.startColumn,
					length: e.image.length,
					message: t
				});
			} else {
				oe.pop();
				let e = Tg(oe);
				ie = this.patternIdxToConfig[e], ae = this.charCodeToPatternIdxToConfig[e], E = ie.length;
				let t = this.canModeBeOptimized[e] && this.config.safeMode === !1;
				ce = !!(ae && t);
			}
		}, "pop_mode");
		function O(e) {
			oe.push(e), ae = this.charCodeToPatternIdxToConfig[e], ie = this.patternIdxToConfig[e], E = ie.length, E = ie.length;
			let t = this.canModeBeOptimized[e] && this.config.safeMode === !1;
			ce = !!(ae && t);
		}
		o(O, "push_mode"), O.call(this, t);
		let k, le = this.config.recoveryEnabled;
		for (; b < y;) {
			c = null, d = -1;
			let t = v.charCodeAt(b), o;
			if (ce) {
				let e = Uy(t), n = ae[e];
				o = n === void 0 ? se : n;
			} else o = ie;
			let ee = o.length;
			for (n = 0; n < ee; n++) {
				k = o[n];
				let r = k.pattern;
				l = null;
				let f = k.short;
				if (f === !1 ? k.isCustom === !0 ? (_ = r.exec(v, b, S, ne), _ === null ? c = null : (c = _[0], d = c.length, _.payload !== void 0 && (l = _.payload))) : (r.lastIndex = b, d = this.matchLength(r, e, b)) : t === f && (d = 1, c = r), d !== -1) {
					if (s = k.longerAlt, s !== void 0) {
						c = e.substring(b, b + d);
						let t = s.length;
						for (i = 0; i < t; i++) {
							let t = ie[s[i]], n = t.pattern;
							if (u = null, t.isCustom === !0 ? (_ = n.exec(v, b, S, ne), _ === null ? a = null : (a = _[0], _.payload !== void 0 && (u = _.payload))) : (n.lastIndex = b, a = this.match(n, e, b)), a && a.length > c.length) {
								c = a, d = a.length, l = u, k = t;
								break;
							}
						}
					}
					break;
				}
			}
			if (d !== -1) {
				if (f = k.group, f !== void 0 && (c = c === null ? e.substring(b, b + d) : c, p = k.tokenTypeIdx, m = this.createTokenInstance(c, b, p, k.tokenType, C, w, d), this.handlePayload(m, l), f === !1 ? x = this.addToken(S, x, m) : ne[f].push(m)), re === !0 && k.canLineTerminator === !0) {
					let t = 0, n, r;
					T.lastIndex = 0;
					do
						c = c === null ? e.substring(b, b + d) : c, n = T.test(c), n === !0 && (r = T.lastIndex - 1, t++);
					while (n === !0);
					t === 0 ? w = this.computeNewColumn(w, d) : (C += t, w = d - r, this.updateTokenEndLineColumnLocation(m, f, r, t, C, w, d));
				} else w = this.computeNewColumn(w, d);
				b += d, this.handleModes(k, D, O, m);
			} else {
				let t = b, n = C, i = w, a = le === !1;
				for (; a === !1 && b < y;) for (b++, r = 0; r < E; r++) {
					let t = ie[r], n = t.pattern, i = t.short;
					if (i === !1 ? t.isCustom === !0 ? a = n.exec(v, b, S, ne) !== null : (n.lastIndex = b, a = n.exec(e) !== null) : v.charCodeAt(b) === i && (a = !0), a === !0) break;
				}
				if (h = b - t, w = this.computeNewColumn(w, h), g = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(v, t, h, n, i, Tg(oe)), te.push({
					offset: t,
					line: n,
					column: i,
					length: h,
					message: g
				}), le === !1) break;
			}
		}
		return this.hasCustom || (S.length = x), {
			tokens: S,
			groups: ne,
			errors: te
		};
	}
	handleModes(e, t, n, r) {
		if (e.pop === !0) {
			let i = e.push;
			t(r), i !== void 0 && n.call(this, i);
		} else e.push !== void 0 && n.call(this, e.push);
	}
	updateTokenEndLineColumnLocation(e, t, n, r, i, a, o) {
		let s, c;
		t !== void 0 && (s = n === o - 1, c = s ? -1 : 0, r === 1 && s === !0 || (e.endLine = i + c, e.endColumn = a - 1 + -c));
	}
	computeNewColumn(e, t) {
		return e + t;
	}
	createOffsetOnlyToken(e, t, n, r) {
		return {
			image: e,
			startOffset: t,
			tokenTypeIdx: n,
			tokenType: r
		};
	}
	createStartOnlyToken(e, t, n, r, i, a) {
		return {
			image: e,
			startOffset: t,
			startLine: i,
			startColumn: a,
			tokenTypeIdx: n,
			tokenType: r
		};
	}
	createFullToken(e, t, n, r, i, a, o) {
		return {
			image: e,
			startOffset: t,
			endOffset: t + o - 1,
			startLine: i,
			endLine: i,
			startColumn: a,
			endColumn: a + o - 1,
			tokenTypeIdx: n,
			tokenType: r
		};
	}
	addTokenUsingPush(e, t, n) {
		return e.push(n), t;
	}
	addTokenUsingMemberAccess(e, t, n) {
		return e[t] = n, t++, t;
	}
	handlePayloadNoCustom(e, t) {}
	handlePayloadWithCustom(e, t) {
		t !== null && (e.payload = t);
	}
	match(e, t, n) {
		return e.test(t) === !0 ? t.substring(n, e.lastIndex) : null;
	}
	matchLength(e, t, n) {
		return e.test(t) === !0 ? e.lastIndex - n : -1;
	}
}, o(cb, "Lexer"), cb);
lb.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it will be consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.", lb.NA = /NOT_APPLICABLE/;
function ub(e) {
	return db(e) ? e.LABEL : e.name;
}
o(ub, "tokenLabel");
function db(e) {
	return l_(e.LABEL) && e.LABEL !== "";
}
o(db, "hasTokenLabel");
var fb = "parent", pb = "categories", mb = "label", hb = "group", gb = "push_mode", _b = "pop_mode", vb = "longer_alt", yb = "line_breaks", bb = "start_chars_hint";
function xb(e) {
	return Sb(e);
}
o(xb, "createToken");
function Sb(e) {
	let t = e.pattern, n = {};
	if (n.name = e.name, A_(t) || (n.PATTERN = t), H(e, fb)) throw "The parent property is no longer supported.\nSee: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.";
	return H(e, pb) && (n.CATEGORIES = e[pb]), Yy([n]), H(e, mb) && (n.LABEL = e[mb]), H(e, hb) && (n.GROUP = e[hb]), H(e, _b) && (n.POP_MODE = e[_b]), H(e, gb) && (n.PUSH_MODE = e[gb]), H(e, vb) && (n.LONGER_ALT = e[vb]), H(e, yb) && (n.LINE_BREAKS = e[yb]), H(e, bb) && (n.START_CHARS_HINT = e[bb]), n;
}
o(Sb, "createTokenInternal");
var Cb = xb({
	name: "EOF",
	pattern: lb.NA
});
Yy([Cb]);
function wb(e, t, n, r, i, a, o, s) {
	return {
		image: t,
		startOffset: n,
		endOffset: r,
		startLine: i,
		endLine: a,
		startColumn: o,
		endColumn: s,
		tokenTypeIdx: e.tokenTypeIdx,
		tokenType: e
	};
}
o(wb, "createTokenInstance");
function Tb(e, t) {
	return Gy(e, t);
}
o(Tb, "tokenMatcher");
var Eb = {
	buildMismatchTokenMessage({ expected: e, actual: t, previous: n, ruleName: r }) {
		return `Expecting ${db(e) ? `--> ${ub(e)} <--` : `token of type --> ${e.name} <--`} but found --> '${t.image}' <--`;
	},
	buildNotAllInputParsedMessage({ firstRedundant: e, ruleName: t }) {
		return "Redundant input, expecting EOF but found: " + e.image;
	},
	buildNoViableAltMessage({ expectedPathsPerAlt: e, actual: t, previous: n, customUserDescription: r, ruleName: i }) {
		let a = "\nbut found: '" + Yg(t).image + "'";
		return r ? "Expecting: " + r + a : `Expecting: one of these possible Token sequences:
${V(V(U_(e, (e, t) => e.concat(t), []), (e) => `[${V(e, (e) => ub(e)).join(", ")}]`), (e, t) => `  ${t + 1}. ${e}`).join("\n")}` + a;
	},
	buildEarlyExitMessage({ expectedIterationPaths: e, actual: t, customUserDescription: n, ruleName: r }) {
		let i = "\nbut found: '" + Yg(t).image + "'";
		return n ? "Expecting: " + n + i : `Expecting: expecting at least one iteration which starts with one of these possible Token sequences::
  <${V(e, (e) => `[${V(e, (e) => ub(e)).join(",")}]`).join(" ,")}>` + i;
	}
};
Object.freeze(Eb);
var Db = { buildRuleNotFoundError(e, t) {
	return "Invalid grammar, reference to a rule which is not defined: ->" + t.nonTerminalName + "<-\ninside top level rule: ->" + e.name + "<-";
} }, Ob = {
	buildDuplicateFoundError(e, t) {
		function n(e) {
			return e instanceof G ? e.terminalType.name : e instanceof dv ? e.nonTerminalName : "";
		}
		o(n, "getExtraProductionArgument");
		let r = e.name, i = Yg(t), a = i.idx, s = Fv(i), c = n(i), l = `->${s}${a > 0 ? a : ""}<- ${c ? `with argument: ->${c}<-` : ""}
                  appears more than once (${t.length} times) in the top level rule: ->${r}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
		return l = l.replace(/[ \t]+/g, " "), l = l.replace(/\s\s+/g, "\n"), l;
	},
	buildNamespaceConflictError(e) {
		return `Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${e.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;
	},
	buildAlternationPrefixAmbiguityError(e) {
		let t = V(e.prefixPath, (e) => ub(e)).join(", "), n = e.alternation.idx === 0 ? "" : e.alternation.idx;
		return `Ambiguous alternatives: <${e.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${n}> inside <${e.topLevelRule.name}> Rule,
<${t}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
	},
	buildAlternationAmbiguityError(e) {
		let t = e.alternation.idx === 0 ? "" : e.alternation.idx, n = e.prefixPath.length === 0, r = `Ambiguous Alternatives Detected: <${e.ambiguityIndices.join(" ,")}> in <OR${t}> inside <${e.topLevelRule.name}> Rule,
`;
		if (n) r += "These alternatives are all empty (match no tokens), making them indistinguishable.\nOnly the last alternative may be empty.\n";
		else {
			let t = V(e.prefixPath, (e) => ub(e)).join(", ");
			r += `<${t}> may appears as a prefix path in all these alternatives.
`;
		}
		return r += "See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES\nFor Further details.", r;
	},
	buildEmptyRepetitionError(e) {
		let t = Fv(e.repetition);
		return e.repetition.idx !== 0 && (t += e.repetition.idx), `The repetition <${t}> within Rule <${e.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`;
	},
	buildTokenNameError(e) {
		return "deprecated";
	},
	buildEmptyAlternationError(e) {
		return `Ambiguous empty alternative: <${e.emptyChoiceIdx + 1}> in <OR${e.alternation.idx}> inside <${e.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`;
	},
	buildTooManyAlternativesError(e) {
		return `An Alternation cannot have more than 256 alternatives:
<OR${e.alternation.idx}> inside <${e.topLevelRule.name}> Rule.
 has ${e.alternation.definition.length + 1} alternatives.`;
	},
	buildLeftRecursionError(e) {
		let t = e.topLevelRule.name;
		return `Left Recursion found in grammar.
rule: <${t}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${`${t} --> ${V(e.leftRecursionPath, (e) => e.name).concat([t]).join(" --> ")}`}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
	},
	buildInvalidRuleNameError(e) {
		return "deprecated";
	},
	buildDuplicateRuleNameError(e) {
		let t;
		return t = e.topLevelRule instanceof pv ? e.topLevelRule.name : e.topLevelRule, `Duplicate definition, rule: ->${t}<- is already defined in the grammar: ->${e.grammarName}<-`;
	}
};
function kb(e, t) {
	let n = new jb(e, t);
	return n.resolveRefs(), n.errors;
}
o(kb, "resolveGrammar");
var Ab, jb = (Ab = class extends jv {
	constructor(e, t) {
		super(), this.nameToTopRule = e, this.errMsgProvider = t, this.errors = [];
	}
	resolveRefs() {
		B(p_(this.nameToTopRule), (e) => {
			this.currTopLevel = e, e.accept(this);
		});
	}
	visitNonTerminal(e) {
		let t = this.nameToTopRule[e.nonTerminalName];
		if (t) e.referencedRule = t;
		else {
			let t = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, e);
			this.errors.push({
				message: t,
				type: dC.UNRESOLVED_SUBRULE_REF,
				ruleName: this.currTopLevel.name,
				unresolvedRefName: e.nonTerminalName
			});
		}
	}
}, o(Ab, "GastRefResolverVisitor"), Ab), Mb, Nb = (Mb = class extends Lv {
	constructor(e, t) {
		super(), this.topProd = e, this.path = t, this.possibleTokTypes = [], this.nextProductionName = "", this.nextProductionOccurrence = 0, this.found = !1, this.isAtEndOfPath = !1;
	}
	startWalking() {
		if (this.found = !1, this.path.ruleStack[0] !== this.topProd.name) throw Error("The path does not start with the walker's top Rule!");
		return this.ruleStack = Dm(this.path.ruleStack).reverse(), this.occurrenceStack = Dm(this.path.occurrenceStack).reverse(), this.ruleStack.pop(), this.occurrenceStack.pop(), this.updateExpectedNext(), this.walk(this.topProd), this.possibleTokTypes;
	}
	walk(e, t = []) {
		this.found || super.walk(e, t);
	}
	walkProdRef(e, t, n) {
		if (e.referencedRule.name === this.nextProductionName && e.idx === this.nextProductionOccurrence) {
			let r = t.concat(n);
			this.updateExpectedNext(), this.walk(e.referencedRule, r);
		}
	}
	updateExpectedNext() {
		U(this.ruleStack) ? (this.nextProductionName = "", this.nextProductionOccurrence = 0, this.isAtEndOfPath = !0) : (this.nextProductionName = this.ruleStack.pop(), this.nextProductionOccurrence = this.occurrenceStack.pop());
	}
}, o(Mb, "AbstractNextPossibleTokensWalker"), Mb), Pb, Fb = (Pb = class extends Nb {
	constructor(e, t) {
		super(e, t), this.path = t, this.nextTerminalName = "", this.nextTerminalOccurrence = 0, this.nextTerminalName = this.path.lastTok.name, this.nextTerminalOccurrence = this.path.lastTokOccurrence;
	}
	walkTerminal(e, t, n) {
		if (this.isAtEndOfPath && e.terminalType.name === this.nextTerminalName && e.idx === this.nextTerminalOccurrence && !this.found) {
			let e = new hv({ definition: t.concat(n) });
			this.possibleTokTypes = zv(e), this.found = !0;
		}
	}
}, o(Pb, "NextAfterTokenWalker"), Pb), Ib, Lb = (Ib = class extends Lv {
	constructor(e, t) {
		super(), this.topRule = e, this.occurrence = t, this.result = {
			token: void 0,
			occurrence: void 0,
			isEndOfRule: void 0
		};
	}
	startWalking() {
		return this.walk(this.topRule), this.result;
	}
}, o(Ib, "AbstractNextTerminalAfterProductionWalker"), Ib), Rb, zb = (Rb = class extends Lb {
	walkMany(e, t, n) {
		if (e.idx === this.occurrence) {
			let e = Yg(t.concat(n));
			this.result.isEndOfRule = e === void 0, e instanceof G && (this.result.token = e.terminalType, this.result.occurrence = e.idx);
		} else super.walkMany(e, t, n);
	}
}, o(Rb, "NextTerminalAfterManyWalker"), Rb), Bb, Vb = (Bb = class extends Lb {
	walkManySep(e, t, n) {
		if (e.idx === this.occurrence) {
			let e = Yg(t.concat(n));
			this.result.isEndOfRule = e === void 0, e instanceof G && (this.result.token = e.terminalType, this.result.occurrence = e.idx);
		} else super.walkManySep(e, t, n);
	}
}, o(Bb, "NextTerminalAfterManySepWalker"), Bb), Hb, Ub = (Hb = class extends Lb {
	walkAtLeastOne(e, t, n) {
		if (e.idx === this.occurrence) {
			let e = Yg(t.concat(n));
			this.result.isEndOfRule = e === void 0, e instanceof G && (this.result.token = e.terminalType, this.result.occurrence = e.idx);
		} else super.walkAtLeastOne(e, t, n);
	}
}, o(Hb, "NextTerminalAfterAtLeastOneWalker"), Hb), Wb, Gb = (Wb = class extends Lb {
	walkAtLeastOneSep(e, t, n) {
		if (e.idx === this.occurrence) {
			let e = Yg(t.concat(n));
			this.result.isEndOfRule = e === void 0, e instanceof G && (this.result.token = e.terminalType, this.result.occurrence = e.idx);
		} else super.walkAtLeastOneSep(e, t, n);
	}
}, o(Wb, "NextTerminalAfterAtLeastOneSepWalker"), Wb);
function Kb(e, t, n = []) {
	n = Dm(n);
	let r = [], i = 0;
	function a(t) {
		return t.concat(Dg(e, i + 1));
	}
	o(a, "remainingPathWith");
	function s(e) {
		let i = Kb(a(e), t, n);
		return r.concat(i);
	}
	for (o(s, "getAlternativesForProd"); n.length < t && i < e.length;) {
		let t = e[i];
		if (t instanceof hv || t instanceof dv) return s(t.definition);
		if (t instanceof _v) r = s(t.definition);
		else if (t instanceof yv) return s(t.definition.concat([new W({ definition: t.definition })]));
		else if (t instanceof xv) return s([new hv({ definition: t.definition }), new W({ definition: [new G({ terminalType: t.separator })].concat(t.definition) })]);
		else if (t instanceof wv) r = s(t.definition.concat([new W({ definition: [new G({ terminalType: t.separator })].concat(t.definition) })]));
		else if (t instanceof W) r = s(t.definition.concat([new W({ definition: t.definition })]));
		else {
			if (t instanceof Ev) return B(t.definition, (e) => {
				U(e.definition) === !1 && (r = s(e.definition));
			}), r;
			if (t instanceof G) n.push(t.terminalType);
			else throw Error("non exhaustive match");
		}
		i++;
	}
	return r.push({
		partialPath: n,
		suffixDef: Dg(e, i)
	}), r;
}
o(Kb, "possiblePathsFrom");
function qb(e, t, n, r) {
	let i = "EXIT_NONE_TERMINAL", a = [i], o = "EXIT_ALTERNATIVE", s = !1, c = t.length, l = c - r - 1, u = [], d = [];
	for (d.push({
		idx: -1,
		def: e,
		ruleStack: [],
		occurrenceStack: []
	}); !U(d);) {
		let e = d.pop();
		if (e === o) {
			s && Tg(d).idx <= l && d.pop();
			continue;
		}
		let r = e.def, f = e.idx, p = e.ruleStack, m = e.occurrenceStack;
		if (U(r)) continue;
		let h = r[0];
		if (h === i) {
			let e = {
				idx: f,
				def: Dg(r),
				ruleStack: kg(p),
				occurrenceStack: kg(m)
			};
			d.push(e);
		} else if (h instanceof G) {
			if (f < c - 1) {
				let e = f + 1, i = t[e];
				if (n(i, h.terminalType)) {
					let t = {
						idx: e,
						def: Dg(r),
						ruleStack: p,
						occurrenceStack: m
					};
					d.push(t);
				}
			} else if (f === c - 1) u.push({
				nextTokenType: h.terminalType,
				nextTokenOccurrence: h.idx,
				ruleStack: p,
				occurrenceStack: m
			}), s = !0;
			else throw Error("non exhaustive match");
		} else if (h instanceof dv) {
			let e = Dm(p);
			e.push(h.nonTerminalName);
			let t = Dm(m);
			t.push(h.idx);
			let n = {
				idx: f,
				def: h.definition.concat(a, Dg(r)),
				ruleStack: e,
				occurrenceStack: t
			};
			d.push(n);
		} else if (h instanceof _v) {
			let e = {
				idx: f,
				def: Dg(r),
				ruleStack: p,
				occurrenceStack: m
			};
			d.push(e), d.push(o);
			let t = {
				idx: f,
				def: h.definition.concat(Dg(r)),
				ruleStack: p,
				occurrenceStack: m
			};
			d.push(t);
		} else if (h instanceof yv) {
			let e = new W({
				definition: h.definition,
				idx: h.idx
			}), t = {
				idx: f,
				def: h.definition.concat([e], Dg(r)),
				ruleStack: p,
				occurrenceStack: m
			};
			d.push(t);
		} else if (h instanceof xv) {
			let e = new W({
				definition: [new G({ terminalType: h.separator })].concat(h.definition),
				idx: h.idx
			}), t = {
				idx: f,
				def: h.definition.concat([e], Dg(r)),
				ruleStack: p,
				occurrenceStack: m
			};
			d.push(t);
		} else if (h instanceof wv) {
			let e = {
				idx: f,
				def: Dg(r),
				ruleStack: p,
				occurrenceStack: m
			};
			d.push(e), d.push(o);
			let t = new W({
				definition: [new G({ terminalType: h.separator })].concat(h.definition),
				idx: h.idx
			}), n = {
				idx: f,
				def: h.definition.concat([t], Dg(r)),
				ruleStack: p,
				occurrenceStack: m
			};
			d.push(n);
		} else if (h instanceof W) {
			let e = {
				idx: f,
				def: Dg(r),
				ruleStack: p,
				occurrenceStack: m
			};
			d.push(e), d.push(o);
			let t = new W({
				definition: h.definition,
				idx: h.idx
			}), n = {
				idx: f,
				def: h.definition.concat([t], Dg(r)),
				ruleStack: p,
				occurrenceStack: m
			};
			d.push(n);
		} else if (h instanceof Ev) for (let e = h.definition.length - 1; e >= 0; e--) {
			let t = {
				idx: f,
				def: h.definition[e].definition.concat(Dg(r)),
				ruleStack: p,
				occurrenceStack: m
			};
			d.push(t), d.push(o);
		}
		else if (h instanceof hv) d.push({
			idx: f,
			def: h.definition.concat(Dg(r)),
			ruleStack: p,
			occurrenceStack: m
		});
		else if (h instanceof pv) d.push(Jb(h, f, p, m));
		else throw Error("non exhaustive match");
	}
	return u;
}
o(qb, "nextPossibleTokensAfter");
function Jb(e, t, n, r) {
	let i = Dm(n);
	i.push(e.name);
	let a = Dm(r);
	return a.push(1), {
		idx: t,
		def: e.definition,
		ruleStack: i,
		occurrenceStack: a
	};
}
o(Jb, "expandTopLevelRule");
var q;
(function(e) {
	e[e.OPTION = 0] = "OPTION", e[e.REPETITION = 1] = "REPETITION", e[e.REPETITION_MANDATORY = 2] = "REPETITION_MANDATORY", e[e.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR", e[e.REPETITION_WITH_SEPARATOR = 4] = "REPETITION_WITH_SEPARATOR", e[e.ALTERNATION = 5] = "ALTERNATION";
})(q ||= {});
function Yb(e) {
	if (e instanceof _v || e === "Option") return q.OPTION;
	if (e instanceof W || e === "Repetition") return q.REPETITION;
	if (e instanceof yv || e === "RepetitionMandatory") return q.REPETITION_MANDATORY;
	if (e instanceof xv || e === "RepetitionMandatoryWithSeparator") return q.REPETITION_MANDATORY_WITH_SEPARATOR;
	if (e instanceof wv || e === "RepetitionWithSeparator") return q.REPETITION_WITH_SEPARATOR;
	if (e instanceof Ev || e === "Alternation") return q.ALTERNATION;
	throw Error("non exhaustive match");
}
o(Yb, "getProdType");
function Xb(e) {
	let { occurrence: t, rule: n, prodType: r, maxLookahead: i } = e, a = Yb(r);
	return a === q.ALTERNATION ? lx(t, n, i) : ux(t, n, a, i);
}
o(Xb, "getLookaheadPaths");
function Zb(e, t, n, r, i, a) {
	let o = lx(e, t, n);
	return a(o, r, px(o) ? Ky : Gy, i);
}
o(Zb, "buildLookaheadFuncForOr");
function Qb(e, t, n, r, i, a) {
	let o = ux(e, t, i, n), s = px(o) ? Ky : Gy;
	return a(o[0], s, r);
}
o(Qb, "buildLookaheadFuncForOptionalProd");
function $b(e, t, n, r) {
	let i = e.length, a = Rg(e, (e) => Rg(e, (e) => e.length === 1));
	if (t) return function(t) {
		let r = V(t, (e) => e.GATE);
		for (let t = 0; t < i; t++) {
			let i = e[t], a = i.length, o = r[t];
			if (o === void 0 || o.call(this) !== !1) e: for (let e = 0; e < a; e++) {
				let r = i[e], a = r.length;
				for (let e = 0; e < a; e++) if (n(this.LA(e + 1), r[e]) === !1) continue e;
				return t;
			}
		}
	};
	if (a && !r) {
		let t = U_(V(e, (e) => Hd(e)), (e, t, n) => (B(t, (t) => {
			H(e, t.tokenTypeIdx) || (e[t.tokenTypeIdx] = n), B(t.categoryMatches, (t) => {
				H(e, t) || (e[t] = n);
			});
		}), e), {});
		return function() {
			let e = this.LA(1);
			return t[e.tokenTypeIdx];
		};
	}
	return function() {
		for (let t = 0; t < i; t++) {
			let r = e[t], i = r.length;
			e: for (let e = 0; e < i; e++) {
				let i = r[e], a = i.length;
				for (let e = 0; e < a; e++) if (n(this.LA(e + 1), i[e]) === !1) continue e;
				return t;
			}
		}
	};
}
o($b, "buildAlternativesLookAheadFunc");
function ex(e, t, n) {
	let r = Rg(e, (e) => e.length === 1), i = e.length;
	if (r && !n) {
		let t = Hd(e);
		if (t.length === 1 && U(t[0].categoryMatches)) {
			let e = t[0].tokenTypeIdx;
			return function() {
				return this.LA(1).tokenTypeIdx === e;
			};
		}
		{
			let e = U_(t, (e, t, n) => (e[t.tokenTypeIdx] = !0, B(t.categoryMatches, (t) => {
				e[t] = !0;
			}), e), []);
			return function() {
				let t = this.LA(1);
				return e[t.tokenTypeIdx] === !0;
			};
		}
	}
	return function() {
		e: for (let n = 0; n < i; n++) {
			let r = e[n], i = r.length;
			for (let e = 0; e < i; e++) if (t(this.LA(e + 1), r[e]) === !1) continue e;
			return !0;
		}
		return !1;
	};
}
o(ex, "buildSingleAlternativeLookaheadFunction");
var tx, nx = (tx = class extends Lv {
	constructor(e, t, n) {
		super(), this.topProd = e, this.targetOccurrence = t, this.targetProdType = n;
	}
	startWalking() {
		return this.walk(this.topProd), this.restDef;
	}
	checkIsTarget(e, t, n, r) {
		return e.idx === this.targetOccurrence && this.targetProdType === t && (this.restDef = n.concat(r), !0);
	}
	walkOption(e, t, n) {
		this.checkIsTarget(e, q.OPTION, t, n) || super.walkOption(e, t, n);
	}
	walkAtLeastOne(e, t, n) {
		this.checkIsTarget(e, q.REPETITION_MANDATORY, t, n) || super.walkOption(e, t, n);
	}
	walkAtLeastOneSep(e, t, n) {
		this.checkIsTarget(e, q.REPETITION_MANDATORY_WITH_SEPARATOR, t, n) || super.walkOption(e, t, n);
	}
	walkMany(e, t, n) {
		this.checkIsTarget(e, q.REPETITION, t, n) || super.walkOption(e, t, n);
	}
	walkManySep(e, t, n) {
		this.checkIsTarget(e, q.REPETITION_WITH_SEPARATOR, t, n) || super.walkOption(e, t, n);
	}
}, o(tx, "RestDefinitionFinderWalker"), tx), rx, ix = (rx = class extends jv {
	constructor(e, t, n) {
		super(), this.targetOccurrence = e, this.targetProdType = t, this.targetRef = n, this.result = [];
	}
	checkIsTarget(e, t) {
		e.idx === this.targetOccurrence && this.targetProdType === t && (this.targetRef === void 0 || e === this.targetRef) && (this.result = e.definition);
	}
	visitOption(e) {
		this.checkIsTarget(e, q.OPTION);
	}
	visitRepetition(e) {
		this.checkIsTarget(e, q.REPETITION);
	}
	visitRepetitionMandatory(e) {
		this.checkIsTarget(e, q.REPETITION_MANDATORY);
	}
	visitRepetitionMandatoryWithSeparator(e) {
		this.checkIsTarget(e, q.REPETITION_MANDATORY_WITH_SEPARATOR);
	}
	visitRepetitionWithSeparator(e) {
		this.checkIsTarget(e, q.REPETITION_WITH_SEPARATOR);
	}
	visitAlternation(e) {
		this.checkIsTarget(e, q.ALTERNATION);
	}
}, o(rx, "InsideDefinitionFinderVisitor"), rx);
function ax(e) {
	let t = Array(e);
	for (let n = 0; n < e; n++) t[n] = [];
	return t;
}
o(ax, "initializeArrayOfArrays");
function ox(e) {
	let t = [""];
	for (let n = 0; n < e.length; n++) {
		let r = e[n], i = [];
		for (let e = 0; e < t.length; e++) {
			let n = t[e];
			i.push(n + "_" + r.tokenTypeIdx);
			for (let e = 0; e < r.categoryMatches.length; e++) {
				let t = "_" + r.categoryMatches[e];
				i.push(n + t);
			}
		}
		t = i;
	}
	return t;
}
o(ox, "pathToHashKeys");
function sx(e, t, n) {
	for (let r = 0; r < e.length; r++) {
		if (r === n) continue;
		let i = e[r];
		for (let e = 0; e < t.length; e++) if (i[t[e]] === !0) return !1;
	}
	return !0;
}
o(sx, "isUniquePrefixHash");
function cx(e, t) {
	let n = V(e, (e) => Kb([e], 1)), r = ax(n.length), i = V(n, (e) => {
		let t = {};
		return B(e, (e) => {
			B(ox(e.partialPath), (e) => {
				t[e] = !0;
			});
		}), t;
	}), a = n;
	for (let e = 1; e <= t; e++) {
		let n = a;
		a = ax(n.length);
		for (let o = 0; o < n.length; o++) {
			let s = n[o];
			for (let n = 0; n < s.length; n++) {
				let c = s[n].partialPath, l = s[n].suffixDef, u = ox(c);
				if (sx(i, u, o) || U(l) || c.length === t) {
					let e = r[o];
					if (dx(e, c) === !1) {
						e.push(c);
						for (let e = 0; e < u.length; e++) {
							let t = u[e];
							i[o][t] = !0;
						}
					}
				} else {
					let t = Kb(l, e + 1, c);
					a[o] = a[o].concat(t), B(t, (e) => {
						B(ox(e.partialPath), (e) => {
							i[o][e] = !0;
						});
					});
				}
			}
		}
	}
	return r;
}
o(cx, "lookAheadSequenceFromAlternatives");
function lx(e, t, n, r) {
	let i = new ix(e, q.ALTERNATION, r);
	return t.accept(i), cx(i.result, n);
}
o(lx, "getLookaheadPathsForOr");
function ux(e, t, n, r) {
	let i = new ix(e, n);
	t.accept(i);
	let a = i.result, o = new nx(t, e, n).startWalking();
	return cx([new hv({ definition: a }), new hv({ definition: o })], r);
}
o(ux, "getLookaheadPathsForOptionalProd");
function dx(e, t) {
	e: for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (r.length === t.length) {
			for (let e = 0; e < r.length; e++) {
				let n = t[e], i = r[e];
				if (n !== i && i.categoryMatchesMap[n.tokenTypeIdx] === void 0) continue e;
			}
			return !0;
		}
	}
	return !1;
}
o(dx, "containsPath");
function fx(e, t) {
	return e.length < t.length && Rg(e, (e, n) => {
		let r = t[n];
		return e === r || r.categoryMatchesMap[e.tokenTypeIdx];
	});
}
o(fx, "isStrictPrefixOfPath");
function px(e) {
	return Rg(e, (e) => Rg(e, (e) => Rg(e, (e) => U(e.categoryMatches))));
}
o(px, "areTokenCategoriesNotUsed");
function mx(e) {
	return V(e.lookaheadStrategy.validate({
		rules: e.rules,
		tokenTypes: e.tokenTypes,
		grammarName: e.grammarName
	}), (e) => Object.assign({ type: dC.CUSTOM_LOOKAHEAD_VALIDATION }, e));
}
o(mx, "validateLookahead");
function hx(e, t, n, r) {
	let i = e_(e, (e) => gx(e, n)), a = Fx(e, t, n), o = e_(e, (e) => jx(e, n)), s = e_(e, (t) => xx(t, e, r, n));
	return i.concat(a, o, s);
}
o(hx, "validateGrammar");
function gx(e, t) {
	let n = new bx();
	e.accept(n);
	let r = n.allProductions;
	return V(p_(z_(n_(r, _x), (e) => e.length > 1)), (n) => {
		let r = Yg(n), i = t.buildDuplicateFoundError(e, n), a = Fv(r), o = {
			message: i,
			type: dC.DUPLICATE_PRODUCTIONS,
			ruleName: e.name,
			dslName: a,
			occurrence: r.idx
		}, s = vx(r);
		return s && (o.parameter = s), o;
	});
}
o(gx, "validateDuplicateProductions");
function _x(e) {
	return `${Fv(e)}_#_${e.idx}_#_${vx(e)}`;
}
o(_x, "identifyProductionForDuplicates");
function vx(e) {
	return e instanceof G ? e.terminalType.name : e instanceof dv ? e.nonTerminalName : "";
}
o(vx, "getExtraProductionArgument");
var yx, bx = (yx = class extends jv {
	constructor() {
		super(...arguments), this.allProductions = [];
	}
	visitNonTerminal(e) {
		this.allProductions.push(e);
	}
	visitOption(e) {
		this.allProductions.push(e);
	}
	visitRepetitionWithSeparator(e) {
		this.allProductions.push(e);
	}
	visitRepetitionMandatory(e) {
		this.allProductions.push(e);
	}
	visitRepetitionMandatoryWithSeparator(e) {
		this.allProductions.push(e);
	}
	visitRepetition(e) {
		this.allProductions.push(e);
	}
	visitAlternation(e) {
		this.allProductions.push(e);
	}
	visitTerminal(e) {
		this.allProductions.push(e);
	}
}, o(yx, "OccurrenceValidationCollector"), yx);
function xx(e, t, n, r) {
	let i = [];
	if (U_(t, (t, n) => n.name === e.name ? t + 1 : t, 0) > 1) {
		let t = r.buildDuplicateRuleNameError({
			topLevelRule: e,
			grammarName: n
		});
		i.push({
			message: t,
			type: dC.DUPLICATE_RULE_NAME,
			ruleName: e.name
		});
	}
	return i;
}
o(xx, "validateRuleDoesNotAlreadyExist");
function Sx(e, t, n) {
	let r = [], i;
	return g_(t, e) || (i = `Invalid rule override, rule: ->${e}<- cannot be overridden in the grammar: ->${n}<-as it is not defined in any of the super grammars `, r.push({
		message: i,
		type: dC.INVALID_RULE_OVERRIDE,
		ruleName: e
	})), r;
}
o(Sx, "validateRuleIsOverridden");
function Cx(e, t, n, r = []) {
	let i = [], a = wx(t.definition);
	if (U(a)) return [];
	{
		let t = e.name;
		g_(a, e) && i.push({
			message: n.buildLeftRecursionError({
				topLevelRule: e,
				leftRecursionPath: r
			}),
			type: dC.LEFT_RECURSION,
			ruleName: t
		});
		let o = e_(Cg(a, r.concat([e])), (t) => {
			let i = Dm(r);
			return i.push(t), Cx(e, t, n, i);
		});
		return i.concat(o);
	}
}
o(Cx, "validateNoLeftRecursion");
function wx(e) {
	let t = [];
	if (U(e)) return t;
	let n = Yg(e);
	if (n instanceof dv) t.push(n.referencedRule);
	else if (n instanceof hv || n instanceof _v || n instanceof yv || n instanceof xv || n instanceof wv || n instanceof W) t = t.concat(wx(n.definition));
	else if (n instanceof Ev) t = Hd(V(n.definition, (e) => wx(e.definition)));
	else if (!(n instanceof G)) throw Error("non exhaustive match");
	let r = Nv(n), i = e.length > 1;
	if (r && i) {
		let n = Dg(e);
		return t.concat(wx(n));
	}
	return t;
}
o(wx, "getFirstNoneTerminal");
var Tx, Ex = (Tx = class extends jv {
	constructor() {
		super(...arguments), this.alternations = [];
	}
	visitAlternation(e) {
		this.alternations.push(e);
	}
}, o(Tx, "OrCollector"), Tx);
function Dx(e, t) {
	let n = new Ex();
	e.accept(n);
	let r = n.alternations;
	return e_(r, (n) => e_(kg(n.definition), (r, i) => U(qb([r], [], Gy, 1)) ? [{
		message: t.buildEmptyAlternationError({
			topLevelRule: e,
			alternation: n,
			emptyChoiceIdx: i
		}),
		type: dC.NONE_LAST_EMPTY_ALT,
		ruleName: e.name,
		occurrence: n.idx,
		alternative: i + 1
	}] : []));
}
o(Dx, "validateEmptyOrAlternative");
function Ox(e, t, n) {
	let r = new Ex();
	e.accept(r);
	let i = r.alternations;
	return i = G_(i, (e) => e.ignoreAmbiguities === !0), e_(i, (r) => {
		let i = r.idx, a = lx(i, e, r.maxLookahead || t, r), o = Nx(a, r, e, n), s = Px(a, r, e, n);
		return o.concat(s);
	});
}
o(Ox, "validateAmbiguousAlternationAlternatives");
var kx, Ax = (kx = class extends jv {
	constructor() {
		super(...arguments), this.allProductions = [];
	}
	visitRepetitionWithSeparator(e) {
		this.allProductions.push(e);
	}
	visitRepetitionMandatory(e) {
		this.allProductions.push(e);
	}
	visitRepetitionMandatoryWithSeparator(e) {
		this.allProductions.push(e);
	}
	visitRepetition(e) {
		this.allProductions.push(e);
	}
}, o(kx, "RepetitionCollector"), kx);
function jx(e, t) {
	let n = new Ex();
	e.accept(n);
	let r = n.alternations;
	return e_(r, (n) => n.definition.length > 255 ? [{
		message: t.buildTooManyAlternativesError({
			topLevelRule: e,
			alternation: n
		}),
		type: dC.TOO_MANY_ALTS,
		ruleName: e.name,
		occurrence: n.idx
	}] : []);
}
o(jx, "validateTooManyAlts");
function Mx(e, t, n) {
	let r = [];
	return B(e, (e) => {
		let i = new Ax();
		e.accept(i);
		let a = i.allProductions;
		B(a, (i) => {
			let a = Yb(i), o = i.maxLookahead || t, s = i.idx, c = ux(s, e, a, o)[0];
			if (U(Hd(c))) {
				let t = n.buildEmptyRepetitionError({
					topLevelRule: e,
					repetition: i
				});
				r.push({
					message: t,
					type: dC.NO_NON_EMPTY_LOOKAHEAD,
					ruleName: e.name
				});
			}
		});
	}), r;
}
o(Mx, "validateSomeNonEmptyLookaheadPath");
function Nx(e, t, n, r) {
	let i = [];
	return V(U_(e, (n, r, a) => (t.definition[a].ignoreAmbiguities === !0 || B(r, (r) => {
		let o = [a];
		B(e, (e, n) => {
			a !== n && dx(e, r) && t.definition[n].ignoreAmbiguities !== !0 && o.push(n);
		}), o.length > 1 && !dx(i, r) && (i.push(r), n.push({
			alts: o,
			path: r
		}));
	}), n), []), (e) => {
		let i = V(e.alts, (e) => e + 1);
		return {
			message: r.buildAlternationAmbiguityError({
				topLevelRule: n,
				alternation: t,
				ambiguityIndices: i,
				prefixPath: e.path
			}),
			type: dC.AMBIGUOUS_ALTS,
			ruleName: n.name,
			occurrence: t.idx,
			alternatives: e.alts
		};
	});
}
o(Nx, "checkAlternativesAmbiguities");
function Px(e, t, n, r) {
	let i = U_(e, (e, t, n) => {
		let r = V(t, (e) => ({
			idx: n,
			path: e
		}));
		return e.concat(r);
	}, []);
	return km(e_(i, (e) => {
		if (t.definition[e.idx].ignoreAmbiguities === !0) return [];
		let a = e.idx, o = e.path;
		return V(Hg(i, (e) => t.definition[e.idx].ignoreAmbiguities !== !0 && e.idx < a && fx(e.path, o)), (e) => {
			let i = [e.idx + 1, a + 1], o = t.idx === 0 ? "" : t.idx;
			return {
				message: r.buildAlternationPrefixAmbiguityError({
					topLevelRule: n,
					alternation: t,
					ambiguityIndices: i,
					prefixPath: e.path
				}),
				type: dC.AMBIGUOUS_PREFIX_ALTS,
				ruleName: n.name,
				occurrence: o,
				alternatives: i
			};
		});
	}));
}
o(Px, "checkPrefixAlternativesAmbiguities");
function Fx(e, t, n) {
	let r = [], i = V(t, (e) => e.name);
	return B(e, (e) => {
		let t = e.name;
		if (g_(i, t)) {
			let i = n.buildNamespaceConflictError(e);
			r.push({
				message: i,
				type: dC.CONFLICT_TOKENS_RULES_NAMESPACE,
				ruleName: t
			});
		}
	}), r;
}
o(Fx, "checkTerminalAndNoneTerminalsNameSpace");
function Ix(e) {
	let t = hg(e, { errMsgProvider: Db }), n = {};
	return B(e.rules, (e) => {
		n[e.name] = e;
	}), kb(n, t.errMsgProvider);
}
o(Ix, "resolveGrammar");
function Lx(e) {
	return e = hg(e, { errMsgProvider: Ob }), hx(e.rules, e.tokenTypes, e.errMsgProvider, e.grammarName);
}
o(Lx, "validateGrammar");
var Rx = "MismatchedTokenException", zx = "NoViableAltException", Bx = "EarlyExitException", Vx = "NotAllInputParsedException", Hx = [
	Rx,
	zx,
	Bx,
	Vx
];
Object.freeze(Hx);
function Ux(e) {
	return g_(Hx, e.name);
}
o(Ux, "isRecognitionException");
var Wx, Gx = (Wx = class extends Error {
	constructor(e, t) {
		super(e), this.token = t, this.resyncedTokens = [], Object.setPrototypeOf(this, new.target.prototype), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
	}
}, o(Wx, "RecognitionException"), Wx), Kx, qx = (Kx = class extends Gx {
	constructor(e, t, n) {
		super(e, t), this.previousToken = n, this.name = Rx;
	}
}, o(Kx, "MismatchedTokenException"), Kx), Jx, Yx = (Jx = class extends Gx {
	constructor(e, t, n) {
		super(e, t), this.previousToken = n, this.name = zx;
	}
}, o(Jx, "NoViableAltException"), Jx), Xx, Zx = (Xx = class extends Gx {
	constructor(e, t) {
		super(e, t), this.name = Vx;
	}
}, o(Xx, "NotAllInputParsedException"), Xx), Qx, $x = (Qx = class extends Gx {
	constructor(e, t, n) {
		super(e, t), this.previousToken = n, this.name = Bx;
	}
}, o(Qx, "EarlyExitException"), Qx), eS = {}, tS = "InRuleRecoveryException", nS, rS = (nS = class extends Error {
	constructor(e) {
		super(e), this.name = tS;
	}
}, o(nS, "InRuleRecoveryException"), nS), iS, aS = (iS = class {
	initRecoverable(e) {
		this.firstAfterRepMap = {}, this.resyncFollows = {}, this.recoveryEnabled = H(e, "recoveryEnabled") ? e.recoveryEnabled : lC.recoveryEnabled, this.recoveryEnabled && (this.attemptInRepetitionRecovery = oS);
	}
	getTokenToInsert(e) {
		let t = wb(e, "", NaN, NaN, NaN, NaN, NaN, NaN);
		return t.isInsertedInRecovery = !0, t;
	}
	canTokenTypeBeInsertedInRecovery(e) {
		return !0;
	}
	canTokenTypeBeDeletedInRecovery(e) {
		return !0;
	}
	tryInRepetitionRecovery(e, t, n, r) {
		let i = this.findReSyncTokenType(), a = this.exportLexerState(), s = [], c = !1, l = this.LA(1), u = this.LA(1), d = /* @__PURE__ */ o(() => {
			let e = this.LA(0), t = new qx(this.errorMessageProvider.buildMismatchTokenMessage({
				expected: r,
				actual: l,
				previous: e,
				ruleName: this.getCurrRuleFullName()
			}), l, this.LA(0));
			t.resyncedTokens = kg(s), this.SAVE_ERROR(t);
		}, "generateErrorMessage");
		for (; !c;) if (this.tokenMatcher(u, r)) {
			d();
			return;
		} else if (n.call(this)) {
			d(), e.apply(this, t);
			return;
		} else this.tokenMatcher(u, i) ? c = !0 : (u = this.SKIP_TOKEN(), this.addToResyncTokens(u, s));
		this.importLexerState(a);
	}
	shouldInRepetitionRecoveryBeTried(e, t, n) {
		return !(n === !1 || this.tokenMatcher(this.LA(1), e) || this.isBackTracking() || this.canPerformInRuleRecovery(e, this.getFollowsForInRuleRecovery(e, t)));
	}
	getFollowsForInRuleRecovery(e, t) {
		let n = this.getCurrentGrammarPath(e, t);
		return this.getNextPossibleTokenTypes(n);
	}
	tryInRuleRecovery(e, t) {
		if (this.canRecoverWithSingleTokenInsertion(e, t)) return this.getTokenToInsert(e);
		if (this.canRecoverWithSingleTokenDeletion(e)) {
			let e = this.SKIP_TOKEN();
			return this.consumeToken(), e;
		}
		throw new rS("sad sad panda");
	}
	canPerformInRuleRecovery(e, t) {
		return this.canRecoverWithSingleTokenInsertion(e, t) || this.canRecoverWithSingleTokenDeletion(e);
	}
	canRecoverWithSingleTokenInsertion(e, t) {
		if (!this.canTokenTypeBeInsertedInRecovery(e) || U(t)) return !1;
		let n = this.LA(1);
		return qg(t, (e) => this.tokenMatcher(n, e)) !== void 0;
	}
	canRecoverWithSingleTokenDeletion(e) {
		return this.canTokenTypeBeDeletedInRecovery(e) ? this.tokenMatcher(this.LA(2), e) : !1;
	}
	isInCurrentRuleReSyncSet(e) {
		let t = this.getCurrFollowKey();
		return g_(this.getFollowSetFromFollowKey(t), e);
	}
	findReSyncTokenType() {
		let e = this.flattenFollowSet(), t = this.LA(1), n = 2;
		for (;;) {
			let r = qg(e, (e) => Tb(t, e));
			if (r !== void 0) return r;
			t = this.LA(n), n++;
		}
	}
	getCurrFollowKey() {
		if (this.RULE_STACK.length === 1) return eS;
		let e = this.getLastExplicitRuleShortName(), t = this.getLastExplicitRuleOccurrenceIndex(), n = this.getPreviousExplicitRuleShortName();
		return {
			ruleName: this.shortRuleNameToFullName(e),
			idxInCallingRule: t,
			inRule: this.shortRuleNameToFullName(n)
		};
	}
	buildFullFollowKeyStack() {
		let e = this.RULE_STACK, t = this.RULE_OCCURRENCE_STACK;
		return V(e, (n, r) => r === 0 ? eS : {
			ruleName: this.shortRuleNameToFullName(n),
			idxInCallingRule: t[r],
			inRule: this.shortRuleNameToFullName(e[r - 1])
		});
	}
	flattenFollowSet() {
		return Hd(V(this.buildFullFollowKeyStack(), (e) => this.getFollowSetFromFollowKey(e)));
	}
	getFollowSetFromFollowKey(e) {
		if (e === eS) return [Cb];
		let t = e.ruleName + e.idxInCallingRule + Uv + e.inRule;
		return this.resyncFollows[t];
	}
	addToResyncTokens(e, t) {
		return this.tokenMatcher(e, Cb) || t.push(e), t;
	}
	reSyncTo(e) {
		let t = [], n = this.LA(1);
		for (; this.tokenMatcher(n, e) === !1;) n = this.SKIP_TOKEN(), this.addToResyncTokens(n, t);
		return kg(t);
	}
	attemptInRepetitionRecovery(e, t, n, r, i, a, o) {}
	getCurrentGrammarPath(e, t) {
		return {
			ruleStack: this.getHumanReadableRuleStack(),
			occurrenceStack: Dm(this.RULE_OCCURRENCE_STACK),
			lastTok: e,
			lastTokOccurrence: t
		};
	}
	getHumanReadableRuleStack() {
		return V(this.RULE_STACK, (e) => this.shortRuleNameToFullName(e));
	}
}, o(iS, "Recoverable"), iS);
function oS(e, t, n, r, i, a, o) {
	let s = this.getKeyForAutomaticLookahead(r, i), c = this.firstAfterRepMap[s];
	if (c === void 0) {
		let e = this.getCurrRuleFullName(), t = this.getGAstProductions()[e];
		c = new a(t, i).startWalking(), this.firstAfterRepMap[s] = c;
	}
	let l = c.token, u = c.occurrence, d = c.isEndOfRule;
	this.RULE_STACK.length === 1 && d && l === void 0 && (l = Cb, u = 1), l !== void 0 && u !== void 0 && this.shouldInRepetitionRecoveryBeTried(l, u, o) && this.tryInRepetitionRecovery(e, t, n, l);
}
o(oS, "attemptInRepetitionRecovery");
var sS = 4, cS = 8, lS = 1 << cS, uS = 2 << cS, dS = 3 << cS, fS = 4 << cS, pS = 5 << cS, mS = 6 << cS;
function hS(e, t, n) {
	return n | t | e;
}
o(hS, "getKeyForAutomaticLookahead");
var gS, _S = (gS = class {
	constructor(e) {
		this.maxLookahead = e?.maxLookahead ?? lC.maxLookahead;
	}
	validate(e) {
		let t = this.validateNoLeftRecursion(e.rules);
		if (U(t)) {
			let n = this.validateEmptyOrAlternatives(e.rules), r = this.validateAmbiguousAlternationAlternatives(e.rules, this.maxLookahead), i = this.validateSomeNonEmptyLookaheadPath(e.rules, this.maxLookahead);
			return [
				...t,
				...n,
				...r,
				...i
			];
		}
		return t;
	}
	validateNoLeftRecursion(e) {
		return e_(e, (e) => Cx(e, e, Ob));
	}
	validateEmptyOrAlternatives(e) {
		return e_(e, (e) => Dx(e, Ob));
	}
	validateAmbiguousAlternationAlternatives(e, t) {
		return e_(e, (e) => Ox(e, t, Ob));
	}
	validateSomeNonEmptyLookaheadPath(e, t) {
		return Mx(e, t, Ob);
	}
	buildLookaheadForAlternation(e) {
		return Zb(e.prodOccurrence, e.rule, e.maxLookahead, e.hasPredicates, e.dynamicTokensEnabled, $b);
	}
	buildLookaheadForOptional(e) {
		return Qb(e.prodOccurrence, e.rule, e.maxLookahead, e.dynamicTokensEnabled, Yb(e.prodType), ex);
	}
}, o(gS, "LLkLookaheadStrategy"), gS), vS, yS = (vS = class {
	initLooksAhead(e) {
		this.dynamicTokensEnabled = H(e, "dynamicTokensEnabled") ? e.dynamicTokensEnabled : lC.dynamicTokensEnabled, this.maxLookahead = H(e, "maxLookahead") ? e.maxLookahead : lC.maxLookahead, this.lookaheadStrategy = H(e, "lookaheadStrategy") ? e.lookaheadStrategy : new _S({ maxLookahead: this.maxLookahead }), this.lookAheadFuncsCache = /* @__PURE__ */ new Map();
	}
	preComputeLookaheadFunctions(e) {
		B(e, (e) => {
			this.TRACE_INIT(`${e.name} Rule Lookahead`, () => {
				let { alternation: t, repetition: n, option: r, repetitionMandatory: i, repetitionMandatoryWithSeparator: a, repetitionWithSeparator: o } = SS(e);
				B(t, (t) => {
					let n = t.idx === 0 ? "" : t.idx;
					this.TRACE_INIT(`${Fv(t)}${n}`, () => {
						let n = this.lookaheadStrategy.buildLookaheadForAlternation({
							prodOccurrence: t.idx,
							rule: e,
							maxLookahead: t.maxLookahead || this.maxLookahead,
							hasPredicates: t.hasPredicates,
							dynamicTokensEnabled: this.dynamicTokensEnabled
						}), r = hS(this.fullRuleNameToShort[e.name], lS, t.idx);
						this.setLaFuncCache(r, n);
					});
				}), B(n, (t) => {
					this.computeLookaheadFunc(e, t.idx, dS, "Repetition", t.maxLookahead, Fv(t));
				}), B(r, (t) => {
					this.computeLookaheadFunc(e, t.idx, uS, "Option", t.maxLookahead, Fv(t));
				}), B(i, (t) => {
					this.computeLookaheadFunc(e, t.idx, fS, "RepetitionMandatory", t.maxLookahead, Fv(t));
				}), B(a, (t) => {
					this.computeLookaheadFunc(e, t.idx, mS, "RepetitionMandatoryWithSeparator", t.maxLookahead, Fv(t));
				}), B(o, (t) => {
					this.computeLookaheadFunc(e, t.idx, pS, "RepetitionWithSeparator", t.maxLookahead, Fv(t));
				});
			});
		});
	}
	computeLookaheadFunc(e, t, n, r, i, a) {
		this.TRACE_INIT(`${a}${t === 0 ? "" : t}`, () => {
			let a = this.lookaheadStrategy.buildLookaheadForOptional({
				prodOccurrence: t,
				rule: e,
				maxLookahead: i || this.maxLookahead,
				dynamicTokensEnabled: this.dynamicTokensEnabled,
				prodType: r
			}), o = hS(this.fullRuleNameToShort[e.name], n, t);
			this.setLaFuncCache(o, a);
		});
	}
	getKeyForAutomaticLookahead(e, t) {
		return hS(this.getLastExplicitRuleShortName(), e, t);
	}
	getLaFuncFromCache(e) {
		return this.lookAheadFuncsCache.get(e);
	}
	/* istanbul ignore next */ setLaFuncCache(e, t) {
		this.lookAheadFuncsCache.set(e, t);
	}
}, o(vS, "LooksAhead"), vS), bS, xS = new (bS = class extends jv {
	constructor() {
		super(...arguments), this.dslMethods = {
			option: [],
			alternation: [],
			repetition: [],
			repetitionWithSeparator: [],
			repetitionMandatory: [],
			repetitionMandatoryWithSeparator: []
		};
	}
	reset() {
		this.dslMethods = {
			option: [],
			alternation: [],
			repetition: [],
			repetitionWithSeparator: [],
			repetitionMandatory: [],
			repetitionMandatoryWithSeparator: []
		};
	}
	visitOption(e) {
		this.dslMethods.option.push(e);
	}
	visitRepetitionWithSeparator(e) {
		this.dslMethods.repetitionWithSeparator.push(e);
	}
	visitRepetitionMandatory(e) {
		this.dslMethods.repetitionMandatory.push(e);
	}
	visitRepetitionMandatoryWithSeparator(e) {
		this.dslMethods.repetitionMandatoryWithSeparator.push(e);
	}
	visitRepetition(e) {
		this.dslMethods.repetition.push(e);
	}
	visitAlternation(e) {
		this.dslMethods.alternation.push(e);
	}
}, o(bS, "DslMethodsCollectorVisitor"), bS)();
function SS(e) {
	xS.reset(), e.accept(xS);
	let t = xS.dslMethods;
	return xS.reset(), t;
}
o(SS, "collectMethods");
function CS(e, t) {
	isNaN(e.startOffset) === !0 ? (e.startOffset = t.startOffset, e.endOffset = t.endOffset) : e.endOffset < t.endOffset && (e.endOffset = t.endOffset);
}
o(CS, "setNodeLocationOnlyOffset");
function wS(e, t) {
	isNaN(e.startOffset) === !0 ? (e.startOffset = t.startOffset, e.startColumn = t.startColumn, e.startLine = t.startLine, e.endOffset = t.endOffset, e.endColumn = t.endColumn, e.endLine = t.endLine) : e.endOffset < t.endOffset && (e.endOffset = t.endOffset, e.endColumn = t.endColumn, e.endLine = t.endLine);
}
o(wS, "setNodeLocationFull");
function TS(e, t, n) {
	e.children[n] === void 0 ? e.children[n] = [t] : e.children[n].push(t);
}
o(TS, "addTerminalToCst");
function ES(e, t, n) {
	e.children[t] === void 0 ? e.children[t] = [n] : e.children[t].push(n);
}
o(ES, "addNoneTerminalToCst");
var DS = "name";
function OS(e, t) {
	Object.defineProperty(e, DS, {
		enumerable: !1,
		configurable: !0,
		writable: !1,
		value: t
	});
}
o(OS, "defineNameProp");
function kS(e, t) {
	let n = ou(e), r = n.length;
	for (let i = 0; i < r; i++) {
		let r = e[n[i]], a = r.length;
		for (let e = 0; e < a; e++) {
			let n = r[e];
			n.tokenTypeIdx === void 0 && this[n.name](n.children, t);
		}
	}
}
o(kS, "defaultVisit");
function AS(e, t) {
	let n = /* @__PURE__ */ o(function() {}, "derivedConstructor");
	return OS(n, e + "BaseSemantics"), n.prototype = {
		visit: /* @__PURE__ */ o(function(e, t) {
			if (L(e) && (e = e[0]), !A_(e)) return this[e.name](e.children, t);
		}, "visit"),
		validateVisitor: /* @__PURE__ */ o(function() {
			let e = NS(this, t);
			if (!U(e)) {
				let t = V(e, (e) => e.msg);
				throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${t.join("\n\n").replace(/\n/g, "\n	")}`);
			}
		}, "validateVisitor")
	}, n.prototype.constructor = n, n._RULE_NAMES = t, n;
}
o(AS, "createBaseSemanticVisitorConstructor");
function jS(e, t, n) {
	let r = /* @__PURE__ */ o(function() {}, "derivedConstructor");
	OS(r, e + "BaseSemanticsWithDefaults");
	let i = Object.create(n.prototype);
	return B(t, (e) => {
		i[e] = kS;
	}), r.prototype = i, r.prototype.constructor = r, r;
}
o(jS, "createBaseVisitorConstructorWithDefaults");
var MS;
(function(e) {
	e[e.REDUNDANT_METHOD = 0] = "REDUNDANT_METHOD", e[e.MISSING_METHOD = 1] = "MISSING_METHOD";
})(MS ||= {});
function NS(e, t) {
	return PS(e, t);
}
o(NS, "validateVisitor");
function PS(e, t) {
	return km(V(Hg(t, (t) => Os(e[t]) === !1), (t) => ({
		msg: `Missing visitor method: <${t}> on ${e.constructor.name} CST Visitor.`,
		type: MS.MISSING_METHOD,
		methodName: t
	})));
}
o(PS, "validateMissingCstMethods");
var FS, IS = (FS = class {
	initTreeBuilder(e) {
		if (this.CST_STACK = [], this.outputCst = e.outputCst, this.nodeLocationTracking = H(e, "nodeLocationTracking") ? e.nodeLocationTracking : lC.nodeLocationTracking, !this.outputCst) this.cstInvocationStateUpdate = tc, this.cstFinallyStateUpdate = tc, this.cstPostTerminal = tc, this.cstPostNonTerminal = tc, this.cstPostRule = tc;
		else if (/full/i.test(this.nodeLocationTracking)) this.recoveryEnabled ? (this.setNodeLocationFromToken = wS, this.setNodeLocationFromNode = wS, this.cstPostRule = tc, this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery) : (this.setNodeLocationFromToken = tc, this.setNodeLocationFromNode = tc, this.cstPostRule = this.cstPostRuleFull, this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular);
		else if (/onlyOffset/i.test(this.nodeLocationTracking)) this.recoveryEnabled ? (this.setNodeLocationFromToken = CS, this.setNodeLocationFromNode = CS, this.cstPostRule = tc, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery) : (this.setNodeLocationFromToken = tc, this.setNodeLocationFromNode = tc, this.cstPostRule = this.cstPostRuleOnlyOffset, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular);
		else if (/none/i.test(this.nodeLocationTracking)) this.setNodeLocationFromToken = tc, this.setNodeLocationFromNode = tc, this.cstPostRule = tc, this.setInitialNodeLocation = tc;
		else throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`);
	}
	setInitialNodeLocationOnlyOffsetRecovery(e) {
		e.location = {
			startOffset: NaN,
			endOffset: NaN
		};
	}
	setInitialNodeLocationOnlyOffsetRegular(e) {
		e.location = {
			startOffset: this.LA(1).startOffset,
			endOffset: NaN
		};
	}
	setInitialNodeLocationFullRecovery(e) {
		e.location = {
			startOffset: NaN,
			startLine: NaN,
			startColumn: NaN,
			endOffset: NaN,
			endLine: NaN,
			endColumn: NaN
		};
	}
	setInitialNodeLocationFullRegular(e) {
		let t = this.LA(1);
		e.location = {
			startOffset: t.startOffset,
			startLine: t.startLine,
			startColumn: t.startColumn,
			endOffset: NaN,
			endLine: NaN,
			endColumn: NaN
		};
	}
	cstInvocationStateUpdate(e) {
		let t = {
			name: e,
			children: /* @__PURE__ */ Object.create(null)
		};
		this.setInitialNodeLocation(t), this.CST_STACK.push(t);
	}
	cstFinallyStateUpdate() {
		this.CST_STACK.pop();
	}
	cstPostRuleFull(e) {
		let t = this.LA(0), n = e.location;
		n.startOffset <= t.startOffset ? (n.endOffset = t.endOffset, n.endLine = t.endLine, n.endColumn = t.endColumn) : (n.startOffset = NaN, n.startLine = NaN, n.startColumn = NaN);
	}
	cstPostRuleOnlyOffset(e) {
		let t = this.LA(0), n = e.location;
		n.startOffset <= t.startOffset ? n.endOffset = t.endOffset : n.startOffset = NaN;
	}
	cstPostTerminal(e, t) {
		let n = this.CST_STACK[this.CST_STACK.length - 1];
		TS(n, t, e), this.setNodeLocationFromToken(n.location, t);
	}
	cstPostNonTerminal(e, t) {
		let n = this.CST_STACK[this.CST_STACK.length - 1];
		ES(n, t, e), this.setNodeLocationFromNode(n.location, e.location);
	}
	getBaseCstVisitorConstructor() {
		if (A_(this.baseCstVisitorConstructor)) {
			let e = AS(this.className, ou(this.gastProductionsCache));
			return this.baseCstVisitorConstructor = e, e;
		}
		return this.baseCstVisitorConstructor;
	}
	getBaseCstVisitorConstructorWithDefaults() {
		if (A_(this.baseCstVisitorWithDefaultsConstructor)) {
			let e = jS(this.className, ou(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
			return this.baseCstVisitorWithDefaultsConstructor = e, e;
		}
		return this.baseCstVisitorWithDefaultsConstructor;
	}
	getLastExplicitRuleShortName() {
		let e = this.RULE_STACK;
		return e[e.length - 1];
	}
	getPreviousExplicitRuleShortName() {
		let e = this.RULE_STACK;
		return e[e.length - 2];
	}
	getLastExplicitRuleOccurrenceIndex() {
		let e = this.RULE_OCCURRENCE_STACK;
		return e[e.length - 1];
	}
}, o(FS, "TreeBuilder"), FS), LS, RS = (LS = class {
	initLexerAdapter() {
		this.tokVector = [], this.tokVectorLength = 0, this.currIdx = -1;
	}
	set input(e) {
		if (this.selfAnalysisDone !== !0) throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");
		this.reset(), this.tokVector = e, this.tokVectorLength = e.length;
	}
	get input() {
		return this.tokVector;
	}
	SKIP_TOKEN() {
		return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : cC;
	}
	LA(e) {
		let t = this.currIdx + e;
		return t < 0 || this.tokVectorLength <= t ? cC : this.tokVector[t];
	}
	consumeToken() {
		this.currIdx++;
	}
	exportLexerState() {
		return this.currIdx;
	}
	importLexerState(e) {
		this.currIdx = e;
	}
	resetLexerState() {
		this.currIdx = -1;
	}
	moveToTerminatedState() {
		this.currIdx = this.tokVector.length - 1;
	}
	getLexerPosition() {
		return this.exportLexerState();
	}
}, o(LS, "LexerAdapter"), LS), zS, BS = (zS = class {
	ACTION(e) {
		return e.call(this);
	}
	consume(e, t, n) {
		return this.consumeInternal(t, e, n);
	}
	subrule(e, t, n) {
		return this.subruleInternal(t, e, n);
	}
	option(e, t) {
		return this.optionInternal(t, e);
	}
	or(e, t) {
		return this.orInternal(t, e);
	}
	many(e, t) {
		return this.manyInternal(e, t);
	}
	atLeastOne(e, t) {
		return this.atLeastOneInternal(e, t);
	}
	CONSUME(e, t) {
		return this.consumeInternal(e, 0, t);
	}
	CONSUME1(e, t) {
		return this.consumeInternal(e, 1, t);
	}
	CONSUME2(e, t) {
		return this.consumeInternal(e, 2, t);
	}
	CONSUME3(e, t) {
		return this.consumeInternal(e, 3, t);
	}
	CONSUME4(e, t) {
		return this.consumeInternal(e, 4, t);
	}
	CONSUME5(e, t) {
		return this.consumeInternal(e, 5, t);
	}
	CONSUME6(e, t) {
		return this.consumeInternal(e, 6, t);
	}
	CONSUME7(e, t) {
		return this.consumeInternal(e, 7, t);
	}
	CONSUME8(e, t) {
		return this.consumeInternal(e, 8, t);
	}
	CONSUME9(e, t) {
		return this.consumeInternal(e, 9, t);
	}
	SUBRULE(e, t) {
		return this.subruleInternal(e, 0, t);
	}
	SUBRULE1(e, t) {
		return this.subruleInternal(e, 1, t);
	}
	SUBRULE2(e, t) {
		return this.subruleInternal(e, 2, t);
	}
	SUBRULE3(e, t) {
		return this.subruleInternal(e, 3, t);
	}
	SUBRULE4(e, t) {
		return this.subruleInternal(e, 4, t);
	}
	SUBRULE5(e, t) {
		return this.subruleInternal(e, 5, t);
	}
	SUBRULE6(e, t) {
		return this.subruleInternal(e, 6, t);
	}
	SUBRULE7(e, t) {
		return this.subruleInternal(e, 7, t);
	}
	SUBRULE8(e, t) {
		return this.subruleInternal(e, 8, t);
	}
	SUBRULE9(e, t) {
		return this.subruleInternal(e, 9, t);
	}
	OPTION(e) {
		return this.optionInternal(e, 0);
	}
	OPTION1(e) {
		return this.optionInternal(e, 1);
	}
	OPTION2(e) {
		return this.optionInternal(e, 2);
	}
	OPTION3(e) {
		return this.optionInternal(e, 3);
	}
	OPTION4(e) {
		return this.optionInternal(e, 4);
	}
	OPTION5(e) {
		return this.optionInternal(e, 5);
	}
	OPTION6(e) {
		return this.optionInternal(e, 6);
	}
	OPTION7(e) {
		return this.optionInternal(e, 7);
	}
	OPTION8(e) {
		return this.optionInternal(e, 8);
	}
	OPTION9(e) {
		return this.optionInternal(e, 9);
	}
	OR(e) {
		return this.orInternal(e, 0);
	}
	OR1(e) {
		return this.orInternal(e, 1);
	}
	OR2(e) {
		return this.orInternal(e, 2);
	}
	OR3(e) {
		return this.orInternal(e, 3);
	}
	OR4(e) {
		return this.orInternal(e, 4);
	}
	OR5(e) {
		return this.orInternal(e, 5);
	}
	OR6(e) {
		return this.orInternal(e, 6);
	}
	OR7(e) {
		return this.orInternal(e, 7);
	}
	OR8(e) {
		return this.orInternal(e, 8);
	}
	OR9(e) {
		return this.orInternal(e, 9);
	}
	MANY(e) {
		this.manyInternal(0, e);
	}
	MANY1(e) {
		this.manyInternal(1, e);
	}
	MANY2(e) {
		this.manyInternal(2, e);
	}
	MANY3(e) {
		this.manyInternal(3, e);
	}
	MANY4(e) {
		this.manyInternal(4, e);
	}
	MANY5(e) {
		this.manyInternal(5, e);
	}
	MANY6(e) {
		this.manyInternal(6, e);
	}
	MANY7(e) {
		this.manyInternal(7, e);
	}
	MANY8(e) {
		this.manyInternal(8, e);
	}
	MANY9(e) {
		this.manyInternal(9, e);
	}
	MANY_SEP(e) {
		this.manySepFirstInternal(0, e);
	}
	MANY_SEP1(e) {
		this.manySepFirstInternal(1, e);
	}
	MANY_SEP2(e) {
		this.manySepFirstInternal(2, e);
	}
	MANY_SEP3(e) {
		this.manySepFirstInternal(3, e);
	}
	MANY_SEP4(e) {
		this.manySepFirstInternal(4, e);
	}
	MANY_SEP5(e) {
		this.manySepFirstInternal(5, e);
	}
	MANY_SEP6(e) {
		this.manySepFirstInternal(6, e);
	}
	MANY_SEP7(e) {
		this.manySepFirstInternal(7, e);
	}
	MANY_SEP8(e) {
		this.manySepFirstInternal(8, e);
	}
	MANY_SEP9(e) {
		this.manySepFirstInternal(9, e);
	}
	AT_LEAST_ONE(e) {
		this.atLeastOneInternal(0, e);
	}
	AT_LEAST_ONE1(e) {
		return this.atLeastOneInternal(1, e);
	}
	AT_LEAST_ONE2(e) {
		this.atLeastOneInternal(2, e);
	}
	AT_LEAST_ONE3(e) {
		this.atLeastOneInternal(3, e);
	}
	AT_LEAST_ONE4(e) {
		this.atLeastOneInternal(4, e);
	}
	AT_LEAST_ONE5(e) {
		this.atLeastOneInternal(5, e);
	}
	AT_LEAST_ONE6(e) {
		this.atLeastOneInternal(6, e);
	}
	AT_LEAST_ONE7(e) {
		this.atLeastOneInternal(7, e);
	}
	AT_LEAST_ONE8(e) {
		this.atLeastOneInternal(8, e);
	}
	AT_LEAST_ONE9(e) {
		this.atLeastOneInternal(9, e);
	}
	AT_LEAST_ONE_SEP(e) {
		this.atLeastOneSepFirstInternal(0, e);
	}
	AT_LEAST_ONE_SEP1(e) {
		this.atLeastOneSepFirstInternal(1, e);
	}
	AT_LEAST_ONE_SEP2(e) {
		this.atLeastOneSepFirstInternal(2, e);
	}
	AT_LEAST_ONE_SEP3(e) {
		this.atLeastOneSepFirstInternal(3, e);
	}
	AT_LEAST_ONE_SEP4(e) {
		this.atLeastOneSepFirstInternal(4, e);
	}
	AT_LEAST_ONE_SEP5(e) {
		this.atLeastOneSepFirstInternal(5, e);
	}
	AT_LEAST_ONE_SEP6(e) {
		this.atLeastOneSepFirstInternal(6, e);
	}
	AT_LEAST_ONE_SEP7(e) {
		this.atLeastOneSepFirstInternal(7, e);
	}
	AT_LEAST_ONE_SEP8(e) {
		this.atLeastOneSepFirstInternal(8, e);
	}
	AT_LEAST_ONE_SEP9(e) {
		this.atLeastOneSepFirstInternal(9, e);
	}
	RULE(e, t, n = uC) {
		if (g_(this.definedRulesNames, e)) {
			let t = {
				message: Ob.buildDuplicateRuleNameError({
					topLevelRule: e,
					grammarName: this.className
				}),
				type: dC.DUPLICATE_RULE_NAME,
				ruleName: e
			};
			this.definitionErrors.push(t);
		}
		this.definedRulesNames.push(e);
		let r = this.defineRule(e, t, n);
		return this[e] = r, r;
	}
	OVERRIDE_RULE(e, t, n = uC) {
		let r = Sx(e, this.definedRulesNames, this.className);
		this.definitionErrors = this.definitionErrors.concat(r);
		let i = this.defineRule(e, t, n);
		return this[e] = i, i;
	}
	BACKTRACK(e, t) {
		return function() {
			this.isBackTrackingStack.push(1);
			let n = this.saveRecogState();
			try {
				return e.apply(this, t), !0;
			} catch (e) {
				if (Ux(e)) return !1;
				throw e;
			} finally {
				this.reloadRecogState(n), this.isBackTrackingStack.pop();
			}
		};
	}
	getGAstProductions() {
		return this.gastProductionsCache;
	}
	getSerializedGastProductions() {
		return Ov(p_(this.gastProductionsCache));
	}
}, o(zS, "RecognizerApi"), zS), VS, HS = (VS = class {
	initRecognizerEngine(e, t) {
		if (this.className = this.constructor.name, this.shortRuleNameToFull = {}, this.fullRuleNameToShort = {}, this.ruleShortNameIdx = 256, this.tokenMatcher = Ky, this.subruleIdx = 0, this.definedRulesNames = [], this.tokensMap = {}, this.isBackTrackingStack = [], this.RULE_STACK = [], this.RULE_OCCURRENCE_STACK = [], this.gastProductionsCache = {}, H(t, "serializedGrammar")) throw Error("The Parser's configuration can no longer contain a <serializedGrammar> property.\n	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0\n	For Further details.");
		if (L(e)) {
			if (U(e)) throw Error("A Token Vocabulary cannot be empty.\n	Note that the first argument for the parser constructor\n	is no longer a Token vector (since v4.0).");
			if (typeof e[0].startOffset == "number") throw Error("The Parser constructor no longer accepts a token vector as the first argument.\n	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0\n	For Further details.");
		}
		if (L(e)) this.tokensMap = U_(e, (e, t) => (e[t.name] = t, e), {});
		else if (H(e, "modes") && Rg(Hd(p_(e.modes)), ab)) {
			let t = tv(Hd(p_(e.modes)));
			this.tokensMap = U_(t, (e, t) => (e[t.name] = t, e), {});
		} else if (ss(e)) this.tokensMap = Dm(e);
		else throw Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
		this.tokensMap.EOF = Cb;
		let n = Rg(H(e, "modes") ? Hd(p_(e.modes)) : p_(e), (e) => U(e.categoryMatches));
		this.tokenMatcher = n ? Ky : Gy, Yy(p_(this.tokensMap));
	}
	defineRule(e, t, n) {
		if (this.selfAnalysisDone) throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
		let r = H(n, "resyncEnabled") ? n.resyncEnabled : uC.resyncEnabled, i = H(n, "recoveryValueFunc") ? n.recoveryValueFunc : uC.recoveryValueFunc, a = this.ruleShortNameIdx << sS + cS;
		this.ruleShortNameIdx++, this.shortRuleNameToFull[a] = e, this.fullRuleNameToShort[e] = a;
		let s;
		return s = this.outputCst === !0 ? /* @__PURE__ */ o(function(...n) {
			try {
				this.ruleInvocationStateUpdate(a, e, this.subruleIdx), t.apply(this, n);
				let r = this.CST_STACK[this.CST_STACK.length - 1];
				return this.cstPostRule(r), r;
			} catch (e) {
				return this.invokeRuleCatch(e, r, i);
			} finally {
				this.ruleFinallyStateUpdate();
			}
		}, "invokeRuleWithTry") : /* @__PURE__ */ o(function(...n) {
			try {
				return this.ruleInvocationStateUpdate(a, e, this.subruleIdx), t.apply(this, n);
			} catch (e) {
				return this.invokeRuleCatch(e, r, i);
			} finally {
				this.ruleFinallyStateUpdate();
			}
		}, "invokeRuleWithTryCst"), Object.assign(s, {
			ruleName: e,
			originalGrammarAction: t
		});
	}
	invokeRuleCatch(e, t, n) {
		let r = this.RULE_STACK.length === 1, i = t && !this.isBackTracking() && this.recoveryEnabled;
		if (Ux(e)) {
			let t = e;
			if (i) {
				let r = this.findReSyncTokenType();
				if (this.isInCurrentRuleReSyncSet(r)) {
					if (t.resyncedTokens = this.reSyncTo(r), this.outputCst) {
						let e = this.CST_STACK[this.CST_STACK.length - 1];
						return e.recoveredNode = !0, e;
					}
					return n(e);
				}
				if (this.outputCst) {
					let e = this.CST_STACK[this.CST_STACK.length - 1];
					e.recoveredNode = !0, t.partialCstResult = e;
				}
				throw t;
			}
			if (r) return this.moveToTerminatedState(), n(e);
			throw t;
		}
		throw e;
	}
	optionInternal(e, t) {
		let n = this.getKeyForAutomaticLookahead(uS, t);
		return this.optionInternalLogic(e, t, n);
	}
	optionInternalLogic(e, t, n) {
		let r = this.getLaFuncFromCache(n), i;
		if (typeof e != "function") {
			i = e.DEF;
			let t = e.GATE;
			if (t !== void 0) {
				let e = r;
				r = /* @__PURE__ */ o(() => t.call(this) && e.call(this), "lookAheadFunc");
			}
		} else i = e;
		if (r.call(this) === !0) return i.call(this);
	}
	atLeastOneInternal(e, t) {
		let n = this.getKeyForAutomaticLookahead(fS, e);
		return this.atLeastOneInternalLogic(e, t, n);
	}
	atLeastOneInternalLogic(e, t, n) {
		let r = this.getLaFuncFromCache(n), i;
		if (typeof t != "function") {
			i = t.DEF;
			let e = t.GATE;
			if (e !== void 0) {
				let t = r;
				r = /* @__PURE__ */ o(() => e.call(this) && t.call(this), "lookAheadFunc");
			}
		} else i = t;
		if (r.call(this) === !0) {
			let e = this.doSingleRepetition(i);
			for (; r.call(this) === !0 && e === !0;) e = this.doSingleRepetition(i);
		} else throw this.raiseEarlyExitException(e, q.REPETITION_MANDATORY, t.ERR_MSG);
		this.attemptInRepetitionRecovery(this.atLeastOneInternal, [e, t], r, fS, e, Ub);
	}
	atLeastOneSepFirstInternal(e, t) {
		let n = this.getKeyForAutomaticLookahead(mS, e);
		this.atLeastOneSepFirstInternalLogic(e, t, n);
	}
	atLeastOneSepFirstInternalLogic(e, t, n) {
		let r = t.DEF, i = t.SEP;
		if (this.getLaFuncFromCache(n).call(this) === !0) {
			r.call(this);
			let t = /* @__PURE__ */ o(() => this.tokenMatcher(this.LA(1), i), "separatorLookAheadFunc");
			for (; this.tokenMatcher(this.LA(1), i) === !0;) this.CONSUME(i), r.call(this);
			this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
				e,
				i,
				t,
				r,
				Gb
			], t, mS, e, Gb);
		} else throw this.raiseEarlyExitException(e, q.REPETITION_MANDATORY_WITH_SEPARATOR, t.ERR_MSG);
	}
	manyInternal(e, t) {
		let n = this.getKeyForAutomaticLookahead(dS, e);
		return this.manyInternalLogic(e, t, n);
	}
	manyInternalLogic(e, t, n) {
		let r = this.getLaFuncFromCache(n), i;
		if (typeof t != "function") {
			i = t.DEF;
			let e = t.GATE;
			if (e !== void 0) {
				let t = r;
				r = /* @__PURE__ */ o(() => e.call(this) && t.call(this), "lookaheadFunction");
			}
		} else i = t;
		let a = !0;
		for (; r.call(this) === !0 && a === !0;) a = this.doSingleRepetition(i);
		this.attemptInRepetitionRecovery(this.manyInternal, [e, t], r, dS, e, zb, a);
	}
	manySepFirstInternal(e, t) {
		let n = this.getKeyForAutomaticLookahead(pS, e);
		this.manySepFirstInternalLogic(e, t, n);
	}
	manySepFirstInternalLogic(e, t, n) {
		let r = t.DEF, i = t.SEP;
		if (this.getLaFuncFromCache(n).call(this) === !0) {
			r.call(this);
			let t = /* @__PURE__ */ o(() => this.tokenMatcher(this.LA(1), i), "separatorLookAheadFunc");
			for (; this.tokenMatcher(this.LA(1), i) === !0;) this.CONSUME(i), r.call(this);
			this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
				e,
				i,
				t,
				r,
				Vb
			], t, pS, e, Vb);
		}
	}
	repetitionSepSecondInternal(e, t, n, r, i) {
		for (; n();) this.CONSUME(t), r.call(this);
		this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
			e,
			t,
			n,
			r,
			i
		], n, mS, e, i);
	}
	doSingleRepetition(e) {
		let t = this.getLexerPosition();
		return e.call(this), this.getLexerPosition() > t;
	}
	orInternal(e, t) {
		let n = this.getKeyForAutomaticLookahead(lS, t), r = L(e) ? e : e.DEF, i = this.getLaFuncFromCache(n).call(this, r);
		if (i !== void 0) return r[i].ALT.call(this);
		this.raiseNoAltException(t, e.ERR_MSG);
	}
	ruleFinallyStateUpdate() {
		if (this.RULE_STACK.pop(), this.RULE_OCCURRENCE_STACK.pop(), this.cstFinallyStateUpdate(), this.RULE_STACK.length === 0 && this.isAtEndOfInput() === !1) {
			let e = this.LA(1), t = this.errorMessageProvider.buildNotAllInputParsedMessage({
				firstRedundant: e,
				ruleName: this.getCurrRuleFullName()
			});
			this.SAVE_ERROR(new Zx(t, e));
		}
	}
	subruleInternal(e, t, n) {
		let r;
		try {
			let i = n === void 0 ? void 0 : n.ARGS;
			return this.subruleIdx = t, r = e.apply(this, i), this.cstPostNonTerminal(r, n !== void 0 && n.LABEL !== void 0 ? n.LABEL : e.ruleName), r;
		} catch (t) {
			throw this.subruleInternalError(t, n, e.ruleName);
		}
	}
	subruleInternalError(e, t, n) {
		throw Ux(e) && e.partialCstResult !== void 0 && (this.cstPostNonTerminal(e.partialCstResult, t !== void 0 && t.LABEL !== void 0 ? t.LABEL : n), delete e.partialCstResult), e;
	}
	consumeInternal(e, t, n) {
		let r;
		try {
			let t = this.LA(1);
			this.tokenMatcher(t, e) === !0 ? (this.consumeToken(), r = t) : this.consumeInternalError(e, t, n);
		} catch (n) {
			r = this.consumeInternalRecovery(e, t, n);
		}
		return this.cstPostTerminal(n !== void 0 && n.LABEL !== void 0 ? n.LABEL : e.name, r), r;
	}
	consumeInternalError(e, t, n) {
		let r, i = this.LA(0);
		throw r = n !== void 0 && n.ERR_MSG ? n.ERR_MSG : this.errorMessageProvider.buildMismatchTokenMessage({
			expected: e,
			actual: t,
			previous: i,
			ruleName: this.getCurrRuleFullName()
		}), this.SAVE_ERROR(new qx(r, t, i));
	}
	consumeInternalRecovery(e, t, n) {
		if (this.recoveryEnabled && n.name === "MismatchedTokenException" && !this.isBackTracking()) {
			let r = this.getFollowsForInRuleRecovery(e, t);
			try {
				return this.tryInRuleRecovery(e, r);
			} catch (e) {
				throw e.name === tS ? n : e;
			}
		}
		throw n;
	}
	saveRecogState() {
		let e = this.errors, t = Dm(this.RULE_STACK);
		return {
			errors: e,
			lexerState: this.exportLexerState(),
			RULE_STACK: t,
			CST_STACK: this.CST_STACK
		};
	}
	reloadRecogState(e) {
		this.errors = e.errors, this.importLexerState(e.lexerState), this.RULE_STACK = e.RULE_STACK;
	}
	ruleInvocationStateUpdate(e, t, n) {
		this.RULE_OCCURRENCE_STACK.push(n), this.RULE_STACK.push(e), this.cstInvocationStateUpdate(t);
	}
	isBackTracking() {
		return this.isBackTrackingStack.length !== 0;
	}
	getCurrRuleFullName() {
		let e = this.getLastExplicitRuleShortName();
		return this.shortRuleNameToFull[e];
	}
	shortRuleNameToFullName(e) {
		return this.shortRuleNameToFull[e];
	}
	isAtEndOfInput() {
		return this.tokenMatcher(this.LA(1), Cb);
	}
	reset() {
		this.resetLexerState(), this.subruleIdx = 0, this.isBackTrackingStack = [], this.errors = [], this.RULE_STACK = [], this.CST_STACK = [], this.RULE_OCCURRENCE_STACK = [];
	}
}, o(VS, "RecognizerEngine"), VS), US, WS = (US = class {
	initErrorHandler(e) {
		this._errors = [], this.errorMessageProvider = H(e, "errorMessageProvider") ? e.errorMessageProvider : lC.errorMessageProvider;
	}
	SAVE_ERROR(e) {
		if (Ux(e)) return e.context = {
			ruleStack: this.getHumanReadableRuleStack(),
			ruleOccurrenceStack: Dm(this.RULE_OCCURRENCE_STACK)
		}, this._errors.push(e), e;
		throw Error("Trying to save an Error which is not a RecognitionException");
	}
	get errors() {
		return Dm(this._errors);
	}
	set errors(e) {
		this._errors = e;
	}
	raiseEarlyExitException(e, t, n) {
		let r = this.getCurrRuleFullName(), i = this.getGAstProductions()[r], a = ux(e, i, t, this.maxLookahead)[0], o = [];
		for (let e = 1; e <= this.maxLookahead; e++) o.push(this.LA(e));
		let s = this.errorMessageProvider.buildEarlyExitMessage({
			expectedIterationPaths: a,
			actual: o,
			previous: this.LA(0),
			customUserDescription: n,
			ruleName: r
		});
		throw this.SAVE_ERROR(new $x(s, this.LA(1), this.LA(0)));
	}
	raiseNoAltException(e, t) {
		let n = this.getCurrRuleFullName(), r = this.getGAstProductions()[n], i = lx(e, r, this.maxLookahead), a = [];
		for (let e = 1; e <= this.maxLookahead; e++) a.push(this.LA(e));
		let o = this.LA(0), s = this.errorMessageProvider.buildNoViableAltMessage({
			expectedPathsPerAlt: i,
			actual: a,
			previous: o,
			customUserDescription: t,
			ruleName: this.getCurrRuleFullName()
		});
		throw this.SAVE_ERROR(new Yx(s, this.LA(1), o));
	}
}, o(US, "ErrorHandler"), US), GS, KS = (GS = class {
	initContentAssist() {}
	computeContentAssist(e, t) {
		let n = this.gastProductionsCache[e];
		if (A_(n)) throw Error(`Rule ->${e}<- does not exist in this grammar.`);
		return qb([n], t, this.tokenMatcher, this.maxLookahead);
	}
	getNextPossibleTokenTypes(e) {
		let t = Yg(e.ruleStack), n = this.getGAstProductions()[t];
		return new Fb(n, e).startWalking();
	}
}, o(GS, "ContentAssist"), GS), qS = { description: "This Object indicates the Parser is during Recording Phase" };
Object.freeze(qS);
var JS = !0, YS = 2 ** cS - 1, XS = xb({
	name: "RECORDING_PHASE_TOKEN",
	pattern: lb.NA
});
Yy([XS]);
var ZS = wb(XS, "This IToken indicates the Parser is in Recording Phase\n	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details", -1, -1, -1, -1, -1, -1);
Object.freeze(ZS);
var QS = {
	name: "This CSTNode indicates the Parser is in Recording Phase\n	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details",
	children: {}
}, $S, eC = ($S = class {
	initGastRecorder(e) {
		this.recordingProdStack = [], this.RECORDING_PHASE = !1;
	}
	enableRecording() {
		this.RECORDING_PHASE = !0, this.TRACE_INIT("Enable Recording", () => {
			for (let e = 0; e < 10; e++) {
				let t = e > 0 ? e : "";
				this[`CONSUME${t}`] = function(t, n) {
					return this.consumeInternalRecord(t, e, n);
				}, this[`SUBRULE${t}`] = function(t, n) {
					return this.subruleInternalRecord(t, e, n);
				}, this[`OPTION${t}`] = function(t) {
					return this.optionInternalRecord(t, e);
				}, this[`OR${t}`] = function(t) {
					return this.orInternalRecord(t, e);
				}, this[`MANY${t}`] = function(t) {
					this.manyInternalRecord(e, t);
				}, this[`MANY_SEP${t}`] = function(t) {
					this.manySepFirstInternalRecord(e, t);
				}, this[`AT_LEAST_ONE${t}`] = function(t) {
					this.atLeastOneInternalRecord(e, t);
				}, this[`AT_LEAST_ONE_SEP${t}`] = function(t) {
					this.atLeastOneSepFirstInternalRecord(e, t);
				};
			}
			this.consume = function(e, t, n) {
				return this.consumeInternalRecord(t, e, n);
			}, this.subrule = function(e, t, n) {
				return this.subruleInternalRecord(t, e, n);
			}, this.option = function(e, t) {
				return this.optionInternalRecord(t, e);
			}, this.or = function(e, t) {
				return this.orInternalRecord(t, e);
			}, this.many = function(e, t) {
				this.manyInternalRecord(e, t);
			}, this.atLeastOne = function(e, t) {
				this.atLeastOneInternalRecord(e, t);
			}, this.ACTION = this.ACTION_RECORD, this.BACKTRACK = this.BACKTRACK_RECORD, this.LA = this.LA_RECORD;
		});
	}
	disableRecording() {
		this.RECORDING_PHASE = !1, this.TRACE_INIT("Deleting Recording methods", () => {
			let e = this;
			for (let t = 0; t < 10; t++) {
				let n = t > 0 ? t : "";
				delete e[`CONSUME${n}`], delete e[`SUBRULE${n}`], delete e[`OPTION${n}`], delete e[`OR${n}`], delete e[`MANY${n}`], delete e[`MANY_SEP${n}`], delete e[`AT_LEAST_ONE${n}`], delete e[`AT_LEAST_ONE_SEP${n}`];
			}
			delete e.consume, delete e.subrule, delete e.option, delete e.or, delete e.many, delete e.atLeastOne, delete e.ACTION, delete e.BACKTRACK, delete e.LA;
		});
	}
	ACTION_RECORD(e) {}
	BACKTRACK_RECORD(e, t) {
		return () => !0;
	}
	LA_RECORD(e) {
		return cC;
	}
	topLevelRuleRecord(e, t) {
		try {
			let n = new pv({
				definition: [],
				name: e
			});
			return n.name = e, this.recordingProdStack.push(n), t.call(this), this.recordingProdStack.pop(), n;
		} catch (e) {
			if (e.KNOWN_RECORDER_ERROR !== !0) try {
				e.message += "\n	 This error was thrown during the \"grammar recording phase\" For more info see:\n	https://chevrotain.io/docs/guide/internals.html#grammar-recording";
			} catch {
				throw e;
			}
			throw e;
		}
	}
	optionInternalRecord(e, t) {
		return tC.call(this, _v, e, t);
	}
	atLeastOneInternalRecord(e, t) {
		tC.call(this, yv, t, e);
	}
	atLeastOneSepFirstInternalRecord(e, t) {
		tC.call(this, xv, t, e, JS);
	}
	manyInternalRecord(e, t) {
		tC.call(this, W, t, e);
	}
	manySepFirstInternalRecord(e, t) {
		tC.call(this, wv, t, e, JS);
	}
	orInternalRecord(e, t) {
		return nC.call(this, e, t);
	}
	subruleInternalRecord(e, t, n) {
		if (iC(t), !e || H(e, "ruleName") === !1) {
			let n = /* @__PURE__ */ Error(`<SUBRULE${rC(t)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
			throw n.KNOWN_RECORDER_ERROR = !0, n;
		}
		let r = Tg(this.recordingProdStack), i = e.ruleName, a = new dv({
			idx: t,
			nonTerminalName: i,
			label: n?.LABEL,
			referencedRule: void 0
		});
		return r.definition.push(a), this.outputCst ? QS : qS;
	}
	consumeInternalRecord(e, t, n) {
		if (iC(t), !tb(e)) {
			let n = /* @__PURE__ */ Error(`<CONSUME${rC(t)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
			throw n.KNOWN_RECORDER_ERROR = !0, n;
		}
		let r = Tg(this.recordingProdStack), i = new G({
			idx: t,
			terminalType: e,
			label: n?.LABEL
		});
		return r.definition.push(i), ZS;
	}
}, o($S, "GastRecorder"), $S);
function tC(e, t, n, r = !1) {
	iC(n);
	let i = Tg(this.recordingProdStack), a = Os(t) ? t : t.DEF, o = new e({
		definition: [],
		idx: n
	});
	return r && (o.separator = t.SEP), H(t, "MAX_LOOKAHEAD") && (o.maxLookahead = t.MAX_LOOKAHEAD), this.recordingProdStack.push(o), a.call(this), i.definition.push(o), this.recordingProdStack.pop(), qS;
}
o(tC, "recordProd");
function nC(e, t) {
	iC(t);
	let n = Tg(this.recordingProdStack), r = L(e) === !1, i = r === !1 ? e : e.DEF, a = new Ev({
		definition: [],
		idx: t,
		ignoreAmbiguities: r && e.IGNORE_AMBIGUITIES === !0
	});
	return H(e, "MAX_LOOKAHEAD") && (a.maxLookahead = e.MAX_LOOKAHEAD), a.hasPredicates = Y_(i, (e) => Os(e.GATE)), n.definition.push(a), B(i, (e) => {
		let t = new hv({ definition: [] });
		a.definition.push(t), H(e, "IGNORE_AMBIGUITIES") ? t.ignoreAmbiguities = e.IGNORE_AMBIGUITIES : H(e, "GATE") && (t.ignoreAmbiguities = !0), this.recordingProdStack.push(t), e.ALT.call(this), this.recordingProdStack.pop();
	}), qS;
}
o(nC, "recordOrProd");
function rC(e) {
	return e === 0 ? "" : `${e}`;
}
o(rC, "getIdxSuffix");
function iC(e) {
	if (e < 0 || e > YS) {
		let t = /* @__PURE__ */ Error(`Invalid DSL Method idx value: <${e}>
	Idx value must be a none negative value smaller than ${YS + 1}`);
		throw t.KNOWN_RECORDER_ERROR = !0, t;
	}
}
o(iC, "assertMethodIdxIsValid");
var aC, oC = (aC = class {
	initPerformanceTracer(e) {
		if (H(e, "traceInitPerf")) {
			let t = e.traceInitPerf, n = typeof t == "number";
			this.traceInitMaxIdent = n ? t : 1 / 0, this.traceInitPerf = n ? t > 0 : t;
		} else this.traceInitMaxIdent = 0, this.traceInitPerf = lC.traceInitPerf;
		this.traceInitIndent = -1;
	}
	TRACE_INIT(e, t) {
		if (this.traceInitPerf === !0) {
			this.traceInitIndent++;
			let n = Array(this.traceInitIndent + 1).join("	");
			this.traceInitIndent < this.traceInitMaxIdent && console.log(`${n}--> <${e}>`);
			let { time: r, value: i } = iv(t), a = r > 10 ? console.warn : console.log;
			return this.traceInitIndent < this.traceInitMaxIdent && a(`${n}<-- <${e}> time: ${r}ms`), this.traceInitIndent--, i;
		}
		return t();
	}
}, o(aC, "PerformanceTracer"), aC);
function sC(e, t) {
	t.forEach((t) => {
		let n = t.prototype;
		Object.getOwnPropertyNames(n).forEach((r) => {
			if (r === "constructor") return;
			let i = Object.getOwnPropertyDescriptor(n, r);
			i && (i.get || i.set) ? Object.defineProperty(e.prototype, r, i) : e.prototype[r] = t.prototype[r];
		});
	});
}
o(sC, "applyMixins");
var cC = wb(Cb, "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(cC);
var lC = Object.freeze({
	recoveryEnabled: !1,
	maxLookahead: 3,
	dynamicTokensEnabled: !1,
	outputCst: !0,
	errorMessageProvider: Eb,
	nodeLocationTracking: "none",
	traceInitPerf: !1,
	skipValidations: !1
}), uC = Object.freeze({
	recoveryValueFunc: /* @__PURE__ */ o(() => {}, "recoveryValueFunc"),
	resyncEnabled: !0
}), dC;
(function(e) {
	e[e.INVALID_RULE_NAME = 0] = "INVALID_RULE_NAME", e[e.DUPLICATE_RULE_NAME = 1] = "DUPLICATE_RULE_NAME", e[e.INVALID_RULE_OVERRIDE = 2] = "INVALID_RULE_OVERRIDE", e[e.DUPLICATE_PRODUCTIONS = 3] = "DUPLICATE_PRODUCTIONS", e[e.UNRESOLVED_SUBRULE_REF = 4] = "UNRESOLVED_SUBRULE_REF", e[e.LEFT_RECURSION = 5] = "LEFT_RECURSION", e[e.NONE_LAST_EMPTY_ALT = 6] = "NONE_LAST_EMPTY_ALT", e[e.AMBIGUOUS_ALTS = 7] = "AMBIGUOUS_ALTS", e[e.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE", e[e.INVALID_TOKEN_NAME = 9] = "INVALID_TOKEN_NAME", e[e.NO_NON_EMPTY_LOOKAHEAD = 10] = "NO_NON_EMPTY_LOOKAHEAD", e[e.AMBIGUOUS_PREFIX_ALTS = 11] = "AMBIGUOUS_PREFIX_ALTS", e[e.TOO_MANY_ALTS = 12] = "TOO_MANY_ALTS", e[e.CUSTOM_LOOKAHEAD_VALIDATION = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
})(dC ||= {});
function fC(e = void 0) {
	return function() {
		return e;
	};
}
o(fC, "EMPTY_ALT");
var pC, mC = (pC = class {
	static performSelfAnalysis(e) {
		throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
	}
	performSelfAnalysis() {
		this.TRACE_INIT("performSelfAnalysis", () => {
			let e;
			this.selfAnalysisDone = !0;
			let t = this.className;
			this.TRACE_INIT("toFastProps", () => {
				av(this);
			}), this.TRACE_INIT("Grammar Recording", () => {
				try {
					this.enableRecording(), B(this.definedRulesNames, (e) => {
						let t = this[e].originalGrammarAction, n;
						this.TRACE_INIT(`${e} Rule`, () => {
							n = this.topLevelRuleRecord(e, t);
						}), this.gastProductionsCache[e] = n;
					});
				} finally {
					this.disableRecording();
				}
			});
			let n = [];
			if (this.TRACE_INIT("Grammar Resolving", () => {
				n = Ix({ rules: p_(this.gastProductionsCache) }), this.definitionErrors = this.definitionErrors.concat(n);
			}), this.TRACE_INIT("Grammar Validations", () => {
				if (U(n) && this.skipValidations === !1) {
					let e = Lx({
						rules: p_(this.gastProductionsCache),
						tokenTypes: p_(this.tokensMap),
						errMsgProvider: Ob,
						grammarName: t
					}), n = mx({
						lookaheadStrategy: this.lookaheadStrategy,
						rules: p_(this.gastProductionsCache),
						tokenTypes: p_(this.tokensMap),
						grammarName: t
					});
					this.definitionErrors = this.definitionErrors.concat(e, n);
				}
			}), U(this.definitionErrors) && (this.recoveryEnabled && this.TRACE_INIT("computeAllProdsFollows", () => {
				let e = Kv(p_(this.gastProductionsCache));
				this.resyncFollows = e;
			}), this.TRACE_INIT("ComputeLookaheadFunctions", () => {
				var e, t;
				(t = (e = this.lookaheadStrategy).initialize) == null || t.call(e, { rules: p_(this.gastProductionsCache) }), this.preComputeLookaheadFunctions(p_(this.gastProductionsCache));
			})), !pC.DEFER_DEFINITION_ERRORS_HANDLING && !U(this.definitionErrors)) throw e = V(this.definitionErrors, (e) => e.message), /* @__PURE__ */ Error(`Parser Definition Errors detected:
 ${e.join("\n-------------------------------\n")}`);
		});
	}
	constructor(e, t) {
		this.definitionErrors = [], this.selfAnalysisDone = !1;
		let n = this;
		if (n.initErrorHandler(t), n.initLexerAdapter(), n.initLooksAhead(t), n.initRecognizerEngine(e, t), n.initRecoverable(t), n.initTreeBuilder(t), n.initContentAssist(), n.initGastRecorder(t), n.initPerformanceTracer(t), H(t, "ignoredIssues")) throw Error("The <ignoredIssues> IParserConfig property has been deprecated.\n	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.\n	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES\n	For further details.");
		this.skipValidations = H(t, "skipValidations") ? t.skipValidations : lC.skipValidations;
	}
}, o(pC, "Parser"), pC);
mC.DEFER_DEFINITION_ERRORS_HANDLING = !1, sC(mC, [
	aS,
	yS,
	IS,
	RS,
	HS,
	BS,
	WS,
	KS,
	eC,
	oC
]);
var hC, gC = (hC = class extends mC {
	constructor(e, t = lC) {
		let n = Dm(t);
		n.outputCst = !1, super(e, n);
	}
}, o(hC, "EmbeddedActionsParser"), hC);
function _C(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
o(_C, "arrayMap");
var vC = _C;
function yC() {
	this.__data__ = [], this.size = 0;
}
o(yC, "listCacheClear");
var bC = yC;
function xC(e, t) {
	return e === t || e !== e && t !== t;
}
o(xC, "eq");
var SC = xC;
function CC(e, t) {
	for (var n = e.length; n--;) if (SC(e[n][0], t)) return n;
	return -1;
}
o(CC, "assocIndexOf");
var wC = CC, TC = Array.prototype.splice;
function EC(e) {
	var t = this.__data__, n = wC(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : TC.call(t, n, 1), --this.size, !0);
}
o(EC, "listCacheDelete");
var DC = EC;
function OC(e) {
	var t = this.__data__, n = wC(t, e);
	return n < 0 ? void 0 : t[n][1];
}
o(OC, "listCacheGet");
var kC = OC;
function AC(e) {
	return wC(this.__data__, e) > -1;
}
o(AC, "listCacheHas");
var jC = AC;
function MC(e, t) {
	var n = this.__data__, r = wC(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
o(MC, "listCacheSet");
var NC = MC;
function PC(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
o(PC, "ListCache"), PC.prototype.clear = bC, PC.prototype.delete = DC, PC.prototype.get = kC, PC.prototype.has = jC, PC.prototype.set = NC;
var FC = PC;
function IC() {
	this.__data__ = new FC(), this.size = 0;
}
o(IC, "stackClear");
var LC = IC;
function RC(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
o(RC, "stackDelete");
var zC = RC;
function BC(e) {
	return this.__data__.get(e);
}
o(BC, "stackGet");
var VC = BC;
function HC(e) {
	return this.__data__.has(e);
}
o(HC, "stackHas");
var UC = HC, WC = typeof global == "object" && global && global.Object === Object && global, GC = typeof self == "object" && self && self.Object === Object && self, KC = WC || GC || Function("return this")(), qC = KC.Symbol, JC = Object.prototype, YC = JC.hasOwnProperty, XC = JC.toString, ZC = qC ? qC.toStringTag : void 0;
function QC(e) {
	var t = YC.call(e, ZC), n = e[ZC];
	try {
		e[ZC] = void 0;
		var r = !0;
	} catch {}
	var i = XC.call(e);
	return r && (t ? e[ZC] = n : delete e[ZC]), i;
}
o(QC, "getRawTag");
var $C = QC, ew = Object.prototype.toString;
function tw(e) {
	return ew.call(e);
}
o(tw, "objectToString");
var nw = tw, rw = "[object Null]", iw = "[object Undefined]", aw = qC ? qC.toStringTag : void 0;
function ow(e) {
	return e == null ? e === void 0 ? iw : rw : aw && aw in Object(e) ? $C(e) : nw(e);
}
o(ow, "baseGetTag");
var sw = ow;
function cw(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
o(cw, "isObject");
var lw = cw, uw = "[object AsyncFunction]", dw = "[object Function]", fw = "[object GeneratorFunction]", pw = "[object Proxy]";
function mw(e) {
	if (!lw(e)) return !1;
	var t = sw(e);
	return t == dw || t == fw || t == uw || t == pw;
}
o(mw, "isFunction");
var hw = mw, gw = KC["__core-js_shared__"], _w = function() {
	var e = /[^.]+$/.exec(gw && gw.keys && gw.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function vw(e) {
	return !!_w && _w in e;
}
o(vw, "isMasked");
var yw = vw, bw = Function.prototype.toString;
function xw(e) {
	if (e != null) {
		try {
			return bw.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
o(xw, "toSource");
var Sw = xw, Cw = /[\\^$.*+?()[\]{}|]/g, ww = /^\[object .+?Constructor\]$/, Tw = Function.prototype, Ew = Object.prototype, Dw = Tw.toString, Ow = Ew.hasOwnProperty, kw = RegExp("^" + Dw.call(Ow).replace(Cw, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Aw(e) {
	return !lw(e) || yw(e) ? !1 : (hw(e) ? kw : ww).test(Sw(e));
}
o(Aw, "baseIsNative");
var jw = Aw;
function Mw(e, t) {
	return e?.[t];
}
o(Mw, "getValue");
var Nw = Mw;
function Pw(e, t) {
	var n = Nw(e, t);
	return jw(n) ? n : void 0;
}
o(Pw, "getNative");
var Fw = Pw, Iw = Fw(KC, "Map"), Lw = Fw(Object, "create");
function Rw() {
	this.__data__ = Lw ? Lw(null) : {}, this.size = 0;
}
o(Rw, "hashClear");
var zw = Rw;
function Bw(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= +!!t, t;
}
o(Bw, "hashDelete");
var Vw = Bw, Hw = "__lodash_hash_undefined__", Uw = Object.prototype.hasOwnProperty;
function Ww(e) {
	var t = this.__data__;
	if (Lw) {
		var n = t[e];
		return n === Hw ? void 0 : n;
	}
	return Uw.call(t, e) ? t[e] : void 0;
}
o(Ww, "hashGet");
var Gw = Ww, Kw = Object.prototype.hasOwnProperty;
function qw(e) {
	var t = this.__data__;
	return Lw ? t[e] !== void 0 : Kw.call(t, e);
}
o(qw, "hashHas");
var Jw = qw, Yw = "__lodash_hash_undefined__";
function Xw(e, t) {
	var n = this.__data__;
	return this.size += +!this.has(e), n[e] = Lw && t === void 0 ? Yw : t, this;
}
o(Xw, "hashSet");
var Zw = Xw;
function Qw(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
o(Qw, "Hash"), Qw.prototype.clear = zw, Qw.prototype.delete = Vw, Qw.prototype.get = Gw, Qw.prototype.has = Jw, Qw.prototype.set = Zw;
var $w = Qw;
function eT() {
	this.size = 0, this.__data__ = {
		hash: new $w(),
		map: new (Iw || FC)(),
		string: new $w()
	};
}
o(eT, "mapCacheClear");
var tT = eT;
function nT(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
o(nT, "isKeyable");
var rT = nT;
function iT(e, t) {
	var n = e.__data__;
	return rT(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
o(iT, "getMapData");
var aT = iT;
function oT(e) {
	var t = aT(this, e).delete(e);
	return this.size -= +!!t, t;
}
o(oT, "mapCacheDelete");
var sT = oT;
function cT(e) {
	return aT(this, e).get(e);
}
o(cT, "mapCacheGet");
var lT = cT;
function uT(e) {
	return aT(this, e).has(e);
}
o(uT, "mapCacheHas");
var dT = uT;
function fT(e, t) {
	var n = aT(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
o(fT, "mapCacheSet");
var pT = fT;
function mT(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
o(mT, "MapCache"), mT.prototype.clear = tT, mT.prototype.delete = sT, mT.prototype.get = lT, mT.prototype.has = dT, mT.prototype.set = pT;
var hT = mT, gT = 200;
function _T(e, t) {
	var n = this.__data__;
	if (n instanceof FC) {
		var r = n.__data__;
		if (!Iw || r.length < gT - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new hT(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
o(_T, "stackSet");
var vT = _T;
function yT(e) {
	var t = this.__data__ = new FC(e);
	this.size = t.size;
}
o(yT, "Stack"), yT.prototype.clear = LC, yT.prototype.delete = zC, yT.prototype.get = VC, yT.prototype.has = UC, yT.prototype.set = vT;
var bT = yT, xT = "__lodash_hash_undefined__";
function ST(e) {
	return this.__data__.set(e, xT), this;
}
o(ST, "setCacheAdd");
var CT = ST;
function wT(e) {
	return this.__data__.has(e);
}
o(wT, "setCacheHas");
var TT = wT;
function ET(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.__data__ = new hT(); ++t < n;) this.add(e[t]);
}
o(ET, "SetCache"), ET.prototype.add = ET.prototype.push = CT, ET.prototype.has = TT;
var DT = ET;
function OT(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
	return !1;
}
o(OT, "arraySome");
var kT = OT;
function AT(e, t) {
	return e.has(t);
}
o(AT, "cacheHas");
var jT = AT, MT = 1, NT = 2;
function PT(e, t, n, r, i, a) {
	var o = n & MT, s = e.length, c = t.length;
	if (s != c && !(o && c > s)) return !1;
	var l = a.get(e), u = a.get(t);
	if (l && u) return l == t && u == e;
	var d = -1, f = !0, p = n & NT ? new DT() : void 0;
	for (a.set(e, t), a.set(t, e); ++d < s;) {
		var m = e[d], h = t[d];
		if (r) var g = o ? r(h, m, d, t, e, a) : r(m, h, d, e, t, a);
		if (g !== void 0) {
			if (g) continue;
			f = !1;
			break;
		}
		if (p) {
			if (!kT(t, function(e, t) {
				if (!jT(p, t) && (m === e || i(m, e, n, r, a))) return p.push(t);
			})) {
				f = !1;
				break;
			}
		} else if (!(m === h || i(m, h, n, r, a))) {
			f = !1;
			break;
		}
	}
	return a.delete(e), a.delete(t), f;
}
o(PT, "equalArrays");
var FT = PT, IT = KC.Uint8Array;
function LT(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e, r) {
		n[++t] = [r, e];
	}), n;
}
o(LT, "mapToArray");
var RT = LT;
function zT(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e) {
		n[++t] = e;
	}), n;
}
o(zT, "setToArray");
var BT = zT, VT = 1, HT = 2, UT = "[object Boolean]", WT = "[object Date]", GT = "[object Error]", KT = "[object Map]", qT = "[object Number]", JT = "[object RegExp]", YT = "[object Set]", XT = "[object String]", ZT = "[object Symbol]", QT = "[object ArrayBuffer]", $T = "[object DataView]", eE = qC ? qC.prototype : void 0, tE = eE ? eE.valueOf : void 0;
function nE(e, t, n, r, i, a, o) {
	switch (n) {
		case $T:
			if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
			e = e.buffer, t = t.buffer;
		case QT: return !(e.byteLength != t.byteLength || !a(new IT(e), new IT(t)));
		case UT:
		case WT:
		case qT: return SC(+e, +t);
		case GT: return e.name == t.name && e.message == t.message;
		case JT:
		case XT: return e == t + "";
		case KT: var s = RT;
		case YT:
			var c = r & VT;
			if (s ||= BT, e.size != t.size && !c) return !1;
			var l = o.get(e);
			if (l) return l == t;
			r |= HT, o.set(e, t);
			var u = FT(s(e), s(t), r, i, a, o);
			return o.delete(e), u;
		case ZT: if (tE) return tE.call(e) == tE.call(t);
	}
	return !1;
}
o(nE, "equalByTag");
var rE = nE;
function iE(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
o(iE, "arrayPush");
var aE = iE, oE = Array.isArray;
function sE(e, t, n) {
	var r = t(e);
	return oE(e) ? r : aE(r, n(e));
}
o(sE, "baseGetAllKeys");
var cE = sE;
function lE(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
o(lE, "arrayFilter");
var uE = lE;
function dE() {
	return [];
}
o(dE, "stubArray");
var fE = dE, pE = Object.prototype.propertyIsEnumerable, mE = Object.getOwnPropertySymbols, hE = mE ? function(e) {
	return e == null ? [] : (e = Object(e), uE(mE(e), function(t) {
		return pE.call(e, t);
	}));
} : fE;
function gE(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
o(gE, "baseTimes");
var _E = gE;
function vE(e) {
	return typeof e == "object" && !!e;
}
o(vE, "isObjectLike");
var yE = vE, bE = "[object Arguments]";
function xE(e) {
	return yE(e) && sw(e) == bE;
}
o(xE, "baseIsArguments");
var SE = xE, CE = Object.prototype, wE = CE.hasOwnProperty, TE = CE.propertyIsEnumerable, EE = SE(/* @__PURE__ */ function() {
	return arguments;
}()) ? SE : function(e) {
	return yE(e) && wE.call(e, "callee") && !TE.call(e, "callee");
};
function DE() {
	return !1;
}
o(DE, "stubFalse");
var OE = DE, kE = typeof exports == "object" && exports && !exports.nodeType && exports, AE = kE && typeof module == "object" && module && !module.nodeType && module, jE = AE && AE.exports === kE ? KC.Buffer : void 0, ME = (jE ? jE.isBuffer : void 0) || OE, NE = 9007199254740991, PE = /^(?:0|[1-9]\d*)$/;
function FE(e, t) {
	var n = typeof e;
	return t ??= NE, !!t && (n == "number" || n != "symbol" && PE.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
o(FE, "isIndex");
var IE = FE, LE = 9007199254740991;
function RE(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= LE;
}
o(RE, "isLength");
var zE = RE, BE = "[object Arguments]", VE = "[object Array]", HE = "[object Boolean]", UE = "[object Date]", WE = "[object Error]", GE = "[object Function]", KE = "[object Map]", qE = "[object Number]", JE = "[object Object]", YE = "[object RegExp]", XE = "[object Set]", ZE = "[object String]", QE = "[object WeakMap]", $E = "[object ArrayBuffer]", eD = "[object DataView]", tD = "[object Float32Array]", nD = "[object Float64Array]", rD = "[object Int8Array]", iD = "[object Int16Array]", aD = "[object Int32Array]", oD = "[object Uint8Array]", sD = "[object Uint8ClampedArray]", cD = "[object Uint16Array]", lD = "[object Uint32Array]", J = {};
J[tD] = J[nD] = J[rD] = J[iD] = J[aD] = J[oD] = J[sD] = J[cD] = J[lD] = !0, J[BE] = J[VE] = J[$E] = J[HE] = J[eD] = J[UE] = J[WE] = J[GE] = J[KE] = J[qE] = J[JE] = J[YE] = J[XE] = J[ZE] = J[QE] = !1;
function uD(e) {
	return yE(e) && zE(e.length) && !!J[sw(e)];
}
o(uD, "baseIsTypedArray");
var dD = uD;
function fD(e) {
	return function(t) {
		return e(t);
	};
}
o(fD, "baseUnary");
var pD = fD, mD = typeof exports == "object" && exports && !exports.nodeType && exports, hD = mD && typeof module == "object" && module && !module.nodeType && module, gD = hD && hD.exports === mD && WC.process, _D = function() {
	try {
		return hD && hD.require && hD.require("util").types || gD && gD.binding && gD.binding("util");
	} catch {}
}(), vD = _D && _D.isTypedArray, yD = vD ? pD(vD) : dD, bD = Object.prototype.hasOwnProperty;
function xD(e, t) {
	var n = oE(e), r = !n && EE(e), i = !n && !r && ME(e), a = !n && !r && !i && yD(e), o = n || r || i || a, s = o ? _E(e.length, String) : [], c = s.length;
	for (var l in e) (t || bD.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || IE(l, c))) && s.push(l);
	return s;
}
o(xD, "arrayLikeKeys");
var SD = xD, CD = Object.prototype;
function wD(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || CD);
}
o(wD, "isPrototype");
var TD = wD;
function ED(e, t) {
	return function(n) {
		return e(t(n));
	};
}
o(ED, "overArg");
var DD = ED(Object.keys, Object), OD = Object.prototype.hasOwnProperty;
function kD(e) {
	if (!TD(e)) return DD(e);
	var t = [];
	for (var n in Object(e)) OD.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
o(kD, "baseKeys");
var AD = kD;
function jD(e) {
	return e != null && zE(e.length) && !hw(e);
}
o(jD, "isArrayLike");
var MD = jD;
function ND(e) {
	return MD(e) ? SD(e) : AD(e);
}
o(ND, "keys");
var PD = ND;
function FD(e) {
	return cE(e, PD, hE);
}
o(FD, "getAllKeys");
var ID = FD, LD = 1, RD = Object.prototype.hasOwnProperty;
function zD(e, t, n, r, i, a) {
	var o = n & LD, s = ID(e), c = s.length;
	if (c != ID(t).length && !o) return !1;
	for (var l = c; l--;) {
		var u = s[l];
		if (!(o ? u in t : RD.call(t, u))) return !1;
	}
	var d = a.get(e), f = a.get(t);
	if (d && f) return d == t && f == e;
	var p = !0;
	a.set(e, t), a.set(t, e);
	for (var m = o; ++l < c;) {
		u = s[l];
		var h = e[u], g = t[u];
		if (r) var _ = o ? r(g, h, u, t, e, a) : r(h, g, u, e, t, a);
		if (!(_ === void 0 ? h === g || i(h, g, n, r, a) : _)) {
			p = !1;
			break;
		}
		m ||= u == "constructor";
	}
	if (p && !m) {
		var v = e.constructor, y = t.constructor;
		v != y && "constructor" in e && "constructor" in t && !(typeof v == "function" && v instanceof v && typeof y == "function" && y instanceof y) && (p = !1);
	}
	return a.delete(e), a.delete(t), p;
}
o(zD, "equalObjects");
var BD = zD, VD = Fw(KC, "DataView"), HD = Fw(KC, "Promise"), UD = Fw(KC, "Set"), WD = Fw(KC, "WeakMap"), GD = "[object Map]", KD = "[object Object]", qD = "[object Promise]", JD = "[object Set]", YD = "[object WeakMap]", XD = "[object DataView]", ZD = Sw(VD), QD = Sw(Iw), $D = Sw(HD), eO = Sw(UD), tO = Sw(WD), nO = sw;
(VD && nO(new VD(/* @__PURE__ */ new ArrayBuffer(1))) != XD || Iw && nO(new Iw()) != GD || HD && nO(HD.resolve()) != qD || UD && nO(new UD()) != JD || WD && nO(new WD()) != YD) && (nO = /* @__PURE__ */ o(function(e) {
	var t = sw(e), n = t == KD ? e.constructor : void 0, r = n ? Sw(n) : "";
	if (r) switch (r) {
		case ZD: return XD;
		case QD: return GD;
		case $D: return qD;
		case eO: return JD;
		case tO: return YD;
	}
	return t;
}, "getTag"));
var rO = nO, iO = 1, aO = "[object Arguments]", oO = "[object Array]", sO = "[object Object]", cO = Object.prototype.hasOwnProperty;
function lO(e, t, n, r, i, a) {
	var o = oE(e), s = oE(t), c = o ? oO : rO(e), l = s ? oO : rO(t);
	c = c == aO ? sO : c, l = l == aO ? sO : l;
	var u = c == sO, d = l == sO, f = c == l;
	if (f && ME(e)) {
		if (!ME(t)) return !1;
		o = !0, u = !1;
	}
	if (f && !u) return a ||= new bT(), o || yD(e) ? FT(e, t, n, r, i, a) : rE(e, t, c, n, r, i, a);
	if (!(n & iO)) {
		var p = u && cO.call(e, "__wrapped__"), m = d && cO.call(t, "__wrapped__");
		if (p || m) {
			var h = p ? e.value() : e, g = m ? t.value() : t;
			return a ||= new bT(), i(h, g, n, r, a);
		}
	}
	return f ? (a ||= new bT(), BD(e, t, n, r, i, a)) : !1;
}
o(lO, "baseIsEqualDeep");
var uO = lO;
function dO(e, t, n, r, i) {
	return e === t ? !0 : e == null || t == null || !yE(e) && !yE(t) ? e !== e && t !== t : uO(e, t, n, r, dO, i);
}
o(dO, "baseIsEqual");
var fO = dO, pO = 1, mO = 2;
function hO(e, t, n, r) {
	var i = n.length, a = i, o = !r;
	if (e == null) return !a;
	for (e = Object(e); i--;) {
		var s = n[i];
		if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
	}
	for (; ++i < a;) {
		s = n[i];
		var c = s[0], l = e[c], u = s[1];
		if (o && s[2]) {
			if (l === void 0 && !(c in e)) return !1;
		} else {
			var d = new bT();
			if (r) var f = r(l, u, c, e, t, d);
			if (!(f === void 0 ? fO(u, l, pO | mO, r, d) : f)) return !1;
		}
	}
	return !0;
}
o(hO, "baseIsMatch");
var gO = hO;
function _O(e) {
	return e === e && !lw(e);
}
o(_O, "isStrictComparable");
var vO = _O;
function yO(e) {
	for (var t = PD(e), n = t.length; n--;) {
		var r = t[n], i = e[r];
		t[n] = [
			r,
			i,
			vO(i)
		];
	}
	return t;
}
o(yO, "getMatchData");
var bO = yO;
function xO(e, t) {
	return function(n) {
		return n != null && n[e] === t && (t !== void 0 || e in Object(n));
	};
}
o(xO, "matchesStrictComparable");
var SO = xO;
function CO(e) {
	var t = bO(e);
	return t.length == 1 && t[0][2] ? SO(t[0][0], t[0][1]) : function(n) {
		return n === e || gO(n, e, t);
	};
}
o(CO, "baseMatches");
var wO = CO, TO = "[object Symbol]";
function EO(e) {
	return typeof e == "symbol" || yE(e) && sw(e) == TO;
}
o(EO, "isSymbol");
var DO = EO, OO = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, kO = /^\w*$/;
function AO(e, t) {
	if (oE(e)) return !1;
	var n = typeof e;
	return n == "number" || n == "symbol" || n == "boolean" || e == null || DO(e) ? !0 : kO.test(e) || !OO.test(e) || t != null && e in Object(t);
}
o(AO, "isKey");
var jO = AO, MO = "Expected a function";
function NO(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(MO);
	var n = /* @__PURE__ */ o(function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	}, "memoized");
	return n.cache = new (NO.Cache || hT)(), n;
}
o(NO, "memoize"), NO.Cache = hT;
var PO = NO, FO = 500;
function IO(e) {
	var t = PO(e, function(e) {
		return n.size === FO && n.clear(), e;
	}), n = t.cache;
	return t;
}
o(IO, "memoizeCapped");
var LO = IO, RO = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, zO = /\\(\\)?/g, BO = LO(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(RO, function(e, n, r, i) {
		t.push(r ? i.replace(zO, "$1") : n || e);
	}), t;
}), VO = qC ? qC.prototype : void 0, HO = VO ? VO.toString : void 0;
function UO(e) {
	if (typeof e == "string") return e;
	if (oE(e)) return vC(e, UO) + "";
	if (DO(e)) return HO ? HO.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
o(UO, "baseToString");
var WO = UO;
function GO(e) {
	return e == null ? "" : WO(e);
}
o(GO, "toString");
var KO = GO;
function qO(e, t) {
	return oE(e) ? e : jO(e, t) ? [e] : BO(KO(e));
}
o(qO, "castPath");
var JO = qO;
function YO(e) {
	if (typeof e == "string" || DO(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
o(YO, "toKey");
var XO = YO;
function ZO(e, t) {
	t = JO(t, e);
	for (var n = 0, r = t.length; e != null && n < r;) e = e[XO(t[n++])];
	return n && n == r ? e : void 0;
}
o(ZO, "baseGet");
var QO = ZO;
function $O(e, t, n) {
	var r = e == null ? void 0 : QO(e, t);
	return r === void 0 ? n : r;
}
o($O, "get");
var ek = $O;
function tk(e, t) {
	return e != null && t in Object(e);
}
o(tk, "baseHasIn");
var nk = tk;
function rk(e, t, n) {
	t = JO(t, e);
	for (var r = -1, i = t.length, a = !1; ++r < i;) {
		var o = XO(t[r]);
		if (!(a = e != null && n(e, o))) break;
		e = e[o];
	}
	return a || ++r != i ? a : (i = e == null ? 0 : e.length, !!i && zE(i) && IE(o, i) && (oE(e) || EE(e)));
}
o(rk, "hasPath");
var ik = rk;
function ak(e, t) {
	return e != null && ik(e, t, nk);
}
o(ak, "hasIn");
var ok = ak, sk = 1, ck = 2;
function lk(e, t) {
	return jO(e) && vO(t) ? SO(XO(e), t) : function(n) {
		var r = ek(n, e);
		return r === void 0 && r === t ? ok(n, e) : fO(t, r, sk | ck);
	};
}
o(lk, "baseMatchesProperty");
var uk = lk;
function dk(e) {
	return e;
}
o(dk, "identity");
var fk = dk;
function pk(e) {
	return function(t) {
		return t?.[e];
	};
}
o(pk, "baseProperty");
var mk = pk;
function hk(e) {
	return function(t) {
		return QO(t, e);
	};
}
o(hk, "basePropertyDeep");
var gk = hk;
function _k(e) {
	return jO(e) ? mk(XO(e)) : gk(e);
}
o(_k, "property");
var vk = _k;
function yk(e) {
	return typeof e == "function" ? e : e == null ? fk : typeof e == "object" ? oE(e) ? uk(e[0], e[1]) : wO(e) : vk(e);
}
o(yk, "baseIteratee");
var bk = yk;
function xk(e) {
	return function(t, n, r) {
		for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
			var c = o[e ? s : ++i];
			if (n(a[c], c, a) === !1) break;
		}
		return t;
	};
}
o(xk, "createBaseFor");
var Sk = xk();
function Ck(e, t) {
	return e && Sk(e, t, PD);
}
o(Ck, "baseForOwn");
var wk = Ck;
function Tk(e, t) {
	return function(n, r) {
		if (n == null) return n;
		if (!MD(n)) return e(n, r);
		for (var i = n.length, a = t ? i : -1, o = Object(n); (t ? a-- : ++a < i) && r(o[a], a, o) !== !1;);
		return n;
	};
}
o(Tk, "createBaseEach");
var Ek = Tk(wk);
function Dk(e, t) {
	var n = -1, r = MD(e) ? Array(e.length) : [];
	return Ek(e, function(e, i, a) {
		r[++n] = t(e, i, a);
	}), r;
}
o(Dk, "baseMap");
var Ok = Dk;
function kk(e, t) {
	return (oE(e) ? vC : Ok)(e, bk(t));
}
o(kk, "map");
var Ak = kk;
function jk(e, t) {
	var n = [];
	return Ek(e, function(e, r, i) {
		t(e, r, i) && n.push(e);
	}), n;
}
o(jk, "baseFilter");
var Mk = jk;
function Nk(e, t) {
	return (oE(e) ? uE : Mk)(e, bk(t));
}
o(Nk, "filter");
var Pk = Nk;
function Fk(e, t, n) {
	return `${e.name}_${t}_${n}`;
}
o(Fk, "buildATNKey");
var Ik = 1, Lk = 2, Rk = 4, zk = 5, Bk = 7, Vk = 8, Hk = 9, Uk = 10, Wk = 11, Gk = 12, Kk, qk = (Kk = class {
	constructor(e) {
		this.target = e;
	}
	isEpsilon() {
		return !1;
	}
}, o(Kk, "AbstractTransition"), Kk), Jk, Yk = (Jk = class extends qk {
	constructor(e, t) {
		super(e), this.tokenType = t;
	}
}, o(Jk, "AtomTransition"), Jk), Xk, Zk = (Xk = class extends qk {
	constructor(e) {
		super(e);
	}
	isEpsilon() {
		return !0;
	}
}, o(Xk, "EpsilonTransition"), Xk), Qk, $k = (Qk = class extends qk {
	constructor(e, t, n) {
		super(e), this.rule = t, this.followState = n;
	}
	isEpsilon() {
		return !0;
	}
}, o(Qk, "RuleTransition"), Qk);
function eA(e) {
	let t = {
		decisionMap: {},
		decisionStates: [],
		ruleToStartState: /* @__PURE__ */ new Map(),
		ruleToStopState: /* @__PURE__ */ new Map(),
		states: []
	};
	tA(t, e);
	let n = e.length;
	for (let r = 0; r < n; r++) {
		let n = e[r], i = lA(t, n, n);
		i !== void 0 && yA(t, n, i);
	}
	return t;
}
o(eA, "createATN");
function tA(e, t) {
	let n = t.length;
	for (let r = 0; r < n; r++) {
		let n = t[r], i = bA(e, n, void 0, { type: Lk }), a = bA(e, n, void 0, { type: Bk });
		i.stop = a, e.ruleToStartState.set(n, i), e.ruleToStopState.set(n, a);
	}
}
o(tA, "createRuleStartAndStopATNStates");
function nA(e, t, n) {
	return n instanceof G ? _A(e, t, n.terminalType, n) : n instanceof dv ? vA(e, t, n) : n instanceof Ev ? sA(e, t, n) : n instanceof _v ? cA(e, t, n) : n instanceof W ? rA(e, t, n) : n instanceof wv ? iA(e, t, n) : n instanceof yv ? aA(e, t, n) : n instanceof xv ? oA(e, t, n) : lA(e, t, n);
}
o(nA, "atom");
function rA(e, t, n) {
	let r = bA(e, t, n, { type: zk });
	return pA(e, r), dA(e, t, n, mA(e, t, r, n, lA(e, t, n)));
}
o(rA, "repetition");
function iA(e, t, n) {
	let r = bA(e, t, n, { type: zk });
	return pA(e, r), dA(e, t, n, mA(e, t, r, n, lA(e, t, n)), _A(e, t, n.separator, n));
}
o(iA, "repetitionSep");
function aA(e, t, n) {
	let r = bA(e, t, n, { type: Rk });
	return pA(e, r), uA(e, t, n, mA(e, t, r, n, lA(e, t, n)));
}
o(aA, "repetitionMandatory");
function oA(e, t, n) {
	let r = bA(e, t, n, { type: Rk });
	return pA(e, r), uA(e, t, n, mA(e, t, r, n, lA(e, t, n)), _A(e, t, n.separator, n));
}
o(oA, "repetitionMandatorySep");
function sA(e, t, n) {
	let r = bA(e, t, n, { type: Ik });
	return pA(e, r), mA(e, t, r, n, ...Ak(n.definition, (n) => nA(e, t, n)));
}
o(sA, "alternation");
function cA(e, t, n) {
	let r = bA(e, t, n, { type: Ik });
	return pA(e, r), fA(e, t, n, mA(e, t, r, n, lA(e, t, n)));
}
o(cA, "option");
function lA(e, t, n) {
	let r = Pk(Ak(n.definition, (n) => nA(e, t, n)), (e) => e !== void 0);
	return r.length === 1 ? r[0] : r.length === 0 ? void 0 : gA(e, r);
}
o(lA, "block");
function uA(e, t, n, r, i) {
	let a = r.left, o = r.right, s = bA(e, t, n, { type: Wk });
	pA(e, s);
	let c = bA(e, t, n, { type: Gk });
	return a.loopback = s, c.loopback = s, e.decisionMap[Fk(t, i ? "RepetitionMandatoryWithSeparator" : "RepetitionMandatory", n.idx)] = s, Y(o, s), i === void 0 ? (Y(s, a), Y(s, c)) : (Y(s, c), Y(s, i.left), Y(i.right, a)), {
		left: a,
		right: c
	};
}
o(uA, "plus");
function dA(e, t, n, r, i) {
	let a = r.left, o = r.right, s = bA(e, t, n, { type: Uk });
	pA(e, s);
	let c = bA(e, t, n, { type: Gk }), l = bA(e, t, n, { type: Hk });
	return s.loopback = l, c.loopback = l, Y(s, a), Y(s, c), Y(o, l), i === void 0 ? Y(l, s) : (Y(l, c), Y(l, i.left), Y(i.right, a)), e.decisionMap[Fk(t, i ? "RepetitionWithSeparator" : "Repetition", n.idx)] = s, {
		left: s,
		right: c
	};
}
o(dA, "star");
function fA(e, t, n, r) {
	let i = r.left, a = r.right;
	return Y(i, a), e.decisionMap[Fk(t, "Option", n.idx)] = i, r;
}
o(fA, "optional");
function pA(e, t) {
	return e.decisionStates.push(t), t.decision = e.decisionStates.length - 1, t.decision;
}
o(pA, "defineDecisionState");
function mA(e, t, n, r, ...i) {
	let a = bA(e, t, r, {
		type: Vk,
		start: n
	});
	n.end = a;
	for (let e of i) e === void 0 ? Y(n, a) : (Y(n, e.left), Y(e.right, a));
	let o = {
		left: n,
		right: a
	};
	return e.decisionMap[Fk(t, hA(r), r.idx)] = n, o;
}
o(mA, "makeAlts");
function hA(e) {
	if (e instanceof Ev) return "Alternation";
	if (e instanceof _v) return "Option";
	if (e instanceof W) return "Repetition";
	if (e instanceof wv) return "RepetitionWithSeparator";
	if (e instanceof yv) return "RepetitionMandatory";
	if (e instanceof xv) return "RepetitionMandatoryWithSeparator";
	throw Error("Invalid production type encountered");
}
o(hA, "getProdType");
function gA(e, t) {
	let n = t.length;
	for (let r = 0; r < n - 1; r++) {
		let n = t[r], i;
		n.left.transitions.length === 1 && (i = n.left.transitions[0]);
		let a = i instanceof $k, o = i, s = t[r + 1].left;
		n.left.type === Ik && n.right.type === Ik && i !== void 0 && (a && o.followState === n.right || i.target === n.right) ? (a ? o.followState = s : i.target = s, SA(e, n.right)) : Y(n.right, s);
	}
	let r = t[0], i = t[n - 1];
	return {
		left: r.left,
		right: i.right
	};
}
o(gA, "makeBlock");
function _A(e, t, n, r) {
	let i = bA(e, t, r, { type: Ik }), a = bA(e, t, r, { type: Ik });
	return xA(i, new Yk(a, n)), {
		left: i,
		right: a
	};
}
o(_A, "tokenRef");
function vA(e, t, n) {
	let r = n.referencedRule, i = e.ruleToStartState.get(r), a = bA(e, t, n, { type: Ik }), o = bA(e, t, n, { type: Ik });
	return xA(a, new $k(i, r, o)), {
		left: a,
		right: o
	};
}
o(vA, "ruleRef");
function yA(e, t, n) {
	let r = e.ruleToStartState.get(t);
	Y(r, n.left);
	let i = e.ruleToStopState.get(t);
	return Y(n.right, i), {
		left: r,
		right: i
	};
}
o(yA, "buildRuleHandle");
function Y(e, t) {
	xA(e, new Zk(t));
}
o(Y, "epsilon");
function bA(e, t, n, r) {
	let i = Object.assign({
		atn: e,
		production: n,
		epsilonOnlyTransitions: !1,
		rule: t,
		transitions: [],
		nextTokenWithinRule: [],
		stateNumber: e.states.length
	}, r);
	return e.states.push(i), i;
}
o(bA, "newState");
function xA(e, t) {
	e.transitions.length === 0 && (e.epsilonOnlyTransitions = t.isEpsilon()), e.transitions.push(t);
}
o(xA, "addTransition");
function SA(e, t) {
	e.states.splice(e.states.indexOf(t), 1);
}
o(SA, "removeState");
var CA = {}, wA, TA = (wA = class {
	constructor() {
		this.map = {}, this.configs = [];
	}
	get size() {
		return this.configs.length;
	}
	finalize() {
		this.map = {};
	}
	add(e) {
		let t = EA(e);
		t in this.map || (this.map[t] = this.configs.length, this.configs.push(e));
	}
	get elements() {
		return this.configs;
	}
	get alts() {
		return Ak(this.configs, (e) => e.alt);
	}
	get key() {
		let e = "";
		for (let t in this.map) e += t + ":";
		return e;
	}
}, o(wA, "ATNConfigSet"), wA);
function EA(e, t = !0) {
	return `${t ? `a${e.alt}` : ""}s${e.state.stateNumber}:${e.stack.map((e) => e.stateNumber.toString()).join("_")}`;
}
o(EA, "getATNConfigKey");
function DA(e, t, n) {
	for (var r = -1, i = e.length; ++r < i;) {
		var a = e[r], o = t(a);
		if (o != null && (s === void 0 ? o === o && !DO(o) : n(o, s))) var s = o, c = a;
	}
	return c;
}
o(DA, "baseExtremum");
var OA = DA;
function kA(e, t) {
	return e < t;
}
o(kA, "baseLt");
var AA = kA;
function jA(e) {
	return e && e.length ? OA(e, fk, AA) : void 0;
}
o(jA, "min");
var MA = jA, NA = qC ? qC.isConcatSpreadable : void 0;
function PA(e) {
	return oE(e) || EE(e) || !!(NA && e && e[NA]);
}
o(PA, "isFlattenable");
var FA = PA;
function IA(e, t, n, r, i) {
	var a = -1, o = e.length;
	for (n ||= FA, i ||= []; ++a < o;) {
		var s = e[a];
		t > 0 && n(s) ? t > 1 ? IA(s, t - 1, n, r, i) : aE(i, s) : r || (i[i.length] = s);
	}
	return i;
}
o(IA, "baseFlatten");
var LA = IA;
function RA(e, t) {
	return LA(Ak(e, t), 1);
}
o(RA, "flatMap");
var zA = RA;
function BA(e, t, n, r) {
	for (var i = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i;) if (t(e[a], a, e)) return a;
	return -1;
}
o(BA, "baseFindIndex");
var VA = BA;
function HA(e) {
	return e !== e;
}
o(HA, "baseIsNaN");
var UA = HA;
function WA(e, t, n) {
	for (var r = n - 1, i = e.length; ++r < i;) if (e[r] === t) return r;
	return -1;
}
o(WA, "strictIndexOf");
var GA = WA;
function KA(e, t, n) {
	return t === t ? GA(e, t, n) : VA(e, UA, n);
}
o(KA, "baseIndexOf");
var qA = KA;
function JA(e, t) {
	return !!(e != null && e.length) && qA(e, t, 0) > -1;
}
o(JA, "arrayIncludes");
var YA = JA;
function XA(e, t, n) {
	for (var r = -1, i = e == null ? 0 : e.length; ++r < i;) if (n(t, e[r])) return !0;
	return !1;
}
o(XA, "arrayIncludesWith");
var ZA = XA;
function QA() {}
o(QA, "noop");
var $A = QA, ej = UD && 1 / BT(new UD([, -0]))[1] == 1 / 0 ? function(e) {
	return new UD(e);
} : $A, tj = 200;
function nj(e, t, n) {
	var r = -1, i = YA, a = e.length, o = !0, s = [], c = s;
	if (n) o = !1, i = ZA;
	else if (a >= tj) {
		var l = t ? null : ej(e);
		if (l) return BT(l);
		o = !1, i = jT, c = new DT();
	} else c = t ? [] : s;
	e: for (; ++r < a;) {
		var u = e[r], d = t ? t(u) : u;
		if (u = n || u !== 0 ? u : 0, o && d === d) {
			for (var f = c.length; f--;) if (c[f] === d) continue e;
			t && c.push(d), s.push(u);
		} else i(c, d, n) || (c !== s && c.push(d), s.push(u));
	}
	return s;
}
o(nj, "baseUniq");
var rj = nj;
function ij(e, t) {
	return e && e.length ? rj(e, bk(t)) : [];
}
o(ij, "uniqBy");
var aj = ij;
function oj(e) {
	return e != null && e.length ? LA(e, 1) : [];
}
o(oj, "flatten");
var sj = oj;
function cj(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
o(cj, "arrayEach");
var lj = cj;
function uj(e) {
	return typeof e == "function" ? e : fk;
}
o(uj, "castFunction");
var dj = uj;
function fj(e, t) {
	return (oE(e) ? lj : Ek)(e, dj(t));
}
o(fj, "forEach");
var pj = fj, mj = "[object Map]", hj = "[object Set]", gj = Object.prototype.hasOwnProperty;
function _j(e) {
	if (e == null) return !0;
	if (MD(e) && (oE(e) || typeof e == "string" || typeof e.splice == "function" || ME(e) || yD(e) || EE(e))) return !e.length;
	var t = rO(e);
	if (t == mj || t == hj) return !e.size;
	if (TD(e)) return !AD(e).length;
	for (var n in e) if (gj.call(e, n)) return !1;
	return !0;
}
o(_j, "isEmpty");
var vj = _j;
function yj(e, t, n, r) {
	var i = -1, a = e == null ? 0 : e.length;
	for (r && a && (n = e[++i]); ++i < a;) n = t(n, e[i], i, e);
	return n;
}
o(yj, "arrayReduce");
var bj = yj;
function xj(e, t, n, r, i) {
	return i(e, function(e, i, a) {
		n = r ? (r = !1, e) : t(n, e, i, a);
	}), n;
}
o(xj, "baseReduce");
var Sj = xj;
function Cj(e, t, n) {
	var r = oE(e) ? bj : Sj, i = arguments.length < 3;
	return r(e, bk(t), n, i, Ek);
}
o(Cj, "reduce");
var wj = Cj;
function Tj(e, t) {
	let n = {};
	return (r) => {
		let i = r.toString(), a = n[i];
		return a !== void 0 || (a = {
			atnStartState: e,
			decision: t,
			states: {}
		}, n[i] = a), a;
	};
}
o(Tj, "createDFACache");
var Ej, Dj = (Ej = class {
	constructor() {
		this.predicates = [];
	}
	is(e) {
		return e >= this.predicates.length || this.predicates[e];
	}
	set(e, t) {
		this.predicates[e] = t;
	}
	toString() {
		let e = "", t = this.predicates.length;
		for (let n = 0; n < t; n++) e += this.predicates[n] === !0 ? "1" : "0";
		return e;
	}
}, o(Ej, "PredicateSet"), Ej), Oj = new Dj(), kj, Aj = (kj = class extends _S {
	constructor(e) {
		super(), this.logging = e?.logging ?? ((e) => console.log(e));
	}
	initialize(e) {
		this.atn = eA(e.rules), this.dfas = Mj(this.atn);
	}
	validateAmbiguousAlternationAlternatives() {
		return [];
	}
	validateEmptyOrAlternatives() {
		return [];
	}
	buildLookaheadForAlternation(e) {
		let { prodOccurrence: t, rule: n, hasPredicates: r, dynamicTokensEnabled: i } = e, a = this.dfas, o = this.logging, s = Fk(n, "Alternation", t), c = this.atn.decisionMap[s].decision, l = Ak(Xb({
			maxLookahead: 1,
			occurrence: t,
			prodType: "Alternation",
			rule: n
		}), (e) => Ak(e, (e) => e[0]));
		if (jj(l, !1) && !i) {
			let e = wj(l, (e, t, n) => (pj(t, (t) => {
				t && (e[t.tokenTypeIdx] = n, pj(t.categoryMatches, (t) => {
					e[t] = n;
				}));
			}), e), {});
			return r ? function(t) {
				let n = this.LA(1), r = e[n.tokenTypeIdx];
				if (t !== void 0 && r !== void 0) {
					let e = t[r]?.GATE;
					if (e !== void 0 && e.call(this) === !1) return;
				}
				return r;
			} : function() {
				let t = this.LA(1);
				return e[t.tokenTypeIdx];
			};
		}
		return r ? function(e) {
			let t = new Dj(), n = e === void 0 ? 0 : e.length;
			for (let r = 0; r < n; r++) {
				let n = e?.[r].GATE;
				t.set(r, n === void 0 || n.call(this));
			}
			let r = Nj.call(this, a, c, t, o);
			return typeof r == "number" ? r : void 0;
		} : function() {
			let e = Nj.call(this, a, c, Oj, o);
			return typeof e == "number" ? e : void 0;
		};
	}
	buildLookaheadForOptional(e) {
		let { prodOccurrence: t, rule: n, prodType: r, dynamicTokensEnabled: i } = e, a = this.dfas, o = this.logging, s = Fk(n, r, t), c = this.atn.decisionMap[s].decision, l = Ak(Xb({
			maxLookahead: 1,
			occurrence: t,
			prodType: r,
			rule: n
		}), (e) => Ak(e, (e) => e[0]));
		if (jj(l) && l[0][0] && !i) {
			let e = l[0], t = sj(e);
			if (t.length === 1 && vj(t[0].categoryMatches)) {
				let e = t[0].tokenTypeIdx;
				return function() {
					return this.LA(1).tokenTypeIdx === e;
				};
			}
			{
				let e = wj(t, (e, t) => (t !== void 0 && (e[t.tokenTypeIdx] = !0, pj(t.categoryMatches, (t) => {
					e[t] = !0;
				})), e), {});
				return function() {
					let t = this.LA(1);
					return e[t.tokenTypeIdx] === !0;
				};
			}
		}
		return function() {
			let e = Nj.call(this, a, c, Oj, o);
			return typeof e != "object" && e === 0;
		};
	}
}, o(kj, "LLStarLookaheadStrategy"), kj);
function jj(e, t = !0) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e) {
		let e = /* @__PURE__ */ new Set();
		for (let i of r) {
			if (i === void 0) {
				if (t) break;
				return !1;
			}
			let r = [i.tokenTypeIdx].concat(i.categoryMatches);
			for (let t of r) if (n.has(t)) {
				if (!e.has(t)) return !1;
			} else n.add(t), e.add(t);
		}
	}
	return !0;
}
o(jj, "isLL1Sequence");
function Mj(e) {
	let t = e.decisionStates.length, n = Array(t);
	for (let r = 0; r < t; r++) n[r] = Tj(e.decisionStates[r], r);
	return n;
}
o(Mj, "initATNSimulator");
function Nj(e, t, n, r) {
	let i = e[t](n), a = i.start;
	return a === void 0 && (a = Kj(i, Wj(qj(i.atnStartState))), i.start = a), Pj.apply(this, [
		i,
		a,
		n,
		r
	]);
}
o(Nj, "adaptivePredict");
function Pj(e, t, n, r) {
	let i = t, a = 1, o = [], s = this.LA(a++);
	for (;;) {
		let t = Bj(i, s);
		if (t === void 0 && (t = Fj.apply(this, [
			e,
			i,
			s,
			a,
			n,
			r
		])), t === CA) return zj(o, i, s);
		if (t.isAcceptState === !0) return t.prediction;
		i = t, o.push(s), s = this.LA(a++);
	}
}
o(Pj, "performLookahead");
function Fj(e, t, n, r, i, a) {
	let o = Vj(t.configs, n, i);
	if (o.size === 0) return Gj(e, t, n, CA), CA;
	let s = Wj(o), c = Uj(o, i);
	if (c !== void 0) s.isAcceptState = !0, s.prediction = c, s.configs.uniqueAlt = c;
	else if (Qj(o)) {
		let t = MA(o.alts);
		s.isAcceptState = !0, s.prediction = t, s.configs.uniqueAlt = t, Ij.apply(this, [
			e,
			r,
			o.alts,
			a
		]);
	}
	return s = Gj(e, t, n, s), s;
}
o(Fj, "computeLookaheadTarget");
function Ij(e, t, n, r) {
	let i = [];
	for (let e = 1; e <= t; e++) i.push(this.LA(e).tokenType);
	let a = e.atnStartState, o = a.rule, s = a.production;
	r(Lj({
		topLevelRule: o,
		ambiguityIndices: n,
		production: s,
		prefixPath: i
	}));
}
o(Ij, "reportLookaheadAmbiguity");
function Lj(e) {
	let t = Ak(e.prefixPath, (e) => ub(e)).join(", "), n = e.production.idx === 0 ? "" : e.production.idx, r = `Ambiguous Alternatives Detected: <${e.ambiguityIndices.join(", ")}> in <${Rj(e.production)}${n}> inside <${e.topLevelRule.name}> Rule,
<${t}> may appears as a prefix path in all these alternatives.
`;
	return r += "See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES\nFor Further details.", r;
}
o(Lj, "buildAmbiguityError");
function Rj(e) {
	if (e instanceof dv) return "SUBRULE";
	if (e instanceof _v) return "OPTION";
	if (e instanceof Ev) return "OR";
	if (e instanceof yv) return "AT_LEAST_ONE";
	if (e instanceof xv) return "AT_LEAST_ONE_SEP";
	if (e instanceof wv) return "MANY_SEP";
	if (e instanceof W) return "MANY";
	if (e instanceof G) return "CONSUME";
	throw Error("non exhaustive match");
}
o(Rj, "getProductionDslName");
function zj(e, t, n) {
	return {
		actualToken: n,
		possibleTokenTypes: aj(zA(t.configs.elements, (e) => e.state.transitions).filter((e) => e instanceof Yk).map((e) => e.tokenType), (e) => e.tokenTypeIdx),
		tokenPath: e
	};
}
o(zj, "buildAdaptivePredictError");
function Bj(e, t) {
	return e.edges[t.tokenTypeIdx];
}
o(Bj, "getExistingTargetState");
function Vj(e, t, n) {
	let r = new TA(), i = [];
	for (let a of e.elements) {
		if (n.is(a.alt) === !1) continue;
		if (a.state.type === Bk) {
			i.push(a);
			continue;
		}
		let e = a.state.transitions.length;
		for (let n = 0; n < e; n++) {
			let e = a.state.transitions[n], i = Hj(e, t);
			i !== void 0 && r.add({
				state: i,
				alt: a.alt,
				stack: a.stack
			});
		}
	}
	let a;
	if (i.length === 0 && r.size === 1 && (a = r), a === void 0) {
		a = new TA();
		for (let e of r.elements) Jj(e, a);
	}
	if (i.length > 0 && !Xj(a)) for (let e of i) a.add(e);
	return a;
}
o(Vj, "computeReachSet");
function Hj(e, t) {
	if (e instanceof Yk && Tb(t, e.tokenType)) return e.target;
}
o(Hj, "getReachableTarget");
function Uj(e, t) {
	let n;
	for (let r of e.elements) if (t.is(r.alt) === !0) {
		if (n === void 0) n = r.alt;
		else if (n !== r.alt) return;
	}
	return n;
}
o(Uj, "getUniqueAlt");
function Wj(e) {
	return {
		configs: e,
		edges: {},
		isAcceptState: !1,
		prediction: -1
	};
}
o(Wj, "newDFAState");
function Gj(e, t, n, r) {
	return r = Kj(e, r), t.edges[n.tokenTypeIdx] = r, r;
}
o(Gj, "addDFAEdge");
function Kj(e, t) {
	if (t === CA) return t;
	let n = t.configs.key, r = e.states[n];
	return r === void 0 ? (t.configs.finalize(), e.states[n] = t, t) : r;
}
o(Kj, "addDFAState");
function qj(e) {
	let t = new TA(), n = e.transitions.length;
	for (let r = 0; r < n; r++) Jj({
		state: e.transitions[r].target,
		alt: r,
		stack: []
	}, t);
	return t;
}
o(qj, "computeStartState");
function Jj(e, t) {
	let n = e.state;
	if (n.type === Bk) {
		if (e.stack.length > 0) {
			let n = [...e.stack];
			Jj({
				state: n.pop(),
				alt: e.alt,
				stack: n
			}, t);
		} else t.add(e);
		return;
	}
	n.epsilonOnlyTransitions || t.add(e);
	let r = n.transitions.length;
	for (let i = 0; i < r; i++) {
		let r = n.transitions[i], a = Yj(e, r);
		a !== void 0 && Jj(a, t);
	}
}
o(Jj, "closure");
function Yj(e, t) {
	if (t instanceof Zk) return {
		state: t.target,
		alt: e.alt,
		stack: e.stack
	};
	if (t instanceof $k) {
		let n = [...e.stack, t.followState];
		return {
			state: t.target,
			alt: e.alt,
			stack: n
		};
	}
}
o(Yj, "getEpsilonTarget");
function Xj(e) {
	for (let t of e.elements) if (t.state.type === Bk) return !0;
	return !1;
}
o(Xj, "hasConfigInRuleStopState");
function Zj(e) {
	for (let t of e.elements) if (t.state.type !== Bk) return !1;
	return !0;
}
o(Zj, "allConfigsInRuleStopStates");
function Qj(e) {
	if (Zj(e)) return !0;
	let t = $j(e.elements);
	return eM(t) && !tM(t);
}
o(Qj, "hasConflictTerminatingPrediction");
function $j(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = EA(n, !1), r = t.get(e);
		r === void 0 && (r = {}, t.set(e, r)), r[n.alt] = !0;
	}
	return t;
}
o($j, "getConflictingAltSets");
function eM(e) {
	for (let t of Array.from(e.values())) if (Object.keys(t).length > 1) return !0;
	return !1;
}
o(eM, "hasConflictingAltSet");
function tM(e) {
	for (let t of Array.from(e.values())) if (Object.keys(t).length === 1) return !0;
	return !1;
}
o(tM, "hasStateAssociatedWithOneAlt"), pt();
var nM, rM = (nM = class {
	constructor() {
		this.nodeStack = [];
	}
	get current() {
		return this.nodeStack[this.nodeStack.length - 1] ?? this.rootNode;
	}
	buildRootNode(e) {
		return this.rootNode = new pM(e), this.rootNode.root = this.rootNode, this.nodeStack = [this.rootNode], this.rootNode;
	}
	buildCompositeNode(e) {
		let t = new lM();
		return t.grammarSource = e, t.root = this.rootNode, this.current.content.push(t), this.nodeStack.push(t), t;
	}
	buildLeafNode(e, t) {
		let n = new sM(e.startOffset, e.image.length, Hi(e), e.tokenType, !t);
		return n.grammarSource = t, n.root = this.rootNode, this.current.content.push(n), n;
	}
	removeNode(e) {
		let t = e.container;
		if (t) {
			let n = t.content.indexOf(e);
			n >= 0 && t.content.splice(n, 1);
		}
	}
	addHiddenNodes(e) {
		let t = [];
		for (let n of e) {
			let e = new sM(n.startOffset, n.image.length, Hi(n), n.tokenType, !0);
			e.root = this.rootNode, t.push(e);
		}
		let n = this.current, r = !1;
		if (n.content.length > 0) {
			n.content.push(...t);
			return;
		}
		for (; n.container;) {
			let e = n.container.content.indexOf(n);
			if (e > 0) {
				n.container.content.splice(e, 0, ...t), r = !0;
				break;
			}
			n = n.container;
		}
		r || this.rootNode.content.unshift(...t);
	}
	construct(e) {
		let t = this.current;
		typeof e.$type == "string" && !e.$infixName && (this.current.astNode = e), e.$cstNode = t;
		let n = this.nodeStack.pop();
		n?.content.length === 0 && this.removeNode(n);
	}
}, o(nM, "CstNodeBuilder"), nM), iM, aM = (iM = class {
	get hidden() {
		return !1;
	}
	get astNode() {
		let e = typeof this._astNode?.$type == "string" ? this._astNode : this.container?.astNode;
		if (!e) throw Error("This node has no associated AST element");
		return e;
	}
	set astNode(e) {
		this._astNode = e;
	}
	get text() {
		return this.root.fullText.substring(this.offset, this.end);
	}
}, o(iM, "AbstractCstNode"), iM), oM, sM = (oM = class extends aM {
	get offset() {
		return this._offset;
	}
	get length() {
		return this._length;
	}
	get end() {
		return this._offset + this._length;
	}
	get hidden() {
		return this._hidden;
	}
	get tokenType() {
		return this._tokenType;
	}
	get range() {
		return this._range;
	}
	constructor(e, t, n, r, i = !1) {
		super(), this._hidden = i, this._offset = e, this._tokenType = r, this._length = t, this._range = n;
	}
}, o(oM, "LeafCstNodeImpl"), oM), cM, lM = (cM = class extends aM {
	constructor() {
		super(...arguments), this.content = new dM(this);
	}
	get offset() {
		return this.firstNonHiddenNode?.offset ?? 0;
	}
	get length() {
		return this.end - this.offset;
	}
	get end() {
		return this.lastNonHiddenNode?.end ?? 0;
	}
	get range() {
		let e = this.firstNonHiddenNode, t = this.lastNonHiddenNode;
		if (e && t) {
			if (this._rangeCache === void 0) {
				let { range: n } = e, { range: r } = t;
				this._rangeCache = {
					start: n.start,
					end: r.end.line < n.start.line ? n.start : r.end
				};
			}
			return this._rangeCache;
		}
		return {
			start: y.create(0, 0),
			end: y.create(0, 0)
		};
	}
	get firstNonHiddenNode() {
		for (let e of this.content) if (!e.hidden) return e;
		return this.content[0];
	}
	get lastNonHiddenNode() {
		for (let e = this.content.length - 1; e >= 0; e--) {
			let t = this.content[e];
			if (!t.hidden) return t;
		}
		return this.content[this.content.length - 1];
	}
}, o(cM, "CompositeCstNodeImpl"), cM), uM, dM = (uM = class extends Array {
	constructor(e) {
		super(), this.parent = e, Object.setPrototypeOf(this, uM.prototype);
	}
	push(...e) {
		return this.addParents(e), super.push(...e);
	}
	unshift(...e) {
		return this.addParents(e), super.unshift(...e);
	}
	splice(e, t, ...n) {
		return this.addParents(n), super.splice(e, t, ...n);
	}
	addParents(e) {
		for (let t of e) t.container = this.parent;
	}
}, o(uM, "CstNodeContainer"), uM), fM, pM = (fM = class extends lM {
	get text() {
		return this._text.substring(this.offset, this.end);
	}
	get fullText() {
		return this._text;
	}
	constructor(e) {
		super(), this._text = "", this._text = e ?? "";
	}
}, o(fM, "RootCstNodeImpl"), fM), mM = /* @__PURE__ */ Symbol("Datatype");
function hM(e) {
	return e.$type === mM;
}
o(hM, "isDataTypeNode");
var gM = "​", _M = /* @__PURE__ */ o((e) => e.endsWith(gM) ? e : e + gM, "withRuleSuffix"), vM, yM = (vM = class {
	constructor(e) {
		this._unorderedGroups = /* @__PURE__ */ new Map(), this.allRules = /* @__PURE__ */ new Map(), this.lexer = e.parser.Lexer;
		let t = this.lexer.definition, n = e.LanguageMetaData.mode === "production";
		this.wrapper = e.shared.profilers.LangiumProfiler?.isActive("parsing") ? new MM(t, {
			...e.parser.ParserConfig,
			skipValidations: n,
			errorMessageProvider: e.parser.ParserErrorMessageProvider
		}, e.shared.profilers.LangiumProfiler.createTask("parsing", e.LanguageMetaData.languageId)) : new AM(t, {
			...e.parser.ParserConfig,
			skipValidations: n,
			errorMessageProvider: e.parser.ParserErrorMessageProvider
		});
	}
	alternatives(e, t) {
		this.wrapper.wrapOr(e, t);
	}
	optional(e, t) {
		this.wrapper.wrapOption(e, t);
	}
	many(e, t) {
		this.wrapper.wrapMany(e, t);
	}
	atLeastOne(e, t) {
		this.wrapper.wrapAtLeastOne(e, t);
	}
	getRule(e) {
		return this.allRules.get(e);
	}
	isRecording() {
		return this.wrapper.IS_RECORDING;
	}
	get unorderedGroups() {
		return this._unorderedGroups;
	}
	getRuleStack() {
		return this.wrapper.RULE_STACK;
	}
	finalize() {
		this.wrapper.wrapSelfAnalysis();
	}
}, o(vM, "AbstractLangiumParser"), vM), bM, xM = (bM = class extends yM {
	get current() {
		return this.stack[this.stack.length - 1];
	}
	constructor(e) {
		super(e), this.nodeBuilder = new rM(), this.stack = [], this.assignmentMap = /* @__PURE__ */ new Map(), this.operatorPrecedence = /* @__PURE__ */ new Map(), this.linker = e.references.Linker, this.converter = e.parser.ValueConverter, this.astReflection = e.shared.AstReflection;
	}
	rule(e, t) {
		let n = this.computeRuleType(e), r;
		kr(e) && (r = e.name, this.registerPrecedenceMap(e));
		let i = this.wrapper.DEFINE_RULE(_M(e.name), this.startImplementation(n, r, t).bind(this));
		return this.allRules.set(e.name, i), Zr(e) && e.entry && (this.mainRule = i), i;
	}
	registerPrecedenceMap(e) {
		let t = e.name, n = /* @__PURE__ */ new Map();
		for (let t = 0; t < e.operators.precedences.length; t++) {
			let r = e.operators.precedences[t];
			for (let e of r.operators) n.set(e.value, {
				precedence: t,
				rightAssoc: r.associativity === "right"
			});
		}
		this.operatorPrecedence.set(t, n);
	}
	computeRuleType(e) {
		return kr(e) ? lo(e) : e.fragment ? void 0 : io(e) ? mM : lo(e);
	}
	parse(e, t = {}) {
		this.nodeBuilder.buildRootNode(e);
		let n = this.lexerResult = this.lexer.tokenize(e);
		this.wrapper.input = n.tokens;
		let r = t.rule ? this.allRules.get(t.rule) : this.mainRule;
		if (!r) throw Error(t.rule ? `No rule found with name '${t.rule}'` : "No main rule available.");
		let i = this.doParse(r);
		return this.nodeBuilder.addHiddenNodes(n.hidden), this.unorderedGroups.clear(), this.lexerResult = void 0, En(i, { deep: !0 }), {
			value: i,
			lexerErrors: n.errors,
			lexerReport: n.report,
			parserErrors: this.wrapper.errors
		};
	}
	doParse(e) {
		let t = this.wrapper.rule(e);
		if (this.stack.length > 0 && (t = this.construct()), t === void 0) throw Error("No result from parser");
		if (this.stack.length > 0) throw Error("Parser stack is not empty after parsing");
		return t;
	}
	startImplementation(e, t, n) {
		return (r) => {
			let i = !this.isRecording() && e !== void 0;
			if (i) {
				let n = { $type: e };
				this.stack.push(n), e === mM ? n.value = "" : t !== void 0 && (n.$infixName = t);
			}
			return n(r), i ? this.construct() : void 0;
		};
	}
	extractHiddenTokens(e) {
		let t = this.lexerResult.hidden;
		if (!t.length) return [];
		let n = e.startOffset;
		for (let e = 0; e < t.length; e++) if (t[e].startOffset > n) return t.splice(0, e);
		return t.splice(0, t.length);
	}
	consume(e, t, n) {
		let r = this.wrapper.wrapConsume(e, t);
		if (!this.isRecording() && this.isValidToken(r)) {
			let e = this.extractHiddenTokens(r);
			this.nodeBuilder.addHiddenNodes(e);
			let t = this.nodeBuilder.buildLeafNode(r, n), { assignment: i, crossRef: a } = this.getAssignment(n), o = this.current;
			if (i) {
				let e = Lr(n) ? r.image : this.converter.convert(r.image, t);
				this.assign(i.operator, i.feature, e, t, a);
			} else if (hM(o)) {
				let e = r.image;
				Lr(n) || (e = this.converter.convert(e, t).toString()), o.value += e;
			}
		}
	}
	isValidToken(e) {
		return !e.isInsertedInRecovery && !isNaN(e.startOffset) && typeof e.endOffset == "number" && !isNaN(e.endOffset);
	}
	subrule(e, t, n, r, i) {
		let a;
		!this.isRecording() && !n && (a = this.nodeBuilder.buildCompositeNode(r));
		let o;
		try {
			o = this.wrapper.wrapSubrule(e, t, i);
		} finally {
			this.isRecording() || (o === void 0 && !n && (o = this.construct()), o !== void 0 && a && a.length > 0 && this.performSubruleAssignment(o, r, a));
		}
	}
	performSubruleAssignment(e, t, n) {
		let { assignment: r, crossRef: i } = this.getAssignment(t);
		if (r) this.assign(r.operator, r.feature, e, n, i);
		else if (!r) {
			let t = this.current;
			if (hM(t)) t.value += e.toString();
			else if (typeof e == "object" && e) {
				let n = this.assignWithoutOverride(e, t);
				this.stack.pop(), this.stack.push(n);
			}
		}
	}
	action(e, t) {
		if (!this.isRecording()) {
			let n = this.current;
			if (t.feature && t.operator) {
				n = this.construct(), this.nodeBuilder.removeNode(n.$cstNode), this.nodeBuilder.buildCompositeNode(t).content.push(n.$cstNode);
				let r = { $type: e };
				this.stack.push(r), this.assign(t.operator, t.feature, n, n.$cstNode);
			} else n.$type = e;
		}
	}
	construct() {
		if (this.isRecording()) return;
		let e = this.stack.pop();
		return this.nodeBuilder.construct(e), "$infixName" in e ? this.constructInfix(e, this.operatorPrecedence.get(e.$infixName)) : hM(e) ? this.converter.convert(e.value, e.$cstNode) : (Ln(this.astReflection, e), e);
	}
	constructInfix(e, t) {
		let n = e.parts;
		if (!Array.isArray(n) || n.length === 0) return;
		let r = e.operators;
		if (!Array.isArray(r) || n.length < 2) return n[0];
		let i = 0, a = -1;
		for (let e = 0; e < r.length; e++) {
			let n = r[e], o = t.get(n) ?? {
				precedence: 1 / 0,
				rightAssoc: !1
			};
			o.precedence > a ? (a = o.precedence, i = e) : o.precedence === a && (o.rightAssoc || (i = e));
		}
		let o = r.slice(0, i), s = r.slice(i + 1), c = n.slice(0, i + 1), l = n.slice(i + 1), u = {
			$infixName: e.$infixName,
			$type: e.$type,
			$cstNode: e.$cstNode,
			parts: c,
			operators: o
		}, d = {
			$infixName: e.$infixName,
			$type: e.$type,
			$cstNode: e.$cstNode,
			parts: l,
			operators: s
		}, f = this.constructInfix(u, t), p = this.constructInfix(d, t);
		return {
			$type: e.$type,
			$cstNode: e.$cstNode,
			left: f,
			operator: r[i],
			right: p
		};
	}
	getAssignment(e) {
		if (!this.assignmentMap.has(e)) {
			let t = Dn(e, ar);
			this.assignmentMap.set(e, {
				assignment: t,
				crossRef: t && hr(t.terminal) ? t.terminal.isMulti ? "multi" : "single" : void 0
			});
		}
		return this.assignmentMap.get(e);
	}
	assign(e, t, n, r, i) {
		let a = this.current, o;
		switch (o = i === "single" && typeof n == "string" ? this.linker.buildReference(a, t, r, n) : i === "multi" && typeof n == "string" ? this.linker.buildMultiReference(a, t, r, n) : n, e) {
			case "=":
				a[t] = o;
				break;
			case "?=":
				a[t] = !0;
				break;
			case "+=": Array.isArray(a[t]) || (a[t] = []), a[t].push(o);
		}
	}
	assignWithoutOverride(e, t) {
		for (let [n, r] of Object.entries(t)) {
			let t = e[n];
			t === void 0 ? e[n] = r : Array.isArray(t) && Array.isArray(r) && (r.push(...t), e[n] = r);
		}
		let n = e.$cstNode;
		return n && (n.astNode = void 0, e.$cstNode = void 0), e;
	}
	get definitionErrors() {
		return this.wrapper.definitionErrors;
	}
}, o(bM, "LangiumParser"), bM), SM, CM = (SM = class {
	buildMismatchTokenMessage(e) {
		return Eb.buildMismatchTokenMessage(e);
	}
	buildNotAllInputParsedMessage(e) {
		return Eb.buildNotAllInputParsedMessage(e);
	}
	buildNoViableAltMessage(e) {
		return Eb.buildNoViableAltMessage(e);
	}
	buildEarlyExitMessage(e) {
		return Eb.buildEarlyExitMessage(e);
	}
}, o(SM, "AbstractParserErrorMessageProvider"), SM), wM, TM = (wM = class extends CM {
	buildMismatchTokenMessage({ expected: e, actual: t }) {
		return `Expecting ${e.LABEL ? "`" + e.LABEL + "`" : e.name.endsWith(":KW") ? `keyword '${e.name.substring(0, e.name.length - 3)}'` : `token of type '${e.name}'`} but found \`${t.image}\`.`;
	}
	buildNotAllInputParsedMessage({ firstRedundant: e }) {
		return `Expecting end of file but found \`${e.image}\`.`;
	}
}, o(wM, "LangiumParserErrorMessageProvider"), wM), EM, DM = (EM = class extends yM {
	constructor() {
		super(...arguments), this.tokens = [], this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
	}
	action() {}
	construct() {}
	parse(e) {
		this.resetState();
		let t = this.lexer.tokenize(e, { mode: "partial" });
		return this.tokens = t.tokens, this.wrapper.input = [...this.tokens], this.mainRule.call(this.wrapper, {}), this.unorderedGroups.clear(), {
			tokens: this.tokens,
			elementStack: [...this.lastElementStack],
			tokenIndex: this.nextTokenIndex
		};
	}
	rule(e, t) {
		let n = this.wrapper.DEFINE_RULE(_M(e.name), this.startImplementation(t).bind(this));
		return this.allRules.set(e.name, n), e.entry && (this.mainRule = n), n;
	}
	resetState() {
		this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
	}
	startImplementation(e) {
		return (t) => {
			let n = this.keepStackSize();
			try {
				e(t);
			} finally {
				this.resetStackSize(n);
			}
		};
	}
	removeUnexpectedElements() {
		this.elementStack.splice(this.stackSize);
	}
	keepStackSize() {
		let e = this.elementStack.length;
		return this.stackSize = e, e;
	}
	resetStackSize(e) {
		this.removeUnexpectedElements(), this.stackSize = e;
	}
	consume(e, t, n) {
		this.wrapper.wrapConsume(e, t), this.isRecording() || (this.lastElementStack = [...this.elementStack, n], this.nextTokenIndex = this.currIdx + 1);
	}
	subrule(e, t, n, r, i) {
		this.before(r), this.wrapper.wrapSubrule(e, t, i), this.after(r);
	}
	before(e) {
		this.isRecording() || this.elementStack.push(e);
	}
	after(e) {
		if (!this.isRecording()) {
			let t = this.elementStack.lastIndexOf(e);
			t >= 0 && this.elementStack.splice(t);
		}
	}
	get currIdx() {
		return this.wrapper.currIdx;
	}
}, o(EM, "LangiumCompletionParser"), EM), OM = {
	recoveryEnabled: !0,
	nodeLocationTracking: "full",
	skipValidations: !0,
	errorMessageProvider: new TM()
}, kM, AM = (kM = class extends gC {
	constructor(e, t) {
		let n = t && "maxLookahead" in t;
		super(e, {
			...OM,
			lookaheadStrategy: n ? new _S({ maxLookahead: t.maxLookahead }) : new Aj({ logging: t.skipValidations ? () => {} : void 0 }),
			...t
		});
	}
	get IS_RECORDING() {
		return this.RECORDING_PHASE;
	}
	DEFINE_RULE(e, t, n) {
		return this.RULE(e, t, n);
	}
	wrapSelfAnalysis() {
		this.performSelfAnalysis();
	}
	wrapConsume(e, t) {
		return this.consume(e, t, void 0);
	}
	wrapSubrule(e, t, n) {
		return this.subrule(e, t, { ARGS: [n] });
	}
	wrapOr(e, t) {
		this.or(e, t);
	}
	wrapOption(e, t) {
		this.option(e, t);
	}
	wrapMany(e, t) {
		this.many(e, t);
	}
	wrapAtLeastOne(e, t) {
		this.atLeastOne(e, t);
	}
	rule(e) {
		return e.call(this, {});
	}
}, o(kM, "ChevrotainWrapper"), kM), jM, MM = (jM = class extends AM {
	constructor(e, t, n) {
		super(e, t), this.task = n;
	}
	rule(e) {
		this.task.start(), this.task.startSubTask(this.ruleName(e));
		try {
			return super.rule(e);
		} finally {
			this.task.stopSubTask(this.ruleName(e)), this.task.stop();
		}
	}
	ruleName(e) {
		return e.ruleName;
	}
	subrule(e, t, n) {
		this.task.startSubTask(this.ruleName(t));
		try {
			return super.subrule(e, t, n);
		} finally {
			this.task.stopSubTask(this.ruleName(t));
		}
	}
}, o(jM, "ProfilerWrapper"), jM);
function NM(e, t, n) {
	return PM({
		parser: t,
		tokens: n,
		ruleNames: /* @__PURE__ */ new Map()
	}, e), t;
}
o(NM, "createParser");
function PM(e, t) {
	let n = Ba(t, !1), r = P(t.rules).filter(Zr).filter((e) => n.has(e));
	for (let t of r) {
		let n = {
			...e,
			consume: 1,
			optional: 1,
			subrule: 1,
			many: 1,
			or: 1
		};
		e.parser.rule(t, IM(n, t.definition));
	}
	let i = P(t.rules).filter(kr).filter((e) => n.has(e));
	for (let t of i) e.parser.rule(t, FM(e, t));
}
o(PM, "buildRules");
function FM(e, t) {
	let n = t.call.rule.ref;
	if (!n) throw Error("Could not resolve reference to infix operator rule: " + t.call.rule.$refText);
	if (_i(n)) throw Error("Cannot use terminal rule in infix expression");
	let r = t.operators.precedences.flatMap((e) => e.operators), i = {
		$type: "Group",
		elements: []
	}, a = {
		$container: i,
		$type: "Assignment",
		feature: "parts",
		operator: "+=",
		terminal: t.call
	}, s = {
		$container: i,
		$type: "Group",
		elements: [],
		cardinality: "*"
	};
	i.elements.push(a, s);
	let c = {
		$container: s,
		$type: "Assignment",
		feature: "operators",
		operator: "+=",
		terminal: {
			$type: "Alternatives",
			elements: r
		}
	}, l = {
		...a,
		$container: s
	};
	s.elements.push(c, l);
	let u = r.map((t) => e.tokens[t.value]).map((t, n) => ({ ALT: /* @__PURE__ */ o(() => e.parser.consume(n, t, c), "ALT") })), d;
	return (t) => {
		d ??= JM(e, n), e.parser.subrule(0, d, !1, a, t), e.parser.many(0, { DEF: /* @__PURE__ */ o(() => {
			e.parser.alternatives(0, u), e.parser.subrule(1, d, !1, l, t);
		}, "DEF") });
	};
}
o(FM, "buildInfixRule");
function IM(e, t, n = !1) {
	let r;
	if (Lr(t)) r = KM(e, t);
	else if (Zn(t)) r = LM(e, t);
	else if (ar(t)) r = IM(e, t.terminal);
	else if (hr(t)) r = GM(e, t);
	else if (ai(t)) r = RM(e, t);
	else if ($n(t)) r = VM(e, t);
	else if (ki(t)) r = HM(e, t);
	else if (Tr(t)) r = UM(e, t);
	else if (yr(t)) {
		let n = e.consume++;
		r = /* @__PURE__ */ o(() => e.parser.consume(n, Cb, t), "method");
	} else throw new ca(t.$cstNode, `Unexpected element type: ${t.$type}`);
	return qM(e, n ? void 0 : WM(t), r, t.cardinality);
}
o(IM, "buildElement");
function LM(e, t) {
	let n = lo(t);
	return () => e.parser.action(n, t);
}
o(LM, "buildAction");
function RM(e, t) {
	let n = t.rule.ref;
	if (Gn(n)) {
		let r = e.subrule++, i = Zr(n) && n.fragment, a = t.arguments.length > 0 ? zM(n, t.arguments) : () => ({}), o;
		return (s) => {
			o ??= JM(e, n), e.parser.subrule(r, o, i, t, a(s));
		};
	}
	if (_i(n)) {
		let r = e.consume++, i = XM(e, n.name);
		return () => e.parser.consume(r, i, t);
	}
	if (n) la();
	else throw new ca(t.$cstNode, `Undefined rule: ${t.rule.$refText}`);
}
o(RM, "buildRuleCall");
function zM(e, t) {
	if (t.some((e) => e.calledByName)) {
		let e = t.map((e) => ({
			parameterName: e.parameter?.ref?.name,
			predicate: BM(e.value)
		}));
		return (t) => {
			let n = {};
			for (let { parameterName: r, predicate: i } of e) r && (n[r] = i(t));
			return n;
		};
	}
	{
		let n = t.map((e) => BM(e.value));
		return (t) => {
			let r = {};
			for (let i = 0; i < n.length; i++) if (i < e.parameters.length) {
				let a = e.parameters[i].name, o = n[i];
				r[a] = o(t);
			}
			return r;
		};
	}
}
o(zM, "buildRuleCallPredicate");
function BM(e) {
	if (_r(e)) {
		let t = BM(e.left), n = BM(e.right);
		return (e) => t(e) || n(e);
	}
	if (pr(e)) {
		let t = BM(e.left), n = BM(e.right);
		return (e) => t(e) && n(e);
	}
	if (Ur(e)) {
		let t = BM(e.value);
		return (e) => !t(e);
	}
	if (Yr(e)) {
		let t = e.parameter.ref.name;
		return (e) => e !== void 0 && e[t] === !0;
	}
	if (sr(e)) {
		let t = !!e.true;
		return () => t;
	}
	la();
}
o(BM, "buildPredicate");
function VM(e, t) {
	if (t.elements.length === 1) return IM(e, t.elements[0]);
	{
		let n = [];
		for (let r of t.elements) {
			let t = { ALT: IM(e, r, !0) }, i = WM(r);
			i && (t.GATE = BM(i)), n.push(t);
		}
		let r = e.or++;
		return (t) => e.parser.alternatives(r, n.map((e) => {
			let n = { ALT: /* @__PURE__ */ o(() => e.ALT(t), "ALT") }, r = e.GATE;
			return r && (n.GATE = () => r(t)), n;
		}));
	}
}
o(VM, "buildAlternatives");
function HM(e, t) {
	if (t.elements.length === 1) return IM(e, t.elements[0]);
	let n = [];
	for (let r of t.elements) {
		let t = { ALT: IM(e, r, !0) }, i = WM(r);
		i && (t.GATE = BM(i)), n.push(t);
	}
	let r = e.or++, i = /* @__PURE__ */ o((e, t) => `uGroup_${e}_${t.getRuleStack().join("-")}`, "idFunc"), a = /* @__PURE__ */ o((t) => e.parser.alternatives(r, n.map((n, a) => {
		let s = { ALT: /* @__PURE__ */ o(() => !0, "ALT") }, c = e.parser;
		s.ALT = () => {
			if (n.ALT(t), !c.isRecording()) {
				let e = i(r, c);
				c.unorderedGroups.get(e) || c.unorderedGroups.set(e, []);
				let t = c.unorderedGroups.get(e);
				typeof t?.[a] > "u" && (t[a] = !0);
			}
		};
		let l = n.GATE;
		return s.GATE = l ? () => l(t) : () => !c.unorderedGroups.get(i(r, c))?.[a], s;
	})), "alternatives"), s = qM(e, WM(t), a, "*");
	return (t) => {
		s(t), e.parser.isRecording() || e.parser.unorderedGroups.delete(i(r, e.parser));
	};
}
o(HM, "buildUnorderedGroup");
function UM(e, t) {
	let n = t.elements.map((t) => IM(e, t));
	return (e) => n.forEach((t) => t(e));
}
o(UM, "buildGroup");
function WM(e) {
	if (Tr(e)) return e.guardCondition;
}
o(WM, "getGuardCondition");
function GM(e, t, n = t.terminal) {
	if (n) {
		if (ai(n) && Zr(n.rule.ref)) {
			let r = n.rule.ref, i = e.subrule++, a;
			return (n) => {
				a ??= JM(e, r), e.parser.subrule(i, a, !1, t, n);
			};
		}
		if (ai(n) && _i(n.rule.ref)) {
			let r = e.consume++, i = XM(e, n.rule.ref.name);
			return () => e.parser.consume(r, i, t);
		}
		if (Lr(n)) {
			let r = e.consume++, i = XM(e, n.value);
			return () => e.parser.consume(r, i, t);
		}
		throw Error("Could not build cross reference parser");
	}
	{
		if (!t.type.ref) throw Error("Could not resolve reference to type: " + t.type.$refText);
		let n = Qa(t.type.ref)?.terminal;
		if (!n) throw Error("Could not find name assignment for type: " + lo(t.type.ref));
		return GM(e, t, n);
	}
}
o(GM, "buildCrossReference");
function KM(e, t) {
	let n = e.consume++, r = e.tokens[t.value];
	if (!r) throw Error("Could not find token for keyword: " + t.value);
	return () => e.parser.consume(n, r, t);
}
o(KM, "buildKeyword");
function qM(e, t, n, r) {
	let i = t && BM(t);
	if (!r) {
		if (i) {
			let t = e.or++;
			return (r) => e.parser.alternatives(t, [{
				ALT: /* @__PURE__ */ o(() => n(r), "ALT"),
				GATE: /* @__PURE__ */ o(() => i(r), "GATE")
			}, {
				ALT: fC(),
				GATE: /* @__PURE__ */ o(() => !i(r), "GATE")
			}]);
		}
		return n;
	}
	if (r === "*") {
		let t = e.many++;
		return (r) => e.parser.many(t, {
			DEF: /* @__PURE__ */ o(() => n(r), "DEF"),
			GATE: i ? () => i(r) : void 0
		});
	}
	if (r === "+") {
		let t = e.many++;
		if (i) {
			let r = e.or++;
			return (a) => e.parser.alternatives(r, [{
				ALT: /* @__PURE__ */ o(() => e.parser.atLeastOne(t, { DEF: /* @__PURE__ */ o(() => n(a), "DEF") }), "ALT"),
				GATE: /* @__PURE__ */ o(() => i(a), "GATE")
			}, {
				ALT: fC(),
				GATE: /* @__PURE__ */ o(() => !i(a), "GATE")
			}]);
		}
		return (r) => e.parser.atLeastOne(t, { DEF: /* @__PURE__ */ o(() => n(r), "DEF") });
	}
	if (r === "?") {
		let t = e.optional++;
		return (r) => e.parser.optional(t, {
			DEF: /* @__PURE__ */ o(() => n(r), "DEF"),
			GATE: i ? () => i(r) : void 0
		});
	}
	la();
}
o(qM, "wrap");
function JM(e, t) {
	let n = YM(e, t), r = e.parser.getRule(n);
	if (!r) throw Error(`Rule "${n}" not found."`);
	return r;
}
o(JM, "getRule");
function YM(e, t) {
	if (Gn(t)) return t.name;
	if (e.ruleNames.has(t)) return e.ruleNames.get(t);
	{
		let n = t, r = n.$container, i = t.$type;
		for (; !Zr(r);) (Tr(r) || $n(r) || ki(r)) && (i = r.elements.indexOf(n).toString() + ":" + i), n = r, r = r.$container;
		return i = r.name + ":" + i, e.ruleNames.set(t, i), i;
	}
}
o(YM, "getRuleName");
function XM(e, t) {
	let n = e.tokens[t];
	if (!n) throw Error(`Token "${t}" not found."`);
	return n;
}
o(XM, "getToken");
function ZM(e) {
	let t = e.Grammar, n = e.parser.Lexer, r = new DM(e);
	return NM(t, r, n.definition), r.finalize(), r;
}
o(ZM, "createCompletionParser");
function QM(e) {
	let t = $M(e);
	return t.finalize(), t;
}
o(QM, "createLangiumParser");
function $M(e) {
	let t = e.Grammar, n = e.parser.Lexer;
	return NM(t, new xM(e), n.definition);
}
o($M, "prepareLangiumParser");
var eN, tN = (eN = class {
	constructor() {
		this.diagnostics = [];
	}
	buildTokens(e, t) {
		let n = P(Ba(e, !1)), r = this.buildTerminalTokens(n), i = this.buildKeywordTokens(n, r, t);
		return i.push(...r), i;
	}
	flushLexingReport(e) {
		return { diagnostics: this.popDiagnostics() };
	}
	popDiagnostics() {
		let e = [...this.diagnostics];
		return this.diagnostics = [], e;
	}
	buildTerminalTokens(e) {
		return e.filter(_i).filter((e) => !e.fragment).map((e) => this.buildTerminalToken(e)).toArray();
	}
	buildTerminalToken(e) {
		let t = mo(e), n = this.requiresCustomPattern(t) ? this.regexPatternFunction(t) : t, r = {
			name: e.name,
			PATTERN: n
		};
		return typeof n == "function" && (r.LINE_BREAKS = !0), e.hidden && (r.GROUP = Pa(t) ? lb.SKIPPED : "hidden"), r;
	}
	requiresCustomPattern(e) {
		return !!(e.flags.includes("u") || e.flags.includes("s"));
	}
	regexPatternFunction(e) {
		let t = new RegExp(e, e.flags + "y");
		return (e, n) => (t.lastIndex = n, t.exec(e));
	}
	buildKeywordTokens(e, t, n) {
		return e.filter(Gn).flatMap((e) => Nn(e).filter(Lr)).distinct((e) => e.value).toArray().sort((e, t) => t.value.length - e.value.length).map((e) => this.buildKeywordToken(e, t, !!n?.caseInsensitive));
	}
	buildKeywordToken(e, t, n) {
		let r = this.buildKeywordPattern(e, n), i = {
			name: e.value,
			PATTERN: r,
			LONGER_ALT: this.findLongerAlt(e, t)
		};
		return typeof r == "function" && (i.LINE_BREAKS = !0), i;
	}
	buildKeywordPattern(e, t) {
		return t ? new RegExp(Fa(e.value), "i") : e.value;
	}
	findLongerAlt(e, t) {
		return t.reduce((t, n) => {
			let r = n?.PATTERN;
			return r?.source && Ia("^" + r.source + "$", e.value) && t.push(n), t;
		}, []);
	}
}, o(eN, "DefaultTokenBuilder"), eN), nN, rN = (nN = class {
	convert(e, t) {
		let n = t.grammarSource;
		if (hr(n) && (n = Ua(n)), ai(n)) {
			let r = n.rule.ref;
			if (!r) throw Error("This cst node was not parsed by a rule.");
			return this.runConverter(r, e, t);
		}
		return e;
	}
	runConverter(e, t, n) {
		switch (e.name.toUpperCase()) {
			case "INT": return iN.convertInt(t);
			case "STRING": return iN.convertString(t);
			case "ID": return iN.convertID(t);
		}
		switch (po(e)?.toLowerCase()) {
			case "number": return iN.convertNumber(t);
			case "boolean": return iN.convertBoolean(t);
			case "bigint": return iN.convertBigint(t);
			case "date": return iN.convertDate(t);
			default: return t;
		}
	}
}, o(nN, "DefaultValueConverter"), nN), iN;
(function(e) {
	function t(e) {
		let t = "";
		for (let r = 1; r < e.length - 1; r++) {
			let i = e.charAt(r);
			if (i === "\\") {
				let i = e.charAt(++r);
				t += n(i);
			} else t += i;
		}
		return t;
	}
	o(t, "convertString"), e.convertString = t;
	function n(e) {
		switch (e) {
			case "b": return "\b";
			case "f": return "\f";
			case "n": return "\n";
			case "r": return "\r";
			case "t": return "	";
			case "v": return "\v";
			case "0": return "\0";
			default: return e;
		}
	}
	o(n, "convertEscapeCharacter");
	function r(e) {
		return e.charAt(0) === "^" ? e.substring(1) : e;
	}
	o(r, "convertID"), e.convertID = r;
	function i(e) {
		return parseInt(e);
	}
	o(i, "convertInt"), e.convertInt = i;
	function a(e) {
		return BigInt(e);
	}
	o(a, "convertBigint"), e.convertBigint = a;
	function s(e) {
		return new Date(e);
	}
	o(s, "convertDate"), e.convertDate = s;
	function c(e) {
		return Number(e);
	}
	o(c, "convertNumber"), e.convertNumber = c;
	function l(e) {
		return e.toLowerCase() === "true";
	}
	o(l, "convertBoolean"), e.convertBoolean = l;
})(iN ||= {});
var X = {};
d(X, f(_t()));
function aN() {
	return new Promise((e) => {
		typeof setImmediate > "u" ? setTimeout(e, 0) : setImmediate(e);
	});
}
o(aN, "delayNextTick");
var oN = 0, sN = 10;
function cN() {
	return oN = performance.now(), new X.CancellationTokenSource();
}
o(cN, "startCancelableOperation");
function lN(e) {
	sN = e;
}
o(lN, "setInterruptionPeriod");
var uN = /* @__PURE__ */ Symbol("OperationCancelled");
function dN(e) {
	return e === uN;
}
o(dN, "isOperationCancelled");
async function fN(e) {
	if (e === X.CancellationToken.None) return;
	let t = performance.now();
	if (t - oN >= sN && (oN = t, await aN(), oN = performance.now()), e.isCancellationRequested) throw uN;
}
o(fN, "interruptAndCheck");
var pN, mN = (pN = class {
	constructor() {
		this.promise = new Promise((e, t) => {
			this.resolve = (t) => (e(t), this), this.reject = (e) => (t(e), this);
		});
	}
}, o(pN, "Deferred"), pN), hN, gN = (hN = class {
	constructor(e, t, n, r) {
		this._uri = e, this._languageId = t, this._version = n, this._content = r, this._lineOffsets = void 0;
	}
	get uri() {
		return this._uri;
	}
	get languageId() {
		return this._languageId;
	}
	get version() {
		return this._version;
	}
	getText(e) {
		if (e) {
			let t = this.offsetAt(e.start), n = this.offsetAt(e.end);
			return this._content.substring(t, n);
		}
		return this._content;
	}
	update(e, t) {
		for (let t of e) if (hN.isIncremental(t)) {
			let e = xN(t.range), n = this.offsetAt(e.start), r = this.offsetAt(e.end);
			this._content = this._content.substring(0, n) + t.text + this._content.substring(r, this._content.length);
			let i = Math.max(e.start.line, 0), a = Math.max(e.end.line, 0), o = this._lineOffsets, s = yN(t.text, !1, n);
			if (a - i === s.length) for (let e = 0, t = s.length; e < t; e++) o[e + i + 1] = s[e];
			else s.length < 1e4 ? o.splice(i + 1, a - i, ...s) : this._lineOffsets = o = o.slice(0, i + 1).concat(s, o.slice(a + 1));
			let c = t.text.length - (r - n);
			if (c !== 0) for (let e = i + 1 + s.length, t = o.length; e < t; e++) o[e] = o[e] + c;
		} else if (hN.isFull(t)) this._content = t.text, this._lineOffsets = void 0;
		else throw Error("Unknown change event received");
		this._version = t;
	}
	getLineOffsets() {
		return this._lineOffsets === void 0 && (this._lineOffsets = yN(this._content, !0)), this._lineOffsets;
	}
	positionAt(e) {
		e = Math.max(Math.min(e, this._content.length), 0);
		let t = this.getLineOffsets(), n = 0, r = t.length;
		if (r === 0) return {
			line: 0,
			character: e
		};
		for (; n < r;) {
			let i = Math.floor((n + r) / 2);
			t[i] > e ? r = i : n = i + 1;
		}
		let i = n - 1;
		return e = this.ensureBeforeEOL(e, t[i]), {
			line: i,
			character: e - t[i]
		};
	}
	offsetAt(e) {
		let t = this.getLineOffsets();
		if (e.line >= t.length) return this._content.length;
		if (e.line < 0) return 0;
		let n = t[e.line];
		if (e.character <= 0) return n;
		let r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length, i = Math.min(n + e.character, r);
		return this.ensureBeforeEOL(i, n);
	}
	ensureBeforeEOL(e, t) {
		for (; e > t && bN(this._content.charCodeAt(e - 1));) e--;
		return e;
	}
	get lineCount() {
		return this.getLineOffsets().length;
	}
	static isIncremental(e) {
		let t = e;
		return t != null && typeof t.text == "string" && t.range !== void 0 && (t.rangeLength === void 0 || typeof t.rangeLength == "number");
	}
	static isFull(e) {
		let t = e;
		return t != null && typeof t.text == "string" && t.range === void 0 && t.rangeLength === void 0;
	}
}, o(hN, "FullTextDocument"), hN), _N;
(function(e) {
	function t(e, t, n, r) {
		return new gN(e, t, n, r);
	}
	o(t, "create"), e.create = t;
	function n(e, t, n) {
		if (e instanceof gN) return e.update(t, n), e;
		throw Error("TextDocument.update: document must be created by TextDocument.create");
	}
	o(n, "update"), e.update = n;
	function r(e, t) {
		let n = e.getText(), r = vN(t.map(SN), (e, t) => {
			let n = e.range.start.line - t.range.start.line;
			return n === 0 ? e.range.start.character - t.range.start.character : n;
		}), i = 0, a = [];
		for (let t of r) {
			let r = e.offsetAt(t.range.start);
			if (r < i) throw Error("Overlapping edit");
			r > i && a.push(n.substring(i, r)), t.newText.length && a.push(t.newText), i = e.offsetAt(t.range.end);
		}
		return a.push(n.substr(i)), a.join("");
	}
	o(r, "applyEdits"), e.applyEdits = r;
})(_N ||= {});
function vN(e, t) {
	if (e.length <= 1) return e;
	let n = e.length / 2 | 0, r = e.slice(0, n), i = e.slice(n);
	vN(r, t), vN(i, t);
	let a = 0, o = 0, s = 0;
	for (; a < r.length && o < i.length;) t(r[a], i[o]) <= 0 ? e[s++] = r[a++] : e[s++] = i[o++];
	for (; a < r.length;) e[s++] = r[a++];
	for (; o < i.length;) e[s++] = i[o++];
	return e;
}
o(vN, "mergeSort");
function yN(e, t, n = 0) {
	let r = t ? [n] : [];
	for (let t = 0; t < e.length; t++) {
		let i = e.charCodeAt(t);
		bN(i) && (i === 13 && t + 1 < e.length && e.charCodeAt(t + 1) === 10 && t++, r.push(n + t + 1));
	}
	return r;
}
o(yN, "computeLineOffsets");
function bN(e) {
	return e === 13 || e === 10;
}
o(bN, "isEOL");
function xN(e) {
	let t = e.start, n = e.end;
	return t.line > n.line || t.line === n.line && t.character > n.character ? {
		start: n,
		end: t
	} : e;
}
o(xN, "getWellformedRange");
function SN(e) {
	let t = xN(e.range);
	return t === e.range ? e : {
		newText: e.newText,
		range: t
	};
}
o(SN, "getWellformedEdit");
var CN;
(() => {
	var e = { 975: (e) => {
		function t(e) {
			if (typeof e != "string") throw TypeError("Path must be a string. Received " + JSON.stringify(e));
		}
		o(t, "e");
		function n(e, t) {
			for (var n, r = "", i = 0, a = -1, o = 0, s = 0; s <= e.length; ++s) {
				if (s < e.length) n = e.charCodeAt(s);
				else {
					if (n === 47) break;
					n = 47;
				}
				if (n === 47) {
					if (a !== s - 1 && o !== 1) {
						if (a !== s - 1 && o === 2) {
							if (r.length < 2 || i !== 2 || r.charCodeAt(r.length - 1) !== 46 || r.charCodeAt(r.length - 2) !== 46) {
								if (r.length > 2) {
									var c = r.lastIndexOf("/");
									if (c !== r.length - 1) {
										c === -1 ? (r = "", i = 0) : i = (r = r.slice(0, c)).length - 1 - r.lastIndexOf("/"), a = s, o = 0;
										continue;
									}
								} else if (r.length === 2 || r.length === 1) {
									r = "", i = 0, a = s, o = 0;
									continue;
								}
							}
							t && (r.length > 0 ? r += "/.." : r = "..", i = 2);
						} else r.length > 0 ? r += "/" + e.slice(a + 1, s) : r = e.slice(a + 1, s), i = s - a - 1;
					}
					a = s, o = 0;
				} else n === 46 && o !== -1 ? ++o : o = -1;
			}
			return r;
		}
		o(n, "r");
		var r = {
			resolve: /* @__PURE__ */ o(function() {
				for (var e, r = "", i = !1, a = arguments.length - 1; a >= -1 && !i; a--) {
					var o;
					a >= 0 ? o = arguments[a] : (e === void 0 && (e = process.cwd()), o = e), t(o), o.length !== 0 && (r = o + "/" + r, i = o.charCodeAt(0) === 47);
				}
				return r = n(r, !i), i ? r.length > 0 ? "/" + r : "/" : r.length > 0 ? r : ".";
			}, "resolve"),
			normalize: /* @__PURE__ */ o(function(e) {
				if (t(e), e.length === 0) return ".";
				var r = e.charCodeAt(0) === 47, i = e.charCodeAt(e.length - 1) === 47;
				return (e = n(e, !r)).length !== 0 || r || (e = "."), e.length > 0 && i && (e += "/"), r ? "/" + e : e;
			}, "normalize"),
			isAbsolute: /* @__PURE__ */ o(function(e) {
				return t(e), e.length > 0 && e.charCodeAt(0) === 47;
			}, "isAbsolute"),
			join: /* @__PURE__ */ o(function() {
				if (arguments.length === 0) return ".";
				for (var e, n = 0; n < arguments.length; ++n) {
					var i = arguments[n];
					t(i), i.length > 0 && (e === void 0 ? e = i : e += "/" + i);
				}
				return e === void 0 ? "." : r.normalize(e);
			}, "join"),
			relative: /* @__PURE__ */ o(function(e, n) {
				if (t(e), t(n), e === n || (e = r.resolve(e)) === (n = r.resolve(n))) return "";
				for (var i = 1; i < e.length && e.charCodeAt(i) === 47; ++i);
				for (var a = e.length, o = a - i, s = 1; s < n.length && n.charCodeAt(s) === 47; ++s);
				for (var c = n.length - s, l = o < c ? o : c, u = -1, d = 0; d <= l; ++d) {
					if (d === l) {
						if (c > l) {
							if (n.charCodeAt(s + d) === 47) return n.slice(s + d + 1);
							if (d === 0) return n.slice(s + d);
						} else o > l && (e.charCodeAt(i + d) === 47 ? u = d : d === 0 && (u = 0));
						break;
					}
					var f = e.charCodeAt(i + d);
					if (f !== n.charCodeAt(s + d)) break;
					f === 47 && (u = d);
				}
				var p = "";
				for (d = i + u + 1; d <= a; ++d) d !== a && e.charCodeAt(d) !== 47 || (p.length === 0 ? p += ".." : p += "/..");
				return p.length > 0 ? p + n.slice(s + u) : (s += u, n.charCodeAt(s) === 47 && ++s, n.slice(s));
			}, "relative"),
			_makeLong: /* @__PURE__ */ o(function(e) {
				return e;
			}, "_makeLong"),
			dirname: /* @__PURE__ */ o(function(e) {
				if (t(e), e.length === 0) return ".";
				for (var n = e.charCodeAt(0), r = n === 47, i = -1, a = !0, o = e.length - 1; o >= 1; --o) if ((n = e.charCodeAt(o)) === 47) {
					if (!a) {
						i = o;
						break;
					}
				} else a = !1;
				return i === -1 ? r ? "/" : "." : r && i === 1 ? "//" : e.slice(0, i);
			}, "dirname"),
			basename: /* @__PURE__ */ o(function(e, n) {
				if (n !== void 0 && typeof n != "string") throw TypeError("\"ext\" argument must be a string");
				t(e);
				var r, i = 0, a = -1, o = !0;
				if (n !== void 0 && n.length > 0 && n.length <= e.length) {
					if (n.length === e.length && n === e) return "";
					var s = n.length - 1, c = -1;
					for (r = e.length - 1; r >= 0; --r) {
						var l = e.charCodeAt(r);
						if (l === 47) {
							if (!o) {
								i = r + 1;
								break;
							}
						} else c === -1 && (o = !1, c = r + 1), s >= 0 && (l === n.charCodeAt(s) ? --s == -1 && (a = r) : (s = -1, a = c));
					}
					return i === a ? a = c : a === -1 && (a = e.length), e.slice(i, a);
				}
				for (r = e.length - 1; r >= 0; --r) if (e.charCodeAt(r) === 47) {
					if (!o) {
						i = r + 1;
						break;
					}
				} else a === -1 && (o = !1, a = r + 1);
				return a === -1 ? "" : e.slice(i, a);
			}, "basename"),
			extname: /* @__PURE__ */ o(function(e) {
				t(e);
				for (var n = -1, r = 0, i = -1, a = !0, o = 0, s = e.length - 1; s >= 0; --s) {
					var c = e.charCodeAt(s);
					if (c !== 47) i === -1 && (a = !1, i = s + 1), c === 46 ? n === -1 ? n = s : o !== 1 && (o = 1) : n !== -1 && (o = -1);
					else if (!a) {
						r = s + 1;
						break;
					}
				}
				return n === -1 || i === -1 || o === 0 || o === 1 && n === i - 1 && n === r + 1 ? "" : e.slice(n, i);
			}, "extname"),
			format: /* @__PURE__ */ o(function(e) {
				if (typeof e != "object" || !e) throw TypeError("The \"pathObject\" argument must be of type Object. Received type " + typeof e);
				return function(e, t) {
					var n = t.dir || t.root, r = t.base || (t.name || "") + (t.ext || "");
					return n ? n === t.root ? n + r : n + "/" + r : r;
				}(0, e);
			}, "format"),
			parse: /* @__PURE__ */ o(function(e) {
				t(e);
				var n = {
					root: "",
					dir: "",
					base: "",
					ext: "",
					name: ""
				};
				if (e.length === 0) return n;
				var r, i = e.charCodeAt(0), a = i === 47;
				a ? (n.root = "/", r = 1) : r = 0;
				for (var o = -1, s = 0, c = -1, l = !0, u = e.length - 1, d = 0; u >= r; --u) if ((i = e.charCodeAt(u)) !== 47) c === -1 && (l = !1, c = u + 1), i === 46 ? o === -1 ? o = u : d !== 1 && (d = 1) : o !== -1 && (d = -1);
				else if (!l) {
					s = u + 1;
					break;
				}
				return o === -1 || c === -1 || d === 0 || d === 1 && o === c - 1 && o === s + 1 ? c !== -1 && (n.base = n.name = s === 0 && a ? e.slice(1, c) : e.slice(s, c)) : (s === 0 && a ? (n.name = e.slice(1, o), n.base = e.slice(1, c)) : (n.name = e.slice(s, o), n.base = e.slice(s, c)), n.ext = e.slice(o, c)), s > 0 ? n.dir = e.slice(0, s - 1) : a && (n.dir = "/"), n;
			}, "parse"),
			sep: "/",
			delimiter: ":",
			win32: null,
			posix: null
		};
		r.posix = r, e.exports = r;
	} }, t = {};
	function n(r) {
		var i = t[r];
		if (i !== void 0) return i.exports;
		var a = t[r] = { exports: {} };
		return e[r](a, a.exports, n), a.exports;
	}
	o(n, "r"), n.d = (e, t) => {
		for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
			enumerable: !0,
			get: t[r]
		});
	}, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = (e) => {
		typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
	};
	var r = {};
	let i;
	n.r(r), n.d(r, {
		URI: /* @__PURE__ */ o(() => f, "URI"),
		Utils: /* @__PURE__ */ o(() => w, "Utils")
	}), typeof process == "object" ? i = process.platform === "win32" : typeof navigator == "object" && (i = navigator.userAgent.indexOf("Windows") >= 0);
	let a = /^\w[\w\d+.-]*$/, s = /^\//, c = /^\/\//;
	function l(e, t) {
		if (!e.scheme && t) throw Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
		if (e.scheme && !a.test(e.scheme)) throw Error("[UriError]: Scheme contains illegal characters.");
		if (e.path) {
			if (e.authority) {
				if (!s.test(e.path)) throw Error("[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash (\"/\") character");
			} else if (c.test(e.path)) throw Error("[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters (\"//\")");
		}
	}
	o(l, "a");
	let u = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, d = class e {
		static isUri(t) {
			return t instanceof e || !!t && typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function";
		}
		scheme;
		authority;
		path;
		query;
		fragment;
		constructor(e, t, n, r, i, a = !1) {
			typeof e == "object" ? (this.scheme = e.scheme || "", this.authority = e.authority || "", this.path = e.path || "", this.query = e.query || "", this.fragment = e.fragment || "") : (this.scheme = /* @__PURE__ */ function(e, t) {
				return e || t ? e : "file";
			}(e, a), this.authority = t || "", this.path = function(e, t) {
				switch (e) {
					case "https":
					case "http":
					case "file": t ? t[0] !== "/" && (t = "/" + t) : t = "/";
				}
				return t;
			}(this.scheme, n || ""), this.query = r || "", this.fragment = i || "", l(this, a));
		}
		get fsPath() {
			return y(this, !1);
		}
		with(e) {
			if (!e) return this;
			let { scheme: t, authority: n, path: r, query: i, fragment: a } = e;
			return t === void 0 ? t = this.scheme : t === null && (t = ""), n === void 0 ? n = this.authority : n === null && (n = ""), r === void 0 ? r = this.path : r === null && (r = ""), i === void 0 ? i = this.query : i === null && (i = ""), a === void 0 ? a = this.fragment : a === null && (a = ""), t === this.scheme && n === this.authority && r === this.path && i === this.query && a === this.fragment ? this : new h(t, n, r, i, a);
		}
		static parse(e, t = !1) {
			let n = u.exec(e);
			return n ? new h(n[2] || "", S(n[4] || ""), S(n[5] || ""), S(n[7] || ""), S(n[9] || ""), t) : new h("", "", "", "", "");
		}
		static file(e) {
			let t = "";
			if (i && (e = e.replace(/\\/g, "/")), e[0] === "/" && e[1] === "/") {
				let n = e.indexOf("/", 2);
				n === -1 ? (t = e.substring(2), e = "/") : (t = e.substring(2, n), e = e.substring(n) || "/");
			}
			return new h("file", t, e, "", "");
		}
		static from(e) {
			let t = new h(e.scheme, e.authority, e.path, e.query, e.fragment);
			return l(t, !0), t;
		}
		toString(e = !1) {
			return b(this, e);
		}
		toJSON() {
			return this;
		}
		static revive(t) {
			if (t) {
				if (t instanceof e) return t;
				{
					let e = new h(t);
					return e._formatted = t.external, e._fsPath = t._sep === p ? t.fsPath : null, e;
				}
			}
			return t;
		}
	};
	o(d, "l");
	let f = d, p = i ? 1 : void 0, m = class extends f {
		_formatted = null;
		_fsPath = null;
		get fsPath() {
			return this._fsPath ||= y(this, !1), this._fsPath;
		}
		toString(e = !1) {
			return e ? b(this, !0) : (this._formatted ||= b(this, !1), this._formatted);
		}
		toJSON() {
			let e = { $mid: 1 };
			return this._fsPath && (e.fsPath = this._fsPath, e._sep = p), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
		}
	};
	o(m, "d");
	let h = m, g = {
		58: "%3A",
		47: "%2F",
		63: "%3F",
		35: "%23",
		91: "%5B",
		93: "%5D",
		64: "%40",
		33: "%21",
		36: "%24",
		38: "%26",
		39: "%27",
		40: "%28",
		41: "%29",
		42: "%2A",
		43: "%2B",
		44: "%2C",
		59: "%3B",
		61: "%3D",
		32: "%20"
	};
	function _(e, t, n) {
		let r, i = -1;
		for (let a = 0; a < e.length; a++) {
			let o = e.charCodeAt(a);
			if (o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || o === 45 || o === 46 || o === 95 || o === 126 || t && o === 47 || n && o === 91 || n && o === 93 || n && o === 58) i !== -1 && (r += encodeURIComponent(e.substring(i, a)), i = -1), r !== void 0 && (r += e.charAt(a));
			else {
				r === void 0 && (r = e.substr(0, a));
				let t = g[o];
				t === void 0 ? i === -1 && (i = a) : (i !== -1 && (r += encodeURIComponent(e.substring(i, a)), i = -1), r += t);
			}
		}
		return i !== -1 && (r += encodeURIComponent(e.substring(i))), r === void 0 ? e : r;
	}
	o(_, "m");
	function v(e) {
		let t;
		for (let n = 0; n < e.length; n++) {
			let r = e.charCodeAt(n);
			r === 35 || r === 63 ? (t === void 0 && (t = e.substr(0, n)), t += g[r]) : t !== void 0 && (t += e[n]);
		}
		return t === void 0 ? e : t;
	}
	o(v, "y");
	function y(e, t) {
		let n;
		return n = e.authority && e.path.length > 1 && e.scheme === "file" ? `//${e.authority}${e.path}` : e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58 ? t ? e.path.substr(1) : e.path[1].toLowerCase() + e.path.substr(2) : e.path, i && (n = n.replace(/\//g, "\\")), n;
	}
	o(y, "v");
	function b(e, t) {
		let n = t ? v : _, r = "", { scheme: i, authority: a, path: o, query: s, fragment: c } = e;
		if (i && (r += i, r += ":"), (a || i === "file") && (r += "/", r += "/"), a) {
			let e = a.indexOf("@");
			if (e !== -1) {
				let t = a.substr(0, e);
				a = a.substr(e + 1), e = t.lastIndexOf(":"), e === -1 ? r += n(t, !1, !1) : (r += n(t.substr(0, e), !1, !1), r += ":", r += n(t.substr(e + 1), !1, !0)), r += "@";
			}
			a = a.toLowerCase(), e = a.lastIndexOf(":"), e === -1 ? r += n(a, !1, !0) : (r += n(a.substr(0, e), !1, !0), r += a.substr(e));
		}
		if (o) {
			if (o.length >= 3 && o.charCodeAt(0) === 47 && o.charCodeAt(2) === 58) {
				let e = o.charCodeAt(1);
				e >= 65 && e <= 90 && (o = `/${String.fromCharCode(e + 32)}:${o.substr(3)}`);
			} else if (o.length >= 2 && o.charCodeAt(1) === 58) {
				let e = o.charCodeAt(0);
				e >= 65 && e <= 90 && (o = `${String.fromCharCode(e + 32)}:${o.substr(2)}`);
			}
			r += n(o, !0, !1);
		}
		return s && (r += "?", r += n(s, !1, !1)), c && (r += "#", r += t ? c : _(c, !1, !1)), r;
	}
	o(b, "b");
	function x(e) {
		try {
			return decodeURIComponent(e);
		} catch {
			return e.length > 3 ? e.substr(0, 3) + x(e.substr(3)) : e;
		}
	}
	o(x, "C");
	let ee = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
	function S(e) {
		return e.match(ee) ? e.replace(ee, (e) => x(e)) : e;
	}
	o(S, "w");
	var te = n(975);
	let C = te.posix || te;
	var w;
	(function(e) {
		e.joinPath = function(e, ...t) {
			return e.with({ path: C.join(e.path, ...t) });
		}, e.resolvePath = function(e, ...t) {
			let n = e.path, r = !1;
			n[0] !== "/" && (n = "/" + n, r = !0);
			let i = C.resolve(n, ...t);
			return r && i[0] === "/" && !e.authority && (i = i.substring(1)), e.with({ path: i });
		}, e.dirname = function(e) {
			if (e.path.length === 0 || e.path === "/") return e;
			let t = C.dirname(e.path);
			return t.length === 1 && t.charCodeAt(0) === 46 && (t = ""), e.with({ path: t });
		}, e.basename = function(e) {
			return C.basename(e.path);
		}, e.extname = function(e) {
			return C.extname(e.path);
		};
	})(w ||= {}), CN = r;
})();
var { URI: wN, Utils: TN } = CN, EN;
(function(e) {
	e.basename = TN.basename, e.dirname = TN.dirname, e.extname = TN.extname, e.joinPath = TN.joinPath, e.resolvePath = TN.resolvePath;
	let t = typeof process == "object" && process?.platform === "win32";
	function n(e, t) {
		return e?.toString() === t?.toString();
	}
	o(n, "equals"), e.equals = n;
	function r(e, n) {
		let r = typeof e == "string" ? wN.parse(e).path : e.path, i = typeof n == "string" ? wN.parse(n).path : n.path, a = r.split("/").filter((e) => e.length > 0), o = i.split("/").filter((e) => e.length > 0);
		if (t) {
			let e = /^[A-Z]:$/;
			if (a[0] && e.test(a[0]) && (a[0] = a[0].toLowerCase()), o[0] && e.test(o[0]) && (o[0] = o[0].toLowerCase()), a[0] !== o[0]) return i.substring(1);
		}
		let s = 0;
		for (; s < a.length && a[s] === o[s]; s++);
		return "../".repeat(a.length - s) + o.slice(s).join("/");
	}
	o(r, "relative"), e.relative = r;
	function i(e) {
		return wN.parse(e.toString()).toString();
	}
	o(i, "normalize"), e.normalize = i;
	function a(e, t) {
		let n = typeof e == "string" ? e : e.path, r = typeof t == "string" ? t : t.path;
		return r.charAt(r.length - 1) === "/" && (r = r.slice(0, -1)), n.charAt(n.length - 1) === "/" && (n = n.slice(0, -1)), r === n ? !0 : r.length < n.length || r.charAt(n.length) !== "/" ? !1 : r.startsWith(n);
	}
	o(a, "contains"), e.contains = a;
})(EN ||= {});
var DN, ON = (DN = class {
	constructor() {
		this.root = {
			name: "",
			children: /* @__PURE__ */ new Map()
		};
	}
	normalizeUri(e) {
		return EN.normalize(e);
	}
	clear() {
		this.root.children.clear();
	}
	insert(e, t) {
		let n = this.getNode(this.normalizeUri(e), !0);
		n.element = t;
	}
	delete(e) {
		let t = this.getNode(this.normalizeUri(e), !1);
		t?.parent && t.parent.children.delete(t.name);
	}
	has(e) {
		return this.getNode(this.normalizeUri(e), !1)?.element !== void 0;
	}
	hasNode(e) {
		return this.getNode(this.normalizeUri(e), !1) !== void 0;
	}
	find(e) {
		return this.getNode(this.normalizeUri(e), !1)?.element;
	}
	findNode(e) {
		let t = this.normalizeUri(e), n = this.getNode(t, !1);
		if (n) return {
			name: n.name,
			uri: EN.joinPath(wN.parse(t), n.name).toString(),
			element: n.element
		};
	}
	findChildren(e) {
		let t = this.normalizeUri(e), n = this.getNode(t, !1);
		return n ? Array.from(n.children.values()).map((e) => ({
			name: e.name,
			uri: EN.joinPath(wN.parse(t), e.name).toString(),
			element: e.element
		})) : [];
	}
	all() {
		return this.collectValues(this.root);
	}
	findAll(e) {
		let t = this.getNode(EN.normalize(e), !1);
		return t ? this.collectValues(t) : [];
	}
	getNode(e, t) {
		let n = e.split("/");
		e.charAt(e.length - 1) === "/" && n.pop();
		let r = this.root;
		for (let e of n) {
			let n = r.children.get(e);
			if (!n) {
				if (t) n = {
					name: e,
					children: /* @__PURE__ */ new Map(),
					parent: r
				}, r.children.set(e, n);
				else return;
			}
			r = n;
		}
		return r;
	}
	collectValues(e) {
		let t = [];
		e.element && t.push(e.element);
		for (let n of e.children.values()) t.push(...this.collectValues(n));
		return t;
	}
}, o(DN, "UriTrie"), DN), Z;
(function(e) {
	e[e.Changed = 0] = "Changed", e[e.Parsed = 1] = "Parsed", e[e.IndexedContent = 2] = "IndexedContent", e[e.ComputedScopes = 3] = "ComputedScopes", e[e.Linked = 4] = "Linked", e[e.IndexedReferences = 5] = "IndexedReferences", e[e.Validated = 6] = "Validated";
})(Z ||= {});
var kN, AN = (kN = class {
	constructor(e) {
		this.serviceRegistry = e.ServiceRegistry, this.textDocuments = e.workspace.TextDocuments, this.fileSystemProvider = e.workspace.FileSystemProvider;
	}
	async fromUri(e, t = X.CancellationToken.None) {
		let n = await this.fileSystemProvider.readFile(e);
		return this.createAsync(e, n, t);
	}
	fromTextDocument(e, t, n) {
		return t ??= wN.parse(e.uri), X.CancellationToken.is(n) ? this.createAsync(t, e, n) : this.create(t, e, n);
	}
	fromString(e, t, n) {
		return X.CancellationToken.is(n) ? this.createAsync(t, e, n) : this.create(t, e, n);
	}
	fromModel(e, t) {
		return this.create(t, { $model: e });
	}
	create(e, t, n) {
		if (typeof t == "string") {
			let r = this.parse(e, t, n);
			return this.createLangiumDocument(r, e, void 0, t);
		}
		if ("$model" in t) {
			let n = {
				value: t.$model,
				parserErrors: [],
				lexerErrors: []
			};
			return this.createLangiumDocument(n, e);
		}
		{
			let r = this.parse(e, t.getText(), n);
			return this.createLangiumDocument(r, e, t);
		}
	}
	async createAsync(e, t, n) {
		if (typeof t == "string") {
			let r = await this.parseAsync(e, t, n);
			return this.createLangiumDocument(r, e, void 0, t);
		}
		{
			let r = await this.parseAsync(e, t.getText(), n);
			return this.createLangiumDocument(r, e, t);
		}
	}
	createLangiumDocument(e, t, n, r) {
		let i;
		if (n) i = {
			parseResult: e,
			uri: t,
			state: Z.Parsed,
			references: [],
			textDocument: n
		};
		else {
			let n = this.createTextDocumentGetter(t, r);
			i = {
				parseResult: e,
				uri: t,
				state: Z.Parsed,
				references: [],
				get textDocument() {
					return n();
				}
			};
		}
		return e.value.$document = i, i;
	}
	async update(e, t) {
		let n = e.parseResult.value.$cstNode?.root.fullText, r = this.textDocuments?.get(e.uri.toString()), i = r ? r.getText() : await this.fileSystemProvider.readFile(e.uri);
		if (r) Object.defineProperty(e, "textDocument", { value: r });
		else {
			let t = this.createTextDocumentGetter(e.uri, i);
			Object.defineProperty(e, "textDocument", { get: t });
		}
		return n !== i && (e.parseResult = await this.parseAsync(e.uri, i, t), e.parseResult.value.$document = e), e.state = Z.Parsed, e;
	}
	parse(e, t, n) {
		return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(t, n);
	}
	parseAsync(e, t, n) {
		return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(t, n);
	}
	createTextDocumentGetter(e, t) {
		let n = this.serviceRegistry, r;
		return () => r ??= _N.create(e.toString(), n.getServices(e).LanguageMetaData.languageId, 0, t ?? "");
	}
}, o(kN, "DefaultLangiumDocumentFactory"), kN), jN, MN = (jN = class {
	constructor(e) {
		this.documentTrie = new ON(), this.services = e, this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.documentBuilder = () => e.workspace.DocumentBuilder;
	}
	get all() {
		return P(this.documentTrie.all());
	}
	addDocument(e) {
		let t = e.uri.toString();
		if (this.documentTrie.has(t)) throw Error(`A document with the URI '${t}' is already present.`);
		this.documentTrie.insert(t, e);
	}
	getDocument(e) {
		let t = e.toString();
		return this.documentTrie.find(t);
	}
	getDocuments(e) {
		let t = e.toString();
		return this.documentTrie.findAll(t);
	}
	async getOrCreateDocument(e, t) {
		let n = this.getDocument(e);
		return n || (n = await this.langiumDocumentFactory.fromUri(e, t), this.addDocument(n), n);
	}
	createDocument(e, t, n) {
		if (n) return this.langiumDocumentFactory.fromString(t, e, n).then((e) => (this.addDocument(e), e));
		{
			let n = this.langiumDocumentFactory.fromString(t, e);
			return this.addDocument(n), n;
		}
	}
	hasDocument(e) {
		return this.documentTrie.has(e.toString());
	}
	invalidateDocument(e) {
		let t = e.toString(), n = this.documentTrie.find(t);
		return n && this.documentBuilder().resetToState(n, Z.Changed), n;
	}
	deleteDocument(e) {
		let t = e.toString(), n = this.documentTrie.find(t);
		return n && (n.state = Z.Changed, this.documentTrie.delete(t)), n;
	}
	deleteDocuments(e) {
		let t = e.toString(), n = this.documentTrie.findAll(t);
		for (let e of n) e.state = Z.Changed;
		return this.documentTrie.delete(t), n;
	}
}, o(jN, "DefaultLangiumDocuments"), jN), NN = /* @__PURE__ */ Symbol("RefResolving"), PN, FN = (PN = class {
	constructor(e) {
		this.reflection = e.shared.AstReflection, this.langiumDocuments = () => e.shared.workspace.LangiumDocuments, this.scopeProvider = e.references.ScopeProvider, this.astNodeLocator = e.workspace.AstNodeLocator, this.profiler = e.shared.profilers.LangiumProfiler, this.languageId = e.LanguageMetaData.languageId;
	}
	async link(e, t = X.CancellationToken.None) {
		if (this.profiler?.isActive("linking")) {
			let n = this.profiler.createTask("linking", this.languageId);
			n.start();
			try {
				for (let r of Pn(e.parseResult.value)) await fN(t), In(r).forEach((t) => {
					let i = `${r.$type}:${t.property}`;
					n.startSubTask(i);
					try {
						this.doLink(t, e);
					} finally {
						n.stopSubTask(i);
					}
				});
			} finally {
				n.stop();
			}
		} else for (let n of Pn(e.parseResult.value)) await fN(t), In(n).forEach((t) => this.doLink(t, e));
	}
	doLink(e, t) {
		let n = e.reference;
		if ("_ref" in n && n._ref === void 0) {
			n._ref = NN;
			try {
				let t = this.getCandidate(e);
				un(t) ? n._ref = t : (n._nodeDescription = t, n._ref = this.loadAstNode(t) ?? this.createLinkingError(e, t));
			} catch (t) {
				console.error(`An error occurred while resolving reference to '${n.$refText}':`, t);
				let r = t.message ?? String(t);
				n._ref = {
					info: e,
					message: `An error occurred while resolving reference to '${n.$refText}': ${r}`
				};
			}
			t.references.push(n);
		} else if ("_items" in n && n._items === void 0) {
			n._items = NN;
			try {
				let t = this.getCandidates(e), r = [];
				if (un(t)) n._linkingError = t;
				else for (let e of t) {
					let t = this.loadAstNode(e);
					t && r.push({
						ref: t,
						$nodeDescription: e
					});
				}
				n._items = r;
			} catch (t) {
				n._linkingError = {
					info: e,
					message: `An error occurred while resolving reference to '${n.$refText}': ${t}`
				}, n._items = [];
			}
			t.references.push(n);
		}
	}
	unlink(e) {
		for (let t of e.references) "_ref" in t ? (t._ref = void 0, delete t._nodeDescription) : "_items" in t && (t._items = void 0, delete t._linkingError);
		e.references = [];
	}
	getCandidate(e) {
		return this.scopeProvider.getScope(e).getElement(e.reference.$refText) ?? this.createLinkingError(e);
	}
	getCandidates(e) {
		let t = this.scopeProvider.getScope(e).getElements(e.reference.$refText).distinct((e) => `${e.documentUri}#${e.path}`).toArray();
		return t.length > 0 ? t : this.createLinkingError(e);
	}
	buildReference(e, t, n, r) {
		let i = this, a = {
			$refNode: n,
			$refText: r,
			_ref: void 0,
			get ref() {
				if (on(this._ref)) return this._ref;
				if (ln(this._nodeDescription)) {
					let n = i.loadAstNode(this._nodeDescription);
					this._ref = n ?? i.createLinkingError({
						reference: a,
						container: e,
						property: t
					}, this._nodeDescription);
				} else if (this._ref === void 0) {
					this._ref = NN;
					let n = An(e).$document, r = i.getLinkedNode({
						reference: a,
						container: e,
						property: t
					});
					if (r.error && n && n.state < Z.ComputedScopes) return this._ref = void 0;
					this._ref = r.node ?? r.error, this._nodeDescription = r.descr, n?.references.push(this);
				} else this._ref === NN && i.throwCyclicReferenceError(e, t, r);
				return on(this._ref) ? this._ref : void 0;
			},
			get $nodeDescription() {
				return this._nodeDescription;
			},
			get error() {
				return un(this._ref) ? this._ref : void 0;
			}
		};
		return a;
	}
	buildMultiReference(e, t, n, r) {
		let i = this, a = {
			$refNode: n,
			$refText: r,
			_items: void 0,
			get items() {
				if (Array.isArray(this._items)) return this._items;
				if (this._items === void 0) {
					this._items = NN;
					let n = An(e).$document, r = i.getCandidates({
						reference: a,
						container: e,
						property: t
					}), o = [];
					if (un(r)) this._linkingError = r;
					else for (let e of r) {
						let t = i.loadAstNode(e);
						t && o.push({
							ref: t,
							$nodeDescription: e
						});
					}
					this._items = o, n?.references.push(this);
				} else this._items === NN && i.throwCyclicReferenceError(e, t, r);
				return Array.isArray(this._items) ? this._items : [];
			},
			get error() {
				if (this._linkingError) return this._linkingError;
				if (!(this.items.length > 0)) return this._linkingError = i.createLinkingError({
					reference: a,
					container: e,
					property: t
				});
			}
		};
		return a;
	}
	throwCyclicReferenceError(e, t, n) {
		throw Error(`Cyclic reference resolution detected: ${this.astNodeLocator.getAstNodePath(e)}/${t} (symbol '${n}')`);
	}
	getLinkedNode(e) {
		try {
			let t = this.getCandidate(e);
			if (un(t)) return { error: t };
			let n = this.loadAstNode(t);
			return n ? {
				node: n,
				descr: t
			} : {
				descr: t,
				error: this.createLinkingError(e, t)
			};
		} catch (t) {
			console.error(`An error occurred while resolving reference to '${e.reference.$refText}':`, t);
			let n = t.message ?? String(t);
			return { error: {
				info: e,
				message: `An error occurred while resolving reference to '${e.reference.$refText}': ${n}`
			} };
		}
	}
	loadAstNode(e) {
		if (e.node) return e.node;
		let t = this.langiumDocuments().getDocument(e.documentUri);
		if (t) return this.astNodeLocator.getAstNode(t.parseResult.value, e.path);
	}
	createLinkingError(e, t) {
		let n = An(e.container).$document;
		return n && n.state < Z.ComputedScopes && console.warn(`Attempted reference resolution before document reached ComputedScopes state (${n.uri}).`), {
			info: e,
			message: `Could not resolve reference to ${this.reflection.getReferenceType(e)} named '${e.reference.$refText}'.`,
			targetDescription: t
		};
	}
}, o(PN, "DefaultLinker"), PN);
function IN(e) {
	return typeof e.name == "string";
}
o(IN, "isNamed");
var LN, RN = (LN = class {
	getName(e) {
		if (IN(e)) return e.name;
	}
	getNameNode(e) {
		return Ka(e.$cstNode, "name");
	}
}, o(LN, "DefaultNameProvider"), LN), zN, BN = (zN = class {
	constructor(e) {
		this.nameProvider = e.references.NameProvider, this.index = e.shared.workspace.IndexManager, this.nodeLocator = e.workspace.AstNodeLocator, this.documents = e.shared.workspace.LangiumDocuments, this.hasMultiReference = Pn(e.Grammar).some((e) => hr(e) && e.isMulti);
	}
	findDeclarations(e) {
		if (e) {
			let t = Za(e), n = e.astNode;
			if (t && n) {
				let r = n[t.feature];
				if (sn(r) || cn(r)) return jn(r);
				if (Array.isArray(r)) {
					for (let t of r) if ((sn(t) || cn(t)) && t.$refNode && t.$refNode.offset <= e.offset && t.$refNode.end >= e.end) return jn(t);
				}
			}
			if (n) {
				let t = this.nameProvider.getNameNode(n);
				if (t && (t === e || Vi(e, t))) return this.getSelfNodes(n);
			}
		}
		return [];
	}
	getSelfNodes(e) {
		if (this.hasMultiReference) {
			let t = this.index.findAllReferences(e, this.nodeLocator.getAstNodePath(e)), n = this.getNodeFromReferenceDescription(t.head());
			if (n) {
				for (let t of In(n)) if (cn(t.reference) && t.reference.items.some((t) => t.ref === e)) return t.reference.items.map((e) => e.ref);
			}
			return [e];
		}
		return [e];
	}
	getNodeFromReferenceDescription(e) {
		if (!e) return;
		let t = this.documents.getDocument(e.sourceUri);
		if (t) return this.nodeLocator.getAstNode(t.parseResult.value, e.sourcePath);
	}
	findDeclarationNodes(e) {
		let t = this.findDeclarations(e), n = [];
		for (let e of t) {
			let t = this.nameProvider.getNameNode(e) ?? e.$cstNode;
			t && n.push(t);
		}
		return n;
	}
	findReferences(e, t) {
		let n = [];
		t.includeDeclaration && n.push(...this.getSelfReferences(e));
		let r = this.index.findAllReferences(e, this.nodeLocator.getAstNodePath(e));
		return t.documentUri && (r = r.filter((e) => EN.equals(e.sourceUri, t.documentUri))), n.push(...r), P(n);
	}
	getSelfReferences(e) {
		let t = this.getSelfNodes(e), n = [];
		for (let e of t) {
			let t = this.nameProvider.getNameNode(e);
			if (t) {
				let r = kn(e), i = this.nodeLocator.getAstNodePath(e);
				n.push({
					sourceUri: r.uri,
					sourcePath: i,
					targetUri: r.uri,
					targetPath: i,
					segment: Ui(t),
					local: !0
				});
			}
		}
		return n;
	}
}, o(zN, "DefaultReferences"), zN), VN, HN = (VN = class {
	constructor(e) {
		if (this.map = /* @__PURE__ */ new Map(), e) for (let [t, n] of e) this.add(t, n);
	}
	get size() {
		return wn.sum(P(this.map.values()).map((e) => e.length));
	}
	clear() {
		this.map.clear();
	}
	delete(e, t) {
		if (t === void 0) return this.map.delete(e);
		{
			let n = this.map.get(e);
			if (n) {
				let r = n.indexOf(t);
				if (r >= 0) return n.length === 1 ? this.map.delete(e) : n.splice(r, 1), !0;
			}
			return !1;
		}
	}
	get(e) {
		return this.map.get(e) ?? [];
	}
	getStream(e) {
		let t = this.map.get(e);
		return t ? P(t) : bn;
	}
	has(e, t) {
		if (t === void 0) return this.map.has(e);
		{
			let n = this.map.get(e);
			return n ? n.indexOf(t) >= 0 : !1;
		}
	}
	add(e, t) {
		return this.map.has(e) ? this.map.get(e).push(t) : this.map.set(e, [t]), this;
	}
	addAll(e, t) {
		return this.map.has(e) ? this.map.get(e).push(...t) : this.map.set(e, Array.from(t)), this;
	}
	forEach(e) {
		this.map.forEach((t, n) => t.forEach((t) => e(t, n, this)));
	}
	[Symbol.iterator]() {
		return this.entries().iterator();
	}
	entries() {
		return P(this.map.entries()).flatMap(([e, t]) => t.map((t) => [e, t]));
	}
	keys() {
		return P(this.map.keys());
	}
	values() {
		return P(this.map.values()).flat();
	}
	entriesGroupedByKey() {
		return P(this.map.entries());
	}
}, o(VN, "MultiMap"), VN), UN, WN = (UN = class {
	get size() {
		return this.map.size;
	}
	constructor(e) {
		if (this.map = /* @__PURE__ */ new Map(), this.inverse = /* @__PURE__ */ new Map(), e) for (let [t, n] of e) this.set(t, n);
	}
	clear() {
		this.map.clear(), this.inverse.clear();
	}
	set(e, t) {
		return this.map.set(e, t), this.inverse.set(t, e), this;
	}
	get(e) {
		return this.map.get(e);
	}
	getKey(e) {
		return this.inverse.get(e);
	}
	delete(e) {
		let t = this.map.get(e);
		return t !== void 0 && (this.map.delete(e), this.inverse.delete(t), !0);
	}
}, o(UN, "BiMap"), UN), GN, KN = (GN = class {
	constructor(e) {
		this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider;
	}
	async collectExportedSymbols(e, t = X.CancellationToken.None) {
		return this.collectExportedSymbolsForNode(e.parseResult.value, e, void 0, t);
	}
	async collectExportedSymbolsForNode(e, t, n = Mn, r = X.CancellationToken.None) {
		let i = [];
		this.addExportedSymbol(e, i, t);
		for (let a of n(e)) await fN(r), this.addExportedSymbol(a, i, t);
		return i;
	}
	addExportedSymbol(e, t, n) {
		let r = this.nameProvider.getName(e);
		r && t.push(this.descriptions.createDescription(e, r, n));
	}
	async collectLocalSymbols(e, t = X.CancellationToken.None) {
		let n = e.parseResult.value, r = new HN();
		for (let i of Nn(n)) await fN(t), this.addLocalSymbol(i, e, r);
		return r;
	}
	addLocalSymbol(e, t, n) {
		let r = e.$container;
		if (r) {
			let i = this.nameProvider.getName(e);
			i && n.add(r, this.descriptions.createDescription(e, i, t));
		}
	}
}, o(GN, "DefaultScopeComputation"), GN), qN, JN = (qN = class {
	constructor(e, t, n) {
		this.elements = e, this.outerScope = t, this.caseInsensitive = n?.caseInsensitive ?? !1, this.concatOuterScope = n?.concatOuterScope ?? !0;
	}
	getAllElements() {
		return this.outerScope ? this.elements.concat(this.outerScope.getAllElements()) : this.elements;
	}
	getElement(e) {
		let t = this.caseInsensitive ? e.toLowerCase() : e, n = this.caseInsensitive ? this.elements.find((e) => e.name.toLowerCase() === t) : this.elements.find((t) => t.name === e);
		if (n) return n;
		if (this.outerScope) return this.outerScope.getElement(e);
	}
	getElements(e) {
		let t = this.caseInsensitive ? e.toLowerCase() : e, n = this.caseInsensitive ? this.elements.filter((e) => e.name.toLowerCase() === t) : this.elements.filter((t) => t.name === e);
		return (this.concatOuterScope || n.isEmpty()) && this.outerScope ? n.concat(this.outerScope.getElements(e)) : n;
	}
}, o(qN, "StreamScope"), qN), YN, XN = (YN = class {
	constructor(e, t, n) {
		this.elements = /* @__PURE__ */ new Map(), this.caseInsensitive = n?.caseInsensitive ?? !1, this.concatOuterScope = n?.concatOuterScope ?? !0;
		for (let t of e) {
			let e = this.caseInsensitive ? t.name.toLowerCase() : t.name;
			this.elements.set(e, t);
		}
		this.outerScope = t;
	}
	getElement(e) {
		let t = this.caseInsensitive ? e.toLowerCase() : e, n = this.elements.get(t);
		if (n) return n;
		if (this.outerScope) return this.outerScope.getElement(e);
	}
	getElements(e) {
		let t = this.caseInsensitive ? e.toLowerCase() : e, n = this.elements.get(t), r = n ? [n] : [];
		return (this.concatOuterScope || r.length > 0) && this.outerScope ? P(r).concat(this.outerScope.getElements(e)) : P(r);
	}
	getAllElements() {
		let e = P(this.elements.values());
		return this.outerScope && (e = e.concat(this.outerScope.getAllElements())), e;
	}
}, o(YN, "MapScope"), YN), ZN, QN = (ZN = class {
	constructor(e, t, n) {
		this.elements = new HN(), this.caseInsensitive = n?.caseInsensitive ?? !1, this.concatOuterScope = n?.concatOuterScope ?? !0;
		for (let t of e) {
			let e = this.caseInsensitive ? t.name.toLowerCase() : t.name;
			this.elements.add(e, t);
		}
		this.outerScope = t;
	}
	getElement(e) {
		let t = this.caseInsensitive ? e.toLowerCase() : e, n = this.elements.get(t)[0];
		if (n) return n;
		if (this.outerScope) return this.outerScope.getElement(e);
	}
	getElements(e) {
		let t = this.caseInsensitive ? e.toLowerCase() : e, n = this.elements.get(t);
		return (this.concatOuterScope || n.length === 0) && this.outerScope ? P(n).concat(this.outerScope.getElements(e)) : P(n);
	}
	getAllElements() {
		let e = P(this.elements.values());
		return this.outerScope && (e = e.concat(this.outerScope.getAllElements())), e;
	}
}, o(ZN, "MultiMapScope"), ZN), $N = {
	getElement() {},
	getElements() {
		return bn;
	},
	getAllElements() {
		return bn;
	}
}, eP, tP = (eP = class {
	constructor() {
		this.toDispose = [], this.isDisposed = !1;
	}
	onDispose(e) {
		this.toDispose.push(e);
	}
	dispose() {
		this.throwIfDisposed(), this.clear(), this.isDisposed = !0, this.toDispose.forEach((e) => e.dispose());
	}
	throwIfDisposed() {
		if (this.isDisposed) throw Error("This cache has already been disposed");
	}
}, o(eP, "DisposableCache"), eP), nP, rP = (nP = class extends tP {
	constructor() {
		super(...arguments), this.cache = /* @__PURE__ */ new Map();
	}
	has(e) {
		return this.throwIfDisposed(), this.cache.has(e);
	}
	set(e, t) {
		this.throwIfDisposed(), this.cache.set(e, t);
	}
	get(e, t) {
		if (this.throwIfDisposed(), this.cache.has(e)) return this.cache.get(e);
		if (t) {
			let n = t();
			return this.cache.set(e, n), n;
		}
	}
	delete(e) {
		return this.throwIfDisposed(), this.cache.delete(e);
	}
	clear() {
		this.throwIfDisposed(), this.cache.clear();
	}
}, o(nP, "SimpleCache"), nP), iP, aP = (iP = class extends tP {
	constructor(e) {
		super(), this.cache = /* @__PURE__ */ new Map(), this.converter = e ?? ((e) => e);
	}
	has(e, t) {
		return this.throwIfDisposed(), this.cacheForContext(e).has(t);
	}
	set(e, t, n) {
		this.throwIfDisposed(), this.cacheForContext(e).set(t, n);
	}
	get(e, t, n) {
		this.throwIfDisposed();
		let r = this.cacheForContext(e);
		if (r.has(t)) return r.get(t);
		if (n) {
			let e = n();
			return r.set(t, e), e;
		}
	}
	delete(e, t) {
		return this.throwIfDisposed(), this.cacheForContext(e).delete(t);
	}
	clear(e) {
		if (this.throwIfDisposed(), e) {
			let t = this.converter(e);
			this.cache.delete(t);
		} else this.cache.clear();
	}
	cacheForContext(e) {
		let t = this.converter(e), n = this.cache.get(t);
		return n || (n = /* @__PURE__ */ new Map(), this.cache.set(t, n)), n;
	}
}, o(iP, "ContextCache"), iP), oP, sP = (oP = class extends aP {
	constructor(e, t) {
		super((e) => e.toString()), t ? (this.toDispose.push(e.workspace.DocumentBuilder.onDocumentPhase(t, (e) => {
			this.clear(e.uri.toString());
		})), this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((e, t) => {
			for (let e of t) this.clear(e);
		}))) : this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((e, t) => {
			let n = e.concat(t);
			for (let e of n) this.clear(e);
		}));
	}
}, o(oP, "DocumentCache"), oP), cP, lP = (cP = class extends rP {
	constructor(e, t) {
		super(), t ? (this.toDispose.push(e.workspace.DocumentBuilder.onBuildPhase(t, () => {
			this.clear();
		})), this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((e, t) => {
			t.length > 0 && this.clear();
		}))) : this.toDispose.push(e.workspace.DocumentBuilder.onUpdate(() => {
			this.clear();
		}));
	}
}, o(cP, "WorkspaceCache"), cP), uP, dP = (uP = class {
	constructor(e) {
		this.reflection = e.shared.AstReflection, this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider, this.indexManager = e.shared.workspace.IndexManager, this.globalScopeCache = new lP(e.shared);
	}
	getScope(e) {
		let t = [], n = this.reflection.getReferenceType(e), r = kn(e.container).localSymbols;
		if (r) {
			let i = e.container;
			do
				r.has(i) && t.push(r.getStream(i).filter((e) => this.reflection.isSubtype(e.type, n))), i = i.$container;
			while (i);
		}
		let i = this.getGlobalScope(n, e);
		for (let e = t.length - 1; e >= 0; e--) i = this.createScope(t[e], i);
		return i;
	}
	createScope(e, t, n) {
		return new JN(P(e), t, n);
	}
	createScopeForNodes(e, t, n) {
		return new JN(P(e).map((e) => {
			let t = this.nameProvider.getName(e);
			if (t) return this.descriptions.createDescription(e, t);
		}).nonNullable(), t, n);
	}
	getGlobalScope(e, t) {
		return this.globalScopeCache.get(e, () => new QN(this.indexManager.allElements(e)));
	}
}, o(uP, "DefaultScopeProvider"), uP);
function fP(e) {
	return typeof e.$comment == "string";
}
o(fP, "isAstNodeWithComment");
function pP(e) {
	return typeof e == "object" && !!e && ("$ref" in e || "$error" in e);
}
o(pP, "isIntermediateReference");
var mP, hP = (mP = class {
	constructor(e) {
		this.ignoreProperties = /* @__PURE__ */ new Set([
			"$container",
			"$containerProperty",
			"$containerIndex",
			"$document",
			"$cstNode"
		]), this.langiumDocuments = e.shared.workspace.LangiumDocuments, this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider, this.commentProvider = e.documentation.CommentProvider;
	}
	serialize(e, t) {
		let n = t ?? {}, r = t?.replacer, i = /* @__PURE__ */ o((e, t) => this.replacer(e, t, n), "defaultReplacer"), a = r ? (e, t) => r(e, t, i) : i;
		try {
			return this.currentDocument = kn(e), JSON.stringify(e, a, t?.space);
		} finally {
			this.currentDocument = void 0;
		}
	}
	deserialize(e, t) {
		let n = t ?? {}, r = JSON.parse(e);
		return this.linkNode(r, r, n), r;
	}
	replacer(e, t, { refText: n, sourceText: r, textRegions: i, comments: a, uriConverter: o }) {
		if (!this.ignoreProperties.has(e)) {
			if (sn(t)) {
				let e = t.ref, r = n ? t.$refText : void 0;
				if (e) {
					let t = kn(e), n = "";
					this.currentDocument && this.currentDocument !== t && (n = o ? o(t.uri, e) : t.uri.toString());
					let i = this.astNodeLocator.getAstNodePath(e);
					return {
						$ref: `${n}#${i}`,
						$refText: r
					};
				}
				return {
					$error: t.error?.message ?? "Could not resolve reference",
					$refText: r
				};
			}
			if (cn(t)) {
				let e = n ? t.$refText : void 0, r = [];
				for (let e of t.items) {
					let t = e.ref, n = kn(e.ref), i = "";
					this.currentDocument && this.currentDocument !== n && (i = o ? o(n.uri, t) : n.uri.toString());
					let a = this.astNodeLocator.getAstNodePath(t);
					r.push(`${i}#${a}`);
				}
				return {
					$refs: r,
					$refText: e
				};
			}
			if (on(t)) {
				let n;
				if (i && (n = this.addAstNodeRegionWithAssignmentsTo({ ...t }), (!e || t.$document) && n?.$textRegion && (n.$textRegion.documentURI = this.currentDocument?.uri.toString())), r && !e && (n ??= { ...t }, n.$sourceText = t.$cstNode?.text), a) {
					n ??= { ...t };
					let e = this.commentProvider.getComment(t);
					e && (n.$comment = e.replace(/\r/g, ""));
				}
				return n ?? t;
			}
			return t;
		}
	}
	addAstNodeRegionWithAssignmentsTo(e) {
		let t = /* @__PURE__ */ o((e) => ({
			offset: e.offset,
			end: e.end,
			length: e.length,
			range: e.range
		}), "createDocumentSegment");
		if (e.$cstNode) {
			let n = e.$textRegion = t(e.$cstNode), r = n.assignments = {};
			return Object.keys(e).filter((e) => !e.startsWith("$")).forEach((n) => {
				let i = Ga(e.$cstNode, n).map(t);
				i.length !== 0 && (r[n] = i);
			}), e;
		}
	}
	linkNode(e, t, n, r, i, a) {
		for (let [r, i] of Object.entries(e)) if (Array.isArray(i)) for (let a = 0; a < i.length; a++) {
			let o = i[a];
			pP(o) ? i[a] = this.reviveReference(e, r, t, o, n) : on(o) && this.linkNode(o, t, n, e, r, a);
		}
		else pP(i) ? e[r] = this.reviveReference(e, r, t, i, n) : on(i) && this.linkNode(i, t, n, e, r);
		let o = e;
		o.$container = r, o.$containerProperty = i, o.$containerIndex = a;
	}
	reviveReference(e, t, n, r, i) {
		let a = r.$refText, o = r.$error, s;
		if (r.$ref) {
			let e = this.getRefNode(n, r.$ref, i.uriConverter);
			if (on(e)) return a ||= this.nameProvider.getName(e), {
				$refText: a ?? "",
				ref: e
			};
			o = e;
		} else if (r.$refs) {
			let e = [];
			for (let t of r.$refs) {
				let r = this.getRefNode(n, t, i.uriConverter);
				on(r) && e.push({ ref: r });
			}
			if (e.length === 0) s = {
				$refText: a ?? "",
				items: e
			}, o ??= "Could not resolve multi-reference";
			else return {
				$refText: a ?? "",
				items: e
			};
		}
		if (o) return s ??= {
			$refText: a ?? "",
			ref: void 0
		}, s.error = {
			info: {
				container: e,
				property: t,
				reference: s
			},
			message: o
		}, s;
	}
	getRefNode(e, t, n) {
		try {
			let r = t.indexOf("#");
			if (r === 0) return this.astNodeLocator.getAstNode(e, t.substring(1)) || "Could not resolve path: " + t;
			if (r < 0) {
				let e = n ? n(t) : wN.parse(t), r = this.langiumDocuments.getDocument(e);
				return r ? r.parseResult.value : "Could not find document for URI: " + t;
			}
			let i = n ? n(t.substring(0, r)) : wN.parse(t.substring(0, r)), a = this.langiumDocuments.getDocument(i);
			return a ? r === t.length - 1 ? a.parseResult.value : this.astNodeLocator.getAstNode(a.parseResult.value, t.substring(r + 1)) || "Could not resolve URI: " + t : "Could not find document for URI: " + t;
		} catch (e) {
			return String(e);
		}
	}
}, o(mP, "DefaultJsonSerializer"), mP), gP, _P = (gP = class {
	get map() {
		return this.fileExtensionMap;
	}
	constructor(e) {
		this.languageIdMap = /* @__PURE__ */ new Map(), this.fileExtensionMap = /* @__PURE__ */ new Map(), this.fileNameMap = /* @__PURE__ */ new Map(), this.textDocuments = e?.workspace.TextDocuments;
	}
	register(e) {
		let t = e.LanguageMetaData;
		for (let n of t.fileExtensions) this.fileExtensionMap.has(n) && console.warn(`The file extension ${n} is used by multiple languages. It is now assigned to '${t.languageId}'.`), this.fileExtensionMap.set(n, e);
		if (t.fileNames) for (let n of t.fileNames) this.fileNameMap.has(n) && console.warn(`The file name ${n} is used by multiple languages. It is now assigned to '${t.languageId}'.`), this.fileNameMap.set(n, e);
		this.languageIdMap.set(t.languageId, e);
	}
	getServices(e) {
		if (this.languageIdMap.size === 0) throw Error("The service registry is empty. Use `register` to register the services of a language.");
		let t = this.textDocuments?.get(e)?.languageId;
		if (t !== void 0) {
			let e = this.languageIdMap.get(t);
			if (e) return e;
		}
		let n = EN.extname(e), r = EN.basename(e), i = this.fileNameMap.get(r) ?? this.fileExtensionMap.get(n);
		if (!i) throw Error(t ? `The service registry contains no services for the extension '${n}' for language '${t}'.` : `The service registry contains no services for the extension '${n}'.`);
		return i;
	}
	hasServices(e) {
		try {
			return this.getServices(e), !0;
		} catch {
			return !1;
		}
	}
	get all() {
		return Array.from(this.languageIdMap.values());
	}
}, o(gP, "DefaultServiceRegistry"), gP);
function vP(e) {
	return { code: e };
}
o(vP, "diagnosticData");
var yP;
(function(e) {
	e.defaults = [
		"fast",
		"slow",
		"built-in"
	], e.all = e.defaults;
})(yP ||= {});
var bP, xP = (bP = class {
	constructor(e) {
		this.entries = new HN(), this.knownCategories = new Set(yP.defaults), this.entriesBefore = [], this.entriesAfter = [], this.reflection = e.shared.AstReflection;
	}
	register(e, t = this, n = "fast") {
		if (n === "built-in") throw Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");
		this.knownCategories.add(n);
		for (let [r, i] of Object.entries(e)) {
			let e = i;
			if (Array.isArray(e)) for (let i of e) {
				let e = {
					check: this.wrapValidationException(i, t),
					category: n
				};
				this.addEntry(r, e);
			}
			else if (typeof e == "function") {
				let i = {
					check: this.wrapValidationException(e, t),
					category: n
				};
				this.addEntry(r, i);
			} else la();
		}
	}
	wrapValidationException(e, t) {
		return async (n, r, i) => {
			await this.handleException(() => e.call(t, n, r, i), "An error occurred during validation", r, n);
		};
	}
	async handleException(e, t, n, r) {
		try {
			await e();
		} catch (e) {
			if (dN(e)) throw e;
			console.error(`${t}:`, e), e instanceof Error && e.stack && console.error(e.stack), n("error", `${t}: ${e instanceof Error ? e.message : String(e)}`, { node: r });
		}
	}
	addEntry(e, t) {
		if (e === "AstNode") {
			this.entries.add("AstNode", t);
			return;
		}
		for (let n of this.reflection.getAllSubTypes(e)) this.entries.add(n, t);
	}
	getChecks(e, t) {
		let n = P(this.entries.get(e)).concat(this.entries.get("AstNode"));
		return t && (n = n.filter((e) => t.includes(e.category))), n.map((e) => e.check);
	}
	registerBeforeDocument(e, t = this) {
		this.entriesBefore.push(this.wrapPreparationException(e, "An error occurred during set-up of the validation", t));
	}
	registerAfterDocument(e, t = this) {
		this.entriesAfter.push(this.wrapPreparationException(e, "An error occurred during tear-down of the validation", t));
	}
	wrapPreparationException(e, t, n) {
		return async (r, i, a, o) => {
			await this.handleException(() => e.call(n, r, i, a, o), t, i, r);
		};
	}
	get checksBefore() {
		return this.entriesBefore;
	}
	get checksAfter() {
		return this.entriesAfter;
	}
	getAllValidationCategories(e) {
		return this.knownCategories;
	}
}, o(bP, "ValidationRegistry"), bP), SP = Object.freeze({
	validateNode: !0,
	validateChildren: !0
}), CP, wP = (CP = class {
	constructor(e) {
		this.validationRegistry = e.validation.ValidationRegistry, this.metadata = e.LanguageMetaData, this.profiler = e.shared.profilers.LangiumProfiler, this.languageId = e.LanguageMetaData.languageId;
	}
	async validateDocument(e, t = {}, n = X.CancellationToken.None) {
		let r = e.parseResult, i = [];
		if (await fN(n), (!t.categories || t.categories.includes("built-in")) && (this.processLexingErrors(r, i, t), t.stopAfterLexingErrors && i.some((e) => e.data?.code === OP.LexingError) || (this.processParsingErrors(r, i, t), t.stopAfterParsingErrors && i.some((e) => e.data?.code === OP.ParsingError)) || (this.processLinkingErrors(e, i, t), t.stopAfterLinkingErrors && i.some((e) => e.data?.code === OP.LinkingError)))) return i;
		try {
			i.push(...await this.validateAst(r.value, t, n));
		} catch (e) {
			if (dN(e)) throw e;
			console.error("An error occurred during validation:", e);
		}
		return await fN(n), i;
	}
	processLexingErrors(e, t, n) {
		let r = [...e.lexerErrors, ...e.lexerReport?.diagnostics ?? []];
		for (let e of r) {
			let n = e.severity ?? "error", r = {
				severity: EP(n),
				range: {
					start: {
						line: e.line - 1,
						character: e.column - 1
					},
					end: {
						line: e.line - 1,
						character: e.column + e.length - 1
					}
				},
				message: e.message,
				data: DP(n),
				source: this.getSource()
			};
			t.push(r);
		}
	}
	processParsingErrors(e, t, n) {
		for (let n of e.parserErrors) {
			let e;
			if (isNaN(n.token.startOffset)) {
				if ("previousToken" in n) {
					let t = n.previousToken;
					if (isNaN(t.startOffset)) {
						let t = {
							line: 0,
							character: 0
						};
						e = {
							start: t,
							end: t
						};
					} else {
						let n = {
							line: t.endLine - 1,
							character: t.endColumn
						};
						e = {
							start: n,
							end: n
						};
					}
				}
			} else e = Hi(n.token);
			if (e) {
				let r = {
					severity: EP("error"),
					range: e,
					message: n.message,
					data: vP(OP.ParsingError),
					source: this.getSource()
				};
				t.push(r);
			}
		}
	}
	processLinkingErrors(e, t, n) {
		for (let n of e.references) {
			let e = n.error;
			if (e) {
				let r = {
					node: e.info.container,
					range: n.$refNode?.range,
					property: e.info.property,
					index: e.info.index,
					data: {
						code: OP.LinkingError,
						containerType: e.info.container.$type,
						property: e.info.property,
						refText: e.info.reference.$refText
					}
				};
				t.push(this.toDiagnostic("error", e.message, r));
			}
		}
	}
	async validateAst(e, t, n = X.CancellationToken.None) {
		let r = [], i = /* @__PURE__ */ o((e, t, n) => {
			r.push(this.toDiagnostic(e, t, n));
		}, "acceptor");
		return await this.validateAstBefore(e, t, i, n), await this.validateAstNodes(e, t, i, n), await this.validateAstAfter(e, t, i, n), r;
	}
	async validateAstBefore(e, t, n, r = X.CancellationToken.None) {
		let i = this.validationRegistry.checksBefore;
		for (let a of i) await fN(r), await a(e, n, t.categories ?? [], r);
	}
	async validateAstNodes(e, t, n, r = X.CancellationToken.None) {
		if (this.profiler?.isActive("validating")) {
			let i = this.profiler.createTask("validating", this.languageId);
			i.start();
			try {
				let a = Pn(e).iterator();
				for (let e of a) {
					i.startSubTask(e.$type);
					let o = this.validateSingleNodeOptions(e, t);
					if (o.validateNode) try {
						let i = this.validationRegistry.getChecks(e.$type, t.categories);
						for (let t of i) await t(e, n, r);
					} finally {
						i.stopSubTask(e.$type);
					}
					o.validateChildren || a.prune();
				}
			} finally {
				i.stop();
			}
		} else {
			let i = Pn(e).iterator();
			for (let e of i) {
				await fN(r);
				let a = this.validateSingleNodeOptions(e, t);
				if (a.validateNode) {
					let i = this.validationRegistry.getChecks(e.$type, t.categories);
					for (let t of i) await t(e, n, r);
				}
				a.validateChildren || i.prune();
			}
		}
	}
	validateSingleNodeOptions(e, t) {
		return SP;
	}
	async validateAstAfter(e, t, n, r = X.CancellationToken.None) {
		let i = this.validationRegistry.checksAfter;
		for (let a of i) await fN(r), await a(e, n, t.categories ?? [], r);
	}
	toDiagnostic(e, t, n) {
		return {
			message: t,
			range: TP(n),
			severity: EP(e),
			code: n.code,
			codeDescription: n.codeDescription,
			tags: n.tags,
			relatedInformation: n.relatedInformation,
			data: n.data,
			source: this.getSource()
		};
	}
	getSource() {
		return this.metadata.languageId;
	}
}, o(CP, "DefaultDocumentValidator"), CP);
function TP(e) {
	if (e.range) return e.range;
	let t;
	return typeof e.property == "string" ? t = Ka(e.node.$cstNode, e.property, e.index) : typeof e.keyword == "string" && (t = Ya(e.node.$cstNode, e.keyword, e.index)), t ??= e.node.$cstNode, t ? t.range : {
		start: {
			line: 0,
			character: 0
		},
		end: {
			line: 0,
			character: 0
		}
	};
}
o(TP, "getDiagnosticRange");
function EP(e) {
	switch (e) {
		case "error": return 1;
		case "warning": return 2;
		case "info": return 3;
		case "hint": return 4;
		default: throw Error("Invalid diagnostic severity: " + e);
	}
}
o(EP, "toDiagnosticSeverity");
function DP(e) {
	switch (e) {
		case "error": return vP(OP.LexingError);
		case "warning": return vP(OP.LexingWarning);
		case "info": return vP(OP.LexingInfo);
		case "hint": return vP(OP.LexingHint);
		default: throw Error("Invalid diagnostic severity: " + e);
	}
}
o(DP, "toDiagnosticData");
var OP;
(function(e) {
	e.LexingError = "lexing-error", e.LexingWarning = "lexing-warning", e.LexingInfo = "lexing-info", e.LexingHint = "lexing-hint", e.ParsingError = "parsing-error", e.LinkingError = "linking-error";
})(OP ||= {});
var kP, AP = (kP = class {
	constructor(e) {
		this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider;
	}
	createDescription(e, t, n) {
		let r = n ?? kn(e);
		t ??= this.nameProvider.getName(e);
		let i = this.astNodeLocator.getAstNodePath(e);
		if (!t) throw Error(`Node at path ${i} has no name.`);
		let a, s = /* @__PURE__ */ o(() => a ??= Ui(this.nameProvider.getNameNode(e) ?? e.$cstNode), "nameSegmentGetter");
		return {
			node: e,
			name: t,
			get nameSegment() {
				return s();
			},
			selectionSegment: Ui(e.$cstNode),
			type: e.$type,
			documentUri: r.uri,
			path: i
		};
	}
}, o(kP, "DefaultAstNodeDescriptionProvider"), kP), jP, MP = (jP = class {
	constructor(e) {
		this.nodeLocator = e.workspace.AstNodeLocator;
	}
	async createDescriptions(e, t = X.CancellationToken.None) {
		let n = [], r = e.parseResult.value;
		for (let e of Pn(r)) await fN(t), In(e).forEach((e) => {
			e.reference.error || n.push(...this.createInfoDescriptions(e));
		});
		return n;
	}
	createInfoDescriptions(e) {
		let t = e.reference;
		if (t.error || !t.$refNode) return [];
		let n = [];
		sn(t) && t.$nodeDescription ? n = [t.$nodeDescription] : cn(t) && (n = t.items.map((e) => e.$nodeDescription).filter((e) => e !== void 0));
		let r = kn(e.container).uri, i = this.nodeLocator.getAstNodePath(e.container), a = [], o = Ui(t.$refNode);
		for (let e of n) a.push({
			sourceUri: r,
			sourcePath: i,
			targetUri: e.documentUri,
			targetPath: e.path,
			segment: o,
			local: EN.equals(e.documentUri, r)
		});
		return a;
	}
}, o(jP, "DefaultReferenceDescriptionProvider"), jP), NP, PP = (NP = class {
	constructor() {
		this.segmentSeparator = "/", this.indexSeparator = "@";
	}
	getAstNodePath(e) {
		if (e.$container) {
			let t = this.getAstNodePath(e.$container), n = this.getPathSegment(e);
			return t + this.segmentSeparator + n;
		}
		return "";
	}
	getPathSegment({ $containerProperty: e, $containerIndex: t }) {
		if (!e) throw Error("Missing '$containerProperty' in AST node.");
		return t === void 0 ? e : e + this.indexSeparator + t;
	}
	getAstNode(e, t) {
		return t.split(this.segmentSeparator).reduce((e, t) => {
			if (!e || t.length === 0) return e;
			let n = t.indexOf(this.indexSeparator);
			if (n > 0) {
				let r = t.substring(0, n), i = parseInt(t.substring(n + 1));
				return e[r]?.[i];
			}
			return e[t];
		}, e);
	}
}, o(NP, "DefaultAstNodeLocator"), NP), FP = {};
d(FP, f(gt()));
var IP, LP = (IP = class {
	constructor(e) {
		this._ready = new mN(), this.onConfigurationSectionUpdateEmitter = new FP.Emitter(), this.settings = {}, this.workspaceConfig = !1, this.serviceRegistry = e.ServiceRegistry;
	}
	get ready() {
		return this._ready.promise;
	}
	initialize(e) {
		this.workspaceConfig = e.capabilities.workspace?.configuration ?? !1;
	}
	async initialized(e) {
		if (this.workspaceConfig) {
			if (e.register) {
				let t = this.serviceRegistry.all;
				e.register({ section: t.map((e) => this.toSectionName(e.LanguageMetaData.languageId)) });
			}
			if (e.fetchConfiguration) {
				let t = this.serviceRegistry.all.map((e) => ({ section: this.toSectionName(e.LanguageMetaData.languageId) })), n = await e.fetchConfiguration(t);
				t.forEach((e, t) => {
					this.updateSectionConfiguration(e.section, n[t]);
				});
			}
		}
		this._ready.resolve();
	}
	updateConfiguration(e) {
		typeof e.settings != "object" || e.settings === null || Object.entries(e.settings).forEach(([e, t]) => {
			this.updateSectionConfiguration(e, t), this.onConfigurationSectionUpdateEmitter.fire({
				section: e,
				configuration: t
			});
		});
	}
	updateSectionConfiguration(e, t) {
		this.settings[e] = t;
	}
	async getConfiguration(e, t) {
		await this.ready;
		let n = this.toSectionName(e);
		if (this.settings[n]) return this.settings[n][t];
	}
	toSectionName(e) {
		return `${e}`;
	}
	get onConfigurationSectionUpdate() {
		return this.onConfigurationSectionUpdateEmitter.event;
	}
}, o(IP, "DefaultConfigurationProvider"), IP), RP = f(nn()), zP;
(function(e) {
	function t(e) {
		return { dispose: /* @__PURE__ */ o(async () => await e(), "dispose") };
	}
	o(t, "create"), e.create = t;
})(zP ||= {});
var BP, VP = (BP = class {
	constructor(e) {
		this.updateBuildOptions = { validation: { categories: ["built-in", "fast"] } }, this.updateListeners = [], this.buildPhaseListeners = new HN(), this.documentPhaseListeners = new HN(), this.buildState = /* @__PURE__ */ new Map(), this.documentBuildWaiters = /* @__PURE__ */ new Map(), this.currentState = Z.Changed, this.langiumDocuments = e.workspace.LangiumDocuments, this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.textDocuments = e.workspace.TextDocuments, this.indexManager = e.workspace.IndexManager, this.fileSystemProvider = e.workspace.FileSystemProvider, this.workspaceManager = () => e.workspace.WorkspaceManager, this.serviceRegistry = e.ServiceRegistry;
	}
	async build(e, t = {}, n = X.CancellationToken.None) {
		for (let n of e) {
			let e = n.uri.toString();
			if (n.state === Z.Validated) {
				if (typeof t.validation == "boolean" && t.validation) this.resetToState(n, Z.IndexedReferences);
				else if (typeof t.validation == "object") {
					let r = this.findMissingValidationCategories(n, t);
					r.length > 0 && (this.buildState.set(e, {
						completed: !1,
						options: { validation: { categories: r } },
						result: this.buildState.get(e)?.result
					}), n.state = Z.IndexedReferences);
				}
			} else this.buildState.delete(e);
		}
		this.currentState = Z.Changed, await this.emitUpdate(e.map((e) => e.uri), []), await this.buildDocuments(e, t, n);
	}
	async update(e, t, n = X.CancellationToken.None) {
		this.currentState = Z.Changed;
		let r = [];
		for (let e of t) {
			let t = this.langiumDocuments.deleteDocuments(e);
			for (let e of t) r.push(e.uri), this.cleanUpDeleted(e);
		}
		let i = (await Promise.all(e.map((e) => this.findChangedUris(e)))).flat();
		for (let e of i) {
			let t = this.langiumDocuments.getDocument(e);
			t === void 0 && (t = this.langiumDocumentFactory.fromModel({ $type: "INVALID" }, e), t.state = Z.Changed, this.langiumDocuments.addDocument(t)), this.resetToState(t, Z.Changed);
		}
		let a = P(i).concat(r).map((e) => e.toString()).toSet();
		this.langiumDocuments.all.filter((e) => !a.has(e.uri.toString()) && this.shouldRelink(e, a)).forEach((e) => this.resetToState(e, Z.ComputedScopes)), await this.emitUpdate(i, r), await fN(n);
		let o = this.sortDocuments(this.langiumDocuments.all.filter((e) => e.state < Z.Validated || !this.buildState.get(e.uri.toString())?.completed || this.resultsAreIncomplete(e, this.updateBuildOptions)).toArray());
		await this.buildDocuments(o, this.updateBuildOptions, n);
	}
	resultsAreIncomplete(e, t) {
		return this.findMissingValidationCategories(e, t).length >= 1;
	}
	findMissingValidationCategories(e, t) {
		let n = this.buildState.get(e.uri.toString()), r = this.serviceRegistry.getServices(e.uri).validation.ValidationRegistry.getAllValidationCategories(e), i = n?.result?.validationChecks ? new Set(n?.result?.validationChecks) : n?.completed ? r : /* @__PURE__ */ new Set();
		return P(t === void 0 || t.validation === !0 ? r : typeof t.validation == "object" ? t.validation.categories ?? r : []).filter((e) => !i.has(e)).toArray();
	}
	async findChangedUris(e) {
		if (this.langiumDocuments.getDocument(e) ?? this.textDocuments?.get(e)) return [e];
		try {
			let t = await this.fileSystemProvider.stat(e);
			if (t.isDirectory) return await this.workspaceManager().searchFolder(e);
			if (this.workspaceManager().shouldIncludeEntry(t)) return [e];
		} catch {}
		return [];
	}
	async emitUpdate(e, t) {
		await Promise.all(this.updateListeners.map((n) => n(e, t)));
	}
	sortDocuments(e) {
		let t = 0, n = e.length - 1;
		for (; t < n;) {
			for (; t < e.length && this.hasTextDocument(e[t]);) t++;
			for (; n >= 0 && !this.hasTextDocument(e[n]);) n--;
			t < n && ([e[t], e[n]] = [e[n], e[t]]);
		}
		return e;
	}
	hasTextDocument(e) {
		return !!this.textDocuments?.get(e.uri);
	}
	shouldRelink(e, t) {
		return e.references.some((e) => e.error !== void 0) ? !0 : this.indexManager.isAffected(e, t);
	}
	onUpdate(e) {
		return this.updateListeners.push(e), zP.create(() => {
			let t = this.updateListeners.indexOf(e);
			t >= 0 && this.updateListeners.splice(t, 1);
		});
	}
	resetToState(e, t) {
		switch (t) {
			case Z.Changed:
			case Z.Parsed: this.indexManager.removeContent(e.uri);
			case Z.IndexedContent: e.localSymbols = void 0;
			case Z.ComputedScopes: this.serviceRegistry.getServices(e.uri).references.Linker.unlink(e);
			case Z.Linked: this.indexManager.removeReferences(e.uri);
			case Z.IndexedReferences: e.diagnostics = void 0, this.buildState.delete(e.uri.toString());
			case Z.Validated:
		}
		e.state > t && (e.state = t);
	}
	cleanUpDeleted(e) {
		this.buildState.delete(e.uri.toString()), this.indexManager.remove(e.uri), e.state = Z.Changed;
	}
	async buildDocuments(e, t, n) {
		this.prepareBuild(e, t), await this.runCancelable(e, Z.Parsed, n, (e) => this.langiumDocumentFactory.update(e, n)), await this.runCancelable(e, Z.IndexedContent, n, (e) => this.indexManager.updateContent(e, n)), await this.runCancelable(e, Z.ComputedScopes, n, async (e) => {
			e.localSymbols = await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.collectLocalSymbols(e, n);
		});
		let r = e.filter((e) => this.shouldLink(e));
		await this.runCancelable(r, Z.Linked, n, (e) => this.serviceRegistry.getServices(e.uri).references.Linker.link(e, n)), await this.runCancelable(r, Z.IndexedReferences, n, (e) => this.indexManager.updateReferences(e, n));
		let i = e.filter((e) => this.shouldValidate(e) ? !0 : (this.markAsCompleted(e), !1));
		await this.runCancelable(i, Z.Validated, n, async (e) => {
			await this.validate(e, n), this.markAsCompleted(e);
		});
	}
	markAsCompleted(e) {
		let t = this.buildState.get(e.uri.toString());
		t && (t.completed = !0);
	}
	prepareBuild(e, t) {
		for (let n of e) {
			let e = n.uri.toString(), r = this.buildState.get(e);
			(!r || r.completed) && this.buildState.set(e, {
				completed: !1,
				options: t,
				result: r?.result
			});
		}
	}
	async runCancelable(e, t, n, r) {
		for (let i of e) i.state < t && (await fN(n), await r(i), i.state = t, await this.notifyDocumentPhase(i, t, n));
		let i = e.filter((e) => e.state === t);
		await this.notifyBuildPhase(i, t, n), this.currentState = t;
	}
	onBuildPhase(e, t) {
		return this.buildPhaseListeners.add(e, t), zP.create(() => {
			this.buildPhaseListeners.delete(e, t);
		});
	}
	onDocumentPhase(e, t) {
		return this.documentPhaseListeners.add(e, t), zP.create(() => {
			this.documentPhaseListeners.delete(e, t);
		});
	}
	waitUntil(e, t, n) {
		let r;
		return t && "path" in t ? r = t : n = t, n ??= X.CancellationToken.None, r ? this.awaitDocumentState(e, r, n) : this.awaitBuilderState(e, n);
	}
	awaitDocumentState(e, t, n) {
		let r = this.langiumDocuments.getDocument(t);
		if (r) {
			if (r.state >= e) return Promise.resolve(t);
			if (n.isCancellationRequested) return Promise.reject(uN);
			if (this.currentState >= e && e > r.state) return Promise.reject(new RP.ResponseError(RP.LSPErrorCodes.RequestFailed, `Document state of ${t.toString()} is ${Z[r.state]}, requiring ${Z[e]}, but workspace state is already ${Z[this.currentState]}. Returning undefined.`));
		} else return Promise.reject(new RP.ResponseError(RP.LSPErrorCodes.ServerCancelled, `No document found for URI: ${t.toString()}`));
		return new Promise((r, i) => {
			let a = this.onDocumentPhase(e, (e) => {
				EN.equals(e.uri, t) && (a.dispose(), o.dispose(), r(e.uri));
			}), o = n.onCancellationRequested(() => {
				a.dispose(), o.dispose(), i(uN);
			});
		});
	}
	awaitBuilderState(e, t) {
		return this.currentState >= e ? Promise.resolve() : t.isCancellationRequested ? Promise.reject(uN) : new Promise((n, r) => {
			let i = this.onBuildPhase(e, () => {
				i.dispose(), a.dispose(), n();
			}), a = t.onCancellationRequested(() => {
				i.dispose(), a.dispose(), r(uN);
			});
		});
	}
	async notifyDocumentPhase(e, t, n) {
		let r = this.documentPhaseListeners.get(t).slice();
		for (let t of r) try {
			await fN(n), await t(e, n);
		} catch (e) {
			if (!dN(e)) throw e;
		}
	}
	async notifyBuildPhase(e, t, n) {
		if (e.length === 0) return;
		let r = this.buildPhaseListeners.get(t).slice();
		for (let t of r) await fN(n), await t(e, n);
	}
	shouldLink(e) {
		return this.getBuildOptions(e).eagerLinking ?? !0;
	}
	shouldValidate(e) {
		return !!this.getBuildOptions(e).validation;
	}
	async validate(e, t) {
		let n = this.serviceRegistry.getServices(e.uri).validation.DocumentValidator, r = this.getBuildOptions(e), i = typeof r.validation == "object" ? { ...r.validation } : {};
		i.categories = this.findMissingValidationCategories(e, r);
		let a = await n.validateDocument(e, i, t);
		e.diagnostics ? e.diagnostics.push(...a) : e.diagnostics = a;
		let o = this.buildState.get(e.uri.toString());
		o && (o.result ??= {}, o.result.validationChecks ? o.result.validationChecks = P(o.result.validationChecks).concat(i.categories).distinct().toArray() : o.result.validationChecks = [...i.categories]);
	}
	getBuildOptions(e) {
		return this.buildState.get(e.uri.toString())?.options ?? {};
	}
}, o(BP, "DefaultDocumentBuilder"), BP), HP, UP = (HP = class {
	constructor(e) {
		this.symbolIndex = /* @__PURE__ */ new Map(), this.symbolByTypeIndex = new aP(), this.referenceIndex = /* @__PURE__ */ new Map(), this.documents = e.workspace.LangiumDocuments, this.serviceRegistry = e.ServiceRegistry, this.astReflection = e.AstReflection;
	}
	findAllReferences(e, t) {
		let n = kn(e).uri, r = [];
		return this.referenceIndex.forEach((e) => {
			e.forEach((e) => {
				EN.equals(e.targetUri, n) && e.targetPath === t && r.push(e);
			});
		}), P(r);
	}
	allElements(e, t) {
		let n = P(this.symbolIndex.keys());
		return t && (n = n.filter((e) => !t || t.has(e))), n.map((t) => this.getFileDescriptions(t, e)).flat();
	}
	getFileDescriptions(e, t) {
		return t ? this.symbolByTypeIndex.get(e, t, () => (this.symbolIndex.get(e) ?? []).filter((e) => this.astReflection.isSubtype(e.type, t))) : this.symbolIndex.get(e) ?? [];
	}
	remove(e) {
		this.removeContent(e), this.removeReferences(e);
	}
	removeContent(e) {
		let t = e.toString();
		this.symbolIndex.delete(t), this.symbolByTypeIndex.clear(t);
	}
	removeReferences(e) {
		let t = e.toString();
		this.referenceIndex.delete(t);
	}
	async updateContent(e, t = X.CancellationToken.None) {
		let n = await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.collectExportedSymbols(e, t), r = e.uri.toString();
		this.symbolIndex.set(r, n), this.symbolByTypeIndex.clear(r);
	}
	async updateReferences(e, t = X.CancellationToken.None) {
		let n = await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e, t);
		this.referenceIndex.set(e.uri.toString(), n);
	}
	isAffected(e, t) {
		let n = this.referenceIndex.get(e.uri.toString());
		return n ? n.some((e) => !e.local && t.has(e.targetUri.toString())) : !1;
	}
}, o(HP, "DefaultIndexManager"), HP), WP, GP = (WP = class {
	constructor(e) {
		this.initialBuildOptions = {}, this._ready = new mN(), this.serviceRegistry = e.ServiceRegistry, this.langiumDocuments = e.workspace.LangiumDocuments, this.documentBuilder = e.workspace.DocumentBuilder, this.fileSystemProvider = e.workspace.FileSystemProvider, this.mutex = e.workspace.WorkspaceLock;
	}
	get ready() {
		return this._ready.promise;
	}
	get workspaceFolders() {
		return this.folders;
	}
	initialize(e) {
		this.folders = e.workspaceFolders ?? void 0;
	}
	initialized(e) {
		return this.mutex.write((e) => this.initializeWorkspace(this.folders ?? [], e));
	}
	async initializeWorkspace(e, t = X.CancellationToken.None) {
		let n = await this.performStartup(e);
		await fN(t), await this.documentBuilder.build(n, this.initialBuildOptions, t);
	}
	async performStartup(e) {
		let t = [], n = /* @__PURE__ */ o((e) => {
			t.push(e), this.langiumDocuments.hasDocument(e.uri) || this.langiumDocuments.addDocument(e);
		}, "collector");
		await this.loadAdditionalDocuments(e, n);
		let r = [];
		await Promise.all(e.map((e) => this.getRootFolder(e)).map(async (e) => this.traverseFolder(e, r)));
		let i = P(r).distinct((e) => e.toString()).filter((e) => !this.langiumDocuments.hasDocument(e));
		return await this.loadWorkspaceDocuments(i, n), this._ready.resolve(), t;
	}
	async loadWorkspaceDocuments(e, t) {
		await Promise.all(e.map(async (e) => {
			t(await this.langiumDocuments.getOrCreateDocument(e));
		}));
	}
	loadAdditionalDocuments(e, t) {
		return Promise.resolve();
	}
	getRootFolder(e) {
		return wN.parse(e.uri);
	}
	async traverseFolder(e, t) {
		try {
			let n = await this.fileSystemProvider.readDirectory(e);
			await Promise.all(n.map(async (e) => {
				this.shouldIncludeEntry(e) && (e.isDirectory ? await this.traverseFolder(e.uri, t) : e.isFile && t.push(e.uri));
			}));
		} catch (t) {
			console.error("Failure to read directory content of " + e.toString(!0), t);
		}
	}
	async searchFolder(e) {
		let t = [];
		return await this.traverseFolder(e, t), t;
	}
	shouldIncludeEntry(e) {
		let t = EN.basename(e.uri);
		return t.startsWith(".") ? !1 : e.isDirectory ? t !== "node_modules" && t !== "out" : e.isFile ? this.serviceRegistry.hasServices(e.uri) : !1;
	}
}, o(WP, "DefaultWorkspaceManager"), WP), KP, qP = (KP = class {
	buildUnexpectedCharactersMessage(e, t, n, r, i) {
		return ob.buildUnexpectedCharactersMessage(e, t, n, r, i);
	}
	buildUnableToPopLexerModeMessage(e) {
		return ob.buildUnableToPopLexerModeMessage(e);
	}
}, o(KP, "DefaultLexerErrorMessageProvider"), KP), JP = { mode: "full" }, YP, XP = (YP = class {
	constructor(e) {
		this.errorMessageProvider = e.parser.LexerErrorMessageProvider, this.tokenBuilder = e.parser.TokenBuilder;
		let t = this.tokenBuilder.buildTokens(e.Grammar, { caseInsensitive: e.LanguageMetaData.caseInsensitive });
		this.tokenTypes = this.toTokenTypeDictionary(t);
		let n = $P(t) ? Object.values(t) : t, r = e.LanguageMetaData.mode === "production";
		this.chevrotainLexer = new lb(n, {
			positionTracking: "full",
			skipValidations: r,
			errorMessageProvider: this.errorMessageProvider
		});
	}
	get definition() {
		return this.tokenTypes;
	}
	tokenize(e, t = JP) {
		let n = this.chevrotainLexer.tokenize(e);
		return {
			tokens: n.tokens,
			errors: n.errors,
			hidden: n.groups.hidden ?? [],
			report: this.tokenBuilder.flushLexingReport?.(e)
		};
	}
	toTokenTypeDictionary(e) {
		if ($P(e)) return e;
		let t = QP(e) ? Object.values(e.modes).flat() : e, n = {};
		return t.forEach((e) => n[e.name] = e), n;
	}
}, o(YP, "DefaultLexer"), YP);
function ZP(e) {
	return Array.isArray(e) && (e.length === 0 || "name" in e[0]);
}
o(ZP, "isTokenTypeArray");
function QP(e) {
	return e && "modes" in e && "defaultMode" in e;
}
o(QP, "isIMultiModeLexerDefinition");
function $P(e) {
	return !ZP(e) && !QP(e);
}
o($P, "isTokenTypeDictionary"), pt();
function eF(e, t, n) {
	let r, i;
	typeof e == "string" ? (i = t, r = n) : (i = e.range.start, r = t), i ||= y.create(0, 0);
	let a = nF(e), o = vF(r);
	return dF({
		index: 0,
		tokens: aF({
			lines: a,
			position: i,
			options: o
		}),
		position: i
	});
}
o(eF, "parseJSDoc");
function tF(e, t) {
	let n = vF(t), r = nF(e);
	if (r.length === 0) return !1;
	let i = r[0], a = r[r.length - 1], o = n.start, s = n.end;
	return !!o?.exec(i) && !!s?.exec(a);
}
o(tF, "isJSDoc");
function nF(e) {
	let t = "";
	return t = typeof e == "string" ? e : e.text, t.split(Da);
}
o(nF, "getLines");
var rF = /\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy, iF = /\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;
function aF(e) {
	let t = [], n = e.position.line, r = e.position.character;
	for (let i = 0; i < e.lines.length; i++) {
		let a = i === 0, o = i === e.lines.length - 1, s = e.lines[i], c = 0;
		if (a && e.options.start) {
			let t = e.options.start?.exec(s);
			t && (c = t.index + t[0].length);
		} else {
			let t = e.options.line?.exec(s);
			t && (c = t.index + t[0].length);
		}
		if (o) {
			let t = e.options.end?.exec(s);
			t && (s = s.substring(0, t.index));
		}
		if (s = s.substring(0, uF(s)), lF(s, c) >= s.length) {
			if (t.length > 0) {
				let e = y.create(n, r);
				t.push({
					type: "break",
					content: "",
					range: b.create(e, e)
				});
			}
		} else {
			rF.lastIndex = c;
			let e = rF.exec(s);
			if (e) {
				let i = e[0], a = e[1], o = y.create(n, r + c), l = y.create(n, r + c + i.length);
				t.push({
					type: "tag",
					content: a,
					range: b.create(o, l)
				}), c += i.length, c = lF(s, c);
			}
			if (c < s.length) {
				let e = s.substring(c), i = Array.from(e.matchAll(iF));
				t.push(...oF(i, e, n, r + c));
			}
		}
		n++, r = 0;
	}
	return t.length > 0 && t[t.length - 1].type === "break" ? t.slice(0, -1) : t;
}
o(aF, "tokenize");
function oF(e, t, n, r) {
	let i = [];
	if (e.length === 0) {
		let e = y.create(n, r), a = y.create(n, r + t.length);
		i.push({
			type: "text",
			content: t,
			range: b.create(e, a)
		});
	} else {
		let a = 0;
		for (let o of e) {
			let e = o.index, s = t.substring(a, e);
			s.length > 0 && i.push({
				type: "text",
				content: t.substring(a, e),
				range: b.create(y.create(n, a + r), y.create(n, e + r))
			});
			let c = s.length + 1, l = o[1];
			if (i.push({
				type: "inline-tag",
				content: l,
				range: b.create(y.create(n, a + c + r), y.create(n, a + c + l.length + r))
			}), c += l.length, o.length === 4) {
				c += o[2].length;
				let e = o[3];
				i.push({
					type: "text",
					content: e,
					range: b.create(y.create(n, a + c + r), y.create(n, a + c + e.length + r))
				});
			} else i.push({
				type: "text",
				content: "",
				range: b.create(y.create(n, a + c + r), y.create(n, a + c + r))
			});
			a = e + o[0].length;
		}
		let o = t.substring(a);
		o.length > 0 && i.push({
			type: "text",
			content: o,
			range: b.create(y.create(n, a + r), y.create(n, a + r + o.length))
		});
	}
	return i;
}
o(oF, "buildInlineTokens");
var sF = /\S/, cF = /\s*$/;
function lF(e, t) {
	let n = e.substring(t).match(sF);
	return n ? t + n.index : e.length;
}
o(lF, "skipWhitespace");
function uF(e) {
	let t = e.match(cF);
	if (t && typeof t.index == "number") return t.index;
}
o(uF, "lastCharacter");
function dF(e) {
	let t = y.create(e.position.line, e.position.character);
	if (e.tokens.length === 0) return new xF([], b.create(t, t));
	let n = [];
	for (; e.index < e.tokens.length;) {
		let t = fF(e, n[n.length - 1]);
		t && n.push(t);
	}
	let r = n[0]?.range.start ?? t, i = n[n.length - 1]?.range.end ?? t;
	return new xF(n, b.create(r, i));
}
o(dF, "parseJSDocComment");
function fF(e, t) {
	let n = e.tokens[e.index];
	if (n.type === "tag") return gF(e, !1);
	if (n.type === "text" || n.type === "inline-tag") return mF(e);
	pF(n, t), e.index++;
}
o(fF, "parseJSDocElement");
function pF(e, t) {
	if (t) {
		let n = new kF("", e.range);
		"inlines" in t ? t.inlines.push(n) : t.content.inlines.push(n);
	}
}
o(pF, "appendEmptyLine");
function mF(e) {
	let t = e.tokens[e.index], n = t, r = t, i = [];
	for (; t && t.type !== "break" && t.type !== "tag";) i.push(hF(e)), r = t, t = e.tokens[e.index];
	return new DF(i, b.create(n.range.start, r.range.end));
}
o(mF, "parseJSDocText");
function hF(e) {
	return e.tokens[e.index].type === "inline-tag" ? gF(e, !0) : _F(e);
}
o(hF, "parseJSDocInline");
function gF(e, t) {
	let n = e.tokens[e.index++], r = n.content.substring(1);
	if (e.tokens[e.index]?.type === "text") {
		if (t) {
			let i = _F(e);
			return new CF(r, new DF([i], i.range), t, b.create(n.range.start, i.range.end));
		}
		{
			let i = mF(e);
			return new CF(r, i, t, b.create(n.range.start, i.range.end));
		}
	}
	{
		let e = n.range;
		return new CF(r, new DF([], e), t, e);
	}
}
o(gF, "parseJSDocTag");
function _F(e) {
	let t = e.tokens[e.index++];
	return new kF(t.content, t.range);
}
o(_F, "parseJSDocLine");
function vF(e) {
	if (!e) return vF({
		start: "/**",
		end: "*/",
		line: "*"
	});
	let { start: t, end: n, line: r } = e;
	return {
		start: yF(t, !0),
		end: yF(n, !1),
		line: yF(r, !0)
	};
}
o(vF, "normalizeOptions");
function yF(e, t) {
	if (typeof e == "string" || typeof e == "object") {
		let n = typeof e == "string" ? Fa(e) : e.source;
		return RegExp(t ? `^\\s*${n}` : `\\s*${n}\\s*$`);
	}
	return e;
}
o(yF, "normalizeOption");
var bF, xF = (bF = class {
	constructor(e, t) {
		this.elements = e, this.range = t;
	}
	getTag(e) {
		return this.getAllTags().find((t) => t.name === e);
	}
	getTags(e) {
		return this.getAllTags().filter((t) => t.name === e);
	}
	getAllTags() {
		return this.elements.filter((e) => "name" in e);
	}
	toString() {
		let e = "";
		for (let t of this.elements) if (e.length === 0) e = t.toString();
		else {
			let n = t.toString();
			e += AF(e) + n;
		}
		return e.trim();
	}
	toMarkdown(e) {
		let t = "";
		for (let n of this.elements) if (t.length === 0) t = n.toMarkdown(e);
		else {
			let r = n.toMarkdown(e);
			t += AF(t) + r;
		}
		return t.trim();
	}
}, o(bF, "JSDocCommentImpl"), bF), SF, CF = (SF = class {
	constructor(e, t, n, r) {
		this.name = e, this.content = t, this.inline = n, this.range = r;
	}
	toString() {
		let e = `@${this.name}`, t = this.content.toString();
		return this.content.inlines.length === 1 ? e = `${e} ${t}` : this.content.inlines.length > 1 && (e = `${e}
${t}`), this.inline ? `{${e}}` : e;
	}
	toMarkdown(e) {
		return e?.renderTag?.(this) ?? this.toMarkdownDefault(e);
	}
	toMarkdownDefault(e) {
		let t = this.content.toMarkdown(e);
		if (this.inline) {
			let n = wF(this.name, t, e ?? {});
			if (typeof n == "string") return n;
		}
		let n = "";
		e?.tag === "italic" || e?.tag === void 0 ? n = "*" : e?.tag === "bold" ? n = "**" : e?.tag === "bold-italic" && (n = "***");
		let r = `${n}@${this.name}${n}`;
		return this.content.inlines.length === 1 ? r = `${r} — ${t}` : this.content.inlines.length > 1 && (r = `${r}
${t}`), this.inline ? `{${r}}` : r;
	}
}, o(SF, "JSDocTagImpl"), SF);
function wF(e, t, n) {
	if (e === "linkplain" || e === "linkcode" || e === "link") {
		let r = t.indexOf(" "), i = t;
		if (r > 0) {
			let e = lF(t, r);
			i = t.substring(e), t = t.substring(0, r);
		}
		return (e === "linkcode" || e === "link" && n.link === "code") && (i = `\`${i}\``), n.renderLink?.(t, i) ?? TF(t, i);
	}
}
o(wF, "renderInlineTag");
function TF(e, t) {
	try {
		return wN.parse(e, !0), `[${t}](${e})`;
	} catch {
		return e;
	}
}
o(TF, "renderLinkDefault");
var EF, DF = (EF = class {
	constructor(e, t) {
		this.inlines = e, this.range = t;
	}
	toString() {
		let e = "";
		for (let t = 0; t < this.inlines.length; t++) {
			let n = this.inlines[t], r = this.inlines[t + 1];
			e += n.toString(), r && r.range.start.line > n.range.start.line && (e += "\n");
		}
		return e;
	}
	toMarkdown(e) {
		let t = "";
		for (let n = 0; n < this.inlines.length; n++) {
			let r = this.inlines[n], i = this.inlines[n + 1];
			t += r.toMarkdown(e), i && i.range.start.line > r.range.start.line && (t += "\n");
		}
		return t;
	}
}, o(EF, "JSDocTextImpl"), EF), OF, kF = (OF = class {
	constructor(e, t) {
		this.text = e, this.range = t;
	}
	toString() {
		return this.text;
	}
	toMarkdown() {
		return this.text;
	}
}, o(OF, "JSDocLineImpl"), OF);
function AF(e) {
	return e.endsWith("\n") ? "\n" : "\n\n";
}
o(AF, "fillNewlines");
var jF, MF = (jF = class {
	constructor(e) {
		this.indexManager = e.shared.workspace.IndexManager, this.commentProvider = e.documentation.CommentProvider;
	}
	getDocumentation(e) {
		let t = this.commentProvider.getComment(e);
		if (t && tF(t)) return eF(t).toMarkdown({
			renderLink: /* @__PURE__ */ o((t, n) => this.documentationLinkRenderer(e, t, n), "renderLink"),
			renderTag: /* @__PURE__ */ o((t) => this.documentationTagRenderer(e, t), "renderTag")
		});
	}
	documentationLinkRenderer(e, t, n) {
		let r = this.findNameInLocalSymbols(e, t) ?? this.findNameInGlobalScope(e, t);
		if (r && r.nameSegment) {
			let e = r.nameSegment.range.start.line + 1, t = r.nameSegment.range.start.character + 1;
			return `[${n}](${r.documentUri.with({ fragment: `L${e},${t}` }).toString()})`;
		}
	}
	documentationTagRenderer(e, t) {}
	findNameInLocalSymbols(e, t) {
		let n = kn(e).localSymbols;
		if (!n) return;
		let r = e;
		do {
			let e = n.getStream(r).find((e) => e.name === t);
			if (e) return e;
			r = r.$container;
		} while (r);
	}
	findNameInGlobalScope(e, t) {
		return this.indexManager.allElements().find((e) => e.name === t);
	}
}, o(jF, "JSDocDocumentationProvider"), jF), NF, PF = (NF = class {
	constructor(e) {
		this.grammarConfig = () => e.parser.GrammarConfig;
	}
	getComment(e) {
		return fP(e) ? e.$comment : Yi(e.$cstNode, this.grammarConfig().multilineCommentRules)?.text;
	}
}, o(NF, "DefaultCommentProvider"), NF), FF, IF = (FF = class {
	constructor(e) {
		this.syncParser = e.parser.LangiumParser;
	}
	parse(e, t) {
		return Promise.resolve(this.syncParser.parse(e));
	}
}, o(FF, "DefaultAsyncParser"), FF), LF, RF = (LF = class {
	constructor(e) {
		this.threadCount = 8, this.terminationDelay = 200, this.workerPool = [], this.queue = [], this.hydrator = e.serializer.Hydrator;
	}
	initializeWorkers() {
		for (; this.workerPool.length < this.threadCount;) {
			let e = this.createWorker();
			e.onReady(() => {
				if (this.queue.length > 0) {
					let t = this.queue.shift();
					t && (e.lock(), t.resolve(e));
				}
			}), this.workerPool.push(e);
		}
	}
	async parse(e, t) {
		let n = await this.acquireParserWorker(t), r = new mN(), i, a = t.onCancellationRequested(() => {
			i = setTimeout(() => {
				this.terminateWorker(n);
			}, this.terminationDelay);
		});
		return n.parse(e).then((e) => {
			let t = this.hydrator.hydrate(e);
			r.resolve(t);
		}).catch((e) => {
			r.reject(e);
		}).finally(() => {
			a.dispose(), clearTimeout(i);
		}), r.promise;
	}
	terminateWorker(e) {
		e.terminate();
		let t = this.workerPool.indexOf(e);
		t >= 0 && this.workerPool.splice(t, 1);
	}
	async acquireParserWorker(e) {
		this.initializeWorkers();
		for (let e of this.workerPool) if (e.ready) return e.lock(), e;
		let t = new mN();
		return e.onCancellationRequested(() => {
			let e = this.queue.indexOf(t);
			e >= 0 && this.queue.splice(e, 1), t.reject(uN);
		}), this.queue.push(t), t.promise;
	}
}, o(LF, "AbstractThreadedAsyncParser"), LF), zF, BF = (zF = class {
	get ready() {
		return this._ready;
	}
	get onReady() {
		return this.onReadyEmitter.event;
	}
	constructor(e, t, n, r) {
		this.onReadyEmitter = new FP.Emitter(), this.deferred = new mN(), this._ready = !0, this._parsing = !1, this.sendMessage = e, this._terminate = r, t((e) => {
			let t = e;
			this.deferred.resolve(t), this.unlock();
		}), n((e) => {
			this.deferred.reject(e), this.unlock();
		});
	}
	terminate() {
		this.deferred.reject(uN), this._terminate();
	}
	lock() {
		this._ready = !1;
	}
	unlock() {
		this._parsing = !1, this._ready = !0, this.onReadyEmitter.fire();
	}
	parse(e) {
		if (this._parsing) throw Error("Parser worker is busy");
		return this._parsing = !0, this.deferred = new mN(), this.sendMessage(e), this.deferred.promise;
	}
}, o(zF, "ParserWorker"), zF), VF, HF = (VF = class {
	constructor() {
		this.previousTokenSource = new X.CancellationTokenSource(), this.writeQueue = [], this.readQueue = [], this.done = !0;
	}
	write(e) {
		this.cancelWrite();
		let t = cN();
		return this.previousTokenSource = t, this.enqueue(this.writeQueue, e, t.token);
	}
	read(e) {
		return this.enqueue(this.readQueue, e);
	}
	enqueue(e, t, n = X.CancellationToken.None) {
		let r = new mN(), i = {
			action: t,
			deferred: r,
			cancellationToken: n
		};
		return e.push(i), this.performNextOperation(), r.promise;
	}
	async performNextOperation() {
		if (!this.done) return;
		let e = [];
		if (this.writeQueue.length > 0) e.push(this.writeQueue.shift());
		else if (this.readQueue.length > 0) e.push(...this.readQueue.splice(0, this.readQueue.length));
		else return;
		this.done = !1, await Promise.all(e.map(async ({ action: e, deferred: t, cancellationToken: n }) => {
			try {
				let r = await Promise.resolve().then(() => e(n));
				t.resolve(r);
			} catch (e) {
				dN(e) ? t.resolve(void 0) : t.reject(e);
			}
		})), this.done = !0, this.performNextOperation();
	}
	cancelWrite() {
		this.previousTokenSource.cancel();
	}
}, o(VF, "DefaultWorkspaceLock"), VF), UF, WF = (UF = class {
	constructor(e) {
		this.grammarElementIdMap = new WN(), this.tokenTypeIdMap = new WN(), this.grammar = e.Grammar, this.lexer = e.parser.Lexer, this.linker = e.references.Linker;
	}
	dehydrate(e) {
		return {
			lexerErrors: e.lexerErrors,
			lexerReport: e.lexerReport ? this.dehydrateLexerReport(e.lexerReport) : void 0,
			parserErrors: e.parserErrors.map((e) => ({
				...e,
				message: e.message
			})),
			value: this.dehydrateAstNode(e.value, this.createDehyrationContext(e.value))
		};
	}
	dehydrateLexerReport(e) {
		return e;
	}
	createDehyrationContext(e) {
		let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
		for (let n of Pn(e)) t.set(n, {});
		if (e.$cstNode) for (let t of zi(e.$cstNode)) n.set(t, {});
		return {
			astNodes: t,
			cstNodes: n
		};
	}
	dehydrateAstNode(e, t) {
		let n = t.astNodes.get(e);
		n.$type = e.$type, n.$containerIndex = e.$containerIndex, n.$containerProperty = e.$containerProperty, e.$cstNode !== void 0 && (n.$cstNode = this.dehydrateCstNode(e.$cstNode, t));
		for (let [r, i] of Object.entries(e)) if (!r.startsWith("$")) {
			if (Array.isArray(i)) {
				let e = [];
				n[r] = e;
				for (let n of i) on(n) ? e.push(this.dehydrateAstNode(n, t)) : sn(n) ? e.push(this.dehydrateReference(n, t)) : e.push(n);
			} else on(i) ? n[r] = this.dehydrateAstNode(i, t) : sn(i) ? n[r] = this.dehydrateReference(i, t) : i !== void 0 && (n[r] = i);
		}
		return n;
	}
	dehydrateReference(e, t) {
		let n = {};
		return n.$refText = e.$refText, e.$refNode && (n.$refNode = t.cstNodes.get(e.$refNode)), n;
	}
	dehydrateCstNode(e, t) {
		let n = t.cstNodes.get(e);
		return hn(e) ? n.fullText = e.fullText : n.grammarSource = this.getGrammarElementId(e.grammarSource), n.hidden = e.hidden, n.astNode = t.astNodes.get(e.astNode), pn(e) ? n.content = e.content.map((e) => this.dehydrateCstNode(e, t)) : mn(e) && (n.tokenType = e.tokenType.name, n.offset = e.offset, n.length = e.length, n.startLine = e.range.start.line, n.startColumn = e.range.start.character, n.endLine = e.range.end.line, n.endColumn = e.range.end.character), n;
	}
	hydrate(e) {
		let t = e.value, n = this.createHydrationContext(t);
		return "$cstNode" in t && this.hydrateCstNode(t.$cstNode, n), {
			lexerErrors: e.lexerErrors,
			lexerReport: e.lexerReport,
			parserErrors: e.parserErrors,
			value: this.hydrateAstNode(t, n)
		};
	}
	createHydrationContext(e) {
		let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
		for (let n of Pn(e)) t.set(n, {});
		let r;
		if (e.$cstNode) for (let t of zi(e.$cstNode)) {
			let e;
			"fullText" in t ? (e = new pM(t.fullText), r = e) : "content" in t ? e = new lM() : "tokenType" in t && (e = this.hydrateCstLeafNode(t)), e && (n.set(t, e), e.root = r);
		}
		return {
			astNodes: t,
			cstNodes: n
		};
	}
	hydrateAstNode(e, t) {
		let n = t.astNodes.get(e);
		n.$type = e.$type, n.$containerIndex = e.$containerIndex, n.$containerProperty = e.$containerProperty, e.$cstNode && (n.$cstNode = t.cstNodes.get(e.$cstNode));
		for (let [r, i] of Object.entries(e)) if (!r.startsWith("$")) {
			if (Array.isArray(i)) {
				let e = [];
				n[r] = e;
				for (let a of i) on(a) ? e.push(this.setParent(this.hydrateAstNode(a, t), n)) : sn(a) ? e.push(this.hydrateReference(a, n, r, t)) : e.push(a);
			} else on(i) ? n[r] = this.setParent(this.hydrateAstNode(i, t), n) : sn(i) ? n[r] = this.hydrateReference(i, n, r, t) : i !== void 0 && (n[r] = i);
		}
		return n;
	}
	setParent(e, t) {
		return e.$container = t, e;
	}
	hydrateReference(e, t, n, r) {
		return this.linker.buildReference(t, n, r.cstNodes.get(e.$refNode), e.$refText);
	}
	hydrateCstNode(e, t, n = 0) {
		let r = t.cstNodes.get(e);
		if (typeof e.grammarSource == "number" && (r.grammarSource = this.getGrammarElement(e.grammarSource)), r.astNode = t.astNodes.get(e.astNode), pn(r)) for (let i of e.content) {
			let e = this.hydrateCstNode(i, t, n++);
			r.content.push(e);
		}
		return r;
	}
	hydrateCstLeafNode(e) {
		let t = this.getTokenType(e.tokenType), n = e.offset, r = e.length, i = e.startLine, a = e.startColumn, o = e.endLine, s = e.endColumn, c = e.hidden;
		return new sM(n, r, {
			start: {
				line: i,
				character: a
			},
			end: {
				line: o,
				character: s
			}
		}, t, c);
	}
	getTokenType(e) {
		return this.lexer.definition[e];
	}
	getGrammarElementId(e) {
		if (e) return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.get(e);
	}
	getGrammarElement(e) {
		return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.getKey(e);
	}
	createGrammarElementIdMap() {
		let e = 0;
		for (let t of Pn(this.grammar)) Un(t) && this.grammarElementIdMap.set(t, e++);
	}
}, o(UF, "DefaultHydrator"), UF);
function GF(e) {
	return {
		documentation: {
			CommentProvider: /* @__PURE__ */ o((e) => new PF(e), "CommentProvider"),
			DocumentationProvider: /* @__PURE__ */ o((e) => new MF(e), "DocumentationProvider")
		},
		parser: {
			AsyncParser: /* @__PURE__ */ o((e) => new IF(e), "AsyncParser"),
			GrammarConfig: /* @__PURE__ */ o((e) => wo(e), "GrammarConfig"),
			LangiumParser: /* @__PURE__ */ o((e) => QM(e), "LangiumParser"),
			CompletionParser: /* @__PURE__ */ o((e) => ZM(e), "CompletionParser"),
			ValueConverter: /* @__PURE__ */ o(() => new rN(), "ValueConverter"),
			TokenBuilder: /* @__PURE__ */ o(() => new tN(), "TokenBuilder"),
			Lexer: /* @__PURE__ */ o((e) => new XP(e), "Lexer"),
			ParserErrorMessageProvider: /* @__PURE__ */ o(() => new TM(), "ParserErrorMessageProvider"),
			LexerErrorMessageProvider: /* @__PURE__ */ o(() => new qP(), "LexerErrorMessageProvider")
		},
		workspace: {
			AstNodeLocator: /* @__PURE__ */ o(() => new PP(), "AstNodeLocator"),
			AstNodeDescriptionProvider: /* @__PURE__ */ o((e) => new AP(e), "AstNodeDescriptionProvider"),
			ReferenceDescriptionProvider: /* @__PURE__ */ o((e) => new MP(e), "ReferenceDescriptionProvider")
		},
		references: {
			Linker: /* @__PURE__ */ o((e) => new FN(e), "Linker"),
			NameProvider: /* @__PURE__ */ o(() => new RN(), "NameProvider"),
			ScopeProvider: /* @__PURE__ */ o((e) => new dP(e), "ScopeProvider"),
			ScopeComputation: /* @__PURE__ */ o((e) => new KN(e), "ScopeComputation"),
			References: /* @__PURE__ */ o((e) => new BN(e), "References")
		},
		serializer: {
			Hydrator: /* @__PURE__ */ o((e) => new WF(e), "Hydrator"),
			JsonSerializer: /* @__PURE__ */ o((e) => new hP(e), "JsonSerializer")
		},
		validation: {
			DocumentValidator: /* @__PURE__ */ o((e) => new wP(e), "DocumentValidator"),
			ValidationRegistry: /* @__PURE__ */ o((e) => new xP(e), "ValidationRegistry")
		},
		shared: /* @__PURE__ */ o(() => e.shared, "shared")
	};
}
o(GF, "createDefaultCoreModule");
function KF(e) {
	return {
		ServiceRegistry: /* @__PURE__ */ o((e) => new _P(e), "ServiceRegistry"),
		workspace: {
			LangiumDocuments: /* @__PURE__ */ o((e) => new MN(e), "LangiumDocuments"),
			LangiumDocumentFactory: /* @__PURE__ */ o((e) => new AN(e), "LangiumDocumentFactory"),
			DocumentBuilder: /* @__PURE__ */ o((e) => new VP(e), "DocumentBuilder"),
			IndexManager: /* @__PURE__ */ o((e) => new UP(e), "IndexManager"),
			WorkspaceManager: /* @__PURE__ */ o((e) => new GP(e), "WorkspaceManager"),
			FileSystemProvider: /* @__PURE__ */ o((t) => e.fileSystemProvider(t), "FileSystemProvider"),
			WorkspaceLock: /* @__PURE__ */ o(() => new HF(), "WorkspaceLock"),
			ConfigurationProvider: /* @__PURE__ */ o((e) => new LP(e), "ConfigurationProvider")
		},
		profilers: {}
	};
}
o(KF, "createDefaultSharedCoreModule");
var qF;
(function(e) {
	e.merge = (e, t) => $F($F({}, e), t);
})(qF ||= {});
function Q(e, t, n, r, i, a, o, s, c) {
	return XF([
		e,
		t,
		n,
		r,
		i,
		a,
		o,
		s,
		c
	].reduce($F, {}));
}
o(Q, "inject");
var JF = /* @__PURE__ */ Symbol("isProxy");
function YF(e) {
	if (e && e[JF]) for (let t of Object.values(e)) YF(t);
	return e;
}
o(YF, "eagerLoad");
function XF(e, t) {
	let n = new Proxy({}, {
		deleteProperty: /* @__PURE__ */ o(() => !1, "deleteProperty"),
		set: /* @__PURE__ */ o(() => {
			throw Error("Cannot set property on injected service container");
		}, "set"),
		get: /* @__PURE__ */ o((r, i) => i === JF || QF(r, i, e, t || n), "get"),
		getOwnPropertyDescriptor: /* @__PURE__ */ o((r, i) => (QF(r, i, e, t || n), Object.getOwnPropertyDescriptor(r, i)), "getOwnPropertyDescriptor"),
		has: /* @__PURE__ */ o((t, n) => n in e, "has"),
		ownKeys: /* @__PURE__ */ o(() => [...Object.getOwnPropertyNames(e)], "ownKeys")
	});
	return n;
}
o(XF, "_inject");
var ZF = /* @__PURE__ */ Symbol();
function QF(e, t, n, r) {
	if (t in e) {
		if (e[t] instanceof Error) throw Error("Construction failure. Please make sure that your dependencies are constructable. Cause: " + e[t]);
		if (e[t] === ZF) throw Error("Cycle detected. Please make \"" + String(t) + "\" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies");
		return e[t];
	}
	if (t in n) {
		let i = n[t];
		e[t] = ZF;
		try {
			e[t] = typeof i == "function" ? i(r) : XF(i, r);
		} catch (n) {
			throw e[t] = n instanceof Error ? n : void 0, n;
		}
		return e[t];
	}
}
o(QF, "_resolve");
function $F(e, t) {
	if (t) {
		for (let [n, r] of Object.entries(t)) if (r != null) {
			if (typeof r == "object") {
				let t = e[n];
				e[n] = $F(typeof t == "object" && t ? t : {}, r);
			} else e[n] = r;
		}
	}
	return e;
}
o($F, "_merge");
var eI = {
	indentTokenName: "INDENT",
	dedentTokenName: "DEDENT",
	whitespaceTokenName: "WS",
	ignoreIndentationDelimiters: []
}, tI;
(function(e) {
	e.REGULAR = "indentation-sensitive", e.IGNORE_INDENTATION = "ignore-indentation";
})(tI ||= {});
var nI, rI = (nI = class extends tN {
	constructor(e = eI) {
		super(), this.indentationStack = [0], this.whitespaceRegExp = /[ \t]+/y, this.options = {
			...eI,
			...e
		}, this.indentTokenType = xb({
			name: this.options.indentTokenName,
			pattern: this.indentMatcher.bind(this),
			line_breaks: !1
		}), this.dedentTokenType = xb({
			name: this.options.dedentTokenName,
			pattern: this.dedentMatcher.bind(this),
			line_breaks: !1
		});
	}
	buildTokens(e, t) {
		let n = super.buildTokens(e, t);
		if (!ZP(n)) throw Error("Invalid tokens built by default builder");
		let { indentTokenName: r, dedentTokenName: i, whitespaceTokenName: a, ignoreIndentationDelimiters: o } = this.options, s, c, l, u = [];
		for (let e of n) {
			for (let [t, n] of o) e.name === t ? e.PUSH_MODE = tI.IGNORE_INDENTATION : e.name === n && (e.POP_MODE = !0);
			e.name === i ? s = e : e.name === r ? c = e : e.name === a ? l = e : u.push(e);
		}
		if (!s || !c || !l) throw Error("Some indentation/whitespace tokens not found!");
		return o.length > 0 ? {
			modes: {
				[tI.REGULAR]: [
					s,
					c,
					...u,
					l
				],
				[tI.IGNORE_INDENTATION]: [...u, l]
			},
			defaultMode: tI.REGULAR
		} : [
			s,
			c,
			l,
			...u
		];
	}
	flushLexingReport(e) {
		return {
			...super.flushLexingReport(e),
			remainingDedents: this.flushRemainingDedents(e)
		};
	}
	isStartOfLine(e, t) {
		return t === 0 || "\r\n".includes(e[t - 1]);
	}
	matchWhitespace(e, t, n, r) {
		this.whitespaceRegExp.lastIndex = t;
		let i = this.whitespaceRegExp.exec(e);
		return {
			currIndentLevel: i?.[0].length ?? 0,
			prevIndentLevel: this.indentationStack.at(-1),
			match: i
		};
	}
	createIndentationTokenInstance(e, t, n, r) {
		let i = this.getLineNumber(t, r);
		return wb(e, n, r, r + n.length, i, i, 1, n.length);
	}
	getLineNumber(e, t) {
		return e.substring(0, t).split(/\r\n|\r|\n/).length;
	}
	indentMatcher(e, t, n, r) {
		if (!this.isStartOfLine(e, t)) return null;
		let { currIndentLevel: i, prevIndentLevel: a, match: o } = this.matchWhitespace(e, t, n, r);
		return i <= a ? null : (this.indentationStack.push(i), o);
	}
	dedentMatcher(e, t, n, r) {
		if (!this.isStartOfLine(e, t)) return null;
		let { currIndentLevel: i, prevIndentLevel: a, match: o } = this.matchWhitespace(e, t, n, r);
		if (i >= a) return null;
		let s = this.indentationStack.lastIndexOf(i);
		if (s === -1) return this.diagnostics.push({
			severity: "error",
			message: `Invalid dedent level ${i} at offset: ${t}. Current indentation stack: ${this.indentationStack}`,
			offset: t,
			length: o?.[0]?.length ?? 0,
			line: this.getLineNumber(e, t),
			column: 1
		}), null;
		let c = this.indentationStack.length - s - 1, l = e.substring(0, t).match(/[\r\n]+$/)?.[0].length ?? 1;
		for (let r = 0; r < c; r++) {
			let r = this.createIndentationTokenInstance(this.dedentTokenType, e, "", t - (l - 1));
			n.push(r), this.indentationStack.pop();
		}
		return null;
	}
	buildTerminalToken(e) {
		let t = super.buildTerminalToken(e), { indentTokenName: n, dedentTokenName: r, whitespaceTokenName: i } = this.options;
		return t.name === n ? this.indentTokenType : t.name === r ? this.dedentTokenType : t.name === i ? xb({
			name: i,
			pattern: this.whitespaceRegExp,
			group: lb.SKIPPED
		}) : t;
	}
	flushRemainingDedents(e) {
		let t = [];
		for (; this.indentationStack.length > 1;) t.push(this.createIndentationTokenInstance(this.dedentTokenType, e, "", e.length)), this.indentationStack.pop();
		return this.indentationStack = [0], t;
	}
}, o(nI, "IndentationAwareTokenBuilder"), nI), iI, aI = (iI = class extends XP {
	constructor(e) {
		if (super(e), e.parser.TokenBuilder instanceof rI) this.indentationTokenBuilder = e.parser.TokenBuilder;
		else throw Error("IndentationAwareLexer requires an accompanying IndentationAwareTokenBuilder");
	}
	tokenize(e, t = JP) {
		let n = super.tokenize(e), r = n.report;
		t?.mode === "full" && n.tokens.push(...r.remainingDedents), r.remainingDedents = [];
		let { indentTokenType: i, dedentTokenType: a } = this.indentationTokenBuilder, o = i.tokenTypeIdx, s = a.tokenTypeIdx, c = [], l = n.tokens.length - 1;
		for (let e = 0; e < l; e++) {
			let t = n.tokens[e], r = n.tokens[e + 1];
			if (t.tokenTypeIdx === o && r.tokenTypeIdx === s) {
				e++;
				continue;
			}
			c.push(t);
		}
		return l >= 0 && c.push(n.tokens[l]), n.tokens = c, n;
	}
}, o(iI, "IndentationAwareLexer"), iI), oI = {};
l(oI, {
	AstUtils: () => Tn,
	BiMap: () => WN,
	Cancellation: () => X,
	ContextCache: () => aP,
	CstUtils: () => an,
	DONE_RESULT: () => xn,
	Deferred: () => mN,
	Disposable: () => zP,
	DisposableCache: () => tP,
	DocumentCache: () => sP,
	EMPTY_STREAM: () => bn,
	ErrorWithLocation: () => ca,
	GrammarUtils: () => oa,
	MultiMap: () => HN,
	OperationCancelled: () => uN,
	Reduction: () => wn,
	RegExpUtils: () => da,
	SimpleCache: () => rP,
	StreamImpl: () => _n,
	TreeStreamImpl: () => Cn,
	URI: () => wN,
	UriTrie: () => ON,
	UriUtils: () => EN,
	WorkspaceCache: () => lP,
	assertCondition: () => ua,
	assertUnreachable: () => la,
	delayNextTick: () => aN,
	interruptAndCheck: () => fN,
	isOperationCancelled: () => dN,
	loadGrammarFromJson: () => pI,
	setInterruptionPeriod: () => lN,
	startCancelableOperation: () => cN,
	stream: () => P
}), d(oI, FP);
var sI, cI = (sI = class {
	stat(e) {
		throw Error("No file system is available.");
	}
	statSync(e) {
		throw Error("No file system is available.");
	}
	async exists() {
		return !1;
	}
	existsSync() {
		return !1;
	}
	readBinary() {
		throw Error("No file system is available.");
	}
	readBinarySync() {
		throw Error("No file system is available.");
	}
	readFile() {
		throw Error("No file system is available.");
	}
	readFileSync() {
		throw Error("No file system is available.");
	}
	async readDirectory() {
		return [];
	}
	readDirectorySync() {
		return [];
	}
}, o(sI, "EmptyFileSystemProvider"), sI), lI = { fileSystemProvider: /* @__PURE__ */ o(() => new cI(), "fileSystemProvider") }, uI = {
	Grammar: /* @__PURE__ */ o(() => {}, "Grammar"),
	LanguageMetaData: /* @__PURE__ */ o(() => ({
		caseInsensitive: !1,
		fileExtensions: [".langium"],
		languageId: "langium"
	}), "LanguageMetaData")
}, dI = { AstReflection: /* @__PURE__ */ o(() => new Li(), "AstReflection") };
function fI() {
	let e = Q(KF(lI), dI), t = Q(GF({ shared: e }), uI);
	return e.ServiceRegistry.register(t), t;
}
o(fI, "createMinimalGrammarServices");
function pI(e) {
	let t = fI(), n = t.serializer.JsonSerializer.deserialize(e);
	return t.shared.workspace.LangiumDocumentFactory.fromModel(n, wN.parse(`memory:/${n.name ?? "grammar"}.langium`)), n;
}
o(pI, "loadGrammarFromJson"), d(rn, oI);
var mI, hI = (mI = class {
	constructor(e) {
		this.activeCategories = /* @__PURE__ */ new Set(), this.allCategories = /* @__PURE__ */ new Set([
			"validating",
			"parsing",
			"linking"
		]), this.activeCategories = e ?? new Set(this.allCategories), this.records = new HN();
	}
	isActive(e) {
		return this.activeCategories.has(e);
	}
	start(...e) {
		e ? e.forEach((e) => this.activeCategories.add(e)) : this.activeCategories = new Set(this.allCategories);
	}
	stop(...e) {
		e ? e.forEach((e) => this.activeCategories.delete(e)) : this.activeCategories.clear();
	}
	createTask(e, t) {
		if (!this.isActive(e)) throw Error(`Category "${e}" is not active.`);
		return console.log(`Creating profiling task for '${e}.${t}'.`), new _I((t) => this.records.add(e, this.dumpRecord(e, t)), t);
	}
	dumpRecord(e, t) {
		console.info(`Task ${e}.${t.identifier} executed in ${t.duration.toFixed(2)}ms and ended at ${t.date.toISOString()}`);
		let n = [];
		for (let e of t.entries.keys()) {
			let r = t.entries.get(e), i = r.reduce((e, t) => e + t);
			n.push({
				name: `${t.identifier}.${e}`,
				count: r.length,
				duration: i
			});
		}
		let r = t.duration - n.map((e) => e.duration).reduce((e, t) => e + t, 0);
		n.push({
			name: t.identifier,
			count: 1,
			duration: r
		}), n.sort((e, t) => t.duration - e.duration);
		function i(e) {
			return Math.round(100 * e) / 100;
		}
		return o(i, "Round"), console.table(n.map((e) => ({
			Element: e.name,
			Count: e.count,
			"Self %": i(100 * e.duration / t.duration),
			"Time (ms)": i(e.duration)
		}))), t;
	}
	getRecords(...e) {
		return e.length === 0 ? this.records.values() : this.records.entries().filter((t) => e.some((e) => e === t[0])).flatMap((e) => e[1]);
	}
}, o(mI, "DefaultLangiumProfiler"), mI), gI, _I = (gI = class {
	constructor(e, t) {
		this.stack = [], this.entries = new HN(), this.addRecord = e, this.identifier = t;
	}
	start() {
		if (this.startTime !== void 0) throw Error(`Task "${this.identifier}" is already started.`);
		this.startTime = performance.now();
	}
	stop() {
		if (this.startTime === void 0) throw Error(`Task "${this.identifier}" was not started.`);
		if (this.stack.length !== 0) throw Error(`Task "${this.identifier}" cannot be stopped before sub-task(s): ${this.stack.map((e) => e.id).join(", ")}.`);
		let e = {
			identifier: this.identifier,
			date: /* @__PURE__ */ new Date(),
			duration: performance.now() - this.startTime,
			entries: this.entries
		};
		this.addRecord(e), this.startTime = void 0, this.entries.clear();
	}
	startSubTask(e) {
		this.stack.push({
			id: e,
			start: performance.now(),
			content: 0
		});
	}
	stopSubTask(e) {
		let t = this.stack.pop();
		if (!t) throw Error(`Task "${this.identifier}.${e}" was not started.`);
		if (t.id !== e) throw Error(`Sub-Task "${t.id}" is not already stopped.`);
		let n = performance.now() - t.start;
		this.stack.at(-1) !== void 0 && (this.stack[this.stack.length - 1].content += n);
		let r = n - t.content;
		this.entries.add(e, r);
	}
}, o(gI, "ProfilingTask"), gI), vI;
((e) => {
	e.Terminals = {
		ARROW_DIRECTION: /L|R|T|B/,
		ARROW_GROUP: /\{group\}/,
		ARROW_INTO: /<|>/,
		ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
		ID: /[\w]([-\w]*\w)?/,
		NEWLINE: /\r?\n/,
		WHITESPACE: /[\t ]+/,
		YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
		DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
		SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/,
		ARCH_ICON: /\([\w-:]+\)/,
		ARCH_TITLE: /\[(?:"([^"\\]|\\.)*"|'([^'\\]|\\.)*'|[^\[\]\r\n]+)\]/
	};
})(vI ||= {});
var yI;
((e) => {
	e.Terminals = {
		DOMAIN_NAME: /complex|complicated|clear|chaotic|confusion/,
		ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
		NEWLINE: /\r?\n/,
		WHITESPACE: /[\t ]+/,
		YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
		DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
		SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
	};
})(yI ||= {});
var bI;
((e) => {
	e.Terminals = {
		EM_ID: /[_a-zA-Z][\w_]*/,
		EM_FID: /\d{1,3}/,
		EM_DATA_INLINE: /\{(.*)\}|"(.*)"|'(.*)'/,
		EM_DATA_BLOCK: /\{[\t ]*\r?\n(?:[\S\s]*?\r?\n)?\}(?:\r?\n|(?!\S))/,
		EM_ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		EM_ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		EM_TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		EM_WS: /\s+/,
		EM_YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
		EM_DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
		EM_SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/,
		EM_ML_COMMENT: /\/\*[\s\S]*?\*\//,
		EM_SL_COMMENT: /\/\/[^\n\r]*/
	};
})(bI ||= {});
var xI;
((e) => {
	e.Terminals = {
		ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		INT: /0|[1-9][0-9]*(?!\.)/,
		STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
		NEWLINE: /\r?\n/,
		WHITESPACE: /[\t ]+/,
		YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
		DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
		SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/,
		REFERENCE: /\w([-\./\w]*[-\w])?/
	};
})(xI ||= {});
var SI;
((e) => {
	e.Terminals = {
		ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		NEWLINE: /\r?\n/,
		WHITESPACE: /[\t ]+/,
		YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
		DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
		SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
	};
})(SI ||= {});
var CI;
((e) => {
	e.Terminals = {
		ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		INT: /0|[1-9][0-9]*(?!\.)/,
		STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
		NEWLINE: /\r?\n/,
		WHITESPACE: /[\t ]+/,
		YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
		DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
		SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
	};
})(CI ||= {});
var wI;
((e) => {
	e.Terminals = {
		NUMBER_PIE: /(?:-?[0-9]+\.[0-9]+(?!\.))|(?:-?(0|[1-9][0-9]*)(?!\.))/,
		ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
		NEWLINE: /\r?\n/,
		WHITESPACE: /[\t ]+/,
		YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
		DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
		SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
	};
})(wI ||= {});
var TI;
((e) => {
	e.Terminals = {
		GRATICULE: /circle|polygon/,
		BOOLEAN: /true|false/,
		ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		NUMBER: /(?:[0-9]+\.[0-9]+(?!\.))|(?:0|[1-9][0-9]*(?!\.))/,
		STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
		ID: /[\w]([-\w]*\w)?/,
		NEWLINE: /\r?\n/,
		WHITESPACE: /[\t ]+/,
		YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
		DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
		SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
	};
})(TI ||= {});
var EI;
((e) => {
	e.Terminals = {
		TITLE: /title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		ACC_TITLE: /accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		ACC_DESCR: /accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		ABNF_RULENAME: /[A-Za-z][A-Za-z0-9-]*/,
		ABNF_STRING: /"[^"]*"/,
		ABNF_NUMVAL: /%[xXdDbB][0-9A-Fa-f]+(?:-[0-9A-Fa-f]+|\.[0-9A-Fa-f]+)*/,
		ABNF_REPEAT: /[0-9]*\*[0-9]*/,
		ABNF_EXACT_REPEAT: /[0-9]+/,
		ABNF_WHITESPACE: /[\t \r\n]+/,
		ABNF_YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
		ABNF_DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
		ABNF_SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/,
		ABNF_COMMENT: /;[^\n\r]*/
	};
})(EI ||= {});
var DI;
((e) => {
	e.Terminals = {
		TITLE: /title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		ACC_TITLE: /accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		ACC_DESCR: /accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		EBNF_ID: /[A-Z_a-z][\w-]*/,
		EBNF_STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
		EBNF_SPECIAL_SEQUENCE: /\?(?=[^?;]*[^?\s;][^?;]*\?)[^?;]*\?/,
		EBNF_WHITESPACE: /[\t \r\n]+/,
		EBNF_YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
		EBNF_DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
		EBNF_SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/,
		EBNF_BLOCK_COMMENT: /\/\*[\s\S]*?\*\//,
		EBNF_ISO_COMMENT: /\(\*[\s\S]*?\*\)/
	};
})(DI ||= {});
var OI;
((e) => {
	e.Terminals = {
		TITLE: /title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		ACC_TITLE: /accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		ACC_DESCR: /accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		RR_ID: /[A-Z_a-z][\w-]*/,
		RR_STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
		RR_WHITESPACE: /[\t \r\n]+/,
		RR_YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
		RR_DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
		RR_SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/,
		RR_BLOCK_COMMENT: /\/\*[\s\S]*?\*\//
	};
})(OI ||= {});
var kI;
((e) => {
	e.Terminals = {
		TITLE: /title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		ACC_TITLE: /accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		ACC_DESCR: /accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		PEG_ID: /[A-Z_a-z][\w-]*/,
		PEG_STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
		PEG_WHITESPACE: /[\t \r\n]+/,
		PEG_YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
		PEG_DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
		PEG_SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/,
		PEG_LINE_COMMENT: /#[^\n\r]*/
	};
})(kI ||= {});
var AI;
((e) => {
	e.Terminals = {
		ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		TREEMAP_KEYWORD: /treemap-beta|treemap/,
		CLASS_DEF: /classDef\s+([a-zA-Z_][a-zA-Z0-9_]+)(?:\s+([^;\r\n]*))?(?:;)?/,
		STYLE_SEPARATOR: /:::/,
		SEPARATOR: /:/,
		COMMA: /,/,
		INDENTATION: /[ \t]{1,}/,
		WS: /[ \t]+/,
		ML_COMMENT: /\%\%[^\n]*/,
		NL: /\r?\n/,
		ID2: /[a-zA-Z_][a-zA-Z0-9_]*/,
		NUMBER2: /[0-9_\.\,]+/,
		STRING2: /"[^"]*"|'[^']*'/
	};
})(AI ||= {});
var jI;
((e) => {
	e.Terminals = {
		ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		CLASS_ANNOTATION: /[ \t]+:::[ \t]*[A-Za-z_][\w-]*/,
		ICON_ANNOTATION: /[ \t]+icon\([\w-]*(?::[\w-]+)?\)/,
		DESC_ANNOTATION: /[ \t]+##[^\n\r]*/,
		INDENTATION: /[ \t]{1,}/,
		QUOTED_NAME: /"[^"]*"|'[^']*'/,
		WS: /[ \t]+/,
		ML_COMMENT: /\%\%[^\n]*/,
		NL: /\r?\n/,
		BARE_NAME: /(?!:::|icon\(|##)[^ \t\n\r"'](?:(?![ \t]+:::[ \t]*[A-Za-z_]|[ \t]+icon\(|[ \t]+##)[^\n\r])*/
	};
})(jI ||= {});
var MI;
((e) => {
	e.Terminals = {
		WARDLEY_NUMBER: /[0-9]+\.[0-9]+/,
		ARROW: /->/,
		LINK_PORT: /\+<>|\+>|\+</,
		LINK_ARROW: /-->|-\.->|>|\+'[^']*'<>|\+'[^']*'<|\+'[^']*'>/,
		LINK_LABEL: /;[^\n\r]+/,
		STRATEGY: /build|buy|outsource|market/,
		KW_WARDLEY: /wardley-beta/,
		KW_SIZE: /size/,
		KW_EVOLUTION: /evolution/,
		KW_ANCHOR: /anchor/,
		KW_COMPONENT: /component/,
		KW_LABEL: /label/,
		KW_INERTIA: /inertia/,
		KW_EVOLVE: /evolve/,
		KW_PIPELINE: /pipeline/,
		KW_NOTE: /note/,
		KW_ANNOTATIONS: /annotations/,
		KW_ANNOTATION: /annotation/,
		KW_ACCELERATOR: /accelerator/,
		KW_DEACCELERATOR: /deaccelerator/,
		NAME_WITH_SPACES: /(?!title\s|accTitle|accDescr)[A-Za-z](?:[A-Za-z0-9_()&]|-(?!>))*(?:[ \t]+[A-Za-z(](?:[A-Za-z0-9_()&]|-(?!>))*)*/,
		WS: /[ \t]+/,
		ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		INT: /0|[1-9][0-9]*(?!\.)/,
		STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
		ID: /[\w]([-\w]*\w)?/,
		NEWLINE: /\r?\n/,
		WHITESPACE: /[\t ]+/,
		YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
		DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
		SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
	};
})(MI ||= {}), {
	...vI.Terminals,
	...yI.Terminals,
	...bI.Terminals,
	...xI.Terminals,
	...SI.Terminals,
	...CI.Terminals,
	...wI.Terminals,
	...TI.Terminals,
	...EI.Terminals,
	...DI.Terminals,
	...OI.Terminals,
	...kI.Terminals,
	...jI.Terminals,
	...AI.Terminals,
	...MI.Terminals
};
var NI = {
	$type: "AbnfAlternation",
	alternatives: "alternatives"
}, PI = {
	$type: "AbnfConcatenation",
	elements: "elements"
}, FI = {
	$type: "AbnfElement",
	primary: "primary",
	repeat: "repeat"
}, II = {
	$type: "AbnfGroup",
	element: "element"
}, LI = {
	$type: "AbnfNumVal",
	value: "value"
}, RI = {
	$type: "AbnfOptionalGroup",
	element: "element"
}, zI = { $type: "AbnfPrimary" }, BI = {
	$type: "AbnfRule",
	definition: "definition",
	name: "name"
}, VI = {
	$type: "AbnfRuleName",
	name: "name"
}, HI = {
	$type: "AbnfStringLiteral",
	value: "value"
}, UI = {
	$type: "Accelerator",
	name: "name",
	x: "x",
	y: "y"
}, WI = {
	$type: "Alignment",
	direction: "direction",
	members: "members"
}, GI = {
	$type: "Anchor",
	evolution: "evolution",
	name: "name",
	visibility: "visibility"
}, KI = {
	$type: "Annotation",
	number: "number",
	text: "text",
	x: "x",
	y: "y"
}, qI = {
	$type: "Annotations",
	x: "x",
	y: "y"
}, JI = {
	$type: "Architecture",
	accDescr: "accDescr",
	accTitle: "accTitle",
	alignments: "alignments",
	edges: "edges",
	groups: "groups",
	junctions: "junctions",
	services: "services",
	title: "title"
};
function YI(e) {
	return $.isInstance(e, JI.$type);
}
o(YI, "isArchitecture");
var XI = {
	$type: "Axis",
	label: "label",
	name: "name"
}, ZI = {
	$type: "Branch",
	name: "name",
	order: "order"
};
function QI(e) {
	return $.isInstance(e, ZI.$type);
}
o(QI, "isBranch");
var $I = {
	$type: "Checkout",
	branch: "branch"
}, eL = {
	$type: "CherryPicking",
	id: "id",
	parent: "parent",
	tags: "tags"
}, tL = {
	$type: "ClassDefStatement",
	className: "className",
	styleText: "styleText"
}, nL = {
	$type: "Commit",
	id: "id",
	message: "message",
	tags: "tags",
	type: "type"
};
function rL(e) {
	return $.isInstance(e, nL.$type);
}
o(rL, "isCommit");
var iL = {
	$type: "Common",
	accDescr: "accDescr",
	accTitle: "accTitle",
	title: "title"
}, aL = {
	$type: "Component",
	decorator: "decorator",
	evolution: "evolution",
	inertia: "inertia",
	label: "label",
	name: "name",
	visibility: "visibility"
}, oL = {
	$type: "Curve",
	entries: "entries",
	label: "label",
	name: "name"
}, sL = {
	$type: "Cynefin",
	accDescr: "accDescr",
	accTitle: "accTitle",
	domains: "domains",
	title: "title",
	transitions: "transitions"
};
function cL(e) {
	return $.isInstance(e, sL.$type);
}
o(cL, "isCynefin");
var lL = {
	$type: "Deaccelerator",
	name: "name",
	x: "x",
	y: "y"
}, uL = {
	$type: "Decorator",
	strategy: "strategy"
}, dL = {
	$type: "Direction",
	accDescr: "accDescr",
	accTitle: "accTitle",
	dir: "dir",
	statements: "statements",
	title: "title"
}, fL = {
	$type: "DomainBlock",
	domain: "domain",
	items: "items"
};
function pL(e) {
	return $.isInstance(e, fL.$type);
}
o(pL, "isDomainBlock");
var mL = {
	$type: "DomainItem",
	label: "label"
};
function hL(e) {
	return $.isInstance(e, mL.$type);
}
o(hL, "isDomainItem");
var gL = {
	$type: "EbnfChoice",
	alternatives: "alternatives"
}, _L = {
	$type: "EbnfExceptionPostfix",
	except: "except"
}, vL = {
	$type: "EbnfGroup",
	element: "element"
}, yL = {
	$type: "EbnfNonTerminal",
	name: "name"
}, bL = {
	$type: "EbnfOneOrMorePostfix",
	operator: "operator"
}, xL = {
	$type: "EbnfOptional",
	element: "element"
}, SL = {
	$type: "EbnfOptionalPostfix",
	operator: "operator"
}, CL = { $type: "EbnfPostfix" }, wL = { $type: "EbnfPrimary" }, TL = {
	$type: "EbnfRepetition",
	element: "element"
}, EL = {
	$type: "EbnfRule",
	definition: "definition",
	name: "name"
}, DL = {
	$type: "EbnfSequence",
	elements: "elements"
}, OL = {
	$type: "EbnfSpecial",
	text: "text"
}, kL = {
	$type: "EbnfTerm",
	base: "base",
	postfixes: "postfixes"
}, AL = {
	$type: "EbnfTerminal",
	value: "value"
}, jL = {
	$type: "EbnfZeroOrMorePostfix",
	operator: "operator"
}, ML = {
	$type: "Edge",
	lhsDir: "lhsDir",
	lhsGroup: "lhsGroup",
	lhsId: "lhsId",
	lhsInto: "lhsInto",
	rhsDir: "rhsDir",
	rhsGroup: "rhsGroup",
	rhsId: "rhsId",
	rhsInto: "rhsInto",
	title: "title"
}, NL = {
	$type: "EmDataEntity",
	dataBlockValue: "dataBlockValue",
	dataType: "dataType",
	name: "name"
}, PL = { $type: "EmFrame" }, FL = {
	$type: "EmGwt",
	givenStatements: "givenStatements",
	sourceFrame: "sourceFrame",
	thenStatements: "thenStatements",
	whenStatements: "whenStatements"
}, IL = {
	$type: "EmGwtStatement",
	entityIdentifier: "entityIdentifier"
}, LL = {
	$type: "EmModelEntity",
	name: "name"
};
function RL(e) {
	return e === "rmo" || e === "readmodel" || e === "ui" || e === "cmd" || e === "command" || e === "evt" || e === "event" || e === "pcr" || e === "processor";
}
o(RL, "isEmModelEntityType");
var zL = {
	$type: "EmNoteEntity",
	dataBlockValue: "dataBlockValue",
	dataType: "dataType",
	sourceFrame: "sourceFrame"
}, BL = {
	$type: "EmResetFrame",
	dataInlineValue: "dataInlineValue",
	dataReference: "dataReference",
	dataType: "dataType",
	entityIdentifier: "entityIdentifier",
	modelEntityType: "modelEntityType",
	name: "name",
	sourceFrames: "sourceFrames"
};
function VL(e) {
	return $.isInstance(e, BL.$type);
}
o(VL, "isEmResetFrame");
var HL = {
	$type: "EmTimeFrame",
	dataInlineValue: "dataInlineValue",
	dataReference: "dataReference",
	dataType: "dataType",
	entityIdentifier: "entityIdentifier",
	modelEntityType: "modelEntityType",
	name: "name",
	sourceFrames: "sourceFrames"
}, UL = {
	$type: "Entry",
	axis: "axis",
	value: "value"
}, WL = {
	$type: "EventModel",
	accDescr: "accDescr",
	accTitle: "accTitle",
	dataEntities: "dataEntities",
	frames: "frames",
	gwtEntities: "gwtEntities",
	modelEntities: "modelEntities",
	noteEntities: "noteEntities",
	title: "title"
}, GL = {
	$type: "Evolution",
	stages: "stages"
}, KL = {
	$type: "EvolutionStage",
	boundary: "boundary",
	name: "name",
	secondName: "secondName"
}, qL = {
	$type: "Evolve",
	component: "component",
	target: "target"
}, JL = {
	$type: "GitGraph",
	accDescr: "accDescr",
	accTitle: "accTitle",
	statements: "statements",
	title: "title"
};
function YL(e) {
	return $.isInstance(e, JL.$type);
}
o(YL, "isGitGraph");
var XL = {
	$type: "Group",
	icon: "icon",
	id: "id",
	in: "in",
	title: "title"
}, ZL = {
	$type: "Info",
	accDescr: "accDescr",
	accTitle: "accTitle",
	title: "title"
};
function QL(e) {
	return $.isInstance(e, ZL.$type);
}
o(QL, "isInfo");
var $L = {
	$type: "Item",
	classSelector: "classSelector",
	name: "name"
}, eR = {
	$type: "Junction",
	id: "id",
	in: "in"
}, tR = {
	$type: "Label",
	negX: "negX",
	negY: "negY",
	offsetX: "offsetX",
	offsetY: "offsetY"
}, nR = {
	$type: "Leaf",
	classSelector: "classSelector",
	name: "name",
	value: "value"
}, rR = {
	$type: "Link",
	arrow: "arrow",
	from: "from",
	fromPort: "fromPort",
	linkLabel: "linkLabel",
	to: "to",
	toPort: "toPort"
}, iR = {
	$type: "Merge",
	branch: "branch",
	id: "id",
	tags: "tags",
	type: "type"
};
function aR(e) {
	return $.isInstance(e, iR.$type);
}
o(aR, "isMerge");
var oR = {
	$type: "Note",
	evolution: "evolution",
	text: "text",
	visibility: "visibility"
}, sR = {
	$type: "Option",
	name: "name",
	value: "value"
}, cR = {
	$type: "Packet",
	accDescr: "accDescr",
	accTitle: "accTitle",
	blocks: "blocks",
	title: "title"
};
function lR(e) {
	return $.isInstance(e, cR.$type);
}
o(lR, "isPacket");
var uR = {
	$type: "PacketBlock",
	bits: "bits",
	end: "end",
	label: "label",
	start: "start"
};
function dR(e) {
	return $.isInstance(e, uR.$type);
}
o(dR, "isPacketBlock");
var fR = {
	$type: "PegAny",
	dot: "dot"
}, pR = {
	$type: "PegGroup",
	element: "element"
}, mR = {
	$type: "PegIdentifier",
	name: "name"
}, hR = {
	$type: "PegLiteral",
	value: "value"
}, gR = {
	$type: "PegOrderedChoice",
	alternatives: "alternatives"
}, _R = {
	$type: "PegPrefix",
	operator: "operator",
	suffix: "suffix"
}, vR = { $type: "PegPrimary" }, yR = {
	$type: "PegRule",
	definition: "definition",
	name: "name"
}, bR = {
	$type: "PegSequence",
	elements: "elements"
}, xR = {
	$type: "PegSuffix",
	operator: "operator",
	primary: "primary"
}, SR = {
	$type: "Pie",
	accDescr: "accDescr",
	accTitle: "accTitle",
	sections: "sections",
	showData: "showData",
	title: "title"
};
function CR(e) {
	return $.isInstance(e, SR.$type);
}
o(CR, "isPie");
var wR = {
	$type: "PieSection",
	label: "label",
	value: "value"
};
function TR(e) {
	return $.isInstance(e, wR.$type);
}
o(TR, "isPieSection");
var ER = {
	$type: "Pipeline",
	components: "components",
	parent: "parent"
}, DR = {
	$type: "PipelineComponent",
	evolution: "evolution",
	label: "label",
	name: "name"
}, OR = {
	$type: "Radar",
	accDescr: "accDescr",
	accTitle: "accTitle",
	axes: "axes",
	curves: "curves",
	options: "options",
	title: "title"
}, kR = {
	$type: "Railroad",
	accDescr: "accDescr",
	accTitle: "accTitle",
	rules: "rules",
	title: "title"
};
function AR(e) {
	return $.isInstance(e, kR.$type);
}
o(AR, "isRailroad");
var jR = {
	$type: "RailroadAbnf",
	accDescr: "accDescr",
	accTitle: "accTitle",
	rules: "rules",
	title: "title"
};
function MR(e) {
	return $.isInstance(e, jR.$type);
}
o(MR, "isRailroadAbnf");
var NR = {
	$type: "RailroadChoiceExpr",
	alternatives: "alternatives"
}, PR = {
	$type: "RailroadEbnf",
	accDescr: "accDescr",
	accTitle: "accTitle",
	rules: "rules",
	title: "title"
};
function FR(e) {
	return $.isInstance(e, PR.$type);
}
o(FR, "isRailroadEbnf");
var IR = { $type: "RailroadExpression" }, LR = {
	$type: "RailroadNonTerminalExpr",
	name: "name"
}, RR = {
	$type: "RailroadOneOrMoreExpr",
	element: "element"
}, zR = {
	$type: "RailroadOptionalExpr",
	element: "element"
}, BR = {
	$type: "RailroadPeg",
	accDescr: "accDescr",
	accTitle: "accTitle",
	rules: "rules",
	title: "title"
};
function VR(e) {
	return $.isInstance(e, BR.$type);
}
o(VR, "isRailroadPeg");
var HR = {
	$type: "RailroadRule",
	definition: "definition",
	name: "name"
}, UR = {
	$type: "RailroadSequenceExpr",
	elements: "elements"
}, WR = {
	$type: "RailroadSpecialExpr",
	text: "text"
}, GR = {
	$type: "RailroadTerminalExpr",
	value: "value"
}, KR = {
	$type: "RailroadZeroOrMoreExpr",
	element: "element"
}, qR = {
	$type: "Section",
	classSelector: "classSelector",
	name: "name"
}, JR = {
	$type: "Service",
	icon: "icon",
	iconText: "iconText",
	id: "id",
	in: "in",
	title: "title"
}, YR = {
	$type: "Size",
	height: "height",
	width: "width"
}, XR = { $type: "Statement" }, ZR = {
	$type: "Transition",
	from: "from",
	label: "label",
	to: "to"
};
function QR(e) {
	return $.isInstance(e, ZR.$type);
}
o(QR, "isTransition");
var $R = {
	$type: "Treemap",
	accDescr: "accDescr",
	accTitle: "accTitle",
	title: "title",
	TreemapRows: "TreemapRows"
};
function ez(e) {
	return $.isInstance(e, $R.$type);
}
o(ez, "isTreemap");
var tz = {
	$type: "TreemapRow",
	indent: "indent",
	item: "item"
}, nz = {
	$type: "TreeNode",
	classAnnotation: "classAnnotation",
	descAnnotation: "descAnnotation",
	iconAnnotation: "iconAnnotation",
	indent: "indent",
	name: "name"
}, rz = {
	$type: "TreeView",
	accDescr: "accDescr",
	accTitle: "accTitle",
	nodes: "nodes",
	title: "title"
}, iz = {
	$type: "Wardley",
	accDescr: "accDescr",
	accelerators: "accelerators",
	accTitle: "accTitle",
	anchors: "anchors",
	annotation: "annotation",
	annotations: "annotations",
	components: "components",
	deaccelerators: "deaccelerators",
	evolution: "evolution",
	evolves: "evolves",
	links: "links",
	notes: "notes",
	pipelines: "pipelines",
	size: "size",
	title: "title"
};
function az(e) {
	return $.isInstance(e, iz.$type);
}
o(az, "isWardley");
var oz, sz = (oz = class extends fn {
	constructor() {
		super(...arguments), this.types = {
			AbnfAlternation: {
				name: NI.$type,
				properties: { alternatives: {
					name: NI.alternatives,
					defaultValue: []
				} },
				superTypes: []
			},
			AbnfConcatenation: {
				name: PI.$type,
				properties: { elements: {
					name: PI.elements,
					defaultValue: []
				} },
				superTypes: []
			},
			AbnfElement: {
				name: FI.$type,
				properties: {
					primary: { name: FI.primary },
					repeat: { name: FI.repeat }
				},
				superTypes: []
			},
			AbnfGroup: {
				name: II.$type,
				properties: { element: { name: II.element } },
				superTypes: [zI.$type]
			},
			AbnfNumVal: {
				name: LI.$type,
				properties: { value: { name: LI.value } },
				superTypes: [zI.$type]
			},
			AbnfOptionalGroup: {
				name: RI.$type,
				properties: { element: { name: RI.element } },
				superTypes: [zI.$type]
			},
			AbnfPrimary: {
				name: zI.$type,
				properties: {},
				superTypes: []
			},
			AbnfRule: {
				name: BI.$type,
				properties: {
					definition: { name: BI.definition },
					name: { name: BI.name }
				},
				superTypes: []
			},
			AbnfRuleName: {
				name: VI.$type,
				properties: { name: { name: VI.name } },
				superTypes: [zI.$type]
			},
			AbnfStringLiteral: {
				name: HI.$type,
				properties: { value: { name: HI.value } },
				superTypes: [zI.$type]
			},
			Accelerator: {
				name: UI.$type,
				properties: {
					name: { name: UI.name },
					x: { name: UI.x },
					y: { name: UI.y }
				},
				superTypes: []
			},
			Alignment: {
				name: WI.$type,
				properties: {
					direction: { name: WI.direction },
					members: {
						name: WI.members,
						defaultValue: []
					}
				},
				superTypes: []
			},
			Anchor: {
				name: GI.$type,
				properties: {
					evolution: { name: GI.evolution },
					name: { name: GI.name },
					visibility: { name: GI.visibility }
				},
				superTypes: []
			},
			Annotation: {
				name: KI.$type,
				properties: {
					number: { name: KI.number },
					text: { name: KI.text },
					x: { name: KI.x },
					y: { name: KI.y }
				},
				superTypes: []
			},
			Annotations: {
				name: qI.$type,
				properties: {
					x: { name: qI.x },
					y: { name: qI.y }
				},
				superTypes: []
			},
			Architecture: {
				name: JI.$type,
				properties: {
					accDescr: { name: JI.accDescr },
					accTitle: { name: JI.accTitle },
					alignments: {
						name: JI.alignments,
						defaultValue: []
					},
					edges: {
						name: JI.edges,
						defaultValue: []
					},
					groups: {
						name: JI.groups,
						defaultValue: []
					},
					junctions: {
						name: JI.junctions,
						defaultValue: []
					},
					services: {
						name: JI.services,
						defaultValue: []
					},
					title: { name: JI.title }
				},
				superTypes: []
			},
			Axis: {
				name: XI.$type,
				properties: {
					label: { name: XI.label },
					name: { name: XI.name }
				},
				superTypes: []
			},
			Branch: {
				name: ZI.$type,
				properties: {
					name: { name: ZI.name },
					order: { name: ZI.order }
				},
				superTypes: [XR.$type]
			},
			Checkout: {
				name: $I.$type,
				properties: { branch: { name: $I.branch } },
				superTypes: [XR.$type]
			},
			CherryPicking: {
				name: eL.$type,
				properties: {
					id: { name: eL.id },
					parent: { name: eL.parent },
					tags: {
						name: eL.tags,
						defaultValue: []
					}
				},
				superTypes: [XR.$type]
			},
			ClassDefStatement: {
				name: tL.$type,
				properties: {
					className: { name: tL.className },
					styleText: { name: tL.styleText }
				},
				superTypes: []
			},
			Commit: {
				name: nL.$type,
				properties: {
					id: { name: nL.id },
					message: { name: nL.message },
					tags: {
						name: nL.tags,
						defaultValue: []
					},
					type: { name: nL.type }
				},
				superTypes: [XR.$type]
			},
			Common: {
				name: iL.$type,
				properties: {
					accDescr: { name: iL.accDescr },
					accTitle: { name: iL.accTitle },
					title: { name: iL.title }
				},
				superTypes: []
			},
			Component: {
				name: aL.$type,
				properties: {
					decorator: { name: aL.decorator },
					evolution: { name: aL.evolution },
					inertia: {
						name: aL.inertia,
						defaultValue: !1
					},
					label: { name: aL.label },
					name: { name: aL.name },
					visibility: { name: aL.visibility }
				},
				superTypes: []
			},
			Curve: {
				name: oL.$type,
				properties: {
					entries: {
						name: oL.entries,
						defaultValue: []
					},
					label: { name: oL.label },
					name: { name: oL.name }
				},
				superTypes: []
			},
			Cynefin: {
				name: sL.$type,
				properties: {
					accDescr: { name: sL.accDescr },
					accTitle: { name: sL.accTitle },
					domains: {
						name: sL.domains,
						defaultValue: []
					},
					title: { name: sL.title },
					transitions: {
						name: sL.transitions,
						defaultValue: []
					}
				},
				superTypes: []
			},
			Deaccelerator: {
				name: lL.$type,
				properties: {
					name: { name: lL.name },
					x: { name: lL.x },
					y: { name: lL.y }
				},
				superTypes: []
			},
			Decorator: {
				name: uL.$type,
				properties: { strategy: { name: uL.strategy } },
				superTypes: []
			},
			Direction: {
				name: dL.$type,
				properties: {
					accDescr: { name: dL.accDescr },
					accTitle: { name: dL.accTitle },
					dir: { name: dL.dir },
					statements: {
						name: dL.statements,
						defaultValue: []
					},
					title: { name: dL.title }
				},
				superTypes: [JL.$type]
			},
			DomainBlock: {
				name: fL.$type,
				properties: {
					domain: { name: fL.domain },
					items: {
						name: fL.items,
						defaultValue: []
					}
				},
				superTypes: []
			},
			DomainItem: {
				name: mL.$type,
				properties: { label: { name: mL.label } },
				superTypes: []
			},
			EbnfChoice: {
				name: gL.$type,
				properties: { alternatives: {
					name: gL.alternatives,
					defaultValue: []
				} },
				superTypes: []
			},
			EbnfExceptionPostfix: {
				name: _L.$type,
				properties: { except: { name: _L.except } },
				superTypes: [CL.$type]
			},
			EbnfGroup: {
				name: vL.$type,
				properties: { element: { name: vL.element } },
				superTypes: [wL.$type]
			},
			EbnfNonTerminal: {
				name: yL.$type,
				properties: { name: { name: yL.name } },
				superTypes: [wL.$type]
			},
			EbnfOneOrMorePostfix: {
				name: bL.$type,
				properties: { operator: { name: bL.operator } },
				superTypes: [CL.$type]
			},
			EbnfOptional: {
				name: xL.$type,
				properties: { element: { name: xL.element } },
				superTypes: [wL.$type]
			},
			EbnfOptionalPostfix: {
				name: SL.$type,
				properties: { operator: { name: SL.operator } },
				superTypes: [CL.$type]
			},
			EbnfPostfix: {
				name: CL.$type,
				properties: {},
				superTypes: []
			},
			EbnfPrimary: {
				name: wL.$type,
				properties: {},
				superTypes: []
			},
			EbnfRepetition: {
				name: TL.$type,
				properties: { element: { name: TL.element } },
				superTypes: [wL.$type]
			},
			EbnfRule: {
				name: EL.$type,
				properties: {
					definition: { name: EL.definition },
					name: { name: EL.name }
				},
				superTypes: []
			},
			EbnfSequence: {
				name: DL.$type,
				properties: { elements: {
					name: DL.elements,
					defaultValue: []
				} },
				superTypes: []
			},
			EbnfSpecial: {
				name: OL.$type,
				properties: { text: { name: OL.text } },
				superTypes: [wL.$type]
			},
			EbnfTerm: {
				name: kL.$type,
				properties: {
					base: { name: kL.base },
					postfixes: {
						name: kL.postfixes,
						defaultValue: []
					}
				},
				superTypes: []
			},
			EbnfTerminal: {
				name: AL.$type,
				properties: { value: { name: AL.value } },
				superTypes: [wL.$type]
			},
			EbnfZeroOrMorePostfix: {
				name: jL.$type,
				properties: { operator: { name: jL.operator } },
				superTypes: [CL.$type]
			},
			Edge: {
				name: ML.$type,
				properties: {
					lhsDir: { name: ML.lhsDir },
					lhsGroup: {
						name: ML.lhsGroup,
						defaultValue: !1
					},
					lhsId: { name: ML.lhsId },
					lhsInto: {
						name: ML.lhsInto,
						defaultValue: !1
					},
					rhsDir: { name: ML.rhsDir },
					rhsGroup: {
						name: ML.rhsGroup,
						defaultValue: !1
					},
					rhsId: { name: ML.rhsId },
					rhsInto: {
						name: ML.rhsInto,
						defaultValue: !1
					},
					title: { name: ML.title }
				},
				superTypes: []
			},
			EmDataEntity: {
				name: NL.$type,
				properties: {
					dataBlockValue: { name: NL.dataBlockValue },
					dataType: { name: NL.dataType },
					name: { name: NL.name }
				},
				superTypes: []
			},
			EmFrame: {
				name: PL.$type,
				properties: {},
				superTypes: []
			},
			EmGwt: {
				name: FL.$type,
				properties: {
					givenStatements: {
						name: FL.givenStatements,
						defaultValue: []
					},
					sourceFrame: {
						name: FL.sourceFrame,
						referenceType: PL.$type
					},
					thenStatements: {
						name: FL.thenStatements,
						defaultValue: []
					},
					whenStatements: {
						name: FL.whenStatements,
						defaultValue: []
					}
				},
				superTypes: []
			},
			EmGwtStatement: {
				name: IL.$type,
				properties: { entityIdentifier: {
					name: IL.entityIdentifier,
					referenceType: LL.$type
				} },
				superTypes: []
			},
			EmModelEntity: {
				name: LL.$type,
				properties: { name: { name: LL.name } },
				superTypes: []
			},
			EmNoteEntity: {
				name: zL.$type,
				properties: {
					dataBlockValue: { name: zL.dataBlockValue },
					dataType: { name: zL.dataType },
					sourceFrame: {
						name: zL.sourceFrame,
						referenceType: PL.$type
					}
				},
				superTypes: []
			},
			EmResetFrame: {
				name: BL.$type,
				properties: {
					dataInlineValue: { name: BL.dataInlineValue },
					dataReference: {
						name: BL.dataReference,
						referenceType: NL.$type
					},
					dataType: { name: BL.dataType },
					entityIdentifier: { name: BL.entityIdentifier },
					modelEntityType: { name: BL.modelEntityType },
					name: { name: BL.name },
					sourceFrames: {
						name: BL.sourceFrames,
						defaultValue: [],
						referenceType: PL.$type
					}
				},
				superTypes: [PL.$type]
			},
			EmTimeFrame: {
				name: HL.$type,
				properties: {
					dataInlineValue: { name: HL.dataInlineValue },
					dataReference: {
						name: HL.dataReference,
						referenceType: NL.$type
					},
					dataType: { name: HL.dataType },
					entityIdentifier: { name: HL.entityIdentifier },
					modelEntityType: { name: HL.modelEntityType },
					name: { name: HL.name },
					sourceFrames: {
						name: HL.sourceFrames,
						defaultValue: [],
						referenceType: PL.$type
					}
				},
				superTypes: [PL.$type]
			},
			Entry: {
				name: UL.$type,
				properties: {
					axis: {
						name: UL.axis,
						referenceType: XI.$type
					},
					value: { name: UL.value }
				},
				superTypes: []
			},
			EventModel: {
				name: WL.$type,
				properties: {
					accDescr: { name: WL.accDescr },
					accTitle: { name: WL.accTitle },
					dataEntities: {
						name: WL.dataEntities,
						defaultValue: []
					},
					frames: {
						name: WL.frames,
						defaultValue: []
					},
					gwtEntities: {
						name: WL.gwtEntities,
						defaultValue: []
					},
					modelEntities: {
						name: WL.modelEntities,
						defaultValue: []
					},
					noteEntities: {
						name: WL.noteEntities,
						defaultValue: []
					},
					title: { name: WL.title }
				},
				superTypes: []
			},
			Evolution: {
				name: GL.$type,
				properties: { stages: {
					name: GL.stages,
					defaultValue: []
				} },
				superTypes: []
			},
			EvolutionStage: {
				name: KL.$type,
				properties: {
					boundary: { name: KL.boundary },
					name: { name: KL.name },
					secondName: { name: KL.secondName }
				},
				superTypes: []
			},
			Evolve: {
				name: qL.$type,
				properties: {
					component: { name: qL.component },
					target: { name: qL.target }
				},
				superTypes: []
			},
			GitGraph: {
				name: JL.$type,
				properties: {
					accDescr: { name: JL.accDescr },
					accTitle: { name: JL.accTitle },
					statements: {
						name: JL.statements,
						defaultValue: []
					},
					title: { name: JL.title }
				},
				superTypes: []
			},
			Group: {
				name: XL.$type,
				properties: {
					icon: { name: XL.icon },
					id: { name: XL.id },
					in: { name: XL.in },
					title: { name: XL.title }
				},
				superTypes: []
			},
			Info: {
				name: ZL.$type,
				properties: {
					accDescr: { name: ZL.accDescr },
					accTitle: { name: ZL.accTitle },
					title: { name: ZL.title }
				},
				superTypes: []
			},
			Item: {
				name: $L.$type,
				properties: {
					classSelector: { name: $L.classSelector },
					name: { name: $L.name }
				},
				superTypes: []
			},
			Junction: {
				name: eR.$type,
				properties: {
					id: { name: eR.id },
					in: { name: eR.in }
				},
				superTypes: []
			},
			Label: {
				name: tR.$type,
				properties: {
					negX: {
						name: tR.negX,
						defaultValue: !1
					},
					negY: {
						name: tR.negY,
						defaultValue: !1
					},
					offsetX: { name: tR.offsetX },
					offsetY: { name: tR.offsetY }
				},
				superTypes: []
			},
			Leaf: {
				name: nR.$type,
				properties: {
					classSelector: { name: nR.classSelector },
					name: { name: nR.name },
					value: { name: nR.value }
				},
				superTypes: [$L.$type]
			},
			Link: {
				name: rR.$type,
				properties: {
					arrow: { name: rR.arrow },
					from: { name: rR.from },
					fromPort: { name: rR.fromPort },
					linkLabel: { name: rR.linkLabel },
					to: { name: rR.to },
					toPort: { name: rR.toPort }
				},
				superTypes: []
			},
			Merge: {
				name: iR.$type,
				properties: {
					branch: { name: iR.branch },
					id: { name: iR.id },
					tags: {
						name: iR.tags,
						defaultValue: []
					},
					type: { name: iR.type }
				},
				superTypes: [XR.$type]
			},
			Note: {
				name: oR.$type,
				properties: {
					evolution: { name: oR.evolution },
					text: { name: oR.text },
					visibility: { name: oR.visibility }
				},
				superTypes: []
			},
			Option: {
				name: sR.$type,
				properties: {
					name: { name: sR.name },
					value: {
						name: sR.value,
						defaultValue: !1
					}
				},
				superTypes: []
			},
			Packet: {
				name: cR.$type,
				properties: {
					accDescr: { name: cR.accDescr },
					accTitle: { name: cR.accTitle },
					blocks: {
						name: cR.blocks,
						defaultValue: []
					},
					title: { name: cR.title }
				},
				superTypes: []
			},
			PacketBlock: {
				name: uR.$type,
				properties: {
					bits: { name: uR.bits },
					end: { name: uR.end },
					label: { name: uR.label },
					start: { name: uR.start }
				},
				superTypes: []
			},
			PegAny: {
				name: fR.$type,
				properties: { dot: { name: fR.dot } },
				superTypes: [vR.$type]
			},
			PegGroup: {
				name: pR.$type,
				properties: { element: { name: pR.element } },
				superTypes: [vR.$type]
			},
			PegIdentifier: {
				name: mR.$type,
				properties: { name: { name: mR.name } },
				superTypes: [vR.$type]
			},
			PegLiteral: {
				name: hR.$type,
				properties: { value: { name: hR.value } },
				superTypes: [vR.$type]
			},
			PegOrderedChoice: {
				name: gR.$type,
				properties: { alternatives: {
					name: gR.alternatives,
					defaultValue: []
				} },
				superTypes: []
			},
			PegPrefix: {
				name: _R.$type,
				properties: {
					operator: { name: _R.operator },
					suffix: { name: _R.suffix }
				},
				superTypes: []
			},
			PegPrimary: {
				name: vR.$type,
				properties: {},
				superTypes: []
			},
			PegRule: {
				name: yR.$type,
				properties: {
					definition: { name: yR.definition },
					name: { name: yR.name }
				},
				superTypes: []
			},
			PegSequence: {
				name: bR.$type,
				properties: { elements: {
					name: bR.elements,
					defaultValue: []
				} },
				superTypes: []
			},
			PegSuffix: {
				name: xR.$type,
				properties: {
					operator: { name: xR.operator },
					primary: { name: xR.primary }
				},
				superTypes: []
			},
			Pie: {
				name: SR.$type,
				properties: {
					accDescr: { name: SR.accDescr },
					accTitle: { name: SR.accTitle },
					sections: {
						name: SR.sections,
						defaultValue: []
					},
					showData: {
						name: SR.showData,
						defaultValue: !1
					},
					title: { name: SR.title }
				},
				superTypes: []
			},
			PieSection: {
				name: wR.$type,
				properties: {
					label: { name: wR.label },
					value: { name: wR.value }
				},
				superTypes: []
			},
			Pipeline: {
				name: ER.$type,
				properties: {
					components: {
						name: ER.components,
						defaultValue: []
					},
					parent: { name: ER.parent }
				},
				superTypes: []
			},
			PipelineComponent: {
				name: DR.$type,
				properties: {
					evolution: { name: DR.evolution },
					label: { name: DR.label },
					name: { name: DR.name }
				},
				superTypes: []
			},
			Radar: {
				name: OR.$type,
				properties: {
					accDescr: { name: OR.accDescr },
					accTitle: { name: OR.accTitle },
					axes: {
						name: OR.axes,
						defaultValue: []
					},
					curves: {
						name: OR.curves,
						defaultValue: []
					},
					options: {
						name: OR.options,
						defaultValue: []
					},
					title: { name: OR.title }
				},
				superTypes: []
			},
			Railroad: {
				name: kR.$type,
				properties: {
					accDescr: { name: kR.accDescr },
					accTitle: { name: kR.accTitle },
					rules: {
						name: kR.rules,
						defaultValue: []
					},
					title: { name: kR.title }
				},
				superTypes: []
			},
			RailroadAbnf: {
				name: jR.$type,
				properties: {
					accDescr: { name: jR.accDescr },
					accTitle: { name: jR.accTitle },
					rules: {
						name: jR.rules,
						defaultValue: []
					},
					title: { name: jR.title }
				},
				superTypes: []
			},
			RailroadChoiceExpr: {
				name: NR.$type,
				properties: { alternatives: {
					name: NR.alternatives,
					defaultValue: []
				} },
				superTypes: [IR.$type]
			},
			RailroadEbnf: {
				name: PR.$type,
				properties: {
					accDescr: { name: PR.accDescr },
					accTitle: { name: PR.accTitle },
					rules: {
						name: PR.rules,
						defaultValue: []
					},
					title: { name: PR.title }
				},
				superTypes: []
			},
			RailroadExpression: {
				name: IR.$type,
				properties: {},
				superTypes: []
			},
			RailroadNonTerminalExpr: {
				name: LR.$type,
				properties: { name: { name: LR.name } },
				superTypes: [IR.$type]
			},
			RailroadOneOrMoreExpr: {
				name: RR.$type,
				properties: { element: { name: RR.element } },
				superTypes: [IR.$type]
			},
			RailroadOptionalExpr: {
				name: zR.$type,
				properties: { element: { name: zR.element } },
				superTypes: [IR.$type]
			},
			RailroadPeg: {
				name: BR.$type,
				properties: {
					accDescr: { name: BR.accDescr },
					accTitle: { name: BR.accTitle },
					rules: {
						name: BR.rules,
						defaultValue: []
					},
					title: { name: BR.title }
				},
				superTypes: []
			},
			RailroadRule: {
				name: HR.$type,
				properties: {
					definition: { name: HR.definition },
					name: { name: HR.name }
				},
				superTypes: []
			},
			RailroadSequenceExpr: {
				name: UR.$type,
				properties: { elements: {
					name: UR.elements,
					defaultValue: []
				} },
				superTypes: [IR.$type]
			},
			RailroadSpecialExpr: {
				name: WR.$type,
				properties: { text: { name: WR.text } },
				superTypes: [IR.$type]
			},
			RailroadTerminalExpr: {
				name: GR.$type,
				properties: { value: { name: GR.value } },
				superTypes: [IR.$type]
			},
			RailroadZeroOrMoreExpr: {
				name: KR.$type,
				properties: { element: { name: KR.element } },
				superTypes: [IR.$type]
			},
			Section: {
				name: qR.$type,
				properties: {
					classSelector: { name: qR.classSelector },
					name: { name: qR.name }
				},
				superTypes: [$L.$type]
			},
			Service: {
				name: JR.$type,
				properties: {
					icon: { name: JR.icon },
					iconText: { name: JR.iconText },
					id: { name: JR.id },
					in: { name: JR.in },
					title: { name: JR.title }
				},
				superTypes: []
			},
			Size: {
				name: YR.$type,
				properties: {
					height: { name: YR.height },
					width: { name: YR.width }
				},
				superTypes: []
			},
			Statement: {
				name: XR.$type,
				properties: {},
				superTypes: []
			},
			Transition: {
				name: ZR.$type,
				properties: {
					from: { name: ZR.from },
					label: { name: ZR.label },
					to: { name: ZR.to }
				},
				superTypes: []
			},
			TreeNode: {
				name: nz.$type,
				properties: {
					classAnnotation: { name: nz.classAnnotation },
					descAnnotation: { name: nz.descAnnotation },
					iconAnnotation: { name: nz.iconAnnotation },
					indent: { name: nz.indent },
					name: { name: nz.name }
				},
				superTypes: []
			},
			TreeView: {
				name: rz.$type,
				properties: {
					accDescr: { name: rz.accDescr },
					accTitle: { name: rz.accTitle },
					nodes: {
						name: rz.nodes,
						defaultValue: []
					},
					title: { name: rz.title }
				},
				superTypes: []
			},
			Treemap: {
				name: $R.$type,
				properties: {
					accDescr: { name: $R.accDescr },
					accTitle: { name: $R.accTitle },
					title: { name: $R.title },
					TreemapRows: {
						name: $R.TreemapRows,
						defaultValue: []
					}
				},
				superTypes: []
			},
			TreemapRow: {
				name: tz.$type,
				properties: {
					indent: { name: tz.indent },
					item: { name: tz.item }
				},
				superTypes: []
			},
			Wardley: {
				name: iz.$type,
				properties: {
					accDescr: { name: iz.accDescr },
					accelerators: {
						name: iz.accelerators,
						defaultValue: []
					},
					accTitle: { name: iz.accTitle },
					anchors: {
						name: iz.anchors,
						defaultValue: []
					},
					annotation: {
						name: iz.annotation,
						defaultValue: []
					},
					annotations: {
						name: iz.annotations,
						defaultValue: []
					},
					components: {
						name: iz.components,
						defaultValue: []
					},
					deaccelerators: {
						name: iz.deaccelerators,
						defaultValue: []
					},
					evolution: { name: iz.evolution },
					evolves: {
						name: iz.evolves,
						defaultValue: []
					},
					links: {
						name: iz.links,
						defaultValue: []
					},
					notes: {
						name: iz.notes,
						defaultValue: []
					},
					pipelines: {
						name: iz.pipelines,
						defaultValue: []
					},
					size: { name: iz.size },
					title: { name: iz.title }
				},
				superTypes: []
			}
		};
	}
}, o(oz, "MermaidAstReflection"), oz), $ = new sz(), cz, lz = /* @__PURE__ */ o(() => cz ??= pI("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"ArchitectureGrammar\",\"imports\":[],\"rules\":[{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"Architecture\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@24\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Keyword\",\"value\":\"architecture-beta\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@24\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}],\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"Statement\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"groups\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"services\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"junctions\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"edges\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"alignments\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}}]},\"entry\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"LeftPort\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\":\"},{\"$type\":\"Assignment\",\"feature\":\"lhsDir\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@10\"},\"arguments\":[]}}]},\"entry\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"RightPort\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"rhsDir\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@10\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\":\"}]},\"entry\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"Arrow\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"lhsInto\",\"operator\":\"?=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"--\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"-\"},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@30\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"-\"}]}]},{\"$type\":\"Assignment\",\"feature\":\"rhsInto\",\"operator\":\"?=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}]},\"entry\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Group\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"group\"},{\"$type\":\"Assignment\",\"feature\":\"id\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"icon\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@29\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@30\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"in\"},{\"$type\":\"Assignment\",\"feature\":\"in\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}}],\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Service\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"service\"},{\"$type\":\"Assignment\",\"feature\":\"id\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"iconText\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@22\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"icon\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@29\"},\"arguments\":[]}}],\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@30\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"in\"},{\"$type\":\"Assignment\",\"feature\":\"in\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}}],\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Junction\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"junction\"},{\"$type\":\"Assignment\",\"feature\":\"id\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"in\"},{\"$type\":\"Assignment\",\"feature\":\"in\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}}],\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Edge\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"lhsId\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"lhsGroup\",\"operator\":\"?=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"rhsId\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"rhsGroup\",\"operator\":\"?=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Alignment\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"align\"},{\"$type\":\"Assignment\",\"feature\":\"direction\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"row\"},{\"$type\":\"Keyword\",\"value\":\"column\"}]}},{\"$type\":\"Assignment\",\"feature\":\"members\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"members\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]},\"cardinality\":\"+\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"ARROW_DIRECTION\",\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"L\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"R\"},\"parenthesized\":false}],\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"T\"},\"parenthesized\":false}],\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"B\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ARROW_GROUP\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\{group\\\\}/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ARROW_INTO\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/<|>/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"ParserRule\",\"name\":\"EOL\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@24\"},\"arguments\":[],\"cardinality\":\"+\"},{\"$type\":\"EndOfFile\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@18\"},\"arguments\":[]}}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}],\"cardinality\":\"+\"},\"entry\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"BOOLEAN\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"boolean\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"true\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"false\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"FLOAT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]+\\\\.[0-9]+(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/0|[1-9][0-9]*(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"parenthesized\":false},{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\w]([-\\\\w]*\\\\w)?/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NEWLINE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"name\":\"ARCH_ICON\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\([\\\\w-:]+\\\\)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ARCH_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\[(?:\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'|[^\\\\[\\\\]\\\\r\\\\n]+)\\\\]/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false}],\"interfaces\":[],\"types\":[]}"), "ArchitectureGrammarGrammar"), uz, dz = /* @__PURE__ */ o(() => uz ??= pI("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"CynefinGrammar\",\"imports\":[],\"rules\":[{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"Cynefin\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"cynefin-beta\"},{\"$type\":\"Keyword\",\"value\":\"cynefin-beta:\"}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"domains\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"transitions\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}],\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"DomainBlock\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"domain\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"items\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[],\"cardinality\":\"*\"}],\"cardinality\":\"*\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"DomainItem\",\"definition\":{\"$type\":\"Assignment\",\"feature\":\"label\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Transition\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"from\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"-->\"},{\"$type\":\"Assignment\",\"feature\":\"to\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\":\"},{\"$type\":\"Assignment\",\"feature\":\"label\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]}}],\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"DOMAIN_NAME\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"complex\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"complicated\"},\"parenthesized\":false}],\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"clear\"},\"parenthesized\":false}],\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"chaotic\"},\"parenthesized\":false}],\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"confusion\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"ParserRule\",\"name\":\"EOL\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[],\"cardinality\":\"+\"},{\"$type\":\"EndOfFile\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@10\"},\"arguments\":[]}}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}],\"cardinality\":\"+\"},\"entry\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"BOOLEAN\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"boolean\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"true\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"false\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"FLOAT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]+\\\\.[0-9]+(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/0|[1-9][0-9]*(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"parenthesized\":false},{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\w]([-\\\\w]*\\\\w)?/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NEWLINE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false}],\"interfaces\":[],\"types\":[]}"), "CynefinGrammarGrammar"), fz, pz = /* @__PURE__ */ o(() => fz ??= pI("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"EventModeling\",\"interfaces\":[{\"$type\":\"Interface\",\"name\":\"Common\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"accDescr\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accTitle\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"title\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}}],\"superTypes\":[]}],\"rules\":[{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"EventModel\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"eventmodeling\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@21\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@22\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"modelEntities\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"frames\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"dataEntities\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@10\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"noteEntities\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"gwtEntities\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EmModelEntityType\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"rmo\"},{\"$type\":\"Keyword\",\"value\":\"readmodel\"},{\"$type\":\"Keyword\",\"value\":\"ui\"},{\"$type\":\"Keyword\",\"value\":\"cmd\"},{\"$type\":\"Keyword\",\"value\":\"command\"},{\"$type\":\"Keyword\",\"value\":\"evt\"},{\"$type\":\"Keyword\",\"value\":\"event\"},{\"$type\":\"Keyword\",\"value\":\"pcr\"},{\"$type\":\"Keyword\",\"value\":\"processor\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EmDataType\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"json\"},{\"$type\":\"Keyword\",\"value\":\"jsobj\"},{\"$type\":\"Keyword\",\"value\":\"figma\"},{\"$type\":\"Keyword\",\"value\":\"salt\"},{\"$type\":\"Keyword\",\"value\":\"uri\"},{\"$type\":\"Keyword\",\"value\":\"md\"},{\"$type\":\"Keyword\",\"value\":\"html\"},{\"$type\":\"Keyword\",\"value\":\"text\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"EmDataInline\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"`\"},{\"$type\":\"Assignment\",\"feature\":\"dataType\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"`\"}],\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"dataInlineValue\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@18\"},\"arguments\":[]}}]},\"entry\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"EmDataBlock\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"`\"},{\"$type\":\"Assignment\",\"feature\":\"dataType\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"`\"}],\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"dataBlockValue\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}}]},\"entry\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"QualifiedName\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\".\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]}],\"cardinality\":\"*\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EmTimeFrame\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"tf\"},{\"$type\":\"Keyword\",\"value\":\"timeframe\"}]},{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"modelEntityType\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"entityIdentifier\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"->>\"},{\"$type\":\"Assignment\",\"feature\":\"sourceFrames\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"CrossReference\",\"type\":{\"$ref\":\"#/rules@8\"},\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]},\"deprecatedSyntax\":false,\"isMulti\":false}}],\"cardinality\":\"*\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"[[\"},{\"$type\":\"Assignment\",\"feature\":\"dataReference\",\"operator\":\"=\",\"terminal\":{\"$type\":\"CrossReference\",\"type\":{\"$ref\":\"#/rules@10\"},\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]},\"deprecatedSyntax\":false,\"isMulti\":false}},{\"$type\":\"Keyword\",\"value\":\"]]\"}],\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[],\"cardinality\":\"?\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EmResetFrame\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"rf\"},{\"$type\":\"Keyword\",\"value\":\"resetframe\"}]},{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"modelEntityType\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"entityIdentifier\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"->>\"},{\"$type\":\"Assignment\",\"feature\":\"sourceFrames\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"CrossReference\",\"type\":{\"$ref\":\"#/rules@8\"},\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]},\"deprecatedSyntax\":false,\"isMulti\":false}}],\"cardinality\":\"*\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"[[\"},{\"$type\":\"Assignment\",\"feature\":\"dataReference\",\"operator\":\"=\",\"terminal\":{\"$type\":\"CrossReference\",\"type\":{\"$ref\":\"#/rules@10\"},\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]},\"deprecatedSyntax\":false,\"isMulti\":false}},{\"$type\":\"Keyword\",\"value\":\"]]\"}],\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[],\"cardinality\":\"?\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EmFrame\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EmModelEntity\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"entity\"},{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EmDataEntity\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"data\"},{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EmNoteEntity\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"note\"},{\"$type\":\"Assignment\",\"feature\":\"sourceFrame\",\"operator\":\"=\",\"terminal\":{\"$type\":\"CrossReference\",\"type\":{\"$ref\":\"#/rules@8\"},\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]},\"deprecatedSyntax\":false,\"isMulti\":false}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EmGwt\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"gwt\"},{\"$type\":\"Assignment\",\"feature\":\"sourceFrame\",\"operator\":\"=\",\"terminal\":{\"$type\":\"CrossReference\",\"type\":{\"$ref\":\"#/rules@8\"},\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]},\"deprecatedSyntax\":false,\"isMulti\":false}},{\"$type\":\"Keyword\",\"value\":\"given\"},{\"$type\":\"Assignment\",\"feature\":\"givenStatements\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]},\"cardinality\":\"+\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"when\"},{\"$type\":\"Assignment\",\"feature\":\"whenStatements\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]},\"cardinality\":\"+\"}],\"cardinality\":\"?\"},{\"$type\":\"Keyword\",\"value\":\"then\"},{\"$type\":\"Assignment\",\"feature\":\"thenStatements\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]},\"cardinality\":\"+\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EmGwtStatement\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"entityIdentifier\",\"operator\":\"=\",\"terminal\":{\"$type\":\"CrossReference\",\"type\":{\"$ref\":\"#/rules@9\"},\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]},\"deprecatedSyntax\":false,\"isMulti\":false}}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EM_EID\",\"dataType\":\"string\",\"definition\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EM_FI\",\"dataType\":\"string\",\"definition\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"EM_ID\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[_a-zA-Z][\\\\w_]*/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"EM_FID\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\d{1,3}/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"EM_DATA_INLINE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\{(.*)\\\\}|\\\"(.*)\\\"|'(.*)'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"EM_DATA_BLOCK\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\{[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?\\\\}(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"EM_ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"EM_ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"EM_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"EM_WS\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\s+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"EM_YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"EM_DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"EM_SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"EM_ML_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\//\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"EM_SL_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\/\\\\/[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false}],\"imports\":[],\"types\":[]}"), "EventModelingGrammar"), mz, hz = /* @__PURE__ */ o(() => mz ??= pI("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"GitGraphGrammar\",\"imports\":[],\"rules\":[{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"GitGraph\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"gitGraph\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"gitGraph\"},{\"$type\":\"Keyword\",\"value\":\":\"}]},{\"$type\":\"Keyword\",\"value\":\"gitGraph:\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"gitGraph\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]},{\"$type\":\"Keyword\",\"value\":\":\"}]}]},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"statements\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Statement\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Direction\",\"definition\":{\"$type\":\"Assignment\",\"feature\":\"dir\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"LR\"},{\"$type\":\"Keyword\",\"value\":\"TB\"},{\"$type\":\"Keyword\",\"value\":\"BT\"}]}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Commit\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"commit\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"id:\"},{\"$type\":\"Assignment\",\"feature\":\"id\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"msg:\",\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"message\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"tag:\"},{\"$type\":\"Assignment\",\"feature\":\"tags\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"type:\"},{\"$type\":\"Assignment\",\"feature\":\"type\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"NORMAL\"},{\"$type\":\"Keyword\",\"value\":\"REVERSE\"},{\"$type\":\"Keyword\",\"value\":\"HIGHLIGHT\"}]}}]}],\"cardinality\":\"*\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Branch\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"branch\"},{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@24\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"order:\"},{\"$type\":\"Assignment\",\"feature\":\"order\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]}}],\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Merge\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"merge\"},{\"$type\":\"Assignment\",\"feature\":\"branch\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@24\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}]}},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"id:\"},{\"$type\":\"Assignment\",\"feature\":\"id\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"tag:\"},{\"$type\":\"Assignment\",\"feature\":\"tags\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"type:\"},{\"$type\":\"Assignment\",\"feature\":\"type\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"NORMAL\"},{\"$type\":\"Keyword\",\"value\":\"REVERSE\"},{\"$type\":\"Keyword\",\"value\":\"HIGHLIGHT\"}]}}]}],\"cardinality\":\"*\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Checkout\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"checkout\"},{\"$type\":\"Keyword\",\"value\":\"switch\"}]},{\"$type\":\"Assignment\",\"feature\":\"branch\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@24\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"CherryPicking\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"cherry-pick\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"id:\"},{\"$type\":\"Assignment\",\"feature\":\"id\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"tag:\"},{\"$type\":\"Assignment\",\"feature\":\"tags\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"parent:\"},{\"$type\":\"Assignment\",\"feature\":\"parent\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]}],\"cardinality\":\"*\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EOL\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[],\"cardinality\":\"+\"},{\"$type\":\"EndOfFile\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}],\"cardinality\":\"+\"},\"entry\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"BOOLEAN\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"boolean\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"true\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"false\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"FLOAT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]+\\\\.[0-9]+(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/0|[1-9][0-9]*(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"parenthesized\":false},{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\w]([-\\\\w]*\\\\w)?/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NEWLINE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"name\":\"REFERENCE\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\w([-\\\\./\\\\w]*[-\\\\w])?/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false}],\"interfaces\":[],\"types\":[]}"), "GitGraphGrammarGrammar"), gz, _z = /* @__PURE__ */ o(() => gz ??= pI("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"InfoGrammar\",\"imports\":[],\"rules\":[{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"Info\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Keyword\",\"value\":\"info\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"showInfo\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[],\"cardinality\":\"*\"}],\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[],\"cardinality\":\"?\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EOL\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[],\"cardinality\":\"+\"},{\"$type\":\"EndOfFile\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]}}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}],\"cardinality\":\"+\"},\"entry\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"BOOLEAN\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"boolean\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"true\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"false\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"FLOAT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]+\\\\.[0-9]+(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/0|[1-9][0-9]*(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"parenthesized\":false},{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\w]([-\\\\w]*\\\\w)?/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NEWLINE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false}],\"interfaces\":[],\"types\":[]}"), "InfoGrammarGrammar"), vz, yz = /* @__PURE__ */ o(() => vz ??= pI("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"PacketGrammar\",\"imports\":[],\"rules\":[{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"Packet\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"packet\"},{\"$type\":\"Keyword\",\"value\":\"packet-beta\"}]},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"blocks\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}],\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"PacketBlock\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"start\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"-\"},{\"$type\":\"Assignment\",\"feature\":\"end\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}}],\"cardinality\":\"?\"}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"+\"},{\"$type\":\"Assignment\",\"feature\":\"bits\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}}]}]},{\"$type\":\"Keyword\",\"value\":\":\"},{\"$type\":\"Assignment\",\"feature\":\"label\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EOL\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[],\"cardinality\":\"+\"},{\"$type\":\"EndOfFile\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]}}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}],\"cardinality\":\"+\"},\"entry\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"BOOLEAN\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"boolean\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"true\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"false\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"FLOAT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]+\\\\.[0-9]+(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/0|[1-9][0-9]*(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"parenthesized\":false},{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\w]([-\\\\w]*\\\\w)?/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NEWLINE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false}],\"interfaces\":[],\"types\":[]}"), "PacketGrammarGrammar"), bz, xz = /* @__PURE__ */ o(() => bz ??= pI("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"PieGrammar\",\"imports\":[],\"rules\":[{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"Pie\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Keyword\",\"value\":\"pie\"},{\"$type\":\"Assignment\",\"feature\":\"showData\",\"operator\":\"?=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"showData\"},\"cardinality\":\"?\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"sections\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}],\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"PieSection\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"label\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\":\"},{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"FLOAT_PIE\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/-?[0-9]+\\\\.[0-9]+(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INT_PIE\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/-?(0|[1-9][0-9]*)(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER_PIE\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"parenthesized\":false},{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"ParserRule\",\"name\":\"EOL\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[],\"cardinality\":\"+\"},{\"$type\":\"EndOfFile\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@10\"},\"arguments\":[]}}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}],\"cardinality\":\"+\"},\"entry\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"BOOLEAN\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"boolean\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"true\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"false\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"FLOAT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]+\\\\.[0-9]+(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/0|[1-9][0-9]*(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"parenthesized\":false},{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\w]([-\\\\w]*\\\\w)?/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NEWLINE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false}],\"interfaces\":[],\"types\":[]}"), "PieGrammarGrammar"), Sz, Cz = /* @__PURE__ */ o(() => Sz ??= pI("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"RadarGrammar\",\"imports\":[],\"rules\":[{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"Radar\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"radar-beta\"},{\"$type\":\"Keyword\",\"value\":\"radar-beta:\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"radar-beta\"},{\"$type\":\"Keyword\",\"value\":\":\"}]}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@10\"},\"arguments\":[]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"axis\"},{\"$type\":\"Assignment\",\"feature\":\"axes\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"axes\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"curve\"},{\"$type\":\"Assignment\",\"feature\":\"curves\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"curves\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"options\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"options\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[]}],\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"Label\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"label\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@18\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"}]},\"entry\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Axis\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[],\"cardinality\":\"?\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Curve\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[],\"cardinality\":\"?\"},{\"$type\":\"Keyword\",\"value\":\"{\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]},{\"$type\":\"Keyword\",\"value\":\"}\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"Entries\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Assignment\",\"feature\":\"entries\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Assignment\",\"feature\":\"entries\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]}}],\"cardinality\":\"*\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"*\"}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Assignment\",\"feature\":\"entries\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Assignment\",\"feature\":\"entries\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}}],\"cardinality\":\"*\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"*\"}]}]},\"entry\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"DetailedEntry\",\"returnType\":{\"$ref\":\"#/interfaces@0\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"axis\",\"operator\":\"=\",\"terminal\":{\"$type\":\"CrossReference\",\"type\":{\"$ref\":\"#/rules@2\"},\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]},\"deprecatedSyntax\":false,\"isMulti\":false}},{\"$type\":\"Keyword\",\"value\":\":\",\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"NumberEntry\",\"returnType\":{\"$ref\":\"#/interfaces@0\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Option\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"showLegend\"}},{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"ticks\"}},{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"max\"}},{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"min\"}},{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"graticule\"}},{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}}]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"GRATICULE\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"circle\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"polygon\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"ParserRule\",\"name\":\"EOL\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"+\"},{\"$type\":\"EndOfFile\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]}}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}],\"cardinality\":\"+\"},\"entry\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"BOOLEAN\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"boolean\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"true\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"false\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"FLOAT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]+\\\\.[0-9]+(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/0|[1-9][0-9]*(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"parenthesized\":false},{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\w]([-\\\\w]*\\\\w)?/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NEWLINE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false}],\"interfaces\":[{\"$type\":\"Interface\",\"name\":\"Entry\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"axis\",\"isOptional\":true,\"type\":{\"$type\":\"ReferenceType\",\"referenceType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/rules@2\"}},\"isMulti\":false}},{\"$type\":\"TypeAttribute\",\"name\":\"value\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"number\"},\"isOptional\":false}],\"superTypes\":[]}],\"types\":[]}"), "RadarGrammarGrammar"), wz, Tz = /* @__PURE__ */ o(() => wz ??= pI("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"RailroadAbnfGrammar\",\"rules\":[{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ABNF_RULENAME\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[A-Za-z][A-Za-z0-9-]*/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ABNF_STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"[^\\\"]*\\\"/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ABNF_NUMVAL\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/%[xXdDbB][0-9A-Fa-f]+(?:-[0-9A-Fa-f]+|\\\\.[0-9A-Fa-f]+)*/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ABNF_REPEAT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]*\\\\*[0-9]*/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ABNF_EXACT_REPEAT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]+/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"ABNF_WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t \\\\r\\\\n]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"ABNF_YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"ABNF_DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"ABNF_SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"ABNF_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/;[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"RailroadAbnf\",\"returnType\":{\"$ref\":\"#/interfaces@0\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"railroad-abnf-beta\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@0\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}}],\"cardinality\":\"*\"},{\"$type\":\"Assignment\",\"feature\":\"rules\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]},\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"AbnfRule\",\"returnType\":{\"$ref\":\"#/interfaces@1\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"=\"},{\"$type\":\"Assignment\",\"feature\":\"definition\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\";\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"AbnfAlternation\",\"returnType\":{\"$ref\":\"#/interfaces@2\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"alternatives\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"/\"},{\"$type\":\"Assignment\",\"feature\":\"alternatives\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"AbnfConcatenation\",\"returnType\":{\"$ref\":\"#/interfaces@3\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"elements\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]},\"cardinality\":\"+\"},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"AbnfElement\",\"returnType\":{\"$ref\":\"#/interfaces@4\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"repeat\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"repeat\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]}}],\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"primary\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@18\"},\"arguments\":[]}}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"AbnfPrimary\",\"returnType\":{\"$ref\":\"#/interfaces@5\"},\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@21\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@22\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"AbnfStringLiteral\",\"returnType\":{\"$ref\":\"#/interfaces@6\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"AbnfNumVal\",\"returnType\":{\"$ref\":\"#/interfaces@7\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"AbnfRuleName\",\"returnType\":{\"$ref\":\"#/interfaces@8\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"AbnfGroup\",\"returnType\":{\"$ref\":\"#/interfaces@9\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"(\"},{\"$type\":\"Assignment\",\"feature\":\"element\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\")\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"AbnfOptionalGroup\",\"returnType\":{\"$ref\":\"#/interfaces@10\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"element\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]}],\"interfaces\":[{\"$type\":\"Interface\",\"name\":\"RailroadAbnf\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"title\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accTitle\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accDescr\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"rules\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@1\"}}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"AbnfRule\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"name\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false},{\"$type\":\"TypeAttribute\",\"name\":\"definition\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"AbnfAlternation\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"alternatives\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@3\"}}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"AbnfConcatenation\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"elements\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@4\"}}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"AbnfElement\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"repeat\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"primary\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@5\"}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"AbnfPrimary\",\"attributes\":[],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"AbnfStringLiteral\",\"superTypes\":[{\"$ref\":\"#/interfaces@5\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"value\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"AbnfNumVal\",\"superTypes\":[{\"$ref\":\"#/interfaces@5\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"value\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"AbnfRuleName\",\"superTypes\":[{\"$ref\":\"#/interfaces@5\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"name\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"AbnfGroup\",\"superTypes\":[{\"$ref\":\"#/interfaces@5\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"element\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"AbnfOptionalGroup\",\"superTypes\":[{\"$ref\":\"#/interfaces@5\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"element\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}},\"isOptional\":false}]}],\"imports\":[],\"types\":[]}"), "RailroadAbnfGrammarGrammar"), Ez, Dz = /* @__PURE__ */ o(() => Ez ??= pI("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"RailroadEbnfGrammar\",\"rules\":[{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"EBNF_ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[A-Z_a-z][\\\\w-]*/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"EBNF_STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"EBNF_SPECIAL_SEQUENCE\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\?(?=[^?;]*[^?\\\\s;][^?;]*\\\\?)[^?;]*\\\\?/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"EBNF_WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t \\\\r\\\\n]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"EBNF_YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"EBNF_DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"EBNF_SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"EBNF_BLOCK_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\//\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"EBNF_ISO_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\(\\\\*[\\\\s\\\\S]*?\\\\*\\\\)/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"RailroadEbnf\",\"returnType\":{\"$ref\":\"#/interfaces@0\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"railroad-ebnf-beta\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@0\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}}],\"cardinality\":\"*\"},{\"$type\":\"Assignment\",\"feature\":\"rules\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]},\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfRule\",\"returnType\":{\"$ref\":\"#/interfaces@1\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"=\"},{\"$type\":\"Keyword\",\"value\":\"::=\"}]},{\"$type\":\"Assignment\",\"feature\":\"definition\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\";\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfChoice\",\"returnType\":{\"$ref\":\"#/interfaces@2\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"alternatives\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"|\"},{\"$type\":\"Assignment\",\"feature\":\"alternatives\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfSequence\",\"returnType\":{\"$ref\":\"#/interfaces@3\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"elements\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\",\",\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"elements\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfTerm\",\"returnType\":{\"$ref\":\"#/interfaces@4\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"base\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"postfixes\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@24\"},\"arguments\":[]},\"cardinality\":\"*\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfPrimary\",\"returnType\":{\"$ref\":\"#/interfaces@5\"},\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@18\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@21\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@22\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfTerminal\",\"returnType\":{\"$ref\":\"#/interfaces@7\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfNonTerminal\",\"returnType\":{\"$ref\":\"#/interfaces@8\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfSpecial\",\"returnType\":{\"$ref\":\"#/interfaces@9\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"text\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfGroup\",\"returnType\":{\"$ref\":\"#/interfaces@10\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"(\"},{\"$type\":\"Assignment\",\"feature\":\"element\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\")\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfOptional\",\"returnType\":{\"$ref\":\"#/interfaces@11\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"element\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfRepetition\",\"returnType\":{\"$ref\":\"#/interfaces@12\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"{\"},{\"$type\":\"Assignment\",\"feature\":\"element\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"}\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfPostfix\",\"returnType\":{\"$ref\":\"#/interfaces@6\"},\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@25\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@26\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@27\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@28\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfOptionalPostfix\",\"returnType\":{\"$ref\":\"#/interfaces@13\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"operator\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"?\"}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfZeroOrMorePostfix\",\"returnType\":{\"$ref\":\"#/interfaces@14\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"operator\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"*\"}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfOneOrMorePostfix\",\"returnType\":{\"$ref\":\"#/interfaces@15\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"operator\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"+\"}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfExceptionPostfix\",\"returnType\":{\"$ref\":\"#/interfaces@16\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"-\"},{\"$type\":\"Assignment\",\"feature\":\"except\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},\"entry\":false,\"fragment\":false,\"parameters\":[]}],\"interfaces\":[{\"$type\":\"Interface\",\"name\":\"RailroadEbnf\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"title\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accTitle\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accDescr\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"rules\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@1\"}}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"EbnfRule\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"name\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false},{\"$type\":\"TypeAttribute\",\"name\":\"definition\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"EbnfChoice\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"alternatives\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@3\"}}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"EbnfSequence\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"elements\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@4\"}}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"EbnfTerm\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"base\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@5\"}},\"isOptional\":false},{\"$type\":\"TypeAttribute\",\"name\":\"postfixes\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@6\"}}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"EbnfPrimary\",\"attributes\":[],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"EbnfPostfix\",\"attributes\":[],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"EbnfTerminal\",\"superTypes\":[{\"$ref\":\"#/interfaces@5\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"value\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"EbnfNonTerminal\",\"superTypes\":[{\"$ref\":\"#/interfaces@5\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"name\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"EbnfSpecial\",\"superTypes\":[{\"$ref\":\"#/interfaces@5\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"text\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"EbnfGroup\",\"superTypes\":[{\"$ref\":\"#/interfaces@5\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"element\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"EbnfOptional\",\"superTypes\":[{\"$ref\":\"#/interfaces@5\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"element\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"EbnfRepetition\",\"superTypes\":[{\"$ref\":\"#/interfaces@5\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"element\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"EbnfOptionalPostfix\",\"superTypes\":[{\"$ref\":\"#/interfaces@6\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"operator\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"EbnfZeroOrMorePostfix\",\"superTypes\":[{\"$ref\":\"#/interfaces@6\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"operator\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"EbnfOneOrMorePostfix\",\"superTypes\":[{\"$ref\":\"#/interfaces@6\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"operator\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"EbnfExceptionPostfix\",\"superTypes\":[{\"$ref\":\"#/interfaces@6\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"except\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@5\"}},\"isOptional\":false}]}],\"imports\":[],\"types\":[]}"), "RailroadEbnfGrammarGrammar"), Oz, kz = /* @__PURE__ */ o(() => Oz ??= pI("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"RailroadGrammar\",\"rules\":[{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"RR_ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[A-Z_a-z][\\\\w-]*/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"RR_STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"RR_WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t \\\\r\\\\n]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"RR_YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"RR_DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"RR_SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"RR_BLOCK_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\//\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"Railroad\",\"returnType\":{\"$ref\":\"#/interfaces@0\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"railroad-beta\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@0\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}}],\"cardinality\":\"*\"},{\"$type\":\"Assignment\",\"feature\":\"rules\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[]},\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"RailroadRule\",\"returnType\":{\"$ref\":\"#/interfaces@1\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"=\"},{\"$type\":\"Assignment\",\"feature\":\"definition\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\";\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"RailroadExpression\",\"returnType\":{\"$ref\":\"#/interfaces@2\"},\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@18\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"RailroadSequenceExpr\",\"returnType\":{\"$ref\":\"#/interfaces@3\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"sequence\"},{\"$type\":\"Keyword\",\"value\":\"(\"},{\"$type\":\"Assignment\",\"feature\":\"elements\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"elements\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}}],\"cardinality\":\"*\"},{\"$type\":\"Keyword\",\"value\":\")\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"RailroadChoiceExpr\",\"returnType\":{\"$ref\":\"#/interfaces@4\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"choice\"},{\"$type\":\"Keyword\",\"value\":\"(\"},{\"$type\":\"Assignment\",\"feature\":\"alternatives\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"alternatives\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}}],\"cardinality\":\"*\"},{\"$type\":\"Keyword\",\"value\":\")\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"RailroadOptionalExpr\",\"returnType\":{\"$ref\":\"#/interfaces@5\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"optional\"},{\"$type\":\"Keyword\",\"value\":\"(\"},{\"$type\":\"Assignment\",\"feature\":\"element\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\")\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"RailroadOneOrMoreExpr\",\"returnType\":{\"$ref\":\"#/interfaces@6\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"oneOrMore\"},{\"$type\":\"Keyword\",\"value\":\"(\"},{\"$type\":\"Assignment\",\"feature\":\"element\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\")\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"RailroadZeroOrMoreExpr\",\"returnType\":{\"$ref\":\"#/interfaces@7\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"zeroOrMore\"},{\"$type\":\"Keyword\",\"value\":\"(\"},{\"$type\":\"Assignment\",\"feature\":\"element\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\")\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"RailroadTerminalExpr\",\"returnType\":{\"$ref\":\"#/interfaces@8\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"terminal\"},{\"$type\":\"Keyword\",\"value\":\"(\"},{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\")\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"RailroadNonTerminalExpr\",\"returnType\":{\"$ref\":\"#/interfaces@9\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"nonterminal\"},{\"$type\":\"Keyword\",\"value\":\"(\"},{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\")\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"RailroadSpecialExpr\",\"returnType\":{\"$ref\":\"#/interfaces@10\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"special\"},{\"$type\":\"Keyword\",\"value\":\"(\"},{\"$type\":\"Assignment\",\"feature\":\"text\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\")\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]}],\"interfaces\":[{\"$type\":\"Interface\",\"name\":\"Railroad\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"title\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accTitle\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accDescr\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"rules\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@1\"}}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"RailroadRule\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"name\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false},{\"$type\":\"TypeAttribute\",\"name\":\"definition\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"RailroadExpression\",\"attributes\":[],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"RailroadSequenceExpr\",\"superTypes\":[{\"$ref\":\"#/interfaces@2\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"elements\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}}},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"RailroadChoiceExpr\",\"superTypes\":[{\"$ref\":\"#/interfaces@2\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"alternatives\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}}},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"RailroadOptionalExpr\",\"superTypes\":[{\"$ref\":\"#/interfaces@2\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"element\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"RailroadOneOrMoreExpr\",\"superTypes\":[{\"$ref\":\"#/interfaces@2\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"element\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"RailroadZeroOrMoreExpr\",\"superTypes\":[{\"$ref\":\"#/interfaces@2\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"element\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"RailroadTerminalExpr\",\"superTypes\":[{\"$ref\":\"#/interfaces@2\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"value\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"RailroadNonTerminalExpr\",\"superTypes\":[{\"$ref\":\"#/interfaces@2\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"name\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"RailroadSpecialExpr\",\"superTypes\":[{\"$ref\":\"#/interfaces@2\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"text\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]}],\"imports\":[],\"types\":[]}"), "RailroadGrammarGrammar"), Az, jz = /* @__PURE__ */ o(() => Az ??= pI("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"RailroadPegGrammar\",\"rules\":[{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"PEG_ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[A-Z_a-z][\\\\w-]*/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"PEG_STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"PEG_WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t \\\\r\\\\n]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"PEG_YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"PEG_DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"PEG_SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"PEG_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/#[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"RailroadPeg\",\"returnType\":{\"$ref\":\"#/interfaces@0\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"railroad-peg-beta\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@0\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}}],\"cardinality\":\"*\"},{\"$type\":\"Assignment\",\"feature\":\"rules\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[]},\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"PegRule\",\"returnType\":{\"$ref\":\"#/interfaces@1\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"<-\"},{\"$type\":\"Assignment\",\"feature\":\"definition\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\";\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"PegOrderedChoice\",\"returnType\":{\"$ref\":\"#/interfaces@2\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"alternatives\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"/\"},{\"$type\":\"Assignment\",\"feature\":\"alternatives\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"PegSequence\",\"returnType\":{\"$ref\":\"#/interfaces@3\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"elements\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]},\"cardinality\":\"+\"},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"PegPrefix\",\"returnType\":{\"$ref\":\"#/interfaces@4\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"operator\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"&\"}},{\"$type\":\"Assignment\",\"feature\":\"operator\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"!\"}}],\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"suffix\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]}}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"PegSuffix\",\"returnType\":{\"$ref\":\"#/interfaces@5\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"primary\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"operator\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"?\"}},{\"$type\":\"Assignment\",\"feature\":\"operator\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"*\"}},{\"$type\":\"Assignment\",\"feature\":\"operator\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"+\"}}],\"cardinality\":\"?\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"PegPrimary\",\"returnType\":{\"$ref\":\"#/interfaces@6\"},\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@18\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"PegLiteral\",\"returnType\":{\"$ref\":\"#/interfaces@7\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"PegIdentifier\",\"returnType\":{\"$ref\":\"#/interfaces@8\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"PegGroup\",\"returnType\":{\"$ref\":\"#/interfaces@9\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"(\"},{\"$type\":\"Assignment\",\"feature\":\"element\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\")\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"PegAny\",\"returnType\":{\"$ref\":\"#/interfaces@10\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"dot\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\".\"}},\"entry\":false,\"fragment\":false,\"parameters\":[]}],\"interfaces\":[{\"$type\":\"Interface\",\"name\":\"RailroadPeg\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"title\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accTitle\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accDescr\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"rules\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@1\"}}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"PegRule\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"name\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false},{\"$type\":\"TypeAttribute\",\"name\":\"definition\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"PegOrderedChoice\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"alternatives\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@3\"}}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"PegSequence\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"elements\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@4\"}}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"PegPrefix\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"operator\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"suffix\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@5\"}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"PegSuffix\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"primary\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@6\"}},\"isOptional\":false},{\"$type\":\"TypeAttribute\",\"name\":\"operator\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"PegPrimary\",\"attributes\":[],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"PegLiteral\",\"superTypes\":[{\"$ref\":\"#/interfaces@6\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"value\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"PegIdentifier\",\"superTypes\":[{\"$ref\":\"#/interfaces@6\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"name\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"PegGroup\",\"superTypes\":[{\"$ref\":\"#/interfaces@6\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"element\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"PegAny\",\"superTypes\":[{\"$ref\":\"#/interfaces@6\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"dot\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]}],\"imports\":[],\"types\":[]}"), "RailroadPegGrammarGrammar"), Mz, Nz = /* @__PURE__ */ o(() => Mz ??= pI("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"TreemapGrammar\",\"rules\":[{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}}],\"cardinality\":\"+\"},\"entry\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"BOOLEAN\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"boolean\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"true\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"false\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"Treemap\",\"returnType\":{\"$ref\":\"#/interfaces@4\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@0\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"TreemapRows\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"TREEMAP_KEYWORD\",\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"treemap-beta\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"treemap\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"CLASS_DEF\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/classDef\\\\s+([a-zA-Z_][a-zA-Z0-9_]+)(?:\\\\s+([^;\\\\r\\\\n]*))?(?:;)?/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STYLE_SEPARATOR\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\":::\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"SEPARATOR\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\":\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"COMMA\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\",\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INDENTATION\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[ \\\\t]{1,}/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WS\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[ \\\\t]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"ML_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\%\\\\%[^\\\\n]*/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"NL\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"ParserRule\",\"name\":\"TreemapRow\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"indent\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"item\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"ClassDef\",\"dataType\":\"string\",\"definition\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Item\",\"returnType\":{\"$ref\":\"#/interfaces@0\"},\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@18\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Section\",\"returnType\":{\"$ref\":\"#/interfaces@1\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"classSelector\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[]}}],\"cardinality\":\"?\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Leaf\",\"returnType\":{\"$ref\":\"#/interfaces@2\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[],\"cardinality\":\"?\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@10\"},\"arguments\":[]}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[],\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@22\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"classSelector\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[]}}],\"cardinality\":\"?\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"ID2\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[a-zA-Z_][a-zA-Z0-9_]*/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER2\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9_\\\\.\\\\,]+/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"ParserRule\",\"name\":\"MyNumber\",\"dataType\":\"number\",\"definition\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@21\"},\"arguments\":[]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"STRING2\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"[^\\\"]*\\\"|'[^']*'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false}],\"interfaces\":[{\"$type\":\"Interface\",\"name\":\"Item\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"name\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false},{\"$type\":\"TypeAttribute\",\"name\":\"classSelector\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"Section\",\"superTypes\":[{\"$ref\":\"#/interfaces@0\"}],\"attributes\":[]},{\"$type\":\"Interface\",\"name\":\"Leaf\",\"superTypes\":[{\"$ref\":\"#/interfaces@0\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"value\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"number\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"ClassDefStatement\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"className\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false},{\"$type\":\"TypeAttribute\",\"name\":\"styleText\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"Treemap\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"TreemapRows\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/rules@15\"}}},\"isOptional\":false},{\"$type\":\"TypeAttribute\",\"name\":\"title\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accTitle\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accDescr\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}}],\"superTypes\":[]}],\"imports\":[],\"types\":[],\"$comment\":\"/**\\n * Treemap grammar for Langium\\n * Converted from mindmap grammar\\n *\\n * The ML_COMMENT and NL hidden terminals handle whitespace, comments, and newlines\\n * before the treemap keyword, allowing for empty lines and comments before the\\n * treemap declaration.\\n */\"}"), "TreemapGrammarGrammar"), Pz, Fz = /* @__PURE__ */ o(() => Pz ??= pI("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"TreeViewGrammar\",\"rules\":[{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"TreeView\",\"returnType\":{\"$ref\":\"#/interfaces@0\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"treeView-beta\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[],\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"nodes\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]},\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@0\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}}],\"cardinality\":\"+\"},\"entry\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"CLASS_ANNOTATION\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[ \\\\t]+:::[ \\\\t]*[A-Za-z_][\\\\w-]*/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ICON_ANNOTATION\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[ \\\\t]+icon\\\\([\\\\w-]*(?::[\\\\w-]+)?\\\\)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"DESC_ANNOTATION\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[ \\\\t]+##[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INDENTATION\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[ \\\\t]{1,}/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"QUOTED_NAME\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"[^\\\"]*\\\"|'[^']*'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WS\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[ \\\\t]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"ML_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\%\\\\%[^\\\\n]*/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"NL\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"name\":\"BARE_NAME\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/(?!:::|icon\\\\(|##)[^ \\\\t\\\\n\\\\r\\\"'](?:(?![ \\\\t]+:::[ \\\\t]*[A-Za-z_]|[ \\\\t]+icon\\\\(|[ \\\\t]+##)[^\\\\n\\\\r])*/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"ParserRule\",\"name\":\"TreeNode\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"indent\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}}]},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"classAnnotation\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"iconAnnotation\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"descAnnotation\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]}],\"interfaces\":[{\"$type\":\"Interface\",\"name\":\"TreeView\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"nodes\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/rules@14\"}}},\"isOptional\":false},{\"$type\":\"TypeAttribute\",\"name\":\"title\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accTitle\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accDescr\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}}],\"superTypes\":[]}],\"imports\":[],\"types\":[],\"$comment\":\"/**\\n * TreeView grammar for Langium\\n *\\n * Supports both quoted labels (\\\"my file\\\") and bare labels (index.js).\\n * Annotations (:::class, icon(), ## description) are parsed directly into\\n * AST fields by the grammar. Value conversion for stripping quotes, extracting\\n * class names, icon names, and description text happens in valueConverter.ts.\\n *\\n * The ML_COMMENT and NL hidden terminals handle whitespace, comments, and newlines\\n * before the treeView keyword, allowing for empty lines and comments before the\\n * treeView declaration.\\n */\"}"), "TreeViewGrammarGrammar"), Iz, Lz = /* @__PURE__ */ o(() => Iz ??= pI("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"WardleyGrammar\",\"imports\":[],\"rules\":[{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"Wardley\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@52\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@25\"},\"arguments\":[]},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@52\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@42\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}],\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"Statement\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"size\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"evolution\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"anchors\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"components\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"links\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"evolves\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@10\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"pipelines\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"notes\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"annotations\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"annotation\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accelerators\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"deaccelerators\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@18\"},\"arguments\":[]}}]},\"entry\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Size\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@26\"},\"arguments\":[]},{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"width\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@48\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"height\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@48\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Evolution\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@27\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"stages\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"stages\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}}],\"cardinality\":\"+\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EvolutionStage\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@51\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@50\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@39\"},\"arguments\":[]}]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"@\"},{\"$type\":\"Assignment\",\"feature\":\"boundary\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}}],\"cardinality\":\"?\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"/\"},{\"$type\":\"Assignment\",\"feature\":\"secondName\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@51\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@50\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@39\"},\"arguments\":[]}]}}],\"cardinality\":\"?\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Anchor\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@28\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@50\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@51\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@39\"},\"arguments\":[]}]}},{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"visibility\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"evolution\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Component\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@29\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@50\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@51\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@39\"},\"arguments\":[]}]}},{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"visibility\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"evolution\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"},{\"$type\":\"Assignment\",\"feature\":\"label\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"decorator\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"inertia\",\"operator\":\"?=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@31\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"(\"},{\"$type\":\"Assignment\",\"feature\":\"inertia\",\"operator\":\"?=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@31\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\")\"}]}],\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Label\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@30\"},\"arguments\":[]},{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"negX\",\"operator\":\"?=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"-\"},\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"offsetX\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@48\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"negY\",\"operator\":\"?=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"-\"},\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"offsetY\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@48\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Decorator\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"(\"},{\"$type\":\"Assignment\",\"feature\":\"strategy\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@24\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\")\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Link\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"from\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@50\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@51\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@39\"},\"arguments\":[]}]}},{\"$type\":\"Assignment\",\"feature\":\"fromPort\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@21\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"arrow\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@22\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[]}]},\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"to\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@50\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@51\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@39\"},\"arguments\":[]}]}},{\"$type\":\"Assignment\",\"feature\":\"toPort\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@21\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"linkLabel\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Evolve\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@32\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"component\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@50\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@51\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@39\"},\"arguments\":[]}]}},{\"$type\":\"Assignment\",\"feature\":\"target\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Pipeline\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@33\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"parent\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@50\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@51\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@39\"},\"arguments\":[]}]}},{\"$type\":\"Keyword\",\"value\":\"{\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@52\"},\"arguments\":[],\"cardinality\":\"+\"},{\"$type\":\"Assignment\",\"feature\":\"components\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]},\"cardinality\":\"+\"},{\"$type\":\"Keyword\",\"value\":\"}\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"PipelineComponent\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@29\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@50\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@51\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@39\"},\"arguments\":[]}]}},{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"evolution\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"},{\"$type\":\"Assignment\",\"feature\":\"label\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Note\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@34\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"text\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@50\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"visibility\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"evolution\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Annotations\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@35\"},\"arguments\":[]},{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"x\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"y\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Annotation\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@36\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"number\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@48\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"x\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"y\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"},{\"$type\":\"Assignment\",\"feature\":\"text\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@50\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"CoordinateValue\",\"dataType\":\"number\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@48\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Accelerator\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@37\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@50\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@51\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@39\"},\"arguments\":[]}]}},{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"x\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"y\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Deaccelerator\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@38\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@50\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@51\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@39\"},\"arguments\":[]}]}},{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"x\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"y\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"WARDLEY_NUMBER\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]+\\\\.[0-9]+/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ARROW\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"->\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"LINK_PORT\",\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"+<>\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"+>\"},\"parenthesized\":false}],\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"+<\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"LINK_ARROW\",\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"-->\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"-.->\"},\"parenthesized\":false}],\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\">\"},\"parenthesized\":false}],\"parenthesized\":false},{\"$type\":\"RegexToken\",\"regex\":\"/\\\\+'[^']*'<>/\",\"parenthesized\":false}],\"parenthesized\":false},{\"$type\":\"RegexToken\",\"regex\":\"/\\\\+'[^']*'</\",\"parenthesized\":false}],\"parenthesized\":false},{\"$type\":\"RegexToken\",\"regex\":\"/\\\\+'[^']*'>/\",\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"LINK_LABEL\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/;[^\\\\n\\\\r]+/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STRATEGY\",\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"build\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"buy\"},\"parenthesized\":false}],\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"outsource\"},\"parenthesized\":false}],\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"market\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_WARDLEY\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"wardley-beta\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_SIZE\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"size\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_EVOLUTION\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"evolution\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_ANCHOR\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"anchor\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_COMPONENT\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"component\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_LABEL\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"label\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_INERTIA\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"inertia\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_EVOLVE\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"evolve\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_PIPELINE\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"pipeline\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_NOTE\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"note\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_ANNOTATIONS\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"annotations\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_ANNOTATION\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"annotation\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_ACCELERATOR\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"accelerator\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_DEACCELERATOR\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"deaccelerator\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NAME_WITH_SPACES\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/(?!title\\\\s|accTitle|accDescr)[A-Za-z](?:[A-Za-z0-9_()&]|-(?!>))*(?:[ \\\\t]+[A-Za-z(](?:[A-Za-z0-9_()&]|-(?!>))*)*/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WS\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[ \\\\t]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"ParserRule\",\"name\":\"EOL\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@52\"},\"arguments\":[],\"cardinality\":\"+\"},{\"$type\":\"EndOfFile\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@44\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@45\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@46\"},\"arguments\":[]}}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}],\"cardinality\":\"+\"},\"entry\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"BOOLEAN\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"boolean\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"true\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"false\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"FLOAT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]+\\\\.[0-9]+(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/0|[1-9][0-9]*(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@47\"},\"parenthesized\":false},{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@48\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\w]([-\\\\w]*\\\\w)?/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NEWLINE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false}],\"interfaces\":[],\"types\":[]}"), "WardleyGrammarGrammar"), Rz = {
	languageId: "architecture",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, zz = {
	languageId: "cynefin",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, Bz = {
	languageId: "eventmodeling",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, Vz = {
	languageId: "gitGraph",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, Hz = {
	languageId: "info",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, Uz = {
	languageId: "packet",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, Wz = {
	languageId: "pie",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, Gz = {
	languageId: "radar",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, Kz = {
	languageId: "railroadAbnf",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, qz = {
	languageId: "railroadEbnf",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, Jz = {
	languageId: "railroad",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, Yz = {
	languageId: "railroadPeg",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, Xz = {
	languageId: "treemap",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, Zz = {
	languageId: "treeView",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, Qz = {
	languageId: "wardley",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, $z = { AstReflection: /* @__PURE__ */ o(() => new sz(), "AstReflection") }, eB = {
	Grammar: /* @__PURE__ */ o(() => lz(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ o(() => Rz, "LanguageMetaData"),
	parser: {}
}, tB = {
	Grammar: /* @__PURE__ */ o(() => dz(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ o(() => zz, "LanguageMetaData"),
	parser: {}
}, nB = {
	Grammar: /* @__PURE__ */ o(() => pz(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ o(() => Bz, "LanguageMetaData"),
	parser: {}
}, rB = {
	Grammar: /* @__PURE__ */ o(() => hz(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ o(() => Vz, "LanguageMetaData"),
	parser: {}
}, iB = {
	Grammar: /* @__PURE__ */ o(() => _z(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ o(() => Hz, "LanguageMetaData"),
	parser: {}
}, aB = {
	Grammar: /* @__PURE__ */ o(() => yz(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ o(() => Uz, "LanguageMetaData"),
	parser: {}
}, oB = {
	Grammar: /* @__PURE__ */ o(() => xz(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ o(() => Wz, "LanguageMetaData"),
	parser: {}
}, sB = {
	Grammar: /* @__PURE__ */ o(() => Cz(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ o(() => Gz, "LanguageMetaData"),
	parser: {}
}, cB = {
	Grammar: /* @__PURE__ */ o(() => Tz(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ o(() => Kz, "LanguageMetaData"),
	parser: {}
}, lB = {
	Grammar: /* @__PURE__ */ o(() => Dz(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ o(() => qz, "LanguageMetaData"),
	parser: {}
}, uB = {
	Grammar: /* @__PURE__ */ o(() => kz(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ o(() => Jz, "LanguageMetaData"),
	parser: {}
}, dB = {
	Grammar: /* @__PURE__ */ o(() => jz(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ o(() => Yz, "LanguageMetaData"),
	parser: {}
}, fB = {
	Grammar: /* @__PURE__ */ o(() => Nz(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ o(() => Xz, "LanguageMetaData"),
	parser: {}
}, pB = {
	Grammar: /* @__PURE__ */ o(() => Fz(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ o(() => Zz, "LanguageMetaData"),
	parser: {}
}, mB = {
	Grammar: /* @__PURE__ */ o(() => Lz(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ o(() => Qz, "LanguageMetaData"),
	parser: {}
}, hB = {
	ACC_DESCR: /accDescr(?:[\t ]*:([^\n\r]*)|\s*{([^}]*)})/,
	ACC_TITLE: /accTitle[\t ]*:([^\n\r]*)/,
	TITLE: /title([\t ][^\n\r]*|)/
}, gB, _B = (gB = class extends rN {
	runConverter(e, t, n) {
		let r = this.runCommonConverter(e, t, n);
		return r === void 0 && (r = this.runCustomConverter(e, t, n)), r === void 0 ? super.runConverter(e, t, n) : r;
	}
	runCommonConverter(e, t, n) {
		let r = hB[e.name];
		if (r === void 0) return;
		let i = r.exec(t);
		if (i !== null) {
			if (i[1] !== void 0) return i[1].trim().replace(/[\t ]{2,}/gm, " ");
			if (i[2] !== void 0) return i[2].replace(/^\s*/gm, "").replace(/\s+$/gm, "").replace(/[\t ]{2,}/gm, " ").replace(/[\n\r]{2,}/gm, "\n");
		}
	}
}, o(gB, "AbstractMermaidValueConverter"), gB), vB, yB = (vB = class extends _B {
	runCustomConverter(e, t, n) {}
}, o(vB, "CommonValueConverter"), vB), bB, xB = (bB = class extends tN {
	constructor(e) {
		super(), this.keywords = new Set(e);
	}
	buildKeywordTokens(e, t, n) {
		let r = super.buildKeywordTokens(e, t, n);
		return r.forEach((e) => {
			this.keywords.has(e.name) && e.PATTERN !== void 0 && (e.PATTERN = RegExp(e.PATTERN.toString() + "(?:(?=%%)|(?!\\S))"));
		}), r;
	}
}, o(bB, "AbstractMermaidTokenBuilder"), bB);
o(class extends xB {}, "CommonTokenBuilder");
var SB, CB = (SB = class extends xB {
	constructor() {
		super(["radar-beta"]);
	}
}, o(SB, "RadarTokenBuilder"), SB), wB = { parser: {
	TokenBuilder: /* @__PURE__ */ o(() => new CB(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ o(() => new yB(), "ValueConverter")
} };
function TB(e = lI) {
	let t = Q(KF(e), $z), n = Q(GF({ shared: t }), sB, wB);
	return t.ServiceRegistry.register(n), {
		shared: t,
		Radar: n
	};
}
o(TB, "createRadarServices");
var EB, DB = (EB = class extends xB {
	constructor() {
		super(["railroad-beta"]);
	}
}, o(EB, "RailroadTokenBuilder"), EB), OB = /* @__PURE__ */ o((e) => {
	let t = e.slice(1, -1), n = "";
	for (let e = 0; e < t.length; e++) {
		let r = t[e];
		if (r === "\\" && e + 1 < t.length) {
			e++;
			let r = t[e];
			switch (r) {
				case "n":
					n += "\n";
					break;
				case "r":
					n += "\r";
					break;
				case "t":
					n += "	";
					break;
				default: n += r;
			}
			continue;
		}
		n += r;
	}
	return n;
}, "decodeEscapedString"), kB, AB = (kB = class extends _B {
	runConverter(e, t, n) {
		let r = super.runConverter(e, t, n);
		if (e.name === "TITLE" && typeof r == "string") {
			let e = r.trim();
			if (e.startsWith("\"") && e.endsWith("\"") || e.startsWith("'") && e.endsWith("'")) return OB(e);
		}
		return r;
	}
	runCustomConverter(e, t, n) {
		if (e.name === "RR_STRING") return OB(t);
	}
}, o(kB, "RailroadValueConverter"), kB), jB = { parser: {
	TokenBuilder: /* @__PURE__ */ o(() => new DB(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ o(() => new AB(), "ValueConverter")
} };
function MB(e = lI) {
	let t = Q(KF(e), $z), n = Q(GF({ shared: t }), uB, jB);
	return t.ServiceRegistry.register(n), {
		shared: t,
		Railroad: n
	};
}
o(MB, "createRailroadServices");
var NB, PB = (NB = class extends xB {
	constructor() {
		super(["railroad-ebnf-beta"]);
	}
}, o(NB, "RailroadEbnfTokenBuilder"), NB), FB = /* @__PURE__ */ o((e) => {
	let t = e.slice(1, -1), n = "";
	for (let e = 0; e < t.length; e++) {
		let r = t[e];
		if (r === "\\" && e + 1 < t.length) {
			e++;
			let r = t[e];
			switch (r) {
				case "n":
					n += "\n";
					break;
				case "r":
					n += "\r";
					break;
				case "t":
					n += "	";
					break;
				default: n += r;
			}
			continue;
		}
		n += r;
	}
	return n;
}, "decodeEscapedString"), IB, LB = (IB = class extends _B {
	runConverter(e, t, n) {
		let r = super.runConverter(e, t, n);
		if (e.name === "TITLE" && typeof r == "string") {
			let e = r.trim();
			if (e.startsWith("\"") && e.endsWith("\"") || e.startsWith("'") && e.endsWith("'")) return FB(e);
		}
		return r;
	}
	runCustomConverter(e, t, n) {
		if (e.name === "EBNF_STRING") return FB(t);
		if (e.name === "EBNF_SPECIAL_SEQUENCE") return t.slice(1, -1).trim();
	}
}, o(IB, "RailroadEbnfValueConverter"), IB), RB = { parser: {
	TokenBuilder: /* @__PURE__ */ o(() => new PB(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ o(() => new LB(), "ValueConverter")
} };
function zB(e = lI) {
	let t = Q(KF(e), $z), n = Q(GF({ shared: t }), lB, RB);
	return t.ServiceRegistry.register(n), {
		shared: t,
		RailroadEbnf: n
	};
}
o(zB, "createRailroadEbnfServices");
var BB, VB = (BB = class extends xB {
	constructor() {
		super(["railroad-abnf-beta"]);
	}
}, o(BB, "RailroadAbnfTokenBuilder"), BB), HB, UB = (HB = class extends _B {
	runConverter(e, t, n) {
		let r = super.runConverter(e, t, n);
		if (e.name === "TITLE" && typeof r == "string") {
			let e = r.trim();
			if (e.startsWith("\"") && e.endsWith("\"") || e.startsWith("'") && e.endsWith("'")) return e.slice(1, -1);
		}
		return r;
	}
	runCustomConverter(e, t, n) {
		if (e.name === "ABNF_STRING") return t.slice(1, -1);
	}
}, o(HB, "RailroadAbnfValueConverter"), HB), WB = { parser: {
	TokenBuilder: /* @__PURE__ */ o(() => new VB(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ o(() => new UB(), "ValueConverter")
} };
function GB(e = lI) {
	let t = Q(KF(e), $z), n = Q(GF({ shared: t }), cB, WB);
	return t.ServiceRegistry.register(n), {
		shared: t,
		RailroadAbnf: n
	};
}
o(GB, "createRailroadAbnfServices");
var KB, qB = (KB = class extends xB {
	constructor() {
		super(["railroad-peg-beta"]);
	}
}, o(KB, "RailroadPegTokenBuilder"), KB), JB = /* @__PURE__ */ o((e) => {
	let t = e.slice(1, -1), n = "";
	for (let e = 0; e < t.length; e++) {
		let r = t[e];
		if (r === "\\" && e + 1 < t.length) {
			e++;
			let r = t[e];
			switch (r) {
				case "n":
					n += "\n";
					break;
				case "r":
					n += "\r";
					break;
				case "t":
					n += "	";
					break;
				default: n += r;
			}
			continue;
		}
		n += r;
	}
	return n;
}, "decodeEscapedString"), YB, XB = (YB = class extends _B {
	runConverter(e, t, n) {
		let r = super.runConverter(e, t, n);
		if (e.name === "TITLE" && typeof r == "string") {
			let e = r.trim();
			if (e.startsWith("\"") && e.endsWith("\"") || e.startsWith("'") && e.endsWith("'")) return JB(e);
		}
		return r;
	}
	runCustomConverter(e, t, n) {
		if (e.name === "PEG_STRING") return JB(t);
	}
}, o(YB, "RailroadPegValueConverter"), YB), ZB = { parser: {
	TokenBuilder: /* @__PURE__ */ o(() => new qB(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ o(() => new XB(), "ValueConverter")
} };
function QB(e = lI) {
	let t = Q(KF(e), $z), n = Q(GF({ shared: t }), dB, ZB);
	return t.ServiceRegistry.register(n), {
		shared: t,
		RailroadPeg: n
	};
}
o(QB, "createRailroadPegServices");
var $B, eV = ($B = class extends xB {
	constructor() {
		super(["treemap"]);
	}
}, o($B, "TreemapTokenBuilder"), $B), tV = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/, nV, rV = (nV = class extends _B {
	runCustomConverter(e, t, n) {
		if (e.name === "NUMBER2") return parseFloat(t.replace(/,/g, ""));
		if (e.name === "SEPARATOR" || e.name === "STRING2") return t.substring(1, t.length - 1);
		if (e.name === "INDENTATION") return t.length;
		if (e.name === "ClassDef") {
			if (typeof t != "string") return t;
			let e = tV.exec(t);
			if (e) return {
				$type: "ClassDefStatement",
				className: e[1],
				styleText: e[2] || void 0
			};
		}
	}
}, o(nV, "TreemapValueConverter"), nV);
function iV(e) {
	let t = e.validation.TreemapValidator, n = e.validation.ValidationRegistry;
	if (n) {
		let e = { Treemap: t.checkSingleRoot.bind(t) };
		n.register(e, t);
	}
}
o(iV, "registerValidationChecks");
var aV, oV = (aV = class {
	checkSingleRoot(e, t) {
		let n;
		for (let r of e.TreemapRows) r.item && (n === void 0 && r.indent === void 0 ? n = 0 : (r.indent === void 0 || n !== void 0 && n >= parseInt(r.indent, 10)) && t("error", "Multiple root nodes are not allowed in a treemap.", {
			node: r,
			property: "item"
		}));
	}
}, o(aV, "TreemapValidator"), aV), sV = {
	parser: {
		TokenBuilder: /* @__PURE__ */ o(() => new eV(), "TokenBuilder"),
		ValueConverter: /* @__PURE__ */ o(() => new rV(), "ValueConverter")
	},
	validation: { TreemapValidator: /* @__PURE__ */ o(() => new oV(), "TreemapValidator") }
};
function cV(e = lI) {
	let t = Q(KF(e), $z), n = Q(GF({ shared: t }), fB, sV);
	return t.ServiceRegistry.register(n), iV(n), {
		shared: t,
		Treemap: n
	};
}
o(cV, "createTreemapServices");
var lV, uV = (lV = class extends _B {
	runCustomConverter(e, t, n) {
		if (e.name.toUpperCase() === "LINK_LABEL") return t.substring(1).trim();
	}
}, o(lV, "WardleyValueConverter"), lV), dV = { parser: { ValueConverter: /* @__PURE__ */ o(() => new uV(), "ValueConverter") } };
function fV(e = lI) {
	let t = Q(KF(e), $z), n = Q(GF({ shared: t }), mB, dV);
	return t.ServiceRegistry.register(n), {
		shared: t,
		Wardley: n
	};
}
o(fV, "createWardleyServices");
var pV, mV = (pV = class extends xB {
	constructor() {
		super(["cynefin-beta"]);
	}
}, o(pV, "CynefinTokenBuilder"), pV), hV = { parser: {
	TokenBuilder: /* @__PURE__ */ o(() => new mV(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ o(() => new yB(), "ValueConverter")
} };
function gV(e = lI) {
	let t = Q(KF(e), $z), n = Q(GF({ shared: t }), tB, hV);
	return t.ServiceRegistry.register(n), {
		shared: t,
		Cynefin: n
	};
}
o(gV, "createCynefinServices");
var _V, vV = (_V = class extends xB {
	constructor() {
		super(["gitGraph"]);
	}
}, o(_V, "GitGraphTokenBuilder"), _V), yV = { parser: {
	TokenBuilder: /* @__PURE__ */ o(() => new vV(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ o(() => new yB(), "ValueConverter")
} };
function bV(e = lI) {
	let t = Q(KF(e), $z), n = Q(GF({ shared: t }), rB, yV);
	return t.ServiceRegistry.register(n), {
		shared: t,
		GitGraph: n
	};
}
o(bV, "createGitGraphServices");
var xV, SV = (xV = class extends xB {
	constructor() {
		super(["info", "showInfo"]);
	}
}, o(xV, "InfoTokenBuilder"), xV), CV = { parser: {
	TokenBuilder: /* @__PURE__ */ o(() => new SV(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ o(() => new yB(), "ValueConverter")
} };
function wV(e = lI) {
	let t = Q(KF(e), $z), n = Q(GF({ shared: t }), iB, CV);
	return t.ServiceRegistry.register(n), {
		shared: t,
		Info: n
	};
}
o(wV, "createInfoServices");
var TV, EV = (TV = class extends xB {
	constructor() {
		super(["packet"]);
	}
}, o(TV, "PacketTokenBuilder"), TV), DV = { parser: {
	TokenBuilder: /* @__PURE__ */ o(() => new EV(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ o(() => new yB(), "ValueConverter")
} };
function OV(e = lI) {
	let t = Q(KF(e), $z), n = Q(GF({ shared: t }), aB, DV);
	return t.ServiceRegistry.register(n), {
		shared: t,
		Packet: n
	};
}
o(OV, "createPacketServices");
var kV, AV = (kV = class extends xB {
	constructor() {
		super(["pie", "showData"]);
	}
}, o(kV, "PieTokenBuilder"), kV), jV, MV = (jV = class extends _B {
	runCustomConverter(e, t, n) {
		if (e.name === "PIE_SECTION_LABEL") return t.replace(/"/g, "").trim();
	}
}, o(jV, "PieValueConverter"), jV), NV = { parser: {
	TokenBuilder: /* @__PURE__ */ o(() => new AV(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ o(() => new MV(), "ValueConverter")
} };
function PV(e = lI) {
	let t = Q(KF(e), $z), n = Q(GF({ shared: t }), oB, NV);
	return t.ServiceRegistry.register(n), {
		shared: t,
		Pie: n
	};
}
o(PV, "createPieServices");
var FV, IV = (FV = class extends _B {
	runCustomConverter(e, t, n) {
		if (e.name === "INDENTATION") return t?.length || 0;
		if (e.name === "QUOTED_NAME") return t.substring(1, t.length - 1);
		if (e.name === "BARE_NAME") return t.replace(/[\t ]+$/, "");
		if (e.name === "CLASS_ANNOTATION") return t.trim().substring(3).trim();
		if (e.name === "ICON_ANNOTATION") {
			let e = t.trim();
			return e.substring(5, e.length - 1);
		}
		if (e.name === "DESC_ANNOTATION") return t.trim().substring(2).trim();
	}
}, o(FV, "TreeViewValueConverter"), FV), LV, RV = (LV = class extends xB {
	constructor() {
		super(["treeView-beta"]);
	}
}, o(LV, "TreeViewTokenBuilder"), LV), zV = { parser: {
	TokenBuilder: /* @__PURE__ */ o(() => new RV(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ o(() => new IV(), "ValueConverter")
} };
function BV(e = lI) {
	let t = Q(KF(e), $z), n = Q(GF({ shared: t }), pB, zV);
	return t.ServiceRegistry.register(n), {
		shared: t,
		TreeView: n
	};
}
o(BV, "createTreeViewServices");
var VV, HV = (VV = class extends xB {
	constructor() {
		super(["architecture"]);
	}
}, o(VV, "ArchitectureTokenBuilder"), VV), UV, WV = (UV = class extends _B {
	runCustomConverter(e, t, n) {
		if (e.name === "ARCH_ICON") return t.replace(/[()]/g, "").trim();
		if (e.name === "ARCH_TEXT_ICON") return t.replace(/["()]/g, "");
		if (e.name === "ARCH_TITLE") {
			let e = t.replace(/^\[|]$/g, "").trim();
			return (e.startsWith("\"") && e.endsWith("\"") || e.startsWith("'") && e.endsWith("'")) && (e = e.slice(1, -1), e = e.replace(/\\"/g, "\"").replace(/\\'/g, "'")), e.trim();
		}
	}
}, o(UV, "ArchitectureValueConverter"), UV), GV = { parser: {
	TokenBuilder: /* @__PURE__ */ o(() => new HV(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ o(() => new WV(), "ValueConverter")
} };
function KV(e = lI) {
	let t = Q(KF(e), $z), n = Q(GF({ shared: t }), eB, GV);
	return t.ServiceRegistry.register(n), {
		shared: t,
		Architecture: n
	};
}
o(KV, "createArchitectureServices");
var qV, JV = (qV = class extends xB {
	constructor() {
		super(["eventmodeling"]);
	}
}, o(qV, "EventModelingTokenBuilder"), qV), YV = /* @__PURE__ */ new Set(["cmd", "command"]), XV = /* @__PURE__ */ new Set(["evt", "event"]), ZV = /* @__PURE__ */ new Set(["rmo", "readmodel"]), QV = /* @__PURE__ */ new Set(["pcr", "processor"]), $V = /* @__PURE__ */ new Set(["ui"]);
function eH(e) {
	let t = e.validation.EventModelingValidator, n = e.validation.ValidationRegistry;
	if (n) {
		let e = {
			EmTimeFrame: t.checkSourceFrameTypes.bind(t),
			EmResetFrame: t.checkSourceFrameTypes.bind(t)
		};
		n.register(e, t);
	}
}
o(eH, "registerValidationChecks");
var tH, nH = (tH = class {
	checkSourceFrameTypes(e, t) {
		e.sourceFrames.length !== 0 && (YV.has(e.modelEntityType) ? this.validateSources(e, /* @__PURE__ */ new Set([...$V, ...QV]), "command", "ui or processor", t) : XV.has(e.modelEntityType) ? this.validateSources(e, YV, "event", "command", t) : ZV.has(e.modelEntityType) ? this.validateSources(e, XV, "read model", "event", t) : QV.has(e.modelEntityType) ? this.validateSources(e, ZV, "processor", "read model", t) : $V.has(e.modelEntityType) && this.validateSources(e, ZV, "ui", "read model", t));
	}
	validateSources(e, t, n, r, i) {
		for (let a of e.sourceFrames) {
			let o = a.ref;
			o !== void 0 && !t.has(o.modelEntityType) && i("error", `A ${n} can only receive input from a ${r}, not from '${o.modelEntityType}'.`, {
				node: e,
				property: "sourceFrames"
			});
		}
	}
}, o(tH, "EventModelingValidator"), tH), rH = {
	parser: {
		TokenBuilder: /* @__PURE__ */ o(() => new JV(), "TokenBuilder"),
		ValueConverter: /* @__PURE__ */ o(() => new yB(), "ValueConverter")
	},
	validation: { EventModelingValidator: /* @__PURE__ */ o(() => new nH(), "EventModelingValidator") }
};
function iH(e = lI) {
	let t = Q(KF(e), $z), n = Q(GF({ shared: t }), nB, rH);
	return t.ServiceRegistry.register(n), eH(n), {
		shared: t,
		EventModel: n
	};
}
o(iH, "createEventModelingServices");
var aH = {}, oH = {
	info: /* @__PURE__ */ o(async () => {
		let { createInfoServices: e } = await Promise.resolve().then(() => uH);
		aH.info = e().Info.parser.LangiumParser;
	}, "info"),
	packet: /* @__PURE__ */ o(async () => {
		let { createPacketServices: e } = await Promise.resolve().then(() => dH);
		aH.packet = e().Packet.parser.LangiumParser;
	}, "packet"),
	pie: /* @__PURE__ */ o(async () => {
		let { createPieServices: e } = await Promise.resolve().then(() => fH);
		aH.pie = e().Pie.parser.LangiumParser;
	}, "pie"),
	treeView: /* @__PURE__ */ o(async () => {
		let { createTreeViewServices: e } = await Promise.resolve().then(() => pH);
		aH.treeView = e().TreeView.parser.LangiumParser;
	}, "treeView"),
	architecture: /* @__PURE__ */ o(async () => {
		let { createArchitectureServices: e } = await Promise.resolve().then(() => mH);
		aH.architecture = e().Architecture.parser.LangiumParser;
	}, "architecture"),
	gitGraph: /* @__PURE__ */ o(async () => {
		let { createGitGraphServices: e } = await Promise.resolve().then(() => hH);
		aH.gitGraph = e().GitGraph.parser.LangiumParser;
	}, "gitGraph"),
	eventmodeling: /* @__PURE__ */ o(async () => {
		let { createEventModelingServices: e } = await Promise.resolve().then(() => gH);
		aH.eventmodeling = e().EventModel.parser.LangiumParser;
	}, "eventmodeling"),
	radar: /* @__PURE__ */ o(async () => {
		let { createRadarServices: e } = await Promise.resolve().then(() => _H);
		aH.radar = e().Radar.parser.LangiumParser;
	}, "radar"),
	railroad: /* @__PURE__ */ o(async () => {
		let { createRailroadServices: e } = await Promise.resolve().then(() => vH);
		aH.railroad = e().Railroad.parser.LangiumParser;
	}, "railroad"),
	railroadEbnf: /* @__PURE__ */ o(async () => {
		let { createRailroadEbnfServices: e } = await Promise.resolve().then(() => yH);
		aH.railroadEbnf = e().RailroadEbnf.parser.LangiumParser;
	}, "railroadEbnf"),
	railroadAbnf: /* @__PURE__ */ o(async () => {
		let { createRailroadAbnfServices: e } = await Promise.resolve().then(() => bH);
		aH.railroadAbnf = e().RailroadAbnf.parser.LangiumParser;
	}, "railroadAbnf"),
	railroadPeg: /* @__PURE__ */ o(async () => {
		let { createRailroadPegServices: e } = await Promise.resolve().then(() => xH);
		aH.railroadPeg = e().RailroadPeg.parser.LangiumParser;
	}, "railroadPeg"),
	treemap: /* @__PURE__ */ o(async () => {
		let { createTreemapServices: e } = await Promise.resolve().then(() => SH);
		aH.treemap = e().Treemap.parser.LangiumParser;
	}, "treemap"),
	wardley: /* @__PURE__ */ o(async () => {
		let { createWardleyServices: e } = await Promise.resolve().then(() => CH);
		aH.wardley = e().Wardley.parser.LangiumParser;
	}, "wardley"),
	cynefin: /* @__PURE__ */ o(async () => {
		let { createCynefinServices: e } = await Promise.resolve().then(() => wH);
		aH.cynefin = e().Cynefin.parser.LangiumParser;
	}, "cynefin")
};
async function sH(e, t) {
	let n = oH[e];
	if (!n) throw Error(`Unknown diagram type: ${e}`);
	aH[e] || await n();
	let r = aH[e].parse(t);
	if (r.lexerErrors.length > 0 || r.parserErrors.length > 0) throw new lH(r);
	return r.value;
}
o(sH, "parse");
var cH, lH = (cH = class extends Error {
	constructor(e) {
		let t = e.lexerErrors.map((e) => `Lexer error on line ${e.line !== void 0 && !isNaN(e.line) ? e.line : "?"}, column ${e.column !== void 0 && !isNaN(e.column) ? e.column : "?"}: ${e.message}`).join("\n"), n = e.parserErrors.map((e) => `Parse error on line ${e.token.startLine !== void 0 && !isNaN(e.token.startLine) ? e.token.startLine : "?"}, column ${e.token.startColumn !== void 0 && !isNaN(e.token.startColumn) ? e.token.startColumn : "?"}: ${e.message}`).join("\n");
		super(`Parsing failed: ${t} ${n}`), this.result = e;
	}
}, o(cH, "MermaidParseError"), cH), uH = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	InfoModule: CV,
	createInfoServices: wV
}, Symbol.toStringTag, { value: "Module" })), dH = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	PacketModule: DV,
	createPacketServices: OV
}, Symbol.toStringTag, { value: "Module" })), fH = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	PieModule: NV,
	createPieServices: PV
}, Symbol.toStringTag, { value: "Module" })), pH = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	TreeViewModule: zV,
	createTreeViewServices: BV
}, Symbol.toStringTag, { value: "Module" })), mH = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	ArchitectureModule: GV,
	createArchitectureServices: KV
}, Symbol.toStringTag, { value: "Module" })), hH = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	GitGraphModule: yV,
	createGitGraphServices: bV
}, Symbol.toStringTag, { value: "Module" })), gH = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	EventModelingModule: rH,
	createEventModelingServices: iH
}, Symbol.toStringTag, { value: "Module" })), _H = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	RadarModule: wB,
	createRadarServices: TB
}, Symbol.toStringTag, { value: "Module" })), vH = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	RailroadModule: jB,
	createRailroadServices: MB
}, Symbol.toStringTag, { value: "Module" })), yH = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	RailroadEbnfModule: RB,
	createRailroadEbnfServices: zB
}, Symbol.toStringTag, { value: "Module" })), bH = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	RailroadAbnfModule: WB,
	createRailroadAbnfServices: GB
}, Symbol.toStringTag, { value: "Module" })), xH = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	RailroadPegModule: ZB,
	createRailroadPegServices: QB
}, Symbol.toStringTag, { value: "Module" })), SH = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	TreemapModule: sV,
	createTreemapServices: cV
}, Symbol.toStringTag, { value: "Module" })), CH = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	WardleyModule: dV,
	createWardleyServices: fV
}, Symbol.toStringTag, { value: "Module" })), wH = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	CynefinModule: hV,
	createCynefinServices: gV
}, Symbol.toStringTag, { value: "Module" }));
//#endregion
export { lH as a, sH as i, VL as n, zB as o, MB as r, QB as s, GB as t };

//# sourceMappingURL=cynefin-OW5HDTMX--IlWkCwH-DhMvmN4k.js.map