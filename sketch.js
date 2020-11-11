var fixedrect , movingrect , player1 , player2 , player3 , player4

function setup() {
  createCanvas(800,400);
  
  player1 = createSprite(100,100,10,10)
  player2 = createSprite(200,100,10,10) 
  player3 = createSprite(300,100,10,10) 
  player4 = createSprite(400,100,10,10) 

  fixedrect = createSprite(400, 200, 50, 100);
  fixedrect.shapeColor = "black"

  movingrect = createSprite(400, 200, 100, 50);
  movingrect.shapeColor = "black"
}

function draw() {
  background("red");  
  movingrect.x = mouseX
  movingrect.y = mouseY

  if(isTouching(movingrect , player1)){
    movingrect.shapeColor="white"
    player1.shapeColor="white"

      console.log("touching")
  }
  
  else{
    movingrect.shapeColor = "black"
    player1.shapeColor = "black"
  }
  drawSprites();
}
