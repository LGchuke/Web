### 关于 Canvas




### List
* demo08 -- [Cutout Mask Polygons on Canvas](https://codepen.io/shshaw/pen/PPEMYX) 




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
