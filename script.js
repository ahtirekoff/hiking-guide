const startButton = document.querySelector('#startButton');
const checklistText = document.querySelector('#checklistText');

if (startButton && checklistText) {
  startButton.addEventListener('click', function () {
    checklistText.textContent = 'Первый шаг: выбери короткий однодневный маршрут на 5–8 км, проверь погоду и сообщи близкому человеку, куда идёшь.';
  });
}

const requestForm = document.querySelector('#requestForm');
const nameInput = document.querySelector('#nameInput');
const goalInput = document.querySelector('#goalInput');
const formResult = document.querySelector('#formResult');

if (requestForm && nameInput && goalInput && formResult) {
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
}

const levelSelect = document.querySelector('#levelSelect');
const routeButton = document.querySelector('#routeButton');
const routeResult = document.querySelector('#routeResult');

if (levelSelect && routeButton && routeResult) {
  routeButton.addEventListener('click', function () {
    const level = levelSelect.value;

    const routes = {
      beginner: 'Тебе подойдёт однодневный маршрут 5–8 км без сложного рельефа.',
      middle: 'Тебе подойдёт маршрут 10–15 км с умеренным набором высоты.',
      strong: 'Тебе можно рассмотреть маршрут 18–25 км или поход с ночёвкой.'
    };

    if (!level) {
      routeResult.textContent = 'Сначала выбери уровень подготовки.';
      return;
    }

    routeResult.textContent = routes[level];
  });
}
