const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stone,ground,level1,level2,block1;

function preload() {
 
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

  stone =new Stone(100, 200,50,50);
  ground = new Ground(width/2,400,800,20);
  level1 = new Ground(400,300,200,30);
  level2 = new Ground(600,200,200,30);
  block1 = new Block(600,190);

}

function draw() {
  background(0);  
  Engine.update(engine);
  //stone("#FFD800")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  stone.display();
  level1.display();
  level2.display();
  block1.display();

                                                                      
  ground.display();
}
//   https://us02web.zoom.us/j/84136657417 (Password: yuPH7chUSw)





