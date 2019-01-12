const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow 
const fs = require("fs");
const nativeImage = require('electron').nativeImage;
var image = nativeImage.createFromPath(__dirname + '/public/assets/logoicon.ico')

let mainWindow
let childWindow 

function createWindow() { 
mainWindow = new BrowserWindow({width: 1600, height: 800, title: "Learning JavaScript Application", icon: image})

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

    function readFromFile() {
        var data = fs.readFileSync("./rungame/index.js", 'utf8');
        return data; 
    }