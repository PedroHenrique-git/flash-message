const flashMessage = (options) => (() => {
  const flashContainer = document.querySelector('.flash-container');

  const position = {
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
  };

  flashContainer.style.cssText = position[options.position].value || position['top-right'].value;

  const flahsMessageObj = {
    message(content) {
      const flash = document.createElement('div');
      flash.classList.add('flash_container-message');
      flash.innerText = content;
      flashContainer.appendChild(flash);
      setTimeout(() => flash.remove(), 3000);
    },
  };

  return flahsMessageObj;
})(options);

const button = document.querySelector('.show-btn');

button.addEventListener('click', () => {
  flashMessage({
    position: 'top-right',
  }).message('easy');
});
