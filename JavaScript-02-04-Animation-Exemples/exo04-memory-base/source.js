var img1=''; // variable globale
var img2=''; // variable globale

function clic (id) {
  //console.log("clic"); console.log(img1); console.log(img2);
  var imageCliquee=document.getElementById(id); // console.log(img);

  // si on a cliqué sur une image visible, on s'arrête
  if(imageCliquee.style.visibility=='visible') return;

  // sinon, si img1 est vide, on rend l'image cliquée visible et img1 vaut cette image
  if (img1=='') { 
    imageCliquee.style.visibility = 'visible'; 
    img1 = imageCliquee;
    return;
  }

  // sinon, si img2 est vide, on rend l'image cliquée visible et img1 vaut cette image 
  else if (img2=='') {
    imageCliquee.style.visibility = 'visible';
    img2 = imageCliquee;
  }

  // si les img1 et img2 n'ont pas le même src, donc pas la même image : on cache les photos après 1 seconde
  if (img1.src!=img2.src) {
    setTimeout('cache2PhotosDifferentes();',1000);
  }

  // sinon, les photos sont les mêmes : on les laisse affichée et on réinitialise img1 et img2
  else{
    img1='';
    img2='';  
  }
  cestfini();
}

function cache2PhotosDifferentes () {
  img1.style.visibility = 'hidden';
  img2.style.visibility = 'hidden';
  img1='';
  img2='';
}

function cestfini(){
  var lesNoeuds=document.querySelectorAll(".case img");
  for (var i = 0; i < lesNoeuds.length; i++) {
    if(lesNoeuds[i].style.visibility != 'visible') return;
  }
  document.getElementById('finDePartie').innerHTML="<h1> Gagné !!! </h1>";
}


