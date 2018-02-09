const log = console.log.bind(console);
let navItems = document.querySelectorAll('.sidenav .nav-item');
let main = document.querySelector('.main');

[].map.call(navItems, item => {
  // log(item);
  item.addEventListener('click', e => {
    e.preventDefault();
    item.classList.toggle('active');
  })
});

let handleItem = item => {
  // log(item);
  let div = document.createElement('div');
  div.className = 'sm-6 md-4 lg-3';

  let div2 = document.createElement('div');
  // 这边后面看情况，要不要 footer，要的话，改下格式，加个 if 判断
  div2.className = 'card no-footer';

  let a = document.createElement('a');
  a.className = 'card-heading link-tooltip';
  a.href = item.href;
  a.title = item.href;
  a.target = '_blank';
  let span = document.createElement('span');
  span.classList.add('card-icon');
  let img = document.createElement('img');
  img.src = item.icon;
  span.appendChild(img);
  a.appendChild(span);
  let span2 = document.createElement('span');
  span2.classList.add('card-title');
  span2.textContent = item.title;
  a.appendChild(span2);

  let div3 = document.createElement('div');
  div3.classList.add('card-body');
  div3.textContent = item.intro;

  div2.appendChild(a);
  div2.appendChild(div3);
  div.appendChild(div2);

  return div;
};

let handlePanel = panel => {
  // log(panel.name);
  let div1 = document.createElement('div');
  div1.classList.add('panel');

  // 成本并组装 .panel-title.card
  let div2 = document.createElement('div');
  div2.className = 'panel-title card';
  let i = document.createElement('i');
  i.className = panel.iClass; // panel-title 的 i class
  let span = document.createElement('span');
  span.textContent = panel.name;
  div2.appendChild(i);
  div2.appendChild(span);
  div1.appendChild(div2);

  let div22 = document.createElement('div');
  div22.classList.add('panel-body');
  let div3 = document.createElement('div');
  div3.classList.add('row');
  panel.items.map(item => {
    div3.appendChild(handleItem(item));
    div3.appendChild(handleItem(item));
    div3.appendChild(handleItem(item));
    div3.appendChild(handleItem(item));
    div3.appendChild(handleItem(item));
    div3.appendChild(handleItem(item));
    div3.appendChild(handleItem(item));
  });
  div22.appendChild(div3);
  div1.appendChild(div22);

  return div1;
};

let handleJSON = obj => {
  let fragment = document.createDocumentFragment();
  obj.panels.map(panel => {
    // log(panel);
    fragment.appendChild(handlePanel(panel));
    fragment.appendChild(handlePanel(panel));
  });

  main.appendChild(fragment);
};

let init = (file) => {
  let xhr = new XMLHttpRequest();
  xhr.overrideMimeType('application/json');
  xhr.open('GET', file);
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      const res = JSON.parse(xhr.response);
      log(res);
      handleJSON(res);
    }
  };
  xhr.send();
};

init('./assets/maps/index.json');