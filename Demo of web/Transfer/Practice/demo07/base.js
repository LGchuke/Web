var startPoint = 8;
var randomRange = 5;
var length = startPoint + Math.random() * randomRange;
length = Math.ceil(length);
// length = 11;

// 创建并插入节点
var fragment = document.createDocumentFragment();
for (let i = 0; i < length; i++) {
  let tmp = document.createElement('div');
  tmp.classList.add('item');
  fragment.appendChild(tmp);
}

let x = document.querySelector('.box');
x.innerHTML = '';
x.appendChild(fragment);

// 生成随机数组
var ar = function(l) {
  let t = [];
  for (let i = 1; i < l + 1; i++) {
    t.push(i);
  }
  for (let i = 1; i < l + 1; i++) {
    let j = Math.floor(Math.random() * (l - 1));
    let tmp = t[j];
    t[j] = t[j+1];
    t[j+1] = tmp;
  }
  return  t;
}(length);
// var ar = [4, 2, 3, 1, 7, 5, 6, 8, 9, 10, 11];

console.log(ar);

var items = document.querySelectorAll('.item');
var h = 24;

delay = 120;


for (let i = 0; i < ar.length; i++) {
  items[i].style.height = ar[i] * h + "px";
}

// for (let i = 0; i < ar.length; ) {
//   for (let j = i + 1; j < ar.length; ) {
//     setTimeout(() => {
//       if (ar[i] > ar[j]) {
//         var t = ar[i];
//         ar[i] = ar[j];
//         ar[j] = t;
//         for (let k = 0; k < ar.length; k++) {
//           items[k].style.height = ar[k] * h + "px";
//         }
//         i++;
//         j++;
//       }
//       console.log("step: " + i + '-' + j);
//     }, delay);
//   }
// }

var i = 0;
var j = i + 1;
var t;
var count = 1;
var test = function() {
  if ((i) < ar.length - 1) {
    if ((j) < ar.length) {
      setTimeout(() => {
        if (ar[i] < ar[j]) {
          t = ar[i];
          ar[i] = ar[j];
          ar[j] = t;
          for (let k = 0; k < ar.length; k++) {
            items[k].style.height = ar[k] * h + 'px';
          }
        }
        console.log('count: ' + count++);
        console.log('step: ' + i + '-' + j);
        j++;
      }, delay);
    } else {
      i++;
      j = i + 1;
      console.log('count: ' + count++); // 冗余计数
    }
  } else {
    console.log(count + '-- exit');
  }

};

console.log('l: ' + length);
const n = length * (length + 1) / 2; // 要考虑到循环冗余
console.log('n: ' + n);
for (let c = 0; c < n; c++) {
  setTimeout(test, delay * c);
}