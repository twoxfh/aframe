//Play the note
function playNote(element, audio, volume){


element.querySelector("a-sound").components.sound.stopSound();

  if(element.getAttribute("note")=="hat"){
    if(closedHat){
      element.querySelector("a-sound").setAttribute("src", "#"+audio+"-closed");
    }else{
      element.querySelector("a-sound").setAttribute("src", "#"+audio+"-open");
    }

  }else{

  element.querySelector("a-sound").setAttribute("src", "#"+audio);
  }

  
  element.querySelector("a-sound").setAttribute("volume", volume);
  element.querySelector("a-sound").setAttribute("autoplay", "true");
  element.querySelector("a-sound").components.sound.playSound();


}

//Stop the note
function stopNote(num){
  
}