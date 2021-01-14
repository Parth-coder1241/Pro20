var bullet,wall;
var speed,weight;
var collide;
function setup() {
  createCanvas(1600,1000);
  speed= random(55,90);
  weight= random(400,1500);
  bullet=createSprite(50,200,20,20);
  wall=createSprite(1000,200,17,height/2);
  bullet.velocityX=speed;  
wall.shapeColor=color("black");  
}

function draw() {
  background(255,255,255);  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
      if(deformation>180)
        {
          bullet.shapeColour=color("voilet");
        }
       if(deformation<180 && deformation>100)
        {
         bullet.shapeColor=color("blue");
        }
        if(deformation<100)
        {
          bullet.shapeColor=color("orange");
        }
  }
  text("If the Color is :",500,400);
  text("Orange=Good",500,420);
  text("Blue=Average",500,440);
  text("Voilet=Lethal",500,460);
  bullet.collide(wall);
  drawSprites();
}