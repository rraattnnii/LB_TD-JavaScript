function afficherConsole(tab){
	console.log('Contenu du tableau');
	for(i=0; i<tab.length; i++){
		console.log(tab[i]);
	}
}
function afficherHTML(tab){
	document.write('<table><tr>')
	for(i=0; i<tab.length; i++){

		document.write('<td>'+tab[i]+'</td>');
	}
	document.write('</tr></table>')
}
function plusDe10(tab){
	var nb=0;
	for(i=0; i<tab.length; i++){
		if(tab[i]>=10) {
			nb++;
		}
	}
	return nb;
}

function moyenneTab(tab){
	var moy=0;
	for(i=0; i<tab.length; i++){
		moy=moy+tab[i];
	}
	moy=(moy/tab.length).toFixed(2);;
	console.log('moyenneTab(tab) : '+moy);
	return moy;
}

function maxTab(tab){
	var max=tab[0];
	for(i=1; i<tab.length; i++){
		if(tab[i]>max) {
			max=tab[i];
		}
	}
	return max;
}
function estPresent(tab){
	var message; // le message de retour
	valeur=Number(prompt('Entrez une note : '));
	present=tab.indexOf(valeur);
	if(present==-1){
		message = '<p>'+valeur+' n\'est pas présent dans le tableau</p>';
	}
	else{
		message = '<p>'+valeur+' est présent dans le tableau en position '+(present+1)+'</p>';
	}
	return message;
}
  
tab=[8,12,9,12,17,18,15,13];
console.log(tab);
afficherConsole(tab);
document.write('<p>Tableau de départ : <p>');
afficherHTML(tab);
document.write('<p>plus de 10 : '+plusDe10(tab)+'</p>');
document.write('<p>moyenne : '+moyenneTab(tab)+'</p>');
document.write('<p>max : '+maxTab(tab)+'</p>');
document.write(estPresent(tab));
document.write('<p>Tableau trié : <p>');
// afficherHTML(tab.sort()); // ça ne marche pas !!
afficherHTML(tab.sort(function(a, b){return a-b})); // ça marche !!



