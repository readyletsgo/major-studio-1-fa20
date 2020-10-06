let bins;
let caratWeights =[]

// Load the data
d3.json('data/data-caratWeight.json').then(function(data){ 
  data.forEach(function(d){
    if(d.caratWeight!=null)
    caratWeights.push(d.caratWeight);
  })

  // Define the bins
  // we're having a cut-off at carathweight 100 and defining the number of bins at 17
  let bin = d3.bin().domain([0, 200]).thresholds(30);

  bins = bin(caratWeights);

     // define dimensions and margins for the graphic
     const margin = ({top: 100, right: 50, bottom: 100, left: 80})
     const width = 1400;
     const height = 700;

  // Define the scales
  x = d3.scaleLinear()
    .domain([bins[0].x0, bins[bins.length - 1].x1])
    .range([margin.left, width - margin.right])
    
  y = d3.scaleLinear()
    .domain([0, d3.max(bins, d => d.length)])
    .range([height - margin.bottom, margin.top])

// DRAWING

    // create an svg container from scratch
    const svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height)

// attach a graphic element, and append rectangles to it
svg.append("g")
.attr("fill", "steelblue")
.selectAll("rect")
.data(bins)
.join("rect")
.attr("x", d => x(d.x0) + 1)
.attr("width", d => Math.max(0, x(d.x1) - x(d.x0) - 1))
.attr("y", d => y(d.length))
.attr("height", d => y(0) - y(d.length));
});