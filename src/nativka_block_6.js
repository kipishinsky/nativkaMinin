let car = {
    name: 'ford',
    year: 2015,
    person: {
        name: 'Yana',
        age: 29
    }
}

console.log(car) /*
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
// car.__proto__  => Object.prototype наследование объекта
/*
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


