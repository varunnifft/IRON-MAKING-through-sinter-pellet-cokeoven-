/* Paid copies (Windows, Mac, Office PC): open only for a login that bought this version, on up to 2 computers.
   The Android app is free and skips this. Runs at the top of every page, before the page shows. */
(function () {
  'use strict';
  var href = location.href, ua = navigator.userAgent || '';
  function platform() {
    if (/^file:\/\/\/android_asset\//.test(href) || /appassets\.androidplatform\.net/.test(location.host) || window.Android) return 'android';
    if (/IronMakingDesktop/.test(ua)) return /Mac/.test(navigator.platform || ua) ? 'mac' : 'win';
    if (location.protocol === 'file:') return 'office';
    return 'web';
  }
  var P = platform();
  window.IMPlatform = { id: P, paid: P === 'win' || P === 'mac' || P === 'office',
    name: { win: 'Windows', mac: 'Mac', office: 'Office PC (no install)', android: 'Android', web: 'Browser' }[P] };
  if (!window.IMPlatform.paid) return;

  function ls(k) { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) { return null; } }
  var me = document.currentScript, base = me && me.src ? me.src.replace(/licence-gate\.js(\?.*)?$/, '') : '';
  window.IMPlatform.device = function () {
    var d = null; try { d = localStorage.getItem('im.device'); } catch (e) { }
    if (!d) { d = 'D-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 10);
      try { localStorage.setItem('im.device', d); } catch (e) { } }
    return d;
  };
  window.IMPlatform.deviceName = function () {
    var m = ua.match(/Windows NT [\d.]+|Mac OS X [\d_]+|Edg\/\d+|Chrome\/\d+/g) || [];
    return (P === 'office' ? 'Office PC · ' : P === 'mac' ? 'Mac · ' : 'Windows · ') + m.join(' ').replace(/_/g, '.');
  };
  var page = (location.pathname.split('/').pop() || '').toLowerCase();
  var inWww = /\/www\/[^\/]*$/.test(location.pathname);
  if (inWww && /^(auth|licence|store)\.html$/.test(page)) return;   // these pages handle login and buying
  var u = ls('bf-user');
  if (!u || !u.loginId || u.guest) { location.replace(base + 'auth.html'); return; }
  if (u.cloudAdmin) return;                                         // the admin can use every copy
  var L = ls('im.lic');
  var good = L && L.id === u.loginId && L.platform === P && L.device === window.IMPlatform.device() && L.exp > Date.now();
  if (!good) { location.replace(base + 'licence.html'); return; }
  // still valid: re-check once a day in the background, so a blocked licence stops at the next start
  if (!L.checked || Date.now() - L.checked > 86400000) {
    var tries = 0;
    (function check() {
      if (!window.IMCloud) { if (++tries < 100) setTimeout(check, 100); return; }
      IMCloud.userCall('licence', { platform: P, device: L.device, deviceName: window.IMPlatform.deviceName() })
        .then(function (r) {
          if (r.licensed) { L.exp = r.exp; L.checked = Date.now(); L.update = r.update || null; } else { L.exp = 0; }
          try { localStorage.setItem('im.lic', JSON.stringify(L)); } catch (e) { }
        }, function () { });
    })();
  }
})();
