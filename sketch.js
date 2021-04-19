var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy, fairyImg, fairyMving, fairyHand;
var fairyVce;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
    fairyImg = loadAnimation("images/fairy.png");
	fairyMving = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	fairyVce = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	fairyVce.play();

	//create fairy sprite and add animation for fairy
	fairy = createSprite(200,350);
	fairy.addAnimation("fairy",fairyImg);
	fairy.scale = 0.2;

	fairyHand = createSprite(270,325,30,10);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  fairy.debug = false;
  fairyHand.debug = true;
  fairyHand.visible =false;
  fairyHand.setCollider("rectangle",-5,0,15,10);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);
 
  if(keyDown("left")){
	  keyPressed();
  }
  else{
	  fairy.changeAnimation("fairy");
  }
  if(keyDown("right")){
	keyPressed();
}
else{
	fairy.changeAnimation("fairy")
}

  if(keyDown(DOWN_ARROW)){
	  keyPressed();
  }

  //write code to stop star in the hand of fairy
  if(star.isTouching(fairyHand)){
	  Matter.Body.setStatic(starBody,true);
  }

  drawSprites();
  
  
}

function keyPressed() {

	fairy.addAnimation("wings",fairyMving);

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyDown("left")){
		fairy.x = fairy.x -2;
		fairyHand.x = fairyHand.x -2;
		
		fairy.changeAnimation("wings");
	}
	if(keyDown("right")){
		fairy.x = fairy.x +2;
		fairyHand.x = fairyHand.x +2;
		
		fairy.changeAnimation("wings");
	}
	
}

