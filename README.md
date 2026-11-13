# Iron Making

**Blast furnace, sinter plant, coke oven and pellet plant tools in one app.**
Designed & developed by **Niteen Kumar**.

Iron Making is the update of the *BF Model* app. It works offline. Logins, files uploaded in the app, saved inputs and suggestions are backed up online to the app owner's Google Drive.

## Get it

| Device | How |
|---|---|
| **Android phone (free)** | [Download the APK](../../releases/latest) (`IronMaking-…-PHONE-INSTALL.apk`) and install it. It updates BF Model / Iron Making 5.2 and later. |
| **Windows 10 / 11, Mac, Office PC (no install)** | Paid, in rupees by UPI: open the Android app → **Download the app** → choose the version → pay → send the UPI reference number. After the payment is checked, the download is shared with your Google account. |

An account is needed: create one in the app or log in with your BF Model account.

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
downloads/        Android APK
desktop/, tools/  Windows / Mac shell (Electron) and packaging script
.github/workflows release.yml publishes the Android APK as a GitHub release
```

## Note

Values and limits are typical published ranges, not your plant's or OEM's design. Check them against your plant SOP. Plant data is kept on your device and backed up to the app owner's Google Drive.

© Niteen Kumar. All rights reserved.
