// la fonction lancée quand on clique
function buttonClic() {
	console.log("Entrée dans fonction buttonClic()!");
	alert("La fonction est lancée : le listener est bien attaché");
}

// on récupère le noeud bouton2
var bouton2 = document.getElementById("bouton2");
// on accroche un listener au noeud bouton2 
// listener de "click" qui lance la fonction buttonClic()
bouton2.addEventListener("click", buttonClic);

// on récupère le noeud bouton3
var bouton3 = document.getElementById("bouton3");
// on accroche un listener au noeud bouton3 et on écrit la fonction
bouton3.addEventListener("click", function () {
	console.log("Entrée dans la fonction anonyme");
	alert("La fonction anonyme est lancée : le listener est bien attaché");

});

// mode compact
document.getElementById("bouton4").addEventListener("click", function () {
	console.log("Entrée dans la fonction anonyme");
	alert("La fonction anonyme v2 est lancée : le listener est bien attaché");

});