// Smithsonian API example code
// check API documentation for search here: http://edan.si.edu/openaccess/apidocs/#api-search-search

// put your API key here;
const apiKey = "";  

// search base URL
const searchBaseURL = "https://api.si.edu/openaccess/api/v1.0/search";

// Constructing the search query
const search =  `Flowers AND unit_code:"CHNDM" AND object_type:"Embroidery (visual works)" AND online_media_type:"Images"`;


// https://collections.si.edu/search/results.htm?q=Flowers&view=grid&fq=data_source%3A%22Cooper+Hewitt%2C+Smithsonian+Design+Museum%22&fq=online_media_type%3A%22Images%22&media.CC0=true&fq=object_type:%22Embroidery+%28visual+works%29%22


// search: fetches an array of terms based on term category
function fetchSearchData(searchTerm) {
    let url = searchBaseURL + "?api_key=" + apiKey + "&q=" + searchTerm;
    console.log(url);
    window
    .fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    })
}

fetchSearchData(search);