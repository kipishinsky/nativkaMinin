/*
let car = {
    name: 'ford',
    year: 2015,
    person: {
        name: 'Yana',
        age: 29
    }
}
*/
/*
console.log(car)
__proto__: // показывает все методы, которые мы можем вызвать
    constructor: ƒ Object() // самый верхнеуровневый класс, от него все идет
    hasOwnProperty: ƒ hasOwnProperty()
    isPrototypeOf: ƒ isPrototypeOf()
    propertyIsEnumerable: ƒ propertyIsEnumerable()
    toLocaleString: ƒ toLocaleString()
    toString: ƒ toString()
    valueOf: ƒ valueOf()
    __defineGetter__: ƒ __defineGetter__()
    __defineSetter__: ƒ __defineSetter__()
    __lookupGetter__: ƒ __lookupGetter__()
    __lookupSetter__: ƒ __lookupSetter__()
    get __proto__: ƒ __proto__()
    set __proto__: ƒ __proto__()
*/
/*
// car.__proto__  => Object.prototype наследование объекта
    проверка
 > car.__proto__ === Object.prototype
 <- true
*/
/* весь джаваскрипт построен на объектах
    рассмотрим пример
    let arr = [1,2,3]
    console.log(arr)
    // (3) [1, 2, 3]
        //разворачиваем
            0: 1
            1: 2
            2: 3
            length: 3
            > __proto__: Array(0)
            // разворачиваем
                > concat: ƒ concat()
                > constructor: ƒ Array()
                > copyWithin: ƒ copyWithin()
                > entries: ƒ entries()
                > every: ƒ every()
                > fill: ƒ fill()
                > filter: ƒ filter()
                > find: ƒ find()
                > findIndex: ƒ findIndex()
                > flat: ƒ flat()
                > flatMap: ƒ flatMap()
                > forEach: ƒ forEach()
                > includes: ƒ includes()
                > indexOf: ƒ indexOf()
                > join: ƒ join()
                > keys: ƒ keys()
                > lastIndexOf: ƒ lastIndexOf()
                > length: 0
                > map: ƒ map()
                > pop: ƒ pop()
                > push: ƒ push()
                > reduce: ƒ reduce()
                > reduceRight: ƒ reduceRight()
                > reverse: ƒ reverse()
                > shift: ƒ shift()
                > slice: ƒ slice()
                > some: ƒ some()
                > sort: ƒ sort()
                > splice: ƒ splice()
                > toLocaleString: ƒ toLocaleString()
                > toString: ƒ toString()
                > unshift: ƒ unshift()
                > values: ƒ values()
                > Symbol(Symbol.iterator): ƒ values()
                > Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
                > __proto__: Object  // в конце полюбому получаем объект, потому что все является объектами, даже массивы
                    //разворачиваем
                        constructor: ƒ Object()
                        hasOwnProperty: ƒ hasOwnProperty()
                        isPrototypeOf: ƒ isPrototypeOf()
                        propertyIsEnumerable: ƒ propertyIsEnumerable()
                        toLocaleString: ƒ toLocaleString()
                        toString: ƒ toString()
                        valueOf: ƒ valueOf()
                        __defineGetter__: ƒ __defineGetter__()
                        __defineSetter__: ƒ __defineSetter__()
                        __lookupGetter__: ƒ __lookupGetter__()
                        __lookupSetter__: ƒ __lookupSetter__()
                        get __proto__: ƒ __proto__()
                        set __proto__: ƒ __proto__()
                        // получаем теже методы, что и объекте
 это работает так:
  [] => наследуется от класса Array => а поскольку массивы так же являются объектами, то и наследование происходит от Object
 */
// обычно мы записываем объекты традиционно
/*
let car = {
    name: 'ford',
    year: 2015,
}
*/
// но есть и другой вариант
// можно создать функцию-класс. Функции, которые по факту являются классами, мы называем с большой буквы
/*
function Car (name, year) {
    this.name = name
    this.year = year
}
var ford = new Car ('ford', 2015)
console.log(ford)
   Car {}
    > __proto__: Object
*/
/*
function Car (name, year) {
    this.name = name
    this.year = year
}
var ford = new Car ('ford', 2015)
console.log (ford)
    Car {name: "ford", year: 2015}
        name: "ford"
        year: 2015
        > __proto__:
            > constructor: ƒ Car(name, year)
            > __proto__: Object
*/
/*
function Car (name, year) {
    this.name = name
    this.year = year
}
var ford = new Car ('ford', 2015)
var bmw = new Car ('BMW', 20112)
console.log (ford)
console.log (bmw)
    Car {name: "ford", year: 2015}
        name: "ford"
        year: 2015
        > __proto__:
            > constructor: ƒ Car(name, year)
            > __proto__: Object
    Car {name: "BMW", year: 20112}
        name: "BMW"
        year: 20112
        __proto__:
            constructor: ƒ Car(name, year)
            __proto__: Object
*/
// данные методы написания объектов через функции (методы ES5), схожи с написанием объектов (стандарта ES6), просто пишется через другую конструкцию

// теперь напишем свой прототип для объектов
// плюс прототипов в том, чтоне нужно писать под каждый объект свою фукцию или метод
// пишешь прототип и он работает под все объекты и функции

function Car (name, year) {
    this.name = name
    this.year = year
}

// пишем прототип функцию которая будет высчитывать сколько машине лет
Car.prototype.getAge = function () { // getAge (называй как хочешь, это лишь название метода для которого мы пишем функцию
    return new Date().getFullYear() - this.year // new Date() - создаем новый объект Date, .getFullYear() - получим текущий год и потом нужно вычесть год машины обращаемся через this,year - где this. является обращение к var ford, var bmw по второму параметру функции Car.
}

var ford = new Car ('ford', 2015)
var bmw = new Car ('BMW', 2012)

console.log (ford) /*
    Car {name: "ford", year: 2015}
        name: "ford"
        year: 2015
        __proto__:
            getAge: ƒ () // наша созданная функция через прототайп
            constructor: ƒ Car(name, year)
            __proto__: Object
*/
console.log (bmw) /*
    Car {name: "BMW", year: 2012}
        name: "BMW"
        year: 2012
        __proto__:
            getAge: ƒ () наша созданная функция через прототайп
            constructor: ƒ Car(name, year)
            __proto__: Object
*/

// напишем прототип свойство для всех машин, пусть все машины будут черного цвета

Car.prototype.color = 'black'

// ford.color
// <- 'black'
// bmw.color
// <- 'black'

// если мы захотим переопределить значение цвета, то
ford.color = 'red'
/*  Car {name: "ford", year: 2015}
        color: "red" // появился заданный цвет
         name: "ford"
         year: 2015
         > __proto__:
            color: "black" // но в прототипе всеравно сидит значение black, которое мы задали для всех объектов по умолчанию
            getAge: ƒ () наша созданная функция через прототайп
            constructor: ƒ Car(name, year)
            __proto__: Object
 */

// теперь если вызвать
ford.color
// то в консоле будет показан цвет red, потому что color цепляется сверху вниз, самое высокоуровнее значение