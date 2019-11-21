document.getElementById('etat1').onclick = function(){
	console.log("ligne 1");
	console.log("allumetteL1A1 : "+allumetteL1A1.checked);
	console.log("ligne 2");
	console.log("allumetteL2A1 : "+allumetteL2A1.checked);
	console.log("allumetteL2A2 : "+allumetteL2A2.checked);
	console.log("allumetteL2A3 : "+allumetteL2A3.checked);
	console.log("ligne 3");
	console.log("allumetteL3A1 : "+allumetteL3A1.checked);
	console.log("allumetteL3A2 : "+allumetteL3A2.checked);
	console.log("allumetteL3A3 : "+allumetteL3A3.checked);
	console.log("allumetteL3A4 : "+allumetteL3A4.checked);
	console.log("allumetteL3A5 : "+allumetteL3A5.checked);
	console.log("ligne 4");
	console.log("allumetteL4A1 : "+allumetteL4A1.checked);
	console.log("allumetteL4A2 : "+allumetteL4A2.checked);
	console.log("allumetteL4A3 : "+allumetteL4A3.checked);
	console.log("allumetteL4A4 : "+allumetteL4A4.checked);
	console.log("allumetteL4A5 : "+allumetteL4A5.checked);
	console.log("allumetteL4A6 : "+allumetteL4A6.checked);
	console.log("allumetteL4A7 : "+allumetteL4A7.checked);
}

document.getElementById('etat2').onclick = function(){
	for(L=1; L<=4; L++){
		console.log("ligne "+L);
		for(A=1; A<=L*2-1; A++){ 
			allumette="allumetteL"+L+"A"+A;
			console.log(allumette+" : "+document.getElementById(allumette).checked);
			// console.log(allumette+" : "+eval(allumette).checked);
		}
	}
}