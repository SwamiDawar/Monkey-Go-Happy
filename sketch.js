var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var invisibleGround;
var score = 0;
var jungleImage;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  jungleImage = loadImage('jungle.jpg');
 
}



function setup() {
  createCanvas(600,400);
  
  monkey = createSprite(50,350,10,10);
  monkey.addAnimation('running',monkey_running);
  monkey.scale = 0.09;
  
  invisibleGround = createSprite(300,375,600,1)
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background(jungleImage);
  text('This is your score ' + score,490,30)
  drawSprites();
  monkey.collide(invisibleGround);
  if(gameState == PLAY){
    monkey.velocityY = monkey.velocityY + 0.8;
    rocks();
    food();
    if(keyDown('space') && monkey.y > 325){
      monkey.velocityY = -10;
    }
  }
  if(gameState == END){
    
  }
  if(monkey.isTouching(foodGroup)){
    score = score + 1;
    foodGroup.destroyEach();
  }
  if(monkey.isTouching(obstacleGroup)){
    gameState = END; 
    foodGroup.destroyEach();
    obstacleGroup.destroyEach();
  }
}

function rocks(){
  if(frameCount % 200 == 0){
    obstacle = createSprite(700,350,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4;
    obstacle.scale = 0.09;
    obstacleGroup.add(obstacle);
  }
}
function food(){
  if(frameCount % 150 == 0){
    banana = createSprite(700,300,10,10);
    banana.addImage(bananaImage);
    banana.scale = 0.09;
    banana.velocityX = -4;
    foodGroup.add(banana);
  }
  
}



