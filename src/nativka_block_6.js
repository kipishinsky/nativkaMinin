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
/*

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

console.log (ford)
    Car {name: "ford", year: 2015}
        name: "ford"
        year: 2015
        __proto__:
            getAge: ƒ () // наша созданная функция через прототайп
            constructor: ƒ Car(name, year)
            __proto__: Object

console.log (bmw)
    Car {name: "BMW", year: 2012}
        name: "BMW"
        year: 2012
        __proto__:
            getAge: ƒ () наша созданная функция через прототайп
            constructor: ƒ Car(name, year)
            __proto__: Object


// напишем прототип свойство для всех машин, пусть все машины будут черного цвета

Car.prototype.color = 'black'

// ford.color
// <- 'black'
// bmw.color
// <- 'black'

// если мы захотим переопределить значение цвета, то
ford.color = 'red'
     Car {name: "ford", year: 2015}
        color: "red" // появился заданный цвет
         name: "ford"
         year: 2015
         > __proto__:
            color: "black" // но в прототипе всеравно сидит значение black, которое мы задали для всех объектов по умолчанию
            getAge: ƒ () наша созданная функция через прототайп
            constructor: ƒ Car(name, year)
            __proto__: Object


// теперь если вызвать
ford.color
// то в консоле будет показан цвет red, потому что color цепляется сверху вниз, самое высокоуровнее значение
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// создание и настройка объектов
var audi = Object.create({
    calculateDistancePerYear: function () {
        //создать новое свойство в объекте
        //  this.distancePerYaer = 33 ( простой способ
        // сложный способ
        Object.defineProperty(this,'distancePerYear', {
            value: Math.ceil (this.distance / this.age),
            enumerable: true,
            writable: false,
            configurable: false
        } ) /*
                Метод defineProperty - задавать определенные свойства объекту и
            так же их настраивать.
                Первым параметром указываем тот объект,
            которому мы хотим добавить новое свойство, в нашем случае объектом
            является ключевое слово this.
                Вторым параметром указываем название данного ключа, т.е. данного
            свойства которое мы хотим определить - 'distancePerYear'
                Третьим параметром мы указываем в формате объекта ровно тоже самое
            что мы делали до этого, мы создаем такой же объект {value: this.distance / this.age, enumerable: true, writable: false, configurable: false}


        вызовим audi.calculateDistancePerYear()
            получаем возраст
            calculate 3
            undefined
            > audi
                {name: "AUDI", model: "A3", year: 2015, distance: 100210, …}
                    age: (...)
                    distance: 100210
                    distancePerYear: 20042 //получаем в консоли созданный объект с определенными значениями, который еще умеет считать пройденное расстояние автомобиля в год
                    model: "A3"
                    name: "AUDI"
                    year: 2015
                    get age: ƒ ()
                    set age: ƒ ()
                    __proto__: Object

        */


        console.log('calculate', 2018 - this.year) /*
        console.log('calculate')
            {name: "AUDI", model: "A3", year: 2018, distance: 100210}
                    distance: 100210
                    model: "A3"
                    name: "AUDI"
                    year: 2018
                    __proto__:
                            calculateDistancePerYear: ƒ () //созданная нами функция
                            __proto__: Object

        audi.calculateDistancePerYear()
        <- calculate 3

        */

    }
}, {
    name: {
        value: 'AUDI', /* value {value: 'A3'} - является const-антой,
    которое можно в консоле изменить 'здесь и сейчас',
     но нельзя изменить глобально */
        enumerable: true, /*
        область видмости свойств объекта в глобале.
        свойства стали частью объекта
        */
        writable: false, /*
        можно ли изменять value - false (нет)
        */
        configurable: false /*
        данный ключ идет по умолчанию
        (мы не хотим чтобы данные поля у нас удалялись)
        */
    },
    model: {
        value: 'A3',
        enumerable: true,
        writable: false,
        configurable: false
    },
    year: {
        value: 2015,
        enumerable: true,
        writable: false,
        configurable: false
    },
    distance: {
        value: 100210,
        enumerable: true,
        writable: true, /*
        можно ли изменять value - true (да)
        */
        configurable: false
    },
    age: {
        enumerable: true, /*
        область видмости свойств объекта в глобале.
        свойства стали частью объекта
        */
        /*
         функция get будет вызываться в тот момент,
         когда мы будем обращаться к полю age
         */
        get: function () {
            console.log('получаем возраст')
            return new Date().getFullYear() - this.year
        },
        /*
         функция set будет вызываться в тот момент,
         когда мы будем обращаться к полю age
         */
        set: function () {
            console.log('устанавливаем значение')
        }
    }
}) /* object самый глобальный класс в JS,
функция create принимает 2 параметра, первый параметр (object) отвечает за
прототип данного объеекта и описывается он в виде объекта. за второй параметр
отвечает описание свойств объекта из первого параметра (properties - свойства).
описывать можно так же через объект
*/

console.log(audi) /*
    {name: "AUDI", model: "A3", year: 2015, distance: 100210}
            age: (...) // если мы его раскроем, то получим 5, потому что new Date().getFullYear() - this.year (создаем новый объект дату, кладем в него текущее время 10.06.2020 и отнимаем от 2020 - 2015 = 5. в консоль выводится сообщение - получаем возраст
            distance: 100210
            model: "A3"
            name: "AUDI"
            year: 2015
            > get age: ƒ ()
            > set age: ƒ ()
            > __proto__: Object

    audi.age
     получаем возраст
     <- 5
    audi.age = 3
     устанавливаем значение // тут уже отрабатывает метод set (установить) и мы присваиваем значение
    <- 3

 */

/*
    заходим на сайт mdn
    в поиске пишем property descriptor
    читаем
*/

// получаем автоматически все ключи
/*
создаем цикл фор и на каждой итерации создаем значение key
(тоже самое что и i, только название другое

для того, чтобы пробежать именно по ключам объекта audi, нужно воспользоваться
оператором in
*/
/*
for (var key in audi) {
    console.log(key) /!*
        {name: "AUDI", model: "A3", year: 2015, distance: 100210}
        name
        model
        year
        distance
        age
        calculateDistancePerYear // попадает сюда, потому что присутствует в прототипе
     *!/
}
*/

// если не хочешь получать прототипы вместе с полями корневого объекта, то нужна защита

/*
for (var key in audi) {
    if (audi.hasOwnProperty(key)) {
        console.log(key, audi[key]) /!*
            name
            model
            year 2015
            distance 100120
            получаем возраст
            age 5
        *!/
    }
}
*/

/*
 если по каким либо причинам нужно не показывать какое либо свойство,
 то нужно воспользоваться методом  enumerable: true
 (область видмости свойств объекта в глобале. свойства стали частью объекта)
*/

/* благодаря данным методам можно создавать много гибкого и мощного функционала */