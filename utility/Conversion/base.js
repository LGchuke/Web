const log = console.log.bind(console)

const R = document.getElementById('R')
const G = document.getElementById('G')
const B = document.getElementById('B')
const result = document.getElementById('Result')

const rgb20xffArr = [R, G, B]

;rgb20xffArr.map(item => {
  item.addEventListener('keyup', e => {
    if (parseInt(item.value))
      conversion()
  })
})

let conversion = _ => {
  let tR = parseInt(R.value), tG = parseInt(G.value), tB = parseInt(B.value)

  if (tR > -1 && tR < 256 && tG > -1 && tG < 256 && tB > -1 && tB < 256) {
    let ret = '#'

    if (tR < 16) {
      ret += '0' + tR.toString(16)
    } else {
      ret += tR.toString(16)
    }

    if (tG < 16) {
      ret += '0' + tG.toString(16)
    } else {
      ret += tG.toString(16)
    }

    if (tB < 16) {
      ret += '0' + tB.toString(16)
    } else {
      ret += tB.toString(16)
    }

    result.value = ret
  }
}