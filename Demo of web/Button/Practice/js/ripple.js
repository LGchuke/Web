var start_time = Date.now();

/* ======== Main ======== */

var buttonWidth = 172;
var buttonHeight = 62;
// 这边故意不用 Math.pow
// var Radius = Math.sqrt((buttonWidth * buttonWidth)/4.0 + (buttonHeight * buttonHeight)/4.0);
var RippleDuration = 10;
var speed = 6;

var buttons = document.getElementsByTagName('button');

function createInner(x, y) {
  var inner = document.createElement('div');
  inner.style.width = speed + 'px';
  inner.style.height = speed + 'px';
  inner.style.transform = 'scale(1)';

  console.log("e.offsetX: " + x);
  console.log("e.offsetY: " + y);
  // console.log(inner.offsetHeight);
  // console.log((y - inner.offsetHeight/2));

  inner.style.left = (x - inner.offsetWidth/2) + 'px';
  inner.style.top = (y - inner.offsetHeight/2) + 'px';

  inner.scaleValue = parseInt(inner.style.transform.slice(6).slice(0, -1)) + 1;
  return inner;
}

for (var i = 0; i < buttons.length; i++) {
  console.log(buttons[i].event);
  buttons[i].onmousedown = function(e) {
    var offsetX = e.offsetX;
    var offsetY = e.offsetY;
    var RadiusX = (this.offsetWidth - offsetX > offsetX?this.offsetWidth - offsetX:offsetX);
    var RadiusY = (this.offsetHeight - offsetY > offsetY?this.offsetHeight - offsetY:offsetY);
    var maxRadius = Math.sqrt(Math.pow(RadiusX, 2) + Math.pow(RadiusY, 2));
    // var inner = document.createElement('div');
    var inner = createInner(offsetX, offsetY);
    this.appendChild(inner);
    var that = this;

    var interval = setInterval(function () {
      inner.scaleValue = parseInt(inner.style.transform.slice(6).slice(0, -1)) + 1;

      inner.style.transform = 'scale(' + inner.scaleValue + ')';
      inner.style.opacity = (inner.offsetWidth * inner.scaleValue)/maxRadius/2 + 0.2;
      if((inner.offsetWidth * inner.scaleValue) >= maxRadius*2 && (inner.offsetHeight * inner.scaleValue) >= maxRadius*2) {
        clearInterval(interval);
        var intervalClear = setInterval(function () {
          inner.style.opacity = inner.style.opacity - speed/that.offsetWidth ;
          if(inner.style.opacity <= 0) {
            that.removeChild(inner);
            clearInterval(intervalClear);
          }
        }, RippleDuration * 1.2);
      }
    }, RippleDuration);
  };
}


window.onload = function init(argument) {
  console.log(argument);

};

/* ======== Main End ======== */
var stop_time = Date.now();
console.log("this script last: " + (stop_time - start_time) + "ms");
start_time = null;
stop_time = null;