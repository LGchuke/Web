var items = document.querySelectorAll('.et-item');

(function() {
  var i = 0;
  for (let item of items) {
    // console.log(item);
    // item.classList.toggle('switch');
    setTimeout(() => {
      item.classList.toggle('switch');
    }, 100 * i++);
  }
}());