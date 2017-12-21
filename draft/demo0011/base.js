let arr = [];

let fragment = document.createDocumentFragment()

let createColor = (v) => {
  return 'rgb(' + v + ', ' + v + ', ' + v + ')'
}

for (let i = 0; i < 16; i++) {
  let group = document.createElement('div')
  group.classList.add('color-block-group')

  for (let j = 0; j < 16; j++) {
    let block = document.createElement('div')
    block.classList.add('color-block')
    let colorValue = (i + 1) * (j + 1)
    block.style.background = createColor(colorValue)
    group.appendChild(block)
  }
  fragment.appendChild(group)
}

document.querySelector('.box').appendChild(fragment)