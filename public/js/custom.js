var lessonNumber = 1;

$("#previousTutorial").click(function() { 

    if(lessonNumber > 1){
    lessonNumber = lessonNumber - 1;
    }

    if (lessonNumber == 1) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial1";
    }  else if (lessonNumber == 2) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial2";
    } else if (lessonNumber == 3) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial3";
    } else if (lessonNumber == 4) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial4";
    } else if (lessonNumber == 5) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial5";
    }  else if (lessonNumber == 6) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial6";
    }  else if (lessonNumber == 7) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial7";
    }  else if (lessonNumber == 8) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial8";
    }  else if (lessonNumber == 9) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial9";
    }  else if (lessonNumber == 10) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial10";
    }  else if (lessonNumber == 11) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial11";
    }  else if (lessonNumber == 12) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial12";
    }  else if (lessonNumber == 13) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial13";
    } else if (lessonNumber == 14) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial14";
    } 
});


$("#nextTutorial").click(function() { 

    if(lessonNumber < 14){
    lessonNumber = lessonNumber + 1;
    }   
    if (lessonNumber == 1) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial1";
    }  else if (lessonNumber == 2) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial2";
    } else if (lessonNumber == 3) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial3";
    } else if (lessonNumber == 4) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial4";
    } else if (lessonNumber == 5) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial5";
    }  else if (lessonNumber == 6) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial6";
    }  else if (lessonNumber == 7) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial7";
    }  else if (lessonNumber == 8) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial8";
    }  else if (lessonNumber == 9) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial9";
    }  else if (lessonNumber == 10) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial10";
    }  else if (lessonNumber == 11) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial11";
    }  else if (lessonNumber == 12) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial12";
    }  else if (lessonNumber == 13) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial13";
    }  else if (lessonNumber == 14) {
        document.getElementById('tutorials').src = "http://localhost:3000/tutorial14";
    } 


});


$("#runCode").click(function() { 


    var content = $(text).val();
    if(content != "") {
    writeToFile(content); 
    window.open("/rungame"," ", "width=1200, height=800"); 
    } else {
        alert("There is no code to Execute");  
    }

});

$("#readInCode").click(function() {   
  var content = readFromFile();
  $('#text').val('');  
  $('#text').val(content);   
  });

$("#clearEditor").click(function() {
    if (confirm("Are you sure you wish to remove your code from the Editor?")) {
        $('#text').val(''); 
  } 
 
});



$("#pacmanMenu").click(function() {
  location.href='http://localhost:3000/pacmanintro' 
});

$("#returnMainMenu").click(function() {
    if (confirm("Have you remembered to save a copy of your code? Do you wish to continue?")) { 
        location.href='http://localhost:3000/'       
  } 
  });

  $("#continueToPacman").click(function() {
        location.href='http://localhost:3000/pacman'       
  });

  $("#returnMainMenuNoCode").click(function() {
    if (confirm("Are you sure? Click Ok to return to the Main Menu")) { 
        location.href='http://localhost:3000/'       
  } 
  });

  $("#developmentCommunicate").click(function() {
    location.href='http://localhost:3000/communicateanddevelop'  
  });

  
$("#runCodeDev").click(function() { 
    var content = $(codingAreaText).val();
    if(content != "") {
    writeToFile(content); 
    window.open("/rungame"," ", "width=1200, height=800"); 
    } else {
        alert("There is no code to Execute");  
    }

});

$("#readInCodeDev").click(function() {   
  var content = readFromFile();
  $('#codingAreaText').val('');  
  $('#codingAreaText').val(content);   
  });

$("#clearEditorDev").click(function() {
    if (confirm("Are you sure you wish to remove your code from the Editor?")) {
        $('#codingAreaText').val(''); 
  } 
 
});