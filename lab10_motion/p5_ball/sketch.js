let x = 0;
let y = 0;

function setup() {
  createCanvas(600, 600);
  noStroke();
    x = random(10, width-10);
    y = random(10, height-80);
}

function draw() {
  background(0);
    // ball
    ellipse(x, y, 20, 20);
}
