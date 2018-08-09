function htmlToElement(html) {
  let template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}

let arr = [
  {
    color: '#61ca91',
    order: 0
  },
  {
    color: '#a8c779',
    order: 1
  },
  {
    color: '#e5bc87',
    order: 2
  },
  {
    color: '#e48b83',
    order: 3
  },
  {
    color: '#d95e8b',
    order: 4
  },
  {
    color: '#aa81c2',
    order: 5
  },
  {
    color: '#2dcaf9',
    order: 6
  },
];

let wrap = document.querySelector('.card-wrap');

let tmp = document.createDocumentFragment();

tmp.appendChild(htmlToElement(`
  <div class='card clearfix' style='background-color: ${arr[6].color}; transform: translateX(-50%) translateY(${ 40 }px) translateZ(${ -1800 }px)'>
    <div class='card-mark' style='background-color: ${arr[6].color};'>
    </div>
    <div class='card-content'>
      <span>Card is a new component</span>
    </div>
  </div>
`));

for (let i = 0; i < arr.length; i++) {
  arr[i].order += 1;

  let tranlateZ = arr[i].order * 300 - 300 * 7;
  tmp.appendChild(htmlToElement(`
    <div class='card clearfix' style='background-color: ${arr[i].color}; transform: translateX(-50%) translateY(${ arr[i].order * 40 }px) translateZ(${ tranlateZ }px)'>
      <div class='card-mark' style='background-color: ${arr[i].color};'>
      </div>
      <div class='card-content'>
        <span>Card is a new component</span>
      </div>
    </div>
  `));
}



console.log(tmp);

wrap.appendChild(tmp);

let flag = 5;

wrap.addEventListener('click', () => {
  // console.log(wrap.lastElementChild.style);
  for (let i = 1; i < 7; i++) {
    let tranlateZ = (i + 1) * 300 - 300 * 7;
    wrap.children[i].style.transform = `translateX(-50%) translateY(${ (i + 1) * 40 }px) translateZ(${ tranlateZ }px)`;
  }
  wrap.children[7].style.transform = `translateX(-50%) translateY(${ 13 * 40 }px) translateZ(${ (7 + 1) * 300 - 300 * 7 }px)`;

  wrap.children[7].addEventListener('transitionend', () => {
    wrap.removeChild(wrap.lastElementChild);
  });

  wrap.insertBefore(htmlToElement(`
    <div class='card clearfix' style='background-color: ${arr[flag].color}; transform: translateX(-50%) translateY(${ 40 }px) translateZ(${ -1800 }px)'>
      <div class='card-mark' style='background-color: ${arr[flag].color};'>
      </div>
      <div class='card-content'>
        <span>Card is a new component</span>
      </div>
    </div>
  `), wrap.firstElementChild);

  if (flag !== 0) {
    flag--;
  } else {
    flag = 6;
  }
});
