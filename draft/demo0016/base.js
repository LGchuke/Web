const log = console.log.bind(console)

const btn = document.getElementById('btn')
const mask = document.getElementById('mask')
const c1 = document.getElementById('c1')
const c2 = document.getElementById('c2')

btn.addEventListener('click', e => {
  mask.classList.toggle('active')
  c1.classList.toggle('inactive')
  c2.classList.toggle('active')
})