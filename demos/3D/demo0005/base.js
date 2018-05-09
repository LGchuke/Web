let panel = document.querySelector('.panel');
let sliders = document.querySelectorAll('.slider');
let el = document.getElementById('el');


let x = y = z = 0;
const range = 50;
const edge = 180;

let setElStyle = () => {
  // console.log(x, y, z);
  el.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
};

let handleAxisX = (ret) => {
  x = (ret - range) / range * edge;
};

let handleAxisY = (ret) => {
  y = (ret - range) / range * edge;
};

let handleAxisZ = (ret) => {
  z = (ret - range) / range * edge;
};

[].map.call(sliders, (slider, index) => {
  let l = panel.offsetLeft + slider.offsetLeft;
  let w = slider.offsetWidth;
  let handler = slider.querySelector('.slider-handle');
  let track = slider.querySelector('.slider-track');

  let handleMouseMove = (e) => {
    e.preventDefault();
    let ret = parseInt((e.screenX - l) / w * range * 2);
    if (ret < 0) {
      ret = 0;
    }
    if (ret > range * 2) {
      ret = range * 2;
    }
    handler.style.left = ret + '%';
    track.style.width = ret + '%';
    if (index === 0) {
      handleAxisX(ret);
    }
    if (index === 1) {
      handleAxisY(ret);
    }
    if (index === 2) {
      handleAxisZ(ret);
    }
    // console.log(e.clientX, e.offsetX, e.screenX);
    setElStyle();
  };

  let flag = true;
  slider.addEventListener('mousedown', e => {
    e.preventDefault();
    if (flag) {
      document.body.addEventListener('mousemove', handleMouseMove, false);

      document.addEventListener('mouseup', e => {
        e.preventDefault();
        document.body.removeEventListener('mousemove', handleMouseMove, false);
        flag = true;
      });

      flag = false;
    }
  });

  slider.addEventListener('click', e => {
    e.preventDefault();
    handleMouseMove(e);
  });
});


