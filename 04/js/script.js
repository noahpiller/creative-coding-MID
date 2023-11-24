var width = 800;
var height = 800;

var context;
var monCercle;
var cerclesNoirs = [];

function createCanvas(w, h) {
  var canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  context = canvas.getContext("2d");
  document.body.appendChild(canvas);
}

function drawPulsation() {
  context.clearRect(0, 0, 800, 800); // Efface le canvas
  monCercle.draw(); // Dessine le cercle avec la pulsation
  requestAnimationFrame(drawPulsation);
}

function drawAnimation() {
  context.clearRect(0, 0, width, height);

  // Dessine le cercle principal et son animation
  monCercle.draw();

  // Dessine les cercles noirs
  for (let i = 0; i < cerclesNoirs.length; i++) {
    cerclesNoirs[i].draw();
  }

  requestAnimationFrame(drawAnimation);
}

function setup() {
  console.log("setup");
  createCanvas(800, 800);

  monCercle = new Circle(400, 400, 200, context);

  // Crée et positionne les cercles noirs supplémentaires
  for (let i = 0; i < 5; i++) {
    cerclesNoirs.push(new Circle(400, 400, 40, context, i * 20));
    cerclesNoirs[i].definirDestination(Math.random() * width, Math.random() * height);
  }

  drawPulsation();

  drawAnimation();
}

window.onload = function () {
  console.log("on est prêt");
  setup();
};
