document.getElementById('effacer').onclick = function(){
	for(L=1; L<=4; L++){
		for(A=1; A<=L*2-1; A++){
			idTD="td"+"L"+L+"A"+A
			baliseTD=document.getElementById(idTD)
			baliseInput=baliseTD.getElementsByTagName("input") 
			if(baliseInput[0].checked){
				baliseTD.style.display="none"
			}
		}
	}
}
document.getElementById('RAZ').onclick = function(){
	raz()
}
window.onload=function(){
	raz()
}
function raz(){
	console.log("raz")
	for(L=1; L<=4; L++){
		for(A=1; A<=L*2-1; A++){
			idTD="td"+"L"+L+"A"+A
			baliseTD=document.getElementById(idTD)
			baliseTD.style.display=""
			baliseInput=baliseTD.getElementsByTagName("input") 
			baliseInput[0].checked=false
		}
	}
}