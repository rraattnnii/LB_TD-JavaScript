function jourDeLaSemaine(){
	alert("LE JOUR DE LA SEMAINE")
	console.log("jourDeLaSemaine")
	var d = new Date()
	console.log(d)
	var jour=jourSemaine(d.getDay())
	var message =" On est " + jour;
	console.log(message)
	document.getElementById("Résultat2").innerHTML+="<p>"+message+"</p> " + jour  // pour ecrire du texte avec la resultat
}

function jourSemaine(jourEntier){
	if (jourEntier==0) return "Dimanche";
	if (jourEntier==1) return "Lundi";
	if (jourEntier==2) return "Mardi";
	if (jourEntier==3) return "Mercredi";
	if (jourEntier==4) return "Jeudi";
	if (jourEntier==5) return "Vendredi";
	if (jourEntier==6) return "Samdi";
}

