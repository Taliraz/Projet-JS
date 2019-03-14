class scheme {

    construct() {}

    start() {
        mapSprite.style.display="none";
        let p1 = document.createElement("p");
        p1.innerHTML = "Ecrivez l'expression préfixée correspondant à ((6+2)/3)*(9*5)+4 (avec des parenthèses)"
        exo.appendChild(p1);
        let input = document.createElement("input");
        input.id = "result";
        input.style.width = "300px";
        exo.appendChild(input);
        let p5 = document.createElement("button");
        p5.innerHTML = "Vérifier"
        exo.appendChild(p5);
        document.getElementsByTagName("button")[0].addEventListener("click", this.verify);
    }

    verify() {
        var res = document.getElementById("result").value
        res = res.replace(/\s+/g, '');
        if (res === "(*(/(+62)3)(/(*95)4))") {
            while (exo.firstChild) {
                exo.removeChild(exo.firstChild);
            }
        }
        mapSprite.style.display="block";
    }
}

