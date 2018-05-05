class Player {
  constructor() {
    this.media = document.querySelector('.media');
  }

  play() {
    (async () => {
      try {
        return await this.media.play();
        // setTimeout(() => {
        //   this.media.pause();
        // }, 2000);
      } catch(err) {
        console.log(err);
      }
    })();
    // 这里显示播放器播放状态UI
  }

  pause() {
    return this.media.pause();
    // 这里显示播放器暂停状态UI
  }

  /**
   * volume
   * currentTime
   * progress
   * fullscreen
   */
  getVolume() {
    return this.media.volume;
  }

  setVolume(value) {
    return this.media.volume = value;
  }

  getCurrentTime() {
    return this.media.currentTime;
  }

  setCurrentTime(value) {
    return this.media.currentTime = value;
  }

  setTimeDelta(delta) {
    return this.media.currentTime += delta;
  }

  getProgress() {
    const { currentTime, duration } = this.media;
    return currentTime / duration;
  }

  changeMuted() {
    return this.media.muted = !this.media.muted;
  }

  enterFullscreen() {
    let elem = this.media;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
  }

  cancelFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if(document.oRequestFullscreen) {
      document.oCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

let p = player = new Player();

let btnPlay = document.querySelector('.play');
let btnPause = document.querySelector('.pause');

btnPlay.addEventListener('click', () => {
  player.play();
});

btnPause.addEventListener('click', () => {
  player.pause();
});



// lib
function htmlToElement(html) {
  let template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}

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

/**
 * ...
 */
let flag = false;
let flagCount = 0;

document.addEventListener('keydown', e => {
  // console.log(e.key);

  if (e.key === 'Control') {
    flagCount += 1;

    if (flagCount === 2) {
      flag = !flag;
      flagCount = 0;
      if (flag) {
        sendMessage('ctrl up', 'success');
      } else {
        sendMessage('ctrl down', 'warning');
      }
    }
  } else {
    flagCount = 0;
  }

  if (flag) {
    // console.log(flag);
    switch (e.key) {
      case 'a':
        player.setTimeDelta(-0.1);
        break;
      case 's':
        player.setTimeDelta(-0.1 * 10);
        break;
      case 'd':
        player.setTimeDelta(-0.1 * 100);
        break;
      case 'f':
        player.setTimeDelta(-0.1 * 1000);
        break;
      case 'h':
        player.setTimeDelta(0.1 * 1000);
        break;
      case 'j':
        player.setTimeDelta(0.1 * 100);
        break;
      case 'k':
        player.setTimeDelta(0.1 * 10);
        break;
      case 'l':
        player.setTimeDelta(0.1);
        break;
      case 'y':
        player.play();
        break;
      case 'u':
        player.pause();
        break;
      case 'i':
        player.changeMuted();
        break;
    }
  }
})
