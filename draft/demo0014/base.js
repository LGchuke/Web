// const gradient = new ConicGradient({
//   stops: "red, magenta, blue, cyan, lime, yellow, red"
//   // stops: "magenta, blue, #000, red, cyan, lime, yellow, red, magenta"
// })

const carriages = document.querySelectorAll('.carriage')

// if (!CSS.supports('background', 'paint(id)')) {
//   carriages[2].style.background = 'url(' + gradient.dataURL + ')'
// }

/**
  *
  * size 是方块/车厢宽高
  * n 代表网络行列数
  * x 方块所在列，0 开始计数
  * y 方块所在行，0 开始计数
  * d 即 direction，方向
  * dx
  * dy
  * pos 本次重点
  */
const log = console.log.bind(console)

const train = document.querySelector('.train')
const items = document.querySelectorAll('.item')

const size = 64 + 20 + 5
const n = 12
let x = 0
let y = 0
let d = 0 // direction
let dx = 0 // direction x y
let dy = 0
let pos = [
  {x: 0, y: 0},
  {x: 0, y: 0},
  {x: 0, y: 0}
]

const arr = []

const init = () => {
  x = y = d = dx = dy = 0
  train.style.top = arr[0].x + 'px'
  train.style.left = arr[0].y + 'px'
  pos.map(i => {
    i.x = arr[0].x
    i.y = arr[0].y
  })
  ;[].map.call(carriages, item => {
    item.style.top = '0px'
    item.style.left = '0px'
  })
}

;[].map.call(items, i => {
  // console.log('x: ' + i.offsetLeft + ', y' + i.offsetTop)
  arr.push({x: i.offsetLeft, y: i.offsetTop})
})

pos.map(i => {
  i.x = arr[0].x
  i.y = arr[0].y
})

let changePos = (obj, x, y, d) => {
  let tmp = x + y * n
  obj.style.left = arr[tmp].x + 'px'
  obj.style.top = arr[tmp].y + 'px'

  pos.map((i, index) => {
    carriages[2 - index].style = 'top: ' + i.y + 'px; left: ' + i.x + 'px;'
    i.y = arr[0].y
  })
  /**
    * handle dx dy & position
    */
  // switch (d) {
  //   case 1:
  //     break
  //   case 2:
  //     break
  //   case 3:
  //     if (dx === 0) {
  //       // carriages[0].style.left = (-size * 1) + 'px'
  //       // carriages[1].style.left = (-size * 1) + 'px'
  //     }
  //     if (dx === 1) {
  //       if (dy === 0) {
  //         carriages[0].style = 'top: ' + (-size * 0) + 'px; left: ' + (-size * 1) + 'px;'
  //         carriages[1].style = 'top: ' + (-size * 0) + 'px; left: ' + (-size * 1) + 'px;'
  //       }
  //       if (dy === 1) {
  //         carriages[0].style = 'top: ' + (-size * 0) + 'px; left: ' + (-size * 1) + 'px;'
  //         carriages[1].style = 'top: ' + (-size * 0) + 'px; left: ' + (-size * 1) + 'px;'
  //         // log('flag')
  //       }
  //     }
  //     if (dx === 2) {
  //       if (dy === 0) {
  //         carriages[0].style = 'top: ' + (-size * 0) + 'px; left: ' + (-size * 2) + 'px;'
  //         carriages[1].style = 'top: ' + (-size * 0) + 'px; left: ' + (-size * 1) + 'px;'
  //       }
  //     }
  //     break
  //   case 4:
  //     if (dx === 0) {
  //       carriages[0].style.left = '0px'
  //       carriages[1].style.left = '0px'
  //     }
  //     if (dy === 0) {
  //       carriages[0].style.top = '0px'
  //       carriages[1].style.top = '0px'
  //     }
  //     if (dx === 1) {
  //       if (dy === 1) {
  //         carriages[0].style = 'top: ' + (-size * 1) + 'px; left: ' + (-size * 1) + 'px;'
  //         carriages[1].style = 'top: ' + (-size * 1) + 'px; left: ' + (-size * 0) + 'px;'
  //       }
  //       if (dy === 2) {
  //         carriages[0].style = 'top: ' + (-size * 2) + 'px; left: ' + (-size * 0) + 'px;'
  //         carriages[1].style = 'top: ' + (-size * 1) + 'px; left: ' + (-size * 0) + 'px;'
  //       }
  //     }
  //     if (dx === 2) {

  //     }
  //     break
  // }

  // switch (dx) {
  //   case 0:
  //     carriages[0].style.left = '0px'
  //     carriages[1].style.left = '0px'
  //     break
  //   case 1:
  //     carriages[0].style.left = -size + 'px'
  //     carriages[1].style.left = -size + 'px'
  //     break
  //   case 2:
  //     carriages[0].style.left = -size * 2 + 'px'
  //     carriages[1].style.left = -size + 'px'
  //     break
  // }
  // switch (dy) {
  //   case 0:
  //     carriages[0].style.top = '0px'
  //     carriages[1].style.top = '0px'
  //     break
  //   case 1:
  //     carriages[0].style.top = -size + 'px'
  //     carriages[1].style.top = -size + 'px'
  //     if (dx === 1) {
  //       carriages[1].style.left = '0px'
  //     }
  //     if (dx === 2) {
  //       carriages[0].style.left = -size + 'px'
  //       carriages[1].style.left = '0px'
  //     }
  //     break
  //   case 2:
  //     carriages[0].style.top = -size * 2 + 'px'
  //     carriages[1].style.top = -size + 'px'
  //     if (dx > 0) {
  //       carriages[0].style.left = '0px'
  //       carriages[1].style.left = '0px'
  //     }
  //     break
  // }
}

changePos(train, x, y)

const logD = () => {
  log('x: ' + x + ', dx: ' + dx + ', y: ' + y + ', dy: ' + dy + ', d: ' + d)
}

const handleDXY = f => {
  switch (f) {
    case 1:
      break
    case 2:
      break
    case 3:
      dx < 2 ? dx++: 2
      break
    case 4:
      dy < 2 ? dy++: 2
      break
  }
}

window.addEventListener('keydown', e => {
  // 需要归位 flag，下次
  // log(e.key)
  if ([37, 38, 39, 40].includes(e.keyCode)) {
    e.preventDefault()
    d = e.keyCode - 36
    switch (e.keyCode) {
      case 37:
        x > 0 ? x-- : 0
        break
      case 38:
        y > 0 ? y-- : 0
        break
      case 39:
        x < 11 ? x++ : 11
        break
      case 40:
        y < 11 ? y++ : 11
        break
    }
    handleDXY(d)
    logD()

    changePos(train, x, y, d)
  }

  if ((e.key === 'b' || e.key === 'B') && e.metaKey) {
    init()
  }

})