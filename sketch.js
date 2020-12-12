
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey=createSprite(50,370,20,20)
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  ground=createSprite(200,380,400,10)
  bananaGroup= new Group();
  obstacleGroup= new Group();
}


function draw() {
background("purple")
monkey.collide(ground)
if(keyDown("space")){
   monkey.velocityY=-10
   }
  monkey.velocityY=monkey.velocityY+0.5
  
  
  
  
  spawnBanana();
  spawnobstacle();
  
  
  
drawSprites();}

function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    
   

    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
  
}
function spawnobstacle() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(400,360,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    
   

    
    //add each cloud to the group
    obstacleGroup.add(obstacle);
  }
  
}



