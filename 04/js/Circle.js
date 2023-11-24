// la définition de la classe Circle c'est comme définir une function mais sans les parenthèses
// la fonction par défaut est le constructor
// on peut passer des paramètres au constructor
// dans une class on n'écrit pas "function" pour TOUTES les fonctions
// une variable globale de class s'écrit avec "this."
var amplitudePulsation = 110;
var vitessePulsation = 0.05;

class Circle {
  constructor(x, y, rayon, context, delay = 0) {
    this.x = x;
    this.y = y;
    this.origin = { x: x, y: y };
    this.target = { x: x, y: y };

    this.speed = 1;
    this.uniteDeTemps = 0;
    this.uniteDeTemps1 = 0;

    this.rayon = rayon;
    this.rayonOrigin = { rayon: rayon };
    this.rayonFinal = { rayon: rayon };

    this.context = context;
    this.rotation = 0;

    // Propriétés pour le deuxième cercle
    this.innerCircleRadius = rayon / 3;  // Taille du deuxième cercle
    this.innerCircleAngle = 0;  // Angle pour faire rebondir le deuxième cercle

    // Propriété pour le décalage
    this.delay = delay;
  }

  // changeColor() {
  //   this.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
  //   this.rayon = Math.random() * 100;
  // }

  // isInMe(mouseX, mouseY) {
  //   let d = this.dist(mouseX, mouseY, this.x, this.y);
  //   return d < this.rayon;
  // }

  draw() {
    this.context.save();

    // Dessine le contour du premier cercle
    this.context.strokeStyle = 'black';
    this.context.lineWidth = 2;
    let pulsation = Math.sin(this.uniteDeTemps) * amplitudePulsation;
    let rayonAjuste = this.rayon + pulsation;

    this.context.beginPath();
    this.context.arc(this.x, this.y, rayonAjuste, 0, 2 * Math.PI, true);
    this.context.stroke();
    this.context.closePath();

    // Dessine le deuxième cercle à l'intérieur du premier
    this.context.fillStyle = 'black';
    let innerCircleX = this.x + this.innerCircleRadius * Math.cos(this.innerCircleAngle);
    let innerCircleY = this.y + this.innerCircleRadius * Math.sin(this.innerCircleAngle);
    this.context.beginPath();
    this.context.arc(innerCircleX, innerCircleY, this.innerCircleRadius, 0, 2 * Math.PI, true);
    this.context.fill();
    this.context.closePath();

    this.context.restore();

    this.move();
    this.rapetisser();

    this.uniteDeTemps += vitessePulsation;
    this.innerCircleAngle += 0.05;

    if (this.innerCircleAngle > 2 * Math.PI) {
      this.innerCircleAngle = 0;
    }
  }

  dist(x1, y1, x2, y2) {
    let d = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    return d;
  }

  definirDestination(x, y) {
    this.target = { x: x, y: y };
    this.uniteDeTemps = 0;
  }

  move() {
    // Ajout du décalage dans le temps
    if (this.delay > 0) {
      this.delay--;
      return;
    }

    const d = this.dist(this.x, this.y, this.target.x, this.target.y);
    if (d < 0.01) {
      this.origin = { x: this.target.x, y: this.target.y };
      return;
    }

    const easing = Easing.bounceOut(this.uniteDeTemps);
    this.uniteDeTemps += 0.01;

    let distX = this.target.x - this.origin.x;
    let distY = this.target.y - this.origin.y;
    this.x = this.origin.x + distX * easing;
    this.y = this.origin.y + distY * easing;
  }

  rapetisser() {
    let differenceRayon2 = this.rayonFinal.rayon - this.rayon;
    if (Math.abs(differenceRayon2) < 0.01) {
      this.rayonOrigin = { rayon: this.rayonFinal.rayon };
      return;
    }

    const easing = Easing.elasticOut(this.uniteDeTemps1);
    this.uniteDeTemps1 += 0.01;
    let differenceRayon = this.rayonFinal.rayon - this.rayonOrigin.rayon;
    this.rayon = this.rayonOrigin.rayon + differenceRayon * easing;
  }
}
