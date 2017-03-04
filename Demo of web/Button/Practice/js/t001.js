// var tmp = document.getElementById('exb');
// tmp.addEventListener('mouseover', showtarget, false);

// function showtarget(ev) {
//   ev.preventDefault();
//   console.log(ev.target);
//   console.log(ev.target.classList.toggle('x'));
// }

// var body = document.querySelector("body");



var btn = document.querySelector("#btn");

console.log(btn);
console.log("load btn");

var toggleMenu = function(ev) {
  // ev.preventDefault();
  document.getElementById('exb').classList.toggle('x');
  document.getElementById('exb2').classList.toggle('x');
  console.log("toggle");
};

// log 显示的明明是 onclick 事件，绑定时候却不得不使用 click，坑！

btn.addEventListener('click', toggleMenu, false);
console.log("here");

var btnMenu = document.querySelector("#btnf");

var toggleMenu2 = function(ev) {
  // ev.preventDefault();
  document.getElementById('exb').classList.toggle('x');
  document.getElementById('exb2').classList.toggle('x');
  document.getElementById('exb3').classList.toggle('x');
  console.log("toggle Menu");
};
btnMenu.addEventListener('click', toggleMenu2, false);

var scaleValue = 0.8;

function changeScale(val) {
  btnMenu.style.transform = "scale(" + val + ")";
}



var btnB = document.querySelector("#btn-bigger");
var btnBigger = function(ev) {
  scaleValue = scaleValue + 0.01;
  changeScale(scaleValue);
};
btnB.addEventListener('click', btnBigger, false);

var btnS = document.querySelector("#btn-smaller");
var btnSmaller = function(ev) {
  scaleValue = scaleValue - 0.01;
  changeScale(scaleValue);
};

btnS.addEventListener('click', btnSmaller, false);

