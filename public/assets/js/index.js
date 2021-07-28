/* eslint-disable no-undef */
const button = document.querySelector('.show-btn');

const flash = new FlashMessage({
  position: 'top-right',
});

button.addEventListener('click', () => {
  flash.error('teste');
});
