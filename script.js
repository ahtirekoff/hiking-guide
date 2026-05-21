const startButton = document.querySelector('#startButton');
const checklistText = document.querySelector('#checklistText');
const requestForm = document.querySelector('#requestForm');
const nameInput = document.querySelector('#nameInput');
const goalInput = document.querySelector('#goalInput');
const formResult = document.querySelector('#formResult');

startButton.addEventListener('click', function () {
  checklistText.textContent = 'Первый шаг: выбери короткий однодневный маршрут на 5–8 км, проверь погоду и сообщи близкому человеку, куда идёшь.';
});

requestForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const goal = goalInput.value.trim();

  if (name === '' || goal === '') {
    formResult.textContent = 'Заполни имя и цель похода.';
    return;
  }

  formResult.textContent = `${name}, заявка создана. Цель похода: ${goal}.`;
});
