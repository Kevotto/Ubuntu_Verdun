$(document).ready(function(){

    let nombre = $("#nbr");
    let nbrFirst = $(".nbrCalcFirst");
    let nbrSecond = $(".nbrCalcSecond");

    console.log($("h2"));
    $(".titre").html("coucou");
    $("p:last").css("color", "red");
    $("p:first").css({"color": "lime","background-color": "yellow"})
    nombre.change(function(){
        console.log(nombre.val())
    })

    $(".button").click(function(){
        // let valFirst = parseInt(nbrFirst.val())
        // let valSecond = parseInt(nbrSecond.val())
        //$(".result").html((valFirst + valSecond))

        let result = parseInt($(nbrFirst).val()) + parseInt($(nbrSecond).val())
        $(".result").html(result);
    })

    let majUscule =  $("#pEnMaj").html();

    $("#pEnMaj").html(majUscule.toUpperCase());

    let stagiaires = ["Kévin", "Renaud", "Erick", "Mickael", "Tony", "Anthony", "Manu"];

    for(let i = 0; i < stagiaires.length; i++){
        $("#liste").append("<li>" + stagiaires[i] + "</li>");
    }

    for(let i = stagiaires.length -1; i >= 0; i--){
        $("#liste").append("<li>" + stagiaires[i] + "</li>");
    }

});

