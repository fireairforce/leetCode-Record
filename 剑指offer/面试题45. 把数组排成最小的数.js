/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
  let res = []
  for (let item of nums) {
    res.push(item + '')
  }
  res.sort((a, b) => {
    return parseInt(a + b) - parseInt(b + a)
  })
  return res.join('')
}

// compareString = (a, b) => {}
// console.log(minNumber([10, 2]))
// console.log(minNumber([3, 30, 34, 5, 9]))
