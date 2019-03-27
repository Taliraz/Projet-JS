class javascript {

    constructor() {}

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
        let bout = document.createElement("button");
        bout.id="bout"
        bout.innerHTML = "Vérifier"
        exo.appendChild(bout);
        document.getElementById("bout").addEventListener("click", this.verify);
    }

    verify() {
        var res = document.getElementById("result").value
        res = res.replace(/\s+/g, '');
        if (res === "vardiv=document.getElementById(\"set\")") {
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
