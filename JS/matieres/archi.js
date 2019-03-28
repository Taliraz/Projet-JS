class archi {

    constructor() {
        this.erreur = 0;
    }

    start() {
        console.log("test1 " + this.horaire);
        mapSprite.style.display = "none";
        let p1 = document.createElement("p");
        p1.innerHTML = "Ecrivez 345 de la base 10 vers la base 2";
        exo.appendChild(p1);
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
        res = res.toLowerCase();
        if (res === "101011001") {
            while (exo.firstChild) {
                exo.removeChild(exo.firstChild);
                mapSprite.style.display = "block";
            }
            outClass();
        } else {
            this.erreur++;
            let err = document.createElement("p");
            err.innerHTML = "Réponse erronée";
            err.style.color = "red";
            exo.insertBefore(err, document.getElementById("result"));
        }

    }
}
