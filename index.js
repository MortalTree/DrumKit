// NOTE: this is adding an event listener that calls an existing function
// document.querySelector("button").addEventListener("click",handleClick);
//
// function handleClick() {
//   alert("I got clicked!");
// }



// NOTE: this is doing the same thing, except using an anonymous function
// document.querySelector("button").addEventListener("click",function () {
//   alert("I got clicked all up!");
// });



// NOTE: this loop will add the listener to each .drum class button
// and pass the html of the button to the FUNCTION that controls
// which sounds get played for which letters (in this case clicked)
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function () {
    // this.style.color = "white";
    var buttonInnerHTML = this.innerHTML;
    keyListener(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// This is for the keydown functionality - it is listening to the WHOLE document
// instead of just certain classes as above. Still an anonymous function.
document.addEventListener("keydown", function(event) {
  keyListener(event.key);
  buttonAnimation(event.key);
});

// create a function for the switch case
function keyListener(e) {
  switch(e) {
    case "w":
        var crashy = new Audio("sounds/crash.mp3");
        crashy.play();
      break;

    case "a":
        var snarey = new Audio("sounds/snare.mp3");
        snarey.play();
      break;

    case "s":
        var kicky = new Audio("sounds/kick-bass.mp3");
        kicky.play();
      break;

    case "d":
        var tomy1 = new Audio("sounds/tom-1.mp3");
        tomy1.play();
      break;

    case "j":
        var tomy2 = new Audio("sounds/tom-2.mp3");
        tomy2.play();
      break;

    case "k":
        var tomy3 = new Audio("sounds/tom-3.mp3");
        tomy3.play();
      break;

    case "l":
        var tomy4 = new Audio("sounds/tom-4.mp3");
        tomy4.play();
      break;

    default: console.log(e);

  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
      activeButton.classList.remove("pressed");
  }, 100);

}

// NOTE: This is the anonymous function which was fine when we only needed to listen for one
// thing. But since we need to listen for clicks and keys, we have created a function
// above.

// // NOTE: this loop will add the listener to each .drum class button
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click",function () {
//     // this.style.color = "white";
//
//     var buttonInnerHTML = this.innerHTML;
//
//     switch (buttonInnerHTML) {
//       case "w":
//           var crash = new Audio("sounds/crash.mp3");
//           crash.play();
//         break;
//
//       case "a":
//           var snare = new Audio("sounds/snare.mp3");
//           snare.play();
//         break;
//
//       case "s":
//           var kickBass = new Audio("sounds/kick-bass.mp3");
//           kickBass.play();
//         break;
//
//       case "d":
//           var tom1 = new Audio("sounds/tom-1.mp3");
//           tom1.play();
//         break;
//
//       case "j":
//           var tom2 = new Audio("sounds/tom-2.mp3");
//           tom2.play();
//         break;
//
//       case "k":
//           var tom3 = new Audio("sounds/tom-3.mp3");
//           tom3.play();
//         break;
//
//       case "l":
//           var tom4 = new Audio("sounds/tom-4.mp3");
//           tom4.play();
//         break;
//
//       default: console.log(buttonInnerHTML);
//
//     }
//   });
// }
