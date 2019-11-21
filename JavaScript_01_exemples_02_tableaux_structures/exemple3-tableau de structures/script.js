var eleve1 = { 
    id:1,
    nom: "toto",
    note: 15
};
var eleve2 = { 
    id:2,
    nom: "tata",
    note: 16
};

function afficher(eleve){
	console.log("nom de l\'élève : ", eleve.nom)
	console.log("note de l\'élève : ", eleve.note)
}

console.log("TEST de l\'affichage : ")
afficher(eleve1);

var eleves = [eleve1, eleve2];

console.log("TEST de foreach : ")
eleves.forEach(function (eleve) {
    console.log(afficher(eleve));
});