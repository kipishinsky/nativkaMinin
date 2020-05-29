// get element переводится как Получить элемент
// get elements переводится как Получить элементы

let div = document.getElementById('playground') //получить доступ к элементу по ID, по правилам html, id всегда должен быть уникальным.
console.log(div)

let p = document.getElementsByClassName('text') // получить доступ к элементу по классу, по правилам html, классы могут дублироваться бесконечное количество раз
console.log(p)

// получение элемента по его ТЕГу
let h1 = document.getElementsByTagName('h1')
console.log(h1)

// эти методы являются более устаревшими
//////////////////////////////////////////////////////////////////////////////////////////////
//более новые методы ниже

// class -> .CLASS_NAME
// id -> #ID
// tag -> TAG_NAME

// query переводится как запрос
// query selector переводится как селектор запросов
//получить доступ к элементу по ID
let newDiv = document.querySelector('#playground') // возвращает всегда 1 элемент. id забирается через #
console.log(newDiv)

// получить доступ к элементу по классу
let newP = document.querySelectorAll('.text') // возвращает коллекцию элементов. .(точка)text классы забираются через точку. получение NodeList
console.log(newP)

// получение элемента по его ТЕГу
let newH1 = document.querySelector('h1') // просто пишем как он есть
console.log(newH1)

/*
    <div id='playground'>
        <span>text</span>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>

let ul = document.querySelector('div#playground ul'
console.log (ul)
// получаем доступ к списоку элементов ul

 <div id='playground'>
        <span>text</span>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        <div>
            <span>text</span>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    </div>

let ul = document.querySelector('div#playground > div ul'
console.log (ul)
// получаем доступ к списоку элементов ul, которые вложены
 */

// динамическое изменение страницы
console.log(div.innerHTML) // 'playground wrapper

let innerDiv = div.innerHTML = '<h2 style="color: red;">From Javascript</h2>'
console.log(innerDiv) // добавляеется новый див

// посмотреть сам текст который внутри тега
let showText = h1.textContent
console.log(showText) // Что такое DOM
let textContennnt = 'changed from js'
console.log(textContennnt) // изменили содержимое заголовка h1 ( что такое DOM) на changed from js

//получить доступ до инпута
let input = document.querySelector('input')
console.log(input.value) // I am input

// получаем доступ к ссылке
// target="_blank"  ссылка открывается в новой вкладке
let a = document.querySelector('a')
console.log(a)

// мы хотим узнать куда ведет данная ссылка.
console.log(a.getAttribute('href')) // в консоле получаем только ту ссылку, которая сидит в ссылке
let oldHref = a.getAttribute('href');
console.log(oldHref); // https://google.com/

// получить атрибут title
console.log(a.getAttribute('title')) // Click Me

// получить все атрибуты
console.log(a.attributes) //NameNodeMap

// подмена ссылкиХ, например с гугла на яндекс, или же по примеру лампочки
a.setAttribute('href', 'https:ya.ru') // меняем ссылку
a.setAttribute('title', 'Go to yandex') // меняет фразу при наведении мышкой
a.textContent = 'yandex'

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// классы
/*

<div id="box1" class="box"></div>
<div id="box2" class="box"></div>
*/

let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')

box1.classList.add('red') //box 1 покрасился в красный цвет
box2.classList.remove('blue') //box2 нет нужного нам класса(синего цвета нет)
let hasClass = box2.classList.contains('blue')
console.log(hasClass) //false проверяем если ли такой класс
if (hasClass) {
    box2.classList.remove ('blue') // если есть такой класс, то удали
} else {
    box2.classList.add ('blue') // если нет, то добавь)
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// добавление событий

//при нажатии на кнопку меняем текст h3
// первое что необходимо сделать - получить доступ до элемента кнопки

let button = document.querySelector('button')
let h3 = document.querySelector('h3')
let dostupInput = document.querySelector('dostupInput')
//Node - узел(узлы)
// let button и h3 называется node

function buttonHandler () {
    console.log('clicked!') // показывает в консоле произошеднее событие
    h3.textContent = 'changed from js' // переприсваиваем заголовку значение при клике addEventListener
    h3.textContent = input.value // берем введенные значения в инпут и добавляем в h3
}

button.addEventListener('click',buttonHandler)

// event - событие

h3.addEventListener('mouseenter', () => {
    this.style.color = 'red' // меняем цвет заголовка при наведении мыши
    this.style.backgroundColor = 'transparent' // делаем прозрачным фон
    console.log('mouse has entered h3')
} )

h3.addEventListener('mouseleave', () => {
    this.style.color = 'black' // меняем цвет заголовка на черный при уведении мыши
    this.style.backgroundColor = 'blue' // меняем фон на синий
    // background-color => backgroundColor
    console.log('mouse has left h3')
} )

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// всплытие и погружение событий


/*

<style>
        .box3 {
            width:300px;
            height: 300px;
            display: flex;
            align-items: center;
            justify-items: center;
            background_color: red;
        }
        .box4 {
            width:100px;
            height: 199px;
            display: flex;
            align-items: center;
            justify-items: center;
            background_color: green;
        }
</style>

    <div class = "box3" id = "3" >
        <div class = "box4" id = "4">< /div>
    </div>

*/

let divs = document.querySelectorAll('div');

for (let i=0; i<divs.length; i++) {
    divs[i].addEventListener('click', () => {
        console.log(this.getAttribute('id')) // fasle //  1, 2
    }, true) // or 2,1
}

// при клике на красный квадрат, мы получаем 1, потому что там 1 элемент.
// при клике на зеленый квадрат, мы получаем 2, потому что если вложенность дива в див.
// это называется проваливание( погружение )



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// объект события

/*

<style>
        .box3 {
            width:300px;
            height: 300px;
            display: flex;
            align-items: center;
            justify-items: center;
            background_color: red;
        }
        .box4 {
            width:100px;
            height: 199px;
            display: flex;
            align-items: center;
            justify-items: center;
            background_color: green;
        }
</style>

    <div class = "box3" id = "3" >
        <div class = "box4" id = "4">< /div>
    </div>

*/

let divs = document.querySelectorAll('div');

for (let i=0; i<divs.length; i++) {
    divs[i].addEventListener('click', (event) => {
        console.log(event) // MouseEvent {isTrusted: true, screenY: 231, clientY: 129, ...}
        // event.stopPropagation () // метод останавливает событие на том элементе, на котором произошел клик
        console.log(this.getAttribute('id')) // 1
    })
}


/*
<a href="https://google.com/" target="_blank">Toogle</a>
<div className="box3" id="3">
    <div className="box4" id="4"></div>
</div>
*/

let link = document.querySelector('a')
link.addEventListener('click', nandleLinkClick)

function nandleLinkClick (event) { // т.к. я пишу функцию через ключевое слово function то я могу ее писать после того как я ее использую
    event.preventDefault() // отменить поведение элемента по умолчанию.

    let div = divs[0];

    if (div.style.display === 'none') { // если элемент сейчас не виден, то сделай ему flex
        div.style.display = 'flex'
    } else {
        div.style.display = 'none' // если что то другое то скрывай его
    }

    // написать короче через тернарные выражения
    div.style.display = div.style.display === 'none' ? 'flex' : 'none';

    console.log(div.style.display) // при клике мы начинаем менять display у блока сначала на flex, потом на none
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// делегирование событий


/*

<p> asdsadadslkasdj asdj alksdh akjd ahjsdh sakjdha hdas </p>
<p> asdsadadslkasdj asdj alksdh akjhdas </p>
<p> asdsadadslkasdj asdj alksdh akjd ahjsdh sakjd </p>
<p> asdsadadslkasdj asdj alksdh akjd ahjsdh sakjadsdsasdadsadd </p>

 */
// мы хотим получить: чтобы при клике на любой из параграфов он выделялся цветом

let ps = document.querySelectorAll ('p') // берем все параграфы

for (let i=0; i<ps.length; i++) {
    ps[i].addEventListener('click', function(event) { // при каждом Iтом элементе крась его в синий
        event.target.style.color = 'blue'
    })
}

// а что если параграфов 100000
// если мы пользуемся циклом фор, то кликнуть придется 100000 раз, что просто убьет весь ресурс приложения
// чтобы этого избежать, нужно применить стратегию дилегирования







