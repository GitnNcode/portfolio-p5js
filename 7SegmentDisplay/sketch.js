let number = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  frameRate(1);
  if (number == 9) {
    number = -1;
  }
  number++;
  lighter();
  darker();
}

function lighter() {
  colorfill = color(255, 0, 0);
  colorfill.setAlpha(50);
  fill(colorfill);
  rect(40, 120, 60, 20);
  rect(40, 40, 60, 20);
  rect(40, 200, 60, 20);
  rect(100, 60, 20, 60);
  rect(20, 60, 20, 60);
  rect(100, 140, 20, 60);
  rect(20, 140, 20, 60);
}

function darker() {
  colorfill = color(255, 0, 0);
  colorfill.setAlpha(200);
  fill(colorfill);
  if (number == 0) {
    rect(40, 40, 60, 20);
    rect(40, 200, 60, 20);
    rect(100, 60, 20, 60);
    rect(20, 60, 20, 60);
    rect(100, 140, 20, 60);
    rect(20, 140, 20, 60);
  }
  if (number == 1) {
    rect(100, 60, 20, 60);
    rect(100, 140, 20, 60);
  }
  if (number == 2) {
    rect(40, 120, 60, 20);
    rect(40, 40, 60, 20);
    rect(40, 200, 60, 20);
    rect(100, 60, 20, 60);
    rect(20, 140, 20, 60);
  }
  if (number == 3) {
    rect(40, 120, 60, 20);
    rect(40, 40, 60, 20);
    rect(40, 200, 60, 20);
    rect(100, 60, 20, 60);
    rect(100, 140, 20, 60);
  }
  if (number == 4) {
    rect(40, 120, 60, 20);
    rect(100, 60, 20, 60);
    rect(20, 60, 20, 60);
    rect(100, 140, 20, 60);
  }
  if (number == 5) {
    rect(40, 120, 60, 20);
    rect(40, 40, 60, 20);
    rect(40, 200, 60, 20);
    rect(20, 60, 20, 60);
    rect(100, 140, 20, 60);
  }
  if (number == 6) {
    rect(40, 120, 60, 20);
    rect(40, 40, 60, 20);
    rect(40, 200, 60, 20);
    rect(20, 60, 20, 60);
    rect(100, 140, 20, 60);
    rect(20, 140, 20, 60);
  }
  if (number == 7) {
    rect(40, 40, 60, 20);
    rect(100, 60, 20, 60);
    rect(100, 140, 20, 60);
  }
  if (number == 8) {
    rect(40, 120, 60, 20);
    rect(40, 40, 60, 20);
    rect(40, 200, 60, 20);
    rect(100, 60, 20, 60);
    rect(20, 60, 20, 60);
    rect(100, 140, 20, 60);
    rect(20, 140, 20, 60);
  }
  if (number == 9) {
    rect(40, 120, 60, 20);
    rect(40, 40, 60, 20);
    rect(40, 200, 60, 20);
    rect(100, 60, 20, 60);
    rect(20, 60, 20, 60);
    rect(100, 140, 20, 60);
  }
}
