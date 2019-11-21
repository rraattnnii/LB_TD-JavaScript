function grammaire(verbe){
	agent=verbe.substr(0, verbe.length-2)+'eur';
	verbe1personne=verbe.substr(0, verbe.length-1);
	console.log(verbe+' : Le '+agent+' '+verbe1personne);
	document.write(verbe+' : Le '+agent+' '+verbe1personne+'<br>');
}
grammaire('chanter')
grammaire('manger')