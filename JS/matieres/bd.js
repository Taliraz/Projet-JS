class bd {

    constructor() {}

    start() {
        mapSprite.style.display = "none";
        let p1 = document.createElement("p");
        p1.innerHTML = "Clients(idClient,nomClient,prenomClient)";
        exo.appendChild(p1);
        let p2 = document.createElement("p");
        p2.innerHTML = "Fidelites(idFidelite,idClient,reduction)"
        exo.appendChild(p2);
        let p3 = document.createElement("p");
        p3.innerHTML = "Selectionnez tous les clients qui sont fidèles (avec une jointure)";
        exo.appendChild(p3);
        let input = document.createElement("input");
        input.id = "result";
        input.style.width = "300px";
        input.placeholder = "Votre réponse"
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
        if (res === "select*fromclientsjoinfidelitesonfidelites.idclient=clients.idclient" || res === "select*fromfidelitesjoinclientsonfidelites.idclient=client.idclient" || res === "select*fromfidelitesjoinclientsonclients.idclient=fidelites.idclient" || res === "select*fromclientsjoinfidelitesonclients.idclient=fidelites.idclient") {
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
