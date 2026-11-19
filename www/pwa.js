/* Installable desktop app (6.3.7): registers the offline cache and keeps the browser's install offer for install.html. */
(function () {
  if ('serviceWorker' in navigator && location.protocol === 'https:' || /^(localhost|127\.0\.0\.1)$/.test(location.hostname)) {
    try { navigator.serviceWorker.register('sw.js'); } catch (e) { }
  }
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); window.__imInstall = e; document.dispatchEvent(new Event('im-can-install')); });
  window.addEventListener('appinstalled', function () { window.__imInstall = null; try { localStorage.setItem('im.installed', '1'); } catch (x) { } document.dispatchEvent(new Event('im-installed')); });
})();
