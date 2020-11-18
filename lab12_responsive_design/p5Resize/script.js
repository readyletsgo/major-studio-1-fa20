/*global abs,angleMode,append,background,beginShape,bezier,box,camera,ceil,CENTER,circle,color,cone,cos,createCanvas,createCanvas,createGraphics,curveVertex,cylinder,DEGREES,displayHeight,displayWidth,dist,div,DOWN_ARROW,ellipse,endShape,fill,floor,frameCount,frameRate,height,image,key,keyCode,keyIsDown,keyIsPressed,keyIsPressed,keyPressed,LEFT,LEFT_ARROW,lerpColor,line,loadImage,loadJSON,loadSound,map,mouseIsPressed,mouseX,mouseY,noFill,noLoop,normalMaterial,noStroke,p5,plane,point,pointLight,pop,push,push,RADIANS,radians,random,rect,resizeCanvas,resizeCanvas,RIGHT,RIGHT_ARROW,rotate,rotateX,rotateY,rotateZ,round,round,scale,shuffle,sin,sphere,stroke,strokeWeight,text,textAlign,textFont,textSize,texture,textWidth,torus,translate,triangle,UP_ARROW,WEBGL,width,windowHeight,windowHeight,windowWidth,world */
const data = [];
const dim = 50;
const nTicks = 1000;
const xPad = 5;
const yPad = 50;
const images = {};

let nCols,
  nTiles = 0;

function gridPosition(index, nCols, width, height) {
  height = height || width;
  return {
    x: width * (index % nCols),
    y: height * Math.floor(index / nCols),
  };
}

function interpolate(a, b, n, d) {
  return a + (n / d) * (b - a);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  nCols = Math.floor((windowWidth - 5) / dim);
  fetch(
    "https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=1&q=Hudson%20River"
  )
    .then(res => res.json())
    .then(({ objectIDs }) => {
      nTiles = objectIDs.length;
      objectIDs.forEach(id => {
        fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
        )
          .then(res => res.json())
          .then(obj => {
            // console.log(obj)
            data.push({ ...obj, x: 0, y: 0, tick: 0, new: 0 });
            data.sort((a, b) => a.objectBeginDate - b.objectBeginDate);
          });
      });
    });
}

function draw() {
  background("lightblue");
  text(`${data.length} / ${nTiles}`, 2 * xPad, yPad / 2 + 3);

  data.forEach((obj, i) => {
    let x, y;
    const { x: nextX, y: nextY } = gridPosition(i, nCols, 50, 50);
    x = obj.x === 0 ? nextX : interpolate(obj.x, nextX, obj.tick, nTicks);
    y = obj.y === 0 ? nextY : interpolate(obj.y, nextY, obj.tick, nTicks);
    obj.tick = obj.x === x && obj.y === y ? nTicks : (obj.tick + 1) % nTicks;
    obj.new = Math.min(255, obj.new + 2);

    obj.x = x;
    obj.y = y;

    strokeWeight(1);
    stroke(0, 0, 0, obj.new);
    fill(obj.new, 255, obj.new, obj.new);
    rect(xPad + obj.x, yPad + obj.y, dim, dim);
    if (obj.isHighlight) {
      fill(255, 255, 0);
      circle(obj.x + xPad + dim - 10, obj.y + yPad + dim - 10, 10);
    }
    fill(0);
    strokeWeight(0);
    text(obj.objectBeginDate, obj.x + xPad + 5, obj.y + yPad + 15);
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  nCols = Math.floor((windowWidth - 5) / dim);
}
