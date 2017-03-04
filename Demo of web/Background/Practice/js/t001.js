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

  console.log(height);
  console.log(bg1.style);
  bg1.style.width = width + "px";
  bg1.style.height = height + "px";
  console.log(bg1.style.width);
  bg1.style.backgroundImage = 'url(' + pattern.png() + ')';
  bg2.style.width = width + "px";
  bg2.style.height = height + "px";
  bg2.style.backgroundImage = 'url(' + pattern2.png() + ')';
  // console.log(pattern.png());

  btn.addEventListener('click', function() {
    var flag = Switch.get_flag();
    // console.log(flag);
    if(!flag) {
      // bg1.style.display = "none";
      // bg2.style.display = "block";
      bg1.classList.toggle('switch');
      bg2.classList.toggle('switch');
      Switch.ss();
      console.log("bg2 show");
    } else {
      bg1.classList.toggle('switch');
      bg2.classList.toggle('switch');
      // bg1.style.display = "block";
      // bg2.style.display = "none";
      Switch.ss();
      console.log("bg1 show");
    }
  }, false);
};

