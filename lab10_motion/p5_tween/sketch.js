let position, target, tween;

function setup() {
 	createCanvas(800,600);
  background(0);
  fill(255);
  noStroke();
  position = { x : random(width), y: random(height) };
}


function draw(){
  background(0, 50);
  TWEEN.update();
  ellipse(position.x, position.y,30);
}

function mouseReleased() {
  target = { x : mouseX, y: mouseY };
  tween = new TWEEN.Tween(position).to(target, 400);
  tween.easing(TWEEN.Easing.Sinusoidal.InOut);

    tween.start();
}
