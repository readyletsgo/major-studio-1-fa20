// download data as JSON file
// code modified from https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// click the download button to initiate download
document.getElementById("dwn-btn").addEventListener("click", function(){
  // fetching our stringified JSON data
  var text = jsonString;
  
  // name of our file
  var filename = "data.json"
  
  download(filename, text);
}, false);