/*
String documentation:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

Example by Dan Shiffman:
https://www.youtube.com/watch?v=DcoAjEZYies

*/

function getInput() {
  let input = document.getElementById("myInput").value;
  processText(input)
}

function processText(input) {

  //output just the text:
  addText("The text is: " + input);
  
  // Task: What's the text length?

  // Task: What's the fifth character in the text?

  // Task: Output the last 10 characters of the text

  // Task: What's the second word in the text?

  // where in the text does the word "rainbows" appear?

  //replace the word "love" with another verb

  // how many times does the word "love" appear

   // count how many times each letter appears within the text and create a visualization of it

  // Task: What's the text length?
  addText("the text length is " + input.length);

  // Task: What's the fifth character in the text?
  addText("the fifth character is: " + input[5]);

  // Task: Output the last 10 characters of the text
  addText("the last 10 characters of the text: " + input.substring(input.length-10, input.length));

  // Task: What's the second word in the text?
  let arr = input.split(" ");
  addText("the second word in the text: " + arr[1]);

  // where in the text does the word "rainbows" appear?
  addText("the word rainbows appears at : " + input.indexOf("rainbows"));

  //replace the word "love" with another verb
  addText(input.replaceAll("love", "eat"));

  // how many times does the word "love" appear
  let wordCount =[];
  arr.forEach(d => {
    console.log(d);
    if(wordCount[d]==undefined)wordCount[d]=1;
    else wordCount[d]++;
  });

  // count how many times each letter appears within the text and create a visualization of it
  
  // let's create an array that holds a count of each letter
  let letterCount =[];
  [...input].forEach(d => {
    if(letterCount[d]==undefined)letterCount[d]=1;
    else letterCount[d]++;
  });
  
  // let's write each letter and reference the count to scale the text
  [...input].forEach(d => {
    addLetterWithSize(d, (10 + letterCount[d] * 20));
  })

}





// two functions tha actually write to the DOM. We're using D3 here but could also use vanilla javascript

function addText(text){
 d3.select('#app')
 .append('p')
 .text(text);
}


function addLetterWithSize(letter, textSize){
  d3.select('#concretePoetry')
  .append('span')
  
  .text(letter)
  .style("font-size", textSize+"px")
  ;
}

 
