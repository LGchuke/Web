var items = document.querySelectorAll('.et-item');

var tx = (function() {
  var i = 0;
  for (let item of items) {
    // console.log(item);
    // item.classList.toggle('switch');
    setTimeout(() => {
      item.classList.toggle('switch');
    }, 100 * i++);
  }
});

var wx = (function() {
  const count = 20;
  var i = 0;
  while(i < count) {
    setTimeout(() => {
      tx();
    }, 400 * i++);
  }
  console.log('end wx()');
});