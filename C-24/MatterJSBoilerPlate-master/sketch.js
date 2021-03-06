
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,650,800,10)
	paper = new Paper(10,625,12.5)

	boxPosition=width/2+200
	boxY=610;


	boxleftSprite=createSprite(boxPosition+55, boxY, 10,50);
	boxleftSprite.shapeColor=color(255,0,0);

	boxLeftBody = Bodies.rectangle(boxPosition+55, boxY, 10,50 , {isStatic:true} );
	World.add(world, boxLeftBody);

	boxBase=createSprite(boxPosition+100, boxY+30, 100,10);
	boxBase.shapeColor=color(255,0,0);

	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+30, 100,10 , {isStatic:true} );
	World.add(world, boxBottomBody);

	boxrightSprite=createSprite(boxPosition+145 , boxY, 10,50);
	boxrightSprite.shapeColor=color(255,0,0);

	boxRightBody = Bodies.rectangle(boxPosition+145 , boxY, 10,50 , {isStatic:true} );
	World.add(world, boxRightBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	paper.display()
	ground.display()

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:27,y:-25})
	}
}



