
"use strict";
const arr = [
  [10, 6, 23],
  [3, 48, 22],
  [11, 8, 6],
];

function getArrayParams(...arr) {
  if (!arr.length) {
		return 0;
  }
 

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((a, b) => (a + b)) / arr.length;
  const avg = number((sum).toFixed(2));
  

  return { min: min, max: max, avg: avg };
}






function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
