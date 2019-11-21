// #script
/*
document.getElementById('efface').onclick = function () {
	for (L=1 ; L <= 4 ; A++) {

		for (A=1 ; A <= L*2-1 ; A++) {
			allumette = "allumetteL"+L+"A"+A;
		
			if(document.getElementById(allumette).checked){
				console.log("allumette checkee");
				document.getElementById(allumette+"img").src="";

			}
		}
	}
}


document.getElementById("efface").onclick = function(){
	if (document.getElementById(allumetteL1A1).checked) {
		console.log("allumette checkee");
		document.getElementById(allumette+"img").src="";

	}
}

*/

document.getElementById('efface').onclick = function(){
	for(L=1; L<=4; L++){
		for(A=1; A<=L*2-1; A++){ 
			allumette="allumetteL"+L+"A"+A;
			if(document.getElementById(allumette).checked){
			// if(eval(allumette).checked){
				console.log(L, A, " : ", allumette, " : checkée");
				document.getElementById(allumette+"img").src="";
				//eval(allumette+"img").src="";
				// la mise à jour pose des problèmes avec Safari
			}
		}
	}
}


document.getElementById('efface2').onclick = function(){
	if(allumetteL1A1.checked){ allumetteL1A1img.src=""; }	
	if(allumetteL2A1.checked){ allumetteL2A1img.src=""; }	
	if(allumetteL2A2.checked){ allumetteL2A2img.src=""; }
	if(allumetteL2A3.checked){ allumetteL2A3img.src=""; }
	if(allumetteL3A1.checked){ allumetteL3A1img.src=""; }
	if(allumetteL3A2.checked){ allumetteL3A2img.src=""; }
	if(allumetteL3A3.checked){ allumetteL3A3img.src=""; }
	if(allumetteL3A4.checked){ allumetteL3A4img.src=""; }
	if(allumetteL3A5.checked){ allumetteL3A5img.src=""; }
	if(allumetteL4A1.checked){ allumetteL4A1img.src=""; }
	if(allumetteL4A2.checked){ allumetteL4A2img.src=""; }
	if(allumetteL4A3.checked){ allumetteL4A3img.src=""; }
	if(allumetteL4A4.checked){ allumetteL4A4img.src=""; }
	if(allumetteL4A5.checked){ allumetteL4A5img.src=""; }
	if(allumetteL4A6.checked){ allumetteL4A6img.src=""; }
	if(allumetteL4A7.checked){ allumetteL4A7img.src=""; }
}

baliseInput=baliseTD.getElementsByTagName("input");
if(baliseInput[0].checked){
baliseTD.style.display="none"
}