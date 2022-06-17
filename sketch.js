
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}

//groundObj=new ground(width/2,2,670,width,20);
//world.add(world, groundObj)
//leftSdid= new ground(1100,600,20,120);
//world.add(world, leftSide)
	//groundObj=newground(width/2,670,width,20);
	//leftSide=newground(1100,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 groundObj.display();
 leftSide.display();
}

function keyPressed(){
	if(KeyCode=== UP_ARROW){
		
	}
}


