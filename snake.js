function Snake() {
  this.cdir = "E";
  this.ndir = 4;
  this.eat = false;
  this.dead = false;

  this.coords = [
    {
      x: 300,
      y: 288,
    },
    {
      x: 300,
      y: 300,
    },
  ];

  this.render = function () {
    for (let i = 0; i < this.coords.length - 1; i++) {
      let pX = this.coords[i].x;
      let pY = this.coords[i].y;

      let nX = this.coords[i + 1].x;
      let nY = this.coords[i + 1].y;

      stroke(0);
      strokeWeight(0.6);
      line(pX, pY, nX, nY);
    }
  };

  this.update = function () {
    let oldCoords = this.coords[this.coords.length - 1];
    let coordDif = dir[dirLookups[this.cdir] + this.ndir - 1];
    let newCoords = {
      x: oldCoords.x + coordDif.x,
      y: oldCoords.y + coordDif.y,
    };
    
    for(let i = 1; i < this.coords.length - 1; i++) {
      let coord = this.coords[i];
      if (coord.x === newCoords.x && coord.y === newCoords.y) {
        this.dead = true;
      }
    }
    
    if (
      newCoords.x === 0 ||
      newCoords.x == 600 ||
      newCoords.y == 0 ||
      newCoords.y == 600
    ) {
      snake.dead = true;
    }
      if (!this.eat) {
        this.coords.shift();
      }
    this.eat = false;

    this.coords.push(newCoords);
    this.cdir = coordDif.n;
    this.ndir = 4;
  };
}
