var garden,rabbit;
var gardenImg,rabbitImg;
var apple, leaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("orangeLeaf.png");
}

function setup(){
  
createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale = 0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges = createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = mouseX;

  var select_sprites = Math.round(random(1, 2));

  if (frameCount % 80 == 0) {
    if(select_sprites == 1) {
      createApples()
    }
    else {
      createLeaves()
    }
  }

  drawSprites();
}

function createApples() {
  if (frameCount % 80 == 0) {
    apple = createSprite(random(50, 350), 40, 10, 10);
    apple.addImage(appleImg);
    apple.scale = 0.05
    apple.velocityY = 5
    apple.lifetime = 100
  }
}

function createLeaves() {
  if (frameCount % 80 == 0) {
    leaf = createSprite(random(50, 350), 40, 10, 10);
    leaf.addImage(leavesImg);
    leaf.scale = 0.05
    leaf.velocityY = 5
    leaf.lifetime = 100
  }
}