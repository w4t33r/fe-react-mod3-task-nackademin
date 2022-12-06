

function getTopCandy() {
    return new Promise(function (resolve, reject) {
        resolve('Candy Fetch True')
    })
}

getTopCandy()
    .then(function (candy) {
        console.log(candy)
    })


const hello = async () => 'hello';

async function Second() {
    return console.log('Hello')
}

hello()
Second()


const myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('we waited')
    }, 500)
})
    .then(function () {
        console.log('we wait')
    })


function GreaterThan10(number) {
    return new Promise(function (resolve, reject) {
        if (number > 10) {
            resolve('your number more than 10')
        } else {
            reject('Your number less than 10')
        }
    })
}

GreaterThan10(12)
    .then(function (res) {
        console.log(res)
    })
GreaterThan10(9)
    .catch(function (rej) {
        console.log(rej)
    })

function toUpperCase(txt) {
    return new Promise((resolve, reject) => {
        if (typeof txt === "string") {
            resolve(txt.toUpperCase())
        } else {
            reject('Not a string value')
        }
    })
}

toUpperCase('oliver').then(function (result) {
    console.log(result)
})
toUpperCase(5).catch(function (err) {
    console.log(err)
})

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('We waited')
        }, ms)
    })
}

delay(5000).then(function (res) {
    console.log(res)
})


const stock = [
    {
        id: 0,
        name: 'STRAW'
    },
    {
        id: 1,
        name: 'GRASS'
    },
    {
        id: 2,
        name: 'NEEDLE'
    },
    {
        id: 3,
        name: 'STICK'
    }
]

function findByNames(text, arr) {
    return new Promise((resolve, reject) => {
        arr.forEach((item => {
            if (item.name === text) {
                return resolve(item)
            }
        }))
        reject('Nothing found')
    })

}

findByNames('NEEDLE', stock).then(function (res) {
    console.log(res)
})

findByNames('somesome', stock).catch(function (rej) {
    console.log(rej)
})

const sbtn = document.querySelector('#sBtn')
const stem = document.querySelector('#sTerm')

function findByNamess(text, arr) {
    sbtn.addEventListener('click', async () => {
        return new Promise((resolve, reject) => {
            arr.forEach((item => {
                if (item.name === text) {
                    return resolve(item.name)
                }
            }))
        })
    })
}

function findByNam(text,arr) {
    sbtn.addEventListener('click', async () => {
        return new Promise((resolve, reject) => {
            arr.forEach((item => {
                if(item.name === text){
                   resolve()
                    console.log('item, found:',item)
                    return resolve
                } 
            }))

        })
    })
}
findByNam(stem.value, stock)
