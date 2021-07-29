const button = document.querySelector('.show-btn');

const flash = new FlashMessage({
  position: 'top-left',
});

button.addEventListener('click', () => {
  flash.success('this is a flash message');
});
