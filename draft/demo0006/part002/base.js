const canvasWidth = 400
const canvasHeight = 300

var log = console.log.bind(console)

var imageFromPath = (path) => {
  var img = new Image()
  img.src = path
  return img
}

var Paddle = () => {
  var image = imageFromPath('../img/paddle.png')
  var o = {
    name: 'paddle',
    image: image,
    speed: 15,
    x: 100,
    y: 150,
    moveLeft() {
      this.x -= this.speed
      if (this.x < 0) {
        this.x = 0
      }
    },
    moveRight() {
      this.x += this.speed
      if (this.x > canvasWidth - this.image.width) {
        this.x = canvasWidth - this.image.width
      }
    },
    moveUp() {
      this.y -= this.speed
    },
    moveDown() {
      this.y += this.speed
    },
    collide(obj) {
      if (obj.y + obj.image.height > this.y) {
        if (obj.x > this.x && obj.x < this.x + this.image.width) {
          log('paddle collide with ' + obj.name)
          return true
        }
      }
      return false
    }
  }
  return o
}

var Ball = () => {
  var image = imageFromPath('../img/ball.png')
  log(image.width)
  log(image.height)
  var o = {
    name: 'ball',
    image: image,
    x: 100,
    y: 100,
    speedX: 8,
    speedY: 8,
    fired: false,
    fire() {
      this.fired = !this.fired;
    },
    move() {
      if (this.fired) {
        if (this.x < 0 || this.x > 400) {
          this.speedX = -this.speedX
        }
        if (this.y < 0 || this.y > 300) {
          this.speedY = -this.speedY
        }
        this.x += this.speedX
        this.y += this.speedY
      }
    },
  }
  return o
}

var rectIntersect = (a, b) => {
  if (b.y > a.y && b.y < a.y +a.image.height) {
    if (!(b.x + b.image.width < a.x || b.x > a.x + a.image.width)) {
      return true
    }
  }
  return false
}

var Block = () => {
  var image = imageFromPath('../img/block.png')
  var o = {
    name: 'block',
    image: image,
    x: 0,
    y: 0,
    w: 50,
    h: 20,
    alive: true,
    kill() {
      this.alive = false
    },
    collide(obj) {
      if (this.alive) {
        if (rectIntersect(this, obj) || rectIntersect(obj, this)) {
          log('block collide with ' + obj.name)
          return true
        } else {
          return false
        }
      }
      // return this.alive && (rectIntersect(this, obj) || rectIntersect(obj, this))
    }
  }
  return o
}

var GuaGame = function() {
  g = {
    actions: {},
    keydowns: {},
  }
  var canvas = document.getElementById('canvas')
  var context = canvas.getContext('2d')

  // draw
  g.drawImage = (obj) => {
    g.context.drawImage(obj.image, obj.x, obj.y)
  }

  // canvas 支持高分屏（High DPI）
  if (window.devicePixelRatio) {
    var hW = canvas.width;
    var hH = canvas.height;

    canvas.width = hW * window.devicePixelRatio;
    canvas.height = hH * window.devicePixelRatio;
    canvas.style.width = hW;
    canvas.style.height = hH;
    context.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  g.canvas = canvas
  g.context = context

  // events
  window.addEventListener('keydown', (e) => {
    g.keydowns[e.key] = true
  })

  window.addEventListener('keyup', (e) => {
    g.keydowns[e.key] = false
  })

  g.registerAction = (key, callback) => {
    g.actions[key] = callback
  }

  // timer
  setInterval(() => {
    // update
    g.update()

    var actions = Object.keys(g.actions)
    for (var i = 0; i < actions.length; i++) {
      var key = actions[i]
      if (g.keydowns[key]) {
        // 判断按键与执行回调
        g.actions[key]()
      }
    }

    // clear
    g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)

    // draw
    g.draw()
  }, 1000 / 30)

  return g
}

var __main = () => {
  var game = GuaGame()
  var paddle = Paddle()
  var ball = Ball()

  var blocks = []
  for (var i = 0; i < 4; i++) {
    var b = Block()
    b.x = 50 + i * 100
    b.y = 50
    blocks.push(b)
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'f' || e.key === 'F') {
      ball.fire()
    }
  });

  game.registerAction('a', () => {
    paddle.moveLeft()
  })
  game.registerAction('A', () => {
    paddle.moveLeft()
  })
  game.registerAction('d', () => {
    paddle.moveRight()
  })
  game.registerAction('D', () => {
    paddle.moveRight()
  })
  game.registerAction('w', () => {
    paddle.moveUp()
  })
  game.registerAction('W', () => {
    paddle.moveUp()
  })
  game.registerAction('s', () => {
    paddle.moveDown()
  })
  game.registerAction('S', () => {
    paddle.moveDown()
  })

  game.update = () => {
    ball.move()

    // 判断 paddle 与 ball 是否碰撞
    if (paddle.collide(ball)) {
      ball.speedY *= -1
    }

    for (var i = 0; i < blocks.length; i++) {
      var block = blocks[i]
      // 判断 block 与 ball 是否碰撞
      if (block.collide(ball)) {
        ball.speedY *= -1
        block.kill()
      }
    }
  }

  game.draw = () => {
    game.drawImage(paddle)
    game.drawImage(ball)

    for (var i = 0; i < blocks.length; i++) {
      var block = blocks[i]
      if (block.alive) {
        game.drawImage(block)
      }
    }
  }
}

__main()