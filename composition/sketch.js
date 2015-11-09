
function setup() {
  createCanvas(1000,1000);
  noFill();
   noCursor();
  
}

function draw() {
  
  

  
  var regularArr = [  '#d68f83',  '#d7a885',  '#d8c087',  '#ca6299' ];
  // By default shuffle() returns a shuffled cloned array:
  var newArr = shuffle(regularArr);

  
  background(newArr[0]);
  
  if( key=="O") {
  background ("#5C5858");
}
  


var t = map(mouseX, 0, width, -5, 5);
  curveTightness(t);
  
  
  stroke(400, 205, 5);
curve(50, 260, 50, 260, 630, 240, 630, 610);
stroke(0);
curve(50, 260, 630, 240, 630, 610, 150, 650);
stroke(255, 102, 50);
curve(630, 240, 630, 610, 150, 650, 150, 650);

  stroke(500, 305, 105);
curve(150, 360, 150, 360, 730, 340, 730, 710);
stroke(0);
curve(150, 360, 730, 340, 730, 710, 250, 750);
stroke(355, 202, 150);
curve(730, 340, 730, 710, 250, 750, 250, 750);

stroke(300, 105, 0);
curve(0, 160, 0, 160, 530, 140, 530, 510);
stroke(0);
curve(0, 160, 530, 140, 530, 510, 50, 550);
stroke(155, 2, 0);
curve(530, 140, 530, 510, 50, 550, 50, 550);

  stroke ("yellow"); 
  
  fill ("#FE642E");
  
  ellipse(100, 110, 100, 110);
  
  stroke ("yellow")
  
  fill ("#F7D358");
  
  ellipse(200,210,100,110);
  
  stroke ("#000000");
  
 
  line (mouseX,mouseY,999,0);
line (mouseX,mouseY,999,0);
line (mouseX,mouseY,999,10);
line (mouseX,mouseY,999,20);
line (mouseX,mouseY,999,30);



  
    fill("#200b1b")
    
   textSize(40);
text("Upper City Center", 20, 420);
fill(0, 102, 120);
text("Upper City Center", 20, 460);
fill(0, 102, 153, 51);
text("Upper City Center", 20, 500);



  
  
}

