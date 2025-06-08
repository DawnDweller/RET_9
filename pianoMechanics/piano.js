var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

let w;
let a;
let s;
let d;
let f;
let g;
let h;
let j;
let k;
let l;

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("../soundsPiano/a6-82015.mp3");
      tom1.play();
      if ( a === 1 ) {
        w = 1;
        a = s = d = f = g = h = j = k = l = 0;
      }
      break;

    case "a":
      var tom2 = new Audio("../soundsPiano/a6-102820.mp3");
      tom2.play();
      if ( s === 2 ) {
        a = 1;
        w = s = d = f = g = h = j = k = l = 0;
      }
      break;

    case "s":
      var tom3 = new Audio('../soundsPiano/b6-82017.mp3');
      tom3.play();
      if ( h === 1 ) {
        s = 1;
        w = a = d = f = g = h = j = k = l = 0;
      }
      if ( j === 2 ) {
        s = 2;
        w = a = d = f = g = h = j = k = l = 0;
      }
      break;

    case "d":
      var tom4 = new Audio('../soundsPiano/c6-102822.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('../soundsPiano/d6-82018.mp3');
      snare.play();
      if ( h === 4 ) {
        j = 2;
        w = a = s = d = f = g = h = k = l = 0;
      } else if ( w !== 2 ) { //Control for this puzzle to be not solved again.
        j = 1; 
        w = a = s = d = f = g = h = k = l = 0;
      }
      break;

    case "k":
      var crash = new Audio('../soundsPiano/d6-82020.mp3');
      crash.play();
      if ( h === 2 ) {
        k = 1;
        w = a = s = d = f = g = h = j = l = 0;
      }
      break;

    case "l":
      var kick = new Audio('../soundsPiano/e6-82016.mp3');
      kick.play();
        if ( f === 1 ) {
            l = 1;
            w = a = s = d = f = g = h = j = k = 0;
        }
      break;

    case "f":
      var kick = new Audio('../soundsPiano/f6-102819.mp3');
      kick.play();
      if ( k === 1 ) {
        f = 1;
        w = a = s = d = g = h = j = k = l = 0;
      }
      break;

    case "g":
      var kick = new Audio('../soundsPiano/g6-82013.mp3');
      kick.play();
      if ( s === 1 ) {
        g = 1;
        w = a = s = d = f = h = j = k = l = 0;
      }
      break;

    case "h":
      var kick = new Audio('../soundsPiano/g6-82014.mp3');
      kick.play();
      if ( j === 1 ) {
        h = 1;
        w = a = s = d = f = g = j = k = l = 0;
      }
      if ( g === 1 ) {
        h = 2;
        w = a = s = d = f = g = j = k = l = 0;
      }
      if ( l === 1 ) {
        h = 3;
        w = a = s = d = f = g = j = k = l = 0;
      }
      if ( h === 3 ) {
        h = 4;
        w = a = s = d = f = g = j = k = l = 0;
      }
      if ( w === 1 ) {
        a = s = d = f = g = h = j = k = l = 0;
        w = 2;
        var unlockedSound = new Audio('../sounds/clickSound.mp3');
        unlockedSound.play();
        if (readStatus("fenceKey") === 0) {
         setTimeout(function () { 
        document.getElementById("fenceKey").style.visibility="visible";}, 500);
      }}
      break;
    /* jhsghkf l hhjsa wh */
    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
