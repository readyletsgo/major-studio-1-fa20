let met_data; // data from JSON
let fishies = []; // Global array to hold all fish objects

// mapping departments to colors
let colors = {"American Decorative Arts": "#e6194b", "Ancient Near Eastern Art": "#3cb44b", "Arms and Armor": "#ffe119", "Arts of Africa, Oceania, and the Americas": "#4363d8", "Asian Art": "#f58231", "Drawings and Prints": "#f032e6", "Egyptian Art": "#bcf60c", "European Paintings": "#fabebe", "European Sculpture and Decorative Arts": "#008080", "Greek and Roman Art": "#e6beff", "Islamic Art": "#9a6324", "Medieval Art": "#aaffc3", "Modern Art": "#000075", "Musical Instruments": "#808000",
"Photographs": "#ffd8b1", "The Cloisters": "#911eb4", "The Costume Institute": "#46f0f0","Costume Institute": "#46f0f0", "The Libraries": "#800000", "Robert Lehman Collection": "#fffac8",
"The Libraries": "#263238","Medieval Art": "#ffe0b2", "Modern Art":"#c5e1a5", "Modern and Contemporary Art":"#c5e1a5", "The American Wing":"#ff1744"};
const base_url = 'https://www.metmuseum.org/art/collection/search/';

function preload() {
  // loading the Met Data
  // which was based on this query:
  // https://collectionapi.metmuseum.org/public/collection/v1/search?q=fish
  met_data = loadJSON("data/data.json");
}
function setup() {
 	createCanvas(windowWidth,windowHeight);
  createFish();
}


function createFish(){
  // loop through whole collection

  met_data.forEach(e => {
    if(e.isPublicDomain==true){

    // all parameters we'll pass onto the fish objects
    let x = random(20, width-20);
    let y = random(20, height-20);
    // color is based on dept
    let color = colors[e.department];

    // speed, diameter and opacity is based on time
    let diameter = map(e.objectBeginDate,-3000,2019, 2,16);
    let speed = map(e.objectBeginDate,-3000,2019, 0.01,0.6);

    // opacity is random just for effect
    let opacity = random(0,100);

    // need this for rollover
    let label = e.title;
    let objectID = e.objectID;
    let isHighlight = e.isHighlight;

    // pass all this information to object and add to array
    fishies.push(new Fish(x, y, diameter, speed, color,opacity, label, objectID, isHighlight));
    }
  });
}
function draw() {
  // reset background and cursor
  background("#01132c");
  cursor(ARROW);

  // Loop through all fish
  for (let i = 0; i < fishies.length; i++) {
    fishies[i].update();
    fishies[i].display();
    fishies[i].rollover(mouseX, mouseY);
  }
}

function mouseReleased() {
  for(let i=0 ; i<fishies.length; i++){
    fishies[i].openLink();
  }
}


// Fish class
class Fish {
  constructor(x, y, diameter,speed, col, opacity, name, objectID, isHighlight) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.radius = diameter / 2;
    this.name = name;
    this.color = color(convertHex(col, opacity));
    this.objectID = objectID;
    this.isHighlight = isHighlight;
    this.speedX = random(-1,1) *speed;
    this.speedY = random(-1,1) *speed;
    this.over = false;
  }

  // Check if mouse is over the circle
  rollover(px, py) {
    let d = dist(px, py, this.x, this.y);
    this.over = d < this.radius;
  }
  openLink(){
    // console.log(this.name);
    if(this.over){
      window.open(base_url + this.objectID, "_blank");
      // console.log(this.name);
    }

  }
  // this updates x and y depending on speed and bounces at corners
  update(){
    this.x +=this.speedX;
    this.y +=this.speedY;

    // left and right boundary
    if (this.x <= this.diameter/2 || this.x >= width - this.diameter/2) {
      this.speedX *= -1;
    }
    // top boundary
    if (this.y <= this.diameter/2  || this.y >= height - this.diameter/2) {
      this.speedY *= -1;
    }

  }

  // Display the fish
  display() {
    noStroke(0);
    fill(this.color);
    ellipse(this.x, this.y, this.diameter, this.diameter);

    // if rollover show title
    if (this.over) {
      fill(255);
      textAlign(CENTER);
      text(this.name, this.x, this.y + this.radius + 20);
      cursor(HAND);
    }
    // if is Highlight add ring
    if (this.isHighlight) {
      stroke(255);
      strokeWeight(0.8);
      noFill();
      ellipse(this.x, this.y, this.diameter*3, this.diameter*3);
    }
  }
}

// utility function
function convertHex(hex,opacity){
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);

    result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return result;
}
