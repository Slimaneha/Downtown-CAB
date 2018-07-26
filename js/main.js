var selectElmtTaxiUn = document.getElementById("formTaxiUn");
var selectElmtTaxi5= document.getElementById("formTaxi5")

//Variable Choix

var choixTaxiDépart = "Ville"
var choixTaxiDépartDeux =  "Hors Ville"
départ = 0 ;
klm = 0;
place = 0 ;

tourTaxi = 0 ;




function CalculeUnTaxi (){

    choixTaxiVille = textselectionne = selectElmtTaxiUn.options[selectElmtTaxiUn.selectedIndex].text;
    passager= textselectionne = selectElmtTaxi5.options[selectElmtTaxi5.selectedIndex].value;
    klm = document.getElementById("FormTaxiDeux").value
    formTaxi =document.getElementById("informationUn")
    facture = document.getElementById("affiTaxi")
    klmCheck = klm.length





    if (choixTaxiVille ===  "Ville"  && klm > 0  && passager === "1" ) {

        départ = 40
        total = klm * 20 + départ
        formTaxi.style.display="none"
        facture.style.display="block"
        document.getElementById("resultUn").innerHTML = klm ;
        document.getElementById("resultDeux").innerHTML = départ ;
        document.getElementById("Total").innerHTML = total;
         document.getElementById("formTaxi4").display="none"
         document.getElementById("retourDeux").style.display="block"
         document.getElementById("formTaxi4").style.display="none"
         document.getElementById("passager").innerHTML= passager ;







 }



    else if (choixTaxiVille ===  "Hors Ville" && klm > 0 && passager === "1"  ) {
        départ = 60

        total = klm * 20 + départ
        formTaxi.style.display="none"
        facture.style.display="block"
        document.getElementById("resultUn").innerHTML = klm ;
        document.getElementById("resultDeux").innerHTML = départ ;
        document.getElementById("Total").innerHTML = total;
        document.getElementById("formTaxi4").display="none"
         document.getElementById("retourDeux").style.display="block"
         document.getElementById("retourDeux").style.display="block"
         document.getElementById("formTaxi4").style.display="none"
         document.getElementById("passager").innerHTML= passager ;







    }

    else if (choixTaxiVille ===  "Hors Ville" && klm > 0 && passager === "2" ) {
        départ = 40

        total = klm * 20 + départ
        formTaxi.style.display="none"
        facture.style.display="block"
        document.getElementById("resultUn").innerHTML = klm ;
        document.getElementById("resultDeux").innerHTML = départ ;
        document.getElementById("Total").innerHTML = total;
        document.getElementById("formTaxi4").display="none"
         document.getElementById("retourDeux").style.display="block"
         document.getElementById("retourDeux").style.display="block"
         document.getElementById("formTaxi4").style.display="none"
         document.getElementById("passager").innerHTML= passager ;







    }



    else if (choixTaxiVille ===  "Ville" && klm > 0 && passager === "2" ) {
        départ = 40

        total = klm * 20 + départ
        formTaxi.style.display="none"
        facture.style.display="block"
        document.getElementById("resultUn").innerHTML = klm ;
        document.getElementById("resultDeux").innerHTML = départ ;
        document.getElementById("Total").innerHTML = total;
        document.getElementById("formTaxi4").display="none"
         document.getElementById("retourDeux").style.display="block"
         document.getElementById("retourDeux").style.display="block"
         document.getElementById("formTaxi4").style.display="none"
         document.getElementById("passager").innerHTML= passager ;







    }


    else if (choixTaxiVille ===  "Hors Ville" && klm > 0 && passager === "3" ) {
        départ = 60

        total = klm * 20 + départ
        formTaxi.style.display="none"
        facture.style.display="block"
        document.getElementById("resultUn").innerHTML = klm ;
        document.getElementById("resultDeux").innerHTML = départ ;
        document.getElementById("Total").innerHTML = total;
        document.getElementById("formTaxi4").display="none"
         document.getElementById("retourDeux").style.display="block"
         document.getElementById("retourDeux").style.display="block"
         document.getElementById("formTaxi4").style.display="none"
         document.getElementById("passager").innerHTML= passager ;







    }


    else if (choixTaxiVille ===  "Ville" && klm > 0 && passager === "3" ) {
        départ = 60

        total = klm * 20 + départ
        formTaxi.style.display="none"
        facture.style.display="block"
        document.getElementById("resultUn").innerHTML = klm ;
        document.getElementById("resultDeux").innerHTML = départ ;
        document.getElementById("Total").innerHTML = total;
        document.getElementById("formTaxi4").display="none"
         document.getElementById("retourDeux").style.display="block"
         document.getElementById("retourDeux").style.display="block"
         document.getElementById("formTaxi4").style.display="none"
         document.getElementById("passager").innerHTML= passager ;






    }




}



function backTaxi () {

    facture.style.display="none"
    formTaxi.style.display="block"
    klm =0;
    document.getElementById("retourDeux").style.display="none"
         document.getElementById("formTaxi4").style.display="block"

}
