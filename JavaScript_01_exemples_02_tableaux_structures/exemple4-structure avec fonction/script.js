var eleve = { 
	id:1,
	nom: "toto",
	note: 15,
	afficher : function(){ 
		console.log("nom de l\'élève : ", this.nom)
		console.log("note de l\'élève : ", this.note)
	}
};

console.log("Affichage de l\'élève : ")
eleve.afficher();

eleve.note=18;
console.log("Affichage de l\'élève après modification de la note : ")
eleve.afficher();