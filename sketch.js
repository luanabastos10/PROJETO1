function setup() {
  createCanvas(1000, 800);
  background("pink");
}


function draw() {

 fill("rgb(123,38,155)");
 stroke("lightblue");
 if(mouseIsPressed)
 rect(mouseX,mouseY,30,50);
}
