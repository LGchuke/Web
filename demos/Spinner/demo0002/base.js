var items = document.querySelectorAll('.item');

var ca = [
  '#000',
  '#222',
  '#444',
  '#666',
  '#888',
  '#aaa',
  '#ccc',
  '#eee',
  ];



let c = 0;
const d = ca.length * 10;
const l = items.length;
const delay = 17 * 6;

for(let i = 0; i < items.length; i++) {
  items[i].style.background = ca[i];
}

function f() {

  for(let j = 1; j < d; j++) {
    console.log(j);
    setTimeout(() => {
      for(let i = 0; i < items.length; i++) {
        items[i].style.background = ca[(i+j)%l];
      }
    }, delay * j);
  }
}

f();
