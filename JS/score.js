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
        var div=document.getElementById("score");
        while(div.firstChild){
            div.removeChild(div.firstChild);
        }
        var p=document.createElement("p");
        p.innerHTML="Matière 1 : "+this.mat1+"/20"+" | Matière 2 : "+this.mat2+"/20"+" | Matière 3 : "+this.mat3+"/20"+" | Matière 4 : "+this.mat4+"/20"+" | Assiduité : "+this.assi+"/20"+"    | <strong>Score : "+this.getScore()+"/100</strong>";
        div.appendChild(p);
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
