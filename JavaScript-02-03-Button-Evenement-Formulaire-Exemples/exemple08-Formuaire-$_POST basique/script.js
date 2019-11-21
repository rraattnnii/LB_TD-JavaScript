// ----------------------------------------------------------------- //
// création des événements
// ----------------------------------------------------------------- //

// Affiche d'un message contextuel au focus sur la saisie du pseudo
document.getElementById("pseudo").addEventListener("focus", function () {
    document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
    document.getElementById("pseudo").style.backgroundColor = "";
});

// Suppression du message contextuel au blur sur la saisie du pseudo
document.getElementById("pseudo").addEventListener("blur", function (e) {
    console.log("blur sur le pseudo, via addEvent");
    document.getElementById("aidePseudo").textContent = "";
    verifPseudo(this);
});

// ----------------------------------------------------------------- //
// méthodes de vérification
// ----------------------------------------------------------------- //

// verif Form : on vérifie tous les champs : déclenché sur le onsubmit
function verifForm(node) { 
   debug('verifForm', node);
   let pseudoOk = verifPseudo(node.pseudo);
   let passwdpOk = verifPasswd(node.passwd);
   if(pseudoOk && passwdpOk) return true;
   alert("Veuillez remplir correctement tous les champs");
   return false; // le return false maintient sur la page et empêche l'action du formulaire
}

// reset Form : on fait un reset du formulaire : déclenché sur le onreset
function resetForm(node) {
  debug('resetForm', node);
  let tabReset=["pseudo", "aidePseudo", "passwd", "aidePasswd" ];
  for(let key in tabReset){
    document.getElementById(tabReset[key]).style="";
    document.getElementById(tabReset[key]).textContent="";
  }
}

// Vérification de la longueur du mot de passe saisi : déclenché sur le on input et appelé par verifForm
function verifPasswd(node) {
    debug('verifPasswd', node);
    let passwd = node.value;
    if (passwd.length < 4) {       // Longueur faible => couleur rouge
        longueurPasswd = "faible";
        couleurPasswd = "red"; 
    }
    else if (passwd.length < 8) {  // Longueur moyenne => couleur orange
        longueurPasswd = "moyenne";
        couleurPasswd = "orange"; 
    }
    else if (passwd.length >= 8) { // Longueur suffisante => couleur verte
        longueurPasswd = "suffisante";
        couleurPasswd = "green"; 
    } 
    let aidePasswdNode = document.getElementById("aidePasswd");
    aidePasswdNode.textContent = "Longueur : " + longueurPasswd; // Texte de l'aide
    aidePasswdNode.style.color = couleurPasswd; // Couleur du texte de l'aide
    if (passwd.length >= 8) return true
    else return false;
}

// Véridication de la longueur du pseudo : déclenché sur le blur et appelé par VerifForm
function verifPseudo(node) {
   debug('verifPseudo', node);
   if(node.value.length < 2 || node.value.length > 25) {
      node.style.backgroundColor = "pink";
      return false;
   }
   return true;
}

// ----------------------------------------------------------------- //
// fonction de debug : pour des console.log
// ----------------------------------------------------------------- //

function debug(cle, node){
   console.log("DEBUG"
      + ' -> cle = '      +cle
      + ' // nodeName = ' +node.nodeName 
      + ' // nodeType = ' +node.nodeType
      + ' // name = '     +node.name
      + ' // value = '    +node.value
      + ' // type = '     +node.type
      + ' // onsubmit = ' +node.onsubmit
      + ' // onreset = '  +node.onreset      
      + ' // onfocus = '  +node.onfocus
      + ' // onblur = '   +node.onblur
      + ' // oninput = '  +node.oninput
      + ' // action = '   +node.action
   );
}