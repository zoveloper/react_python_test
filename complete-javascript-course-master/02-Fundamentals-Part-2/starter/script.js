'use strict';


function logger(hi){
    console.log(`${hi} "I'm june"`)
    const greet = `${hi} my friend`
    return greet
}
logger()

const logging = logger('hi')
console.log(logging)

function fruitProcessor(apple, banana){
    console.log(apple, banana )
    const juice = `Juice with ${apple} apples and ${banana} banana`
    return juice
}
fruitProcessor(1,2)
const appleBananaJuice = fruitProcessor(3,4)

// console.log(appleBananaJuice)

// console.log(fruitProcessor(3,4))
// console.log(fruitProcessor())