/* Iron Making: way back from the Sinter and Coke modules to the Iron Making pages.
   Android: Sinter and Coke run as their own screens; ironmaking://home closes them and returns to Iron Making.
   Desktop / browser: open the section page. */
(function () {
  'use strict';
  var HOME = 'ironmaking://home', coke = /\/xco\//.test(location.pathname) || location.host === 'appassets.androidplatform.net';
  function leave() {
    if (window.AndroidBridge && AndroidBridge.openLink) { try { AndroidBridge.openLink(HOME); return; } catch (e) { } }
    if (location.host === 'appassets.androidplatform.net') { location.href = HOME; return; }
    location.href = (coke ? '../' : '') + 'www/section.html#' + (coke ? 'coke' : 'sinter');
  }
  window.IMLeave = leave;
  function add() {
    if (document.getElementById('imHomeBtn')) return;
    var b = document.createElement('button'); b.type = 'button'; b.id = 'imHomeBtn'; b.setAttribute('aria-label', 'Back to Iron Making'); b.title = 'Back to Iron Making';
    b.innerHTML = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11l9-7 9 7M5 10v10h5v-6h4v6h5V10"/></svg><span>Iron Making</span>';
    b.setAttribute('style', 'flex:none;display:inline-flex;align-items:center;gap:5px;height:34px;padding:0 10px;margin:0 2px;border-radius:999px;border:1px solid rgba(255,181,71,.55);background:rgba(255,181,71,.12);color:#ffd9a8;font:700 12px/1 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;cursor:pointer;white-space:nowrap');
    b.onclick = leave;
    var st = document.createElement('style'); st.textContent = '@media (max-width:359px){#imHomeBtn span{display:none}}'; document.head.appendChild(st);
    var menu = document.getElementById('btnMenu') || document.getElementById('menu') || document.getElementById('btnSuggest');
    var hdr = document.querySelector('header');
    if (menu && menu.parentNode) menu.parentNode.insertBefore(b, menu); else if (hdr) hdr.appendChild(b);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', add); else add();
})();
