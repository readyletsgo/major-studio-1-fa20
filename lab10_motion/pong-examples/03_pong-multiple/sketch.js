var score = 0;
var num = 10;
var x = [];
var y = [];
var xSpeed = [];
var ySpeed = [];

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  textAlign(CENTER);
  
  for (var i=0; i < num; i++) {
    // start at random positions to distribute
    x[i] = random(10, width-10);
    y[i] = random(10, height-80);
    xSpeed[i] = random(-1, -3);
    ySpeed[i] = random(-1, -3);
  }
}

function draw() {
  background(128, 128, 0);
  
  for (var i=0; i<num; i++) {
    x[i] += xSpeed[i];
    y[i] += ySpeed[i];
    
    // left wall
    if (x[i] <= 10)
      xSpeed[i] *= -1;  // -xSpeed[i]
      
    // top wall
    if (y[i] <= 10)
      ySpeed[i] *= -1;

    // right wall
    if (x[i] >= width - 10)
      xSpeed[i] = -xSpeed[i];

    // paddle
    if (y[i] >= height-70 && y[i] < height-70+ySpeed[i] && abs(x[i]-mouseX) < width/8) {
      ySpeed[i] *= -1;
      ySpeed[i] *= 1.1; // accelerate for difficulty level
      xSpeed[i] *= 1.1;
      score++;
    }
    
    // draw paddle
    rect(mouseX, height-50, width/4, 20, 10, 10, 10, 10);
    // score
    text(score, mouseX, height-45);
    // ball
    ellipse(x[i], y[i], 20, 20);
  }
}

function keyPressed() {
  if (key === ' ')
    setup();
}