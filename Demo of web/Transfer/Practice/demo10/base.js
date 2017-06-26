// var tabList = document.querySelector('.et-music-tab-list');
var contentWrap = document.querySelector('.et-content-wrap')

console.log(contentWrap)

var tabs = document.querySelectorAll('.et-music-tab')


var bindClick = function(i) {
  tabs[i].addEventListener('click', function(e) {
    // console.log(i)
    // console.log(e.target.dataset.id)
    // console.log(document.querySelector('.et-music-tab.active'))
    var preState = document.querySelector('.et-music-tab.active')
    preState.classList.toggle('active')
    preState = document.querySelector('.et-music-box-group.active')
    preState.classList.toggle('active')
    // console.log(preState.dataset.id)
    // if (e.target.dataset.id > i) {
    //   console.log(e.target.dataset.id + ': ' + i)
    // } else {
    //   console.log(e.target.dataset.id + ': ' + i)
    // }


    document.querySelectorAll('.et-music-tab')[i].classList.toggle('active')
    document.querySelectorAll('.et-music-box-group')[i].classList.toggle('active')

    contentWrap.classList = 'et-content-wrap trick' + i
  })
}

for (var i = 0; i < tabs.length; i++) {
  bindClick(i);
}