console.log("HELLo world !");

let x = 1;
var y = 3;


console.log(x + y)

y = 178;
x = 4;


console.log(x + y)

let c = 5;
const k = 10;

console.log(k - c)

let w = 9;
w = 10;
console.log(w)

const s = 10;
// s = 78; ceci bloque le js a cause d'une erreur et s = 78 sur une constante (const) est impossible a réassigné, lors d'une erreur en JS la suite du code n'est pas lu
console.log(s)

x = y;console.log(x);


console.log(w/2.5);

console.log(w/y);console.log(w*y);console.log("Modulo " +(w % y));

//structures conditionnelles : 

//if = si (si w = k alors j'ecris bonjour (pseudo code))

if (k == w){
    console.log("k est égale à " + w);
}

//if ()... conditions ...) {... expression ... ;} bloc de conditions.

else{
 console.log("K n'est pas égal à W")
};

// == --> conditions d'égalité
// === --> conditions stricte d'égalité (type)


console.log(55 + parseInt("55"));

let bonjour = "Salut ";
let bonjour02 = "les gars";

console.log(bonjour + bonjour02);

// Conditions NON != 

if (c != x){
    console.log(c + " n'est pas égal à " + x)
};

let bool = true;
bool = false;
console.log(bool);console.log(!bool);

if(!bool){
    console.log("bool = false")
}
// Else : 
else{
    console.log("bool = true")
};

// > ou < : 

if(w < c){
    console.log(w + " est supérieur a " +c)
}
else{
    console.log( w + " est inférieur a " + c)
};

//Querry selectors : 

var titre = document.getElementsByClassName("titre");

console.log(titre);

var secondTitle = document.getElementById("h2-Modifier");

console.log(secondTitle);

secondTitle.innerHTML = "Bonjour !";

let paragraphe = document.querySelector(".paragraphe");
console.log(paragraphe);

var parentImage = document.querySelector(".parent-image");
var image = document.createElement("img");

image.setAttribute("src", "Images/ChatNoir.jpg");
parentImage.appendChild(image);

// FONCTIONS :

function addition(nombreA,nombreB){
    let res = nombreA + nombreB;
    console.log(res);
}

addition(1000,2000);



function soustraction(nombreA,nombreB){
    let res = nombreA - nombreB;
    return res;
}

let trueRes = soustraction(50,27);

console.log(trueRes);
console.log(soustraction(10,5));


//taille > 1.70 else petit
function estCeQueJeSuisGrand(tailleCM){
    if (tailleCM == 170){
        console.log("Tu est dans la moyenne")
    } else if (tailleCM > 170){
        console.log("Tu est grand j'espère que cela est proportionnel")
    } else {
        console.log("Tu est petit, pauvre bébou")
    };
};

estCeQueJeSuisGrand(184);
estCeQueJeSuisGrand(170);
estCeQueJeSuisGrand(150);


function aiJeUnDivisionSansReste(nombreA, nombreB){

    res = nombreA/nombreB;      
    modulo = nombreA % nombreB;

    if(nombreB <= 0){
        console.log("On ne peut pas diviser par zéro idiot, ou négativement !")
    }
    else if(modulo != 0){
        console.log("La division a un reste : " + modulo)
    }
    else{
        console.log("La division n'a pas de reste : " + nombreA + "/" + nombreB + " = " + res)
    };
};

aiJeUnDivisionSansReste(10,2)
aiJeUnDivisionSansReste(100,3)

for(let i = 0; i <= 10; i++){
    let divis = 100;
    aiJeUnDivisionSansReste(divis, i);
};

//VAR ET LET

let maVariable = 10;

console.log(maVariable);

//maVariable = true;

console.log(maVariable);

//let maVariable = 10; impossinle de redefinir un autre let identique

var maNouvelleVariable = 12;
console.log(maNouvelleVariable);

var maNouvelleVariable = 15;
console.log(maNouvelleVariable);

var maVariableVar = "George de la jungle"

function jeTestMonLet(){
    let test = "jojocconde";
    var maVariableVar = "Jean-pierre"
    if(true){
        console.log(test)
        console.log(maVariableVar)
    }
};

jeTestMonLet();

function jeTestEncoreMonLet(){
    let test = "Léonard De Vinci"
    console.log(test);
    console.log(maVariableVar)
};

jeTestEncoreMonLet();

function aiJeUneDivisionSansReste(nombreA, nombreB){
    let resultat = nombreA % nombreB
    if(resultat > 0){
        console.log("elle a un reste.")
    }
    else{
        console.log("Elle n'a pas de reste.")
    }
  
  }

  function letTest() {
    let x = 31;
    if (true) {
      let x = 71;  // c'est une variable différente
      console.log(x);  // 71
    }
    console.log(x);  // 31
  }
  
  function varTest() {
    var x = 31;
    if (true) {
      var x = 71;  // c'est la même variable !
      console.log(x);  // 71
    }
    console.log(x);  // 71
  }

  //SWITCH

  function testNombres(nb){
    switch(nb){
        case 0: 
            console.log("Je suis le nombre 0")
            break;
        case 1:
            console.log("Je suis le nombre 1")
            break;
        case 2:
            console.log("Je suis le nombre 2")
            break;
        case 3:
            console.log("Je suis le nombre 3")
            break;
        default:
            console.log("Je suis strictement supérieur à 3")  
    }

  }

  //TABLEAU 

  

  var myFirstArray = [];
  var mySecondArray = [1,2,3,4,5];

  mySecondArray[2] = "tête de cul";
  mySecondArray[4] = true;

  function ConsLog(){
    console.log(mySecondArray);
    console.log(myFirstArray);
    console.log(mySecondArray.length);
  }

  ConsLog()

  var un = mySecondArray[0];

  console.log(mySecondArray[47]);

  console.log(un);

  myFirstArray.push("jeremy", "Kévin B."); //ajoute a la fin de la liste
  myFirstArray.unshift("Nan nan tqt bro"); //ajoute au début de la liste
  mySecondArray.push("Banane");
  ConsLog()

myFirstArray.pop(); //supprime le dernier de la liste
myFirstArray.shift(); // supprime le premier de la liste

let index = mySecondArray.indexOf("Banane"); //
console.log(index);
myFirstArray.push("Gougou", "Kévin PAGANOTTO.");

ConsLog()

console.log("Coucou !!!!!")

myFirstArray.splice(1,1);

ConsLog();

let banane = "une banane";