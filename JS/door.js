class Door {

    constructor(coordXmin, coordXmax, coordYmin, coordYmax, axe, salle) {
        this.coordXmin = coordXmin;
        this.coordXmax = coordXmax;
        this.coordYmin = coordYmin;
        this.coordYmax = coordYmax;
        this.axe = axe;
        this.salle = salle;
    }

    placer() {
        var img = document.createElement("img");
        img.src = "";
        img.style.top = this.coordY + "%";
        img.style.left = this.coordX + "%";
        mapSprite.appendChild(img);
    }
}
