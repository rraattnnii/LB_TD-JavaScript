// ========================================================
// Accès aux informations des noeuds
// ========================================================
console.log("=============================================");
console.log("=============================================");

console.log("getElementById('antiques')");
console.log(document.getElementById("antiques")); // L'unique id antiques
console.log(document.getElementById("antiques").innerHTML);
console.log(document.getElementById("antiques").textContent);


console.log("querySelector('a').hasAttribute('href')");
noeud=document.querySelector("a");
if (noeud.hasAttribute("href")) 
	console.log(noeud.getAttribute("href"));

console.log("querySelector('a').href");
console.log(document.querySelector("a").href);

console.log("getElementById('antiques').classList");
var noeuds = document.getElementById("antiques").classList;
for (var i = 0; i < noeuds.length; i++) console.log(noeuds[i]);

console.log("querySelectorAll('a').href");
var noeuds = document.querySelectorAll("a"); // Tous class existe dans id antiques
for (var i = 0; i < noeuds.length; i++) 
	if (noeuds[i].hasAttribute("href")) 
		console.log(noeuds[i].getAttribute("href"));

var node=document.querySelector("ul");
console.log(node.textContent);
console.log(node.innerHTML);



