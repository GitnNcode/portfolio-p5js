let ball;
let Lpaddle;
let Rpaddle;
let angle = 80;
let Gamespeed = 5
let start = 0;



function setup() {
  createCanvas(600, 600);
  noCursor();
  ball = new Ball();
  Rpaddle = new RightPaddle();
  Lpaddle = new LeftPaddle();
}

function draw() {
  background(0);
  start++;
  Gamespeed = Gamespeed +1;
  if (start >= 100) {
    ball.show();
    ball.update();
    ball.hit();
  }

  Rpaddle.show();
  Lpaddle.show();
}

//ball

class Ball {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.speedx = 2 * Gamespeed;
    this.speedy = 1 * Gamespeed;
  }
  show() {
    circle(this.x, this.y, 30);
    //rect(50,50,this.x,200)
  }
  update() {
    // this.speedx+=0.25
    // this.speedy+=0.25
    
    this.x += this.speedx;
    this.y += this.speedy;
  }
  hit() {
    if (this.x - 10 >= width || this.x + 10 <= 0) {
      console.log("x", this.x);
      //this.speedx=this.speedx*-1
      noLoop();
    }
    if (this.y + 10 >= height || this.y - 10 <= 0) {
      //console.log("y", this.y)
      this.speedy = this.speedy * -1;
    }
    if (
      this.x >= Rpaddle.x - 10 &&
      this.x <= Rpaddle.x &&
      this.y <= Rpaddle.y + 65 &&
      this.y >= Rpaddle.y - 15
    ) {
      //console.log("hit");
      
      this.speedx = this.speedx * -1;
      //this.speedy = this.speedy * -1;
    }
    if (this.x >= Lpaddle.x - 20 && this.x <= Lpaddle.x + 20) {
      console.log("hit");
      this.speedx = this.speedx * -1;
      //this.speedy = this.speedy * -1;
    }
  }
}

//right paddle/player

class RightPaddle {
  constructor() {
    this.y = mouseY;
    this.x = width - 10;
  }
  show() {
     this.y=mouseY
    rect(this.x, this.y, 10, 50);
  }
}

// class RightPaddle {
//   constructor() {
//     this.y = ball.y;
//     this.x = width - 10;
//   }
//   show() {
//     this.y=ball.y
//     rect(this.x, ball.y-20, 10, 50);
//   }
// }


//left paddle/bot
class LeftPaddle {
  constructor() {
    this.y = ball.y;
    this.x = 0;
  }
  show() {
    this.y = ball.y;
    rect(this.x, ball.y - 25, 10, 50);
  }
}
