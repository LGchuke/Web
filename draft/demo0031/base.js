const lineCount = 8;
const lineHeight = 32;
const itemCount = 6;
const width = window.innerWidth;
const offsetWidth = -192;

let wrap = document.querySelector('.wrap');

function htmlToElement(html) {
  let template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}

let lineArr = [];

for (let i = 0; i < lineCount; i++) {
  let line = htmlToElement(`
    <div class='line' style='top: ${ lineHeight * i }px; left: ${ offsetWidth }px;'>
      <div class='box'>
        <div class='item'></div>
        <div class='item'></div>
        <div class='item'></div>
        <div class='item'></div>
        <div class='item'></div>
        <div class='item'></div>
      </div>
    </div>
  `);
  // console.log(line.querySelector('.box'));
  lineArr.push(line);
  wrap.appendChild(line);
}


let c = 0;
let i = 0;
let o1 = offsetWidth;
let o2 = offsetWidth;
let f = false;
let delta = 32;

let step = () => {
  if (o1 < width) {
    if (!f) {
      o1 += delta;
      lineArr[i].style.left = `${ o1 }px`;

      if (o1 > width + offsetWidth) {
        f = true;
        o2 = offsetWidth;
      }
    } else {
      o1 += delta;
      o2 += delta;
      lineArr[i].style.left = `${ o1 }px`;
      if (i + 1 < lineArr.length) {
        lineArr[i + 1].style.left = `${ o2 }px`;
      }
    }
    // c++;
    // console.log(c);

    window.requestAnimationFrame(step);
  } else {
    f = false;
    o2 += delta;
    if (i + 1 < lineArr.length) {
      lineArr[i + 1].style.left = `${ o2 }px`;
      o1 = o2;
    }
    i++;
    console.log(i);
    if (i === lineArr.length) {
      return;
    } else {
      window.requestAnimationFrame(step);
    }
  }
};

window.requestAnimationFrame(step);
