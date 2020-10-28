
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	background("black");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	rect1Sprite = createSprite(500, 610, 20, 100);
	rect1Sprite.shapeColor = color(255, 0, 0);

	rect2Sprite = createSprite(700, 610, 20, 100);
	rect2Sprite.shapeColor = color(255, 0, 0);

	rect3Sprite = createSprite(600, 650, 200, 20);
	rect3Sprite.shapeColor = color(255, 0, 0);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new paper();
	ground1 = new ground();
	dustbin1 = new dustbin();



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.paper, paper1.paper.position, {x:15,y:-15});

	}

}



