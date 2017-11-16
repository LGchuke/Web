var log = console.log.bind(console)

var imageFromPath = (path) => {
  var img = new Image()
  img.src = path
  return img
}

var Paddle = () => {
  var image = imageFromPath('./img/02.png')
  var o = {
    image: image,
    speed: 5,
    x: 100,
    y: 100
  }
  return o
}


var __main = () => {
  var canvas = document.getElementById('canvas')
  var context = canvas.getContext('2d')

  var paddle = Paddle()
  var leftDown = false
  var rightDown = false

  window.addEventListener('keydown', (e) => {
    var k = e.key
    log('keydown')
    if (k === 'a' | k === 'A') {
      leftDown = true
    } else if (k === 'd' | k === 'D') {
      rightDown = true
    }
  })

  window.addEventListener('keyup', (e) => {
    var k = e.key
    log('keyup')
    if (k === 'a' | k === 'A') {
      leftDown = false
    } else if (k === 'd' | k === 'D') {
      rightDown = false
    }
  })

  setInterval(() => {
    if (leftDown) {
      paddle.x -= paddle.speed
    }
    if (rightDown) {
      paddle.x += paddle.speed
    }
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.drawImage(paddle.image, paddle.x, paddle.y)
  }, 1000 / 30)
}

__main()