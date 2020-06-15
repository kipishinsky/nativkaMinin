////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Переменные Let, Const  Переменные Let, Const  Переменные Let, Const   Переменные Let, Const  Переменные Let, Const  Переменные Let, Const

// var - variable - переменная в глобальном маштабе
/*
var color = 'red'
console.log(color) // red
*/
// можем ее изменять, менять ей типы. делаем что угодно
/*
color = 'blue'
console.log(color) // blue
*/


// в es 6 получили 2 новых способа объявления переменных
// let работает точно так же как и var, но есть одна особенность
/*for (var i=0; i < 5; i++) {
    console.log(i) // 0 1 2 3 4
    setTimeout(function () {
        console.log(i) // получаем 5 раз 5ку. вопрос, почему без таймаута выдает нормальную итерацию, а с тайм аутом выдает 5 по 5
    }, 2000)
}*/
/* дело в следующем, когда мы создаем перменную через ключевое слово var,
     мы создаем переменную всего лишь один раз. создавая переменную один раз
     мы пробегаемся по циклу в синхронном формате и когда у нас происходит сет таймаут, тоесть
     выдерживается 2 ссекунды, JS уже успевает пробежаться по циклу до конца и
     переменная i становится = 5. данная проверка не проходит и цикл выходит из своего действия
     Но, сетТаймаут к этому времени еще не отрабатывает, когда проходит 2 сек он начинает
     делать консоль логи, но в параметр мы передаем не значение i, а ссылку на переменную i
     где ее значение равно 5 и поэтому вывводит 5 раз в консоль цифру 5. и это как бы не должно
     работать но работает. небольшие странности

 */
/*  если var изменить на let,
        то все будет работать корректно
 */

/*for (let i=0; i < 5; i++) {
    console.log(i) // 0 1 2 3 4
    setTimeout(function () {
        console.log(i) // 0 1 2 3 4
    }, 2000)
}*/
/*
Идея ключевого слова let, заключается в том, что
    данное ключевое слово работает только внутри блока, в котором оно было заданно.
    т.е. при пробегании цикла один раз, переменная i = 0 затирается новым значением 1
    и в консоль падает сначала 0, потом 0 затерся 1, потом 1 затерлась 2 и так до 4.
    как только i равняется 5, то блок не выполняется из за условия i < 5

    В этом и заключается основное отличие переменной let от var
*/



// переменная const
/*
переменная const не изменяется. но и у нее есть небольшая особенность
*/
/*
const hex = '#FFAABB'
hex = '#FFEEEEBB' // Uncaught TypeError: Assignment to constant variable.
document.querySelector('h1').style.color = hex
*/
/* изменить константу мы не смогли и у нас вылезла ошибка
    поэтому теперь всегда, когда мы видем ключевое слово const
    мы автоматически понимаем, что это переменная которая не может изменяться
*/
// теперь небольшая особенность
/*
const array = [1,2];
const obj = {a: 1};

array.unshift(4)
obj.b = 2


console.log(array) // [4, 1, 2]
console.log(obj) // {a: 1, b: 2}
*/
/*
Мы видим, что мы получили новые значения и в массиве и в объекте
    и все это проихошло не смотря на том, что мы задали все через ключевое слово const,
    где const(константа) по идее не должно изменяться.
    но смысл в том, что мы меняем значения массива и значение объекта (менять  внутреннюю структуру мы можем)

    Получается так, что мы не можем переприсвоить новое значение, например
    const obj = {a: 1}
    obj = 2 // ошибка
    Так мы сделать не можем. потому что в const obj лежит объект, а присваиваем мы ему число
    получается, что поменять содержимое объекта мы можем, а вот поменять тип переменной уже нет
*/
/*
    Вообще считается хорошим тоном, прописывать переменные через const
    Это указывает разработчикам на то, что переменная не изменит свой тип (как минимум)
    а в идеале и не будет изменять свое содержимое.

    Если нужно менять тип переменной, то используй let.
    Если нужно поменять только содержимое то const
    в остальных случаях всегда const
*/




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Стрелочные функции   Стрелочные функции   Стрелочные функции   Стрелочные функции   Стрелочные функции   Стрелочные функции   Стрелочные функции


// классическое объявление функции
/*
function getAge (year) {
    const current = new Date().getFullYear()
    return current - year
}
console.log(getAge(1993)) //27
*/


// Теперь стрелочная функция - она должна хранится в переменной. Такой синтаксис
/*
const calculateAge = (year) => {
    const current = new Date().getFullYear()
    return current - year
}
console.log(calculateAge(1992)) // 28
*/


// Различные вариации

// при указании одного параметра функции
/*
const ageGet = year => { // если указывается один параметр, то можно не использовать скобки
    const current = new Date().getFullYear()
    return current - year
}
console.log(ageGet(1990)) // 30
*/

// если функция записана в одну строчку, то можно не использовать {} и слово return
/*
const getRange = year => new Date().getFullYear() - year
console.log(getRange(1980)) // 40
*/

// так же можно прописывать так
/*
const logAge = year => console.log(new Date().getFullYear() - year)
console.log(logAge(1945)) // 75
*/

//
/*
const person = {
    age:25,
    firstName: "Max",
    logNameWithTimeout: () => {
        setTimeout(() => {
            console.log(this.firstName)
        }, 1000)
    }
}
person.logNameWithTimeout() // undefined и через секунду undefined
*/
/* undefined потому что this сейчас обращается к глобальному объекту window
        решить данную проблему можно через метод bind.
        но и даже если мы подставим bind(this)
            logNameWithTimeout: () => {
                setTimeout(function () {
                    console.log(this.firstName)
                }.bind(this), 1000)
            }
    то мы всеравно получим undefined, почему так происходит
    потому, что когда мы создаем функции через ключевое слово function то в функции
    автоматически создается определенный контекст. Стрелочная функция не создает свой собственный
    контекст и поэтому выдает undefined
*/
/*
 Чтобы решить данную проблему, то можно написать так
*/

/*
const persona = {
    age:25,
    firstName: 'Max',
    logNameWithTimeout() {
        setTimeout(() => {
            console.log(this.firstName)
        }, 1000)
    }
}
persona.logNameWithTimeout() // undefined и через секунду Max
*/
/*
    Мы прописывает метод не через функцию, или стрелочную функцию, а прописываем
    синтаксис как метод, который будет нести в себе контекст от метода, а дальше уже будет
    передаваться стрелочная функция. Это возможно внутри объектов или классов

*/



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Параметры по умолчанию     Параметры по умолчанию     Параметры по умолчанию     Параметры по умолчанию     Параметры по умолчанию

/*
const createPost = (title, text, date) => {
    return {
        title: title,
        text: text,
        date: date
    }
}
const post = createPost('Скоро новый год', 'Скоро будет 2021', '01.05.2020')
console.log(post) // {title: "Скоро новый год", text: "Скоро будет 2021", date: "01.05.2020"}
*/
/*
    Мы передаем в функцию 3 параметра: title, text, date.
    но при этом, дата присваивается автоматически (под капотом)
    поэтому мы можем ее не передавать, тем самым укоротив себе простыню
*/


// не передаем дату, а присваиваем автоматом
/*
const createPostDate = (title, text, date = new Date().toLocaleDateString()) => {
    return {
        title: title,
        text: text,
        date: date
    }
}
const postDate = createPostDate('Скоро новый год', 'Скоро будет 2021')
console.log(postDate) // {title: "Скоро новый год", text: "Скоро будет 2021", date: "15.06.2020"}
*/

/* мы не передаем параметр date в функцию, и она присваивает метод .toLocalDateString() по умолчанию
    и у нас выводится {title: "Скоро новый год", text: "Скоро будет 2021", date: "15.06.2020"}
    если передать дефолтные значения в параметры изначально и не передавать их потом
    const createPostDate = (title, text = 'Default TEXT', date = new Date().toLocaleDateString()) => {
        return {
            title: title,
            text: text,
            date: date
        }
    }
    const postDate = createPostDate('Скоро новый год')
    console.log(postDate) // {title: "Скоро новый год", text: "Default TEXT", date: "15.06.2020"}

   Дефолтные параметры работают только в том случае, если мы их не передаем,
   если мы их передали, то они перезатераются новыми (переданными) значениями

*/
/* если мы передаем параметры в функцию, а в самой функции эти параметры
равны возвращаем элементам
    например:
        return {
            title: title,
            text: text,
            date: date
        }

    То можно записать так:
    const createPostDate = (title, text, date = new Date().toLocaleDateString()) => {
        return {title, text, date} // убрали дублирование кода
    }
    const postDate = createPostDate('Скоро новый год')
    console.log(postDate) // {title: "Скоро новый год", text: "Default TEXT", date: "15.06.2020"}
*/



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Объекты    Объекты    Объекты    Объекты    Объекты    Объекты    Объекты    Объекты    Объекты    Объекты    Объекты    Объекты

// чтобы вернуть объект через стрелочную функцию.
/*
const createCar1 = (name, model) => {
    return {name, model}
}
const bmw1 = createCar1 ('bmw', '3')
console.log(bmw1) // {name: "bmw", model: "3"}
*/

// если вернуть в одну строчку
    // не работает
/*
const createCar2 = (name, model) => {name, model}
const bmw2 = createCar2 ('bmw', '3')
console.log(bmw2) // так не работает, функция думает что это ее тело
*/

    // работает
/*
const createCar3 = (name, model) => ({name, model}) // чтобы функция не принимала объект как тело, нужно обернуть в (скобки)
const bmw3 = createCar3 ('bmw', '3')
console.log(bmw3) // {name: "bmw", model: "3"}
*/

// динамические ключи (поля) в объектах
/*
const audi = {
    name: 'audi',
    ['model ' + Math.random()]: 'X6 sport'
}
console.log(audi) // {name: "audi", model 0.06283867098789409: "X6 sport"}
*/

/* мы создали переменную, которая хранит в себе 'year', после этого
        мы указали в объекте audi1 ссылку на переменную
*/
/*
const yearField = 'year'
const audi1 = {
    name: 'audi',
    ['model']: 'X6 sport',
    [yearField]: 2018
}
console.log(audi1) // {name: "audi", model: "X6 sport", year: 2018}
*/


// деструктуризация
/*
const yearField1 = 'year'
const ford = {
    name: 'ford',
    ['model']: 'Focus',
    [yearField1]: 2018,
    logField () {
        console.log(this.name, this.model, this.year)
    }
}
console.log(ford) // {name: "ford", model: "Focus", year: 2018, logfield: ƒ}
ford.logField() // ford Focus 2018
*/

/*  Чтобы провести деструктуризации и избавится от дублирующего слова this
      logField () {
        const {name, model, year} = this
        console.log(this.name, this.model, this.year)
      }


      Еще примеры деструктуризации
      // const year = ford.year
      const {year} = ford
      console.log(year) // 2018
            Данный метод широко применяется в модулях, в импортах и экспортах
*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Операторы Rest и Spread     Операторы Rest и Spread     Операторы Rest и Spread     Операторы Rest и Spread     Операторы Rest и Spread

const form = document.querySelector('form')

form.addEventListener('submit', event => {
    event.preventDefault()
    const title = form.title.value
    const text = form.text.value
    const description = form.description.value

    console.log(title,text,description) // что ввели в инпуты то и выдало

    saveForm({title, text, description})
})

function saveForm (data) {
    const formData = {
        date: new Date().toLocaleDateString(),
        title: data.title,
        text: data.text,
        description: data.description
    }
    console.log('Form DaTA: ', formData)
}

// spread оператор создает новые объекты, либо новые ссылки (разворачивает объекты)
// пишется так - ...
/*
function saveForm (data) { // saveForm({title, text, description}) - ({title, text, description})
    const formData = {
        date: new Date().toLocaleDateString(),
        ...data // ... спред оператор и к нему подставлем data, то что пришло в функцию (({title, text, description}) )
    }
    console.log('Form DaTA: ', formData)
}
*/


// rest оператор применяется для сбора всех параметров

/*

form.addEventListener('submit', event => {
    event.preventDefault()
    const title = form.title.value
    const text = form.text.value
    const description = form.description.value

    saveForm(title, text, description) // передаем 3 переменных
})

function saveForm (...args) {
    // console.log ('Args', args) // переданные значения в массиве
    const [title, text, description] = args
    const formData = {
        date: new Date().toLocaleDateString(),
        title, text, description
   }
    console.log('Form DaTA: ', formData)
}
*/
