(() => {
  var b = document.getElementById('btn');
  var m = document.querySelector('.modal-container');
  b.addEventListener('click', () => {
    // console.log('btn');
    m.classList.add('active');
  });

  var c = document.querySelector('.modal.close-modal-area');
  c.addEventListener('click', () => {
    // console.log('close');
    m.classList.remove('active');
  });
})();

