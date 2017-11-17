var gradient = new ConicGradient({
  stops: "red, magenta, blue, cyan, lime, yellow, red"
  // stops: "magenta, blue, #000, red, cyan, lime, yellow, red, magenta"
})

et = document.getElementById('et')

if (!CSS.supports('background', 'paint(id)')) {
  et.style.background = 'url(' + gradient.dataURL + ')'
}