
var randomNumber1 ,randomNumber2;


function myFunction1(){
  randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
  var randomImage1 = "images/dice" + randomNumber1 + ".png" ;
   document.querySelectorAll("img")[0].setAttribute("src",randomImage1);
   document.querySelector("h1").innerHTML = "GO PLAYER 2" ;
  document.getElementById("b-2").style.visibility = "visible" ;
    document.getElementById("b-1").style.visibility = "hidden" ;
}
function myFunction2(){
 randomNumber2 = Math.floor(Math.random() * 6) + 1 ;
  var randomImage2 = "images/dice" + randomNumber2 + ".png" ;
   document.querySelectorAll("img")[1].setAttribute("src",randomImage2);
    document.getElementById("b-2").style.visibility = "hidden" ;
 if(randomNumber1 > randomNumber2)
 {
   document.querySelector("h1").innerHTML = "✔ Player1 WON";

 }

 else if (randomNumber1< randomNumber2) {
   document.querySelector("h1").innerHTML = "✔ Player2 WON";
 }

 else{
   document.querySelector("h1").innerHTML = "🤔 ITS A DRAW ";
 }



}
