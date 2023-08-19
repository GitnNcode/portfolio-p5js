let num=1
let selectionMode=false
let run=false
let turn="white"
//let turn="black"
let legal=false
/*
*/
let grid=[
         "br","bn","bb","bq","bk","bb","bn","br",
         "bp","bp","bp","bp","bp","bp","bp","bp",
         0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,
         0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,
         0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,
         0   ,0   ,0   ,0   ,0   ,0   ,0   ,0   ,
         "wp","wp","wp","wp","wp","wp","wp","wp",
         "wr","wn","wb","wq","wk","wb","wn","wr"]
//test grid

// let grid=[
//   'wq',0,"wb",0,0,0,0,0,
//   0,0,0,0,0,0,0,0,
//   0,0,0,0,0,0,0,0,
//   0,0,0,0,0,0,0,0,
//   0,0,0,0,0,0,0,0,
//   0,0,0,0,0,0,0,0,
//   0,0,0,0,0,0,0,0,
//   0,0,0,0,0,0,0,0]

function preload() {
  R = loadImage('rook.png');
  N = loadImage('knight.png');
  B = loadImage('bishop.png');
  P = loadImage('pawn.png');
  Q = loadImage('queen.png');
  K = loadImage('king.png');
}

function setup() {
  createCanvas(800, 800);
  chessboard()
  drawboard()
}

function chessboard(){
  for (let i = 0; i <= 700; i += 100) {
    num++;
    for (let j = 0; j <= 700; j += 100) {
      noStroke();
      if (num % 2 != 0) {
        fill(170,80,0);
        rect(j, i, 100, 100);
      }
      else if(num%2==0){
        fill(255);
        rect(j, i, 100, 100);
      }
      num++;
    }
  }
}

function mousePressed() {
  if(selectionMode==false){
    cell=floor(mouseX/100)+floor(mouseY/100)*8;
    selectionMode=true;
    return;
  }
  else if(selectionMode==true){
    mcell=floor(mouseX/100)+floor(mouseY/100)*8;
    selectionMode=false;
    mstr=str(grid[mcell])[0];
    cstr=str(grid[cell])[0];
    if (mstr!=cstr){
      legalmove()
      if(run==true){
      grid[mcell]=grid[cell];
      grid[cell]=0;}
      //run=true;
    } 
  } 
}

function legalmove(){
  run=false
  if(grid[cell]==0){
    run=false
    return
  }
  else if(cell-mcell==0){
    run=false 
    return
  }
  else if(str(grid[cell])[0]=='b'){
    if (turn=="white"){
      return
    }
    else if(grid[cell]=="bk"){
      if (cell-mcell==8 || cell-mcell==7 ||cell-mcell==9||cell-mcell==-8 || cell-mcell==-7 ||cell-mcell==-9||cell-mcell==1||cell-mcell==-1){
      run=true}
    }
    else if(grid[cell]=="bp"){
    if(cell<=15 && cell>=8){
      if (cell-mcell==-16 || cell-mcell==-8){
      run=true}
    }
     else if (cell-mcell==-8){
      if(mcell<=63 && mcell>=55){
        grid[cell]="bq"
      }
       run=true
    }
    else if(str(grid[mcell])[0]=='w'){
      if (cell-mcell==-7||cell-mcell==-9){
        if(mcell<=63 && mcell>=55){
        grid[cell]="bq"
      }
        run=true
      }
      else{
        run=false
      }
    }
    else{
    run=false
    return
  }
  }
    else if(grid[cell]=="bn"){
    if(cell-mcell==17||cell-mcell==-17||cell-mcell==15||cell-mcell==-15){
      run=true
    }
    else if(cell-mcell==10||cell-mcell==-10||cell-mcell==6||cell-mcell==-6){
      run=true
    }
    else{
      run=false
      return
    }
  }
    else if(grid[cell]=="bb"){
      let moves=[]
      let counter=0
      let cellcounter=cell
      //grid[cellcounter]!=0||
      while(counter<=8){
        cellcounter-=9
        moves.push(cellcounter)
        counter+=1
        if(grid[cellcounter]!=0){
         break
        }
      }
      counter=0
      cellcounter=cell
      while(counter<=8){
        cellcounter+=9
        moves.push(cellcounter)
        counter+=1
        if(grid[cellcounter]!=0){
         break
        }
      }
      counter=0
      cellcounter=cell
      while(counter<=8){
        cellcounter-=7
        moves.push(cellcounter)
        counter+=1
        if(grid[cellcounter]!=0){
         break
        }
      }
      counter=0
      cellcounter=cell
      while(counter<=8){
        cellcounter+=7
        moves.push(cellcounter)
        counter+=1
        if(grid[cellcounter]!=0){
         break
        }
      }
      //console.log(moves,mcell)
      for(var u in moves){
        if (mcell==moves[u]){
          run=true
        }
      }
       
  }
    else if(grid[cell]=="br"){
      let moves=[]
      let counter=0
      let checker=0
      let cellcounter=cell
      //grid[cellcounter]!=0||
      while(counter<=8){
        cellcounter-=8
        moves.push(cellcounter)
        counter+=1
        if(grid[cellcounter]!=0){
         break
        }
      }
      counter=0
      cellcounter=cell
      while(counter<=8){
        cellcounter+=8
        moves.push(cellcounter)
        counter+=1
        if(grid[cellcounter]!=0){
         break
        }
      }
      
      counter=floor(mcell/8)
      checker=floor(cell/8)
      if (counter==checker){
        run=true
      }
      
      
      for(var u in moves){
        if (mcell==moves[u]){
          run=true
        }
      }
    }

  else{
    run=true
  }
}
  else if(str(grid[cell])[0]=='w'){
    if(turn=="black"){
      return
    }
    else if(grid[cell]=="wk"){
      if (cell-mcell==8 || cell-mcell==7 ||cell-mcell==9||cell-mcell==-8 || cell-mcell==-7 ||cell-mcell==-9||cell-mcell==1||cell-mcell==-1){
      run=true}
    }
    else if(grid[cell]=="wp"){
    if(cell<=55 && cell>=48){
      if (cell-mcell==16 || cell-mcell==8){
      run=true}
    }
      
    else if(grid[cell]=="wq"){
      let moves=[]
      let counter=0
      let checker=0
      let cellcounter=cell
      //grid[cellcounter]!=0||
      while(counter<=8){
        cellcounter-=8
        moves.push(cellcounter)
        counter+=1
        if(grid[cellcounter]!=0){
         break
        }
      }
      counter=0
      cellcounter=cell
      while(counter<=8){
        cellcounter+=8
        moves.push(cellcounter)
        counter+=1
        if(grid[cellcounter]!=0){
         break
        }
      }
      
      counter=floor(mcell/8)
      checker=floor(cell/8)
      if (counter==checker){
        run=true
      }
      
      
      for(u in moves){
        if (mcell==moves[u]){
          run=true
        }
      }
    }
        
   else if(grid[cell]=="wr"){
      let moves=[]
      let counter=0
      let checker=0
      let cellcounter=cell
      //grid[cellcounter]!=0||
      while(counter<=8){
        cellcounter-=8
        moves.push(cellcounter)
        counter+=1
        if(grid[cellcounter]!=0){
         break
        }
      }
      counter=0
      cellcounter=cell
      while(counter<=8){
        cellcounter+=8
        moves.push(cellcounter)
        counter+=1
        if(grid[cellcounter]!=0){
         break
        }
      }
      
      counter=floor(mcell/8)
      checker=floor(cell/8)
      if (counter==checker){
        run=true
      }
      
      
      for(u in moves){
        if (mcell==moves[u]){
          run=true
        }
      }
    }
     else if (cell-mcell==8){
      if(mcell<=7 && mcell>=0){
        grid[cell]="wq"
      }
       run=true
    }
    else if(str(grid[mcell])[0]=='b'){
      if (cell-mcell==7||cell-mcell==9){
        if(mcell<=7 && mcell>=0){
        grid[cell]="wq"
      }
        run=true
      }
      else{
        run=false
        return
      }
    }
    else{
    run=false
    return
  }
  }
    else if(grid[cell]=="wn"){
    if(cell-mcell==17||cell-mcell==-17||cell-mcell==15||cell-mcell==-15){
      run=true
    }
    else if(cell-mcell==10||cell-mcell==-10||cell-mcell==6||cell-mcell==-6){
      run=true
    }
    else{
      run=false
    }
  }
    else if(grid[cell]=="wb"){
      let moves=[]
      let counter=0
      let cellcounter=cell
      while(counter<=8){
        cellcounter-=9
        moves.push(cellcounter)
        counter+=1
        if(grid[cellcounter]!=0){
         break
        }
      }
      counter=0
      cellcounter=cell
      while(counter<=8){
        cellcounter+=9
        moves.push(cellcounter)
        counter+=1
        if(grid[cellcounter]!=0){
         break
        }
      }
      counter=0
      cellcounter=cell
      while(counter<=8){
        cellcounter-=7
        moves.push(cellcounter)
        counter+=1
        if(grid[cellcounter]!=0){
         break
        }
      }
      counter=0
      cellcounter=cell
      while(counter<=8){
        cellcounter+=7
        moves.push(cellcounter)
        counter+=1
        if(grid[cellcounter]!=0){
         break
        }
      }
      //console.log(moves,mcell)
      for(var u in moves){
        if (mcell==moves[u]){
          run=true
        }
      }
    }
   else if(grid[cell]=="wr"){
      let moves=[]
      let counter=0
      let checker=0
      let cellcounter=cell
      //grid[cellcounter]!=0||
      while(counter<=8){
        cellcounter-=8
        moves.push(cellcounter)
        counter+=1
        if(grid[cellcounter]!=0){
         break
        }
      }
      counter=0
      cellcounter=cell
      while(counter<=8){
        cellcounter+=8
        moves.push(cellcounter)
        counter+=1
        if(grid[cellcounter]!=0){
         break
        }
      }
      
      counter=floor(mcell/8)
      checker=floor(cell/8)
      if (counter==checker){
        run=true
      }
      
      
      for(u in moves){
        if (mcell==moves[u]){
          run=true
        }
      }
    }

    else{
    run=true
  }
//end of w  
}
}

function drawboard(){
  for(var i in grid){
    //rook
    if (grid[i]=="wr"){
      x=i%8*100
      y=floor(i/8)*100
      tint(255)
      image(R,x+25,y+20,50,70)
    }
    if (grid[i]=="br"){
      x=i%8*100
      y=floor(i/8)*100
      tint(100)
      image(R,x+25,y+20,50,70)
    }
    
    //knight
    if (grid[i]=="wn"){
      x=i%8*100
      y=floor(i/8)*100
      tint(255)
      image(N,x+25,y+15,50,75)
    }
    if (grid[i]=="bn"){
      x=i%8*100
      y=floor(i/8)*100
      tint(100)
      image(N,x+25,y+15,50,75)
    }
    
    //bishop
    if (grid[i]=="wb"){
      x=i%8*100
      y=floor(i/8)*100
      tint(255)
      image(B,x+20,y+10,60,80)
    }
    if (grid[i]=="bb"){
      x=i%8*100
      y=floor(i/8)*100
      tint(100)
      image(B,x+20,y+10,60,80)
    }
    //queen
    if (grid[i]=="wq"){
      x=i%8*100
      y=floor(i/8)*100
      tint(255)
      image(Q,x+20,y+5,60,90)
    }
    if (grid[i]=="bq"){
      x=i%8*100
      y=floor(i/8)*100
      tint(100)
      image(Q,x+20,y+5,60,90)
    }
    //king
    if (grid[i]=="wk"){
      x=i%8*100
      y=floor(i/8)*100
      tint(255)
      image(K,x+20,y+5,60,90)
    }
    if (grid[i]=="bk"){
      x=i%8*100
      y=floor(i/8)*100
      tint(100)
      image(K,x+20,y+5,60,90)
    } 
    //pawn
    if (grid[i]=="wp"){
      x=i%8*100
      y=floor(i/8)*100
      tint(255)
      image(P,x+25,y+10,50,80)
    }
    if (grid[i]=="bp"){
      x=i%8*100
      y=floor(i/8)*100
      tint(100)
      image(P,x+25,y+10,50,80)
    } 
  }
}
  
function draw() {
  if(run==true){
    if (turn=="white"){
       turn="black"
    }
    else if (turn=="black"){
       turn="white"
    }
    clear()
    run=false
    chessboard()
    drawboard()
  }

}
