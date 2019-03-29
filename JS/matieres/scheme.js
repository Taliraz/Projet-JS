class scheme {

    constructor() {
        this.error = 1 - 1;
    }

    //paramètres : aucun
    //Gère l'épreuve jusqu'a la fin de celle ci
    start() {
        mapSprite.style.display = "none";
        let p1 = document.createElement("p");
        p1.innerHTML = "Ecrivez l'expression préfixée correspondant à ((6+2)/3)*(9*5)+4 (avec des parenthèses)"
        exo.appendChild(p1);
        let input = document.createElement("input");
        input.id = "result";
        input.style.width = "300px";
        exo.appendChild(input);
    }

    //paramètres : aucun
    //Vérifie si la réponse est correcte
    verify() {
        var res = document.getElementById("result").value
        res = res.replace(/\s+/g, '');
        if (res === "(*(/(+62)3)(/(*95)4))") {
            while (exo.firstChild) {
                exo.removeChild(exo.firstChild);
                document.getElementById("screen").style.display = "none";
                mapSprite.style.display = "block";
            }
            return true;
        } else {
            let err = document.createElement("p");
            err.innerHTML = "Réponse erronée";
            err.style.color = "red";
            if (this.error == 0)
                exo.insertBefore(err, document.getElementById("result"));
            return false;
        }
    }
}
