class math {

    constructor() {}

    start() {
        mapSprite.style.display = "none";
        let p1 = document.createElement("p");
        p1.innerHTML = "Dérivez l'expression suivante nous classerez les puissances par ordre croissant: (notation : ² = ^2)";
        exo.appendChild(p1);
        let p2 = document.createElement("p");
        p2.innerHTML = "6 x^3 + 1/2 x^2 + 8x + 3";
        exo.appendChild(p2);
        let input = document.createElement("input");
        input.id = "result";
        input.style.width = "300px";
        input.placeholder = "Votre réponse..."
        exo.append(input);
        let bout = document.createElement("button");
        bout.id = "bout"
        bout.innerHTML = "Vérifier"
        exo.appendChild(bout);
        document.getElementById("bout").addEventListener("click", this.verify);
    }

    verify() {
        var res = document.getElementById("result").value
        res = res.replace(/\s+/g, '');
        if (res === "18x^2+x+8") {
            while (exo.firstChild) {
                exo.removeChild(exo.firstChild);
                mapSprite.style.display = "block";
            }
            outClass();
        } else {
            let err = document.createElement("p");
            err.innerHTML = "Réponse erronée";
            err.style.color = "red";
            exo.insertBefore(err, document.getElementById("result"));
        }
    }
}
