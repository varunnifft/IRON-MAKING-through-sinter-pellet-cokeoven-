# Iron Making

**Blast furnace, sinter plant, coke oven and pellet plant tools in one app.**
Designed & developed by **Niteen Kumar**.

Iron Making is the update of the *BF Model* app. It works offline, keeps plant data on the device, and needs no subscription.

## Use it

| Where | How |
|---|---|
| **In the browser (no install)** | Open the web app: `https://varunnifft.github.io/IRON-MAKING-through-sinter-pellet-cokeoven-/` (works in Edge or Chrome on any PC, laptop or phone) |
| **Android phone** | Download `IronMaking-5.8-v127-PHONE-INSTALL.apk` from [Releases](../../releases) and install it, or get *BF Model* on Google Play |
| **Office PC that blocks installs** | Download `IronMaking-5.8-Browser-NoInstall.zip` from [Releases](../../releases), extract it and open **Start Iron Making.html** |
| **Windows 10 / 11** | `IronMaking-5.8-Windows-x64.zip` from [Releases](../../releases): extract and run **Iron Making.exe** |
| **Mac** | `IronMaking-5.8-Mac-AppleSilicon.zip` (M1–M4) or `IronMaking-5.8-Mac-Intel.zip`: unzip, drag to Applications, first time use *System Settings → Privacy & Security → Open Anyway* |

Log in with your BF Model account, or choose **Continue without an account**.

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
app/www/          Iron Making and BF Model pages
app/index.html    Sinter Predict
app/xco/          Coke Making
```

The browser version leaves out the Coke coal-blend optimiser (Python engine); use the Android app for it.

## Note

Values and limits are typical published ranges, not your plant's or OEM's design. Check them against your plant SOP. Plant data you enter stays on your device.

© Niteen Kumar. All rights reserved.
