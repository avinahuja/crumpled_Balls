
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,pap	
var world,engine;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width*2,20);
	dustbinObj=new dustbin(1200,650);
	pap = new paper(100,10,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  fill(rgb(Math.round(random(0,255)),Math.round(random(0,255)),Math.round(random(0,255))))
 text("up arrow to toss forward down arrow to toss backward",400,50,100,100)

  groundObject.display();
  dustbinObj.display();
  pap.display();

}

function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(pap.body,pap.body.position,{x:100,y:-100})
	}
	if(keyCode==DOWN_ARROW){
		Matter.Body.applyForce(pap.body,pap.body.position,{x:-100,y:100})
	}
}