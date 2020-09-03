/*
  Exercise 4
  Loading a dataset from a file
*/

const fs = require("fs");

// Task
// Explore the dataset that is console logged:
// How many entries are in the dataset? What data structure is returned? What properties are available? What data types do you see?
function getIrisData() {
  fs.readFile("./iris_json.json", "utf8", (err, data) => {
    if (err) console.log(err);
    console.log(data);
  });
}

getIrisData();
