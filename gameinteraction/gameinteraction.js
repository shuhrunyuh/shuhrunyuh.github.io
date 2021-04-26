var img;
var img2;
var img3;
var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState = "L1";
var choice = '1';


function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://shuhrunyuh.github.io/images/BubbleSimple.png');
 img2 = loadImage('https://shuhrunyuh.github.io/images/altbubble.png');
 img3 = loadImage('https://shuhrunyuh.github.io/images/rainbowbubble.png');
}

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  textSize(20);
  

} // end setup   =================================================================


function draw() {
 cursor(HAND);
   background('lightblue');
  if (gameState == "L1"){
  levelOne();
  }
  if (gameState =="L2"){
    levelTwo();
  }
    if (gameState =="L3"){
    levelThree();
  }
   if (gameState =="L4"){
    levelFour();
  }
text(("Score: " + score), width/2, 40);
} // end draw  ===============================================================

function levelOne(){
  
  text("Level 1", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2) {
   ballx=random(width);
   bally=random(height);
    score = score +1;
  }
  if (score>=5){
  gameState ="L2";
  }
//  line(ballx, bally, mouseX, mouseY);
   image(img3, ballx, bally, 80, 80);
//  ellipse(ballx, bally, ballSize, ballSize);
  
} //end level one  ==============================================================


function levelTwo(){
   background('lightblue');
  text("Level 2", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2) {
   ballx=random(width);
   bally=random(height);
    score = score +1;
  }
  if (score>=10){
    gameState ="L3";
  }
//  line(ballx, bally, mouseX, mouseY);
  image(img, ballx, bally, 60, 60);
//  ellipse(ballx, bally, ballSize, ballSize);
  
} //end level two  =============================================================


function levelThree(){
   background('lightblue');
  text("Level 3", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2) {
   ballx=random(width);
   bally=random(height);
    score = score +1;
//    ballSize= ballSize -1;
  }
  if (score>=15){
    gameState ="L4";
  }

//   ellipse(ballx, bally, ballSize, ballSize);
 image(img2, ballx, bally, 40, 40);
  
} //end level three   =========================================================


function levelFour(){
   background('lightblue');
  text("Level 4", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2) {
   ballx=random(width);
   bally=random(height);
    score = score +1;
 //   ballSize= ballSize -1;
  }
  if (score>=20){
    gameState ="L5";
  }

//   ellipse(ballx, bally, ballSize, ballSize);
  image(img, ballx, bally, 20, 20);
  
  
} //end GAME ==========================================================
