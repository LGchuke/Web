var ca = document.getElementById('canvas');

if(ca.getContext) {
  var cot = ca.getContext('2d');

  cot.fillStyle = '#333';
  cot.fillRect(200, 200, 300, 300);

  cot.fillStyle = 'rgba(16, 133, 246, 0.8)';
  cot.fillRect(300, 300, 50, 50);


  cot.fillStyle = '#f00';
  cot.fillRect(10, 10, 50, 50);

  cot.fillStyle = 'rgba(0, 0, 255, 0.5)';
  cot.fillRect(30, 30, 50, 50);

  cot.strokeStyle = '#f00';
  cot.strokeRect(100, 100, 50, 50);

  cot.strokeStyle = 'rgba(0, 0, 255, 0.5)';
  cot.strokeRect(120, 120, 50, 50);

  cot.clearRect(40, 40, 10, 10);
}