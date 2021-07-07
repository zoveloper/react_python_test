
// // let js = 'amazing';
// // console.log(40+8+22);

// // console.log('Jonas');
// // console.log(js);


// // let $function =27;
// // let FirstName = "Jonas";
// // let PI = 3.1415;

// // let myFirstJob ='Programming';
// // let myCurrentJob='Teacher';

// // let job1='programmer';
// // let ojb2 = 'teacher';

// // //////

// // let country = 'South Korea';
// // let continent = 'Asia'
// // let population = '50 millions'

// // console.log(country)
// // console.log(continent)
// // console.log(population)

// // let javascriptIsFun = true;

// // console.log(javascriptIsFun)

// // console.log(typeof true)
// // console.log(typeof javascriptIsFun)
// // console.log(typeof 23)
// // console.log(typeof 'Jonas')

// // javascriptIsFun="Yes"
// // console.log(typeof javascriptIsFun)

// // let year;
// // console.log(year)
// // console.log(typeof year)

// // year=1994;
// // console.log(year)
// // console.log(typeof year)
// // console.log(typeof null)



// let language ;
// let isIsland = false;
// let country = 'South Korea';
// let continent = 'Asia'
// let population = '50 millions'

// console.log(typeof language) 
// console.log(typeof country)
// console.log(typeof population)
// console.log(typeof isIsland)

// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
//   Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
//   Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

const marksWeights = 78
const marksHeight = 1.69
const johnWeights = 92
const johnHeight = 1.95
const markBMI= marksWeights/marksHeight **2
const johnBMI=johnWeights/johnHeight **2

const markHigherBMI = markBMI>johnBMI
console.log(markBMI,johnBMI)
console.log(markHigherBMI)