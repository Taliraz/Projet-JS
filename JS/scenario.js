// variables
var edt = new Edt();
var pers = new Personnage(50, 50);
var exo = document.getElementById("exercice");

// functions
function mouvementClavier(event) {
    var k = event.keyCode; // event est ici un keydown, et keyCode est le code de la touche pressée
    let perso = document.getElementById("personnage");
    perso.src = "IMG/sprite.gif";
    switch (k) {
        case 37: // touche gauche
            perso.style.transform = "rotate(0deg)";
            pers.mouvement(-5, 0);
            break;
        case 38: // touche haut
            perso.style.transform = "rotate(90deg)";
            pers.mouvement(0, -5);
            break;
        case 39: // touche droite
            perso.style.transform = "rotate(180deg)";
            pers.mouvement(5, 0);
            break;
        case 40: // touche bas
            perso.style.transform = "rotate(-90deg)";
            pers.mouvement(0, 5);
            break;
    }
}

// scénario
edt.affichage();
pers.placer();

// events
document.body.addEventListener("keydown", mouvementClavier);
