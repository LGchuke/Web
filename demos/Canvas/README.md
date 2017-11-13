# Canvas




## List
* demo0008 -- [Cutout Mask Polygons on Canvas](https://codepen.io/shshaw/pen/PPEMYX)
* demo0009 -- Sky
* demo0010 -- [Whirl2](https://codepen.io/scorch/pen/BZjbmW)
* demo0011 -- [HEX tunnel with deformed sphere](https://codepen.io/Zultan/pen/EwXNov)
* demo0012 -- [Animated Line Fractals](https://codepen.io/Thibka/pen/borRNN)



## Notes
* 使 Canvas 画布支持高分屏（High DPI）的万金油代码

```javascript
if (window.devicePixelRatio) {
  var hW = ca.width;
  var hH = ca.height;

  ca.width = hW * window.devicePixelRatio;
  ca.height = hH * window.devicePixelRatio;
  ca.style.width = hW;
  ca.style.height = hH;
  cot.scale(window.devicePixelRatio, window.devicePixelRatio);
}
```
