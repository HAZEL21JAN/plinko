const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(480,650);
  createSprite(400, 200, 50, 50);

  ground = new GroundClass(600,height,1200,20);
}

function draw() {
  background("black");  
  ground.display();
  drawSprites();
}