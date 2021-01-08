
// Equivalent: 4, 5, 6, 7, 8, 1, 2, 3

// Directions: E, SE, S, SW, W, NW, N, NE
let currentDirection = 'E';
let currentPos = {
  x: 300,
  y: 300,
};
const dirLookups = {
  "E": 0,
  "SE": 8,
  "S": 16,
  "SW": 24,
  "W": 32,
  "NW": 40,
  "N": 48,
  "NE": 56
};

let dir = [
  // E
  {x: -12, y: -12, n: 'NW'}, {x: 0, y: -12, n: 'N'}, {x: 12, y: -12, n: 'NE'}, {x: 12, y: 0, n: 'E'},
  {x: 12, y: 12, n: 'SE'}, {x: 0, y: 12, n: 'S'}, {x: -12, y: -12, n: 'SW'}, {x: -12, y: 0, n: 'W'},
  // SE
  {x: 0, y: -12, n: 'N'}, {x: 12, y: -12, n: 'NE'}, {x: 12, y: 0, n: 'E'}, {x: 12, y: 12, n: 'SE'},
  {x: 0, y: 12, n: 'S'}, {x: -12, y: 12, n: 'SW'}, {x: -12, y: 0, n: 'W'}, {x: -12, y: -12, n: 'NW'},
  // S
  {x: 12, y: -12, n: 'NE'}, {x: 12, y: 0, n: 'E'}, {x: 12, y: 12, n: 'SE'}, {x: 0, y: 12, n: 'S'}, 
  {x: -12, y: 12, n: 'SW'}, {x: -12, y: 0, n: 'W'}, {x: -12, y: -12, n: 'NW'}, {x: 0, y: -12, n: 'N'},
  // SW
  {x: 12, y: 0, n: 'E'}, {x: 12, y: 12, n: 'SE'}, {x: 0, y: 12, n: 'S'}, {x: -12, y: 12, n: 'SW'}, 
  {x: -12, y: 0, n: 'W'}, {x: -12, y: -12, n: 'NW'}, {x: 0, y: -12, n: 'N'}, {x: 12, y: -12, n: 'NE'},
  // W
  {x: 12, y: 12, n: 'SE'}, {x: 0, y: 12, n: 'S'}, {x: -12, y: 12, n: 'SW'}, {x: -12, y: 0, n: 'W'}, 
  {x: -12, y: -12, n: 'NW'}, {x: 0, y: -12, n: 'N'}, {x: 12, y: -12, n: 'NE'}, {x: 12, y: 0, n: 'E'},
  // NW
  {x: 0, y: 12, n: 'S'}, {x: -12, y: 12, n: 'SW'}, {x: -12, y: 0, n: 'W'}, {x: -12, y: -12, n: 'NW'}, 
  {x: 0, y: -12, n: 'N'}, {x: 12, y: -12, n: 'NE'}, {x: 12, y: 0, n: 'E'}, {x: 12, y: 12, n: 'SE'},
  // N
  {x: -12, y: 12, n: 'SW'}, {x: -12, y: 0, n: 'W'}, {x: -12, y: -12, n: 'NW'}, {x: 0, y: -12, n: 'N'}, 
  {x: 12, y: -12, n: 'NE'}, {x: 12, y: 0, n: 'E'}, {x: 12, y: 12, n: 'SE'}, {x: 0, y: 12, n: 'S'},
  // NE
  {x: -12, y: 0, n: 'W'}, {x: -12, y: -12, n: 'NW'}, {x: 0, y: -12, n: 'N'}, {x: 12, y: -12, n: 'NE'}, 
  {x: 12, y: 0, n: 'E'}, {x: 12, y: 12, n: 'E'}, {x: 0, y: 12, n: 'SE'}, {x: -12, y: 12, n: 'SW'}
];


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  // Draw grid
  stroke(51);
  strokeWeight(0.2);
  for (let i = 0; i < width; i += 12) {
    line(width, i, 0, i);
    line(i, 0, i, height);
  }

  // Start circle
  noStroke();
  fill("green");
  ellipse(currentPos.x, currentPos.y, 5, 5);

  stroke(0);
  strokeWeight(0.6);

  previousX = currentPos.x;
  previousY = currentPos.y;

  // Dir 1
  currentPos.x += 12;
  currentPos.y += 0;

  line(previousX, previousY, currentPos.x, currentPos.y);

  // Move to 1
  
  newLine(3);

  // End circle
  noStroke();
  fill("red");
  ellipse(currentPos.x, currentPos.y, 5, 5);

  noLoop();
}

function newLine(number) {
  previousX = currentPos.x;
  previousY = currentPos.y;

  const coordinates = getNextCoordinates(3);
  
  coordinates.x += 12;
  coordinates.y += 12;

  line(previousX, previousY, currentPos.x, currentPos.y);
  currentDirection = coordinates.n;
  
}

function getNextCoordinates(number) {
  return dir[dirLookups[currentDirection] + (number - 1)];
}

