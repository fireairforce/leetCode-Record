/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let res = []
  for (let i = 0; i < n; i++) {
    if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
      res.push('FizzBuzz')
    } else if ((i + 1) % 3 === 0) {
      res.push('Fizz')
    } else if ((i + 1) % 5 === 0) {
      res.push('Buzz')
    } else {
        res.push(`${i + 1}`)
    }
  }
  return res;
};

// console.log(fizzBuzz(15));