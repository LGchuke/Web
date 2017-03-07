// window.addEventListener('load', function() { ... }, false);

var Switch = (function() {
  var flag = false;
  return {
    get_flag: function() {
      return flag;
    },
    ss: function() {
      flag = !flag;
      return flag;
    }
  };
})();


// console.log( Switch.ss() );
// console.log( Switch.get_flag() );
// console.log( Switch.ss() );
// console.log( Switch.get_flag() );

window.onload = function() {
  width = window.innerWidth;
  height = window.innerHeight;
  var pattern = Trianglify({
      width: width,
      height: height
  });
  var pattern2 = Trianglify({
      width: width,
      height: height
  });
  var bg1 = document.querySelector('#bg1');
  var bg2 = document.querySelector('#bg2');
  var btn = document.querySelector('#btn-switch');

  console.log(bg1.style);
  // bg1.style.width = width + "px";
  // bg1.style.height = height + "px";
  // bg1.style.backgroundImage = 'url(' + pattern.png() + ')';
  // bg2.style.width = width + "px";
  // bg2.style.height = height + "px";
  // bg2.style.backgroundImage = 'url(' + pattern2.png() + ')';
  var bgWidth = width + "px";
  var bgHeight = height + "px";
  var styleString = "width: " + bgWidth + "; height: " + bgHeight;
  // 如何根据非数字序号确定相应 css 表?
  document.styleSheets[0].addRule(".bg", styleString);
  styleString = "background-image: " + 'url(' + pattern.png() + ')';
  document.styleSheets[0].addRule("#bg1", styleString);
  styleString = "background-image: " + 'url(' + pattern2.png() + ')';
  document.styleSheets[0].addRule("#bg2", styleString);
  console.log(bg1.style);

  btn.addEventListener('click', function() {
    var flag = Switch.get_flag();
    if(!flag) {
      bg1.classList.toggle('switch');
      bg2.classList.toggle('switch');
      Switch.ss();
      console.log("bg2 show");
    } else {
      bg1.classList.toggle('switch');
      bg2.classList.toggle('switch');
      Switch.ss();
      console.log("bg1 show");
    }
  }, false);
};

