var bullet,wall;
var speed, weight,thickness;

var damage;

function setup() {

  createCanvas(1200,400);
   
   speed = random(220,320);
   weight= random(20,60);
   thickness = random(22,83);

  bullet = createSprite(50,200,50,50);
  bullet.shapeColor = "blue";
  bullet.velocityX = speed;
  
  wall = createSprite(1100,200, thickness,height/2);
  wall.shapeColor = "grey";
}

function draw() {

  background(0,0,0); 

   if(hasCollided(bullet,wall)){
   bullet.velocityX= 0;
   bullet.overlap(wall);
   damage = 0.5 * weight*speed*speed/(thickness*thickness*thickness);
   if (damage<10) {
     wall.shapeColor= "green";
     
   }
    if (damage>10) {
     wall.shapeColor= "red";
     
   }
   }

  

  drawSprites();
}

function hasCollided(lbullet,lwall) {

  if (lwall.x-lbullet.x < (lbullet.width+lwall.width)/2) {

  
   return true;
  }
   else{
     return false;
   }
  
}