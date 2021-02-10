/*
  Exercise 6
  DOM manipulation with vanilla JS
*/

// Task
// What does DOM stand for?
// JT: Document Object Model

// Task
// Open the file index.html in AWS Cloud9. Click "Preview" > "Preview File index.html". (Note that you can open it in a new window). What do you see?
// JT: a pink rectanle that you can click on to make a smaller one

// Task
// Delete the div with the class rectangle from index.html and refresh the preview.

// Task
// What does the following code do?
// JT: appends a bar to the right in the sequence when you click on any other bar 

const viz = document.body.querySelector(".viz");

console.log(viz, viz.children);

const addChildToViz = () => {
  const newChild = document.createElement("div");
  newChild.className = "rectangle";
  newChild.style.height = Math.random() * 100 + "px";
  viz.appendChild(newChild);
};

viz.addEventListener("click", addChildToViz);

// Task
// Where can you see the results of the console.log below? How is it different from in previous exercises?
// JT: when you call drawIrisData();. the console log is inside another function. 
function drawIrisData() {
  window
    .fetch("./iris_json.json")
    .then(data => data.json())
    .then(data => {
      console.log(data);
    });
}

drawIrisData();

// Task
// Modify the code above to visualize the Iris dataset in the preview of index.html.
// Feel free to add additional CSS properties in index.html, or using JavaScript, as you see fit.
