const rangeInput = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

rangeInput.addEventListener('input', changeTextSize);

text.style.fontSize = '50px'

function changeTextSize() {
  text.style.fontSize = `${this.value}px`;
};