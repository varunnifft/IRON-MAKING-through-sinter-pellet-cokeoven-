/* Developer logo (Niteen Kumar): a small round badge on every page. Sits in the module header where there is one,
   otherwise in the bottom-left corner above any bottom bar. Decorative only: never takes a tap. */
(function () {
  'use strict';
  if (window.top !== window) return;
  var me = document.currentScript, src = (me && me.getAttribute('data-img')) || 'img/nk-logo.png';
  function add() {
    if (document.getElementById('nkLogo')) return;
    var img = document.createElement('img'); img.id = 'nkLogo'; img.src = src; img.alt = 'Niteen Kumar'; img.title = 'Designed and developed by Niteen Kumar';
    img.setAttribute('draggable', 'false');
    var bar = document.querySelector('header.bar');
    if (bar && bar.querySelector('.tt')) {
      img.style.cssText = 'width:34px;height:34px;border-radius:50%;flex:none;box-shadow:0 0 0 1.5px rgba(255,194,61,.7),0 2px 8px rgba(0,0,0,.45);pointer-events:none';
      bar.insertBefore(img, bar.querySelector('.tt')); return;
    }
    img.style.cssText = 'position:fixed;left:10px;z-index:2147483000;width:40px;height:40px;border-radius:50%;opacity:.96;pointer-events:none;box-shadow:0 0 0 1.5px rgba(255,194,61,.75),0 3px 10px rgba(0,0,0,.5);bottom:calc(12px + env(safe-area-inset-bottom,0px))';
    document.documentElement.appendChild(img);   // outside <body>: some pages give body a transform, which would pin a fixed badge to the page end
    function lift() {
      var h = 0;
      Array.prototype.forEach.call(document.body.querySelectorAll('nav, footer, .bn, .bottom-nav, [class*="tabbar"], [class*="bottom"]'), function (el) {
        if (el === img) return; var cs = getComputedStyle(el), r = el.getBoundingClientRect();
        if ((cs.position === 'fixed' || cs.position === 'sticky') && r.height > 0 && r.height < 160 && Math.abs(r.bottom - innerHeight) < 4) h = Math.max(h, r.height);
      });
      img.style.bottom = 'calc(' + (h + 10) + 'px + env(safe-area-inset-bottom,0px))';
    }
    lift(); setTimeout(lift, 600); setTimeout(lift, 2000); addEventListener('resize', lift);
  }
  if (document.body) add(); else document.addEventListener('DOMContentLoaded', add);
})();
