
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var I1, I2;

function preload() {
  I1 = loadImage("sImages/paper.png");
  I2 = loadImage("sImages/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  G = new ground(400,615,800,50);
  D1 = new Dustbin(525,515,20,150);
  D2 = new Dustbin(635,578,200,25);
  D3 = new Dustbin(745,515,20,150);
  SP = new BB(115,600,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  G.display();
  D1.display();
  D2.display();
  D3.display();
  SP.display();

  keyPressed();
  drawSprites();
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(SP.body,SP.body.position,{x:1,y:-1});
  }
}



