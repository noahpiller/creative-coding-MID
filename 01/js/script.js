var r = 0;
var g = 0;
var b = 0;
var columnWidth = 18;
var columnHeight = 200;
var yellowWidth;


var nbRectangles = 3;
var nbBlocs = 2;

var incrementHeight = true; // Variable pour gérer l'incrémentation/décrémentation de columnHeight

var rectRadius = 0;
var yellowRectRadius = 0;

let noiseScale=0.02;

function createCanvas(width, height) {
  var canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  document.body.appendChild(canvas);
}

function setup() {
  console.log("setup");
  createCanvas(windowWidth, windowHeight);

  document.addEventListener("click", mousePressed);

  yellowWidth = windowWidth / 3;
  
  draw();
  
}

function draw() {

    background(r,g,b);

    // fill("#e23352");
    // noStroke();
    // rect(width/4 + columnWidth * 4, height/2 - columnHeight/2, columnWidth, columnHeight);
    // rect(width/4 + columnWidth * 2, height/2 - columnHeight/2, columnWidth, columnHeight);
    // rect(width/4, height/2 - columnHeight/2, columnWidth, columnHeight);

    // rect(width - width/4 - columnWidth * 4, height/2 - columnHeight/2, columnWidth, columnHeight);
    // rect(width - width/4 - columnWidth * 2, height/2 - columnHeight/2, columnWidth, columnHeight);
    // rect(width - width/4, height/2 - columnHeight/2, columnWidth, columnHeight);



        fill("#e23352");
        noStroke();
        for (var j = 0; j < nbRectangles; j++) {
            var x = width / 4 + j * (columnWidth * 2 + columnWidth/6); // Calcul de la position en X
            rect(x, height / 2 - columnHeight / 2, columnWidth, columnHeight, rectRadius);

            var x2 = width - (j + 13) * (columnWidth * 2 + columnWidth / 6); // Calcul de la position en X
            rect(x2, height / 2 - columnHeight / 2, columnWidth, columnHeight, rectRadius);
        }

        // Incrémentez ou décrémentez columnHeight en fonction de la condition
        if (incrementHeight) {
        columnHeight += 4; // Augmentez la hauteur
        } else {
        columnHeight -= 4; // Diminuez la hauteur
        }

        // Vérifiez si columnHeight atteint windowWidth, puis inversez la direction
        if (columnHeight >= windowWidth/4) {
        incrementHeight = false;
        rectRadius = 7;
        yellowRectRadius = 20;
        r = (random(100));
        g = (random(255));
        b = (random(255));
        } else if (columnHeight <= 100) {
        incrementHeight = true;
        rectRadius = 0;
        yellowRectRadius = 0;
        r = (random(100));
        g = (random(255));
        b = (random(255));        }

    fill('#feda00');
    noStroke();
    rect(windowWidth/2 - yellowWidth/2, height/2 - columnHeight/2, yellowWidth, columnHeight, yellowRectRadius)

    let noiseScale=0.02;

    for (let x=0; x < width; x++) {
    let noiseVal = noise((mouseX * x/50000)*noiseScale, mouseY*noiseScale);
    stroke(noiseVal*10);
    line(x, noiseVal++ *1500, x, height);
    }

    // var rectRadius = 0;
    // var yellowRectRadius = 0;
}



function mousePressed(e) {
  console.log("mousePressed");
}

window.onload = function () {
  console.log("on est pret");
  setup();
};