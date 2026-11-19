/* BF Model: list of modules and a "Go to another BF module" sheet that any page can open (BFMods.open()). */
(function () {
  'use strict';
  var M = window.BF_MODULES = [
    ['00', 'Data input', 'data-input.html'], ['01', 'Burden batch chemistry', 'chemistry.html'], ['02', 'Burden calculator', 'calculator.html'], ['03', '3D distribution', 'simulator.html'],
    ['04', 'Report', 'report.html'], ['05', 'Fact must know', 'materials.html'], ['06', 'Other charging modes', 'charging-modes.html'], ['07', 'Feedback and suggestion', 'feedback.html'],
    ['08', 'Furnace 3D view', 'furnace-inside.html'], ['09', 'Cohesive & melting zone', 'inner-zone.html'], ['10', 'Hearth liquid prediction', 'hearth-liquid.html'], ['11', 'BF cost optimiser', 'cost-optimiser.html'],
    ['12', 'Critical situation plan', 'critical-situations.html'], ['13', 'Check your taphole', 'taphole.html'], ['14', 'Tuyere watch', 'tuyere-watch.html'], ['15', 'Know your water cooling requirement', 'cooling-water.html'], ['i', 'Know your input / output', 'know.html']];
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  var here = (location.pathname.split('/').pop() || '').toLowerCase();
  function open() {
    close();
    var bg = document.createElement('div'); bg.id = 'bfmBg';
    bg.setAttribute('style', 'position:fixed;inset:0;z-index:2147483000;background:rgba(2,8,16,.6);display:flex;align-items:flex-end;justify-content:center');
    var sh = document.createElement('div'); sh.setAttribute('role', 'dialog'); sh.setAttribute('aria-label', 'Go to another BF module');
    sh.setAttribute('style', 'width:min(560px,100%);max-height:86vh;overflow:auto;background:#0e1a29;color:#eaf1f7;border:1px solid #22344a;border-bottom:0;border-radius:18px 18px 0 0;padding:16px 16px calc(14px + env(safe-area-inset-bottom,0px));font:15px/1.4 "IBM Plex Sans",system-ui,sans-serif;box-shadow:0 -18px 40px rgba(0,0,0,.5)');
    var a = 'display:flex;gap:10px;align-items:center;padding:11px 4px;border-bottom:1px solid #1b2c40;color:#eaf1f7;text-decoration:none;font-size:14.5px', n = 'width:30px;font:700 12px "IBM Plex Mono",monospace;color:#8fa1b4';
    sh.innerHTML = '<div style="font:700 18px \'Barlow Condensed\',system-ui,sans-serif;letter-spacing:.08em;text-transform:uppercase;margin:0 0 6px;color:#ffd9a8">Go to another BF module</div>' +
      M.map(function (m) { var cur = m[2] === here; return '<a href="' + m[2] + '" style="' + a + (cur ? ';color:#ffd9a8' : '') + '"' + (cur ? ' aria-current="page"' : '') + '><span style="' + n + '">' + m[0] + '</span>' + esc(m[1]) + (cur ? ' · here' : '') + '</a>'; }).join('') +
      '<a href="bf-home.html" style="' + a + '"><span style="' + n + '">⌂</span>BF Model home</a><a href="index.html" style="' + a + '"><span style="' + n + '">⌂</span>Iron Making first page</a>' +
      '<button type="button" id="bfmClose" style="width:100%;margin-top:12px;min-height:46px;border-radius:12px;border:1px solid #2a4a70;background:transparent;color:#eaf1f7;font:700 15px system-ui,sans-serif;cursor:pointer">Close</button>';
    bg.appendChild(sh); document.body.appendChild(bg);
    bg.addEventListener('click', function (e) { if (e.target === bg) close(); });
    document.getElementById('bfmClose').onclick = close;
  }
  function close() { var b = document.getElementById('bfmBg'); if (b) b.remove(); }
  function isOpen() { return !!document.getElementById('bfmBg'); }
  window.BFMods = { open: open, close: close, isOpen: isOpen, list: M };
  document.addEventListener('click', function (e) { var t = e.target.closest && e.target.closest('[data-bfmods]'); if (t) { e.preventDefault(); open(); } });
})();
