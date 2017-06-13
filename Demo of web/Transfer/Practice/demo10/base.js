// var tabList = document.querySelector('.et-music-tab-list');
var contentWrap = document.querySelector('.et-content-wrap');

console.log(contentWrap);

var tabs = document.querySelectorAll('.et-music-tab');


var bindClick = function(i) {
  tabs[i].addEventListener('click', function() {
    // console.log(i);
    contentWrap.classList = 'et-content-wrap trick' + i;
  });
};

for (var i = 0; i < tabs.length; i++) {
  bindClick(i);
}