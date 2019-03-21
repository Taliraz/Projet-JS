class bd {

    construct() {}

    start() {
        mapSprite.style.display="none";
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
        input.placeholder="Votre réponse"
        exo.append(input);
        let p5 = document.createElement("button");
        p5.innerHTML = "Vérifier"
        exo.appendChild(p5);
        document.getElementsByTagName("button")[0].addEventListener("click", this.verify);
    }

    verify() {
        var res = document.getElementById("result").value
        res = res.replace(/\s+/g, '');
        res = res.toLowerCase();
        if (res === "select*fromclientsjoinfidelitesonfidelites.idclient=clients.idclient" || res==="select*fromfidelitesjoinclientsonfidelites.idclient=client.idclient" || res==="select*fromfidelitesjoinclientsonclients.idclient=fidelites.idclient" || res==="select*fromclientsjoinfidelitesonclients.idclient=fidelites.idclient") {
            while (exo.firstChild) {
                exo.removeChild(exo.firstChild);
                mapSprite.style.display="block";
            }
        }
        else{
            let err=document.createElement("p");
            err.innerHTML="Réponse erronée";
            err.style.color="red";
            exo.insertBefore(err,document.getElementById("result"));
        }
        
    }
}
