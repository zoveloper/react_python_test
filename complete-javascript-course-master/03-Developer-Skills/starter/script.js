// Remember, we're gonna use strict mode in all scripts now!
"use strict";
// const calcTempAmp = function (temp1, temp2) {
//   let tempTotals = temp1.concat(temp2);
//   console.log(tempTotals);

//   let max = tempTotals[0];
//   let min = tempTotals[0];

//   for (let i = 0; i < tempTotals.length; i++) {
//     const curTemp = tempTotals[i];
//     console.log(tempTotals.length);
//     if (typeof curTemp !== "number") continue;

//     debugger;
//     if (tempTotals[i] > max) max = curTemp;
//     if (tempTotals[i] < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// };

// const temp1 = [-11, 4, 2, "error", 322];
// const temp2 = [6, 7, 78, 57];

// const tempAmp = calcTempAmp(temp1, temp2);
// console.log(tempAmp);

// const measuerKe = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: prompt("Degrees Celsius"),
//   };

//   const kelvin = Number(measurement.value) + 273;
//   return kelvin;
// };

// console.log(measuerKe());

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const curTemp = arr[i];

//     console.log(`${curTemp} in ${i + 1}  days`);
//   }
// };
// printForecast(data1);

const printForecast = function (arr) {
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}Celcius in ${i + 1}days`;
  }
  console.log("..." + str);
};

printForecast(data1);
