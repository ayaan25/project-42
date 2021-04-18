var hr, mn, scs, hrAngle, mnAngle, scsAngle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);

}

function draw() {
  background(0);  
  translate (300,200);
  rotate(-90);
  hr = hour() ;
  mn = minute();
  scs = second();
  scsAngle = map(scs , 0 , 60 , 0 , 360);
  mnAngle = map(mn , 0 , 60 , 0 , 360);
  hourAngle = map(hr % 12 , 0 ,12 , 0 ,360);
  ellipseMode(CENTER);
  fill ("green");
  ellipse(0,0,220,220);
  
  push();
  rotate(scsAngle);
  stroke ("white");
  strokeWeight(7);
  line (0,0 ,100 ,0);
  pop();

  push();
  rotate(mnAngle);
  stroke ("red");
  strokeWeight(10);
  line (0,0 , 75 ,0);
  pop();

  push();
  rotate(hrAngle);
  stroke ("blue");
  strokeWeight(10);
  line (0,0 ,50 ,0);
  pop();

  drawSprites();
}