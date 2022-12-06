const sayHi = (name, text) => {
    console.log(`${text} ${name}`)
}

sayHi('Hello', 'Jhon')


const sayH2 = (name, text = 'Hello') => {
    console.log(`${text} ${name}`)
}

sayH2('Jonas')

const sayH3 = (name, text, param) => {
    console.log('Your param is =',param)
    for (let i = 0; i < param; i++) {
        console.log(`${text} ${name}`)
    }
}

sayH3('Jonas', 'Hello', 5)


function multiply(a, b) {
    return a * b
}
console.log('Multiply:',multiply(2,4))

function exp(base, exp){
    let result = 1;
    for(let i = 0; i <exp; i++)
    {
        result = result * base;
    }
    return(result);
}
console.log(exp(2,4));

function age (a, min = 18) {
    if (a <= min) {
        console.log('nope')
    }
    else {
        console.log('welcome')
    }

}

age(19)


function numbers(number) {
    return number % 2 === 0 ? "Odd" : "Even"
}

console.log(numbers(3));
console.log(numbers(2));

const ageS = (a, min=18) => {
    if (a <= min) {
        console.log('nope')
    }
    else if(typeof a !== typeof min){
        console.log('Error input')
    }
    else {
        console.log('join')
    }
}
ageS(12)


function even(n) {
    if (n === 0) return 'chet';
    else if (n === 1) return 'nechet';
    else return even(n - 2);
}

console.log(even(20))
console.log(even(142))
console.log(even(1121))

