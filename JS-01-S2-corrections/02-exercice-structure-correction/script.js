function afficherConsole(tab){
	console.log('Contenu du tableau');
	for(i=0; i<tab.length; i++){
		console.log('nom : '+tab[i].prenom+' - note : '+tab[i].note);
	}
}
function afficherHTML(tab){
	document.write('<table><tr><th>Prénom</th><th>Note</th></tr>')
	for(i=0; i<tab.length; i++){
		document.write('<tr><th>'+tab[i].prenom+'</th>');
		document.write('<th>'+tab[i].note+'</th></tr>');
	}
	document.write('</table>')
}

function plusDe10(tab){
	var nb=0;
	for(i=0; i<tab.length; i++){
		if(tab[i].note>=10) {
			nb++;
		}
	}
	return nb;
}
function moyenneTab(tab){
	var moy=0;
	for(i=0; i<tab.length; i++){
		moy=moy+tab[i].note;
	}
	moy=(moy/tab.length).toFixed(2);;
	console.log('moyenneTab(tab) : '+moy);
	return moy;
}
function maxTab(tab){
	var max=tab[0].note;
	for(i=1; i<tab.length; i++){
		if(tab[i].note>max) {
			max=tab[i].note;
		}
	}
	return max;
}
function estPresent(tab){
	var message; // le message de retour
	var note=Number(prompt('Entrez une note : '));
	for(i=1; i<tab.length; i++){
		if(tab[i].note==note){
			message = '<p>'+note+' est présent dans le tableau en position '+(i+1)+'</p>';
			return message;
		}
	}
	message = '<p>'+note+' n\'est pas présent dans le tableau</p>';
	return message;
}

function sortByNote(key1, key2){
   return key1.note > key2.note;
}

function sortByPrenom(key1, key2){
   return key1.prenom > key2.prenom;
}
  
tab=[
	{prenom:'tata',note:8},
	{prenom:'tete',note:12},
	{prenom:'titi',note:9},
	{prenom:'toto',note:12},
	{prenom:'tutu',note:17},
	{prenom:'tate',note:18},
	{prenom:'tati',note:15},
	{prenom:'tato',note:13},
]
afficherConsole(tab);
document.write('<p>Tableau de départ : <p>');
afficherHTML(tab);
document.write('<p>plus de 10 : '+plusDe10(tab)+'</p>');
document.write('<p>moyenne : '+moyenneTab(tab)+'</p>');
document.write('<p>max : '+maxTab(tab)+'</p>');
document.write(estPresent(tab));
document.write('<p>Tableau trié par notes : <p>');
afficherHTML(tab.sort(sortByNote)); 
document.write('<p>Tableau trié par nom : <p>');
afficherHTML(tab.sort(sortByPrenom)); 

