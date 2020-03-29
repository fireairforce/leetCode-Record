/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
  let res = []
  for (let i = 0; i < rating.length; i++) {
    for (let j = i + 1; j < rating.length; j++) {
      if (rating[j] > rating[i]) {
        res.push([rating[i], rating[j], j, -1])
      } else if (rating[i] === rating[j]) {
        continue
      } else {
        res.push([rating[i], rating[j], j, 0])
      }
    }
  }
  let count = 0
  for (let i = 2; i < rating.length; i++) {
    for (let j = 0; j < res.length; j++) {
      if (i > res[j][2]) {
        if (res[j][3] === -1) {
          if (rating[i] > res[j][1]) {
            count++
          }
        } else if (res[j][3] === 0) {
          if (rating[i] < res[j][1]) {
            count++
          }
        }
      }
    }
  }
  // console.log(res);
  return count
}

// console.log(numTeams([2, 5, 3, 4, 1]))
// console.log(numTeams([2, 1, 3]))
// console.log(numTeams([1, 2, 3, 4]))
