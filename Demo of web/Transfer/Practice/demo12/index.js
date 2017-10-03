const box = document.querySelector('.box');
const cardinal = 5813247; // #58b3ff
const count = 31;
const delay = 16.7 * 8;
const delta = 8;
const h = outerHeight / count + 'px';

let frag = document.createDocumentFragment();
let loop = 0;


for (let i = 0; i < count; i++) {
  let div = document.createElement('div');
  div.classList.add('item');

  div.style.height = h;
  frag.appendChild(div);
}

box.appendChild(frag);

let fn = (c) => {
  for (let i = 0; i < count; i++) {
    let r = '#' + (5813247 - i * delta - c * 256 * 8).toString(16);
    box.children[i].style.backgroundColor = r;
  }
};

for (let i = 0; i < 150; i++) {
  setTimeout(() => {
    fn(loop++);
  }, delay * i);
}