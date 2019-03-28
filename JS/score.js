class Score {

    constructor() {
        this.mat1 = 0;
        this.mat2 = 0;
        this.mat3 = 0;
        this.mat4 = 0;
        this.assi = 20;
    }

    getScore() {
        return this.mat1 + this.mat2 + this.mat3 + this.mat4 + this.assi;
    }

    afficherScore() {
        document.getElementById("score").innerHTML = "Score:" + this.getScore();
    }

    resetScore() {
        this.mat1 = 0;
        this.mat2 = 0;
        this.mat3 = 0;
        this.mat4 = 0;
        this.assi = 20;
    }
}
