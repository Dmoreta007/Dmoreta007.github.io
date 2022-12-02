function setup() {
  // put setupcode here
  var width = 700;
  var height = 750;
  createCanvas(windowWidth, windowHeight);
  background('#060901');
}

function draw() {
  // put drawing code here
  if(mouseIsPressed === true){
  fill('#f8fdf0');
  stroke('#9d0605');
  ellipse(mouseX,mouseY,30, 10);
  }
let c = color(233, 245, 0);
fill(c);
noStroke();
rect(120, 90, 150,150, 20000);
describe(`Yellow rect in middle right of canvas,
with 150 pixel width and height.`);
  
let a = color(255, 204, 0);
fill(a);
noStroke();
rect(120, 100, 10, 80,200);
describe(`Yellow rect in middle right of canvas,
with 100 pixel width and height.`);

  rect(259,100,10,80,200);
  ellipse(190,89,80);
  
let b = color(12, 204, 0);
fill(b);
noStroke();
ellipse(190,89,49,80);
describe(`green ellipse in middle right of canvas,
with 55 pixel width and height.`);

  ellipse(190,199,100,30);
  
let d = color(90, 20, 20);
fill(d);
noStroke();
ellipse(190, 199, 100, 30);
describe(`Yellow rect in middle right of canvas,
with 55 pixel width and height.`);


let e = color(255, 204, 0);
fill(e);
noStroke();
rect(166,235, 50, 150);
describe(`Yellow rect in middle right of canvas,
with 55 pixel width and height.`);
  
  
let f = color(255, 204, 0);
fill(f);
noStroke();
rect(95, 270, 200,150,30);
describe(`Yellow rect in middle right of canvas,
with 55 pixel width and height.`);
  
}
  
