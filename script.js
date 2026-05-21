const startButton = document.querySelector('#startButton');
const checklistText = document.querySelector('#checklistText');

startButton.addEventListener('click', function () {
  checklistText.textContent = 'Первый шаг: выбери короткий маршрут на 5–8 км без сложного рельефа.';
});
