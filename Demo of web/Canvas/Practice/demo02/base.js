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

  cot.moveTo(x, y);
  cot.lineTo(x, y - 85);

  cot.moveTo(x, y);
  cot.lineTo(x - 65, y);

  // cot.closePath();

  cot.font = 'bold 14px Arial';
  cot.textAlign = 'center'; // default is 'start'
  cot.textBaseline = 'middle';
  cot.fillText('12', x, y - 80);

  cot.stroke();

  if(cot.isPointInPath(x, y)) {
    console.log('yes');
  }

  // var tx = (function() {
  //   for (let i = 0; i < splitCount; i++) {
  //     setTimeout(() => {
  //       cot.arc(x, y, radius, 2.0 * (i / splitCount) * Math.PI, 2.0 * ((i + 1) / splitCount) * Math.PI, false);
  //       cot.stroke();
  //     }, delay * i);
  //   }
  // });
  // tx();

  var fontSize = 100;
  cot.font = fontSize + 'px Arial';
  var str = 'Test words!';

  while(cot.measureText(str).width > 140) {
    fontSize--;
    cot.font = fontSize + 'px Arial';
  }

  cot.fillText(str, 100, 10);
  cot.fillText('Font size is ' + fontSize + 'px', 100, 50);

}