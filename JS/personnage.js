class Personnage {
    constructor(coordX, coordY) {
        this.coordX = coordX;
        this.coordY = coordY;
        this.sprite = document.getElementById("personnage");
        this.move = false;
        this.inWork = false;
    }

    //paramètres : X (déplacement en X), Y (déplacement en Y)
    //Déplace le personnage en fonction des coordonnées données en paramètre
    mouvement(X, Y) {
        this.coordX = this.coordX + X;
        this.coordY = this.coordY + Y;
        this.placer();
    }

    //paramètres : aucun
    //Place le personnage à ses coordonnées
    placer() {
        this.sprite.style.top = this.coordY + "%";
        this.sprite.style.left = this.coordX + "%";
    }
}
