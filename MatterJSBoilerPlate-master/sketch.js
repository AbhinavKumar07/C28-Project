
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy , boyImage;
var stone1;
var ground1;
var tree1;


function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	boy = createSprite(200,500,30,100);
	boy.addImage("boy",boyImage);
	boy.scale = 0.15;

	engine = Engine.create();
	world = engine.world;

	ground1 = new ground(width/2,650,width,5);

	stone1 = new stone(200,500,10,10);

	tree1 = new tree(600,600,50,95);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display();
  
  stone1.display();

  tree1.display();
  
  drawSprites();
 
}



