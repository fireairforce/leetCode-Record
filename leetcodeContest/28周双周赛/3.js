/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function (arr, target) {
  let res = []
  const backtrack = (temp, visited, n, sum) => {
    if (sum === target) {
      let temp = []
      for (let j = 0; j <= n; j++) {
        if (visited[j]) {
          temp.push(arr[j])
        }
      }
      // console.log(temp);
      res.push([...temp])
      return
    }
    for (let i = n; i < temp.length; i++) {
      if (!visited[i]) {
        sum += temp[i]
        visited[i] = 1
        if (i !== temp.length - 1) {
          backtrack(temp, visited, i + 1, sum)
        } else {
          backtrack(temp, visited, i, sum)
        }
        visited[i] = 0
        sum -= temp[i]
      }
    }
  }
  let visited = Array(arr.length).fill(0)
  backtrack(arr, visited, 0, 0)
  let arrStr = arr.join(',')
  console.log(arrStr)
  for (let i = 0; i < res.length; i++) {
    if (!arrStr.includes(res[i].join(','))) {
      res.splice(i, 1)
      i--;
    }
  }
  if (res.length <= 1) {
    return -1
  } else {
    res = res.sort((a, b) => a.length - b.length)
    return res[0].length + res[1].length
  }
}

// console.log(minSumOfLengths([3, 2, 2, 4, 3], 3))
// console.log(minSumOfLengths([4, 3, 2, 6, 2, 3, 4], 6))
