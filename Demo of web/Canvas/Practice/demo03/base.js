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
  }

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

  cot.moveTo(0, 0);
  cot.lineTo(0 - 65, 0);

  cot.moveTo(0, 0);
  cot.lineTo(0, 0 - 85);

  cot.stroke();


  var splitCount = 30.0;
  var delay = 1000 / 60.0 * 2;

  var tx = (function() {
    for (let i = 0; i < splitCount; i++) {
      setTimeout(() => {
        cot.rotate(2 * Math.PI / splitCount * i);
        cot.moveTo(0, 0);
        cot.lineTo(0, 0 - 85);
        cot.stroke();
        cot.rotate(-2 * Math.PI / splitCount * i);
      }, delay * i);
    }
  });
  // another way
  // cot.save();
  // var tx = (function() {
  //   for (let i = 0; i < splitCount; i++) {
  //     setTimeout(() => {
  //       cot.rotate(2 * Math.PI / splitCount * i);
  //       cot.moveTo(0, 0);
  //       cot.lineTo(0, 0 - 85);
  //       cot.stroke();
  //       cot.restore();
  //       cot.save();
  //     }, delay * i);
  //   }
  // });
  // the third way

  tx();
}