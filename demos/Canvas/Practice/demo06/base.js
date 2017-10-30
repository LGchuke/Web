// window.requestAnimFrame = (function () {
//   // return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
//   //   window.setTimeout(callback, 1000 / 60);
//   // };
//   return window.requestAnimationFrame;
// })();

var ca = document.getElementById('canvas');


if(ca.getContext) {
  var cot = ca.getContext('2d');

  if (window.devicePixelRatio) {
    var hW = ca.width;
    var hH = ca.height;

    ca.width = hW * window.devicePixelRatio;
    ca.height = hH * window.devicePixelRatio;
    ca.style.width = hW;
    ca.style.height = hH;
    cot.scale(window.devicePixelRatio, window.devicePixelRatio);
    console.log('hehre');
  }

  cot.beginPath();

  cot.arc(600, 600, 99, 0, 2 * Math.PI, false);
  cot.stroke();
  cot.arc(600, 600, 80, 0, 2 * Math.PI, false);
  cot.stroke();
  cot.fillStyle = '#38d';

  cot.closePath();
  // cot.fill();

  // cot.beginPath();

  var x = 300,
      y = 300,
      radius = 60,
      splitCount = 8.0;
      delay = 20;

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
    cot.fillStyle = '#38d';
    cot.strokeStyle = '#0f0';
    cot.globalCompositeOperation = 'source-over';
    // cot.globalCompositeOperation = 'lighter';


    cot.arc(x, y, 99, 2 * Math.PI * (i / splitCount), 2 * Math.PI * ((i+1) / splitCount), false);
    i = i + 1;
    cot.stroke();
    // cot.closePath();
    // cot.fill();


    console.log(i);
    if(i >= splitCount) {
      i = 0;
      // cot.fillStyle = '#38d';

      return ;
      if(f) {
        cot.strokeStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
        hue = 22;
        f = !f;
        cot.strokeStyle = '#fff';
      } else {
        cot.strokeStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
        hue = 217;
        f = !f;
        cot.strokeStyle = '#0f0';
      }
    }
    window.requestAnimationFrame(animation);
  }

  animation();
}