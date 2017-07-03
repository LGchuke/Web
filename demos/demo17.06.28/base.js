var f = $('input[name=f]')[0]
console.log(f)

var fragment
var ol
var li = null
var tmp = document.getElementById('tmp')

var btnGenerator = function(files, i) {
  var btn = document.createElement('button')
  btn.textContent = 'remove'
  btn.addEventListener('click', () => {
    console.log(files[i])
    console.log(i)
  })
  return btn
}

f.addEventListener('change', () => {
  // console.log(f[0].files)
  tmp.innerHTML = ''
  fragment = document.createDocumentFragment()
  ol = document.createElement('ol')
  for(var i = 0; i < f.files.length; i++) {
    console.log(f.files[i])
    li = document.createElement('li')
    li.appendChild(document.createTextNode(f.files[i].name))
    li.appendChild(btnGenerator(f.files, i))
    ol.appendChild(li)
  }
  fragment.appendChild(ol)
  tmp.appendChild(fragment)
})