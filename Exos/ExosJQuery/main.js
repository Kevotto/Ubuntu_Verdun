$(document).ready(function(){

    // let tableauEleve = [];
    // let tabNotes = [];
    // let tabClasselEleve = [];

    // let nomEl = $("#classNomEleve");
    // let prenomEl = $("#classPrenomEleve");
    // let moyEl = $("#classMoyenneEleve");

    // function addVal(valNom, valPrenom, valMoy){
    //     tableauEleve.push(valNom, valPrenom, valMoy);
    // }

    // function addTab(tabEl){
    //     tabClasselEleve.push(tabEl);
    // }

    // function ajoutLi(){
    //         $("td").append("<tr>" + tableauEleve[0] + " " + tableauEleve[1] + " " + tableauEleve[2] + "</tr>")
    // }

    // $(".envoyer").click(function(){
    //     addVal(nomEl.val(), prenomEl.val(), moyEl.val())
    //     addTab(tableauEleve)
    //     console.log(tableauEleve);
    //     console.log("test " + tabClasselEleve);
    //     ajoutLi();
    //     tableauEleve.length = 0;
    // });

    // function afficheTab(tab){
    //     for(let i = 0; i < tab.length; i++){
    //         console.log(tab[i]);
    //     }          
    // };

    var btn = $("#btn");
    var studient = [];
    var allstudients = [];
    var mean = [];

    $("#error").hide();

    let res = 0;
   

    btn.click(function(){

        let inputNbr = parseInt($("#mean").val());

        if(inputHasNotThisValue("", $("#firstName")) && inputHasNotThisValue("", $("#name")) &&  inputNbr >= 0 && inputNbr <= 20){
            studient.push($("#firstName").val(), $("#name").val(), inputNbr);
            allstudients.push(studient);
            mean.push(inputNbr);
            tableUpdate();
            valueReset();           
            calcMoyenne(res);

            // if( allStudient.length > 1){
            //     $("#meanClass").html(meanClass())
            // }
        }
        else{
            $("#error").show().fadeOut(5000);
            valueReset();
        }

    })

    function valueReset(){
        studient = [];
        $("#firstName").val("");
        $("#name").val('')
        parseInt($("#mean").val(0))

    }

    function tableUpdate(){
        $("#tableau .trRemove").remove();
        allstudients.forEach(element => $("#tableau").append("<tr class='trRemove'><td>" + element[0] + "</td><td class='trRemove' >" + element[1] + "</td><td class='trRemove'>" + element[2] + "</td></tr>"))
    }

    function inputHasNotThisValue(valuecheck, input){
        if(input.val() != valuecheck){
            return true;
        }
        else{
            return false;
        }
    }
    
    function calcMoyenne(res){
        let b = mean.length;
        for(let i = 0; i < b; i++){
            res = res + mean[i];
        }
        moyenne = res / b;
        $("#meanClass").html(moyenne);
        console.log(mean);
    }

    // OU 

    let tab1234 = [1,2,3,4];
    var res1234 = tab1234.reduce((x, y) => x + y, 0);
    console.log(res1234);

    // function meanClass(){
    //     var meanNote = mean.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    //   return meanNote / mean.length;
    // }

});


