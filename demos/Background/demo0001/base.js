let btns = document.querySelectorAll('.btn');

let items = document.querySelectorAll('.item-wrap');

[].map.call(btns, (btn, index) => {
  btn.addEventListener('click', () => {
    [].map.call(items, (item, i) => {
      if (i == index) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    [].map.call(btns, (btn, i) => {
      if (i == index) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  });
});
