function setup() {
  createCanvas(600,600);
}

function draw(){
  background(204)
  //hair
  fill(51, 47, 38);
  ellipse(220,50,100,100);
  rect(200,50,200,195,90);
  noStroke();
  
    //ears
    fill(230,210,165);
    ellipse(200,220,30,30);
    fill(230,210,165)
     ellipse(400,220,30,30);
  
  //hairband
fill(255,255,255);
ellipse(300,140,200,155);

   //arms
  fill(89,89,89);
  ellipse(280,620,340,600);
   fill(89,89,89);
  ellipse(310,615,340,600);

 //sweatshirt
  fill(89,89,89);
  stroke(64,63,63);
  ellipse(300,600,300,600);
  
   //neck
fill(230,210,165);
stroke(240,220,175);
ellipse(300,280,110,150);

  //face
  fill(240, 220, 175);
  stroke(240,220,175);
  ellipse(300,200,197,250);
 
  //eyebrows
  stroke(69,36,11)
  fill(0,0,0)
  arc(240,150,300,10,180,270);
  arc(330,150,300,10,180,270);
  
  //eyes
  ellipse(260,170,11,10);
  ellipse(350,170,11,10);
  
  //nose
  fill(230,210,165)
  stroke(201,185,145);
triangle(300,200,310,185,320,215);

//mouth
stroke(69,36,11)
noFill();
arc(300,250,150,97,0,97);









  
  
  
}
  
