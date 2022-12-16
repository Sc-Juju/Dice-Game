const randomNum = Math.floor(Math.random() * 6) + 1;
const randomDice = "dice" + randomNum + ".png";

const randomSrc = "images/" + randomDice;
const image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomSrc);

const randomNum2 = Math.floor(Math.random() * 6) + 1;

const randomImgSrc2 = "images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

if(randomNum > randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNum < randomNum2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else(randomNum = randomNum2){
    document.querySelector("h1").innerHTML = "Draw!";
}