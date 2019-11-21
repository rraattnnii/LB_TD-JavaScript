/*balise=document.getElementById('li1');
balise.innerHTML = '<h3>Table de 5 : </h3>';



for(i=1; i<11; i++){
	balise.innerHTML += '5 * '+i+' = '+5*i+'<br>'; 

}

*/

 //Version compacte :
document.getElementById('li1').innerHTML = '<h3>Table de 5 : </h3>';

for(i=1; i<11; i++){
	document.getElementById('li1').innerHTML += '5 * '+i+' = '+5*i+'<br>'; 
}

