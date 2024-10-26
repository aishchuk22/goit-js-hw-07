const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const resultInput = nameInput.value.trim();

  nameOutput.textContent = resultInput === '' ? 'Anonymous' : resultInput;
});