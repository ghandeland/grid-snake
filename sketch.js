// Length unit
const lu = 12;

// Equivalent: 4, 5, 6, 7, 8, 1, 2, 3
// Directions: E, SE, S, SW, W, NW, N, NE
let currentDirection = 'E';
let currentPos = {
  x: 0,
  y: 0
};

let snake = new Snake(240, 240);

function Snake(x, y) {
  this.x = x;
  this.y = y;
  this.dir = 'E';
  
  this.coords = [
    {
      x: 240,
      y: 240,
    },
    {
      x: 240,
      y: 228,
    }
  ];
  
}

function setup() {
  createCanvas(50 * lu, 50 * lu);
  currentPos.x = 25 * lu;
  currentPos.y = 25 * lu;
  
  background(220);
  frameRate(3);
  //noLoop();
  
  // Draw grid
  stroke(51);
  strokeWeight(0.2);
  for (let i = 0; i < width; i += lu) {
    line(width, i, 0, i);
    line(i, 0, i, height);
  }
  
}

function draw() {
  
  // Start circle
  noStroke();
  fill("green");
  ellipse(currentPos.x, currentPos.y, 5, 5);

  let num = "4343434343453434";

  
  let charArray = num.split('');
  for(let i = 0; i < charArray.length; i++) {
    if(charArray[i] === '9' || charArray[i] === '0') break;
    newLine(parseInt(charArray[i]));
  }
  
  // End circle
  noStroke();
  fill("red");
  ellipse(currentPos.x, currentPos.y, 5, 5);

  console.log("hello");
}

function newLine(number) {
  stroke(0);
  strokeWeight(0.6);
  
  previousX = currentPos.x;
  previousY = currentPos.y;

  const coordinates = dir[dirLookups[currentDirection] + (number - 1)];
  
  currentPos.x += coordinates.x;
  currentPos.y += coordinates.y;

  line(previousX, previousY, currentPos.x, currentPos.y);
  currentDirection = coordinates.n;
  
}

const dirLookups = {
  E: 0,
  SE: 8,
  S: 16,
  SW: 24,
  W: 32,
  NW: 40,
  N: 48,
  NE: 56,
};

let dir = [
  // E
  { x: -lu, y: -lu, n: "NW" },
  { x: 0, y: -lu, n: "N" },
  { x: lu, y: -lu, n: "NE" },
  { x: lu, y: 0, n: "E" },
  { x: lu, y: lu, n: "SE" },
  { x: 0, y: lu, n: "S" },
  { x: -lu, y: -lu, n: "SW" },
  { x: -lu, y: 0, n: "W" },
  // SE
  { x: 0, y: -lu, n: "N" },
  { x: lu, y: -lu, n: "NE" },
  { x: lu, y: 0, n: "E" },
  { x: lu, y: lu, n: "SE" },
  { x: 0, y: lu, n: "S" },
  { x: -lu, y: lu, n: "SW" },
  { x: -lu, y: 0, n: "W" },
  { x: -lu, y: -lu, n: "NW" },
  // S
  { x: lu, y: -lu, n: "NE" },
  { x: lu, y: 0, n: "E" },
  { x: lu, y: lu, n: "SE" },
  { x: 0, y: lu, n: "S" },
  { x: -lu, y: lu, n: "SW" },
  { x: -lu, y: 0, n: "W" },
  { x: -lu, y: -lu, n: "NW" },
  { x: 0, y: -lu, n: "N" },
  // SW
  { x: lu, y: 0, n: "E" },
  { x: lu, y: lu, n: "SE" },
  { x: 0, y: lu, n: "S" },
  { x: -lu, y: lu, n: "SW" },
  { x: -lu, y: 0, n: "W" },
  { x: -lu, y: -lu, n: "NW" },
  { x: 0, y: -lu, n: "N" },
  { x: lu, y: -lu, n: "NE" },
  // W
  { x: lu, y: lu, n: "SE" },
  { x: 0, y: lu, n: "S" },
  { x: -lu, y: lu, n: "SW" },
  { x: -lu, y: 0, n: "W" },
  { x: -lu, y: -lu, n: "NW" },
  { x: 0, y: -lu, n: "N" },
  { x: lu, y: -lu, n: "NE" },
  { x: lu, y: 0, n: "E" },
  // NW
  { x: 0, y: lu, n: "S" },
  { x: -lu, y: lu, n: "SW" },
  { x: -lu, y: 0, n: "W" },
  { x: -lu, y: -lu, n: "NW" },
  { x: 0, y: -lu, n: "N" },
  { x: lu, y: -lu, n: "NE" },
  { x: lu, y: 0, n: "E" },
  { x: lu, y: lu, n: "SE" },
  // N
  { x: -lu, y: lu, n: "SW" },
  { x: -lu, y: 0, n: "W" },
  { x: -lu, y: -lu, n: "NW" },
  { x: 0, y: -lu, n: "N" },
  { x: lu, y: -lu, n: "NE" },
  { x: lu, y: 0, n: "E" },
  { x: lu, y: lu, n: "SE" },
  { x: 0, y: lu, n: "S" },
  // NE
  { x: -lu, y: 0, n: "W" },
  { x: -lu, y: -lu, n: "NW" },
  { x: 0, y: -lu, n: "N" },
  { x: lu, y: -lu, n: "NE" },
  { x: lu, y: 0, n: "E" },
  { x: lu, y: lu, n: "E" },
  { x: 0, y: lu, n: "SE" },
  { x: -lu, y: lu, n: "SW" },
];