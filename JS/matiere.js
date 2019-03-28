class Matiere {
    constructor(horaire, nom, salle) {
        this.horaire = horaire;
        this.nom = nom;
        this.salle = salle;
        this.fini = false;
    }
    
    //paramètres : aucun
    //Rècupère la matière et lance l'exercice
    lancer() {
        var mat;
        this.incrementScore();
        if (this.nom == "Architecture")
            mat = new archi(this.horaire);
        else if (this.nom == "Bases de donnees")
            mat = new bd(this.horaire);
        if (this.nom == "Java")
            mat = new java(this.horaire);
        if (this.nom == "JavaScript")
            mat = new javascript(this.horaire);
        if (this.nom == "Maths")
            mat = new math(this.horaire);
        if (this.nom == "PHP")
            mat = new php(this.horaire);
        if (this.nom == "Reseau")
            mat = new reseau(this.horaire);
        if (this.nom == "Scheme")
            mat = new scheme(this.horaire);
        mat.start();
        this.fini = true;

    }

    //paramètres : aucun
    //Initialise le score de la matière à 20
    incrementScore() {
        switch (this.horaire) {
            case 1:
                score.mat1 = 20;
                break;
            case 2:
                score.mat2 = 20;
                break;
            case 3:
                score.mat3 = 20;
                break;
            case 4:
                score.mat4 = 20;
                break;
        }
        score.afficherScore();
    }
}
