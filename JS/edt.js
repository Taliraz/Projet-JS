class Edt {
    
    constructor() {
        var NomMatieres = ["Base de donnees", "C", "Java", "JavaScript", "Scheme", "Reseau", "PHP", "Maths"];
        var salles = ["K101", "K102", "K103", "K104", "K105", "K106", "K107", "K108"];
        
        NomMatieres.sort(function () { // mélange l'array de manière aléatoire
            return .5 - Math.random();
        });
        salles.sort(function () { // mélange l'array de manière aléatoire
            return .5 - Math.random();
        });
        this.matieres = [new Matiere(1, NomMatieres[0], salles[0]), new Matiere(2, NomMatieres[1], salles[1]), new Matiere(3, NomMatieres[2], salles[2]), new Matiere(4, NomMatieres[3], salles[3])];
    }

    affichage() {
        var affichage = document.getElementById("affichageEDT");
        for (let i = 0; i < 4; i++) {
            var p = affichage.children[i];
            p.innerHTML = p.textContent + " : " + this.matieres[i].nom + " " + this.matieres[i].salle;
        }
    }

}
