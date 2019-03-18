var winston = require('./public/config/winston');
var morgan = require('morgan');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.use(morgan('combined', { stream: winston.stream }));

//objects to hold the username and the socket ID. 
var users = {};
var sockets = {};

//Array to hold the current online users. 
var online = [];

//Application page routings. 
app.use(express.static('./public'));

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/communicateanddevelop', function (req, res) {
  res.sendFile(__dirname + '/devandcomm.html');
});

app.get('/pacmanintro', function (req, res) {
  res.sendFile(__dirname + '/pacmanintro.html');
});

app.get('/pacman', function (req, res) {
  res.sendFile(__dirname + '/pacman.html');
});

app.get('/starttutorial', function (req, res) {
  res.sendFile(__dirname + '/tutorials/introduction.html');
});

app.get('/tutorial1', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial1.html');
});

app.get('/tutorial1task', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial1task.html');
});


app.get('/tutorial2', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial2.html');
});

app.get('/tutorial2task', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial2task.html');
});


app.get('/tutorial3', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial3.html');
});

app.get('/tutorial3task', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial3task.html');
});
app.get('/tutorial3task2', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial3task2.html');
});

app.get('/tutorial4', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial4.html');
});
app.get('/tutorial4task', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial4task.html');
});
app.get('/tutorial4task2', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial4task2.html');
});
app.get('/tutorial5', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial5.html');
});
app.get('/tutorial5task', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial5task.html');
});
app.get('/tutorial6', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial6.html');
});
app.get('/tutorial6task', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial6task.html');
});
app.get('/tutorial7', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial7.html');
});
app.get('/tutorial7task', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial7task.html');
});
app.get('/tutorial8', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial8.html');
});
app.get('/tutorial8task', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial8task.html');
});
app.get('/tutorial9', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial9.html');
});
app.get('/tutorial9task', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial9task.html');
});
app.get('/tutorial10', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial10.html');
});
app.get('/tutorial10task', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial10task.html');
});

app.get('/rungame', function (req, res) {
  res.sendFile(__dirname + '/rungame/index.html');
});

app.get('/applicationoverview', function (req, res) {
  res.sendFile(__dirname + '/overview.html');
});



//socket.io connection - actions to occur when connection is successful
io.on('connection', function (socket) {
  //socket id of connected user. 
  id = socket.id

  console.log('a user connected' + id)
  //actions to occur when user disconnects connection
  socket.on('disconnect', function () {
    //name of user retrived from the object using the socketID
    var nameToRemove = users[socket.id]
   //Position to remove from the online users array. 
    var index = online.indexOf(nameToRemove);
    online.splice(index, 1);
    //send updated online users array to connected users
    io.emit('online users', online);
    //deleted the username and socketid from both objects. 
    delete users [socket.id];
    delete sockets [nameToRemove];
    console.log(users);
    console.log(sockets);
  });

  //socket event when user submits their username. 
  socket.on('userName', function (nkn) {
    console.log('userName:' + nkn);
    id = socket.id;
    users[id] = nkn;
    sockets[nkn] = id;
    console.log(users);
    console.log(sockets);
    online.push(nkn);
    //send out updated users array when user submits username.  
    io.emit('online users', online);
  });
 
  //socket event when user submits private message to other user. 
  socket.on('private Message', function (privateMessage) {
    userSocket = sockets[privateMessage.name];
    userMessage = privateMessage.message;
    userFrom = users[socket.id];
    io.to(userSocket).emit('privateNewMessage', { message: userMessage, userPrivfrom: userFrom })
  });

  //socket event when user submits sharing request. 
  socket.on('sharing Request', function (sharingRequest) {  
    var dt = new Date();
    var utcDate = dt.toUTCString();
    userFrom = users[socket.id];
    userSocket = sockets[sharingRequest.name];
    io.to(userSocket).emit('newSharingRequest', {userShareFrom: userFrom, sentTo:sharingRequest.name, timeSent: utcDate }) 
  });

  //socket event when user accepts sharing request. 
  socket.on('Request Accepted', function (sharingRequest) {   
    var dt = new Date();
    var utcDate = dt.toUTCString();
    userSocket = sockets[sharingRequest.respondTo];
    io.to(userSocket).emit('acceptedRequest', {acceptedBy: sharingRequest.acceptedBy, timeSent: utcDate }) 
  });

  //socket event for sending code when connection is made. 
  socket.on('Send Code', function (sendCode) {   
    userSocket = sockets[sendCode.sendCodeTo];
    io.to(userSocket).emit('updateCodeEditor', {codeToAdd: sendCode.code, nameToAddToVar: sendCode.nameToUpdate}) 
  });

  //socket event for sending code after keypress.
  socket.on('Code Updated', function (send) {   
    userSocket = sockets[send.userToUpdate];
    io.to(userSocket).emit('sendCodeKeyPress', {codeToUpdate: send.codeNew}) 
  });

  //socket event for disconnecting sharing connection.
  socket.on('disconnected', function (send) {   
    var dt = new Date();
    var utcDate = dt.toUTCString();
    userSocket = sockets[send.name];
    io.to(userSocket).emit('disconnectConnection', {timeDisconnected: utcDate}) 
  });
  
   //socket event when user declines sharing request.  
   socket.on('Request Declined', function (data) {   
    var dt = new Date();
    var utcDate = dt.toUTCString();
    userSocket = sockets[data.respondTo];
    io.to(userSocket).emit('Sharing Declined', {declinedBy: data.declinedBy,  timeDeclined: utcDate}) 
  });
  //socket event when user decides to decline after initially accepting.  
  socket.on('Request Declined After Accept', function (data) {   
    var dt = new Date();
    var utcDate = dt.toUTCString();
    userSocket = sockets[data.userToUpdate];
    io.to(userSocket).emit('Declined Sharing Update', {declinedBy: data.declinedName,  timeDeclined: utcDate}) 
  }); 

  
  //test function to send to all users. 
  socket.on('message', function (data) {  
  console.log(data.message)    
  io.emit('message returned', data) 
  }); 
  
});

//port the server will open on, localhost:3000.
http.listen(port, function () {
  console.log('listening on *:' + port);
});

//function for JEST test, close connection to complete the tests. 
function closeHttp () {
http.close()
};

//make objects, arrays and functions available to other classes. 
exports.online = online;
exports.users = users;
exports.sockets = sockets;
exports.closeHttp = closeHttp;