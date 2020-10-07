let smithsonian_data;
let img_width = 80;
let margin = 5;
let images = [];
let folder = "images";
let loadedImagesCount = 0;

function setup() {
 	createCanvas(800, 600);
  // loading the json data. Since this is asynchronous, we use a callback for loading the images
  smithsonian_data = loadJSON("data.json", loadImages);
}

// load all images
function loadImages(){
    for(var i=0; i<smithsonian_data.length; i++){
      images[i] = loadImage(folder + "/" + smithsonian_data[i].filename,
      function(){
          // since these will load asynchronously, we have to keep track how many images have been loaded
          loadedImagesCount++;

          // once all have been loaded, draw the images
          if(loadedImagesCount==smithsonian_data.length){
            drawImages();
          }
      }
    );
    }
}

// draw images in correct aspect ratio to each other
function drawImages() {
  background(0);
  fill(255);
  textSize(8);

  for(var i=0; i<smithsonian_data.length; i++){
      image(images[i],i*20,i*20);
      text(smithsonian_data[i].title, i*20,i*20);
  }
}

