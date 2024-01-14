"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discr = b ** 2 - 4 * a * c;
  if (a === 0) {
    return 'на ноль делить нельзя';
  } else if (discr > 0) {
    let root1 = (-b + Math.sqrt(discr)) / (2 * a);
    let root2 = (-b - Math.sqrt(discr)) / (2 * a);
    arr.push(root1, root2);
  } else if (discr === 0) {
    let root1 = -b / (2 * a);
    arr.push(root1);
  }
  return arr;
}

solveEquation(0, 2, 3);




function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyInterest = percent / 100 / 12;
  let loanBody = amount - contribution;

  let paymentMonthly = loanBody * (monthlyInterest + (monthlyInterest / (((1 + monthlyInterest) ** countMonths) - 1)));
  let totalBebt = paymentMonthly * countMonths;
  return +totalBebt.toFixed(2);
  }

calculateTotalMortgage(10, 0, 50000, 12);