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
   - 
4. Adding Features
5. Packaging Your Application
6. Publishing and Updating

#### Reference

- https://www.electronjs.org/
