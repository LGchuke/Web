// window.requestAnimFrame = (function () {
//   // return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
//   //   window.setTimeout(callback, 1000 / 60);
//   // };
//   return window.requestAnimationFrame;
// })();

var ca = document.getElementById('canvas');


if(ca.getContext) {
  var cot = ca.getContext('2d');

  cot.beginPath();

  var x = 300,
      y = 300,
      radius = 60,
      splitCount = 8.0;
      delay = 20;

  cot.arc(x, y, 99, 0, 2 * Math.PI, false);

  cot.moveTo(x + 94, y);
  cot.arc(x, y, 94, 0, 2 * Math.PI, false);

  cot.translate(x, y);

  // cot.stroke();

  var splitCount = 32.0;
  var delay = 1000 / 60.0 * 2;


  var hue = 217,
      i = 0,
      f = true;
  function animation() {
    // cot.globalCompositeOperation = 'source-over';
    // cot.globalAlpha = 0.8;
    // cot.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
    // cot.strokeStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
    cot.strokeStyle = '#333';
    cot.globalCompositeOperation = 'source-over';
    // cot.globalCompositeOperation = 'lighter';

    cot.rotate(2 * Math.PI / splitCount * i);
    cot.moveTo(0, 0);
    cot.lineTo(0, 0 - 85);
    cot.stroke();
    cot.rotate(-2 * Math.PI / splitCount * i++);
    console.log(i);
    if(i >= splitCount) {
      i = 0;
      if(f) {
        // cot.strokeStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
        hue = 22;
        f = !f;
        cot.strokeStyle = '#fff';
      } else {
        // cot.strokeStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
        hue = 217;
        f = !f;
        cot.strokeStyle = '#333';
      }
    }
    window.requestAnimationFrame(animation);
  }

  animation();
}