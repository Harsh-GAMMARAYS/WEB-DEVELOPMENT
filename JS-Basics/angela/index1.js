const setDiceImage = (imageElement, randomNumber) => {
    imageElement.src = "images/dice" + randomNumber + ".png";
}

let randomNumber1 = Math.floor(Math.random() *6) + 1;
let randomNumber2 = Math.floor(Math.random() *6) + 1;

setDiceImage(document.querySelector(".img1"), randomNumber1);
setDiceImage(document.querySelector(".img2"), randomNumber2);

document.querySelector("h1").innerHTML = randomNumber1 > randomNumber2
    ? "🚩Player 1 wins"
    : randomNumber2 > randomNumber1
    ? "🚩Player 2 wins"
    : "Draw!";
