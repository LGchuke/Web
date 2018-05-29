// let items = document.querySelectorAll('.item');

// for (let i = 0; i < items.length; i++) {
//   setTimeout(() => {
//     items[i].classList.add('enter');
//   }, i * 120);
// }

let wrap = document.querySelector('.wrap');


document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  // wrap.classList.remove('hidden');
});



var a = document.createElement('a');
a.href = './test.png';
a.download = "test.png";
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
