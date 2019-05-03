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



//Creating the box2D world with zero gravity
world = new b2World( 
new b2Vec2(0, 0) //zero gravity 
, false //allow sleep
);



//Setting the width and height of the HTML Canvas. 
//The box2D Scale is set to 30 - Pixels converted to Box2D world sizes. 
var CANVAS_WIDTH = 500;
var CANVAS_HEIGHT = 560;
var SCALE = 30; 

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

console.log("Reached Here");

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
};

console.log("Message1");

//Enables object drawing on the canvas.
var debugDraw = new b2DebugDraw(); 
debugDraw.SetSprite(document.getElementById("can").getContext("2d")); 
debugDraw.SetDrawScale(SCALE); 
debugDraw.SetFillAlpha(0.3); 
debugDraw.SetLineThickness(1.0); 
debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit); 
world.SetDebugDraw(debugDraw); 



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
}
window.requestAnimationFrame(update); 


//Contact Listeners, used when collisions between objects occur. 
//Each listener type can be used for diffrent solutions.
var listener = new Box2D.Dynamics.b2ContactListener;

listener.BeginContact = function(contact) {
};

listener.PreSolve = function(contact) {
};

listener.EndContact = function(contact) {
};

listener.PostSolve = function(contact) {
};


this.world.SetContactListener(listener);