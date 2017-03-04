// window.addEventListener('load', function() { ... }, false);

Switch = function() {
  var flag = false;
  console.log(flag == true);
  if(flag == true)
    flag = false;
  else
    flag = true;
  console.log("click");
  console.log(flag);
};

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

    return Switch();
  }, false);
};

