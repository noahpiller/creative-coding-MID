var a1;
var a2;
var centerX;
var centerY;
var width = 800;
var height = 800;
var context;
var rayon;
var strokeColor;
var bigRadius;
var smallRadius;
var rotationSat;

function createCanvas(w, h) {
  var canvas = document.createElement("canvas");
  context = canvas.getContext("2d");
  canvas.width = w;
  canvas.height = h;
  document.body.appendChild(canvas);
}

function circle(x, y, rayon) {
  context.beginPath();
  context.arc(x, y, rayon, 0, 2 * Math.PI, true);
  context.strokeStyle = "rgb24(strokeColor, 0, 0)";
  context.stroke();
  context.closePath();
}

function setup() {
  console.log("setup");
  createCanvas(width, height);
  strokeColor = 0;
  a1 = 0;
  a2 = 0;
  rayon = 10;
  bigRadius = 10;
  smallRadius = 10;
  centerX = width / 2;
  centerY = height / 2;

  // document.addEventListener("click", mousePressed);

  draw();
}

function draw() {
  // console.log("draw");
  // context.clearRect(0, 0, width, height);
  context.fillStyle = "rgba(255,255,255, 0.01)";
  context.fillRect(0, 0, width, height);
  //
  a1 += 0.8;
  a2 += 2;
  strokeColor += 255;
  
  var posy = centerY;// Math.sin
  var posx = centerX;// Math.cos

  var r = Math.abs(200 * Math.cos(a1 * (Math.PI / 180)));

  circle(posx, posy, r);
  
  // SATELLITE

  var r2 = Math.abs(50 * Math.cos(a2 * (Math.PI / 45)));
  var distanceBetweenCircles = 300; // Changer la distance selon vos besoins
  var posx2 = posx + distanceBetweenCircles * Math.cos(a2 * (Math.PI / 180));
  var posy2 = posy + distanceBetweenCircles * Math.sin(a2 * (Math.PI / 180));
  
  circle(posx2, posy2, r2);
  
  requestAnimationFrame(draw);
}

function mousePressed(e) {
  console.log("mousePressed");
}

window.onload = function () {
  console.log("on est pret");
  setup();
};
