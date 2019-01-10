
var lessonNumber = 1;

$("#previousTutorial").click(function() { 

    if(lessonNumber > 1){
    lessonNumber = lessonNumber - 1;
    }

    if (lessonNumber == 1) {
        document.getElementById('tutorials').src = "./tutorials/tutorial1.html";
    }  else if (lessonNumber == 2) {
        document.getElementById('tutorials').src = "./tutorials/tutorial2.html";
    } else if (lessonNumber == 3) {
        document.getElementById('tutorials').src = "./tutorials/tutorial3.html";
    } else if (lessonNumber == 4) {
        document.getElementById('tutorials').src = "./tutorials/tutorial4.html";
    } else if (lessonNumber == 5) {
        document.getElementById('tutorials').src = "./tutorials/tutorial5.html";
    }  else if (lessonNumber == 6) {
        document.getElementById('tutorials').src = "./tutorials/tutorial6.html";
    }  else if (lessonNumber == 7) {
        document.getElementById('tutorials').src = "./tutorials/tutorial7.html";
    }  else if (lessonNumber == 8) {
        document.getElementById('tutorials').src = "./tutorials/tutorial8.html";
    }  else if (lessonNumber == 9) {
        document.getElementById('tutorials').src = "./tutorials/tutorial9.html";
    }  else if (lessonNumber == 10) {
        document.getElementById('tutorials').src = "./tutorials/tutorial10.html";
    }  else if (lessonNumber == 11) {
        document.getElementById('tutorials').src = "./tutorials/tutorial11.html";
    }  else if (lessonNumber == 12) {
        document.getElementById('tutorials').src = "./tutorials/tutorial12.html";
    }  else if (lessonNumber == 13) {
        document.getElementById('tutorials').src = "./tutorials/tutorial13.html";
    } else if (lessonNumber == 14) {
        document.getElementById('tutorials').src = "./tutorials/tutorial14.html";
    } 
});


$("#nextTutorial").click(function() { 

    if(lessonNumber < 14){
    lessonNumber = lessonNumber + 1;
    }   
    if (lessonNumber == 1) {
        document.getElementById('tutorials').src = "./tutorials/tutorial1.html";
    }  else if (lessonNumber == 2) {
        document.getElementById('tutorials').src = "./tutorials/tutorial2.html";
    } else if (lessonNumber == 3) {
        document.getElementById('tutorials').src = "./tutorials/tutorial3.html";
    } else if (lessonNumber == 4) {
        document.getElementById('tutorials').src = "./tutorials/tutorial4.html";
    } else if (lessonNumber == 5) {
        document.getElementById('tutorials').src = "./tutorials/tutorial5.html";
    }  else if (lessonNumber == 6) {
        document.getElementById('tutorials').src = "./tutorials/tutorial6.html";
    }  else if (lessonNumber == 7) {
        document.getElementById('tutorials').src = "./tutorials/tutorial7.html";
    }  else if (lessonNumber == 8) {
        document.getElementById('tutorials').src = "./tutorials/tutorial8.html";
    }  else if (lessonNumber == 9) {
        document.getElementById('tutorials').src = "./tutorials/tutorial9.html";
    }  else if (lessonNumber == 10) {
        document.getElementById('tutorials').src = "./tutorials/tutorial10.html";
    }  else if (lessonNumber == 11) {
        document.getElementById('tutorials').src = "./tutorials/tutorial11.html";
    }  else if (lessonNumber == 12) {
        document.getElementById('tutorials').src = "./tutorials/tutorial12.html";
    }  else if (lessonNumber == 13) {
        document.getElementById('tutorials').src = "./tutorials/tutorial13.html";
    }  else if (lessonNumber == 14) {
        document.getElementById('tutorials').src = "./tutorials/tutorial14.html";
    } 


});


$("#runCode").click(function() { 


    var content = $(text).val();
    if(content != "") {
    writeToFile(content); 
    window.open("./rungame/index.html"," ", "width=1200, height=800"); 
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
  location.href='pacmanintro.html' 
});

$("#returnMainMenu").click(function() {
    if (confirm("Have you remembered to save a copy of your code? Do you wish to continue?")) { 
        location.href='index.html'       
  } 
  });

  $("#continueToPacman").click(function() {
        location.href='pacman.html'       
  });

  $("#returnMainMenuNoCode").click(function() {
    if (confirm("Are you sure? Click Ok to return to the Main Menu")) { 
        location.href='index.html'       
  } 
  });
