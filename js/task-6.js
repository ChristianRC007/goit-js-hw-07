const input = document.querySelector('#validation-input')
const inputAttributeValue = Number(input.getAttribute('data-length'))

input.addEventListener('blur', validatingSymbols);

function validatingSymbols(event) {
  let inputLength = event.currentTarget.value.length;

  if (inputLength === inputAttributeValue) {
  input.classList.remove('invalid')
  input.classList.add('valid')
  }

  if (inputLength !== inputAttributeValue) {
  input.classList.remove('valid')
  input.classList.add('invalid')
  }
  
  if (inputLength === 0) {
  input.classList.remove('valid')
  input.classList.remove('invalid')
  }
}


