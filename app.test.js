var server = require("./app.js")
io = require('socket.io-client');


var socket1;
var socket2;

//create two user instances to send and receive message. 
beforeAll(() => {
    
    socket1 = io.connect('http://localhost:3000/communicateanddevelop/', {
        'reconnection delay': 0,
        'reopen delay': 0,
        'force new connection': true,
        transports: ['websocket'],
});   
    socket2 = io.connect("http://localhost:3000/communicateanddevelop/", {
        'reconnection delay': 0,
        'reopen delay': 0,
        'force new connection': true,
        transports: ['websocket'],
      });    
}); 

afterAll(() => {       
server.closeHttp();
});

 //testing sending message to server and other user receiving the message.
 //test.only to skip other testing only run individual tests.  
 test('sending message and checking if the other user has received it', (done) => {
    //sending message to server
    socket1.emit('message', "test")   
    console.log("Message Sent!") 
   // console.log(socket2)
    //other user receiving the message
    socket2.on('message returned', (msg) => {  
    console.log("message received")    
    expect(msg).toEqual(msg)  
    }) 
    done();
}) 

test('User 1 to be created', () => {
expect(socket1).toBeDefined;
})

test('User 2 to be created', () => {
expect(socket2).toBeDefined;
})
     

test('the Array is empty when the application is launched', () => {
expect(server.online).toBeNull;
})

test('the Array is not null, ID included', () => {
server.online.push("ABC123")    
expect(server.online).toEqual(["ABC123"]);
server.online.length = 0;
})

test('the Array has two ID values included', () => {  
server.online.push("ABC123")  
server.online.push("DEF123")  
expect(server.online).toEqual(["ABC123", "DEF123"]);
server.online.length = 0;
})

test('the Array has five ID values included' , () => {  
server.online.push("ABC123")  
server.online.push("DEF123")  
server.online.push("GHI123")  
server.online.push("JKL123")  
server.online.push("MNO123")  
expect(server.online).toEqual(["ABC123", "DEF123", "GHI123", "JKL123", "MNO123"]);
server.online.length = 0;
})

test('the Array contains the ID GHI123', () => {  
    server.online.push("ABC123")  
    server.online.push("DEF123")  
    server.online.push("GHI123")  
    server.online.push("JKL123")  
    server.online.push("MNO123")  
    expect(server.online).toContain("GHI123");
    server.online.length = 0;
})

test('the object to undefined when the application is launched', () => {
expect(server.sockets).toBeUndefined;
})

test('the socket object is to equal David', () => {
var id = "ABC123"
server.sockets[id] = "David"  
expect(server.sockets[id]).toEqual("David");
delete server.sockets[id];
})

test('the socket object to include Peter and Mary', () => {
var id1 = "ABC123"
server.sockets[id1] = "Peter" 
var id2 = "MAR123" 
server.sockets[id2] = "Mary" 
expect(server.sockets[id1]).toEqual("Peter");
expect(server.sockets[id2]).toEqual("Mary");
delete server.sockets[id1];
delete server.sockets[id2];
})

test('the user object ID to equal TEST123', () => {
var name = "Dave"
server.users[name] = "TEST123"  
expect(server.users[name]).toEqual("TEST123");
delete server.users[name];
})

test('the user IDs are TEST123 and TEST456', () => {
var name1 = "Dave"
var name2 = "Kerry"
server.users[name1] = "TEST123"  
server.users[name2] = "TEST456" 
expect(server.users[name1]).toEqual("TEST123");
expect(server.users[name2]).toEqual("TEST456");
delete server.users[name1];
delete server.users[name2];
})


 