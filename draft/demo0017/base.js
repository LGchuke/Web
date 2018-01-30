const size = 10
const ballTop = 200
const ballLeft = 100

const ball = document.getElementById('ball')
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const r = 2

// 万金油
if (window.devicePixelRatio) {
  var hW = canvas.width;
  var hH = canvas.height;

  canvas.width = hW * window.devicePixelRatio;
  canvas.height = hH * window.devicePixelRatio;
  canvas.style.width = hW + 'px'
  canvas.style.height = hH + 'px'
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
}

// ctx 位置
ctx.strokeStyle = '#fff'

const delta = 2
let i = 0
let flag = false
let switchFlag = false
const range = 360.0
const period = 180.0

let changePosition = i => {
  let l = ballLeft + i * delta
  let t = ballTop + Math.sin(i / period * 2 * 3.14) * 100
  ball.style.left = (l  - size / 2)+ 'px'
  ball.style.top = (t - size / 2) + 'px'

  // console.log(l + 'px', t + 'px')
  drawPath(l, t, flag)
}

let drawPath = (x, y, f) => {
  ctx.beginPath()
  // console.log(ctx.strokeStyle)
  // 单纯改变颜色重新绘制并不能覆盖旧的，为何？
  // if (f) {
  //   ctx.strokeStyle = '#333'
  //   // ctx.clearRect((x  - size), (y - size), size, size)
  // } else {
  //   ctx.strokeStyle = '#fff'
  // }
  ctx.arc(x, y, r, 0, 2 * Math.PI, false)
  ctx.stroke()
}

function step() {

  if (flag) {
    i--
    changePosition(i)
    if (i === 0) {
      flag = false
    }
  } else {
    i++
    changePosition(i)
    if (i === parseInt(range)) {
      flag = true
    }
  }

  if (!flag || switchFlag) {
    requestAnimationFrame(step)
  }
}

window.requestAnimationFrame(step)

window.addEventListener('keydown', (e) => {
  if ((e.key === 'b' || e.key === 'B') && e.metaKey) {
    switchFlag = !switchFlag
    // !
    window.requestAnimationFrame(step)
  }
})