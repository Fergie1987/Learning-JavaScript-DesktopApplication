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
var CANVAS_WIDTH = 1000;
var CANVAS_HEIGHT = 600;
var SCALE = 30; 

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