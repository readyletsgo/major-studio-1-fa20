function setup(){
	createCanvas(windowWidth, windowHeight);
	noStroke();
}

function draw(){
	background(255);

	let x = 50;
	let y = 50;

	let w = 300;
	let h = 500;

	fill(200);
	rect(x,y, w, h);

	fill(0);
	// the actual mouse position
	ellipse(mouseX, mouseY, 20, 20);
	// the mapped mouse position
	ellipse(
		map(mouseX,0, width,x,w+x),
		y,
		// Make this also map to the Y position
		20,
		20
	)
}
