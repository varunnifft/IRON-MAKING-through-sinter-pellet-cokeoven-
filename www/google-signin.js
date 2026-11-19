/* Direct sign-in (6.3.7) on the sign-in page: Continue with Google, or Continue with email (6-digit code to any address).
   Google:
   1. Asks Iron Making Cloud whether Google sign-in is switched on (googleCfg) and shows the button.
   2. Makes a one-time code and opens the Google login page in the phone's browser (Google does not allow its sign-in
      inside apps' web views). The user picks one of the Google accounts on the phone.
   3. Checks with the server every few seconds (googleClaim) and signs in as soon as the account is confirmed.
   Login ID = the Gmail address. The once-a-day login check of the registration server is skipped for Google logins;
   a blocked account is still stopped by Iron Making Cloud. */
(function () {
  'use strict';
  var K = 'im.gsign', CFG = 'im.gcfg', WAIT_MS = 10 * 60000;
  var $ = function (id) { return document.getElementById(id); };
  function ls(k, v) { try { if (v === undefined) return JSON.parse(localStorage.getItem(k) || 'null'); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, JSON.stringify(v)); } catch (e) { return null; } }
  function say(t) { var m = $('msg'); if (m) m.textContent = t || ''; }
  function nonce() { var a = new Uint8Array(24); (window.crypto || window.msCrypto).getRandomValues(a); return Array.prototype.map.call(a, function (b) { return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'[b & 63]; }).join(''); }
  function buttons() { return Array.prototype.slice.call(document.querySelectorAll('.gbtn')); }
  function showButtons(on) { buttons().forEach(function (b) { b.hidden = !on; var d = b.nextElementSibling; if (d && d.classList.contains('gor')) d.hidden = !on; }); }

  function openExternal(url) {
    if (window.Android && window.Android.openUrl) { try { window.Android.openUrl(url); return; } catch (e) { } }
    if (window.bfNet && window.bfNet.openExternal) { try { window.bfNet.openExternal(url); return; } catch (e) { } }
    window.open(url, '_blank', 'noopener');
  }

  /* ---------- waiting sheet */
  function sheet(on, text) {
    var s = $('gWait');
    if (!on) { if (s) s.remove(); return; }
    if (!s) {
      s = document.createElement('div'); s.id = 'gWait';
      s.innerHTML = '<div class="gw"><div class="gspin" aria-hidden="true"></div><b>Choose your Google account</b><p id="gWaitT"></p>' +
        '<button class="btn" type="button" id="gAgain">Open the Google page again</button><button class="btn alt" type="button" id="gCancel">Cancel</button></div>';
      document.body.appendChild(s);
      $('gAgain').onclick = function () { var p = ls(K); if (p && p.url) openExternal(p.url); };
      $('gCancel').onclick = function () { ls(K, null); stop(); sheet(false); say(''); };
    }
    $('gWaitT').innerHTML = text;
  }

  /* ---------- polling */
  var timer = null, busy = false;
  function stop() { clearInterval(timer); timer = null; }
  function poll() {
    var p = ls(K); if (!p) { stop(); return; }
    if (Date.now() - p.t > WAIT_MS) { ls(K, null); stop(); sheet(false); say('Google sign-in timed out. Tap Continue with Google again.'); return; }
    if (busy || !window.IMCloud) return; busy = true;
    IMCloud.call('googleClaim', { nonce: p.n }).then(function (r) {
      busy = false;
      if (r.pending) return;
      ls(K, null); stop(); finish(r);
    }, function (e) {
      busy = false;
      if (/blocked|code missing/i.test(e.message)) { ls(K, null); stop(); sheet(false); say(e.message); }
    });
  }
  function watch() { stop(); poll(); timer = setInterval(poll, 2500); }
  document.addEventListener('visibilitychange', function () { if (!document.hidden && ls(K)) { sheet(true, 'Checking your Google account…'); poll(); } });

  function finish(r, provider) {
    var u = r.user || {};
    sheet(true, 'Signed in as <b>' + String(u.email || '').replace(/[<>&]/g, '') + '</b>. Opening Iron Making…');
    BFAuth.signIn({ loginId: u.loginId, name: u.name, email: u.email, company: '', mobile: '', token: '', provider: provider || 'google', picture: u.picture || '' });
    try { localStorage.setItem('im.cloud.tok', JSON.stringify({ id: u.loginId, tok: r.token })); } catch (e) { }
    var done = false, go = function () { if (!done) { done = true; location.replace('index.html'); } };
    if (window.IMCloud && IMCloud.seen) { IMCloud.seen('signup').then(go, go); setTimeout(go, 2500); } else go();
  }

  function start() {
    say('');
    var cfg = ls(CFG);
    if (!cfg || !cfg.enabled) { say('Google sign-in is not switched on yet. Please use Create an account / Log in.'); return; }
    var n = nonce(), base = window.IMCloud && IMCloud.url ? IMCloud.url() : window.BF_CLOUD_URL;
    if (!/^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(base || '')) { say('The cloud link is not set up in this copy of the app.'); return; }
    var url = cfg.page + (cfg.page.indexOf('?') < 0 ? '?' : '&') + 'n=' + n + '&s=' + encodeURIComponent(base);
    ls(K, { n: n, t: Date.now(), url: url });
    sheet(true, 'Your browser is opening. Tap <b>Continue with Google</b>, pick an account, then come back here — you will be signed in automatically.');
    openExternal(url);
    watch();
  }

  /* ---------- Continue with email: code to any address */
  var eMail = '', eName = '';
  function eBusy(b, on, label) { b.disabled = on; if (label) b.textContent = label; }
  function sendCode() {
    var f = $('eForm'), b = $('eSend'); eMail = f.elements.email.value.trim(); eName = f.elements.name.value.trim();
    if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(eMail)) { say('Enter a valid email address.'); return; }
    if (!window.IMCloud || !IMCloud.configured()) { say('No internet or the cloud link is not set. Try again online.'); return; }
    say(''); eBusy(b, true, 'Sending…');
    IMCloud.call('emailCode', { email: eMail }).then(function () {
      eBusy(b, false, 'Send code'); $('eStep1').hidden = true; $('eStep2').hidden = false;
      $('eSent').innerHTML = 'Code sent to <b>' + eMail.replace(/[<>&]/g, '') + '</b>. Check the inbox (and spam). It works for 10 minutes.';
      var c = f.elements.code; c.value = ''; c.focus();
    }, function (e) { eBusy(b, false, 'Send code'); say(e.message); });
  }
  function verify() {
    var f = $('eForm'), b = $('eVerify'), code = f.elements.code.value.replace(/\D/g, '');
    if (code.length !== 6) { say('Type the 6-digit code from the email.'); return; }
    say(''); eBusy(b, true, 'Checking…');
    IMCloud.call('emailVerify', { email: eMail, code: code, name: eName }).then(function (r) { finish(r, 'email'); },
      function (e) { eBusy(b, false, 'Sign in'); say(e.message); });
  }

  /* ---------- set up */
  function init() {
    var ef = $('eForm');
    if (ef) {
      ef.addEventListener('submit', function (e) { e.preventDefault(); sendCode(); });
      $('eVerify').addEventListener('click', verify);
      $('eResend').addEventListener('click', function () { $('eStep2').hidden = true; $('eStep1').hidden = false; sendCode(); });
      ef.elements.code.addEventListener('input', function () { if (this.value.replace(/\D/g, '').length === 6) verify(); });
    }
    buttons().forEach(function (b) { b.addEventListener('click', start); });
    var c = ls(CFG); showButtons(!!(c && c.enabled));
    if (window.IMCloud && IMCloud.configured && IMCloud.configured()) {
      IMCloud.call('googleCfg', {}).then(function (r) { ls(CFG, { enabled: !!r.enabled, page: r.page || '', at: Date.now() }); showButtons(!!r.enabled); }, function () { });
    }
    var p = ls(K);
    if (p && Date.now() - p.t < WAIT_MS) { sheet(true, 'Checking your Google account…'); watch(); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  window.IMGoogle = { start: start };
})();
