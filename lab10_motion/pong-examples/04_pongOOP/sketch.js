var pongBalls = [];
var num = 50;
var score = 0;
var paused = false;
var magnitude = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  for (var i = 0; i < num; i++) {
    pongBalls.push(new PongBall(random(30, width - 30), random(30, height - 80)));
  }
  textAlign(CENTER, CENTER);

}

function draw() {
  background('white');
  // pongBall objects
  for (var i = 0; i < pongBalls.length; i++) {
    // if (!paused)
      pongBalls[i].update();

    pongBalls[i].display();
  }
  // paddle
  rect(mouseX, height - 35, width / 4, 20, 10, 10, 10, 10);
  text(score, mouseX, height - 35);
}



// custom class
function PongBall(myX, myY) {
  this.x = myX;
  this.y = myY;
  this.speedX = random(-10, 10);
  this.speedY = random(-10, 10);
  this.newScore = 0;
  this.vector = createVector();
  this.targetX = 20;
  this.targetY = 20;


  // custom class function to display elements
  this.display = function() {
    this.vector.set(this.speedX, this.speedY);
    push();
    translate(this.x, this.y);
    ellipse(0, 0, 15, 15);
    text(this.newScore, 0, 0);
    this.vector.mult(10);
    line(0, 0, this.vector.x, this.vector.y);
    pop();
  }

  // custom class function to update elements
  this.update = function() {
    var easing = 0.05;
    if (paused) {
      var dx = this.targetX - this.x;
      this.x += dx * easing;
  
      var dy = this.targetY - this.y;
      this.y += dy * easing;
  
    } else {
      this.x += this.speedX;
      this.y += this.speedY;
      
      // left or right boundary
      if (this.x <= 5 || this.x >= width - 5) {
        this.speedX *= -1;
      }
      // top boundary
      if (this.y <= 5) {
        this.speedY *= -1;
      }
      // paddle
      if (abs(mouseX - this.x) < width / 8 && this.y >= height - 50 && this.y < height - 40) {
        this.speedY *= -1;
        score++;
        this.newScore++;
        this.speedX *= 1.1; // 10 percent more speed horizontally
        this.speedY *= 1.1;
      }
    }
  }

  // sort
  this.sort = function() {
    this.targetX = map(this.vector.mag(), min(magnitude), max(magnitude), 10, width - 10);
    this.targetY = height / 2;
  }
}

// reset game
function mouseReleased() {
  pongBalls = [];
  setup();
}

function windowResized() {
  // position canvas in middle of screen
  pongBalls = [];
  setup();
}

function keyTyped() {
  if (key === ' ')
    paused = !paused; // toggle
  // sort
  if (keyCode === ENTER) {
    // paused = false;
    for (var i in pongBalls) {
      magnitude.push(pongBalls[i].vector.mag());
      console.log('captured magnitudes' + magnitude.length);
    }
    for (i in pongBalls) {
      pongBalls[i].sort();
    }
  }
}




