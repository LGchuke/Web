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
          <span>This is a message of ${text}</span>
        </div>
      </div>
    </div>
  `);

  messageWrapper.appendChild(el);

  setTimeout(() => {
    messageWrapper.removeChild(el);
  }, 3000);
};

document.addEventListener('keydown', e => {
  console.log(e.key);
  if (e.key === 'Control' && e.key === 's') {
    sendMessage('for test', 'success');
  }

  // sendMessage('for test', 'warning');
});
