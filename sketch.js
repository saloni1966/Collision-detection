var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = rgb(153,0,0);
  movingRect = createSprite(500,200,50,90);
  movingRect.shapeColor = rgb(102,0,0);
}

function draw() {
  background(0,0,0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.x - fixedRect.x);

console.log((movingRect.width+fixedRect.width)/2)

  if(movingRect.x - fixedRect.x <= (movingRect.width+fixedRect.width)/2  && 
  fixedRect.x - movingRect.x <= (movingRect.width+fixedRect.width)/2){
    fixedRect.shapeColor = rgb(0,0,204);
    movingRect.shapeColor = rgb(0,0,204);
  }
  else {
    fixedRect.shapeColor = rgb(153,0,0);
    movingRect.shapeColor = rgb(102,0,0);
  }

  drawSprites();
}