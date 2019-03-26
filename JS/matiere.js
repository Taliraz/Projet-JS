class Matiere {
    constructor(horaire, nom, salle) {
        this.horaire = horaire;
        this.nom = nom;
        this.salle = salle;
        this.fini = false;
    }
    
    lancer() {
        var mat;
        if (this.nom == "Architecture")
            mat = new archi();
        else if (this.nom == "Bases de donnees")
            mat = new bd();
        if (this.nom == "Java")
            mat = new java();
        if (this.nom == "JavaScript")
            mat = new javascript();
        if (this.nom == "Maths")
            mat = new math();
        if (this.nom == "PHP")
            mat = new php();
        if (this.nom == "reseau")
            mat = new reseau();
        if (this.nom == "Scheme")
            mat = new scheme();
        mat.start();
        this.fini = true;
    }
}
