class Matiere {
    constructor(horaire, nom, salle) {
        this.horaire = horaire;
        this.nom = nom;
        this.salle = salle;
        this.fini = false;
        this.mat;
    }

    //paramètres : aucun
    //Rècupère la matière et lance l'exercice
    lancer() {
        if (this.nom == "Architecture")
            this.mat = new archi(this.horaire);
        else if (this.nom == "Bases de donnees")
            this.mat = new bd(this.horaire);
        if (this.nom == "Java")
            this.mat = new java(this.horaire);
        if (this.nom == "JavaScript")
            this.mat = new javascript(this.horaire);
        if (this.nom == "Maths")
            this.mat = new math(this.horaire);
        if (this.nom == "PHP")
            this.mat = new php(this.horaire);
        if (this.nom == "Reseau")
            this.mat = new reseau(this.horaire);
        if (this.nom == "Scheme")
            this.mat = new scheme(this.horaire);

        this.mat.start();
        let bout = document.createElement("button");
        bout.id = "bout"
        bout.innerHTML = "Vérifier"
        exo.appendChild(bout);
        document.getElementById("bout").addEventListener("click", this.verifier);
        this.fini = true;
    }

    verifier() {
        if (edt.matieres[edt.getHoraire(h, min) - 1].mat.verify()) {
            edt.matieres[edt.getHoraire(h, min) - 1].setScore();
            outClass();
        } else {
            if (edt.matieres[edt.getHoraire(h, min) - 1].mat.error < 5)
                edt.matieres[edt.getHoraire(h, min) - 1].mat.error += 1;
        }
    }

    //paramètres : aucun
    //Initialise le score de la matière à 20
    setScore() {
        switch (this.horaire) {
            case 1:
                score.mat1 = 20 - this.mat.error * 4;
                break;
            case 2:
                score.mat2 = 20 - this.mat.error * 4;
                break;
            case 3:
                score.mat3 = 20 - this.mat.error * 4;
                break;
            case 4:
                score.mat4 = 20 - this.mat.error * 4;
                break;
        }
        score.afficherScore();
    }
}
