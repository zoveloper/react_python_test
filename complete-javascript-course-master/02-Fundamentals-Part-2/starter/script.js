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


// const calcAge3 = (birthYear) => 2021- birthYear;

// console.log(calcAge3(1994))

// const retirementYear =(birthYear,firstName) =>{
//     const age = 2021-birthYear;
//     const year = 65 - age;
//     return `${year} years left unitll ${firstName} retire`
// }

// const junCho = retirementYear(1994, 'Cho')
// console.log(junCho) 

// function cutFruitPieces(fruit){
//     return fruit*4
// }

// function fruitProcessor(apple,oranges){
//     const applePieces=cutFruitPieces(apple);
//     const orangePieces=cutFruitPieces(oranges);

//     return `total ${applePieces} and total ${orangePieces}`

// }

// const fruitNumber = fruitProcessor(4,5)
// console.log(fruitNumber)


// const calcAge = function (birthYear){
//     return 2021-birthYear;
// }




// const yearsUntilRetirement = function (birthYear,firstName){
//     const age=calcAge(birthYear)
//     const retirement = 65-age;
    
//     if(retirement>0){
//         console.log(`${firstName} retires in ${retirement}`)
//     return retirement;
//     }else{
//         console.log(`${firstName} has already retired`);
//     return -1;
//     }

// }

// const retiring = yearsUntilRetirement(1924,'Cho')
// console.log(retiring)

//coding Challege #1


// const calcAverage = (a,b,c) => (a+b+c)/3;

// const scoreDolhins = calcAverage(3,33,33)
// const scoreKoalas = calcAverage(11,31,11)


// const checkWinner = function(avgDolhins,avgKoalas){

//     console.log(avgDolhins,avgKoalas)
//     if(avgDolhins >= (avgKoalas*2)){
//          console.log(`Dophins win! ${avgDolhins} vs ${avgKoalas}`)

//     }else if(avgKoalas >= (avgDolhins*2)){
//         console.log(`Koalas win! ${avgDolhins} vs ${avgKoalas}`)
//     }
//     else{
//         console.log(`nobody win`)
//     }
// }

// checkWinner(scoreDolhins,scoreKoalas)
// checkWinner(222,666)

// const friend1 = 'Mich'
// const firend2 = 'Steven'
// const friend3 = 'Peter'

// const friends = ['Michael','Steven','Peter'] // array
// console.log(friends)
// console.log(friends[0])
// console.log(friends[2])
// console.log(friends.length-1)
// const years = new Array(1991,12312,123123,123,123123,123,123,1233)
// console.log(years)
// friends[1] = 'Martin2'


// const calcAge = function (birthYear){
//     return 2021 - birthYear
// }
// const years =[1994,1992,1990,1998]
// //Add elements
// const test1 = years.push(1934) // last
// const test2 = years.unshift(1968)
// const test3 = years.unshift(1962) //first
// console.log(test1,test2,test3)

// //Remove emlements
// const test5 = years.shift()
// const test4 = years.pop();
// console.log(test5,test4)

// console.log(years.indexOf(1992))
// console.log(years.includes(1991))


// years.map(year =>(
//     console.log(calcAge(year))
    
// ))

// Coding Challege#2

const bills=[125,555,444]

// const calcTip = function(bill) {

//     if( bill >= 50 && bill <= 300){
//         return bill*0.15
//     }else{
//         return bill*0.2
//     }

// }
const calcTip = function(bill) {

    return bill >=50 && bill <= 300 ? bill*0.15 : bill * 0.2 ;
}

const tips =[]
const tip = tips.push(calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2]))
// const tip = tips.push(calcTip(bills[0]))
// const tip1 = tips.push(calcTip(bills[1]))
// const tip2 = tips.push(calcTip(bills[2]))
console.log(bills,tips)
const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
console.log(totals)