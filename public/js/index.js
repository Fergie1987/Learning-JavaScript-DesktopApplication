//Box2D Setup Variables
var b2Vec2 = Box2D.Common.Math.b2Vec2;
var b2BodyDef = Box2D.Dynamics.b2BodyDef;
var b2Body = Box2D.Dynamics.b2Body;
var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
var b2Fixture = Box2D.Dynamics.b2Fixture;
var b2World = Box2D.Dynamics.b2World;
var b2MassData = Box2D.Collision.Shapes.b2MassData;
var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;

var destroy_list = [];



//Creating the box2D world with zero gravity
world = new b2World( 
new b2Vec2(0, 0) //zero gravity 
, false //allow sleep
);

$(window).keydown(function(e) { 
if(e.keyCode == 37) {
console.log("left");
left();
}
if(e.keyCode == 39) {
console.log("right");
right();
}
if(e.keyCode == 38 ) {
console.log("up");
up();
}
if(e.keyCode == 40) {
console.log("down");
down();
}
});

$(window).keyup(function(e) {
console.log(e.keyCode);
if(e.keyCode == 37 ) {
stop();
}
if(e.keyCode == 39) {
stop();
}
if(e.keyCode == 38) {
stop();
} if(e.keyCode == 40){
stop();
}
}); 

function left() {
pacman.GetBody().ApplyImpulse(new b2Vec2(-5, 0), pacman.GetBody().GetWorldCenter());
};

function right () {
pacman.GetBody().ApplyImpulse(new b2Vec2(5, 0), pacman.GetBody().GetWorldCenter()); 
};

function up () {
pacman.GetBody().ApplyImpulse(new b2Vec2(0, -5), pacman.GetBody().GetWorldCenter());
};

function down () {
pacman.GetBody().ApplyImpulse(new b2Vec2(0, 5), pacman.GetBody().GetWorldCenter());
};

function stop() {
pacman.GetBody().SetLinearVelocity(new b2Vec2(0, 0));
};

//Setting the width and height of the HTML Canvas. 
//The box2D Scale is set to 30 - Pixels converted to Box2D world sizes. 
var CANVAS_WIDTH = 500;
var CANVAS_HEIGHT = 560;
var SCALE = 30; 

var pelletX = [ 
[130], 
[130],
[130],
[130],
[130],

[],
[], 
[],
[],
[],
[],
[],

[],
[],
[],
[],
[],
[],
[],

[],
[],
[],
[],
[],
[],
[],
]; 

var pelletY = [
[100],
[200],
[300],
[400],
[500],

[],
[],
[],
[],
[],
[],
[],

[],
[],
[],
[],
[],
[],
[],

[],
[],
[],
[],
[],
[],
[],
];

//Method to run the addPellet function. 
addPellet(pelletX, pelletY); 

//Array of Numbers to create the GameGrid. 
var gameGrid = [
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
[0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
[0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1],
[0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
[0, 1, 1, 1, 0, 0, 10, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 9, 0, 0, 1, 1, 1],
[0, 1, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 1],
[0, 1, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 1],
[0, 1, 0, 0, 1, 1, 10, 0, 0, 1, 0, 0, 1, 1, 4, 4, 4, 1, 1, 0, 0, 1, 0, 0, 9, 1, 1, 0, 0, 1],
[0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3],
[0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3],
[0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1],
[0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
[0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
[0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1],
[0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
[0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
[0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
[0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1],
[0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
[0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
[0, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,11,11,11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5]
]

//for loops to create the gameGrid on the canvas 

for (var i = 0; i < (gameGrid.length); i++) {
for (j = 0; j < (gameGrid[0].length); j++) {
if (gameGrid[i][j] == 1) {
createBodies(1, 0, 0, '8/SCALE', '8/SCALE', true, (j * 16 + 8) + '/SCALE', (i * 16 + 8) + '/SCALE', "ground", "ground", false);
} else if (gameGrid[i][j] == 2) {
createBodies(1, 0, 0, '8/SCALE', '8/SCALE', true, (j * 16) + '/SCALE', (i * 16 + 8) + '/SCALE', "left", "left", true);
} else if (gameGrid[i][j] == 3) {
createBodies(1, 0, 0, '8/SCALE', '8/SCALE', true, (j * 16 + 16) + '/SCALE', (i * 16 + 8) + '/SCALE', "right", "right", true);
} else if (gameGrid[i][j] == 5) {
createBodies(1, 0, 0, '8/SCALE', '8/SCALE', true, (j * 16 + 8) + '/SCALE', (i * 16 + 8) + '/SCALE', "rightturn", "rightturn", false);
} else if (gameGrid[i][j] == 6) {
createBodies(1, 0, 0, '8/SCALE', '8/SCALE', true, (j * 16 + 8) + '/SCALE', (i * 16 + 8) + '/SCALE', "leftturn", "leftturn", false);
} else if (gameGrid[i][j] == 7) {
createBodies(1, 0, 0, '8/SCALE', '8/SCALE', true, (j * 16 + 8) + '/SCALE', (i * 16 + 8) + '/SCALE', "topLeft", "topLeft", false);
} else if (gameGrid[i][j] == 8) {
createBodies(1, 0, 0, '8/SCALE', '8/SCALE', true, (j * 16 + 8) + '/SCALE', (i * 16 + 8) + '/SCALE', "topRight", "topRight", false);
} else if (gameGrid[i][j] == 9) {
createBodies(1, 0, 0, '8/SCALE', '8/SCALE', true, (j * 16 + 8) + '/SCALE', (i * 16 + 8) + '/SCALE', "middleRight", "middleRight", false);
} else if (gameGrid[i][j] == 10) {
createBodies(1, 0, 0, '8/SCALE', '8/SCALE', true, (j * 16 + 8) + '/SCALE', (i * 16 + 8) + '/SCALE', "middleLeft", "middleLeft", false); 
} else if (gameGrid[i][j] == 11) {
createBodies(1, 0, 0, '8/SCALE', '8/SCALE', true, (j * 16 + 8) + '/SCALE', (i * 16 + 16) + '/SCALE', "bottom", "bottom", false); 
} 
} 
} 

//method to create the bodies within the box2D world - used within the for loop 

function createBodies(density, friction, restitution, wi, hi, static, x, y, name, userdata, sensor) {
var fixDef = new b2FixtureDef;
fixDef.density = density;
fixDef.friction = friction;
fixDef.restitution = restitution;
fixDef.shape = new b2PolygonShape;
fixDef.shape.SetAsBox(eval(wi), eval(hi));
fixDef.isSensor = sensor;

var bodyDef = new b2BodyDef;
bodyDef.type = b2Body.b2_staticBody;
bodyDef.position.x = eval(x);
bodyDef.position.y = eval(y);
name = world.CreateBody(bodyDef).CreateFixture(fixDef);
name.GetBody().SetUserData({
id: userdata
});
} 

var bodyDefpacman = new b2BodyDef; 
bodyDefpacman.type = b2Body.b2_dynamicBody; 
var fixDefpacman = new b2FixtureDef; 
fixDefpacman.shape = new b2PolygonShape; 
fixDefpacman.shape = new b2CircleShape(0.4); 
fixDefpacman.density = 1.0; 
fixDefpacman.friction = 0; 
fixDefpacman.restitution = 0.001; 
bodyDefpacman.position.x = (100) / SCALE; 
bodyDefpacman.position.y = (100) / SCALE; 
pacman = world.CreateBody(bodyDefpacman).CreateFixture(fixDefpacman); 
pacman.GetBody().SetUserData({
id: "pacman"
});
pacman.GetBody().SetFixedRotation(true); 

var bodyDefghost = new b2BodyDef; 
bodyDefghost.type = b2Body.b2_dynamicBody; 
var fixDefghost = new b2FixtureDef; 
fixDefghost.shape = new b2PolygonShape; 
fixDefghost.shape.SetAsBox(( 10/ SCALE), ( 10/ SCALE)); //size of object 
fixDefghost.density = 1.0;
fixDefghost.friction = 0;
fixDefghost.restitution = 0.001;
bodyDefghost.position.x = (120) / SCALE;
bodyDefghost.position.y = (120) / SCALE;
ghost1 = world.CreateBody(bodyDefghost).CreateFixture(fixDefghost);
ghost1.GetBody().SetUserData({
id: "ghost1"
});
ghost1.GetBody().SetFixedRotation(true); 


//Enables object drawing on the canvas.
var debugDraw = new b2DebugDraw(); 
debugDraw.SetSprite(document.getElementById("can").getContext("2d")); 
debugDraw.SetDrawScale(SCALE); 
debugDraw.SetFillAlpha(0.3); 
debugDraw.SetLineThickness(1.0); 
debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit); 
world.SetDebugDraw(debugDraw); 

function addPellet(pelletX, pelletY) {
for (var i = 0; i < pelletX.length; i++) {
for (var j = 0; j < 1; j++) {
if (pelletX[i] != null) { 
var fixDefPellet = new b2FixtureDef;
fixDefPellet.density = 1.0;
fixDefPellet.friction = 0.5;
fixDefPellet.restitution = 0;
fixDefPellet.isSensor = true;
var bodyDefPellet = new b2BodyDef;
fixDefPellet.shape = new b2CircleShape(0.2);
bodyDefPellet.type = b2Body.b2_staticBody;
bodyDefPellet.position.x = (pelletX[i][j]) / SCALE;
bodyDefPellet.position.y = (pelletY[i][j]) / SCALE
pellet = world.CreateBody(bodyDefPellet).CreateFixture(fixDefPellet);
pellet.GetBody().SetFixedRotation(true);
pellet.GetBody().SetUserData({
id: "pellet" 
});
}
}

}
};


//update the box2D world on the canvas
function update() {
world.Step (
1/60 //frame-rate
, 10 //velocity iterations
, 10 //position iterations
);
world.DrawDebugData();
world.ClearForces();
window.requestAnimationFrame(update);
  
for(var i in destroy_list) {
world.DestroyBody(destroy_list[i]);
}

//reset the array after destroying object bodies
destroy_list.length = 0;
}
window.requestAnimationFrame(update); 


//Contact Listeners, used when collisions between objects occur. 
//Each listener type can be used for diffrent solutions.
var listener = new Box2D.Dynamics.b2ContactListener;

listener.BeginContact = function(contact) {
  if(contact.GetFixtureA().GetBody().GetUserData().id == "pacman" && contact.GetFixtureB().GetBody().GetUserData().id == "pellet") {
destroy_list.push(contact.GetFixtureB().GetBody());
} else if (contact.GetFixtureB().GetBody().GetUserData().id == "pellet" && contact.GetFixtureA().GetBody().GetUserData().id == "pellet") {
destroy_list.push(contact.GetFixtureB().GetBody());
};
};

listener.PreSolve = function(contact) {
};

listener.EndContact = function(contact) {
};

listener.PostSolve = function(contact) {
};


this.world.SetContactListener(listener);