v1 = 5;
v2 = 10;
resultat = v1+v2;
alert(v1 + ' + ' + v2 + ' = ' + resultat);
texte1 = 'Le double du résultat est : ' + resultat*2;
alert(texte1);

// on n'est pas obligé de mettre var
var v3, v4, resultat2, texte2;
v3 = prompt('Entrez le premier chiffre :');
v4 = prompt('Entrez le second chiffre :');
resultat2 = parseInt(v3) + parseInt(v4);
alert(v3 + ' + ' + v4 + ' = ' + resultat2);
texte2 = 'Le double du résultat est : ' + resultat2*2;
alert(texte2);