class Score {

    constructor() {
        this.mat1 = 0;
        this.mat2 = 0;
        this.mat3 = 0;
        this.mat4 = 0;
        this.assi = 0;
    }
    
    //paramètres : aucun
    //Retourne le score total
    getScore() {
        return this.mat1 + this.mat2 + this.mat3 + this.mat4 + this.assi;
    }

    //paramètres : aucun
    //Affiche le score actuel
    afficherScore() {
        document.getElementById("score").innerHTML = "Score:" + this.getScore();
    }

    //paramètres : aucun
    //réinitialise le score
    resetScore() {
        this.mat1 = 0;
        this.mat2 = 0;
        this.mat3 = 0;
        this.mat4 = 0;
        this.assi = 0;
    }
}
