var drumLength = document.querySelectorAll(".drum").length;
for (var i = 0; i < drumLength; i++) {
    /* when clicking it */
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
/* when pressing the correct buttons */
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
/* for making a sound */
function makeSound(key){
    switch (key) {
        case "a":
          var tom1 = new Audio("./sounds/tom-1.mp3");
          tom1.play();
          break;
  
        case "s":
          var tom2 = new Audio("./sounds/tom-2.mp3");
          tom2.play();
          break;
        case "d":
          var tom3 = new Audio("./sounds/tom-3.mp3");
          tom3.play();
          break;
  
        case "f":
          var tom4 = new Audio("./sounds/tom-4.mp3");
          tom4.play();
          break;
  
        case "j":
          var snare = new Audio("./sounds/snare.mp3");
          snare.play();
          break;
  
        case "k":
          var crash = new Audio("./sounds/crash.mp3");
          crash.play();
          break;
  
        case "l":
          var kick = new Audio("./sounds/kick-bass.mp3");
          kick.play();
          break;
  
        default:
          break;
      }
}
/* for animation */
function buttonAnimation(currentKey){
    var activeButton =  document.querySelector("."+currentKey);
    activeButton.classList.add("pressed"); /* adding pressed class */

    setTimeout(function(){ /* removing it again after we add it */
        activeButton.classList.remove("pressed");
    }, 100);
}