var movingrect, fixedrect,fixedrect2,movingrect2

function setup() {
  createCanvas(800,400);
 movingrect =  createSprite(400, 200, 50, 50);
 movingrect.shapeColor = "red";
 movingrect.velocityX = -3;
 fixedrect =  createSprite(100,200,50,50);
 fixedrect.shapeColor = "red";
fixedrect.velocityX = 3;
movingrect2 =  createSprite(200, 400, 50, 50);
movingrect2.shapeColor = "red";
movingrect2.velocityY = -3;
fixedrect2 =  createSprite(200,100,50,50);
fixedrect2.shapeColor = "red";
fixedrect2.velocityY = 3;
}

function draw() {
  background(200,230,210);  
 /* movingrect.y = mouseY;
  movingrect.x = mouseX;*/
 // is touching algorithim
 /* if (movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 
    &&  fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2  
    && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2
    && movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2) {
    movingrect.shapeColor = "yellow";
    fixedrect.shapeColor = "yellow";

  }
  else  {
    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";
  }*/
  // bounce off algorithim 
    if (movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 
    &&  fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 ) {
   movingrect.velocityX *= (-1);
   fixedrect.velocityX *= (-1);
  }
if (fixedrect2.y - movingrect2.y < fixedrect2.height/2 + movingrect2.height/2
&& movingrect2.y - fixedrect2.y < fixedrect2.height/2 + movingrect2.height/2){
  movingrect2.velocityX *= (-1);
  fixedrect2.velocityX *= (-1);
}
  drawSprites();
}