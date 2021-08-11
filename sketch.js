var fixedShape, movingShape;
var rect1, rect2;


function setup() {
  createCanvas(800,400);
  fixedShape = createSprite(400, 200, 50, 50);
  fixedShape.shapeColor = "green";

  movingShape = createSprite(200,100,100,50);
  movingShape.shapeColor = "green";

  rect1 = createSprite(20,20,40,40);
  rect1.shapeColor = "blue";
  rect1.velocityY = 2;

  rect2 = createSprite(20,380,40,40);
  rect2.shapeColor = "grey";
  rect2.velocityY = -2;


  
}

function draw() {
  background(255,255,255);  

  movingShape.x = World.mouseX;
  movingShape.y = World.mouseY;
  console.log(movingShape.x-fixedShape.x)
  if(movingShape.x-fixedShape.x <= movingShape.width/2+fixedShape.width/2  &&
    fixedShape.x-movingShape.x <= movingShape.width/2+fixedShape.width/2 &&
    movingShape.y-fixedShape.y <= movingShape.height/2+fixedShape.height/2 &&
    fixedShape.y-movingShape.y <= movingShape.height/2+fixedShape.height/2  ) {
    movingShape.shapeColor = "red";
    fixedShape.shapeColor = "red";
  }else{
    movingShape.shapeColor = "green";
    fixedShape.shapeColor = "green";
  }

  if(rect1.y-rect2.y <= rect1.height/2+rect2.height/2 &&
    rect2.y-rect1.y <= rect1.height/2+rect2.height/2){
      rect2.velocityY = rect2.velocityY * (-1)
      rect1.velocityY = rect1.velocityY * (-1)
    }
    if(rect1.x-rect2.x <= rect1.width/2+rect2.width/2 &&
      rect2.x-rect1.x <= rect1.width/2+rect2.width/2){
        rect2.velocityX = rect2.velocityX * (-1)
        rect1.velocityX = rect1.velocityX * (-1)
      }

  drawSprites();
}