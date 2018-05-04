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

  getProgress() {
    const { currentTime, duration } = this.media;
    return currentTime / duration;
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
