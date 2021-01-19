// Directions: E, SE, S, SW, W, NW, N, NE
// Equivalent: 4, 5, 6, 7, 8, 1, 2, 3
// Length unit
const lu = 12;
const cSize = lu * 50;
let snake = new Snake();
let food = new Food();
let score = 0;
const title = document.getElementById("title");
food.spawn();


function setup() {
  createCanvas(cSize, cSize);
}

function renderBackground() {
  background(220);
  frameRate(8);
  
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
  snake.render();
  checkSnake();
}

function checkSnake() {
  
  // Check if snake is dead
  if(snake.dead === true) {
    endGame();
  }
  
  // Check if snake head is at food coordinates
  if (
    snake.coords[snake.coords.length - 1].x === food.x &&
    snake.coords[snake.coords.length - 1].y === food.y
  ) {
    food.spawn();
    snake.eat = true;
    score++;
    title.innerHTML = "Score: " + score;
  }
}

function endGame() {
  noLoop();
  title.innerHTML = "Game over, Score: " + score;
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
  { x: lu, y: lu, n: "SE" },
  { x: 0, y: lu, n: "S" },
  { x: -lu, y: lu, n: "SW" },
];