function makeSound(key) {
    switch (key) {
        case "w":
            let tom_1 = new Audio('Drumkit/sounds/tom-1.mp3');
            tom_1.play()
            break;
        case "a":
            let tom_2 = new Audio('Drumkit/sounds/tom-2.mp3');
            tom_2.play()
            break;
        case "s":
            let tom_3 = new Audio('Drumkit/sounds/tom-3.mp3');
            tom_3.play()
            break;
        case "d":
            let tom_4 = new Audio('Drumkit/sounds/tom-4.mp3');
            tom_4.play()
            break;
        case "j":
            let crash = new Audio('Drumkit/sounds/crash.mp3');
            crash.play()
            break;
        case "k":
            let kick_bass = new Audio('Drumkit/sounds/kick-bass.mp3');
            kick_bass.play()
            break;
        case "l":
            let snare = new Audio('Drumkit/sounds/snare.mp3');
            snare.play()
            break;
    
        default:
            console.log(buttonInnerHTML.innerHTML)
            break;
}}

// Detecting button press, looping through the buttons to get all of them.

let noOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < noOfDrumButtons ; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    
})
}

// Detecting keyboard press

document.addEventListener("keydown", function(e) {
    makeSound(e.key)
})

// Remember, 'this' is like saying 'THIS thing in particular'

/* Below is the Constructor function to create the Audio objects
let audio = new Audio('Drumkit/sounds/tom-1.mp3');
    audio.play(); */
