/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function (queries, m) {
  let P = []
  for (let i = 1; i <= m; i++) {
    P.push(i)
  }
  let res = []
  for (let i = 0; i < queries.length; i++) {
    for (let j = 0; j < P.length; j++) {
      if (P[j] === queries[i]) {
        res.push(j)
        P.splice(j, 1)
        P.splice(0, 0, queries[i])
        break
      }
    }
  }
  return res
}
// console.log(processQueries([3,1,2,1], 5));
// console.log(processQueries([4,1,2,2], 4));

