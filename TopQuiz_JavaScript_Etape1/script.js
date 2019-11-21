document.querySelector("header").textContent="Top Quiz"; 
			
// document.querySelector("elm") pour recepurer le 1ere elm dans le document DOM
// .textContent="txt" pour ajouter un text a afficher dans la page html

document.getElementById("btn_raz").disabled=true;  
document.getElementById("btn_jouer").disabled=true;

document.getElementById("btn_jouer").addEventListener("click", function(){
	console.log("clic")
	baliseSpan=document.getElementById("cpt_clic");
	baliseSpan.textContent=parseInt(baliseSpan.textContent)+1;
})

// .addEventListener() pour ecouter un evenment "click"

document.getElementById("btn_raz").addEventListener("click", function(){
	console.log("raz")
	document.getElementById("cpt_clic").textContent=0;
	document.getElementById("myinput").value="";	
	document.getElementById("btn_raz").disabled=true;
	document.getElementById("btn_jouer").disabled=true;
})

document.getElementById("myinput").addEventListener("input", function(){
	console.log("myinput")
	if(this.value.length > 0) {
		document.getElementById("btn_raz").disabled=false;
		document.getElementById("btn_jouer").disabled=false;
	}
	if(this.value.length == 0) {
		document.getElementById("btn_jouer").disabled=true;
		if(parseInt(document.getElementById("cpt_clic").textContent) == 0) {
			document.getElementById("btn_raz").disabled=true;
		}
   }
})