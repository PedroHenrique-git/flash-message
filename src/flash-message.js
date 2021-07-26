// eslint-disable-next-line no-unused-vars
const flashMessage = (userOptions) => (() => {
  const flashContainer = document.querySelector('.flash-container');

  const options = {
    position: {
      'top-left': {
        value: 'top: 1em; left: 1em',
      },
      'top-right': {
        value: 'top: 1em; right: 1em',
      },
      'top-center': {
        value: 'top: 1em; left: 50%; transform: translate(-50%)',
      },
      'bottom-left': {
        value: 'bottom: 1em; left: 1em',
      },
      'bottom-right': {
        value: 'bottom: 1em; right: 1em',
      },
      'bottom-center': {
        value: 'bottom: 1em; left: 50%; transform: translate(-50%)',
      },
    },
    duration: userOptions.duration || 3000,
  };

  // set position of container flash
  flashContainer.style.cssText = options.position[userOptions.position].value || options.position['top-right'].value;

  const removeFlashsFromDom = () => {
    setTimeout(() => {
      const flashs = document.getElementsByClassName('flash-hidden');
      Array.from(flashs).forEach((flash) => flash.remove());
    }, 1000);
  };

  const timer = {
    start: 0,
    remaning: options.duration,
    timer: null,
    flash: null,

    pause() {
      window.clearTimeout(this.timer);
      this.remaning -= new Date() - this.start;
    },

    resume() {
      this.start = new Date();

      this.timer = window.setTimeout(() => {
        this.flash.classList.add('flash-hidden');
        removeFlashsFromDom();
      }, this.remaning);
    },
  };

  const createFlash = (type) => {
    const flash = document.createElement('div');
    flash.className = `flash ${type}`;

    timer.flash = flash;
    timer.resume();

    flash.addEventListener('mouseover', () => {
      timer.pause();
    });

    flash.addEventListener('mouseout', () => {
      timer.resume();
    });

    return flash;
  };

  const addFlashInContainer = (flash) => {
    flashContainer.appendChild(flash);
  };

  const flashMessageObject = {
    warn(string) {
      const warn = createFlash('warn');
      warn.innerText = string;
      addFlashInContainer(warn);
    },

    error(string) {
      const error = createFlash('error');
      error.innerText = string;
      addFlashInContainer(error);
    },

    info(string) {
      const info = createFlash('info');
      info.innerText = string;
      addFlashInContainer(info);
    },

    message(string) {
      const message = createFlash('message');
      message.innerText = string;
      addFlashInContainer(message);
    },
  };

  return flashMessageObject;
})(userOptions);
