
"use strict";
const arr = [
  [-99, 99, 10],
  [1, 2, 3, -100, 10],
  [5],
];

function getArrayParams(...arr) {
  if (!arr.length) {
		return 0;
  }
 

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((a, b) => (a + b)) / arr.length;
  const avg = Number((sum).toFixed(2));
  

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
