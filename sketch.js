
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Ball;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options={
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	
    Ball = Bodies.circle(260,100,40,ball_options);
	World.add(world,Ball);

	ground1=new ground(width/2,670,width,20);
	leftSide=new ground(1100,600,20,120);
	rightSide=new ground(1400,600,20,120)

	//ground = createSprite

	Engine.run(engine);
    
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  ellipse(Ball.x,Ball.y,40,40)
  
  ground1.display()
  leftSide.display()
  rightSide.display()

  drawSprites();
 
}



