let btns = document.querySelectorAll('.btn')

let items = document.querySelectorAll('.item')

;[].map.call(btns, (btn, index) => {
  btn.addEventListener('click', () => {
    [].map.call(items, (item, i) => {
      if (i == index) {
        item.classList.add('active')
      } else {
        item.classList.remove('active')
      }
    }) 
  })
})
