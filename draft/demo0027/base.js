let f1 = false;
let f2 = false;
let f3 = false;
let f4 = false;
let f5 = false;
let f6 = false;
let f7 = false;


let lis = document.querySelectorAll('ul li');

console.log(lis);

for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener('click', (e) => {
    e.preventDefault();
    lis[i].classList.toggle('active');
  })
}
