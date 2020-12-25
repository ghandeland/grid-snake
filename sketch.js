function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  let drawingNumber = "455255555355";

  stroke(51);
  strokeWeight(0.2);

  for (let i = 0; i < width; i += 12) {
    line(width, i, 0, i);
    line(i, 0, i, height);
  }

  let currentPos = {
    x: 300,
    y: 300
  };

  strokeWeight(0.6);
  let charArray = drawingNumber.split("");
  for(let i = 0; i < charArray.length; i++) {
    alert(charArray[i]);
  }
  
  for (let i = 0; i < 12; i ++) {
    previousX = currentPos.x;
    previousY = currentPos.y;
    
    currentPos.x += 12;

    if (i % 2 === 0) {
      currentPos.y += 12;
    }
    
    line(previousX, previousY, currentPos.x, currentPos.y);
  }

  

  noStroke();
  fill("red");
  ellipse(currentPos.x, currentPos.y, 5, 5);
  
  noLoop();
}

function parseDrawingNumber(drawingNumber) {
  let currentPos = {
    x: 300,
    y: 300,
  };

  noStroke();
  fill("red");
  ellipse(currentPos.x, currentPos.y, 5, 5);

  let currentDir = 5;
  let charArray = drawingNumber.split("");

  strokeWeight(0.6);
  line(300, 300, 312, 288);
}
