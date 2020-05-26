const hamburger = document.querySelector('.hamburger-menu');
const modal = document.querySelector('.mobile-modal');
const image = document.querySelector('.header-img');
const body = document.querySelector('body');
let links = document.querySelectorAll('.nav-mobile-link');

links.forEach((link) => {
  link.addEventListener('click', () => {
    modal.classList.toggle('hidden');
    modal.classList.toggle('block');
    image.classList.toggle('invisible');
    body.classList.toggle('overflow-hidden');
    hamburger.src = './images/icon-hamburger.svg';
  });
});

hamburger.addEventListener('click', () => {
  modal.classList.toggle('hidden');
  modal.classList.toggle('block');
  image.classList.toggle('invisible');
  body.classList.toggle('overflow-hidden');

  if (modal.classList.contains('block')) {
    hamburger.src = './images/icon-close.svg';
  } else {
    hamburger.src = './images/icon-hamburger.svg';
  }
});
