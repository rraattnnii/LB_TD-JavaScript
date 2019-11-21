// ========================================================
// Accès au noeuds
// ========================================================
console.log("Le 2ème noeud du 6ème noeud de body")
console.log(document.body.childNodes[5].childNodes[1]);

console.log("getElementById('nouvelles')");
console.log(document.getElementById("nouvelles")); // L'unique id nouvelles

console.log("getElementsByTagName('h2')");
var noeuds = document.getElementsByTagName("h2"); // Tous les h2
for (var i = 0; i < noeuds.length; i++) {
    console.log(noeuds[i]);
}

console.log("getElementsByTagName('p')");
var noeuds = document.getElementsByTagName("p"); // Tous les p
for (var i = 0; i < noeuds.length; i++) {
    console.log(noeuds[i]);
}

console.log("getElementById('nouvelles').getElementsByTagName('li')");
var noeud = document.getElementById("nouvelles");
var noeuds = noeud.getElementsByTagName("li"); // Tous les li de nouvelles
for (var i = 0; i < noeuds.length; i++) {
    console.log(noeuds[i]);
}
console.log(noeuds [0]);
console.log(noeuds.item(0));
console.log(noeuds.length); 

console.log("getElementsByClassName('merveilles')");
var noeuds = document.getElementsByClassName("merveilles"); // Toutes les class merveilles
for (var i = 0; i < noeuds.length; i++) {
    console.log(noeuds[i]);
}

console.log("querySelectorAll('p')");
var noeuds = document.querySelectorAll("p"); // Tous les titres p
for (var i = 0; i < noeuds.length; i++) {
    console.log(noeuds[i]);
}

console.log("querySelectorAll('.existe')");
var noeuds = document.querySelectorAll(".existe"); // Tous class existe
for (var i = 0; i < noeuds.length; i++) {
    console.log(noeuds[i]);
}

console.log("querySelectorAll('#contenu p')");
var noeuds = document.querySelectorAll("#contenu p"); // Tous les p dans id contenu
for (var i = 0; i < noeuds.length; i++) {
    console.log(noeuds[i]);
}

console.log("querySelectorAll('#antiques .existe')");
var noeuds = document.querySelectorAll("#antiques .existe"); // Tous class existe dans id antiques
for (var i = 0; i < noeuds.length; i++) console.log(noeuds[i]);

console.log("querySelector('p')");
console.log(document.querySelector("p")); // un seul : le premier 

var node=document.getElementById("antiques");
console.log(node.childNodes);
console.log(node.childNodes[0]);
console.log(node.childNodes[1]);

