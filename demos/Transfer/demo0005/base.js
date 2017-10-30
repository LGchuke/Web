var ar = [2, 3, 5, 4, 1, 6];
var items = document.querySelectorAll('.item');
var h = 60;

delay = 600;


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
var test = function() {
  if ((i + 1) < ar.length) {
    if ((j + 1) < ar.length) {
      setTimeout(() => {
        if (ar[i] > ar[j]) {
          var t = ar[i];
          ar[i] = ar[j];
          ar[j] = t;
          for (let k = 0; k < ar.length; k++) {
            items[k].style.height = ar[k] * h + "px";
          }

        }
        j++;
        console.log("step: " + i + '-' + j);
      }, delay);
    } else {
      i++;
      j = i + 1;
    }
  }
};

for (let c = 0; c < 15; c++) {
  setTimeout(test, delay * c);
}