function fonction_v1(){
	v1 = 5;
	v2 = 10;
	resultat = v1+v2;
	alert(v1 + ' + ' + v2 + ' = ' + resultat);
	texte = 'Le double du résultat est : ' + resultat*2;
	alert(texte);
}
fonction_v1(); // appel à la fonction

function fonction_v2(v1, v2){
	resultat = v1+v2;
	alert(v1 + ' + ' + v2 + ' = ' + resultat);
	texte = 'Le double du résultat est : ' + resultat*2;
	alert(texte);
}

v1 = prompt('Entrez le premier chiffre :');
v2 = prompt('Entrez le second chiffre :');

fonction_v2(parseInt(v2), parseInt(v2)); // appel à la fonction