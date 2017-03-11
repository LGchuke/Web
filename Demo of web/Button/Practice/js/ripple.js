/**
 * @init
 */
window.onload = function init(argument) {
  var start_time = Date.now();
  console.log(argument);
  /* ======== Main ======== */

  var buttonWidth = 172;
  var buttonHeight = 62;
  // 这边故意不用 Math.pow
  var Radius = Math.sqrt((buttonWidth * buttonWidth)/4.0 + (buttonHeight * buttonHeight)/4.0);
  var buttons = document.getElementsByTagName('button'), speed = 4;


  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (e) {
      var x = e.offsetX;
      var y = e.offsetY;
      var left = x - Radius;
      var top = y - Radius;
      var RadiusX = Math.max(buttonWidth - x, x);
      var RadiusY = Math.max(buttonHeight - y, y);
      var maxRadius = Math.sqrt(Math.pow(RadiusX, 2) + Math.pow(RadiusY, 2));
      console.log(maxRadius);
      var inner = document.createElement('div');
      this.appendChild(inner);
      var interval = setInterval(function () {
        inner.style.width = (inner.offsetWidth + speed) + 'px';
        inner.style.height = (inner.offsetWidth + speed) + 'px';
        inner.style.left = (x - inner.offsetWidth/2) + 'px';
        inner.style.top = (y - inner.offsetHeight/2) + 'px';
        inner.style.opacity = inner.offsetWidth/maxRadius/2;
        if(inner.offsetWidth >= maxRadius*2 && inner.offsetHeight >= maxRadius*2) {
          clearInterval(interval);
        }
      }, 10);




    };

  }






  /* ======== Main End ======== */
  var stop_time = Date.now();
  console.log("this script last: " + (stop_time - start_time) + "ms");
  start_time = null;
  stop_time = null;
};