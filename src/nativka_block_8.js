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
console.log('Клиент: хочу получить список пользователей')
console.log('...')

    //server
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



