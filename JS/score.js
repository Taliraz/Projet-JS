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
        p.innerHTML=edt.matieres[0].nom+" : "+this.mat1+"/20"+" | "+edt.matieres[1].nom+" : "+this.mat2+"/20"+" | "+edt.matieres[2].nom+" : "+this.mat3+"/20"+" | "+edt.matieres[3].nom+" : "+this.mat4+"/20"+" | Assiduité : "+this.assi+"/20"+"    | <strong>Score : "+this.getScore()+"/100</strong>";
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
