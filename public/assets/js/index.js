/* eslint-disable no-undef */
const button = document.querySelector('.show-btn');

const flash = new FlashMessage({
  position: 'top-right',
  duration: 5000,
});

button.addEventListener('click', () => {
  flash.warn('teste');
});
