// запустить веб сервер

//установить express через нпм
// потом
const express = require('express')
const app = express()

app.set('view engine', 'ejs') // default files ejs
app.use(express.static('public')) /*
 use - позволяет использовать дополнительные опции в нашем приложении
 static - говорит об использовании статического пути
 */

app.get('/', (req, res) => { // методом get
    res.render('index') // мы будем рендерить некий файл индекс, с расширение ejs
})

app.listen (3000, () => { // слушаем 3000 порт
    console.log('server has started on port 3000');
})

// стартуем в консоле node index, либо через nodemon index чтобы всегда ребутился сервер

