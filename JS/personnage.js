class Personnage {
    constructor(coordX, coordY) {
        this.coordX = coordX;
        this.coordY = coordY;
        this.sprite = document.getElementById("personnage");
    }

    mouvement(X, Y) {
        this.coordX = this.coordX + X;
        this.coordY = this.coordY + Y;
        this.placer();
    }

    placer() {
        this.sprite.style.top = this.coordY + "px";
        this.sprite.style.left = this.coordX + "px";
    }
}
