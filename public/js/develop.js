$('#leftSide').hide();

var nickName;
var currentlySharing = false;
var communicatingName;

//private messaging, once submitted, the message and who the message should be sent to is emitted to the server. 
$('#privButton').click(function () {
    $('#messages').append($('<li>').text($('#privateMessage').val() + " - " + 'Private Message Sent From Your Account'));
    socket.emit('private Message', { name: $('#selectBox').text(), message: $('#privateMessage').val() });
  //  $('#privateMessage').val('');
    return false;
  });
  
  
  //Nickname, other fields show and the name of the user is appended to the header of the page.
  $('#nameButton').click (function () {
    socket.emit('user nickname', $('#name').val());
    $('#leftSideLogin').hide();
    $('#leftSide').show();
    nickName = $('#name').val();
    document.getElementById("loggedInName").innerHTML = "You are logged in as: " + nickName;
    return false;
  });
  
  
  //userid of the connected user is added to the console. 
  socket.on('user connected', function (userid) {
    console.log(userid)
  });
  
  
  //private message is added to the message area once received from the server. 
  socket.on('privateNewMessage', function (privMsg) {
    var dt = new Date();
    var utcDate = dt.toUTCString();  
    $('#userTyping').empty();
    var message = privMsg.message;
    var from = privMsg.userPrivfrom;
    $('#messages').append($('<li>').text("Private Message from:"+from+ "  Message: " + message));
  });
  
  
  //variable to hold the key down state. 
  //user is typing will disappear after the message has been sent 
  //user is typing will only show up once. 
  var keyPressed = false;
  
  $(window).keydown(function (e) {
    if (keyPressed == false) {
      socket.emit('user typing', "is typing");
      keyPressed = true;
    }
    if (e.keyCode == 13) {
      keyPressed = false;
    };
  });
  
  var loggedNname = $('#n').val();
  
  $('#nickButton').click(function () {
    keyPressed = false;
  
  });
  
  $('#broadButton').click(function () {
    keyPressed = false;
  });
  
  $('#privateButton').click(function () {
    keyPressed = false;
  });
  
  //user is typing field is updated when user starts to type a message. 
  socket.on('user typing', function (msg) {
    $('#userTyping').append($('<li>').text(msg));
  });
  
  $('#codeSharingRequest').click(function () {  
    $('#status').html("Sharing Request Sent To " + $('#selectBox').text());
    socket.emit('sharing Request', { name: $('#selectBox').text()});
  });
  
  socket.on('newSharingRequest', function (receivedShare) { 
  if (confirm("You received a code sharing request from " + receivedShare.userShareFrom + "\n\nThe request was sent: " +  receivedShare.timeSent + "\n\n Click Ok to Accept, or Cancel to Decline")) {
    $('#status').html("Code Sharing With: " + receivedShare.userShareFrom);
    socket.emit('Request Accepted', {acceptedBy: receivedShare.sentTo, respondTo: receivedShare.userShareFrom});  
    currentlySharing = true;
  } else {
    socket.emit('Request Declined', { declinedBy: receivedShare.userShareFrom, respondTo: receivedShare.userShareFrom});  
  }
  });
  
  socket.on('acceptedRequest', function (receivedShare) { 
  
  if (confirm("Your code request was accepted by " + receivedShare.acceptedBy + "\n\nThe request was accepted: " +  receivedShare.timeSent + "\n\n Click Ok to send your code and start sharing or Cancel to Decline")) {

    $('#status').html("Code Sharing With: " + receivedShare.acceptedBy);
    currentlySharing = true;
    communicatingName = receivedShare.acceptedBy;
    console.log("1", communicatingName);
    socket.emit('Send Code', {code: $('#codingAreaText').val(), sendCodeTo: receivedShare.acceptedBy, nameToUpdate: nickName});  
  } else {
    $('#status').html("Code Sharing Declined");
  }
  });
  
  
  socket.on('updateCodeEditor', function (data) {  
    $('#codingAreaText').html(data.codeToAdd); 
    alert("Code Added to Editor");
    communicatingName = data.nameToAddToVar;
    console.log("2", communicatingName);
  });
  
  
  
  
  //online users, and users available to private message
  //returned array is looped through and the select drop down and the online users list is updated. 
  //The update happens every time a user enters or disconnects from the room. 
  socket.on('online users', function (online) {
    $('#selectBox').empty();      
    $('#onlineDiv').empty();
    for (x in online) {
      if (online[x] != nickName) {  
        $("#selectBox").append('<option value=' + online[x] + '>' + online[x] + '</option>');
        $('#onlineDiv').append($('<li>').text(online[x]));
      }
    }
  });

  $( "#codingAreaText" ).keyup(function() {
   
    socket.emit('Code Updated', {codeNew: $('#codingAreaText').val(), userToUpdate: communicatingName});   
    console.log("THE NAME IS", communicatingName);
  });

  socket.on('sendCodeKeyPress', function (data) {  
    $('#codingAreaText').val(data.codeToUpdate);  
  });