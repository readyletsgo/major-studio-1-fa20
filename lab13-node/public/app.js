// fetching our data from our server
async function fetchData() {
  const employeeData = await d3.json('/api');
  const barChartData = employeeData.sort((a, b) => {
    return d3.ascending(a.employee_salary, b.employee_salary)
  })
  console.log(barChartData)
  drawChart(barChartData);
}

// define tooltip div:
const tip = d3.select('.bar-chart-container')
  .append('div')
  .attr('class', 'tooltip');

// tooltip handlers:
function mouseover(event, data) { 
  tip.style('left', `${event.clientX + 15}px`)
    .style('top', `${event.clientY}px`)
    .transition()
    .style('opacity', 0.98);

  tip.join('p')
    .html(d => `name: ${data.employee_name}
      <br>salary: ${data.employee_salary}`);
}

function mousemove(event) {
  tip.style('left', `${event.clientX + 15}px`)
    .style('top', `${event.clientY}px`)
}

function mouseout() {  
  tip.transition().style('opacity', 0);
}

// draw our bar chart
function drawChart(data) {
  // layout
  const margin = {top: 40, right: 40, bottom: 40, left: 60}
  const width = 600 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  // our base
  const svg = d3.select('.bar-chart-container')
    .append('svg')
    .attr('width', width + 150)
    .attr('height', height + 150)
  
  // create a barc chart grouping
  const barChart = svg.append('g')
    .attr('class', 'bar-chart')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  // define max for our y linear scale
  const yMax = d3.max(data, d => d.employee_salary)
  
  // define our x & y scales
  const xScale = d3.scaleBand()
    .domain(data.map(d => d.employee_name))
    .range([0, width])
    .paddingInner(0.25);
  
  const yScale = d3.scaleLinear()
    .domain([0, yMax])
    .range([height, 0])

  // draw our bars
  const bars = barChart.selectAll('.bar')
    .data(data)
    .join('rect')
    .attr('class', 'bar')
    .attr('width', xScale.bandwidth())
    .attr('x', data => xScale(data.employee_name))
    .attr('y', data => yScale(data.employee_salary))
    .style('fill', 'tomato')
    .transition()
    .delay((d, i) => i * 20) // transition will apply gradually by bar
    .duration(1000)
    .attr('height', data => height - yScale(data.employee_salary))

  // define our x axis and pass is our xscale
  const xAxis = d3.axisBottom(xScale)
    .tickSizeOuter(0) 

  const xAxisDraw = barChart.append('g') // create a group for our axis
    .attr('class', 'x axis')
    .attr('transform', `translate(0, ${height})`) // position our axis
    .call(xAxis) // use the .call method to bind our axis
    .selectAll('text')
    .attr("y", 0)
    .attr("x", 9)
    .attr("dy", ".35em")
    .attr("transform", "rotate(90)")
    .style("text-anchor", "start");

  // define our y axis and pass in our yscale
  const yAxis = d3.axisLeft(yScale)
    .tickSizeInner([-width]) // add horizontal readers
    .tickSizeOuter(0) // get rid of the outer ticks
  
  const yAxisDraw = barChart.append('g')
    .attr('class', 'y axis')
    .call(yAxis)
  
  // give space between our y axis labels and y axis
  yAxisDraw.selectAll('text')
    .attr('dx', '-0.6em')

  // get rid of first line
  yAxisDraw.select('line')
    .attr('display', 'none')

  // attach event listeners to bars
  d3.selectAll('.bar')
    .on('mouseover', mouseover)
    .on('mousemove', mousemove)
    .on('mouseout', mouseout)
}

fetchData()