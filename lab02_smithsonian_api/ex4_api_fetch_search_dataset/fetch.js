// Smithsonian API example code
// check API documentation for search here: http://edan.si.edu/openaccess/apidocs/#api-search-search

// put your API key here;
const apiKey = "";  

// search base URL
const searchBaseURL = "https://api.si.edu/openaccess/api/v1.0/search";

// constructing the initial search query
// const search =  'mask AND unit_code:"FSG"';
const search =  `Flowers AND unit_code:"CHNDM" AND object_type:"Embroidery (visual works)" AND online_media_type:"Images"`;

// array that we will write into
let myArray = [];

// string that will hold the stringified JSON data
let jsonString = '';

// search: fetches an array of terms based on term category
function fetchSearchData(searchTerm) {
    let url = searchBaseURL + "?api_key=" + apiKey + "&q=" + searchTerm;
    console.log(url);
    window
    .fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)

      // constructing second search query to get all the rows of data
      // The max here is 1000 rows
      let searchAllURL = url + `&start=0&rows=${data.response.rowCount}`;
      console.log(searchAllURL);
      fetchAllData(searchAllURL);
    })
    .catch(error => {
      console.log(error);
    })
}

// fetching all the data listed under our search and pushing them all into our custom array
function fetchAllData(url) {
  console.log(url)
  window
  .fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)

    data.response.rows.forEach(function(n) {
      addObject(n);
    });

    combineJSON(myArray)
  })
  .catch(error => {
    console.log(error)
  })

}

// create your own array with just the data you need
function addObject(objectData) {
  let currentID = objectData.id;
  let currentTitle = objectData.title;
  let objectLink = objectData.content.descriptiveNonRepeating.record_link;
  let currentDate = objectData.content.freetext.date[0]["content"];

  let index = myArray.length;
  myArray[index] = {};
  myArray[index]["title"] = currentTitle;
  myArray[index]["id"] = currentID;
  myArray[index]["link"] = objectLink;
  myArray[index]["date"] = currentDate;
  console.log("object at index", index, myArray[index]);
  
}


// get objects from myArray and add them into one JSON object
function combineJSON(myArray) {
  let results = {};
  for (let i = 0; i < myArray.length; i++) {
    
    // keys - indices, values - each object
    results[i] = myArray[i];   
  }
  
  // stringify our JSON object and add to our empty string defined above
  jsonString += JSON.stringify(results);
}

fetchSearchData(search);


//---------------------------UNIT CODES------------------------------
// ACAH: Archives Center, National Museum of American History
// ACM: Anacostia Community Museum
// CFCHFOLKLIFE: Smithsonian Center for Folklife and Cultural Heritage
// CHNDM: Cooper-Hewitt, National Design Museum
// FBR: Smithsonian Field Book Project
// FSA: Freer Gallery of Art and Arthur M. Sackler Gallery Archives
// FSG: Freer Gallery of Art and Arthur M. Sackler Gallery
// HAC: Smithsonian Gardens
// HMSG: Hirshhorn Museum and Sculpture Garden
// HSFA: Human Studies Film Archives
// NAA: National Anthropological Archives
// NASM: National Air and Space Museum
// NMAAHC: National Museum of African American History and Culture
// NMAfA: Smithsonian National Museum of African Art
// NMAH: Smithsonian National Museum of American History
// NMAI: National Museum of the American Indian
// NMNHANTHRO: NMNH - Anthropology Dept.
// NMNHBIRDS: NMNH - Vertebrate Zoology - Birds Division
// NMNHBOTANY: NMNH - Botany Dept.
// NMNHEDUCATION: NMNH - Education & Outreach
// NMNHENTO: NMNH - Entomology Dept.
// NMNHFISHES: NMNH - Vertebrate Zoology - Fishes Division
// NMNHHERPS: NMNH - Vertebrate Zoology - Herpetology Division
// NMNHINV: NMNH - Invertebrate Zoology Dept.
// NMNHMAMMALS: NMNH - Vertebrate Zoology - Mammals Division
// NMNHMINSCI: NMNH - Mineral Sciences Dept.
// NMNHPALEO: NMNH - Paleobiology Dept.
// NPG: National Portrait Gallery
// NPM: National Postal Museum
// SAAM: Smithsonian American Art Museum
// SI: Smithsonian Institution, Digitization Program Office
// SIA: Smithsonian Institution Archives
// SIL: Smithsonian Libraries