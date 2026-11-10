/* Sinter Predict - Process flow 3D page (yard to BF bunker). The animation lives in flow3d.html and is shown in a frame
   so its styles and render loop stay separate from the rest of the app. Leaving the page removes the frame and stops it. */
(function () {
  'use strict';
  if (window.SP_ICONS && !window.SP_ICONS.workflow) {
    window.SP_ICONS.workflow = '<rect width="8" height="8" x="3" y="3" rx="2"/> <path d="M7 11v4a2 2 0 0 0 2 2h4"/> <rect width="8" height="8" x="13" y="13" rx="2"/>';
  }
  var frame = null, onResize = null;

  function fit() {
    if (!frame) return;
    var top = frame.getBoundingClientRect().top, bn = document.getElementById('bottomNav');
    var bottom = bn && getComputedStyle(bn).display !== 'none' ? bn.offsetHeight : 0;
    var h = Math.max(460, window.innerHeight - top - bottom - 12);
    frame.style.height = h + 'px';
  }

  function page(m) {
    dispose();
    m.innerHTML =
      '<div class="card" style="padding:8px;margin-bottom:0;overflow:hidden">' +
      '<iframe id="flowFrame" src="flow3d.html" title="Sinter making process flow, 3D" ' +
      'style="display:block;width:100%;height:560px;border:0;border-radius:10px;background:#11161b"></iframe></div>';
    frame = m.querySelector('#flowFrame');
    onResize = function () { fit(); };
    window.addEventListener('resize', onResize);
    requestAnimationFrame(fit);
    setTimeout(fit, 350);
  }

  function dispose() {
    if (onResize) window.removeEventListener('resize', onResize);
    onResize = null;
    if (frame) { try { frame.src = 'about:blank'; } catch (e) {} if (frame.parentNode) frame.parentNode.removeChild(frame); }
    frame = null;
  }

  window.SinterFlow = { page: page, dispose: dispose };
})();
