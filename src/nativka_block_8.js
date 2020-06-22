// вывести сообщение в алерте через 2 секунды
/*setTimeout(function () {
    alert('Hello')
}, 2000)*/

// через каждые 2 секунды выводить ++ counter
/*var counter = 0;
var interval = setInterval(function () {
    console.log(++counter)
}, 2000)*/

/*
//остановить счетчик интервала
clearInterval(interval)
*/

/* базовые составляющие асинхронности языка */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Старый поход CallBack   Старый поход CallBack   Старый поход CallBack   Старый поход CallBack   Старый поход CallBack   Старый поход CallBack

// взаимодействие клиента и сервера
// client => server => dataBase => server => client

// client
/*
console.log('Клиент: хочу получить список пользователей')
console.log('...')
*/

    //server
/*setTimeout(function() {
    console.log('Сервер: Запрашиваю список пользователей в БД')
    console.log('...')

    // dataBase
    setTimeout(function() {
        console.log('БД: формирую список пользователей')
        console.log('...')

        // server
        setTimeout(()=> {
            console.log('Сервер: трансформирую данные для клиента ')
            console.log('...')

            setTimeout(function() {
                console.log('Клиент: получил данные с сервера и отображаю их')
                console.log('...')
            }, 1000)
        }, 500)
    }, 500)
}, 1000)*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Как работают PROMISE      Как работают PROMISE      Как работают PROMISE      Как работают PROMISE      Как работают PROMISE
// Promise (обычно их так и называют «промисы») – предоставляют удобный способ организации асинхронного кода.
// https://learn.javascript.ru/promise
// суть промисов - создаем какой то объект и оборачиваем в него какой то асинхронный код



/*
setTimeout(function() {
    console.log('Сервер: Запрашиваю список пользователей в БД')
    console.log('...')

    // dataBase
    setTimeout(function() {
        console.log('БД: формирую список пользователей')
        console.log('...')

        // server
        setTimeout(()=> {
            console.log('Сервер: трансформирую данные для клиента ')
            console.log('...')

            setTimeout(function() {
                console.log('Клиент: получил данные с сервера и отображаю их')
                console.log('...')
            }, 1000)
        }, 500)
    }, 500)
}, 1000)
*/

/*
console.log('Клиент: хочу получить список пользователей')
console.log('...')


let promise = new Promise(function (resolve, reject) { /!*
    new Promise - создаем новый обхект
    в параметры передаем функцию, которая выполняется сразу же, функция принимает 2 параметра
    resolve - вызывается тогда, когда мы закончили какую то операцию успешно (без ошибки)
    reject - вызывается тогда, когда мы закончили какую то операцию с ошибкой
*!/
    setTimeout(function(){
        console.log('Сервер: Запрашиваю список пользователей в БД')
        console.log('...')
        resolve()
    }, 1000)
});

// метод .then - соединение. последовательное соединение операций
// сначала выполнится let promise (сервер), потом приклеится за ним код БД, потом приклеится за ним Сервер, потом Клиент
promise.then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //добавим слой данных
            let users = [
                {uid: 'id1', name: 'Max'},
                {uid: 'id2', name: 'Elena'}
            ];
            console.log('БД: формирую список пользователей');
            console.log('...');
            resolve(users);
        }, 500)
    })
})

    .then((dbUsers) => { // dbUsers - называй как хочешь, в пропсах уже сидят данные users, которые мы передали из предыдущего метода
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Сервер: трансформирую данные для клиента ')
                console.log('...')
                let users2 = dbUsers.map ( (user) => {
                    return {
                        id: user.id,
                        firstName: user.name,
                        timestamp: Date.now()
                    }
                })
                resolve(users2)
            }, 500)
        })
    })

    .then((users2) => {
        setTimeout(function() {
            console.log('Клиент: получил данные с сервера и отображаю их', users2)
            console.log('...')
        }, 1000)
    })

        // метод catch(кетч) его мы вызываем в любом месте. он служит для того, чтобы мы обрабатывали ошибки
    .catch((error) => {
        console.error(error)
    })

        // метод finally (файнали) - вызывается тогда, когда закончились все асинхронные операции,
        // даже если вызовится ошибся и какие то методы не отработают, метод файнали вызовится, тем самым показав
        // что все отработало - сделать какое либо действие в любом случае
    .finally (()=>{
        console.log('finally')
    })
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Метод .Fetch    Метод .Fetch    Метод .Fetch    Метод .Fetch    Метод .Fetch    Метод .Fetch    Метод .Fetch    Метод .Fetch
// делает запрос на удаленный сервер и возвращает нам promise(обещание c англ)

// взаимодействие с сервером
// тесты проводить можно на хэл ресурсе https://jsonplaceholder.typicode.com/
// асинхронные запросы не приводят к перезагрузке страницы


/*// достали кнопку
document.querySelector('#load').addEventListener('click', load)

//проверка работоспособности связки client => server
function load() {

    let url = 'https://jsonplaceholder.typicode.com/users'

    fetch(url)
        .then( function (response) {
            return response.json()
            //console.log('response', response) // при нажатии на кнопку получаем - Response {type: "cors", url: "https://jsonplaceholder.typicode.com/users", redirected: false, status: 200, ok: true, …}
        })
        .then((data) => {
            let ul = document.querySelector('#list')

            let html = data.map((i) => {
                return '<li>' + i.id + ' ' + i.name + ' (' + i.email + ')</li>'
            })
            //console.log('data', data) //data (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
            //console.log('data', html) // data (10) ["<li>1 Leanne Graham (Sincere@april.biz)</li>", "<li>2 Ervin Howell (Shanna@melissa.tv)</li>", "<li>3 Clementine Bauch (Nathan@yesenia.net)</li>", "<li>4 Patricia Lebsack (Julianne.OConner@kory.org)</li>", "<li>5 Chelsey Dietrich (Lucio_Hettinger@annie.ca)</li>", "<li>6 Mrs. Dennis Schulist (Karley_Dach@jasper.info)</li>", "<li>7 Kurtis Weissnat (Telly.Hoeger@billy.biz)</li>", "<li>8 Nicholas Runolfsdottir V (Sherwood@rosamond.me)</li>", "<li>9 Glenna Reichert (Chaim_McDermott@dana.io)</li>", "<li>10 Clementina DuBuque (Rey.Padberg@karina.biz)</li>"]
            //console.log('data', html.join(' ')) //data <li>1 Leanne Graham (Sincere@april.biz)</li> <li>2 Ervin Howell (Shanna@melissa.tv)</li> <li>3 Clementine Bauch (Nathan@yesenia.net)</li> <li>4 Patricia Lebsack (Julianne.OConner@kory.org)</li> <li>5 Chelsey Dietrich (Lucio_Hettinger@annie.ca)</li> <li>6 Mrs. Dennis Schulist (Karley_Dach@jasper.info)</li> <li>7 Kurtis Weissnat (Telly.Hoeger@billy.biz)</li> <li>8 Nicholas Runolfsdottir V (Sherwood@rosamond.me)</li> <li>9 Glenna Reichert (Chaim_McDermott@dana.io)</li> <li>10 Clementina DuBuque (Rey.Padberg@karina.biz)</li>
            ul.insertAdjacentHTML('afterbegin', html.join(' '))
        })
}*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Операторы: Async Await       Операторы: Async Await       Операторы: Async Await       Операторы: Async Await       Операторы: Async Await
// https://habr.com/ru/company/ruvds/blog/414373/
// es7

document.querySelector('#load').addEventListener('click', load)

//рефакторим новым синтаксисом фукнцию load из предыдущего урока
// async перед функцией, говорит нам о том, что функция асинхронная
async function load() {
    let url = 'https://jsonplaceholder.typicode.com/users'
    let response = await fetch(url)
    let data = await response.json()
    let html = data.map( i => {
        return '<li>' + i.id + ' ' + i.name + ' (' + i.email + ')</li>'
    }).join(' ')
    document.querySelector('#list').insertAdjacentHTML('afterbegin', html)
}






