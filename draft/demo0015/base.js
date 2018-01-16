const log = console.log.bind(console)

const cn = 4
const train = document.querySelector('.train')
const items = document.querySelectorAll('.item')

let fragment = document.createDocumentFragment()

for (let i = 0; i < cn; i++) {
  let div = document.createElement('div')
  div.classList.add('carriage')
  fragment.appendChild(div)
}

train.appendChild(fragment)

const carriages = document.querySelectorAll('.carriage')

/**
  * cn 即 cube n，方块/车厢数量
  * train 如今意义不大了，只算个 wrapper
  * size 是方块/车厢宽高
  * n 代表网络行列数
  * x 方块所在列，0 开始计数
  * y 方块所在行，0 开始计数
  * d 即 direction，方向，如今没有多大用，顶多算个运动的 flag 标记
  * pos 本次重点
  */
const size = 64 + 20 + 5
const n = 12
let x = 0
let y = 0
let d = 0
let pos = [
  // {x: 0, y: 0},
  // {x: 0, y: 0},
  // {x: 0, y: 0}
]

for (let i = 0; i < cn; i++) {
  pos.push({x: 0, y: 0})
}

const arr = []

;[].map.call(items, i => {
  arr.push({x: i.offsetLeft, y: i.offsetTop})
})

pos.map(i => {
  i.x = arr[0].x
  i.y = arr[0].y
})

// 控制用重新初始化 cmd + b/B
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
  changePos(x, y) // 函数声明提升了
}

let changePos = (x, y, d) => {
  let tmp = x + y * n

  // handle pos
  pos.shift()
  pos.push({
    x: arr[tmp].x,
    y: arr[tmp].y
  })

  pos.map((i, index) => {
    carriages[index].style = 'top: ' + i.y + 'px; left: ' + i.x + 'px;'
    // carriages[cn - 1 - index].style = 'top: ' + i.y + 'px; left: ' + i.x + 'px;' // 掉头方式
  })
}

changePos(x, y)

const logD = () => {
  log('x: ' + x + ', y: ' + y + ', d: ' + d)
}

window.addEventListener('keydown', e => {
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
    logD()

    changePos(x, y, d)
  }

  // 按键控制重新初始化
  if ((e.key === 'b' || e.key === 'B') && e.metaKey) {
    init()
  }
  if ((e.key === 'l' || e.key === 'L') && e.metaKey) {
    alpha1()
  }
})


/**
 * 测试用无智能（随机）机器人
 * unintelligent alphas
 */
const alpha0 = _ => {
  let random
  setInterval(_ => {
    random = parseInt(Math.random() * 100 % 4)
    switch (random) {
      case 0:
        x > 0 ? x-- : 0
        break
      case 1:
        y > 0 ? y-- : 0
        break
      case 2:
        x < 11 ? x++ : 11
        break
      case 3:
        y < 11 ? y++ : 11
        break
    }
    logD()
    changePos(x, y, d)
  }, 600)
}

const alpha1 = _ => {
  for (let i = 0; i < 4; i++) {
    x++
    changePos(x, y, d)
  }
  for (let i = 0; i < 4; i++) {
    y++
    changePos(x, y, d)
  }
  let random
  setInterval(_ => {
    random = parseInt(Math.random() * 100 % 4)
    switch (random) {
      case 0:
        x > 0 ? x-- : 0
        break
      case 1:
        y > 0 ? y-- : 0
        break
      case 2:
        x < 11 ? x++ : 11
        break
      case 3:
        y < 11 ? y++ : 11
        break
    }
    logD()
    changePos(x, y, d)
  }, 600)
}

// alpha1()

// const runAlpha = alpha => {

// }