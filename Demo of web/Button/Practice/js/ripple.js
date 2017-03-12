var start_time = Date.now();

/* ======== Main ======== */

var buttonWidth = 172;
var buttonHeight = 62;
// 这边故意不用 Math.pow
// var Radius = Math.sqrt((buttonWidth * buttonWidth)/4.0 + (buttonHeight * buttonHeight)/4.0);
var RippleDuration = 10;
var speed = 4;

var buttons = document.getElementsByTagName('button');

for (var i = 0; i < buttons.length; i++) {
  console.log(buttons[i].event);
  buttons[i].onclick = function(e) {
    var offsetX = e.offsetX;
    var offsetY = e.offsetY;
    var RadiusX = (this.offsetWidth - offsetX > offsetX?this.offsetWidth - offsetX:offsetX);
    var RadiusY = (this.offsetHeight - offsetY > offsetY?this.offsetHeight - offsetY:offsetY);
    var maxRadius = Math.sqrt(Math.pow(RadiusX, 2) + Math.pow(RadiusY, 2));
    // var RadiusX = Math.max(buttonWidth - x, x);
    // var RadiusY = Math.max(buttonHeight - y, y);
    // var maxRadius = Math.sqrt(Math.pow(RadiusX, 2) + Math.pow(RadiusY, 2));
    // console.log(maxRadius);

    var inner = document.createElement('div');
    this.appendChild(inner);
    var that = this;
    inner.style.width = speed + 'px';
    inner.style.height = speed + 'px';
    inner.style.transform = 'scale(1)';
    inner.style.left = (offsetX - inner.offsetWidth/2) + 'px';
    inner.style.top = (offsetY - inner.offsetHeight/2) + 'px';
    var interval = setInterval(function () {

      inner.tmps = parseInt(inner.style.transform.slice(6).slice(0, -1)) + 1;
      console.log(inner.tmps);
      inner.style.transform = 'scale(' + inner.tmps + ')';

      inner.style.opacity = (inner.offsetWidth * inner.tmps)/maxRadius/2 + 0.2;
      if((inner.offsetWidth * inner.tmps) >= maxRadius*2 && (inner.offsetHeight * inner.tmps) >= maxRadius*2) {
        clearInterval(interval);
        that.removeChild(inner);
      }
    }, RippleDuration);
  };
}


window.onload = function init(argument) {
  console.log(argument);

  // var buttons = document.getElementsByTagName('button');

  // for (var i = 0; i < buttons.length; i++) {
  //   console.log(buttons[i].event);
  //   // buttons[i].onclick = displayEffect(buttons[i].event);

    // buttons[i].onmouseup = function(e) {
    //   var e = e || window.event,
    //       this_ = this,
    //       inner = this.children[0];
    //   // console.log(inner);
    //   if(inner != undefined) {
    //     // console.log("yes");
    //     var interval = setInterval(function () {
    //       inner.style.opacity = inner.style.opacity - speed/this_.offsetWidth;
    //       if(inner.style.opacity <= 0) {
    //         this_.removeChild(inner);
    //         clearInterval(interval);
    //       }
    //     }, RippleDuration);
    //   } else {
    //     // console.log("no");
    //   }

    // };
  // }
};

/* ======== Main End ======== */
var stop_time = Date.now();
console.log("this script last: " + (stop_time - start_time) + "ms");
start_time = null;
stop_time = null;