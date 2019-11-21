// verif Form : on vérifie tous les champs
// si pas OK : ALERT
function verifForm(node) { 
   debug('verifForm', node);
   var pseudoOk = verifPseudo(node.pseudo);
   var mailOk = verifMail(node.email);
   var ageOk = verifAge(node.age);
   var passwdpOk = verifPasswd(node.passwd);

   if(pseudoOk && mailOk && ageOk && passwdpOk) return true;

   alert("Veuillez remplir correctement tous les champs");
   return false; // le return false maintient sur la page et empêche l'action du formulaire
}

// reset Form : on fait un reset du formulaire
function resetForm(node) {
  debug('resetForm', node);
  surligne(document.getElementById("pseudo"),"");
  surligne(document.getElementById("age"),"");
  surligne(document.getElementById("email"),"");
}

function verifAge(node) {
   debug('verifAge', node);
   var age = parseInt(node.value);
   if(isNaN(age) || age < 5 || age > 111) {
      surligne(node, "pink");
      return false;
   }
   surligne(node, "");
   return true;
}

function verifMail(node) {
   debug('verifMail', node);
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(node.value)) {
      var nodemail=document.getElementById("email");
      nodemail.textContent="adresse invalide";
      debug('NodeMail', nodemail);   
      newnode=document.createElement("span");
      newnode.innerHTML="adresse invalide";
      debug('NewNode', newnode);        
      nodemail.insertBefore(newnode, null);
      surligne(node, "pink");
      return false;
   }
   surligne(node, "");
   return true;
}

// Affiche d'un message contextuel pour la saisie du pseudo
document.getElementById("pseudo").addEventListener("focus", function () {
    document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
});
// Suppression du message contextuel pour la saisie du pseudo
document.getElementById("pseudo").addEventListener("blur", function (e) {
    console.log("blur sur le pseudo, via addEvent");
    document.getElementById("aidePseudo").textContent = "";
});


function verifPseudo(node) {
   console.log("blur sur le pseudo, via verifPseudo");
   debug('verifPseudo', node);
   if(node.value.length < 2 || node.value.length > 25) {
      surligne(node, "pink");
      return false;
   }
   surligne(node, "");
   return true;
}

// Vérification de la longueur du mot de passe saisi
function verifPasswd(node) {
    var passwd = node.value;
    if (passwd.length < 4) {
        longueurPasswd = "faible";
        couleurPasswd = "red"; // Longueur faible => couleur rouge
    }
    else if (passwd.length < 8) {
        longueurPasswd = "moyenne";
        couleurPasswd = "orange"; // Longueur moyenne => couleur orange
    }
    else if (passwd.length >= 8) {
        longueurPasswd = "suffisante";
        couleurPasswd = "green"; // Longueur suffisante => couleur verte
    } 
    var aidePasswdNode = document.getElementById("aidePasswd");
    aidePasswdNode.textContent = "Longueur : " + longueurPasswd; // Texte de l'aide
    aidePasswdNode.style.color = couleurPasswd; // Couleur du texte de l'aide
    if (passwd.length >= 8) return true
    else return false;
}

function surligne(node, color) {
   node.style.backgroundColor = "";
   node.style.backgroundColor = color;
}

// fonction de debug : pour des console.log
function debug(cle, node){
   console.log(cle
      + ' / nodeName : '+node.nodeName 
      + ' / nodeType : '+node.nodeType
      + ' / name : '+node.name
      + ' / value : '+node.value
      + ' / type : '+node.type
      + ' / onsubmit : '+node.onsubmit
      + ' / action : '+node.action
      + ' / onblur : '+node.onblur
   );
   console.log(node);
}