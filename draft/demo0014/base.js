const train = document.querySelector('.train')
const items = document.querySelectorAll('.item')

const n = 12
let x = 0
let y = 0

const arr = []

;[].map.call(items, (i => {
  // console.log('x: ' + i.offsetLeft + ', y' + i.offsetTop)
  arr.push({x: i.offsetLeft, y: i.offsetTop})
}))

let changePos = (obj, x, y) => {
  let tmp = x + y * n
  train.style.left = arr[tmp].x + 'px'
  train.style.top = arr[tmp].y + 'px'
}

changePos(train, x, y)

window.addEventListener('keydown', e => {
  // 需要归位 flag，下次

  // 37 38 39 40
  if ([37, 38, 39, 40].includes(e.keyCode)) {
    e.preventDefault()
  }
  if (e.keyCode == 37) {
    x > 0 ? x-- : 0
  }
  if (e.keyCode == 40) {
    y > 0 ? y-- : 0
  }
  if (e.keyCode == 39) {
    x < 12 ? x++ : 11
    // console.log('x: ' + x)
  }
  if (e.keyCode == 40) {
    y < 12 ? y++ : 11
    // console.log('y: ' + y)
  }

  changePos(train, x, y)
})