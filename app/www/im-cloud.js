/* Iron Making Cloud: keeps the admin's Google Drive up to date, automatically and in the background.
   - login / app opened  → user register (login ID, name, email, company, mobile, last seen)
   - every file picked in the app (Excel, PDF, CSV…) → Drive: Uploads/<login ID>/
   - the user's saved inputs → Drive: Backups/<login ID>/latest.json (+ one file per day)
   - suggestions → register sheet "Suggestions"
   Offline: small items wait in a queue and are sent when the internet is back. The app never waits for this. */
(function () {
  'use strict';
  if (window.IMCloud) return;
  var Q = 'im.cloud.q', TOK = 'im.cloud.tok', ADM = 'im.admin', LASTB = 'im.cloud.bk', LASTS = 'im.cloud.seen';
  var MAX_UP = 15 * 1048576, MAX_Q_UP = 1.5 * 1048576;
  var SKIP = /^(bf-user|bf-reg|bf-auth-|bf-quiz-cache|im\.cloud\.|im\.admin|im\.save|im\.route|sinter-cd-sel|coke-cd-sel)/;

  function ls(k, v) { try { if (v === undefined) return JSON.parse(localStorage.getItem(k) || 'null'); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, JSON.stringify(v)); } catch (e) { return null; } }
  var GOOD = /^https:\/\/script\.google(usercontent)?\.com\/.+\/exec$/;
  // The link to the admin's Drive storage: set in cloud-config.js, or published by the admin in the app's GitHub repository
  // (cloud-url.txt), so apps already installed start syncing as soon as the admin sets it up. Kept on the device once read.
  var REMOTE = ['https://raw.githubusercontent.com/varunnifft/IRON-MAKING-through-sinter-pellet-cokeoven-/main/cloud-url.txt',
                'https://varunnifft.github.io/IRON-MAKING-through-sinter-pellet-cokeoven-/cloud-url.txt'], RKEY = 'im.cloud.remote';
  function url() {
    var t = null, r = null; try { t = localStorage.getItem('im.cloud.test'); r = JSON.parse(localStorage.getItem(RKEY) || 'null'); } catch (e) { }
    if (t) return t; if (GOOD.test(window.BF_CLOUD_URL || '')) return window.BF_CLOUD_URL; return r && r.u || '';
  }
  function configured() { return GOOD.test(url()) || /^http:\/\/(localhost|127\.0\.0\.1)/.test(url()); }
  var lwaits = {}, lseq = 0, prevLink = window.__bfLinkDone;
  window.__bfLinkDone = function (id, ok, data) {
    var w = lwaits[id]; if (!w) return prevLink && prevLink.apply(this, arguments); delete lwaits[id];
    if (!ok) return w.no(new Error(data || 'failed'));
    try { var bin = atob(data), b = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) b[i] = bin.charCodeAt(i); w.ok(new TextDecoder().decode(b)); } catch (e) { w.no(e); }
  };
  function getText(u) {
    if (window.Android && window.Android.fetchUrl) return new Promise(function (ok, no) { var id = 'K' + (++lseq); lwaits[id] = { ok: ok, no: no }; window.Android.fetchUrl(u, id); });
    if (window.bfNet && window.bfNet.fetchUrl) return window.bfNet.fetchUrl(u).then(function (r) { if (!r.ok) throw new Error('failed'); return new TextDecoder().decode(new Uint8Array(r.data)); });
    return fetch(u, { cache: 'no-store' }).then(function (x) { if (!x.ok) throw 0; return x.text(); });
  }
  function refreshUrl(force) {
    if (GOOD.test(window.BF_CLOUD_URL || '')) return Promise.resolve(url());
    var r = ls(RKEY); if (!force && r && r.t && Date.now() - r.t < 6 * 3600 * 1000) return Promise.resolve(url());
    var i = 0;
    function next() {
      if (i >= REMOTE.length) return Promise.resolve(url());
      return getText(REMOTE[i++] + '?t=' + Date.now())
        .then(function (t) { t = String(t).trim(); if (GOOD.test(t)) { ls(RKEY, { u: t, t: Date.now() }); return t; } if (/^none$/i.test(t)) { ls(RKEY, { u: '', t: Date.now() }); return ''; } throw 0; })
        .catch(function () { return next(); });
    }
    return next();
  }
  function user() { var u = ls('bf-user'); return u && u.loginId && !u.guest ? u : null; }
  function page() { return (location.pathname.split('/').pop() || 'index.html').replace(/\.html$/, '') + (location.hash || ''); }
  function app() { var v = window.BF_APP_VERSION || ''; return (window.Android ? 'Android ' : /Electron|IronMakingDesktop/.test(navigator.userAgent) ? 'Desktop ' : 'Browser ') + v; }

  var waits = {}, seq = 0, prev = window.__bfPostDone;
  window.__bfPostDone = function (id, ok, text) {
    var w = waits[id]; if (!w) return prev && prev(id, ok, text);
    delete waits[id]; ok ? w.ok(text) : w.no(new Error(text || 'request failed'));
  };
  function post(body) {
    if (window.Android && window.Android.post) return new Promise(function (ok, no) { var id = 'C' + (++seq); waits[id] = { ok: ok, no: no }; window.Android.post(url(), body, id); });
    if (window.bfNet && window.bfNet.post) return window.bfNet.post(url(), body).then(function (r) { if (!r.ok) throw new Error(r.error || 'request failed'); return r.text; });
    return fetch(url(), { method: 'POST', body: body, redirect: 'follow', headers: { 'Content-Type': 'text/plain;charset=utf-8' } }).then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.text(); });
  }
  function call(action, data) {
    if (!configured()) return refreshUrl(true).then(function () { if (!configured()) throw new Error('The online storage is not set up yet, or there is no internet.'); return call(action, data); });
    return post(JSON.stringify(Object.assign({ action: action, app: app() }, data || {}))).then(function (t) {
      var r; try { r = JSON.parse(t); } catch (e) { throw new Error('The online storage did not answer as expected.'); }
      if (!r.ok) throw new Error(r.error || 'Online storage error'); return r;
    });
  }

  // ---- user token (from "seen")
  function token(u) { var t = ls(TOK); return t && t.id === u.loginId ? t.tok : ''; }
  function seen(event) {
    var u = user(); if (!u) return Promise.reject(new Error('not logged in'));
    return call('seen', { loginId: u.loginId, event: event || 'open', user: { name: u.name, email: u.email, company: u.company, mobile: u.mobile } })
      .then(function (r) { ls(TOK, { id: u.loginId, tok: r.token }); ls(LASTS, Date.now()); return r.token; });
  }
  function withUser(fn) {
    var u = user(); if (!u || !configured()) return Promise.reject(new Error('offline'));
    var t = token(u); return (t ? Promise.resolve(t) : seen('open')).then(function (tok) {
      return fn(u, tok).catch(function (e) { if (/Not signed in to the cloud/.test(e.message)) { ls(TOK, null); return seen('open').then(function (t2) { return fn(u, t2); }); } throw e; });
    });
  }

  // ---- queue for small items when offline
  function enqueue(it) { var q = ls(Q) || []; q.push(it); while (q.length > 60) q.shift(); ls(Q, q); }
  var flushing = false;
  function flush() {
    if (flushing || !configured() || !user()) return; var q = ls(Q) || []; if (!q.length) return;
    flushing = true;
    var it = q[0];
    withUser(function (u, tok) { return call(it.action, Object.assign({}, it.data, { loginId: u.loginId, token: tok, name: u.name, email: u.email })); })
      .then(function () { var q2 = ls(Q) || []; q2.shift(); ls(Q, q2); flushing = false; setTimeout(flush, 300); },
            function (e) { flushing = false; if (!/offline|internet|fetch|network|HTTP 5|timed/i.test(e.message)) { var q2 = ls(Q) || []; q2.shift(); ls(Q, q2); } });
  }
  function send(action, data, queueable) {
    return withUser(function (u, tok) { return call(action, Object.assign({}, data, { loginId: u.loginId, token: tok, name: u.name, email: u.email })); })
      .catch(function (e) { if (queueable) enqueue({ action: action, data: data }); throw e; });
  }

  // ---- 1. every file the user picks in the app goes to Drive
  function b64of(file) { return new Promise(function (ok, no) { var fr = new FileReader(); fr.onload = function () { var s = String(fr.result); ok(s.slice(s.indexOf(',') + 1)); }; fr.onerror = function () { no(fr.error); }; fr.readAsDataURL(file); }); }
  document.addEventListener('change', function (e) {
    var t = e.target; if (!t || t.type !== 'file' || !t.files || !t.files.length || t.hasAttribute('data-no-cloud') || !user() || !configured()) return;
    Array.prototype.slice.call(t.files, 0, 10).forEach(function (f) {
      if (f.size > MAX_UP) return;
      b64of(f).then(function (b64) {
        var d = { fileName: f.name, mime: f.type || '', b64: b64, page: page() };
        return send('upload', d, false).catch(function () { if (f.size <= MAX_Q_UP) enqueue({ action: 'upload', data: d }); });
      }).catch(function () { });
    });
  }, true);

  // ---- 2. the user's saved inputs → Drive backup (when they change; at most every 2 minutes)
  function snapshot() {
    var o = {}, n = 0;
    try { for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (SKIP.test(k)) continue; o[k] = localStorage.getItem(k); n++; } } catch (e) { }
    return n ? JSON.stringify({ app: 'Iron Making', version: window.BF_APP_VERSION || '', at: new Date().toISOString(), page: page(), data: o }) : '';
  }
  function hash(s) { var h = 5381; for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return String(h) + ':' + s.length; }
  function backup(force) {
    if (!user() || !configured()) return;
    var s = snapshot(); if (!s) return;
    var core = s.replace(/"at":"[^"]*","page":"[^"]*",/, ''), h = hash(core), last = ls(LASTB) || {};
    if (!force && last.h === h) return;
    if (!force && last.t && Date.now() - last.t < 120000) return;
    send('backup', { data: s }, false).then(function () { ls(LASTB, { h: h, t: Date.now() }); }, function () { });
  }

  // ---- 3. suggestions sent from the Feedback page are copied to the register
  function hookSuggest() {
    var A = window.BFAuth; if (!A || A.__cloud) return; A.__cloud = true;
    var orig = A.call;
    A.call = function (action, data) {
      var p = orig.apply(this, arguments);
      if (action === 'suggest' && data) { var text = data.text || data.message || data.suggestion || JSON.stringify(data); send('suggest', { text: String(text), page: page() }, true).catch(function () { }); }
      return p;
    };
  }

  // ---- admin
  function admin() { var a = ls(ADM), u = user(); return a && u && u.admin && a.token && a.exp > Date.now() ? a : null; }
  function adminLogin(id, pw) {
    return call('adminLogin', { loginId: id, password: pw }).then(function (r) {
      ls(ADM, { token: r.token, exp: r.exp, folderUrl: r.folderUrl, bookUrl: r.bookUrl });
      ls(TOK, { id: r.user.loginId, tok: r.cloudToken });
      return r;
    });
  }
  function adminCall(action, data) { var a = admin(); if (!a) return Promise.reject(new Error('Admin login expired. Log out and log in again as admin.')); return call(action, Object.assign({ adminToken: a.token }, data || {})); }

  window.IMCloud = { configured: configured, refreshUrl: refreshUrl, url: url, call: call, seen: seen, backup: backup, flush: flush, admin: admin, adminLogin: adminLogin, adminCall: adminCall, b64of: b64of, user: user };

  // ---- start: once a day "app opened", then backup and queue in the background
  function start() {
    hookSuggest();
    refreshUrl(false).then(go, go);
  }
  var started = false;
  function go() {
    if (started || !user() || !configured()) return; started = true;
    var last = ls(LASTS) || 0;
    (Date.now() - last > 20 * 3600 * 1000 ? seen('open') : Promise.resolve()).catch(function () { }).then(function () { flush(); setTimeout(function () { backup(false); }, 4000); });
    setInterval(function () { backup(false); flush(); }, 5 * 60000);
    document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') backup(false); });
    window.addEventListener('online', flush);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
