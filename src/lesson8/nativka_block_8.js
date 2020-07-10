///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
    Реализуйте класс MyPromise, который будет работать точно так же, как и promise.
    Достаточно реализовать методы: then, catch, finally
    Методы All, race делать не нужно
*/


// так работают стандартные промисы
/*
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({id:2})
    }, 2000)
})
promise
    .then(num => num *= 2)
    .catch(err => console.log(err))
    .then(num => num *= 3)
    .finally(() => {
        console.log('finally')
    })
*/


// пишем свое
class MyPromise {
    constructor (callback) {

        this.onCatch = null
        this.onFinally = null
        this.thenCb = []
        this.isRejected = false

        function resolver(data) {
            if (this.isRejected) {
                return
            }

            this.thenCb.forEach(cb => {
                data = cb(data)
            })

            if (this.onFinally) {
                this.onFinally()
            }
        }
        function rejecter(error) {
            this.isRejected = true
            if (this.onCatch) {
                this.onCatch(error)
            }
            if (this.onFinally) {
                this.onFinally()
            }
        }
        callback(resolver.bind(this),rejecter.bind(this))
    }

    then(cb) {
        this.thenCb.push(cb)
        return this
    }

    catch(cb) {
        this.onCatch = cb
        return this
    }

    finally(cb) {
        this.onFinally = cb
        return this
    }
}

const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        reject('some error')
        resolve(10)
    }, 2000)


})

promise
    .then(num => num *= 2)
    .catch(err => console.error(err))
    .then(num => num *= 3)
    .finally(() => {
        console.log('finally')
    })
    .then(num => console.log('Done!', num))
