/* Iron Making: one place for everything the app hands out (Share, Print, Export, Download, Log sheets, Master Excel),
   and a Back button on every inner page.
   - Every report or file the app makes is also saved to the online storage (Google Drive › Iron Making Cloud › Reports ›
     <login ID>) and the user gets an "Open" link to it, on the phone, the computer and the office PC alike.
   - On the phone, files the phone cannot save by itself are opened from Google Drive instead.
   - Share falls back to: copy the text + save it to Drive, where the device has no share screen.
   - Print shows what to choose; a Back button takes the user to the page they came from. */
(function () {
  'use strict';
  if (window.IMOut) return;
  var me = document.currentScript, base = me && me.src ? me.src.replace(/im-out\.js(\?.*)?$/, '') : '';
  var wbase = base.replace(/xco\/$/, 'www/');   // the cloud scripts live in www/
  var inAndroidBF = !!(window.Android && !window.AndroidBridge);

  // ---------------------------------------------------------------- small UI: toast with an optional button
  var box = null, hideT = 0;
  function css() {
    if (document.getElementById('im-out-css')) return;
    var s = document.createElement('style'); s.id = 'im-out-css';
    s.textContent = '#im-toast{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(18px + env(safe-area-inset-bottom,0px));z-index:2147483000;max-width:min(560px,calc(100vw - 24px));' +
      'display:flex;gap:10px;align-items:center;padding:11px 12px 11px 14px;border-radius:14px;background:#0b1f38;color:#eef3f8;border:1px solid #2b4a6e;box-shadow:0 10px 30px rgba(0,0,0,.45);font:500 14px/1.35 Barlow,"Segoe UI",system-ui,sans-serif}' +
      '#im-toast[hidden]{display:none}#im-toast span{flex:1;min-width:0;overflow-wrap:anywhere}#im-toast button{flex:none;min-height:36px;padding:6px 12px;border-radius:10px;border:0;font:700 13px Barlow,system-ui,sans-serif;cursor:pointer;background:linear-gradient(90deg,#ff3d00,#ff7a1a 45%,#ffc23d);color:#2a1200}' +
      '#im-toast button.x{background:none;color:#93a6ba;padding:6px 8px}' +
      '#im-back{position:fixed;right:calc(12px + env(safe-area-inset-right,0px));bottom:calc(14px + env(safe-area-inset-bottom,0px));z-index:2147482000;display:flex;align-items:center;gap:4px;min-height:42px;padding:6px 14px 6px 10px;border-radius:999px;' +
      'border:1px solid rgba(255,181,71,.55);background:rgba(7,20,38,.92);color:#ffd9a8;font:700 15px Barlow,"Segoe UI",system-ui,sans-serif;cursor:pointer;box-shadow:0 6px 18px rgba(0,0,0,.4)}' +
      '#im-back:focus-visible{outline:3px solid #3cc6c4;outline-offset:2px}#im-back svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}' +
      '#im-sheet{position:fixed;inset:0;z-index:2147483100;background:rgba(2,8,16,.7);display:flex;align-items:flex-end;justify-content:center}#im-sheet>div{width:min(640px,100%);max-height:85vh;overflow:auto;background:#0b1f38;color:#eef3f8;border-radius:18px 18px 0 0;padding:16px 16px calc(16px + env(safe-area-inset-bottom,0px));display:grid;gap:10px;font:15px/1.45 Barlow,system-ui,sans-serif}' +
      '#im-sheet textarea{width:100%;min-height:180px;border-radius:10px;border:1px solid #2b4a6e;background:#040c17;color:#eef3f8;font:13px/1.45 ui-monospace,Menlo,monospace;padding:10px}#im-sheet .r{display:flex;flex-wrap:wrap;gap:8px}#im-sheet .r button{flex:1 1 140px;min-height:44px;border-radius:12px;font:700 15px Barlow,system-ui,sans-serif;cursor:pointer;border:1px solid rgba(255,181,71,.5);background:none;color:#fff}#im-sheet .r button.m{background:linear-gradient(90deg,#ff3d00,#ff7a1a 45%,#ffc23d);color:#2a1200;border:0}' +
      '@media print{#im-toast,#im-back,#im-sheet{display:none!important}}';
    (document.head || document.documentElement).appendChild(s);
  }
  function toast(msg, btn, fn, ms) {
    css();
    if (!box) { box = document.createElement('div'); box.id = 'im-toast'; box.setAttribute('role', 'status'); box.setAttribute('aria-live', 'polite'); document.body.appendChild(box); }
    box.innerHTML = ''; var t = document.createElement('span'); t.textContent = msg; box.appendChild(t);
    if (btn) { var b = document.createElement('button'); b.type = 'button'; b.textContent = btn; b.onclick = function () { fn(); }; box.appendChild(b); }
    var x = document.createElement('button'); x.type = 'button'; x.className = 'x'; x.setAttribute('aria-label', 'Close'); x.textContent = '✕'; x.onclick = function () { box.hidden = true; }; box.appendChild(x);
    box.hidden = false; clearTimeout(hideT); hideT = setTimeout(function () { if (box) box.hidden = true; }, ms || (btn ? 15000 : 5000));
  }
  function openLink(u) {
    try { if (window.Android && window.Android.openUrl) return window.Android.openUrl(u); } catch (e) { }
    try { if (window.AndroidBridge && window.AndroidBridge.openLink) return window.AndroidBridge.openLink(u); } catch (e) { }
    window.open(u, '_blank', 'noopener');
  }

  // ---------------------------------------------------------------- online storage (loads the cloud script when a page has not)
  function cloud() {
    if (window.IMCloud) return Promise.resolve(window.IMCloud);
    return new Promise(function (ok, no) {
      var n = 0;
      (function add(list) {
        if (!list.length) return wait();
        var s = document.createElement('script'); s.src = wbase + list[0]; s.onload = s.onerror = function () { add(list.slice(1)); }; document.head.appendChild(s);
      })(window.BF_CLOUD_URL ? ['im-cloud.js'] : ['cloud-config.js', 'im-cloud.js']);
      function wait() { if (window.IMCloud) return ok(window.IMCloud); if (++n > 50) return no(new Error('The online storage is not available on this page.')); setTimeout(wait, 100); }
    });
  }
  function user() { try { var u = JSON.parse(localStorage.getItem('bf-user') || 'null'); return u && u.loginId ? u : null; } catch (e) { return null; } }
  function page() { return (location.pathname.split('/').pop() || '').replace(/\.html$/, '') + (location.hash || ''); }
  function b64ofBytes(u8) { var s = '', i, c = 0x8000; for (i = 0; i < u8.length; i += c) s += String.fromCharCode.apply(null, u8.subarray(i, i + c)); return btoa(s); }
  function utf8b64(t) { return b64ofBytes(new TextEncoder().encode(String(t))); }
  /** save to Drive: data = string (text) or Uint8Array; returns {url, download} */
  function save(name, mime, data, how, quiet) {
    if (!user()) return Promise.reject(new Error('Log in to save to the online storage.'));
    if (!quiet) toast('Saving "' + name + '" to your online storage…');
    var body = { fileName: name, mime: mime || '', page: page(), how: how || '' };
    if (typeof data === 'string') body.b64 = utf8b64(data); else body.b64 = b64ofBytes(data);
    return cloud().then(function (C) { return C.userCall('report', body); }).then(function (r) {
      if (!quiet) toast('Saved to your online storage (Google Drive): ' + name, 'Open', function () { openLink(r.url); });
      return r;
    }, function (e) { if (!quiet) toast('Could not save online: ' + e.message + ' It is kept on this device.'); throw e; });
  }
  function blobBytes(href) { return fetch(href).then(function (r) { return r.arrayBuffer(); }).then(function (b) { return new Uint8Array(b); }); }
  function clean(t) { return String(t || 'Report').replace(/[\\\/:*?"<>|]+/g, '_').slice(0, 80); }

  // ---------------------------------------------------------------- Share / copy sheet (when the device has no share screen)
  function sheet(title, text, driveP) {
    css(); var old = document.getElementById('im-sheet'); if (old) old.remove();
    var w = document.createElement('div'); w.id = 'im-sheet';
    w.innerHTML = '<div role="dialog" aria-modal="true" aria-label="Share"><b style="font:700 20px Barlow Condensed,Barlow,sans-serif;letter-spacing:.04em;text-transform:uppercase"></b>' +
      '<textarea readonly></textarea><span class="st" style="color:#93a6ba;font-size:13px">Saving a copy to your online storage…</span>' +
      '<div class="r"><button type="button" class="m" data-a="copy">Copy text</button><button type="button" data-a="open" disabled>Open online copy</button><button type="button" data-a="close">Close</button></div></div>';
    w.querySelector('b').textContent = title; w.querySelector('textarea').value = text; document.body.appendChild(w);
    var url = '';
    w.addEventListener('click', function (e) {
      if (e.target === w) return w.remove();
      var a = e.target.getAttribute && e.target.getAttribute('data-a'); if (!a) return;
      if (a === 'close') w.remove();
      if (a === 'open' && url) openLink(url);
      if (a === 'copy') { var ta = w.querySelector('textarea'); (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject()).then(function () { e.target.textContent = 'Copied'; }, function () { ta.focus(); ta.select(); try { document.execCommand('copy'); e.target.textContent = 'Copied'; } catch (x) { } }); }
    });
    driveP.then(function (r) { url = r.url; w.querySelector('[data-a=open]').disabled = false; w.querySelector('.st').textContent = 'Saved online: ' + r.name; },
      function (e) { w.querySelector('.st').textContent = 'Not saved online: ' + e.message; });
  }
  function shareText(title, text) {
    var p = save(clean(title) + '.txt', 'text/plain', String(text), 'Share', true);
    return p;
  }

  // ---------------------------------------------------------------- wrap the phone's bridges so every share / file also reaches Drive
  function wrapObj(name, methods, hook) {
    var J = window[name]; if (!J) return;
    var W = {};
    methods.forEach(function (m) { try { if (J[m]) W[m] = function () { return J[m].apply(J, arguments); }; } catch (e) { } });
    hook(W, J);
    try { window[name] = W; } catch (e) { }
  }
  wrapObj('Android', ['askNotify', 'fetchUrl', 'notifyAllowed', 'openUrl', 'post', 'printPdf', 'quizAlerts', 'quizSeen', 'share', 'proBuy', 'proQuery'], function (W, J) {
    if (J.share) W.share = function (title, text) {
      try { J.share(title, text); } catch (e) { sheet(title, text, shareText(title, text)); return; }
      shareText(title, text).then(function (r) { toast('A copy is in your online storage', 'Open', function () { openLink(r.url); }); }, function () { });
    };
    if (J.printPdf) W.printPdf = function (name) {
      toast('Print screen: choose "Save as PDF" as the printer, then tap the PDF button to save it.', null, null, 8000);
      try { return J.printPdf(name); } catch (e) { toast('Printing is not available on this phone. Use Share instead.'); }
    };
  });
  wrapObj('AndroidBridge', ['fetchUrl', 'openLink', 'platform', 'postJson', 'printPage', 'saveFile', 'toastMessage'], function (W, J) {
    if (J.saveFile) W.saveFile = function (name, b64, mime) {
      var r = J.saveFile(name, b64, mime);
      try { var bin = atob(b64), u8 = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
        save(name, mime, u8, 'Download', true).then(function (x) { toast('Saved on the phone, and a copy in your online storage', 'Open', function () { openLink(x.url); }); }, function () { }); } catch (e) { }
      return r;
    };
    if (J.printPage) W.printPage = function (name) { toast('Print screen: choose "Save as PDF" as the printer, then tap the PDF button to save it.', null, null, 8000); return J.printPage(name); };
  });

  // ---------------------------------------------------------------- downloads made by the pages (Excel, CSV, PDF, log sheets)
  var origClick = HTMLAnchorElement.prototype.click;
  HTMLAnchorElement.prototype.click = function () {
    var a = this, href = a.href || '', name = a.getAttribute('download');
    if (name == null || !/^(blob:|data:)/.test(href) || a.__imDone) return origClick.apply(a, arguments);
    name = clean(name || 'Iron Making file').replace(/_?$/, '');
    var mime = (href.match(/^data:([^;,]+)/) || [])[1] || '';
    if (inAndroidBF) {
      // this phone screen cannot save files itself: keep it in Google Drive and open it from there
      blobBytes(href).then(function (u8) { return save(name, mime, u8, 'Download', true); })
        .then(function (r) { toast('Saved to your online storage: ' + name, 'Open / download', function () { openLink(r.url); }); openLink(r.url); },
              function (e) { toast('Could not save "' + name + '": ' + e.message); });
      return;
    }
    origClick.apply(a, arguments);
    blobBytes(href).then(function (u8) { return save(name, mime, u8, 'Download', true); })
      .then(function (r) { toast('Downloaded. A copy is in your online storage', 'Open', function () { openLink(r.url); }); }, function () { });
  };

  // ---------------------------------------------------------------- share where the device has no share screen (computer, office PC)
  if (!navigator.share && !window.Android) {
    try {
      navigator.share = function (d) {
        d = d || {}; var title = d.title || 'Iron Making', text = (d.text || '') + (d.url ? '\n' + d.url : '');
        sheet(title, text, shareText(title, text)); return Promise.resolve();
      };
    } catch (e) { }
  }
  // print on a computer: say how to make a PDF
  var origPrint = window.print;
  if (!window.Android && !window.AndroidBridge) window.print = function () { toast('In the print window, choose "Save as PDF" to keep a file.', null, null, 6000); setTimeout(function () { origPrint.call(window); }, 60); };

  // ---------------------------------------------------------------- Back button on every inner page
  var path = location.pathname, file = (path.split('/').pop() || 'index.html').toLowerCase();
  var inWww = /\/www\/[^\/]*$/.test(path), inXco = /\/xco\/[^\/]*$/.test(path) || /appassets\.androidplatform\.net/.test(location.host);
  var isHome = inWww && (file === 'index.html' || file === '');
  var noBack = inWww && /^(auth|licence)\.html$/.test(file);
  function homeUrl() {
    if (/^file:\/\/\/android_asset\//.test(location.href) || /appassets\.androidplatform\.net/.test(location.host)) return 'ironmakingapk://home';
    return wbase + 'index.html';
  }
  // the screen a page opens on (some pages set their own starting #tab) counts as the page itself
  var rootHash = null;
  function markRoot() { if (rootHash === null) rootHash = location.hash || ''; }
  window.addEventListener('load', function () { setTimeout(markRoot, 400); });
  // pages visited in this window (file:// pages send no referrer, so the app keeps its own list)
  var nav = []; try { nav = JSON.parse(sessionStorage.getItem('im.nav') || '[]'); } catch (e) { }
  if (!noBack) {
    var cur = location.pathname;
    if (nav[nav.length - 1] !== cur) { if (nav[nav.length - 2] === cur) nav.pop(); else nav.push(cur); }
    nav = nav.slice(-30); try { sessionStorage.setItem('im.nav', JSON.stringify(nav)); } catch (e) { }
  }
  function goBack() {
    markRoot();
    if ((location.hash || '') !== rootHash && history.length > 1) { history.back(); return; }   // inner view of this page (e.g. one picture) -> the list
    var prev = nav[nav.length - 2];
    if (prev && prev !== location.pathname && history.length > 1) {                            // -> the page we came from
      var here = location.pathname, url = location.protocol + '//' + location.host + prev; history.back();
      setTimeout(function () { if (location.pathname === here) location.replace(url); }, 700);  // the page put its own #tab in between
      return;
    }
    // opened directly (no page to go back to): go to the page this screen belongs to
    var android = /^file:\/\/\/android_asset\//.test(location.href) || /appassets\.androidplatform\.net/.test(location.host);
    if (!inWww) { location.href = android ? homeUrl() : wbase + 'section.html#' + (inXco ? 'coke' : 'sinter'); return; }
    var top = { 'admin.html': 1, 'store.html': 1, 'carbon.html': 1, 'know-inputs.html': 1, 'section.html': 1 };
    var map = { 'bf-home.html': 'section.html#bf', 'charging-live.html': 'materials.html' };
    location.href = base + (window.IM_PARENT || map[file] || (top[file] ? 'index.html' : 'bf-home.html'));
  }
  function addBack() {
    if (isHome || noBack || document.getElementById('im-back')) return;
    css();
    var b = document.createElement('button'); b.type = 'button'; b.id = 'im-back'; b.setAttribute('aria-label', 'Back');
    b.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>Back';
    b.addEventListener('click', goBack); document.body.appendChild(b);
    // keep clear of fixed bottom bars (tab bars, action bars)
    function lift() {
      var h = innerHeight, top = h, els = document.body.getElementsByTagName('*');
      for (var i = 0; i < els.length && i < 4000; i++) {
        var e = els[i]; if (e === b || b.contains(e)) continue;
        var cs = getComputedStyle(e); if (cs.position !== 'fixed' && cs.position !== 'sticky') continue;
        if (cs.display === 'none' || cs.visibility === 'hidden') continue;
        var r = e.getBoundingClientRect();
        if (r.height > 0 && r.height < h * 0.4 && r.width > innerWidth * 0.5 && r.bottom >= h - 4 && r.top < top) top = r.top;
      }
      b.style.bottom = (top < h ? (h - top + 10) : 14) + 'px';
    }
    lift(); setTimeout(lift, 600); setTimeout(lift, 2000); addEventListener('resize', lift);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addBack); else addBack();

  window.IMOut = { toast: toast, save: save, share: function (t, x) { if (window.Android && window.Android.share) window.Android.share(t, x); else sheet(t, x, shareText(t, x)); }, open: openLink, back: goBack };
})();
