function Food() {
  this.x = 240;
  this.y = 240;

  this.spawn = function () {
    this.x = (Math.floor(Math.random() * 49) + 1) * lu;
    this.y = (Math.floor(Math.random() * 49) + 1) * lu;
  };

  this.render = function () {
    noStroke();
    fill("red");
    ellipse(this.x, this.y, 5);
  };
}
