/**
 * @param {number} n
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (n, p, queries) {
  let map = {}
  for (let i = 0; i < p.length; i++) {
    if (map[p[i][1]] === undefined) {
      map[p[i][1]] = []
    }
    map[p[i][1]].push(p[i][0])
  }
  for (let i = 0; i < n; i++) {
    let queue = []
    if (map[i]) {
      queue = [...map[i]]
    }
    while (queue.length) {
      let sz = queue.length
      for (let j = 0; j < sz; j++) {
        let temp = queue.shift()
        if (map[temp]) {
          for (let k = 0; k < map[temp].length; k++) {
            if (map[i].indexOf(map[temp][k]) === -1) {
              map[i].push(map[temp][k])
              queue.push(map[temp][k])
            }
          }
        }
      }
    }
  }
  let result = []
  for (let i = 0; i < queries.length; i++) {
    if(map[queries[i][1]]) {
      if(map[queries[i][1]].indexOf(queries[i][0]) !== -1) {
        result.push(true)
      } else {
        result.push(false)
      }
    } else {
      result.push(false)
    }
  }
  return result
}
