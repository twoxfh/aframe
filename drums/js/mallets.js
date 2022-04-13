
var debug = document.querySelector("#debug");

//Get the position of my mallet hitpoints
var leftHit1 = document.querySelector("#leftmallethit1");
var rightHit1 = document.querySelector("#rightmallethit1");

var mallet1 = document.querySelector("#mallet1");
var mallet3 = document.querySelector("#mallet3");

var rightHand = document.querySelector("#rightHand");
var leftHand = document.querySelector("#leftHand");

var malletHeight = .3;
var malletRadius = .005;

var currentHeight = .3;
var currentRadius = .005;

var stickColor = "#654321";
var tipColor = "#FFFF88";

var toucher = true;

var closedHat = false;

var susnotes = [];

//RIGHT HAND MALLET 1
var mallet1 = document.createElement("a-entity");
mallet1.setAttribute("id", "mallet1");
mallet1.setAttribute("class", "mallet");
mallet1.setAttribute("position", "-0.00506 -0.01731 0");
mallet1.setAttribute("rotation", "-90 0 0");

var stick1 = document.createElement("a-cylinder");
stick1.setAttribute("segments-radial", "8");
stick1.setAttribute("segments-height", "1");
stick1.setAttribute("radius", malletRadius);
stick1.setAttribute("height", malletHeight);
stick1.setAttribute("color", stickColor);
stick1.setAttribute("position", "0 "+(malletHeight/2)+" 0");

var tip1 = document.createElement("a-cylinder");
tip1.setAttribute("segments-radial", "8");
tip1.setAttribute("segments-height", "1");
tip1.setAttribute("radius", malletRadius*2);
tip1.setAttribute("height", malletHeight/10);
tip1.setAttribute("color", tipColor);
tip1.setAttribute("position", "0 "+malletHeight+" 0");

var rightHit1 = document.createElement("a-box");
rightHit1.setAttribute("visible", "false");
rightHit1.setAttribute("id", "rightmallethit1");
rightHit1.setAttribute("color", "purple");
rightHit1.setAttribute("position", "0 "+malletHeight+" 0");
rightHit1.setAttribute("width", malletRadius*3)
rightHit1.setAttribute("height", malletRadius*3);
rightHit1.setAttribute("depth", malletRadius*3);
rightHit1.setAttribute("last-position", 0);
rightHit1.setAttribute("aabb-collider", "objects:.note;interval:1;");

mallet1.appendChild(stick1);
mallet1.appendChild(tip1);
mallet1.appendChild(rightHit1);
rightHand.appendChild(mallet1);

//LEFT HAND MALLET 1
var mallet3 = document.createElement("a-entity");
mallet3.setAttribute("id", "mallet3");
mallet3.setAttribute("class", "mallet");
mallet3.setAttribute("position", "-0.00506 -0.01731 0");
mallet3.setAttribute("rotation", "-90 0 0");

var stick3 = document.createElement("a-cylinder");
stick3.setAttribute("segments-radial", "8");
stick3.setAttribute("segments-height", "1");
stick3.setAttribute("radius", malletRadius);
stick3.setAttribute("height", malletHeight);
stick3.setAttribute("color", stickColor);
stick3.setAttribute("position", "0 "+(malletHeight/2)+" 0");

var tip3 = document.createElement("a-cylinder");
tip3.setAttribute("segments-radial", "8");
tip3.setAttribute("segments-height", "1");
tip3.setAttribute("radius", malletRadius*2);
tip3.setAttribute("height", malletHeight/10);
tip3.setAttribute("color", tipColor);
tip3.setAttribute("position", "0 "+malletHeight+" 0");

var leftHit1 = document.createElement("a-box");
leftHit1.setAttribute("visible", "false");
leftHit1.setAttribute("id", "leftmallethit1");
leftHit1.setAttribute("color", "purple");
leftHit1.setAttribute("position", "0 "+malletHeight+" 0");
leftHit1.setAttribute("width", malletRadius*3)
leftHit1.setAttribute("height", malletRadius*3);
leftHit1.setAttribute("depth", malletRadius*3);
leftHit1.setAttribute("last-position", 0);
leftHit1.setAttribute("aabb-collider", "objects:.note;interval:1;");

mallet3.appendChild(stick3);
mallet3.appendChild(tip3);
mallet3.appendChild(leftHit1);
leftHand.appendChild(mallet3);


function radiusChanger(step){
  currentRadius+=step;
  changeRadius(currentRadius);
}

function heightChanger(step){
  currentHeight+=step;
  changeHeight(currentHeight);
}

function resetRadius(){
  changeRadius(malletRadius);
  currentRadius = malletRadius;
}

function resetHeight(){
  changeHeight(malletHeight);
  currentHeight = malletHeight;
}

function changeRadius(newRadius){
  stick1.setAttribute("radius", newRadius);
  stick3.setAttribute("radius", newRadius);
  
  tip1.setAttribute("radius", newRadius*2);
  tip3.setAttribute("radius", newRadius*2);

  rightHit1.setAttribute("width", newRadius*3);
  rightHit1.setAttribute("height", newRadius*3);
  rightHit1.setAttribute("depth", newRadius*3);
  leftHit1.setAttribute("width", newRadius*3);
  leftHit1.setAttribute("height", newRadius*3);
  leftHit1.setAttribute("depth", newRadius*3);
}

function changeHeight(newHeight){
  stick1.setAttribute("height", newHeight);
  stick3.setAttribute("height", newHeight);

  stick1.setAttribute("position", "0 "+(newHeight/2)+" 0");
  stick3.setAttribute("position", "0 "+(newHeight/2)+" 0");
  
  tip1.setAttribute("position", "0 "+newHeight+" 0");
  tip3.setAttribute("position", "0 "+newHeight+" 0");

  rightHit1.setAttribute("position", "0 "+newHeight+" 0");
  leftHit1.setAttribute("position", "0 "+newHeight+" 0");

}

//Check if the mallet hit the notes
leftHit1.addEventListener("hitclosest", checaHit);
rightHit1.addEventListener("hitclosest", checaHit);

/*
rightHand.addEventListener("abuttondown", abuttondown);
rightHand.addEventListener("abuttonup", rightbuttonup);
rightHand.addEventListener("bbuttondown", bbuttondown);
rightHand.addEventListener("bbuttonup", rightbuttonup);

leftHand.addEventListener("xbuttondown", xbuttondown);
leftHand.addEventListener("xbuttonup", leftbuttonup);
leftHand.addEventListener("ybuttondown", ybuttondown);
leftHand.addEventListener("ybuttonup", leftbuttonup);


rightHand.addEventListener("thumbstickmoved", rightthumbstickmoved);
leftHand.addEventListener("thumbstickmoved", leftthumbstickmoved);


rightHand.addEventListener("thumbstickdown", rightthumbstickdown);
leftHand.addEventListener("thumbstickdown", leftthumbstickdown);
*/


rightHand.addEventListener("gripchanged", rightgripchanged);
leftHand.addEventListener("gripchanged", leftgripchanged);

leftHand.addEventListener("triggerdown", lefttriggerdown);
leftHand.addEventListener("triggerup", lefttriggerup);


rightHand.addEventListener("triggerdown", righttriggerdown);
rightHand.addEventListener("triggerup", righttriggerup);

//Mallet hitting events
function rightgripchanged(e){
  
}

function leftgripchanged(e){
  
}


function leftthumbstickmoved(e){
  //e.detail.x & e.detail.y = -1 0 1
  //Aquí podemos poner el tono

  var atan = Math.abs((Math.atan2(e.detail.x, e.detail.y)*180/Math.PI+180)-360);
  

  if(Math.abs(e.detail.x)>.5||Math.abs(e.detail.y)>.5){
    //debug.setAttribute("value", (Math.atan2(e.detail.y,e.detail.x)*180/Math.PI+180));
    toneEntity.setAttribute("scale", ".5 .5 .5");
    for(var i=0;i<toneHelpers.length;i++){
      if(atan>((360/toneHelpers.length)*i-(360/toneHelpers.length)/2) &&
      atan<((360/toneHelpers.length)*i+(360/toneHelpers.length)/2)){
        //debug.setAttribute("value", i);
        if(i!=currentTone){
          currentTone = i;
          changeTone(i);
        }
      }
    }

  }else{
      toneEntity.setAttribute("scale", "0 0 0");
      document.querySelector("#leftText").setAttribute("value", toneHelpers[currentTone].name);
  }
}


function rightthumbstickmoved(e){
  //Aquí podemos poner el acorde
   //e.detail.x & e.detail.y = -1 0 1

  var atan = Math.abs((Math.atan2(e.detail.x, e.detail.y)*180/Math.PI+180)-360);
  

  if(Math.abs(e.detail.x)>.5||Math.abs(e.detail.y)>.5){
    //debug.setAttribute("value", (Math.atan2(e.detail.y,e.detail.x)*180/Math.PI+180));
    modeEntity.setAttribute("scale", ".5 .5 .5");
    for(var i=0;i<modeHelpers.length;i++){
      if(atan>((360/modeHelpers.length)*i-(360/modeHelpers.length)/2) &&
      atan<((360/modeHelpers.length)*i+(360/modeHelpers.length)/2)){
        //debug.setAttribute("value", i);
         if(i!=currentMode){
          currentMode = i;
          changeMode(i);
        }
      }
    }

  }else{
      modeEntity.setAttribute("scale", "0 0 0");
      document.querySelector("#rightText").setAttribute("value", modeHelpers[currentMode].name);
  }
}

function leftthumbstickdown(e){
  currentTone = -1;
  changeTone(currentTone);
  document.querySelector("#leftText").setAttribute("value", "");
}

function rightthumbstickdown(e){
  currentMode = -1;
  changeMode(currentMode);
   document.querySelector("#rightText").setAttribute("value", "");
}

function lefttriggerdown(){

  var element = document.querySelector("#hatnote");
  var element2 = document.querySelector("#upperhat");
  
  element.querySelector("a-sound").components.sound.stopSound();
  element.querySelector("a-sound").setAttribute("src", "#hat-foot");
  element.querySelector("a-sound").setAttribute("volume", "1");
  element.querySelector("a-sound").setAttribute("autoplay", "true");
  element.querySelector("a-sound").components.sound.playSound();
  element2.emit("close");
  closedHat = true;
}

function lefttriggerup(){
  
  var element2 = document.querySelector("#upperhat");
  closedHat = false;
  element2.emit("open");
}

function righttriggerdown(){
  var element = document.querySelector("#bassdrum")
  
  element.querySelector("a-sound").components.sound.stopSound();
  element.querySelector("a-sound").setAttribute("src", "#kick-4");
  element.querySelector("a-sound").setAttribute("volume", "1");
  element.querySelector("a-sound").setAttribute("autoplay", "true");
  element.querySelector("a-sound").components.sound.playSound();
  element.parentElement.setAttribute("scale", "1.3 1.3 1.3");
  element.parentElement.emit("press");
}

function righttriggerup(){
  
}



function abuttondown(){
}

function bbuttondown(){
}

function xbuttondown(){
}

function ybuttondown(){
}

function rightbuttonup(){	
}

function leftbuttonup(){
}



 function checaHit(e){


  var worldPosition = new THREE.Vector3();

    var pasery = this.getAttribute("pasery");
    var posery = this.object3D.getWorldPosition(worldPosition).y;
    var paserx = this.getAttribute("paserx");
    var poserx = this.object3D.getWorldPosition(worldPosition).x;

    var velocity = Math.abs(pasery-posery)+Math.abs(paserx-poserx);

    nota = this.components['aabb-collider'].closestIntersectedEl.getAttribute("note");

    notaElement = this.components['aabb-collider'].closestIntersectedEl;


    if(toucher){
      notaElement.parentNode.setAttribute("scale", (1+velocity)+" "+(1+velocity)+" "+(1+velocity));  

    }else{
      notaElement.parentNode.setAttribute("scale", "1.2 1.2 1.2");  
    }

    //Emit this for the animation to play
    notaElement.parentNode.emit("press");

    
    if(toucher){
        playNote(notaElement, nota, velocity*5);
    }else{
        playNote(notaElement, nota, 1);
    }
    
 
    

    //Controller vibration
	this.parentNode.parentNode.components.haptics.pulse(1, 10);
  }