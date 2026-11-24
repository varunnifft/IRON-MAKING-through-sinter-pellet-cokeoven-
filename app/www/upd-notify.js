/* Phone app update reminder (6.3.6). Loaded on every page by gate.js.
   - Asks the server (action appUpdate) for the version the admin has published on Google Play.
   - Older app: shows an "Update available" box at once, and again every hour (Remind me in 1 hour) until updated.
   - Android: switches on the app's background check (about hourly, even when the app is closed) with this copy's version
     in the link, so only older phones get the notification; asks once for notification permission. */
(function () {
  'use strict';
  var K = 'im.upd', HOUR = 3600000, CHECK_EVERY = 10 * 60000;
  var A = window.Android, BUILT = '6.3.9', mine = BUILT;   // BUILT = version of this app build (keep in step with auth-config.js)
  function get() { try { return JSON.parse(localStorage.getItem(K) || '{}') || {}; } catch (e) { return {}; } }
  function put(o) { try { localStorage.setItem(K, JSON.stringify(o)); } catch (e) { } }
  function newer(a, b) { a = String(a || '').split('.'); b = String(b || '').split('.'); for (var i = 0; i < Math.max(a.length, b.length); i++) { var x = +a[i] || 0, y = +b[i] || 0; if (x !== y) return x > y; } return false; }
  function esc(t) { return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function cloudUrl() { return (window.IMCloud && IMCloud.url && IMCloud.url()) || window.BF_CLOUD_URL || ''; }

  /* ---------- background notification (Android app only) */
  function armBackground() {
    var u = cloudUrl();
    if (!A || !A.quizAlerts || !/^https:\/\//.test(u)) return;
    try { A.quizAlerts(u + (u.indexOf('?') < 0 ? '?' : '&') + 'v=' + encodeURIComponent(mine)); } catch (e) { }
  }
  function askPermissionOnce() {
    if (!A || !A.notifyAllowed || !A.askNotify) return;
    var s = get(); if (s.asked && Date.now() - s.asked < 7 * 24 * HOUR) return;
    var ok = true; try { ok = A.notifyAllowed(); } catch (e) { }
    if (ok) return;
    s.asked = Date.now(); put(s);
    sheet('<b>Get update alerts</b><p>Allow notifications so Iron Making can tell you when a new version is ready on Google Play.</p>',
      [['Allow notifications', function () { try { A.askNotify(); } catch (e) { } }], ['Not now', null]]);
  }

  /* ---------- in-app box */
  var css = '.imu-bg{position:fixed;inset:0;z-index:2147483600;background:rgba(2,8,16,.62);display:flex;align-items:flex-end;justify-content:center;padding:16px;animation:imuF .2s}' +
    '.imu{width:100%;max-width:460px;border-radius:18px;padding:18px 16px 14px;color:#eef3f8;font:15px/1.45 "IBM Plex Sans",system-ui,sans-serif;background:linear-gradient(160deg,#123a33,#0b1f38 60%);border:1px solid rgba(114,199,132,.6);box-shadow:0 24px 60px -20px #000;animation:imuU .25s}' +
    '.imu b{display:block;font:700 22px/1.1 "Barlow Condensed","Arial Narrow",sans-serif;letter-spacing:.06em;text-transform:uppercase}.imu p{margin:8px 0 0;color:#c3d0dd;font-size:14px}' +
    '.imu .v{display:inline-block;margin-top:6px;padding:3px 8px;border-radius:8px;background:rgba(255,255,255,.08);font:500 12px/1.3 "IBM Plex Mono",monospace;color:#9fe6e3}' +
    '.imu .bt{display:flex;flex-direction:column;gap:8px;margin-top:14px}.imu button{min-height:46px;border-radius:12px;border:1px solid #1d3553;background:none;color:#eef3f8;font:600 15px "IBM Plex Sans",system-ui,sans-serif;cursor:pointer}' +
    '.imu button.m{border:0;color:#2a1200;background:linear-gradient(90deg,#ff3d00,#ff7a1a 45%,#ffc23d)}' +
    '.imu-pill{position:fixed;left:50%;transform:translateX(-50%);bottom:max(14px,env(safe-area-inset-bottom));z-index:2147483500;padding:9px 14px;border-radius:999px;border:0;cursor:pointer;color:#2a1200;font:700 13px "IBM Plex Sans",system-ui,sans-serif;background:linear-gradient(90deg,#ff3d00,#ff7a1a 45%,#ffc23d);box-shadow:0 10px 26px -8px #ff7a1a}' +
    '@keyframes imuF{from{opacity:0}}@keyframes imuU{from{transform:translateY(30px);opacity:0}}';
  function addCss() { if (document.getElementById('imuCss')) return; var st = document.createElement('style'); st.id = 'imuCss'; st.textContent = css; (document.head || document.documentElement).appendChild(st); }
  function sheet(html, buttons) {
    addCss(); close();
    var bg = document.createElement('div'); bg.className = 'imu-bg'; bg.id = 'imuBg';
    bg.innerHTML = '<div class="imu" role="dialog" aria-modal="true">' + html + '<div class="bt">' + buttons.map(function (b, i) { return '<button type="button" class="' + (i === 0 ? 'm' : '') + '" data-i="' + i + '">' + esc(b[0]) + '</button>'; }).join('') + '</div></div>';
    bg.addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; var f = buttons[+b.dataset.i][1]; close(); if (f) f(); });
    document.body.appendChild(bg);
  }
  function close() { var o = document.getElementById('imuBg'); if (o) o.remove(); }
  function openPlay(url) {
    url = url || 'https://play.google.com/store/apps/details?id=com.bfburdenmodel.ironmaking';
    if (A && A.openUrl) { try { A.openUrl(url); return; } catch (e) { } }
    window.open(url, '_blank');
  }
  function pill(s) {
    addCss(); var p = document.getElementById('imuPill');
    if (!s || !s.version || !newer(s.version, mine)) { if (p) p.remove(); return; }
    if (!p) { p = document.createElement('button'); p.id = 'imuPill'; p.className = 'imu-pill'; p.type = 'button'; p.addEventListener('click', function () { show(true); }); document.body.appendChild(p); }
    p.textContent = '⬆ Update ' + s.version + ' ready · tap';
  }
  function show(force) {
    var s = get(); if (!s.version || !newer(s.version, mine)) { pill(null); return; }
    pill(s);
    if (!force && s.remindAt && Date.now() < s.remindAt) return;
    if (document.getElementById('imuBg')) return;
    sheet('<b>Update available · ' + esc(s.version) + '</b><span class="v">You have ' + esc(mine) + '</span><p>' + esc(s.note || 'A new version of Iron Making is ready on Google Play with new features and fixes.') + '</p><p>Your login and saved data stay after the update.</p>',
      [['Update now on Google Play', function () { var t = get(); t.remindAt = Date.now() + HOUR; put(t); openPlay(s.url); }],
       ['Remind me in 1 hour', function () { var t = get(); t.remindAt = Date.now() + HOUR; put(t); }]]);
  }

  /* ---------- check the server */
  var busy = false;
  function check(forceNet) {
    var s = get();
    if (!forceNet && s.checked && Date.now() - s.checked < CHECK_EVERY) { show(); return; }
    if (busy || !window.IMCloud || !IMCloud.call || !navigator.onLine && navigator.onLine !== undefined) { show(); return; }
    busy = true;
    IMCloud.call('appUpdate', {}).then(function (r) {
      var u = (r && r.update) || {}, t = get();
      if (u.version !== t.version) t.remindAt = 0;            // a new notice: show at once
      t.version = u.version || ''; t.note = u.note || ''; t.url = u.url || ''; t.checked = Date.now(); put(t);
      show();
    }, function () { show(); }).then(function () { busy = false; });
  }
  function start() {
    mine = window.BF_APP_VERSION || BUILT;
    if (window.IMPlatform && window.IMPlatform.paid) return;   // paid Windows / Mac copies keep their own update card
    armBackground();
    show();
    setTimeout(function () { check(false); askPermissionOnce(); }, 2500);
    setInterval(function () { show(); }, 60000);                // hourly reminder while the app stays open
    setInterval(function () { check(true); }, 30 * 60000);      // re-ask the server every 30 min
    document.addEventListener('visibilitychange', function () { if (!document.hidden) check(false); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
  window.IMUpdate = { check: function () { check(true); }, state: get };
})();
