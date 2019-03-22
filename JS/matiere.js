class Matiere {
    constructor(horaire, nom, salle) {
        this.horaire = horaire;
        this.nom = nom;
        this.salle = salle;
    }
    
    lancer() {
        var mat;
        if (this.nom == "Architecture")
            mat = new archi();
        else if (this.nom == "Bases de donnees")
            mat = new php();
        if (this.nom == "PHP")
            mat = new php();
        if (this.nom == "PHP")
            mat = new php();
        if (this.nom == "PHP")
            mat = new php();
        if (this.nom == "PHP")
            mat = new php();
        if (this.nom == "PHP")
            mat = new php();
        if (this.nom == "PHP")
            mat = new php();
        mat.start();
    }

}
