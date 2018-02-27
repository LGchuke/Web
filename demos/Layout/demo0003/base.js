const gapHeight = 10
let styleStr = '.item { line-height: ' + (window.innerHeight - gapHeight * 2) / 3 + 'px; }'

let i = () => {
  new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 100)
  })
  .then(() =>{
    let style = document.createElement('style')
    style.id = 'sign'
    style.type = 'text/css'
    style.innerHTML = styleStr
    document.getElementsByTagName('HEAD').item(0).appendChild(style)
  })
}

i()