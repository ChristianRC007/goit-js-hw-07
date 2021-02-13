const refs = {
  input: document.querySelector('#controls > input'),
  renderBtn: document.querySelector('button[data-action="render"]'),
  destroyBtn: document.querySelector('button[data-action="destroy"]'),
  boxesListEl: document.querySelector('#boxes')
};

refs.input.addEventListener('input', getInputValue);
refs.renderBtn.addEventListener('click', renderBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function getInputValue() {
  return refs.input.value;  
};

function renderBoxes() {
  createBoxes(getInputValue())
};

function createBoxes(amount) {
  const elementsArray = [];

  for (let i = 0; i < amount; i += 1) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)
    let boxEl = document.createElement("div");
    let boxSize = 30;
    
    boxEl.style.backgroundColor = `#${randomColor}`
    boxEl.style.height = boxEl.style.width = `${boxSize + i * 10}px`

    elementsArray.push(boxEl)
  }
  refs.boxesListEl.append(...elementsArray)
};

function destroyBoxes() {
  refs.boxesListEl.innerHTML = ''
};