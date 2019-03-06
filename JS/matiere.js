class Matiere {
    constructor(horaire, nom, salle) {
        this.horaire = horaire;
        this.nom = nom;
        this.salle = salle;
    }
    
    lancer() {
        var mat;
        if (this.nom == "PHP")
            mat = new php();
        mat.start();
    }

}
