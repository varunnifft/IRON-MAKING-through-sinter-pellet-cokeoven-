/* Small Excel formula engine: runs BF_Inner_Zone_Model_v3.xlsx exactly as Excel does, from its own formulas.
   Supports the functions the workbook uses (IF, EXP, MAX, MIN, RADIANS, LEFT, SIN, SQRT, COS, PI, OR, SUM, ABS,
   INDEX, SUMPRODUCT, AND, INT, N, AVERAGE, TEXT, MATCH, SUMIF, LOG10, LN), named ranges, cross-sheet refs and ranges. */
(function (root) {
  'use strict';
  function XErr(c) { this.err = c; }
  XErr.prototype.toString = function () { return this.err; };
  var E_DIV = new XErr('#DIV/0!'), E_VAL = new XErr('#VALUE!'), E_NA = new XErr('#N/A'), E_REF = new XErr('#REF!'), E_NUM = new XErr('#NUM!'), E_NAME = new XErr('#NAME?');
  function isErr(v) { return v instanceof XErr; }
  function Arr(rows) { this.rows = rows; }

  // ---------------- tokenizer ----------------
  var REF = /^(?:(?:'((?:[^']|'')+)'|([A-Za-z_][A-Za-z0-9_\.]*))!)?\$?([A-Z]{1,3})\$?(\d+)(?::\$?([A-Z]{1,3})\$?(\d+))?(?![A-Za-z0-9_\(])/;
  function tokenize(s) {
    var t = [], i = 0, m;
    while (i < s.length) {
      var c = s[i], rest = s.slice(i);
      if (/\s/.test(c)) { i++; continue; }
      if (c === '"') { var j = i + 1, str = ''; while (j < s.length) { if (s[j] === '"') { if (s[j + 1] === '"') { str += '"'; j += 2; continue; } break; } str += s[j++]; } t.push({ t: 'str', v: str }); i = j + 1; continue; }
      if ((m = /^(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?/.exec(rest))) { t.push({ t: 'num', v: parseFloat(m[0]) }); i += m[0].length; continue; }
      if ((m = REF.exec(rest))) {
        var sh = m[1] ? m[1].replace(/''/g, "'") : m[2] || null;
        t.push({ t: 'ref', sh: sh, c1: m[3], r1: +m[4], c2: m[5] || null, r2: m[6] ? +m[6] : null }); i += m[0].length; continue;
      }
      if ((m = /^[A-Za-z_][A-Za-z0-9_\.]*/.exec(rest))) {
        var w = m[0]; i += w.length;
        if (s[i] === '(') { t.push({ t: 'fn', v: w.toUpperCase() }); i++; continue; }
        if (/^(TRUE|FALSE)$/i.test(w)) { t.push({ t: 'bool', v: /^TRUE$/i.test(w) }); continue; }
        t.push({ t: 'name', v: w }); continue;
      }
      if ((m = /^(<>|<=|>=|[-+*\/^&=<>%(),:])/.exec(rest))) { t.push({ t: 'op', v: m[0] }); i += m[0].length; continue; }
      throw new Error('Bad formula near: ' + rest.slice(0, 20));
    }
    return t;
  }
  // ---------------- parser (Excel precedence) ----------------
  function parse(src) {
    var T = tokenize(src), p = 0;
    function peek() { return T[p]; }
    function isOp(v) { var x = T[p]; return x && x.t === 'op' && x.v === v; }
    function expect(v) { if (!isOp(v)) throw new Error('Expected ' + v + ' in ' + src); p++; }
    function cmp() { var a = cat(); while (T[p] && T[p].t === 'op' && /^(=|<>|<|>|<=|>=)$/.test(T[p].v)) { var o = T[p++].v; a = { k: 'bin', o: o, a: a, b: cat() }; } return a; }
    function cat() { var a = add(); while (isOp('&')) { p++; a = { k: 'bin', o: '&', a: a, b: add() }; } return a; }
    function add() { var a = mul(); while (isOp('+') || isOp('-')) { var o = T[p++].v; a = { k: 'bin', o: o, a: a, b: mul() }; } return a; }
    function mul() { var a = pow(); while (isOp('*') || isOp('/')) { var o = T[p++].v; a = { k: 'bin', o: o, a: a, b: pow() }; } return a; }
    function pow() { var a = pct(); while (isOp('^')) { p++; a = { k: 'bin', o: '^', a: a, b: pct() }; } return a; }
    function pct() { var a = un(); while (isOp('%')) { p++; a = { k: 'bin', o: '/', a: a, b: { k: 'num', v: 100 } }; } return a; }
    function un() { if (isOp('-')) { p++; return { k: 'neg', a: un() }; } if (isOp('+')) { p++; return un(); } return prim(); }
    function prim() {
      var x = T[p++]; if (!x) throw new Error('Unexpected end in ' + src);
      if (x.t === 'num') return { k: 'num', v: x.v };
      if (x.t === 'str') return { k: 'str', v: x.v };
      if (x.t === 'bool') return { k: 'bool', v: x.v };
      if (x.t === 'ref') return { k: 'ref', sh: x.sh, c1: x.c1, r1: x.r1, c2: x.c2, r2: x.r2 };
      if (x.t === 'name') return { k: 'name', v: x.v };
      if (x.t === 'fn') {
        var args = [];
        if (!isOp(')')) { do { if (isOp(',')) { p++; args.push({ k: 'empty' }); continue; } args.push(cmp()); if (isOp(',')) { p++; if (isOp(')')) args.push({ k: 'empty' }); continue; } break; } while (true); }
        expect(')'); return { k: 'fn', f: x.v, args: args };
      }
      if (x.t === 'op' && x.v === '(') { var e = cmp(); expect(')'); return e; }
      throw new Error('Unexpected ' + JSON.stringify(x) + ' in ' + src);
    }
    var e = cmp(); if (p < T.length) throw new Error('Trailing tokens in ' + src); return e;
  }

  // ---------------- helpers ----------------
  function colNum(c) { var n = 0; for (var i = 0; i < c.length; i++) n = n * 26 + c.charCodeAt(i) - 64; return n; }
  function colName(n) { var s = ''; while (n > 0) { var m = (n - 1) % 26; s = String.fromCharCode(65 + m) + s; n = Math.floor((n - 1) / 26); } return s; }
  function numToText(n) {
    if (!isFinite(n)) return n !== n ? 'NaN' : '#NUM!';
    if (Number.isInteger(n)) return String(n);
    var s = String(parseFloat(n.toPrecision(15))); return s;
  }
  function toNum(v) {
    if (isErr(v)) return v; if (v === null || v === undefined || v === '') return 0;
    if (typeof v === 'number') return v; if (typeof v === 'boolean') return v ? 1 : 0;
    if (typeof v === 'string') { var n = Number(v); return v.trim() !== '' && isFinite(n) ? n : E_VAL; }
    if (v instanceof Arr) return toNum(v.rows[0][0]);
    return E_VAL;
  }
  function toStr(v) { if (v === null || v === undefined) return ''; if (typeof v === 'number') return numToText(v); if (typeof v === 'boolean') return v ? 'TRUE' : 'FALSE'; if (v instanceof Arr) return toStr(v.rows[0][0]); return String(v); }
  function toBool(v) { if (typeof v === 'boolean') return v; if (v === null || v === undefined || v === '') return false; if (typeof v === 'number') return v !== 0; if (typeof v === 'string') { if (/^true$/i.test(v)) return true; if (/^false$/i.test(v)) return false; return E_VAL; } if (v instanceof Arr) return toBool(v.rows[0][0]); return E_VAL; }
  function flat(v, out) { if (v instanceof Arr) v.rows.forEach(function (r) { r.forEach(function (x) { out.push(x); }); }); else out.push(v); return out; }
  function roundHalfAway(x, d) { var f = Math.pow(10, d); var y = Math.abs(x) * f; var r = Math.round(y + 1e-9 * Math.max(1, y) * 1e-6); return Math.sign(x) * r / f; }
  function textFmt(v, fmt) {
    if (typeof v !== 'number') { var n = toNum(v); if (isErr(n)) return toStr(v); v = n; }
    var pct = /%$/.test(fmt), f = fmt.replace(/%$/, ''), dm = /\.(0+)/.exec(f), d = dm ? dm[1].length : 0, th = /,/.test(f);
    var x = pct ? v * 100 : v; x = roundHalfAway(x, d);
    var s = Math.abs(x).toFixed(d);
    if (th) { var parts = s.split('.'); parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); s = parts.join('.'); }
    return (x < 0 && Number(s.replace(/,/g, '')) !== 0 ? '-' : '') + s + (pct ? '%' : '');
  }
  function cmpVals(a, b) {   // Excel ordering: numbers < text < booleans; text case-insensitive
    var ta = a === null || a === undefined ? 'e' : typeof a, tb = b === null || b === undefined ? 'e' : typeof b;
    if (ta === 'e') { a = tb === 'string' ? '' : tb === 'boolean' ? false : 0; ta = tb === 'e' ? 'number' : tb; }
    if (tb === 'e') { b = ta === 'string' ? '' : ta === 'boolean' ? false : 0; tb = ta; }
    var rank = { number: 0, string: 1, boolean: 2 };
    if (ta !== tb) return rank[ta] - rank[tb];
    if (ta === 'string') { a = a.toLowerCase(); b = b.toLowerCase(); }
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function binop(o, a, b) {
    if (a instanceof Arr || b instanceof Arr) {
      var A = a instanceof Arr ? a.rows : null, B = b instanceof Arr ? b.rows : null;
      var R = Math.max(A ? A.length : 1, B ? B.length : 1), Cc = Math.max(A ? A[0].length : 1, B ? B[0].length : 1), out = [];
      for (var i = 0; i < R; i++) { var row = []; for (var j = 0; j < Cc; j++) {
        var x = A ? (A[A.length === 1 ? 0 : i] || [])[A[0].length === 1 ? 0 : j] : a, y = B ? (B[B.length === 1 ? 0 : i] || [])[B[0].length === 1 ? 0 : j] : b;
        row.push(x === undefined || y === undefined ? E_NA : binop(o, x, y)); } out.push(row); }
      return new Arr(out);
    }
    if (isErr(a)) return a; if (isErr(b)) return b;
    if (o === '&') return toStr(a) + toStr(b);
    if (/^(=|<>|<|>|<=|>=)$/.test(o)) { var c = cmpVals(a, b); return o === '=' ? c === 0 : o === '<>' ? c !== 0 : o === '<' ? c < 0 : o === '>' ? c > 0 : o === '<=' ? c <= 0 : c >= 0; }
    var x2 = toNum(a), y2 = toNum(b); if (isErr(x2)) return x2; if (isErr(y2)) return y2;
    switch (o) {
      case '+': return x2 + y2; case '-': return x2 - y2; case '*': return x2 * y2;
      case '/': return y2 === 0 ? E_DIV : x2 / y2;
      case '^': var r = Math.pow(x2, y2); return isNaN(r) && !isNaN(x2) && !isNaN(y2) ? E_NUM : r;
    }
    return E_VAL;
  }

  // ---------------- workbook ----------------
  function Book(model) {
    this.sheets = model.sheets; this.names = model.names; this.ast = {}; this.cache = {}; this.over = {}; this.stack = {};
    var self = this; this.sheetIdx = {}; Object.keys(model.sheets).forEach(function (s) { self.sheetIdx[s.toLowerCase()] = s; });
    this.nameRef = {};
    Object.keys(model.names).forEach(function (n) { self.nameRef[n.toLowerCase()] = model.names[n]; });
  }
  Book.prototype.set = function (sheet, addr, v) { this.over[sheet + '!' + addr] = v; this.cache = {}; };
  Book.prototype.clearOverrides = function () { this.over = {}; this.cache = {}; };
  Book.prototype.raw = function (sheet, addr) { var k = sheet + '!' + addr; if (k in this.over) return { v: this.over[k] }; var v = this.sheets[sheet] && this.sheets[sheet][addr]; return v === undefined ? null : (typeof v === 'string' && v[0] === '=' ? { f: v } : { v: v }); };
  Book.prototype.get = function (sheet, addr) {
    var k = sheet + '!' + addr;
    if (k in this.cache) return this.cache[k];
    var r = this.raw(sheet, addr), out;
    if (!r) out = null;
    else if (!('f' in r)) out = r.v;
    else {
      if (this.stack[k]) throw new Error('Circular reference at ' + k);
      this.stack[k] = 1;
      try {
        var a = this.ast[k] || (this.ast[k] = parse(r.f.slice(1)));
        out = this.ev(a, sheet);
        if (out instanceof Arr) out = out.rows[0][0];
        if (out === null || out === undefined) out = 0;
      } finally { delete this.stack[k]; }
    }
    this.cache[k] = out; return out;
  };
  Book.prototype.range = function (sh, c1, r1, c2, r2) {
    var a = colNum(c1), b = colNum(c2), rows = [];
    for (var r = Math.min(r1, r2); r <= Math.max(r1, r2); r++) { var row = []; for (var c = Math.min(a, b); c <= Math.max(a, b); c++) row.push(this.get(sh, colName(c) + r)); rows.push(row); }
    return new Arr(rows);
  };
  Book.prototype.refVal = function (n, cur) {
    var sh = n.sh ? (this.sheetIdx[n.sh.toLowerCase()] || n.sh) : cur;
    if (!this.sheets[sh]) return E_REF;
    if (n.c2) return this.range(sh, n.c1, n.r1, n.c2, n.r2);
    return this.get(sh, n.c1 + n.r1);
  };
  Book.prototype.nameVal = function (name, cur) {
    var t = this.nameRef[name.toLowerCase()]; if (!t) return E_NAME;
    var a = this.ast['#name:' + name] || (this.ast['#name:' + name] = parse(t));
    return this.ev(a, cur);
  };
  Book.prototype.ev = function (n, cur) {
    var self = this, ev = function (x) { return self.ev(x, cur); };
    switch (n.k) {
      case 'num': return n.v; case 'str': return n.v; case 'bool': return n.v; case 'empty': return null;
      case 'ref': return this.refVal(n, cur);
      case 'name': return this.nameVal(n.v, cur);
      case 'neg': { var v = ev(n.a); if (v instanceof Arr) return binop('*', v, -1); var x = toNum(v); return isErr(x) ? x : -x; }
      case 'bin': return binop(n.o, ev(n.a), ev(n.b));
      case 'fn': return this.fn(n.f, n.args, cur);
    }
    throw new Error('bad node');
  };
  function nums(vals, fromRange) { var out = []; for (var i = 0; i < vals.length; i++) { var v = vals[i]; if (isErr(v)) return v; if (typeof v === 'number') out.push(v); else if (!fromRange && typeof v === 'boolean') out.push(v ? 1 : 0); } return out; }
  Book.prototype.fn = function (f, A, cur) {
    var self = this, ev = function (x) { return self.ev(x, cur); };
    var num1 = function (i) { var v = ev(A[i]); return toNum(v); };
    var collect = function () { var out = []; for (var i = 0; i < A.length; i++) { var v = ev(A[i]); if (v instanceof Arr) { var a = nums(flat(v, []), true); if (isErr(a)) return a; out = out.concat(a); } else { if (isErr(v)) return v; var x = toNum(v); if (isErr(x)) return x; out.push(x); } } return out; };
    var math1 = function (g) { var x = num1(0); if (isErr(x)) return x; var r = g(x); return isNaN(r) && !isNaN(x) ? E_NUM : r; };
    f = String(f).replace(/^_xlfn\./i, '').toUpperCase();
    var critOk = function (x0, crit) {
      var op = '=', cv = crit;
      if (typeof crit === 'string') { var mm = /^(<=|>=|<>|<|>|=)?(.*)$/.exec(crit); op = mm[1] || '='; cv = mm[2]; var cn = Number(cv); if (cv !== '' && isFinite(cn)) cv = cn; }
      if (x0 === null) return op === '=' && cv === '';
      if (typeof cv === 'boolean') return x0 === cv;
      if (typeof cv === 'number') { if (typeof x0 !== 'number') return op === '<>'; var d0 = x0 - cv; return op === '=' ? d0 === 0 : op === '<>' ? d0 !== 0 : op === '<' ? d0 < 0 : op === '>' ? d0 > 0 : op === '<=' ? d0 <= 0 : d0 >= 0; }
      if ((op === '=' || op === '<>') && /[*?]/.test(String(cv))) { var re = new RegExp('^' + String(cv).replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*').replace(/\?/g, '.') + '$', 'i'); return re.test(toStr(x0)) === (op === '='); }
      var cc = cmpVals(toStr(x0), String(cv)); return op === '=' ? cc === 0 : op === '<>' ? cc !== 0 : op === '<' ? cc < 0 : op === '>' ? cc > 0 : op === '<=' ? cc <= 0 : cc >= 0;
    };
    switch (f) {
      case 'MAXIFS': case 'MINIFS': case 'SUMIFS': case 'COUNTIFS': case 'AVERAGEIFS': {
        var first = f === 'COUNTIFS' ? 0 : 1, tgt = f === 'COUNTIFS' ? null : flat(ev(A[0]), []), conds = [];
        for (var ci = first; ci + 1 < A.length; ci += 2) { var cr = ev(A[ci + 1]); if (cr instanceof Arr) cr = cr.rows[0][0]; if (isErr(cr)) return cr; conds.push([flat(ev(A[ci]), []), cr]); }
        var n0 = conds.length ? conds[0][0].length : 0, pick = [];
        for (var zi = 0; zi < n0; zi++) { var okc = true; for (var cj = 0; cj < conds.length && okc; cj++) okc = critOk(conds[cj][0][zi], conds[cj][1]); if (okc) pick.push(zi); }
        if (f === 'COUNTIFS') return pick.length;
        var vs = []; for (var pi = 0; pi < pick.length; pi++) { var tv0 = tgt[pick[pi]]; if (isErr(tv0)) return tv0; if (typeof tv0 === 'number') vs.push(tv0); }
        if (f === 'SUMIFS') return vs.reduce(function (p0, q0) { return p0 + q0; }, 0);
        if (f === 'AVERAGEIFS') return vs.length ? vs.reduce(function (p0, q0) { return p0 + q0; }, 0) / vs.length : E_DIV;
        if (!vs.length) return 0; return f === 'MAXIFS' ? Math.max.apply(null, vs) : Math.min.apply(null, vs);
      }
      case 'COUNTIF': { var cr1 = ev(A[1]); if (cr1 instanceof Arr) cr1 = cr1.rows[0][0]; if (isErr(cr1)) return cr1; var rg1 = flat(ev(A[0]), []), cnt1 = 0; for (var y1 = 0; y1 < rg1.length; y1++) if (critOk(rg1[y1], cr1)) cnt1++; return cnt1; }
      case 'COUNTA': { var ca = []; for (var ia = 0; ia < A.length; ia++) { var va = ev(A[ia]); if (va instanceof Arr) flat(va, ca); else if (A[ia].k !== 'empty') ca.push(va === null ? '' : va); } return ca.filter(function (x) { return x !== null && x !== undefined; }).length; }
      case 'ROUND': case 'ROUNDUP': case 'ROUNDDOWN': { var rx = num1(0), rd = A.length > 1 ? num1(1) : 0; if (isErr(rx)) return rx; if (isErr(rd)) return rd; var pw = Math.pow(10, Math.trunc(rd)), sc = rx * pw;
        var rr = f === 'ROUND' ? Math.sign(sc) * Math.round(Math.abs(sc) + 1e-9) : f === 'ROUNDUP' ? Math.sign(sc) * Math.ceil(Math.abs(sc) - 1e-9) : Math.trunc(sc); return rr / pw; }
      case 'RANK': case 'RANK.EQ': { var rv = num1(0); if (isErr(rv)) return rv; var rl = nums(flat(ev(A[1]), []), true); if (isErr(rl)) return rl; var asc = A.length > 2 && toNum(ev(A[2])) ? 1 : 0;
        if (rl.indexOf(rv) < 0) return E_NA; var rk = 1; for (var ir = 0; ir < rl.length; ir++) if (asc ? rl[ir] < rv : rl[ir] > rv) rk++; return rk; }
      case 'ISNUMBER': { var iv = ev(A[0]); if (iv instanceof Arr) iv = iv.rows[0][0]; return typeof iv === 'number'; }
      case 'ISERROR': { var ie = ev(A[0]); if (ie instanceof Arr) ie = ie.rows[0][0]; return isErr(ie); }
      case 'IFERROR': { var fe = ev(A[0]); if (fe instanceof Arr) fe = fe.rows[0][0]; return isErr(fe) ? ev(A[1]) : fe; }
      case 'IF': { var c = toBool(ev(A[0])); if (isErr(c)) return c; return c ? (A[1] ? ev(A[1]) : true) : (A.length > 2 ? ev(A[2]) : false); }
      case 'AND': case 'OR': {
        var vals = []; for (var i = 0; i < A.length; i++) flat(ev(A[i]), vals);
        var res = f === 'AND'; for (var j = 0; j < vals.length; j++) { var b = vals[j]; if (b === null || typeof b === 'string') continue; b = toBool(b); if (isErr(b)) return b; if (f === 'AND' && !b) res = false; if (f === 'OR' && b) res = true; }
        return res;
      }
      case 'MAX': case 'MIN': { var a2 = collect(); if (isErr(a2)) return a2; if (!a2.length) return 0; return f === 'MAX' ? Math.max.apply(null, a2) : Math.min.apply(null, a2); }
      case 'SUM': { var s = collect(); if (isErr(s)) return s; return s.reduce(function (p, q) { return p + q; }, 0); }
      case 'AVERAGE': { var av = collect(); if (isErr(av)) return av; return av.length ? av.reduce(function (p, q) { return p + q; }, 0) / av.length : E_DIV; }
      case 'EXP': return math1(Math.exp); case 'SQRT': return math1(Math.sqrt); case 'ABS': return math1(Math.abs);
      case 'SIN': return math1(Math.sin); case 'COS': return math1(Math.cos); case 'RADIANS': return math1(function (x) { return x * Math.PI / 180; });
      case 'LN': return math1(function (x) { return x > 0 ? Math.log(x) : NaN; }); case 'LOG10': return math1(function (x) { return x > 0 ? Math.log10(x) : NaN; });
      case 'INT': return math1(Math.floor); case 'PI': return Math.PI;
      case 'TRUE': return true; case 'FALSE': return false;
      case 'N': { var nv = ev(A[0]); if (nv instanceof Arr) nv = nv.rows[0][0]; return typeof nv === 'number' ? nv : typeof nv === 'boolean' ? (nv ? 1 : 0) : isErr(nv) ? nv : 0; }
      case 'LEFT': { var tv = ev(A[0]); if (isErr(tv)) return tv; var k = A.length > 1 ? toNum(ev(A[1])) : 1; return toStr(tv).slice(0, k); }
      case 'TEXT': { var v0 = ev(A[0]); if (isErr(v0)) return v0; return textFmt(v0, toStr(ev(A[1]))); }
      case 'INDEX': {
        var arr = ev(A[0]); if (isErr(arr)) return arr; if (!(arr instanceof Arr)) arr = new Arr([[arr]]);
        var r = A.length > 1 && A[1].k !== 'empty' ? toNum(ev(A[1])) : 0, c2 = A.length > 2 && A[2].k !== 'empty' ? toNum(ev(A[2])) : 0;
        if (isErr(r)) return r; if (isErr(c2)) return c2; r = Math.floor(r); c2 = Math.floor(c2);
        var R = arr.rows;
        if (R.length === 1 && A.length === 2) { c2 = r; r = 1; }
        if (!c2) c2 = 1; if (!r) r = 1;
        if (r < 1 || r > R.length || c2 < 1 || c2 > R[0].length) return E_REF;
        var o = R[r - 1][c2 - 1]; return o === undefined ? null : o;
      }
      case 'MATCH': {
        var look = ev(A[0]), la = ev(A[1]), mt = A.length > 2 ? toNum(ev(A[2])) : 1; if (isErr(look)) return look;
        var L = flat(la, []);
        if (mt === 0) { for (var q = 0; q < L.length; q++) if (L[q] !== null && cmpVals(L[q], look) === 0) return q + 1; return E_NA; }
        if (mt === 1) { var lo = 0, hi = L.length - 1, ans = -1; while (lo <= hi) { var mid = (lo + hi) >> 1; if (L[mid] === null || cmpVals(L[mid], look) <= 0) { ans = mid; lo = mid + 1; } else hi = mid - 1; } return ans < 0 ? E_NA : ans + 1; }
        var lo2 = 0, hi2 = L.length - 1, ans2 = -1; while (lo2 <= hi2) { var m2 = (lo2 + hi2) >> 1; if (cmpVals(L[m2], look) >= 0) { ans2 = m2; lo2 = m2 + 1; } else hi2 = m2 - 1; } return ans2 < 0 ? E_NA : ans2 + 1;
      }
      case 'SUMIF': {
        var rg = flat(ev(A[0]), []), crit = ev(A[1]), sr = A.length > 2 ? flat(ev(A[2]), []) : rg;
        var op = '=', cv = crit;
        if (typeof crit === 'string') { var mm = /^(<=|>=|<>|<|>|=)?(.*)$/.exec(crit); op = mm[1] || '='; cv = mm[2]; var cn = Number(cv); if (cv !== '' && isFinite(cn)) cv = cn; }
        var tot = 0;
        for (var z = 0; z < rg.length; z++) {
          var x0 = rg[z]; if (x0 === null) { if (!(op === '=' && cv === '')) continue; }
          var ok;
          if (typeof cv === 'number') { if (typeof x0 !== 'number') { ok = op === '<>'; } else { var d0 = x0 - cv; ok = op === '=' ? d0 === 0 : op === '<>' ? d0 !== 0 : op === '<' ? d0 < 0 : op === '>' ? d0 > 0 : op === '<=' ? d0 <= 0 : d0 >= 0; } }
          else if ((op === '=' || op === '<>') && /[*?]/.test(String(cv))) { var re = new RegExp('^' + String(cv).replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*').replace(/\?/g, '.') + '$', 'i'); ok = re.test(toStr(x0)) === (op === '='); }
          else { var cc = cmpVals(toStr(x0), String(cv)); ok = op === '=' ? cc === 0 : op === '<>' ? cc !== 0 : op === '<' ? cc < 0 : op === '>' ? cc > 0 : op === '<=' ? cc <= 0 : cc >= 0; }
          if (ok && typeof sr[z] === 'number') tot += sr[z];
        }
        return tot;
      }
      case 'SUMPRODUCT': {
        var arrs = A.map(function (a) { var v = ev(a); return v instanceof Arr ? v.rows : [[v]]; });
        var R2 = arrs[0].length, C2 = arrs[0][0].length, sum = 0;
        for (var u = 1; u < arrs.length; u++) if (arrs[u].length !== R2 || arrs[u][0].length !== C2) return E_VAL;
        for (var i2 = 0; i2 < R2; i2++) for (var j2 = 0; j2 < C2; j2++) {
          var prod = 1; for (var w = 0; w < arrs.length; w++) { var e2 = arrs[w][i2][j2]; if (isErr(e2)) return e2; prod *= typeof e2 === 'number' ? e2 : typeof e2 === 'boolean' && arrs.length === 1 ? (e2 ? 1 : 0) : 0; }
          sum += prod;
        }
        return sum;
      }
    }
    return E_NAME;
  };
  root.XLCalc = { Book: Book, parse: parse, isErr: isErr, textFmt: textFmt, numToText: numToText };
  if (typeof module !== 'undefined') module.exports = root.XLCalc;
})(typeof window !== 'undefined' ? window : globalThis);
