const log = console.log.bind(console)

const btn = document.getElementById('btn')
const mask = document.getElementById('mask')
const c1 = document.getElementById('c1')
const c2 = document.getElementById('c2')

let duration = 360
btn.flag = true

btn.addEventListener('click', e => {
  /*
   * Use Promise to handle frequent click
   */
  new Promise(resolve => {
    if (btn.flag) {
      btn.flag = false
      mask.classList.toggle('active')
      c1.classList.toggle('inactive')
      c2.classList.toggle('active')
      setTimeout(_ => {
        resolve(true)
      }, duration + 20)
    } else {
      resolve(false)
    }
  })
  .then(unlocked => {
    if (unlocked) {
      btn.flag = true
      log('Yeah! Actions complete')
    } else {
      log('Oops! Last group actions hasn\'t finish yet')
    }
  })
})