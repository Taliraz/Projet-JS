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
    /* ce serait pas mal si le gif ne se reset pas, comme ca on 
     * aurait du mvt lors des deplacements et un etat immobile quand on bouge pas
     * perso.src = "IMG/sprite.png" */
}

// scénario
edt.affichage();
pers.placer();

// events
document.body.addEventListener("keydown", mouvementClavier);
document.body.addEventListener("keypressed", mouvementClavier);
