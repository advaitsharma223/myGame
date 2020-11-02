const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var warrior;
var corona;
var database;
var gameState = 0

function preload() {

  formImage = loadImage("formImg.png")
  backgroundImage = loadImage("cityImage.jpeg")
}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  
  database = firebase.database();
  
  engine = Engine.create();

  world = engine.world;
  
  //warrior = new Fighter(200, 200, 350, 175);

  form = new Form();

  //corona = new Corona(20, 20, 50);

  ground = new Ground(windowWidth/2, windowHeight-80, windowWidth, 20);

  Engine.run(engine);
}

function draw() {
  
  background(formImage); 
  
  //corona.display();

  //warrior.display();

  //ground.display();

  form.display();
}

function keyPressed() {

  if(keyCode === UP_ARROW && warrior.body.position.y >= windowHeight-200) {
    
    console.log(warrior.body.position.x, warrior.body.position.y);
    warrior.body.position.y = warrior.body.position.y - 20;
  }
}

function keyReleased() {

  if(keyCode === UP_ARROW) {

    warrior.body.position.y = warrior.body.position.y + 20;
  }
}
