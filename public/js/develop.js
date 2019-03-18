$('#leftSide').hide();
$('#rightSide').hide();


//variable declarations for connection and code sharing features. 
var userName;
var currentlySharing = false;
var communicatingName;

//click method, send private message through the socket connections. 
$('#privButton').click(function() {
    $('#messages').append($('<li>').text($('#privateMessage').val() + " - " + 'Private Message Sent From Your Account to' + " " + $('#selectBox').text()));
    socket.emit('private Message', {
        name: $('#selectBox').text(),
        message: $('#privateMessage').val()
    });
    $('#privateMessage').val(" ");
});

//click method for disconnecting the sharing connection and sending message to other user through the socket. 
$('#disconnectButton').click(function() {
    console.log("Button Clicked");
    if (currentlySharing == false) {
        alert("There is no connection to disconnect, you are not code sharing at this time");
    } else {
        $('#status').html("You are not code sharing");
        currentlySharing = false;
        socket.emit('disconnected', {
            name: communicatingName
        });
        communicatingName = null;
    }
});

//click method for sending username. Sign in hidden and communication and sharing features made available. 
$('#nameButton').click(function() {
    socket.emit('userName', $('#name').val());
    $('#leftSideLogin').hide();
    $('#leftSide').show();
    $('#rightSide').show();
    userName = $('#name').val();
    document.getElementById("loggedInName").innerHTML = "You are logged in as: " + userName;
});

//socket event when user connected received. 
socket.on('user connected', function(userid) {
    console.log(userid)
});

//socket event when private message received from the server. 
socket.on('privateNewMessage', function(privMsg) {
    var dt = new Date();
    var utcDate = dt.toUTCString();
    var message = privMsg.message;
    var from = privMsg.userPrivfrom;
    $('#messages').append($('<li>').text("Private Message from:" + from + "  Message: " + message));
    $('#messageAlert')[0].play();
});

//click event for sending sharing request to other user. 
$('#codeSharingRequest').click(function() {
    $('#status').html("Sharing Request Sent To " + $('#selectBox').text());
    socket.emit('sharing Request', {
        name: $('#selectBox').text()
    });
});

//socket event received from server for sharing request from other user, confirm box opens when event received. 
socket.on('newSharingRequest', function(receivedShare) {
    if (confirm("You received a code sharing request from " + receivedShare.userShareFrom + "\n\nThe request was sent: " + receivedShare.timeSent + "\n\n Click Ok to Accept, or Cancel to Decline")) {
        $('#status').html("Code Sharing With: " + receivedShare.userShareFrom);
        socket.emit('Request Accepted', {
            acceptedBy: receivedShare.sentTo,
            respondTo: receivedShare.userShareFrom
        });
        currentlySharing = true;
    } else {
        socket.emit('Request Declined', {
            declinedBy: receivedShare.sentTo,
            respondTo: receivedShare.userShareFrom
        });
        console.log("DECLINED BY", receivedShare.sentTo)
        console.log("RESPOND TO", receivedShare.userShareFrom)
    }
});

//socket event when user accepts sharing request. Confirm dialog opens to send code to other user, user can also decide to cancel the sharing request. 
socket.on('acceptedRequest', function(receivedShare) {

    if (confirm("Your code request was accepted by " + receivedShare.acceptedBy + "\n\nThe request was accepted: " + receivedShare.timeSent + "\n\n Click Ok to send your code and start sharing or Cancel to Decline")) {

        $('#status').html("Code Sharing With: " + receivedShare.acceptedBy);
        currentlySharing = true;
        communicatingName = receivedShare.acceptedBy;
        console.log("1", communicatingName);
        socket.emit('Send Code', {
            code: editor.getValue(),
            sendCodeTo: receivedShare.acceptedBy,
            nameToUpdate: userName
        });
    } else {
        $('#status').html("You are not code Sharing");
        socket.emit('Request Declined After Accept', {
            userToUpdate: receivedShare.acceptedBy,
            declinedName: userName
        });
    }
});

//socket event for when code is added to the editor 
socket.on('updateCodeEditor', function(data) {
    editor.setValue(data.codeToAdd);
    alert("Code Added to Editor");
    communicatingName = data.nameToAddToVar;
    console.log("2", communicatingName);
});

//socket event for receiving the updated online users array. 
socket.on('online users', function(online) {
    $('#selectBox').empty();
    $('#onlineDiv').empty();
    for (x in online) {
        if (online[x] != userName) {
            $("#selectBox").append('<option value=' + online[x] + '>' + online[x] + '</option>');
            $('#onlineDiv').append($('<li>').text(online[x]));
        }
    }
});

//code mirror function for sending new code on keypress. Keyup used as keydown first press did not register.  
editor.on("keyup", function() {
    if (currentlySharing == true) {
        socket.emit('Code Updated', {
            codeNew: editor.getValue(),
            userToUpdate: communicatingName
        });
    }
});

//socket event receiving new code to update the editor. 
socket.on('sendCodeKeyPress', function(data) {
    editor.setValue(data.codeToUpdate);
});

//socket event for alerting that other user has disconnected. 
socket.on('disconnectConnection', function(data) {
    $('#status').html("You are not code sharing");
    alert(communicatingName + " disconnected the code sharing connection at this time: " + data.timeDisconnected);
    currentlySharing = false;
    communicatingName = null;
});

//socket event for a declined code sharing request. 
socket.on('Sharing Declined', function(data) {
    $('#status').html("You are not code sharing");
    alert(data.declinedBy + " declined your code sharing request. Time declined: " + data.timeDeclined);
});

//socket event for declined sharing request after initially accepting. 
socket.on('Declined Sharing Update', function(data) {
    $('#status').html("You are not code sharing");
    alert(data.declinedBy + " has since cancelled their sharing request. Time declined: " + data.timeDeclined);
});

  
