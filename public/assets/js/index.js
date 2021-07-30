const button = document.querySelector('.show-btn');

const flash = new FlashMessage({
  position: 'top-left',
  duration: 3000,
});

button.addEventListener('click', () => {
  flash.success('this is a flash message');
});
