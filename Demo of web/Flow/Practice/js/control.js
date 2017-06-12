var btn = document.querySelector('.th-button');
var b1 = document.querySelector('#b1');

console.log(btn);

// 到了这里居然又不能够使用 onclick
// btn.addEventListener('click', function() {
//   // console.log(this);
//   // console.log(this.classList);
//   this.classList.toggle('x');
// }, false);

btn.addEventListener('click', function() {
  // this.classList.toggle('x');
  b1.classList.toggle('switch');
}, false);

btn.addEventListener('mousedown', function() {
  this.classList.toggle('x');
}, false);

btn.addEventListener('mouseup', function() {
  this.classList.toggle('x');
}, false);

btn.addEventListener('mouseleave', function() {
  this.classList.remove('x');
  // console.log(this.classList.remove('x'));

}, false);