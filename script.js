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

const levelSelect = document.querySelector('#levelSelect');
const routeButton = document.querySelector('#routeButton');
const routeResult = document.querySelector('#routeResult');

routeButton.addEventListener('click', function () {
  const level = levelSelect.value;

  if (level === '') {
    routeResult.textContent = 'Сначала выбери уровень подготовки.';
    return;
  }

  if (level === 'beginner') {
    routeResult.textContent = 'Тебе подойдёт однодневный маршрут 5–8 км без сложного рельефа.';
  }

  if (level === 'middle') {
    routeResult.textContent = 'Тебе подойдёт маршрут 10–15 км с умеренным набором высоты.';
  }

  if (level === 'strong') {
    routeResult.textContent = 'Тебе можно рассмотреть маршрут 18–25 км или поход с ночёвкой.';
  }
});
