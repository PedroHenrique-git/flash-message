/*!
 * FlashMessage
 * @license MIT licensed
 *
 * Copyright (C) 2021 Pedro Henrique
 */

(function (root, factory) {
  root.FlashMessage = factory();
}(this, () => {
  const positions = [
    'top-left',
    'top-right',
    'top-center',
    'bottom-left',
    'bottom-right',
    'bottom-center',
  ];

  const FlashMessage = function (options) {
    this.container = document.createElement('section');
    this.options = options || {};

    if (positions.includes(this.options.position)) {
      this.container.classList.add(this.options.position);
    } else {
      this.container.classList.add(positions[1]);
    }

    this.container.classList.add('flash-container');
    document.body.appendChild(this.container);
  };

  const Timer = function (callback, delay) {
    this.start = 0;
    this.timer = 0;
    this.remaining = delay;

    this.resume = function () {
      this.start = new Date();
      this.timer = window.setTimeout(callback, this.remaining);
    };

    this.pause = function () {
      this.remaining -= new Date() - this.start;
      window.clearTimeout(this.timer);
    };

    this.resume();
  };

  const validate = (content, type) => {
    if (typeof content !== type) throw window.TypeError(`pass a ${type} to the method`);
  };

  FlashMessage.prototype = {
    constructor: FlashMessage,

    controlFadeAndHover(flash) {
      const timer = new Timer(() => {
        flash.classList.add('flash-hidden');
      }, this.options.duration || 3000);

      flash.addEventListener('mouseover', () => {
        timer.pause();
      });

      flash.addEventListener('mouseout', () => {
        timer.resume();
      });

      flash.addEventListener('transitionend', () => {
        flash.classList.add('smooth');
        this.removeFlahsFromDom();
      });
    },

    closeButton(parent, value) {
      const btn = document.createElement('button');
      const textNode = document.createTextNode(value);
      btn.className = 'close-btn';
      btn.appendChild(textNode);

      btn.addEventListener('click', () => {
        parent.classList.add('flash-hidden');
      });

      btn.addEventListener('transitionend', () => {
        parent.classList.add('smooth');
      });

      parent.appendChild(btn);
    },

    removeFlahsFromDom() {
      const flashs = document.getElementsByClassName('flash-hidden');
      new Timer(() => {
        Array.from(flashs).forEach((flash) => flash.remove());
      }, 1000);
    },

    createFlash(type) {
      const flash = document.createElement('div');
      flash.className = `flash ${type}`;
      this.controlFadeAndHover(flash);
      return flash;
    },

    warn(content) {
      validate(content, 'string');
      const warn = this.createFlash('warn');
      warn.innerText = content;
      this.container.appendChild(warn);
      this.closeButton(warn, 'X');
    },

    error(content) {
      validate(content, 'string');
      const error = this.createFlash('error');
      error.innerText = content;
      this.container.appendChild(error);
      this.closeButton(error, 'X');
    },

    info(content) {
      validate(content, 'string');
      const info = this.createFlash('info');
      info.innerText = content;
      this.container.appendChild(info);
      this.closeButton(info, 'X');
    },

    success(content) {
      validate(content, 'string');
      const success = this.createFlash('success');
      success.innerText = content;
      this.container.appendChild(success);
      this.closeButton(success, 'X');
    },

  };

  return FlashMessage;
}));
