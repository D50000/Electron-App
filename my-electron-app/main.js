const { app, BrowserWindow } = require("electron/main");
// Electron follows typical JavaScript conventions here, where PascalCase modules are instantiable class constructors (e.g. BrowserWindow, Tray, Notification)
// whereas camelCase modules are not instantiable (e.g. app, ipcRenderer, webContents).
const path = require('node:path')

/**
 * The function loads your web page into a new BrowserWindow instance.
 */
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile("index.html");
};

/**
 * App lifecycle: Open a window if none are open (macOS).
 * To implement this feature, listen for the app module's activate event, and call your existing createWindow() method if no BrowserWindows are open.
 * Because windows cannot be created before the ready event, you should only listen for activate events after your app is initialized. Do this by only listening for activate events inside your existing whenReady() callback.
 */
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

/**
 * App lifecycle: Quit the app when all windows are closed (Windows & Linux).
 * On Windows and Linux, closing all windows will generally quit an application entirely.
 * listen for the app module's window-all-closed event, and call app.quit() to exit your app if the user is not on macOS.
 */
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
