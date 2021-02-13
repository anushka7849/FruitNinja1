var sword,swordImage;
var fruit,fruit1,fruit2,fruit3,fruit4,fruit5;
var monster,alien1,alien2;
var gameOver,gameOverImage;
var PLAY=1;
var END=0;
var gameState=1;

var score=0;

function preload(){
 swordImage=loadImage("sword.png");
 
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  fruit5=loadImage("litchi.tiff");
  
  alien1=loadImage("alien1.png");
  alien2=loadImage("alien2.png");
  
  gameOverImage=loadImage("gameover.png");
  
}

function setup(){
 createCanvas(600,600) ;
  
  sword=createSprite(50,180,20,50);
  sword.addImage("swordImage",swordImage);
  sword.scale=0.5;
  
  fruitGroup=createGroup();
  enemyGroup=createGroup();
}

function draw(){
 background("gold");
   
 textSize(20);
 fill("green");
 text("Score: "+ score,260,25);  
  
  
 
 if(gameState===PLAY){
 sword.y=World.mouseY;
 sword.x=World.mouseX;
 fruits();
 enemy();
 }

if(fruitGroup.isTouching(sword)){
  fruitGroup.destroyEach();
  score=score+2;
} 
if(enemyGroup.isTouching(sword)){
  gameState=END;
  
} 
 
if(gameState===END){
  enemyGroup.destroyEach();
  fruitGroup.destroyEach();
  enemyGroup.velocityX=0;
  fruitGroup.velocityX=0;
  sword.visible=false;
  gameOver=createSprite(300,300,10,10);
  gameOver.addImage("gameOverImage",gameOverImage);
  gameOver.scale=1.5;
}
  
drawSprites();
}
function fruits(){
  if(World.frameCount%80===0){
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.5;
    r=Math.round(random(1,5));
    if(r==1){
      fruit.addImage("fruit1",fruit1);
    }
    else if(r==2){
      fruit.addImage("fruit2",fruit2);
    }
    else if(r==3){
      fruit.addImage("fruit3",fruit3);
    }
    else if(r==4){
      fruit.addImage("fruit4",fruit4);
    }
   else if(r==5){
    fruit.addImage("fruit5",fruit5);
   }
    fruit.y=Math.round(random(50,500));
    fruit.velocityX=-6; 
    fruit.setLifeTime=100;
    fruit.scale=0.2;
    
    fruitGroup.add(fruit);
  }
}

function enemy(){
  if(World.frameCount%300===0){
    monster=createSprite(400,200,20,20);
    monster.scale=0.5;
    m=Math.round(random(1,2));
    if(m==1){
      monster.addImage("alien1",alien1);
    }
    else if(m==2){
      monster.addImage("alien2",alien2);
    }
    monster.y=Math.round(random(50,500));
    monster.scale=1.1;
    monster.velocityX=-6;
    monster.setLifeTime=100;
    
    enemyGroup.add(monster);
  }
  
}















