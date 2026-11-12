/* First thing on every page: no saved login on this device -> the login page. Guest use is no longer allowed (5.9).
   Then loads the cloud sync (Google Drive of the admin) in the background. */
(function () {
  var u = null;
  try { u = JSON.parse(localStorage.getItem('bf-user') || 'null'); } catch (e) { }
  if (u && u.guest) { try { localStorage.removeItem('bf-user'); } catch (e) { } u = null; }
  if (!u || !u.loginId) { location.replace('auth.html'); return; }
  var me = document.currentScript, base = me && me.src ? me.src.replace(/gate\.js(\?.*)?$/, '') : '';
  ['cloud-config.js', 'im-cloud.js'].forEach(function (f) { var s = document.createElement('script'); s.src = base + f; s.async = false; document.head.appendChild(s); });
})();
