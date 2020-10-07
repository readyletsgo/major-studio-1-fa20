let smithsonian_data;
let img_width = 70;
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
  let ratio = 1.0;
  for(var i=0; i<smithsonian_data.length; i++){
      let ratio = images[i].height/images[i].width;      
      image(images[i],i*(img_width+margin),height/2, img_width, img_width*ratio);
      text(smithsonian_data[i].title, i*(img_width+margin),height/2 +img_width*ratio +10 );
  }
}

