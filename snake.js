function Snake(x, y) {
  this.x = x;
  this.y = y;
  this.cdir = "E";
  this.ndir = 4;

  this.coords = [
    {
      x: 240,
      y: 240,
    },
    {
      x: 252,
      y: 240,
    },
    {
      x: 264,
      y: 240,
    },
    {
      x: 276,
      y: 240,
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

    this.coords.shift();
    this.coords.push(newCoords);
    this.cdir = coordDif.n;
    this.ndir = 4;
  };
}

