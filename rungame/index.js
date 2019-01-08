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

world = new b2World(
new b2Vec2(0, 0) //zero gravity 
, false //allow sleep
);

var CANVAS_WIDTH = 1000;
var CANVAS_HEIGHT = 600;
var SCALE = 30; 

$(window).keydown(function(e) { 
if(e.keyCode == 37) {
console.log("left-down");
lefts();
}
if(e.keyCode == 39) {
console.log("right-down");
rights();
}
if(e.keyCode == 38) {
console.log("up-up");
up();
}
if(e.keyCode == 40) {
console.log("down-down");
down();
}
});

$(window).keyup(function(e) {
console.log(e.keyCode);
if(e.keyCode == 37) {
console.log("left-up");
stop();
}
if(e.keyCode == 39) {
console.log("right-up");
stop();
}
if(e.keyCode == 38) {
console.log("up-up");
stop();
} if(e.keyCode == 40){
console.log("down-up");
stop();
}
}); 

$(window).keydown(function(e) { 
if(e.keyCode == 37) {
console.log("left-down");
lefts();
}
if(e.keyCode == 39) {
console.log("right-down");
rights();
}
if(e.keyCode == 38) {
console.log("up-up");
up();
}
if(e.keyCode == 40) {
console.log("down-down");
down();
}
});

$(window).keyup(function(e) {
console.log(e.keyCode);
if(e.keyCode == 37) {
console.log("left-up");
stop();
}
if(e.keyCode == 39) {
console.log("right-up");
stop();
}
if(e.keyCode == 38) {
console.log("up-up");
stop();
} if(e.keyCode == 40){
console.log("down-up");
stop();
}
}); 

function lefts() {
left = true;
pacman.GetBody().ApplyImpulse(new b2Vec2(-5, 0), pacman.GetBody().GetWorldCenter());
};

function rights() {
pacman.GetBody().ApplyImpulse(new b2Vec2(5, 0), pacman.GetBody().GetWorldCenter()); 
};

function up() {
pacman.GetBody().ApplyImpulse(new b2Vec2(0, -5), pacman.GetBody().GetWorldCenter());
};

function down() {
pacman.GetBody().ApplyImpulse(new b2Vec2(0, 5), pacman.GetBody().GetWorldCenter());
};

function stop() {
pacman.GetBody().SetLinearVelocity(new b2Vec2(0, 0));
};

var debugDraw = new b2DebugDraw(); 
debugDraw.SetSprite(document.getElementById("can").getContext("2d")); 
debugDraw.SetDrawScale(SCALE); 
debugDraw.SetFillAlpha(0.3); 
debugDraw.SetLineThickness(1.0); 
debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit); 
world.SetDebugDraw(debugDraw); 

var fixDef = new b2FixtureDef; 
fixDef.density = 1.0; 
fixDef.friction = 0.5; 
fixDef.restitution = 0; 
fixDef.shape = new b2PolygonShape; 
fixDef.shape.SetAsBox((CANVAS_WIDTH/SCALE)/2, (100/SCALE)/2); 
var bodyDef = new b2BodyDef; 
bodyDef.type = b2Body.b2_staticBody; 
bodyDef.position.x = CANVAS_WIDTH/2/SCALE; 
bodyDef.position.y = CANVAS_HEIGHT/SCALE - (20/SCALE); 
var bottom = world.CreateBody(bodyDef).CreateFixture(fixDef); 
bottom.GetBody().SetUserData({id: "bottom"}) 

var fixDefTop = new b2FixtureDef;
fixDefTop.density = 1.0;
fixDefTop.friction = 0.5;
fixDefTop.restitution = 0;
fixDefTop.shape = new b2PolygonShape;
fixDefTop.shape.SetAsBox((CANVAS_WIDTH/SCALE)/2, (100/SCALE)/2);
var bodyDefTop = new b2BodyDef;
bodyDefTop.type = b2Body.b2_staticBody;
bodyDefTop.position.x = (CANVAS_WIDTH/2/SCALE);
bodyDefTop.position.y = (CANVAS_HEIGHT/SCALE) - (580/SCALE);
var canvasTop = world.CreateBody(bodyDefTop).CreateFixture(fixDefTop);
canvasTop.GetBody().SetUserData({id: "canvasTop"}) 

var fixDefSide = new b2FixtureDef; 
fixDefSide.density = 1.0;
fixDefSide.friction = 0.5;
fixDefSide.restitution = 0;
fixDefSide.shape = new b2PolygonShape;
fixDefSide.shape.SetAsBox((200/SCALE)/2, (CANVAS_HEIGHT/SCALE)/2);

var bodyDefRight = new b2BodyDef;
bodyDef.type = b2Body.b2_staticBody;
bodyDefRight.position.x = (CANVAS_WIDTH-20) / SCALE;
bodyDefRight.position.y = (CANVAS_HEIGHT/SCALE)/2;
var right = world.CreateBody(bodyDefRight).CreateFixture(fixDefSide);
right.GetBody().SetUserData({id: "right"})

var bodyDefLeft = new b2BodyDef;
bodyDef.type = b2Body.b2_staticBody;
bodyDefLeft.position.x = (20/SCALE);
bodyDefLeft.position.y = (CANVAS_HEIGHT/SCALE)/2; 
var left = world.CreateBody(bodyDefLeft).CreateFixture(fixDefSide); 
left.GetBody().SetUserData({id: "left"})

var fixDefCircle = new b2FixtureDef;
fixDefCircle.density = 1.0;
fixDefCircle.friction = 0.5;
fixDefCircle.restitution = 0;
fixDefCircle.shape = new b2CircleShape(0.6);
var bodyDefCircle = new b2BodyDef;
bodyDefCircle.type = b2Body.b2_dynamicBody;
bodyDefCircle.position.x = (500)/SCALE;
bodyDefCircle.position.y = (CANVAS_HEIGHT-40)/SCALE;
var pacman = world.CreateBody(bodyDefCircle).CreateFixture(fixDefCircle);
pacman.GetBody().SetFixedRotation(true);
pacman.GetBody().SetUserData({id: "pacman"});

var bodyDefRect1 = new b2BodyDef; 
var fixDefRect1 = new b2FixtureDef; 
fixDefRect1.shape = new b2PolygonShape; 
fixDefRect1.shape.SetAsBox((100/SCALE)/2, (85/SCALE)/2); 
fixDefRect1.density = 1.0; 
fixDefRect1.friction = 0; 
fixDefRect1.restitution = 0; 
bodyDefRect1.position.x = (250) / SCALE; 
bodyDefRect1.position.y = (CANVAS_HEIGHT-373)/SCALE; 
var rect1 = world.CreateBody(bodyDefRect1).CreateFixture(fixDefRect1); 
rect1.GetBody().SetUserData({id: "rect1"}); 


var bodyDefRect2 = new b2BodyDef; 
var fixDefRect2 = new b2FixtureDef; 
fixDefRect2.shape = new b2PolygonShape;
fixDefRect2.shape.SetAsBox((250/SCALE)/2, (50/SCALE)/2);
fixDefRect2.density = 1.0;
fixDefRect2.friction = 0;
fixDefRect2.restitution = 0;
bodyDefRect2.position.x = (325) / SCALE;
bodyDefRect2.position.y = (CANVAS_HEIGHT-440)/SCALE;
var rect2 = world.CreateBody(bodyDefRect2).CreateFixture(fixDefRect2);
rect2.GetBody().SetUserData({id: "rect2"});

var bodyDefRect3 = new b2BodyDef; 
var fixDefRect3 = new b2FixtureDef; 
fixDefRect3.shape = new b2PolygonShape; 
fixDefRect3.shape.SetAsBox((100/SCALE)/2, (85/SCALE)/2); 
fixDefRect3.density = 1.0; 
fixDefRect3.friction = 0; 
fixDefRect3.restitution = 0;
bodyDefRect3.position.x = (250) / SCALE;
bodyDefRect3.position.y = (CANVAS_HEIGHT-220)/SCALE;
var rect3 = world.CreateBody(bodyDefRect3).CreateFixture(fixDefRect3);
rect3.GetBody().SetUserData({id: "rect3"});

var bodyDefRect4 = new b2BodyDef;
var fixDefRect4 = new b2FixtureDef;
fixDefRect4.shape = new b2PolygonShape;
fixDefRect4.shape.SetAsBox((250/SCALE)/2, (50/SCALE)/2);
fixDefRect4.density = 1.0;
fixDefRect4.friction = 0;
fixDefRect4.restitution = 0;
bodyDefRect4.position.x = (325) / SCALE;
bodyDefRect4.position.y = (CANVAS_HEIGHT-152)/SCALE;
var rect4 = world.CreateBody(bodyDefRect4).CreateFixture(fixDefRect4);
rect4.GetBody().SetUserData({id: "rect4"});

var bodyDefRect5 = new b2BodyDef;
var fixDefRect5 = new b2FixtureDef;
fixDefRect5.shape = new b2PolygonShape;
fixDefRect5.shape.SetAsBox((100/SCALE)/2, (85/SCALE)/2);
fixDefRect5.density = 1.0;
fixDefRect5.friction = 0;
fixDefRect5.restitution = 0;
bodyDefRect5.position.x = (750) / SCALE;
bodyDefRect5.position.y = (CANVAS_HEIGHT-373)/SCALE;
var rect5 = world.CreateBody(bodyDefRect5).CreateFixture(fixDefRect5);
rect5.GetBody().SetUserData({id: "rect5"});

var bodyDefRect6 = new b2BodyDef;
var fixDefRect6 = new b2FixtureDef;
fixDefRect6.shape = new b2PolygonShape;
fixDefRect6.shape.SetAsBox((250/SCALE)/2, (50/SCALE)/2);
fixDefRect6.density = 1.0;
fixDefRect6.friction = 0;
fixDefRect6.restitution = 0;
bodyDefRect6.position.x = (675) / SCALE;
bodyDefRect6.position.y = (CANVAS_HEIGHT-440)/SCALE;
var rect6 = world.CreateBody(bodyDefRect6).CreateFixture(fixDefRect6);
rect6.GetBody().SetUserData({id: "rect6"});
var bodyDefRect7 = new b2BodyDef;
var fixDefRect7 = new b2FixtureDef;
fixDefRect7.shape = new b2PolygonShape;
fixDefRect7.shape.SetAsBox((100/SCALE)/2, (85/SCALE)/2);
fixDefRect7.density = 1.0;
fixDefRect7.friction = 0;
fixDefRect7.restitution = 0;
bodyDefRect7.position.x = (750) / SCALE;
bodyDefRect7.position.y = (CANVAS_HEIGHT-220)/SCALE;
var rect7 = world.CreateBody(bodyDefRect7).CreateFixture(fixDefRect7);
rect7.GetBody().SetUserData({id: "rect7"});

var bodyDefRect8 = new b2BodyDef;
var fixDefRect8 = new b2FixtureDef;
fixDefRect8.shape = new b2PolygonShape;
fixDefRect8.shape.SetAsBox((250/SCALE)/2, (50/SCALE)/2);
fixDefRect8.density = 1.0;
fixDefRect8.friction = 0;
fixDefRect8.restitution = 0;
bodyDefRect8.position.x = (675) / SCALE;
bodyDefRect8.position.y = (CANVAS_HEIGHT-152)/SCALE;
var rect8 = world.CreateBody(bodyDefRect8).CreateFixture(fixDefRect8);
rect8.GetBody().SetUserData({id: "rect8"});

var bodyDefRect9 = new b2BodyDef;
var fixDefRect9 = new b2FixtureDef;
fixDefRect9.shape = new b2PolygonShape;
fixDefRect9.shape.SetAsBox((120/SCALE)/2, (120/SCALE)/2);
fixDefRect9.density = 1.0;
fixDefRect9.friction = 0;
fixDefRect9.restitution = 0;
bodyDefRect9.position.x = (500) / SCALE;
bodyDefRect9.position.y = (CANVAS_HEIGHT-300)/SCALE;
var rect9 = world.CreateBody(bodyDefRect9).CreateFixture(fixDefRect9);
rect9.GetBody().SetUserData({id: "rect9"});

addPellet(160, 500); 
addPellet(160, 450); 
addPellet(160, 400);
addPellet(160, 350);
addPellet(160, 300);
addPellet(160, 250);
addPellet(160, 200);
addPellet(160, 150);
addPellet(160, 100);
addPellet(840, 500);
addPellet(840, 450);
addPellet(840, 400);
addPellet(840, 350);
addPellet(840, 300);
addPellet(840, 250);
addPellet(840, 200);
addPellet(840, 150);
addPellet(840, 100);
addPellet(220, 500);
addPellet(280, 500);
addPellet(340, 500);
addPellet(400, 500);
addPellet(460, 500);
addPellet(520, 500);
addPellet(580, 500);
addPellet(640, 500);
addPellet(700, 500);
addPellet(770, 500);
addPellet(220, 100);
addPellet(280, 100);
addPellet(340, 100);
addPellet(400, 100);
addPellet(580, 100);
addPellet(640, 100);
addPellet(700, 100);
addPellet(770, 100);
addPellet(220, 300);
addPellet(280, 300);
addPellet(340, 300);
addPellet(400, 300);
addPellet(600, 300);
addPellet(660, 300);
addPellet(720, 300);
addPellet(780, 300);
addPellet(340, 385);
addPellet(400, 385);
addPellet(460, 385);
addPellet(530, 385);
addPellet(600, 385);
addPellet(660, 385);
addPellet(340, 210);
addPellet(400, 210);
addPellet(460, 210);
addPellet(530, 210);
addPellet(600, 210);
addPellet(660, 210);
addPellet(500, 440);
addPellet(500, 150);

function addPellet(posX, posY) {
var fixDefPellet = new b2FixtureDef;
fixDefPellet.density = 1.0;
fixDefPellet.friction = 0.5;
fixDefPellet.restitution = 0;
fixDefPellet.shape = new b2CircleShape(0.4);

var bodyDefPellet = new b2BodyDef;
bodyDefPellet.type = b2Body.b2_staticBody;
bodyDefPellet.position.x = (posX) / SCALE;
bodyDefPellet.position.y = (CANVAS_HEIGHT-posY)/SCALE;

var pellet = world.CreateBody(bodyDefPellet).CreateFixture(fixDefPellet);
pellet.GetBody().SetUserData({id: "pellet"});
};

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