var randomNum = Math.floor(Math.random() * 6) + 1
var randomImage = "images/" + "dice" + randomNum + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImage);

var randomNum2 = Math.floor(Math.random() * 6) + 1
var randomImage2 = "images/" + "dice" + randomNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if (randomNum > randomNum2)
{
    document.querySelector("h1").innerHTML = "🚩 PLAYER 1 WINS !"
}
else if (randomNum2 > randomNum)
{
    document.querySelector("h1").innerHTML = "🚩 PLAYER 2 WINS !"
}
else if (randomNum === randomNum2)
{
    document.querySelector("h1").innerHTML = "🚩 DRAW !"
}