// The menuItems array contains the info for the two buttons as objects. The text to display and the color to pass along
var menuItems = [{name:"red canvas", colorValue:"#AA0000"},{name:"green canvas", colorValue:"#00AA00"} ];
var canvas;


function setup() {
 	canvas = createCanvas(800,600); 
  // Adding the canvas to tthe canvasContainer
  canvas.parent("#canvasContainer");
    updateCanvas(200);
    createMenu();
}

// Just drawing with the right background color
function updateCanvas(colorValue){
    background(colorValue);
    fill(255);
    noStroke();
    textSize(50);
    text("this is the canvas", 20,50);
    ellipse(width/2,height/2,200,200);
}

// Let's creat the menu!
function createMenu(){
   
   // Create a button to close the menu
   var closeBtn = createDiv("&#215;");
  closeBtn.addClass("btn");
  closeBtn.mouseClicked(
    function(){
      hideMenu();
    })
  closeBtn.parent("#menu");

  // Go through the menu items and create one button per menu item

  for(var i=0; i<menuItems.length; i++){
    
    // after this menuBtn is an object:
    var menuBtn = createDiv(menuItems[i].name);
    menuBtn.addClass("btn");
      
    // now I attach the color value to the object
    menuBtn.value = menuItems[i].colorValue;

    // click event for this button
    menuBtn.mouseClicked(
      function(){

        // call the function that will update the canvas
        updateCanvasAndCloseMenu(this.value);
  })
    // attach the button to the menu
    menuBtn.parent("#menu")
  }

}

function updateCanvasAndCloseMenu(colorValue){
  hideMenu();
  updateCanvas(colorValue);
}

function showMenu(){
  select("#menu").show();
}

function hideMenu(){
  select("#menu").hide();  
}