const { app, BrowserWindow } =  require('electron');
const WinState = require('electron-win-state').default;
const path = require('path');


const createWindow = () => {
    const winState = new WinState({
       defaultWidth: 1000,
       defaultHeight: 800
    });
    const win = new BrowserWindow({
        ...winState.winOptions,
        webPreferences: {
            preload: path.resolve(__dirname, './preload/index.ts')
        },
        show: false
    });
    win.loadURL("http://localhost:5173");

    win.webContents.openDevTools();
    winState.manage(win);
    win.on('ready-to-show', () => {
        win.show();
    })
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
