# Learning-JavaScript-DesktopApplication

## Building the Application: 

git clone https://github.com/Fergie1987/Learning-JavaScript-DesktopApplication.git

cd Learning-JavaScript-DesktopApplication

Open a command prompt window and start the server: node app.js

Open new command prompt windows and cd in to Learning-JavaScript-DesktopApplication to run new instances of the desktop application. 
The command to create each desktop application instance is: npm start

Note: Create more than 1 instance of the application to use the Development and Communication area. This is required for the private messaging and code sharing functions. 

# Learning JavaScript Application Description: 

The application was developed using the Electron JavaScript framework (uses Chromium and Node.js). The application purpose is to teach students how to code using JavaScript and to allow users to connect their code editors, communicate and code simultaneously. The application has two options within the main menu: 1: Tutorials and 2: Development and Communication. The application pages are hosted on an Express Node.js Server and the Jquery library is used throughout the application. 

## Section 1. Tutorials:
The tutorials will teach students how to code in JavaScript while using the Box2D physics engine javaScript library. The tutorials will guide the student through the coding and development process. The application provides the option to launch the developed game code within a new Electron window at any time.  If the student requires live coding assistance from an online and available lecturer, they have the option to request help within the Development and Communication Area. 

The FS node module is used to access the file system of the computer. The index.js file used to run the game logic is updated with the new code. Once the file is updated, the game will open in a new electron window. 

## Section 2. Development and Communication Area:

This was developed to provide students an area within the application to: 
1. Develop code for weekly assignments and assessments. 
2. Contact other student users and discuss JavaScript coding challenges. 
3. Code share by connecting applications, communicating through instant messaging and coding simultaneously. 

The event based communication library socket.io is used for server communication and sending data to the connected application users. 

The user has to submit their name to the server to allow others to communicate and codeshare.  

Users have the ability to decline code share requests. Dialog confirm messages are used to accept or decline requests and messages are returned when this occurs. 

