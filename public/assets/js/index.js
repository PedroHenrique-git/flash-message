const button = document.querySelector('.show-btn');

const flash = new FlashMessage();

button.addEventListener('click', () => {
  flash.success('this is a flash message');
});
