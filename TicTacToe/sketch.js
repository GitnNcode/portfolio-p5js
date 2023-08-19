let grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let player = "x";
let wonx = false;
let wono = false;

let buttonspressed=0
let offsetx;
let offsety;
var canvas;
function setup() {
  canvas=createCanvas(300, 300);
  canvas.position(windowWidth/2-150,windowHeight/2-150)
  offsetx=windowWidth/2-150
  offsety=windowHeight/2-150
    let rval=random(200,255)
    let gval=random(200,255)
    let bval=random(200,255)
  for (let i = 0; i <= 300; i += 100) {
    for (let j = 0; j <= 300; j += 100) {

      fill(rval,gval,bval)
      rect(i, j, 100, 100,13);
    }
  }
  makebutton();
}

function checkx() {
  if (grid[0] == "x" && grid[1] == "x" && grid[2] == "x") {
    wonx = true;
  }
  if (grid[3] == "x" && grid[4] == "x" && grid[5] == "x") {
    wonx = true;
  }
  if (grid[6] == "x" && grid[7] == "x" && grid[8] == "x") {
    wonx = true;
  }
  if (grid[0] == "x" && grid[3] == "x" && grid[6] == "x") {
    wonx = true;
  }
  if (grid[1] == "x" && grid[4] == "x" && grid[7] == "x") {
    wonx = true;
  }
  if (grid[2] == "x" && grid[5] == "x" && grid[8] == "x") {
    wonx = true;
  }
  if (grid[0] == "x" && grid[4] == "x" && grid[8] == "x") {
    wonx = true;
  }
  if (grid[2] == "x" && grid[4] == "x" && grid[6] == "x") {
    wonx = true;
  }
}
function checko() {
  if (grid[0] == "o" && grid[1] == "o" && grid[2] == "o") {
    wono = true;
  }
  if (grid[3] == "o" && grid[4] == "o" && grid[5] == "o") {
    wono = true;
  }
  if (grid[6] == "o" && grid[7] == "o" && grid[8] == "o") {
    wono = true;
  }
  if (grid[0] == "o" && grid[3] == "o" && grid[6] == "o") {
    wono = true;
  }
  if (grid[1] == "o" && grid[4] == "o" && grid[7] == "o") {
    wono = true;
  }
  if (grid[2] == "o" && grid[5] == "o" && grid[8] == "o") {
    wono = true;
  }
  if (grid[0] == "o" && grid[4] == "o" && grid[8] == "o") {
    wono = true;
  }
  if (grid[2] == "o" && grid[4] == "o" && grid[6] == "o") {
    wono = true;
  }
}

function screenClear() {
  button1.remove();
  button2.remove();
  button3.remove();
  button4.remove();
  button5.remove();
  button6.remove();
  button7.remove();
  button8.remove();
  button9.remove();
  clear();
  createCanvas(300, 300);
  background(255);
}

function draw() {
  //console.log(grid);
  checkx();
  checko();
  if (wonx == true) {
    console.log("x wins!");
    screenClear();
    fill(255,0,0);
    textSize(50);
    text("X Wins !!", 50, 150);
    restart= createButton("restart")
    restart.position((width/2-25)+offsetx, (height-100)+offsety);
    restart.mousePressed(reload);
    noLoop();
  }
  if (wono == true) {
    screenClear();
    fill(0,0,255);
    textSize(50);
    text("O Wins !!", 50, 150);
    restart= createButton("restart")
    restart.position((width/2-25)+offsetx, (height-100)+offsety);
    restart.mousePressed(reload);
    noLoop();
  }
  if (buttonspressed>=9){
    screenClear();
    fill(0,0,255);
    textSize(50);
    textAlign(CENTER)
    text("Tie", width/2, height/2);
    restart= createButton("restart")
    restart.position((width/2-25)+offsetx, (height-100)+offsety);
    restart.mousePressed(reload);
  }
}

function reload(){
    location.reload();
}


function makebutton() {
  button1 = createButton("click me");
  button2 = createButton("click me");
  button3 = createButton("click me");
  button4 = createButton("click me");
  button5 = createButton("click me");
  button6 = createButton("click me");
  button7 = createButton("click me");
  button8 = createButton("click me");
  button9 = createButton("click me");
  button1.position(15+offsetx, 30+offsety);
  button2.position(115+offsetx, 30+offsety);
  button3.position(215+offsetx, 30+offsety);
  button4.position(15+offsetx, 130+offsety);
  button5.position(115+offsetx, 130+offsety);
  button6.position(215+offsetx, 130+offsety);
  button7.position(15+offsetx, 230+offsety);
  button8.position(115+offsetx, 230+offsety);
  button9.position(215+offsetx, 230+offsety);
  button1.mousePressed(but1);
  button2.mousePressed(but2);
  button3.mousePressed(but3);
  button4.mousePressed(but4);
  button5.mousePressed(but5);
  button6.mousePressed(but6);
  button7.mousePressed(but7);
  button8.mousePressed(but8);
  button9.mousePressed(but9);
}

function change() {
  if (player == "o") {
    player = "x";
  } else if (player == "x") {
    player = "o";
  }
}

function but1() {
  if (player == "x") {
    fill(255, 0, 0);
  } else if (player == "o") {
    fill(0, 0, 255);
  }
  textSize(100);
  text(player, 20, 70);
  grid[0] = player;
  change();
  button1.remove();
  buttonspressed++
}
function but2() {
  if (player == "x") {
    fill(255, 0, 0);
  } else if (player == "o") {
    fill(0, 0, 255);
  }
  textSize(100);
  text(player, 120, 70);
  grid[1] = player;
  change();
  button2.remove();
  buttonspressed++
}
function but3() {
  if (player == "x") {
    fill(255, 0, 0);
  } else if (player == "o") {
    fill(0, 0, 255);
  }
  textSize(100);
  text(player, 220, 70);
  grid[2] = player;
  change();
  button3.remove();
  buttonspressed++
}
function but4() {
  if (player == "x") {
    fill(255, 0, 0);
  } else if (player == "o") {
    fill(0, 0, 255);
  }
  textSize(100);
  text(player, 20, 170);
  grid[3] = player;
  change();
  button4.remove();
  buttonspressed++
}
function but5() {
  if (player == "x") {
    fill(255, 0, 0);
  } else if (player == "o") {
    fill(0, 0, 255);
  }
  textSize(100);
  text(player, 120, 170);
  grid[4] = player;
  change();
  button5.remove();
  buttonspressed++
}
function but6() {
  if (player == "x") {
    fill(255, 0, 0);
  } else if (player == "o") {
    fill(0, 0, 255);
  }
  textSize(100);
  text(player, 220, 170);
  grid[5] = player;
  change();
  button6.remove();
  buttonspressed++
}
function but7() {
  if (player == "x") {
    fill(255, 0, 0);
  } else if (player == "o") {
    fill(0, 0, 255);
  }
  textSize(100);
  text(player, 20, 270);
  grid[6] = player;
  change();
  button7.remove();
  buttonspressed++
}
function but8() {
  if (player == "x") {
    fill(255, 0, 0);
  }else if(player=="o"){
    fill(0,0,255)
  }
  textSize(100);
  text(player, 120, 270);
  grid[7] = player;
  change();
  button8.remove();
  buttonspressed++
}
function but9() {
  if (player == "x") {
    fill(255, 0, 0);
  } else if (player == "o") {
    fill(0, 0, 255);
  }
  textSize(100);
  text(player, 220, 270);
  grid[8] = player;
  change();
  button9.remove();
  buttonspressed++
}
