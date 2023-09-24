let noOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfDrumButtons ; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    console.log(this);
})
}

// Remember, 'this' is like saying 'THIS thing in particular'
// Should we switch statement this instead of if/else?
/*var audio = new Audio('Drumkit/sounds/tom-1.mp3');
    audio.play(); */