var score = 0;
var x = 0;
var y = 0;
var xSpeed = 0;
var ySpeed = 0;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  textAlign(CENTER);
  
    x = random(10, width-10);
    y = random(10, height-80);
    xSpeed = random(-1, -3);
    ySpeed = random(-1, -3);
 
}

function draw() {
  background(128, 128, 0);

  x+= xSpeed;
  y+= ySpeed;
  
    // left wall
    if (x <= 10)
      xSpeed *= -1;  // -xSpeed[i]
      
    // top wall
    if (y <= 10)
      ySpeed *= -1;

    // right wall
    if (x >= width - 10)
      xSpeed = -xSpeed;

    // paddle
     if (y >= height-70 && y < height-70+ySpeed && abs(x-mouseX) < width/8) {
      ySpeed *= -1;
      ySpeed *= 1.1; // accelerate for difficulty level
      xSpeed *= 1.1;
      score++;
    }
    
    // draw paddle
    rect(mouseX, height-50, width/4, 20, 10, 10, 10, 10);
    // score
    text(score, mouseX, height-45);
    // ball
    ellipse(x, y, 20, 20);
 
}

function keyPressed() {
  if (key === ' ')
    setup();
}