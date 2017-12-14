let card = document.querySelector('.flipper');
card.state = {
  flip: false
};

const container = document.querySelector('.flip-container');

card.addEventListener('click', () => {

  if (!card.state.flip) {
    card.classList.add('flip');
    // container.classList.add('apply-shake');
    // setTimeout(() => {
    //   container.classList.remove('apply-shake');
    // }, 900);
    card.state.flip = true;
  } else {
    card.classList.remove('flip');
    card.state.flip = false;
  }

})