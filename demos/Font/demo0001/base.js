window.onload = function() {
  var s1 = document.querySelector('#s1');
  var btn = document.querySelector('#btn-switch');

  btn.addEventListener('click', function() {
    s1.classList.toggle('switch');

  }, false);
};