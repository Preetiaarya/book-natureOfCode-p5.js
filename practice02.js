// let randomLight = [];

// let light = 20;
// function setup(){
//     createCanvas(1000,600);
//     for(let i = 0; i<light; i++){
//     randomLight[i]=0;
//     }
// }
// function draw(){
//     background("yellow");
// }

let rectY = 600; // Initial Y position of the rectangle
let speed = 5; // Speed of the rectangle

function setup() {
  createCanvas(1000, 600); // Create a canvas of 400x400
}

function draw() {
  background(204, 0, 102); // Clear the background
  
  fill(255,153,51);
   // Set rectangle color
  rect(450, rectY, 20, 50); // Draw the rectangle (x, y, width, height)

  rectY -= speed; // Move the rectangle upwards

  // If the rectangle moves beyond the canvas height, reset to the top
  if (rectY < 0) {
    rectY = height;
  }
}