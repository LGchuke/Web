let objs = [
  {
    color: '#f05050'
  },
  {
    color: '#ffa500'
  },
  {
    color: '#ffd52e'
  },
  {
    color: '#49dd8e'
  },
  {
    color: '#58b3ff'
  },
  {
    color: '#ae99ff'
  },
  {
    color: '#fb5454'
  },
  {
    color: '#ffa500'
  },
  {
    color: '#e2d313'
  },
  {
    color: '#1fc139'
  },
  {
    color: '#2175c0'
  },
  {
    color: '#ce08d7'
  }
];

let arr = [];


objs.map(o => {
  let { color, borderColor, bgColor, fontColor } = o;

  if (!borderColor) {
    borderColor = color;
  }

  if (!bgColor) {
    bgColor = color;
  }

  if (!fontColor) {
    fontColor = '#fff';
  }

  // console.log(color, bgColor, fontColor);

  arr.push({
    color,
    borderColor,
    bgColor,
    fontColor
  })
});

objs.map(o => {
  let { color, borderColor, bgColor, fontColor } = o;

  if (!borderColor) {
    borderColor = '#fff';
  }

  if (!bgColor) {
    bgColor = '#fff';
  }

  if (!fontColor) {
    fontColor = '#333';
  }

  // console.log(color, bgColor, fontColor);

  arr.push({
    color,
    borderColor,
    bgColor,
    fontColor
  })
});

console.log(arr);

const fs = require('fs');
import path from 'path';

const outputPath = path.resolve(__dirname, '../public/map/color.json');
console.log(outputPath, __dirname, __filename);

// fs.writeFile(outputPath, JSON.stringify(arr, null, 2), err => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

