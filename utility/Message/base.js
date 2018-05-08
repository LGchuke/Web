// lib
function htmlToElement(html) {
  let template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}


// main
let messageWrapper = document.querySelector('.message span');

let sendMessage = (text, type) => {
  let el = htmlToElement(`
    <div class='message-notice'>
      <div class='message-notice-content'>
        <div class='message-custom-content message-${type}'>
          <i class='icon icon-check-circle'>O˚£¢∞§¶ß</i>
          <span>key <code>${text}</code> has down${text}</span>
        </div>
      </div>
    </div>
  `);

  messageWrapper.appendChild(el);

  el.classList.add('move-up-enter', 'move-up-enter-active');


  setTimeout(() => {
    el.addEventListener('animationend', () => {
      messageWrapper.removeChild(el);
    });

    // el.classList.remove('move-up-enter', 'move-up-enter-active');
    // el.classList.add('move-up-enter', 'move-up-enter-active');
    el.className = 'message-notice move-up-leave move-up-leave-active';
  }, 3000);

};

document.addEventListener('keydown', e => {
  // console.log(e.key);
  if (e.ctrlKey && e.key === 's') {
    sendMessage('ctrl<code>dasdasd</code>', 'success');
    sendMessage('ctrl', 'warning');
  }
});
