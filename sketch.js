// Directions: E, SE, S, SW, W, NW, N, NE
// Equivalent: 4, 5, 6, 7, 8, 1, 2, 3
// Length unit
const lu = 12;
const cSize = lu * 50;
let snake = new Snake(240, 240);
let food = new Food();
food.spawn();

function Food() {
  this.x = 240;
  this.y = 240;
  
  this.spawn = function() {
    this.x = (Math.floor(Math.random() * 49) + 1) * lu;
    this.y = (Math.floor(Math.random() * 49) + 1) * lu;
  }
  
  this.render = function() {
    
    console.log(this.x + " " + this.y);
    
    noStroke();
    fill('red');
    ellipse(this.x, this.y, 5) 
  }
  
}

function setup() {
  createCanvas(cSize, cSize);
}

function renderBackground() {
  background(220);
  frameRate(3);
  
  // Draw grid
  stroke(51);
  strokeWeight(0.2);
  
  
  for (let i = 0; i < cSize; i += lu) {
    line(width, i, 0, i);
    line(i, 0, i, height);
  }
}



function draw() {
  renderBackground();

  food.render();
  snake.update();
  checkEat();
  snake.render();
}



function checkEat() {
  
  
  
}

function keyTyped() {
  if (
    key === "1" ||
    key === "2" ||
    key === "3" ||
    key === "4" ||
    key === "5" ||
    key === "6" ||
    key === "7"
  ) {
    snake.ndir = parseInt(key);
  } 
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