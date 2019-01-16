$('#leftSide').hide();

var nickName;
var currentlySharing = false;
var communicatingName;
 
$('#privButton').click(function () {
    $('#messages').append($('<li>').text($('#privateMessage').val() + " - " + 'Private Message Sent From Your Account to' + " " + $('#selectBox').text()));
    socket.emit('private Message', { name: $('#selectBox').text(), message: $('#privateMessage').val() });
  });
  
  
  $('#nameButton').click (function () {
    socket.emit('user nickname', $('#name').val());
    $('#leftSideLogin').hide();
    $('#leftSide').show();
    nickName = $('#name').val();
    document.getElementById("loggedInName").innerHTML = "You are logged in as: " + nickName;
  });
  
  
  socket.on('user connected', function (userid) {
    console.log(userid)
  });
   
  socket.on('privateNewMessage', function (privMsg) {
    var dt = new Date();
    var utcDate = dt.toUTCString();  
    $('#userTyping').empty();
    var message = privMsg.message;
    var from = privMsg.userPrivfrom;
    $('#messages').append($('<li>').text("Private Message from:"+from+ "  Message: " + message));
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
    console.log("User To Send To: ", communicatingName);
  });

  socket.on('sendCodeKeyPress', function (data) {  
    $('#codingAreaText').val(data.codeToUpdate);  
  });