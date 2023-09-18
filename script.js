let randomNumber1 = Math.floor(Math.random() * 6) + 1; // Random no. Between 1 and 6

let randomDiceImg1 = "dice" + randomNumber1 + ".png"; // use this to change the source of the image from say dice1.png to dice5.png
let randomImgSrc  = "images/" + randomDiceImg1;

//Then we need to change the attribute, by selecting it first via querySelectorAll

let img1 = document.querySelectorAll("img")[0] // Get the first image
img1.setAttribute("src", randomImgSrc) // First parameter is the attribute we want to change, second is what we want to change it to, like splicing

// Getting and setting the second:
let randomNumber2 = Math.floor(Math.random() * 6) + 1; // Random no. Between 1 and 6
let randomimgsrc2 = "images/dice" + randomNumber2 + ".png";
let img2 = document.querySelectorAll("img")[1].setAttribute("src", randomimgsrc2) // Get the second image and set

// Comparison logic 
if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
} else {
    document.querySelector("h1").innerHTML = "It's a Tie!"
}

// We can improve this by adding a button to refresh, rather than having to reset the page.