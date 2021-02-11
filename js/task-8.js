const refs = {
  input: document.querySelector('#controls > input'),
  renderBtn: document.querySelector('button[data-action="render"]'),
  destroyBtn: document.querySelector('button[data-action="destroy"]'),
  boxesListEl: document.querySelector('#boxes')
}
refs.input.addEventListener('input', createArrayOfItems);
refs.renderBtn.addEventListener('click', createBoxes);
// refs.destroyBtn.addEventListener('click', );


