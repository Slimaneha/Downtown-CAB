




var questionUn = {
    question: "Quelle est la limitation de vitesse en villes ?",
    a :"50KLM",
    b:"100KLM",
    c :"90KLM",
    

}

var question2 = {
    question: "Quelle vitesse sur une départementale ?",
    a :"150KLM",
    b:"130KLM",
    c :"100KLM",
    

}


var question3 = {
    question: "Que dois je faire quand le feu et rouge ?",
     a :"Je fonce et on verra ",
     b:"Je marque un temps d’arrêt et je passe ",
     c :"J’attends qui passe au vert ",
    

}



var question4 = {
    question: "dddddddddddd",
    reponcesUn :"dddddddd",
    reponces2:"dddddddddd",
    reponces3 :"ddddddddddddd",
    

}



var question5 = {
    question: "5Aarabaji Karim",
    reponcesUn :"ddddddddddddddd",
    reponces2:"ddddddddddddddddd",
    reponces3 :"dddddddddddddddd",
    

}

var question = document.getElementById('question')
var reponces1 = document.getElementById("reponcesUn"); 
var reponces2 = document.getElementById("reponces2"); 
var reponces3 = document.getElementById("reponces3"); 




function entrainement () {
    document.getElementById("autoUn").style.display="none"
    document.getElementById("entrainement").style.display="block"
    document.getElementById("btnAutre").style.display="none"
    document.getElementById("btnentrainementUn").style.display="block"
    question.innerHTML=questionUn["question"]; 
   reponces1.innerHTML=questionUn["a"]
   reponces2.innerHTML=questionUn["b"]
   reponces3.innerHTML=questionUn["c"]
   document.getElementById("points").style.display="block"
   document.getElementById("Points").innerHTML = point


}

point = 0 
erreur = 0

reponcesFinal= ""


function autoUn () {

    reponcesFinal= document.getElementById("formAuto").value
   

  
    
  
    if (reponcesFinal === "C" || reponcesFinal === "c"  ) {


        question.innerHTML=question2["question"]
        reponces1.innerHTML=question2["a"]
        reponces2.innerHTML=question2["b"]
        reponces3.innerHTML=question2["c"]
        point ++
        document.getElementById("Points").innerHTML = point
        document.getElementById("btnentrainementUn").style.display="none"
        document.getElementById("btnentrainement2").style.display="block"



    }
    else {
        question.innerHTML=question2["question"]
        reponces1.innerHTML=question2["a"]
        reponces2.innerHTML=question2["b"]
        reponces3.innerHTML=question2["c"]
        document.getElementById("Points").innerHTML = point
        document.getElementById("btnentrainementUn").style.display="none"
        document.getElementById("btnentrainement2").style.display="block"
        erreur ++
    }

}


function auto2 () {

    reponcesFinal= document.getElementById("formAuto").value
   

  
    
  
    if (reponcesFinal === "B" || reponcesFinal === "b"  ) {


        question.innerHTML=question3["question"]
        reponces1.innerHTML=question3["a"]
        reponces2.innerHTML=question3["b"]
        reponces3.innerHTML=question3["c"]
        point ++
        document.getElementById("Points").innerHTML = point
        document.getElementById("btnentrainement2").style.display="none"
        document.getElementById("btnentrainement3").style.display="block"



    }
    else {
        question.innerHTML=question3["question"]
        reponces1.innerHTML=question3["a"]
        reponces2.innerHTML=question3["b"]
        reponces3.innerHTML=question3["c"]
        
        document.getElementById("Points").innerHTML = point
        document.getElementById("btnentrainement2").style.display="none"
        document.getElementById("btnentrainement3").style.display="block"
        erreur ++
    }

}


function auto3 () {

    reponcesFinal= document.getElementById("formAuto").value
   

  
    
  
    if (reponcesFinal === "B" || reponcesFinal === "b"  ) {


        question.innerHTML=question4["question"]
        reponces1.innerHTML=question4["a"]
        reponces2.innerHTML=question4["b"]
        reponces3.innerHTML=question4["c"]
        point ++
        document.getElementById("Points").innerHTML = point
        document.getElementById("btnentrainement3").style.display="none"
        document.getElementById("btnentrainement4").style.display="block"



    }
    else {
        
        question.innerHTML=question4["question"]
        reponces1.innerHTML=question4["a"]
        reponces2.innerHTML=question4["b"]
        reponces3.innerHTML=question4["c"]
        document.getElementById("Points").innerHTML = point
        document.getElementById("btnentrainement3").style.display="none"
        document.getElementById("btnentrainement4").style.display="block"
        erreur ++
    }

}


function auto4 () {

    reponcesFinal= document.getElementById("formAuto").value
   

  
    
  
    if (reponcesFinal === "B" || reponcesFinal === "b"  ) {


        question.innerHTML=question5["question"]
        reponces1.innerHTML=question5["a"]
        reponces2.innerHTML=question5["b"]
        reponces3.innerHTML=question5["c"]
        point ++
        document.getElementById("Points").innerHTML = point
        document.getElementById("btnentrainement4").style.display="none"
        document.getElementById("btnentrainement5").style.display="block"



    }

    else {
        question.innerHTML=question5["question"]
        reponces1.innerHTML=question5["a"]
        reponces2.innerHTML=question5["b"]
        reponces3.innerHTML=question5["c"]
        erreur ++
        document.getElementById("Points").innerHTML = point
        document.getElementById("btnentrainement4").style.display="none"
        document.getElementById("btnentrainement5").style.display="block"
    }

}



 function auto5 () {
      question.style.display="none"
        reponces1.style.display="none"
        reponces2.style.display="none"
        reponces3.style.display="none"
        document.getElementById("erreur").innerHTML=erreur; 
        document.getElementById("pointsUn").innerHTML=point;
        document.getElementById("entrainement").style.display="none"
        document.getElementById("result").style.display="block"
        document.getElementById("Points").innerHTML = point
        document.getElementById("btnentrainement5").style.display="none"
        document.getElementById("btnentrainement6").style.display="block"



   

   
}




function auto6 () {


    document.getElementById("result").style.display="none"; 
    document.getElementById("autoUn").style.display="block"
    document.getElementById("entrainement").style.display="none"
    document.getElementById("btnentrainement6").style.display="none"
    document.getElementById("btnAutre").style.display="block"
    document.getElementById("Points").style.display="none"
    document.getElementById("points").style.display="none"



    point = 0 
    erreur = 0
}






var forfaitAuto = {

        voiture :"500 $", 
        Moto : "500 $",
        Camion: "300$", 
        Bateau : "700$", 
        promoEnCours : "20% Pour tout Nouveaux arrivant"
        


}

function PrixAuto () {

    document.getElementById("prixAuto").style.display="block"
    document.getElementById("voiture").innerHTML=forfaitAuto["voiture"]
    document.getElementById("moto").innerHTML=forfaitAuto["Moto"]
    document.getElementById("camion").innerHTML=forfaitAuto["Camion"]
    document.getElementById("bateau").innerHTML=forfaitAuto["Bateau"]
    document.getElementById("autoUn").style.display="none"
    document.getElementById("btnentrainement7").style.display="block"
    document.getElementById("btnAutre").style.display="none"




}


function auto7 () {
    document.getElementById("prixAuto").style.display="none"
    document.getElementById("btnAutre").style.display="block"
    document.getElementById("autoUn").style.display="block"
    document.getElementById("btnentrainement7").style.display="none"




}