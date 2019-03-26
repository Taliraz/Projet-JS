class java {

    construct() {}

    start() {
        mapSprite.style.display = "none";
        let p1 = document.createElement("p");
        p1.innerHTML = "public static void main(String[]args){";
        exo.appendChild(p1);
        let input = document.createElement("input");
        input.id = "result";
        input.style.width = "300px";
        input.placeholder = "Boucle de 0 à 9"
        exo.append(input);
        let p2 = document.createElement("p");
        p2.innerHTML = "System.out.println(i+\"/\"+n)"
        exo.appendChild(p2);
        let p3 = document.createElement("p");
        p3.innerHTML = "}";
        exo.appendChild(p3);
        let p4 = document.createElement("p");
        p4.innerHTML = "}"
        exo.appendChild(p4);
        let p5 = document.createElement("button");
        p5.innerHTML = "Vérifier"
        exo.appendChild(p5);
        document.getElementsByTagName("button")[0].addEventListener("click", this.verify);
    }

    verify() {
        var res = document.getElementById("result").value
        res = res.replace(/\s+/g, '');
        if (res === "for(inti=0;i<10;i++){" || res === "for(inti=0;i<=9;i++){") {
            while (exo.firstChild) {
                exo.removeChild(exo.firstChild);
                mapSprite.style.display = "block";
                outClass();
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
