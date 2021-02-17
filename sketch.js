//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var obj, ground, ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options={
    isStatic:false
  }
  
  obj = Bodies.rectangle(100,100,50,50,options);
  World.add(world,obj);
  
  var options3={
    restitution:5
  }
  ball = Bodies.circle(200,100,20,options3);
  World.add(world,ball);
  var options2={
    isStatic:true
  }
  ground = Bodies.rectangle(200,350,500,20,options2);
  World.add(world,ground);
}

function draw() {
  background(0,0,0);

  Engine.update(engine);

  rectMode(CENTER);
  rect(obj.position.x,obj.position.y,50,50);
  rect(ground.position.x,ground.position.y,500,20)
  
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  
  
}