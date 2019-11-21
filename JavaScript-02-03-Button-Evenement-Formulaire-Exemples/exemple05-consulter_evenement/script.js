// on récupère le noeud du bouton
var noeudBouton = document.getElementById("bouton");

// Le noeud Bouton écoute (listener) l’événement “click” 
// et lance la function clic
// event est un événement
noeudBouton.addEventListener("click", function (event) {
    console.log("Entrée dans la fonction du addEventListener !");
    console.log("Evénement : ");
    console.log(event);
    console.log("Evénement : "+event.type); 
    console.log("target : ");
    console.log(event.target);
    console.log("Balise : "+event.target.nodeName);
    console.log("Contenu : "+event.target.textContent);
});