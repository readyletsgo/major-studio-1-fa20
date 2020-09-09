// Smithsonian API example code
// check full API documentation here: https://edan.si.edu/openaccess/apidocs/#api-search-terms


const apiKey = // put your API key here; 
const searchURL = "https://api.si.edu/openaccess/api/v1.0/terms/online_media_type?api_key=" + apiKey;
const categoryBaseURL = "https://api.si.edu/openaccess/api/v1.0/category/art_design/search";
const objectBaseURL = "https://api.si.edu/openaccess/api/v1.0/content/";
let myArray = [];

// search: fetches an array of terms based on term category
function fetchTermsData(url) {
  window
  .fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(`There are ${data.response.terms.length} terms in this term category`, data);
    // choose a term - for this example we're going to use '3D Images' which is indexed at 0
    let searchTerm = data.response.terms[0];
    console.log(searchTerm);
    
    // getting content with ours search term
    // complete URL with query parameters
    let categoryURL =  categoryBaseURL + `?q=${searchTerm}&api_key=${apiKey}`;
    fetchCategoryData(categoryURL);
  })
  .catch(error => {
    console.log(error);
  })
}

// search - category_search: fetches content based on a query against a category. art_design, history_culture or science_technology.
function fetchCategoryData(url) {
  window
  .fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log('Here are the first 10 results based on your search term:', data);
    let objectID = data.response.rows[3].id;
    let objectURL = objectBaseURL + objectID + `?api_key=${apiKey}`;
    fetchContentData(objectURL);
  })
  .catch(error => {
    console.log(error);
  })
}

// content - fetches content based on id/url of an object.
function fetchContentData(url) {
  window
  .fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log("Here's the content data of the specified object:", data);
    addObject(data);
  })
  .catch(error => {
    console.log(error);
  })
}

// create your own array with just the data you need
function addObject(objectData) {
  var currentID = objectData.response.id;
  var currentTitle = objectData.response.title;
  var objectLink = objectData.response.content.descriptiveNonRepeating.record_link;
  var index = myArray.length;
  
  myArray[index] = {};
  myArray[index]["title"] = currentTitle;
  myArray[index]["id"] = currentID;
  myArray[index]["link"] = objectLink;
  console.log("object at index", index, myArray[index]);
}

fetchTermsData(searchURL)