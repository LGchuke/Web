window.onload = function() {var translateYValue = -63.8;
var adjustValue = 0.1;
var adjustValueS = 1;

var bg1 = document.querySelector("#bg-front-one");
var bg2 = document.querySelector("#bg-front-two");
var bg3 = document.querySelector("#bg-front-three");
// var infoY = document.querySelector("#info");
var infoY = document.getElementById("info");

function changeTranslateY(val) {
  bg1.style.transform = "translateX(" + val + "%)";
  bg2.style.transform = "translateX(" + val + "%)";
  bg3.style.transform = "translateX(" + val + "%)";
  infoY.innerHTML = val;
  // console.log(translateYValue);
}



/* 微调按钮 */
var btnL = document.querySelector("#btn-left");
var toL = function(ev) {
  translateYValue = translateYValue - adjustValue;
  changeTranslateY(translateYValue);
};

btnL.addEventListener('click', toL, false);

var btnR = document.querySelector("#btn-right");
var toR = function(ev) {
  translateYValue = translateYValue + adjustValue;
  changeTranslateY(translateYValue);
};

btnR.addEventListener('click', toR, false);

/* 粗调按钮 */
var btnL2 = document.querySelector("#btn-left2");
var toL2 = function(ev) {
  translateYValue = translateYValue - adjustValueS;
  changeTranslateY(translateYValue);
};

btnL2.addEventListener('click', toL2, false);

var btnR2 = document.querySelector("#btn-right2");
var toR2 = function(ev) {
  translateYValue = translateYValue + adjustValueS;
  changeTranslateY(translateYValue);
};

btnR2.addEventListener('click', toR2, false);
};