// some data
const cities = [
  { name: 'London', population: 8674000},
  { name: 'New York', population: 8406000},
  { name: 'Sydney', population: 4293000},
  { name: 'Paris', population: 2244000},
  { name: 'Beijing', population: 11510000}
];

function drawAllSVGs() {
  drawIntoSVG();
  drawWithData(cities);
  drawWithDataAndScales(cities);
}

drawAllSVGs();

// Draw SVG graphics using D3
function drawIntoSVG(){

  // select the first svg object
  const svg = d3.select(".ex-1 svg"); // this is a D3 selection

  //  draw a circle
  svg
  .append('circle')
  .attr('r', 50)
  .attr('cx', 100)
  .attr('cy', 100)
  .attr('fill', "pink");

  //  draw a rectangle
  svg
  .append('rect')
  .attr('x', 300)
  .attr('y', 50)
  .attr('width', 400)
  .attr('height', 100)
  .attr('fill', "teal");

  // draw text
  svg
  .append('text')
  .attr('x', 200)
  .attr('y', 200)
  .attr('font-size', 30)
  .text("Hi, this was written with D3")
}

// Draw with data by using `data()` and `join()`
function drawWithData(data) {

    const svg = d3.select(".ex-2 svg");
    svg
      .selectAll("circle") // this creates an empty selection of all the `circle` elements in svg -- but there aren't any yet!
      .data(data) // bind data to the selection
      .join("circle") //and join data with graphics
      .attr('cy', 50)
      .attr('fill', "grey")
      .attr('cx', function(d, i) {return 20+ i * 120;})
      .attr('r', function(d) { return d.population * 0.000002});
      
      // NOTE how the above has to scale the incoming data to place them on the screen
      // conveniently D3 offers scale functions, see below
    }


// Draw with data and use scales to control how the data is interpreted
function drawWithDataAndScales(data) {
    // define dimensions and margins for the graphic
    const margin = ({top: 100, right: 100, bottom: 100, left: 100})
    const width = 800;
    const height = 300;
    
    // now we introduce our scales. 
    // the first, x, is about the amount of items we have
    const x = d3.scaleLinear()
    .domain([0, data.length-1])
    .range([margin.left, width-margin.right])

    // The second, radius, is about the values we are getting in
    const radius = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.population)])
    .range([0, (height-margin.bottom-margin.top)/2 ])

  // select svg
  const svg = d3.select(".ex-3 svg"); 
  svg
    .selectAll("circle") 
    .data(data) 
    .join("circle")
    .attr('fill', "grey")
    .attr('cy', height/2)
    .attr('cx', function(d, i) {return x(i);})
    .attr('r', function(d) { return radius(d.population) });
}