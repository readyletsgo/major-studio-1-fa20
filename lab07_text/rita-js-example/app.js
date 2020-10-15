/*
Example by Dan Shiffman:
https://www.youtube.com/watch?v=lIPEvh8HbGQ

RiTa.js reference:
https://rednoise.org/rita/reference/index.php
*/

function getInput() {
  let input = document.getElementById("myInput").value;
  processRita(input)
}

function processRita(input) {
  // change our input to a Rita string
  let rs = new RiString(input);

  // break our phrase into words:
  let words = rs.words();
  console.log(words);

  // get part-of-speech tags
  // part-of-speech tags list: https://rednoise.org/rita/reference/PennTags.html
  let pos = rs.pos();
  console.log(pos);
  
  // change certain part-of-speech tags
  let output = '';
  words.forEach((word, i) => {
    // use regular expression to replace all nouns with random words pulled from RiTa
    if(/nn.*/.test(pos[i])) {
      // if the word is a noun replace the word with a new noun:
      output += RiTa.randomWord(pos[i]) + ' ';
    } else {
      // if not, return the original word:
      output += word + ' ';
    }
  })

  // adding p elements with d3
  d3.select('#app')
    .append('p')
    .attr('class', 'rita-text')
    .text(output);
}

function inputKey(ele) {
  if(event.key === "Enter") {
      processRita(ele.value);      
  }
}