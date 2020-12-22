function setup() {
  createCanvas(600, 600);
  
  
  

}

function draw() {
  background(220);
  let drawingNumber = "455255555355";
  
  noStroke();
  fill("red");
  ellipse(300, 300, 5, 5);
  
  stroke(51);
  strokeWeight(0.2);
  
  for(let i = 0; i < width; i += 12) {
    line(i, 0, i, height);
    line(width, i, 0, i);
  }
  
  strokeWeight(0.6);
  
  line(300, 300, 312, 288);
  
  
}

function parseDrawingNumber(drawingNumber) {
  let currentPos = {
    x = 300,
    y = 300
  }
  
  let currentDir = 5;
  let charArray = drawingNumber.split('');
  charArray.forEach(Number => {
    
  });
  
}
