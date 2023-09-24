let noOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfDrumButtons ; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    let buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
        case "w":
            var audio = new Audio('Drumkit/sounds/tom-1.mp3');
            audio.play()
            break;
        case "a":
            var audio = new Audio('Drumkit/sounds/tom-2.mp3');
            audio.play()
            break;
        case "s":
            var audio = new Audio('Drumkit/sounds/tom-3.mp3');
            audio.play()
            break;
        case "d":
            var audio = new Audio('Drumkit/sounds/tom-4.mp3');
            audio.play()
            break;
        case "j":
            var audio = new Audio('Drumkit/sounds/crash.mp3');
            audio.play()
            break;
        case "k":
            var audio = new Audio('Drumkit/sounds/kick-bass.mp3');
            audio.play()
            break;
        case "l":
            var audio = new Audio('Drumkit/sounds/snare.mp3');
            audio.play()
            break;
    
        default:
            break;
    }
})
}

// Remember, 'this' is like saying 'THIS thing in particular'
// Should we switch statement this instead of if/else?
/*var audio = new Audio('Drumkit/sounds/tom-1.mp3');
    audio.play(); */