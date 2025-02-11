# Electron-App

Electron is a framework for building **desktop** applications using **JavaScript, HTML, and CSS**. By embedding **Chromium and Node.js** into its binary, Electron allows you to maintain one JavaScript codebase and create **cross-platform** apps that work on Windows, macOS, and Linux — no native development experience required.

## Tutorial

1. Prerequisites

   - Code editor: [Visual Studio Code](https://code.visualstudio.com/)
   - Command line:  
     Windows: Command Prompt or PowerShell  
     macOS: Terminal  
     Linux: varies depending on distributions
   - Git and GitHub: Create a [GitHub](https://github.com/) account and Install [Git](https://git-scm.com/)
   - Node.js and npm: Install [Node.js](https://nodejs.org/en/download/) with the latest long-term support (**LTS**) version

2. Building your First App
   1. Start App
   ```node
   mkdir my-electron-app && cd my-electron-app
   npm init
   npm run start
   ```
   2. Debugging from VS Code need to add `.vscode/launch.json` configuration
3. Using Preload Scripts
   - Preload scripts are injected before a web page loads in the renderer, similar to a Chrome extension's [content scripts](https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts).
   - Act as a secure bridge between the main process (Node.js) and the renderer process (browser environment).
   - Securely integrating Node.js capabilities, facilitating inter-process communication, and restricting direct access to sensitive resources.
4. Adding Features ([Tutorial](https://www.electronjs.org/docs/latest/tutorial/examples))
   1. Adding complexity to your renderer process' web app code
   2. Deeper integrations with the operating system and Node.js
5. Packaging Your Application  
   - **Electron Forge** is an all-in-one tool that handles the packaging and distribution of Electron apps. Under the hood, it combines a lot of existing Electron tools (e.g. [@electron/packager](https://github.com/electron/packager), [@electron/osx-sign](https://github.com/electron/osx-sign), [electron-winstaller](https://github.com/electron/windows-installer), etc.) into a single interface so you do not have to worry about wiring them all together.

   - Importing your project into **Forge**
   ```node
   npm install --save-dev @electron-forge/cli
   npx electron-forge import
   ```

   - Creating a distributable.  
   After the script runs, you should see an **out/make** folder containing both the distributable and a folder containing the packaged application code.
   ```node
   npm run make
   ```

   - **Signing Your Code**  
   Code signing is a security technology that you use to certify that a desktop app was created by a known source. Windows and macOS have their own OS-specific(config in `forge.config.js`) code signing systems that will make it difficult for users to download or launch unsigned applications.

6. Publishing and Updating

#### Reference

- https://www.electronjs.org/
