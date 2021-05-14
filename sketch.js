var bg,bg2,form,system,code,security;
var score=0;

function preload() {  
  bg= loadImage("thief.jpg")
  bg2=loadImage("caught.jpg");
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();    
}

function draw() {
  background(bg);
  textSize(17);
  fill("white");
  stroke("white")
  text("A thief is breaking into your house. Solve these riddles quick to secure your house and call the police!",100,75);
  textSize(27);
  text("HOOK the CROOK",400,50);
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 800,120);
  clues();
 
  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("THIEF CAUGHT!!",670, 400);
    text("Great Job!",750,450);
  }

  drawSprites()
}