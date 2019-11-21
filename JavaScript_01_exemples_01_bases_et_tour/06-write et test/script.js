document.write('<h1>Partie JavaScript : document.write écrit à la fin de la page</h1>');

prenom = prompt('Entrez votre prénom :');
age = prompt('Entrez votre age :');

age = parseInt(age);

if(age>25){
	document.write('Désolé '+prenom+'<br>');
	document.write('Vous n\'avez pas droit à la carte Jeune');
}
else{
	document.write('Bonjour '+prenom+'<br>');
	document.write('Vous pouvez bénéficier de la carte Jeune');
}