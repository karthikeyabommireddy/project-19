var player_running,obstacleImage,obstaclegroup,backgroundImage,score,backGround,player;
var bananasGroup,bananaImage;
var rockGroup;

function preload(){
backgroundImage=loadImage("jungle.jpg");
player_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

bananaImage=loadImage("banana.png");
obstacleImage=loadImage("stone.png");
}
function setup() {
  
  createCanvas(800, 400);
  
  backGround=createSprite(0,0,800,400);
  backGround.addImage(backgroundImage);
  backGround.scale=1.5;
  backGround.x = backGround.width /2;
  backGround.velocityX = -4;
  
  player=createSprite(100,340,20,50);
  player.addAnimation("player",player_running);
  player.scale=0.1;
  
  ground=createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  
  bananasGroup=new Group();
  rockGroup=new Group();
  score=0;
  
}

function draw() {
  background(220);
  if(backGround.x<120){
  backGround.x = backGround.width /2;
  }
  if(ground.x<0){
  ground.x = ground.width /2;
  }
if(keyDown("space")){
player.velocityY=-12;
}
  player.velocityY=player.velocityY+0.8;
  if(player.isTouching(bananasGroup)){
    bananasGroup.destroyEach();
  score=score+2;
   
  }
 
  switch(score){
    case 10: player.scale = 0.12;
            break;
    case 20: player.scale = 0.14;
            break;
    case 30: player.scale = 0.16;
            break;
    case 40: player.scale = 0.18;
            break;
      default: break;
  }


  if(player.isTouching(rockGroup)){
 player.scale=0.08;
  }
  
  fruits();
  
  spawnObstacles();
  
  player.collide(ground);
   drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:" + score,380,20);
  
}
function fruits(){
   if(frameCount % 80 === 0){
    var bananas=createSprite(600,250,40,10);
    bananas.addImage(bananaImage);
    bananas.scale=0.05;
    var rand=random(120,200);
    bananas.y=rand;
    bananas.velocityX=-3;
    bananas.lifetime=300;
     player.depth=bananas.depth+1;
    bananasGroup.add(bananas);
     
  }
}
function spawnObstacles(){
  if(frameCount % 300 === 0){
    var rocks=createSprite(800,350,10,40);
    rocks.addImage(obstacleImage);
    rocks.scale=0.13;
    rocks.velocityX=-3;
    rocks.lifetime=300;
    rockGroup.add(rocks);
  }
}