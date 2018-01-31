// colors = import('./objs.js')

const log = console.log.bind(console)
// import * as mm from './objs.js'

let items = document.querySelectorAll('.item')

// log(colors, colors.length)



import('./objs.js').then(module => {
  // log(module.colors, module.colors.length)
  const colors = module.colors
  const length = colors.length

  ;[].map.call(items, (item, i) => {
    // console.log(i, item)
    // Math.random
    // log(Math.random() * 100 % length)
    let random = parseInt(Math.random() * 100 % length)
    let hex = colors[random].hex
    let style = 'background: radial-gradient(circle, #fff, #' + hex + '); border: 1px solid #' + hex + '; inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #' + hex + '99;'
    item.style = style
  })
})