# Learning-JavaScript-DesktopApplication

## Building the Application: 

git clone https://github.com/Fergie1987/Learning-JavaScript-DesktopApplication.git

cd Learning-JavaScript-DesktopApplication

Open a command prompt window and start the server: node app.js

Open new command prompt windows and cd in to Learning-JavaScript-DesktopApplication to run new instances of the desktop application. 
The command to create each desktop application instance is: npm start

Note: Create more than 1 instance of the application to use the live code sharing functionality.  

# Learning JavaScript Application Description: 

This application has been developed using the Electron JavaScript framework (Chromium and Node.js). The purpose of this application is to teach students new JavaScript coding skills. Tutorials are included for the students to follow with a code editor available for the students to practice their new learned coding skills. The students code can be run from within the application with the output showing within a new electron window. The console.log output text also shows within the new window to assist with debugging skills. 

The main benefit to the student and lecturer is the code sharing functionality. If the student requires tutorial or coding assistance, a lecturer can be sent a code sharing request. If the request is accepted, the student and lecturer can communicate through private instant messages and code together within their own code editors. The code sharing session can be disconnnected by either user at any time, with a message being sent to other user when this occurs.  

The main menu has three options available: 

1: Application Overview (introduction video hosted on YouTube)

2: Tutorials 

3: Development and Communication. 

The application pages are all hosted on an Express Node.js Server. The JavaScript Library used within the application is JQuery. 

## Section 1. Application Overview. 
I recorded this 35 minute video to provide the application user with a full overview of the application functionality. The video is hosted on YouTube and has been embedded within the application.  

## Section 2. Tutorials:
The video and text tutorials are included to teach the students how to code using JavaScript. The Box2D physics engine javaScript library is included because the student will be developing JavaScript games within the application. The application provides the option to launch the developed game within a new Electron window. If the student requires live coding assistance, they can check if a lecturer is online and then send a code sharing request. If the request is accepted, both users can communicate through instant messaging, code together through the code sharing functionality and run the JavaScript code within a new electron window. 

The FS node module has been used to access the users file system, this provides access to update and read from the index.js file (contains the JavaScript and Box2D game logic). 

## Section 2. Development and Communication Area:

This was included to provide users an area within the application to: 
1. Develop code for weekly assignments and assessments. 
2. Contact other users and discuss JavaScript coding challenges. 
3. Connect code editors and code at the same time to resolve coding issues. These issues could slow down learning and the students progress.  


## Code Sharing Functionality:

The event based node.js communication library socket.io has been used for server communication and for the sending of data between connected users. 

To make use of the instant messaging and code sharing functionality, the user should submit their name. The entered name will be stored on the server and will be used to send and receive instant messages and to send and receive JavaScript code when code sharing.   

Application users can decline code sharing requests. Dialog confirm messages are provided to accept or decline requests. Messages are returned to the other user to inform if the code sharing invitation has been accepted or declined.

If the users are in different sections of the application (For example: The student is in tutorials and the lecturer is in the Development and Communication area), the code sharing functionity will still continue work as expected. 


## Packaging the Final Application:

The electron-packager module can be used to package the application files to create an .exe file with the application logo included (replaces the default electron logo). 

Once installing the module globally using the command: npm install -g electron-packager 

The commands for the target operating systems are below and should be run from the terminal and within the home directory of the application. 

Once the application is packaged and the .exe file is created within a new directory, the application can be run by double clicking on the .exe file.

The asar flag is included to hide the application files. A user can access the application files if this flag is not included. 

## Windows Command: 
electron-packager --electron-version=1.4.13 --overwrite --asar --platform=win32 --arch=x64 --icon=public/assets/logoicon.ico .

## Linux Command: 
electron-packager --electron-version=1.4.13 --overwrite --asar --platform=linux --arch=x64 --icon=public/assets/logoicon.ico .

## MacOS
electron-packager --electron-version=1.4.13 --overwrite --asar --platform=darwin --arch=x64 --icon=./public/assets/logoicon.ico .
 
