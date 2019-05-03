# Learning-JavaScript-DesktopApplication

## Building the Application: 

Node.js and npm (Node Package Manager) are required and should be installed before following the instructions below. Both can be downloaded and installed from: https://nodejs.org/en/

Open a new command prompt/terminal window

git clone https://github.com/Fergie1987/Learning-JavaScript-DesktopApplication.git

cd Learning-JavaScript-DesktopApplication

To install the node packages use the command: npm install
(Linux command to enable the package download: npm config set strict-ssl false).

Global electron Installation: npm install -g electron-prebuilt

Note: For global Linux installations, ensure the user has permission to update the node_modules folder, example command: sudo chown -R $USER "location_of_directory"  

To start the server, open a new command prompt/terminal window, cd into the Learning-JavaScript-DesktopApplication folder and then use the command: node app.js

To run new instances of the desktop application, open new command prompt/terminal windows, cd into the Learning-JavaScript-DesktopApplication folder and then use the command: npm start 

Create more than 1 application instance to use the applications live code sharing functionality.  

Running Linux operating systems within Virtual Box: If the page elements do not appear after launching the application, this is a known web browser issue. To resolve, within the package.json file on the "start" line, add: --disable-gpu after electron . ("start": "electron . --disable-gpu").    

# Learning JavaScript Desktop Application Description 

This educational application was developed using the cross platform desktop application framework Electron (Chromium and Node.js), version 1.4.13. 

The purpose of this desktop application is to teach students new problem solving and JavaScript programming skills. Tutorials are used by the students to support learning. The code mirror embedded editor enables students to practice their new coding skills. JavaScript code can be run within the application and the output is displayed within a new electron window. Console.log outputs display within the new window to assist with code debugging.   

A benefit to communication provided within this application is the live code sharing functionality. A student can send a code sharing request to a lecturer if they require tutorial or coding assistance. If the request is accepted, the student and lecturer can communicate through private instant messages and code simultaneously within their own code editors. Code sharing sessions can be disconnnected by either user at any time with a message being sent to the other user when this action occurs.  

The main menu has three options available: 

1: Introduction to the Application and Box2D Video (35 minute screen recording video - Hosted on YouTube)

2: Tutorials 

3: Development and Communication. 

The application pages are all hosted on an Express Node.js Server. JQuery was the JavaScript Library used within this application.

The BootStrap CSS Library was included to enable responsive application pages. 

## Section 1: Application Overview
35 minute screen recording video to provide users with an overview of the application functionality.  

This video is hosted on YouTube and was embedded within the application.  

## Section 2: Tutorials
YouTube hosted videos and text tutorials are included to teach the students how to code using JavaScript. The Box2D physics engine JavaScript library was included to enable games to be created within the application. The application provides the option to launch the developed code within a new Electron window. If a student requires live coding assistance, they can check if a lecturer is available and online and then send a code sharing request. If the request is accepted, both users can communicate through instant messaging, code simultaneously using the code sharing functionality and run the JavaScript code within a new electron window within their own instance of the application. 

The FS node module was used to access the file system of the computer, this enables access to update and be read from the index.js file (the index.js file is required for the JavaScript and Box2D game logic). 

## Section 3: Development and Communication Area

This was included within the application to provide users with an area to: 
1. Develop code for weekly assignments and assessments. 
2. Contact other users and discuss JavaScript coding challenges. 
3. Connect code editors and code share to resolve coding issues. 

## Code Sharing Functionality

The event based node.js communication library socket.io was used for server communication and for sending data between connected users. 

Users submit their name to use the instant messaging and code sharing functionality. The entered name is stored on the server and used to send and receive instant messages and JavaScript code.   

Application users can decline code sharing requests. Dialog confirm messages are provided to accept or decline requests. A message is returned to the other user to inform when the code sharing invitation has been accepted or declined.

If users are within different sections of the application (for example: The student is working on a tutorial and the lecturer is using the Development and Communication area), the code sharing functionity continues to operate as expected. 

## Winston Server Logging 

Server logs including errors are held within the public/logs folder. The winston.js config file was set up to save express server logs and error messages within the folder public/logs/app.logs. The data and time of the log is added to the log/error message. 

This provides an improved level of logging from the running server and assists with the debugging of application errors. 

Logs can be output to the console using Winston. This method is available and can be used by removing the JavaScript comment tags within the Winston config file. 

## Jest Automated Testing

Automated tests were created using the Jest testing library. These automated tests are saved within the file app.test.js. Unit and integration tests are included within this test file. 

The created tests are run by using this command from the home directory: npm test

## Completing the Project, Packaging the Electron Application

The electron-packager module can be run to package the application files to create an .exe file. The application logo is also included (replaces the default electron logo). 

The module should be installed globally using the command: npm install -g electron-packager 

The commands for the target operating systems are below and are run from the terminal - within the home directory of the application. 

Once packaging is complete, the .exe file is created within a new file. The application is run by double clicking on the .exe file.

The asar flag is included to hide the application files. Users can access application files if this flag was not included. 

## Windows Command: 
```
electron-packager --electron-version=1.4.13 --overwrite --asar --platform=win32 --arch=x64 --icon=public/assets/logoicon.ico .
```
## Linux Command: 
```
electron-packager --electron-version=1.4.13 --overwrite --asar --platform=linux --arch=x64 --icon=public/assets/logoicon.ico .
```
## MacOS
```
electron-packager --electron-version=1.4.13 --overwrite --asar --platform=darwin --arch=x64 --icon=public/assets/logoicon.ico .
``` 
