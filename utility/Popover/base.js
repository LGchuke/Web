let btns = document.querySelectorAll('.btn');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', e => {
    new Popover({
      target: e.target
    });
  });
}
