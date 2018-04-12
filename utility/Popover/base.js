// commom lib func
let forbidScroll = () => {
  document.body.classList.add('scrollForbidden');
};

let relieveScroll = () => {
  document.body.classList.remove('scrollForbidden');
};


// main
let btnPop = document.getElementById('btn');

let addRatingWrap = document.querySelector('.popover');

btnPop.addEventListener('click', e => {
  // if (pageState.addRating) {
  //     console.log(addRatingWrap.parentNode.parentNode.style.visibility);
  // } else {
  addRatingWrap.classList.remove('zoomBigOut');
  addRatingWrap.parentNode.parentNode.style.visibility = 'visible';
  addRatingWrap.classList.add('zoomBigIn');
  // }
  forbidScroll();
});

// 换成 close btn
addRatingWrap.addEventListener('click', e => {
  addRatingWrap.classList.remove('zoomBigIn');
  console.log(addRatingWrap);
  addRatingWrap.classList.add('zoomBigOut');
  setTimeout(() => {
    addRatingWrap.parentNode.parentNode.style.visibility = 'hidden';
    relieveScroll();
  }, 200);
});
