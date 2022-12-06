const hayStack = [
    {
        id: 0,
        name: 'Straw'
    },
    {
        id: 1,
        name: 'Grass'
    },
    {
        id: 2,
        name: 'Needle'
    },
    {
        id: 3,
        name: 'Stick'
    }
]


const findByName = (arr, name) => {
    return arr.filter((el) => {
        if (el.name === name) {
            console.log(`${el.name} id:${el.id}`)
        }
    })
}
findByName(hayStack, 'Straw')


const numbers = [5, 3, 8, 1]

const filterRange = (arr, a, b) => {
    console.log(arr)
    console.log(`Range: ${a} - ${b}`)
    return arr.filter((item) => {
        if (item >= a && item <= b) {
            console.log('Filtered items in range:', item)
        }
    })

}

filterRange(numbers, 1, 6)


const users = [
    {name: "John", age: 25},
    {name: "Pete", age: 30},
    {name: "Mary", age: 28}
]

const name = users.map((names) => {
    return names.name
})
console.log(name)


const user = [
    {name: "John", surname: "Smith", id: 1},
    {name: "Pete", surname: "Hunt", id: 2},
    {name: "Mary", surname: "Key", id: 3}
]
const fullName = user.map((fname) => {
    return fname.name + ' ' + fname.surname
})

console.log(fullName)


const products = [
    {
        name: 'Three Weiss Men',
        style: 'weiss',
        abv: '4.5',
        price: '3'
    },
    {
        name: 'Blondie',
        style: 'blonde',
        abv: '6.5',
        price: '2.3'
    },
    {
        name: 'Saisons in the Sun',
        style: 'saison',
        abv: '4.8',
        price: '2.8'
    },
    {
        name: 'Palebearer',
        style: 'pale ale',
        abv: '4.8',
        price: '2.5'
    },
    {
        name: 'Red Live Redemption',
        style: 'amber',
        abv: '5.3',
        price: '3.2'
    },
    {
        name: 'Lead a Bitter Life',
        style: 'bitter',
        abv: '4.8',
        price: '2.4'
    },
    {
        name: 'Charlie Brown',
        style: 'brown ale',
        abv: '5.2',
        price: '2.2'
    },
    {
        name: 'Stand up and Stout',
        style: 'stout',
        abv: '8.8',
        price: '5'
    },
    {
        name: 'A Lover in Every Porter',
        style: 'porter',
        abv: '6.2',
        price: '4.2'
    },
    {
        name: 'Not Barely Wine',
        style: 'barley wine',
        abv: '12.2',
        price: '8.2'
    }
]


const colors = {
    light: ['weiss', 'blonde', 'saison', 'pale ale'],
    medium: ['amber', 'bitter', 'brown ale'],
    dark: ['stout', 'porter', 'barley wine']
}

gD(products, colors)

function gD(arr, arr2) {
    arr.map((item) => {
        const updateBear = Object.assign(item)
        Object.keys(arr2).forEach(key => {
            if (arr2[key].includes(item.style)) {
                Object.assign(updateBear, key)
                console.log(updateBear)
                // console.log(updateBear)

            }

        })
    })
}

function getColors(arr) {
    const bearNew = products.map((items) => {
        arr.forEach((values) => {
            if (values.style === items.style) {
                let updateBear = Object.assign(items)
                console.log('bear', updateBear)
            }
        })
    })
}
