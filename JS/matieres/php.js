class php {

    constructor() {
        this.error = 1 - 1;
    }

    //paramètres : aucun
    //Gère l'épreuve jusqu'a la fin de celle ci
    start() {
        mapSprite.style.display = "none";
        let p1 = document.createElement("p");
        p1.innerHTML = "$rep = Model::$pdo - > query(\"SELECT * FROM voiture\");"
        exo.appendChild(p1);
        let p2 = document.createElement("p");
        p2.innerHTML = "$tab_obj = $rep - > fetchAll(PDO::FETCH_ASSOC);"
        exo.appendChild(p2);
        let input = document.createElement("input");
        input.id = "result";
        input.style.width = "300px";
        exo.append(input);
        let p3 = document.createElement("p");
        p3.innerHTML = "echo \"<ul>Voiture {$valeur['immatriculation']} de marque {$valeur['marque']} (couleur {$valeur['couleur']})</ul>\";";
        exo.appendChild(p3);
        let p4 = document.createElement("p");
        p4.innerHTML = "}"
        exo.appendChild(p4);
    }

    //paramètres : aucun
    //Vérifie si la réponse est correcte
    verify() {
        var res = document.getElementById("result").value
        res = res.replace(/\s+/g, '');
        if (res === "foreach($tab_objas$valeur){") {
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
