var iCount = 36;
var deg = 360 / parseFloat(iCount);
var delay = 1000 / 60.0;

var etUl = document.querySelector('.et-wrap ul');
var fragment = document.createDocumentFragment();
var tmpLi = null;


for(let i = 0; i < iCount; i++) {
  tmpLi = document.createElement('li');
  tmpLi.classList.add('et-item');

  fragment.appendChild(tmpLi);
}

etUl.innerHTML = '';
etUl.appendChild(fragment);

var items = document.querySelectorAll('.et-item');


var fFlag = false;
function a(e, i) {
  e.classList.toggle('switch');
  setTimeout(() => {
    e.style.transform = 'rotate(' + deg * i + 'deg)';
  }, delay * i++);
}

function b(e, i) {
  e.classList.toggle('switch');
  setTimeout(() => {
    e.style.transform = 'rotate(0deg)';
  }, delay * i++);
}

var tx = (function() {
  var i = 0;
  if(fFlag) {
    for (let item of items) {
      b(item, i++);
    }
  } else {
    for (let item of items) {
      a(item, i++);
    }
  }
  fFlag = !fFlag;

});

var wx = (function() {
  const count = 20;
  var i = 0;
  while(i < count) {
    setTimeout(() => {
      tx();
    }, 400 * i++);
  }
  console.log('end wx()');
});