const flashMessage = (options) => (() => {
  const flashContainer = document.querySelector('.flash-container');

  const position = {
    topLeft: {
      value: 'top: 1em; left: 1em',
    },
    topRight: {
      value: 'top: 1em; right: 1em',
    },
    topCenter: {
      value: 'top: 1em; left: 50%; transform: translate(-50%)',
    },
    bottomLeft: {
      value: 'bottom: 1em; left: 1em',
    },
    bottomRight: {
      value: 'bottom: 1em; right: 1em',
    },
    bottomCenter: {
      value: 'bottom: 1em; left: 50%; transform: translate(-50%)',
    },
  };

  if (!options.position) {
    flashContainer.style.cssText = position.topRight.value;
  } else if (options.position === 'top-left') {
    flashContainer.style.cssText = position.topLeft.value;
  } else if (options.position === 'top-right') {
    flashContainer.style.cssText = position.topRight.value;
  } else if (options.position === 'top-center') {
    flashContainer.style.cssText = position.topCenter.value;
  } else if (options.position === 'bottom-left') {
    flashContainer.style.cssText = position.bottomLeft.value;
  } else if (options.position === 'bottom-right') {
    flashContainer.style.cssText = position.bottomRight.value;
  } else if (options.position === 'bottom-center') {
    flashContainer.style.cssText = position.bottomCenter.value;
  } else {
    flashContainer.style.cssText = position.topRight.value;
  }

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
