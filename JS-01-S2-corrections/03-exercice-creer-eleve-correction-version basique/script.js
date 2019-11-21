// création du tableau
/*
tab=[
	{nom:"toto", note:15, photo:"toto.jpg"},
	{nom:"tata", note:9, photo:"tata.jpg"},
	{nom:"tutu", note:12, photo:"tutu.jpg"}
]
*/
tab=[
	creerEleve("toto", 15, "toto.jpg"),
	creerEleve("tata", 9, "tata.jpg"),
	creerEleve("tutu", 12, "tutu.jpg"),
]

function creerEleve(nom, note, photo){
	return {
		nom:nom,
		note:note,
		photo:photo
	}
}

// afficher le tableau
function afficherTableau(){
	balisesTable=document.getElementsByTagName('table'); // on récupère tous les <table>
	baliseTable=balisesTable[0];
	innerHTML="<tr><th>nom</th><th>note</th><th>photo</th></tr>"
	for(ligne in tab){
		innerHTML+="<tr>"
		/* for (attribut in tab[ligne]){
			innerHTML+="<td>"+tab[ligne][attribut]+"</td>";
		}*/
		innerHTML+="<td>"+tab[ligne]['nom']+"</td>"
		innerHTML+="<td>"+tab[ligne]['note']+"</td>"
		innerHTML+="<td><img src='img/"+tab[ligne]['photo']+"' height=30px></td>"
		innerHTML+="</tr>"
	}
	baliseTable.innerHTML=innerHTML;
}
afficherTableau();

function ajoutDUnEleve(tab){
	var nom = prompt("nom");
	var note = prompt("note");
	tab.push({nom:nom, note:note, photo:nom+".jpg"})
}

document.getElementById("ajouter").onclick=function(){
	ajoutDUnEleve(tab);
	afficherTableau();
}
