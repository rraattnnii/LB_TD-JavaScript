////////////////////////////////////////////////////////////
// PROGRAMME pour le compteur
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

////////////////////////////////////////////////////////////
// PROGRAMME pour le déplacement du BLOC
////////////////////////////////////////////////////////////

var bloc = document.getElementById("bloc"); // noeud du bloc
idAnim=requestAnimationFrame(deplacerBloc);
////////////////////////////////////////////////////////////
// Fonctions pour le déplacement du BLOC : version minimale
////////////////////////////////////////////////////////////

function deplacerBloc() { 
    // on met à jour le left avec l'offsetLeft
    // avec + ou - quelque chose, ça va plus ou moins vite
    // à -9 ça ne bouge plus. à -8, ça va lentement
    // à -3 c'est cohérent avec le compteur
    bloc.style.left =(bloc.offsetLeft-3)+'px'; 
    requestAnimationFrame(deplacerBloc);
}  

