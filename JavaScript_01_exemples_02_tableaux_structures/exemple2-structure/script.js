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

console.log("nom de l\'élève : ", eleve1.nom)
console.log("note de l\'élève : ", eleve1.note)
eleve1.note=18;
console.log("note modifiée de l\'élève : ", eleve1.note)

var text = "";
var x;
for (x in eleve1) {
    text += eleve1[x] + " ";
}
console.log("eleve1 : ", text) // text vaut : "John Doe 25"

console.log("eleve1 : ", eleve1['nom']) // vaut toto
