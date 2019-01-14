var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;//holds connected users and socket id's
var path = require('path');

var users = {};
var sockets = {};

var online = [];

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

app.get('/tutorial1', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial1.html');
});
app.get('/tutorial2', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial2.html');
});
app.get('/tutorial3', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial3.html');
});
app.get('/tutorial4', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial4.html');
});
app.get('/tutorial5', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial5.html');
});
app.get('/tutorial6', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial6.html');
});
app.get('/tutorial7', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial7.html');
});
app.get('/tutorial8', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial8.html');
});
app.get('/tutorial9', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial9.html');
});
app.get('/tutorial10', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial10.html');
});
app.get('/tutorial11', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial11.html');
});
app.get('/tutorial12', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial12.html');
});
app.get('/tutorial13', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial13.html');
});
app.get('/tutorial14', function (req, res) {
  res.sendFile(__dirname + '/tutorials/tutorial14.html');
});

app.get('/rungame', function (req, res) {
  res.sendFile(__dirname + '/rungame/index.html');
});






//socket connection
io.on('connection', function (socket) {

  id = socket.id

  console.log('a user connected')

  //actions when a user disconnects from the chat room - refreshes or closes the page. 
  socket.on('disconnect', function () {

    var nameToRemove = users[socket.id]
    if (nameToRemove != undefined) {
      socket.broadcast.emit('chat message', nameToRemove + " has disconnected from the room");
    }

    var index = online.indexOf(nameToRemove);
    online.splice(index, 1);
    io.emit('online users', online);

  });

  //user nickname and socket id stored in the array. 
  socket.on('user nickname', function (nkn) {
    console.log('nickname:' + nkn);
    id = socket.id;

    users[id] = nkn;
    sockets[nkn] = id;
    console.log(users);
    console.log(sockets);

    online.push(nkn);

    io.emit('online users', online);

  });

  //when user is typing the name of the user appears on the page to show this to others. 
  socket.on('user typing', function (typmessage) {

    name = users[socket.id];

    if (name != undefined) {
      socket.broadcast.emit('user typing', name + " " + typmessage);
    }
  })

  //emits a private message to a user, only 1 user will receive this message. 
  socket.on('private Message', function (privateMessage) {

    userSocket = sockets[privateMessage.name];
    userMessage = privateMessage.message;
    userFrom = users[socket.id];

    console.log(userSocket);

    io.to(userSocket).emit('privateNewMessage', { message: userMessage, userPrivfrom: userFrom })
  });

});

//port the server will open on, localhost:3000.
http.listen(port, function () {
  console.log('listening on *:' + port);
});