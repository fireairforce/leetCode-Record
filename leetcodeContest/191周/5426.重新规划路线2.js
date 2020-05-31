/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, arr) {
  let map = new Map()
  let res = 0
  for(let item of arr) {
    if(item[1] === 0) {
      map.set(item[0], 1)
    } else if(item[0] === 0) {
      map.set(item[1], 1)
      res ++
    } else if (map.has(item[0])) {
      map.set(item[1], 1)
      res ++
    } else if (map.has(item[1])) {
      map.set(item[0], 1)
    }
  }
  return res;
};


console.log(
  minReorder(6, [
    [0, 1],
    [1, 3],
    [2, 3],
    [4, 0],
    [4, 5],
  ]),
)
console.log(
  minReorder(5, [
    [1, 0],
    [1, 2],
    [3, 2],
    [3, 4],
  ]),
)
console.log(
  minReorder(3, [
    [1, 0],
    [2, 0],
  ]),
)