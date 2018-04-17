let header = document.querySelector('.header');
let appMenu = document.querySelector('.app-menu');

header.addEventListener('click', e => {
  appMenu.classList.toggle('toggle');
});
