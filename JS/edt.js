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
            nomMatiere.innerHTML = this.matieres[i].nom;
            var nomSalle = document.createElement("p");
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
        } else if (heures == 10 || heures = 11) {
            return 2
        } else if (heures == 12 && minutes < 15) {
            return 2
        } else if (heures == 13 && minutes >= 30) {
            return 3
        } else if (heures == 14) {
            return 3
        } else if (heures == 15 && minutes < 45) {
            return 3
        } else if (heures == 15 && minutes >= 45) {
            return 4
        } else if (heures > 15) {
            return 4
        }
        return 0

    }
}
