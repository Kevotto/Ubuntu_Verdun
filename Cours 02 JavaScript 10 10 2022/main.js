// ET et OU

let x = 10;
let y = 9;

//OU
 
if( x == 9 || y == 9){
    console.log("x ou y est églae a 9");
}
else{
    console.log("x et y ne sont pas egaux a 9");
};

//ET

if( x == 9 && y == 9){
    console.log("x ou y est églae a 9");stagiaires.length
};

//OU exlusif un des deux est true mais pas les deux (XOR)

if(x == 10 ^ y == 9){
    console.log(true)
}
else{
    console.log(false)
}

if(x == 10 ^ y == 5){
    console.log(false)
}
else{
    console.log(true)
}

//BONNES PRATIQUES

console.log("A chaques changement de block, il est néccéssaire et indispensable de bien indenter et/ou de faire un tab");
console.log("Si une fonction retourne quelque chose, elle doit commencer par : si elle retourne un bool par Is... ou As... ou  Add... , le nom d'une fonction doit toujours refleter ce qu'elle fait");
console.log("Une fonction doit faire une seule chose a la fois");

//NULL ET UNDEFINED

let pnl = null;

let elements = document.getElementById("paul");
console.log(elements);

//Undefined

let k;
 console.log("k est : " + k);

 if(k === undefined){
    k = 12545;
    console.log("k est egale a : " + k );
 }

 let button = document.getElementsByClassName("exemple_A");


//  function myCLick(){
//     console.log("Clique clique pan pan pan")
//  }

//  button[0].addEventListener("click", myCLick)

// button[0].addEventListener("click", function(){
//     console.log("Clique clique pan pan pan")
// });

button[0].addEventListener('click', function(event){
	console.log("J'ai cliqué sur le bouton.");
    console.log(event);
})

let inputText = document.getElementById("exemple_B");

inputText.addEventListener("input", function(){
    console.log("OK");
})

//AJAX

var bouttonImage = document.getElementById("sendNudes");

var imageNew = document.querySelector("img");

 bouttonImage.addEventListener("click", function(){
    fetch("https://api.thecatapi.com/v1/images/search").then(response => imageNew.src = response.url);

    //ajax est un objet,  il faut  donc l'instancié
// var ajax = new XMLHttpRequest();
// ajax.open("GET", "https://api.thecatapi.com/v1/images/search", true)
// ajax.responseType = "json";
// ajax.send();
// ajax.onload = function(){
//     let imageJSON = this.response[0].url;
//     console.log(imageJSON);
//     imageNew.src = imageJSON;
// };
})

//fonctions fléchées

function add(nbrA, nbrB){
    console.log(nbrA + nbrB);
}

add(5, 10)

const arrowAdd = (nbrA, nbrB) =>{
    console.log(nbrA + nbrB);
}

arrowAdd(50,98)

console.log(arrowAdd);

arrowAdd(10, 10)

var addArray = [1,2,4,5];

const mapArray = addArray.map(x => x+1)
console.log(mapArray);
console.log(addArray);

// const addArrayTwo = [7, 12, 45, 2];

// console.log(addArrayTwo);


// function fonctionMapArray(tab[]){
//     for(let i = 0; i < addArrayTwo.length; i ++){
//         const mapArrayTwo = addArrayTwo.map(x => x+ i);
//         return mapArrayTwo;
//     }
// }

// console.log(function(addArrayTwo));

var addArrayTwo = [5, 7, 12, 4]

console.log(mapArray);

const mapArrayTwo = addArray.map((x, i) => x + addArrayTwo[i]);

console.log(mapArrayTwo);

console.log("coucou");

addArrayTwo.forEach(x => console.log(x))

const zeroArray = [3,7,8,51];

function hasZero(elements){
    if(elements >= 3){
        return true;
    }
    else{
        return false;
    }
    
}

console.log((zeroArray.every(hasZero)));
