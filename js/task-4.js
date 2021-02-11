const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  counterLabel: document.querySelector('#value')
};

refs.decrementBtn.addEventListener('click', toDecrementValue);
refs.incrementBtn.addEventListener('click', toIncrementValue);

let counterValue = 0;

const toDecrementValue = () => {
  counterValue -= 1
  refs.counterLabel.textContent = counterValue
};
const toIncrementValue = () => {
  counterValue += 1
  refs.counterLabel.textContent = counterValue;
};


