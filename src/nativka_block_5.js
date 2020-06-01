// кнопка старт
let $start = document.querySelector('#start') // то что начинается через $ является Node(тоесть мы забираем ее с помощью функции querySelector, в нее мы ложим id через # - start. start id берем из html файла, который прикручен к кнопке (button)

let $game = document.querySelector('#game') // то что начинается через $ является Node(тоесть мы забираем ее с помощью функции querySelector, в нее мы ложим id через # - game. game id берем из html файла, который прикручен к диву (div)

$start.addEventListener('click', startGame) // вешаем прослушку на клик (  (addEventListener) 'click'. как только по кнопке кликнули, мы запускаем функцию startGame
$game.addEventListener('click',handBoxClick)

let score = 0; // тут будем хранить счет клика

// функция которая запускается на клике при прослушке $start.addEventListener('click', startGame)
function startGame() { // при запуске функции свойства ниже подменяются при помощи js и css свойства видны по новому
  $game.style.backgroundColor = '#fff' // меняем фон при запуске на белый, путем подмены квадратов.
  $start.classList.add('hide') // скрываем кнопку старт при запуске игры с помощью добавления класс hide (hide описан в css файле)

  renderBox() // при старте игры будем вызывать дополнительно функцию(без параметров)  в нашу функцию
}

function renderBox() {

  $game.innerHtml = ''

  let box = document.createElement('div')

  box.style.height = box.style.width = '50px'
  box.style.position = 'absolute' // не выбегает из границ квадрата
  box.style.backgroundColor = '#000'
  box.style.top = '50px'
  box.style.left = '70px'
  box.style.cursor = 'pointer'
  box.setAttribute('data-box', true)

  $game.insertAdjacentElement('afterbegin', box)
}

function handBoxClick (event) {
  if(event.target.dataset.box) {
    score++
    renderBox()
  }
}