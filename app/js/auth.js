/* Registration (name, mobile, e-mail, company) -> e-mail OTP -> create login ID & password -> login.
   Also: forgot password, profile / logout / delete account, and the suggestion page that e-mails the admin. */
(function () {
  'use strict';
  var CFG = window.SP_CONFIG || {};
  var SESSION = 'sp.session', URLKEY = 'sp.backend', SENT = 'sp.suggestions';
  var flow = {}; // state carried between auth screens

  function $(s, el) { return (el || document).querySelector(s); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function ls(k, v) {
    try { if (v === undefined) return JSON.parse(localStorage.getItem(k) || 'null'); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, JSON.stringify(v)); } catch (e) { return null; }
  }
  function platform() {
    if (window.SP_PLATFORM) return window.SP_PLATFORM;
    if (window.AndroidBridge && AndroidBridge.platform) { try { return AndroidBridge.platform(); } catch (e) { } }
    return 'web';
  }
  function backend() { return ls(URLKEY) || CFG.backendUrl || ''; }
  function toast(m) { var t = $('#toast'); t.textContent = m; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove('show'); }, 3000); }

  // ---------- transport ----------
  var pend = {}, seq = 0;
  window.__onPost = function (id, ok, data) {
    var p = pend[id]; if (!p) return; delete pend[id];
    if (!ok) { p.reject(new Error('No connection to the server (' + data + ')')); return; }
    try { var bin = atob(data), u8 = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i); p.resolve(new TextDecoder('utf-8').decode(u8)); } catch (e) { p.reject(e); }
  };
  function call(action, data) {
    var url = backend();
    if (!url) return Promise.reject(new Error('The account server is not configured yet. Ask the admin for the app update.'));
    var body = JSON.stringify(Object.assign({ action: action, platform: platform(), appVersion: CFG.version }, data || {}));
    var p;
    if (window.AndroidBridge && AndroidBridge.postJson) {
      p = new Promise(function (res, rej) {
        var id = 'p' + (++seq); pend[id] = { resolve: res, reject: rej };
        AndroidBridge.postJson(id, url, body);
        setTimeout(function () { if (pend[id]) { delete pend[id]; rej(new Error('The server did not answer. Check your internet connection.')); } }, 60000);
      });
    } else {
      p = fetch(url, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: body }).then(function (r) { return r.text(); });
    }
    return p.then(function (txt) {
      var j; try { j = JSON.parse(txt); } catch (e) { throw new Error('Unexpected server reply. Check that the backend is deployed for "Anyone".'); }
      if (!j.ok) throw new Error(j.error || 'Request failed');
      return j;
    });
  }

  // ---------- auth screens ----------
  var onReady = null;
  function shell(show) {
    document.body.classList.toggle('auth', !show);
  }
  function screen(html) {
    shell(false);
    var m = $('#main'); m.innerHTML = '<div class="auth-wrap">' + html + '</div>'; window.scrollTo(0, 0);
    return m;
  }
  function logoHtml(sub) {
    return '<div class="auth-logo" id="authLogo"><div class="auth-mark">' + layersSvg() + '</div><div class="auth-title">Sinter Predict</div><div class="auth-sub">' + (sub || 'Sinter quality prediction for plant teams') + '</div>' + (window.SP_SIGN ? window.SP_SIGN('auth') : '') + '</div>' +
      (backend() ? '' : '<div class="note warn small">' + (guestAllowed() ? 'User accounts are not switched on yet, so you can use the app without logging in for now.' : 'Log in to use Sinter Predict. New users can register once the admin connects the account server.') + '</div>');
  }
  function layersSvg() {
    return '<svg viewBox="0 0 64 64" width="64" height="64"><rect width="64" height="64" rx="14" fill="#0F2A44"/><path d="M32 7l7 10H25z" fill="#FFD666"/>' +
      '<rect x="11" y="21" width="42" height="7" rx="3" fill="#FFD666"/><rect x="11" y="31" width="42" height="7" rx="3" fill="#FF8C28"/><rect x="11" y="41" width="42" height="7" rx="3" fill="#D64020"/><rect x="11" y="51" width="42" height="6" rx="3" fill="#5A5A64"/></svg>';
  }
  function field(id, label, type, val, extra) {
    return '<label class="af"><span>' + label + '</span><input id="' + id + '" type="' + (type || 'text') + '" value="' + esc(val || '') + '"' + (extra || '') + '></label>';
  }
  function busy(btn, on, txt) { btn.disabled = on; if (on) { btn._t = btn.textContent; btn.textContent = txt || 'Please wait…'; } else if (btn._t) btn.textContent = btn._t; }
  function err(msg) { var e = $('#authErr'); if (e) { e.textContent = msg; e.style.display = msg ? 'block' : 'none'; } }
  function bindLogoAdmin() {
    return; // the server URL is now set in the admin panel (log in with the admin ID)
    var n = 0, t = 0, el = $('#authLogo'); if (!el) return;
    el.onclick = function () {
      var now = Date.now(); n = now - t < 800 ? n + 1 : 1; t = now;
      if (n >= 5) {
        n = 0;
        var u = prompt('Admin: account server URL (Apps Script web app, ends in /exec). Leave empty to use the built-in one.', backend());
        if (u !== null) { u = u.trim(); ls(URLKEY, u ? u : null); toast(u ? 'Server URL saved' : 'Using built-in server URL'); showLogin(); }
      }
    };
  }

  function showLogin(prefill, note) {
    screen(logoHtml() + (guestAllowed() ? '<div class="card center guest-card"><button class="btn primary block" id="toGuest" style="padding:14px;font-size:16px">Use the app without login</button><p class="muted small" style="margin:8px 0 0">No account needed. Your plant data stays on this device. Log in or register any time to send suggestions and keep your name on published results.</p></div>' : '') +
      '<div class="card"><h2>Log in</h2>' + (note ? '<div class="note">' + esc(note) + '</div>' : '') +
      field('liId', 'Login ID or e-mail', 'text', prefill || '', ' autocomplete="username" autocapitalize="none"') +
      field('liPw', 'Password', 'password', '', ' autocomplete="current-password"') +
      '<div class="auth-err" id="authErr"></div><button class="btn primary block" id="liGo">Log in</button>' +
      '<div class="auth-links"><a href="#" id="toForgot">Forgot password?</a></div></div>' +
      '<div class="card center"><p class="sub" style="margin:0 0 8px">New user?</p><button class="btn block" id="toReg">Register</button></div>' +
      footer());
    bindLogoAdmin();
    if ($('#toGuest')) $('#toGuest').onclick = function () { ls(SESSION, { offline: true, profile: { name: 'Guest' }, at: Date.now() }); enter(); };
    $('#toReg').onclick = function () { showRegister(); };
    $('#toForgot').onclick = function (e) { e.preventDefault(); showForgot($('#liId').value); };
    var go = function () {
      var id = $('#liId').value.trim(), pw = $('#liPw').value;
      if (!id || !pw) { err('Enter your login ID and password.'); return; }
      var b = $('#liGo');
      if (isAdminId(id)) {
        busy(b, true, 'Checking…');
        setTimeout(function () {
          if (!adminCheck(pw)) { busy(b, false); err('Wrong admin password.'); return; }
          ls(SESSION, { admin: true, profile: { name: 'Admin', loginId: adminRec().id, email: CFG.adminEmail }, at: Date.now() });
          toast('Logged in as admin'); enter();
        }, 30);
        return;
      }
      if (!backend()) { err(guestAllowed() ? 'User accounts are not switched on yet. Use "Continue without account" below, or log in with the admin ID.' : 'User accounts are not switched on yet. Please contact the admin (' + (CFG.adminEmail || '') + ').'); return; }
      busy(b, true, 'Logging in…'); err('');
      call('login', { loginId: id, password: pw }).then(function (r) {
        ls(SESSION, { token: r.token, profile: r.profile, at: Date.now() });
        toast('Welcome, ' + r.profile.name.split(' ')[0]);
        enter();
      }).catch(function (e) { busy(b, false); err(e.message); });
    };
    $('#liGo').onclick = go;
    $('#liPw').onkeydown = function (e) { if (e.key === 'Enter') go(); };
  }
  function footer() {
    var u = backend();
    return '<p class="muted small center">' + (u ? '<a href="#" id="privLink">Privacy policy</a> · ' : '') + 'v' + esc(CFG.version) + '</p>';
  }
  document.addEventListener('click', function (e) {
    if (e.target && e.target.id === 'privLink') { e.preventDefault(); openExt(backend() + '?page=privacy'); }
  });
  function openExt(u) { if (window.AndroidBridge && AndroidBridge.openLink) AndroidBridge.openLink(u); else window.open(u, '_blank'); }

  function showRegister() {
    var d = flow.reg || {};
    screen(logoHtml('Create your account') + '<div class="card"><h2>Register</h2><p class="sub">We e-mail you a one-time code to verify your address.</p>' +
      field('rgName', 'Full name', 'text', d.name, ' autocomplete="name"') +
      field('rgMob', 'Mobile number', 'tel', d.mobile || '+91 ', ' autocomplete="tel"') +
      field('rgMail', 'E-mail', 'email', d.email, ' autocomplete="email" autocapitalize="none"') +
      field('rgCo', 'Company', 'text', d.company, ' autocomplete="organization"') +
      '<label class="chk"><input type="checkbox" id="rgOk"><span class="k">I agree to the <a href="#" id="privLink">privacy policy</a> (name, mobile, e-mail and company are stored by the app admin).</span></label>' +
      '<div class="auth-err" id="authErr"></div><button class="btn primary block" id="rgGo">Send OTP to my e-mail</button>' +
      '<div class="auth-links"><a href="#" id="toLogin">Already registered? Log in</a></div></div>');
    $('#toLogin').onclick = function (e) { e.preventDefault(); showLogin(); };
    $('#rgGo').onclick = function () {
      var r = { name: $('#rgName').value.trim(), mobile: $('#rgMob').value.trim(), email: $('#rgMail').value.trim(), company: $('#rgCo').value.trim() };
      flow.reg = r;
      if (r.name.length < 2) return err('Enter your full name.');
      if (r.mobile.replace(/\D/g, '').length < 10) return err('Enter a valid mobile number.');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(r.email)) return err('Enter a valid e-mail address.');
      if (r.company.length < 2) return err('Enter your company name.');
      if (!$('#rgOk').checked) return err('Please accept the privacy policy.');
      var b = $('#rgGo'); busy(b, true, 'Sending OTP…'); err('');
      call('signup', r).then(function () { flow.email = r.email.toLowerCase(); flow.purpose = 'signup'; showOtp(); })
        .catch(function (e) { busy(b, false); err(e.message); });
    };
  }

  function showOtp() {
    screen(logoHtml('Verify your e-mail') + '<div class="card"><h2>Enter the OTP</h2><p class="sub">We sent a 6-digit code to <b>' + esc(flow.email) + '</b>. It is valid for 10 minutes. Check the spam folder if you do not see it.</p>' +
      '<input id="otp" class="otp-in" inputmode="numeric" maxlength="6" autocomplete="one-time-code" placeholder="••••••">' +
      '<div class="auth-err" id="authErr"></div><button class="btn primary block" id="otpGo">Verify</button>' +
      '<div class="auth-links"><a href="#" id="otpResend">Resend code</a> · <a href="#" id="otpBack">' + (flow.purpose === 'signup' ? 'Change e-mail' : 'Back to login') + '</a></div></div>');
    var cool = 0, timer = null, rs = $('#otpResend');
    function cooldown() {
      cool = 60; clearInterval(timer);
      timer = setInterval(function () { cool--; if (!document.body.contains(rs)) return clearInterval(timer); rs.textContent = cool > 0 ? 'Resend in ' + cool + ' s' : 'Resend code'; if (cool <= 0) clearInterval(timer); }, 1000);
    }
    cooldown();
    rs.onclick = function (e) {
      e.preventDefault(); if (cool > 0) return;
      call('resendOtp', { email: flow.email, purpose: flow.purpose }).then(function () { toast('New code sent'); cooldown(); }).catch(function (e) { err(e.message); });
    };
    $('#otpBack').onclick = function (e) { e.preventDefault(); if (flow.purpose === 'signup') showRegister(); else showLogin(); };
    var go = function () {
      var code = $('#otp').value.replace(/\D/g, '');
      if (code.length !== 6) return err('Enter the 6-digit code.');
      var b = $('#otpGo'); if (b.disabled) return; busy(b, true, 'Verifying…'); err('');
      call('verifyOtp', { email: flow.email, otp: code, purpose: flow.purpose }).then(function (r) {
        flow.setupToken = r.setupToken; flow.suggestedId = r.suggestedLoginId;
        if (flow.purpose === 'signup') showCreateLogin(); else showNewPassword();
      }).catch(function (e) { busy(b, false); err(e.message); });
    };
    $('#otpGo').onclick = go;
    $('#otp').oninput = function () { if (this.value.replace(/\D/g, '').length === 6) go(); };
    $('#otp').focus();
  }

  function pwRules() { return '<p class="muted small">At least 8 characters, with letters and numbers.</p>'; }
  function pwCheck(a, b) {
    if (a.length < 8 || !/[A-Za-z]/.test(a) || !/\d/.test(a)) return 'Password needs at least 8 characters with letters and numbers.';
    if (a !== b) return 'The two passwords do not match.';
    return '';
  }
  function showCreateLogin() {
    screen(logoHtml('E-mail verified ✓') + '<div class="card"><h2>Create your login</h2><p class="sub">Choose the login ID and password you will use from now on.</p>' +
      field('clId', 'Login ID', 'text', flow.suggestedId || '', ' autocapitalize="none" autocomplete="username"') + '<p class="muted small">4–30 letters, numbers, dot, dash or underscore.</p>' +
      field('clPw', 'Password', 'password', '', ' autocomplete="new-password"') + field('clPw2', 'Confirm password', 'password', '', ' autocomplete="new-password"') + pwRules() +
      '<div class="auth-err" id="authErr"></div><button class="btn primary block" id="clGo">Create login</button></div>');
    $('#clGo').onclick = function () {
      var id = $('#clId').value.trim().toLowerCase(), a = $('#clPw').value, c = $('#clPw2').value;
      if (!/^[a-z0-9._-]{4,30}$/.test(id)) return err('Login ID: 4–30 letters, numbers, dot, dash or underscore.');
      var pe = pwCheck(a, c); if (pe) return err(pe);
      var b = $('#clGo'); busy(b, true, 'Creating…'); err('');
      call('createLogin', { email: flow.email, setupToken: flow.setupToken, loginId: id, password: a }).then(function (r) {
        flow = {}; showLogin(r.loginId, 'Account created. Log in with your new login ID and password.');
      }).catch(function (e) { busy(b, false); err(e.message); });
    };
  }

  function showForgot(prefill) {
    screen(logoHtml('Reset your password') + '<div class="card"><h2>Forgot password</h2><p class="sub">Enter your login ID or registered e-mail. We e-mail you a code.</p>' +
      field('fgId', 'Login ID or e-mail', 'text', prefill || '', ' autocapitalize="none"') +
      '<div class="auth-err" id="authErr"></div><button class="btn primary block" id="fgGo">Send OTP</button>' +
      '<div class="auth-links"><a href="#" id="toLogin">Back to login</a></div></div>');
    $('#toLogin').onclick = function (e) { e.preventDefault(); showLogin(); };
    $('#fgGo').onclick = function () {
      var id = $('#fgId').value.trim(); if (!id) return err('Enter your login ID or e-mail.');
      var b = $('#fgGo'); busy(b, true, 'Sending…'); err('');
      call('forgot', { loginId: id }).then(function (r) { flow.email = r.email; flow.purpose = 'reset'; showOtp(); }).catch(function (e) { busy(b, false); err(e.message); });
    };
  }
  function showNewPassword() {
    screen(logoHtml('E-mail verified ✓') + '<div class="card"><h2>Set a new password</h2>' +
      field('npPw', 'New password', 'password', '', ' autocomplete="new-password"') + field('npPw2', 'Confirm password', 'password', '', ' autocomplete="new-password"') + pwRules() +
      '<div class="auth-err" id="authErr"></div><button class="btn primary block" id="npGo">Save password</button></div>');
    $('#npGo').onclick = function () {
      var a = $('#npPw').value, c = $('#npPw2').value, pe = pwCheck(a, c); if (pe) return err(pe);
      var b = $('#npGo'); busy(b, true, 'Saving…'); err('');
      call('resetPassword', { email: flow.email, setupToken: flow.setupToken, password: a }).then(function (r) {
        flow = {}; showLogin(r.loginId, 'Password changed. Log in with the new password.');
      }).catch(function (e) { busy(b, false); err(e.message); });
    };
  }

  function enter() { shell(true); if (onReady) onReady(); }
  function session() { return ls(SESSION); }
  function logout(msg) { ls(SESSION, null); showLogin('', msg); }

  // ---------- in-app pages ----------
  function pageProfile(m) {
    var s = session() || {}, p = s.profile || {};
    if (s.admin) {
      m.innerHTML = '<div class="card"><h2>Admin</h2><table class="t"><tr><td class="muted">Admin ID</td><td><b>' + esc(p.loginId) + '</b></td></tr><tr><td class="muted">Account server</td><td><b>' + (backend() ? 'On' : 'Not set') + '</b></td></tr><tr><td class="muted">Platform</td><td><b>' + esc(platform()) + '</b></td></tr></table>' +
        '<div class="row wrap"><button class="btn primary" data-go="admin">Open admin panel</button><button class="btn" id="pfOut">Log out</button></div></div>';
      $('#pfOut').onclick = function () { logout('Admin logged out.'); };
      return;
    }
    if (s.offline) {
      m.innerHTML = '<div class="card"><h2>My profile</h2><p class="sub">You are using the app without an account. Everything works; your plant data stays on this device. Log in or register to send suggestions from the app and to have your name on published results.</p>' +
        '<div class="row wrap"><button class="btn primary" id="pfOut">Log in or register</button></div></div>';
      $('#pfOut').onclick = function () { logout(''); };
      return;
    }
    m.innerHTML = '<div class="card"><h2>My profile</h2><table class="t">' +
      [['Name', p.name], ['Login ID', p.loginId], ['E-mail', p.email], ['Mobile', p.mobile], ['Company', p.company], ['Platform', platform()]].map(function (r) { return '<tr><td class="muted">' + r[0] + '</td><td><b>' + esc(r[1]) + '</b></td></tr>'; }).join('') +
      '</table><p class="muted small">To change these details, send a suggestion to the admin.</p>' +
      '<div class="row wrap"><button class="btn" id="pfOut">Log out</button><button class="btn ghost" id="pfPriv">Privacy policy</button></div></div>' +
      '<div class="card"><h2>Delete account</h2><p class="sub">Removes your name, mobile, e-mail, company and login from the admin\'s user list. This cannot be undone.</p>' +
      '<button class="btn ghost" id="pfDel" style="color:var(--bad);border-color:#F1B7B2">Delete my account</button></div>';
    $('#pfOut').onclick = function () { logout('You are logged out.'); };
    $('#pfPriv').onclick = function () { if (backend()) openExt(backend() + '?page=privacy'); };
    $('#pfDel').onclick = function () {
      var pw = prompt('Enter your password to delete your account permanently:');
      if (!pw) return;
      call('deleteAccount', { token: s.token, password: pw }).then(function (r) { ls(SENT, null); logout(r.message); }).catch(function (e) { alert(e.message); });
    };
  }
  var CATS = ['New feature', 'Modification of existing page', 'Problem / bug', 'Model or calculation', 'Other'];
  function pageSuggest(m, fromPage) {
    var sent = ls(SENT) || [];
    m.innerHTML = '<div class="card"><h2>Suggest a change or new feature</h2><p class="sub">Your suggestion goes straight to the app admin by e-mail, with your name and company so they can reply.</p>' +
      '<label class="af"><span>Type</span><select id="sgCat" class="sel">' + CATS.map(function (c) { return '<option>' + c + '</option>'; }).join('') + '</select></label>' +
      '<label class="af"><span>Your suggestion</span><textarea id="sgText" rows="7" maxlength="3000" placeholder="What should be added or changed, and why?"></textarea></label>' +
      '<p class="muted small">About page: <b>' + esc(fromPage || 'general') + '</b></p>' +
      '<div class="auth-err" id="authErr"></div><button class="btn primary block" id="sgGo">Send to admin</button></div>' +
      (sent.length ? '<div class="card"><h2>Sent from this device</h2>' + sent.slice(0, 20).map(function (x) { return '<div class="ref"><b>' + esc(x.cat) + '</b> <span class="muted small">' + esc(x.at) + '</span><div class="small">' + esc(x.text) + '</div></div>'; }).join('') + '</div>' : '');
    $('#sgGo').onclick = function () {
      var t = $('#sgText').value.trim(); if (t.length < 5) return err('Please describe your suggestion.');
      var s = session(); if (!s) return logout('Please log in again.');
      if (s.offline || s.admin) {
        openExt('mailto:' + CFG.adminEmail + '?subject=' + encodeURIComponent('Sinter Predict suggestion: ' + $('#sgCat').value) +
          '&body=' + encodeURIComponent(t + '\n\nPage: ' + (fromPage || 'general') + '\nPlatform: ' + platform() + '\nApp version: ' + CFG.version));
        sent.unshift({ cat: $('#sgCat').value, text: t, at: new Date().toLocaleString('en-IN') }); ls(SENT, sent.slice(0, 50));
        toast('Opening your e-mail app to send it'); return;
      }
      var b = $('#sgGo'); busy(b, true, 'Sending…'); err('');
      call('suggest', { token: s.token, category: $('#sgCat').value, text: t, page: fromPage || '' }).then(function (r) {
        sent.unshift({ cat: $('#sgCat').value, text: t, at: new Date().toLocaleString('en-IN') }); ls(SENT, sent.slice(0, 50));
        toast(r.message); pageSuggest(m, fromPage);
      }).catch(function (e) {
        busy(b, false); err(e.message);
        if (/session expired|account not found/i.test(e.message)) setTimeout(function () { logout(e.message); }, 1500);
      });
    };
  }

  // ---------- admin login (works on the device, with or without the account server) ----------
  // Only a salted, iterated SHA-256 hash of the admin password is kept, never the password itself.
  var ADMIN = 'sp.admin', GUEST = 'sp.allowGuest';
  var ADMIN_DEFAULT = {"id":"nitikyash","salt":"f768fd8cd683a1f5b0720f0b91bb0f1b","iter":3000,"hash":"53942f58979a640703fb1ee6b188be10d598e1c10a3e89f1d56a566156c44dee"};
  function sha256(str) {
    var K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
      0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
      0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
      0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
    var s = unescape(encodeURIComponent(str)), l = s.length, b = [], i, j;
    for (i = 0; i < l; i++) b[i >> 2] |= s.charCodeAt(i) << (24 - (i % 4) * 8);
    b[l >> 2] |= 0x80 << (24 - (l % 4) * 8);
    var n = ((l + 8) >> 6) * 16 + 16; for (i = b.length; i < n; i++) b[i] = b[i] | 0;
    b[n - 1] = l * 8;
    var H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19], W = [];
    function r(x, c) { return (x >>> c) | (x << (32 - c)); }
    for (i = 0; i < n; i += 16) {
      var a = H[0], bb = H[1], c = H[2], d = H[3], e = H[4], f = H[5], g = H[6], h = H[7];
      for (j = 0; j < 64; j++) {
        if (j < 16) W[j] = b[i + j];
        else W[j] = (W[j - 16] + (r(W[j - 15], 7) ^ r(W[j - 15], 18) ^ (W[j - 15] >>> 3)) + W[j - 7] + (r(W[j - 2], 17) ^ r(W[j - 2], 19) ^ (W[j - 2] >>> 10))) | 0;
        var t1 = (h + (r(e, 6) ^ r(e, 11) ^ r(e, 25)) + ((e & f) ^ (~e & g)) + K[j] + W[j]) | 0;
        var t2 = ((r(a, 2) ^ r(a, 13) ^ r(a, 22)) + ((a & bb) ^ (a & c) ^ (bb & c))) | 0;
        h = g; g = f; f = e; e = (d + t1) | 0; d = c; c = bb; bb = a; a = (t1 + t2) | 0;
      }
      H[0] = (H[0] + a) | 0; H[1] = (H[1] + bb) | 0; H[2] = (H[2] + c) | 0; H[3] = (H[3] + d) | 0; H[4] = (H[4] + e) | 0; H[5] = (H[5] + f) | 0; H[6] = (H[6] + g) | 0; H[7] = (H[7] + h) | 0;
    }
    return H.map(function (x) { return ('0000000' + (x >>> 0).toString(16)).slice(-8); }).join('');
  }
  function pwHash(pw, salt, iter) { var h = salt; for (var i = 0; i < iter; i++) h = sha256(h + ':' + pw); return h; }
  function adminRec() { return ls(ADMIN) || ADMIN_DEFAULT; }
  function isAdminId(id) { return String(id || '').trim().toLowerCase() === adminRec().id.toLowerCase(); }
  function adminCheck(pw) { var a = adminRec(); return pwHash(pw, a.salt, a.iter) === a.hash; }
  function randHex(n) { var a = new Uint8Array(n); (window.crypto || {}).getRandomValues ? crypto.getRandomValues(a) : a.forEach(function (_, i) { a[i] = Math.random() * 256; }); return Array.prototype.map.call(a, function (x) { return ('0' + x.toString(16)).slice(-2); }).join(''); }
  function adminChange(curPw, newId, newPw) {
    if (!adminCheck(curPw)) return 'Current password is wrong.';
    newId = String(newId || '').trim(); if (!/^[A-Za-z0-9._-]{4,30}$/.test(newId)) return 'Admin ID: 4-30 letters, digits, dot, dash or underscore.';
    if (newPw) { var pe = pwCheck(newPw, newPw); if (pe) return pe; }
    var a = adminRec(), rec = { id: newId, salt: a.salt, iter: a.iter, hash: a.hash, changed: new Date().toISOString() };
    if (newPw) { rec.salt = randHex(16); rec.iter = 3000; rec.hash = pwHash(newPw, rec.salt, rec.iter); }
    ls(ADMIN, rec);
    var s = session(); if (s && s.admin) { s.profile.loginId = newId; ls(SESSION, s); }
    return null;
  }
  function guestAllowed() { var g = ls(GUEST); return g == null ? CFG.allowGuest !== false : !!g; } // login is optional unless the admin switches guest use off
  var DRIVEKEY = 'sp.driveUrl';
  function driveUrl() { return ls(DRIVEKEY) || CFG.driveUrl || backend() || ''; }
  function setDriveUrl(u) { u = String(u || '').trim(); ls(DRIVEKEY, u || null); return driveUrl(); }
  /* POST JSON to any Apps Script web app (used for publishing results to the admin's Google Drive) */
  var dpend = {}, dseq = 0, prevOnPost = window.__onPost;
  window.__onPost = function (id, ok, data) {
    var p = dpend[id]; if (!p) return prevOnPost && prevOnPost(id, ok, data); delete dpend[id];
    if (!ok) { p.reject(new Error('No connection to the server (' + data + ')')); return; }
    try { var bin = atob(data), u8 = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i); p.resolve(new TextDecoder('utf-8').decode(u8)); } catch (e) { p.reject(e); }
  };
  function postTo(url, action, data) {
    if (!url) return Promise.reject(new Error('no server'));
    var body = JSON.stringify(Object.assign({ action: action, platform: platform(), appVersion: CFG.version }, data || {})), p;
    if (window.AndroidBridge && AndroidBridge.postJson) {
      p = new Promise(function (res, rej) {
        var id = 'd' + (++dseq); dpend[id] = { resolve: res, reject: rej };
        AndroidBridge.postJson(id, url, body);
        setTimeout(function () { if (dpend[id]) { delete dpend[id]; rej(new Error('The server did not answer. Check your internet connection.')); } }, 120000);
      });
    } else p = fetch(url, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: body }).then(function (r) { return r.text(); });
    return p.then(function (txt) { var j; try { j = JSON.parse(txt); } catch (e) { throw new Error('Unexpected server reply. Check that the Drive web app is deployed for "Anyone".'); } if (!j.ok) throw new Error(j.error || 'Request failed'); return j; });
  }
  function settings() { return { admin: ls(ADMIN), backend: ls(URLKEY), allowGuest: ls(GUEST), driveUrl: ls(DRIVEKEY) }; }
  function applySettings(o) {
    if (!o) return;
    if (o.admin && o.admin.id && o.admin.hash && o.admin.salt) ls(ADMIN, o.admin);
    if ('backend' in o) ls(URLKEY, o.backend || null);
    if ('allowGuest' in o) ls(GUEST, o.allowGuest == null ? null : !!o.allowGuest);
    if ('driveUrl' in o) ls(DRIVEKEY, o.driveUrl || null);
  }
  function setBackend(u) { u = String(u || '').trim(); ls(URLKEY, u || null); return backend(); }
  function setGuest(on) { ls(GUEST, !!on); }
  function isAdmin() { var s = session(); return !!(s && s.admin); }

  // ---------- start ----------
  function start(ready) {
    onReady = ready;
    var s = session();
    // Iron Making app: the user already logged in once on the app's own login page, so Sinter opens directly.
    if (!s) {
      var bf = null; try { bf = JSON.parse(localStorage.getItem('bf-user') || 'null'); } catch (e) { }
      s = { offline: true, profile: { name: (bf && (bf.name || bf.loginId)) || 'Guest', email: (bf && bf.email) || '', company: (bf && bf.company) || '' }, at: Date.now() };
      ls(SESSION, s);
      return enter();
    }
    if (s && s.admin) return enter();
    if (s && s.offline) return enter();
    if (s && s.offline) {
      if (guestAllowed()) return enter();
      ls(SESSION, null); return showLogin('', 'Please log in or register to continue.');
    }
    if (s && s.token) {
      enter();
      // re-check the session in the background; an expired or deleted account goes back to login
      call('me', { token: s.token }).then(function (r) { s.profile = r.profile; ls(SESSION, s); })
        .catch(function (e) { if (/session expired|account not found/i.test(e.message)) logout(e.message); });
    } else showLogin();
  }

  window.SinterAuth = { start: start, pageProfile: pageProfile, pageSuggest: pageSuggest, session: session, logout: logout, call: call, platform: platform,
    isAdmin: isAdmin, adminId: function () { return adminRec().id; }, adminChange: adminChange, backend: backend, setBackend: setBackend,
    guestAllowed: guestAllowed, setGuest: setGuest, driveUrl: driveUrl, setDriveUrl: setDriveUrl, postTo: postTo, settings: settings, applySettings: applySettings, toast: toast };
})();
