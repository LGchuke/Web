function htmlToElement(html) {
  let template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}


const root = document.getElementById('root');
const grid = document.querySelector('.grid');

let src = './0005.jpg';

let tdom = htmlToElement(`
  <div class='popover'>
    <div class='popover-inner'>
      <img src=${src} />
    </div>
  </div>
`);

let createImgDOM = src => {
  return htmlToElement(`
    <div class='item wrap'>
      <div class='img' style='background-image: url(${src})'></div>
    </div>
  `);
};

let handleData = imgs => {
  let frag = document.createDocumentFragment();
  [].map.call(imgs, (img, i) => {
    {/* console.log(img.path); */}
    frag.append(createImgDOM('./target/' + img.path));
  });

  grid.appendChild(frag);
};

let xhr = new XMLHttpRequest();
xhr.overrideMimeType('application/json');
xhr.open('GET', './img.json');
xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    const res = JSON.parse(xhr.response);
    handleData(res.imgs);
  }
};
xhr.send();
