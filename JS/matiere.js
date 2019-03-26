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
        if (this.nom == "reseau")
            mat = new reseau(this.horaire);
        if (this.nom == "Scheme")
            mat = new scheme(this.horaire);
        mat.start();
        this.fini = true;
    }
}
