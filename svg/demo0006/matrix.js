let svgRoot = document.getElementById('root');

console.log(svgRoot);

let obj = {
  matrix: [],
  column: 11 * 3,
  row: 6 * 3,
  size: 30
};

let handle = (obj, matrix) => {
  let tpl = '';
  const { column, row, size } = obj;
  const width = column * size;
  const height = row * size;
  // let matrix = (new Array(row * column)).map((item, index) => {
  //   console.log(item, index);
  //   return index % 2;
  // });
  {/* let matrix = new Array(row * column); */}
  {/* for (let i = 0; i < matrix.length; i++) { */}
  {/*   matrix[i] = i % 2; */}
  {/* } */}
  
  obj.matrix = matrix;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      // let color = matrix[i * column + j] ? '#ec414d' : '#0183ff';
      let color = matrix[1024 * 2.5 + i * column + j].hex;
      tpl += `<rect x='${ j * size }' y='${ i * size }' width='${ size }' height='${ size }' stroke='${ color }' fill='${ color }' stroke-width='1'/>`;
    }
  }
  
  svgRoot.width.baseVal.value = width;
  svgRoot.height.baseVal.value = height;
  svgRoot.innerHTML = tpl;
};

let xhr = new XMLHttpRequest();
xhr.overrideMimeType('application/json');
xhr.open('GET', './color.json');
xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    const res = JSON.parse(xhr.response);
    handle(obj, res);
  }
};
xhr.send();
// console.log(obj.matrix);

let tmpRect;
svgRoot.addEventListener('mouseover', e => {
  e.target.style.fill = '#333';
  e.target.style.stroke = '#333';
  if (tmpRect) {
    tmpRect.style.fill = '';
    tmpRect.style.stroke = '';
  };

  tmpRect = e.target;
});
