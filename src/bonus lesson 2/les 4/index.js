// запустить веб сервер

//установить express через нпм
// потом
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.end('Hello from nodejs')
})

app.listen (3000, () => { // слушаем 3000 порт
    console.log('server has started on port 3000');
})

// стартуем в консоле node index, либо через nodemon index чтобы всегда ребутился сервер

