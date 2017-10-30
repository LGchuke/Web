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
  // tx();

  var image = document.images[0];
  cot.drawImage(image, 0, 0);

  cot.shadowOffsetX = 5;
  cot.shadowOffsetY = 5;
  cot.shadowBlur = 8;
  cot.shadowColor = '#333';

  cot.fillStyle = '#f00';
  cot.fillRect(10, 10, 50, 50);

  cot.fillStyle = '#00f';
  cot.fillRect(30, 30, 50, 50);

  var gd = cot.createLinearGradient(130, 130, 170, 170);

  gd.addColorStop(0, '#0f0');
  gd.addColorStop(1, '#333');

  cot.fillStyle = '#f00';
  cot.fillRect(110, 110, 50, 50);

  cot.fillStyle = gd;
  cot.fillRect(130, 130, 50, 50);

  cot.fillStyle = gd;
  cot.fillRect(150, 150, 50, 50);

  x = y = -300;

  cot.translate(x, y);
  cot.moveTo(0, 0);

  gd2 = cot.createRadialGradient(55, 55, 10, 55, 55, 30);

  gd2.addColorStop(0, '#0f0');
  gd2.addColorStop(1, '#333');

  cot.fillStyle = '#f00';
  cot.fillRect(10, 10, 50, 50);

  cot.fillStyle = gd2;
  cot.fillRect(30, 30, 50, 50);

  cot.fillStyle = gd2;
  cot.fillRect(50, 50, 50, 50);

  cot.fillStyle = gd2;
  cot.fillRect(70, 70, 50, 50);
}