var ca = document.getElementById('canvas');

if(ca.getContext) {
  var cot = ca.getContext('2d');

  cot.beginPath();

  var x = 300,
      y = 300,
      radius = 60,
      splitCount = 32.0;
      delay = 100;

  // cot.arc(100, 100, 99, 0, 2 * 0.75 * Math.PI, false);

  // cot.moveTo(194, 100);
  // cot.arc(100, 100, 94, 0, 2 * Math.PI, false);

  // cot.moveTo(10, 20);
  // cot.lineTo(20, 30);

  // cot.closePath();

  // cot.stroke();

  var tx = (function() {
    for (let i = 0; i < splitCount; i++) {
      setTimeout(() => {
        cot.arc(x, y, radius, 2.0 * (i / splitCount) * Math.PI, 2.0 * ((i + 1) / splitCount) * Math.PI, false);
        cot.stroke();
      }, delay * i);
    }
  });
  tx();
}