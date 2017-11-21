const toggle = document.getElementById('toggle')
const ctrlPanel = document.getElementById('ctrl-panel')

// w1
const w1 = document.getElementById('w1')
const w1Value = document.getElementById('w1v')
const w1Input = document.getElementById('w1i')
const w1Plus = document.getElementById('w1p')
const w1Minus = document.getElementById('w1m')
// w2
const w2 = document.getElementById('w2')
const w2Value = document.getElementById('w2v')
const w2Input = document.getElementById('w2i')
const w2Plus = document.getElementById('w2p')
const w2Minus = document.getElementById('w2m')

const delta = 10
let w1V = 1000
let w2V = 250

w1Input.value = w1V
w2Input.value = w2V

w1.resetValue = () => {
  w1Input.value = w1V
  w1.style.perspective = w1V + 'px'
  w1Value.textContent = w1V + 'px'
  console.log(w1V)
}
w1Input.addEventListener('input', () => {
  console.log(w1Input.value)
  w1V = w1Input.value
  w1.resetValue()
})
w1Plus.addEventListener('click', () => {
  w1V += delta
  w1.resetValue()
})
w1Minus.addEventListener('click', () => {
  w1V -= delta
  w1.resetValue()
})

w2.resetValue = () => {
  w2Input.value = w2V
  w2.style.perspective = w2V + 'px'
  w2Value.textContent = w2V + 'px'
  console.log(w2V)
}
w2Input.addEventListener('input', () => {
  console.log(w2Input.value)
  w2V = w2Input.value
  w2.resetValue()
})
w2Plus.addEventListener('click', () => {
  w2V += delta
  w2.resetValue()
})
w2Minus.addEventListener('click', () => {
  w2V -= delta
  w2.resetValue()
})

toggle.addEventListener('click', () => {
  ctrlPanel.classList.toggle('closed')
})

