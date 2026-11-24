/* Iron Making 6.3.9 · "Report" button on every section page.
   PDF (phone print → Save as PDF, or the computer's print dialog), a report file (.html snapshot of what is on the
   screen, with the values typed in and the results, that opens offline on any phone or PC), and all tables as CSV for
   Excel. Files go to Downloads on the phone (AndroidBridge.saveFile) or download in the browser on a PC. */
(function () {
  'use strict';
  var page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  var inWww = /\/www\//.test(location.pathname) || /\/www$/.test(location.pathname.replace(/\/[^/]*$/, ''));
  if ((inWww && /^(index\.html)?$/.test(page)) || /^(auth|query|how-to-use|install|start|licence|store|google-login|iz-save)\.html$/.test(page) || window.top !== window) return;
  if (window.__imReport) return; window.__imReport = 1;

  function pad(n) { return ('0' + n).slice(-2); }
  function stamp(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + '-' + pad(d.getHours()) + pad(d.getMinutes()); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function user() { try { return JSON.parse(localStorage.getItem('bf-user') || '{}') || {}; } catch (e) { return {}; } }
  function title() { var h = document.querySelector('h1'), t = (document.title || '').replace(/\s*[·|–-]\s*Iron Making\s*$/i, ''); return (t || (h && h.textContent) || page.replace('.html', '')).trim(); }
  function slug() { return title().replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'report'; }
  function toast(t) { if (window.IMOut && IMOut.toast) return IMOut.toast(t); var d = document.createElement('div'); d.textContent = t; d.style.cssText = 'position:fixed;left:50%;bottom:90px;transform:translateX(-50%);z-index:99999;background:#0b1f38;color:#fff;border:1px solid #2a4a70;padding:10px 14px;border-radius:12px;font:14px system-ui;max-width:90%'; document.body.appendChild(d); setTimeout(function () { d.remove(); }, 4500); }

  function save(name, text, mime) {
    var b64 = null;
    if (window.AndroidBridge && AndroidBridge.saveFile) {
      try { b64 = btoa(unescape(encodeURIComponent(text))); } catch (e) { b64 = null; }
      if (b64) { var r = String(AndroidBridge.saveFile(name, b64, mime) || ''); if (/^ERROR/.test(r)) toast(r.replace(/^ERROR\s*/, 'Not saved: ')); else toast('Saved to Downloads: ' + name); return; }
    }
    var u = URL.createObjectURL(new Blob([text], { type: mime })), a = document.createElement('a');
    a.href = u; a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(u); }, 5000);
    toast('Downloading ' + name);
  }

  /* ---- snapshot of what is visible, with input values and drawings ---- */
  function hidden(el) {
    if (el.hasAttribute('hidden')) return true;
    var cs = getComputedStyle(el); return cs.display === 'none' || cs.visibility === 'hidden';
  }
  function snapshot() {
    var root = document.querySelector('main') || document.body, all = root.querySelectorAll('*'), marks = [];
    for (var i = 0; i < all.length; i++) { var el = all[i]; if (el.closest('#imrFab,#imrSheet,#im-back,#im-toast,#im-sheet')) continue; if (hidden(el)) { el.setAttribute('data-imrh', '1'); marks.push(el); } }
    var oIn = root.querySelectorAll('input,select,textarea'), oCv = root.querySelectorAll('canvas');
    var c = root.cloneNode(true);
    marks.forEach(function (el) { el.removeAttribute('data-imrh'); });
    var cIn = c.querySelectorAll('input,select,textarea'), cCv = c.querySelectorAll('canvas');
    Array.prototype.forEach.call(cIn, function (el, i) {
      var o = oIn[i], t = '';
      if (!o) return;
      if (o.tagName === 'SELECT') t = o.selectedIndex >= 0 ? o.options[o.selectedIndex].text : '';
      else if (o.type === 'checkbox' || o.type === 'radio') t = o.checked ? '☑' : '☐';
      else if (o.type === 'file' || o.type === 'hidden' || o.type === 'button' || o.type === 'submit') t = null;
      else t = o.value || o.placeholder || '';
      if (t === null) { el.remove(); return; }
      var s = document.createElement('span'); s.className = 'imr-v'; s.textContent = t; el.replaceWith(s);
    });
    Array.prototype.forEach.call(cCv, function (el, i) {
      var o = oCv[i], img = document.createElement('img');
      try { var u = o && o.width > 0 ? o.toDataURL('image/png') : ''; if (u.length > 2000) { img.src = u; img.className = 'imr-img'; el.replaceWith(img); return; } } catch (e) { }
      el.remove();
    });
    c.querySelectorAll('[data-imrh],script,noscript,style,link,iframe,button,dialog,nav.bn,.bn,#imrFab,#imrSheet,#im-back,#im-toast,#im-sheet,.imp,.impbar,video,audio,[role=tablist]').forEach(function (el) { el.remove(); });
    c.querySelectorAll('a').forEach(function (a) { var s = document.createElement('span'); s.innerHTML = a.innerHTML; a.replaceWith(s); });
    c.querySelectorAll('*').forEach(function (el) { el.removeAttribute('onclick'); el.removeAttribute('style'); el.removeAttribute('id'); });
    c.querySelectorAll('svg').forEach(function (s) { if (!s.getAttribute('width') && s.viewBox && s.viewBox.baseVal && s.viewBox.baseVal.width > 60) s.setAttribute('style', 'max-width:100%;height:auto'); else if (s.closest('h1,h2,h3,button,label') || (s.viewBox && s.viewBox.baseVal && s.viewBox.baseVal.width <= 32)) s.remove(); });
    return c.innerHTML;
  }
  var RCSS = 'body{margin:0;background:#fff;color:#111;font:14px/1.5 Arial,Helvetica,sans-serif}main{max-width:960px;margin:0 auto;padding:24px 18px 40px}' +
    '.imr-head{border-bottom:3px solid #ff6a00;padding-bottom:12px;margin-bottom:16px}.imr-head h1{margin:0;font-size:24px}.imr-head .k{color:#c2410c;font:700 12px Arial;letter-spacing:.12em;text-transform:uppercase}.imr-head p{margin:4px 0 0;color:#444;font-size:13px}' +
    'h1,h2,h3,h4{color:#0b2545;margin:16px 0 6px;line-height:1.2}h1{font-size:22px}h2{font-size:18px}h3{font-size:16px}h4{font-size:14px}p{margin:6px 0}' +
    'table{border-collapse:collapse;width:100%;margin:8px 0;font-size:12.5px}th,td{border:1px solid #c9d3df;padding:5px 7px;text-align:left;vertical-align:top}th{background:#eef3f8}tr:nth-child(even) td{background:#fafbfd}' +
    'label{display:inline-block;min-width:46%;margin:3px 2% 3px 0;color:#333;font-size:13px}.imr-v{display:inline-block;margin-left:6px;padding:1px 8px;border:1px solid #c9d3df;border-radius:6px;background:#f4f7fb;color:#000;font-weight:700}' +
    'section,article,.card,.box,.bx,.k,.kpi,details{display:block;margin:10px 0;padding:8px 10px;border:1px solid #dde4ec;border-radius:8px;page-break-inside:avoid}details>summary{font-weight:700}' +
    'img,svg,.imr-img{max-width:100%;height:auto}b,strong{color:#000}small{color:#555}.imr-foot{margin-top:24px;padding-top:10px;border-top:1px solid #ccc;color:#666;font-size:12px}' +
    'span,b,strong,em,small,i,sub+span{margin-right:.35em}.go{display:none}*{color-adjust:exact;-webkit-print-color-adjust:exact}@media print{main{padding:0}}';
  function reportHtml() {
    var u = user(), d = new Date(), t = title();
    return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + esc(t) + ' · Iron Making report</title><style>' + RCSS + '</style></head><body><main>' +
      '<div class="imr-head"><div class="k">Iron Making · report</div><h1>' + esc(t) + '</h1><p>' + esc(d.toLocaleString('en-IN')) + (u.name ? ' · ' + esc(u.name) : '') + (u.company ? ' · ' + esc(u.company) : '') + ' · app ' + esc(window.BF_APP_VERSION || '6.3.9') + '</p></div>' +
      snapshot() +
      '<div class="imr-foot">Made with the Iron Making app by Niteen Kumar. Results are engineering guidance based on the inputs shown; check them against plant procedures before acting.</div></main></body></html>';
  }
  function tablesCsv() {
    var root = document.querySelector('main') || document.body, ts = Array.prototype.filter.call(root.querySelectorAll('table'), function (t) { return !t.closest('[hidden]') && t.offsetParent !== null && !t.closest('#imrSheet'); });
    if (!ts.length) return null;
    var q = function (s) { s = String(s).replace(/\s+/g, ' ').trim(); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; }, out = [title(), new Date().toLocaleString('en-IN'), ''];
    ts.forEach(function (t, i) {
      var cap = t.caption ? t.caption.textContent : ''; if (!cap) { var h = t.closest('section,.card,.box,.bx,details,div'); var hh = h && h.querySelector('h2,h3,h4,summary'); cap = hh ? hh.textContent : 'Table ' + (i + 1); }
      out.push(q(cap));
      Array.prototype.forEach.call(t.rows, function (r) { out.push(Array.prototype.map.call(r.cells, function (c) { var inp = c.querySelector('input,select'); return q(inp ? (inp.tagName === 'SELECT' ? (inp.options[inp.selectedIndex] || {}).text || '' : inp.value) : c.textContent); }).join(',')); });
      out.push('');
    });
    return { csv: '﻿' + out.join('\r\n'), n: ts.length };
  }
  function pdf() {
    close();
    var name = 'IronMaking-' + slug();
    if (window.Android && Android.printPdf) { try { Android.printPdf(name); return; } catch (e) { } }
    if (window.AndroidBridge && AndroidBridge.printPage) { try { AndroidBridge.printPage(name); return; } catch (e) { } }
    window.print();
  }

  /* ---- button and sheet ---- */
  var CSS = '#imrFab{position:fixed;left:14px;z-index:9990;display:inline-flex;align-items:center;gap:6px;min-height:44px;padding:8px 14px 8px 11px;border-radius:999px;border:1px solid rgba(42,245,196,.55);background:linear-gradient(135deg,#0d3a3a,#0b2545);color:#d9fff6;font:700 14px/1 system-ui,sans-serif;box-shadow:0 8px 22px rgba(0,0,0,.45),0 0 14px rgba(42,245,196,.25);cursor:pointer}' +
    '#imrFab svg{width:18px;height:18px;fill:none;stroke:#2af5c4;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}' +
    '#imrSheet{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:flex-end;justify-content:center;background:rgba(2,8,16,.6)}#imrSheet[hidden]{display:none}' +
    '#imrSheet .s{width:100%;max-width:520px;margin:0 8px 8px;padding:16px;border-radius:18px;background:#0b1a2b;border:1px solid #22344a;color:#eaf1f7;font:15px/1.45 system-ui,sans-serif;box-shadow:0 -10px 40px rgba(0,0,0,.5)}' +
    '#imrSheet h3{margin:0 0 2px;font-size:18px}#imrSheet p{margin:0 0 12px;color:#9fb3c6;font-size:13px}' +
    '#imrSheet .o{display:flex;align-items:center;gap:12px;width:100%;margin:0 0 8px;padding:12px;border-radius:14px;border:1px solid #2a4a70;background:rgba(4,12,23,.6);color:#fff;text-align:left;font:600 15px system-ui,sans-serif;cursor:pointer}' +
    '#imrSheet .o i{flex:none;width:40px;height:40px;border-radius:12px;display:grid;place-items:center;font:700 12px system-ui;font-style:normal;color:#032a2a;background:var(--c)}#imrSheet .o small{display:block;color:#9fb3c6;font-weight:400;font-size:12.5px}' +
    '#imrSheet .x{width:100%;min-height:44px;border-radius:12px;border:1px solid #2a4a70;background:transparent;color:#cfe3ee;font:600 14px system-ui;cursor:pointer}' +
    '@media print{#imrFab,#imrSheet{display:none!important}}';
  function close() { var s = document.getElementById('imrSheet'); if (s) s.hidden = true; }
  function open() {
    var s = document.getElementById('imrSheet');
    if (!s) {
      s = document.createElement('div'); s.id = 'imrSheet'; s.hidden = true; s.setAttribute('role', 'dialog'); s.setAttribute('aria-label', 'Download report');
      s.innerHTML = '<div class="s"><h3>Download report</h3><p>Saves what is on this screen, with your inputs and results. On a phone it goes to Downloads; on a PC, to your downloads folder.</p>' +
        '<button class="o" data-r="pdf"><i style="--c:#ff9a8a">PDF</i><span>PDF report<small>Opens the print screen: choose "Save as PDF"</small></span></button>' +
        '<button class="o" data-r="html"><i style="--c:#2af5c4">HTML</i><span>Report file<small>Opens on any phone or PC, even offline, and can be printed</small></span></button>' +
        '<button class="o" data-r="csv"><i style="--c:#ffd23d">XLS</i><span>Tables for Excel (CSV)<small id="imrN">Every table on this screen in one file</small></span></button>' +
        '<button class="x" data-r="x">Close</button></div>';
      document.body.appendChild(s);
      s.addEventListener('click', function (e) {
        if (e.target === s) return close();
        var b = e.target.closest('[data-r]'); if (!b) return;
        var r = b.getAttribute('data-r'), n = 'IronMaking-' + slug() + '-' + stamp(new Date());
        if (r === 'x') return close();
        if (r === 'pdf') return pdf();
        if (r === 'html') { close(); setTimeout(function () { try { save(n + '.html', reportHtml(), 'text/html'); } catch (er) { toast('Could not make the report: ' + er.message); } }, 30); return; }
        if (r === 'csv') { var t = tablesCsv(); if (!t) { toast('There is no table on this screen. Use PDF or Report file instead.'); return; } close(); save(n + '.csv', t.csv, 'text/csv'); }
      });
    }
    var t = document.querySelector('main table, body table'); var nEl = s.querySelector('#imrN'); if (nEl) nEl.textContent = t ? 'Every table on this screen in one file' : 'No table on this screen';
    s.hidden = false;
  }
  function place(b) {
    var bottom = 16;
    Array.prototype.forEach.call(document.querySelectorAll('nav, .bn, footer'), function (el) { var cs = getComputedStyle(el); if (cs.position === 'fixed' && el.offsetHeight && el.getBoundingClientRect().bottom >= innerHeight - 2) bottom = Math.max(bottom, el.offsetHeight + 12); });
    b.style.bottom = 'calc(' + bottom + 'px + env(safe-area-inset-bottom, 0px))';
  }
  function init() {
    if (document.getElementById('imrFab')) return;
    var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    var b = document.createElement('button'); b.id = 'imrFab'; b.type = 'button'; b.setAttribute('aria-label', 'Download report');
    b.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>Report';
    b.onclick = open; document.body.appendChild(b); place(b);
    addEventListener('resize', function () { place(b); });
    setTimeout(function () { place(b); }, 1200);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
