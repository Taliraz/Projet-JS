// variables
var edt = new Edt();
var pers = new Personnage(17, 17);
var exo = document.getElementById("exercice");
var left = document.getElementsByClassName("left")[0];
var mapSprite = document.getElementById("mapSprite");

// functions
function mouvementClavier(event) {
    var k = event.keyCode; // event est ici un keydown, et keyCode est le code de la touche pressée
    if (pers.move === false) {
        pers.sprite.src = "IMG/sprite.gif";
        pers.move = true;
    }
    switch (k) {
        case 37: // touche gauche
            pers.sprite.style.transform = "rotate(0deg)";
            if (pers.coordX > 17 & ((pers.coordX > 73 || pers.coordX < 70) || (pers.coordY <= 23 || pers.coordY >= 73))) // Collision
                pers.mouvement(-1, 0);
            break;
        case 38: // touche haut
            pers.sprite.style.transform = "rotate(90deg)";
            if (pers.coordY > 17 & ((pers.coordY > 73 || pers.coordY < 70) || (pers.coordX <= 23 || pers.coordX >= 73))) // Collision
                pers.mouvement(0, -1);
            break;
        case 39: // touche droite
            pers.sprite.style.transform = "rotate(180deg)";
            if (pers.coordX < 80 & ((pers.coordX < 23 || pers.coordX > 25) || (pers.coordY <= 23 || pers.coordY >= 73))) // Collision
                pers.mouvement(1, 0);
            break;
        case 40: // touche bas
            pers.sprite.style.transform = "rotate(-90deg)";
            if (pers.coordY < 79 & ((pers.coordY < 23 || pers.coordY > 25) || (pers.coordX <= 23 || pers.coordX >= 73))) // Collision
                pers.mouvement(0, 1);
            break;
    }
}

function finClavier(event) {
    if (pers.move === true) {
        pers.sprite.src = "IMG/sprite.png";
        pers.move = false;
    }
}

// scénario
edt.affichage();
pers.placer();

// events
document.body.addEventListener("keydown", mouvementClavier);
document.body.addEventListener("keypressed", mouvementClavier);
document.body.addEventListener("keyup", finClavier);
