/**
 * m multiple
 * f from
 * s size
 * h half size
 * d delta
 */
let m = 10;
let width = 40 * m;
let height = 40 * m;

let f = 11.5 * m;
let s = 17 * m;
let h = s / 2;
let d = 1.8 * m;

let stroke = 1 * m;
// console.log(h);
let color = '#dddddd';

let pathStr = `<path d="M ${f + d},${f} ${f + h},${f + h - d} L${f + s - d},${f} L${f + s},${f + d} L${f + h + d},${f + h} L${f + s},${f + s - d} L${f + s -d},${f + s}, L${f + h},${f + h +d} L${f + d},${f + s} L${f},${f + s -d} L${f + h - d},${f + h} L${f},${f + d} L${f + d},${f}" fill="#fff" stroke="${color}" stroke-width="${stroke}"/>`;


let ss = document.getElementById('tt');

ss.width.baseVal.value = width;
ss.height.baseVal.value = height;
ss.innerHTML = pathStr;
