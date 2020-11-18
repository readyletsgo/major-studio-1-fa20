// CREATE JAVASCRIPT CLASS
// WITH UPDATE, DISPLAY, SORT PROTOTYPES
// SHOWING STATUS WITH VECTORS
// KEY-CONTROLS SPACE - PAUSE | N - NEW GAME | ENTER - SORT

var pongBalls = [];
var num = 30; // total number
var score = 0; // global score
var paused = false; // start stop game with spacehar
var sorted = false; // sort animation
var magnitude = []; // array of each movement vector magnitude

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  for (var i = 0; i < num; i++) {
    pongBalls.push(new PongBall(random(30, width - 30), random(30, height - 80), random(30, height - 30)));
  }
  // switching on the lights
  ambientLight(128, 128, 255);
  pointLight(255, 255, 0, width, height, 0);
}

function draw() {
  background("white");
  translate(-width / 2, -height / 2, -500);
  // pongBall objects
  for (var i = 0; i < pongBalls.length; i++) {
    pongBalls[i].update();
    pongBalls[i].display();
    pongBalls[i].displayPosition();
  }
  // paddle
  translate(mouseX, height - 35, mouseY);
  specularMaterial(127, 127);
  box(height / 8, 2, height / 8);
}

// custom class
function PongBall(myX, myY, myZ) {
  this.x = myX;
  this.y = myY;
  this.z = myZ;
  this.speedX = random(-.5, .5);
  this.speedY = random(-3, 3);
  this.speedZ = random(-.5, .5);
  this.myScore = 0;
  this.vector = createVector();


// custom class function to display elements
PongBall.prototype.display = function() {
  this.vector.set(this.speedX, this.speedY, this.speedZ);
  this.vector.mult(20);
  push();
  translate(this.x, this.y, this.z);
  stroke(200, 0, 0);
  line(0, 0, 0, this.vector.x, this.vector.y, this.vector.z);

  // out of reach
  if (this.y > height - 50)
    basicMaterial(127);
  else
    specularMaterial(127, 127);

  sphere(10);
  pop();
}

  // show x-y-z position in bounding box
  this.displayPosition = function() {
    if (mouseIsPressed && this.y < height - 50) {
      stroke(128);
      line(this.x, this.y, 0, this.x, this.y, height);
      line(0, this.y, this.z, width, this.y, this.z);
      line(this.x, 0, this.z, this.x, height, this.z);
    }
  }

  // custom class function to update elements
  this.update = function() {
    var easing = 0.05;

    if (sorted) {

      var dx = this.targetX - this.x;
      this.x += dx * easing;

      var dy = this.targetY - this.y;
      this.y += dy * easing;

      var dz = this.targetZ - this.z;
      this.z += dz * easing;

    } else {

      if (!paused) {
        this.x += this.speedX;
        this.y += this.speedY;
        this.z += this.speedZ;
      }

      if (this.x <= 5 || this.x >= width - 5) {
        this.speedX *= -1;
      }

      if (this.z <= 5 || this.z >= height - 5) {
        this.speedZ *= -1;
      }

      // top boundary
      if (this.y <= 5) {
        this.speedY *= -1;
      }
      // paddle
      if (
        abs(mouseX - this.x) < width / 8 &&
        abs(mouseY - this.z) < height / 8 &&
        this.y > height - 50 &&
        this.y < height - 50 + this.speedY
      ) {
        this.speedY *= -1;
        // increment global score
        score++;
        this.myScore++;
        this.speedX *= 1.1; // 10 percent more speed horizontally
        this.speedY *= 1.1;
        this.speedZ *= 1.1;
      }
    }
  }

  // custom class function to sort its velocity vecotor 
  // mapped horizontally according to global minima and maxima
  this.sort = function() {
    this.targetX = map(this.vector.mag(), min(magnitude), max(magnitude), 20, width - 20);
    this.targetY = height / 2;
    this.targetZ = 0;
  }
}


function windowResized() {
  // position canvas in middle of screen
  pongBalls = [];
  setup();
}

// key controls
function keyTyped() {
  // pause
  if (key === ' ') {
    paused = !paused; // toggle
  }
  // new game
  if (key === 'n') {
    pongBalls = [];
    setup();
  }
  // sort
  if (keyCode === ENTER) {
    sorted = !sorted;
    // get magnitude of each object vector and put it into global array magnitude
    for (var i in pongBalls)
      magnitude.push(pongBalls[i].vector.mag());

    // make each object line up according to its individual magnitude
    for (i in pongBalls)
      pongBalls[i].sort();
  }
}