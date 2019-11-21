function afficherConsole(tab){
	console.log('Contenu du tableau');
	for(i=0; i<tab.length; i++){
		console.log('nom : '+tab[i].prenom
			+' - note : '+tab[i].note
			+' - photo : '+tab[i].photo
		);
	}
}
function afficherHTML(tab){
	var innerHTML='<table><tr><th>Prénom</th><th>Note</th></tr>';
	for(i=0; i<tab.length; i++){
		innerHTML+=afficherEleve(tab[i]);
	}
	innerHTML+='</table>';

	var balise=document.getElementById('resultat');
	balise.innerHTML=innerHTML;
}

function afficherEleve(eleve){
	codeHTML='<tr>';
	codeHTML+='<th>'+eleve.prenom+'</th>';
	codeHTML+='<th>'+eleve.note+'</th>';
	codeHTML+='<th><img src="images/'+eleve.photo+'" height=100px></th>';
	codeHTML+='</tr>';
	return codeHTML;
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

function creerEleve(prenom, note, photo){
	return {prenom: prenom,note:note, photo:photo};
}
 
function boutonTrierParNotes(){
	afficherHTML(tab.sort(sortByNote)); 
	afficherConsole(tab);	
}

function boutonTrierParNom(){
	afficherHTML(tab.sort(sortByPrenom)); 
	afficherConsole(tab);
}

function boutonInfos(){
	var innerHTML='<p>plus de 10 : '+plusDe10(tab)+'</p>';
	innerHTML+='<p>moyenne : '+moyenneTab(tab)+'</p>';
	innerHTML+='<p>max : '+maxTab(tab)+'</p>';
	innerHTML+='<p>nombre d\'élèves : '+tab.length;
	innerHTML+= estPresent(tab);

	var balise=document.getElementById('resultat');
	balise.innerHTML=innerHTML + balise.innerHTML;
}

function boutonRaz(){
	tab=[]; // On repart avec un tableau vide dans un RAZ
	tab.push(creerEleve('TaTa',11,'image1.jpg'));
	tab.push(creerEleve('tete',12,'image2.jpg'));
	tab.push(creerEleve('titi',9,'image3.jpg'));
	tab.push(creerEleve('toto',12,'image4.jpg'));
	tab.push(creerEleve('tutu',17,'image5.jpg'));
	tab.push(creerEleve('tate',18,'image6.jpg'));
	tab.push(creerEleve('tati',8,'image7.jpg'));
	tab.push(creerEleve('tato',13,'image8.jpg'));
	afficherHTML(tab);
	afficherConsole(tab);
}

// PROGRAMME
tab=[]; // variable globale qui sert partout
boutonRaz();
