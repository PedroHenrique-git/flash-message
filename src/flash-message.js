/*!
 * FlashMessage
 * @license MIT licensed
 *
 * Copyright (C) 2021 Pedro Henrique
 */

/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
(function (root, factory) {
  root.FlashMessage = factory();
}(this, () => {
  const positions = ['top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center'];
  const FlashMessage = function (options) {
    this.options = options || {};
    this.container = document.createElement('section');
    this.duration = this.options.duration || 3000;
    this.container.classList.add('flash-container');

    if (positions.includes(this.options.position)) {
      this.container.classList.add(this.options.position);
    } else {
      this.container.classList.add(positions[0]);
    }

    document.body.appendChild(this.container);
  };

  function Timer(callback, delay) {
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
  }

  FlashMessage.prototype = {
    constructor: FlashMessage,

    controlFadeAndHover(flash) {
      const timer = new Timer(() => {
        flash.classList.add('flash-hidden');
      }, this.duration);

      flash.addEventListener('mouseover', () => {
        timer.pause();
      });

      flash.addEventListener('mouseout', () => {
        timer.resume();
      });

      flash.addEventListener('transitionend', () => {
        flash.remove();
      });
    },

    createFlash(type) {
      const flash = document.createElement('div');
      flash.className = `flash ${type}`;
      this.controlFadeAndHover(flash);
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
