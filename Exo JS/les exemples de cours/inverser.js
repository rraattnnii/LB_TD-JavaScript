console.log("Tests de console.log");
/////////////////////////////////////////////////////////////////
console.log("INVERSION DE NUMBERS");
function inverser(a, b){
console.log("Dans la fonction inverser : entrée : a="+a+" - b="+b);
tmp=a;
a=b;
b=tmp;
console.log("Dans la fonction inverser : sortie : a="+a+" - b="+b);
}
a=5;
b=10;
console.log("Avant inverser : a="+a+" - b="+b);
inverser(a,b);
console.log("Après inverser : a="+a+" - b="+b);
console.log("Avant inverser, en 'dur' : a=5, b=10");
//JavaScript – page 19/55
