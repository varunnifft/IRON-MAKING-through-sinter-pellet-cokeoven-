# Iron Making

**Blast furnace, sinter plant, coke oven and pellet plant tools in one app.** Android · Windows · Mac · iPhone / iPad (coming soon) · Office PC.
Designed & developed by **Niteen Kumar**.

Iron Making is the update of the *BF Model* app. It works offline. Logins, files uploaded in the app, saved inputs and suggestions are backed up online to the app owner's Google Drive.

## Get it (free)

Download only from the **[latest release](../../releases/latest)**, the website, Google Play or the App Store.

| Device | How |
|---|---|
| **Android phone** | [Google Play](https://play.google.com/store/apps/details?id=com.bfburdenmodel.ironmaking), or `IronMaking-…-PHONE-INSTALL.apk` from the [latest release](../../releases/latest). It updates BF Model / Iron Making 5.2 and later. |
| **Windows 10 / 11** | `IronMaking-…-Windows-Setup.exe` from the [latest release](../../releases/latest) |
| **Mac** | `IronMaking-…-Mac-AppleSilicon.zip` (M1–M4) or `…-Mac-Intel.zip` from the [latest release](../../releases/latest) |
| **iPhone, iPad & Mac App Store** | Coming soon. Until then, use the [install page](https://varunnifft.github.io/IRON-MAKING-through-sinter-pellet-cokeoven-/www/install.html) (Safari → Share → Add to Home Screen) |
| **Office PC (no install)** | `IronMaking-…-Browser-NoInstall.zip` from the [latest release](../../releases/latest) |

An account is needed: create one in the app, or log in with your BF Model account.

### Is my download genuine?

Every release file is built and published by this repository's GitHub workflow, and the release comes with proof:

* **`SHA256SUMS.txt`**: compare it with your file. On Windows, run `certutil -hashfile <file> SHA256`; on Mac / Linux, run `shasum -a 256 <file>`.
* **GitHub attestation**: run `gh attestation verify <file> -R varunnifft/iron-making-through-sinter-pellet-cokeoven-`.
* **Android release certificate** (CN=Iron Making), SHA-256: `ed4eeab2b31927d7e9c017b9f0768bbc825bf8cf9124218b54ef3d1f63d9d1cd`. A modified copy signed by anyone else cannot install as an update over the genuine app.

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
app/, www/        the app pages (the same pages are in the Android, Windows, Mac and Apple apps)
downloads/        Android App Bundle (.aab), Windows Setup.exe, Office-PC zip
desktop/, tools/  Windows / Mac shell (Electron) and packaging script
apple/            iPhone / iPad + Mac App Store app (see APPLE-APP-STORE.md)
.github/workflows release.yml: signed GitHub release · apple-appstore.yml: App Store upload
```

## Publishing a release (owner only)

The phone APK is signed on GitHub with the Iron Making release key. The key is kept in **encrypted repository secrets** and never stored in the repo. Add it once under **Settings → Secrets and variables → Actions**:

| Secret | Value |
|---|---|
| `ANDROID_KEYSTORE_B64` | the release keystore (.jks) as base64. In PowerShell: `[Convert]::ToBase64String([IO.File]::ReadAllBytes("release.jks"))` |
| `ANDROID_KEYSTORE_PASSWORD` | keystore password |
| `ANDROID_KEY_ALIAS` | key alias |
| `ANDROID_KEY_PASSWORD` | key password (if it is the same as the keystore password, you can leave this empty) |

Then go to **Actions → Publish Iron Making → Run workflow** (version, for example `6.3.9`). The workflow stops, and publishes nothing, if the APK is not signed with the Iron Making certificate.

## Website

- Home page: https://varunnifft.github.io/IRON-MAKING-through-sinter-pellet-cokeoven-/
- Privacy policy: https://varunnifft.github.io/IRON-MAKING-through-sinter-pellet-cokeoven-/privacy.html
- Terms of service: https://varunnifft.github.io/IRON-MAKING-through-sinter-pellet-cokeoven-/terms.html

## Copyright and licence

**© 2024–2026 Niteen Kumar. All rights reserved.** You may install and use Iron Making free of charge. You may **not** copy, modify, rename, rebrand, republish or sell it, or use its code, models or data in other products, without written permission. See [LICENSE](LICENSE). Being able to view the code here does not make it open source.

## Note

Values and limits are typical published ranges, not your plant's or OEM's design. Check them against your plant SOP. Plant data is kept on your device and backed up to the app owner's Google Drive.

© Niteen Kumar. All rights reserved. Contact: varunnifft@gmail.com
