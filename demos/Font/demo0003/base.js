window.onload = function() {
  var pre = document.querySelector('.th-caption-pre');
  var btn = document.querySelector('#btn-switch');

  btn.addEventListener('click', function() {
    pre.classList.toggle('switch');

  }, false);
};