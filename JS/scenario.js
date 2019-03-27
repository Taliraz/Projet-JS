// variables
var edt = new Edt();
var pers = new Personnage(17, 17);
var exo = document.getElementById("exercice");
var left = document.getElementsByClassName("left")[0];
var mapSprite = document.getElementById("mapSprite");
var listDoor = [(new Door(50, 53, 79, 81, "K101")),
                (new Door(23, 25, 46, 50, "K102")),
                (new Door(61, 66, 79, 81, "K103")),
                (new Door(46, 50, 71, 73, "K104")),
                (new Door(80, 82, 43, 46, "K105")),
                (new Door(71, 73, 46, 51, "K106")),
                (new Door(80, 82, 30, 33, "K107")),
                (new Door(45, 50, 23, 25, "K108")),
                (new Door(42, 46, 15, 17, "K109")),
                (new Door(27, 32, 15, 17, "K111")),
                (new Door(15, 17, 50, 53, "K113")),
                (new Door(15, 17, 64, 67, "K115"))];

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
            if (!canEnter()) {
                if (pers.coordX > 17 && ((pers.coordX > 73 || pers.coordX < 70) || (pers.coordY <= 23 || pers.coordY >= 73))) // Collision
                    pers.mouvement(-1, 0);
            } else
                pers.mouvement(-1, 0);
            inDoor()
            break;
        case 38: // touche haut
            pers.sprite.style.transform = "rotate(90deg)";
            if (!canEnter()) {
                if (pers.coordY > 17 && ((pers.coordY > 73 || pers.coordY < 70) || (pers.coordX <= 23 || pers.coordX >= 73))) // Collision
                    pers.mouvement(0, -1);
            } else
                pers.mouvement(0, -1);
            inDoor();
            break;
        case 39: // touche droite
            pers.sprite.style.transform = "rotate(180deg)";
            if (!canEnter()) {
                if (pers.coordX < 80 && ((pers.coordX < 23 || pers.coordX > 25) || (pers.coordY <= 23 || pers.coordY >= 73))) // Collision
                    pers.mouvement(1, 0);
            } else
                pers.mouvement(1, 0);
            inDoor()
            break;
        case 40: // touche bas
            pers.sprite.style.transform = "rotate(-90deg)";
            if (!canEnter()) {
                if (pers.coordY < 79 && ((pers.coordY < 23 || pers.coordY > 25) || (pers.coordX <= 23 || pers.coordX >= 73))) // Collision
                    pers.mouvement(0, 1);
            } else
                pers.mouvement(0, 1);
            inDoor();
            break;
    }
}

function finClavier(event) {
    if (pers.move === true) {
        pers.sprite.src = "IMG/sprite.png";
        pers.move = false;
    }
}

function canEnter() {
    for (let door of listDoor) {
        if (pers.coordX >= door.coordXmin && pers.coordX <= door.coordXmax && pers.coordY >= door.coordYmin && pers.coordY <= door.coordYmax) {
            console.log("peut entrer salle : " + door.salle);
            return true;
        }
    }
}

function inDoor() {
    for (let door of listDoor) {
        if (pers.coordX > door.coordXmin && pers.coordX < door.coordXmax && pers.coordY > door.coordYmin && pers.coordY < door.coordYmax) {
            console.log("est entré salle : " + door.salle);
            // lance le cours correspondant
            if (edt.getMatiere(edt.getHoraire(h, min), door.salle) && !edt.getMatiere(edt.getHoraire(h, min), door.salle).fini) {
                edt.getMatiere(edt.getHoraire(h, min), door.salle).lancer();
                document.body.removeEventListener("keydown", mouvementClavier);
            }
        }
    }
}

function outClass() {
    document.body.addEventListener("keydown", mouvementClavier);
    var hour = edt.getHoraire(h, min);
    switch (hour) {
        case 1:
            h = 10;
            min = 0;
            break;
        case 2:
            h = 13;
            min = 30;
            break;
        case 3:
            h = 15;
            min = 45;
            break;
        case 4:
            h=18;
            break;
            
    }
}
function commencer(){
    document.body.addEventListener("keydown", mouvementClavier);
    document.body.addEventListener("keyup", finClavier);
    document.getElementById("menu").style.display="none";
    document.getElementsByClassName("game")[0].style.display="flex";
    edt.affichage();
    pers.placer();
    chronoStart();
}

function terminer(){
    document.body.removeEventListener("keydown", mouvementClavier);
    document.body.removeEventListener("keyup", finClavier);
    document.getElementById("menu").style.display="block";
    document.getElementsByClassName("game")[0].style.display="none";
    edt = new Edt();
    pers = new Personnage(17, 17);
    h=7;
    min=45;
    document.getElementById("start").innerHTML="Recommencer";
}

// scénario


// events
document.getElementById("start").addEventListener("click",commencer);
