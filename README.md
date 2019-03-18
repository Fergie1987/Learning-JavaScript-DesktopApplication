# Learning-JavaScript-DesktopApplication

## Building the Application: 

git clone https://github.com/Fergie1987/Learning-JavaScript-DesktopApplication.git

cd Learning-JavaScript-DesktopApplication

To install the node packages use the command: npm install

Global electron Installation: npm install -g electron-prebuilt

Note: For global Linux installations, ensure the user has permission to update the node_modules folder, example command: sudo chown -R $USER "directory"  

Open a command prompt window and start the server: node app.js

Open new command prompt windows and cd in to Learning-JavaScript-DesktopApplication to run new instances of the desktop application. 
The command to create each desktop application instance is: npm start

Note: Create more than 1 instance of the application to use the live code sharing functionality.  

Note for Linux operating systems, if the application does not launch, within the package.json file on the "start" line, please add --disable-gpu after electron . ("start": "electron . --disable-gpu")    

# Learning JavaScript Desktop Application Description 

This educational application has been developed using the Electron JavaScript framework (Chromium and Node.js), version 1.4.13. 

The application purpose is to teach students new JavaScript coding skills. Tutorials are included for the students to follow with a code mirror embedded editor available for students to practice their new coding skills. The added code can be run within the application with the output being shown within a new electron window. The console.log output also displays within the new window to assist with code debugging.  

The main benefit offered by using this application is the live code sharing functionality. If the student requires tutorial or coding assistance, a lecturer can be sent a code sharing request. If the request is accepted, the student and lecturer can communicate through private instant messages and code together within their own code editors. The code sharing session can be disconnnected by either user at any time with a message being sent to other user when this occurs.  

The main menu has three options available: 

1: Introduction to the Application and Box2D Video (35 minute screen recording video - Hosted on YouTube)

2: Tutorials 

3: Development and Communication. 

The application pages are all hosted on an Express Node.js Server. The JavaScript Library used within the application is JQuery. 

## Section 1: Application Overview
I recorded this 35 minute screen recording video to provide users a full overview of the functionality available within the application. 

The video is hosted on YouTube and has been embedded within the application.  

## Section 2: Tutorials
YouTube hosted videos and text tutorials are included to teach the students how to code using JavaScript. The Box2D physics engine javaScript library is included because the student will be developing JavaScript games within the application. The application provides the option to launch the developed game within a new Electron window. If the student requires live coding assistance, they can check if a lecturer is online and then send a code sharing request. If the request is accepted, both users can communicate through instant messaging, code together through the code sharing functionality and run the JavaScript code within a new electron window. 

The FS node module has been used to access the users file system, this provides access to update and read from the index.js file (the index.js file is required for the JavaScript and Box2D game logic). 

## Section 3: Development and Communication Area

This was included within the application to provide users an area to: 
1. Develop code for weekly assignments and assessments. 
2. Contact other users and discuss JavaScript coding challenges. 
3. Connect code editors and code share to resolve coding issues. These issues could slow down learning and the students progress. 

The code editor and code sharing functionality is the same as the tutorials area but the interface layout is different due to the tutorials iFrame not being included within this section of the application.   

## Code Sharing Functionality

The event based node.js communication library socket.io has been used for server communication and for the sending of data between connected users. 

To make use of the instant messaging and code sharing functionality, the user should submit their name. The entered name will be stored on the server and will be used to send and receive instant messages and to send and receive JavaScript code when code sharing.   

Application users can decline code sharing requests. Dialog confirm messages are provided to accept or decline requests. Messages are returned to the other user to inform if the code sharing invitation has been accepted or declined.

If the users are in different sections of the application (for example: The student is working on a tutorial and the lecturer is using the Development and Communication area), the code sharing functionity will still continue work as expected. 

## Winston Logger 

Server logs including errors are held within the public/logs folder. The winston.js config file has been setup to save express server logs and error messages within the folder public/logs/app.logs. The data and time of the log is also added to the log/error message. 

This provides an improved level of logging from the running server and this assists with the debugging of application errors. 

Logs can also be output to the console with winston. This method is already available and can be turned on by removing the JavaScript comment tags within my winston config file. 

## Jest Automated Testing

Automated tests have been created using the Jest testing library. The automated tests are saved within the file app.test.js. Unit and integration tests included within this test file. 

The created tests are run by using this command from the home directory: npm test


## Completing the Project, Packaging the Electron Application

The electron-packager module is used to package the application files to create an .exe file with the application logo included (replaces the default electron logo). 

The module should be installed globally using the command: npm install -g electron-packager 

The commands for the target operating systems are below and should be run from the terminal and within the home directory of the application. 

Once the application is packaged and the .exe file is created within a new file, the application can be run by double clicking on the .exe file.

The asar flag is included to hide the application files. A user can access the application files if this flag is not included. 

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
