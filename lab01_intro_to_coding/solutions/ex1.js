/*
  Exercise 1
  JavaScript data structures & functions
*/

var names = [
  "Rubin Museum",
  "The Cooper Hewitt (Smithsonian)",
  "The Morgan Library and Museum",
  "The Whitney Museum of American Art",
  "The Frick Collection",
  "American Museum of Natural History",
];

var URLs = [
  "rubinmuseum.org",
  "cooperhewitt.org",
  "themorgan.org",
  "whitney.org",
  "frick.org",
  "amnh.org",
];

var years = [2004, 1896, 1924, 1930, 1935, 1869];

// Task 1
// Console log the length of each Array
console.log(names.length);
console.log(URLs.length);
console.log(years.length);

// Task 2
// add a new item to an array
var newName = "The International Center of Photography";
var newURL = "icp.org";
var newYear = 1974;

names.push(newName);
URLs[URLs.length] = newURL;
years = years.concat([newYear]);

// Task 3
// construct an Object out of our three Arrays
// the result should look similar to this:
var result = {
  "Museum Name 1": {
    URL: "www.museumwebsite.com",
    year: 2019,
  },
};

var museums = {};
for (var i = 0; i < names.length; i++) {
  var currentName = names[i];
  var currentURL = URLs[i];
  var currentYear = years[i];

  museums[currentName] = {};
  museums[currentName]["URL"] = currentURL;
  museums[currentName].year = currentYear;
}

console.log("museums", museums);

var museums2 = {};
names.forEach(function(n, i) {
  museums2[n] = {};

  var currentURL = URLs[i];
  var currentYear = years[i];

  museums2[n].URL = currentURL;
  museums2[n]["year"] = currentYear;
});

console.log("museums2", museums2);

// Task
// Write a function to add a new museum object, with properties URL and year, to an existing museums object. Call it on museums2
function addAMuseum(museums, newName, newURL, newYear) {
  museums[newName] = {};
  museums[newName].URL = newURL;
  museums[newName].year = newYear;

  return museums;
}

addAMuseum(museums2, "MoMath", "momath.org", 2014);

console.log("museums2", museums2);
