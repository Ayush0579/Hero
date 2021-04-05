const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
  backgroundImg = loadImage("sky.jpg");
}

function setup() {
  canvas = createCanvas(1000, 500);
  engine = Engine.create();
  world = engine.world;

  platform = new Ground(400, 400, 800, 20);
  hero = new Hero(200, 200);
  rope = new Rope(hero.body, {x: 200, y: 200});
  monster = new Monster(780, 300);
  boxes1 = new Boxes1();
  boxes2 = new Boxes2();
  boxes3 = new Boxes3();
  boxes4 = new Boxes4();
}

function draw() {
  background(142,218,250);
  Engine.update(engine);

  platform.display();
  hero.display();
  monster.display();
  boxes1.display();
  boxes2.display();
  boxes3.display();
  boxes4.display();
}

function mouseDragged(){
  hero.dragged();
}