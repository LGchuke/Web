// commom lib func
let forbidScroll = () => {
  document.body.classList.add('scrollForbidden');
};

let relieveScroll = () => {
  document.body.classList.remove('scrollForbidden');
};


// main
let pageState = {
    popover: false
};

let btnPop = document.getElementById('btn');

let addRatingWrap = document.querySelector('.popover');

addRatingWrap.addEventListener('animationend', () => {
    if (pageState.popover) {
        addRatingWrap.classList.remove('zoomBigIn');
        forbidScroll();
    } else {
        addRatingWrap.parentNode.parentNode.style.visibility = 'hidden';
        addRatingWrap.parentNode.parentNode.classList.remove('transparent');
        addRatingWrap.classList.remove('zoomBigOut');
        relieveScroll();
    }
}, false);

btnPop.addEventListener('click', e => {
  addRatingWrap.parentNode.parentNode.style.visibility = 'visible';
  addRatingWrap.classList.add('zoomBigIn');
  pageState.popover = true;
});

// 换成 close btn
addRatingWrap.addEventListener('click', e => {
  addRatingWrap.classList.add('zoomBigOut');
  addRatingWrap.parentNode.parentNode.classList.add('transparent');
  pageState.popover = false;
});
