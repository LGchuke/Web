# Canvas

Description of this part

*Canvas 内容储备*

&nbsp;

**List**

* demo0008 -- [Cutout Mask Polygons on Canvas](https://codepen.io/shshaw/pen/PPEMYX)
* demo0009 -- Sky
* demo0010 -- [Whirl2](https://codepen.io/scorch/pen/BZjbmW)
* demo0011 -- [HEX tunnel with deformed sphere](https://codepen.io/Zultan/pen/EwXNov)
* demo0012 -- [Animated Line Fractals](https://codepen.io/Thibka/pen/borRNN)
* demo0013 -- [Simplest boundary collision detection](https://codepen.io/JChehe/pen/WRLLYX)
* demo0014 -- Canvas for AntV's Old Version Homepage


## Notes

*使 Canvas 画布支持高分屏（High DPI）的万金油代码*

```javascript
if (window.devicePixelRatio) {
  var hW = ca.width;
  var hH = ca.height;

  ca.width = hW * window.devicePixelRatio;
  ca.height = hH * window.devicePixelRatio;
  ca.style.width = hW + 'px';
  ca.style.height = hH + 'px';
  cot.scale(window.devicePixelRatio, window.devicePixelRatio);
}
```

*基本图形绘制*

```javascript

// 画圆、圆弧
ctx.beginPath()
ctx.arc(x, y, r, 0, 2 * Math.PI, false)
ctx.stroke()

// 其它，如颜色
ctx.beginPath()
ctx.strokeStyle = '#fff'
ctx.arc(x, y, r, 0, 2 * Math.PI, false)
ctx.stroke()

// 清除指定位置指定 size 矩形
ctx.clearRect(x, y, size, size)
```