//////////////////////////////////////////////////////////////////////////////////////////
// 1 : Affichage des input : attributs element de la balise form
//////////////////////////////////////////////////////////////////////////////////////////

console.log("Affichage hors événement : ")
var form = document.querySelector("form");

//accès aux input de la balise form par un tableau
console.log("Nombre de champs de saisie - form.elements : " + form.elements.length); // Affiche 10
for (var i = 0; i < form.elements.length; i++) { 
    console.log(i+
        ':type='+form.elements[i].type+
        ' - name='+form.elements[i].name+
        ' - value='+form.elements[i].value
    );
    console.log(form.elements[i]);
}

// accès aux input par le nom de l'attribut
// on y accède par le name ou l'id de l'HTML
console.log("pseudo : "+form.elements.pseudo.type); // Affiche "text"
console.log("password : "+form.elements.mdp.type); // Affiche "password"
console.log("courriel : "+form.elements.courriel.type); // Affiche "email"
console.log("confirmation : "+form.elements.confirmation.type); // Affiche "checkbox"
console.log("abonewspromo : "+form.elements.abonewspromo.type); // Affiche "radio"
console.log("abonewspromo : "+form.elements.aborien.type); // Affiche "radio"
console.log("nationalité : "+form.elements.nationalite.type); // Affiche "select-one"
console.log("nationalité value : "+form.elements.nationalite.value); // Affiche "FR", value selected par défaut
console.log("submit : "+form.elements.envoyer.type); // Affiche "FR", value selected par défaut
console.log("reset : "+form.elements.reset.type); // Affiche "FR", value selected par défaut

//////////////////////////////////////////////////////////////////////////////////////////
// 2 : GESTION D'EVENEMENTS sur la page HTML
//////////////////////////////////////////////////////////////////////////////////////////

// Coche la demande de confirmation quand on entre dans le courriel (pas très réaliste !)
document.getElementById("courriel").addEventListener("focus", function () {
    console.log("focus courriel");
    document.getElementById("confirmation").checked = true;
});

// Décoche la demande de confirmation quand on sort du le courriel sans courriel(pas très réaliste !)
// il faut que ce soit dans le HTML pour avoir le node en paramètre
// donc on ne le met pas pour être conforme à l'exercice : pas d'événement dans le HTML
// sinon : onblur="onBlurCourriel(this)" sur l'input courriel HTML
/* function onBlurCourriel(node) {
    var courriel = node.value.trim(); // trim supprime les espaces début et fin
    console.log("onBlurCourriel : " + courriel);
    if(courriel =='') {
        console.log("onBlurCourriel : checked à false");
        document.getElementById("confirmation").checked = false;
    }
}
*/

//////////////////////////////////////////////////////////////////////////////////////////
// 3 : ACCES à la saisie avec listener sur "change"
//////////////////////////////////////////////////////////////////////////////////////////

// Affichage du type d'abonnement choisi
var aboElts = document.getElementsByName("abonnement"); //name abonnement : les radio bouton
for (var i = 0; i < aboElts.length; i++) {
    aboElts[i].addEventListener("change", function (e) { // un listener par abonnement
        console.log("Formule d'abonnement choisie : " + e.target.value); // value de l'abonnement
        console.log(e.target);
    });
}

// Affichage de la demande de confirmation d'inscription
document.getElementById("confirmation").addEventListener("change", function (e) {
    console.log("Demande de confirmation : " + e.target.checked);
    console.log(e.target);
});

// Affichage du code de nationalité choisi
document.getElementById("nationalite").addEventListener("change", function (e) {
    console.log("Code de nationalité : " + e.target.value);
    console.log(e.target);
});

//////////////////////////////////////////////////////////////////////////////////////////
// 4 : ACCES à la saisie avec listener sur le submit et les éléments du formulaire
//////////////////////////////////////////////////////////////////////////////////////////

// Affichage des informations accessibles au submit
document.querySelector("form").addEventListener("submit", function (e) {
    console.log("Submit : ")
    var pseudo = form.elements.pseudo.value;
    var mdp = form.elements.mdp.value;
    var courriel = form.elements.courriel.value;
    
    console.log("Vous avez choisi le pseudo " + pseudo + ", le mot de passe " +
        mdp + " et le courriel " + courriel);

    if (form.elements.confirmation.checked) {
        console.log("Vous avez demandé une confirmation d'inscription par courriel");
    } else {
        console.log("Vous n'avez pas demandé de confirmation d'inscription par courriel");
    }

    switch (form.elements.abonnement.value) {
        case "abonewspromo":
            console.log("Vous êtes abonné(e) à la newsletter et aux promotions");
            break;
        case "abonews":
            console.log("Vous êtes abonné(e) à la newsletter");
            break;
        case "aborien":
            console.log("Vous n'êtes abonné(e) à rien");
            break;
        default:
            console.log("Erreur : code d'abonnement non reconnu");
    }

    switch (form.elements.nationalite.value) {
        case "FR":
            console.log("Vous êtes français(e)");
            break;
        case "BE":
            console.log("Vous êtes belge");
            break;
        case "SUI":
            console.log("Vous êtes suisse");
            break;
        default:
            console.log("Erreur : code de nationalité non reconnu");
    }
    
    e.preventDefault(); // Annulation de l'envoi des données si nécessaire
});

    


