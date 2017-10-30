// var tabList = document.querySelector('.et-music-tab-list');
var contentWrap = document.querySelector('.et-content-wrap')

console.log(contentWrap)

var tabs = document.querySelectorAll('.et-music-tab')


var delay = 320;
var delayDelta = 10;

var bindClick = function(i) {
  tabs[i].addEventListener('click', function(e) {
    // console.log(i)
    // console.log(e.target.dataset.id)
    var preTab = document.querySelector('.et-music-tab.active')
    preTab.classList.toggle('active')
    var preState = preTab.dataset.id
    var newPart = document.querySelectorAll('.et-music-box-group')[i]
    var oldPart = document.querySelectorAll('.et-music-box-group')[preState]

    var preGroup = document.querySelector('.et-music-box-group.active')
    if (preState > i) {
      // console.log(preState + ' > ' + i + ' so left')
      oldPart.classList.toggle('et-fadeOut-right') // add .et-fadeOut-right
      setTimeout(function() {
          oldPart.classList.toggle('active') // remove .active
      }, delay)
      setTimeout(function() {
          oldPart.classList.toggle('et-fadeOut-right') // remove .et-fadeOut-right for old part
          newPart.classList.toggle('et-fadeIn-right') // add  .et-fadeIn-right for new part
      }, delay + delayDelta)
      setTimeout(function() {
          newPart.classList.toggle('active') // add .active
      }, delay + delayDelta * 2)
      setTimeout(function() {
          newPart.classList.toggle('et-fadeIn-right') // remove .et-fadeIn-right
      }, delay * 2 + delayDelta * 2)
    } else {
      // console.log(preState + ' < ' + i + ' so right')
      oldPart.classList.toggle('et-fadeOut-left')
      setTimeout(function() {
          oldPart.classList.toggle('active')
      }, delay)
      setTimeout(function() {
          oldPart.classList.toggle('et-fadeOut-left')
          newPart.classList.toggle('et-fadeIn-left')
      }, delay + delayDelta)
      setTimeout(function() {
          newPart.classList.toggle('active')
      }, delay + delayDelta * 2)
      setTimeout(function() {
          newPart.classList.toggle('et-fadeIn-left')
      }, delay * 2 + delayDelta * 2)
    }

    newTab = document.querySelectorAll('.et-music-tab')[i]
    newTab.classList.toggle('active')
    contentWrap.classList = 'et-content-wrap trick' + i
  })
}

for (var i = 0; i < tabs.length; i++) {
  bindClick(i);
}