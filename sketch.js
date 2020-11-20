
var monkey, monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup;
var score=0;

function preload(){
  
monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(800, 400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,348,900,10);
  ground.VelocityX = -4;
  ground.x = ground.width/2;
  ground.shapeColor = "brown";
  
  obstaclesGroup = new Group();
  FoodGroup = new Group();

  
}


function draw() {
  background(245);
  
  score = score + Math.round(getFrameRate()/50);
  
  textSize(45);
  fill("brown");
  text("Score: "+ score, 480,50);
  
  if(keyDown("space")){
      monkey.velocityY = -13.5;
     }
  
   monkey.velocityY = monkey.velocityY + 1.3
  
  monkey.collide(ground);
  
  if(obstaclesGroup.isTouching(monkey)){
    monkey.destroy();
    ground.velocityX = 0;
    score = 0;
    obstaclesGroup.destroyEach();
    FoodGroup.destroyEach();
  }
  
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
  }
  
spawnBananas();
spawnObstacles();
drawSprites();  
}

function spawnObstacles(){
   
  if(frameCount%300===0){
    var obstacle = createSprite(800,325);
    obstacle.velocityX = -7;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstaclesGroup.add(obstacle);

  }
}

function spawnBananas(){
  
  if(frameCount%100===0){
    var banana = createSprite(800,235);
    banana.velocityX = -7;
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    FoodGroup.add(banana);
    
    
  }
}





















