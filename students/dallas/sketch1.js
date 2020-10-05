// CREDIT for processing version: www.openprocessing.org/user/10280
// translated to p5 by isob

//In version 2C, instead of calculating exactly the raios of all possibilities,
// we take a heuristic approach, and don't resplit if it's not bat (close to 1:1, square ratio).

//make if statement -> if mousex, mouse y, within range of block, 
//print allMaterial.name allMaterial.count 
//image(filler,0,0,814,287,x1,y1,w1,h1);

//When mouseX, mouseY, are within x1,y1,x1+w1,y1+h1. 
// print allMaterial.ratio myPcnt  @ mouseX, mouseY 


let img = [];
let filler;
let indexCounter = 0;
let diagnostic = [];



let sculpture;
let allMaterials = [];
let margin = 150;
let newMath = [];

function preload() {
	// load the data
  sculpture = loadJSON('data.json');

    img.push(loadImage('pics/Bronze.png')); //https://raw.githubusercontent.com/Dalbed349/MajorStudio1/master/pics/19.PNG
    img.push(loadImage('pics/Bronze_With_Gilding.png'));
    img.push(loadImage('pics/Stone.png'));
    img.push(loadImage('pics/Gilt_Bronze2.png'));
    img.push(loadImage('pics/Glass2.png'));
    img.push(loadImage('pics/Bronze_Silver_inlay.png'));
    img.push(loadImage('pics/Bronze_Comma_Gilding.png'));
    img.push(loadImage('pics/Lead.png'));
    img.push(loadImage('pics/Limestone_With_Traces_Pigment8.png'));
    img.push(loadImage('pics/Bronze_Gilding_Turquoise_inlay9.png'));
    img.push(loadImage('pics/Limestone10.png')); // last labeled %
    img.push(loadImage('pics/Bronze_With_Gold_Silver_Inlay11.png'));
    img.push(loadImage('pics/Grey_Marble_Trace_Pigment12.png'));
    img.push(loadImage('pics/Jade_Nephrite13.png'));
    img.push(loadImage('pics/Marble14.png'));
    img.push(loadImage('pics/Glass15.png'));
    img.push(loadImage('pics/Bronze_GOLD_turq_inlay.png'));
    img.push(loadImage('pics/Bronze_Gild_Gold_Inlay17.png'));
    img.push(loadImage('pics/Iron18.png'));
    img.push(loadImage('pics/19.png'));//Bronze_Gold_Silver_Inlay_duplicate!
    img.push(loadImage('pics/Stone_Pigment20.png'));
    img.push(loadImage('pics/Stone_Pigment21.png'));
    img.push(loadImage('pics/Limestone_Pigment_Gild22.png'));
    img.push(loadImage('pics/Glass_Blown2_Enameled23.png'));
    img.push(loadImage('pics/Gilded_bronze24.png'));
    img.push(loadImage('pics/Watercolor25.png'));
    img.push(loadImage('pics/Watercolor26.png'));
    img.push(loadImage('pics/Bronze_inlaid_GOld_Silver 27.png'));
    img.push(loadImage('pics/BronzeGSTurqCarnin28.png'));
    img.push(loadImage('pics/BronzePaste29.png'));
    img.push(loadImage('pics/GiltBronzeJade30.png'));
    img.push(loadImage('pics/bronzelower31.png'));
    img.push(loadImage('pics/hammersilver32.png'));
    img.push(loadImage('pics/BronzeGoldSilverInlaid33.png'));
    img.push(loadImage('pics/Gilt_Bronzemulti34.png'));
    img.push(loadImage('pics/turq35.png'));
    img.push(loadImage('pics/bronzeg36.png'));
    img.push(loadImage('pics/shell37.png'));
    img.push(loadImage('pics/semi38.png'));
    img.push(loadImage('pics/mirror39.png'));
    img.push(loadImage('pics/mirror40.png'));
    img.push(loadImage('pics/combo41.png'));
    img.push(loadImage('pics/combo42.png'));
    img.push(loadImage('pics/bronzeturq43.png'));
    img.push(loadImage('pics/Iron44.png'));
    img.push(loadImage('pics/BronzeGold45.png'));
    img.push(loadImage('pics/BronzePig46.png'));
    img.push(loadImage('pics/47.png'));
    img.push(loadImage('pics/wood48.png'));
    img.push(loadImage('pics/49.png'));//bronze g 
    img.push(loadImage('pics/50.png'));// irong g 
    img.push(loadImage('pics/51.png'));
    img.push(loadImage('pics/52.png'));
    img.push(loadImage('pics/53bronzeturq.png'));
    img.push(loadImage('pics/54mirror.png'));
    img.push(loadImage('pics/55mirror.png'));
    img.push(loadImage('pics/56mirror.png'));
    img.push(loadImage('pics/57mirror.png'));
    img.push(loadImage('pics/58mirror.png'));
    img.push(loadImage('pics/59mirror.png'));
    img.push(loadImage('pics/60mirror.png'));
    img.push(loadImage('pics/61mirror.png'));
    img.push(loadImage('pics/62bronzegildsilver.png'));
    img.push(loadImage('pics/63multi.png'));
    img.push(loadImage('pics/64.png'));
    img.push(loadImage('pics/65silverwine.png'));
    img.push(loadImage('pics/66sword.png'));
    img.push(loadImage('pics/67bronzecast.png'));
    img.push(loadImage('pics/68silver.png'));
    img.push(loadImage('pics/69combo.png'));
    img.push(loadImage('pics/70turq.png'));
    img.push(loadImage('pics/71silverbronze.png'));
    img.push(loadImage('pics/72silverbronze.png'));
    img.push(loadImage('pics/73bronzeinlay.png'));
    img.push(loadImage('pics/74marble.png'));
    img.push(loadImage('pics/75marble.png'));
    img.push(loadImage('pics/76.png'));
    img.push(loadImage('pics/77.png'));
    img.push(loadImage('pics/78.png'));
    img.push(loadImage('pics/79.png'));
    img.push(loadImage('pics/80.png'));
    img.push(loadImage('pics/81.png'));
    img.push(loadImage('pics/82.png'));
    img.push(loadImage('pics/83.png'));
    img.push(loadImage('pics/84.png'));
    img.push(loadImage('pics/85.png'));
    img.push(loadImage('pics/86.png'));
    img.push(loadImage('pics/87.png'));
    img.push(loadImage('pics/88.png'));
    img.push(loadImage('pics/89.png'));
    img.push(loadImage('pics/90.png'));
    img.push(loadImage('pics/91.png'));
    img.push(loadImage('pics/92.png'));
    img.push(loadImage('pics/93.png'));
    img.push(loadImage('pics/94.png'));
    img.push(loadImage('pics/95.png'));
    img.push(loadImage('pics/96.png'));
    img.push(loadImage('pics/97.png'));
    img.push(loadImage('pics/98.png'));






    










    img.push(loadImage('pics/Capture4.png'));

    filler = loadImage('pics/dog.png');
    
    
    
    
    
    // img[0]= 
    // img[1] = loadImage('pics/brass.png'); 
    // img[2] = 
    // img[3] =
    // filler = loadImage('pics/nefdown.jpg');
    

  }



let randomHue; //color matching... the key to everything!
let totalValue = 0; //the total values of all elements together, just to write % on square.
let numbers;
let nbItems;

function setup() {
  colorMode(HSL, 100); //it's just nicer this way... you know...
  createCanvas(600, 600);
  //noLoop();
  smooth();
  numbers = newMath;      //newMath.ratio
  //[0.1, 0.1, 0.2, 0.2, 0.3, 0.1]
  nbItems = numbers.length
  analyzeData();
  calculate();
}
function analyzeData(){  
  
	let materialNow;
	// go through the list of sculpture
	sculpture.forEach(function(n) {
	  materialNow = n.material;
    let match = false;

	  // see if their location already exists the allMaterials array
	  allMaterials.forEach(function(p){
		if(p.name==materialNow){
		  p.count++;
      match=true;
    }
	  });
	  // if not create a new entry for that place name
		if(!match){
		  allMaterials.push({
			name:materialNow,
			count:1
		  });
		}
	});

  
	
		// sort by amount of items in the list
	allMaterials.sort((a, b) => (a.count < b.count) ? 1 : -1)
	
	console.log(allMaterials);
    console.log(sculpture);
    
    for (let i = 0; i < allMaterials.length; i++) {
        
        newMath.push(((allMaterials[i].count)/(sculpture.length)));
        allMaterials[i].ratio = newMath[i];
      }

    console.log(allMaterials[1].ratio);
}


console.log(newMath);
//MOUSE PRESS
// function mousePressed() {
//   makeBlock();
// }
// function draw(){
 
// text("nice text",mouseX,mouseY);

  
// }


function drawRect(x1, y1, w1, h1, value) {
  //image(img, refX, refY, blockW, blockH); //0, 0, 814, 287, 10, 10, // img, 0,0,814,287, x1, y1, 
   // use push()  + pop() for control over drawing state

/////////////// THE IMAGE MAGIC - adding images instead of rects /////////// 
if (indexCounter <img.length){
image(img[indexCounter],0,0,814,287,x1,y1,w1,h1);  
indexCounter++;
} else
image(filler,0,0,814,287,x1,y1,w1,h1);

// image(filler,0,0,200,200,x1,y1,w1,h1);
  //image(img[0],0,0,814,287,x1,y1,w1,h1);

  //console.log(w1)
  //console.log(h1)

  //////////////////////////////////COLOR STUFF NOT IMPORTANT WITH IMAGES//// 
  // let hStart = 50 - 0.1;
  // let hEnd = 50 + 0.1;
  // let h = random(hStart, hEnd);
  // let s = random(7, 100);
  // let b = random(90, 70);
  // fill(h, s, b);
////////////////////////////////////////
  
  //rect(x1, y1, w1, h1); //we draw a rectangle    ////////////COMMENTED OUT TO ALLOW FOR IMAGES TO SHOW.

  fill(1);
  //  text(str(value), x1+6, y1+20);  (we don't care about the actual value now that we have the pcnt...)
  let myPcntStr;
  //let emptyPcntStr;
  let myPcnt = int(round((value / totalValue) * 100));
  text([totalValue, value, myPcnt])
  let myPcntDecimal = int(round((value / totalValue) * 1000));
  myPcntDecimal = myPcntDecimal / 10;

  if (myPcntDecimal > 10) { //bigger than 10%, we round it up.
    myPcntStr = str(myPcnt) + "%";
  } 
  else if(myPcntDecimal < .6){
    myPcntStr = str('');
  } else {
    myPcntStr = str(myPcntDecimal) + "%";
  }
  fill(255)
  //textSize(12 + (mouseX)*2);
  text(myPcntStr, x1 + (w1 / 2) - 10, y1 + (h1 / 2) + 5);
  //text(myPcntStr, x1 + (w1 / 2) - 10, y1 + (h1 / 2) + 5);
  //text(myPcntStr,mouseX, mouseY);
  // if (myPcntStr<1){
 
  // }
  text("++++ totalValue = " + totalValue);
}





///   FIND GOOD SPLIT NUMBER - advantagous block aspect ratio.
function getPerfectSplitNumber(numbers, blockW, blockH) {
  // This is where well'll need to calculate the possibilities
  // We'll need to calculate the average ratios of created blocks.
  // For now we just try with TWO for the sake of the new functionn...

  //Let's just split in either one or two to start...

  // text("blockW = "+blockW);
  //text("blockH = "+blockH);

  let valueA = numbers[0]; //our biggest value
  let valueB = 0; //value B will correspond to the sum of all remmaining objects in array
  for (let i = 1; i < numbers.length; i++) {
    valueB += numbers[i];
  }

  let ratio = float(valueA) / float(valueB + valueA);

  let heightA, widthA;
  if (blockW >= blockH) {
    heightA = blockH;
    widthA = floor(blockW * ratio);
  } else {
    heightA = floor(blockH * ratio);
    widthA = blockW;
  }

  let ratioWH = float(widthA) / float(heightA);
  let ratioHW = float(heightA) / float(widthA);
  let diff;

  if (widthA >= heightA) { // Larger rect //ratio = largeur sur hauteur,
    //we should spit vertically...
    diff = 1 - ratioHW;
    
  } else { //taller rectangle ratio
    diff = 1 - ratioWH;
  }

  if ((diff > 0.5) && (numbers.length >= 3)) { //this is a bit elongated (bigger than 2:1 ratio)
    text("======================--> 22222");
    return 2; //TEMPORARY !!!!
  } else { //it's a quite good ratio! we don't touch it OR, it's the last one, sorry, no choice.   
    text("======================--> 11111");
    return 1;
  }

  //diff is the difference (between 0...1) to the square ratio.
  // 0 mean we have a square (don't touch, it's beautifull!)
  // 0.9 mean we have a very long rectangle.

  /* Previous ghetto mehod
  
  if(numbers.length >= 3){//if there are 3 elements or more in our array, we try fragmenting A for better RAtios.
    return 2;//the two is really hardcoded, we should calculate average ratios of all blocks...
  }else{
    return 1;
  } */

}

///   Start the recursion
function calculate() {
  totalValue = 0;
  
  for (let i = 0; i <= numbers.length - 1; i++) {
    
    text(totalValue + " + " + numbers[i] + " = ...");
    totalValue += numbers[i]; //There's a problem here, the total is never accurate...
    text("numbers = \n" + numbers);
    
  }

  //basic param for the sake of this prototype ...
  let blockW = width - 20;
  let blockH = height - 20;
  let refX = 10;
  let refY = 10;

  makeBlock(refX, refY, blockW, blockH, numbers); //x,y,w,h //////////////////////////// image(img, 0, 0, 287, 814, 10, 10, 580, 318);
 
 
}

///   MAKE BLOCK
function makeBlock(refX, refY, blockW, blockH, numbers) {

 
  // We sort the received array.
  ///////////////////////////////////////////////////////////////
  numbers = reverse(sort(numbers)); // we sort the array from biggest to smallest value.
  //First we need to asses the optimal number of item to be used for block A
  // How do we do that?

  let nbItemsInABlock = getPerfectSplitNumber(numbers, blockW, blockH); //return the numbers of elements that should be taken for A block.

  let valueA = 0; //the biggest value
  let valueB = 0; //value B will correspond to the sum of all remmaining objects in array
  let numbersA = []; //in the loop, we'll populate these two out of our main array.
  let numbersB = [];
  
  for (let i = 0; i < numbers.length; i++) {
    if (i < nbItemsInABlock) { //item has to be placed in A array...
      numbersA = append(numbersA, numbers[i]);
      //numbersA[i] = numbers[i]; //we populate our new array of values, we'll send it recursivly...
      valueA += numbers[i];
    } else {
      numbersB = append(numbersB, numbers[i]);
      //numbersB[i-nbItemsInABlock] = numbers[i]; //we populate our new array of values, we'll send it recursivly...
      valueB += numbers[i];
    }
  }
  let ratio = float(valueA) / float(valueB + valueA);

  text("ratio = " + ratio);
  text("A val = " + valueA);
  text("B val = " + valueB);
  //now we split the block in two according to the right ratio...

  /////////////// WE SET THE X, Y, WIDTH, AND HEIGHT VALUES FOR BOTH RECTANGLES.

  let xA, yA, heightA, widthA, xB, yB, heightB, widthB;
  if (blockW > blockH) { //si plus large que haut...
    //we split vertically; so height will stay the same...

    xA = refX;
    yA = refY; // we draw the square in top right corner, so same value.
    heightA = blockH;
    widthA = floor(blockW * ratio);

    xB = refX + widthA;
    yB = refY;
    heightB = blockH;
    widthB = blockW - widthA; //the remaining portion of the width...

  } else { //tall rectangle, we split horizontally.
    xA = refX;
    yA = refY; // we draw the square in top right corner, so same value.
    heightA = floor(blockH * ratio);
    widthA = blockW;

    xB = refX;
    yB = refY + heightA;
    heightB = blockH - heightA;
    widthB = blockW; //the remaining portion of the width...

  }
  


  /////////////// END OF Block maths.

  // if the ratio of the A block is too small (elongated rectangle)
  // we take an extra value for the A sqare, don't draw it, then send the 2 element 
  // it represents to this function (treat it recusvily as if it was a B block).
  // We dont care about the ratio of B block because they are divided after...

  //drawRect(xA, yA, widthA, heightA, valueA); //(x, y, width, height)
  //int pcntA = floor(valueA / float(valueA + valueB)*100);
  //int pcntB = floor(valueB / float(valueA + valueB)*100);
  text("numbers.length = " + numbers.length);
  text("numbersA.length = " + numbersA.length);
  text("numbersB.length = " + numbersB.length);
  //We add the block A to the display List
  // for now, we just draw the thing, let's convert to OOP later...

 
  if (numbersA.length >= 2) { //this mean there is still stuff in this arary...
    makeBlock(xA, yA, widthA, heightA, numbersA);
  } else {
    //if it's done, we add the B to display list, and that's it for recussivity, we return to main level... 
    // the main function will then deal with all the data...
    drawRect(xA, yA, widthA, heightA, valueA);
  }

  if (numbersB.length >= 2) { //this mean there is still stuff in this arary...
    makeBlock(xB, yB, widthB, heightB, numbersB);
  } else {
    //if it's done, we add the B to display list, and that's it for recussivity, we return to main level... 
    // the main function will then deal with all the data...
    drawRect(xB, yB, widthB, heightB, valueB);
  }

  //If it represent more than one value, we send the block B to be split again (recursivly)

}