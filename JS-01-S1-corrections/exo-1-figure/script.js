// ici on crée l'événement onclick dans le JavaScript
/*
baliseBoutonCercle=document.getElementById("boutonCercle")
baliseBoutonCercle.onclick = function(){
	var rayon = prompt('Entrez le rayon : ');
	var perimetre= rayon*Math.PI*2
	var message="le perimetre du cercle de rayon "+rayon+" = "+perimetre.toFixed(2);
	console.log(message);
	alert(message)
	document.getElementById('resultat').innerHTML = message;
}
// */

// /* version détaillée : 
baliseBoutonCercle=document.getElementById("boutonCercle")
baliseBoutonCercle.onclick = function(){
	console.log("entrée dans boutonCercle");
	var rayon=prompt("Entrez le rayon du cercle");
	console.log(rayon, typeof rayon);
	rayon = parseFloat(rayon); 
	console.log(rayon, typeof rayon);
	perimetre = 2*Math.PI*rayon;
	console.log(perimetre, typeof perimetre);
	perimetre = perimetre.toFixed(2); // le perimetre est désormais une string : attention !!
	console.log(perimetre, typeof perimetre);
	var message="le perimetre du cercle de rayon "+rayon+" = "+perimetre;
	console.log(message, typeof message);
	alert(message)
	document.getElementById('resultat').innerHTML = message;	
}
// */

// ici, l'événement onclick est dans le HTML avec l'appel à la fonction perimetreRectangle
function perimetreRectangle(){
	var largeur = prompt('Entrez la largeur : ');
	var largeur=parseInt(largeur);
	var longueur = parseInt(prompt('Entrez la longueur : '));
	var perimetre= (largeur+longueur)*2
	message="le perimetre du rectangle de lageur "+largeur+" et de longeur "+longueur+" = "+perimetre;
	console.log(message);
	alert(message)
	document.getElementById('resultat').innerHTML = message;
}	
