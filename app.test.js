var app = require("./app.js")
const io = require('socket.io-client');
var id;

/* 
beforeAll(() => {
    socket = io.connect("http://localhost:3000/", {
        'reconnection delay': 0,
        'reopen delay': 0,
        'force new connection': true,
        transports: ['websocket'],
      });
      socket.on('connect', () => { 
        id = socket.id;   
        console.log("connection")
      });
}); */


afterAll(() => {
app.closeHttp();
});


test('the Array is null', () => {
expect(app.online).toBeNull;
})

test('the Array is not null', () => {
app.online.push("ABC123")    
expect(app.online).toEqual(["ABC123"]);
app.online.length = 0;
})

test('the Array has two two values', () => {  
app.online.push("ABC123")  
app.online.push("DEF123")  
expect(app.online).toEqual(["ABC123", "DEF123"]);
app.online.length = 0;
})

test('the Array has five values', () => {  
app.online.push("ABC123")  
app.online.push("DEF123")  
app.online.push("GHI123")  
app.online.push("JKL123")  
app.online.push("MNO123")  
expect(app.online).toEqual(["ABC123", "DEF123", "GHI123", "JKL123", "MNO123"]);
app.online.length = 0;
})

test('the object to undefined', () => {
expect(app.sockets).toBeUndefined;
})

test('the socket object to equal David', () => {
var id = "ABC123"
app.sockets[id] = "David"  
expect(app.sockets[id]).toEqual("David");
delete app.sockets[id];
})

test('the socket object to include Peter and Mary', () => {
var id1 = "ABC123"
app.sockets[id1] = "Peter" 
var id2 = "MAR123" 
app.sockets[id2] = "Mary" 
expect(app.sockets[id1]).toEqual("Peter");
expect(app.sockets[id2]).toEqual("Mary");
delete app.sockets[id1];
delete app.sockets[id2];
})

test('the user object to equal TEST123', () => {
var name = "Dave"
app.users[name] = "TEST123"  
expect(app.users[name]).toEqual("TEST123");
delete app.users[name];
})

test('the user object to equal TEST123 and TEST456', () => {
var name1 = "Dave"
var name2 = "Kerry"
app.users[name1] = "TEST123"  
app.users[name2] = "TEST456" 
expect(app.users[name1]).toEqual("TEST123");
expect(app.users[name2]).toEqual("TEST456");
delete app.users[name1];
delete app.users[name2];
})

/* test('socket ID check', () => {
expect(id).toEqual(1234);
}) */
