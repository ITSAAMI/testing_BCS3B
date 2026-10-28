# Lab 01 Instructor Guide: Introduction to React Native and Flutter

**Course:** Mobile Application Programming
**Deck:** `Lab01_Intro_to_React_Native_and_Flutter.pptx` (21 slides, speaker notes on every slide)
**Checked:** 28 October 2026

## Lab goal

By the end of Lab 01 every student should:

1. Explain native vs cross-platform development.
2. Compare React Native (JavaScript/TypeScript) and Flutter (Dart), and know why this course uses React Native.
3. Recognise components, JSX, props, state, and basic styling.
4. Know which JavaScript topics to revise (already covered in earlier classes).
5. Know what to install, and have **Hello World running on a phone (Expo Go) or an Android emulator**.

## Suggested timing (about 2 h 45 min)

| Part | Slides | Time | Notes |
|---|---|---|---|
| Introduction | 1 | 5 min | Explain the four colored tags (Theory, Installation, Practical, Lab Activity). |
| Theory: mobile development, React Native vs Flutter | 2–5 | 25 min | Keep it conceptual. Don't argue which tool is "better". |
| Theory: components, JSX, props, state, styling | 6–8 | 20 min | Students only read these examples. They don't type them today. |
| JavaScript revision | 9–10 | 10 min | Quick revision only. These topics were covered in earlier classes. |
| Installation checklist and Steps 1–2 | 11–12 | 15 min | Much faster if students install Node.js and VS Code before class. |
| Practical Steps 3–10 | 13–18 | 60 min | Most of the lab time goes here. Walk around and help. |
| Lab activities and questions | 19–20 | 25 min | Sign off each student's working app. |
| Wrap-up | 21 | 5 min | Share the documentation links. |

## Before the lab (instructor checklist)

- [ ] Run Steps 3–10 yourself on a lab computer the week before, with a phone and with the emulator.
- [ ] **Check the campus Wi-Fi.** Many campus networks block phone-to-laptop traffic, so Expo Go cannot connect. Have a backup ready: a phone hotspot, or `npx expo start --tunnel`.
- [ ] Ask students to install **Node.js LTS** and **VS Code** at home, and to create a free **Expo account** at https://expo.dev/signup (iPhone users must).
- [ ] On Windows lab computers, check that PowerShell allows npm scripts, or tell students to use Command Prompt (see "Common problems").
- [ ] Make sure laptops have free disk space. A new Expo project installs about 650 MB of packages (`node_modules`).
- [ ] The Android Emulator can be slow on older laptops. For this lab, prefer Expo Go on a phone.

## Recent changes to know (October 2026)

These changes make many older tutorials and videos wrong. The deck already reflects them.

1. **Screens live in `src/app/`, not `app/`.** Since Expo SDK 55, the default template keeps screens in `src/app/`. After `npm run reset-project`, the home screen is `src/app/index.tsx`.
2. **`create-expo-app` asks for an SDK version.** The current tool shows a "Select an Expo SDK version" menu. When the Expo Go app in the stores is behind the newest SDK, the menu adds a **"For learning with Expo Go"** option. Expo SDK 58 came out on 15 October 2026, and Expo said its Expo Go store release would follow within a few weeks. Until then, students using a phone should pick **"For learning with Expo Go"**. If that option doesn't appear, "Latest" already works with Expo Go.
3. **Expo Go on iPhone needs sign-in.** Since September 2026, a physical iPhone must be signed in to the **same Expo account** in Expo CLI (`npx expo login`) and in the Expo Go app. Android, the emulator, and the iOS Simulator don't need it yet, but Expo recommends signing in.
4. **Node.js LTS is changing over.** Node.js 26 becomes the LTS line in late October 2026, and Node.js 24 is still supported. Expo's current packages accept Node `^22.13`, `^24.3`, or `^26`. Tell students to install whatever version nodejs.org labels **LTS**.
5. **No global Expo install.** `create-expo-app` and the Expo CLI run through `npx`. Students should not install the old global `expo-cli` package.

## Teaching tips per section

- **Slides 2–4 (theory):** Ask "Which apps on your phone are native?" Students usually can't tell, which is the point of cross-platform tools.
- **Slides 6–8 (React Native basics):** Point out that the Hello World code on slide 16 uses exactly these ideas: a component, JSX, `<View>`, `<Text>`, and `StyleSheet`.
- **Slide 7 note:** In a `.tsx` file, TypeScript underlines `props` in `function Greeting(props)` and asks for a type. That's expected, and students don't type this example today. The typed version is `function Greeting({ name }: { name: string })`.
- **Slides 9–10 (JavaScript):** Don't re-teach. Ask two or three quick questions (see the speaker notes) and move on.
- **Slide 13:** Have students type the commands one at a time and wait for each `✅` line before the next.
- **Slide 17:** The small "index" header at the top of the app is normal. It comes from the `<Stack />` in `src/app/_layout.tsx`. Fast students can hide it with `<Stack screenOptions={{ headerShown: false }} />`.

## Common problems in the lab

| Problem | Fix |
|---|---|
| `'node' is not recognized` / `command not found` | Install Node.js LTS, then close and reopen the terminal (or restart the laptop). |
| PowerShell: "running scripts is disabled on this system" | Use Command Prompt, or run `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` once. |
| Phone stuck on loading / can't connect | Use the same Wi-Fi on phone and laptop, turn off VPN, try a hotspot, or run `npx expo start --tunnel` (accept the helper package it asks to install). |
| "Project is incompatible with this version of Expo Go" | Update Expo Go, or recreate the project and pick "For learning with Expo Go". |
| "You need to be signed in to Expo Go and Expo CLI" | `npx expo login`, then sign in to Expo Go with the same account. |
| "No Android connected device found…" after pressing `a` | Start a virtual device in Android Studio's Device Manager first. |
| Red error screen (SyntaxError) | Read the file name and line. Usually a missing `</View>`, bracket, quote, or comma. |
| Changes don't appear | Save the file. Press `r` in the Expo terminal to reload. |
| "Port 8081 is running this app in another window" | Stop the other Expo terminal with Ctrl+C, or press Y to use another port. |

## Activity 2 solution

Students show their own name and university. Solution file: [`code/activity-2-solution/index.tsx`](code/activity-2-solution/index.tsx)

```tsx
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  const studentName = "Your Name";
  const university = "Your University";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <Text style={styles.info}>Name: {studentName}</Text>
      <Text style={styles.info}>University: {university}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  info: {
    fontSize: 18,
    marginTop: 8,
  },
});
```

## Answer key: five questions (slide 20)

1. **Native vs cross-platform:** Native development writes separate code for each platform (Kotlin/Java for Android, Swift for iOS). Cross-platform development uses one codebase for both Android and iOS.
2. **Languages:** React Native uses JavaScript or TypeScript (with React). Flutter uses Dart.
3. **Props vs state:** Props are data passed into a component by its parent, and the component only reads them. State is data a component keeps and can change. Changing state updates the screen.
4. **Start command:** `npx expo start`
5. **Home screen file:** `src/app/index.tsx`

## Sign-off (per student)

- [ ] `node -v` and `npm -v` show version numbers
- [ ] Hello World runs on a phone (Expo Go) or Android emulator
- [ ] Activity 2: name and university appear on screen
- [ ] Questions 1–5 answered in the notebook

## How this lab was checked

- On 28 October 2026, the full flow ran in a clean Linux environment: `npx create-expo-app@latest HelloWorld`, then `npm run reset-project`, then the Hello World and Activity 2 code. This used create-expo 5.1.5 with the Expo SDK 58 default template (React Native 0.88). Both files passed the TypeScript check and rendered in Expo's web preview. The screenshots on slides 17 and 19 come from that run.
- The SDK 57 template was also downloaded and compared. It has the same `src/app` layout and the same reset script.
- The sign-in rule, the SDK menu, the terminal messages and the key shortcuts were checked against the current `create-expo` and `@expo/cli` packages and Expo's changelog.
- **Not tested here:** a physical phone and the Android Emulator, because the test environment has neither. Run those once yourself before the lab.

## Official documentation

- React Native, Get Started: https://reactnative.dev/docs/getting-started
- React Native, Core Components and Native Components: https://reactnative.dev/docs/intro-react-native-components
- Expo, Create a project: https://docs.expo.dev/get-started/create-a-project/
- Expo, Set up your environment: https://docs.expo.dev/get-started/set-up-your-environment/
- Expo, Android Studio Emulator: https://docs.expo.dev/workflow/android-studio-emulator/
- Expo Go sign-in error: https://docs.expo.dev/troubleshooting/expo-go-sign-in-required/
- Expo Go: https://expo.dev/go
- Node.js download: https://nodejs.org/en/download
- VS Code: https://code.visualstudio.com/download
- Android Studio: https://developer.android.com/studio
- Flutter docs: https://docs.flutter.dev/
- MDN JavaScript Guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
