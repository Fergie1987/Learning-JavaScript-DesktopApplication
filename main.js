const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow 
const fs = require("fs");

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


function writeToFile(content) {
    fs.writeFile("./rungame/index.js", content, (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("File has been updated");
    });
    }
