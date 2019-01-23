const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow 
const fs = require("fs");
const nativeImage = require('electron').nativeImage;
var image = nativeImage.createFromPath(__dirname + '/../assets/logoicon.ico')

let mainWindow
let childWindow 


function createWindow() { 
const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize    
mainWindow = new BrowserWindow({width, height, title: "Learning JavaScript Application", icon: image})

mainWindow.loadURL('http://localhost:3000/')

mainWindow.on('closed', function() {
mainWindow = null
})
}  

app.on('ready', createWindow) 



function writeToFile(content) {
    fs.writeFile("./public/js/index.js", content, (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("File has been updated");
    });
    }

    function readFromFile() {
        var data = fs.readFileSync("./public/js/index.js", 'utf8');
        return data; 
    }