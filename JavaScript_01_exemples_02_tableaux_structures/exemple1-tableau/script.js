// 3 fonctions de parcours du tableau

function forI(tab){ // la fonction la plus simple
	document.write('<h3>Affichage "for i" </h3>')
	for(var i=0; i<tab.length; i++){
		document.write(i+': '+tab[i]+'<br>');
	}
}

function forKeyInTab(tab){
	document.write('<h3>Affichage "for key in tab" </h3>')
	for (key in tab) {
		document.write(key+': '+tab[key]+'<br>');
	}
}

function writeElementTableau(valeur, index){ // pour un foreach
	document.write('a[' + index + '] = ' + valeur+'<br>');
}

function tabToString(tab){ // construction d'un texte complet
    var chaine = '[';
    for(var i=0; i<tab.length; i++){
		chaine += i + ' : ' + tab[i]+' , ';
	}
	chaine +=']';
	chaine=chaine.replace(', ]',']');// pour supprimer la virgule finale
    return chaine;
}

//////////////////////////////////////////////////

// initialisation du tableau
var tab=[5,10,9,12,17,18,5,3];
// Affichage direct
console.log("TEST console.log(tab)");
console.log(tab);
for(var i=0; i<tab.length; i++) console.log(tab[i]);


//Les affichages
document.write('<h3>Affichage tab complet </h3>');	
document.write(tab+'<br>');
forI(tab);
forKeyInTab(tab);
document.write('<h3>Affichage "foreach" </h3>')
tab.forEach(writeElementTableau); // afficherElementTableau est une fonction
document.write('<h3>Affichage "tabToString" </h3>')
document.write(tabToString(tab)+'<br>');


// modification du contenu du tableau
document.write('<h3>TEST pop et push</h3>');
val=tab.pop();
document.write('Valeur pop : '+ val+'<br>')
document.write('Valeur push : 99'+'<br>')
tab.push(99);
document.write(tabToString(tab)+'<br>');

document.write('<h1>Tableau avec des trous</h1>');
tab[-1]=-1;
tab[10]=100;
tab[13]=999;

// Affichage direct
console.log("TEST console.log(tab)");
console.log(tab);
for(var i=0; i<tab.length; i++) console.log(tab[i]);

//Les affichages
forI(tab);
forKeyInTab(tab);
document.write('<h3>Affichage "foreach" </h3>')
tab.forEach(writeElementTableau); // afficherElementTableau est une fonction
document.write('<h3>Affichage "tabToString" </h3>')
document.write(tabToString(tab)+'<br>');



