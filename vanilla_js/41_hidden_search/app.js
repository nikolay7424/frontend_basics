const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
  input.focus();
  search.classList.toggle('active');
});

search.addEventListener('focusout', () => {
  search.classList.remove('active');
});