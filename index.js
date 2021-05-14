var randomNumber1 =Math.floor( Math.random()*6)+1;

var randomImages1="dice"+randomNumber1+".png";

var randomSrc1="images/"+randomImages1;

var image1=document.querySelectorAll("img")[0].setAttribute("src",randomSrc1);

var randomNumber2 =Math.floor( Math.random()*6)+1;

var randomImages2="dice"+randomNumber2+".png";

var randomSrc2="images/"+randomImages2;

var image2=document.querySelectorAll("img")[1].setAttribute("src",randomSrc2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="📢Player 1 wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="📢Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";

}