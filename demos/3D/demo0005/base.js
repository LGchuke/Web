let panel = document.querySelector('.panel');
let sliders = document.querySelectorAll('.slider');
let el = document.getElementById('el');


let x = y = z = 0;

let setElStyle = () => {
  console.log(x, y, z);
  el.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
};

let handleAxisX = (ret) => {
  x = (ret - 50) / 50.0 * 90;
};

let handleAxisY = (ret) => {
  y = (ret - 50) / 50.0 * 90;
};

let handleAxisZ = (ret) => {
  z = (ret - 50) / 50.0 * 90;
};

[].map.call(sliders, (slider, index) => {
  let l = panel.offsetLeft + slider.offsetLeft;
  let w = slider.offsetWidth;
  let handler = slider.querySelector('.slider-handle');
  let track = slider.querySelector('.slider-track');

  let handleMouseMove = (e) => {
    let ret = parseInt((e.screenX - l) / w * 100);
    if (ret < 0) {
      ret = 0;
    }
    if (ret > 100) {
      ret = 100;
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

  // slider.addEventListener('mousedown', e => {
  //   slider.addEventListener('mousemove', handleMouseMove, false);

  //   document.body.addEventListener('mouseup', e => {
  //     slider.removeEventListener('mousemove', handleMouseMove, false);
  //   });
  // });
  slider.addEventListener('click', e => {
    handleMouseMove(e);
  });
});


