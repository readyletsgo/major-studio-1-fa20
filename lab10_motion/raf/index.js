const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const dim = 500;
let x = 50;
let y = 50;
let xSign = 1;
let ySign = 1;

function draw() {
  ctx.clearRect(0, 0, dim, dim);
  ctx.fillStyle = "#0088ff";
  ctx.fillRect(x, y, 100, 100);
}

animate();

function animate() {
  if (x >= dim - 100) {
    xSign = -1;
  }
  if (x <= 0) {
    xSign = 1;
  }
  if (y <= 0) {
    ySign = -1;
  }
  if (y >= dim - 100) {
    ySign = 1;
  }

  x += xSign * 2.1;
  y -= ySign * 1.8;
  draw();
  window.requestAnimationFrame(animate);
}
