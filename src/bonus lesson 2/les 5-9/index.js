// запустить веб сервер

//установить express через нпм
// потом
const express = require('express')
const app = express()
// получаем апи ключ на сайте погоды
const bodeParser = require('bode-parser')
const weatherRequest = require('./requests/weather_request.js')

app.set('view engine', 'ejs') // default files ejs
app.use(express.static('public')) /*
 use - позволяет использовать дополнительные опции в нашем приложении
 static - говорит об использовании статического пути
 */
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => { // методом get
    res.render('index') // мы будем рендерить некий файл индекс, с расширение ejs
})

app.post('/', async (req, res) => { /*  req - то с чем обращаемся в данный запрос, res - то как мы отвечаем на данный запрос */
    /* console.log(req.params) - отвечает за квери запрос после ? в адресной строке */
    const {city} = req.body
    /*  weatherRequest(city) // city: Санкт Петербург*/
    const {weather, error} = await weatherRequest(city)
    console.log('weather', weather)
    console.log('error', error)

    res.render('index')
})

app.listen (3000, () => { // слушаем 3000 порт
    console.log('server has started on port 3000');
})

// стартуем в консоле node index, либо через nodemon index чтобы всегда ребутился сервер

