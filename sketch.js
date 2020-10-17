const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var ground;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;
  
  ground =  Bodies.rectangle(0,400,400,10);
  
  World.add(world,ground);
  
  console.log(ground);
}

function draw() {
  background("red");
  
  rectMode(CENTER);
  rect(200,200,50,50);
}
