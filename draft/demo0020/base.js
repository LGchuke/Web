let nav = document.querySelector('.nav')

nav.addEventListener('click', () => {
  nav.classList.toggle('fold')
})

let s = () => {
  nav.classList.toggle('fold')
}