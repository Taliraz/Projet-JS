class Edt {

    constructor() {
        var NomMatieres = ["Bases de donnees", "Architecture", "Java", "JavaScript", "Scheme", "Reseau", "PHP", "Maths"];
        var salles = ["K101", "K102", "K103", "K104", "K105", "K106", "K107", "K108", "K109", "K111", "K113", "K115"];

        NomMatieres.sort(function () { // mélange l'array de manière aléatoire
            return .5 - Math.random();
        });
        salles.sort(function () { // mélange l'array de manière aléatoire
            return .5 - Math.random();
        });
        this.matieres = [new Matiere(1, NomMatieres[0], salles[0]), new Matiere(2, NomMatieres[1], salles[1]), new Matiere(3, NomMatieres[2], salles[2]), new Matiere(4, NomMatieres[3], salles[3])];
    }

    //paramètres : aucun
    //Affiche l'emploi du temps
    affichage() {
        var affichage = document.getElementById("affichageEDT");
        for (var i = 0; i < 4; i++) {
            var nomMatiere = document.createElement("p");
            nomMatiere.classList.add("affichageMatiere");
            nomMatiere.innerHTML = this.matieres[i].nom;
            var nomSalle = document.createElement("p");
            nomSalle.classList.add("affichageMatiere");
            nomSalle.innerHTML = this.matieres[i].salle;
            affichage.children[i].insertBefore(nomSalle, affichage.children[i].firstChild);
            affichage.children[i].insertBefore(nomMatiere, affichage.children[i].firstChild);
        };
    }

    //paramètres : horaire (plage horaire), salle (numéro de salle)
    //Retourne la matère correspondant à la salle et l'horaire
    getMatiere(horaire, salle) {
        for (var i = 0; i < this.matieres.length; i++) {
            if (this.matieres[i].horaire == horaire && this.matieres[i].salle == salle) {
                return this.matieres[i];
            }
        }
    }

    //paramètres : heures, minutes 
    //retourne la plage horaire en fonction de l'heure donnée en paramètre
    getHoraire(heures, minutes) {
        if (heures >= 7 && heures <= 9) {
            return 1;
        } else if (heures == 10 || heures == 11) {
            return 2;
        } else if (heures == 12 && minutes < 15) {
            return 2;
        } else if (heures == 13 && minutes >= 30) {
            return 3;
        } else if (heures == 14) {
            return 3;
        } else if (heures == 15 && minutes < 45) {
            return 3;
        } else if (heures == 15 && minutes >= 45) {
            return 4;
        } else if (heures > 15) {
            return 4;
        }
        return 0;

    }
    enRetard(heures, minutes) {
        if (heures == 8 && minutes > 5) {
            return true;
        } else if (heures == 9) {
            return true;
        } else if (heures == 10 && minutes > 20) {
            return true;
        } else if (heures == 11 || heures == 12) {
            return true;
        } else if (heures == 13 && minutes > 50) {
            return true;
        } else if (heures == 14) {
            return true;
        } else if (heures == 15 && minutes < 45) {
            return true;
        } else if (heures == 16 && minutes > 5) {
            return true;
        } else if (heures > 17) {
            return true;
        } else {
            return false;
        }
    }

    estFini(heures, minutes) {
        if (heures == 9 && minutes == 59) {
            return 1;
        } else if (heures == 12 && minutes == 14) {
            return 2;
        } else if (heures == 15 && minutes == 44) {
            return 3;
        } else if (heures == 17 && heures == 59) {
            return 4;
        }
        return 0;
    }
}
