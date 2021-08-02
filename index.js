
// 1st part: detecting button press
for(i=0; i<document.querySelectorAll(".drum").length; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function (){
var innerButtonValue = this.innerHTML;
music(innerButtonValue);
animation(innerButtonValue);
 }
);
}


// 2nd part: detecting keyword press
document.addEventListener("keypress", function(event) {
music(event.key);
animation(event.key);
 }
);


// 3rd part: switch statement
function music(key) {

  switch (key) {
    case "w":
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
      break;

      case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
        break;

        case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
          break;

          case "d":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
            break;

              case "j":
              var audio = new Audio("sounds/crash.mp3");
              audio.play();
                break;

                case "k":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                  break;

                  case "l":
                  var audio = new Audio("sounds/snare.mp3");
                  audio.play();
                    break;
    default:
    console.log(innerButtonValue);
    break;
} };

function animation(currentkey) {
  var activeButton = document.querySelector("."+ currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
  
}
