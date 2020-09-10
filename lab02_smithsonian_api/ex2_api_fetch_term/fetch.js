// Smithsonian API example code
// check API documentation for terms here: http://edan.si.edu/openaccess/apidocs/#api-search-terms

// put your API key here;
const apiKey = "";  

// Access to terms by term category (I.e. online_media_type > Images)
const termBaseURL = "https://api.si.edu/openaccess/api/v1.0/terms/";

// search: fetches an array of terms based on term category
function fetchTermsData(termCategory) {
    let url = termBaseURL + termCategory +"?api_key=" + apiKey;
    window
    .fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.response.terms);
      console.log(`There are ${data.response.terms.length} terms in the term category: ${termCategory}`);
    })
    .catch(error => {
      console.log(error);
    })
  }

fetchTermsData("online_media_type")

/*
Task: Play around with the different categories listed here:
http://edan.si.edu/openaccess/apidocs/#api-search-terms
Questions: 
- What other media types are available? 
- How many cultures are represented?
- What acronyms for museums are there?

*/