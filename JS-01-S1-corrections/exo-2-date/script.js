// version compacte :
// /*
document.getElementById("boutonJourDeLaSemaine").onclick = function(){
	document.getElementById("resultats").innerHTML=
		"<fieldset> <p>On est " +jourEnFrancais(new Date().getDay()) +"</p></fieldset>";
}
// */

// version détaillée :
 /*
baliseBoutonJourDeLaSemaine=document.getElementById("boutonJourDeLaSemaine")
baliseBoutonJourDeLaSemaine.onclick = function(){
	console.log("boutonJourDeLaSemaine cliqué !")
	var dateDuJour=new Date();
	var numeroDeJour=dateDuJour.getDay();
	var jour=jourEnFrancais(numeroDeJour);
	var baliseResultats=document.getElementById("resultats");
	baliseResultats.innerHTML="<fieldset> <p>On est "+jour+"</p></fieldset>";
}
*/

function jourEnFrancais(numeroDeJour){
	if(numeroDeJour==0) return "Dimanche";
	if(numeroDeJour==1) return "Lundi";
	if(numeroDeJour==2) return "Mardi";
	if(numeroDeJour==3) return "Mercredi";
	if(numeroDeJour==4) return "Jeudi";
	if(numeroDeJour==5) return "Vendredi";
	if(numeroDeJour==6) return "Samedi";
	return "NotADay";

	/* ou alors
		switch(day){
		case 0 : return "Dimanche";
		case 1 : return "Lundi";
		case 2 : return "Mardi";
		case 3 : return "Mercredi";
		case 4 : return "Jeudi";
		case 5 : return "Vendredi";
		case 6 : return "Samedi";
		else : return "NotADay";
	}
	*/	
}