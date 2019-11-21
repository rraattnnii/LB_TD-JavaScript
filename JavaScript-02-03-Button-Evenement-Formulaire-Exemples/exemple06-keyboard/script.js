// Gestion de l'appui sur une touche du clavier produisant un caractère
// document.addEventListener("keypress", function (e) {
document.onkeypress = function (e) {
    // Affichage en console
	console.log(e);
	console.log("Fonction anonyme: Evènement clavier : "
    	+ e.type 
        + " / key : " + e.key
        + " / keyCode : " + e.keyCode
        + " / charCode : " + e.charCode       	
    );

    // affichage à l'écran
    noeudEditeur=document.getElementById("editeur")
    if(e.key=='Backspace'){
        var textContent=noeudEditeur.textContent;
        if(textContent.length > 0){
            textContent=textContent.substr(0, textContent.length-1);
            noeudEditeur.textContent=textContent;
            if(textContent.length == 0){
                noeudEditeur.style.border=""; 
            }
        }
        else{
        }
    }
    else{
        noeudEditeur.style.border="solid black 1px";
        noeudEditeur.textContent+=e.key;
    }
};



