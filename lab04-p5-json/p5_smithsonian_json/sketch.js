let textiles; 
let allPlaces =[];
let margin = 150;
let hue = 0;

function preload() {
  // load the data
  textiles = loadJSON('data/data.json');
}

function setup() {
  // width and height of the browser window
  createCanvas(windowWidth, windowHeight);
  console.log("hello world");
  analyzeData();
  displayData();
  addLabel();
}

function analyzeData(){  
  
  let placeNow;
  // go through the list of textiles
  textiles.forEach(function(n) {
    placeNow = n.place;
    let match = false;

    // see if their location already exists the allplaces array
    allPlaces.forEach(function(p){
      if(p.name==placeNow){
        p.count++;
        match=true;
      }
    });
    // if not create a new entry for that place name
      if(!match){
        allPlaces.push({
          name: placeNow,
          count:1
        });
      }
  });
  // sort by amount of items in the list
  allPlaces.sort((a, b) => (a.count < b.count) ? 1 : -1)
  console.log(allPlaces);
}

function displayData(){

  noStroke();
  fill(0,0,0);
    
  // go through the array with all places
  for(var i=0; i<allPlaces.length; i++){
    
    
    // map x to position in the array
    let x = map(i,0,allPlaces.length, margin, width-margin);
    
    // map height to count of textiles per item
    let h = map(allPlaces[i].count,0,allPlaces[0].count,0, height-(margin*2));
    
    // map hue of colors to position in the array > Just for fun
    let hue = map(i,0,allPlaces.length, 0, 255);
    colorMode(HSL, 360);
    noStroke();
    fill(hue, 200, 200);

    // draw the rectangle
    rect(x,height-margin-h,20, h);
    
    // Now we want to add rotated text. A little bit tricky so we have to use push/pop
    push();
    translate(x, height-margin-h);
    rotate( radians(-90) );
    text(allPlaces[i].name, 5, 15);
  	pop();   
  }
}
function addLabel(){
// 3. Let's add the overall title
textStyle(BOLD);
noStroke();
textAlign(LEFT);
textSize(20);
fill(0);
text("Flowers in Embroidery by Country", margin,margin-80);
textSize(10);
textStyle(NORMAL);
text("At the Cooper Hewitt Collection", margin,margin-60);
}



/*
Tasks:
1. Download a different data set and create a graph in a similar fashion (hopefully one that helps with your project?)
2. Imagine another graphical representation for this data

*/
