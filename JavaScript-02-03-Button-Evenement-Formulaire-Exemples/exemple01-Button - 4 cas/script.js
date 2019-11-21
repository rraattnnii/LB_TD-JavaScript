// la function sera lancée quand on clique
console.log("entrée dans JavaScript");
function buttonClic3() {
	alert('Cas 3 : function appelée par le bouton : Hello world!');
}
	
document.getElementById("monBouton").onclick=function(){
	alert('Cas 4 : evénement défini dans le JS : Hello world!');
};

console.log("sortie de JavaScript");