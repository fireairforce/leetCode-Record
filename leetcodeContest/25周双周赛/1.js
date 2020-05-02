/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies)
  let res = []
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      res[i] = true
    } else {
      res[i] = false
    }
  }
  return res
}

// console.log(kidsWithCandies([2,3,5,1,3], 3));
// console.log(kidsWithCandies([4,2,1,1,2], 1));
// console.log(kidsWithCandies([12,1,12], 10));
