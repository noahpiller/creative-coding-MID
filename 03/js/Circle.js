// la définition de la classe Circle c'est comme définir une function mais sans les parenthèses
// la fonction par défaul est le constructor
// on peut passer des paramètres au constructor
// dans une class on n'écrit pas "function" pour TOUTES les fonctions
// une variable globale de class s'écrit avec "this."
class Circle {
  constructor(x, y, taille) {
    this.x = x;
    this.y = y;
    this.taille = taille * 2; // La taille du carré
    this.color = "black"; // Couleur par défaut
    this.rotation = 0;
    this.borderRadius = 50;
    
    this.image = new Image();
    this.image.src = "images/tile4.png";
  }

  changeColor() {
    const grayValue = Math.random() * 205;
    this.color = `rgb(${grayValue},${grayValue},${grayValue})`;
    this.borderRadius = Math.random() * (this.taille / 2); // Rayon de coin aléatoire
    this.rotation += (Math.PI / 2); // Augmente l'angle de rotation de 45 degrés

    // this.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    // this.taille = Math.random() * 100; // Changer la taille du carré
  }

  isInMe(mouseX, mouseY) {
    // Calcul de la distance entre la souris et le centre du carré
    let d = this.dist(mouseX, mouseY, this.x, this.y);
    // Compare la distance à la moitié de la taille du carré
    if (d < this.taille / 2) {
      return true;
    } else {
      return false;
    }
  }

  draw(context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);

    // Dessinez l'image à la place du carré
    context.drawImage(this.image, -this.taille / 2, -this.taille / 2, this.taille, this.taille);

    context.restore();
    context.beginPath();

    // context.fillStyle = this.color;
    // context.fillRect(-this.taille / 2, -this.taille / 2, this.taille, this.taille); // Dessine un carré
    // context.restore();
    // context.beginPath();
    // //
    // context.moveTo(-this.taille / 2 + this.borderRadius, -this.taille / 2);
    // context.lineTo(this.taille / 2 - this.borderRadius, -this.taille / 2);
    // context.arcTo(this.taille / 2, -this.taille / 2, this.taille / 2, -this.taille / 2 + this.borderRadius, this.borderRadius);
    // context.lineTo(this.taille / 2, this.taille / 2 - this.borderRadius);
    // context.arcTo(this.taille / 2, this.taille / 2, this.taille / 2 - this.borderRadius, this.taille / 2, this.borderRadius);
    // context.lineTo(-this.taille / 2 + this.borderRadius, this.taille / 2);
    // context.arcTo(-this.taille / 2, this.taille / 2, -this.taille / 2, this.taille / 2 - this.borderRadius, this.borderRadius);
    // context.lineTo(-this.taille / 2, -this.taille / 2 + this.borderRadius);
    // context.arcTo(-this.taille / 2, -this.taille / 2, -this.taille / 2 + this.borderRadius, -this.taille / 2, this.borderRadius);

  }

  dist(x1, y1, x2, y2) {
    let d = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    return d;
  }
}
