/*
  Exercise 6
  DOM manipulation with vanilla JS
*/


// Task
// Select HTML elements
const viz = document.body.querySelector(".viz");
const button = document.body.querySelector("#button");

// This function creates a new div as a "child" of the viz element
// it is called from the function drawIrisData
const addChildToViz = () => {
  const newChild = document.createElement("div");
  newChild.className = "rectangle";
  newChild.style.height = Math.random() * 100 + "px";
  viz.appendChild(newChild);
};


// fetches iris data
// runs through data and creates one rectangle per petal item
function drawIrisData() {
  window
    .fetch("./iris_json.json")
    .then(data => data.json())
    .then(data => {
      data.forEach(e => {
        addChildToViz(e.petallength);
      });
    });
}

drawIrisData();
