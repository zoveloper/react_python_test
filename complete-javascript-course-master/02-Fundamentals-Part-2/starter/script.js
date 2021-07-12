'use strict';


// function logger(hi){
//     console.log(`${hi} "I'm june"`)
//     const greet = `${hi} my friend`
//     return greet
// }
// logger()

// const logging = logger('hi')
// console.log(logging)

// function fruitProcessor(apple, banana){
//     console.log(apple, banana )
//     const juice = `Juice with ${apple} apples and ${banana} banana`
//     return juice
// }
// fruitProcessor(1,2)
// const appleBananaJuice = fruitProcessor(3,4)

// console.log(appleBananaJuice)

// console.log(fruitProcessor(3,4))
// console.log(fruitProcessor())

//function declarations
// function calcAge1(birthday){
//     return 2021 - birthday;
// }
// const age=calcAge1(1994)
// console.log(age);

// // anonymous function
// //expression -- function is also  "value" == good
// const calcAge2 = function (birthday){
//     return 2021 - birthday
// }

// const age2 = calcAge2(1994);

// console.log(age, age2)

//"Arrow function"


const calcAge3 = (birthYear) => 2021- birthYear;

console.log(calcAge3(1994))

const retirementYear =(birthYear,firstName) =>{
    const age = 2021-birthYear;
    const year = 65 - age;
    return `${year} years left unitll ${firstName} retire`
}

const junCho = retirementYear(1994, 'Cho')
console.log(junCho)