
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
    writeToFile(content); 
    window.open("./rungame/index.html"," ", "width=1200, height=800"); 
});



