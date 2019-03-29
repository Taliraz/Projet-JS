class javascript {

    constructor() {
        this.error = 1 - 1;
    }

    //paramètres : aucun
    //Gère l'épreuve jusqu'a la fin de celle ci
    start() {
        mapSprite.style.display = "none";
        let input = document.createElement("input");
        input.id = "result";
        input.style.width = "300px";
        input.placeholder = "récupérer la div d'id \"set\""
        exo.append(input);
        let p1 = document.createElement("p");
        p1.innerHTML = "p=document.createElement(\"p\");";
        exo.appendChild(p1);
        let p2 = document.createElement("p");
        p2.innerHTML = "p.innerHTML=\"voici un paragraphe\""
        exo.appendChild(p2);
        let p3 = document.createElement("p");
        p3.innerHTML = "p.style.color=\"blue\"";
        exo.appendChild(p3);
        let p4 = document.createElement("p");
        p4.innerHTML = "div.appendChild(p)"
        exo.appendChild(p4);
    }

    //paramètres : aucun
    //Vérifie si la réponse est correcte
    verify() {
        var res = document.getElementById("result").value
        res = res.replace(/\s+/g, '');
        if (res === "vardiv=document.getElementById(\"set\")") {
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
