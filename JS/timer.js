var h = 7;
var min = 45;
var inProgress = false;

//paramètres : aucun
//Affiche l'horloge sur la page et l'arrete à 18h00
function chrono() {
    if (inProgress) {
        endClass(edt.estFini(h, min));
        if (h < 18) {
            if (min < 59)
                min++;
            else {
                min = 0;
                h++
            }
        } else {
            chronoStop();
            terminer();
        }
        if (min < 10) {
            if (h < 10) {
                document.getElementById("clock").innerHTML = "0" + h + ":0" + min;
            } else {
                document.getElementById("clock").innerHTML = h + ":0" + min;
            }
        } else {
            if (h < 10) {
                document.getElementById("clock").innerHTML = "0" + h + ":" + min;
            } else {
                document.getElementById("clock").innerHTML = h + ":" + min;
            }
        }
        setTimeout(chrono, 1000);
    }
}

//paramètres : aucun
//Démarre l'horloge
function chronoStart() {
    inProgress = true;
    chrono();
}

//paramètres : aucun
//Met en pause l'heure sur l'horloge
function chronoStop() {
    inProgress = false;
    chrono();
}

//paramètres : aucun
//Replace l'horloge à 7h45
function chronoReset() {
    h = 7;
    min = 45;
    document.getElementById("clock").innerHTML = h + ":" + min;
}
