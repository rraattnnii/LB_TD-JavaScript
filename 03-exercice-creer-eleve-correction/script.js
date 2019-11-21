// ---------------------------------------------- //
// outils pour les boutons
// ---------------------------------------------- //

function plusDe10(tab){
	let nb=0;
	for(let i=0; i<tab.length; i++){
		if(tab[i].note>=10) {
			nb++;
		}
	}
	return nb;
}
function moyenneTab(tab){
	let moy=0;
	for(let i=0; i<tab.length; i++){
		moy=moy+tab[i].note;
	}
	moy=(moy/tab.length).toFixed(2);;
	console.log('moyenneTab(tab) : '+moy);
	return moy;
}
function maxTab(tab){
	let max=tab[0].note;
	for(i=1; i<tab.length; i++){
		if(tab[i].note>max) {
			max=tab[i].note;
		}
	}
	return max;
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

// ---------------------------------------------- //
// tous les boutons
// ---------------------------------------------- //

function boutonTrierParNotes(tab){
	afficherHTML(tab.sort(sortByNote)); 
	afficherConsole(tab);	
}

function boutonTrierParNom(tab){
	afficherHTML(tab.sort(sortByPrenom)); 
	afficherConsole(tab);
}

function boutonInfos(tab){
	let balise=document.getElementById('resultat');
	if(balise.innerHTML!=""){
		balise.innerHTML="";
		balise.style=null;
		return;
	}
	balise.style.border="1px solid black";
	balise.style.marginBottom="10px";
	let innerHTML='<p>plus de 10 : '+plusDe10(tab)+'</p>';
	innerHTML+='<p>moyenne : '+moyenneTab(tab)+'</p>';
	innerHTML+='<p>max : '+maxTab(tab)+'</p>';
	innerHTML+='<p>nombre d\'élèves : '+tab.length;

	balise.innerHTML=innerHTML;
}

function boutonEstPresent(tab){
	let message; // le message de retour
	let note=Number(prompt('Entrez une note : '));
	message = '<p>'+note+' n\'est pas présent dans le tableau</p>'; // par défaut
	for(let i=1; i<tab.length; i++){
		if(tab[i].note==note){
			message = '<p>'+note+' est présent dans le tableau en position '+(i+1)+'</p>';
			break;
		}
	}
	let balise=document.getElementById('resultat');
	balise.innerHTML+=message;
}

function boutonRaz(tab){
	tab=[]; // On repart avec un tableau vide dans un RAZ
	initTab(tab);
	afficherHTML(tab);
}

function boutonRazJSON(tab){
	let tabJSON=[
		{"prenom":"TaTaTaTa", "note":11, "photo":"image1.jpg"},
		{"prenom":"tete", "note":12, "photo":"image2.jpg"},
		{"prenom":"titi", "note":9, "photo":"image3.jpg"},
		{"prenom":"toto", "note":12, "photo":"image4.jpg"},
		{"prenom":"tutu", "note":17, "photo":"image5.jpg"},
		{"prenom":"tate", "note":18, "photo":"image6.jpg"},
		{"prenom":"tati", "note":8, "photo":"image7.jpg"},
		{"prenom":"tati", "note":13, "photo":"image8.jpg"}
	];
	tab=tabJSON;
	afficherHTML(tab);
}	

// ---------------------------------------------- //
// Initialisation et affichage
// ---------------------------------------------- //

function afficherEleve(eleve){
	let codeHTML='<tr>';
	codeHTML+='<th>'+eleve.prenom+'</th>';
	codeHTML+='<th>'+eleve.note+'</th>';
	codeHTML+='<th><img src="images/'+eleve.photo+'" height=100px></th>';
	codeHTML+='</tr>';
	return codeHTML;
}

function afficherHTML(tab){
	let innerHTML='<table><tr><th>Prénom</th><th>Note</th><th>Photo</th></tr>';
	for(let i=0; i<tab.length; i++){
		innerHTML+=afficherEleve(tab[i]);
	}
	innerHTML+='</table>';

	let balise=document.getElementById('tableau');
	balise.innerHTML=innerHTML;
}

function afficherConsole(tab){
	console.log('Contenu du tableau');
	for(let i=0; i<tab.length; i++){
		console.log('nom : '+tab[i].prenom
			+' - note : '+tab[i].note
			+' - photo : '+tab[i].photo
		);
	}
}

function initTab(tab){
	tab.push(creerEleve('TaTa',11,'image1.jpg'));
	tab.push(creerEleve('tete',12,'image2.jpg'));
	tab.push(creerEleve('titi',9,'image3.jpg'));
	tab.push(creerEleve('toto',12,'image4.jpg'));
	tab.push(creerEleve('tutu',17,'image5.jpg'));
	tab.push(creerEleve('tate',18,'image6.jpg'));
	tab.push(creerEleve('tati',8,'image7.jpg'));
	tab.push(creerEleve('tati',13,'image8.jpg'));
	afficherConsole(tab);
}

// ---------------------------------------------- //
// Le programme
// ---------------------------------------------- //
var tableau=[];
initTab(tableau);
afficherHTML(tableau);
