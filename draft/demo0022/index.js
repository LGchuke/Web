let htmlToElement = (html) => {
  let template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
};

let pastLives = document.getElementById('past-lives');

let createSingleSkeleton = () => {
  // <a class='la-img'></a>
  return htmlToElement(`
    <div class='live-abstract skeleton'>
      <a>
        <h2 class='la-title'></h2>
        <h2 class='la-title'></h2>
      </a>
      <p class='la-price'></p>
      <p class='la-intro'></p>
    </div>
  `);
};

let handleGetMore = () => {
  let frag = document.createDocumentFragment();
  for(let i = 0; i < 9; i++) {
    frag.append(createSingleSkeleton());
  }
  pastLives.appendChild(frag);

};

handleGetMore();
