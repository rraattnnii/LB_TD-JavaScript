
console.log("Tests de console.log");
/////////////////////////////////////////////////////////////////
console.log("INVERSION DE NUMBERS");
function inverser(a, b){
console.log("Dans la fonction inverser : entrée : a="+a+" -b="+b);
tmp=a;
a=b;
b=tmp;
console.log("Dans la fonction inverser : sortie : a="+a+" -b="+b);
}
a=5;
b=10;
console.log("Avant inverser : a="+a+" - b="+b);
inverser(a,b);
console.log("Après inverser : a="+a+" - b="+b);
console.log("Avant inverser, en 'dur' : a=5, b=10");
//JavaScript – page 19/55
inverser(5,10);
/////////////////////////////////////////////////////////////////
console.log("INVERSION DE TABLEAU");
function inverserTableauDe2(tab){
console.log("Dans la fonction inverserTableauDe2 : entrée :"+tab);
tmp=tab[0];
tab[0]=tab[1];
tab[1]=tmp;
console.log("Dans la fonction inverserCouple : sortie : "+tab);
}
tab = [2,4];
console.log("Tableau de départ : "+tab);
inverserTableauDe2(tab)
console.log("Tableau après inversion : "+tab);
/////////////////////////////////////////////////////////////////
console.log("INVERSION DE STRUCTURE");
function inverserCouple(couple){
console.log("Dans la fonction inverserCouple : entrée :a="+couple.a+" / b="+couple.b);
tmp=couple.a;
couple.a=couple.b;
couple.b=tmp;
console.log("Dans la fonction inverserCouple : sortie :a="+couple.a+" / b="+couple.b);
}
couple = {
a:2,
b:4
}
console.log("Structure de départ : a="+couple.a+" /b="+couple.b);
inverserCouple(couple)
console.log("Structure après inversion : a="+couple.a+" /b="+couple.b);
/////////////////////////////////////////////////////////////////
console.log("INVERSION D'OBJET");
objet={
a:5,
b:10,
toString:function(){
return "a="+this.a+" - b="+this.b;
},
inverserCouple:function(){
console.log("Dans la fonction objet inverserCouple : entrée :a="+this.a+" / b="+this.b);
tmp=this.a;
this.a=this.b;
this.b=tmp;
console.log("Dans la fonction objet inverserCouple : sortie :a="+this.a+" / b="+this.b);
//JavaScript – page 20/55
}
}
console.log("Objet de départ : "+objet.toString());
inverserCouple(objet)
console.log("Objet après inversion classique:"+objet.toString());
objet.inverserCouple();
console.log("Objet après inversion classique:"+objet.toString());