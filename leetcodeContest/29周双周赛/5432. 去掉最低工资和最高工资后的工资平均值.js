/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  let a = salary.sort((a, b) => a - b)
  a = a.slice(1, a.length - 1)
  return a.reduce((prev, now) => prev + now) / (salary.length - 2)
};
