var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImage, RedLeaf, RedLeafImg;
var GreenLeaf, GreenLeafImg, OrangeLeaf, OrangeLeafImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");

  //different types of leaves
  RedLeafImg = loadImage("redImage.png");
  GreenLeafImg = loadImage("leaf.png");
  OrangeLeafImg = loadImage("orangeLeaf.png");

}

function setup(){
  
  createCanvas(400,400);

// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  //makes rabbit move according to mouse
  rabbit.x = World.mouseX;

  var select_sprites = Math.round(random(1,4));
  
  //select which sprite will spawn and move first
  //depending on random Number
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples();
      console.log("Apples Chosen: " + select_sprites);
    }
    else if (select_sprites == 2) {
      createRedLeaves();
      console.log("RedLeaf Chosen: " + select_sprites);
    }
    else if (select_sprites == 3) {
      createGreenLeaves();
      console.log("GreenLeaf Chosen: " + select_sprites);
    } 
    else {
      createOrangeLeaves();
      console.log("OrangeLeaf Chosen: " + select_sprites);
    }
  }

  drawSprites();
}

function createApples() {

  //MAKES THE APPLES MOVE VERTICALLY
  //apple = createSprite(random(50,350),-50,10,10);
  //apple.addAnimation("apple", appleImage);
  //apple.scale = 0.07;
  //apple.velocityY = 3;
  //apple.lifetime = 160;

  // OR 

  //MAKES THE APPLES MOVE HORIZONTALLY
  apple = createSprite(-50,random(50,350),10,10);
  apple.addAnimation("apple", appleImage);
  apple.scale = 0.07;
  apple.velocityX = 3;
  apple.lifetime = 160;
}

function createRedLeaves() {
  RedLeaf = createSprite(random(50,350),-50,10,10);
  RedLeaf.addAnimation("RedLeaf", RedLeafImg);
  RedLeaf.scale = 0.07;
  RedLeaf.velocityY = 3;
  RedLeaf.lifetime = 160;
  RedLeaf.rotationSpeed = 5;
}

function createGreenLeaves() {
  GreenLeaf = createSprite(random(50,350),-50,10,10);
  GreenLeaf.addAnimation("GreenLeaf", GreenLeafImg);
  GreenLeaf.scale = 0.07;
  GreenLeaf.velocityY = 3;
  GreenLeaf.lifetime = 160;
  GreenLeaf.rotationSpeed = -5;
}

function createOrangeLeaves() {
  OrangeLeaf = createSprite(random(50,350),-50,10,10);
  OrangeLeaf.addAnimation("OrangeLeaf", OrangeLeafImg);
  OrangeLeaf.scale = 0.07;
  OrangeLeaf.velocityY = 3;
  OrangeLeaf.lifetime = 160;
  OrangeLeaf.rotationSpeed = 10;
}