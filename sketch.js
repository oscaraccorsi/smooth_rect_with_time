var width;
var height;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  //width = windowWidth - 25;
  //height = windowHeight - 25;
}

function draw() {
  background(0);

  translate(width/2, height/2);
  rotate(-90);
  let d = new Date();

  let hr = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  let mill = d.getMilliseconds();

  let dhr = hr;
  let dmin = min;
  let dsec = sec;

  sec += mill/1000;
  min += sec/60;
  hr += min/60;

  push();
  fill(255);
  rotate(90);
  noStroke();
  textSize(25);
  if (dsec < 10) {
    dsec = "0" + dsec;
  }
  if (dmin < 10) {
    dmin = "0" + dmin;
  }
  if (dhr % 12 == 0) {
    dhr = "12";
  }
  else if ((dhr % 12) < 10) {
    dhr = "0" + (dhr % 12);
  }
  //text(dhr + ":" + dmin + ":" + dsec,  -50, 50);
  pop();

  noFill();
  strokeWeight(2);
 
  stroke(0, 255, 0);
  let secAngle = map(sec/4, 0, 60, 0, 1440);       //second
  push();
  fill(50, 50, 50, 90);
  rotate(secAngle);
  rect(0-windowWidth/8, 0, windowWidth/4, windowHeight/4);
  pop();
  
  let minAngle = map(min*2, 0, 60, 0, 360);      //minute
  fill(50, 50, 50, 90);
  stroke(255, 0, 0);
  push();
  rotate(minAngle);
  rect(0-windowWidth/8, 0, windowWidth/4, windowHeight/4);
  pop();

  let hourAngle = map(hr % 12, 0, 12, 0, 360);    //hour
  fill(50, 50, 50, 90);
  stroke(0, 0, 255);
  push();                         
  rotate(hourAngle);
  rect(0-windowWidth/8, 0, windowWidth/4, windowHeight/4);
  pop();
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}  