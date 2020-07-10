let message = 'Hello World 2';

// типы данных
let number = 42; // число
let string = 'message'; // строка
let isTrue = true // false; boolean булевы значение правда или ложь (да или нет)
let obj = { // объект
    name: 'Igor',
    age: 42
};
let isNull = null; // ноль
let undef = undefined; // не назначено

// оператор типа данных
typeof (number); //показать тип данных.

// оператор сравнения
console.log ('4 === 4', 4 === '4'); // false значения равны, но типы данных не равны. номер и строка
console.log ('4 == 4', 4 == '4'); // true потому что не сравниваем на типы.


// оператор &&(и) ||(или) ! (нет)
    /*
    && | true | false
    true | true | false
    false | false | false

    || | true | false
    true | true | true
    false | true | false

    && (и) - true если все значения true
    || (или) - true если хоть одно значение true
    ! (нет) - инвертирует true или false
    */

    console.log (true && true); // true
    console.log (false && true); // false
    console.log (true || true); // true
    console.log (false || false); // false
    console.log (true || false); // true
    console.log (!false); // true
    console.log (!true); // false
    console.log (!!!true); // !!!true -> !!fasle -> !true -> false
    console.log ((true && false) || (true || false) || !true);// (false) || (true) || false => true

// условные операторы
    // конструкция if else
    /*
     if (условие) { тут пишем то что будет выполняться, если выполнится условие }
    */
        let currentYear = 2018;
        let carName = 'Ford';
        let carYear = 2008;
        let carAge = currentYear - carYear;
        // если возраст машины меньше 5 лет..
        // если возрат машины больше или равно 5 годам и меньше или равно 10 годам..
        // иначе другое сообщение
        if (carAge < 5) { // условие // if читается как если
            console.log (carName + ' младше 5 лет');
        } else if (carAge >= 5 && carAge <= 10) { // else читается как иначе. // else if - иначе если -  в скобках условие
            console.log(carName + ' больше или равен 5 годам или меньше или равен 10 годам');
        } else {
            console.log('Возраст ' + carName + ' равняется ' + carAge + ' годам');
        }

        // 0 false
        if (0) {
            console.log('значение true')
        } else {
            console.log('значение false')
        }

        // null false
        if (null) {
            console.log('значение true')
        } else {
            console.log('значение false')
        }

        // undefined false
        if (undefined) {
            console.log('значение true')
        } else {
            console.log('значение false')
        }

        // пустая строка ( пустота) всегда - false
        let empty = ''
        if (empty) {
            console.log('значение true')
        } else {
            console.log('значение false')
        }

        // false - NaN является числовым
        if (NaN) {
            console.log('значение true')
        } else {
            console.log('значение false')
        }

        // true - при проверки булевыми значениями, интрепретируется как 'что то есть в значении' и поэтому true
        let str = 'hello';
        if (str) {
            console.log('значение true')
        } else {
            console.log('значение false')
        }

        // true
        if (4) {
            console.log('значение true')
        } else {
            console.log('значение false')
        }

//Тернарные операторы
4 ? console.log ('значение true') : console.log('значение false');
// 4 - выражение // ? если это true // то выполняется console.log ('значение true')  // : если это false // то выполняется console.log('значение false')
    let personAge = 28;
    /*if (personAge < 18) {
        message1 = 'Человек еще не совершеннолетний'
    } else {
        message1 = 'Человек совершеннолетний'
    }*/
    let message1 = personAge < 18
        ? 'Человек еще не совершеннолетний'
        : 'Человек совершеннолетний';
    console.log(message1); // Человек совершеннолетний

// операторы switch case
    let carColor = 'green';

    if (carColor === 'green') {
        console.log('цвет машины зеленый')
    } else if (carColor === 'yellow') {
        console.log('цвет машины желтый')
    } else if (carColor === 'red') {
        console.log('цвет машины красный')
    } else {
        console.log('цвет машины не определен')
    }
        // заменим на switch case
    switch (carColor) {
        case 'green':
            console.log('цвет машины зеленый')
            break // оператор выхода из цикла
        case 'yellow':
            console.log('цвет машины желтый')
            break
        case 'red':
            console.log('цвет машины красный')
            break
        default:
            console.log('цвет машины не определен')
    }

// ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ
/*
let carName1 = 'Bmw';
var carYear1 = 2007;
let personYear1 = 1990;

if ((2018 - carYear1) < 10) {
    console.log('Возраст меньше 10 лет')
} else {
    console.log('Возраст больше 10 лет')
}

if ((2018 - personYear1) < 10) {
    console.log('Возраст меньше 10 лет')
} else {
    console.log('Возраст больше 10 лет')
}

Дублируем код, поэтому нужна другая логика(функция) которая бы занималась определнием возраста
функция ниже

function calculateAge (year) { //year это параметр, параметр может принимать любой. можно написать objectYear и будет так же работать,
                                можно использовать просто букву 'y', не принципиально, главное чтобы мы сами поняли что это за параметр.
    let currentYears = 2018;
}

*/
let carName1 = 'Bmw';
var carYear1 = 2010;
let personYear1 = 1990;

function calculateAge (year) {
    let currentYears = 2018;
    let result = currentYears - year
    return result; // return - вернуть
}

function checkAndLogAge (year) {
    if (calculateAge(year) < 10) {
        console.log('Возраст меньше 10 лет')
    } else {
        console.log('Возраст больше 10 лет')
    }
}

checkAndLogAge(carYear1);
checkAndLogAge(personYear1);
/////////////////////////////////////////////////////////
//Способы создания функций Способы создания функций Способы создания функций Способы создания функций Способы создания функций Способы создания функций

function sayHelloTo (name) { // при таком варианте если вызвать sayHelloTo выше функции то функция сработает
    console.log('Privet, ' + name)
}
sayHelloTo('Elena');

let sayHelloTo1 = function (name) { // при таком варианте функции код читается сверху вниз и если вызвать
                                    // sayHelloTo1 выше функции то она не сработает.
    console.log('Privet, ' + name)
}
sayHelloTo1('Elena');
// СТРОКИ СТРОКИ СТРОКИ СТРОКИ СТРОКИ СТРОКИ СТРОКИ СТРОКИ СТРОКИ СТРОКИ СТРОКИ СТРОКИ СТРОКИ СТРОКИ СТРОКИ СТРОКИ СТРОКИ СТРОКИ СТРОКИ СТРОКИ СТРОКИ СТРОКИ

let str1 = 'Hello world' // нужно использовать одиночные ковычки для чистоты кода
let str2 = "hello world 2"

let message2 = 'Человека зовут "Андрей"' // Человека зовут "Андрей"
let message3 = `"Андрей" 'Андрей'` // можно использовать разные ковычки
let message4 = "\"Андрей\"'Андрей'" // \ экранирование

///// методы строк методы строк методы строк методы строк методы строк методы строк


let newMessage = 'Hello world!!!'

newMessage.length // длина слова //14
newMessage.toUpperCase() // все буквы заглавные
newMessage.toLowerCase() // все буквы строчные
newMessage.charAt() // определяет символ который находится на определенной позиции, например charAt (0)
newMessage.indexOf() // принимает в себя определенную строку которую мы хотим найти. например newMessage.indexOf ('world'); // 6  - означает что с 6 символа начинается слово ворлд, если не находится заданное слово то выведет -1 - это означает не найдено
newMessage.substr(1, 4) // 1 позиция с которой нужно начать забирать, 4 количество забранных символов - // ello
newMessage.substr(newMessage.indexOf('world'), 5)  //world
newMessage.substring(1) //ello world!!!, newMessage.substring(1,3) - //el - забирает с 1 по 3 символ из строки, при этом последний символ 3 не включается.

//если в консоле ввести:
//'строка'. и поставить строчку, можно увидеть все методы которые можно использовать к строке


// Числа число чисел Числа число чисел Числа число чисел Числа число чисел Числа число чисел Числа число чисел Числа число чисел Числа число чисел Числа число чисел Числа число чисел Числа число чисел Числа число чисел

console.log(42) // получаем число 42
console.log(-42) // получаем число -42
console.log(1.5) // получаем число 1.5 дробное число
console.log(-8/3) // получаем число -2.66666 в десятиричной системе исчисления
console.log(0xAB) // получаем число 171 из 16ичной системы в 10ричной
console.log(2e3) // получаем число 2000 (2 как основание и умножаем на 10 3 раза)
console.log(NaN) // получаем не число  - not a number. typeof NaN = number
console.log(123/0) // получаем infinity = бесконечность


let fortyTwo = 42
let delta = 8/3

console.log(fortyTwo.toString()) // - приводит число к строке
console.log(delta.toFixed(1)) // - метод toFixed приводит количество знаков после запятой и как тип строку
console.log(+delta.toFixed(1)) // - метод toFixed приводит количество знаков после запятой и как тип строку. если поставить + перед выражением то будет выдаваться число как тип
console.log(parseFloat(delta.toFixed(2)))  //парсит число и выдает c дробными значениями
console.log(parseInt(delta.toFixed(2))) // работает только с целыми числами

// проверка числа на валидность, правильное ли оно или нет и можно ли с ним работать
console.log(isNaN(NaN)) // true
console.log(isNaN(45)) //false

// конечное ли число?
console.log(isFinite(1/0)) //false является безконечносью
console.log(isFinite(9999999)) //true данное число является конечным

// масив массивы массива массив arr array масив массивы массива массив arr array масив массивы массива массив arr array масив массивы массива массив arr array

let cars = [
    'ford',
    'mazda',
    'lexus'
]
console.log(cars)

let any = [42,'apple',{a:1}]
console.log(any)

//получение индекса массива
console.log(cars[2])

// методы массивов
console.log(cars.length) // - длина массива
cars.push('audi') // добавляет в конец массива новый элемент
cars.pop('audi') // удаляет и возвращает(cars.pop // 'audi') последний элемент
cars.shift() // удаляет и возвращает (cars.shift // ford)  первый элемент массива
cars.unshift() // добавляет в начало массива элемент

let index = cars.indexOf('lexus')
let kia = cars[index]
console.log(kia)

// Объекты объект object obj Объекты объект object obj Объекты объект object obj Объекты объект object obj Объекты объект object obj Объекты объект object obj Объекты объект object obj Объекты объект object obj Объекты объект object obj Объекты объект object obj

let persona = { //объект
    name: 'vasya', // ключ: значение - строка
    year: 1990, // ключ: значение - число
    family: ['elena', 'igor'], // ключ: значение - массив
    cars: { // ключ: значние - объект со своими параметрами
        year: 2010,
        name: 'bmw',
        color: 'blue'
    },
    calculateeAge: function () {
        let age = 2018 - this.year // this = persona
        console.log('возраст', age)
    }
}

console.log(persona)
console.log(persona.calculateeAge())

// получение доступа к объекту через значение
console.log(persona.name) // покажи имя
console.log(persona['year']) // покажи год рождения
persona.year = 1992 // изменение ключа
console.log(persona.year) // покажи измененный ключ

// циклы цикл цикличность цик циклы цикл цикличность цик циклы цикл цикличность цик циклы цикл цикличность цик циклы цикл цикличность цик циклы цикл цикличность цик циклы цикл цикличность цик

let numbers = [1,2,3,4,5]
// i++ => i=1 1<5 true; i=2 2<5 true; i=3 3<5 true; i=4 4<5 true; i=5 5<5 false;
for (let i = 0;i<5; i++) { // () условия. от 0 до 5, после прохода прибавляй 1
    console.log(i)
}
// вывести все элементы массива numbers

let numbers1 = [1,2,3,4,5]
numbers1.push('priverterae');

for (let i = 0;i<numbers1.length; i++) { // () условия. от 0 до 5, после прохода прибавляй 1
    console.log(numbers1[i])
}

let numberss = [1,2,3,4,5,6,7,8,9]
for (let i = 0;i<numberss.length; i++) {
    if (numberss[i]% 2 !== 0) {
        continue
    }
    console.log(numberss[i]) // 2 4 6 8
}

let numbersss = [1,2,3,4,5,6,7,8,9]
for (let i = 0;i<numbersss.length; i++) {
    if (numbersss[i] % 2 === 0) {
        continue
    }
    console.log(numbersss[i]) // 1 3 5 7 9
}

let numberssss = [1,2,3,4,5,6,7,8,9]
for (let i = 0;i<numberssss.length; i++) {
    if (numberssss[i] % 2 === 0) {
        break
    }
    console.log(numberssss[i]) // 2%1 = 1 break
}

let numbersS = [1,2,3,'4',5,6,7,8,9]
for (let i = 0;i<numbersS.length; i++) {
    if (typeof numbersS[i] === 'string') {
        break
    }
    console.log(numbersS[i]) // 1 2 3
}

let numbersSS = [1,2,3,'4',5,6,7,8,9]
for (let i = 0;i<numbersSS.length; i++) {
    if (typeof numbersSS[i] === 'string') {
        continue
    }
    console.log(numbersSS[i]) // 1 2 3
}

