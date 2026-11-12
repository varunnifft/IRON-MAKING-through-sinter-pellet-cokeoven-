# Iron Making

**Blast furnace, sinter plant, coke oven and pellet plant tools in one app.**
Designed & developed by **Niteen Kumar**.

Iron Making is the update of the *BF Model* app. It works offline and needs no subscription. Logins, files uploaded in the app, saved inputs and suggestions are backed up online to the app owner's Google Drive.

## Use it

| Where | How |
|---|---|
| **In the browser (no install)** | Open the web app: **https://varunnifft.github.io/IRON-MAKING-through-sinter-pellet-cokeoven-/** · works in Edge or Chrome on any PC, laptop or phone |
| **Android phone** | [Download the APK](https://github.com/varunnifft/IRON-MAKING-through-sinter-pellet-cokeoven-/raw/main/downloads/IronMaking-5.9-v128-PHONE-INSTALL.apk) and install it, or get *BF Model* on Google Play |
| **Office PC that blocks installs** | [Download the browser zip](https://github.com/varunnifft/IRON-MAKING-through-sinter-pellet-cokeoven-/raw/main/downloads/IronMaking-5.9-Browser-NoInstall.zip), extract it and open **Start Iron Making.html** |
| **Windows 10 / 11, Mac** | Download from the [latest release](../../releases/latest): `Windows-x64.zip` (extract, run **Iron Making.exe**), `Mac-AppleSilicon.zip` or `Mac-Intel.zip` |

**Download page for every device and version:** `https://varunnifft.github.io/IRON-MAKING-through-sinter-pellet-cokeoven-/download.html`

An account is needed: create one in the app or log in with your BF Model account. The Android APK installs as an update over BF Model / Iron Making 5.2 and later.

## What is inside

**First page:** carbon footprint per tonne (CBAM mass balance) for BF, sinter, coke and pellet, and overall per tonne of pig iron · choose a section · know your inputs for all plants.

**Blast furnace (BF Model)**
- Data input, burden batch chemistry, burden calculator, 3D burden distribution, report
- Furnace 3D view, cohesive & melting zone, hearth liquid prediction
- BF cost optimiser (fuel rate, PCI, oxygen, cost of hot metal)
- Action plan against critical situations (42 situations, L1 / L2 / L3)
- Check your taphole (Yes/No check, corrections, cast log, 3D cutaways)
- Tuyere watch (peephole looks, diagnosis, log, leak checks)
- Know your water cooling requirement (heat load, flows, pumps, alarm limits)

**Sinter plant:** Sinter Predict (quality prediction from blend and machine settings) · Sinter critical decisions with 3D plant · How sinter is made (3D)

**Coke oven:** Coke Making (CSR, CRI, M40, M10, mass & heat balance) · Coke oven critical decisions with 3D battery · How coke is made (3D)

**Carbon footprint (CBAM):** per-plant direct and indirect CO₂ by mass balance, inputs by hand or from Excel / PDF / CSV.

## Repository layout

```
index.html        opens the app (GitHub Pages entry)
downloads/        Android APK and the no-install browser zip
desktop/          Windows / Mac shell (Electron) and icons
tools/            package_desktop.sh builds the desktop packages
.github/workflows release.yml publishes every package as a GitHub release
app/www/          Iron Making and BF Model pages
app/index.html    Sinter Predict
app/xco/          Coke Making
```

The browser version leaves out the Coke coal-blend optimiser (Python engine); use the Android app for it.

## Note

Values and limits are typical published ranges, not your plant's or OEM's design. Check them against your plant SOP. Plant data is kept on your device and backed up to the app owner's Google Drive.

© Niteen Kumar. All rights reserved.
