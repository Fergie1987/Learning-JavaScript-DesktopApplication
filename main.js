const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow 

let mainWindow
let childWindow 

function createWindow() { 
mainWindow = new BrowserWindow({width: 1200, height: 600})
//childWindow = new BrowserWindow({width: 600, height: 300})  

mainWindow.loadURL(`file://${__dirname}/index.html`)

mainWindow.on('closed', function() {
mainWindow = null
})
}  

app.on('ready', createWindow) 