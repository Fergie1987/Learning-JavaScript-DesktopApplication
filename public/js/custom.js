//tutorial the user is currently on - starts at 1. 
var lessonNumber = 1;


//click method for previous button. User taken back to previous task. 
$("#previousTutorial").click(function() {
    //lessonNumber will not be below 1. 
    if (lessonNumber > 1) {
        lessonNumber = lessonNumber - 1;
    }
    //page routings when lesson number variable is updated. 
    if(lessonNumber == 1) {
        document.getElementById('tutorials').src = "http://localhost:3000/starttutorial";   
    }
    else if (lessonNumber == 2) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial1";
    } else if (lessonNumber == 3) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial1task";
    } else if (lessonNumber == 4) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial2";
    } else if (lessonNumber == 5) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial2task";
    } else if (lessonNumber == 6) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial3";
    } else if (lessonNumber == 7) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial3task";
    } else if (lessonNumber == 8) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial3task2";
    } else if (lessonNumber == 9) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial4";
    } else if (lessonNumber == 10) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial4task";
    } else if (lessonNumber == 11) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial4task2";    
    } else if (lessonNumber == 12) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial5";
    } else if (lessonNumber == 13) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial5task";
    } else if (lessonNumber == 14) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial6";
    } else if (lessonNumber == 15) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial6task";
    } else if (lessonNumber == 16) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial7";
    } else if (lessonNumber == 17) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial7task";
    } else if (lessonNumber == 18) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial8";
    } else if (lessonNumber == 19) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial8task";
    } else if (lessonNumber == 20) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial9";
    } else if (lessonNumber == 21) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial9task";
    } else if (lessonNumber == 22) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial10";
    } else if (lessonNumber == 23) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial10task";
    }
});

//click method for next button. User will be moved on to the next task.  
$("#nextTutorial").click(function() {
    //lesson number variable will not move above 23
    if (lessonNumber < 23) {
        lessonNumber = lessonNumber + 1;
    }
    //page routings using the lessonNumber variable. 
    if(lessonNumber == 1) {
        document.getElementById('tutorials').src = "http://localhost:3000/starttutorial";   
    }
    else if (lessonNumber == 2) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial1";
    } else if (lessonNumber == 3) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial1task";
    } else if (lessonNumber == 4) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial2";
    } else if (lessonNumber == 5) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial2task";
    } else if (lessonNumber == 6) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial3";
    } else if (lessonNumber == 7) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial3task";
    } else if (lessonNumber == 8) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial3task2";
    } else if (lessonNumber == 9) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial4";
    } else if (lessonNumber == 10) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial4task";
    } else if (lessonNumber == 11) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial4task2";    
    } else if (lessonNumber == 12) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial5";
    } else if (lessonNumber == 13) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial5task";
    } else if (lessonNumber == 14) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial6";
    } else if (lessonNumber == 15) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial6task";
    } else if (lessonNumber == 16) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial7";
    } else if (lessonNumber == 17) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial7task";
    } else if (lessonNumber == 18) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial8";
    } else if (lessonNumber == 19) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial8task";
    } else if (lessonNumber == 20) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial9";
    } else if (lessonNumber == 21) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial9task";
    } else if (lessonNumber == 22) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial10";
    } else if (lessonNumber == 23) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial10task";
    }


});

//click method for running code within the editor. 
$("#runCode").click(function() {
    if (editor.getValue() != "") {
        writeToFile(editor.getValue());
        window.open("/rungame", " ","width="+screen.availWidth+",height="+screen.availHeight);
    } else {
        alert("There is no code to Execute");
    }
});

//on click routing for accessing the application overview. 
$("#applicationOverview").click(function() {
    location.href = 'http://localhost:3000/applicationOverview'
  
});

//click function for reading in code from index.js
$("#readInCode").click(function() {
    var content = readFromFile();
    editor.setValue(" ");
    editor.setValue(content);
});
//click function for removing code from the code editor 
$("#clearEditor").click(function() {
    if (confirm("Are you sure you wish to remove your code from the Editor?")) {
        editor.setValue(" ");
    }

});

//click method for accessing the Pac-Man intro. 
$("#pacmanMenu").click(function() {
    location.href = 'http://localhost:3000/pacmanintro'
});

//click method for returning to the application home. 
$("#returnMainMenu").click(function() {
    if (confirm("Have you remembered to save a copy of your code? Do you wish to continue?")) {
        location.href = 'http://localhost:3000/'
    }
});
//click method for accessing the Pac-Man tutorial. 
$("#continueToPacman").click(function() {
    location.href = 'http://localhost:3000/pacman'
});

//click method for returning to the main menu. 
$("#returnMainMenuNoCode").click(function() {
    if (confirm("Are you sure? Click Ok to return to the Main Menu")) {
        location.href = 'http://localhost:3000/'
    }
});

//click method for accessing the communication and development area. 
$("#developmentCommunicate").click(function() {
    location.href = 'http://localhost:3000/communicateanddevelop'
});

//click method for running the code within the editor. If no code available, alert message will display. 
$("#runCodeDev").click(function() {
    if (editor.getValue() != "") {
        writeToFile(editor.getValue());
        window.open("/rungame", " ", "width=1700, height=1000");
    } else {
        alert("There is no code to Execute");
    }

});

//click method for reading in code from the index.js file. 
$("#readInCodeDev").click(function() {
    var content = readFromFile();
    editor.setValue(" ")
    editor.setValue(content);
});

//click method for removing code within the code editor. 
$("#clearEditorDev").click(function() {
    if (confirm("Are you sure you wish to remove your code from the Editor?")) {
        editor.setValue(" ");
    }

});


