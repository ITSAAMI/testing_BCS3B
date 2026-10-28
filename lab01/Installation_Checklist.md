# Lab 01 Installation Checklist

Print this page or copy it into your notebook. Tick each box when the item is installed **and working**.

## Required (recommended beginner setup)

| ✓ | Tool | What it is for | Get it |
|---|---|---|---|
| ☐ | Laptop with Windows, macOS, or Linux | Where you write, run, and test your code. | — |
| ☐ | Node.js **LTS** + npm | Node.js runs JavaScript tools on your laptop. npm comes with it and installs packages. | https://nodejs.org/en/download |
| ☐ | Visual Studio Code | The free code editor we use to write the app. | https://code.visualstudio.com/download |
| ☐ | Expo tools (`create-expo-app` + Expo CLI) | Create and run your React Native project. They run with `npx`, so there's nothing extra to install. | https://docs.expo.dev/get-started/create-a-project/ |
| ☐ | Internet connection | Needed to download the tools and your project's packages (about 650 MB per project). | — |

## Optional

| ✓ | Tool | What it is for | Get it |
|---|---|---|---|
| ☐ | Expo Go app on your phone | Opens your app on a real Android phone or iPhone by scanning a QR code. | https://expo.dev/go |
| ☐ | Free Expo account | Required for Expo Go on an iPhone, recommended on Android. | https://expo.dev/signup |
| ☐ | Android Studio + Android Emulator | Runs a virtual Android phone on your laptop. | https://developer.android.com/studio · [Expo guide](https://docs.expo.dev/workflow/android-studio-emulator/) |
| ☐ | Git + GitHub | Saves versions of your code online. | https://git-scm.com/downloads · https://github.com |

> **You need at least one way to run your app:** Expo Go on a phone, **or** the Android Emulator.

## Check that it works

Open a **new** terminal (Windows: Command Prompt or PowerShell, macOS: Terminal) and type:

```bash
node -v
npm -v
```

- ☐ Both commands print a version number (for example `v24.x.x` and `11.x.x`; your numbers may differ).
- ☐ If you see "not recognized" or "command not found", reinstall Node.js and open a new terminal.

## Ready-for-lab check

- ☐ I can open VS Code.
- ☐ `node -v` and `npm -v` work in a new terminal.
- ☐ Expo Go is installed on my phone **or** I can start an Android emulator.
- ☐ iPhone users: I have a free Expo account and know my password.
- ☐ My phone and laptop can join the same Wi-Fi network.

## Do NOT

- Don't install the old global `expo-cli` package. Use `npx create-expo-app` and `npx expo`.
- Don't pick the "Current" Node.js version. Pick the one labelled **LTS**.
