class Edt {
    constructor() {
        var NomMatieres = ["Base de donnees", "C", "Java", "JavaScript", "Scheme", "Reseau", "PHP", "Maths"];
        NomMatieres.sort(function () { // mélange l'array de manière aléatoire
            return .5 - Math.random();
        });
        this.matieres = [new Matiere(1, NomMatieres[0]), new Matiere(2, NomMatieres[1]), new Matiere(3, NomMatieres[2]), new Matiere(4, NomMatieres[3])];
    }

    affichage() {
        var affichage = document.getElementById("affichageEDT");
        for (let i = 0; i < 4; i++) {
            var p = document.createElement("p");
            p.innerHTML = this.matieres[i].nom;
            affichage.appendChild(p);
        }
    }

}
