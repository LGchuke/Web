var contentWrap = document.querySelector('.et-content-wrap')

var tabs = document.querySelectorAll('.et-music-tab')

var delay = 320;
var delayDelta = 10;

var bindClick = function(i) {
  tabs[i].addEventListener('click', function(e) {
    // console.log(e.target.dataset.id)
    var preTab = document.querySelector('.et-music-tab.active')
    preTab.classList.toggle('active')
    var preState = preTab.dataset.id

    // var newPart = document.querySelectorAll('.et-music-box-group')[i]
    var newPart = $($('.et-music-box-group')[i])
    var oldPart = $($('.et-music-box-group')[preState])

    // console.log(newPart)
    // console.log(oldPart)

    // var preGroup = document.querySelector('.et-music-box-group.active')
    if (preState > i) {
      // console.log(preState + ' > ' + i + ' so left')
      // oldPart.classList.toggle('et-fadeOut-right') // add .et-fadeOut-right
      oldPart.addClass('et-fadeOut-right')
      setTimeout(function() {
          // oldPart.classList.toggle('active') // remove .active
          oldPart.removeClass('active')
      }, delay)
      setTimeout(function() {
          oldPart.removeClass('et-fadeOut-right') // remove .et-fadeOut-right for old part
          newPart.addClass('et-fadeIn-right') // add  .et-fadeIn-right for new part
      }, delay + delayDelta)
      setTimeout(function() {
          newPart.addClass('active') // add .active
      }, delay + delayDelta * 2)
      setTimeout(function() {
          newPart.removeClass('et-fadeIn-right') // remove .et-fadeIn-right
      }, delay * 2 + delayDelta * 2)
    } else {
      // console.log(preState + ' < ' + i + ' so right')
      oldPart.addClass('et-fadeOut-left')
      setTimeout(function() {
          oldPart.removeClass('active')
      }, delay)
      setTimeout(function() {
          oldPart.removeClass('et-fadeOut-left')
          newPart.addClass('et-fadeIn-left')
      }, delay + delayDelta)
      setTimeout(function() {
          newPart.addClass('active')
      }, delay + delayDelta * 2)
      setTimeout(function() {
          newPart.removeClass('et-fadeIn-left')
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