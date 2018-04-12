let wrap = document.querySelector('.star-rating-wrap');

let handle = starWrap => {
  [].map.call(starWrap.children, item => {
    if (item.dataset.star < (starWrap.dataset.star + 1)) {
      item.classList.add('star-light');
    } else {
      item.classList.remove('star-light');
    }
  });
};

// wrap.addEventListener('mousemove', e => {
wrap.addEventListener('click', e => {
  if (e.target.classList.contains('star')) {
    if (e.target.dataset.star !== wrap.dataset.star) {
      wrap.dataset.star = e.target.dataset.star;
      handle(wrap);
    }
  }
});
