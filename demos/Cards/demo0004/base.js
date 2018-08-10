function htmlToElement(html) {
  let template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}

let arr = [
  {
    color: '#61ca91',
    order: 0,
    // front: '../../3D/demo0004/img/gif/dk01.gif',
    front: '../../3D/demo0004/img/cards/00.png',
    back: '../../3D/demo0004/img/12.png',
  },
  {
    color: '#a8c779',
    order: 1,
    // front: '../../3D/demo0004/img/gif/dk02.gif',
    front: '../../3D/demo0004/img/cards/01.png',
    back: '../../3D/demo0004/img/12.png',
  },
  {
    color: '#e5bc87',
    order: 2,
    // front: '../../3D/demo0004/img/gif/dk03.gif',
    front: '../../3D/demo0004/img/cards/02.png',
    back: '../../3D/demo0004/img/12.png',
  },
  {
    color: '#e48b83',
    order: 3,
    // front: '../../3D/demo0004/img/gif/dk04.gif',
    front: '../../3D/demo0004/img/cards/03.png',
    back: '../../3D/demo0004/img/12.png',
  },
  {
    color: '#d95e8b',
    order: 4,
    // front: '../../3D/demo0004/img/gif/dk05.gif',
    front: '../../3D/demo0004/img/cards/04.png',
    back: '../../3D/demo0004/img/12.png',
  },
  {
    color: '#aa81c2',
    order: 5,
    // front: '../../3D/demo0004/img/gif/dk06.gif',
    front: '../../3D/demo0004/img/cards/05.png',
    back: '../../3D/demo0004/img/12.png',
  },
  {
    color: '#2dcaf9',
    order: 6,
    // front: '../../3D/demo0004/img/gif/dk07.gif',
    front: '../../3D/demo0004/img/cards/06.png',
    back: '../../3D/demo0004/img/12.png',
  },
];

let wrap = document.querySelector('.card-wrap');

let tmp = document.createDocumentFragment();

tmp.appendChild(htmlToElement(`
  <div class='flipper' style='transform: translateY(${ 40 }px) translateZ(${ -1800 }px)'>
    <div class='front'>
      <img src='${ arr[6].front }' width='352px' height='523px' alt=''>
    </div>
    <div class='back'>
      <img src='../../3D/demo0004/img/12.png' width='352px' height='523px' alt=''>
    </div>
  </div>
`));

for (let i = 0; i < arr.length; i++) {
  arr[i].order += 1;

  let tranlateZ = arr[i].order * 300 - 300 * 7;
  tmp.appendChild(htmlToElement(`
    <div class='flipper' style='transform: translateY(${ arr[i].order * 40 }px) translateZ(${ tranlateZ }px)'>
      <div class='front'>
        <img src='${ arr[i].front }' width='352px' height='523px' alt=''>
      </div>
      <div class='back'>
        <img src='${ arr[i].back }' width='352px' height='523px' alt=''>
      </div>
    </div>
  `));
}



console.log(tmp);

wrap.appendChild(tmp);

let flag = 5;

window.addEventListener('keydown', (e) => {
// wrap.addEventListener('click', () => {
  console.log('The key code is: ' + e.keyCode);
  if ((e.key === 'b' || e.key === 'B') && e.metaKey) {
    // console.log(wrap.lastElementChild.style);
    for (let i = 1; i < 7; i++) {
      let tranlateZ = (i + 1) * 300 - 300 * 7;
      wrap.children[i].style.transform = `translateY(${ (i + 1) * 40 }px) translateZ(${ tranlateZ }px)`;
    }
    wrap.children[7].style.transform = `translateY(${ 23 * 40 }px) translateZ(${ (7 + 1) * 300 - 300 * 7 }px)`;

    wrap.children[7].addEventListener('transitionend', () => {
      wrap.removeChild(wrap.lastElementChild);
    });

    wrap.insertBefore(htmlToElement(`
      <div class='flipper' style='transform: translateY(${ 40 }px) translateZ(${ -1800 }px)'>
        <div class='front'>
          <img src='${ arr[flag].front }' width='352px' height='523px' alt=''>
        </div>
        <div class='back'>
          <img src='${ arr[flag].back }' width='352px' height='523px' alt=''>
        </div>
      </div>
    `), wrap.firstElementChild);

    if (flag !== 0) {
      flag--;
    } else {
      flag = 6;
    }
  }
});

wrap.addEventListener('click', e => {
  let tmp = e.target.parentNode.parentNode;
  // console.log(e.target.parentNode.parentNode);
  // console.log(tmp.classList.contains('flipper'));
  if (tmp.classList.contains('flipper')) {
    tmp.classList.toggle('flip');
    if (!tmp.classList.contains('flip')) {
      console.log(tmp.style.transform);
      tmp.style.transform += ' rotateY(180deg)';
      console.log(tmp.style.transform);
    } else {
      console.log(tmp.style.transform);
      tmp.style.transform = tmp.style.transform.slice(0, -15);
      console.log(tmp.style.transform);
    }
  }
});
