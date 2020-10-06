// "d3" is globally available
// because we have the d3 code
// in our index.html file

// load JSON using d3.json
d3.json('./data.json')
  .then( json => {
      // execute our 
      // display images function
      displayImages(json);
  }); 

// this function creates all
// of our DOM elements
function displayImages(json){
    // select a <div> with an id of "app"
    // this is where we want all of our
    // images to be added
    let app  = d3.select('#app').text('');

    // defining two different directions
    // our "date" field could be sorted by
    let descending = (a,b) => {
        return b.date - a.date;
    }
    let ascending = (a,b) => {
        return a.date - b.date;
    }

    // take our JSON and sort it
    let data = json.sort( (a,b)=>descending(a,b) );

    // define "cards" for each item
    let card = app.selectAll('div.met-card')
                .data(data)
                .join('div')
                .attr('class', 'met-card');

    // create a div with a class of "image"
    // and populate it with an <img/> tag
    // that contains our filepath
    card.append('div')
        .attr('class', 'image')
        .append('img')
        .attr('src', d => {
            // all our images are in the "images"
            // folder which we will need to 
            // add to our filename first
            return './images/' + d.filename
        });

    // create a paragraph that will
    // hold the object date
    card.append('p')
        .attr('class', 'object-date')
        .text(d=>d.date);

    // create a heading tag
    // that will be the object title
    card.append('h2')
        .attr('class', 'title')
        .text(d=>d.title);
}