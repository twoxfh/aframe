// random num generator
function getRandomNumber(value, offset) {
  return Math.floor(Math.random() * value + offset);
}

// get either red or blue
function getRedOrBlue() {
  return getRandomNumber(10, 0) > 5 ? "blue" : "red";
}

AFRAME.registerComponent('cubespawner', {
  init: function() {
    this.timeStep = 0;
  },
  
  tick: function (time, timeDelta) {
    if (this.timeStep < 1000) {
      this.timeStep += timeDelta;
      return;
    }
    this.timeStep = 0;
    
    var cubeEl = this.el.components.pool__cubes.requestEntity();
    if (!cubeEl) {
      return;
    }
    
    var positionX = getRandomNumber(3, -1);
    var positionY = getRandomNumber(2, 1);
    var positionZ = -25;
    
    var cubeColor = getRedOrBlue();
    var num = Math.random();
    var eye = '';
    switch (true) {
      case (num < 0.3):
        eye = '0';
        break;
      case (num > 0.3 && num < 0.7):
        eye = '1';
        break;
      case (num > 0.7):
        eye = '2';
        break;
    }

    cubeEl.setAttribute('position', {x: positionX, y: positionY, z: positionZ});
    cubeEl.setAttribute('material', `color: ${cubeColor}`);
    cubeEl.setAttribute('class', 'cubes');
    if (eye===0){
    } else{
      cubeEl.setAttribute('layers', eye);
    }
    cubeEl.play();
  }
});