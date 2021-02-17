var hr,mn,sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(450,400);
  angleMode(DEGREES);
}

function draw() {
  background("pink");  
  
  translate(200,200)
  rotate(-90)

  hr = hour();
  mn = minute();
  sc = second();
  
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360)

  push();
    //sec hand
    rotate(scAngle); //rotate hand based on calculated angle
    stroke(255,0,80);
    strokeWeight(7);
    line(0,0,100,0);
    pop()

    //min hand
    push();
    rotate(mnAngle);
    stroke(255,0,265);
    strokeWeight(7);
    line(0,0,75,0);
    pop()

    //hr hand
    push();
    rotate(hrAngle);
    stroke("purple");
    strokeWeight(7);
    line(0,0,50,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    //drawing arcs
    strokeWeight(10);
    noFill();
    
    //sec arc
    stroke(255,0,80);
    arc(0,0,300,300,0,scAngle);
    
    //min arc
    stroke(255,0,265);
    arc(0,0,280,280,0,mnAngle);
    
    //hr arc
    stroke("purple");
    arc(0,0,260,260,0,hrAngle);
}