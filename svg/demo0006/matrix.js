let svgRoot = document.getElementById('root');

console.log(svgRoot);

let obj = {
  matrix: [],
  column: 11,
  row: 6,
  size: 30
};

let handle = obj => {
  let tpl = '';
  const { column, row, size } = obj;
  const width = column * size;
  const height = row * size;
  {/* let matrix = (new Array(row * column)).map((item, index) => { */}
  {/*   console.log(item, index); */}
  {/*   return index % 2; */}
  {/* }); */}
  let matrix = new Array(row * column);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = i % 2;
  }
  
  obj.matrix = matrix;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      let color = matrix[i * column + j] ? '#ec414d' : '#0183ff';
      tpl += `<rect x='${ j * size }' y='${ i * size } ' width='${ size }' height='${ size }' stroke='${ color }' fill='${ color }' stroke-width='1'/>`;
    }
  }
  
  svgRoot.width.baseVal.value = width;
  svgRoot.height.baseVal.value = height;
  svgRoot.innerHTML = tpl;
};

handle(obj);
{/* console.log(obj.matrix); */}
