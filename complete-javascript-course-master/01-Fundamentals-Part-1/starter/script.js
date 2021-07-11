
// let js = 'amazing';
// console.log(40+8+22);

// console.log('Jonas');
// console.log(js);


// let $function =27;
// let FirstName = "Jonas";
// let PI = 3.1415;

// let myFirstJob ='Programming';
// let myCurrentJob='Teacher';

// let job1='programmer';
// let ojb2 = 'teacher';

// //////

// let country = 'South Korea';
// let continent = 'Asia'
// let population = '50 millions'

// console.log(country)
// console.log(continent)
// console.log(population)

// let javascriptIsFun = true;

// console.log(javascriptIsFun)

// console.log(typeof true)
// console.log(typeof javascriptIsFun)
// console.log(typeof 23)
// console.log(typeof 'Jonas')

// javascriptIsFun="Yes"
// console.log(typeof javascriptIsFun)

// let year;
// console.log(year)
// console.log(typeof year)

// year=1994;
// console.log(year)
// console.log(typeof year)
// console.log(typeof null)



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

// const marksWeights = 78
// const marksHeight = 1.69
// const johnWeights = 92
// const johnHeight = 1.95
// const markBMI= marksWeights/marksHeight **2
// const johnBMI=johnWeights/johnHeight **2

// const markHigherBMI = markBMI>johnBMI
// console.log(markBMI,johnBMI)
// console.log(markHigherBMI)

// const firstName = 'Jonas '
// const job='teacher'
// const birthday = 1991

// console.log(`${job}\n\
// ${birthday}\n\
//  nice
// `)
// console.log(`${job} ${birthday}
// ${birthday}
//  nice
// `)

// const age = 12;
// const isOldEnough =age >= 18;

// if (age >= 18){ 
//     console.log( 'good')}
// else{
//     console.log('sorry')
// }


// const marksWeights = 48
// const marksHeight = 1.69
// const johnWeights = 92
// const johnHeight = 1.95
// const markBMI= marksWeights/marksHeight **2
// const johnBMI=johnWeights/johnHeight **2

// if(markBMI>johnBMI){
// console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`)

// }else{
//     console.log(`John's BMI(${johnBMI.toFixed(1)}) is higher than Mark's!(${markBMI.toFixed(1)})`)
// }

// let n='1'+1;
// n = n-1;
// console.log(n)

// const hasDriverLicense = false
// const hasGoodVision = false

// console.log(hasDriverLicense&&hasGoodVision)
// console.log(hasDriverLicense || hasGoodVision)
// console.log(!hasDriverLicense)

// const shouldDrive = hasGoodVision&&hasDriverLicense
// const getVision = !hasGoodVision&&hasDriverLicense
// if(shouldDrive){
//     console.log('go to drive')
// }else if(getVision){
//     console.log('get glasses')
// }else{
//     console.log('do somethinf')
// }

// const isTired = true 

// if(hasDriverLicense || hasGoodVision||isTired ){
//     console.log('go to drive')
// }else if(getVision){
//     console.log('get glasses')
// }else{
//     console.log('do somethinf')
// }


// const scoreDolphins = ((961+108+32)/3).toFixed(2) ;
// const scoreKoalas = ((961+108+32)/3).toFixed(2) ;
// console.log(scoreDolphins,scoreKoalas)

// if (scoreDolphins > scoreKoalas && scoreDolphins>=100 ){
//     console.log('Dolphins won!')
// }else if( scoreKoalas > scoreDolphins && scoreKoalas>=100){
//     console.log(' Koalas won')
// }else if(scoreKoalas === scoreDolphins&& scoreKoalas>=100){
//     console.log(' Draw')
// }else{
//     console.log('??')
// }

// const day = 'wend2sday'

// switch(day) {
//     case'monday': // day === 'monday' strict mode
//         console.log('Plan course structure')
//         console.log('Go to coding meetup')
//         break;
//     case 'tuesday':
//         console.log('Go to grocery')
//         break
//     case 'wendsday':
//         console.log('Go to Dental')
//         break

//     default:
//         console.log('Not a valid day')
// }

// const age = 21
// const drink = age >= 18 ? 'wine' : 'water' ;

// console.log(drink)

//Coding Challeng #4

// const price = 333
// const tip = price> 50 && price< 300  ? price*0.15 : price* 0.2

// console.log(`The bill is $${price}, the tip was $${tip}, and the total value is $${tip+price}`)

// if (price> 50 && price< 300){
//     console.log((price*1.15).toFixed(0))
// }else{
//     console.log((price*1.2.toFixed(0)))
// }

