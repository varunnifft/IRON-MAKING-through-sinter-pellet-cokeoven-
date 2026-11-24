import Foundation

/// JavaScript added to every page (and frame) before the page's own scripts run.
/// The pages already work in a normal browser; this only fills the gaps of an app web view:
///   - window.print()            → native print sheet (Save as PDF from there)
///   - <a download> / blob files → Save to Files / Share (iPhone, iPad) or Save panel (Mac)
///   - navigator.share           → native share sheet if the web view has none
///   - window.bfNet              → native network calls for login / cloud backup (same API as the desktop build)
///   - hides "Continue with Google" when IM.hideGoogleSignIn is true
enum Bridge {
    static func startScript(hideGoogle: Bool) -> String {
        let css = hideGoogle ? ".gbtn,.gbtn+.gor{display:none!important}" : ""
        return #"""
(function () {
  if (window.__imApple) return; window.__imApple = 1;
  var H = window.webkit && window.webkit.messageHandlers;
  if (!H || !H.im) return;
  function send(m) { try { H.im.postMessage(m); } catch (e) { } }
  window.IM_APPLE = true;

  window.print = function () { send({ t: 'print', name: document.title || 'Iron Making' }); };

  /* keep each Blob, so a download still works after the page revokes its object URL */
  var blobs = {}, oc = URL.createObjectURL.bind(URL);
  URL.createObjectURL = function (o) {
    var u = oc(o);
    try { if (o instanceof Blob) { blobs[u] = o; setTimeout(function () { delete blobs[u]; }, 300000); } } catch (e) { }
    return u;
  };
  function b64(buf) {
    var u = new Uint8Array(buf), s = '', CH = 0x8000;
    for (var i = 0; i < u.length; i += CH) s += String.fromCharCode.apply(null, u.subarray(i, i + CH));
    return btoa(s);
  }
  function saveBlob(b, name) {
    return b.arrayBuffer().then(function (ab) { send({ t: 'save', name: name, mime: b.type || '', data: b64(ab) }); });
  }
  function nameOf(a, href) {
    var n = a.getAttribute('download');
    if (!n) { try { n = decodeURIComponent(href.split('?')[0].split('#')[0].split('/').pop() || ''); } catch (e) { n = ''; } }
    return n || 'Iron Making file';
  }
  function grab(a) {
    if (!a || !a.hasAttribute || !a.hasAttribute('download')) return false;
    var href = a.href || '';
    if (!/^(blob:|data:|imapp:)/i.test(href)) return false;
    var name = nameOf(a, href);
    if (blobs[href]) { saveBlob(blobs[href], name); return true; }
    fetch(href).then(function (r) { return r.blob(); }).then(function (b) { return saveBlob(b, name); })
      .catch(function (e) { alert('Could not save ' + name + ': ' + e); });
    return true;
  }
  var ac = HTMLAnchorElement.prototype.click;
  HTMLAnchorElement.prototype.click = function () { if (grab(this)) return; return ac.apply(this, arguments); };
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[download]') : null;
    if (a && !e.defaultPrevented && grab(a)) { e.preventDefault(); e.stopImmediatePropagation(); }
  }, true);

  if (!navigator.share) {
    navigator.share = function (d) {
      d = d || {};
      if (d.files && d.files.length) {
        return Promise.all(Array.prototype.map.call(d.files, function (f) { return saveBlob(f, f.name || 'Iron Making file'); }));
      }
      send({ t: 'share', text: [d.title, d.text, d.url].filter(Boolean).join('\n') });
      return Promise.resolve();
    };
    navigator.canShare = function () { return true; };
  }

  if (H.imnet) {
    window.bfNet = {
      post: function (url, body) {
        return H.imnet.postMessage({ op: 'post', url: String(url), body: String(body == null ? '' : body) });
      },
      fetchUrl: function (url) {
        return H.imnet.postMessage({ op: 'get', url: String(url) }).then(function (r) {
          if (r && r.ok && typeof r.data === 'string') {
            var bin = atob(r.data), u = new Uint8Array(bin.length);
            for (var i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
            r.data = u.buffer;
          }
          return r;
        });
      },
      openExternal: function (url) { send({ t: 'open', url: String(url) }); return Promise.resolve({ ok: true }); }
    };
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.documentElement.classList.add('im-apple');
    var css = '\#(css)';
    if (css) { var s = document.createElement('style'); s.textContent = css; (document.head || document.documentElement).appendChild(s); }
  });
})();
"""#
    }

    /// Small "⌂ Iron Making" button on the Sinter and Coke pages (they are separate screens on Android).
    static func homePill(_ home: String) -> String {
        return #"""
(function () {
  if (document.getElementById('im-desk-home') || document.getElementById('imHomeBtn')) return;
  var a = document.createElement('a'); a.id = 'im-desk-home'; a.href = '\#(home)'; a.textContent = '⌂ Iron Making';
  a.setAttribute('style', 'position:fixed;right:14px;bottom:calc(14px + env(safe-area-inset-bottom));z-index:2147483647;padding:9px 14px;border-radius:999px;background:rgba(7,20,38,.92);color:#ffd9a8;border:1px solid rgba(255,181,71,.6);font:600 13px -apple-system,system-ui,sans-serif;text-decoration:none;box-shadow:0 6px 18px rgba(0,0,0,.45)');
  document.body.appendChild(a);
})();
"""#
    }
}
