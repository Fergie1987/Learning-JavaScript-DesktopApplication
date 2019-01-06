
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
    }  
});


$("#nextTutorial").click(function() { 

    lessonNumber = lessonNumber + 1;

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
    }  
});








$("#runCode").click(function() { 
    var content = $(text).val();
    writeToFile(content);    
});



