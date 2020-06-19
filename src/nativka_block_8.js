// вывести сообщение в алерте через 2 секунды
setTimeout(function () {
    alert('Hello')
}, 2000)

// через каждые 2 секунды выводить ++ counter
var counter = 0;
var interval = setInterval(function () {
    console.log(++counter)
}, 2000)

//остановить счетчик интервала
clearInterval(interval)

/* базовые составляющие асинхронности языка */






