/* eslint-disable no-param-reassign */
/* eslint-disable func-names */

(function (root, factory) {
  root.FlashMessage = factory();
}(this, () => {
  const positions = ['top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center'];
  const FlashMessage = function (options) {
    this.options = options || {};
    this.container = document.createElement('section');
    this.container.classList.add('flash-container');

    if (positions.includes(this.options.position)) {
      this.container.classList.add(this.options.position);
    } else {
      this.container.classList.add(positions[0]);
    }

    document.body.appendChild(this.container);
  };

  FlashMessage.prototype = {
    constructor: FlashMessage,

    hideFlash(flash) {
      setTimeout(() => {
        flash.classList.add('flash-hidden');
      }, this.options.duration || 3000);

      flash.addEventListener('transitionend', function () {
        this.remove();
      });
    },

    createFlash(type) {
      const flash = document.createElement('div');
      flash.className = `flash ${type}`;
      this.hideFlash(flash);
      return flash;
    },

    warn(content) {
      const warn = this.createFlash('warn');
      warn.innerText = content;
      this.container.appendChild(warn);
    },

    error(content) {
      const error = this.createFlash('error');
      error.innerText = content;
      this.container.appendChild(error);
    },

    info(content) {
      const info = this.createFlash('info');
      info.innerText = content;
      this.container.appendChild(info);
    },

    message(content) {
      const message = this.createFlash('message');
      message.innerText = content;
      this.container.appendChild(message);
    },

  };

  return FlashMessage;
}));
