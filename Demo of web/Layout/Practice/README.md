# Layout -- display: flex


```css
.wrap {
  /*display: -webkit-flex;*/
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
}
```
## 容器 wrap 的属性

* flex-direction
* flex-wrap
* flex-flow
* justify-content

<code>flex-direction</code> 属性决定主轴的方向（即项目的排列方向）

```css
.wrap {
  flex-direction: row | row-reverse | column | column-reverse;
}
```


<code>flex-flow</code> 属性是 <code>flex-direction</code> 属性和 <code>flex-wrap</code> 属性的简写形式，默认值为 <code>row nowrap</code>，如下：

```css
.wrap {
  flex-flow: row wrap-reverse;
}
```


<code>justify-content</code> 属性定义了项目在主轴上的对齐方式

```css
.wrap {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```


<code>align-items</code> 属性定义项目在交叉轴上如何对齐，与轴的方向有关，下面假设主轴为从左到右：
flex-start：交叉轴的起点对齐
flex-end：交叉轴的终点对齐
center：交叉轴的中点对齐
baseline: 项目的第一行文字的基线对齐
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度

```css
.wrap {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```


<code>align-content</code> 属性定义了多根轴线的对齐方式，如果项目只有一根轴线，该属性不起作用，该属性可能取6个值：
flex-start：与交叉轴的起点对齐
flex-end：与交叉轴的终点对齐
center：与交叉轴的中点对齐
space-between：与交叉轴两端对齐，轴线之间的间隔平均分布
space-around：每根轴线两侧的间隔都相等，所以，轴线之间的间隔比轴线与边框的间隔大一倍
stretch（默认值）：轴线占满整个交叉轴

```css
.wrap {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```


## item 属性

* order
* flex-grow
* flex-shrink
* flex-basis
* flex


order 属性
定义项目的排列顺序，数值越小，排列越靠前，默认为0

```css
.item {
  order: <integer>;
}
```


flex-grow 属性
定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大

```css
.item {
  flex-grow: <number>; /* default 0 */
}
```



flex 属性
是 <code>flex-grow</code>, <code>flex-shrink</code> 和 <code>flex-basis</code> 的简写，默认值为0 1 auto。后两个属性可选。
