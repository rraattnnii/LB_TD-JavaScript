
function cercle(){
	console.log("cercle");
	rayon = prompt("Entrez le rayon :");
	var périmètre = 2*3.14*rayon;
	alert("périmètre");
	console.log(périmètre);
	document.getElementById('Résultat').innerHTML="le périmètre est : " + périmètre   // pour ecrire du texte avec la resultat
	
}

function rectangle(){
	console.log("rectangle");
	var largeur = prompt("Entrez le largeur :");
	var longeur = prompt("Entrez le longeur :");
	var périmètre = largeur*longeur;
	//alert("périmètre");
	//console.log(périmètre);
	document.getElementById('Résultat').innerHTML= "le périmètre est : " + périmètre
}

var eleve = {nom:"mohamed", age:26, note: 19};


