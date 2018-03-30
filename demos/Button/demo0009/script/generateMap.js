{/* let T = require('../src/Tween'); */}

{/* console.log(T.default); */}

import Tween from '../src/Tween';

let arr = [];

Object.keys(Tween).slice(1, 11).map(obj => {
  Object.keys(Tween[obj]).map(o => {
    {/* console.log(obj, o); */}
    arr.push({
      typeA: obj,
      typeB: o
    });
  });
});

const fs = require('fs');
import path from 'path';

const outputPath = path.resolve(__dirname, '../public/map/btn-type2.json');
{/* console.log(outputPath, __dirname, __filename); */}

{/* fs.writeFile(outputPath, JSON.stringify(arr, null, 2), err => { */}
{/*   if (err) throw err; */}
{/*   console.log('The file has been saved!'); */}
{/* }); */}

