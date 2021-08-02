var spaceship;
var aliens1,alien2,alien3,alien4,alien5;
var bg;

var score=0;
var gameState = "Play";

function preload(){
enemy1=loadImage("images/alien1.png");
enemy2=loadImage("images/alien2.jpg");
enemy3=loadImage("images/alien3.jpg");
enemy4=loadImage("images/alien4.png");
enemy5=loadImage("images/aliens5.jpg");
spaceship1=loadImage("images/spaceship.jpg");
bullet=loadImage("images/bullet.png");
bg=loadImage("images/background.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  spaceship=createSprite(200,100,30,30);
  spaceship.addImage(spaceship1);
  spaceship.scale=0.4;
  enemysGroups=createGroup();
  bulletsGroups=createGroup();
}

function draw() {
  background(bg);  
  if(keyDown("space")){
    bullet1=spawnbullets()
    //bullet1.x=spaceship.x;
    

  }
  if(bulletsGroup.isTouching(enemysGroups)){
   bulletsGroup.destroyEach();
  }
  enemysGroups.add(alien1);
  enemysGroups.add(alien2);
  enemysGroups.add(alien3);
  enemysGroups.add(alien4);
  enemysGroups.add(alien5);
  drawSprites();
}
function spawnbullets(){
  if(frameCount%10===0){
    bullets=createSprite(200,200,20,20);
  bullets.addImage(bullet);
  bullets.velocityX=1;
  bullets.scale=0.30;
  rotate(PI/2)
  bulletsGroup.add(bullets);
  return bullets
  
  }
 


}
function spawnaliens(){
  alien1=createSprite(width-20,400,30,30);
  alien1.addImage(enemy1);
  alien1.scale=0.5;
  alien1.velocityX=-1;
}