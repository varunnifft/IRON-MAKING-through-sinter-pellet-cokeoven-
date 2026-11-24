# Iron Making 6.3.9 for the Apple App Store (iPhone, iPad, Mac)

Designed & developed by **Niteen Kumar**.

This package adds the Apple version of Iron Making to the website repository. It contains:

* **iPhone / iPad app** (iOS 15 or newer)
* **Mac app** for MacBook and iMac (macOS 13 Ventura or newer, Apple Silicon and Intel)

It is one App Store listing with one bundle ID (`com.bfburdenmodel.ironmaking`), so a user who gets it on the iPhone also sees it on the Mac.

Both apps use the **same pages as the Android 6.3.9 app** (the `app/` folder of this repo). All the BF, sinter, coke, pellet, carbon, blow-in / blow-down and learning pages work offline. You do not need a Mac: GitHub's cloud Macs build and upload the apps.

## What is in the zip

| Path | What it is |
|---|---|
| `apple/project.yml` | Xcode project description (XcodeGen). Version 6.3.9, build numbers start after 184 |
| `apple/Sources/*.swift` | The native app: offline page server, print / Save as PDF, Save to Files / Share for Excel & CSV, alerts, Mac menu (Go ▸ BF Model, Sinter, Coke …, ⌘1–⌘9) |
| `apple/Resources/` | NK app icons (iPhone/iPad and Mac sizes), launch colour, Apple privacy manifest |
| `apple/ExportOptions.plist` | App Store signing + upload settings |
| `.github/workflows/apple-appstore.yml` | Builds both apps on a GitHub Mac and uploads them to App Store Connect |
| `index.html`, `www/install.html` | Website: new **"iPhone, iPad & Mac (App Store)"** button and card (shows "Coming soon" until you paste the App Store link) |

Unzip it into the **root of the website repository**, so `apple/` sits next to `app/`, then commit and push.

## Step 1: Apple Developer account (one time)

1. In India, enrolment is only possible from the **Apple Developer app** on an iPhone or iPad. Install it, sign in with your Apple Account (two-factor on), then tap **Enroll now** as an *Individual*.
2. The fee is **US $99 a year**. In India it is shown as about **₹8,700 a year**.
3. Wait for the confirmation e-mail. It usually takes 1–2 days.

## Step 2: Create the app in App Store Connect

1. Open https://appstoreconnect.apple.com and go to **Apps → + → New App**.
2. Tick **iOS** and **macOS**. Name: `Iron Making`. Primary language: English. Bundle ID: `com.bfburdenmodel.ironmaking`. If the bundle ID is not in the list, run the workflow once (Step 4) and it registers it. SKU: `ironmaking`.
3. Go to **Users and Access → Integrations → App Store Connect API → +**. Name the key `GitHub`, role **Admin**, and download the `.p8` file. You can download it only once. Note the **Key ID** and the **Issuer ID**.
4. Go to developer.apple.com → **Membership** and note your **Team ID** (10 characters).

## Step 3: Add 4 secrets in GitHub

Go to the repo → **Settings → Secrets and variables → Actions → New repository secret**:

| Name | Value |
|---|---|
| `APPLE_TEAM_ID` | Team ID |
| `ASC_KEY_ID` | Key ID |
| `ASC_ISSUER_ID` | Issuer ID |
| `ASC_KEY_P8` | Open the .p8 in Notepad and paste the whole text, including the BEGIN / END lines |

## Step 4: Build and upload

Go to GitHub → **Actions → "Apple App Store (iPhone, iPad, Mac)" → Run workflow** (both, upload ✔). It takes about 15–25 minutes.

* With no secrets, it only checks that both apps compile. That is a good first run.
* With the secrets, it signs and uploads both apps. After 10–30 minutes they appear in App Store Connect → **TestFlight**.
* Install **TestFlight** on your iPhone / Mac and test before you submit.

## Step 5: Fill in the store page and submit

**Subtitle:** Blast furnace, sinter, coke & pellet

**Promotional text:** BF Model is now Iron Making: burden calculations, 3D furnace views, sinter and coke prediction, CBAM carbon footprint and a learning module. Works offline.

**Description:**
Iron Making (formerly BF Model) is a working tool and training app for iron and steel plant engineers. It covers the whole route, from raw materials to sinter, pellet and coke, and finally hot metal from the blast furnace.

- Blast furnace: data input, burden chemistry, burden calculator, 3D burden distribution, furnace inside, cohesive zone, hearth liquid prediction, cost optimiser, critical situation action plan, taphole check, tuyere watch, cooling water requirement
- BF blow-in / blow-down planner
- Sinter plant: Sinter Predict, critical decisions with 3D plant, how sinter is made
- Coke oven: coke quality (CSR, CRI, M40, M10), mass & heat balance, critical decisions with 3D battery
- Carbon footprint (CBAM): CO₂ per tonne for BF, sinter, coke and pellet, by mass balance
- Learning module with practice and exams
- Import from Excel, PDF or CSV. Export reports as PDF and Excel.

Values and limits are typical published ranges. Check them against your plant SOP.
Designed & developed by Niteen Kumar.

**Keywords:** blast furnace,sinter,coke oven,pellet,iron making,steel plant,burden,CBAM,carbon,metallurgy

**Category:** Education (secondary: Productivity)
**Price:** Free. No in-app purchases.
**Support URL / Marketing URL:** https://varunnifft.github.io/IRON-MAKING-through-sinter-pellet-cokeoven-/
**Privacy policy URL:** https://varunnifft.github.io/IRON-MAKING-through-sinter-pellet-cokeoven-/privacy.html
**Copyright:** © 2026 Niteen Kumar
**Age rating:** answer "None" to everything (4+)

**App Privacy** (questions in App Store Connect): Data collected: *Name, Email address, Phone number, Other user content*. All are linked to the user, used for **App functionality**, and **not** used for tracking.

**Screenshots:** iPhone 6.9″ (1320 × 2868) and iPad 13″ (2064 × 2752). For the Mac, use 2880 × 1800. Take them in TestFlight: home page, BF Model, 3D furnace, Sinter Predict, Carbon.

**App Review notes** (put a working test login in "Sign-in required"):
> Iron Making is a calculation and training tool for blast furnace, sinter, coke oven and pellet plant engineers. All calculators, 3D views and reference data are inside the app and work offline. An account is needed only to save and back up the user's own inputs. Test login: ID ______ / password ______. Users can delete their account in the app from Profile → Delete my account.

## Checks before you submit (App Review rules)

1. **Google sign-in is hidden in the Apple app.** Apple's rule 4.8 says an app that offers Google login must also offer Sign in with Apple. So the Apple build shows only login ID / password and the e-mail code login. If you add Sign in with Apple to the server later, set `hideGoogleSignIn = false` in `apple/Sources/WebModel.swift`.
2. **Account deletion (rule 5.1.1).** Apple must be able to delete an account from inside the app. The Sinter module has **Delete my account**. Make sure the main Iron Making profile page also has it, or that the Sinter one deletes the same account. If not, add it before you submit.
3. **Demo account.** Create a test login that the reviewer can use. Reviews are rejected without one.
4. **Everything free.** `pay-config.js` has payments off and `licence-gate.js` treats the Apple app as free, like Android. Do not switch on Razorpay inside the Apple app: Apple allows only its own in-app purchase for digital features.
5. **Ads.** The AdMob banner runs only inside the Android app. The Apple app shows no ads.

## How it behaves

| Action in a page | iPhone / iPad | Mac |
|---|---|---|
| Print / Save PDF | iOS print sheet (share icon → Save to Files as PDF) | Print dialog (PDF ▸ Save as PDF) |
| Download Excel / CSV / template | Share sheet: Save to Files, Mail, WhatsApp | Save panel (Downloads by default) |
| Upload Excel / PDF / CSV | Files / Photos picker | Open panel |
| Web links, Google Drive, mail | Safari / Mail | Default browser / Mail |
| Back | Swipe from the left edge | ⌘[ or Go ▸ Back |
| Sinter / Coke pages | "⌂ Iron Making" button bottom-right | Same, plus Go menu ⌘2 / ⌘3 |

Logins and saved inputs stay on the device. The Apple app does not share them with the Android or Windows app, but cloud backup works the same way.

## When you release a new version

1. Update the `app/` folder (as you do for the APK).
2. In `apple/project.yml`, change `MARKETING_VERSION` (for example `"6.4.0"`).
3. Run the workflow, then add the new build to a new version in App Store Connect and submit it.

After Apple approves the app, copy its link (App Store Connect → App Information → Apple ID → `https://apps.apple.com/app/id<number>`). Paste it in `www/install.html` at `var APP_STORE_URL = ''`. The website button then changes from "Coming soon" to **Download on the App Store**.
