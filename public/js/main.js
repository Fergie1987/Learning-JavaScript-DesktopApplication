const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const fs = require("fs");
const nativeImage = require('electron').nativeImage;
var image = nativeImage.createFromPath(__dirname + '/../assets/logoicon.ico')

let mainWindow
let childWindow

//configuration for creating the electron application window.
function createWindow() {
    const {
        width,
        height
    } = electron.screen.getPrimaryDisplay().workAreaSize
    mainWindow = new BrowserWindow({
        width,
        height,
        title: "Learning JavaScript Application",
        icon: image
    })
    mainWindow.maximize()
    mainWindow.loadURL('http://localhost:3000/')

    mainWindow.on('closed', function() {
        mainWindow = null
    })
}

app.on('ready', createWindow)

//fs module for writing code to the index.js file when executing code. 
function writeToFile(content) {
    fs.writeFile("./public/js/index.js", content, (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("File has been updated");
    });
}

//fs module for reading in code from the index.js file. 
function readFromFile() {
    var data = fs.readFileSync("./public/js/index.js", 'utf8');
    return data;
}

//starter box2D code when launching the tutorial - code loads into the code mirror editor.
function readBox2Dcode() {
    var data = fs.readFileSync("./public/js/box2dstartingcode.js", 'utf8');
    return data;   
}