#!/usr/bin/env bash
# Build the Windows and Mac desktop packages of Iron Making from app/ and desktop/.
# Usage: VERSION=5.8 bash tools/package_desktop.sh   → dist/IronMaking-<V>-Windows-x64.zip, -Mac-AppleSilicon.zip, -Mac-Intel.zip
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"; V="${VERSION:-5.8}"; EV="${ELECTRON_VERSION:-33.2.1}"
W="$ROOT/work"; OUT="$ROOT/dist"; CACHE="${ELECTRON_CACHE:-$W/dl}"
rm -rf "$W/win" "$W/mac-arm64" "$W/mac-x64" "$W/payload"; mkdir -p "$W" "$OUT" "$CACHE"

get() { [ -s "$CACHE/$1" ] || curl -fsSL --retry 3 -o "$CACHE/$1" "https://github.com/electron/electron/releases/download/v$EV/$1"; }

# app payload: the shell + the same pages as the web app
P="$W/payload"; mkdir -p "$P"
cp "$ROOT/desktop/main.js" "$ROOT/desktop/package.json" "$P/"; cp -r "$ROOT/desktop/build" "$P/build"; cp -r "$ROOT/app" "$P/assets"
sed -i "s/\"version\": \"[0-9.]*\"/\"version\": \"$V.0\"/" "$P/package.json"

# ---- Windows (portable folder; creates Start-menu and Desktop shortcuts on first start)
get "electron-v$EV-win32-x64.zip"
D="$W/win/Iron Making"; mkdir -p "$D"; unzip -q "$CACHE/electron-v$EV-win32-x64.zip" -d "$D"
mv "$D/electron.exe" "$D/Iron Making.exe"; rm -f "$D/resources/default_app.asar"
cp -r "$P" "$D/resources/app"; rm -f "$D/resources/app/build/icon.icns"; cp "$P/build/icon.ico" "$D/Iron Making.ico"
sed "s/IRON MAKING [0-9.]*/IRON MAKING $V/" "$ROOT/desktop/READ-ME-windows.txt" > "$D/READ ME - how to start.txt"
python3 "$ROOT/tools/peicon.py" "$D/Iron Making.exe" "$P/build/icon.png"
(cd "$W/win" && rm -f "$OUT/IronMaking-$V-Windows-x64.zip" && zip -qr -9 "$OUT/IronMaking-$V-Windows-x64.zip" "Iron Making")

# ---- Mac (ad-hoc signed so it runs on Apple Silicon; first start: Privacy & Security → Open Anyway)
RC="${RCODESIGN:-}"
if [ -z "$RC" ]; then
  curl -fsSL --retry 3 -o "$W/rcodesign.tgz" "https://github.com/indygreg/apple-platform-rs/releases/download/apple-codesign%2F0.29.0/apple-codesign-0.29.0-x86_64-unknown-linux-musl.tar.gz"
  mkdir -p "$W/rc" && tar xzf "$W/rcodesign.tgz" -C "$W/rc"; RC="$(find "$W/rc" -name rcodesign -type f | head -1)"; chmod +x "$RC"
fi
for A in arm64 x64; do
  N=$([ "$A" = arm64 ] && echo AppleSilicon || echo Intel); M="$W/mac-$A"; mkdir -p "$M"
  get "electron-v$EV-darwin-$A.zip"; (cd "$M" && unzip -q "$CACHE/electron-v$EV-darwin-$A.zip" && mv Electron.app "Iron Making.app")
  R="$M/Iron Making.app/Contents/Resources"; rm -f "$R/default_app.asar"; cp -r "$P" "$R/app"; rm -f "$R/app/build/icon.ico"; cp "$P/build/icon.icns" "$R/electron.icns"
  python3 - "$M/Iron Making.app/Contents/Info.plist" "$V" <<'PY'
import plistlib, sys
p, v = sys.argv[1], sys.argv[2]; d = plistlib.load(open(p, 'rb'))
d.update({'CFBundleName': 'Iron Making', 'CFBundleDisplayName': 'Iron Making', 'CFBundleIdentifier': 'com.bfburdenmodel.ironmaking.desktop',
          'CFBundleShortVersionString': v + '.0', 'CFBundleVersion': v + '.0', 'NSHumanReadableCopyright': 'Designed & developed by Niteen Kumar',
          'LSApplicationCategoryType': 'public.app-category.productivity', 'NSHighResolutionCapable': True})
plistlib.dump(d, open(p, 'wb'))
PY
  "$RC" sign "$M/Iron Making.app" >/dev/null 2>&1
  sed "s/IRON MAKING [0-9.]*/IRON MAKING $V/" "$ROOT/desktop/READ-ME-mac.txt" > "$M/READ ME - how to start.txt"
  (cd "$M" && rm -f "$OUT/IronMaking-$V-Mac-$N.zip" && zip -qry -9 "$OUT/IronMaking-$V-Mac-$N.zip" "Iron Making.app" "READ ME - how to start.txt")
done
ls -la "$OUT"
