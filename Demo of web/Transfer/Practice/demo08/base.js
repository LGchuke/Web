var startPoint = 16;
var randomRange = 8;
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
// var ar = [4, 2, 3, 1, 7, 5, 6, 11, 9, 8, 10];

console.log(ar);

var items = document.querySelectorAll('.item');
var h = 24;

delay = 120;


for (let i = 0; i < ar.length; i++) {
  items[i].style.height = ar[i] * h + "px";
}

/*
 * Quick Sort
 */
// Array.prototype.quick_sort = function() {
// 	var len = this.length;
// 	if (len <= 1)
// 		return this.slice(0);
// 	var left = [];
// 	var right = [];
// 	var mid = [this[0]];
// 	for (var i = 1; i < len; i++)
// 		if (this[i] < mid[0])
// 			left.push(this[i]);
// 		else
// 			right.push(this[i]);
// 	return left.quick_sort().ar.concat(mid.concat(right.quick_sort().ar));
// };


var count = 1;
var t = function(ar, sp=0) {
  var len = ar.length;
  if (len <= 1)
		return ar.slice(0);
	var left = [];
	var right = [];
  var mid = [ar[0]];
  for (let i = 1; i < len; i++)
		if (ar[i] < mid[0]) {
			left.push(ar[i]);
    }
		else
			right.push(ar[i]);
  
  // console.log(sp);
  // console.log('step: ' + count);
  setTimeout(() => {
    var tmp = left.concat(mid.concat(right));
    console.log(tmp);
    for (let j = 0, k = sp; j < tmp.length; j++, k++) {
      items[k].style.height = tmp[j] * h + 'px';
    }
    
  }, delay * 2 * count++);
  return t(left, sp).concat(mid.concat(t(right, sp + left.length + 1)));
}


t(ar);
console.log('Steps: ' + (count - 1));