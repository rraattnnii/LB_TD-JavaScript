document.getElementById('effacer').onclick = function(){
	for(L=1; L<=4; L++){
		for(A=1; A<=L*2-1; A++){
			idTD="td"+"L"+L+"A"+A
			baliseTD=document.getElementById(idTD)
			balisesInput=baliseTD.getElementsByTagName("input") 
			if(balisesInput[0].checked){
				baliseTD.style.display="none"
			}
		}
	}
}

document.getElementById('RAZ').onclick = function(){
	for(L=1; L<=4; L++){
		for(A=1; A<=L*2-1; A++){
			idTD="td"+"L"+L+"A"+A
			baliseTD=document.getElementById(idTD)
			baliseTD.style.display=""
			balisesInput=baliseTD.getElementsByTagName("input") 
			balisesInput[0].checked=false
		}
	}
}