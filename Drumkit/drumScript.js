let noOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfDrumButtons ; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    alert("Clicked!");
})

}


