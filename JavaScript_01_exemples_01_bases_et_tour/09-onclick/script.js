// Paragraphe p1 : 
baliseP1 = document.getElementById('p1');
baliseP1.onclick = function(){
	baliseP1.style.backgroundColor='aqua';
}

// Paragraphe p2 : 
baliseP2 = document.getElementById('p2');
baliseP2.onmouseover = function(){
	baliseP2.style.backgroundColor='yellow';
}
baliseP2.onmouseout=function(){
	baliseP2.style.backgroundColor='';
}