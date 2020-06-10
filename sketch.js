var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof(355,200,340,80);

	 bob1 = new Bob(250);
	 bob2 = new Bob(300);
	 bob3 = new Bob(350);
	 bob4 = new Bob(400);
	 bob5 = new Bob(450);

	rope1 = new Rope(bob1.body,roof1.body,-100,40);
	rope2 = new Rope(bob2.body,roof1.body,-50,40);
	rope3 = new Rope(bob3.body,roof1.body,0,40);
    rope4 = new Rope(bob4.body,roof1.body,50,40);
	rope5 = new Rope(bob5.body,roof1.body,100,40);


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === 32)
	{
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-0.17,y:0.15})
	}
}



