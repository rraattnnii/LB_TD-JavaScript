////////////////////////////////////////////////////////////
// PROGRAMME
////////////////////////////////////////////////////////////

// On appelle la fonction diminuerCompteur toutes les secondes
var intervalId = setInterval(diminuerCompteur, 1000);

////////////////////////////////////////////////////////////
// Fonctions
////////////////////////////////////////////////////////////
function diminuerCompteur() {
    compteurElt = document.getElementById("compteur");
    var compteur = Number(compteurElt.textContent); // récupère 5, de string à Number
    if (compteur > 1) { // on modifie le compteur affiché
        compteurElt.textContent = compteur - 1; 
    } else { // on change tout l'affichage
        clearInterval(intervalId); // Annule l'exécution répétée
        
        // on récupère le noeud du titre pour modifier tout le texte
        var titre = document.getElementById("titre");
        titre.textContent = "BOUMM !!!"; // on change le texte
        
        setTimeout(function () {  // on change encore le texte, mais après 2 secondes
            titre.textContent = "Tout est cassé :(";
        }, 2000);
    }
}

