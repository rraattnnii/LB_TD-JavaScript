// Version sans effets
// Attention : on utilise une variable intermédiaire innerHTML
// Car quand on ouvre une balise dans un innerHTML de balise, 
// elle est fermée automatiquement si nécéssaire !!
//idli='';
function tableMultiplication(nombre) {
	var innerHTML = '<ul>';
	for(var i=1; i<14; i++){
		innerHTML +='<li>'+nombre+' x '+i+' = '+nombre*i+'</li>';		
	}
	for(var i=15; i<26; i=i+5){
		innerHTML +='<li>'+nombre+' x '+i+' = '+nombre*i+'</li>';		
	}
	innerHTML +="</ul>";
	return innerHTML;
}
function boutonTableDeMultiplications(){
	var table = prompt("table ?");
	var balise=document.getElementById('resultat');
	balise.innerHTML=tableMultiplication(table);
}














// Version avec effets
// on construit des li avec des onmouseover et le code javascript associé
function boutonTableDeMultiplicationsAvecEffets(){
	var table = prompt("table ?");
	var innerHTML ='<ul>';
	for(var i=1; i<14; i++){
		// On veut construire le <li suivant : 
		// <li id="li1" onmouseover="document.getElementById('li1').style.backgroundColor='yellow';">
		innerHTML += '<li id=\'li' +i+ '\'';
		innerHTML += ' onmouseover="document.getElementById(\'li' +i+ '\')';
		innerHTML += '.style.backgroundColor=\'yellow\';"';
		// On rajoute le onmouseout : 
		innerHTML += ' onmouseout="document.getElementById(\'li' +i+ '\')';
		innerHTML += '.style.backgroundColor=\'\';"';
		innerHTML += '>';
		innerHTML += table + ' x ' +i+ ' = ' +table*i+ '</li>';	
	}
	for(var i=15; i<26; i=i+5){ // ici on se passe du getElementById
		innerHTML += '<li id=\'li' +i+ '\'';
		innerHTML += ' onmouseover="li' +i+'.style.backgroundColor=\'yellow\';"';
		innerHTML += ' onmouseout="li'+i+'.style.backgroundColor=\'\';"';
		innerHTML += '>';
		innerHTML += table + ' x ' +i+ ' = ' +table*i+ '</li>';		
	}
	innerHTML += "</ul>";
	document.getElementById('resultat').innerHTML=innerHTML;
}

// Version avec effet : on construit les li avec des id puis on ajoute les évenements sur les li
// en principe ça devrait marcher, mais non !!
document.getElementById("bouton1").onclick = function(){
	var table=prompt("entrez la table choisie");
	// on constuit les li avec des id
	var innerHTML ='<ul>';
	for(i=1; i<14; i++){
		innerHTML+="<li id=\"li"+i+"\">"+table+"* "+i+" = "+table*i+"</li>"
	}
	innerHTML += "</ul>";
	console.log(innerHTML);
	document.getElementById('resultat').innerHTML=innerHTML;

	// ce code ne marche pas !!! pourtant il devrait !
	// seul le dernier fonctionne un peu
	for(var i=1; i<14; i++){
		idLi="li"+i;
		console.log(eval(idLi));
		document.getElementById(idLi).onmouseover=function(){
			document.getElementById(idLi).style.backgroundColor='aqua';
		}
		document.getElementById(idLi).onmouseout=function(){
			document.getElementById(idLi).style.backgroundColor='';
		}
	}
}

// Version équivalente à la précédente qui marche
// Pour que ça marche il faut passer que les li sont nommés en "dur" 
// et ne pas passer par une variable comme dans le cas précédent qui ne marche pas
// c'est une bizzarerie à creuser !
document.getElementById("bouton2").onclick = function(){
	var table=prompt("entrez la table choisie");
	var innerHTML ='<ul>';
	for(i=1; i<14; i++){
		innerHTML+="<li id=\"li"+i+"\">"+table+"* "+i+" = "+table*i+"</li>"
	}
	innerHTML += "</ul>";
	console.log(innerHTML);
	document.getElementById('resultat').innerHTML=innerHTML;

	// pour que ça marche, il faut passer les id en "dur"
	document.getElementById("li1").onmouseover=function(){
		document.getElementById("li1").style.backgroundColor='yellow';
	}
	document.getElementById("li1").onmouseout=function(){
		document.getElementById("li1").style.backgroundColor='';
	}
	// version compacte
	li2.onmouseover=function(){ li2.style.backgroundColor='yellow'; }
	li2.onmouseout=function() { li2.style.backgroundColor='';    }
	li3.onmouseover=function(){ li3.style.backgroundColor='yellow'; }
	li3.onmouseout=function() { li3.style.backgroundColor='';    }
	li4.onmouseover=function(){ li4.style.backgroundColor='yellow'; }
	li4.onmouseout=function() { li4.style.backgroundColor='';    }
	li5.onmouseover=function(){ li5.style.backgroundColor='yellow'; }
	li5.onmouseout=function() { li5.style.backgroundColor='';    }
	li6.onmouseover=function(){ li6.style.backgroundColor='yellow'; }
	li6.onmouseout=function() { li6.style.backgroundColor='';    }
	li7.onmouseover=function(){ li7.style.backgroundColor='yellow'; }
	li7.onmouseout=function() { li7.style.backgroundColor='';    }
	li8.onmouseover=function(){ li8.style.backgroundColor='yellow'; }
	li8.onmouseout=function() { li8.style.backgroundColor='';    }
	li9.onmouseover=function(){ li9.style.backgroundColor='yellow'; }
	li9.onmouseout=function() { li9.style.backgroundColor='';    }
	li10.onmouseover=function(){ li10.style.backgroundColor='yellow'; }
	li10.onmouseout=function() { li10.style.backgroundColor='';    }
	li11.onmouseover=function(){ li11.style.backgroundColor='yellow'; }
	li11.onmouseout=function() { li11.style.backgroundColor='';    }
	li12.onmouseover=function(){ li12.style.backgroundColor='yellow'; }
	li12.onmouseout=function() { li12.style.backgroundColor='';    }
	li13.onmouseover=function(){ li13.style.backgroundColor='yellow'; }
	li13.onmouseout=function() { li13.style.backgroundColor='';    }
}
