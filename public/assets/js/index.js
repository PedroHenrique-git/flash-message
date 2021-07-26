const button = document.querySelector('.show-btn');

button.addEventListener('click', () => {
  // eslint-disable-next-line no-undef
  flashMessage({
    position: 'top-left',
    duration: 3000,
  }).info('easy');
});
