




var questionUn = {
    question: "Quelle est la limitation de vitesse en villes ?",
    a: "50KLM",
    b: "100KLM",
    c: "90KLM",


}

var question2 = {
    question: "Quelle vitesse sur une départementale ?",
    a: "150KLM",
    b: "130KLM",
    c: "100KLM",


}


var question3 = {
    question: "Que dois je faire quand le feu et rouge ?",
    a: "Je fonce et on verra ",
    b: "Je marque un temps d’arrêt et je passe ",
    c: "J’attends qui passe au vert ",


}



var question4 = {
    question: "J'attends des sirènes  ( Police, EMS , FBI ) quelles dois être ma réaction",
    a: " Je garde mon allure chacun son tour il attendra !!",
    b: " J'accélère",
    c: "je laisse passer",


}



var question5 = {
    question: "Le permis provisoir à une durée de ? ",
    a: "1 Semaine",
    b: "1 Mois ",
    c: "3 Mois ",


}

var question = document.getElementById('question')
var reponces1 = document.getElementById("reponcesUn");
var reponces2 = document.getElementById("reponces2");
var reponces3 = document.getElementById("reponces3");



reponcesA = document.getElementById("a")
reponcesB = document.getElementById("b")
reponcesC = document.getElementById("c")
reponcesFinal = ""

userName = " "
userName =""



point = 0
erreur = 0

function user() {



    document.getElementById("autoUn").style.display = "none"
    document.getElementById("user").style.display = "block"
    document.getElementById("btnAutre").style.display = "none"
    document.getElementById("entrainementUn").style.display="block"




}

function entrainement() {
    document.getElementById("entrainement").style.display = "block"
    document.getElementById("entrainementUn").style.display="none"

    username = document.getElementById("userUn").value
    userName = document.getElementById("user2").value
    document.getElementById("btnentrainementUn").style.display = "block"
    question.innerHTML = questionUn["question"];
    reponcesA.innerHTML = questionUn["a"]
    reponcesB.innerHTML = questionUn["b"]
    reponcesC.innerHTML = questionUn["c"]
    document.getElementById("user").style.display = "none"



}




var selectElmt = document.getElementById("formAuto");



function autoUn() {

    reponcesFinal = selectElmt.options[selectElmt.selectedIndex].text;








    if (reponcesFinal === "90KLM") {


        question.innerHTML = question2["question"]
        reponcesA.innerHTML = question2["a"]
        reponcesB.innerHTML = question2["b"]
        reponcesC.innerHTML = question2["c"]
        point++

        document.getElementById("entrainementUn").style.display = "none"
        document.getElementById("btnentrainementUn").style.display = "none"
        document.getElementById("btnentrainement2").style.display = "block"
        reponcesFinal = ""



    }
    else {
        question.innerHTML = question2["question"]
        reponcesA.innerHTML = question2["a"]
        reponcesB.innerHTML = question2["b"]
        reponcesC.innerHTML = question2["c"]

        document.getElementById("btnentrainementUn").style.display = "none"
        document.getElementById("btnentrainement2").style.display = "block"
        document.getElementById("btnentrainementUn").style.display = "none"

        erreur++
    }

}


function auto2() {

    reponcesFinal = selectElmt.options[selectElmt.selectedIndex].text;





    if (reponcesFinal === "130KLM") {


        question.innerHTML = question3["question"]
        reponcesA.innerHTML = question3["a"]
        reponcesB.innerHTML = question3["b"]
        reponcesC.innerHTML = question3["c"]
        point++

        document.getElementById("btnentrainement2").style.display = "none"
        document.getElementById("btnentrainement3").style.display = "block"



    }
    else {
        question.innerHTML = question3["question"]
        reponcesA.innerHTML = question3["a"]
        reponcesB.innerHTML = question3["b"]
        reponcesC.innerHTML = question3["c"]


        document.getElementById("btnentrainement2").style.display = "none"
        document.getElementById("btnentrainement3").style.display = "block"
        erreur++
    }

}


function auto3() {





    reponcesFinal = selectElmt.options[selectElmt.selectedIndex].text;

    if (reponcesFinal === "Je marque un temps d’arrêt et je passe") {


        question.innerHTML = question4["question"]
        reponcesA.innerHTML = question4["a"]
        reponcesB.innerHTML = question4["b"]
        reponcesC.innerHTML = question4["c"]
        point++

        document.getElementById("btnentrainement3").style.display = "none"
        document.getElementById("btnentrainement4").style.display = "block"



    }
    else {

        question.innerHTML = question4["question"]
        reponcesA.innerHTML = question4["a"]
        reponcesB.innerHTML = question4["b"]
        reponcesC.innerHTML = question4["c"]
        document.getElementById("btnentrainement3").style.display = "none"
        document.getElementById("btnentrainement4").style.display = "block"
        erreur++
    }

}


function auto4() {


    reponcesFinal = selectElmt.options[selectElmt.selectedIndex].text;



    if (reponcesFinal === "je laisse passer") {


        question.innerHTML = question5["question"]
        reponcesA.innerHTML = question5["a"]
        reponcesB.innerHTML = question5["b"]
        reponcesC.innerHTML = question5["c"]
        point++

        document.getElementById("btnentrainement4").style.display = "none"
        document.getElementById("btnentrainement5").style.display = "block"



    }

    else {
        question.innerHTML = question5["question"]
        reponcesA.innerHTML = question5["a"]
        reponcesB.innerHTML = question5["b"]
        reponcesC.innerHTML = question5["c"]
        erreur++

        document.getElementById("btnentrainement4").style.display = "none"
        document.getElementById("btnentrainement5").style.display = "block"
    }

}




boot = ""

//var dateD = date ()


var codeBare = document.getElementById("code")
var d = new Date();


function auto5() {
    reponcesFinal = selectElmt.options[selectElmt.selectedIndex].text;
    document.getElementById("name").innerHTML= username;
    document.getElementById("nameDeux").innerHTML = userName
   
    boot = ""
    if (point >= 4 ) {
        var boot = Math.random(); //valeur aleatoire entre 0 et 1//
    //On traduit ce nombre aleatoire en un choix aleatoire entre pierre, papier, ciseaux//
    if (boot < 0.34) {
        boot = "SL" + d.getTime() ;
        codeBare.innerHTML = boot

        
        
    }
    else if (boot <= 0.67) {
        boot = "SH" + d.getTime() ;
        codeBare.innerHTML = boot
        

    }
    else {
        boot = "AB" + d.getTime();
        codeBare.innerHTML = boot

    }
    }

    


    else if (point < 4 ) {

        var boot = Math.random(); //valeur aleatoire entre 0 et 1//
        //On traduit ce nombre aleatoire en un choix aleatoire entre pierre, papier, ciseaux//
        if (boot < 0.34) {
            boot = "BA";
            codeBare.innerHTML = boot + d.getTime()
            
            
        }
        else if (boot <= 0.67) {
            boot = "FR";
            codeBare.innerHTML = boot + d.getTime()
            
    
        }
        else {
            boot = "TG";
            codeBare.innerHTML = boot + d.getTime()
            
    
        }
    }

    if (reponcesFinal === "1 Semaine") {

        question.style.display = "none"


        document.getElementById("entrainement").style.display = "none"
        document.getElementById("result").style.display = "block"
        

        document.getElementById("btnentrainement5").style.display = "none"
        document.getElementById("btnentrainement6").style.display = "block"
        point++


      
        }
    



    else {
        question.style.display = "none"

        document.getElementById("entrainement").style.display = "none"
        document.getElementById("result").style.display = "block"

        document.getElementById("btnentrainement5").style.display = "none"
        document.getElementById("btnentrainement6").style.display = "block"
        erreur++
      
        
        
    }







}











function auto6() {


    document.getElementById("result").style.display = "none";
    document.getElementById("autoUn").style.display = "block"
    document.getElementById("entrainement").style.display = "none"
    document.getElementById("btnentrainement6").style.display = "none"
    document.getElementById("btnAutre").style.display = "block"












    point = 0
    erreur = 0
}






var forfaitAuto = {

    voiture: "500 $",
    Moto: "500 $",
    Camion: "300$",
    Bateau: "700$",
    promoEnCours: "20% Pour tout Nouveaux arrivant"



}

function PrixAuto() {

    document.getElementById("prixAuto").style.display = "block"
    document.getElementById("voiture").innerHTML = forfaitAuto["voiture"]
    document.getElementById("moto").innerHTML = forfaitAuto["Moto"]
    document.getElementById("camion").innerHTML = forfaitAuto["Camion"]
    document.getElementById("bateau").innerHTML = forfaitAuto["Bateau"]
    document.getElementById("autoUn").style.display = "none"
    document.getElementById("btnentrainement7").style.display = "block"
    document.getElementById("btnAutre").style.display = "none"




}




function auto7() {
    document.getElementById("prixAuto").style.display = "none"
    document.getElementById("btnAutre").style.display = "block"
    document.getElementById("autoUn").style.display = "block"
    document.getElementById("btnentrainement7").style.display = "none"

}

// Vailidé 


