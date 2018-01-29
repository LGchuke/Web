const ballTop = 100
const ballLeft = 100

const ball = document.getElementById('ball')

// console.log(ball)

const delta = 2
let i = 0
let flag = false
const range = 360.0
const another = 180.0

let changePosition = i => {
  let l = ballLeft + i * delta
  let t = ballTop + Math.sin(i / another * 2 * 3.14) * 100
  ball.style.left = l + 'px'
  ball.style.top = t + 'px'
  console.log(l + 'px', t + 'px')
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
  // if ()
  requestAnimationFrame(step)
}

window.requestAnimationFrame(step)