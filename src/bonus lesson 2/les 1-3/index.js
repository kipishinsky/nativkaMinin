const now = new Date().toLocaleString()

console.log(now)

const fs = require('fs') // подключение модуля


// создание нового файла
const data = `
 Hello from NodeJS
 I am random text
`
fs.writeFileSync('nodejs.txt',  data) // 1 парам - название того файла, который хотим сформировать, 2 парам - дата

//прочитать содержимое файла
const result = fs.readFileSync('nodejs.txt', {encoding: 'utf-8'})
console.log(result) // Hello from NodeJS I am random text

// путь до текущей папки
console.log(__dirname)

// пусть до текущего файла
console.log(__filename)