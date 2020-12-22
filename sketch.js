function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(220);
  
  for(let i = 0; i < width; i += 10) {
    
    strokeWeight(0.1);
    line(i, 0, i, height);
    line(width, i, 0, i);
    
  }
  
  
}
