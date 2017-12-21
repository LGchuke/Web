/**
  * ctrl-panel part
  */
const ctrlPanel = document.getElementById('ctrl-panel')
const toggle = document.getElementById('toggle')

const ctrlBg = document.getElementById('ctrl-bg')

const state = {
  bg: false,
}

/**
 * Bind events
 */
toggle.addEventListener('click', () => {
  ctrlPanel.classList.toggle('closed')
})

window.addEventListener('keydown', (e) => {
  // console.log('The key code is: ' + e.keyCode)
  if ((e.key === 'b' || e.key === 'B') && e.metaKey) {
    ctrlPanel.classList.toggle('closed')
  }
})

ctrlBg.addEventListener('click', () => {
  ctrlBg.innerHTML = state.bg ? '&#xe661;' : '&#xe660;'

  state.bg = !state.bg
  document.body.classList.toggle('light')
})