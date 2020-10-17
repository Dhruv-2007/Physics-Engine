const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var ground,ball;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }
  
  var options2 = {
    restitution: 1
  }
  
  ground =  Bodies.rectangle(0,400,400,20,options);
  ball = Bodies.circle(40,40,20,options2);
  
  World.add(world,ground);
  World.add(world,ball);
  
  console.log(ground);
}

function draw() {
  background("red");
  
  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}
