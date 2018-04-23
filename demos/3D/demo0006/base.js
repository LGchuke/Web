let btn01 = document.querySelector('.show-front');
let btn02 = document.querySelector('.show-back');
let btn03 = document.querySelector('.show-right');
let btn04 = document.querySelector('.show-left');
let btn05 = document.querySelector('.show-top');
let btn06 = document.querySelector('.show-bottom');

let btn07 = document.getElementById('toggle-backface-visibility');

let el = document.getElementById('el');

btn01.addEventListener('click', () => {
  el.style.transform = 'translateZ(-100px)';
});
btn02.addEventListener('click', () => {
  el.style.transform = 'translateZ(-100px) rotateX(-180deg)';
});
btn03.addEventListener('click', () => {
  el.style.transform = 'translateZ(-100px) rotateY(-90deg)';
});
btn04.addEventListener('click', () => {
  el.style.transform = 'translateZ(-100px) rotateY(90deg)';
});
btn05.addEventListener('click', () => {
  el.style.transform = 'translateZ(-100px) rotateX(-90deg)';
});
btn06.addEventListener('click', () => {
  el.style.transform = 'translateZ(-100px) rotateX(90deg)';
});

btn07.addEventListener('click', () => {
  el.classList.toggle('transparent');
});
