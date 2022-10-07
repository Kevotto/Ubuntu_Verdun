

//for(let i = 0; i < tabLi.length; i++){
  //  var newLi = document.createElement("li");
  //  newLi.innerText = tabLi[i];
  //  document.querySelector(".listeDeMerde").appendChild(newLi);
   // var newA = document.createElement("a");
  //  document.querySelector(".listeDeMerde").appendChild(newLi).appendChild(newA);
  //  newA.innerText = tabLien[i];


//}


var tabLi = ["Menu", "Produit", "Contact"];
var tabLien = ["menu.html", "produit.html", "contact.html"];

var ElleI = document.getElementsByClassName(".listeDeMerde");

for(let i = 0; i < tabLi.length; i++){
    
    var newLi = document.createElement("li");
    var newA = document.createElement("a");
    newA.innerText = tabLi[i];

    newA.setAttribute("href", tabLien[i]);
    document.querySelector(".listeDeMerde").appendChild(newLi).appendChild(newA);
    
}

let baliseP_First = "Lorem cupidatat officia dolor excepteur occaecat sint excepteur est labore minim";
let baliseP_Second = "Accusantium necessitatibus nihil est ad pariatur officiis corporis possimus!";
let baliseDivNoir = ".divNoir";
let baliseDivRouge = ".divRouge";

function boucleRePeat(string, classeDiv){
    for(let j = 0; j < 7; j++){
        var newP1 = document.createElement("p");
        newP1.innerText = string;   
        document.querySelector(classeDiv).appendChild(newP1);    
    }
}

boucleRePeat(baliseP_First, baliseDivNoir)
boucleRePeat(baliseP_Second, baliseDivRouge)

