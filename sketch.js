var  bullet,wall;
var speed, weight,thicness;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var deformation;


function setup() {
	createCanvas(800, 700);
   wall=createSprite()

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  deformation=0.5*weight*speed*speed/22500
   
  thickness=random(22,83);
  speed=random(55.90);
  weight=random(400,1500)
  drawSprites();
 
}



