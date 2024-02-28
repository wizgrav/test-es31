const { app, BrowserWindow, Menu, MenuItem } = require('electron')

app.commandLine.appendSwitch('enable-webgl2-compute-context');

app.commandLine.appendSwitch('use-angle','vulkan');

app.commandLine.appendSwitch('use-cmd-decoder','passthrough');

app.commandLine.appendSwitch('use-gl','angle');

app.commandLine.appendSwitch('force_high_performance_gpu');

let win;

function createWindow () {
    
    win = new BrowserWindow({
        width: 1280,
        height: 1024,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadURL('https://9ballsyndrome.github.io/WebGL_Compute_shader/')
}

const menu = new Menu()

menu.append(new MenuItem({
  label: 'Go Back',
  accelerator: process.platform === 'darwin' ? 'Alt+Cmd+B' : 'Alt+Shift+B',
  click: () => { win.webContents.goBack() }
  
}))

menu.append(new MenuItem({
    label: 'Devtools',
    accelerator: process.platform === 'darwin' ? 'Alt+Cmd+D' : 'Alt+Shift+D',
    click: () => { win.webContents.openDevTools() }
    
  }))

Menu.setApplicationMenu(menu)

app.whenReady().then(createWindow)