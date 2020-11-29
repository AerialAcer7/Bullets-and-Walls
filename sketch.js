var bullet,wall;
var thickness,speed,weight;

function setup() {
  createCanvas(600,600);

 //speed,thickness and weight code
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83); 

  //creating car and wall
   wall = createSprite(300,300,60,height/2);
   bullet = createSprite(300,300,50,50);
   bullet.velocityX = speed;
}

function draw() {
  background = "white";  
  
 //has collided code
  if(hasCollided){
   bullet.velocityX = 0;
   var damage = 0.5*speed*weight*speed/(thickness*thickness*thickness);

   if(damage>10){
    wall.shapeColor = color(255,0,0); 
   }

   if(damage<10){
    wall.shapeColor = color(0,255,0); 
   }
  }
  drawSprites();
}