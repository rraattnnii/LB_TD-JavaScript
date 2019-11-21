// on récupère la balise du jeu et on cherche tous les éléments à partir de ça
// comme ça on a une version portable - ça ne concerne pas les "id" et les getElementById
baliseDuJeu=document.getElementById('jeuDesAllumettes');
// vérification : on emêche de pouvoir cliquer dans deux lignes
lesInputs=baliseDuJeu.getElementsByTagName('input'); // on récupère tous les input
for(var i=0; i<16; i++){
	lesInputs[i].onclick = function(event){ // on ajoute un onclick sur chaque input
		var idEvent=event.target.parentNode.parentNode.id // on get l'id de l'allumett
		// console.log("onclick check allumette : "+idEvent)
		nl=idEvent.substring(2,4) // on récupère le numéro de ligne : nl
		// on va parcourir toutes les allumettes par ligne
		for(L=1; L<=4; L++){  
			if(nl=="L"+L){ // si on est sur la ligne cliquée, on passe à la suivante
				continue
			}
			for(A=1; A<=L*2-1; A++){ // pour chaque allumette pas sur la ligne cliquée
				idTD="td"+"L"+L+"A"+A // on récupère le TD
				baliseTD=document.getElementById(idTD)
				baliseInput=baliseTD.getElementsByTagName("input") // on récupère l'input du TD 
				if(baliseInput[0].checked){ // si l'input est checké : on ne pouvait pas jouer
					// console.log(baliseInput[0])
					console.log(baliseInput[0].parentNode.parentNode.id+" est déjà checked")
					event.target.checked=false // on dé-checke celui qu'on vient de checké
					return; // on peut quitter la fonction
				}
			}
		}
	}
}

document.getElementById('effacer').onclick = function(){
	var cpt=0; // on va compter les allumettes effacées
	for(L=1; L<=4; L++){
		for(A=1; A<=L*2-1; A++){
			idTD="td"+"L"+L+"A"+A
			baliseTD=document.getElementById(idTD)
			baliseInput=baliseTD.getElementsByTagName("input") 
			if(baliseInput[0].checked){
				baliseInput[0].checked=false // pour faciliter la vérification
				baliseTD.style.display="none"
			}
			if(baliseTD.style.display=="none") cpt++ // on compte les effacées
		}
	}
	if(cpt==15){ // si on a 15 effacées, on a gagné
		document.getElementById('gagnant').innerHTML="<h3 style=\"background-color:aqua\">Vous avez gagné<h3>"
	}
	if(cpt==16){ // si on a 16 effacées, on a perdu
		document.getElementById('gagnant').innerHTML="<h3 style=\"background-color:pink\">Vous avez perdu<h3>"
	}
}
document.getElementById('RAZ').onclick = function(){
	raz()
}
window.onload=function(){
	raz()
}
function raz(){
	console.log("raz")
	for(L=1; L<=4; L++){
		for(A=1; A<=L*2-1; A++){
			idTD="td"+"L"+L+"A"+A
			baliseTD=document.getElementById(idTD)
			baliseTD.style.display=""
			baliseInput=baliseTD.getElementsByTagName("input") 
			baliseInput[0].checked=false
		}
	}
	document.getElementById('gagnant').innerHTML="" // on efface le message "gagné" ou "perdu"
}