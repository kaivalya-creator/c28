var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, lineb, linel, liner;
var paper1, dustbinImage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImage = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	lineb = createSprite(600, 650, 200, 20);
	lineb.visible = false
	linel = createSprite(500, 610, 20, 100);
	linel.visible = false
	liner = createSprite(700, 610, 20, 100);
	liner.visible = false
	engine = Engine.create();
	world = engine.world;

	var options ={
		isStatic:true
	}

	linebBody = Bodies.rectangle(600, 630, 200, 20, options);
	linelBody = Bodies.rectangle(500, 610, 20, 100, options);
	linerBody = Bodies.rectangle(700, 610, 20, 100, options);
	World.add(world, linebBody);
	World.add(world, linelBody);
	World.add(world, linerBody);

	paper1 = new paper(200, 450);
	sling = new slingshot(paper1.body, {x:200, y:600})


	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  sling.display()

	paper1.display();
  rect(ground.position.x, ground.position.y, 800, 30);
	image(dustbinImage, 600, 620, 200, 100)
 
 
  drawSprites();

}

function keyPressed() {
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:85, y:-85})
	}


}



