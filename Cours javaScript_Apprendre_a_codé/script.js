// JAVASCRIPT
//***** LES BOUCLES *********************************************
/*
 var number = 3;
 while (number <8)
{
 	console.log(number);
 	number++;
 } 

// **** LES FONCTIONS : ******************************************

declaration d'une fonction

syntaxe :

function multiply(number1,number2,number3)
{
	var resultMultiplay = number1*number2*number3;
	return resultMultiplay*2+34;
}


var a = 5;
var b = 6;

var result = multiply(a,b,a);

console.log(result);

*/
 
//****** Arrays (tableaux): **********************************************************

/*

 var fruits = ["pomme", "banane", "orange", "citron", "fraise", "résain", "kiwi"];

for (var i = 0 ; i < fruits.length; i++) {
	console.log(fruits[i]);
}

fruits.push("kiwi");   la fonction "puch" permet de ajouter un element a Arrays
console.log(fruits);

fruits.pop()
console.log(fruits);  //  la fonction "pop" permet de suppemer la dernier element dans le Arrays

 
var agrumes =  fruits.slice(2);   
console.log(agrumes);
*/
// la fonction slice(i,j) permet de d'afficher :
// slice(i)  d'afficher tous ce qui apres i non inclue si i=2 l'affichage a partire de 3
// slice(i)  d'afficher tous ce qui apres i non inclue si i=2 l'affichage a partire de 3
 
function boutonTest(){
document.getElementById('demo').innerHTML =
'<p style="background-color:aqua">félécitation!!!</p>'
}