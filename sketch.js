
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground,tree;
var stone;
var boyImage,boy;
var launcher;
var back;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;

function preload()
{
 boyImage=loadImage("boy.png");	
 //back=loadImage("farm-fields.jpg");
}

function setup() {
	createCanvas(1366,690);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(600,height,1600,20);
    tree=new Tree(1100,700);

	stone=new Stone(1000,1000,20,20);

	boy=createSprite(180,640,10,10);
	boy.addImage(boyImage);
	boy.scale=0.08;
	
	mango1=new Mango(1100,350,20);
	mango2=new Mango(1050,200,20);
	mango3=new Mango(920,330,20);
	mango4=new Mango(1150,275,20);
	mango5=new Mango(1200,300,20);
	mango6=new Mango(1250,250,20);
	mango7=new Mango(1050,260,20);
    launcher=new Launcher(stone.body,{x:140,y:600});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  textSize(25);
  text("PRESS SPACE TO GET SECOND CHANCE TO PLAY!!",100,100);
  
 ground.display();
 tree.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();

 launcher.display();
 stone.display();

 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
 detectCollision(stone,mango6);
 detectCollision(stone,mango7);
 drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
    launcher.fly();
}

function detectCollision(lstone,lmango){
 mangoBodyPosition=lmango.body.position
 stoneBodyPosition=lstone.body.position
 
 var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance<=lmango.r+lstone.r){
	   Matter.Body.setStatic(lmango.body,false);
   }
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		launcher.attach(stone.body);
	}
}


