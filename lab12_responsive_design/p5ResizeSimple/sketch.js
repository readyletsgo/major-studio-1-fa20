var xPos = 20; // starting x position to draw
var yPos = 20;  // starting y position to draw
var barHeight = 180; // height of each bar
var barMax = 760; // maximum width of each bar <-- this changes over time
var canvas;
//this gets called only once in the very beginning
function setup() {
	canvas = createCanvas(window.innerWidth, window.innerHeight);
  setSize();

  // barHeight = (height/3) - 20; //dynamic size for height of bar
  // barMax = width-40; // dynamic size for width of bar
}

//this gets called every frame (about 60 frames per second)
function draw() {
  background(0);
  fill(255, 0, 0);

  var h = map(hour(), 0, 60, 0, barMax); // Map the function hour() to values from 0 - barMax
  var m = map(minute(), 0, 60, 0, barMax); // Map the function minute() to values from 0 - barMax
  var s = map(second(), 0, 60, 0, barMax); // Map the function second() to values from 0 - barMax

  //draw 3 background bars to indicate the max width
  fill(30, 0, 0);
  rect(xPos,yPos,barMax,barHeight);
  rect(xPos,yPos + barHeight + 10,barMax,barHeight);
  rect(xPos,yPos + barHeight*2 + 20,barMax,barHeight);

  fill(80, 0, 0);
  rect(xPos,yPos,h,barHeight);   // Bar for hours
  fill(150, 0, 0);
  rect(xPos,yPos + barHeight + 10,m,barHeight);   // Bar for hours
  fill(255, 0, 0);
  rect(xPos,yPos + barHeight*2 + 20,s,barHeight);   // Bar for hours
}

window.onresize = function() {
  setSize();
}

// this function gets called when the user drags the window
function setSize() {
  canvas.size(window.innerWidth, window.innerHeight);
  barHeight = (height/3) - 20; //dynamic size for height of bar
  barMax = width-40; // dynamic size for width of bar
}
