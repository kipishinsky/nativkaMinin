const rp = require('request-promise') // подключаем модуль

module.exports = async function(city = '') {
    if(!city) {
        throw new Error ('Имя города не может быть пустым')
    }
    const KEY = '124134h13jg12g312h3j'
    const uri = 'https://api.openweathermap.org/data/2.5/weather'
    const options = {
        uri,
        qs: {
            appid: KEY,
            q: city,
            units: 'imperial'
        },
        json: true
    }

    try {
        const response = await rp(options)
/*        console.log(response)*/
        const celsium = (data.main.temp - 32) * 5/9 // переводим в цельсии, формула (  (data.main.temp - 32) * 5/9    )

        return {
            /*weather: '',*/
            weather: `${data.name} : ${celsium.toFixed(0)}`, // санкт петербург 23
            error: null
        }
    } catch (error) {
/*        console.log(error)*/
        return {
            weather: null,
            error: error.error.message
        }
    }
    /*const response = await rp(options)
    console.log(response)  // { много параметров }*/
}