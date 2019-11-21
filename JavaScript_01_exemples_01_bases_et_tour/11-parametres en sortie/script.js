//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
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
inverser(5,10);

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
console.log("INVERSION DE TABLEAU");
function inverserTableauDe2(tab){
	console.log("Dans la fonction inverserTableauDe2 : entrée : "+tab);
	tmp=tab[0];
	tab[0]=tab[1];
	tab[1]=tmp;
	console.log("Dans la fonction inverserCouple : sortie : "+tab);
}

tab = [2,4];
console.log("Tableau de départ : "+tab);
inverserTableauDe2(tab)
console.log("Tableau après inversion : "+tab);

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
console.log("INVERSION DE STRUCTURE");
function inverserCouple(couple){
	console.log("Dans la fonction inverserCouple : entrée : a="+couple.a+" / b="+couple.b);
	tmp=couple.a;
	couple.a=couple.b;
	couple.b=tmp;
	console.log("Dans la fonction inverserCouple : sortie : a="+this.a+" / b="+this.b);
}

couple1 = {a:2,b:4}
console.log("Structure de départ : a="+couple1.a+" / b="+couple1.b);
inverserCouple(couple1)
console.log("Structure après inversion : a="+couple1.a+" / b="+couple1.b);

couple2={a:5,b:10,toString:function(){return "a="+this.a+" - b="+this.b;}}
console.log("Structure de départ : "+couple2.toString());
inverserCouple(couple2)
console.log("Structure après inversion : "+couple2.toString());

