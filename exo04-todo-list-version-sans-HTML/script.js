// Initialisation de la page
let madiv = document.getElementById("todolist"); // on récupère la div de travail

let monh1 = document.createElement("h1"); // un h1 dans la div
monh1.textContent = "Ma To Do List";
madiv.appendChild(monh1);

let monul = document.createElement("ul"); // un ul sous le h1
monul.id="todos"
madiv.appendChild(monul);

let divbouton = document.createElement("div"); // deux boutons dans une div sous l'ul
madiv.appendChild(divbouton); // la div à boutons

let boutonAjouter = document.createElement("button"); // bouton 1
boutonAjouter.id="boutonAjouter";
boutonAjouter.textContent = "Ajouter";
boutonAjouter.style.marginRight="10px";
madiv.appendChild(boutonAjouter);

let boutonVider = document.createElement("button"); // bouton 2
boutonVider.id="boutonVider";
boutonVider.textContent = "Vider";
boutonVider.style.marginRight="10px";
madiv.appendChild(boutonVider);

divbouton.appendChild(boutonAjouter); // on met les boutons dans la div à boutons
divbouton.appendChild(boutonVider);

// Gestion du onclick sur le bouton ajouter
boutonAjouter.addEventListener("click", function () { // listener sur le button
    let todo = prompt("Entrez un todo :");
    if (todo==null || todo.trim()=='') return;      // si on annule ou si on ne saisit rien, on sort
    
    let noeudUl=document.getElementById("todos");   // on récupère l'ul
    let noeudLi = document.createElement("li");     // on crée un li à mettre dans l'ul
    noeudUl.appendChild(noeudLi);

    let noeudSpan = document.createElement("span"); // on crée un span à mettre dans le li
    noeudSpan.textContent = todo.trim();
    noeudLi.appendChild(noeudSpan);
    
    let noeudBouton = document.createElement("button"); // on crée le bouton à mettre aussi dans le li
    noeudBouton.textContent="supprimer";
    noeudBouton.style.marginLeft="10px";
    noeudLi.appendChild(noeudBouton);

    // gestion du double click sur le texte du li
    noeudSpan.addEventListener("dblclick", function () {
        let todo=prompt("Entrez un todo de remplacement:");
        if (todo==null || todo.trim()=='') return; // si on annule ou si on ne saisit rien, on sort
        this.textContent = todo.trim();
    });
    
    // gestion du onclick sur le bouton supprimer
    noeudBouton.addEventListener("click", function () {
        noeudUl.removeChild(noeudLi) ;
    });
});

// Gestion du onclick sur le bouton vider
boutonVider.addEventListener("click", function () {
    document.getElementById("todos").innerHTML="";
});