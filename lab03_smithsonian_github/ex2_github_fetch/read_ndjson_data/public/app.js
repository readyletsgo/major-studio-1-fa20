let myArray = [];

function getData() {
  window
  .fetch('/get-ndjson-data')
  .then(res => res.json())
  .then(data => {
    console.log(data) // gives you an array of objects
    let object = data[0] // choosing one object from the returned array
    addObject(object)
  })
}

// create your own array with just the data you need
function addObject(objectData) {
  var currentID = objectData.id;
  var currentTitle = objectData.title;
  var objectLink = objectData.content.descriptiveNonRepeating.record_link;
  var index = myArray.length;
  
  myArray[index] = {};
  myArray[index]["title"] = currentTitle;
  myArray[index]["id"] = currentID;
  console.log("object at index", index, myArray[index]);
  }
  
getData()