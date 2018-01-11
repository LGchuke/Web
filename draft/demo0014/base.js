// const gradient = new ConicGradient({
//   stops: "red, magenta, blue, cyan, lime, yellow, red"
//   // stops: "magenta, blue, #000, red, cyan, lime, yellow, red, magenta"
// })

carriages = document.querySelectorAll('.carriage')

// if (!CSS.supports('background', 'paint(id)')) {
//   carriages[2].style.background = 'url(' + gradient.dataURL + ')'
// }
/**
 *
 *
 **/

const log = console.log.bind(console)

const train = document.querySelector('.train')
const items = document.querySelectorAll('.item')

const size = 64 + 20 + 5
const n = 12
let x = 0
let y = 0
let dx = 0 // direction
let dy = 0

const arr = []

;[].map.call(items, (i => {
  // console.log('x: ' + i.offsetLeft + ', y' + i.offsetTop)
  arr.push({x: i.offsetLeft, y: i.offsetTop})
}))

let changePos = (obj, x, y) => {
  let tmp = x + y * n
  obj.style.left = arr[tmp].x + 'px'
  obj.style.top = arr[tmp].y + 'px'
  /**
    * handle dx dy & position
    */
  switch (dx) {
    case 0:
      carriages[0].style.left = '0px'
      carriages[1].style.left = '0px'
      break
    case 1:
      carriages[0].style.left = -size + 'px'
      carriages[1].style.left = -size + 'px'
      break
    case 2:
      carriages[0].style.left = -size * 2 + 'px'
      carriages[1].style.left = -size + 'px'
      break
  }
  switch (dy) {
    case 0:
      carriages[0].style.top = '0px'
      carriages[1].style.top = '0px'
      break
    case 1:
      carriages[0].style.top = -size + 'px'
      carriages[1].style.top = -size + 'px'
      if (dx === 1) {
        carriages[1].style.left = '0px'
      }
      if (dx === 2) {
        carriages[0].style.left = -size + 'px'
        carriages[1].style.left = '0px'
      }
      break
    case 2:
      carriages[0].style.top = -size * 2 + 'px'
      carriages[1].style.top = -size + 'px'
      if (dx > 0) {
        carriages[0].style.left = '0px'
        carriages[1].style.left = '0px'
      }
      break
  }
}

changePos(train, x, y)

const logD = () => {
  log('x: ' + x + ', dx: ' + dx + ', y: ' + y + ', dy: ' + dy)
}

window.addEventListener('keydown', e => {
  // 需要归位 flag，下次

  if ([37, 38, 39, 40].includes(e.keyCode)) {
    e.preventDefault()
  }

  switch (e.keyCode) {
    case 37:
      x > 0 ? x-- : 0
      logD()
      break
    case 38:
      y > 0 ? y-- : 0
      logD()
      break
    case 39:
      dx < 2 ? dx++: 2
      x < 11 ? x++ : 11
      logD()
      break
    case 40:
      dy < 2 ? dy++: 2
      y < 11 ? y++ : 11
      logD()
      break
  }

  changePos(train, x, y)
})