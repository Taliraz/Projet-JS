// variables
var edt
var pers
var score
var exo = document.getElementById("exercice");
var left = document.getElementsByClassName("left")[0];
var mapSprite = document.getElementById("mapSprite");
var listDoor = [(new Door(50, 53, 79, 81, 1, "K101")),
                (new Door(23, 25, 46, 50, 0, "K102")),
                (new Door(61, 66, 79, 81, 1, "K103")),
                (new Door(46, 50, 71, 73, 1, "K104")),
                (new Door(80, 82, 43, 46, 0, "K105")),
                (new Door(71, 73, 46, 51, 0, "K106")),
                (new Door(80, 82, 30, 33, 0, "K107")),
                (new Door(45, 50, 23, 25, 1, "K108")),
                (new Door(42, 46, 15, 17, 1, "K109")),
                (new Door(27, 32, 15, 17, 1, "K111")),
                (new Door(15, 17, 50, 53, 0, "K113")),
                (new Door(15, 17, 64, 67, 0, "K115"))];

//paramètres : event (l'evenement keypressed ou keydown)
//Déplace le personnage en fonction de la touche passée en paramètre
function mouvementClavier(event) {
    var k = event.keyCode;
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
                if (pers.coordX < 80 && ((pers.coordX > 26 || pers.coordX < 23) || (pers.coordY <= 23 || pers.coordY >= 73))) // Collision
                    pers.mouvement(1, 0);
            } else
                pers.mouvement(1, 0);
            inDoor()
            break;
        case 40: // touche bas
            pers.sprite.style.transform = "rotate(-90deg)";
            if (!canEnter()) {
                if (pers.coordY < 79 && ((pers.coordY > 26 || pers.coordY < 23) || (pers.coordX <= 23 || pers.coordX >= 73))) // Collision
                    pers.mouvement(0, 1);
            } else
                pers.mouvement(0, 1);
            inDoor();
            break;
    }
}

//paramètres : event (l'évenement keyup)
//Arrete le déplacement du personnage
function finClavier(event) {
    if (pers.move === true) {
        pers.sprite.src = "IMG/sprite.png";
        pers.move = false;
    }
}

//paramètres : aucun
//Vérifie si le personnage est devant une porte
function canEnter() {
    for (let door of listDoor) {
        if (pers.coordX >= door.coordXmin && pers.coordX <= door.coordXmax && pers.coordY >= door.coordYmin && pers.coordY <= door.coordYmax) {
            return true;
        }
    }
}

//paramètres : Axe (axe des X ou Axe des Y)
//Si le personnage est dans un porte et que la porte correspond à une épreuve lance l'épreuve
function inDoor(axe) {
    for (let door of listDoor) {
        if (door.axe === 1) {
            if (pers.coordX > door.coordXmin - 1 && pers.coordX < door.coordXmax + 1 && pers.coordY > door.coordYmin && pers.coordY < door.coordYmax) {
                console.log("entre :" + door.salle);
                // lance le cours correspondant
                if (edt.getMatiere(edt.getHoraire(h, min), door.salle) && !edt.getMatiere(edt.getHoraire(h, min), door.salle).fini) {
                    if (!edt.enRetard(h, min)) {
                        score.assi = score.assi + 5;
                    }
                    edt.getMatiere(edt.getHoraire(h, min), door.salle).lancer();
                    document.body.removeEventListener("keydown", mouvementClavier);
                }
            }
        } else {
            if (pers.coordX > door.coordXmin && pers.coordX < door.coordXmax && pers.coordY > door.coordYmin - 1 && pers.coordY < door.coordYmax + 1) {
                console.log("entre :" + door.salle);
                // lance le cours correspondant
                if (edt.getMatiere(edt.getHoraire(h, min), door.salle) && !edt.getMatiere(edt.getHoraire(h, min), door.salle).fini) {
                    if (!edt.enRetard(h, min)) {
                        score.assi = score.assi + 5;
                    }
                    edt.getMatiere(edt.getHoraire(h, min), door.salle).lancer();
                    document.body.removeEventListener("keydown", mouvementClavier);
                }
            }
        }
    }
}

//paramètres : aucun
//Si le personnage termine son épreuve réalise un bond dans le temps ou termine le jeu si l'épreuve était la dernière
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
            h = 18;
            break;
    }
}

function endClass(horaire) {
    if (horaire != 0) {
        edt.matieres[horaire - 1].mat.error = 5;
        edt.matieres[horaire - 1].setScore();
        outClass();
        while (exo.firstChild) {
            exo.removeChild(exo.firstChild);
            mapSprite.style.display = "block";
            document.getElementById("screen").style.display = "none";
        }
    }
}

//paramètres : aucun
//Initialise la partie 
function commencer() {
    edt = new Edt();
    for (var i = 0; i < 4; i++) {
        edt.matieres[i].instancier();
    }
    pers = new Personnage(17, 17);
    score=new Score();
    chronoReset();
    document.body.addEventListener("keydown", mouvementClavier);
    document.body.addEventListener("keyup", finClavier);
    document.getElementById("score").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementsByClassName("game")[0].style.display = "flex";
    edt.affichage();
    pers.placer();
    chronoStart();
    score.afficherScore();
}

//paramètres : aucun
//Termine la partie et affiche le menu
function terminer() {
    while (exo.firstChild) {
        exo.removeChild(exo.firstChild);
        mapSprite.style.display = "block";
        document.getElementById("screen").style.display = "none";
    }
    document.body.removeEventListener("keydown", mouvementClavier);
    document.body.removeEventListener("keyup", finClavier);
    document.getElementById("menu").style.display = "block";
    document.getElementsByClassName("game")[0].style.display = "none";
    document.getElementById("start").innerHTML = "Recommencer";
}

// events
document.getElementById("start").addEventListener("click", commencer);
