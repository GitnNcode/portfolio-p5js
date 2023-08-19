let snowflakes = [];
let circlecolor;
function setup() {
  createCanvas(2600, 1300);
  let amount = random(width / 4, width);
  for (let i = 0; i < amount; i++) {
    let randx = random(width);
    let randy = random(height);
    let randr = random(20);
    let randspeed = random(15);
    snowflakes[i] = new flake(randx, randy, randr, randspeed);
    // randx+=15
  }
}

function draw() {
  background(0);

  for (let i = 0; snowflakes[i]; i++) {
    snowflakes[i].show();
    snowflakes[i].update();
    snowflakes[i].remove();
  }
  fill(100, 0, 255);
  textSize(50);
  //text("Happy Birthday", width / 2 - 170, height / 2);
}

class flake {
  constructor(xval, yval, rval, speedval) {
    this.x = xval;
    this.y = yval;
    this.r = rval;
    this.speed = speedval;
  }

  remove() {
    if (this.y >= height) {
      this.y = 0;
    }
  }

  update() {
    this.y += this.speed;
  }

  show() {
    let redcolor = random(100, 255);
    let bluecolor = random(100, 255);
    let greencolor = random(100, 255);
    circlecolor = color(redcolor, greencolor, bluecolor);
    strokeWeight(0);
    fill(circlecolor);
    circle(this.x, this.y, this.r);
  }
}
