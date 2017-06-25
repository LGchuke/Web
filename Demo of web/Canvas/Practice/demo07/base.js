var naive = document.getElementById('naive');
var hidef = document.getElementById('hidef');

if(naive.getContext) {
  var cot1 = naive.getContext('2d');
  cot1.font = '16px Palatino';
  cot1.fillText('El psy congraoo', 10, 20);

  var cot2 = hidef.getContext('2d');
  if (window.devicePixelRatio) {
    var hW = hidef.width;
    var hH = hidef.height;
    console.log(hW + ':' + hH);

    hidef.width = hW * window.devicePixelRatio;
    hidef.height = hH * window.devicePixelRatio;
    hidef.style.width = hW;
    hidef.style.height = hH;
    cot2.scale(window.devicePixelRatio, window.devicePixelRatio);
  }
  cot2.font = '16px Palatino';
  cot2.fillText('El psy congraoo', 10, 20);
}

// $(document).ready(function () {

//     // Output to Canvas without consideration of device pixel ratio
//     var naiveContext = $('#naive')[0].getContext('2d');
//     naiveContext.font = '16px Palatino';
//     naiveContext.fillText('El psy congraoo', 10, 20);

//     // Output to Canvas, taking into account devices such as iPhone 4 with Retina Display
//     var hidefCanvas = $('#hidef')[0];
//     var hidefContext = hidefCanvas.getContext('2d');

//     if (window.devicePixelRatio) {
//         var hidefCanvasWidth = $(hidefCanvas).attr('width');
//         var hidefCanvasHeight = $(hidefCanvas).attr('height');
//         var hidefCanvasCssWidth = hidefCanvasWidth;
//         var hidefCanvasCssHeight = hidefCanvasHeight;

//         $(hidefCanvas).attr('width', hidefCanvasWidth * window.devicePixelRatio);
//         $(hidefCanvas).attr('height', hidefCanvasHeight * window.devicePixelRatio);
//         $(hidefCanvas).css('width', hidefCanvasCssWidth);
//         $(hidefCanvas).css('height', hidefCanvasCssHeight);
//         hidefContext.scale(window.devicePixelRatio, window.devicePixelRatio);
//     }

//     hidefContext.font = "16px Palantino";
//     hidefContext.fillText("El psy congraoo", 10, 20);
// });