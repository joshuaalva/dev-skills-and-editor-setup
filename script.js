// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2037 - birthYear;

// node -v
// sudo live-server

// problem solving skills... real problem real solution
// in an array of gps coordinates find the two closest points

// 4 step framework
// make sure you 100% understand the problem. ask the right question to get a clear picture of the problem
// divide and conquer: break a big problem into smaller sub problems
// dont be afraid to do as much research as you have to
// for bigger problems, write pseudo-code before writing the actual code

// problem:
// we work for a company building a smart home thermometer. Our most recent task is this: "given an array of temps of one day, calculate the temp altitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) undestanding the problem
// - What is temp amplitude? answer: difference between highest and lowest temp
// - How to compute the max and min temperatures?
// - What does a sensor error? And what to do when it occurs?

// 2) breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find mind value in temp array
// - Subtract min from max (amplitude) and return

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
    // single equal
  }
  console.log(max, min);
  return max - min;
};

// calcTempAmplitude([3, 7, 4, 1, 8]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// problem 2:
// function should now recieve 2 arrays of temps

// 1) undestanding the problem
// - with two arrays, should we implement functionality twice? no. just merge two arrays

// 2) breaking up into sub-problems
// how to merge 2 arrays?
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

const calcTempAmplitude2 = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
    // single equal
  }
  console.log(max, min);
  return max - min;
};

// calcTempAmplitude([3, 7, 4, 1, 8]);
const amplitude2 = calcTempAmplitude2([3, 5, 1], [9, 0, 5]);
console.log(amplitude2);

// Debugging: (fixing errors)
// software bug: defect or problem in a computer program. Basically, any unexpected or unintended behavior of a computer program is a software bug.
// bugs are completely normal in softwware development
// identify > find > fix > prevent
// testing software?

// Debugging with the Console and Breakpoints:
