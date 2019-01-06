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