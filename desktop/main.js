// Iron Making – desktop shell (Windows / macOS / Linux)
// Serves the same pages as the Android app from app://im/…, maps the Android-only
// ironmaking://sinter and ironmaking://coke links, adds a menu, file save and print to PDF.
'use strict';
const { app, BrowserWindow, Menu, protocol, net, shell, dialog, session, nativeImage } = require('electron');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

const ROOT = path.join(__dirname, 'assets');
const HOME = 'app://im/www/index.html';
const ROUTES = { sinter: 'app://im/index.html', coke: 'app://im/xco/index.html' };
const ICON = path.join(__dirname, 'build', process.platform === 'win32' ? 'icon.ico' : 'icon.png');
const VERSION = app.getVersion();

app.setName('Iron Making');
if (process.platform === 'win32') app.setAppUserModelId('com.bfburdenmodel.ironmaking.desktop');

protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { standard: true, secure: true, supportFetchAPI: true, corsEnabled: true, stream: true, codeCache: true } }
]);

if (!app.requestSingleInstanceLock()) { app.quit(); }

function mapScheme(url) {
  const m = /^ironmaking(?:apk)?:\/\/([^/?#]*)/i.exec(url || '');
  if (!m) return null;
  return ROUTES[m[1].toLowerCase()] || HOME;
}

let win = null;
const stateFile = () => path.join(app.getPath('userData'), 'window.json');
function readState() { try { return JSON.parse(fs.readFileSync(stateFile(), 'utf8')); } catch (e) { return {}; } }
function saveState() {
  if (!win || win.isDestroyed()) return;
  try { fs.writeFileSync(stateFile(), JSON.stringify(Object.assign(win.getNormalBounds(), { max: win.isMaximized() }))); } catch (e) { }
}

// back: in-page handler first (pages define window.appBack, like the Android back key), then history
async function goBack() {
  if (!win) return;
  const wc = win.webContents;
  let done = false;
  try { done = await wc.executeJavaScript('(function(){try{if(typeof window.appBack==="function"){var r=window.appBack();return r!==false;}}catch(e){}return false;})()', true); } catch (e) { }
  if (done) return;
  if (wc.navigationHistory.canGoBack()) wc.navigationHistory.goBack(); else if (wc.getURL() !== HOME) wc.loadURL(HOME);
}

async function saveAsPdf() {
  if (!win) return;
  const t = (win.webContents.getTitle() || 'Iron Making').replace(/[\\/:*?"<>|]+/g, ' ').trim();
  const r = await dialog.showSaveDialog(win, { title: 'Save page as PDF', defaultPath: path.join(app.getPath('documents'), t + '.pdf'), filters: [{ name: 'PDF', extensions: ['pdf'] }] });
  if (r.canceled || !r.filePath) return;
  try {
    const pdf = await win.webContents.printToPDF({ printBackground: true, pageSize: 'A4', margins: { marginType: 'default' } });
    fs.writeFileSync(r.filePath, pdf); shell.showItemInFolder(r.filePath);
  } catch (e) { dialog.showErrorBox('Save as PDF', String(e && e.message || e)); }
}

function buildMenu() {
  const isMac = process.platform === 'darwin', mod = isMac ? 'Cmd' : 'Ctrl';
  const tpl = [];
  if (isMac) tpl.push({ label: 'Iron Making', submenu: [{ role: 'about' }, { type: 'separator' }, { role: 'hide' }, { role: 'hideOthers' }, { role: 'unhide' }, { type: 'separator' }, { role: 'quit' }] });
  tpl.push({ label: 'Go', submenu: [
    { label: 'Iron Making home', accelerator: mod + '+Shift+H', click: () => win && win.loadURL(HOME) },
    { label: 'BF Model', accelerator: mod + '+1', click: () => win && win.loadURL('app://im/www/bf-home.html') },
    { label: 'Sinter Predict', accelerator: mod + '+2', click: () => win && win.loadURL(ROUTES.sinter) },
    { label: 'Coke Making', accelerator: mod + '+3', click: () => win && win.loadURL(ROUTES.coke) },
    { label: 'Sinter critical decisions (3D)', click: () => win && win.loadURL('app://im/sinter-critical.html') },
    { label: 'Coke oven critical decisions (3D)', click: () => win && win.loadURL('app://im/xco/coke-critical.html') },
    { label: 'Carbon footprint (CBAM)', accelerator: mod + '+4', click: () => win && win.loadURL('app://im/www/carbon.html') },
    { label: 'BF cost optimiser', accelerator: mod + '+5', click: () => win && win.loadURL('app://im/www/cost-optimiser.html') },
    { label: 'Critical situation plan', accelerator: mod + '+6', click: () => win && win.loadURL('app://im/www/critical-situations.html') },
    { label: 'Check your taphole (3D)', accelerator: mod + '+7', click: () => win && win.loadURL('app://im/www/taphole.html') },
    { label: 'Tuyere watch', accelerator: mod + '+8', click: () => win && win.loadURL('app://im/www/tuyere-watch.html') },
    { label: 'Water cooling requirement', accelerator: mod + '+9', click: () => win && win.loadURL('app://im/www/cooling-water.html') },
    { type: 'separator' },
    { label: 'Back', accelerator: isMac ? 'Cmd+[' : 'Alt+Left', click: goBack },
    { label: 'Forward', accelerator: isMac ? 'Cmd+]' : 'Alt+Right', click: () => win && win.webContents.navigationHistory.canGoForward() && win.webContents.navigationHistory.goForward() },
    { label: 'Reload', accelerator: mod + '+R', click: () => win && win.webContents.reload() }
  ] });
  tpl.push({ label: 'File', submenu: [
    { label: 'Print…', accelerator: mod + '+P', click: () => win && win.webContents.print({ printBackground: true }) },
    { label: 'Save page as PDF…', accelerator: mod + '+Shift+S', click: saveAsPdf },
    { label: 'Open Downloads folder', click: () => shell.openPath(app.getPath('downloads')) },
    { type: 'separator' }, isMac ? { role: 'close' } : { role: 'quit', label: 'Exit' }
  ] });
  tpl.push({ label: 'Edit', submenu: [{ role: 'undo' }, { role: 'redo' }, { type: 'separator' }, { role: 'cut' }, { role: 'copy' }, { role: 'paste' }, { role: 'selectAll' }] });
  tpl.push({ label: 'View', submenu: [{ role: 'resetZoom' }, { role: 'zoomIn' }, { role: 'zoomOut' }, { type: 'separator' }, { role: 'togglefullscreen' }, { type: 'separator' }, { role: 'toggleDevTools', label: 'Developer tools' }] });
  tpl.push({ label: 'Help', submenu: [{ label: 'About Iron Making', click: () => dialog.showMessageBox(win, { type: 'info', title: 'Iron Making', icon: nativeImage.createFromPath(path.join(__dirname, 'build', 'icon-512.png')), message: 'Iron Making ' + VERSION, detail: 'Blast furnace, sinter, coke and pellet tools.\nDesigned & developed by Niteen Kumar.\nPlant data stays on this computer.' }) }] });
  Menu.setApplicationMenu(Menu.buildFromTemplate(tpl));
}

// small "Iron Making" home pill on the Sinter and Coke pages (on the phone those open as separate screens)
const PILL = `(function(){if(document.getElementById('im-desk-home'))return;var a=document.createElement('a');a.id='im-desk-home';a.href='${HOME}';a.textContent='⌂ Iron Making';
a.setAttribute('style','position:fixed;right:14px;bottom:14px;z-index:2147483647;padding:9px 14px;border-radius:999px;background:rgba(7,20,38,.92);color:#ffd9a8;border:1px solid rgba(255,181,71,.6);font:600 13px system-ui,Segoe UI,sans-serif;text-decoration:none;box-shadow:0 6px 18px rgba(0,0,0,.45)');
document.body.appendChild(a);})();`;

function createWindow() {
  const st = readState();
  win = new BrowserWindow({
    width: st.width || 1280, height: st.height || 860, x: st.x, y: st.y, minWidth: 380, minHeight: 560,
    title: 'Iron Making', icon: ICON, backgroundColor: '#071426', show: false, autoHideMenuBar: false,
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true, spellcheck: false }
  });
  if (st.max) win.maximize();
  win.once('ready-to-show', () => win.show());
  ['resize', 'move', 'close'].forEach(ev => win.on(ev, saveState));
  win.on('closed', () => { win = null; });

  const wc = win.webContents;
  wc.setUserAgent(wc.getUserAgent() + ' IronMakingDesktop/' + VERSION);
  const nav = (e, url) => {
    const to = mapScheme(url);
    if (to) { e.preventDefault(); wc.loadURL(to); return; }
    if (/^(https?|mailto|tel|whatsapp|intent):/i.test(url)) { e.preventDefault(); shell.openExternal(url).catch(() => { }); }
  };
  wc.on('will-navigate', nav);
  wc.on('will-redirect', nav);
  wc.setWindowOpenHandler(({ url }) => {
    const to = mapScheme(url);
    if (to) { wc.loadURL(to); return { action: 'deny' }; }
    if (/^app:\/\/im\//.test(url)) { wc.loadURL(url); return { action: 'deny' }; }
    if (/^(blob|data):/i.test(url)) return { action: 'allow', overrideBrowserWindowOptions: { icon: ICON, backgroundColor: '#ffffff', autoHideMenuBar: true } };
    shell.openExternal(url).catch(() => { });
    return { action: 'deny' };
  });
  wc.on('did-finish-load', () => { if (!/^app:\/\/im\/www\//.test(wc.getURL())) wc.executeJavaScript('if (!document.getElementById("imHomeBtn")) ' + PILL, true).catch(() => { }); });
  wc.on('before-input-event', (e, i) => { if (i.type === 'mouseDown' && i.button === 'back') goBack(); });
  win.on('app-command', (e, cmd) => { if (cmd === 'browser-backward') goBack(); });
  wc.loadURL(HOME);
}

// Windows: create Start-menu and Desktop shortcuts with the NK icon on first run (portable zip, no installer needed)
function winShortcuts() {
  if (process.platform !== 'win32' || !app.isPackaged) return;
  const flag = path.join(app.getPath('userData'), 'shortcuts-v1');
  if (fs.existsSync(flag)) return;
  const opts = { target: process.execPath, cwd: path.dirname(process.execPath), icon: path.join(__dirname, 'build', 'icon.ico'), iconIndex: 0, description: 'Iron Making – BF, sinter, coke and pellet', appUserModelId: 'com.bfburdenmodel.ironmaking.desktop' };
  try {
    const sm = path.join(app.getPath('appData'), 'Microsoft', 'Windows', 'Start Menu', 'Programs', 'Iron Making.lnk');
    shell.writeShortcutLink(sm, 'create', opts);
    shell.writeShortcutLink(path.join(app.getPath('desktop'), 'Iron Making.lnk'), 'create', opts);
    fs.writeFileSync(flag, String(Date.now()));
  } catch (e) { }
}

app.on('second-instance', () => { if (win) { if (win.isMinimized()) win.restore(); win.focus(); } });

app.whenReady().then(() => {
  protocol.handle('app', async (req) => {
    const u = new URL(req.url);
    let p = decodeURIComponent(u.pathname);
    if (p === '/' || p === '') p = '/www/index.html';
    const file = path.normalize(path.join(ROOT, p));
    if (!file.startsWith(ROOT + path.sep)) return new Response('Forbidden', { status: 403 });
    if (!fs.existsSync(file)) return new Response('Not found: ' + p, { status: 404, headers: { 'content-type': 'text/plain' } });
    return net.fetch(pathToFileURL(file).toString());
  });
  // ironmaking:// typed by a page (location.href = …) → redirect to the right page
  ['ironmaking', 'ironmakingapk'].forEach(s => {
    try { protocol.handle(s, (req) => new Response(null, { status: 302, headers: { Location: mapScheme(req.url) || HOME } })); } catch (e) { }
  });
  session.defaultSession.on('will-download', (e, item) => {
    if (process.env.IM_TEST_SAVE_DIR) { item.setSavePath(path.join(process.env.IM_TEST_SAVE_DIR, item.getFilename())); return; }
    item.setSaveDialogOptions({ title: 'Save file', defaultPath: path.join(app.getPath('downloads'), item.getFilename()) });
  });
  session.defaultSession.setPermissionRequestHandler((wc, perm, cb) => cb(['clipboard-sanitized-write', 'fullscreen', 'notifications'].indexOf(perm) >= 0));
  if (process.platform === 'darwin' && app.dock) app.dock.setIcon(path.join(__dirname, 'build', 'icon.png'));
  app.setAboutPanelOptions({ applicationName: 'Iron Making', applicationVersion: VERSION, credits: 'Designed & developed by Niteen Kumar', iconPath: path.join(__dirname, 'build', 'icon-512.png') });
  buildMenu();
  winShortcuts();
  createWindow();
  app.on('activate', () => { if (!BrowserWindow.getAllWindows().length) createWindow(); });
});

app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
