class reseau {

    constructor() {}

    //paramètres : aucun
    //Gère l'épreuve jusqu'a la fin de celle ci
    start() {
        mapSprite.style.display = "none";
        let img = document.createElement("img");
        img.src = "IMG/routage.gif";
        exo.appendChild(img);
        let p1 = document.createElement("p");
        p1.innerHTML = "Remplacez ?.?.?.? par le bon masque";
        exo.appendChild(p1);
        let input = document.createElement("input");
        input.id = "result";
        input.style.width = "300px";
        input.placeholder = "Votre réponse..."
        exo.append(input);
    }
    
    //paramètres : aucun
    //Vérifie si la réponse est correcte
    verify() {
        var res = document.getElementById("result").value
        if (res === "255.255.255.0") {
            while (exo.firstChild) {
                exo.removeChild(exo.firstChild);
                mapSprite.style.display = "block";
            }
            return true;
        } else {
            let err = document.createElement("p");
            err.innerHTML = "Réponse erronée";
            err.style.color = "red";
            exo.insertBefore(err, document.getElementById("result"));
            return false;
        }
    }
}
